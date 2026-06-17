---
title: Piloter un servomoteur
type: tuto
phases:
  - concept
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-bibliotheques
aa:
  - RA-PROJET-C03-3/PROJ/5
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

| Référence | Tension | Couple | Plage | Usage |
|---|---|---|---|---|
| SG90 (plastique) | 4,8-6 V | ~1,8 kg·cm | 0-180° | Tests, prototypes légers, robots éducatifs |
| MG90S (métal) | 4,8-6 V | ~2,2 kg·cm | 0-180° | Pinces, mouvements répétés |
| MG996R | 4,8-7,2 V | 9-11 kg·cm | 0-180° | Articulations de bras, pinces lourdes, axes sous contrainte (forte charge) |

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

![Branchement d'un servomoteur SG90 : fil rouge → +5 V, fil marron → GND, fil orange → D9 (signal)|520](/ressources/img/arduino-servomoteur/branchement-sg90.svg)

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

Téléverser. Le servo va à trois positions discrètes avec une seconde entre chacune. Si le servo tressaute sans aller où on veut, voir la section *Pièges*.

## Exemple — Balayage continu avec contrôle de vitesse

Cas complet : balayage 0° → 180° → 0° à vitesse réglable par potentiomètre.

**Câblage** : servo sur D9 (comme au schéma de l'étape 2), [[potentiometre|potentiomètre]] 10 kΩ sur A0 (câblage en diviseur : voir [[arduino-capteur-analogique]]).

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

  angle += sens * pas;                            // avance d'un pas dans le sens courant

  if (angle >= 180) { angle = 180; sens = -1; }   // butee haute : on repart en descendant
  if (angle <= 0)   { angle = 0;   sens = +1; }   // butee basse : on repart en montant

  monServo.write(angle);
  delay(20);  // ~50 Hz de rafraîchissement
}
```

> [!info] Comment lire ce code
> Le balayage va-et-vient repose sur une variable `sens` qui vaut `+1` (on monte vers 180°) ou `-1` (on descend vers 0°). À chaque tour de `loop()`, on ajoute `sens * pas` à l'angle ; quand on atteint une butée, on **inverse `sens`** et le servo repart dans l'autre sens. Le `map(valPot, 0, 1023, 1, 10)` traduit la position du potentiomètre (0-1023) en un pas de 1° à 10° : plus le pas est grand, plus le balayage est rapide.

Tourner le potentiomètre — la vitesse de balayage varie. Pratique pour calibrer la vitesse en démo sans recompiler.

## Pièges

**Arduino qui reboote au démarrage du servo.** Symptôme classique : la consommation du servo en mouvement (quelques centaines de mA pour un SG90, plus de 1 A au calage pour un MG996R) fait chuter la tension `+5 V`, l'Arduino reset. Solution : **alimentation séparée pour le servo**, GND commune avec l'Arduino.

**GND non commun.** Servo alimenté par batterie séparée, fil GND non relié à celui d'Arduino : le signal PWM n'a pas de référence, le servo se positionne aléatoirement ou ne bouge pas. Toujours GND commun, dès qu'il y a deux alimentations.

**Servo qui tressaute (jitter).** Plusieurs causes possibles :
- Alimentation insuffisante (cf. ci-dessus).
- Câbles de signal trop longs ou bruyants — raccourcir, blinder.
- Conflit de timer avec une autre bibliothèque. Sur Uno R3, `Servo.h` utilise Timer1 — désactive le PWM sur D9 et D10. Autres bibliothèques qui utilisent Timer1 (`TimerOne`, `Wire` sur certaines forks) : conflit.

**Plage `write()` inversée ou tronquée.** Certains servos bon marché ne couvrent pas exactement 0-180°. Si on commande 0° et que le servo bute mécaniquement, la consommation grimpe et le servo chauffe. Limiter la plage commandée à 10°-170° pour préserver le servo.

**Confondre `write(angle)` et `writeMicroseconds(N)`.** `write(angle)` accepte 0-180° et convertit en interne. `writeMicroseconds(N)` accepte la largeur d'impulsion directe en µs (typiquement 1000-2000 µs, parfois étendue 500-2500). Sur un servo qui ne va pas aux extrêmes attendus, `writeMicroseconds()` permet la calibration fine.

**`Servo.h` qui désactive PWM sur D9/D10.** Inclure `Servo.h` empêche `analogWrite(9)` ou `analogWrite(10)` de fonctionner — Timer1 est confisqué. Si on a besoin de PWM sur ces broches, soit changer de broche, soit utiliser une bibliothèque alternative.

**Trop de servos sur Uno R3.** `Servo.h` supporte jusqu'à **12 servos sur Uno** (limite logicielle), mais la consommation cumulée dépasse vite la capacité du régulateur 5 V de la carte. Au-delà de 2 servos, alimentation externe obligatoire ; au-delà de 6 servos, considérer un driver dédié (PCA9685, 16 canaux PWM en I2C).

**Servo qui hurle puis chauffe à l'arrêt.** Le servo essaie d'atteindre une position bloquée mécaniquement — il consomme à fond sans bouger. Symptôme : bourdonnement, chaleur. Diagnostic : la consigne est hors plage mécanique du servo (mal calibrée), ou l'obstacle vient de l'extérieur. Détacher le servo (`servo.detach()`) coupe le signal et le laisse passif.

## Cas particulier — Servos à rotation continue

Un *servo à rotation continue* (parfois noté FS90R, MG995-360, ou modifié à partir d'un standard) ne se positionne pas en angle — il **tourne dans un sens ou l'autre à une vitesse proportionnelle à la consigne**. Convention courante :

- `write(90)` → arrêt
- `write(0)` → vitesse maximale dans un sens
- `write(180)` → vitesse maximale dans l'autre sens

Très utile pour les robots à roues légers, en remplacement d'un moteur CC + pont en H. Limite : pas de retour de position, vitesse mal calibrée, à éviter pour des asservissements précis.

## Servos à retour de position

Un servo standard *commande* une position mais ne dit pas s'il l'a **réellement** atteinte : `write(90)` envoie la consigne, sans garantie que l'axe soit bien à 90° (butée mécanique, surcharge, blocage extérieur). Un **servo à retour de position** (*feedback servo*) répond à ce besoin en exposant un **4ᵉ fil** qui rapporte l'angle mesuré — précieux sur un bras 3 axes pour savoir où sont *vraiment* les articulations, pas seulement où on leur a demandé d'aller.

Rappel utile : tout servo analogique se positionne déjà en **boucle fermée** grâce à un [[potentiometre|potentiomètre]] interne solidaire de l'axe (c'est lui qui permet au servo de « tenir » sa position). Un feedback servo ne fait que **sortir ce signal** vers une broche de l'Arduino.

### Lire la position (retour analogique)

Le cas qui porte bien son nom de « retour par potentiomètre » est le **servo à retour analogique** (par exemple l'Adafruit Analog Feedback Servo) : le 4ᵉ fil donne directement la **tension du curseur** du potentiomètre interne, image de l'angle. On la lit sur une entrée analogique (→ [[adc]]).

![Branchement d'un servo à retour de position : 3 fils standards (rouge → +5 V, marron → GND, orange → D9 commande) plus un fil de retour relié à A0|520](/ressources/img/arduino-servomoteur/retour-position.svg)

```cpp
#include <Servo.h>

Servo monServo;
const int CMD    = 9;    // fil de commande (PWM) du servo
const int RETOUR = A0;   // 4e fil : tension du potentiometre interne

// Valeurs ADC relevees en calibration (a mesurer pour CHAQUE servo)
const int ADC_0   = 110;   // analogRead quand le servo est a 0 deg
const int ADC_180 = 910;   // analogRead quand le servo est a 180 deg

void setup() {
  Serial.begin(115200);
  monServo.attach(CMD);
}

void loop() {
  monServo.write(90);                  // consigne : aller a 90 deg
  delay(500);

  int brut = analogRead(RETOUR);       // tension du curseur (0-1023)
  int angleReel = map(brut, ADC_0, ADC_180, 0, 180);  // convertie en degres

  Serial.print("Consigne 90 -> mesure ");
  Serial.print(angleReel);
  Serial.println(" deg");
  delay(500);
}
```

> [!info] Comment lire ce code
> La consigne (`write`) et la mesure (`analogRead`) sont **deux choses indépendantes** : l'une dit au servo où aller, l'autre lit où il est *vraiment*. Les valeurs `ADC_0` et `ADC_180` ne se devinent pas — elles se **calibrent** : on commande le servo à 0° puis à 180°, on relève la valeur `analogRead` à chaque extrémité, et `map()` interpole entre les deux. Chaque servo a ses propres bornes (le potentiomètre n'est jamais parfaitement centré), d'où une calibration **par exemplaire**.

### À quoi ça sert

- **Confirmer l'arrivée** — comparer consigne et mesure repère un servo qui n'atteint pas sa cible (obstacle, surcharge) : `if (abs(angleReel - 90) > 5) { /* signaler l'écart */ }`.
- **Boucle de plus haut niveau** — asservir un mouvement à la position *réelle* plutôt qu'à la consigne supposée.
- **Bras 3 axes** — connaître l'angle effectif de chaque articulation pour vérifier une posture ou journaliser un mouvement.

### Variante — retour numérique (PWM)

Certains feedback servos n'utilisent **pas** un potentiomètre mais un **capteur à effet Hall**, et sortent la position sous forme d'un **signal PWM** (rapport cyclique proportionnel à l'angle) plutôt qu'une tension. Le **Parallax Feedback 360°** en est l'exemple courant : retour à 910 Hz, rapport cyclique de 2,7 % à 97,1 % sur un tour complet. Il se lit avec `pulseIn()` (ou une interruption), **pas** avec `analogRead` ; en contrepartie, le capteur Hall ne s'use pas et ne dérive pas comme un potentiomètre. À vérifier dans la datasheet du modèle avant de câbler : retour **analogique** (→ `analogRead` sur une broche A*) ou **PWM** (→ `pulseIn` sur une broche numérique).

> [!warning] Le retour n'est pas une métrologie
> Un retour par potentiomètre **dérive** (usure de la piste, température) : il convient pour un contrôle *indicatif* (« le bras est-il à peu près arrivé ? »), pas pour une mesure de précision. Pour un positionnement fin et durable, un asservissement sur capteur dédié est préférable — voir [[arduino-pid|le réglage PID]].

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
- [[potentiometre|Potentiomètre]] — le capteur interne qu'un servo à retour de position expose
- [[adc|Convertisseur analogique-numérique]] — pour lire la tension du retour analogique
- [[arduino-pid|Réglage PID]] — pour un asservissement de position fin
