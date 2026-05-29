---
title: I2C sur Arduino
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - bus-de-communication
  - arduino-bibliotheques
aa: []
draft: false
---

**I2C** (*Inter-Integrated Circuit*) est un bus série synchrone à deux fils — `SDA` (data) et `SCL` (clock) — qui permet à plusieurs devices de cohabiter sur le même bus, chacun identifié par une **adresse 7 bits**. Là où [[arduino-uart|UART]] est limité au point-à-point, I2C met en réseau jusqu'à 127 devices théoriques sur les deux mêmes fils. C'est le bus de prédilection des capteurs évolués (BMP280, MPU6050, BME680, MAX30102), des afficheurs (OLED SSD1306, LCD via PCF8574) et des horloges (DS3231, DS1307).

## À quoi ça sert ?

Trois rôles complémentaires en projet école :

- **Multiplexer plusieurs capteurs** sur 2 broches (SDA + SCL) — précieux quand les GPIO sont rares.
- **Connecter un afficheur** sans monopoliser un grand nombre de broches (un OLED SSD1306 I2C n'en demande que 2, contre 16 pour un LCD parallèle).
- **Lire / écrire dans des composants utilitaires** : RTC, EEPROM externe, expanseur de GPIO (PCF8574, MCP23017).

L'API Arduino passe par la bibliothèque **`Wire.h`**, livrée par défaut avec l'IDE.

## Procédure pas à pas

Quatre étapes : identifier les broches I2C, câbler avec pull-ups, scanner les adresses présentes, lire un device.

### 1. Identifier les broches I2C de la carte

| Carte | SDA | SCL |
|---|---|---|
| Uno R3, Nano (ATmega328P) | A4 | A5 |
| Mega 2560 | D20 | D21 |
| Uno R4 | A4 (et SDA dédié) | A5 (et SCL dédié) |
| ESP32 | GPIO 21 (défaut) | GPIO 22 (défaut), reconfigurable |

Sur Uno R3, les broches SDA/SCL sont aussi *dupliquées* en haut de la carte (à côté de la broche AREF) sur les cartes plus récentes — équivalent fonctionnel.

### 2. Câbler avec pull-ups

I2C nécessite des résistances de **pull-up vers VCC** sur `SDA` et `SCL` (typiquement 4,7 kΩ pour 5 V, 2,2 kΩ pour 3,3 V). **La plupart des modules I2C du commerce les intègrent** — pas besoin de les ajouter manuellement pour un premier essai avec un seul module.

Câblage générique :

| Module | Arduino Uno |
|---|---|
| VCC | 5 V (ou 3,3 V selon module) |
| GND | GND |
| SDA | A4 |
| SCL | A5 |

Prendre capture d'écran ou photo de *un module I2C BMP280 (ou équivalent : BME280, MPU6050, RTC DS3231) câblé sur les broches A4/A5 d'un Arduino Uno R3*.

### 3. Scanner les adresses I2C présentes

Avant tout code applicatif, vérifier que le module répond avec un **scanner I2C** — un sketch qui essaye chaque adresse de 1 à 127 et liste celles qui répondent.

```cpp
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(115200);
  delay(2000);
  Serial.println("Scan I2C...");

  byte trouves = 0;
  for (byte adresse = 1; adresse < 127; adresse++) {
    Wire.beginTransmission(adresse);
    byte erreur = Wire.endTransmission();
    if (erreur == 0) {
      Serial.print("Device a 0x");
      if (adresse < 16) Serial.print("0");
      Serial.println(adresse, HEX);
      trouves++;
    }
  }
  if (trouves == 0) Serial.println("Aucun device trouve.");
}

void loop() {}
```

Téléverser, ouvrir le moniteur série, lire l'adresse. **Si le scanner ne trouve rien** : vérifier le câblage (SDA/SCL non inversés, pull-ups, alimentation du module).

Adresses typiques : OLED SSD1306 = `0x3C` ou `0x3D` ; BMP280 = `0x76` ou `0x77` ; DS3231 = `0x68` ; MPU6050 = `0x68` ou `0x69` ; LCD I2C (via PCF8574) = `0x27` ou `0x3F`.

### 4. Lire un device avec sa bibliothèque

Une fois l'adresse confirmée, installer la bibliothèque du composant (voir [[arduino-bibliotheques|utiliser une bibliothèque]]), ouvrir un exemple, ajuster l'adresse, téléverser. La lecture est encapsulée par la bibliothèque — pas besoin de manipuler `Wire.h` directement dans 99 % des cas.

## Exemple — Lecture d'un BMP280 (pression et température)

Cas complet sur un module emblématique des projets école.

**Bibliothèque** : *Adafruit BMP280 Library* (gestionnaire de bibliothèques, taper « BMP280 »). Installe également `Adafruit BusIO` et `Adafruit Unified Sensor` en dépendances — accepter.

**Code** :

```cpp
#include <Wire.h>
#include <Adafruit_BMP280.h>

Adafruit_BMP280 bmp;  // I2C

void setup() {
  Serial.begin(115200);
  delay(2000);

  if (!bmp.begin(0x76)) {  // adresse trouvée au scanner
    Serial.println("BMP280 introuvable, verifier le cablage");
    while (1);
  }
  Serial.println("BMP280 OK");
}

void loop() {
  Serial.print("T = "); Serial.print(bmp.readTemperature()); Serial.print(" °C\t");
  Serial.print("P = "); Serial.print(bmp.readPressure() / 100.0); Serial.print(" hPa\t");
  Serial.print("Alt = "); Serial.print(bmp.readAltitude(1013.25)); Serial.println(" m");
  delay(1000);
}
```

Soufflez sur le module — la température monte. Faites varier l'altitude (montée d'escalier) — la pression baisse de ~12 Pa par mètre, l'altitude estimée varie.

## Pièges

**Adresse fausse.** Une adresse de bibliothèque par défaut (souvent `0x77`) qui ne correspond pas à l'adresse réelle du module (souvent `0x76` sur les BMP280 chinois) : le device est introuvable. **Toujours commencer par le scanner.**

**Pull-ups manquantes ou en surnombre.** Sans pull-up, le bus reste flottant et rien ne marche. Avec trop de modules à pull-ups en parallèle, la résistance équivalente devient trop faible et le bus ne tient plus la montée du signal. Désactiver les pull-ups sur tous les modules sauf un (un jumper à dessouder).

**Niveau VCC incompatible.** Un module 3,3 V alimenté en 5 V — destruction. Un module 5 V sur 3,3 V — fonctionne mal ou ne démarre pas. Vérifier la fiche du module. Pour des bus mixtes 3,3 V / 5 V, utiliser un convertisseur de niveau bidirectionnel I2C (PCA9306, ou montage MOSFET BSS138).

**Conflit d'adresses entre devices.** Deux MPU6050 ont par défaut la même adresse `0x68`. La plupart des modules permettent de basculer un strap ou de tirer une broche pour passer à `0x69` — lire la fiche du module. Sans cela, les deux devices répondent en même temps, le bus est corrompu.

**SDA/SCL inversés.** Le scanner ne trouve rien. Vérifier que SDA est bien sur A4 et SCL sur A5 (sur Uno).

**Câbles trop longs.** I2C tolère jusqu'à ~1-2 m de câblage en standard mode (100 kHz) avec pull-ups bien dimensionnées. Au-delà ou sur câbles bruyants, les trames sont corrompues. Raccourcir, blinder, ou changer pour un bus différentiel (CAN, RS-485).

**Wire ne démarre pas sur ESP32.** `Wire.begin()` sans paramètres utilise GPIO 21/22 par défaut sur ESP32. Pour reconfigurer : `Wire.begin(SDA, SCL)` avec les broches voulues. Sur d'autres cartes (Wemos D1 Mini, NodeMCU), le brochage par défaut diffère.

## Cas particulier — Plusieurs bus I2C

Sur ESP32 ou Mega 2560, on peut activer **plusieurs bus I2C** indépendants pour résoudre les conflits d'adresses ou répartir la charge :

- ESP32 : deux contrôleurs I2C, `Wire` et `Wire1`, sur des broches distinctes.
- Sur Uno R3, alternative logicielle : `SoftI2CMaster` — bus I2C émulé par bit-banging sur n'importe quelle paire de broches.

Pour deux devices à même adresse sur le même bus, alternative légère : utiliser un **multiplexeur I2C** comme le TCA9548A (8 canaux), qui présente un seul device par canal au bus principal.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — chaque capteur ou afficheur I2C se valide en deux temps : scanner pour confirmer l'adresse, exemple de bibliothèque pour confirmer la lecture.
- **Étape 4 de la [[concept|phase de concept]]** — l'EAT favorise I2C dès qu'on a 2+ devices ou qu'on doit économiser les broches GPIO.

Le scanner I2C est l'outil de diagnostic universel du bus — à garder dans un coin de l'environnement de travail, à téléverser à chaque nouveau câblage. Il sépare en 30 secondes les problèmes matériels (rien ne répond) des problèmes logiciels (le device répond mais la lecture ne marche pas).

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[bus-de-communication|Bus de communication]] — I2C parmi les bus
- [[arduino-spi|SPI sur Arduino]] · [[arduino-uart|UART sur Arduino]] — alternatives
- [[arduino-afficheur|Afficheur LCD / OLED]] — usage typique d'I2C
- [[arduino-bibliotheques|Utiliser une bibliothèque]] — pour les capteurs I2C
- [[i2c|I2C]] — la notion transverse
- [[niveaux-de-tension|Niveaux de tension]] — pour bus mixtes 3,3 / 5 V
