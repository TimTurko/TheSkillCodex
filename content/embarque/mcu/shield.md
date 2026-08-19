---
title: Shield
type: notion
tags:
  - eee
  - mcu
  - notion
prerequis: []
aa: []
draft: false
---

Un **shield** est une carte d'extension qui s'enfiche directement sur les connecteurs d'une carte à [[microcontroleur|microcontrôleur]] (typiquement un Arduino) pour lui ajouter une fonction — pilotage de moteurs, écran, capteurs, communication — sans aucun câblage. À distinguer du **module** (*breakout*), qui rend le même genre de service mais se câble par fils → [[arduino-module]] côté Arduino, [[micropython-module]] côté MicroPython.

## Le principe d'empilement

Le shield reprend exactement l'implantation des connecteurs de la carte hôte : il se pose par-dessus, broche sur broche, et plusieurs shields peuvent parfois s'empiler. L'intérêt est la rapidité de prototypage : pas de fils volants, un montage mécaniquement solide, une fonction ajoutée en quelques secondes. C'est l'une des raisons du succès du format [[arduino|Arduino]], dont l'implantation de connecteurs est devenue un standard de fait repris par de nombreuses cartes. Côté logiciel, chaque shield s'accompagne de **sa [[bibliotheque|bibliothèque]] associée**, qui expose la fonction sans qu'on ait à connaître le câblage interne. La mise en œuvre : [[arduino-shield]] côté Arduino, [[micropython-shield]] côté MicroPython.

![Carte Arduino Uno vue de trois quarts avec un shield enfiché par-dessus : les deux rangées de connecteurs s'emboîtent broche sur broche.|480](/ressources/img/shield/empilement-uno-shield.jpg)

## Limites

Un shield occupe un jeu de broches imposé : empiler deux shields qui réclament la même broche crée un **conflit** qu'aucun câblage ne résout. Au-delà du prototype, un shield reste plus encombrant et moins fiable qu'un [[pcb|circuit imprimé]] dédié intégrant la même fonction — c'est l'étape suivante naturelle quand l'architecture se fige.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — la carte hôte
- [[arduino|Arduino]] — format de référence des shields
- [[bibliotheque|Bibliothèque]] — le pendant logiciel du shield
- [[arduino-shield|Arduino — shield]] — la mise en œuvre en pratique
- [[micropython-shield|MicroPython — shield]] — la même carte pilotée côté MicroPython
- [[pcb|PCB]] — l'alternative intégrée hors prototypage
