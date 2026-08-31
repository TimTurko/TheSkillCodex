#!/usr/bin/env node
// tools/coupe-journal-chantier-3008s12.mjs
// One-off - COUPE C128 A LA FRONTIERE DU CHANTIER DE TRADUCTION.
// Seance 12 du 30/08. Nomme par son LOT et non par sa seule date (regle du
// 30/08, seance 10 : un artefact de seance se nomme par son lot).
//
// Deplace en bloc TOUTES les entrees de JOURNAL.md situees SOUS l entree
// "## 2026-08-30 (suite 11)" vers le HAUT de JOURNAL-archive.md, au-dessus
// du marqueur de groupe 27/06 -> 17/08 pose par la coupe du 29/08. Ordre
// antichronologique global preserve.
//
// POURQUOI L ANCRE EST UN TITRE ET NON UNE DATE. C128 coupe a une FRONTIERE
// DE CHANTIER. Le chantier de traduction s ouvre le 22/08 et se ferme le
// 30/08 (suite 10) : la frontiere tombe A L INTERIEUR d une journee, entre
// deux entrees de meme date. archive-journal-coupe-2208.mjs comparait des
// dates (SEUIL = '2026-08-22') ; ici une comparaison de dates ne separe rien.
// L ancre est donc le TITRE EXACT de la premiere entree deplacee, et la
// garde d extension se reecrit en consequence (voir garde 2).
//
// CE QUI RESTE DANS LE JOURNAL. Une seule entree : "## 2026-08-30 (suite 11)".
// C128 : "le JOURNAL porte le chantier en cours et rien d autre". La suite 11
// est l entree qui OUVRE ce qui suit la traduction - sa ligne "Prochaine
// session" est le brief de la seance 12 - et l ouverture de seance de
// CLAUDE.md lit precisement cette ligne. La garder est une necessite de
// procedure, pas une preference.
//
// QUATRE GARDES.
//   1. --dry OBLIGATOIRE D ABORD. Le script ENUMERE ce qu il va deplacer -
//      chaque titre, un par un - et n ecrit rien. La lecture porte sur
//      l inventaire, pas sur la prose (lecon du 28/08 : un fichier ne se
//      coupe pas sans avoir ete lu, et a 737 ko la lecture integrale est
//      hors de portee).
//   2. GARDE D EXTENSION, ET ELLE NE PEUT PAS ETRE UNE COMPARAISON DE DATES
//      MONOTONE. Le fichier porte une rupture d ordre PREEXISTANTE :
//      "## 2026-08-25" est loge entre "## 2026-08-24 (suite 2)" et
//      "## 2026-08-24 (suite)". La garde verifie donc (a) que l ancre est
//      unique, (b) qu elle est bien le DEUXIEME titre du fichier, (c) que
//      toutes les entrees deplacees ont une date <= a celle de l entree
//      gardee, (d) que la liste gardee est exactement celle qui est
//      DECLAREE ci-dessous, titre par titre. Une garde d inclusion n en est
//      pas une (incident du 28/08, 332 lignes de TODO detruites).
//   3. GARDE D UNICITE sur chaque ancre et chaque remplacement.
//   4. GARDE DE CONSERVATION : le bloc extrait doit porter exactement autant
//      de titres que l inventaire en annonce.
//
// Fail-safe : toute anomalie arrete le script SANS rien ecrire. Sauvegardes
// .bak creees avant ecriture.
//
// Lancer :  node tools/coupe-journal-chantier-3008s12.mjs --dry   (n ecrit rien)
//           node tools/coupe-journal-chantier-3008s12.mjs         (ecrit)
//
// Surcharges de chemin, POUR LE TEST NEGATIF DELIBERE UNIQUEMENT :
//           --journal <chemin>   --archive <chemin>
// Elles permettent de faire mordre les gardes sur des copies hors arbre,
// sans toucher au depot.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const argv = process.argv.slice(2);
const DRY = argv.includes('--dry');
const opt = (nom, defaut) => {
  const i = argv.indexOf(nom);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : defaut;
};
const JOURNAL = opt('--journal', join(root, 'JOURNAL.md'));
const ARCHIVE = opt('--archive', join(root, 'JOURNAL-archive.md'));

// L entree gardee, DECLAREE. La garde 2(d) compare la liste calculee a
// cette declaration : si le fichier a bouge, le script s arrete.
const TITRE_GARDE = '## 2026-08-30 (suite 11)';
const TITRE_PREMIER_DEPLACE = '## 2026-08-30 (suite 10)';

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
  titre: ('## ' + m[1] + m[2]).trim(),
}));
if (!titres.length) die('aucun titre d entree trouve dans JOURNAL.md');

// GARDE 2(a)+(b) : l ancre est unique, et c est le DEUXIEME titre du fichier.
const rangs = titres
  .map((t, i) => (t.titre.startsWith(TITRE_PREMIER_DEPLACE) ? i : -1))
  .filter((i) => i !== -1);
if (rangs.length === 0) die('ancre de frontiere introuvable : ' + TITRE_PREMIER_DEPLACE);
if (rangs.length > 1) die('ancre de frontiere NON UNIQUE (' + rangs.length + ') : ' + TITRE_PREMIER_DEPLACE);
const premierDeplace = rangs[0];
if (premierDeplace !== 1) {
  die('la frontiere est au rang ' + premierDeplace + ', attendu 1 (une seule entree gardee)');
}

const aDeplacer = titres.slice(premierDeplace);
const aGarder = titres.slice(0, premierDeplace);

// GARDE 2(d) : la liste gardee est exactement celle qui est DECLAREE.
if (aGarder.length !== 1 || !aGarder[0].titre.startsWith(TITRE_GARDE)) {
  console.error('Entrees gardees calculees :');
  for (const t of aGarder) console.error('  ' + t.titre.slice(0, 100));
  die('la liste gardee ne correspond pas a la declaration (' + TITRE_GARDE + ')');
}

// GARDE 2(c) : rien de POSTERIEUR a l entree gardee ne doit trainer sous la
// frontiere. Comparaison a la date de l entree gardee, PAS de monotonie
// interne : le fichier porte une rupture d ordre preexistante au 24-25/08.
const dateGardee = aGarder[0].date;
const intrus = aDeplacer.filter((t) => t.date > dateGardee);
if (intrus.length) {
  console.error('Entrees posterieures au ' + dateGardee + ' situees SOUS la frontiere :');
  for (const t of intrus) console.error('  ' + t.titre);
  die(intrus.length + ' entree(s) posterieure(s) sous la frontiere - invariant rompu');
}

const RE_PIED = /^---\r?\n\r?\n<!-- Sessions antérieures/m;
const pied = indexUnique(journalOrig, RE_PIED, 'commentaire de pied du JOURNAL');
const coupe = aDeplacer[0].index;
if (pied < coupe) die('ordre des ancres inattendu : pied avant la frontiere');

const bloc = journalOrig.slice(coupe, pied).replace(/\s+$/, '');

// GARDE 4 : conservation. Le bloc porte exactement l inventaire annonce.
const nBloc = (bloc.match(/^## 2026-/gm) || []).length;
if (nBloc !== aDeplacer.length) {
  die('le bloc porte ' + nBloc + ' entrees, l inventaire en annonce ' + aDeplacer.length);
}

const plusRecenteArchivee = aDeplacer[0].date;
const plusAncienneDeplacee = aDeplacer[aDeplacer.length - 1].date;

/* ---------------- Rapport, toujours imprime ---------------- */

console.log('=== COUPE C128 DU JOURNAL - frontiere de chantier ===');
console.log('  Horloge lue : ' + ISO + '  ' + HEURE + '   (etiquette : ' + STAMP + ')');
console.log('  Frontiere   : premiere entree deplacee = ' + TITRE_PREMIER_DEPLACE);
console.log('');
console.log('  entrees dans JOURNAL.md   : ' + titres.length);
console.log('  GARDEES                   : ' + aGarder.length);
console.log('  DEPLACEES                 : ' + aDeplacer.length);
console.log('  plus ancienne gardee      : ' + aGarder[0].titre.replace(/^## /, '').split(' —')[0]);
console.log('  plus recente archivee     : ' + aDeplacer[0].titre.replace(/^## /, '').split(' —')[0]);
console.log('  plus ancienne archivee    : ' + plusAncienneDeplacee);
console.log('');
console.log('  --- LES ' + aGarder.length + ' ENTREES GARDEES');
for (const t of aGarder) console.log('    + ' + t.titre.slice(0, 100));
console.log('');
console.log('  --- LES ' + aDeplacer.length + ' ENTREES DEPLACEES');
for (const t of aDeplacer) console.log('    - ' + t.titre.slice(0, 100));
console.log('');
console.log('  --- DECOMPTE PAR DATE DES ENTREES DEPLACEES');
{
  const parDate = new Map();
  for (const t of aDeplacer) parDate.set(t.date, (parDate.get(t.date) || 0) + 1);
  const cles = [...parDate.keys()].sort().reverse();
  for (const c of cles) console.log('    ' + c + ' : ' + parDate.get(c));
  console.log('    TOTAL : ' + aDeplacer.length);
}
console.log('');
console.log('  bloc deplace : ' + kb(bloc));

/* ---------------- Reecritures ---------------- */

let nouveauJournal = journalOrig.slice(0, coupe) + journalOrig.slice(pied);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  'antérieures au 22/08 archivées dans',
  'antérieures au 30/08 (suite 11) archivées dans',
  'blurb d en-tete (archivees)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  'ouverture du chantier de traduction ;',
  'chantier de traduction mené à son terme (quatorze lots, 242 fiches, 291 261 mots) ;',
  'blurb d en-tete (contenu archive)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  'dernière coupe : 29/08, sessions 27/06 → 17/08).',
  'dernière coupe : ' + STAMP + ', sessions 22/08 → 30/08 (suite 10)).',
  'blurb d en-tete (derniere coupe)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  'Sessions antérieures au 22/08 déplacées',
  'Sessions antérieures au 30/08 (suite 11) déplacées',
  'commentaire de pied (deplacees)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  'Dernière passe : 29/08 — coupe datée au 22/08, sessions 27/06 → 17/08 archivées en bloc.',
  'Dernière passe : ' + STAMP + ' — coupe C128 à la frontière du chantier de traduction, ' +
    'sessions 22/08 → 30/08 (suite 10) archivées en bloc.',
  'commentaire de pied (derniere passe)'
);

if (!nouveauJournal.includes('<!-- INSERT_JOURNAL_HERE -->')) {
  die('marqueur INSERT_JOURNAL_HERE perdu par la coupe');
}
if (!nouveauJournal.includes(TITRE_GARDE)) {
  die('entree gardee perdue par la coupe : ' + TITRE_GARDE);
}

const ARCH_TITRE_OLD = 'au 2026-08-17)';
const ARCH_TITRE_NEW = 'au 2026-08-30)';
const ARCH_ANCRE = '<!-- DÉBUT DES SESSIONS 27/06 → 17/08 (archivées le 29/08';
const NOUVEAU_GROUPE =
  '<!-- DÉBUT DES SESSIONS 22/08 → 30/08 (suite 10), CHANTIER DE TRADUCTION ' +
  '(archivées le ' + STAMP + ', coupe C128 à la frontière de chantier — ' +
  'ordre interne antichronologique). -->';

const archiveOrig = readFileSync(ARCHIVE, 'utf8');
let archive = remplacerUnique(archiveOrig, ARCH_TITRE_OLD, ARCH_TITRE_NEW, 'titre de l archive');
archive = remplacerUnique(
  archive,
  ARCH_ANCRE,
  NOUVEAU_GROUPE + '\n\n' + bloc + '\n\n' + ARCH_ANCRE,
  'point d insertion archive (marqueur 27/06)'
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
console.log('OK - coupe C128 effectuee. Sauvegardes : ' + JOURNAL + '.bak + ' + ARCHIVE + '.bak');
