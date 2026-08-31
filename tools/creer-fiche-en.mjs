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
 *   - draft                force a la valeur de DRAFT_EN (insere s'il est absent)
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
 *       - les trois compteurs (liens, embeds, blocs de code)
 *       - et les wikilinks NON SUFFIXES, qui pointent vers la fiche francaise
 *         sans qu'aucun compteur ne s'en apercoive (defaut du 23/08)
 *   node tools/creer-fiche-en.mjs --recaler <fiche>  (reconsigne le marqueur SANS toucher la traduction)
 *   node tools/creer-fiche-en.mjs --corps <fiche EN> <fichier de corps>
 *       - REMPLACE LE CORPS et recopie le front matter A L OCTET.
 *       - Ne pas ecrire de front matter est la seule facon de ne pas en
 *         inventer un (incident du 30/08 seance 2 : empreinte composee de
 *         tete, bien formee, rangee en DERIVE au lieu d etre signalee).
 *       - Garde centrale : un fichier de corps qui OUVRE PAR UN FRONT
 *         MATTER est refuse - c est le geste fautif lui-meme.
 *   node tools/creer-fiche-en.mjs --style [fiche...]  (typographie EN + ponctuation C109 ; tout content/en/ si aucune cible)
 *       - espace francaise devant ; : ! ? %, virgule decimale : VERDICT mecanique
 *       - tiret d'incise et point-virgule de prose : CANDIDATS a lire, le
 *         critere du verbe conjugue (amendement C109 du 23/08) ne se decide
 *         qu'a la lecture ; le tiret demi-cadratin encadre de chiffres est un
 *         intervalle numerique et sort en hors-perimetre (24/08)
 *       - C109 comparees FR / EN : une occurrence CREEE par la traduction
 *         n'a jamais ete arbitree en francais
 *       - les COMMENTAIRES HTML sont masques comme le code (25/08 suite 5) :
 *         leur ponctuation et leur typographie francaises ne sont pas de la
 *         prose publiee, et les faire remonter rendait le verdict illisible
 *   node tools/creer-fiche-en.mjs --libelles         (libelle de wikilink ne recoupant pas le title: de sa cible)
 *   node tools/creer-fiche-en.mjs --alt             (alt d embed EN compare a l alt FR de meme rang)
 *       - QUATRIEME TAMIS. --style range l alt en hors-perimetre pour les
 *         candidats C109 et n y fait mordre que la typographie francaise ;
 *         audit-medias.mjs capture l alt mais n audite que le CHEMIN ;
 *         --controle ne compare que des NOMBRES d embeds. Un alt francais
 *         a typographie propre ne declenchait donc rien (29/08 suite 5).
 *       - trois verdicts MECANIQUES : IDENTIQUE (alt EN = alt FR a l octet),
 *         VIDE, MOT FR (lettre accentuee ou mot-outil d une liste nommee)
 *       - exemptions NOMMEES, une par fiche, avec leur motif ecrit
 *   node tools/creer-fiche-en.mjs --front            (anneau 1 depuis les quatre index : perimetre et volume du lot)
 *       - resolution par chemin complet puis par nom de fichier UNIQUE ; un
 *         nom porte par plusieurs fiches sort en AMBIGU au lieu d etre ecrase
 *         sur une cible unique (defaut de mesure du 24/08)
 *   node tools/creer-fiche-en.mjs --anneau <N>   (anneau de rang N, plus la DETTE du front courant)
 *       - generalisation de --front, meme regle de resolution a la ligne pres.
 *         --anneau 1 doit rendre le meme chiffre BRUT que --front : le banc de
 *         non-regression du mode est la mesure deja publiee, pas un banc
 *         reconstitue (25/08 suite 6)
 *       - BRUT = cibles atteintes depuis l anneau precedent ; NET = BRUT moins
 *         les anneaux 0..N-1. Le lot se dimensionne sur le NET
 *       - la DETTE (liens rouges depuis les fiches DEJA TRADUITES) s imprime a
 *         cote et ne s appelle jamais « anneau » : c est un etat, pas un
 *         perimetre, et il grossit a chaque fiche traduite
 *       - sortie 0 meme en presence de cibles absentes : cote anneau 2 les
 *         liens rouges francais sont attendus et ne sont pas un echec de mode
 *
 * Exit 1 si un compteur diverge, si la cible existe deja sans --force,
 * ou si la source est introuvable.
 */

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, relative, sep, basename, dirname } from 'node:path';
import { createHash } from 'node:crypto';
// Le comptage de mots vient du script ou vit la regle C110, jamais d'une
// reimplementation locale : deux implementations justes sous la meme regle se
// lisent comme un chiffre juste et un chiffre faux (amendement du 23/08 suite 4).
import { compterMots } from './compter-mots.mjs';

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

// Valeur de draft ecrite dans la fiche EN generee. Arbitrage Tim du 22/08 (suite 2).
//   'false' : la fiche EN est publiee des sa creation. Le wiki n'est connu que
//             de son auteur, et le clic-test en ligne vaut mieux qu'un aller-retour
//             build --serve a chaque fiche.
//   'true'  : la fiche EN reste masquee jusqu'a la publication de son lot.
// A rebasculer sur 'true' quand le corpus EN depasse la vingtaine de fiches :
// au-dela, les doublons anglais commencent a peser sur la bande top-3 de la
// recherche francaise et faussent la mesure d'indexation symptomatique.
const DRAFT_EN = 'false';
const LANG_EN = 'en';

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
const CORPS = args.includes('--corps');
const STYLE = args.includes('--style');
const LIBELLES = args.includes('--libelles');
const ALT = args.includes('--alt');
const FRONT = args.includes('--front');
const ANNEAU = args.includes('--anneau');
// Rang demande. Defaut 1, qui reproduit --front : le banc de non-regression du
// mode est le chiffre deja mesure, pas un banc reconstitue.
const RANG = (() => {
  const i = args.indexOf('--anneau');
  const n = Number.parseInt(i >= 0 ? args[i + 1] : '', 10);
  return Number.isFinite(n) && n >= 1 ? n : 1;
})();
const cible = args.find((a) => !a.startsWith('--'));
const cibles = args.filter((a) => !a.startsWith('--'));

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

/* ---------- index des ALIAS FR -> fiche porteuse ---------- */

// UN WIKILINK QUI VISE UN ALIAS NE PEUT PAS ETRE SUFFIXE VERS L ALIAS.
// Les aliases sont RETIRES des fiches EN (voir transformerFrontMatter), au
// motif d eviter une resolution croisee FR/EN. Consequence mesuree le 29/08
// (suite 5) : [[FC]] devenait [[FC-en]], un slug qui n aura JAMAIS de fiche -
// donc un lien rouge que la traduction de la cible ne repare pas. Six cibles
// alias, 69 occurrences cote FR, 50 deja ecrites cote EN.
// Arbitrage Tim (c) du 29/08 (suite 5) : le generateur suffixe vers la FICHE
// PORTEUSE. [[FC]] rend [[fonction-en|FC]] - rouge aujourd hui, mais VERT le
// jour ou fonction.md sera traduite.
//
// La lecture des aliases est une COPIE VERBATIM de readAliases
// (audit-wikilinks.mjs l.64-89), l outil qui resout deja ces liens
// correctement : deux implementations justes sous la meme phrase divergent.
function lireAliases(texte) {
  const fm = texte.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return [];
  const bloc = fm[1];
  const inline = bloc.match(/^aliases:\s*\[(.*)\]\s*$/m);
  if (inline) {
    return inline[1].split(',').map((x) => x.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  }
  const liste = bloc.match(/^aliases:\s*\r?\n((?:\s*-\s*.+\r?\n?)+)/m);
  if (liste) {
    return liste[1]
      .split(/\r?\n/)
      .map((l) => l.replace(/^\s*-\s*/, '').trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  return [];
}

const porteuseParAlias = new Map(); // alias -> slug court de la fiche porteuse

for (const f of walk(CONTENT)) {
  const web = versWeb(f);
  if (web.startsWith('en/') || web.startsWith('templates/')) continue;
  const court = basename(web.replace(/\.md$/, ''));
  for (const a of lireAliases(readFileSync(f, 'utf8'))) {
    // Un alias qui porte le nom d une fiche reelle n en est pas un ici : la
    // fiche gagne, et le suffixage normal s applique.
    if (!porteuseParAlias.has(a)) porteuseParAlias.set(a, court);
  }
}

/* ---------- decoupage code / non-code ---------- */

// UN BLOC CLOTURE PEUT VIVRE A L'INTERIEUR D'UN CHEVRON DE CITATION, et c'est
// la derniere zone que le masquage ne franchissait pas, apres le backtick de
// libelle (23/08) et le commentaire HTML (25/08 suite 5).
//
// Un seul defaut, DEUX symptomes que le chantier avait consignes separement
// (24/08 suite 3, recoupes quatre series plus tard) :
//   - EN AVAL, la ponctuation du code remonte en candidats C109, en francais
//     comme en anglais puisque le code ne change pas - faux positifs permanents
//     (les deux `;` du bloc cpp de cpp-logs) ;
//   - EN AMONT, le bloc n'est pas compte par le troisieme compteur, qui rend
//     SEPT pour huit sur cpp-logs. Un controle qui passe au vert en regardant
//     sept blocs sur huit est pire qu'un faux positif : il ment.
//
// Le correctif est le meme geste pour les deux, et il ne retire rien du texte -
// il rend le prefixe de citation FACULTATIF devant les deux clotures. Les
// offsets sont donc intacts, ce qui compte pour --style qui rapporte des
// numeros de ligne et des colonnes.
//
// Perimetre mesure AVANT d'ecrire cette ligne, comme le veut la lecon du 24/08
// (suite 2) et C118 : 68 blocs, 136 clotures, 34 fiches, TOUTES dans
// embarque/mcu/. L'anneau 2 en porte 54 sur 68 et 27 sur 34 (25/08 suite 6),
// ce qui a rendu le correctif bloquant sur mesure et non sur anticipation.
//
// ATTENTION, DISCONTINUITE DE MESURE, comme les embeds 395 -> 397 du 25/08 :
// toute valeur de BLOCS DE CODE anterieure a ce correctif est sous l'ancienne
// regle et ne se compare pas. L'egalite FR/EN, elle, reste vraie - le compteur
// compte mieux des DEUX cotes a la fois.
const CITE = '[ \\t]*(?:>[ \\t]*)*';
const BLOC_CLOTURE = '^' + CITE + '```[\\s\\S]*?^' + CITE + '```[^\\n]*$';

// Renvoie une liste de segments { code: bool, texte }. Seuls les segments
// non-code sont transformes. Les blocs clotures et le code inline sont rendus
// tels quels, a l'octet.
//
// Le WIKILINK est segmente AVANT le code inline (defaut mesure le 23/08,
// 29 occurrences sur 22 fiches). Sans cela, un libelle contenant du code
// inline - [[cpp-variables|Les variables `int`]] - est coupe en trois, le
// segment non-code ne porte plus que "[[cpp-variables|Les variables " sans
// crochets fermants, et le lien ECHAPPE AU SUFFIXAGE. Aucun compteur ne le
// voit : le lien reste present, bien forme, et sa cible francaise existe.
//
// Le cas symetrique reste correct sans traitement particulier : dans
// `[[notion]]` (code inline contenant un wikilink), le backtick ouvre AVANT
// le crochet, donc l'alternative de code inline gagne par position et protege
// le lien du suffixage. C'est le cas de content/index.md.
function segmenter(corps) {
  const segments = [];
  const motif = new RegExp('(' + BLOC_CLOTURE + ')|((?<!!)\\[\\[[^\\]]+\\]\\])|(`[^`\\n]*`)', 'gm');
  let pos = 0;
  let m;
  while ((m = motif.exec(corps)) !== null) {
    if (m.index > pos) segments.push({ code: false, texte: corps.slice(pos, m.index) });
    // m[2] renseigne = wikilink : segment a transformer, donc code: false.
    segments.push({ code: m[2] === undefined, texte: m[0] });
    pos = m.index + m[0].length;
  }
  if (pos < corps.length) segments.push({ code: false, texte: corps.slice(pos) });
  return segments;
}

/* ---------- transformation d'un wikilink ---------- */

const WIKILINK = /(?<!!)\[\[([^\]]+)\]\]/g;

// Un texte alternatif peut contenir des crochets, et c'est frequent : la
// syntaxe d'une garde-condition de machine a etats s'ecrit « evenement
// [garde] / action » et se decrit telle quelle dans l'alt. Le motif precedent,
// [^\]]*, s'arretait au PREMIER crochet fermant, donc l'embed devenait
// invisible. Mesure du 24/08 (suite) : 2 comptes pour 4 images sur
// machine-a-etats, ecart de 4 sur tout content/, porte par cette seule paire.
// Le defaut ne se voyait pas parce que l'EGALITE FR/EN restait vraie : le
// controle passait au vert en ne regardant que la moitie des embeds de la
// fiche. Un niveau d'imbrication suffit au corpus.
const EMBED = /!\[(?:[^\[\]]|\[[^\[\]]*\])*\]\([^)]+\)/g;
const EMBED_ALT = /!\[(?:[^\[\]]|\[[^\[\]]*\])*\]/g;

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

  // ARBITRAGE (c) DU 29/08 (suite 5) : une cible qui est un ALIAS et non une
  // fiche se suffixe vers sa PORTEUSE. La fiche gagne toujours sur l alias -
  // titreParSlug ne porte que des fiches reelles.
  let cheminCible = chemin;
  let aliasVise = null;
  if (
    !chemin.includes('/') &&
    !titreParSlug.has(chemin) &&
    porteuseParAlias.has(chemin)
  ) {
    aliasVise = chemin;
    cheminCible = porteuseParAlias.get(chemin);
    journal.aliasResolus.push(chemin + ' -> ' + cheminCible);
  }

  let nouveauChemin;
  if (cheminCible.includes('/')) {
    const segs = cheminCible.split('/');
    segs[segs.length - 1] = suffixer(segs[segs.length - 1]);
    nouveauChemin = 'en/' + segs.join('/');
  } else {
    nouveauChemin = suffixer(cheminCible);
  }

  if (ancre !== undefined) {
    journal.ancres.push(cibleBrute);
    nouveauChemin += '#' + ancre;
  }

  let nouveauLibelle = libelle;
  if (nouveauLibelle === null) {
    // Sur un alias, le libelle par defaut est L ALIAS et non le titre de la
    // porteuse : le corpus ecrit [[FC]] parce que FC est la designation qui
    // porte le sens a cet endroit. Y substituer "Fonction" perdrait ce que le
    // lien disait, et C109 n a rien a arbitrer sur un sigle.
    const titre = aliasVise
      || titreParChemin.get(chemin)
      || titreParSlug.get(basename(chemin))
      || chemin;
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


    // B3 (31/08) : la fiche EN declare sa langue, au meme rang que la passe
    // B2 la pose sur les 242 fiches deja ecrites - juste apres title:. Sans
    // ce champ, renderPage retombe sur cfg.locale et sort <html lang="fr">
    // sur une page anglaise.
    if (/^title:/.test(ligne)) {
      sortie.push(ligne);
      sortie.push('lang: ' + LANG_EN);
      continue;
    }

    if (/^draft:/.test(ligne)) {
      sortie.push('draft: ' + DRAFT_EN);
      draftVu = true;
      continue;
    }

    sortie.push(ligne);
  }

  if (!draftVu) {
    sortie.push('draft: ' + DRAFT_EN);
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
    embeds: (sansFm.match(EMBED) || []).length,
    // La cloture peut porter un prefixe de citation : sans le CITE, un bloc
    // loge dans un callout n'est pas compte du tout (25/08 suite 6).
    code: (sansFm.match(new RegExp('^' + CITE + '```', 'gm')) || []).length / 2,
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

// Dans une fiche EN, toute cible de wikilink doit porter le suffixe -en, ou
// etre un index (non suffixe par arbitrage du 22/08). Un lien nu n'est ni mort
// ni mal forme et sa cible existe : il renvoie simplement le lecteur anglophone
// vers la fiche FRANCAISE. Les trois compteurs le laissent donc passer, et
// c'est exactement le defaut du 23/08. Ce controle-ci le rend mesurable.
function liensNonSuffixes(texteEn) {
  const corps = (frontMatter(texteEn) || { corps: texteEn }).corps;
  const hors = segmenter(corps)
    .filter((s) => !s.code)
    .map((s) => s.texte)
    .join('');
  const nus = [];
  for (const m of hors.matchAll(/(?<!!)\[\[([^\]]+)\]\]/g)) {
    const cible = m[1]
      .split(/\\\||\|/)[0]
      .split('#')[0]
      .replace(/\\+$/, '')
      .trim();
    if (!cible) continue; // [[#ancre]] purement interne
    const dernier = cible.split('/').pop();
    if (dernier.endsWith(SUFFIXE) || dernier === 'index') continue;
    nus.push(m[1]);
  }
  return nus;
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
    aliasResolus: [],
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
  if (journal.draftInsere) console.log('  draft: ' + DRAFT_EN + ' insere (champ absent de la source)');
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
  if (journal.aliasResolus.length) {
    console.log('  alias resolus vers leur porteuse (' + journal.aliasResolus.length + ') :');
    const parAlias = new Map();
    for (const a of journal.aliasResolus) parAlias.set(a, (parAlias.get(a) || 0) + 1);
    for (const [a, n] of parAlias) console.log('      ' + a + '   x' + n);
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
    const journal = { ancres: [], libellesAjoutes: [], aliasesRetires: [], aliasResolus: [], prerequisSuffixes: 0, draftInsere: false };
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
  let fichesNues = 0;
  let liensNus = 0;
  console.log('=== CONTROLE DES TROIS COMPTEURS ===');

  // C2 du chantier IA (31/08) : une fiche FR qui porte `bilingue: true` porte
  // les deux langues dans un seul fichier et n aura jamais de jumelle EN.
  // --controle n itere que sur content/en : l exemption ne peut pas y mordre,
  // et cette ligne l annonce pour que l absence se lise comme une exemption
  // et non comme un oubli.
  const bilingues = walk(CONTENT)
    .map(versWeb)
    .filter((w) => !w.startsWith('en/') && !w.startsWith('templates/'))
    .filter((w) => /^bilingue:\s*true\s*$/m.test(readFileSync(join(CONTENT, w.split('/').join(sep)), 'utf8')));
  console.log('Exemption bilingue: true : ' + bilingues.length + ' fiche(s) FR hors appariement.');

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

    const nus = liensNonSuffixes(texteEn);
    if (nus.length) {
      fichesNues += 1;
      liensNus += nus.length;
      console.log('  [nu]  ' + relEn + '   ' + nus.length + ' lien(s) vers une fiche FR :');
      for (const n of nus) console.log('       [[' + n + ']]');
    }
  }

  console.log('');
  console.log(fichesEn.length + ' fiche(s) controlee(s), ' + divergentes + ' divergente(s).');
  console.log('Liens non suffixes : ' + liensNus + ' sur ' + fichesNues + ' fiche(s).');
  process.exit(divergentes || liensNus ? 1 : 0);
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

// --corps : REMPLACE LE CORPS D UNE FICHE EN ET RECOPIE SON FRONT MATTER A
// L OCTET.
//
// POURQUOI CE MODE EXISTE
// -----------------------
// Ne pas ecrire de front matter est la seule facon de ne pas en inventer un.
// Le 30/08 (seance 2), la redaction de bom-en a reecrit le fichier ENTIER et y
// a compose un source_sha256 de 64 hexadecimaux. derive-traduction l a range en
// DERIVE - le statut des empreintes PERIMEES - parce que MARQUE INVALIDE ne
// juge que la FORME du marqueur, et que la forme etait valide. AUCUN statut ne
// distingue une empreinte inventee bien formee d une empreinte perimee.
//
// La question cesse de se poser des que le corps s ecrit sans le front matter :
// le seul chemin vers source_sha256 reste la generation, et le seul chemin vers
// sa modification reste --recaler, qui est deja garde. C est la resolution de
// second rang du 29/08 (suite 8) - une regle qui contraint un geste mecanique
// se loge dans le code qui execute ce geste - appliquee a la regle d usage du
// 29/08 (suite 7), violee deux fois en deux semaines.
//
// CINQ GARDES, toutes validees AVANT le premier octet ecrit. La troisieme est
// la garde centrale : un fichier de corps qui OUVRE PAR UN FRONT MATTER est le
// geste fautif lui-meme, et il est refuse.
function corpsSeul(rel, cheminCorps) {
  const relEn = rel.startsWith('en/') ? rel : 'en/' + rel;
  const absEn = join(CONTENT, relEn.split('/').join(sep));
  const defauts = [];

  console.log('=== REMPLACEMENT DE CORPS ' + (DRY ? '(CONTROLE SEUL)' : '(ECRITURE)') + ' ===');
  console.log('  fiche EN : content/' + relEn);
  console.log('  corps    : ' + cheminCorps);
  console.log('');

  // Garde 1 : la fiche EN existe et porte un front matter.
  if (!existsSync(absEn)) {
    console.log('  GARDE 1  fiche EN introuvable : content/' + relEn);
    console.log('');
    console.log('  REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.');
    process.exit(1);
  }
  const texteEn = readFileSync(absEn, 'utf8');
  const fm = frontMatter(texteEn);
  if (!fm) {
    console.log('  GARDE 1  la fiche EN ne porte pas de front matter');
    defauts.push(1);
  }

  // Garde 2 : elle porte un source_fr - sinon ce n est pas une fiche traduite.
  const mSource = fm && fm.bloc.match(/^source_fr:\s*(.+?)\s*$/m);
  if (fm && !mSource) {
    console.log('  GARDE 2  pas de source_fr : ce n est pas une fiche de traduction');
    defauts.push(2);
  }

  // Garde 3 : LA GARDE CENTRALE. Un corps ne porte jamais de front matter.
  if (!existsSync(cheminCorps)) {
    console.log('  GARDE 3  fichier de corps introuvable : ' + cheminCorps);
    defauts.push(3);
  }
  let nouveau = null;
  if (existsSync(cheminCorps)) {
    nouveau = readFileSync(cheminCorps, 'utf8');
    if (/^---\r?\n/.test(nouveau)) {
      console.log('  GARDE 3  le fichier de corps OUVRE PAR UN FRONT MATTER.');
      console.log('           C est le geste que ce mode existe pour refuser :');
      console.log('           un corps ne porte pas de front matter, sinon il en');
      console.log('           reecrit un, et une empreinte s y invente.');
      defauts.push(3);
    }
  }

  // NORMALISATION DE LA LIGNE BLANCHE - arbitrage Tim du 30/08, apres le lot 10.
  //
  // frontMatter() capture jusqu au `---` de fermeture ET son saut de ligne : la
  // LIGNE BLANCHE qui separe le front matter du corps appartient donc au CORPS.
  // Un fichier de corps qui ouvre par sa premiere phrase produit un fichier ou
  // le texte est COLLE au `---`, forme qu aucune des 227 fiches du corpus ne
  // porte. Defaut du lot 10, trouve en relisant le fichier ecrit : ni
  // --controle (liens, embeds, blocs), ni derive-traduction (empreinte), ni
  // --style (ponctuation) ne le voient.
  //
  // Le mode la POSE au lieu de la refuser. Question posee a Tim en deux voies -
  // poser ou refuser - et tranchee : --corps doit poser la ligne blanche.
  // Troisieme fois qu une regle de geste de ce chantier passe de la prose au
  // code, et PREMIERE fois qu elle y passe par une normalisation : les deux
  // precedentes (MARQUE INVALIDE, garde 3 ci-dessus) refusent.
  //
  // IDEMPOTENT, et c est ce qui garde le test de non-regression : un corps qui
  // commence deja par un saut de ligne n est pas touche, donc reecrire une
  // fiche avec son propre corps rend un fichier identique a l octet.
  //
  // PLACE APRES LA GARDE 3, et ce n est pas cosmetique : posee AVANT, elle
  // prefixerait un saut de ligne au `---` d un corps fautif et la garde
  // centrale ne mordrait plus. Le test negatif du bloc 87 est construit pour
  // attraper exactement cette erreur de placement.
  //
  // ET ELLE NE S APPLIQUE PAS A UN CORPS DEJA REFUSE : normaliser ce qui ne
  // sera jamais ecrit ferait imprimer une ligne qui dit le contraire de ce que
  // le mode fait. Mesure du bloc 87 : sans ce test, le test negatif imprimait
  // "ligne blanche POSEE" sur un corps que la garde 3 venait de refuser.
  let lignePosee = false;
  const corpsRecevable = nouveau !== null && !defauts.includes(3);
  if (corpsRecevable && nouveau.length > 0 && !/^\r?\n/.test(nouveau)) {
    nouveau = (texteEn.includes('\r\n') ? '\r\n' : '\n') + nouveau;
    lignePosee = true;
  }
  if (corpsRecevable) {
    console.log('  ligne blanche apres le front matter : ' +
      (lignePosee ? 'POSEE (le corps ouvrait par du texte)' : 'deja presente'));
  }

  // Garde 4 : la source FR existe.
  const relFr = mSource ? mSource[1] : null;
  const absFr = relFr ? join(CONTENT, relFr.split('/').join(sep)) : null;
  if (relFr && !existsSync(absFr)) {
    console.log('  GARDE 4  source FR introuvable : content/' + relFr);
    defauts.push(4);
  }

  // Garde 5 : les trois compteurs, mesures sur le fichier ASSEMBLE.
  let assemble = null;
  if (fm && nouveau !== null && relFr && existsSync(absFr)) {
    assemble = fm.entier + nouveau;
    const fr = compter(readFileSync(absFr, 'utf8'));
    const en = compter(assemble);
    console.log('  liens   : ' + fr.liens + ' -> ' + en.liens + (fr.liens === en.liens ? '  ok' : '  DIVERGE'));
    console.log('  embeds  : ' + fr.embeds + ' -> ' + en.embeds + (fr.embeds === en.embeds ? '  ok' : '  DIVERGE'));
    console.log('  code    : ' + fr.code + ' -> ' + en.code + (fr.code === en.code ? '  ok' : '  DIVERGE'));
    if (fr.liens !== en.liens || fr.embeds !== en.embeds || fr.code !== en.code) {
      console.log('  GARDE 5  les trois compteurs ne se reportent pas un pour un');
      defauts.push(5);
    }
  }

  // L INVARIANT DU MODE, publie avant d ecrire : le front matter ne bouge pas,
  // donc l empreinte non plus. Il se lit, il ne se suppose pas.
  if (fm) {
    const avant = (fm.bloc.match(/^source_sha256:\s*(.+?)\s*$/m) || [, '(absent)'])[1];
    const fmApres = assemble ? frontMatter(assemble) : null;
    const apres = fmApres
      ? ((fmApres.bloc.match(/^source_sha256:\s*(.+?)\s*$/m) || [, '(absent)'])[1])
      : avant;
    console.log('');
    console.log('  source_sha256 avant : ' + avant);
    console.log('  source_sha256 apres : ' + apres);
    console.log('  front matter identique a l octet : ' +
      (fmApres && fmApres.entier === fm.entier ? 'oui' : (assemble ? 'NON' : '(non assemble)')));
    if (assemble && (avant !== apres || fmApres.entier !== fm.entier)) {
      console.log('  INVARIANT CASSE : le front matter a bouge');
      defauts.push(0);
    }
  }

  console.log('');
  if (defauts.length) {
    console.log('  REFUS : ' + defauts.length + ' defaut(s). AUCUN FICHIER ECRIT.');
    process.exit(1);
  }
  if (DRY) {
    console.log('  CONTROLE SEUL : corps pret, 0 fichier ecrit.');
    return;
  }
  writeFileSync(absEn, assemble, { encoding: 'utf8' });
  console.log('  ECRIT  content/' + relEn + '   (front matter recopie a l octet)');
}

/* ---------- masquage des zones que le lecteur ne voit pas ---------- */

// Remplace par une sentinelle de MEME LONGUEUR, en preservant les sauts de
// ligne. Les numeros de ligne et les colonnes restent donc exacts, et le
// controle de style ne voit que de la prose publiee.
//
// La sentinelle n'est PAS une espace : masquer avec des espaces faisait lire
// `return`: comme une espace francaise devant deux-points, soit deux faux
// positifs sur six au premier lancement.
//
// TROIS zones, et la troisieme est arrivee la derniere. Les blocs clotures et
// le code inline etaient la des l'origine. Le COMMENTAIRE HTML a ete ajoute le
// 25/08 (suite 5), apres avoir ete consigne le 25/08 (suite 4) comme la
// troisieme zone que le masquage ne franchissait pas, apres le backtick de
// libelle (23/08) et le chevron de citation (24/08 suite 3). Motif toujours
// identique : un separateur compte comme structure dans une zone que le
// lecteur ne voit pas.
//
// LE CHEVRON EST TOMBE LE 25/08 (suite 6), et il n'a pas demande de quatrieme
// alternative : il suffisait que BLOC_CLOTURE tolere un prefixe de citation
// devant ses deux clotures. La liste des zones reste donc a trois.
//
// Le commentaire est en PREMIERE alternative, et ce n'est pas cosmetique : les
// blocs NOTE des trames transverses contiennent du code inline (`fiche-trame.md`).
// Place en second, l'alternative de code inline decouperait le commentaire et
// laisserait sa prose francaise au controle. Meme raisonnement de position que
// le wikilink dans segmenter(), pour le meme genre de defaut.
//
// Un `<!--` LOGE DANS un bloc cloture reste protege : l'alternative de bloc
// s'ouvre plus tot dans le texte, et le moteur retient la position la plus a
// gauche avant l'ordre des alternatives.
//
// Perimetre mesure AVANT d'ecrire cette ligne (lecon du 24/08 suite 2) :
// SIX fiches portent des commentaires, 37 blocs, 3446 mots enfermes. Trois
// sont les trames transverses de conduite/proj/ (8 blocs, 696 mots), trois
// sont les templates, depublies et jamais traduits. Le gain vivant est donc
// de DOUZE faux positifs C109 sur trois fichiers francais - petit, permanent,
// et il se serait redecode a chaque balayage futur.
function masquerHorsProse(corps) {
  const motif = new RegExp('(<!--[\\s\\S]*?-->)|(' + BLOC_CLOTURE + ')|(`[^`\\n]*`)', 'gm');
  // Le CHEVRON DE CITATION SURVIT AU MASQUAGE, et ce n'est pas cosmetique.
  // La sentinelle remplace tout sauf le saut de ligne ET le « > » : sans cette
  // exception, un bloc de code loge dans un callout perdrait ses prefixes de
  // citation, styleFiche() lirait la ligne comme sortie du blockquote, et la
  // garde de l'encart francais des deux accueils se refermerait au milieu d'un
  // callout. Un « > » restant dans du code masque ne declenche aucun des
  // controles, qui cherchent tous de la ponctuation haute ou un tiret.
  return corps.replace(motif, (m) => m.replace(/[^\n>]/g, '\u0001'));
}

/* ---------- exemption de glose de liste ---------- */

// Une puce ou un item numerote porte legitimement UN tiret de glose et UN
// point-virgule de fin d'item (C109, exemption des listes du 22/08 suite).
//
// Le motif precedent exigeait que la tete de la puce soit un wikilink ou un
// gras INITIAL. Angle mort symetrique mesure le 23/08 (suite 3) : une puce
// dont le gras n'est pas initial n'etait pas reconnue comme glose, d'ou un
// faux positif signale sur integration-et-tests, et le meme defaut peut
// masquer un tiret illicite ailleurs. Correctif : la tete n'a plus a etre
// d'une forme particuliere. C'est la POSITION qui decide - le premier tiret
// de la ligne est la glose, tous les suivants sont de la prose.
//
// CORRECTIF #10, 30/08 (seance 12). Deux defauts repares du meme geste.
//
// (1) L EXEMPTION ETAIT MUETTE. styleFiche() faisait "continue" sur un index
//     exempte : l occurrence n etait ni comptee, ni affichee, ni rangee hors
//     perimetre - elle DISPARAISSAIT. C est exactement ce que le commentaire
//     de la garde d intervalle numerique, dix lignes plus bas, interdit pour
//     son propre cas : "L exemption sort en hors-perimetre et non en silence
//     [...] elle reste comptee, donc mesurable." Deux exemptions voisines,
//     deux regimes opposes, et c est celle qui porte le chantier des puces a
//     tiret qui etait aveugle - le perimetre de ce chantier ne pouvait donc
//     se chiffrer qu a l oeil, ce que C118 interdit.
//     Correctif : la fonction rend une MAP index -> raison, et styleFiche()
//     pousse l occurrence dans une categorie nommee "glose-liste", exclue du
//     detail par fiche et du code de sortie, COMPTEE ET AFFICHEE en bilan.
//
// (2) LA GLOSE ETAIT CHERCHEE COMME "LE PREMIER TIRET DE LA LIGNE", des deux
//     especes. Sur une puce qui porte un INTERVALLE NUMERIQUE avant sa glose
//     - "- **Bandeau LED WS2812** : 3-5 A en blanc plein - alimentation
//     dediee obligatoire." - c est le demi-cadratin de l intervalle qui etait
//     pris pour la glose : avale en silence, tandis que le VRAI cadratin de
//     glose sortait en "C109 tiret d incise". Deux fautes sur une ligne, en
//     sens contraire. Mesure du 30/08 (seance 12) : QUATRE lignes du corpus
//     dans ce cas, deux FR et leurs deux jumelles EN, et ce sont elles qui
//     forment l echantillon C110 de l epreuve.
//     Correctif : la glose est le premier tiret QUI NE SOIT PAS un intervalle
//     numerique, meme predicat que la garde de styleFiche().
//
// L ESPECE de la ligne est distinguee - puce (- * +) ou liste numerotee
// (1. 1)) - parce que le chantier des puces a tiret ne porte que sur la
// premiere et que les deux etaient confondues dans un seul motif.
//
// Renvoie { ex: Map index -> raison, hors, espece }.
function exemptions(ligne) {
  const ex = new Map();
  // Un blockquote se juge sur son contenu : on note le decalage du prefixe.
  const mCite = ligne.match(/^(\s*(?:>\s?)+)/);
  const prefixe = mCite ? mCite[1].length : 0;
  const nu = ligne.slice(prefixe);

  // Titre de section ou titre de callout : hors perimetre C109.
  if (/^#{1,6}\s/.test(nu) || /^\[!\w+\]/.test(nu)) return { ex, hors: 'titre', espece: null };

  // Ligne de tableau : le tiret de cellule est une glose de tableau.
  if (/^\|/.test(nu)) return { ex, hors: 'tableau', espece: null };

  const mPuce = nu.match(/^(\s*(?:[-*+]|\d+[.)])\s+)/);
  if (!mPuce) return { ex, hors: null, espece: null };

  const espece = /^\s*\d+[.)]\s/.test(nu) ? 'liste numerotee' : 'puce';

  // Premier tiret de la ligne QUI NE SOIT PAS UN INTERVALLE NUMERIQUE
  // = separateur de glose, exempte. Meme predicat d intervalle que la garde
  // de styleFiche() : demi-cadratin encadre de chiffres.
  for (const m of nu.matchAll(/[\u2014\u2013]/g)) {
    if (m[0] === '\u2013' && /\d/.test(nu[m.index - 1] || '') && /\d/.test(nu[m.index + 1] || '')) continue;
    ex.set(prefixe + m.index, 'tiret de glose de ' + espece);
    break;
  }

  // Point-virgule de FIN d'item = ponctuation mecanique de liste, exemptee.
  const mPv = nu.match(/;\s*$/);
  if (mPv) ex.set(prefixe + mPv.index, 'point-virgule de fin d item de ' + espece);

  return { ex, hors: null, espece };
}

/* ---------- controle de style d'une fiche ---------- */

// Deux familles rendent un verdict mecanique (typographie francaise dans un
// jet EN), deux rendent des candidats a lire (virgule ambigue, C109 de prose,
// ou le critere du verbe conjugue ne se decide qu'a la lecture).
function styleFiche(rel, texte) {
  const fm = frontMatter(texte);
  const corps = fm ? fm.corps : texte;
  const decalage = fm ? fm.entier.split('\n').length - 1 : 0;
  const masque = masquerHorsProse(corps);
  const lignes = masque.split('\n');
  const brutes = corps.split('\n');
  const estEn = rel.startsWith('en/');

  const trouve = [];
  const pousser = (n, col, cat, detail, zone) => {
    const l = brutes[n];
    const d = Math.max(0, col - 32);
    trouve.push({
      ligne: n + 1 + decalage,
      cat,
      detail,
      // CORRECTIF #10, second geste : la ZONE de l occurrence. 'liens' sous
      // une section ## Voir aussi / Aller plus loin / See also / Going
      // further, null ailleurs. C est le CAS 1 de l amendement C109 du 29/08
      // (suite 8) : glose de liste licite au paragraphe 4, HORS PERIMETRE du
      // chantier des puces a tiret. Sans ce champ le seau glose-liste donne
      // un volume, jamais un perimetre.
      zone: zone || null,
      extrait: (d ? '\u2026' : '') + l.slice(d, col + 34).trim() + (col + 34 < l.length ? '\u2026' : ''),
    });
  };

  // Meme regle de portee que puces-tiret.mjs, ecrite ici parce que --style
  // decoupe des occurrences la ou puces-tiret compte des lignes : une section
  // exclue court de son titre au prochain titre de rang <= le sien.
  const SECTIONS_LIENS = new Set(['Voir aussi', 'Aller plus loin', 'See also', 'Going further']);
  let sectionLiens = false;
  let rangLiens = 0;

  // L'encart C111 des deux accueils est du FRANCAIS delibere dans une fiche
  // EN : sa typographie francaise y est correcte et ne doit pas etre
  // signalee. Seul bloc du corpus dans ce cas, borne au callout qui le porte.
  let citeFr = false;

  lignes.forEach((ligne, n) => {
    const estCite = /^\s*>/.test(ligne);
    if (estCite && /\[!\w+\][^\n]*Version fran/.test(ligne)) citeFr = true;
    else if (!estCite) citeFr = false;
    if (citeFr) return;

    // Suivi de la section courante, AVANT les exemptions : un titre n est
    // jamais lui-meme une occurrence, et la zone qu il ouvre vaut pour les
    // lignes qui SUIVENT.
    {
      const nuT = ligne.replace(/^(\s*(?:>\s?)+)/, '');
      const mT = nuT.match(/^(#{1,6})\s+(.*?)\s*$/);
      if (mT) {
        const rang = mT[1].length;
        if (sectionLiens && rang <= rangLiens) sectionLiens = false;
        if (SECTIONS_LIENS.has(mT[2].trim())) { sectionLiens = true; rangLiens = rang; }
      }
    }

    const { ex, hors, espece } = exemptions(ligne);
    const zone = sectionLiens ? 'liens' : null;

    // Le texte alternatif d'un embed decrit une image : ce n'est pas de la
    // prose de fiche et il sort du perimetre C109, comme les 8 alt classes au
    // residu du lot 2a le 23/08. Sa typographie, elle, reste controlee : les
    // separateurs decimaux y basculent aussi (paragraphe 5.3 des regles).
    const zonesAlt = [];
    for (const a of ligne.matchAll(EMBED_ALT)) zonesAlt.push([a.index, a.index + a[0].length]);
    const dansAlt = (i) => zonesAlt.some(([d, f]) => i >= d && i < f);

    if (estEn) {
      // 1. Espace francaise devant une ponctuation haute, ou devant %.
      for (const m of ligne.matchAll(/[ \u00A0\u202F\u2009]([;:!?%\u00BB])/g)) {
        if (m[1] === '!' && ligne[m.index + 2] === '[') continue; // ![alt](...)
        const nom = m[1] === '%' ? 'pourcent espace' : 'espace avant \u00ab ' + m[1] + ' \u00bb';
        pousser(n, m.index, 'typographie', nom);
      }
      // 2. Virgule decimale.
      for (const m of ligne.matchAll(/\d,\d/g)) {
        // 1,000 est un separateur de milliers licite en anglais, 4,7 une
        // virgule decimale francaise. Le motif ne les distingue pas : le
        // premier sort du verdict mecanique et part en candidat a lire.
        if (/^\d,\d{3}(\D|$)/.test(ligne.slice(m.index))) {
          pousser(n, m.index, 'candidat', 'virgule : decimale francaise ou milliers anglais ?');
        } else {
          pousser(n, m.index, 'typographie', 'virgule decimale');
        }
      }
    }

    // 3. C109 : tirets d'incise et points-virgules de prose.
    for (const m of ligne.matchAll(/[\u2014\u2013]/g)) {
      // CORRECTIF #10 : l exemption de glose CESSE D ETRE MUETTE. Elle sort
      // dans une categorie nommee, comptee et affichee en bilan, comme la
      // garde d intervalle numerique quinze lignes plus bas le fait deja.
      if (ex.has(m.index)) { pousser(n, m.index, 'glose-liste', ex.get(m.index), zone); continue; }
      // Le tiret demi-cadratin ENCADRE DE CHIFFRES est un intervalle numerique
      // (0-65535, 3,3-5 V), pas une incise. Faux positif revele le 24/08 par le
      // premier lancement de --style sur du francais : le corpus EN n'avait
      // jamais porte de plage chiffree. Arbitrage Tim (a) : le CADRATIN entre
      // chiffres reste signale, c'est une faute de typographie a corriger.
      // L'exemption sort en hors-perimetre et non en silence, comme les alt et
      // les tableaux : elle reste comptee, donc mesurable.
      if (m[0] === '\u2013' && /\d/.test(ligne[m.index - 1] || '') && /\d/.test(ligne[m.index + 1] || '')) {
        pousser(n, m.index, 'hors-perimetre', 'tiret d intervalle numerique');
        continue;
      }
      if (dansAlt(m.index)) { pousser(n, m.index, 'hors-perimetre', 'tiret en alt d image'); continue; }
      if (hors) { pousser(n, m.index, 'hors-perimetre', 'tiret en ' + hors); continue; }
      pousser(n, m.index, 'C109', 'tiret d incise', espece ? 'ligne de liste' : null);
    }
    for (const m of ligne.matchAll(/;/g)) {
      // CORRECTIF #10, second seau : meme raison, trois lignes plus loin.
      if (ex.has(m.index)) { pousser(n, m.index, 'glose-liste', ex.get(m.index), zone); continue; }
      if (dansAlt(m.index)) { pousser(n, m.index, 'hors-perimetre', 'point-virgule en alt d image'); continue; }
      if (hors) { pousser(n, m.index, 'hors-perimetre', 'point-virgule en ' + hors); continue; }
      pousser(n, m.index, 'C109', 'point-virgule de prose', espece ? 'ligne de liste' : null);
    }
  });

  return trouve;
}

/* ---------- differentiel des caracteres hors alphabet latin ---------- */

// Un ideogramme chinois s'est glisse dans pcb-en le 24/08 (suite), et AUCUN
// des cinq controles existants ne l'a vu : ni lien, ni embed, ni bloc de code,
// ni typographie francaise, ni C109. Seule la relecture du texte l'a attrape,
// et rien ne garantissait qu'elle le voie.
//
// La premiere version listait une PLAGE de caracteres et rendait deux faux
// positifs : l'ohm d'i2c et les emojis de preuve-de-concept, tous deux
// deliberes. La seconde ne compare plus a une plage mais A LA SOURCE : present
// des deux cotes, le caractere est voulu ; present du seul cote anglais, il a
// ete introduit par la generation ou par la frappe. Zero faux positif par
// construction, et aucune liste d'exemptions a tenir a jour.
//
// Meme deplacement que le cinquieme controle de --style, qui a cesse de
// compter pour comparer.
const LATIN = /[\u0000-\u024F]/;

function horsLatin(texte) {
  const par = new Map();
  for (const ch of texte) {
    if (LATIN.test(ch)) continue;
    par.set(ch, (par.get(ch) || 0) + 1);
  }
  return par;
}

function extraitDe(texte, ch) {
  const i = texte.indexOf(ch);
  if (i < 0) return '';
  const d = Math.max(0, i - 30);
  return (d ? '\u2026' : '') + texte.slice(d, i + 31).replace(/\s+/g, ' ').trim() + '\u2026';
}

function style(cibles) {
  let typo = 0;
  let cand = 0;
  let creees = 0;
  let supprimees = 0;
  let etrangers = 0;
  let c109 = 0;
  let hors = 0;
  let fichesTouchees = 0;
  // CORRECTIF #10 : les quatre seaux de glose de liste. Ils sont comptes
  // separement par ESPECE parce que le chantier des puces a tiret ne porte
  // que sur la puce, et separement par SIGNE parce que le brief ne nomme que
  // le tiret. Aucun n entre dans le code de sortie.
  let gloseTiretPuce = 0;
  let gloseTiretNum = 0;
  let glosePvPuce = 0;
  let glosePvNum = 0;
  // CORRECTIF #10, second geste : le PERIMETRE du chantier des puces a tiret.
  // Le seau ci-dessus donne un VOLUME ; le perimetre est ce volume MOINS le
  // cas 1 de l amendement C109 du 29/08 (suite 8), les gloses licites des
  // sections de liens. Les deux se publient ensemble, jamais l un sans
  // l autre.
  let liensTiretPuce = 0;
  let liensTiretNum = 0;
  let c109SurListeTiret = 0;
  let c109SurListePv = 0;
  let porteusesPerimetre = 0;

  console.log('=== CONTROLE DE STYLE ===');
  for (const rel of cibles) {
    const abs = join(CONTENT, rel.split('/').join(sep));
    if (!existsSync(abs)) {
      console.error('Introuvable : content/' + rel);
      process.exit(1);
    }
    const texte = readFileSync(abs, 'utf8');
    const t = styleFiche(rel, texte);
    // CORRECTIF #10 : 'glose-liste' est comptee mais n est pas un defaut -
    // elle sort du detail par fiche, comme 'hors-perimetre'. Sans cette
    // ligne, les 2 500 gloses du corpus mettraient toutes les fiches "a
    // reprendre" et le controle deviendrait illisible.
    const dur = t.filter((x) => x.cat !== 'hors-perimetre' && x.cat !== 'glose-liste');

    // Une occurrence C109 reportee du francais a deja ete arbitree ; une
    // occurrence CREEE par la traduction ne l'a jamais ete. C'est le mode
    // d'erreur neuf du 23/08 (suite 3), deux points-virgules apparus dans
    // dossier-technique-en la ou le francais portait des virgules. Le seul
    // controle qui le voie est la comparaison des deux jets.
    const fmS = frontMatter(texte);
    const mS = fmS && fmS.bloc.match(/^source_fr:\s*(.+?)\s*$/m);
    if (mS) {
      const absFr = join(CONTENT, mS[1].split('/').join(sep));
      if (existsSync(absFr)) {
        const texteFr = readFileSync(absFr, 'utf8');
        const nFr = styleFiche(mS[1], texteFr).filter((x) => x.cat === 'C109').length;
        const nEn = t.filter((x) => x.cat === 'C109').length;
        if (nEn > nFr) {
          creees += nEn - nFr;
          console.log('\n  ' + rel + '   C109 : FR ' + nFr + ' / EN ' + nEn + '   ' + (nEn - nFr) + ' CREEE(S) PAR LA TRADUCTION');
        }
        // MOITIE SYMETRIQUE, ajoutee le 30/08 (seance 11), arbitrage 1/18.
        // Le seau ci-dessus ne voit que ce que la traduction CREE. Le lot 13
        // a trouve a la main l autre moitie : easyeda-en sort a 0 C109 quand
        // sa source en porte 1, cadratin rendu par une virgule SANS decision,
        // et --style affichait "0 a reprendre" comme une reussite.
        // N ENTRE PAS dans le code de sortie : une suppression n est pas un
        // defaut mecanique - le lot 13 a decide que la virgule restait.
        if (nFr > nEn) {
          supprimees += nFr - nEn;
          console.log('\n  ' + rel + '   C109 : FR ' + nFr + ' / EN ' + nEn + '   ' + (nFr - nEn) + ' SUPPRIMEE(S) PAR LA TRADUCTION (a lire)');
        }

        const chFr = horsLatin(texteFr);
        const intrus = [];
        for (const [ch, n] of horsLatin(texte)) if (!chFr.has(ch)) intrus.push([ch, n]);
        if (intrus.length) {
          for (const [, n] of intrus) etrangers += n;
          console.log('\n  ' + rel + '   CARACTERE(S) HORS ALPHABET LATIN ABSENT(S) DE LA SOURCE :');
          for (const [ch, n] of intrus) {
            const pt = 'U+' + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
            console.log('      ' + pt + '  x' + n + '   ' + extraitDe(texte, ch));
          }
        }
      }
    }

    typo += t.filter((x) => x.cat === 'typographie').length;
    cand += t.filter((x) => x.cat === 'candidat').length;
    c109 += t.filter((x) => x.cat === 'C109').length;
    hors += t.filter((x) => x.cat === 'hors-perimetre').length;
    gloseTiretPuce += t.filter((x) => x.detail === 'tiret de glose de puce').length;
    gloseTiretNum += t.filter((x) => x.detail === 'tiret de glose de liste numerotee').length;
    glosePvPuce += t.filter((x) => x.detail === 'point-virgule de fin d item de puce').length;
    glosePvNum += t.filter((x) => x.detail === 'point-virgule de fin d item de liste numerotee').length;
    const lp = t.filter((x) => x.detail === 'tiret de glose de puce' && x.zone === 'liens').length;
    const ln = t.filter((x) => x.detail === 'tiret de glose de liste numerotee' && x.zone === 'liens').length;
    liensTiretPuce += lp;
    liensTiretNum += ln;
    // La ligne DECLARE SA POPULATION (regle du 27/08, eprouvee 6/N) : le seau
    // compte des occurrences C109, donc des TIRETS et des POINTS-VIRGULES.
    // Sans la decomposition, le total se lit comme un compte de tirets - ce
    // qu il n est pas, et ce qui a fait rater la prediction du bloc 155.
    c109SurListeTiret += t.filter((x) => x.cat === 'C109' && x.zone === 'ligne de liste' && x.detail === 'tiret d incise').length;
    c109SurListePv += t.filter((x) => x.cat === 'C109' && x.zone === 'ligne de liste' && x.detail === 'point-virgule de prose').length;
    const gloseFiche = t.filter((x) => x.cat === 'glose-liste' && x.detail.startsWith('tiret ')).length;
    if (gloseFiche - lp - ln > 0) porteusesPerimetre += 1;
    if (!dur.length) continue;
    fichesTouchees += 1;
    console.log('\n  ' + rel);
    for (const x of dur) {
      console.log('    ' + String(x.ligne).padStart(4) + '  [' + x.cat + '] ' + x.detail);
      console.log('          ' + x.extrait);
    }
  }

  console.log('');
  console.log(cibles.length + ' fiche(s) lue(s), ' + fichesTouchees + ' a reprendre.');
  console.log('  typographie francaise : ' + typo + '   (verdict mecanique)');
  console.log('  virgule ambigue       : ' + cand + '   (candidat a lire)');
  console.log('  C109 creees en EN     : ' + creees + '   (jamais arbitrees en francais)');
  console.log('  C109 supprimees en EN : ' + supprimees + '   (rendues sans decision : a lire)');
  console.log('  C109 de prose         : ' + c109 + '   (candidats a lire : le verbe conjugue decide)');
  console.log('  hors perimetre        : ' + hors + '   (titres, tableaux et alt, non comptes)');
  // CORRECTIF #10 : le perimetre du chantier des puces a tiret, mesure par
  // l instrument au lieu d etre estime. Population declaree dans la ligne
  // elle-meme : occurrences (pas lignes), hors code et hors commentaire par
  // masquerHorsProse, hors titres et tableaux par exemptions().
  console.log('  glose de liste, tiret : ' + (gloseTiretPuce + gloseTiretNum) +
    '   (puce ' + gloseTiretPuce + ' / liste numerotee ' + gloseTiretNum + ')');
  console.log('     dont section de liens : ' + (liensTiretPuce + liensTiretNum) +
    '   (puce ' + liensTiretPuce + ' / liste numerotee ' + liensTiretNum + ')');
  console.log('     PERIMETRE cas 2+4     : ' + (gloseTiretPuce - liensTiretPuce + gloseTiretNum - liensTiretNum) +
    '   (puce ' + (gloseTiretPuce - liensTiretPuce) + ' / liste numerotee ' + (gloseTiretNum - liensTiretNum) + ')');
  console.log('     porteuses du perimetre : ' + porteusesPerimetre + ' fichier(s)');
  console.log('  glose de liste, ; fin : ' + (glosePvPuce + glosePvNum) +
    '   (puce ' + glosePvPuce + ' / liste numerotee ' + glosePvNum + ')');
  console.log('  C109 sur ligne de liste : ' + (c109SurListeTiret + c109SurListePv) +
    '   (tiret ' + c109SurListeTiret + ' / point-virgule ' + c109SurListePv + ')');
  console.log('  hors alphabet latin   : ' + etrangers + '   (verdict mecanique : absent de la source FR)');
  process.exit(typo || creees || etrangers ? 1 : 0);
}

/* ---------- heuristique de libelle : le lien pointe juste, affiche-t-il juste ? ---------- */

// Les trois compteurs valident la structure, jamais la designation (23/08
// suite). [[soudure-en|Welding]] pointait sur une fiche intitulee Soldering :
// lien present, bien forme, cible existante, compteurs verts, libelle faux.
//
// Heuristique : un libelle qui ne partage AUCUN mot significatif avec le
// title: de sa cible est un candidat. Bruyante par construction - une
// reformulation legitime la declenche - donc elle rend une liste a lire et
// pas un verdict.
const VIDES = new Set(
  ('the a an of on in and or for to with without from into at by as is are it its this that'
   + ' le la les un une des du de et ou pour dans sur avec sans a au aux se son sa ses ce'
   + ' cette qui que quoi est sont').split(' ')
);

function normaliser(s) {
  return s
    .replace(/\u00B2/g, '2') // I\u00b2C et I2C sont le meme sigle
    .replace(/\u00B3/g, '3')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function motsUtiles(s) {
  return new Set(normaliser(s).split(' ').filter((w) => w && !VIDES.has(w)));
}

// Deux mots de meme radical se recoupent : machined et machining, soldering
// et solder. Comparer les formes exactes ferait remonter toute la morphologie
// anglaise en faux positifs - cinq des douze du premier lancement.
function memeRadical(a, b) {
  if (a === b) return true;
  if (Math.min(a.length, b.length) < 5) return false;
  return a.slice(0, 5) === b.slice(0, 5);
}

// Un sigle est un libelle legitime de sa forme developpee : PoC pour Proof of
// concept, ADC pour analog-to-digital converter.
function estSigleDe(court, long) {
  const lettres = normaliser(court).replace(/ /g, '');
  if (!lettres || lettres.length > 6) return false;
  const initiales = normaliser(long).split(' ').filter(Boolean).map((w) => w[0]).join('');
  if (initiales.startsWith(lettres) || lettres.startsWith(initiales)) return true;
  const ini2 = [...motsUtiles(long)].map((w) => w[0]).sort().join('');
  return ini2 === [...lettres].sort().join('');
}

function libelles() {
  // Index des titres EN, par chemin complet et par slug court.
  const titreEnParChemin = new Map();
  const titreEnParSlug = new Map();
  const fichesEn = walk(join(CONTENT, 'en')).map(versWeb);
  for (const rel of fichesEn) {
    const sansExt = rel.replace(/\.md$/, '');
    const titre = lireTitre(readFileSync(join(CONTENT, rel.split('/').join(sep)), 'utf8'));
    if (!titre) continue;
    titreEnParChemin.set(sansExt, titre);
    const court = basename(sansExt);
    if (!titreEnParSlug.has(court)) titreEnParSlug.set(court, titre);
  }

  let examines = 0;
  let jugeables = 0;
  let candidats = 0;
  let positions = 0;
  let sansCible = 0;
  const sorties = [];

  for (const rel of fichesEn.sort()) {
    const texte = readFileSync(join(CONTENT, rel.split('/').join(sep)), 'utf8');
    const corps = (frontMatter(texte) || { corps: texte }).corps;
    const horsCode = segmenter(corps)
      .filter((s) => !s.code)
      .map((s) => s.texte)
      .join('');

    for (const m of horsCode.matchAll(/(?<!!)\[\[([^\]]+)\]\]/g)) {
      const mPipe = m[1].match(/^(.*?)(?:\\\||\|)([\s\S]*)$/);
      if (!mPipe) continue; // lien sans libelle : rien a juger
      const cibleLien = mPipe[1].split('#')[0].replace(/\\+$/, '').trim();
      const libelle = mPipe[2].trim();
      if (!cibleLien || !libelle) continue;
      examines += 1;

      const titre =
        titreEnParChemin.get(cibleLien) || titreEnParSlug.get(basename(cibleLien));
      if (!titre) {
        sansCible += 1;
        continue;
      }
      jugeables += 1;

      const a = motsUtiles(libelle);
      const b = motsUtiles(titre);
      if (!a.size || !b.size) continue;
      let commun = false;
      for (const w of a) for (const v of b) if (memeRadical(w, v)) commun = true;
      if (commun) continue;
      if (estSigleDe(libelle, titre) || estSigleDe(titre, libelle)) continue;
      // Un libelle du patron « step N » designe une POSITION dans le parcours
      // de realisation, pas le titre de sa cible. Il ne peut par construction
      // recouper aucun title:, donc l heuristique n a rien a en dire : elle ne
      // le signale pas, elle le compte a part. Mesure du 25/08 : 16 des 25
      // candidats, tous deliberes, tous dans embarque/realisation/.
      // Exempte par le MOTIF et non par une liste de fiches - une liste
      // vieillirait a chaque fiche ajoutee au parcours.
      if (/^step\s+\d+$/i.test(libelle)) {
        positions += 1;
        continue;
      }
      candidats += 1;
      sorties.push('  ' + rel + '\n      [[' + cibleLien + '|' + libelle + ']]   cible intitulee : ' + titre);
    }
  }

  console.log('=== HEURISTIQUE DE LIBELLES ===');
  for (const l of sorties) console.log(l);
  console.log('');
  console.log('  wikilinks a libelle   : ' + examines);
  console.log('  cible EN existante    : ' + jugeables + '   (le reste vise une fiche non encore traduite)');
  console.log('  cible EN absente      : ' + sansCible);
  console.log('  candidats a lire      : ' + candidats);
  console.log('  positions de parcours : ' + positions + '   (patron « step N », exempte : designe un rang, pas un titre)');
  process.exit(0);
}

/* ---------- perimetre du front de traduction ---------- */

// Les quatre index du lot 1 sont les points d'entree du wiki. L'anneau 1 est
// l'ensemble des fiches qu'ils atteignent EN UN LIEN : c'est le perimetre de
// « aucun lien mort depuis l'accueil », donc celui des lots 2a a 2c.
//
// Ce chiffre a porte TROIS valeurs en trois sessions - 82, 79, 78 - et la
// regle qui produisait la derniere etait FAUSSE PAR CONSTRUCTION : elle
// resolvait un wikilink par son DERNIER SEGMENT de chemin, ce qui ecrase les
// huit index.md du depot sur une cible unique. C'est la cle par nom de fichier
// du 22/08, qui avait deja fausse la mesure C109 de 40 unites, sur un autre
// objet. Tant que la regle n'etait pas ecrite dans un outil, le perimetre du
// lot n'etait pas citable.
//
// Regle de resolution, et c'est elle qui rend le chiffre citable :
//   1. cible contenant une barre -> chemin complet depuis content/, puis a
//      defaut suffixe de chemin (mcu/gpio pour embarque/mcu/gpio) ;
//   2. cible sans barre -> nom de fichier, A CONDITION QU'IL SOIT UNIQUE.
//      Portee par plusieurs fiches, la cible sort en AMBIGU et n'est jamais
//      rabattue sur l'une d'elles.
const INDEX_FRONT = ['index.md', 'conduite/index.md', 'embarque/index.md', 'meca/index.md'];

function front() {
  const fiches = walk(CONTENT)
    .map(versWeb)
    .filter((w) => !w.startsWith('en/') && !w.startsWith('templates/'));

  const parChemin = new Set(fiches.map((f) => f.replace(/\.md$/, '')));
  const parNom = new Map();
  for (const f of fiches) {
    const sansExt = f.replace(/\.md$/, '');
    const nom = basename(sansExt);
    if (!parNom.has(nom)) parNom.set(nom, []);
    parNom.get(nom).push(sansExt);
  }

  function resoudre(c) {
    if (parChemin.has(c)) return { rel: c };
    if (c.includes('/')) {
      const fins = [...parChemin].filter((r) => r.endsWith('/' + c));
      if (fins.length === 1) return { rel: fins[0] };
      if (fins.length > 1) return { ambigu: fins };
      return { absent: true };
    }
    const l = parNom.get(c) || [];
    if (l.length === 1) return { rel: l[0] };
    if (l.length > 1) return { ambigu: l };
    return { absent: true };
  }

  function jumelle(rel) {
    const segs = rel.split('/');
    segs[segs.length - 1] = suffixer(segs[segs.length - 1]);
    return 'en/' + segs.join('/') + '.md';
  }

  const cibles = new Map();
  const ambigus = [];
  const absents = [];

  for (const relIdx of INDEX_FRONT) {
    const abs = join(CONTENT, relIdx.split('/').join(sep));
    if (!existsSync(abs)) {
      console.error('Index de depart introuvable : content/' + relIdx);
      process.exit(1);
    }
    const texte = readFileSync(abs, 'utf8');
    const corps = (frontMatter(texte) || { corps: texte }).corps;
    const hors = segmenter(corps)
      .filter((s) => !s.code)
      .map((s) => s.texte)
      .join('');
    for (const m of hors.matchAll(/(?<!!)\[\[([^\]]+)\]\]/g)) {
      const c = m[1].split(/\\\||\|/)[0].split('#')[0].replace(/\\+$/, '').trim();
      if (!c) continue;
      const r = resoudre(c);
      if (r.ambigu) {
        ambigus.push('  ' + relIdx + '  ->  [[' + c + ']]   ' + r.ambigu.length + ' cibles : ' + r.ambigu.join(', '));
        continue;
      }
      if (r.absent) {
        absents.push('  ' + relIdx + '  ->  [[' + c + ']]');
        continue;
      }
      if (!cibles.has(r.rel)) cibles.set(r.rel, new Set());
      cibles.get(r.rel).add(relIdx);
    }
  }

  const anneau = [...cibles.keys()].sort();
  const faits = [];
  const restants = [];
  for (const rel of anneau) {
    if (existsSync(join(CONTENT, jumelle(rel).split('/').join(sep)))) faits.push(rel);
    else restants.push(rel);
  }

  let mots = 0;
  console.log('=== FRONT DE TRADUCTION : ANNEAU 1 ===');
  console.log('  Resolution : chemin complet, puis suffixe de chemin, puis nom de');
  console.log('  fichier UNIQUE. Un nom porte par plusieurs fiches sort en AMBIGU');
  console.log('  et n est jamais ecrase sur une cible unique.');
  console.log('  Mots : regle C110, importee de tools/compter-mots.mjs.');
  console.log('');
  console.log('  index de depart              : ' + INDEX_FRONT.length);
  console.log('  cibles distinctes (anneau 1) : ' + anneau.length);
  console.log('    deja traduites             : ' + faits.length);
  console.log('    RESTANT                    : ' + restants.length);
  console.log('');
  for (const rel of restants) {
    const n = compterMots(readFileSync(join(CONTENT, rel.split('/').join(sep)) + '.md', 'utf8'));
    mots += n;
    console.log('  ' + rel.padEnd(56) + String(n).padStart(7));
  }
  console.log('  ' + '-'.repeat(63));
  console.log('  ' + ('RESTANT DE L ANNEAU 1 (' + restants.length + ' fiches)').padEnd(56) + String(mots).padStart(7));

  if (ambigus.length) {
    console.log('');
    console.log('  CIBLES AMBIGUES (' + ambigus.length + ') - non comptees, a lever a la main :');
    for (const a of ambigus) console.log(a);
  }
  if (absents.length) {
    console.log('');
    console.log('  CIBLES SANS FICHE (' + absents.length + ') - liens rouges depuis un index :');
    for (const a of absents) console.log(a);
  }
  process.exit(ambigus.length || absents.length ? 1 : 0);
}

/* ---------- anneaux successifs, et dette du front courant ---------- */

// Arbitrage Tim du 25/08 (suite 6), option (c) : l'ANNEAU commande le lot, la
// DETTE s'imprime a cote et ne s'appelle JAMAIS « anneau ». Les deux ne sont
// pas emboitees, et c'est la raison de les sortir ensemble :
//   - l'anneau part des cibles de l'anneau precedent, donc il contient le
//     voisinage de kicad, que la dette ne voit pas puisque kicad n'est pas
//     traduite ;
//   - la dette part des fiches DEJA TRADUITES, donc elle contient le voisinage
//     des fiches traduites hors anneau (module MicroPython, decouplage), que
//     l'anneau ne contient pas.
// Le 122 contre 82 du 24/08 n'etait donc pas « l'anneau 2 vu plus grand »,
// c'etait un autre objet.
//
// BRUT contre NET. --front ne retranche rien : ses 82 comptent les cibles des
// quatre index, index compris si un index en vise un autre. Le mode imprime
// donc les deux colonnes, et --anneau 1 doit rendre le meme BRUT que --front.
// L'ecart BRUT - NET au rang 1 est le nombre de liens index -> index ; il n'est
// pas mesure a ce jour, donc pas predit (C118).
//
// La regle de resolution est celle de front(), a la ligne pres : c'est elle qui
// a coute trois sessions et trois valeurs d'anneau 1 (82, 79, 78).

function graphe() {
  const fiches = walk(CONTENT)
    .map(versWeb)
    .filter((w) => !w.startsWith('en/') && !w.startsWith('templates/'));

  const parChemin = new Set(fiches.map((f) => f.replace(/\.md$/, '')));
  const parNom = new Map();
  for (const f of fiches) {
    const sansExt = f.replace(/\.md$/, '');
    const nom = basename(sansExt);
    if (!parNom.has(nom)) parNom.set(nom, []);
    parNom.get(nom).push(sansExt);
  }

  function resoudre(c) {
    if (parChemin.has(c)) return { rel: c };
    if (c.includes('/')) {
      const fins = [...parChemin].filter((r) => r.endsWith('/' + c));
      if (fins.length === 1) return { rel: fins[0] };
      if (fins.length > 1) return { ambigu: fins };
      return { absent: true };
    }
    const l = parNom.get(c) || [];
    if (l.length === 1) return { rel: l[0] };
    if (l.length > 1) return { ambigu: l };
    return { absent: true };
  }

  function jumelle(rel) {
    const segs = rel.split('/');
    segs[segs.length - 1] = suffixer(segs[segs.length - 1]);
    return 'en/' + segs.join('/') + '.md';
  }

  const traduite = (rel) => existsSync(join(CONTENT, jumelle(rel).split('/').join(sep)));
  const lire = (rel) => readFileSync(join(CONTENT, rel.split('/').join(sep)) + '.md', 'utf8');

  // Liens SORTANTS d'une fiche, embeds exclus par le (?<!!) - un anneau se
  // compte en clics vers l'avant, jamais en retroliens.
  function liens(rel) {
    const texte = lire(rel);
    const corps = (frontMatter(texte) || { corps: texte }).corps;
    const hors = segmenter(corps)
      .filter((s) => !s.code)
      .map((s) => s.texte)
      .join('');
    const cibles = new Set();
    const ambigus = new Set();
    const absents = new Set();
    for (const m of hors.matchAll(/(?<!!)\[\[([^\]]+)\]\]/g)) {
      const c = m[1].split(/\\\||\|/)[0].split('#')[0].replace(/\\+$/, '').trim();
      if (!c) continue;
      const r = resoudre(c);
      if (r.ambigu) { ambigus.add(c); continue; }
      if (r.absent) { absents.add(c); continue; }
      cibles.add(r.rel);
    }
    return { cibles, ambigus, absents };
  }

  return { fiches, parChemin, resoudre, jumelle, traduite, lire, liens };
}

// Angle mort du masquage : un bloc de code CLOTURE A L'INTERIEUR d'un chevron
// de citation. Deux symptomes pour un seul defaut (24/08 suite 3) : faux
// positifs C109 en aval, et SOUS-COMPTAGE du troisieme compteur en amont.
// Perimetre compte le 25/08 (suite) : 68 blocs, 34 fiches, toutes dans
// embarque/mcu/. Ce compteur-ci rend des CLOTURES, pas des blocs : un total
// impair signale une cloture orpheline et non un demi-bloc.
function cloturesEnChevron(texte) {
  let n = 0;
  for (const ligne of texte.split(/\r?\n/)) {
    if (/^\s{0,3}>/.test(ligne) && ligne.includes('```')) n += 1;
  }
  return n;
}

function anneau(rang) {
  const g = graphe();
  const zero = INDEX_FRONT.map((i) => i.replace(/\.md$/, ''));
  for (const rel of zero) {
    if (!existsSync(join(CONTENT, rel.split('/').join(sep)) + '.md')) {
      console.error('Index de depart introuvable : content/' + rel + '.md');
      process.exit(1);
    }
  }

  const vus = new Set(zero);
  let sources = zero;
  let brut = [];
  let net = [];
  let parents = new Map();
  const ambigus = new Set();
  const absents = new Set();

  for (let k = 1; k <= rang; k += 1) {
    const b = new Set();
    parents = new Map();
    for (const src of sources) {
      const l = g.liens(src);
      for (const c of l.cibles) {
        b.add(c);
        if (!parents.has(c)) parents.set(c, new Set());
        parents.get(c).add(src);
      }
      if (k === rang) {
        for (const a of l.ambigus) ambigus.add(a);
        for (const a of l.absents) absents.add(a);
      }
    }
    brut = [...b].sort();
    net = brut.filter((c) => !vus.has(c));
    for (const c of net) vus.add(c);
    sources = net;
  }

  const faits = net.filter((r) => g.traduite(r));
  const restants = net.filter((r) => !g.traduite(r));

  console.log('=== ANNEAU ' + rang + ' ===');
  console.log('  Resolution : chemin complet, puis suffixe de chemin, puis nom de');
  console.log('  fichier UNIQUE. Un nom porte par plusieurs fiches sort en AMBIGU');
  console.log('  et n est jamais ecrase sur une cible unique.');
  console.log('  Mots : regle C110, importee de tools/compter-mots.mjs.');
  console.log('  Liens SORTANTS seuls, embeds exclus.');
  console.log('');
  console.log('  anneau 0 (index de depart)   : ' + zero.length);
  console.log('  sources (anneau ' + (rang - 1) + ')          : ' + (rang === 1 ? zero.length : '(voir NET du rang precedent)'));
  console.log('  cibles BRUTES               : ' + brut.length + '   (au rang 1, --front rend ce chiffre)');
  console.log('  deja vues aux rangs 0..' + (rang - 1) + '     : ' + (brut.length - net.length));
  console.log('  ANNEAU ' + rang + ' NET               : ' + net.length);
  console.log('    deja traduites            : ' + faits.length);
  console.log('    RESTANT                   : ' + restants.length);
  console.log('');

  let mots = 0;
  let fichesChevron = 0;
  let cloturesChevron = 0;
  for (const rel of restants) {
    const texte = g.lire(rel);
    const n = compterMots(texte);
    const ch = cloturesEnChevron(texte);
    mots += n;
    if (ch) {
      fichesChevron += 1;
      cloturesChevron += ch;
    }
    console.log('  ' + rel.padEnd(52) + String(n).padStart(7) + (ch ? '   chevron:' + ch : ''));
  }
  console.log('  ' + '-'.repeat(63));
  console.log('  ' + ('RESTANT DE L ANNEAU ' + rang + ' (' + restants.length + ' fiches)').padEnd(52) + String(mots).padStart(7));

  console.log('');
  console.log('  ANGLE MORT DU CHEVRON sur le restant de cet anneau');
  console.log('    fiches porteuses          : ' + fichesChevron);
  console.log('    clotures en chevron       : ' + cloturesChevron + '   (deux clotures = un bloc)');
  console.log('    -> zero fiche porteuse = le correctif n est pas bloquant pour ce lot.');

  // Une cible dont AUCUN parent n'est traduit est atteignable sur le papier et
  // orpheline a l'ecran : la traduire n'ouvre aucun chemin depuis l'anglais.
  const orphelines = restants.filter((r) => ![...(parents.get(r) || [])].some((p) => g.traduite(p)));
  console.log('');
  console.log('  ATTEIGNABLES PAR AUCUN PARENT TRADUIT (' + orphelines.length + ')');
  if (orphelines.length) {
    for (const r of orphelines) {
      console.log('    ' + r.padEnd(52) + 'via ' + [...(parents.get(r) || [])].join(', '));
    }
    console.log('    -> traduites, elles resteraient sans chemin depuis la zone anglaise.');
  }

  if (ambigus.size) {
    console.log('');
    console.log('  CIBLES AMBIGUES (' + ambigus.size + ') - non comptees, a lever a la main :');
    for (const a of [...ambigus].sort()) console.log('    [[' + a + ']]');
  }
  if (absents.size) {
    console.log('');
    console.log('  CIBLES SANS FICHE (' + absents.size + ') - liens rouges cote francais :');
    for (const a of [...absents].sort()) console.log('    [[' + a + ']]');
  }

  dette(g, vus, rang);
  process.exit(0);
}

// LA DETTE N'EST PAS UN ANNEAU. C'est un ETAT : elle grossit a chaque fiche
// traduite, puisque traduire ouvre les liens sortants de la fiche. Son chiffre
// n'est vrai qu'a l'instant ou il est lu, et ne se reporte pas d'une seance a
// l'autre sans etre remesure.
function dette(g, vus, rang) {
  const sources = g.fiches.map((f) => f.replace(/\.md$/, '')).filter((r) => g.traduite(r));
  const cibles = new Set();
  for (const src of sources) {
    for (const c of g.liens(src).cibles) {
      if (!g.traduite(c)) cibles.add(c);
    }
  }
  const liste = [...cibles].sort();
  let mots = 0;
  for (const r of liste) mots += compterMots(g.lire(r));

  const horsAnneaux = liste.filter((r) => !vus.has(r));

  console.log('');
  console.log('=== DETTE DU FRONT COURANT - CE N EST PAS UN ANNEAU ===');
  console.log('  Sources : les fiches FR ayant une jumelle EN. Cibles : ce qu elles');
  console.log('  visent sans jumelle EN. Autrement dit : les liens ROUGES visibles');
  console.log('  depuis la zone anglaise, draft: false depuis le 22/08 (suite 2).');
  console.log('');
  console.log('  fiches sources (traduites)   : ' + sources.length);
  console.log('  cibles rouges distinctes     : ' + liste.length);
  console.log('  mots                         : ' + mots);
  console.log('  dont HORS anneaux 0..' + rang + '       : ' + horsAnneaux.length);
  if (horsAnneaux.length) {
    console.log('');
    console.log('  Ces cibles-la sont rouges a l ecran et hors du plan par anneaux :');
    for (const r of horsAnneaux) console.log('    ' + r);
  }
}

/* ---------- mode --alt : le quatrieme tamis ---------- */

// L ALT EST BALAYE PAR UN SEUL TAMIS SUR QUATRE (instruit le 29/08 suite 5).
// --style range l alt en hors-perimetre pour les candidats C109 et n y fait
// mordre que le verdict "typographie francaise" ; audit-medias.mjs capture
// l alt dans LIEN_MD mais n audite que le CHEMIN ; --controle ne compare que
// des NOMBRES d embeds. Un alt francais a typographie propre ne declenche
// donc rien, et les deux seuls trouves l ont ete A LA MAIN, en deux seances
// (26/08 suite 4, 29/08 suite 4).
//
// Ce mode compare l alt EN a l alt FR de MEME RANG dans la fiche source et
// rend trois verdicts MECANIQUES. Il n ecrit rien.

// EXEMPTION NOMMEE, une entree par fiche, motif ecrit a cote. Arbitrage Tim
// du 29/08 (suite 5) sur tinkercad : la capture montre a l etudiant ce qui va
// se passer au clic, et RIEN NE BOUGE, alt compris. Les formes francaises qui
// subsistent cote EN - "Creer un nouveau Circuit", "Blocs", "Texte" - sont des
// LIBELLES D INTERFACE INCRUSTES DANS L IMAGE, donc du C113 applique a la
// capture : ce que le programme DESIGNE ne se traduit pas. Sans cette ligne le
// mode remonterait la paire a chaque lancement.
const EXEMPTIONS_ALT = new Map([
  [
    'en/embarque/mcu/arduino/tinkercad-en.md',
    'arbitrage Tim 29/08 (suite 5) : libelles d interface incrustes dans les captures (C113)',
  ],
]);

// Le suffixe de taille d Obsidian "|600" fait partie de l alt BRUT, donc du
// test IDENTIQUE, et doit sortir des tests VIDE et MOT FR : sans cela un alt
// reduit a "|600" passerait pour rempli.
const TAILLE_ALT = /\|\s*\d+\s*$/;

// (a) une lettre latine ACCENTUEE. Un alt anglais n en porte pas, sauf nom
// propre ou libelle d interface - et le second est ce que l exemption couvre.
// CORRECTIF E1 du 29/08 (suite 6). L intervalle A-y contient U+00D7 x et
// U+00F7 /, deux SIGNES MATHEMATIQUES loges au milieu du bloc Latin-1 : il
// criait sur deux alt anglais irreprochables ("3 solutions x 5 weighted
// criteria"). L echantillon nomme ne les portait pas.
const ACCENT_FR = /[À-ÖØ-öø-ÿŒœŸ]/u;

// (b) une LISTE NOMMEE de mots-outils francais (C110 : le motif se teste sur
// un echantillon nomme avant de compter). Elle est PURGEE DES HOMOGRAPHES
// ANGLAIS : a, an, on, in, son, ton, plus, car, or, pas, no, aux, mode, note,
// page, sale, train n y figurent pas, faute de quoi le motif crierait sur de
// l anglais parfaitement correct.
const MOTS_FR = [
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'et', 'ou',
  'dans', 'sur', 'sous', 'avec', 'sans', 'pour', 'vers', 'chez', 'entre',
  'puis', 'donc', 'ainsi', 'alors', 'avant', 'apres', 'pendant', 'depuis',
  'qui', 'que', 'dont', 'quand', 'comme', 'selon', 'lorsque', 'tandis',
  'est', 'sont', 'etait', 'sera', 'ont', 'meme', 'memes',
  'ce', 'cet', 'cette', 'ces', 'leur', 'leurs', 'notre', 'votre', 'nos',
  'vos', 'ses', 'mes', 'tes', 'tout', 'tous', 'toute', 'toutes', 'autre',
  'autres', 'deux', 'trois', 'quatre', 'gauche', 'droite', 'haut', 'bas',
  'ecran', 'fenetre', 'bouton', 'carte', 'fil', 'fils', 'ligne', 'lignes',
  'vue', 'branche', 'branchee', 'allumee', 'eteinte', 'affiche', 'montre',
];
const MOTIF_MOTS_FR = new RegExp(
  '(^|[^\\p{L}])(' + MOTS_FR.join('|') + ')([^\\p{L}]|$)',
  'iu'
);

// L alt et sa cible, dans l ordre du fichier. EMBED est le motif deja en
// service pour le compteur d embeds de --controle : le mode ne reimplemente
// pas ce qu il doit recouper.
function embedsDe(texte) {
  const corps = (frontMatter(texte) || { corps: texte }).corps;
  const sortie = [];
  for (const brut of corps.match(EMBED) || []) {
    const m = /^!\[([\s\S]*)\]\(([^)]*)\)$/.exec(brut);
    if (!m) continue;
    const altBrut = m[1];
    sortie.push({
      brut: altBrut,
      texte: altBrut.replace(TAILLE_ALT, '').trim(),
      cible: m[2].trim(),
    });
  }
  return sortie;
}

function motFrDe(txt) {
  const acc = ACCENT_FR.exec(txt);
  if (acc) return 'accent ' + acc[0];
  const m = MOTIF_MOTS_FR.exec(txt);
  return m ? 'mot ' + m[2] : null;
}

function alt() {
  const fichesEn = walk(join(CONTENT, 'en')).map(versWeb).sort();

  console.log('=== CONTROLE DES ALT (quatrieme tamis) ===');
  console.log('  L alt EN est compare a l alt FR de MEME RANG dans la source.');
  console.log('  IDENTIQUE : l alt EN reproduit l alt FR a l octet (non traduit).');
  console.log('  VIDE      : l alt EN est vide une fois le suffixe |NNN retire.');
  console.log('  MOT FR    : lettre accentuee, ou mot-outil d une liste nommee.');
  console.log('  Le suffixe |NNN entre dans IDENTIQUE, sort des deux autres.');
  console.log('  Exemptions nommees : ' + EXEMPTIONS_ALT.size + ' fiche(s).');
  console.log('');

  let porteuses = 0;
  let embeds = 0;
  let divergentes = 0;
  let sansSource = 0;
  let identiques = 0;
  let vides = 0;
  let motsFr = 0;
  let exemptes = 0;
  let exemptesQuiAuraientMordu = 0;

  for (const relEn of fichesEn) {
    const texteEn = readFileSync(join(CONTENT, relEn.split('/').join(sep)), 'utf8');
    const en = embedsDe(texteEn);
    if (!en.length) continue;
    porteuses += 1;
    embeds += en.length;

    const fmEn = frontMatter(texteEn);
    const mSource = fmEn && fmEn.bloc.match(/^source_fr:\s*(.+?)\s*$/m);
    let fr = [];
    if (!mSource) {
      sansSource += 1;
      console.log('  [?] ' + relEn + ' : pas de source_fr, comparaison impossible');
    } else {
      const absFr = join(CONTENT, mSource[1].split('/').join(sep));
      if (existsSync(absFr)) {
        fr = embedsDe(readFileSync(absFr, 'utf8'));
      } else {
        sansSource += 1;
        console.log('  [?] ' + relEn + ' : source introuvable (' + mSource[1] + ')');
      }
    }

    const exempt = EXEMPTIONS_ALT.get(relEn);
    const lignes = [];
    if (fr.length && fr.length !== en.length) {
      divergentes += 1;
      lignes.push('      DIVERGENCE de nombre : FR ' + fr.length + ' / EN ' + en.length);
    }

    for (let i = 0; i < en.length; i += 1) {
      const a = en[i];
      const b = fr[i];
      const causes = [];
      if (a.texte === '') causes.push('VIDE');
      else if (b && a.brut === b.brut) causes.push('IDENTIQUE');
      const mf = a.texte === '' ? null : motFrDe(a.texte);
      if (mf) causes.push('MOT FR (' + mf + ')');
      if (!causes.length) continue;

      if (exempt) {
        exemptesQuiAuraientMordu += 1;
        continue;
      }
      for (const c of causes) {
        if (c === 'VIDE') vides += 1;
        else if (c === 'IDENTIQUE') identiques += 1;
        else motsFr += 1;
      }
      lignes.push('      #' + (i + 1) + '  ' + causes.join(' + '));
      lignes.push('          EN  ' + JSON.stringify(a.brut));
      lignes.push('          FR  ' + (b ? JSON.stringify(b.brut) : '(pas de rang correspondant)'));
      lignes.push('          ->  ' + a.cible);
    }

    if (exempt) {
      exemptes += en.length;
      console.log('  [exempte] ' + relEn + '   ' + en.length + ' embed(s) - ' + exempt);
      continue;
    }
    if (lignes.length) {
      console.log('  [!] ' + relEn);
      for (const l of lignes) console.log(l);
    }
  }

  const verdicts = identiques + vides + motsFr;
  console.log('');
  console.log('  fiches EN balayees : ' + fichesEn.length + '   porteuses d embed : ' + porteuses + '   embeds : ' + embeds);
  console.log('  paires a nombre d embeds divergent : ' + divergentes + '   sans source exploitable : ' + sansSource);
  console.log('  IDENTIQUE : ' + identiques + '   VIDE : ' + vides + '   MOT FR : ' + motsFr + '   (total ' + verdicts + ', hors exemptions)');
  console.log('  exemptes : ' + exemptes + ' embed(s), dont ' + exemptesQuiAuraientMordu + ' auraient declenche');
  process.exit(verdicts ? 1 : 0);
}

/* ---------- point d'entree ---------- */

if (RECETTE) {
  recette();
} else if (STYLE) {
  style(
    cibles.length
      ? cibles.map((c) => c.replace(/^content\//, '').split(sep).join('/'))
      : walk(join(CONTENT, 'en')).map(versWeb).sort()
  );
} else if (LIBELLES) {
  libelles();
} else if (ALT) {
  alt();
} else if (FRONT) {
  front();
} else if (ANNEAU) {
  anneau(RANG);
} else if (CONTROLE) {
  controle();
} else if (CORPS) {
  if (cibles.length !== 2) {
    console.error('Usage : node tools/creer-fiche-en.mjs --corps <fiche EN> <fichier de corps>');
    process.exit(1);
  }
  corpsSeul(cibles[0].replace(/^content\//, '').split(sep).join('/'), cibles[1]);
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
  console.error('        node tools/creer-fiche-en.mjs --corps <fiche EN> <fichier de corps>');
  console.error('        node tools/creer-fiche-en.mjs --style [fiche...]');
  console.error('        node tools/creer-fiche-en.mjs --libelles');
  console.error('        node tools/creer-fiche-en.mjs --alt');
  console.error('        node tools/creer-fiche-en.mjs --front');
  console.error('        node tools/creer-fiche-en.mjs --anneau <N>   (N=1 reproduit --front)');
  process.exit(1);
} else {
  traiter(cible.replace(/^content\//, '').split(sep).join('/'));
}
