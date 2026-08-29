#!/usr/bin/env node
// tools/archive-journal-coupe-2208.mjs
// One-off - COUPE DATEE au 22/08, arbitrage Tim (b) du 29/08.
//
// Deplace en bloc TOUTES les entrees de JOURNAL.md anterieures au 2026-08-22
// vers le HAUT de JOURNAL-archive.md, AU-DESSUS du marqueur de groupe 25/06.
// Ordre antichronologique global preserve. Le 22/08 est la date d ouverture
// du chantier de traduction : c est une frontiere de chantier, pas une date
// choisie pour son rendement en kilo-octets.
//
// POURQUOI CETTE COUPE. Mesure du 29/08 : l entree archivee par la rotation
// 1-pour-1 pesait 3,7 ko, une entree de seance recente en pese 5 a 8. La
// rotation FAIT GROSSIR le fichier de 2 a 4 ko par seance, alors qu elle
// existe pour le contenir. Le JOURNAL etait a 470,7 ko contre un seuil de
// 100 ko pose au paragraphe 7 du prompt projet.
//
// LA FRONTIERE EST CALCULEE, PAS ANCREE A LA MAIN. Le script lit les dates
// des titres et coupe au premier titre anterieur au seuil. Une ancre ecrite
// de memoire sur un fichier de 470 ko serait un pari ; une date se compare.
//
// TROIS GARDES, ET LA LECON DU 28/08 EST LA PREMIERE.
//   1. --dry OBLIGATOIRE D ABORD. "Un fichier ne se coupe pas sans avoir ete
//      lu en entier" : a 470 ko la lecture integrale est hors de portee, donc
//      le script ENUMERE ce qu il va deplacer - chaque titre, un par un - et
//      n ecrit rien. La lecture porte sur l inventaire, pas sur la prose.
//   2. GARDE D INVARIANT, ET C EST UNE EXTENSION, PAS UNE INCLUSION. Une fois
//      la frontiere trouvee, le script verifie que TOUTES les entrees qui
//      suivent sont elles aussi anterieures au seuil. Une garde d inclusion
//      n en est pas une (incident du 28/08, 332 lignes de TODO detruites
//      parce qu on avait teste que la region CONTIENT un marqueur sans
//      tester ou elle s arrete).
//   3. GARDE D UNICITE sur chaque ancre et chaque remplacement, comme dans
//      archive-journal-2506.mjs.
//
// Fail-safe : toute anomalie arrete le script SANS rien ecrire. Sauvegardes
// .bak creees avant ecriture.
//
// Lancer :  node tools/archive-journal-coupe-2208.mjs --dry   (n ecrit rien)
//           node tools/archive-journal-coupe-2208.mjs         (ecrit)

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const JOURNAL = join(root, 'JOURNAL.md');
const ARCHIVE = join(root, 'JOURNAL-archive.md');

const DRY = process.argv.includes('--dry');
const SEUIL = '2026-08-22'; // entrees STRICTEMENT anterieures = archivees

const d = new Date();
const p2 = (n) => String(n).padStart(2, '0');
const STAMP = p2(d.getDate()) + '/' + p2(d.getMonth() + 1);
const ISO = d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate());
const HEURE = p2(d.getHours()) + ':' + p2(d.getMinutes());

const die = (m) => {
  console.error('ABORT : ' + m + ' - aucun fichier modifie.');
  process.exit(1);
};
const kb = (s) => (Buffer.byteLength(s, 'utf8') / 1024).toFixed(1) + ' ko';

function indexUnique(s, re, label) {
  const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
  const hits = [...s.matchAll(g)];
  if (hits.length === 0) die('ancre introuvable : ' + label);
  if (hits.length > 1) die('ancre NON UNIQUE (' + hits.length + ') : ' + label);
  return hits[0].index;
}

function remplacerUnique(s, ancien, nouveau, label) {
  let n = 0;
  let i = s.indexOf(ancien);
  while (i !== -1) {
    n += 1;
    i = s.indexOf(ancien, i + 1);
  }
  if (n === 0) die('remplacement introuvable : ' + label);
  if (n > 1) die('remplacement NON UNIQUE (' + n + ') : ' + label);
  return s.replace(ancien, nouveau);
}

/* ---------------- JOURNAL : inventaire et frontiere ---------------- */

const journalOrig = readFileSync(JOURNAL, 'utf8');

const RE_TITRE = /^## (\d{4}-\d{2}-\d{2})([^\n]*)$/gm;
const titres = [...journalOrig.matchAll(RE_TITRE)].map((m) => ({
  index: m.index,
  date: m[1],
  texte: ('## ' + m[1] + m[2]).trim(),
}));
if (!titres.length) die('aucun titre d entree trouve dans JOURNAL.md');

const premierVieux = titres.findIndex((t) => t.date < SEUIL);
if (premierVieux === -1) die('aucune entree anterieure au ' + SEUIL + ' - rien a couper');

const aDeplacer = titres.slice(premierVieux);
const aGarder = titres.slice(0, premierVieux);

// GARDE 2 : extension, pas inclusion. Rien de recent ne doit trainer sous la
// frontiere - sinon l invariant antichronologique du fichier est faux et la
// coupe emporterait une entree qu on voulait garder.
const intrus = aDeplacer.filter((t) => t.date >= SEUIL);
if (intrus.length) {
  console.error('Entrees >= ' + SEUIL + ' situees SOUS la frontiere :');
  for (const t of intrus) console.error('  ' + t.texte);
  die(intrus.length + ' entree(s) recente(s) sous la frontiere - invariant rompu');
}

const RE_PIED = /^---\r?\n\r?\n<!-- Sessions antérieures au 27\/06 déplacées/m;
const pied = indexUnique(journalOrig, RE_PIED, 'commentaire de pied du JOURNAL');
const coupe = aDeplacer[0].index;
if (pied < coupe) die('ordre des ancres inattendu : pied avant la frontiere');

const bloc = journalOrig.slice(coupe, pied).replace(/\s+$/, '');
const nBloc = (bloc.match(/^## 2026-/gm) || []).length;
if (nBloc !== aDeplacer.length) {
  die('le bloc porte ' + nBloc + ' entrees, l inventaire en annonce ' + aDeplacer.length);
}

const plusRecenteArchivee = aDeplacer[0].date;
const plusAncienneGardee = aGarder.length ? aGarder[aGarder.length - 1].date : '(aucune)';

/* ---------------- Rapport, toujours imprime ---------------- */

console.log('=== COUPE DATEE DU JOURNAL - seuil ' + SEUIL + ' ===');
console.log('  Horloge lue : ' + ISO + '  ' + HEURE + '   (etiquette : ' + STAMP + ')');
console.log('');
console.log('  entrees dans JOURNAL.md   : ' + titres.length);
console.log('  GARDEES (>= seuil)        : ' + aGarder.length);
console.log('  DEPLACEES (< seuil)       : ' + aDeplacer.length);
console.log('  plus ancienne gardee      : ' + plusAncienneGardee);
console.log('  plus recente archivee     : ' + plusRecenteArchivee);
console.log('');
console.log('  --- LES ' + aGarder.length + ' ENTREES GARDEES');
for (const t of aGarder) console.log('    + ' + t.texte.slice(0, 100));
console.log('');
console.log('  --- LES ' + aDeplacer.length + ' ENTREES DEPLACEES');
for (const t of aDeplacer) console.log('    - ' + t.texte.slice(0, 100));
console.log('');
console.log('  bloc deplace : ' + kb(bloc));

/* ---------------- Reecritures ---------------- */

let nouveauJournal = journalOrig.slice(0, coupe) + journalOrig.slice(pied);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  'antérieures au 27/06 archivées',
  'antérieures au 22/08 archivées',
  'blurb d en-tete (archivees)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  'sweep liens rouges pré-publication ;',
  'sweep liens rouges pré-publication, relecture de fond des modules, ' +
    'prises de vue, ouverture du chantier de traduction ;',
  'blurb d en-tete (contenu archive)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  '29/08, session 25/06).',
  STAMP + ', sessions 27/06 → ' + plusRecenteArchivee + ').',
  'blurb d en-tete (derniere coupe)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  'antérieures au 27/06 déplacées',
  'antérieures au 22/08 déplacées',
  'commentaire de pied (deplacees)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  '29/08 — archivage 1-pour-1, session 25/06 archivée en bloc.',
  STAMP + ' — coupe datée au 22/08, sessions 27/06 → ' + plusRecenteArchivee +
    ' archivées en bloc.',
  'commentaire de pied (derniere passe)'
);

if (!nouveauJournal.includes('<!-- INSERT_JOURNAL_HERE -->')) {
  die('marqueur INSERT_JOURNAL_HERE perdu par la coupe');
}

const ARCH_TITRE_OLD = 'au 2026-06-25)';
const ARCH_TITRE_NEW = 'au ' + plusRecenteArchivee + ')';
const ARCH_ANCRE = '<!-- DÉBUT DE LA SESSION 25/06 (archivée le 29/08';
const NOUVEAU_GROUPE =
  '<!-- DÉBUT DES SESSIONS 27/06 → ' + plusRecenteArchivee + ' (archivées le ' +
  STAMP + ', coupe datée au ' + SEUIL + ' — ordre interne antichronologique). -->';

const archiveOrig = readFileSync(ARCHIVE, 'utf8');
let archive = remplacerUnique(archiveOrig, ARCH_TITRE_OLD, ARCH_TITRE_NEW, 'titre de l archive');
archive = remplacerUnique(
  archive,
  ARCH_ANCRE,
  NOUVEAU_GROUPE + '\n\n' + bloc + '\n\n' + ARCH_ANCRE,
  'point d insertion archive (marqueur 25/06)'
);

console.log('');
console.log('  JOURNAL.md      : ' + kb(journalOrig) + '  ->  ' + kb(nouveauJournal));
console.log('  JOURNAL-archive : ' + kb(archiveOrig) + '  ->  ' + kb(archive));

if (DRY) {
  console.log('');
  console.log('  --dry : RIEN N A ETE ECRIT. Toutes les ancres et tous les');
  console.log('  remplacements ont ete resolus - la passe live ne peut plus');
  console.log('  echouer que sur un fichier modifie entre les deux lancements.');
  process.exit(0);
}

writeFileSync(JOURNAL + '.bak', journalOrig, 'utf8');
writeFileSync(ARCHIVE + '.bak', archiveOrig, 'utf8');
writeFileSync(ARCHIVE, archive, 'utf8');
writeFileSync(JOURNAL, nouveauJournal, 'utf8');

console.log('');
console.log('OK - coupe datee effectuee. Sauvegardes : JOURNAL.md.bak + JOURNAL-archive.md.bak');
