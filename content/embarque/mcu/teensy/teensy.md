---
title: Teensy
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

Les **Teensy** sont une famille de microcontrôleurs 32 bits très performants conçus par **PJRC**, bâtis sur des cœurs **ARM Cortex-M** (jusqu'au M7 à 600 MHz sur les Teensy 4.x) et programmés **dans le cadre Arduino** via l'add-on **Teensyduino**. Leur particularité n'est pas un nouvel outillage, mais ce qu'ils font *à l'intérieur* du cadre Arduino : une **performance brute** (FPU, DSP), des **entrées/sorties rapides**, et surtout deux signatures — le **traitement audio temps réel** (la *Teensy Audio Library* et son outil de conception graphique) et la **polyvalence USB** (le Teensy s'énumère en clavier, souris, manette, MIDI ou carte audio, au choix). En une formule : *l'Arduino, mais rapide, et un couteau-suisse USB/audio*. Cette fiche est **le hub qui regroupe les tutoriels liés au Teensy**. Le panorama général des familles et l'aide au choix restent portés par [[microcontroleur|microcontrôleur]].

## Pourquoi Teensy ?

Là où l'[[arduino|Arduino]] vise l'accessibilité, l'[[esp32|ESP32]] la connectivité et le [[stm32|STM32]] la maturité industrielle, le Teensy vise la **performance dans le confort Arduino** et deux niches fortes :

- **une seule porte, mais musclée** — tout se programme en API Arduino (`setup()`, `loop()`, `digitalWrite`, `Serial`…) via Teensyduino, sans outillage natif séparé à apprendre, mais avec un noyau **hand-optimisé par PJRC** qui exploite à fond le matériel ;
- **l'audio temps réel** — la *Teensy Audio Library* et son *Audio System Design Tool* font du Teensy une plateforme de référence pour le son et le DSP (synthèse, filtrage, effets, FFT), voir [[teensy-audio]] ;
- **la polyvalence USB** — le Teensy peut *devenir* n'importe quel périphérique USB (clavier, souris, manette, MIDI, audio…), choisi à la compilation (voir [[teensy-usb]]) ;
- **des E/S rapides** — `digitalWriteFast`, PWM à fréquence/résolution réglables, plusieurs ports série et bus matériels.

En contrepartie, le Teensy impose trois limites qu'il faut peser avant de le choisir. Sa génération actuelle (4.x) est **strictement 3,3 V**, sans une seule broche tolérante 5 V, là où un Arduino Uno se moque du niveau et où le STM32 offre ses broches *FT*. Il n'embarque **aucune radio** : dès qu'un objet doit communiquer, l'ESP32 ou l'[[esp8266|ESP8266]] le supplantent d'office. Et son **écosystème matériel est volontairement mince**. PJRC l'écrit lui-même, il n'a pas les moyens d'entretenir une gamme de cartes filles, là où les [[shield|shields]] Arduino se comptent par dizaines. C'est le choix qui se justifie quand le projet demande du **son, du DSP, une interface USB sur mesure** ou de la **performance** dans un cadre Arduino familier. La décision se tranche avec l'aide au choix du hub [[microcontroleur|microcontrôleur]].

![Ce que le Teensy garde du cadre Arduino et ce qu'il y ajoute : à gauche le même langage, les mêmes fonctions et les mêmes bibliothèques ; à droite un cœur Cortex-M7 à 600 MHz avec FPU et DSP, l'audio temps réel, l'identité USB choisie à la compilation et plusieurs bus matériels.|640](/ressources/img/teensy/comparaison-arduino.svg)

## Panorama des cartes

La famille est petite et lisible, et le **cœur Cortex-M** donne la classe de performance.

> [!info]
> Le tableau ci-dessous est un **repère pédagogique**, à confirmer sur le site de PJRC (`pjrc.com`) avant de figer un choix : les références exactes et les disponibilités évoluent.

| Carte | Cœur | Fréquence | Signatures |
| --- | --- | --- | --- |
| Teensy 4.1 | Cortex-M7 (NXP i.MX RT1062) | 600 MHz | Ethernet, lecteur microSD, nombreuses E/S, empreintes PSRAM/Flash |
| Teensy 4.0 | Cortex-M7 (NXP i.MX RT1062) | 600 MHz | format compact, mêmes performances que la 4.1 |

Les générations antérieures — **Teensy LC, 3.2, 3.5 et 3.6** — sont **arrêtées depuis 2023**, PJRC ne parvenant plus à s'approvisionner en puces des anciennes séries. On peut encore en croiser dans un projet existant, mais on n'en spécifie plus. À noter au passage : la 3.2 tolérait le 5 V sur ses broches numériques. **Aucune carte actuelle ne le fait**.

La génération actuelle est la **4.x** (Cortex-M7 à 600 MHz) : la **Teensy 4.1** est la plus capable (Ethernet, microSD, beaucoup d'E/S), la **4.0** en est la version compacte. Pour la plupart des projets, l'une des deux convient. Le compagnon audio naturel est l'**Audio Shield** (codec SGTL5000), qui apporte une entrée/sortie analogique propre par le bus [[bus-de-communication|I2S]].

## Écosystème

Le Teensy n'a qu'une porte de programmation, mais un écosystème logiciel riche autour d'elle.

- **Teensyduino** — un **add-on à l'IDE Arduino** (et à PlatformIO), pas un IDE séparé : il ajoute le noyau PJRC et les bibliothèques Teensy. C'est la **porte unique**, détaillée dans [[teensy-arduino-core|programmer avec l'Arduino-core]].
- **Teensy Loader** — l'application qui **flashe** la carte. Elle se lance automatiquement au téléversement (un bouton physique sur la carte permet de forcer le mode programmation au besoin).
- **Audio Library + Audio System Design Tool** — la signature audio : on **câble graphiquement** des objets de traitement, l'outil **génère le code** (voir [[teensy-audio]]).
- **USB Type** — le menu qui fait du Teensy un clavier, une manette, un instrument MIDI… (voir [[teensy-usb]]).

Contrairement au [[stm32|STM32]] (qui a un outillage natif fournisseur, CubeMX/HAL), le noyau Teensy est posé **directement sur les registres NXP** par PJRC, sans HAL intermédiaire : on reste « en Arduino », et l'on peut descendre aux registres ou aux fonctions rapides (`digitalWriteFast`) quand la performance l'exige. La façon de **structurer** le code (boucle, tâches, états) relève de [[firmware|firmware]], indépendamment de la carte.

## Attention à la tension

> [!warning]
> **Le Teensy fonctionne en logique 3,3 V, et la vigilance dépend de la génération.** Les **Teensy 4.x ne sont PAS tolérants 5 V** : appliquer 5 V sur une broche peut **détruire l'entrée**, comme l'[[esp32|ESP32]] (et contrairement au [[stm32|STM32]] et à ses broches *FT*). Les anciens Teensy 3.2 toléraient le 5 V sur leurs broches numériques, mais **ce n'est plus le cas** sur la génération actuelle. En venant de l'Arduino (5 V partout), adapter le niveau (diviseur, *level shifter*). Voir [[niveaux-de-tension|niveaux de tension]].

## Tutoriels

Les tutoriels du module Teensy, classés par difficulté croissante. Comme pour les autres familles, les items marqués *(transverse)* sont des fiches partagées du squelette (valables pour toutes les familles), le reste est propre au Teensy.

### Prendre en main

- [[teensy-prise-en-main|Prise en main du Teensy]] — installer Teensyduino sur l'IDE Arduino, flasher un premier blink via le Teensy Loader ;
- [[lire-une-datasheet|Lire une datasheet]] *(transverse)* — brochage, niveaux, courant max.

### Apprendre les bases

- [[cpp|Le langage C++]] *(transverse)* — bases du langage ;
- [[niveaux-de-tension|Niveaux de tension]] *(transverse)* — **3,3 V**, non tolérant 5 V sur les 4.x ;
- [[gpio|Les GPIO]] *(transverse)* — le concept d'entrée/sortie (mise en œuvre Teensy via l'Arduino-core) ;
- [[teensy-arduino-core|Programmer avec l'Arduino-core]] — la **porte unique** : l'Arduino musclé sur Teensy (broches, performance, `digitalWriteFast`).

### Notions avancées

- [[teensy-usb|Le Teensy comme appareil USB]] — clavier, souris, manette, MIDI, audio (Tools → USB Type) ;
- Communication : [[bus-de-communication|UART / I2C / SPI]] *(transverse)* — Teensy 4.x en offre plusieurs exemplaires matériels ;
- [[debugger-embarque|Déboguer]] *(transverse)* ; [[interruption|Interruptions]] *(transverse)* · [[timer|Timers]] *(transverse)*.

### Niveau ingénieur

La **signature du Teensy** — le son et le DSP temps réel, là où il se distingue vraiment.

- [[teensy-audio|Traiter de l'audio avec le Teensy]] — la *Teensy Audio Library* et l'*Audio System Design Tool*, traitement audio temps réel (synthèse, filtrage, effets) ;
- [[firmware|Firmware]] *(transverse)* — structurer le code, du super-loop au RTOS.

La **performance** (600 MHz, FPU, DSP) n'est pas un tutoriel à part : elle se vit dans l'Arduino-core (fonctions rapides) et porte l'audio.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — hub mère : panorama des familles et aide au choix
- [[arduino|Arduino]] — le cadre dont Teensyduino est un sur-ensemble musclé
- [[esp32|ESP32]] · [[stm32|STM32]] — familles voisines (l'ESP32 partage le 3,3 V non tolérant, le STM32 offre l'autre voie haute performance)
- [[firmware|Firmware]] — structuration du code embarqué (transverse)
- [[niveaux-de-tension|Niveaux de tension]] — la logique 3,3 V et la nuance par génération
- [[debugger-embarque|Déboguer]] — exploiter une sonde de débogage embarqué
