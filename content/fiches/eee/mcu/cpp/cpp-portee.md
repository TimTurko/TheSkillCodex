---
title: Variables locales et globales
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-types
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

La **portée** d'une variable décide de deux choses : *où* elle est visible dans le programme, et *combien de temps* elle vit. Une variable déclarée **dans** une fonction est *locale* — elle naît à l'appel et meurt au retour. Déclarée **hors** de toute fonction, elle est *globale* — elle vit pendant tout le programme. En embarqué, cette distinction est très concrète : c'est elle qui décide si une valeur **survit** d'un tour de `loop()` au suivant ou se réinitialise à chaque passage.

## À quoi ça sert ?

C'est l'un des contresens les plus fréquents du débutant : déclarer une variable dans `loop()`, croire qu'elle « mémorise » quelque chose, et constater qu'elle repart de zéro à chaque tour. Comprendre la portée, c'est savoir **où déclarer** une variable selon l'usage :

- une valeur de **travail**, utile le temps d'un calcul → locale (le défaut, le plus sûr) ;
- un **état à conserver** entre les tours (un compteur, un dernier instant, un mode courant) → globale (ou `static`).

Bien placer ses variables évite à la fois les bugs de « mémoire qui s'efface » et les conflits d'une variable globale modifiée de partout.

## La variable locale

Une variable déclarée à l'intérieur d'une fonction n'existe **que** dans cette fonction, et seulement le temps de son exécution :

```cpp
void loop() {
  int compteur = 0;     // LOCALE : recréée à chaque tour de loop()
  compteur = compteur + 1;
  Serial.println(compteur);   // affiche toujours 1 !
  delay(500);
}
```

À chaque tour, `compteur` est **recréée** et remise à `0`, incrémentée à `1`, affichée, puis **détruite** à la fin du tour. D'où l'affichage figé à `1`. C'est correct pour une valeur jetable, mais pas pour mémoriser quoi que ce soit.

## La variable globale

Déclarée **hors** de toute fonction (en haut du sketch, dans les déclarations globales vues dans [[cpp-structure|la structure d'un programme]]), une variable est visible partout et **vit tout le programme** :

```cpp
int compteur = 0;       // GLOBALE : créée une fois, conservée ensuite

void loop() {
  compteur = compteur + 1;
  Serial.println(compteur);   // 1, 2, 3, 4, ...
  delay(500);
}
```

Ici `compteur` n'est créée **qu'une fois**, au démarrage. Elle garde sa valeur d'un tour au suivant : l'affichage monte. C'est ce qu'il faut pour tout état qui doit persister.

> [!tip]
> **Le test mental.** « Est-ce que cette valeur doit survivre au prochain tour de `loop()` ? » Si oui → globale. Si non → locale. La plupart des variables sont locales ; on ne met en global que ce qui doit vraiment être partagé ou mémorisé.

## Le compromis : `static`

Parfois on veut qu'une variable **persiste** entre les appels d'une fonction, **sans** pour autant l'exposer à tout le programme. Le mot-clé `static` fait exactement cela : la variable reste locale (invisible ailleurs), mais elle est initialisée **une seule fois** et conserve sa valeur ensuite :

```cpp
void loop() {
  static int compteur = 0;   // initialisée une fois, conservée entre les tours
  compteur = compteur + 1;
  Serial.println(compteur);  // 1, 2, 3, ... comme une globale, mais confinée à loop()
  delay(500);
}
```

C'est un bon réflexe quand une seule fonction a besoin de mémoire : on évite d'encombrer l'espace global.

## La portée de bloc

Une variable déclarée dans un bloc `{ }` (le corps d'un `if`, d'un `for`) n'existe que dans ce bloc :

```cpp
for (int i = 0; i < 10; i++) {
  // i n'existe qu'ici
}
// i n'existe plus à cette ligne
```

C'est voulu : `i` est un outil de la boucle, inutile en dehors. Tenter de l'utiliser après donne une erreur `'i' was not declared in this scope`.

## Code à lire

Ce sketch compte les appuis sur un bouton. Le **cumul** doit survivre entre les tours (donc global), tandis que la **lecture** du bouton est une valeur de travail (donc locale).

```cpp
int nbAppuis = 0;             // GLOBALE : le cumul, conservé entre les tours
const int BOUTON = 2;

void setup() {
  pinMode(BOUTON, INPUT_PULLUP);   // pull-up : bouton relâché = HIGH
  Serial.begin(115200);
}

void loop() {
  int etat = digitalRead(BOUTON);  // LOCALE : recalculée à chaque tour, jetable
  if (etat == LOW) {               // pressé (pull-up : pressé = LOW)
    nbAppuis = nbAppuis + 1;
    Serial.print("Appuis cumulés : ");
    Serial.println(nbAppuis);
    delay(200);                    // anti-rebond grossier (voir arduino-entree-tor)
  }
}
```

`nbAppuis` doit être globale, sinon le compteur repartirait de zéro à chaque tour et n'afficherait jamais que `1`. `etat` n'a aucune raison de survivre : locale, elle reste isolée et lisible.

## Pièges

**La variable locale qu'on croyait persistante.** Le piège n°1 : un compteur ou un dernier état déclaré dans `loop()` se réinitialise à chaque tour. Pour mémoriser, le déclarer **global** ou `static`.

**Le masquage (*shadowing*).** Déclarer une variable locale du même nom qu'une globale « cache » la globale dans cette fonction : on croit modifier la globale, on ne touche qu'une copie locale. Éviter de réutiliser les mêmes noms.

**Globale non initialisée.** Une variable globale non initialisée vaut `0` par défaut ; une **locale** non initialisée contient une valeur **indéterminée** (n'importe quoi). Toujours initialiser ses locales.

**Trop de variables globales.** Quand tout est global, n'importe quelle fonction peut tout modifier — les bugs deviennent difficiles à localiser. Garder le global au strict nécessaire (état partagé, persistance).

## Exercices

> [!question] Exercice 1 — Prédire la sortie
> Pour chacun de ces deux `loop()`, qu'affiche le moniteur série aux trois premiers tours ?
> ```cpp
> // Version A
> void loop() { int n = 0; n++; Serial.println(n); delay(500); }
>
> // Version B
> int n = 0;
> void loop() { n++; Serial.println(n); delay(500); }
> ```

> [!success]- Corrigé de l'exercice 1
> - **Version A** : `1`, `1`, `1`. `n` est **locale**, recréée et remise à 0 à chaque tour, donc toujours incrémentée de 0 à 1.
> - **Version B** : `1`, `2`, `3`. `n` est **globale**, créée une seule fois ; elle conserve sa valeur et s'incrémente tour après tour.

> [!question] Exercice 2 — Le compteur qui ne compte pas
> Ce programme doit compter combien de fois une mesure dépasse un seuil, mais il affiche toujours `1`. Corrigez-le de deux façons.
> ```cpp
> void loop() {
>   int depassements = 0;
>   if (analogRead(A0) > 500) {
>     depassements++;
>     Serial.println(depassements);
>   }
>   delay(100);
> }
> ```

> [!success]- Corrigé de l'exercice 2
> `depassements` est locale → remise à 0 à chaque tour. Deux corrections possibles :
> ```cpp
> // Solution 1 : variable globale
> int depassements = 0;
> void loop() {
>   if (analogRead(A0) > 500) { depassements++; Serial.println(depassements); }
>   delay(100);
> }
> ```
> ```cpp
> // Solution 2 : variable locale static (confinée à loop, mais persistante)
> void loop() {
>   static int depassements = 0;
>   if (analogRead(A0) > 500) { depassements++; Serial.println(depassements); }
>   delay(100);
> }
> ```

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — dès qu'un programme doit mémoriser un état (dernier mode, compteur, dernier instant), la portée devient déterminante ; un mauvais choix produit des bugs de « mémoire qui s'efface » difficiles à comprendre.
- **[[machine-a-etats|Machines à états]]** — l'état courant d'une machine à états est typiquement une variable **globale** persistante : la portée est le socle de ce mécanisme.

## Voir aussi

- [[cpp|C++]] — hub d'apprentissage du langage
- [[cpp-types|Le typage des variables]] — l'étape amont : choisir le type d'une variable
- [[cpp-conditions|Les conditions]] — l'étape suivante : décider selon une valeur
- [[cpp-structure|La structure d'un programme]] — où se déclarent les variables globales
- [[arduino-entree-tor|Lire une entrée TOR]] — le bouton et l'anti-rebond de l'exemple
