#!/usr/bin/env node
/**
 * groom-todo.mjs — Purge la pile de fleches historiques de TODO.md
 *
 * TODO.md accumule une fleche « > **MAJ jj/mm** ... » par session en tete de
 * fichier. L'historique appartient au JOURNAL : le TODO ne garde que les
 * dernieres, celles qui portent encore de l'etat vivant (clic-tests en
 * attente, decisions non tranchees). Le fichier etait a ~10 ko au grooming du
 * 11/06 et a atteint 64 ko, presque entierement en fleches.
 *
 * Pourquoi un script plutot qu'une sequence d'edit_file : le bloc a retirer
 * pese des dizaines de ko et contient des ECHAPPEMENTS LITTERAUX dans sa prose
 * (antislash-u d'un incident d'encodage, antislash-n d'un affichage, pipes
 * echappes de wikilinks) que le newText d'edit_file interpreterait, corrompant
 * silencieusement le fichier. Ici on fait un SLICE DE CHAINE BRUT : zero
 * interpretation. Meme motif que archive-journal-*.mjs.
 *
 * Usage :
 *   node tools/groom-todo.mjs --dry            montre ce qui serait retire
 *   node tools/groom-todo.mjs                  purge en gardant 3 fleches
 *   node tools/groom-todo.mjs --garder 5       purge en gardant 5 fleches
 *
 * Fail-safe : toute anomalie (marqueur absent, moins de fleches que demande,
 * bornes incoherentes) provoque un exit 1 SANS RIEN ECRIRE. Une sauvegarde
 * .bak est deposee avant toute ecriture.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const FICHIER = join(process.cwd(), 'TODO.md');
const DRY = process.argv.includes('--dry');

const iGarder = process.argv.indexOf('--garder');
const GARDER = iGarder >= 0 ? parseInt(process.argv[iGarder + 1], 10) : 3;

if (!Number.isInteger(GARDER) || GARDER < 1) {
  console.error('ABANDON : --garder attend un entier >= 1.');
  process.exit(1);
}

const texte = readFileSync(FICHIER, 'utf8');
const ko = (n) => (n / 1024).toFixed(1) + ' ko';

/* ---------- reperage des fleches ---------- */

// Les fleches ouvrent une citation et portent un chevron typographique qui a
// varie dans le temps (deux glyphes rencontres). On les repere donc par la
// structure « > **<glyphe> MAJ » plutot que par un caractere precis.
const FLECHE = /^> \*\*[^\s*]{1,3} MAJ /gm;
const fleches = [...texte.matchAll(FLECHE)];

if (fleches.length === 0) {
  console.error('ABANDON : aucune fleche « > **... MAJ » trouvee dans TODO.md.');
  console.error('Le format a du changer — verifier le fichier avant de relancer.');
  process.exit(1);
}

if (fleches.length <= GARDER) {
  console.log(
    'Rien a faire : ' + fleches.length + ' fleche(s) presente(s), ' + GARDER + ' a garder.'
  );
  process.exit(0);
}

/* ---------- bornes de la coupe ---------- */

// On coupe du debut de la (GARDER+1)-ieme fleche jusqu'au premier titre de
// section qui suit la pile. Ce titre est la garde basse : sans lui, une erreur
// de bornes emporterait tout le contenu actionnable du fichier.
const debutCoupe = fleches[GARDER].index;

const finPile = texte.slice(debutCoupe).search(/^#{2,3} /m);
if (finPile < 0) {
  console.error('ABANDON : aucun titre de section apres la pile de fleches.');
  console.error('Impossible de borner la coupe sans risquer d\'emporter le reste du fichier.');
  process.exit(1);
}
const finCoupe = debutCoupe + finPile;

if (finCoupe <= debutCoupe) {
  console.error('ABANDON : bornes de coupe incoherentes.');
  process.exit(1);
}

const retire = texte.slice(debutCoupe, finCoupe);
const resultat = texte.slice(0, debutCoupe) + texte.slice(finCoupe);

/* ---------- garde de coherence ---------- */

const flechesRestantes = [...resultat.matchAll(FLECHE)].length;
if (flechesRestantes !== GARDER) {
  console.error(
    'ABANDON : apres coupe il resterait ' + flechesRestantes + ' fleche(s) au lieu de ' + GARDER + '.'
  );
  console.error('Rien n\'a ete ecrit.');
  process.exit(1);
}

/* ---------- rapport ---------- */

console.log('=== GROOMING TODO.md ===');
console.log('  fleches trouvees   : ' + fleches.length);
console.log('  fleches gardees    : ' + GARDER);
console.log('  fleches retirees   : ' + (fleches.length - GARDER));
console.log('');
console.log('  GARDEES :');
for (let i = 0; i < GARDER; i++) {
  console.log('    + ' + texte.slice(fleches[i].index, fleches[i].index + 96).replace(/\n/g, ' '));
}
console.log('');
console.log('  RETIREES :');
for (let i = GARDER; i < fleches.length; i++) {
  console.log('    - ' + texte.slice(fleches[i].index, fleches[i].index + 96).replace(/\n/g, ' '));
}
console.log('');
console.log('  taille avant       : ' + ko(texte.length));
console.log('  taille apres       : ' + ko(resultat.length));
console.log('  retire             : ' + ko(retire.length));

if (DRY) {
  console.log('');
  console.log('  --dry : RIEN N\'A ETE ECRIT.');
  process.exit(0);
}

writeFileSync(FICHIER + '.bak', texte, 'utf8');
writeFileSync(FICHIER, resultat, 'utf8');
console.log('');
console.log('  Ecrit. Sauvegarde : TODO.md.bak (gitignore, a supprimer apres verification).');
