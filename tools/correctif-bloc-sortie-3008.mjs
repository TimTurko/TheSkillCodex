#!/usr/bin/env node
/**
 * correctif-bloc-sortie-3008.mjs - JETABLE (C114). Correctif d arbitrage du
 * 30/08 : la source FR de stm32-cubemx s aligne sur `tick`, pour que le code
 * soit identique a l octet dans les deux langues (arbitrage Tim du 30/08,
 * confirmation de C77).
 *
 * POURQUOI CE SCRIPT PLUTOT QUE remplacer-passe.mjs
 * ------------------------------------------------
 * remplacer-passe.mjs lit un TSV ligne par ligne : une ancre ne peut donc pas
 * contenir de saut de ligne. Le bloc de sortie attendue porte QUATRE LIGNES
 * IDENTIQUES (`tic`), dont aucune n est unique. La garde d unicite d ancre est
 * inapplicable la, et l y forcer reviendrait a choisir une ancre fausse.
 *
 * La garde qui convient au motif est un NOMBRE D OCCURRENCES EXACT, declare
 * AVANT le lancement. Le script porte les trois memes invariants que
 * remplacer-passe.mjs, refuse le lot entier sur tout ecart, et valide tout
 * avant d ecrire le premier octet.
 *
 * L INTERVALLE D ACCENTS EST TROUE, ET IL DOIT L ETRE : le bloc Latin-1 loge
 * le signe multiplie U+00D7 et le signe divise U+00F7 AU MILIEU des lettres
 * accentuees. Regle d usage du 29/08 (suite 6), reprise en defaut le 29/08
 * (suite 7) dans un outil ecrit le jour meme.
 *
 * Usage :
 *   node tools/correctif-bloc-sortie-3008.mjs
 *   node tools/correctif-bloc-sortie-3008.mjs --ecrire
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, sep } from 'node:path';

const CONTENT = join(process.cwd(), 'content');
const ECRIRE = process.argv.slice(2).includes('--ecrire');

const FRONT_MATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;
const ACCENT = /[À-ÖØ-öø-ÿŒœŸĀ-ſ]/;
const compterAccents = (s) => [...s].filter((c) => ACCENT.test(c)).length;
const compterCodePoints = (s) => [...s].length;

// Table jetable. attendu = nombre d occurrences EXACT dans le corps.
const REGLES = [
  {
    rel: 'embarque/mcu/stm32/stm32-cubemx.md',
    // L ancre est le BLOC ENTIER, et non une ligne. Une ancre d une seule
    // ligne ('\ntic\n') CONSOMME le saut de ligne qui sert aussi de debut a
    // l occurrence suivante : un split non chevauchant en trouve 2 sur 4.
    // Mesure du 30/08, garde mordue avant toute ecriture.
    ancre: '\ntic\ntic\ntic\ntic\n',
    neuf: '\ntick\ntick\ntick\ntick\n',
    attendu: 1,
    motif: 'bloc de sortie attendue, quatre lignes identiques, pris en bloc',
  },
];

console.log('=== CORRECTIF DU BLOC DE SORTIE ' + (ECRIRE ? '(ECRITURE)' : '(CONTROLE SEUL)') + ' ===');
console.log('');

let defauts = 0;
const aEcrire = [];

for (const r of REGLES) {
  const abs = join(CONTENT, r.rel.split('/').join(sep));
  if (!existsSync(abs)) {
    console.log('  ABSENT    content/' + r.rel);
    defauts += 1;
    continue;
  }
  const texte = readFileSync(abs, 'utf8');
  const mFm = texte.match(FRONT_MATTER);
  if (!mFm) {
    console.log('  SANS FM   content/' + r.rel);
    defauts += 1;
    continue;
  }
  const fm = mFm[0];
  const corps = texte.slice(fm.length);

  // Occurrences NON CHEVAUCHANTES, comptees comme le fera le remplacement.
  const parts = corps.split(r.ancre);
  const trouvees = parts.length - 1;
  console.log('  ' + r.rel);
  console.log('    motif  : ' + r.motif);
  console.log('    ancre  : ' + JSON.stringify(r.ancre));
  console.log('    occurrences attendues : ' + r.attendu + '   trouvees : ' + trouvees);

  if (trouvees !== r.attendu) {
    console.log('    ECART DE COMPTE - la garde mord.');
    defauts += 1;
    continue;
  }

  const corpsNeuf = parts.join(r.neuf);

  const aAv = compterAccents(corps);
  const aAp = compterAccents(corpsNeuf);
  const lAv = compterCodePoints(corps);
  const lAp = compterCodePoints(corpsNeuf);
  const nlAv = corps.split('\n').length;
  const nlAp = corpsNeuf.split('\n').length;
  const ecart = aAp - aAv;

  console.log(
    '    accents ' + aAv + ' -> ' + aAp + ' (ecart ' + (ecart >= 0 ? '+' : '') + ecart + ')' +
    '   pts de code ' + lAv + ' -> ' + lAp +
    '   lignes ' + nlAv + ' -> ' + nlAp
  );

  if (ecart !== 0) {
    console.log('    INVARIANT D ACCENTS CASSE - la garde mord.');
    defauts += 1;
    continue;
  }
  if (nlAv !== nlAp) {
    console.log('    NOMBRE DE LIGNES CHANGE - la garde mord.');
    defauts += 1;
    continue;
  }

  aEcrire.push({ abs, rel: r.rel, texteNeuf: fm + corpsNeuf, n: trouvees });
}

console.log('');
if (defauts > 0) {
  console.log('  REFUS : ' + defauts + ' defaut(s). AUCUN FICHIER ECRIT.');
  process.exit(1);
}

const total = aEcrire.reduce((a, e) => a + e.n, 0);
if (!ECRIRE) {
  console.log('  CONTROLE SEUL : ' + total + ' remplacement(s) prets, 0 fichier ecrit.');
  process.exit(0);
}

for (const e of aEcrire) {
  writeFileSync(e.abs, e.texteNeuf, 'utf8');
  console.log('  ECRIT  content/' + e.rel + '   (' + e.n + ' remplacement(s))');
}
console.log('');
console.log('  fichiers ecrits : ' + aEcrire.length);
process.exit(0);
