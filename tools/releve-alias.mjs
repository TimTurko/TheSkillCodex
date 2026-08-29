#!/usr/bin/env node
/**
 * releve-alias.mjs - RELEVE JETABLE (C114), aucune ecriture.
 *
 * Chiffre la passe de rattrapage du correctif d alias (c), arbitree le 29/08
 * (suite 5) : creer-fiche-en.mjs RETIRE les aliases des fiches EN, donc un
 * wikilink qui VISE un alias est suffixe vers un slug qui n aura jamais de
 * fiche. Traduire la cible ne repare rien.
 *
 * Le motif de wikilink est une COPIE VERBATIM de compter() (creer-fiche-en.mjs
 * l.395) : negation d embed en tete, donc ![[x]] ne compte pas. La cible se
 * lit avant le premier | (echappe ou non, C62) et avant le premier #.
 *
 * Usage : node tools/releve-alias.mjs
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, sep, basename } from 'node:path';

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

function frontMatter(texte) {
  const m = texte.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  return m ? { bloc: m[1], corps: texte.slice(m[0].length) } : null;
}

// COPIE VERBATIM de audit-wikilinks.mjs readAliases (l.64-89).
function lireAliases(texte) {
  const fm = texte.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return [];
  const bloc = fm[1];
  const inline = bloc.match(/^aliases:\s*\[(.*)\]\s*$/m);
  if (inline) {
    return inline[1].split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  }
  const liste = bloc.match(/^aliases:\s*\r?\n((?:\s*-\s*.+\r?\n?)+)/m);
  if (liste) {
    return liste[1]
      .split(/\r?\n/)
      .map((l) => l.replace(/^\s*-\s*/, '').trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  return [];
}

// COPIE VERBATIM du motif de compter() (creer-fiche-en.mjs l.395).
const LIEN = /(?<!!)\[\[[^\]]+\]\]/g;

function ciblesDe(texte) {
  const corps = (frontMatter(texte) || { corps: texte }).corps;
  const sortie = [];
  for (const brut of corps.match(LIEN) || []) {
    const dedans = brut.slice(2, -2);
    let cible = dedans.split(/\\\||\|/)[0];
    cible = cible.split('#')[0].replace(/\\+$/, '').trim();
    if (cible) sortie.push(cible);
  }
  return sortie;
}

const tous = walk(CONTENT).map(versWeb).filter((w) => !w.startsWith('templates/')).sort();
const fr = tous.filter((w) => !w.startsWith('en/'));
const en = tous.filter((w) => w.startsWith('en/'));
const lire = (rel) => readFileSync(join(CONTENT, rel.split('/').join(sep)), 'utf8');

// --- 1. table d alias cote FR
const aliasVersPorteuse = new Map(); // alias -> [fiches]
let aliasEnFr = 0;
for (const rel of fr) {
  for (const a of lireAliases(lire(rel))) {
    aliasEnFr += 1;
    if (!aliasVersPorteuse.has(a)) aliasVersPorteuse.set(a, []);
    aliasVersPorteuse.get(a).push(rel);
  }
}
let aliasEnEn = 0;
const fichesEnAAliases = [];
for (const rel of en) {
  const n = lireAliases(lire(rel)).length;
  if (n) {
    aliasEnEn += n;
    fichesEnAAliases.push(rel);
  }
}

// --- 2. index des slugs de fiches reelles (pour distinguer alias et fiche)
const slugsFr = new Set(fr.map((w) => basename(w.replace(/\.md$/, ''))));

console.log('=== RELEVE DES ALIAS ET DE LEUR STOCK ===');
console.log('  fiches balayees : ' + tous.length + '   FR ' + fr.length + '   EN ' + en.length);
console.log('  entrees aliases: en FR : ' + aliasEnFr + '   distinctes : ' + aliasVersPorteuse.size);
console.log('  entrees aliases: en EN : ' + aliasEnEn + '   sur ' + fichesEnAAliases.length + ' fiche(s)');
console.log('');

// --- 3. occurrences FR visant un alias
const occFr = new Map();
const fichesFrParAlias = new Map();
for (const rel of fr) {
  for (const c of ciblesDe(lire(rel))) {
    const court = basename(c);
    if (!aliasVersPorteuse.has(court) || slugsFr.has(court)) continue;
    occFr.set(court, (occFr.get(court) || 0) + 1);
    if (!fichesFrParAlias.has(court)) fichesFrParAlias.set(court, new Set());
    fichesFrParAlias.get(court).add(rel);
  }
}
let totalFr = 0;
console.log('  --- COTE FRANCAIS : occurrences visant un ALIAS');
for (const [a, n] of [...occFr].sort((x, y) => y[1] - x[1])) {
  totalFr += n;
  console.log(
    '    ' + a.padEnd(18) + String(n).padStart(4) + ' occ   sur ' +
    String(fichesFrParAlias.get(a).size).padStart(3) + ' fiche(s)   -> porteuse ' +
    aliasVersPorteuse.get(a).join(', ')
  );
}
console.log('    alias vises : ' + occFr.size + '   occurrences : ' + totalFr);
console.log('');

// --- 4. stock EN : occurrences visant <alias>-en
const suffixes = new Map(); // <alias>-en -> alias
for (const a of aliasVersPorteuse.keys()) suffixes.set(a + '-en', a);
const occEn = new Map();
const fichesEnParAlias = new Map();
for (const rel of en) {
  for (const c of ciblesDe(lire(rel))) {
    const court = basename(c);
    if (!suffixes.has(court)) continue;
    occEn.set(court, (occEn.get(court) || 0) + 1);
    if (!fichesEnParAlias.has(court)) fichesEnParAlias.set(court, new Set());
    fichesEnParAlias.get(court).add(rel);
  }
}
let totalEn = 0;
const fichesTouchees = new Set();
console.log('  --- COTE ANGLAIS : stock deja ecrit, cible <alias>-en');
for (const [a, n] of [...occEn].sort((x, y) => y[1] - x[1])) {
  totalEn += n;
  for (const f of fichesEnParAlias.get(a)) fichesTouchees.add(f);
  const porteuse = aliasVersPorteuse.get(suffixes.get(a));
  const cibleJuste = porteuse.map((p) => basename(p.replace(/\.md$/, '')) + '-en').join(', ');
  console.log(
    '    ' + a.padEnd(18) + String(n).padStart(4) + ' occ   sur ' +
    String(fichesEnParAlias.get(a).size).padStart(3) + ' fiche(s)   -> a recrire en ' + cibleJuste
  );
}
console.log('    cibles alias suffixees : ' + occEn.size + '   occurrences : ' + totalEn +
  '   fiches EN concernees : ' + fichesTouchees.size);
console.log('');
console.log('  --- LES FICHES EN CONCERNEES');
for (const f of [...fichesTouchees].sort()) console.log('    ' + f);
console.log('');
console.log('  --- EXISTENCE DES CIBLES SUFFIXEES COMME FICHIER');
for (const a of [...occEn.keys()].sort()) {
  const candidats = en.filter((w) => basename(w.replace(/\.md$/, '')) === a);
  console.log('    ' + a.padEnd(18) + (candidats.length ? candidats.join(', ') : 'AUCUN FICHIER'));
}
console.log('');
console.log('  --- PORTEUSES ET LEUR JUMELLE EN');
const porteuses = new Set();
for (const a of occEn.keys()) for (const p of aliasVersPorteuse.get(suffixes.get(a))) porteuses.add(p);
for (const p of [...porteuses].sort()) {
  const jumelle = 'en/' + p.replace(/\.md$/, '') + '-en.md';
  console.log('    ' + p.padEnd(46) + (existsSync(join(CONTENT, jumelle.split('/').join(sep))) ? 'jumelle EN presente' : 'JUMELLE EN ABSENTE') + '   ' + jumelle);
}
