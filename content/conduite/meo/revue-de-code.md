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
draft: false
---

La **revue de code** consiste à faire relire un morceau de code — par un équipier, ou par soi-même à tête reposée — avant un jalon, pour attraper les défauts qu'un regard extérieur repère immédiatement et que l'auteur, trop proche, ne voit plus.

## Dans le projet

La revue ne cherche pas la perfection : elle cible les **défauts manifestes** et les **zones critiques** du [[firmware|firmware]] — gestion des [[interruption|interruptions]], [[machine-a-etats|machine à états]], fonctions de sécurité. La pratique qui tient en projet : une revue croisée **à chaque jalon** (entre équipiers au minimum, avec l'encadrant idéalement), courte mais régulière, tracée comme une étape de qualité (voir [[securite-et-qualite|sécurité et qualité]]). C'est aussi un puissant levier d'apprentissage : on progresse en lisant le code des autres — encore faut-il savoir entrer dans un programme qu'on n'a pas écrit, ce qui s'apprend ([[cpp-lire-un-programme|en C++]], [[micropython-lire-un-programme|en MicroPython]]).

## Voir aussi

- [[securite-et-qualite|Sécurité et qualité]] — la revue de code comme pratique de qualité
- [[firmware|Firmware]] — l'objet principal des revues
- [[machine-a-etats|Machine à états]] — une zone de code à relire en priorité
- [[cpp-lire-un-programme|Lire un programme C++]] — la méthode de lecture, prérequis de la revue
- [[micropython-lire-un-programme|Lire un programme MicroPython]] — la même méthode côté MicroPython
