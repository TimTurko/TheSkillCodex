---
title: ESP32
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

L'**ESP32** est une famille de microcontrôleurs *system-on-chip* du fabricant Espressif, qui intègrent **Wi-Fi et Bluetooth** sur la puce et offrent nettement plus de puissance et de mémoire qu'un Arduino classique. Ils se programment avec le **même cadre que l'[[arduino|Arduino]]** (l'[[esp32-arduino-core|Arduino-core]]) ou avec **ESP-IDF**, l'environnement natif d'Espressif. Cette fiche est **le hub qui regroupe les tutoriels liés à l'ESP32** : pourquoi cette famille, ses variantes, son écosystème, et les tutoriels classés par difficulté. Le panorama général des familles de microcontrôleurs et l'aide au choix restent portés par [[microcontroleur|microcontrôleur]].

## Pourquoi ESP32 ?

Là où l'Arduino vise l'accessibilité, l'ESP32 vise la **connectivité et la performance** :

- **Wi-Fi et Bluetooth intégrés** — l'argument décisif : un objet connecté sans module radio externe ;
- **puissance** — un ou deux cœurs jusqu'à 240 MHz, beaucoup plus de RAM et de Flash, et un [[systeme-d-exploitation|RTOS]] (FreeRTOS) natif pour le multitâche ;
- **autonomie** — un mode [[deep-sleep|deep sleep]] très économe, adapté au fonctionnement sur batterie ;
- **prix contenu**, malgré ces capacités.

En contrepartie, l'ESP32 est **moins indulgent** : il fonctionne en **3,3 V** (voir l'alerte ci-dessous), demande une alimentation soignée (appels de courant en émission radio), et sa richesse le rend plus complexe à débuter. Le choix se tranche avec l'aide au choix du hub [[microcontroleur|microcontrôleur]] : pour apprendre ou prototyper simple sans connectivité, l'Arduino reste plus doux ; dès qu'il faut du **sans-fil**, de l'**autonomie** ou de la **puissance de calcul**, l'ESP32 s'impose.

## Panorama des variantes

La famille s'est diversifiée ; quelques variantes couvrent l'essentiel des besoins.

| Variante | Cœur(s) | Radio | Particularité |
| --- | --- | --- | --- |
| ESP32 (original) | 2× Xtensa LX6, 240 MHz | Wi-Fi + Bluetooth Classic + BLE | le polyvalent, le plus répandu |
| ESP32-S2 | 1× Xtensa LX7 | Wi-Fi seul | USB natif, pas de Bluetooth |
| ESP32-S3 | 2× Xtensa LX7 | Wi-Fi + BLE 5 | USB natif, instructions pour l'IA |
| ESP32-C3 | 1× RISC-V | Wi-Fi + BLE 5 | économique, faible encombrement |
| ESP32-C6 | 1× RISC-V | Wi-Fi 6 + BLE 5 + 802.15.4 | Thread / Zigbee pour la domotique |

On rencontre ces puces sur des **modules** (WROOM, WROVER) eux-mêmes montés sur des **cartes de développement** (DevKitC, et des variantes Feather, LOLIN…). Pour un projet, une carte de type DevKit ESP32 d'origine est le point d'entrée sûr.

## Écosystème

Deux chemins de programmation coexistent :

- **Arduino-core pour ESP32** — la **même API que l'Arduino** (`setup()`, `loop()`, `digitalWrite`…), via l'[[esp32-arduino-core|core ESP32]] installé dans l'[[ide|IDE]] Arduino. C'est la migration la plus douce depuis l'Arduino, et le chemin recommandé pour débuter.
- **ESP-IDF** — le cadre **natif** d'Espressif, bâti sur **FreeRTOS**, qui donne le plein contrôle (multitâche, gestion fine de l'alimentation, pile réseau). Plus exigeant, il prend son sens sur les projets aboutis.

PlatformIO gère les deux. La façon de **structurer** le code (boucle, tâches, états, RTOS) relève de [[firmware|firmware]] — indépendante du chemin choisi.

## Attention à la tension

> [!warning]
> **Les broches de l'ESP32 sont en 3,3 V et ne tolèrent pas le 5 V.** Brancher directement un capteur ou un module 5 V sur une entrée ESP32 peut **détruire la broche**. C'est la différence la plus piégeuse avec l'Arduino (tolérant 5 V). Toute interface avec un signal 5 V passe par une adaptation de niveau — voir [[niveaux-de-tension|niveaux de tension]].

## Tutoriels

Les tutoriels du module ESP32, classés par difficulté croissante. Comme pour l'Arduino, les items marqués *(transverse)* sont des fiches partagées du squelette (valables pour toutes les familles), le reste est propre à l'ESP32.

### Prendre en main

- [[esp32-prise-en-main|Prise en main de l'ESP32]] — installer l'Arduino-core, sélectionner la carte, téléverser un premier programme ;
- [[lire-une-datasheet|Lire une datasheet]] *(transverse)* — brochage, niveaux, courant max.

### Apprendre les bases

- [[cpp|Le langage C++]] *(transverse)* — bases du langage ;
- [[niveaux-de-tension|Niveaux de tension]] *(transverse)* — **3,3 V**, ne pas griller une broche ;
- [[esp32-gpio|Configurer les GPIO]] — broches utilisables, broches à éviter au démarrage ;
- [[esp32-serie|Moniteur série]] — lire et écrire sur le port série.

### Notions avancées

- Connectivité : [[esp32-wifi|Wi-Fi]] · [[esp32-ble|Bluetooth LE]] — le cœur de la famille ;
- Communication : [[arduino-uart|UART]] · [[arduino-i2c|I2C]] · [[arduino-spi|SPI]] *(notion transverse : [[bus-de-communication|bus de communication]])* ;
- [[esp32-deep-sleep|Deep sleep]] *(→ notion [[deep-sleep]])* — fonctionnement sur batterie.

### Niveau ingénieur

- [[esp32-freertos|Multitâche avec FreeRTOS]] — la spécialité de l'ESP32 : plusieurs tâches préemptives ;
- [[interruption|Interruptions]] *(transverse)* · [[timer|Timers]] *(transverse)* ;
- [[firmware|Firmware]] *(transverse)* — structurer un firmware ESP32, du super-loop au RTOS.

D'autres tutos compléteront ces paliers au fil des projets.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — hub mère : panorama des familles et aide au choix
- [[arduino|Arduino]] — famille voisine, programmable via le même cadre ([[esp32-arduino-core]])
- [[firmware|Firmware]] — structuration du code embarqué, du super-loop à FreeRTOS (transverse)
- [[niveaux-de-tension|Niveaux de tension]] — l'adaptation 3,3 V / 5 V, indispensable avec l'ESP32
- [[bus-de-communication|Bus de communication]] — UART / I2C / SPI
