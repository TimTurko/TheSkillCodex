#!/usr/bin/env node
/**
 * titres-doublons.mjs - Liste les title: portes par plus d une fiche.
 *
 * POURQUOI CE SCRIPT EXISTE
 * -------------------------
 * Le chantier FR de nommage s arbitre sur une liste de paires dont les deux
 * fiches portent le MEME title:. Aucun mode existant ne rend cette liste :
 * --controle compare une fiche EN a sa source, --libelles compare un libelle
 * de wikilink au title: de sa cible. Ni l un ni l autre ne regarde deux
 * title: entre eux. Le chiffre "dix paires" etait donc reporte de seance en
 * seance sans instrument (C119).
 *
 * Le regroupement se fait sur une forme normalisee - accents retires, casse
 * repliee, ponctuation reduite - pour que "Prise en main d Arduino" et
 * "Prise en main d'Arduino" tombent dans le meme groupe. La forme BRUTE est
 * celle qui s affiche : le groupe est un candidat a lire, pas un verdict.
 *
 * Les deux cotes se comptent separement. Une collision FR est un chantier de
 * nommage a la source ; une collision EN est le produit du test 2 de C125 et
 * peut etre assumee (motif du 26/08).
 *
 * CE QUE LE SCRIPT N ECRIT PAS
 * ----------------------------
 * Rien. Aucun fichier n est touche.
 *
 * Usage :
 *   node tools/titres-doublons.mjs
 */

import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

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

// Le title: se lit DANS le front matter seulement. Une ligne "title:" du
// corps - il y en a dans les blocs de code de configuration - ne compte pas.
function lireTitre(texte) {
  const m = texte.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) return null;
  const t = m[1].match(/^title:\s*(.+?)\s*$/m);
  if (!t) return null;
  return t[1].replace(/^["']|["']$/g, '').trim();
}

function normaliser(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function groupes(fiches, titre) {
  const par = new Map();
  let sansTitre = 0;
  for (const rel of fiches) {
    const t = lireTitre(lire(rel));
    if (!t) {
      sansTitre += 1;
      continue;
    }
    const cle = normaliser(t);
    if (!par.has(cle)) par.set(cle, []);
    par.get(cle).push({ rel, t });
  }

  const collisions = [...par.entries()]
    .filter(([, l]) => l.length > 1)
    .sort((a, b) => (b[1].length - a[1].length) || a[0].localeCompare(b[0]));

  let fichesEnCollision = 0;
  console.log('');
  console.log('  --- ' + titre);
  for (const [, l] of collisions) {
    fichesEnCollision += l.length;
    console.log('');
    console.log('    ' + l.length + ' fiches portent ce titre :');
    for (const x of l) console.log('      ' + x.rel.padEnd(56) + x.t);
  }
  if (!collisions.length) console.log('    (aucune collision)');

  console.log('');
  console.log('    fiches lues              : ' + fiches.length);
  console.log('    sans title:              : ' + sansTitre);
  console.log('    titres distincts         : ' + par.size);
  console.log('    GROUPES EN COLLISION     : ' + collisions.length);
  console.log('    fiches concernees        : ' + fichesEnCollision);
}

const tous = walk(CONTENT).map(versWeb).filter((w) => !w.startsWith('templates/')).sort();
const fr = tous.filter((w) => !w.startsWith('en/'));
const en = tous.filter((w) => w.startsWith('en/'));

console.log('=== TITRES PORTES PAR PLUS D UNE FICHE ===');
console.log('  Regroupement sur forme normalisee (accents retires, casse repliee,');
console.log('  ponctuation reduite a un blanc). La forme BRUTE est affichee.');
console.log('  Un groupe est un CANDIDAT A LIRE, jamais un verdict : deux fiches');
console.log('  de familles differentes peuvent legitimement porter le meme titre.');
console.log('  templates/ exclu. FR et EN comptes separement.');

groupes(fr, 'COTE FRANCAIS');
groupes(en, 'COTE ANGLAIS');
