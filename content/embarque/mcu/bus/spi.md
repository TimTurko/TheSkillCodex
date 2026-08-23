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

Le **SPI** (*Serial Peripheral Interface*) est un [[bus-de-communication|bus de communication]] **synchrone** et rapide à quatre fils : **MOSI** et **MISO** (les données dans chaque sens), **SCK** (l'horloge) et **CS** (la sélection). Un composant **maître** échange avec un esclave à la fois, qu'il active en abaissant sa ligne **CS** dédiée. L'échange est **full-duplex**, le maître émettant et recevant en même temps.

![Branchement SPI : un maître et deux esclaves — les trois fils MOSI, MISO et SCK sont partagés (faisceau unique), chaque esclave reçoit sa propre ligne CS, masses GND reliées.](/ressources/img/spi/branchement.svg)

## Comment ça marche ?

Les trois fils MOSI, MISO et SCK sont **partagés** par tous les composants. Chaque esclave, en revanche, a sa propre ligne **CS** : ajouter un composant, c'est ajouter un fil de sélection. Il n'y a donc pas d'adressage. Le maître choisit son interlocuteur par la broche CS qu'il abaisse. **Combien d'esclaves, au maximum ?** Le protocole n'impose aucune limite, et le plafond est le **nombre de broches CS disponibles** sur le maître, autrement dit le budget [[gpio|GPIO]]. En contrepartie de ce fil supplémentaire par esclave, le SPI offre un **débit élevé**, adapté aux écrans graphiques, aux cartes SD et aux convertisseurs, sur de **très courtes distances**. À cette échelle, aucune résistance de terminaison n'est nécessaire.

## Sur le fil

![Chronogramme SPI : CS abaissé en premier, huit coups d'horloge SCK, et les octets MOSI et MISO qui circulent en même temps — full-duplex — avant la remontée de CS.](/ressources/img/spi/chronogramme.svg)

Le maître abaisse d'abord le **CS** de l'esclave visé, puis bat **huit coups d'horloge** sur SCK : à chaque coup, un bit part sur MOSI **et** un bit revient sur MISO. L'échange est simultané, c'est le full-duplex. CS remonte à la fin. Le moment exact où les bits sont échantillonnés dépend du **mode SPI** (polarité et phase d'horloge, numérotés 0 à 3). La mise en œuvre est traitée dans [[arduino-spi]] côté Arduino, [[esp32-spi]] côté ESP32 et [[micropython-spi]] côté MicroPython.

## Pièges

**Oublier d'activer le CS.** Tant que la ligne CS d'un esclave n'est pas abaissée, celui-ci ignore le bus. Un échange sans sélection préalable ne produit rien.

**Multiplier les esclaves sans compter les fils.** Contrairement à l'[[i2c|I2C]] qui empile les composants sur deux fils par adresse, le SPI réclame une broche CS de plus par esclave : au-delà de quelques composants, le budget broches devient un critère.

**Se tromper de mode SPI.** Polarité et phase d'horloge mal assorties au composant : le câblage est bon, mais les données arrivent décalées ou nulles. Le mode **se lit dans la [[lire-une-datasheet|datasheet]]** du composant et **se règle dans la bibliothèque**.

## Voir aussi

- [[bus-de-communication|Bus de communication]] — hub : situer le SPI face à l'UART et à l'I2C
- [[arduino-spi|SPI sur Arduino]] · [[esp32-spi|SPI sur ESP32]] · [[micropython-spi|SPI en MicroPython]] — la mise en œuvre par famille
- [[i2c|I2C]] — alternative synchrone à deux fils, au débit plus modeste
- [[uart|UART]] — alternative asynchrone, point-à-point
- [[niveaux-de-tension|Niveaux de tension]] — quatre lignes à adapter entre un composant 3,3 V et un 5 V
