---
title: Modules et import
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-langage
aa: []
draft: false
---

Un **module** est un ensemble de fonctions et d'objets qu'on charge avec `import` pour s'en servir. En MicroPython, tout l'accès au matériel passe par des modules (`machine`, `time`…), et l'on peut aussi **organiser son propre code** en plusieurs fichiers, chacun devenant un module. Cette fiche couvre les deux formes d'`import`, les modules intégrés utiles, ses propres fichiers, et l'installation de bibliothèques.

## Deux façons d'importer

```python
import machine                 # importe tout le module
led = machine.Pin(25, machine.Pin.OUT)
```

ou, plus court, en important seulement ce dont on a besoin :

```python
from machine import Pin        # importe juste Pin
led = Pin(25, Pin.OUT)
```

La seconde forme est la plus courante dans les exemples. Les deux sont équivalentes ; elles diffèrent par la façon de **nommer** ensuite (`machine.Pin` vs `Pin`).

## Les modules intégrés utiles

MicroPython embarque un sous-ensemble de la bibliothèque Python, plus des modules propres à l'embarqué :

- **`machine`** — l'accès au matériel : `Pin`, `ADC`, `PWM`, `I2C`, `SPI`, `UART`, `Timer`, `WDT`… le module central de tout le module ;
- **`time`** — pauses et chronométrage : `sleep`, `sleep_ms`, `ticks_ms` (voir [[micropython-temporisation|temporiser]]) ;
- **`network`** — le Wi-Fi, sur les cartes qui en ont (Pico 2 W, ESP32) ;
- **`math`**, **`random`**, **`json`**, **`os`** — calcul, aléa, sérialisation, système de fichiers.

`dir(machine)` au [[micropython-repl|REPL]] liste ce qu'offre un module — le réflexe pour explorer sans documentation.

## Organiser son code en plusieurs fichiers

Tout fichier `.py` enregistré sur la carte est **importable** comme module : son nom est le nom du fichier sans `.py`. Par exemple, un fichier `outils.py` sur la carte :

```python
# outils.py
def en_volts(brut):
    return brut * 3.3 / 65535
```

s'utilise depuis `main.py` :

```python
# main.py
import outils
print(outils.en_volts(32768))
```

C'est ainsi qu'on **range** un projet qui grossit : un fichier par responsabilité, importés dans `main.py`.

## Installer une bibliothèque

Pour un capteur ou un écran, une bibliothèque MicroPython existe souvent. Deux voies :

- **`mip`** — le gestionnaire de paquets MicroPython : depuis une carte connectée au réseau, `import mip; mip.install("nom")` télécharge la bibliothèque. Thonny propose aussi *Outils → Gérer les paquets*.
- **Copie manuelle** — télécharger le `.py` de la bibliothèque et l'**enregistrer sur la carte** (comme un fichier de plus), puis l'importer.

Détaillé dans [[micropython-bibliotheques|utiliser une bibliothèque]].

## Pièges

**`import machine` ≠ `from machine import Pin`.** Avec le premier, on écrit `machine.Pin` ; avec le second, `Pin`. Mélanger les deux noms provoque une erreur de nom.

**Le module doit être *sur la carte*.** `import outils` ne marche que si `outils.py` est enregistré sur le Pico, pas seulement ouvert dans Thonny. Vérifier qu'il est bien dans les fichiers de la carte.

**Ne pas écraser un nom intégré.** Nommer son fichier `time.py` ou `machine.py` **masque** le module intégré du même nom : `import time` chargerait alors votre fichier. Choisir des noms distincts.

**MicroPython n'a pas toute la bibliothèque Python.** C'est un sous-ensemble : certains modules de CPython sont absents ou allégés. Vérifier au REPL (`import ...`) avant d'en dépendre.

## Exercices

> [!question] Exercice 1 — Deux écritures pour la même LED
> Allumez la LED de deux façons : d'abord avec `import machine`, puis avec `from machine import Pin`. Qu'est-ce qui change dans le code ?

> [!success]- Corrigé
> ```python
> import machine
> led = machine.Pin(25, machine.Pin.OUT)
> led.on()
> ```
> ```python
> from machine import Pin
> led = Pin(25, Pin.OUT)
> led.on()
> ```
> Seul le **préfixe** change : `machine.Pin` quand on importe tout le module, `Pin` quand on importe ce nom directement. Le comportement est identique.

> [!question] Exercice 2 — Son propre module
> Créez un fichier `outils.py` sur la carte contenant une fonction `moyenne(liste)`, puis utilisez-la depuis un autre programme.

> [!success]- Corrigé
> ```python
> # outils.py  (enregistre SUR la carte)
> def moyenne(liste):
>     return sum(liste) / len(liste)
> ```
> ```python
> # main.py
> import outils
> print(outils.moyenne([512, 530, 528]))   # 523.33...
> ```
> `outils.py` devient un module importable parce qu'il est **sur la carte**. Découper ainsi un projet en fichiers le rend lisible et réutilisable — la base de l'organisation d'un [[firmware|firmware]] qui grandit.

## Voir aussi

- [[micropython-langage|Le langage MicroPython]] — hub du parcours langage
- [[micropython-repl|Le REPL]] — `dir()`/`import` pour explorer un module
- [[micropython-bibliotheques|Utiliser une bibliothèque]] — installer et inclure un pilote (à venir)
- [[firmware|Firmware]] — structurer un projet multi-fichiers (transverse)
