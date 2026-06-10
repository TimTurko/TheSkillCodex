---
title: SPI
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

Le **SPI** (*Serial Peripheral Interface*) est un [[bus-de-communication|bus de communication]] **synchrone** et rapide à quatre fils : **MOSI** et **MISO** (les données dans chaque sens), **SCK** (l'horloge) et **CS** (la sélection). Un composant **maître** échange en **full-duplex** — il émet et reçoit en même temps — avec un esclave à la fois, qu'il active en abaissant sa ligne **CS** dédiée.

## Comment ça marche ?

Les trois fils MOSI, MISO et SCK sont **partagés** par tous les composants ; en revanche, chaque esclave a sa propre ligne **CS** : ajouter un composant, c'est ajouter un fil de sélection. Il n'y a donc pas d'adressage — le maître choisit son interlocuteur par la broche CS qu'il abaisse. En contrepartie de ce fil supplémentaire par esclave, le SPI offre un **débit élevé**, adapté aux écrans graphiques, aux cartes SD et aux convertisseurs, sur de **très courtes distances**.

## Pièges

**Oublier d'activer le CS.** Tant que la ligne CS d'un esclave n'est pas abaissée, celui-ci ignore le bus. Un échange sans sélection préalable ne produit rien.

**Multiplier les esclaves sans compter les fils.** Contrairement à l'[[i2c|I2C]] qui empile les composants sur deux fils par adresse, le SPI réclame une broche CS de plus par esclave : au-delà de quelques composants, le budget broches devient un critère.

## Voir aussi

- [[bus-de-communication|Bus de communication]] — hub : situer le SPI face à l'UART et à l'I2C
- [[i2c|I2C]] — alternative synchrone à deux fils, au débit plus modeste
- [[uart|UART]] — alternative asynchrone, point-à-point
- [[niveaux-de-tension|Niveaux de tension]] — quatre lignes à adapter entre un composant 3,3 V et un 5 V
