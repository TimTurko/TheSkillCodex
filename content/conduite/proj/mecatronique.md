---
title: Mécatronique
type: notion
tags:
  - proj
  - notion
  - transverse
prerequis: []
aa: []
draft: false
---

La **mécatronique** est l'ingénierie des systèmes qui font coopérer **mécanique**, **électronique** et **informatique embarquée** pour produire une fonction qu'aucune de ces disciplines ne réaliserait seule. Un système mécatronique perçoit son environnement par des capteurs, décide via un [[microcontroleur|microcontrôleur]], et agit sur le monde physique par des actionneurs — la boucle *perception → décision → action* est son motif fondamental.

## Trois disciplines, un système

Ce qui caractérise la mécatronique n'est pas la juxtaposition des trois disciplines mais leur **intégration**. La structure mécanique conditionne le choix des actionneurs ; les actionneurs imposent une électronique de puissance ; l'électronique fixe les contraintes du [[firmware]] ; et le comportement logiciel doit tenir compte des inerties et des temps de réponse mécaniques. Concevoir mécatronique, c'est arbitrer en permanence à ces frontières plutôt qu'optimiser chaque domaine isolément.

Sur ce wiki, ces disciplines sont outillées par des parcours techniques dédiés, tandis que le **[[conduite/index|parcours projet]]** porte la méthodologie qui les fait converger : le cycle en V, de la [[specification-technique|spécification]] à l'[[integration-et-tests|intégration et tests]].

## Fil rouge

Tout le wiki illustre ces principes sur un même projet : un **bras robotique pédagogique 3 axes**. Trois articulations motorisées (mécanique), leurs drivers et capteurs de position (électronique), la machine à états qui orchestre les mouvements (informatique embarquée) — un système minimal mais complet où les trois disciplines doivent réellement s'accorder.

## Voir aussi

- [[conduite/index|Parcours projet (PROJ)]] — la méthodologie du cycle en V
- [[microcontroleur|Microcontrôleur]] — le cœur décisionnel du système
- [[specification-technique|Spécification technique]] — le point de départ du cycle en V
