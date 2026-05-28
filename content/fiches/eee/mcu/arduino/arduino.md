---
title: Arduino
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

**Arduino** est une plateforme open-source de prototypage électronique : une famille de cartes à microcontrôleur associées à un environnement de développement ([[ide|IDE]]) et à un vaste écosystème de [[bibliotheque|bibliothèques]] et de [[shield|shields]], pensée pour rendre l'électronique embarquée accessible. Cette fiche est **le hub qui regroupe l'ensemble des tutoriels liés à l'Arduino** : panorama des cartes, écosystème, et tutoriels d'utilisation classés par difficulté. Le panorama générique des familles de microcontrôleurs et l'aide au choix restent portés par [[microcontroleur|microcontrôleur]].

## Pourquoi Arduino ?

Arduino occupe une **niche d'accessibilité** plus qu'une niche de performance. Ses atouts ne tiennent pas aux caractéristiques de la puce, mais à tout ce qui l'entoure :

- une **communauté massive** et une documentation pléthorique — pour presque tout capteur ou module, un tutoriel et une bibliothèque existent déjà ;
- un **écosystème de shields** (cartes d'extension empilables) qui ajoutent des fonctions sans soudure ;
- une **tolérance 5 V** sur les entrées/sorties, compatible avec un grand parc de capteurs et de modules ;
- une **courbe d'apprentissage douce**, idéale pour entrer dans l'embarqué.

C'est donc le choix par défaut pour apprendre, prototyper vite et valider un principe. Quand le projet réclame du **sans-fil** (Wi-Fi, Bluetooth), de l'**autonomie sur batterie** ou de la **performance**, une autre famille s'impose souvent — la décision se prend avec l'aide au choix du hub [[microcontroleur|microcontrôleur]]. À noter : hors Uno R4 WiFi, les cartes Arduino n'embarquent pas de radio ; pour un objet connecté, regarder du côté de l'[[esp32|ESP32]].

## Panorama des cartes

Trois cartes couvrent l'essentiel des besoins en projet école ; le reste de la gamme (Leonardo, Due, Giga, variantes Nano) se choisit au cas par cas.

| Carte | MCU | Flash / RAM | E/S (num. / ana. / PWM) | Particularité | Cas d'usage typique |
| --- | --- | --- | --- | --- | --- |
| Uno (R3 / R4) | R3 : ATmega328P (AVR 8 bits, 16 MHz) · R4 : Renesas RA4M1 (ARM Cortex-M4, 48 MHz) | R3 : 32 Ko / 2 Ko · R4 : 256 Ko / 32 Ko | 14 / 6 / 6 | carte de référence, format des shields ; R4 : USB-C, DAC, bus CAN, variante *WiFi* (ESP32-S3 + matrice LED 12×8) | apprentissage, base de projet |
| Mega 2560 | ATmega2560 (AVR 8 bits, 16 MHz) | 256 Ko / 8 Ko | 54 / 16 / 15 | grand nombre d'E/S | projets riches en E/S (ex. imprimantes 3D) |
| Nano | ATmega328P (AVR 8 bits, 16 MHz) | 32 Ko / 2 Ko | 14 / 8 / 6 | format compact pour breadboard | intégration finale compacte |

*Le passage de l'Uno R3 (8 bits) à l'Uno R4 (32 bits ARM) conserve le même format et la compatibilité 5 V des shields, tout en multipliant mémoire et puissance de calcul — un exemple net de montée en gamme sans rupture d'écosystème.*

## Écosystème

L'environnement de référence est l'**IDE Arduino**, qui reconnaît les cartes sans [[pilote|pilote]] supplémentaire ; pour des projets plus structurés, PlatformIO ou l'Arduino CLI offrent une chaîne de compilation plus puissante. Le langage est un **[[cpp|C++]] outillé** (dialecte Wiring), organisé autour de deux [[fonction-informatique|fonctions]] : `setup()`, exécutée une fois au démarrage, et `loop()`, répétée indéfiniment. Le gestionnaire de bibliothèques intégré donne accès en quelques clics à des milliers de pilotes de capteurs et de modules.

Cet écosystème déborde du seul matériel Arduino : le même cadre de développement programme aussi l'[[esp32|ESP32]] (via l'Arduino-core) et bien d'autres cartes. Frontière à garder en tête — ce bloc décrit l'**outillage** propre à Arduino, pas la façon de structurer le code embarqué, qui relève de [[firmware]].

## Tutoriels

Les tutoriels du module Arduino, classés par difficulté croissante. La plupart appliquent sur Arduino une notion transverse, définie une fois pour toutes les familles : les items marqués *(transverse)* sont ces fiches partagées du squelette, le reste est propre à Arduino.

### Prendre en main

- [[arduino-prise-en-main|Prise en main d'Arduino]] — installer l'IDE, écrire et téléverser un premier programme ;
- [[tinkercad|Tinkercad]] — simuler un montage en ligne, avant le matériel ;
- [[lire-une-datasheet|Lire une datasheet]] *(transverse)* — y trouver Vin, niveaux de tension et courant max.

### Apprendre les bases

- [[cpp|Le langage C++]] *(transverse)* — bases du langage ;
- [[niveaux-de-tension|Niveaux de tension]] *(transverse)* — 3,3 V vs 5 V, ne pas griller une carte ;
- [[arduino-gpio|Configurer les GPIO]] — modes `INPUT` / `OUTPUT` / `INPUT_PULLUP` ;
- [[arduino-serie|Moniteur série]] — lire et écrire sur le port série ;
- [[arduino-entree-tor|Lire une entrée TOR]] — bouton/interrupteur + anti-rebond ;
- [[arduino-sortie-tor|Piloter une sortie TOR]] — LED, relais ;
- [[arduino-capteur-numerique|Lire un capteur numérique]] ;
- [[arduino-capteur-analogique|Lire un capteur analogique]] — via l'ADC ;
- [[arduino-sortie-pwm|Piloter une sortie PWM]] ;
- [[arduino-temporisation|Temporiser]] — `delay()` vs `millis()` ;
- [[arduino-bibliotheques|Utiliser une bibliothèque]] — installer, inclure, lire la doc ;
- [[arduino-module|Câbler un module]] · [[arduino-shield|Utiliser un shield]] ;
- [[arduino-alimentation|Alimenter la carte]] — USB / Vin / jack, plage de tension, courant max.

### Notions avancées

- Communication, par protocole : [[arduino-uart|UART]] · [[arduino-i2c|I2C]] · [[arduino-spi|SPI]] *(notions transverses : [[bus-de-communication|bus de communication]])* ;
- [[arduino-debug|Débugger un programme]] ;
- [[arduino-gpio-boot|État des GPIO à l'allumage]] — niveaux par défaut, broches sensibles ;
- Actionneurs : [[arduino-servomoteur|servomoteur]] · [[arduino-moteur-cc|moteur CC (pont en H)]] · [[arduino-moteur-pas-a-pas|moteur pas-à-pas]] ;
- [[arduino-afficheur|Afficheur LCD / OLED]] ;
- [[arduino-machine-a-etats|Machine à états sur Arduino]] *(→ notion [[machine-a-etats]])* ;
- [[arduino-eeprom|Stockage EEPROM]] ;
- [[arduino-filtrage|Filtrer des mesures]] *(optionnel)*.

### Niveau ingénieur

- [[arduino-programmation-non-bloquante|Programmation non bloquante]] ;
- [[arduino-interruptions|Interruptions]] ;
- [[arduino-deep-sleep|Deep sleep]] ;
- [[arduino-pid|Régulation PID]] — boucle de commande ;
- [[arduino-timers|Timers matériels]] ;
- [[arduino-memoire|Gestion mémoire]] — RAM, PROGMEM ;
- [[arduino-watchdog|Watchdog]] — robustesse du firmware.

Le multitâche (FreeRTOS) sera traité côté module ESP32 et dans [[firmware]]. D'autres tutos compléteront ces paliers au fil des projets.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — hub mère : panorama des familles et aide au choix
- [[esp32|ESP32]] — famille voisine, programmable via le même cadre Arduino ([[esp32-arduino-core]])
- [[firmware|Firmware]] — structuration du code embarqué (transverse)
- [[bus-de-communication|Bus de communication]] — UART / I2C / SPI
