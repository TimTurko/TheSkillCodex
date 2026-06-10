---
title: BLE
type: notion
tags:
  - eee
  - notion
prerequis:
  - techno-sans-fil
aa: []
phases: []
draft: false
---

Le **BLE** (*Bluetooth Low Energy*) est une [[techno-sans-fil|technologie sans-fil]] de **courte portée** (une dizaine de mètres) et de **très basse consommation**, pensée pour les objets sur pile. C'est le lien privilégié entre un capteur et un **smartphone**.

## Comment ça marche ?

Le débit reste modéré — assez pour des mesures et des commandes, pas pour un flux vidéo. Comme le [[wifi|Wi-Fi]], le BLE est souvent intégré au contrôleur (l'[[esp32|ESP32]] embarque les deux). Pour un capteur autonome qui doit durer des mois, le couple BLE + [[deep-sleep|deep sleep]] est un classique : on ne se réveille que pour transmettre, brièvement.

## Voir aussi

- [[techno-sans-fil|Technologies sans-fil]] — hub : situer le BLE face aux autres
- [[wifi|Wi-Fi]] — alternative à haut débit, mais gourmande
- [[deep-sleep|Deep sleep]] — mode basse consommation, complément naturel du BLE
- [[esp32|ESP32]] — microcontrôleur à BLE (et Wi-Fi) intégré
