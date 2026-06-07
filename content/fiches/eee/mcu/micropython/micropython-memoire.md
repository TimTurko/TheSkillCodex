---
title: Gérer la mémoire en MicroPython
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main
  - memoire
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Gérer la **mémoire** en MicroPython, c'est composer avec une ressource rare — un microcontrôleur a peu de [[memoire|RAM]] — **et** avec l'interpréteur Python, qui en consomme une part. Grande différence avec Arduino : MicroPython a un **ramasse-miettes** (*garbage collector*, module `gc`) qui libère automatiquement la mémoire inutilisée. On ne gère donc pas la mémoire à la main (pas de `F()`/`PROGMEM`), mais on surveille deux ennemis : la **fragmentation** du tas et les **pauses** du ramasse-miettes. Le module `gc` permet de mesurer et de reprendre la main.

## À quoi ça sert ?

Sur un PC, la mémoire semble infinie ; sur un microcontrôleur, elle est comptée — et en MicroPython, **l'interpréteur en occupe déjà une partie**, laissant moins de RAM utile que la taille brute de la puce. Un programme qui crée des objets en boucle (chaînes, listes) peut fragmenter le tas au point qu'une allocation échoue, alors qu'il « reste » de la mémoire en théorie. Le symptôme : une `MemoryError`, ou des **pauses** quand le ramasse-miettes se déclenche. Savoir mesurer et limiter les allocations est une compétence de survie dès qu'un projet grossit. L'enjeu se pose en [[preuve-de-concept|preuve de concept]], quand le code dépasse l'exemple.

## Procédure pas à pas

Quatre étapes : mesurer la RAM, comprendre le ramasse-miettes, limiter les allocations, déporter en flash.

### 1. Mesurer la RAM avec `gc`

On ne devine pas, on mesure. Le module `gc` donne la mémoire libre et utilisée ; `micropython.mem_info()` un rapport détaillé :

```python
import gc, micropython

print("RAM libre   :", gc.mem_free())     # octets disponibles
print("RAM utilisee :", gc.mem_alloc())
micropython.mem_info()                     # rapport detaille (fragmentation)
```

Imprimer `gc.mem_free()` à divers endroits révèle où la mémoire fond et repère une fuite.

### 2. Comprendre le ramasse-miettes

MicroPython libère automatiquement les objets qui ne sont plus référencés — mais à des moments **non choisis**, ce qui peut introduire une **pause** au mauvais moment (dans un asservissement, par exemple). On peut **forcer** une collecte à un instant maîtrisé :

```python
gc.collect()        # libere maintenant, plutot que de subir une pause plus tard
```

Appeler `gc.collect()` à un point calme de la boucle (pas dans une [[micropython-interruptions|ISR]], pas dans une section critique) évite les pauses surprises.

### 3. Limiter les allocations (la vraie discipline)

Le tas se fragmente quand on crée beaucoup de petits objets éphémères. Deux réflexes :

- **ne pas accumuler de chaînes/listes dans une boucle** — chaque `+=` sur une chaîne crée un nouvel objet ; traiter au fil, ou construire une fois (`",".join(...)`) ;
- **réutiliser des tampons pré-alloués** — un `bytearray` créé une fois et réécrit (avec `memoryview` pour des tranches) plutôt qu'un nouvel objet à chaque tour.

Et pour les **constantes entières**, `const()` les stocke plus efficacement qu'une variable :

```python
from micropython import const
TAILLE_TAMPON = const(64)        # constante entiere, compilee efficacement
```

### 4. Déporter du code en flash (l'analogue de `F()`)

Là où Arduino garde des textes en flash avec `F()`/`PROGMEM`, MicroPython **gèle des modules** dans le firmware (*frozen bytecode*, ou fichiers `.mpy`) : le code s'exécute alors depuis la flash sans être chargé en RAM, ce qui **économise beaucoup de RAM** pour les gros modules/bibliothèques (voir [[micropython-bibliotheques|bibliothèques]]). C'est le levier principal quand l'interpréteur + les bibliothèques saturent la mémoire.

Prendre capture d'écran de *le REPL affichant `gc.mem_free()` avant et après `gc.collect()`, montrant la mémoire récupérée*.

## Exemple — Diagnostiquer une `MemoryError` par accumulation

Un programme lit un capteur en rafale et accumule les valeurs dans une chaîne. Au bout d'un moment : `MemoryError`, ou des pauses. Le coupable : la création d'une nouvelle chaîne à chaque tour.

```python
# AVANT — alloue et fragmente a chaque tour
def lire_rafale(capteur, n):
    resultat = ""
    for _ in range(n):
        resultat += str(capteur.read_u16()) + ","   # nouvelle chaine a chaque +=
    return resultat
```

Réécrit pour ne plus accumuler (on traite au fil), ou pour construire en une fois :

```python
# APRES (option 1) — traite immediatement, rien n'enfle
def lire_rafale(capteur, n):
    for _ in range(n):
        print(capteur.read_u16())

# APRES (option 2) — une seule allocation a la fin
def lire_rafale(capteur, n):
    valeurs = [capteur.read_u16() for _ in range(n)]
    return ",".join(str(v) for v in valeurs)
```

La démarche générale : **mesurer** `gc.mem_free()`, repérer les créations d'objets dans les boucles, les supprimer ou les regrouper, et placer un `gc.collect()` à un point calme. Sur un programme qui tourne longtemps, l'écart est spectaculaire — et la `MemoryError` disparaît.

## Pièges

**Croire que le ramasse-miettes dispense de tout.** Il libère l'inutilisé, mais ne **défragmente pas** suffisamment : créer beaucoup de petits objets éphémères fragmente le tas, et une grosse allocation peut échouer alors qu'il « reste » de la mémoire. Limiter les allocations reste nécessaire.

**Subir les pauses du ramasse-miettes.** Une collecte automatique peut tomber pendant un asservissement et introduire une latence. Appeler `gc.collect()` à un moment **choisi** (point calme de la boucle) reprend la main.

**Accumuler des chaînes dans une boucle.** Chaque `+=` sur une chaîne crée un nouvel objet — cause n°1 de fragmentation. Traiter au fil, ou `",".join(...)` une seule fois.

**Allouer dans une ISR.** Créer un objet dans une [[micropython-interruptions|interruption]] (ou un callback de [[micropython-timers|timer]]) est **interdit** : pas d'allocation en contexte d'interruption. Pré-allouer, ne manipuler que des variables existantes.

**Oublier que l'interpréteur occupe de la RAM.** La RAM utile est inférieure à la taille brute de la puce (l'interpréteur + les modules importés en consomment). Mesurer `gc.mem_free()` au démarrage donne la marge réelle.

**Importer de gros modules sans les geler.** Un gros module chargé en RAM peut à lui seul saturer. Le **geler** dans le firmware (ou `.mpy`) le fait tourner depuis la flash — l'équivalent MicroPython de garder du code en flash.

## Cas particulier — `bytearray` et `memoryview`

Pour manipuler des blocs de données (trames, tampons capteur) sans réallouer, on crée **un `bytearray` une fois** et on le réécrit en place ; `memoryview` permet d'en prendre des **tranches sans copie**. C'est la technique pour traiter un flux (UART, SPI, audio) sur peu de RAM sans fragmenter le tas — l'opposé de la création d'objets jetables à chaque tour.

## Raccrochage projet

- **[[preuve-de-concept|Phase de preuve de concept]]** — dès que le code dépasse l'exemple (plusieurs capteurs, affichage, journalisation), surveiller `gc.mem_free()` et limiter les allocations avant de heurter le mur de la RAM.
- **[[integration-et-tests|Phase d'intégration et tests]]** — l'intégration de plusieurs fonctions cumule leurs besoins mémoire ; un budget RAM tenu fonction par fonction évite les `MemoryError` qui n'apparaissent qu'une fois tout assemblé.

Anticiper la mémoire évite la situation la plus pénible en embarqué : un programme qui marchait, qui plante après l'ajout d'une fonctionnalité — ici une `MemoryError` ou des pauses — et qu'on traque faute d'avoir regardé `gc.mem_free()`.

## Voir aussi

- [[memoire|Mémoire]] — la notion : les types de mémoire d'un microcontrôleur
- [[micropython-bibliotheques|Utiliser une bibliothèque]] — geler des modules dans le firmware pour économiser la RAM
- [[micropython-eeprom|Stockage persistant]] — conserver des données après extinction (fichier sur la flash)
- [[micropython-interruptions|Interruptions]] — la règle « pas d'allocation en contexte d'interruption »
- [[micropython|MicroPython]] — hub du module
- [[arduino-memoire|Gérer la mémoire (Arduino)]] — l'équivalent C++ (`F()`, `PROGMEM`, pas de ramasse-miettes)
