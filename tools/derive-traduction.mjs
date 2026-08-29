#!/usr/bin/env node
/**
 * derive-traduction.mjs - Liste les fiches EN dont la source FR a bouge.
 *
 * Le remede a la derive de traduction n'est pas la synchronisation, c'est la
 * detection : chaque fiche EN porte en front matter le chemin de sa source FR
 * et l'empreinte du contenu de cette source au moment de la generation. Ce
 * script recalcule l'empreinte et compare. La derive devient une liste
 * mesurable au lieu d'un risque invisible.
 *
 * L'empreinte est un sha256 de contenu, pas un hash de commit (arbitrage du
 * 22/08) : la fiche EN se cree apres la passe C109, donc sur un fichier FR
 * pas encore committe. Un hash de commit y pointerait l'etat d'AVANT la passe
 * et signalerait tout le lot comme derive des le premier push.
 *
 * Statuts :
 *   A JOUR      empreinte identique, rien a faire
 *   DERIVE      la source FR a change depuis la generation : la fiche EN est
 *               a relire contre sa source
 *   SANS SOURCE la source FR a ete renommee ou supprimee
 *   SANS MARQUE la fiche EN n'a pas de marqueur (creee a la main ?)
 *   MARQUE INVALIDE  le champ source_sha256 existe mais n'est pas un sha256 :
 *               64 caracteres hexadecimaux minuscules. C'est une empreinte
 *               INVENTEE, pas une empreinte perimee, et les deux n'ont ni la
 *               meme cause ni le meme remede. Une empreinte perimee se recale
 *               apres relecture ; une empreinte inventee signale que la fiche
 *               a ete REECRITE EN ENTIER, donc que tout son front matter est
 *               suspect. Ajoute le 29/08 (suite 8), apres deux occurrences du
 *               meme defaut - E4 du 29/08 (suite 6) et E1 du 29/08 (suite 7),
 *               un « PLACEHOLDER » recopie a la main en reecrivant la fiche.
 *               Sans ce statut, les deux sortaient en DERIVE et rien ne les
 *               distinguait.
 *   ORPHELINE   une fiche FR n'a aucune fiche EN (avec --manquantes)
 *
 * Usage :
 *   node tools/derive-traduction.mjs
 *   node tools/derive-traduction.mjs --tout          ajoute les fiches a jour
 *   node tools/derive-traduction.mjs --manquantes    ajoute les FR sans EN
 *
 * Exit 1 si au moins une MARQUE INVALIDE, DERIVE, SANS SOURCE ou SANS MARQUE.
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { createHash } from 'node:crypto';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'content');
const RACINE_EN = join(CONTENT, 'en');

const TOUT = process.argv.includes('--tout');
const MANQUANTES = process.argv.includes('--manquantes');

function walk(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (e.isFile() && e.name.endsWith('.md')) acc.push(full);
  }
  return acc;
}

function versWeb(absolu) {
  return relative(CONTENT, absolu).split(sep).join('/');
}

function frontMatter(texte) {
  const m = texte.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  return m ? m[1] : null;
}

function champ(bloc, nom) {
  const m = bloc.match(new RegExp('^' + nom + ':\\s*(.+?)\\s*$', 'm'));
  return m ? m[1].replace(/^["']|["']$/g, '') : null;
}

function sha256(texte) {
  return createHash('sha256').update(texte, 'utf8').digest('hex');
}

if (!existsSync(RACINE_EN)) {
  console.log('content/en/ n existe pas encore : aucune fiche EN a controler.');
  process.exit(0);
}

const fichesEn = walk(RACINE_EN).map(versWeb);
const sourcesCouvertes = new Set();
// Un sha256 de contenu s'ecrit en 64 hexadecimaux minuscules. Toute autre
// forme n'est pas une empreinte perimee : c'est une empreinte INVENTEE.
const SHA256 = /^[0-9a-f]{64}$/;

const lots = {
  'MARQUE INVALIDE': [],
  DERIVE: [],
  'SANS SOURCE': [],
  'SANS MARQUE': [],
  'A JOUR': [],
};
const STATUTS = ['MARQUE INVALIDE', 'DERIVE', 'SANS SOURCE', 'SANS MARQUE', 'A JOUR'];

for (const relEn of fichesEn) {
  const texteEn = readFileSync(join(CONTENT, relEn.split('/').join(sep)), 'utf8');
  const fm = frontMatter(texteEn);
  const relFr = fm && champ(fm, 'source_fr');
  const attendu = fm && champ(fm, 'source_sha256');

  if (!relFr || !attendu) {
    lots['SANS MARQUE'].push([relEn, '']);
    continue;
  }
  sourcesCouvertes.add(relFr);

  if (!SHA256.test(attendu)) {
    lots['MARQUE INVALIDE'].push([relEn, relFr + '   marqueur lu : ' + attendu]);
    continue;
  }

  const absFr = join(CONTENT, relFr.split('/').join(sep));
  if (!existsSync(absFr)) {
    lots['SANS SOURCE'].push([relEn, relFr]);
    continue;
  }

  const reel = sha256(readFileSync(absFr, 'utf8'));
  if (reel === attendu) lots['A JOUR'].push([relEn, relFr]);
  else lots.DERIVE.push([relEn, relFr + '   consigne ' + attendu.slice(0, 12) + ' / reel ' + reel.slice(0, 12)]);
}

console.log('=== DERIVE DE TRADUCTION ===');
console.log(fichesEn.length + ' fiche(s) EN controlee(s)');
console.log('');

for (const statut of STATUTS) {
  const lot = lots[statut];
  if (!lot.length) continue;
  if (statut === 'A JOUR' && !TOUT) continue;
  console.log('--- ' + statut + ' (' + lot.length + ') ---');
  for (const [relEn, detail] of lot.sort()) {
    console.log('  ' + relEn + (detail ? '   <- ' + detail : ''));
  }
  console.log('');
}

if (MANQUANTES) {
  const fr = walk(CONTENT)
    .map(versWeb)
    .filter((w) => !w.startsWith('en/') && !w.startsWith('templates/'));
  const orphelines = fr.filter((f) => !sourcesCouvertes.has(f));
  console.log('--- ORPHELINE (' + orphelines.length + ' fiche(s) FR sans EN) ---');
  for (const f of orphelines.sort()) console.log('  ' + f);
  console.log('');
}

console.log('=== BILAN ===');
for (const statut of STATUTS) {
  console.log('  ' + statut.padEnd(16) + lots[statut].length);
}

const bloquant =
  lots['MARQUE INVALIDE'].length +
  lots.DERIVE.length +
  lots['SANS SOURCE'].length +
  lots['SANS MARQUE'].length;
process.exit(bloquant ? 1 : 0);
