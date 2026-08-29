#!/usr/bin/env node
/**
 * mesure-inline.mjs - Pese le CODE INLINE, second canal de dilution du
 * foisonnement.
 *
 * POURQUOI CE SCRIPT EXISTE
 * -------------------------
 * C127 a mesure le premier canal : les blocs de code clotures dans un
 * callout, comptes comme de la prose par C110 et quasi inertes en
 * traduction (+0,8 % contre +3 a +8 % pour les fiches qui les portent).
 * Le 28/08 a nomme un SECOND canal sans le mesurer : le code inline entre
 * apostrophes inversees est lui aussi compte par C110 (la regle le dit :
 * "code inline INCLUS") et lui aussi inerte en traduction, puisque
 * `digitalWrite` s ecrit pareil dans les deux langues. Un module de langage
 * est par construction le corpus le plus dense en code inline du wiki, et
 * le lot 1 de cpp/ est sorti a +2,50 %, sous le plancher de tous les lots.
 * "Cause nommee, non mesuree (C118)". Ce script mesure.
 *
 * CE QU IL NE REIMPLEMENTE PAS
 * ----------------------------
 * compterMots est IMPORTE de compter-mots.mjs (regle figee de C110).
 * FRONT_MATTER et BLOC_CLOTURE sont des COPIES VERBATIM de compter-mots.mjs
 * l.32-33. estCloture est une COPIE VERBATIM de creer-fiche-en.mjs
 * l.1372-1375, deja copiee dans mesure-chevron.mjs.
 *
 * BANC DE NON-REGRESSION
 * ----------------------
 * La colonne deh de ce script DOIT rendre, fiche par fiche, la meme valeur
 * que celle de mesure-chevron.mjs. Une divergence est un defaut de la
 * copie, jamais une mesure.
 *
 * LA PARTITION
 * ------------
 *   tot = mots C110 de la fiche, regle en vigueur, inchangee ;
 *   deh = mots hors blocs en chevron (C127) ;
 *   din = mots DANS les spans de code inline, pris dans deh ;
 *   net = mots de deh PRIVES des spans - MESURE, jamais soustrait.
 * ECART = deh - din - net, attendu 0 : les apostrophes inversees ne sont
 * pas des mots. Un ECART non nul est un defaut du motif, pas une decouverte.
 *
 * Usage :
 *   node tools/mesure-inline.mjs --montrer <chemin>      (les spans, un par ligne)
 *   node tools/mesure-inline.mjs --lot <chemin> ...      (fiches nommees)
 *   node tools/mesure-inline.mjs --paires <prefixe>      (FR/EN, deux foisonnements)
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { compterMots } from './compter-mots.mjs';

const CONTENT = join(process.cwd(), 'content');

// COPIES VERBATIM de compter-mots.mjs l.32-33.
const FRONT_MATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;
const BLOC_CLOTURE = /^```[\s\S]*?^```[^\n]*$/gm;

// COPIE VERBATIM de creer-fiche-en.mjs l.1372-1375 (via mesure-chevron.mjs).
const estCloture = (ligne) => /^\s{0,3}>/.test(ligne) && ligne.includes('```');
const PREFIXE = /^\s{0,3}>\s?/;

// LE MOTIF DE SPAN. Une ou deux apostrophes inversees, contenu sans saut de
// ligne ni apostrophe inversee, fermeture symetrique. Teste par --montrer
// AVANT tout comptage (sous-regle de C110 du 27/08).
const INLINE = /(`{1,2})([^`\n]+?)\1/g;

const REGLE = [
  'Span inline = 1 ou 2 apostrophes inversees, contenu sans saut de ligne,',
  'fermeture symetrique. Cherche APRES retrait du front matter, des blocs de',
  'code clotures (masque C110) et des blocs en chevron (C127) : ces trois',
  'zones ne portent pas de code inline, elles SONT du code.',
  'Les mots sortent de compterMots, importe de compter-mots.mjs (regle C110).',
  'net est MESURE sur le texte prive des spans, jamais soustrait.',
].join('\n  ');

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
const normaliser = (p) => p.replace(/^content\//, '').split(sep).join('/');
const chemin = (rel) => join(CONTENT, rel.split('/').join(sep));
const lire = (rel) => readFileSync(chemin(rel), 'utf8');

function analyse(rel) {
  const texte = lire(rel);
  const lignes = texte.split(/\r?\n/);

  // 1. Blocs en chevron, predicat de C127.
  const idx = [];
  for (let i = 0; i < lignes.length; i += 1) if (estCloture(lignes[i])) idx.push(i);
  const dansBloc = new Set();
  for (let k = 0; k + 1 < idx.length; k += 2) {
    for (let i = idx[k]; i <= idx[k + 1]; i += 1) dansBloc.add(i);
  }
  const horsChevron = lignes.filter((_, i) => !dansBloc.has(i)).join('\n');

  // 2. Zone de recherche des spans : hors front matter, hors blocs clotures.
  const zone = horsChevron.replace(FRONT_MATTER, '').replace(BLOC_CLOTURE, ' ');

  // 3. Les spans.
  const spans = [];
  let m;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(zone)) !== null) spans.push(m[2]);
  const prive = zone.replace(INLINE, ' ');

  return {
    rel,
    blocs: idx.length >> 1,
    spans: spans.length,
    contenus: spans,
    tot: compterMots(texte),
    deh: compterMots(horsChevron),
    din: compterMots(spans.join('\n')),
    net: compterMots(prive),
  };
}

function ligneRapport(r) {
  const part = r.deh ? ((r.din / r.deh) * 100).toFixed(1) : '0.0';
  const ecart = r.deh - r.din - r.net;
  return (
    '  ' + r.rel.padEnd(46) +
    String(r.blocs).padStart(3) + ' bl' +
    String(r.spans).padStart(5) + ' sp' +
    String(r.tot).padStart(7) + ' tot' +
    String(r.deh).padStart(7) + ' deh' +
    String(r.din).padStart(6) + ' din' +
    String(r.net).padStart(7) + ' net' +
    part.padStart(7) + ' %' +
    (ecart === 0 ? '' : '  ECART:' + ecart)
  );
}

function enTete(titre) {
  console.log('=== MESURE DU CODE INLINE - ' + titre + ' ===');
  console.log('  ' + REGLE);
  console.log('');
  console.log('  bl = blocs en chevron, sp = spans inline, tot = mots C110,');
  console.log('  deh = mots hors chevron, din = mots DANS les spans,');
  console.log('  net = mots hors chevron ET hors spans, % = din / deh.');
  console.log('  ECART non nul = defaut du motif, jamais une mesure.');
  console.log('');
}

function total(rs, titre) {
  const s = (f) => rs.reduce((a, r) => a + f(r), 0);
  console.log('  ' + '-'.repeat(100));
  console.log(
    '  ' + (titre + ' (' + rs.length + ' fiches)').padEnd(46) +
    String(s((r) => r.blocs)).padStart(3) + ' bl' +
    String(s((r) => r.spans)).padStart(5) + ' sp' +
    String(s((r) => r.tot)).padStart(7) + ' tot' +
    String(s((r) => r.deh)).padStart(7) + ' deh' +
    String(s((r) => r.din)).padStart(6) + ' din' +
    String(s((r) => r.net)).padStart(7) + ' net'
  );
}

const args = process.argv.slice(2);
const MONTRER = args.includes('--montrer');
const PAIRES = args.includes('--paires');
const chemins = args.filter((a) => !a.startsWith('--')).map(normaliser);

if (MONTRER) {
  for (const rel of chemins) {
    const r = analyse(rel);
    enTete('SPANS EN ENTIER - ECHANTILLON NOMME');
    console.log('  ' + r.rel + ' - ' + r.spans + ' spans, ' + r.din + ' mots dedans');
    console.log('');
    r.contenus.forEach((c, i) => {
      console.log('    ' + String(i + 1).padStart(4) + '  [' + c + ']');
    });
  }
} else if (PAIRES) {
  const prefixe = chemins[0] || '';
  const tous = walk(CONTENT)
    .map(versWeb)
    .filter((w) => w.startsWith(prefixe) && !w.startsWith('en/') && !w.startsWith('templates/'))
    .sort();
  enTete('APPARIEMENT FR / EN SUR ' + (prefixe || 'TOUT content/'));
  const paires = [];
  for (const rel of tous) {
    const relEn = 'en/' + rel.replace(/\.md$/, '-en.md');
    if (!existsSync(chemin(relEn))) continue;
    paires.push([analyse(rel), analyse(relEn)]);
  }
  if (!paires.length) {
    console.log('  (aucune paire)');
  }
  for (const [f, e] of paires) {
    const pTot = ((e.tot / f.tot - 1) * 100).toFixed(2);
    const pDeh = ((e.deh / f.deh - 1) * 100).toFixed(2);
    const pNet = ((e.net / f.net - 1) * 100).toFixed(2);
    console.log(
      '  ' + f.rel.padEnd(46) +
      ' tot ' + String(f.tot).padStart(5) + '->' + String(e.tot).padStart(5) + ' ' + pTot.padStart(7) + ' %' +
      '   deh ' + pDeh.padStart(7) + ' %' +
      '   net ' + String(f.net).padStart(5) + '->' + String(e.net).padStart(5) + ' ' + pNet.padStart(7) + ' %'
    );
  }
  if (paires.length) {
    const s = (i, f) => paires.reduce((a, p) => a + f(p[i]), 0);
    const bloc = (i) => ({
      tot: s(i, (r) => r.tot), deh: s(i, (r) => r.deh),
      din: s(i, (r) => r.din), net: s(i, (r) => r.net),
    });
    const fr = bloc(0);
    const en = bloc(1);
    console.log('  ' + '-'.repeat(100));
    console.log('  TOTAUX FR : tot ' + fr.tot + '  deh ' + fr.deh + '  din ' + fr.din + '  net ' + fr.net);
    console.log('  TOTAUX EN : tot ' + en.tot + '  deh ' + en.deh + '  din ' + en.din + '  net ' + en.net);
    console.log('  foisonnement tot : ' + ((en.tot / fr.tot - 1) * 100).toFixed(2) + ' %');
    console.log('  foisonnement deh : ' + ((en.deh / fr.deh - 1) * 100).toFixed(2) + ' %');
    console.log('  foisonnement net : ' + ((en.net / fr.net - 1) * 100).toFixed(2) + ' %');
    console.log('  foisonnement din : ' + ((en.din / fr.din - 1) * 100).toFixed(2) + ' %   (inerte si proche de 0)');
  }
} else {
  const rs = chemins.map(analyse);
  enTete('LOT NOMME');
  console.log('  fiches nommees : ' + chemins.length);
  console.log('');
  for (const r of rs) console.log(ligneRapport(r));
  if (rs.length > 1) total(rs, 'LOT');
}
