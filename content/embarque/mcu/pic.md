---
title: PIC
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
aa: []
phases:
  - concept
draft: false
---

Les **PIC** sont une famille de microcontrôleurs conçue par **Microchip**, longtemps l'une des plus répandues au monde, programmée en C avec l'IDE **MPLAB X** et les compilateurs **XC**. C'est un **classique de l'embarqué**, encore très présent dans l'industrie et l'enseignement par son immense base installée, mais **en recul pour les nouvelles conceptions**, supplanté par le [[stm32|STM32]] (et les ARM Cortex-M en général) côté industriel, et par l'[[arduino|Arduino]] en contexte scolaire. Cette fiche le **situe dans le paysage**. Elle ne l'enseigne pas (voir plus bas pourquoi).

## Un classique en recul

Pendant des décennies, le PIC a été un choix par défaut de l'embarqué, surtout dans ses déclinaisons **8 bits** (PIC16, PIC18) : robuste, disponible en très grand volume, très documenté, avec un écosystème industriel mûr. On en trouve encore dans d'innombrables produits.

Deux mouvements l'ont toutefois marginalisé pour les projets neufs :

- **en industrie**, les **ARM Cortex-M** (STM32 en tête) offrent plus de performance et de périphériques dans un même boîtier, un outillage moderne et un écosystème unifié — ce qui a déplacé la majorité des nouvelles conceptions vers eux ;
- **en école**, l'**Arduino** (et l'ESP32) l'emporte par l'accessibilité : prise en main immédiate, communauté énorme, bibliothèques foisonnantes, pas de programmateur dédié à prévoir.

## Ce que c'est, techniquement

Le PIC couvre plusieurs familles selon la largeur du cœur : **8 bits** (PIC10/12/16/18), **16 bits** (PIC24, dsPIC pour le traitement du signal) et **32 bits** (PIC32). On les programme **en C** dans **MPLAB X** avec le compilateur **XC** adapté (XC8/XC16/XC32), et on les flashe avec un **programmateur** Microchip (gamme *PICkit*). À la différence de l'[[esp32|ESP32]], du [[teensy|Teensy]] ou du [[stm32|STM32]] (via STM32duino), le PIC **n'a pas d'Arduino-core natif** d'usage courant. L'écosystème reste celui de Microchip.

Détail qui éclaire le paysage : **Microchip a racheté Atmel en 2016**. Le PIC et l'**AVR** qui équipe l'Arduino Uno sortent donc du même fabricant depuis une dizaine d'années, deux familles historiquement concurrentes désormais entretenues sous le même toit.

## Quand on le rencontre encore

- **Maintenance de systèmes existants** (*legacy*) — beaucoup d'équipements en service reposent sur des PIC ;
- **Production en très grande série** — où la stabilité de la référence et la disponibilité à long terme priment ;
- **Compétences déjà en place** — une équipe formée à MPLAB peut rester sur PIC par continuité.

## Pour vos projets

Le wiki **ne traite pas le PIC en module** : vos projets école s'appuieront sur l'[[arduino|Arduino]] (accessibilité) ou le [[stm32|STM32]] (performance, proximité industrielle). Connaître l'existence du PIC suffit à **lire le paysage** — savoir qu'un produit ancien peut en contenir, et comprendre pourquoi le choix se porte aujourd'hui ailleurs. Le choix d'une famille pour un projet se mène depuis le hub [[microcontroleur|microcontrôleur]], via une [[matrice-de-decision|matrice de décision]].

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — hub mère : panorama des familles et aide au choix
- [[stm32|STM32]] — ce qui a pris la place du PIC en industrie (ARM Cortex-M)
- [[arduino|Arduino]] — ce qui l'a remplacé en contexte scolaire
- [[matrice-de-decision|Matrice de décision]] — l'outil de choix d'un contrôleur en concept
