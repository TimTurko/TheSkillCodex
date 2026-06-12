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

![Quantification : un signal analogique continu (courbe grise) est arrondi par l'ADC au palier le plus proche (escalier ambre) ; un palier vaut la tension de référence divisée par 2 puissance n.](/ressources/img/adc-quantification.svg)

## À quoi ça sert ?

Sans ADC, un [[microcontroleur|microcontrôleur]] ne perçoit que du tout-ou-rien sur ses [[gpio|broches logiques]]. C'est l'ADC qui lui donne accès aux **grandeurs continues** du monde réel — toute mesure de capteur analogique passe par lui.

## En pratique

La conversion rapporte la tension lue à la **tension de référence** (la pleine échelle, souvent l'alimentation : 5 V sur Uno, 3,3 V sur ESP32) et la découpe en **2ⁿ paliers** : 10 bits = 1024 valeurs (un palier ≈ 5 mV sur 5 V), 12 bits = 4096. Deux pièges. **Dépasser la pleine échelle** : au-delà de la référence la mesure sature — et un capteur 5 V branché sur un ADC 3,3 V menace la broche elle-même *(→ notion [[niveaux-de-tension]])*. **Confondre résolution et précision** : plus de paliers ne veut pas dire mesure plus juste — l'ADC 12 bits de l'ESP32, notoirement non linéaire, en est l'illustration *(→ notion [[precision-de-mesure]])*. La lecture en pratique : [[arduino-capteur-analogique]] côté Arduino, [[micropython-capteur-analogique]] côté MicroPython.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — le circuit qui intègre l'ADC
- [[entree-sortie|Entrée/sortie]] — la famille de périphériques dont fait partie l'ADC
- [[dac|DAC]] — le convertisseur inverse : produire une vraie tension analogique
- [[pwm|PWM]] — le pendant en sortie : doser une commande plutôt que lire une mesure
- [[precision-de-mesure|Précision de mesure]] — résolution, justesse, fidélité : ne pas confondre
