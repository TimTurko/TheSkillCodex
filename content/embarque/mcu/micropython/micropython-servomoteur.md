---
title: Piloter un servomoteur en MicroPython
type: tuto
phases:
  - concept
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

Un **servomoteur** (ou *servo*) est un actionneur rotatif qui se positionne sur une **consigne d'angle** transmise par un signal codé en largeur d'impulsion (0° à 180° sur un servo standard). À la différence d'Arduino (qui a la bibliothèque `Servo.h`), MicroPython n'embarque pas de classe servo : on pilote le servo **directement en [[micropython-sortie-pwm|PWM]]**, un signal à **50 Hz** dont on règle la **largeur d'impulsion** (typiquement 0,5 à 2,5 ms). C'est plus proche du métal, et ça montre exactement ce qu'est un signal servo.

## À quoi ça sert ?

Le servo est l'actionneur le plus simple pour un mouvement de **position** contrôlé : direction d'un robot (roue directrice, gouvernail, axe de capteur orientable), tri/aiguillage, pince qui s'ouvre/ferme, visée. Limite : un servo standard ne couvre que ~180°. Pour la rotation continue, voir les *servos à rotation continue* (pilotés en vitesse) ou le [[micropython-moteur-cc|moteur CC]].

## Le signal servo

À **50 Hz** (période 20 ms), la position est codée par la **durée de l'impulsion haute** : ~0,5 ms = 0°, ~1,5 ms = 90° (milieu), ~2,5 ms = 180° (les bornes exactes varient d'un servo à l'autre, à calibrer). En `duty_u16` (0–65535 sur 20 ms) : 0,5 ms ≈ 1638, 1,5 ms ≈ 4915, 2,5 ms ≈ 8192.

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

3 fils : **rouge** → `+5 V` (VBUS, ou alimentation externe dès 2 servos / un servo de couple) ; **marron/noir** → `GND` ; **orange/jaune** → la broche de signal (ex. **GP15**). Le signal du Pico est en 3,3 V, accepté par la plupart des servos. **GND commun** si alimentation séparée.

![Câblage : servomoteur sur un Pico — signal sur GP15, fil rouge sur +5 V (VBUS), fil marron sur GND|600](/ressources/img/micropython-servomoteur/branchement-servo.svg)

### 3. Convertir un angle en impulsion

```python
from machine import Pin, PWM

servo = PWM(Pin(15))
servo.freq(50)                 # 50 Hz = signal servo

MIN_DUTY = 1638                # ~0,5 ms (0°)   -- à calibrer
MAX_DUTY = 8192                # ~2,5 ms (180°) -- à calibrer

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

Le servo va à trois positions. S'il tressaute sans atteindre les bornes, ajuster `MIN_DUTY`/`MAX_DUTY` (calibration, voir *Pièges*).

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
    pas = 1 + pot.read_u16() * 9 // 65535    # 1 à 10 degrés par pas
    a += sens * pas
    if a >= 180: a, sens = 180, -1
    if a <= 0:   a, sens = 0, 1
    angle(a)
    sleep_ms(20)                              # ~50 Hz de rafraîchissement
```

> [!info] Comment lire ce code
> Le va-et-vient repose sur `sens`, qui vaut `+1` (on monte vers 180°) ou `-1` (on descend). À chaque tour, on ajoute `sens * pas`. En butée, on **inverse `sens`** et le servo repart. Le `pas` est tiré du potentiomètre (`read_u16()` 0-65535 → 1 à 10°) : plus le pas est grand, plus le balayage est rapide.

Tourner le potentiomètre fait varier la vitesse de balayage, pratique pour calibrer en démo sans recompiler.

## Pièges

**Fréquence ≠ 50 Hz.** Oublier `servo.freq(50)` (ou laisser une fréquence PWM élevée) : le servo ne comprend pas le signal. **50 Hz, toujours.**

**Bornes non calibrées.** `MIN_DUTY`/`MAX_DUTY` génériques peuvent faire **buter** le servo en fin de course : il force, consomme à fond et chauffe. Ajuster les bornes au servo réel (resserrer si ça bute).

**Pico qui reboote au mouvement.** Le pic de courant d'un servo (jusqu'à ~500 mA) fait chuter la tension : **alimentation séparée** pour le servo, **GND commun**.

**GND non commun.** Servo sur batterie séparée sans GND relié au Pico : le signal n'a pas de référence, le servo se positionne aléatoirement.

**Servo qui bourdonne à l'arrêt.** Il tente d'atteindre une position bloquée mécaniquement. `servo.deinit()` coupe le signal et le laisse passif.

**Trop de servos.** Au-delà de 2 servos, alimentation externe obligatoire. Pour beaucoup de servos, un driver PWM dédié I2C (PCA9685, 16 canaux) décharge le Pico.

## Cas particulier — Servos à rotation continue, et bibliothèques

- Un *servo à rotation continue* (FS90R…) **tourne** à vitesse proportionnelle à l'impulsion : ~1,5 ms = arrêt, plus court/plus long = un sens ou l'autre. Utile pour un petit robot à roues, en remplacement d'un moteur CC + pont H. Pas de retour de position.
- Des **bibliothèques servo** MicroPython existent (installables via `mip`, voir [[micropython-bibliotheques|bibliothèques]]) et encapsulent la conversion angle→impulsion. Le pilotage PWM direct ci-dessus reste le socle à comprendre.

## Servos à retour de position

Un servo standard *commande* une position mais ne dit pas s'il l'a **réellement** atteinte : `angle(90)` envoie la consigne, sans garantie que l'axe soit bien à 90° (butée mécanique, surcharge, blocage extérieur). Un **servo à retour de position** (*feedback servo*) répond à ce besoin en exposant un **4ᵉ fil** qui rapporte l'angle mesuré, précieux sur un bras 3 axes pour savoir où sont *vraiment* les articulations, pas seulement où on leur a demandé d'aller.

Rappel utile : tout servo analogique se positionne déjà en **boucle fermée** grâce à un [[potentiometre|potentiomètre]] interne solidaire de l'axe (c'est lui qui permet au servo de « tenir » sa position). Un feedback servo ne fait que **sortir ce signal** vers une broche du Pico.

### Lire la position (retour analogique)

Le cas le plus courant est le **servo à retour analogique** (par exemple l'Adafruit Analog Feedback Servo) : le 4ᵉ fil donne directement la **tension du curseur** du potentiomètre interne, image de l'angle. On la lit sur une entrée [[micropython-capteur-analogique|ADC]] (→ [[adc]]).

![Branchement d'un servo à retour de position sur un Pico : 3 fils standards (rouge → VBUS, marron → GND, orange → GP15 commande) plus un fil de retour relié à GP26 (ADC).|520](/ressources/img/micropython-servomoteur/retour-position.svg)

```python
from machine import Pin, PWM, ADC
from time import sleep_ms

servo = PWM(Pin(15)); servo.freq(50)
retour = ADC(Pin(26))            # 4e fil : tension du potentiometre interne
MIN_DUTY, MAX_DUTY = 1638, 8192

# Valeurs ADC relevees en calibration (a mesurer pour CHAQUE servo)
ADC_0   = 7000                   # read_u16() quand le servo est a 0 deg
ADC_180 = 58000                  # read_u16() quand le servo est a 180 deg

def commande(deg):
    servo.duty_u16(int(MIN_DUTY + (deg/180)*(MAX_DUTY-MIN_DUTY)))

def angle_reel():
    brut = retour.read_u16()
    return (brut - ADC_0) * 180 // (ADC_180 - ADC_0)   # interpolation -> degres

while True:
    commande(90)                 # consigne : aller a 90 deg
    sleep_ms(500)
    print("Consigne 90 -> mesure", angle_reel(), "deg")
    sleep_ms(500)
```

> [!info] Comment lire ce code
> La consigne (`commande`) et la mesure (`angle_reel`) sont **deux choses indépendantes** : l'une dit au servo où aller, l'autre lit où il est *vraiment*. Les bornes `ADC_0` et `ADC_180` ne se devinent pas, elles se **calibrent** : on commande le servo à 0° puis à 180°, on relève `read_u16()` à chaque extrémité, et l'interpolation convertit entre les deux. Chaque servo a ses propres bornes (le potentiomètre n'est jamais parfaitement centré), d'où une calibration **par exemplaire**.

### À quoi ça sert

- **Confirmer l'arrivée** — comparer consigne et mesure repère un servo qui n'atteint pas sa cible (obstacle, surcharge) : `if abs(angle_reel() - 90) > 5: ...`.
- **Boucle de plus haut niveau** — asservir un mouvement à la position *réelle* plutôt qu'à la consigne supposée (→ [[micropython-pid|PID]]).
- **Bras 3 axes** — connaître l'angle effectif de chaque articulation pour vérifier une posture ou journaliser un mouvement.

### Variante — retour numérique (PWM)

Certains feedback servos n'utilisent **pas** un potentiomètre mais un **capteur à effet Hall**, et sortent la position sous forme d'un **signal PWM** (rapport cyclique proportionnel à l'angle) plutôt qu'une tension. Le **Parallax Feedback 360°** en est l'exemple courant : retour à 910 Hz, rapport cyclique de 2,7 % à 97,1 % sur un tour complet. Il se lit avec `time_pulse_us()` (mesure de la durée de l'impulsion), **pas** avec `read_u16()`. En contrepartie, le capteur Hall ne s'use pas et ne dérive pas comme un potentiomètre. À vérifier dans la datasheet du modèle avant de câbler : retour **analogique** (→ ADC) ou **PWM** (→ `time_pulse_us` sur une broche numérique).

> [!warning] Le retour n'est pas une métrologie
> Un retour par potentiomètre **dérive** (usure de la piste, température) : il convient pour un contrôle *indicatif* (« le bras est-il à peu près arrivé ? »), pas pour une mesure de précision. Pour un positionnement fin et durable, un asservissement sur capteur dédié est préférable (voir [[micropython-pid|le réglage PID]]).

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — premier essai de positionnement angulaire sur banc isolé.
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — servo dans la chaîne mesure → décision → mouvement (capteur → ouverture d'une trappe).
- **Étape 4 de la [[concept|phase de concept]]** — arbitrage servo / servo continu / moteur CC / pas-à-pas au moment de l'EAT.

Un servo bien câblé (alimentation séparée + GND commun) est l'actionneur le plus *prévisible* à intégrer, idéal pour les premières démonstrations.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-sortie-pwm|Piloter une sortie PWM]] — le signal sous-jacent (prérequis)
- [[micropython-moteur-cc|Piloter un moteur CC]] — pour rotation continue
- [[micropython-moteur-pas-a-pas|Piloter un moteur pas-à-pas]] — pour positionnement précis multi-tours
- [[micropython-alimentation|Alimenter la carte]] — dimensionner l'alimentation avec servos
- [[potentiometre|Potentiomètre]] — le capteur interne qu'un servo à retour de position expose
- [[adc|Convertisseur analogique-numérique]] — pour lire la tension du retour analogique
- [[micropython-pid|Réglage PID]] — pour un asservissement de position fin
- [[arduino-servomoteur|Piloter un servomoteur (Arduino)]] — l'équivalent C++ (`Servo.h`)
