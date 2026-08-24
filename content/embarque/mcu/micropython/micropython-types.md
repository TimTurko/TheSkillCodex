---
title: Variables et types
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

En MicroPython, une **variable** se crée par simple affectation, **sans déclarer son type** : `x = 5` suffit. C'est le **typage dynamique** : l'interpréteur déduit le type, et une même variable peut même en changer en cours de route. C'est la grande différence avec le [[cpp|C++]] (`int x = 5;`), source de concision… et d'un piège à connaître. Cette fiche couvre les types de base et les conteneurs essentiels.

## Pas de déclaration, un type déduit

```python
temperature = 21.5      # float
nom = "Pico"            # str (chaîne de caractères)
actif = True            # bool
nombre = 42             # int
```

`type()` révèle le type courant :

```python
>>> type(temperature)
<class 'float'>
>>> type(nombre)
<class 'int'>
```

Les **`int` sont de précision arbitraire** (pas de débordement à 65535 comme sur un `int` 16 bits AVR), et la **division** distingue deux opérateurs :

```python
>>> 5 / 2      # division réelle -> float
2.5
>>> 5 // 2     # division entière -> int
2
```

## Convertir entre types

Les conversions sont explicites : `int()`, `float()`, `str()`.

```python
>>> int("42") + 1        # une chaîne "42" devient le nombre 42
43
>>> "valeur : " + str(nombre)   # pour concaténer, convertir le nombre en str
'valeur : 42'
```

C'est fréquent en embarqué : un [[micropython-capteur-analogique|ADC]] renvoie un `int`, qu'on convertit en tension (`float`) ou en texte pour l'affichage.

## Les conteneurs : `list` et `dict`

Une **`list`** range des valeurs ordonnées, modifiables :

```python
mesures = [512, 530, 528]
mesures.append(541)      # ajoute en fin
print(mesures[0])        # premier élément -> 512
print(len(mesures))      # nombre d'éléments -> 4
```

Un **`dict`** associe des clés à des valeurs (pratique pour nommer) :

```python
capteur = {"nom": "LDR", "broche": 26, "valeur": 512}
print(capteur["broche"])   # -> 26
```

## Pièges

**Le type peut changer en silence.** Comme rien n'est déclaré, réaffecter `x = "texte"` après `x = 5` est permis, et peut introduire un bug difficile à voir. Garder une variable sur un seul type, sauf raison claire.

**`/` n'est pas `//`.** `5 / 2` vaut `2.5` (réel), pas `2`. Pour une division entière, utiliser `//`. C'est l'inverse du réflexe C où `/` entre entiers tronque.

**Le Pico calcule en simple précision.** Ses `float` tiennent sur 32 bits, pas 64 comme sur un PC : un calcul pourtant simple peut afficher des décimales parasites. `float("3.3") * 2` peut donner `6.5999999` au lieu de `6.6`. C'est normal. Conséquence : ne pas comparer deux réels par égalité stricte (`==`), mais tester un petit écart (`abs(a - b) < 0.001`).

**`str` + `int` lève une erreur.** `"valeur : " + 42` provoque un `TypeError` : il faut convertir (`+ str(42)`). Python ne mélange pas les types implicitement.

**Coût mémoire.** Un objet Python est plus lourd qu'un entier C. Sans gravité pour apprendre, mais à garder en tête sur de gros tableaux (voir [[memoire|gestion mémoire]]).

## Exercices

> [!question] Exercice 1 — Inspecter et convertir
> Au REPL, créez une variable contenant la chaîne `"3.3"`, vérifiez son type, puis convertissez-la en nombre réel et multipliez-la par 2.

> [!success]- Corrigé
> ```python
> >>> v = "3.3"
> >>> type(v)
> <class 'str'>
> >>> float(v) * 2
> 6.6
> ```
> La chaîne `"3.3"` n'est pas un nombre tant qu'on ne la convertit pas : `float(v)` la transforme en réel, qu'on peut alors calculer. Multiplier la chaîne (`v * 2`) donnerait `'3.33.3'`, d'où l'importance de la conversion. Sur le Pico (simple précision), l'affichage réel peut être `6.5999999` plutôt que `6.6` : le calcul est juste, c'est l'affichage qui révèle la limite (voir le piège).

> [!question] Exercice 2 — Moyenne de mesures
> À partir d'une liste de trois mesures `[512, 530, 528]`, calculez leur moyenne. Indice : `sum()` et `len()`.

> [!success]- Corrigé
> ```python
> mesures = [512, 530, 528]
> moyenne = sum(mesures) / len(mesures)
> print(moyenne)        # 523.33...
> ```
> `sum()` additionne les éléments, `len()` les compte. La division réelle `/` donne une moyenne en `float`. On retrouvera ce motif pour lisser des mesures bruitées.

## Voir aussi

- [[micropython-langage|Le langage MicroPython]] — hub du parcours langage
- [[micropython-controle|Conditions et boucles]] — agir selon la valeur d'une variable
- [[cpp-types|Le typage en C++]] — l'approche statique, à comparer
- [[memoire|Gestion mémoire]] — ce que coûtent les objets (transverse)
