---
title: XIAO ESP32-S3
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
  - esp32
aa: []
phases:
  - concept
draft: false
aliases:
  - xiao
---

Le **XIAO ESP32-S3** est une carte de développement *timbre-poste* (≈ 21 × 17,5 mm) de **Seeed Studio**, bâtie autour de la puce [[esp32|ESP32]]-S3 : deux cœurs à 240 MHz, 8 Mo de PSRAM, Wi-Fi et BLE, le tout sur une carte USB-C qui tient sur un ongle. Cette fiche est le **hub-parcours** de la carte : pourquoi elle, quelle variante choisir, et comment l'utiliser dans ton projet en t'appuyant sur les fiches existantes. XIAO est un **format**, pas une famille de puces — tout ce qui concerne le SoC, les radios et les chaînes d'outils est porté par le module [[esp32|ESP32]], et le choix entre familles de microcontrôleurs reste porté par [[microcontroleur|microcontrôleur]].

![Carte XIAO ESP32-S3 et ses fonctions : USB-C, antenne U.FL, LED utilisateur sur GPIO21, boutons Boot et Reset, et les groupes alimentation, 11 GPIO, 9 ADC, I²C, SPI et UART.](/ressources/img/xiao-esp32-s3-brochage.svg)

## Pourquoi le XIAO ESP32-S3 ?

Tu prends cette carte quand tu veux la **connectivité et la puissance d'un ESP32 dans un encombrement minimal** :

- **format timbre-poste** (≈ 21 × 17,5 mm, bords castellés montables en CMS) — idéal pour un objet porté ou un produit compact ;
- **ESP32-S3** : deux cœurs Xtensa LX7 à 240 MHz, **8 Mo de PSRAM + 8 Mo de Flash**, instructions vectorielles pour l'IA embarquée ;
- **Wi-Fi 4 (2,4 GHz) + BLE 5** intégrés, avec antenne céramique **et** connecteur d'antenne externe ;
- **USB-C natif** — l'ESP32-S3 gère l'USB sans puce externe ;
- **charge LiPo embarquée** (pads batterie au dos) et mode [[deep-sleep|deep sleep]] très économe → fonctionnement sur batterie.

La rançon de la miniaturisation : **onze broches seulement** sortent sur les bords (voir plus bas), et la carte fonctionne en **3,3 V** — les capteurs et modules en 5 V demandent une adaptation de niveau *(→ notion [[niveaux-de-tension]])*.

## Choisir sa variante

XIAO décline le même format sur plusieurs puces ESP32. Pars du **besoin du projet**, pas de la fiche technique.

![Arbre de décision pour choisir une variante XIAO ESP32 : caméra ou IA vers la S3 Sense, Matter ou Zigbee vers la C6, Wi-Fi 5 GHz vers la C5, coût minimal vers la C3, sinon la S3 par défaut.](/ressources/img/xiao-esp32-s3-variantes.svg)

| Variante | Cœur | RAM / Flash | Radios | Périphérique signature | À choisir si… |
| --- | --- | --- | --- | --- | --- |
| **ESP32-S3** | Xtensa LX7 ×2, 240 MHz | 8 Mo PSRAM / 8 Mo | Wi-Fi 4 + BLE 5 | — (carte de référence) | tu veux l'équilibre Wi-Fi + BLE + puissance |
| **ESP32-S3 Sense** | idem S3 | 8 Mo PSRAM / 8 Mo | Wi-Fi 4 + BLE 5 | caméra OV2640/OV3660 + micro + microSD | vision, audio, IA embarquée |
| **ESP32-C3** | RISC-V, 160 MHz | 400 Ko / 4 Mo | Wi-Fi 4 + BLE 5 | — | coût et consommation au minimum |
| **ESP32-C6** | RISC-V (HP + LP) | 512 Ko / 4 Mo | Wi-Fi 6 + BLE 5 + 802.15.4 | Thread / Zigbee / **Matter** | domotique interopérable |
| **ESP32-C5** | RISC-V | 512 Ko / 4 Mo | Wi-Fi 6 **bi-bande** (2,4 / 5 GHz) | — | passerelle, Wi-Fi 5 GHz |

## Mettre en œuvre dans ton projet

Programmer cette carte mobilise les mêmes briques que tout microcontrôleur : entrées/sorties, communication, sans-fil, basse consommation. Le tableau ci-dessous **renvoie chaque besoin vers la fiche qui l'explique** — si tu débutes, parcours-le de haut en bas ; sinon, va droit à ce qu'il te manque. Et pour mener un projet de bout en bout (chiffrer les besoins, choisir, concevoir, programmer, tester), tout est déroulé dans la [[embarque/index|colonne de réalisation]], où le XIAO entre à l'étape [[choisir-le-materiel|choisir le matériel]].

| Tu veux… | Va voir |
| --- | --- |
| programmer en C++ (Arduino) | [[arduino\|Arduino]] + [[esp32-arduino-core\|ESP32 Arduino-core]] |
| programmer en MicroPython | [[micropython\|MicroPython]] |
| les bases GPIO / PWM / ADC | [[gpio\|GPIO]] · [[pwm\|PWM]] · [[adc\|ADC]] |
| faire communiquer (I²C / SPI / UART) | [[bus-de-communication\|bus de communication]] |
| connecter en Wi-Fi | [[esp32-wifi\|ESP32 Wi-Fi]] |
| connecter en Bluetooth (BLE) | [[esp32-ble\|ESP32 BLE]] |
| réagir à un événement | [[interruption\|interruption]] · [[timer\|timer]] |
| économiser la batterie | [[deep-sleep\|deep sleep]] + [[esp32-deep-sleep\|ESP32 deep sleep]] |
| faire du multitâche | [[esp32-freertos\|FreeRTOS]] |
| structurer ton code | [[firmware\|firmware]] |

Trois fiches couvrent le **spécifique carte** : le premier flashage avec [[xiao-prise-en-main|prise en main]], l'alimentation et la recharge d'accu avec [[xiao-alimentation|alimentation]], et la version caméra/IA avec [[xiao-sense|XIAO Sense]].

## Les onze broches

Le SoC ESP32-S3 expose une quarantaine de GPIO, mais le format XIAO n'en sort que **onze** (D0–D10), plus l'alimentation. C'est la contrainte numéro un de la carte.

| Pad | GPIO | ADC | Touch | Rôle « par défaut » |
| --- | --- | --- | --- | --- |
| D0 | GPIO1 | ✓ | ✓ | — |
| D1 | GPIO2 | ✓ | ✓ | — |
| D2 | GPIO3 | ✓ | ✓ | strapping |
| D3 | GPIO4 | ✓ | ✓ | — |
| D4 | GPIO5 | ✓ | ✓ | I²C **SDA** |
| D5 | GPIO6 | ✓ | ✓ | I²C **SCL** |
| D6 | GPIO43 | — | — | UART **TX** |
| D7 | GPIO44 | — | — | UART **RX** |
| D8 | GPIO7 | ✓ | ✓ | SPI **SCK** |
| D9 | GPIO8 | ✓ | ✓ | SPI **MISO** |
| D10 | GPIO9 | ✓ | ✓ | SPI **MOSI** |

Côté alimentation : **5V** (sortie de l'USB, ou entrée *via une diode* en série), **3V3** (sortie régulée, jusqu'à 700 mA), **GND**, et les pads **B+ / B−** de batterie au dos. Une **LED utilisateur** est câblée sur GPIO21, plus une LED de charge et les boutons Boot/Reset.

> [!warning] Pièges de broches
> - **La sérigraphie D0…D10 n'est pas le numéro GPIO.** En Arduino tu peux écrire `D6`, mais ailleurs (MicroPython, beaucoup de bibliothèques) tu donnes le numéro **GPIO** — et `D6` vaut **GPIO43**, pas GPIO6.
> - **Neuf pads ADC seulement** : D0–D5 et D8–D10. **D6/D7** sont réservés à l'UART (pas d'analogique), et sur la Sense **A11/A12 (GPIO41/42) ne font pas d'ADC** malgré leur nom.
> - **Pas de DAC** sur l'ESP32-S3, contrairement à l'ESP32 classique : pour une vraie sortie analogique, un convertisseur externe ou de la PWM filtrée *(→ notion [[dac]])*.
> - **Pins de strapping** : le bouton Boot est sur GPIO0, et **D2 (GPIO3)** est un pad de strapping — un niveau imposé au démarrage peut empêcher le boot ou le flashage. Garde-le libre au reset si tu peux.

## Étendre les entrées/sorties

Onze broches, c'est vite court. La réponse standard est un **expandeur d'E/S sur le bus [[i2c|I²C]]** : deux fils (SDA sur D4, SCL sur D5) pilotent un circuit comme le **PCF8574** (8 E/S) ou le **MCP23017** (16 E/S), adressable — tu en chaînes plusieurs sur le même bus.

![Branchement d'un expandeur d'E/S sur le bus I²C du XIAO : SDA sur D4, SCL sur D5, deux résistances de tirage vers 3V3, et 8 à 16 entrées-sorties en sortie de l'expandeur.](/ressources/img/xiao-esp32-s3-extendeur-i2c.svg)

L'autre voie, sans soudure, est l'**écosystème d'extension XIAO** : la *Expansion Base* (écran OLED, RTC, buzzer, lecteur microSD, connecteurs Grove) et les modules **Grove** se branchent directement et donnent accès aux périphériques courants sans câblage fin.

## L'antenne, interne ou externe

La carte embarque une **antenne céramique** active par défaut, et un **connecteur d'antenne externe (U.FL / IPEX)** avec une antenne fournie. Tu branches l'antenne externe pour gagner en portée : en **boîtier** (surtout métallique), à **proximité d'une batterie ou d'un plan de masse**, ou pour une **longue distance**.

![Comparaison antenne interne et externe du XIAO : à gauche l'antenne céramique intégrée par défaut, à droite une antenne externe branchée sur le connecteur U.FL pour plus de portée.](/ressources/img/xiao-esp32-s3-antenne.svg)

Deux précautions : le connecteur U.FL est **fragile** (clipse et déclipse avec soin, en tenant le connecteur et non le câble), et le choix est **matériel** — pas de bascule logicielle.

## Format et montage

Les **bords castellés** permettent de souder la XIAO directement sur ton propre circuit, comme un module CMS : c'est le passage du **prototype au produit** *(→ [[pcb|conception de PCB]])*. Avec des barrettes soudées, le pas de 2,54 mm reste compatible breadboard et plaque à trous. L'alimentation passe par l'**USB-C** ou par les pads (5V via diode, ou batterie sur B+/B−).

## Voir aussi

- [[esp32|ESP32]] — le SoC, les radios, les chaînes d'outils (le parcours puce)
- [[microcontroleur|Microcontrôleur]] — panorama des familles et aide au choix inter-familles
- [[xiao-prise-en-main|XIAO — prise en main]] — premier flashage, boutons, USB
- [[xiao-alimentation|XIAO — alimentation]] — recharge d'accu, basse consommation
- [[xiao-sense|XIAO Sense]] — caméra, micro, microSD, IA embarquée
- [[embarque/index|Colonne de réalisation]] — la démarche projet de bout en bout
- [[choisir-le-materiel|Choisir le matériel]] — l'étape où le XIAO entre dans le projet
- [[i2c|I²C]] — le bus de l'extendeur d'E/S
- [[deep-sleep|Deep sleep]] — le mode basse consommation sur batterie
