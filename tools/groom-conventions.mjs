#!/usr/bin/env node
/**
 * groom-conventions.mjs — Grooming du §8 de conventions.md
 *
 * Deux operations, decidees hors script et listees en configuration ci-dessous :
 *
 *   1. PROMUES    retire du §8 les conventions promues vers les sections
 *                 numerotees. Leur formulation seche a ete ecrite a la main
 *                 dans §1/§2/§3/§6 AVANT de lancer ce script.
 *   2. CONDENSES  remplace un bloc d'acquisition entier par un pointeur court.
 *                 Vise les blocs anciens sans convention numerotee, dont le
 *                 detail vit deja au JOURNAL.
 *
 * Pourquoi un script : le §8 pese 127 ko et sa prose contient des ECHAPPEMENTS
 * LITTERAUX (antislash-u d'un incident d'encodage, pipe echappe de wikilink en
 * tableau) que le newText d'edit_file interpreterait. Ici, decoupe de chaine
 * brute — zero interpretation. Meme motif que archive-journal-*.mjs.
 *
 * Usage :
 *   node tools/groom-conventions.mjs --dry     rapport, rien n'est ecrit
 *   node tools/groom-conventions.mjs           applique
 *
 * Fail-safe : toute cible introuvable, trouvee plusieurs fois, ou dont la
 * coupe depasse la taille plausible declenche exit 1 SANS RIEN ECRIRE.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const FICHIER = join(process.cwd(), 'conventions.md');
const DRY = process.argv.includes('--dry');

// Conventions promues vers les sections numerotees le 18/08.
const PROMUES = [10, 62, 64, 65, 66, 68, 69, 71, 73, 74, 77, 78, 79, 80, 81, 84];

// Destination de chacune, pour le bloc de trace laisse en fin de §8.
const DESTINATIONS = {
  10: '§2 (deja promue le 26/05 — entree §8 en doublon)',
  62: '§2 Mise en forme',
  64: '§6 Publication / Quartz',
  65: '§1 Redaction',
  66: '§2 Mise en forme',
  68: '§3 Images & SVG',
  69: '§3 Images & SVG',
  71: '§1 Redaction',
  73: '§3 Images & SVG',
  74: '§3 Images & SVG',
  77: '§2 Mise en forme',
  78: '§3 Images & SVG',
  79: '§3 Images & SVG',
  80: '§3 Images & SVG',
  81: '§3 Images & SVG',
  84: '§3 Images & SVG',
};

// Blocs condenses en pointeur. `ancre` = debut du titre ###, unique dans le §8.
const CONDENSES = [
  {
    ancre: '### Acquises 25/05 suite 8 (à capitaliser)',
    remplacement: `### Acquises 25/05 suite 8 — chaîne C14 (CONDENSÉE)

14. **Seuil pratique MCP \`write_file\`/\`edit_file\` ≈ 30 ko de payload.** Au-delà, l'appel peut échouer **silencieusement** : le tool call semble réussir, le fichier est inchangé. Discipline : vérifier avec \`get_file_info\` après toute écriture lourde ; pour une opération massive (archivage, refonte, batch inter-fichiers), passer par un **script Node** plutôt que par MCP.

*Les cinq compléments 26/05 → 28/05 sont condensés ici ; détail complet au JOURNAL archivé.* Cinq modes d'échec d'anchor distincts ont été identifiés, tous à symptôme voisin (mismatch silencieux) : **typo de transcription** (d'où la règle de recopier \`oldText\` depuis une lecture fraîche, jamais de mémoire) ; **artefact U+FFFD** quand la troncature \`head\`/\`tail\` coupe une séquence UTF-8 — éviter d'ancrer sur les 1-2 dernières lignes du buffer ; **verrou Windows EPERM** quand Obsidian tient le fichier ouvert (erreur explicite, remède : changer d'onglet) ; **atomicité des multi-edits** — un anchor manquant annule tout le batch, donc appel séparé dès qu'un edit est ambitieux ; **NBSP U+202F**, dont l'attribution à Obsidian a été **testée et réfutée le 28/05** (aucune source active dans le flux réel ; \`normalize-pilotage.js\` + hook restent un filet contre le collage web, pas un remède à une injection systématique). Le **pattern MARKER + N segments** reste documenté pour un déplacement de bloc lourd via MCP, mais le script Node l'a supplanté en pratique.`,
  },
  {
    ancre: '### Acquises 07/06 (suite) — module SBC Raspberry Pi',
    remplacement: `### Acquises 07/06 (suite) — module SBC Raspberry Pi (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* Le module Raspberry Pi est le **premier SBC** et fournit le **contre-cas de C57** (§6) : une plateforme à paradigme distinct **et non transposable** ne se clone pas, elle reçoit une structure propre. Il fournit aussi la **3ᵉ frontière de délégation C55** (sysadmin Linux pur délégué, prise en main bornée au shell headless + Python) et un **+1 à C23** (fil rouge bras 3 axes sur une fiche de phase concept). Le lien rouge \`[[raspberry-pi]]\` a été résolu par la seule création du hub — avec cette famille, le panorama \`microcontroleur\` n'avait plus aucun lien-famille rouge.`,
  },
  {
    ancre: '### Acquises 10/06 (suite) — réorganisation physique en 3 branches',
    remplacement: `### Acquises 10/06 (suite) — réorganisation physique en 3 branches (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* **C60 révisée** : les 3 branches sont devenues des **dossiers physiques** (\`content/conduite/\`, \`content/embarque/\`, \`content/meca/\`, option « la branche EST son hub »), le non-déplacement initial reposant sur des raisons caduques avant publication. Conséquences traitées à l'époque : 32 wikilinks d'index repointés en **forme chemin-complet-depuis-\`content/\`**, seule forme qui résout pour un \`x/index\` ; \`quartz.layout.ts\` masquant \`ressources\`. État courant du dépôt, plus une convention en épreuve.`,
  },
  {
    ancre: '### Acquises 13/06 — relecture branche Méca',
    remplacement: `### Acquises 13/06 — relecture branches Méca et ESE (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* Les deux branches d'interface ont validé **C58** (pointeur d'interface léger) sur 14 fiches sans accroc — motif **promotion-ready**, à arbitrer. Deux acquis de portée générale en sont sortis. **Nuance de C65** : le « tu » marque l'adresse à l'étudiant **qui réalise**, pas tout hub de branche — un hub-sommaire d'interface ou un hub-parcours reste en « on », parce qu'il recense ou décrit au lieu de guider un geste. **Vérifier l'existant avant de poser une réciproque** : lire la *Voir aussi* de la fiche cible avant d'y ajouter un lien retour (C14 appliqué aux liens). Note de forme : un index navigationnel ne porte **pas de champ \`type\`**.`,
  },
  {
    ancre: '### Acquises 13/06 (suite) — relecture branche ESE',
    remplacement: '',
  },
  {
    ancre: '### Acquises 17/06 (suite 3) — relecture §7 Arduino terminée',
    remplacement: `### Acquises 17/06 (suite 3) — fin du §7 Arduino (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* Trois acquis retenus. **Note de portabilité « familles MCU »** (affinement de C47) : quand une fiche traite un mécanisme dont l'API est propre à l'AVR et qu'aucune fiche famille cible n'existe, on ajoute une note brève — le principe reste le même, seule l'API change — close par un renvoi, au lieu de détailler les autres familles. C'est le pendant « sortant » de C47, qui délègue quand la cible existe. **Créer une notion mère seulement si le concept est transverse et substantiel** : \`asservissement\` a été créée pour \`arduino-pid\`, alors que \`arduino-watchdog\` s'appuie légitimement sur \`[[timer]]\`. **Les notions transverses systèmes/contrôle** se rangent à la racine de \`content/embarque/\`, près de \`schema-bloc-fonctionnel\` et \`chaine-energie\`.`,
  },
  {
    ancre: '### Acquises 27/06 — relecture/correction des médias familles MCU',
    remplacement: `### Acquises 27/06 — régénération des médias familles MCU (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* Session de bouclage de **C81** (§3) : les 6 SVG flaggés divergents le 25/06 ont été régénérés contre le code réel de leur fiche, puis validés au rendu. Trois acquis de forme en sont sortis. **Un SVG mal ciblé se déplace, il ne se régénère pas** — \`create_directory\` + \`move_file\` vers le dossier-slug de la vraie fiche (C73), puis embed. **Attribution d'une image tierce** = légende italique sous l'embed, \`*Source : <détenteur> — <licence>, image non modifiée.*\` (extension de C74-c). **« Acceptable au rendu » n'est pas « définitif »** : une réserve esthétique va au peigne SVG, jamais en blocage d'intégration.`,
  },
  {
    ancre: '### Acquises 30/06 (suite) — MAJ documentaire',
    remplacement: `### Acquises 30/06 (suite) — archivage de masse du JOURNAL (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* **Déplacer un bloc lourd se fait par script Node fail-safe, jamais par une séquence d'\`edit_file\`.** Le déclencheur décisif n'est pas la taille mais la présence d'**échappements littéraux** dans la prose — antislash-u, antislash-n, pipe échappé de wikilink — que le \`newText\` d'\`edit_file\` **interprète**, corrompant silencieusement la cible. Le script fait une **découpe de chaîne brute** (zéro interprétation), avec garde fail-safe (ancre manquante → \`exit 1\` sans rien écrire), écriture de la destination d'abord, sauvegarde \`.bak\` et report des tailles. Motif éprouvé trois fois : \`archive-journal-0607.mjs\`, \`archive-journal-0630.mjs\`, puis \`groom-todo.mjs\` et \`groom-conventions.mjs\` le 18/08.`,
  },
];

const texte = readFileSync(FICHIER, 'utf8');
const ko = (n) => (n / 1024).toFixed(1) + ' ko';

/* ---------- bornes du §8 ---------- */

const debut8 = texte.search(/^## 8\. /m);
if (debut8 < 0) {
  console.error('ABANDON : titre « ## 8. » introuvable.');
  process.exit(1);
}
const finRelative = texte.slice(debut8).search(/^## Annexe/m);
if (finRelative < 0) {
  console.error('ABANDON : « ## Annexe » introuvable — impossible de borner le §8.');
  process.exit(1);
}
const fin8 = debut8 + finRelative;

let section8 = texte.slice(debut8, fin8);
const taille8Avant = section8.length;

/* ---------- 1. retrait des conventions promues ---------- */

// Fin d'une entree numerotee : prochaine entree, prochain bloc, ou prochain
// paragraphe de notes. L'indentation protege les sous-paragraphes internes.
const BORNE = /^(\d+\. |### |Notes? |Épreuves |\*Sept blocs)/m;

const retraits = [];
for (const n of PROMUES) {
  const debutRe = new RegExp('^' + n + '\\. \\*\\*', 'm');
  const occurrences = [...section8.matchAll(new RegExp(debutRe.source, 'gm'))];

  if (occurrences.length !== 1) {
    console.error(
      'ABANDON : la convention ' + n + ' apparait ' + occurrences.length + ' fois dans le §8 (1 attendue).'
    );
    process.exit(1);
  }

  const debut = occurrences[0].index;
  const apres = section8.slice(debut);

  // La recherche de borne DOIT partir de la 2e ligne. En partant du 2e
  // caractere, "10. **Titre" devient "0. **Titre", que la borne reconnait
  // aussitot comme une nouvelle entree numerotee : coupe d'un octet, retrait
  // silencieusement vide. Bug reel, attrape au --dry par un "0.0 ko".
  const finPremiereLigne = apres.indexOf('\n');
  if (finPremiereLigne < 0) {
    console.error('ABANDON : convention ' + n + ' sans fin de ligne.');
    process.exit(1);
  }
  const suite = apres.slice(finPremiereLigne).search(BORNE);
  if (suite < 0) {
    console.error('ABANDON : pas de borne de fin pour la convention ' + n + '.');
    process.exit(1);
  }
  const longueur = finPremiereLigne + suite;

  // Une entree de convention fait toujours plusieurs centaines d'octets :
  // une coupe minuscule signale une borne mal calculee, pas une entree courte.
  if (longueur < 200) {
    console.error('ABANDON : coupe suspecte pour la convention ' + n + ' (' + longueur + ' octets).');
    process.exit(1);
  }

  if (longueur > 9000) {
    console.error('ABANDON : coupe implausible pour la convention ' + n + ' (' + longueur + ' octets).');
    process.exit(1);
  }

  retraits.push({ n, longueur, extrait: section8.slice(debut, debut + 90).replace(/\n/g, ' ') });
  section8 = section8.slice(0, debut) + section8.slice(debut + longueur);
}

/* ---------- 2. condensation des blocs ---------- */

const condenses = [];
for (const c of CONDENSES) {
  const debut = section8.indexOf(c.ancre);
  if (debut < 0) {
    console.error('ABANDON : bloc introuvable — ' + c.ancre);
    process.exit(1);
  }
  if (section8.indexOf(c.ancre, debut + 1) >= 0) {
    console.error('ABANDON : bloc trouve plusieurs fois — ' + c.ancre);
    process.exit(1);
  }

  const apres = section8.slice(debut + c.ancre.length);
  const suite = apres.search(/^### /m);
  if (suite < 0) {
    console.error('ABANDON : pas de bloc suivant apres — ' + c.ancre);
    process.exit(1);
  }
  const longueur = c.ancre.length + suite;

  condenses.push({
    ancre: c.ancre,
    avant: longueur,
    apres: c.remplacement.length,
  });

  const remplacement = c.remplacement ? c.remplacement + '\n\n' : '';
  section8 = section8.slice(0, debut) + remplacement + section8.slice(debut + longueur);
}

/* ---------- 3. bloc de trace ---------- */

const lignes = PROMUES.sort((a, b) => a - b).map(
  (n) => '- **C' + n + '** → ' + DESTINATIONS[n]
);

const trace =
  '### Promues le 18/08 (trace)\n\n' +
  'Seize conventions sorties du §8 vers les sections numérotées. Critère retenu : ' +
  'appartenance à la liste des **contrôles d\'office** citée à chaque ouverture de session — ' +
  'une convention qu\'on applique systématiquement n\'est plus en épreuve. Le marqueur ' +
  '« Éprouvée x/N » s\'est révélé peu fiable, n\'étant mis à jour que quand on y pense ' +
  '(C71 portait encore « 1/N » après sept modules). L\'historique d\'épreuve de chacune ' +
  'reste au JOURNAL.\n\n' +
  lignes.join('\n') +
  '\n\n';

const ancreAutres = '### Autres en attente';
const posAutres = section8.indexOf(ancreAutres);
if (posAutres < 0) {
  console.error('ABANDON : « ### Autres en attente » introuvable, impossible de placer la trace.');
  process.exit(1);
}
section8 = section8.slice(0, posAutres) + trace + section8.slice(posAutres);

/* ---------- rapport ---------- */

const resultat = texte.slice(0, debut8) + section8 + texte.slice(fin8);

console.log('=== GROOMING conventions.md §8 ===');
console.log('');
console.log('  CONVENTIONS RETIREES (promues) :');
for (const r of retraits) console.log('    -' + ko(r.longueur).padStart(9) + '  ' + r.extrait);
console.log('');
console.log('  BLOCS CONDENSES :');
for (const c of condenses) {
  console.log('    ' + ko(c.avant).padStart(9) + ' -> ' + ko(c.apres).padStart(9) + '  ' + c.ancre);
}
console.log('');
console.log('  §8 avant          : ' + ko(taille8Avant));
console.log('  §8 apres          : ' + ko(section8.length));
console.log('  fichier avant     : ' + ko(texte.length));
console.log('  fichier apres     : ' + ko(resultat.length));

if (DRY) {
  console.log('');
  console.log('  --dry : RIEN N\'A ETE ECRIT.');
  process.exit(0);
}

writeFileSync(FICHIER + '.bak', texte, 'utf8');
writeFileSync(FICHIER, resultat, 'utf8');
console.log('');
console.log('  Ecrit. Sauvegarde : conventions.md.bak (gitignore, a supprimer apres verification).');
