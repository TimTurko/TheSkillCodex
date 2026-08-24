---
title: Firmware
type: notion
phases:
  - preuve-de-concept
tags:
  - eee
  - notion
prerequis:
  - cpp
aa: [RA-PROJET-C03-3/PROJ/5]
draft: false
---

Le **firmware** est le programme embarqué qui s'exécute sur le microcontrôleur : le code qui, une fois téléversé, *est* le comportement du système. Cette fiche ne porte ni sur un langage ni sur une carte précise, mais sur la **façon de structurer** ce code pour qu'il reste lisible, fiable et évolutif : de la simple boucle d'un premier montage jusqu'à l'architecture d'un système temps réel. Les techniques concrètes (boucle non bloquante, machines à états, RTOS) ont chacune leur fiche. Ici, on situe l'ensemble et on choisit l'architecture adaptée au besoin.

## À quoi ça sert ?

Le firmware n'est pas un logiciel comme celui d'un PC. Il tourne **sans [[systeme-d-exploitation|système d'exploitation]]** (le plus souvent), sur des **ressources comptées** ([[memoire|mémoire]], puissance), en **boucle sans fin**, et il doit être **robuste** : un blocage sur le terrain, sans clavier ni écran pour intervenir, c'est un système mort.

L'enjeu n'est pas d'« écrire du code » (ça, c'est le [[cpp|langage]]), mais de l'**organiser**. Un premier sketch tient en quelques lignes dans `loop()`. Un système réel cumule des dizaines de fonctions, plusieurs activités menées de front, de la gestion d'erreurs. Sans structure, le code devient vite un « plat de spaghetti » qu'on n'ose plus toucher. Bien structurer le firmware, c'est choisir, **selon la complexité du système**, l'architecture qui le gardera maîtrisable.

## Comment structurer un firmware

Il existe une **progression** d'architectures, de la plus simple à la plus exigeante. On adopte le niveau juste nécessaire : on ne monte en architecture que quand le besoin l'impose.

![Escalier des cinq architectures de firmware, classées par complexité croissante : super-loop, boucle coopérative non bloquante, machines à états, découpage en modules, RTOS temps réel.](/ressources/img/firmware/architectures.svg)

1. **La super-loop.** `setup()` règle, `loop()` répète : tout le programme dans la boucle. Suffisant pour un montage qui fait *une* chose. C'est le point de départ ([[cpp|langage C++]]).
2. **La boucle coopérative non bloquante.** Dès que le système fait *plus d'une chose*, chaque activité devient une tâche brève appelée à chaque tour, sans jamais bloquer. C'est l'architecture par défaut de presque tout firmware réel ([[programmation-non-bloquante|programmation non bloquante]]).
3. **Les machines à états.** Pour un comportement à **modes** (attente → en cours → terminé), on modélise chaque tâche comme une [[machine-a-etats|machine à états]] : c'est lisible et ça évite les cascades de drapeaux.
4. **Le découpage en modules.** On sépare le code par **responsabilité** — acquisition capteurs, commande, communication — en [[fonction-informatique|fonctions]] et fichiers nommés. Chaque module se teste et se relit isolément.
5. **Le système temps réel (RTOS).** Quand certaines tâches ont des **échéances strictes** à tenir quoi qu'il arrive, un RTOS (comme [[esp32-freertos|FreeRTOS]]) **préempte** pour garantir les priorités. Puissant mais lourd : à réserver aux cas qui l'exigent, surtout côté [[esp32|ESP32]].

Cette échelle est le cœur du métier : la majorité des projets école vivent très bien aux niveaux 2 à 4, le RTOS restant un horizon.

## Le firmware selon la famille

La **façon de structurer** ci-dessus est la même partout. Ce qui change d'une famille de microcontrôleurs à l'autre, c'est l'**outillage** et l'**API** :

- **Arduino** (AVR / ARM) — API *Wiring*, super-loop, [[ide|IDE]] Arduino : l'entrée la plus douce ([[arduino|hub Arduino]]).
- **ESP32** — soit l'**Arduino-core** (même API que l'Arduino, migration immédiate), soit l'**ESP-IDF**, le cadre natif d'Espressif bâti sur FreeRTOS ([[esp32|hub ESP32]]).
- **STM32** — la bibliothèque HAL générée par CubeMX pour un contrôle fin, ou l'Arduino-core (STM32duino) pour rester en terrain connu ([[stm32|hub STM32]]).
- **MicroPython** — langage **interprété** et REPL : l'outillage change du tout au tout, mais les architectures sont les mêmes, `while True` tenant lieu de super-loop, le non-bloquant et les machines à états ayant leurs jumeaux ([[micropython|hub MicroPython]]).

La leçon transverse : **les concepts d'architecture ne dépendent pas de la carte**. Seuls l'environnement de développement et le nom des fonctions changent. Apprendre à structurer un firmware une fois sert sur toutes les familles. Les spécificités d'outillage sont traitées dans le hub de chaque famille.

## Pièges

**Tout empiler dans `loop()`.** Le réflexe du début : ajouter ligne après ligne dans la boucle jusqu'au plat de spaghetti. Découper en fonctions et en tâches dès que ça dépasse une activité.

**Des `delay()` partout.** Chaque `delay()` fige tout le système. Incompatible avec un firmware qui fait plusieurs choses. Passer au non bloquant.

**Aucune gestion de l'imprévu.** Pas de valeur par défaut, pas de [[chien-de-garde|chien de garde]] : à la première anomalie de terrain, le système se fige sans repartir. La robustesse se conçoit, elle ne s'ajoute pas après coup.

**Sur-architecturer trop tôt.** Monter un RTOS pour clignoter deux LED ajoute de la complexité sans bénéfice. L'architecture suit le besoin, elle ne le précède pas.

**Ne pas versionner le firmware.** Le code évolue à chaque essai. Sans Git, on perd la trace de la version qui *marchait*. Le versionnage fait partie de la discipline firmware, pas du confort.

## Voir aussi

- [[cpp|Le langage C++]] — écrire le code, là où le firmware consiste à l'organiser
- [[programmation-non-bloquante|Programmation non bloquante]] — la boucle coopérative, architecture par défaut
- [[machine-a-etats|Machine à états]] — structurer un comportement à modes
- [[fonction-informatique|Fonction]] — l'unité de découpage en modules
- [[esp32|ESP32]] — Arduino-core vs ESP-IDF, et l'horizon FreeRTOS
- [[arduino|Arduino]] — la super-loop et l'API Wiring
- [[stm32|STM32]] — HAL générée par CubeMX ou Arduino-core
- [[micropython|MicroPython]] — mêmes architectures, outillage interprété
- [[chien-de-garde|Chien de garde]] — la robustesse face aux blocages
- [[debugger-embarque|Déboguer un système embarqué]] — traquer un bug dans le firmware (messages ou débogage matériel)
