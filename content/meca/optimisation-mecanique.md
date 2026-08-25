---
title: Optimiser une conception mécanique
type: notion
tags:
  - mme
  - notion
prerequis:
  - schema-cinematique
aa:
  - RA-MME-C03-1/MME/6
phases:
  - concept
draft: false
---

**Optimiser une conception**, c'est l'améliorer une fois qu'un premier dimensionnement fonctionne — réduire sa masse, son coût ou son nombre de pièces, faciliter sa fabrication et son assemblage — sans dégrader ses fonctions ni sortir des exigences du cahier des charges. C'est une démarche d'arbitrage entre critères concurrents, distincte de l'acte de concevoir. Cette fiche pose le raisonnement d'optimisation à l'échelle d'un projet. Le dimensionnement fin (calcul de structure, optimisation topologique) relève du **cours de mécanique** et de la CAO avancée.

![Avant / après d'un allègement : à gauche un profilé plein (masse 100 %), à droite le même profilé ajouré et nervuré (masse réduite d'environ 30 %). La matière retirée est celle qui ne participe pas à la tenue ; les fonctions et les exigences du cahier des charges sont conservées.](/ressources/img/optimisation-mecanique/generique.svg)

## À quoi ça sert ?

Concevoir et optimiser sont deux gestes différents. **Concevoir**, c'est faire exister une solution qui remplit la fonction. **Optimiser**, c'est rendre cette solution *meilleure* sur un ou plusieurs critères, une fois qu'elle marche. Une première conception « qui tient » est rarement la plus légère, la moins chère ou la plus simple à monter. L'optimisation récupère cette marge.

En phase de [[concept|concept]], une fois la solution choisie et pré-dimensionnée, l'optimisation affine avant de figer le [[dossier-technique|dossier technique]]. Ce n'est pas une étape unique mais une **boucle** : on ajuste, on réévalue contre les exigences, on recommence tant qu'il reste du gain accessible sans risque.

## Comment optimiser

Trois leviers se raisonnent à l'échelle d'un projet mécatronique, sans calcul de structure poussé :

- **Choisir le couple matériau / procédé en connaissance de cause.** Pour une même pièce, alu usiné, acier plié ou PETG imprimé ne donnent ni la même masse, ni le même coût, ni la même raideur, ni le même délai. Arbitrer ce couple contre les exigences (effort à tenir, précision, budget) est typiquement une affaire de [[matrice-de-decision|matrice de décision]], pièce par pièce.
- **Alléger la géométrie.** Retirer la matière qui ne travaille pas : évider ou nervurer un profilé plein, ajourer une platine, ramener une épaisseur surdimensionnée à sa juste valeur. En flexion, la matière éloignée de l'axe neutre porte l'essentiel de la raideur. On peut souvent vider le centre pour un gain de masse important à raideur quasi conservée.
- **Réduire le nombre de pièces (*design-for-assembly*).** Fusionner deux pièces en une, supprimer une fixation, standardiser la visserie. Moins de pièces, c'est moins de coût, moins de temps de montage et moins de points de défaillance.

La **démontabilité** (pouvoir séparer les pièces en fin de vie) est un quatrième levier, traité côté [[ecoconception|écoconception]] : on l'y renvoie plutôt que de le redoubler ici.

Quel que soit le levier, la règle est la même : **ne pas optimiser une variable isolée**. Définir d'abord *quels* critères comptent et leur poids (masse ? coût ? temps de montage ?), puis arbitrer les compromis. Un gain de masse peut coûter en raideur ou en prix. La [[matrice-de-decision|matrice de décision]] sert de support à cet arbitrage.

*La détermination fine — combien de matière retirer sans perdre en tenue, où placer les nervures, quelle forme donne le meilleur rapport masse/rigidité — relève du calcul de structure (éléments finis), de l'optimisation topologique et de la conception générative, objets du **cours de mécanique** et de la CAO avancée. Le wiki s'arrête au raisonnement d'arbitrage à l'échelle système. Au-delà, on dimensionne, on ne devine pas.*

## Exemple — Le bras 3 axes

Prenons l'**avant-bras** du fil rouge. Première conception : un barreau d'aluminium plein, usiné. Il fonctionne, mais il est lourd, et toute masse en bout de bras pèse sur les moteurs et la consommation.

Le raisonnement d'optimisation, levier par levier :

- **Matériau / procédé** — l'avant-bras travaille surtout en flexion sous le poids de la charge en bout. Un barreau plein y est surdimensionné. Deux pistes : alu évidé par usinage (léger, raide, plus cher) ou PETG imprimé nervuré (peu cher, itération rapide, plus souple et limité en température). On garde **l'alu nervuré** pour l'avant-bras chargé (la raideur compte) et le **PETG imprimé** pour le support d'outil peu sollicité (le coût et l'itération comptent).
- **Géométrie** — on remplace la section pleine par une section nervurée : la matière reste là où elle reprend la flexion (loin de l'axe neutre), le centre est vidé. Gain de masse important, raideur quasi inchangée.
- **Pièces** — la liaison d'origine empilait quatre entretoises et une équerre. On la redessine en une seule pièce imprimée intégrant les entretoises. **Cinq pièces → une**, plus rien à aligner au montage.

Décision tracée, comme dans une [[matrice-de-decision|matrice de décision]] : environ −35 % de masse sur l'avant-bras et quatre pièces de moins, pour un surcoût matière modéré et une raideur tenue. *L'épaisseur de paroi exacte qui garde la flèche sous le seuil du cahier des charges, elle, se calcule en cours de mécanique. Ici on a raisonné la direction et le compromis, pas le dimensionnement final.*

## Pièges

- **Optimiser trop tôt.** Affiner une conception avant qu'elle soit validée fonctionnellement, c'est polir une solution qu'on jettera peut-être. On optimise ce qui marche, pas ce qu'on espère faire marcher.
- **Optimiser une seule variable.** Tirer la masse vers le bas sans regarder la raideur, le coût ou la fabricabilité ne fait que déplacer le problème ailleurs. L'optimisation est multi-critères par nature.
- **Optimiser hors cahier des charges.** Un gain n'en est un que si la pièce respecte encore ses exigences. Alléger un bras au point qu'il flèche trop n'est pas une optimisation, c'est une régression.
- **Confondre allègement et fragilisation.** Retirer la matière qui *ne travaille pas* allège sans coûter en tenue. Retirer celle qui travaille dégrade la pièce. Sans le calcul, rester conservateur et renvoyer le dimensionnement fin au cours de mécanique.

## Aller plus loin

La démarche structurée d'optimisation conjointe fabrication + assemblage porte un nom : le **DfMA** (*Design for Manufacturing and Assembly*). Le dimensionnement quantitatif — éléments finis, optimisation topologique, conception générative — est l'objet du cours de mécanique et de la CAO avancée. Cette fiche en pose le raisonnement amont, pas le formalisme.

## Voir aussi

- [[matrice-de-decision|Matrice de décision]] — l'outil d'arbitrage des compromis entre critères
- [[ecoconception|Écoconception]] — démontabilité et sobriété matière, leviers connexes
- [[schema-cinematique|Schéma cinématique]] — le modèle mécanique que l'on optimise
- [[concept|Concept]] et [[dossier-technique|Dossier technique]] — les phases où l'optimisation s'exerce
- **Cours de mécanique** (collègues) — calcul de structure, optimisation topologique, dimensionnement fin
