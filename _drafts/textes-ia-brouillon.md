# Textes du chantier « site exploitable par une IA » — brouillon

> **VALIDÉ PAR TIM LE 31/08 (séance 15)**, les quatre sections. Les textes
> partent tels quels aux blocs C1, C3 et C4 de la séance Code.
>
> Fichier de travail privé (non publié). Rédigé en séance chat 15 (31/08).
> **Rien de ce fichier n'est écrit dans `content/`** : les textes ci-dessous sont
> des brouillons soumis à la relecture de Tim. Une fois validés, ils sont posés
> par les blocs C1, C3 et C4 du § 8 de `_drafts/cadrage-ia-quatre-mains.md`.
>
> Quatre sections : (1) corps de `content/ia/index.md` en français ;
> (2) le même en anglais, à envelopper dans `<section lang="en">` ;
> (3) carte des cinq phases pour `index.md` et `en/index.md`, plus leur
> `description:` ; (4) phrase du hub `conduite/index.md` et de sa jumelle.

---

## Décisions rendues (Tim, 31/08)

1. **Rôle et titre de `/ia/` : `Utiliser ce site avec un assistant IA`.** La page
   porte **l'explication du site et les règles d'encadrement de l'étudiant** ;
   idéalement l'étudiant n'y arrive pas de lui-même, et c'est l'assistant qui,
   parti de la racine, va l'y chercher. Conséquence de rédaction : la page se
   suffit à elle-même — elle ne suppose pas que son lecteur ait déjà lu la
   racine, et elle redit ce que le site couvre avant d'énoncer les règles.
2. **URL absolues plutôt que wiki-links, sur `/ia/` uniquement.** Motif mécanique :
   le préambule de `llms.txt` est le corps de cette page, front matter et
   commentaires retirés (bloc A2) — **aucune résolution de wiki-link n'a lieu**.
   Un `[[concept|Concept]]` y arriverait tel quel, illisible pour la machine à
   qui la page est destinée. Coût : la page perd les popovers au survol, sans
   conséquence sur une page hors parcours. Les sections 3 et 4, elles, restent
   en wiki-links : ce sont des pages humaines.
3. **Gloses au cadratin : aucune n'est créée** — deux-points là où le style local
   emploierait ` — `. Motif : le chantier des puces compte **1 164 gloses FR sur
   178 porteuses**, et `index.md` comme `conduite/index.md` en sont ; écrire à
   l'ancienne forme ajouterait une dizaine d'occurrences à une population qu'on
   va traiter. **Prix assumé** : `index.md` reste hétérogène (l'ancienne liste
   « Par où commencer » garde ses cadratins, la nouvelle carte porte des
   deux-points) jusqu'au passage du chantier.
4. **`description:` de `en/index.md` sans l'adresse de `/ia/`** : la FR seule la
   porte, conformément au § 8.
5. **Blancs autour de `<section lang="en">`** : une ligne vide après la balise
   ouvrante et avant la fermante, sans quoi le Markdown du bloc anglais n'est pas
   interprété. Contrôle à la recette : les titres du bloc EN sortent en `<h2>`.

### Ce qui achemine l'assistant de la racine vers `/ia/`

Décision 1 posée, le dispositif entier repose sur **un seul lien**, et il n'est
visible d'aucun humain. Trois canaux le portent, et aucun n'est un texte caché :

- le **`<meta description>`** de la racine, émis par Quartz depuis le front
  matter (section 3c), lu par tout outil de fetch et jamais affiché ;
- le **Markdown brut** de la racine (`/index.md`, bloc A1), qui conserve le front
  matter et donc la même adresse ;
- **`/llms.txt`**, dont le préambule *est* le corps de `/ia/` : un assistant qui
  lit l'index a les règles sans avoir à ouvrir la page.

⚠ **Ce qui n'est pas couvert** : l'assistant qui fetche la racine, ignore la
description et ne sonde pas `llms.txt` — la famille « racine seule » mesurée le
31/08. Pour lui, la **carte des cinq phases** de la section 3 est le filet : elle
le rend conforme sur P2 sans qu'il ait rien suivi. Un pointeur *visible* en bas
de la racine lèverait le doute, au prix de la contrainte de la décision 1. **À ne
pas poser avant mesure** : la recette APRÈS dit en trois prompts si le canal
description suffit.

---

## 1. Corps de `content/ia/index.md` — français

<!-- Front matter proposé, à confirmer :
title: Utiliser ce site avec un assistant IA
description: "TheSkillCodex, wiki du projet mécatronique I3.5-I3.6 : cinq phases du cycle en V, système embarqué, mécanique. Règles d'usage du corpus pour un travail avec un assistant : https://timturko.github.io/TheSkillCodex/ia/"
aliases: [IA]
aa: []
tags: []
lang: fr
bilingue: true
draft: false
-->

Cette page dit comment ce site s'utilise quand un étudiant travaille avec un assistant IA : ce que le corpus couvre, comment on le cite, et ce qu'on ne lui demande pas de faire à la place de l'équipe.

Elle est publique et lisible par tout le monde. Ce qu'on y écrit pour la machine, on le dit aussi aux étudiants en cours.

### Ce que couvre le site

TheSkillCodex accompagne le **projet mécatronique** des semestres I3.5 et I3.6, adossé au référentiel de compétences de l'école. Fil rouge : un **bras robotisé 3 axes**. Trois branches :

- **Conduite de projet** (https://timturko.github.io/TheSkillCodex/conduite/) : la démarche, cycle en V, phases, jalons, méthodes, normes, écoconception. Trois index : outils projet (`/conduite/proj/`), méthodes et organisation (`/conduite/meo/`), normes, sécurité et écoconception (`/conduite/ese/`).
- **Système embarqué** (https://timturko.github.io/TheSkillCodex/embarque/) : électronique et informatique embarquée, du cadrage du besoin jusqu'à la validation au banc. Cette colonne est orthogonale au cycle en V : elle décrit l'ingénierie, le V porte le pilotage.
- **Méca** (https://timturko.github.io/TheSkillCodex/meca/) : matériaux et mécanique, volontairement mince, en interface vers les cours de mécanique et de fabrication.

Chaque fiche est **courte et autoportante**, environ cinq minutes de lecture, et porte sous son titre une étiquette `trame` (une phase du V ou une étape de réalisation), `tuto` (la mise en œuvre d'un outil) ou `notion` (un rappel court). Chaque fiche existe en français et en anglais.

### Le projet en cinq phases

Le parcours suit une logique de **cycle en V** : la branche descendante définit le système, la branche ascendante le réalise et le valide. Chaque phase produit un livrable identifiable et conditionne la suivante. **Aucune phase n'est validée tant que son livrable n'est pas accepté en revue.**

1. **Spécification technique** — https://timturko.github.io/TheSkillCodex/conduite/proj/specification-technique
   Traduire un besoin en exigences techniques mesurables.
   *Livrable : le cahier des charges fonctionnel (CdCF), complété d'un dossier de spécification technique.*
2. **Concept** — https://timturko.github.io/TheSkillCodex/conduite/proj/concept
   Choisir une architecture et la pré-dimensionner.
   *Livrable : un dossier de concept présentant le schéma bloc, les diagrammes de chaînes et les calculs de pré-dimensionnement.*
3. **Preuve de concept** — https://timturko.github.io/TheSkillCodex/conduite/proj/preuve-de-concept
   Lever les incertitudes techniques avant la conception détaillée.
   *Livrable : un ou plusieurs prototypes minimaux, qui démontrent que les incertitudes sont levées.*
4. **Dossier technique** — https://timturko.github.io/TheSkillCodex/conduite/proj/dossier-technique
   Produire tous les documents permettant la fabrication.
   *Livrable : le dossier technique complet, suffisant pour qu'une équipe extérieure puisse fabriquer et tester le système.*
5. **Intégration et tests** — https://timturko.github.io/TheSkillCodex/conduite/proj/integration-et-tests
   Assembler, qualifier, conclure le projet.
   *Livrable : prototype fonctionnel, dossier de qualification, soutenance et retour d'expérience.*

Trois activités ne sont pas des phases mais des **fils continus**, présents de la première à la dernière semaine du projet : la **gestion de projet** (`/conduite/proj/gestion-de-projet`), l'**écoconception** (`/conduite/proj/ecoconception`) et la **sécurité et qualité** (`/conduite/proj/securite-et-qualite`). Elles apparaissent dans les livrables de chaque phase, jamais dans une phase dédiée.

**Cette page ne dit pas comment on mène une phase, elle dit où c'est écrit.** La méthode, les étapes, les attendus et les pièges de chaque phase vivent dans sa fiche trame : on l'ouvre.

### Règles d'usage du corpus

Ce qui suit décrit l'usage qu'on attend de ce site, pour l'étudiant comme pour l'assistant qui l'accompagne.

- **On cite la fiche avant de conseiller**, avec son adresse exacte. Une réponse qui parle du projet sans pointer une fiche ne dit pas d'où elle vient, et l'étudiant ne peut pas la vérifier.
- **On dit quand le corpus ne couvre pas la question.** Le site est un socle, pas une encyclopédie : « ce point n'est pas traité ici » est une réponse utile, et elle vaut mieux qu'un comblement plausible.
- **On renvoie vers la fiche plutôt que de la restituer.** Deux ou trois lignes pour situer, puis l'adresse. Une fiche restituée en entier occupe la place de sa lecture, et c'est la lecture qui forme.
- **On nomme les choses comme le site les nomme**, phases, livrables et jalons compris. Un vocabulaire voisin mais différent fabrique une méthode que l'équipe croira être la nôtre.

Trois choses ne se font pas à la place de l'équipe.

- **Le CdCF ne s'écrit pas ici.** C'est le livrable évalué de la phase de spécification. *À la place, on* relit un CdCF rédigé par l'équipe, on questionne une exigence non chiffrée, on montre en quoi une formulation n'est pas opposable.
- **Une revue ne se valide pas ici.** La revue de CdCF est un **jalon enseignant** : l'école y tient le rôle du client, et elle seule prononce l'acceptation. *À la place, on* aide à préparer la revue, on liste ce qui manque, on rejoue les questions probables.
- **Le choix du matériel ne se tranche pas par verdict.** Le site n'oppose pas une carte à une autre : il outille le choix par l'**adéquation technique** (entrées-sorties, périphériques, niveaux de tension, contraintes, besoin ou non de sans-fil) et par une **matrice de décision** pondérée, défendable en revue. *À la place, on* renvoie à `choisir-le-materiel` (https://timturko.github.io/TheSkillCodex/embarque/realisation/choisir-le-materiel) et à `matrice-de-decision` (https://timturko.github.io/TheSkillCodex/conduite/proj/matrice-de-decision), et on aide à poser les critères plutôt qu'à désigner un gagnant.

### Vocabulaire et cadre

- **Termes que le corpus n'emploie pas** : « dérisquer » (on dit *lever une incertitude* ou *valider le fonctionnement*), « point dur » (on dit *incertitude*), « phase 2 » en prose (on nomme la phase), « soutenance intermédiaire » (on dit *revue de CdCF*).
- **Le matériel est fourni par l'école** : un choix se justifie sur l'adéquation technique, jamais sur le prix.
- **Mécanique, fabrication et analyse de cycle de vie** sont enseignées par les cours des collègues. Le site y renvoie et ne les refait pas.

### Langue

Le corpus existe en **français**, qui est la source de référence, et en **anglais**, qui en est la traduction. On répond et on cite **dans la langue de l'étudiant** : à un étudiant francophone, on donne l'adresse de la fiche française. En cas d'écart entre les deux versions, la version française fait foi.

### Lire le corpus

- **Index complet** : https://timturko.github.io/TheSkillCodex/llms.txt — une ligne par fiche, avec son titre, son adresse en français et en anglais, son type, ses phases et sa définition.
- **Markdown brut** : chaque fiche existe en Markdown brut à la même adresse suffixée `.md`, par exemple https://timturko.github.io/TheSkillCodex/conduite/proj/concept.md — c'est la lecture la plus fidèle et la moins coûteuse.

---

## 2. Corps de `content/ia/index.md` — anglais

*À poser dans le même fichier, sous le bloc français, enveloppé ainsi :*

```
<section lang="en">

… le texte ci-dessous …

</section>
```

This page sets out how the site is meant to be used when a student works with an AI assistant: what the corpus covers, how it is cited, and what is not asked of an assistant on the team's behalf.

It is public and readable by anyone. What is written here for the machine is also what students are told in class.

### What the site covers

TheSkillCodex is the teaching support for the **mechatronics project** of semesters I3.5 and I3.6, aligned with the school's competency framework. Running example: a **3-axis robotic arm**. Three branches:

- **Project management** (https://timturko.github.io/TheSkillCodex/en/conduite/): the method, V-model, phases, milestones, tools, standards, eco-design. Three indexes: project tools (`/en/conduite/proj/`), methods and organisation (`/en/conduite/meo/`), standards, safety and eco-design (`/en/conduite/ese/`).
- **Embedded systems** (https://timturko.github.io/TheSkillCodex/en/embarque/): electronics and embedded software, from scoping the need to validation on the bench. This column runs orthogonally to the V-model: it describes the engineering, while the V-model carries the project steering.
- **Mechanical** (https://timturko.github.io/TheSkillCodex/en/meca/): materials and mechanics, deliberately thin, an interface towards the mechanical engineering and manufacturing courses.

Every page is **short and self-contained**, about five minutes of reading, and carries under its title a `trame` (a phase of the V-model or a build step), `tuto` (putting a tool into practice) or `notion` (a short reminder) tag. Every page exists in French and in English.

### The project in five phases

The path follows a **V-model** logic: the descending branch defines the system, the ascending branch builds and validates it. Each phase produces an identifiable deliverable and conditions the next one. **No phase is validated until its deliverable has been accepted at a review.**

1. **Technical specification** — https://timturko.github.io/TheSkillCodex/en/conduite/proj/specification-technique-en
   Turn a need into measurable technical requirements.
   *Deliverable: the cahier des charges fonctionnel (CdCF, the French functional requirements specification), together with a technical specification file.*
2. **Concept** — https://timturko.github.io/TheSkillCodex/en/conduite/proj/concept-en
   Choose an architecture and size it roughly.
   *Deliverable: a concept file presenting the block diagram, the chain diagrams and the rough sizing calculations.*
3. **Proof of concept** — https://timturko.github.io/TheSkillCodex/en/conduite/proj/preuve-de-concept-en
   Resolve the technical unknowns before detailed design.
   *Deliverable: one or more minimal prototypes, showing that the unknowns have been resolved.*
4. **Technical design file** — https://timturko.github.io/TheSkillCodex/en/conduite/proj/dossier-technique-en
   Produce every document needed for manufacturing.
   *Deliverable: the complete technical design file, sufficient for an outside team to build and test the system.*
5. **Integration and testing** — https://timturko.github.io/TheSkillCodex/en/conduite/proj/integration-et-tests-en
   Assemble, qualify, close the project.
   *Deliverable: a working prototype, a qualification file, the final presentation and the lessons learned.*

Three activities are not phases but **continuous threads**, present from the first week of the project to the last: **project planning and tracking** (`/en/conduite/proj/gestion-de-projet-en`), **eco-design** (`/en/conduite/proj/ecoconception-en`) and **safety and quality** (`/en/conduite/proj/securite-et-qualite-en`). They appear in the deliverables of every phase, never in a phase of their own.

**This page does not say how a phase is run, it says where that is written.** The method, the steps, the expected outputs and the pitfalls of each phase live in its framework page: open it.

### How the corpus is meant to be used

What follows describes the use expected of this site, by the student and by the assistant working alongside them.

- **The page is cited before advice is given**, with its exact address. An answer that discusses the project without pointing to a page does not say where it comes from, and the student cannot check it.
- **It is said when the corpus does not cover the question.** The site is a foundation, not an encyclopaedia: "this point is not covered here" is a useful answer, and it beats a plausible filler.
- **The page is pointed to rather than reproduced.** Two or three lines to place it, then the address. A page reproduced in full takes the place of reading it, and it is the reading that teaches.
- **Things are named as the site names them**, phases, deliverables and milestones included. A neighbouring but different vocabulary builds a method the team will take for ours.

Three things are not done on the team's behalf.

- **The CdCF is not written here.** It is the assessed deliverable of the specification phase. *Instead*, a CdCF written by the team is reviewed, an unquantified requirement is questioned, and it is shown why a wording is not opposable.
- **A review is not validated here.** The CdCF review is a **teaching milestone**: the school plays the client, and only the school grants acceptance. *Instead*, help is given to prepare the review, to list what is missing, to rehearse the likely questions.
- **A hardware choice is not settled by verdict.** The site does not pit one board against another: it equips the choice through **technical fit** (I/O, peripherals, voltage levels, constraints, whether wireless is needed) and through a weighted **decision matrix** that can be defended at a review. *Instead*, point to `choisir-le-materiel` (https://timturko.github.io/TheSkillCodex/en/embarque/realisation/choisir-le-materiel-en) and to `matrice-de-decision` (https://timturko.github.io/TheSkillCodex/en/conduite/proj/matrice-de-decision-en), and help set the criteria rather than name a winner.

### Vocabulary and framing

- **Wording the corpus does not use**: "de-risking" (it says *resolving an uncertainty* or *validating that it works*), "pain point" (it says *uncertainty*), "phase 2" in prose (the phase is named), "interim presentation" (it says *CdCF review*).
- **The hardware is supplied by the school**: a choice is justified on technical fit, never on price.
- **Mechanics, manufacturing and life-cycle assessment** are taught in colleagues' courses. The site points to them and does not redo them.

### Language

The corpus exists in **French**, which is the reference source, and in **English**, which is its translation. Answers and citations follow **the language of the student**: a French-speaking student is given the address of the French page. Where the two versions differ, the French one prevails.

### Reading the corpus

- **Full index**: https://timturko.github.io/TheSkillCodex/llms.txt — one line per page, with its title, its French and English addresses, its type, its phases and its definition.
- **Raw Markdown**: every page exists as raw Markdown at the same address with a `.md` suffix, for instance https://timturko.github.io/TheSkillCodex/en/conduite/proj/concept-en.md — the most faithful and the cheapest read.

---

## 3. Carte des cinq phases sur les racines

### 3a. `content/index.md` — section à insérer entre « Par où commencer » et « À propos »

```markdown
## Le projet en cinq phases

Le projet suit un **cycle en V** : la branche descendante définit le système, la branche ascendante le réalise et le valide. Chaque phase produit un livrable identifiable et conditionne la suivante ; aucune n'est validée tant que son livrable n'est pas accepté en revue. Le détail de chaque phase est dans sa fiche : [[conduite/index|Conduite de projet]].

1. **[[specification-technique|Spécification technique]]** : traduire un besoin en exigences techniques mesurables. Livrable : le [[cahier-des-charges-fonctionnel|CdCF]] et le dossier de spécification.
2. **[[concept|Concept]]** : choisir une architecture et la pré-dimensionner. Livrable : le dossier de concept.
3. **[[preuve-de-concept|Preuve de concept]]** : lever les incertitudes techniques avant la conception détaillée. Livrable : les prototypes minimaux.
4. **[[dossier-technique|Dossier technique]]** : produire tous les documents permettant la fabrication. Livrable : le dossier technique complet.
5. **[[integration-et-tests|Intégration et tests]]** : assembler, qualifier, conclure le projet. Livrable : prototype fonctionnel, dossier de qualification, soutenance et REX.

Trois **fils continus** traversent tout le projet, de la première à la dernière semaine : [[gestion-de-projet|gestion de projet]], [[ecoconception|écoconception]], [[securite-et-qualite|sécurité et qualité]].
```

### 3b. `content/en/index.md` — même section, entre « Where to start » et « About »

```markdown
## The project in five phases

The project follows a **V-model**: the descending branch defines the system, the ascending branch builds and validates it. Each phase produces an identifiable deliverable and conditions the next one; none is validated until its deliverable has been accepted at a review. The detail of each phase sits in its own page: [[en/conduite/index|Project management]].

1. **[[specification-technique-en|Technical specification]]**: turn a need into measurable technical requirements. Deliverable: the [[cahier-des-charges-fonctionnel-en|CdCF]] and the specification file.
2. **[[concept-en|Concept]]**: choose an architecture and size it roughly. Deliverable: the concept file.
3. **[[preuve-de-concept-en|Proof of concept]]**: resolve the technical unknowns before detailed design. Deliverable: the minimal prototypes.
4. **[[dossier-technique-en|Technical design file]]**: produce every document needed for manufacturing. Deliverable: the complete technical design file.
5. **[[integration-et-tests-en|Integration and testing]]**: assemble, qualify, close the project. Deliverable: a working prototype, a qualification file, the final presentation and the lessons learned.

Three **continuous threads** run through the whole project, from the first week to the last: [[gestion-de-projet-en|project planning and tracking]], [[ecoconception-en|eco-design]], [[securite-et-qualite-en|safety and quality]].
```

### 3c. `description:` explicites

`content/index.md` (porte l'adresse de `/ia/`) :

```yaml
description: "Wiki du projet mécatronique des semestres I3.5 et I3.6 : cinq phases du cycle en V, système embarqué, mécanique. Fil rouge, un bras robotisé 3 axes. Travail avec un assistant IA : https://timturko.github.io/TheSkillCodex/ia/"
```

`content/en/index.md` :

```yaml
description: "Teaching wiki for the mechatronics project of semesters I3.5 and I3.6: the five phases of the V-model, embedded systems, mechanics. Running example, a 3-axis robotic arm. French is the reference version."
```

*Rappel de circuit (§ 8, C3) : la jumelle `en/index.md` passe par le circuit de traduction et `--recaler`, elle ne s'édite pas à la main hors de ce circuit.*

---

## 4. Phrase du hub `conduite/index.md` et de sa jumelle

Une seule ligne change dans chaque fichier, en tête de la section « Comment lire ce site » / « How to read this site ». Motif : le champ `type:` n'est pas affiché par Quartz, alors que l'étiquette, elle, l'est — les 468 fiches qui portent un `type:` le portent aussi en étiquette.

### 4a. `content/conduite/index.md`

Avant :

```markdown
Le tutoriel comporte **trois types de fiches** que tu reconnaîtras au champ `type:` dans leur en-tête :
```

Après :

```markdown
Le tutoriel comporte **trois types de fiches**, reconnaissables à leur étiquette `trame`, `tuto` ou `notion` sous le titre :
```

### 4b. `content/en/conduite/index.md`

Avant :

```markdown
The tutorial has **three kinds of page**, which you can tell apart by the `type:` field in their header:
```

Après :

```markdown
The tutorial has **three kinds of page**, which you can tell apart by the `trame`, `tuto` or `notion` tag shown under the title:
```

*Les valeurs d'étiquette restent en français dans le fichier anglais : ce sont les chaînes réellement affichées.*
