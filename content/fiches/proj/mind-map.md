---
title: Mind map
type: notion
phases:
  - specification
tags:
  - proj
  - notion
  - analyse-fonctionnelle
prerequis: []
aa: []
draft: false
---

La **mind map** (ou *carte mentale*) est un schéma **radial** qui organise des idées autour d'un concept central : on place le sujet au cœur de la feuille, et on déploie tout autour des branches hiérarchisées par associations successives. En projet [[mecatronique|mécatronique]], elle sert d'outil de **brainstorming structuré** — son usage le plus canonique étant de recenser les milieux environnants d'un système avant de tracer sa [[pieuvre|pieuvre]].

![Mind map — schéma générique](/ressources/img/mind-map-generique.svg)

## À quoi ça sert ?

La mind map sert à **faire émerger et organiser une réflexion divergente** sans la contraindre trop tôt. Sa forme radiale épouse le raisonnement par associations : une idée en appelle une autre, qu'on accroche en sous-branche sans avoir à décider d'un plan linéaire d'avance. C'est un outil de premier jet — on capture large, on structure ensuite.

En projet, elle intervient surtout en amont, à trois moments :

- **Recenser les milieux environnants** avant de construire la [[pieuvre|pieuvre]] : le système au centre, et tout autour ce qui l'entoure (utilisateurs, matière d'œuvre, énergies, environnement physique, réglementaire). C'est l'usage canonique en [[specification-technique|spécification technique]].
- **Brainstormer des solutions candidates** ou explorer un problème mal cerné, en équipe, avant de formaliser dans un outil plus rigide.
- **Structurer une réflexion collective** en réunion de lancement : la mind map partagée rend visibles les idées de chacun et leurs liens.

La mind map n'est pas un livrable formel — c'est l'**échafaudage** qui précède un outil structuré. Le brainstorm de milieux devient une [[pieuvre|pieuvre]] ; le brainstorm de solutions devient une [[matrice-de-decision|matrice de décision]]. Sa valeur tient à ce qu'elle alimente, pas à elle-même.

## Comment la construire ?

Trois gestes, dans l'ordre.

1. **Poser le sujet au centre.** Le système, le problème ou la question, dans une bulle centrale. Tout part de là.
2. **Déployer les branches principales.** Les grandes catégories rayonnent autour du centre. Pour un recensement de milieux, les branches sont les **cinq familles** (utilisateurs, matière d'œuvre, énergies, environnement physique, réglementaire — détaillées dans la fiche [[pieuvre|pieuvre]]).
3. **Ramifier par associations.** Chaque branche se sous-divise en idées dérivées, librement, tant qu'elles viennent. On ne filtre pas pendant le jet : un élément discret noté ici est un oubli évité plus tard.

Quelques règles qui font la différence entre une mind map utile et un gribouillis : **un mot-clé par branche** (pas de phrases — la concision force la clarté), **pas de filtre pendant le jet** (on trie après, pas pendant), et **un regroupement visuel** (couleurs ou zones) pour relire d'un coup d'œil. Côté outils, le papier suffit et reste le plus rapide pour un premier jet ; pour partager ou retravailler à plusieurs, des outils comme Excalidraw, XMind ou FreeMind conviennent.

## Exemple — Bras 3 axes pédagogique

Reprenons le bras robotique pédagogique 3 axes. Avant de tracer sa [[pieuvre|pieuvre]] en [[specification-technique|spécification technique]], l'équipe recense ses milieux environnants par une mind map, en parcourant les cinq familles une à une.

![Mind map des milieux environnants — bras 3 axes](/ressources/img/mind-map-bras-3-axes.svg)

Le parcours systématique des familles fait remonter cinq milieux : l'**opérateur** (utilisateurs), l'**objet à déplacer** (matière d'œuvre), le **secteur 230 V** (énergies), le **poste informatique** et le **fablab** (environnement physique et moyens de fabrication), la **conformité CE** et l'**écoconception** (réglementaire). C'est en se forçant à passer la famille *réglementaire*, qui paraissait vide au premier abord, que l'équipe a noté les contraintes de conformité — un milieu discret qui aurait été oublié dans un remplissage spontané.

À ce stade, on ne trace aucune fonction : la mind map ne fait que **lister les milieux**. Le passage de main est immédiat — chacun de ces milieux devient une patte de la [[pieuvre|pieuvre]], où le lien système ↔ milieu se formalise en [[fonction|fonction]] [[FP]] / [[FS]] / [[FC]] puis se numérote.

## Pièges

**Écrire des phrases au lieu de mots-clés.** Une branche surchargée de texte tue la lisibilité radiale et ralentit le jet. Un mot ou deux par branche : la reformulation viendra dans l'outil aval, pas dans la mind map.

**Filtrer pendant le jet.** Juger une idée au moment où elle vient casse la divergence — et c'est souvent l'idée qu'on aurait écartée qui révèle un milieu ou une piste oubliés. On capture tout, on trie après.

**Confondre la mind map avec le livrable.** La mind map est l'échafaudage, pas le mur. La livrer telle quelle à la place d'une [[pieuvre|pieuvre]] ou d'une [[matrice-de-decision|matrice de décision]] revient à présenter un brouillon comme un résultat. Elle prépare l'outil formel, elle ne le remplace pas.

**Mind map qui ne mène à rien.** Une carte mentale qu'on dessine puis qu'on n'exploite pas en aval est du temps perdu. Avant de la lancer, savoir vers quel outil structuré elle débouche (pieuvre, matrice, plan de rapport).

**Trop de niveaux.** Au-delà de trois niveaux de ramification, la carte devient illisible. Si une branche s'enfonce trop, c'est souvent qu'elle mérite sa propre mind map dédiée.

## Voir aussi

- [[pieuvre|Pieuvre]] — outil aval qui formalise les milieux recensés en fonctions tracées
- [[specification-technique|Spécification technique]] — phase où la mind map des milieux est mobilisée (étape 3)
- [[decomposition-fonctionnelle|Décomposition fonctionnelle]] — autre représentation arborescente, mais descendante et formelle, en phase de concept
- [[matrice-de-decision|Matrice de décision]] — outil aval qu'un brainstorm de solutions peut alimenter
