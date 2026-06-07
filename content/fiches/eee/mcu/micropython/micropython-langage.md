---
title: Le langage MicroPython
type: notion
tags:
  - eee
  - notion
prerequis:
  - micropython-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
phases:
  - preuve-de-concept
draft: false
---

**MicroPython** est du **Python 3** qui s'exécute sur le microcontrôleur : un langage **interprété** (pas de compilation), au **typage dynamique** (on ne déclare pas le type des variables), où les blocs sont délimités par l'**indentation** plutôt que par des accolades. En maîtriser les briques sépare *recopier* un exemple d'*écrire* son propre programme. Cette fiche est le **hub d'apprentissage progressif** du langage côté embarqué : chaque sous-fiche s'accompagne de code à lire et d'exercices à faire. Le même langage programme l'[[esp32|ESP32]] et d'autres cartes — ce parcours leur sert à toutes. C'est l'équivalent MicroPython de la fiche [[cpp|C++]] du module Arduino.

## Parcours d'apprentissage

À suivre dans l'ordre : chaque étape suppose la précédente.

1. [[micropython-repl|Le REPL]] — le shell interactif qui tourne *sur la carte* : tester une ligne et voir l'effet immédiat, l'outil de travail de tout le reste ;
2. [[micropython-types|Variables et types]] — typage dynamique, `int` / `float` / `str` / `bool`, et les conteneurs `list` / `dict` ;
3. [[micropython-controle|Conditions et boucles]] — `if` / `elif` / `else`, `while`, `for … in`, et le rôle structurant de l'indentation ;
4. [[micropython-fonctions|Les fonctions]] — `def`, arguments, valeurs par défaut, `return` : factoriser et nommer ;
5. [[micropython-modules|Modules et `import`]] — importer `machine`, `time`… et organiser son code en plusieurs fichiers.

Une fois ces briques acquises, l'enjeu devient *comment piloter le matériel* (voir [[micropython-gpio|GPIO]], [[micropython-sortie-pwm|PWM]], [[micropython-capteur-analogique|ADC]]) puis *comment structurer* le code : [[micropython-programmation-non-bloquante|programmation non bloquante]], [[machine-a-etats|machines à états]], et l'ensemble du [[firmware|firmware]].

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-prise-en-main|Prise en main]] — flasher et lancer un programme, le prérequis pratique pour essayer les exemples
- [[cpp|C++]] — le langage du module Arduino, à comparer (compilé, typé statiquement)
- [[fonction-informatique|Fonction]] — la notion de fonction en programmation
- [[firmware|Firmware]] — structurer le code embarqué (transverse)
