---
title: Utiliser un shield
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

Un **shield** est une carte d'extension qui se monte par-dessus l'Arduino en empilage (*piggyback*), reprenant le format de la carte mère et son brochage de connecteurs femelles. Là où un [[arduino-module|module]] se relie par fils Dupont, un shield se *clipse* — pas de câblage, pas de breadboard. Cette intégration mécanique a une contrepartie : un shield est dédié à une fonction (motor shield, ethernet shield, data logging shield, proto shield) et accapare un jeu de broches précis qu'il faut connaître pour éviter les conflits.

## À quoi ça sert ?

Le shield est la voie la plus rapide pour ajouter une fonctionnalité conséquente à un Arduino sans étude de câblage : pilotage de moteurs (motor shield), Ethernet (ethernet shield), GSM (GSM shield), affichage TFT tactile (TFT shield), prototypage soudable (proto shield). Trois rôles complémentaires :

- **Gain de temps** — un motor shield monté + sa bibliothèque, on pilote deux moteurs en cinq minutes.
- **Robustesse mécanique** — empilage rigide, pas de câbles à se débrancher.
- **Standardisation** — l'écosystème des shields suit le format Uno, donc beaucoup sont compatibles entre cartes (Uno R3, R4, Mega).

Limite : un shield occupe ses broches en exclusivité. Il faut le savoir avant d'empiler un deuxième shield.

## Procédure pas à pas

Quatre étapes : identifier le brochage du shield, l'empiler, l'alimenter, installer sa bibliothèque.

### 1. Identifier le brochage du shield

Tout shield Uno-compatible utilise les broches dans la zone qu'il occupe. Pour savoir lesquelles :

- **Documentation officielle** du shield (Adafruit, Arduino) — toujours présente, à lire avant d'acheter et avant de câbler quoi que ce soit d'autre.
- **Sérigraphie du shield** — les broches utilisées sont marquées sur le PCB.
- **Tester en démontant** — empiler, faire fonctionner avec son exemple, démonter, regarder quelles broches étaient sollicitées.

Quelques exemples typiques :

| Shield | Broches occupées | Notes |
|---|---|---|
| Motor shield Arduino R3 (L298) | D3, D8, D9, D11, D12, D13 | PWM + dir pour 2 moteurs |
| Ethernet shield W5500 | D10 (CS), D11-D13 (SPI), D4 (CS SD) | Bus SPI partagé |
| Data logging shield | D10 (CS SD), D11-D13 (SPI), A4-A5 (I2C RTC) | SPI + I2C |
| Proto shield | aucune | Surface vierge à souder |

### 2. Empiler le shield sur l'Arduino

L'opération est mécanique : aligner les broches mâles du shield sur les connecteurs femelles de l'Arduino, et pousser doucement et régulièrement jusqu'à ce que le shield repose à plat.

Points de vigilance :
- **Aligner avant de pousser** — une broche tordue peut entrer dans le mauvais trou. Vérifier visuellement.
- **Ne jamais empiler sous tension** — débrancher l'USB et l'alimentation externe avant l'empilage / désempilage.
- **Vérifier les entretoises** — pour des shields lourds (LCD avec dissipateur, motor shield avec radiateur), des entretoises plastiques entre carte mère et shield évitent les courts-circuits.

Prendre capture d'écran ou photo de *un shield empilé proprement sur une carte Arduino Uno, avec les broches mâles bien insérées et le shield à plat*.

### 3. Alimenter l'ensemble

Trois cas :

- **Shield petite puissance** (proto, ethernet, RTC) — l'USB de l'Arduino suffit.
- **Shield à courant modéré** (LCD avec rétroéclairage, ethernet) — passer à une alimentation jack DC 7-12 V sur Arduino, ou alimentation USB de bonne qualité (5 V / 2 A).
- **Shield à actionneurs de puissance** (motor shield avec moteurs CC, GSM avec pic d'émission) — **alimentation séparée pour la charge** sur le shield (entrée jack ou bornier), et alimentation USB ou jack pour la logique Arduino.

Pour le motor shield Arduino R3 : un connecteur supplémentaire `Vin` ou un bornier permet d'alimenter directement les moteurs à 7-12 V, sans passer par le régulateur 5 V de l'Arduino. C'est obligatoire dès que les moteurs dépassent 50 mA.

### 4. Installer la bibliothèque du shield

La plupart des shields ont leur bibliothèque dédiée. Voir [[arduino-bibliotheques|utiliser une bibliothèque]].

Pour le motor shield Arduino R3 (en exemple ici) : la bibliothèque officielle est `Adafruit Motor Shield V2` pour la V2, et un fork générique pour la V1 (compatible L298). Installer via le gestionnaire de bibliothèques, ouvrir l'exemple `MotorTest`, téléverser.

## Exemple — Motor Shield Arduino R3 : faire tourner un moteur CC

Cas complet sur le motor shield officiel ou un clone L298 compatible.

**Empilage** : shield directement sur Arduino Uno, broches mâles dans les connecteurs femelles.

**Alimentation moteur** : pile 9 V ou alim de table 9 V sur le bornier d'alimentation moteur du shield.

**Câblage moteur** : un moteur CC 6-9 V connecté sur les bornes `M1` (deux fils).

**Code** (pour clone L298 compatible Arduino R3 broches D11/D12/D3) :

```cpp
const int IN1 = 12;  // Direction moteur 1
const int IN2 = 11;  // Direction moteur 1
const int EN1 = 3;   // PWM vitesse moteur 1 (PWM)

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(EN1, OUTPUT);
}

void loop() {
  // Sens avant à 50%
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(EN1, 128);
  delay(2000);

  // Stop
  analogWrite(EN1, 0);
  delay(1000);

  // Sens arrière à 75%
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(EN1, 192);
  delay(2000);

  // Stop
  analogWrite(EN1, 0);
  delay(1000);
}
```

Téléversez : le moteur tourne dans un sens, s'arrête, tourne dans l'autre, recommence. Le pilotage détaillé d'un moteur CC est traité par sa fiche dédiée — voir [[arduino-moteur-cc|piloter un moteur CC]].

## Pièges

**Conflit de broches entre shields.** Empiler un ethernet shield (SPI sur D10-D13) et un motor shield qui utilise aussi D11/D12 : conflit, l'un des deux ne marche plus. Lire les notices avant d'empiler.

**SPI partagé entre devices.** Un ethernet shield + un data logging shield empilés partagent le bus SPI (D11-D13) mais ont chacun leur propre broche `CS` (`SS`). Vérifier que les deux `CS` sont sur des broches différentes — sinon, les deux devices répondent en même temps et la communication est corrompue.

**Shield sous-alimenté.** L'USB d'un PC débite max 500 mA ; un shield ethernet en activité tire 150 mA, un motor shield à vide tire 20 mA mais sous charge jusqu'à 2 A — l'Arduino reboote. Passer à un bloc d'alimentation externe dès qu'un shield consomme.

**Mauvais sens d'empilage.** L'orientation du shield est dictée par le brochage — il ne devrait pas être possible de l'empiler à l'envers sur Uno (les connecteurs sont positionnés asymétriquement), mais avec certains shields mal conçus c'est possible. Toujours vérifier l'orientation des labels avant de pousser.

**Brochage du shield non Uno-compatible.** Quelques shields supposent un brochage Uno strict (D0-D13, A0-A5). Empilés sur un Mega, ils marchent mais n'occupent pas toujours les bonnes broches (par exemple, les broches `SS / MOSI / MISO / SCK` sont sur D50-D53 sur Mega, pas sur D10-D13). Lire les notes de compatibilité.

**Bibliothèque obsolète.** Les motor shields Arduino V1 (L298) sont déprécié·e·s depuis 2013 ; la bibliothèque correspondante peut ne plus compiler. Vérifier qu'il s'agit bien d'un shield V2 (avec bus I2C) ou utiliser une bibliothèque alternative.

**Empilage à chaud.** Empiler ou désempiler un shield sur un Arduino sous tension peut détruire les broches par court-circuit transitoire. Toujours débrancher l'USB avant.

## Cas particulier — Proto shield et shields « do-it-yourself »

Un **proto shield** est un shield vierge (zone de soudure sans piste fonctionnelle) qui sert à intégrer son propre circuit en topologie Uno-compatible. C'est l'étape intermédiaire entre le breadboard (volatile) et le PCB dédié (long à concevoir et fabriquer).

Pratique pour :
- Intégrer un câblage breadboard validé en version soudée plus robuste.
- Ajouter quelques composants discrets (résistances, condensateurs, LEDs de diagnostic) à un projet.
- Apprendre la soudure SMD ou traversante avec une grille pré-percée.

Pour un projet école qui doit présenter un démonstrateur final fonctionnel et présentable, un proto shield soudé est nettement plus convaincant qu'une breadboard.

## Raccrochage projet

- **Étape 4 de la [[concept|phase de concept]]** — l'EAT inclut souvent les shields disponibles comme accélérateurs de PoC (« on prend un motor shield, on gagne deux semaines »).
- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — empilage et test du shield isolé, avant intégration au système complet.
- **Étape 4 de la [[dossier-technique|phase de dossier technique]]** — décision « shield + protoshield maison » vs « PCB dédié » sur le critère robustesse / coût / délai.

Un shield bien choisi en début de projet est un investissement modeste qui rapporte gros — autant en temps de PoC qu'en robustesse du démonstrateur final. À l'inverse, accumuler les shields incompatibles est un piège mécanique et électrique qui se paye sur la durée.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-module|Câbler un module]] — l'alternative non-empilée (fils Dupont)
- [[arduino-moteur-cc|Piloter un moteur CC]] — usage typique d'un motor shield
- [[arduino-alimentation|Alimenter la carte]] — pour dimensionner la PSU avec shield empilé
- [[shield|Shield]] — la notion transverse
