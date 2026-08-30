#!/usr/bin/env node
/**
 * bilan-chantier-3008s11.mjs - OUTIL JETABLE (C114), seance 11 du 30/08.
 *
 * Mesure ce que les quinze seances du chantier de traduction ont PRODUIT et
 * ce qu elles ont COUTE. Aucun chiffre n est reporte d une cloture : tout
 * sort du depot et de son historique git, lus aujourd hui (C118, C119).
 *
 * MOTIF ET ECHANTILLON (C110). Le rendement de prediction se lit sur les
 * lignes du JOURNAL qui portent "Bilan de prediction" (accent compris). Le
 * script IMPRIME les lignes captees, avec la date de leur entree, avant de
 * sommer : ce que le motif attrape se lit, il ne se suppose pas.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';

const git = (cmd) => execSync('git ' + cmd, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

console.log('=== BILAN DU CHANTIER DE TRADUCTION - MESURES DU JOUR ===');
console.log('');
console.log('  Toutes les valeurs ci-dessous sont lues aujourd hui sur le depot');
console.log('  ou sur git. Aucune n est reprise d une cloture anterieure.');
console.log('');

/* ---------- 1. rendement de prediction ---------- */

const SOURCES = ['tools/predictions-260829.md', 'tools/predictions-260830.md'];

// MOTIF CORRIGE EN COURS DE BLOC (C110). Le motif d abord essaye ne visait
// que les lignes "Bilan de prediction" du JOURNAL : il rend 3 lignes sur les
// quinze seances, parce que le JOURNAL ne porte le decompte que sous des
// formes variables, parfois en toutes lettres. La source AUTORISEE de ce
// chiffre est le fichier de la sous-regle C116 lui-meme, ou chaque bloc
// ferme sur "N predictions, N tenues, N refutees".
const BILAN = new RegExp(
  '(\\d+)\\s+pr[e\\u00e9]dictions?[^.\\n]{0,70}?,\\s*(\\d+)\\s+tenues?,\\s*(\\d+)\\s+r[e\\u00e9]fut[e\\u00e9]es?',
  'gi'
);
const GENERAL = new RegExp('BILAN G[E\u00c9]N[E\u00c9]RAL', 'i');

console.log('  --- 1. RENDEMENT DE PREDICTION ---');
console.log('  Source : les fichiers de la sous-regle C116, ou chaque BLOC ferme');
console.log('  sur son bilan. Population = les blocs, pas les seances.');
console.log('');
let sTot = 0;
let sTen = 0;
let sRef = 0;
let nBilans = 0;
for (const f of SOURCES) {
  const txt = readFileSync(f, 'utf8');
  let t = 0;
  let te = 0;
  let r = 0;
  let n = 0;
  for (const m of txt.matchAll(BILAN)) {
    // Un bilan general recapitule des blocs deja comptes : il porte
    // "BILAN GENERAL" dans les 400 caracteres qui precedent. On l ecarte.
    const avant = txt.slice(Math.max(0, m.index - 400), m.index);
    if (GENERAL.test(avant)) continue;
    n += 1;
    t += Number(m[1]);
    te += Number(m[2]);
    r += Number(m[3]);
  }
  console.log('    ' + f.padEnd(32) + String(n).padStart(4) + ' bilans de bloc   ' +
    String(t).padStart(5) + ' predictions   ' + String(te).padStart(5) + ' tenues   ' +
    String(r).padStart(4) + ' refutees');
  nBilans += n;
  sTot += t;
  sTen += te;
  sRef += r;
}
console.log('');
console.log('  TOTAL : ' + nBilans + ' bilans de bloc, ' + sTot + ' predictions, ' +
  sTen + ' tenues, ' + sRef + ' refutees');
console.log('  taux de tenue : ' + (sTot ? ((sTen / sTot) * 100).toFixed(1) : '0') + ' %' +
  '   (controle d addition : ' + (sTen + sRef) + ' pour ' + sTot + ')');

// Echantillon C110 : les cinq premieres captures, en clair.
console.log('');
console.log('  ECHANTILLON C110 - les cinq premieres captures, en clair :');
{
  let vus = 0;
  for (const f of SOURCES) {
    const txt = readFileSync(f, 'utf8');
    for (const m of txt.matchAll(BILAN)) {
      const avant = txt.slice(Math.max(0, m.index - 400), m.index);
      if (GENERAL.test(avant)) continue;
      if (vus >= 5) break;
      vus += 1;
      console.log('    ' + m[0].replace(/\s+/g, ' ').slice(0, 100));
    }
    if (vus >= 5) break;
  }
}

/* ---------- 2. l ouverture du chantier, et l historique ---------- */

console.log('');
console.log('  --- 2. HISTORIQUE GIT DEPUIS L OUVERTURE DU CHANTIER ---');
// L ouverture est le premier commit qui touche content/en/ : c est la
// definition operante, pas une date de memoire.
const premier = git('log --reverse "--format=%H|%cd" --date=short -- content/en').split('\n')[0];
const [shaOuverture, dateOuverture] = premier.split('|');
console.log('  premier commit touchant content/en/ : ' + shaOuverture.slice(0, 7) + '   ' + dateOuverture);
const nCommits = git('rev-list --count ' + shaOuverture + '..HEAD').trim();
console.log('  commits depuis (exclu) jusqu a HEAD : ' + nCommits);
console.log('  HEAD : ' + git('log -1 "--format=%h %cd" --date=iso').trim());

/* ---------- 3. cout : la trace ---------- */

function tailleA(sha, chemin) {
  try {
    return Buffer.byteLength(git('show ' + sha + ':' + chemin), 'utf8');
  } catch {
    return null;
  }
}
const kio = (o) => (o === null ? 'absent' : (o / 1024).toFixed(1) + ' Kio');

console.log('');
console.log('  --- 3. COUT : LA TRACE ECRITE ---');
for (const f of ['conventions.md', 'JOURNAL.md', 'TODO.md', 'BACKLOG.md']) {
  const avant = tailleA(shaOuverture, f);
  const apres = Buffer.byteLength(readFileSync(f, 'utf8'), 'utf8');
  const facteur = avant ? (apres / avant).toFixed(2) : '-';
  console.log('    ' + f.padEnd(18) + kio(avant).padStart(12) + '  ->' + kio(apres).padStart(12) +
    '   facteur ' + facteur);
}

function compterArbre(sha, prefixe) {
  try {
    return git('ls-tree -r --name-only ' + sha + ' -- ' + prefixe)
      .split('\n').filter((l) => l.trim()).length;
  } catch {
    return null;
  }
}
const toolsAvant = compterArbre(shaOuverture, 'tools');
const toolsSuivis = compterArbre('HEAD', 'tools');
const toolsDisque = readdirSync('tools').filter((f) => statSync('tools/' + f).isFile()).length;
console.log('');
console.log('    tools/ suivis a l ouverture : ' + toolsAvant);
console.log('    tools/ suivis a HEAD        : ' + toolsSuivis);
console.log('    tools/ presents sur disque  : ' + toolsDisque +
  '   (dont ' + (toolsDisque - toolsSuivis) + ' non encore commites)');

const scriptsAvant = compterArbre(shaOuverture, 'tools').toString();
const nMjsAvant = git('ls-tree -r --name-only ' + shaOuverture + ' -- tools')
  .split('\n').filter((l) => /\.(mjs|js|ps1)$/.test(l)).length;
const nMjsMaint = readdirSync('tools').filter((f) => /\.(mjs|js|ps1)$/.test(f)).length;
console.log('    scripts (.mjs/.js/.ps1) : ' + nMjsAvant + ' -> ' + nMjsMaint);

const nSorties = readdirSync('tools').filter((f) => /^batterie-sortie-|^seance-sortie-/.test(f)).length;
console.log('    sorties de seance datees (C124) dans tools/ : ' + nSorties);

/* ---------- 4. conventions produites ---------- */

console.log('');
console.log('  --- 4. CONVENTIONS ---');
const conv = readFileSync('conventions.md', 'utf8');
const nums = new Set();
for (const m of conv.matchAll(/\bC(1[0-3][0-9])\b/g)) nums.add(Number(m[1]));
const tries = [...nums].sort((a, b) => a - b);
console.log('    numeros C1xx cites dans conventions.md : ' +
  tries.length + '   de C' + tries[0] + ' a C' + tries[tries.length - 1]);
const convAvant = git('show ' + shaOuverture + ':conventions.md');
const numsAvant = new Set();
for (const m of convAvant.matchAll(/\bC(1[0-3][0-9])\b/g)) numsAvant.add(Number(m[1]));
const triesAvant = [...numsAvant].sort((a, b) => a - b);
console.log('    a l ouverture du chantier             : ' +
  triesAvant.length + '   jusqu a C' + triesAvant[triesAvant.length - 1]);
const neufs = tries.filter((n) => !numsAvant.has(n));
console.log('    numeros apparus pendant le chantier   : ' + neufs.length +
  '   [' + neufs.join(', ') + ']');

// Entrees de la section 8 : puces de premier niveau en gras.
const i8 = conv.indexOf('## 8. En cours');
const i9 = conv.indexOf('## Annexe');
const s8 = conv.slice(i8, i9);
const entrees8 = (s8.match(/^- \*\*/gm) || []).length;
const s8Avant = (() => {
  const a = convAvant.indexOf('## 8. En cours');
  const b = convAvant.indexOf('## Annexe');
  return b > a ? convAvant.slice(a, b) : convAvant.slice(a);
})();
const entrees8Avant = (s8Avant.match(/^- \*\*/gm) || []).length;
console.log('    entrees de premier niveau au SS 8     : ' + entrees8Avant + ' -> ' + entrees8);

/* ---------- 5. le corpus produit ---------- */

console.log('');
console.log('  --- 5. CE QUI A ETE PRODUIT ---');
const enAvant = compterArbre(shaOuverture, 'content/en');
const enMaint = compterArbre('HEAD', 'content/en');
console.log('    fiches suivies sous content/en/ : ' + enAvant + ' -> ' + enMaint);
const predFiles = readdirSync('tools').filter((f) => /^predictions-\d+\.md$/.test(f));
let predOctets = 0;
for (const f of predFiles) predOctets += Buffer.byteLength(readFileSync('tools/' + f, 'utf8'), 'utf8');
console.log('    fichiers de predictions C116 : ' + predFiles.length +
  '   (' + predFiles.join(', ') + ')   ' + (predOctets / 1024).toFixed(1) + ' Kio');
