#!/usr/bin/env node
// tools/archive-journal-2506.mjs
// One-off — archivage 1-pour-1 : deplace L ENTREE DU 25/06, seule entree de
// pied de JOURNAL.md, vers le HAUT de JOURNAL-archive.md, AU-DESSUS du
// commentaire de groupe 08/06 -> 19/06 -> ordre antichronologique preserve.
//
// NOM DU FICHIER. Le patron archive-journal-0630.mjs se nomme par la DATE DE
// SEANCE. Ici la date de seance n est pas connue au moment de l ecriture :
// C119 impose de la lire sur l horloge, et l horloge se lit au lancement. Le
// script est donc nomme par l ENTREE QU IL DEPLACE (2506), qui est connue et
// ne sera archivee qu une fois. La date de seance est calculee A L EXECUTION
// (voir STAMP) et non composee de memoire.
//
// POURQUOI UN SCRIPT ET PAS DES edit_file : motif du patron, inchange. La
// prose du JOURNAL contient des sequences d echappement LITTERALES (\u00e9,
// \n, \| dans les wikilinks de tableau) que le newText d edit_file
// INTERPRETE. Un slice brut de chaine deplace le bloc fidelement.
//
// CE QUE CE SCRIPT DURCIT PAR RAPPORT AU PATRON
//   1. GARDE D UNICITE sur chaque ancre et chaque remplacement. Le patron se
//      contentait d un indexOf : une ancre presente DEUX fois y passait
//      silencieusement sur la premiere. Lecon du 27/08 (suite 4) : une garde
//      d unicite est la mesure d un inventaire, pas seulement une protection.
//   2. ANCRES TOLERANTES AU CRLF (\r?\n) et AUCUNE ancre ne contient d espace
//      devant ; : ! ? %. La mesure du 29/08 porte sur content/**, PAS sur les
//      fichiers de pilotage a la racine : rien ne dit que JOURNAL.md n a pas
//      d espace insecable devant ses deux-points. Les ancres evitent la zone
//      au lieu de parier dessus.
//   3. GARDE DE CARDINALITE : le bloc deplace doit contenir EXACTEMENT une
//      entree. Une garde qui teste l inclusion ne teste pas l extension
//      (incident du 28/08, 332 lignes de TODO) : ici on compte, on n inclut pas.
//
// Fail-safe : toute ancre / tout remplacement manquant ou non unique arrete
// le script SANS rien ecrire. Sauvegardes .bak creees avant ecriture.
//
// Lancer : node tools/archive-journal-2506.mjs   (depuis n importe ou)

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const JOURNAL = join(root, 'JOURNAL.md');
const ARCHIVE = join(root, 'JOURNAL-archive.md');

// ---- Horodatage lu sur l horloge (C119), jamais compose de memoire ----
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

// ---- Outils d ancrage a garde d unicite ----
function indexUnique(s, re, label) {
  const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
  const hits = [...s.matchAll(g)];
  if (hits.length === 0) die('ancre introuvable : ' + label);
  if (hits.length > 1) die('ancre NON UNIQUE (' + hits.length + ' occurrences) : ' + label);
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
  if (n > 1) die('remplacement NON UNIQUE (' + n + ' occurrences) : ' + label);
  return s.replace(ancien, nouveau);
}

// ---- Ancres, recopiees depuis une lecture MCP FRAICHE des deux fichiers ----
// Aucune ne porte d espace devant une ponctuation double (voir en-tete, 2).
const RE_DEBUT = /^## 2026-06-25 — Intégration des médias familles MCU/m;
const RE_PIED = /^---\r?\n\r?\n<!-- Sessions antérieures au 25\/06 déplacées/m;

const ARCH_TITRE_OLD = '# JOURNAL — Archive (sessions du 2026-05-19 au 2026-06-19)';
const ARCH_TITRE_NEW = '# JOURNAL — Archive (sessions du 2026-05-19 au 2026-06-25)';
const ARCH_ANCRE = '<!-- DÉBUT DES SESSIONS 08/06 → 19/06 (archivées le 30/06';

const NOUVEAU_GROUPE =
  '<!-- DÉBUT DE LA SESSION 25/06 (archivée le ' + STAMP +
  ', archivage 1-pour-1 — entrée unique). -->';

// ---- JOURNAL.md : extraire l entree, tronquer, mettre a jour les notes ----
const journalOrig = readFileSync(JOURNAL, 'utf8');

const debut = indexUnique(journalOrig, RE_DEBUT, 'titre de l entree 25/06');
const pied = indexUnique(journalOrig, RE_PIED, 'commentaire de pied du JOURNAL');
if (pied < debut) die('ordre des ancres inattendu dans JOURNAL.md');

const bloc = journalOrig.slice(debut, pied).replace(/\s+$/, '');

// GARDE DE CARDINALITE : exactement une entree, pas "au moins une".
const nEntrees = (bloc.match(/^## 2026-/gm) || []).length;
if (nEntrees !== 1) die('le bloc contient ' + nEntrees + ' entrees, attendu exactement 1');

let nouveauJournal = journalOrig.slice(0, debut) + journalOrig.slice(pied);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  'antérieures au 25/06 archivées',
  'antérieures au 27/06 archivées',
  'blurb d en-tete (archivees)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  '30/06, sessions 08/06 → 19/06).',
  STAMP + ', session 25/06).',
  'blurb d en-tete (derniere coupe)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  'antérieures au 25/06 déplacées',
  'antérieures au 27/06 déplacées',
  'commentaire de pied (deplacees)'
);
nouveauJournal = remplacerUnique(
  nouveauJournal,
  '30/06 — MAJ documentaire, sessions 08/06 → 19/06 archivées en bloc.',
  STAMP + ' — archivage 1-pour-1, session 25/06 archivée en bloc.',
  'commentaire de pied (derniere passe)'
);

// Le marqueur d insertion des entrees neuves doit survivre a la troncature.
if (!nouveauJournal.includes('<!-- INSERT_JOURNAL_HERE -->')) {
  die('marqueur INSERT_JOURNAL_HERE perdu par la troncature');
}

// ---- JOURNAL-archive.md : inserer AU-DESSUS du groupe 08/06 -> 19/06 ----
const archiveOrig = readFileSync(ARCHIVE, 'utf8');
let archive = remplacerUnique(archiveOrig, ARCH_TITRE_OLD, ARCH_TITRE_NEW, 'titre de l archive');
archive = remplacerUnique(
  archive,
  ARCH_ANCRE,
  NOUVEAU_GROUPE + '\n\n' + bloc + '\n\n' + ARCH_ANCRE,
  'point d insertion archive (groupe 08/06 -> 19/06)'
);

// ---- Sauvegardes + ecritures (archive d abord : pire cas = duplication) ----
writeFileSync(JOURNAL + '.bak', journalOrig, 'utf8');
writeFileSync(ARCHIVE + '.bak', archiveOrig, 'utf8');
writeFileSync(ARCHIVE, archive, 'utf8');
writeFileSync(JOURNAL, nouveauJournal, 'utf8');

console.log('OK - archivage de l entree 25/06 effectue.');
console.log('  Horloge lue      : ' + ISO + '  ' + HEURE + '   (etiquette : ' + STAMP + ')');
console.log('  Entrees deplacees: ' + nEntrees + ' (attendu : 1)');
console.log('  Bloc deplace     : ' + kb(bloc));
console.log('  JOURNAL.md       : ' + kb(journalOrig) + '  ->  ' + kb(nouveauJournal));
console.log('  JOURNAL-archive  : ' + kb(archiveOrig) + '  ->  ' + kb(archive));
console.log('  Sauvegardes      : JOURNAL.md.bak + JOURNAL-archive.md.bak');
console.log('  (supprimer les .bak une fois le rendu verifie.)');
