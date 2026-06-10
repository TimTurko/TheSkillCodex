---
title: Piloter un moteur CC
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-sortie-pwm
  - lire-une-datasheet
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Un **moteur à courant continu** (moteur CC) produit un mouvement rotatif continu à **vitesse** et **sens** variables. À la différence du [[micropython-servomoteur|servomoteur]] qui se positionne, le moteur CC tourne en continu : sa **vitesse** se règle par [[micropython-sortie-pwm|PWM]], son **sens** par l'inversion de polarité aux bornes. Cette inversion depuis un microcontrôleur impose un **pont en H** (DRV8833, TB6612FNG, L298N) — c'est sur ce circuit que se concentre la fiche. En MicroPython, deux `Pin` donnent le sens, un `PWM` la vitesse.

## À quoi ça sert ?

Cas typiques : **robot mobile à deux roues** (2 moteurs CC, sens/vitesse indépendants), **convoyeur/treuil/bras tournant**, **pompe ou ventilateur** réglé en vitesse.

| Actionneur | Position | Vitesse | Précision angulaire |
|---|---|---|---|
| Servo standard | ✅ 0–180° | mauvaise | moyenne |
| **Moteur CC + pont H** | ❌ | ✅ continue | aucune sans encodeur |
| Moteur pas-à-pas | ✅ par pas | ✅ contrôlée | excellente |

## Procédure pas à pas

Quatre étapes : choisir le driver, câbler, alimenter, écrire le code.

### 1. Choisir le driver — attention à la logique 3,3 V

| Driver | Tension moteur | Courant | Logique 3,3 V | Notes |
|---|---|---|---|---|
| **DRV8833** | 2,7–10,8 V | 1,2 A/canal | ✅ oui | compact, idéal Pico |
| **TB6612FNG** | 4,5–13,5 V | 1,2 A/canal | ✅ oui | MOSFET, bon rendement |
| **L298N** | 5–35 V | 2 A/canal | ⚠️ entrées prévues 5 V | répandu, mais 3,3 V parfois marginal + grosse chute de tension |

Sur le Pico (sorties **3,3 V**), **préférer DRV8833 ou TB6612FNG**, dont les entrées logiques acceptent 3,3 V. Le L298N, conçu pour des entrées 5 V, peut mal interpréter 3,3 V — et perd ~2 V dans le pont. On prend le **DRV8833** pour la suite.

### 2. Câbler (DRV8833, un moteur)

| DRV8833 | Pico |
|---|---|
| `AIN1` | GP12 (sens 1) |
| `AIN2` | GP11 (sens 2) |
| `AO1`, `AO2` | bornes du moteur |
| `VCC` (logique) | 3,3 V |
| `VM` (puissance) | alimentation moteur (selon le moteur) |
| `GND` | GND alimentation **+ GND Pico** (commun) |

Le DRV8833 attend **deux signaux par moteur** : on fait varier la **vitesse en envoyant un PWM sur `AIN1`** (sens avant) ou `AIN2` (sens arrière), l'autre étant à 0.

Prendre capture d'écran ou photo de *un module DRV8833 câblé sur un Pico, moteur sur AO1/AO2, alimentation moteur sur VM*.

### 3. Alimenter

**Alimentation moteur séparée** dès que le moteur tire plus de ~50 mA : pile/pack adapté au moteur, batterie LiPo, ou alimentation de table. **GND commun** Pico + alimentation moteur. Un **condensateur 100 µF** près des bornes moteur absorbe les pics.

### 4. Écrire le code

```python
from machine import Pin, PWM
from time import sleep

av = PWM(Pin(12)); av.freq(1000)     # AIN1 : sens avant
ar = PWM(Pin(11)); ar.freq(1000)     # AIN2 : sens arriere

def avancer(vitesse):                # vitesse 0..65535
    ar.duty_u16(0)
    av.duty_u16(vitesse)

def reculer(vitesse):
    av.duty_u16(0)
    ar.duty_u16(vitesse)

def arret():
    av.duty_u16(0)
    ar.duty_u16(0)

while True:
    avancer(30000); sleep(2)
    arret();        sleep(0.5)
    reculer(50000); sleep(2)
    arret();        sleep(0.5)
```

Le moteur tourne dans un sens, s'arrête, repart dans l'autre. (Sur un L298N, on garderait plutôt 2 `Pin` de sens + 1 `PWM` sur `ENA` ; le principe est le même.)

## Exemple — Vitesse au potentiomètre + bouton de sens

Élégance MicroPython : `read_u16()` et `duty_u16()` sont tous deux **16 bits** → la vitesse du potentiomètre pilote le PWM **sans mise à l'échelle**.

```python
from machine import Pin, PWM, ADC
from time import ticks_ms, ticks_diff

av = PWM(Pin(12)); av.freq(1000)
ar = PWM(Pin(11)); ar.freq(1000)
pot = ADC(Pin(26))
bouton = Pin(14, Pin.IN, Pin.PULL_UP)

sens_avant = True
etat_stable, dernier_btn = 1, 1
dernier_chg = ticks_ms()

while True:
    vitesse = pot.read_u16()              # 0..65535, directement utilisable

    lect = bouton.value()                 # anti-rebond + front
    if lect != dernier_btn:
        dernier_chg = ticks_ms(); dernier_btn = lect
    if ticks_diff(ticks_ms(), dernier_chg) > 30 and lect != etat_stable:
        etat_stable = lect
        if etat_stable == 0:
            sens_avant = not sens_avant

    if sens_avant:
        ar.duty_u16(0); av.duty_u16(vitesse)
    else:
        av.duty_u16(0); ar.duty_u16(vitesse)
```

## Pièges

**Logique 3,3 V sur un L298N.** Les entrées du L298N sont prévues pour 5 V : 3,3 V peut être mal interprété. Sur le Pico, préférer **DRV8833/TB6612** (entrées 3,3 V). Piège propre aux cartes 3,3 V.

**Pico qui reboote au démarrage du moteur.** Pic de courant → chute de tension. Alimentation **séparée** pour le moteur, condensateur 100 µF aux bornes.

**Pas de GND commun.** Signaux de sens sans référence → le pont bascule aléatoirement. Toujours GND commun.

**Inversion de sens instantanée.** Passer brutalement d'un sens à l'autre (sans `arret()` intermédiaire) provoque un courant inverse violent. Bonne pratique : `arret()` + courte pause avant l'inversion.

**Deux PWM hauts en même temps.** Mettre `AIN1` **et** `AIN2` à une valeur > 0 = frein/court-circuit interne ; n'en piloter qu'un à la fois (l'autre à 0).

**Calage du moteur (rotor bloqué).** Le moteur consomme à fond (5–10× le nominal) sans tourner et chauffe. Détecter (mesure de courant, capteur de rotation) et couper.

**PWM trop basse, moteur audible.** Une fréquence PWM dans la bande audible fait siffler le moteur ; régler `freq()` (souvent 1–20 kHz) selon le moteur.

## Cas particulier — Boucle fermée avec encodeur

Un moteur CC nu n'a aucun retour : la vraie vitesse dépend de l'alimentation, de la charge, de l'usure. Pour un asservissement précis : **encodeur** sur l'arbre (lecture par [[micropython-interruptions|interruptions]]) + **régulation PID** sur la vitesse mesurée (voir [[micropython-pid|régulation PID]]). C'est l'évolution naturelle d'un robot qui doit suivre une trajectoire répétable.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — validation moteur + driver sur banc isolé (rotation, sens, plage de vitesse).
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — intégration dans la chaîne mesure → décision → mouvement.
- **Étape 4 de la [[concept|phase de concept]]** — arbitrage moteur CC / pas-à-pas / servo selon le besoin.

Un robot à 2 roues + DRV8833 + 2 moteurs CC est l'un des PoC école les plus pédagogiques : GPIO, PWM, alimentation séparée et anti-rebond dans un même projet.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-sortie-pwm|Piloter une sortie PWM]] — prérequis (vitesse, fréquence)
- [[micropython-servomoteur|Servomoteur]] · [[micropython-moteur-pas-a-pas|Moteur pas-à-pas]] — alternatives
- [[micropython-interruptions|Interruptions]] — lire un encodeur en boucle fermée
- [[micropython-pid|Régulation PID]] — asservir la vitesse
- [[lire-une-datasheet|Lire une datasheet]] — dimensionner driver + alimentation
- [[arduino-moteur-cc|Piloter un moteur CC (Arduino)]] — l'équivalent C++
