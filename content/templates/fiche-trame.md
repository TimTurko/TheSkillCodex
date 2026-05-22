---
title: 
type: trame
phase: 
phases:
  - 
tags:
  - proj
  - trame
prerequis:
  - 
aa: []
draft: false
---

<!--
GUIDE DU TEMPLATE
=================
Template pour une fiche-trame : phase du cycle en V ou fil transverse.
Une fiche-trame décrit une démarche de projet en étapes ordonnées, avec
posture attendue, objectif de phase, livrables évalués et pièges
fréquents. Elle s'incarne sur un fil rouge unique : le bras robotique
pédagogique 3 axes (décision actée le 22/05).

Si vous adaptez ce template pour une fiche-trame transverse (gestion de
projet, écoconception, sécurité et qualité), la structure « démarche en
étapes » peut ne pas s'appliquer telle quelle — les transverses courent
sur tout le projet, pas sur une phase bornée. Voir le journal du 22/05
pour le débat.

Pour les conventions de callouts (sémantique d'usage, couleurs,
conventions de titre), consulter `templates/callouts.md`.

NE PAS mettre de H1 dans le corps : Quartz le génère depuis `title`.
Le template lui-même est `draft: false` pour être consultable sur le
site ; les fiches que vous créerez à partir de lui doivent commencer
en `draft: true` tant qu'elles ne sont pas relues.
Liens internes : [[notion]] crée un popover si la fiche cible existe,
ou un lien rouge sinon (= TODO list naturelle).
-->

<!--
POPOVER (premier paragraphe, hors section)
==========================================
1 à 3 phrases, autoportantes. Cette ouverture sert de popover sur tout
le site. Doit annoncer ce qu'est la phase, son rôle dans le cycle en V
et son articulation avec la phase précédente / suivante.

Mettre en gras les concepts-clé en première occurrence.
-->

La **<nom de la phase>** est la <position> étape du projet [[mecatronique|mécatronique]] : <ce que la phase produit et son rôle dans le cycle>. <Articulation avec les phases adjacentes : ce qui précède, ce qui suit>.

## Posture attendue

<!--
POSTURE ATTENDUE
================
Court paragraphe (4-8 lignes) qui plante l'ambiance pédagogique. Pas de
liste à puces. Adresse direct à l'étudiant. Formulation type :
- « La tentation, à ce stade, est de... »
- « Résistez. »
- « Cette étape ne demande pas de..., elle demande de... »

Cite la compétence-clé acquise dans cette phase (« savoir tester avant
de fabriquer », « renégocier sans tout casser », etc.).
-->

La tentation, à ce stade, est de <piège typique de la phase>. Résistez. Cette étape ne demande pas de <ce qu'on croit devoir faire>, elle demande de <ce qu'il faut réellement faire>. <Conclusion sur la compétence-clé enseignée par cette phase>.

## Objectif de la phase

<!--
OBJECTIF DE LA PHASE
====================
Annonce le livrable principal de la phase et ses caractéristiques.
Formulation type : « Produire un <livrable> qui : » + liste à puces.

Termine par une phrase qui pose le rôle de ce livrable dans la suite
du projet (référence pour..., qui sera utilisé en...).
-->

Produire un **<livrable principal de la phase>** qui :

- <caractéristique 1>
- <caractéristique 2>
- <caractéristique 3>
- <caractéristique 4>

Ce <livrable> servira de <rôle pour la suite du projet>.

## Démarche

<!--
DÉMARCHE
========
La phase se déroule en N étapes (typiquement 4 à 6). Chaque étape suit
le motif :

  ### N. Titre court à l'infinitif
  
  Paragraphe explicatif (placeholder *[À rédiger — ...]*  pendant le
  squelette, prose rédigée à l'approfondissement).
  
  > [!example] Sur le bras 3 axes
  > Incarnation de l'étape sur le fil rouge (3-5 lignes, court).
  
  > [!warning] <Phrase forte>  (optionnel)
  > Anti-pattern ou message fort lié à l'étape.
  
  > [!tip] <Astuce>  (optionnel)
  > Conseil de mise en œuvre.
  
  > [!livrable] Livrable de l'étape N
  > - Liste à puces des livrables concrets de l'étape

CONVENTIONS À RESPECTER
=======================
1. 1 callout [!example] OBLIGATOIRE par étape, titre TOUJOURS « Sur le
   bras 3 axes » (fil rouge unique des fiches-trame).
2. 1 callout [!livrable] OBLIGATOIRE par étape, en fin d'étape. Titre :
   « Livrable de l'étape N » (singulier) ou « Livrables de l'étape N »
   (pluriel). Liste à puces à l'intérieur.
3. Callouts [!warning] et [!tip] optionnels, à utiliser quand l'étape
   le justifie (anti-pattern récurrent, astuce non triviale).
4. Lexique :
   - « étape » dans la prose (pas « phase » sauf pour parler d'une
     phase du cycle en V)
   - « incertitude » et « lever une incertitude » (pas « point dur » ni
     « dérisquer », bannis en production étudiante)
   - Noms de phases TOUJOURS en toutes lettres dans la prose et les
     wiki-links : [[concept|concept]], jamais « phase 2 »

Pour la sémantique d'usage des callouts et leurs conventions de titre,
voir `templates/callouts.md`.
-->

### 1. <Titre de l'étape à l'infinitif>

*[À rédiger — <description méthodo de l'étape, outils mobilisés, points d'attention pédagogiques, articulations avec les autres étapes. Inclure les wiki-links vers les notions à créer ou existantes. Ce placeholder reste en italique entre crochets tant que l'étape n'est pas approfondie.>]*

> [!example] Sur le bras 3 axes
> <Incarnation de l'étape sur le fil rouge. 3 à 5 lignes maximum. Concret, chiffré quand pertinent.>

> [!livrable] Livrable de l'étape 1
> - <Livrable concret 1>
> - <Livrable concret 2 si pertinent>

### 2. <Titre de l'étape à l'infinitif>

*[À rédiger — ...]*

> [!example] Sur le bras 3 axes
> <Incarnation.>

> [!warning] <Phrase forte décrivant l'anti-pattern>
> <Description de l'anti-pattern et de la conséquence. Ce callout est optionnel : à inclure si l'étape porte un message fort qui mérite d'être ressorti visuellement.>

> [!livrable] Livrable de l'étape 2
> - <Livrable concret>

### 3. <Titre de l'étape à l'infinitif>

*[À rédiger — ...]*

> [!example] Sur le bras 3 axes
> <Incarnation.>

> [!tip] <Astuce courte>
> <Conseil de mise en œuvre. Ce callout est optionnel.>

> [!livrable] Livrables de l'étape 3
> - <Livrable 1>
> - <Livrable 2>

<!--
DUPLIQUER LE BLOC `### N. ...` ci-dessus pour ajouter d'autres étapes.
Plafond pratique : 5-6 étapes par fiche-trame. Au-delà la fiche devient
illisible sur smartphone (décision actée le 22/05).
-->

---

## Pièges fréquents

*[À compléter au fil de la rédaction des étapes]*

<!--
PIÈGES FRÉQUENTS
================
Liste à puces des erreurs ou anti-patterns observés. À compléter
progressivement au fil de l'approfondissement des étapes : on identifie
les pièges en rédigeant la prose, on les remonte ici.

Ton : impératif négatif court (« sauter X au prétexte que Y »,
« confondre A et B », « différer Z »).

Cible : 4 à 7 puces. Au-delà, dilution du message.
-->

- <Piège 1 — formulation courte>
- <Piège 2>
- <Piège 3>

## Pendant cette phase, côté équipe

*[À rédiger — interfaces métiers spécifiques à la phase (méca / fabrication : pointer vers les cours collègues) + fils transverses concernés : [[gestion-de-projet|gestion de projet]], [[ecoconception|écoconception]], [[securite-et-qualite|sécurité et qualité]]. Inventorier ce qui se joue côté équipe pendant cette phase au-delà du travail technique propre.]*

<!--
PENDANT CETTE PHASE, CÔTÉ ÉQUIPE
================================
Section qui rassemble deux dimensions :
1. INTERFACES MÉTIERS : ce qui se passe avec les disciplines portées
   par les collègues (méca / fabrication). Souvent un renvoi vers leurs
   cours, pas une duplication.
2. FILS TRANSVERSES : ce qui se passe côté gestion de projet,
   écoconception, sécurité et qualité — à ce moment précis du projet.

Forme libre selon la phase. Peut être un paragraphe ou une liste
structurée par sous-section.
-->

## Conclusion

<!--
CONCLUSION
==========
2 à 4 lignes. Récapitule l'état à la sortie de la phase et pose le pont
explicite vers la phase suivante (avec wiki-link).

Pour la dernière phase du cycle en V (intégration et tests), pas de
phase suivante : pont vers le hub.
-->

À ce stade, <récap de ce qui a été produit, validé, levé ou décidé>. La suite du travail bascule en [[<phase-suivante>|<phase suivante>]] pour <ce que cette phase fera>.

## Voir aussi

<!--
VOIR AUSSI
==========
Structure type :
- Lien hub (toujours)
- Étape précédente (sauf phase 1)
- Étape suivante (sauf phase 5)
- 1 à 3 notions centrales mobilisées par la phase
- Fils transverses concernés

Discipline : ne pas chasser les liens. Uniquement les liens structurels
évidents au moment du squelette. Les liens secondaires viendront à
l'approfondissement.
-->

- [[index|Hub du parcours projet]]
- Étape précédente : [[<phase-precedente>|<Phase précédente>]]
- Étape suivante : [[<phase-suivante>|<Phase suivante>]]
- [[<notion-centrale-1>|<Notion centrale 1>]]
- [[<notion-centrale-2>|<Notion centrale 2>]]
- [[gestion-de-projet|Gestion de projet]] *(fil transverse)*
- [[ecoconception|Écoconception]] *(fil transverse)*
