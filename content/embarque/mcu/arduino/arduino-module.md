---
title: Câbler un module
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-gpio
  - lire-une-datasheet
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Un **module** est un petit PCB préfabriqué qui héberge un composant principal (capteur, driver, convertisseur) entouré de son circuit d'application minimal : alimentation, pull-ups, condensateurs de découplage, connecteur de mise en œuvre. Les modules économisent au concepteur tout le câblage *bas-niveau* du datasheet — il reste à brancher quatre fils Dupont et à appeler la bibliothèque. La fiche couvre le câblage générique d'un module : identification des broches, alimentation, signaux, et les pièges qui font qu'un module fraîchement reçu refuse de démarrer.

## À quoi ça sert ?

Un projet école typique embarque 5 à 15 modules : module capteur (DHT11, HC-SR04, BMP280, MPU6050), [[arduino-moteur-cc|module driver]] (L298N, DRV8833), [[arduino-afficheur|module afficheur]] (OLED I2C, LCD I2C), module communication (HC-05 Bluetooth, ESP-01 Wi-Fi), module alimentation (régulateur LM2596, convertisseur USB), module utilitaire (RTC DS3231, MicroSD). Tous suivent la même logique de câblage — la maîtriser une fois épargne des heures de tâtonnement.

## Procédure pas à pas

Quatre étapes : identifier le rôle des broches, vérifier la tension d'alimentation, câbler signaux et masse, vérifier les pull-ups.

### 1. Identifier les broches du module

Un module porte un brochage sérigraphié sur le PCB ou imprimé sur l'étiquette. Quatre familles de broches récurrentes :

- **Alimentation** : `VCC` (ou `VIN`, ou `+`) et `GND` (ou `−`). Toujours présentes, toujours par paires.
- **Signaux logiques** : `SCL` / `SDA` pour [[arduino-i2c|I2C]], `SCK` / `MOSI` / `MISO` / `CS` pour [[arduino-spi|SPI]], `TX` / `RX` pour [[arduino-uart|UART]], ou broches GPIO simples (`OUT`, `INT`, `Echo`, `Trig`).
- **Configuration** : straps physiques, jumpers à enlever pour ajuster une option (résistance pull-up à supprimer, alimentation à sélectionner 3,3 / 5 V).
- **Bornier de puissance** : pour modules driver (L298N, contacteur), une partie 5 V logique + une partie séparée pour la charge.

Quand le brochage n'est pas évident, chercher la fiche du module sur le site du fournisseur, ou par recherche image *« module DHT11 pinout »*.

### 2. Vérifier la tension d'alimentation supportée

C'est le piège n°1 quand on change de carte Arduino → ESP32 ou vice-versa. Trois cas :

- **Module 5 V uniquement** (typique : modules anciens, HC-SR04 d'entrée de gamme, modules relais 5 V) — ne pas alimenter en 3,3 V, sinon démarrage instable ou pas de démarrage du tout.
- **Module 3,3 V uniquement** (ESP-01, certaines variantes MPU6050) — ne pas alimenter en 5 V, sinon destruction du régulateur ou du composant.
- **Module 3,3 V à 5 V** (la majorité des modules modernes Adafruit/SparkFun, modules I2C avec régulateur intégré) — tolérant, mais lire la sérigraphie.

Pour le câblage des **signaux logiques** entre une carte 5 V (Uno R3) et un module 3,3 V uniquement : voir [[niveaux-de-tension|niveaux de tension]]. Adaptation obligatoire dans ce sens.

### 3. Câbler signaux et masse

Règle inviolable : **la masse (GND) du module doit être reliée à la masse de l'Arduino**, même quand l'alimentation est séparée. Sans GND commun, les signaux n'ont pas de référence et le module ne répond pas (ou répond aléatoirement).

Pour le reste : suivre la logique du bus utilisé (voir [[bus-de-communication|bus de communication]]). Quelques règles communes :

- **Couleurs cohérentes** : rouge pour le `VCC`, noir pour le `GND`, autres couleurs pour les signaux. Discipline qui sauve du temps en debug.
- **Câbles Dupont courts** : moins de 20 cm pour des signaux numériques rapides (I2C, SPI), pour éviter le bruit et les réflexions.
- **Connecteurs solides** : un câble Dupont mal enfoncé est une cause de symptôme intermittent. Tirer dessus pour vérifier, ressouder le module sur breadboard pour les projets durables.

### 4. Vérifier les pull-ups et configurations

Beaucoup de modules I2C intègrent leur propre résistance pull-up sur `SDA` / `SCL` (souvent 4,7 kΩ). Sur un bus [[arduino-i2c|I2C]], ces deux fils sont partagés par tous les modules et maintenus à l'état haut par cette résistance pull-up, qui tire le fil vers le haut. Pour envoyer un `0`, un composant doit tirer le fil vers le bas, contre cette résistance.

Avec un seul module, tout va bien. Mais en brancher plusieurs sur le même bus revient à **mettre toutes ces résistances pull-up en parallèle** : **si trop de modules sont connectés sur le bus I2C, le trop grand nombre de résistances en parallèle va faire s'effondrer le bus et il ne sera plus possible de communiquer dessus.**

**Symptôme typique** : un module marche seul, mais deux modules ensemble ne répondent plus. **Solution** : ne garder qu'**une seule** pull-up active — retirer le petit jumper de pull-up (ou couper la piste prévue) sur tous les modules **sauf un**.

![Avant / après : avec un seul module, une seule résistance pull-up tire la ligne SDA vers le haut et un composant peut la tirer à 0 (le bus communique) ; avec plusieurs modules, leurs résistances pull-up en parallèle font s'effondrer le bus et on ne peut plus le tirer à 0. Repères : 4,7 kΩ seul, 2,35 kΩ à deux, 0,94 kΩ à cinq.|560](/ressources/img/arduino-module/pullups-paralleles.svg)

**Les autres jumpers à vérifier.** Beaucoup de modules ont aussi de petits cavaliers de configuration :

- **Adresse I2C** (PCF8574, LCD I2C) — souvent trois ponts pour choisir une adresse parmi huit, à ajuster si deux modules ont la même.
- **Tension 3,3 / 5 V** (certains modules carte SD).
- **Activation d'un relais / opto** (modules relais).

Un module qui « semble mort » a souvent juste un jumper mal placé : à inspecter avant de le croire défectueux.

![Deux modules I²C côte à côte : celui de gauche porte GND, VCC, SCL, SDA ; celui de droite VCC, GND, SCL, SDA. Mêmes quatre fonctions, deux premières broches inversées — il n'existe pas d'ordre normalisé. Le module de droite porte en plus un cavalier de sélection d'adresse.|600](/ressources/img/arduino-module/serigraphies-i2c.svg)

**Il n'y a pas d'ordre de broches normalisé sur les modules I2C** — deux exemplaires de la même référence, achetés à six mois d'écart, peuvent avoir VCC et GND inversés. Recopier le câblage d'un tutoriel sans relire la sérigraphie du module qu'on a en main, c'est appliquer le 5 V sur la masse : le module ne s'en remet pas.

## Exemple — Câbler un module DHT11 (température + humidité)

Cas complet sur un module emblématique des kits Arduino.

**Module DHT11** :
- 3 broches typiques : `+` (VCC, 3,3-5 V), `OUT` (signal numérique 1-wire), `−` (GND).
- Certains modules ont 4 broches : ajoutent `NC` (non connecté).
- Résistance pull-up 10 kΩ intégrée sur `OUT` (sur les versions module — pas sur le composant nu).

**Câblage** :
- `+` du module → `+5 V` Arduino
- `−` du module → `GND` Arduino
- `OUT` du module → broche D2 Arduino

![Branchement d'un module DHT11 : le + va au +5 V de l'Arduino, le − à GND, et la broche OUT (signal numérique 1-wire) à D2.|520](/ressources/img/arduino-module/branchement-dht11.svg)

**Bibliothèque** : `DHT sensor library` (par Adafruit) — installer via le gestionnaire (voir [[arduino-bibliotheques|utiliser une bibliothèque]]).

**Code** :

```cpp
#include <DHT.h>           // bibliothèque DHT (Adafruit) : gère le protocole 1-wire du capteur

const int BROCHE_DHT = 2;       // OUT du module câblé sur D2
const int TYPE_DHT = DHT11;     // type de capteur (DHT11 ici ; DHT22 = autre constante)

DHT dht(BROCHE_DHT, TYPE_DHT);  // crée l'objet capteur

void setup() {
  Serial.begin(115200);    // liaison série pour afficher les mesures
  dht.begin();             // initialise le capteur
}

void loop() {
  delay(2000);             // le DHT11 accepte 1 mesure/s ; 2 s reste prudent (et compatible DHT22)
  float h = dht.readHumidity();      // humidité relative (%)
  float t = dht.readTemperature();   // température (°C)

  if (isnan(h) || isnan(t)) {        // isnan = "is Not A Number" : lecture ratée ?
    Serial.println("Echec de lecture");
    return;                          // on saute ce tour, on retentera au suivant
  }
  Serial.print("T="); Serial.print(t); Serial.print("°C\t");   // \t = tabulation
  Serial.print("H="); Serial.print(h); Serial.println("%");
}
```

Téléversez, observez au moniteur série. Souffler sur le capteur — l'humidité monte rapidement.

## Pièges

**Confondre VCC et signal.** Brancher le `OUT` du module sur `+5 V` de l'Arduino (au lieu de la broche D2) ne libère pas de fumée mais le module ne répond pas. Vérifier le câblage avant chaque téléversement, méthodiquement.

**GND manquant.** Module alimenté en VCC mais GND non relié à GND Arduino : symptôme typique, le module *semble* alimenté (sa LED s'allume) mais aucun signal ne passe. Toujours relier GND, dès qu'on connecte VCC.

**Alimentation par broche Arduino sur un module gourmand.** Un module Wi-Fi ESP-01 tire des pointes à 300-400 mA pendant l'émission. La broche `+5 V` de l'Arduino ne tient pas — l'Arduino reboote en boucle. Alimentation externe stable pour les modules gourmands.

**Niveaux logiques incompatibles.** Brancher la sortie 5 V d'un HC-SR04 sur une entrée 3,3 V d'un ESP32 abîme la broche après quelques minutes. Vérifier la tolérance en entrée — voir [[niveaux-de-tension|niveaux de tension]].

**Multiples pull-ups I2C en parallèle.** Deux modules I2C dans le même bus, chacun avec sa pull-up intégrée 4,7 kΩ : résistance équivalente 2,35 kΩ. À 3 modules : 1,57 kΩ. À 5 modules : 940 Ω — souvent trop faible, le bus arrête de fonctionner. Désactiver les pull-ups sur tous les modules sauf un.

**Jumper de configuration mal positionné.** Un module qui semble mort peut simplement avoir son jumper d'adresse en position incorrecte (collision avec autre device I2C), ou son jumper VCC sur 3,3 V au lieu de 5 V. Inspecter la fiche du module pour identifier tous les straps.

**Module contrefait.** Pour les modules courants grand public (DHT22, MPU6050), il existe des contrefaçons qui passent vaguement les premiers tests puis dérivent. Symptôme : mesures correctes au début, lente dégradation, ou panne aléatoire. Pour un projet sérieux, source connue (Adafruit, SparkFun, Mouser).

## Cas particulier — Module sans datasheet

Modules génériques sans marque, marqués d'une simple référence (`HW-XXX`, `KY-XXX`) sans fournisseur identifiable. Trois pistes :

- Chercher la **référence du composant principal soudé sur le module** (par exemple `MAX30102` lisible à la loupe) — la datasheet du composant existe, le câblage du module se déduit.
- Chercher la référence du module + `pinout` en image (la communauté Arduino documente massivement ces modules).
- En dernier ressort, identifier les broches au multimètre : continuité avec `GND` du composant principal, lien direct vers VCC, etc.

Voir [[lire-une-datasheet|lire une datasheet]] pour la démarche d'identification.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — chaque module du projet se valide isolément : alimentation, GND, signaux, premier exemple de bibliothèque. Avant intégration.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — requalification de chaque module dans le système intégré (pull-ups multiples, partage d'alimentation, conflits de bus).

Un module bien câblé en début de PoC est un sous-système qui ne sera plus à revisiter — investir le temps de la validation isolée évite que les problèmes matériels parasitent la mise au point du logiciel aval.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-shield|Utiliser un shield]] — alternative au module (forme empilable)
- [[arduino-bibliotheques|Utiliser une bibliothèque]] — pour piloter le module logiciellement
- [[arduino-i2c|I2C sur Arduino]] · [[arduino-spi|SPI sur Arduino]] · [[arduino-uart|UART sur Arduino]] — selon le bus du module
- [[niveaux-de-tension|Niveaux de tension]] — pour la compatibilité 3,3 / 5 V
- [[lire-une-datasheet|Lire une datasheet]] — pour vérifier tension, courant, signaux
