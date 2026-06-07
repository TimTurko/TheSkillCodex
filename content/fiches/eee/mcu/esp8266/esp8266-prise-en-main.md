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
aa: []
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
http://arduino.esp8266.com/stable/package_esp8266com_index.json
```

Prendre capture d'écran de *la fenêtre Préférences de l'IDE 2.x avec l'URL ESP8266 collée dans le champ « URL de gestionnaire de cartes supplémentaires »*.

Ouvrez le **gestionnaire de cartes**, cherchez `esp8266`, et installez le paquet **« esp8266 » par ESP8266 Community**.

Prendre capture d'écran de *le gestionnaire de cartes filtré sur « esp8266 », montrant le paquet ESP8266 Community avec son bouton Installer*.

### 3. Installer le pilote USB-série

Contrairement à beaucoup de cartes récentes, les NodeMCU / D1 mini utilisent une puce USB-série (souvent **CH340**, parfois **CP2102**) qui **demande un pilote** sur Windows si la carte n'est pas reconnue. Installez le pilote correspondant à votre carte, puis rebranchez-la.

### 4. Brancher la carte et sélectionner carte + port

Branchez la carte avec un **câble USB de données**. Dans l'IDE, *Outils → Type de carte → ESP8266* et choisissez **« NodeMCU 1.0 (ESP-12E Module) »** (ou votre modèle). Sélectionnez le **Port**, et laissez la vitesse de téléversement par défaut.

Prendre capture d'écran de *l'IDE 2.x avec le menu Outils déroulé montrant « NodeMCU 1.0 (ESP-12E Module) » sélectionné et le port actif*.

### 5. Charger le Blink — attention à la LED active à l'état bas

Saisissez ce sketch. **Particularité ESP8266** : la LED intégrée est **active à l'état bas** — elle s'allume à `LOW` et s'éteint à `HIGH`, l'inverse du réflexe Arduino :

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, LOW);    // LED active a l'etat BAS : LOW = ALLUMEE
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);   // HIGH = eteinte
  delay(1000);
}
```

Cliquez sur **Téléverser** (icône flèche). Sur NodeMCU / D1 mini, l'**auto-reset** (lignes DTR/RTS) fait entrer la carte en mode programmation **sans appui** ; la console affiche la progression, puis la carte redémarre et la LED clignote.

> [!tip]
> **Si la LED semble « inversée ».** C'est normal et attendu : sur l'ESP8266, `LOW` allume. Si vous vouliez l'éteindre, écrivez `HIGH`. Beaucoup de débutants croient à un bug ici — c'est juste la logique inversée de la LED intégrée.

Prendre capture d'écran ou photo de *la carte NodeMCU branchée, LED intégrée allumée, avec la console de l'IDE affichant un téléversement réussi*.

## Exemple — Blink modifié

Modifiez les temporisations pour vérifier que vous contrôlez le comportement :

```cpp
void loop() {
  digitalWrite(LED_BUILTIN, LOW);    // allumee
  delay(100);
  digitalWrite(LED_BUILTIN, HIGH);   // eteinte
  delay(900);
}
```

Téléversez à nouveau : un éclair court toutes les secondes. Ce petit pas — modifier, téléverser, observer — est le geste de base des tutoriels suivants.

## Pièges

**Support ESP8266 non installé.** Sans l'étape 2, aucune carte ESP8266 dans *Outils → Type de carte*. L'oubli le plus fréquent.

**Pilote USB-série manquant.** Carte non détectée (pas de port) : installer le pilote CH340 / CP2102 correspondant (étape 3).

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
>   digitalWrite(LED_BUILTIN, HIGH);   // eteinte
>   delay(3000);
>
>   for (int i = 0; i < 5; i++) {
>     digitalWrite(LED_BUILTIN, LOW);  // allumee
>     delay(100);
>     digitalWrite(LED_BUILTIN, HIGH); // eteinte
>     delay(100);
>   }
> }
> ```
> Le piège est la logique inversée : `HIGH` éteint, `LOW` allume. La boucle `for` factorise les cinq éclairs.

> [!question] Exercice 2 — LED externe
> Câblez une LED externe (avec sa résistance ~220 Ω) sur une broche libre et faites-la clignoter de façon « normale » (`HIGH` = allumée). Pourquoi la logique n'est-elle pas inversée cette fois ?

> [!success]- Corrigé
> ```cpp
> const int LED = D5;   // une broche libre (D5 = GPIO14 sur NodeMCU)
>
> void setup() {
>   pinMode(LED, OUTPUT);
> }
>
> void loop() {
>   digitalWrite(LED, HIGH);   // anode vers la broche : HIGH = allumee
>   delay(500);
>   digitalWrite(LED, LOW);
>   delay(500);
> }
> ```
> La logique inversée ne concernait que la **LED intégrée** (câblée entre l'alimentation et la broche). Une LED externe câblée anode→broche s'allume normalement à `HIGH`. (On note au passage que l'étiquette **D5** de la carte vaut **GPIO14** — voir [[esp8266-arduino-core|l'Arduino-core]] sur ce décalage.)

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
