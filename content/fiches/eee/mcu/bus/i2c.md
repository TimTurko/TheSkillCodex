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

L'**I2C** (*Inter-Integrated Circuit*) est un [[bus-de-communication|bus de communication]] **synchrone** à deux fils : **SDA** (les données) et **SCL** (l'horloge), partagés par tous les composants. Un composant **maître** cadence les échanges ; chaque composant **esclave** répond à une **adresse** unique, ce qui permet d'en brancher plusieurs sur les deux mêmes fils.

## Comment ça marche ?

Les deux lignes fonctionnent en **collecteur ou drain ouvert** : aucun composant ne pousse activement la ligne à l'état haut, chacun ne fait que la **tirer vers le bas**. Une résistance de **tirage** (*pull-up*) ramène la ligne à l'état haut au repos. C'est ce qui rend l'I2C particulier vis-à-vis des [[niveaux-de-tension|niveaux de tension]] : la tension de la ligne est fixée par le tirage, si bien qu'un composant 3,3 V et un composant 5 V peuvent parfois cohabiter sur un même bus selon la tension de tirage choisie.

Le débit est modéré et la portée courte (l'échelle de la carte). En échange, l'adressage permet d'aligner de nombreux capteurs, écrans ou horloges temps réel sur seulement deux fils.

## Pièges

**Oublier les résistances de tirage.** Sans pull-up, les lignes ne remontent jamais à l'état haut et le bus reste muet. Beaucoup de modules les embarquent déjà — mais pas tous.

**Collision d'adresses.** Deux composants à la même adresse sur le bus se rendent mutuellement inaccessibles. L'adresse se vérifie sur la [[lire-une-datasheet|datasheet]], et certains composants offrent quelques broches pour la modifier.

## Voir aussi

- [[bus-de-communication|Bus de communication]] — hub : situer l'I2C face à l'UART et au SPI
- [[spi|SPI]] — alternative synchrone plus rapide, mais un fil de sélection par composant
- [[uart|UART]] — alternative asynchrone, point-à-point
- [[niveaux-de-tension|Niveaux de tension]] — cas particulier open-drain et tirage sur le bus I2C
