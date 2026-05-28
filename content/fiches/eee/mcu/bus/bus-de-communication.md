---
title: Bus de communication
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
aa:
  - RA-EEE-C03-2/EEE/4
phases:
  - concept
  - dossier-technique
draft: false
---

Un **bus de communication** est un ensemble de lignes et de règles qui permet à deux composants numériques d'échanger des données — typiquement un [[microcontroleur|microcontrôleur]] et ses capteurs, mémoires ou écrans. Cette fiche est le **hub d'entrée** vers les trois protocoles les plus courants en projet : l'[[uart|UART]], l'[[i2c|I2C]] et le [[spi|SPI]]. Elle les situe les uns par rapport aux autres et donne la méthode pour choisir, sans détailler chacun (c'est le rôle des fiches filles).

![Trois topologies de bus. UART : liaison point-à-point sur deux fils croisés (TX vers RX). I2C : deux fils partagés (SDA, SCL) reliant un maître à plusieurs esclaves adressés, avec résistances de tirage. SPI : trois fils partagés (MOSI, MISO, SCK) plus une ligne de sélection CS dédiée par esclave.](/ressources/img/bus-de-communication-topologies.svg)

## À quoi ça sert ?

Un microcontrôleur travaille rarement seul : il lit des capteurs, écrit sur un écran, stocke sur une carte mémoire, parfois dialogue avec un autre contrôleur. Plutôt qu'un fil dédié par information, un bus **standardise** la façon dont les données circulent sur quelques fils — ce qui économise des broches et rend les composants interchangeables.

Choisir un bus, c'est arbitrer entre plusieurs paramètres :

- le **nombre de fils** mobilisés, donc de broches occupées sur le contrôleur ;
- le **débit** atteignable ;
- la **distance** sur laquelle la liaison reste fiable ;
- le **nombre de composants** qu'on peut brancher sur les mêmes fils ;
- la **complexité** de mise en œuvre, côté câblage et côté code.

Ce choix se fait en phase de [[concept|concept]] (au moment de définir l'architecture) et se fige en [[dossier-technique|dossier technique]] (au câblage et au routage).

## Comment choisir un bus ?

Quatre distinctions structurent le paysage. Un bus est **série** (les bits passent l'un après l'autre, sur peu de fils — le cas en embarqué) ou parallèle. Il est **synchrone** quand une ligne d'**horloge** cadence les échanges, **asynchrone** quand les deux côtés doivent s'accorder à l'avance sur un débit. Il est **point-à-point** (deux composants seulement) ou **multi-nœuds** (plusieurs composants sur les mêmes fils). Enfin, il échange dans un seul sens à la fois ou en **full-duplex** (les deux sens simultanément).

Les trois protocoles courants se rangent ainsi :

| Protocole | Fils | Horloge | Composants | Débit | Distance | Usage typique |
| --- | --- | --- | --- | --- | --- | --- |
| [[uart\|UART]] | 2 (TX/RX) | non (asynchrone) | 2 (point-à-point) | modéré | quelques mètres | console de debug, GPS, modules série |
| [[i2c\|I2C]] | 2 (SDA/SCL) | oui (synchrone) | plusieurs (adresses) | modéré | sur la carte (< 1 m) | capteurs, écrans, horloge temps réel |
| [[spi\|SPI]] | 4 (MOSI/MISO/SCK/CS) | oui (synchrone) | plusieurs (1 CS par esclave) | élevé | très court | écran rapide, carte SD, convertisseur |

Trois réflexes pour trancher. Pour une **liaison simple** vers un seul périphérique, une console de mise au point ou un module série, l'UART suffit. Pour brancher **plusieurs capteurs** sans multiplier les fils, l'I2C les regroupe sur deux lignes grâce à l'adressage. Pour un périphérique **rapide** (écran graphique, carte SD, convertisseur), le SPI offre le débit, au prix d'un fil de sélection par composant ajouté.

Sur n'importe lequel de ces bus, la compatibilité des [[niveaux-de-tension|niveaux de tension]] (3,3 V / 5 V) entre les composants reste à vérifier avant de câbler.

## Voir aussi

- [[uart|UART]] — liaison asynchrone, 2 fils, point-à-point
- [[i2c|I2C]] — bus synchrone, 2 fils, plusieurs composants par adresse
- [[spi|SPI]] — bus synchrone rapide, 4 fils, sélection par CS
- [[microcontroleur|Microcontrôleur]] — le bus relie le contrôleur à ses périphériques
- [[niveaux-de-tension|Niveaux de tension]] — la compatibilité des niveaux se pose sur chaque bus
