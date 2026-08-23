---
title: BLE
type: notion
tags:
  - eee
  - notion
prerequis:
  - techno-sans-fil-en
aa: []
phases: []
draft: true
source_fr: embarque/mcu/sans-fil/ble.md
source_sha256: 477bdb4ab583fbce4c0743bb5f07d6eddcd74197e598a8a477d4c39203f2dcd3
---

Le **BLE** (*Bluetooth Low Energy*) est une [[techno-sans-fil-en|technologie sans-fil]] de **courte portée** (une dizaine de mètres) et de **très basse consommation**, pensée pour les objets sur pile. C'est le lien privilégié entre un capteur et un **smartphone**. À ne pas confondre avec le Bluetooth « classique » des casques audio : le BLE **ne transporte pas de son**, il vise les données rares et brèves.

## Comment ça marche ?

Le débit reste modéré, assez pour des mesures et des commandes, pas pour un flux vidéo. Comme le [[wifi-en|Wi-Fi]], le BLE est souvent intégré au contrôleur, l'[[esp32-en|ESP32]] embarquant les deux. La mise en œuvre est traitée dans [[esp32-ble-en|Bluetooth LE avec l'ESP32]]. Pour un capteur autonome qui doit durer des mois, le couple BLE + [[deep-sleep-en|deep sleep]] est un classique : on ne se réveille que pour transmettre, brièvement.

## Voir aussi

- [[techno-sans-fil-en|Technologies sans-fil]] — hub : situer le BLE face aux autres
- [[esp32-ble-en|BLE sur ESP32]] — la mise en œuvre concrète
- [[wifi-en|Wi-Fi]] — alternative à haut débit, mais gourmande
- [[deep-sleep-en|Deep sleep]] — mode basse consommation, complément naturel du BLE
- [[esp32-en|ESP32]] — microcontrôleur à BLE (et Wi-Fi) intégré
