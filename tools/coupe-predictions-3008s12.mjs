#!/usr/bin/env node
// tools/coupe-predictions-3008s12.mjs
// One-off - COUPE C128 DU FICHIER DE PREDICTIONS DU 30/08, meme frontiere de
// chantier que la coupe du JOURNAL. Seance 12 du 30/08.
//
// C128 coupe le JOURNAL a une frontiere de chantier. Le fichier de
// predictions du 30/08 pose le meme probleme et pour la meme cause : il porte
// SEPT LOTS et une seance de bilan dans un seul fichier de 1,2 Mo, parce que
// le nom du fichier est date du JOUR et que le 30/08 a porte douze seances.
//
// CE QUI PART, CE QUI RESTE. Tout ce qui precede le titre H1
// "# SEANCE 11 DU 30/08" part dans tools/predictions-260830-chantier.md ;
// le fichier vivant garde la seance 11 (bilan de chantier) et la seance 12.
// RIEN N EST SUPPRIME : C130, le depot porte la trace integrale.
//
// QUATRE GARDES.
//   1. --dry OBLIGATOIRE D ABORD. Le script enumere les titres H1 des deux
//      cotes et n ecrit rien.
//   2. GARDE D UNICITE de l ancre de frontiere.
//   3. GARDE DE NON-ECRASEMENT : si la cible existe deja, ABORT. C est la
//      garde qui manquait le 30/08 (seance 10), quand corps-NEGATIF-3008.md
//      a ecrase un fichier versionne sans avoir ete lu, la casse ne separant
//      rien sous Windows.
//   4. GARDE DE CONSERVATION A L OCTET : octets(bloc) + octets(reste) doit
//      valoir exactement octets(original). Un seul octet d ecart = ABORT.
//
// Fail-safe : toute anomalie arrete le script SANS rien ecrire. Sauvegarde
// .bak de la source creee avant ecriture.
//
// Lancer :  node tools/coupe-predictions-3008s12.mjs --dry
//           node tools/coupe-predictions-3008s12.mjs
//
// Surcharges, POUR LE TEST NEGATIF DELIBERE UNIQUEMENT :
//           --source <chemin>   --cible <chemin>

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const argv = process.argv.slice(2);
const DRY = argv.includes('--dry');
const opt = (nom, defaut) => {
  const i = argv.indexOf(nom);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : defaut;
};
const SOURCE = opt('--source', join(root, 'tools', 'predictions-260830.md'));
const CIBLE = opt('--cible', join(root, 'tools', 'predictions-260830-chantier.md'));

const ANCRE = '\n# SÉANCE 11 DU 30/08 — BILAN DE CHANTIER, FILE D\'ARBITRAGES, SUITE DU DÉPÔT';

const d = new Date();
const p2 = (n) => String(n).padStart(2, '0');
const STAMP = p2(d.getDate()) + '/' + p2(d.getMonth() + 1);
const ISO = d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate());
const HEURE = p2(d.getHours()) + ':' + p2(d.getMinutes());

const die = (m) => {
  console.error('ABORT : ' + m + ' - aucun fichier modifie.');
  process.exit(1);
};
const oct = (s) => Buffer.byteLength(s, 'utf8');
const ko = (s) => (oct(s) / 1024).toFixed(1) + ' ko';
const nul = (s) => {
  let n = 0;
  for (let i = 0; i < s.length; i += 1) if (s.charCodeAt(i) === 0) n += 1;
  return n;
};

/* ---------------- GARDE 3 : non-ecrasement, AVANT toute lecture ---------- */

if (existsSync(CIBLE)) die('la cible existe deja, refus d ecraser');

/* ---------------- Frontiere ---------------- */

const orig = readFileSync(SOURCE, 'utf8');

let n = 0;
let i = orig.indexOf(ANCRE);
while (i !== -1) {
  n += 1;
  i = orig.indexOf(ANCRE, i + 1);
}
if (n === 0) die('ancre de frontiere introuvable');
if (n > 1) die('ancre de frontiere NON UNIQUE (' + n + ')');

const coupe = orig.indexOf(ANCRE);
const bloc = orig.slice(0, coupe);
const reste = orig.slice(coupe);

/* ---------------- GARDE 4 : conservation a l octet ---------------- */

const conserve = oct(bloc) + oct(reste) === oct(orig);
if (!conserve) {
  die('conservation fausse : ' + oct(bloc) + ' + ' + oct(reste) + ' != ' + oct(orig));
}

const h1 = (s) => (s.match(/^# .*$/gm) || []);
const h1Bloc = h1(bloc);
const h1Reste = h1(reste);

/* ---------------- Rapport, toujours imprime ---------------- */

console.log('=== COUPE C128 DU FICHIER DE PREDICTIONS - frontiere de chantier ===');
console.log('  Horloge lue : ' + ISO + '  ' + HEURE + '   (etiquette : ' + STAMP + ')');
console.log('  source      : ' + SOURCE);
console.log('  cible       : ' + CIBLE);
console.log('');
console.log('  ancre de frontiere        : ' + n + ' occurrence');
console.log('  bloc archive              : ' + oct(bloc) + ' octets   (' + ko(bloc) + ')');
console.log('  reste conserve            : ' + oct(reste) + ' octets   (' + ko(reste) + ')');
console.log('  conservation              : ' + oct(bloc) + ' + ' + oct(reste) +
  ' = ' + oct(orig) + '  ' + (conserve ? 'OK' : 'FAUX'));
console.log('  titres H1 archives        : ' + h1Bloc.length);
console.log('  titres H1 conserves       : ' + h1Reste.length);
console.log('  octets NUL                : ' + nul(bloc) + ' archive / ' + nul(reste) + ' conserve');
console.log('');
console.log('  --- LES ' + h1Bloc.length + ' TITRES H1 ARCHIVES');
for (const t of h1Bloc) console.log('    - ' + t.slice(0, 100));
console.log('');
console.log('  --- LES ' + h1Reste.length + ' TITRES H1 CONSERVES');
for (const t of h1Reste) console.log('    + ' + t.slice(0, 100));

/* ---------------- En-tetes ---------------- */

const EN_TETE_CIBLE =
  '# PRÉDICTIONS — 30/08, séances 1 à 10 : LES SEPT DERNIERS LOTS DU CHANTIER DE TRADUCTION\n' +
  '\n' +
  '> Archive de prédictions. Coupe C128 du ' + STAMP + ' (séance 12), à la frontière\n' +
  '> du chantier de traduction fermé le 30/08 (séance 10). Ce fichier porte les\n' +
  '> séances 1 à 10 du 30/08 — lots 7 à 14 — et rien d\'autre.\n' +
  '> La suite vit dans `tools/predictions-260830.md`.\n' +
  '\n' +
  '---\n';

const EN_TETE_SOURCE =
  '# PRÉDICTIONS — 30/08, APRÈS LE CHANTIER DE TRADUCTION (séances 11 et suivantes)\n' +
  '\n' +
  '> Coupe C128 du ' + STAMP + ' (séance 12), à la frontière du chantier de\n' +
  '> traduction. Les séances 1 à 10 du 30/08 — lots 7 à 14 — sont dans\n' +
  '> `tools/predictions-260830-chantier.md`.\n';

const cible = EN_TETE_CIBLE + bloc;
const source = EN_TETE_SOURCE + reste;

console.log('');
console.log('  cible ecrite              : ' + oct(cible) + ' octets   (' + ko(cible) + ')');
console.log('  source reecrite           : ' + oct(source) + ' octets   (' + ko(source) + ')');

if (DRY) {
  console.log('');
  console.log('  --dry : RIEN N A ETE ECRIT. Ancre resolue, conservation verifiee,');
  console.log('  cible absente - la passe live ne peut plus echouer que sur un');
  console.log('  fichier modifie entre les deux lancements.');
  process.exit(0);
}

writeFileSync(SOURCE + '.bak', orig, 'utf8');
writeFileSync(CIBLE, cible, 'utf8');
writeFileSync(SOURCE, source, 'utf8');

console.log('');
console.log('OK - coupe C128 du fichier de predictions effectuee. Sauvegarde : ' + SOURCE + '.bak');
