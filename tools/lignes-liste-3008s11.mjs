#!/usr/bin/env node
/**
 * lignes-liste-3008s11.mjs - OUTIL JETABLE (C114), seance 11 du 30/08.
 *
 * Le bloc 136 a localise le foisonnement negatif du lot 14 dans le registre
 * LISTE : -3.9 % contre +3.7 % au corpus, sur 35,3 % du volume du lot.
 * Ce script descend d un cran : il apparie les lignes de liste PAR RANG
 * entre la source FR et sa jumelle EN, et publie le delta de chaque ligne.
 *
 * Il reutilise le classement de registre de decompo-registre.mjs en le
 * recopiant a l identique (le module ne l exporte pas) - la recopie est
 * bornee a UNE fonction de cinq lignes et le bouclage de P137.2 la controle :
 * si le classement diverge, la somme des deltas cesse de valoir -31.
 */

import { readFileSync } from 'node:fs';
import { join, sep } from 'node:path';
import { corpsC110, MOTIF_MOT, EST_MOT } from './compter-mots.mjs';

const CONTENT = join(process.cwd(), 'content');
const lire = (rel) => readFileSync(join(CONTENT, rel.split('/').join(sep)), 'utf8');

function registreDeLigne(ligne) {
  const t = ligne.replace(/^[ \t]+/, '');
  if (t.startsWith('>')) return 'callout';
  if (/^#{1,6}\s/.test(t)) return 'titre';
  if (t.startsWith('|')) return 'tableau';
  if (/^([-*+]|\d+[.)])\s/.test(t)) return 'liste';
  return 'paragraphe';
}

function mots(ligne) {
  const motif = new RegExp(MOTIF_MOT.source, 'g');
  return (ligne.match(motif) || []).filter(EST_MOT).length;
}

function lignesListe(texte) {
  return corpsC110(texte)
    .split('\n')
    .filter((l) => registreDeLigne(l) === 'liste')
    .map((l) => ({ texte: l.trim(), n: mots(l) }));
}

const PAIRES = [
  ['embarque/pcb/kicad.md', 'en/embarque/pcb/kicad-en.md'],
  ['embarque/mcu/xiao/xiao-prise-en-main.md', 'en/embarque/mcu/xiao/xiao-prise-en-main-en.md'],
  ['embarque/mcu/xiao/xiao-sense.md', 'en/embarque/mcu/xiao/xiao-sense-en.md'],
];

console.log('=== LIGNES DE REGISTRE LISTE, LOT 14, APPARIEES PAR RANG ===');
console.log('');
console.log('  POPULATION : les 3 paires du lot 14, lignes classees `liste`');
console.log('  par la meme regle que decompo-registre.mjs, dans l ordre du');
console.log('  fichier. Comptage de mots : MOTIF_MOT importe de');
console.log('  compter-mots.mjs, applique ligne a ligne.');
console.log('');

let sommeDelta = 0;
let sommeFr = 0;
let sommeEn = 0;
const toutes = [];

for (const [relFr, relEn] of PAIRES) {
  const lf = lignesListe(lire(relFr));
  const le = lignesListe(lire(relEn));
  const totFr = lf.reduce((a, b) => a + b.n, 0);
  const totEn = le.reduce((a, b) => a + b.n, 0);
  sommeFr += totFr;
  sommeEn += totEn;
  sommeDelta += totEn - totFr;
  console.log('  ' + relFr);
  console.log('    lignes de liste  FR ' + lf.length + '   EN ' + le.length +
    (lf.length === le.length ? '   (egal)' : '   !! INEGAL'));
  console.log('    mots de liste    FR ' + totFr + '   EN ' + totEn +
    '   delta ' + (totEn - totFr));
  if (lf.length === le.length) {
    for (let i = 0; i < lf.length; i++) {
      toutes.push({ fiche: relFr, rang: i, fr: lf[i], en: le[i], d: le[i].n - lf[i].n });
    }
  }
}

console.log('');
console.log('  TOTAL lignes de liste : ' + sommeFr + ' -> ' + sommeEn +
  '   delta ' + sommeDelta);
console.log('');

const perdantes = toutes.filter((x) => x.d < 0).sort((a, b) => a.d - b.d);
const gagnantes = toutes.filter((x) => x.d > 0).sort((a, b) => b.d - a.d);
const nulles = toutes.filter((x) => x.d === 0).length;

console.log('  lignes appariees : ' + toutes.length +
  '   perdantes ' + perdantes.length +
  '   gagnantes ' + gagnantes.length +
  '   inchangees ' + nulles);
const cumul3 = perdantes.slice(0, 3).reduce((a, b) => a + b.d, 0);
console.log('  cumul des 3 lignes les plus perdantes : ' + cumul3);
console.log('');
console.log('  --- LES DIX LIGNES LES PLUS PERDANTES ---');
for (const x of perdantes.slice(0, 10)) {
  console.log('');
  console.log('  [' + x.d + ']  ' + x.fiche + '  rang ' + x.rang +
    '   (' + x.fr.n + ' -> ' + x.en.n + ')');
  console.log('    FR  ' + x.fr.texte);
  console.log('    EN  ' + x.en.texte);
}
console.log('');
console.log('  --- LES CINQ LIGNES LES PLUS GAGNANTES ---');
for (const x of gagnantes.slice(0, 5)) {
  console.log('');
  console.log('  [+' + x.d + ']  ' + x.fiche + '  rang ' + x.rang +
    '   (' + x.fr.n + ' -> ' + x.en.n + ')');
  console.log('    FR  ' + x.fr.texte);
  console.log('    EN  ' + x.en.texte);
}
