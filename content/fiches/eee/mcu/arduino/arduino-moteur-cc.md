---
title: Piloter un moteur CC
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-sortie-pwm
  - lire-une-datasheet
aa: []
draft: false
---

Un **moteur à courant continu** (moteur CC, ou DC motor) est l'actionneur de référence pour produire un mouvement rotatif continu avec vitesse et sens variables. À la différence du [[arduino-servomoteur|servomoteur]] qui se positionne sur un angle, le moteur CC tourne en continu — sa **vitesse** se règle par PWM, son **sens** par l'inversion de polarité aux bornes. L'inversion de polarité depuis un microcontrôleur impose le passage par un **pont en H** (driver L298N, TB6612FNG, DRV8833) — c'est sur ce circuit que se concentre la fiche.

## À quoi ça sert ?

Cas d'usage typiques en projet école :

- **Robot mobile à deux roues motrices différentielles** (2 moteurs CC, sens et vitesse indépendants).
- **Convoyeur, treuil, bras tournant** — tout ce qui demande une rotation continue.
- **Système à pompe ou ventilateur** réglé en vitesse.

Comparaison rapide avec les autres actionneurs :

| Actionneur | Position | Vitesse | Couple | Précision angulaire |
|---|---|---|---|---|
| Servo standard | ✅ 0-180° | mauvaise | faible | moyenne |
| **Moteur CC + pont H** | ❌ | ✅ continue | bon | aucune sans encodeur |
| Moteur pas-à-pas | ✅ par pas | ✅ contrôlée | moyen | excellente |

## Procédure pas à pas

Quatre étapes : choisir le driver, câbler, alimenter, écrire le code.

### 1. Choisir le driver

| Driver | Tension moteur | Courant continu | Notes |
|---|---|---|---|
| **L298N** (module classique) | 5-35 V | 2 A par canal (avec dissipateur) | Le plus répandu, économique, dissipation par chaleur élevée |
| **TB6612FNG** | 4,5-13,5 V | 1,2 A par canal (3,2 A en pic) | MOSFET, peu de chute de tension, efficace |
| **DRV8833** | 2,7-10,8 V | 1,2 A par canal | Compact, dual H-bridge intégré |
| **L9110S** | 2,5-12 V | 0,8 A par canal | Petit, très bon marché, deux moteurs |

Pour un premier projet : **L298N** est le module pédagogique standard. Pour un projet sérieux ou un robot léger, le **TB6612FNG** offre un bien meilleur rendement énergétique.

### 2. Câbler

Pour un L298N pilotant un moteur CC (mêmes broches que dans la fiche [[arduino-shield|Utiliser un shield]] pour le motor shield) :

| Broche L298N | Connexion |
|---|---|
| `IN1` | broche Arduino D12 (sens 1) |
| `IN2` | broche Arduino D11 (sens 2) |
| `ENA` | broche Arduino D3 (PWM, vitesse) |
| `OUT1` | borne + du moteur |
| `OUT2` | borne − du moteur |
| `+12V` (alim moteur) | alimentation externe 9-12 V |
| `GND` (alim moteur) | GND alimentation externe **+ GND Arduino** (commun) |
| `+5V` (alim logique) | régulé par le L298N en interne, peut alimenter l'Arduino via le pont 5 V du module |

**Pont en H — table de vérité du L298N :**

| `IN1` | `IN2` | `ENA` (PWM) | Comportement |
|---|---|---|---|
| HIGH | LOW | > 0 | Sens avant à la vitesse PWM |
| LOW | HIGH | > 0 | Sens arrière à la vitesse PWM |
| LOW | LOW | × | Roue libre |
| HIGH | HIGH | × | Frein actif |
| × | × | 0 | Roue libre (peu importe IN1/IN2) |

Prendre capture d'écran ou photo de *un module L298N câblé sur une carte Arduino Uno, avec un moteur CC sur OUT1/OUT2 et une alimentation externe 9 V branchée sur le bornier d'alimentation moteur*.

### 3. Alimenter

**Alimentation moteur séparée obligatoire** dès que le moteur tire plus de ~50 mA — sinon le régulateur de l'Arduino chute, l'Arduino reboote. Source typique :

- **Pile 9 V** ou **bloc de piles AA** (6×1,5 V = 9 V) — démonstrations courtes, ~50-100 mAh dispo.
- **Batterie LiPo 2 cellules** (7,4 V nominal, 5 000 mAh) — projets autonomes solides.
- **Alimentation de table 9 V / 2 A** — banc d'essai stable.

GND **commun** Arduino + alimentation moteur — sinon les signaux logiques n'ont pas de référence.

### 4. Écrire le code

```cpp
const int IN1 = 12;
const int IN2 = 11;
const int ENA = 3;  // PWM ~

void avancer(int vitesse) {  // 0-255
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, vitesse);
}

void reculer(int vitesse) {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(ENA, vitesse);
}

void arret() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 0);
}

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENA, OUTPUT);
}

void loop() {
  avancer(150);
  delay(2000);
  arret();
  delay(500);
  reculer(200);
  delay(2000);
  arret();
  delay(500);
}
```

Téléverser. Le moteur tourne 2 s dans un sens à vitesse modérée, s'arrête 500 ms, repart dans l'autre sens à vitesse plus élevée, et ainsi de suite.

## Exemple — Contrôle de moteur par potentiomètre + bouton de sens

Cas complet : un potentiomètre règle la vitesse, un bouton inverse le sens à chaque appui.

```cpp
const int IN1 = 12, IN2 = 11, ENA = 3;
const int POT = A0;
const int BOUTON = 2;

bool sensAvant = true;
bool dernierBouton = HIGH;
unsigned long dernierAntirebond = 0;
const unsigned long DELAI_REBOND = 30;

void setup() {
  pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT); pinMode(ENA, OUTPUT);
  pinMode(BOUTON, INPUT_PULLUP);
}

void loop() {
  // Vitesse depuis le potentiomètre
  int vitesse = map(analogRead(POT), 0, 1023, 0, 255);

  // Bouton avec anti-rebond
  bool lect = digitalRead(BOUTON);
  if (lect != dernierBouton) {
    dernierAntirebond = millis();
    dernierBouton = lect;
  }
  if (millis() - dernierAntirebond > DELAI_REBOND && lect == LOW) {
    sensAvant = !sensAvant;
    dernierAntirebond = millis() + 10000;  // verrou anti-doublon
  }

  // Application
  if (sensAvant) { digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW); }
  else           { digitalWrite(IN1, LOW);  digitalWrite(IN2, HIGH); }
  analogWrite(ENA, vitesse);
}
```

Tourner le potentiomètre, presser le bouton — sens et vitesse changent en temps réel.

## Pièges

**Arduino qui reboote au démarrage du moteur.** Pic de courant à l'allumage, chute de tension `+5 V`. Solution : alimentation séparée pour le moteur, condensateur 100 µF près des bornes moteur.

**Pas de GND commun.** Signaux IN1/IN2 sans référence — le pont H bascule aléatoirement. Toujours GND commun.

**`IN1` et `IN2` à `HIGH` en même temps.** Frein actif (court-circuit interne du pont). Si maintenu trop longtemps, le pont chauffe — la sécurité thermique du L298N peut couper la sortie. À utiliser uniquement pour un freinage volontaire et bref.

**Inversion de polarité instantanée.** Faire passer `IN1`/`IN2` de `HIGH`/`LOW` à `LOW`/`HIGH` sans transit par `LOW`/`LOW` provoque un courant inverse violent — pic de courant qui peut détruire le driver. Bonne pratique : `arret()` + `delay(50)` avant l'inversion.

**Diodes de roue libre absentes.** Les modules L298N intègrent des diodes de protection — les drivers nus (transistors discrets) non. Sans diodes, l'inductance du moteur génère des surtensions destructrices à chaque coupure de courant. Vérifier sur la fiche du module.

**Calage du moteur (rotor bloqué).** Le moteur consomme à fond (courant de blocage ~5-10× le courant nominal) sans tourner — il chauffe rapidement. Détecter par la mesure de courant ou par capteur de rotation, et couper.

**Chute de tension dans le L298N.** Le L298N a une chute de ~2 V par sortie (technologie bipolaire). À 12 V d'entrée moteur, on n'a que ~10 V utiles aux bornes du moteur. Pour des projets sensibles au rendement, préférer le TB6612FNG (chute < 0,3 V).

**PWM trop lent qui rend le moteur audible.** Sur Uno R3, `analogWrite(D3)` génère ~490 Hz — perceptible comme un sifflement. Pour piloter silencieusement, augmenter la fréquence PWM (voir [[arduino-timers|timers matériels]]) ou changer de broche (D5/D6 à 980 Hz).

## Cas particulier — Moteur avec encodeur pour boucle fermée

Un moteur CC nu n'a aucun retour — on lui demande de tourner à `analogWrite(150)` mais sa vraie vitesse dépend de la tension d'alimentation, de la charge mécanique, de l'usure. Pour un asservissement précis :

- **Encodeur incrémental** (capteur Hall, optique) sur l'arbre du moteur → comptage des tours via [[arduino-interruptions|interruptions]].
- Boucle de **régulation PID** sur la vitesse mesurée → voir [[arduino-pid|régulation PID]].

C'est l'évolution naturelle d'un robot CC qui doit avoir une trajectoire répétable.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — validation du couple moteur + driver sur banc isolé (rotation, sens, plage de vitesse utile).
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — intégration dans la chaîne mesure → décision → mouvement.
- **Étape 4 de la [[concept|phase de concept]]** — arbitrage entre moteur CC, moteur pas-à-pas et servo selon les besoins de la fonction motrice.

Un robot mobile à 2 roues + L298N + 2 moteurs CC est l'un des PoC école les plus pédagogiques — il met en pratique GPIO, PWM, alimentation séparée, et anti-rebond dans un même projet.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-sortie-pwm|Piloter une sortie PWM]] — prérequis (analogWrite, fréquence PWM)
- [[arduino-shield|Utiliser un shield]] — un motor shield utilise le même L298N
- [[arduino-servomoteur|Piloter un servomoteur]] · [[arduino-moteur-pas-a-pas|Piloter un moteur pas-à-pas]] — alternatives
- [[arduino-interruptions|Interruptions]] — pour lire un encodeur en boucle fermée
- [[arduino-pid|Régulation PID]] — pour asservir la vitesse
- [[lire-une-datasheet|Lire une datasheet]] — pour dimensionner driver + alimentation
