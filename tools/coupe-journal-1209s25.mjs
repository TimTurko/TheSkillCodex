#!/usr/bin/env node
// tools/coupe-journal-1209s25.mjs
// One-off - COUPE DU JOURNAL A LA CLOTURE DU CHANTIER INDEXATION, VERS UN
// SECOND FICHIER D ARCHIVE. Seance 25 du 12/09.
//
// Deplace en bloc TOUTES les entrees de JOURNAL.md situees SOUS l entree
// "## 2026-09-11 (séance 21)" - c est-a-dire de "## 2026-09-11 (séance 20)"
// jusqu a "## 2026-08-30 (suite 11)" - vers un fichier NEUF,
// JOURNAL-archive-2.md. JOURNAL-archive.md (1,26 Mo) est GELE : il n est ni
// lu ni ecrit par la passe de coupe.
//
// FRONTIERE. La cloture du chantier indexation est une decision Tim datee
// (seance 20, 11/09) ; la seance 21 ouvre le chantier suivant, la rentree.
// La frontiere tombe donc ENTRE deux entrees de MEME DATE (11/09) : comme
// le 30/08, l ancre est le TITRE EXACT de la premiere entree deplacee, pas
// une date.
//
// CE QUI RESTE : quatre entrees, DECLAREES ci-dessous (seances 21 a 24).
//
// GARDES (heritees de coupe-journal-chantier-3008s12.mjs).
//   1. --dry OBLIGATOIRE D ABORD : inventaire titre par titre AVEC LA
//      TAILLE EN OCTETS DE CHAQUE ENTREE, tailles predites des trois
//      fichiers, rien d ecrit.
//   2. Garde d extension : ancre unique, ancre au rang declare, liste
//      gardee EGALE a la declaration, dates deplacees <= date de la plus
//      ancienne entree gardee.
//   3. Garde d unicite sur chaque ancre et chaque remplacement d en-tete.
//   4. Garde de conservation : autant de titres dans le bloc que dans
//      l inventaire, ET conservation A L OCTET :
//        octets(JOURNAL avant) - octets(retire) + delta(en-tete) + delta(pied)
//          = octets(JOURNAL apres)
//        octets(preambule) + octets(bloc) + octets(fin) = octets(archive 2)
//      Apres ecriture, la passe live RELIT les deux fichiers sur le disque
//      et compare leur taille aux predictions ; un ecart est signale.
//   5. Garde de non-ecrasement : si JOURNAL-archive-2.md existe, ABORT.
//
// PAS DE .bak POUR CETTE COUPE (arbitrage Tim 12/09) : l arbre est propre et
// pousse, git est la sauvegarde.
//
// MODES.
//   --dry            inventaire + predictions, n ecrit rien
//   (sans option)    passe live de la coupe
//   --verifier-bak   controle A L OCTET que les trois .bak du 30/08 sont des
//                    doublons de l etat courant, n ecrit ni ne supprime rien
//   --supprimer-bak  = --verifier-bak puis suppression des trois .bak SI ET
//                    SEULEMENT SI les trois controles passent
//
// Surcharges de chemin, POUR LE TEST NEGATIF DELIBERE UNIQUEMENT :
//   --journal <chemin>   --archive2 <chemin>

import { readFileSync, writeFileSync, existsSync, statSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const argv = process.argv.slice(2);
const DRY = argv.includes('--dry');
const VERIF_BAK = argv.includes('--verifier-bak') || argv.includes('--supprimer-bak');
const SUPPR_BAK = argv.includes('--supprimer-bak');
const opt = (nom, defaut) => {
  const i = argv.indexOf(nom);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : defaut;
};
const JOURNAL = opt('--journal', join(root, 'JOURNAL.md'));
const ARCHIVE1 = join(root, 'JOURNAL-archive.md');
const ARCHIVE2 = opt('--archive2', join(root, 'JOURNAL-archive-2.md'));

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
const fmt = (n) => String(n).padStart(9, ' ');

function compter(s, sub) {
  let n = 0;
  let i = s.indexOf(sub);
  while (i !== -1) {
    n += 1;
    i = s.indexOf(sub, i + 1);
  }
  return n;
}
function indexUnique(s, sub, label) {
  const n = compter(s, sub);
  if (n === 0) die('ancre introuvable : ' + label);
  if (n > 1) die('ancre NON UNIQUE (' + n + ') : ' + label);
  return s.indexOf(sub);
}
function remplacerUnique(s, ancien, nouveau, label) {
  indexUnique(s, ancien, label);
  return s.replace(ancien, nouveau);
}

/* ======================================================================
   MODE --verifier-bak / --supprimer-bak
   ====================================================================== */

if (VERIF_BAK) {
  const J_BAK = join(root, 'JOURNAL.md.bak');
  const A_BAK = join(root, 'JOURNAL-archive.md.bak');
  const P_BAK = join(root, 'tools', 'predictions-260830.md.bak');
  const P_SRC = join(root, 'tools', 'predictions-260830.md');
  const P_CHANT = join(root, 'tools', 'predictions-260830-chantier.md');

  for (const f of [J_BAK, A_BAK, P_BAK, JOURNAL, ARCHIVE1, P_SRC, P_CHANT]) {
    if (!existsSync(f)) die('fichier absent : ' + f);
  }

  console.log('=== VERIFICATION A L OCTET DES TROIS .bak DU 30/08 ===');
  console.log('  Horloge lue : ' + ISO + '  ' + HEURE);
  console.log('');

  const journal = readFileSync(JOURNAL, 'utf8');
  const archive = readFileSync(ARCHIVE1, 'utf8');
  const jBak = readFileSync(J_BAK, 'utf8');
  const aBak = readFileSync(A_BAK, 'utf8');
  const pBak = readFileSync(P_BAK, 'utf8');
  const pSrc = readFileSync(P_SRC, 'utf8');
  const pChant = readFileSync(P_CHANT, 'utf8');

  let ok = 0;
  let ko_ = 0;
  const verdict = (label, cond, detail) => {
    console.log('  ' + (cond ? 'OK   ' : 'FAUX ') + label + (detail ? '   (' + detail + ')' : ''));
    if (cond) ok += 1; else ko_ += 1;
  };

  // --- (1) JOURNAL-archive.md.bak = archive courante privee du groupe insere le 30/08
  const M_NEW = '<!-- DÉBUT DES SESSIONS 22/08 → 30/08 (suite 10), CHANTIER DE TRADUCTION';
  const M_OLD = '<!-- DÉBUT DES SESSIONS 27/06 → 17/08 (archivées le 29/08';
  const iNew = indexUnique(archive, M_NEW, 'marqueur de groupe 22/08 -> 30/08 (archive)');
  const iOld = indexUnique(archive, M_OLD, 'marqueur de groupe 27/06 -> 17/08 (archive)');
  if (iNew > iOld) die('ordre des marqueurs inattendu dans l archive');
  // le 30/08 : ARCH_ANCRE -> NOUVEAU_GROUPE + '\n\n' + bloc + '\n\n' + ARCH_ANCRE
  const finMarqueurNew = archive.indexOf('-->', iNew) + 3;
  const bloc3008 = archive.slice(finMarqueurNew + 2, iOld - 2);
  let recon = archive.slice(0, iNew) + archive.slice(iOld);
  recon = remplacerUnique(recon, 'au 2026-08-30)', 'au 2026-08-17)', 'titre de l archive');
  verdict('JOURNAL-archive.md.bak == archive courante privee du bloc du 30/08',
    recon === aBak, oct(recon) + ' o reconstruits / ' + oct(aBak) + ' o dans le .bak');
  verdict('bloc du 30/08 extrait de l archive : 57 titres',
    (bloc3008.match(/^## 2026-/gm) || []).length === 57, oct(bloc3008) + ' o');

  // --- (2) JOURNAL.md.bak = suite 11 (encore dans le JOURNAL) + bloc du 30/08
  const T_S10 = '## 2026-08-30 (suite 10)';
  const T_S11 = '## 2026-08-30 (suite 11)';
  const RE_PIED_S = '<!-- Sessions antérieures';
  const iS10 = indexUnique(jBak, T_S10, 'titre suite 10 (JOURNAL.md.bak)');
  const iS11bak = indexUnique(jBak, T_S11, 'titre suite 11 (JOURNAL.md.bak)');
  const iPiedBak = indexUnique(jBak, RE_PIED_S, 'pied (JOURNAL.md.bak)');
  const iSepBak = jBak.lastIndexOf('---', iPiedBak);
  const blocBak = jBak.slice(iS10, iSepBak).replace(/\s+$/, '');
  verdict('bloc de JOURNAL.md.bak (suite 10 -> 22/08) == bloc insere dans l archive',
    blocBak === bloc3008, oct(blocBak) + ' o / ' + oct(bloc3008) + ' o');
  const iS11cur = indexUnique(journal, T_S11, 'titre suite 11 (JOURNAL.md)');
  const iPiedCur = indexUnique(journal, RE_PIED_S, 'pied (JOURNAL.md)');
  const iSepCur = journal.lastIndexOf('---', iPiedCur);
  const s11cur = journal.slice(iS11cur, iSepCur).replace(/\s+$/, '');
  const s11bak = jBak.slice(iS11bak, iS10).replace(/\s+$/, '');
  verdict('entree suite 11 de JOURNAL.md.bak == entree suite 11 du JOURNAL courant',
    s11cur === s11bak, oct(s11cur) + ' o / ' + oct(s11bak) + ' o');

  // --- (3) predictions-260830.md.bak = chantier (sans en-tete) + source (sans en-tete, prefixe)
  const ANCRE_P = '\n# SÉANCE 11 DU 30/08 — BILAN DE CHANTIER, FILE D\'ARBITRAGES, SUITE DU DÉPÔT';
  const iPbak = indexUnique(pBak, ANCRE_P, 'ancre seance 11 (predictions .bak)');
  const iPsrc = indexUnique(pSrc, ANCRE_P, 'ancre seance 11 (predictions courant)');
  // en-tete EXACT ecrit par coupe-predictions-3008s12.mjs (STAMP = 30/08) ;
  // '\n---\n' n est pas une ancre : le fichier en porte 234 (lecon du 12/09).
  const EN_TETE_CHANTIER =
    '# PRÉDICTIONS — 30/08, séances 1 à 10 : LES SEPT DERNIERS LOTS DU CHANTIER DE TRADUCTION\n' +
    '\n' +
    '> Archive de prédictions. Coupe C128 du 30/08 (séance 12), à la frontière\n' +
    '> du chantier de traduction fermé le 30/08 (séance 10). Ce fichier porte les\n' +
    '> séances 1 à 10 du 30/08 — lots 7 à 14 — et rien d\'autre.\n' +
    '> La suite vit dans `tools/predictions-260830.md`.\n' +
    '\n' +
    '---\n';
  if (!pChant.startsWith(EN_TETE_CHANTIER)) die('en-tete de predictions-260830-chantier.md != celui ecrit le 30/08');
  const blocP = pChant.slice(EN_TETE_CHANTIER.length);
  verdict('predictions-260830-chantier.md (sans en-tete) == debut de predictions-260830.md.bak',
    pBak.slice(0, iPbak) === blocP, oct(blocP) + ' o');
  verdict('reste de predictions-260830.md.bak == prefixe de predictions-260830.md (sans en-tete)',
    pSrc.slice(iPsrc).startsWith(pBak.slice(iPbak)), oct(pBak.slice(iPbak)) + ' o');

  console.log('');
  console.log('  ' + ok + ' controle(s) OK, ' + ko_ + ' FAUX');
  if (ko_ > 0) {
    console.log('  Au moins un controle est FAUX : les .bak portent un etat que le depot n a pas.');
    console.log('  RIEN N EST SUPPRIME.');
    process.exit(1);
  }
  if (!SUPPR_BAK) {
    console.log('  --verifier-bak : les trois .bak sont des doublons a l octet. Rien de supprime.');
    process.exit(0);
  }
  for (const f of [J_BAK, A_BAK, P_BAK]) {
    const t = statSync(f).size;
    unlinkSync(f);
    console.log('  supprime : ' + f + '  (' + t + ' o)');
  }
  console.log('OK - trois .bak supprimes.');
  process.exit(0);
}

/* ======================================================================
   MODE COUPE (--dry ou live)
   ====================================================================== */

/* ---------------- GARDE 5 : non-ecrasement, AVANT toute lecture -------- */

if (existsSync(ARCHIVE2)) die('la cible existe deja, refus d ecraser : ' + ARCHIVE2);

/* ---------------- Declaration ---------------- */

const TITRES_GARDES = [
  '## 2026-09-12 (séance 24)',
  '## 2026-09-12 (séance 23)',
  '## 2026-09-12 (séance 22)',
  '## 2026-09-11 (séance 21)',
];
const TITRE_PREMIER_DEPLACE = '## 2026-09-11 (séance 20)';
const TITRE_DERNIER_DEPLACE = '## 2026-08-30 (suite 11)';

/* ---------------- JOURNAL : inventaire et frontiere ---------------- */

const journalOrig = readFileSync(JOURNAL, 'utf8');
const EOL = journalOrig.includes('\r\n') ? '\r\n' : '\n';

const RE_TITRE = /^## (\d{4}-\d{2}-\d{2})([^\n]*)$/gm;
const titres = [...journalOrig.matchAll(RE_TITRE)].map((m) => ({
  index: m.index,
  date: m[1],
  titre: ('## ' + m[1] + m[2]).trim(),
}));
if (!titres.length) die('aucun titre d entree trouve dans JOURNAL.md');

const RE_PIED = /^---\r?\n\r?\n<!-- Sessions antérieures/m;
const hitsPied = [...journalOrig.matchAll(new RegExp(RE_PIED.source, 'gm'))];
if (hitsPied.length !== 1) die('commentaire de pied du JOURNAL : ' + hitsPied.length + ' occurrence(s)');
const pied = hitsPied[0].index;

// taille de chaque entree = du titre au titre suivant (ou au pied)
for (let i = 0; i < titres.length; i += 1) {
  const fin = i + 1 < titres.length ? titres[i + 1].index : pied;
  titres[i].octets = oct(journalOrig.slice(titres[i].index, fin));
}

// GARDE 2(a)+(b) : ancre unique, au rang declare
const rangs = titres
  .map((t, i) => (t.titre.startsWith(TITRE_PREMIER_DEPLACE) ? i : -1))
  .filter((i) => i !== -1);
if (rangs.length === 0) die('ancre de frontiere introuvable : ' + TITRE_PREMIER_DEPLACE);
if (rangs.length > 1) die('ancre de frontiere NON UNIQUE (' + rangs.length + ')');
const premierDeplace = rangs[0];
if (premierDeplace !== TITRES_GARDES.length) {
  die('la frontiere est au rang ' + premierDeplace + ', attendu ' + TITRES_GARDES.length);
}

const aGarder = titres.slice(0, premierDeplace);
const aDeplacer = titres.slice(premierDeplace);

// GARDE 2(d) : liste gardee EGALE a la declaration, titre par titre
for (let i = 0; i < TITRES_GARDES.length; i += 1) {
  if (!aGarder[i] || !aGarder[i].titre.startsWith(TITRES_GARDES[i])) {
    console.error('Entrees gardees calculees :');
    for (const t of aGarder) console.error('  ' + t.titre.slice(0, 100));
    die('la liste gardee ne correspond pas a la declaration au rang ' + i);
  }
}
if (!aDeplacer[aDeplacer.length - 1].titre.startsWith(TITRE_DERNIER_DEPLACE)) {
  die('la derniere entree deplacee n est pas ' + TITRE_DERNIER_DEPLACE);
}

// GARDE 2(c) : rien de posterieur a la plus ancienne entree gardee sous la frontiere
const dateGardeeMin = aGarder.map((t) => t.date).sort()[0];
const intrus = aDeplacer.filter((t) => t.date > dateGardeeMin);
if (intrus.length) {
  for (const t of intrus) console.error('  ' + t.titre);
  die(intrus.length + ' entree(s) posterieure(s) au ' + dateGardeeMin + ' sous la frontiere');
}

const coupe = aDeplacer[0].index;
if (pied < coupe) die('ordre des ancres inattendu : pied avant la frontiere');
const retire = journalOrig.slice(coupe, pied);
const bloc = retire.replace(/\s+$/, '');

// GARDE 4 : conservation des titres
const nBloc = (bloc.match(/^## 2026-/gm) || []).length;
if (nBloc !== aDeplacer.length) {
  die('le bloc porte ' + nBloc + ' entrees, l inventaire en annonce ' + aDeplacer.length);
}
if (!journalOrig.includes('<!-- INSERT_JOURNAL_HERE -->')) die('marqueur INSERT_JOURNAL_HERE absent');

/* ---------------- Reecriture de l en-tete et du pied du JOURNAL ---------- */

const ET_DEBUT = '> Sessions antichronologiques antérieures au 30/08 (suite 11) archivées dans `JOURNAL-archive.md`';
const ET_FIN = '> dernière coupe : 30/08, sessions 22/08 → 30/08 (suite 10)).';
const iEtDebut = indexUnique(journalOrig, ET_DEBUT, 'en-tete (debut du blurb)');
const iEtFin = indexUnique(journalOrig, ET_FIN, 'en-tete (fin du blurb)');
if (iEtFin < iEtDebut) die('en-tete : ordre des ancres inattendu');
const iEtApres = iEtFin + ET_FIN.length;

const NOUVEL_EN_TETE = [
  '> Sessions antichronologiques antérieures au 11/09 (séance 21) archivées, en deux fichiers :',
  '> — `JOURNAL-archive.md` (1,26 Mo, GELÉ, ne reçoit plus rien) : sessions du 19/05 au 30/08 (suite 10)',
  '>   — mise en place initiale du dépôt, trame projet cycle en V, squelettes du V,',
  '>   rédaction de `specification-technique.md`, trames transverses et fiches-notion,',
  '>   modules MCU complets — ESP32, STM32, Teensy, ESP8266, MicroPython, Raspberry Pi —,',
  '>   clôture MME, squelette pro EEE, sweep liens rouges pré-publication, relecture de fond des modules,',
  '>   prises de vue, chantier de traduction mené à son terme (quatorze lots, 242 fiches, 291 261 mots) ;',
  '> — `JOURNAL-archive-2.md` (ouvert, reçoit les coupes suivantes) : sessions du 30/08 (suite 11) au 11/09 (séance 20)',
  '>   — bilan du chantier de traduction et coupe C128, correctif #10 de `--style` et périmètre des puces mesuré',
  '>   (FR 1 164 gloses / 178 porteuses), cadrage du chantier des puces (découpe hybride, FR d\'abord),',
  '>   chantier IA posé en entier (cadrage quatre mains, textes de `/ia/`, blocs A/B/C — `llms.txt`, Markdown brut,',
  '>   `hreflang`, `lang: en` sur 242 —, recettes AVANT et APRÈS), indexation Google instruite puis close sur un',
  '>   défaut hors dépôt (2 URL indexées sur ~490, sitemap « impossible de récupérer », Bing 485), couverture AA',
  '>   arrêtée à 45 C / 5 E, corpus 243 fiches FR, dette de captures 29 occurrences / 15 fiches, report des familles',
  '>   MicroPython / STM32 / Teensy et Raspberry Pi actif ;',
  '> dernière coupe : ' + STAMP + ' (séance 25), sessions 30/08 (suite 11) → 11/09 (séance 20), frontière = clôture du chantier indexation).',
].join(EOL);

const ancienEnTete = journalOrig.slice(iEtDebut, iEtApres);
const deltaEnTete = oct(NOUVEL_EN_TETE) - oct(ancienEnTete);

const PIED_A =
  'Sessions antérieures au 30/08 (suite 11) déplacées dans `JOURNAL-archive.md`';
const PIED_A_NEW =
  'Sessions antérieures au 11/09 (séance 21) déplacées dans `JOURNAL-archive.md` (jusqu\'au 30/08 suite 10, gelé) puis `JOURNAL-archive-2.md`';
const PIED_B =
  'Dernière passe : 30/08 — coupe C128 à la frontière du chantier de traduction, sessions 22/08 → 30/08 (suite 10) archivées en bloc.';
const PIED_B_NEW =
  'Dernière passe : ' + STAMP + ' — coupe à la clôture du chantier indexation, sessions 30/08 (suite 11) → 11/09 (séance 20) archivées en bloc dans `JOURNAL-archive-2.md`.';
const deltaPied = (oct(PIED_A_NEW) - oct(PIED_A)) + (oct(PIED_B_NEW) - oct(PIED_B));

let nouveauJournal =
  journalOrig.slice(0, iEtDebut) + NOUVEL_EN_TETE + journalOrig.slice(iEtApres, coupe) + journalOrig.slice(pied);
nouveauJournal = remplacerUnique(nouveauJournal, PIED_A, PIED_A_NEW, 'pied (deplacees)');
nouveauJournal = remplacerUnique(nouveauJournal, PIED_B, PIED_B_NEW, 'pied (derniere passe)');

if (!nouveauJournal.includes('<!-- INSERT_JOURNAL_HERE -->')) die('marqueur INSERT_JOURNAL_HERE perdu');
for (const t of TITRES_GARDES) if (!nouveauJournal.includes(t)) die('entree gardee perdue : ' + t);
if (nouveauJournal.includes(TITRE_PREMIER_DEPLACE)) die('entree deplacee encore presente : ' + TITRE_PREMIER_DEPLACE);

/* ---------------- Archive 2 ---------------- */

const PREAMBULE = [
  '# JOURNAL — Archive 2 (sessions du 2026-08-30 (suite 11) au 2026-09-11 (séance 20))',
  '',
  '> Second fichier d\'archive du JOURNAL. `JOURNAL-archive.md` (sessions du 19/05',
  '> au 30/08 suite 10, 1,26 Mo) est gelé et ne reçoit plus rien ; les coupes à',
  '> partir du 12/09 s\'insèrent ici, EN TÊTE, au marqueur `INSERT_ARCHIVE_HERE`,',
  '> chacune sous son marqueur de groupe. Ordre antichronologique global.',
  '>',
  '> Coupes reçues :',
  '> - ' + STAMP + ' (séance 25) : sessions 30/08 (suite 11) → 11/09 (séance 20), dix entrées,',
  '>   frontière = clôture du chantier indexation (décision Tim, séance 20). Contenu :',
  '>   bilan du chantier de traduction et coupe C128 (suite 11-12), correctif #10 de',
  '>   `--style` et périmètre des puces, cadrage du chantier des puces (séance 13),',
  '>   chantier IA — cadrage quatre mains, textes, blocs A/B/C, recettes AVANT et',
  '>   APRÈS (séances 14-17) —, indexation Google du dépôt à la clôture (séances',
  '>   18-20), couverture AA 45/5 et corpus 243 (séance 19).',
  '',
  '<!-- INSERT_ARCHIVE_HERE -->',
  '',
  '<!-- DÉBUT DES SESSIONS 30/08 (suite 11) → 11/09 (séance 20) (archivées le ' + STAMP +
    ', coupe à la clôture du chantier indexation — ordre interne antichronologique). -->',
  '',
  '',
].join(EOL);
const FIN = EOL;
const archive2 = PREAMBULE + bloc + FIN;

/* ---------------- Predictions et criteres ---------------- */

const predJournal = oct(journalOrig) - oct(retire) + deltaEnTete + deltaPied;
const predArchive2 = oct(PREAMBULE) + oct(bloc) + oct(FIN);
const critere1 = predJournal === oct(nouveauJournal);
const critere2 = predArchive2 === oct(archive2);
const critere3 = archive2.includes(bloc) && !nouveauJournal.includes(bloc);

/* ---------------- Rapport, toujours imprime ---------------- */

console.log('=== COUPE DU JOURNAL - cloture du chantier indexation -> JOURNAL-archive-2.md ===');
console.log('  Horloge lue : ' + ISO + '  ' + HEURE + '   (etiquette : ' + STAMP + ')   EOL : ' + JSON.stringify(EOL));
console.log('  Frontiere   : premiere entree deplacee = ' + TITRE_PREMIER_DEPLACE);
console.log('');
console.log('  entrees dans JOURNAL.md   : ' + titres.length);
console.log('  GARDEES                   : ' + aGarder.length);
console.log('  DEPLACEES                 : ' + aDeplacer.length);
console.log('');
console.log('  --- INVENTAIRE (octets du titre au titre suivant)');
for (const t of aGarder) console.log('    + ' + fmt(t.octets) + '  ' + t.titre.slice(0, 90));
for (const t of aDeplacer) console.log('    - ' + fmt(t.octets) + '  ' + t.titre.slice(0, 90));
console.log('    ' + fmt(titres.reduce((a, t) => a + t.octets, 0)) + '  total des entrees');
console.log('    ' + fmt(oct(journalOrig) - titres.reduce((a, t) => a + t.octets, 0)) + '  en-tete + pied');
console.log('');
console.log('  --- DECOMPTE PAR DATE DES ENTREES DEPLACEES');
{
  const parDate = new Map();
  for (const t of aDeplacer) parDate.set(t.date, (parDate.get(t.date) || 0) + 1);
  for (const c of [...parDate.keys()].sort().reverse()) console.log('    ' + c + ' : ' + parDate.get(c));
  console.log('    TOTAL : ' + aDeplacer.length);
}
console.log('');
console.log('  retire du JOURNAL (avec blancs) : ' + oct(retire) + ' o');
console.log('  bloc deplace (sans blancs finaux): ' + oct(bloc) + ' o   (' + ko(bloc) + ')');
console.log('  delta en-tete : ' + (deltaEnTete >= 0 ? '+' : '') + deltaEnTete + ' o   delta pied : ' +
  (deltaPied >= 0 ? '+' : '') + deltaPied + ' o   preambule archive 2 : ' + oct(PREAMBULE) + ' o');
console.log('');
console.log('  --- PREDICTIONS DE TAILLE (octets sur le disque apres la passe live)');
console.log('  JOURNAL.md         : ' + oct(journalOrig) + '  ->  ' + predJournal + '   (' + ko(nouveauJournal) + ')');
console.log('  JOURNAL-archive-2  : (absent)  ->  ' + predArchive2 + '   (' + ko(archive2) + ')');
console.log('  JOURNAL-archive.md : NON TOUCHE, ' + statSync(ARCHIVE1).size + ' o');
console.log('');
console.log('  critere 1  JOURNAL avant - retire + deltas = JOURNAL apres  : ' + (critere1 ? 'OK' : 'FAUX'));
console.log('  critere 2  preambule + bloc + fin = archive 2               : ' + (critere2 ? 'OK' : 'FAUX'));
console.log('  critere 3  bloc verbatim dans archive 2, absent du JOURNAL  : ' + (critere3 ? 'OK' : 'FAUX'));
if (!critere1 || !critere2 || !critere3) die('un critere de conservation est FAUX');

if (DRY) {
  console.log('');
  console.log('  --dry : RIEN N A ETE ECRIT. Ancres, remplacements et criteres resolus -');
  console.log('  la passe live ne peut plus echouer que sur un fichier modifie entre les');
  console.log('  deux lancements.');
  process.exit(0);
}

/* ---------------- Passe live ---------------- */

writeFileSync(ARCHIVE2, archive2, 'utf8');
writeFileSync(JOURNAL, nouveauJournal, 'utf8');

const relJ = statSync(JOURNAL).size;
const relA = statSync(ARCHIVE2).size;
const relu = readFileSync(ARCHIVE2, 'utf8');
console.log('');
console.log('  --- RELECTURE SUR LE DISQUE');
console.log('  JOURNAL.md         : ' + relJ + ' o   ' + (relJ === predJournal ? 'OK' : 'ECART vs ' + predJournal));
console.log('  JOURNAL-archive-2  : ' + relA + ' o   ' + (relA === predArchive2 ? 'OK' : 'ECART vs ' + predArchive2));
console.log('  bloc verbatim relu dans archive 2 : ' + (relu.includes(bloc) ? 'OK' : 'FAUX'));
console.log('');
console.log('OK - coupe effectuee. Aucun .bak ecrit (git est la sauvegarde).');
