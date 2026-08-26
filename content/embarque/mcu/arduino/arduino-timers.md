---
title: Utiliser un timer matériel sur Arduino
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
  - timer
  - interruption
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Utiliser un **timer matériel** sur Arduino consiste à configurer un compteur interne pour exécuter une action à **intervalle précis** (typiquement via une bibliothèque comme **TimerOne**, qui masque les registres). Le timer déclenche une [[interruption|interruption]] à la fréquence choisie, ce qui donne une cadence parfaitement régulière qu'une boucle `millis()` ne garantit pas, et permet aussi de régler la fréquence d'un [[pwm|signal PWM]].

## À quoi ça sert ?

Pour cadencer une tâche, le réflexe du débutant est `millis()` dans `loop()`. Cela suffit pour un clignotement, mais la cadence **dérive** dès que la boucle fait du travail variable : entre deux passages, l'intervalle réel n'est jamais tout à fait constant. Pour un échantillonnage, un filtrage ou une [[arduino-pid|régulation]], ce flottement fausse les calculs. Un timer matériel règle le problème :

- il déclenche l'action **par interruption**, à la fréquence exacte programmée, **quoi que fasse la boucle** ;
- il libère `loop()` du rôle de chronomètre ;
- il sert aussi à **changer la fréquence d'un PWM** (vitesse de moteur, scintillement d'une LED).

On le met en place en [[preuve-de-concept|preuve de concept]], dès qu'une fonction réclame une base de temps fiable. Pour de la temporisation souple et non critique, [[arduino-temporisation|`millis()`]] reste plus simple : le timer matériel se réserve au **précis** et au **régulier**.

## Procédure pas à pas

Quatre étapes : choisir un timer libre, le configurer via la bibliothèque, y attacher la fonction périodique, puis garder cette fonction minimale.

### 1. Choisir un timer libre

Une Uno a **trois timers** — Timer0, Timer1, Timer2 — mais ils ne sont pas tous disponibles : Timer0 fait tourner `millis()` et `delay()`, et plusieurs sont mobilisés par `analogWrite()` selon les broches. **Timer1** (16 bits) est le plus souvent libre et le plus pratique, à condition de ne pas utiliser la bibliothèque Servo, qui se l'approprie. Toucher à Timer0 dérègle `millis()`, donc à éviter (voir la notion [[timer|timer]], ressource partagée).

### 2. Configurer le timer via la bibliothèque

La bibliothèque **TimerOne** (à installer via le [[arduino-bibliotheques|gestionnaire de bibliothèques]]) règle la période en microsecondes en une ligne. Pour 100 Hz, la période vaut 10 000 µs.

```cpp
#include <TimerOne.h>

void setup() {
  Timer1.initialize(10000);   // période en microsecondes : 10 000 µs = 100 Hz
}
```

La bibliothèque calcule pour nous le prédiviseur et la valeur de comparaison correspondants : c'est exactement le travail décrit dans la notion [[timer|timer]], fait automatiquement.

TimerOne ne fonctionne que sur les cartes **AVR** (Uno R3, Nano, Mega). Sur une **Uno R4** (Renesas) ou un **ESP32**, l'architecture des timers diffère et l'on passe par d'autres bibliothèques (`FspTimer` sur R4, timers natifs `timerBegin()` sur [[esp32|ESP32]]). Le principe (un compteur matériel qui déclenche une interruption périodique) reste identique.

### 3. Attacher la fonction périodique

`Timer1.attachInterrupt()` relie une fonction au timer : elle sera appelée **comme une routine d'interruption**, à chaque période.

```cpp
void onTimer() {        // exécutée toutes les 10 ms, en interruption
  // ... action régulière ...
}

void setup() {
  Timer1.initialize(10000);
  Timer1.attachInterrupt(onTimer);
}
```

Cette fonction est une **ISR** : elle obéit aux règles des [[interruption|interruptions]] — courte, sans `delay()` ni `Serial`, et toute variable partagée avec `loop()` déclarée `volatile`.

### 4. Garder l'ISR minimale, traiter dans `loop()`

L'ISR ne fait que le strict nécessaire (souvent **lever un drapeau**) et c'est `loop()` qui effectue le travail lourd (lire, calculer, afficher) quand elle voit le drapeau levé. Ainsi le `Serial`, interdit dans l'ISR, se fait au bon endroit.

![Traceur série de l'IDE Arduino affichant des échantillons régulièrement espacés dans le temps.|600](/ressources/img/arduino-timers/traceur-echantillons.png)

## Exemple — Échantillonner un capteur à 100 Hz

On lit une entrée analogique exactement cent fois par seconde, pour alimenter un filtrage ou une régulation à pas constant. Le timer cadence, l'ISR lève un drapeau, la boucle lit et envoie la mesure.

```cpp
#include <TimerOne.h>

const int CAPTEUR = A0;
volatile bool echeance = false;     // drapeau partagé ISR <-> loop : volatile

void onTimer() {                     // ISR : toutes les 10 ms, juste lever le drapeau
  echeance = true;
}

void setup() {
  Serial.begin(115200);
  Timer1.initialize(10000);          // 10 000 µs = 100 Hz
  Timer1.attachInterrupt(onTimer);
}

void loop() {
  if (echeance) {                    // déclenché à cadence régulière
    echeance = false;
    int mesure = analogRead(CAPTEUR);
    Serial.println(mesure);          // Serial ici, dans loop() — pas dans l'ISR
  }
}
```

L'échantillonnage tombe toutes les 10 ms **quelle que soit la charge de la boucle**, parce que c'est le matériel qui tient l'horloge. L'ISR se contente de signaler l'échéance. Toute la logique reste dans `loop()`. Comparée à une cadence en `millis()`, la régularité est sans dérive, ce qui change tout pour un traitement du signal.

![Chronogramme comparant deux cadences pour une même période visée de 10 ms : la cadence logicielle (millis) dérive — ses instants réels glissent vers la droite à mesure que la charge de loop() varie, le retard s'accumule ; la cadence matérielle (timer) tombe exactement sur la grille, intervalle constant sans dérive.|680](/ressources/img/arduino-timers/cadence-millis-vs-timer.svg)

## Cas particulier — Sous le capot : les registres

Ce que fait TimerOne, on peut l'écrire directement avec les **registres** de l'AVR, en mode CTC (*Clear Timer on Compare*). C'est plus verbeux et **spécifique à la puce** (ATmega328P de l'Uno), mais ça montre la mécanique réelle décrite dans la notion : un prédiviseur, une valeur de comparaison, une interruption sur comparaison. Les opérations bit-à-bit qu'il emploie — masque, mise à 1 avec `|=`, décalage `<<` — sont détaillées dans [[manipulation-de-bits|la manipulation de bits]]. L'ISR `TIMER1_COMPA_vect` lève le même drapeau `volatile echeance` que l'exemple plus haut.

```cpp
void setup() {
  cli();                       // on coupe les interruptions le temps de configurer
  TCCR1A = 0;
  TCCR1B = 0;
  TCNT1  = 0;
  OCR1A  = 2499;               // f = 16 MHz / (prescaler 64 × (2499 + 1)) = 100 Hz
  TCCR1B |= (1 << WGM12);      // mode CTC
  TCCR1B |= (1 << CS11) | (1 << CS10);   // prédiviseur 64
  TIMSK1 |= (1 << OCIE1A);     // interruption sur comparaison A
  sei();                       // on réactive les interruptions
}

ISR(TIMER1_COMPA_vect) {       // la routine, déclenchée à chaque comparaison
  echeance = true;
}
```

> [!info] Comment lire ce code
> Le bloc se lit en cinq temps. `cli()` **coupe les interruptions** le temps de configurer (sinon l'une d'elles pourrait tomber sur un timer à moitié réglé). On remet à zéro les registres de contrôle (`TCCR1A`/`TCCR1B`) et le compteur (`TCNT1`). `OCR1A` est la **valeur de comparaison** : le compteur monte jusqu'à elle, puis l'interruption part. C'est elle qui fixe la période. `WGM12` choisit le **mode CTC** (le compteur se remet à zéro à chaque comparaison). `CS11 | CS10` règlent le **prédiviseur à 64**. `OCIE1A` **autorise l'interruption** sur comparaison A. Enfin `sei()` **réactive les interruptions**. Dès lors, `ISR(TIMER1_COMPA_vect)` s'exécute toute seule à chaque comparaison.

La formule `f = 16 MHz / (prescaler × (OCR1A + 1))` est la traduction concrète du *fréquence ÷ (prédiviseur × valeur)* de la notion. En projet, la bibliothèque suffit presque toujours. Ce niveau ne sert que pour un réglage fin ou pour comprendre un code existant.

## Cas particulier — Changer la fréquence d'un PWM

`analogWrite()` produit un [[pwm|PWM]] à une fréquence par défaut fixe (environ 490 Hz sur la plupart des broches d'une Uno). Quand cette fréquence pose problème — un moteur qui siffle dans l'audible, une LED qui scintille à la caméra — on la modifie en reconfigurant le **prédiviseur** du timer qui pilote la broche. Attention : ce réglage affecte **toutes les broches PWM portées par le même timer**, et toucher Timer0 dérègle `millis()`. C'est un usage avancé, à manier en connaissant la carte des timers.

## Pièges

**Reconfigurer Timer0.** Il fait tourner `millis()` et `delay()` : le détourner casse toute la temporisation logicielle du programme. Sauf besoin précis, on le laisse tranquille.

**Oublier `volatile`.** Une variable partagée entre l'ISR du timer et `loop()` sans `volatile` peut être lue obsolète : le drapeau semble ne jamais se lever. Règle commune à toutes les [[interruption|interruptions]].

**Faire trop dans l'ISR du timer.** `Serial`, calculs lourds, `delay()` : interdits dans l'ISR. Elle signale, la boucle traite. Une ISR qui dépasse la période se fait rattraper par la suivante et le système décroche.

**Période trop courte pour le travail demandé.** Cadencer à 10 kHz une ISR qui met plus de 100 µs à s'exécuter ne laisse plus de temps à `loop()`. Vérifier que la période est cohérente avec ce qu'on lui demande de faire.

**Conflit de bibliothèques sur le même timer.** TimerOne et Servo veulent toutes deux Timer1 : les utiliser ensemble produit des comportements erratiques. Un timer, un seul maître.

**Croire qu'une cadence `millis()` vaut une cadence timer.** Pour du précis, non : seule la base matérielle garantit la régularité. C'est le critère de choix entre [[arduino-temporisation|`millis()`]] et timer.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — échantillonner ou cadencer une fonction à pas constant sur un montage isolé, prérequis d'une mesure ou d'une régulation propre.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — la boucle de commande du système (une [[arduino-pid|régulation PID]], par exemple) tourne à période fixe imposée par un timer, condition de sa stabilité.

Disposer d'une base de temps matérielle fiable est ce qui sépare un montage qui « marche à peu près » d'un système dont le comportement temporel est maîtrisé, indispensable dès qu'on asservit.

## Voir aussi

- [[timer|Timer]] — la notion mère : compteur, prédiviseur, débordement, comparaison (à comprendre avant de coder)
- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[interruption|Interruption]] — le mécanisme par lequel le timer exécute sa routine périodique
- [[arduino-temporisation|delay() vs millis()]] — la temporisation logicielle, l'alternative non précise
- [[arduino-sortie-pwm|Piloter une sortie PWM]] — `analogWrite()`, dont ce tuto permet de régler la fréquence
- [[arduino-pid|Régulation PID]] — un usage direct de l'échantillonnage à pas constant
- [[esp32|ESP32]] — timers natifs (`timerBegin`), à la place de TimerOne qui est propre à l'AVR
