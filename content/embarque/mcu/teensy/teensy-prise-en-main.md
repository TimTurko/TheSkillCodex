---
title: Prise en main du Teensy
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - teensy
prerequis:
  - teensy
aa: []
draft: false
---

La **prise en main du Teensy** consiste à installer l'add-on **Teensyduino** dans l'IDE Arduino, à reconnaître la carte, et à téléverser un premier programme via le **Teensy Loader**. Le Teensy se programmant dans le cadre Arduino, l'essentiel des gestes est déjà connu de qui a touché un Arduino — une étape s'ajoute : installer Teensyduino (le support des cartes Teensy). Le programme cible reste le **Blink** — faire clignoter la LED intégrée — l'équivalent embarqué du « Hello World ».

## À quoi ça sert ?

La prise en main valide en une fois toute la chaîne : éditeur, compilateur, support Teensy, **Teensy Loader**, liaison USB. Si un maillon est cassé, le Blink ne clignote pas — et on le sait tout de suite, sur du code trivial, plutôt que noyé dans un projet complexe.

Au-delà du premier programme, l'étape a deux rôles :

- **Découvrir le Teensy Loader.** Le téléversement d'un Teensy passe par une petite application dédiée qui se lance automatiquement ; comprendre son fonctionnement (et le **bouton physique** de la carte) évite des blocages plus tard.
- **Ancrer les gestes.** Sélection de la carte, du port, du *USB Type*, bouton Téléverser, moniteur série : les gestes répétés des tutoriels suivants. Les ancrer une fois sur du trivial libère l'attention.

## Procédure pas à pas

Cinq étapes : installer l'IDE Arduino, ajouter Teensyduino, brancher et sélectionner la carte, charger le Blink, téléverser.

### 1. Installer l'IDE Arduino

Téléchargez l'**IDE Arduino 2.x** depuis `arduino.cc`, rubrique *Software*. C'est l'IDE recommandé ; Teensyduino s'y installe via le gestionnaire de cartes (étape 2).

Sur Windows récent, **aucun pilote particulier** n'est nécessaire : le Teensy se programme par USB (HID) et expose un port série sans pilote tiers.

Prendre capture d'écran de *la page de téléchargement arduino.cc/en/software avec les liens Windows / macOS / Linux*.

### 2. Ajouter le support Teensy (Teensyduino)

C'est l'étape propre au Teensy. Ouvrez *Fichier → Préférences*, et dans **URL de gestionnaire de cartes supplémentaires**, ajoutez :

```
https://www.pjrc.com/teensy/package_teensy_index.json
```

Prendre capture d'écran de *la fenêtre Préférences de l'IDE 2.x avec l'URL PJRC collée dans le champ « URL de gestionnaire de cartes supplémentaires »*.

Ouvrez le **gestionnaire de cartes**, cherchez `teensy`, et installez le paquet **« Teensy (for Arduino IDE 2.x) » par Paul Stoffregen**. Il apporte le noyau PJRC, les bibliothèques Teensy (dont l'Audio) et le Teensy Loader.

Prendre capture d'écran de *le gestionnaire de cartes filtré sur « teensy », montrant le paquet de Paul Stoffregen avec son bouton Installer*.

### 3. Brancher la carte et sélectionner carte + port

Branchez le Teensy avec un **câble USB de données** (un câble « charge seule » n'expose aucun port). Dans l'IDE, *Outils → Type de carte → Teensy* et choisissez votre modèle (**Teensy 4.1** ou **Teensy 4.0**). Puis *Outils → Port*.

Laissez *Outils → USB Type* sur **Serial** pour ce premier programme (le réglage qui fait du Teensy un clavier, une manette, etc. est détaillé dans [[teensy-usb|le Teensy comme appareil USB]]).

Prendre capture d'écran de *l'IDE 2.x avec le menu Outils déroulé montrant « Teensy 4.1 » sélectionné, le port actif et USB Type sur Serial*.

### 4. Charger le Blink

Saisissez (ou collez) ce sketch — il clignote sur la LED intégrée du Teensy (broche **13**) :

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);   // LED integree sur la broche 13
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

Le modèle est identique à un Arduino : `setup()` une fois, `loop()` en boucle. Cliquez sur **Vérifier** (icône coche) pour compiler : la console affiche la taille du binaire, sans ligne rouge.

Prendre capture d'écran de *l'IDE 2.x avec le code Blink dans l'éditeur et la console affichant une compilation réussie*.

### 5. Téléverser et observer

Cliquez sur **Téléverser** (icône flèche). L'IDE compile, puis le **Teensy Loader** se lance et programme la carte.

> [!tip]
> **Si rien ne se passe au téléversement.** Le Teensy Loader attend parfois que la carte entre en mode programmation : **appuyez une fois sur le bouton** présent sur le Teensy. Après un premier téléversement réussi, les suivants redémarrent la carte automatiquement, sans bouton. C'est l'équivalent Teensy du mode programmation — plus simple que la manœuvre BOOT de l'ESP32.

La LED clignote au rythme d'une seconde. **Le programme tourne — la prise en main est validée.**

Prendre capture d'écran ou photo de *la carte Teensy branchée, LED intégrée (broche 13) allumée, avec la fenêtre du Teensy Loader*.

## Exemple — Blink modifié

Pour vérifier qu'on contrôle réellement ce qui se passe, modifiez les temporisations :

```cpp
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(100);
  digitalWrite(LED_BUILTIN, LOW);
  delay(900);
}
```

Téléversez à nouveau : la LED fait maintenant un éclair court (100 ms) toutes les secondes. Ce **petit pas** — modifier, téléverser, observer le changement attendu — est le geste de base de tous les tutoriels suivants.

## Pièges

**Support Teensy non installé.** Sans l'étape 2, aucune carte Teensy n'apparaît dans *Outils → Type de carte*. C'est l'oubli le plus fréquent quand on vient d'un Arduino classique.

**Téléversement bloqué faute de mode programmation.** Si le Teensy Loader n'écrit pas, **appuyer une fois sur le bouton** de la carte (voir l'astuce ci-dessus).

**Câble « charge seule ».** Carte alimentée (LED de vie) mais aucun port : changer pour un câble de données.

**Brancher en 5 V par réflexe Arduino.** Le Teensy 4.x est en **3,3 V, non tolérant 5 V** : ne pas y appliquer 5 V sur une broche (voir [[niveaux-de-tension|niveaux de tension]]).

**Mauvais modèle sélectionné.** Choisir « Teensy 4.0 » pour une 4.1 (ou l'inverse) peut fausser le brochage de certains exemples ; sélectionner le modèle exact.

Pour câbler au-delà de la LED intégrée (broche 13) — par exemple sur la broche 14 de l'exercice suivant — le brochage de la carte est la référence à garder sous les yeux.

![Brochage officiel du Teensy : broches numériques, analogiques et fonctions spéciales, repérées par leur numéro utilisé dans le code.|640](/ressources/img/teensy-prise-en-main/brochage.png)

*Source : PJRC (Paul Stoffregen).*

## Exercices

> [!question] Exercice 1 — Deux rythmes
> Modifiez le Blink pour que la LED reste allumée 2 secondes, puis clignote rapidement trois fois (100 ms allumée / 100 ms éteinte), avant de recommencer.

> [!success]- Corrigé
> ```cpp
> void setup() {
>   pinMode(LED_BUILTIN, OUTPUT);
> }
>
> void loop() {
>   digitalWrite(LED_BUILTIN, HIGH);
>   delay(2000);
>   digitalWrite(LED_BUILTIN, LOW);
>   delay(300);
>
>   for (int i = 0; i < 3; i++) {
>     digitalWrite(LED_BUILTIN, HIGH);
>     delay(100);
>     digitalWrite(LED_BUILTIN, LOW);
>     delay(100);
>   }
> }
> ```
> La boucle `for` factorise les trois éclairs. On retrouvera le besoin de rythmes sans `delay` bloquant en [[firmware|structurant le firmware]].

> [!question] Exercice 2 — LED externe
> Câblez une LED externe (avec sa résistance de ~220 Ω en série) sur la **broche 14** et faites-la clignoter, sans toucher à la LED intégrée. Quelle ligne change ?

> [!success]- Corrigé
> Une seule chose change : la broche pilotée, déclarée en `const int` (constante typée) plutôt qu'en `#define`.
> ```cpp
> const int LED = 14;
>
> void setup() {
>   pinMode(LED, OUTPUT);
> }
>
> void loop() {
>   digitalWrite(LED, HIGH);
>   delay(500);
>   digitalWrite(LED, LOW);
>   delay(500);
> }
> ```
> Anode de la LED vers la broche 14 via la résistance, cathode vers GND. Attention : la sortie est en **3,3 V**, dont on tient compte pour la résistance.

## Cas particulier — PlatformIO et l'installeur historique

Deux variantes dépassent l'IDE Arduino 2.x :

- **PlatformIO** (extension VS Code) gère le Teensy avec un versionnage Git et un multi-fichiers commodes — pratique dès que le projet grossit.
- **Installeur Teensyduino historique** — pour l'ancien IDE Arduino 1.8.x, PJRC fournit un installeur add-on séparé (plutôt que le gestionnaire de cartes). À réserver si l'on est resté sur l'IDE 1.8.x.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — la première compilation et le premier téléversement sur la carte cible sont l'acte fondateur de la PoC logicielle. Tant que le Blink ne clignote pas, aucune mesure ni asservissement aval n'est crédible.
- **Tous les tutoriels Teensy aval** — sans prise en main effective, lire les autres tutoriels sans pouvoir tester revient à lire du code sans l'exécuter. Faites le Blink au moins une fois, sur le matériel cible, le plus tôt possible.

Investir une demi-heure pour valider la chaîne complète en début de PoC évite des heures de bugs hybrides plus tard, quand on ne saura plus distinguer un problème d'outillage d'un problème d'algorithme.

## Aller plus loin

- [Page Teensyduino de PJRC](https://www.pjrc.com/teensy/td_download.html) — installation, versions, cartes supportées.
- [[teensy-arduino-core|Programmer avec l'Arduino-core]] — ce que le cadre Arduino devient, musclé, sur Teensy.

## Voir aussi

- [[teensy|Teensy]] — hub des tutoriels Teensy
- [[microcontroleur|Microcontrôleur]] — hub mère, panorama des familles et aide au choix
- [[teensy-arduino-core|Programmer avec l'Arduino-core]] — la porte unique du Teensy
- [[teensy-usb|Le Teensy comme appareil USB]] — le réglage *USB Type*, au-delà de Serial
- [[niveaux-de-tension|Niveaux de tension]] — le Teensy 4.x est en 3,3 V, non tolérant 5 V
- [[cpp|C++]] — bases du langage (transverse)
