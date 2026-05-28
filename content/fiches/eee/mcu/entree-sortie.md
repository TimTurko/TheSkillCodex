---
title: Entrée/sortie
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
aa: []
phases: []
draft: false
---

Les **entrées/sorties** (E/S, *I/O*) sont les périphériques par lesquels le cœur numérique d'un [[microcontroleur|microcontrôleur]] dialogue avec le **monde physique** : lire un capteur, piloter un actionneur, communiquer avec un autre circuit. Sans elles, le processeur calculerait sans jamais agir ni percevoir.

## Comment ça se décline ?

Les E/S regroupent les [[gpio|broches logiques]] (tout-ou-rien), la conversion [[adc|analogique vers numérique]] (lire une tension), la génération de signaux [[pwm|PWM]] (doser une commande) et les [[bus-de-communication|bus de communication]] (UART, I2C, SPI) pour échanger des données structurées.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — le circuit qui intègre les périphériques d'E/S
- [[gpio|GPIO]] — les broches logiques d'entrée/sortie
- [[bus-de-communication|Bus de communication]] — les E/S dédiées à l'échange de données
