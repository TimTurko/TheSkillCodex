---
title: Afficheur OLED / LCD
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-i2c
  - micropython-bibliotheques
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Un **afficheur** permet à un projet de présenter ses mesures, son état ou son menu **sans PC**. Deux familles cohabitent : **OLED graphiques** (128×64 pixels sur SSD1306, modernes) et **LCD à caractères** (16×2). Cette fiche couvre les deux via leur version la plus pédagogique : l'[[micropython-i2c|I2C]], qui n'occupe que deux broches. En MicroPython, l'OLED SSD1306 se pilote avec le pilote **`ssd1306`**, qui dessine dans un **tampon** poussé à l'écran par `show()`.

## À quoi ça sert ?

L'afficheur intervient quand un projet quitte le banc PC pour devenir autonome : **démonstration** (mesures en direct sur le boîtier), **interface** (menu, mode), **indicateur d'état** (heure, batterie, erreur).

| Type | Graphique | Consommation |
|---|---|---|
| OLED 0,96″ SSD1306 (128×64) I2C | ✅ | ~20 mA |
| LCD 16×2 I2C (via PCF8574) | aucun | ~20–50 mA (rétroéclairage) |

Pour un premier projet : **OLED SSD1306** — petit, lisible, graphique simple.

## Procédure pas à pas

Quatre étapes : câbler en I2C, installer le pilote, dessiner dans le tampon, pousser à l'écran.

### 1. Câbler en I2C

4 fils : `VCC` → 3,3 V (le SSD1306 grand public accepte 3,3/5 V) ; `GND` → GND ; `SDA` → GP4 ; `SCL` → GP5. Confirmer l'adresse avec `i2c.scan()` (souvent `0x3C`).

![Câblage : afficheur OLED SSD1306 I2C sur un Pico — VCC, GND, SDA sur GP4, SCL sur GP5|600](/ressources/img/micropython-afficheur/branchement-oled.svg)

### 2. Installer le pilote

Le pilote **`ssd1306`** s'installe via le gestionnaire de paquets de Thonny ou `mip` (voir [[micropython-bibliotheques|bibliothèques]]).

### 3. Dessiner dans le tampon

```python
from machine import I2C, Pin
from ssd1306 import SSD1306_I2C

i2c = I2C(0, scl=Pin(5), sda=Pin(4))
oled = SSD1306_I2C(128, 64, i2c)        # 0x3C par défaut

oled.fill(0)                            # efface le tampon (0 = noir)
oled.text("Bonjour", 0, 0)              # texte (x, y en pixels)
oled.text("Ligne 2", 0, 12)
oled.show()                             # pousse le tampon à l'écran
```

`SSD1306_I2C` dérive de `framebuf` : on dispose donc aussi de `pixel()`, `line()`, `rect()`, `hline()`, `fill_rect()`…

### 4. Mettre à jour en boucle

```python
from time import ticks_ms, sleep_ms

while True:
    oled.fill(0)
    oled.text("Temps: {} s".format(ticks_ms() // 1000), 0, 0)
    oled.show()
    sleep_ms(500)
```

> [!info] Comment lire ce code
> `oled.show()` est **obligatoire** : la bibliothèque dessine dans un **tampon** (en RAM) et seul cet appel l'envoie à l'écran. `fill`/`text` ne touchent que le tampon. Tant qu'on n'appelle pas `show()`, l'écran reste figé. Oublier `show()` = écran noir alors que le code « tourne ».

## Exemple — Thermomètre OLED (deux modules I2C sur un bus)

Lire la température sur un BMP280 (voir [[micropython-i2c|I2C]]) et l'afficher sur l'OLED. Le bus supporte les deux devices (adresses différentes : BMP280 `0x76`, OLED `0x3C`).

```python
from machine import I2C, Pin
from ssd1306 import SSD1306_I2C
from bmp280 import BMP280
from time import sleep_ms

i2c = I2C(0, scl=Pin(5), sda=Pin(4))
oled = SSD1306_I2C(128, 64, i2c)
capteur = BMP280(i2c)

while True:
    t = capteur.temperature
    oled.fill(0)
    oled.text("Temperature", 0, 0)
    oled.text("{:.1f} C".format(t), 20, 28)     # texte 8 px (framebuf, pas d'échelle)
    oled.show()
    sleep_ms(500)
```

Souffler sur le BMP280 : la température affichée monte. Démo simple combinant deux modules I2C sur un même bus.

## Pièges

**Adresse I2C incorrecte.** Le SSD1306 est presque toujours en `0x3C`, parfois `0x3D`. Lancer `i2c.scan()` avant de fixer l'adresse.

**Oublier `show()`.** Le pilote dessine dans un tampon. Seul `show()` l'envoie au matériel. Oubli = écran noir malgré un code correct.

**Mauvais pilote (SSD1306 vs SH1106).** Certains modules « OLED » utilisent un contrôleur **SH1106** (décalage de quelques pixels avec le pilote SSD1306). Si l'image est décalée/coupée, prendre le pilote `sh1106`.

**Accents absents.** La police du pilote `ssd1306` est ASCII : `é`, `è`, `à` ne s'affichent pas. Écrire sans accents, ou utiliser un pilote/police étendu.

**Texte hors écran.** En 128×64, la police de base fait 8 px de haut : ~8 lignes, ~16 caractères par ligne. Au-delà, le texte sort. Calibrer.

**Pull-ups I2C multiples.** OLED + autres modules à pull-ups → résistance équivalente trop faible, bus instable. Désactiver les pull-ups sur tous sauf un.

**LCD qui n'efface pas.** Un LCD I2C écrit caractère par caractère sans effacer le reste : réécrire avec des espaces ou `clear()`. (Pilotes MicroPython type `i2c_lcd` à installer.)

## Cas particulier — Écrans SPI et e-paper

Pour des écrans **TFT couleur** (ST7789, ILI9341) ou **e-paper**, le bus est généralement [[micropython-spi|SPI]], avec un pilote dédié (`st7789`…). Plus de broches, plus de débit, image couleur ou très basse consommation (e-paper).

## Raccrochage projet

- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — premier affichage embarqué pour observer les mesures sans PC.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — l'afficheur intégré sert d'IHM pour les tests (mode courant, valeurs réelles).

Un afficheur, même simple, fait passer un projet du *« regarder le REPL »* au *« voir l'état directement »*. Un saut qualitatif en démonstration, pour deux broches et un pilote.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-i2c|I2C]] — prérequis (câblage du bus)
- [[micropython-bibliotheques|Utiliser une bibliothèque]] — installer `ssd1306`
- [[micropython-spi|SPI]] — pour écrans TFT et e-paper
- [[arduino-afficheur|Afficheur LCD / OLED (Arduino)]] — l'équivalent C++
