# CONVENTIONS — TheSkillCodex

> Fichier privé (non publié). Règles éditoriales en vigueur sur le projet.
> Dates entre parenthèses = session d'acquisition. Mise à jour ponctuelle.

Ce fichier centralise les conventions stabilisées. Le prompt projet décrit
*comment Claude travaille* (procédure, niveaux d'autonomie, démarrage de
session) ; ce fichier décrit *les règles éditoriales à appliquer* (vocabulaire,
mise en forme, images, structure des fiches).

Section [En cours d'éprouvage](#8-en-cours-déprouvage) en fin de fichier pour
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
- « **Gravure à l'anglaise** » → « **gravure mécanique** » / « **fraisage** »
  (terme non standard pour la gravure mécanique de PCB ; 09/06).

### Anglicismes techniques — admis (09/06, relecture)
- « **stepper** » **conservé** (exposer le vocabulaire fr/eng aux étudiants).
  Ne **pas** convertir en « moteur pas-à-pas » — renverse la conversion de la
  session 1 sur `specification-technique` (assumée comme double exposition :
  la spec introduit le terme FR, les fiches techno emploient « stepper »).
- **Anglicismes techniques courants admis** : lookup table, brainstorm, mock,
  *go / no-go*, lead time, BOM, REX, bench (→ préférer « banc » quand naturel).
- « **Xᵉ étape du projet** » toléré en phrase d'introduction d'une fiche-trame
  (renvoie à la place de la phase dans le V). La forme « phase N » en *nombre*
  reste proscrite dans la prose (cf. Termes proscrits).

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

### Pas de prix ni de cadrage « achat » (C71, promue 18/08)

L'école fournit le matériel : une fiche ne mentionne **ni prix, ni « à l'achat », ni « dans la boîte »**, ni en prose ni dans un SVG. L'aide au choix porte sur l'**adéquation technique** — capacités, périphériques, contraintes, disponibilité — jamais sur le coût. **Règle absolue**, y compris quand le coût est un critère d'ingénierie et non un prix d'achat : le coût unitaire en grande série se reformule (« peu cher à l'unité » → « disponible en très grand volume », adossé à la stabilité de la référence).

**La question à se poser en relecture est « que reste-t-il quand je l'enlève ».** Quand l'argumentaire d'une fiche *repose* sur le prix (cas ESP8266, hub Teensy), un retrait mécanique laisse une fiche sans raison d'être — il faut **reconstruire** sur des angles d'adéquation technique. Quand le prix n'est mentionné qu'en passant (cas STM32, PIC), une simple reformulation suffit.

### Registre d'adresse par type de fiche (C65, promue 18/08)

- **Trames du V** : « on » / infinitif — registre de méthode, la fiche décrit *le projet*.
- **Fiches de réalisation et hub-colonne d'action** (`embarque/index`) : « tu » — la fiche parle *à l'étudiant qui réalise*. Le contraste avec le V est volontaire.
- **Hub-sommaire d'interface ou hub-parcours** (`meca/index`, `conduite/index`) : « on » — il recense ou décrit au lieu de guider un geste.
- **Tutos** : le « vous » tient les **instructions de manipulation directe** (procédure pas à pas, énoncés d'exercice, dépannage) ; le « on » / infinitif tient la **prose explicative**. Les deux cohabitent dans une même fiche.

**Ce qui est proscrit, c'est le tutoiement hors colonne de réalisation**, pas le « vous ». Ne jamais lire cette convention comme un dévoussage général — l'erreur a été commise deux fois, avec 20 conversions à annuler la première.

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

### Échappement du pipe dans un wikilink en cellule de tableau (C62, promue 18/08)

Un wikilink à libellé `[[slug|Libellé]]` placé **dans une cellule de tableau markdown** doit échapper sa barre : `[[slug\|Libellé]]`. Sinon le pipe non échappé est lu comme séparateur de colonne — le lien casse **et** la colonne se décale. Hors tableau, pas d'échappement.

*Corollaire outillage* : un audit automatique de liens doit traiter les deux formes comme une seule cible, sinon tout tableau remonte en faux lien mort (cf. `tools/audit-wikilinks.mjs`).

### Tableau « Références éprouvées », famille d'abord (C66, promue 18/08)

Dans une fiche où l'étudiant doit choisir des composants, un callout `[!tip]` — ou un tableau à l'intérieur — donne des **familles d'abord**, des **références éprouvées en exemples** (7805 / AMS1117, A4988 / DRV8825, NEMA 17, SSD1306…), une **phrase de précaution** (disponibilité à vérifier, la datasheet fait foi) et, en format tableau, une colonne « Pour choisir » renvoyant à la fiche où le choix se travaille. Une référence est un exemple, jamais une prescription — et jamais un prix (C71).

### Code commenté pour débutant (C77, promue 18/08)

Dans les tutos de famille, tout bloc de code reçoit des **commentaires en ligne sur chaque ligne utile** — le rôle, pas une paraphrase. Ce volet est **sans exception**. Un **motif déjà vu** se commente plus légèrement, avec renvoi à sa première occurrence.

L'encart **« Comment lire ce code »** qui suit un bloc difficile est, lui, **réservé aux idiomes embarqués** (amendement C85, encore en éprouvage §8). Critère de tri : *ce paragraphe serait-il identique dans une autre famille, voire dans un autre langage ?* Si oui, c'est un mécanisme de langage — il monte dans la fiche de lecture du langage et la fiche famille y renvoie. Si non, l'encart reste local.

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

### Médias des fiches — cluster promu (C68 / C69 / C73 / C74 / C78 / C79 / C80 / C81 / C84, promues 18/08)

Neuf conventions éprouvées sur l'ensemble des modules relus et appliquées en contrôle d'office à chaque session. Elles complètent la palette et le nommage ci-dessus par les règles de **production, de placement et d'audit** des médias.

**C73 — un dossier par fiche.** Les médias d'une fiche vivent dans `content/ressources/img/<slug-fiche>/`, embeds en chemin absolu `/ressources/img/<slug-fiche>/<fichier>`. **Descripteur = nom du média moins le préfixe de fiche** (`analyse-de-schema-zones.svg` → `analyse-de-schema-electronique/zones.svg`). Un média **référencé par plusieurs fiches** vit dans le dossier de la fiche éponyme, les autres pointent en absolu cross-dossier ; un média **transverse sans fiche éponyme** va dans `commun/`. *Contrôle de fin d'ajout* : lister la racine `img/`, aucun fichier ne doit subsister à plat.

**C74 — présentation.** (a) **Largeur par image** dans le markdown : `![alt|largeur](...)`, typiquement `|600` pour un montage et `|640` pour un schéma large. (b) **Centrage** images et vidéo par `custom.scss`. (c) **Légende italique centrée** réservée aux **figures autonomes** (panorama, schéma de référence) et aux **attributions** d'image tierce (`*Source : <détenteur> — <licence>, image non modifiée.*`) ; **pas de légende** sur une capture de procédure, le texte de l'étape la décrit. Formats : capture d'UI → WebP/PNG, photo → WebP/JPEG, animation → GIF ; viser 1200-1600 px de large et moins de 300-500 ko. **Un alt n'est pas un `<desc>`** : le `<desc>` décrit exhaustivement pour un lecteur d'écran, l'alt tient en **une phrase**.

**C68 — au moins un schéma explicatif par fiche-outil ou notion technique**, selon trois angles : **branchement** (comment l'objet se raccorde), **utilisation** (la chaîne d'usage) ou **compréhension** (le concept rendu visible). Le verdict se rend fiche par fiche, pas mécaniquement : une fiche peut être **couverte par le SVG de son hub**, relève parfois du **territoire capture**, et un pointeur d'interface délégué n'en porte pas.

**C79 — un montage, ou un schéma de principe, par bloc de code.** Un montage (câblage) pour du code qui pilote du matériel, un schéma de principe (chronogramme, diagramme d'états) pour du code purement logique. Si le câblage est **déjà montré plus haut** dans la fiche, un renvoi suffit — pas de duplication.

**C78 — le câblage se montre en schéma, pas en photo.** Une photo de breadboard est peu lisible ; Claude **produit le schéma** au lieu de laisser un placeholder photo. Un raster schématique déjà fourni (capture de simulateur, broches visibles) satisfait aussi le critère — c'est la *photo de montage* qui est proscrite.

**C80 — les broches portent les noms du code.** Tout schéma de câblage étiquette ses broches avec les **noms ou numéros que le code emploie** (`IN1 → D12`, `SDA → A4`), pour que schéma et sketch se lisent à l'identique. Corollaire rédactionnel : **nommer les broches par des constantes** plutôt que par des nombres en dur. C'est le pont qui manque le plus aux débutants entre le branchement physique et la ligne qui le pilote.

**C81 — le média s'audite contre le code réel de sa fiche**, jamais contre une description générique : broches exactes, composants exacts, périmètre exact. À l'intégration, chaque média est confronté au code **avant** d'être posé — conforme, on insère ; divergent, on régénère. **Sens inverse quand les captures préexistent** : c'est alors le texte et le code de la fiche qui se calent sur l'écran, ce qui suppose d'**ouvrir les images avant de rédiger**. *Borne* : un média trop lourd pour être lu ne s'intègre pas avec un alt inventé — soit une version allégée, soit l'auteur écrit l'alt.

**C84 — SVG-concept neuf quand celui du jumeau n'est pas transposable.** En module famille, un SVG du jumeau se copie localement tant que l'architecture illustrée est commune. Quand il **encode une architecture propre à l'autre famille**, on crée un **SVG-concept neuf adapté au modèle de la famille** plutôt que de plaquer un schéma faux. Quand une correction de fond retire une valeur chiffrée, le SVG correspondant s'étiquette **« principe »** (qualitatif) pour ne pas réintroduire le chiffre.

**C69 — pointes de flèches toujours en classes.** Les `<path>` des `<marker>` ne portent **jamais** un `fill` codé en dur : le `<style>` du SVG s'applique au contenu des markers, et un fill en dur ne suit pas le mode sombre (flèches ternes sur fils éclaircis). Toute pointe reçoit une classe avec override sombre. À vérifier au peigne SVG (`marker` + `fill="#`).

*Deux règles de production associées, acquises en incident* : `write_file` écrit la chaîne **littéralement** — un SVG s'écrit avec de **vrais caractères UTF-8**, jamais en échappements, et se **relit après écriture**. Et un attribut de présentation posé en classe (`text-anchor`, `font-size`) **écrase** celui de l'élément : l'ancrage s'écrit sur chaque `<text>`.

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

### Modules MCU — conventions de famille (C25 / C26 / C32 / C45 / C56 / C57, promues 10/06)

Six conventions éprouvées sur la couche des familles de microcontrôleurs (Arduino, ESP32, STM32, Teensy, ESP8266, MicroPython, Raspberry Pi) et promues depuis §8 le 10/06. Elles complètent C18 (mini-hub) sur la manière de **structurer une famille** sans gonfler le tally AA (familles de *largeur*, multi-couverture C20).

**C25 — 4 paliers de difficulté dans les hubs familles.** La section *Tutoriels* d'un hub famille classe ses tutos en quatre paliers croissants : *Prendre en main* / *Apprendre les bases* / *Notions avancées* / *Niveau ingénieur*. Sert aussi de **carte de priorité de publication** : *Prendre en main* + cœur des *Bases* = MVP strict ; *Avancées*/*Ingénieur* = MVP étendu/continu. Éprouvée 6/N (Arduino → ESP32 → STM32 → Teensy → ESP8266 → MicroPython). *Borne* : ne s'applique pas à un SBC (cf. C57 contre-cas — `raspberry-pi` a des paliers adaptés).

**C26 — double marquage [A] tuto famille / [T] fiche transverse.** Dans la section *Tutoriels* d'un hub, chaque entrée est marquée selon sa portée : **[A]** = tuto spécifique à la famille (`<famille>-<action>`, le « comment faire » en code/câblage) ; **[T]** = fiche transverse référencée (notion/compétence valable pour toutes les familles : `lire-une-datasheet`, `niveaux-de-tension`, `cpp`, `bus`, `gpio`…). Le hub liste les deux ; le marqueur *(transverse)* est visible côté étudiant. Évite la duplication des fondamentaux par famille (corollaire de la structure squelette transverse + embranchements). Éprouvée 6/N. Complément d'écriture : C32 ci-dessous (marqueur de renvoi vers la notion [T]).

**C32 — marqueur de renvoi vers une notion transverse.** Dans un hub ou une fiche de famille, un terme qui possède sa propre notion transverse reçoit le marqueur `*(→ notion [[x]])*` après sa première mention (ex. `esp32-deep-sleep → *(→ notion [[deep-sleep]])*`). Distingue visuellement le concept partagé [T] de son incarnation par famille [A]. Éprouvée Arduino puis ESP32.

**C45 — AA des tutos-outils porté par le hub.** Dans un mini-hub *méthode + outils* (`simulation-electronique`, `instruments-de-mesure`, `pcb`…), le **hub porte le critère AA** ; les fiches-outils filles restent `aa: []` (l'AA est porté collectivement, les outils étant des embranchements non bloquants). Exception : une fille qui porte un critère *distinct* du hub le déclare (ex. `wokwi` = PROJ/5). Éprouvée sur 3 hubs (simulation, instruments, pcb).

**C56 — lean-Bases.** Un hub de famille peut **maigrir délibérément son palier *Bases*** (pas de `<famille>-gpio`/`-serie` dédiés) dès lors que GPIO/UART sont **adéquatement couverts ailleurs** — par la couche [T] (`cpp`, `gpio`, `niveaux-de-tension`) **et** la/les fiche(s) de porte (`<famille>-arduino-core`, `<famille>-cubemx`…). Le déclencheur est la **couverture suffisante des périphériques de base**, *indépendamment* de la nature de la porte (native comme STM32/CubeMX, ou Arduino comme Teensy). Cran supplémentaire admis (ESP8266) : on peut aussi **mutualiser une capacité signature vers une famille voisine** (Wi-Fi ESP8266 → renvoi `esp32-wifi`) plutôt que de la dupliquer — exception ponctuelle à C47, le parcours restant autonome sur les *spécificités* de la famille. Éprouvée 3/N (STM32 native, Teensy Arduino, ESP8266 moins-disante).

**C57 — module « clone de curriculum ».** Une plateforme à **paradigme distinct mais transposable** (langage interprété, IDE propre — typiquement MicroPython) peut être traitée comme un **clone du curriculum Arduino** — mêmes paliers, même trame — en : (a) **substituant le hub langage** (parcours langage propre au lieu de `cpp`) ; (b) gardant les concepts agnostiques en **[T]** (non dupliqués) ; (c) transposant l'**API fiche à fiche** ; (d) **assumant les divergences de fond** là où matériel/langage l'imposent (signalées en clôture de fiche). Éprouvée sur les 3 vagues hands-on MicroPython (38 fiches) + fiches divergentes (machine à états, stockage, mémoire). **Contre-cas — borne de C57** : une plateforme à paradigme distinct **et non transposable** (un SBC sous Linux : on s'y sert d'un ordinateur, on n'y programme pas une puce nue) ne se clone **pas** — elle reçoit une **structure propre** (cf. `raspberry-pi`, paliers adaptés, ni les 4 paliers MCU ni un décalque).

### Fiche-étape de réalisation (C64, promue 18/08)

La fiche détaillée d'une étape de la colonne d'ingénierie (C63, §8) est une **fiche-trame adaptée** :

- **registre « tu »** (point d'entrée étudiant — diverge des trames du V, cf. §1 *Registre d'adresse*) ;
- **ossature de `concept.md` sans la section « Équipe »**, remplacée par **« Ce qui relève d'ailleurs »** : pilotage renvoyé au V, fabrication et sysadmin aux cours collègues, renvois transverses vers écoconception et sécurité-qualité ;
- **fiche de méthode qui orchestre les fiches outils existantes**, pas un re-cours technique → `aa: []`, les critères vivant dans les fiches outils. L'exception envisagée (porter un critère instruments sur une étape) a été explicitement rejetée ;
- le **livrable de chaque étape est un artefact technique** (tableau de composants, schéma validé, firmware et algorithme, protocole de tests, produit fini) qui *alimente* les livrables-jalons du V sans les cloner ;
- tag `realisation`.

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
11. ~~**Structure des H4 par étape dans les fiches-trame des phases du V**~~ — **promue vers § 6 le 25/05 suite 7** après épreuve 2/2 sur concept + PoC. Voir § 6 *Rythme des H4 par étape*.
12. **Nourrissage a posteriori de la section *Pièges fréquents*** — les pièges d'une fiche-trame peuvent émerger spontanément pendant la rédaction des étapes (warning/tip d'étape transformé en piège de fiche). Mode complémentaire à la relecture critique à froid (pattern spec-tech 23/05 suite 2). Éprouvé sur concept (3 pièges sur 8 = 37 %) et sur PoC (5 pièges sur 11 = 45 %, indicateur en croissance). **Confirmé 25/05 suite 8 sur dossier-technique (5/11 = 45 %, ratio aligné PoC). Épreuve 3/3 réussie. Promotion vers § 6 à acter à froid.** → § 6 (Structure des fiches-trame).

### Acquises 25/05 suite 7 (à éprouver sur dossier-technique)
13. **Relire les sections amont de la fiche (Posture, Objectif) avant de rédiger une section avale**. Extension de la leçon ±2 phrases (25/05 suite 6). Le doublon « on a le matos, on monte, on verra ce que ça donne » détecté en round 2 sur PoC étape 1 a montré que le doublon peut remonter jusqu'aux sections amont rédigées en session antérieure (Posture, Objectif). Discipline : passe rapide en lecture sur sections amont avant de rédiger une nouvelle section H4. Coût 1 round 2 sur PoC. **Épreuve 2/2 réussie 25/05 suite 8 (dossier-technique) + 26/05 (integration-et-tests). Promue § 5 (Collaboration) le 26/05 fin session.** Entrée § 7 conservée pour traçabilité. → § 5

### Acquises 25/05 suite 8 — chaîne C14 (CONDENSÉE)

14. **Seuil pratique MCP `write_file`/`edit_file` ≈ 30 ko de payload.** Au-delà, l'appel peut échouer **silencieusement** : le tool call semble réussir, le fichier est inchangé. Discipline : vérifier avec `get_file_info` après toute écriture lourde ; pour une opération massive (archivage, refonte, batch inter-fichiers), passer par un **script Node** plutôt que par MCP.

*Les cinq compléments 26/05 → 28/05 sont condensés ici ; détail complet au JOURNAL archivé.* Cinq modes d'échec d'anchor distincts ont été identifiés, tous à symptôme voisin (mismatch silencieux) : **typo de transcription** (d'où la règle de recopier `oldText` depuis une lecture fraîche, jamais de mémoire) ; **artefact U+FFFD** quand la troncature `head`/`tail` coupe une séquence UTF-8 — éviter d'ancrer sur les 1-2 dernières lignes du buffer ; **verrou Windows EPERM** quand Obsidian tient le fichier ouvert (erreur explicite, remède : changer d'onglet) ; **atomicité des multi-edits** — un anchor manquant annule tout le batch, donc appel séparé dès qu'un edit est ambitieux ; **NBSP U+202F**, dont l'attribution à Obsidian a été **testée et réfutée le 28/05** (aucune source active dans le flux réel ; `normalize-pilotage.js` + hook restent un filet contre le collage web, pas un remède à une injection systématique). Le **pattern MARKER + N segments** reste documenté pour un déplacement de bloc lourd via MCP, mais le script Node l'a supplanté en pratique.

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

### Acquises 28/05 suite 2 — PROMUES (trace)
**C25** (4 paliers) + **C26** ([A]/[T]) → §6 *Modules MCU — conventions de famille* (promues 10/06, éprouvées 6/N).

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
32. **Marqueur `*(→ notion [[x]])*` dans les hubs familles** — dans la section *Tutoriels* d'un hub famille, un tuto qui applique une **notion transverse** porte un marqueur `*(→ notion [[notion]])*` pointant vers elle (ex. `arduino-interruptions` → `[[interruption]]`, `arduino-timers` → `[[timer]]`, `arduino-deep-sleep` → `[[deep-sleep]]`, `arduino-memoire` → `[[memoire]]`, `arduino-machine-a-etats` → `[[machine-a-etats]]`). Rend visible le couple tuto-famille / notion-transverse — corollaire de C26 ([A]/[T]). Éprouvé 5× (02/06), confirmé sur ESP32. **Promue §6 le 10/06** (cluster *Modules MCU — conventions de famille*).
33. **Exception SVG conceptuel à C29** — C29 réserve les captures inline aux fiches-tuto MCU et proscrit les SVG produits unilatéralement, MAIS un **schéma conceptuel** (pas un câblage) reste légitime : chronogramme d'interruption, sawtooth de timer, boucle bloquante/non-bloquante. Frontière : SVG pour le *concept* qui clarifie mieux que le texte, captures inline pour le *câblage/UI*. Éprouvé 3× (`interruption`/`timer`/`programmation-non-bloquante`, 02/06) ; les tutos sans dimension conceptuelle forte (deep-sleep/pid/memoire/watchdog) restent sans SVG. À fusionner dans C29 à la promotion.

### Acquises 02/06 (suite) (avancées d'éprouvage)
34. **C19 (fiche transverse multi-techno) — vrai test atteint sur `firmware`.** L'épreuve `lire-une-datasheet` (28/05 suite 3) était faible (mono-exemple) et `analyse-de-schema` ne stressait pas la divergence techno. `firmware` (02/06 suite) est le cas réel (Arduino / ESP32 / STM32). **Option (c) retenue** — procédure générique en prose (super-loop → coopératif → MAE → modules → RTOS) + section « selon la famille » actant la thèse : les concepts d'architecture sont agnostiques, seuls outillage et API changent (renvois aux hubs familles). Mûr pour reformulation/promotion § 4 ou § 6.
35. **C25 (4 paliers) + C26 ([A]/[T]) — épreuve 2/N sur `esp32`.** Le hub `esp32` (02/06 suite) décalque `arduino` : 4 paliers + marqueurs `*(transverse)*` sur les fiches partagées du squelette (`cpp`, `niveaux-de-tension`, `lire-une-datasheet`, `bus`, `interruption`, `timer`, `firmware`). Confirmées 2/2 ; **promues §6 le 10/06** (6/N au final).
36. **C32 (marqueur `*(→ notion [[x]])*`) — confirmé sur ESP32.** Réutilisé sur `esp32-deep-sleep → [[deep-sleep]]` dans le hub `esp32`. La condition « après confirmation sur ESP32 » de C32 est levée ; **promue §6 le 10/06**.
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
45. **AA des tutos-outils d'un hub = `aa: []` (porté par le hub)** — dans un hub *méthode + outils* (ex. `simulation-electronique`), l'AA du domaine est porté **centralement par le hub** (la méthode transverse), et les tutos-outils filles portent `aa: []`. **Exception** : une fille qui couvre un critère *distinct* le porte en propre — ex. `wokwi` et `tinkercad` portent `RA-PROJET-C03-3/PROJ/5` (ils exécutent du code MCU, pas seulement « simuler »). Corollaire de C18 (hub porteur d'AA) + C20 (multi-couverture). Éprouvé 1/N (module `simulation` : hub porte EEE/3+/4 ; `falstad`/`ltspice` = [] ; `wokwi` = PROJ/5). Confirmé 2ᵉ/3ᵉ hub le 06/06 suite 3 ; **promue §6 le 10/06** (cluster *Modules MCU — conventions de famille*).
46. **« Simuler ≠ représenter » — exclusion d'outils hors-catégorie d'un hub** — un hub thématique n'accueille que les outils de sa **catégorie fonctionnelle**. Le hub `simulation-electronique` regroupe les simulateurs de *comportement* (Falstad/LTspice analogiques, Wokwi/Tinkercad MCU) et **exclut** les outils de *représentation/câblage* (Fritzing : breadboard / schématique / vue PCB, sans simulation de comportement). Critère de tri : « que **fait** mon circuit ? » (simulation) vs « à quoi **ressemble** mon câblage ? » (représentation). Fritzing relèvera d'une future fiche câblage/représentation. Pushback Claude accepté (niveau D, 06/06). À réutiliser au cadrage des prochains hubs d'outils.

### Acquises 06/06 (suite) — module ESP32 (9 tutos enfants + hub)
47. **Parcours MCU autonome / redites inter-familles assumées** (consigne D) — chaque cours d'une famille MCU (Arduino, ESP32, futurs) est un **parcours autoportant** : l'étudiant choisit un MCU et apprend de bout en bout sans dépendre des fiches d'une autre famille. Les **redites inter-familles** sont assumées au niveau de la couche **[A] (tutos famille)** — `esp32-serie` enseigne le série sur ESP32 complètement, zéro renvoi vers `arduino-serie`. La couche **[T] (concepts/langage)** reste **commune** (cpp, niveaux-de-tension, gpio-concept, firmware, bus, interruption/timer) : non board-specific, donc ne casse pas l'autonomie. Ré-incarner les [T] par famille (`esp32-cpp`…) serait l'inverse — contredit C42. Précise « factorisation transverse » (C42) + squelette transverse (26/05 suite 5). Éprouvé sur le module ESP32 (9 filles + hub, 06/06 suite). Décision niveau D.
48. **C27 — batch en deux régimes** — un batch de famille MCU mêle des fiches homogènes (decalque/standard) et des fiches plus conceptuelles/pivots (SDK, RTOS). Régime appliqué : homogènes en **A pur**, pivots (`arduino-core`/`idf`/`freertos`) **rédigés dans le même run mais avec calls structurels surfacés en fin de wave** (pas de A silencieux). Concilie « batch complet demandé » et la borne C27 « pivots one-by-one ». Éprouvé sur le trio ESP32 Ingénieur (06/06 suite). Raffine C27.
49. **Trame fiche-tuto MCU course-grade AVEC exercices** — les tutos d'une famille MCU adoptent la trame langage C38 (sections à fragments → *Code à lire* complet → *Pièges* → **Exercices** `[!question]`/`[!success]-` C40 → *Raccrochage* → *Voir aussi*) + captures inline C29. Évolution vs les `arduino-*` (sans exercices). **Asymétrie à résoudre** : par la logique « parcours autonome = cours », le module Arduino mériterait le même ajout d'exercices — à programmer en relecture. Éprouvé sur les 9 filles ESP32 (06/06 suite). Étend C38.

Épreuves sur le module ESP32 (06/06 suite) : **C25** (4 paliers) + **C26** ([A]/[T]) 3/N ; **C29/C33** (captures inline + 2 SVG conceptuels) ; **C32** (`*(→ notion [[x]])*` : `[[deep-sleep]]`, `[[firmware]]`) ; **C23** (exemples autonomes, pas le fil rouge bras 3 axes). **Gabarit SVG auto-contenu** confirmé (`<defs><style>` interne + override dark mode + marker fléché) — la liste `.th/.tl/.tf` du § 3 paraît **obsolète** (→ BACKLOG, nettoyage).

### Acquises 06/06 (suite 3) — Phase 3 squelette pro (instruments / débogage / PCB)
50. **C45 (AA tutos-outils = `aa:[]` porté par le hub) — confirmé 2ᵉ/3ᵉ hub.** Les hubs `instruments-de-mesure` (porte EEE/2 ; `multimetre`/`oscilloscope` = `[]`) et `pcb` (porte EEE/5 ; `kicad` = `[]`) décalquent le pattern éprouvé sur `simulation-electronique`. La condition « 2ᵉ hub d'outils » est levée ; **promue §6 le 10/06**.
51. **C46 (« simuler ≠ représenter ») — généralisé au placement de fiches.** Transposé du tri *intra-hub* (quels outils un hub accueille) au placement *inter-hub* (où vit une fiche) : `debugger-embarque` tenu **hors** du hub `instruments-de-mesure` car « déboguer ≠ mesurer » (catégorie fonctionnelle distincte) — placé en tuto transverse `eee/mcu/`. Le critère catégoriel de C46 vaut donc aussi pour décider *où* ranger une fiche.
52. **C33 (SVG conceptuel) — étendu aux fiches-outils.** +3 SVG conceptuels hors contexte MCU (`multimetre-serie-parallele`, `instruments-de-mesure-confrontation`, `pcb-flux`) : la frontière « concept → SVG, câblage/UI → capture » tient pour les fiches-tuto d'instruments/PCB (le SVG série/parallèle **remplace même un placeholder capture**, un schéma rendant mieux la topologie qu'une photo). À fusionner dans C29/C33 à la promotion.
53. **Sous-pattern « hub méthode + outils/instruments » confirmé.** `simulation-electronique` (méthode + simulateurs), `instruments-de-mesure` (méthode de mesure + instruments), `pcb` (flux de conception + outils CAO) : même structure C18 (hub porteur de la méthode transverse + filles-outils en `aa:[]`). Variante stable du mini-hub.
54. **C27 — « cadrage groupé + triage » tenu sur périmètre hétérogène (non-grappe).** Phase 3 n'était pas une grappe homogène (hub mesure + 2 instruments + debugger transverse + hub pcb + outil) : un cadrage groupé unique + triage par fiche (placements/frontières arbitrés une fois) a suffi, sans batch aveugle ni cadrage complet par fiche. Élargit l'usage de C27 au-delà des grappes homogènes.

### Acquises 06/06 (suite 4) — fiche transverse `alimentation-electronique`
55. **Borne de profondeur « Réguler » — choisir/dimensionner ≠ concevoir la topologie.** Pour une fiche EEE de puissance, le wiki traite le **raisonnement d'ingénierie système** (choisir une source, réguler / découpler / router les masses / protéger, dimensionner avec marge — critère `RA-EEE-C03-2/EEE/3`) mais **délègue la topologie interne** des convertisseurs (buck/boost, boucle de régulation, calcul d'inductance) au **cours d'élec de puissance**. Posée en aparté italique dans la fiche. Applique le principe socle-vs-ambition + « ne pas refaire le cours collègue » (§ 3 prompt projet) à une frontière **intra-EEE** (et non plus seulement EEE vs MME/design) : même un domaine cœur a une profondeur bornée par l'expertise de la fiche. Décision niveau D (cadrage validé). À réutiliser au cadrage des futures fiches de puissance/conversion.

Épreuves sur `alimentation-electronique` (06/06 suite 4) : **C19/C42** (fiche **notion transverse [T]** référencée par les familles MCU, pas dupliquée) confirmée sur une **frontière à 3 étages** explicite — `chaine-energie` (situe le bloc *alimenter/distribuer* dans la chaîne, niveau carte ⬆) / `alimentation-electronique` (les principes transverses [T]) / `arduino-alimentation` (la recette d'une carte donnée [A] ⬇), zéro redite (table courants/brown-out/batteries laissée côté Arduino). **C23** +1 (fil rouge bras 3 axes sur une fiche-**notion** de phase concept → conforte l'option (a) : le fil rouge cadre les concepts de phase concept). **C31** (duo *mauvais/bon* : masse en étoile vs masse chaînée, la fautive rendue proprement avec ✗ ambre). **C33/C52** (SVG conceptuel hors-câblage) étendu aux fiches transverses : +3 SVG (régulation linéaire vs découpage ; duo masses ; archi incarnée bras 3 axes).

### Acquises 06/06 suite 6 → suite 12 — modules MCU (STM32 / Teensy / ESP8266 / MicroPython) — CONDENSÉ

*Sept blocs d'éprouvage per-session condensés le 10/06 ; détail complet au JOURNAL archivé (sessions 06/06 suite 6 à suite 12).*

- **C56 (lean-Bases)** — introduite 06/06 suite 6 (STM32), éprouvée 3/N (STM32 native, Teensy Arduino, ESP8266 moins-disante), reformulée. **Promue §6** (cluster *Modules MCU*). Après C55, la numérotation éprouvage avait atteint **56**.
- **C57 (clone de curriculum)** — candidate ouverte suite 9 (MicroPython, premier module hors paradigme Arduino-core : substitution du hub langage), éprouvée sur les 3 vagues hands-on V1–V3 (38 fiches) + fiches divergentes (machine à états, stockage, mémoire). **Promue §6** (06/07, n°57).
- **Réutilisations confirmées sur ces 4 familles** (trace, conventions par ailleurs stables ou encore en §8) : C18 (mini-hub n-ième) ; C25/C26 (4 paliers + [A]/[T], → 6/N, promues) ; C27/C48 (batch 2 régimes, dont variante « vague 2 = capacités signatures » sur Teensy) ; C29/C33 (captures inline + SVG conceptuels) ; C40 (corrigés `[!success]-` frères) ; C43 (`const`/typage) + C44 (anti-rebond) ; C47 (parcours MCU autonome, nuancé par renvois cross-famille assumés sur ESP8266) ; C49 (trame tuto + exercices) ; C55 (borne de profondeur, étendue au DSP Teensy) ; C20 (multi-couverture, tally inchangé 79 %). Liens rouges `[[stm32]]`/`[[esp8266]]` résolus par la seule création des hubs (aucun patch).
- **Point ouvert MicroPython** : déviation `micropython-serie` → `micropython-repl` (le REPL/`print()` tient la console) — **à valider explicitement par Tim** ; `micropython-filtrage` laissé rouge (optionnel, pas de jumeau Arduino).

### Acquises 06/07 — promotion C57 + notes hygiène
57. **Module « clone de curriculum » (plateforme à paradigme distinct → clone Arduino + hub langage substitué)** — **promue / confirmée le 07/06**. Formulation (cf. candidate du bloc suite 12) : *une plateforme à paradigme distinct (langage interprété, IDE propre) peut être traitée comme un clone du curriculum Arduino — mêmes paliers, même trame — en (a) **substituant le hub langage** (parcours langage propre au lieu de `cpp`), (b) gardant les concepts agnostiques en **[T]**, (c) transposant l'**API fiche à fiche**, (d) **assumant les divergences de fond** là où matériel/langage l'imposent (signalées en clôture).* Éprouvée sur les 3 vagues hands-on MicroPython (V1-V3) + fiches divergentes (machine à états, stockage, mémoire) ; candidate ouverte suite 9, mûrie suite 12. **La numérotation éprouvage atteint 57.** Promues vers §6 le 10/06 (cluster *Modules MCU — conventions de famille* : C25/C26/C32/C45/C56/C57). ⚠️ **C50 — numéro orphelin** : listé ici comme « promouvable » par erreur, mais aucune convention C50 n'a jamais été définie (introuvable dans conventions.md, JOURNAL, archive, BACKLOG) — référence à ignorer (anomalie de numérotation, logée au BACKLOG).

Notes hygiène 07/06 (pas de convention numérotée) :
- **Script CLI pour déplacement de bloc lourd** — l'archivage massif (~46 ko, avec un octet U+FFFD hérité) a été fait par un **script Node fail-safe** (`tools/archive-journal-0607.mjs` : `slice` sur deux ancres propres + écritures atomiques archive-d'abord, `process.exit(1)` si une ancre manque) plutôt qu'une séquence d'`edit_file` — le ré-assemblage manuel des séparateurs `---` est fragile, le matching d'un `oldText` contenant des octets corrompus est douteux, et un `edit_file` peut s'appliquer à moitié. Outille concrètement la mention « préférer un script CLI pour les opérations massives ».
- **U+FFFD résiduels** — 2 occurrences héritées : `28/05 suite 2` (partie fidèlement en archive) et `06/06 suite 10` (reste au JOURNAL). **Hors** `normalize-pilotage.js` (qui ne cible que les invisibles) ; visibles, cosmétiques, fichiers non publiés → nettoyage manuel Obsidian si souhaité.

### Acquises 07/06 (suite) — module SBC Raspberry Pi (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* Le module Raspberry Pi est le **premier SBC** et fournit le **contre-cas de C57** (§6) : une plateforme à paradigme distinct **et non transposable** ne se clone pas, elle reçoit une structure propre. Il fournit aussi la **3ᵉ frontière de délégation C55** (sysadmin Linux pur délégué, prise en main bornée au shell headless + Python) et un **+1 à C23** (fil rouge bras 3 axes sur une fiche de phase concept). Le lien rouge `[[raspberry-pi]]` a été résolu par la seule création du hub — avec cette famille, le panorama `microcontroleur` n'avait plus aucun lien-famille rouge.

### Acquises 07/06 (suite 2) — arc liens rouges + 24 fiches pointeurs/notions

58. **Pointeur d'interface léger (notion déléguée)** — pour une notion d'interface (MME/ESE/MEO) dont le fond relève d'un cours collègue, structure courte et reproductible : **1ʳᵉ phrase = définition popover** (terme en gras) → section **« Dans le projet »** (à quoi ça sert *ici*, ancré fil rouge si pertinent) → **aparté italique de délégation** (« *…relève du **cours de X**…* ») → *Voir aussi* terminé par **« Cours de X (collègues) »** (gras non-lien). Nettement plus léger qu'une fiche de domaine (≠ trame C38/C49 ; modèle de référence `optimisation-mecanique`, en plus court). Applique C55 (borne de profondeur) à l'échelle d'une notion entière. Éprouvée en lot sur 13 pointeurs (6 procédés/instruments `mme/` + 7 normes `ese/` + `epi` + `acv-simplifiee`) le 07/06 suite 2. **La numérotation éprouvage atteint 58.**

Notes 07/06 (suite 2) (pas de convention numérotée) :
- **Asset téléchargeable → lien markdown à chemin absolu, jamais wikilink.** Un fichier non-`.md` servi par Quartz (`.docx`, `.pdf`…) se lie en `[libellé](/ressources/.../fichier.ext)`, **pas** en `[[fichier.ext]]` : Quartz résout les wikilinks vers des *pages* `.md`, et un wikilink vers un asset non-`.md` risque d'apparaître comme **lien de page cassé (rouge)** alors que le fichier existe. Généralise la convention des SVG (chemin absolu `/ressources/img/…`) à tout asset téléchargeable. Appliqué aux 4 liens `cdcf-ecole-template.docx`.
- **Anti-régression de liens (création/nettoyage)** — une fiche neuve (ou un texte réécrit) ne doit **jamais** introduire de wikilink vers un concept **précédemment délié** (`capteur`, `actionneur`, `effecteur`…) : ce serait recréer un lien rouge. Corollaire opérationnel du sweep liens rouges ; à garder en tête tant que ces concepts n'ont pas de fiche.
- **`search_files` (MCP filesystem) peu fiable** — a renvoyé « No matches » pour `cdcf-ecole-template` alors que le `.docx` existait. Le **listing de répertoire fait foi** : préférer `directory_tree`/`list_directory` pour vérifier une présence.

### Acquises 07/06 (suite 3) — re-scan exhaustif liens rouges + hygiène d'annotation

59. **Hygiène d'annotation (cible TODO → existante)** — quand une fiche cible passe de « à créer » à existante, retirer le **statut** `(à créer)`/`(à venir)` de chaque entrée *Voir aussi* qui la référence, **en conservant tout descripteur utile** : `*(fil transverse — à créer)*` → `*(fil transverse)*`, `*(à créer — délégué cours normatifs)*` → `*(délégué cours normatifs)*`, `*(à créer)*` nu → lien simple. **`(stub)` se conserve** tant que la fiche est réellement un stub (`draft: true`, tag `stub`). Ne **pas** toucher les `(à venir)` qui marquent un **contenu** non couvert (ligne de tableau d'un sous-outil), pas un lien. Corollaire d'hygiène de l'approche A (rouge = TODO) : un TODO résolu ne doit pas laisser sa cicatrice. Appliquée en lot le 07/06 suite 3 (43 annotations, 11 fiches). **La numérotation éprouvage atteint 59.**

Notes 07/06 (suite 3) (pas de convention numérotée) :
- **Piège `edit_file` : ne jamais accoler un symbole dollar à une apostrophe inverse dans le `newText`** — le moteur de remplacement interprète ce couple (façon JavaScript : « texte précédant le match ») et **réinjecte tout le début du fichier** au point d'insertion. Survenu en écrivant l'entrée JOURNAL de cette session (une notation `regex` `…X.md:` suivie de la fin d'un code inline). Remède : reformuler pour séparer les deux caractères. Repérable car le diff montre le bloc d'en-tête dupliqué.
- **Re-scan liens rouges par `bash` — méthode réutilisable** : les déversements `read_multiple_files` persistent dans `/mnt/user-data/tool_results/*.json` (réutilisables sans relire, même après compaction) ; segmenter par **en-têtes de chemin** (ligne = chemin Windows finissant par `.md:`), pas par `---` (présent en YAML/règles md) ; **découper les basenames sur l'antislash à la main** (`os.path.basename` ne sépare pas un chemin Windows sous Linux → faux négatifs silencieux). `repr()` des lignes-cibles avant `edit_file` pour révéler d'éventuels NBSP.

### Acquises 08/06 — refonte architecture 3 branches + callout livrable

60. **Architecture par 3 branches métier (couche d'orientation)** — l'orientation de l'étudiant se fait par **branche métier** (Conduite de projet = PROJ+MEO+ESE · Système embarqué = EEE+MIA · Méca = MME), pas par domaine AA. Réalisée comme **couche par-dessus le rangement existant, sans déplacer les fichiers** : (a) `content/index.md` = porte d'entrée vers les 3 branches ; (b) **3 hubs de branche** — le cycle en V (`hub/index`) pour Conduite de projet, `fiches/eee/index` promu pour Système embarqué, `fiches/mme/index` promu pour Méca ; (c) fichiers **rangés par domaine AA** conservés (traçabilité de couverture) ; (d) navigation **transversale par slug** (les liens `[[…]]` résolvent quel que soit le dossier → un élève entré par une branche est réorienté vers les autres au fil des liens). Les index `proj`/`meo`/`ese` restent des index de domaine, accessibles via le hub Conduite. **Non-déplacement justifié** : éviter la régression des embeds en chemin relatif + le changement de toutes les URL, préserver la traçabilité AA. La numérotation éprouvage atteint **60**.

61. **Callout *Livrable* à lien intégré (fiches-trame du V)** — dans une fiche-trame de phase, le renvoi vers la fiche détaillée de la phase est porté par le **mot-clé du callout `[!livrable]`** (ex. « Le [[dossier-technique|dossier technique]] complet… »), et non par une ligne « À lire ensuite » séparée sous le callout. Le mot-clé devient le point d'entrée naturel et la redondance disparaît. Éprouvée sur les 5 phases du hub Conduite de projet (08/06). La numérotation éprouvage atteint **61**.

Notes 08/06 (pas de convention numérotée) :
- **Méthode de relecture humaine** : 1 conversation = 1 session ; `_drafts/relecture-ordre.md` (213 fiches ordonnées, cases, repères image/attention) = fil conducteur inter-conversations (synchronisé entre PC) ; relire sur le **rendu Quartz local** (`npx quartz build --serve`, pas Obsidian où les images absolues paraissent cassées) ; cocher à la **validation** (pas à la production) ; **prompt de reprise** rédigé en clôture.
- **MCP pro déféré** : au démarrage PC pro post-reboot, les outils `theskillcodex:*` sont **différés** (≠ `filesystem:*` perso en direct) → `tool_search` requis pour charger chaque grappe avant appel ; « has not been loaded yet » = à charger (≠ « not found » = serveur absent).

### Acquises 09/06 — relecture trames du V

*Bloc vidé le 18/08 : **C62** (échappement du pipe dans un wikilink en cellule de tableau) promue au §2.*

### Acquises 09/06 (suite) — production colonne « Système embarqué » (hub + 5 fiches-étape)

63. **Colonne d'ingénierie orthogonale au cycle en V** — un hub de branche peut être une **colonne de méthodologie de réalisation** (« où j'en suis / quoi faire ensuite ») à N étapes, **orthogonale au cycle en V** : le V porte la *gestion de projet* (axe temporel — revues, jalons, équipe, livrables-jalons), la colonne porte l'*ingénierie* (axe technique — réaliser le sous-système). Mêmes projet, deux lentilles. Frontière tenue par trois dispositifs : (a) un `[!info]` d'orthogonalité **en tête de hub** ; (b) un **aparté italique de mapping par étape** (« *Côté cycle en V : ce volet alimente la phase X* », lien vers la fiche du V) — pas un callout par étape (densité) ; (c) une **section de clôture** qui renvoie tout le pilotage au V. La colonne **enfile les fiches existantes dans l'ordre d'usage** et ne réécrit jamais le management. Hub sobre (calqué sur `hub/index`) : prose + grappe de liens + `[!livrable]` par étape, **sans** `[!example]` (le fil rouge incarné migre vers les fiches-étape, sinon dépassement du budget callouts ~10). Éprouvée sur `eee/index` (09/06). **La numérotation éprouvage atteint 63.**

Notes 09/06 (suite) (pas de convention numérotée) :
- **C61 confirmée au rendu** — le lien dans le **mot-clé du callout `[!livrable]`** s'affiche correctement sur le rendu Quartz (validé Tim) ; le label « Livrable X/N » se place dans le titre, avant le lien.
- **Point ouvert — registre « tu » vs « on »** : la colonne realisation (hub + 5 fiches) est en **« tu »**, les trames du V en **« on »/infinitif**. Incohérence de registre à l'échelle du wiki **arbitrée 10/06 → C65 ci-dessous** (contraste conservé). La pilote `concevoir-l-electronique`, d'abord en « on » (calque `concept.md`), a été reconvertie en « tu ».

### Acquises 10/06 — relecture colonne « Système embarqué »

Notes 10/06 (pas de convention numérotée) :
- **C64-c confirmée** — `aa: []` maintenu vide sur les 6 pages de la colonne (hub + 5 fiches-étape) ; l'exception envisagée (critère instruments sur `fiabiliser-et-deboguer`) est **rejetée** — les critères vivent dans les fiches outils.
- **Wikilink `x/index` ne résout pas par slug** — `[[eee/index|…]]` produit un href `/eee/` → 404 (le slug réel d'un index de dossier est `fiches/eee`) ; forme correcte `[[fiches/eee/index|…]]` (chemin complet depuis `content/`). **Angle mort des audits** — le scan bash de la source ne voit pas cet échec de résolution, seul le clic-test au rendu le détecte (sweep des formes équivalentes → BACKLOG).
- **SVG — les attributs de présentation se posent par élément** — une règle CSS de classe dans `<defs><style>` (`text-anchor`, `font-size`) **écrase** les attributs de présentation posés sur les éléments. Conséquence : ne jamais définir `text-anchor` en classe ; l'ancrage s'écrit sur chaque `<text>`.

### Acquises 10/06 (suite) — réorganisation physique en 3 branches (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* **C60 révisée** : les 3 branches sont devenues des **dossiers physiques** (`content/conduite/`, `content/embarque/`, `content/meca/`, option « la branche EST son hub »), le non-déplacement initial reposant sur des raisons caduques avant publication. Conséquences traitées à l'époque : 32 wikilinks d'index repointés en **forme chemin-complet-depuis-`content/`**, seule forme qui résout pour un `x/index` ; `quartz.layout.ts` masquant `ressources`. État courant du dépôt, plus une convention en épreuve.

### Acquises 11/06 (relecture §4 + production alimentation)
67. **Petit SVG de branchement par organe** — dans une fiche dont la section *Comment* énumère des organes câblables (protections, adaptations…), chaque organe reçoit un **petit SVG de branchement** (~560×200) : l'organe en ambre avec son vrai symbole de schéma, source/charge en blocs gris, la faute en rouge C28, note de pied. Extension de C33 (concept → SVG) vers le « branchement minimal ». Bornes posées : pas de SVG pour un organe que l'étudiant ne câble pas (protections intégrées — thermique, brown-out, BMS), ni pour un câblage trop subtil pour le format (MOSFET-P anti-inversion : note textuelle). Éprouvée 1/N (5 SVG sur `protection-electronique`, 11/06) ; **étendue de fait aux instruments** le 11/06 (suite 2) : injection GBF (`generateur-de-signaux`), sonde + terre (`oscilloscope`), dérivation sur bus (`analyseur-logique`) — le « branchement minimal » vaut aussi pour brancher un instrument, pas seulement un organe. **La numérotation éprouvage atteint 67.**

### Acquises 11/06 (suite 2) — relecture §4 fin + §5 algorithme

*Bloc vidé le 18/08 : **C68** (un schéma explicatif par fiche-outil) promue au §3.*

### Acquises 12/06 — relecture §6 socle MCU (complète, 37/37)
Notes 12/06 (pas de convention numérotée) :
- **C68 éprouvée en grand sur le §6 (37 fiches)** avec une **typologie de verdicts** stabilisée : *SVG justifié* (adc, pwm, deep-sleep, debugger-embarque, trio bus gonflé à 2 SVG chacun — branchement + chronogramme) / *couvert par le SVG du hub* (processeur, memoire, systeme-d-exploitation, entree-sortie, les 5 filles sans-fil) / *territoire capture C29* (ide, cpp-logs) / *photo plutôt que schéma* (shield). Le verdict se rend fiche par fiche, pas mécaniquement.
- **Extension C29 arbitrée** : les mentions de capture inline sont désormais admises sur les **notions [T]** (1ʳᵉˢ : `ide`, `shield`), pas seulement les tutos.
- **Motif de relecture « porte famille manquante »** : les notions [T] écrites avant les modules MicroPython/ESP32 ne renvoyaient que les tutos Arduino — contrôle d'office instauré et appliqué en série (interruption, timer, deep-sleep, firmware, debugger, manipulation-de-bits, trio bus, wifi/ble, hub cpp → micropython-langage). À conserver comme point de contrôle pour les sections restantes.
- **C66 réutilisée** (panorama hub MCU enrichi XIAO/Pico, tableau hub sans-fil) ; **C67 étendue de fait** aux chaînes instrumentées (debugger : série directe vs sonde SWD/JTAG) et aux branchements de bus (uart/i2c/spi avec masse commune et tirage).

### Acquises 12/06 (suite) — relecture branche Conduite de projet
70. **Ancre vers un titre contenant un deux-points → double tiret.** Pour un wikilink à ancre `[[fiche#titre|libellé]]` visé sur un titre qui contient « : » (ex. `## Cas particulier : projet école sans client réel`), le slug GitHub/Quartz **supprime le deux-points mais conserve les espaces qui l'entouraient**, qui se réduisent en **double tiret** : « particulier : projet » → `particulier--projet`. L'ancre doit donc porter le double tiret : `#cas-particulier--projet-école-sans-client-réel`. Une ancre à tiret simple **échoue silencieusement** (lien rouge / saut nul). Comme l'angle mort `x/index` (10/06), **seul le clic-test au rendu le détecte** (le scan de la source ne voit rien). Appliquée ×2 (`bete-a-cornes`, `cahier-des-charges-fonctionnel`). **La numérotation éprouvage atteint 70.**

Notes 12/06 (suite) (pas de convention numérotée) :
- **Index de domaine = sommaire par grappe pédagogique.** Remplir un index de domaine (`proj`/`meo`/`ese`) : intro courte (renvoi au parcours pour le déroulé chronologique) + sections **par famille de fiches** + **une ligne descriptive par fiche** dans l'ordre pédagogique. `proj/index` range 30 fiches en 5 grappes (trames / analyse fonctionnelle / planification / concept-arbitrage / réalisation-bilan). Cas ponctuel (les 3 index sont désormais remplis), noté pour un futur index de domaine.
- **Harmonisation `phases` sur les notions + enum canonique.** Notion **transverse** → les 5 phases ; notion **ciblée** → la/les phase(s) concernée(s) (ex. `cable-management` → `integration-et-tests`). La valeur d'enum est **`integration-et-tests`**, jamais `integration` (un `integration` erroné cassait silencieusement le filtre Explorer — corrigé sur `acv-simplifiee`) ; une clé fantôme `phase:` (singulier, vide) a aussi été retirée de `gestion-de-projet`.
- **`x/index` n'est pas par défaut un stub.** Né du revert `mecatronique` : `conduite/index` **est** la fiche parcours complète (cycle en V), pas un hub de branche vide — vérifier le contenu d'un index avant d'y (re)pointer des liens. Complète C60.
- **aa ajouté sur une fiche précédemment `aa:[]` = multi-couverture, tally inchangé.** 5 fiches ont reçu un aa cette session (`mind-map` PROJ/1, `matrice-de-decision` PROJ/6, `acv-simplifiee` ESE/1+2, `archivage-projet` MEO/6, `revue-de-code` MEO/3) ; tous les critères étaient déjà C ailleurs → **C20, statut dominant et tally 79 % inchangés**. Pushback aa validé : `amdec` reste `aa:[]` (aucun critère sûreté de fonctionnement au référentiel, vérif xlsx), `mecatronique` reste `aa:[]` (définitionnelle).

### Acquises 13/06 — relecture branches Méca et ESE (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* Les deux branches d'interface ont validé **C58** (pointeur d'interface léger) sur 14 fiches sans accroc — motif **promotion-ready**, à arbitrer. Deux acquis de portée générale en sont sortis. **Nuance de C65** : le « tu » marque l'adresse à l'étudiant **qui réalise**, pas tout hub de branche — un hub-sommaire d'interface ou un hub-parcours reste en « on », parce qu'il recense ou décrit au lieu de guider un geste. **Vérifier l'existant avant de poser une réciproque** : lire la *Voir aussi* de la fiche cible avant d'y ajouter un lien retour (C14 appliqué aux liens). Note de forme : un index navigationnel ne porte **pas de champ `type`**.

### Acquises 13/06 (suite 2) — production module XIAO ESP32-S3

72. **Un hub de famille assume un primo-découvreur.** Un hub de famille (MCU, etc.) peut être le **premier point de contact** d'un étudiant avec le sujet : sa prose ne présuppose jamais le parcours déjà lu. Proscrit : « ce hub enfile les fiches existantes », « comme tu l'as vu ». À la place, formuler les renvois en self-contained — « le tableau pointe chaque besoin vers la fiche qui l'explique ; si tu débutes, parcours-le de haut en bas ». Demande Tim (reformulation de l'intro « Mettre en œuvre » du hub XIAO). Éprouvée 1/N. **La numérotation éprouvage atteint 72.**

Notes 13/06 (suite 2) (pas de convention numérotée) :
- **C47 (parcours par composition) réemployée en production.** Le module XIAO n'introduit aucune compétence neuve : le hub délègue le SoC à `esp32`, le choix inter-familles à `microcontroleur`, les fondamentaux aux [T], et ne porte que le **spécifique carte** (onze broches, alimentation/charge, antenne, variantes) en aiguillant le reste. `aliases: [xiao]` résout le lien rouge `[[xiao]]` du panorama sans retoucher `microcontroleur`. Confirme C47 en création (pas seulement en relecture).
- **C66 / C67 / C68 / C69 appliquées sans accroc** : table famille-first des variantes + table d'aiguillage (C66, pipes échappés C62) ; SVG extendeur I²C de type *branchement* (C67) ; au moins un SVG par fiche, 7 au total mêlant *compréhension* (brochage, variantes, périphériques Sense) et *branchement* (extendeur, antenne, alim, bootloader) (C68) ; markers en classes + override sombre + text-anchor par élément (C69).
- **Specs vérifiées au pad en production** (wiki Seeed, pas de mémoire) : D6 = GPIO43, 9 ADC (D6/D7 et A11/A12 exclus malgré le nom), LED utilisateur GPIO21 active à l'état bas, charge LiPo 50 mA, deep sleep 14 µA, 3V3 <= 700 mA.

### Acquises 15/06 — relecture §7 Arduino (hub + prise-en-main) : images, vidéo, organisation des médias
75. **Vidéo (première du wiki).** Intégration par **balise HTML5** `<video controls src="/ressources/img/<fiche>/x.mp4"></video>`, **hors callout** (le HTML brut rend mieux en bloc qu'en blockquote) ; centrage via la règle `article video` (C74-b). **Placeholder de production** analogue C29 : `Intégrer une vidéo de *<description>*`. Formats : **MP4 (H.264) / WebM** en local pour les courts clips ; **externe (`<iframe>`)** au-delà (GitHub Pages : 100 Mo/fichier, dépôt qui gonfle). Éprouvée 1/N (`arduino-prise-en-main`, install pilote CH340). **La numérotation éprouvage atteint 75.**

Notes 15/06 (pas de convention numérotée) :
- **Gabarit hub de famille (Arduino = référence des suivants).** Arbitré 15/06 : **tutoriels en tête** (la fonction hub prime), `aa: []` (PROJ/5 porté par les tutos, EEE/2 par `microcontroleur`), `phases: [concept]`, marqueurs C26 `(transverse)` / C32 `(→ notion [[x]])`, ligne « **Par où commencer ?** » pointant la fiche prise-en-main. À décliner sur `esp32`, `stm32`, etc.
- **C71 (prix/achat) en contrôle d'office sur le batch Arduino** — fiches antérieures à C71 ; mention « 5-10 € sur AliExpress » trouvée et retirée sur `arduino-prise-en-main`. À guetter sur les fiches suivantes (modules, actionneurs, afficheurs probables).
- **C29 étendue** : la mention de capture admet désormais la **vidéo** (placeholder C75) et les **GIF** (animation) ; verdict au cas par cas.

### Acquises 16/06 — migration médias C73 (exécution)

**C73 exécutée.** La migration des médias vers des dossiers par fiche (mode b) est **faite sur l'intégralité du dépôt** : 121 SVG déplacés de `content/ressources/img/` (à plat) vers `content/ressources/img/<slug-fiche>/`, tous les embeds repointés en chemin absolu `/ressources/img/<slug-fiche>/<descripteur>.svg`. Vérification finale : la racine `img/` ne contient plus que des dossiers (zéro `[FILE]` *.svg ; seuls `archive/` et `commun/` font exception au schéma « un dossier = un slug »). Méthode : **par fiche** (`create_directory` -> `move_file`(s) -> `edit_file` `dryRun:false` + diff vérifié), anchor d'édition = fragment ASCII pur `](/ressources/img/<ancien>.svg)` (unique par fiche, sans NBSP) ; atomicité respectée (1 fiche = 1 batch).

76. **Placement et nommage des SVG sous C73** — règle de rangement quand on déplace ou crée un SVG sous le régime « un dossier par fiche » (C73) :
    - **Descripteur = nom du SVG moins son préfixe commun de fiche**, pas le slug entier. Cas **préfixe != slug** : `analyse-de-schema-zones.svg` -> dossier `analyse-de-schema-electronique/`, descripteur `zones.svg` ; `raspberry-pi-architecture-bicephale.svg` -> `raspberry-pi-projet/architecture-bicephale.svg` (préfixe `raspberry-pi-` retiré, dossier = slug complet).
    - **SVG multi-fiches** (référencé par plusieurs fiches) : rangé dans le dossier de la fiche **éponyme** ; les autres fiches pointent en **absolu cross-dossier**. Cas conduite : `bete-a-cornes-generique`, `pieuvre-generique`/`pieuvre-bras-3-axes` (home `bete-a-cornes/`, `pieuvre/` ; cross-réf depuis `specification-technique`).
    - **SVG transverse sans fiche éponyme** -> bucket **`commun/`** (`/ressources/img/commun/<nom>.svg`). Cas : `fils-transverses-generique.svg` (3 trames du V).
    - **Renommage ponctuel admis** quand le nom à plat n'a pas de préfixe-slug exploitable : `programmation-non-bloquante.svg` -> `arduino-programmation-non-bloquante/bloquant-vs-non-bloquant.svg`.
    - **Contrôle de fin de migration/ajout** : lister la racine `img/`, aucun `[FILE]` *.svg ne doit subsister à plat. C'est ce contrôle qui a rattrapé `techno-sans-fil-comparaison.svg` (la famille `sans-fil/` manquait de la carte SVG de la session 15/06). **La numérotation éprouvage atteint 76.**

### Acquises 16/06 (suite) — relecture §7 Arduino (code commenté débutant)

*Bloc vidé le 18/08 : **C77** (code commenté pour débutant) promue au §2 et **C78** (câblage en schéma, pas en photo) au §3.*

### Acquises 17/06 — relecture §7 Arduino (capteur analogique, sortie PWM, notion potentiomètre)

Notes 17/06 (pas de convention numérotée) :
- **Vérification en source = filet anti-erreur (C14 élargi aux specs).** L'erreur ADC de l'Uno R4 (`arduino-capteur-analogique` annonçait « 12 bits par défaut » → en réalité **10 bits**, 12/14 sur option `analogReadResolution()`) a été prise en lisant les docs Arduino plutôt qu'en se fiant à la fiche. Idem `analogWrite()` (0-255 par défaut, y compris R4). **Specs hardware = source primaire, jamais la mémoire ni la fiche existante.**
- **Notion-composant = exception réservée.** Le potentiomètre obtient une notion [T] (générique, réutilisé, archétype du diviseur) ; les capteurs one-shot (LDR, LM35…) restent **inline**. Pas de bibliothèque de composants avant socle + publication (BACKLOG).
- **Cache GitHub Pages.** Après push, une image au **même nom** peut rester servie depuis le cache navigateur/CDN ; `Ctrl+Shift+R` ou un test direct de l'URL `?v=2` tranche « cache » vs « pas déployé ». Vécu sur `pont-diviseur-ldr.svg`.

### Acquises 17/06 (suite) — relecture §7 Arduino (bus, actionneurs, afficheur, debug)

Note 17/06 (suite) (pas de convention numérotée) :
- **`write_file` n'interprète pas les échappements `\u` — SVG en vrais caractères UTF-8.** Un fichier écrit via `filesystem:write_file` reçoit la chaîne **littéralement** : un `\u00e9` y atterrit en six caractères visibles, pas en « é » (contrairement à `edit_file`, dont le `newText` interprète bien les `\u`). Conséquence : les SVG créés par `write_file` s'écrivent avec de **vrais caractères** accentués / symboles (é, è, →, Ω…), jamais en `\u`. Contrôle : **relire le fichier juste après écriture**. Incident 17/06 (suite 2) — 6 SVG de la session (`ou-est-le-probleme`, `retour-position`, `branchement-i2c` afficheur+i2c, `branchement-sd`, `branchement-28byj48`) portaient des `\u` en clair dans leurs notes de pied ; corrigés (réécriture complète ou `edit_file` ciblant le littéral `\\u`). Les SVG déjà écrits en vrais caractères ou ASCII+entités (`cablage-croise`, `pont-serie`, `branchement-l298n`, `branchement-sg90`) étaient indemnes.

### Acquises 17/06 (suite 3) — fin du §7 Arduino (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* Trois acquis retenus. **Note de portabilité « familles MCU »** (affinement de C47) : quand une fiche traite un mécanisme dont l'API est propre à l'AVR et qu'aucune fiche famille cible n'existe, on ajoute une note brève — le principe reste le même, seule l'API change — close par un renvoi, au lieu de détailler les autres familles. C'est le pendant « sortant » de C47, qui délègue quand la cible existe. **Créer une notion mère seulement si le concept est transverse et substantiel** : `asservissement` a été créée pour `arduino-pid`, alors que `arduino-watchdog` s'appuie légitimement sur `[[timer]]`. **Les notions transverses systèmes/contrôle** se rangent à la racine de `content/embarque/`, près de `schema-bloc-fonctionnel` et `chaine-energie`.

### Acquises 25/06 — intégration des médias familles MCU (audit SVG↔code)

Notes 25/06 (pas de convention numérotée) :
- **Méthode d'insertion des embeds familles MCU.** Les fiches portent un **placeholder inline** (« Prendre capture d'écran ou photo de *…* ») à l'endroit exact du visuel ; on le **remplace** par l'embed `![alt descriptif|largeur](/ressources/img/<slug>/<fichier>)` (largeur **600** montage, **640** schéma large), en assumant la substitution **photo → schéma SVG** (C78). Pour un **schéma de principe sans placeholder** (brochage, frise, registre, STA/AP), insertion **au point logique du raisonnement** + **flag « à confirmer au rendu »**. Alt sans backticks (texte brut).
- **Vérification d'un dépôt média (réception).** Avant d'intégrer un lot déposé hors périmètre MCP (Bureau → dépôt) : contrôler **structure** (dossiers attendus présents), **encodage** (lecture d'un échantillon inter-familles — `≠`, `Ω`, `→`, accents — pour confirmer l'UTF-8 du Bloc-notes), **intégrité XML** (début `<svg>` / fin `</svg>`, non tronqué), **absence de `.svg.txt`** (étape « Tous les fichiers » respectée), **noms de dossiers/fichiers** (un typo `stm-32` vs `stm32` casse le slug ; une parenthèse dans un nom casse `![]()`).

### Acquises 27/06 — régénération des médias familles MCU (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* Session de bouclage de **C81** (§3) : les 6 SVG flaggés divergents le 25/06 ont été régénérés contre le code réel de leur fiche, puis validés au rendu. Trois acquis de forme en sont sortis. **Un SVG mal ciblé se déplace, il ne se régénère pas** — `create_directory` + `move_file` vers le dossier-slug de la vraie fiche (C73), puis embed. **Attribution d'une image tierce** = légende italique sous l'embed, `*Source : <détenteur> — <licence>, image non modifiée.*` (extension de C74-c). **« Acceptable au rendu » n'est pas « définitif »** : une réserve esthétique va au peigne SVG, jamais en blocage d'intégration.

### Acquises 29/06 — relecture de fond §13 MicroPython (registre, float, Pin LED, accents)

82. **Float simple précision (MicroPython/RP2).** Le firmware standard du Pico calcule en **simple précision** (float 32 bits, vérifié en source). Les corrigés/exemples affichant un float posent une valeur **approchée** (`≈ 1,65 V`, `523.33…`), jamais des décimales exactes. Sur la fiche qui *introduit* le type (`micropython-types`), c'est un **piège pédagogique** explicite (`float("3.3")*2` peut afficher `6.5999999` ; comparer deux réels par `abs(a-b) < ε`, pas `==`). Sorties REPL float **à vérifier au matériel** (specs = source primaire). Éprouvée 1/N. **La numérotation éprouvage atteint 82.**

83. **`Pin("LED")` pour les exemples LED réel (MicroPython).** Alias portable (résout GP25 sur Pico/Pico 2 **et** la LED CYW43 sur Pico W/Pico 2 W) ; jamais `Pin(25)` en dur, qui n'allume rien sur les variantes W. **Exception : la simulation Wokwi** garde `Pin(25)` (alias nommé pas toujours résolu — piège dans `micropython-simulation`). Éprouvée (hub, prise-en-main, controle, repl, modules — 4 blocs réalignés). **La numérotation éprouvage atteint 83.**

Notes 29/06 (pas de convention numérotée) :
- **Registre des tutos = précision de C65 (corrige une sur-application).** Le « on »/infinitif vaut pour la **prose explicative** ; les **instructions de manipulation directe** — procédure pas à pas, narration « essaie-le » de l'Exemple, énoncés `[!question]`, dépannage — restent en **« vous »**. Vérifié en source : l'étalon `arduino-prise-en-main` est **intégralement en « vous »**, `arduino-gpio` garde le « vous » de l'Exemple, `cpp-execution` ses exercices. Les « vous→infinitif » antérieurs (i2c, servomoteur) étaient des **corrections ponctuelles** de « vous » égarés en prose, **pas** un dévoussage. Erreur de la session : `micropython-prise-en-main` (16) et `-simulation` (4) dévoussées à tort → **20 conversions annulées**. C65 d'office §13 = ne convertir que le « vous » de prose explicative.
- **Accents dans les commentaires de code.** On **accentue** comme la prose (`# entrée`, `# intégrée`, `# éclair court`) — le bloc Quartz rend l'UTF-8 sans souci. Contrôle d'office léger §13.
- **Parité C77 par le jumeau.** L'encart « Comment lire ce code » suit le jumeau Arduino : s'il n'en a pas (`arduino-gpio`, logique pull-up couverte par bullet + commentaire + piège), la fiche MicroPython non plus. Verdict C77 par comparaison, pas mécanique.
- **Câblage d'une fiche de simulation.** L'Exemple Wokwi (`micropython-simulation`, bouton GP14 + LED GP15) est couvert par la **capture** (raster simulateur = exception C78, broches du code visibles) — pas de SVG dédié, même sous câblage strict.

### Acquises 30/06 — relecture de fond §13 MicroPython terminée (SVG non transposable, vérif specs RP2)

Notes 30/06 (pas de convention numérotée) :
- **Vérification source RP2 = filet (prolonge C82).** Trois specs corrigées en lisant doc/tracker MicroPython, jamais de mémoire : `machine.Timer` **virtuel** sur RP2 (`id=-1`) + callback **soft IRQ par défaut** / **hard IRQ via `hard=True`** (la règle « pas d'allocation » ne vaut que pour le hard) ; `lightsleep()` réveil-broche = **bug ouvert** (#7035/#16442) ; `deepsleep` ≈ `lightsleep` sur RP2040 (pas de µA). Confirme C82 au-delà des floats : *toute spec RP2 se vérifie en source avant correction*.
- **Verdict C82 « clean ».** Une fiche bourrée de flottants peut être **C82-propre** si **aucun n'est affiché ni asserté en décimal** (`pid` : `print` de 2 entiers, gains en entrée, `dt` calculé live → le piège simple précision ne mord pas). C82 ne mord que sur une **décimale assertée**, pas sur la simple présence de floats.
- **Divergence honnête étiquetée « principe ».** Quand une correction de fond retire une valeur chiffrée (`deepsleep` ne descend pas en µA sur RP2), le SVG-concept correspondant s'étiquette **« principe »** (faible/élevé qualitatif) pour ne pas réintroduire le chiffre faux — cohérence fiche↔visuel.

### Acquises 30/06 (suite) — archivage de masse du JOURNAL (CONDENSÉ)

*Aucune convention numérotée ; détail au JOURNAL archivé.* **Déplacer un bloc lourd se fait par script Node fail-safe, jamais par une séquence d'`edit_file`.** Le déclencheur décisif n'est pas la taille mais la présence d'**échappements littéraux** dans la prose — antislash-u, antislash-n, pipe échappé de wikilink — que le `newText` d'`edit_file` **interprète**, corrompant silencieusement la cible. Le script fait une **découpe de chaîne brute** (zéro interprétation), avec garde fail-safe (ancre manquante → `exit 1` sans rien écrire), écriture de la destination d'abord, sauvegarde `.bak` et report des tailles. Motif éprouvé trois fois : `archive-journal-0607.mjs`, `archive-journal-0630.mjs`, puis `groom-todo.mjs` et `groom-conventions.mjs` le 18/08.

### Acquises 17/08 — relecture de fond §9 ESP32

85. **L'encart « Comment lire ce code » est réservé aux idiomes embarqués ; les mécanismes de langage vont en fiche de lecture dédiée (amende C77).** C77 reste entière sur son premier volet — **commentaires sur chaque ligne utile**, sans exception. Son second volet, l'encart, cesse d'être systématique. Critère de tri : *ce paragraphe serait-il identique dans une autre famille MCU, voire dans un autre langage ?* Si **oui**, c'est un mécanisme de langage (structure + pointeur de fonction, portée, `for` à plage, indentation, traçage du flux) → il monte dans la **fiche de lecture du langage** et la fiche famille y **renvoie**. Si **non**, c'est un **idiome embarqué**, indissociable de son bloc (anti-rebond par détection de front, lecture atomique sur 8 bits, section critique, anti-windup, garde composée, `show()` d'un buffer d'afficheur) → **l'encart reste local**. Conséquence éprouvée à l'inventaire : la quasi-totalité des encarts existants de §7 et §13 sont des **encarts d'idiome**, donc **légitimes en l'état** — l'amende est **non rétroactive en pratique** (seul `arduino-programmation-non-bloquante`, ordonnanceur coopératif, gagnera un renvoi sans perdre son encart). Le §9 ESP32, qui n'a jamais eu d'encart, est le module où la règle s'éprouve en création plutôt qu'en correction. **La numérotation éprouvage atteint 85.**

Notes 17/08 (pas de convention numérotée) :
- **Deux fiches de lecture, une par langage, dupliquant assumément leur section de méthode.** `cpp-lire-un-programme` et `micropython-lire-un-programme`, en **fin de parcours langage** (`[[cpp]]`, `[[micropython-langage]]`). La méthode d'entrée dans un programme inconnu est en partie commune aux deux, mais le vocabulaire d'idiomes ne l'est pas (`setup()`/`loop()` vs `main.py` + `while True`, `volatile` vs `global`, accolades vs indentation) : on applique la **copie locale C47** plutôt qu'une troisième fiche transverse qui recréerait le problème un cran plus haut.
- **Frontière avec les fiches `-debug`.** *Lire* = comprendre un programme qu'on n'a pas écrit, sans hypothèse de panne. *Déboguer* = un comportement est faux, trouver pourquoi (`arduino-debug`, `micropython-debug`, déjà enrichies). Liens réciproques, périmètres disjoints.
- **`aa: []` pour les deux fiches de lecture.** Vérifié au libellé xlsx : PROJ/5 = « Programmer ou paramétrer un contrôleur numérique » (on ne programme pas, on lit) ; MEO/3 = « Mettre en œuvre des routines pour le travail collectif » (c'est `revue-de-code`, dont la lecture est un prérequis, pas l'équivalent). Vide délibéré, comme `esp32-idf`.
- **Une correction ponctuelle dans un module cloné déclenche un balayage du module.** Les fiches d'un module famille sont écrites au gabarit et se recopient entre elles : une erreur y **essaime**. Éprouvé trois fois le 17/08 sur le §9 — l'appel inutile `analogSetAttenuation(ADC_11db)` (**6 fiches**), la scorie de popover `*(→ notion [[X]])*` (3 fiches, dont 1 en §9bis), les embeds privés de `|largeur` (5 fiches). Corollaire de méthode : **ne jamais annoncer une occurrence comme « la dernière » avant d'avoir lu le module entier** (erreur commise et rectifiée le 17/08).
- **Quand une fiche de prise en main impose une version d'outil, tout le module se relit à cette version.** `esp32-prise-en-main` exige le cœur Arduino-ESP32 **≥ 3.0**, mais deux fiches aval enseignaient encore des API **2.x** : LEDC (`ledcSetup`/`ledcAttachPin`, déjà documenté par un avertissement) et surtout **`BLEScan::start`**, dont le retour est passé en pointeur — bloc **non compilable** en 3.x. Le contrôle d'office à ajouter sur les familles restantes : repérer la version imposée par la prise en main, puis vérifier chaque API du module contre le guide de migration correspondant.

### Acquises 17/08 (suite) — relecture §9bis XIAO, §8 simulation, §10 ESP8266, §11 STM32

86. **Ne jamais dériver l'état d'une sortie en la relisant.** L'écriture `digitalWrite(pin, !digitalRead(pin))` est **proscrite** : tous les microcontrôleurs ne permettent pas de relire une broche configurée en sortie, le résultat dépend du mode de sortie (push-pull / drain ouvert), et sur une sortie chargée le niveau lu peut différer du niveau commandé. À la place : **mémoriser l'état dans une variable**, ou piloter explicitement en `HIGH`/`LOW`. **Borne** : les **primitives matérielles de bascule** restent légitimes — `HAL_GPIO_TogglePin` (STM32 natif), `led.toggle()` (MicroPython), `GPIOA->BSRR` (registre) agissent sur le **registre de sortie**, elles ne relisent pas la broche. Demande Tim (17/08 suite). Traitée non seulement en correction mais en **contenu** : piège « Relire une broche de sortie pour connaître son état » ajouté à `stm32-arduino-core`, l'idiome étant trop répandu dans les tutoriels du web pour disparaître si on se contente de ne pas l'écrire. **Occurrence unique** dans le wiki relu (confirmé par Tim sur sa relecture humaine) ; devient un **contrôle d'office** sur les modules non encore lus (§12, §15, §16). **La numérotation éprouvage atteint 86.**

Notes 17/08 (suite) (pas de convention numérotée) :

- **Précision de C65 — c'est le tutoiement qui est proscrit, pas le « vous ».** Arbitrage Tim sur le §9bis : « vous » et « on » **cohabitent** selon le type de fiche (procédure vs prose explicative, cf. précision du 29/06) ; seul le **« tu »** est écarté hors colonne de réalisation (C64/C65). Conséquence importante : **aucune dette de conversion** sur les modules déjà relus en « vous » — j'avais d'abord lu la décision comme un passage général au « on » et annoncé à tort une passe sur sept modules.
- **C71 — quand l'argumentaire d'une fiche *repose* sur le prix, il faut le reconstruire, pas l'expurger.** Le §10 ESP8266 vendait la puce par son coût de bout en bout (popover, section « Pourquoi », colonne de tableau, arbitrage face à l'ESP32) : un retrait mécanique aurait laissé une fiche expliquant qu'il s'agit d'un ESP32 amputé, sans compensation. Argumentaire refait sur trois angles d'**adéquation technique** : matériel déjà en parc (renvoi `ecoconception`), objets du commerce déjà équipés qu'on reflashe, encombrement minimal. **Distinguer du cas simple** : au §11 STM32, trois mentions de prix se retirent sans rien reconstruire, l'argumentaire tenant déjà sur la maturité industrielle et le ST-LINK intégré.
- **Deux motifs devenus contrôles d'office systématiques sur les modules antérieurs à leur convention.** (a) **`aa: PROJ/5` sur les fiches `prise-en-main`** — trou trouvé **trois fois dans la même journée** (`xiao-`, `esp8266-`, `stm32-prise-en-main`) ; toutes les autres familles le portaient. (b) **`|largeur` sur les embeds (C74)** — manquant sur **10 embeds** répartis dans les quatre modules relus ; c'est systématique sur tout ce qui précède la convention du 15/06.
- **C81 étendue aux captures fournies par Tim.** La convention imposait d'auditer un média de câblage contre le code de la fiche ; le lot Wokwi a montré le **sens inverse** — quand les captures préexistent, c'est **le texte et le code de la fiche** qui se calent sur elles. Les 9 PNG ont été **lus** (`read_media_file`) avant rédaction, et les deux blocs de code recopiés de l'écran : zéro divergence possible entre ce que l'étudiant lit et ce qu'il voit.
- **Nommage des médias déposés** — un lot déposé par Tim se **renomme en kebab-case** avant intégration : le lot Wokwi contenait une majuscule initiale (piège de casse git déjà rencontré sur `tinkercad`) et une typo (`helloEPS32`). Même réflexe qu'à la réception du dépôt Martin (25/06, `stm-32` et parenthèses).
- **Une fiche-outil sans capture n'est pas relue.** Arbitrage Tim : `falstad` et `ltspice` ont beau être exactes au fond et sans correction, elles **restent décochées** tant que leurs placeholders C29 ne sont pas remplis — une fiche d'outil logiciel sans copie d'écran n'est pas utilisable. Le « validée sans clic-test » ne vaut que pour une fiche **complète** sans média neuf.

### Acquises 17/08 (suite 2) — relecture §12 Teensy, §15 PIC, §16 PCB : fin de la relecture de fond

**Aucune convention numérotée nouvelle — la numérotation éprouvage reste à C86.**

- **C71 est absolue dans la prose des fiches — y compris quand le coût est un critère d'ingénierie et non un prix d'achat (arbitrage Tim).** La question s'est posée nettement sur `pic`, dont quatre mentions de coût n'avaient rien d'une incitation à l'achat étudiant : le coût unitaire en grande série est un paramètre de conception réel, celui qui figure dans un CdCF, et c'est *lui* qui explique la survie du PIC. J'ai plaidé pour une borne — C71 encadrerait l'approvisionnement étudiant, pas le coût comme critère — **Tim a tranché dans l'autre sens** : pas de borne, la prose des fiches ne parle pas d'argent. La reformulation est toujours possible sans perte : « peu cher à l'unité en grande série » devient « disponible en très grand volume », « plus de périphériques par euro » devient « dans un même boîtier », « production à très bas coût » devient « production en très grande série » adossée à la **stabilité de la référence**. À rappeler quand la question reviendra — elle reviendra sur `bom`, `choisir-le-materiel` et `dossier-technique`.
- **La question C71 à se poser reste « que reste-t-il quand je l'enlève ».** Le hub `teensy` a donné un **deuxième cas ESP8266** après le §10 : la phrase « en contrepartie, le Teensy est plus cher » était le **seul contrepoids** de la fiche, et un retrait mécanique laissait un hub expliquant que le Teensy est meilleur partout. Argumentaire refait sur trois angles d'**adéquation technique** — 3,3 V strict sans broche tolérante, aucune radio intégrée, écosystème de cartes filles volontairement mince. Le §15 PIC, lui, se traite par simple reformulation. **Le critère de tri est le même qu'au 17/08** : l'argumentaire *repose-t-il* sur le coût, ou le mentionne-t-il en passant.
- **Un cœur Arduino tiers ramène presque toujours `analogRead()` à 10 bits pour imiter un Uno — contrôle d'office sur les familles restantes.** Troisième exemplaire du même motif : Uno R4 (17/06), STM32duino (17/08), Teensy 4.x (17/08 suite 2, où la fiche annonçait « 12 bits et plus », faux deux fois). Trois grandeurs à distinguer systématiquement : la **résolution matérielle** du convertisseur, la **résolution par défaut** que le cœur renvoie, et la **résolution utile** que le constructeur garantit — PJRC publie 10 bits utiles sur 12 matériels, en écrivant que les bits supplémentaires sont du bruit.
- **Une contradiction interne de module se repère en croisant deux fiches, pas en lisant l'une d'elles.** L'ADC faux de `teensy-arduino-core` a été confirmé par `teensy-usb`, dont le corrigé `analogRead(A0) >> 3` supposait **correctement** 0-1023. Corollaire du balayage de module acquis le 17/08 : une erreur essaime, mais elle laisse parfois un témoin juste ailleurs dans le module.
- **C86 — borne confirmée en production, et l'« occurrence unique » démentie.** Trois occurrences dans le seul `teensy-arduino-core`, dont deux en `digitalWriteFast(pin, !digitalReadFast(pin))` : les variantes rapides relisent la **broche**, elles sont donc au cœur de C86 et non sur sa borne. Le Teensy fournit la primitive attendue — `digitalToggleFast()`, qui écrit le registre `PORTTOGGLE` — ce qui a permis un **traitement mixte** (variable d'état dans le sketch d'ouverture, primitive dans la section qui vend les fonctions rapides) : le contraste devient un contenu au lieu d'une correction silencieuse. **Cas remarquable** : `stm32-registres` enseignait déjà la leçon de C86 **avant** C86, sa section *BSRR contre ODR* démontrant qu'un `ODR |=` est un lire-modifier-écrire non atomique.
- **Ne rien qualifier de « seul » ni de « dernier » avant d'avoir lu le périmètre entier — récidive.** J'avais écrit le 17/08 que `esp8266` était « le seul hub de famille sans SVG » : `teensy` l'était aussi, et je ne l'avais pas lu. Même motif que l'annonce hâtive de la « dernière » occurrence d'`analogSetAttenuation`. La formule à employer est « le seul **des modules relus** ».
- **Un alt d'embed n'est pas un `<desc>`.** Deux embeds du §12 portaient un alt de trois à quatre phrases, recopié mot pour mot du `<desc>` de leur SVG — seuls cas du wiki. Le `<desc>` décrit exhaustivement pour un lecteur d'écran, l'**alt tient en une phrase**. Corrigé en même temps que le `|largeur` manquant (C74).
- **Quand les fichiers de pilotage se contredisent, vérifier avant de conclure — dans les deux sens.** Le 17/08, un dashboard à jour face à un JOURNAL muet trahissait un `pull` manquant. Cette fois le symptôme était **inversé** : JOURNAL complet annonçant « §11 relu 6/6 », dashboard sans annotation sur trois fiches et bandeau « restant à faire ». Relecture de contrôle demandée par Tim : les trois fiches **étaient bien relues** — les corrections du 17/08 y figurent, le SVG `trois-modes` existe — seule la clôture documentaire s'était arrêtée en chemin. **Le coût d'une vérification est une lecture de module ; le coût d'une conclusion hâtive est une relecture entière refaite pour rien.**

### Acquises 17/08 (suite 3) — refonte pédagogique de `falstad` (fiche-outil scénarisée)

87. **Média animé : GIF pour la boucle courte, vidéo pour la séquence longue.** C29 admet le GIF depuis le 15/06 et C75 pose la vidéo HTML5 ; le **critère de choix** manquait. Une **boucle courte** où le mouvement *est* le message (un balayage de curseur, une charge qui s'essouffle, un survol qui fait défiler une valeur) se rend en **GIF** : elle se lit sans contrôle, la répétition sert la démonstration. Une **séquence longue** que le lecteur doit pouvoir arrêter, revoir ou parcourir (une construction de circuit de bout en bout, une installation d'outil) réclame une **vidéo** et sa barre de lecture — un GIF y oblige à attendre la boucle pour relire un libellé de menu. **Un lot mixte reste cohérent** tant que le critère est explicite. Corollaire de poids : un enregistrement d'écran brut est **massivement compressible** (interface quasi immobile entre deux images) — le MP4 de 40 Mo déposé le 17/08 a été intercepté **avant commit**, git gardant tout fichier commité dans son historique pour toujours ; viser < 5 Mo, `fps=15`, sans piste audio. Éprouvée 4/N (`falstad` : 3 boucles courtes en GIF, 1 séquence de construction que Tim a préféré basculer en GIF pour l'homogénéité du lot — réserve tracée). **La numérotation éprouvage atteint 87.**

88. **Fiche-outil scénarisée : lire → modifier → construire, et le scénario commande les médias.** Une fiche-outil qui *décrit* un logiciel (menus, fonctions, ce qu'il permet) n'apprend pas à s'en servir. La forme tutoriel se bâtit sur une **échelle d'autonomie en trois temps** — (a) **lire** un écran qui tourne déjà, sans rien toucher (code couleur, unités, réglages qu'on confond) ; (b) **modifier** un objet existant de la bibliothèque de l'outil, ce qui enseigne le geste le plus rentable et le plus réaliste ; (c) **construire** depuis une page blanche, en réemployant tout. Le levier **« prédire puis vérifier »** s'emploie en **dispositif récurrent** (`[!question]` avant chaque lancement), **jamais en structure** — sans quoi la fille réécrit la méthode de son hub. **Inversion de C81** : sur une fiche déjà pourvue de captures, le texte se cale sur l'écran ; sur une **refonte**, c'est le scénario retenu qui **détermine la liste des captures à shooter**, décrite une par une (ce qu'elle doit montrer, où elle se place, quelle largeur) avant toute prise de vue. Éprouvée 1/N (`falstad`, 5,4 → 20,4 ko, 13 médias) ; **`ltspice` est la 2ᵉ épreuve programmée**. **La numérotation éprouvage atteint 88.**

Notes 17/08 (suite 3) :

- **Une doc archivée ressemble à une doc courante — vérifier la version avant de citer.** Le callout « le solveur refuse les mailles sans résistance » (avec ses messages d'erreur en toutes lettres) venait de `falstad.com/circuit-**java**/directions.html` : la documentation de l'**applet Java**, remplacée par le portage JavaScript CircuitJS1. L'URL portait le mot `java` et je ne l'ai pas relevé. **Le test de Tim au clavier a démenti la source** — court-circuiter une source de 5 V ne produit aucun message. Le réflexe à garder : **une doc d'outil se date avant d'être citée**, et un test utilisateur prime sur une page de documentation.
- **Le démenti a produit un meilleur contenu que l'affirmation retirée.** Falstad ne refuse pas : il **calcule**. Une source de 5 V refermée sur un fil affiche `I = 5 kA`, et le chiffre est exact — le fil vaut **1 mΩ** dans le modèle, 5 V / 1 mΩ = 5 000 A. D'où un callout « l'outil ne juge pas si c'est réalisable » qui **démontre** le piège du modèle idéal au lieu de l'énoncer. À réemployer : *quand une affirmation tombe, chercher ce que le comportement réel enseigne à sa place.*
- **Interface localisée : les libellés de l'écran font foi, y compris quand la traduction est partielle ou fautive.** Falstad tourne en français chez Tim ; toute la fiche était écrite sur les menus anglais, et plusieurs **chemins d'accès** étaient faux, pas seulement les noms (*Fichier → Nouveau circuit vide*, et non *Circuits → Blank Circuit*). La traduction est incomplète (la boîte d'édition reste *Edit Potentiometer*) : **on cite ce que l'étudiant verra**, mélange compris. Et quand le libellé est **fautif** — *Ajouter terre* pose en réalité une **masse**, l'anglais *ground* recouvrant les deux — on ne le recopie pas en silence : **un callout corrige le terme** et explique la confusion, sinon l'étudiant la reproduit dans son compte rendu.
- **Un renommage qui ne change que la casse échoue silencieusement sous Windows.** `circuit-RC.gif` → `circuit-rc.gif` a renvoyé « succès » sans rien changer (système de fichiers insensible à la casse). Sans relecture du dossier, l'embed aurait pointé un fichier introuvable — invisible en local, **404 en production** (GitHub Pages sert sous Linux). **Passer par un nom intermédiaire**, et **relister le dossier après tout renommage**. 4ᵉ occurrence du piège de casse (après `tinkercad`, le dépôt Martin et le lot Wokwi), **1ʳᵉ fois sans erreur remontée**.
- **L'assistant conversationnel comme outil étudiant : cadrer par « hypothèse, pas réponse ».** Le format texte de Falstad permet de faire décrire un circuit par une IA puis de l'importer. L'usage est légitime **à condition que le travail reste entier** : le texte produit est une hypothèse que la simulation rend vérifiable (le courant passe-t-il où on l'attend, la tension vaut-elle ce que le calcul annonce). La même phrase interdit implicitement l'usage inverse — faire faire l'analyse. **Première mention d'un assistant conversationnel dans une fiche étudiante** ; à trancher au-delà de ce cas (candidat évident : les fiches de lecture de programme C85).
- **Calibre : plafond annoncé, plafond dépassé, dépassement assumé.** Cible fixée à 11 ko, atterrissage à **20,4 ko** — la fiche dépasse son hub (10,7 ko), ce que j'avais posé comme limite. Chaque section a pourtant été arbitrée par Tim, et les leviers de coupe proposés ont été refusés. **La leçon n'est pas le chiffre mais la méthode** : annoncer le calibre visé, mesurer à chaque palier, signaler le dépassement au lieu de le laisser filer, et proposer les coupes chiffrées — l'arbitrage revient à Tim.

### Acquises 18/08 — refonte de `ltspice` (2ᵉ épreuve de C88) et arbitrages de publication

89. **Assistant conversationnel : le critère est « l'affirmation est-elle vérifiable à l'écran ? », pas le sens de l'usage.** Le cadrage posé sur `falstad` le 17/08 — le texte produit par une IA est une **hypothèse** que la simulation rend vérifiable — interdisait implicitement l'usage inverse, faire **lire** un circuit existant par un assistant. La demande d'une section netlist sur `ltspice` a mis la borne à l'épreuve et **montré qu'elle était mal placée** : ce qui distingue l'usage légitime de la sous-traitance n'est pas la direction mais la **testabilité**. « L'amplitude AC de la source est à zéro » se vérifie en trois clics ; « le gain à 1 kHz vaut −3 dB » se relève au curseur ; ce sont des hypothèses, et les produire fait gagner du temps sans rien retirer au travail. « Prenez 330 nF » n'est pas vérifiable comme affirmation : c'est **la conclusion**, et la faire produire par un tiers revient à déléguer le seul travail qui ne se délègue pas. Formulée ainsi, la règle **vaut dans les deux sens** et se transpose hors simulation. `falstad` a été **back-patchée** d'un paragraphe pour la porter, les deux fiches sœurs disant désormais la même chose. À réemployer dans les fiches de lecture de programme (C85), où la question se posera frontalement. Éprouvée 2/N. **La numérotation éprouvage atteint 89.**

90. **Un placeholder C29 visible en production est assumé — transparence pédagogique (arbitrage Tim).** J'ai plaidé pour couper ou masquer les placeholders avant la mise en ligne, au motif qu'une instruction de production affichée à l'étudiant est pire qu'une absence d'image. **Tim a tranché dans l'autre sens** : montrer le chantier en cours fait partie de ce qu'on donne à voir, l'étudiant comprend que le wiki vit et se construit. Conséquence opérationnelle immédiate : la dette de captures **cesse d'être un bloquant de publication** et redevient une simple feuille de route de production ; aucune fiche n'a besoin de passer en `draft: true` ni d'être amputée pour la rentrée. Conséquence de forme : le libellé des placeholders doit rester **lisible par un étudiant**, pas seulement par le producteur — le canon C29 (amorce en romain, description en italique) suffit, mais on évite désormais le jargon interne dans la description. **La numérotation éprouvage atteint 90.**

Notes 18/08 :

- **C88 a tenu sur un outil dissemblable — le patron gagne une antichambre, et le premier temps change de nature.** Deux objections sérieuses attendaient la 2ᵉ épreuve : LTspice **s'installe en local** et **s'ouvre sur une page vide**. La seconde est tombée en source — *File → Open Examples… → Educational* déroule des `.asc` qui **portent déjà leur directive** et tournent tels quels : le temps *lire* a un support réel, et la page blanche devient un état qu'on **choisit** au temps *construire*, ce que C88 demande exactement. La première a été retenue : le patron devient **`installer → lire → modifier → construire`**, l'antichambre étant courte et non un quatrième temps. Ce qui change vraiment, c'est le **contenu du lire** : sur Falstad on décode une animation ; ici on apparie **trois artefacts** — le schéma, la directive écrite en toutes lettres dessus, et le tracé. Plus abstrait, mais le geste signature arrive dès le premier temps.
- **Le miroir entre fiches sœurs s'emploie en dispositif, jamais en structure — même arbitrage que « prédire puis vérifier ».** Un des trois scénarios proposés bâtissait toute la fiche sur la confrontation à Falstad (refaire le même passe-haut, geste par geste). Écarté pour deux motifs : la fiche cessait d'être **autoportante** (§ 4 du cadrage projet : chaque fiche compréhensible isolément), et elle vendait LTspice **par son concurrent** alors que son argument propre est le dimensionnement. Le contraste est donc passé en `[!note]` récurrents — animation continue contre relance, survol contre curseur, fréquence à la main contre balayage `.ac`. **Généralisation** : entre deux fiches sœurs, le miroir est un dispositif, jamais une ossature.
- **La leçon du 17/08 sur les libellés a mordu trois fois dans la même fiche.** Toutes les sources web consultées décrivaient une version antérieure : *Edit Simulation Cmd* est devenu **Configure Analysis** (raccourci `A`), *SPICE Netlist* est devenu **Update and View SPICE Netlist**, *Run* s'appelle **Run/Pause** (`Alt+R`) — et *Open Examples* ouvre une **cascade de menus**, pas une boîte de dialogue comme je l'avais écrit. Tim tourne sous **LTspice 26.0.2**, lu dans l'en-tête de la netlist, là où mes sources parlaient de la 24. **Aucune version n'est citée dans la fiche** : la précaution a payé. Corollaire nouveau : quand un chemin de menu n'a **pas** été vu à l'écran, on le **retire** en gardant la distinction qu'il servait — `Tools → Export Netlist` a été supprimé puis rétabli sur confirmation de Tim, qui a au passage fourni le critère d'emploi (copier/coller à l'écran contre fichier `.net` sur disque), meilleur que le mien.
- **C81 se viole en intégrant une image qu'on n'a pas pu ouvrir.** `interface.png` pèse 403 ko, au-dessus de ma limite de lecture ; je l'ai intégrée « sur parole » avec un alt décrivant un panorama. C'était la **fenêtre d'accueil vide**. Corrigé et déplacé en fin de « Installer », où elle illustre exactement « la fenêtre est vide au premier lancement ». **Règle** : un média illisible ne s'intègre pas avec un alt inventé — soit on demande une version allégée, soit **l'auteur écrit l'alt lui-même**. C'est ce qui a été fait pour le GIF de 502 ko, dont Tim a rédigé la description.
- **Une objection de format se distingue d'une objection de contenu, et se dit deux fois si besoin.** Le GIF de 1 min 20 a reçu deux objections successives : sur le **fond** (une construction filmée se regarde au lieu de se faire — le temps *construire* est le seul palier où l'étudiant affronte la page blanche), puis sur le **format** (C87 réserve la boucle courte au message-mouvement ; un GIF de 80 s n'a ni pause ni retour arrière, et pèse plus qu'un MP4 équivalent — il perd sur les deux tableaux). Tim a tranché : on garde. **Le placement a été négocié plutôt que le média** — placé **après** le relevé du −3 dB, il devient une **vérification** (« à regarder après avoir essayé, pour comparer les gestes ») et non un modèle à recopier, ce qui préserve le palier. Réserve C87 tracée, 2ᵉ occurrence après `falstad`.
- **Une capture d'écran de texte est du texte — et un montage trivial se décrit.** La réduction de périmètre demandée en fin de chantier a fait passer le lot de **10 captures à 3**, sans perte : la barre d'outils est remplacée par le réflexe « survoler un bouton, lire la barre d'état » ; le schéma du RC (quatre composants en série) par trois lignes de prose ; le dialogue de source par le GIF qui le montre déjà. **Le critère** : une capture gagne sa place quand l'**interface est opaque**, pas quand le circuit est trivial. À généraliser — l'inventaire du 18/08 montre ~18 placeholders demandant une capture de **sortie texte** (moniteur série, Shell), tous convertibles en blocs de code, cherchables et légers ; l'exception légitime est le **traceur/Plotter**, qui produit une courbe.
- **Édition concurrente : C14 a fonctionné comme filet.** Un lot `edit_file` a rebondi en cours de session parce que Tim éditait la fiche en parallèle — l'anchor obsolète a **échoué au lieu d'écraser**. C'est le comportement voulu, et la preuve que l'exigence de relire juste avant d'écrire n'est pas une précaution théorique. Corollaire : après tout rebond, **relire le fichier entier** avant de reconstruire le lot — la relecture a d'ailleurs révélé une contradiction interne (« double-cliquer » au §4 contre le clic simple enseigné au §1) que ni l'un ni l'autre n'aurait vue autrement.
- **Un SVG « à l'œil » ment sur ses propres repères.** `lecture-courbe.svg` posait le niveau 63 % au bon endroit (y=176 sur 196 px d'amplitude, exact) mais traçait un Bézier arbitraire qui croisait ce niveau **64 px avant** les pointillés de τ — le schéma affirmait donc le contraire de ce que la fiche enseigne. Remplacé par une **exponentielle échantillonnée**, `y = 104 + 196·exp(-(x-92)/109,6)`, avec la formule en commentaire dans le fichier. **Règle** : dès qu'un SVG porte un repère chiffré, la courbe se **calcule**, elle ne se dessine pas — et l'échantillonnage se resserre sur les portions raides.
- **Deux compteurs qui ne mesurent pas la même chose donnent une dette invisible.** Le « lot de 15 captures » ne suivait que les fiches-outils logiciels bloquant la relecture ; la ligne « captures C29 en attente (13) » ne couvrait que quelques placeholders Arduino et instruments. Le balayage complet de `content/` en donne **101, répartis sur 57 fiches**. Deux enseignements : **31 d'entre eux sont concentrés sur les six prise-en-main** et se ramènent à ~6 gestes répétés d'une famille à l'autre (page de téléchargement, Préférences avec URL, gestionnaire de cartes, menu Outils, compilation réussie, carte branchée) — dont **deux strictement identiques** (`esp32-prise-en-main:38` et `teensy-prise-en-main:38` demandent tous deux la page `arduino.cc/en/software`, une seule prise de vue, réemploi cross-dossier C76) ; et les faces avant d'instruments (`multimetre`, `oscilloscope`) sont des candidates **SVG** plutôt que photo, plus lisibles et indépendantes du modèle posé sur la paillasse. **Un inventaire périodique par balayage vaut mieux qu'un compteur tenu à la main.**
- **Le calendrier appartient aux collègues — l'absence de marqueur temporel est un choix, pas un oubli (arbitrage Tim).** J'ai signalé l'absence de projection du cycle en V sur les 15 semaines comme le principal trou fonctionnel du wiki. **Tim a corrigé le diagnostic** : la chronologie est enseignée par le cours de gestion de projet des collègues, et le wiki est une **interface** vers leurs cours — y mettre un rétroplanning reviendrait à refaire leur travail, ce que le cadrage projet interdit explicitement. L'étudiant se réfère à la fiche dont il a besoin au moment où son cours le lui indique. **À retenir comme borne générale** : avant de qualifier un manque de « trou », vérifier qu'il ne relève pas d'une **délégation assumée** — même logique que les catégories HS-D de la cartographie AA.

### Promues le 18/08 (trace)

Seize conventions sorties du §8 vers les sections numérotées. Critère retenu : appartenance à la liste des **contrôles d'office** citée à chaque ouverture de session — une convention qu'on applique systématiquement n'est plus en épreuve. Le marqueur « Éprouvée x/N » s'est révélé peu fiable, n'étant mis à jour que quand on y pense (C71 portait encore « 1/N » après sept modules). L'historique d'épreuve de chacune reste au JOURNAL.

- **C10** → §2 (déjà promue le 26/05 — entrée §8 en doublon)
- **C62** → §2 Mise en forme
- **C64** → §6 Publication / Quartz
- **C65** → §1 Rédaction
- **C66** → §2 Mise en forme
- **C68** → §3 Images & SVG
- **C69** → §3 Images & SVG
- **C71** → §1 Rédaction
- **C73** → §3 Images & SVG
- **C74** → §3 Images & SVG
- **C77** → §2 Mise en forme
- **C78** → §3 Images & SVG
- **C79** → §3 Images & SVG
- **C80** → §3 Images & SVG
- **C81** → §3 Images & SVG
- **C84** → §3 Images & SVG

### Acquises 18/08 (suite) — session dette technique (audits, outillage, groomings)

**Aucune convention numérotée — la numérotation éprouvage reste à C90.**

- **Un outil qui rapporte un succès sans avoir agi — troisième et quatrième occurrences le même jour, la règle est acquise.** Le motif : *l'opération réussit formellement, seule la quantité de travail réel est nulle ou tronquée*. Quatre cas désormais recensés. (a) **`create_file` sans préfixe** rend « File created successfully » avec le chemin Windows complet, en créant dans le conteneur Linux un fichier littéralement nommé `C:\Users\...` — confirme C24 et le §6 *Préfixe MCP exclusif* ; le contrôle est un **`list_directory` du dossier cible** après écriture. (b) **`move_file` sur un changement de casse seul** (17/08) rend « succès » sans rien changer. (c) **Un parseur d'audit** peut rétrécir silencieusement son périmètre : la regex `!\[[^\]]*\]` sautait tout embed dont l'alt contient des crochets, sans les compter ni les signaler. (d) **Une borne de coupe mal calculée** annonce N retraits en coupant un octet chacun. **Règle** : après toute opération en lot, vérifier une **grandeur mesurable** — nombre de fichiers, taille retirée, compteur d'éléments traités — jamais le code de retour. Corollaire : **tout script de découpe expose un `--dry`**, et le dry-run se lit pour ses *chiffres*, pas pour son absence d'erreur.

- **Un garde-fou se pose des deux côtés.** `groom-conventions.mjs` refusait toute coupe au-delà de 9 ko et n'avait aucun plancher — or le mode d'échec réel (borne mal calculée) produit **toujours** une coupe trop petite. Je m'étais protégé du danger qui n'arrivait pas. **Avant d'écrire une garde, se demander dans quel sens l'erreur déraille.**

- **Un outil d'audit doit connaître les conventions du dépôt qu'il audite.** Le premier rapport wikilinks annonçait 67 liens morts pour 5 réels : 61 étaient des **pipes échappés en cellule de tableau**, c'est-à-dire précisément la syntaxe que **C62 impose**. Un audit écrit sans relire les conventions produit du bruit à hauteur de ce qu'il ignore — et ce bruit coûte des arbitrages inutiles à l'auteur. Les deux scripts d'audit portent désormais la règle en commentaire, à côté du code qui l'applique.

- **Promotion d'une convention : le critère fiable est externe, pas le compteur d'épreuve.** Le marqueur « Éprouvée x/N » du §8 n'est mis à jour que quand on y pense — C71 portait « 1/N » après sept modules, C77 après deux modules entiers. Un balayage mécanique du §8 ne trouvait que 7 candidates ; la **liste des contrôles d'office** recopiée dans chaque prompt de session en désignait **14**. Une convention qu'on applique systématiquement n'est plus en épreuve, quel que soit son compteur. **Critère à réemployer au prochain grooming** ; même leçon que les deux compteurs de captures démentis le 18/08 par le balayage — *un inventaire périodique vaut mieux qu'un compteur tenu à la main*.

- **Promouvoir ne fait pas maigrir un fichier, condenser oui.** Déplacer 16 conventions du §8 vers les sections numérotées ne retire rien au total — c'est la **condensation** (8 blocs anciens réduits en pointeurs, dont un de 9,3 → 1,5 ko) qui rend les kilo-octets. Les deux gestes se distinguent : la promotion **range**, la condensation **allège**. Au passage, un bloc dont toutes les conventions partent devient un **titre vide** — y laisser une ligne de pointeur vers la destination, comme le précédent « 28/05 suite 2 — PROMUES (trace) ».

- **Une vérification demandée sur un point trouve souvent le problème d'à côté.** La consigne était de vérifier en source les quatre versions d'actions GitHub avant de les bumper (bien vu : le « @v5 » du TODO était faux pour trois sur quatre). Mais le vrai risque était une ligne plus haut, jamais surveillée : `runs-on: ubuntu-22.04`, en dépréciation au 17/09/2026 avec des fenêtres d'échec volontaire. **Lire le fichier entier, pas seulement la ligne qu'on vient corriger.**

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
