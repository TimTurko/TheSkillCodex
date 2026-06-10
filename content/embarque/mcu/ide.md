---
title: IDE
type: notion
tags:
  - eee
  - mcu
  - notion
prerequis: []
aa: []
draft: false
---

Un **IDE** (*Integrated Development Environment*, environnement de développement intégré) regroupe dans un même logiciel tout ce qu'il faut pour programmer un [[microcontroleur|microcontrôleur]] : éditeur de code, compilateur (ou chaîne de compilation), téléversement vers la carte, et souvent un moniteur série pour observer le programme en marche.

## Ce que l'IDE prend en charge

Sans IDE, programmer une cible embarquée imposerait d'enchaîner à la main compilation, édition de liens, conversion et flashage. L'IDE masque cette chaîne derrière deux boutons (« Vérifier » / « Téléverser ») et gère la sélection de la carte, du port et des bibliothèques. Il intègre généralement un **gestionnaire de [[bibliotheque|bibliothèques]]** et un **gestionnaire de cartes** qui installe le support d'une nouvelle famille de microcontrôleurs.

## Lesquels selon la cible

Chaque famille a son environnement de référence : l'[[arduino|IDE Arduino]] et PlatformIO pour l'écosystème Arduino et l'[[esp32|ESP32]], STM32CubeIDE pour les [[stm32|STM32]], Thonny pour MicroPython. Le choix de l'IDE n'est pas neutre : il conditionne la facilité de mise en route, la richesse du débogage et la portabilité du projet entre postes.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — la cible que l'IDE programme
- [[bibliotheque|Bibliothèque]] — gérées depuis l'IDE
- [[firmware|Firmware]] — le binaire produit et téléversé par l'IDE
