---
title: Piloter un servomoteur
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-sortie-pwm
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Un **servomoteur** (ou *servo*) est un actionneur rotatif qui se positionne sur une **consigne d'angle** transmise par un signal codé en largeur d'impulsion (0° à 180° sur un servo standard). À la différence d'Arduino (qui a la bibliothèque `Servo.h`), MicroPython n'embarque pas de classe servo : on pilote le servo **directement en [[micropython-sortie-pwm|PWM]]** — un signal à **50 Hz** dont on règle la **largeur d'impulsion** (typiquement 0,5 à 2,5 ms). C'est plus proche du métal, et ça montre exactement ce qu'est un signal servo.

## À quoi ça sert ?

Le servo est l'actionneur le plus simple pour un mouvement de **position** contrôlé : direction d'un robot (roue directrice, gouvernail, axe de capteur orientable), tri/aiguillage, pince qui s'ouvre/ferme, visée. Limite : un servo standard ne couvre que ~180°. Pour la rotation continue, voir les *servos à rotation continue* (pilotés en vitesse) ou le [[micropython-moteur-cc|moteur CC]].

## Le signal servo

À **50 Hz** (période 20 ms), la position est codée par la **durée de l'impulsion haute** : ~0,5 ms = 0°, ~1,5 ms = 90° (milieu), ~2,5 ms = 180° (les bornes exactes varient d'un servo à l'autre — à calibrer). En `duty_u16` (0–65535 sur 20 ms) : 0,5 ms ≈ 1638, 1,5 ms ≈ 4915, 2,5 ms ≈ 8192.

## Procédure pas à pas

Quatre étapes : choisir le servo, câbler, écrire la conversion angle→impulsion, piloter.

### 1. Choisir le servo

| Référence | Tension | Couple | Plage | Usage |
|---|---|---|---|---|
| SG90 (plastique) | 4,8–6 V | ~1,8 kg·cm | 0–180° | tests, prototypes légers |
| MG90S (métal) | 4,8–6 V | ~2,2 kg·cm | 0–180° | pinces, mouvements répétés |
| MG996R | 4,8–7,2 V | 9–11 kg·cm | 0–180° | actionneurs de puissance |

Pour un premier test, le **SG90** est le standard.

### 2. Câbler

3 fils : **rouge** → `+5 V` (VBUS, ou alimentation externe dès 2 servos / un servo de couple) ; **marron/noir** → `GND` ; **orange/jaune** → la broche de signal (ex. **GP15**). Le signal du Pico est en 3,3 V — accepté par la plupart des servos. **GND commun** si alimentation séparée.

Prendre capture d'écran ou photo de *un servo SG90 câblé sur un Pico, signal sur GP15, rouge sur +5 V, marron sur GND*.

### 3. Convertir un angle en impulsion

```python
from machine import Pin, PWM

servo = PWM(Pin(15))
servo.freq(50)                 # 50 Hz = signal servo

MIN_DUTY = 1638                # ~0,5 ms (0°)   -- a calibrer
MAX_DUTY = 8192                # ~2,5 ms (180°) -- a calibrer

def angle(deg):
    deg = max(0, min(180, deg))           # borne 0..180
    duty = int(MIN_DUTY + (deg / 180) * (MAX_DUTY - MIN_DUTY))
    servo.duty_u16(duty)
```

### 4. Piloter

```python
from time import sleep

angle(90)      # milieu
sleep(1)
while True:
    angle(0);   sleep(1)
    angle(90);  sleep(1)
    angle(180); sleep(1)
```

Le servo va à trois positions. S'il tressaute sans atteindre les bornes, ajuster `MIN_DUTY`/`MAX_DUTY` (calibration) — voir *Pièges*.

## Exemple — Balayage à vitesse réglable par potentiomètre

```python
from machine import Pin, PWM, ADC
from time import sleep_ms

servo = PWM(Pin(15)); servo.freq(50)
pot = ADC(Pin(26))
MIN_DUTY, MAX_DUTY = 1638, 8192

def angle(deg):
    servo.duty_u16(int(MIN_DUTY + (max(0,min(180,deg))/180)*(MAX_DUTY-MIN_DUTY)))

a, sens = 0, 1
while True:
    pas = 1 + pot.read_u16() * 9 // 65535    # 1 a 10 degres par pas
    a += sens * pas
    if a >= 180: a, sens = 180, -1
    if a <= 0:   a, sens = 0, 1
    angle(a)
    sleep_ms(20)                              # ~50 Hz de rafraichissement
```

Tourner le potentiomètre fait varier la vitesse de balayage — pratique pour calibrer en démo sans recompiler.

## Pièges

**Fréquence ≠ 50 Hz.** Oublier `servo.freq(50)` (ou laisser une fréquence PWM élevée) : le servo ne comprend pas le signal. **50 Hz, toujours.**

**Bornes non calibrées.** `MIN_DUTY`/`MAX_DUTY` génériques peuvent faire **buter** le servo en fin de course : il force, consomme à fond et chauffe. Ajuster les bornes au servo réel (resserrer si ça bute).

**Pico qui reboote au mouvement.** Le pic de courant d'un servo (jusqu'à ~500 mA) fait chuter la tension : **alimentation séparée** pour le servo, **GND commun**.

**GND non commun.** Servo sur batterie séparée sans GND relié au Pico : le signal n'a pas de référence, le servo se positionne aléatoirement.

**Servo qui bourdonne à l'arrêt.** Il tente d'atteindre une position bloquée mécaniquement. `servo.deinit()` coupe le signal et le laisse passif.

**Trop de servos.** Au-delà de 2 servos, alimentation externe obligatoire ; pour beaucoup de servos, un driver PWM dédié I2C (PCA9685, 16 canaux) décharge le Pico.

## Cas particulier — Servos à rotation continue, et bibliothèques

- Un *servo à rotation continue* (FS90R…) **tourne** à vitesse proportionnelle à l'impulsion : ~1,5 ms = arrêt, plus court/plus long = un sens ou l'autre. Utile pour un petit robot à roues, en remplacement d'un moteur CC + pont H. Pas de retour de position.
- Des **bibliothèques servo** MicroPython existent (installables via `mip`, voir [[micropython-bibliotheques|bibliothèques]]) et encapsulent la conversion angle→impulsion ; le pilotage PWM direct ci-dessus reste le socle à comprendre.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — premier essai de positionnement angulaire sur banc isolé.
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — servo dans la chaîne mesure → décision → mouvement (capteur → ouverture d'une trappe).
- **Étape 4 de la [[concept|phase de concept]]** — arbitrage servo / servo continu / moteur CC / pas-à-pas au moment de l'EAT.

Un servo bien câblé (alimentation séparée + GND commun) est l'actionneur le plus *prévisible* à intégrer — idéal pour les premières démonstrations.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-sortie-pwm|Piloter une sortie PWM]] — le signal sous-jacent (prérequis)
- [[micropython-moteur-cc|Piloter un moteur CC]] — pour rotation continue
- [[micropython-moteur-pas-a-pas|Piloter un moteur pas-à-pas]] — pour positionnement précis multi-tours
- [[micropython-alimentation|Alimenter la carte]] — dimensionner l'alimentation avec servos
- [[arduino-servomoteur|Piloter un servomoteur (Arduino)]] — l'équivalent C++ (`Servo.h`)
