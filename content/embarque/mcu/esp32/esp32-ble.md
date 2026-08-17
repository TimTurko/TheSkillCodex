---
title: Bluetooth LE avec l'ESP32
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - esp32
prerequis:
  - esp32
  - esp32-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Le **Bluetooth Low Energy (BLE)** est la seconde radio intégrée de l'ESP32 : une liaison courte portée, très économe, conçue pour échanger de **petites quantités de données** entre un objet et un téléphone ou un autre appareil. Là où le Wi-Fi vise le réseau et Internet, le BLE vise le lien direct et frugal — capteur qui publie une mesure, télécommande, configuration depuis une application mobile. C'est, comme le Wi-Fi, une capacité absente de l'Arduino classique. Le concept général est traité dans [[techno-sans-fil|technologies sans fil]] et [[ble|Bluetooth LE]] ; cette fiche en donne l'incarnation ESP32.

## À quoi ça sert ?

Le BLE de l'ESP32 sert quand il faut un lien **local, économe, sans infrastructure** :

- **Publier des mesures vers un téléphone** — température, niveau, état — qu'une application mobile lit en se connectant, sans réseau Wi-Fi ni serveur.
- **Recevoir des commandes** — une application envoie une consigne, l'ESP32 l'applique. Télécommande ou configuration de terrain.
- **Économiser l'énergie** — le BLE consomme bien moins que le Wi-Fi, ce qui le rend adapté aux objets sur batterie qui n'ont pas besoin d'Internet.

> [!warning]
> **BLE n'est pas le Bluetooth « Classic ».** Le BLE échange de petites données par *caractéristiques* ; le Bluetooth Classic (audio, port série SPP) est un autre protocole. **Seul l'ESP32 d'origine** possède le Bluetooth Classic ; toutes les autres variantes sont **BLE uniquement**. Et l'**ESP32-S2 n'a aucun Bluetooth** — à vérifier selon la carte (voir le panorama du hub [[esp32|ESP32]]).

## Le modèle GATT : services et caractéristiques

Le BLE organise les données selon le modèle **GATT**. Deux rôles et trois objets à connaître :

- **Rôles** — le *serveur* (l'ESP32, qui détient les données et les expose, aussi appelé périphérique) et le *client* (le téléphone, qui se connecte et lit/écrit, aussi appelé central).
- **Service** — un regroupement logique de données, identifié par un **UUID** (identifiant unique).
- **Caractéristique** — la donnée elle-même (une mesure, un état), dans un service. Elle a des **propriétés** : `READ` (le client peut lire), `WRITE` (le client peut écrire), `NOTIFY` (le serveur pousse la valeur sans demande).
- **Advertising** — pour être trouvable, le serveur **diffuse** sa présence ; le client le découvre lors d'un *scan*.

L'idée : l'ESP32 publie un service contenant une caractéristique ; un téléphone scanne, se connecte, lit la caractéristique (ou reçoit ses notifications).

![Les deux rôles BLE : l'ESP32 périphérique (serveur) expose un service et une caractéristique et diffuse sa présence ; le téléphone central (client) scanne, se connecte, puis lit ou s'abonne à la valeur.|640](/ressources/img/esp32-ble/roles-ble.svg)

## Exemple — Publier un compteur en notification

Un serveur GATT minimal : l'ESP32 expose une caractéristique dont la valeur s'incrémente chaque seconde et la **notifie** aux clients connectés. Testable avec l'application **nRF Connect** (gratuite, iOS/Android).

```cpp
#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>     // descripteur nécessaire aux notifications

// UUID librement choisis (générateur en ligne pour de vrais projets)
const char* UUID_SERVICE        = "12345678-1234-1234-1234-1234567890ab";
const char* UUID_CARACTERISTIQUE = "abcd1234-5678-90ab-cdef-1234567890ab";

BLECharacteristic* caracteristique;
unsigned long dernier = 0;
int compteur = 0;

void setup() {
  Serial.begin(115200);

  BLEDevice::init("ESP32-Capteur");              // nom visible au scan
  BLEServer* serveur = BLEDevice::createServer();
  BLEService* service = serveur->createService(UUID_SERVICE);

  caracteristique = service->createCharacteristic(
      UUID_CARACTERISTIQUE,
      BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY);
  caracteristique->addDescriptor(new BLE2902());  // active les notifications

  service->start();

  BLEAdvertising* advertising = BLEDevice::getAdvertising();
  advertising->addServiceUUID(UUID_SERVICE);
  advertising->start();                           // devient trouvable
  Serial.println("BLE actif, en attente de connexion...");
}

void loop() {
  if (millis() - dernier >= 1000) {               // toutes les secondes
    dernier = millis();
    compteur++;
    caracteristique->setValue(String(compteur).c_str());  // en texte, lisible au téléphone
    caracteristique->notify();                            // pousse aux clients
    Serial.print("Notifie : ");
    Serial.println(compteur);
  }
}
```

Téléversez, ouvrez nRF Connect sur le téléphone, scannez : `ESP32-Capteur` apparaît. Connectez-vous, dépliez le service, activez les notifications sur la caractéristique — la valeur s'incrémente en direct. La carte **pousse** la donnée sans que le téléphone ait à la redemander.

> [!tip]
> **Texte ou binaire ?** La valeur part ici **en texte**, pour qu'elle s'affiche telle quelle dans nRF Connect. Une caractéristique BLE transporte en réalité des **octets bruts** : `setValue(compteur)` avec un entier enverrait quatre octets, que l'application afficherait en hexadécimal (`01-00-00-00`). Les vrais projets préfèrent ce format binaire, plus compact — le texte est un confort de mise au point.

Prendre capture d'écran de *l'application nRF Connect montrant le périphérique « ESP32-Capteur » connecté, le service déplié et la caractéristique dont la valeur s'incrémente*.

## Pièges

**Confondre BLE et Bluetooth Classic.** Chercher à brancher un casque audio ou un port série SPP en BLE ne marche pas : ce sont deux protocoles. Pour du « port série sans fil », c'est le Bluetooth Classic — uniquement sur l'ESP32 d'origine.

**Variante sans Bluetooth.** Sur un ESP32-S2, ce code ne compile/fonctionne pas : pas de radio Bluetooth. Vérifier la variante avant de viser le BLE.

**Notifications sans descripteur.** Une caractéristique `NOTIFY` sans le descripteur `BLE2902` : le client ne peut pas s'abonner et ne reçoit rien. L'ajouter systématiquement pour les notifications.

**UUID désaccordés.** Le client cherche un UUID précis ; un caractère faux côté serveur et il ne trouve pas la caractéristique. Copier-coller les UUID, ne pas les retaper.

**Bibliothèque BLE volumineuse.** La pile BLE intégrée occupe beaucoup de Flash ; un sketch BLE + Wi-Fi peut dépasser la partition par défaut. Choisir un schéma de partition adapté (*Outils → Partition Scheme*) ou la pile allégée **NimBLE** (voir Aller plus loin).

**Pas d'outil de test.** Sans application BLE sur le téléphone, impossible de vérifier le serveur. Installer nRF Connect (ou équivalent) avant de commencer.

## Exercices

*Câblage : capteur sur `GPIO34` et LED sur `GPIO16` — voir les montages de [[esp32-gpio|configurer les GPIO]].*

> [!question] Exercice 1 — Notifier une vraie mesure
> Remplacez le compteur par la lecture d'un capteur analogique sur `GPIO34` (ADC1), notifiée toutes les 500 ms. Qu'est-ce qui change ?

> [!success]- Corrigé
> Seule la source de la valeur change ; toute la structure BLE reste identique.
> ```cpp
> // ... (mêmes includes, UUID, setup BLE inchangés) ...
> const int CAPTEUR = 34;   // ADC1
>
> void loop() {
>   if (millis() - dernier >= 500) {
>     dernier = millis();
>     int valeur = analogRead(CAPTEUR);    // 0..4095
>     caracteristique->setValue(valeur);
>     caracteristique->notify();
>     Serial.println(valeur);
>   }
> }
> ```
> La structure serveur/service/caractéristique est exactement la même — c'est l'intérêt du modèle GATT : un même squelette pour n'importe quelle donnée.

> [!question] Exercice 2 — Recevoir une commande (caractéristique en écriture)
> Ajoutez une caractéristique en **écriture** : quand le client y écrit `1`, la carte allume une LED (`GPIO16`) ; `0`, elle l'éteint. Indice : un *callback* d'écriture.

> [!success]- Corrigé
> On déclare la caractéristique avec `PROPERTY_WRITE` et on attache un callback qui réagit à chaque écriture.
> ```cpp
> const int LED = 16;
> const char* UUID_CMD = "0000aaaa-0000-1000-8000-00805f9b34fb";
>
> class CmdCallback : public BLECharacteristicCallbacks {
>   void onWrite(BLECharacteristic* c) override {
>     String v = c->getValue().c_str();
>     if (v == "1") digitalWrite(LED, HIGH);
>     else if (v == "0") digitalWrite(LED, LOW);
>   }
> };
>
> // dans setup(), après createService(...) :
> //   pinMode(LED, OUTPUT);
> //   BLECharacteristic* cmd = service->createCharacteristic(
> //       UUID_CMD, BLECharacteristic::PROPERTY_WRITE);
> //   cmd->setCallbacks(new CmdCallback());
> ```
> Le callback `onWrite` est appelé par la pile BLE à chaque écriture du client. Depuis nRF Connect, écrire la valeur `1` ou `0` sur la caractéristique pilote la LED — une télécommande sans application dédiée.

## Cas particulier — La carte comme client (scanner)

L'ESP32 peut aussi être *central* : scanner les périphériques BLE alentour. Utile pour détecter des balises (beacons) ou d'autres capteurs.

```cpp
#include <BLEDevice.h>
#include <BLEScan.h>

void setup() {
  Serial.begin(115200);
  BLEDevice::init("");
  BLEScan* scan = BLEDevice::getScan();
  BLEScanResults* res = scan->start(5);     // scan de 5 secondes (cœur 3.x : pointeur)
  Serial.print(res->getCount());
  Serial.println(" peripheriques BLE trouves.");
}

void loop() {}
```

Une carte ne peut pas être simultanément un serveur élaboré et un scanner intensif sans précautions ; pour les rôles mixtes, prévoir l'architecture (voir [[esp32-freertos|FreeRTOS]] pour le multitâche).

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — si le projet expose des données à un téléphone sans réseau (capteur portable, télécommande), valider tôt un serveur GATT lisible par nRF Connect lève l'incertitude de connectivité. Souvent suffisant là où le Wi-Fi serait surdimensionné.
- **Interface de configuration mobile** — une caractéristique en écriture permet de régler des paramètres depuis un téléphone, sans IHM physique.

Choisir entre Wi-Fi et BLE dès la PoC selon le besoin réel (Internet vs lien local, énergie disponible) évite de surdimensionner la radio — le BLE est plus frugal quand Internet n'est pas requis.

## Aller plus loin

- [[techno-sans-fil|Technologies sans fil]] · [[ble|Bluetooth LE]] — le concept, comparé à Wi-Fi / Zigbee / LoRa (transverse).
- [[esp32-wifi|Wi-Fi]] — l'autre radio, pour le réseau et Internet.
- **NimBLE-Arduino** — pile BLE alternative, beaucoup plus légère en Flash et en RAM que la pile intégrée ; recommandée dès que la place manque.
- [Documentation BLE de l'Arduino-ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ble.html) — serveur, client, sécurité, appairage.

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32 (panorama des variantes et de leur Bluetooth)
- [[esp32-prise-en-main|Prise en main de l'ESP32]] — prérequis (IDE + support + premier téléversement)
- [[esp32-wifi|Wi-Fi]] — radio réseau de l'ESP32
- [[techno-sans-fil|Technologies sans fil]] — panorama des radios (transverse)
- [[esp32-deep-sleep|Deep sleep]] — économiser l'énergie entre deux échanges
