---
title: MicroPython
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa: []
phases:
  - concept
draft: false
source_fr: embarque/mcu/micropython/micropython.md
source_sha256: ad53ba765fd061a45cd4691c93878e1d055afdb9c1aa966206d22b6f1b9b8203
---

**MicroPython** est une implémentation légère de **Python 3** qui tourne directement sur un microcontrôleur. Au lieu de compiler puis téléverser un binaire (comme en [[cpp-en|C++]]/[[arduino-en|Arduino]]), on installe **une fois** un *firmware* MicroPython sur la carte, qui exécute ensuite un **interpréteur Python** : on dialogue avec elle en direct au clavier (le [[micropython-repl-en|REPL]]) et on dépose des fichiers `.py` sur sa mémoire. C'est l'approche **scriptée** de l'embarqué — lisible et immédiate. Cette fiche est **le hub qui regroupe l'ensemble des tutoriels MicroPython**, organisés comme le module Arduino, de la première LED jusqu'au niveau ingénieur. La carte de référence de ce parcours est le **Raspberry Pi Pico 2**, mais MicroPython programme aussi bien d'autres cartes (voir plus bas). Le panorama des familles et l'aide au choix restent portés par [[microcontroleur-en|microcontrôleur]].

## Tutoriels

Les tutoriels du module MicroPython, **dans l'ordre conseillé**. Les items marqués *(transverse)* sont des fiches partagées du squelette, valables pour toutes les familles. Le reste est propre à MicroPython. Le **langage** y remplace la fiche C++ : MicroPython a son propre parcours de langage.

**Par où commencer ?** Par la [[micropython-prise-en-main-en|prise en main]] : installer Thonny, flasher le firmware et lancer un premier programme sur la carte. Le reste se suit dans l'ordre, ou se pioche au besoin du projet.

### Prendre en main

- [[micropython-prise-en-main-en|Prise en main de MicroPython]] — installer Thonny, flasher le firmware, écrire et lancer un premier programme ;
- [[micropython-simulation-en|Simuler avec Wokwi]] — tester un montage Pico + MicroPython en ligne, avant le matériel.

### Apprendre les bases

- [[micropython-langage-en|Le langage MicroPython]] — Python sur microcontrôleur : un **hub d'apprentissage** (types, contrôle, fonctions, modules) ;
- [[niveaux-de-tension-en|Niveaux de tension]] *(transverse)* — **3,3 V**, le Pico 2 n'est pas tolérant 5 V ;
- [[micropython-gpio-en|Configurer les GPIO]] — `machine.Pin`, modes entrée / sortie / tirage ;
- Communiquer : `print()` et le [[micropython-repl-en|REPL]] — l'équivalent du moniteur série (le shell interactif sert de console) ;
- [[micropython-entree-tor-en|Lire une entrée TOR]] — bouton/interrupteur + anti-rebond ;
- [[micropython-sortie-tor-en|Piloter une sortie TOR]] — LED, relais ;
- [[micropython-capteur-numerique-en|Lire un capteur numérique]] ;
- [[micropython-capteur-analogique-en|Lire un capteur analogique]] — via l'`ADC` ;
- [[micropython-sortie-pwm-en|Piloter une sortie PWM]] ;
- [[micropython-temporisation-en|Temporiser]] — `time.sleep()` vs `time.ticks_ms()` ;
- [[micropython-bibliotheques-en|Utiliser une bibliothèque]] — `import`, modules, installation via `mip` ;
- [[lire-une-datasheet-en|Lire une datasheet]] *(transverse)* — y trouver Vin, niveaux et courant max, au moment de câbler ;
- [[micropython-module-en|Câbler un module]] · [[micropython-shield-en|Utiliser un shield]] ;
- [[micropython-alimentation-en|Alimenter la carte]] — USB / VSYS, plage de tension, courant max.

### Notions avancées

- Communication, par protocole : [[micropython-uart-en|UART]] · [[micropython-i2c-en|I2C]] · [[micropython-spi-en|SPI]] *(notions transverses : [[bus-de-communication-en|bus de communication]])* ;
- [[micropython-debug-en|Débugger un programme]] ;
- [[micropython-gpio-boot-en|État des GPIO à l'allumage]] — niveaux par défaut, broches sensibles ;
- Actionneurs : [[micropython-servomoteur-en|servomoteur]] · [[micropython-moteur-cc-en|moteur CC (pont en H)]] · [[micropython-moteur-pas-a-pas-en|moteur pas-à-pas]] ;
- [[micropython-afficheur-en|Afficheur OLED]] ;
- [[micropython-programmation-non-bloquante-en|Programmation non bloquante]] — sortir du `sleep()` bloquant, prérequis de la machine à états ;
- [[micropython-machine-a-etats-en|Machine à états]] *(→ notion [[machine-a-etats-en|Machine à états]])* ;
- [[micropython-stockage-en|Stockage persistant]] — fichiers sur la flash, ou EEPROM externe.

### Niveau ingénieur

- [[micropython-interruptions-en|Interruptions]] *(→ notion [[interruption-en|Interruption]])* ;
- [[micropython-timers-en|Timers matériels]] *(→ notion [[timer-en|Timer]])* — `machine.Timer` ;
- [[manipulation-de-bits-en|Manipulation de bits]] *(transverse)* — registres, masques, accès bas niveau ;
- [[micropython-deep-sleep-en|Deep sleep]] *(→ notion [[deep-sleep-en|Deep sleep]])* — `machine.lightsleep` / `deepsleep` ;
- [[micropython-pid-en|Régulation PID]] — boucle de commande ;
- [[micropython-memoire-en|Gestion mémoire]] *(→ notion [[memoire-en|Mémoire]])* — RAM, ramasse-miettes (`gc`) ;
- [[micropython-watchdog-en|Watchdog]] — `machine.WDT`, robustesse du firmware.

D'autres tutos compléteront ces paliers au fil des projets. La structuration d'ensemble du code embarqué reste traitée dans [[firmware-en|firmware]].

## Pourquoi MicroPython ?

![Modèle d'exécution : approche compilée (C++/Arduino) vs approche scriptée (MicroPython)](/ressources/img/micropython/modele-execution.svg)

MicroPython occupe une **niche de lisibilité et d'itération rapide**, pas de performance brute. Ses atouts :

- **Python, lisible et connu** — beaucoup d'élèves arrivent avec des bases de Python, réinvesties directement sur le matériel ;
- **pas de compilation** — on modifie un fichier, on le relance, on voit le résultat, et le cycle d'essai est quasi instantané ;
- **le REPL** — un shell interactif tourne *sur la carte* : on teste une ligne (`Pin("LED", Pin.OUT).on()`) et le résultat est immédiat, idéal pour explorer un capteur ou un module ;
- **un code court** — typage dynamique, pas de déclarations verbeuses : un programme tient en quelques lignes.

En contrepartie, MicroPython est **plus lent et moins déterministe** que du C++ compilé (l'interpréteur ajoute un surcoût et le ramasse-miettes peut introduire des pauses), et offre **moins de mémoire utile**. C'est le bon choix pour **apprendre, prototyper, scripter** — moins pour du temps réel serré ou de la performance maximale, où l'on revient à l'[[arduino-en|Arduino]]/C++ ou au [[stm32-en|STM32]]. La décision se prend avec l'aide au choix du hub [[microcontroleur-en|microcontrôleur]].

## Panorama des cartes

La carte de référence ici est le **Raspberry Pi Pico 2**, mais le tableau rappelle l'essentiel de la gamme.

> [!info]
> Tableau **repère pédagogique**, à confirmer sur `raspberrypi.com` avant de figer un choix (références et disponibilités évoluent).

| Carte | Puce | Cœur | Particularité | 
| --- | --- | --- | --- |
| Pico 2 | RP2350 | 2× Cortex-M33 (ou 2× RISC-V), 150 MHz | la référence de ce module ; plus de RAM que le Pico 1 | 
| Pico 2 W | RP2350 | idem | ajoute le **Wi-Fi / Bluetooth** (puce CYW43) | 
| Pico / Pico W | RP2040 | 2× Cortex-M0+, 133 MHz | génération précédente, toujours répandue et compatible | 

Toutes se programment **de la même façon en MicroPython**. Le choix se fait sur le Wi-Fi (variante *W*) et la puissance (RP2350 vs RP2040). La carte expose un connecteur USB pour l'alimentation et la programmation, et une rangée de broches **GPIO en 3,3 V**.

## Écosystème

- **Le firmware MicroPython** — un fichier `.uf2` à installer une fois sur la carte (voir [[micropython-prise-en-main-en|prise en main]]). Après cela, la carte *est* un interpréteur Python.
- **Thonny** — l'IDE débutant de référence : il flashe le firmware, ouvre le REPL, et gère les fichiers `.py` sur la carte (dont `main.py`, lancé au démarrage).
- **Le REPL et le système de fichiers** — on tape des commandes en direct, et on enregistre ses programmes comme fichiers sur la carte. C'est le cœur du modèle MicroPython.
- **Les modules** — `machine` (accès au matériel : `Pin`, `ADC`, `PWM`, `I2C`…), `time`, `network` (sur les cartes Wi-Fi)… plus l'installation de bibliothèques via `mip` (voir [[micropython-bibliotheques-en|bibliothèques]]).

**MicroPython n'est pas lié au seul Pico** : le même langage et la même approche programment l'[[esp32-en|ESP32]], les cartes Pyboard, et plusieurs cartes Arduino récentes (Nano RP2040, Nano ESP32…). On ancre ce module sur le Pico 2 parce que c'est la carte utilisée en cours, mais le parcours se transpose. La façon de **structurer** le code embarqué relève de [[firmware-en|firmware]], indépendamment de la carte.

## Voir aussi

- [[microcontroleur-en|Microcontrôleur]] — hub mère : panorama des familles et aide au choix
- [[micropython-langage-en|Le langage MicroPython]] — le parcours d'apprentissage du langage
- [[arduino-en|Arduino]] — l'approche compilée (C++) ; même curriculum, paradigme opposé
- [[esp32-en|ESP32]] — une autre cible MicroPython courante (et Wi-Fi/BLE)
- [[firmware-en|Firmware]] — structuration du code embarqué (transverse)
- [[niveaux-de-tension-en|Niveaux de tension]] — la logique 3,3 V (Pico 2 non tolérant 5 V)
