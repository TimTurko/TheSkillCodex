---
title: Câbler un module
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-gpio-en
  - lire-une-datasheet-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-module.md
source_sha256: 24363ea539fa26c0cc9614e48aa839e9f9df5d21d8d985b09487a6d362eb72d8
---

Un **module** est un petit PCB préfabriqué qui héberge un composant principal (capteur, driver, convertisseur) entouré de son circuit d'application minimal : alimentation, pull-ups, découplage, connecteur. Les modules épargnent tout le câblage *bas-niveau* du datasheet. Il reste à brancher quatre fils Dupont et à appeler la [[micropython-bibliotheques-en|bibliothèque]]. La fiche couvre le câblage générique d'un module, et les pièges qui font qu'un module fraîchement reçu refuse de démarrer. La logique est la même quelle que soit la carte. Seuls les numéros de broches et la contrainte **3,3 V** du Pico changent.

## À quoi ça sert ?

Un projet école embarque 5 à 15 modules : capteur (DHT11, HC-SR04, BMP280, MPU6050), driver (L298N, DRV8833), afficheur (OLED I2C), communication, alimentation, utilitaire (RTC DS3231, MicroSD). Tous suivent la même logique de câblage, et la maîtriser une fois épargne des heures de tâtonnement.

## Procédure pas à pas

Quatre étapes : identifier les broches, vérifier la tension d'alimentation, câbler signaux et masse, vérifier les pull-ups.

### 1. Identifier les broches du module

Quatre familles récurrentes : **alimentation** (`VCC`/`VIN`/`+` et `GND`/`−`) ; **signaux logiques** (`SCL`/`SDA` pour [[micropython-i2c-en|I2C]], `SCK`/`MOSI`/`MISO`/`CS` pour [[micropython-spi-en|SPI]], `TX`/`RX` pour [[micropython-uart-en|UART]], ou GPIO simples) ; **configuration** (jumpers d'adresse, de tension, de pull-up) ; **bornier de puissance** (modules driver). Quand le brochage n'est pas évident, chercher la fiche du module ou *« module XXX pinout »*.

### 2. Vérifier la tension d'alimentation supportée

Le Pico étant en 3,3 V, c'est le piège n°1 :

- **Module 3,3–5 V** (majorité des modules modernes, I2C à régulateur) — tolérant, lire la sérigraphie ;
- **Module 5 V uniquement** — l'alimenter en 5 V (VBUS), mais **ses signaux de sortie seront en 5 V** : adapter avant d'entrer sur une broche du Pico ([[niveaux-de-tension-en|niveaux de tension]]) ;
- **Module 3,3 V uniquement** — l'alimenter en 3,3 V, jamais 5 V.

Côté signaux, un module qui **sort** du 5 V vers une entrée du Pico impose un pont diviseur ou un translateur. Un module 3,3 V piloté **depuis** le Pico (3,3 V) est direct.

### 3. Câbler signaux et masse

Règle inviolable : **la masse (GND) du module doit être reliée à la masse du Pico**, même quand l'alimentation est séparée. Sans GND commun, les signaux n'ont pas de référence, et le module ne répond pas. Discipline utile : rouge pour `VCC`, noir pour `GND`, câbles Dupont courts (< 20 cm) pour I2C/SPI, connecteurs bien enfoncés.

### 4. Vérifier les pull-ups et configurations

Beaucoup de modules I2C intègrent leurs pull-up sur `SDA`/`SCL` (≈ 4,7 kΩ). Utile pour un premier essai, mais **multiplier les modules I2C met toutes les pull-ups en parallèle** : la résistance équivalente devient trop faible et le bus ne tient plus. Symptôme : un module marche seul, deux ensemble ne marchent plus → retirer les jumpers de pull-up sur tous sauf un. Autres jumpers fréquents : sélection d'adresse I2C, sélection de tension, activation d'opto sur module relais.

![Montage : module I2C (type BMP280/MPU6050) sur un Pico — VCC, GND, SDA sur GP4, SCL sur GP5|600](/ressources/img/micropython-module/montage-module.svg)

## Exemple — Câbler un module DHT11 (température + humidité)

**Module DHT11** : 3 broches (`+` 3,3–5 V, `OUT` signal 1-wire, `−` GND), pull-up 10 kΩ intégrée sur `OUT`.

**Câblage** : `+` → 3,3 V ; `−` → GND ; `OUT` → GP2.

![Câblage du module DHT11 sur le Pico : broche + vers 3,3 V, broche − vers GND, broche OUT (données) vers GP2 ; la résistance de tirage est intégrée au module.|560](/ressources/img/micropython-bibliotheques/montage-dht11.svg)

**Bibliothèque** : le module **`dht`** est intégré au firmware (voir [[micropython-bibliotheques-en|bibliothèques]]).

```python
from machine import Pin
import dht
from time import sleep

capteur = dht.DHT11(Pin(2))     # capteur DHT11 sur GP2

while True:
    sleep(2)                 # 1 mesure/s max sur DHT11 ; 2 s laisse de la marge
    capteur.measure()        # déclenche une mesure (protocole 1-wire encapsulé)
    print("T =", capteur.temperature(), "°C   H =", capteur.humidity(), "%")
```

Observer au [[micropython-repl-en|REPL]]. Souffler sur le capteur fait monter l'humidité.

## Pièges

**Confondre VCC et signal.** Brancher `OUT` sur 3,3 V (au lieu de GP2) ne libère pas de fumée mais le module ne répond pas. Vérifier le câblage avant chaque essai.

**GND manquant.** Module alimenté mais GND non relié : le module *semble* alimenté (LED allumée) mais aucun signal ne passe. Toujours relier GND dès qu'on connecte VCC.

**Alimentation par broche sur un module gourmand.** Un module Wi-Fi/GSM tire des pointes de plusieurs centaines de mA : la sortie 3,3 V du Pico (limitée) ne tient pas, la carte reboote. Alimentation externe stable pour les modules gourmands.

**Niveaux logiques incompatibles.** Un module qui sort 5 V (HC-SR04) sur une entrée du Pico l'abîme. Vérifier la tolérance — [[niveaux-de-tension-en|niveaux de tension]].

**Multiples pull-ups I2C en parallèle.** 2 modules à 4,7 kΩ → 2,35 kΩ ; à 5 modules → ~940 Ω, souvent trop faible. Désactiver les pull-ups sur tous sauf un.

**Module contrefait.** Sur les références les plus répandues, des contrefaçons passent les premiers tests puis dérivent. Pour un projet sérieux, source connue.

## Cas particulier — Module sans datasheet

Modules génériques (`HW-XXX`, `KY-XXX`) sans fournisseur. Pistes : chercher la **référence du composant principal soudé** (sa datasheet existe), chercher `référence pinout` en image, ou identifier les broches au multimètre. Voir [[lire-une-datasheet-en|lire une datasheet]].

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept-en|phase de preuve de concept]]** — chaque module se valide isolément (alimentation, GND, signaux, premier exemple) avant intégration.
- **Étape 2 de la [[integration-et-tests-en|phase d'intégration et tests]]** — requalification dans le système intégré (pull-ups multiples, partage d'alim, conflits de bus).

Un module bien câblé en début de PoC est un sous-système qu'on ne revisite plus, et la validation isolée évite que les problèmes matériels parasitent la mise au point logicielle.

## Voir aussi

- [[micropython-en|MicroPython]] — hub du module
- [[micropython-shield-en|Utiliser un shield / carte d'extension]] — l'alternative empilée
- [[micropython-bibliotheques-en|Utiliser une bibliothèque]] — pour piloter le module
- [[micropython-i2c-en|I2C]] · [[micropython-spi-en|SPI]] · [[micropython-uart-en|UART]] — selon le bus du module
- [[niveaux-de-tension-en|Niveaux de tension]] — compatibilité 3,3 / 5 V
- [[lire-une-datasheet-en|Lire une datasheet]] — vérifier tension, courant, signaux
- [[arduino-module-en|Câbler un module (Arduino)]] — l'équivalent C++
