#!/usr/bin/env node
/**
 * predicteur-3008s11.mjs - OUTIL JETABLE (C114), seance 11 du 30/08.
 *
 * Le bloc 139 a rendu une echelle monotone du foisonnement selon la densite
 * genitive de la LIGNE : +6,89 / +3,92 / +3,49 / +2,00 / +0,63 %. Ce script
 * demande si cette echelle PREDIT, c est-a-dire si le melange de seaux d une
 * source FR - lisible AVANT toute traduction - fait mieux qu une constante.
 *
 * MODELE. Les mots FR d une fiche sont repartis dans les cinq seaux selon la
 * densite genitive de leur ligne, puis
 *     EN predit = somme( mots_seau x (1 + taux_seau) )
 * Les taux de seau sont RECALCULES ici sur les 242 paires, jamais recopies
 * du bloc 139 (C119). Le modele temoin est la constante : le foisonnement
 * moyen du corpus applique a toutes les fiches.
 *
 * BIAIS CONNU ET DECLARE : les taux de seau sont estimes sur le meme corpus
 * que celui ou le modele est evalue. Ce n est donc pas une validation hors
 * echantillon ; c est la borne HAUTE de ce que le modele peut faire. Elle
 * suffit a trancher la question posee - y a-t-il du signal - et ne suffirait
 * pas a promettre une performance sur un corpus neuf.
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
const NSEAUX = 5;

function seauDe(g, n) {
  if (g === 0) return 0;
  const d = (g / n) * 100;
  if (d <= 3) return 1;
  if (d <= 6) return 2;
  if (d <= 9) return 3;
  return 4;
}

function motsDe(ligne) {
  const motif = new RegExp(MOTIF_MOT.source, 'g');
  return (ligne.match(motif) || []).filter(EST_MOT);
}

// Repartition des mots d un texte FR dans les cinq seaux.
function profil(texte) {
  const p = new Array(NSEAUX).fill(0);
  let tot = 0;
  for (const l of corpsC110(texte).split('\n')) {
    const m = motsDe(l);
    if (!m.length) continue;
    const g = m.filter((t) => STRICT.has(t.toLowerCase())).length;
    p[seauDe(g, m.length)] += m.length;
    tot += m.length;
  }
  return { p, tot };
}

const paires = [];
for (const relEn of walk(join(CONTENT, 'en')).map(versWeb).sort()) {
  const tEn = lire(relEn);
  const m = tEn.match(/^source_fr:\s*(.+?)\s*$/m);
  if (!m) continue;
  const relFr = m[1];
  if (!existsSync(join(CONTENT, relFr.split('/').join(sep)))) continue;
  paires.push({ relFr, relEn });
}

// 1. Taux de seau, recalcules ici sur les lignes appariees.
const frSeau = new Array(NSEAUX).fill(0);
const enSeau = new Array(NSEAUX).fill(0);
let alignees = 0;
for (const { relFr, relEn } of paires) {
  const lf = corpsC110(lire(relFr)).split('\n');
  const le = corpsC110(lire(relEn)).split('\n');
  if (lf.length !== le.length) continue;
  alignees += 1;
  for (let i = 0; i < lf.length; i++) {
    const mf = motsDe(lf[i]);
    if (!mf.length) continue;
    const g = mf.filter((t) => STRICT.has(t.toLowerCase())).length;
    const s = seauDe(g, mf.length);
    frSeau[s] += mf.length;
    enSeau[s] += motsDe(le[i]).length;
  }
}
const taux = frSeau.map((f, i) => (f ? enSeau[i] / f : 1));

// 2. Constante temoin : foisonnement du corpus, mesure sur les memes paires.
let totFr = 0;
let totEn = 0;
const fiches = [];
for (const { relFr, relEn } of paires) {
  const pf = profil(lire(relFr));
  const en = profil(lire(relEn)).tot;
  if (!pf.tot) continue;
  totFr += pf.tot;
  totEn += en;
  const predit = pf.p.reduce((a, w, i) => a + w * taux[i], 0);
  fiches.push({
    relFr,
    fr: pf.tot,
    en,
    reel: (en / pf.tot - 1) * 100,
    modele: (predit / pf.tot - 1) * 100,
  });
}
const constante = (totEn / totFr - 1) * 100;

const errModele = fiches.map((f) => Math.abs(f.reel - f.modele));
const errConst = fiches.map((f) => Math.abs(f.reel - constante));
const moy = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;

const NOMS = ['0 genitif', '0 < d <= 3', '3 < d <= 6', '6 < d <= 9', 'd > 9'];
console.log('=== LA DENSITE GENITIVE DE LA SOURCE PREDIT-ELLE LE FOISONNEMENT ? ===');
console.log('');
console.log('  POPULATION : ' + fiches.length + ' paires evaluees ; taux de seau estimes');
console.log('  sur les ' + alignees + ' paires a lignes appariees. Biais declare : taux estimes');
console.log('  et modele evalue sur le MEME corpus - borne haute, pas validation.');
console.log('');
console.log('  TAUX DE SEAU RECALCULES');
for (let i = 0; i < NSEAUX; i++) {
  console.log('    ' + NOMS[i].padEnd(12) + String(frSeau[i]).padStart(8) + ' mots FR   ' +
    'foisonnement ' + (((taux[i] - 1) * 100) >= 0 ? '+' : '') + ((taux[i] - 1) * 100).toFixed(2) + ' %');
}
console.log('');
console.log('  Constante temoin (foisonnement du corpus) : +' + constante.toFixed(2) + ' %');
console.log('');
console.log('  ERREUR ABSOLUE MOYENNE, en points de foisonnement');
console.log('    modele a cinq seaux : ' + moy(errModele).toFixed(2));
console.log('    modele constant     : ' + moy(errConst).toFixed(2));
const gain = (1 - moy(errModele) / moy(errConst)) * 100;
console.log('    gain relatif        : ' + gain.toFixed(1) + ' %');

const sous3 = fiches.filter((f) => Math.abs(f.reel - f.modele) < 3).length;
console.log('');
console.log('  fiches a erreur de modele < 3 points : ' + sous3 + ' / ' + fiches.length +
  '   (' + ((sous3 / fiches.length) * 100).toFixed(1) + ' %)');
const sous3c = fiches.filter((f) => Math.abs(f.reel - constante) < 3).length;
console.log('  meme mesure pour la constante        : ' + sous3c + ' / ' + fiches.length +
  '   (' + ((sous3c / fiches.length) * 100).toFixed(1) + ' %)');

console.log('');
console.log('  LES TROIS FICHES DU LOT 14');
for (const c of ['embarque/pcb/kicad.md', 'embarque/mcu/xiao/xiao-prise-en-main.md',
  'embarque/mcu/xiao/xiao-sense.md']) {
  const f = fiches.find((x) => x.relFr === c);
  if (f) {
    console.log('    ' + c.padEnd(44) + ' reel ' + (f.reel >= 0 ? '+' : '') + f.reel.toFixed(1) +
      ' %   modele ' + (f.modele >= 0 ? '+' : '') + f.modele.toFixed(1) + ' %');
  }
}

console.log('');
console.log('  PAR MODULE (prefixe de chemin), reel contre modele');
const mods = new Map();
for (const f of fiches) {
  const m = f.relFr.split('/').slice(0, 3).join('/');
  if (!mods.has(m)) mods.set(m, { fr: 0, en: 0, pred: 0, n: 0 });
  const o = mods.get(m);
  o.fr += f.fr;
  o.en += f.en;
  o.pred += f.fr * (1 + f.modele / 100);
  o.n += 1;
}
const tri = [...mods.entries()].sort((a, b) => (a[1].en / a[1].fr) - (b[1].en / b[1].fr));
for (const [m, o] of tri) {
  const reel = (o.en / o.fr - 1) * 100;
  const mod = (o.pred / o.fr - 1) * 100;
  console.log('    ' + m.padEnd(36) + String(o.n).padStart(4) + ' fiches   reel ' +
    ((reel >= 0 ? '+' : '') + reel.toFixed(2) + ' %').padStart(9) + '   modele ' +
    ((mod >= 0 ? '+' : '') + mod.toFixed(2) + ' %').padStart(9));
}

console.log('');
console.log('  LES HUIT FICHES QUE LE MODELE RATE LE PLUS');
for (const f of [...fiches].sort((a, b) => Math.abs(b.reel - b.modele) - Math.abs(a.reel - a.modele)).slice(0, 8)) {
  console.log('    ' + f.relFr.padEnd(52) + ' reel ' + (f.reel >= 0 ? '+' : '') + f.reel.toFixed(1) +
    ' %   modele ' + (f.modele >= 0 ? '+' : '') + f.modele.toFixed(1) + ' %');
}
