---
title: Programmer le Teensy avec l'Arduino-core
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - teensy
prerequis:
  - teensy
  - teensy-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

L'**Arduino-core pour Teensy** — apporté par **Teensyduino** — est la couche logicielle qui amène l'API Arduino (`setup()`, `loop()`, `digitalWrite`, `Serial`…) sur les cartes Teensy. C'est la **porte unique** du Teensy : il n'y a pas d'outillage natif séparé à apprendre, on reste « en Arduino », mais avec la puissance d'un Cortex-M7 à 600 MHz et un noyau **hand-optimisé par PJRC**. Sous le capot, ce noyau est posé **directement sur les registres NXP** (i.MX RT sur les Teensy 4.x), sans HAL fournisseur intermédiaire — contraste net avec la [[stm32-hal|HAL du STM32]]. La façon de structurer un firmware relève de [[firmware|firmware]].

## À quoi ça sert ?

L'Arduino-core Teensy remplit un rôle de pont **vers le haut de gamme** :

- **Réutiliser ce qu'on sait.** Tout le vocabulaire Arduino (`pinMode`, `analogRead`, `Serial`, `Wire`, `SPI`…) fonctionne tel quel. Un montage validé sur Arduino se reporte souvent immédiatement.
- **Gagner en performance sans changer de paradigme.** Le même sketch tourne beaucoup plus vite ; des fonctions rapides (`digitalWriteFast`) et des périphériques riches (plusieurs ports série, PWM réglable) sont exposés dans le style Arduino.
- **Accéder aux signatures Teensy.** L'[[teensy-audio|audio temps réel]] et l'[[teensy-usb|USB polyvalent]] sont des bibliothèques du core, utilisables comme n'importe quelle bibliothèque Arduino.

C'est le **bon (et seul) point d'entrée**. On ne « passe » pas à un autre environnement comme sur STM32 ; on descend simplement aux fonctions rapides ou aux registres NXP quand la performance l'exige.

## Le même code qu'Arduino, en plus rapide

Un sketch Teensy a la forme d'un sketch Arduino :

```cpp
const int LED = LED_BUILTIN;   // broche 13
bool allumee = false;          // on mémorise l'état, on ne le relit jamais sur la broche

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
}

void loop() {
  allumee = !allumee;                      // on bascule la variable
  digitalWrite(LED, allumee ? HIGH : LOW); // puis on applique l'état à la broche
  delay(500);
}
```

`setup()` une fois, `loop()` en boucle : modèle identique. Les différences sont des **détails de plateforme** — et des **gains** :

- **les broches se nomment par leur numéro** (0, 1, 2…), comme sur Arduino ; le Teensy en offre beaucoup, avec plusieurs bus matériels ;
- **la logique est en 3,3 V** (4.x non tolérant 5 V, voir [[niveaux-de-tension|niveaux de tension]]) ;
- **l'ADC** est un convertisseur **12 bits**, que Teensyduino lit **par défaut sur 10 bits** (0-1023) pour rester compatible avec les sketchs écrits pour un Uno : `analogReadResolution(12)` débride la pleine échelle (0-4095), mais PJRC ne garantit qu'environ **10 bits utiles** — au-delà, on numérise du bruit (voir [[precision-de-mesure|précision de mesure]]). La plage d'entrée est **figée à 0-3,3 V** et `analogReference()` n'a **aucun effet** sur les 4.x ;
- **la PWM** a une fréquence et une résolution réglables (`analogWriteFrequency`, `analogWriteResolution`) ;
- **`Serial`** est un **port USB (CDC)** toujours disponible (tant que le *USB Type* inclut Serial), sans adaptateur ;
- **plusieurs ports série matériels** (`Serial1`, `Serial2`… jusqu'à `Serial7` sur la 4.0 et `Serial8` sur la 4.1).

## Ce qui change sous le capot

L'Arduino-core Teensy n'est pas un portage minimal : c'est un noyau **écrit et optimisé à la main par PJRC** sur le matériel NXP. Concrètement :

- **Pas de HAL fournisseur.** Là où le STM32 a une couche HAL générée, le core Teensy parle **directement aux registres** i.MX RT. Le code est rapide, au prix d'être spécifique au Teensy.
- **Des fonctions rapides.** `digitalWriteFast(pin, val)` et `digitalReadFast(pin)` compilent en quelques instructions (quasi un accès registre) quand la broche est connue à la compilation — utiles pour générer un signal rapide. `digitalToggleFast(pin)` fait basculer une sortie **dans le matériel**, en écrivant le registre de bascule du port — sans jamais relire la broche.
- **Des aides au temps.** Les types `elapsedMillis` et `elapsedMicros` mesurent une durée écoulée sans gérer soi-même la soustraction de `millis()`.
- **L'accès registre reste ouvert.** On peut lire/écrire les registres NXP (ou utiliser les macros `CORE_PIN..._PORTSET`/`PORTCLEAR`) pour les chemins critiques — la même logique que [[stm32-registres|descendre au registre sur STM32]], mais sans quitter le sketch.

![Les trois paliers d'accès au matériel sur Teensy : l'API Arduino en surface, les fonctions rapides du cœur PJRC au niveau intermédiaire, et l'écriture directe des registres NXP au plus bas. Aucune couche d'abstraction fournisseur ne s'intercale, contrairement à la HAL du STM32.|640](/ressources/img/teensy-arduino-core/paliers-d-acces.svg)

> [!tip]
> **Toutes les bibliothèques Arduino ne supportent pas le Teensy.** Certaines tapent dans des registres **AVR** (`<avr/io.h>`), absents sur ARM NXP. Avant de dépendre d'une bibliothèque, vérifier qu'elle annonce le support Teensy (la plupart des grandes le font, et PJRC fournit des versions optimisées des plus courantes).

## Exemple — Un sketch qui exploite le côté Teensy

Pour rendre tangible le « confort Arduino + performance », ce sketch utilise l'API Arduino **et** des aides propres au Teensy : une broche basculée en `digitalWriteFast`, la fréquence du cœur, et un `elapsedMillis` qui remplace un `delay` bloquant.

```cpp
elapsedMillis depuisClignotement;   // compteur de temps Teensy

void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  delay(200);
  Serial.print("Coeur : ");
  Serial.print(F_CPU / 1000000);    // 600 sur un Teensy 4.x
  Serial.println(" MHz");
}

void loop() {
  if (depuisClignotement >= 500) {   // toutes les 500 ms, sans bloquer
    depuisClignotement = 0;
    digitalToggleFast(LED_BUILTIN);  // bascule matérielle : on écrit le registre, on ne relit rien
  }
  // la boucle reste libre pour d'autres tâches entre deux clignotements
}
```

Au moniteur série, on lit `Coeur : 600 MHz` — et la LED clignote **sans `delay`**, grâce à `elapsedMillis`, pendant que la boucle reste disponible. C'est l'illustration concrète du pont : **on programme « en Arduino », mais avec les outils et la vitesse du Teensy**.

Prendre capture d'écran de *le moniteur série affichant « Coeur : 600 MHz » pendant que la LED clignote*.

## Pièges

**Relire une broche de sortie pour connaître son état.** L'écriture `digitalWrite(pin, !digitalRead(pin))` traîne dans les tutoriels du web, et elle est fausse dans son principe : tous les microcontrôleurs ne permettent pas de relire une broche configurée en sortie, le résultat dépend du mode de sortie (push-pull ou drain ouvert), et sur une sortie chargée le niveau lu peut différer du niveau commandé. On **mémorise l'état dans une variable**, ou on emploie la **bascule matérielle** `digitalToggleFast(pin)`, qui agit sur le registre de sortie.

**Supposer les réflexes AVR.** Registres AVR, timings au cycle près façon AVR, `<avr/...>` : inopérants sur ARM NXP. Passer par l'API Arduino, les fonctions rapides ou les registres NXP.

**Croire `delay` gratuit.** Comme sur tout MCU, un `delay` bloque la boucle. Sur un Teensy rapide, on a tout intérêt à structurer en non bloquant (`elapsedMillis`, machines à états) pour exploiter la puissance disponible — voir [[firmware|firmware]].

**Bibliothèque incompatible Teensy.** Vérifier le support Teensy avant de dépendre d'une bibliothèque (certaines sont AVR-only).

**Appliquer 5 V.** Le Teensy 4.x n'est pas tolérant 5 V : adapter le niveau des signaux entrants.

**Confondre les modèles de broches.** Le brochage diffère entre 4.0, 4.1 et les anciennes générations ; se référer au plan de la carte exacte.

## Exercices

> [!question] Exercice 1 — Quelle fréquence ?
> Faites afficher la fréquence du cœur au démarrage. Que vaut `F_CPU` sur un Teensy 4.x ? Comparez à un Arduino Uno (16 MHz).

> [!success]- Corrigé
> ```cpp
> void setup() {
>   Serial.begin(115200);
>   delay(200);
>   Serial.print("Coeur : ");
>   Serial.print(F_CPU / 1000000);
>   Serial.println(" MHz");
> }
> void loop() {}
> ```
> `F_CPU` vaut **600 000 000** sur un Teensy 4.x, soit 600 MHz — environ **37 fois** la fréquence d'un Uno (16 MHz). C'est l'écart de performance qui justifie le Teensy pour le calcul, le DSP ou l'audio.

> [!question] Exercice 2 — Clignoter sans bloquer
> Réécrivez le Blink **sans** `delay`, à l'aide d'un `elapsedMillis`, de sorte que la boucle reste libre pour, par exemple, lire un capteur en parallèle.

> [!success]- Corrigé
> ```cpp
> elapsedMillis t;
>
> void setup() {
>   pinMode(LED_BUILTIN, OUTPUT);
> }
>
> void loop() {
>   if (t >= 500) {
>     t = 0;
>     digitalToggleFast(LED_BUILTIN);
>   }
>   // ... autre travail ici, exécuté à chaque tour sans attendre ...
> }
> ```
> `elapsedMillis` s'incrémente tout seul ; on teste son dépassement et on le remet à zéro. La boucle ne s'arrête jamais sur un `delay`, ce qui laisse le processeur disponible — le point de départ d'un firmware réactif (voir [[firmware|firmware]]).

## Cas particulier — PlatformIO et l'accès registre

- **PlatformIO** gère le Teensy avec un versionnage et un multi-fichiers commodes, pratique dès que le projet grossit.
- **Descente au registre** — pour un chemin ultra-critique, on peut écrire directement les registres NXP depuis le sketch (ou via les macros `CORE_PIN..._PORTSET`), sans changer d'environnement. Même démarche que [[stm32-registres|sur STM32]], en restant « en Arduino ».

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — l'Arduino-core Teensy est l'environnement de la PoC logicielle : on avance vite, en gardant la performance et les bibliothèques signatures (audio, USB) à portée. Le réserver permet de ne descendre aux fonctions rapides ou aux registres que là où un besoin précis l'exige.
- **Réutilisation d'un prototype Arduino** — un montage validé sur Arduino se reporte souvent tel quel sur Teensy via le core, en gagnant vitesse et périphériques.

Comprendre que le core Teensy est un noyau optimisé posé sur les registres NXP — et non un HAL — éclaire pourquoi le Teensy n'a qu'une porte : on n'a pas besoin d'un autre environnement, la performance est déjà là, accessible par paliers (API Arduino → fonctions rapides → registres).

## Aller plus loin

- [[teensy-audio|Traiter de l'audio avec le Teensy]] — la bibliothèque signature, posée sur ce core.
- [[teensy-usb|Le Teensy comme appareil USB]] — le *USB Type*, exposé par le core.
- [Référence Teensyduino (PJRC)](https://www.pjrc.com/teensy/teensyduino.html) — fonctions, bibliothèques optimisées, cartes.
- [[firmware|Firmware]] — structurer le code embarqué (transverse).

## Voir aussi

- [[teensy|Teensy]] — hub des tutoriels Teensy
- [[teensy-prise-en-main|Prise en main du Teensy]] — installer Teensyduino et téléverser
- [[teensy-audio|Traiter de l'audio avec le Teensy]] · [[teensy-usb|Le Teensy comme appareil USB]] — les signatures, en bibliothèques du core
- [[stm32-hal|La HAL du STM32]] — l'approche opposée : une couche d'abstraction fournisseur (contraste)
- [[cpp|C++]] — le langage du core (transverse)
