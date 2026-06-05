---
title: Programmer une interruption externe sur Arduino
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
  - interruption
  - arduino-temporisation
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Programmer une **interruption externe** sur Arduino consiste à rattacher une fonction — la routine d'interruption ([[interruption|ISR]]) — à une broche, via **`attachInterrupt()`**, pour qu'elle s'exécute automatiquement à chaque front du signal, sans que la boucle `loop()` ait à surveiller la broche. C'est l'outil pour **compter des impulsions rapides** ou **réagir instantanément** à un événement, même quand la boucle est occupée ailleurs.

## À quoi ça sert ?

Lire une broche avec `digitalRead()` dans `loop()` ne suffit pas quand le signal est trop bref ou la boucle trop chargée : l'impulsion passe entre deux tours et n'est jamais vue. Brancher la broche sur une interruption règle le problème :

- l'impulsion est captée **par le matériel**, à l'instant exact où elle arrive — on n'en manque aucune ;
- la réaction est **immédiate**, quoi que fasse la boucle au même moment ;
- la boucle **reste libre** d'afficher, calculer ou communiquer entre deux impulsions.

C'est le réflexe dès qu'on doit compter les *tics* d'un capteur de vitesse, les passages d'un débitmètre, les crans d'un encodeur, ou réagir sans délai à un bouton critique. On le met en place en [[preuve-de-concept|preuve de concept]], au moment de capter un signal capteur.

## Procédure pas à pas

Quatre étapes : repérer une broche à interruption, écrire une ISR courte, l'attacher, puis lire son résultat proprement dans `loop()`.

### 1. Repérer une broche à interruption

Toutes les broches ne savent pas déclencher une interruption externe. Sur une **Uno / Nano**, seules **D2 et D3** le peuvent ; une **Mega** en offre six, une **Leonardo** cinq, un **ESP32** presque toutes. La fonction `digitalPinToInterrupt(broche)` traduit un numéro de broche en numéro d'interruption — on l'utilise toujours, plutôt que d'écrire le numéro d'interruption en dur, pour garder un code portable.

Prendre capture d'écran de *le tableau des broches à interruption d'une carte Arduino Uno, mettant en évidence D2 et D3*.

### 2. Écrire l'ISR

L'ISR est une fonction **`void`, sans argument ni valeur de retour**. Elle doit rester minimale : ici, incrémenter un compteur. La variable partagée avec `loop()` est déclarée **`volatile`**, sinon le programme principal pourrait n'en voir jamais la mise à jour.

```cpp
volatile unsigned long impulsions = 0;   // partagée ISR <-> loop : volatile

void compter() {                          // l'ISR : courte, sans delay ni Serial
  impulsions++;
}
```

Pas de `delay()`, pas de `Serial.print()` dans l'ISR : ces fonctions reposent sur des interruptions désactivées pendant son exécution. On compte, c'est tout — l'affichage se fera dans `loop()`.

### 3. Attacher l'interruption

Dans `setup()`, `attachInterrupt()` relie la broche, l'ISR et le **mode** de déclenchement.

```cpp
const byte BROCHE_CAPTEUR = 2;            // D2 sur une Uno

void setup() {
  pinMode(BROCHE_CAPTEUR, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(BROCHE_CAPTEUR), compter, FALLING);
  Serial.begin(9600);
}
```

Le mode dit ce qui déclenche l'ISR : `RISING` (front montant), `FALLING` (front descendant), `CHANGE` (les deux), `LOW` (tant que la broche est basse). Pour compter des impulsions, on choisit **un seul front** (`FALLING` ici) afin de compter une fois par impulsion, pas deux. `detachInterrupt(digitalPinToInterrupt(BROCHE_CAPTEUR))` permettrait de la désactiver.

### 4. Lire le compteur proprement dans `loop()`

La boucle lit le compteur **sans rien bloquer**. Comme `impulsions` est partagée avec l'ISR et fait plusieurs octets, on la copie dans une **section critique** — interruptions coupées le temps de la copie — pour ne pas lire une valeur modifiée en plein milieu. Le rythme d'affichage est donné par `millis()`, sans `delay()`.

```cpp
unsigned long tAffichage = 0;

void loop() {
  if (millis() - tAffichage >= 1000) {    // une fois par seconde
    tAffichage = millis();

    noInterrupts();                        // section critique : lecture atomique
    unsigned long n = impulsions;
    impulsions = 0;
    interrupts();

    Serial.print(n);
    Serial.println(" impulsions/s");
  }
}
```

Prendre capture ou photo de *un montage breadboard : carte Arduino Uno, capteur à effet Hall (ou débitmètre) dont la sortie va sur D2, alimenté en 5 V et GND*.

## Exemple — Compteur de vitesse à effet Hall

Un capteur à effet Hall détecte le passage d'un aimant fixé sur une roue : à chaque tour, une brève impulsion. À vitesse élevée, ces impulsions sont trop rapprochées et trop courtes pour être lues de façon fiable dans `loop()` — c'est le cas d'école de l'interruption. On compte les impulsions par interruption, et la boucle calcule la vitesse de rotation chaque seconde.

```cpp
const byte BROCHE_CAPTEUR = 2;            // sortie du capteur Hall sur D2
const byte IMPULS_PAR_TOUR = 1;          // 1 aimant => 1 impulsion par tour

volatile unsigned long impulsions = 0;
unsigned long tAffichage = 0;

void compter() {                          // ISR : une impulsion de plus
  impulsions++;
}

void setup() {
  pinMode(BROCHE_CAPTEUR, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(BROCHE_CAPTEUR), compter, FALLING);
  Serial.begin(9600);
}

void loop() {
  if (millis() - tAffichage >= 1000) {
    tAffichage = millis();

    noInterrupts();                        // copie atomique du compteur
    unsigned long n = impulsions;
    impulsions = 0;
    interrupts();

    float toursParSec = (float)n / IMPULS_PAR_TOUR;
    Serial.print(toursParSec * 60.0);     // conversion en tr/min
    Serial.println(" tr/min");
  }
}
```

L'ISR ne fait qu'incrémenter ; tout le calcul (conversion en tours par minute, affichage) se passe dans `loop()`, là où le `Serial.print()` est permis et où le temps de calcul ne gêne personne. La boucle reste réactive, et aucune impulsion n'est perdue, même à pleine vitesse. Brancher un second capteur sur D3 reviendrait à ajouter une seconde ISR — les deux comptages cohabitent sans se gêner.

## Pièges

**Oublier `volatile`.** Une variable partagée avec l'ISR sans `volatile` peut être lue obsolète : le compteur semble figé alors que l'ISR l'incrémente bien. Toute variable touchée par l'ISR et lue dans `loop()` est `volatile`.

**Lire le compteur sans section critique.** Sur une Uno (8 bits), lire un `unsigned long` (4 octets) prend plusieurs accès. Si l'interruption tombe au milieu, on lit une valeur incohérente. La copie se fait entre `noInterrupts()` et `interrupts()`.

**Mettre `delay()` ou `Serial` dans l'ISR.** Ces fonctions dépendent d'interruptions désactivées pendant l'ISR : elles s'y bloquent ou renvoient n'importe quoi. L'ISR ne fait que le strict minimum.

**Choisir une broche sans interruption.** Sur une Uno, attacher une interruption à autre chose que D2 ou D3 ne déclenche rien, silencieusement. Vérifier les broches de la carte avant de câbler.

**Compter un bouton mécanique sans anti-rebond.** Un bouton rebondit : un seul appui peut générer plusieurs fronts, donc plusieurs déclenchements. Une interruption ne filtre pas le rebond — pour compter des appuis, il faut un [[arduino-entree-tor|anti-rebond]] (logiciel ou matériel) en plus.

**Faire trop de travail à chaque impulsion.** Si l'ISR doit faire plus qu'incrémenter ou mémoriser, c'est souvent que le traitement appartient à `loop()`. L'ISR signale ; la boucle traite.

## Cas particulier — Les interruptions sur ESP32

Sur **ESP32**, presque toutes les broches acceptent une interruption, et `attachInterrupt()` s'utilise de la même façon. Une exigence s'ajoute toutefois : l'ISR doit être placée en mémoire interne rapide, avec l'attribut **`IRAM_ATTR`** devant sa déclaration (`void IRAM_ATTR compter() { … }`), faute de quoi le programme peut planter. Le partage de variables avec `volatile` et la lecture atomique restent de mise. Le détail relève du module [[esp32|ESP32]].

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — capter un signal capteur rapide (vitesse, débit, position) sur un montage isolé, pour valider la chaîne d'acquisition avant de l'intégrer.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — la mesure par interruption, validée seule, sert à l'asservissement du système complet (un comptage de tours alimente une régulation de vitesse).

Roder le couple `attachInterrupt` + lecture atomique sur un compteur simple donne le réflexe réutilisable pour tout signal trop rapide à scruter — encodeurs, débitmètres, tachymètres du projet.

## Voir aussi

- [[interruption|Interruption]] — la notion mère : mécanisme, ISR, `volatile`, atomicité (à comprendre avant de coder)
- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-temporisation|delay() vs millis()]] — la temporisation non bloquante utilisée pour cadencer l'affichage
- [[arduino-entree-tor|Lire une entrée TOR]] — l'anti-rebond, indispensable pour compter des appuis de bouton
- [[arduino-timers|Timers Arduino]] — l'autre grande source d'interruption : cadencer une tâche à intervalle régulier
