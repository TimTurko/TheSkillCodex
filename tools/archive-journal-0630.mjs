#!/usr/bin/env node
// tools/archive-journal-0630.mjs
// One-off — MAJ documentaire du 30/06 : archivage du bloc 08/06 -> 19/06.
// Deplace en bloc les 22 entrees 19/06 -> 08/06 (de JOURNAL.md, par le bas)
// vers le HAUT de JOURNAL-archive.md, AU-DESSUS du commentaire de groupe
// beta (06/06 -> 07/06) -> ordre antichronologique global preserve.
//
// Pourquoi un script et pas des edit_file : le bloc fait ~90 ko (tres
// au-dessus du seuil pratique MCP ~30 ko) et contient des sequences
// d'echappement LITTERALES dans la prose (\u00e9, \n, \| , \ — recits de
// bugs d'encodage). edit_file INTERPRETE ces echappements dans son newText
// et corromprait l'archive. Un slice brut de chaine deplace le bloc
// fidelement, sans interpretation ni matching d'ancre fragile.
//
// Fail-safe : si une ancre / un remplacement echoue, le script s'arrete
// SANS rien ecrire. Sauvegardes .bak creees avant ecriture.
//
// Lancer : node tools/archive-journal-0630.mjs   (depuis n'importe ou)

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const JOURNAL = join(root, 'JOURNAL.md');
const ARCHIVE = join(root, 'JOURNAL-archive.md');

// ---- Ancres (verbatim, recopiees depuis lecture MCP fraiche) ----
const BLOCK_START   = '## 2026-06-19';
const TRAILER_START = '---\n\n<!-- Sessions antérieures au 08/06 déplacées';
const ARCH_INSERT   = '---\n\n<!-- DÉBUT DES SESSIONS 06/06 → 07/06';

const TITLE_OLD = '# JOURNAL — Archive (sessions du 2026-05-19 au 2026-06-07)';
const TITLE_NEW = '# JOURNAL — Archive (sessions du 2026-05-19 au 2026-06-19)';

const NEW_GROUP_MARKER =
  '<!-- DÉBUT DES SESSIONS 08/06 → 19/06 (archivées le 30/06 — ' +
  'MAJ documentaire ; ordre interne antichronologique). -->';

// Remplacements de blurb/commentaire (sous-chaines uniques, sans backtick) :
const J_R1_OLD = 'antérieures au 08/06 archivées';
const J_R1_NEW = 'antérieures au 25/06 archivées';
const J_R2_OLD = 'β du 10/06, sessions 06/06 → 07/06 suite 3).';
const J_R2_NEW = '30/06, sessions 08/06 → 19/06).';
const J_R3_OLD = 'antérieures au 08/06 déplacées';
const J_R3_NEW = 'antérieures au 25/06 déplacées';
const J_R4_OLD = '10/06 — coupe β (nettoyage documentaire), sessions 06/06 → 07/06 (suite 3) archivées en bloc.';
const J_R4_NEW = '30/06 — MAJ documentaire, sessions 08/06 → 19/06 archivées en bloc.';

const die = (m) => { console.error('ABORT : ' + m + ' — aucun fichier modifié.'); process.exit(1); };
const kb  = (s) => (Buffer.byteLength(s, 'utf8') / 1024).toFixed(1) + ' ko';
const mustReplace = (s, a, b, label) => {
  const r = s.replace(a, b);
  if (r === s) die('remplacement introuvable : ' + label);
  return r;
};

// ---- JOURNAL.md : extraire le bloc, tronquer, mettre a jour les notes ----
const journalOrig = readFileSync(JOURNAL, 'utf8');

const cut = journalOrig.indexOf(BLOCK_START);
const trl = journalOrig.indexOf(TRAILER_START);
if (cut === -1) die('ancre de coupe (19/06) introuvable dans JOURNAL.md (déjà archivé ?)');
if (trl === -1) die('ancre de pied (commentaire 08/06) introuvable dans JOURNAL.md');
if (trl < cut)  die('ordre des ancres inattendu dans JOURNAL.md');

const block = journalOrig.slice(cut, trl).replace(/\s+$/, '');   // 19/06 .. 08/06
const nEntries = (block.match(/## 2026-/g) || []).length;

// JOURNAL apres troncature = tout avant le bloc + le pied (commentaire) conserve.
let newJournal = journalOrig.slice(0, cut) + journalOrig.slice(trl);
newJournal = mustReplace(newJournal, J_R1_OLD, J_R1_NEW, 'blurb date (archivées)');
newJournal = mustReplace(newJournal, J_R2_OLD, J_R2_NEW, 'blurb dernière coupe');
newJournal = mustReplace(newJournal, J_R3_OLD, J_R3_NEW, 'commentaire de pied (déplacées)');
newJournal = mustReplace(newJournal, J_R4_OLD, J_R4_NEW, 'commentaire de pied (dernière passe)');

// ---- JOURNAL-archive.md : inserer le bloc AU-DESSUS du commentaire beta ----
const archiveOrig = readFileSync(ARCHIVE, 'utf8');
let archive = mustReplace(archiveOrig, TITLE_OLD, TITLE_NEW, "titre de l'archive");
archive = mustReplace(
  archive,
  ARCH_INSERT,
  NEW_GROUP_MARKER + '\n\n' + block + '\n\n' + ARCH_INSERT,
  'point d\u0027insertion archive (commentaire β)'
);

// ---- Sauvegardes + ecritures (archive d'abord : pire cas = duplication) ----
writeFileSync(JOURNAL + '.bak', journalOrig, 'utf8');
writeFileSync(ARCHIVE + '.bak', archiveOrig, 'utf8');
writeFileSync(ARCHIVE, archive, 'utf8');
writeFileSync(JOURNAL, newJournal, 'utf8');

console.log('OK — archivage 08/06 → 19/06 effectué.');
console.log('  Entrees deplacees : ' + nEntries + ' (attendu : 22)');
console.log('  JOURNAL.md      : ' + kb(journalOrig) + '  ->  ' + kb(newJournal));
console.log('  JOURNAL-archive : ' + kb(archiveOrig) + '  ->  ' + kb(archive));
console.log('  Sauvegardes : JOURNAL.md.bak + JOURNAL-archive.md.bak');
console.log('  (supprime les .bak une fois le rendu verifie.)');
