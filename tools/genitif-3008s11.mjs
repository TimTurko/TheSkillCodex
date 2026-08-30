#!/usr/bin/env node
/**
 * genitif-3008s11.mjs - OUTIL JETABLE (C114), seance 11 du 30/08.
 *
 * Le bloc 137 a nomme la cause du foisonnement negatif du lot 14 : la chaine
 * genitive francaise (le hub DE la carte, le bus DE reglage DE la camera)
 * rendue par un compose anglais ou un genitif saxon. Ce script teste
 * l hypothese sur TOUT le corpus : si la cause est bien celle-la, la densite
 * de marqueurs de genitif dans la source FR doit PREDIRE le foisonnement de
 * sa jumelle.
 *
 * MOTIF ET SON ECHANTILLON (C110). Marqueur de genitif = jeton MOTIF_MOT
 * egal a de / du / des (variante STRICTE), ou commencant par d apostrophe
 * (variante LARGE). Le jeton de C110 INCLUT l apostrophe : d'un est UN
 * jeton. Les quinze formes en d apostrophe les plus frequentes sont
 * imprimees pour que les faux positifs adverbiaux (d'abord, d'ailleurs)
 * soient LUS et non supposes.
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { corpsC110, compterMots, MOTIF_MOT, EST_MOT } from './compter-mots.mjs';

const CONTENT = join(process.cwd(), 'content');

function walk(dir, acc = []) {
  let entrees;
  try {
    entrees = readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const e of entrees) {
    const complet = join(dir, e.name);
    if (e.isDirectory()) walk(complet, acc);
    else if (e.isFile() && e.name.endsWith('.md')) acc.push(complet);
  }
  return acc;
}
const versWeb = (abs) => relative(CONTENT, abs).split(sep).join('/');
const lire = (rel) => readFileSync(join(CONTENT, rel.split('/').join(sep)), 'utf8');

const STRICT = new Set(['de', 'du', 'des']);
const APOS = /^d['’]/;

function jetons(texte) {
  const motif = new RegExp(MOTIF_MOT.source, 'g');
  return (corpsC110(texte).match(motif) || []).filter(EST_MOT);
}

function mesurer(texte) {
  const j = jetons(texte);
  let strict = 0;
  let apos = 0;
  const formes = new Map();
  for (const t of j) {
    const b = t.toLowerCase();
    if (STRICT.has(b)) strict += 1;
    else if (APOS.test(b)) {
      apos += 1;
      formes.set(b, (formes.get(b) || 0) + 1);
    }
  }
  return { n: j.length, strict, apos, formes };
}

function paires() {
  const out = [];
  for (const relEn of walk(join(CONTENT, 'en')).map(versWeb).sort()) {
    const tEn = lire(relEn);
    const m = tEn.match(/^source_fr:\s*(.+?)\s*$/m);
    if (!m) continue;
    const relFr = m[1];
    if (!existsSync(join(CONTENT, relFr.split('/').join(sep)))) continue;
    out.push({ relFr, relEn });
  }
  return out;
}

function pearson(xs, ys) {
  const n = xs.length;
  const mx = xs.reduce((a, b) => a + b, 0) / n;
  const my = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0;
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < n; i++) {
    const a = xs[i] - mx;
    const b = ys[i] - my;
    num += a * b;
    dx += a * a;
    dy += b * b;
  }
  return num / Math.sqrt(dx * dy);
}

const lignes = [];
const formesGlobales = new Map();
for (const { relFr, relEn } of paires()) {
  const tFr = lire(relFr);
  const mFr = mesurer(tFr);
  const fr = compterMots(tFr);
  const en = compterMots(lire(relEn));
  if (!fr) continue;
  for (const [k, v] of mFr.formes) formesGlobales.set(k, (formesGlobales.get(k) || 0) + v);
  lignes.push({
    relFr,
    fr,
    en,
    fois: (en / fr - 1) * 100,
    dStrict: (mFr.strict / fr) * 100,
    dLarge: ((mFr.strict + mFr.apos) / fr) * 100,
  });
}

console.log('=== DENSITE DE GENITIF FRANCAIS ET FOISONNEMENT ===');
console.log('');
console.log('  POPULATION : ' + lignes.length + ' paires FR/EN, appariees par source_fr.');
console.log('  Un point par paire. Densite = marqueurs pour 100 mots de la SOURCE FR,');
console.log('  mots comptes par la regle C110 importee de compter-mots.mjs.');
console.log('  STRICTE : jetons de / du / des.   LARGE : + jetons en d apostrophe.');
console.log('');

const xs = lignes.map((l) => l.dStrict);
const xl = lignes.map((l) => l.dLarge);
const ys = lignes.map((l) => l.fois);
console.log('  Pearson r (densite STRICTE, foisonnement) : ' + pearson(xs, ys).toFixed(3));
console.log('  Pearson r (densite LARGE  , foisonnement) : ' + pearson(xl, ys).toFixed(3));

const tri = [...lignes].sort((a, b) => a.dStrict - b.dStrict);
const taille = Math.floor(tri.length / 10);
console.log('');
console.log('  DECILES DE DENSITE STRICTE (' + taille + ' fiches par decile, ' +
  (tri.length - taille * 10) + ' fiche(s) en reste, placee(s) dans le dernier)');
console.log('    decile   densite moy.   foisonnement moy.   mots FR');
for (let d = 0; d < 10; d++) {
  const debut = d * taille;
  const fin = d === 9 ? tri.length : (d + 1) * taille;
  const tranche = tri.slice(debut, fin);
  const dm = tranche.reduce((a, b) => a + b.dStrict, 0) / tranche.length;
  const fm = tranche.reduce((a, b) => a + b.fois, 0) / tranche.length;
  const mots = tranche.reduce((a, b) => a + b.fr, 0);
  console.log('    ' + String(d + 1).padStart(6) + '   ' +
    dm.toFixed(2).padStart(12) + '   ' +
    ((fm >= 0 ? '+' : '') + fm.toFixed(2) + ' %').padStart(17) + '   ' +
    String(mots).padStart(7));
}

const median = tri[Math.floor(tri.length / 2)].dStrict;
console.log('');
console.log('  Mediane de densite stricte : ' + median.toFixed(2) + ' pour 100 mots');
console.log('');
console.log('  LES TROIS FICHES DU LOT 14');
for (const cible of [
  'embarque/pcb/kicad.md',
  'embarque/mcu/xiao/xiao-prise-en-main.md',
  'embarque/mcu/xiao/xiao-sense.md',
]) {
  const l = lignes.find((x) => x.relFr === cible);
  if (!l) { console.log('    [absente] ' + cible); continue; }
  const rang = tri.findIndex((x) => x.relFr === cible) + 1;
  console.log('    ' + cible.padEnd(44) + ' densite ' + l.dStrict.toFixed(2) +
    '   rang ' + rang + '/' + tri.length +
    '   ' + (l.dStrict > median ? 'AU-DESSUS' : 'au-dessous') + ' de la mediane' +
    '   foisonnement ' + (l.fois >= 0 ? '+' : '') + l.fois.toFixed(1) + ' %');
}

console.log('');
console.log('  LES DIX FICHES LES PLUS DENSES EN GENITIF');
for (const l of [...tri].reverse().slice(0, 10)) {
  console.log('    ' + l.relFr.padEnd(52) + l.dStrict.toFixed(2).padStart(6) +
    '   ' + ((l.fois >= 0 ? '+' : '') + l.fois.toFixed(1) + ' %').padStart(8));
}
console.log('');
console.log('  LES DIX FICHES LES MOINS DENSES EN GENITIF');
for (const l of tri.slice(0, 10)) {
  console.log('    ' + l.relFr.padEnd(52) + l.dStrict.toFixed(2).padStart(6) +
    '   ' + ((l.fois >= 0 ? '+' : '') + l.fois.toFixed(1) + ' %').padStart(8));
}

console.log('');
console.log('  ECHANTILLON C110 - LES QUINZE FORMES EN D APOSTROPHE LES PLUS');
console.log('  FREQUENTES DU CORPUS FR. Ce qui suit se lit comme la liste des');
console.log('  faux positifs possibles de la variante LARGE :');
const formes = [...formesGlobales.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);
for (const [f, n] of formes) console.log('    ' + f.padEnd(20) + String(n).padStart(6));
