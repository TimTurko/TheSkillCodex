---
title: UART
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

L'**UART** (*Universal Asynchronous Receiver-Transmitter*) est un [[bus-de-communication|bus de communication]] **asynchrone** : deux composants échangent des données sur deux fils, **TX** (émission) et **RX** (réception), croisés l'un vers l'autre. Sans horloge commune, les deux côtés doivent s'accorder à l'avance sur un même **débit** (le *baud*).

## Comment ça marche ?

Chaque octet est encadré par un **bit de start** et un ou plusieurs **bits de stop** : c'est cette trame qui permet au récepteur de se caler sur le flux sans horloge partagée. La liaison est **point-à-point** — un seul couple de composants par lien, sans adressage — ce qui la rend simple mais non extensible : pour parler à plusieurs périphériques, il faut autant de liaisons UART, ou un autre bus.

C'est le bus de la **console de mise au point** (souvent via une passerelle USB-série vers le PC) et de nombreux modules autonomes : GPS, Bluetooth, modules radio.

## Pièges

**Débit mal accordé.** Si les deux côtés ne sont pas réglés au même baud, les caractères reçus sont illisibles. Le débit se fixe identique des deux côtés avant tout échange.

**Oublier la masse commune.** Comme pour toute liaison, TX et RX n'ont de sens que si les deux composants partagent la même référence de masse (GND).

## Voir aussi

- [[bus-de-communication|Bus de communication]] — hub : situer l'UART face à l'I2C et au SPI
- [[i2c|I2C]] — alternative synchrone à plusieurs composants
- [[spi|SPI]] — alternative synchrone rapide
- [[niveaux-de-tension|Niveaux de tension]] — TX/RX à adapter entre un composant 3,3 V et un 5 V
