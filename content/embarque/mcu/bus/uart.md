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

![Branchement UART entre deux cartes : le TX de A va au RX de B, le RX de A vient du TX de B — les fils se croisent — et les masses GND sont reliées. Pas de terminaison nécessaire à ces distances.](/ressources/img/uart/branchement.svg)

## Comment ça marche ?

Chaque octet est encadré par un **bit de start** et un ou plusieurs **bits de stop** : c'est cette trame qui permet au récepteur de se caler sur le flux sans horloge partagée. La liaison est **point-à-point** — **deux équipements, pas plus**, par construction : un seul couple de composants par lien, sans adressage — ce qui la rend simple mais non extensible : pour parler à plusieurs périphériques, il faut autant de liaisons UART, ou un autre bus.

## Sur le fil

![Chronogramme d'une trame UART : ligne au repos à l'état haut, bit de start bas, huit bits de données du poids faible au poids fort, bit de stop haut, retour au repos. Chaque bit dure l'inverse du débit.](/ressources/img/uart/chronogramme.svg)

La ligne est au repos à l'état haut. Le **start** (un bit bas) prévient le récepteur, qui se met à compter : chaque bit durant exactement 1 ÷ débit, il échantillonne la ligne au milieu de chaque intervalle pour lire les 8 bits de données (poids faible en premier), puis vérifie le **stop**. Tout repose sur ce comptage : c'est pourquoi un débit mal accordé produit des caractères illisibles.

C'est le bus de la **console de mise au point** (souvent via une passerelle USB-série vers le PC) et de nombreux modules autonomes : GPS, Bluetooth, modules radio. La mise en œuvre est traitée dans [[arduino-uart]] côté Arduino et [[micropython-uart]] côté MicroPython.

## Pièges

**Câbler TX sur TX.** Le classique du premier branchement : relier émission à émission et réception à réception. Rien ne grille, rien ne circule — et on cherche longtemps. TX parle, RX écoute : **les fils se croisent**.

**Débit mal accordé.** Si les deux côtés ne sont pas réglés au même baud, les caractères reçus sont illisibles. Le débit se fixe identique des deux côtés avant tout échange.

**Oublier la masse commune.** Comme pour toute liaison, TX et RX n'ont de sens que si les deux composants partagent la même référence de masse (GND).

## Voir aussi

- [[bus-de-communication|Bus de communication]] — hub : situer l'UART face à l'I2C et au SPI
- [[arduino-uart|UART sur Arduino]] · [[micropython-uart|UART en MicroPython]] — la mise en œuvre par famille
- [[i2c|I2C]] — alternative synchrone à plusieurs composants
- [[spi|SPI]] — alternative synchrone rapide
- [[niveaux-de-tension|Niveaux de tension]] — TX/RX à adapter entre un composant 3,3 V et un 5 V
