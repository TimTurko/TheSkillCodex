# PRÉDICTIONS — 31/08, CHANTIER « SITE EXPLOITABLE PAR UNE IA » (séance 16)

> Suite de `tools/predictions-260830.md`, qui s'arrête au **bloc 161**
> (séance 12 du 30/08, dernière séance Code). Les séances 13, 14 et 15 du
> 31/08 se sont tenues en **chat Desktop** et n'ont donc pas de blocs
> d'exécution numérotés. **La numérotation reprend au bloc 162.**

## En-tête de séance

- **Séance** — 31/08, **seizième**, **PC perso**, onglet **Code**, modèle
  **Opus 5**, exécution directe.
- **Objet** — poser en entier le chantier « site exploitable par une IA »
  spécifié au **§ 8 de `_drafts/cadrage-ia-quatre-mains.md`**, dans l'ordre
  du brief : **bloc A** (A1 `rawMarkdown.ts`, A2 `llmsTxt.ts`, A3 `Head.tsx`,
  A4 `quartz.layout.ts`, A5 déclaration XML du sitemap), **bloc B** (B1
  `robots.txt`, B2 passe `lang: en` sur 242 fiches, B3 squelette du
  générateur), **bloc C** (C1 `content/ia/index.md`, C2 exemption
  `bilingue: true`, C3 carte des cinq phases sur les racines, C4 phrase du
  hub `conduite/`), puis **contrôle en ligne** après push et CI.
- **Textes** — les quatre sections de `_drafts/textes-ia-brouillon.md`,
  **validées par Tim le 31/08 (séance 15)**, sont posées **telles quelles,
  sans réécriture**.
- **Hors périmètre, explicitement** — le **chantier des puces à tiret** :
  bloc 0 et bloc 1 restent intacts, ils viennent après la rentrée. **Aucune
  glose au cadratin n'est créée** dans les textes neufs (§ 8, entrée du
  31/08).
- **Régime** — sous-règle C116 (« exécution directe ») et ses termes (1) à
  (9), avec l'amendement du 30/08 (une prédiction de compteur se publie sous
  la forme de la **ligne exacte** attendue) ; C110, C118, C119, C120, C121
  (aucun commit, aucun push : ils sont à Tim), C124, C130, C131 et son
  amendement du 29/08 (suite 8). Un volume se mesure par
  `Buffer.byteLength`, **jamais** par `.length`.

## Déclaration C131 d'ouverture — bloc 162

- **Population du compteur `fichiers modifies non commites`** : entrées de
  `git status --porcelain` sur **tout le dépôt**, lues à l'**étape 1** de
  `batterie.ps1` (ligne `$sale = ($etatGit | Measure-Object).Count`), donc
  **après** la copie C124 de l'étape 0. Le second chiffre,
  `hors artefacts de seance`, retire les entrées dont la ligne porte
  `batterie-sortie` **ou** `predictions-` — filtre lu dans le code à la ligne
  `$saleHors`, et non dans la ligne d'affichage (C116 (7)).
- **État de départ** — arbre **propre** au lancement de la séance,
  `HEAD 3a95a82` (« seance 15 : textes du chantier IA valides, deux entrees
  SS8, pilotage »). Aucune entrée de `git status` avant les versements
  ci-dessous.
- **Artefacts déjà versés par cette séance au moment de la lecture — deux, et
  ils sont nommés** :
  1. `tools/predictions-260831.md`, **créé** par le présent append — entrée
     `??`, filtrée par `predictions-` ;
  2. `tools/batterie-sortie-3108b2.txt`, **créé** par l'étape 0 du lancement
     qui compte — entrée `??`, filtrée par `batterie-sortie`.
  `tools/batterie-sortie.txt` est **gitignoré** (`.gitignore:60`, chemin
  exact) et ne compte pas.
- **Total impliqué** — `fichiers modifies non commites : 2`,
  `hors artefacts de seance : 0`.

## Prédictions — bloc 162, garde de péremption d'ouverture

Commande : `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

Lignes attendues, dans l'ordre où le script les écrit :

- **P162.1** — étape 0, autocontrôle C122 :
  `lignes non ASCII dans batterie.ps1 : 0`
- **P162.2** — étape 0, copie C124. `tools/batterie-sortie.txt` existe
  (lu au bloc de préparation), `ddMM` vaut `3108`, et
  `tools/batterie-sortie-3108b1.txt` existe déjà : le premier rang libre est
  **2**.
  `sortie precedente copiee : tools\batterie-sortie-3108b2.txt`
- **P162.3** — étape 1, en-tête de phase (les valeurs par défaut `-Anneau 2`
  et `-Chevron` absent) :
  `phase demandee : garde   anneau : 2   chevron : False`
- **P162.4** — étape 1, horloge. La **date** est prédite, l'**heure** ne l'est
  pas (elle se lit) :
  `date ISO : 2026-08-31   heure : HH:mm:ss`
- **P162.5** — étape 1, HEAD git, format `%h %cd --date=iso` :
  `HEAD git : 3a95a82 2026-08-31 HH:MM:SS +0200`
  (le **hash court `3a95a82`** est prédit ; l'horodatage du commit se lit)
- **P162.6** — étape 1, compteurs git, conformément à la déclaration C131
  ci-dessus :
  `fichiers modifies non commites : 2   (hors artefacts de seance : 0)`
- **P162.7** — étape 1, version de node, lue dans
  `tools/batterie-sortie.txt` (dernier lancement sur ce poste, 31/08 00:07) :
  `node : v24.15.0`
- **P162.8** — étape 1, dates d'écriture. Les trois fichiers de pilotage ont
  été **écrits sur le PC pro** aux séances 13 à 15 puis **rapatriés par git**
  sur ce poste : leur `LastWriteTime` local est celui de la **synchronisation
  du 31/08**, postérieure au dernier relevé de ce poste
  (`JOURNAL.md 2026-08-30 23:44:11`, `conventions.md 2026-08-30 23:19:22`,
  `TODO.md 2026-08-29 21:48:08`). Trois lignes attendues, **toutes datées du
  `2026-08-31`**, l'heure se lisant :
  ```
    JOURNAL.md                                          2026-08-31 HH:MM:SS
    conventions.md                                      2026-08-31 HH:MM:SS
    TODO.md                                             2026-08-31 HH:MM:SS
  ```
  ⚠ **Cet écart avec le relevé précédent est ATTENDU et EXPLIQUÉ** — il est la
  trace du `git pull` de rapatriement, non d'un second écrivain. La garde ne
  mord que sur un écart **inexpliqué** ; celui-ci est prédit avant lecture.
- **P162.9** — aucune étape 2 et suivantes : `-Phase garde` s'arrête après
  l'étape 1. **Deux blocs `Etape` au total**, deux lignes
  `--- code de sortie : 0`.
- **P162.10** — dernière ligne du lancement :
  `Sortie ecrite dans tools\batterie-sortie.txt`

### Bilan du bloc 162 — garde de péremption d'ouverture

**10 prédictions, 10 tenues, 0 réfutée.**
`lignes non ASCII : 0` ; copie `tools\batterie-sortie-3108b2.txt` ;
`phase demandee : garde   anneau : 2   chevron : False` ;
`date ISO : 2026-08-31   heure : 20:58:03` ;
`HEAD git : 3a95a82 2026-08-31 14:30:33 +0200` ;
`fichiers modifies non commites : 2   (hors artefacts de seance : 0)` ;
`node : v24.15.0` ; les trois fichiers de pilotage à
`2026-08-31 20:53:33` — **même seconde pour les trois**, signature d'une
synchronisation git et non de trois écritures : l'écart au relevé du poste
(30/08) est **celui qui était prédit**. Deux blocs `Etape`, deux
`--- code de sortie : 0`.
✅ **Rien d'inattendu. La séance peut écrire.**

---

## Déclaration C131 du bloc 163 — rejouée, un versement neuf

- **Population** — inchangée (entrées de `git status --porcelain`), mais ce
  bloc **n'écrit aucun fichier** : il ne fait que lire et compter.
- **Versements de la séance à ce point — trois** :
  1. `tools/predictions-260831.md` (`??`, filtré `predictions-`) ;
  2. `tools/batterie-sortie-3108b2.txt` (`??`, filtré `batterie-sortie`) ;
  3. `tools/batterie-sortie.txt` — **gitignoré**, ne compte pas.
- **Total impliqué s'il était relu maintenant** —
  `fichiers modifies non commites : 2   (hors artefacts de seance : 0)`,
  inchangé.

## Prédictions — bloc 163, état d'ouverture du corpus et du périmètre neuf

⚠ **Épreuve C110 d'abord.** Les deux motifs de ce bloc sont `^source_fr:` et
`^lang:`, ancrés en début de ligne. **Échantillon nommé, choisi pour contenir
ce qui pourrait les faire mordre à tort** : (a)
`content/en/conduite/proj/concept-en.md`, qui porte `source_fr:` en front
matter et **aucun** `lang:` ; (b) `content/conduite/proj/concept.md`, sa
jumelle FR, qui ne porte ni l'un ni l'autre ; (c) **la population large
`lang:` sans ancre**, sur tout `content/`, qui attraperait un `lang:` en
milieu de ligne — attribut HTML `<section lang="en">`, ligne de bloc de code,
prose. Le troisième compte est publié **à côté** du compte ancré : si les deux
diffèrent, l'ancre est ce qui les sépare.

- **P163.1** — `find content/en -name '*.md' | wc -l` → `242`
- **P163.2** — `find content -name '*.md' -not -path 'content/en/*'
  -not -path 'content/templates/*' | wc -l` → `243`
- **P163.3** — `grep -rlE '^source_fr:' content/en --include='*.md' | wc -l`
  → `242` (la carte FR→EN de A2 a donc **242 clés**, aucune fiche EN sans
  source déclarée)
- **P163.4** — `grep -rlE '^lang:' content --include='*.md' | wc -l` → `0`
  (aucune fiche du corpus, FR ou EN, ne porte le champ aujourd'hui : c'est
  exactement ce que B2 vient poser)
- **P163.5** — `grep -rl 'lang:' content --include='*.md' | wc -l` → `0`
  également. **Prédiction de monde, et c'est celle qui peut tomber** : si le
  corpus porte un `<section lang="en">` ou une ligne de code contenant
  `lang:`, ce compte est **supérieur** à P163.4 et l'ancre est ce qui les
  sépare.
- **P163.6** — `test -e content/ia; echo $?` → `1` (le dossier n'existe pas)
- **P163.7** — `test -e content/robots.txt; echo $?` → `1`
- **P163.8** — `find public -name '*.md' | wc -l` → `0` : `assets.ts` exclut
  `**/*.md` de sa copie, et aucun émetteur n'écrit de `.md` aujourd'hui.
  C'est la **valeur avant A1**, dont A1 fera **484** puis **485**.
- **P163.9** — `ls content/en | wc -l` → `4` : les quatre dossiers de branche
  reflétés côté EN (`conduite`, `embarque`, `meca`) plus `index.md`.
  *Prédiction de monde.*

### Bilan du bloc 163 — état d'ouverture

**9 prédictions, 9 tenues, 0 réfutée.**
`242` / `243` / `242` / `0` / `0` / `1` / `1` / `0` / `4`.
**Épreuve C110 tenue** : l'échantillon (a) rend la seule ligne
`22:source_fr: conduite/proj/concept.md` et **aucun** `lang:` ; (b) rend
**rien**, code 1. Le compte **ancré** (P163.4) et le compte **non ancré**
(P163.5) sont **tous deux à 0** : la population large est vide, donc l'ancre
n'a rien eu à séparer. ⚠ *L'épreuve est donc **faible sur ce corpus** — elle
montre que le motif ne mord pas à tort, elle ne montre pas que l'ancre sert.
Elle servira au contrôle d'après B2, où la population large restera à 242 si
et seulement si aucune ligne non ancrée n'a été introduite.*
✅ **La carte FR→EN de A2 a 242 clés** : les 242 fiches EN portent toutes
`source_fr`. Le « 1 sans jumelle » attendu est bien `ia/index`, à naître.

---

# BLOC A — MACHINERIE QUARTZ, AUCUN CONTENU

## Déclaration C131 du bloc 164 — rejouée, deux versements neufs

- **Population** — entrées de `git status --porcelain`, lues à la fin du bloc.
- **Artefacts de la séance à ce point — quatre** :
  1. `tools/predictions-260831.md` (`??`, filtré `predictions-`) ;
  2. `tools/batterie-sortie-3108b2.txt` (`??`, filtré `batterie-sortie`) ;
  3. **neuf** — `quartz/plugins/emitters/rawMarkdown.ts` (`??`, **non filtré**) ;
  4. **neuf** — `quartz/plugins/emitters/llmsTxt.ts` (`??`, **non filtré**).
- **Fichiers suivis modifiés par ce bloc — cinq, nommés** : `quartz.config.ts`,
  `quartz.layout.ts`, `quartz/components/Head.tsx`,
  `quartz/plugins/emitters/contentIndex.tsx`,
  `quartz/plugins/emitters/index.ts`.
- **Total impliqué** — `git status --porcelain | wc -l` → **9** ;
  hors artefacts de séance (filtre `batterie-sortie` ou `predictions-`) → **7**.

## Prédictions — bloc 164, écriture de A1, A2, A3, A4, A5 (aucun build)

⚠ **Ce bloc n'exécute pas `npx quartz build`.** Les prédictions du § 8 qui
portent sur `public/` sont celles du **bloc 165**. Ici, on prédit la **forme
du diff** et le **type-check**.

- **P164.1** — `git diff --numstat` (comparé à `HEAD 3a95a82`, cinq lignes,
  dans l'ordre d'octets de git : `quartz.` avant `quartz/`) :
  ```
  2	0	quartz.config.ts
  10	6	quartz.layout.ts
  17	0	quartz/components/Head.tsx
  1	1	quartz/plugins/emitters/contentIndex.tsx
  2	0	quartz/plugins/emitters/index.ts
  ```
  **Décomposition, ligne à ligne** :
  - `quartz.config.ts` : deux entrées d'émetteur, `Plugin.RawMarkdown(),` et
    `Plugin.LlmsTxt(),`, après `Plugin.CustomOgImages(),`.
  - `quartz.layout.ts` : pied de page, **−4 +2** (les quatre lignes
    `links: { GitHub… Discord… },` remplacées par un commentaire de motif et
    `links: {},`) ; **deux** filtres d'Explorateur, **−1 +4** chacun (la ligne
    unique éclatée en quatre, quatrième terme `node.slugSegment !== "ia"`),
    soit **+8 −2**. Total **+10 −6**.
  - `quartz/components/Head.tsx` : **+1** (`allFiles,` dans la
    déstructuration), **+10** (bloc de résolution de jumelle), **+6** (trois
    balises `<link rel="alternate">` et une ligne vide). **Aucun import
    ajouté** : `FullSlug` et `joinSegments` sont déjà importés.
  - `quartz/plugins/emitters/contentIndex.tsx` : **A5**, une seule ligne, le
    `return` de `generateSiteMap` préfixé de
    `<?xml version="1.0" encoding="UTF-8"?>`.
  - `quartz/plugins/emitters/index.ts` : deux `export`.
- **P164.2** — `git status --porcelain | wc -l` → `9`
- **P164.3** — `git status --porcelain | grep -cvE 'batterie-sortie|predictions-'`
  → `7` (filtre identique à celui de `batterie.ps1`, ligne `$saleHors`)
- **P164.4** — les deux fichiers neufs, exactement :
  ```
  ?? quartz/plugins/emitters/llmsTxt.ts
  ?? quartz/plugins/emitters/rawMarkdown.ts
  ```
- **P164.5** — `npx tsc --noEmit` → **aucune sortie, code 0**.
  ⚠ *Prédiction de monde la plus exposée du bloc : cinq fichiers touchés et
  deux écrits de zéro, sous un `strict` dont je n'ai pas lu la configuration.*
- **P164.6** — `grep -c 'slugSegment !== "ia"' quartz.layout.ts` → `2`
- **P164.7** — `grep -c 'hreflang' quartz/components/Head.tsx` → `2`
- **P164.8** — **rien n'est écrit dans `content/`** : `git status --porcelain
  content/ | wc -l` → `0`.

### Bilan du bloc 164 — A1 à A5 écrits

**8 prédictions, 8 tenues, 0 réfutée.**
`git diff --numstat` rend les **cinq lignes exactement prédites**, chiffre par
chiffre : `2 0`, `10 6`, `17 0`, `1 1`, `2 0`. `git status` **9 / 7**, les
quatre `??` attendus. `slugSegment !== "ia"` **2 fois**, `hreflang` **2 fois**,
**0 entrée dans `content/`**. `npx tsc --noEmit` : **aucune sortie, code 0**.
✅ **P164.5, la prédiction la plus exposée du bloc, tient** : deux émetteurs
écrits de zéro et cinq fichiers touchés passent le type-check du premier coup.

⚠ **Une décision d'implémentation prise dans le bloc, et elle s'écarte de la
lettre du § 8.** La spécification dit « définition = première phrase du
**premier paragraphe** ». Appliquée telle quelle, elle rend `# Bienvenue sur
TheSkillCodex` pour la racine et un callout `[!info]` pour plusieurs hubs :
la mesure du 31/08 disait déjà « première phrase de la fiche, **476 sur 476
hors hubs** », et les hubs sont précisément l'exception. `definitionDe` saute
donc les paragraphes qui ne sont **pas de la prose** — titre `#`, citation ou
callout `>`, embed `![`, balise `<` — et prend le premier qui l'est. *Écart
assumé, motivé par une mesure antérieure, et il porte sur au plus les neuf
hubs.*

---

## Prédictions — bloc 165, `npx quartz build` et les mesures du § 8

⚠ **`/ia/` n'existe pas encore** (bloc C1). Ce build mesure donc l'état
**intermédiaire** : le préambule de `llms.txt` est vide, l'émetteur le dit, et
le compteur de paires n'a pas encore son orpheline.

- **P165.1** — `npx quartz build` → **code 0**.
- **P165.2** — l'avertissement de A2, **une fois**, écrit par la branche
  `catch` de `LlmsTxt` :
  `llms.txt : content/ia/index.md absente, preambule vide`
- **P165.3** — le bilan de A2, lu dans le code aux lignes `paires = paires + 1`
  et `orphelines = orphelines + 1` (et non dans la ligne d'affichage, C116 (7))
  — `paires` s'incrémente pour toute page FR ayant une jumelle dans la carte
  `source_fr`, `orphelines` pour toute page FR n'en ayant pas ; les 242 fiches
  EN ne sont dans **aucun** des deux seaux, elles sont la carte :
  `llms.txt : 242 paires, 0 sans jumelle`
- **P165.4** — A1 : `find public -name '*.md' | wc -l` → `484`
  (242 FR publiées + 242 EN ; `ressources/index.md` est le seul
  `draft: true` et le filtre l'a déjà retirée).
- **P165.5** — **test négatif de A1, sur la source** :
  `grep -c '<!--' content/conduite/proj/ecoconception.md` → `3`.
  *Prédiction de monde* : le relevé du 31/08 (séance 14) donne huit
  commentaires HTML sur trois fiches, en 3 + 3 + 2, sans dire laquelle porte
  laquelle. **Si ce compte sort à 2, la prédiction est réfutée et le test
  négatif reste valide** — ce qui compte est qu'il soit `> 0`.
- **P165.6** — et sur l'émis : `grep -c '<!--' public/conduite/proj/ecoconception.md` → `0`
- **P165.7** — A3 : `grep -c 'hreflang' public/conduite/proj/concept.html` → `1`
- **P165.8** — A3 : `grep -c 'hreflang' public/en/conduite/proj/concept-en.html` → `1`
- **P165.9** — A3 : `grep -c 'google-site-verification' public/index.html` → `1`
  (jeton **déjà posé** le 31/08 au soir, **non redoublé** par ce bloc).
- **P165.10** — A4 : `grep -ci 'discord' public/index.html` → `0`
- **P165.11** — A5 : `head -c 5 public/sitemap.xml` → `<?xml`
- **P165.12** — A2 : `wc -c < public/llms.txt` → un nombre **< 153600**
  (borne du § 8, 150 Ko).
- **P165.13** — A3 : `grep -c 'text/markdown' public/conduite/proj/concept.html` → `1`
- **P165.14** — `test -e public/ia; echo $?` → `1` : la page n'est pas encore
  écrite, et **rien d'autre que C1 ne doit la faire apparaître**.
- **P165.15** — A2 : `grep -c '^- \[' public/llms.txt` → `242`, une ligne par
  page FR publiée, soit **le même 242 que P165.3 additionné de P165.3bis**
  (242 paires + 0 orpheline).

### Bilan du bloc 165 — build, et les mesures du § 8

**15 prédictions, 15 tenues, 0 réfutée.** Build **code 0**, 485 fichiers lus,
**1 filtré** (`ressources/index.md`, seul `draft: true`), 1934 fichiers émis.
`llms.txt : content/ia/index.md absente, preambule vide` puis
`llms.txt : 242 paires, 0 sans jumelle`. `484` `.md` dans `public/` ;
`ecoconception.md` **3 commentaires en source, 0 à l'émission** ;
`hreflang` **1** côté FR et **1** côté EN ; jeton **1**, `discord` **0** ;
sitemap ouvre sur `<?xml` ; `llms.txt` **106 388 octets** (borne 153 600) ;
`text/markdown` **1** ; `public/ia` absent ; **242** lignes de fiche.
✅ **Les cinq prédictions du § 8 sur A1-A5 sont tenues au chiffre.**

⚠ **DÉFAUT TROUVÉ EN RELISANT LA SORTIE, ET IL N'ÉTAIT DANS AUCUNE
PRÉDICTION.** `llms.txt` porte **24 groupes**, et **17 d'entre eux sont
titrés par un chemin brut** — `## embarque/mcu/arduino`, `## embarque/pcb`.
Cause : le § 8 dit « titre du `index.md` du dossier », et **17 des 24 dossiers
FR n'ont pas d'`index.md`** — C18 y loge un **hub en fichier nommé**
(`<theme>.md`), précisément pour que `[[theme]]` résolve par nom. La
spécification présupposait une structure que le corpus n'a pas. *Le défaut ne
casse rien — les 242 lignes sont justes — mais il rend un tiers des en-têtes
illisibles dans un fichier dont la machine est le seul lecteur.*

---

## Déclaration C131 du bloc 166 — rejouée, aucun versement neuf

- Le bloc **modifie** `quartz/plugins/emitters/llmsTxt.ts`, **déjà** dans la
  population comme `??` depuis le bloc 164 : un fichier non suivi qui change
  ne crée **pas** de seconde entrée. **Aucun artefact neuf.**
- **Total impliqué** — `git status --porcelain | wc -l` → **9**, hors
  artefacts **7**, inchangés.

## Prédictions — bloc 166, repli de titre de dossier sur le hub nommé (C18)

Chaîne de résolution posée : `index.md` du dossier → **`<dossier>/<segment>.md`**
(le hub nommé de C18) → chemin brut. **Lecture de disque faite avant d'écrire
la prédiction** : sur les 17 dossiers sans `index.md`, **10 portent leur hub
nommé** (`algorithme`, `arduino`, `cpp`, `esp32`, `esp8266`, `micropython`,
`raspberry-pi`, `stm32`, `teensy`, `pcb`) et **7 non** — `embarque/mcu`,
`embarque/mcu/bus`, `embarque/mcu/sans-fil`, `embarque/mcu/xiao`,
`embarque/mesure`, `embarque/realisation`, `embarque/simulation` — dont les
hubs portent un **autre nom** que leur dossier (`microcontroleur`,
`bus-de-communication`, `techno-sans-fil`, `instruments-de-mesure`,
`simulation-electronique`), quand ils existent. **Aucune règle mécanique ne
les attrape**, et on ne les code pas en dur : ces sept-là gardent leur chemin.

⚠ **Épreuve C110 du motif `^## [a-z]+/`**, qui compte les en-têtes restés en
chemin brut. **Échantillon nommé, choisi pour ce qui pourrait le faire mordre
à tort** : `## TheSkillCodex` (majuscule, pas de `/`), `## Méca` (accent, pas
de `/`), `## Fiches ESE — Normes, sécurité, réglementation` (majuscule **et**
un cadratin), `## embarque/mcu/bus` (le seul des quatre qu'il doit prendre).
Le motif exige des minuscules ASCII **suivies d'une barre** : les trois
premiers ne peuvent pas mordre.

- **P166.1** — `npx tsc --noEmit` → **aucune sortie, code 0**.
- **P166.2** — `git status --porcelain | wc -l` → `9`, inchangé.
- **P166.3** — `git diff --numstat | wc -l` → `5`, inchangé : `llmsTxt.ts`
  n'est pas suivi, il n'a pas de ligne de `numstat`.
- **P166.4** — `grep -c 'hubNomme' quartz/plugins/emitters/llmsTxt.ts` → `2`
  (une déclaration, un appel).
- **P166.5** — **aucun build dans ce bloc** ; `public/llms.txt` reste à
  `106388` octets. Les effets se mesurent au build de clôture, avec ceux de
  B et de C.

### Bilan du bloc 166 — repli sur le hub nommé

**5 prédictions, 4 tenues, 1 réfutée.**
`tsc` code 0, `git status` **9**, `numstat` **5 lignes**, `llms.txt` inchangé
à **106 388** octets (aucun build).

⚠ **P166.4 RÉFUTÉE — `hubNomme` sort à 3, prédit 2.** J'ai écrit « une
déclaration, un appel » : le code en porte **trois** — `const hubNomme`,
`hubNomme.set(...)` dans la boucle d'inventaire, `hubNomme.get(...)` dans
l'en-tête de groupe. *C'est la famille C116 (7) exactement : j'ai compté sur
l'intention (« je déclare, je lis ») au lieu de compter sur le texte que je
venais d'écrire, où l'écriture dans la Map est un troisième site.* **Aucune
conséquence sur le comportement** ; la prédiction était sur le code, pas sur
le monde.

---

# BLOC B — PASSES MÉCANIQUES

## Déclaration C131 du bloc 167 — rejouée, un versement neuf

- **Artefacts de la séance à ce point — cinq** : les quatre du bloc 164, plus
  **`content/robots.txt`**, créé par ce bloc (`??`, **non filtré**, et
  **première entrée de la séance dans `content/`**).
- **Fichier suivi modifié en plus** : `tools/creer-fiche-en.mjs` (B3), qui
  porte le `numstat` à **six lignes**.
- **Total impliqué** — `git status --porcelain | wc -l` → **10** ; hors
  artefacts → **8**.

## Prédictions — bloc 167, B1 `robots.txt` et B3 squelette du générateur

- **P167.1** — `git diff --numstat`, **six lignes**, dans l'ordre d'octets :
  ```
  2	0	quartz.config.ts
  10	6	quartz.layout.ts
  17	0	quartz/components/Head.tsx
  1	1	quartz/plugins/emitters/contentIndex.tsx
  2	0	quartz/plugins/emitters/index.ts
  11	0	tools/creer-fiche-en.mjs
  ```
  **Décomposition de la sixième** : `const LANG_EN = 'en';` sous
  `const DRAFT_EN` (**+1**) ; dans `transformerFrontMatter`, une ligne vide,
  **quatre lignes de commentaire** et **cinq lignes de code** — la branche
  `if (/^title:/…)` qui repousse la ligne puis `lang: en` — soit **+10**.
- **P167.2** — `git status --porcelain | wc -l` → `10`
- **P167.3** — `git status --porcelain | grep -cvE 'batterie-sortie|predictions-'` → `8`
- **P167.4** — `content/robots.txt`, **quatre lignes**, exactement :
  ```
  User-agent: *
  Allow: /

  Sitemap: https://timturko.github.io/TheSkillCodex/sitemap.xml
  ```
- **P167.5** — `npx tsc --noEmit` → **aucune sortie, code 0**.
- **P167.6** — **non-régression du générateur**, B3 ne touchant qu'une branche
  du front matter : `node tools/creer-fiche-en.mjs --controle` rend
  `242 fiche(s) controlee(s), 0 divergente(s).` puis
  `Liens non suffixes : 0 sur 0 fiche(s).`, **code 0**.
- **P167.7** — `grep -c '^lang: ' tools/creer-fiche-en.mjs` → `0` : le champ
  n'est **jamais** écrit en dur, il sort de `LANG_EN`.

### Bilan du bloc 167 — B1 et B3

**7 prédictions, 4 tenues, 3 réfutées.** `robots.txt` conforme au caractère
(86 octets), `tsc` code 0, `--controle` **242 / 0** et
`Liens non suffixes : 0 sur 0`, code 0, `^lang: ` **0** dans le générateur.

⚠ **P167.1 RÉFUTÉE — `tools/creer-fiche-en.mjs` sort à `12 0`, prédit `11 0`.**
J'ai décomposé « une ligne vide, quatre commentaires, cinq lignes de code »
= 10, plus 1 pour `LANG_EN` = 11. L'insertion en porte **onze** : il y a une
**seconde ligne vide**, celle qui sépare la branche neuve de la branche
`draft:` qui la suit. *La ligne vide de fermeture n'était dans aucune des deux
faces de mon compte.*

⚠ **P167.2 ET P167.3 RÉFUTÉES — `11 / 9`, prédit `10 / 8`.** Et la cause est
**la même que celle que C131 nomme depuis le 29/08** : ma déclaration
d'ouverture de bloc a nommé le versement neuf (`content/robots.txt`) et
**oublié que `tools/creer-fiche-en.mjs` devenait, lui aussi, une entrée
neuve** — alors que je l'avais écrit **deux lignes plus haut** comme sixième
ligne du `numstat`. **Le sous-compteur est juste, c'est le total qui rate**,
pour la huitième fois recensée. *C131 dit « population, versements, ET
total » ; j'ai écrit les deux premiers et dérivé le troisième de tête.*
**Parade tenue pour la suite de la séance** : le total se recompte
**nominativement**, entrée par entrée, à chaque déclaration.

---

## Déclaration C131 du bloc 168 — rejouée, un versement neuf, TOTAL RECOMPTÉ NOMINATIVEMENT

**Recompte entrée par entrée, parade posée au bilan du bloc 167 :**

Suivis modifiés — **6** : (1) `quartz.config.ts`, (2) `quartz.layout.ts`,
(3) `quartz/components/Head.tsx`, (4) `quartz/plugins/emitters/contentIndex.tsx`,
(5) `quartz/plugins/emitters/index.ts`, (6) `tools/creer-fiche-en.mjs`.

Non suivis — **6** : (7) `content/robots.txt`,
(8) `quartz/plugins/emitters/llmsTxt.ts`,
(9) `quartz/plugins/emitters/rawMarkdown.ts`,
(10) `tools/batterie-sortie-3108b2.txt` *(filtré)*,
(11) `tools/predictions-260831.md` *(filtré)*,
(12) **neuf** — `tools/ajouter-lang-en-3108s16.mjs`, outil jetable de B2.

**Total : 12. Hors artefacts de séance : 12 − 2 = 10.**

## Prédictions — bloc 168, outil jetable de B2, test négatif puis `--dry`

⚠ **Lecture faite avant d'écrire la prédiction — et elle a trouvé une
anomalie.** Le dépôt porte `* text=auto eol=lf` en `.gitattributes`, et sur
les 242 fiches EN **une seule contient des CR** :
`content/en/conduite/proj/fonction-en.md`, **33 CR pour 49 LF** — un fichier
**mixte**, pas un fichier CRLF. La consigne « fin de ligne relue par fichier »
ne suffit donc pas : sur un fichier mixte, il faut la relire **sur la ligne
d'ancre elle-même**. Vérification faite à l'octet (`od -c`) : la ligne
`title: Function` de cette fiche se termine par **`\n` seul**. **Les 242
ancres sont donc en LF**, et le delta est de **9 octets par fiche**
(`lang: en` = 8 octets + 1 pour la fin de ligne).

Gardes portées par l'outil, mêmes trois termes que `remplacer-passe.mjs` :
unicité d'ancre, tout ou rien, invariants publiés avant écriture — dont
l'**écart d'accents**, compté en **points de code** et non en octets.

- **P168.1** — **TEST NÉGATIF DÉLIBÉRÉ**, ancre volontairement fausse :
  `node tools/ajouter-lang-en-3108s16.mjs --ancre "titre:"` →
  **refus du lot entier**, `242` fiches sans ancre unique, **0 octet écrit**,
  **code 1**.
- **P168.2** — `node tools/ajouter-lang-en-3108s16.mjs` (contrôle seul,
  ancre par défaut `title:`) → **242 fiches valides, 0 écrite**, **code 0**.
- **P168.3** — dans cette sortie : `ancres LF : 242`, `ancres CRLF : 0`.
- **P168.4** — dans cette sortie : `delta octets : +2178`
  (242 × 9, mesuré par `Buffer.byteLength` sur le texte avant et après, jamais
  par `.length`).
- **P168.5** — dans cette sortie : `ecart accents : 0` — l'insertion est
  **purement ASCII**, aucun point de code accentué ne peut bouger.
- **P168.6** — `git status --porcelain | wc -l` → `12` ; hors artefacts → `10`.
- **P168.7** — **aucune fiche écrite par ce bloc** :
  `git status --porcelain content/en | wc -l` → `0`.

### Bilan du bloc 168 — outil de B2, test négatif, contrôle seul

**7 prédictions, 7 tenues, 0 réfutée.**
Test négatif : `titre:` vue **0 fois** sur les 242, `ARRET`, **0 octet écrit**,
code 1 — le tout-ou-rien refuse le lot entier avant la première écriture.
Contrôle seul : `ancres LF : 242`, `ancres CRLF : 0`,
`delta octets : +2178`, `ecart accents : 0`,
`242 fichier(s) valide(s), 0 ecrit(s).`, code 0. `git status` **12 / 10**,
**0 entrée dans `content/en`**.

⚠ **Note de méthode, trouvée en préparant le bloc** : la consigne disait
« fin de ligne relue **par fichier** ». Le corpus porte un fichier **mixte** —
`fonction-en.md`, 33 CR pour 49 LF — sur lequel « la » fin de ligne du fichier
n'existe pas. L'outil relit donc la fin de ligne **sur la ligne d'ancre**,
seule unité où la question ait un sens.

---

## Déclaration C131 du bloc 169 — rejouée, 242 versements neufs

**Recompte nominatif :** les **12** entrées du bloc 168, **plus les 242 fiches
de `content/en`** que la passe modifie — elles sont suivies, donc chacune fait
une entrée ` M`. **Total : 12 + 242 = 254.** Hors artefacts de séance
(retrait de `batterie-sortie-3108b2.txt` et `predictions-260831.md`) :
**254 − 2 = 252**.

⚠ **Corollaire C131 sur les diffs** : `git diff --numstat` compare à **HEAD**,
pas à l'état d'avant le bloc, et la séance n'a pas commité — il **cumule**
depuis `3a95a82`. Les prédictions ci-dessous portent donc `-- content/en`
en restriction de chemin.

## Prédictions — bloc 169, B2 en écriture, puis remesure immédiate

- **P169.1** — `node tools/ajouter-lang-en-3108s16.mjs --ecrire` :
  `ancres LF    : 242`, `ancres CRLF  : 0`,
  `delta octets : +2178`, `ecart accents : 0`,
  `242 fichier(s) valide(s), 242 ecrit(s).`, **code 0**.
- **P169.2** — `grep -rlE '^lang: en' content/en --include='*.md' | wc -l` → `242`
- **P169.3** — **l'épreuve C110 devient utile ici** :
  `grep -rl 'lang:' content --include='*.md' | wc -l` → `242` **aussi**.
  Ancré et non ancré rendent le même chiffre ⇒ la passe n'a introduit
  **aucune** occurrence de `lang:` ailleurs qu'en début de ligne. Un écart
  entre les deux serait le symptôme d'une insertion en milieu de ligne.
- **P169.4** — `git diff --numstat -- content/en | wc -l` → `242`
- **P169.5** — `git diff --numstat -- content/en | grep -c '^1	0	'` → `242` :
  **une ligne ajoutée, zéro retirée, pour les 242**.
- **P169.6** — `git diff --shortstat -- content/en` →
  ` 242 files changed, 242 insertions(+)`
- **P169.7** — `node tools/derive-traduction.mjs` : `242 fiche(s) EN controlee(s)`,
  et au bilan `DERIVE          0` et `A JOUR          242`, **code 0**.
  *Motif* : l'empreinte consignée porte sur la **source FR**, que la passe ne
  touche pas.
- **P169.8** — `git status --porcelain | wc -l` → `254` ; hors artefacts → `252`.
- **P169.9** — non-régression : `node tools/creer-fiche-en.mjs --controle` →
  `242 fiche(s) controlee(s), 0 divergente(s).` et
  `Liens non suffixes : 0 sur 0 fiche(s).`, **code 0** — les trois compteurs
  ne lisent que le corps, le front matter leur est étranger.
- **P169.10** — `sed -n '1,4p' content/en/conduite/proj/concept-en.md` →
  ```
  ---
  title: Concept
  lang: en
  type: trame
  ```

### Bilan du bloc 169 — B2 en écriture

**10 prédictions, 10 tenues, 0 réfutée.**
`242 fichier(s) valide(s), 242 ecrit(s).`, `delta octets : +2178`,
`ecart accents : 0` ; `^lang: en` **242** ; **ancré = non ancré = 242**, la
passe n'a rien écrit hors début de ligne ; `numstat` **242 lignes, toutes
`1	0`** ; `242 files changed, 242 insertions(+)` ; `derive-traduction`
**DERIVE 0 / A JOUR 242**, code 0 ; `git status` **254 / 252** ;
`--controle` **242 / 0**, code 0 ; `lang: en` en **ligne 3** de
`concept-en.md`, juste sous `title:`.
✅ **B2 est fait, et les 242 pages EN sortiront désormais en `<html lang="en">`.**

⚠ **Un avertissement git, sans conséquence et à ne pas confondre avec un
défaut de la passe** : `content/en/conduite/proj/fonction-en.md` déclenche
`CRLF will be replaced by LF the next time Git touches it`. C'est l'**état
antérieur** du fichier mixte, et non un effet de B2 — l'index porte déjà la
version en LF, c'est pourquoi son `numstat` sort à `1	0` comme les 241 autres.

---

# BLOC C — CONTENU

## Déclaration C131 du bloc 170 — rejouée, un versement neuf

**Recompte nominatif :** les **254** entrées du bloc 169, **plus**
`content/ia/index.md`, créé par ce bloc (`??`, non filtré).
**Total : 255. Hors artefacts de séance : 253.**

## Prédictions — bloc 170, C1 `content/ia/index.md`

⚠ **Les textes ne sont pas retapés : ils sont extraits du brouillon par
`sed`, aux bornes vérifiées avant écriture** — FR lignes **81 à 147**
(67 lignes, de « Cette page dit comment… » à « …la moins coûteuse. »), EN
lignes **163 à 229** (67 lignes, de « This page sets out how… » à « …the
cheapest read. »). *Une extraction mécanique ne peut pas paraphraser un texte
validé ; une transcription à la main, si.*

Forme du fichier, ligne à ligne :
lignes **1-10** front matter (dix lignes, `---` compris) ; **11** vide ;
**12-78** corps FR (67) ; **79** vide ; **80** `<section lang="en">` ;
**81** vide ; **82-148** corps EN (67) ; **149** vide ;
**150** `</section>`. *Les lignes 79/81 et 149 sont la décision 5 de Tim :
sans ligne vide après la balise ouvrante et avant la fermante, le Markdown du
bloc anglais n'est pas interprété.*

- **P170.1** — `wc -l < content/ia/index.md` → `150`
- **P170.2** — `sed -n '80p;150p' content/ia/index.md` →
  ```
  <section lang="en">
  </section>
  ```
- **P170.3** — `sed -n '79p;81p;149p' content/ia/index.md | grep -c '^$'` → `3`
  (les trois lignes vides de la décision 5).
- **P170.4** — `grep -c '^### ' content/ia/index.md` → `12` (six titres FR,
  six titres EN), compté sur le brouillon avant écriture.
- **P170.5** — `grep -c '\[\[' content/ia/index.md` → `0` : décision 2, la
  page porte des **URL absolues** et aucun wiki-link, le préambule de
  `llms.txt` ne résolvant rien.
- **P170.6** — `grep -c '^bilingue: true$' content/ia/index.md` → `1`
- **P170.7** — `git status --porcelain | wc -l` → `255` ; hors artefacts → `253`.
- **P170.8** — **TEST NÉGATIF DE C2, PREMIÈRE MOITIÉ, AVANT PATCH** :
  `node tools/compter-mots.mjs` rend
  `  fiches FR publiees   : 243` et une ligne
  `  RESTANT A TRADUIRE   : 1 fiches, <N> mots FR`.
  *Le compte de fiches est prédit à **1** ; le volume `<N>` ne l'est pas — il
  sortira de `compter-mots.mjs`, jamais d'une estimation (C118).*
- **P170.9** — `node tools/derive-traduction.mjs` reste à
  `A JOUR          242`, **code 0** : le mode par défaut ne liste pas les
  orphelines (`--manquantes`), et le bilan ne compte que les fiches EN.
  ⚠ *C'est ici que la prédiction du brief tombe : elle attendait
  `audit-wikilinks` sur l'orpheline. Lecture du code faite au bloc 167 —
  `audit-wikilinks.mjs` audite des **cibles de liens**, pas des pages sans
  lien entrant ; il ne peut pas voir `/ia/`. La seule sortie qui la nomme est
  `derive-traduction --manquantes`, et elle n'est **pas bloquante**
  (`process.exit` ne compte que MARQUE INVALIDE, DERIVE, SANS SOURCE, SANS
  MARQUE).*
- **P170.10** — `node tools/audit-wikilinks.mjs` : bilan **inchangé**,
  `MORT 0` et `CASSE 0`, **code 0** — `/ia/` n'y apparaît sous aucun statut.

### Bilan du bloc 170 — C1, la page `/ia/` est posée

**10 prédictions, 10 tenues, 0 réfutée.**
`150` lignes, `<section lang="en">` en **80** et `</section>` en **150**, les
**trois lignes vides** de la décision 5, **12** titres `###`, **0** wiki-link,
`bilingue: true` **1 fois**, `git status` **255 / 253**.
`compter-mots` : `fiches FR publiees : 243`, `deja traduites : 242 fiches,
291261 mots FR`, **`RESTANT A TRADUIRE : 1 fiches, 2152 mots FR`** — c'est la
**première moitié du test négatif de C2**, et elle est en place.
`derive-traduction` **A JOUR 242**, code 0. `audit-wikilinks` **MORT 0,
CASSE 0**, code 0.

⚠ **PRÉDICTION DU BRIEF RÉFUTÉE PAR LE CODE, ET C'EST LA PLUS UTILE DE LA
SÉANCE.** Le brief annonçait « `/ia/` n'a aucun lien entrant,
`audit-wikilinks` la signalera — exemption nommée ou acceptation à trancher ».
**`audit-wikilinks.mjs` ne peut pas la signaler** : il indexe les **cibles de
wiki-liens** et les classe MORT / CASSE / AMBIGU / GABARIT / ALIAS / OK. Une
page sans lien **entrant** n'est la cible de rien : elle n'entre dans aucun
seau. *Il n'y a donc **rien à exempter**, et l'arbitrage annoncé n'a pas
d'objet.* Le seul outil qui nomme une page FR sans jumelle est
`derive-traduction --manquantes`, sous le titre `ORPHELINE`, **et il n'est pas
bloquant**. **Décision prise, coût de revert nul** : aucune exemption nommée
n'est écrite dans aucun outil ; `/ia/` sera simplement listée en ORPHELINE
quand on passe `--manquantes`, ce qui est exact et souhaitable.
⚠ *Réserve honnête sur ma propre P170.10* : j'ai écrit « bilan inchangé » sans
avoir mesuré les seaux GABARIT / ALIAS / OK **avant** C1 dans cette séance.
Ce qui est vérifié est **MORT 0, CASSE 0, code 0** et le fait que `/ia/`
n'apporte **aucune cible** (elle ne porte aucun wiki-link, P170.5 = 0).

---

## Déclaration C131 du bloc 171 — rejouée, aucun versement neuf

**Recompte nominatif :** les **255** entrées du bloc 170, **plus**
`tools/compter-mots.mjs` qui devient une entrée ` M` neuve.
`tools/creer-fiche-en.mjs` est **déjà** une entrée depuis le bloc 167 : il
change, il ne se dédouble pas. **Total : 256. Hors artefacts : 254.**
*(La leçon du bloc 167 est appliquée : le fichier déjà modifié n'ajoute rien,
le fichier neuf ajoute un.)*

## Prédictions — bloc 171, C2 exemption `bilingue: true` et seconde moitié du test négatif

⚠ **Épreuve C110 du motif `^bilingue:\s*true\s*$` (drapeau `m`).**
**Échantillon nommé, choisi pour ce qui pourrait le faire mordre à tort** :
(a) `content/ia/index.md`, qui le porte et doit mordre ; (b)
`content/conduite/proj/concept.md`, qui ne le porte pas ; (c) **le mot
`bilingue` partout ailleurs dans `content/`, sans ancre ni deux-points** —
une fiche qui parlerait d'un corpus « bilingue » en prose, ou un bloc de code
qui montrerait un front matter. Le motif exige l'ancre de ligne, le
deux-points et `true` seul jusqu'à la fin de ligne.

- **P171.1** — `grep -rl 'bilingue' content --include='*.md'` → **une seule
  ligne**, `content/ia/index.md`. *Prédiction de monde : si une fiche emploie
  le mot en prose, elle sort ici et le motif ancré reste juste — c'est
  précisément ce que l'échantillon (c) sert à montrer.*
- **P171.2** — **TEST NÉGATIF DE C2, SECONDE MOITIÉ, APRÈS PATCH** :
  `node tools/compter-mots.mjs` rend
  ```
    fiches FR publiees   : 243
    deja traduites       : 242 fiches, 291261 mots FR
    bilingues exemptees  : 1 fiches, 2152 mots FR
    RESTANT A TRADUIRE   : 0 fiches, 0 mots FR
  ```
  **La population se referme : 242 + 1 + 0 = 243**, et le `1` du bloc 170 est
  devenu `0` **sans qu'aucune fiche ait été traduite** — c'est ce que le test
  négatif devait montrer.
- **P171.3** — `node tools/compter-mots.mjs --paires` : ligne d'annonce
  `  bilingues exemptees : 1 fiche(s), hors foisonnement par construction.`,
  et le résumé **inchangé** à `242 paire(s)`.
- **P171.4** — `node tools/creer-fiche-en.mjs --controle` :
  `Exemption bilingue: true : 1 fiche(s) FR hors appariement.` puis
  `242 fiche(s) controlee(s), 0 divergente(s).`, **code 0**.
- **P171.5** — `git diff --numstat | wc -l` → `249` : **242** fiches de
  `content/en` **+ 7** fichiers d'outil et de code. Les **sept**, dans l'ordre
  d'octets de git :
  ```
  2	0	quartz.config.ts
  10	6	quartz.layout.ts
  17	0	quartz/components/Head.tsx
  1	1	quartz/plugins/emitters/contentIndex.tsx
  2	0	quartz/plugins/emitters/index.ts
  13	2	tools/compter-mots.mjs
  23	0	tools/creer-fiche-en.mjs
  ```
  **Décomposition de `compter-mots.mjs`** : une ligne vide, quatre
  commentaires et la constante `estBilingue` (**+6**) ; dans `corpus()`, deux
  lignes remplacées par trois (**+3 −2**) ; la ligne d'affichage
  `bilingues exemptees` (**+1**) ; dans `paires()`, trois lignes d'annonce
  (**+3**). **Décomposition de `creer-fiche-en.mjs`** : les **12** du bloc 167
  (B3), plus **11** dans `controle()` — une ligne vide, cinq commentaires,
  quatre lignes de chaînage `walk / map / filter / filter` et une ligne
  d'affichage.
- **P171.6** — `git status --porcelain | wc -l` → `256` ; hors artefacts → `254`.

### Bilan du bloc 171 — C2, l'exemption `bilingue: true` et le test négatif fermé

**6 prédictions, 5 tenues, 1 réfutée.**
**Épreuve C110 tenue, et cette fois elle sert** : le mot `bilingue` n'existe
**nulle part ailleurs** dans `content/` (`grep -rl` rend la seule
`content/ia/index.md`), l'échantillon (a) mord une fois, (b) zéro.
✅ **TEST NÉGATIF DE C2 FERMÉ** : `RESTANT A TRADUIRE` passe de **1 fiches,
2152 mots FR** (bloc 170) à **0 fiches, 0 mots FR**, et la population se
referme — `242 déjà traduites + 1 bilingue exemptée + 0 restant = 243 fiches
FR publiées`. `--paires` annonce l'exemption et garde ses `242 paire(s) :
291261 mots FR -> 301333 mots EN, +3.5 %`. `--controle` annonce
`Exemption bilingue: true : 1 fiche(s) FR hors appariement.` et reste à
`242 / 0`, code 0. `numstat` **249 lignes**, `git status` **256 / 254**.

⚠ **P171.5 RÉFUTÉE SUR UNE LIGNE — `tools/compter-mots.mjs` sort à `12 1`,
prédit `13 2`.** J'ai compté l'édition de `corpus()` comme « deux lignes
remplacées par trois » (+3 −2). Git ne voit pas cela : la ligne
`const faits = …` est **identique** et sort du hunk, seule
`const restants = …` change et `const bilingues = …` s'ajoute — **+2 −1**.
*Troisième réfutation de la séance sur un compte de lignes, et les trois ont
la même forme : j'ai compté l'**intention d'édition** (le bloc que j'ai
remplacé) au lieu du **texte que git compare** (les lignes qui diffèrent).*
Les six autres lignes du `numstat` sont justes au chiffre.

---

## Déclaration C131 du bloc 172 — rejouée, aucun versement neuf

**Recompte nominatif :** les **256** entrées du bloc 171, **plus**
`content/index.md`, qui devient une entrée ` M` neuve.
`content/en/index.md` est **déjà** une entrée depuis le bloc 169 (B2 lui a
posé `lang: en`) : il change trois fois de plus dans ce bloc — description,
section, empreinte recalée — et **reste une seule entrée**.
**Total : 257. Hors artefacts : 255.**

## Prédictions — bloc 172, C3 carte des cinq phases sur les deux racines

Textes **extraits par `sed`** du brouillon, bornes vérifiées : 3a lignes
**238 à 248** (11 lignes, `## Le projet en cinq phases` → `…sécurité et
qualité].`), 3b lignes **254 à 264** (11 lignes). `description:` FR ligne
**272**, EN ligne **278**. **10 wiki-links de chaque côté**, comptés sur le
brouillon avant écriture — c'est ce qui garantit que les trois compteurs de
`--controle` ne divergeront pas.

Insertion : la section va **avant** `## À propos` (FR) et `## About` (EN),
suivie d'une ligne vide ; la `description:` va **sous `tags:`** dans les deux
front matter.

- **P172.1** — `git diff --numstat -- content/index.md content/en/index.md` :
  ```
  15	1	content/en/index.md
  13	0	content/index.md
  ```
  ⚠ **Le corollaire C131 sur les diffs mord ici** : `content/en/index.md`
  **cumule depuis HEAD** — **+1** de `lang: en` (bloc 169), **+1** de
  `description:`, **+12** de la section (11 lignes + 1 vide), et **+1 −1** de
  la ligne `source_sha256` que `--recaler` réécrit. Soit **15 ajoutées, 1
  retirée**. `content/index.md`, lui, n'avait pas bougé : **13 −0**.
  *La leçon des trois réfutations précédentes est appliquée : ce sont les
  **lignes que git compare** qui sont comptées, pas les gestes d'édition.*
- **P172.2** — `git diff --numstat | wc -l` → `250`
- **P172.3** — `git status --porcelain | wc -l` → `257` ; hors artefacts → `255`.
- **P172.4** — `wc -l < content/index.md` → `45` (32 + 13) ;
  `wc -l < content/en/index.md` → `49` (36 + 13).
- **P172.5** — `grep -c '^description: ' content/index.md` → `1` ;
  idem sur `content/en/index.md` → `1`.
- **P172.6** — **AVANT `--recaler`** : `node tools/derive-traduction.mjs` rend
  ```
    MARQUE INVALIDE 0
    DERIVE          1
    SANS SOURCE     0
    SANS MARQUE     0
    A JOUR          241
  ```
  **code 1**, et la ligne de détail nomme `en/index.md`. *C'est le circuit de
  traduction qui fonctionne : la source FR a bougé, l'outil le dit.*
- **P172.7** — **APRÈS `node tools/creer-fiche-en.mjs --recaler en/index.md`** :
  `DERIVE          0` et `A JOUR          242`, **code 0**.
- **P172.8** — `node tools/creer-fiche-en.mjs --controle` reste
  `242 fiche(s) controlee(s), 0 divergente(s).`, **code 0** : **10 wiki-links
  ajoutés de chaque côté**, les trois compteurs restent appariés.
- **P172.9** — `node tools/audit-wikilinks.mjs` → `MORT    0 cible(s)` et
  `CASSE   0 cible(s)`, **code 0** : les vingt cibles neuves existent toutes.

### Bilan du bloc 172 — C3, la carte des cinq phases sur les deux racines

**9 prédictions, 9 tenues, 0 réfutée.**
`content/index.md` **45 lignes**, `content/en/index.md` **49**, une
`description:` chacune. `numstat` : **`15	1	content/en/index.md`** et
**`13	0	content/index.md`**, au chiffre — *première prédiction de `numstat`
de la séance qui porte un cumul depuis HEAD, et elle tient.* `numstat`
**250 lignes**, `git status` **257 / 255**.
✅ **Le circuit de traduction a fonctionné à découvert** : avant `--recaler`,
`DERIVE 1` / `A JOUR 241`, **code 1**, avec le détail
`en/index.md <- index.md   consigne 94b5345f3c82 / reel dd5f2aae3e83` ; après,
`DERIVE 0` / `A JOUR 242`, **code 0**. `--controle` **242 / 0** malgré les
**dix wiki-links ajoutés de chaque côté** ; `audit-wikilinks` **MORT 0,
CASSE 0**, code 0 — les vingt cibles neuves existent.

---

## Déclaration C131 du bloc 173 — rejouée, trois versements neufs

**Recompte nominatif :** les **257** entrées du bloc 172, **plus trois** :
(258) `tools/passe-hub-3108s16.tsv`, table réelle ;
(259) `tools/passe-negatif-hub-3108s16.tsv`, table du test négatif ;
(260) `content/conduite/index.md`, qui devient une entrée ` M`.
`content/en/conduite/index.md` est **déjà** une entrée depuis le bloc 169 :
il change deux fois de plus — corps et empreinte — et **reste une seule
entrée**. **Total : 260. Hors artefacts : 258.**

## Prédictions — bloc 173, C4 phrase du hub `conduite/` et de sa jumelle

L'édition passe par `tools/remplacer-passe.mjs` — ancre dans le corps, unicité
exigée, tout ou rien, invariant d'accents bloquant. Les deux ancres sont
**uniques**, vérifié avant d'écrire la table : `content/conduite/index.md`
ligne **98**, `content/en/conduite/index.md` ligne **101**.

⚠ **L'invariant d'accents est le point délicat de ce bloc, et il tombe juste
par coïncidence.** Le remplacement FR **perd** `î` (reconnaîtras) et `ê`
(en-tête) et **gagne** `à` (à leur) et `é` (étiquette) : **2 → 2, écart 0**.
Le remplacement EN ne touche aucun accent : **0 → 0**. *Si l'écart n'avait pas
été nul, l'outil aurait refusé le lot — et il aurait eu raison de le faire :
c'est à moi de le prédire, pas à lui de me croire.*

- **P173.1** — **TEST NÉGATIF DÉLIBÉRÉ**, ancre FR privée de son circonflexe
  (`reconnaitras`) : `node tools/remplacer-passe.mjs tools/passe-negatif-hub-3108s16.tsv`
  → `INTROUVABLE`, puis
  `  REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code 1**.
- **P173.2** — contrôle seul sur la table réelle :
  `  fiches                  : 2`, `  remplacements prets     : 2`,
  `  INVARIANT D ACCENTS casse sur : 0 fiche(s)`,
  `  CONTROLE SEUL : 2 remplacement(s) prets, 0 fichier ecrit.`, **code 0** ;
  et sur les deux lignes de détail, `(ecart +0)` et un nombre de lignes
  **inchangé** (`lignes N -> N`), le remplacement tenant sur une seule ligne.
- **P173.3** — `--ecrire` → `  fichiers ecrits : 2`, **code 0**.
- **P173.4** — après écriture :
  `grep -c 'sous le titre' content/conduite/index.md` → `1` ;
  `grep -c 'champ ` + "`type:`" + `' content/conduite/index.md` → `0` ;
  `grep -c 'shown under the title' content/en/conduite/index.md` → `1`.
- **P173.5** — **AVANT `--recaler`** : `derive-traduction` rend
  `DERIVE          1` et `A JOUR          241`, **code 1**, le détail nommant
  `en/conduite/index.md`. **APRÈS
  `node tools/creer-fiche-en.mjs --recaler en/conduite/index.md`** :
  `DERIVE          0`, `A JOUR          242`, **code 0**.
- **P173.6** — `git diff --numstat -- content/conduite/index.md content/en/conduite/index.md` :
  ```
  1	1	content/conduite/index.md
  3	2	content/en/conduite/index.md
  ```
  **Décomposition de la jumelle, cumul depuis HEAD** : `lang: en` du bloc 169
  (**+1**), la ligne de corps (**+1 −1**), la ligne `source_sha256` recalée
  (**+1 −1**).
- **P173.7** — `git diff --numstat | wc -l` → `251`
- **P173.8** — `git status --porcelain | wc -l` → `260` ; hors artefacts → `258`.
- **P173.9** — `node tools/creer-fiche-en.mjs --controle` reste
  `242 fiche(s) controlee(s), 0 divergente(s).`, **code 0** : le remplacement
  ne crée ni ne détruit de wiki-link, d'embed ni de bloc de code.

### Bilan du bloc 173 — C4, la phrase du hub et de sa jumelle

**9 prédictions, 9 tenues, 0 réfutée.**
✅ **TEST NÉGATIF DÉLIBÉRÉ, quatrième de la lignée** : `reconnaitras` sans
circonflexe → `INTROUVABLE`, `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`,
code 1. Puis contrôle seul **2/2 ancres**, `ecart +0` des deux côtés
(**152 → 152** en FR, **0 → 0** en EN), `lignes 95 -> 95`, puis
`fichiers ecrits : 2`.
`sous le titre` **1**, `champ ` + "`type:`" + ` **0**,
`shown under the title` **1**.
Circuit de traduction à découvert : `DERIVE 1` /
`en/conduite/index.md <- conduite/index.md   consigne f3927441c362 / reel
1740f2390b6a`, code 1 ; après `--recaler`, `DERIVE 0` / `A JOUR 242`, code 0.
`numstat` **`1	1`** et **`3	2`**, au chiffre ; **251 lignes** ;
`git status` **260 / 258** ; `--controle` **242 / 0**, code 0.
✅ **Les quatre pièces du bloc C sont posées.**

---

## Déclaration C131 du bloc 174 — rejouée, aucun versement neuf

Le bloc **ne fait que reconstruire `public/`**, qui est **gitignoré**
(`.gitignore`, `public/`). Aucun fichier suivi ni non suivi n'est créé.
**Total inchangé : 260. Hors artefacts : 258.**

## Prédictions — bloc 174, build de clôture et contrôles locaux

- **P174.1** — `npx quartz build` → **code 0**, `llms.txt : 242 paires, 1 sans
  jumelle`, et **plus aucune** ligne
  `llms.txt : content/ia/index.md absente, preambule vide` : la page existe.
- **P174.2** — `find public -name '*.md' | wc -l` → `485` (484 + `/ia/`).
- **P174.3** — `test -e public/ia/index.html; echo $?` → `0`
- **P174.4** — `test -f public/robots.txt; echo $?` → `0`, et
  `cmp -s content/robots.txt public/robots.txt; echo $?` → `0` : `assets.ts`
  copie tout non-`.md`, et `.txt` **garde son extension**.
- **P174.5** — `head -c 5 public/sitemap.xml` → `<?xml`
- **P174.6** — `grep -o '<url>' public/sitemap.xml | wc -l` → `485`
- **P174.7** — **A4, filtre de l'Explorateur** :
  `grep -c 'Utiliser ce site avec un assistant IA' public/index.html` → `0` :
  la page n'apparaît nulle part dans l'arbre servi avec la racine.
- **P174.8** — `grep -c 'google-site-verification' public/index.html` → `1`
- **P174.9** — `grep -ci 'discord' public/index.html` → `0`
- **P174.10** — `grep -c 'hreflang' public/conduite/proj/concept.html` → `1` ;
  `grep -c 'hreflang' public/en/conduite/proj/concept-en.html` → `1`.
- **P174.11** — **effet de B2, mesuré sur le HTML servi** :
  `grep -c '<html lang="en"' public/en/conduite/proj/concept-en.html` → `1`
- **P174.12** — `grep -c '<html lang="fr"' public/conduite/proj/concept.html` → `1`
- **P174.13** — `wc -c < public/llms.txt` → un nombre **supérieur à 110000**
  (le préambule ajoute le corps entier de `/ia/`) et **inférieur à 153600**
  (borne du § 8). *Prédiction en intervalle, déclarée comme telle.*
- **P174.14** — `grep -c '^## ' public/llms.txt` → `25` : les 24 groupes du
  bloc 165 plus le groupe `ia`, titré par son `index.md`.
- **P174.15** — `grep -cE '^## [a-z]+/' public/llms.txt` → `7` : le repli du
  bloc 166 a résolu **dix** des dix-sept en-têtes en chemin brut, sept restent.
- **P174.16** — `grep -c '^- \[' public/llms.txt` → `243`
- **P174.17** — **CONTRÔLE DE LA DÉCISION 5 DE TIM, le seul qui compte sur la
  forme de `/ia/`** : `grep -o '<h3' public/ia/index.html | wc -l` → `12`.
  *Si les lignes vides autour de `<section lang="en">` manquaient, le Markdown
  du bloc anglais ne serait pas interprété et ce compte tomberait à **6** —
  les six titres français seuls. Le chiffre discrimine.*
- **P174.18** — `grep -c '<section lang="en">' public/ia/index.html` → `1`
- **P174.19** — **A1 conserve le front matter** :
  `sed -n '1,2p' public/ia/index.md` →
  ```
  ---
  title: Utiliser ce site avec un assistant IA
  ```
- **P174.20** — **le canal d'acheminement vers `/ia/`, mesuré** :
  `grep -o 'https://timturko.github.io/TheSkillCodex/ia/' public/index.html | wc -l`
  → `4` — `Head.tsx` réutilise la même `description` dans
  `twitter:description`, `og:description`, `og:image:alt` et
  `<meta name="description">`. *Prédiction lue dans le code de `Head.tsx`,
  pas dans le rendu.*

### Bilan du bloc 174 — build de clôture

**20 prédictions, 20 tenues, 0 réfutée.**
Build **code 0**, 486 fichiers lus, 1 filtré, 1939 émis,
`llms.txt : 242 paires, 1 sans jumelle` et **plus d'avertissement de
préambule vide**. `485` `.md` émis, `public/ia/index.html` présent,
`robots.txt` copié **identique à l'octet** (`cmp` code 0), sitemap ouvrant sur
`<?xml` avec **485 `<url>`**, **0** occurrence du titre de `/ia/` dans la
racine servie (filtre A4), jeton **1**, `discord` **0**, `hreflang` **1 / 1**,
`<html lang="en">` **1** côté EN et `<html lang="fr">` **1** côté FR,
`llms.txt` **121 237 octets** (dans l'intervalle prédit 110 000 – 153 600),
**25** groupes, **7** en-têtes en chemin brut, **243** lignes de fiche,
`<section lang="en">` **1**, front matter conservé dans le `.md` brut,
et **4** occurrences de l'adresse de `/ia/` dans la racine.
✅ **P174.17 — les titres du bloc anglais sortent bien en `<h3>`, DOUZE et
non six** : la décision 5 de Tim (lignes vides autour de `<section>`) est
vérifiée par un chiffre qui discrimine.
✅ **P174.11 — `<html lang="en">` sur une page anglaise** : c'est l'effet de
B2 mesuré sur le HTML servi, et non sur le front matter.

⚠ **Un avertissement neuf au build, sans conséquence** :
`content/ia/index.md isn't yet tracked by git, dates will be inaccurate`.
Il disparaît au commit de Tim.

---

## Déclaration C131 du bloc 175 — rejouée, un versement neuf

**Recompte nominatif :** les **260** entrées du bloc 174, **plus**
`tools/batterie-sortie-3108b3.txt`, créé par l'étape 0 du lancement qui
compte (`??`, filtré `batterie-sortie`). **Total : 261.**
**Hors artefacts : 261 − 3 = 258** — les trois filtrés étant
`batterie-sortie-3108b2.txt`, `batterie-sortie-3108b3.txt` et
`predictions-260831.md`. *Le filtre porte sur trois entrées et non deux : la
copie C124 de ce lancement s'ajoute à celle du bloc 162.*

## Prédictions — bloc 175, garde de péremption avant écriture sur le pilotage

- **P175.1** — `lignes non ASCII dans batterie.ps1 : 0`
- **P175.2** — `sortie precedente copiee : tools\batterie-sortie-3108b3.txt`
  (rang 3 : `3108b1` était en dépôt à l'ouverture, `3108b2` a été écrit au
  bloc 162).
- **P175.3** — `phase demandee : garde   anneau : 2   chevron : False`
- **P175.4** — `date ISO : 2026-08-31   heure : HH:mm:ss`
- **P175.5** — `HEAD git : 3a95a82 2026-08-31 14:30:33 +0200` — **inchangé**,
  la séance n'a rien commité (C121).
- **P175.6** — `fichiers modifies non commites : 261   (hors artefacts de seance : 258)`
- **P175.7** — `node : v24.15.0`
- **P175.8** — les trois fichiers de pilotage **inchangés au caractère**
  depuis le bloc 162, donc les **mêmes horodatages à la seconde** :
  ```
    JOURNAL.md                                          2026-08-31 20:53:33
    conventions.md                                      2026-08-31 20:53:33
    TODO.md                                             2026-08-31 20:53:33
  ```

### Bilan du bloc 175 — garde avant écriture sur le pilotage

**8 prédictions, 8 tenues, 0 réfutée.**
`3108b3`, `HEAD 3a95a82` inchangé, **261 / 258**, `node v24.15.0`, et les
trois fichiers de pilotage **à la même seconde qu'à l'ouverture**
(`2026-08-31 20:53:33`) : rien ne les a touchés en treize blocs.
✅ **Aucun second écrivain. La clôture peut écrire.**

---

## Déclaration C131 du bloc 176 — rejouée, aucun versement neuf

`normalize-pilotage.js` **écrit en place** quand il trouve un invisible ; s'il
n'en trouve pas, il n'écrit rien et **aucune entrée neuve n'apparaît**.
`wc -c` ne fait que lire. **Total attendu inchangé : 261. Hors artefacts : 258.**

## Prédictions — bloc 176, normalisation du pilotage et tailles avant écriture

- **P176.1** — `node tools/normalize-pilotage.js` → **0 fichier modifié**,
  code 0 : le hook `pre-commit` est la garde permanente, et la séance 15 a
  écrit les trois fichiers depuis le PC pro sous ce même hook.
- **P176.2** — tailles en **octets** (`wc -c`, jamais une conversion de Ko).
  Bornes déduites des chiffres de la séance 15, publiés en Ko par
  `list_directory_with_sizes` sur le PC pro, **× 1024** :
  - `conventions.md` **entre 602 000 et 607 000** (590,21 Ko) ;
  - `TODO.md` **entre 298 000 et 302 000** (292,74 Ko) ;
  - `BACKLOG.md` **entre 225 000 et 229 000** (221,68 Ko) ;
  - `JOURNAL.md` **supérieur à 45 762** (44,69 Ko mesuré **avant** que la
    séance 15 n'insère sa propre entrée §7 — le chiffre publié est donc
    forcément dépassé).
  ⚠ *Prédictions en intervalle, et l'unité change en route : c'est exactement
  le cas que la précision à C110 du 30/08 décrit — une prédiction se publie
  avec l'unité dans laquelle l'outil répondra. Elle est donnée en octets, et
  la conversion est écrite avant la mesure.*

### Bilan du bloc 176 — normalisation et tailles

**2 prédictions, 2 tenues, 0 réfutée.**
`normalize-pilotage` : **0 caractère à corriger, 0 fichier modifié**, code 0,
sur les onze fichiers de son périmètre. Tailles en octets :
`conventions.md` **604 375**, `TODO.md` **299 770**, `BACKLOG.md` **226 997**,
`JOURNAL.md` **53 495** — les quatre **dans les intervalles prédits**, la
conversion Ko → octets ayant été écrite avant la mesure.

---

## Déclaration C131 du bloc 177 — rejouée, NEUF versements neufs

**Recompte nominatif, entrée par entrée** — les **261** du bloc 175, plus :
(262) `tools/frag-conv-3108s16.md`, (263) `tools/frag-backlog-3108s16.md`,
(264) `tools/frag-todo-3108s16.md`, (265) `tools/frag-journal-3108s16.md`,
(266) `tools/insertions-pilotage-3108s16.json`, (267) `conventions.md` ` M`,
(268) `BACKLOG.md` ` M`, (269) `TODO.md` ` M`, (270) `JOURNAL.md` ` M`.
**Total : 270. Hors artefacts : 270 − 3 = 267** (les trois filtrés restent
`batterie-sortie-3108b2`, `batterie-sortie-3108b3`, `predictions-260831`).

## Prédictions — bloc 177, clôture § 7 par `inserer-pilotage.mjs`

- **P177.1** — **TEST NÉGATIF DÉLIBÉRÉ**, `--negatif` altère le dernier
  caractère de l'ancre de la **première** entrée :
  `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code 1**.
- **P177.2** — essai à blanc :
  `Essai a blanc concluant : 4 entree(s), 0 defaut.` puis
  `AUCUN FICHIER ECRIT. Relancer avec --faire.`, **code 0**.
- **P177.3** — `--faire` : `ECRIT : 4 entree(s) dans 4 fichier(s).`, **code 0**.
  ⚠ *La ligne `+N octets` de cet outil affiche des **points de code**
  (`remplacant.length − ancre.length`), défaut déjà relevé le 30/08
  (P158.4) : aucune prédiction de la séance ne porte dessus.*
- **P177.4** — `git status --porcelain | wc -l` → `270` ; hors artefacts → `267`.
- **P177.5** — `node tools/normalize-pilotage.js --check` → **0 caractère**,
  **code 0** : les fragments sont écrits en LF sans invisibles.
- **P177.6** — les quatre fichiers de pilotage portent chacun **exactement
  une** occurrence de la chaîne `séance 16` en tête de leur bloc neuf :
  `grep -c 'séance 16' JOURNAL.md` → `1`.

### Bilan du bloc 177 — clôture § 7 écrite

**6 prédictions, 6 tenues, 0 réfutée.**
✅ **TEST NÉGATIF DÉLIBÉRÉ, cinquième de la séance** : ancre de la première
entrée altérée (`…externeZZZ`), `ancre trouvee 0 fois`,
`REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, code 1 — **et les trois autres
entrées, pourtant valides, ne sont pas appliquées non plus** : le tout-ou-rien
en acte. Puis essai à blanc `4 entree(s), 0 defaut` et
`ECRIT : 4 entree(s) dans 4 fichier(s).`
Tailles après écriture : conventions **611 288**, BACKLOG **230 884**,
TODO **303 281**, JOURNAL **63 465**. `git status` **270 / 267**,
`normalize-pilotage --check` **0 caractère**, code 0.

---

## ⚠ INCIDENT DE COMPTE — le total de prédictions écrit au JOURNAL est FAUX

L'entrée § 7 et le bloc TODO écrits au bloc 177 annoncent
**« 137 publiées, 132 tenues, 5 réfutées — 96,4 % »**. Le décompte
bloc par bloc, relu sur les seize bilans de ce fichier, donne :
**10 + 9 + 8 + 15 + 5 + 7 + 7 + 10 + 10 + 6 + 9 + 9 + 20 + 8 + 2 + 6 = 141**,
dont **136 tenues** et **5 réfutées**.
⚠ *Le chiffre a été composé **de tête** en rédigeant l'entrée, au lieu d'être
additionné sur les bilans — **exactement la faute que les cinq réfutations de
la séance décrivent**, commise une sixième fois, dans le texte qui les
raconte.* **Correction au bloc 178.**

## Déclaration C131 du bloc 178 — rejouée, un versement neuf

**Recompte nominatif :** les **270** entrées du bloc 177, **plus**
`tools/insertions-pilotage-b-3108s16.json` (`??`, non filtré).
`JOURNAL.md` et `TODO.md` sont **déjà** des entrées ` M` : ils changent, ils
ne se dédoublent pas. **Total : 271. Hors artefacts : 268.**

## Prédictions — bloc 178, correction du total de prédictions

Le texte corrigé annonce **144 prédictions, 139 tenues, 5 réfutées, 96,5 %,
sur dix-sept blocs (162 à 178)** — **ce bloc compris**, ses trois prédictions
ci-dessous étant comptées comme tenues. *Un total qui s'inclut lui-même n'est
pas une dérivation interdite : il est une **prédiction**, et il est réfuté si
l'une des trois tombe.* 141 + 3 = 144 ; 136 + 3 = 139 ; 139 / 144 = **96,5 %**.

- **P178.1** — **TEST NÉGATIF DÉLIBÉRÉ**, sixième de la séance :
  `node tools/inserer-pilotage.mjs tools/insertions-pilotage-b-3108s16.json --negatif`
  → `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code 1**.
- **P178.2** — `--faire` → `ECRIT : 2 entree(s) dans 2 fichier(s).`, **code 0**.
- **P178.3** — `git status --porcelain | wc -l` → `271` ; hors artefacts → `268`.

### Bilan du bloc 178 — correction du total, REFUSÉE PAR SA PROPRE GARDE

**3 prédictions, 2 tenues, 1 réfutée.**
P178.1 tenue : le test négatif refuse, code 1. P178.3 tenue : **271 / 268**.

⚠ **P178.2 RÉFUTÉE — `ECRIT : 2 entree(s)` attendu, `REFUS : 1 defaut(s)`
obtenu, ancre du JOURNAL `trouvee 0 fois`.** J'ai écrit l'ancre
`… — 96,4 %**, sur seize blocs (162 à 177).` **de mémoire de ce que je venais
de rédiger** ; le fichier porte `… — 96,4 %**, sur seize blocs. **Quatre tests
négatifs délibérés…`. *Sixième réfutation de la séance, **même famille que les
cinq autres** : un texte écrit de tête au lieu d'être relu sur le fichier. Et
c'est la deuxième fois en deux blocs que la faute est commise **dans le texte
qui la raconte**.*
✅ **Ce qui a fonctionné, et c'est le point** : la garde d'unicité d'ancre a
refusé **le lot entier**, y compris l'entrée TODO qui, elle, était valide.
**Zéro octet écrit à tort, et le JOURNAL n'a pas été à moitié corrigé.**

## Déclaration C131 du bloc 179 — rejouée, un versement neuf

Les **271** entrées du bloc 178, **plus**
`tools/insertions-pilotage-c-3108s16.json`. `JOURNAL.md` et `TODO.md` sont
déjà des entrées. **Total : 272. Hors artefacts : 269.**

## Prédictions — bloc 179, correction du total, ancres RELUES SUR LE FICHIER

Les deux ancres sont désormais **copiées depuis `grep -n` sur le fichier**,
et non composées :
`JOURNAL.md` ligne **19**, `TODO.md` ligne **18**.

Le texte corrigé annonce **146 prédictions, 140 tenues, 6 réfutées, 95,9 %,
sur dix-huit blocs (162 à 179)**, et **cinq tests négatifs délibérés, cinq
refus**. *Décompte : 141 (blocs 162-177) + 3 (bloc 178) + 2 (ce bloc) = 146 ;
136 + 2 + 2 = 140 ; 140 / 146 = 95,9 %. Les cinq tests négatifs sont ceux des
blocs 168, 173, 177, 178 et 179.*

- **P179.1** — `--negatif` → `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code 1**.
- **P179.2** — `--faire` → `ECRIT : 2 entree(s) dans 2 fichier(s).`, **code 0**,
  puis `git status --porcelain | wc -l` → `272`, hors artefacts `269`.

### Bilan du bloc 179 — correction appliquée

**2 prédictions, 2 tenues, 0 réfutée.** Test négatif : refus, code 1. Écriture :
`ECRIT : 2 entree(s) dans 2 fichier(s).`, `git status` **272 / 269**,
`normalize-pilotage --check` **0 caractère**, code 0.
✅ **Les ancres relues sur le fichier par `grep` passent du premier coup, là
où les mêmes ancres composées de tête étaient tombées au bloc précédent.**

## Déclaration C131 du bloc 180 — rejouée, un versement neuf

Les **272** entrées du bloc 179, **plus**
`tools/insertions-pilotage-d-3108s16.json`. **Total : 273. Hors artefacts : 270.**

## Prédictions — bloc 180, DERNIER BLOC D'ÉCRITURE : la phrase de bilan

⚠ **Le bloc 179 a corrigé le compte et laissé la PHRASE fausse** : les deux
fichiers portent encore « les **cinq** réfutations », alors qu'il y en a
**six** depuis le bloc 178. Ce bloc remplace la phrase entière — compte **et**
qualification — en une passe, ancres relues sur le fichier.

Chiffre final annoncé, **ce bloc compris** : **148 prédictions, 142 tenues,
6 réfutées, 96,0 %, sur dix-neuf blocs (162 à 180)**, **six tests négatifs
délibérés** (blocs 168, 173, 177, 178, 179, 180), **six refus, zéro octet
écrit à tort**. *Décompte : 146 + 2 = 148 ; 140 + 2 = 142 ;
142 / 148 = 95,95 % → **96,0 %**.*

- **P180.1** — `--negatif` → `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code 1**.
- **P180.2** — `--faire` → `ECRIT : 2 entree(s) dans 2 fichier(s).`, **code 0**,
  puis `git status --porcelain | wc -l` → `273`, hors artefacts `270`, et
  `grep -c 'cinq réfutations' JOURNAL.md TODO.md` → **`0` dans les deux**.

### Bilan du bloc 180 — la phrase de bilan

**2 prédictions, 1 tenue, 1 réfutée.**
P180.1 tenue : refus, code 1, **et l'entrée TODO valide n'est pas appliquée
non plus**. P180.2 : l'écriture et le `git status` sont justes
(`ECRIT : 2 entree(s)`, **273 / 270**), mais son **troisième terme tombe** —
`grep -c 'cinq réfutations'` rend **1** dans `JOURNAL.md`, prédit `0`.

⚠ **P180.2 RÉFUTÉE — deux autres occurrences vivaient hors de la phrase de
bilan**, et je n'avais inventorié que celle que je venais d'écrire : le
**titre** de l'entrée (« cinq réfutations qui sont toutes la même ») et un
**paragraphe narratif** en majuscules (« LES CINQ RÉFUTATIONS SONT LA MÊME »),
que le motif sensible à la casse ne compte pas. *C'est **exactement** la
famille C110 : un compteur publié sans que sa population ait été inventoriée,
et un motif dont l'insensibilité à la casse n'a pas été pesée. Septième
réfutation, septième fois la même faute, et la troisième d'affilée dans le
texte qui la raconte.*

## Déclaration C131 du bloc 181 — rejouée, un versement neuf

Les **273** entrées du bloc 180, **plus**
`tools/insertions-pilotage-e-3108s16.json`. **Total : 274. Hors artefacts : 271.**

## Prédictions — bloc 181, DERNIER BLOC. Les deux occurrences restantes.

Population **inventoriée par `grep -n` avant d'écrire la prédiction**, motif
rendu **insensible à la casse** : `JOURNAL.md` **ligne 13** (le titre de
l'entrée) et **ligne 28** (l'ouverture du paragraphe narratif). `TODO.md` :
**zéro occurrence**, le bloc 180 l'a refermé.

Chiffre final, **ce bloc compris** : **150 prédictions, 143 tenues,
7 réfutées, 95,3 %**, sur **vingt blocs (162 à 181)**, **sept tests négatifs
délibérés, sept refus, zéro octet écrit à tort**. *Décompte : 148 + 2 = 150 ;
142 + 1 = 143 ; 143 / 150 = **95,3 %**.*

- **P181.1** — `--negatif` → `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code 1**.
- **P181.2** — `--faire` → `ECRIT : 3 entree(s) dans 2 fichier(s).`, **code 0**,
  puis `grep -ci 'cinq réfutations' JOURNAL.md TODO.md` → **`0` dans les deux**,
  et `git status --porcelain | wc -l` → `274`, hors artefacts `271`.

### Bilan du bloc 181 — les deux occurrences restantes

**2 prédictions, 2 tenues, 0 réfutée.** Test négatif : refus, code 1.
`ECRIT : 3 entree(s) dans 2 fichier(s).`, `grep -ci` **0 / 0**,
`git status` **274 / 271**, `normalize --check` **0**, code 0.
✅ **La population du motif a été inventoriée par `grep -n` AVANT la
prédiction, et le motif rendu insensible à la casse : le compte tombe juste
du premier coup.** *Troisième parade de la séance, même forme que les deux
autres — remplacer une mémoire par une lecture.*

## Déclaration C131 du bloc 182 — rejouée, un versement neuf

Les **274** entrées du bloc 181, **plus**
`tools/insertions-pilotage-f-3108s16.json`. **Total : 275. Hors artefacts : 272.**

## Prédictions — bloc 182, SORTIE DE LA RÉCURSION

⚠ **Le bloc 181 a corrigé la qualification et laissé le CHIFFRE d'un bloc en
arrière** : le JOURNAL annonce `148 / 142 / 6 — 96,0 %, sur dix-neuf blocs`,
alors que le décompte va maintenant à `150 / 143 / 7 — 95,3 %` sur vingt.
⚠ **Et la boucle ne se referme pas d'elle-même** : chaque bloc de correction
ajoute ses propres prédictions et son propre test négatif, donc périme le
chiffre qu'il vient d'écrire. *Trois tours l'ont montré.*

✅ **Sortie retenue, et c'est C130 qui la donne** : *le dépôt porte la trace
intégrale, `tools/predictions-260831.md` est le registre.* La phrase du
JOURNAL **arrête son total au bloc 181** et **renvoie au registre** pour les
blocs de correction qui suivent. Elle cesse ainsi de se compter elle-même, et
le chiffre qu'elle porte est vrai et stable.

- **P182.1** — `--negatif` → `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code 1**.
- **P182.2** — `--faire` → `ECRIT : 1 entree(s) dans 1 fichier(s).`, **code 0**,
  puis `git status --porcelain | wc -l` → `275`, hors artefacts `272`, et
  `grep -c '150 publiées' JOURNAL.md` → `1`.

### Bilan du bloc 182 — la récursion est cassée

**2 prédictions, 2 tenues, 0 réfutée.** Test négatif : refus, code 1.
`ECRIT : 1 entree(s) dans 1 fichier(s).`, `git status` **275 / 272**,
`grep -c '150 publiées'` **1**, `normalize --check` **0**, code 0.
✅ **La phrase du JOURNAL arrête son total au bloc 181 et renvoie au
registre : elle cesse de se périmer à chaque correction.**

## Déclaration C131 du bloc 183 — rejouée, deux versements neufs

Les **275** entrées du bloc 182, plus `tools/frag-conv-b-3108s16.md` et
`tools/insertions-pilotage-g-3108s16.json`. `conventions.md` est **déjà** une
entrée ` M`. **Total : 277. Hors artefacts : 274.**

## Prédictions — bloc 183, sixième entrée § 8

⚠ *Ce bloc peut désormais écrire sans périmer le JOURNAL : la phrase du bloc
182 borne son total au bloc 181 et renvoie au registre.*

- **P183.1** — `--negatif` → `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code 1**.
- **P183.2** — `--faire` → `ECRIT : 1 entree(s) dans 1 fichier(s).`, **code 0**,
  puis `git status --porcelain | wc -l` → `277`, hors artefacts `274`, et
  `node tools/normalize-pilotage.js --check` → **0 caractère**, code 0.

### Bilan du bloc 183 — sixième entrée § 8

**2 prédictions, 2 tenues, 0 réfutée.** Refus au test négatif, code 1 ;
`ECRIT : 1 entree(s) dans 1 fichier(s).` ; `conventions.md` **613 124 octets** ;
`git status` **277 / 274** ; `normalize --check` **0**, code 0.

## Déclaration C131 du bloc 184 — rejouée, un versement neuf

Les **277** entrées du bloc 183, plus
`tools/insertions-pilotage-h-3108s16.json`. `JOURNAL.md` est **déjà** une
entrée. **Total : 278. Hors artefacts : 275.**

## Prédictions — bloc 184, accord du compte d'entrées § 8

⚠ Le bloc 183 a porté les entrées § 8 de la séance de **cinq à six** ;
l'entrée § 7 du JOURNAL en annonce encore **cinq**. Ancre relue par `grep -n`
sur le fichier, motif **insensible à la casse** pour inventorier la
population : `grep -cin 'cinq entrées § 8' JOURNAL.md` → **1**, ligne **18**,
seule occurrence.

- **P184.1** — `--negatif` → `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code 1**.
- **P184.2** — `--faire` → `ECRIT : 1 entree(s) dans 1 fichier(s).`, **code 0**,
  puis `grep -ci 'cinq entrées § 8' JOURNAL.md` → `0`,
  `grep -c 'Six entrées § 8' JOURNAL.md` → `1`,
  `git status --porcelain | wc -l` → `278`, hors artefacts `275`.

### ⚠ Bilan du bloc 184 — REFUSÉ PAR SA PROPRE GARDE DE CONSTRUCTION DE TABLE

**2 prédictions, 0 tenue, 2 réfutées.** Ni l'une ni l'autre n'a pu être
mesurée : le script qui compose la table s'est arrêté sur une assertion, la
table n'a pas été écrite, et les deux lancements de `inserer-pilotage.mjs` ont
rendu `ENOENT`, **code 1** au lieu des sorties attendues.

⚠ **Cause, et elle est étroite** : l'assertion inventoriait le motif
`'ntrées § 8'`, **plus large que le motif prédit** — elle a trouvé **trois**
lignes (18, 64, 98), les deux autres étant les `Deux entrées § 8` de la
séance 15 et les `Trois entrées § 8` de la séance 14. **L'inventaire de la
prédiction, lui, était juste** : `grep -cin 'cinq entrées § 8'` rend bien
**1**. *La garde a arrêté un geste qui était correct — c'est le bon sens de
l'erreur, et zéro octet n'a été écrit.*

### Bilan du bloc 185 — reprise, accord du compte d'entrées § 8

**2 prédictions, 2 tenues, 0 réfutée.** Assertion resserrée sur le motif
réellement prédit (`**Cinq entrées § 8**`, **1** occurrence). Test négatif :
`**Cinq entrées § 8*ZZZ`, refus, code 1. Écriture :
`ECRIT : 1 entree(s) dans 1 fichier(s).`, `JOURNAL.md` **63 801 octets**.
`cinq entrées § 8` **0**, `Six entrées § 8` **1**, `git status` **278 / 275**,
`normalize --check` **0**, code 0.

---

# TOTAL DÉFINITIF DE LA SÉANCE 16

**158 prédictions publiées avant leur bloc, 149 tenues, 9 réfutées — 94,3 %**,
sur **vingt-quatre blocs (162 à 185)**.
**Dix tests négatifs délibérés, dix refus, ZÉRO OCTET ÉCRIT À TORT.**

**Décompte, bloc par bloc, additionné sur les bilans de ce fichier et non
composé de tête** — 162 : 10/10 · 163 : 9/9 · 164 : 8/8 · 165 : 15/15 ·
166 : 4/5 · 167 : 4/7 · 168 : 7/7 · 169 : 10/10 · 170 : 10/10 · 171 : 5/6 ·
172 : 9/9 · 173 : 9/9 · 174 : 20/20 · 175 : 8/8 · 176 : 2/2 · 177 : 6/6 ·
178 : 2/3 · 179 : 2/2 · 180 : 1/2 · 181 : 2/2 · 182 : 2/2 · 183 : 2/2 ·
184 : 0/2 · 185 : 2/2. **Somme : 149 sur 158.**

**LES NEUF RÉFUTATIONS, ET ELLES SONT HUIT FOIS LA MÊME.**
*Sept portent sur un compte de mes propres éditions* : trois `numstat`
(P164 tenue mais P167.1 `12 0` pour `11 0`, P171.5 `12 1` pour `13 2`,
P166.4 `hubNomme` 3 pour 2), deux `git status` (P167.2 et P167.3, total faux
et sous-compteur juste), deux textes de pilotage (P178.2, ancre composée de
tête ; P180.2, population d'occurrences non inventoriée et motif sensible à la
casse). *Les deux dernières* (P184.1 et P184.2) sont une **garde de
construction trop large** qui a arrêté un geste correct.
⚠ **Aucune des neuf ne porte sur un verdict, une mesure du corpus, un
comportement d'émetteur ou un contrôle de rendu.** Les **20 prédictions du
bloc 174** — le build de clôture, celui qui décide si le chantier marche — sont
**toutes tenues**.

**CE QUE LA SÉANCE A POSÉ** : A1 à A5, B1 à B3, C1 à C4, mesurés en local sur
`public/` régénéré. **Ce qu'elle n'a pas fait** : le contrôle en ligne, qui
attend le commit de Tim et la CI.

## Déclaration C131 du bloc 186 — rejouée, un versement neuf

Les **278** entrées du bloc 185, plus
`tools/insertions-pilotage-i-3108s16.json`. `JOURNAL.md` et `TODO.md` sont
déjà des entrées. **Total : 279. Hors artefacts : 276.**

## Prédictions — bloc 186, le compte de blocs du périmètre

⚠ Dernier chiffre resté en arrière : le **périmètre** des deux fichiers
annonce `seize blocs (162 à 177)`, alors que la séance en compte **vingt-quatre
(162 à 185)**. Population inventoriée **avant** de prédire, motif insensible à
la casse : `grep -cin 'seize blocs'` → **1** dans `JOURNAL.md`, **1** dans
`TODO.md`, **aucune autre forme** du compte de blocs ailleurs.
*La phrase de bilan des prédictions, elle, reste bornée au bloc 181 et
renvoie au registre : elle n'est pas touchée.*

- **P186.1** — `--negatif` → `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code 1**.
- **P186.2** — `--faire` → `ECRIT : 2 entree(s) dans 2 fichier(s).`, **code 0**,
  puis `grep -cin 'seize blocs' JOURNAL.md TODO.md` → **0 dans les deux**,
  `git status --porcelain | wc -l` → `279`, hors artefacts `276`, et
  `normalize-pilotage --check` → **0 caractère**, code 0.

### Bilan du bloc 186 — le compte de blocs

**2 prédictions, 2 tenues, 0 réfutée.** Refus au test négatif, code 1 ;
`ECRIT : 2 entree(s) dans 2 fichier(s).` ; `seize blocs` **0 / 0** ;
`git status` **279 / 276** ; `normalize --check` **0**, code 0.

---

# TOTAL DÉFINITIF, RÉVISÉ APRÈS LES BLOCS 185 ET 186

**160 prédictions publiées avant leur bloc, 151 tenues, 9 réfutées — 94,4 %**,
sur **vingt-cinq blocs (162 à 186)**.
**Onze tests négatifs délibérés, onze refus, ZÉRO OCTET ÉCRIT À TORT.**
*158 + 2 = 160 ; 149 + 2 = 151 ; 151 / 160 = 94,4 %.*

⚠ **Ce fichier est le registre, et lui seul se met à jour à chaque bloc
(C130).** Le JOURNAL et le TODO portent un chiffre **borné au bloc 181** et
renvoient ici : c'est la règle sortie du bloc 182, versée en § 8 au bloc 183,
et c'est ce qui a arrêté une récursion de correction qui avait déjà coûté
quatre blocs.
