#!/usr/bin/env node
/**
 * sommaire-conventions.mjs — Sommaire de conventions.md (LECTURE SEULE)
 *
 * conventions.md depasse les 160 ko et croit a chaque session : le §8
 * « En cours d'eprouvage » n'est plus lisible d'un bloc. Ce script en donne
 * la carte, pour decider des PROMOTIONS vers les sections numerotees sans
 * relire le fichier entier.
 *
 * Sortie en trois parties :
 *   1. SECTIONS NUMEROTEES  destinations possibles d'une promotion, avec leur
 *                           poids (une section deja obese est un mauvais port)
 *   2. BLOCS DU §8          un bloc par session d'acquisition, avec son poids
 *   3. CONVENTIONS DU §8    chaque convention numerotee, son intitule, son
 *                           marqueur d'epreuve (« Eprouvee 3/N ») et son age
 *
 * Le critere de promotion retenu sur le projet : eprouvee 3/N ou plus ET
 * stable depuis plusieurs semaines. Le script ne promeut rien et n'ecrit
 * rien : il rend une liste arbitrable.
 *
 * Usage :
 *   node tools/sommaire-conventions.mjs           sommaire complet
 *   node tools/sommaire-conventions.mjs --mures   uniquement les candidates
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const FICHIER = join(process.cwd(), 'conventions.md');
const MURES_SEULES = process.argv.includes('--mures');

const texte = readFileSync(FICHIER, 'utf8');
const ko = (n) => (n / 1024).toFixed(1) + ' ko';

/* ---------- decoupage haut niveau ---------- */

// Les titres de niveau 2 delimitent les sections. Le §8 est celui dont le
// titre contient "eprouvage" (accents variables selon les editions).
const titresH2 = [...texte.matchAll(/^## (.+)$/gm)];
let debut8 = -1;
for (const t of titresH2) {
  if (/prouvage/i.test(t[1])) debut8 = t.index;
}

if (debut8 < 0) {
  console.error('ABANDON : section « En cours d\'eprouvage » introuvable.');
  console.error('Le titre a du changer — verifier conventions.md avant de relancer.');
  process.exit(1);
}

const avant8 = texte.slice(0, debut8);
const section8 = texte.slice(debut8);

/* ---------- 1. sections numerotees ---------- */

console.log('=== 1. SECTIONS NUMEROTEES (destinations de promotion) ===');
const h2Avant = [...avant8.matchAll(/^## (.+)$/gm)];
for (let i = 0; i < h2Avant.length; i++) {
  const debut = h2Avant[i].index;
  const fin = i + 1 < h2Avant.length ? h2Avant[i + 1].index : avant8.length;
  const corps = avant8.slice(debut, fin);
  const sousTitres = [...corps.matchAll(/^### (.+)$/gm)].length;
  console.log(
    '  ' + h2Avant[i][1].padEnd(46) + ko(corps.length).padStart(9) + '   ' + sousTitres + ' entree(s)'
  );
}
console.log('  ' + '(§8 eprouvage)'.padEnd(46) + ko(section8.length).padStart(9));
console.log('  ' + 'TOTAL'.padEnd(46) + ko(texte.length).padStart(9));
console.log('');

/* ---------- 2. blocs du §8 ---------- */

const blocs = [];
const h3 = [...section8.matchAll(/^### (.+)$/gm)];
for (let i = 0; i < h3.length; i++) {
  const debut = h3[i].index;
  const fin = i + 1 < h3.length ? h3[i + 1].index : section8.length;
  blocs.push({ titre: h3[i][1], corps: section8.slice(debut, fin) });
}

if (!MURES_SEULES) {
  console.log('=== 2. BLOCS DU §8 (un par session d\'acquisition) ===');
  for (const b of blocs) {
    const notes = [...b.corps.matchAll(/^- \*\*/gm)].length;
    const convs = [...b.corps.matchAll(/^(\d+)\. \*\*/gm)].length;
    console.log(
      '  ' + ko(b.corps.length).padStart(9) + '  ' + String(convs) + ' conv, ' + String(notes) + ' notes   ' + b.titre
    );
  }
  console.log('');
}

/* ---------- 3. conventions numerotees ---------- */

console.log('=== 3. CONVENTIONS DU §8 ===');
console.log('   n  epreuve   bloc d\'acquisition / intitule');
console.log('');

const lignes = [];
for (const b of blocs) {
  // Une convention numerotee commence en debut de ligne : "84. **Titre.**"
  const items = [...b.corps.matchAll(/^(\d+)\. \*\*(.+?)\*\*/gms)];
  for (let i = 0; i < items.length; i++) {
    const debut = items[i].index;
    const fin = i + 1 < items.length ? items[i + 1].index : b.corps.length;
    const corps = b.corps.slice(debut, fin);

    // Marqueur d'epreuve : "Eprouvee 3/N", "eprouvee 12 contextes", etc.
    const m = corps.match(/[EÉé]prouv[eé]e?\s+([^.;]{0,40})/i);
    const epreuve = m ? m[1].trim() : '—';

    // Un x/N se compare numeriquement ; le reste est du texte libre.
    const fraction = epreuve.match(/^(\d+)\s*\/\s*N/i);
    const rang = fraction ? parseInt(fraction[1], 10) : /contexte|fiche/i.test(epreuve) ? 3 : 0;

    lignes.push({
      num: parseInt(items[i][1], 10),
      titre: items[i][2].replace(/\s+/g, ' ').slice(0, 78),
      epreuve: epreuve.slice(0, 18),
      rang,
      bloc: b.titre.replace(/^Acquises\s*/i, '').slice(0, 34),
      taille: corps.length,
    });
  }
}

lignes.sort((a, b) => a.num - b.num);

for (const l of lignes) {
  if (MURES_SEULES && l.rang < 3) continue;
  const marque = l.rang >= 3 ? '>>' : '  ';
  console.log(
    marque + String(l.num).padStart(4) + '  ' + l.epreuve.padEnd(18) + l.bloc.padEnd(36) + l.titre
  );
}

console.log('');
console.log('=== BILAN ===');
console.log('  conventions numerotees dans le §8 : ' + lignes.length);
console.log('  candidates a la promotion (>= 3/N) : ' + lignes.filter((l) => l.rang >= 3).length);
console.log('  blocs du §8                        : ' + blocs.length);
console.log('');
console.log('  Les lignes prefixees >> sont eprouvees 3 fois ou plus.');
console.log('  L\'anciennete se lit dans la colonne du bloc d\'acquisition.');
