#!/usr/bin/env node
// tools/archive-journal-0607.mjs
// One-off — archivage « coupe alpha » du 07/06 (nettoyage pre-publication).
// Deplace en bloc les 11 entrees 28/05 -> 06/05 (suite) de JOURNAL.md
// vers le haut de JOURNAL-archive.md (ordre antichronologique preserve).
//
// Pourquoi un script et pas des edit_file : le bloc fait ~46 ko (au-dessus du
// seuil pratique MCP) et contient un caractere herite U+FFFD ; un slice brut
// le deplace fidelement et atomiquement, sans matching d'ancre fragile.
//
// Fail-safe : si une ancre est introuvable, le script s'arrete SANS rien
// ecrire. Des sauvegardes .bak sont creees avant ecriture.
//
// Lancer : node tools/archive-journal-0607.mjs   (depuis n'importe ou)

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const JOURNAL = join(root, 'JOURNAL.md');
const ARCHIVE = join(root, 'JOURNAL-archive.md');

const CUT_ANCHOR     = '## 2026-06-05 (suite) — Relecture/enrichissement';
const COMMENT_ANCHOR = '<!-- Sessions antérieures au 28/05';
const INTRO_OLD      = 'Sessions antichronologiques antérieures au 28/05 archivées';
const INTRO_NEW      = 'Sessions antichronologiques antérieures au 06/06 archivées';
const TITLE_OLD      = '# JOURNAL — Archive (sessions du 2026-05-19 au 2026-05-28)';
const TITLE_NEW      = '# JOURNAL — Archive (sessions du 2026-05-19 au 2026-06-05)';

const NEW_COMMENT =
  '<!-- Sessions antérieures au 06/06 déplacées dans `JOURNAL-archive.md` ' +
  "lors des nettoyages documentaires successifs (détail des lots dans l'intro " +
  "de l'archive et les marqueurs de groupe). Dernière passe : 07/06 — coupe α " +
  '(nettoyage pré-publication), sessions 28/05 → 06/05 (suite) archivées en bloc. -->';

const GROUP_MARKER =
  '<!-- DÉBUT DES SESSIONS 28/05 → 05/06 ' +
  '(archivées le 07/06, coupe α — nettoyage pré-publication ; ' +
  'ordre interne antichronologique). -->';

const die = (m) => { console.error('ABORT : ' + m + ' — aucun fichier modifié.'); process.exit(1); };
const kb  = (s) => (Buffer.byteLength(s, 'utf8') / 1024).toFixed(1) + ' ko';

// ---- JOURNAL.md : extraire le bloc, tronquer, recommenter ----
let journal = readFileSync(JOURNAL, 'utf8');
journal = journal.replace(INTRO_OLD, INTRO_NEW); // note de tete (1re occurrence)

const cut = journal.indexOf(CUT_ANCHOR);
const com = journal.indexOf(COMMENT_ANCHOR);
if (cut === -1) die('ancre de coupe introuvable dans JOURNAL.md (déjà archivé ?)');
if (com === -1) die('commentaire de pied introuvable dans JOURNAL.md');
if (com < cut)  die('ordre des ancres inattendu dans JOURNAL.md');

const keep  = journal.slice(0, cut);                        // ... 06/06 base + "\n\n---\n\n"
const block = journal.slice(cut, com).replace(/\n+---\n+$/, '').replace(/\s+$/, '');
const nEntries = (block.match(/## 2026-/g) || []).length;
const newJournal = keep + NEW_COMMENT + '\n';

// ---- JOURNAL-archive.md : inserer le bloc en tete (apres l'intro) ----
const archiveOrig = readFileSync(ARCHIVE, 'utf8');
let archive = archiveOrig.replace(TITLE_OLD, TITLE_NEW);
if (archive === archiveOrig) console.warn("Note : titre de l'archive inchangé (déjà à jour ?).");

const first = archive.indexOf('\n## 2026-');
if (first === -1) die('aucune entrée datée trouvée dans JOURNAL-archive.md');
const aIntro = archive.slice(0, first).replace(/\n+$/, '');
const aRest  = archive.slice(first);                        // "\n## <plus recente>..."
const newArchive = aIntro + '\n\n' + GROUP_MARKER + '\n\n' + block + '\n\n---\n' + aRest;

// ---- Sauvegardes + ecritures ----
writeFileSync(JOURNAL + '.bak', journal, 'utf8');
writeFileSync(ARCHIVE + '.bak', archiveOrig, 'utf8');
writeFileSync(ARCHIVE, newArchive, 'utf8'); // archive d'abord (gagne le bloc)
writeFileSync(JOURNAL, newJournal, 'utf8');  // puis troncature (pire cas = duplication)

console.log('OK — coupe α effectuée.');
console.log(`  Entrées déplacées : ${nEntries} (attendu : 11)`);
console.log(`  JOURNAL.md      : ${kb(journal)}  ->  ${kb(newJournal)}`);
console.log(`  JOURNAL-archive : ${kb(archiveOrig)}  ->  ${kb(newArchive)}`);
console.log('  Sauvegardes : JOURNAL.md.bak + JOURNAL-archive.md.bak');
console.log('  (supprime les .bak une fois le rendu vérifié.)');
