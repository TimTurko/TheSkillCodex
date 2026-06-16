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

La **PWM** (*Pulse Width Modulation*, modulation de largeur d'impulsion) est un signal **tout-ou-rien** dont on fait varier la proportion de temps à l'état haut — le **rapport cyclique** (*duty cycle*). En moyenne, ce hachage simule une tension réglable, sans aucun composant analogique.

![Trois chronogrammes du même signal PWM à rapports cycliques 25, 50 et 75 % : le signal reste tout-ou-rien, la moyenne en pointillé ambre monte avec la proportion de temps à l'état haut.](/ressources/img/pwm/rapport-cyclique.svg)

## À quoi ça sert ?

C'est la façon courante, depuis un [[microcontroleur|microcontrôleur]], de régler une **vitesse de moteur**, une **luminosité de LED** ou la position d'un servomoteur : on agit sur le rapport cyclique plutôt que sur une vraie tension variable. Le signal reste numérique, donc simple à générer sur une broche.

## En pratique

La PWM a **deux réglages indépendants** : le rapport cyclique (le dosage) et la **fréquence de hachage** — à quelle vitesse le signal alterne. La fréquence se choisit selon la charge : trop lente, une LED **scintille** ; sous ≈ 20 kHz, un moteur **siffle** dans l'audible ; un servomoteur attend, lui, un signal à 50 Hz dont seule la largeur d'impulsion compte. Et si le besoin est une **vraie tension analogique** plutôt qu'une moyenne hachée, la PWM filtrée (un simple filtre RC) en tient lieu de [[dac|DAC]]. La mise en œuvre : [[arduino-sortie-pwm]] côté Arduino, [[micropython-sortie-pwm]] côté MicroPython.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — le circuit qui génère la PWM
- [[timer|Timer]] — c'est lui qui, dans le microcontrôleur, produit le signal PWM et en règle la fréquence
- [[entree-sortie|Entrée/sortie]] — la famille de périphériques dont fait partie la PWM
- [[adc|ADC]] — le pendant en entrée : lire une mesure plutôt que doser une commande
- [[dac|DAC]] — la vraie tension analogique, quand la moyenne hachée ne suffit pas
- [[chronogramme|Chronogramme]] — la représentation qui montre une PWM telle qu'elle est
