#!/usr/bin/env node
// tools/parcours-etudiant.mjs
//
// Graphe des wikilinks de `content/` et mesure du parcours etudiant.
//
// QUESTION POSEE : depuis un point d'entree realiste (l'accueil, ou le hub de
// branche), en ne suivant QUE les liens visibles sur la page ou l'on se trouve,
// combien de clics separent l'etudiant de la fiche qui repond a sa question —
// et le chemin existe-t-il seulement ?
//
// USAGE
//   node tools/parcours-etudiant.mjs              (rapport complet)
//   node tools/parcours-etudiant.mjs --scenarios  (scenarios seuls)
//   node tools/parcours-etudiant.mjs --json       (sortie machine)
//
// RECETTE DE REFERENCE (a comparer au premier lancement — cf. 19/08 suite 4 :
// un test de recette se date, un ecart s'impute d'abord au corpus, ensuite au
// code) :
//   - fiches indexees ......... 242   (mesure du 20/08 : 247 fichiers .md sous
//                                      content/, moins les 5 de templates/)
//   - couples (entree, cible) .  26   (13 cibles x 2 entrees, table ci-dessous)
// Ces deux grandeurs sont mesurables et verifiables. Le nombre de liens, le
// nombre de clics et les itineraires ne sont PAS predits : c'est ce que le
// script est cense apprendre.
//
// CONVENTIONS DU DEPOT QUE CE SCRIPT CONNAIT (cf. 18/08 : un audit qui ignore
// une convention produit du bruit a hauteur de ce qu'il ignore) :
//   - C62 : en cellule de tableau, le pipe d'un wikilink est echappe `\|`.
//           Un lien `[[cible\|libelle]]` est un lien valide, pas un lien mort.
//   - Les embeds `![[...]]` sont des MEDIAS, pas des liens cliquables : exclus.
//   - Le contenu des blocs de code, du code en ligne et des commentaires HTML
//     n'est pas rendu comme un lien : exclu. (Un placeholder dormait deja dans
//     un commentaire HTML le 19/08 — invisible en production.)
//   - Le front matter YAML n'est pas rendu : exclu.
//   - `templates/` est depublie (19/08 suite 4) : exclu de l'index.
//
// CE QUE CE SCRIPT NE MESURE PAS — et qui reste la part de Tim au rendu :
// les popovers au survol, la recherche, la vue graphe, le fil d'Ariane, les
// listings de dossier generes par Quartz, le panneau de backlinks, le rendu
// mobile. Un chemin trouve ici est un chemin qui existe ; un chemin absent ici
// peut exister au rendu par un de ces moyens. Le script mesure les liens
// ECRITS, rien d'autre.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

// ---------------------------------------------------------------------------
// Table des scenarios mesurables
// ---------------------------------------------------------------------------
// Les douze scenarios du parcours etudiant se repartissent en deux familles.
// NEUF ont une cible nommable : la question de l'etudiant a une fiche qui y
// repond, et « combien de clics » est une grandeur. TROIS n'en ont pas
// (« mon capteur renvoie n'importe quoi », « mon moteur manque de couple »,
// « comment ameliorer la reproductibilite ») : la question n'est pas le nombre
// de clics mais l'existence d'une porte depuis un SYMPTOME. Elles se traversent
// a la main, elles ne se mesurent pas. Le script ne couvre donc que les neuf.
//
// `entrees` : l'accueil pour tous (seul point d'entree garanti), plus le hub de
// branche ou l'etudiant se trouve plausiblement quand la question se pose.
// `cibles`  : la ou les fiches qui repondent. Plusieurs quand la reponse est
//             legitimement partagee entre deux fiches.

const SCENARIOS = [
  {
    id: 1,
    question: "On me demande un cahier des charges, je ne sais pas ce que c'est",
    entrees: ['index', 'conduite/index'],
    cibles: ['conduite/proj/cahier-des-charges-fonctionnel'],
  },
  {
    id: 2,
    question: 'Quel microcontroleur pour mon projet ?',
    entrees: ['index', 'embarque/index'],
    cibles: ['embarque/realisation/choisir-le-materiel', 'embarque/mcu/microcontroleur'],
  },
  {
    id: 4,
    question: 'Mon code ne compile pas',
    entrees: ['index', 'embarque/index'],
    cibles: ['embarque/mcu/cpp/cpp-logs', 'embarque/mcu/arduino/arduino-debug'],
  },
  {
    id: 5,
    question: 'Le dossier technique, il contient quoi ?',
    entrees: ['index', 'conduite/index'],
    cibles: ['conduite/proj/dossier-technique'],
  },
  {
    id: 6,
    question: 'Ma PoC elec marche, et apres ?',
    entrees: ['index', 'embarque/index'],
    cibles: ['conduite/proj/preuve-de-concept', 'conduite/proj/specification-technique'],
  },
  {
    id: 7,
    question: "On est au milestone PoC, je n'ai pas ecoute le prof, le wiki peut m'aider ?",
    entrees: ['index', 'conduite/index'],
    cibles: ['conduite/proj/preuve-de-concept'],
  },
  {
    id: 8,
    question: "Comment j'alimente mon montage ?",
    entrees: ['index', 'embarque/index'],
    cibles: ['embarque/alimentation-electronique'],
  },
  {
    id: 9,
    question: 'On me demande une AMDEC',
    entrees: ['index', 'conduite/index'],
    cibles: ['conduite/proj/amdec'],
  },
  {
    id: 11,
    question: 'Je dois faire un PCB, par ou je commence ?',
    entrees: ['index', 'embarque/index'],
    cibles: ['embarque/pcb/pcb', 'embarque/pcb/kicad'],
  },
];

// ---------------------------------------------------------------------------
// Indexation
// ---------------------------------------------------------------------------

const RACINE = process.env.SKILLCODEX_CONTENT || 'content';
const EXCLUS = ['templates'];

function listerMarkdown(racine) {
  const sortie = [];
  (function descendre(dossier) {
    for (const entree of readdirSync(dossier)) {
      const chemin = join(dossier, entree);
      if (statSync(chemin).isDirectory()) {
        const rel = relative(racine, chemin).split(sep).join('/');
        if (EXCLUS.includes(rel.split('/')[0])) continue;
        descendre(chemin);
      } else if (entree.endsWith('.md')) {
        sortie.push(chemin);
      }
    }
  })(racine);
  return sortie.sort();
}

// Slug Quartz : chemin relatif sans extension, separateurs en `/`.
function slugDe(chemin) {
  return relative(RACINE, chemin).split(sep).join('/').replace(/\.md$/, '');
}

// Retire tout ce qui n'est pas rendu comme un lien cliquable.
function texteRendu(brut) {
  let t = brut;
  t = t.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, ''); // front matter YAML
  t = t.replace(/<!--[\s\S]*?-->/g, ''); // commentaires HTML
  t = t.replace(/^ {0,3}(```|~~~)[\s\S]*?^ {0,3}\1[^\n]*$/gm, ''); // blocs de code
  t = t.replace(/`[^`\n]*`/g, ''); // code en ligne
  return t;
}

// Extrait les cibles de liens d'une fiche.
// - wikilinks `[[cible]]`, `[[cible|libelle]]`, `[[cible\|libelle]]` (C62),
//   `[[cible#ancre]]`
// - liens markdown relatifs `[texte](chemin.md)` et `[texte](/chemin)`
// - PAS les embeds `![[...]]` (medias), PAS les URL externes
function extraireLiens(rendu) {
  const liens = [];

  const reWiki = /(!?)\[\[([^\]]+)\]\]/g;
  let m;
  while ((m = reWiki.exec(rendu)) !== null) {
    if (m[1] === '!') continue; // embed : media, pas navigation
    let cible = m[2].replace(/\\\|/g, '|').split('|')[0]; // C62
    cible = cible.split('#')[0].trim();
    if (cible) liens.push(cible);
  }

  const reMd = /(!?)\[[^\]]*\]\(([^)\s]+)\)/g;
  while ((m = reMd.exec(rendu)) !== null) {
    if (m[1] === '!') continue;
    let cible = m[2];
    if (/^(https?:|mailto:|#)/i.test(cible)) continue;
    if (/\.(svg|png|jpe?g|gif|webp|mp4|pdf|docx?|xlsx?|zip)$/i.test(cible)) continue;
    cible = cible.split('#')[0].replace(/\.md$/, '').replace(/^\.\//, '').trim();
    if (cible) liens.push(cible);
  }

  return liens;
}

// Resolution facon Obsidian/Quartz : chemin exact d'abord, puis nom de fichier
// unique. Un nom de fichier ambigu (plusieurs `index.md`) n'est PAS resolu au
// hasard : il est signale.
function construireResolveur(slugs) {
  const parSlug = new Set(slugs);
  const parNom = new Map();
  for (const s of slugs) {
    const n = s.split('/').pop();
    if (!parNom.has(n)) parNom.set(n, []);
    parNom.get(n).push(s);
  }
  return function resoudre(cible) {
    const c = cible.replace(/^\//, '').replace(/\.md$/, '');
    if (parSlug.has(c)) return { slug: c, statut: 'ok' };
    const nom = c.split('/').pop();
    const candidats = parNom.get(nom);
    if (!candidats) return { slug: null, statut: 'mort' };
    if (candidats.length === 1) return { slug: candidats[0], statut: 'ok' };
    const filtres = candidats.filter((s) => s.endsWith('/' + c) || s === c);
    if (filtres.length === 1) return { slug: filtres[0], statut: 'ok' };
    return { slug: null, statut: 'ambigu', candidats };
  };
}

// ---------------------------------------------------------------------------
// Parcours
// ---------------------------------------------------------------------------

function bfs(graphe, depart) {
  const vus = new Map([[depart, null]]);
  const file = [depart];
  while (file.length) {
    const courant = file.shift();
    for (const suivant of graphe.get(courant) || []) {
      if (!vus.has(suivant)) {
        vus.set(suivant, courant);
        file.push(suivant);
      }
    }
  }
  return vus;
}

function itineraire(vus, cible) {
  if (!vus.has(cible)) return null;
  const chemin = [];
  let n = cible;
  while (n !== null && n !== undefined) {
    chemin.unshift(n);
    n = vus.get(n);
  }
  return chemin;
}

// ---------------------------------------------------------------------------
// Programme
// ---------------------------------------------------------------------------

const fichiers = listerMarkdown(RACINE);
const slugs = fichiers.map(slugDe);
const resoudre = construireResolveur(slugs);

const graphe = new Map();
const liensMorts = [];
const liensAmbigus = [];
let nbLiens = 0;

for (const fichier of fichiers) {
  const source = slugDe(fichier);
  const rendu = texteRendu(readFileSync(fichier, 'utf8'));
  const sorties = new Set();
  for (const brut of extraireLiens(rendu)) {
    const r = resoudre(brut);
    nbLiens += 1;
    if (r.statut === 'ok') {
      if (r.slug !== source) sorties.add(r.slug);
    } else if (r.statut === 'mort') {
      liensMorts.push({ source, cible: brut });
    } else {
      liensAmbigus.push({ source, cible: brut, candidats: r.candidats });
    }
  }
  graphe.set(source, [...sorties]);
}

const entrants = new Map(slugs.map((s) => [s, 0]));
for (const [, sorties] of graphe) {
  for (const s of sorties) entrants.set(s, (entrants.get(s) || 0) + 1);
}

const culsDeSac = slugs.filter((s) => (graphe.get(s) || []).length === 0);
const orphelines = slugs.filter((s) => entrants.get(s) === 0 && s !== 'index');

// Atteignabilite depuis l'accueil
const depuisAccueil = bfs(graphe, 'index');
const inatteignables = slugs.filter((s) => !depuisAccueil.has(s));

// Couples (entree, cible)
const cacheBfs = new Map();
function bfsCache(depart) {
  if (!cacheBfs.has(depart)) cacheBfs.set(depart, bfs(graphe, depart));
  return cacheBfs.get(depart);
}

const resultats = [];
for (const sc of SCENARIOS) {
  for (const entree of sc.entrees) {
    for (const cible of sc.cibles) {
      const vus = bfsCache(entree);
      const chemin = itineraire(vus, cible);
      resultats.push({
        scenario: sc.id,
        question: sc.question,
        entree,
        cible,
        atteignable: chemin !== null,
        clics: chemin ? chemin.length - 1 : null,
        itineraire: chemin,
      });
    }
  }
}

// ---------------------------------------------------------------------------
// Sortie
// ---------------------------------------------------------------------------

const args = new Set(process.argv.slice(2));

if (args.has('--json')) {
  console.log(
    JSON.stringify(
      {
        fiches: slugs.length,
        liens: nbLiens,
        couples: resultats.length,
        resultats,
        liensMorts,
        liensAmbigus,
        culsDeSac,
        orphelines,
        inatteignables,
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

console.log('PARCOURS ETUDIANT — graphe des wikilinks de `' + RACINE + '`');
console.log('');
console.log('  fiches indexees ........... ' + slugs.length + '   (recette : 242)');
console.log('  couples traites ........... ' + resultats.length + '    (recette : 26)');
console.log('  liens sortants comptes .... ' + nbLiens);
console.log('  liens morts ............... ' + liensMorts.length);
console.log('  liens ambigus ............. ' + liensAmbigus.length);
console.log('');

if (!args.has('--scenarios')) {
  console.log('--- SANTE DU GRAPHE -------------------------------------------------');
  console.log('');
  console.log('Culs-de-sac (aucun lien sortant) : ' + culsDeSac.length);
  for (const s of culsDeSac) console.log('    ' + s);
  console.log('');
  console.log('Fiches orphelines (aucun lien entrant) : ' + orphelines.length);
  for (const s of orphelines) console.log('    ' + s);
  console.log('');
  console.log("Inatteignables depuis l'accueil : " + inatteignables.length);
  for (const s of inatteignables) console.log('    ' + s);
  console.log('');
  if (liensMorts.length) {
    console.log('Liens morts : ' + liensMorts.length);
    for (const l of liensMorts) console.log('    ' + l.source + '  ->  ' + l.cible);
    console.log('');
  }
  if (liensAmbigus.length) {
    console.log('Liens ambigus (nom de fichier non unique) : ' + liensAmbigus.length);
    for (const l of liensAmbigus) {
      console.log('    ' + l.source + '  ->  ' + l.cible + '  [' + l.candidats.join(', ') + ']');
    }
    console.log('');
  }
}

console.log('--- SCENARIOS -------------------------------------------------------');
for (const sc of SCENARIOS) {
  console.log('');
  console.log('#' + sc.id + '  « ' + sc.question + ' »');
  for (const r of resultats.filter((x) => x.scenario === sc.id)) {
    const tete = '   [' + r.entree + ']  ->  ' + r.cible;
    if (!r.atteignable) {
      console.log(tete + '   AUCUN CHEMIN');
    } else {
      console.log(tete + '   ' + r.clics + ' clic' + (r.clics > 1 ? 's' : ''));
      console.log('        ' + r.itineraire.join('  >  '));
    }
  }
}
console.log('');
