---
title: Piloter une sortie PWM
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-sortie-tor
aa: []
draft: false
---

Le **PWM** (Pulse Width Modulation, modulation de largeur d'impulsion) émet un signal carré rapide dont on fait varier la proportion de temps passé à `HIGH` — le **rapport cyclique**. Sur Arduino, la fonction `analogWrite()` génère ce signal sur les broches marquées d'un tilde `~`. Du point de vue de la charge (LED, moteur, élément chauffant) lente devant la fréquence du PWM, l'effet est *équivalent à une tension moyenne* réglable de 0 à 5 V — sans qu'aucune vraie tension intermédiaire ne soit produite par la broche.

## À quoi ça sert ?

Le PWM est l'outil universel pour faire varier la puissance d'une charge sans dissiper d'énergie dans un composant variable (potentiomètre, transistor en linéaire). Trois usages typiques en projet école :

- **Faire varier l'intensité d'une LED** — fondu, animation, indicateur progressif.
- **Régler la vitesse d'un moteur CC** — couplé à un pont en H (voir [[arduino-moteur-cc|piloter un moteur CC]]).
- **Piloter un servomoteur** — la position est codée par la largeur d'une impulsion (cas particulier traité par la bibliothèque `Servo.h`, voir [[arduino-servomoteur|servomoteur]]).

C'est aussi la base du chauffage régulé (élément chauffant + thermocouple) et du gradateur DC.

## Procédure pas à pas

Quatre étapes : identifier une broche PWM, câbler, écrire le code, observer.

### 1. Identifier une broche PWM

Toutes les broches numériques ne génèrent pas du PWM. Sur Arduino Uno R3, six broches le supportent : **D3, D5, D6, D9, D10, D11** (marquées d'un `~` à côté du numéro sur la sérigraphie).

- Sur **Mega 2560** : 15 broches PWM (D2-D13, D44-D46).
- Sur **Nano** : D3, D5, D6, D9, D10, D11.
- Sur **Uno R4** : D3, D5, D6, D9, D10, D11 (compatibilité préservée, mais résolution et fréquence différentes).

`analogWrite()` sur une broche non-PWM ne génère pas d'erreur — elle force juste `HIGH` (si valeur > 127) ou `LOW`. Symptôme : la LED reste allumée à pleine puissance ou éteinte, peu importe la valeur passée.

### 2. Câbler une LED PWM

LED anode (+) → résistance 220 Ω → broche **D9** (PWM) ; cathode (−) → GND. Identique au câblage d'une LED en TOR — c'est le code qui change.

Prendre capture d'écran ou photo de *une LED + résistance 220 Ω câblée sur la broche D9 d'un Arduino Uno, avec la sérigraphie ~9 visible sur la carte*.

### 3. Écrire le code — fondu progressif

```cpp
const int LED = 9;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  // Fondu montant : 0 → 255
  for (int v = 0; v <= 255; v++) {
    analogWrite(LED, v);
    delay(8);
  }
  // Fondu descendant : 255 → 0
  for (int v = 255; v >= 0; v--) {
    analogWrite(LED, v);
    delay(8);
  }
}
```

Le paramètre de `analogWrite()` est un entier de **0** (rapport cyclique 0 %, sortie toujours basse) à **255** (rapport cyclique 100 %, sortie toujours haute) sur Uno R3. La LED s'allume progressivement puis s'éteint progressivement en boucle.

### 4. Observer

À l'œil nu, la LED varie en intensité — c'est l'effet de moyenne perceptive (l'œil intègre les ~490 commutations par seconde du PWM Arduino sur D9). À l'**oscilloscope**, on voit la vraie nature du signal : créneau 0-5 V dont la proportion de temps à 5 V varie avec la valeur passée.

Prendre capture d'écran ou photo de *l'écran d'un oscilloscope montrant un signal PWM sur la broche D9, rapport cyclique ~50 %, fréquence ~490 Hz*.

## Exemple — Variateur de LED avec potentiomètre

Cas complet : lire la position d'un potentiomètre sur `A0`, l'utiliser comme consigne pour la luminosité de la LED.

**Câblage** : potentiomètre 10 kΩ sur `A0` (curseur), `5 V` et `GND` aux extrêmes ; LED + 220 Ω sur D9.

```cpp
const int POT = A0;
const int LED = 9;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  int valeur = analogRead(POT);       // 0-1023
  int pwm    = valeur / 4;            // 0-255 (mise à l'échelle)
  analogWrite(LED, pwm);
  delay(10);
}
```

Tournez le potentiomètre : la luminosité de la LED suit. Note : `analogRead()` renvoie 0-1023 sur Uno R3, mais `analogWrite()` veut 0-255 — la conversion par division par 4 (ou la fonction `map()`) est obligatoire.

## Pièges

**Broche non PWM.** Le code compile, `analogWrite()` ne génère pas d'erreur — mais la sortie est binaire. Vérifier le `~` sur la sérigraphie de la carte ou la doc.

**Confondre `analogWrite()` et vraie sortie analogique.** `analogWrite()` ne sort pas une tension analogique — il sort un créneau 0/5 V à rapport cyclique variable. La tension *moyenne* est analogique pour une charge lente (LED, moteur), mais l'instantané reste binaire. Pour une vraie tension analogique, il faut un DAC (Uno R4 a un DAC sur A0) ou un filtre RC passe-bas en sortie de PWM.

**Confondre 0-255 et 0-100.** Le paramètre de `analogWrite()` est 0-255 (8 bits), pas 0-100 ou 0-1023. Une valeur 100 = 39 % de rapport cyclique, pas 100 %.

**Fréquence PWM par défaut inadaptée.** Sur Uno, les broches D5 et D6 sortent à ~980 Hz, les autres à ~490 Hz. Pour une LED ou un moteur lent c'est imperceptible ; pour un moteur rapide avec inertie faible, ou pour un buzzer piézo, la fréquence peut être audible ou produire des artefacts. Voir [[arduino-timers|timers matériels]] pour reconfigurer la fréquence.

**Charge inductive (moteur, bobine) sans diode de roue libre.** Une bobine pilotée en PWM produit des surtensions à chaque commutation. Sans diode 1N4007 en parallèle inverse, le transistor de commutation (ou la broche directement, mais c'est dépassé en courant) meurt rapidement.

**PWM sur grosse charge sans transistor.** Le rapport cyclique ne change pas le courant — pleine puissance = pleine puissance. Un moteur 1 A piloté en PWM tire toujours 1 A pendant les phases haut ; la broche Arduino (20 mA max) ne tient pas. Toujours un transistor (MOSFET pour les courants élevés) ou un pont H.

**Conflit avec bibliothèques** (`Servo.h`, `Tone.h`). Certaines bibliothèques utilisent les mêmes timers que `analogWrite()`. Inclure `Servo.h` désactive le PWM sur D9 et D10 sur Uno. Lire les notes de la bibliothèque utilisée.

## Cas particulier — Lissage par filtre RC pour vraie tension

Pour transformer un PWM en vraie tension continue lissée (par exemple pour piloter une entrée analogique d'un autre appareil), un filtre RC passe-bas en sortie suffit. Constantes typiques : R = 10 kΩ, C = 1 µF, fréquence de coupure ~16 Hz — bien en dessous des 490 Hz du PWM Arduino, donc lissage efficace. Le compromis : temps de réponse de quelques dizaines de millisecondes.

Pour des applications haute précision (DAC audio, modulation rapide), préférer un vrai DAC externe (MCP4725 en I2C, par exemple).

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — toute charge à puissance variable (LED de signalisation à intensité, ventilateur de refroidissement, moteur CC) se valide d'abord en PWM sur banc isolé.
- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — quand une mesure est traitée par boucle de commande, la commande aval passe souvent par du PWM (voir [[arduino-pid|régulation PID]]).
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — pilotage des actionneurs intégrés au système complet.

Le PWM est l'outil de modulation de puissance par excellence en projet école — peu coûteux en silicium, bien outillé côté logiciel, suffisant pour 95 % des besoins de vitesse moteur et de luminosité.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-sortie-tor|Piloter une sortie TOR]] — prérequis (digitalWrite, transistors de commutation)
- [[arduino-moteur-cc|Piloter un moteur CC]] — l'application phare du PWM, via pont en H
- [[arduino-servomoteur|Piloter un servomoteur]] — un autre type de PWM, encadré par `Servo.h`
- [[arduino-timers|Timers matériels]] — pour changer la fréquence PWM
- [[pwm|PWM]] — la notion transverse
