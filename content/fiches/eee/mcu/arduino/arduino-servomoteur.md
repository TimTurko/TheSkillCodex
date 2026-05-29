---
title: Piloter un servomoteur
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

Un **servomoteur** (ou *servo*) est un actionneur rotatif qui se positionne sur une **consigne d'angle** transmise par un signal codé en largeur d'impulsion. Sur un servo standard (SG90, MG996R), l'angle se situe entre 0° et 180°. La bibliothèque `Servo.h` livrée avec l'IDE Arduino encapsule la génération du signal — il suffit d'appeler `servo.write(angle)` pour positionner.

## À quoi ça sert ?

Le servo est l'actionneur le plus simple pour produire un mouvement de position contrôlé, là où un moteur CC ne donne que vitesse + couple :

- **Direction d'un robot mobile** (roue directrice, gouvernail, axe de capteur orientable).
- **Tri ou aiguillage** (palette qui pousse une pièce d'un côté ou de l'autre).
- **Mouvement d'un bras articulé** simple (pince qui s'ouvre/ferme, axe court).
- **Servomécanisme de précision** (visée optique, positionnement angulaire fin avec un MG996R à roulement métal).

Limite : un servo standard ne tourne que sur ~180°. Pour la rotation continue, voir les *servos à rotation continue* (qui se pilotent en vitesse) ou les moteurs CC.

## Procédure pas à pas

Quatre étapes : choisir le servo, câbler, installer `Servo.h`, écrire le code.

### 1. Choisir le servo

| Référence | Tension | Couple | Plage | Coût | Usage |
|---|---|---|---|---|---|
| SG90 (plastique) | 4,8-6 V | ~1,8 kg·cm | 0-180° | 2-3 € | Tests, prototypes légers, robots éducatifs |
| MG90S (métal) | 4,8-6 V | ~2,2 kg·cm | 0-180° | 4-6 € | Pinces, mouvements répétés |
| MG996R | 4,8-7,2 V | 9-11 kg·cm | 0-180° | 5-10 € | Actionneurs de puissance, drone à grande échelle |

Pour un premier test, le SG90 est le standard incontournable — petit, léger, fourni dans tous les kits.

### 2. Câbler

Un servomoteur a **3 fils** :

| Couleur | Signal |
|---|---|
| Rouge | `+5 V` |
| Marron (ou noir) | `GND` |
| Orange (ou jaune, blanc) | Signal PWM 50 Hz |

**Câblage minimal** (test isolé) :
- Rouge → `+5 V` Arduino
- Marron → `GND` Arduino
- Orange → broche D9 (compatible PWM, mais `Servo.h` n'utilise pas le PWM matériel — n'importe quelle GPIO numérique convient)

**Câblage avec alimentation séparée** (recommandé dès qu'on a 2+ servos ou un servo de couple) :
- Rouge → `+5 V` d'une alimentation externe stable (1-2 A)
- Marron → GND commune (alimentation **+** Arduino)
- Orange → broche Arduino

Prendre capture d'écran ou photo de *un servomoteur SG90 câblé sur une carte Arduino Uno, fil orange sur D9, fil rouge sur +5 V et fil marron sur GND*.

### 3. Installer `Servo.h`

`Servo.h` est **livrée avec l'IDE Arduino** — pas besoin d'installer.

```cpp
#include <Servo.h>
```

Sur cartes ESP32, la bibliothèque équivalente est `ESP32Servo` (à installer via le gestionnaire — `Servo.h` natif ne fonctionne pas).

### 4. Écrire le code

```cpp
#include <Servo.h>

Servo monServo;

void setup() {
  monServo.attach(9);   // signal sur D9
  monServo.write(90);   // position initiale au milieu
  delay(1000);
}

void loop() {
  monServo.write(0);    // à fond à gauche
  delay(1000);
  monServo.write(90);   // milieu
  delay(1000);
  monServo.write(180);  // à fond à droite
  delay(1000);
}
```

Téléverser. Le servo va à trois positions discrètes avec une seconde entre chacune. Si vous voyez le servo tressauter sans aller où vous voulez, voir la section *Pièges*.

## Exemple — Balayage continu avec contrôle de vitesse

Cas complet : balayage 0° → 180° → 0° à vitesse réglable par potentiomètre.

**Câblage** : servo sur D9, potentiomètre 10 kΩ sur A0.

```cpp
#include <Servo.h>

Servo monServo;
const int POT = A0;

int angle = 0;
int sens = +1;  // +1 ou -1

void setup() {
  monServo.attach(9);
  monServo.write(angle);
}

void loop() {
  // Lire le potentiomètre pour ajuster le pas (vitesse)
  int valPot = analogRead(POT);
  int pas = map(valPot, 0, 1023, 1, 10);  // 1° à 10° par pas

  angle += sens * pas;

  if (angle >= 180) { angle = 180; sens = -1; }
  if (angle <= 0)   { angle = 0;   sens = +1; }

  monServo.write(angle);
  delay(20);  // ~50 Hz de rafraîchissement
}
```

Tourner le potentiomètre — la vitesse de balayage varie. Pratique pour calibrer la vitesse en démo sans recompiler.

## Pièges

**Arduino qui reboote au démarrage du servo.** Symptôme classique : la consommation du servo en mouvement (jusqu'à 500 mA en pic) fait chuter la tension `+5 V`, l'Arduino reset. Solution : **alimentation séparée pour le servo**, GND commune avec l'Arduino.

**GND non commun.** Servo alimenté par batterie séparée, fil GND non relié à celui d'Arduino : le signal PWM n'a pas de référence, le servo se positionne aléatoirement ou ne bouge pas. Toujours GND commun, dès qu'il y a deux alimentations.

**Servo qui tressaute (jitter).** Plusieurs causes possibles :
- Alimentation insuffisante (cf. ci-dessus).
- Câbles de signal trop longs ou bruyants — raccourcir, blinder.
- Conflit de timer avec une autre bibliothèque. Sur Uno R3, `Servo.h` utilise Timer1 — désactive le PWM sur D9 et D10. Autres bibliothèques qui utilisent Timer1 (`TimerOne`, `Wire` sur certaines forks) : conflit.

**Plage `write()` inversée ou tronquée.** Certains servos bon marché ne couvrent pas exactement 0-180°. Si on commande 0° et que le servo bute mécaniquement, la consommation grimpe et le servo chauffe. Limiter la plage commandée à 10°-170° pour préserver le servo.

**Confondre `write(angle)` et `writeMicroseconds(N)`.** `write(angle)` accepte 0-180° et convertit en interne. `writeMicroseconds(N)` accepte la largeur d'impulsion directe en µs (typiquement 1000-2000 µs, parfois étendue 500-2500). Sur un servo qui ne va pas aux extrêmes attendus, `writeMicroseconds()` permet la calibration fine.

**`Servo.h` qui désactive PWM sur D9/D10.** Inclure `Servo.h` empêche `analogWrite(9)` ou `analogWrite(10)` de fonctionner — Timer1 est confisqué. Si vous avez besoin de PWM sur ces broches, soit changer de broche, soit utiliser une bibliothèque alternative.

**Trop de servos sur Uno R3.** `Servo.h` supporte jusqu'à **12 servos sur Uno** (limite logicielle), mais la consommation cumulée dépasse vite la capacité du régulateur 5 V de la carte. Au-delà de 2 servos, alimentation externe obligatoire ; au-delà de 6 servos, considérer un driver dédié (PCA9685, 16 canaux PWM en I2C).

**Servo qui hurle puis chauffe à l'arrêt.** Le servo essaie d'atteindre une position bloquée mécaniquement — il consomme à fond sans bouger. Symptôme : bourdonnement, chaleur. Diagnostic : la consigne est hors plage mécanique du servo (mal calibrée), ou l'obstacle vient de l'extérieur. Détacher le servo (`servo.detach()`) coupe le signal et le laisse passif.

## Cas particulier — Servos à rotation continue

Un *servo à rotation continue* (parfois noté FS90R, MG995-360, ou modifié à partir d'un standard) ne se positionne pas en angle — il **tourne dans un sens ou l'autre à une vitesse proportionnelle à la consigne**. Convention courante :

- `write(90)` → arrêt
- `write(0)` → vitesse maximale dans un sens
- `write(180)` → vitesse maximale dans l'autre sens

Très utile pour les robots à roues légers, en remplacement d'un moteur CC + pont en H. Limite : pas de retour de position, vitesse mal calibrée, à éviter pour des asservissements précis.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — premier essai de positionnement angulaire sur banc isolé.
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — intégration servo dans la chaîne mesure → décision → mouvement (par exemple : capteur de présence → ouverture d'une trappe).
- **Étape 4 de la [[concept|phase de concept]]** — l'arbitrage entre servo standard, servo continu, moteur CC + pont H, et moteur pas-à-pas se fait souvent au moment de l'EAT.

Un servomoteur bien câblé (alimentation séparée + GND commun) est l'actionneur le plus *prévisible* à intégrer en projet école — chaque consigne donne le même résultat, à la précision près. C'est ce qui en fait l'outil idéal pour les premières démonstrations.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-bibliotheques|Utiliser une bibliothèque]] — prérequis, `Servo.h` est livrée
- [[arduino-sortie-pwm|Piloter une sortie PWM]] — pour comprendre le signal sous-jacent
- [[arduino-moteur-cc|Piloter un moteur CC]] — pour rotation continue contrôlée
- [[arduino-moteur-pas-a-pas|Piloter un moteur pas-à-pas]] — pour positionnement précis multi-tours
- [[arduino-alimentation|Alimenter la carte]] — pour dimensionner la PSU avec servos
