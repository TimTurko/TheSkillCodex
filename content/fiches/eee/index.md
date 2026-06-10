---
title: Système embarqué
tags:
  - branche
  - trame
  - eee
prerequis: []
aa: []
draft: false
---

Tu réalises la partie **électronique et informatique** d'un projet mécatronique : la carte, ses capteurs, ses actionneurs, et le programme qui les pilote. Cette page est ton **point d'entrée**. Elle déroule la réalisation du sous-système embarqué en **sept étapes**, du besoin technique jusqu'à la validation au banc — et te dit, à chaque étape, **ce que tu dois produire** (le livrable) et **où trouver la méthode** pour y arriver.

Inutile de tout lire d'affilée : repère l'étape où tu en es, et suis les liens. Le fil rouge — un **bras robotisé 3 axes** — est le même projet que celui des phases du cycle en V, vu ici sous l'angle de son électronique. Deux regards, un seul projet.[^fusion]

> [!info] Cette colonne est orthogonale au cycle en V
> Le [[hub/index|cycle en V]] est la colonne **gestion de projet** : l'axe temporel (revues, jalons, équipe, livrables). La présente page est la colonne **ingénierie embarquée** : l'axe technique (du choix du matériel jusqu'à la mise au point). Les deux décrivent le **même projet** sous deux angles — ici le « comment réaliser », là le « quand décider et valider ». Tout le pilotage (revue, nomenclature, jalon) reste porté par les phases du V : chaque étape ci-dessous renvoie à la phase qui la cadre, sans la réécrire.

## Les sept étapes

1. [Cadrer le besoin embarqué](#1-cadrer-le-besoin-embarqué) — quelles fonctions techniques l'électronique et l'informatique doivent assurer
2. [Choisir le matériel](#2-choisir-le-matériel) — microcontrôleur ou ordinateur monocarte, famille, alimentation
3. [Concevoir l'électronique](#3-concevoir-lélectronique) — schéma, niveaux de tension, circuit imprimé, simulation
4. [Programmer](#4-programmer) — algorithme de commande, langage, périphériques, firmware
5. [Faire communiquer](#5-faire-communiquer) — bus filaires et liaisons sans fil *(si le besoin l'exige)*
6. [Fiabiliser et déboguer](#6-fiabiliser-et-déboguer) — temps réel, robustesse, instruments de mesure
7. [Intégrer et tester](#7-intégrer-et-tester) — assembler au reste du système, valider au banc

Chaque étape suppose la précédente sans interdire les allers-retours : tu reviendras souvent au matériel ou au schéma après un essai.

## 1. Cadrer le besoin embarqué

Avant de choisir une carte, formule **ce que l'électronique et l'informatique doivent faire** : quelles fonctions techniques portent les exigences du cahier des charges. C'est la traduction du besoin en fonctions réalisables, côté embarqué.

Pars de la décomposition fonctionnelle du système et isole les fonctions qui reviennent à l'élec/info : commander des actionneurs, acquérir des grandeurs, dialoguer, décider. Chacune devient une contrainte chiffrée — nombre d'entrées-sorties, résolution, cadence, latence — qui guidera tous les choix suivants.

- [[decomposition-fonctionnelle|Décomposition fonctionnelle]] — découper le système en fonctions
- [[chaine-energie|Chaîne d'énergie et d'information]] — repérer ce qui relève de la commande et de la mesure

*Côté cycle en V : ce cadrage s'inscrit dans la phase [[concept|concept]], qui arbitre l'architecture et en porte le livrable.*

> [!livrable] Livrable 1/7 — [[schema-bloc-fonctionnel|Les fonctions embarquées, définies et chiffrées]]
> Le **schéma bloc fonctionnel** du sous-système et son tableau « fonction → exigence embarquée ». Rendu papier — c'est le contrat d'entrée de toutes les étapes suivantes.

## 2. Choisir le matériel

La question : **quel matériel exécute le mieux les fonctions de l'étape 1 ?** Des capteurs et des actionneurs d'abord, puis la carte : microcontrôleur (réactif, temps réel, peu coûteux) ou ordinateur monocarte (puissant, sous Linux) ? Quelle famille ? Et comment alimenter l'ensemble ?

Le panorama des familles et l'aide au choix sont portés par le hub microcontrôleur — ne le réécris pas : va le consulter, et reviens avec une carte candidate. Pense l'alimentation dès ce stade : c'est elle qui conditionne l'autonomie et la stabilité.

- [[microcontroleur|Microcontrôleur]] — panorama des familles, microcontrôleur contre monocarte, aide au choix
- Familles : [[arduino|Arduino]], [[esp32|ESP32]], [[esp8266|ESP8266]], [[stm32|STM32]], [[teensy|Teensy]], [[pic|PIC]]
- [[raspberry-pi|Raspberry Pi]] — l'option ordinateur monocarte, et l'architecture à deux cerveaux
- [[lire-une-datasheet|Lire une datasheet]] — comparer des composants sur pièces
- [[alimentation-electronique|Concevoir une alimentation]] — source, régulation, autonomie

*Côté cycle en V : le choix d'architecture matérielle est arbitré en phase [[concept|concept]].*

> [!livrable] Livrable 2/7 — [[choisir-le-materiel|Le matériel retenu : carte, capteurs, actionneurs]]
> Une matrice de choix tranchée et le budget d'alimentation. Rendu papier (la note de choix) ; la commande du matériel suit.

## 3. Concevoir l'électronique

La carte choisie ne suffit pas : il faut **dessiner le circuit autour d'elle** — relier capteurs et actionneurs, adapter les niveaux de tension, distribuer l'énergie, protéger les entrées. Puis vérifier le comportement avant de souder quoi que ce soit.

Lis et produis le schéma de principe, traque les incompatibilités de tension (un capteur 5 V sur une entrée 3,3 V détruit l'entrée), et simule les parties incertaines. Le passage au circuit imprimé vient quand le schéma est stabilisé.

- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — lire et produire un schéma de principe
- [[niveaux-de-tension|Niveaux de tension]] — 3,3 V / 5 V, compatibilité et adaptation
- [[simulation-electronique|Simulation électronique]] — calculer le comportement avant de câbler
- [[pcb|Circuit imprimé]] — du schéma à la carte fabricable, avec [[kicad|KiCad]]

*Côté cycle en V : ces livrables nourrissent le [[dossier-technique|dossier technique]] (schémas, routage, simulations).*

> [!livrable] Livrable 3/7 — [[concevoir-l-electronique|Le schéma électronique validé]]
> Le schéma de principe vérifié et la simulation des parties incertaines (preuve de concept simulée). Rendu papier + simulation ; le circuit imprimé en est la version fabricable.

## 4. Programmer

Deux temps : **concevoir l'algorithme** de commande (la logique, indépendante du code), puis **l'écrire** pour la carte. La logique se raconte d'abord en français, puis se décrit avec un logigramme, une machine à états ou un GRAFCET ; le code l'implémente en pilotant les périphériques — entrées-sorties, convertisseur analogique-numérique, sorties PWM.

Choisis d'abord la forme d'algorithme adaptée à ton problème, puis le langage selon la famille — C++ dans l'écosystème Arduino, MicroPython, ou l'environnement constructeur de ta famille. Le firmware est l'organisation d'ensemble du programme embarqué.

- Concevoir la logique : [[algorithme|algorithme]] — [[logigramme|logigramme]], [[machine-a-etats|machine à états]], [[grafcet|GRAFCET]], [[chronogramme|chronogramme]]
- Langage : [[cpp|C++]] (écosystème Arduino) ou [[micropython-langage|MicroPython]]
- Périphériques : [[gpio|GPIO]], [[adc|convertisseur analogique-numérique]], [[pwm|sortie PWM]], [[manipulation-de-bits|manipulation de bits]]
- [[firmware|Firmware]] — structurer l'ensemble du programme embarqué

*Côté cycle en V : l'algorithme et le code sont des livrables du [[dossier-technique|dossier technique]].*

> [!livrable] Livrable 4/7 — [[programmer-l-embarque|Algorithme et documentation]]
> L'algorithme de commande (logigramme ou machine à états) et son implémentation, qui compile et tourne sur la carte. Un algorithme + du code.

## 5. Faire communiquer

Cette étape ne concerne que les projets dont le **cahier des charges exige de dialoguer** — piloter à distance, superviser, transmettre des mesures. Si c'est ton cas, choisis **comment les composants dialoguent** : un bus filaire entre puces d'une même carte, une liaison sans fil ou câblée vers l'extérieur. Chaque liaison a ses contraintes — nombre de fils, débit, distance, nombre de participants.

Choisis le bus selon le besoin : I²C pour relier plusieurs capteurs avec deux fils, SPI pour la vitesse, UART pour une liaison simple ; Wi-Fi ou BLE pour le sans-fil.

- [[bus-de-communication|Bus de communication]] — [[uart|UART]], [[i2c|I²C]], [[spi|SPI]]
- [[techno-sans-fil|Technologies sans fil]] — [[wifi|Wi-Fi]], [[ble|BLE]], [[zigbee|Zigbee]], [[lora|LoRa]]

*Côté cycle en V : les choix de communication figurent au [[dossier-technique|dossier technique]].*

> [!livrable] Livrable 5/7 — [[faire-communiquer|Choix des technologies de communication (si le cahier des charges l'exige)]]
> La répartition des échanges (bus internes, liaison sans fil) et une liaison éprouvée de bout en bout — typiquement une preuve de concept sur breadboard.

## 6. Fiabiliser et déboguer

Un montage qui marche au premier essai n'est pas fiable pour autant. Cette étape **durcit le système** : garantir le temps réel (interruptions, temporisateurs), survivre aux blocages (chien de garde), économiser l'énergie (veille), et surtout **trouver les bugs** avec les bons instruments.

Mobilise les notions transverses de temps réel et de robustesse, puis les fiches du palier ingénieur de ta famille (chien de garde, PID, système temps réel…). Pour déboguer, l'oscilloscope et le multimètre voient ce que le code ne dit pas.

- Temps réel et robustesse : [[interruption|interruptions]], [[timer|temporisateurs]], [[deep-sleep|veille]], [[memoire|gestion mémoire]]
- [[instruments-de-mesure|Instruments de mesure]] — [[multimetre|multimètre]], [[oscilloscope|oscilloscope]]
- [[debugger-embarque|Déboguer un système embarqué]] — méthode pour traquer un bug
- Le palier ingénieur de ta famille : [[arduino|Arduino]], [[esp32|ESP32]], [[stm32|STM32]]…

*Côté cycle en V : la robustesse se prépare dès la [[preuve-de-concept|preuve de concept]] et se consolide au [[dossier-technique|dossier technique]].*

> [!livrable] Livrable 6/7 — [[fiabiliser-et-deboguer|Protocole de tests et débogage]]
> Le protocole de tests dérivé du cahier des charges (chaque exigence validée seule, puis en simultané), les parades aux risques techniques en place (temps réel, chien de garde, veille) et la trace des bugs traités. Système robuste + journal de débogage.

## 7. Intégrer et tester

Le sous-système embarqué rejoint enfin **le reste du projet** — la mécanique, l'opérateur — et tu **vérifies au banc** que chaque fonction de l'étape 1 est tenue. C'est le moment de vérité : la spécification est-elle satisfaite ?

Le déroulé de l'intégration et de la qualification — pyramide de tests, plan de validation, écarts — est porté par la phase d'intégration du cycle en V. Ne le redécris pas : exécute-le sur ton sous-système.

- [[integration-et-tests|Intégration et tests]] — assembler, qualifier, conclure (phase du V)

*Côté cycle en V : cette étape est la phase [[integration-et-tests|intégration et tests]] elle-même, vue côté embarqué.*

> [!livrable] Livrable 7/7 — [[integration-et-tests|Produit fini]]
> Chaque fonction de l'étape 1 testée, mesurée, validée ou tracée en écart. Sous-système assemblé + dossier de recette. C'est la phase d'intégration du V, exécutée sur l'embarqué.

## Le management, c'est le cycle en V

Cette colonne décrit l'ingénierie ; elle ne pilote pas le projet. Les revues, les jalons, la nomenclature, le suivi d'équipe et la validation des livrables sont décrits par la branche [[hub/index|Conduite de projet]] :

- **Cadrer** (étapes 1-2) se décide en phase [[concept|concept]].
- **Concevoir, programmer, communiquer, fiabiliser** (étapes 3-6) alimentent le [[dossier-technique|dossier technique]].
- **Intégrer et tester** (étape 7) est la phase [[integration-et-tests|intégration et tests]].

Si une fiche te demande de produire un planning, une revue ou une analyse de risques projet, c'est que tu touches au pilotage : suis le lien vers le cycle en V.

[^fusion]: La branche réunit les anciens domaines EEE et MIA, fusionnés en 2026.
