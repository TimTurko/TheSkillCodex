// relabelliser.mjs - reprise des libelles de seance derives (26/08 suite 2).
//
// MOTIF. Le libelle d'une entree de JOURNAL a ete obtenu trois fois de suite
// en incrementant le precedent au lieu d'etre lu sur l'horloge. Mesure par
//   git log --date=short -S"## 2026-08-2x" -- JOURNAL.md
// la derive commence a l'entree libellee 26/08, introduite par un commit du
// 25/08 a 20:45, et rien avant elle n'est fautif.
//
// ORDRE DES REMPLACEMENTS. Il est CONTRAINT : 26/08 est a la fois la source
// de l'etape 1 et la cible de l'etape 3. Les etapes doivent donc s'appliquer
// dans l'ordre ecrit, chacune balayant tout le texte avant la suivante.
//
// PROTECTION. Certaines occurrences sont de VRAIES dates d'horloge (dates de
// commit citees dans les corrections) et ne doivent pas bouger. Elles sont
// masquees par sentinelle avant remplacement, puis restituees - meme geste
// que masquerHorsProse() dans creer-fiche-en.mjs.
//
// Usage :
//   node tools/relabelliser.mjs            (dry run, n'ecrit rien)
//   node tools/relabelliser.mjs --appliquer

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const RACINE = process.cwd();
const APPLIQUER = process.argv.includes('--appliquer');

const FICHIERS = ['JOURNAL.md', 'TODO.md', 'BACKLOG.md', 'conventions.md'];

// Ordre contraint, ne pas reordonner.
const ETAPES = [
  { de: '26/08', vers: '25/08 (suite 7)', iso: ['2026-08-26', '2026-08-25 (suite 7)'] },
  { de: '27/08', vers: '25/08 (suite 8)', iso: ['2026-08-27', '2026-08-25 (suite 8)'] },
  { de: '28/08', vers: '26/08',           iso: ['2026-08-28', '2026-08-26'] },
  { de: '29/08', vers: '26/08 (suite)',   iso: ['2026-08-29', '2026-08-26 (suite)'] },
];

// Occurrences a NE PAS toucher : vraies dates d'horloge, commandes git.
const PROTEGES = [
  '26/08 a 16:47',
  '26/08 \u00e0 16:47',
  '26/08 a 20:11',
  '26/08 \u00e0 20:11',
  '25/08 a 20:45',
  '25/08 \u00e0 20:45',
  '## 2026-08-2x',
];

function masquer(txt) {
  const cache = [];
  for (const p of PROTEGES) {
    let i;
    while ((i = txt.indexOf(p)) !== -1) {
      const jeton = `\u0000PROT${cache.length}\u0000`;
      cache.push(p);
      txt = txt.slice(0, i) + jeton + txt.slice(i + p.length);
    }
  }
  return { txt, cache };
}

function demasquer(txt, cache) {
  cache.forEach((p, n) => {
    txt = txt.split(`\u0000PROT${n}\u0000`).join(p);
  });
  return txt;
}

function contexte(ligne, motif) {
  const i = ligne.indexOf(motif);
  const d = Math.max(0, i - 45);
  const f = Math.min(ligne.length, i + motif.length + 45);
  return (d > 0 ? '...' : '') + ligne.slice(d, f).trim() + (f < ligne.length ? '...' : '');
}

console.log('=== RELABELLISATION DES ENTREES DE SEANCE ===');
console.log(APPLIQUER ? '  MODE : APPLICATION' : '  MODE : DRY RUN (aucune ecriture)');
console.log('');

let grandTotal = 0;

for (const nom of FICHIERS) {
  const chemin = join(RACINE, nom);
  const avant = readFileSync(chemin, 'utf8');
  let { txt, cache } = masquer(avant);

  const parFichier = [];

  for (const e of ETAPES) {
    // 1. forme ISO (titres de JOURNAL)
    const [isoDe, isoVers] = e.iso;
    let n = txt.split(isoDe).length - 1;
    if (n) {
      parFichier.push({ de: isoDe, vers: isoVers, n });
      txt = txt.split(isoDe).join(isoVers);
    }
    // 2. forme courte jj/mm, bornee pour ne pas mordre dans 126/08
    const re = new RegExp('(?<![0-9/])' + e.de.replace('/', '\\/') + '(?![0-9/])', 'g');
    const trouves = txt.match(re);
    if (trouves) {
      parFichier.push({ de: e.de, vers: e.vers, n: trouves.length });
      txt = txt.replace(re, e.vers);
    }
  }

  const apres = demasquer(txt, cache);
  const total = parFichier.reduce((s, x) => s + x.n, 0);
  grandTotal += total;

  console.log(`--- ${nom} : ${total} occurrence(s)`);
  for (const x of parFichier) {
    console.log(`      ${x.de}  ->  ${x.vers}   x${x.n}`);
  }

  // Echantillon de contexte, pour relire avant d'appliquer
  if (!APPLIQUER && total) {
    const lignes = avant.split(/\r?\n/);
    let montres = 0;
    for (let i = 0; i < lignes.length && montres < 6; i++) {
      for (const e of ETAPES) {
        if (lignes[i].includes(e.de)) {
          console.log(`      l.${i + 1} : ${contexte(lignes[i], e.de)}`);
          montres++;
          break;
        }
      }
    }
  }

  if (APPLIQUER && apres !== avant) {
    writeFileSync(chemin, apres, 'utf8');
    console.log('      [ecrit]');
  }
  console.log('');
}

console.log(`TOTAL : ${grandTotal} occurrence(s) sur ${FICHIERS.length} fichiers.`);
console.log('');
console.log('Occurrences protegees (vraies dates d\'horloge, non touchees) :');
for (const p of PROTEGES) console.log('  ' + p);
console.log('');
console.log('PERIMETRE HORS PILOTAGE : NON TRAITE ICI.');
console.log('  _drafts/ et tools/ portent aussi des renvois dates. Leur');
console.log('  ventilation par date n a pas ete mesuree (C118).');
