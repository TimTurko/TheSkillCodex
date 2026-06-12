---
title: DAC
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

Un **DAC** (*Digital-to-Analog Converter*, convertisseur numérique-analogique) est le périphérique qui fait l'inverse de l'[[adc|ADC]] : il **convertit un nombre en vraie tension analogique**, continûment réglable entre 0 et la pleine échelle. C'est la sortie qu'il faut quand la **forme du signal** compte — générer un son, une forme d'onde, une consigne pour un étage analogique.

## En pratique

Le DAC est rare sur les microcontrôleurs : beaucoup n'en ont pas (l'Uno classique), l'ESP32 d'origine en offre deux (8 bits). Pour la majorité des besoins de commande (vitesse, luminosité), on s'en passe : la [[pwm|PWM]] — directe ou filtrée — en tient lieu. Un vrai DAC ne s'impose que lorsque le signal lui-même doit être analogique (audio, signaux de test) ; si le DAC intégré ne suffit pas, un DAC externe se pilote par [[bus-de-communication|bus]] (I2C ou SPI).

## Voir aussi

- [[adc|ADC]] — le convertisseur inverse : lire une tension analogique
- [[pwm|PWM]] — le remplaçant habituel du DAC pour doser une commande
- [[entree-sortie|Entrée/sortie]] — la famille de périphériques
- [[microcontroleur|Microcontrôleur]] — le circuit qui intègre (parfois) un DAC
