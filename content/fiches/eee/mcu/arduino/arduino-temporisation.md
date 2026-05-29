---
title: Temporiser
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

**Temporiser** est l'art de mesurer ou de produire un délai dans un programme embarqué. Arduino propose deux outils opposés en philosophie : **`delay()`**, qui suspend tout le programme pendant une durée donnée, et **`millis()`**, qui donne le temps écoulé depuis le démarrage de la carte. La progression entre les deux — passer de `delay()` aux patterns à base de `millis()` — est le saut le plus structurant entre un sketch débutant et un programme embarqué digne du nom.

## À quoi ça sert ?

Tout programme un peu sérieux a besoin de temps : faire clignoter une LED à 1 Hz, échantillonner un capteur à 10 Hz, déclencher une alarme après 3 secondes, asservir un moteur en boucle fermée tous les 20 ms. Sans gestion du temps, on a soit un programme qui s'exécute aussi vite que le processeur (sans rythme), soit un programme bloqué par `delay()` qui rate tout ce qui se passe pendant ses pauses. La fiche montre les deux outils, en argumentant pourquoi `millis()` finit par s'imposer.

## Procédure pas à pas

Quatre étapes : utiliser `delay()` pour démarrer, comprendre ses limites, basculer sur `millis()`, traiter plusieurs temps en parallèle.

### 1. `delay()` — la bombe à retardement pédagogique

```cpp
void loop() {
  digitalWrite(LED, HIGH);
  delay(500);
  digitalWrite(LED, LOW);
  delay(500);
}
```

`delay(N)` met le programme en pause pendant `N` millisecondes. Simple, lisible, utilisé dans le Blink et dans tous les premiers exemples. Limites : **rien d'autre ne peut s'exécuter pendant la pause** — pas de lecture de bouton, pas de réception série, pas de mesure capteur.

Pour les microsecondes : `delayMicroseconds(N)` (utile pour générer une impulsion courte sur le HC-SR04, par exemple).

### 2. Comprendre la limite de `delay()`

Code qui semble innocent mais qui rate tout :

```cpp
void loop() {
  digitalWrite(LED, HIGH);
  delay(1000);
  digitalWrite(LED, LOW);
  delay(1000);
  // Pendant ces 2 secondes : impossible de lire un bouton, un capteur, ou Serial
}
```

Si un bouton doit interrompre le clignotement, ce code ne le verra qu'avec jusqu'à 2 secondes de retard. C'est inacceptable dès qu'on a deux choses à faire en parallèle.

### 3. `millis()` — l'horloge non bloquante

`millis()` renvoie le nombre de millisecondes écoulées depuis le démarrage de la carte. Le programme ne s'arrête pas — il consulte l'horloge.

```cpp
unsigned long dernierToggle = 0;
const unsigned long INTERVALLE = 500;  // ms
bool etatLED = false;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  if (millis() - dernierToggle >= INTERVALLE) {
    dernierToggle = millis();
    etatLED = !etatLED;
    digitalWrite(LED_BUILTIN, etatLED);
  }

  // Ici on peut faire AUTRE CHOSE sans bloquer
  // (lire un bouton, mesurer un capteur, écouter Serial)
}
```

Le `loop()` tourne à pleine vitesse (~100 000 itérations par seconde sur Uno R3). À chaque tour, on vérifie si l'intervalle est écoulé — si oui, on agit ; sinon, on continue. Le pattern `if (millis() - last >= interval)` est l'incantation à mémoriser une fois pour toutes.

### 4. Plusieurs temps en parallèle

Avantage décisif de `millis()` : on peut gérer plusieurs cadences indépendantes dans le même `loop()`.

```cpp
unsigned long t_LED = 0,    INT_LED    = 500;
unsigned long t_MESURE = 0, INT_MESURE = 100;   // 10 Hz
unsigned long t_PRINT = 0,  INT_PRINT  = 1000;  // 1 Hz

void loop() {
  unsigned long maintenant = millis();

  if (maintenant - t_LED >= INT_LED) {
    t_LED = maintenant;
    digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
  }

  if (maintenant - t_MESURE >= INT_MESURE) {
    t_MESURE = maintenant;
    int val = analogRead(A0);
    // ... traiter la mesure
  }

  if (maintenant - t_PRINT >= INT_PRINT) {
    t_PRINT = maintenant;
    Serial.println("Vivant");
  }
}
```

Trois cadences (toggle LED 2 Hz, mesure 10 Hz, impression 1 Hz) cohabitent sans aucun `delay()`. Le `loop()` est libre d'écouter aussi un bouton, du Serial, etc.

## Exemple — Blink non bloquant + bouton réactif

Cas complet qui montre la valeur du pattern : une LED clignote à 1 Hz, **un bouton bascule la fréquence** entre 1 Hz et 5 Hz sans aucune perte de réactivité.

```cpp
const int LED = 13;
const int BOUTON = 2;

unsigned long t_LED = 0;
unsigned long intervalle = 500;  // 1 Hz par défaut (500 ms HIGH / 500 ms LOW)
bool etatLED = false;

bool dernierBouton = HIGH;
unsigned long dernierAntirebond = 0;
const unsigned long DELAI_REBOND = 30;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BOUTON, INPUT_PULLUP);
}

void loop() {
  unsigned long maintenant = millis();

  // 1. Toggle LED
  if (maintenant - t_LED >= intervalle) {
    t_LED = maintenant;
    etatLED = !etatLED;
    digitalWrite(LED, etatLED);
  }

  // 2. Lecture bouton avec anti-rebond
  bool lecture = digitalRead(BOUTON);
  if (lecture != dernierBouton) {
    dernierAntirebond = maintenant;
    dernierBouton = lecture;
  }
  if (maintenant - dernierAntirebond > DELAI_REBOND && lecture == LOW) {
    // Front descendant validé → basculer fréquence
    intervalle = (intervalle == 500) ? 100 : 500;
    dernierAntirebond = maintenant + 10000;  // verrou anti-doublon
  }
}
```

Avec un seul `delay()` dans le code, ce comportement ne serait pas possible — c'est l'illustration directe de pourquoi `millis()` est le bon outil dès qu'il y a plus d'une chose à faire à la fois.

## Pièges

**`delay()` qui bloque tout.** Le piège n°1 du débutant : un `delay(5000)` planqué dans une boucle, et tout le reste du programme attend 5 secondes. Repérer chaque `delay()` du code et se demander à chaque fois : *« puis-je le remplacer par un `millis()` ? »*.

**Overflow de `millis()` mal géré.** `millis()` est un `unsigned long` (32 bits) qui déborde après ~49,7 jours. Le test `if (millis() - last >= interval)` reste **correct au moment de l'overflow** grâce à l'arithmétique modulaire des unsigned. À l'inverse, `if (millis() >= last + interval)` est **faux** au moment de l'overflow (peut produire un blocage temporaire). Toujours préférer la première forme.

**Variable de temps en `int` ou `long` signé.** Stocker un résultat de `millis()` dans un `int` (16 bits sur Uno R3) provoque un overflow toutes les 32 secondes. Toujours `unsigned long` pour les variables qui mémorisent un timestamp.

**`delayMicroseconds(N)` au-delà de 16383.** La fonction n'est précise que pour des durées inférieures à ~16 ms (16383 µs sur Uno R3). Pour plus, utiliser `delay()` (en millisecondes) ou un compteur basé sur `micros()`.

**`micros()` aussi déborde.** `micros()` (microsecondes depuis le démarrage) est aussi `unsigned long` et déborde après ~71 minutes. Pour des chronométrages courts, c'est sans impact. Pour des durées longues, préférer `millis()`.

**Mélanger les unités.** `delay(1000)` = 1 seconde, `delayMicroseconds(1000)` = 1 milliseconde. Erreur classique : remplacer l'une par l'autre sans ajuster — la LED clignote 1000× trop vite ou trop lentement.

**Coller plusieurs `if (millis()…)` qui réinitialisent le même compteur.** Chaque cadence indépendante doit avoir sa propre variable `unsigned long`. Sinon les cadences se polluent et s'interrompent.

## Cas particulier — Cadences sub-milliseconde et temps réel

Pour des asservissements rapides (PID à 1 kHz, lecture d'encodeur à 10 kHz, génération d'un signal précis), le couple `millis()` + `loop()` polling atteint sa limite — la latence devient incertaine selon ce que le reste du `loop()` est en train de faire. Trois pistes :

- **`micros()`** pour le même pattern à finesse microseconde — gain limité par la durée du `loop()`.
- **Timers matériels** + interruption périodique — voir [[arduino-timers|timers matériels]] et [[arduino-interruptions|interruptions]].
- **FreeRTOS** ou **systèmes coopératifs** — pour multi-tâches structurées (sur ESP32 typiquement).

## Raccrochage projet

- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — toute boucle de mesure-action (asservissement, échantillonnage capteur) repose sur une cadence précise, à structurer avec `millis()` dès le premier code.
- **Toute la [[integration-et-tests|phase d'intégration et tests]]** — un test qui mesure le temps de réponse d'une fonction s'appuie sur `millis()` ou `micros()` pour les datations.

Faire le pas `delay() → millis()` une fois pour toutes en début de PoC évite de devoir réécrire intégralement la structure du code quand le projet réclame deux choses en parallèle — ce qui arrive *toujours* en pratique.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-entree-tor|Lire une entrée TOR]] — utilise `millis()` pour l'anti-rebond non bloquant
- [[arduino-programmation-non-bloquante|Programmation non bloquante]] — généralisation du pattern à l'ensemble du code
- [[arduino-interruptions|Interruptions]] — pour les événements ultra-rapides où `millis()` ne suffit pas
- [[arduino-timers|Timers matériels]] — pour la périodicité au µs près
