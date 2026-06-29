---
title: Configurer les GPIO en MicroPython
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Les **GPIO** (*General Purpose Input/Output*) du Pico sont les broches numériques configurables en entrée ou en sortie pour lire ou émettre un signal binaire (0 V / 3,3 V). En MicroPython, tout passe par la classe **`Pin`** du module [[micropython-modules|`machine`]]. Configurer correctement un GPIO est le geste de base de tout programme embarqué — oublier le mode, confondre les tirages ou ignorer l'état flottant d'une entrée est la cause la plus fréquente des comportements imprévisibles en début de projet.

## À quoi ça sert ?

Tous les capteurs et actionneurs binaires (bouton, fin de course, LED, relais, buzzer, capteur de présence) passent par les GPIO. Trois configurations couvrent l'essentiel : **sortie** (`Pin.OUT`, qu'on pousse à 1 ou 0), **entrée tirée au haut** (`Pin.IN, Pin.PULL_UP`), **entrée tirée au bas** (`Pin.IN, Pin.PULL_DOWN`). Comprendre ces modes et le câblage qui va avec rend lisible la plupart des autres tutoriels.

## Procédure pas à pas

Quatre étapes : identifier la broche, créer l'objet `Pin` avec son mode, lire ou écrire, câbler proprement.

### 1. Identifier les broches

Le Pico expose les broches **GP0 à GP28** (numérotation *GP*, à ne pas confondre avec la numérotation physique des pattes). Particularités : **GP26 / GP27 / GP28** font aussi office d'entrées analogiques ([[micropython-capteur-analogique|ADC]]) ; certaines broches portent par défaut un bus (UART, I2C, SPI). La LED intégrée est sur **GP25** (raccourci `"LED"`).

Toutes les broches sont en **3,3 V** et **ne sont pas tolérantes 5 V** — voir [[niveaux-de-tension|niveaux de tension]].

![Brochage officiel du Raspberry Pi Pico : les 40 broches avec les numéros GPxx utilisés dans le code, les entrées analogiques (ADC) et les broches de bus (UART, I2C, SPI) repérées.|640](/ressources/img/micropython-gpio/brochage-pico.png)

*Source : Raspberry Pi Ltd — licence CC BY-ND, image non modifiée.*

### 2. Créer l'objet `Pin` avec son mode

Contrairement à Arduino (`pinMode` dans `setup()`), on crée un **objet** par broche, en général en début de programme :

```python
from machine import Pin

led = Pin(15, Pin.OUT)                 # sortie
bouton = Pin(14, Pin.IN, Pin.PULL_UP)  # entrée, résistance interne vers 3,3 V
```

- **`Pin.OUT`** — la broche pilote un signal vers l'extérieur (LED, relais, transistor).
- **`Pin.IN, Pin.PULL_UP`** — entrée avec résistance interne vers `3,3 V`. **Logique inversée** : lit `1` au repos, `0` quand on la connecte à GND (typiquement par un bouton).
- **`Pin.IN, Pin.PULL_DOWN`** — entrée avec résistance interne vers GND : lit `0` au repos, `1` quand on l'amène à 3,3 V. *(Le Pico offre les deux tirages en interne — un atout par rapport à l'AVR de l'Arduino, qui n'a qu'un pull-up.)*
- **`Pin.IN`** seul — entrée **flottante**, sans polarisation : lecture aléatoire si rien n'est branché. À réserver aux cas avec résistance externe.

### 3. Lire ou écrire

```python
while True:
    if bouton.value() == 0:    # bouton appuyé (pull-up : 0 = appuyé)
        led.on()
    else:
        led.off()
```

`bouton.value()` renvoie `1` ou `0`. Côté sortie, `led.value(1)`/`led.value(0)`, ou les raccourcis `led.on()` / `led.off()` / `led.toggle()`.

### 4. Câbler proprement

- **Sortie sur LED** : résistance série de 220 Ω à 1 kΩ entre la broche et l'anode (+) de la LED, cathode (−) vers GND. **Sans résistance, la LED ou la broche s'abîme.**
- **Entrée sur bouton, `PULL_UP`** : un côté du bouton sur la broche, l'autre côté sur GND. Rien d'autre.
- **Entrée sur bouton, `Pin.IN` seul** : il faut une résistance externe (~10 kΩ vers 3,3 V ou GND) pour un état de repos défini.

![Montage : LED + résistance sur GP15 et bouton entre GP14 et GND, sur un Raspberry Pi Pico|600](/ressources/img/micropython-gpio/montage-led-bouton.svg)

## Exemple — Bouton qui allume une LED

Câblage et code complets pour valider `Pin.OUT` + `Pin.IN` + lecture/écriture.

**Câblage** : LED anode → résistance 220 Ω → GP15 ; cathode → GND. Bouton entre GP14 et GND (`PULL_UP`, pas de résistance externe).

```python
from machine import Pin

led = Pin(15, Pin.OUT)
bouton = Pin(14, Pin.IN, Pin.PULL_UP)

while True:
    if bouton.value() == 0:
        led.on()
    else:
        led.off()
```

Lancez, appuyez sur le bouton — la LED s'allume. Relâchez — elle s'éteint. Si la LED reste allumée en permanence, vous avez probablement câblé un côté du bouton sur 3,3 V au lieu de GND.

## Pièges

**Broche flottante.** Une entrée en `Pin.IN` sans tirage capte du bruit — lecture aléatoire qui peut sembler répondre au passage de la main (effet antenne 50 Hz). Pour un bouton, presque toujours `PULL_UP` + bouton vers GND.

**Logique inversée du pull-up.** Un bouton en `PULL_UP` lit `0` quand appuyé. Tester `if bouton.value() == 1` allumera la LED quand le bouton est **relâché** — inverse du comportement attendu.

**LED sans résistance.** Une LED branchée directement tire un courant excessif qui la grille (ou abîme la broche). Toujours une résistance série (220 Ω à 1 kΩ pour une LED standard sur 3,3 V).

**Courant max de broche dépassé.** Une broche du Pico délivre par défaut ~4 mA, **~12 mA au maximum** (force de sortie réglable). C'est **moins** qu'un Arduino (20 mA) : on passe par un transistor ou un module dédié encore plus tôt (voir [[micropython-sortie-tor|piloter une sortie TOR]]).

**Réflexe 5 V.** Le Pico n'est **pas tolérant 5 V** : appliquer 5 V sur une entrée peut détruire la broche. Adapter le niveau d'un capteur 5 V (pont diviseur ou translateur).

## Cas particulier — PWM, ADC et bus

Toutes les broches ne sont pas équivalentes :

- **ADC** — **GP26 / GP27 / GP28** sont les entrées analogiques ([[micropython-capteur-analogique|`ADC`]]).
- **PWM** — sur le Pico, **toutes** les broches GPIO peuvent générer un signal PWM (voir [[micropython-sortie-pwm|PWM]]) — pas de broches « `~` » dédiées comme sur Arduino.
- **Bus** — des broches portent par défaut l'UART, l'I2C, le SPI (voir [[bus-de-communication|bus de communication]]). Utiliser une broche en GPIO la rend indisponible pour son bus.

Le pinout officiel de la carte est la référence — gardez-le à portée de main.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — premiers essais individuels d'entrée et de sortie (bouton, LED, fin de course) avant d'assembler.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — validation pièce-par-pièce des E/S avant tests pyramidaux.

Maîtriser ces modes sur un petit montage isolé est la fondation sur laquelle reposent presque tous les tutoriels suivants — inutile d'enchaîner sur les capteurs ou les actionneurs avant que ce socle ne soit ferme.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[gpio|GPIO]] — notion transverse (modes, état au boot, GPIO sur autres familles)
- [[micropython-entree-tor|Lire une entrée TOR]] — la suite naturelle (bouton avec anti-rebond)
- [[micropython-sortie-tor|Piloter une sortie TOR]] — la sortie au-delà de la LED (relais)
- [[arduino-gpio|Configurer les GPIO Arduino]] — l'équivalent en C++ (à comparer)
- [[niveaux-de-tension|Niveaux de tension]] — 3,3 V, Pico non tolérant 5 V
