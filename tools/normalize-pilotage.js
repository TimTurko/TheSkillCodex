#!/usr/bin/env node
// tools/normalize-pilotage.js
//
// Nettoyage des fichiers de pilotage TheSkillCodex (TODO / JOURNAL / conventions / BACKLOG / couverture).
// Retire les caracteres invisibles ambigus qui font echouer les anchors edit_file via MCP :
//   - NBSP fin    U+202F  ->  espace normal
//   - NBSP normal U+00A0  ->  espace normal
//   - ZWSP        U+200B  ->  retire
//   - BOM         U+FEFF  ->  retire (en tete uniquement)
//   - CRLF / CR isole     ->  LF
//
// Usage :
//   node tools/normalize-pilotage.js          (corrige et reporte)
//   node tools/normalize-pilotage.js --check  (rapport seul, exit 1 si trouve)
//
// Idempotent : 2e execution sans changement = 0 modification.
// Script ESM (le depot a "type": "module" via Quartz).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// Liste des fichiers de pilotage a normaliser, chemin relatif a la racine du depot.
// Modifier ici si nouveaux fichiers de pilotage ou si renommage.
const TARGETS = [
  'TODO.md',
  'BACKLOG.md',
  'JOURNAL.md',
  'JOURNAL-archive.md',
  'conventions.md',
  '_drafts/referentiel/couverture-en-cours.md',
];

const CHECK_ONLY = process.argv.includes('--check');

const REPLACEMENTS = [
  { pattern: /\u202F/g, sub: ' ', label: 'NBSP fin (U+202F)' },
  { pattern: /\u00A0/g, sub: ' ', label: 'NBSP normal (U+00A0)' },
  { pattern: /\u200B/g, sub: '',  label: 'ZWSP (U+200B)' },
  { pattern: /^\uFEFF/, sub: '',  label: 'BOM (U+FEFF)' },
];

let totalFound = 0;
let filesChanged = 0;
const report = [];

for (const rel of TARGETS) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) {
    report.push('  [skip] ' + rel + ' (introuvable)');
    continue;
  }

  const before = fs.readFileSync(abs, 'utf8');
  let after = before;
  const counts = {};

  for (const { pattern, sub, label } of REPLACEMENTS) {
    const matches = before.match(pattern);
    if (matches) {
      counts[label] = matches.length;
      after = after.replace(pattern, sub);
    }
  }

  const crlfCount = (before.match(/\r\n/g) || []).length;
  if (crlfCount > 0) {
    counts['CRLF -> LF'] = crlfCount;
    after = after.replace(/\r\n/g, '\n');
  }

  const crCount = (after.match(/\r/g) || []).length;
  if (crCount > 0) {
    counts['CR isole -> LF'] = crCount;
    after = after.replace(/\r/g, '\n');
  }

  if (Object.keys(counts).length === 0) {
    report.push('  [ok]   ' + rel);
    continue;
  }

  const detail = Object.entries(counts).map((e) => e[1] + 'x ' + e[0]).join(', ');
  totalFound += Object.values(counts).reduce((a, b) => a + b, 0);

  if (CHECK_ONLY) {
    report.push('  [!]    ' + rel + ' : ' + detail);
  } else {
    fs.writeFileSync(abs, after, { encoding: 'utf8' });
    filesChanged++;
    report.push('  [fix]  ' + rel + ' : ' + detail);
  }
}

console.log('Normalisation des fichiers de pilotage TheSkillCodex');
console.log('Mode : ' + (CHECK_ONLY ? 'CHECK (rapport sans modifier)' : 'FIX (corrige et ecrit)'));
console.log('');
report.forEach((line) => console.log(line));
console.log('');
console.log('Total : ' + totalFound + ' caractere(s) a corriger, ' + filesChanged + ' fichier(s) modifie(s).');

if (CHECK_ONLY && totalFound > 0) {
  process.exit(1);
}
