---
title: Les conditions
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-portee
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Une **condition** fait choisir au programme un chemin plutôt qu'un autre selon une situation : *si* la température dépasse un seuil, *alors* allumer le ventilateur. Sans conditions, un programme ne ferait qu'une seule chose, toujours la même. Cette fiche couvre les deux structures de choix — `if` / `else` et `switch` / `case` — et les **opérateurs** (comparaison, logiques) qui forment le test lui-même.

## À quoi ça sert ?

Tout système qui *réagit* repose sur des conditions : franchir un seuil, détecter un appui, changer de mode. C'est ce qui transforme un programme qui *exécute une séquence* en un programme qui *décide*. Maîtriser les conditions, c'est pouvoir écrire « réagis comme ceci dans tel cas, comme cela dans tel autre » — le cœur de la commande d'un mécanisme.

## Les opérateurs de comparaison

Une condition est une expression qui vaut **vrai** ou **faux** (`bool`). On la construit avec des opérateurs de comparaison :

| Opérateur | Sens | Exemple vrai |
| --- | --- | --- |
| `==` | égal à | `mode == 2` |
| `!=` | différent de | `etat != HIGH` |
| `<` `>` | inférieur / supérieur | `t > 25` |
| `<=` `>=` | inférieur ou égal / supérieur ou égal | `niveau >= 100` |

Attention dès maintenant à la différence entre `=` (affectation : *ranger* une valeur) et `==` (comparaison : *tester* l'égalité). C'est le piège n°1 (voir plus bas).

## Les opérateurs logiques

Pour combiner plusieurs conditions, trois opérateurs logiques :

- `&&` (**et**) — vrai si les deux conditions sont vraies : `t >= 18 && t <= 25` ;
- `||` (**ou**) — vrai si au moins une l'est : `bouton == LOW || force == true` ;
- `!` (**non**) — inverse une condition : `!enMarche`.

> [!warning]
> **`&&` n'est pas `&`.** `&&` est l'opérateur logique (combine des conditions vraies/fausses) ; `&` est l'opérateur **bit-à-bit** (agit sur les bits d'un nombre, voir [[manipulation-de-bits|manipulation de bits]]). Les confondre dans une condition donne un résultat faux mais silencieux. Idem pour `||` (logique) et `|` (bit-à-bit).

## `if` / `else if` / `else`

La structure de choix la plus courante. On part du simple et on enrichit :

```cpp
if (t > 25) {                 // un seul cas
  digitalWrite(VENTILO, HIGH);
}

if (t > 25) {                 // deux cas exclusifs
  digitalWrite(VENTILO, HIGH);
} else {
  digitalWrite(VENTILO, LOW);
}

if (t < 18) {                 // plusieurs cas, testés dans l'ordre
  Serial.println("froid");
} else if (t <= 25) {
  Serial.println("ok");
} else {
  Serial.println("chaud");
}
```

Dans une cascade, les conditions sont testées **de haut en bas**, et **seul le premier** bloc vrai s'exécute. Le `else` final attrape « tous les autres cas ».

## `switch` / `case`

Quand on aiguille selon les **valeurs successives d'une même variable**, une cascade de `if` devient lourde. Le `switch` est plus lisible :

```cpp
switch (mode) {
  case 0:
    Serial.println("arret");
    break;            // sort du switch
  case 1:
    Serial.println("manuel");
    break;
  case 2:
    Serial.println("auto");
    break;
  default:            // tous les autres cas
    Serial.println("mode inconnu");
}
```

Chaque `case` se termine par `break`, qui **sort** du `switch`. Sans lui, l'exécution « tombe » dans le `case` suivant (voir Pièges). Le `default` (optionnel) attrape les valeurs non prévues. Le `switch` est omniprésent dans les [[machine-a-etats|machines à états]], où l'on aiguille selon l'état courant.

## Code à lire

Ce sketch classe une mesure en trois zones avec une cascade `if`, et illustre le `switch` dans une fonction d'affichage de mode.

```cpp
const int BROCHE = A0;
const int LED = 13;

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  int mesure = analogRead(BROCHE);     // 0..1023

  if (mesure < 300) {                  // cascade : trois zones
    Serial.println("bas");
    digitalWrite(LED, LOW);
  } else if (mesure <= 700) {
    Serial.println("moyen");
    digitalWrite(LED, LOW);
  } else {
    Serial.println("haut");
    digitalWrite(LED, HIGH);           // alerte en zone haute seulement
  }

  delay(500);
}

// Exemple de switch : aiguiller selon un numéro de mode
void afficherMode(int mode) {
  switch (mode) {
    case 0:  Serial.println("arret");   break;
    case 1:  Serial.println("manuel");  break;
    case 2:  Serial.println("auto");    break;
    default: Serial.println("inconnu");
  }
}
```

La cascade `if` gère un **intervalle** (zones de mesure) ; le `switch` gère des **valeurs discrètes** (numéros de mode). Choisir l'un ou l'autre selon la nature du test rend le code plus clair.

## Pièges

**`=` au lieu de `==`.** `if (etat = HIGH)` *affecte* `HIGH` à `etat` au lieu de le comparer — et la condition est alors toujours vraie. Le code compile sans broncher ; le comportement est faux. Relire chaque test.

**`break` oublié dans un `switch`.** Sans `break`, l'exécution continue dans le `case` suivant (effet « cascade » / *fall-through*) : on déclenche plusieurs cas au lieu d'un. Mettre un `break` à la fin de chaque `case`.

**Comparer deux `float` avec `==`.** Les flottants sont approchés : `if (t == 25.0)` est rarement vrai même quand on l'attend. Comparer à une tolérance : `if (abs(t - 25.0) < 0.1)`.

**Condition toujours vraie ou toujours fausse.** `if (vitesse > 0 || vitesse < 100)` est **toujours** vrai (tout nombre vérifie l'une des deux). On voulait sans doute `&&`. Vérifier la logique des `||` / `&&`.

**`&&`/`&` et `||`/`|` confondus.** Voir l'encart plus haut : la version bit-à-bit dans une condition donne un résultat silencieusement faux.

## Exercices

> [!question] Exercice 1 — Une plage de confort
> Écrivez la condition qui allume une LED **uniquement** si la température `t` est comprise entre 18 et 25 °C **inclus**.

> [!success]- Corrigé de l'exercice 1
> ```cpp
> if (t >= 18 && t <= 25) {
>   digitalWrite(LED, HIGH);
> } else {
>   digitalWrite(LED, LOW);
> }
> ```
> Le `&&` impose que **les deux** bornes soient respectées. Avec `||`, la LED s'allumerait presque toujours (toute température vérifie au moins une des deux inégalités).

> [!question] Exercice 2 — Le switch qui déraille
> Ce `switch` affiche `manuel` *et* `auto` quand `mode` vaut 1. Pourquoi, et comment corriger ?
> ```cpp
> switch (mode) {
>   case 1: Serial.println("manuel");
>   case 2: Serial.println("auto");
> }
> ```

> [!success]- Corrigé de l'exercice 2
> Il manque les `break` : quand `mode == 1`, l'exécution entre au `case 1`, affiche `manuel`, puis **tombe** dans le `case 2` et affiche `auto`. Correction :
> ```cpp
> switch (mode) {
>   case 1: Serial.println("manuel"); break;
>   case 2: Serial.println("auto");   break;
> }
> ```

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — réagir à un seuil de capteur, choisir une action selon un mode : les conditions sont le premier outil de la logique de commande.
- **[[machine-a-etats|Machines à états]]** — le `switch` sur l'état courant est le squelette d'une machine à états, structure centrale de la commande d'un mécanisme.

## Voir aussi

- [[cpp|C++]] — hub d'apprentissage du langage
- [[cpp-portee|Variables locales et globales]] — l'étape amont
- [[cpp-boucles|Les boucles]] — l'étape suivante : répéter un bloc
- [[machine-a-etats|Machines à états]] — le `switch` comme aiguilleur d'états
- [[manipulation-de-bits|Manipulation de bits]] — la différence entre `&&` (logique) et `&` (bit-à-bit)
