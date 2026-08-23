---
title: I2C
type: notion
tags:
  - eee
  - notion
prerequis:
  - bus-de-communication
aa: []
phases: []
draft: false
---

L'**I2C** (*Inter-Integrated Circuit*) est un [[bus-de-communication|bus de communication]] **synchrone** à deux fils : **SDA** (les données) et **SCL** (l'horloge), partagés par tous les composants. Un composant **maître** cadence les échanges. Chaque composant **esclave** répond à une **adresse** unique, ce qui permet d'en brancher plusieurs sur les deux mêmes fils.

![Branchement I2C : un maître et deux esclaves suspendus aux deux mêmes fils SDA et SCL, deux résistances de tirage d'environ 4,7 kΩ vers Vcc, masses GND reliées.](/ressources/img/i2c/branchement.svg)

## Comment ça marche ?

Les deux lignes fonctionnent en **[[gpio|collecteur ou drain ouvert]]** : aucun composant ne pousse activement la ligne à l'état haut, chacun ne fait que la **tirer vers le bas**. Une résistance de **tirage** (*pull-up*, typiquement ≈ 4,7 kΩ) ramène la ligne à l'état haut au repos. C'est ce qui rend l'I2C particulier vis-à-vis des [[niveaux-de-tension|niveaux de tension]] : la tension de la ligne est fixée par le tirage, si bien qu'un composant 3,3 V et un composant 5 V peuvent parfois cohabiter sur un même bus selon la tension de tirage choisie. Ce tirage tient lieu de conditionnement de ligne. Il n'y a pas d'autre terminaison à prévoir.

Le débit est modéré et la portée courte (l'échelle de la carte). En échange, l'adressage permet d'aligner de nombreux capteurs, écrans ou horloges temps réel sur seulement deux fils. **Combien, au maximum ?** L'adressage sur 7 bits offre en théorie une bonne centaine d'adresses. En pratique, c'est la **capacité électrique du bus** qui plafonne bien avant. Au-delà d'une dizaine de composants ou de quelques dizaines de centimètres de fil, les fronts se dégradent et le bus devient instable.

## Sur le fil

![Chronogramme I2C simplifié : le maître cadence SCL en impulsions régulières ; sur SDA, condition START, adresse sur 7 bits, bit lecture/écriture, acquittement ACK de l'esclave, puis condition STOP.](/ressources/img/i2c/chronogramme.svg)

Le maître ouvre par une condition **START** (SDA descend pendant que SCL est haut), envoie l'**adresse** sur 7 bits suivie du bit lecture/écriture, et l'esclave visé répond par un bit d'**acquittement** (ACK). C'est ainsi qu'on sait qu'il est bien là. Les octets de données suivent le même motif (8 bits + ACK), jusqu'à la condition **STOP**. L'horloge SCL, elle, est tenue par le maître du début à la fin. La mise en œuvre est traitée dans [[arduino-i2c]] côté Arduino, [[esp32-i2c]] côté ESP32 et [[micropython-i2c]] côté MicroPython.

## Pièges

**Oublier les résistances de tirage.** Sans pull-up, les lignes ne remontent jamais à l'état haut et le bus reste muet. Beaucoup de modules les embarquent déjà, mais pas tous.

**Collision d'adresses.** Deux composants à la même adresse sur le bus se rendent mutuellement inaccessibles. L'adresse se vérifie sur la [[lire-une-datasheet|datasheet]], et certains composants offrent quelques broches pour la modifier.

## Voir aussi

- [[bus-de-communication|Bus de communication]] — hub : situer l'I2C face à l'UART et au SPI
- [[arduino-i2c|I2C sur Arduino]] · [[esp32-i2c|I2C sur ESP32]] · [[micropython-i2c|I2C en MicroPython]] — la mise en œuvre par famille
- [[spi|SPI]] — alternative synchrone plus rapide, mais un fil de sélection par composant
- [[uart|UART]] — alternative asynchrone, point-à-point
- [[niveaux-de-tension|Niveaux de tension]] — cas particulier open-drain et tirage sur le bus I2C
