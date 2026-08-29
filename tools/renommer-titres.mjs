#!/usr/bin/env node
/**
 * renommer-titres.mjs - Reecrit des `title:` de front matter, en tout ou rien,
 * sous garde d'unicite d'ancre.
 *
 * POURQUOI CE SCRIPT EXISTE
 * -------------------------
 * Un chantier de nommage reecrit des dizaines de `title:` en une passe. Deux
 * contraintes du depot interdisent de le faire dans tools/seance.ps1 :
 *   - C122 impose a seance.ps1 d'etre ASCII STRICT, et les titres francais
 *     portent des accents. Une table de titres ne peut pas y tenir en
 *     litteral.
 *   - C116 (6) impose un CONTROLE D'UNICITE D'ANCRE AVANT ECRITURE, troisieme
 *     terme du remplacement du dryRun. Le 29/08, ce controle a seul arrete un
 *     lot de 38 editions parce qu'une ancre etait ecrite sans son accent.
 *
 * Ce script porte l'OSSATURE seule (C126) : lecture de la table, garde,
 * ecriture atomique. La TABLE elle-meme vit dans un TSV date, jetable, hors
 * de ce fichier.
 *
 * CE QU IL GARANTIT
 * -----------------
 *   1. Le `title:` se lit et se reecrit DANS LE FRONT MATTER SEULEMENT.
 *   2. L'ancre doit apparaitre EXACTEMENT UNE FOIS dans ce front matter.
 *   3. Le titre courant doit etre EGAL a l'ancre, au caractere pres.
 *   4. TOUT OU RIEN : toutes les lignes sont validees avant que le premier
 *      octet ne soit ecrit. Une seule ancre absente => zero ecriture.
 *   5. Seule la ligne `title:` change. Le reste du fichier est reecrit a
 *      l'octet, fins de ligne comprises.
 *
 * FORMAT DE LA TABLE (TSV, UTF-8, sans BOM)
 * -----------------------------------------
 *   chemin<TAB>ancien titre<TAB>nouveau titre
 *   Les lignes vides et celles commencant par # sont ignorees.
 *   Le chemin est relatif a content/.
 *
 * Usage :
 *   node tools/renommer-titres.mjs tools/table-titres-2908.tsv
 *       controle seul, AUCUNE ecriture. Exit 1 si une garde tombe.
 *   node tools/renommer-titres.mjs tools/table-titres-2908.tsv --ecrire
 *       controle puis ecriture atomique.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, sep } from 'node:path';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'content');

const args = process.argv.slice(2);
const ECRIRE = args.includes('--ecrire');
const table = args.find((a) => !a.startsWith('--'));

if (!table) {
  console.error('Usage : node tools/renommer-titres.mjs <table.tsv> [--ecrire]');
  process.exit(2);
}
if (!existsSync(table)) {
  console.error('Table introuvable : ' + table);
  process.exit(2);
}

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;

const lignes = readFileSync(table, 'utf8')
  .split(/\r?\n/)
  .map((l, i) => ({ n: i + 1, brut: l }))
  .filter((l) => l.brut.trim() && !l.brut.trimStart().startsWith('#'));

console.log('=== RENOMMAGE DE title: ' + (ECRIRE ? '(ECRITURE)' : '(CONTROLE SEUL)') + ' ===');
console.log('  table : ' + table);
console.log('  lignes de table : ' + lignes.length);
console.log('');

let ancresTrouvees = 0;
let ancresIntrouvables = 0;
let ancresMultiples = 0;
let sansFrontMatter = 0;
let fichiersAbsents = 0;
let colonnesInvalides = 0;
const aEcrire = [];

for (const { n, brut } of lignes) {
  const cols = brut.split('\t');
  if (cols.length !== 3) {
    console.log('  L' + n + ' COLONNES  attendu 3, lu ' + cols.length);
    colonnesInvalides += 1;
    continue;
  }
  const rel = cols[0].trim();
  const ancien = cols[1];
  const nouveau = cols[2];
  const abs = join(CONTENT, rel.split('/').join(sep));

  if (!existsSync(abs)) {
    console.log('  L' + n + ' ABSENT    content/' + rel);
    fichiersAbsents += 1;
    continue;
  }

  const texte = readFileSync(abs, 'utf8');
  const m = texte.match(FRONT_MATTER);
  if (!m) {
    console.log('  L' + n + ' SANS FM   content/' + rel);
    sansFrontMatter += 1;
    continue;
  }

  // L'ancre se compte DANS LE FRONT MATTER SEUL. Un `title:` d'un bloc de
  // code du corps ne doit ni compter ni etre reecrit.
  const bloc = m[1];
  const motif = new RegExp(
    '^title:[ \\t]*' + ancien.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[ \\t]*$',
    'gm'
  );
  const occurrences = (bloc.match(motif) || []).length;

  if (occurrences === 0) {
    const courant = (bloc.match(/^title:[ \t]*(.*?)[ \t]*$/m) || [, '(aucun)'])[1];
    console.log('  L' + n + ' INTROUVABLE  content/' + rel);
    console.log('        ancre attendue : ' + ancien);
    console.log('        title: en place : ' + courant);
    ancresIntrouvables += 1;
    continue;
  }
  if (occurrences > 1) {
    console.log('  L' + n + ' MULTIPLE  content/' + rel + '  (' + occurrences + ' occurrences)');
    ancresMultiples += 1;
    continue;
  }

  ancresTrouvees += 1;
  const blocNeuf = bloc.replace(
    new RegExp('^title:[ \\t]*' + ancien.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[ \\t]*$', 'm'),
    'title: ' + nouveau
  );
  const texteNeuf = texte.replace(bloc, blocNeuf);
  aEcrire.push({ abs, rel, texteNeuf, ancien, nouveau });
}

console.log('');
console.log('  ancres uniques trouvees : ' + ancresTrouvees);
console.log('  ancres introuvables     : ' + ancresIntrouvables);
console.log('  ancres multiples        : ' + ancresMultiples);
console.log('  fichiers absents        : ' + fichiersAbsents);
console.log('  sans front matter       : ' + sansFrontMatter);
console.log('  lignes mal formees      : ' + colonnesInvalides);

const defauts =
  ancresIntrouvables + ancresMultiples + fichiersAbsents + sansFrontMatter + colonnesInvalides;

if (defauts > 0) {
  console.log('');
  console.log('  REFUS : ' + defauts + ' defaut(s). AUCUN FICHIER ECRIT.');
  console.log('  (tout ou rien : une ancre absente arrete le lot entier)');
  process.exit(1);
}

if (!ECRIRE) {
  console.log('');
  console.log('  CONTROLE SEUL : ' + aEcrire.length + ' renommage(s) prets, 0 fichier ecrit.');
  console.log('  Relancer avec --ecrire pour appliquer.');
  process.exit(0);
}

for (const e of aEcrire) {
  writeFileSync(e.abs, e.texteNeuf, 'utf8');
  console.log('  ECRIT  content/' + e.rel);
  console.log('         ' + e.ancien + '  ->  ' + e.nouveau);
}
console.log('');
console.log('  fichiers ecrits : ' + aEcrire.length);
process.exit(0);
