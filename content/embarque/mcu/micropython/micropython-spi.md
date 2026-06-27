---
title: SPI en MicroPython
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - bus-de-communication
  - micropython-bibliotheques
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

**SPI** (*Serial Peripheral Interface*) est un bus série synchrone à 4 fils — `SCK` (horloge), `MOSI` (Master Out Slave In), `MISO` (Master In Slave Out) et `CS` (Chip Select). Il offre des débits bien plus élevés qu'[[micropython-i2c|I2C]] (plusieurs MHz) au prix de plus de broches. En MicroPython, on y accède par la classe **`SPI`** du module [[micropython-modules|`machine`]], **le `CS` étant un simple `Pin`** géré à la main. C'est le bus des **cartes SD**, des **écrans TFT**, des **modules radio** (NRF24L01, LoRa). Atout du Pico : il est en **3,3 V**, comme les cartes SD — souvent **pas de translateur** nécessaire (contrairement à un Uno 5 V).

## À quoi ça sert ?

Trois usages : **stocker des données sur carte SD** (datalogger, logs) ; **piloter un écran graphique** (TFT, e-paper) ; **communiquer en radio** (NRF24L01, LoRa). Là où I2C adresse plusieurs devices à 2 fils, SPI en sélectionne *un* à la fois par sa broche `CS` — chaque device de plus coûte une GPIO.

## Procédure pas à pas

Quatre étapes : créer l'objet SPI, câbler avec un CS dédié, installer la bibliothèque, écrire le code.

### 1. Créer l'objet SPI

Le Pico a deux contrôleurs (`SPI0`, `SPI1`). `SCK`/`MOSI`/`MISO` sont sur des broches compatibles ; **`CS` est une GPIO libre**, gérée par le code :

```python
from machine import SPI, Pin
spi = SPI(0, baudrate=1_000_000, sck=Pin(2), mosi=Pin(3), miso=Pin(4))
cs = Pin(5, Pin.OUT)
cs.value(1)        # device deselectionne au repos (CS actif a l'etat bas)
```

### 2. Câbler avec un CS dédié

| Module SD | Pico |
|---|---|
| VCC | 3,3 V |
| GND | GND |
| MISO | GP4 |
| MOSI | GP3 |
| SCK | GP2 |
| CS | GP5 (n'importe quelle GPIO) |

Plusieurs devices SPI partagent `SCK`/`MOSI`/`MISO`, mais **chacun a son propre `CS`** sur une GPIO distincte.

![Câblage d'un module microSD sur le bus SPI0 du Pico : SCK sur GP2, MOSI sur GP3, MISO sur GP4, CS sur GP5, VCC sur 3,3 V, masse commune (MOSI→MOSI, MISO→MISO, le SPI ne croise pas).|640](/ressources/img/micropython-spi/branchement-spi.svg)

### 3. Installer la bibliothèque

Pour la carte SD : le pilote **`sdcard`** (gestionnaire de paquets Thonny ou `mip`, voir [[micropython-bibliotheques|bibliothèques]]). Pour un écran : `st7789`, `ili9341`… selon le modèle.

### 4. Écrire le code (carte SD)

On monte la carte dans le système de fichiers (`os.mount`), puis on lit/écrit comme n'importe quel fichier :

```python
from machine import SPI, Pin
import sdcard, os

spi = SPI(0, baudrate=1_000_000, sck=Pin(2), mosi=Pin(3), miso=Pin(4))
cs = Pin(5, Pin.OUT)

sd = sdcard.SDCard(spi, cs)
os.mount(sd, "/sd")             # la carte devient le dossier /sd

with open("/sd/test.txt", "w") as f:
    f.write("Bonjour carte SD\n")

with open("/sd/test.txt") as f:
    print(f.read())

os.umount("/sd")
```

Insérer une microSD formatée en FAT32, lancer, observer le REPL. Relire la carte sur un PC pour vérifier `test.txt`.

## Exemple — Datalogger sur carte SD

Lire une mesure ADC et l'écrire, horodatée, toutes les 5 s.

```python
from machine import SPI, Pin, ADC
from time import ticks_ms, ticks_diff
import sdcard, os

spi = SPI(0, baudrate=1_000_000, sck=Pin(2), mosi=Pin(3), miso=Pin(4))
sd = sdcard.SDCard(spi, Pin(5, Pin.OUT))
os.mount(sd, "/sd")

capteur = ADC(Pin(26))
dernier = ticks_ms()
INTERVALLE = 5000

while True:
    if ticks_diff(ticks_ms(), dernier) >= INTERVALLE:
        dernier = ticks_ms()
        val = capteur.read_u16()
        with open("/sd/data.csv", "a") as f:      # "a" = ajout en fin
            f.write("{},{}\n".format(ticks_ms(), val))
        print("Loggue :", val)
```

Laisser tourner, retirer la carte, ouvrir `data.csv` dans un tableur. Noter le mode `"a"` (append) pour ne pas écraser à chaque écriture.

## Pièges

**`CS` non géré.** Avec plusieurs devices, laisser un `CS` actif (bas) en permanence : plusieurs devices répondent sur `MISO`, lectures corrompues. Initialiser chaque `CS` à `1` (inactif) et n'activer qu'au moment de l'accès.

**Carte SD non détectée.** Causes : mauvais formatage (essayer FAT32), connexions douteuses, `baudrate` trop élevé pour le câblage breadboard (commencer bas, ~1 MHz). Vérifier le câblage MISO/MOSI/SCK.

**Oublier `os.mount`.** Sans montage, `/sd/...` n'existe pas : `os.mount(sd, "/sd")` après avoir créé l'objet `SDCard`, et `umount` avant de retirer.

**Écraser au lieu d'ajouter.** Ouvrir en `"w"` à chaque tour réécrit le fichier ; pour un log, utiliser `"a"` (append).

**Câbles trop longs pour du SPI rapide.** À plusieurs MHz, les fils Dupont longs introduisent réflexions/diaphonie. Garder < 10 cm sur breadboard, baisser le `baudrate` si instable.

**Mode SPI mal réglé.** SPI a 4 modes (polarité/phase d'horloge) ; les pilotes les gèrent, mais pour un accès brut, vérifier `polarity`/`phase` dans la datasheet du device.

## Cas particulier — SPI logiciel

`SoftSPI` (du module `machine`) émule SPI sur des GPIO arbitraires, à débit plus faible — utile pour isoler un device problématique sur ses propres lignes, ou quand les broches matérielles sont prises.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — un datalogger SD au plus tôt capture les essais terrain hors écran.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — un datalogger embarqué qui enregistre toutes les variables est la meilleure arme contre les bugs intermittents qui ne se reproduisent qu'en démo.

SPI devient incontournable dès qu'on veut écrire des fichiers (SD), afficher du graphique (TFT) ou faire du sans-fil rapide. Bien choisir ses broches `CS` dès le début évite les conflits.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[bus-de-communication|Bus de communication]] — SPI parmi les bus
- [[micropython-i2c|I2C]] · [[micropython-uart|UART]] — alternatives
- [[micropython-bibliotheques|Utiliser une bibliothèque]] — `sdcard`, pilotes d'écran
- [[spi|SPI]] — la notion transverse
- [[arduino-spi|SPI sur Arduino]] — l'équivalent C++ (`SPI.h`, `SD.h`)
