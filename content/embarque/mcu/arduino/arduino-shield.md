---
title: Utiliser un shield
type: tuto
phases:
  - concept
  - preuve-de-concept
  - dossier-technique
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
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

- **Documentation officielle** du shield (Adafruit, Arduino) — toujours présente, à lire avant de t'en servir et avant de câbler quoi que ce soit d'autre.
- **Sérigraphie du shield** — les broches utilisées sont marquées sur le PCB.
- **Tester en démontant** — empiler, faire fonctionner avec son exemple, démonter, regarder quelles broches étaient sollicitées.

Quelques exemples typiques :

| Shield | Broches occupées | Notes |
|---|---|---|
| Motor Shield Arduino officiel (L298P) | D3, D8, D9, D11, D12, D13 | PWM + dir pour 2 moteurs |
| Ethernet shield W5500 | D10 (CS), D11-D13 (SPI), D4 (CS SD) | Bus SPI partagé |
| Data logging shield | D10 (CS SD), D11-D13 (SPI), A4-A5 (I2C RTC) | SPI + I2C |
| Proto shield | aucune | Surface vierge à souder |

### 2. Empiler le shield sur l'Arduino

L'opération est mécanique : aligner les broches mâles du shield sur les connecteurs femelles de l'Arduino, et pousser doucement et régulièrement jusqu'à ce que le shield repose à plat.

Points de vigilance :
- **Aligner avant de pousser** — une broche tordue peut entrer dans le mauvais trou. Vérifier visuellement.
- **Ne jamais empiler sous tension** — débrancher l'USB et l'alimentation externe avant l'empilage / désempilage.
- **Vérifier les entretoises** — pour des shields lourds (LCD avec dissipateur, motor shield avec radiateur), des entretoises plastiques entre carte mère et shield évitent les courts-circuits.

![Un shield empilé proprement sur une carte Arduino Uno : broches mâles entièrement insérées, shield bien à plat.|480](/ressources/img/arduino-shield/empilage-shield.webp)

### 3. Alimenter l'ensemble

Trois cas :

- **Shield petite puissance** (proto, ethernet, RTC) — l'USB de l'Arduino suffit.
- **Shield à courant modéré** (LCD avec rétroéclairage, ethernet) — passer à une alimentation jack DC 7-12 V sur Arduino, ou alimentation USB de bonne qualité (5 V / 2 A).
- **Shield à actionneurs de puissance** (motor shield avec moteurs CC, GSM avec pic d'émission) — **alimentation séparée pour la charge** sur le shield (entrée jack ou bornier), et alimentation USB ou jack pour la logique Arduino.

Pour un motor shield (L293D, L298P…) : un bornier d'alimentation moteur permet d'alimenter directement les moteurs à 7-12 V, sans passer par le régulateur 5 V de l'Arduino. C'est obligatoire dès que les moteurs dépassent 50 mA.

### 4. Installer la bibliothèque du shield

La plupart des shields ont leur bibliothèque dédiée. Voir [[arduino-bibliotheques|utiliser une bibliothèque]].

Pour un shield moteur (en exemple ici), deux familles principales : le shield à base de **L293D** (le plus répandu, dit « v1 ») se pilote avec la bibliothèque `Adafruit Motor Shield library` (version 1.x). L'**Adafruit Motor Shield V2** (driver TB6612, commandé en I2C par une puce PWM dédiée) utilise la bibliothèque `Adafruit Motor Shield V2`. Installer via le gestionnaire, ouvrir un exemple fourni par la bibliothèque, téléverser.

## Exemple — Motor shield (L293D) : faire tourner un moteur CC

Le shield moteur à base de **L293D** (le plus répandu, dit « v1 ») s'empile sur l'Arduino et se pilote entièrement par sa bibliothèque : aucun câblage de broches, c'est tout l'intérêt du shield.

**Empilage** : shield directement sur l'Arduino Uno.
**Moteur** : un moteur CC 6-9 V sur le bornier `M1` (deux fils).
**Alimentation moteur** : pile 9 V ou alim de table sur le bornier d'alimentation du shield (séparée de l'USB qui alimente la logique).
**Bibliothèque** : `Adafruit Motor Shield library` (version 1.x, pour les shields L293D). Installer via le gestionnaire (voir [[arduino-bibliotheques|utiliser une bibliothèque]]).

![Montage de l'exemple : le shield moteur L293D empilé sur l'Uno, un moteur CC câblé sur le bornier M1, et l'alimentation 9 V sur le bornier d'alimentation moteur du shield.|520](/ressources/img/arduino-shield/montage-shield-l293d.webp)

**Code** :

```cpp
#include <AFMotor.h>      // bibliothèque du shield L293D (Adafruit Motor Shield v1.x)

AF_DCMotor moteur(1);      // moteur branché sur le bornier M1 (ports 1 à 4 disponibles)

void setup() {
  moteur.setSpeed(150);    // vitesse de 0 à 255 (le shield gère le signal PWM)
}

void loop() {
  moteur.run(FORWARD);     // sens avant
  delay(2000);
  moteur.run(RELEASE);     // roue libre : le moteur s'arrête
  delay(1000);
  moteur.run(BACKWARD);    // sens arrière
  delay(2000);
  moteur.run(RELEASE);
  delay(1000);
}
```

On ne touche **aucune broche** directement : la bibliothèque sait quelles broches le shield occupe. Le détail du pilotage d'un moteur CC (pont en H, sens, vitesse) est traité par sa fiche dédiée (voir [[arduino-moteur-cc|piloter un moteur CC]]).

## Pièges

**Conflit de broches entre shields.** Empiler un ethernet shield (SPI sur D10-D13) et un motor shield qui utilise aussi D11/D12 : conflit, l'un des deux ne marche plus. Lire les notices avant d'empiler.

**SPI partagé entre devices.** Un ethernet shield + un data logging shield empilés partagent le bus SPI (D11-D13) mais ont chacun leur propre broche `CS` (`SS`). Vérifier que les deux `CS` sont sur des broches différentes. Sinon, les deux devices répondent en même temps et la communication est corrompue.

**Shield sous-alimenté.** L'USB d'un PC débite max 500 mA. Un shield ethernet en activité tire 150 mA, un motor shield à vide tire 20 mA mais sous charge jusqu'à 2 A. L'Arduino reboote. Passer à un bloc d'alimentation externe dès qu'un shield consomme.

**Mauvais sens d'empilage.** L'orientation du shield est dictée par le brochage. Il ne devrait pas être possible de l'empiler à l'envers sur Uno (les connecteurs sont positionnés asymétriquement), mais avec certains shields mal conçus c'est possible. Toujours vérifier l'orientation des labels avant de pousser.

**Brochage du shield non Uno-compatible.** Quelques shields supposent un brochage Uno strict (D0-D13, A0-A5). Empilés sur un Mega, ils marchent mais n'occupent pas toujours les bonnes broches (par exemple, les broches `SS / MOSI / MISO / SCK` sont sur D50-D53 sur Mega, pas sur D10-D13). Lire les notes de compatibilité.

**Bibliothèque vieillissante.** Les anciens shields **L293D** (« v1 ») et leur bibliothèque historique peuvent poser problème avec les IDE récents (compilation qui échoue). Préférer une version à jour de la bibliothèque, ou pour un projet neuf un shield **V2** (TB6612, commandé en I2C).

**Empilage à chaud.** Empiler ou désempiler un shield sur un Arduino sous tension peut détruire les broches par court-circuit transitoire. Toujours débrancher l'USB avant.

## Cas particulier — Proto shield et shields « do-it-yourself »

Un **proto shield** est un shield vierge (zone de soudure sans piste fonctionnelle) qui sert à intégrer son propre circuit en topologie Uno-compatible. C'est l'étape intermédiaire entre le breadboard (volatile) et le PCB dédié (long à concevoir et fabriquer).

Pratique pour :
- Intégrer un câblage breadboard validé en version soudée plus robuste.
- Ajouter quelques composants discrets (résistances, condensateurs, LEDs de diagnostic) à un projet.
- Apprendre la soudure SMD ou traversante avec une grille pré-percée.

Pour un projet école qui doit présenter un démonstrateur final fonctionnel et présentable, un proto shield soudé est nettement plus convaincant qu'une breadboard.

## Raccrochage projet

- **Étape 4 de la [[concept|phase de concept]]** — l'[[etat-de-l-art-technique|EAT]] inclut souvent les shields disponibles comme accélérateurs de PoC (« on prend un motor shield, on gagne deux semaines »).
- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — empilage et test du shield isolé, avant intégration au système complet.
- **Étape 4 de la [[dossier-technique|phase de dossier technique]]** — décision « shield + protoshield maison » vs « PCB dédié » sur le critère robustesse / coût / délai.

Un shield bien choisi en début de projet fait gagner du temps de PoC et de la robustesse sur le démonstrateur final. À l'inverse, accumuler les shields incompatibles est un piège mécanique et électrique qui se paye sur la durée.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-module|Câbler un module]] — l'alternative non-empilée (fils Dupont)
- [[arduino-moteur-cc|Piloter un moteur CC]] — usage typique d'un motor shield
- [[arduino-alimentation|Alimenter la carte]] — pour dimensionner la PSU avec shield empilé
- [[shield|Shield]] — la notion transverse
