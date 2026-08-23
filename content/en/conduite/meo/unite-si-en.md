---
title: Unités SI
type: notion
phases:
  - specification
  - concept
  - preuve-de-concept
  - dossier-technique
  - integration-et-tests
tags:
  - meo
  - notion
prerequis: []
aa: []
draft: false
source_fr: conduite/meo/unite-si.md
source_sha256: 2283fc1f2d30b3d6e6688bd044c7d17f04fbb790ddf575373c758905a2bb238f
---

Les **unités SI** (Système international d'unités) forment la base cohérente et standardisée de toute mesure physique : le mètre (m), le kilogramme (kg), la seconde (s), l'ampère (A) et leurs dérivées (volt, watt, newton…), assortis de **préfixes** normalisés (milli, kilo, méga…).

## Dans le projet

L'enjeu n'est pas théorique mais de **rigueur d'ingénieur** : toujours écrire une valeur **avec son unité**, employer les préfixes standard, et ne pas mélanger les échelles (un entraxe en mm, une longueur de câble en m, un courant tantôt en mA tantôt en A). Une spécification ou une mesure sans unité, ou avec une unité ambigüe, est une source classique d'erreur, du bug de conversion au composant sous-dimensionné. La cohérence des unités se tient dans tous les livrables : [[specification-technique-en|spécification]], [[dossier-technique-en|dossier technique]], relevés de mesure.

## Voir aussi

- [[lire-une-datasheet-en|Lire une datasheet]] — où les grandeurs et leurs unités se lisent
- [[specification-technique-en|Spécification technique]] — exprimer des exigences chiffrées avec leurs unités
- [[caracteriser-une-exigence-en|Caractériser une exigence]] — la discipline du chiffre + unité dans les exigences
- [[dossier-technique-en|Dossier technique]] — tracer des valeurs cohérentes
