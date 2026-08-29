---
title: Piloter un moteur pas-à-pas en MicroPython
type: tuto
phases:
  - concept
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-gpio
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Un **moteur pas-à-pas** (*stepper*) tourne par **pas angulaires discrets** (souvent 200 pas/tour, 1,8°/pas) sous la commande séquentielle de plusieurs bobines. La position du rotor est donc *connue par construction* sans capteur de retour, d'où son intérêt pour le positionnement précis multi-tours (imprimantes 3D, CNC). Cette fiche couvre deux drivers : **28BYJ-48 + ULN2003** (pédagogique) et **NEMA17 + A4988** (industriel). En MicroPython, sans bibliothèque dédiée intégrée, on **séquence les bobines à la main**, ce qui montre exactement comment un pas-à-pas avance.

## À quoi ça sert ?

Cas typiques : **positionnement angulaire précis** (sans capteur, depuis un *home* connu), **mouvement linéaire par vis** (axes d'imprimante 3D, CNC), **rotation très lente** sans à-coups, **vannes multitours**.

| Actionneur | Position | Couple | Précision |
|---|---|---|---|
| Servo standard | 0–180° | faible | moyenne |
| Moteur CC | aucun | bon | nul (sans encodeur) |
| **Moteur pas-à-pas** | par pas | moyen | excellente |

## Procédure pas à pas

Quatre étapes : choisir le couple moteur+driver, câbler, séquencer, piloter.

### 1. Choisir le moteur et le driver

- **Pédagogique : 28BYJ-48 + ULN2003** — moteur 5 V, réducteur 1:64 (≈ 2048 pas/tour en pas entier, 4096 en demi-pas), module ULN2003 avec 4 LEDs qui suivent les phases.
- **Industriel : NEMA17 + A4988** — moteur bipolaire 200 pas/tour, driver à 2 broches (`STEP`, `DIR`), microstepping. Utilisé en imprimante 3D / CNC.

Pour un premier essai, le **28BYJ-48 + ULN2003**.

### 2. Câbler (28BYJ-48 + ULN2003)

Le moteur s'enfiche sur le module ULN2003. Côté Pico :

| ULN2003 | Pico |
|---|---|
| IN1 | GP2 |
| IN2 | GP3 |
| IN3 | GP4 |
| IN4 | GP5 |
| `+` | 5 V (VBUS) ou alimentation externe |
| `−` | GND |

Les entrées de l'ULN2003 (Darlington) acceptent le 3,3 V du Pico.

![Câblage d'un 28BYJ-48 via son module ULN2003 sur le Pico : IN1–IN4 sur GP2–GP5, alimentation 5 V (VBUS ou externe) sur « + », moteur enfiché sur le module, masse commune.|640](/ressources/img/micropython-moteur-pas-a-pas/branchement-stepper.svg)

### 3. Séquencer les bobines

On applique une **séquence de motifs** sur les 4 broches. La séquence **demi-pas** (8 étapes) donne un mouvement plus fin et plus lisse :

```python
from machine import Pin
from time import sleep_ms

broches = [Pin(p, Pin.OUT) for p in (2, 3, 4, 5)]   # IN1..IN4

SEQ = [                       # demi-pas (8 étapes)
    [1,0,0,0], [1,1,0,0], [0,1,0,0], [0,1,1,0],
    [0,0,1,0], [0,0,1,1], [0,0,0,1], [1,0,0,1],
]

def pas(nb, sens=1, delai=2):
    seq = SEQ if sens > 0 else SEQ[::-1]
    for _ in range(nb):
        for motif in seq:
            for broche, v in zip(broches, motif):
                broche.value(v)
            sleep_ms(delai)
```

### 4. Piloter

```python
PAS_PAR_TOUR = 4096           # 28BYJ-48 en demi-pas

while True:
    pas(PAS_PAR_TOUR, sens=1)     # un tour horaire
    sleep_ms(1000)
    pas(PAS_PAR_TOUR, sens=-1)    # un tour anti-horaire
    sleep_ms(1000)
```

Le moteur fait un tour, une pause, repart en sens inverse. Si l'ordre des broches est faux, il **vibre sans tourner** (voir *Pièges*).

### Variante NEMA17 + A4988 (STEP/DIR)

Le A4988 ne demande que deux broches logiques :

```python
from machine import Pin
from time import sleep_us, sleep_ms

step = Pin(2, Pin.OUT)
dir_ = Pin(3, Pin.OUT)

def pas_a4988(nb, sens=1, delai_us=800):
    dir_.value(1 if sens > 0 else 0)
    for _ in range(nb):
        step.value(1); sleep_us(2)        # impulsion STEP
        step.value(0); sleep_us(delai_us) # délai = vitesse
```

**`VMOT` du A4988 exige un condensateur 100 µF** vers GND (sinon destruction à l'allumage), une alimentation moteur 12–24 V, et le courant réglé au potentiomètre du driver.

## Exemple — Un quart de tour par appui de bouton

```python
from machine import Pin
from time import sleep_ms, ticks_ms, ticks_diff

broches = [Pin(p, Pin.OUT) for p in (2,3,4,5)]
SEQ = [[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,1,1,0],
       [0,0,1,0],[0,0,1,1],[0,0,0,1],[1,0,0,1]]
bouton = Pin(14, Pin.IN, Pin.PULL_UP)
PAS_PAR_TOUR = 4096

def pas(nb):
    for _ in range(nb):
        for motif in SEQ:
            for b, v in zip(broches, motif): b.value(v)
            sleep_ms(2)

etat_stable, dernier = 1, 1
chg = ticks_ms()
while True:
    lect = bouton.value()
    if lect != dernier:
        chg = ticks_ms(); dernier = lect
    if ticks_diff(ticks_ms(), chg) > 30 and lect != etat_stable:
        etat_stable = lect
        if etat_stable == 0:                 # front : un quart de tour par appui
            pas(PAS_PAR_TOUR // 4)
```

> [!info] Comment lire ce code
> L'anti-rebond non bloquant suit le même motif que pour le [[micropython-moteur-cc|moteur CC]] : `dernier` repère l'instant où la lecture brute change (et relance le chronomètre), `etat_stable` retient l'état confirmé après 30 ms. Le quart de tour n'est déclenché que sur un **front descendant** (`PULL_UP` → appui = 0). **Attention** : `pas()` est **bloquant**. Pendant le quart de tour, la boucle est gelée et le bouton n'est pas lu, donc un appui pendant le mouvement est ignoré. Pour réagir en continu, structurer en [[micropython-programmation-non-bloquante|non bloquant]].

## Pièges

**Ordre des phases incorrect.** L'ordre des 4 broches détermine le séquencement. Faux → le moteur vibre sans tourner. Vérifier le câblage IN1..IN4 et l'ordre dans `broches`.

**Courant insuffisant.** Un 28BYJ-48 tire ~200–300 mA, un NEMA17 1–1,7 A/bobine. Alimenter par le 3,3 V du Pico fait rebooter ; alimentation séparée (au moins pour NEMA17), **GND commun**.

**A4988 sans condensateur sur VMOT.** Destruction quasi immédiate à l'allumage. **Condensateur 100 µF** entre VMOT et GND, près du driver.

**Réglage du courant A4988.** Trop bas → perte de pas ; trop haut → surchauffe. Calibrer Vref au multimètre selon la datasheet du driver.

**Perte de pas sous charge.** Trop vite ou charge trop forte → le moteur *saute* des pas, la position calculée diverge. Réduire la vitesse (`delai` plus grand), augmenter le couple.

**Séquencement bloquant.** La fonction `pas()` est bloquante : rien d'autre ne s'exécute pendant le mouvement. Pour du parallélisme, structurer en non bloquant (voir [[micropython-programmation-non-bloquante|programmation non bloquante]]) ou un pilotage par interruption/timer.

**Consommation à l'arrêt (28BYJ-48).** Bobines maintenues = ~150 mA en continu, même à l'arrêt, et l'ULN2003 chauffe. Couper l'alimentation (mettre les 4 broches à 0) entre deux mouvements si la position n'a pas besoin d'être tenue.

## Cas particulier — Bibliothèques et microstepping

- Des **bibliothèques pas-à-pas** MicroPython existent (pour 28BYJ-48, ou type `AccelStepper` avec rampes), installables via `mip` (voir [[micropython-bibliotheques|bibliothèques]]) — elles ajoutent accélération et non-blocage.
- Les drivers A4988/DRV8825/TMC2209 supportent le **microstepping** (1/2 … 1/256) : mouvement plus lisse et silencieux, au prix d'un couple effectif moindre aux positions intermédiaires.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — validation moteur + driver : tour complet dans les deux sens, vitesse max sans perte de pas.
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — intégration dans une chaîne de mouvement précis (axe X, distributeur).
- **Étape 4 de la [[concept|phase de concept]]** — arbitrage pas-à-pas / servo / moteur CC + encodeur selon précision + couple + disponibilité.

Le pas-à-pas est l'actionneur des projets qui visent un mouvement répétable précis sans capteur, résultats spectaculaires en démonstration.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-gpio|Configurer les GPIO]] — prérequis (séquencement des broches)
- [[micropython-moteur-cc|Piloter un moteur CC]] · [[micropython-servomoteur|Servomoteur]] — alternatives
- [[micropython-programmation-non-bloquante|Programmation non bloquante]] — pour un séquencement non bloquant
- [[micropython-interruptions|Interruptions]] — lecture de fin de course en parallèle du mouvement
- [[micropython-alimentation|Alimenter la carte]] — dimensionnement avec moteur de puissance
- [[arduino-moteur-pas-a-pas|Piloter un moteur pas-à-pas (Arduino)]] — l'équivalent C++ (`Stepper.h`)
