---
title: C++
type: notion
tags:
  - eee
  - notion
prerequis:
  - arduino-prise-en-main-en
aa:
  - RA-PROJET-C03-3/PROJ/5
phases:
  - preuve-de-concept
draft: true
source_fr: embarque/mcu/cpp/cpp.md
source_sha256: 58fce82ce9f6bba495391e3181323b7ad58c3737563fe51c57b1923c2e564285
---

Le **C++** est le langage dans lequel s'écrivent les programmes Arduino, plus précisément un C++ « outillé » (dialecte *Wiring*) où deux [[fonction-informatique-en|fonctions]], `setup()` et `loop()`, encadrent tout le code. En maîtriser les briques sépare *recopier* un exemple d'*écrire* son propre programme. Cette fiche est le **hub d'apprentissage progressif** du langage côté embarqué : du premier programme qui compile jusqu'aux structures de contrôle, chaque sous-fiche s'accompagne de code à lire et d'exercices à faire. Le même langage programme l'[[esp32-en|ESP32]], la Teensy et les autres cartes du framework Arduino. Ce parcours leur sert donc à toutes.

## Parcours d'apprentissage

À suivre dans l'ordre : chaque étape suppose la précédente.

1. [[cpp-execution-en|Comment s'exécute un programme]] — le cycle *compiler → téléverser → exécuter*, et le code minimal qui compile ;
2. [[cpp-structure-en|La structure d'un programme]] — préprocesseur, `#include`, `#define`, variables globales, `setup()`, `loop()`, fonctions ;
3. [[cpp-types-en|Le typage des variables]] — choisir le bon type, et ce qu'il coûte en mémoire ;
4. [[cpp-portee-en|Variables locales et globales]] — la portée, et ce qui survit d'un tour de boucle au suivant ;
5. [[cpp-conditions-en|Les conditions]] — `if` / `else`, `switch`, opérateurs de comparaison et logiques ;
6. [[cpp-boucles-en|Les boucles]] — `for`, `while`, `do…while` : laquelle choisir ;
7. [[cpp-logs-en|Lire et comprendre les erreurs]] — décoder les messages du compilateur pour se dépanner seul ;
8. [[cpp-lire-un-programme-en|Lire un programme qu'on n'a pas écrit]] — entrer dans un code inconnu, et les mécanismes du langage qui reviennent d'un exemple à l'autre.

Une fois ces briques acquises, l'enjeu devient *comment structurer* le code : voir [[arduino-programmation-non-bloquante-en|programmation non bloquante]], [[machine-a-etats-en|machines à états]] et la structuration d'ensemble du [[firmware-en|firmware]]. Et pour le parcours **MicroPython**, le même apprentissage du langage existe en jumeau : [[micropython-langage-en|Le langage MicroPython]].

## Voir aussi

- [[arduino-en|Arduino]] — hub du module
- [[micropython-langage-en|MicroPython — le langage]] — le parcours jumeau côté MicroPython
- [[arduino-prise-en-main-en|Prise en main]] — compiler et téléverser, le prérequis pratique pour essayer les exemples
- [[fonction-informatique-en|Fonction]] — la notion de fonction en programmation
- [[arduino-memoire-en|Gestion mémoire]] — types, `String`, pointeurs et allocation, sous l'angle ressource (transverse)
- [[manipulation-de-bits-en|Manipulation de bits]] — opérateurs bit-à-bit et registres (transverse)
- [[firmware-en|Firmware]] — structurer le code embarqué (transverse)
