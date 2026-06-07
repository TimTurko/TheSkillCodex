---
title: Le REPL
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main
aa: []
draft: false
---

Le **REPL** (*Read-Eval-Print Loop*, « boucle lire-évaluer-afficher ») est le **shell interactif** de MicroPython : un interpréteur qui tourne **sur la carte** et exécute chaque ligne dès qu'on la tape. C'est le panneau *Shell* de Thonny, avec son invite `>>>`. C'est l'atout majeur de l'approche scriptée : avant d'écrire un programme complet, on **teste une ligne** et on voit l'effet **immédiatement** — idéal pour explorer un capteur, vérifier un branchement, ou inspecter une valeur.

## Lire–évaluer–afficher

On tape, MicroPython exécute, et **affiche le résultat** d'une expression :

```python
>>> 2 + 3
5
>>> "Pico" * 2
'PicoPico'
```

Une **affectation** ne renvoie rien (donc rien ne s'affiche), mais la variable existe ensuite :

```python
>>> x = 10
>>> x * 2
20
```

Et surtout, on **agit sur le matériel en direct** :

```python
>>> from machine import Pin
>>> led = Pin("LED", Pin.OUT)
>>> led.on()          # la LED s'allume tout de suite
>>> led.value()       # on lit son etat
1
```

## Saisir plusieurs lignes

Quand une ligne ouvre un bloc (elle se termine par `:`), le REPL passe à l'invite de continuation `...` et attend le corps **indenté** ; une ligne vide termine le bloc :

```python
>>> for i in range(3):
...     print("tour", i)
...
tour 0
tour 1
tour 2
```

## Explorer et reprendre la main

Le REPL est aussi un outil de **découverte** et de **contrôle** :

- `dir(machine)` liste ce qu'offre un module ; `help(Pin)` en donne l'aide ;
- **`Ctrl-C`** interrompt un programme en cours (par exemple une boucle `while True:` qui tourne) et rend la main ;
- **`Ctrl-D`** fait un *soft reboot* : il redémarre l'interpréteur (et relance `main.py`) — pratique pour repartir propre, mais **les variables tapées au REPL sont alors effacées** ;
- **`Ctrl-E`** ouvre le *mode collage*, pour coller un bloc de plusieurs lignes sans que l'indentation automatique ne gêne.

Le flux de travail typique : on **bricole au REPL** jusqu'à ce qu'une séquence marche, puis on la **recopie dans un fichier** `.py` (voir [[micropython-prise-en-main|prise en main]], `main.py`).

## Pièges

**Une affectation n'affiche rien.** `x = 10` ne renvoie pas de valeur ; pour voir le contenu, taper `x`. C'est normal, pas un bug.

**Une boucle infinie « bloque » le REPL.** Tant qu'un `while True:` tourne, l'invite ne revient pas : `Ctrl-C` pour reprendre la main.

**Le *soft reboot* efface les variables.** Après `Ctrl-D` (ou un branchement/débranchement), les variables définies au REPL n'existent plus — il faut les redéfinir. Ce qui persiste, ce sont les **fichiers** enregistrés sur la carte.

## Exercices

> [!question] Exercice 1 — Piloter et lire au REPL
> Au REPL, allumez la LED intégrée, lisez son état, puis éteignez-la et relisez. Quelle méthode bascule l'état d'un seul coup ?

> [!success]- Corrigé
> ```python
> >>> from machine import Pin
> >>> led = Pin("LED", Pin.OUT)
> >>> led.on()
> >>> led.value()
> 1
> >>> led.off()
> >>> led.value()
> 0
> >>> led.toggle()   # bascule l'etat
> ```
> `toggle()` inverse l'état courant — pratique pour un clignotement écrit en une ligne.

> [!question] Exercice 2 — Explorer un module
> Sans documentation sous les yeux, découvrez au REPL ce que contient le module `time`. Quelle commande ? Repérez une fonction de pause.

> [!success]- Corrigé
> ```python
> >>> import time
> >>> dir(time)
> [..., 'sleep', 'sleep_ms', 'sleep_us', 'ticks_ms', 'ticks_us', ...]
> >>> help(time.sleep)
> ```
> `dir()` liste les noms d'un module ; `sleep` (en secondes) et `sleep_ms` (en millisecondes) sont les pauses. `dir()` + `help()` sont les deux réflexes pour explorer une bibliothèque inconnue directement sur la carte.

## Voir aussi

- [[micropython-langage|Le langage MicroPython]] — hub du parcours langage
- [[micropython-prise-en-main|Prise en main]] — où le REPL apparaît pour la première fois
- [[micropython-modules|Modules et import]] — `dir()`/`import` pour explorer et charger du code
- [[micropython-debug|Débugger un programme]] — le REPL comme outil de diagnostic (transverse à venir)
