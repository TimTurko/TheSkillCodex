#!/usr/bin/env node
/**
 * audit-portes-famille.mjs — Audit des liens transverses -> fiches de famille
 *
 * MOTIF SURVEILLE (releve le 19/08). Une fiche NON-FAMILLE (trame, notion [T],
 * hub transverse) qui a besoin d'un concept renvoie vers la fiche d'UNE famille
 * alors que le meme concept existe dans une autre. Deux formes :
 *
 *   A. LE CRENEAU VIDE   aucune notion [T] ne porte le concept, la fiche
 *                        transverse se rabat sur la famille faute de mieux.
 *                        Corrige par la CREATION d'une notion.
 *                        Exemple : `programmer-l-embarque` ->
 *                        `arduino-programmation-non-bloquante` (corrige 19/08).
 *
 *   B. LA PORTE BORGNE   la notion [T] existe et pointe vers une seule famille
 *                        alors que le jumeau existe. Corrige par l'AJOUT du
 *                        lien manquant. Exemple : `potentiometre` ->
 *                        `arduino-servomoteur` sans `micropython-servomoteur`.
 *
 * Une porte est LEGITIME quand la fiche cite toutes les familles qui portent le
 * concept : le parcours a le droit de renvoyer vers un module, c'est son role.
 *
 * CONVENTIONS DU DEPOT QUE CE SCRIPT CONNAIT (sans elles il rend du bruit ;
 * cf. 18/08, ou un audit ignorant C62 a annonce 67 liens morts pour 5 reels) :
 *
 *   C62  le pipe est echappe (\|) dans les cellules de tableau markdown.
 *        [[arduino-gpio\|GPIO]] designe la meme cible que [[arduino-gpio|GPIO]].
 *   -    les blocs de code et le code inline ne portent pas de lien reel.
 *   -    templates/ est depublie (ignorePatterns) : hors perimetre.
 *
 * FAUX POSITIFS CONNUS, exclus par defaut et signales separement. Ils ne sont
 * pas des exceptions de confort : chacun a une raison structurelle.
 *
 *   cpp/*            le C++ EST l'ecosysteme Arduino. Reclamer un jumeau
 *                    MicroPython a `cpp-boucles` n'a aucun sens.
 *   suffixe          `esp8266-arduino-core` et `stm32-arduino-core` partagent
 *   "arduino-core"   le suffixe sans partager le sujet : collision de nommage.
 *   ide.md           apparie deux LANGAGES (Arduino / MicroPython), pas huit
 *                    familles de cartes.
 *
 * EXCLUSIONS CIBLEES (19/08). Meme nature, mais posees sur le TRIPLET
 * (fiche, concept, famille manquante) et non sur la paire : 3e borne de C94 vue
 * du cote des cibles, le suffixe est partage, le sujet ne l est pas. Retirer la
 * paire entiere masquerait un vrai jumeau absent sur la meme ligne.
 *
 *   wokwi -> gpio        Wokwi simule le Pico (microcontroleur), pas le SBC
 *   / raspberry-pi       Raspberry Pi. wokwi cite deja arduino+esp32+micropython.
 *
 *   manipulation-de-bits Le Cas particulier de la fiche est explicitement AVR
 *   -> timers            (TCCR1B, configurer un timer PAR SES REGISTRES) et
 *   / micropython        machine.Timer n expose aucun registre.
 *
 * Le script ne corrige rien : il rend une liste arbitrable. Il rapporte
 * TOUJOURS le nombre de fiches balayees, pas seulement le nombre de resultats
 * (acquis du 19/08 : le perimetre d'abord, le resultat ensuite).
 *
 * Usage :
 *   node tools/audit-portes-famille.mjs              defauts candidats
 *   node tools/audit-portes-famille.mjs --tout       ajoute portes legitimes
 *                                                    et faux positifs detailles
 *
 * Exit 0 toujours : aucun de ces constats n'est bloquant pour la publication.
 */

import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep, basename } from 'node:path';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'content');
const TOUT = process.argv.includes('--tout');

// Dossiers de famille. Ordre DECROISSANT de longueur : `raspberry-pi` doit etre
// teste avant `pi`-quoi-que-ce-soit, et `esp8266` avant `esp32` ne suffirait pas
// si un prefixe etait le prefixe d'un autre. Tri explicite plutot qu'implicite.
const FAMILLES = [
  'raspberry-pi',
  'micropython',
  'esp8266',
  'arduino',
  'esp32',
  'stm32',
  'teensy',
  'xiao',
].sort((a, b) => b.length - a.length);

function walk(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (e.isFile() && e.name.endsWith('.md')) acc.push(full);
  }
  return acc;
}

const webPath = (abs) => relative(CONTENT, abs).split(sep).join('/');

// Neutralise blocs de code et code inline. Ici la longueur n'a pas besoin
// d'etre preservee (pas de report de numero de ligne), on retire donc.
const stripCode = (t) =>
  t.replace(/^```[\s\S]*?^```/gm, '').replace(/`[^`\n]*`/g, '');

// Decoupe un slug en [famille, concept], ou null si ce n'est pas une fiche
// prefixee par une famille.
function decoupe(slug) {
  for (const f of FAMILLES) {
    if (slug.startsWith(f + '-')) return [f, slug.slice(f.length + 1)];
  }
  return null;
}

/* ---------- inventaire : qui porte quel concept ---------- */

const fichiers = walk(CONTENT).filter((f) => !webPath(f).startsWith('templates/'));

const concepts = new Map(); // concept -> Set(familles qui ont la fiche)
const dansFamille = new Set(); // chemins web des fiches situees DANS un dossier famille

for (const f of fichiers) {
  const web = webPath(f);
  const segments = web.split('/');
  if (segments.some((s) => FAMILLES.includes(s))) dansFamille.add(web);

  const d = decoupe(basename(web, '.md'));
  if (!d) continue;
  const [fam, concept] = d;
  if (!concepts.has(concept)) concepts.set(concept, new Set());
  concepts.get(concept).add(fam);
}

/* ---------- collecte : liens emis par les fiches NON-famille ---------- */

const WIKILINK = /(?<!!)\[\[([^\]\[]+?)\]\]/g;
const cites = new Map(); // fiche -> Map(concept -> Set(familles citees))
let nHubs = 0;
let nPrefixes = 0;

const sources = fichiers.filter((f) => !dansFamille.has(webPath(f)));

for (const f of sources) {
  const fiche = webPath(f);
  const texte = stripCode(readFileSync(f, 'utf8'));

  for (const m of texte.matchAll(WIKILINK)) {
    // C62 : le pipe peut etre echappe. Les deux formes designent la meme cible.
    const cible = m[1].split(/\\?\|/)[0].split('#')[0].replace(/\\+$/, '').trim();
    const slug = cible.split('/').pop();

    if (FAMILLES.includes(slug)) {
      nHubs += 1; // hub de famille nu : porte par nature, jamais un defaut
      continue;
    }
    const d = decoupe(slug);
    if (!d) continue;
    nPrefixes += 1;

    const [fam, concept] = d;
    if (!cites.has(fiche)) cites.set(fiche, new Map());
    const parConcept = cites.get(fiche);
    if (!parConcept.has(concept)) parConcept.set(concept, new Set());
    parConcept.get(concept).add(fam);
  }
}

/* ---------- classement ---------- */

// Exclusions ciblees : voir l en-tete. Une entree retire UNE famille du calcul
// des manquants pour UNE paire (fiche, concept), pas la paire entiere.
const EXCLUSIONS = [
  {
    fiche: 'embarque/simulation/wokwi.md',
    concept: 'gpio',
    famille: 'raspberry-pi',
    motif: 'Wokwi simule le Pico, pas le SBC Raspberry Pi',
  },
  {
    fiche: 'embarque/mcu/manipulation-de-bits.md',
    concept: 'timers',
    famille: 'micropython',
    motif: 'Cas particulier AVR (registres) ; machine.Timer n expose aucun registre',
  },
];

function exclusionCiblee(fiche, concept, famille) {
  return (
    EXCLUSIONS.find(
      (e) => e.fiche === fiche && e.concept === concept && e.famille === famille
    ) ?? null
  );
}

function fauxPositif(fiche, concept) {
  if (fiche.includes('/cpp/')) return 'module cpp/ : le C++ est l ecosysteme Arduino';
  if (concept === 'arduino-core') return 'collision de suffixe arduino-core';
  if (basename(fiche) === 'ide.md') return 'appariement de langages, pas de cartes';
  return null;
}

const legitimes = [];
const candidats = [];
const exclus = [];

for (const [fiche, parConcept] of cites) {
  for (const [concept, familles] of parConcept) {
    const dispo = concepts.get(concept) ?? new Set();
    const bruts = [...dispo].filter((f) => !familles.has(f)).sort();
    const retires = bruts.filter((f) => exclusionCiblee(fiche, concept, f));
    const manquants = bruts.filter((f) => !retires.includes(f));
    const ligne = { fiche, concept, cites: [...familles].sort(), manquants, retires };

    if (!manquants.length) {
      if (retires.length) {
        exclus.push({
          ...ligne,
          motif: exclusionCiblee(fiche, concept, retires[0]).motif,
        });
      } else {
        legitimes.push(ligne);
      }
      continue;
    }
    const motif = fauxPositif(fiche, concept);
    if (motif) exclus.push({ ...ligne, motif });
    else candidats.push(ligne);
  }
}

const tri = (a, b) =>
  a.fiche.localeCompare(b.fiche) || a.concept.localeCompare(b.concept);
candidats.sort(tri);
legitimes.sort(tri);
exclus.sort(tri);

/* ---------- rapport ---------- */

console.log('=== AUDIT DES PORTES DE FAMILLE ===');
console.log(fichiers.length + ' fiches indexees (templates/ exclu)');
console.log(sources.length + ' fiches NON-famille balayees');
console.log(dansFamille.size + ' fiches de famille, hors perimetre par construction');
console.log('');
console.log(nPrefixes + ' liens vers une fiche famille-*, ' + nHubs + ' vers un hub nu');
console.log('');

console.log('--- CANDIDATS (' + candidats.length + ' sur ' +
  new Set(candidats.map((c) => c.fiche)).size + ' fiches) ---');
console.log('Un jumeau existe et n est pas cite. Creneau vide (creer une notion)');
console.log('ou porte borgne (ajouter le lien) : l arbitrage reste humain.');
console.log('');
for (const c of candidats) {
  console.log(
    '  ' + c.fiche.padEnd(46) + c.concept.padEnd(28) +
    'cite ' + c.cites.join('+').padEnd(20) + 'manque ' + c.manquants.join('+') +
    (c.retires.length ? '   [exclu : ' + c.retires.join('+') + ']' : '')
  );
}
console.log('');

console.log('--- FAUX POSITIFS ECARTES (' + exclus.length + ') ---');
if (TOUT) {
  for (const e of exclus) {
    console.log('  ' + e.fiche.padEnd(46) + e.concept.padEnd(28) + e.motif);
  }
} else {
  const parMotif = new Map();
  for (const e of exclus) parMotif.set(e.motif, (parMotif.get(e.motif) ?? 0) + 1);
  for (const [motif, n] of parMotif) console.log('  ' + String(n).padStart(3) + '  ' + motif);
  console.log('  (--tout pour le detail)');
}
console.log('');

if (TOUT) {
  console.log('--- PORTES LEGITIMES (' + legitimes.length + ') ---');
  for (const l of legitimes) {
    console.log('  ' + l.fiche.padEnd(46) + l.concept.padEnd(28) + l.cites.join('+'));
  }
  console.log('');
}

console.log('=== BILAN ===');
const paires = candidats.length + legitimes.length + exclus.length;
console.log('  ' + paires + ' paires (fiche, concept) examinees');
console.log('  ' + legitimes.length + ' portes completes');
console.log('  ' + exclus.length + ' faux positifs structurels');
console.log('  ' + candidats.length + ' candidats a arbitrer');
process.exit(0);
