---
title: Programmer l'ESP8266 avec l'Arduino-core
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - esp8266
prerequis:
  - esp8266
  - esp8266-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

L'**ESP8266 Arduino core** est la couche logicielle qui amène l'API Arduino (`setup()`, `loop()`, `digitalWrite`, `Serial`…) sur les cartes ESP8266, **avec le Wi-Fi en plus**. C'est la **porte unique** de l'ESP8266 : on reste « en Arduino », mais il faut composer avec quelques particularités de la puce — un **décalage entre les étiquettes des broches et leurs numéros GPIO**, des **broches de démarrage** à respecter, un **seul ADC**, et une **pile Wi-Fi qui tourne en tâche de fond** qu'il ne faut pas affamer. La structuration générale du firmware relève de [[firmware|firmware]] ; pour les concepts Wi-Fi, l'[[esp32-wifi|ESP32]] sert de référence (API quasi identique).

## À quoi ça sert ?

L'Arduino-core ESP8266 permet d'écrire un objet **connecté en Wi-Fi** avec le vocabulaire Arduino familier :

- **Réutiliser ce qu'on sait** — tout le vocabulaire Arduino fonctionne (`pinMode`, `digitalWrite`, `analogRead`, `Serial`, `Wire`, `SPI`…) ;
- **Ajouter le Wi-Fi simplement** — la bibliothèque `ESP8266WiFi` connecte la carte à un réseau en quelques lignes ;
- **Au plus simple** — pour un petit capteur qui publie une mesure sur le réseau, l'ESP8266 fait le travail avec une seule bibliothèque et sans radio externe.

C'est le **bon (et seul) point d'entrée**. Les particularités ci-dessous ne sont pas un autre environnement, mais des **points de vigilance** à connaître une fois.

## Le même code qu'Arduino, avec des particularités

Un sketch ESP8266 a la forme d'un sketch Arduino — `setup()` une fois, `loop()` en boucle. Quatre particularités à intégrer :

### Les étiquettes Dxx ≠ les numéros GPIO

Sur NodeMCU / D1 mini, la sérigraphie note les broches **D0, D1, D2…**, qui **ne correspondent pas** aux numéros GPIO. Par exemple **D1 = GPIO5**, **D2 = GPIO4**, **D5 = GPIO14**. Le plus sûr est d'utiliser les **constantes `Dxx`** (déjà définies par le core) plutôt que les numéros bruts :

```cpp
const int RELAIS = D1;   // = GPIO5, mais on raisonne avec l'étiquette de la carte
```

![Correspondance des étiquettes Dxx et des numéros GPIO sur ESP8266 (NodeMCU / Wemos D1 mini) : D1=GPIO5, D2=GPIO4, D5=GPIO14, D6=GPIO12, etc. ; broches sûres D1/D2/D5/D6/D7, broches de boot D3/D4/D8 à manier avec précaution, A0 = ADC0 unique.|640](/ressources/img/esp8266-arduino-core/brochage-d1-gpio.svg)

### Les broches de démarrage

**GPIO0, GPIO2 et GPIO15** conditionnent le mode au reset (exécution normale vs flashage). Les utiliser en sortie de manière à forcer un mauvais état au démarrage **empêche la puce de booter**. En pratique : éviter d'y mettre une charge qui les tire au mauvais niveau, et préférer d'autres broches pour les sorties libres. **GPIO16** est particulier (pas d'interruption ; sert au réveil de *deep sleep* en le reliant à RST).

### Un seul ADC

L'ESP8266 n'a **qu'une entrée analogique** (**A0**), sur 10 bits. Sur la puce, elle lit **0–1 V** ; les cartes NodeMCU / D1 mini ajoutent un diviseur pour lire **0–3,3 V** à la broche. À vérifier selon la carte avant de brancher un capteur analogique.

### La pile Wi-Fi tourne en tâche de fond

Le Wi-Fi est géré en arrière-plan par la puce. Si `loop()` exécute un calcul **long sans rendre la main**, le **chien de garde** (*watchdog*) finit par **redémarrer la carte**. La règle : garder la boucle courte, et insérer `yield()` (ou un `delay()`) dans toute attente prolongée. C'est la contrepartie du Wi-Fi intégré — il faut **laisser respirer** la pile.

## Exemple — Se connecter au Wi-Fi

Ce sketch connecte la carte à un réseau Wi-Fi et affiche son adresse IP. Il illustre la porte (Arduino + `ESP8266WiFi`) et la bonne pratique du `delay()` qui laisse tourner la pile.

```cpp
#include <ESP8266WiFi.h>          // pile Wi-Fi de l'ESP8266

const char* ssid = "MonReseau";           // nom du réseau à rejoindre
const char* motdepasse = "MonMotDePasse"; // sa clé WPA

void setup() {
  Serial.begin(115200);          // ouvre le moniteur série pour suivre la connexion
  WiFi.begin(ssid, motdepasse);  // lance la connexion (elle n'est pas instantanée)

  Serial.print("Connexion");
  while (WiFi.status() != WL_CONNECTED) {   // tant que la liaison n'est pas établie
    delay(500);            // delay() rend la main à la pile Wi-Fi (évite le watchdog)
    Serial.print(".");     // un point par tentative, pour voir que ça avance
  }

  Serial.println();
  Serial.print("Connecte. IP : ");
  Serial.println(WiFi.localIP());   // l'adresse attribuée par la box
}

void loop() {
  // boucle courte : laisser la pile Wi-Fi respirer
}
```

Au moniteur série, on voit la connexion progresser, puis l'adresse IP attribuée à la carte. À partir de là, le code est **identique** à celui d'un ESP32 : l'API `ESP8266WiFi` reflète celle de l'ESP32. Pour les concepts (mode station vs point d'accès, reconnexion, client/serveur), voir [[esp32-wifi|le Wi-Fi de l'ESP32]].

Prendre capture d'écran de *le moniteur série affichant la progression de connexion puis l'adresse IP de la carte*.

## Pièges

**Confondre Dxx et GPIO.** D1 n'est pas GPIO1. Utiliser les constantes `Dxx`, ou connaître le décalage de la carte.

**Bloquer une broche de boot.** GPIO0/2/15 en sortie au mauvais niveau au reset → pas de démarrage. Réserver d'autres broches pour les sorties libres.

**Mésestimer l'ADC.** Une seule entrée A0, 0–1 V sur la puce (0–3,3 V sur carte via diviseur), 10 bits. Vérifier la carte.

**Affamer la pile Wi-Fi.** Un calcul long sans `yield()`/`delay()` déclenche le *watchdog* et redémarre la carte. Garder `loop()` courte.

**Appliquer 5 V.** L'ESP8266 n'est pas tolérant 5 V : adapter le niveau des signaux entrants.

**Croire au Bluetooth.** L'ESP8266 **n'a pas** de Bluetooth ; si le projet en a besoin, c'est l'[[esp32|ESP32]].

## Exercices

> [!question] Exercice 1 — La bonne broche
> Faites clignoter une LED externe câblée sur **D6**. Quel GPIO est-ce réellement, et pourquoi vaut-il mieux écrire `D6` que le numéro ?
>
> Le montage est celui de la [[esp8266-prise-en-main#Exercices|prise en main]] — résistance en série puis anode de la LED, cathode à GND — sur **D6** au lieu de D5.

> [!success]- Corrigé
> ```cpp
> const int LED = D6;   // D6 = GPIO12 sur NodeMCU
>
> void setup() { pinMode(LED, OUTPUT); }
>
> void loop() {
>   digitalWrite(LED, HIGH); delay(500);
>   digitalWrite(LED, LOW);  delay(500);
> }
> ```
> **D6 = GPIO12.** Écrire `D6` (la constante du core) plutôt que `12` évite l'erreur classique « D6 = GPIO6 » : les étiquettes de la carte et les numéros GPIO ne coïncident pas.

> [!question] Exercice 2 — Connexion + qualité du signal
> Connectez la carte au Wi-Fi, puis affichez l'adresse IP **et** la puissance du signal reçu (RSSI, en dBm). Indice : `WiFi.RSSI()`.

> [!success]- Corrigé
> ```cpp
> #include <ESP8266WiFi.h>
> const char* ssid = "MonReseau";
> const char* motdepasse = "MonMotDePasse";
>
> void setup() {
>   Serial.begin(115200);
>   WiFi.begin(ssid, motdepasse);
>   while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
>   Serial.println();
>   Serial.print("IP : ");   Serial.println(WiFi.localIP());
>   Serial.print("RSSI : "); Serial.print(WiFi.RSSI()); Serial.println(" dBm");
> }
> void loop() {}
> ```
> Le RSSI (typiquement entre −30 dBm tout près du routeur et −90 dBm en limite de portée) donne une idée de la **qualité de la liaison** — utile pour diagnostiquer des déconnexions. L'API est la même que sur ESP32.

## Cas particulier — au-delà du premier Wi-Fi

- **Serveur / client HTTP, MQTT** — l'ESP8266 héberge un petit serveur web ou publie en MQTT comme l'ESP32 ; les bibliothèques et la démarche sont communes (voir [[esp32-wifi|Wi-Fi ESP32]]).
- **Deep sleep** — `ESP.deepSleep(µs)` met la puce en veille profonde ; le réveil passe par un reset, ce qui impose de **relier GPIO16 à RST**. Principe proche de l'[[esp32-deep-sleep|deep sleep ESP32]].

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — l'Arduino-core ESP8266 est l'environnement de la PoC d'un objet connecté Wi-Fi bâti sur une carte déjà disponible : on valide tôt la connexion réseau et la lecture capteur, en gardant à l'esprit les contraintes de broches.
- **Choix de cible** — si la PoC révèle un besoin de Bluetooth, de plus de broches ou de puissance, c'est le signal de migrer vers l'[[esp32|ESP32]] ; le code Wi-Fi se reporte presque tel quel.

Connaître les quatre particularités (étiquettes, broches de boot, ADC unique, pile Wi-Fi à ménager) suffit à exploiter l'ESP8266 sereinement : le reste est de l'Arduino, et le Wi-Fi est celui de l'ESP32.

## Aller plus loin

- [Référence de l'ESP8266 Arduino core](https://arduino-esp8266.readthedocs.io/) — API, broches, Wi-Fi, deep sleep.
- [[esp32-wifi|Le Wi-Fi de l'ESP32]] — concepts Wi-Fi (API quasi identique).
- [[firmware|Firmware]] — structurer le code embarqué (transverse).

## Voir aussi

- [[esp8266|ESP8266]] — hub des tutoriels ESP8266
- [[esp8266-prise-en-main|Prise en main de l'ESP8266]] — installer le core et téléverser
- [[esp32-wifi|Wi-Fi de l'ESP32]] — concepts Wi-Fi, API proche
- [[esp32|ESP32]] — le grand frère (Wi-Fi + BLE), cible de migration naturelle
- [[gpio|Les GPIO]] · [[niveaux-de-tension|Niveaux de tension]] — concepts d'E/S et logique 3,3 V (transverses)
