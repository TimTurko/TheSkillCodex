---
title: Lire un capteur analogique
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

[[potentiometre|Potentiomètre]] 10 kΩ : une extrême → `3,3 V` ; l'autre → `GND` ; curseur (milieu) → `GP26`. Le potentiomètre forme un pont diviseur variant de 0 V à 3,3 V.

![Montage : potentiomètre 10 kΩ sur un Pico — extrémités vers 3,3 V et GND, curseur vers GP26 (ADC0)|600](/ressources/img/micropython-capteur-analogique/montage-adc.svg)

### 3. Lecture brute

```python
from machine import ADC, Pin
from time import sleep

pot = ADC(Pin(26))      # ou ADC(26) ; entrée analogique sur GP26

while True:
    print(pot.read_u16())   # 0 à 65535 (12 bits ramenés sur 16)
    sleep(0.1)              # ~10 lectures par seconde
```

Tournez le potentiomètre : 0 à 65535, environ 32768 à mi-course.

### 4. Convertir en grandeur physique

**Potentiomètre comme consigne 0–100 %** :

```python
pourcentage = pot.read_u16() * 100 / 65535     # règle de trois : 65535 → 100 %
```

**Tension** :

```python
tension = pot.read_u16() * 3.3 / 65535     # brut -> volts (réf. 3,3 V, pleine échelle 65535)
```

**Température de la puce** (canal interne, formule de la datasheet RP2040) :

```python
from machine import ADC
capteur = ADC(4)                                 # canal interne (CORE_TEMP)
def temperature_c():
    v = capteur.read_u16() * 3.3 / 65535         # tension du capteur interne
    return 27 - (v - 0.706) / 0.001721           # loi RP2040 : 0,706 V à 27 °C, -1,721 mV/°C
```

**Comment lire ce code.** La conversion se fait en deux temps : la valeur brute (`read_u16()`, 0–65535) redevient d'abord une **tension** — on divise par la pleine échelle 65535 et on multiplie par la référence 3,3 V —, puis cette tension devient une **grandeur physique** selon la loi du capteur (ici la formule du capteur interne). Tout l'art est de diviser par la **bonne pleine échelle** (65535, pas 4095 — `read_u16()` met déjà la lecture 12 bits à l'échelle) et d'appliquer la **bonne loi** : c'est le geste à refaire pour chaque capteur.

## Exemple — Potentiomètre comme variateur de seuil

Lire un potentiomètre (`GP26`) comme seuil, une LDR (`GP27`) comme mesure, allumer une LED quand la lumière passe sous le seuil.

```python
from machine import ADC, Pin
from time import sleep

pot     = ADC(Pin(26))           # potentiomètre = seuil réglable
lumiere = ADC(Pin(27))           # LDR = mesure de luminosité
led     = Pin(15, Pin.OUT)

while True:
    seuil = pot.read_u16()                       # 0 à 65535
    mesure = lumiere.read_u16()
    led.value(1 if mesure < seuil else 0)        # LED si la lumière passe sous le seuil
    print("Seuil :", seuil, " Lumiere :", mesure)
    sleep(0.05)
```

La sortie au [[micropython-repl|REPL]] (et le traceur de Thonny) permet de visualiser seuil et mesure pour calibrer, puis figer le seuil en constante.

## Pièges

**Confondre l'ADC et `Pin.value()`.** `pot.read_u16()` renvoie 0–65535 ; lire la même broche en numérique donnerait 0 ou 1 — perte d'information massive.

**Broche non-ADC.** Seules **GP26 / GP27 / GP28** sont des entrées analogiques sur le Pico. (Sur ESP32, ADC2 est indisponible quand le Wi-Fi tourne — piège classique.)

**Croire à une référence réglable.** Sur le Pico la référence est fixe (3,3 V) ; on convertit toujours par rapport à 3,3 V. Une alimentation 3,3 V bruitée biaise toutes les mesures — découpler proprement.

**Bruit sur les mesures.** Une lecture brute a quelques LSB de bruit. Sur un capteur précis, ça compte : moyenner sur 10–20 mesures (suréchantillonnage), ou filtre RC matériel (voir [[filtrage|filtrer des mesures]]).

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
- [[filtrage|Filtrer des mesures]] — lisser le bruit ADC
- [[precision-de-mesure|Précision de mesure]] — résolution ≠ précision, étalonnage
- [[niveaux-de-tension|Niveaux de tension]] — 3,3 V vs 5 V sur capteurs et cartes
- [[arduino-capteur-analogique|Lire un capteur analogique (Arduino)]] — l'équivalent C++
