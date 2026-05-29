---
title: SPI sur Arduino
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

**SPI** (*Serial Peripheral Interface*) est un bus série synchrone à 4 fils — `SCK` (horloge), `MOSI` (Master Out Slave In), `MISO` (Master In Slave Out) et `SS` (Slave Select, aussi noté `CS`). Il offre des débits nettement plus élevés qu'[[arduino-i2c|I2C]] (plusieurs MHz en pratique) au prix de plus de broches. C'est le bus de prédilection des **cartes SD**, des **écrans TFT**, des **modules sans fil** (NRF24L01, LoRa SX1276) et de certains capteurs rapides (accéléromètres haute fréquence).

## À quoi ça sert ?

Trois usages emblématiques en projet école :

- **Stocker des données sur carte SD** — datalogger de mesures capteur, archivage de trames GPS, logs de débogage.
- **Piloter un écran graphique** — TFT 2,4″ ILI9341, écran e-paper Waveshare.
- **Communiquer en radio** — modules NRF24L01 (2,4 GHz) pour télécommande à courte portée, LoRa pour longue portée.

Là où I2C met en réseau plusieurs devices à 2 fils via adressage, SPI sélectionne explicitement *un* device à la fois par sa broche `SS` — chaque device additionnel coûte une broche GPIO de plus.

## Procédure pas à pas

Quatre étapes : identifier les broches SPI, câbler avec un SS dédié, installer la bibliothèque, écrire le code.

### 1. Identifier les broches SPI de la carte

| Carte | SCK | MOSI | MISO | SS (par défaut) |
|---|---|---|---|---|
| Uno R3, Nano | D13 | D11 | D12 | D10 |
| Mega 2560 | D52 | D51 | D50 | D53 |
| Uno R4 | D13 | D11 | D12 | D10 |
| ESP32 (VSPI) | D18 | D23 | D19 | D5 |

`SCK`, `MOSI`, `MISO` sont **fixes** (câblage matériel du contrôleur SPI), `SS` est par convention sur D10 mais peut être **n'importe quelle GPIO** — c'est le code applicatif qui choisit la broche à tirer à `LOW` pour adresser un device.

### 2. Câbler avec un SS dédié

Câblage générique pour un module SD card :

| Module SD | Arduino Uno |
|---|---|
| VCC | 5 V (ou 3,3 V selon module — vérifier) |
| GND | GND |
| MISO | D12 |
| MOSI | D11 |
| SCK | D13 |
| CS | D10 (ou autre broche GPIO) |

Si on a plusieurs devices SPI sur le même bus (SD + écran TFT, par exemple), `SCK`/`MOSI`/`MISO` sont partagés, mais **chaque device a sa propre broche `CS` sur une GPIO distincte**.

Prendre capture d'écran ou photo de *un module lecteur de carte microSD câblé sur les broches SPI D10-D13 d'un Arduino Uno R3*.

### 3. Installer la bibliothèque

Pour la carte SD : `SD.h` est **livrée avec l'IDE** — pas besoin d'installer. Pour d'autres devices : `Adafruit_GFX` + `Adafruit_ILI9341` pour les écrans TFT, `RF24` pour les NRF24L01, etc. Voir [[arduino-bibliotheques|utiliser une bibliothèque]].

### 4. Écrire le code (SD card)

```cpp
#include <SPI.h>
#include <SD.h>

const int CS_SD = 10;

void setup() {
  Serial.begin(115200);
  delay(2000);

  if (!SD.begin(CS_SD)) {
    Serial.println("Echec initialisation SD");
    while (1);
  }
  Serial.println("SD OK");

  // Ecrire dans un fichier
  File f = SD.open("test.txt", FILE_WRITE);
  if (f) {
    f.println("Hello SD card !");
    f.println(millis());
    f.close();
    Serial.println("Ecrit");
  } else {
    Serial.println("Echec ouverture fichier en ecriture");
  }

  // Relire
  f = SD.open("test.txt");
  if (f) {
    while (f.available()) Serial.write(f.read());
    f.close();
  }
}

void loop() {}
```

Insérer une carte microSD formatée en FAT16 ou FAT32 (capacité ≤ 32 Go pour FAT32), téléverser, observer le moniteur série. Retirer la carte, la lire sur un PC pour vérifier le fichier `test.txt`.

## Exemple — Datalogger température sur SD card

Cas complet : lire un capteur (potentiomètre comme proxy de température), écrire la mesure horodatée sur la carte SD toutes les 5 secondes.

**Câblage** : SD module sur SPI (D10-D13), potentiomètre sur A0.

```cpp
#include <SPI.h>
#include <SD.h>

const int CS_SD  = 10;
const int CAPTEUR = A0;
const unsigned long INTERVALLE = 5000;
unsigned long dernierEnreg = 0;

void setup() {
  Serial.begin(115200);
  if (!SD.begin(CS_SD)) {
    Serial.println("SD KO");
    while (1);
  }
}

void loop() {
  if (millis() - dernierEnreg >= INTERVALLE) {
    dernierEnreg = millis();
    int val = analogRead(CAPTEUR);

    File f = SD.open("data.csv", FILE_WRITE);
    if (f) {
      f.print(millis()); f.print(","); f.println(val);
      f.close();
      Serial.print("Loggue : t="); Serial.print(millis()); Serial.print(" val="); Serial.println(val);
    }
  }
}
```

Laisser tourner quelques minutes, retirer la carte, ouvrir `data.csv` dans un tableur — colonne horodatage en millisecondes, colonne valeur. Tracer la courbe pour valider la stabilité.

## Pièges

**`CS` non géré en parallèle.** Avec plusieurs devices SPI, oublier de désactiver les `CS` non utilisés (les laisser à `HIGH`) : plusieurs devices émettent en même temps sur `MISO`, lectures corrompues. Au démarrage : `pinMode(CS_X, OUTPUT); digitalWrite(CS_X, HIGH);` pour chaque device.

**Module SD non détecté.** Causes habituelles : carte mal formatée (essayer FAT32), carte trop grande (> 32 Go : passer en exFAT, qui demande une bibliothèque SD avancée comme `SdFat`), connexions douteuses, niveau d'alimentation (certains modules SD veulent 3,3 V).

**Niveaux logiques 5 V sur module SD 3,3 V.** Beaucoup de modules SD intègrent leur propre régulateur 3,3 V et un convertisseur de niveau sur les broches SPI — `MISO`, `MOSI`, `SCK`, `CS`. D'autres non, et brancher du 5 V sur les broches SPI grille la carte. Vérifier la fiche du module.

**Mode SPI ou bit order mal réglé.** SPI a 4 modes (0 à 3) selon polarité et phase de l'horloge. Les bibliothèques officielles le gèrent ; pour le code direct via `SPI.beginTransaction()`, lire la datasheet du device. La carte SD utilise mode 0.

**Bus partagé avec un shield Ethernet ou un module Wi-Fi.** Conflit de `CS` ou bibliothèques qui ne libèrent pas le bus proprement. Symptôme : tantôt la SD marche, tantôt l'Ethernet. Solution : encadrer chaque accès SPI par `SPI.beginTransaction()` et `SPI.endTransaction()` (la majorité des bibliothèques modernes le font automatiquement).

**Câbles trop longs ou en breadboard pour SD.** SPI à 4 MHz ou plus est sensible à la longueur des fils Dupont (réflexions, diaphonie). Pour un projet sérieux, court-circuiter par soudure ou utiliser un proto shield. Pour le banc d'essai, garder les fils sous 10 cm.

**Ouverture en écriture qui échoue silencieusement.** `SD.open(..., FILE_WRITE)` retourne un objet `File` invalide si l'ouverture échoue. Toujours tester `if (f)` avant d'écrire.

## Cas particulier — SPI software vs hardware

Toutes les broches SPI peuvent être émulées en logiciel (`bit-banging`) sur des GPIO standard, au prix d'un débit nettement plus faible. Bibliothèque : `SoftwareSPI` ou écriture manuelle. Utile pour les cartes avec peu de broches matérielles ou les cas où on veut isoler complètement un device problématique sur ses propres lignes.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — datalogger sur SD au plus tôt pour capturer les essais terrain hors écran (mesures de vibration, autotests à blanc).
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — un datalogger embarqué (SD) qui capture toutes les variables du système est la meilleure arme pour les bugs intermittents qui ne se reproduisent qu'en démo.

SPI est moins universel qu'I2C en projet débutant, mais devient incontournable dès qu'on veut écrire des fichiers (SD), afficher du graphique (TFT) ou communiquer en sans-fil rapide. Bien choisir ses broches `CS` dès le début économise les conflits futurs.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[bus-de-communication|Bus de communication]] — SPI parmi les bus
- [[arduino-i2c|I2C sur Arduino]] · [[arduino-uart|UART sur Arduino]] — alternatives
- [[arduino-shield|Utiliser un shield]] — beaucoup de shields SD/Ethernet sont SPI
- [[arduino-bibliotheques|Utiliser une bibliothèque]] — `SD.h`, `Adafruit_GFX`, `RF24`
- [[spi|SPI]] — la notion transverse
