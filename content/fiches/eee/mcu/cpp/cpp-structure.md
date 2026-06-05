---
title: La structure d'un programme
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-execution
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Un fichier de programme Arduino (un *sketch*) se lit de haut en bas et suit toujours la **même anatomie** : les directives du préprocesseur, puis les déclarations globales, puis `setup()` et `loop()`, et enfin les fonctions qu'on écrit soi-même. Savoir *qui fait quoi et à quel endroit* permet de lire n'importe quel exemple — et d'organiser son propre code au lieu de tout entasser dans `loop()`.

## À quoi ça sert ?

Tous les sketches que vous croiserez ont cette structure. La reconnaître, c'est pouvoir **lire un exemple** sans se perdre, et **ranger son code** au bon endroit. Trois questions reviennent constamment, et la structure y répond :

- « Où mettre cette ligne `#include` ? » → tout en haut, c'est une directive du préprocesseur ;
- « Où déclarer une valeur utilisée partout ? » → dans les déclarations globales, avant `setup()` ;
- « Mon `loop()` devient illisible, que faire ? » → en extraire des **fonctions** nommées.

Distinguer surtout deux natures de lignes : ce qui est **déclaré** (variables, fonctions — on les *nomme*) et ce qui est **exécuté** (les actions — elles vivent *dans* `setup()` ou `loop()`). Mélanger les deux est la première cause d'erreurs de compilation chez le débutant.

## L'anatomie d'un sketch

De haut en bas, quatre zones se succèdent. Voici leur ordre et leur rôle, avant le sketch complet plus bas.

### 1. Les directives du préprocesseur (`#include`, `#define`)

Les lignes qui commencent par `#` ne sont pas du C++ « ordinaire » : elles sont traitées par le **préprocesseur**, *avant* la compilation proprement dite. Les deux plus courantes :

```cpp
#include <Servo.h>     // intègre une bibliothèque : son contenu est ajouté ici
#define BROCHE_LED 13   // remplace le texte "BROCHE_LED" par "13" partout
```

`#include` **colle** le contenu d'une bibliothèque (la sienne ou celle d'un capteur, d'un afficheur…) dans le programme : c'est ce qui rend disponibles des fonctions toutes prêtes (voir [[arduino-bibliotheques|utiliser une bibliothèque]]). `#define` fait un simple **remplacement de texte** avant compilation. Détail piégeur : une directive `#` ne se termine **jamais** par un point-virgule (c'est du préprocesseur, pas une instruction C++).

### 2. Les déclarations globales

Juste après les `#include`, on déclare ce qui doit être **visible partout** et **vivre pendant tout le programme** : les constantes de réglage, les variables à mémoriser d'un tour de boucle au suivant, et les objets fournis par les bibliothèques.

```cpp
const int BROCHE_CAPTEUR = A0;   // une constante typée (préférée au #define)
int derniereMesure = 0;          // une variable mémorisée entre les tours
Servo monServo;                  // un objet de la bibliothèque Servo
```

On reviendra en détail sur *pourquoi* certaines variables doivent être ici plutôt que dans `loop()` dans [[cpp-portee|variables locales et globales]].

### 3. `setup()` et `loop()`

Les deux fonctions obligatoires, déjà vues dans [[cpp-execution|comment s'exécute un programme]] : `setup()` une fois au démarrage (les réglages), `loop()` en boucle infinie (le cœur du programme). C'est ici que vivent les **actions**.

### 4. Les fonctions que l'on écrit

Pour ne pas tout empiler dans `loop()`, on regroupe des bouts de logique dans des **fonctions nommées** — `lireCapteur()`, `commanderMoteur()` — qu'on définit une fois et qu'on appelle ensuite (la notion est détaillée dans [[fonction-informatique|fonction]]).

```cpp
int lireCapteur() {                 // type de retour, nom, (paramètres)
  return analogRead(BROCHE_CAPTEUR);
}
```

> [!note]
> **Où placer ses fonctions ?** En C++ pur, une fonction doit être déclarée avant d'être appelée. L'IDE Arduino **génère automatiquement les déclarations** pour vous, si bien qu'on peut écrire ses fonctions *après* `loop()` sans erreur. C'est une commodité du dialecte Wiring ; dans un projet plus structuré (fichiers `.h`/`.cpp`), on retrouvera l'ordre classique.

## Code à lire

Un sketch complet et **bien rangé** : il commande un servomoteur d'après un capteur, et allume une LED au-dessus d'un seuil. Repérez les quatre zones en le lisant.

```cpp
#include <Servo.h>               // [1] préprocesseur : bibliothèque servo

#define LED_ALERTE 13            // [1] préprocesseur : broche de la LED
const int BROCHE_CAPTEUR = A0;   // [2] déclaration globale : constante typée
const int SEUIL = 500;           // [2] au-dessus de cette valeur, on alerte

Servo monServo;                  // [2] objet global : le servo
int derniereMesure = 0;          // [2] variable globale : mémorisée entre les tours

void setup() {                   // [3] exécuté une fois
  Serial.begin(115200);
  pinMode(LED_ALERTE, OUTPUT);
  monServo.attach(9);            // le servo est câblé sur la broche 9
}

void loop() {                    // [3] répété sans fin
  derniereMesure = lireCapteur();        // on appelle nos fonctions
  positionnerServo(derniereMesure);
  delay(100);
}

int lireCapteur() {                       // [4] fonction perso : lit la mesure
  return analogRead(BROCHE_CAPTEUR);
}

void positionnerServo(int mesure) {       // [4] fonction perso : agit
  int angle = map(mesure, 0, 1023, 0, 180);   // 0..1023 → 0..180°
  monServo.write(angle);
  digitalWrite(LED_ALERTE, mesure > SEUIL ? HIGH : LOW);
}
```

`loop()` reste **court et lisible** : il dit *quoi* faire (lire, positionner), pas *comment*. Le « comment » est rangé dans les fonctions du bas. C'est exactement le bénéfice d'une bonne structure — et la base de tout ce qui suivra sur la [[firmware|structuration du firmware]].

## Pièges

**`#define` suivi d'un `;`.** `#define LED 13;` insère le point-virgule **dans** le texte remplacé : partout où vous écrivez `LED`, le code devient `13;`, ce qui casse les expressions (`digitalWrite(13;, HIGH)`). Une directive `#` ne prend jamais de `;`.

**`#include` oublié.** Utiliser `Servo` ou `monServo.attach()` sans `#include <Servo.h>` en tête donne une erreur du type `'Servo' was not declared in this scope`. La bibliothèque doit être incluse avant d'être employée.

**Une action écrite hors fonction.** `digitalWrite(13, HIGH);` placée entre les déclarations globales et `setup()`, hors de toute accolade, ne compile pas : à ce niveau, seules des **déclarations** sont permises. Les actions vont dans `setup()` ou `loop()`.

**Variable utilisée avant d'être déclarée.** Le compilateur lit de haut en bas : une variable globale doit être déclarée **au-dessus** de la première ligne qui l'utilise.

**Tout entasser dans `loop()`.** Ça « marche », mais devient vite illisible et impossible à déboguer. Dès qu'un bloc dépasse quelques lignes ou se répète, en faire une fonction.

## Exercices

> [!question] Exercice 1 — Repérer les quatre zones
> Reprenez le sketch « Code à lire » ci-dessus et, sans les annotations `[1]`–`[4]`, retrouvez où commence et finit chaque zone : préprocesseur, déclarations globales, `setup()`/`loop()`, fonctions personnelles.
>
> > [!success]- Corrigé
> > - **Préprocesseur** : les lignes `#include <Servo.h>` et `#define LED_ALERTE 13` (tout ce qui commence par `#`).
> > - **Déclarations globales** : de `const int BROCHE_CAPTEUR` jusqu'à `int derniereMesure = 0;` (constantes, objet `Servo`, variable mémorisée) — tout ce qui est *déclaré* hors fonction.
> > - **`setup()` / `loop()`** : les deux fonctions obligatoires, où vivent les actions.
> > - **Fonctions personnelles** : `lireCapteur()` et `positionnerServo()`, après `loop()`.

> [!question] Exercice 2 — Extraire une fonction
> Voici un `loop()` qui fait tout lui-même. Réécrivez le sketch en sortant le calcul de l'angle et la commande du servo dans une fonction nommée `commanderServo(int mesure)`.
> ```cpp
> void loop() {
>   int mesure = analogRead(A0);
>   int angle = map(mesure, 0, 1023, 0, 180);
>   monServo.write(angle);
>   delay(100);
> }
> ```
>
> > [!success]- Corrigé
> > ```cpp
> > void loop() {
> >   int mesure = analogRead(A0);
> >   commanderServo(mesure);        // loop() dit "quoi", la fonction dit "comment"
> >   delay(100);
> > }
> >
> > void commanderServo(int mesure) {
> >   int angle = map(mesure, 0, 1023, 0, 180);
> >   monServo.write(angle);
> > }
> > ```
> > `loop()` devient plus lisible : il décrit l'intention (lire, commander) et délègue le détail. La fonction `commanderServo` prend la mesure en **paramètre** et ne renvoie rien (`void`).

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — dès que le premier sketch dépasse le *Blink*, lui donner une structure claire (réglages dans `setup()`, logique en fonctions) fait gagner du temps au moment du débogage.
- **[[firmware|Firmware]]** — organiser un programme en zones et en fonctions est le premier pas vers la structuration d'ensemble du code embarqué, qui devient déterminante quand le projet grossit.

## Voir aussi

- [[cpp|C++]] — hub d'apprentissage du langage
- [[cpp-execution|Exécution d'un programme]] — l'étape amont : `setup()`, `loop()` et le cycle d'exécution
- [[cpp-types|Le typage des variables]] — l'étape suivante : bien choisir le type des déclarations
- [[fonction-informatique|Fonction]] — la notion de fonction en programmation
- [[arduino-bibliotheques|Utiliser une bibliothèque]] — ce que `#include` rend disponible
- [[firmware|Firmware]] — structurer le code embarqué (transverse)
