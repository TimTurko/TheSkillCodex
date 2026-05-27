---
title: 
type: tuto
phases:
  - 
tags:
  - tuto
prerequis: []
aa: []
draft: false
---

<!--
GUIDE DU TEMPLATE
=================
Template pour une fiche-tuto : explication détaillée et opérationnelle
d'un outil ou d'une méthode mobilisé dans le projet. Une fiche-tuto
est autoportante (lisible sans contexte préalable) et plus longue
qu'une fiche-notion — l'attention au lecteur mobile (~5 min) cède
ici la place à un exercice de procédure pas à pas.

Différence avec les autres typologies :
- Une fiche-trame décrit une démarche projet en étapes ordonnées
  (cycle en V) et s'incarne sur le fil rouge bras 3 axes.
- Une fiche-notion explique UN concept court (popover-only) dont le
  cas d'illustration est CHOISI POUR LA NOTION (cas autonome).
- Une fiche-tuto explique UN outil ou UNE méthode en profondeur
  opérationnelle (procédure ordonnée, exemples chiffrés). Son cas
  d'illustration suit la convention candidate du fil rouge bras 3
  axes (cf. section EXEMPLE plus bas et conventions.md « En cours
  d'éprouvage »).

Front matter :
- `type: tuto`
- `phases:` liste les phases où le tuto est mobilisé. Souvent
  plusieurs (ex. EAT mobilisé en spécification et concept).
- `tags:` doit contenir `tuto` + au moins un tag de domaine
  (`proj`, `eee`, `meo`, `mme`, `ese`)
- `prerequis:` notions à connaître avant d'aborder le tuto
- `aa:` codes des AA du référentiel couvert, en multi-couverture si
  pertinent (cf. convention C20 en éprouvage)

Pour les conventions de callouts (sémantique d'usage, couleurs,
conventions de titre), consulter `templates/callouts.md`.

NE PAS mettre de H1 dans le corps : Quartz le génère depuis `title`.
Le template lui-même est `draft: false` pour être consultable sur le
site ; les fiches que vous créerez à partir de lui doivent commencer
en `draft: true` tant qu'elles ne sont pas relues.
Liens internes : [[notion]] crée un popover si la fiche cible existe,
ou un lien rouge sinon (= TODO list naturelle).

Captures d'écran : pour les tutos d'outils logiciels (Arduino IDE,
ESP32, oscilloscope, GanttProject, KiCad…), intégrer les captures
INLINE dans les étapes de la procédure pas à pas, pas en section
dédiée. Décision provisoire à figer après les premiers tutos
structurants de phase 1 (Arduino/ESP32/oscilloscope).
-->

<!--
POPOVER (premier paragraphe, hors section)
==========================================
1 à 3 phrases, autoportantes, sans jargon non défini. Doit ENONCER ce
qu'est le tuto (nature : outil, méthode, technique) et son rôle dans
le projet. Cette ouverture sert de popover sur tout le site — elle
doit pouvoir être lue isolément et tenir debout.

Mettre en gras les concepts-clé en première occurrence.
-->

L'**<nom du tuto>** est <catégorie : outil, méthode, technique...> qui <ce qu'il fait, son rôle>. <Articulation avec la phase du V ou avec d'autres outils si pertinent>.

## À quoi ça sert ?

<!--
À QUOI ÇA SERT ?
================
Section obligatoire. Pose le RÔLE du tuto : pourquoi il existe, quel
problème il résout, quelle décision il informe, comment il s'articule
avec le projet.

Pas de méthode ici (vient dans la section suivante) — uniquement le
« pourquoi ».

Forme libre : paragraphe court, ou paragraphe + liste à puces de
rôles. Cible 5-15 lignes.
-->

<À rédiger — rôle du tuto, problème qu'il résout, type de décision qu'il informe. Peut se terminer par une liste à puces des fonctions remplies.>

## Procédure pas à pas

<!--
PROCÉDURE PAS À PAS
===================
Section obligatoire. C'est la marque distinctive d'une fiche-tuto par
rapport à une fiche-notion : une procédure ordonnée en étapes
numérotées, opérationnelle, qu'un étudiant peut suivre.

Forme : sous-étapes en H3 numérotées (### 1. Titre, ### 2. Titre…).
Cible 3 à 6 étapes. Au-delà, le tuto se dilue ; en deçà, c'est plutôt
une fiche-notion.

Chaque étape :
- introduit son intention en 1-2 phrases
- donne les consignes opérationnelles (liste à puces, tableau,
  exemple chiffré, bloc de code, ou capture d'écran inline pour les
  outils logiciels)
- peut contenir un callout [!warning] ou [!tip] pour pointer un
  piège ou un raccourci

Ton : direct, à l'impératif ou à l'infinitif. Verbes d'action.
-->

<À rédiger — introduction courte qui annonce les étapes.>

### 1. <Titre de l'étape 1>

<À rédiger — intention + consignes opérationnelles.>

### 2. <Titre de l'étape 2>

<À rédiger.>

### 3. <Titre de l'étape 3>

<À rédiger.>

### 4. <Titre de l'étape 4>

<À rédiger ou supprimer si non pertinent.>

## Exemple — <Nom court du cas>

<!--
EXEMPLE — <NOM COURT DU CAS>
============================
Section obligatoire pour une fiche-tuto (la procédure abstraite reste
peu opérante sans illustration chiffrée).

CONVENTION DE TITRE : le H2 lui-même intègre le nom du cas.
- « Exemple — Bras 3 axes pédagogique »
- « Exemple — Régulation thermique sur ESP32 »

CONVENTION FIL ROUGE (en éprouvage, cf. conventions.md « En cours
d'éprouvage ») : pour les fiches-tuto pivot de phase 1, l'exemple
prend le fil rouge bras 3 axes pédagogique. Différent des
fiches-notion (cas autonome choisi pour la notion).

Forme libre : peut contenir du texte, des tableaux chiffrés, des
schémas SVG, un bloc de code. Pas de triptyque mauvais/moyen/bon
imposé — l'apprentissage du tuto se fait plutôt dans la qualité d'un
exemple détaillé que dans la comparaison de niveaux (à éprouver).

Cible : 1 exemple détaillé argumenté, plutôt que plusieurs exemples
superficiels.
-->

<À rédiger — introduction au cas, puis exemple détaillé avec tableau, schéma ou bloc de code selon le type de tuto.>

## Pièges

<!--
PIÈGES
======
Section obligatoire dès que le tuto a des pièges d'usage récurrents
en projet étudiant (cas le plus fréquent).

Forme : 4-8 pièges, chacun introduit par une PHRASE FORTE EN GRAS
(le piège lui-même), suivie d'une phrase d'explication.

Pas de liste à puces : les pièges sont des mini-paragraphes pour
laisser respirer.

Ton : impératif négatif ou nominatif court.
- « **Confondre EAT et revue bibliographique.** Une liste d'articles
   lus n'est pas un EAT… »
- « **Cellule vide silencieuse.** Une donnée manquante laissée à
   blanc se confond visuellement avec une valeur faible… »
-->

**<Piège 1 en gras court>.** <Phrase d'explication du piège et de la conséquence.>

**<Piège 2 en gras court>.** <Phrase d'explication.>

**<Piège 3 en gras court>.** <Phrase d'explication.>

## Cas particulier — <sujet>

<!--
CAS PARTICULIER(S) — OPTIONNEL
==============================
Section optionnelle, à inclure seulement si le tuto a un cas d'usage
spécifique qui mérite un traitement à part (ex. « marché immature ou
projet de niche » pour l'EAT).

Convention de titre :
- 1 seul cas → « Cas particulier — <sujet> »
- N cas → « Cas particuliers » (sans tiret), puis sous-sections H3

Forme : paragraphe court qui explique le cas, ou renvoi vers une fiche
qui le traite en détail.

À SUPPRIMER si le tuto n'a pas de cas particulier digne d'être
mentionné.
-->

<À rédiger ou supprimer — cas particulier qui mérite un traitement séparé.>

## Raccrochage projet

<!--
RACCROCHAGE PROJET
==================
Section obligatoire pour une fiche-tuto. Identifie EXPLICITEMENT les
phases du V et les étapes où le tuto est mobilisé. Différent de la
section « Voir aussi » : ici on parle de quand on utilise le tuto
DANS le projet, pas de notions associées.

Forme : liste à puces avec phase/étape en gras et contexte court :
- **Étape N de la phase X** — comment le tuto y est mobilisé
- **Étape M de la phase Y** — comment le tuto y est réutilisé

Cible 2-5 entrées, ordonnées chronologiquement dans le V.

Conclure par 1-2 phrases qui justifient l'investissement du tuto
(pourquoi le faire sérieusement amont).
-->

- **Étape <X> de la [[<phase>|phase X]]** — <où le tuto est mobilisé>
- **Étape <Y> de la [[<phase>|phase Y]]** — <où le tuto est réutilisé>

<Phrase de clôture qui justifie l'investissement amont.>

## Aller plus loin

<!--
ALLER PLUS LOIN — OPTIONNEL
===========================
Section optionnelle pour les ressources externes (livres, normes,
articles, tutoriels), les approfondissements pour les curieux, ou
les variantes plus avancées du tuto.

Forme : liste à puces avec lien et brève description.

À SUPPRIMER si on n'a rien à pointer au-delà des fiches du site (cas
fréquent au démarrage du tutoriel).
-->

<À rédiger ou supprimer — ressources externes, approfondissements.>

## Voir aussi

<!--
VOIR AUSSI
==========
Section obligatoire. Liens internes vers les fiches du site qui
prolongent ou contextualisent le tuto.

Différence avec « Raccrochage projet » : ici on liste les notions
associées (prérequis, outils proches, méthodes alternatives), pas
les phases du projet.

Structure type :
- 1-2 fiche(s)-trame où le tuto est mobilisé (phase du projet)
- 1-3 notion(s) ou tuto(s) associé(s)
- 1 norme ou référence méthodologique si pertinent

Discipline : ne pas chasser les liens. Uniquement les liens
structurels évidents.

Format : `[[cible|texte affiché]] — description courte` (avec un
tiret cadratin et une description, pas juste le lien nu).
-->

- [[<phase-concernée>|<Phase concernée>]] — <où le tuto est mobilisé>
- [[<notion-associée>|<Notion ou tuto associé>]] — <relation>
- [[<référence>|<Référence>]] — <type : norme, cadre, outil parent>
