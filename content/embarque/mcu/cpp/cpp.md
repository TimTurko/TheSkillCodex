---
title: C++
type: notion
tags:
  - eee
  - notion
prerequis:
  - arduino-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
phases:
  - preuve-de-concept
draft: false
---

Le **C++** est le langage dans lequel s'écrivent les programmes Arduino, plus précisément un C++ « outillé » (dialecte *Wiring*) où deux [[fonction-informatique|fonctions]], `setup()` et `loop()`, encadrent tout le code. En maîtriser les briques sépare *recopier* un exemple d'*écrire* son propre programme. Cette fiche est le **hub d'apprentissage progressif** du langage côté embarqué : du premier programme qui compile jusqu'aux structures de contrôle, chaque sous-fiche s'accompagne de code à lire et d'exercices à faire. Le même langage programme l'[[esp32|ESP32]], la Teensy et les autres cartes du framework Arduino. Ce parcours leur sert donc à toutes.

## Parcours d'apprentissage

À suivre dans l'ordre : chaque étape suppose la précédente.

1. [[cpp-execution|Comment s'exécute un programme]] — le cycle *compiler → téléverser → exécuter*, et le code minimal qui compile ;
2. [[cpp-structure|La structure d'un programme]] — préprocesseur, `#include`, `#define`, variables globales, `setup()`, `loop()`, fonctions ;
3. [[cpp-types|Le typage des variables]] — choisir le bon type, et ce qu'il coûte en mémoire ;
4. [[cpp-portee|Variables locales et globales]] — la portée, et ce qui survit d'un tour de boucle au suivant ;
5. [[cpp-conditions|Les conditions]] — `if` / `else`, `switch`, opérateurs de comparaison et logiques ;
6. [[cpp-boucles|Les boucles]] — `for`, `while`, `do…while` : laquelle choisir ;
7. [[cpp-logs|Lire et comprendre les erreurs]] — décoder les messages du compilateur pour se dépanner seul ;
8. [[cpp-lire-un-programme|Lire un programme qu'on n'a pas écrit]] — entrer dans un code inconnu, et les mécanismes du langage qui reviennent d'un exemple à l'autre.

Une fois ces briques acquises, l'enjeu devient *comment structurer* le code : voir [[arduino-programmation-non-bloquante|programmation non bloquante]], [[machine-a-etats|machines à états]] et la structuration d'ensemble du [[firmware|firmware]]. Et pour le parcours **MicroPython**, le même apprentissage du langage existe en jumeau : [[micropython-langage]].

## Voir aussi

- [[arduino|Arduino]] — hub du module
- [[micropython-langage|MicroPython — le langage]] — le parcours jumeau côté MicroPython
- [[arduino-prise-en-main|Prise en main]] — compiler et téléverser, le prérequis pratique pour essayer les exemples
- [[fonction-informatique|Fonction]] — la notion de fonction en programmation
- [[arduino-memoire|Gestion mémoire]] — types, `String`, pointeurs et allocation, sous l'angle ressource (transverse)
- [[manipulation-de-bits|Manipulation de bits]] — opérateurs bit-à-bit et registres (transverse)
- [[firmware|Firmware]] — structurer le code embarqué (transverse)
