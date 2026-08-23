---
title: Cable management
type: notion
phases:
  - integration-et-tests
tags:
  - eee
  - meo
  - notion
prerequis: []
aa: []
draft: false
---

Le **cable management** est l'organisation et la fixation du câblage d'un système pour qu'il soit **fiable, diagnosticable et sûr** : router proprement, regrouper en faisceaux, repérer les fils, et soulager mécaniquement les connecteurs.

## Dans le projet

Un câblage en désordre est une cause classique de pannes **intermittentes** (faux contacts, fils arrachés) et rend le débogage pénible. Quelques réflexes, surtout en phase d'[[integration-et-tests|intégration]] : router et regrouper les faisceaux, **repérer les deux extrémités** de chaque fil, prévoir un *strain relief* sur les connecteurs sollicités, et laisser une petite longueur de service. Sur le fil rouge, un câblage propre des moteurs et fins de course du bras évite que le mouvement n'arrache une liaison, et facilite le diagnostic quand un axe ne répond plus.

## Voir aussi

- [[integration-et-tests|Intégration et tests]] — la phase où le câblage se fiabilise
- [[pcb|PCB]] — l'alternative intégrée au câblage volant
- [[ecoconception|Écoconception]] — connectique démontable et réparabilité
