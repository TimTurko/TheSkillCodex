---
title: Les boucles
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-conditions
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Une **boucle** répète un bloc d'instructions, ce qui évite de copier-coller le même code. Le C++ en propose trois formes : `for` (répéter un nombre **connu** de fois), `while` (répéter **tant qu'**une condition tient), et `do…while` (comme `while`, mais en s'exécutant **au moins une fois**). Cette fiche présente les trois, explique **laquelle choisir**, puis met en garde sur un point propre à l'embarqué : une boucle d'attente peut **figer** tout le programme.

## À quoi ça sert ?

Dès qu'une action se répète — configurer 8 broches, balayer un tableau de capteurs, faire défiler une LED sur une rampe — la boucle remplace une dizaine de lignes répétitives par trois. Et au-delà du gain d'écriture, c'est l'outil pour **parcourir des données** (un tableau de mesures) ou **attendre une condition**. Le bon choix de forme rend l'intention lisible : « je répète N fois » ne s'écrit pas comme « je répète tant que ».

## `for` — un nombre connu de fois

La forme reine quand on sait **combien** de fois répéter. Trois éléments, séparés par des `;`, entre les parenthèses :

```cpp
for (int i = 0; i < 8; i++) {   // init ; condition ; incrément
  Serial.println(i);            // affiche 0, 1, 2, ... 7
}
```

- **initialisation** (`int i = 0`) : exécutée une fois, au départ ;
- **condition** (`i < 8`) : testée avant chaque tour ; tant qu'elle est vraie, on continue ;
- **incrément** (`i++`) : exécuté à la fin de chaque tour.

La variable `i` (le *compteur*) n'existe que dans la boucle (portée de bloc, voir [[cpp-portee|variables locales et globales]]). C'est la forme idéale pour parcourir un **tableau** par ses indices.

## `while` — tant qu'une condition tient

Quand on ne sait **pas** d'avance combien de fois répéter, mais qu'on sait **jusqu'à quand** :

```cpp
while (analogRead(A0) < 500) {   // tant que la mesure est faible
  // ... faire quelque chose ...
}
```

La condition est testée **avant** chaque tour. Si elle est fausse dès le départ, le bloc ne s'exécute **pas du tout** (zéro fois).

## `do…while` — au moins une fois

Identique à `while`, à une différence près : la condition est testée **à la fin**. Le bloc s'exécute donc **toujours au moins une fois**, même si la condition est fausse d'emblée :

```cpp
int valeur;
do {
  valeur = analogRead(A0);   // lit AU MOINS une fois
} while (valeur < 100);      // puis recommence tant que trop faible
```

Utile quand l'action doit avoir lieu avant qu'on puisse tester son résultat (lire une valeur avant de décider si elle convient).

## Laquelle choisir ?

| Forme | Quand l'utiliser | Nombre d'exécutions |
| --- | --- | --- |
| `for` | le nombre de répétitions est **connu d'avance** | 0 ou plus (test au début) |
| `while` | on répète **tant qu'**une condition tient, nombre inconnu | 0 ou plus (test au début) |
| `do…while` | il faut exécuter **au moins une fois** avant de tester | 1 ou plus (test à la fin) |

En pratique : `for` pour parcourir/compter, `while` pour attendre une condition, `do…while` dans le cas plus rare où la première exécution est inconditionnelle. Les trois sont interchangeables sur le papier — on choisit celle qui exprime le plus clairement l'intention.

## `break` et `continue`

Deux mots-clés affinent le déroulement d'une boucle : `break` **interrompt** la boucle immédiatement ; `continue` **saute** au tour suivant sans finir le tour courant.

```cpp
for (int i = 0; i < 100; i++) {
  if (capteurDefaillant(i)) continue;   // ignore ce capteur, passe au suivant
  if (urgence()) break;                 // arrête tout de suite
  traiter(i);
}
```

> [!warning]
> **La vraie « boucle infinie » d'un programme embarqué, c'est `loop()`.** On n'écrit donc presque jamais de `while (true)` à la main. Surtout, une boucle d'**attente** (`while (digitalRead(BOUTON) == HIGH) { }`) **fige tout le programme** tant qu'elle tourne : plus rien d'autre ne s'exécute, la carte semble bloquée. C'est acceptable pour une attente très brève, mais dès qu'un système doit faire plusieurs choses « en même temps », on n'attend pas dans une boucle — on passe à la [[arduino-programmation-non-bloquante|programmation non bloquante]].

## Code à lire

Un **chenillard** : une LED défile sur six broches, l'une après l'autre, en boucle. Le sketch utilise un `for` pour configurer les broches, et un `for` pour les balayer — en parcourant un **tableau** d'indices.

```cpp
const int LEDS[] = {2, 3, 4, 5, 6, 7};   // les six broches, dans un tableau
const int NB_LEDS = 6;

void setup() {
  for (int i = 0; i < NB_LEDS; i++) {    // for : configurer chaque broche
    pinMode(LEDS[i], OUTPUT);
  }
  Serial.begin(115200);
}

void loop() {
  for (int i = 0; i < NB_LEDS; i++) {    // for : balayer les LEDs une à une
    digitalWrite(LEDS[i], HIGH);
    delay(100);
    digitalWrite(LEDS[i], LOW);
  }
}
```

Sans boucle, il aurait fallu écrire douze `digitalWrite` et autant de `delay`. Le `for` parcourt le tableau `LEDS` par son indice `i`, de `0` à `NB_LEDS - 1`. Changer le nombre de LEDs ne demande que de modifier le tableau et `NB_LEDS`.

## Pièges

**Boucle infinie involontaire.** Si la condition d'un `while` ne devient jamais fausse (ou si on oublie d'incrémenter le compteur d'un `for`), la boucle tourne sans fin et le programme se fige. Vérifier que la condition **finira** par devenir fausse.

**Dépassement d'indice de tableau.** Avec un tableau de 6 cases (indices 0 à 5), `for (int i = 0; i <= 6; i++)` accède à la case `6`, qui **n'existe pas** : lecture mémoire hors limites, comportement imprévisible. La condition correcte est `i < 6` (ou `i < NB_LEDS`).

**Le `;` fatal après le `for`.** `for (int i = 0; i < 10; i++);` — le point-virgule final fait une boucle **vide** : le vrai bloc qui suit ne s'exécute qu'une fois, après la boucle. Ne pas mettre de `;` juste après la parenthèse du `for`.

**Attendre dans une boucle bloquante.** Voir l'encart : un `while` d'attente fige tout. À réserver aux attentes très courtes ; sinon, programmation non bloquante.

## Exercices

> [!question] Exercice 1 — Compter à rebours
> Avec une boucle `for`, affichez sur le moniteur série un compte à rebours de 10 jusqu'à 1, puis le mot `"Partez !"`.
>
> > [!success]- Corrigé
> > ```cpp
> > void setup() {
> >   Serial.begin(115200);
> >   for (int i = 10; i >= 1; i--) {   // de 10 à 1, décrément
> >     Serial.println(i);
> >     delay(500);
> >   }
> >   Serial.println("Partez !");
> > }
> >
> > void loop() {
> > }
> > ```
> > La boucle est dans `setup()` car le compte à rebours ne doit avoir lieu **qu'une fois**. Le compteur part de 10, la condition `i >= 1` arrête à 1, et `i--` décrémente.

> [!question] Exercice 2 — `while` ou `do…while` ?
> Que fait chacune de ces deux boucles si, dès le départ, le bouton est **déjà** relâché (`digitalRead` renvoie `HIGH`) ? En quoi diffèrent-elles ?
> ```cpp
> // A
> while (digitalRead(BOUTON) == LOW) { Serial.println("A"); }
> // B
> do { Serial.println("B"); } while (digitalRead(BOUTON) == LOW);
> ```
>
> > [!success]- Corrigé
> > - **A (`while`)** : la condition est testée **avant** ; comme le bouton est relâché (donc `== LOW` est faux), le bloc ne s'exécute **pas du tout** — `"A"` n'est jamais affiché.
> > - **B (`do…while`)** : le bloc s'exécute **une fois** avant le test ; `"B"` est affiché **une fois**, puis la condition fausse arrête la boucle.
> >
> > C'est toute la différence : `do…while` garantit au moins un passage. (Et rappel : ces deux boucles d'attente figeraient le programme tant que le bouton resterait pressé.)

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — balayer un ensemble de capteurs ou de sorties, parcourir un tableau de mesures : la boucle `for` est l'outil de base dès qu'on manipule plusieurs voies.
- **[[arduino-programmation-non-bloquante|Programmation non bloquante]]** — la limite des boucles d'attente bloquantes mène directement à la gestion du temps sans figer le programme, indispensable dès que le système fait plusieurs choses à la fois.

## Voir aussi

- [[cpp|C++]] — hub d'apprentissage du langage
- [[cpp-conditions|Les conditions]] — l'étape amont : décider selon une valeur
- [[cpp-logs|Lire et comprendre les erreurs]] — l'étape suivante : se dépanner seul
- [[arduino-programmation-non-bloquante|Programmation non bloquante]] — pourquoi on n'attend pas dans une boucle bloquante en embarqué
