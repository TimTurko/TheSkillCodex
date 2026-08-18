#!/usr/bin/env node
/**
 * audit-wikilinks.mjs — Audit des liens [[...]] de content/
 *
 * Extrait tous les wiki-links des fiches et verifie que leur cible existe.
 * Un lien est resolu s'il correspond a :
 *   - un chemin de fiche complet          [[embarque/mcu/gpio]]
 *   - un nom de fichier sans extension    [[gpio]]
 *   - un alias declare en front matter    [[xiao]] -> aliases de xiao-esp32-s3
 *
 * Statuts renvoyes :
 *   MORT       aucune cible, aucun alias -> lien rouge en production
 *   CASSE      cible trouvee a la casse pres -> resout sous Windows, 404 en ligne
 *   ALIAS      resolu par un alias front matter : ce N'EST PAS un lien mort
 *   AMBIGU     le nom court designe plusieurs fiches
 *   GABARIT    placeholder <...> des templates, inerte par construction
 *
 * Le script ne corrige rien : il rend une liste arbitrable. La distinction
 * "mort" vs "volontairement rouge" (approche A : le rouge sert de TODO list)
 * n'est pas mecanisable et reste a l'arbitrage.
 *
 * Usage :
 *   node tools/audit-wikilinks.mjs           liens non resolus + alias
 *   node tools/audit-wikilinks.mjs --tout    ajoute la liste des liens sains
 *
 * Exit 1 si au moins un MORT ou un CASSE est trouve.
 */

import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep, basename } from 'node:path';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'content');
const TOUT = process.argv.includes('--tout');

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

function toWebPath(absolute) {
  return relative(CONTENT, absolute).split(sep).join('/');
}

// Neutralise les blocs de code et le code inline SANS changer la longueur du
// texte : les extraits de contexte sont reperes par numero de ligne, donc un
// simple retrait decalerait toute la numerotation du fichier.
function stripFences(text) {
  return text
    .replace(/^```[\s\S]*?^```/gm, (bloc) => bloc.replace(/[^\n]/g, ' '))
    .replace(/`[^`\n]*`/g, (code) => ' '.repeat(code.length));
}

// Extrait la liste aliases: du front matter, forme bloc ou forme inline.
function readAliases(text) {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return [];
  const bloc = fm[1];
  const inline = bloc.match(/^aliases:\s*\[(.*)\]\s*$/m);
  if (inline) {
    return inline[1]
      .split(',')
      .map((s) => s.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  const liste = bloc.match(/^aliases:\s*\r?\n((?:\s*-\s*.+\r?\n?)+)/m);
  if (liste) {
    return liste[1]
      .split(/\r?\n/)
      .map((l) =>
        l
          .replace(/^\s*-\s*/, '')
          .trim()
          .replace(/^["']|["']$/g, '')
      )
      .filter(Boolean);
  }
  return [];
}

/* ---------- index des cibles ---------- */

const files = walk(CONTENT);
const parChemin = new Map(); // chemin sans .md -> fiche
const parNom = new Map(); // nom court -> [fiches]
const parAlias = new Map(); // alias -> [fiches]

for (const f of files) {
  const web = toWebPath(f);
  const sansExt = web.replace(/\.md$/, '');
  const court = basename(sansExt);
  parChemin.set(sansExt, web);
  if (!parNom.has(court)) parNom.set(court, []);
  parNom.get(court).push(web);

  for (const a of readAliases(readFileSync(f, 'utf8'))) {
    if (!parAlias.has(a)) parAlias.set(a, []);
    parAlias.get(a).push(web);
  }
}

const toutesCles = new Map(); // cle minuscule -> [cles reelles]
for (const k of [...parChemin.keys(), ...parNom.keys(), ...parAlias.keys()]) {
  const lk = k.toLowerCase();
  if (!toutesCles.has(lk)) toutesCles.set(lk, new Set());
  toutesCles.get(lk).add(k);
}

/* ---------- collecte des liens ---------- */

const WIKILINK = /(?<!!)\[\[([^\]]+)\]\]/g;
const resultats = new Map(); // cible -> { statut, detail, sources: Map<fiche, n> }

function note(cible, statut, detail, fiche, ligne, extrait) {
  if (!resultats.has(cible)) resultats.set(cible, { statut, detail, sources: new Map() });
  const r = resultats.get(cible);
  if (!r.sources.has(fiche)) r.sources.set(fiche, { n: 0, extraits: [] });
  const s = r.sources.get(fiche);
  s.n += 1;
  // Un seul extrait par fiche suffit a situer le lien pour l'arbitrage
  // (fiche a creer ? lien a retargeter ? rouge volontaire annote "a creer" ?).
  if (!s.extraits.length) {
    const court = extrait.length > 150 ? extrait.slice(0, 150) + '...' : extrait;
    s.extraits.push('L' + ligne + ' : ' + court);
  }
}

for (const f of files) {
  const fiche = toWebPath(f);
  const lignes = stripFences(readFileSync(f, 'utf8')).split(/\r?\n/);

  lignes.forEach((ligne, idx) => {
    const numero = idx + 1;
    const extrait = ligne.trim();

    for (const m of ligne.matchAll(WIKILINK)) {
      const brut = m[1];
      // Le pipe est echappe (\|) dans les cellules de tableau markdown : les deux
      // formes designent la meme cible. Sans ce traitement, [[arduino\|Arduino]]
      // serait lu comme la cible "arduino\" et remonterait en faux MORT.
      const cible = brut
        .split(/\\?\|/)[0]
        .split('#')[0]
        .replace(/\\+$/, '')
        .trim();
      if (!cible) continue; // [[#ancre]] purement interne

      // Placeholders des gabarits de templates/ : inertes par construction.
      if (/^<.*>$/.test(cible)) {
        note(cible, 'GABARIT', 'placeholder de gabarit, non resolvable par nature', fiche, numero, extrait);
        continue;
      }

      if (parChemin.has(cible)) {
        note(cible, 'OK', parChemin.get(cible), fiche, numero, extrait);
      } else if (parNom.has(cible)) {
        const cand = parNom.get(cible);
        if (cand.length > 1) note(cible, 'AMBIGU', cand.join(' , '), fiche, numero, extrait);
        else note(cible, 'OK', cand[0], fiche, numero, extrait);
      } else if (parAlias.has(cible)) {
        note(cible, 'ALIAS', 'alias de ' + parAlias.get(cible).join(' , '), fiche, numero, extrait);
      } else {
        const proches = toutesCles.get(cible.toLowerCase());
        if (proches && proches.size) {
          note(cible, 'CASSE', 'cle reelle : ' + [...proches].join(' , '), fiche, numero, extrait);
        } else {
          note(cible, 'MORT', '', fiche, numero, extrait);
        }
      }
    }
  });
}

/* ---------- rapport ---------- */

const ORDRE = ['MORT', 'CASSE', 'AMBIGU', 'GABARIT', 'ALIAS', 'OK'];

console.log('=== AUDIT DES WIKILINKS ===');
console.log(files.length + ' fiches lues, ' + resultats.size + ' cibles distinctes');
console.log('');

for (const statut of ORDRE) {
  if (statut === 'OK' && !TOUT) continue;
  const lot = [...resultats.entries()].filter(([, r]) => r.statut === statut);
  if (!lot.length) continue;

  const total = (r) => [...r.sources.values()].reduce((a, s) => a + s.n, 0);
  lot.sort((a, b) => total(b[1]) - total(a[1]) || a[0].localeCompare(b[0]));

  console.log('--- ' + statut + ' (' + lot.length + ') ---');
  for (const [cible, r] of lot) {
    console.log(
      '[[' + cible + ']]  ' + total(r) + ' occurrence(s)' + (r.detail ? '   -> ' + r.detail : '')
    );
    for (const [fiche, s] of [...r.sources.entries()].sort()) {
      console.log('    ' + fiche + (s.n > 1 ? '  x' + s.n : ''));
      // Contexte : indispensable pour arbitrer fiche a creer vs lien a delier.
      if (statut === 'MORT' || statut === 'CASSE' || statut === 'AMBIGU') {
        for (const e of s.extraits) console.log('        ' + e);
      }
    }
  }
  console.log('');
}

console.log('=== BILAN ===');
for (const s of ORDRE) {
  console.log('  ' + s.padEnd(8) + [...resultats.values()].filter((r) => r.statut === s).length + ' cible(s)');
}

const bloquant = [...resultats.values()].some((r) => r.statut === 'MORT' || r.statut === 'CASSE');
process.exit(bloquant ? 1 : 0);
