#!/usr/bin/env node
/**
 * audit-medias.mjs — Audit des embeds de medias de content/
 *
 * Cherche trois defauts, tous INVISIBLES sur Windows et fatals en production
 * (GitHub Pages sert sous Linux, systeme de fichiers casse-sensible) :
 *
 *   1. ABSENT       embed pointant un fichier qui n'existe pas
 *   2. CASSE        embed dont la casse differe du nom reel du fichier
 *                   -> 404 en ligne, aucun symptome en local
 *   3. HORS-GABARIT embed dont le chemin ne commence pas par /ressources/
 *
 * Plus l'inventaire des ORPHELINS : fichiers de content/ressources/ qui ne
 * sont references par aucune fiche. Le script ne supprime jamais rien.
 *
 * Usage :
 *   node tools/audit-medias.mjs           rapport complet
 *   node tools/audit-medias.mjs --quiet   n'affiche que les defauts
 *
 * Exit 1 si au moins un ABSENT ou un CASSE est trouve (utilisable en hook).
 *
 * Point technique : la detection de casse ne peut PAS reposer sur
 * fs.existsSync(), qui est insensible a la casse sous Windows et repondrait
 * "vrai" pour circuit-RC.gif alors que le fichier s'appelle circuit-rc.gif.
 * L'index est donc construit par readdir(), qui renvoie les noms reels, et la
 * comparaison se fait par egalite stricte de chaines.
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'content');
const RESSOURCES = join(CONTENT, 'ressources');
const QUIET = process.argv.includes('--quiet');

/* ---------- utilitaires ---------- */

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
    else if (e.isFile()) acc.push(full);
  }
  return acc;
}

// Chemin relatif a content/, en separateurs POSIX (comme dans les embeds).
function toWebPath(absolute) {
  return relative(CONTENT, absolute).split(sep).join('/');
}

// Retire les blocs de code delimites par ``` pour ne pas auditer des exemples.
function stripFences(text) {
  return text.replace(/^```[\s\S]*?^```/gm, '');
}

/* ---------- index du systeme de fichiers ---------- */

const resourceFiles = walk(RESSOURCES).map(toWebPath);
const exactSet = new Set(resourceFiles);
const lowerMap = new Map(); // minuscules -> noms reels
for (const p of resourceFiles) {
  const k = p.toLowerCase();
  if (!lowerMap.has(k)) lowerMap.set(k, []);
  lowerMap.get(k).push(p);
}

/* ---------- collecte des embeds ---------- */

const mdFiles = walk(CONTENT).filter((f) => f.endsWith('.md'));

// Capture les embeds ![alt|640](/chemin) ET les liens ordinaires [texte](/chemin)
// vers ressources/ : un .docx propose en telechargement se casse exactement comme
// une image, et doit compter comme reference pour le calcul des orphelins.
//
// La partie alt est NON GOURMANDE jusqu'au "](" et non un [^\]]*. Un alt peut
// contenir des crochets — « evenement [garde-condition] / action » — et la forme
// [^\]]* s'arretait alors au premier crochet fermant : l'embed etait saute
// SILENCIEUSEMENT (ni audite, ni compte comme reference, donc son fichier
// remontait en faux orphelin).
const LIEN_MD = /(!?)\[[^\n]*?\]\(\s*([^)\s]+)/g;
const EMBED_HTML = /<img[^>]+src\s*=\s*["']([^"']+)["']/gi;
const EMBED_WIKI = /!\[\[([^\]]+)\]\]/g; // ![[fichier]] style Obsidian

const findings = []; // { fiche, raw, statut, detail }
const referenced = new Set(); // chemins web reellement pointes

function classify(fiche, raw) {
  if (/^(https?:)?\/\//i.test(raw) || raw.startsWith('data:')) {
    return { fiche, raw, statut: 'EXTERNE', detail: '' };
  }

  let p = raw.split('#')[0].split('?')[0];
  try {
    p = decodeURIComponent(p);
  } catch {
    /* chemin non encode, on garde tel quel */
  }
  p = p.replace(/^\.?\//, ''); // "/ressources/..." ou "./ressources/..." -> "ressources/..."

  if (!p.startsWith('ressources/')) {
    return { fiche, raw, statut: 'HORS-GABARIT', detail: 'hors /ressources/' };
  }

  if (exactSet.has(p)) {
    referenced.add(p);
    return { fiche, raw, statut: 'OK', detail: '' };
  }

  const reels = lowerMap.get(p.toLowerCase());
  if (reels && reels.length) {
    for (const r of reels) referenced.add(r);
    return { fiche, raw, statut: 'CASSE', detail: 'fichier reel : /' + reels.join(' , /') };
  }

  return { fiche, raw, statut: 'ABSENT', detail: 'aucun fichier correspondant' };
}

for (const file of mdFiles) {
  const fiche = toWebPath(file);
  const text = stripFences(readFileSync(file, 'utf8'));

  for (const m of text.matchAll(LIEN_MD)) {
    const estEmbed = m[1] === '!';
    const cible = m[2];
    // Un lien ordinaire qui ne vise pas ressources/ n'est pas du ressort de cet audit.
    if (!estEmbed && !/^\.?\/?ressources\//.test(cible)) continue;
    findings.push(classify(fiche, cible));
  }
  for (const m of text.matchAll(EMBED_HTML)) findings.push(classify(fiche, m[1]));
  for (const m of text.matchAll(EMBED_WIKI)) {
    findings.push({
      fiche,
      raw: '![[' + m[1] + ']]',
      statut: 'HORS-GABARIT',
      detail: 'embed wiki Obsidian, gabarit du depot = ![alt|largeur](/ressources/...)',
    });
  }
}

/* ---------- rapport ---------- */

const ORDRE = ['ABSENT', 'CASSE', 'HORS-GABARIT', 'EXTERNE', 'OK'];
const defauts = findings.filter(
  (f) => f.statut === 'ABSENT' || f.statut === 'CASSE' || f.statut === 'HORS-GABARIT'
);

console.log('=== AUDIT DES EMBEDS ===');
console.log(
  mdFiles.length +
    ' fiches lues, ' +
    findings.length +
    ' embeds et liens ressources, ' +
    resourceFiles.length +
    ' fichiers dans ressources/'
);
console.log('');

const parFiche = new Map();
for (const f of findings) {
  if (QUIET && f.statut !== 'ABSENT' && f.statut !== 'CASSE' && f.statut !== 'HORS-GABARIT') continue;
  if (!parFiche.has(f.fiche)) parFiche.set(f.fiche, []);
  parFiche.get(f.fiche).push(f);
}

for (const fiche of [...parFiche.keys()].sort()) {
  const lignes = parFiche.get(fiche).sort((a, b) => ORDRE.indexOf(a.statut) - ORDRE.indexOf(b.statut));
  console.log(fiche);
  for (const l of lignes) {
    console.log('  [' + l.statut + '] ' + l.raw + (l.detail ? '   -> ' + l.detail : ''));
  }
  console.log('');
}

/* ---------- orphelins ---------- */

const orphelins = resourceFiles.filter((p) => !referenced.has(p) && !p.endsWith('.md'));

console.log('=== ORPHELINS (jamais references, RIEN N EST SUPPRIME) ===');
if (!orphelins.length) console.log('aucun');
for (const o of orphelins.sort()) {
  let taille = '';
  try {
    taille = ' (' + Math.round(statSync(join(CONTENT, o)).size / 1024) + ' ko)';
  } catch {
    /* ignore */
  }
  console.log('  ' + o + taille);
}
console.log('');

/* ---------- bilan ---------- */

const compte = (s) => findings.filter((f) => f.statut === s).length;
console.log('=== BILAN ===');
for (const s of ORDRE) console.log('  ' + s.padEnd(14) + compte(s));
console.log('  ORPHELIN'.padEnd(16) + orphelins.length);

process.exit(defauts.some((d) => d.statut !== 'HORS-GABARIT') ? 1 : 0);
