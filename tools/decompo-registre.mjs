#!/usr/bin/env node
/**
 * decompo-registre.mjs - DECOMPOSE LE FOISONNEMENT FR -> EN.
 *
 * Ne pour la question laissee ouverte par le lot 14 du 30/08 (seance 10) :
 * le lot sort a -0,9 %, l hypothese des libelles de wikilink a ete MESUREE
 * FAUSSE (0,13 point sur 3,8), et la cause est portee au JOURNAL comme
 * INCONNUE. Le brief de la seance 11 dit : c est une mesure a faire, pas une
 * decision a prendre.
 *
 * ------------------------------------------------------------------------
 * CE QUE L OUTIL MESURE
 * ------------------------------------------------------------------------
 * Il situe CHAQUE MOT compte par la regle C110 sur DEUX AXES orthogonaux, et
 * chaque axe est une PARTITION EXACTE du total :
 *
 *   axe REGISTRE  (ou le mot est pose dans la page, lu sur sa ligne)
 *     titre       ligne ^#{1,6} espace
 *     callout     ligne dont le premier caractere non blanc est >
 *     tableau     ligne dont le premier caractere non blanc est |
 *     liste       ligne ouvrant par - * + ou par 1. 1)
 *     paragraphe  tout le reste
 *     Priorite dans cet ordre : une puce DANS un callout compte en callout,
 *     un titre DANS un callout aussi. C est declare, pas neutre.
 *
 *   axe CONSTRUIT (dans quelle construction de texte le mot tombe)
 *     alt embed         le texte alternatif de ![...](...)
 *     chemin embed      la cible de ![...](...) - C110 en compte les mots
 *     cible wikilink    la partie gauche de [[cible|libelle]]
 *     libelle wikilink  la partie droite, celle que le lecteur voit
 *     code inline       entre deux accents graves sur une meme ligne
 *     prose nue         tout le reste
 *
 * Chaque categorie sort avec sa CONTRIBUTION EN POINTS au foisonnement du
 * lot : somme des contributions = foisonnement total, par construction.
 *
 * ------------------------------------------------------------------------
 * LA REGLE DE COMPTAGE N EST PAS REIMPLEMENTEE
 * ------------------------------------------------------------------------
 * corpsC110, MOTIF_MOT et EST_MOT sont IMPORTES de compter-mots.mjs. Le
 * defaut du 23/08 (suite 4) - deux implementations conformes a la meme
 * phrase divergent de 0,5 a 1,6 % par fiche - ne peut donc pas se rejouer.
 *
 * AUTOCONTROLE DE PARTITION, imprime a chaque lancement : pour chaque fiche
 * lue, somme(registres) et somme(construits) sont comparees a
 * compterMots(texte). Un seul ecart non nul est un DEFAUT D OUTIL et sort
 * nomme. C est la garde C110 de ce script.
 *
 * ------------------------------------------------------------------------
 * USAGE
 * ------------------------------------------------------------------------
 *   node tools/decompo-registre.mjs --tout
 *   node tools/decompo-registre.mjs --lot embarque/pcb/kicad.md ...
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { corpsC110, compterMots, MOTIF_MOT, EST_MOT } from './compter-mots.mjs';

const CONTENT = join(process.cwd(), 'content');

const EMBED = /!\[(?:[^\[\]]|\[[^\[\]]*\])*\]\([^)]+\)/g;
const WIKILINK = /(?<!!)\[\[([^\]]+)\]\]/g;
const CODE_INLINE = /`[^`\n]+`/g;

const REGISTRES = ['titre', 'callout', 'tableau', 'liste', 'paragraphe'];
const CONSTRUITS = [
  'alt embed',
  'chemin embed',
  'cible wikilink',
  'libelle wikilink',
  'code inline',
  'prose nue',
];

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

/* ---------- situer les mots ---------- */

// Spans de construit, dans l ordre de priorite : embed, puis wikilink, puis
// code inline. Un span est [debut, fin, categorie].
function spansDe(corps) {
  const spans = [];
  for (const m of corps.matchAll(EMBED)) {
    const t = m[0];
    const d = m.index;
    const coupe = /^!\[([\s\S]*)\]\(([^)]*)\)$/.exec(t);
    if (!coupe) continue;
    const alt = coupe[1];
    const chemin = coupe[2];
    const debutAlt = d + 2;
    spans.push([debutAlt, debutAlt + alt.length, 'alt embed']);
    const debutChemin = debutAlt + alt.length + 2;
    spans.push([debutChemin, debutChemin + chemin.length, 'chemin embed']);
  }
  for (const m of corps.matchAll(WIKILINK)) {
    const inner = m[1];
    const d = m.index + 2;
    // Le separateur s ecrit | ou \| : la forme echappee est celle des lignes
    // de tableau (defaut du lot 13, ou un pipe nu ratait les cibles citees
    // dans un tableau). L alternance essaie l antislash EN PREMIER, sans
    // quoi le pipe nu mord sur l antislash et coupe un caractere trop tot.
    const sepa = /\\\||\|/.exec(inner);
    if (sepa) {
      spans.push([d, d + sepa.index, 'cible wikilink']);
      const debutLib = d + sepa.index + sepa[0].length;
      spans.push([debutLib, d + inner.length, 'libelle wikilink']);
    } else {
      // Sans libelle, Quartz affiche la cible : elle est LUE, donc elle
      // compte comme cible et non comme libelle. Declare.
      spans.push([d, d + inner.length, 'cible wikilink']);
    }
  }
  for (const m of corps.matchAll(CODE_INLINE)) {
    spans.push([m.index, m.index + m[0].length, 'code inline']);
  }
  return spans;
}

function debutsDeLigne(corps) {
  const debuts = [0];
  for (let i = 0; i < corps.length; i++) {
    if (corps[i] === '\n') debuts.push(i + 1);
  }
  return debuts;
}

function ligneDe(debuts, idx) {
  let bas = 0;
  let haut = debuts.length - 1;
  while (bas < haut) {
    const mid = (bas + haut + 1) >> 1;
    if (debuts[mid] <= idx) bas = mid;
    else haut = mid - 1;
  }
  return bas;
}

function registreDeLigne(ligne) {
  const t = ligne.replace(/^[ \t]+/, '');
  if (t.startsWith('>')) return 'callout';
  if (/^#{1,6}\s/.test(t)) return 'titre';
  if (t.startsWith('|')) return 'tableau';
  if (/^([-*+]|\d+[.)])\s/.test(t)) return 'liste';
  return 'paragraphe';
}

// Rend { total, parRegistre, parConstruit } pour un texte de fiche.
function situer(texte) {
  const corps = corpsC110(texte);
  const debuts = debutsDeLigne(corps);
  const regDeLigne = corps.split('\n').map(registreDeLigne);
  const spans = spansDe(corps);

  const parRegistre = new Map(REGISTRES.map((r) => [r, 0]));
  const parConstruit = new Map(CONSTRUITS.map((c) => [c, 0]));
  let total = 0;

  const motif = new RegExp(MOTIF_MOT.source, 'g');
  let m;
  while ((m = motif.exec(corps)) !== null) {
    if (!EST_MOT(m[0])) continue;
    total += 1;
    const i = m.index;
    const reg = regDeLigne[ligneDe(debuts, i)];
    parRegistre.set(reg, parRegistre.get(reg) + 1);
    let cat = 'prose nue';
    for (const [d, f, c] of spans) {
      if (i >= d && i < f) {
        cat = c;
        break;
      }
    }
    parConstruit.set(cat, parConstruit.get(cat) + 1);
  }
  return { total, parRegistre, parConstruit };
}

/* ---------- paires ---------- */

function fichesEn() {
  return walk(join(CONTENT, 'en')).map(versWeb).sort();
}

// Meme appariement que compter-mots --paires : le front matter EN porte
// source_fr. L outil ne devine aucune correspondance de nom.
function toutesLesPaires() {
  const out = [];
  for (const relEn of fichesEn()) {
    const texteEn = lire(relEn);
    const m = texteEn.match(/^source_fr:\s*(.+?)\s*$/m);
    if (!m) continue;
    const relFr = m[1];
    if (!existsSync(join(CONTENT, relFr.split('/').join(sep)))) continue;
    out.push({ relFr, relEn });
  }
  return out;
}

function pct(x) {
  return (x >= 0 ? '+' : '') + x.toFixed(1) + ' %';
}

function tableAxe(titre, cles, agFr, agEn, totFr, totEn) {
  console.log('');
  console.log('  ' + titre);
  console.log(
    '    ' + 'categorie'.padEnd(18) + 'FR'.padStart(8) + 'EN'.padStart(8) +
    'delta'.padStart(8) + 'part FR'.padStart(10) + 'ecart'.padStart(10) +
    'contribution'.padStart(14)
  );
  let sFr = 0;
  let sEn = 0;
  for (const k of cles) {
    const f = agFr.get(k) || 0;
    const e = agEn.get(k) || 0;
    sFr += f;
    sEn += e;
    const part = totFr ? (f / totFr) * 100 : 0;
    const contrib = totFr ? ((e - f) / totFr) * 100 : 0;
    console.log(
      '    ' + k.padEnd(18) + String(f).padStart(8) + String(e).padStart(8) +
      String(e - f).padStart(8) + (part.toFixed(1) + ' %').padStart(10) +
      (f ? pct((e / f - 1) * 100) : '-').padStart(10) +
      ((contrib >= 0 ? '+' : '') + contrib.toFixed(2) + ' pt').padStart(14)
    );
  }
  const contribTot = totFr ? ((sEn - sFr) / totFr) * 100 : 0;
  console.log(
    '    ' + 'SOMME'.padEnd(18) + String(sFr).padStart(8) + String(sEn).padStart(8) +
    String(sEn - sFr).padStart(8) + ''.padStart(10) +
    (sFr ? pct((sEn / sFr - 1) * 100) : '-').padStart(10) +
    ((contribTot >= 0 ? '+' : '') + contribTot.toFixed(2) + ' pt').padStart(14)
  );
  if (sFr !== totFr || sEn !== totEn) {
    console.log('    !! PARTITION ROMPUE sur cet axe : ' + sFr + '/' + totFr + '  ' + sEn + '/' + totEn);
  }
}

function rapport(paires, etiquette) {
  console.log('=== DECOMPOSITION DU FOISONNEMENT PAR REGISTRE ET PAR CONSTRUIT ===');
  console.log('');
  console.log('  POPULATION : ' + paires.length + ' paire(s) FR/EN, appariees par le');
  console.log('  champ source_fr du front matter EN, comme compter-mots --paires.');
  console.log('  Etiquette du lancement : ' + etiquette);
  console.log('  Regle de mot : celle de compter-mots.mjs, IMPORTEE (corpsC110,');
  console.log('  MOTIF_MOT, EST_MOT). Aucune regex de C110 recopiee ici.');
  console.log('  Les deux axes sont des PARTITIONS : chaque mot compte une fois');
  console.log('  et une seule sur chacun.');

  const agRegFr = new Map(REGISTRES.map((r) => [r, 0]));
  const agRegEn = new Map(REGISTRES.map((r) => [r, 0]));
  const agConFr = new Map(CONSTRUITS.map((c) => [c, 0]));
  const agConEn = new Map(CONSTRUITS.map((c) => [c, 0]));
  let totFr = 0;
  let totEn = 0;
  const defauts = [];
  const parFiche = [];

  for (const { relFr, relEn } of paires) {
    const tFr = lire(relFr);
    const tEn = lire(relEn);
    const sFr = situer(tFr);
    const sEn = situer(tEn);
    for (const [nom, s, t] of [[relFr, sFr, tFr], [relEn, sEn, tEn]]) {
      const ref = compterMots(t);
      const r = [...s.parRegistre.values()].reduce((a, b) => a + b, 0);
      const c = [...s.parConstruit.values()].reduce((a, b) => a + b, 0);
      if (r !== ref || c !== ref) {
        defauts.push(nom + ' : registres ' + r + ', construits ' + c + ', reference ' + ref);
      }
    }
    totFr += sFr.total;
    totEn += sEn.total;
    for (const r of REGISTRES) {
      agRegFr.set(r, agRegFr.get(r) + sFr.parRegistre.get(r));
      agRegEn.set(r, agRegEn.get(r) + sEn.parRegistre.get(r));
    }
    for (const c of CONSTRUITS) {
      agConFr.set(c, agConFr.get(c) + sFr.parConstruit.get(c));
      agConEn.set(c, agConEn.get(c) + sEn.parConstruit.get(c));
    }
    parFiche.push({ relFr, fr: sFr.total, en: sEn.total });
  }

  console.log('');
  console.log('  AUTOCONTROLE DE PARTITION (' + paires.length * 2 + ' fiches lues) : ' +
    (defauts.length === 0 ? '0 ecart' : defauts.length + ' ECART(S)'));
  for (const d of defauts.slice(0, 10)) console.log('    !! ' + d);

  console.log('');
  console.log('  TOTAL : ' + totFr + ' mots FR -> ' + totEn + ' mots EN   ' +
    pct(totFr ? (totEn / totFr - 1) * 100 : 0));

  tableAxe('AXE 1 - REGISTRE DE LIGNE', REGISTRES, agRegFr, agRegEn, totFr, totEn);
  tableAxe('AXE 2 - CONSTRUIT DE TEXTE', CONSTRUITS, agConFr, agConEn, totFr, totEn);

  if (parFiche.length <= 12) {
    console.log('');
    console.log('  DETAIL PAR FICHE');
    for (const f of parFiche) {
      console.log('    ' + f.relFr.padEnd(46) + String(f.fr).padStart(7) + ' ->' +
        String(f.en).padStart(7) + '   ' + pct(f.fr ? (f.en / f.fr - 1) * 100 : 0));
    }
  }
}

const args = process.argv.slice(2);
const chemins = args.filter((a) => !a.startsWith('--'));

if (args.includes('--tout')) {
  rapport(toutesLesPaires(), '--tout');
} else if (args.includes('--lot')) {
  const toutes = toutesLesPaires();
  const choisies = [];
  for (const c of chemins) {
    const p = toutes.find((x) => x.relFr === c);
    if (p) choisies.push(p);
    else console.log('  [absente] aucune paire pour ' + c);
  }
  rapport(choisies, '--lot (' + chemins.length + ' demandee(s))');
} else {
  console.error('usage : node tools/decompo-registre.mjs --tout');
  console.error('        node tools/decompo-registre.mjs --lot <chemin FR> ...');
  process.exit(2);
}
