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

### Mentions de capture et frontière capture / SVG (C29 + C33, promues 18/08)

Quand une fiche a besoin d'un média que seul l'auteur peut produire — écran d'un logiciel, photo de matériel —, Claude ne laisse pas un trou : il pose une **mention de capture** à l'endroit exact où le média ira, et la fiche reste publiable en l'état.

**Format canon** : amorce en **romain**, description en *italique*.
`Prendre capture d'écran de *le gestionnaire de cartes filtré sur « esp32 », montrant le paquet Espressif Systems et le bouton Installer*.`
Jamais un paragraphe intégralement en italique. Variantes selon le média : « Prendre capture d'écran ou photo de… », « Intégrer une vidéo de… » (C75) ; le choix GIF / vidéo relève de C87.

**Portée** : fiches-tuto de famille MCU, **notions [T]** (`ide`, `shield`) et fiches-outils (`kicad`, `falstad`, `ltspice`) — toute fiche dont le contenu est un écran ou un objet.

**La mention est visible en production et assumée (C90)** : la dette de captures n'est pas un bloquant de publication. Elle se rédige donc **pour être lue par un étudiant** — pas de jargon interne, pas de numéro de convention, pas d'instruction de production dans la description.

**Ce qui mérite une capture.** Une capture gagne sa place quand **l'interface est opaque** — un champ enfoui, une cascade de menus, un panneau qu'on ne pense pas à ouvrir —, pas quand le sujet est trivial ou déjà écrit dans la fiche. Trois conversions systématiques :

- **sortie texte** (moniteur série, Shell, REPL, console de compilation, terminal) → **bloc de code** : plus léger, cherchable, lisible sur mobile. *Exception* : le **traceur / Plotter**, qui produit une courbe.
- **tableau ou document affiché à l'écran** → tableau markdown ou prose.
- **montage trivial** → trois lignes de prose, ou un schéma si le câblage compte.

**Borne — la priorité au volume d'usage l'emporte sur l'opacité (arbitrage Tim, 18/08).** Sur les **familles de tête** (Arduino, ESP32, ESP8266) et les **notions [T]**, une image de confirmation — carte branchée, compilation réussie — garde une valeur d'accompagnement qu'elle perd sur une fiche de niche. Le critère d'opacité n'est pas abrogé : il cède devant le trafic, et seulement là. Corollaire de production : l'effort se répartit par **rang d'usage**, pas uniformément sur les neuf familles.

**Le chiffre d'un bloc de code converti se dérive, ou se laisse en creux.** Ce que le **code** produit — chaînes littérales, compteurs, adresses I²C, échos — se recopie exactement depuis le bloc de la fiche. Ce que le **monde** produit — distance, RAM libre, fréquence, adresse IP, UID de puce — ne s'invente pas : forme neutre à combler au banc. Un UID se masque toujours (`XXXX-XXXX-XXXX`), un numéro de série recopié faisant croire à l'étudiant que c'est le sien. Même exigence que C82 sur les specs : on ne pose pas de mémoire une valeur qu'on n'a pas mesurée.

**Frontière avec le SVG (ex-C33).** Le SVG tient le **concept** — chronogramme d'interruption, dent de scie d'un timer, boucle bloquante contre non bloquante, série/parallèle d'un multimètre, flux de conception PCB ; la capture tient le **câblage et l'interface**. Un SVG-concept peut **remplacer** une mention de capture quand il montre mieux et vieillit moins vite : une **face avant d'instrument** photographiée, c'est *un* multimètre, quand le schéma enseigne la grammaire commune à tous. L'inverse vaut aussi : une fiche dont tout le contenu est de l'écran reste en **territoire capture**, sans SVG (`ide`, `cpp-logs`, `falstad`, `ltspice`, `kicad`, `tinkercad`). Le verdict se rend fiche par fiche, conjointement avec C68.

**Claude ne produit pas de SVG unilatéralement** sur une fiche en territoire capture. Et sur une **refonte**, c'est le scénario retenu qui détermine la liste des captures (C88, §8), décrites une par une avant toute prise de vue.

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
29. *Entrée vidée le 18/08 : **C29** (mentions de capture inline) fusionnée avec **C33** (exception SVG conceptuel) et promue au §3, section « Mentions de capture et frontière capture / SVG », augmentée du critère de tri « interface opaque », de la borne de priorité au volume d'usage et de la lisibilité étudiante imposée par C90. Critère de promotion retenu : l'usage effectif — C29 régissait 101 placeholders sur 57 fiches au balayage du 18/08, elle n'était plus en épreuve depuis longtemps.*
30. **Préfixe MCP variable selon le poste** — `theskillcodex:*` sur PC pro (configuration MCP nommée d'après le projet) vs `filesystem:*` sur PC perso. Le prompt projet § 6 référence `filesystem:*` (rédigé depuis PC perso). Non bloquant en pratique (Claude détecte le préfixe disponible via `tool_search`), mais source possible de confusion en lecture de JOURNAL/TODO si l'on cite des outils MCP nommément. **Note de configuration** plutôt que convention éditoriale stricte. À généraliser dans le prompt projet à la prochaine refonte (formulation neutre : « MCP filesystem actif, préfixe variable selon le poste »).

### Acquises 29/05 (suite) (à éprouver sur les prochains triptyques)
31. **Le « mauvais » d'un triptyque = schéma proprement rendu mais fautif** — raffine **C7** (triptyque mauvais / moyen / bon). Pour un triptyque de *qualité de rendu*, le « mauvais » n'est plus un brouillon flou (blobs), mais un **schéma proprement dessiné comportant des fautes ou incohérences délibérées**, signalées en ambre (`✗`) et disséquées dans le paragraphe « Pourquoi c'est mauvais ». Justification pédagogique : un schéma soigné peut être tout aussi faux qu'un brouillon — la propreté ne valide pas le fond ; l'étudiant apprend à *repérer* les fautes plutôt qu'à éviter le bâclage. **Corollaire (rôle des SVG dans une fiche)** : une *explication* d'un objet → **1 SVG générique** (le « qu'est-ce que c'est ») ; un *exemple de rendu / de qualité* → **triptyque** ; les deux peuvent **cohabiter** dans une même fiche (cas `logigramme` : SVG générique des symboles + triptyque thermostat). Éprouvée 1/N le 29/05 suite (reprise `machine-a-etats-portail-mauvais.svg` = 4 états propres + 3 fautes ambre ; triptyque `logigramme` thermostat). À éprouver sur 1-2 triptyques supplémentaires avant fusion dans la documentation de C7.

### Acquises 02/06 (à éprouver)
32. **Marqueur `*(→ notion [[x]])*` dans les hubs familles** — dans la section *Tutoriels* d'un hub famille, un tuto qui applique une **notion transverse** porte un marqueur `*(→ notion [[notion]])*` pointant vers elle (ex. `arduino-interruptions` → `[[interruption]]`, `arduino-timers` → `[[timer]]`, `arduino-deep-sleep` → `[[deep-sleep]]`, `arduino-memoire` → `[[memoire]]`, `arduino-machine-a-etats` → `[[machine-a-etats]]`). Rend visible le couple tuto-famille / notion-transverse — corollaire de C26 ([A]/[T]). Éprouvé 5× (02/06), confirmé sur ESP32. **Promue §6 le 10/06** (cluster *Modules MCU — conventions de famille*).
33. *Entrée vidée le 18/08 : **C33** fusionnée dans **C29** et promue au §3, section « Mentions de capture et frontière capture / SVG ». La fusion était prévue par l'entrée elle-même (« à fusionner dans C29 à la promotion ») ; elle emporte les extensions de C52 (SVG conceptuel sur fiches-outils, où il peut remplacer une mention de capture) et la borne des faces avant d'instruments, arbitrée au triage du 18/08.*

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

### Acquises 19/08 (suite 6) — tutoiement de `lire-une-datasheet`, balayage C62, exclusions d'audit

96. **Le `type` d'une fiche se lit à la présence de gestes, pas à sa longueur.** `debugger-embarque` était typée `tuto` parce qu'elle est longue et opérationnelle ; relue en entier, elle ne contient **aucune procédure à exécuter** — pas une manipulation, pas un pas à pas, prose intégralement en « on » et infinitif. C'est une fiche de méthode, donc une **notion**. Le critère de tri n'est ni la taille ni le ton mais la question *l'étudiant a-t-il quelque chose à faire pendant qu'il lit ?* Effet de bord favorable : le calibre passe de hors-bande basse en `tuto` (8-14 ko) à dans la bande `notion` (5-10 ko) pour 8,5 ko — **le reclassement rend C95 cohérente au lieu de la contrarier**, ce qui est le signe qu'il était juste. Le tag `tuto` suit le champ `type`, sinon la fiche reste listée sur la mauvaise page de tag côté Quartz. Éprouvée 1/N.

97. **Une exclusion d'audit se pose sur le tuple le plus étroit qui porte le motif.** Les trois faux positifs historiques d'`audit-portes-famille.mjs` écartent une paire `(fiche, concept)` entière, ce qui convenait à leur nature (tout le module `cpp/`, tout le suffixe `arduino-core`). Les deux exclusions du 19/08 ne sont pas de cette nature : `wokwi` cite **déjà** arduino+esp32+micropython sur le concept `gpio` et ne doit être dispensée que de `raspberry-pi`. Écarter la paire aurait masqué une neuvième famille absente le jour où elle apparaîtrait — **une exclusion trop large ne se distingue plus d'un défaut non détecté**. L'exclusion porte donc sur le triplet `(fiche, concept, famille)`, filtre les manquants au lieu de la ligne, et la ligne reste candidate en affichant `[exclu : …]` si d'autres familles manquent encore. **Vérification de la borne** : après écriture, les trois faux positifs historiques restent à 16 + 1 + 2 = 19 et les deux nouveaux motifs sortent à 1 chacun — le filtrage a mordu sur les deux lignes visées et sur rien d'autre. Éprouvée 1/N.

98. **Une fiche écrite dans un seul registre se classe avant de se convertir.** `lire-une-datasheet` ne contenait **aucun « vous »** : ce n'était pas un mélange à rectifier mais un registre unique à choisir, et le relevé devait donc **classer** les 13 marques avant d'en convertir une seule — instructions de manipulation directe d'un côté (le « vous » y est légitime), prose explicative de l'autre (ni « tu » ni « vous », c'est « on » qui tient). C'est ce que les deux dévoussages généraux annulés que mentionne C65 n'avaient pas fait : convertir au motif de la présence d'un pronom, sans trier ce que le pronom portait. **Corollaire de périmètre** : le classement précède aussi le chiffrage du chantier — 27 fiches à plat de `mcu/` lues au front matter ont donné **2 `type: tuto`**, dont une seule concernée, ce qui a transformé un « chantier de conversion » annoncé en cas isolé de 13 éditions. Éprouvée 1/N. **La numérotation éprouvage atteint 98.**

Notes 19/08 (suite 6) :
- **Le registre de connivence est un troisième registre (rattaché à C65).** « on la parcourt **ensemble** », « **Rédigeons** l'algorithme » ne sont ni du « vous » ni du « on » neutre : c'est une voix de cours magistral, qui se marie au tutoiement et **détonne avec le vouvoiement**. Une conversion de registre qui les laisse en place produit une fiche qui sonne faux sans qu'on sache pourquoi. À traiter dans le même mouvement — ici, retrait d'« ensemble », « Rédigeons » conservé (arbitrage Tim).
- **La recette d'un outil se vérifie sans lancer l'outil, en réimplémentant sa logique sur le corpus.** Le `.mjs` n'est pas lançable depuis Claude et le TODO imposait de vérifier la recette **avant** d'éditer. La logique de l'audit a été rejouée en Python sur les 242 fiches mises en cache : **242 / 135 / 19 / 2**, identique au passage de la veille, et les deux candidats sortis avec leur concept et leur famille manquante exacts — sans quoi une exclusion posée sur le mauvais concept n'aurait rien filtré. **Une prédiction se publie avec sa décomposition, pas avec son total** : annoncer 21 faux positifs sans dire 19 + 1 + 1 aurait rendu le résultat invérifiable, et le passage de 19 à 21 lisible comme une régression. Confirmé au lancement par Tim.
- **Les apostrophes du dépôt sont des apostrophes ASCII droites.** Déduit par bisection : le lot d'anchors sans apostrophe et le lot avec ont été passés en deux dry-runs séparés pour qu'un échec isole la cause. Les deux ont mordu. **Un doute d'encodage se lève par un dry-run partitionné**, pas en évitant indéfiniment le caractère douteux — l'évitement avait déjà forcé trois anchors plus courts, donc plus fragiles.

### Acquises 19/08 (suite 5) — `chien-de-garde`, refus de `temporisation`

**Aucune convention numérotée nouvelle — la numérotation éprouvage reste à C95.**

- **Un audit mécanique date ses constats, et le défaut peut avoir été corrigé par la session qui l'a produit.** L'audit du 19/08 suite 2 a signalé le créneau `temporisation` **et** écrit `programmation-non-bloquante` dans la même session — or c'est cette notion qui portait le seul contenu que `temporisation` aurait pu revendiquer (la soustraction de dates, juste en C, fausse en MicroPython). Le créneau était donc refermé avant d'être inscrit à la feuille de route, et deux prompts successifs l'ont recopié sans le revérifier. **Premier refus explicite au titre de C94** : la réponse à *« qu'est-ce que la notion dira que les deux jumeaux réunis ne disent pas ? »* était « elle les résume ». Corollaire de procédure : **un créneau refusé s'écrit au TODO avec son motif**, sinon le prochain passage le rouvre en croyant à un oubli. Complète l'acquis du 19/08 suite 4 (*un test de recette se date*) : ce n'est plus le corpus qui bouge sous la recette, c'est le **diagnostic** qui périme sous le prompt.
- **Une vérification en source peut casser un plan déjà arbitré, et il faut le redire.** Le plan de `chien-de-garde` avait été validé par Tim sur un pilier annoncé comme transverse — *le chien de garde a son propre oscillateur, donc il survit à un plantage d'horloge*. Vérifié : vrai sur AVR (oscillateur RC libre, d'où des délais **approximatifs qui s'allongent à basse tension**), **faux sur RP2040**, dont le tick dérive de l'horloge de référence. Écrite telle quelle, la phrase de popover aurait été fausse sur une des deux familles enseignées. La sortie n'a pas été d'exécuter le plan validé mais de **rouvrir l'arbitrage sur le résultat de la vérification** — et l'écart s'est avéré meilleur que la phrase : *un chien de garde n'est indépendant que de ce dont il est indépendant*, arbitrage entre couverture de panne et précision du délai. **Une validation porte sur un plan, pas sur les faits que le plan suppose.** Même famille que la règle des libellés non vus (17/08) : on ne pose pas de mémoire ce qu'on n'a pas ouvert.
- **C62 n'a aucun contrôle mécanique, et le défaut ne se voit qu'au rendu.** Le tableau des sources d'`interruption` portait **six** wikilinks à libellé non échappés : chaque pipe ajoute une colonne à sa ligne, la table était décalée en production sur une fiche du socle, **relue le 12/06 sans que ça sorte**. Symétrique exact de l'incident du 18/08 — `audit-wikilinks.mjs` a été corrigé pour ne plus compter les pipes **échappés** comme des liens morts, mais rien ne détecte les **non échappés**, qui sont des liens parfaitement valides pour le graphe. **Une convention d'écriture sans contrôle automatique se dégrade en silence**, et celle-ci se lit mal en source : le pipe non échappé est invisible à l'œil dans une cellule dense. Motif de détection à outiller : `[[…|…]]` non échappé sur une ligne commençant par `|`.
- **Note de calibre (C95).** `chien-de-garde` sort à **13,3 ko** contre 5-10 pour une notion, dont 8-10 négociés pour absorber la section d'indépendance. **Dépassement signalé, gardé sur arbitrage Tim (« notion avancée »), tracé comme arbitrage ponctuel — la grille C95 est inchangée.** Arbitrage explicite de ne **pas** ouvrir une quatrième ligne *notion avancée* sur un cas unique : à rouvrir si une deuxième notion dépasse pour le même motif.

### Acquises 19/08 (suite 4) — lot « porte borgne », exécution de C94

**Aucune convention numérotée nouvelle — la numérotation éprouvage reste à C95.**

- **La forme du jumeau suit la fiche d'accueil, pas un gabarit global (candidate).** Les 22 portes borgnes ont été fermées sous **trois formes distinctes**, chacune imposée par sa fiche et non par une préférence : **une entrée par famille** sur le patron de `timer` (`asservissement`, `filtrage`, `chronogramme` — *Voir aussi* courte, suffixes de famille déjà en place) ; **le jumeau entre parenthèses en fin de ligne** (`potentiometre`, `lire-une-datasheet` — quatre concepts d'un coup, le patron `timer` y ferait passer six entrées à dix, dont quatre jumeaux consécutifs) ; **les familles séparées par `·`** (`gpio`, `decouplage`, `alimentation-electronique` — forme **déjà pratiquée par `gpio`** pour sa triade `esp32 · micropython · raspberry-pi`). Uniformiser aurait cassé une convention interne existante pour un gain nul. À éprouver sur le prochain lot de maillage avant promotion.
- **Quand la fiche emploie le *concept*, on retarge vers la notion `[T]` ; quand elle désigne le *geste*, on double vers la famille jumelle.** Cinq des vingt-six liens du lot étaient des **retargets** et non des ajouts, et c'est la meilleure correction des deux. `fast`, `specification-technique` et `schema-bloc-fonctionnel` pointaient `arduino-pid` pour dire « PID » dans une liste de solutions candidates, une citation d'objectifs pédagogiques et un commentaire d'inertie thermique — aucune ne parlait d'Arduino, et `asservissement` porte le concept. Idem pour `potentiometre` → `pwm` (« la PWM » comme notion) et `machine-a-etats` → `gpio` (analogie sur l'état des broches au boot). **La porte disparaît au lieu de s'élargir**, et le lecteur atterrit sur la fiche qui répond à sa question. Précédent : `boucle-fermee` retargé vers `asservissement` le 18/08.
- **La troisième borne de C94 vaut aussi du côté des cibles.** *Suffixe partagé sans sujet partagé* avait été écrit pour les **sources** (`esp8266-arduino-core` contre `stm32-arduino-core`). Le lot en donne un cas **symétrique** : l'audit réclame `raspberry-pi-gpio` à `wokwi`, alors que Wokwi simule le **Pico** — territoire `micropython-*` — et non le **SBC sous Linux**. Un lien posé aurait envoyé l'étudiant vers une autre machine. Les exclusions d'un audit se relisent **dans les deux sens**.
- **Un test de recette se date, sinon il fait corriger un outil juste.** La recette du `.mjs` (132 / 45 / 30) a rendu **134 / 49 / 30** au premier lancement, et le prompt ordonnait d'en conclure que le portage était fautif. L'écart venait du **corpus** : deux fiches non-famille créées après le passage de l'audit. **Un écart s'impute d'abord à la date, ensuite au code** — et une recette se publie avec le **nombre de fichiers de référence**, pas seulement avec ses résultats. Complète l'acquis du 19/08 suite 2 (*un script versionné mais jamais exécuté doit être livré avec son test de recette*).
- **Un allègement s'annonce dans l'unité de ce qu'il retire, pas en octets.** Chiffrage annoncé ≈ −1,2 ko par fiche, mesuré **−379 et −228 octets** : j'avais compté ce que je retirais sans compter ce que j'écrivais à la place. La bonne unité était *les paragraphes strictement identiques entre jumeaux*, et ceux-là ont bien disparu. **Avant d'annoncer un chiffre de coupe, vérifier qu'il mesure l'objectif et pas un proxy.** 5ᵉ occurrence du motif *un chiffre dérivé n'est pas un chiffre mesuré*, la première sur une estimation de ma propre production.
- **Une redite entre jumeaux ne se coupe pas au même endroit qu'une redite interne.** Les deux `programmation-non-bloquante` de famille pèsent 13,1 et 10,6 ko — **dans la cible C95**. La coupe ne se justifiait donc pas par la longueur mais par la redondance, et sous C47 la redondance n'est **visible que du lecteur qui traverse la transverse et les deux jumeaux**. D'où la borne retenue : on coupe le § *À quoi ça sert ?*, qui se lit une fois, **pas les pièges**, qu'on relit en panne au moment précis où l'on ne veut pas changer de page.
- **Ne jamais ancrer sur les premières lignes d'un `tail`.** Une relecture de contrôle en `tail=22` a affiché un caractère de remplacement là où le fichier porte un tiret cadratin : la troncature avait coupé une séquence UTF-8 en son milieu. Le mode d'échec est déjà dans la chaîne C14 côté `head` ; **il vaut symétriquement pour `tail`**, et il est apparu dans une session à une trentaine d'ancrages.

### Acquises 19/08 (suite 2) — notions `[T]` non bloquante et boucle ouverte, audit des portes de famille

**C94 — une porte de famille s'ouvre sur *toutes* les familles qui portent le concept.** Une fiche non-famille — trame, notion `[T]`, hub transverse — a le droit, et souvent le devoir, de renvoyer vers un module : c'est le rôle du parcours. Ce qu'elle n'a pas le droit de faire, c'est de n'en citer **qu'un** quand le jumeau existe. Le lien fonctionne, aucun audit de liens morts ne le voit, et le parcours enseigne à un lecteur MicroPython un geste Arduino.

Le défaut prend **deux formes qui n'ont ni la même cause ni le même remède**, et les confondre fait mal doser le travail. **Le créneau vide** : aucune notion `[T]` ne porte le concept, la fiche transverse se rabat faute de mieux — on **écrit une fiche**. **La porte borgne** : la notion `[T]` existe et ne cite qu'une famille — on **ajoute un lien**. Le second ne se voit pas en lisant une fiche, puisque le lien présent est correct ; il ne se repère qu'en croisant avec l'inventaire des fiches famille, donc **mécaniquement** (`tools/audit-portes-famille.mjs`).

**Borne** : trois classes de liens à une seule famille sont légitimes et ne relèvent pas de la règle. Un **module-langage** est ancré dans son écosystème — réclamer un jumeau MicroPython à une fiche `cpp-*` n'a pas de sens. Un **hub de famille nu** (`[[esp32]]`, `[[arduino]]`) est une porte par nature. Et un **suffixe partagé sans sujet partagé** (`esp8266-arduino-core` contre `stm32-arduino-core`) est une collision de nommage, pas une asymétrie.

*Origine* : la pratique était **appliquée d'office depuis le 18/08** (six défauts patchés sur onze notions) sans être énoncée nulle part — elle se serait donc reperdue à la première relecture qui ne l'aurait pas connue. C'est exactement le critère qui a fait promouvoir C29 : *une pratique qu'on applique systématiquement doit être écrite, quel que soit son compteur d'épreuve*. Éprouvée 1/N. **La numérotation éprouvage atteint 94.**

Notes 19/08 (suite 2) :

- **Un périmètre hérité se balaie entièrement, mais le résultat ne s'y arrête pas.** Le brief désignait 8 fiches et annonçait le motif dans les trames transverses ; les trois transverses étaient **indemnes**, et le gisement réel était dans deux notions `[T]` que le brief ne citait qu'en cibles de réciproques. Balayer le périmètre demandé reste la première obligation — c'est lui qui a montré que l'hypothèse était fausse.
- **Un audit se porte garant de ses faux positifs autant que de ses trouvailles.** 45 asymétries brutes pour 30 réelles, dont **12 pour le seul module `cpp/`**. 3ᵉ occurrence du motif (67 liens morts pour 5 le 18/08, faute de C62). Corollaire désormais tenu : **les exclusions s'écrivent en commentaire du script**, à côté du code qui les applique, avec leur raison structurelle.
- **Un script versionné mais jamais exécuté doit être livré avec son test de recette.** Le `.mjs` de `tools/` est un portage du Python qui a produit les chiffres ; ne pouvant le lancer sur le poste, la seule garantie honnête est de publier les **trois nombres attendus** (132 / 45 / 30) pour que le premier lancement les démente ou les confirme. Variante écrite du mode d'échec *l'opération paraît réussie, le travail réel est nul*.
- **Une notion transverse se justifie par ce qu'aucune fiche de famille ne peut dire.** `programmation-non-bloquante` ne vaut pas parce qu'elle résume les deux jumeaux, mais parce qu'elle **rapproche** ce qu'ils ne peuvent pas voir l'un de l'autre : la soustraction de dates est juste en C malgré le débordement, fausse en MicroPython où la période n'est pas exposée — même patron, deux écritures, et la raison n'est pas cosmétique. **Critère à réemployer** avant d'ouvrir un créneau vide : *qu'est-ce que la notion dira que les deux fiches réunies ne disent pas ?*
- **Une fiche que personne ne réclame doit changer d'angle, pas être abandonnée.** `boucle-ouverte` n'avait **aucun lien rouge entrant** et `asservissement` en portait déjà la définition. Écrite comme *l'inverse de l'asservissement*, elle était un doublon ; écrite comme *à quelles conditions peut-on ne pas mesurer*, elle porte un contenu neuf — dont le montage du fil rouge (steppers en boucle ouverte **avec** capteurs de surveillance) que le wiki décrivait sans savoir le nommer. **Un doublon apparent est souvent un angle mal choisi.**

### Acquises 19/08 (suite) — rang 1 sessions B et C (conversions, SVG d'instruments)

**C93 — un placeholder dit un *besoin*, pas un *emplacement* ni un *contenu*.** Trois cas le même jour, deux volets.

*Volet placement* : le média ou le bloc qui remplace un placeholder va **là où il enseigne**, pas forcément là où le placeholder se trouvait. `multimetre:56` siégeait dans l'*Exemple* (tension, continuité) ; le SVG retenu — la chaîne qui grille le fusible — a été posé dans les *Pièges*, sous le paragraphe qu'il démontre, et le placeholder d'origine simplement retiré (sa prose se suffisait). `micropython-watchdog:58` a migré de §3 vers l'après-exemple, parce que la trace REPL découle d'un code situé vingt lignes plus bas. **Le placeholder marque le moment où l'auteur a senti le manque, pas l'endroit où le remède agit.**

*Volet contenu* : la **description** du placeholder peut être pédagogiquement fausse, et alors c'est elle qu'on corrige. `arduino-module:77` demandait un module en gros plan « pour apprendre à identifier les broches » ; un contour idéalisé aurait enseigné un ordre normalisé qui **n'existe pas** (source : même référence achetée à deux dates, GND et VCC inversés ; le fabricant de la carte choisit son ordre). Le SVG montre donc **deux modules aux deux premières broches inversées**, et un paragraphe neuf a été ajouté à la fiche pour porter la règle. **Une conversion peut donc modifier le texte de sa fiche** — corollaire direct de C88 (le scénario commande les médias) appliqué à l'échelle d'un seul média. Éprouvée 3/N. **La numérotation éprouvage atteint 93.**

**Extension de C69 — aucun élément ne porte de couleur en dur, pas seulement les pointes de flèches.** Le nœud VSYS de `deux-sources.svg` était un `<circle fill="#BA7517">` : invisible en mode sombre, et **hors du peigne** `marker` + `fill="#` que C69 prescrivait. La règle se relit donc en étendant sa portée à tout élément graphique, et le peigne de contrôle devient `fill="#` tout court, markers compris.

Notes 19/08 (suite) :

- **Un chiffre dérivé n'est pas un chiffre mesuré.** Le prompt de session B annonçait 31 placeholders restants ; il y en avait **35**. Le 31 venait de 108 − 16 − 60, une soustraction de clôture recopiée telle quelle. Même motif sur le décalage de lignes : **18 fichiers annoncés périmés, 5 réels** — suppressions et insertions s'étaient compensées. Variante neuve du mode d'échec recensé le 18/08 : non plus *l'opération réussit mais le périmètre est tronqué*, mais **le chiffre est calculé au lieu d'être compté**. *Un décalage ne se prédit pas, il se mesure* — et un compteur reporté d'un prompt à l'autre se revérifie à l'ouverture.
- **Un régime (a)/(b) se vérifie contre le code, pas contre le triage.** Deux reclassements en sens inverse le même jour : `teensy-arduino-core` **sort** du régime (b) (son sketch n'imprime aucune mémoire libre, seulement `F_CPU`, constante de compilation), `esp32-arduino-core` **y entre** (il imprime `esp_get_free_heap_size()`, grandeur de carte). Sans la relecture, le wiki aurait affirmé un chiffre de mémoire à un endroit et laissé un trou à l'autre, **pour le même type de valeur**. Le triage classe sur la description du placeholder ; seul le code tranche.
- **Le dry-run se lit aussi pour la redite qu'on introduit.** Quatre fiches ont dû être repassées : elles portaient **déjà** en prose la phrase d'amorce que le bloc converti réintroduisait (« au moniteur, on voit défiler… »). Prolonge l'acquis du 18/08 : le dry-run ne vérifie pas seulement la cible, il donne à relire le rendu de l'insertion **dans son voisinage**.
- **Un bloc de sortie console s'écrit en fence nue.** Convention établie du dépôt, vérifiée par inventaire des fences avant écriture (`cpp-logs`, `micropython-debug`, `falstad`) : trois accents graves sans langage, pour un moniteur série, un Shell, un REPL ou une console de compilation. Les 23 conversions s'y tiennent.
- **La règle des libellés non vus vaut aussi quand on écrit un bloc, pas seulement une procédure.** Deux écartés en session B : *CPU Speed* du menu Teensy (remplacé par « la vitesse de cœur choisie avant le téléversement ») et l'horodatage de la console CubeIDE. Un bloc de sortie **est** une citation d'écran.

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

### Acquises 19/08 — rang 1 session A (re-balayage, arbitrages, embeds posés d'avance)

**C92 — un réemploi cross-dossier exige une capture neutre de famille.** Le critère posé le 18/08 pour C76 était le **geste répété** d'une famille à l'autre : installer un paquet, enficher une carte, lire une console. Il est **insuffisant**. Sur douze réemplois annoncés, **cinq sont tombés** à l'exécution parce que l'écran, lui, **nomme la famille** — gestionnaire de cartes filtré sur « esp32 » et paquet « Espressif Systems » sous une phrase qui dit d'installer « esp8266 » ; photo d'empilage montrant un **Uno** sous une phrase qui parle d'un **Pico** ; moniteur Wokwi affichant `Hello, ESP32!` sous une phrase MicroPython. Les quatre réemplois qui ont tenu sont ceux dont l'image **ne nomme rien** : champ Préférences vidé, page `arduino.cc`, console de compilation, session de débogage. **Règle** : avant de déclarer un réemploi, se demander non pas « le geste est-il le même ? » mais « **l'écran est-il muet sur la carte ?** ». **Corollaire de production** : une prise destinée au réemploi se **cadre neutre dès la prise de vue** (champ vide, filtre effacé) — c'est ce qui a sauvé le pivot Préférences, neutralisé dès le triage. Un réemploi non neutralisable se résout en **prise propre ou en suppression**, jamais en réemploi assumé : une image qui contredit sa phrase est pire qu'une image absente. **La numérotation éprouvage atteint 92.**

Notes 19/08 :

- **Un motif de balayage se teste sur ses variantes d'ordre, pas seulement sur ses mots.** Le motif du 18/08 attrapait « Prendre capture d'écran **ou photo** de » et ratait « Prendre **photo** de » : mêmes mots, ordre inversé. Les six placeholders retrouvés le 19/08 ont **tous** cette signature. À quoi s'ajoute un **commentaire HTML** (`schema-bloc-fonctionnel:67`), invisible en production donc absent de tout compteur — un balayage de dette doit inclure les commentaires, pas seulement le rendu.
- **Poser un embed avant l'image, c'est faire du nom de fichier une spécification.** L'arbitrage (c-large) de Tim — rendu contre ma recommandation — imposait ~59 absents. La réponse utile n'a pas été d'insister mais d'écrire un **manifeste** figeant chemin et largeur pour chaque prise : l'auteur shoote sous ce nom, l'image apparaît sans édition supplémentaire. **Ce qui était un coût devient une avance de travail** — à condition que le manifeste existe. Contrepartie assumée : l'**alt est écrit contre la spécification**, pas contre les pixels (borne de C81 explicitée), d'où une vérification obligatoire au dépôt de chaque image.
- **(c-large) autorise l'absence, pas l'erreur.** Un lien mort se répare en déposant un fichier ; une image existante qui contredit sa phrase se publie telle quelle. D'où le seul embed non posé du lot (`micropython-simulation:54`) : le fichier existe, et c'est précisément pourquoi il est dangereux.
- **Une suppression décale les numéros de ligne de tout ce qui suit.** Seize suppressions et deux attributions ajoutées ont périmé les références `fiche:ligne` de **18 fichiers** dans le manifeste. Le recalage se fait **en une passe de balayage**, pas au fil des lots — sinon chaque lot invalide le précédent. À prévoir en ouverture de toute session qui suit un lot de suppressions.
- **Un alt ne cite pas un libellé d'interface non vu.** Les trois vues *Plotter* de Thonny portent deux appellations dans le wiki ; les alts décrivent le **tracé** et non le panneau. Prolonge la règle `falstad`/`ltspice` du côté des médias.
- **Une capture de réglages expose des données réelles.** L'onglet *Général* de Raspberry Pi Imager affiche SSID, identifiant et mot de passe. Signalé à l'auteur avant la prise : **valeurs jetables**. Cousin du masquage d'UID en `XXXX-XXXX-XXXX` (C29), côté image au lieu du côté bloc de code.

### Acquises 18/08 (suite 3) — fiche transverse `filtrage`, expurgation C71 du hub MCU

**C91 — arbitrage à la chaîne : une phrase, des options lettrées, une préférence facultative.** Demande de Tim, 18/08. Quand une session enchaîne de **nombreux arbitrages de même nature** — typiquement le tri de placeholders —, chaque question se pose en **une seule phrase**, suivie d'options **(a) / (b) / (c)** et, en option, de la préférence de Claude en quelques mots. Pas de mise en contexte, pas d'argumentaire déroulé, pas de rappel de convention : le coût d'un arbitrage doit être celui de sa lecture. **Borne** : le format vaut pour les décisions **répétitives et bornées**. Un choix structurant — nouvelle convention, pédagogie de fond, référentiel AA — reste en brique D, sous peine de faire trancher à l'aveugle ce qui engage le parcours. En cas de doute sur la catégorie, poser la question courte **et** signaler qu'elle mérite peut-être un développement.

- **Une expurgation C71 n'est pas finie tant que les SVG de la fiche ne sont pas ouverts.** Le hub `microcontroleur` a livré sept mentions en prose et dans son tableau — et **deux de plus dans `positionnement.svg`** (Pico étiqueté « très bas coût, PIO », ESP8266 « IoT économique »), invisibles depuis le markdown. **Deuxième occurrence** après les deux étiquettes € de `mcu-vs-sbc` (30/06). Le contrôle est mécanique : après toute passe C71 sur une fiche, ouvrir ses médias et y chercher les mêmes termes. Corollaire de cohérence : les libellés du SVG se recalent **mot pour mot** sur les cases du tableau qu'ils illustrent.

- **Une notion transverse neuve naît mal maillée, et le défaut est dans le sens entrant.** `filtrage` pointait vers ses huit voisines dès l'écriture ; **aucune ne pointait vers elle**. Les quatre fiches capteurs étaient conformes — elles portaient le lien rouge depuis des mois — mais les **notions voisines** (`adc`, `precision-de-mesure`) ne l'ont reçu qu'en contrôle explicite. **Règle** : à la création d'une notion `[T]`, la liste *Voir aussi* de la fiche neuve se relit comme une **liste de patches à poser en retour**, chaque cible étant à vérifier. C'est le même motif que les portes famille, dans l'autre sens.

- **Une fiche transverse qui sert deux familles ne porte pas de code.** `filtrage` est appelée depuis Arduino **et** MicroPython, sans jumeau de famille ni prévision d'en créer. Un bloc C++ en aurait fait une fiche Arduino déguisée ; la fiche s'en tient donc aux **formules et au comportement** (`y ← y + α(x − y)`, `fc = 1/(2πRC)`, gain en √N, retard en `(N−1)/2`), sur le gabarit de `timer` qui ne porte aucun code non plus. Effet de bord utile : **C79 ne s'applique pas** faute de bloc de code.

- **Un SVG pédagogique se vérifie contre sa propre annotation, pas seulement contre le réel.** `bruit-et-retard.svg` annonce un retard de 5 mesures pour `N = 10` : la première génération en donnait **3,7** — le bruit déplaçait le croisement de la mi-hauteur. Plutôt que d'annoter la valeur théorique sur une courbe qui la contredit, la graine aléatoire a été **choisie par recherche** pour que le croisement calculé tombe à `4,50`, soit exactement `(N−1)/2`. Prolonge la leçon `lecture-courbe.svg` du 18/08 : *un repère chiffré se calcule* — et quand l'aléa s'en mêle, **c'est l'aléa qu'on choisit**, pas l'annotation qu'on arrondit.

- **Un brief hérité se vérifie contre le dépôt avant d'être exécuté.** Le prompt de lancement du 18/08 (suite 3) donnait `cycle-v-projet` pour embarqué **sur l'accueil et sur le hub**, avec deux chemins distincts à préserver. Vérification faite : `content/index.md` **ne contient aucune image**, et `conduite/index.md` embarque en chemin **absolu**, pas en `../`. L'exception du §6 désigne en outre `content/hub/index.md`, **dossier qui n'existe plus** (renommé `conduite/`). Trois affirmations, trois démentis — et la session prévoyait de recoder entièrement une image sur cette base. **Les contraintes d'un prompt de lancement sont des hypothèses, pas des données.**

- **Le critère « antérieur à la charte » ne suffit pas à ouvrir un chantier.** La session s'ouvrait sur un recodage complet du cycle en V, justifié par la seule non-conformité de palette — quatre couleurs au lieu de deux, invisible pour l'étudiant. Tim a demandé pourquoi on y passait du temps, et ses réponses aux arbitrages ont **invalidé le parti prévu** (les couleurs n'ont aucune sémantique, la priorité est le grand écran) : la refonte à 460 px aurait aplati l'escalier du V, seule chose que le schéma doit dire. **Un défaut visible se corrige, une dette esthétique interne attend.** Le chevauchement de texte a été patché en trois éditions, chantier clos.

### Acquises 18/08 (suite) — session dette technique (audits, outillage, groomings)

**Aucune convention numérotée — la numérotation éprouvage reste à C90.**

- **Un outil qui rapporte un succès sans avoir agi — troisième et quatrième occurrences le même jour, la règle est acquise.** Le motif : *l'opération réussit formellement, seule la quantité de travail réel est nulle ou tronquée*. Quatre cas désormais recensés. (a) **`create_file` sans préfixe** rend « File created successfully » avec le chemin Windows complet, en créant dans le conteneur Linux un fichier littéralement nommé `C:\Users\...` — confirme C24 et le §6 *Préfixe MCP exclusif* ; le contrôle est un **`list_directory` du dossier cible** après écriture. (b) **`move_file` sur un changement de casse seul** (17/08) rend « succès » sans rien changer. (c) **Un parseur d'audit** peut rétrécir silencieusement son périmètre : la regex `!\[[^\]]*\]` sautait tout embed dont l'alt contient des crochets, sans les compter ni les signaler. (d) **Une borne de coupe mal calculée** annonce N retraits en coupant un octet chacun. **Règle** : après toute opération en lot, vérifier une **grandeur mesurable** — nombre de fichiers, taille retirée, compteur d'éléments traités — jamais le code de retour. Corollaire : **tout script de découpe expose un `--dry`**, et le dry-run se lit pour ses *chiffres*, pas pour son absence d'erreur.

- **Un garde-fou se pose des deux côtés.** `groom-conventions.mjs` refusait toute coupe au-delà de 9 ko et n'avait aucun plancher — or le mode d'échec réel (borne mal calculée) produit **toujours** une coupe trop petite. Je m'étais protégé du danger qui n'arrivait pas. **Avant d'écrire une garde, se demander dans quel sens l'erreur déraille.**

- **Un outil d'audit doit connaître les conventions du dépôt qu'il audite.** Le premier rapport wikilinks annonçait 67 liens morts pour 5 réels : 61 étaient des **pipes échappés en cellule de tableau**, c'est-à-dire précisément la syntaxe que **C62 impose**. Un audit écrit sans relire les conventions produit du bruit à hauteur de ce qu'il ignore — et ce bruit coûte des arbitrages inutiles à l'auteur. Les deux scripts d'audit portent désormais la règle en commentaire, à côté du code qui l'applique.

- **Promotion d'une convention : le critère fiable est externe, pas le compteur d'épreuve.** Le marqueur « Éprouvée x/N » du §8 n'est mis à jour que quand on y pense — C71 portait « 1/N » après sept modules, C77 après deux modules entiers. Un balayage mécanique du §8 ne trouvait que 7 candidates ; la **liste des contrôles d'office** recopiée dans chaque prompt de session en désignait **14**. Une convention qu'on applique systématiquement n'est plus en épreuve, quel que soit son compteur. **Critère à réemployer au prochain grooming** ; même leçon que les deux compteurs de captures démentis le 18/08 par le balayage — *un inventaire périodique vaut mieux qu'un compteur tenu à la main*.

- **Promouvoir ne fait pas maigrir un fichier, condenser oui.** Déplacer 16 conventions du §8 vers les sections numérotées ne retire rien au total — c'est la **condensation** (8 blocs anciens réduits en pointeurs, dont un de 9,3 → 1,5 ko) qui rend les kilo-octets. Les deux gestes se distinguent : la promotion **range**, la condensation **allège**. Au passage, un bloc dont toutes les conventions partent devient un **titre vide** — y laisser une ligne de pointeur vers la destination, comme le précédent « 28/05 suite 2 — PROMUES (trace) ».

- **Une vérification demandée sur un point trouve souvent le problème d'à côté.** La consigne était de vérifier en source les quatre versions d'actions GitHub avant de les bumper (bien vu : le « @v5 » du TODO était faux pour trois sur quatre). Mais le vrai risque était une ligne plus haut, jamais surveillée : `runs-on: ubuntu-22.04`, en dépréciation au 17/09/2026 avec des fenêtres d'échec volontaire. **Lire le fichier entier, pas seulement la ligne qu'on vient corriger.**

### Acquises 19/08 (suite 3) — fiches de lecture C85, calibre typé

95. **Le calibre d'une fiche se fixe par type, pas par plafond global.** Tim a proposé de remonter la limite de 10 à 20 ko après que deux fiches sont sorties à 16,7 et 18,4 ko. **Refusé, et l'argument est le signal** : sous un plafond à 20 ko, ces deux fiches ne dépassent plus rien — le dépassement qu'on vient de signaler cesse de se signaler. Sur le fond, 20 ko de prose française font ~3 000 mots, soit un quart d'heure de lecture, contre le *« 1 notion = lisible ~5 min sur smartphone »* du modèle wiki : un plafond unique autorise partout ce qui n'est justifié qu'à quelques endroits. La grille retenue était **déjà suivie de fait**, sans avoir jamais été écrite — **notion 5-10 ko** (`filtrage` 9,5 ; `boucle-ouverte` 7,4 ; `programmation-non-bloquante` 12,2 = dépassement déjà arbitré comme tel), **tuto 8-14 ko** (le parcours `cpp` tient seul entre 8,3 et 10,5), **tuto scénarisé C88 sans plafond** (`falstad` 20,4, `ltspice` 24,3 — la longueur y est une conséquence du patron et des 8 à 13 médias, pas une dérive). **Corollaire d'usage** : un dépassement se **signale** au lieu de s'assumer en silence, et **un dépassement gardé est un arbitrage, jamais un précédent** — sans cette phrase, la relecture suivante lira la fiche hors cible comme le nouveau gabarit. Les deux fiches de lecture du 19/08 restent **hors cible assumées**. Éprouvée 1/N. **La numérotation éprouvage atteint 95.**

Notes 19/08 (suite 3) (pas de convention numérotée) :
- **Une consigne de récolte se vérifie avant d'être exécutée.** Le brief donnait le bloc « mécanismes de langage » pour déjà écrit et éparpillé dans les encarts C77, à relever. Inventaire intégral, **244 fiches sur 244** : **33 encarts sur 30 fiches**, dont **26 idiomes métier**, 6 mitoyens et **un seul mécanisme de langage franc** — celui que le brief citait comme *plancher*. Le plancher était le plafond. C85 l'annonçait pourtant depuis le 17/08 (« la quasi-totalité des encarts existants sont des encarts d'idiome ») : **le brief avait oublié sa propre convention**. Le bloc a donc été **rédigé**, non compilé.
- **Le gisement était dans les paires jumelles, pas dans les encarts.** Treize encarts Arduino ont un jumeau MicroPython disant la même chose autrement : c'est **l'écart** qui est le mécanisme de langage (`close()` contre `with`, `0xFF` d'EEPROM neuve contre `try/except OSError`, accolades contre indentation). À réemployer partout où une notion transverse doit dire ce qu'aucun des deux jumeaux ne peut dire seul.
- **C81 vaut pour un extrait de code autant que pour une capture.** Un commentaire annonçait « les deux affectations ci-dessous » dans un extrait qui n'en montrait qu'une, derrière un `...` d'élision. **L'élision d'un bloc suffit à rendre sa légende fausse** : un extrait abrégé se relit contre son commentaire, exactement comme une image se relit contre son alt.
- **Un outil absent d'une recherche n'est pas un outil absent.** J'ai conclu à l'absence du MCP filesystem et proposé à Tim de changer d'application, sur la foi d'un `tool_search` qui ne remontait que Google Drive — alors que le cluster `filesystem` figurait dans la liste des outils différés. **La liste fait foi, pas le moteur de recherche.** Variante du mode d'échec récurrent : ici l'opération échoue formellement et la conclusion tirée est fausse dans l'autre sens.

### Acquises 20/08 — session de prise de vue guidée

99. **Une prise de vue est une relecture technique, pas une opération de production.** Neuf captures examinées ont révélé sept défauts de fond dans deux fiches déjà relues à froid : un paquet leurre placé au-dessus du bon dans le gestionnaire de cartes, un port marqué `Unknown` sur tout pont USB-série tiers, une manoeuvre BOOT décrite en quatre temps alors que le flasheur fait son propre reset, deux messages d'erreur alarmants sur installation saine, et une constante de carte qui ne compile pas. **Aucun n'était trouvable sans le matériel branché.** Corollaire de conduite : quand Tim rapporte un symptôme pendant la session, c'est un candidat *Pièges* à écrire immédiatement avec **son message d'erreur exact** — c'est cette chaîne que l'étudiant collera dans un moteur de recherche. Corollaire de budget : le rendement en prises nouvelles est élevé (11 ouvertes pour 9 examinées) et c'est **normal**, pas un dérapage. Éprouvée 1/N.

100. **Le format d'un média se choisit sur sa nature, pas sur son extension par défaut — et le poids se vérifie avant le commit, jamais après.** **PNG pour ce qui sort d'un écran** (aplats, texte, peu de nuances), **JPEG qualité 80 pour ce qui sort d'un appareil photo** (bruit de capteur, ton continu), **1200-1600 px de large** dans les deux cas. Un passage de JPEG en PNG sur deux photos a multiplié leur poids par six ; un GIF de 3 s a atteint 7,2 Mo parce que le format ne compresse presque rien entre trames. Git conservant tout binaire commité pour toujours, **l'interception se fait au dépôt**. Corollaire pratique : un fichier trop lourd est aussi **illisible côté Claude** (> ~350 ko), donc son alt ne peut pas être rédigé sans violer C81 — le poids n'est pas qu'une question de confort. Corollaire éditorial : **avant d'optimiser un GIF, vérifier qu'il doit exister** ; si le message est un *état* et non un *mouvement*, une paire de photos le dit mieux et cent fois plus léger (C87 restée intacte : le GIF vaut quand le mouvement *est* le message). Éprouvée 1/N. **La numérotation éprouvage atteint 100.**

Notes 20/08 (pas de convention numérotée) :
- **Un report de famille ne se fait pas en laissant les embeds en place.** Teensy et STM32 reportés post-rentrée : leurs embeds étaient posés d'avance en (c-large), donc les laisser aurait produit **des images cassées en production** — le seul cas que C90 ne couvre pas, puisque C90 assume des *placeholders* visibles, pas des liens morts. Les 13 embeds concernés sont revenus au placeholder C29 canonique. **Reporter, c'est reconvertir.**
- **Le nom d'une carte se retouche dans une capture, la colonne d'options qui le suit, non.** Une capture ESP8266 retouchée au lieu d'être reprise gardait *CPU Frequency 240MHz* — impossible sur une puce qui plafonne à 160 MHz. Trois indices concordants : options du mauvais cœur, fichier ayant à peine grossi (0,23 ko contre 14 et 19 pour les voisines), et espaces à l'intérieur des guillemets d'une ligne éditée. Erreur **acceptée par Tim** et tracée au manifeste ; le principe reste.
- **Un chiffre repris se revérifie.** Deux chiffres faux circulaient dans les prompts : « 49 lignes dont 8 réemplois » (il fallait lire « 49 pivots **+** 8 réemplois ») et une liste de sept dossiers manquants qui en oubliait un portant quatre prises. Les deux venaient d'une **soustraction**, pas d'un comptage — même mode d'échec que les compteurs de captures démentis le 18/08.
- **Une capture de code ne remplace pas un bloc de code.** Proposée puis écartée : elle n'est ni copiable, ni lisible par un lecteur d'écran, ni indexable — exactement ce que la session B du 19/08 avait corrigé sur 23 sorties texte. Elle garde sa valeur comme **pièce de diagnostic** pendant la session, pas comme média publié.
- **Une constante commode cède devant le numéro qui compile partout.** Deux fois le même arbitrage : `D5` → `14` sur ESP8266, `LED_BUILTIN` → `const int LED = 2;` sur ESP32. Les alias de broches ne sont définis que par certaines définitions de carte ; le numéro de GPIO l'est toujours. **À propager aux autres familles** quand leurs fiches passeront en prise de vue.

### Acquises 20/08 (suite) — seconde session de prise de vue

101. **Toute donnée personnelle visible à l'écran se masque avant le dépôt — obligatoire, pas optionnel.** Nom d'utilisateur système, chemin de dossier personnel, numéro de série, identifiant de session : ces éléments n'apportent rien à la démonstration et partent en production pour toujours. **Forme opératoire côté image** : masquage à la prise ou en post-production, avant le dépôt. **Forme opératoire côté bloc de code** : un chemin personnel s'abrège en `...\` à partir du premier segment non signifiant, et **on ne coupe jamais la ligne qui porte le `error:`** — c'est elle que l'étudiant collera dans un moteur de recherche. Un dossier temporaire à empreinte aléatoire (`.arduinoIDE-unsaved2026720-18188-z6wb30.e7s4`) est du bruit pur et tombe avec le reste. **Borne** : une adresse IP privée (`192.168.x.x`) n'est **pas** une donnée personnelle — non routable, elle ne dit rien de son propriétaire ; la masquer dans une barre d'URL fabriquerait un écran, ce que C102 interdit. Elle reste masquée dans un **bloc de code**, où une valeur voilée se lit naturellement et où le risque est qu'un étudiant recopie l'adresse d'autrui. Éprouvée 3/N (#11, #28, #31 — appliquée par Tim de lui-même avant d'être écrite). **La numérotation éprouvage atteint 101.**

102. **Soustraire et superposer sont permis, altérer ne l'est jamais — et un montage se déclare.** Trois gestes de post-production, trois statuts distincts. **Soustraire** — masquer une donnée personnelle, recadrer, retirer un bandeau commercial : légitime, et obligatoire dans le cas de C101. **Superposer** — encadré rouge, flèche, libellé posé par-dessus : légitime, parce que visiblement non photographique ; personne ne confond une flèche rouge avec l'interface. **Altérer** — modifier ce que le logiciel affichait : **interdit, sans exception**. Une valeur, un message ou un état retouché devient **indistinguable** du vrai : ni relecture, ni audit, ni l'auteur six mois plus tard ne peuvent le détecter. Si un écran ne montre pas ce qu'on voudrait montrer, **on change le montage ou on écrit le texte qui explique l'écran, jamais l'inverse** — et l'écran décevant est souvent le plus honnête : une entrée ADC non câblée affichant `0` est exactement ce que verra l'étudiant, elle méritait un piège et non un trucage. **Quatrième cas, le montage** : assembler plusieurs états réels dans une seule image n'est pas une catégorie de plus, c'est du recadrage — **à condition d'être lisible comme tel** (coutures visibles, panneaux distincts) **et déclaré dans l'alt**. Précédent : #53 (menu IDE + gestionnaire de périphériques reliés par une flèche). Éprouvée 3/N (#28 deux pages, #31 trois états, une falsification de valeurs détectée et annulée avant commit). **La numérotation éprouvage atteint 102.**

Notes 20/08 (suite) :
- **Le cadrage sert à ouvrir le bon écran ; ce que l'écran raconte se découvre en le lisant.** Aucune des quatre dernières prises n'a livré ce que sa spécification demandait, et les quatre ont livré mieux : un plancher ADC au lieu de mesures qui bougent (piège neuf + test de bon fonctionnement), un bouton *COPY ERROR MESSAGES* que la fiche ignorait alors qu'elle parle de recopier l'erreur, la phrase où l'IDE explique lui-même pourquoi le port n'est nécessaire qu'au téléversement, et un avertissement *Non sécurisé* jamais expliqué. **Corollaire de C99** : la valeur d'une prise ne se juge pas à sa conformité au cadrage.
- **Une capture peut être source primaire d'un chiffre que le texte n'a pas.** La sortie collée par Tim avait perdu son `fichier:ligne:colonne` à la troncature du chemin ; l'image le portait — `Blink.ino:6:24`, où la colonne 24 désigne le caractère *suivant* la parenthèse fermante, donc **le vide**. Le meilleur exemple possible pour une section qui enseigne à lire la colonne, et il venait de la photo, pas du copier-coller.
- **Le mauvais fichier sous le bon nom ne se voit qu'à la lecture de l'image.** Nom correct, chemin correct, poids plausible : aucun audit de chemin ne peut détecter qu'une capture montre une autre erreur que celle attendue. **C81 n'est pas une précaution de rédaction, c'est un contrôle d'intégrité.**
- **Une prise peut être annulée par la lecture d'une autre image.** #51 (moniteur série dans `ide`) est tombée parce que l'ouverture de `interface-annotee.png` a montré que le moniteur y était **déjà annoté**. La prise avait été ouverte pour combler une promesse d'alt ; l'alt corrigé, la prise n'avait plus d'objet. **Corriger un alt peut supprimer une prise de vue.**
- **Un dossier d'images se relit contre le manifeste, pas seulement contre les embeds.** Un fichier orphelin (`esp8266-prise-en-main/open-blink.png`) ne casse rien et ne se signale donc jamais : il n'est ni un lien mort, ni un placeholder. Seul le recoupement disque ↔ manifeste le fait apparaître.
- **Un total juste ne prouve rien sur ses termes.** « Lot actif 44, 12 déposées » était faux deux fois, mais **décalé en parallèle** : la soustraction tombait juste, l'erreur était invisible à tout contrôle portant sur le reste. Quatrième et cinquième occurrences du motif du chiffre repris.
- **Encodage à vérifier** : deux fiches MicroPython (`micropython-prise-en-main`, `micropython-repl`) portent un `é` illisible à la lecture MCP (`intégr??e`, `mat??riel`) là où les autres accents passent. Possible normalisation Unicode mixte (NFD contre NFC), qui casserait aussi les ancres d'édition. **À vérifier au rendu avant d'y toucher** — ne pas « corriger » un caractère sans savoir ce qu'il est.

### Acquises 20/08 (suite 2) — parcours étudiant, les douze scénarios

103. **Une porte se juge à son libellé, pas à son existence.** Douze scénarios de primo-lecteur traversés côté fichiers sur un graphe **sain** — 241 fiches atteignables sur 242, 4 290 liens, 1 seul lien mort. **Aucun scénario n'a échoué faute de lien.** Les trois qui échouent ou peinent le font parce que **le mot que l'étudiant a en tête n'est pas sur la porte** : « preuve de concept » écrit **deux fois en texte nu** sur le hub embarqué pendant que le seul lien vers la fiche siège trois étapes plus loin ; « AMDEC » absent du hub du V, qui n'indexe que par **livrable** quand l'étudiant arrive avec un nom de **méthode** ; « déboguer » posé sur l'étape qui traite l'exécution, là où l'erreur de compilation se cherche. **Corollaire de production** : quand une fiche écrit un concept en texte nu et que le lien vers ce concept vit ailleurs sur la même page, **c'est le texte nu qui est le défaut**, pas le lien absent — la correction coûte un pipe. **Corollaire de mesure** : un BFS mesure la **distance**, jamais la **raison de cliquer** ; le couple #6 sortait à 1 clic quand la traversée le classait *abouti de justesse*, et les deux étaient vrais. Éprouvée 1/N.

104. **La délégation hors périmètre se pose depuis le piège, pas en section séparée.** Les fiches-trame ont une section *Ce qui relève d'ailleurs* ; les fiches-tuto de famille n'en ont pas, et j'ai d'abord conclu que la frontière latérale leur était **structurellement** fermée. **Démenti par le corpus** : `arduino-capteur-analogique` n'a pas non plus de section dédiée et **sort quatre fois de son périmètre depuis ses sept pièges** (`filtrage`, `precision-de-mesure`, `niveaux-de-tension`, `lire-une-datasheet`) ; `arduino-moteur-pas-a-pas`, même gabarit, huit pièges, **une seule sortie**. Le mécanisme n'est donc pas la section mais **le lien sortant posé dans le piège**, là où l'étudiant rencontre la frontière au moment où elle le concerne — et non dans une liste de fin de page qu'il ne lit pas en panne. **Ce n'est pas le gabarit, c'est la fiche.** Éprouvée 2/N (modèle `arduino-capteur-analogique`, application `arduino-moteur-pas-a-pas`). **La numérotation éprouvage atteint 104.**

Notes 20/08 (suite 2) :
- **Un chiffre qui contredit un chiffre déjà mesuré est une hypothèse, pas une trouvaille.** Mon graphe a rendu **70 liens morts** ; `audit-wikilinks.mjs` en annonçait **5** le 18/08. Deux audits du même dépôt ne peuvent pas différer d'un facteur quatorze. Vérification faite fiche ouverte : **69 faux positifs sur 70**, tous résolus par le champ `aliases:` du front matter (`fonction` porte FP/FS/FC, `caracteriser-une-exigence` porte critere/niveau/flexibilite). 4ᵉ occurrence du motif du 18/08 — *un audit qui ignore une convention du dépôt produit du bruit à hauteur de ce qu'il ignore* — commise cette fois par moi, sur ma propre session. **Extension utile de la règle** : un audit de liens doit connaître le **front matter**, pas seulement la prose ; les alias sont une table de résolution, et une **seconde porte** invisible depuis les liens.
- **Une prédiction publiée avant exécution est réfutable ; une validation globale ne l'est pas.** Le fichier de traversée au rendu porte mes pronostics **derrière un séparateur**, pour que Tim remplisse avant de les lire — un relecteur qui connaît la réponse cherche la réponse. La réponse reçue (« plusieurs résultats ») **n'a pas tranché** : la recherche de Quartz étant plein texte, tout mot rend quelque chose, à commencer par la fiche où l'étudiant est déjà. Ce qui discriminait était **quelle fiche arrive en tête**. Le lot correspondant a donc été patché dans sa version **indépendante de la réponse**, et l'indécision écrite au lieu d'être absorbée. À rappeler : **une question de mesure se pose en demandant un rang, pas une présence.**
- **Un gel de relecture admet une exception pour l'erreur factuelle (arbitrage Tim).** Le régime des douze traversées interdisait toute correction avant la fin, pour qu'un motif systémique ne se dissolve pas. `arduino-moteur-pas-a-pas` donnait « microstepping plus fin » comme moyen d'**augmenter** le couple et écrivait quarante lignes plus bas que le microstepping le **réduit**. J'ai plaidé que geler une **erreur technique** ne révèle aucun motif et laisse seulement une fausseté en production ; **Tim a tranché (c), exception bornée à ce cas**. La borne compte autant que l'exception : une seconde erreur factuelle **rouvrirait** la question au lieu de se réclamer de celle-ci.
- **Une exclusion d'audit se pose sur la fiche, pas sur le dossier — réemploi de C97.** `ressources/index` sortait à la fois en cul-de-sac, orpheline et inatteignable : trois compteurs pour une page d'atterrissage de trois lignes qui n'a **aucun lien par construction**. Elle reste **indexée** (le compte de fiches ne bouge pas) et sort des trois compteurs de santé. Exclure le dossier `ressources/` aurait masqué un vrai orphelin déposé là un jour.
- **Un patch de parcours se mesure en clics, pas en éditions.** Après le lot : **#4 et #9 passent de 3 à 2 clics** depuis l'accueil, #4 de 2 à **1** depuis le hub, et le lien mort tombe à **0**. Et les **+13 liens** (4 290 → 4 303) se recomposent exactement sur les six fiches éditées — 2 + 1 + 1 + 1 + 3 + 5. **Une grandeur mesurable, publiée avec sa décomposition**, comme le veut la règle du 19/08.
- **Le hub embarqué indexe par étape *et* par objet ; le hub du V n'indexe que par livrable.** Les trois scénarios dont la réponse est un **livrable nommé** dans un callout `[!livrable]` aboutissent en 1 clic depuis `conduite/index` — 3/3. Celui dont la réponse est une **méthode** échoue. Côté embarqué, chaque étape nomme ses fiches en liste à puces, et l'étudiant **scanne les noms** sans savoir où il en est : c'est la stratégie la plus robuste à l'ignorance du lecteur. **À garder en tête avant de « nettoyer » une redondance de hub** — `alimentation-electronique` et `pcb` sont citées par deux étapes chacune, et c'est ce qui rattrape l'étudiant qui s'est trompé d'étape.

### Acquises 21/08 — mesure de recherche, extraits de datasheet, C71 résiduel

105. **Une mesure de recherche se prend sur la bande de tête, pas sur le rang 1 — et une palette n'est pas une redirection.** Le 20/08 avait corrigé « une présence ne mesure rien, seul un rang mesure », après qu'un « plusieurs résultats » n'eût rien tranché. La mesure prise le 21/08 **dément le critère à son tour** : aucune des deux conditions de fermeture écrites n'est remplie (`bruit` rend `filtrage` en **3ᵉ**, `couple` ne rend **aucune** fiche Méca) et **les quatre requêtes aboutissent quand même** — `arduino-moteur-pas-a-pas` 2ᵉ sur `couple`, `fiabiliser-et-deboguer` 2ᵉ sur `marche parfois`, et les trois résultats de `bruit` (alimentation, capteur numérique, filtrage) formant un **diagnostic différentiel** dont l'ordre est défendable. **`Ctrl+K` rend une liste courte que le lecteur lit en entier ; l'unité utile est donc le top 3.** Corollaire : un critère binaire posé sur le rang 1 **fabrique un échec** là où le parcours réussit, et fait manquer l'information réelle (la **composition** de la bande de tête). Éprouvée 1/N (4 requêtes, scénarios 3, 4, 9, 10 du parcours étudiant).

106. **Une alerte héritée se vérifie contre la fiche avant d'être exécutée — sinon on protège ce qui n'est pas exposé et on laisse découvert ce qui l'est.** Le manifeste alertait depuis le 18/08, et trois prompts de lancement l'avaient recopiée, sur la **renumérotation des tables** de la datasheet L298 entre révisions, qui « rendrait l'exercice faux ». Fiche ouverte : `lire-une-datasheet` **ne cite aucun numéro de table** ; elle cite **onze valeurs**, plus une **condition entre parenthèses** (`T_case = 75 °C`) qu'elle ordonne expressément de lire. Le « table 1 » vivait dans le cadrage, pas en production. **Le risque réel était le cadrage des valeurs, jamais écrit nulle part.** Corollaire sur les sources : une référence bibliographique se source elle aussi — la fiche annonçait « révision 5 (octobre 2023) » quand le PDF réel est l'**édition de janvier 2000**, chiffre jamais vérifié. Et le piège correspondant visait à côté : le risque n'est pas de lire une **vieille** révision, c'est de **ne pas savoir laquelle on lit**. Éprouvée 1/N. **La numérotation éprouvage atteint 106.**

Notes 21/08 (pas de convention numérotée) :
- **Un `aliases:` n'est pas un mot-clé de recherche, c'est une table de résolution de liens.** Proposition écrite par moi le 20/08 (« un patch de deux minutes » pour indexer `reproductibilité`), **retirée par moi le 21/08** : dans Quartz comme dans Obsidian, l'alias rend `[[reproductibilité]]` résolvable et crée une **seconde porte invisible depuis les liens** — le mécanisme exact des 69 faux positifs de la veille. Payer une pollution du namespace de liens pour un gain de recherche est un mauvais échange quand la requête naturelle (« marche parfois ») aboutit déjà. **Refus tracé au TODO avec son motif chiffré**, comme pour l'outillage C62.
- **Une image écartée comme média peut rester une source.** La table `PIN FUNCTIONS` du L298 a été refusée comme second panneau de #42 — elle serait illisible à 600 px, et surtout **la fiche fait mieux qu'elle** (elle trie les broches en quatre familles quand ST les ordonne par numéro, donc un index sous une explication qui le surclasse, contre la consigne même de l'étape 3). Lue à part, elle a néanmoins livré une précision absente du wiki : ST spécifie le 100 nF **non inductif** sur Vs et **ne le précise pas** sur Vss.
- **Une capture peut sourcer un chiffre que le texte affirmait seul.** #43 porte `Junction Operating Temperature −25 to 130`, et c'est ce 130 °C dont se sert la section *La chauffe* deux paragraphes plus bas — section qui n'a **aucune image**. Second exemplaire après le `Blink.ino:6:24` du 20/08.
- **Une expurgation cible un périmètre, pas une règle — donc elle laisse des résidus ailleurs.** L'expurgation C71 du 18/08 avait visé le hub `microcontroleur` ; `analyseur-logique` portait toujours « ~10 € » et « pas à acheter pour le projet », et `multimetre` « peu coûteux », dans des fiches passées par la relecture de fond. Les trois sœurs (`oscilloscope`, `generateur-de-signaux`, `instruments-de-mesure`) sont indemnes — le contrôle de fratrie a donc été utile dans les deux sens. **Borne non tranchée** : « gratuit » pour un logiciel libre (occurrences dans `analyseur-logique` et `esp32-ble`) est-il visé par C71 ? → BACKLOG.
- **Une spécification de capture peut demander l'inobservable.** #38 promet « des échantillons régulièrement espacés **dans le temps** » ; le traceur série trace en **index d'échantillon**, si bien qu'une cadence irrégulière produit exactement la même courbe. Ce qui se voit est l'**intervalle mesuré** tracé lui-même. *Une spécification d'image se vérifie contre ce que l'outil sait afficher, pas seulement contre ce que la fiche veut dire.*

- **Une convention de dépôt écrite pour l'outillage se viole en écrivant « bien ».** J'ai posé **74 NBSP** (U+00A0) dans les quatre fichiers de pilotage en typographiant les deux-points à la française — 27 TODO, 29 JOURNAL, 14 conventions, 4 BACKLOG — et le hook de pre-commit a refusé le commit. La correction immédiate a **raté son anchor sur une ligne visuellement identique**, ce qui est exactement le mode d'échec que la chaîne C14 décrit. *Règle opératoire : dans un `newText` destiné à un fichier de pilotage, l'espace insécable est proscrite — la typographie française s'arrête à la frontière de `content/`.*
- **Un garde-fou se juge à sa couverture, pas à son déclenchement.** `tools/normalize-pilotage.js` se déclenchait correctement, mais sa liste `TARGETS` (six chemins) **ignorait les trois feuilles de route de `_drafts`** éditées le jour même — dont le **manifeste des captures**, aussi ancré par `edit_file` que le TODO. Le commit serait passé propre en apparence, en laissant des NBSP dormants précisément là où la session suivante ancre le plus. Trois chemins ajoutés. **À refaire à chaque création de fichier de pilotage** : le script porte le rappel en commentaire, personne ne l'avait relu depuis.

### Acquises 21/08 (suite) — séance de prise de vue, les six dernières

107. **Un montage n'est licite que si la couture se voit — réunir deux instants dans une fenêtre unique n'est pas un recadrage, c'est un instant qui ment.** C102 admet le montage « à condition d'être lisible comme tel (coutures visibles, panneaux distincts) et déclaré dans l'alt » ; #40 en montre la borne par l'autre bout. La capture réunit un sélecteur réglé sur *Generic ESP8266 Module* et un bloc console **produit sous la définition précédente** — seul le sélecteur a été changé avant la reprise. Rien n'est retouché, chaque pixel a existé, mais **une fenêtre d'IDE se lit comme un instant unique** et n'offre aucune couture. Le critère opératoire n'est donc pas « les états sont-ils réels ? » mais **« un lecteur peut-il voir qu'il y en a plusieurs ? »**. **Détection : aucune.** Le défaut n'est apparu que parce que la version précédente avait été lue et que le bloc console était identique **à l'octet** (`265616 bytes`, `17.9 seconds`, `118.9 kbit/s`) — deux exécutions ne tombent pas sur les mêmes chiffres. **Règle** : un panneau repris d'un autre moment se rejoue quand le rejeu coûte moins d'une minute. Écart **accepté par Tim** et tracé au manifeste, comme #55. Éprouvée 1/N.

108. **Annoter une image, c'est affirmer ce qu'elle contient — donc on n'annote pas ce qu'on n'a pas.** #49 demandait une couveuse réelle étiquetée de ses quatre organes ; Tim n'en possède aucune de cette architecture, et la question « faut-il en chercher une en ligne ? » reçoit la réponse la plus nette du lot. Sur une machine trouvée, **personne ne peut savoir** si le boîtier près du bornier est un relais statique ou un transformateur, ni si la platine unique est un contrôleur ou un thermostat câblé : les libellés deviendraient des **suppositions présentées comme des faits**, indétectables à la relecture — version aggravée de l'alt inventé sur un fichier illisible. La licence n'est que le second obstacle. **Corollaire de tri** : avant de chercher un substitut, mesurer ce que la fiche perd — `schema-bloc-fonctionnel` porte déjà `generique.svg` pour les conventions, `couveuse.svg` pour l'exemple et quatre observations d'explication, donc **C68 satisfaite deux fois**. #49 était un bonus, né d'un commentaire HTML exhumé au balayage du 19/08 et non d'un manque identifié en rédaction. **Supprimée**, numéro non réutilisé. Éprouvée 1/N. **La numérotation éprouvage atteint 108.**

Notes 21/08 (suite) :

- **Un désaccord factuel peut n'avoir tort ni d'un côté ni de l'autre.** Tim affirmait que `attach(pin, 500, 2500)` débloque un balayage limité à 90° ; j'ai répondu que l'arithmétique l'interdisait, la plage par défaut d'Arduino AVR étant déjà de **544 à 2400 µs** — +8 % ne double pas une course. **Les deux étaient justes.** `ESP32Servo` a d'autres défauts, **1000 à 2000 µs** : y élargir à 500-2500 double **exactement** la plage, et un SG90 piloté sur 1000-2000 parcourt ~95°, soit le GIF au degré près. J'avais le bon chiffre sur la mauvaise bibliothèque. **Règle** : quand un écart factuel résiste à une vérification qui donne raison aux deux parties, chercher **ce qui diffère dans le contexte** avant de conclure que l'un se trompe. Sous-produit : un bloc neuf dans `arduino-bibliotheques`, et un contrôle de fratrie à passer sur `arduino-servomoteur` et les renvois servo côté ESP32.
- **Le premier point tracé n'est pas le premier instant.** #37 devait montrer un départ de zéro ; à une ligne imprimée sur dix, le **premier point vaut déjà 96** — la montée 0 → 100 tient dans un intervalle de décimation. J'ai d'abord diagnostiqué un défilement et recommandé d'élargir la fenêtre, ce qui **aggravait** le défaut (premier point à 108). Les deux exigences sont incompatibles dans une fenêtre de 48 points : le zéro n'apparaît qu'à cadence pleine, où la fenêtre tombe à une seconde et la convergence disparaît. **Une spécification d'image se vérifie contre la chaîne d'échantillonnage, pas seulement contre l'outil** — prolonge la note du 21/08 sur #38.
- **Un dimensionnement de démonstration est contraint par les constantes de la fiche.** Le gain du procédé simulé de #37 n'était pas libre : l'anti-emballement bornant l'intégrale à 200, le terme I ne peut porter seul qu'une commande de `Ki × 200`. Un moteur réaliste (0,8 tr/min par unité de PWM) fige la boucle à **127,7** au lieu de 150, intégrale collée au plafond, et l'alt promettant une convergence aurait été faux. Le gain retenu (1,5) laisse l'intégrale à 166,7, soit 83 % du plafond. **Effet de bord** : la borne d'anti-emballement plafonne le régime établi, ce que la fiche ne disait pas — piège écrit.
- **Sur un GIF, le poids l'emporte sur la définition.** Les 1200-1600 px de C74/C100 valent pour une image fixe ; multipliés par 80 trames ils donnent un fichier ingérable. Borne posée. #47 est un **média d'archive** (vidéo d'étudiant de Tim), accepté à **4,61 Mo sans réencodage** (arbitrage Tim) — sous la barre C87, mais quatre fois le dossier `esp32-prise-en-main` entier. Rien n'exige qu'un média soit contemporain de sa fiche ; **c'est l'alt qui se plie à l'archive**, jamais l'inverse (« 0° à 180° » recalé en « environ 90° », quatrième occurrence après #1, #9 et #42).
- **Deux références `fiche:ligne` périmées sur trois vérifiées.** `esp8266-prise-en-main` **77 → 93** (seize lignes, réécriture du 20/08) et `arduino-bibliotheques` **130 → 136** (six lignes, ajout de #60) ; `esp32-ble:99` et `schema-bloc-fonctionnel:67` étaient exacts. Le décalage ne touche que les fiches **réécrites** — le balayage de recalage n'a donc pas à courir sur tout le corpus, seulement sur celles-là.
- **Un média trop lourd pour être ouvert déplace la charge de preuve.** Au-delà de ~350 ko, Claude mesure le poids et les dimensions mais ne voit **aucune trame** : la conformité de #47 à son alt — modèle du servo, amplitude, absence de main dans le champ — a été établie par **trois questions posées à l'auteur**, pas par lecture. À annoncer avant la prise, pas après le dépôt.

### Acquises 22/08 — rédaction `easyeda`

109. **Une phrase, une idée — le tiret d'incise et le point-virgule de milieu de phrase sont proscrits en prose de fiche.** Règle demandée par Tim le 22/08 après lecture de `easyeda`, et testée sur la section 45° avant déploiement sur les 21 sections. Le motif n'est pas typographique mais **stylométrique** : l'incise entre tirets est un marqueur d'écriture machine, et sa suppression donne un texte « plus fluide » et « moins rédigé par une machine » (mots de Tim). **Ce que la règle produit dépasse la ponctuation** : le tiret servait presque toujours à empiler deux pensées dans une phrase, et le supprimer **force à décider laquelle porte l'idée principale**. Trois cas types relevés sur `easyeda` :
    - une règle et ses valeurs se disputaient une phrase (« la routine impose ses propres diamètres — 1 mm pour les pastilles, 3 mm pour les trous — quoi que contienne votre fichier ») → deux phrases, la règle d'abord ;
    - la vraie leçon était accrochée en queue d'incise (« … et vous ne ferez le lien avec ce clic que bien plus tard ») → phrase autonome ;
    - une borne de sécurité passait pour une précaution mineure (« … sans jamais descendre sous 0,5 mm ») → impératif (« Ne descendez jamais sous 0,5 mm »).

    **Périmètre exact de l'interdiction** : uniquement **à l'intérieur d'une phrase**. Restent licites le deux-points d'annonce (avant une liste, une capture, une énumération), le point-virgule **séparateur d'items de liste**, et le tiret **glose** des listes `Voir aussi`. Les alt d'images ne sont pas concernés : ils décrivent et ne se lisent pas en continu.

    **Corollaires de registre, validés le même jour.** Le « vivant » se fabrique **sans première personne** (arbitrage Tim : la fiche reste à la voix du wiki, elle sera lue par des étudiants qui ne sont pas en cours avec l'auteur). Les leviers retenus sont l'apostrophe au lecteur (« Ne prenez pas ça pour un cadeau »), la question rhétorique (« Alors pourquoi vous demander le 45° quand même ? »), l'aveu (« Autant être honnête tout de suite »), l'exemple parlé (« du genre : regarde en B3 »), et le récit préféré au résumé (« Autrefois, on gravait les cartes à l'acide » plutôt qu'une relative compressée). Les **puces deviennent des phrases complètes**, majuscule en tête et point final. Le **gras s'allège à un passage par idée** : trois gras dans un paragraphe court n'appuient plus rien.

    **Coût mesuré** : `easyeda` passe de 62 046 à 62 049 o sur une trentaine de retouches. Le texte n'est pas délayé, il est redécoupé. Source de style : `Tuto_PCB.docx` de Tim. **Éprouvée 1/N sur une fiche entière** ; redéploiement possible sur d'autres fiches, non lancé. **La numérotation éprouvage atteint 109.**

Notes 22/08 :

- **Une conversion de format casse silencieusement les embeds.** `verifier-changer-mode-offline.png` est devenu `.jpg` entre deux tours ; l'embed pointait dans le vide et l'image de l'auto-test du mode — celle qui porte le premier piège de la fiche — ne se serait pas affichée en production. Rattrapé par un listage du dossier avant rédaction, pas par le rendu. **Contrôle de fin de fiche** : recompter les embeds contre les fichiers présents (53 contre 53 sur `easyeda`, chacun utilisé une fois).
- **Un fichier peut arriver sans nom.** Une capture a été déposée sous le nom `.png`, extension seule. Trois autres portaient un `è`, un `ç`, une double extension ou une faute (`rdc` pour `drc`). Les accents dans un nom de fichier finissent en URL encodée côté Quartz. **Balayage de nommage à passer après chaque grosse séance de dépôt.**
- **Le plafond de lecture d'image se contourne par l'upload.** Au-delà de ~350 ko, MCP ne rend pas l'image ; la **passer en pièce jointe dans la conversation** fonctionne à 421 ko là où le canal fichier échouait. C'est le canal qui plafonne, pas le fichier, et un fichier trop lourd pour moi peut rester parfaitement bon pour le wiki.
- **Une consigne peut être supprimée par une information, puis restaurée par la suivante.** La routine d'usinage écrase les diamètres de perçage, d'où ma conclusion « le champ ne sert à rien ». Faux : la valeur ne pilote pas la machine mais **pilote ce que le logiciel montre et vérifie**, et un trou dessiné trop petit cache une collision que le foret réalisera. *Règle générale dégagée et écrite dans la fiche : le dessin doit dire la vérité sur la géométrie, même quand quelqu'un d'autre tient la fraise.* **Déduire une conséquence d'une information partielle est le mode d'erreur de la session.**
- **Le filtre C29 ne doit précéder la prise de vue que pour les médias qui coûtent une prise.** Une capture à reshooter se tranche avant la séance, sinon on fait shooter pour rien. Une **photo déjà en main** ne coûte rien à garder un tour de plus : son coût n'est pas la production mais **la place sur la page**, et cette place ne se juge qu'au rendu. Deux populations, deux moments. Refus argumenté par Tim, retenu.
- **Un lot hérité peut être périmé dans sa langue.** Les captures de 2026 en 6.5.23 affichaient `User Contributed`, `System`, `Types: Symbol` ; la 6.5.51 dit **`Contributions des utilisateurs`**, `Système`, `Assemblé par JLCPCB`, et le dossier `Offline Project` est devenu `Projet Hors Ligne`. Les comptes ont bougé aussi (49+45+7 contre 30+23+7). **Une capture de menu se revérifie ; une capture de canevas se réemploie.**
- **Un site peut recommander la mauvaise version.** La page de téléchargement d'EasyEDA étiquette `Recommended` l'édition **Pro**, alors que tout le TP est écrit pour la **Std**. Un étudiant qui suit la recommandation affichée n'aura plus rien qui corresponde à son écran. Trouvé en lisant la capture de Tim, pas en rédigeant. **Avertissement écrit.**

### Acquises 22/08 (suite) — clôture pré-publication et ouverture du chantier anglais

**Amendements à C109, validés par Tim.** La numérotation **reste à 109**, la convention se précise sur trois points.

- **Le tiret se résout de deux façons, pas d'une.** C109 ne prévoyait que le découpage en deux phrases. Il en existe une seconde voie : **une phrase longue à virgules et mots de liaison**, qui évite le hachis de phrases courtes quand les deux idées sont réellement subordonnées l'une à l'autre. Le choix entre les deux voies *est* la décision que la règle force à prendre.
- **Les puces sortent du périmètre.** Le corollaire « les puces deviennent des phrases complètes » est **abrogé**, motif de Tim : *la liste est justement le lieu où l'on peut énumérer de façon mécanique ; c'est la prose continue qui doit être naturelle*. Mesuré : 883 puces non conformes sur 2 058, réparties sur 150 fiches — le corollaire doublait le chantier pour un gain contesté. **C109 se borne à la ponctuation de prose.**
- **C109 s'applique aussi à l'anglais, pour un motif distinct.** J'avais écrit l'inverse. En français le tiret d'incise est proscrit comme marqueur d'écriture machine ; en anglais la **construction** est native de la prose éditée, mais le **caractère em-dash tapé** est rare dans l'écrit courant (observation de Tim sur les forums anglophones) et est devenu un marqueur reconnaissable de texte généré. Même interdit, deux motifs.

**Périmètre mesuré du reddéploiement** : **3 085 occurrences de prose** (2 287 tirets, 798 points-virgules) sur **236 fiches des 243**. Les **1 314 gloses de `Voir aussi`** restent licites et se séparent mécaniquement. Contrôle de l'instrument : `easyeda`, seule fiche passée en C109, rend **1** occurrence quand ses voisines de calibre comparable en rendent 40 à 60.

**C65 ne survit pas à la traduction, et c'est accepté.** L'opposition « on » des trames du V / « tu » des fiches de réalisation n'a pas d'équivalent en anglais, qui n'a qu'un « you ». Le contraste disparaît, la traduction s'en trouve simplifiée. Compensation minimale et sans effort : tournures impersonnelles côté V, impératif direct côté réalisation.

Notes 22/08 (suite) :

- **Un chiffre reporté se recompte, cinquième occurrence du mois.** « 3 placeholders C29 résiduels » en valait **29**, le « 3 » datant du 19/08 et ayant traversé trois prompts sans être revu. La décomposition tombe juste (3 + 13 + 13), ce qui rend l'erreur invisible à tout contrôle portant sur le total.
- **Une clé de dictionnaire mal choisie fausse un total sans lever d'erreur.** Ma mesure C109 était clée par nom de fichier : les **huit `index.md`** du dépôt se sont écrasés, 3 045 au lieu de 3 085. **Détecté par une incohérence de rendu**, pas par relecture du code — l'agrégation attribuait 30 puces à une page qui n'en porte aucune. *Toute agrégation sur ce dépôt se clée par chemin, jamais par slug.*
- **Un alias qui ne résout aucun lien n'est pas neutre.** 18 des 25 alias du dépôt ne sont jamais employés comme cible de wikilink, et `filtrage` était **l'alias de son propre slug** — `AliasRedirects()` émettait une redirection de la page vers elle-même. Contrôle complémentaire : **zéro cible non résolue** sur 4 322 liens, donc **aucun alias ne manque** pour la fonction qu'un alias remplit réellement.
- **Un mot technique français peut rendre un balayage inexploitable.** Le balayage C71 sur « gratuit / libre / licence » rend 140 occurrences dont l'écrasante majorité est du bruit : **roue libre, broche libre, RAM libre, timer libre, boucle libre**. Après tri, **25 mentions réelles sur 14 fiches**. *Un balayage lexical se calibre sur les homonymes techniques du domaine avant d'être lancé.*
- **Le dépôt n'a pas de `grep` de contenu, et il en existe un détouré.** `filesystem:read_multiple_files` déborde le contexte et **dépose son résultat sur le disque du bac à sable**, où il devient analysable. Les 243 fiches ont été lues en 10 appels MCP puis mesurées hors ligne. **La borne du §6 tient** : aucun fichier du dépôt n'est touché autrement que par `filesystem:*`, `bash_tool` ne voit que des copies de sortie d'outil.
- **Dans Quartz, toutes les dépublications ne se valent pas.** `templates/` avait été sorti par `ignorePatterns` ; appliquer le même mécanisme à `ressources/` aurait exclu du scan **tous les médias du wiki** et cassé 296 embeds. `RemoveDrafts()` étant actif dans les filtres, **`draft: true` sur le seul `index.md`** fait le travail sans toucher aux assets. **Vérifié au build du 22/08 : `/ressources/` a disparu du graphe et de la recherche, et `FolderPage()` ne réémet pas de page de dossier auto-générée** — la réserve traçée le jour même est levée. *Le mécanisme de dépublication se choisit selon ce que le dossier contient, pas selon le précédent.*
- **Les images de ce wiki ne sont pas des images.** Les 236 SVG sont des fichiers texte portant un `<title>`, un `<desc>` d'accessibilité de 60 à 150 mots et 10 à 40 éléments `<text>`, tous en français. Conséquence pour tout chantier de langue : « ne pas toucher aux images » ne veut pas dire « pas de texte à traiter », ça veut dire **décider si ce texte-là reste en français**.
- **Une contrainte pédagogique peut simplifier l'architecture technique.** Laisser les schémas en français supprime la duplication des médias, donc la nécessité de deux arborescences, donc les branches git. **La décision éditoriale a tranché la question technique**, dans cet ordre et pas l'inverse.
- **Le glossaire d'une traduction n'est pas un dictionnaire.** Le gisement réel est celui des **chaînes structurelles répétées** — 234 « Voir aussi », 164 « À quoi ça sert ? », 162 « Pièges », 107 « Raccrochage projet », 60 « Corrigé », 54 « Exemple : projet bras 3 axes ». Une dérive s'y voit immédiatement. Troisième registre, contre-intuitif : **la liste des termes à ne pas traduire** (`bête à cornes`, `pieuvre`, `GRAFCET`, `CdCF`), que l'étudiant Erasmus entendra dans la bouche de ses coéquipiers — les angliciser l'isolerait de son équipe. Même logique que le « stepper » du §1, prise dans l'autre sens.
- **Le remède à la dérive de traduction n'est pas la synchronisation, c'est la détection.** Chaque fiche EN portera en front matter le hash du commit de sa source FR ; un script liste celles dont la source a bougé. La dérive devient une liste mesurable au lieu d'un risque invisible. ⚠ **Corrigé le 22/08 (suite 2) : ce sera un `source_sha256` de contenu, pas un hash de commit.** La fiche EN se crée après la passe C109, donc sur un fichier FR non committé : `git log -1` y rend le commit d'*avant* la passe, et tout le lot serait signalé dérivé au premier push. Une empreinte de contenu est indifférente au rythme de commit.

### Acquises 23/08 — lot 2a, passes C109 et premières traductions

*Aucune convention numérotée. La numérotation reste à **C110**.*

- **Une sortie d'outil dit ce qu'il a fait, pas ce que le fichier contient après coup.** J'ai demandé à Tim de lancer `draft-en.ps1` « pendant que je traduis », créant une **condition de course** que rien ne signale : le script est passé entre deux `write_file`, sa sortie a annoncé trois bascules et **deux n'ont pas tenu**, mes écritures suivantes ayant réécrit les fichiers. Le défaut n'est apparu qu'en **relisant les fiches**, jamais en relisant le rapport. *Règle opératoire : aucune écriture pendant qu'un script tourne sur les mêmes fichiers, et le contrôle se fait sur le fichier.*
- **Un outil qu'on vient d'écrire peut annuler l'argument qu'on continue de porter.** J'ai présenté deux fois la mesure C105 de référence comme **non rattrapable**, la fenêtre se refermant dès qu'une fiche EN repasse en `draft: false`. Vrai la veille, faux depuis `draft-en.ps1`, qui rend la bascule réversible dans les deux sens. **L'instrument invalidait l'urgence invoquée pour le justifier**, et c'est Tim qui a dû rouvrir le dossier. Variante du motif du chiffre hérité : ici ce n'est pas un chiffre qui n'a pas été remesuré, c'est **une contrainte qui n'a pas été revérifiée après avoir changé le monde**.
- **Un compteur égal ne prouve pas qu'un lien pointe au bon endroit.** Un wikilink dont le **libellé contient du code inline** échappe au suffixage `-en` du script : le backtick casse le parsing. `micropython-langage` portait cinq items suffixés et un sixième nu **dans la même liste**. **29 occurrences sur 22 fiches**, presque toutes dans le lot 2c. Les trois compteurs restent égaux, le lien est bien formé, la cible existe : **aucun contrôle mécanique du dispositif ne pouvait l'attraper**, seule la lecture de la fiche l'a vu.
- **Un mot français qui désigne deux objets se traduit par deux mots.** « Contrôleur » est le **maître du bus** dans `i2c` et `spi`, et le **microcontrôleur** dans `wifi` et `lora`. Le rendre uniformément par *controller* aurait donné, dans une même branche, « le contrôleur redémarre » là où le lecteur comprend « le maître du bus redémarre ». *Le glossaire se construit sur les emplois du corpus, pas sur les entrées d'un dictionnaire.*
- **Une passe de ponctuation trouve des défauts qui n'en sont pas.** Les 26 passes C109 ont rendu **0 occurrence de prose résiduelle** pour **+39 mots** seulement, mais deux corrections de fond en sont sorties : `relation-client` écrivait « annoncer un écart plutôt que de le découvrir au client », sujet inversé, et `ese/index` employait « pattern » en prose française hors des anglicismes admis du §1. **Le tiret masquait la première**, en empilant deux propositions dont l'une n'avait pas de sujet propre.

### C110 — Une mesure de volume se publie avec sa règle de comptage

*Acquise le 22/08 (suite 2), demande Tim. À confirmer avant documentation formelle.*

**Tout chiffre de volume publié dans un prompt, un JOURNAL ou une clause de
TODO porte, dans la même phrase ou la ligne suivante, la règle qui l'a
produit.** Sans elle, un chiffre n'est pas vérifiable, seulement répétable.

**Règle de comptage des mots du dépôt, figée** : mots hors front matter,
hors blocs de code cloturés, **code inline inclus**, un mot étant une suite
de caractères alphanumériques, apostrophes et traits d'union.

*Motif.* Le dépôt a produit **six chiffres faux hérités en un mois**, et le
22/08 (suite 2) en a ajouté deux d'un coup : le point-virgule de C109 mesuré
à 1 168 contre 798 annoncés, et l'ordre des cinq trames trié décroissant puis
réétiqueté dans l'ordre du V. Surtout, **mes deux comptages des mêmes cinq
trames ont divergé de 40 mots dans la même session** — le premier excluait le
code inline, le second non. Aucun des deux n'était faux, et c'est exactement
le problème : *deux chiffres justes sous deux règles différentes se lisent
comme un chiffre juste et un chiffre faux.* Le motif ne s'éteint pas en
mesurant mieux, seulement en publiant la règle avec le chiffre.

*Corollaire.* Un chiffre hérité **sans sa règle** n'est pas à reprendre sur
parole ni à recopier : il se remesure, et la règle s'écrit à ce moment-là.
Un ordre de grandeur peut se citer sans règle à condition d'être annoncé
comme tel.

*Portée.* Mots, octets, occurrences, fiches, liens, embeds. Le comptage en
octets n'a pas besoin de règle — c'est précisément pourquoi il a tranché
l'ordre des trames là où les mots ne pouvaient pas.

### C111 — Un sélecteur de langue est du chrome, pas du maillage

*Acquise le 23/08 (suite), arbitrage Tim (a). La numérotation atteint **C111**.*

**Tout lien dont la fonction est de changer de langue s'écrit en lien markdown
absolu, jamais en wikilink.** Trois motifs, dont un seul était prévu :

- **Le graphe ne doit pas relier les deux corpus.** Une arête wikilink entre
  les deux racines rendrait le graphe local de l'accueil bilingue pour tout le
  monde, l'inverse de l'arbitrage du 22/08.
- **`content/index.md` n'a aucune forme wikilink non ambiguë.** Son chemin
  complet *est* `index`, c'est-à-dire la forme courte que le §1 des règles de
  traduction interdit, huit `index.md` coexistant sous
  `markdownLinkResolution: "shortest"`. **Seul fichier du dépôt où chemin
  complet et forme courte se confondent**, donc seul fichier que le suffixage
  `-en` n'a pas pu protéger.
- **Neutralité par construction.** Les trois compteurs FR/EN ne comptant que
  les wikilinks, un sélecteur en markdown ne peut pas faire diverger une paire,
  quel que soit le nombre de sélecteurs posés. C'est la seule catégorie de lien
  qui ait cette propriété.

*Portée.* **Les deux pages d'accueil, et elles seules**, tant que le corpus EN
est partiel. Un sélecteur par fiche produirait **212 liens FR vers des fiches
EN inexistantes** (30 traduites sur 242), invisibles à `audit-wikilinks.mjs`
qui ne lit que les wikilinks : des 404 que **rien ne mesure**, sur un corpus
tenu à 0 lien mort à la dernière mesure du 20/08. L'asymétrie est en outre
totale, le sens EN → FR étant toujours valide et le sens FR → EN presque
jamais.

*Réouverture.* Quand les 242 existeront, la question se repose **au niveau du
layout Quartz** et pas du contenu : un composant déduit la jumelle du chemin et
se masque quand elle n'existe pas, ce qui supprime les 404 au lieu de les
gérer. Voir BACKLOG.

### Acquises 23/08 (suite) — fin du lot 2a, encart d'accueil

- **Les compteurs valident la structure, jamais la désignation.** `en/meca/index`
  libellait `[[soudure-en|Welding]]` alors que la fiche cible s'intitule
  *Soldering* et traite la soudure à l'étain : le lien pointait juste et
  affichait faux. **Même angle mort que le backtick de la veille, sur l'autre
  axe** — le slug échappait au suffixage, ici c'est le libellé qui échappe au
  sens, et dans les deux cas les trois compteurs restent verts.
- **Un mot dont la traduction anglaise désigne autre chose ne se traduit pas.**
  `écodesign` promu au §5.2 : l'anglais *ecodesign* rend ce que le wiki appelle
  **écoconception**, si bien que traduire le mot **inverserait le sens de la
  fiche qui enseigne précisément ce faux ami**.
- **Le français laisse des traces typographiques dans la prose EN.** Une espace
  avant point-virgule subsistait dans `en/index`, issue du lot 1, là où le §5.3
  la proscrit explicitement. Candidat de balayage avant la fin du chantier.

### C112 — Le mot se choisit à l'oreille de quelqu'un qui parle, pas de quelqu'un qui rédige un rapport

*Acquise le 23/08 (suite 2), demande Tim, sur `preuve-de-concept`. La numérotation atteint **C112**.*

**Un mot que personne ne dirait à voix haute n'a pas sa place dans la prose
d'une fiche, même quand il est exact.** Le test opératoire est unique et se
pose mot par mot : *est-ce qu'on trouverait cette phrase sur un forum
technique — Reddit, Futura, OpenClassrooms — ou seulement dans un rapport ?*
Si la seconde réponse est la bonne, le mot tombe.

**Corollaire, et c'est lui qui rend la règle utilisable : le verbe survit,
l'adjectif tombe.** « Défendre une décision en revue » décrit un geste réel,
avec quelqu'un en face, et c'est du français parlé. « Une décision défendable »
colle une **étiquette de qualité** sur un objet, ce que personne ne fait à
l'oral. Le défaut n'est donc pas dans le radical mais dans la **nominalisation
de la qualité**, ce qui explique qu'un balayage par racine rende des faux
positifs : sur `preuve-de-concept`, 7 occurrences de `défend*` dont **3 formes
verbales à garder** et 4 adjectifs à retirer.

**Borne — la règle ne dit pas « simplifier tout ».** Un mot technique précis
reste, même long : *caractériser*, *répétabilité*, *vérifiable*, *étalonné*
passent le test parce qu'un ingénieur les emploie en parlant. Ce qui tombe,
c'est le **doublet savant d'un mot courant** : « opposable » pour « qui tient »,
« défendable » pour « qu'on peut assumer ». Un synonyme unique ne suffit pas
non plus : les 9 « opposable » de la fiche portaient **quatre sens distincts**
(tient à la contestation / engage celui qui décide / ne peut plus être réécrit /
se remonte jusqu'à la source) et ont reçu neuf formulations différentes.

**La règle vaut pour les deux langues**, comme C109 et pour le même motif :
*defensible* côté anglais s'est retrouvé **14 fois** dans la traduction parce
que j'avais mappé un mot lourd sur un mot lourd. Une fois la source variée,
l'anglais retombe seul sur *holds up*, *stand behind*, *verifiable*,
*makes the proof stick*, *checkable by someone else*.

**Filiation avec C109.** Même mécanique : une contrainte de forme qui force
une décision de fond. C109 retire la ponctuation de machine et oblige à
choisir quelle idée porte la phrase ; C112 retire le vocabulaire de rapport
et oblige à dire **lequel des sens** on voulait. Les deux passes se mènent
ensemble sur une même fiche, la seconde ne coûtant presque rien une fois la
première faite.

*Périmètre mesuré, partiel.* Sur les cinq trames du V : **20 `opposab*` et
16 `défend*`**, dont 13 retirés sur `preuve-de-concept`. `specification-technique`
en porte 7 + 1. Les 237 autres fiches ne sont pas mesurées. **Éprouvée 1/N.**

**Borne majeure, trouvée par la mesure et non par la relecture : un mot de
registre soutenu qui est l'objet même de l'enseignement d'une fiche ne tombe
pas.** Il se glose à sa première occurrence, comme un terme du §5.2 des règles
de traduction. Le test devient alors **« l'étudiant le rencontrera-t-il
ailleurs, et cette fiche est-elle l'endroit où il l'apprend ? »**. Sur
`preuve-de-concept`, « opposable » *décorait* une idée que le français courant
dit mieux. Sur `cahier-des-charges-fonctionnel`, il **est** l'idée : la fiche
porte une puce intitulée « Document opposable » suivie de « cette opposabilité
est exactement ce qui distingue un CdCF d'une simple note d'intention », et
`concept` emploie **« Opposabilité CdCF » comme en-tête de colonne** d'un
tableau d'arbitrage. Le test C71 tranche seul : *que reste-t-il quand je
l'enlève ?* Là, rien. Même motif que le « stepper » du §1, pris une troisième
fois : **on expose le vocabulaire du métier au lieu de le lisser.**

*Périmètre mesuré sur tout le dépôt (23/08 suite 2).* Motif
`opposab|défendabl|défendue?s?`, hors `en/` et hors `templates/` : **48
occurrences sur 17 fiches**, dont **16 dans `conduite/proj/`** — le reste du
wiki n'en porte **qu'une seule**, dans `choisir-le-materiel`. Ce n'est donc pas
un chantier de corpus, c'est un chantier de branche. Quatre populations :

| Population | Traitement | Occurrences | Fiches |
|---|---|---:|---:|
| **Objet enseigné** (CdCF, caractériser une exigence, spécification technique, critère « Opposabilité CdCF ») | reste, glosé une fois par fiche | 16 | 4 |
| **Décoratif** (« livrable opposable », « choix défendables », « trace écrite défendable ») | tombe | 22 | 12 |
| **Transitif concret** (« rendre le total opposable à l'enveloppe ») | reste ou devient « comparable à » | 5 | 3 |
| **Formes verbales** | restent | 5 | 3 |

*Le motif ne capte pas l'infinitif `défendre`, ce qui sous-estime les verbes
sans conséquence puisqu'ils restent.* Les 13 emplacements de
`preuve-de-concept` sont déjà traités et sortis de ce décompte. Les **22
décoratifs sur 12 fiches** sont inscrits au TODO comme lot unique.

### Amendement à C109 (23/08 suite 3) — dans une énumération en ligne, c'est le verbe conjugué qui décide, pas le signe

*Arbitrage Tim, option (a) : amendement à C109 et non convention nouvelle. La
numérotation reste à **C112**.*

L'exemption des listes, écrite le 22/08 (suite), ne suffit plus dès qu'une fiche
empile des énumérations **à l'intérieur de sa prose**. Critère opératoire :
**un segment à verbe conjugué est de la prose et tombe ; un segment nominal ou
à l'infinitif est un item de liste et reste.**

**Le critère tranche indépendamment du marqueur typographique, et il tranche
même quand le marqueur plaide contre lui.** Sur `integration-et-tests`, les
trois principes de la pyramide de tests portaient un `1/ 2/ 3/` et trois verbes
conjugués : ils tombent, rendus en trois phrases numérotées. Trois autres
énumérations numérotées de la même fiche restent, parce qu'elles sont
nominales ou à l'infinitif. Sur `concept`, le FAST garde ses trois
points-virgules (infinitifs) quand les trois arbitrages disciplinaires trois
lignes plus bas deviennent trois phrases (verbes conjugués) — **deux
traitements opposés à trois lignes d'écart, sans arbitrage humain.**

**Éprouvée 3/N** : 146 occurrences sur `concept`, `dossier-technique` et
`integration-et-tests`, **119 traitées, 27 exclues, zéro arbitrage remonté**.
Répartition : 58 / 50 / 8, puis 34 / 27 / 7, puis 54 / 42 / 12.

*Portée.* Vaut pour les 236 fiches du redéploiement C109, et c'est la raison
d'être du critère : sans lui, soit on hache une énumération nominale en phrases
illisibles, soit on laisse passer les points-virgules de prose qui sont la
cible de C109.

⚠ *Limite d'outil, pas de règle.* Le motif qui détecte la glose de liste rate
les puces dont le libellé de tête contient du gras **non initial**. Le mode
d'échec est symétrique : faux positif signalé sur `integration-et-tests` (un
tiret licite remonté à tort), faux négatif possible ailleurs (un tiret illicite
masqué). Ne se voit qu'en relisant la puce.

### Précisions à C109 acquises le 25/08 (lot des sept hubs de famille)

*Aucune convention neuve. La numérotation reste à **C114**. C109 reçoit deux précisions et une borne, toutes trois éprouvées sur les sept hubs.*

**L'incise encadrée par deux tirets n'a pas besoin d'exception : le critère existant la tranche.** La question s'est posée sur trois cas et la règle du second tamis les a séparés sans arbitrage humain. Sur `raspberry-pi`, `un système d'exploitation complet — Linux — là où…` **tombe** et devient une parenthèse, parce que le segment **nomme** un seul objet ; `appliquer 5 V sur une broche d'entrée — un capteur alimenté en 5 V, un signal venu d'un Arduino — peut détruire…` **reste**, parce qu'il énumère deux exemples. Sur `teensy`, `les générations antérieures — Teensy LC, 3.2, 3.5 et 3.6 — sont arrêtées…` reste pour la même raison. *La forme encadrante n'est pas le critère, le contenu du segment l'est.* Noté parce que la règle a été appliquée trois fois avant d'être formulée, ce qui la rendait invisible à une session future.

**Les parenthèses sont la troisième voie de résolution, et elles se spécialisent sur le renvoi.** Repérées le 24/08 sans être écrites, elles ont servi **huit fois** sur le lot, et presque toujours au même endroit : un renvoi de fin de segment, `— voir [[x]]`, que ni le découpage en phrases ni la virgule ne rendent bien. Sur `teensy`, quatre puces de la section Écosystème se règlent ainsi. Les deux autres voies restent celles du 22/08 : découpage en phrases, ou phrase longue à virgules et mots de liaison.

**Borne — la forme `Libellé — apposition nominale` est une glose, pas une incise** (arbitrages Tim (c) puis (a) du 25/08). Le premier arbitrage a étendu le critère du verbe conjugué aux **légendes de figure** de C74, qui n'étaient ni dans le périmètre ni dans les exemptions ; le second a étendu la même lecture aux **chapôs de section** de même forme. Restent donc : `*Carte Arduino Uno R3 — la carte de référence du panorama.*`, `La **porte du métier** — l'apport distinctif du STM32…`, `La **signature du Teensy** — le son et le DSP temps réel…`. Tombe en revanche `*Situer les variantes… ; le tableau ci-dessus en donne le détail.*` d'`esp32`, dont le second segment porte un verbe conjugué — **deux légendes, deux traitements opposés**, ce qui éprouve que le critère est opératoire et non un laissez-passer. ⚠ La lecture stricte du second tamis (« un segment nominal qui commente tombe ») donnerait l'inverse sur ces trois emplacements : c'est **délibérément** que la forme libellé-glose l'emporte, au motif qu'elle est celle du tiret de glose de `Voir aussi`, licite au §4 des règles de traduction, et non celle d'une incise de prose.

**⚠ Le périmètre des légendes C74 n'est toujours pas mesuré.** L'arbitrage vaut pour le corpus entier, et personne ne sait combien de légendes il couvre. À compter avant que le lot n'en rencontre en série.

### Acquises 24/08 (suite) — deux sous-lots du 2c, treize fiches

*Une convention neuve. La numérotation atteint **C114**.*

### C114 — Les commandes d'une série se posent dans un script jetable, pas dans un message à recopier

*Acquise le 24/08 (suite), demande Tim, arbitrage (b) sur l'emplacement. La numérotation atteint **C114**.*

**Toute série de plus de deux commandes s'écrit dans `tools/seance.ps1`, réécrit à chaque
série et non versionné.** Ce n'est pas un outil, c'est la recette du moment rendue
exécutable au lieu d'être recopiée.

*Motif principal, qui n'est pas celui invoqué à la demande.* Le gain de temps est
réel, mais l'effet qui compte est ailleurs : **un script qui déclare ses propres
variables ne peut pas hériter d'un état de fenêtre**. La classe d'échec des `$p` et
`$q` perdus entre deux messages, qui avait produit un `--style` sur tout le corpus
et deux `--lot` vides le 24/08, disparaît par construction.

*Forme imposée, chaque élément payant une leçon antérieure.*

- **Une bannière avant chaque commande, portant le nom des fichiers visés**, et le
  code de sortie après. Sans elle, une zone de silence dans un flux agrégé ressemble
  à un résultat à zéro : *une sortie sans périmètre n'est pas une sortie à zéro*.
- **Le script ne s'arrête pas au premier échec.** Les sorties suivantes valent mieux
  que la première seule.
- **La sortie s'écrit dans `tools/seance-sortie.txt` en UTF-8 explicite**, que Claude
  lit directement. Plus aucun copier-coller de sortie d'outil. ⚠ `Out-File` sans
  `-Encoding utf8` écrit en UTF-16 sous PowerShell 5.1, et `node` écrivant en UTF-8,
  la console doit être forcée (`[Console]::OutputEncoding`) faute de quoi les accents
  des extraits français arrivent mutilés — **le défaut serait alors dans le transport
  et non dans le dépôt**, motif du masquage par espaces du 23/08 (suite 4).
- **ASCII strict dans le fichier.** PowerShell 5.1 lit un `.ps1` sans BOM en encodage
  ANSI. Tout caractère non-ASCII se construit par son point de code.
- **Les prédictions s'écrivent en fin de script**, pour que la sortie porte elle-même
  ce qu'on attendait d'elle.

*Deux défauts à la première exécution, tous deux instructifs.* **Le flux d'erreur des
programmes natifs était avalé** : un `ErrorRecord` rend
`System.Management.Automation.RemoteException` à l'affichage, et le message d'« erreur
de la cible existe déjà » a failli être perdu. *Un script fait pour lire des sorties
d'outil ne peut pas avaler les messages d'erreur de ces outils.* Et **la contrainte
ASCII a été violée par son auteur** trois séries plus tard, avec pour conséquence un
banc de réinjection rendant 0 au lieu de 1 : le caractère n'était jamais arrivé
jusqu'au motif.

*Portée.* Non versionné (arbitrage Tim (b), deux lignes au `.gitignore`) : chaque
commit porterait sinon un diff sans valeur. **Éprouvée 1/N.**

### Notes 24/08 (suite)

- **Ce que le schéma affiche ne se traduit pas plus que ce que le programme désigne.**
  C113 s'étend de la ligne de code à l'image. Sur `logigramme`, les étiquettes `oui` et
  `non` des losanges sont **l'objet même de l'explication** et sont restées en français,
  glosées à leur unique emplacement : écrire que la décision a « deux sorties étiquetées
  yes et no » aurait contredit l'image sous les yeux du lecteur. Même logique que le §2,
  où la description d'une capture C29 reste celle de l'écran français. **La décision du
  22/08 de laisser les images en français contraint donc le texte anglais chaque fois
  qu'il parle de ce qui est écrit dans l'image**, ce qui n'avait pas été anticipé.
- **Mais un vocabulaire de travail répété se traduit, avec une mention unique**
  (arbitrage Tim (b)). Les cinq noms d'états du portail apparaissent une vingtaine de
  fois : les garder en français aurait rendu la prose pénible sans rien apprendre. La
  borne entre les deux cas est **ce dont la fiche fait son objet** contre **ce qu'elle
  emploie pour parler d'autre chose**. ⚠ **Conséquence de mesure non prévue** : le
  paragraphe de correspondance ajouté compte dans le foisonnement, et **deux paires du
  tableau des 54 ne sont donc pas interprétables** comme expansion de langue.
- ⚠ **Une glose ajoutée par la traduction est le seul endroit où le report ne protège
  pas.** Le cinquième contrôle de `--style` a mordu pour la première fois depuis son
  écriture, sur **une phrase que le français ne contient pas**. Partout ailleurs, la
  ponctuation anglaise hérite d'un arbitrage déjà rendu. *Toute phrase neuve du côté
  anglais se relit comme du français neuf.*
- ⚠ **Le compteur d'embeds sous-compte, et son égalité reste vraie.** Le motif s'arrête
  au premier `]` du texte alternatif : un alt contenant un crochet rend l'embed
  invisible. **2 pour 4 sur `machine-a-etats`**, écart de 4 sur tout `content/`, porté
  par cette seule paire. **Le contrôle passe au vert en ne regardant que la moitié des
  embeds de la fiche.** Contrainte induite : il a fallu **garder des crochets dans les
  alt anglais** pour que la paire ne diverge pas — *un compteur défectueux impose sa
  forme au texte*.
- **Un contrôle se déplace de la plage vers la source, et ses faux positifs tombent
  d'eux-mêmes.** Le balayage des caractères hors alphabet latin, né d'un idéogramme
  glissé dans `pcb-en`, rendait deux faux positifs en listant une plage (l'ohm, les
  emojis du corpus). Comparé à la **source**, il n'en rend aucun : présent des deux
  côtés, le caractère est délibéré. **54 paires, 0 suspecte, zéro prouvé par
  réinjection.** Même déplacement que le cinquième contrôle de `--style`, qui a cessé
  de compter pour comparer. ⚠ **Ce contrôle ne vit que dans le script de séance, donc
  nulle part** : à porter dans `creer-fiche-en.mjs`.
- ⚠ **Un caractère étranger ne déclenche aucun des cinq contrôles existants.** Ni lien,
  ni embed, ni bloc de code, ni typographie française, ni C109. **Seule la relecture du
  texte l'a vu**, et rien ne garantissait qu'elle le voie.
- **Le registre « tu » ne se traduit pas d'un bloc, et le §4 n'a pas eu à bouger.** La
  méthode passe à l'impératif direct, le chapô et les blocs d'exemple restent
  descriptifs. **Traduire une fiche de réalisation entièrement à l'impératif donnerait
  des ordres là où elle raconte un cas.** C65 éprouvée sur sa moitié manquante.
- **Une troisième voie de résolution de C109 a servi, et elle n'est pas écrite** : les
  **parenthèses**, quand la double virgule créerait une ambiguïté de portée (`des
  étapes (ce que le système fait) reliées par des transitions`). Après le découpage en
  phrases et la phrase longue à virgules.
- **La glose de `Voir aussi` attire la prose.** Deux points-virgules à verbe conjugué y
  ont été trouvés, sur `alimentation-electronique` et `chronogramme`. Le §4 déclare
  licite le **tiret** de glose, pas la ponctuation **à l'intérieur** de la glose. Remède
  employé deux fois : une relative qui fond les deux propositions, une glose ne pouvant
  pas devenir deux phrases sans cesser d'être une glose.
- **Deux fiches à résidu C109 nul, les premières du chantier.** `machine-a-etats` et
  `grafcet` procèdent par **appositions définitionnelles et parallélismes à verbe
  conjugué**, deux formes que le second tamis ne protège pas. La prédiction de résidu y
  devient falsifiable au sens strict : un candidat restant aurait accusé mon classement.
- ⚠ **Le périmètre de l'anneau 1 a maintenant trois valeurs** — 82, 79, **78** — et **la
  règle qui produit le 78 est fausse par construction** : la résolution par dernier
  segment écrase tous les `index.md` sur une seule cible. C'est la clé par nom de
  fichier du 22/08, sur un autre objet. `decouplage` étant hors anneau, **le lot 2c
  passe de 48 à 49 fiches**.
- ⚠ **`--libelles` devient bruyant en gagnant en couverture** : 3 candidats le 23/08,
  **25 aujourd'hui**, dont quatorze du seul patron `step N`, qui désigne une position
  dans le parcours et non un titre. *Un outil qui remonte des libellés délibérés apprend
  à être ignoré.*
- ⚠ **Le raccourci de lecture coûte précisément ce qu'il prétend économiser.** Avoir
  sauté la lecture du squelette a produit un `source_sha256: PLACEHOLDER` — or
  **l'empreinte est la seule partie du squelette qui ne se reconstitue pas depuis le
  français**, les cibles suffixées s'en déduisant mécaniquement. Parade adoptée : lire
  le **seul front matter** du squelette.
- ⚠ **L'espace française devant `;` pour la troisième séance consécutive**, trois fois,
  et toujours **dans un segment d'énumération transposé au lieu d'être réécrit**. Le
  constat du 23/08 (suite 3) se confirme sur un troisième lot : ce n'est pas une
  inattention aléatoire, c'est lié au geste de recopier une structure.
- ⚠ **Deux mots français à deux objets repérés sans être figés** : **broche**
  (*pin* électronique / *spindle* d'usinage, rencontré sur `grafcet`) et **trame**
  (*packet* radio / *frame* série), rendus différemment selon les fiches **sans que la
  règle soit écrite**. Cinquième et sixième du chantier, après contrôleur, incertitude,
  valider et fin de course.

### Acquises 24/08 — module d'épreuve MicroPython, premières fiches à blocs de code

*Une convention neuve. La numérotation atteint **C113**. C109 reçoit un amendement.*

### C113 — Ce que le programme dit se traduit, ce qu'il désigne ne se traduit pas

*Acquise le 24/08, arbitrage Tim (b), sur le module langage MicroPython. La numérotation atteint **C113**.*

Le §2 des règles de traduction disait « code inchangé, commentaires traduits » (C77). Cette phrase ne tranchait pas le cas majoritaire des fiches à blocs de code : **les chaînes littérales**. Une chaîne n'est ni du code ni un commentaire, et les six fiches du module en portent des deux espèces opposées.

**Se traduit — ce que le programme dit.** Les chaînes affichées (`print("Il fait chaud")`, `print("tour", i)`), **et les blocs de sortie attendue qui les reproduisent**. Les deux bougent ensemble ou la démonstration se contredit. Motif décisif : l'exercice 1 de `micropython-controle` demande d'afficher `"sombre"`, `"moyen"` ou `"lumineux"` et son corrigé les imprime — traduire l'énoncé sans le corrigé casse l'exercice, traduire le corrigé sans le bloc de sortie casse la trace.

**Ne se traduit pas — ce que le programme désigne.** Identifiants, mots-clés, API, noms de fichiers, **et les chaînes qui désignent au lieu d'afficher** : `Pin("LED", Pin.OUT)` nomme une broche que le firmware attend littéralement, les clés de `dict` (`{"nom": "LDR", "broche": 26}`) sont reprises trois lignes plus bas par `capteur["broche"]`, `"mesures.csv"` est un nom de fichier, et `"Pico" * 2` est un nom propre dont la répétition **est** la démonstration.

⚠ **La borne n'est donc pas « chaîne vs identifiant »**, comme la convention avait failli s'écrire, **mais « dire vs désigner »**. Rencontrée cinq fois sur les six fiches, elle a tranché chaque fois. *Traduire une chaîne parce qu'elle est une chaîne casse le programme.*

**Coût assumé : un registre mixte.** Les identifiants restent français, donc un anglophone lit `clignote(led, n=3, duree=0.2)` et `if bouton.value() == 0 and not alarme_active`. Motif de la borne : renommer désynchroniserait les SVG français qui montrent ces mêmes variables (`locale-globale.svg` de `cpp-portee`), et ce serait un diff sémantique et non typographique. *C'est le compromis des schémas laissés en français, pris un cran plus bas.* `micropython-fonctions` est la fiche où il se voit le plus, donc celle à relire en premier si la borne doit bouger.

**Effet sur les compteurs : aucun.** Le troisième compteur compte les blocs, pas leur contenu. Les six paires sortent égales (5, 6, 6, 3, 4, 5).

**Amendement à C109 — le critère du verbe conjugué vaut partout, pas seulement en énumération.** L'amendement du 23/08 (suite 3) bornait le critère à l'« énumération en ligne » et laissait sans règle l'incise de prose ordinaire à segment nominal. Arbitrage Tim (b) : le critère s'applique partout, avec un second tamis pour les segments nominaux — **un segment nominal qui énumère reste, un segment nominal qui commente tombe**. Une incise qui déroule trois noms de variables énumère et reste ; une incise du type « d'où l'importance de la conversion » glose et tombe. Servi **8 fois sur 68** sur le module. Sous la lecture stricte, `micropython-lire-un-programme` aurait perdu ses quatre énumérations en ligne, qui sont précisément les endroits où la fiche montre du code au lecteur.

**Les exemptions françaises se retrouvent une pour une côté anglais.** 68 candidats, 59 traités, **9 exemptions**, et le contrôle EN rend exactement ces neuf, avec **0 C109 créée par la traduction**. C'est la première fois que le différentiel du 23/08 (suite 4) tourne sur un lot entier et se referme à zéro. Coût de la passe : **+9 mots**.

⚠ **Un contrôle à zéro peut n'avoir rien contrôlé du tout.** Deux pertes de variables PowerShell entre deux messages ont produit un `--style` sur tout `content/en/` (lu comme un corpus pollué) et deux `--lot` n'imprimant que leur règle. *Une sortie sans périmètre n'est pas une sortie à zéro* — avant de lire un résultat, vérifier qu'il porte le nom des fichiers attendus.

⚠ **`--controle` ne voit pas l'empreinte, et son « 0 divergente » ne dit rien du sha.** Un squelette généré avant la passe C109 sur sa source porte une empreinte périmée pendant toute la session sans qu'aucun des trois compteurs ne bronche. Seul `derive-traduction.mjs` le voit. **L'ordre est donc contraignant : passe C109 sur le FR, puis génération.** *Une contrainte écrite ne suffit pas si l'ordre d'exécution ne la porte pas* — elle a été violée trois lignes après avoir été écrite.

⚠ **`--style` a un faux positif, révélé par son premier lancement sur du français.** Le tiret demi-cadratin d'**intervalle numérique** (`0–65535`) est lu comme une incise. Une occurrence dans le corpus FR, désormais deux avec sa transposition EN. Exemption à coder — motif : tiret demi-cadratin encadré de chiffres. *Un contrôle éprouvé sur un corpus ne l'est pas sur l'autre : celui-ci n'avait jamais vu de plage chiffrée.*

**Le foisonnement ne se prédit toujours pas, et l'hypothèse en vigueur vient d'être démentie.** Module à **+4,5 %** (5 463 → 5 707), le plus bas mesuré, contre +5,7 % au lot 2b. L'hypothèse de la densité de gloses **ne trie rien ici** : `controle` est la 2ᵉ plus courte et sort au plancher (+2,6 %), `fonctions` à peine plus longue sort au plafond (+8,5 %). Hypothèse de remplacement — la **densité de code inline**, que C110 compte comme des mots et qui est **identique dans les deux langues**, donc dilue le foisonnement du texte alentour. Versée au BACKLOG avec son test, **non écrite ici tant qu'elle n'est pas mesurée** : trois autres causes tiennent aussi la route et aucune des quatre n'a été comptée.

⚠ **C110 se répète sur les petits nombres, là où elle a été écrite pour les grands.** Quatre chiffres ratés dans la séance, tous par recomptage à vue d'une sortie d'outil ou d'un message précédent : 69 candidats au lieu de 68, 11 exemptions au lieu de 5, 1 candidat prédit deux lignes après avoir écrit qu'il était exempt, 42 fiches au lieu de 41. **Le premier a produit une accusation portée contre l'outil** — un prétendu défaut d'agrégation « du même genre que la clé par nom de fichier du 22/08 » — avant vérification. *La règle de C110 ne s'arrête pas aux volumes : un décompte d'occurrences se lit dans la sortie, il ne se recompte pas de tête.*

### Acquises 23/08 (suite 4) — outillage avant le lot 2c, purge C112

*Aucune convention numérotée neuve. La numérotation reste à **C112**. C110 reçoit un amendement.*

**Amendement à C110 — une règle de comptage se publie sous forme d'outil, pas de phrase.** C110 exigeait qu'un chiffre de volume porte sa règle. La règle a été écrite le 22/08 et **elle n'a pas suffi** : sur les cinq trames du lot 2b, dont les fichiers FR n'avaient pas bougé depuis leur mesure, un second comptage conforme à la même phrase rend systématiquement moins — −35, −98, −48, −46, −23 côté FR et −35, −99, −50, −44, −21 côté EN, **−499 sur dix mesures**. Six variantes de tokeniseur ont été essayées, aucune ne retombe sur les chiffres publiés. *Deux implémentations justes sous la même règle se lisent comme un chiffre juste et un chiffre faux* — c'est le motif d'origine de C110, revenu **un cran plus bas**. D'où `tools/compter-mots.mjs`, arbitrage Tim (choix délégué) : **tout chiffre de mots publié dans un prompt, un JOURNAL ou une clause de TODO sort de ce script**, et se cite par son nom. Le script réimprime la règle et son motif à chaque lancement, pour que sa sortie soit citable telle quelle. *Portée : les mots. Les octets n'en ont pas besoin, c'est précisément pourquoi ils tranchaient là où les mots ne pouvaient pas.*

**Un total juste, même recomposé par soustraction, reste une soustraction.** Le prompt d'ouverture annonçait 252 851 mots restants, obtenus par 288 050 − 6 515 − 28 684. Le comptage direct des 207 fiches non traduites en rend **253 209**, puis 253 245 après le lot C112. L'écart est faible et ne change aucune décision, mais la forme compte : **le script compte les fiches sans jumelle EN, il ne retranche pas des lots**. Une somme se compense, un comptage non.

**Une exemption se définit par la position, pas par la forme — et ce qui restait à corriger n'était pas ce que le défaut décrivait.** Le motif de glose de liste était annoncé comme « ratant les puces à gras non initial », donc comme un problème de reconnaissance de gras. Le correctif ne reconnaît aucun gras : **sur une puce, le premier tiret est la glose, tous les suivants sont de la prose**. La tête n'a plus à avoir de forme particulière, et les deux modes d'erreur symétriques tombent d'un coup, y compris le second tiret « logé derrière le tiret de glose » du 23/08 (suite 2). ⚠ **Angle mort résiduel assumé et mesuré** : la règle exempte aussi une incise de prose quand la tête de puce est une phrase entière. Proxy — puces à tiret dont la tête dépasse 100 caractères : **5 côté EN, 142 côté FR**. Le compromis est choisi dans ce sens : ne jamais signaler une glose licite.

⚠ **Un instrument peut fabriquer le défaut qu'il signale, et rien dans sa sortie ne le dit.** Le premier lancement de `--style` rendait **6 verdicts mécaniques dont 3 faux**, soit la moitié de la seule famille censée rendre un verdict. Le plus vicieux venait du masquage : remplacer le code inline par des **espaces** faisait lire `` `return`: `` comme une espace française devant deux-points. **Le défaut était dans l'œil, pas dans le texte.** Corrigé par une sentinelle non blanche. *Un contrôle neuf se juge sur ses faux positifs avant d'être livré, sinon il apprend à être ignoré.*

**Un contrôle qui rend zéro se prouve par réinjection, et le corpus ne fournit plus le cas.** Deux détecteurs neufs rendent zéro ou presque : 0 C109 créée par la traduction, et 0 occurrence du motif `Welding`. Le second **ne peut plus être observé** puisque le défaut a été corrigé le 23/08 (suite). Il a donc fallu remettre `en/meca/index` dans son état d'avant correction pour voir mordre l'outil, et injecter un point-virgule dans une copie d'`adc-en` pour voir mordre le différentiel. **Un banc d'épreuve à dix cas** a servi aux exemptions. *C'est la même discipline que le 23/08 (suite), et elle devient un préalable de livraison : un outil dont le corpus ne contient plus le défaut se valide sur un corpus reconstitué, jamais sur le silence.*

**Le cinquième contrôle de `--style` n'était pas au brief, et c'est le seul qui rende un verdict sur le fond.** Comparer le décompte C109 de la fiche EN à celui de sa source FR sépare deux populations que le total confond : une occurrence **reportée** du français a déjà été arbitrée, une occurrence **créée par la traduction** ne l'a jamais été. C'est exactement le mode d'erreur du 23/08 (suite 3) sur `dossier-technique-en`. Les 34 candidats C109 du corpus EN sont, eux, tous des reports.

**C112, éprouvée 2/N — le lot mécanique confirme les quatre populations et la décomposition tombe juste.** Balayage complet, motif `opposab|défendabl|défendues?|inopposab` hors `en/` et `templates/` : **38 occurrences sur 16 fiches**, soit 16 objet enseigné + 15 décoratifs + 4 transitifs + 3 formes verbales. Les 15 décoratifs retirés, le contrôle sur les fichiers rend **23 restantes**, même décomposition moins les décoratifs. Coût : **+36 mots, +144 octets** sur quinze emplacements. **Le corollaire du verbe sert 4 fois sur 15**, et à chaque fois il rend la phrase plus concrète parce qu'il réintroduit quelqu'un en face. Les onze autres ont demandé de choisir **lequel des sens** le mot portait : *empêche de rester une intention*, *qui engage*, *tient encore debout*, *qu'on ressort telle quelle*. **Aucun synonyme unique n'aurait couvert les quinze**, ce qui éprouve la borne de C112 sur un second lot.

**Note d'outillage** : le mode `--style` accepte n'importe quel chemin sous `content/`, mais les trois contrôles de typographie ne s'activent que sur `en/`. Un lancement sur une fiche FR ne rend donc que le volet C109, ce qui est utile pour les passes du lot 2c.

### Acquises 24/08 (suite 2) — cinq notions transverses du lot 2c

*Aucune convention neuve. La numérotation reste à **C114**. C109 reçoit un angle mort mesuré, le §5.3 des règles de traduction trois notes de rendu.*

⚠ **L'exemption de glose de puce dépend d'une forme, alors qu'elle a été écrite pour n'en dépendre d'aucune.** La règle du 23/08 (suite 4) dit que **sur une puce, le premier tiret est la glose et tous les suivants sont de la prose**, et son mérite affiché était d'être **positionnelle** : la tête de puce n'a plus à avoir de forme particulière. Elle en suppose pourtant une — que **le libellé de tête ne contienne pas lui-même de tiret**. Sur `gpio`, trois puces de *Voir aussi* portent des libellés de wikilink de la forme `[[arduino-gpio|Arduino — GPIO]]` : le tiret de glose y est **le second**, parfois le troisième, et **six gloses licites remontent en candidats C109**. Le mode d'échec est **unilatéral** — faux positifs seulement, jamais de faux négatif — donc conforme au compromis choisi le 23/08, *ne jamais signaler une glose licite* étant précisément ce qui échoue ici. **Même mode d'erreur que le backtick du 23/08** : un séparateur compté comme structure alors qu'il appartient au libellé. ⚠ **Périmètre non mesuré** : le patron `Famille — Sujet` est celui des libellés de tuto de famille, donc probablement fréquent dans les *Voir aussi* du dossier `mcu/`, et personne ne sait sur combien de puces. À compter avant de coder quoi que ce soit.

**Une prédiction de décomposition ne vaut que si la sortie la rend visible.** Les cinq décompositions du lot ont été publiées emplacement par emplacement avant lancement et vérifiées une par une, ce qui est la parade au motif du 25/08. Mais au premier tour, **le filtre de la série n'avait gardé que le bilan agrégé des trois fiches** : le total de 21 était mesuré quand le 11/5/5 ne l'était pas, et il a fallu le tour suivant pour l'observer. *Un filtre qui résume transforme une prédiction falsifiable en affirmation invisible — le filtre fait partie du dispositif de preuve, pas de la mise en forme.*

**Un chiffre hérité peut avoir une heure.** Les mots FR des trois premières fiches ont été republiés comme « mesurés » à leur valeur d'avant les passes C109 de la même séance, alors que les passes venaient de les faire bouger de +5. **C110 ne parle pas d'ancienneté, elle parle de provenance** : une mesure prise avant une édition n'est pas une mesure du fichier édité, même prise le matin même.

**Le foisonnement reçoit sa première cause identifiée, et elle n'est pas une hypothèse de plus.** Le lot sort à **+1,2 %**, le plus bas du chantier, `gpio` à **−1,4 %**. Les cinq fiches concentrent des **gloses de termes anglophones qui tombent en traduction** (§5.3), soit une trentaine de mots retirés sans contrepartie. Ce n'est **pas** une cinquième explication du phénomène — quatre sont tombées, et l'écart interne au lot va de −1,4 à +5,0 % — c'est un **effet local déjà écrit dans les règles**, dont on constate qu'il pèse quand une fiche en porte plusieurs. Seule la moyenne de corpus dimensionne : **4,4 % sur 66 paires**.

### Acquises 24/08 (suite 3) — les huit notions transverses du lot 2c

*Trois conventions neuves. **La numérotation atteint 117.***

**115. La liste-en-paragraphes n'est pas une liste — elle tombe sous C109, et se résout par un point après le gras fermant.** La forme `**Libellé** — explication`, écrite en **paragraphes** et non en puces, est une liste de définitions par l'intention et de la prose par le balisage. L'exemption positionnelle de C109 ne la voit pas : elle ne regarde que le début de ligne, et ces lignes commencent par `**`. **Le critère du verbe conjugué s'applique donc normalement** — partie droite à verbe conjugué, le tiret tombe. ⚠ **La résolution n'est ni le deux-points ni le point à l'intérieur du gras**, et les deux ont été essayés avant d'être écartés sur pièce : sur les huit entrées de `cpp-logs`, **quatre explications portent déjà un deux-points interne** (`un fichier d'en-tête est introuvable : bibliothèque non installée, …`), donc le deux-points d'annonce en aurait mis deux dans la même phrase sur la moitié de la section ; et le point dans le gras est impossible dès que le libellé se termine par un accent grave, `` **`...`.** `` faisant lire le point comme une partie du code. **Forme retenue : le point après le gras fermant**, `` **`redefinition of 'xxx'`**. La même variable est déclarée deux fois. `` — même silhouette que le `**Titre.** Texte.` des sections *Pièges*, le point déplacé d'un caractère par nécessité typographique. **Borne** : la forme `**Cas 1 — le point-virgule oublié.**`, où le tiret vit **à l'intérieur** du gras et où la partie droite est **nominale**, est une glose et **reste** — 26 lignes sur 14 fiches. **Périmètre mesuré avant l'arbitrage** : 44 lignes sur 33 fiches, dont 8 sur `cpp-logs`, ce qui a fait de la décision une retouche et non une passe de corpus. ⚠ **Ma prédiction de forme était fausse** — j'annonçais « très répandue, peut-être des centaines », parce que je confondais cette forme avec le patron des *Pièges*, qui n'a pas de tiret. Arbitrage Tim **(a)**. Éprouvée 1/N (8 emplacements). **La numérotation éprouvage atteint 115.**

**116. Un lot de traduction se conduit en trois lancements, et toute fiche dont le cadrage révèle un arbitrage sort du lot.** Le point de sérialisation dur du chantier est le `source_sha256` : la fiche anglaise ne peut pas s'écrire avant son squelette, et le squelette pas avant la passe C109. **Mais rien n'oblige à franchir ce point une fiche à la fois.** Le cycle se replie en trois lancements quel que soit N — **(1) cadrage** : `--style` FR et `compter-mots` sur les N fiches, décomposition publiée fiche par fiche ; **(2) génération** : après les N passes, résidus, mots, N générations gardées, trois compteurs ; **(3) contrôle** : style EN, compteurs structurels, dérive, foisonnement sur les N paires. **Taille arbitrée : quatre à six fiches** (Tim, **b**), pas huit d'emblée — un pas mesurable dit ce qui a tenu, un saut ne le dit pas. **Garde, qui est C27 transposée** : un cluster homogène à faible arbitrage se groupe, une fiche pivot se cadre seule. **Toute fiche dont le cadrage révèle une exemption à juger sort du lot** et reprend son tour de parole — en lot, un arbitrage sur la sixième bloque les cinq autres, ou pire, il se tranche seul. Éprouvé sur le lot des huit, où `niveaux-de-tension` et `debugger-embarque` étaient à **zéro exemption** (pure exécution, groupables sans réserve) quand `lire-une-datasheet` en portait **onze** et `cpp-logs` a demandé un arbitrage. ⚠ **Corollaire d'outillage, appris à l'usage** : la génération se **garde** — elle constate l'existence de la cible, sa taille et son horodatage avant d'appeler le script, ce qui rend un second lancement inoffensif au lieu de le faire ressembler à une panne. **Jamais de `--force` dans un script de séance** : il écraserait une traduction finie. **La numérotation éprouvage atteint 116.**

**117. L'escalade se réserve aux six catégories du §8 ; le reste se décide et se consigne.** Le §8 du prompt projet nomme déjà les topics qui forcent l'argumentation et la validation : nouvelle convention, choix structurant sur le parcours, référentiel AA, pédagogie de fond, vocabulaire à proscrire, posture étudiante. **Le défaut observé le 24/08 (suite 3) n'est pas d'avoir trop peu escaladé, c'est d'avoir escaladé SOUS cette ligne** — l'ordre d'une fiche dans un lot et le périmètre d'un anglicisme ne relèvent d'aucune des six. **Sous la ligne** (vocabulaire dans une fiche, résolution d'un emplacement, exemption sous convention existante, libellés, alt, registre, traitement d'un faux positif d'instrument, ordre d'un lot) : décider, puis **consigner** en fin de séance dans une rubrique « décisions prises seules » du §7. La relecture de Tim reste entière, elle se déplace seulement en aval, et ces décisions sont **locales et réversibles par construction**. **Au-dessus de la ligne** : porter l'arbitrage, non par prudence de principe mais parce qu'une convention est la voix du wiki — le risque n'est pas de trancher mal une fois, c'est qu'une série de décisions chacune défendable fasse dériver le corpus d'un degré par séance sans que personne ne possède la direction. ⚠ **Motif écrit contre un argument séduisant et biaisé** : Tim a relevé **100 % d'accord** sur les arbitrages de la séance. Le taux porte sur un échantillon **que j'ai choisi** — il mesure la calibration de mon filtre d'escalade, pas la justesse de mes décisions, les centaines prises seules n'y figurant pas. **Corollaire de coût** : escalader du facile entraîne à valider vite et détruit la valeur du signal quand un vrai arbitrage arrive. Forme éprouvée sur `cpp-logs` — Tim tranche la direction (a), l'exécution bute sur quatre deux-points internes non anticipés, Claude résout autrement et le dit. **Tim décide de la direction, Claude gère l'exécution y compris ses surprises.** Demande Tim. Éprouvée 1/N. **La numérotation éprouvage atteint 117.**

⚠ **UN SEUL ANGLE MORT D'INSTRUMENT, DEUX SYMPTÔMES QUE J'AVAIS CONSIGNÉS SÉPARÉMENT.** Le masquage ne franchit pas le **chevron de citation**. En aval : les deux `;` d'un bloc `cpp` logé dans un callout de `cpp-logs` remontent en candidats C109, en français comme en anglais puisque le code ne change pas — faux positifs permanents. En amont, trouvé quatre séries plus tard : **ce même bloc n'est pas compté** par le troisième compteur, qui rend **7 pour 8 présents**. *Deux observations, un défaut, un correctif — retirer le préfixe de citation avant de segmenter règle les deux à la fois.*

⚠ **UN CHIFFRE DE FAMILLE SE PUBLIE AVEC SON EFFECTIF.** À mi-séance, sept notions transverses de `mcu/` donnaient **+0,4 %** de foisonnement contre +5,7 % pour les trames du V, et j'en ai fait un repère de dimensionnement. Les **treize** maintenant appariées donnent **+1,2 %** : huit dixièmes de point pour un échantillon doublé. La distinction entre familles tient, le chiffre non. *C110 prise un cran plus haut — une moyenne sans son n se lit comme une constante.*

⚠ **UNE CAUSE IDENTIFIÉE APRÈS COUP N'AUTORISE PAS LA PRÉDICTION SUIVANTE.** Le §7 des règles de traduction interdit depuis le 23/08 de prédire le foisonnement fiche par fiche. Prédit deux fois quand même, démenti deux fois, **du même côté**. Entre les deux, la contraction lexicale des périphrases verbales (`mettre à 1` → `set`, `mettre à 0` → `clear`, mesurée à −12 mots sur trois emplacements de `manipulation-de-bits`) expliquait la première — et cette explication m'a servi de permis pour recommencer. **Sur ~90 prédictions de la séance, les cinq démenties portaient toutes sur une grandeur non mesurée** ; aucune de celles qui se déduisaient d'un texte lu n'a échoué.

⚠ **REMPLIR LE LIBELLÉ D'UN LIEN NU GONFLE LE COMPTE EN, ET C110 NE LE DIT PAS.** `[[processeur]]` fait un jeton, `[[processeur-en|processor]]` en fait deux. Sur `microcontroleur` et ses **onze liens nus** (maximum du lot), le remplissage pèse **+19 mots sur +72** — un quart du foisonnement affiché n'est pas du texte. Le corpus porte **175 liens sans libellé**. *Un foisonnement de fiche ne se lit pas sans son compte de liens nus.*

**Note d'outillage** : `--libelles` ignore l'argument de chemin et relit tout le corpus EN. Première mesure de couverture au passage — **1 655 liens à libellé, 922 visant une fiche EN existante, 733 injugeables**, 18 candidats à lire. Le mode gagne en portée à mesure que le corpus se densifie.

### Acquises 25/08 (suite) — premier lot C116, `embarque/mesure/`

*Aucune convention neuve. La numérotation reste à **117**. C116 passe à **2/N**, C117 à **2/N**, la borne de C115 sert une fois.*

**C116, première épreuve complète : trois lancements pour six fiches, zéro arbitrage remonté, zéro fiche sortie.** Le cadrage a mesuré le périmètre avant engagement (`--front` + `compter-mots --lot`) et démenti le brief deux fois — six fiches et non trois dans le dossier, trois et non six dans l'anneau 1 ; aucune ligne de forme A dans les deux fiches annoncées porteuses, donc les candidates à sortie ne se sont jamais matérialisées. Les 60 candidats C109 se sont tous classés sous le jeu éprouvé, la décomposition des résidus (5/4/3/4/7/0) tenant deux fois : sur le FR après passes, puis sur l'EN au report un pour un. La garde de génération a rendu six « Cible absente » et les trois compteurs sont restés égaux de la génération au contrôle. ⚠ **Le protocole n'a pas rencontré son cas limite** : aucune fiche à arbitrage dans ce lot, la clause de sortie reste donc éprouvée sur le seul lot des huit. **La numérotation éprouvage C116 atteint 2/N.**

**C117, deuxième épreuve : sept décisions sous la ligne, une seule escalade au-dessus, et la ligne a tenu dans les deux sens.** L'escalade unique — la composition du lot, trois fiches hors anneau — touchait un arbitrage Tim existant (la progression par proximité de lien, 22/08), donc le bon côté de la ligne. Les sept décisions prises seules sont consignées dans la rubrique dédiée du JOURNAL du 25/08 (suite) : gloses interrogatives en parenthèses, titres EN, GBF glosé, mention historique *slave*, *trame* → *frame*, repli du couple précision/exactitude sur *accuracy*, *loses accuracy*. **La numérotation éprouvage C117 atteint 2/N.**

**La borne de C115 a servi sur pièce et a tenu** : `**Oublier la masse commune — court-circuit par la terre.**` (`oscilloscope`, *Pièges*) porte le tiret à l'intérieur du gras et une partie droite nominale — glose, elle reste, et son report EN n'a créé aucun candidat différentiel.

**L'angle mort du chevron a son périmètre : 68 blocs (136 clôtures, total pair partout) sur 34 fiches, toutes dans `embarque/mcu/`.** Le comptage est fait et ne se refera pas ; le correctif — faire franchir le chevron au masquage et au compteur — vit au TODO, non bloquant tant qu'aucun lot ne traduit une fiche porteuse.

### Acquises 25/08 (suite 2) — deuxième lot C116, le groupe schémas/simulation

*Aucune convention neuve. La numérotation reste à **117**. C116 passe à **3/N**, C117 à **3/N**. C110 reçoit un contre-exemple coûteux, C109 un faux positif d'instrument de famille neuve.*

⚠ **C110 s'applique aussi à ce qu'on ne compte pas avec un outil, et j'ai contourné la règle en renommant l'opération.** Le cadrage a publié **58 candidats C109 prédits**, annoncés comme *prédits à partir du texte lu* — la seule catégorie de prédiction qui n'avait jamais échoué sur ce chantier. L'outil en rend **63**. Le défaut n'est pas dans la lecture : **compter des tirets et des points-virgules à l'œil sur 6 314 mots est un décompte d'occurrences**, et le corollaire de C110 écrit le 24/08 dit qu'un décompte *se lit dans la sortie, il ne se recompte pas de tête*. **La règle a été respectée sur le mot et enfreinte sur la chose.** *Ce qui sauve le dispositif, c'est la décomposition* : là où le candidat était vu, le classement est juste — **17/17, 19/19 et 2/2** sur trois fiches. Les cinq échecs sont **tous des détections manquées, aucun n'est un jugement faux**. *Corollaire opératoire : une prédiction de décomposition (quels emplacements, quel traitement) reste licite ; une prédiction de TOTAL sur un balayage ne l'est pas, parce qu'elle suppose une exhaustivité que seule la machine atteint.*

⚠ **Deux « à traiter » sont passés en exemptions à l'application stricte, et l'amendement les protégeait explicitement.** `— avant de câbler, de déboguer ou de valider un choix` et `— repérer chaque rail, et noter qui alimente quoi` sont des **infinitifs qui énumèrent**. L'amendement du 23/08 (suite 3) dit mot pour mot qu'un *segment nominal ou à l'infinitif est un item de liste et reste*. J'avais lu « commente » sur des segments qui énumèrent. **Le second tamis se lit dans cet ordre : chercher d'abord le verbe conjugué, puis compter les items du segment — pas juger l'intention.**

**C116, troisième épreuve : la charge d'arbitrage et la charge de travail se dissocient, et c'est la première qui commande.** Le lot rend **2 candidats pour 980 mots** sur `schema-bloc-fonctionnel` et **19 pour 1 024** sur `optimisation-mecanique`, soit un **facteur dix à calibre égal**, annoncé au cadrage et confirmé par la mesure. Et pourtant **zéro arbitrage remonté, zéro fiche sortie** : les 21 exemptions tombent toutes sous le jeu éprouvé. *La garde C27 transposée dans C116 parle d'un cluster à faible arbitrage, pas d'un cluster à charge égale — le lot le montre sur pièce, et un lot déséquilibré en travail reste groupable.* ⚠ **Le lot traverse trois dossiers et deux branches** : l'homogénéité était thématique et non structurelle, contrairement au lot du 25/08 (suite) qui était un dossier entier. **La numérotation éprouvage C116 atteint 3/N.** ⚠ **La clause de sortie n'a toujours pas servi depuis le lot des huit** : trois lots, une seule épreuve.

⚠ **C109 et l'exemption positionnelle ne disent pas la même chose, et il faut le savoir avant de lire un résidu comme un solde.** Trois tirets du lot sont **en tête de puce ou d'item numéroté**, donc exemptés par la règle positionnelle du 23/08 (suite 4), **et portent un verbe conjugué à droite**, donc tombent sous la convention. Ils ont été traités à la lecture. C'est l'angle mort **assumé et mesuré** de cette exemption — *la tête de puce qui est une phrase entière*, proxy de 142 cas côté FR. **Conséquence de dispositif : le résidu rendu par `--style` après passe vaut les exemptions, pas le travail restant**, et l'écart n'est visible qu'en relisant.

⚠ **Faux positif d'instrument de famille neuve : le tiret de paire entre identifiants.** `VCC–GND` remonte en candidat C109. Ce n'est pas une incise mais un **demi-cadratin de paire**, exactement la forme que l'exemption du 24/08 couvre pour les intervalles chiffrés — sauf que cette exemption est **bornée par des chiffres**, et qu'ici les bornes sont des lettres. Exempté à la lecture des deux côtés, **correctif non codé : le périmètre n'est pas mesuré**, et la leçon du 24/08 (suite 2) est de compter avant de coder quoi que ce soit. Mode d'échec unilatéral, donc non bloquant.

⚠ **L'espace française devant `;` pour la quatrième séance consécutive, et elle a changé d'habitat.** Sept dans le premier jet EN, retirées avant le contrôle. Trois dans les **segments d'énumération transposés** de `chaine-energie`, le geste identifié depuis le 23/08 (suite 3). Mais **quatre dans des alt d'images**, ce qui est neuf : *l'alt se transpose encore plus mécaniquement que la prose, et sa typographie est contrôlée au même titre* (le §5.3 le dit déjà pour les séparateurs décimaux). À relire en priorité dans les alt, pas seulement dans les puces.

**Le rendu des libellés portés par les SVG français reçoit sa forme la plus économique.** Les sept noms de fonctions de `chaine-energie` (*alimenter, distribuer, convertir, transmettre, agir, acquérir, traiter, communiquer*) et les trois noms de liaisons de `schema-cinematique` (*bâti, pivot, glissière*) sont **écrits dans les images**, qui restent en français. Sur le patron de l'arbitrage (b) du 24/08 (suite), ils sont **traduits dans la prose avec le nom français en italique une fois**, à sa place dans la liste numérotée qui les introduit déjà : `**Supply** (*alimenter*) — …`. **Aucune phrase de correspondance n'a été ajoutée sur `schema-cinematique`**, la liste suffisant. Les **alt gardent les libellés français**, puisqu'un alt affirme ce que l'image contient (C108). ⚠ **Conséquence de mesure, anticipée cette fois** : deux paires du tableau de foisonnement **ne sont pas interprétables** comme expansion de langue, et ce sont les deux plus hautes du lot.

⚠ **Une prédiction ratée sur un outil dont je venais de lire le code.** `[[cpp-en|code]]` avait été annoncé parmi les candidats attendus de `--libelles` ; il en est exempté par le **test de sigle**, `code` commençant par l'initiale de `C++`. *Prédire le comportement d'un corpus suppose de connaître le comportement de l'instrument qui le lit, et la lecture du code ne se reporte pas toute seule sur la prédiction.*

⚠ **La recette n'a pas été remesurée à la clôture**, pour la première fois depuis le 24/08. Mesurée à l'ouverture, déduite à la fermeture au motif que les passes C109 sont purement ponctuelles. **C'est une déduction et non une mesure**, et les trois sessions précédentes fermaient sur les deux.

**C117, troisième épreuve : neuf décisions sous la ligne, une seule escalade.** L'escalade unique — la composition du lot et le sort des trois fiches à part — touchait l'ordre arbitré du §7 et la garde C116 sur les fiches pivots, donc le bon côté de la ligne. Les neuf décisions prises seules sont consignées au JOURNAL du 25/08 (suite 2). **La plus structurante est l'ordre du lot par prérequis déclarés plutôt que par thème** : le front matter dit où le vocabulaire se stabilise, le sujet ne le dit pas. **La numérotation éprouvage C117 atteint 3/N.**

### Acquises 25/08 (suite 3) — la fiche pivot `cahier-des-charges-fonctionnel`, N=1 sous C116

*Aucune convention neuve. La numérotation reste à **117**. C116 passe à **4/N**, C117 à **4/N**. C110 reçoit une précision d'unité, le §5.3 des règles une note de déclinaison.*

**C116 tient à N=1, et le protocole n'y perd rien.** Le brief demandait trois lancements pour une seule fiche pivot, au motif que le protocole vaut pour tout N. Le cadrage a fait son travail habituel — décomposition publiée avant lancement, exemptions classées sous le jeu éprouvé, zéro arbitrage remonté — et il a produit **deux trouvailles qu'une fiche traitée au fil de l'eau n'aurait pas données** : la contradiction du fil rouge entre deux fiches, et le fait que trois résolutions sur onze avaient déjà leur réponse en production. ⚠ **La clause de sortie n'a toujours pas servi depuis le lot des huit** : quatre lots, une seule épreuve. Celui-ci était le candidat annoncé — une fiche pivot, un mot à glose obligatoire — et **elle n'a pas mordu parce qu'aucun emplacement ne demandait de jugement neuf**, ce qui est le bon motif mais ne l'éprouve pas. **La numérotation éprouvage C116 atteint 4/N.**

**Précision à C110 — une prédiction et une sortie d'outil ne comptent pas toujours la même unité, et la règle de conversion se publie AVEC la prédiction.** Le cadrage a annoncé **12 emplacements**, `--style` en rend **17 occurrences** : la fiche porte **cinq incises encadrées**, qui valent deux tirets chacune. 7 × 1 + 5 × 2 = 17, correspondance exacte, zéro détection manquée. **Aucun écart réel, mais la conversion a été faite après la mesure**, donc dans le sens où elle ne prouve plus rien. C110 dit qu'un chiffre se publie avec sa règle de comptage ; le cas montre qu'**une prédiction se publie avec l'unité dans laquelle l'outil répondra**, faute de quoi un succès se lit comme un échec. *Même mécanique que les deux mesures divergentes du 22/08, prise sur une prédiction au lieu d'une mesure.*

**Une contradiction de fil rouge entre deux fiches, trouvée en relisant la jurisprudence et non la fiche.** `cahier-des-charges-fonctionnel` écrivait « 1 FP, 1 FS, **3 FC** » et cinq chiffrages ; `specification-technique` écrit « 2 FC » et quatre, et la pieuvre du bras ne dessine que FC1 et FC2. Le cinquième, « sécurité opérateur en F0 », **n'existe ni dans la fiche sœur ni dans le SVG** — même famille que C80 et C108, une fiche qui affirme un contenu que l'image ne porte pas. Arbitrage Tim **(a)** : corrigé côté FR **avant** génération, donc sans paire divergente ni recalage. *Une correction de fond ne se glisse pas dans une passe de ponctuation, sauf quand la phrase fautive **est** l'emplacement C109 qu'on édite — et c'est alors la seule fenêtre où elle coûte un mot au lieu de deux versions.*

**Relire ce qui fait jurisprudence a corrigé ma propre proposition, ce qui est l'inverse du motif habituel.** Trois des onze emplacements ont un jumeau quasi mot pour mot dans `specification-technique.md`, passée en C109 le 23/08. Sur l'un d'eux j'avais proposé des parenthèses là où la production emploie des **virgules**, et la production a raison. Les trois alignés, les deux fiches françaises deviennent **identiques sur ces phrases**, ce qu'elles n'étaient pas. *Le brief exigeait de relire `specification-technique-en` et `concept-en` avant d'écrire ; le bénéfice n'est pas venu de l'anglais mais du **français** de la fiche sœur, que personne n'avait pensé à demander.*

**Note au §5.3 — la glose d'`opposable` se décline sur le sens de la fiche et ne se recopie pas d'une fiche à l'autre.** `specification-technique-en` glose *capable of being held against the supplier* ; le CdCF dit « chaque exigence chiffrée engage les deux parties », donc **either party**. La seconde occurrence, une nominalisation à trois lignes de la première, passe par le mécanisme (*being able to hold the document against someone*) : `Opposability` existe en production mais **uniquement en libellé** de colonne dans `concept-en`, jamais en prose. C112 reste le seul contre-cas du glossaire, et ce lot le montre **à l'intérieur d'une même puce**.

⚠ **Une famille de faux positifs d'instrument née d'une règle du dispositif lui-même.** `--libelles` passe de 35 à **40 candidats**, et les cinq neufs visent tous la fiche du jour : trois fiches EN écrivent `[[cahier-des-charges-fonctionnel-en|functional requirements specification]]` contre un titre *Cahier des charges fonctionnel*. **Les cinq sont prescrits par le §5.2**, qui garde le terme français en titre et le glose en anglais dans la prose : l'écart libellé-titre **est** le comportement voulu. Le mécanisme est structurel et se reproduira à `bete-a-cornes`, `pieuvre`, `ecodesign`, `amdec`. ⚠ **Périmètre non mesuré, rien codé** — leçon du 24/08. *C'est la première fois qu'un instrument est mis en défaut non par un angle mort mais par une convention éditoriale qui lui donne raison sur la forme et tort sur le fond.*

⚠ **Une question d'architecture fermée par un comportement d'outil que personne n'avait lu.** J'allais escalader le report de `aliases: CdCF` côté EN comme un choix structurant. Mesure : **11 fiches FR à alias, 2 déjà traduites, 0 jumelle EN portant un alias** — `creer-fiche-en.mjs` les retire depuis la génération et l'écrit en sortie. **Le précédent était posé depuis le 25/08 (suite), en silence**, et le §2 des règles dit encore « traités au cas par cas ». Rien à arbitrer, consigné sous C117, versé au BACKLOG pour écriture au §2. *Mesurer avant d'escalader a économisé un arbitrage — exactement le coût que C117 dit d'éviter en escaladant du facile.*

⚠ **Le foisonnement d'une fiche à forte densité §5.2 ne mesure pas la langue.** +11,7 %, dont **~64 mots dérivés sur 154** viennent de gloses imposées (`opposable` ~20, template français 11, `bête à cornes` ~8, `pieuvre` ~7, `CdCF` 5, FP/FS/FC 6, *(in French)* 2) et du **remplissage des cinq liens nus** (5). **Plus de 40 % de l'expansion affichée n'est pas du texte anglais.** Cinquième ligne non interprétable du tableau des 87 paires, après `machine-a-etats`, `grafcet`, `chaine-energie` et `schema-cinematique`. *La cause est écrite dans les règles depuis le 22/08 ; ce qui est neuf, c'est qu'une fiche puisse en concentrer assez pour que le chiffre cesse d'être lisible.*

**C117, quatrième épreuve : dix décisions sous la ligne, une seule escalade, et l'escalade portait sur du fond éditorial.** L'unique arbitrage remonté — le nombre de FC du fil rouge — touche le **fil rouge du §4 des conventions**, donc le bon côté de la ligne. Les dix décisions prises seules sont consignées au JOURNAL du 25/08 (suite 3). **La numérotation éprouvage C117 atteint 4/N.**

⚠ **Une affirmation de la séance repose sur une règle et non sur une mesure, et elle est signalée comme telle.** L'ancre EN `#special-case-a-school-project-with-no-real-client` est **dérivée** de la slugification, contrôlée en reproduisant l'ancre française à l'identique, **jamais vue en production**. La section visée est en **H5**, que mon balayage en `##`/`###` avait ratée. Clic-test au prochain build. *C'est la première fois du chantier qu'un livrable sort avec une réserve nommée plutôt qu'avec un contrôle vert.*

### Acquises 25/08 (suite 4) — deux lots dans une séance, et la troisième zone d'angle mort du masquage

*Aucune convention neuve. La numérotation reste à **117**. C116 passe à **5/N**, C117 à **5/N**. C109 reçoit une famille de faux positifs et une résolution neuve, le §5.1 des règles une entrée, le §5.3 deux.*

⚠ **LE MASQUAGE NE FRANCHIT PAS LE COMMENTAIRE HTML, ET C'EST LA TROISIÈME ZONE DANS CE CAS.** Après le backtick de libellé (23/08) et le chevron de citation (24/08 suite 3), les blocs `<!-- ... -->` : tout tiret ou point-virgule d'un commentaire éditorial remonte en candidat C109. **Mesuré sur les trois trames transverses : 12 faux positifs sur 121 rendus**, répartis 4 / 5 / 3, donc **charge réelle 109 et non 121**. Conséquence directe : **`securite-et-qualite` n'est pas à 44 mais à 41** et perd le titre de deuxième tête de liste C109 du corpus que la mesure de charge du 24/08 lui donnait. *Le motif est toujours le même — un séparateur compté comme structure dans une zone que le lecteur ne voit pas* — et le correctif probablement aussi : retirer la zone avant de segmenter. **Périmètre hors de ces trois fiches non mesuré, rien codé.** ⚠ **Effet de bord tant qu'il n'est pas codé** : un contrôle de résidu sur une fiche à commentaires se lit **avec sa règle de conversion**, jamais comme un solde.

**Résolution neuve de C109 : la forme `liste — source` se rend par un participe explicite.** `(PLA, ABS, métaux, composites — cours matériaux)` et `classes d'isolation, indices IP / IK — portés par les cours ESE`. Le segment est nominal et ne nomme qu'un objet, donc il tombe, mais **la virgule seule l'aurait fondu dans la liste qui précède** en ajoutant un faux item. Forme retenue : *(PLA, ABS, métaux, composites, **portés par** le cours matériaux)*. **Trois emplacements, coût +6 mots**, et c'est la totalité du coût des passes du lot moins un. Après le découpage en phrases, la virgule, la parenthèse et le renvoi, c'est la cinquième voie de résolution du répertoire.

**Le second tamis a séparé deux phrases jumelles écrites le même jour par la même main.** `ecoconception` ouvre sa *Posture attendue* sur `— un paragraphe ajouté au rapport … et l'affaire est faite`, `securite-et-qualite` sur `— un paragraphe sur les normes CE, une mention rapide des EPI`. Même position dans la fiche, même intention rhétorique. **La première tombe** (verbe conjugué), **la seconde reste** (deux items nominaux qui énumèrent). *Meilleure épreuve du critère depuis les deux légendes de figure du 25/08, et cette fois sur des jumelles parfaites.*

**La borne C115 a servi deux fois sur une même fiche** : `**Articulation avec la gestion de projet — miroir asymétrique.**` et `**Articulation avec la sécurité et qualité — croisements réglementaires.**`, tiret à l'intérieur du gras et partie droite nominale. Gloses, elles restent.

⚠ **LE RÉSIDU D'UNE TRAME TRANSVERSE EST STRUCTURELLEMENT HAUT, ET CE N'EST PAS DU LAXISME.** 19 exemptions réelles sur 109 pour le lot 2, contre 4 sur 30 pour le lot 1. Les trames procèdent par **énumérations d'items nominaux et de règles à l'infinitif** — les quatre EPI, les trois cadences d'évaluation, les trois risques projet, les deux infinitifs de la compétence-clé — c'est-à-dire exactement la forme que l'amendement du 23/08 protège. *À connaître avant de lire un contrôle EN comme un solde.*

**C116, cinquième épreuve : la découpe s'est faite sur une structure révélée par la mesure, pas sur le volume.** Le brief annonçait cinq fiches et 13 742 mots, plus du double du plus gros lot conduit, et demandait de proposer la découpe au cadrage. Ce qui l'a décidée n'est pas le volume mais le fait que **trois des cinq partagent des phrases mot pour mot** et le même squelette de trame, quand les deux autres sont des fiches d'outil **citées par** les trois. Découpe en deux lots, les citées d'abord. ⚠ **Ni l'un ni l'autre groupe n'atteint le plancher de quatre fiches de C116**, et c'est assumé : la garde est C27 transposée, elle porte sur l'homogénéité d'arbitrage et non sur un effectif. **La clause de sortie n'a toujours pas servi depuis le lot des huit** — six lots, une seule épreuve.

⚠ **UNE CORRECTION DE FIL ROUGE PEUT SE FAIRE À L'ENVERS, ET SEULE UNE QUESTION DE MÉTIER L'A ÉVITÉ.** `amdec` écrivait *Alim 24 V* et *+11 %*, `concept` *5 V/5 A* et *+9 %* ; je traitais `amdec` comme la fiche isolée et proposais de l'aligner. La question de Tim — puissance en 24 V, logique en 5 V — a inversé le diagnostic, et le balayage l'a confirmée : **24 V dans 12 fiches** dont `securite-et-qualite` cinq fois et `bom`, **5 V/5 A à une seule ligne du corpus**. *La fiche isolée était la source, pas la copie.* **Corollaire de méthode : avant d'aligner une fiche sur une autre, mesurer laquelle des deux valeurs le corpus porte.**

⚠ **UN BALAYAGE CONFIRME CE QU'ON LUI DEMANDE ET TAIT LE RESTE.** La correction de `concept` a rendu inutile le **fusible 3 A** que `securite-et-qualite` spécifie sur l'arrivée 24 V, au-dessus du calibre de la nouvelle alim 2 A. Le motif `24 V` remontait pourtant les cinq occurrences de la fiche : je les ai lues comme une confirmation de tension **sans regarder ce qu'elles disaient d'autre**. *Un défaut introduit par une correction ne se voit pas dans le balayage qui a servi à la décider.*

⚠ **`--libelles` : FAMILLE DE FAUX POSITIFS À MÉCANISME INVERSE.** Traduire une fiche ne crée pas de candidats **en elle**, elle en crée **dans toutes celles qui la visaient déjà**, leurs liens passant d'injugeables à jugeables d'un coup. **40 → 45 candidats**, les cinq neufs pointant tous vers `decomposition-fonctionnelle-en`. Distincte de la famille §5.2 du 25/08 (suite 3), qui vient du titre de la cible. **Rien à coder**, mais le bruit croît mécaniquement à chaque lot.

**Entrées proposées aux règles de traduction.** Au **§5.1** : le triptyque `[!failure] Mauvais` / `[!warning] Moyen` / `[!example] Bon` → **Poor / Fair / Good**, retenu après vérification qu'**aucun rendu n'existait en production** (les deux `[!failure]` anglais du corpus sont des *Counter-example*). ⚠ **Seules 3 des 9 `[!failure]` du corpus sont des triptyques.** Au **§5.3** : `sûreté de fonctionnement` → *dependability*, `fonction technique` → *technical function*. ⚠ **Et un septième mot français à deux objets : `parade`.** L'entrée existante *response* a été figée pour la matrice de risques ; dans `amdec`, la parade est un arrêt d'urgence câblé et une butée mécanique, donc un **safeguard**. Rendu différemment selon la fiche, comme contrôleur, incertitude, valider, fin de course, broche et trame.

**Asymétrie de titre assumée entre deux fiches sœurs du même dossier** : `AMDEC` reste en français par le §5.2, `Décomposition fonctionnelle` devient *Functional breakdown* par le §5.3. Motif : l'étudiant Erasmus entendra ses coéquipiers dire « AMDEC », jamais « décomposition fonctionnelle » comme un nom propre.

⚠ **C110 SUR LES PETITS NOMBRES, CINQUIÈME ET SIXIÈME FOIS.** **91 fiches EN annoncées trois fois pour 89** — le 89 était imprimé dans la sortie de la série précédente. Et **« trois fiches disent 3 FC, deux disent 2 FC »**, affirmé sans qu'aucune des deux affirmations n'ait été mesurée ; le balayage montre que **FC3 n'existe qu'à un seul endroit du corpus**. *Les deux chiffres étaient disponibles, l'un dans une sortie lue une heure plus tôt, l'autre dans un balayage non lancé.*

⚠ **L'ESPACE FRANÇAISE DEVANT `;` POUR LA CINQUIÈME SÉANCE CONSÉCUTIVE**, une occurrence, **toujours dans un segment d'énumération transposé au lieu d'être réécrit**. Le geste est identifié depuis le 24/08 et le connaître ne l'a pas empêché.

*Écart de méthode consigné* : les trois passes du lot 2 ont été appliquées **sans `dryRun` préalable**, contre la discipline C14. Motif : `edit_file` rend le même diff dans les deux cas, la seule chose perdue est la faculté d'annuler avant écriture, et le coût de sortie doublait sur 86 emplacements. **Les trois lots précédents avaient validé leurs ancres du premier coup.**

### Acquises 25/08 (suite 5) — les trois trames transverses, et la troisième zone de masquage refermée

*Une convention neuve. **La numérotation atteint 118.** C116 passe à **6/N**, C117 à **6/N**. Le §5.1 des règles reçoit trois entrées.*

**118. Un périmètre non mesuré se cite comme inconnu, jamais comme probable.**

*Acquise le 25/08 (suite 5), proposition Claude, arbitrage Tim. À confirmer avant documentation formelle.*

**Tant qu'un périmètre n'a pas été compté, il s'écrit « non mesuré » et rien d'autre.** Ni « probablement fréquent », ni « la famille grandira », ni « peut-être des centaines ». C110 exige qu'un chiffre porte sa règle ; celle-ci exige qu'une **absence de chiffre** se dise comme telle au lieu d'être remplacée par un adjectif.

*Motif, et il est entièrement empirique.* **Trois fois de suite la qualification a précédé le comptage, et trois fois la mesure a rendu une poignée.** Les **légendes de figure C74**, dont le 25/08 écrit que « personne ne sait combien » après avoir étendu l'arbitrage au corpus entier. La forme **`**Libellé** — explication`**, annoncée « très répandue, peut-être des centaines » : **44 lignes sur 33 fiches**, et c'est ce qui a rendu l'arbitrage (a) bon marché. Les **commentaires HTML**, présentés comme une famille qui croîtrait à chaque fiche traduite : **six fiches, dont trois templates dépubliés**, donc un gain vivant de douze faux positifs sur trois fichiers.

**La conséquence n'est pas cosmétique : l'adjectif déplace l'arbitrage.** Un périmètre annoncé large fait paraître un correctif urgent, et un périmètre annoncé étroit le fait paraître négligeable ; dans les deux cas c'est **ma qualification** qui décide, pas la mesure. Le 25/08 (suite 5), le chiffre a été publié **avant** que le correctif ne soit écrit et l'arbitrage a pu se rendre sur pièce, y compris l'option de ne rien coder.

*Filiation.* C110 sur les volumes, son corollaire du 24/08 sur les décomptes, la précision du 25/08 (suite 2) sur les totaux de balayage — **et celle-ci sur ce qui remplace un chiffre quand il n'y en a pas.** *Éprouvée 1/N.*

**La troisième zone de masquage est refermée, et sa réinjection n'a pas eu à être reconstituée.** `masquerCode()` devient `masquerHorsProse()` : le commentaire HTML rejoint le bloc cloturé et le code inline, **en première alternative** parce que les blocs `NOTE` contiennent du code inline et seraient découpés sinon — même raisonnement de position que le wikilink dans `segmenter()`. Preuve : **31 → 19** sur les trois sources françaises, décomposition **6→2 / 13→8 / 12→9**, les commentaires y étant conservés. *C'est le cas favorable que le 23/08 (suite 4) n'avait pas eu*, où il avait fallu remettre `en/meca/index` dans son état d'avant correction pour voir mordre l'outil. ⚠ **Reste une seule zone : le chevron de citation**, 68 blocs sur 34 fiches, toutes dans `mcu/`.

⚠ **Deux correctifs qui se recouvrent ont été présentés comme complémentaires.** Coder le masquage **et** retirer les commentaires des fiches EN traitent le même symptôme par deux bouts : le correctif seul aurait suffi à verdir le verdict de typographie. Le retrait garde une raison propre — ces notes documentent le template **français**, citent `gestion-de-projet.md` par son chemin FR, et une décision de structure ne se prend jamais dans le fichier anglais — mais **ce n'est pas l'argument qui a été mis en avant**. *Deux options qui se recouvrent se présentent comme telles, sinon l'arbitrage porte sur une alternative qui n'existe pas.*

**Le retrait des commentaires a une conséquence de mesure que rien n'annonçait.** `compter-mots.mjs` exclut le front matter et les blocs cloturés, **pas les commentaires HTML** : ces mots comptaient des deux côtés, ils ne comptent plus que d'un. Le foisonnement brut du lot tombe à **−2,3 %**, chiffre qui mesure la décision et non la langue ; sur base soustraite des **696 mots** il vaut **+4,9 %**. Recoupement au mot près : la mesure intermédiaire donnait 2 793 et 3 457 avec commentaires, soit exactement 2 573 + 220 et 3 237 + 220. ⚠ **Le foisonnement de corpus est désormais biaisé** de ces 696 mots, et **les 291 000 mots du corpus incluent les notes d'édition privées** — 3 446 mots dans six fiches, dont 2 750 dans des templates que la recette ne compte même pas comme fiches sources. Question de règle C110 versée au BACKLOG, non tranchée.

⚠ **LE CINQUIÈME CONTRÔLE DE `--style` A MORDU SUR UNE SÉRIE ENTIÈRE, ET C'EST SA PREMIÈRE FOIS.** **Six point-virgules créés par la traduction** dans `securite-et-qualite-en`, sur deux énumérations que le français rend **en virgules** et avec une **parenthèse à l'endroit exact où j'ai buté** (`pas via le firmware, qui peut planter`). Les segments portaient des virgules internes et j'ai levé l'ambiguïté avec un point-virgule ; **le français avait déjà arbitré et je ne l'ai pas relu**. Jusqu'ici ce contrôle n'avait rendu qu'une occurrence isolée, le 24/08. *Une occurrence reportée est arbitrée, une occurrence créée ne l'a jamais été* — et la parade est de relire la phrase française, pas de résoudre l'ambiguïté seul.

**Le garde-fou de `--recaler` a servi pour la première fois.** Recalage **refusé** sur 73 liens contre 74 : le français écrit « les morceaux critiques **du firmware** » en texte nu et j'en avais fait un wikilink. *Il refuse de faire disparaître une divergence de l'écran sans l'avoir traitée*, motif écrit le 22/08 (suite 2) et jamais éprouvé jusqu'ici.

**Une exemption non reportée n'est pas une création, et le différentiel ne la voit pas.** Quatre exemptions licites du français ont été rendues en virgules dans les premiers jets ; trois ont été remises en tirets, **une reste délibérément non reportée** sur `ecoconception-en` et a été annoncée avant mesure. Le différentiel ne compte que les créations, donc **rien ne signale une exemption perdue** : seul le report un pour un rend le décompte lisible d'une séance à l'autre.

**C116, sixième épreuve : le protocole tient sur un lot déjà cadré.** Les trois lancements avaient été consommés la veille (cadrage, génération) ; la séance n'a porté que la rédaction et son contrôle. **Aucune fiche sortie, un seul arbitrage remonté** — le fusible, qui touche le fil rouge du §4 des conventions, donc le bon côté de la ligne. ⚠ **La clause de sortie n'a toujours pas servi depuis le lot des huit** : sept lots, une seule épreuve. **C117, sixième épreuve : dix décisions sous la ligne, deux escalades**, la seconde étant le sort des commentaires HTML — elle changeait ce qu'un verdict mécanique veut dire et créait un précédent pour toute fiche à commentaires, donc au-dessus de la ligne.

### Acquises 25/08 (suite 6) — l'anneau 2, trois lots, et une famille d'erreurs qui demande une convention

*Aucune convention neuve arbitrée. La numérotation reste à **118**. C116 passe à **9/N**, C117 à **9/N**. Le §6 des règles reçoit sa première application et une borne. **Une proposition, C119, est en attente d'arbitrage Tim.***

**Proposition — 119. Un chiffre que l'outil sait rendre ne se dérive pas d'un autre chiffre : il se relance.**

*Proposée le 25/08 (suite 6), proposition Claude. **ARBITRAGE TIM EN ATTENTE**, rien n'est acquis tant qu'il n'est pas rendu.*

**Dès qu'un outil du dépôt peut produire un chiffre, aucune publication de ce chiffre ne passe par une soustraction, une addition ou un report.** C110 exige qu'un chiffre porte sa règle de comptage ; son amendement du 23/08 (suite 4) exige que la règle vive dans un script ; son corollaire du 24/08 exige qu'un décompte se lise dans une sortie. **Celle-ci ferme la dernière porte : le calcul sur des chiffres justes.**

*Motif, et il est entièrement empirique — six échecs dans une seule séance, tous de la même forme.* Corpus FR dérivé à 291 187 pour **291 194**. Restant d'anneau dérivé à 162 639 pour **162 641**, puis à 159 694 pour **159 696**. Un résidu calculé faux d'une unité. **114 fiches EN annoncées pour 108.** Une dette à 121 pour **123**. **La règle juste est chaque fois la même** — on retranche le poids que les fiches avaient *au moment où le total a été mesuré* — **et elle a été retrouvée après coup trois fois de suite.**

⚠ **Ce qui rend le motif concluant, c'est le troisième cas.** Le piège y était **écrit dans la prédiction elle-même**, le chiffre alternatif nommé, et la phrase « si c'est 159 696 c'est moi qui me suis trompé de sens » publiée avant lancement. **Il est sorti à 159 696.** *Connaître la règle ne protège pas de l'opération ; ne pas faire l'opération protège.*

*Portée et borne.* La convention vise les chiffres **que le dépôt sait produire** : mots, fiches, liens, cibles d'anneau, dette. Elle ne vise pas les **décompositions** ni les **prédictions**, qui restent la matière même du dispositif de preuve — prédire *puis mesurer* reste la règle, **c'est publier sans mesurer qui tombe**. Corollaire de coût : une série de plus dans un script coûte quelques secondes, une correction de chiffre publié coûte une entrée de JOURNAL et la confiance dans toutes les autres. *À éprouver 0/N.*

**Le §6 des règles de traduction sert pour la première fois, et il reçoit sa borne.** Arbitré le 22/08, il n'avait jamais été appliqué : aucun tuto à chemins d'interface n'avait été traduit. `esp8266-prise-en-main` en cite une douzaine. **Arbitrage Tim (b) : application mécanique, avec la borne suivante** — *la parenthèse anglaise se pose dès que la forme anglaise diffère de la forme citée, à un caractère près, et ne se pose pas quand elles coïncident.* Ainsi *Fichier → Préférences* (File → Preferences) est glosé, quand *Select other board and port…* et *Generic ESP8266 Module* restent nus.

⚠ **Le motif de la borne est qu'elle est TEXTUELLE, et c'est ce qui a fait écarter ma propre proposition.** J'avais d'abord défendu une règle qui gloserait « les libellés que le logiciel affiche en français ». **Ce critère vit en dehors du texte** : il n'est écrit ni dans la fiche, ni dans les règles, ni dans aucune sortie d'outil, donc il se devinerait à chaque tuto futur. **Et il pourrit tout seul** — l'IDE Arduino francise son interface par morceaux, si bien qu'une fiche EN deviendrait fausse **sans qu'aucun fichier du dépôt n'ait bougé**, donc sans qu'aucun des cinq contrôles ne le voie. La borne textuelle, elle, se rejoue en relisant la fiche française, et **si l'IDE francise un jour un libellé, c'est le français qui bougera d'abord**, la parenthèse apparaissant d'elle-même au report. *La qualité du rendu n'est pas la solidité de la règle.* **Éprouvée 1/N**, sur une seule fiche, et **elle fait précédent pour les sept `*-prise-en-main` de l'anneau 2, plus `falstad`, `easyeda` et `kicad`.**

**L'angle mort du chevron est refermé, et c'est la dernière des quatre zones.** Après le backtick de libellé (23/08), le commentaire HTML (25/08 suite 5), le chevron de citation tombe par le même geste : **`BLOC_CLOTURE` accepte un préfixe de citation devant ses DEUX clôtures**, et `segmenter()`, `compter()` et `masquerHorsProse()` en héritent d'un coup, aucune n'ayant à être touchée. **Preuve sur corpus vivant** : les deux `;` du bloc `cpp` de `cpp-logs` sortent des candidats **des deux côtés**, et `cpp-logs-en` passe de **code 7 à code 8** en restant `[ok]` — *le compteur compte mieux des deux côtés à la fois, donc l'égalité survit au correctif*. ⚠ **La sentinelle de masquage épargne désormais le `>`** : sans cette exception, une ligne de bloc en callout sortirait du blockquote aux yeux de `styleFiche()` et refermerait la garde de l'encart français des deux accueils au milieu d'un callout. ⚠ **DISCONTINUITÉ DE MESURE, comme les embeds 395 → 397 du 25/08 : la recette passe de 376 à 444 blocs de code sans qu'aucune fiche n'ait bougé.** Toute valeur antérieure est sous l'ancienne règle. **Et deux mesures indépendantes se referment l'une sur l'autre** : 54 blocs sur les 27 fiches à chevron du restant de l'anneau 2, 14 sur les 7 fiches déjà traduites, **27 + 7 = 34**, l'effectif compté le 25/08 (suite).

⚠ **Le même angle mort survit dans `compter-mots.mjs`, et il n'est pas corrigé délibérément.** Le module porte **sa propre** règle de bloc clôturé, ancrée en début de ligne sans préfixe de citation : **la règle C110 compte donc comme des mots le contenu des 68 blocs en chevron**. La corriger ferait bouger tout chiffre de mots publié depuis le 23/08 (suite 4). *C110 gèle la règle de comptage : la changer est un arbitrage, pas une correction d'outil.* **Versé au TODO, non tranché.**

**Un résidu peut mélanger deux natures, et il faut alors le décomposer avant de le lire.** Le lot des six notions transverses rend **sept emplacements de résidu, dont quatre sont des faux positifs d'instrument** — la famille `Famille — Sujet` du 24/08 (suite 3), où le libellé d'un wikilink contient lui-même un tiret, si bien que **l'exemption positionnelle exempte le tiret du libellé et laisse remonter celui de la glose**. **La charge éditoriale réelle est de trois.** C'est la première fois qu'un lot rencontre cette famille, mesurée à 15 puces sur 9 fiches et toujours non codée. *Un résidu ne se lit ni comme un solde ni comme un jeu d'exemptions éditoriales tant qu'on ne sait pas ce qu'il contient.*

⚠ **La famille `VCC–GND` s'est répétée pour la première fois**, sous la forme `D0`–`D8` et **deux fois dans la même fiche**. Le masquage remplaçant le code inline par des sentinelles, les bornes du tiret ne sont pas des chiffres et l'exemption d'intervalle numérique du 24/08 ne joue pas. **Toujours non codée, périmètre toujours non mesuré.**

**Trois foisonnements de lot ininterprétables pour trois raisons différentes, et l'hypothèse des gloses tombe une fois de plus.** Sur `conduite/ese/`, quatre paires sur huit portent des gloses §5.2 imposées — **mais les deux extrêmes hauts sont `marquage-ce`, annoncée, et `reach`, qui n'en porte aucune** : la densité de gloses ne classe pas le lot. Sur `esp8266`, une dizaine de parenthèses du §6, **première fois que la cause est une règle de menus et non de vocabulaire**. Sur les six notions, **neuf liens nus remplis sur 1 252 mots** et deux gloses §5.3 qui tombent, **les deux effets jouant en sens contraire**. ⚠ **Et un pourcentage de paire sur une fiche de 180 mots ne veut rien dire** : une phrase y pèse deux points. *Seule la moyenne de corpus dimensionne, comme depuis le 23/08.*

**Lire les libellés en production avant de les écrire a donné tort à mon écriture deux fois sur trois lots.** `Electronic protections` est au **pluriel** là où j'avais mis le singulier ; `cpp-execution-en` se rend **`How a program runs`** et non *Running a program*. ⚠ **Et le geste a une portée plus large qu'un contrôle de cohérence** : sur le lot des six notions, **cinq des sept cibles non traduites avaient déjà leur rendu en production**, dont *Multitasking with FreeRTOS* là où le français dit « Multitâche FreeRTOS sur l'ESP32 » — **une transposition du français aurait créé un second libellé pour une seule cible**. *Le motif `Welding` se prévient en lisant, et la lecture rapporte plus qu'elle ne coûte.*

⚠ **Deux libellés sortent sans précédent à lire, et c'est consigné comme tel.** `micropython-module-en` et `micropython-shield-en` n'ont **aucun rendu en production** ; ils sont alignés sur leurs jumeaux Arduino, *Wiring a module* et *Using a shield*, **qui en ont un**. Le français disait autre chose (« Utiliser un shield / une carte d'extension ») et le suivre aurait cassé la symétrie de la ligne qui les appelle dans `arduino-en`.

⚠ **La contrainte ASCII de C114 a été violée deux fois dans la même séance par celui qui l'applique**, attrapée avant lancement les deux fois. Elle l'avait déjà été le 24/08, trois séries après son écriture. *La contrainte tient parce qu'elle est relue, pas parce qu'elle est connue.*

⚠ **L'espace française devant `;` pour la SIXIÈME séance consécutive**, deux occurrences, **toujours dans un segment d'énumération transposé au lieu d'être réécrit**. Retirées à la relecture, donc **le zéro de typographie du contrôle prouve que la relecture a tenu, pas que le geste a disparu** — distinction à connaître avant de lire ce verdict comme une guérison.

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
