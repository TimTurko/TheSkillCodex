---
title: Système embarqué
tags: [branche, eee]
---

**Branche électronique & informatique embarquée** — le cœur technique du projet, de l'énergie qui alimente la carte jusqu'au firmware qui la pilote. (Elle réunit les anciens domaines EEE et MIA, fusionnés en 2026.)

Suis les points d'entrée ci-dessous dans l'ordre, ou va droit au sujet qui te concerne. Les fiches renvoient vers la [[hub/index|conduite de projet]] et la [[fiches/mme/index|méca]] quand une notion l'exige.

## Lire et concevoir l'électronique
- [[schema-bloc-fonctionnel|Schéma bloc fonctionnel]] — la vue par fonctions
- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — lire un schéma de principe
- [[chaine-energie|Chaîne d'énergie et d'information]] — les deux chaînes couplées
- [[niveaux-de-tension|Niveaux de tension]] — 3,3 V / 5 V, compatibilité et adaptation
- [[alimentation-electronique|Concevoir une alimentation]] — réguler, découpler, router les masses, protéger
- [[lire-une-datasheet|Lire une datasheet]] — exploiter la documentation d'un composant

## Programmer un microcontrôleur
Point de départ : le hub [[microcontroleur|microcontrôleur]] (panorama des familles et aide au choix).
- **Familles** : [[arduino|Arduino]] (la référence), [[esp32|ESP32]], [[esp8266|ESP8266]], [[stm32|STM32]], [[teensy|Teensy]], [[raspberry-pi|Raspberry Pi]], [[pic|PIC]]
- **Langages** : [[cpp|C++]] (écosystème Arduino) et [[micropython|MicroPython]]
- **Concepts transverses** : [[gpio|GPIO]], [[firmware|firmware]], [[interruption|interruptions]], [[timer|timers]], [[deep-sleep|veille]], [[manipulation-de-bits|manipulation de bits]]

## Communiquer
- [[bus-de-communication|Bus de communication]] — [[uart|UART]], [[i2c|I²C]], [[spi|SPI]]
- [[techno-sans-fil|Technologies sans fil]] — [[wifi|Wi-Fi]], [[ble|BLE]], [[zigbee|Zigbee]], [[lora|LoRa]]…

## Commander par un algorithme
Point de départ : le hub [[algorithme|algorithme]].
- [[logigramme|Logigramme]], [[machine-a-etats|machine à états]], [[grafcet|GRAFCET]], [[chronogramme|chronogramme]]

## Vérifier et mettre au point
- [[simulation-electronique|Simulation électronique]] — calculer le comportement avant de câbler
- [[instruments-de-mesure|Instruments de mesure]] — [[multimetre|multimètre]], [[oscilloscope|oscilloscope]]
- [[debugger-embarque|Déboguer un système embarqué]] — traquer un bug dans le firmware

## Réaliser une carte
- [[pcb|Circuit imprimé]] — du schéma à la carte fabricable, avec [[kicad|KiCad]]
