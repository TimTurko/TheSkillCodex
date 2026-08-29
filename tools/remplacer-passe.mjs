#!/usr/bin/env node
/**
 * remplacer-passe.mjs - Passe de remplacement ancree dans le CORPS d une fiche,
 * en tout ou rien, sous garde d unicite, avec invariants publies.
 *
 * POURQUOI CE SCRIPT EXISTE
 * -------------------------
 * Les passes C109 sont l operation la plus repetee du chantier de traduction,
 * et la plus dangereuse : le correctif E2 du 29/08 (suite 6) a perdu 147
 * caracteres accentues dans cinq sources FR, a traverse CINQ controles au vert,
 * et n a ete trouve qu en relisant le texte produit. La regle d usage nee ce
 * jour-la - une passe de ponctuation ne change pas le nombre de caracteres
 * accentues - n etait portee par aucun outil.
 *
 * Ce script porte les trois gardes ensemble :
 *   1. UNICITE D ANCRE (C116 (6)) : chaque ancre doit apparaitre EXACTEMENT une
 *      fois dans le corps. Zero ou plusieurs => refus du lot entier.
 *   2. TOUT OU RIEN : tout est valide avant que le premier octet ne soit ecrit.
 *   3. INVARIANTS publies avant / apres, par fiche :
 *        - caracteres accentues (comptes en POINTS DE CODE, jamais en octets ;
 *          un grep sur une classe de crochets compte des octets et rend le
 *          double, mesure du 29/08 suite 7 sur echantillon nomme) ;
 *        - longueur en points de code (invariant E3) ;
 *        - lignes du corps (une passe de ponctuation n en cree ni n en detruit).
 *      L invariant d accents est un ARRET : un ecart non nul refuse le lot.
 *
 * Le FRONT MATTER n est jamais touche : les ancres s y cherchent pas et le bloc
 * est recopie a l octet. Pour un title:, c est renommer-titres.mjs.
 *
 * FORMAT DE LA TABLE (TSV, UTF-8, sans BOM)
 * -----------------------------------------
 *   chemin<TAB>ancre exacte<TAB>remplacement
 *   Lignes vides et lignes commencant par # ignorees.
 *   Le chemin est relatif a content/. Un TAB litteral ne peut donc pas figurer
 *   dans une ancre - aucune prose n en porte.
 *
 * Usage :
 *   node tools/remplacer-passe.mjs tools/passe-c109-2908.tsv
 *   node tools/remplacer-passe.mjs tools/passe-c109-2908.tsv --ecrire
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, sep } from 'node:path';

const CONTENT = join(process.cwd(), 'content');

const args = process.argv.slice(2);
const ECRIRE = args.includes('--ecrire');
const table = args.find((a) => !a.startsWith('--'));

if (!table || !existsSync(table)) {
  console.error('Usage : node tools/remplacer-passe.mjs <table.tsv> [--ecrire]');
  process.exit(2);
}

const FRONT_MATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;

// Points de code accentues du latin-1 supplement et du latin etendu-A, plus
// les ligatures. Compte des CARACTERES : [...texte] itere sur les points de
// code, jamais sur les octets.
//
// L INTERVALLE EST TROUE, ET IL DOIT L ETRE. Le bloc Latin-1 loge le signe
// multiplie U+00D7 et le signe divise U+00F7 AU MILIEU des lettres accentuees :
// un [À-ÿ] naif les compte pour des accents. Regle d usage du 29/08 (suite 6),
// nee de deux chiffres publies faux le meme soir. La premiere version de ce
// fichier portait le defaut ; corrige le 29/08 (suite 7) apres avoir compte
// le « × » de l exercice 2 de esp32-deep-sleep pour une lettre accentuee.
const ACCENT = /[À-ÖØ-öø-ÿŒœŸĀ-ſ]/;
const compterAccents = (s) => [...s].filter((c) => ACCENT.test(c)).length;
const compterCodePoints = (s) => [...s].length;

const lignes = readFileSync(table, 'utf8')
  .split(/\r?\n/)
  .map((l, i) => ({ n: i + 1, brut: l }))
  .filter((l) => l.brut.trim() && !l.brut.trimStart().startsWith('#'));

console.log('=== PASSE DE REMPLACEMENT ' + (ECRIRE ? '(ECRITURE)' : '(CONTROLE SEUL)') + ' ===');
console.log('  table : ' + table);
console.log('  lignes de table : ' + lignes.length);
console.log('');

// Regroupement par fiche : une fiche recoit toutes ses ancres en une passe,
// pour que les invariants se mesurent sur l etat final et non intermediaire.
const parFiche = new Map();
let malFormees = 0;
for (const { n, brut } of lignes) {
  const cols = brut.split('\t');
  if (cols.length !== 3) {
    console.log('  L' + n + ' COLONNES  attendu 3, lu ' + cols.length);
    malFormees += 1;
    continue;
  }
  const rel = cols[0].trim();
  if (!parFiche.has(rel)) parFiche.set(rel, []);
  parFiche.get(rel).push({ n, ancre: cols[1], neuf: cols[2] });
}

let introuvables = 0;
let multiples = 0;
let absents = 0;
let sansFm = 0;
let accentsCasses = 0;
let remplacements = 0;
const aEcrire = [];

for (const [rel, regles] of parFiche) {
  const abs = join(CONTENT, rel.split('/').join(sep));
  if (!existsSync(abs)) {
    console.log('  ABSENT    content/' + rel);
    absents += 1;
    continue;
  }
  const texte = readFileSync(abs, 'utf8');
  const mFm = texte.match(FRONT_MATTER);
  if (!mFm) {
    console.log('  SANS FM   content/' + rel);
    sansFm += 1;
    continue;
  }
  const fm = mFm[0];
  const corps = texte.slice(fm.length);

  let corpsNeuf = corps;
  let okFiche = 0;
  for (const r of regles) {
    // Comptage d occurrences par decoupage : aucune regex, donc aucun
    // metacaractere a echapper et aucune surprise sur les accents.
    const parts = corpsNeuf.split(r.ancre);
    if (parts.length === 1) {
      console.log('  L' + r.n + ' INTROUVABLE  content/' + rel);
      console.log('        ancre : ' + r.ancre);
      introuvables += 1;
      continue;
    }
    if (parts.length > 2) {
      console.log('  L' + r.n + ' MULTIPLE  content/' + rel + '  (' + (parts.length - 1) + ' occurrences)');
      console.log('        ancre : ' + r.ancre);
      multiples += 1;
      continue;
    }
    corpsNeuf = parts[0] + r.neuf + parts[1];
    okFiche += 1;
  }

  const aAv = compterAccents(corps);
  const aAp = compterAccents(corpsNeuf);
  const lAv = compterCodePoints(corps);
  const lAp = compterCodePoints(corpsNeuf);
  const nlAv = corps.split('\n').length;
  const nlAp = corpsNeuf.split('\n').length;
  const ecart = aAp - aAv;
  if (ecart !== 0) accentsCasses += 1;

  console.log(
    '  ' + rel.padEnd(44) +
    '  ancres ' + String(okFiche).padStart(2) + '/' + String(regles.length).padStart(2) +
    '   accents ' + aAv + ' -> ' + aAp + ' (ecart ' + (ecart >= 0 ? '+' : '') + ecart + ')' +
    '   pts de code ' + lAv + ' -> ' + lAp +
    '   lignes ' + nlAv + ' -> ' + nlAp
  );

  remplacements += okFiche;
  aEcrire.push({ abs, rel, texteNeuf: fm + corpsNeuf, n: okFiche });
}

console.log('');
console.log('  fiches                  : ' + parFiche.size);
console.log('  remplacements prets     : ' + remplacements);
console.log('  ancres introuvables     : ' + introuvables);
console.log('  ancres multiples        : ' + multiples);
console.log('  fichiers absents        : ' + absents);
console.log('  sans front matter       : ' + sansFm);
console.log('  lignes mal formees      : ' + malFormees);
console.log('  INVARIANT D ACCENTS casse sur : ' + accentsCasses + ' fiche(s)');

const defauts = introuvables + multiples + absents + sansFm + malFormees + accentsCasses;
if (defauts > 0) {
  console.log('');
  console.log('  REFUS : ' + defauts + ' defaut(s). AUCUN FICHIER ECRIT.');
  process.exit(1);
}

if (!ECRIRE) {
  console.log('');
  console.log('  CONTROLE SEUL : ' + remplacements + ' remplacement(s) prets, 0 fichier ecrit.');
  process.exit(0);
}

for (const e of aEcrire) {
  writeFileSync(e.abs, e.texteNeuf, 'utf8');
  console.log('  ECRIT  content/' + e.rel + '   (' + e.n + ' remplacement(s))');
}
console.log('');
console.log('  fichiers ecrits : ' + aEcrire.length);
process.exit(0);
