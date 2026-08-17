---
title: Prise en main du XIAO ESP32-S3
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - xiao
prerequis:
  - xiao-esp32-s3
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

La **prise en main du XIAO ESP32-S3** consiste à installer le support de la carte dans l'IDE Arduino, à la faire reconnaître par l'ordinateur via l'**USB-C**, et à téléverser un premier programme. Comme la carte est un [[esp32|ESP32]]-S3, la procédure est celle de la [[esp32-prise-en-main|prise en main de l'ESP32]] — on l'adapte ici aux spécificités du format : barrettes à souder, antenne à clipser, **LED utilisateur active à l'état bas**, et surtout la **séquence de récupération** quand la carte « disparaît ».

> [!note] Avant de commencer
> La XIAO est livrée **sans barrettes** : souder les broches nécessaires (attention aux pâtés de soudure, la carte est minuscule). Pour le Wi-Fi/BLE, clipser l'antenne fournie sur le connecteur U.FL — un côté dans le bloc d'abord, puis presser l'autre ; ne jamais tirer sur le câble pour la retirer.

## Installer le support et téléverser (Arduino)

1. Installer l'**IDE Arduino** (version stable).
2. **Fichier → Préférences → URL de gestionnaire de cartes supplémentaires**, ajouter :
   `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
3. **Outils → Type de carte → Gestionnaire de cartes**, chercher `esp32` (Espressif) et installer la dernière version (il faut **≥ 2.0.8**).
4. Sélectionner la carte **`XIAO_ESP32S3`** et le port (un `COM3` ou plus sous Windows ; un `usbmodem`/`usbserial` sous macOS — au doute, débrancher/rebrancher pour voir lequel disparaît).
5. Ouvrir **Fichier → Exemples → 01.Basics → Blink** et téléverser : la LED orange se met à clignoter.

La démarche complète (et l'alternative **ESP-IDF**) est détaillée dans [[esp32-prise-en-main|prise en main de l'ESP32]] et [[esp32-arduino-core|ESP32 Arduino-core]] ; ici on s'en tient au minimum pour valider la carte.

## Premier programme : la LED qui clignote

La **LED utilisateur** est câblée sur **GPIO21**, et elle est **active à l'état bas** : un niveau `LOW` l'allume, un niveau `HIGH` l'éteint. C'est le piège classique du « Blink à l'envers ».

En **Arduino** :

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);   // LED_BUILTIN = GPIO21
}

void loop() {
  digitalWrite(LED_BUILTIN, LOW);   // allumée (actif à l'état bas)
  delay(500);
  digitalWrite(LED_BUILTIN, HIGH);  // éteinte
  delay(500);
}
```

Le même en **MicroPython** (une fois le firmware MicroPython flashé — voir [[micropython|MicroPython]]) :

```python
from machine import Pin
from time import sleep

led = Pin(21, Pin.OUT)
while True:
    led.value(0)   # allumée
    sleep(0.5)
    led.value(1)   # éteinte
    sleep(0.5)
```

Pour vérifier que les **radios** répondent, lancer ensuite un scan Wi-Fi ou BLE — voir [[esp32-wifi|Wi-Fi]] et [[esp32-ble|BLE]].

## Récupérer une carte qui ne répond plus

Tôt ou tard, un mauvais programme (ou un deep sleep mal réglé) fait « disparaître » la carte : **plus de port**, ou un port présent mais le **téléversement échoue**. La parade est le **mode bootloader**, qu'on force avec le bouton BOOT.

![Procédure en quatre étapes pour passer le XIAO ESP32-S3 en mode bootloader : maintenir BOOT, brancher l'USB-C, relâcher BOOT, téléverser puis appuyer sur Reset.|640](/ressources/img/xiao-prise-en-main/bootloader.svg)

Une fois en mode bootloader, téléverser un programme sain (le Blink fait l'affaire), puis appuyer sur **Reset** pour le lancer. Le bouton **Reset** seul, lui, relance simplement le programme déjà en place.

> [!tip] Moniteur série vide ou en erreur ?
> L'ESP32-S3 gère l'USB **nativement** (pas de puce série dédiée). Si le moniteur reste muet ou renvoie une erreur à l'ouverture, activer l'option **« USB CDC On Boot »** dans le menu Outils, puis re-téléverser. Pour l'usage de la liaison série, voir [[esp32-serie|série / moniteur]].

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — le premier téléversement sur la carte cible valide d'un coup toute la chaîne (IDE, support ESP32, USB natif, sélection carte et port). Tant que le Blink ne clignote pas, aucune mesure ni asservissement aval n'est crédible.
- **Toutes les fiches XIAO et ESP32 aval** — la séquence bootloader et l'option *USB CDC On Boot* débloquent la majorité des séances qui s'enlisent. Les acquérir ici, sur du code trivial, évite de les redécouvrir dans l'urgence d'un projet.

Le format timbre-poste ajoute une contrainte propre : soudure et antenne se font **avant** le premier essai, et une carte mal soudée donne les mêmes symptômes qu'un problème logiciel. Valider la carte nue en début de PoC évite ce doute.

## Voir aussi

- [[xiao-esp32-s3|XIAO ESP32-S3]] — le hub de la carte (brochage, variantes, mise en œuvre)
- [[esp32-prise-en-main|Prise en main de l'ESP32]] — la procédure de référence, en détail
- [[esp32-arduino-core|ESP32 Arduino-core]] — le cœur Arduino pour ESP32
- [[esp32-serie|Série / moniteur]] — dialoguer avec la carte
- [[micropython|MicroPython]] — l'autre voie de programmation
- [[xiao-alimentation|XIAO — alimentation]] — alimenter et recharger la carte
