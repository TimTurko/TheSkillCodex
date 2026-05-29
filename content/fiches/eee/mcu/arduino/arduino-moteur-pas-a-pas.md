---
title: Piloter un moteur pas-à-pas
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-bibliotheques
aa: []
draft: false
---

Un **moteur pas-à-pas** (*stepper motor*) tourne par **pas angulaires discrets** — typiquement 200 pas par tour (1,8° par pas) — sous la commande séquentielle de plusieurs bobines. La position du rotor est donc *connue par construction* sans capteur de retour, ce qui fait du pas-à-pas l'actionneur de prédilection pour le positionnement précis multi-tours (imprimantes 3D, CNC, scanners). Cette fiche couvre le pilotage via deux drivers emblématiques : **28BYJ-48 + ULN2003** pour la version pédagogique, et **NEMA17 + A4988** pour le pas-à-pas industriel.

## À quoi ça sert ?

Cas typiques :

- **Positionnement angulaire précis** (sans capteur, à partir d'un *home* connu).
- **Mouvement linéaire par vis** — axes d'imprimante 3D, CNC, plotter, télescope.
- **Rotation à très basse vitesse** sans à-coups (où un moteur CC tressauterait).
- **Vannes motorisées multitours**, treuils, mécanismes d'horloge.

Comparaison rapide :

| Actionneur | Position | Couple | Précision | Coût |
|---|---|---|---|---|
| Servo standard | 0-180° | faible | moyenne | bas |
| Moteur CC | aucun | bon | nul (sans encodeur) | bas |
| **Moteur pas-à-pas** | par pas | moyen | excellente | moyen |

## Procédure pas à pas

Quatre étapes : choisir le couple moteur + driver, câbler, installer la bibliothèque, écrire le code.

### 1. Choisir le moteur et le driver

**Version pédagogique : 28BYJ-48 + ULN2003**

- Moteur : 28BYJ-48, 5 V, 4 fils + 1 commun (mode unipolaire), réducteur 1:64 intégré (donc 2048 ou 4096 pas par tour à l'arbre sortant).
- Driver : ULN2003 (transistors Darlington), montage carte LED de 4 LEDs qui clignotent dans l'ordre des phases — très pédagogique.
- Coût : 3-5 € le couple, fourni dans les kits Arduino.

**Version industrielle : NEMA17 + A4988 ou DRV8825**

- Moteur : NEMA17, bipolaire, 4 fils, 200 pas/tour, 0,8 à 1,7 A par bobine.
- Driver : A4988 ou DRV8825, microstepping jusqu'à 1/16 ou 1/32, contrôle par 2 broches seulement (STEP, DIR).
- Coût : 8-15 € le moteur + 3-5 € le driver. Utilisé dans les imprimantes 3D et CNC.

Pour un premier essai pédagogique, le 28BYJ-48 + ULN2003 est imbattable. Pour un projet sérieux à puissance, on bascule sur NEMA17 + A4988.

### 2. Câbler

**Pour 28BYJ-48 + ULN2003** : le moteur a un connecteur Dupont 5 broches qui s'enfiche directement sur le module ULN2003. Côté Arduino :

| ULN2003 | Arduino Uno |
|---|---|
| IN1 | D8 |
| IN2 | D9 |
| IN3 | D10 |
| IN4 | D11 |
| `+` (alim) | `+5 V` (ou alim externe 5-12 V) |
| `−` (GND) | GND |

**Pour NEMA17 + A4988** :

| A4988 | Arduino Uno |
|---|---|
| `STEP` | D2 |
| `DIR` | D3 |
| `SLEEP` ↔ `RESET` | reliés ensemble (pour activer le driver) |
| `ENABLE` | GND (toujours actif) ou broche Arduino pour activation |
| `VDD` (logique) | `+5 V` Arduino |
| `GND` (logique) | GND Arduino |
| `VMOT` (puissance) | alimentation 12-24 V externe |
| `GND` (puissance) | GND alimentation **+ GND Arduino** (commun) |
| `1A, 1B, 2A, 2B` | 4 fils du moteur (2 par bobine) |

**Important sur A4988** : un condensateur 100 µF entre `VMOT` et GND est *obligatoire* pour absorber les pics de courant — son absence détruit le driver.

Prendre capture d'écran ou photo de *un moteur pas-à-pas 28BYJ-48 connecté à son module ULN2003 et câblé sur les broches D8 à D11 d'une carte Arduino Uno, avec les 4 LEDs du module visibles*.

### 3. Installer la bibliothèque

Deux options :

- **`Stepper.h`** — livrée avec l'IDE, simple, suffisante pour 28BYJ-48 + ULN2003.
- **`AccelStepper`** — à installer via le gestionnaire, gère les rampes d'accélération/décélération et le multi-stepper coordonné. Indispensable dès qu'on veut un mouvement lisse, ou qu'on a 2+ moteurs synchronisés (CNC).

Pour un premier essai, `Stepper.h` suffit.

### 4. Écrire le code (28BYJ-48 + Stepper.h)

```cpp
#include <Stepper.h>

const int PAS_PAR_TOUR = 2048;  // 28BYJ-48 avec réducteur 1:64
Stepper monMoteur(PAS_PAR_TOUR, 8, 10, 9, 11);  // ordre des broches IN1, IN3, IN2, IN4

void setup() {
  monMoteur.setSpeed(10);  // 10 tr/min
  Serial.begin(115200);
}

void loop() {
  Serial.println("Sens horaire");
  monMoteur.step(PAS_PAR_TOUR);  // un tour complet
  delay(1000);

  Serial.println("Sens anti-horaire");
  monMoteur.step(-PAS_PAR_TOUR); // un tour dans l'autre sens
  delay(1000);
}
```

Téléverser. Le moteur tourne d'un tour, fait une pause, repart en sens inverse. L'ordre des broches `(8, 10, 9, 11)` correspond au séquencement des phases — ne pas inverser au hasard, sinon le moteur vibre sans tourner.

## Exemple — Mouvement par bouton de pas

Cas complet : un bouton fait avancer le moteur d'un quart de tour à chaque appui.

**Câblage** : 28BYJ-48 + ULN2003 comme précédemment + bouton sur D2 (INPUT_PULLUP).

```cpp
#include <Stepper.h>

const int PAS_PAR_TOUR = 2048;
const int PAS_INCREMENT = PAS_PAR_TOUR / 4;  // quart de tour
Stepper monMoteur(PAS_PAR_TOUR, 8, 10, 9, 11);

const int BOUTON = 2;
bool dernierEtat = HIGH;
unsigned long dernierAntirebond = 0;

void setup() {
  monMoteur.setSpeed(15);
  pinMode(BOUTON, INPUT_PULLUP);
}

void loop() {
  bool lect = digitalRead(BOUTON);
  if (lect != dernierEtat) {
    dernierAntirebond = millis();
    dernierEtat = lect;
  }
  if (millis() - dernierAntirebond > 30 && lect == LOW) {
    monMoteur.step(PAS_INCREMENT);
    dernierAntirebond = millis() + 10000;  // verrou anti-doublon
  }
}
```

Chaque appui fait avancer d'un quart de tour. Pratique pour des projets de positionnement séquentiel (distributeur, sélecteur multi-positions).

## Pièges

**Ordre des phases incorrect.** Avec `Stepper(steps, A, B, C, D)`, l'ordre des 4 broches détermine le sens de séquencement des bobines. Si l'ordre est faux, le moteur vibre sans tourner. Solution : essayer les permutations courantes, ou se référer à la datasheet du driver (pour ULN2003 + 28BYJ-48, l'ordre `(8, 10, 9, 11)` est le bon en standard).

**Courant insuffisant à l'alimentation.** Un 28BYJ-48 tire ~200-300 mA en pic, un NEMA17 1-1,7 A par bobine. Alimenter par le `+5 V` Arduino fait redémarrer la carte. Toujours alimentation séparée pour le moteur (au moins pour NEMA17), GND commun.

**`A4988` sans condensateur sur VMOT.** Destruction quasi-immédiate du driver à l'allumage par pic de tension inductif. **Condensateur 100 µF minimum** entre VMOT et GND, près du driver.

**Réglage du courant A4988 incorrect.** Le potentiomètre du driver règle le courant limité par bobine. Trop bas → couple trop faible, perte de pas. Trop haut → driver et moteur surchauffent. Calibrer en mesurant Vref au multimètre selon la formule de la fiche du driver (Vref = 8 × R_SENSE × I_MAX, typiquement Vref ≈ 0,8 V pour 1 A sur A4988 avec R = 0,1 Ω).

**Perte de pas sous charge.** Si on lui demande d'aller trop vite ou si la charge est trop importante, le moteur *saute* des pas — la position calculée par le programme ne correspond plus à la position réelle. Symptôme : décalage cumulatif au cours du temps. Solutions : réduire la vitesse, augmenter le couple (driver plus puissant, microstepping plus fin, ressort de rappel mécanique).

**Stockage de chaleur sur ULN2003.** Sous charge prolongée, le module ULN2003 chauffe (transistors Darlington, dissipation passive). Le 28BYJ-48 n'a pas de mode *libre* — il consomme en permanence ses ~150 mA même à l'arrêt. Pour réduire la dissipation à l'arrêt, couper l'alimentation par MOSFET ou utiliser un driver à mode sleep.

**Bibliothèque `Stepper.h` bloquante.** `monMoteur.step(N)` est bloquant — pendant la commande, rien d'autre ne s'exécute. Pour des mouvements lisses + parallélisme, basculer sur `AccelStepper` (non bloquante avec `.run()` à appeler dans `loop()`).

**Sens A4988 fonction de DIR au moment du `STEP`.** Changer `DIR` pendant un `STEP` actif peut produire des pas erratiques. Bonne pratique : laisser `DIR` stable au moins 1 µs avant `STEP`, ce que toutes les bibliothèques sérieuses font.

## Cas particulier — Microstepping et lissage

Les drivers A4988 / DRV8825 / TMC2209 supportent le **microstepping** : au lieu d'exécuter un pas physique complet, ils interpolent la commande des bobines pour produire des positions intermédiaires (1/2, 1/4, 1/8, 1/16, 1/32 de pas).

Avantages : mouvement nettement plus lisse, bruit réduit, précision angulaire améliorée.

Inconvénients : couple effectif réduit aux positions intermédiaires (le moteur passe plus de temps à tenir une position non-stable), et coordination du driver pour ramener au pas entier nécessite des bibliothèques avancées.

Sur les imprimantes 3D modernes, drivers TMC2209 en microstepping 1/256 — quasi-silencieux.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — validation isolée du moteur + driver : tour complet dans les deux sens, vitesse maximale sans perte de pas.
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — intégration dans une chaîne de mouvement précis (axe X, distributeur multi-positions, etc.).
- **Étape 4 de la [[concept|phase de concept]]** — arbitrage entre pas-à-pas et alternatives (servo, moteur CC + encodeur) selon le besoin de précision + couple + budget.

Le pas-à-pas est l'actionneur typique des projets école qui visent un mouvement répétable précis sans capteur de retour — courbure d'apprentissage modérée, résultats spectaculaires en démonstration.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-bibliotheques|Utiliser une bibliothèque]] — prérequis, `Stepper.h` est livrée
- [[arduino-moteur-cc|Piloter un moteur CC]] — alternative continue
- [[arduino-servomoteur|Piloter un servomoteur]] — alternative position angulaire 0-180°
- [[arduino-alimentation|Alimenter la carte]] — dimensionnement PSU avec moteur de puissance
- [[arduino-interruptions|Interruptions]] — pour la lecture de fin de course en parallèle du mouvement
