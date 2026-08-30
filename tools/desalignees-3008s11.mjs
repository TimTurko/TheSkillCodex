#!/usr/bin/env node
/**
 * desalignees-3008s11.mjs - OUTIL JETABLE (C114), seance 11 du 30/08.
 *
 * Le bloc 139 a ecarte 9 paires sur 242 parce que leurs corps C110 ne
 * portent pas le meme nombre de lignes. Trois d entre elles perdent entre 37
 * et 43 lignes en anglais et rien ne l a jamais instruit : ni --controle
 * (qui compare des nombres d embeds et de liens), ni derive-traduction (qui
 * compare des empreintes de SOURCE), ni compter-mots (qui somme des mots).
 *
 * Ce script rend, pour chaque paire desalignee : lignes et mots des deux
 * cotes, foisonnement, et la decomposition PAR REGISTRE en LIGNES, pour dire
 * OU les lignes ont disparu ou apparu.
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { corpsC110, compterMots } from './compter-mots.mjs';

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

const REGISTRES = ['titre', 'callout', 'tableau', 'liste', 'paragraphe', 'vide'];

function registreDeLigne(ligne) {
  const t = ligne.replace(/^[ \t]+/, '');
  if (t === '') return 'vide';
  if (t.startsWith('>')) return 'callout';
  if (/^#{1,6}\s/.test(t)) return 'titre';
  if (t.startsWith('|')) return 'tableau';
  if (/^([-*+]|\d+[.)])\s/.test(t)) return 'liste';
  return 'paragraphe';
}

function profilLignes(texte) {
  const p = new Map(REGISTRES.map((r) => [r, 0]));
  const lignes = corpsC110(texte).split('\n');
  for (const l of lignes) p.set(registreDeLigne(l), p.get(registreDeLigne(l)) + 1);
  return { n: lignes.length, p };
}

console.log('=== LES PAIRES DONT LES CORPS N ONT PAS LE MEME NOMBRE DE LIGNES ===');
console.log('');
console.log('  POPULATION : les 242 paires du corpus ; sont listees celles dont');
console.log('  corpsC110(FR) et corpsC110(EN) n ont pas le meme nombre de lignes.');
console.log('  Comptage de mots : compterMots, importe.');
console.log('');

const desal = [];
for (const relEn of walk(join(CONTENT, 'en')).map(versWeb).sort()) {
  const tEn = lire(relEn);
  const m = tEn.match(/^source_fr:\s*(.+?)\s*$/m);
  if (!m) continue;
  const relFr = m[1];
  if (!existsSync(join(CONTENT, relFr.split('/').join(sep)))) continue;
  const tFr = lire(relFr);
  const pf = profilLignes(tFr);
  const pe = profilLignes(tEn);
  if (pf.n === pe.n) continue;
  desal.push({ relFr, tFr, tEn, pf, pe });
}

console.log('  paires desalignees : ' + desal.length + ' sur 242');
console.log('');

const moins = [];
const plus = [];
for (const d of desal) {
  const fr = compterMots(d.tFr);
  const en = compterMots(d.tEn);
  const fois = (en / fr - 1) * 100;
  const dl = d.pe.n - d.pf.n;
  (dl < 0 ? moins : plus).push({ ...d, fr, en, fois, dl });
}

function bloc(titre, liste) {
  console.log('  --- ' + titre + ' (' + liste.length + ') ---');
  for (const x of liste.sort((a, b) => a.dl - b.dl)) {
    console.log('');
    console.log('    ' + x.relFr);
    console.log('      lignes  FR ' + String(x.pf.n).padStart(4) + '   EN ' +
      String(x.pe.n).padStart(4) + '   delta ' + (x.dl > 0 ? '+' : '') + x.dl);
    console.log('      mots    FR ' + String(x.fr).padStart(4) + '   EN ' +
      String(x.en).padStart(4) + '   foisonnement ' +
      (x.fois >= 0 ? '+' : '') + x.fois.toFixed(2) + ' %');
    const parts = REGISTRES.map((r) => {
      const a = x.pf.p.get(r);
      const b = x.pe.p.get(r);
      return r + ' ' + a + '/' + b + (a === b ? '' : ' (' + (b - a > 0 ? '+' : '') + (b - a) + ')');
    });
    console.log('      lignes par registre FR/EN : ' + parts.join('   '));
  }
  console.log('');
}

bloc('L ANGLAIS A MOINS DE LIGNES', moins);
bloc('L ANGLAIS A PLUS DE LIGNES', plus);

const moyM = moins.length ? moins.reduce((a, b) => a + b.fois, 0) / moins.length : 0;
const moyP = plus.length ? plus.reduce((a, b) => a + b.fois, 0) / plus.length : 0;
console.log('  foisonnement moyen, anglais plus court : ' +
  (moyM >= 0 ? '+' : '') + moyM.toFixed(2) + ' %');
console.log('  foisonnement moyen, anglais plus long  : ' +
  (moyP >= 0 ? '+' : '') + moyP.toFixed(2) + ' %');
