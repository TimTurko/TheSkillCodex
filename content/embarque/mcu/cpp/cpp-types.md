---
title: Le typage des variables
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-structure
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Une variable se déclare en donnant son **type**, son **nom**, et souvent une valeur de départ : `int compteur = 0;`. Le type fixe deux choses — ce que la variable peut **contenir** (un entier, un caractère, un nombre à virgule) et la **place** qu'elle occupe en mémoire. En embarqué, où chaque octet compte et où certains calculs sont lents, ce choix n'est jamais neutre : un type mal choisi, et le programme déborde, tronque ou ralentit sans prévenir.

## À quoi ça sert ?

Choisir le bon type, c'est éviter une famille entière de bugs parmi les plus déroutants, parce qu'ils ne produisent **aucune erreur de compilation** — le code part sur la carte et se comporte mal. Trois conséquences matérielles, invisibles sur un ordinateur, deviennent concrètes ici :

- un **type trop petit déborde** : passé sa valeur maximale, il « repart » brutalement (souvent dans le négatif) et fausse tout ;
- un **`float` coûte cher** sur un microcontrôleur sans calcul flottant matériel — chaque opération est lente ;
- une valeur de **temps** mal typée déborde en quelques dizaines de secondes.

Le bon réflexe n'est pas « je mets `int` partout », mais « quelle est l'amplitude de cette valeur, et de quelle nature est-elle ? ».

## Déclarer une variable

La forme générale : `type nom = valeur;`. On peut déclarer sans initialiser (`int x;`, valeur indéterminée — à éviter) ou avec (`int x = 0;`, recommandé).

```cpp
int compteur = 0;        // un entier, initialisé à 0
bool enMarche = false;   // un booléen (vrai/faux)
char lettre = 'A';       // un caractère (guillemets simples)
```

Une fois déclarée avec un type, la variable **garde ce type** : on ne peut pas y ranger n'importe quoi sans conséquence (ranger `3.7` dans un `int` le tronque à `3`).

## Les types entiers

Ce sont les plus courants. Ils diffèrent par leur **taille** (donc leur valeur maximale) et par leur **signe**.

| Type | Taille (AVR / ARM) | Contenu | Usage typique |
| --- | --- | --- | --- |
| `bool` | 1 o | `true` / `false` | un état, un drapeau |
| `char` | 1 o | un caractère (`'A'`) | texte, code ASCII |
| `byte` / `uint8_t` | 1 o | entier 0–255 | une valeur d'octet, un registre |
| `int` | **2 o** / **4 o** | entier signé | compteur, mesure brute |
| `unsigned int` | 2 o / 4 o | entier ≥ 0 | index, quantité |
| `long` | 4 o | grand entier signé | grands compteurs |
| `unsigned long` | 4 o | grand entier ≥ 0 | **temps** (`millis()`) |

Deux points sensibles, source de la majorité des bugs de type :

**Le préfixe `unsigned` retire le signe.** La variable ne stocke alors que des valeurs **positives**, mais en échange sa valeur maximale **double**. Un `int` sur 2 octets va de −32 768 à +32 767 ; un `unsigned int` va de 0 à 65 535.

**La taille de `int` change selon la carte.** Elle vaut **2 octets sur AVR** (Uno R3, Mega, Nano) et **4 octets sur ARM** (Uno R4, [[esp32|ESP32]], Teensy). Un même code peut donc déborder sur une carte et pas sur l'autre — la cause de bugs « impossibles à reproduire » la plus classique. En cas de doute sur l'amplitude, prendre `long` (toujours 4 octets).

## Les nombres à virgule

Pour une grandeur physique (tension, température, distance), on utilise un `float` :

```cpp
float tension = 3.3;     // 4 octets, nombre à virgule
```

Deux mises en garde propres à l'embarqué. D'abord, sur AVR le `double` **est** un `float` (même précision) : il n'apporte rien. Ensuite, sur ces mêmes cartes **sans unité de calcul flottant**, chaque opération sur un `float` est **nettement plus lente** qu'un calcul entier. On réserve donc les flottants aux calculs qui les exigent vraiment (conversions physiques), et on reste sur des entiers partout ailleurs.

## Le texte

Un seul caractère tient dans un `char` (`'A'`, guillemets **simples**). Une suite de caractères — une chaîne — peut se ranger de deux façons :

- un **tableau `char[]`** : la chaîne « à la C », légère, sans surprise mémoire ;
- la classe **`String`** (majuscule) : plus confortable (concaténation avec `+`, méthodes toutes prêtes), mais ce **n'est pas du C++ standard** — c'est un ajout d'Arduino, et elle consomme de la mémoire **dynamique**.

Sur un microcontrôleur à faible RAM, l'usage intensif de `String` peut fragmenter la mémoire et provoquer des plantages difficiles à diagnostiquer. Le sujet est traité sous l'angle ressource dans [[arduino-memoire|gestion mémoire]].

## Fixer une valeur constante : `const`

Une valeur qui ne change pas (une broche, un seuil) se déclare `const` — le compilateur empêche alors de la modifier par erreur, et le code se lit mieux :

```cpp
const int BROCHE_LED = 13;
const float SEUIL = 25.0;
```

C'est la forme **préférée** au `#define` vu dans [[cpp-structure|la structure d'un programme]] : `const` est **typée** et respecte la portée, là où `#define` n'est qu'un remplacement de texte.

## Code à lire

Ce sketch lit un capteur et affiche sa tension une fois par seconde. Il fait jouer **quatre types** à bon escient — observez pourquoi chacun est choisi.

```cpp
const int BROCHE = A0;                  // const int : une broche fixe
unsigned long dernierAffichage = 0;     // unsigned long : du TEMPS (millis)
const unsigned long PERIODE = 1000;     // ms entre deux affichages

void setup() {
  Serial.begin(115200);
}

void loop() {
  if (millis() - dernierAffichage >= PERIODE) {   // une fois par seconde
    dernierAffichage = millis();

    int brut = analogRead(BROCHE);            // int : valeur ADC 0..1023
    float tension = brut * (5.0 / 1023.0);    // float : conversion en volts

    Serial.print("brut = ");
    Serial.print(brut);
    Serial.print("   tension = ");
    Serial.print(tension, 2);                 // 2 décimales
    Serial.println(" V");
  }
}
```

Chaque type est choisi pour ce qu'il porte : `int` pour la valeur brute entière de l'ADC, `float` pour la tension (une grandeur à virgule), `unsigned long` pour le temps (qui dépasserait vite la capacité d'un `int`). Écrire `5.0` plutôt que `5` dans la conversion **force un calcul flottant** et évite la division entière (voir Pièges).

## Pièges

**`int` qui déborde selon la carte.** Sur AVR, `int` plafonne à 32 767 ; au-delà il bascule dans le négatif. Le même code sur Uno R4 ou ESP32 (`int` sur 4 octets) ne déborde pas — d'où des bugs qui n'apparaissent que sur certaines cartes. En cas de doute, `long`.

**`unsigned long` obligatoire pour le temps.** Une durée issue de `millis()` rangée dans un `int` déborde en une trentaine de secondes. Le temps se stocke **toujours** en `unsigned long` (voir [[arduino-temporisation|temporisation]]).

**Division entière inattendue.** `5 / 2` vaut `2`, pas `2.5` : tant que les deux nombres sont entiers, le résultat est entier. Pour obtenir `2.5`, au moins un opérande doit être flottant : `5.0 / 2`. Erreur classique dans les conversions de mesures.

**Comparer deux `float` avec `==`.** Les flottants sont **approchés** : `a == b` est rarement fiable. Comparer plutôt à une tolérance : `abs(a - b) < 0.01`.

**Croire le `float` « gratuit ».** Sur AVR, chaque opération flottante est lente, et `double` n'apporte aucune précision de plus. Réserver les flottants aux calculs qui les exigent.

## Exercices

> [!question] Exercice 1 — Choisir le bon type
> Un débitmètre renvoie un nombre de litres pouvant monter jusqu'à 50 000. Sur une **Uno R3**, dans quel type ranger cette valeur sans risque de débordement ? Et si la valeur pouvait être négative ?

> [!success]- Corrigé de l'exercice 1
> Sur Uno R3 (AVR), `int` plafonne à **32 767** : 50 000 le ferait **déborder**. Comme la valeur est positive, le plus juste est `unsigned long` (0 à ~4 milliards) — ou au minimum `unsigned int` (0 à 65 535), qui suffit tout juste mais laisse peu de marge. Si la valeur pouvait être **négative**, on prend `long` (signé, 4 octets), car `unsigned` interdit le négatif.

> [!question] Exercice 2 — Le calcul faux
> Ce calcul de moyenne donne parfois un résultat aberrant. Trouvez les **deux** problèmes et corrigez-les.
> ```cpp
> int a = 20000;
> int b = 18000;
> int moyenne = (a + b) / 2;     // sur Uno R3
> ```

> [!success]- Corrigé de l'exercice 2
> Deux pièges cumulés sur une Uno R3 :
> 1. **Débordement** : `a + b = 38 000`, au-delà des 32 767 d'un `int` AVR → le résultat intermédiaire bascule dans le négatif avant même la division.
> 2. **Division entière** : même sans débordement, `/ 2` tronque la partie décimale.
>
> Correction — typer assez large pour la somme, et garder un entier si la moyenne doit l'être :
> ```cpp
> long a = 20000;
> long b = 18000;
> long moyenne = (a + b) / 2;    // 19000, sans débordement
> ```
> Si l'on voulait une moyenne **décimale**, on passerait par un `float` : `float moyenne = (a + b) / 2.0;`.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — convertir une mesure de capteur (valeur brute → grandeur physique) impose de choisir les types à chaque étape ; c'est là que se logent débordements et divisions entières.
- **Critère *« Programmer ou paramétrer un contrôleur numérique »*** — un code bien typé produit des mesures justes et des calculs fiables, indépendamment de la carte retenue.

## Voir aussi

- [[cpp|C++]] — hub d'apprentissage du langage
- [[cpp-structure|La structure d'un programme]] — l'étape amont : où déclarer ses variables
- [[cpp-portee|Variables locales et globales]] — l'étape suivante : la durée de vie d'une variable
- [[arduino-memoire|Gestion mémoire]] — `String`, pointeurs et coût mémoire des types (transverse)
- [[arduino-temporisation|delay() vs millis()]] — pourquoi le temps se stocke en `unsigned long`
- [[manipulation-de-bits|Manipulation de bits]] — agir sur les bits d'un entier (transverse)
