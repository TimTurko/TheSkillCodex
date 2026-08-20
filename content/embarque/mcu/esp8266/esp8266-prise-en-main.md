---
title: Prise en main de l'ESP8266
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - esp8266
prerequis:
  - esp8266
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

La **prise en main de l'ESP8266** consiste à installer le **support des cartes ESP8266** dans l'IDE Arduino, à reconnaître la carte (une NodeMCU pour l'exemple), et à téléverser un premier programme. L'ESP8266 se programmant dans le cadre Arduino, l'essentiel des gestes est déjà connu — une étape s'ajoute (installer le core ESP8266), et un petit piège attend au premier blink : la LED intégrée est **active à l'état bas**. Le programme cible reste le **Blink**, l'équivalent embarqué du « Hello World ».

## À quoi ça sert ?

La prise en main valide d'un coup toute la chaîne : éditeur, compilateur, support ESP8266, USB-série, téléversement, liaison. Si un maillon est cassé, le Blink ne clignote pas — et on le sait tout de suite, sur du code trivial.

Au-delà du premier programme, l'étape sert à **ancrer les gestes** (sélection de carte, port, vitesse, téléversement, moniteur série) et à **rencontrer les particularités** de l'ESP8266 dès le départ : le pilote USB-série à installer, la LED active à l'état bas, le réflexe 3,3 V.

## Procédure pas à pas

Cinq étapes : installer l'IDE Arduino, ajouter le support ESP8266, le pilote USB-série, sélectionner la carte, charger le Blink.

### 1. Installer l'IDE Arduino

Téléchargez l'**IDE Arduino 2.x** depuis `arduino.cc` (rubrique *Software*). Le support ESP8266 s'y ajoute via le gestionnaire de cartes (étape 2).

### 2. Ajouter le support ESP8266

Ouvrez *Fichier → Préférences*, et dans **URL de gestionnaire de cartes supplémentaires**, ajoutez :

```
https://arduino.esp8266.com/stable/package_esp8266com_index.json
```

![Fenêtre Préférences de l'IDE Arduino 2.x, champ « URL de gestionnaire de cartes supplémentaires » mis en évidence.|600](/ressources/img/esp32-prise-en-main/preferences-url-cartes.png)

Ouvrez le **gestionnaire de cartes**, cherchez `esp8266`, et installez le paquet **« esp8266 » par ESP8266 Community** — prenez la **dernière version 3.x** proposée par le menu déroulant, qui est la branche stable actuelle du cœur. Les tutoriels de ce module s'y réfèrent.

![Gestionnaire de cartes de l'IDE Arduino filtré sur « esp8266 », montrant le paquet « esp8266 » par ESP8266 Community, son numéro de version et le bouton Installer.|600](/ressources/img/esp8266-prise-en-main/gestionnaire-cartes-esp8266.png)

### 3. Installer le pilote USB-série

Contrairement à beaucoup de cartes récentes, les NodeMCU / D1 mini utilisent une puce USB-série (souvent **CH340**, parfois **CP2102**) qui **demande un pilote** sur Windows si la carte n'est pas reconnue. Installez le pilote correspondant à votre carte, puis rebranchez-la.

### 4. Brancher la carte et sélectionner carte + port

Branchez la carte avec un **câble USB de données**. Deux chemins mènent ensuite à la sélection, selon que l'IDE reconnaît votre carte ou non.

**Cas courant — le sélecteur de la barre d'outils.** Déroulez le sélecteur en haut de la fenêtre : la carte détectée y apparaît avec son port.

![Sélecteur de carte de l'IDE Arduino déroulé : « Generic ESP8266 Module » associé à son port en tête de liste, plusieurs ports « Unknown » en dessous, et l'entrée « Select other board and port… » tout en bas.|400](/ressources/img/esp8266-prise-en-main/menu-outils-carte-port.png)

Sur une NodeMCU, dont le pont USB-série est une puce tierce, la carte s'affiche `Unknown` tant qu'elle n'a jamais été associée — c'est normal (voir *Pièges*). Passez alors par ***Select other board and port…***, choisissez la carte à gauche et votre port à droite : l'association est mémorisée.

**Chemin manuel — les menus *Outils*.** Il fonctionne dans tous les cas. *Outils → Type de carte → esp8266*, puis **« Generic ESP8266 Module »** : cette définition convient à n'importe quelle carte ESP8266 et c'est celle qu'utilisent les captures de cette fiche. Si la vôtre a sa propre entrée dans la liste (*NodeMCU 1.0 (ESP-12E Module)*, *LOLIN(WEMOS) D1 mini*…), vous pouvez la choisir : elle prérègle la taille de flash et ajoute les étiquettes `D0`–`D8` de la sérigraphie — au prix d'un code qui ne se transpose plus tel quel d'une carte à l'autre.

![Menu Outils de l'IDE Arduino déroulé sur Type de carte puis esp8266 : la liste des définitions de cartes, « Generic ESP8266 Module » en tête et encadré.|640](/ressources/img/esp8266-prise-en-main/selection-board.png)

Puis *Outils → Port*, en laissant la vitesse de téléversement par défaut : `COMx` sous Windows, `/dev/ttyUSB0` sous Linux, `/dev/cu.usbserial-...` sous macOS.

Reste à savoir **lequel de ces ports est le vôtre**. Sous Windows, le gestionnaire de périphériques le nomme explicitement : à la rubrique *Ports (COM et LPT)*, la carte apparaît sous le nom de sa puce d'interface — ici `Silicon Labs CP210x USB to UART Bridge (COM10)`. Les autres entrées sont le plus souvent des liaisons série Bluetooth, sans rapport avec la carte : ce sont elles qui remplissent le sélecteur de ports « Unknown ».

![Menu Outils → Port de l'IDE Arduino déroulé à côté du gestionnaire de périphériques Windows : COM10 est encadré dans l'IDE, et une flèche le relie à l'entrée « Silicon Labs CP210x USB to UART Bridge (COM10) » sous Ports (COM et LPT).|640](/ressources/img/esp8266-prise-en-main/selection-port-com.png)

### 5. Charger le Blink — attention à la LED active à l'état bas

Saisissez ce sketch. **Particularité ESP8266** : la LED intégrée est **active à l'état bas** — elle s'allume à `LOW` et s'éteint à `HIGH`, l'inverse du réflexe Arduino :

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, LOW);    // LED active à l'état BAS : LOW = ALLUMÉE
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);   // HIGH = éteinte
  delay(1000);
}
```

Cliquez sur **Téléverser** (icône flèche). Sur NodeMCU / D1 mini, l'**auto-reset** (lignes DTR/RTS) fait entrer la carte en mode programmation **sans appui** ; la console affiche la progression, puis la carte redémarre et la LED clignote.

> [!tip]
> **Si la LED semble « inversée ».** C'est normal et attendu : sur l'ESP8266, `LOW` allume. Si vous vouliez l'éteindre, écrivez `HIGH`. Beaucoup de débutants croient à un bug ici — c'est juste la logique inversée de la LED intégrée.

![Carte NodeMCU branchée en USB, sa LED intégrée allumée, la console de l'IDE affichant un téléversement réussi.|420](/ressources/img/esp8266-prise-en-main/nodemcu-led-allumee.jpg)

## Exemple — Blink modifié

Modifiez les temporisations pour vérifier que vous contrôlez le comportement :

```cpp
void loop() {
  digitalWrite(LED_BUILTIN, LOW);    // allumée
  delay(100);
  digitalWrite(LED_BUILTIN, HIGH);   // éteinte
  delay(900);
}
```

Téléversez à nouveau : un éclair court toutes les secondes. Ce petit pas — modifier, téléverser, observer — est le geste de base des tutoriels suivants.

## Pièges

**Support ESP8266 non installé.** Sans l'étape 2, aucune carte ESP8266 dans *Outils → Type de carte*. L'oubli le plus fréquent.

**Étiquettes `D0`–`D8` inconnues du compilateur.** Elles sont sérigraphiées sur la carte, mais elles ne sont définies que par les **définitions de carte spécifiques** du gestionnaire (*NodeMCU 1.0*, *D1 mini*…). Sous « Generic ESP8266 Module », `const int LED = D5;` échoue à la compilation sur `'D5' was not declared in this scope`. Écrire le **numéro de GPIO** — `14` pour la broche sérigraphiée D5 — qui fonctionne dans tous les cas.

**Pilote USB-série manquant.** Carte non détectée (pas de port) : installer le pilote CH340 / CP2102 correspondant (étape 3).

**Port marqué *Unknown*.** Sur une carte à **pont USB-série tiers** — CH340 comme CP2102 — l'IDE affiche `Unknown` en face du port : le pont annonce son propre identifiant USB, pas celui d'une carte, et l'IDE n'a donc rien à quoi rattacher le port. Ce n'est **pas** un défaut de pilote — Windows, lui, affiche bien la puce sous *Ports (COM et LPT)*, par exemple `Silicon Labs CP210x USB to UART Bridge (COMx)`. Associer la carte au port une fois par *Select other board and port…* : l'association est mémorisée.

**LED « à l'envers ».** La LED intégrée est active à l'état bas : `LOW` = allumée. Ce n'est pas un bug.

**Câble « charge seule ».** Carte alimentée mais aucun port : changer pour un câble de données.

**Réflexe 5 V de l'Arduino.** L'ESP8266 est en **3,3 V, non tolérant 5 V** : ne pas appliquer 5 V sur une broche (voir [[niveaux-de-tension|niveaux de tension]]).

## Exercices

> [!question] Exercice 1 — Éteindre, puis clignoter
> Écrivez un programme qui laisse la LED **éteinte** 3 secondes, puis la fait clignoter 5 fois rapidement (100 ms allumée / 100 ms éteinte), avant de recommencer. Attention à la logique inversée.

> [!success]- Corrigé
> ```cpp
> void setup() {
>   pinMode(LED_BUILTIN, OUTPUT);
> }
>
> void loop() {
>   digitalWrite(LED_BUILTIN, HIGH);   // éteinte
>   delay(3000);
>
>   for (int i = 0; i < 5; i++) {
>     digitalWrite(LED_BUILTIN, LOW);  // allumée
>     delay(100);
>     digitalWrite(LED_BUILTIN, HIGH); // éteinte
>     delay(100);
>   }
> }
> ```
> Le piège est la logique inversée : `HIGH` éteint, `LOW` allume. La boucle `for` factorise les cinq éclairs.

> [!question] Exercice 2 — LED externe
> Câblez une LED externe (avec sa résistance ~220 Ω) sur la broche sérigraphiée **D5**, c'est-à-dire le **GPIO 14**, et faites-la clignoter de façon « normale » (`HIGH` = allumée). Pourquoi la logique n'est-elle pas inversée cette fois ?

![Câblage d'une LED externe sur une NodeMCU ESP8266 : la broche D5, qui vaut GPIO14, part vers une résistance de 220 ohms puis vers l'anode de la LED, dont la cathode revient à GND.|600](/ressources/img/esp8266-prise-en-main/montage-led-externe.svg)

> [!success]- Corrigé
> ```cpp
> const int LED = 14;   // GPIO14, sérigraphié « D5 » sur la carte
>
> void setup() {
>   pinMode(LED, OUTPUT);
> }
>
> void loop() {
>   digitalWrite(LED, HIGH);   // anode vers la broche : HIGH = allumée
>   delay(500);
>   digitalWrite(LED, LOW);
>   delay(500);
> }
> ```
> La logique inversée ne concernait que la **LED intégrée** (câblée entre l'alimentation et la broche). Une LED externe câblée anode→broche s'allume normalement à `HIGH`. La broche est désignée par son **numéro de GPIO** et non par l'étiquette `D5` : celle-ci n'existe que sous les définitions de carte spécifiques (voir *Pièges*), alors que `14` compile partout. Ce décalage entre sérigraphie et numérotation est détaillé dans [[esp8266-arduino-core|l'Arduino-core]].

## Cas particulier — ESP-01, NodeMCU Lua, PlatformIO

- **ESP-01** — pas d'USB ni d'auto-reset : il faut un **adaptateur USB-série** et **forcer le mode programmation** (GPIO0 à la masse pendant le reset) avant de téléverser.
- **NodeMCU (Lua) / MicroPython** — d'autres firmwares existent pour l'ESP8266 ; ce wiki s'en tient à l'Arduino core.
- **PlatformIO** — gère l'ESP8266 avec versionnage et multi-fichiers, pratique dès que le projet grossit.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — la première compilation et le premier téléversement sur la cible sont l'acte fondateur de la PoC logicielle. Tant que le Blink ne clignote pas, rien en aval n'est crédible.
- **Tous les tutoriels ESP8266 aval** — faites le Blink au moins une fois, sur le matériel cible, le plus tôt possible.

## Aller plus loin

- [Documentation de l'ESP8266 Arduino core](https://arduino-esp8266.readthedocs.io/) — installation, cartes, API.
- [[esp8266-arduino-core|Programmer avec l'Arduino-core]] — contraintes de broches, ADC unique, premier Wi-Fi.

## Voir aussi

- [[esp8266|ESP8266]] — hub des tutoriels ESP8266
- [[microcontroleur|Microcontrôleur]] — hub mère, panorama et aide au choix
- [[esp8266-arduino-core|Programmer avec l'Arduino-core]] — la porte unique de l'ESP8266
- [[niveaux-de-tension|Niveaux de tension]] — l'ESP8266 est en 3,3 V, non tolérant 5 V
- [[cpp|C++]] — bases du langage (transverse)
