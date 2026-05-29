---
title: Stockage EEPROM sur Arduino
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-bibliotheques
aa: []
draft: false
---

L'**EEPROM** (*Electrically Erasable Programmable Read-Only Memory*) est une mémoire non volatile intégrée au microcontrôleur, qui conserve son contenu après coupure d'alimentation. Sur Arduino Uno R3, elle fait **1 ko** ; sur Mega 2560, **4 ko**. C'est l'endroit où l'on stocke les paramètres utilisateur (calibration capteur, mode de fonctionnement, compteur d'événements) pour les retrouver au redémarrage. La bibliothèque **`EEPROM.h`** livrée avec l'IDE encapsule la lecture / écriture à l'octet près.

## À quoi ça sert ?

Cas d'usage en projet école :

- **Compteur d'événements persistant** — nombre de démarrages, nombre de cycles effectués, durée totale d'utilisation.
- **Paramètres de calibration** — offset capteur, seuils utilisateur, mode de fonctionnement.
- **Mémorisation de la dernière configuration** — dernier mode actif, dernière valeur de consigne — pour reprendre où on s'était arrêté.
- **Petits logs** — quelques dernières valeurs d'un capteur conservées pour analyse post-démarrage.

**Limites importantes** : capacité réduite (1 ko = 1024 octets sur Uno R3), nombre de cycles d'écriture limité (~100 000 par cellule), pas de gestion de système de fichiers — c'est une mémoire brute adressée par numéro d'octet. Pour des volumes plus gros, voir la SD card (voir [[arduino-spi|SPI sur Arduino]]).

## Procédure pas à pas

Quatre étapes : connaître la capacité de la carte, lire la valeur initiale, écrire avec économie, gérer les structures de données.

### 1. Connaître la capacité

| Carte | Capacité EEPROM | Type |
|---|---|---|
| Uno R3, Nano (ATmega328P) | **1024 octets** | EEPROM dédiée |
| Mega 2560 | 4096 octets | EEPROM dédiée |
| **Uno R4** | 8 ko émulés sur Data Flash (Renesas RA4M1) | **émulation** — comportement légèrement différent |
| ESP32 | aucune EEPROM matérielle — **émulée sur Flash** (4 ko par défaut) | émulation via `EEPROM.h` ou `Preferences.h` |

Sur **Uno R4**, l'EEPROM n'existe pas physiquement — Renesas RA4M1 utilise sa **Data Flash** pour émuler le comportement. La bibliothèque `EEPROM.h` est compatible, mais les caractéristiques diffèrent : durée d'écriture, nombre de cycles, granularité de l'effacement.

Sur **ESP32**, préférer `Preferences.h` (plus moderne) à `EEPROM.h` (héritage compatibilité).

### 2. Lecture / écriture basique

```cpp
#include <EEPROM.h>

void setup() {
  Serial.begin(115200);
  delay(2000);

  // Écrire un octet à l'adresse 0
  EEPROM.write(0, 42);

  // Lire le même octet
  byte valeur = EEPROM.read(0);
  Serial.print("Lu : "); Serial.println(valeur);
}

void loop() {}
```

`EEPROM.write(adresse, octet)` écrit. `EEPROM.read(adresse)` lit. L'adresse est un entier entre 0 et la capacité - 1 (0-1023 sur Uno R3).

Pour les types multi-octets (`int`, `float`, structures), utiliser `EEPROM.put()` et `EEPROM.get()` qui gèrent automatiquement la sérialisation :

```cpp
float seuil = 3.14;
EEPROM.put(0, seuil);  // écrit 4 octets

float seuilLu;
EEPROM.get(0, seuilLu);  // lit 4 octets et reconstitue le float
```

### 3. Économiser les cycles d'écriture

Chaque cellule EEPROM supporte ~100 000 cycles d'écriture (variable selon les conditions). À 1 écriture par seconde, ça dure ~28 heures avant usure. **Discipline obligatoire** : ne pas écrire en boucle, n'écrire que quand la valeur change.

```cpp
void enregistrer(int adresse, byte nouvelleValeur) {
  byte valeurActuelle = EEPROM.read(adresse);
  if (valeurActuelle != nouvelleValeur) {
    EEPROM.write(adresse, nouvelleValeur);
  }
}
```

`EEPROM.update(adresse, octet)` fait cela automatiquement (lecture préalable, écriture si différent). À préférer à `EEPROM.write()` chaque fois qu'on n'est pas sûr que la valeur change vraiment.

### 4. Gérer des structures de données

Pour stocker plusieurs paramètres ensemble, définir une structure et l'écrire en bloc :

```cpp
struct Config {
  int seuilCapteur;
  float coeffEtalonnage;
  byte modeActif;
  uint32_t nbDemarrages;
};

void sauverConfig(Config &c) {
  EEPROM.put(0, c);  // écrit l'intégralité de la structure à l'adresse 0
}

void chargerConfig(Config &c) {
  EEPROM.get(0, c);
}
```

Avantage : la structure documente le format des données et facilite l'évolution.

## Exemple — Compteur de démarrages persistant

Cas complet : compter le nombre de démarrages de l'Arduino et l'afficher au moniteur série.

```cpp
#include <EEPROM.h>

const int ADRESSE_COMPTEUR = 0;  // les 4 premiers octets

void setup() {
  Serial.begin(115200);
  delay(2000);

  // Lire le compteur actuel
  uint32_t compteur;
  EEPROM.get(ADRESSE_COMPTEUR, compteur);

  // EEPROM neuve : tous les octets sont à 0xFF — résultat 0xFFFFFFFF = 4294967295
  // Détecter ce cas et initialiser à 0
  if (compteur == 0xFFFFFFFF) {
    compteur = 0;
    Serial.println("EEPROM neuve, initialisation");
  }

  // Incrémenter
  compteur++;

  // Sauvegarder
  EEPROM.put(ADRESSE_COMPTEUR, compteur);

  Serial.print("Demarrage n°");
  Serial.println(compteur);
}

void loop() {}
```

Téléverser, observer la valeur (par exemple : `Demarrage n°1`). Débrancher l'Arduino, rebrancher — la valeur s'incrémente (`n°2`, `n°3`...). Elle persiste même après une déconnexion totale.

## Pièges

**Détection de l'EEPROM neuve.** Une EEPROM vierge a tous ses octets à `0xFF` (255). Si on lit un `int` à l'adresse 0 sans avoir jamais écrit, on lit `0xFFFF` (32767 ou -1 selon le signe). **Toujours détecter ce cas** et initialiser à une valeur sensée — sinon, le programme part avec des paramètres aberrants. Variante : écrire une **signature** (octet de valeur connue à une adresse fixe) qu'on vérifie au démarrage.

**Pas d'`EEPROM.commit()` oublié sur ESP32.** Sur ESP32, l'`EEPROM.h` émulée nécessite un appel explicite à `EEPROM.commit()` après chaque modification pour que les données soient effectivement écrites en Flash. Sur Uno R3, ce n'est pas nécessaire — code écrit pour Uno qui passe sur ESP32 et perd ses données = oubli du `commit()`.

**Écriture en boucle.** Code comme `EEPROM.write(0, capteur);` dans `loop()` — chaque tour de `loop()` écrit, on dépasse les 100 000 cycles en quelques heures. Cellule grillée, valeurs erratiques. Utiliser `EEPROM.update()` ou n'écrire que sur événement (changement de mode, bouton).

**Adresses qui se chevauchent.** Stocker un `int` (2 octets) à l'adresse 0, puis un `float` (4 octets) à l'adresse 1 : le `float` écrase les octets 1, 2, 3, 4 — donc le second octet de l'`int` est corrompu. Toujours calculer les adresses : `ADR_FLOAT = ADR_INT + sizeof(int);`.

**Casse de structure entre versions.** Modifier le `struct Config` (ajout d'un champ, changement d'un type) brise la compatibilité avec l'EEPROM existante — au démarrage, on lit des octets dans la mauvaise structure. Bonne pratique : numéroter la version dans la structure et migrer si la version diffère.

**Corruption d'EEPROM par reset pendant l'écriture.** Une coupure d'alimentation pendant `EEPROM.write()` peut corrompre l'octet en cours d'écriture (~3 ms sur Uno R3). Pour des données critiques, utiliser un double-buffer (deux copies à adresses différentes, basculer entre les deux) ou un checksum.

**Mauvaise interprétation des types.** Lire avec `EEPROM.get<float>` ce qui a été écrit avec `EEPROM.put<int>` donne des valeurs aberrantes — pas d'erreur, juste de mauvais bits. La cohérence type-à-type est de la responsabilité du programmeur.

**Confondre Flash et EEPROM.** La mémoire **Flash** d'un Arduino contient le sketch — on ne peut pas l'écrire en cours d'exécution depuis le code utilisateur. La **EEPROM** est une zone séparée, dédiée aux données utilisateur. Sur Uno R4 et ESP32, la frontière s'estompe (émulation), mais le concept reste valide.

## Cas particulier — Alternatives pour ESP32

Sur ESP32, deux APIs cohabitent :

- **`EEPROM.h`** — émulée pour rétrocompatibilité Arduino. Simple mais brut.
- **`Preferences.h`** — API native ESP32, paires clé-valeur sur Flash, gestion automatique des espaces, plus robuste. **Recommandée**.

```cpp
#include <Preferences.h>

Preferences prefs;

void setup() {
  prefs.begin("mon-app", false);  // namespace, mode RW
  int compteur = prefs.getInt("demarrages", 0);
  compteur++;
  prefs.putInt("demarrages", compteur);
  prefs.end();
}
```

## Raccrochage projet

- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — au premier paramètre utilisateur réglable (seuil, mode), envisager la sauvegarde en EEPROM dès la PoC pour ne pas avoir à recoder le paramétrage à chaque cycle.
- **Étape 4 de la [[dossier-technique|phase de dossier technique]]** — la persistance des paramètres et compteurs fait partie des choix d'architecture du firmware.
- **Étape 1 de la [[mise-en-service|phase de mise en service]]** — la calibration en condition réelle se sauvegarde en EEPROM pour ne pas être perdue à la coupure.

L'EEPROM est un petit outil simple mais souvent négligé en projet débutant — l'introduire au moment où apparaît le premier paramètre persistant transforme un sketch de démo en système qui *se souvient*, étape clé pour un démonstrateur crédible.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-bibliotheques|Utiliser une bibliothèque]] — prérequis, `EEPROM.h` est livrée
- [[arduino-spi|SPI sur Arduino]] — pour les volumes plus grands (carte SD)
- [[arduino-debug|Débugger un programme Arduino]] — pour inspecter le contenu EEPROM
- [[firmware|Firmware]] — organisation du code embarqué incluant persistance
