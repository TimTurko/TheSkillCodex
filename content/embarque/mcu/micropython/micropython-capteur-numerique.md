---
title: Lire un capteur numérique
type: tuto
phases:
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

Un **capteur numérique** délivre une information codée en signal binaire — par opposition à un capteur analogique qui sort une tension continue. La codification varie : niveau logique simple (présence / absence), impulsion dont la largeur encode la mesure (ultrason), protocole propriétaire 1-wire (DHT11), ou trame I2C / SPI (BMP280, MPU6050). Cette fiche couvre les deux premiers cas — les bus I2C et SPI ont leurs propres tutoriels.

## À quoi ça sert ?

Les capteurs numériques sont des briques de mesure très utilisées : détecter une présence (PIR), mesurer une distance (HC-SR04), mesurer une vitesse de rotation (encodeur à effet Hall). Leur intérêt sur l'analogique : insensibilité au bruit du câble, valeur déjà conditionnée. Leur contrepartie : on dépend de la documentation du capteur (protocole, timing, bibliothèque).

## Procédure pas à pas

Quatre étapes : identifier le type de signal, câbler, lire le datasheet, écrire le code.

### 1. Identifier le type de signal

- **Niveau logique** — sortie `1` ou `0` selon un événement (PIR, présence inductif, fin de course magnétique). **Lecture par `Pin.value()`.**
- **Impulsion temporelle** — la **largeur** d'une impulsion code la mesure (ultrason HC-SR04). **Lecture par `machine.time_pulse_us()`.**
- **Protocole propriétaire** — séquence binaire que seule une bibliothèque décode (DHT11/22 en 1-wire, DS18B20). MicroPython embarque par exemple le module **`dht`** ; voir [[micropython-bibliotheques|utiliser une bibliothèque]].

La datasheet indique systématiquement à laquelle des trois familles le capteur appartient.

### 2. Câbler le HC-SR04

Capteur emblématique du projet école. **Attention** : son `Echo` sort en **5 V**, or le Pico n'est pas tolérant 5 V — il faut un **pont diviseur** (ou un module 3,3 V) sur la ligne Echo.

- `VCC` → `+5 V` (VBUS) ; `GND` → `GND` ;
- `Trig` → GP9 (sortie) ;
- `Echo` → **pont diviseur** → GP10 (entrée).

![Câblage du HC-SR04 sur le Pico : VCC sur +5 V (VBUS), Trig sur GP9, Echo ramené à ~3,3 V par un pont diviseur (≈ 1 kΩ / 2 kΩ) avant GP10, masse commune.|640](/ressources/img/micropython-capteur-numerique/montage-capteur.svg)

### 3. Lire le datasheet du HC-SR04

Impulsion de **10 µs sur `Trig`** pour déclencher ; `Echo` renvoie une impulsion proportionnelle à l'aller-retour de l'onde. Son ≈ 343 m/s à 20 °C → distance = durée × 343 / 2. Plage utile 2 cm – 4 m.

### 4. Écrire le code

`time_pulse_us(pin, niveau, timeout_us)` mesure la durée d'une impulsion (l'équivalent du `pulseIn` d'Arduino) et renvoie une valeur négative en cas de dépassement.

```python
from machine import Pin, time_pulse_us
from time import sleep, sleep_us

trig = Pin(9, Pin.OUT)
echo = Pin(10, Pin.IN)

def mesurer_cm():
    trig.low()
    sleep_us(2)
    trig.high()
    sleep_us(10)          # impulsion de declenchement
    trig.low()
    duree = time_pulse_us(echo, 1, 30000)   # timeout 30 ms
    if duree < 0:
        return -1          # hors plage / pas d'echo
    return duree * 0.0343 / 2

while True:
    d = mesurer_cm()
    print("Hors plage" if d < 0 else "{:.1f} cm".format(d))
    sleep(0.1)            # 10 Hz
```

Approchez/éloignez la main — la distance s'affiche au [[micropython-repl|REPL]].

Prendre capture d'écran de *le Shell de Thonny affichant une suite de mesures de distance en cm pendant qu'une main bouge devant le capteur*.

## Exemple — Détecteur de seuil avec LED d'alerte

```python
from machine import Pin, time_pulse_us
from time import sleep, sleep_us

trig = Pin(9, Pin.OUT)
echo = Pin(10, Pin.IN)
led  = Pin(15, Pin.OUT)
SEUIL_CM = 20

def mesurer_cm():
    trig.low(); sleep_us(2)
    trig.high(); sleep_us(10); trig.low()
    d = time_pulse_us(echo, 1, 30000)
    return -1 if d < 0 else d * 0.0343 / 2

while True:
    d = mesurer_cm()
    if 0 < d < SEUIL_CM:
        led.on()
        print("ALERTE :", round(d, 1), "cm")
    else:
        led.off()
    sleep(0.1)
```

La factorisation en [[micropython-fonctions|fonction]] `mesurer_cm()` annonce l'organisation du code embarqué (voir [[firmware|firmware]]).

## Pièges

**Confondre numérique et analogique.** Un capteur de présence à niveau logique se lit par `Pin.value()`, pas par l'ADC. À l'inverse, un LM35 est *analogique* malgré son nom — voir [[micropython-capteur-analogique|lire un capteur analogique]].

**Echo 5 V branché directement sur le Pico.** Le HC-SR04 sort `Echo` à 5 V : sans pont diviseur, on endommage la broche (Pico non tolérant 5 V). Piège propre aux cartes 3,3 V.

**Timeout de `time_pulse_us()` oublié.** Sans timeout, l'appel peut bloquer si aucun écho ne revient. Toujours passer le 3ᵉ argument (en µs) ; pour 4 m, ~23 ms → 30 ms.

**Valeurs aberrantes.** Le HC-SR04 renvoie parfois des mesures fantaisistes — filtrer (médiane sur 3-5 mesures) avant d'asservir (voir filtrer des mesures).

**Mesure trop fréquente.** Cycle de mesure ≈ 60 ms ; mesurer plus vite donne des résultats incohérents. 10 Hz est un bon rythme.

**PIR pas stabilisé.** Un PIR demande 30–60 s de stabilisation après mise sous tension ; lire pendant ce temps donne du bruit.

## Cas particulier — Capteurs sur bus I2C ou SPI

Beaucoup de capteurs modernes (BMP280, MPU6050, VL53L0X) communiquent par bus — numériques mais d'une catégorie traitée à part : voir [[micropython-i2c|I2C]] et [[micropython-spi|SPI]]. Le câblage et le code diffèrent radicalement.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — chaque capteur se valide isolément avant intégration : câblage, lecture brute, plage observée.
- **Étape 1 de la [[integration-et-tests|phase d'intégration et tests]]** — chaque capteur requalifié unitairement.

Brancher un capteur, lire sa doc, en sortir une mesure crédible — c'est la boucle qui fait la PoC, à automatiser pour tous les capteurs du projet.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-capteur-analogique|Lire un capteur analogique]] — l'alternative continue
- [[micropython-i2c|I2C]] — bus pour capteurs évolués
- [[micropython-bibliotheques|Utiliser une bibliothèque]] — pour DHT, DS18B20, etc.
- [[lire-une-datasheet|Lire une datasheet]] — identifier la nature du signal
- [[arduino-capteur-numerique|Lire un capteur numérique (Arduino)]] — l'équivalent C++
