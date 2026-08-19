---
title: SPI sur l'ESP32
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
  - spi
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Le **[[spi|SPI]]** est le bus série **synchrone et rapide** qui relie l'ESP32 à des périphériques exigeants — carte SD, écran TFT, capteurs à haut débit — sur **quatre fils** : SCK (horloge), MOSI (données sortantes), MISO (données entrantes) et un CS par périphérique. Sur ESP32, deux bus sont utilisables (**VSPI** et **HSPI**) ; les broches VSPI par défaut sont **SCK = GPIO18, MISO = GPIO19, MOSI = GPIO23, CS = GPIO5**, et elles sont **remappables** — au prix d'une vitesse plafonnée si l'on quitte les broches natives.

## À quoi ça sert ?

Là où l'I2C plafonne, le SPI transfère vite et en **full-duplex** (émission et réception simultanées) :

- **Stocker.** Une carte microSD enregistre mesures et journaux ; c'est l'usage le plus courant du SPI en projet.
- **Afficher richement.** Les écrans TFT couleur rafraîchissent des images entières — impossible en I2C.
- **Lire vite.** Certains ADC, capteurs de mouvement ou modules radio n'existent qu'en SPI pour leur débit.

Le fonctionnement du protocole (horloge, full-duplex, sélection par CS) est décrit dans la notion transverse [[spi|SPI]]. Ici, on voit **comment le câbler et le coder sur ESP32**.

## Procédure pas à pas

Quatre temps : câbler le faisceau, initialiser, exploiter via une bibliothèque, ajouter des périphériques.

### 1. Câbler : un faisceau partagé, un CS par module

SCK, MOSI et MISO sont **communs** à tous les périphériques du bus ; seul le **CS** (Chip Select) est propre à chacun — c'est lui qui désigne le module actif. Contrairement à l'UART, **le SPI ne croise pas** : MOSI va sur MOSI, MISO sur MISO.

![Branchement SPI entre un ESP32 et un module (carte SD) : SCK sur GPIO18, MOSI sur GPIO23, MISO sur GPIO19, CS sur GPIO5, alimentation 3,3 V, masse commune|640](/ressources/img/esp32-spi/branchement-spi.svg)

> [!warning]
> **Périphérique en 3,3 V.** L'ESP32 travaille en 3,3 V : un module SPI 5 V (certains lecteurs SD à régulateur) doit soit disposer d'une adaptation de niveau intégrée, soit passer par un adaptateur — voir [[niveaux-de-tension|niveaux de tension]].

### 2. Initialiser le bus

`SPI.begin()` sans argument utilise **VSPI** (broches par défaut). Les bibliothèques (SD, TFT) appellent souvent `begin()` elles-mêmes ; on leur passe surtout le **CS** :

```cpp
#include <SPI.h>

const int CS = 5;   // VSPI : SCK=18, MOSI=23, MISO=19 par défaut
```

### 3. Exploiter via une bibliothèque

On manipule rarement `SPI.transfer()` à la main : une bibliothèque (SD, Adafruit GFX pour un TFT) gère le protocole. On lui indique le CS et, au besoin, une vitesse d'horloge.

### 4. Ajouter des périphériques

Pour un second module, on **partage** SCK/MOSI/MISO et on lui attribue **un autre CS** (un GPIO libre). Le code active un seul CS à la fois.

## Exemple — Journaliser sur carte microSD

Cas concret : écrire une ligne de mesure dans un fichier sur carte SD, puis la relire. C'est le point d'entrée du datalogger embarqué.

```cpp
#include <SPI.h>
#include <SD.h>

const int CS = 5;   // CS du lecteur SD sur GPIO5 (VSPI)

void setup() {
  Serial.begin(115200);

  if (!SD.begin(CS)) {                 // VSPI par défaut : SCK18 / MISO19 / MOSI23
    Serial.println("Carte SD absente ou mal cablee");
    return;
  }

  File f = SD.open("/mesures.csv", FILE_WRITE);   // ouvre (crée si besoin)
  if (f) {
    f.println("temps;valeur");         // en-tête
    f.println("0;512");                // une mesure
    f.close();                         // close() obligatoire : vide le tampon sur la carte
    Serial.println("Ecrit.");
  }

  // relecture
  f = SD.open("/mesures.csv");
  while (f && f.available()) {
    Serial.write(f.read());            // renvoie le contenu au moniteur
  }
  f.close();
}

void loop() {}
```

`SD.begin(CS)` initialise le bus VSPI et monte la carte ; `SD.open(..., FILE_WRITE)` ouvre le fichier en écriture. Le `close()` est **indispensable** : il vide le tampon et referme le fichier, sans quoi la dernière écriture peut être perdue. La relecture rouvre le fichier et renvoie son contenu au moniteur.

Au moniteur :

```
Ecrit.
temps;valeur
0;512
```

Les deux dernières lignes ne viennent pas d'un `println` du sketch : c'est le **contenu du fichier**, relu octet par octet et renvoyé par `Serial.write()`. La preuve que l'écriture a bien atteint la carte.

## Pièges

**MOSI et MISO croisés.** Réflexe hérité de l'UART — mais le SPI **ne croise pas** : MOSI sur MOSI, MISO sur MISO. Croiser donne un module muet.

**CS oublié ou partagé.** Deux modules sur le même CS répondent ensemble et se brouillent. Chaque périphérique a **son** CS sur un GPIO distinct.

**Carte SD non détectée.** Souvent un CS erroné, un fil MISO/MOSI inversé, ou une carte mal formatée (FAT32). Vérifier d'abord le câblage broche à broche contre le code.

**Périphérique 5 V sur l'ESP32.** Les lignes en 5 V agressent les broches 3,3 V. Choisir un module 3,3 V ou adapter le niveau.

**Broches remappées, débit en baisse.** Passer par d'autres GPIO que les broches natives fait transiter le signal par la matrice interne : la vitesse tombe (~40 MHz au lieu de 80). Pour la performance maximale, garder les broches VSPI par défaut.

**Masse non reliée.** Comme tout bus, le SPI exige une **masse commune** entre l'ESP32 et le périphérique.

## Exercices

> [!question] Exercice 1 — Datalogger cadencé
> Reprenez la carte SD pour enregistrer une mesure **chaque seconde**, sans figer le programme. Indice : cadencer sur `millis()`, ouvrir/écrire/fermer à chaque relevé.

> [!success]- Corrigé
> On ouvre en mode ajout, on écrit une ligne, on referme — à cadence non bloquante.
> ```cpp
> #include <SPI.h>
> #include <SD.h>
>
> const int CS = 5;
> const int CAPTEUR = 34;         // ADC1
> unsigned long dernier = 0;
>
> void setup() {
>   Serial.begin(115200);
>   SD.begin(CS);
> }
>
> void loop() {
>   if (millis() - dernier >= 1000) {     // toutes les secondes, sans delay()
>     dernier = millis();
>     File f = SD.open("/log.csv", FILE_APPEND);   // ajoute à la fin
>     if (f) {
>       f.print(millis());
>       f.print(";");
>       f.println(analogRead(CAPTEUR));
>       f.close();                        // referme à chaque ligne : rien n'est perdu
>     }
>   }
> }
> ```
> `FILE_APPEND` écrit à la suite sans effacer ; refermer après chaque ligne garantit que la donnée est sur la carte même en cas de coupure.

> [!question] Exercice 2 — Deux périphériques sur le bus
> Ajoutez un second module SPI (par exemple un écran) à côté de la carte SD. Que partagent-ils, qu'est-ce qui les distingue ?

> [!success]- Corrigé
> Ils partagent SCK/MOSI/MISO ; chacun a **son** CS sur un GPIO distinct.
> ```cpp
> const int CS_SD  = 5;    // carte SD
> const int CS_TFT = 15;   // écran, autre CS
>
> void setup() {
>   pinMode(CS_SD, OUTPUT);
>   pinMode(CS_TFT, OUTPUT);
>   digitalWrite(CS_SD, HIGH);    // au repos, les deux CS sont hauts (inactifs)
>   digitalWrite(CS_TFT, HIGH);
>   SPI.begin();                  // faisceau VSPI partagé
>   // chaque bibliothèque active son CS le temps de son échange
> }
> ```
> Le faisceau (SCK/MOSI/MISO) est commun ; c'est le CS, actif à l'état bas, qui désigne le module qui écoute à un instant donné.

## Cas particulier — Le second bus et la vitesse

L'ESP32 offre un **deuxième bus SPI**, HSPI, pour séparer deux groupes de périphériques ou éviter une saturation. On l'instancie via `SPIClass` :

```cpp
SPIClass hspi(HSPI);
hspi.begin(14, 12, 13, 15);   // SCK, MISO, MOSI, CS
```

La vitesse d'horloge se règle par `SPISettings` (souvent porté par la bibliothèque). Les **broches natives** (VSPI : 18/19/23/5 ; HSPI : 14/12/13/15) autorisent jusqu'à 80 MHz ; des broches remappées plafonnent plus bas.

Sur les variantes **C3 / S3**, l'organisation des bus SPI et les broches par défaut diffèrent — se reporter au brochage via [[esp32-gpio|configurer les GPIO]].

## Raccrochage projet

- **[[preuve-de-concept|Preuve de concept]]** — dès qu'il faut stocker des mesures (datalogger) ou afficher richement, le SPI est le bus adapté ; l'exemple carte SD valide l'enregistrement en quelques lignes.
- **[[integration-et-tests|Intégration et tests]]** — journaliser sur SD pendant les essais donne une trace exploitable a posteriori ; l'écran TFT affiche l'état du système en autonomie.

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[esp32-serie|Moniteur série]] — pour observer les écritures/lectures
- [[esp32-gpio|Configurer les GPIO]] — broches natives VSPI/HSPI et remappage
- [[spi|SPI]] — le protocole (horloge, full-duplex, CS)
- [[bus-de-communication|Bus de communication]] — panorama UART / I2C / SPI
- [[niveaux-de-tension|Niveaux de tension]] — adapter un module 5 V à l'ESP32
