---
title: Les fonctions
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

Une **fonction** regroupe sous un nom un bloc d'instructions réutilisable. Plutôt que de recopier dix fois la même séquence de clignotement, on l'écrit une fois dans une fonction et on l'**appelle**. C'est l'outil de base pour **factoriser** (ne pas se répéter) et **nommer** (rendre le code lisible). En MicroPython, une fonction se déclare avec `def`, sans préciser le type des arguments. Voir aussi la notion générale de [[fonction-informatique|fonction]].

## Déclarer et appeler

```python
def saluer():
    print("Bonjour depuis le Pico")

saluer()        # appel -> affiche le message
```

`def` ouvre la définition. Le corps est **indenté**, et l'appel se fait par `nom()`. La définition doit être **exécutée avant** l'appel (donc écrite plus haut dans le fichier).

## Arguments et valeurs par défaut

Une fonction reçoit des **arguments** entre parenthèses. On peut donner une **valeur par défaut**, utilisée si l'argument est omis :

```python
from time import sleep

def clignote(led, n=3, duree=0.2):
    for i in range(n):
        led.on()
        sleep(duree)
        led.off()
        sleep(duree)

clignote(led)            # 3 clignotements de 0,2 s (valeurs par défaut)
clignote(led, 5)         # 5 clignotements
clignote(led, 10, 0.05)  # 10 clignotements rapides
```

## Renvoyer un résultat

`return` renvoie une valeur à l'appelant. Sans `return`, la fonction renvoie `None`.

```python
def lire_tension(adc):
    brut = adc.read_u16()        # 0..65535
    return brut * 3.3 / 65535    # conversion en volts

v = lire_tension(capteur)
print("Tension :", v, "V")
```

Une fonction peut même renvoyer **plusieurs valeurs** d'un coup (sous forme de tuple) : `return mini, maxi`, récupérées par `a, b = ...`.

## Pièges

**Oublier `return`.** Une fonction censée fournir une valeur mais sans `return` renvoie `None` : `v = lire_tension(capteur)` donnerait `None`, et le calcul suivant échouerait. Vérifier qu'on renvoie bien le résultat.

**Appeler avant de définir.** La ligne `def` doit avoir été exécutée avant l'appel. Définir les fonctions **en haut** du fichier, les appeler ensuite.

**Variables internes invisibles dehors.** Une variable créée dans une fonction est **locale** : elle n'existe pas en dehors. Pour partager une valeur, la **renvoyer** (`return`) plutôt que de compter sur une variable globale (notion de portée, cf. [[cpp-portee|portée locale/globale]]).

## Exercices

> [!question] Exercice 1 — Une fonction de clignotement paramétrable
> Écrivez une fonction `clignote(led, n)` qui fait clignoter une LED `n` fois (0,2 s on / 0,2 s off), puis appelez-la pour 4 clignotements.

> [!success]- Corrigé
> ```python
> from time import sleep
>
> def clignote(led, n):
>     for i in range(n):
>         led.on()
>         sleep(0.2)
>         led.off()
>         sleep(0.2)
>
> clignote(led, 4)
> ```
> La fonction encapsule la boucle. On la réutilise ensuite avec n'importe quel nombre. Ajouter `duree=0.2` en argument par défaut la rendrait encore plus souple.

> [!question] Exercice 2 — Convertir une lecture ADC
> Écrivez une fonction `en_volts(brut)` qui convertit une lecture brute (0–65535) en tension (référence 3,3 V) et **renvoie** le résultat. Testez-la avec `brut = 32768`.

> [!success]- Corrigé
> ```python
> def en_volts(brut):
>     return brut * 3.3 / 65535
>
> print(en_volts(32768))    # ~1.65 V (moitié de l'échelle)
> ```
> `return` rend le résultat utilisable par l'appelant (affichage, comparaison…). Une demi-échelle (32768) donne bien ~1,65 V, soit la moitié de 3,3 V : un bon test de cohérence.

## Voir aussi

- [[micropython-langage|Le langage MicroPython]] — hub du parcours langage
- [[fonction-informatique|Fonction]] — la notion générale (transverse)
- [[micropython-modules|Modules et import]] — regrouper des fonctions dans un fichier réutilisable
- [[cpp-portee|Portée locale et globale]] — ce qui survit hors d'une fonction (à comparer)
