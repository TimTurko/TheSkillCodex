---
title: I2C en MicroPython
type: tuto
phases:
  - concept
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

**I2C** (*Inter-Integrated Circuit*) est un bus série synchrone à deux fils — `SDA` (data) et `SCL` (clock) — où plusieurs devices cohabitent, chacun identifié par une **adresse 7 bits**. Là où [[micropython-uart|UART]] est limité au point-à-point, I2C met en réseau de nombreux devices sur les deux mêmes fils. En MicroPython, on y accède par la classe **`I2C`** du module [[micropython-modules|`machine`]], qui inclut un **scanner intégré** (`scan()`), là où Arduino demande un sketch dédié. C'est le bus des capteurs évolués (BMP280, MPU6050), des afficheurs (OLED SSD1306) et des horloges (DS3231).

## À quoi ça sert ?

Trois rôles. **Multiplexer plusieurs capteurs** sur 2 broches, précieux quand les GPIO sont rares. **Connecter un afficheur** sans monopoliser de broches, un OLED I2C n'en demandant que 2. **Lire/écrire des composants utilitaires** (RTC, EEPROM externe, expanseur de GPIO).

## Procédure pas à pas

Quatre étapes : créer l'objet I2C, câbler avec pull-ups, scanner les adresses, lire un device.

### 1. Créer l'objet I2C

Le Pico a deux contrôleurs I2C (`I2C0`, `I2C1`), assignables à des broches compatibles :

```python
from machine import I2C, Pin
i2c = I2C(0, scl=Pin(5), sda=Pin(4), freq=400000)
```

(En cas de besoin sur des broches arbitraires : `SoftI2C`, émulé logiciellement.)

### 2. Câbler avec pull-ups

I2C exige des **pull-up vers VCC** sur `SDA` et `SCL` (≈ 4,7 kΩ, ou 2,2 kΩ en 3,3 V). **La plupart des modules les intègrent** : rien à ajouter pour un premier essai avec un seul module.

| Module | Pico |
|---|---|
| VCC | 3,3 V (ou 5 V selon module) |
| GND | GND |
| SDA | GP4 |
| SCL | GP5 |

![Câblage : bus I2C sur un Pico — SDA sur GP4, SCL sur GP5, pull-ups vers 3,3 V|600](/ressources/img/micropython-i2c/branchement-i2c.svg)

Avec **plusieurs modules**, leurs pull-ups se retrouvent en parallèle : la résistance équivalente chute et le bus finit par ne plus pouvoir remonter. On ne garde alors qu'**une seule paire active** (voir le piège « surnombre »).

![Pull-ups en parallèle : à gauche un seul module (une pull-up tire SDA, le bus descend bien à 0) ; à droite plusieurs modules dont les pull-ups en parallèle font chuter la résistance équivalente — le bus ne tient plus.|620](/ressources/img/micropython-i2c/pullups-paralleles.svg)

### 3. Scanner les adresses (intégré)

Avant tout code applicatif, `i2c.scan()` liste les adresses qui répondent — **pas besoin d'un sketch scanner séparé** :

```python
from machine import I2C, Pin
i2c = I2C(0, scl=Pin(5), sda=Pin(4))
print([hex(a) for a in i2c.scan()])     # ex. ['0x76']
```

**Si la liste est vide** : vérifier le câblage (SDA/SCL non inversés, pull-ups, alimentation). Adresses typiques : OLED SSD1306 = `0x3C`, BMP280 = `0x76`/`0x77`, DS3231/MPU6050 = `0x68`.

### 4. Lire un device avec sa bibliothèque

Adresse confirmée, installer le pilote (voir [[micropython-bibliotheques|bibliothèques]]), l'importer, lire. Au plus bas niveau, l'API brute est `i2c.readfrom(addr, n)` / `i2c.writeto(addr, buf)` / `i2c.readfrom_mem(addr, reg, n)`, mais une bibliothèque encapsule presque toujours ces accès.

## Exemple — Lecture d'un BMP280 (pression et température)

**Bibliothèque** : un pilote `bmp280` MicroPython (via le gestionnaire de paquets de Thonny ou `mip`, voir [[micropython-bibliotheques|bibliothèques]]).

```python
from machine import I2C, Pin
from bmp280 import BMP280       # nom selon le pilote installé
from time import sleep

i2c = I2C(0, scl=Pin(5), sda=Pin(4))
print("Adresses :", [hex(a) for a in i2c.scan()])

capteur = BMP280(i2c)           # adresse par défaut 0x76

while True:
    print("T =", capteur.temperature, "°C   P =", capteur.pressure, "Pa")
    sleep(1)
```

Soufflez sur le module : la température monte. (L'API exacte dépend du pilote choisi. Le `scan()` reste l'étape de diagnostic commune.)

## Pièges

**Adresse fausse.** Un pilote réglé sur `0x77` alors que le module est en `0x76` : device introuvable. **Toujours commencer par `scan()`.**

**Pull-ups manquantes ou en surnombre.** Sans pull-up, le bus flotte. Trop de modules à pull-ups en parallèle → résistance équivalente trop faible, le bus ne tient plus. Désactiver les pull-ups sur tous les modules sauf un.

**Niveau VCC incompatible.** Module 3,3 V alimenté en 5 V → destruction. Pour des bus mixtes, translateur bidirectionnel (PCA9306, montage BSS138).

**Conflit d'adresses.** Deux capteurs identiques à la même adresse (`0x68`) → bus corrompu. Basculer un strap d'adresse, ou utiliser un multiplexeur I2C (TCA9548A).

**SDA/SCL inversés.** `scan()` ne trouve rien. Vérifier l'affectation des broches.

**Câbles trop longs.** I2C tolère ~1-2 m en mode standard avec pull-ups correctes. Au-delà, trames corrompues. Raccourcir, blinder, ou passer à un bus différentiel.

## Cas particulier — Plusieurs bus, ou même adresse

Le Pico a **deux contrôleurs** (`I2C0` et `I2C1` sur des broches distinctes) : on répartit la charge ou on isole deux devices de même adresse. Alternative pour plusieurs devices identiques sur un seul bus : un **multiplexeur** TCA9548A (8 canaux).

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — chaque capteur/afficheur I2C se valide en deux temps : `scan()` pour l'adresse, exemple de bibliothèque pour la lecture.
- **Étape 4 de la [[concept|phase de concept]]** — I2C s'impose dès 2+ devices ou quand les GPIO sont rares.

`i2c.scan()` est l'outil de diagnostic universel du bus : il sépare en quelques secondes un problème matériel (rien ne répond) d'un problème logiciel (le device répond mais la lecture échoue).

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[bus-de-communication|Bus de communication]] — I2C parmi les bus
- [[micropython-spi|SPI]] · [[micropython-uart|UART]] — alternatives
- [[micropython-afficheur|Afficheur OLED]] — usage typique d'I2C
- [[micropython-bibliotheques|Utiliser une bibliothèque]] — pour les capteurs I2C
- [[i2c|I2C]] — la notion transverse
- [[niveaux-de-tension|Niveaux de tension]] — pour les bus mixtes 3,3 / 5 V
- [[arduino-i2c|I2C sur Arduino]] — l'équivalent C++ (`Wire.h`)
