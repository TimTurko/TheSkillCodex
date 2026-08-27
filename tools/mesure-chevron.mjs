#!/usr/bin/env node
/**
 * mesure-chevron.mjs - Pese l'angle mort du chevron.
 *
 * POURQUOI CE SCRIPT EXISTE
 * -------------------------
 * compter-mots.mjs masque les blocs de code par un motif ANCRE EN DEBUT DE
 * LIGNE : /^```[\s\S]*?^```[^\n]*$/gm. Un bloc de code clotures A L INTERIEUR
 * d un callout porte des clotures prefixees par "> " et echappe donc au
 * masque. Consequence mesuree : le contenu de ces blocs est compte comme de
 * la prose. creer-fiche-en.mjs --anneau signale les fiches concernees depuis
 * le 25/08 (fonction cloturesEnChevron) mais ne pese pas ce qu elles
 * contiennent. Ce script pese.
 *
 * TROIS SYMPTOMES POUR UN SEUL DEFAUT (recenses le 24/08 suite 3) :
 *   1. mots comptes en trop  -> volume de lot et foisonnement fausses ;
 *   2. troisieme compteur de --controle SOUS-COMPTE ces blocs -> une jumelle
 *      EN peut en perdre un sans qu aucun controle ne le voie ;
 *   3. faux positifs C109 en aval dans --style.
 * Ce script mesure 1 et instrumente 2 (colonne FR / EN du mode --tout).
 *
 * LA REGLE DE COMPTAGE N EST PAS REIMPLEMENTEE
 * --------------------------------------------
 * compterMots est IMPORTE de compter-mots.mjs, ou vit la regle figee de C110.
 * Deux implementations justes sous la meme phrase divergent (499 mots sur dix
 * mesures, 23/08 suite 4).
 *
 * LE PREDICAT DE CLOTURE EST UNE COPIE VERBATIM
 * ---------------------------------------------
 * estCloture reproduit mot pour mot le test de cloturesEnChevron
 * (creer-fiche-en.mjs, l.1372-1375). Ce n est pas une reimplementation de
 * confort : le compteur par fiche de ce script DOIT rendre les memes valeurs
 * que le bloc "chevron:" de --anneau, et c est son banc de non-regression.
 * Une divergence est un defaut de la copie, jamais une mesure.
 *
 * CE QUE LE SCRIPT N ECRIT PAS
 * ----------------------------
 * Rien. Aucun fichier n est touche.
 *
 * Usage :
 *   node tools/mesure-chevron.mjs --lot <chemin> ...   (fiches nommees)
 *   node tools/mesure-chevron.mjs --tout               (tout content/, FR et EN)
 *   node tools/mesure-chevron.mjs --extraits --lot ... (entete de chaque bloc)
 *   node tools/mesure-chevron.mjs --montrer <chemin>   (les blocs en entier)
 */

import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { compterMots } from './compter-mots.mjs';

const CONTENT = join(process.cwd(), 'content');

// COPIE VERBATIM de creer-fiche-en.mjs l.1372-1375.
const estCloture = (ligne) => /^\s{0,3}>/.test(ligne) && ligne.includes('```');

// Prefixe de citation a retirer pour rendre au contenu sa forme de code.
const PREFIXE = /^\s{0,3}>\s?/;

const REGLE = [
  'Cloture = ligne commencant par > (0 a 3 blancs) ET contenant trois',
  'apostrophes inversees. Deux clotures consecutives = un bloc. Le CONTENU',
  'est ce qui est STRICTEMENT entre les deux, prefixe de citation retire.',
  'Les mots sortent de compterMots, importe de compter-mots.mjs (regle C110).',
  'dehors est MESURE sur le texte prive de ces blocs, jamais soustrait.',
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
const lire = (rel) => readFileSync(join(CONTENT, rel.split('/').join(sep)), 'utf8');

function analyse(rel) {
  const texte = lire(rel);
  const lignes = texte.split(/\r?\n/);
  const idx = [];
  for (let i = 0; i < lignes.length; i += 1) if (estCloture(lignes[i])) idx.push(i);
  if (!idx.length) return null;

  const paires = [];
  for (let k = 0; k + 1 < idx.length; k += 2) paires.push([idx[k], idx[k + 1]]);

  const dansBloc = new Set();
  const contenu = [];
  const entetes = [];
  for (const [a, b] of paires) {
    for (let i = a; i <= b; i += 1) dansBloc.add(i);
    const corps = [];
    for (let i = a + 1; i < b; i += 1) corps.push(lignes[i].replace(PREFIXE, ''));
    contenu.push(...corps);
    entetes.push({ ligne: a + 1, hauteur: b - a - 1, ouv: lignes[a].trim(), corps });
  }

  const hors = lignes.filter((_, i) => !dansBloc.has(i)).join('\n');

  return {
    rel,
    clotures: idx.length,
    blocs: paires.length,
    orpheline: idx.length % 2 === 1,
    total: compterMots(texte),
    dedans: compterMots(contenu.join('\n')),
    dehors: compterMots(hors),
    entetes,
  };
}

function ligneRapport(r) {
  const part = r.total ? ((r.dedans / r.total) * 100).toFixed(1) : '0.0';
  const ecart = r.total - r.dehors - r.dedans;
  return (
    '  ' + r.rel.padEnd(50) +
    String(r.clotures).padStart(4) + ' cl' +
    String(r.blocs).padStart(4) + ' bl' +
    String(r.total).padStart(7) + ' tot' +
    String(r.dedans).padStart(6) + ' ded' +
    String(r.dehors).padStart(7) + ' deh' +
    part.padStart(7) + ' %' +
    (r.orpheline ? '  ORPHELINE' : '') +
    (ecart === 0 ? '' : '  ECART:' + ecart)
  );
}

function enTete(titre) {
  console.log('=== MESURE DU CHEVRON - ' + titre + ' ===');
  console.log('  ' + REGLE);
  console.log('');
  console.log('  cl = clotures, bl = blocs, tot = mots C110 de la fiche,');
  console.log('  ded = mots DANS les blocs, deh = mots HORS les blocs,');
  console.log('  % = part des mots comptes qui vient des blocs.');
  console.log('  ECART non nul = tot - deh - ded ; il doit etre 0 partout.');
  console.log('');
}

function total(rs, titre) {
  const s = (f) => rs.reduce((a, r) => a + f(r), 0);
  console.log('  ' + '-'.repeat(96));
  console.log(
    '  ' + (titre + ' (' + rs.length + ' porteuses)').padEnd(50) +
    String(s((r) => r.clotures)).padStart(4) + ' cl' +
    String(s((r) => r.blocs)).padStart(4) + ' bl' +
    String(s((r) => r.total)).padStart(7) + ' tot' +
    String(s((r) => r.dedans)).padStart(6) + ' ded' +
    String(s((r) => r.dehors)).padStart(7) + ' deh'
  );
}

const args = process.argv.slice(2);
const TOUT = args.includes('--tout');
const EXTRAITS = args.includes('--extraits');
const MONTRER = args.includes('--montrer');
const chemins = args.filter((a) => !a.startsWith('--')).map(normaliser);

if (MONTRER) {
  for (const rel of chemins) {
    const r = analyse(rel);
    enTete('BLOCS EN ENTIER');
    if (!r) {
      console.log('  ' + rel + ' : aucune cloture.');
      continue;
    }
    console.log('  ' + r.rel + ' - ' + r.blocs + ' blocs, ' + r.dedans + ' mots dedans');
    for (const e of r.entetes) {
      console.log('');
      console.log('  --- bloc ligne ' + e.ligne + ', ' + e.hauteur + ' lignes de contenu');
      console.log('      ' + e.ouv);
      for (const l of e.corps) console.log('      | ' + l);
    }
  }
} else if (TOUT) {
  const tous = walk(CONTENT).map(versWeb).filter((w) => !w.startsWith('templates/')).sort();
  const rs = tous.map(analyse).filter(Boolean);
  const fr = rs.filter((r) => !r.rel.startsWith('en/'));
  const en = rs.filter((r) => r.rel.startsWith('en/'));

  enTete('TOUT LE DEPOT');
  console.log('  fiches balayees : ' + tous.length + '   porteuses : ' + rs.length);
  console.log('');
  console.log('  --- COTE FRANCAIS');
  for (const r of fr) console.log(ligneRapport(r));
  total(fr, 'FR');
  console.log('');
  console.log('  --- COTE ANGLAIS');
  if (!en.length) console.log('  (aucune)');
  for (const r of en) console.log(ligneRapport(r));
  if (en.length) total(en, 'EN');

  // SYMPTOME 2 : une jumelle EN qui perd un bloc n est vue par aucun
  // controle. Ici la paire se lit directement, par le nom du fichier.
  console.log('');
  console.log('  --- APPARIEMENT FR / EN SUR LE NOMBRE DE BLOCS');
  const parFr = new Map(fr.map((r) => [r.rel, r]));
  let paires = 0;
  let divergentes = 0;
  for (const e of en) {
    const relFr = e.rel.replace(/^en\//, '').replace(/-en\.md$/, '.md');
    const f = parFr.get(relFr);
    if (!f) {
      console.log('    [source non porteuse ou introuvable] ' + e.rel + ' -> ' + relFr);
      continue;
    }
    paires += 1;
    const verdict = f.blocs === e.blocs ? 'ok' : 'DIVERGENTE';
    if (f.blocs !== e.blocs) divergentes += 1;
    console.log('    ' + relFr.padEnd(50) + ' FR ' + f.blocs + ' bl / EN ' + e.blocs + ' bl   ' + verdict);
  }
  console.log('    paires porteuses des deux cotes : ' + paires + '   divergentes : ' + divergentes);
} else {
  const rs = chemins.map(analyse).filter(Boolean);
  enTete('LOT NOMME');
  console.log('  fiches nommees : ' + chemins.length + '   porteuses : ' + rs.length);
  console.log('');
  for (const r of rs) console.log(ligneRapport(r));
  total(rs, 'LOT');
  if (EXTRAITS) {
    console.log('');
    console.log('  --- ENTETE DE CHAQUE BLOC (ouverture, puis premiere ligne de contenu)');
    for (const r of rs) {
      console.log('');
      console.log('  ' + r.rel);
      for (const e of r.entetes) {
        console.log('    l.' + String(e.ligne).padStart(4) + '  ' + e.ouv);
        console.log('           ' + e.hauteur + ' lignes | ' + (e.corps[0] === undefined ? '(vide)' : e.corps[0]));
      }
    }
  }
}
