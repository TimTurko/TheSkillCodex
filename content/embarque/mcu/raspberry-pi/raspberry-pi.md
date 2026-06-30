---
title: Raspberry Pi
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
  - systeme-d-exploitation
aa:
  - RA-EEE-C03-2/EEE/2
phases:
  - concept
draft: false
---

Le **Raspberry Pi** est un *ordinateur monocarte* (SBC, pour *single-board computer*) : une carte de la taille d'une carte bancaire qui fait tourner un [[systeme-d-exploitation|système d'exploitation]] complet — Linux — là où un [[microcontroleur|microcontrôleur]] exécute un programme « nu », directement sur le [[processeur|processeur]]. Ce n'est donc **pas** un microcontrôleur : c'est un vrai ordinateur miniature, avec ses ports USB, sa sortie vidéo, son réseau et son stockage. On le range pourtant ici, parmi les cibles de commande, parce qu'il rend les mêmes services en projet *quand le besoin dépasse le microcontrôleur*. Cette fiche est le **hub d'entrée** du module : elle pose le choix MCU vs SBC, puis renvoie aux tutoriels.

![Comparaison microcontrôleur (programme nu, temps réel, faible conso) et ordinateur monocarte SBC (système d'exploitation, calcul, réseau, plusieurs watts) — deux outils pour deux besoins.](/ressources/img/raspberry-pi/mcu-vs-sbc.svg)

## Microcontrôleur ou SBC ?

C'est la vraie question, et elle se tranche en [[concept|concept]], au même titre que les autres choix d'architecture — typiquement dans une [[matrice-de-decision|matrice de décision]] par sous-système. Le réflexe utile : **partir du besoin**, pas de la puissance disponible.

Un **microcontrôleur** gagne quand le projet demande :

- du **temps réel et du déterminisme** — une boucle d'asservissement, une commande moteur, une lecture cadencée à la microseconde près ;
- une **faible consommation** — un système sur batterie qui doit tenir des jours (modes veille en µA) ;
- un **démarrage instantané** — à la mise sous tension, le programme tourne en quelques millisecondes ;
- de la **simplicité et de la robustesse** — pas d'OS à corrompre, pas de carte SD à monter, un coût matériel très faible.

Un **SBC** comme le Raspberry Pi s'impose quand le projet demande :

- du **calcul lourd** — vision par ordinateur, traitement d'image, modèles d'apprentissage, calcul flottant intensif ;
- du **réseau et des services** — serveur web, base de données, communication Internet, API ;
- du **multitâche** — faire tourner plusieurs programmes en parallèle, sous l'arbitrage de l'OS ;
- un **écran, des fichiers, un écosystème logiciel complet** — toute la richesse d'un environnement Linux (Python, OpenCV, n'importe quelle bibliothèque).

Le prix de ces capacités : une **consommation de plusieurs watts** (impensable sur batterie pour tenir longtemps), un **démarrage lent** (l'OS met plusieurs dizaines de secondes à se lancer), une **carte SD** sensible à la corruption si on coupe l'alimentation brutalement, et **pas de garantie de temps réel** — l'ordonnanceur de l'OS peut suspendre le programme à tout instant (voir [[raspberry-pi-gpio|piloter les GPIO depuis Linux]]).

> [!tip]
> Très souvent, le bon choix n'est **pas** « l'un ou l'autre » mais **les deux** : un SBC pour le haut niveau (vision, planification, réseau) et un microcontrôleur pour le temps réel (moteurs), reliés par un [[bus-de-communication|bus]]. C'est l'**architecture bicéphale** détaillée dans [[raspberry-pi-projet|le SBC dans un projet]].

## Le Pico, lui, est un microcontrôleur

Attention au piège de nom. Le **Raspberry Pi Pico** (puces RP2040 / RP2350) porte la même marque, mais c'est un **vrai microcontrôleur**, pas un SBC : pas d'OS, un programme nu, faible consommation. Tout ce que dit cette fiche sur le SBC Linux **ne le concerne pas**. Le Pico est traité dans le module [[micropython|MicroPython]] (et reste programmable en C/C++). En clair : *Raspberry Pi 5 / 4 / Zero* → ici, cette fiche ; *Raspberry Pi Pico* → [[micropython|MicroPython]].

## Panorama des cartes

> [!info]
> Tableau **repère pédagogique**, à confirmer sur `raspberrypi.com` avant de figer un choix (gammes et disponibilités évoluent).

| Carte | Puce (SoC) | Cœur | RAM | Pour quoi |
| --- | --- | --- | --- | --- |
| Raspberry Pi 5 | BCM2712 | 4× Cortex-A76 ~2,4 GHz | 1–16 Go | le plus puissant ; vision, calcul, PCIe, deux ports caméra |
| Raspberry Pi 4 B | BCM2711 | 4× Cortex-A72 ~1,8 GHz | 1–8 Go | le cheval de bataille, très répandu et documenté |
| Raspberry Pi Zero 2 W | RP3A0 | 4× Cortex-A53 ~1 GHz | 512 Mo | minuscule, Wi-Fi/BT intégrés, conso modérée — l'embarqué contraint |
| Compute Module 4 / 5 | (idem Pi 4 / 5) | — | — | version « à intégrer » sur carte porteuse — projets industriels |

Toutes exposent une rangée de broches **GPIO en 3,3 V** (généralement 40 broches) et se programment de la même façon une fois l'OS installé. Le choix se fait sur la **puissance** (Pi 5 pour la vision, Zero 2 W pour l'embarqué compact) et l'**encombrement**.

> [!warning]
> Le **GPIO du Raspberry Pi fonctionne en 3,3 V et n'est pas tolérant 5 V**. Appliquer 5 V sur une broche d'entrée — un capteur alimenté en 5 V, un signal venu d'un Arduino — peut **détruire la broche, voire le SoC**. Pour un signal 5 V, il faut un adaptateur de niveau (voir [[niveaux-de-tension|niveaux de tension]]).

## Tutoriels

Le module suit un parcours **propre au SBC** — différent des familles de microcontrôleurs, parce qu'on apprend ici à se servir d'un ordinateur, pas à programmer une puce nue. Les items *(transverse)* sont des fiches partagées, valables au-delà du Raspberry Pi.

### Prendre en main

- [[raspberry-pi-prise-en-main|Prise en main du Raspberry Pi]] — installer Raspberry Pi OS, démarrer **sans écran** (headless) et s'y connecter en **SSH** ;
- [[systeme-d-exploitation|Système d'exploitation]] *(transverse)* — ce qu'un OS complet apporte, et ce qu'il coûte.

### Piloter le matériel

- [[raspberry-pi-gpio|Piloter les GPIO depuis Linux]] — `gpiozero` / `RPi.GPIO` / `lgpio`, lire un capteur, piloter un actionneur, et pourquoi le temps réel n'est pas garanti ;
- [[niveaux-de-tension|Niveaux de tension]] *(transverse)* — **3,3 V**, le GPIO du Pi n'est pas tolérant 5 V ;
- [[gpio|GPIO]] *(transverse)* — la notion d'entrée/sortie logique, indépendante de la carte.

### Mettre en œuvre dans un projet

- [[raspberry-pi-projet|Le SBC dans un projet mécatronique]] — l'architecture *cerveau haut niveau + microcontrôleur temps réel*, et les cas où le SBC suffit seul ;
- [[bus-de-communication|Bus de communication]] *(transverse)* — UART / I2C / SPI pour relier le SBC à un microcontrôleur.

La façon de **structurer** le code embarqué reste traitée dans [[firmware|firmware]] — étant entendu que, sous un OS, on dispose de moyens (processus, fils d'exécution, tâches) qu'un microcontrôleur nu n'a pas.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — hub mère : panorama des familles et aide au choix
- [[micropython|MicroPython]] — pour le Raspberry Pi **Pico** (microcontrôleur), à ne pas confondre avec le SBC
- [[systeme-d-exploitation|Système d'exploitation]] — la couche logicielle qui sépare un SBC d'un microcontrôleur
- [[matrice-de-decision|Matrice de décision]] — l'outil de choix de la cible, en concept
