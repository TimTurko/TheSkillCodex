#!/usr/bin/env node
/**
 * inserer-pilotage.mjs - INSERTION A ANCRE UNIQUE DANS LES FICHIERS DE
 * PILOTAGE, TOUT OU RIEN.
 *
 * Meme garde que renommer-titres.mjs (front matter) et remplacer-passe.mjs
 * (corps de fiche), transposee aux fichiers de pilotage - TODO, JOURNAL,
 * conventions, BACKLOG - que ces deux outils ne couvrent pas et qui etaient
 * jusqu ici edites a la main.
 *
 * TROIS GARDES, dans cet ordre :
 *   1. chaque ancre doit apparaitre EXACTEMENT UNE FOIS dans son fichier ;
 *   2. chaque fragment doit exister et n etre pas vide ;
 *   3. TOUT est valide AVANT que le premier octet soit ecrit, et un seul
 *      defaut refuse le LOT ENTIER.
 *
 * La table vit dans un JSON date et jetable (C126 : l ossature se versionne,
 * le contenu est jetable), ce qui garde ce fichier en ASCII (C122) alors que
 * les ancres et les fragments portent du francais accentue.
 *
 * USAGE
 *   node tools/inserer-pilotage.mjs <table.json>            (essai a blanc)
 *   node tools/inserer-pilotage.mjs <table.json> --faire    (ecrit)
 *   node tools/inserer-pilotage.mjs <table.json> --negatif  (test negatif
 *      delibere : une ancre est volontairement alteree, le lot DOIT etre
 *      refuse et AUCUN fichier ecrit)
 *
 * FORME DE LA TABLE
 *   [ { "fichier": "conventions.md",
 *       "mode": "avant" | "apres" | "remplacer",
 *       "ancre": "<texte exact>",
 *       "fragment": "tools/frag-....md",     (ou "texte": "<inline>")
 *       "libelle": "<ce que fait l entree>" }, ... ]
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const args = process.argv.slice(2);
const table = args.find((a) => !a.startsWith('--'));
const FAIRE = args.includes('--faire');
const NEGATIF = args.includes('--negatif');

if (!table) {
  console.error('usage : node tools/inserer-pilotage.mjs <table.json> [--faire] [--negatif]');
  process.exit(2);
}

const entrees = JSON.parse(readFileSync(table, 'utf8'));
console.log('=== INSERTION A ANCRE UNIQUE DANS LE PILOTAGE ===');
console.log('');
console.log('  table   : ' + table);
console.log('  mode    : ' + (NEGATIF ? 'TEST NEGATIF DELIBERE' : FAIRE ? 'ECRITURE' : 'essai a blanc'));
console.log('  entrees : ' + entrees.length);
console.log('');

let defauts = 0;
const prevus = new Map();

for (let i = 0; i < entrees.length; i++) {
  const e = entrees[i];
  const nom = '[' + (i + 1) + '] ' + (e.libelle || e.fichier);

  if (!existsSync(e.fichier)) {
    console.log('  REFUS  ' + nom + ' : fichier introuvable ' + e.fichier);
    defauts += 1;
    continue;
  }
  let texte = prevus.has(e.fichier) ? prevus.get(e.fichier) : readFileSync(e.fichier, 'utf8');

  // Le test negatif altere l ancre de la PREMIERE entree, et d elle seule :
  // le lot entier doit tomber sur ce seul defaut.
  let ancre = e.ancre;
  if (NEGATIF && i === 0) ancre = ancre.replace(/.$/, 'ZZZ');

  let n = 0;
  let k = 0;
  while ((k = texte.indexOf(ancre, k)) >= 0) {
    n += 1;
    k += 1;
  }
  if (n !== 1) {
    console.log('  REFUS  ' + nom + ' : ancre trouvee ' + n + ' fois, il en faut exactement 1');
    console.log('         ancre : ' + JSON.stringify(ancre.slice(0, 70)));
    defauts += 1;
    continue;
  }

  let charge = e.texte;
  if (charge === undefined) {
    if (!existsSync(e.fragment)) {
      console.log('  REFUS  ' + nom + ' : fragment introuvable ' + e.fragment);
      defauts += 1;
      continue;
    }
    charge = readFileSync(e.fragment, 'utf8');
  }
  if (!charge || !charge.trim()) {
    console.log('  REFUS  ' + nom + ' : fragment vide');
    defauts += 1;
    continue;
  }

  let remplacant;
  if (e.mode === 'avant') remplacant = charge + ancre;
  else if (e.mode === 'apres') remplacant = ancre + charge;
  else if (e.mode === 'remplacer') remplacant = charge;
  else {
    console.log('  REFUS  ' + nom + ' : mode inconnu ' + JSON.stringify(e.mode));
    defauts += 1;
    continue;
  }

  prevus.set(e.fichier, texte.replace(ancre, remplacant));
  console.log('  ok     ' + nom);
  console.log('         ' + e.fichier + '   mode ' + e.mode +
    '   +' + (remplacant.length - ancre.length) + ' octets');
}

console.log('');
if (defauts) {
  console.log('REFUS : ' + defauts + ' defaut(s). AUCUN FICHIER ECRIT.');
  process.exit(1);
}
if (!FAIRE) {
  console.log('Essai a blanc concluant : ' + entrees.length + ' entree(s), 0 defaut.');
  console.log('AUCUN FICHIER ECRIT. Relancer avec --faire.');
  process.exit(0);
}
for (const [f, t] of prevus) {
  writeFileSync(f, t, 'utf8');
  console.log('  ecrit  ' + f + '   ' + Buffer.byteLength(t, 'utf8') + ' octets');
}
console.log('');
console.log('ECRIT : ' + entrees.length + ' entree(s) dans ' + prevus.size + ' fichier(s).');
