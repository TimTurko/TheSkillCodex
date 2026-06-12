---
title: Mémoire
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
aa: []
phases: []
draft: false
---

La **mémoire** d'un [[microcontroleur|microcontrôleur]] se répartit en deux rôles. La **Flash** conserve le **programme** même hors tension : c'est elle qu'on écrit au téléversement. La **RAM** est la mémoire de **travail**, rapide mais **volatile** — son contenu disparaît à la coupure. La taille de chacune borne ce qu'on peut écrire (Flash) et manipuler en cours d'exécution (RAM).

## En pratique

Les ordres de grandeur parlent d'eux-mêmes : une carte Uno offre 32 ko de Flash et **2 ko de RAM** ; un ESP32, 4 Mo et 520 ko. La RAM est la **ressource rare** de l'embarqué — c'est elle qui déborde en premier *(que faire quand elle manque : [[arduino-memoire]])*. Reste une troisième zone : pour qu'une **donnée** (compteur d'usage, calibration, réglage) survive à la coupure comme le programme, le microcontrôleur réserve une **EEPROM** ou une portion de Flash dédiée — voir [[arduino-eeprom]] côté Arduino, [[micropython-stockage]] côté MicroPython.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — le circuit qui intègre la mémoire
- [[processeur|Processeur]] — l'unité qui lit le programme en Flash et travaille en RAM
- [[arduino-memoire|Gérer la mémoire (Arduino)]] — quand la RAM vient à manquer
- [[arduino-eeprom|EEPROM (Arduino)]] et [[micropython-stockage|Stockage (MicroPython)]] — sauvegarder des données hors tension
