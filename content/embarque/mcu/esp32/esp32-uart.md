---
title: UART sur l'ESP32
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
  - uart
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

L'**[[uart|UART]]** est la liaison série asynchrone point à point qui fait dialoguer l'ESP32 avec **un autre appareil** — module GPS, lecteur RFID, seconde carte — sur deux fils (TX et RX) plus une masse commune. À ne pas confondre avec le [[esp32-serie|moniteur série]] : celui-ci occupe l'UART0 pour parler au PC via l'USB, tandis qu'ici on utilise un **second port matériel** pour parler à un composant. L'ESP32 en possède trois (UART0, UART1, UART2) et, contrairement à l'Arduino, ses broches sont **remappables** — inutile de recourir à `SoftwareSerial`.

## À quoi ça sert ?

Beaucoup de modules ne parlent qu'en série. L'UART matériel de l'ESP32 les prend en charge sans occuper le moniteur :

- **Recevoir un flux.** Un module GPS crache en continu des trames NMEA ; on les lit sur un port dédié pendant que le moniteur reste libre pour le débogage.
- **Piloter un module.** Un lecteur RFID, un modem, un afficheur série reçoivent leurs commandes par TX et répondent par RX.
- **Relier deux cartes.** Deux ESP32 (ou un ESP32 et un Arduino) échangent des données par une liaison série directe, une fois les niveaux de tension adaptés.

Le principe du protocole (trame, bit de start, débit) est décrit dans la notion transverse [[uart|UART]]. Cette fiche montre **comment le câbler et le coder sur ESP32**.

## Procédure pas à pas

Quatre temps : choisir un port libre, l'initialiser, câbler, échanger.

### 1. Choisir un port libre

`Serial` (UART0) est réservé au moniteur et au journal de boot — on **ne s'en sert pas** pour un module, sinon les deux flux se mélangent. On prend donc `Serial2` (ou `Serial1`). Par défaut, `Serial2` est câblé sur **GPIO16 (RX2)** et **GPIO17 (TX2)**.

### 2. Initialiser la liaison

`Serial2.begin()` accepte le débit, le format de trame, puis les broches **RX puis TX** :

```cpp
const int RX2 = 16;   // l'ESP32 reçoit ici
const int TX2 = 17;   // l'ESP32 émet ici

Serial2.begin(9600, SERIAL_8N1, RX2, TX2);
```

Le débit (`9600`, `115200`…) doit être **identique des deux côtés** ; il est imposé par la datasheet du module. `SERIAL_8N1` est le format le plus courant (8 bits de données, pas de parité, 1 bit de stop).

### 3. Câbler : TX vers RX, croisé

La règle d'or de l'UART : **ce qu'une carte émet (TX), l'autre le reçoit (RX)**. Les deux fils se croisent, et les masses doivent être **reliées**.

![Branchement UART entre un ESP32 et un module série : TX2 (GPIO17) vers RX du module, RX2 (GPIO16) vers TX du module, masse commune|600](/ressources/img/esp32-uart/branchement-uart.svg)

> [!warning]
> **Les broches de l'ESP32 sont en 3,3 V.** Un module qui émet en 5 V sur la ligne RX de l'ESP32 peut **détruire la broche**. Vérifier la tension de sortie du module ; au-delà de 3,3 V, intercaler une adaptation de niveau — voir [[niveaux-de-tension|niveaux de tension]].

### 4. Échanger

Les fonctions sont celles du moniteur, appliquées à `Serial2` :

- `Serial2.available()` — nombre d'octets reçus en attente ;
- `Serial2.read()` — lit un octet ;
- `Serial2.write()` / `Serial2.print()` — émet.

## Exemple — Un pont entre le module et le moniteur

Cas concret : on relaie dans les deux sens ce qui passe sur `Serial2` (le module) et sur `Serial` (le moniteur, donc le PC). On voit au moniteur ce que le module envoie, et on peut lui répondre en tapant au clavier — idéal pour tester un module série inconnu.

```cpp
const int RX2 = 16;   // reçoit du module (relié au TX du module)
const int TX2 = 17;   // émet vers le module (relié au RX du module)

void setup() {
  Serial.begin(115200);                        // UART0 : vers le PC
  Serial2.begin(9600, SERIAL_8N1, RX2, TX2);   // UART2 : vers le module
  Serial.println("Pont serie : moniteur <-> module (UART2)");
}

void loop() {
  // module -> PC : tout octet reçu sur UART2 est renvoyé au moniteur
  while (Serial2.available() > 0) {
    Serial.write(Serial2.read());
  }
  // PC -> module : tout ce qu'on tape au moniteur part sur UART2
  while (Serial.available() > 0) {
    Serial2.write(Serial.read());
  }
}
```

Chaque `while` **vide la file** d'un côté avant de passer à l'autre, sans jamais bloquer : la boucle reste réactive dans les deux sens. Ouvrir le moniteur à 115200 (le débit du **PC**, indépendant des 9600 du module) : les trames du module défilent, et le texte tapé au clavier lui parvient.

Prendre capture d'écran de *le moniteur série affichant les trames reçues du module sur UART2, avec le débit réglé sur 115200*.

## Pièges

**TX branché sur TX.** Le piège n°1 : rien ne circule. TX émet, RX écoute — les deux fils se **croisent** (TX d'un côté sur RX de l'autre).

**Masse non reliée.** Sans masse commune, les niveaux logiques n'ont pas de référence : réception erratique ou nulle. Toujours relier les GND.

**Signal 5 V sur une broche ESP32.** Un module 5 V (certains GPS, cartes Arduino) grille la broche RX de l'ESP32 en 3,3 V. Adapter le niveau.

**Utiliser `Serial` pour le module.** Brancher un module sur UART0 mélange son flux avec le moniteur et perturbe le téléversement. Réserver UART0 au PC, prendre `Serial1`/`Serial2` pour les modules.

**GPIO16/17 sur une carte WROVER.** Sur les modules **WROVER** (8 Mo de PSRAM), GPIO16 et GPIO17 sont pris par la PSRAM et **indisponibles** : remapper `Serial2` sur d'autres broches (`Serial2.begin(9600, SERIAL_8N1, 25, 26)`). Les cartes WROOM n'ont pas cette contrainte.

**Débits désaccordés.** `Serial2.begin(9600…)` face à un module en 115200 donne du charabia. Le débit vient de la datasheet du module, pas d'une supposition.

## Exercices

> [!question] Exercice 1 — Compter les lignes reçues
> Un module envoie du texte ligne par ligne sur `Serial2`. Comptez les lignes reçues et affichez le total au moniteur à chaque nouvelle ligne. Indice : lire une ligne complète, pas un octet.

> [!success]- Corrigé
> On lit la ligne entière avec `readStringUntil('\n')`, on incrémente un compteur, on renvoie au moniteur.
> ```cpp
> const int RX2 = 16;
> const int TX2 = 17;
> unsigned long lignes = 0;
>
> void setup() {
>   Serial.begin(115200);
>   Serial2.begin(9600, SERIAL_8N1, RX2, TX2);
> }
>
> void loop() {
>   if (Serial2.available() > 0) {
>     String ligne = Serial2.readStringUntil('\n');   // jusqu'au saut de ligne
>     ligne.trim();                                    // retire espaces et \r
>     if (ligne.length() > 0) {
>       lignes++;
>       Serial.print("Ligne ");
>       Serial.print(lignes);
>       Serial.print(" : ");
>       Serial.println(ligne);
>     }
>   }
> }
> ```
> `readStringUntil('\n')` agrège les octets jusqu'au saut de ligne — plus pratique que `read()` octet par octet pour du texte structuré.

> [!question] Exercice 2 — Deux modules en même temps
> Faites dialoguer l'ESP32 avec **deux** modules série simultanément (par exemple un GPS et un afficheur), chacun sur son propre UART, sans toucher au moniteur. Quelles broches choisir ?

> [!success]- Corrigé
> On garde UART0 pour le moniteur, et on utilise `Serial1` et `Serial2` sur des broches libres distinctes.
> ```cpp
> void setup() {
>   Serial.begin(115200);                       // UART0 : moniteur
>   Serial1.begin(9600,  SERIAL_8N1, 25, 26);   // UART1 remappé : module A
>   Serial2.begin(9600,  SERIAL_8N1, 16, 17);   // UART2 : module B
> }
>
> void loop() {
>   while (Serial1.available()) Serial.write(Serial1.read());
>   while (Serial2.available()) Serial.write(Serial2.read());
> }
> ```
> Les trois UART matériels de l'ESP32 travaillent en parallèle. `Serial1` **doit** être remappé (ses broches par défaut servent la Flash) ; on choisit deux GPIO libres.

## Cas particulier — UART1 et les liaisons longues

**UART1** est disponible mais ses broches par défaut sont câblées sur la Flash interne : il faut **toujours lui préciser des broches libres** (`Serial1.begin(baud, SERIAL_8N1, rx, tx)`).

Sur les variantes à **USB natif** (C3, S3, C6…), `Serial` peut être l'USB Serial/JTAG, et le nombre d'UART matériels disponibles diffère — se reporter au brochage de la carte via [[esp32-gpio|configurer les GPIO]].

Pour une liaison **longue ou en milieu bruité** (plusieurs mètres, moteurs à proximité), l'UART simple ne suffit plus : on passe à une couche différentielle type **RS-485**, dont le principe est évoqué dans [[bus-de-communication|bus de communication]].

## Raccrochage projet

- **[[preuve-de-concept|Preuve de concept]]** — dès qu'un module série entre dans le projet (GPS, télémètre, modem), le port dédié le fait parler sans perturber le débogage.
- **[[integration-et-tests|Intégration et tests]]** — relier deux sous-systèmes par une liaison série est un grand classique de l'assemblage ; le pont de l'exemple sert à vérifier chaque sens isolément.

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[esp32-serie|Moniteur série]] — l'autre port série (UART0, vers le PC)
- [[esp32-gpio|Configurer les GPIO]] — broches remappables, broches à éviter
- [[uart|UART]] — le protocole (trame, débit, chronogramme)
- [[bus-de-communication|Bus de communication]] — panorama UART / I2C / SPI
- [[niveaux-de-tension|Niveaux de tension]] — adapter un module 5 V à l'ESP32
