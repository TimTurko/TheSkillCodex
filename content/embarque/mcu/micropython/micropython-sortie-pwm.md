---
title: Piloter une sortie PWM en MicroPython
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-sortie-tor
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Le **PWM** (Pulse Width Modulation, modulation de largeur d'impulsion) émet un signal carré rapide dont on fait varier la proportion de temps passé à l'état haut — le **rapport cyclique**. En MicroPython, la classe **`PWM`** du module [[micropython-modules|`machine`]] génère ce signal. Pour une charge lente devant la fréquence (LED, moteur, chauffage), l'effet est *équivalent à une tension moyenne* réglable de 0 à 3,3 V, sans qu'aucune vraie tension intermédiaire ne soit produite par la broche.

## À quoi ça sert ?

Le PWM fait varier la puissance d'une charge sans dissiper d'énergie dans un composant variable. Trois usages typiques :

- **Intensité d'une LED** — fondu, animation, indicateur progressif ;
- **Vitesse d'un moteur CC** — couplé à un pont en H (voir [[micropython-moteur-cc|moteur CC]]) ;
- **Servomoteur** — la position est codée par la largeur d'une impulsion (voir [[micropython-servomoteur|servomoteur]]).

C'est aussi la base du chauffage régulé et du gradateur DC.

## Procédure pas à pas

Quatre étapes : créer l'objet PWM, régler fréquence et rapport cyclique, câbler, observer.

### 1. Créer un objet `PWM`

Sur le Pico, **toutes** les broches GPIO peuvent générer du PWM (pas de broches « `~` » dédiées comme sur Arduino) :

```python
from machine import Pin, PWM

led = PWM(Pin(15))
led.freq(1000)            # fréquence du signal, en Hz
led.duty_u16(32768)       # rapport cyclique sur 16 bits : 32768 = 50 %
```

Deux réglages : **`freq()`** (la fréquence, librement choisie) et **`duty_u16()`** (le rapport cyclique, de **0** = 0 % à **65535** = 100 %, sur 16 bits).

### 2. Câbler une LED PWM

LED anode (+) → résistance 220 Ω → **GP15**, cathode (−) → GND. Identique au câblage TOR : c'est le code qui change.

![Montage : LED + résistance 220 Ω sur GP15 d'un Pico (câblage identique à une LED TOR, c'est le code qui change)|600](/ressources/img/micropython-sortie-pwm/montage-led-pwm.svg)

### 3. Écrire le code — fondu progressif

```python
from machine import Pin, PWM
from time import sleep_ms

led = PWM(Pin(15))
led.freq(1000)

while True:
    for d in range(0, 65536, 1024):     # montée : 0 → 65535 par pas de 1024
        led.duty_u16(d)                 # applique le rapport cyclique
        sleep_ms(8)                     # 8 ms par pas → fondu ~0,5 s
    for d in range(65535, -1, -1024):   # descente : 65535 → 0
        led.duty_u16(d)
        sleep_ms(8)
```

`duty_u16(0)` éteint, `duty_u16(65535)` allume à fond. La LED s'allume puis s'éteint progressivement en boucle.

### 4. Observer

À l'œil, la LED varie en intensité (effet de moyenne perceptive). À l'**oscilloscope**, on voit la vraie nature : un créneau 0–3,3 V dont la proportion de temps haut varie. Pour libérer la broche, `led.deinit()`.

L'allure exacte de ce créneau à l'écran — période repérée, rapport cyclique coté — est détaillée dans [[oscilloscope|oscilloscope]].

## Exemple — Variateur de LED avec potentiomètre

Lire un potentiomètre sur `GP26`, l'utiliser comme consigne de luminosité. Élégance MicroPython : `read_u16()` (voir [[micropython-capteur-analogique|lire un capteur analogique]]) et `duty_u16()` sont **tous deux sur 16 bits**, donc on relie l'un à l'autre **sans mise à l'échelle** (contrairement à Arduino, où il faut diviser 1023 → 255).

```python
from machine import Pin, PWM, ADC
from time import sleep_ms

pot = ADC(Pin(26))
led = PWM(Pin(15))
led.freq(1000)

while True:
    led.duty_u16(pot.read_u16())   # 0..65535 -> 0..65535, directement
    sleep_ms(10)
```

Tournez le potentiomètre : la luminosité suit.

## Pièges

**`duty_u16()` est sur 16 bits, pas 0–255.** Le rapport cyclique va de 0 à **65535**, pas de 0 à 255 comme l'`analogWrite()` d'Arduino. Passer `255` donne ~0,4 % — quasi éteint. (`duty_u16()` est l'API **portable** standard de `machine.PWM`. Certains ports offrent aussi `duty_ns()` pour fixer la largeur d'impulsion en nanosecondes — disponible sur le Pico —, tandis que l'ancien `duty()` 0–1023 subsiste sur ESP8266/ESP32.)

**Confondre PWM et vraie sortie analogique.** Le PWM sort un créneau 0/3,3 V à rapport cyclique variable, pas une tension. La *moyenne* est analogique pour une charge lente. L'instantané reste binaire. Pour une vraie tension : DAC externe (MCP4725 en I2C) ou filtre RC.

**Fréquence inadaptée.** Une fréquence trop basse fait scintiller une LED, et siffler un moteur. Régler `freq()` selon la charge (souvent 0,5–20 kHz). Avantage Pico : la fréquence est libre, contrairement aux ~490 Hz fixes par défaut d'Arduino.

**Charge inductive sans diode de roue libre.** Une bobine pilotée en PWM produit des surtensions à chaque commutation : diode 1N4007 en inverse en parallèle, sinon le transistor meurt.

**PWM sur grosse charge sans transistor.** Le rapport cyclique ne réduit pas le courant de pointe : un moteur 1 A tire 1 A pendant les phases hautes. La broche (~12 mA) ne tient pas. Toujours un transistor (MOSFET) ou un pont H.

**Oublier `deinit()`.** Une broche restée en PWM n'est plus disponible en GPIO simple. `deinit()` la libère.

## Cas particulier — Lissage par filtre RC

Pour transformer un PWM en vraie tension continue (piloter l'entrée analogique d'un autre appareil), un filtre RC passe-bas suffit (R = 10 kΩ, C = 1 µF → coupure ~16 Hz, bien sous la fréquence PWM). Compromis : réponse de quelques dizaines de ms. Pour de la haute précision, préférer un vrai DAC externe.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — toute charge à puissance variable (LED à intensité, ventilateur, moteur CC) se valide d'abord en PWM sur banc isolé.
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — la commande aval d'une boucle de régulation passe souvent par du PWM (voir [[micropython-pid|régulation PID]]).
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — pilotage des actionneurs intégrés au système complet.

Le PWM est l'outil de modulation de puissance par excellence — natif sur toute broche du Pico, bien outillé, suffisant pour l'essentiel des besoins de vitesse moteur et de luminosité.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-sortie-tor|Piloter une sortie TOR]] — prérequis (transistors de commutation)
- [[micropython-moteur-cc|Piloter un moteur CC]] — l'application phare, via pont en H
- [[micropython-servomoteur|Piloter un servomoteur]] — un autre type de PWM
- [[pwm|PWM]] — la notion transverse
- [[arduino-sortie-pwm|Piloter une sortie PWM (Arduino)]] — l'équivalent C++
