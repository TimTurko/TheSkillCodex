#!/usr/bin/env node
/**
 * genitif-ligne-3008s11.mjs - OUTIL JETABLE (C114), seance 11 du 30/08.
 *
 * Le bloc 138 a mesure FAUSSE l hypothese genitive a l echelle de la FICHE
 * (r = -0,029 sur 242 paires) alors que le bloc 137 la montre sur piece a
 * l echelle de la LIGNE. Ce script fait le meme test a l echelle ou l effet
 * est cense vivre : la ligne.
 *
 * APPARIEMENT. Les lignes sont appariees PAR RANG, et seulement dans les
 * paires dont les deux corps C110 portent le MEME nombre de lignes. Le
 * nombre de paires ecartees est publie : c est la population du test.
 *
 * AGREGATION. Le foisonnement d un seau est calcule sur les MOTS du seau
 * (somme EN / somme FR), pas sur la moyenne des ecarts par ligne : une
 * moyenne d ecarts donne le meme poids a une ligne de 3 mots et a une ligne
 * de 80.
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { corpsC110, MOTIF_MOT, EST_MOT } from './compter-mots.mjs';

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

function motsDe(ligne) {
  const motif = new RegExp(MOTIF_MOT.source, 'g');
  return (ligne.match(motif) || []).filter(EST_MOT);
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

const SEAUX = [
  { nom: '0 genitif', test: (d, g) => g === 0 },
  { nom: '0 < d <= 3', test: (d, g) => g > 0 && d <= 3 },
  { nom: '3 < d <= 6', test: (d, g) => d > 3 && d <= 6 },
  { nom: '6 < d <= 9', test: (d, g) => d > 6 && d <= 9 },
  { nom: 'd > 9', test: (d, g) => d > 9 },
];

let alignees = 0;
let ecartees = 0;
const ecarteesNoms = [];
const seaux = SEAUX.map((s) => ({ ...s, fr: 0, en: 0, lignes: 0 }));
const xs = [];
const ys = [];
let totFr = 0;
let totEn = 0;

for (const { relFr, relEn } of paires()) {
  const lf = corpsC110(lire(relFr)).split('\n');
  const le = corpsC110(lire(relEn)).split('\n');
  if (lf.length !== le.length) {
    ecartees += 1;
    if (ecarteesNoms.length < 12) ecarteesNoms.push(relFr + '  (' + lf.length + ' / ' + le.length + ')');
    continue;
  }
  alignees += 1;
  for (let i = 0; i < lf.length; i++) {
    const mf = motsDe(lf[i]);
    const me = motsDe(le[i]);
    if (mf.length === 0) continue;
    const g = mf.filter((t) => STRICT.has(t.toLowerCase())).length;
    const d = (g / mf.length) * 100;
    totFr += mf.length;
    totEn += me.length;
    for (const s of seaux) {
      if (s.test(d, g)) {
        s.fr += mf.length;
        s.en += me.length;
        s.lignes += 1;
        break;
      }
    }
    if (mf.length >= 10) {
      xs.push(d);
      ys.push((me.length / mf.length - 1) * 100);
    }
  }
}

const pc = (f, e) => (f ? ((e / f - 1) * 100) : 0);
const sig = (x) => (x >= 0 ? '+' : '') + x.toFixed(2) + ' %';

console.log('=== GENITIF ET FOISONNEMENT, A L ECHELLE DE LA LIGNE ===');
console.log('');
console.log('  POPULATION : paires FR/EN dont les deux corps C110 portent le MEME');
console.log('  nombre de lignes, appariees par rang.');
console.log('    paires alignees : ' + alignees);
console.log('    paires ecartees : ' + ecartees +
  '   (' + ((alignees / (alignees + ecartees)) * 100).toFixed(1) + ' % alignees)');
for (const n of ecarteesNoms) console.log('      ecartee : ' + n);
console.log('');
console.log('  Lignes portant au moins un mot FR, tous seaux : ' +
  seaux.reduce((a, b) => a + b.lignes, 0));
console.log('  Mots couverts : ' + totFr + ' FR -> ' + totEn + ' EN   ' + sig(pc(totFr, totEn)));
console.log('');
console.log('  SEAUX DE DENSITE GENITIVE DE LA LIGNE FR (de / du / des, pour 100 mots)');
console.log('    seau            lignes    mots FR    mots EN   foisonnement');
for (const s of seaux) {
  console.log('    ' + s.nom.padEnd(14) + String(s.lignes).padStart(8) +
    String(s.fr).padStart(11) + String(s.en).padStart(11) +
    sig(pc(s.fr, s.en)).padStart(15));
}

console.log('');
console.log('  Pearson ligne a ligne (densite, ecart relatif), lignes de 10 mots FR');
console.log('  ou plus : n = ' + xs.length + '   r = ' + pearson(xs, ys).toFixed(3));
