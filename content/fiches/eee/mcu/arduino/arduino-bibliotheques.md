---
title: Utiliser une bibliothèque
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
aa: []
draft: false
---

Une **bibliothèque** (ou *library* en anglais) est un module de code prêt à l'emploi qui encapsule la communication avec un composant ou un service : `Servo.h` pour les servomoteurs, `Wire.h` pour le bus I2C, `LiquidCrystal.h` pour les afficheurs LCD, `Adafruit_BMP280.h` pour le capteur de pression BMP280. Au lieu de réécrire à chaque projet le protocole d'un capteur ou le timing d'un actionneur, on inclut la bibliothèque et on utilise ses fonctions. L'écosystème Arduino compte des **milliers** de bibliothèques tierces — savoir en installer une, l'inclure, et lire sa documentation est un geste de base.

## À quoi ça sert ?

Trois rôles complémentaires :

- **Économiser du temps** — afficher un texte sur OLED SSD1306 sans bibliothèque représente plusieurs centaines de lignes de code I2C + bitmap polices. Avec `Adafruit_SSD1306`, c'est dix lignes.
- **Bénéficier de l'expérience accumulée** — les bibliothèques maintenues ont essuyé les bugs subtils (timing, conditions limites, compatibilité multi-cartes) qu'on n'a pas envie de redécouvrir un par un.
- **Faciliter le portage** — une même bibliothèque (`Adafruit_GFX` pour les écrans graphiques, par exemple) couvre plusieurs modèles de matériel ; changer de référence ne demande qu'un changement minimal de code.

## Procédure pas à pas

Quatre étapes : trouver la bibliothèque, l'installer, l'inclure, lire sa doc.

### 1. Trouver une bibliothèque

Trois sources légitimes :

- **Gestionnaire de bibliothèques intégré à l'IDE** (*Sketch → Inclure une bibliothèque → Gérer les bibliothèques*) — le canal officiel, qui agrège des centaines de bibliothèques vérifiées par Arduino.
- **GitHub du fabricant du module** — pour un composant un peu spécialisé (Pololu, Adafruit, SparkFun, Sensirion), aller sur leur dépôt GitHub.
- **PlatformIO Registry** — équivalent du gestionnaire Arduino mais pour PlatformIO, recouvre largement.

Pour un composant nouveau, taper le nom du composant + « arduino library » dans un moteur de recherche. Vérifier sur la fiche GitHub : nombre d'étoiles, date du dernier commit, issues ouvertes vs fermées. Une bibliothèque pas touchée depuis 2018 sur un composant courant doit éveiller la méfiance.

### 2. Installer la bibliothèque

**Méthode A — gestionnaire intégré** (recommandé) :

1. Ouvrir *Sketch → Inclure une bibliothèque → Gérer les bibliothèques*.
2. Taper le nom dans le champ de recherche (`Servo`, `LiquidCrystal_I2C`, `Adafruit BMP280`).
3. Choisir la bibliothèque et cliquer *Installer*.

Prendre capture d'écran de *le gestionnaire de bibliothèques de l'IDE Arduino 2.x ouvert, avec la recherche « Adafruit BMP280 » et plusieurs résultats visibles*.

**Méthode B — installation depuis un fichier ZIP** (pour les bibliothèques absentes du gestionnaire) :

1. Télécharger le ZIP depuis GitHub (bouton *Code → Download ZIP*).
2. Dans l'IDE : *Sketch → Inclure une bibliothèque → Ajouter la bibliothèque .ZIP...*.
3. Sélectionner le ZIP.

**Méthode C — clone Git** (pour développeurs habitués) : cloner le dépôt directement dans `~/Arduino/libraries/`. L'IDE détecte automatiquement au prochain démarrage.

### 3. Inclure et utiliser dans le code

Une fois installée, la bibliothèque s'inclut comme un fichier d'en-tête en tête du sketch :

```cpp
#include <Servo.h>

Servo monServo;

void setup() {
  monServo.attach(9);  // broche D9
  monServo.write(90);  // position 90°
}

void loop() {
  // ...
}
```

`#include <X.h>` (avec chevrons) cherche dans les répertoires standards de l'IDE — c'est la forme à utiliser pour les bibliothèques installées. `#include "X.h"` (avec guillemets) cherche d'abord dans le dossier du sketch — réservé aux fichiers locaux du projet.

### 4. Lire la documentation

Trois sources de doc complémentaires :

- **Exemples fournis avec la bibliothèque** : *Fichier → Exemples → Nom de la bibliothèque*. Quasiment toujours présents, point d'entrée n°1.
- **README et docs sur le dépôt GitHub** : explication des fonctions, des paramètres, des limitations.
- **Code source** : pour les bibliothèques courtes (`Servo.h` fait quelques dizaines de lignes), lire le `.h` permet de comprendre exactement ce que fait chaque fonction.

L'erreur du débutant : essayer une bibliothèque sans regarder ses exemples. 80 % des questions sur les forums se règlent en ouvrant l'exemple fourni.

## Exemple — Faire tourner un servomoteur avec Servo.h

Cas complet : installer `Servo.h`, câbler un servo SG90, balayer un angle.

**Installation** : `Servo.h` est livrée par défaut avec l'IDE Arduino — pas besoin d'installer, juste d'inclure.

**Câblage** : servo SG90, fil rouge sur `+5 V`, fil marron (ou noir) sur `GND`, fil orange (ou jaune, signal) sur **D9**.

**Code** :

```cpp
#include <Servo.h>

Servo monServo;

void setup() {
  monServo.attach(9);
  Serial.begin(115200);
}

void loop() {
  // Balayage 0° → 180°
  for (int angle = 0; angle <= 180; angle++) {
    monServo.write(angle);
    delay(15);
  }
  // Retour 180° → 0°
  for (int angle = 180; angle >= 0; angle--) {
    monServo.write(angle);
    delay(15);
  }
}
```

Téléversez. Le servo balaye continûment.

Prendre capture d'écran ou photo de *un servomoteur SG90 câblé sur la broche D9 d'un Arduino Uno avec une palette qui tourne, et l'IDE Arduino 2.x ouvert avec le code Servo en arrière-plan*.

Note pédagogique : avant `Servo.h`, piloter un servo demandait de générer manuellement le signal PWM 50 Hz avec impulsion 1-2 ms. La bibliothèque encapsule tout ça — d'où son intérêt.

## Pièges

**Bibliothèque non installée.** Le compilateur sort `fatal error: Servo.h: No such file or directory`. Vérifier l'installation, vérifier l'orthographe (sensibilité à la casse sur Linux/macOS).

**Plusieurs bibliothèques de même nom.** Symptôme : compilation OK mais comportement incohérent. Arduino utilise la dernière installée. Désinstaller les doublons dans le gestionnaire.

**Bibliothèque incompatible avec la carte.** Une bibliothèque écrite pour Uno R3 (AVR) peut échouer à compiler sur Uno R4 (ARM Renesas) ou ESP32. Vérifier les plateformes supportées sur GitHub. Souvent, une version `2.x` ou une fork existe pour la nouvelle plateforme.

**Conflit de ressources.** `Servo.h` utilise le Timer1 sur Uno R3 et désactive le PWM sur D9 et D10. Inclure deux bibliothèques qui veulent le même timer génère un comportement imprévisible. Lire les notes de chaque bibliothèque.

**Doublon de définitions.** Inclure deux fois la même bibliothèque dans plusieurs fichiers du projet sans garde `#ifndef` génère des erreurs *multiple definition of...*. Les bibliothèques sérieuses sont protégées ; les amateurs ne le sont pas toujours.

**API instable entre versions.** Une mise à jour de bibliothèque peut renommer des fonctions ou changer les paramètres. Si un code qui marchait casse après mise à jour, regarder le `CHANGELOG` du dépôt. Solution : pinner la version (PlatformIO le permet via `platformio.ini`).

**Bibliothèque obsolète sur composant courant.** Pour les capteurs très courants (DHT11/22, MPU6050), plusieurs bibliothèques cohabitent — certaines à jour, d'autres abandonnées. Préférer celles maintenues par un acteur connu (Adafruit, Sensirion, le fabricant du composant) à un fork orphelin.

## Cas particulier — Bibliothèques `Wire` et `SPI`

`Wire.h` (I2C) et `SPI.h` sont **livrées avec l'IDE** — pas besoin d'installer. Elles fournissent les primitives bas niveau, sur lesquelles les bibliothèques de capteurs sur bus s'appuient. Voir [[arduino-i2c|I2C sur Arduino]] et [[arduino-spi|SPI sur Arduino]].

Pareil pour `EEPROM.h` (mémoire non volatile), `SoftwareSerial.h` (UART logiciel), `Stepper.h` (moteur pas-à-pas) : livrées avec l'IDE.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — au premier capteur ou actionneur évolué (servo, LCD, BMP280), installer la bonne bibliothèque et faire tourner son exemple AVANT d'écrire du code projet. C'est le test de validation matériel + outil.
- **Étape 4 de la [[concept|phase de concept]]** — l'EAT inclut souvent la disponibilité d'une bibliothèque comme critère de choix d'un composant : un composant sans bibliothèque maintenue ajoute des semaines de développement.

Une bibliothèque bien choisie est l'un des plus gros leviers d'efficacité d'un projet embarqué. Inversement, s'obstiner à réinventer ce qu'une bibliothèque éprouvée fait déjà est un faux pas qu'on paye en bugs sur la durée.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-prise-en-main|Prise en main d'Arduino]] — prérequis (savoir où trouver le gestionnaire)
- [[arduino-servomoteur|Servomoteur]] — exemple d'utilisation de `Servo.h`
- [[arduino-afficheur|Afficheur LCD / OLED]] — exemple d'utilisation de `LiquidCrystal_I2C` ou `Adafruit_SSD1306`
- [[bibliotheque|Bibliothèque]] — la notion transverse
- [[firmware|Firmware]] — pour la structuration plus large du code embarqué
