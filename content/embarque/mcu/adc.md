---
title: ADC
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

Un **ADC** (*Analog-to-Digital Converter*, convertisseur analogique-numérique) est le périphérique qui **convertit une tension analogique en nombre** exploitable par le programme — par exemple la tension délivrée par un capteur de température ou un potentiomètre. Sa **résolution** (en bits) fixe la finesse de la mesure : plus elle est élevée, plus on distingue de paliers de tension.

## À quoi ça sert ?

Sans ADC, un [[microcontroleur|microcontrôleur]] ne perçoit que du tout-ou-rien sur ses [[gpio|broches logiques]]. C'est l'ADC qui lui donne accès aux **grandeurs continues** du monde réel — toute mesure de capteur analogique passe par lui.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — le circuit qui intègre l'ADC
- [[entree-sortie|Entrée/sortie]] — la famille de périphériques dont fait partie l'ADC
- [[pwm|PWM]] — le pendant en sortie : doser une commande plutôt que lire une mesure
