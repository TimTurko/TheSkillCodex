---
title: Schéma cinématique
type: notion
tags:
  - mme
  - notion
prerequis: []
aa:
  - RA-MME-C02-1/MME/5
phases:
  - concept
draft: false
---

Le **schéma cinématique** est une représentation simplifiée d'un mécanisme qui ne montre que ses **liaisons** entre pièces et les **mouvements** qu'elles autorisent — pas les formes, pas les dimensions. C'est l'outil pour décrire l'architecture mécanique d'un système et compter ses **degrés de liberté** avant d'en dessiner la moindre pièce. Cette fiche pose ce que c'est et comment le lire dans un projet ; la théorie complète (catalogue des liaisons, torseurs, calcul de mobilité) relève du **cours de mécanique**.

![Trois symboles de base du schéma cinématique : le bâti (ligne hachurée, référence fixe, 0 degré de liberté), la liaison pivot (cercle entre deux barres, 1 rotation) et la liaison glissière (patin sur un rail, 1 translation).](/ressources/img/schema-cinematique-generique.svg)

## À quoi ça sert ?

En phase de [[concept|concept]], une fois les fonctions posées (voir le [[schema-bloc-fonctionnel|schéma bloc fonctionnel]]), il faut décrire **comment les pièces bougent les unes par rapport aux autres**. Le schéma cinématique répond à trois questions :

- **Combien de mouvements indépendants ?** Le nombre de **degrés de liberté** (ddl) — un bras qui doit atteindre un point dans l'espace en demande au moins trois.
- **Quelle architecture mécanique ?** Une série de liaisons (bras articulé) ou une structure fermée (table XY, plateforme).
- **Le mécanisme est-il mobile comme prévu**, ni bloqué ni instable ? C'est le *calcul de mobilité*, traité en cours de mécanique.

Il ne décrit ni les formes ni les efforts : c'est une **carte des mouvements**, pas un plan de fabrication. Son pendant côté fonctions est le [[schema-bloc-fonctionnel|schéma bloc fonctionnel]], son pendant côté flux d'énergie la [[chaine-energie|chaîne d'énergie]].

## Comment le lire

Un schéma cinématique enchaîne des **pièces** (les traits) reliées par des **liaisons normalisées**, chacune autorisant un nombre précis de mouvements :

- la **liaison pivot** autorise une rotation (1 ddl) — l'articulation type d'un bras ;
- la **liaison glissière** autorise une translation (1 ddl) — un chariot sur un rail ;
- l'**encastrement** ne laisse aucun mouvement (0 ddl) ;
- le **bâti**, hachuré, est la pièce de référence supposée fixe.

On lit la chaîne depuis le bâti vers l'extrémité, en additionnant les degrés de liberté. Les symboles sont **normalisés** : ils ne dépendent pas du dessin réel du composant, ce qui rend le schéma lisible par n'importe quel mécanicien. Le catalogue complet des liaisons (rotule, pivot glissant, appui plan…) et la méthode formelle de calcul de mobilité sont l'objet du **cours de mécanique** — cette fiche en donne la lecture, pas le formalisme.

## Exemple — Le bras 3 axes

![Schéma cinématique du bras 3 axes vu de côté : une base tournant autour d'un axe vertical (θ₁), puis deux liaisons pivot en série, l'épaule (θ₂) et le coude (θ₃), articulant un bras puis un avant-bras terminés par un préhenseur. Trois liaisons pivot, donc trois degrés de liberté.](/ressources/img/schema-cinematique-bras-3-axes.svg)

Le bras du fil rouge se décrit par **trois liaisons pivot en série** : une rotation de base (axe vertical), puis deux articulations (épaule, coude). Chaque pivot ajoute un degré de liberté → **3 ddl**, juste ce qu'il faut pour amener le préhenseur à une position dans son volume de travail. Le schéma se lit d'un coup d'œil : on voit l'architecture (sérielle), on compte les axes — donc les moteurs à prévoir — et on situe les liaisons à dimensionner, sans avoir encore dessiné la moindre pièce.

## Voir aussi

- [[schema-bloc-fonctionnel|Schéma bloc fonctionnel]] — décrit les **fonctions** et leurs flux ; vue complémentaire de celle des mouvements
- [[chaine-energie|Chaîne d'énergie]] — la chaîne qui met le mécanisme en mouvement (moteurs, transmissions)
- [[concept|Concept]] — la phase où l'on fige l'architecture mécanique
- **Cours de mécanique** (collègues) — catalogue des liaisons, torseurs cinématiques, calcul de mobilité
