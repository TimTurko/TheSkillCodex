---
title: Configurer les GPIO Arduino
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

Les **GPIO** (*General Purpose Input/Output*) d'une carte Arduino sont les broches numériques configurables en entrée ou en sortie pour lire ou émettre un signal binaire (0 V / 5 V sur Uno R3). Configurer correctement un GPIO est le geste de base de tout programme embarqué — oublier `pinMode()`, confondre les modes ou ignorer l'état flottant d'une entrée est la cause la plus fréquente des comportements imprévisibles en début de projet.

## À quoi ça sert ?

Tous les capteurs et actionneurs binaires (bouton, fin de course, LED, relais, buzzer, capteur de présence) passent par les GPIO. Trois modes couvrent ~80 % des montages Arduino : **`INPUT`** (entrée flottante), **`INPUT_PULLUP`** (entrée tirée au haut par résistance interne), **`OUTPUT`** (sortie à pousser à `HIGH` ou `LOW`). Comprendre ces trois modes et le câblage qui va avec rend lisible la plupart des autres tutoriels Arduino.

## Procédure pas à pas

Quatre étapes : identifier la broche, configurer le mode, lire ou écrire, vérifier le câblage.

### 1. Identifier les broches numériques

Sur Arduino Uno, les broches **D0 à D13** sont des GPIO numériques. D0 et D1 sont aussi utilisées par l'USB (TX/RX) — à éviter pour autre chose. Les broches **A0 à A5** peuvent aussi servir de GPIO numériques (référencées comme `A0`, `A1`, ..., ou comme `14`, `15`, ..., `19`).

Sur Mega 2560 : D0 à D53. Sur Nano : D2 à D13 + A0-A7 (A6/A7 ne fonctionnent qu'en entrée analogique).

Prendre capture d'écran de *le brochage officiel de l'Arduino Uno R3, avec les broches numériques D0-D13 visibles*.

### 2. Configurer le mode dans `setup()`

Une ligne `pinMode()` par broche utilisée :

```cpp
const int LED = 13;
const int BOUTON = 2;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BOUTON, INPUT_PULLUP);
}
```

- **`OUTPUT`** — la broche pilote un signal vers l'extérieur (LED, relais, transistor).
- **`INPUT`** — la broche lit un signal extérieur sans aucune polarisation interne. **Si rien n'est branché, la lecture est aléatoire** (bruit 50 Hz capté par l'antenne formée par le fil) — à n'utiliser que si une résistance externe maintient l'entrée à un niveau connu.
- **`INPUT_PULLUP`** — la broche lit un signal mais une résistance interne d'environ 20 à 50 kΩ tire le potentiel vers `+5 V`. **Logique inversée** : la broche lit `HIGH` au repos, `LOW` quand on la connecte à GND (typiquement par un bouton).

### 3. Lire ou écrire dans `loop()`

```cpp
void loop() {
  int etat = digitalRead(BOUTON);  // HIGH ou LOW
  if (etat == LOW) {                // bouton appuyé (logique pullup inversée)
    digitalWrite(LED, HIGH);
  } else {
    digitalWrite(LED, LOW);
  }
}
```

`digitalRead()` renvoie `HIGH` ou `LOW`. `digitalWrite()` accepte les mêmes constantes (ou `1` / `0`).

### 4. Câbler proprement

- **Sortie sur LED** : une résistance série de 220 Ω à 1 kΩ entre la broche et l'anode (+) de la LED, cathode (-) vers GND. **Sans résistance, la LED brûle ou la broche s'abîme.**
- **Entrée sur bouton, mode `INPUT_PULLUP`** : un côté du bouton sur la broche, l'autre côté sur GND. Rien d'autre.
- **Entrée sur bouton, mode `INPUT`** : il faut une résistance externe (pull-up vers `+5 V` ou pull-down vers GND, ~10 kΩ) pour donner un état de repos défini.

Prendre capture d'écran ou photo de *un montage breadboard avec carte Arduino Uno, bouton entre D2 et GND, et LED + résistance 220 Ω entre D13 et GND*.

## Exemple — Bouton qui allume une LED

Câblage et code complets pour valider la chaîne `pinMode` + `digitalRead` + `digitalWrite`.

**Câblage** :
- LED anode (+) → résistance 220 Ω → broche D13.
- LED cathode (-) → GND.
- Bouton entre la broche D2 et GND (configuration `INPUT_PULLUP`, pas de résistance externe).

```cpp
const int LED = 13;
const int BOUTON = 2;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BOUTON, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BOUTON) == LOW) {
    digitalWrite(LED, HIGH);
  } else {
    digitalWrite(LED, LOW);
  }
}
```

Téléversez, appuyez sur le bouton — la LED s'allume. Relâchez — elle s'éteint. Si vous tenez le bouton appuyé en permanence, c'est probablement que vous avez câblé un côté du bouton sur `+5 V` au lieu de GND (la résistance de pull-up perd la bataille face à un court-circuit franc).

## Pièges

**`pinMode()` oublié.** Une broche non configurée se comporte de manière indéfinie (état par défaut variable selon la carte). Symptôme : le code semble correct mais rien ne marche.

**Confondre `INPUT` et `INPUT_PULLUP`.** En `INPUT` sans résistance externe, la broche flotte — lecture aléatoire qui peut sembler répondre au toucher de la main (le corps fait antenne 50 Hz). En `INPUT_PULLUP`, la broche est définie au repos — c'est presque toujours le bon choix pour un bouton.

**Logique inversée du pull-up.** Un bouton en `INPUT_PULLUP` lit `LOW` quand appuyé. Un test `if (digitalRead(BOUTON) == HIGH)` allumera la LED quand le bouton est **relâché** — inverse du comportement attendu.

**LED branchée sans résistance.** Une LED rouge consomme ~20 mA sous 2 V. Branchée directement entre 5 V et GND, elle tire un courant excessif qui la grille (ou abîme la broche). Toujours une résistance série, calculée pour la chute de tension de la LED (220 Ω à 1 kΩ pour une LED standard sur 5 V).

**Courant max dépassé.** Chaque broche supporte 20 mA en régime nominal (40 mA en absolu — destruction au-delà). Le total sur toutes les broches d'un ATmega328P ne doit pas dépasser ~200 mA. Pour piloter plus (relais, moteur, bandeau LED), passer par un transistor ou un module dédié.

**`digitalRead()` sur broche en `OUTPUT`.** Possible mais inutile — on lit l'état qu'on vient d'écrire. Probablement le signe d'un mode mal configuré.

**Broche flottante non utilisée.** Une broche déclarée `INPUT` sans rien branché capte du bruit. Si on la lit, on récupère aléatoire. Pour des broches inutilisées qu'on veut lire un jour, soit `INPUT_PULLUP`, soit broche externe tirée à un niveau défini.

## Cas particulier — Broches PWM, ADC et bus

Toutes les broches numériques ne sont pas équivalentes :

- **PWM** — sur Uno, D3, D5, D6, D9, D10, D11 (marquées `~`) génèrent un signal PWM avec `analogWrite()` (voir [[arduino-sortie-pwm|piloter une sortie PWM]]).
- **ADC** — A0 à A5 sont les entrées analogiques (`analogRead`), avec un rôle GPIO en alternative.
- **Bus** — D0/D1 (UART), A4/A5 (I2C), D10-D13 (SPI). Utiliser une broche en GPIO la rend indisponible pour son bus dédié.

Le brochage officiel de votre carte est la référence — gardez-le à portée de main.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — premiers essais individuels d'entrée et de sortie (bouton, LED, fin de course) avant d'assembler.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — validation pièce-par-pièce des E/S avant tests pyramidaux.

Maîtriser les trois modes GPIO sur un petit montage isolé est la fondation sur laquelle reposent presque tous les tutoriels Arduino suivants — pas la peine d'enchaîner sur les capteurs ou les actionneurs avant que ce socle ne soit ferme.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[gpio|GPIO]] — notion transverse (modes, état au boot, GPIO sur autres familles)
- [[arduino-entree-tor|Lire une entrée TOR]] — la suite naturelle (bouton avec anti-rebond)
- [[arduino-sortie-tor|Piloter une sortie TOR]] — la sortie au-delà de la LED (relais)
- [[arduino-gpio-boot|État des GPIO à l'allumage]] — broches sensibles avant `setup()`
- [[niveaux-de-tension|Niveaux de tension]] — 3,3 V vs 5 V, compatibilité capteurs
