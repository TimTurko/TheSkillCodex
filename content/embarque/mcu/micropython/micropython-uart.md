---
title: UART en MicroPython
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-repl
  - bus-de-communication
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

**UART** (*Universal Asynchronous Receiver-Transmitter*) est un bus série point-à-point à deux fils : `TX` (transmission) et `RX` (réception), croisés entre deux devices. En MicroPython, on y accède par la classe **`UART`** du module [[micropython-modules|`machine`]]. On l'utilise pour faire dialoguer le Pico avec **un autre microcontrôleur** ou un **module externe** (GPS NEO-6M, Bluetooth HC-05, lecteur RFID). À la différence de l'Arduino Uno, **la console REPL du Pico passe par l'USB** (USB-CDC), pas par un UART matériel : les deux UART du Pico restent donc **libres** pour les modules — pas besoin de `SoftwareSerial`.

## À quoi ça sert ?

UART est le bus le plus simple : 2 fils, pas d'horloge partagée, paramétrage minimal (baud rate + format). Cas d'usage : communiquer entre **2 microcontrôleurs**, lire un **module GPS** (trames NMEA à 9600 bauds), dialoguer avec un **module Bluetooth/Wi-Fi** en mode AT, piloter un afficheur série. Limite : UART est **point-à-point** (1 ↔ 1). Pour plusieurs devices, utiliser un second UART, ou basculer sur [[micropython-i2c|I2C]]/[[micropython-spi|SPI]].

## Procédure pas à pas

Quatre étapes : identifier les UART, câbler en croisant TX/RX, configurer le baud rate, écrire le code.

### 1. Identifier les UART du Pico

Le Pico expose **deux UART matériels**, `UART0` et `UART1`, assignables à plusieurs broches selon le pinout :

| UART | TX (défaut) | RX (défaut) |
|---|---|---|
| `UART0` | GP0 | GP1 |
| `UART1` | GP4 | GP5 |

La **console REPL** est sur l'USB, indépendante : on garde `print()` vers Thonny **tout en** utilisant `UART0` pour un module. C'est plus simple que sur Uno (où l'unique UART est partagé avec l'USB).

### 2. Câbler en croisant TX/RX

Règle inviolable : **TX d'un côté → RX de l'autre**. GND commun **obligatoire**.

| Pico | Device externe |
|---|---|
| TX (GP0) | → RX |
| RX (GP1) | ← TX |
| GND | — GND |

![Câblage : liaison UART entre un Pico (TX GP0, RX GP1) et un périphérique — TX et RX croisés, GND commun|600](/ressources/img/micropython-uart/branchement-uart.svg)

### 3. Configurer le baud rate

Le **baud rate** doit être identique aux deux bouts (9600, 115200…). Le module documente son débit par défaut (HC-05 : 9600, GPS NEO-6M : 9600). Format de trame : **`8N1`** par défaut (8 bits, sans parité, 1 stop).

### 4. Écrire le code

```python
from machine import UART, Pin
from time import sleep

uart = UART(0, baudrate=9600, tx=Pin(0), rx=Pin(1))

while True:
    if uart.any():                 # octets disponibles ?
        data = uart.read()         # lit tout ce qui est en attente (bytes)
        print("Recu :", data)
    uart.write(b"ping\n")          # émet (bytes, pas str)
    sleep(1)
```

`uart.any()` indique le nombre d'octets reçus. `uart.read()` / `uart.readline()` lisent. `uart.write()` émet. **On manipule des `bytes`** (`b"..."`), pas des `str` — convertir au besoin (`texte.encode()` / `data.decode()`).

## Exemple — Communication entre deux Pico

Un Pico A envoie un compteur. Un Pico B le reçoit, le décode, l'affiche.

**Câblage** : A `GP0` (TX) → B `GP1` (RX), A `GP1` (RX) ← B `GP0` (TX), GND commun.

**Pico A (émetteur)** :

```python
from machine import UART, Pin
from time import sleep

uart = UART(0, baudrate=9600, tx=Pin(0), rx=Pin(1))
compteur = 0

while True:
    uart.write("{}\n".format(compteur).encode())   # trame terminée par \n
    print("Envoye :", compteur)
    compteur += 1
    sleep(1)
```

**Pico B (récepteur)** :

```python
from machine import UART, Pin

uart = UART(0, baudrate=9600, tx=Pin(0), rx=Pin(1))

while True:
    if uart.any():
        ligne = uart.readline()        # lit jusqu'au \n (bytes)
        if ligne:
            valeur = int(ligne.decode().strip())   # bytes → texte → entier
            print("Recu :", valeur)
```

`readline()` lit jusqu'au marqueur `\n` : le récepteur sait ainsi où finit une valeur.

## Pièges

**TX/RX non croisés.** Erreur n°1 : TX→TX, RX→RX. Rien ne passe. **TX d'un côté → RX de l'autre.**

**Baud rate désaccordé.** Mêmes bauds aux deux bouts, sinon symboles incompréhensibles.

**Pas de GND commun.** Sans masse partagée, pas de référence : la communication ne marche pas, même avec deux alimentations.

**Confondre `bytes` et `str`.** `uart.write("texte")` échoue : il faut des `bytes` (`.encode()`), et `uart.read()` renvoie des `bytes` (`.decode()` pour du texte).

**Niveaux logiques incompatibles.** Un module qui sort 5 V sur le `RX` du Pico (3,3 V) l'abîme : pont diviseur ou translateur ([[niveaux-de-tension|niveaux de tension]]).

**Trame mal délimitée.** Sans marqueur de fin (`\n`), le récepteur ne sait pas où une valeur finit. Utiliser `readline()` ou un protocole structuré.

**Lire sans vérifier `any()`.** `uart.read()` sans données renvoie `None`. Tester `uart.any()` (ou gérer `None`) évite une erreur.

## Cas particulier — Adaptateur USB-série pour debug

Un **adaptateur USB-série** (CH340, CP2102) relie le PC à un UART sans passer par le Pico : intercepter un bus, tester un module Bluetooth/Wi-Fi en mode AT en direct, programmer une puce sans USB. Outil de paillasse très utile au debug.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — validation isolée d'un module UART (GPS, Bluetooth) avant intégration.
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — bus de commande entre sous-systèmes quand l'architecture sépare perception et commande sur plusieurs MCU.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — vérifier que les bus tiennent à pleine charge (débit, fiabilité, parasites).

UART est le bus à connaître en premier : 2 fils, et la passerelle vers une foule de modules. Sur le Pico, l'avantage est que ses 2 UART matériels sont libres (la console est sur l'USB).

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-repl|Le REPL]] — la console (sur USB), distincte des UART matériels
- [[bus-de-communication|Bus de communication]] — UART parmi les bus
- [[micropython-i2c|I2C]] · [[micropython-spi|SPI]] — pour plusieurs devices
- [[uart|UART]] — la notion transverse
- [[arduino-uart|UART sur Arduino]] — l'équivalent C++ (et `SoftwareSerial`)
