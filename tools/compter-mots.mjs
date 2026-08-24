#!/usr/bin/env node
/**
 * compter-mots.mjs - Compte les mots du depot sous la regle figee de C110.
 *
 * C110 impose qu'un chiffre de volume se publie avec sa regle de comptage.
 * La session du 23/08 (suite 4) a montre que la regle ECRITE ne suffit pas : deux
 * implementations conformes a la meme phrase divergent de 0,5 a 1,6 % par
 * fiche, soit 499 mots sur dix mesures des trames du lot 2b. Un script est la
 * seule forme de regle qui ne puisse pas diverger d'elle-meme.
 *
 * Tout chiffre de mots publie dans un prompt, un JOURNAL ou une clause de TODO
 * doit desormais sortir d'ici, et se citer par le nom du script.
 *
 * Usage :
 *   node tools/compter-mots.mjs                 (corpus FR publie, traduit / restant)
 *   node tools/compter-mots.mjs --fiche <chemin relatif a content/> ...
 *   node tools/compter-mots.mjs --paires        (foisonnement FR -> EN, fiche par fiche)
 *   node tools/compter-mots.mjs --lot <chemin> ...   (somme d'un ensemble de fiches)
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const CONTENT = join(process.cwd(), 'content');

/* ==================== LA REGLE, ET RIEN D'AUTRE ====================
 * Mots hors front matter, hors blocs de code clotures, CODE INLINE INCLUS.
 * Un mot est une suite de caracteres alphanumeriques, apostrophes et traits
 * d'union, contenant au moins un caractere alphanumerique.
 */
const FRONT_MATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;
const BLOC_CLOTURE = /^```[\s\S]*?^```[^\n]*$/gm;
const MOT = /[0-9A-Za-z\u00C0-\u024F'\u2019-]+/g;
const ALNUM = /[0-9A-Za-z\u00C0-\u024F]/;

export function compterMots(texte) {
  const corps = texte.replace(FRONT_MATTER, '');
  const prose = corps.replace(BLOC_CLOTURE, ' ');
  return (prose.match(MOT) || []).filter((m) => ALNUM.test(m)).length;
}

const REGLE = [
  'Regle C110, figee : mots hors front matter, hors blocs de code clotures,',
  'code inline inclus. Un mot = suite de caracteres alphanumeriques,',
  "apostrophes et traits d'union, portant au moins un alphanumerique.",
  "Motif : [0-9A-Za-z\\u00C0-\\u024F'\\u2019-]+",
].join('\n  ');

/* ================================================================ */

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

// Perimetre par defaut : les fiches FR PUBLIEES. Hors en/, hors templates/
// (depublie par ignorePatterns), hors toute fiche en draft: true - c'est ce
// qui sort ressources/index depuis le 22/08.
function fichesFr() {
  return walk(CONTENT)
    .map(versWeb)
    .filter((w) => !w.startsWith('en/') && !w.startsWith('templates/'))
    .filter((w) => !/^draft:\s*true\s*$/m.test(lire(w)))
    .sort();
}

function fichesEn() {
  return walk(join(CONTENT, 'en')).map(versWeb).sort();
}

function enTete() {
  console.log('=== COMPTAGE DE MOTS ===');
  console.log('  ' + REGLE);
  console.log('');
}

function corpus() {
  const fr = fichesFr();
  const mots = new Map(fr.map((r) => [r, compterMots(lire(r))]));

  // Une fiche FR est traduite si une fiche EN la designe en source_fr.
  const traduites = new Set();
  for (const relEn of fichesEn()) {
    const m = lire(relEn).match(/^source_fr:\s*(.+?)\s*$/m);
    if (m) traduites.add(m[1]);
  }

  const faits = fr.filter((r) => traduites.has(r));
  const restants = fr.filter((r) => !traduites.has(r));
  const somme = (l) => l.reduce((a, r) => a + mots.get(r), 0);
  const tries = [...mots.values()].sort((a, b) => a - b);
  const lourde = fr.reduce((a, b) => (mots.get(b) > mots.get(a) ? b : a));

  enTete();
  console.log('  fiches FR publiees   : ' + fr.length);
  console.log('  mots FR              : ' + somme(fr));
  console.log('  mediane par fiche    : ' + tries[Math.floor(tries.length / 2)]);
  console.log('  fiche la plus lourde : ' + lourde + '  (' + mots.get(lourde) + ')');
  console.log('');
  console.log('  deja traduites       : ' + faits.length + ' fiches, ' + somme(faits) + ' mots FR');
  console.log('  RESTANT A TRADUIRE   : ' + restants.length + ' fiches, ' + somme(restants) + ' mots FR');
  console.log('');
  console.log('  Le restant est un COMPTAGE des fiches non traduites, pas une');
  console.log("  soustraction : une somme se compense, un comptage non.");
}

// Foisonnement FR -> EN. Le chiffre ne se predit pas fiche par fiche (facteur
// trois d'ecart dans un meme lot, mesure du 23/08 suite 3) : seule la moyenne
// de lot dimensionne quoi que ce soit.
function paires() {
  enTete();
  let totFr = 0;
  let totEn = 0;
  let n = 0;
  for (const relEn of fichesEn()) {
    const texteEn = lire(relEn);
    const m = texteEn.match(/^source_fr:\s*(.+?)\s*$/m);
    if (!m) continue;
    const relFr = m[1];
    if (!existsSync(join(CONTENT, relFr.split('/').join(sep)))) continue;
    const f = compterMots(lire(relFr));
    const e = compterMots(texteEn);
    if (!f) continue;
    totFr += f;
    totEn += e;
    n += 1;
    const pc = ((e / f - 1) * 100).toFixed(1);
    console.log(
      '  ' + relEn.padEnd(52) + String(f).padStart(6) + ' ->' + String(e).padStart(6) +
      '   ' + (pc >= 0 ? '+' : '') + pc + ' %'
    );
  }
  console.log('');
  console.log('  ' + n + ' paire(s) : ' + totFr + ' mots FR -> ' + totEn + ' mots EN');
  console.log('  foisonnement moyen : ' + ((totEn / totFr - 1) * 100).toFixed(1) + ' %');
}

function lot(rels, titre) {
  enTete();
  let total = 0;
  for (const r0 of rels) {
    const rel = r0.replace(/^content\//, '').split(sep).join('/');
    if (!existsSync(join(CONTENT, rel.split('/').join(sep)))) {
      console.error('Introuvable : content/' + rel);
      process.exit(1);
    }
    const n = compterMots(lire(rel));
    total += n;
    console.log('  ' + rel.padEnd(56) + String(n).padStart(7));
  }
  if (rels.length > 1) {
    console.log('  ' + '-'.repeat(63));
    console.log('  ' + (titre + ' (' + rels.length + ' fiches)').padEnd(56) + String(total).padStart(7));
  }
}

// Le compteur est aussi IMPORTE par creer-fiche-en.mjs --front, pour que le
// volume d'un lot sorte de la meme regle que tous les autres chiffres du depot
// (amendement a C110 du 23/08 suite 4 : la regle se publie sous forme d'outil).
// Sans cette garde, un simple import declencherait le rapport de corpus.
const APPELE_DIRECTEMENT = Boolean(process.argv[1] && process.argv[1].endsWith('compter-mots.mjs'));

if (APPELE_DIRECTEMENT) {
  const args = process.argv.slice(2);
  const chemins = args.filter((a) => !a.startsWith('--'));

  if (args.includes('--paires')) paires();
  else if (args.includes('--fiche')) lot(chemins, 'total');
  else if (args.includes('--lot')) lot(chemins, 'LOT');
  else corpus();
}
