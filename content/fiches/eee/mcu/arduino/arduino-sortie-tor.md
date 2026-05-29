---
title: Piloter une sortie TOR
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-gpio
aa: []
draft: false
---

Une **sortie TOR** (Tout Ou Rien) commute une charge entre deux états : alimentée ou éteinte. LED de signalisation, buzzer, relais de puissance, ventilateur sur transistor — toutes ces charges se pilotent par `digitalWrite()`. La fiche couvre les trois cas de figure rencontrés en projet école : pilotage direct sur petite charge (LED), pilotage via transistor pour charge moyenne (buzzer, ventilateur), pilotage via module relais pour charge secteur ou inductive importante.

## À quoi ça sert ?

Toute commande binaire d'un actionneur — allumer un témoin, déclencher une vanne, mettre en route un ventilateur, ouvrir un secteur électrique — passe par une sortie TOR. Le bon choix de l'interface (broche directe, transistor, module relais) dépend de deux grandeurs : le **courant** appelé par la charge, et la **tension** d'alimentation de la charge. La règle de base à retenir : **20 mA et 5 V maximum directement sur une broche** d'Arduino Uno. Au-delà, on intercale un composant tampon.

## Procédure pas à pas

Quatre étapes : choisir l'interface, câbler, écrire le code, vérifier la consommation.

### 1. Choisir l'interface selon la charge

| Charge | Tension | Courant | Interface |
|---|---|---|---|
| LED standard | 1,8-3,3 V | 5-20 mA | Broche directe + résistance série |
| Buzzer passif, petit relais 5 V | 5 V | 20-100 mA | Transistor NPN (2N2222, BC547) ou MOSFET (2N7000) |
| Module relais 5 V (avec opto) | 5 V logique | < 20 mA logique | Broche directe (le module gère la charge) |
| Ventilateur 12 V, moteur, ampoule secteur | > 5 V | > 100 mA | Module relais ou pont H, jamais sur broche |

Pour la suite de la procédure, on prend les trois cas usuels : **LED** (broche directe), **buzzer** (transistor), **module relais** (broche directe vers le module).

### 2. Câbler

**LED** : anode (patte longue, +) → résistance 220 Ω à 1 kΩ → broche D8 ; cathode (patte courte, −) → GND.

**Buzzer via transistor NPN 2N2222** : émetteur → GND ; collecteur → buzzer broche − ; buzzer broche + → +5 V ; base → résistance 1 kΩ → broche D9. (La résistance limite le courant base.)

**Module relais 5 V** : broche IN du module → broche D10 ; VCC du module → +5 V Arduino ; GND du module → GND Arduino. La charge secteur se branche **sur les bornes COM + NO du module**, l'Arduino n'y touche jamais.

Prendre capture d'écran ou photo de *un montage breadboard avec carte Arduino Uno, LED + résistance sur D8, transistor 2N2222 + buzzer sur D9, et module relais 5 V branché sur D10*.

### 3. Écrire le code

Le code est identique quelle que soit l'interface — le `digitalWrite()` ne sait pas s'il pilote une LED ou un module relais.

```cpp
const int LED    = 8;
const int BUZZER = 9;
const int RELAIS = 10;

void setup() {
  pinMode(LED,    OUTPUT);
  pinMode(BUZZER, OUTPUT);
  pinMode(RELAIS, OUTPUT);
}

void loop() {
  digitalWrite(LED,    HIGH);  // LED allumée
  digitalWrite(BUZZER, HIGH);  // Buzzer activé
  digitalWrite(RELAIS, HIGH);  // Relais collé
  delay(2000);
  digitalWrite(LED,    LOW);
  digitalWrite(BUZZER, LOW);
  digitalWrite(RELAIS, LOW);
  delay(2000);
}
```

> [!warning]
> **Logique du relais souvent inversée.** Beaucoup de modules relais 5 V chinois (LU-5V, JQC-3FF) sont *actifs au niveau bas* : `digitalWrite(RELAIS, LOW)` colle le relais, `HIGH` le relâche. Vérifier sur le module ou par essai — la LED rouge du module s'allume quand le relais est collé.

### 4. Vérifier la consommation

Avant de presser *Téléverser* sur un montage neuf, faire mentalement la somme :

- Combien de mA tire chaque charge directe ?
- Combien de mA total cela représente sur la carte ?
- L'alimentation USB (max 500 mA depuis un PC) est-elle suffisante ?

Un Arduino qui redémarre à intervalle régulier dès qu'on active un actionneur est presque toujours sous-alimenté. La parade : alimentation externe sur Vin (7-12 V) ou jack DC, ou alimentation séparée pour les charges.

## Exemple — Buzzer alarme + LED clignotante

Un cas typique : déclencher une alarme visuelle et sonore sur événement (ici, simulation par minuterie).

```cpp
const int LED    = 8;
const int BUZZER = 9;

void setup() {
  pinMode(LED,    OUTPUT);
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  // 3 bips courts, LED clignote
  for (int i = 0; i < 3; i++) {
    digitalWrite(LED,    HIGH);
    digitalWrite(BUZZER, HIGH);
    delay(200);
    digitalWrite(LED,    LOW);
    digitalWrite(BUZZER, LOW);
    delay(200);
  }
  delay(3000);  // pause avant la prochaine salve
}
```

Le code aurait la même structure pour piloter un module relais à la place du buzzer — seule l'interface matérielle change.

## Pièges

**Charge dépasse 20 mA par broche.** Symptôme : la sortie ne tient pas la tension, la broche chauffe, parfois Arduino redémarre. Toujours mesurer (ou estimer haut) le courant nominal de la charge avant de la brancher directement.

**LED sans résistance.** La LED grille, ou la broche s'abîme. Toujours 220 Ω à 1 kΩ en série pour une LED standard sur 5 V.

**Buzzer actif vs buzzer passif.** Un *buzzer actif* (avec oscillateur intégré) sonne dès qu'on lui applique sa tension nominale — `digitalWrite(BUZZER, HIGH)` suffit. Un *buzzer passif* (transducteur piézo brut) ne sonne pas en TOR — il faut un signal carré (voir `tone()` ou [[arduino-sortie-pwm|PWM]]).

**Charge inductive sans diode de roue libre.** Bobine de relais, moteur, électrovanne : la coupure du courant produit une surtension qui peut détruire le transistor de commutation. Une **diode 1N4007 en inverse en parallèle de la bobine** absorbe cette surtension. Les modules relais commerciaux l'intègrent déjà.

**Module relais alimenté sur 5 V Arduino + grosse charge.** Un module relais standard tire ~70 mA quand il colle. Plusieurs modules + Arduino + autres charges → on dépasse vite les 200 mA totaux. Alimentation externe pour le module dès qu'il y en a plus d'un.

**Logique inversée du module relais oubliée.** Le code semble fonctionner à l'envers, le relais colle alors qu'on l'a mis à `LOW`. C'est volontaire — l'optocoupleur du module inverse la logique. Lire la doc du module ou tester.

**Sortie TOR pour un moteur CC.** Un moteur veut un sens (avant/arrière) et une vitesse — il faut un pont H, pas une sortie TOR (voir [[arduino-moteur-cc|piloter un moteur CC]]). Une sortie TOR sur moteur ne fait qu'allumer le moteur à vitesse maximale dans un seul sens.

## Cas particulier — Charges secteur 230 V

Le pilotage de charges secteur (lampe d'éclairage, électrovanne 230 V, pompe) **ne se fait jamais directement** — toujours par module relais ou par contacteur statique (SSR). Trois points de vigilance :

- **Isolation galvanique** entre le 5 V logique et le secteur : seuls les modules avec optocoupleur en entrée la garantissent (`PC817`, `EL817`).
- **Calibre du contact** : un relais bas de gamme est donné pour ~10 A à 250 V — suffisant pour une lampe ou une pompe domestique, insuffisant pour un radiateur.
- **Sécurité électrique** : tout câblage 230 V dans un projet école se fait sous supervision, avec disjoncteur amont et protection mécanique des bornes nues.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — chaque actionneur binaire (LED de signalisation, buzzer d'alarme, relais d'alimentation d'un sous-système) se valide en TOR avant d'être intégré à la boucle de commande.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — validation pièce-par-pièce avant tests pyramidaux.

Choisir l'interface (broche directe / transistor / module relais) en amont de la commande, sur les datasheets des composants — et pas après avoir grillé le premier — fait la différence entre une PoC qui converge et une qui s'éternise sur des bugs hybrides matériel/logiciel.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-gpio|Configurer les GPIO Arduino]] — prérequis (modes OUTPUT, courants max)
- [[arduino-entree-tor|Lire une entrée TOR]] — la lecture correspondante
- [[arduino-sortie-pwm|Piloter une sortie PWM]] — pour moduler l'intensité d'une LED ou la vitesse d'un moteur
- [[arduino-moteur-cc|Piloter un moteur CC]] — pont en H pour moteur avec sens
- [[lire-une-datasheet|Lire une datasheet]] — pour vérifier les courants et tensions des modules
