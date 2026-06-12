---
title: Microcontrôleur
type: notion
tags:
  - eee
  - notion
prerequis: []
aa:
  - RA-EEE-C03-2/EEE/2
phases:
  - concept
draft: false
---

Un **microcontrôleur** (MCU, pour *microcontroller unit*) est un circuit intégré programmable qui réunit sur une seule puce un [[processeur]], de la [[memoire|mémoire]] et des périphériques d'[[entree-sortie|entrée/sortie]] : c'est le composant qui exécute le programme de commande au cœur d'un système [[mecatronique|mécatronique]]. Cette fiche est le **hub d'entrée** vers les familles de microcontrôleurs — elle en dresse le panorama et donne la méthode pour en choisir un, sans entrer dans les spécificités de chaque famille (traitées dans les fiches filles) ni dans la façon d'écrire le code (voir [[firmware]]).

![Schéma bloc générique de l'architecture d'un microcontrôleur — processeur, mémoires Flash et RAM, bus interne et périphériques (GPIO, ADC, PWM, UART, I2C, SPI) reliés aux broches d'entrée/sortie.](/ressources/img/microcontroleur-architecture.svg)

## À quoi ça sert ?

Le microcontrôleur est le **cerveau de la chaîne de commande** d'un système mécatronique : il lit les capteurs, exécute la logique de décision et pilote les actionneurs. Le choix du contrôleur se fait en phase de [[concept]], typiquement via une [[matrice-de-decision|matrice de décision]] par sous-système, puis se fige en [[dossier-technique|dossier technique]] au moment de l'intégration.

Cette fiche tient une frontière nette avec les notions voisines :

- **choisir** une famille et une carte adaptées au projet → ici (panorama + aide au choix) ;
- **structurer** le code embarqué → [[firmware]] ;
- **lire la datasheet** d'un composant → [[lire-une-datasheet]] ;
- **faire communiquer** le MCU avec ses périphériques → [[bus-de-communication]] ;
- **réagir immédiatement à un événement** sans le surveiller en boucle → [[interruption]] ;
- **outiller** son poste et réutiliser du code existant → [[ide|IDE]], [[bibliotheque|bibliothèque]].

## Panorama des familles

Le paysage va du microcontrôleur 8 bits historique (AVR des premières cartes Arduino) aux 32 bits ARM Cortex-M omniprésents aujourd'hui, jusqu'aux **plateformes embarquées** de type *single-board computer* (SBC) comme le Raspberry Pi — qui ne sont pas à proprement parler des microcontrôleurs (elles font tourner un [[systeme-d-exploitation|système d'exploitation]] complet) mais qu'on range ici par usage pédagogique commun.

| Famille | Architecture | Langage / IDE | Conso | E/S & connectivité | Prix indicatif | Cas d'usage typique |
| --- | --- | --- | --- | --- | --- | --- |
| [[arduino\|Arduino]] | AVR 8 bits (Uno R3) à ARM Cortex-M4 (Uno R4) | C++/Wiring, IDE Arduino | modérée, veille matérielle possible mais peu outillée par le framework | GPIO num./ana., pas de sans-fil natif (sauf R4 WiFi) | ~5–25 € | apprentissage, prototypage rapide |
| [[esp32\|ESP32]] | Xtensa LX6/LX7 ou RISC-V, 32 bits | Arduino-core ou ESP-IDF | deep sleep ~µA, ~80–240 mA en Wi-Fi actif | Wi-Fi + Bluetooth intégrés, GPIO riche | ~5–12 € | objets connectés, projets sans-fil |
| [[xiao\|XIAO (Seeed Studio)]] *(format mini — base ESP32)* | ESP32-C3 (RISC-V) ou ESP32-S3 (Xtensa), 32 bits | Arduino-core, MicroPython | deep sleep ~µA (base ESP32) | Wi-Fi + BLE, ~11 broches au format timbre-poste | ~6–12 € | projets compacts, objets portés, IoT miniature |
| [[raspberry-pi-pico\|Raspberry Pi Pico]] | RP2040, 2× Cortex-M0+ (Pico 2 : RP2350) | MicroPython (Thonny), C/C++ Pico SDK, Arduino-core | veille ~1 mA (carte) | 26 GPIO, PIO (E/S programmables), pas de sans-fil (Pico W : Wi-Fi + BT) | ~4–8 € | apprentissage MicroPython, E/S temps réel (PIO), très bas coût |
| [[raspberry-pi\|Raspberry Pi]] *(SBC — plateforme embarquée)* | ARM Cortex-A multicœur (SoC), sous Linux | Python ou tout langage | plusieurs W | USB/HDMI/Ethernet/Wi-Fi, GPIO | ~40–90 € | traitement lourd, vision, réseau, besoin d'un OS |
| [[esp8266\|ESP8266]] | Xtensa 32 bits monocœur | Arduino-core | deep sleep ~20 µA | Wi-Fi intégré (pas de BT) | ~3–6 € | IoT Wi-Fi simple et économique |
| [[stm32\|STM32]] | ARM Cortex-M0 à M7 | STM32CubeIDE, STM32duino, PlatformIO | modes basse conso soignés | périphériques très riches | ~3–20 € (Blue Pill → Nucleo) | projets pro/industriels exigeants |
| [[teensy\|Teensy]] | ARM Cortex-M4/M7 (NXP, jusqu'à 600 MHz) | Arduino + Teensyduino | haute performance | E/S rapides, audio | ~25–35 € | audio, DSP, performance en cadre Arduino |
| [[pic\|PIC]] | 8 / 16 / 32 bits (Microchip) | MPLAB X, compilateurs XC | faible conso, faible coût unitaire | périphériques variés | variable (bas en volume) | industriel, *legacy*, production en série |

Trois repères pour lire ce tableau. La XIAO de Seeed Studio n'est pas une famille de puces mais un **format** : une carte timbre-poste construite (le plus souvent) autour d'un ESP32 — tout ce qui vaut pour l'[[esp32|ESP32]] s'y applique, dans un encombrement et un prix minimaux. Le Raspberry Pi n'est pas un microcontrôleur mais un ordinateur miniature : il s'impose quand le projet demande un système d'exploitation, du réseau ou du calcul lourd (vision), au prix d'une consommation et d'une complexité supérieures — à ne pas confondre avec le [[raspberry-pi-pico|Raspberry Pi Pico]], qui est, lui, un vrai microcontrôleur (ligne dédiée du tableau) et notamment la carte canonique du parcours [[micropython|MicroPython]]. L'ESP8266, pionnier du Wi-Fi à bas coût, est aujourd'hui largement supplanté par l'ESP32, plus capable pour un surcoût minime.

## Aide au choix

Le bon réflexe n'est pas de partir du microcontrôleur à la mode, mais des **besoins du projet**. Six critères orientent le choix :

1. **Entrées/sorties** — combien de [[gpio|GPIO]], d'entrées analogiques ([[adc|ADC]]), de sorties [[pwm|PWM]], et quelles interfaces ([[i2c|I2C]], [[spi|SPI]], [[uart|UART]]) le projet exige-t-il ? Et sous quelle **tension logique** (3,3 V ou 5 V) les capteurs et modules retenus dialoguent-ils ? *(→ notion [[niveaux-de-tension]])*
2. **Connectivité** — le système doit-il communiquer sans fil (Wi-Fi, Bluetooth) ? Si oui, l'ESP32 part favori ; sinon, une carte sans radio suffit.
3. **Puissance de calcul et temps réel** — une régulation rapide, du traitement de signal ou de l'audio appellent un 32 bits performant (STM32, Teensy) ; une lecture de capteur lente se contente d'un 8 bits.
4. **Consommation** — un système sur batterie impose des modes basse consommation (ESP32 en [[deep-sleep|deep sleep]], STM32) et un **budget courant** chiffré *(→ notion [[alimentation-electronique]])* ; sur secteur, le critère pèse moins.
5. **Écosystème et disponibilité** — documentation, communauté, bibliothèques et surtout disponibilité du composant dans la durée comptent souvent plus que quelques mégahertz : un MCU bien documenté et qu'on retrouve chez deux distributeurs fait gagner un temps considérable.
6. **Prix** — au coût unitaire, et au coût en série si le projet vise une petite production.

![Carte de positionnement des familles de microcontrôleurs selon la puissance de calcul et la connectivité sans fil intégrée — PIC et Arduino en entrée de gamme sans radio, STM32 et Teensy puissants sans radio, ESP8266 en Wi-Fi, ESP32, XIAO et Pico 2 W en Wi-Fi + Bluetooth, Raspberry Pi à part en ordinateur sous Linux.](/ressources/img/microcontroleur-positionnement.svg)

En pratique, ces critères se confrontent dans une [[matrice-de-decision|matrice de décision]] menée en [[concept]], au même titre que les autres choix d'architecture. La démarche complète dans le projet — chiffrer les besoins, confronter les candidats, tracer le choix — est déroulée dans [[choisir-le-materiel]], l'étape 2 de la colonne de réalisation. Une stratégie fréquente en projet école : **prototyper sur une carte facile** (Arduino) pour valider le principe, puis migrer vers une cible plus adaptée (ESP32 pour le sans-fil, STM32 pour la performance) si le besoin le justifie.

## Voir aussi

- [[firmware|Firmware]] — structuration du code embarqué (transverse, pseudocode)
- [[lire-une-datasheet|Lire une datasheet]] — compétence de lecture transverse
- [[bus-de-communication|Bus de communication]] — protocoles UART / I2C / SPI
- [[matrice-de-decision|Matrice de décision]] — outil de choix du contrôleur en concept
- [[choisir-le-materiel|Choisir le matériel]] — la démarche de sélection MCU / capteurs / actionneurs dans le projet (étape 2 de la réalisation)
- [[concept|Concept]] — phase où le contrôleur est choisi (étape 2)
