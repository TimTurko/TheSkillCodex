---
title: STM32
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

Les **STM32** sont une vaste famille de microcontrôleurs 32 bits du fabricant **STMicroelectronics**, bâtis sur des cœurs **ARM Cortex-M** (du M0+ économe au M7 haute performance) et réputés pour la richesse de leurs périphériques et leur outillage de développement de qualité professionnelle. Ils se programment de **deux façons** : avec le **cadre Arduino** (via [[stm32-arduino-core|STM32duino]]), pour réutiliser tout ce qu'on sait déjà de l'[[arduino|Arduino]], ou avec l'**outillage natif de ST** (STM32CubeIDE + CubeMX + HAL/LL), qui ouvre le vrai travail d'ingénieur embarqué (*configurer* un microcontrôleur, et pas seulement écrire son code). Cette fiche est **le hub qui regroupe les tutoriels liés au STM32** : pourquoi cette famille, son panorama, son écosystème, et les tutoriels classés par difficulté. Le panorama général des familles de microcontrôleurs et l'aide au choix restent portés par [[microcontroleur|microcontrôleur]].

## Pourquoi STM32 ?

Là où l'Arduino vise l'accessibilité et l'[[esp32|ESP32]] la connectivité, le STM32 vise la **maturité industrielle** et l'**étendue de gamme** :

- **le standard de l'embarqué pro** — c'est la famille qu'on rencontre en stage et en entreprise, et en maîtriser l'outillage est un acquis qui se transfère bien au-delà du projet école ;
- **une gamme immense** — d'un Cortex-M0+ minimaliste jusqu'à un Cortex-M7 à 480 MHz, on reste dans le même écosystème et le même outillage en changeant simplement de puce ;
- **des périphériques riches et fins** — timers très complets, plusieurs [[adc|ADC]] rapides, [[pwm|PWM]] avancée, nombreux bus, modes basse consommation soignés ;
- **un débogage matériel intégré** — sur une carte Nucleo, le ST-LINK embarqué permet d'exécuter le code **au pas**, de poser des points d'arrêt et d'inspecter les variables, sans matériel supplémentaire (voir [[debugger-embarque|déboguer un système embarqué]]).

En contrepartie, le STM32 est **moins indulgent que l'Arduino** : la gamme est foisonnante (choisir une puce demande un minimum de méthode), l'outillage natif est plus lourd, et la documentation suppose qu'on lise une datasheet. C'est le choix qui se justifie quand on veut **comprendre le matériel en profondeur** ou viser de la **performance**. Pour un premier contact avec l'embarqué, l'Arduino reste plus doux. La décision se tranche avec l'aide au choix du hub [[microcontroleur|microcontrôleur]].

## Panorama des familles

La gamme STM32 compte une vingtaine de lignes, dont quelques-unes couvrent l'essentiel des besoins d'un projet école. Le **cœur Cortex-M** est le bon repère pour s'orienter : il fixe la classe de performance, le reste est affaire de périphériques.

> [!info]
> Le tableau ci-dessous est un **repère pédagogique**, à confirmer sur le sélecteur officiel de ST (*ST product selector*) avant de figer un choix : les références exactes, fréquences et options évoluent.

| Ligne | Cœur | Positionnement | Exemple de puce |
| --- | --- | --- | --- |
| STM32C0 / F0 / G0 | Cortex-M0 / M0+ | entrée de gamme, remplace le 8 bits | STM32G031, STM32C011 |
| STM32F1 | Cortex-M3 | le « classique », très répandu en communauté (*Blue Pill*) | STM32F103 |
| STM32F4 / F3 | Cortex-M4 (avec FPU) | mainstream performant ; F3 riche en analogique | STM32F411 (*Black Pill*), STM32F303 |
| STM32G4 | Cortex-M4 | mixte numérique/analogique, contrôle moteur et électronique de puissance | STM32G431 |
| STM32F7 / H7 | Cortex-M7 (jusqu'à 480 MHz, parfois bi-cœur M7+M4) | haute performance, IHM, traitement de signal | STM32H743 |
| STM32L0 / L4 / U5 | Cortex-M0+ / M4 / M33 | ultra-basse consommation, objets sur batterie | STM32L476, STM32U575 |
| STM32WB / WL | Cortex-M4 (+ M0+) | sans-fil intégré : WB = BLE/Zigbee/Thread, WL = LoRa/sub-GHz | STM32WB55, STM32WL55 |

Tendance de fond : les lignes récentes ajoutent de la **sécurité matérielle** (TrustZone sur Cortex-M33 : L5, U5, H5) et de la **connectivité intégrée** (WBA), et les toutes dernières embarquent de l'**accélération IA** (série N6 sur Cortex-M55). Pour un projet école, un Nucleo à base de F4 ou de G4 couvre l'immense majorité des besoins.

On rencontre ces puces sur trois types de cartes. Les **Nucleo** sont les cartes officielles d'évaluation : connecteurs compatibles Arduino *plus* connecteurs ST Morpho, et surtout **débogueur ST-LINK embarqué**. C'est le **point d'entrée recommandé** pour débuter. Les **Discovery** sont des cartes vitrines d'une puce, souvent enrichies (écran, capteurs, audio). Côté communauté, la *Blue Pill* (STM32F103) est très répandue mais **sans débogueur embarqué** (il faut un ST-LINK externe) et avec des puces parfois clonées. La *Black Pill* (STM32F411, USB-C) est une alternative plus récente et plus saine.

## Écosystème

Deux chemins de programmation coexistent, et ce sont les **deux portes** d'entrée du STM32.

- **STM32duino (Arduino-core)** — la **même API que l'Arduino** (`setup()`, `loop()`, `digitalWrite`…), installée dans l'[[ide|IDE]] Arduino. C'est la **porte de continuité** : on réutilise tout le squelette Arduino en changeant simplement de carte. Détaillé dans [[stm32-arduino-core|programmer avec l'Arduino-core]].
- **STM32CubeIDE + CubeMX + HAL/LL** — l'**outillage natif de ST**, gratuit et tout-en-un. On configure le microcontrôleur **graphiquement** ([[stm32-cubemx|CubeMX]] : brochage, arbre d'horloge, périphériques), le code d'initialisation est **généré** ([[stm32-hal|HAL ou LL]]), et l'on peut **descendre au registre** ([[stm32-registres|CMSIS]]) là où la performance l'exige. C'est la **porte du métier**, et le vrai apport du STM32 dans le parcours.

Ces deux portes ne s'excluent pas : depuis un sketch STM32duino, on peut appeler des fonctions HAL, et inversement. **PlatformIO** (extension VS Code) gère les deux mondes et facilite le versionnage Git. Keil MDK et IAR EWARM existent aussi (environnements commerciaux), mais CubeIDE suffit largement en contexte école.

![Les couches d'abstraction sur STM32, empilées du plus abstrait au plus proche du matériel : STM32duino (API Arduino), HAL (API portable de ST, le défaut généré), LL (couche bas niveau proche du registre), puis les registres CMSIS qui pilotent le silicium. CubeMX génère le code des couches HAL et LL. On monte pour la portabilité et la rapidité d'écriture, on descend pour le contrôle et la performance.|640](/ressources/img/stm32/abstraction-couches.svg)

La façon de **structurer** le code (boucle, tâches, états, RTOS) relève de [[firmware|firmware]], indépendamment de la porte choisie.

## Attention à la tension

> [!warning]
> **Le STM32 fonctionne en logique 3,3 V.** Beaucoup de ses broches **tolèrent le 5 V** (repérées *FT*, pour *five-volt tolerant*, dans la datasheet), mais **pas toutes** : les broches analogiques et certaines broches d'alimentation ne l'admettent pas, et y appliquer 5 V peut **détruire l'entrée**. En venant de l'Arduino (tolérant 5 V partout), ne pas généraliser : vérifier la mention *FT* broche par broche dans la datasheet. Voir [[niveaux-de-tension|niveaux de tension]] et [[lire-une-datasheet|lire une datasheet]].

## Tutoriels

Les tutoriels du module STM32, classés par difficulté croissante. Comme pour l'Arduino et l'ESP32, les items marqués *(transverse)* sont des fiches partagées du squelette (valables pour toutes les familles), le reste est propre au STM32.

### Prendre en main

- [[stm32-prise-en-main|Prise en main du STM32]] — installer CubeIDE, créer un projet pour sa Nucleo, flasher un premier blink via le ST-LINK ;
- [[lire-une-datasheet|Lire une datasheet]] *(transverse)* — brochage, broches *FT*, courant max.

### Apprendre les bases

- [[cpp|Le langage C++]] *(transverse)* — bases du langage ;
- [[niveaux-de-tension|Niveaux de tension]] *(transverse)* — **3,3 V**, broches tolérantes 5 V (*FT*) ;
- [[gpio|Les GPIO]] *(transverse)* — le concept d'entrée/sortie (mise en œuvre STM32 par l'une des deux portes) ;
- [[stm32-arduino-core|Programmer avec l'Arduino-core]] — la **porte de continuité** : réutiliser le squelette Arduino sur STM32.

### Notions avancées

- Communication : [[bus-de-communication|UART / I2C / SPI]] *(transverse)* ;
- [[debugger-embarque|Déboguer]] *(transverse)* — au pas, via le ST-LINK intégré, un vrai atout du STM32 ;
- [[interruption|Interruptions]] *(transverse)* · [[timer|Timers]] *(transverse)* — événements et temps matériel, sur des périphériques particulièrement riches chez STM32.

### Niveau ingénieur

La **porte du métier** — l'apport distinctif du STM32, le passage de « écrire du code » à « configurer un microcontrôleur ».

- [[stm32-cubemx|Configurer avec CubeMX]] — brochage, arbre d'horloge, initialisation des périphériques, génération de code ;
- [[stm32-hal|Programmer avec la HAL]] — l'API générée, ses trois modes (scrutation / interruption / DMA), et la distinction HAL / LL ;
- [[stm32-registres|Descendre au registre]] *(→ notion [[manipulation-de-bits]])* — accès bas niveau via CMSIS, quand la performance ou la finesse l'exige ;
- [[firmware|Firmware]] *(transverse)* — structurer le code, du super-loop au RTOS.

D'autres tutos compléteront ces paliers au fil des projets.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — hub mère : panorama des familles et aide au choix
- [[arduino|Arduino]] — famille voisine, programmable via le même cadre ([[stm32-arduino-core]])
- [[esp32|ESP32]] — famille voisine, également programmable via l'Arduino-core
- [[firmware|Firmware]] — structuration du code embarqué, du super-loop au RTOS (transverse)
- [[niveaux-de-tension|Niveaux de tension]] — la logique 3,3 V et les broches tolérantes 5 V
- [[debugger-embarque|Déboguer]] — exploiter le ST-LINK intégré des cartes Nucleo
