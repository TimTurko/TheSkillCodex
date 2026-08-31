#!/usr/bin/env node
/**
 * ajouter-lang-en-3108s16.mjs - OUTIL JETABLE (C114), bloc B2 du chantier
 * "site exploitable par une IA", seance 16 du 31/08.
 *
 * POURQUOI
 * --------
 * Les 242 fiches de content/en ne portent aucun champ `lang`. renderPage.tsx
 * retombe alors sur cfg.locale et sort <html lang="fr"> sur une page anglaise :
 * la cesure de custom.scss (hyphens: auto) coupe l anglais au dictionnaire
 * francais, et la langue annoncee aux lecteurs d ecran comme aux machines est
 * fausse. Cette passe insere `lang: en` JUSTE APRES la ligne `title:`, au meme
 * rang que celui ou creer-fiche-en.mjs l ecrira desormais (B3).
 *
 * LES TROIS GARDES, memes termes que remplacer-passe.mjs
 * -----------------------------------------------------
 *   1. UNICITE D ANCRE : `title:` doit apparaitre EXACTEMENT une fois en debut
 *      de ligne. Zero ou plusieurs => refus du LOT ENTIER.
 *   2. TOUT OU RIEN : tout est valide avant que le premier octet ne soit ecrit.
 *   3. INVARIANTS PUBLIES AVANT ECRITURE :
 *        - delta en OCTETS par Buffer.byteLength, jamais par .length ;
 *        - fin de ligne relue SUR LA LIGNE D ANCRE, pas sur le fichier : le
 *          corpus porte un fichier mixte (fonction-en.md, 33 CR / 49 LF) ;
 *        - ecart d accents en POINTS DE CODE. L insertion etant ASCII, tout
 *          ecart non nul est un ARRET.
 *   Refus supplementaire : un fichier qui porte deja `lang:` en debut de ligne.
 *
 * Usage :
 *   node tools/ajouter-lang-en-3108s16.mjs                (controle seul)
 *   node tools/ajouter-lang-en-3108s16.mjs --ecrire       (ecriture)
 *   node tools/ajouter-lang-en-3108s16.mjs --ancre "titre:"   (test negatif)
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const CONTENT = join(process.cwd(), 'content');
const RACINE_EN = join(CONTENT, 'en');

const args = process.argv.slice(2);
const ECRIRE = args.includes('--ecrire');
const iAncre = args.indexOf('--ancre');
const ANCRE = iAncre === -1 ? 'title:' : args[iAncre + 1];
const CHAMP = 'lang: en';

// Points de code accentues : le bloc latin-1 supplement est TROUE, x et /
// (U+00D7, U+00F7) logent au milieu des lettres. Compte des CARACTERES :
// [...texte] itere sur les points de code, jamais sur les octets.
const ACCENTS = /[À-ÖØ-öø-ÿĀ-ſ]/;
const compterAccents = (t) => [...t].filter((c) => ACCENTS.test(c)).length;

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const complet = join(dir, e.name);
    if (e.isDirectory()) walk(complet, acc);
    else if (e.isFile() && e.name.endsWith('.md')) acc.push(complet);
  }
  return acc;
}

const fiches = walk(RACINE_EN).sort();
const versWeb = (abs) => relative(CONTENT, abs).split(sep).join('/');

console.log('=== PASSE ' + CHAMP + ' SUR content/en ' + (ECRIRE ? '(ECRITURE)' : '(CONTROLE SEUL)') + ' ===');
console.log('  ancre        : ' + ANCRE);
console.log('  fiches lues  : ' + fiches.length);
console.log('');

const prets = [];
const refus = [];
let lf = 0;
let crlf = 0;
let delta = 0;
let ecartAccents = 0;

for (const abs of fiches) {
  const rel = versWeb(abs);
  const avant = readFileSync(abs, 'utf8');
  const lignes = avant.split('\n');

  const rangs = [];
  for (let i = 0; i < lignes.length; i += 1) {
    if (lignes[i].startsWith(ANCRE)) rangs.push(i);
  }
  if (rangs.length !== 1) {
    refus.push(rel + '  ancre ' + JSON.stringify(ANCRE) + ' vue ' + rangs.length + ' fois');
    continue;
  }
  if (lignes.some((l) => /^lang:/.test(l))) {
    refus.push(rel + '  porte deja un champ lang:');
    continue;
  }

  // Fin de ligne relue SUR LA LIGNE D ANCRE : split('\n') laisse le \r en
  // queue de la ligne quand elle etait en CRLF.
  const enCrlf = lignes[rangs[0]].endsWith('\r');
  if (enCrlf) crlf += 1;
  else lf += 1;

  const suite = lignes.slice();
  suite.splice(rangs[0] + 1, 0, enCrlf ? CHAMP + '\r' : CHAMP);
  const apres = suite.join('\n');

  const d = Buffer.byteLength(apres, 'utf8') - Buffer.byteLength(avant, 'utf8');
  const a = compterAccents(apres) - compterAccents(avant);
  delta += d;
  ecartAccents += a;
  prets.push({ abs, rel, apres, d, a });
}

console.log('  ancres LF    : ' + lf);
console.log('  ancres CRLF  : ' + crlf);
console.log('  delta octets : +' + delta + '   (Buffer.byteLength, jamais .length)');
console.log('  ecart accents : ' + ecartAccents + '   (points de code)');
console.log('');

if (refus.length) {
  for (const r of refus) console.log('  [!] ' + r);
  console.log('');
  console.log('  ARRET : ' + refus.length + ' fiche(s) sans ancre unique, 0 octet ecrit.');
  process.exit(1);
}
if (ecartAccents !== 0) {
  console.log('  ARRET : ecart d accents non nul, 0 octet ecrit.');
  process.exit(1);
}

let ecrites = 0;
if (ECRIRE) {
  for (const p of prets) {
    writeFileSync(p.abs, p.apres, 'utf8');
    ecrites += 1;
  }
}

console.log('  ' + prets.length + ' fichier(s) valide(s), ' + ecrites + ' ecrit(s).');
process.exit(0);
