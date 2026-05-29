---
title: UART sur Arduino
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-serie
  - bus-de-communication
aa: []
draft: false
---

**UART** (*Universal Asynchronous Receiver-Transmitter*) est un bus série point-à-point à deux fils : `TX` (transmission) et `RX` (réception), traversants entre deux devices. C'est le bus sous-jacent du moniteur série de l'IDE (entre Arduino et PC via le chip USB) et aussi celui qu'on utilise pour faire dialoguer **deux Arduino entre eux**, ou un Arduino avec un module externe (GPS NEO-6M, Bluetooth HC-05, lecteur RFID PN532). Cette fiche se concentre sur la liaison UART vers un device externe — par opposition à la liaison vers le PC, déjà traitée dans [[arduino-serie|moniteur série]].

## À quoi ça sert ?

UART est le bus le plus simple à mettre en œuvre : 2 fils, pas d'horloge partagée, paramétrage minimal (baud rate + format de trame). Cas d'usage en projet école :

- **Communiquer entre 2 Arduino** sur un même robot (un pour la perception, un pour la commande, par exemple).
- **Lire un module GPS** (NEO-6M, NEO-8M) — sortie en trames texte NMEA à 9600 bauds.
- **Communiquer avec un module Bluetooth ou Wi-Fi** (HC-05, HC-06, ESP-01 en mode AT).
- **Piloter un afficheur série** (LCD 16×2 avec module série, certains afficheurs OLED).

Limite structurelle : UART est **point-à-point** (1 émetteur ↔ 1 récepteur). Pour brancher plusieurs devices, il faut soit plusieurs UART (Mega a 4 UART matériels), soit basculer sur [[arduino-i2c|I2C]] ou [[arduino-spi|SPI]] qui supportent plusieurs devices.

## Procédure pas à pas

Quatre étapes : identifier les UART disponibles, câbler en croisant `TX`/`RX`, configurer le baud rate, écrire le code.

### 1. Identifier les UART disponibles

| Carte | UART matériels | Broches |
|---|---|---|
| Uno R3, Nano | 1 (UART0, partagé avec USB) | D0 (RX), D1 (TX) |
| Uno R4 | 1 matériel + 1 USB séparé | D0/D1 (matériel), USB indépendant |
| Mega 2560 | 4 (UART0, UART1, UART2, UART3) | D0/D1, D19/D18, D17/D16, D15/D14 |
| ESP32 | 3 | configurables |

**Sur Uno R3, l'unique UART matériel est partagé avec l'USB** — utiliser `Serial` pour parler à un module externe désactive le moniteur série pendant le téléversement et la communication. Solution : **`SoftwareSerial`**, une bibliothèque qui émule un UART sur n'importe quelle paire de broches GPIO.

### 2. Câbler en croisant TX/RX

Règle inviolable d'UART : **TX d'un côté → RX de l'autre**. Le TX de l'Arduino émet, donc il se branche sur le RX du device qui reçoit. Symétriquement, le RX de l'Arduino reçoit ce que le device émet sur son TX.

| Arduino | Device externe |
|---|---|
| TX | → RX |
| RX | ← TX |
| GND | — GND |

GND commun **obligatoire**. La tension VCC du device est indépendante (alimentation séparée souvent recommandée pour modules gourmands comme HC-05).

Prendre capture d'écran ou photo de *deux cartes Arduino Uno reliées entre elles par leurs broches D10/D11 (SoftwareSerial) en croisé, plus GND commun*.

### 3. Configurer le baud rate

Le **baud rate** (bits par seconde) doit être identique aux deux extrémités. Valeurs courantes : 9600, 19200, 38400, 57600, 115200 bauds. Le module externe a un baud rate par défaut documenté (HC-05 : 9600 ; GPS NEO-6M : 9600 ; ESP-01 mode AT : 115200 historiquement, 9600 sur certaines versions).

**Format de trame** : `8N1` (8 bits de données, pas de parité, 1 bit de stop) est la convention quasi-universelle — pas besoin de la préciser sur Arduino, c'est le défaut.

### 4. Écrire le code

**Cas a — UART matériel sur Mega** (utilise `Serial1`, `Serial2`...) :

```cpp
void setup() {
  Serial.begin(115200);   // pour le PC
  Serial1.begin(9600);    // pour le module externe sur D19/D18
}

void loop() {
  // Lire ce que le module envoie, le reposter sur le PC
  if (Serial1.available()) {
    char c = Serial1.read();
    Serial.print(c);
  }
  // Lire ce que le PC envoie, le retransmettre au module
  if (Serial.available()) {
    char c = Serial.read();
    Serial1.print(c);
  }
}
```

**Cas b — `SoftwareSerial` sur Uno** :

```cpp
#include <SoftwareSerial.h>

const int RX_BROCHE = 10;  // RX virtuel
const int TX_BROCHE = 11;  // TX virtuel
SoftwareSerial monSerie(RX_BROCHE, TX_BROCHE);

void setup() {
  Serial.begin(115200);   // pour le PC
  monSerie.begin(9600);   // pour le module externe sur D10/D11
}

void loop() {
  if (monSerie.available()) {
    char c = monSerie.read();
    Serial.print(c);
  }
  if (Serial.available()) {
    char c = Serial.read();
    monSerie.print(c);
  }
}
```

Ce pattern *« pont série »* sert à observer ce que dit un module sur le moniteur, et à lui envoyer des commandes depuis le moniteur.

## Exemple — Communication entre deux Arduino

Cas complet : un Arduino A envoie un compteur ; un Arduino B le reçoit, le décode, l'affiche au moniteur série.

**Câblage** :
- Arduino A D11 (TX SoftwareSerial) → Arduino B D10 (RX SoftwareSerial)
- Arduino A D10 (RX) ← Arduino B D11 (TX)
- GND A — GND B (obligatoire)

**Code Arduino A (émetteur)** :

```cpp
#include <SoftwareSerial.h>
SoftwareSerial lien(10, 11);  // RX, TX

int compteur = 0;

void setup() {
  Serial.begin(115200);
  lien.begin(9600);
}

void loop() {
  lien.print(compteur);
  lien.print('\n');  // marqueur de fin de trame
  Serial.print("Envoye : "); Serial.println(compteur);
  compteur++;
  delay(1000);
}
```

**Code Arduino B (récepteur)** :

```cpp
#include <SoftwareSerial.h>
SoftwareSerial lien(10, 11);  // RX, TX

void setup() {
  Serial.begin(115200);
  lien.begin(9600);
}

void loop() {
  if (lien.available()) {
    String trame = lien.readStringUntil('\n');
    int valeur = trame.toInt();
    Serial.print("Recu : ");
    Serial.println(valeur);
  }
}
```

Téléverser sur chaque Arduino, ouvrir le moniteur série de chacun (sur deux PC, ou ouvrir l'un puis débrancher avant l'autre). On voit le compteur émis d'un côté, reçu de l'autre.

## Pièges

**TX/RX non croisés.** L'erreur n°1 du débutant : brancher TX→TX et RX→RX. Le système semble alimenté mais aucune communication ne passe. **TX d'un côté → RX de l'autre, toujours.**

**Baud rate désaccordé.** Les deux extrémités doivent avoir le même `.begin(N)`. Sinon, du texte en symboles incompréhensibles sort, comme avec le moniteur série mal réglé.

**Pas de GND commun.** Une communication UART sans GND partagé ne fonctionne pas — les niveaux logiques n'ont pas de référence commune. Toujours relier GND, même si chaque carte a sa propre alimentation.

**`SoftwareSerial` à haut débit instable.** La bibliothèque émule UART par bit-banging et atteint ses limites au-delà de 38400 bauds. Pour des débits élevés, préférer un UART matériel (Mega) ou un module Wi-Fi/Bluetooth qui négocie son débit en interne.

**Conflit avec USB sur Uno R3.** Utiliser `Serial` (UART0) pour parler à un module externe sur D0/D1 occupe les mêmes broches que l'USB — le téléversement échoue jusqu'à ce qu'on débranche le module. Sur Uno, préférer `SoftwareSerial` pour les modules externes.

**Niveaux logiques incompatibles.** Brancher le TX d'un module 3,3 V (ESP-01) sur le RX d'un Uno R3 (5 V) marche en général dans ce sens (l'Uno accepte 3,3 V comme `HIGH`). L'inverse — TX Uno 5 V sur RX ESP-01 3,3 V — peut abîmer l'ESP. Diviseur de tension ou convertisseur de niveau obligatoire. Voir [[niveaux-de-tension|niveaux de tension]].

**Trame mal délimitée.** Émettre `Serial.print(123)` côté A et lire `Serial.read()` côté B donne `'1'`, `'2'`, `'3'` séparés. Sans marqueur de fin de trame (newline `'\n'`, ou caractère spécifique), le récepteur ne sait pas où une valeur finit. Utiliser `readStringUntil('\n')` ou un protocole structuré.

**Buffer UART qui déborde.** Le buffer de réception est de 64 octets par défaut sur Uno. Si on émet plus vite que le récepteur ne lit, les octets en surplus sont perdus en silence. Surveiller le débit, ou imposer un *flow control* logiciel (acquittement après chaque trame).

## Cas particulier — Adaptateur USB-série pour debug

Un **adaptateur USB-série** (FTDI FT232, CH340, CP2102) permet de relier le PC à un UART sans passer par Arduino. Utile pour :

- Observer ce qui passe entre Arduino et un module externe en interceptant le bus (avec un Y).
- Programmer une carte sans USB intégré (ATmega328 nu, ESP-01).
- Tester un module Bluetooth/Wi-Fi en mode AT en direct depuis le PC, avant intégration Arduino.

Coût : 2-5 € sur AliExpress. Investissement très rentable pour le debug embarqué.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — validation isolée d'un module UART (GPS, Bluetooth) avant intégration au système.
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — bus de commande entre sous-systèmes quand l'architecture sépare perception et commande sur plusieurs MCU.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — vérification que les bus tiennent à pleine charge (débit, fiabilité, parasites).

UART est le bus à connaître en premier pour deux raisons : il sert au debug du PC, il est la passerelle vers une foule de modules courants. Maîtriser le pattern *« pont série »* (router le PC vers un module en deux lignes) fait gagner énormément de temps en mise au point.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-serie|Moniteur série]] — UART vers le PC, prérequis
- [[bus-de-communication|Bus de communication]] — UART parmi les bus disponibles
- [[arduino-i2c|I2C sur Arduino]] · [[arduino-spi|SPI sur Arduino]] — pour plusieurs devices
- [[niveaux-de-tension|Niveaux de tension]] — 3,3 V vs 5 V sur TX/RX
- [[uart|UART]] — la notion transverse
