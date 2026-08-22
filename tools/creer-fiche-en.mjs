#!/usr/bin/env node
/**
 * creer-fiche-en.mjs - Genere le squelette EN d'une fiche FR.
 *
 * Le squelette n'est PAS une traduction : c'est la fiche francaise avec les
 * transformations STRUCTURELLES du paragraphe 2 de _drafts/traduction-en-regles.md
 * deja appliquees. La prose reste en francais et se traduit ensuite a la main.
 * Consequence voulue : les trois compteurs (liens, embeds, blocs de code) sont
 * egaux par construction a la generation, et la verification de fin de fiche
 * porte donc sur ce que la TRADUCTION a pu casser, pas sur ce que le script
 * aurait perdu.
 *
 * Ce qui est transforme :
 *   - arborescence         content/X/fiche.md      -> content/en/X/fiche-en.md
 *   - wikilinks            [[gpio|libelle]]        -> [[gpio-en|libelle]]
 *                          [[gpio]]                -> [[gpio-en|Titre FR de gpio]]
 *                          [[conduite/index|x]]    -> [[en/conduite/index|x]]
 *                          [[a\|b]] (pipe echappe) -> echappement preserve
 *   - prerequis            slugs suffixes -en
 *   - draft                force a true (insere s'il est absent)
 *   - aliases              RETIRES (voir plus bas)
 *   - front matter         source_fr + marqueur de source ajoutes
 *
 * Ce qui n'est PAS touche, a l'octet :
 *   - chemins d'embeds ![alt](/ressources/img/...)  -- le pari de l'architecture
 *   - contenu des blocs de code et du code inline
 *   - types de callout [!warning], [!tip], ...
 *   - tags, aa, phases, phase, type
 *
 * Les aliases sont retires et non traduits : sur 25 alias du depot, 18 ne
 * resolvent aucun lien, et un alias francais porte par une fiche EN creerait
 * une resolution croisee entre les deux langues. Le script les signale.
 *
 * Les ancres de wikilink ([[fiche#Section|x]], 5 dans tout le depot) sont
 * conservees telles quelles ET signalees : la section visee portera un titre
 * anglais, donc l'ancre est a reecrire a la main a la traduction. Meme
 * traitement pour les 14 ancres intra-page [texte](#section).
 *
 * Usage :
 *   node tools/creer-fiche-en.mjs conduite/proj/concept.md
 *   node tools/creer-fiche-en.mjs conduite/proj/concept.md --dry
 *   node tools/creer-fiche-en.mjs conduite/proj/concept.md --force
 *   node tools/creer-fiche-en.mjs --recette          (compteurs sur tout content/, n'ecrit rien)
 *   node tools/creer-fiche-en.mjs --controle         (compare chaque fiche EN a sa source FR)
 *   node tools/creer-fiche-en.mjs --recaler <fiche>  (reconsigne le marqueur SANS toucher la traduction)
 *
 * Exit 1 si un compteur diverge, si la cible existe deja sans --force,
 * ou si la source est introuvable.
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, relative, sep, basename, dirname } from 'node:path';
import { createHash } from 'node:crypto';

/* ==================== CONFIGURATION ARBITREE ====================
 * Les deux seuls choix reversibles du script, arbitres par Tim le 22/08.
 * Les changer ici et nulle part ailleurs.
 */

// Marqueur de source ecrit en front matter de la fiche EN. Arbitrage (a).
//   'sha256' : empreinte du contenu du fichier FR. Independant de git, donc
//              juste meme quand la passe C109 n'est pas encore committee.
//   'commit' : hash du dernier commit touchant la source (necessite git).
const MARQUEUR = 'sha256';

// Suffixer ou non les fichiers index.md. Arbitrage (b).
//   false : content/en/conduite/index.md garde son nom, et sert donc l'URL
//           /en/conduite/. Sans risque : aucun wikilink du depot ne vise
//           [[index]] en forme courte, les 37 passent par le chemin complet.
//   true  : content/en/conduite/index-en.md, et Quartz reemet une FolderPage
//           auto-generee sur /en/conduite/.
const SUFFIXER_INDEX = false;

/* ================================================================ */

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'content');
const SUFFIXE = '-en';

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const FORCE = args.includes('--force');
const RECETTE = args.includes('--recette');
const CONTROLE = args.includes('--controle');
const RECALER = args.includes('--recaler');
const cible = args.find((a) => !a.startsWith('--'));

/* ---------- utilitaires ---------- */

function walk(dir, acc = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (e.isFile() && e.name.endsWith('.md')) acc.push(full);
  }
  return acc;
}

function versWeb(absolu) {
  return relative(CONTENT, absolu).split(sep).join('/');
}

function frontMatter(texte) {
  const m = texte.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  return m ? { bloc: m[1], entier: m[0], corps: texte.slice(m[0].length) } : null;
}

function lireTitre(texte) {
  const fm = frontMatter(texte);
  if (!fm) return null;
  const m = fm.bloc.match(/^title:\s*(.+?)\s*$/m);
  if (!m) return null;
  return m[1].replace(/^["']|["']$/g, '');
}

function estIndex(slug) {
  return basename(slug) === 'index';
}

// Applique le suffixe -en a un slug de fiche (dernier segment du chemin).
function suffixer(slug) {
  if (!SUFFIXER_INDEX && estIndex(slug)) return slug;
  return slug + SUFFIXE;
}

/* ---------- index des titres FR (pour les 175 liens sans libelle) ---------- */

const titreParSlug = new Map(); // slug court -> titre
const titreParChemin = new Map(); // chemin sans .md -> titre

for (const f of walk(CONTENT)) {
  const web = versWeb(f);
  if (web.startsWith('en/') || web.startsWith('templates/')) continue;
  const sansExt = web.replace(/\.md$/, '');
  const titre = lireTitre(readFileSync(f, 'utf8'));
  if (!titre) continue;
  titreParChemin.set(sansExt, titre);
  const court = basename(sansExt);
  if (!titreParSlug.has(court)) titreParSlug.set(court, titre);
}

/* ---------- decoupage code / non-code ---------- */

// Renvoie une liste de segments { code: bool, texte }. Seuls les segments
// non-code sont transformes. Les blocs clotures et le code inline sont rendus
// tels quels, a l'octet.
function segmenter(corps) {
  const segments = [];
  const motif = /(^```[\s\S]*?^```[^\n]*$|`[^`\n]*`)/gm;
  let pos = 0;
  let m;
  while ((m = motif.exec(corps)) !== null) {
    if (m.index > pos) segments.push({ code: false, texte: corps.slice(pos, m.index) });
    segments.push({ code: true, texte: m[0] });
    pos = m.index + m[0].length;
  }
  if (pos < corps.length) segments.push({ code: false, texte: corps.slice(pos) });
  return segments;
}

/* ---------- transformation d'un wikilink ---------- */

const WIKILINK = /(?<!!)\[\[([^\]]+)\]\]/g;

function transformerLien(brut, journal) {
  // Separe cible et libelle, en preservant la forme d'echappement du pipe.
  const mPipe = brut.match(/^(.*?)(\\\||\|)([\s\S]*)$/);
  let cibleBrute = mPipe ? mPipe[1] : brut;
  const sepPipe = mPipe ? mPipe[2] : null;
  const libelle = mPipe ? mPipe[3] : null;

  // Les cellules de tableau peuvent laisser un antislash traine en fin de cible.
  const traine = cibleBrute.match(/\\+$/);
  if (traine && !sepPipe) cibleBrute = cibleBrute.slice(0, -traine[0].length);

  const [chemin, ancre] = cibleBrute.split('#');
  if (!chemin) return '[[' + brut + ']]'; // [[#ancre]] purement interne

  let nouveauChemin;
  if (chemin.includes('/')) {
    const segs = chemin.split('/');
    segs[segs.length - 1] = suffixer(segs[segs.length - 1]);
    nouveauChemin = 'en/' + segs.join('/');
  } else {
    nouveauChemin = suffixer(chemin);
  }

  if (ancre !== undefined) {
    journal.ancres.push(cibleBrute);
    nouveauChemin += '#' + ancre;
  }

  let nouveauLibelle = libelle;
  if (nouveauLibelle === null) {
    const titre = titreParChemin.get(chemin) || titreParSlug.get(basename(chemin)) || chemin;
    nouveauLibelle = titre;
    journal.libellesAjoutes.push(chemin + ' -> ' + titre);
  }

  const sep2 = sepPipe || (brut.includes('\\|') ? '\\|' : '|');
  return '[[' + nouveauChemin + sep2 + nouveauLibelle + ']]';
}

/* ---------- transformation du front matter ---------- */

function transformerFrontMatter(bloc, relSource, empreinte, journal) {
  const lignes = bloc.split(/\r?\n/);
  const sortie = [];
  let dansPrerequis = false;
  let dansAliases = false;
  let draftVu = false;

  for (const ligne of lignes) {
    // Fin d'un bloc de liste en cours.
    if ((dansPrerequis || dansAliases) && !/^\s*-\s/.test(ligne)) {
      dansPrerequis = false;
      dansAliases = false;
    }

    if (/^aliases:/.test(ligne)) {
      journal.aliasesRetires.push(ligne.trim());
      dansAliases = /^aliases:\s*$/.test(ligne);
      continue;
    }
    if (dansAliases) {
      journal.aliasesRetires.push(ligne.trim());
      continue;
    }

    if (/^prerequis:/.test(ligne)) {
      // Forme inline : prerequis: [a, b]
      const inline = ligne.match(/^prerequis:\s*\[(.*)\]\s*$/);
      if (inline) {
        const items = inline[1]
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
          .map((s) => suffixer(s));
        sortie.push('prerequis: [' + items.join(', ') + ']');
        continue;
      }
      dansPrerequis = /^prerequis:\s*$/.test(ligne);
      sortie.push(ligne);
      continue;
    }
    if (dansPrerequis && /^\s*-\s/.test(ligne)) {
      const m = ligne.match(/^(\s*-\s*)(.+?)\s*$/);
      sortie.push(m[1] + suffixer(m[2].replace(/^["']|["']$/g, '')));
      journal.prerequisSuffixes += 1;
      continue;
    }

    if (/^draft:/.test(ligne)) {
      sortie.push('draft: true');
      draftVu = true;
      continue;
    }

    sortie.push(ligne);
  }

  if (!draftVu) {
    sortie.push('draft: true');
    journal.draftInsere = true;
  }
  sortie.push('source_fr: ' + relSource);
  sortie.push('source_' + MARQUEUR + ': ' + empreinte);

  return sortie.join('\n');
}

/* ---------- comptage ---------- */

function compter(texte) {
  const sansFm = (frontMatter(texte) || { corps: texte }).corps;
  return {
    liens: (sansFm.match(/(?<!!)\[\[[^\]]+\]\]/g) || []).length,
    embeds: (sansFm.match(/!\[[^\]]*\]\([^)]+\)/g) || []).length,
    code: (sansFm.match(/^```/gm) || []).length / 2,
  };
}

// Les liens markdown [texte](#ancre) visent une section de la page elle-meme.
// Ce ne sont pas des wikilinks, donc le suffixage ne les voit pas - mais le
// titre de la section vise sera traduit, donc l'ancre cassera en silence.
// 14 dans tout le depot, dont 12 dans deux des quatre index.
function ancresIntraPage(corps) {
  const hors = segmenter(corps)
    .filter((s) => !s.code)
    .map((s) => s.texte)
    .join('');
  return hors.match(/(?<!!)\[[^\]]*\]\(#[^)]+\)/g) || [];
}

function empreinteDe(texte) {
  if (MARQUEUR === 'sha256') return createHash('sha256').update(texte, 'utf8').digest('hex');
  // MARQUEUR === 'commit' : necessite git, non utilise par defaut.
  throw new Error("MARQUEUR 'commit' non implemente : voir l'arbitrage du 22/08.");
}

/* ---------- traitement d'une fiche ---------- */

function traiter(rel) {
  const absSource = join(CONTENT, rel.split('/').join(sep));
  if (!existsSync(absSource)) {
    console.error('Source introuvable : content/' + rel);
    process.exit(1);
  }

  const source = readFileSync(absSource, 'utf8');
  const fm = frontMatter(source);
  if (!fm) {
    console.error('Pas de front matter : content/' + rel);
    process.exit(1);
  }

  const journal = {
    ancres: [],
    libellesAjoutes: [],
    aliasesRetires: [],
    prerequisSuffixes: 0,
    draftInsere: false,
  };

  journal.ancresMd = ancresIntraPage(fm.corps);

  const segments = segmenter(fm.corps);
  const corpsEn = segments
    .map((s) => (s.code ? s.texte : s.texte.replace(WIKILINK, (_, brut) => transformerLien(brut, journal))))
    .join('');

  const blocEn = transformerFrontMatter(fm.bloc, rel, empreinteDe(source), journal);
  const sortie = '---\n' + blocEn + '\n---\n' + corpsEn;

  const segs = rel.split('/');
  segs[segs.length - 1] = suffixer(segs[segs.length - 1].replace(/\.md$/, '')) + '.md';
  const relEn = 'en/' + segs.join('/');
  const absEn = join(CONTENT, relEn.split('/').join(sep));

  const avant = compter(source);
  const apres = compter(sortie);
  const ok = avant.liens === apres.liens && avant.embeds === apres.embeds && avant.code === apres.code;

  console.log('=== ' + rel + ' -> content/' + relEn + ' ===');
  console.log('  liens   : ' + avant.liens + ' -> ' + apres.liens + (avant.liens === apres.liens ? '  ok' : '  DIVERGE'));
  console.log('  embeds  : ' + avant.embeds + ' -> ' + apres.embeds + (avant.embeds === apres.embeds ? '  ok' : '  DIVERGE'));
  console.log('  code    : ' + avant.code + ' -> ' + apres.code + (avant.code === apres.code ? '  ok' : '  DIVERGE'));
  console.log('  prerequis suffixes : ' + journal.prerequisSuffixes);
  if (journal.draftInsere) console.log('  draft: true insere (absent de la source)');
  if (journal.libellesAjoutes.length) {
    console.log('  libelles ajoutes (' + journal.libellesAjoutes.length + ') - a traduire :');
    for (const l of journal.libellesAjoutes) console.log('      ' + l);
  }
  if (journal.ancres.length) {
    console.log('  ANCRES DE WIKILINK A REECRIRE A LA MAIN (' + journal.ancres.length + ') :');
    for (const a of journal.ancres) console.log('      [[' + a + ']]');
  }
  if (journal.ancresMd.length) {
    console.log('  ANCRES INTRA-PAGE A REECRIRE APRES TRADUCTION DES TITRES (' + journal.ancresMd.length + ') :');
    for (const a of journal.ancresMd) console.log('      ' + a);
  }
  if (journal.aliasesRetires.length) {
    console.log('  aliases retires (' + journal.aliasesRetires.length + ' ligne(s)) :');
    for (const a of journal.aliasesRetires) console.log('      ' + a);
  }

  if (!ok) {
    console.error('\nCompteurs divergents : rien ecrit.');
    process.exit(1);
  }

  if (DRY) {
    console.log('\n[dry] rien ecrit.');
    return;
  }

  if (existsSync(absEn) && !FORCE) {
    console.error('\nLa cible existe deja. Relancer avec --force pour ecraser.');
    process.exit(1);
  }

  mkdirSync(dirname(absEn), { recursive: true });
  writeFileSync(absEn, sortie, { encoding: 'utf8' });
  console.log('\nEcrit : content/' + relEn + ' (' + Buffer.byteLength(sortie, 'utf8') + ' o)');
}

/* ---------- recette : compteurs sur tout le corpus, sans rien ecrire ---------- */

function recette() {
  const fiches = walk(CONTENT)
    .map(versWeb)
    .filter((w) => !w.startsWith('en/') && !w.startsWith('templates/'));

  let liens = 0;
  let embeds = 0;
  let code = 0;
  let ancres = 0;
  let ancresMd = 0;
  let sansLibelle = 0;
  let alias = 0;
  let divergentes = 0;

  for (const rel of fiches) {
    const source = readFileSync(join(CONTENT, rel.split('/').join(sep)), 'utf8');
    const fm = frontMatter(source);
    if (!fm) continue;
    const journal = { ancres: [], libellesAjoutes: [], aliasesRetires: [], prerequisSuffixes: 0, draftInsere: false };
    journal.ancresMd = ancresIntraPage(fm.corps);
    ancresMd += journal.ancresMd.length;
    const corpsEn = segmenter(fm.corps)
      .map((s) => (s.code ? s.texte : s.texte.replace(WIKILINK, (_, brut) => transformerLien(brut, journal))))
      .join('');
    const blocEn = transformerFrontMatter(fm.bloc, rel, empreinteDe(source), journal);
    const sortie = '---\n' + blocEn + '\n---\n' + corpsEn;
    const a = compter(source);
    const b = compter(sortie);
    if (a.liens !== b.liens || a.embeds !== b.embeds || a.code !== b.code) {
      divergentes += 1;
      console.log('  DIVERGE : ' + rel);
    }
    liens += a.liens;
    embeds += a.embeds;
    code += a.code;
    ancres += journal.ancres.length;
    sansLibelle += journal.libellesAjoutes.length;
    alias += journal.aliasesRetires.length ? 1 : 0;
  }

  console.log('=== RECETTE (aucune ecriture) ===');
  console.log('  fiches sources      : ' + fiches.length);
  console.log('  wikilinks           : ' + liens);
  console.log('  embeds              : ' + embeds);
  console.log('  blocs de code       : ' + code);
  console.log('  liens sans libelle  : ' + sansLibelle + '  (libelle rempli par le titre FR)');
  console.log('  ancres de wikilink  : ' + ancres);
  console.log('  ancres intra-page   : ' + ancresMd);
  console.log('  fiches a aliases    : ' + alias);
  console.log('  fiches divergentes  : ' + divergentes);
  process.exit(divergentes ? 1 : 0);
}

/* ---------- controle de fin de fiche : les trois compteurs FR / EN ---------- */

// Le paragraphe 2 des regles impose que la fiche EN porte exactement le meme
// nombre de wikilinks, d'embeds et de blocs de code que sa source FR. A la
// generation l'egalite est vraie par construction ; ce controle porte donc sur
// ce que la TRADUCTION a pu casser - un lien perdu en reformulant, un embed
// oublie, une cloture de bloc de code avalee.
function controle() {
  const fichesEn = walk(join(CONTENT, 'en')).map(versWeb);
  if (!fichesEn.length) {
    console.log('Aucune fiche EN a controler.');
    return;
  }

  let divergentes = 0;
  console.log('=== CONTROLE DES TROIS COMPTEURS ===');

  for (const relEn of fichesEn.sort()) {
    const texteEn = readFileSync(join(CONTENT, relEn.split('/').join(sep)), 'utf8');
    const fmEn = frontMatter(texteEn);
    const mSource = fmEn && fmEn.bloc.match(/^source_fr:\s*(.+?)\s*$/m);
    if (!mSource) {
      console.log('  [?] ' + relEn + ' : pas de source_fr');
      divergentes += 1;
      continue;
    }
    const relFr = mSource[1];
    const absFr = join(CONTENT, relFr.split('/').join(sep));
    if (!existsSync(absFr)) {
      console.log('  [?] ' + relEn + ' : source introuvable (' + relFr + ')');
      divergentes += 1;
      continue;
    }

    const fr = compter(readFileSync(absFr, 'utf8'));
    const en = compter(texteEn);
    const ok = fr.liens === en.liens && fr.embeds === en.embeds && fr.code === en.code;
    if (ok) {
      console.log('  [ok] ' + relEn + '   liens ' + fr.liens + ', embeds ' + fr.embeds + ', code ' + fr.code);
    } else {
      divergentes += 1;
      console.log('  [!]  ' + relEn + '   <- ' + relFr);
      console.log('       liens  FR ' + fr.liens + ' / EN ' + en.liens + (fr.liens === en.liens ? '' : '   DIVERGE'));
      console.log('       embeds FR ' + fr.embeds + ' / EN ' + en.embeds + (fr.embeds === en.embeds ? '' : '   DIVERGE'));
      console.log('       code   FR ' + fr.code + ' / EN ' + en.code + (fr.code === en.code ? '' : '   DIVERGE'));
    }
  }

  console.log('');
  console.log(fichesEn.length + ' fiche(s) controlee(s), ' + divergentes + ' divergente(s).');
  process.exit(divergentes ? 1 : 0);
}

/* ---------- recalage du marqueur apres relecture ---------- */

// Quand une fiche FR deja traduite est retouchee, derive-traduction la signale.
// Une fois la retouche reportee A LA MAIN dans la fiche EN, il faut reconsigner
// le marqueur - or un sha256 ne s'ecrit pas a la main, et regenerer le squelette
// ecraserait la traduction. D'ou cette commande, qui ne touche QUE la ligne
// source_sha256 et laisse le reste du fichier a l'octet.
//
// A n'utiliser qu'apres avoir relu la fiche EN contre sa source : recaler sans
// relire fait disparaitre la derive de l'ecran sans l'avoir traitee, ce qui est
// pire que de la laisser affichee.
function recaler(rel) {
  const relEn = rel.startsWith('en/') ? rel : 'en/' + rel;
  const absEn = join(CONTENT, relEn.split('/').join(sep));
  if (!existsSync(absEn)) {
    console.error('Fiche EN introuvable : content/' + relEn);
    process.exit(1);
  }

  const texteEn = readFileSync(absEn, 'utf8');
  const fm = frontMatter(texteEn);
  const mSource = fm && fm.bloc.match(/^source_fr:\s*(.+?)\s*$/m);
  if (!mSource) {
    console.error('Pas de source_fr dans content/' + relEn);
    process.exit(1);
  }

  const relFr = mSource[1];
  const absFr = join(CONTENT, relFr.split('/').join(sep));
  if (!existsSync(absFr)) {
    console.error('Source FR introuvable : content/' + relFr);
    process.exit(1);
  }

  const ancien = (fm.bloc.match(/^source_sha256:\s*(.+?)\s*$/m) || [, '(absent)'])[1];
  const nouveau = empreinteDe(readFileSync(absFr, 'utf8'));

  if (ancien === nouveau) {
    console.log('Deja a jour : content/' + relEn);
    return;
  }

  const fr = compter(readFileSync(absFr, 'utf8'));
  const en = compter(texteEn);
  if (fr.liens !== en.liens || fr.embeds !== en.embeds || fr.code !== en.code) {
    console.error('Les trois compteurs divergent - la retouche FR n a pas ete reportee en EN :');
    console.error('  liens  FR ' + fr.liens + ' / EN ' + en.liens);
    console.error('  embeds FR ' + fr.embeds + ' / EN ' + en.embeds);
    console.error('  code   FR ' + fr.code + ' / EN ' + en.code);
    console.error('Recalage refuse.');
    process.exit(1);
  }

  let sortie;
  if (/^source_sha256:/m.test(fm.bloc)) {
    sortie = texteEn.replace(/^source_sha256:.*$/m, 'source_sha256: ' + nouveau);
  } else {
    sortie = texteEn.replace(fm.entier, '---\n' + fm.bloc + '\nsource_sha256: ' + nouveau + '\n---\n');
  }

  if (DRY) {
    console.log('[dry] ' + relEn + ' : ' + ancien.slice(0, 12) + ' -> ' + nouveau.slice(0, 12));
    return;
  }

  writeFileSync(absEn, sortie, { encoding: 'utf8' });
  console.log('Recale : content/' + relEn);
  console.log('  ' + ancien.slice(0, 12) + ' -> ' + nouveau.slice(0, 12));
}

/* ---------- point d'entree ---------- */

if (RECETTE) {
  recette();
} else if (CONTROLE) {
  controle();
} else if (RECALER) {
  if (!cible) {
    console.error('Usage : node tools/creer-fiche-en.mjs --recaler en/conduite/index.md');
    process.exit(1);
  }
  recaler(cible.replace(/^content\//, '').split(sep).join('/'));
} else if (!cible) {
  console.error('Usage : node tools/creer-fiche-en.mjs <chemin/relatif/a/content.md> [--dry] [--force]');
  console.error('        node tools/creer-fiche-en.mjs --recette');
  console.error('        node tools/creer-fiche-en.mjs --controle');
  console.error('        node tools/creer-fiche-en.mjs --recaler <fiche EN>');
  process.exit(1);
} else {
  traiter(cible.replace(/^content\//, '').split(sep).join('/'));
}
