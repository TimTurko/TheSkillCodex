---
title: Conditions et boucles
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-langage
aa: []
draft: false
---

Les **conditions** (`if`) et les **boucles** (`while`, `for`) dirigent le déroulement d'un programme : agir selon une valeur, répéter une action. En MicroPython, une particularité structure tout le reste : les blocs sont délimités par l'**indentation** (le décalage à gauche), pas par des accolades. C'est propre et lisible — mais une indentation incohérente provoque une erreur. Cette fiche couvre les conditions, les boucles, et ce rôle central de l'indentation.

## L'indentation délimite les blocs

Là où le [[cpp|C++]] entoure un bloc d'accolades `{ }`, MicroPython le marque par l'**indentation**. La ligne d'en-tête se termine par `:`, et tout ce qui est **décalé en dessous** appartient au bloc :

```python
if temperature > 25:
    print("Il fait chaud")     # dans le bloc (indente)
    ventilateur.on()           # dans le bloc
print("Suite du programme")    # hors du bloc (revenu a gauche)
```

La convention est de **4 espaces** par niveau (Thonny le fait automatiquement). Pas d'accolades, pas de point-virgule en fin de ligne.

## Les conditions : `if` / `elif` / `else`

```python
valeur = capteur.read_u16()    # une lecture ADC, 0..65535

if valeur < 20000:
    etat = "sombre"
elif valeur < 45000:
    etat = "moyen"
else:
    etat = "lumineux"
```

Les comparaisons : `==`, `!=`, `<`, `>`, `<=`, `>=`. Les opérateurs logiques s'écrivent **en toutes lettres** — `and`, `or`, `not` — et non `&&` / `||` / `!` :

```python
if bouton.value() == 0 and not alarme_active:
    declencher()
```

## Les boucles : `while` et `for`

La boucle `while` répète **tant qu'**une condition est vraie ; `while True:` est la boucle principale d'un programme embarqué :

```python
while True:
    led.toggle()
    sleep(0.5)
```

La boucle `for` parcourt une séquence — souvent `range(n)` pour répéter *n* fois :

```python
for i in range(5):      # i prend 0, 1, 2, 3, 4
    led.on()
    sleep(0.1)
    led.off()
    sleep(0.1)
```

On peut aussi parcourir directement une [[micropython-types|liste]] : `for broche in [14, 15, 16]:`. `break` sort de la boucle, `continue` passe au tour suivant.

## Pièges

**Erreur d'indentation.** Un décalage incohérent (ou un mélange tabulations/espaces) provoque une `IndentationError`. Rester sur **4 espaces** partout ; laisser Thonny gérer l'indentation.

**Oublier le `:`.** L'en-tête d'un `if`, `while`, `for` se termine par deux-points. L'oublier provoque une `SyntaxError`.

**`and`/`or`/`not`, pas `&&`/`||`/`!`.** Réflexe à corriger en venant du C : les opérateurs logiques sont des mots.

**`=` n'est pas `==`.** `if x = 5` est une erreur ; la comparaison s'écrit `if x == 5`. (Contrairement au C, l'affectation dans une condition n'est pas permise — ce qui évite le bug classique.)

## Exercices

> [!question] Exercice 1 — Trois zones de luminosité
> À partir d'une lecture ADC `valeur` (0 à 65535), affichez `"sombre"`, `"moyen"` ou `"lumineux"` selon trois plages de votre choix.

> [!success]- Corrigé
> ```python
> valeur = capteur.read_u16()
> if valeur < 20000:
>     print("sombre")
> elif valeur < 45000:
>     print("moyen")
> else:
>     print("lumineux")
> ```
> `elif` enchaîne les cas : dès qu'une condition est vraie, les suivantes sont ignorées. L'ordre compte — on teste les seuils du plus bas au plus haut.

> [!question] Exercice 2 — Clignoter N fois
> Faites clignoter la LED exactement **10 fois** (0,1 s allumée / 0,1 s éteinte), puis arrêtez. Quelle boucle, et pourquoi pas `while True` ?

> [!success]- Corrigé
> ```python
> from machine import Pin
> from time import sleep
> led = Pin("LED", Pin.OUT)
>
> for i in range(10):
>     led.on()
>     sleep(0.1)
>     led.off()
>     sleep(0.1)
> ```
> `for ... in range(10)` répète un **nombre connu** de fois, ce qui convient ici ; `while True` répéterait sans fin. `range(10)` produit les valeurs 0 à 9, soit 10 tours.

## Voir aussi

- [[micropython-langage|Le langage MicroPython]] — hub du parcours langage
- [[micropython-types|Variables et types]] — les valeurs sur lesquelles portent les conditions
- [[micropython-fonctions|Les fonctions]] — regrouper un bloc réutilisable
- [[cpp-conditions|Conditions]] · [[cpp-boucles|Boucles]] en C++ — à comparer (accolades, opérateurs)
