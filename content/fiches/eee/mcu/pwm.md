---
title: PWM
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

La **PWM** (*Pulse Width Modulation*, modulation de largeur d'impulsion) est un signal **tout-ou-rien** dont on fait varier la **proportion de temps à l'état haut** — le *rapport cyclique*. En moyenne, ce hachage simule une tension réglable, sans aucun composant analogique.

## À quoi ça sert ?

C'est la façon courante, depuis un [[microcontroleur|microcontrôleur]], de régler une **vitesse de moteur**, une **luminosité de LED** ou la position d'un servomoteur : on agit sur le rapport cyclique plutôt que sur une vraie tension variable. Le signal reste numérique, donc simple à générer sur une broche.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — le circuit qui génère la PWM
- [[entree-sortie|Entrée/sortie]] — la famille de périphériques dont fait partie la PWM
- [[adc|ADC]] — le pendant en entrée : lire une mesure plutôt que doser une commande
