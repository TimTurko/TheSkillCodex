---
title: XIAO ESP32-S3 Sense
type: notion
phases:
  - concept
tags:
  - eee
  - notion
  - xiao
prerequis:
  - xiao-esp32-s3
aa: []
draft: false
---

Le **XIAO ESP32-S3 Sense** est la variante « capteurs » du [[xiao-esp32-s3|XIAO ESP32-S3]] : sur le même format timbre-poste, elle ajoute une **caméra**, un **microphone numérique** et un **lecteur microSD**, portés par une petite carte d'extension qui se clipse sur le connecteur **B2B**. C'est la carte pour faire de la **vision et de l'audio embarqués**, et s'initier à l'**IA sur microcontrôleur** (TinyML). Tout ce qui vaut pour le XIAO ESP32-S3 — brochage, [[xiao-alimentation|alimentation]], [[xiao-prise-en-main|prise en main]] — s'y applique ; cette fiche ne couvre **que ce que la Sense ajoute**.

## Ce que la Sense ajoute

![Le XIAO ESP32-S3 relié par le connecteur B2B à trois périphériques de la Sense : caméra OV3660 en DVP parallèle plus I²C de réglage, micro PDM sur GPIO42 et GPIO41, lecteur microSD sur le bus SPI D8 D9 D10.|640](/ressources/img/xiao-sense/peripheriques.svg)

Trois périphériques, branchés par le **connecteur B2B**, qui expose au passage **2 GPIO de plus** (D11 = GPIO42, D12 = GPIO41). Mais attention : ces deux-là sont **réservés au micro par défaut** — pour les récupérer, il faut couper le pont J1/J2 de la carte d'extension, et on **perd alors le micro**. La Sense est dense : chaque broche sert déjà à quelque chose.

Et la **PSRAM (8 Mo)** cesse d'être un luxe : c'est elle qui héberge le **tampon d'image** de la caméra.

## La caméra

Historiquement une **OV2640** (1600 × 1200), aujourd'hui une **OV3660** (2048 × 1536) — l'OV2640 est arrêtée ; le module **OV5640** est aussi compatible, et le code d'exemple de Seeed marche pour les trois. Le capteur est **détachable**.

Deux conséquences à retenir :

- **Elle mange des broches.** La liaison est un **DVP parallèle** : une douzaine de GPIO internes (données d'image, horloges pixel/ligne/trame) plus un petit bus [[i2c|I²C]] de réglage (SCCB). C'est l'autre raison du faible nombre de broches libres.
- **La PSRAM est obligatoire.** Une image de 2 Mpx ne tient pas dans la RAM interne : le **framebuffer** vit en PSRAM. Sans PSRAM activée dans l'IDE, l'initialisation de la caméra échoue.

Côté électrique, en capture l'ensemble tire **~350 mA en crête** sous 5 V (pour ~140 mA en moyenne en flux vidéo) : prévoir une [[xiao-alimentation|alimentation]] solide, et en usage prolongé le **dissipateur** proposé par Seeed (la puce chauffe vite avec la caméra).

## Le micro et la carte microSD

- **Micro numérique (PDM)** — horloge sur **GPIO42**, données sur **GPIO41** (les D11/D12 du B2B). Parfait pour de la détection de son ou de mots-clés.
- **Lecteur microSD** (jusqu'à 32 Go, FAT) — il **partage le bus [[spi|SPI]]** de la carte (SCK/MISO/MOSI = **D8 / D9 / D10**) avec une ligne de sélection (CS) — laquelle est **GPIO21**, la broche de la **LED utilisateur** : sur une Sense, le Blink de la prise en main et le lecteur SD se disputent la même broche. Ajouter un autre périphérique SPI oblige à gérer les CS ; la carte d'extension a même un pont (J3) pour basculer entre **SPI libre** et **carte SD**.

À garder en tête : sur la Sense, **micro ou D11/D12**, et **SD ou SPI pour autre chose** — repérer quel périphérique occupe quelles broches avant de câbler.

> [!warning] La Sense ne dort pas comme un XIAO nu
> Les **14 µA** de deep sleep annoncés pour le XIAO ESP32-S3 ne valent **pas** pour une Sense équipée. Relevés Seeed, en deep sleep : **~64 µA** carte d'extension seule, **~1,1 mA** avec la carte SD, **~3,0 mA** avec la caméra, **~4,0 mA** avec les deux. Soit un facteur **200 à 280** sur l'autonomie — la même cellule qui tiendrait des années sur un XIAO nu tient quelques jours ici. Sur un objet alimenté par batterie, **détacher le capteur inutilisé** est le seul levier réellement efficace. Voir [[xiao-alimentation|alimentation]].

## Vision et IA embarquée (TinyML)

L'ESP32-S3 dispose d'**instructions vectorielles** qui accélèrent l'inférence de petits réseaux de neurones : la Sense est une porte d'entrée concrète au **TinyML** — reconnaissance d'images, de sons ou de gestes directement sur la carte.

L'outillage, lui, est **hors de ce wiki** : la plateforme **SenseCraft** de Seeed (entraînement et déploiement de modèles, sans code) et **Edge Impulse** (chaîne TinyML complète) prennent le relais, et l'ebook *XIAO: Big Power, Small Board — Mastering Arduino and TinyML* sert de fil conducteur. *On pointe ces ressources sans les redévelopper : l'IA embarquée dépasse le périmètre du tutoriel.*

## Voir aussi

- [[xiao-esp32-s3|XIAO ESP32-S3]] — le hub de la carte (brochage, variantes, mise en œuvre)
- [[xiao-alimentation|XIAO — alimentation]] — la caméra est gourmande, dimensionne en conséquence
- [[spi|SPI]] — le bus partagé par la carte microSD
- [[i2c|I²C]] — le bus de réglage de la caméra (SCCB)
- [[xiao-prise-en-main|XIAO — prise en main]] — flasher la carte avant tout
