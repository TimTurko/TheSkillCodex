---
title: Revue de code
type: notion
phases:
  - specification
  - concept
  - preuve-de-concept
  - dossier-technique
  - integration-et-tests
tags:
  - meo
  - eee
  - notion
prerequis: []
aa:
  - RA-MEO-C08-6/MEO/3
draft: true
source_fr: conduite/meo/revue-de-code.md
source_sha256: 9e9395845c617ae256baa114a073a8ab9879a79c2d1f9513bd65a7d6d9e38209
---

La **revue de code** consiste à faire relire un morceau de code avant un jalon, par un équipier ou par soi-même à tête reposée, pour attraper les défauts qu'un regard extérieur repère immédiatement et que l'auteur, trop proche, ne voit plus.

## Dans le projet

La revue ne cherche pas la perfection. Elle cible les **défauts manifestes** et les **zones critiques** du [[firmware-en|firmware]] : gestion des [[interruption-en|interruptions]], [[machine-a-etats-en|machine à états]], fonctions de sécurité. La pratique qui tient en projet : une revue croisée **à chaque jalon** (entre équipiers au minimum, avec l'encadrant idéalement), courte mais régulière, tracée comme une étape de qualité (voir [[securite-et-qualite-en|sécurité et qualité]]). C'est aussi un puissant levier d'apprentissage : on progresse en lisant le code des autres. Encore faut-il savoir entrer dans un programme qu'on n'a pas écrit, ce qui s'apprend ([[cpp-lire-un-programme-en|en C++]], [[micropython-lire-un-programme-en|en MicroPython]]).

## Voir aussi

- [[securite-et-qualite-en|Sécurité et qualité]] — la revue de code comme pratique de qualité
- [[firmware-en|Firmware]] — l'objet principal des revues
- [[machine-a-etats-en|Machine à états]] — une zone de code à relire en priorité
- [[cpp-lire-un-programme-en|Lire un programme C++]] — la méthode de lecture, prérequis de la revue
- [[micropython-lire-un-programme-en|Lire un programme MicroPython]] — la même méthode côté MicroPython
