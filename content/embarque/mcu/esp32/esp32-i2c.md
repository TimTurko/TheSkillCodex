---
title: I2C sur l'ESP32
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - esp32
prerequis:
  - esp32
  - esp32-serie
  - i2c
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

L'**[[i2c|I2C]]** est le bus à **deux fils** (SDA pour les données, SCL pour l'horloge) qui relie plusieurs périphériques — capteurs, écrans OLED, horloges temps réel — à l'ESP32, chacun repéré par une **adresse**. Sur ESP32, il se pilote avec la bibliothèque `Wire` ; ses broches par défaut sont **GPIO21 (SDA)** et **GPIO22 (SCL)**, mais elles sont **remappables**, et la puce dispose de **deux contrôleurs** (`Wire` et `Wire1`).

## À quoi ça sert ?

Un seul couple de fils suffit à interroger toute une grappe de composants :

- **Lire des capteurs.** Température, pression, humidité, accéléromètre : la plupart des capteurs numériques parlent I2C, chacun avec sa bibliothèque.
- **Afficher.** Les petits écrans OLED (SSD1306) et LCD à platine I2C s'adressent sur deux fils, sans mobiliser une dizaine de broches.
- **Chaîner plusieurs modules.** Tant que leurs adresses diffèrent, capteurs et écran partagent le **même bus** SDA/SCL.

Le fonctionnement du protocole (adressage, ACK, maître/esclave) est décrit dans la notion transverse [[i2c|I2C]]. Ici, on voit **comment le brancher et le coder sur ESP32**.

## Procédure pas à pas

Quatre temps : câbler, initialiser, scanner les adresses, exploiter via une bibliothèque.

### 1. Câbler : deux fils, deux résistances de tirage

SDA et SCL sont des lignes **à drain ouvert** : elles ont besoin de **résistances de tirage** (~4,7 kΩ) vers le 3,3 V pour remonter à l'état haut. La plupart des modules les intègrent déjà — inutile d'en ajouter si un seul module est présent.

![Branchement I2C entre un ESP32 et un module : SDA sur GPIO21, SCL sur GPIO22, alimentation 3,3 V, masse commune, résistances de tirage vers 3,3 V|600](/ressources/img/esp32-i2c/branchement-i2c.svg)

> [!warning]
> **Tirer vers 3,3 V, pas vers 5 V.** Les lignes SDA/SCL d'un module alimenté en 5 V remontent à 5 V et peuvent **abîmer les broches** de l'ESP32. Alimenter le module en 3,3 V, ou intercaler un adaptateur de niveau — voir [[niveaux-de-tension|niveaux de tension]].

### 2. Initialiser le bus

`Wire.begin()` sans argument utilise les broches par défaut (GPIO21/22). Pour d'autres broches, on les passe explicitement :

```cpp
#include <Wire.h>

const int SDA_PIN = 21;
const int SCL_PIN = 22;

void setup() {
  Wire.begin(SDA_PIN, SCL_PIN);   // équivalent à Wire.begin() ici (broches par défaut)
}
```

### 3. Scanner les adresses

Avant d'exploiter un module, on vérifie qu'il **répond** et à quelle adresse. Le scanner interroge chaque adresse possible et note celles qui accusent réception (`endTransmission()` renvoie `0`).

Ce scanner est l'outil de diagnostic n°1 de l'I2C : un bus muet (aucune adresse trouvée) trahit presque toujours un problème de câblage ou de tirage.

### 4. Exploiter via une bibliothèque

Une fois l'adresse connue, on installe la bibliothèque du composant (Adafruit, Sparkfun…) qui masque les échanges bruts. On ne manipule presque jamais `Wire.write()` / `Wire.read()` à la main.

## Exemple — Scanner le bus et lire les adresses

Cas concret : lister au moniteur tous les périphériques présents sur le bus. On branche un ou plusieurs modules, on téléverse, on lit les adresses trouvées.

```cpp
#include <Wire.h>

const int SDA_PIN = 21;
const int SCL_PIN = 22;

void setup() {
  Serial.begin(115200);
  Wire.begin(SDA_PIN, SCL_PIN);
  Serial.println("Scan du bus I2C...");
}

void loop() {
  int trouves = 0;
  for (byte adr = 1; adr < 127; adr++) {   // adresses 7 bits : 1 à 126
    Wire.beginTransmission(adr);
    if (Wire.endTransmission() == 0) {     // 0 = un module a accusé réception (ACK)
      Serial.print("  module a l'adresse 0x");
      if (adr < 16) Serial.print("0");     // affichage sur 2 chiffres
      Serial.println(adr, HEX);
      trouves++;
    }
  }
  if (trouves == 0) {
    Serial.println("  aucun module — verifier cablage et tirages");
  }
  delay(3000);
}
```

`endTransmission()` renvoie `0` quand un esclave répond à l'adresse essayée : c'est l'accusé de réception (ACK) du protocole. On balaie de `1` à `126` (les adresses 7 bits), on affiche celles qui répondent en hexadécimal. Un SSD1306 apparaît en `0x3C`, un BME280 en `0x76`…

Avec un afficheur SSD1306 et un capteur BME280 sur le bus, le moniteur affiche :

```
Scan du bus I2C...
  module a l'adresse 0x3C
  module a l'adresse 0x76
  module a l'adresse 0x3C
  module a l'adresse 0x76
```

La liste se répète toutes les 3 secondes : débrancher un module en cours de scan le fait disparaître du balayage suivant.

## Pièges

**Pas de résistances de tirage.** Le piège n°1 : le scanner ne trouve rien. Sans tirage vers 3,3 V, SDA/SCL restent bloquées à l'état bas et le bus est muet. Un module avec tirages intégrés suffit ; sinon, ajouter deux résistances ~4,7 kΩ.

**Alimenter en 5 V.** Les lignes remontent alors à 5 V sur des broches 3,3 V — risque de destruction. Alimenter le module en 3,3 V.

**Deux modules à la même adresse.** Ils répondent en même temps et se brouillent. Solution : un cavalier d'adresse sur l'un, ou le **second bus `Wire1`** (voir *Cas particulier*).

**SDA et SCL inversés.** Rien ne répond. Vérifier que SDA va sur GPIO21 et SCL sur GPIO22 (ou les broches déclarées).

**Masse non reliée.** Comme tout bus, l'I2C a besoin d'une **masse commune** entre l'ESP32 et les modules.

**Fils trop longs à 400 kHz.** La capacité des fils déforme les fronts ; sur une liaison longue, redescendre à 100 kHz (`Wire.setClock(100000)`).

## Exercices

> [!question] Exercice 1 — Afficher sur un écran OLED
> Branchez un écran OLED SSD1306 (I2C) et affichez « Bonjour ESP32 ». L'adresse usuelle est `0x3C`. Indice : utiliser une bibliothèque (Adafruit SSD1306 + GFX).

> [!success]- Corrigé
> La bibliothèque gère les échanges I2C ; on initialise l'écran à son adresse, on écrit, on rafraîchit avec `display()`.
> ```cpp
> #include <Wire.h>
> #include <Adafruit_GFX.h>
> #include <Adafruit_SSD1306.h>
>
> Adafruit_SSD1306 ecran(128, 64, &Wire);
>
> void setup() {
>   Wire.begin(21, 22);
>   ecran.begin(SSD1306_SWITCHCAPVCC, 0x3C);   // adresse trouvée au scan
>   ecran.clearDisplay();
>   ecran.setTextSize(1);
>   ecran.setTextColor(SSD1306_WHITE);
>   ecran.setCursor(0, 0);
>   ecran.println("Bonjour ESP32");
>   ecran.display();                            // obligatoire : envoie le tampon a l'ecran
> }
>
> void loop() {}
> ```
> `display()` est indispensable : tant qu'on ne l'appelle pas, le texte reste dans le tampon et l'écran n'affiche rien.

> [!question] Exercice 2 — Deux capteurs de même adresse
> Vous avez deux capteurs identiques (donc **même adresse**), que vous ne pouvez pas changer. Comment lire les deux sur le même ESP32 ?

> [!success]- Corrigé
> On répartit les deux capteurs sur les **deux bus** de l'ESP32 : `Wire` sur GPIO21/22, `Wire1` sur deux autres broches.
> ```cpp
> #include <Wire.h>
> TwoWire I2Cbus2 = TwoWire(1);   // second controleur
>
> void setup() {
>   Serial.begin(115200);
>   Wire.begin(21, 22);           // capteur A
>   I2Cbus2.begin(25, 26);        // capteur B, meme adresse, autre bus
> }
> ```
> Les deux contrôleurs I2C de l'ESP32 sont indépendants : deux modules de même adresse cohabitent sur des broches distinctes.

## Cas particulier — Le second bus et la vitesse

L'ESP32 possède **deux contrôleurs I2C**. Le premier est `Wire` ; le second s'instancie via `TwoWire(1)` (souvent nommé `Wire1`), sur les broches de son choix. Utile pour séparer deux modules de même adresse, ou isoler un capteur lent d'un bus rapide.

La vitesse se règle avec `Wire.setClock(100000)` (standard, 100 kHz) ou `400000` (rapide, 400 kHz). Le rapide convient à des liaisons **courtes** ; sur des fils longs, rester à 100 kHz.

Sur les variantes **C3 / S3**, les broches par défaut diffèrent de GPIO21/22 — vérifier le brochage via [[esp32-gpio|configurer les GPIO]] et les préciser à `Wire.begin(sda, scl)`.

## Raccrochage projet

- **[[preuve-de-concept|Preuve de concept]]** — un capteur I2C (BME280, MPU6050) valide une mesure sans électronique d'interface ; le scanner confirme le câblage en une minute.
- **[[integration-et-tests|Intégration et tests]]** — plusieurs modules sur un même bus réduisent le câblage du sous-système embarqué ; l'écran I2C affiche l'état en direct pendant les essais.

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[esp32-serie|Moniteur série]] — pour lire les adresses trouvées au scan
- [[esp32-gpio|Configurer les GPIO]] — broches par défaut et remappage
- [[i2c|I2C]] — le protocole (adressage, ACK, chronogramme)
- [[bus-de-communication|Bus de communication]] — panorama UART / I2C / SPI
- [[niveaux-de-tension|Niveaux de tension]] — adapter un module 5 V à l'ESP32
