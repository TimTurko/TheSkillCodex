---
title: Deep sleep
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

Le **deep sleep** (sommeil profond) est un **mode de basse consommation** d'un [[microcontroleur|microcontrôleur]] : le cœur et la plupart des périphériques sont mis en veille, ne laissant qu'une consommation résiduelle, jusqu'à un **réveil** déclenché par une minuterie ou un événement extérieur.

## À quoi ça sert ?

C'est le levier décisif pour un objet **sur pile**. Alterner de brèves phases actives et de longues phases de sommeil peut faire passer l'autonomie de quelques jours à plusieurs mois — d'où son association fréquente avec des liaisons sobres comme le [[ble|BLE]] ou le [[lora|LoRa]], qui ne réveillent l'objet que pour transmettre.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — le circuit qui propose les modes de veille
- [[ble|BLE]] — liaison basse consommation, complément naturel du deep sleep
- [[lora|LoRa]] — capteurs distants sur pile, mêmes contraintes d'autonomie
