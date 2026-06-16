---
title: Programmation non bloquante
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
  - arduino-temporisation
  - machine-a-etats
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

La **programmation non bloquante** est une **façon de structurer** un programme embarqué pour que la boucle principale ne s'arrête **jamais**. Au lieu d'attendre avec `delay()`, chaque tâche avance un peu à chaque tour de `loop()` puis rend la main : le système peut ainsi mener **plusieurs activités de front** et rester réactif. Ce n'est pas une fonction à appeler, mais une **discipline d'architecture** qui s'appuie sur la [[arduino-temporisation|temporisation par `millis()`]] et sur les [[machine-a-etats|machines à états]].

![Comparaison de deux boucles principales. À gauche, l'approche bloquante : la boucle alterne une action courte et un long delay() pendant lequel tout le programme est figé, et un bouton pressé pendant le delay() n'est vu qu'à la fin. À droite, l'approche non bloquante : la boucle tourne en continu et distribue le travail à de petites tâches exécutées chacune à son tour, et un bouton pressé est vu dès le tour suivant.](/ressources/img/arduino-programmation-non-bloquante/bloquant-vs-non-bloquant.svg)

## À quoi ça sert ?

Un microcontrôleur ne fait **qu'une chose à la fois**, mais un système réel doit en mener plusieurs : clignoter, lire un capteur, écouter un bouton, communiquer — apparemment en même temps. `delay()` rend cela impossible : pendant la pause, **tout** est figé. Tant qu'un programme ne fait qu'une chose, on ne le remarque pas ; dès qu'il en fait deux, le blocage devient ingérable — c'est le mur que tout débutant finit par heurter.

La programmation non bloquante érige une **règle de conception** : *aucune fonction ne doit bloquer, et `loop()` doit toujours pouvoir reboucler*. La boucle devient un **distributeur** qui, à chaque tour, donne brièvement la parole à chaque tâche. Le gain : un système **réactif** (il voit un événement au tour suivant, pas après une pause), **évolutif** (ajouter une activité = ajouter une tâche), et **lisible** (chaque tâche est autonome). C'est l'architecture par défaut de tout programme embarqué qui fait plus d'une chose. On la met en place dès la [[preuve-de-concept|preuve de concept]], au premier montage qui combine plusieurs fonctions.

## Procédure pas à pas

Quatre étapes : poser la règle, rendre chaque tâche autonome, les assembler dans `loop()`, puis savoir refactorer un code bloquant.

### 1. Bannir `delay()`, penser en tâches

Le basculement mental : ce que le système « fait » se découpe en **tâches**, et chaque tâche devient une **fonction appelée à chaque tour** de `loop()`, qui agit si c'est le moment et **rend la main immédiatement**. Plus aucune fonction n'attend. `loop()` n'est plus une suite d'actions, mais une liste de tâches qu'on passe en revue très vite.

### 2. Donner à chaque tâche son propre temps et son propre état

Une tâche autonome embarque ce dont elle a besoin :

- **du temps** — si elle doit se déclencher périodiquement, elle garde sa propre variable `unsigned long` et utilise le patron `millis() - dernier >= intervalle` (voir [[arduino-temporisation|`millis()`]]) ;
- **un état** — si elle a des modes (attente, en cours, terminé), c'est une petite [[machine-a-etats|machine à états]] avec sa propre variable d'état.

Chaque tâche est ainsi un petit automate indépendant, qui sait où il en est sans bloquer personne.

### 3. Assembler les tâches dans `loop()`

`loop()` se contente d'**appeler chaque tâche à chaque tour**. Elles cohabitent sans se gêner, parce qu'aucune ne s'attarde — c'est la *boucle coopérative* (ou *super-loop*).

```cpp
void loop() {
  tacheLED();        // chacune agit si c'est son moment,
  tacheCapteur();    // puis rend la main aussitôt
  tacheBouton();
}
```

L'ordre des appels importe peu tant que chaque tâche reste brève : la boucle tourne des dizaines de milliers de fois par seconde, donc toutes sont servies quasi simultanément.

### 4. Refactorer un code bloquant

Pour transformer un sketch à `delay()` en non bloquant, on traite chaque pause. Le clignotant bloquant :

```cpp
void loop() {
  digitalWrite(LED, HIGH);
  delay(500);                 // <- pause : tout est figé
  digitalWrite(LED, LOW);
  delay(500);
}
```

devient une tâche qui **mémorise le temps** au lieu d'attendre :

```cpp
void tacheLED() {
  if (millis() - tLED >= 500) {     // a-t-on attendu assez ?
    tLED = millis();
    etatLED = !etatLED;
    digitalWrite(LED, etatLED);
  }
}
```

La règle de refactor : *chaque `delay()` cache un « attendre que tel temps soit écoulé » — on le réécrit en test sur `millis()`, et chaque « attendre qu'un événement arrive » devient un test sur une condition à chaque tour.*

## Exemple — Une station qui fait trois choses à la fois

Une petite station de mesure doit, simultanément : faire clignoter une LED d'état (1 Hz), lire un capteur à cadence régulière (10 Hz) et réagir sans délai à un bouton. Trois tâches coopératives, aucune ne bloque.

```cpp
const int LED = 13;
const int CAPTEUR = A0;
const int BOUTON = 2;

unsigned long tLED = 0;
const unsigned long INT_LED = 500;        // clignotement : 500 ms
bool etatLED = false;

unsigned long tCapteur = 0;
const unsigned long INT_CAPTEUR = 100;    // mesure : toutes les 100 ms

bool dernierBouton = HIGH;

void tacheLED() {                          // tâche 1 : clignoter
  if (millis() - tLED >= INT_LED) {
    tLED = millis();
    etatLED = !etatLED;
    digitalWrite(LED, etatLED);
  }
}

void tacheCapteur() {                      // tâche 2 : lire à cadence régulière
  if (millis() - tCapteur >= INT_CAPTEUR) {
    tCapteur = millis();
    Serial.println(analogRead(CAPTEUR));
  }
}

void tacheBouton() {                       // tâche 3 : réagir à un appui
  bool lecture = digitalRead(BOUTON);
  if (dernierBouton == HIGH && lecture == LOW) {   // front descendant
    Serial.println("appui !");
  }
  dernierBouton = lecture;
}

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BOUTON, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  tacheLED();
  tacheCapteur();
  tacheBouton();
}
```

Le `loop()` tourne en continu et passe ses trois tâches en revue à chaque tour. La LED clignote, le capteur est lu dix fois par seconde, le bouton est vu **dès l'appui** — parce que rien n'arrête jamais la boucle. Ajouter une quatrième activité (piloter un afficheur, écouter le port série) revient à écrire une quatrième tâche et à l'appeler dans `loop()` : la structure encaisse sans réécriture. La même chose écrite avec des `delay()` serait infaisable.

## Cas particulier — Un planificateur coopératif

Quand les tâches périodiques se multiplient, on factorise le patron `millis()` dans une **table de tâches** plutôt que de répéter le test partout : chaque entrée associe une fonction, son intervalle et la date de son dernier appel, et `loop()` parcourt la table.

```cpp
struct Tache { void (*fonction)(); unsigned long intervalle; unsigned long dernier; };

Tache taches[] = {
  { tacheLED,     500, 0 },
  { tacheCapteur, 100, 0 },
};

void loop() {
  unsigned long maintenant = millis();
  for (Tache &t : taches) {
    if (maintenant - t.dernier >= t.intervalle) {
      t.dernier = maintenant;
      t.fonction();
    }
  }
}
```

C'est un mini-ordonnanceur maison (le `void (*fonction)()` est un *pointeur de fonction*, une notion C++ avancée). Utile au-delà de quelques tâches ; en deçà, l'appel direct de l'étape 3 reste plus simple à lire.

## Cas particulier — La limite : vers un RTOS

La boucle coopérative repose sur la **bonne volonté** de chaque tâche : si l'une s'attarde, elle retarde toutes les autres. Tant que les tâches sont brèves, cela tient. Mais quand certaines doivent respecter des **échéances strictes** quoi qu'il arrive, on atteint la limite du coopératif. Un **système d'exploitation temps réel** (RTOS, comme FreeRTOS sur [[esp32|ESP32]]) franchit ce pas : il **préempte** une tâche pour en exécuter une plus prioritaire, garantissant les échéances. C'est le prolongement naturel de cette discipline, abordé côté ESP32 et dans [[firmware|firmware]].

## Pièges

**Un `delay()` qui se cache dans une tâche.** Il suffit d'un seul `delay()` oublié dans une fonction pour figer tout le programme. La règle vaut pour **chaque** fonction appelée depuis `loop()`, sans exception.

**Une tâche trop longue.** Même sans `delay()`, une tâche qui calcule longtemps ou attend activement (lire un capteur lent en boucle) bloque les autres. En coopératif, chaque tâche doit être **brève** et, si besoin, découpée en états (voir [[machine-a-etats|machine à états]]).

**Croire que c'est du vrai parallélisme.** Ce n'est pas le cas : une seule tâche s'exécute à la fois, très vite, en séquence. Seules les [[interruption|interruptions]] s'exécutent réellement « par-dessus » la boucle.

**Variables de temps mal typées.** Une date issue de `millis()` stockée dans un `int` déborde en quelques dizaines de secondes : toujours `unsigned long` (voir les pièges de [[arduino-temporisation|temporisation]]).

**Attendre une réponse en bloquant.** Guetter une trame ou une fin de mouvement par attente active fige la boucle. On transforme l'attente en **test à chaque tour** : « la réponse est-elle arrivée ? sinon, je repasse plus tard ».

**Partager des variables entre tâches sans précaution.** Si une tâche modifie une variable qu'une autre lit, raisonner sur l'ordre des appels ; et si une [[interruption|interruption]] est dans la boucle, la variable partagée doit être `volatile`.

## Raccrochage projet

- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — dès que le montage fait plus d'une chose (mesurer *et* commander *et* signaler), structurer le code en tâches non bloquantes, plutôt que de découvrir le blocage à l'intégration.
- **[[integration-et-tests|Phase d'intégration et tests]]** — le firmware du système complet est un ensemble de tâches coopératives (ou un RTOS) : chaque fonction validée seule y devient une tâche du programme d'ensemble.

Adopter la discipline non bloquante au premier montage multi-fonctions évite la réécriture intégrale qui guette tout sketch bâti sur des `delay()` — réécriture qui arrive *toujours* dès que le projet réclame deux choses à la fois.

## Voir aussi

- [[arduino-temporisation|delay() vs millis()]] — l'outil de base : la temporisation non bloquante, brique de chaque tâche
- [[machine-a-etats|Machine à états]] — chaque tâche à modes est une petite machine à états
- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-interruptions|Interruptions]] — pour les événements que la boucle ne peut pas attraper assez vite
- [[arduino-timers|Timers matériels]] — pour imposer une cadence précise à une tâche critique
- [[firmware|Firmware]] — l'architecture du code embarqué et l'horizon RTOS (transverse)
