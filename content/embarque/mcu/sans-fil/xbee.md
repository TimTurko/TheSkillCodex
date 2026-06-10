---
title: XBee
type: notion
tags:
  - eee
  - notion
prerequis:
  - techno-sans-fil
aa: []
phases: []
draft: false
---

Les modules **XBee** (de la marque Digi) sont des **modules radio prêts à l'emploi** qui implémentent souvent le [[zigbee|Zigbee]] ou le standard 802.15.4. Leur intérêt : transformer une liaison série en **liaison sans-fil** presque sans effort logiciel.

## Comment ça marche ?

On les emploie pour **remplacer un câble série** entre deux cartes distantes, ou pour de la **télémétrie**. La portée varie fortement selon le modèle — de quelques dizaines de mètres à plusieurs kilomètres en version longue portée. Côté contrôleur, ils se pilotent en [[uart|UART]], ce qui les rend simples à intégrer : pour le programme, c'est une liaison série comme une autre.

## Voir aussi

- [[techno-sans-fil|Technologies sans-fil]] — hub : situer XBee face aux autres
- [[zigbee|Zigbee]] — le protocole que beaucoup de modules XBee implémentent
- [[uart|UART]] — l'interface série par laquelle on pilote un module XBee
