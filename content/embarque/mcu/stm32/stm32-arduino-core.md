---
title: Programmer le STM32 avec l'Arduino-core
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - stm32
prerequis:
  - stm32
  - stm32-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

L'**Arduino-core pour STM32** — couramment appelé **STM32duino** — est la couche logicielle qui apporte l'API Arduino (`setup()`, `loop()`, `digitalWrite`…) sur les microcontrôleurs STM32. C'est la **porte de continuité** : on réutilise les réflexes appris sur l'[[arduino|Arduino]], mais avec la puissance, les périphériques et la gamme du STM32. Sous le capot, cette couche repose sur la **HAL** et **CMSIS** de STMicroelectronics — l'outillage natif que les tutoriels du palier ingénieur explorent directement. La façon de structurer un firmware, quelle que soit la porte, relève de [[firmware|firmware]].

## À quoi ça sert ?

STM32duino remplit un rôle de pont :

- **Réutiliser ce qu'on sait.** Tout le vocabulaire Arduino (`pinMode`, `analogRead`, `Serial`, bibliothèques `Wire`/`SPI`…) fonctionne tel quel. Un montage validé sur Arduino se reporte souvent immédiatement sur STM32.
- **Accéder à la gamme STM32 simplement.** D'une *Blue Pill* à une grosse Nucleo, le même sketch s'adapte en changeant la carte sélectionnée — sans plonger dans l'outillage natif.
- **Garder une porte vers le natif.** Depuis un sketch STM32duino, on peut appeler directement des fonctions **HAL** (`HAL_*`) ou lire des registres **CMSIS** quand on a besoin de finesse — sans tout réécrire.

C'est un bon point d'entrée pour prototyper vite. Le passage à l'outillage natif complet ([[stm32-cubemx|CubeMX]] + [[stm32-hal|HAL]]) se justifie quand on veut configurer finement les périphériques, déboguer au pas, ou viser la performance.

## Installer le support STM32

Comme pour l'ESP32, le STM32 n'est pas connu de l'IDE Arduino par défaut : il faut installer son support. Ouvrez *Fichier → Préférences*, et dans **URL de gestionnaire de cartes supplémentaires**, ajoutez :

```
https://github.com/stm32duino/BoardManagerFiles/raw/main/package_stmicroelectronics_index.json
```

Prendre capture d'écran de *la fenêtre Préférences de l'IDE Arduino avec l'URL STM32duino collée dans le champ « URL de gestionnaire de cartes supplémentaires »*.

Ouvrez le **gestionnaire de cartes**, cherchez `stm32`, et installez **« STM32 MCU based boards » par STMicroelectronics**. Dans *Outils → Type de carte → STM32 MCU based boards*, choisissez la **série** (par ex. *Nucleo-64*) puis, dans *Outils → Board part number*, la **référence exacte** de votre carte.

> [!info]
> **STM32duino flashe via STM32CubeProgrammer.** Installez l'outil **STM32CubeProgrammer** de ST (gratuit) : STM32duino l'utilise en sous-main pour le flashage. Dans *Outils → Upload method*, choisissez **« STM32CubeProgrammer (SWD) »** pour une Nucleo (le ST-LINK embarqué suffit). Une *Blue Pill*, qui n'a pas de ST-LINK, demande un autre mode (DFU par USB, port série, ou ST-LINK externe).

Prendre capture d'écran de *le menu Outils de l'IDE Arduino montrant Type de carte « Nucleo-64 », Board part number et Upload method « STM32CubeProgrammer (SWD) »*.

## Le même code qu'Arduino, presque

Un sketch STM32 a la forme d'un sketch Arduino :

```cpp
const int LED = LED_BUILTIN;   // LD2 sur la plupart des Nucleo

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, !digitalRead(LED));
  delay(500);
}
```

`setup()` une fois, `loop()` en boucle : le modèle est identique. Les différences sont des **détails de plateforme**, pas de structure :

- **les broches se nomment par leur port** (`PA5`, `PB6`…) ; sur Nucleo, les alias Arduino `D0`–`D15` et `A0`–`A5` des connecteurs sont aussi acceptés ;
- **la logique est en 3,3 V** (broches *FT* tolérantes 5 V, voir [[niveaux-de-tension|niveaux de tension]]) ;
- **l'ADC est en 12 bits** par défaut (`analogReadResolution(12)`), contre 10 sur un Uno ;
- **`Serial`** part ici sur le **port série virtuel du ST-LINK** (USART2 sur les Nucleo) : on lit le moniteur sans adaptateur USB-série supplémentaire.

## Ce qui change sous le capot

STM32duino n'est pas du « bare metal » écrit à la main : il s'appuie sur la **HAL** et **CMSIS** de ST. Concrètement :

- **Le code repose sur la HAL.** `digitalWrite` appelle, sous le capot, l'équivalent d'un `HAL_GPIO_WritePin`. La même horloge et les mêmes périphériques que dans un projet CubeIDE sont utilisés — STM32duino les configure pour vous.
- **Les fonctions natives sont accessibles.** `HAL_*`, les définitions de registres CMSIS (`GPIOA->BSRR`…) sont utilisables **directement dans un sketch**, sans rien réécrire.
- **Beaucoup plus de ressources qu'un Uno.** Selon la puce, des dizaines à des centaines de kilo-octets de Flash et de RAM : les bibliothèques lourdes, les buffers, les `String` passent bien plus facilement.
- **Des périphériques plus riches.** Plusieurs UART, timers avancés, plusieurs ADC : exposés via l'API Arduino quand c'est possible, accessibles en HAL sinon.

> [!tip]
> **Une bibliothèque Arduino n'est pas toujours compatible STM32.** Certaines tapent directement dans des registres **AVR** (`<avr/io.h>`), absents sur ARM. Avant de dépendre d'une bibliothèque, vérifier qu'elle annonce le support STM32 (ou qu'elle est écrite en API Arduino portable).

## Exemple — Un sketch qui mêle Arduino et HAL native

Pour rendre tangible que STM32duino est posé sur l'outillage natif, ce sketch utilise l'API Arduino **et** des informations natives : la fréquence du cœur (variable CMSIS `SystemCoreClock`) et l'identifiant unique de la puce (via la HAL).

```cpp
void setup() {
  Serial.begin(115200);
  delay(200);

  // Valeur CMSIS native, lue depuis un sketch Arduino
  Serial.print("Frequence du coeur : ");
  Serial.print(SystemCoreClock / 1000000);
  Serial.println(" MHz");

  // Identifiant unique 96 bits de la puce, via la HAL
  Serial.print("UID : ");
  Serial.print(HAL_GetUIDw0(), HEX);
  Serial.print(HAL_GetUIDw1(), HEX);
  Serial.println(HAL_GetUIDw2(), HEX);
}

void loop() {}
```

Au moniteur série, on lit la fréquence réelle du cœur et l'identifiant unique — deux informations qui n'existent pas telles quelles sur un Arduino AVR, obtenues sans quitter le confort du sketch. C'est l'illustration concrète du pont : **on programme « en Arduino » tout en ayant la HAL et CMSIS sous la main**.

Prendre capture d'écran de *le moniteur série affichant « Frequence du coeur : XX MHz » et la ligne UID en hexadécimal*.

## Pièges

**Supposer les réflexes AVR.** Manipuler des registres AVR, compter sur des timings au cycle près façon AVR, ou inclure `<avr/...>` ne fonctionne pas : l'architecture est ARM Cortex-M. Passer par l'API Arduino, la HAL ou les registres STM32.

**Mauvaise méthode de flashage.** Choisir une *Upload method* qui ne correspond pas à la carte : une Nucleo se flashe en SWD (ST-LINK intégré), une *Blue Pill* en DFU/série/ST-LINK externe. Un mauvais choix bloque le téléversement.

**STM32CubeProgrammer absent.** Sans l'outil de ST installé, STM32duino ne peut pas flasher (message d'erreur sur l'étape d'upload).

**Croire au tout-en-5 V.** En venant de l'Arduino tolérant 5 V partout, on grille une entrée analogique ou une broche non *FT* en y appliquant 5 V. Vérifier la datasheet (voir [[lire-une-datasheet|lire une datasheet]]).

**Confondre les noms de broches.** `PA5`, `D13` et `LED_BUILTIN` peuvent désigner la même broche sur une Nucleo — ou non, selon la carte. En cas de doute, se référer au brochage de la carte.

## Exercices

> [!question] Exercice 1 — Quelle fréquence ?
> Faites afficher la fréquence du cœur au démarrage, puis comparez la valeur lue à la fréquence annoncée de votre carte. Que vaut `SystemCoreClock` sur une Nucleo-F411 ? sur une Nucleo-G431 ?

> [!success]- Corrigé
> ```cpp
> void setup() {
>   Serial.begin(115200);
>   delay(200);
>   Serial.print("Coeur : ");
>   Serial.print(SystemCoreClock / 1000000);
>   Serial.println(" MHz");
> }
> void loop() {}
> ```
> `SystemCoreClock` est une variable CMSIS tenue à jour par l'horloge système. STM32duino configure par défaut le cœur près de sa fréquence maximale (de l'ordre de 84–100 MHz sur une F411, 170 MHz sur une G431 — à vérifier sur la carte). C'est cet **arbre d'horloge** qu'on règle finement dans [[stm32-cubemx|CubeMX]].

> [!question] Exercice 2 — Bouton et LED
> Câblez (ou utilisez le bouton intégré B1, broche `PC13` sur Nucleo-64) : allumez la LED tant que le bouton est appuyé. Quelle ligne change par rapport à un Arduino ?

> [!success]- Corrigé
> ```cpp
> const int BTN = PC13;   // bouton B1 integre, logique inversee sur Nucleo
> const int LED = LED_BUILTIN;
>
> void setup() {
>   pinMode(BTN, INPUT);
>   pinMode(LED, OUTPUT);
> }
>
> void loop() {
>   digitalWrite(LED, digitalRead(BTN) == LOW);  // appui = niveau bas
> }
> ```
> Le code est presque identique à un Arduino : seule la **désignation de la broche** change (`PC13`), et il faut savoir que le bouton B1 de la Nucleo est en logique inversée (appui = `LOW`). Le reste — `pinMode`, `digitalRead`, `digitalWrite` — est strictement le même vocabulaire Arduino. C'est tout l'intérêt de la porte de continuité.

## Cas particulier — PlatformIO et la bascule vers le natif

Deux configurations dépassent l'IDE Arduino :

- **PlatformIO** (extension VS Code) gère le framework Arduino *et* le framework natif (HAL/CMSIS) dans un même projet, avec gestion fine des bibliothèques et du versionnage Git — pratique dès que le projet grossit.
- **Bascule progressive vers le natif** — STM32duino étant posé sur la HAL, on peut commencer en API Arduino, puis remplacer petit à petit les parties critiques par des appels HAL ou registres, sans tout réécrire. C'est un chemin de migration naturel vers [[stm32-cubemx|CubeMX]] et [[stm32-hal|la HAL]].

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — choisir STM32duino comme environnement de la PoC logicielle est un défaut raisonnable quand on vient de l'Arduino : on avance vite, on garde la porte du natif ouverte. Le réserver permet de ne basculer en outillage natif que si un besoin précis l'exige (débogage, performance, périphérique fin).
- **Réutilisation d'un prototype Arduino** — un montage validé sur Arduino se reporte souvent tel quel sur STM32 via le core, en gagnant mémoire, périphériques et performance.

Comprendre que STM32duino repose sur la HAL et CMSIS — le même socle que l'outillage natif — éclaire le passage ultérieur à [[stm32-cubemx|CubeMX]] : ce n'est pas un autre monde, c'est la couche du dessous.

## Aller plus loin

- [[stm32-cubemx|Configurer avec CubeMX]] — la porte du métier, sous l'API Arduino.
- [[stm32-hal|Programmer avec la HAL]] — l'API native qu'appelle STM32duino sous le capot.
- [Wiki STM32duino](https://github.com/stm32duino/Arduino_Core_STM32) — cartes supportées, méthodes de flashage, exemples.
- [[firmware|Firmware]] — structurer le code embarqué (transverse).

## Voir aussi

- [[stm32|STM32]] — hub des tutoriels STM32
- [[stm32-prise-en-main|Prise en main du STM32]] — la porte native, avec CubeIDE
- [[stm32-cubemx|Configurer avec CubeMX]] — l'outillage natif sous l'Arduino-core
- [[stm32-hal|Programmer avec la HAL]] — l'API sur laquelle repose STM32duino
- [[cpp|C++]] — le langage commun aux deux portes (transverse)
