---
title: Comparateur
type: notion
tags:
  - mme
  - notion
prerequis: []
aa: []
draft: true
source_fr: meca/comparateur.md
source_sha256: ddfb8be9f0d1ca28b42e1adfb60dd22b8787ca190afde895a087fa2f8ad676dc
---

Un **comparateur** (à cadran ou numérique) est un instrument de mesure qui affiche un **écart de position** au centième de millimètre par rapport à une référence. Il ne mesure pas une cote absolue, mais une variation.

![Schéma d'un comparateur monté sur colonne et socle rigides : le palpeur touche un axe en rotation, et tout déplacement du palpeur fait dévier l'aiguille du cadran. L'instrument affiche un écart (une variation), pas une cote absolue.](/ressources/img/comparateur/battement.svg)

## Dans le projet

Le comparateur sert à quantifier ce qui *bouge* : jeu d'une articulation, battement d'un axe en rotation, planéité d'un appui, dérive d'une pièce sous charge. Sur le fil rouge, il mesure par exemple le **jeu** d'une articulation du bras (battement, débattement) lors de la caractérisation d'un banc en [[preuve-de-concept-en|preuve de concept]]. Comme tout instrument, il doit être **caractérisé avant usage** et monté sur un support rigide. Un comparateur mal réglé donne une fausse dérive, qui est une [[precision-de-mesure-en|erreur systématique]].

*Le réglage, l'étalonnage métrologique et l'analyse d'incertitude relèvent des travaux pratiques de métrologie et du **cours de mécanique**. Le wiki situe l'usage de l'instrument dans le projet.*

## Voir aussi

- [[pied-a-coulisse-en|Pied à coulisse]] — pour les cotes absolues
- [[preuve-de-concept-en|Preuve de concept]] — caractériser un banc de mesure
- [[integration-et-tests-en|Intégration et tests]] — contrôle dimensionnel des pièces
- [[precision-de-mesure-en|Précision, justesse, fidélité]] — résolution ≠ précision, erreur systématique vs aléatoire (transverse à toute mesure)
- **Cours de mécanique / métrologie** (collègues) — étalonnage, incertitudes
