---
title: Programmer une interruption externe sur Arduino
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
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

| Carte | Broches à interruption externe |
|---|---|
| **Uno, Nano, Mini** (ATmega328) | **D2**, **D3** |
| Mega, Mega2560 | D2, D3, D18, D19, D20, D21 |
| Leonardo, Micro | D0, D1, D2, D3, D7 |
| ESP32 | presque toutes les GPIO |

Deux pièges se lisent dans ce tableau. Sur une Mega, **D20 et D21 sont aussi les broches [[i2c|I2C]]** : elles ne sont plus disponibles en interruption dès qu'un bus I2C tourne. Et sur une Leonardo, **D0 et D1 sont le port série** — en pratique, il reste D2, D3 et D7.

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

La boucle lit le compteur **sans rien bloquer**, à un rythme donné par `millis()` (pas de `delay()`). Une précaution s'impose : `impulsions` fait quatre octets, et sur une Uno (8 bits) le processeur la lit en **plusieurs accès successifs**. Si une impulsion arrive *entre* ces accès, l'ISR modifie la variable au milieu de la lecture et `loop()` récupère une valeur incohérente (moitié ancienne, moitié neuve).

On protège donc la lecture par une **section critique** : `noInterrupts()` **désactive** momentanément toutes les interruptions, on copie la valeur dans `n` (et on remet `impulsions` à 0), puis `interrupts()` les **réactive**. Pendant ces deux ou trois instructions, aucune ISR ne peut s'exécuter : la copie est **atomique** — tout ou rien, jamais à moitié. Cette parenthèse doit rester la plus courte possible : interruptions coupées trop longtemps, on finirait justement par manquer une impulsion.

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

![Montage : capteur à effet Hall (VCC/GND/OUT) relié à l'Arduino — VCC au 5V, GND au GND, sortie OUT sur la broche D2 (BROCHE_CAPTEUR) en INPUT_PULLUP. La broche porte le nom du code.|560](/ressources/img/arduino-interruptions/montage.svg)

## Exemple — Compteur de vitesse à effet Hall

Un capteur à effet Hall détecte le passage d'un aimant fixé sur une roue : à chaque tour, une brève impulsion. À vitesse élevée, ces impulsions sont trop rapprochées et trop courtes pour être lues de façon fiable dans `loop()` — c'est le cas d'école de l'interruption. On compte les impulsions par interruption, et la boucle calcule la vitesse de rotation chaque seconde.

![Chronogramme du comptage : la broche D2 est au repos à HIGH et chute à LOW à chaque passage d'aimant ; chaque front descendant déclenche l'ISR qui fait impulsions++ (1, 2, 3, 4) ; une fois par seconde, loop() lit le compteur, calcule les tr/min et le remet à zéro.|640](/ressources/img/arduino-interruptions/chronogramme-comptage.svg)

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

> [!info] Comment lire ce code
> Une fois par seconde, `loop()` relève le compteur. La copie `n = impulsions` puis la remise `impulsions = 0` sont enfermées dans la section critique `noInterrupts()` / `interrupts()` (cf. étape 4) : on lit **et** on remet à zéro sans qu'une impulsion ne se glisse entre les deux. Compter sur une seconde puis repartir de zéro transforme un total en **fréquence** (impulsions par seconde) ; la dernière ligne la convertit en tours par minute (`× 60`).

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
- [[esp32|ESP32]] — les interruptions y exigent l'attribut `IRAM_ATTR` sur l'ISR
