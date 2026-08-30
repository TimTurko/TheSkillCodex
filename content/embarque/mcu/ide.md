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

![Interface de l'IDE Arduino 2.x annotée en rouge : les boutons Verify et Upload (vérifier et téléverser) en haut à gauche, le sélecteur de carte au centre, l'icône du moniteur série en haut à droite, et la zone d'édition du code au centre de la fenêtre.|640](/ressources/img/ide/interface-annotee.png)

**Compiler et téléverser ne demandent pas la même chose.** Choisir une carte suffit à compiler. Il faut **en plus un port** pour envoyer le programme dedans (voir [[cpp-execution|comment s'exécute un programme]]). L'IDE le dit lui-même dans sa boîte de sélection, qui présente les cartes installées d'un côté et les ports détectés de l'autre.

![Boîte Select Other Board and Port de l'IDE Arduino 2.x : à gauche la liste des cartes installées avec son champ de recherche, à droite la liste des ports série détectés, et en haut la phrase rappelant qu'une carte seule permet de compiler mais pas de téléverser.|600](/ressources/img/ide/selecteur-carte-port.png)

## Lesquels selon la cible

Chaque famille a son environnement de référence : l'[[arduino|IDE Arduino]] et PlatformIO pour l'écosystème Arduino et l'[[esp32|ESP32]], STM32CubeIDE pour les [[stm32|STM32]], Thonny pour MicroPython. Le choix de l'IDE n'est pas neutre : il conditionne la facilité de mise en route, la richesse du débogage et la portabilité du projet entre postes. L'installation et la prise en main pas à pas se font dans le tuto de chaque famille : [[arduino-prise-en-main]], [[micropython-prise-en-main]]…

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — la cible que l'IDE programme
- [[bibliotheque|Bibliothèque]] — gérées depuis l'IDE
- [[firmware|Firmware]] — le binaire produit et téléversé par l'IDE
- [[arduino-prise-en-main|Arduino — prise en main]] — installer et utiliser l'IDE pas à pas (captures)
