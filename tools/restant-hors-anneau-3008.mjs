#!/usr/bin/env node
/**
 * restant-hors-anneau-3008.mjs - SCRIPT JETABLE (C114), seance du 30/08.
 *
 * OBJET : rendre la LISTE NOMINATIVE des fiches FR publiees sans jumelle EN.
 * Aucun outil du depot ne la rend : compter-mots rend le COMPTE et la SOMME
 * du restant, jamais les noms ; creer-fiche-en --anneau ne rend que les
 * fiches de son rang. Le trou est exactement celui que la prediction P42.20
 * doit refermer - combien de fiches restantes du corpus sont HORS anneau 2,
 * et lesquelles.
 *
 * PERIMETRE : celui de fichesFr() dans compter-mots.mjs, recopie a
 * l identique - hors en/, hors templates/, hors draft: true. C est la
 * condition pour que le chiffre soit comparable a celui du corpus : deux
 * mesures de meme date sur des populations differentes ne se soustraient pas
 * (reference du 29/08 suite 11).
 *
 * REGLE DE COMPTAGE : C110, IMPORTEE de compter-mots.mjs, jamais reecrite.
 *
 * Ce script ne modifie aucun fichier. Il ne sera pas reutilise.
 */

import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { compterMots } from './compter-mots.mjs';

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
const lire = (rel) => readFileSync(join(CONTENT, rel.split('/').join(sep)), 'utf8');

const fr = walk(CONTENT)
  .map(versWeb)
  .filter((w) => !w.startsWith('en/') && !w.startsWith('templates/'))
  .filter((w) => !/^draft:\s*true\s*$/m.test(lire(w)))
  .sort();

const traduites = new Set();
for (const abs of walk(join(CONTENT, 'en'))) {
  const m = lire(versWeb(abs)).match(/^source_fr:\s*(.+?)\s*$/m);
  if (m) traduites.add(m[1]);
}

const restants = fr.filter((r) => !traduites.has(r));

// Les 33 du restant de l anneau 2, recopiees de la sortie du bloc 42
// (batterie-sortie-3008b4.txt puis batterie-sortie.txt). Elles sont ecrites
// ici SANS extension, comme --anneau les imprime.
const ANNEAU2 = new Set([
  'conduite/proj/acv-simplifiee',
  'conduite/proj/afnor-nfx50-151',
  'conduite/proj/bete-a-cornes',
  'conduite/proj/bom',
  'conduite/proj/caracteriser-une-exigence',
  'conduite/proj/ecodesign',
  'conduite/proj/etat-de-l-art-technique',
  'conduite/proj/fast',
  'conduite/proj/fonction',
  'conduite/proj/matrice-eco-criteres',
  'conduite/proj/mecatronique',
  'conduite/proj/mind-map',
  'conduite/proj/pieuvre',
  'embarque/asservissement',
  'embarque/boucle-ouverte',
  'embarque/mcu/ascii',
  'embarque/mcu/chien-de-garde',
  'embarque/mcu/filtrage',
  'embarque/mcu/fonction-informatique',
  'embarque/mcu/ide',
  'embarque/mcu/potentiometre',
  'embarque/mcu/programmation-non-bloquante',
  'embarque/mcu/raspberry-pi/raspberry-pi-gpio',
  'embarque/mcu/raspberry-pi/raspberry-pi-prise-en-main',
  'embarque/mcu/raspberry-pi/raspberry-pi-projet',
  'embarque/mcu/sans-fil/xbee',
  'embarque/mcu/xiao/xiao-alimentation',
  'embarque/mcu/xiao/xiao-esp32-s3',
  'embarque/pcb/easyeda',
  'embarque/protection-electronique',
  'embarque/simulation/falstad',
  'embarque/simulation/ltspice',
  'embarque/simulation/wokwi',
]);

console.log('=== RESTANT A TRADUIRE - LISTE NOMINATIVE (jetable, 30/08) ===');
console.log('  Perimetre : fichesFr() de compter-mots.mjs, recopie a l identique.');
console.log('  Mots : regle C110, IMPORTEE de compter-mots.mjs.');
console.log('  Marque HORS = absente du restant de l anneau 2 mesure au bloc 42.');
console.log('');

let total = 0;
let horsTotal = 0;
const hors = [];
for (const rel of restants) {
  const sans = rel.replace(/\.md$/, '');
  const n = compterMots(lire(rel));
  total += n;
  const dedans = ANNEAU2.has(sans);
  if (!dedans) {
    hors.push([sans, n]);
    horsTotal += n;
  }
  console.log('  ' + sans.padEnd(56) + String(n).padStart(7) + (dedans ? '' : '   HORS'));
}
console.log('  ' + '-'.repeat(70));
console.log('  ' + ('RESTANT (' + restants.length + ' fiches)').padEnd(56) + String(total).padStart(7));
console.log('');
console.log('  ANNEAU 2 declare au bloc 42        : ' + ANNEAU2.size + ' fiches');
console.log('  RESTANT du corpus                  : ' + restants.length + ' fiches, ' + total + ' mots');
console.log('  HORS anneau 2                      : ' + hors.length + ' fiches, ' + horsTotal + ' mots');
console.log('');
for (const [rel, n] of hors) console.log('    HORS  ' + rel.padEnd(52) + String(n).padStart(7));
console.log('');
console.log('  Controle : ' + total + ' - ' + horsTotal + ' = ' + (total - horsTotal) +
  '   (doit valoir le 47937 du restant de l anneau 2)');
