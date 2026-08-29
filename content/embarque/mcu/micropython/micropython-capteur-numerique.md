---
title: Lire un capteur numérique
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-gpio
  - micropython-repl
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Un **capteur numérique** délivre une information codée en signal binaire, par opposition à un capteur analogique qui sort une tension continue. La codification varie : niveau logique simple (présence / absence), impulsion dont la largeur encode la mesure (ultrason), protocole propriétaire 1-wire (DHT11), ou trame I2C / SPI (BMP280, MPU6050). Cette fiche couvre les deux premiers cas : les bus I2C et SPI ont leurs propres tutoriels.

## À quoi ça sert ?

Les capteurs numériques sont des briques de mesure très utilisées : détecter une présence (PIR), mesurer une distance (HC-SR04), mesurer une vitesse de rotation (encodeur à effet Hall). Leur intérêt sur l'analogique : insensibilité au bruit du câble, valeur déjà conditionnée. Leur contrepartie : on dépend de la documentation du capteur (protocole, timing, bibliothèque).

## Procédure pas à pas

D'abord identifier le type de signal, puis mettre la méthode en pratique sur deux capteurs de proximité : un **capteur IR à seuil** lu d'un simple `Pin.value()` (le cas minimal), puis le **HC-SR04** à ultrason qui *mesure* la distance par impulsion (câblage, datasheet, code).

### 1. Identifier le type de signal

- **Niveau logique** — sortie `1` ou `0` selon un événement (PIR, présence inductif, fin de course magnétique). **Lecture par `Pin.value()`.**
- **Impulsion temporelle** — la **largeur** d'une impulsion code la mesure (ultrason HC-SR04). **Lecture par `machine.time_pulse_us()`.**
- **Protocole propriétaire** — séquence binaire que seule une bibliothèque décode (DHT11/22 en 1-wire, DS18B20). MicroPython embarque par exemple le module **`dht`**. Voir [[micropython-bibliotheques|utiliser une bibliothèque]].

La datasheet indique systématiquement à laquelle des trois familles le capteur appartient.

### 2. Le cas le plus simple — un capteur IR à seuil

Avant l'ultrason, le cas minimal : un capteur qui sort directement `1` ou `0`, lu d'un `Pin.value()`. Dans le thème de la distance, l'exemple courant est le **module IR de détection d'obstacle** (type FC-51) : il émet un faisceau infrarouge et bascule sa sortie quand un obstacle réfléchit ce faisceau en deçà d'un seuil réglé par un potentiomètre embarqué. Trois fils, aucune temporisation.

![Principe du capteur IR de détection d'obstacle : l'émetteur (IR transmitter) envoie un faisceau infrarouge qui se réfléchit sur l'objet ; le récepteur (IR receiver) capte le faisceau réfléchi, ce qui fait basculer la sortie du module.|520](/ressources/img/arduino-capteur-numerique/how-ir-sensor-works.gif)

- `VCC` → `+5 V` (VBUS), `GND` → `GND`, `OUT` → GP16 (entrée)

```python
from machine import Pin
from time import sleep

ir  = Pin(16, Pin.IN)
led = Pin(15, Pin.OUT)

while True:
    obstacle = (ir.value() == 0)   # ce module : 0 = obstacle détecté (actif-bas)
    led.value(obstacle)            # LED allumée si un obstacle est proche
    print("Obstacle" if obstacle else "Libre")
    sleep(0.2)
```

La seule subtilité est le **niveau actif** : la plupart de ces modules sont **actifs-bas** (`OUT` tombe à `0` quand un obstacle est détecté), d'où le test `== 0` — à vérifier sur la fiche-produit. Pas d'anti-rebond : contrairement à un bouton (contact mécanique, voir [[micropython-entree-tor|lire une entrée TOR]]), la sortie est **électronique et déjà propre**. Ce capteur signale seulement *un seuil franchi*. Pour mesurer la distance réelle, voir le cas suivant.

### 3. Câbler le HC-SR04

Capteur emblématique du projet école. **Attention** : son `Echo` sort en **5 V**, or le Pico n'est pas tolérant 5 V. Il faut un **pont diviseur** (ou un module 3,3 V) sur la ligne Echo.

- `VCC` → `+5 V` (VBUS), `GND` → `GND` ;
- `Trig` → GP9 (sortie) ;
- `Echo` → **pont diviseur** → GP10 (entrée).

![Câblage du HC-SR04 sur le Pico : VCC sur +5 V (VBUS), Trig sur GP9, Echo ramené à ~3,3 V par un pont diviseur (≈ 1 kΩ / 2 kΩ) avant GP10, masse commune.|640](/ressources/img/micropython-capteur-numerique/montage-capteur.svg)

### 4. Lire le datasheet du HC-SR04

Le HC-SR04 fonctionne au **temps de vol** : l'émetteur envoie une salve d'ultrasons, l'onde rebondit sur l'objet, puis revient au récepteur. Le **temps d'aller-retour**, connaissant la vitesse du son, donne la distance : c'est ce que la broche `Echo` restitue.

![Principe du capteur à ultrasons HC-SR04 : l'émetteur (Transmitter) envoie une onde sonore qui rebondit sur l'objet ; le récepteur (Receiver) capte l'onde réfléchie (écho). Le temps écoulé entre l'émission et la réception donne la distance.|520](/ressources/img/arduino-capteur-numerique/how-ultrasonic-sensor-works.webp)

Impulsion de **10 µs sur `Trig`** pour déclencher. `Echo` renvoie une impulsion proportionnelle à l'aller-retour de l'onde. Son ≈ 343 m/s à 20 °C → distance = durée × 343 / 2. Plage utile 2 cm – 4 m.

![Chronogramme Trig/Echo du HC-SR04 : impulsion de 10 µs sur Trig, puis impulsion sur Echo dont la largeur vaut le temps d'aller-retour de l'onde — la distance s'en déduit par la formule.|620](/ressources/img/arduino-capteur-numerique/chronogramme-trig-echo.svg)

### 5. Écrire le code

`time_pulse_us(pin, niveau, timeout_us)` mesure la durée d'une impulsion (l'équivalent du `pulseIn` d'Arduino) et renvoie une valeur négative en cas de dépassement.

```python
from machine import Pin, time_pulse_us
from time import sleep, sleep_us

trig = Pin(9, Pin.OUT)            # broche de déclenchement (sortie)
echo = Pin(10, Pin.IN)           # broche de l'écho de retour (entrée)

def mesurer_cm():
    # Déclenchement : une impulsion PROPRE de 10 µs sur Trig
    trig.low()                   # on part d'un état bas net...
    sleep_us(2)                  # ...stabilisé 2 µs
    trig.high()                  # front montant : début de l'impulsion
    sleep_us(10)                 # maintenue 10 µs (durée exigée par le capteur)
    trig.low()                   # retour au repos : impulsion émise
    # Mesure : time_pulse_us attend l'impulsion Echo et renvoie sa durée (µs)
    duree = time_pulse_us(echo, 1, 30000)   # timeout 30 ms ; < 0 si pas d'écho
    if duree < 0:
        return -1                # hors plage / pas d'écho
    return duree * 0.0343 / 2    # durée -> distance (voir encart)

while True:
    d = mesurer_cm()
    print("Hors plage" if d < 0 else "{:.1f} cm".format(d))
    sleep(0.1)                   # une mesure toutes les 100 ms (~10 Hz)
```

**Comment lire ce code.** Deux gestes seulement. *Déclencher* : on impose sur `Trig` une impulsion **propre** de 10 µs. Le `low()` initial (2 µs) garantit un front montant net, et c'est cette durée de 10 µs que le capteur attend pour lancer un tir d'ultrasons. *Mesurer* : `time_pulse_us(echo, 1, 30000)` met le programme **en attente** de l'impulsion sur `Echo` et renvoie sa **durée en microsecondes** — le temps d'aller-retour de l'onde. Une valeur **négative** signifie qu'aucun écho n'est revenu avant le délai (30 ms), donc cible hors de portée. La conversion `× 0,0343 / 2` traduit cette durée en distance : `0,0343` cm/µs est la vitesse du son, et l'on divise par deux car l'onde fait l'aller **et** le retour.

Approchez/éloignez la main. La distance s'affiche au [[micropython-repl|REPL]] :

```
23.4 cm
18.2 cm
12.1 cm
7.6 cm
Hors plage
8.9 cm
```

Une seule décimale ici, imposée par le format `"{:.1f}"` : le jumeau Arduino en affiche deux, par simple défaut de `Serial.print()`. Et `Hors plage` apparaît dès que la main sort du cône : c'est la valeur négative renvoyée par `time_pulse_us()` au bout des 30 ms.

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

La factorisation en [[micropython-fonctions|fonction]] `mesurer_cm()` annonce l'organisation du code embarqué (voir [[firmware|firmware]] et [[micropython-debug|déboguer un programme]]).

## Pièges

**Confondre numérique et analogique.** Un capteur de présence à niveau logique se lit par `Pin.value()`, pas par l'ADC. À l'inverse, un LM35 est *analogique* malgré son nom — voir [[micropython-capteur-analogique|lire un capteur analogique]].

**Echo 5 V branché directement sur le Pico.** Le HC-SR04 sort `Echo` à 5 V : sans pont diviseur, on endommage la broche (Pico non tolérant 5 V). Piège propre aux cartes 3,3 V.

**Timeout de `time_pulse_us()` oublié.** Sans timeout, l'appel peut bloquer si aucun écho ne revient. Toujours passer le 3ᵉ argument (en µs). Pour 4 m, ~23 ms → 30 ms.

**Valeurs aberrantes.** Le HC-SR04 renvoie parfois des mesures fantaisistes — filtrer (médiane sur 3-5 mesures) avant d'asservir (voir [[filtrage|filtrer des mesures]]).

**Mesure trop fréquente.** Cycle de mesure ≈ 60 ms. Mesurer plus vite donne des résultats incohérents. 10 Hz est un bon rythme.

**PIR pas stabilisé.** Un PIR demande 30–60 s de stabilisation après mise sous tension. Lire pendant ce temps donne du bruit.

## Cas particulier — Capteurs sur bus I2C ou SPI

Beaucoup de capteurs modernes (BMP280, MPU6050, VL53L0X) communiquent par bus — numériques mais d'une catégorie traitée à part : voir [[micropython-i2c|I2C]] et [[micropython-spi|SPI]]. Le câblage et le code diffèrent radicalement.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — chaque capteur se valide isolément avant intégration : câblage, lecture brute, plage observée.
- **Étape 1 de la [[integration-et-tests|phase d'intégration et tests]]** — chaque capteur requalifié unitairement.

Brancher un capteur, lire sa doc, en sortir une mesure crédible : c'est la boucle qui fait la PoC, à automatiser pour tous les capteurs du projet.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-capteur-analogique|Lire un capteur analogique]] — l'alternative continue
- [[micropython-i2c|I2C]] — bus pour capteurs évolués
- [[micropython-bibliotheques|Utiliser une bibliothèque]] — pour DHT, DS18B20, etc.
- [[lire-une-datasheet|Lire une datasheet]] — identifier la nature du signal
- [[filtrage|Filtrer des mesures]] — lisser le bruit des capteurs
- [[arduino-capteur-numerique|Lire un capteur numérique (Arduino)]] — l'équivalent C++
