---
title: Lire un capteur analogique
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

Un **capteur analogique** délivre une tension continue proportionnelle à la grandeur mesurée. Sur le Pico, on lit cette tension via le **convertisseur analogique-numérique** (ADC) intégré, par la classe **`ADC`** du module [[micropython-modules|`machine`]]. Capteurs typiques : potentiomètre (rotation), LDR (luminosité), LM35 / TMP36 (température), capteur de force FSR. Cette fiche couvre la lecture ADC, la conversion et les pièges des signaux analogiques.

## À quoi ça sert ?

Beaucoup de phénomènes se mesurent par une tension : luminosité, température, position d'un curseur, force. Le capteur convertit le phénomène en tension 0–3,3 V, le Pico la transforme en entier sur lequel on calcule. Le geste à maîtriser est moins la lecture (une ligne) que la **conversion correcte** entre l'entier brut et la grandeur physique.

## Procédure pas à pas

Quatre étapes : connaître son ADC, câbler, lire, convertir.

### 1. Connaître l'ADC du Pico

Le Pico a un ADC **12 bits**, mais MicroPython expose `read_u16()` qui **ramène la lecture sur 16 bits** (0–65535) pour l'uniformité entre cartes. La référence est **fixe à 3,3 V** (pas de référence réglable comme sur Arduino).

| Carte | Résolution réelle | `read_u16()` | Pleine échelle |
|---|---|---|---|
| Pico / Pico 2 | 12 bits | 0 – 65535 (mis à l'échelle) | 3,3 V |
| ESP32 | 12 bits | 0 – 65535 | 3,3 V (atténuation réglable) |

Les entrées analogiques sont **GP26, GP27, GP28**. Un canal interne (`ADC(4)`) mesure la **température de la puce**.

### 2. Câbler un potentiomètre

Potentiomètre 10 kΩ : une extrême → `3,3 V` ; l'autre → `GND` ; curseur (milieu) → `GP26`. Le potentiomètre forme un pont diviseur variant de 0 V à 3,3 V.

Prendre capture d'écran ou photo de *un potentiomètre 10 kΩ câblé sur une breadboard, ses trois broches vers 3,3 V / GP26 / GND d'un Pico*.

### 3. Lecture brute

```python
from machine import ADC, Pin
from time import sleep

pot = ADC(Pin(26))      # ou ADC(26)

while True:
    print(pot.read_u16())   # 0 a 65535
    sleep(0.1)
```

Tournez le potentiomètre : 0 à 65535, environ 32768 à mi-course.

### 4. Convertir en grandeur physique

**Potentiomètre comme consigne 0–100 %** :

```python
pourcentage = pot.read_u16() * 100 / 65535
```

**Tension** :

```python
tension = pot.read_u16() * 3.3 / 65535     # en volts
```

**Température de la puce** (canal interne, formule de la datasheet RP2350) :

```python
from machine import ADC
capteur = ADC(4)
def temperature_c():
    v = capteur.read_u16() * 3.3 / 65535
    return 27 - (v - 0.706) / 0.001721
```

## Exemple — Potentiomètre comme variateur de seuil

Lire un potentiomètre (`GP26`) comme seuil, une LDR (`GP27`) comme mesure, allumer une LED quand la lumière passe sous le seuil.

```python
from machine import ADC, Pin
from time import sleep

pot     = ADC(Pin(26))
lumiere = ADC(Pin(27))
led     = Pin(15, Pin.OUT)

while True:
    seuil = pot.read_u16()
    mesure = lumiere.read_u16()
    led.value(1 if mesure < seuil else 0)
    print("Seuil :", seuil, " Lumiere :", mesure)
    sleep(0.05)
```

La sortie au [[micropython-repl|REPL]] (et le traceur de Thonny) permet de visualiser seuil et mesure pour calibrer, puis figer le seuil en constante.

## Pièges

**Confondre l'ADC et `Pin.value()`.** `pot.read_u16()` renvoie 0–65535 ; lire la même broche en numérique donnerait 0 ou 1 — perte d'information massive.

**Broche non-ADC.** Seules **GP26 / GP27 / GP28** sont des entrées analogiques sur le Pico. (Sur ESP32, ADC2 est indisponible quand le Wi-Fi tourne — piège classique.)

**Croire à une référence réglable.** Sur le Pico la référence est fixe (3,3 V) ; on convertit toujours par rapport à 3,3 V. Une alimentation 3,3 V bruitée biaise toutes les mesures — découpler proprement.

**Bruit sur les mesures.** Une lecture brute a quelques LSB de bruit. Sur un capteur précis, ça compte : moyenner sur 10–20 mesures (suréchantillonnage), ou filtre RC matériel (voir [[micropython-filtrage|filtrer des mesures]]).

**Tension d'entrée hors plage.** Appliquer > 3,3 V sur une entrée ADC abîme la puce (Pico non tolérant 5 V). Vérifier la plage de sortie du capteur dans sa datasheet ([[lire-une-datasheet|lire une datasheet]]).

**Câbles trop longs sans masse.** Un câble de plus de 30–50 cm mal référencé devient une antenne 50 Hz : la mesure oscille sans rien faire. Raccourcir, ramener GND, ou blinder.

## Cas particulier — Capteurs 5 V

Un capteur qui sort 0–5 V dépasse la plage du Pico (3,3 V). Solutions : **pont diviseur** sur la sortie du capteur (perte de résolution), ou **carte/capteur 3,3 V natif**. Voir [[niveaux-de-tension|niveaux de tension]].

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — chaque capteur analogique se valide en lecture brute + conversion, idéalement comparée à un étalon (thermomètre, luxmètre, multimètre).
- **Étape 1 de la [[integration-et-tests|phase d'intégration et tests]]** — requalification : plage utile, résolution effective, bruit résiduel.

L'étalonnage transforme un capteur « qui sort un nombre » en *instrument de mesure* — sans quoi tout asservissement aval est calibré sur du sable.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-capteur-numerique|Lire un capteur numérique]] — l'alternative TOR ou impulsionnelle
- [[micropython-repl|Le REPL]] — observer les mesures et calibrer
- [[micropython-filtrage|Filtrer des mesures]] — lisser le bruit ADC
- [[niveaux-de-tension|Niveaux de tension]] — 3,3 V vs 5 V sur capteurs et cartes
- [[arduino-capteur-analogique|Lire un capteur analogique (Arduino)]] — l'équivalent C++
