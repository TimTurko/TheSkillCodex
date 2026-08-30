#!/usr/bin/env node
// puces-tiret.mjs - COMPTEUR DE REFERENCE DES PUCES A TIRET.
//
// ------------------------------------------------------------------------
// POURQUOI CE FICHIER EXISTE
// ------------------------------------------------------------------------
// La reference "puces a tiret du corpus" a ete publiee a trois clotures
// avec sa POPULATION - 248 fichiers FR, 227 puis 235 EN - et la
// population etait juste au fichier pres. Son MOTIF, lui, n a jamais ete
// ecrit : il vivait dans un script de seance jetable (C114), reecrit de
// zero a chaque serie. Resultat mesure le 30/08 (seance 7, lot 11) : la
// reference FR 995 / 172 et EN 917 / 153 n est reproductible par AUCUN
// des deux motifs plausibles, qui l encadrent sans la rendre.
//
//   motif A   FR 946 / 167     EN 886 / 153
//   motif B   FR 1033 / 173    EN 972 / 159
//   publiee   FR 995 / 172     EN 917 / 153
//
// Candidate du 30/08 (lot 11), section 8 de conventions.md : UN COMPTEUR
// DE REFERENCE PUBLIE SA POPULATION ET SON MOTIF, TOUS DEUX DANS SA
// PROPRE SORTIE. Ce fichier est cette candidate mise en code, et il
// applique aussi la regle du 29/08 (suite 8) : une regle qui contraint un
// geste mecanique se loge dans le code qui execute ce geste, pas dans une
// phrase de README ou de JOURNAL.
//
// ------------------------------------------------------------------------
// USAGE
// ------------------------------------------------------------------------
//   node tools/puces-tiret.mjs --corpus
//   node tools/puces-tiret.mjs --corpus --motif B
//   node tools/puces-tiret.mjs --fiches embarque/mcu/esp32/esp32-idf.md,en/...
//
//   --corpus    balaie les deux populations et rend, par langue :
//               puces, porteuses, fichiers.
//   --fiches    echantillon nomme : rend le compte FICHE PAR FICHE, plus
//               le total. C est le mode de l epreuve C110 - un motif se
//               teste sur un echantillon nomme AVANT de compter, et
//               l echantillon se choisit pour contenir ce qui pourrait
//               le faire mordre a tort.
//   --motif     A (defaut) ou B. B n existe que pour ETRE FAUX : c est le
//               test negatif deliberé du motif A. Voir le tableau ci-dessus.
//
// Aucune ecriture. Aucun effet de bord. Sortie sur stdout.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const RACINE = 'content';
const args = process.argv.slice(2);

const CORPUS = args.includes('--corpus');
const iFiches = args.indexOf('--fiches');
const iMotif = args.indexOf('--motif');
const MOTIF = iMotif >= 0 && (args[iMotif + 1] || '').toUpperCase() === 'B' ? 'B' : 'A';

// ------------------------------------------------------------------------
// LE MOTIF, EN UN SEUL ENDROIT
// ------------------------------------------------------------------------
// Ces quatre constantes SONT la definition du compteur. Elles sont
// imprimees telles quelles en tete de sortie : il n existe pas d autre
// endroit ou lire ce que l outil compte.

const PUCE = /^\s*[-*]\s/;                 // ligne de puce (tiret ou etoile)
const TIRET = ' — ';                  // em dash U+2014 ENTOURE D ESPACES
const CLOTURE = /^\s*(```|~~~)/;           // ouverture/fermeture de bloc de code
const TITRE = /^(#{1,6})\s+(.*?)\s*$/;     // titre de section, avec son rang

const SECTIONS_A = ['Voir aussi', 'Aller plus loin', 'See also', 'Going further'];
const SECTIONS_B = ['Voir aussi', 'See also'];
const SECTIONS = MOTIF === 'B' ? SECTIONS_B : SECTIONS_A;

// Compte les LIGNES de puce porteuses dans un texte. L unite est la
// LIGNE et non l occurrence : la reference dit "946 puces sur 167
// porteuses", soit des lignes et des fichiers.
function compter(texte) {
  const lignes = texte.split(/\r?\n/);
  let dansCode = false;
  let exclue = false;      // on est dans une section hors perimetre
  let rangExclu = 0;       // rang du titre qui a ouvert l exclusion
  let n = 0;

  for (const ligne of lignes) {
    if (CLOTURE.test(ligne)) { dansCode = !dansCode; continue; }
    if (dansCode) continue;

    const mT = ligne.match(TITRE);
    if (mT) {
      const rang = mT[1].length;
      const nom = mT[2].replace(/\s*[#]+\s*$/, '').trim();
      if (exclue && rang <= rangExclu) exclue = false;
      if (SECTIONS.includes(nom)) { exclue = true; rangExclu = rang; }
      continue;
    }
    if (exclue) continue;

    if (PUCE.test(ligne) && ligne.includes(TIRET)) n += 1;
  }
  return n;
}

function balayer(dir, dedans) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...balayer(p, dedans));
    else if (e.endsWith('.md') && dedans(p)) out.push(p);
  }
  return out;
}

const estEn = (p) => relative(RACINE, p).split(sep)[0] === 'en';

function entete() {
  console.log('=== PUCES A TIRET - COMPTEUR DE REFERENCE ===');
  console.log('');
  console.log('  MOTIF ' + MOTIF + ', ecrit ici et nulle part ailleurs :');
  console.log('    ligne de puce            : ' + PUCE);
  console.log('    doit contenir            : "' + TIRET + '"  (U+0020 U+2014 U+0020)');
  console.log('    hors blocs clotures      : ' + CLOTURE);
  console.log('    hors sections            : ' + SECTIONS.map((s) => '## ' + s).join(', '));
  console.log('    une section exclue court de son titre au prochain titre de rang <= le sien');
  console.log('    unite comptee            : la LIGNE de puce, pas l occurrence');
  if (MOTIF === 'B') {
    console.log('    /!\\ LE MOTIF B N EXISTE QUE POUR ETRE FAUX : test negatif du motif A.');
  }
  console.log('');
}

if (iFiches >= 0) {
  const liste = (args[iFiches + 1] || '').split(',').map((s) => s.trim()).filter(Boolean);
  entete();
  console.log('  POPULATION : echantillon nomme de ' + liste.length + ' fiche(s), passees en argument.');
  console.log('');
  let tot = 0;
  for (const rel of liste) {
    const p = join(RACINE, rel.replace(/\//g, sep));
    let n;
    try { n = compter(readFileSync(p, 'utf8')); }
    catch { console.log('  ' + rel.padEnd(58) + '  ABSENTE'); continue; }
    tot += n;
    console.log('  ' + rel.padEnd(58) + '  ' + String(n).padStart(4));
  }
  console.log('  ' + '-'.repeat(64));
  console.log('  ' + ('TOTAL (' + liste.length + ' fiches)').padEnd(58) + '  ' + String(tot).padStart(4));
} else if (CORPUS) {
  entete();
  for (const [langue, dedans] of [['FR', (p) => !estEn(p)], ['EN', estEn]]) {
    const fichiers = balayer(RACINE, dedans);
    let puces = 0;
    let porteuses = 0;
    for (const p of fichiers) {
      const n = compter(readFileSync(p, 'utf8'));
      if (n > 0) { puces += n; porteuses += 1; }
    }
    console.log('  ' + langue + ' - population : ' + (langue === 'FR'
      ? 'content/**/*.md HORS content/en/'
      : 'content/en/**/*.md'));
    console.log('    fichiers   : ' + fichiers.length);
    console.log('    porteuses  : ' + porteuses);
    console.log('    PUCES      : ' + puces);
    console.log('');
  }
} else {
  console.error('usage : node tools/puces-tiret.mjs --corpus [--motif A|B]');
  console.error('        node tools/puces-tiret.mjs --fiches a.md,b.md [--motif A|B]');
  process.exit(2);
}
