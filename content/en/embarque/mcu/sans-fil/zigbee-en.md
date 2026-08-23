---
title: Zigbee
type: notion
tags:
  - eee
  - notion
prerequis:
  - techno-sans-fil-en
aa: []
phases: []
draft: true
source_fr: embarque/mcu/sans-fil/zigbee.md
source_sha256: a5cd3cf3b2ef7661439dcf4a22d6b561048bf9b320bfe7a0ac829ee5eb8ae600
---

Le **Zigbee** est une [[techno-sans-fil-en|technologie sans-fil]] **basse consommation** et **bas débit**, conçue pour les **réseaux de capteurs**. Sa force est le **maillage** (*mesh*) : chaque nœud relaie les messages des autres, ce qui étend la portée du réseau sans augmenter celle de chaque émetteur.

## Comment ça marche ?

On le retrouve surtout en **domotique** et dans les réseaux d'objets nombreux. Le réseau ne s'auto-organise pas par magie : il lui faut un **coordinateur** (box domotique, dongle USB) qui le fonde et l'administre. Le maillage rend ensuite le réseau **robuste**. Si un nœud tombe, les messages le contournent. Cette robustesse se paie par une organisation plus complexe qu'une simple étoile. Le débit, volontairement bas, suffit à des capteurs et des commandes, et sert la basse consommation.

## Voir aussi

- [[techno-sans-fil-en|Technologies sans-fil]] — hub : situer le Zigbee face aux autres
- [[xbee-en|XBee]] — modules prêts à l'emploi implémentant souvent Zigbee
- [[lora-en|LoRa]] — alternative pour la très longue portée
