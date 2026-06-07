# CONVENTIONS — TheSkillCodex

> Fichier privé (non publié). Règles éditoriales en vigueur sur le projet.
> Dates entre parenthèses = session d'acquisition. Mise à jour ponctuelle.

Ce fichier centralise les conventions stabilisées. Le prompt projet décrit
*comment Claude travaille* (procédure, niveaux d'autonomie, démarrage de
session) ; ce fichier décrit *les règles éditoriales à appliquer* (vocabulaire,
mise en forme, images, structure des fiches).

Section [En cours d'éprouvage](#7-en-cours-déprouvage) en fin de fichier pour
les conventions récentes pas encore confirmées sur 2-3 fiches.

---

## 1. Rédaction

### Termes proscrits (22/05)
- « **Dérisquer** » (anglicisme non français) → « lever une incertitude » /
  « valider le fonctionnement »
- « **Point dur** » → « incertitude »
- « **Phase N** » en prose → noms en toutes lettres (« phase de concept »,
  « spécification technique », etc.). La forme courte « phase N » est réservée
  aux contextes structurels (titres de section, schéma du V).
- « **Soutenance intermédiaire** » → « **revue de CdCF** » pour désigner le
  jalon de validation enseignante de fin de phase 1 (24/05).

### Conventions générales de prose (25/05)
- **Pas d'extension `.md` dans la prose**. Citer une fiche par son titre ou
  son wiki-link, pas par son nom de fichier.
- **Listes numérotées `1/2/3`** plutôt que `(i)(ii)(iii)` ou autres romaines.
- **Pas de chiffrage de durée de projet en prose générique** (« sur les
  15 semaines », « pendant 4 mois »). Le calendrier est porté par les
  exemples concrets, pas par la trame générique. La trame doit rester
  réutilisable.
- Pour les exemples bras 3 axes : référence semaine par `**semaine n°X**`.

### Distinction « phase » vs « étape » (22/05)
Dans la prose des fiches-trame, **« étape »** désigne les sous-temps internes
d'une phase (étape 1, étape 2…). **« Phase »** est réservé aux 5 phases
structurelles du cycle en V. Cette distinction évite la confusion fréquente
en cours de rédaction.

---

## 2. Mise en forme

### Politique du gras (19/05, raffinée 25/05)
- Gras **uniquement sur concepts-clé en 1ère occurrence** dans une fiche.
- **Exception structurelle** : gras tolérable sur têtes de paragraphes-pièges
  (`**Piège court.** Phrase d'explication.`) et mots de scan dans listes à
  puces.
- **Gras sur morceau de phrase, pas sur verbe isolé** (25/05). Le gras
  marque un concept, pas une action.

### Titres et structure (19/05)
- **Pas de H1 dans le corps des fiches** : Quartz génère le titre depuis le
  front matter. Le corps commence par le popover (première phrase = définition
  de la notion).
- **Première phrase = définition autoportante** de la notion. Sert de popover
  automatique au survol des wiki-links.

### Apartés étudiants (19/05)
Intégrés en *italique* dans le texte. Pas de callout dédié pour ce genre
d'aparté (réserver les callouts à la sémantique structurée).

### Justification (19/05)
Justifiée sur écran large avec césure automatique, drapeau sur smartphone
(<600px). Géré dans `quartz/styles/custom.scss`.

### Callouts — charte v2.1 (22/05 suite + révision 23/05)
Charte graphique : 8 callouts × (couleur fond + couleur titre/filet). Voir
`templates/callouts.md` pour le détail visuel et la palette.

**Densité par fiche** : 0-3 par défaut, exception assumée pour les fiches-trame
(5-10).

**Convention « 1 callout `[!livrable]` par étape »** dans les fiches-trame
(22/05).

**Titres conventionnels par type de callout** :
| Callout | Titre | Phrase-clé |
|---|---|---|
| `[!example]` | `Exemple : projet bras 3 axes` (ou `<cas>`) | — |
| `[!livrable]` | `Livrable N/X — <Nom de la phase>` | — |
| `[!warning]` | `Attention` | en gras dans le corps |
| `[!tip]` | `Astuce` | en gras dans le corps |
| `[!info]` | (libre) | — |
| `[!failure]` | (libre, ex. « Contre-exemple ») | — |

**Mode sombre** : non décliné délibérément, à traiter dans une session
ultérieure quand recul d'usage suffisant.

### Convention « matrice incarnée dans `[!example]` » des fiches-trame (25/05 suite 4-8, promue 26/05)

Dans les fiches-trame du V, chaque `[!example]` doit incarner la méthode de l'étape par un **objet structuré** — matrice, tableau, liste numérotée, TdM, BOM, relevé de mesures, énumération de bons de commande, etc. — avec **valeurs chiffrées ou récapitulatives** et **décision/sortie tracée**. L'objet structuré porte la démonstration, pas une narration floue. Éprouvée sur **12 contextes** : concept (4), preuve-de-concept (4), dossier-technique (4).

### Triptyque mauvais / moyen / bon (27/05 suite)

Pour les fiches-notion ou fiches-tuto qui décrivent un **outil d'analyse fonctionnelle** ou **un format d'énoncé** (bête à cornes, caractériser une exigence, décomposition fonctionnelle…), illustrer la qualité d'écriture par un **triptyque** de 3 callouts côte à côte avec un même cas concret décliné en 3 niveaux :

- `[!failure]` **Mauvais** — une formulation typiquement défaillante, suivie d'un paragraphe *Pourquoi c'est mauvais* + optionnellement *Coût réel de cette erreur* qui ancre la conséquence dans le projet.
- `[!warning]` **Moyen** — une formulation honnête mais incomplète, suivie d'un paragraphe *Pourquoi c'est moyen* qui pointe les faiblesses résiduelles.
- `[!example]` **Bon** — la formulation cible, suivie d'un paragraphe *Pourquoi c'est bon* qui justifie chaque ajustement par rapport au moyen.

Support graphique selon nature de la notion : SVG (outils graphiques comme bête à cornes, décomposition fonctionnelle) ou tableau markdown (outils textuels comme caractériser une exigence). Éprouvé sur 3 fiches : `bete-a-cornes` (25/05 suite 2), `caracteriser-une-exigence` (26/05 suite 5), `decomposition-fonctionnelle` (27/05 suite).

### Popovers et wiki-links
- **Approche A** : liens directs `[[notion]]`, le rouge sert de TODO list
  (19/05). Pas de génération automatique de stubs vides.
- **Wiki-link à la 1ère occurrence** de chaque section / sous-section /
  callout (25/05). Re-déclencher au changement de contexte permet au lecteur
  qui arrive par scan de bénéficier du popover. **Mode d'application
  (25/05 suite 7)** : au fil de la rédaction quand la discipline est
  acquise, complété par une passe dédiée finale comme filet de sécurité.
- **Popovers seulement sur sigles génériques** (FP/FS/FC), pas sur les
  instances numérotées (FP1, FS1…) (23/05 suite 2).
- **Alias Quartz CrawlLinks** = mécanisme léger pour facettes indissociables
  d'un outil plus large (ex. aliases `[FP, FS, FC]` dans `fonction.md`).
  Distinction structurante : notion autoportante → fiche-notion ;
  facette indissociable → alias (23/05 suite 2).

---

## 3. Images & SVG

### Politique de stockage
Tous les SVG et autres médias dans `content/ressources/img/`.

### Palette et style SVG
- Palette : ambre `#BA7517` / gris `#DDDBD3`, alignée sur
  `pieuvre-generique.svg`.
- Support `@media (prefers-color-scheme: dark)`.
- Classes CSS standard : `.th .tl .tf .b-amber-fill .b-amber-text
  .b-gray-fill .b-gray-text`.
- `viewBox` variable selon le type d'image.

### Nommage (25/05 suite 2)
- `<nom-fiche>-generique.svg` : version abstraite, valeurs symboliques.
- `<nom-fiche>-<cas>.svg` : version incarnée sur un cas concret (ex.
  `wbs-station-meteo.svg`, `pieuvre-bras-3-axes.svg`).

### Convention « 2 images par fiche-notion d'outil méthodologique » (25/05 suite 2)
Pour les fiches-notion qui décrivent un **outil méthodologique** (pieuvre,
bête à cornes, jalons, WBS, Gantt, matrice de risques/décision, etc.) :

- **Image générique** placée juste après le popover, avant la section
  « À quoi ça sert ? ». Schéma abstrait avec valeurs symboliques
  (Solution A/B/C, Milieu 1/2/3, etc.).
- **Image exemple avec valeurs concrètes** placée dans la section
  « Comment ... », après la méthode, précédée d'une phrase d'amorce en
  italique (« *Illustration sur un cas concret : …* »).

Articulation avec les fiches-notion qui ont une section *Exemple* dédiée
(`pieuvre.md`, `bete-a-cornes.md`) : l'image-exemple va dans la section
*Exemple*, pas dans *Comment*. Voir section *En cours d'éprouvage*.

### Convention SVG pieuvre (24/05 suite 2)
Forme rayonnante classique (convention AFNOR/France). Tous les liens du même
style, étiquettes Fx visibles sur chaque trait. **Distinction FP/FS/FC par
topologie** (FP/FS traversantes / FC rayonnantes) **et numérotation**, pas
par style de trait.

### Production
Claude produit en **premier jet**. L'**affinage visuel reste à l'utilisateur**
(peigne fin avant publication aux élèves, listé dans le BACKLOG section
« Améliorations site / Quartz »). Concerne : alignements, hauteurs de lignes,
positionnements de textes proches des bords, lisibilité smartphone.

### Convention SVG pour fiches-trame
- Schéma générique dans la trame elle-même.
- Exemple bras 3 axes dans le callout `[!example]` correspondant.

---

## 4. Cas d'illustration / fils rouges

### Fil rouge des fiches-trame (22/05)
**Bras robotique pédagogique 3 axes**. Cadrage figé : architecture,
incertitudes, critères CdCF chiffrés. Compromis simplicité + mécatronique
canonique + ancrage par un étudiant disponible pour relecture.

### Fil rouge alternatif (fiches-notion d'outils) (25/05 suite 2)
**Station météo connectée**. Projet école générique, cohérent inter-fiches
sur 15 semaines avec mêmes jalons Sem. 2 / 5 / 9 / 12 / 15. À élargir à
d'autres cas (arrosage automatique, alarme connectée) si besoin.

### Convention de coexistence (22/05)
Les fiches-notion historiques (comme `bete-a-cornes.md` sur bras 6 axes)
conservent leur cas autonome sans retravail rétroactif. Pas d'alignement
systématique sur le fil rouge — l'alignement se fait à l'occasion d'un
approfondissement.

### Triptyque mauvais / moyen / bon

**Promu vers § 2 le 27/05 suite** après épreuve 3/N réussie. Voir § 2 *Triptyque mauvais / moyen / bon* pour la formulation définitive. Entrée § 4 conservée pour traçabilité historique (la convention a émergé sur `bete-a-cornes.md` comme illustration *qualité d'écriture d'un même cas*, fonction proche d'un fil rouge interne à la fiche).

---

## 5. Collaboration — niveaux d'autonomie

### Briques de réponse — A / B / C / D (27/05 suite 3)

Découpage par **forme de communication**, pas par jauge de longueur. La forme
borne naturellement le texte. Les briques sont **combinables** dans une même
réponse, pas des modes exclusifs.

- **A — Fait.** Action MCP + 1 phrase de signal (« Fait. » éventuellement
  précisé). Pas d'annonce préalable, pas de récap après.
- **B — Questions.** Liste de questions pour lever doute sur le besoin.
  Format scannable.
- **C — Procédure utilisateur.** Bullet points listant ce que l'utilisateur
  doit faire (étapes manuelles, patches côté Claude.ai, choix à effectuer).
- **D — Explication.** Prose argumentée pour développer un concept, comparer
  des options, proposer une refonte. Détail élevé assumé.

Combinaisons typiques : A+C (j'ai fait ma part, voici la tienne), B avant
action (questions puis exécution en A), D+B (argument + arbitrages à valider).

**Règle de défaut implicite** : si une brique n'est pas explicitement requise
par la situation, ne pas l'ajouter. Pas d'annonce préalable avant A (sauf
go/no-go pour action très lourde). Pas d'explication accolée à un patch
trivial.

**Topics qui forcent D obligatoirement** : nouvelle convention, choix
structurant sur le parcours, référentiel AA, pédagogie de fond, vocabulaire
à proscrire, posture étudiante. Sinon Claude risque de répondre en A là où
il fallait argumenter.

Patch parallèle dans le prompt projet § 10 (à appliquer côté Claude.ai).

### Livraison rédigée — pas de placeholders (25/05 suite 2)
Toute livraison de contenu se fait en **texte rédigé**. Un placeholder
italique entre crochets (`*[À rédiger — ...]*`) n'est pas une livraison —
c'est un aveu de travail non fait. La forme italique avec indications
méthodologiques n'est admissible qu'avec signalement explicite de manque de
matière, et uniquement comme étape de transition vers un round 2 de
rédaction.

**Modèles cibles** :
- Fiche-notion brève : `fonction.md` (court mais rédigé).
- Fiche-notion complète : `bete-a-cornes.md`.

Une fiche stub existante (comme `pieuvre.md` avant son approfondissement du
25/05 suite 2) n'est **pas** un modèle cible — c'est une fiche à finir.

### Relire les sections amont avant de rédiger une section avale (26/05, promue depuis § 7)

Avant d'attaquer une section avale (étape, Pièges, Équipe, Conclusion), passer en lecture rapide les sections amont déjà rédigées (Posture, Objectif, étapes précédentes). Le coût en temps est minime, le bénéfice est l'évitement de doublons sémantiques qui passent inaperçus en rédaction continue mais ressortent en round 2 utilisateur.

Discipline issue de la leçon « ±2 phrases de contexte » (25/05 suite 6) étendue à toutes les sections amont. Éprouvée 2/2 : 25/05 suite 8 (dossier-technique) et 26/05 (integration-et-tests) sans phase de relecture utilisateur sur sections amont. Complément naturel à la convention de relecture critique (phase de relecture utilisateur ci-dessous) : convention 13 réduit le travail à conduire en phase de relecture utilisateur.

### Phase de relecture utilisateur
Garde-fou : l'utilisateur conduit une passe de relecture critique après toute
production substantielle, pour identifier les ajustements à apporter.

---

## 6. Publication / Quartz

### Convention `draft: false` par défaut (24/05 suite 2)
Pilotage de la maturité éditoriale par le **BACKLOG** (inventaire systématique
des stubs/placeholders avant publication aux élèves), pas par le flag `draft`.
Justification : Quartz est encore privé, le filtre n'a pas d'utilité
opérationnelle et crée plus de friction (popovers cassés) que de bénéfice.

### Workflow Git — commit/push systématique en fin de session (acquis 26/05 suite 3)

L'utilisateur effectue le **commit et push** systématiquement en fin de session, **après le dernier prompt de Claude**. Ne pas inscrire le commit/push de la session courante (ni des sessions précédentes) comme tâche en attente dans le TODO — c'est un workflow utilisateur automatique, pas une dette technique.

**Pour Claude en cours de session** : ne pas ajouter d'entrée « Commit + push de la session du JJ/MM » dans la section *Tâches techniques en suspens* du TODO. La section *Rattrapage commits + pushs en retard* a été nettoyée le 26/05 suite 3 et ne doit plus être alimentée. Le suivi des commits relève de Git (`git log`), pas du TODO.

**Pour Claude en début de session** : si une question se pose sur l'état du commit, vérifier directement avec `git log` ou demander à l'utilisateur, pas présupposer un retard. Capitalisation 26/05 suite 3 : la session précédente du même jour avait remonté ~10 entrées de retard fantasmées, alors que tous les commits avaient été faits.

### Archivage JOURNAL à la session suivante immédiate (acquise 27/05 suite 5)

À chaque fin de session, après insertion de la nouvelle entrée JOURNAL
en tête au marker `<!-- INSERT_JOURNAL_HERE -->`, Claude archive **une
entrée** vers `JOURNAL-archive.md` : la session la plus ancienne du
JOURNAL principal (en pied de fichier).

**Procédure** :
1. Lire le pied du JOURNAL via `read_text_file tail=N` pour copier
   l'anchor avec exactitude (cf. C14 § 8).
2. Couper l'entrée du JOURNAL via `filesystem:edit_file` (oldText =
   bloc entrée complet incluant le séparateur `---` qui suit).
3. Insérer l'entrée en tête de `JOURNAL-archive.md` via
   `filesystem:edit_file` (anchor sur la première entrée existante
   de l'archive, juste après l'intro du fichier).

**Conditions techniques** :
- Une entrée seule reste sous 20 ko (format hybride C21 cible 3-5 ko).
  Pas de pattern MARKER + N segments nécessaire — sous le seuil 30 ko
  de C14, 2 appels `edit_file` suffisent.
- Coût typique : ~3 tool calls (1 tail + 2 edits) vs ~10 pour un
  archivage de masse au seuil 100 ko.

**Justification** : flux 1-pour-1 (1 entrée ajoutée en tête, 1 entrée
déplacée en archive) stabilise la taille du JOURNAL principal autour
de sa valeur courante (~38 ko au 27/05 suite 5). Évite l'accumulation
qui force un archivage de masse coûteux quand le seuil 100 ko est
franchi (pattern MARKER + N segments, durée MCP × 5-10 par rapport au
flux courant).

**Cas où sauter l'archivage** :
- JOURNAL notablement court (< 25 ko) après archivage de masse récent
  — préserver un peu d'historique récent à portée de lecture initiale.
- Entrée la plus ancienne référencée explicitement dans le prompt de
  lancement de la session courante (l'archiver casserait la lecture
  Cas A). Vérifier le prompt avant d'archiver.

Décision finale à prendre en fin de session, dans le cadre de la
routine de clôture (§ 7 du prompt projet).

### Préfixe MCP `filesystem:*` exclusif sur le dépôt (27/05 suite 5)

Toutes les opérations sur les fichiers du dépôt TheSkillCodex
(`C:\Users\turko\...\TheSkillCodex\` ou `C:\Users\timothe.turko.ICAMAD\
...\TheSkillCodex\`) passent **exclusivement** par les outils MCP préfixés
`filesystem:*` — typiquement `filesystem:read_text_file`,
`filesystem:write_file`, `filesystem:edit_file`,
`filesystem:list_directory`, `filesystem:get_file_info`.

Les outils sans préfixe disponibles par défaut côté Claude — `view`,
`str_replace`, `create_file`, `bash_tool` — opèrent sur un sandbox Linux
isolé (`/mnt/user-data/...`, `/home/claude/...`) sans lien avec le dépôt
utilisateur. Les invoquer sur un chemin Windows est soit refusé, soit pire,
silencieusement réorienté vers le sandbox sans que l'utilisateur le voie.

**Piège de nommage** : `filesystem:create_file` (MCP, dépôt Windows) et
`create_file` (sandbox, Linux) sont **deux outils distincts au nom
identique**. Le préfixe est obligatoire pour lever l'ambiguïté, y compris
dans les raisonnements intermédiaires où Claude pourrait être tenté de
« simplifier ».

**Discipline pour Claude** :
- Chemins **toujours** en absolu Windows `C:\Users\...\TheSkillCodex\...`
  dans tout appel d'outil sur le dépôt.
- Si un retour d'outil mentionne `Allowed directories`, un path Linux
  (`/mnt/...`, `/home/...`), ou échoue avec un message qui ne ressemble pas
  à une erreur Windows attendue, c'est un appel sandbox parasite — relancer
  avec le préfixe `filesystem:` explicite.
- Ne **jamais** lancer `bash_tool` pour manipuler des fichiers du dépôt.
  Le sandbox n'a pas accès au dépôt, et inversement.
- Si un fichier semble inchangé après un write_file/edit_file apparemment
  réussi, vérifier le préfixe **avant** d'invoquer C14 (seuil 30 ko).

### Hygiène des fichiers de pilotage (acquise 27/05)

Les fichiers de pilotage privés (`TODO.md`, `JOURNAL.md`, `JOURNAL-archive.md`, `conventions.md`, `BACKLOG.md`, `_drafts/referentiel/couverture-en-cours.md`) sont garantis sans caractères invisibles ambigus et en line endings LF uniquement. Caractères nettoyés : NBSP fin (U+202F), NBSP normal (U+00A0), ZWSP (U+200B), BOM (U+FEFF), CRLF → LF.

Garanti par deux artefacts dans `tools/` :
- `tools/normalize-pilotage.js` (script Node ESM, sans dépendance) — mode FIX par défaut, mode `--check` pour audit (exit 1 si invisibles trouvés).
- `tools/git-hooks/pre-commit` (hook activé via `git config core.hooksPath tools/git-hooks` une fois par poste) — bloque tout commit réintroduisant des invisibles dans les fichiers ciblés.

Doc complète : `tools/README.md`.

**Pour Claude (instances futures)** :
- Les anchors `edit_file` sur ces fichiers peuvent être tapés sans NBSP devant `:` `;` etc. — le contenu est garanti normalisé tant que le hook est actif.
- En cas d'échec récurrent d'un anchor qui paraît exact (symptôme typique : `Could not find exact match` répété sur un anchor visuellement correct), suspecter un invisible. **Avant de bisecter**, suggérer à l'utilisateur `node tools/normalize-pilotage.js --check` pour identifier le souci, puis sans `--check` pour corriger.
- Si l'utilisateur signale une saisie depuis smartphone, un copier-coller depuis le web, ou une session précédente sans hook actif (cas PC perso tant que la tâche TODO d'activation n'est pas cochée), suggérer le run du script en début de session.
- Au démarrage de session sur **PC perso** (chemin MCP `C:\Users\turko\...`), vérifier dans le TODO si l'activation du hook est encore pendante — le signaler proactivement à l'utilisateur.

La typo française reste appliquée sur les fiches publiables (`content/**.md`) via Obsidian, pour le rendu Quartz. Ces fichiers ne sont pas concernés par le script.

### Chemin des images — racine absolue (acquise 27/05 suite 2)

Dans les fiches `content/fiches/<domaine>/*.md` (depth ≥ 2), les embeds d'images
SVG/PNG utilisent le **chemin absolu depuis la racine du site** :
`![alt](/ressources/img/fichier.svg)`.

**Justification** : Quartz perd le base path `/TheSkillCodex/` quand le chemin
relatif remonte de 2 niveaux ou plus (bug structurel diagnostiqué 27/05 suite,
test reproductible 27/05 suite 2). Le chemin absolu est résolu correctement
par Quartz qui préfixe le base path à la publication.

**Tests négatifs sur `pieuvre.md`** :
- Format Obsidian-natif `![[fichier.svg]]` → KO github.io.
- Chemin absolu `/ressources/img/...` → OK github.io, KO Obsidian preview.
  Retenu.

**Compromis assumé** : la preview Obsidian ne résout pas les chemins absolus
depuis la racine du vault — les images apparaissent cassées dans l'éditeur.
Arbitrage utilisateur 27/05 suite 2 : le rendu github.io est la cible
prioritaire (publication aux étudiants), l'édition dans Obsidian reste
fonctionnelle sur le markdown source.

**Exception — depth ≤ 1** : `content/hub/index.md` (chemin
`../ressources/img/...`) et `content/index.md` (chemin `ressources/img/...`)
conservent leurs chemins relatifs (la perte de base path n'affecte pas les
chemins à 1 niveau ou moins). Pas de migration sur ces fichiers.

**Pour Claude** : tout nouvel embed image dans une fiche
`content/fiches/<domaine>/*.md` utilise la forme `![alt](/ressources/img/fichier.svg)`.
Convention à appliquer en niveau A sur toute nouvelle fiche.

### Convention mini-hub imbriqué (C18, promue 28/05 suite 4)

Un domaine qui se ramifie en sous-thèmes se structure en **mini-hub** : une fiche mère panorama + des fiches filles. Forme fixée après épreuve 3/3 (`microcontroleur` à 2 niveaux, `bus-de-communication`, `techno-sans-fil`) :

- **Sous-dossier physique** par mini-hub : `content/fiches/<domaine>/.../<theme>/` (ex. `eee/mcu/bus/`, `eee/mcu/sans-fil/`). Les briques transverses isolées, sans hub propre, restent **à plat** dans le dossier parent (ex. `processeur`, `adc`, `pwm` dans `eee/mcu/`).
- **Hub en fichier nommé** (`<theme>.md`, pas `index.md`) pour que `[[theme]]` résolve par nom. `type: notion`.
- **Listing des filles en tableau dans le corps** du hub (panorama comparatif + aide au choix), pas en champ front matter.
- **AA** : le hub porte le critère transverse pertinent ; les filles popover-court peuvent rester `aa: []` (l'AA est porté collectivement par le hub).
- **1 SVG dans le hub** quand une comparaison visuelle structure le choix (topologies, carte de positionnement) ; filles en texte.

### Noms de fichiers
**Kebab-case** : `cahier-des-charges-fonctionnel.md`,
`schema-bloc-fonctionnel.md`. Pas d'accents, pas d'espaces, pas de
majuscules.

### Front matter YAML
Champs : `title`, `tags`, `prerequis`, `aa`, `draft`, `type`, `phases`.

**Tag `transverse`** dans le front matter pour les fiches-trame fils
transverses (`gestion-de-projet`, `ecoconception`, `securite-et-qualite`)
(25/05).

### Typologie de fiches (clarif 25/05 suite 2)
- **notion** = fiche **courte** (popover). Définit un concept, une méthode,
  un outil léger. Exemples : `jalons`, `wbs`, `matrice-de-risques`.
- **tuto** = fiche **longue mais pas structurante**. Outils méthodologiques
  détaillés, captures d'écran d'outils, procédures pas à pas. Exemples :
  `retroplanning`, `gantt`.
- **trame** = fiche **structurante**. Phases du V, fils transverses du
  parcours.

### Structure des fiches-trame (22/05 suite)
Front matter → popover → posture → objectif → démarche (N étapes) → pièges →
équipe → conclusion → voir aussi. **Ordre : Pièges et Équipe avant
Conclusion.**

**Section *Pièges fréquents* nourrie a posteriori** (25/05 suite 5-8, promue 26/05). Les pièges émergent spontanément pendant la rédaction des étapes (warning/tip d'étape transformé en piège de fiche), à hauteur de **37-45 % du total** sur les 3 fiches-trame du V éprouvées (concept 3/8, PoC 5/11, dossier-technique 5/11). Mode complémentaire à la relecture critique à froid — ne pas attendre la fin pour collecter. Format des entrées : `**Piège court.** Phrase d'explication.` (8-11 entrées par fiche typique).

### Rythme des H4 par étape — fiches-trame des phases du V (25/05 suite 7)

Éprouvée 2/2 sur `concept.md` puis `preuve-de-concept.md`. Règle tripartite :
- Étape **pivot** → **3 H4 dense**
  (étape 3 concept = arbitrage inter-disciplines ; étape 4 PoC = analyser et trancher).
- Étape **hors pivot non-clôture** → **2 H4 économes**
  (étapes 1, 2, 4 concept ; étapes 1, 2, 3 PoC).
- Étape de **clôture documentaire** → **3 H4 calque structurel**
  *Structurer / Rédiger / Faire valider* (étape 5 concept ; étape 5 PoC).

Ne s'applique pas aux fiches-trame transverses (structure 3 blocs co-actifs).

**Cas particuliers éprouvés sur `integration-et-tests` (26/05)** :
- **Étape multi-disciplinaire = 3 H4 disciplinaires** (élec / méca / info), hors pivot. Pattern justifié quand l'étape inspecte des artefacts physiques disciplinaires (objets élec, méca, info isolés) plutôt que des fonctions mécatroniques. Éprouvé sur l'étape 2 *Valider les pièces fabriquées* d'`integration-et-tests` (niveau 0 de la pyramide de tests).
- **Pyramide compressée = 3 H4 dense pour 4 niveaux conceptuels** (niveau 1 / niveaux 2 et 3 / niveau 4), au lieu du dispatch 4 H4 nominal. Pattern justifié par la proximité conceptuelle des niveaux 2 et 3 (intégration ascendante de fonctions composées puis système complet) et le rôle pivot du niveau 4 (qualification CdCF). Éprouvé sur l'étape 3 *Conduire la pyramide de tests* d'`integration-et-tests`.

### Structure des fiches-notion
Front matter → popover → image générique (si outil méthodologique) →
À quoi ça sert ? → Comment <verbe adapté> → Exemple incarné → Pièges (en gras
court + explication) → Cas particulier → Aller plus loin → Voir aussi.

Toutes optionnelles sauf *Voir aussi*. L'auteur garde ce qui sert.

### Format date des fichiers (25/05)
`JJ-MM-AAAA` retenu sur consigne FR. Bascule en ISO 8601 `AAAA-MM-JJ` possible
si tri chronologique automatique devient nécessaire à l'usage.

---

## 7. Référentiel AA

### Codification des critères (26/05 suite 2)
Format : `<Code_RA>/<AA_DOMAIN>/<N°critère>` (ex. `RA-PROJET-C03-3/EEE/1`).
AA_DOMAIN nécessaire car un même RA porte parfois plusieurs AA dans des
domaines différents.

### Cartographie — catégories de couverture (26/05 suite 2-3 ; HS-D 06/06)
- **Couvert (C)** : objet central d'une fiche ou d'une section H2/H3.
- **Effleuré (E)** : mention H4, `[!example]`, wiki-link, posture, piège.
- **Hors scope (HS)** : critère non traité par décision éditoriale, car
  relevant de l'évaluation transversale enseignante (soft skills,
  engagement, terminologie évaluée en revue) plutôt que du contenu enseigné
  par le wiki. À distinguer de **Non couvert** : pas un trou à combler, une
  décision revendiquée. Cas identifiés en cartographie :
  `RA-PROJET-C04-4/PROJ/3` (terminologie technique écrit/oral),
  `RA-PROJET-C07-1/PROJ/4` (participer aux tâches), `/5` (force de
  proposition), `/6` (participer aux événements).
- **Non couvert (NC)** : critère absent du wiki, à adresser en phase 2 ou
  par délégation aux cours collègues.
- **Hors scope par délégation (HS-D)** (06/06) : critère qui *est* un
  contenu enseigné, mais par un cours collègue hors du périmètre
  d'expertise de l'auteur (typiquement design produit, mécanique pure).
  Le wiki ne le traite pas mais peut y renvoyer. Distinct de **HS**
  (évaluation transversale comportementale, jamais enseignée comme contenu)
  et de **NC** (trou réel à combler). Cas : `RA-PROJET-C03-3/PROJ/1`
  (sketchs), `/2` (prise en compte design), `RA-MME-C03-1/MME/1` (outils
  designers).

Règle de **statut dominant** quand un critère apparaît dans plusieurs fiches :
C > E > HS > HS-D > NC (le statut le plus fort l'emporte). Cartographie au **niveau
du critère** (pas seulement de l'AA).

### 1 fiche-tuto par critère EEE/info embarquée (26/05 suite 2)
Pour les critères en lien avec EEE et info embarquée, **une fiche-tuto par
critère ou par groupe cohérent** en phase 2 du wiki. Pas de critère EEE qui
reste en effleurage permanent — chacun doit avoir un endroit nommé dans le
wiki phase 2. Quand un critère cite plusieurs solutions (ex.
logigramme/MAE/grafcet/chronogramme pour `RA-EEE-C03-2/EEE/5`), **1 fiche
par solution** plutôt qu'une fiche regroupante — chaque méthode mérite son
traitement, popovers distincts.

**Un tutoriel gonflé peut couvrir plusieurs critères** : multi-couverture
acquise sur décision utilisateur (cas `RA-PROJET-C05-3/PROJ/3/4/5` couvert
en `preuve-de-concept` + `integration-et-tests`).

### Front matter `aa`
Indiquer les codes du référentiel couverts dans le front matter de chaque
fiche. Fiches sans aucun Couvert (posture professionnelle, outil pivot
transverse, méta-structure) → `aa: []` légitime. Exemples : `securite-et-qualite`
(posture), `matrice-de-decision` (outil pivot transverse), `hub/index`
(méta-structure), `afnor-nfx50-151` (stub référentiel).

### Référentiel source
Fichier `_drafts/referentiel/Compétences.xlsx` : **62 critères normalisés**,
12 AA, 5 domaines (PROJ 25 / MME 12 / EEE 10 / MEO 10 / ESE 5). MIA fusionné
dans EEE et PROJ depuis 26/05/2026. Document de pilotage interne, hors site
Quartz. Également uploadé dans Project files Claude.ai pour accès
`/mnt/project/` en session.

Capitalisation des cartographies dans `_drafts/referentiel/couverture-en-cours.md`
(fichier de travail privé, grille de lecture + bilans fiche-par-fiche + matrice
inverse par domaine).

### Décisions niveau D — tranchées (06/06)
Les trois décisions ouvertes ont été arbitrées (autonomie déléguée pour les
instruire, validées par l'utilisateur) :
- **Catégorie « Hors scope par délégation » (HS-D) instaurée** — voir la
  catégorie ci-dessus (§ 7 *Cartographie*). Reçoit les 3 critères design
  (`RA-PROJET-C03-3/PROJ/1`, `/2`, `RA-MME-C03-1/MME/1`).
- **5 critères MME effleurés sans fiche centrale** (`RA-MME-C02-1/MME/2`,
  `/4`, `/6`, `RA-MME-C03-1/MME/2`, `/4`) **actés Effleuré terminal par
  délégation** — pas de fiche MME phase 2, traitement disciplinaire renvoyé
  aux cours collègues, le wiki les touchant via le prisme mécatronique.
- **`schema-cinematique` créé** — fiche-notion MME tenue en frontière
  interface (liaisons + ddl + exemple bras 3 axes, renvoi cours mécanique).
  `RA-MME-C02-1/MME/5` fermé (NC→C). Cartographie AA refermée : 0 NC.

---

## 8. En cours d'éprouvage

Conventions récentes pas encore confirmées sur 2-3 fiches. À documenter
formellement dans les templates une fois éprouvées.

### Acquises 25/05 suite 2 (à éprouver sur 2-3 fiches-notion d'outils)
7. 2 images par fiche-notion d'outil méthodologique → § 3
8. Fil rouge alternatif station météo → § 4
9. Niveau B = livraison en texte rédigé → § 5

### Acquises 25/05 suite 4-5 (à éprouver sur preuve-de-concept et trames ultérieures)

> **Conventions 10 et 12 : promues 26/05** vers § 2 et § 6 respectivement, après épreuve 3/3 réussie (cumul 12 contextes pour C10 sur concept + PoC + dossier-technique ; ratio stable 37-45 % pour C12). Voir § 2 *Convention matrice incarnée* et § 6 *Section Pièges fréquents nourrie a posteriori* pour la formulation définitive. Détail historique ci-dessous conservé pour traçabilité.
10. **Matrice incarnée dans `[!example]`** des fiches-trame (objet structuré dans le callout exemple, valeurs chiffrées ou récapitulatives, décision/sortie tracée et ouverture vers la suite). Éprouvée sur **4 contextes au sein de concept** : (a) matrice de décision 3 solutions × 5 critères + scores pondérés en étape 2 ; (b) tableau de conflits 4 colonnes × 2 lignes en étape 3 ; (c) tableau de pré-dim 6 colonnes × 5 lignes en étape 4 (point de vigilance mobile) ; (d) TdM type + TdM instanciée 5 sections en étape 5. **Confirmée sur 4 contextes PoC supplémentaires (25/05 suite 7)** : liste à puces 3 sources étape 2, relevés 5 points 1000 cycles étape 3, tableau de statut + décision traçée étape 4, TdM type instanciée étape 5. Huit formes différentes du même pattern — indicateur de généralité très solide. **Confirmée épreuve 3/3 25/05 suite 8 sur dossier-technique** : 4 nouveaux contextes (ajustements PoC→dossier 3 familles étape 1, BOM 7 lignes 6 colonnes 213,20 € HT étape 3, 3 validateurs × 5 colonnes étape 4 PIVOT, 3 bons commande structurés étape 5). **Cumul 12 contextes total** sur 3 fiches-trame du V. **Promotion vers § 2 à acter à froid.** → § 2
11. ~~**Structure des H4 par étape dans les fiches-trame des phases du V**~~ — **promue vers § 6 le 25/05 suite 7** après épreuve 2/2 sur concept + PoC. Voir § 6 *Rythme des H4 par étape*.
12. **Nourrissage a posteriori de la section *Pièges fréquents*** — les pièges d'une fiche-trame peuvent émerger spontanément pendant la rédaction des étapes (warning/tip d'étape transformé en piège de fiche). Mode complémentaire à la relecture critique à froid (pattern spec-tech 23/05 suite 2). Éprouvé sur concept (3 pièges sur 8 = 37 %) et sur PoC (5 pièges sur 11 = 45 %, indicateur en croissance). **Confirmé 25/05 suite 8 sur dossier-technique (5/11 = 45 %, ratio aligné PoC). Épreuve 3/3 réussie. Promotion vers § 6 à acter à froid.** → § 6 (Structure des fiches-trame).

### Acquises 25/05 suite 7 (à éprouver sur dossier-technique)
13. **Relire les sections amont de la fiche (Posture, Objectif) avant de rédiger une section avale**. Extension de la leçon ±2 phrases (25/05 suite 6). Le doublon « on a le matos, on monte, on verra ce que ça donne » détecté en round 2 sur PoC étape 1 a montré que le doublon peut remonter jusqu'aux sections amont rédigées en session antérieure (Posture, Objectif). Discipline : passe rapide en lecture sur sections amont avant de rédiger une nouvelle section H4. Coût 1 round 2 sur PoC. **Épreuve 2/2 réussie 25/05 suite 8 (dossier-technique) + 26/05 (integration-et-tests). Promue § 5 (Collaboration) le 26/05 fin session.** Entrée § 7 conservée pour traçabilité. → § 5

### Acquises 25/05 suite 8 (à capitaliser)
14. **Seuil pratique MCP write_file/edit_file ≈ 30 ko payload**. Tentative d'archivage 22-24/05 échouée silencieusement deux fois en suite 8 : edit_file timeout (~4 min, payload ~60 ko newText) et write_file inopérant (~50 ko content, fichier inchangé, prolongement de la leçon 25/05 suite 3). **Règle pragmatique** : tout edit_file ou write_file avec payload > 30 ko a une probabilité non négligeable d'échouer silencieusement (sans message d'erreur). Symptômes : tool call qui semble réussir mais `get_file_info` montre fichier inchangé. **Discipline** : (a) vérifier systématiquement `get_file_info` après tout write_file ou edit_file lourd, (b) pour les opérations massives (archivage, refonte, batch de patches inter-fichiers), préférer l'édition manuelle Obsidian + Git, ou un script Node CLI direct hors MCP. Épisode complet tracé dans JOURNAL session 25/05 suite 8.

**Complément 26/05 (integration-et-tests)** : deux modes d'échec supplémentaires identifiés sur les anchors de `edit_file`, indépendants de la taille de payload.
- **NBSPs fines U+202F** : la typo française pose une NBSP fine devant `:` `;` `?` `!` `%` `»` `€` et autres. Un `oldText` reconstitué à partir d'une copie visuelle ne contient pas ces NBSPs invisibles → mismatch silencieux du matching exact. **Discipline** : (a) anchors courts privilégiés (1 phrase identifiante plutôt qu'un paragraphe entier), (b) coller `\u202f` explicite aux positions probables si l'anchor doit traverser une ponctuation typographique française, (c) en cas d'échec et avant de soupçonner un NBSP, vérifier d'abord les typos de transcription.
- **Typos de transcription** : reconstituer un `oldText` de mémoire ou par copie partielle peut introduire des typos invisibles (« enchaîner » → « enchaâîner » par exemple, ou glissement d'un accent). Symptôme identique à NBSPs : mismatch silencieux. **Discipline** : recopier `oldText` directement depuis la sortie de lecture `view`/`read_text_file` plutôt que retranscrire. Le coût en tokens est minime, la robustesse gagnée est significative.

**Complément 26/05 suite 2 (confirmation typos transcription)** : la leçon « recopier `oldText` depuis lecture MCP » confirmée en session de cartographie AA. Deux typos de transcription dans batch initial sur `couverture-en-cours.md` (espacement variable 2 vs 3 espaces avant `#` dans commentaires YAML selon fiche source). Symptôme : batch rejeté avec message d'erreur explicite (non silencieux dans ce cas, car anchor moyen et payload normal). Discipline confirmée 2/2 sur sessions 26/05 et 26/05 suite 2 : **toujours recopier `oldText` depuis lecture MCP, jamais retranscrire de mémoire**, même pour des anchors qui semblent simples. Une autre régression typique observée en session : 1 erreur de routage (2 edits sur 2 fichiers différents passés à un seul appel `edit_file` avec un seul path). Discipline complémentaire : **1 appel `edit_file` = 1 fichier**.

**Complément 26/05 suite (archivage JOURNAL 22→24/05 réussi via MCP)** : deux acquis méthodo supplémentaires distincts du seuil 30 ko de payload, identifiés lors de la finalisation de l'archivage des sessions 22→24/05 (suite) (60 ko net à déplacer, au-dessus du seuil).

- **Pattern MARKER + N segments** — stratégie méthodo qui rend faisables les déplacements de blocs > 30 ko via MCP malgré la limite C14. Procédure : (1) poser un marker temporaire (commentaire HTML unique, ex. `<!-- ARCHIVE_INSERT_MARKER -->`) à l'emplacement cible via un `edit_file` léger ; (2) insérer le bloc en N segments de < 25 ko chacun, chaque insertion remplaçant `MARKER` par `[segment]\nMARKER` (l'ordre d'insertion détermine l'ordre final — pour antichronologie, insérer du plus ancien au plus récent) ; (3) retirer le marker via un dernier `edit_file` léger. Symétriquement pour la suppression d'un gros bloc : segmenter en N suppressions indépendantes via anchors par session. **Épreuve réussie 26/05 suite** : 10 `edit_file` successifs (5 insertion + 5 trim), payload max 24 ko, antichronologie préservée, JOURNAL 156→96 ko / archive 60→119 ko. À capitaliser comme procédure standard pour les archivages JOURNAL ultérieurs ou tout déplacement de bloc lourd.

- **Verrou Windows EPERM** — piège **distinct** du seuil de payload. Quand Obsidian a un fichier focus ouvert, MCP `edit_file` réussit l'écriture du `.tmp` mais échoue au rename final avec `EPERM: operation not permitted, rename '*.tmp' -> 'file.md'`. C'est un problème d'OS (verrou de fichier Windows), pas de payload — même un `edit_file` de 50 octets échouera si le verrou est actif. **Symptôme** : message d'erreur explicite EPERM dans le retour MCP (échec **non silencieux**, contrairement aux échecs C14 classiques). **Remède** : changer d'onglet dans Obsidian (libère le verrou de fichier ; pas besoin de fermer Obsidian, ni d'attendre). Reprendre immédiatement le même `edit_file`, il passera.

**Complément 27/05 (solution infrastructure)** : NBSPs et CRLF identifiés comme causes récurrentes d'échec d'anchor sur les fichiers de pilotage. Mise en place d'un script de normalisation Node ESM (`tools/normalize-pilotage.js`) + hook pre-commit (`tools/git-hooks/pre-commit`). Voir § 6 *Hygiène des fichiers de pilotage* et `tools/README.md`. La discipline anchor court (recopie depuis `read_text_file` frais, anchor < 60 caractères, éviter de traverser `→` et `:` français) reste utile pour les fiches publiables (`content/**.md`) qui gardent la typo française pour le rendu Quartz.

**Complément 27/05 suite 3 (multi-edits `edit_file` est atomique)** : `edit_file` avec plusieurs entrées dans `edits[]` est **atomique** — un seul anchor non trouvé annule **tout le batch**, même les edits dont l'anchor était correct. Épisode 27/05 suite 3 : batch de 4 edits TODO, le 4e (suppression section *Fait* en fin de fichier, ~3 ko de oldText avec trailing newlines incertains) a échoué et annulé les 3 premiers (anchors courts pourtant sûrs). Reprise en 3 appels séparés, multiplication des tool calls et de la durée MCP. **Règle pratique** : (a) multi-edits OK pour 2-3 anchors courts et sûrs sur le même fichier ; (b) tout edit ambitieux (oldText > 1 ko, ancrage fin de fichier, NBSPs ou trailing newlines suspects) **toujours en appel séparé** pour isoler le risque ; (c) si un edit anchor de fin de fichier est nécessaire, lire `tail` du fichier juste avant pour copier l'anchor exact (la lecture initiale d'une session peut tronquer ou normaliser différemment les newlines finaux). **Corollaire** : préférer N petits edits séparés à 1 gros batch dès qu'il y a doute sur un anchor, le coût en tool calls est compensé par l'absence de retry sur les edits perdus.

**Complément 27/05 suite 5 (artefact U+FFFD sur `read_text_file head=N`
tronqué)** : quand `read_text_file` est appelé avec `head=N` (ou
`tail=N`), la troncature peut tomber au milieu d'une séquence UTF-8
multi-byte. Le caractère partiel apparaît alors dans la sortie comme
U+FFFD, le *replacement character*, rendu côté Claude comme « �� »
ou « 不不 » selon la chaîne d'affichage. Exemples observés dans le
JOURNAL : « ��preuve » au lieu de « épreuve », « délibér��ment » au
lieu de « délibérément ». **Le caractère est intact dans le
fichier — seul l'affichage de la sortie tronquée est cassé.**

**Symptôme** : un mot accentué français apparaît avec des glyphes
étranges au voisinage de la dernière ligne du `head` (ou de la
première ligne du `tail`).

**Piège** : si Claude copie un anchor depuis cette sortie tronquée et
l'utilise dans `edit_file`, le `oldText` contiendra des U+FFFD qui ne
matcheront jamais le contenu réel. Échec silencieux du matching,
indistinguable à première vue d'un NBSP U+202F ou d'une typo de
transcription jusqu'à investigation.

**Discipline** : (a) si un anchor près du bord du head/tail échoue,
soupçonner l'artefact U+FFFD *avant* NBSP ou typo ; (b) relire la
zone via l'extrémité opposée (`tail` si la zone est en haut, `head`
plus long si en bas) ou sans head/tail du tout pour récupérer le
contenu intact ; (c) éviter de copier un anchor situé dans les 1-2
dernières lignes du head demandé — privilégier une zone bien à
l'intérieur du buffer.

**Complément 28/05 (réfutation de l'attribution U+202F → Obsidian)** :
l'hypothèse portée depuis 26/05 puis formalisée 27/05 suite 5 — « Obsidian
(plugin Smart Typography ou typo française) injecte des U+202F fines dans
les fichiers de pilotage » — a été **testée et réfutée** sur PC perso le
28/05. (a) Aucun plugin typographique installé (Excalidraw / Git / Pandoc
seuls), aucune option Editor n'insérant de NBSP. (b) Test isolé décisif :
une ligne écrite par Claude via MCP avec `: ; ? ! % €` ressort `--check
[ok]` → les écritures MCP de Claude n'injectent **aucun** invisible.
(c) Save Obsidian également propre. (d) Les seuls NBSP reproduits dans la
session étaient des **U+00A0** (saveur `&nbsp;`) issus d'un collage web
délibéré — hors flux normal — et **zéro U+202F**. **Conclusion** : pas de
source active de NBSP dans le flux de travail réel (l'utilisateur ne touche
jamais ces fichiers ; l'unique écrivain, mes écritures MCP, est propre).
Les échecs d'anchor historiquement attribués à U+202F relèvent plus
vraisemblablement des autres causes déjà listées dans cette chaîne C14
(CRLF de states passés, artefacts U+FFFD de troncature `head`/`tail`, typos
de transcription). Le couple `normalize` + hook reste justifié comme filet
de sécurité contre le rare collage web, pas comme remède à une injection
systématique. PRIORITÉ 1 du 28/05 actée **non reproductible**.

### Acquises 26/05 suite 3 (à éprouver en fin de session prochaine)
17. **Patcher la flèche « Prochaine session » du TODO après arbitrage utilisateur final, pas seulement après la suggestion initiale de Claude** — incident 26/05 suite 3 : le prompt de début de session rédigé par Claude pour la session suivante reflétait l'arbitrage utilisateur final (alternative 2 : clôture méthodologique), mais la flèche TODO reflétait encore la **suggestion initiale** de Claude (synthèse + reprise rédaction fiches phase 2). La nouvelle instance Claude lancée par l'utilisateur à la session suivante a lu la flèche TODO comme source de vérité selon § 8 du prompt projet et conclu que le prompt fourni était « obsolète » — critique de cohérence légitime. **Discipline** : (a) en fin de session, après arbitrage utilisateur sur la prochaine session, patcher la flèche TODO avant de proposer commit+push ; (b) le prompt de début de session et la flèche TODO doivent rester rigoureusement cohérents ; (c) si plusieurs alternatives ont été proposées, c'est l'arbitrage final qui figure dans le TODO, pas la recommandation initiale de Claude. **Épreuves 2-4/N réussies 26/05 suite 4, 26/05 suite 5, 27/05 suite 2, 27/05 suite 4** : patch flèche TODO effectué en fin de session selon l'arbitrage utilisateur sortant (suite 4 : de « clôture méthodologique » vers « reprise rédaction phase 2 » ; suite 5 : de « reprise rédaction phase 2 » vers « Phase 0 clôture phase 1 GP »). À éprouver sur 1-2 sessions supplémentaires avant promotion vers § 5 (Collaboration) ou § 8 *Workflow / Démarrage de session*.

### Acquises 26/05 suite 5 (à éprouver Phase 0 + Phase 1 elec/info)
18. **Convention mini-hub imbriqué** — 5 cas identifiés sur la roadmap phase 2 elec/info : `microcontroleur` (hub mère panorama → hubs filles familles MCU → tutos d'utilisation, 2 niveaux d'imbrication), `algorithme` (mini-hub mère → 3 fiches-notion filles : logigramme/MAE/grafcet), `pcb` (hub léger → 2 tutos outils : kicad/easyeda), `bus-de-communication` (hub mère → 3+ fiches-notion popovers : uart/i2c/spi), `techno-sans-fil` (hub mère → 5 fiches-notion popovers : wifi/ble/xbee/zigbee/lora). À éprouver sur `algorithme` (cas le plus simple) puis `microcontroleur` (cas le plus complexe, 2 niveaux). Convention à fixer : (a) front matter du hub (champ dédié listant les filles, ou TdM en prose ?) ; (b) structure de dossier (sous-dossiers physiques `content/fiches/eee/mcu/arduino/` vs à plat avec convention de nommage) ; (c) format de listing des fiches filles dans le corps du hub (tableau, liste à puces, callouts). Formalisation prévue dans `conventions.md` § 6 (Publication / Quartz) une fois éprouvée.

    **Épreuve 1/N réussie 28/05 suite 2 (`microcontroleur`)** : (a) listing des filles **en tableau** dans le corps (pas de champ front matter) ; (b) **sous-dossiers physiques** `content/fiches/eee/mcu/<famille>/` ; (c) hubs en **fichiers nommés** (`microcontroleur.md`, `arduino.md`) et non `index.md`, pour que `[[microcontroleur]]`/`[[arduino]]` résolvent par nom ; (d) `type: notion` pour les hubs. À confirmer sur `algorithme` (2ᵉ cas, plus simple) avant formalisation § 6. **Épreuves 2/N (`bus`) et 3/N (`sans-fil`) réussies 28/05 suite 4 → convention promue § 6** (voir § 6 *Convention mini-hub imbriqué*). Entrée § 8 conservée pour traçabilité.
19. **Convention fiche transverse multi-techno** — fiche d'une notion couvrant plusieurs technologies (ex. `firmware` couvre Arduino/ESP32/STM32, `analyse-de-schema-electronique` couvre tous les schémas élec/info). À éprouver sur `firmware` et `analyse-de-schema-electronique`. Trois options de structuration à tester : (a) callouts par techno côte à côte dans la section *Comment* ; (b) tableau comparatif (notion × technos) ; (c) exemple unique générique en prose + renvois vers les modules MCU concernés pour les spécificités. Mon intuition : (c) est plus léger éditorialement et exploite la structure wiki, mais (a) ou (b) peuvent s'imposer si les techno divergent fortement. Convention à fixer après 2-3 fiches transverses produites.

    **Épreuve faible 28/05 suite 3 (`lire-une-datasheet`)** : fiche mono-exemple (L298N), elle ne stresse pas réellement la question multi-techno — le vrai test reste `analyse-de-schema-electronique` / `firmware`. **Variante-(c) actée pour une fiche-*compétence*** : procédure rédigée en générique (réutilisable pour toute datasheet) + exemple incarné unique concentré dans la section *Exemple* + renvois wiki. Ne pas surcompter comme épreuve C19.

### Acquises 27/05 suite (à éprouver Phase 0)
20. **Mapping AA pertinent en multi-couverture** — acquise sur consigne utilisateur (« n'hésite pas à mapper quand un AA peut être en lien avec une notion ou un tuto, cela permet d'expliquer aux étudiants à quel point un critère peut être transverse »). Lorsqu'un critère AA est pédagogiquement lié à une notion ou un tuto, l'inscrire dans `aa:` du front matter même s'il est déjà Couvert par une autre fiche. La règle du statut dominant (C > E > HS > NC, § 7) reste opérante côté cartographie globale, mais le **front matter individuel** acte la transversalité du critère et la donne à voir aux étudiants. Éprouvée 2/N : `decomposition-fonctionnelle` (multi-couverture `bete-a-cornes` sur PROJ/1 + `concept.md` sur /PROJ/6) + `etat-de-l-art-technique` (multi-couverture PROJ-C04-4/PROJ/2 + MEO-C10-3/MEO/1, le second au titre du critère écoconception listé dans la procédure). À éprouver sur les fiches Phase 0 restantes (`etat-de-l-art-technique`, `bom`, `mind-map`, `fast`, `amdec`, `matrice-eat`, `ecodesign`) avant promotion vers § 7 *Référentiel AA*. Décision niveau D explicite.

### Acquises 27/05 suite 3 (à éprouver sur 2-3 prochaines entrées JOURNAL)
21. **Format JOURNAL hybride** — header bullets (Périmètre / Livrables / Décisions / Conventions / Tailles) + corps narratif court réservé aux cas non triviaux (acquis méthodo, échec, décision contre-intuitive). Cible 3-5 ko par session. Objectif : réduire le payload `edit_file` d'insertion en tête de JOURNAL (cumul avec le marker `<!-- INSERT_JOURNAL_HERE -->`) pour minimiser la durée MCP en fin de session. Format acté dans le prompt projet § 7. À éprouver sur 2-3 entrées. **Épreuve 1/N** : 27/05 suite 3 (~5 ko). **Épreuve 2/N** : 27/05 suite 4 (~6 ko, légèrement au-dessus de la cible — entrée capitalise un épisode méthodo non trivial sur bug MCP `create_file`). Si la cible 3-5 ko est tenue sans perte de fidélité du contexte transmis au démarrage suivant, promotion vers `conventions.md` § 5 ou § 6.
22. **Briques de réponse A/B/C/D** — indépendamment de l'acquisition formelle déjà actée § 5 et dans le prompt projet § 8, à éprouver dans la pratique conversationnelle sur les 2-3 prochaines sessions : vérifier que les briques sont effectivement combinables sans confusion, que la règle de défaut implicite tient (pas de bullet/explication parasites), que les topics forcent bien D obligatoirement. Critère de succès : réduction effective du texte produit par Claude dans les réponses, mesurée à vue par l'utilisateur. **Épreuves 1-2/N** : 27/05 suite 3 (refonte conventions, brique D dominante) + 27/05 suite 4 (Phase 0 reprise + figeage template + fin de session — brique A en exécution silencieuse efficace, brique D mobilisée sur arbitrages template et diff structurel + analyse méta du coût de fin de session). Pas de confusion observée à vue.

### Acquises 27/05 suite 4 (à éprouver Phase 0 reste)
23. **Convention candidate — Fil rouge bras 3 axes pour fiches-tuto pivot phase 1** — esquissée 26/05 suite 5 sur `caracteriser-une-exigence` (cadrage Q3 : fiche-tuto pivot phase 1 fonctionnellement proche d'une trame, critères CdCF chiffrés du bras 3 axes directement réutilisables, boucle de lecture intra-wiki avec `specification-technique.md` étape 4). Éprouvée 2/N : `decomposition-fonctionnelle` (27/05 suite, fil rouge bras 3 axes en 4 SVG arborescences avec triptyque) + `etat-de-l-art-technique` (27/05 suite 4, tableau 3 réfs Niryo/uArm/Moveo × 6 critères). **Reformulation à acter** : (a) élargir aux fiches-notion outils pivots étape 1 phase concept comme `caracteriser-une-exigence` qui est typé `notion` malgré l'usage du fil rouge, ou (b) reclasser `caracteriser-une-exigence` en `tuto`. À trancher sur 1-2 sessions supplémentaires avant promotion vers § 4 (Cas d'illustration / fils rouges).

    **Borne posée 28/05 suite 3 (`lire-une-datasheet`)** : la convention ne s'étend **pas** aux fiches-tuto spécifiques composant/MCU (`lire-une-datasheet`, futurs `arduino-*`), qui prennent un **cas autonome** propre au composant — écart volontaire au fil rouge bras 3 axes (qui cadre le projet, cycle en V). La candidate vise les fiches-tuto *pivot de phase projet*, pas les tutos de brique technique. À intégrer à la reformulation lors de la promotion.

    **Donnée 06/06 (fiches méca)** : fil rouge bras 3 axes réutilisé sur les SVG de `schema-cinematique` (MME) et `chaine-energie` (EEE transverse), deux fiches-**notion** de phase concept. Conforte l'option (a) — le fil rouge cadre les concepts de phase concept (fonctionnels comme mécaniques), pas seulement les tuto-pivots.

### Acquises 27/05 suite 5 (à éprouver sur 2-3 créations de fichiers)
24. **Préférer `filesystem:write_file` à `filesystem:create_file`** pour
    toute création de fichier en session. `create_file` peut retourner
    `File created successfully` alors que le fichier n'existe pas sur
    disque (faux positif côté serveur MCP), puis se bloquer sur un état
    mémoire corrompu — retour `File already exists` aux appels suivants
    alors que `list_directory` confirme l'absence du fichier — nécessitant
    un reboot complet de Claude Desktop pour résoudre.
    `write_file` est idempotent (overwrite sans état préalable côté
    serveur) et n'a pas montré ce mode d'échec.
    **Discipline** : (a) utiliser `write_file` par défaut pour les
    créations de fiches ; (b) si `create_file` est tout de même utilisé
    et retourne succès, vérifier immédiatement avec `get_file_info` ou
    `list_directory` avant d'enchaîner ; (c) en cas de faux positif
    suspecté, ne pas retenter `create_file` (l'état mémoire serveur est
    probablement corrompu) — passer à `write_file`.
    Incident initial documenté JOURNAL 27/05 suite 4. À éprouver sur 2-3
    créations supplémentaires avant promotion ou retrait.

### Acquises 28/05 suite 2 (à éprouver sur 2ᵉ hub famille)
25. **4 paliers de difficulté dans les hubs familles** — la section *Tutoriels* d'un hub famille (Arduino, ESP32…) classe les tutos en 4 paliers croissants : *Prendre en main* / *Apprendre les bases* / *Notions avancées* / *Niveau ingénieur*. Sert aussi de **carte de priorité publication** (Prendre en main + cœur des Bases = MVP strict ; Avancées/Ingénieur = MVP étendu/continu). Éprouvé 1/N sur `arduino` (28/05 suite 2). À confirmer sur `esp32` avant promotion vers § 6.
26. **Double marquage [A] tuto famille / [T] fiche transverse** dans les hubs familles — distingue le tuto spécifique à la famille (`arduino-<action>` = le « comment faire en code/câblage ») de la fiche transverse référencée (notion/compétence valable pour toutes les familles : datasheet, niveaux de tension, cpp, bus, GPIO). Le hub liste les deux ; marqueur *(transverse)* visible côté étudiant (choix 28/05 suite 2, retirable). Évite la duplication des fondamentaux par famille — corollaire direct de la structure squelette transverse + embranchements (26/05 suite 5). Éprouvé 1/N sur `arduino`. À confirmer sur `esp32`.

### Acquises 28/05 suite 4 (à éprouver)
27. **Production par batch de grappe homogène** — pour une grappe de fiches de forme identique et à faibles arbitrages (popovers d'un mini-hub, briques d'architecture), un **cadrage groupé unique** (frontières + nommage + AA + SVG du hub) validé une fois par l'utilisateur, puis **écriture en A** de toutes les fiches d'un coup. Réservé aux grappes ; les fiches substantielles ou pivots (`gpio`, `analyse-de-schema`, `firmware`, hubs familles) restent une-par-une. Gain de débit (18 fiches en une session) au prix d'une **dette de relecture concentrée** : la relecture utilisateur se fait en bloc sur la grappe, garde-fou à conduire avant publication. Éprouvée 2/2 (grappes `bus` et `sans-fil`, 28/05 suite 4). À éprouver sur 1-2 grappes supplémentaires avant promotion § 5.

    **Épreuve 3/N étendue 29/05** : batch massif de **21 fiches-tuto pleines** (Bases + Avancées straight du module Arduino), 8-10 ko/fiche, calibre homogène — saut qualitatif vs épreuves 2/2 (popovers/hubs courts). Borne actuelle dépassée. **Reformulation à acter avant promotion** : « grappe homogène en calibre » plutôt que « grappe homogène de popovers », ouvrant aux fiches-tuto pleines à condition que le calibre soit homogène. Niveau ingénieur (sujets pointus, calibre divergent : PID, interruptions, timers, watchdog) reste hors batch. Dette de relecture utilisateur s'étend en proportion (~226 ko sur les 21 fiches arduino-* à relire post-récolte d'images).
28. **Rouge danger #B23A2E dans les SVG de sécurité** — complément ponctuel à la palette ambre #BA7517 / gris #DDDBD3 (§ 3), réservé aux zones de **danger matériel** (destruction d'une entrée, dépassement de tension maximale) où l'ambre ne transmet pas l'alerte. Variante mode sombre `#E0705F`. Éprouvée 1/1 (`niveaux-de-tension-generique.svg`, 28/05 suite 4). À éprouver sur 1-2 SVG avant intégration § 3.

### Acquises 29/05 (à éprouver sur fiches arduino restantes + premier ESP32)
29. **Format captures inline pour fiches-tuto MCU** — pour les fiches-tuto qui décrivent un câblage matériel ou une procédure UI (IDE, gestionnaire de bibliothèques, modules, brochage), Claude rédige le texte des étapes et **insère inline des phrases `Prendre capture d'écran de *info précise de l'image*`** (tout en italique entre étoiles). L'utilisateur prend les captures/photos plus tard, itération sur le texte après récolte. **Pas de SVG produits unilatéralement par Claude** pour ces fiches — SVG réservés aux notions structurelles et aux schémas conceptuels. Format option B retenu après cadrage 29/05 (vs option A : section *Captures* centralisée en fin de fiche). Éprouvé 1/N (~70 mentions inline réparties sur 21 fiches arduino-*). À confirmer sur les fiches arduino restantes (`arduino-machine-a-etats`, Niveau ingénieur) + premier ESP32.
30. **Préfixe MCP variable selon le poste** — `theskillcodex:*` sur PC pro (configuration MCP nommée d'après le projet) vs `filesystem:*` sur PC perso. Le prompt projet § 6 référence `filesystem:*` (rédigé depuis PC perso). Non bloquant en pratique (Claude détecte le préfixe disponible via `tool_search`), mais source possible de confusion en lecture de JOURNAL/TODO si l'on cite des outils MCP nommément. **Note de configuration** plutôt que convention éditoriale stricte. À généraliser dans le prompt projet à la prochaine refonte (formulation neutre : « MCP filesystem actif, préfixe variable selon le poste »).

### Acquises 29/05 (suite) (à éprouver sur les prochains triptyques)
31. **Le « mauvais » d'un triptyque = schéma proprement rendu mais fautif** — raffine **C7** (triptyque mauvais / moyen / bon). Pour un triptyque de *qualité de rendu*, le « mauvais » n'est plus un brouillon flou (blobs), mais un **schéma proprement dessiné comportant des fautes ou incohérences délibérées**, signalées en ambre (`✗`) et disséquées dans le paragraphe « Pourquoi c'est mauvais ». Justification pédagogique : un schéma soigné peut être tout aussi faux qu'un brouillon — la propreté ne valide pas le fond ; l'étudiant apprend à *repérer* les fautes plutôt qu'à éviter le bâclage. **Corollaire (rôle des SVG dans une fiche)** : une *explication* d'un objet → **1 SVG générique** (le « qu'est-ce que c'est ») ; un *exemple de rendu / de qualité* → **triptyque** ; les deux peuvent **cohabiter** dans une même fiche (cas `logigramme` : SVG générique des symboles + triptyque thermostat). Éprouvée 1/N le 29/05 suite (reprise `machine-a-etats-portail-mauvais.svg` = 4 états propres + 3 fautes ambre ; triptyque `logigramme` thermostat). À éprouver sur 1-2 triptyques supplémentaires avant fusion dans la documentation de C7.

### Acquises 02/06 (à éprouver)
32. **Marqueur `*(→ notion [[x]])*` dans les hubs familles** — dans la section *Tutoriels* d'un hub famille, un tuto qui applique une **notion transverse** porte un marqueur `*(→ notion [[notion]])*` pointant vers elle (ex. `arduino-interruptions` → `[[interruption]]`, `arduino-timers` → `[[timer]]`, `arduino-deep-sleep` → `[[deep-sleep]]`, `arduino-memoire` → `[[memoire]]`, `arduino-machine-a-etats` → `[[machine-a-etats]]`). Rend visible le couple tuto-famille / notion-transverse — corollaire de C26 ([A]/[T]). Éprouvé 5× (02/06). À promouvoir vers § 6 (mini-hub) après confirmation sur ESP32.
33. **Exception SVG conceptuel à C29** — C29 réserve les captures inline aux fiches-tuto MCU et proscrit les SVG produits unilatéralement, MAIS un **schéma conceptuel** (pas un câblage) reste légitime : chronogramme d'interruption, sawtooth de timer, boucle bloquante/non-bloquante. Frontière : SVG pour le *concept* qui clarifie mieux que le texte, captures inline pour le *câblage/UI*. Éprouvé 3× (`interruption`/`timer`/`programmation-non-bloquante`, 02/06) ; les tutos sans dimension conceptuelle forte (deep-sleep/pid/memoire/watchdog) restent sans SVG. À fusionner dans C29 à la promotion.

### Acquises 02/06 (suite) (avancées d'éprouvage)
34. **C19 (fiche transverse multi-techno) — vrai test atteint sur `firmware`.** L'épreuve `lire-une-datasheet` (28/05 suite 3) était faible (mono-exemple) et `analyse-de-schema` ne stressait pas la divergence techno. `firmware` (02/06 suite) est le cas réel (Arduino / ESP32 / STM32). **Option (c) retenue** — procédure générique en prose (super-loop → coopératif → MAE → modules → RTOS) + section « selon la famille » actant la thèse : les concepts d'architecture sont agnostiques, seuls outillage et API changent (renvois aux hubs familles). Mûr pour reformulation/promotion § 4 ou § 6.
35. **C25 (4 paliers) + C26 ([A]/[T]) — épreuve 2/N sur `esp32`.** Le hub `esp32` (02/06 suite) décalque `arduino` : 4 paliers + marqueurs `*(transverse)*` sur les fiches partagées du squelette (`cpp`, `niveaux-de-tension`, `lire-une-datasheet`, `bus`, `interruption`, `timer`, `firmware`). Confirmées 2/2 → promouvables § 6.
36. **C32 (marqueur `*(→ notion [[x]])*`) — confirmé sur ESP32.** Réutilisé sur `esp32-deep-sleep → [[deep-sleep]]` dans le hub `esp32`. La condition « après confirmation sur ESP32 » de C32 est levée → promouvable § 6.
37. **C20 (mapping AA multi-couverture) — +3 instances.** `cpp`, `manipulation-de-bits`, `firmware` portent `RA-PROJET-C03-3/PROJ/5` (« Programmer ou paramétrer un contrôleur numérique ») en effleuré, alors que PROJ/5 est déjà Couvert ailleurs — marqueur de transversalité du critère « programmer » sur tout le socle langage/architecture. Renforce C20 vers promotion § 7.

### Acquises 05/06 (à éprouver sur prochains modules langage / MCU)
38. **Trame fiche-tuto langage** — pour une sous-fiche d'apprentissage d'un langage (module `cpp`) : intro-popover → *À quoi ça sert ?* → sections conceptuelles progressives (chacune avec fragment commenté) → *Code à lire* (sketch **complet qui compile**, pas un fragment) → *Pièges* → *Exercices* (énoncé `[!question]` + corrigé `[!success]-`) → *Raccrochage projet* → *Voir aussi*. Calibre « costaud » assumé (fiches lourdes acceptées). Validée sur `cpp-execution` (étalon) puis 6 fiches. À éprouver sur un 2ᵉ module langage (ESP32-IDF, MicroPython…) avant promotion § 6.
39. **Structure de fiche multi-notions** — quand une fiche couvre plusieurs notions sœurs (ex. `cpp-boucles` : `for`/`while`/`do…while`), ne pas dupliquer un bloc complet par notion : **une section conceptuelle courte par forme** + une section comparative **« Laquelle choisir ? »** (différences, avantages/inconvénients) + **Code à lire / Pièges / Exercices mutualisés** qui font jouer les formes ensemble. Éprouvée 1/N (`cpp-boucles`).
40. **Callout corrigé repliable = frère de l'énoncé, jamais imbriqué** — le corrigé d'un exercice est un callout `[!success]-` placé **au même niveau** que l'énoncé `[!question]` (séparé par une ligne vide), **pas** imbriqué dedans (`> >`). Quartz gère mal un callout pliable imbriqué dans un autre callout : il s'affiche figé ouvert, non repliable (Obsidian, plus permissif, le tolère). **Validée au rendu Quartz** sur 2 pilotes (`cpp-execution`, `cpp-structure`) puis propagée aux 7 fiches du module. Amende la trame C38.
41. **Bannières de zones de code** — dans un sketch *Code à lire* long et structuré, délimiter les grandes zones par des bannières de commentaires `/* === ZONE n — Titre === */` plutôt que par de simples annotations. Améliore la lisibilité pédagogique. Éprouvée 1/N (`cpp-structure`, 4 zones : préprocesseur / déclarations globales / setup-loop / fonctions).
42. **Factorisation transverse d'un langage** — le langage et le framework de programmation (ici C++/Wiring du framework Arduino) sont **communs** aux familles MCU qui partagent ce framework (Arduino, ESP32, Teensy). Le hub langage et ses sous-fiches sont donc **transverses** (un seul jeu, réutilisé par toutes les familles), pas dupliqués par MCU. Seule la fiche « lire les logs d'erreur » est famille-spécifique (toolchain). Corollaire de la structure squelette transverse + embranchements (26/05 suite 5). Décision niveau D (pushback accepté).

### Acquise 05/06 — règle CSS (capitalisée)
- **Fond des blocs de code dans les callouts** — règle ajoutée à `quartz/styles/custom.scss` : `.callout pre, .callout code[data-theme] { background-color: var(--light); }`. Sur le fond pastel d'un callout, un bloc de code (dont le `pre` n'a pas de fond propre) se fondait dans le pastel et devenait illisible ; on lui redonne le fond de page Quartz, qui tranche et suit le mode clair/sombre. Validée au rendu. (Le mode sombre des callouts eux-mêmes reste non décliné — chantier séparé.)

### Acquises 05/06 (suite) (à éprouver sur prochains tutos MCU / familles)
43. **`const` partout pour les constantes de valeur, `#define` réservé** — dans les fiches-tuto MCU, les constantes de **valeur** (broches, seuils, délais, dimensions) se déclarent en `const` (typé), pas en `#define`. Cohérence avec `cpp-types`/`cpp-structure` qui enseignent « `const` préféré au `#define` ». `#define` reste **légitime et conservé** pour ce que `const` ne peut pas faire : la **compilation conditionnelle** (`#define DEBUG 1` + `#if DEBUG`, macros `DBG_PRINT` de `arduino-debug`) et les **macros** (`F()`). Décision A (niveau D). Revert appliqué sur `arduino-temporisation`/`-module`/`-afficheur` ; le reste des tutos utilisait déjà `const`. À éprouver sur les prochains tutos (ESP32) avant promotion § 2 ou § 6.
44. **Anti-rebond par détection de front (`etatStable`), pas de verrou temporel** — pour « agir une fois par appui » sur un bouton, le pattern canonique est la **détection de front** : mémoriser l'état stable (`etatStable`), comparer à la lecture courante, n'agir qu'à la transition (`lect != etatStable` puis `if (etatStable == LOW)`), aligné sur `arduino-entree-tor`. **Proscrire** le « verrou temporel » `dernierX = millis() + offset` puis `millis() - dernierX > seuil` : le verrou placé dans le futur fait **sous-déborder** la soustraction unsigned → condition toujours vraie → l'anti-doublon ne bloque rien (bug systémique trouvé et corrigé dans 3 tutos le 05/06 suite). À réutiliser sur les prochains tutos à entrée bouton.

### Acquises 06/06 (à éprouver sur prochains hubs d'outils)
45. **AA des tutos-outils d'un hub = `aa: []` (porté par le hub)** — dans un hub *méthode + outils* (ex. `simulation-electronique`), l'AA du domaine est porté **centralement par le hub** (la méthode transverse), et les tutos-outils filles portent `aa: []`. **Exception** : une fille qui couvre un critère *distinct* le porte en propre — ex. `wokwi` et `tinkercad` portent `RA-PROJET-C03-3/PROJ/5` (ils exécutent du code MCU, pas seulement « simuler »). Corollaire de C18 (hub porteur d'AA) + C20 (multi-couverture). Éprouvé 1/N (module `simulation` : hub porte EEE/3+/4 ; `falstad`/`ltspice` = [] ; `wokwi` = PROJ/5). À confirmer sur un 2ᵉ hub d'outils avant promotion § 6.
46. **« Simuler ≠ représenter » — exclusion d'outils hors-catégorie d'un hub** — un hub thématique n'accueille que les outils de sa **catégorie fonctionnelle**. Le hub `simulation-electronique` regroupe les simulateurs de *comportement* (Falstad/LTspice analogiques, Wokwi/Tinkercad MCU) et **exclut** les outils de *représentation/câblage* (Fritzing : breadboard / schématique / vue PCB, sans simulation de comportement). Critère de tri : « que **fait** mon circuit ? » (simulation) vs « à quoi **ressemble** mon câblage ? » (représentation). Fritzing relèvera d'une future fiche câblage/représentation. Pushback Claude accepté (niveau D, 06/06). À réutiliser au cadrage des prochains hubs d'outils.

### Acquises 06/06 (suite) — module ESP32 (9 tutos enfants + hub)
47. **Parcours MCU autonome / redites inter-familles assumées** (consigne D) — chaque cours d'une famille MCU (Arduino, ESP32, futurs) est un **parcours autoportant** : l'étudiant choisit un MCU et apprend de bout en bout sans dépendre des fiches d'une autre famille. Les **redites inter-familles** sont assumées au niveau de la couche **[A] (tutos famille)** — `esp32-serie` enseigne le série sur ESP32 complètement, zéro renvoi vers `arduino-serie`. La couche **[T] (concepts/langage)** reste **commune** (cpp, niveaux-de-tension, gpio-concept, firmware, bus, interruption/timer) : non board-specific, donc ne casse pas l'autonomie. Ré-incarner les [T] par famille (`esp32-cpp`…) serait l'inverse — contredit C42. Précise « factorisation transverse » (C42) + squelette transverse (26/05 suite 5). Éprouvé sur le module ESP32 (9 filles + hub, 06/06 suite). Décision niveau D.
48. **C27 — batch en deux régimes** — un batch de famille MCU mêle des fiches homogènes (decalque/standard) et des fiches plus conceptuelles/pivots (SDK, RTOS). Régime appliqué : homogènes en **A pur**, pivots (`arduino-core`/`idf`/`freertos`) **rédigés dans le même run mais avec calls structurels surfacés en fin de wave** (pas de A silencieux). Concilie « batch complet demandé » et la borne C27 « pivots one-by-one ». Éprouvé sur le trio ESP32 Ingénieur (06/06 suite). Raffine C27.
49. **Trame fiche-tuto MCU course-grade AVEC exercices** — les tutos d'une famille MCU adoptent la trame langage C38 (sections à fragments → *Code à lire* complet → *Pièges* → **Exercices** `[!question]`/`[!success]-` C40 → *Raccrochage* → *Voir aussi*) + captures inline C29. Évolution vs les `arduino-*` (sans exercices). **Asymétrie à résoudre** : par la logique « parcours autonome = cours », le module Arduino mériterait le même ajout d'exercices — à programmer en relecture. Éprouvé sur les 9 filles ESP32 (06/06 suite). Étend C38.

Épreuves sur le module ESP32 (06/06 suite) : **C25** (4 paliers) + **C26** ([A]/[T]) 3/N ; **C29/C33** (captures inline + 2 SVG conceptuels) ; **C32** (`*(→ notion [[x]])*` : `[[deep-sleep]]`, `[[firmware]]`) ; **C23** (exemples autonomes, pas le fil rouge bras 3 axes). **Gabarit SVG auto-contenu** confirmé (`<defs><style>` interne + override dark mode + marker fléché) — la liste `.th/.tl/.tf` du § 3 paraît **obsolète** (→ BACKLOG, nettoyage).

### Acquises 06/06 (suite 3) — Phase 3 squelette pro (instruments / débogage / PCB)
50. **C45 (AA tutos-outils = `aa:[]` porté par le hub) — confirmé 2ᵉ/3ᵉ hub.** Les hubs `instruments-de-mesure` (porte EEE/2 ; `multimetre`/`oscilloscope` = `[]`) et `pcb` (porte EEE/5 ; `kicad` = `[]`) décalquent le pattern éprouvé sur `simulation-electronique`. La condition « 2ᵉ hub d'outils » est levée → **promouvable § 6**.
51. **C46 (« simuler ≠ représenter ») — généralisé au placement de fiches.** Transposé du tri *intra-hub* (quels outils un hub accueille) au placement *inter-hub* (où vit une fiche) : `debugger-embarque` tenu **hors** du hub `instruments-de-mesure` car « déboguer ≠ mesurer » (catégorie fonctionnelle distincte) — placé en tuto transverse `eee/mcu/`. Le critère catégoriel de C46 vaut donc aussi pour décider *où* ranger une fiche.
52. **C33 (SVG conceptuel) — étendu aux fiches-outils.** +3 SVG conceptuels hors contexte MCU (`multimetre-serie-parallele`, `instruments-de-mesure-confrontation`, `pcb-flux`) : la frontière « concept → SVG, câblage/UI → capture » tient pour les fiches-tuto d'instruments/PCB (le SVG série/parallèle **remplace même un placeholder capture**, un schéma rendant mieux la topologie qu'une photo). À fusionner dans C29/C33 à la promotion.
53. **Sous-pattern « hub méthode + outils/instruments » confirmé.** `simulation-electronique` (méthode + simulateurs), `instruments-de-mesure` (méthode de mesure + instruments), `pcb` (flux de conception + outils CAO) : même structure C18 (hub porteur de la méthode transverse + filles-outils en `aa:[]`). Variante stable du mini-hub.
54. **C27 — « cadrage groupé + triage » tenu sur périmètre hétérogène (non-grappe).** Phase 3 n'était pas une grappe homogène (hub mesure + 2 instruments + debugger transverse + hub pcb + outil) : un cadrage groupé unique + triage par fiche (placements/frontières arbitrés une fois) a suffi, sans batch aveugle ni cadrage complet par fiche. Élargit l'usage de C27 au-delà des grappes homogènes.

### Acquises 06/06 (suite 4) — fiche transverse `alimentation-electronique`
55. **Borne de profondeur « Réguler » — choisir/dimensionner ≠ concevoir la topologie.** Pour une fiche EEE de puissance, le wiki traite le **raisonnement d'ingénierie système** (choisir une source, réguler / découpler / router les masses / protéger, dimensionner avec marge — critère `RA-EEE-C03-2/EEE/3`) mais **délègue la topologie interne** des convertisseurs (buck/boost, boucle de régulation, calcul d'inductance) au **cours d'élec de puissance**. Posée en aparté italique dans la fiche. Applique le principe socle-vs-ambition + « ne pas refaire le cours collègue » (§ 3 prompt projet) à une frontière **intra-EEE** (et non plus seulement EEE vs MME/design) : même un domaine cœur a une profondeur bornée par l'expertise de la fiche. Décision niveau D (cadrage validé). À réutiliser au cadrage des futures fiches de puissance/conversion.

Épreuves sur `alimentation-electronique` (06/06 suite 4) : **C19/C42** (fiche **notion transverse [T]** référencée par les familles MCU, pas dupliquée) confirmée sur une **frontière à 3 étages** explicite — `chaine-energie` (situe le bloc *alimenter/distribuer* dans la chaîne, niveau carte ⬆) / `alimentation-electronique` (les principes transverses [T]) / `arduino-alimentation` (la recette d'une carte donnée [A] ⬇), zéro redite (table courants/brown-out/batteries laissée côté Arduino). **C23** +1 (fil rouge bras 3 axes sur une fiche-**notion** de phase concept → conforte l'option (a) : le fil rouge cadre les concepts de phase concept). **C31** (duo *mauvais/bon* : masse en étoile vs masse chaînée, la fautive rendue proprement avec ✗ ambre). **C33/C52** (SVG conceptuel hors-câblage) étendu aux fiches transverses : +3 SVG (régulation linéaire vs découpage ; duo masses ; archi incarnée bras 3 axes).

### Acquises 06/06 (suite 6) — module STM32 (hub + 5 enfants)
56. **Variante « lean-Bases » d'un hub MCU** — un hub famille peut **délibérément maigrir son palier *Apprendre les bases*** : au lieu de fiches dédiées par périphérique (`<famille>-gpio`, `<famille>-serie` comme sur ESP32), le GPIO et l'UART natifs sont portés par les **exemples travaillés** des fiches du palier ingénieur (`stm32-cubemx`, `stm32-hal`) et par la porte Arduino. Justifié quand la famille a une **porte native distincte** dont les exemples incarnent naturellement ces périphériques, et qu'une fiche-périphérique dédiée doublonnerait. Le palier Bases référence alors les concepts transverses [T] (`gpio`, `niveaux-de-tension`) + la porte de continuité. Écart assumé au décalque ESP32. Décision niveau D (cadrage validé). Éprouvée 1/N (`stm32`, 06/06 suite 6). À confirmer sur une 2ᵉ famille à porte native (Teensy ?) avant promotion ou retrait.

Après C55, la numérotation éprouvage atteint **56**.

Épreuves sur le module STM32 (06/06 suite 6) : **C18** (mini-hub, n-ième famille — sous-dossier `eee/mcu/stm32/`, hub nommé `stm32.md`, `type: notion`) ; **C25** (4 paliers) + **C26** ([A]/[T]) 4/N ; **C27/C48** (batch 2 régimes : vague 1 décalque homogène A pur `stm32-prise-en-main`/`stm32-arduino-core` + vague 2 pivots `stm32-cubemx`/`stm32-hal`/`stm32-registres`, calls surfacés en clôture) ; **C29/C33** (captures inline + 2 SVG conceptuels : couches d'abstraction = thèse, flux CubeMX) ; **C32** (`*(→ notion [[manipulation-de-bits]])*` sur `stm32-registres`) ; **C40** (corrigés `[!success]-` frères) ; **C43** (`const`/typage, et discipline des zones USER CODE côté C) ; **C47** (parcours MCU autonome — STM32duino enseigné sans renvoi vers `arduino-*`) ; **C49** (trame tuto MCU course-grade + exercices). **C20** (multi-couverture) : 4 fiches portent `RA-PROJET-C03-3/PROJ/5` effleuré, **tally inchangé 79 %** (largeur, pas couverture). Lien rouge `[[stm32]]` préexistant de `microcontroleur` résolu par la seule création du hub (aucun patch). Gabarit SVG auto-contenu reconfirmé (la liste `.th/.tl/.tf` du §3 reste obsolète → BACKLOG).

### Acquises 06/06 (suite 7) — module Teensy (hub + 4 enfants)
Pas de nouvelle convention numérotée (la numérotation éprouvage reste à **56**).

Épreuves sur le module Teensy (06/06 suite 7) : **C56 (lean-Bases) éprouvée 2/N — et élargie.** Teensy n'a **pas** de porte native distincte (≠ STM32) : sa seule porte est l'Arduino-core (Teensyduino). Le palier *Bases* y est pourtant maigre — pas de `teensy-gpio`/`teensy-serie` —, GPIO/UART étant portés par la couche [T] (`cpp`, `gpio`, `niveaux-de-tension`) **et** la fiche de porte `teensy-arduino-core`. **Reformulation à acter** : la justification de C56 (« porte native distincte dont les exemples incarnent les périphériques ») se généralise en « GPIO/UART adéquatement portés par [T] + la/les fiche(s) de porte, sans fiche par périphérique » — le déclencheur n'est pas la nature *native* de la porte, mais la **couverture suffisante des périphériques de base ailleurs**. 2/N sur deux portes différentes (STM32 native, Teensy Arduino) → mûre pour promotion à la reformulation. Autres réutilisations : **C18** (n-ième famille, sous-dossier `eee/mcu/teensy/`, hub nommé `teensy.md`, `type: notion`) ; **C25** (4 paliers) + **C26** ([A]/[T]) 5/N → largement confirmées ; **C27/C48** (batch 2 régimes : vague 1 décalque homogène A pur hub+`prise-en-main`+`arduino-core` + vague 2 **fiches distinctives** `teensy-audio`/`teensy-usb`, calls surfacés — variante où la vague 2 n'est pas « pivots d'outillage » mais « capacités signatures ») ; **C29/C33** (captures inline + 2 SVG conceptuels : `teensy-audio-flux`, `teensy-usb-personnalites`) ; **C40** (corrigés `[!success]-` frères) ; **C43** (`const`/typage) + **C44** (anti-rebond par détection de front, réutilisé dans l'exemple `teensy-usb`) ; **C47** (parcours MCU autonome) ; **C49** (trame tuto MCU course-grade + exercices). **C55** (borne de profondeur) réappliquée à `teensy-audio` : la théorie du traitement du signal (conception de filtres) déléguée à un cours de TS, la fiche enseignant à **assembler/piloter** la chaîne — C55 se confirme hors puissance, sur le DSP. **C20** (multi-couverture) : 3 fiches (`teensy-arduino-core`/`-audio`/`-usb`) portent `RA-PROJET-C03-3/PROJ/5` effleuré, **tally inchangé 79 %** (largeur, pas couverture).

### Acquises 06/06 (suite 8) — module ESP8266 (hub lean + 2 enfants)
Pas de nouvelle convention numérotée (la numérotation éprouvage reste à **56**).

Épreuves sur le module ESP8266 (06/06 suite 8) : **C56 (lean-Bases) éprouvée 3/N** — sur une famille « moins-disante » (ni native ni distinctive). Confirme la reformulation actée en suite 7 : le déclencheur du lean est la **couverture des périphériques de base ailleurs** ([T] + porte), indépendamment du type de porte. ESP8266 va un cran plus loin : **pas de fiche par capacité signature** non plus — le **Wi-Fi**, pourtant sa raison d'être, n'a **pas de fiche dédiée** ; son essentiel tient dans l'exemple d'`esp8266-arduino-core`, et les concepts sont **renvoyés à `esp32-wifi`** (API quasi identique). **Nuance sur C47** (parcours MCU autonome) : pour une famille « petit frère », des **renvois cross-famille** (vers `esp32-wifi`, `esp32-deep-sleep`) sont tolérés afin de ne pas dupliquer ; le parcours reste autonome sur les **spécificités** (mapping Dxx≠GPIO, broches de boot GPIO0/2/15, ADC unique, watchdog/`yield()`). À surveiller : que la dépendance à l'esp32 ne rende pas le parcours esp8266 illisible seul. Réutilisations : **C18** (n-ième famille, sous-dossier `eee/mcu/esp8266/`, hub nommé `esp8266.md`, `type: notion`) ; **C25/C26** (4 paliers + [A]/[T]) 6/N ; **C27/C48** (vague 1 décalque homogène A pur — **pas de vague 2 distinctive** ici, grappe homogène hub+`prise-en-main`+`arduino-core`) ; **C29** (captures inline) ; **C40** (corrigés `[!success]-` frères) ; **C43** (`const`/typage, constantes `Dxx`) ; **C49** (trame tuto + exercices). **Pas de SVG** (C33 non sollicité — famille « moins », pièges en tableau). **C20** : `esp8266-arduino-core` porte `RA-PROJET-C03-3/PROJ/5` effleuré, **tally inchangé 79 %**. Lien rouge `[[esp8266]]` préexistant de `microcontroleur` (table panorama) **résolu par la seule création du hub** (aucun patch — comme stm32).

### Acquises 06/06 (suite 9) — PIC (notion) + MicroPython Vague 0
Pas de nouvelle convention numérotée (reste à **56**).

Épreuves : **PIC** acté en **notion de positionnement seule** (pas de module) — la « famille » la moins centrale traitée en pointeur léger ; `[[pic]]` rouge résolu par la création de la notion. **MicroPython** ouvre un cas nouveau : **premier module hors paradigme Arduino-core** (approche scriptée — firmware une fois + REPL + fichiers `.py`). Deux partis pris structurants : (1) **substitution du hub langage** — `cpp` [T] est remplacé par un **hub langage MicroPython propre** (`micropython-langage` + 5 filles : REPL, types, contrôle, fonctions, modules), le paradigme différant trop (interprété, typage dynamique, indentation, REPL) ; (2) **module « clone de curriculum »** — MicroPython calque le **format et les paliers d'Arduino** (décision Tim « reprendre le format arduino »), produit en **4 vagues** ; les concepts agnostiques (`niveaux-de-tension`, `lire-une-datasheet`, `manipulation-de-bits` + notions machine-a-etats/interruption/timer/deep-sleep/memoire) restent **référencés [T]**, pas redupliqués. **Déviation au 1:1 Arduino assumée** : pas de fiche `micropython-serie` (« Communication » en bases) — en MicroPython le **REPL/`print()` est la console**, donc renvoi vers `micropython-repl` (à confirmer). Réutilisations : C18 (hub+dossier `micropython/` ; `pic` notion à plat), C25/C26 (4 paliers + [A]/[T], format Arduino) 7/N, C49 (trame + exercices C40), C23 (exemples autonomes), C20 (PROJ/5 effleuré sur simulation + hub langage, tally inchangé 79 %). **Motif « clone de curriculum + hub langage substitué » à éprouver** sur les vagues 1-3 avant d'en faire une convention numérotée.

### Acquises 06/06 (suite 10) — MicroPython Vague 1 (Bases hands-on)
Pas de nouvelle convention numérotée (reste à **56**).

**Motif « clone de curriculum + hub langage substitué » (ouvert suite 9) éprouvé sur sa 1ʳᵉ vague hands-on — il tient.** Les 11 fiches Bases sont une transposition fidèle des `arduino-*` : même structure, mêmes montages, mêmes pièges pédagogiques ; seul le contenu API change (Python/`machine`). L'exercice fait ressortir une poignée de **différences de fond** qui méritent l'insistance et distinguent un vrai portage d'un copier-coller : `ticks_diff()` **obligatoire** (le compteur déborde — jamais de soustraction directe, contrairement au `millis()` d'Arduino) ; `duty_u16()` et `read_u16()` **tous deux sur 16 bits** → un potentiomètre pilote un PWM **sans mise à l'échelle** (élégance absente côté Arduino, où il faut diviser 1023→255) ; `time_pulse_us()` (≡ `pulseIn`) ; module **`dht` intégré** au firmware ; **toutes** les broches PWM ; contraintes Pico **3,3 V / ~12 mA / VSYS 1,8-5,5 V / 3V3(OUT) limitée**. Réutilisations : **C27/C48** (vague 1 décalque homogène = Cas A silencieux, confirmé sur 11 fiches d'un coup) ; **C49** (trame tuto + exercices C40) ; **C23** (exemples autonomes) ; **C20** (`PROJ/5` effleuré sur 10 des 11, `-alimentation` `aa:[]`, tally inchangé 79 %) ; **C33/C52** (SVG conceptuel `micropython-modele-execution`, compilé vs scripté, hors-câblage, embarqué dans le hub). **Déviation `micropython-serie`→`micropython-repl`** (« Communication » en bases) confirmée en pratique — le REPL/`print()` tient le rôle de console ; **reste à valider explicitement par Tim**. Le motif sera reconfirmé sur V2 (Avancées) et V3 (Ingénieur) avant éventuelle promotion en convention numérotée.

### Acquises 06/06 (suite 11) — MicroPython Vague 2 (Avancées)
Pas de nouvelle convention numérotée (reste à **56**).

**Le motif « clone de curriculum + hub langage substitué » tient sur sa 2ᵉ vague hands-on — et, fait nouveau, sur des fiches qui *divergent* du jumeau, pas seulement sur des décalques 1:1.** Régime **mixte** assumé (C27/C48) : 9 fiches homogènes produites en Cas A silencieux (bus `uart`/`i2c`/`spi`, actionneurs `servomoteur`/`moteur-cc`/`moteur-pas-a-pas`, `afficheur`/`debug`/`gpio-boot`), 3 fiches structurellement distinctes traitées puis **surfacées en clôture** (`programmation-non-bloquante`, `machine-a-etats`, `eeprom`). Ce sont ces trois-là qui valident le portage : (1) **`asyncio` intégré** — MicroPython offre un outil de concurrence coopérative que C++ n'a pas, en plus du patron `ticks_diff` (et le second cœur via `_thread`) ; (2) **machine à états sans `switch`/`enum`** — Python impose constantes + `if/elif` (ou dict d'états), et l'absence de fall-through remplace le piège du `break` par une exigence d'indentation ; (3) **stockage sans EEPROM** — le Pico n'en a pas, la persistance passe par un **fichier sur la flash** (`json`, `try/except OSError`), divergence forte assumée vs `EEPROM.h`. Autres divergences de fond V2 : `i2c.scan()` intégré (pas de sketch scanner) ; **REPL sur USB ≠ UART matériel** (2 UART libres, pas de `SoftwareSerial`) ; CS = `Pin` manuel en SPI ; **servo = PWM 50 Hz + `duty_u16`** (pas de `Servo.h`) ; **DRV8833/TB6612 plutôt que L298N** sur logique 3,3 V ; OLED `ssd1306` avec `show()` obligatoire ; Pico **sans broche de strapping** + astuce `Pin(...,value=)`. Réutilisations : **C27/C48** (mixte), **C49** (trame + exercices C40), **C23**, **C20** (`micropython-machine-a-etats` porte EEE/5 + PROJ/5 mais tally inchangé 79 % — EEE/5 déjà couvert). `micropython-filtrage` **laissé rouge** (pas de jumeau `arduino-filtrage`, optionnel). **Déviation `micropython-serie`→`micropython-repl`** toujours **à valider explicitement par Tim**. Le motif sera reconfirmé une dernière fois sur V3 (Ingénieur) avant éventuelle promotion en convention numérotée.

### Acquises 06/06 (suite 12) — MicroPython Vague 3 (Ingénieur) — module complet
Pas de nouvelle convention numérotée (reste à **56**), **mais le motif est mûr pour promotion**.

La Vague 3 clôt le module MicroPython (4 vagues, 38 fiches). **Le motif « clone de curriculum + hub langage substitué » est désormais éprouvé sur les TROIS vagues hands-on** (V1 bases, V2 avancées, V3 ingénieur) **et sur des fiches qui divergent du jumeau** (machine à états, stockage, mémoire). Il est **mûr** : recommandation de le **promouvoir en convention numérotée (C57)** — décision structurelle laissée à Tim. Formulation candidate : *« Une plateforme à paradigme distinct (langage interprété, IDE propre) peut être traitée comme un **clone du curriculum Arduino** — mêmes paliers, même trame de fiches — en (a) **substituant le hub langage** (parcours langage propre au lieu de `cpp`), (b) gardant les concepts agnostiques en **[T]**, (c) transposant l'API fiche à fiche, et (d) **assumant les divergences de fond** là où le matériel/langage l'impose (signalées en clôture). »*

Divergences de fond V3 transposées (au-delà du décalque) : **pas d'allocation mémoire en ISR** → `micropython.schedule()` (piège propre à MicroPython) ; `machine.Timer` **API uniforme** (vs registres AVR) ; **`deepsleep` redémarre** la puce (sauvegarde d'état par fichier) ; **`gc` ramasse-miettes** — renverse la gestion manuelle `F()`/`PROGMEM` d'Arduino, surveiller fragmentation + pauses ; **`WDT` non désarmable** une fois armé. Réutilisations : C27/C48 (Cas A), C49, C23, C20 (tally inchangé 79 %). **Déviation `micropython-serie`→`micropython-repl`** toujours **à valider explicitement par Tim**. `micropython-filtrage` reste rouge (optionnel, pas de jumeau).

### Acquises 06/07 — promotion C57 + notes hygiène
57. **Module « clone de curriculum » (plateforme à paradigme distinct → clone Arduino + hub langage substitué)** — **promue / confirmée le 07/06**. Formulation (cf. candidate du bloc suite 12) : *une plateforme à paradigme distinct (langage interprété, IDE propre) peut être traitée comme un clone du curriculum Arduino — mêmes paliers, même trame — en (a) **substituant le hub langage** (parcours langage propre au lieu de `cpp`), (b) gardant les concepts agnostiques en **[T]**, (c) transposant l'**API fiche à fiche**, (d) **assumant les divergences de fond** là où matériel/langage l'imposent (signalées en clôture).* Éprouvée sur les 3 vagues hands-on MicroPython (V1-V3) + fiches divergentes (machine à états, stockage, mémoire) ; candidate ouverte suite 9, mûrie suite 12. **La numérotation éprouvage atteint 57.** Relocalisation physique en section thématique différée (avec les autres promouvables C32/C45/C50/C56).

Notes hygiène 07/06 (pas de convention numérotée) :
- **Script CLI pour déplacement de bloc lourd** — l'archivage massif (~46 ko, avec un octet U+FFFD hérité) a été fait par un **script Node fail-safe** (`tools/archive-journal-0607.mjs` : `slice` sur deux ancres propres + écritures atomiques archive-d'abord, `process.exit(1)` si une ancre manque) plutôt qu'une séquence d'`edit_file` — le ré-assemblage manuel des séparateurs `---` est fragile, le matching d'un `oldText` contenant des octets corrompus est douteux, et un `edit_file` peut s'appliquer à moitié. Outille concrètement la mention « préférer un script CLI pour les opérations massives ».
- **U+FFFD résiduels** — 2 occurrences héritées : `28/05 suite 2` (partie fidèlement en archive) et `06/06 suite 10` (reste au JOURNAL). **Hors** `normalize-pilotage.js` (qui ne cible que les invisibles) ; visibles, cosmétiques, fichiers non publiés → nettoyage manuel Obsidian si souhaité.

### Acquises 07/06 (suite) — module SBC Raspberry Pi (hub + 3 fiches + 3 SVG)

Pas de nouvelle convention numérotée (reste à **57**). Le module Raspberry Pi est le **premier SBC** (ordinateur sous Linux, pas un microcontrôleur) et fournit le **contre-cas de C57** :

- **Borne de C57 (clone) — le SBC ne se clone pas.** C57 autorise le clonage du curriculum Arduino pour une plateforme à *paradigme distinct mais transposable* (MicroPython). Un SBC est à paradigme distinct **et non transposable** (on apprend à se servir d'un ordinateur, pas à programmer une puce nue) : il reçoit une **structure propre** — paliers adaptés (*Prendre en main OS/headless/SSH → Piloter le matériel → Projet*), **ni les 4 paliers C25, ni un décalque C57**. Si une 2ᵉ plateforme-ordinateur apparaît un jour, candidate à numéroter (C58) ; sinon, borne de facto.
- **C55 (borne de profondeur) étendue à l'OS/sysadmin.** 3ᵉ frontière de délégation après l'élec de puissance (suite 4) et le DSP Teensy (suite 7) : le wiki traite le **choix MCU/SBC** et le **pilotage matériel depuis Linux** (GPIO `gpiozero`, pas de temps réel dur), mais **délègue le sysadmin Linux pur** (paquets, services, sécurité OS) comme la méca/ACV — posé en aparté italique. Prise en main bornée : jusqu'au **shell headless + Python**, pas au-delà.
- **C23 (fil rouge bras 3 axes) +1** sur `raspberry-pi-projet` (fiche d'intégration de phase concept) — conforte l'option (a) : le fil rouge cadre les concepts/architectures de phase concept.

Réutilisations : **C18** (mini-hub, sous-dossier `eee/mcu/raspberry-pi/`, hub nommé `type: notion`) ; **C20** (multi-couverture : hub `EEE/2`, `-gpio`/`-projet` `PROJ/5` effleurés, **tally inchangé 79 %**) ; **C24** (`write_file`) ; **C29** (captures inline) ; **C33/C52** (3 SVG conceptuels, gabarit auto-contenu + dark) ; **C46** (catégoriel : SBC rangé sous `eee/mcu/` « par usage » malgré le paradigme distinct). **Exemples travaillés, pas d'exercices C49** (arbitrage Tim). Lien rouge `[[raspberry-pi]]` préexistant de `microcontroleur` **résolu par la seule création du hub** (aucun patch — comme stm32/esp8266). **Avec cette famille, le panorama `microcontroleur` n'a plus aucun lien-famille rouge.**

### Autres en attente
- **Section « Pendant cette phase, côté équipe »** pour fiches-trame
  transverses : titre conservé pour alignement template, sémantique réelle =
  « articulation avec les autres transverses » (3 pratiques : intégrer dans
  la cadence / intégrer dans la matrice de risques / piloter sans écraser).
  À confirmer sur les 2 autres transverses puis documenter dans le template.
- **Convention de gras Pièges** (« **Piège court.** Phrase d'explication. »)
  → § 2. Figée dans le template `fiche-notion.md` mais pourrait constituer
  une « exception structurelle » à documenter dans un guide éditorial unifié.

---

## Annexe — Conventions de référence externes

- **Charte callouts visuelle** : `templates/callouts.md` (palette, exemples
  rendus).
- **Templates de fiches** : `templates/fiche-trame.md`,
  `templates/fiche-notion.md` (commentaires HTML pédagogiques inclus).
- **Référentiel AA** : voir § 7 (codification, cartographie, statut des
  fiches sans Couvert).
