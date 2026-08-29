---
title: Lire une entrée TOR
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-gpio
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Une **entrée TOR** (Tout Ou Rien) lit un signal binaire qui ne prend que deux états : appuyé ou relâché, présent ou absent. Bouton-poussoir, interrupteur, fin de course, capteur de présence numérique : tous se lisent par `Pin.value()`. La difficulté n'est pas la lecture elle-même mais le traitement du **rebond** : un contact mécanique génère plusieurs commutations parasites en quelques millisecondes, qu'il faut filtrer pour obtenir un signal propre.

## À quoi ça sert ?

Lire une entrée TOR est le geste fondateur de toute interface utilisateur embarquée : démarrer un cycle, valider une consigne, déclencher une mesure, détecter une fin de course. Sur un projet typique on en a plusieurs (bouton *Marche/Arrêt*, fin de course de chaque axe). La bonne pratique : apprendre une fois la lecture *avec anti-rebond*, puis la dupliquer proprement sur chaque entrée.

## Procédure pas à pas

Quatre étapes : câbler avec pull-up, lire, ajouter l'anti-rebond, détecter le front.

### 1. Câbler le bouton avec `PULL_UP`

Un côté du bouton sur la broche (ici GP14), l'autre sur GND. Aucune résistance externe : le tirage interne (`Pin.PULL_UP`) maintient `3,3 V` au repos et tombe à GND à l'appui.

**Logique inversée** : `bouton.value()` renvoie `1` au repos, `0` quand appuyé.

![Montage : bouton-poussoir entre GP14 et GND (lecture PULL_UP : repos = 1, appui = 0) et LED + résistance 220 Ω sur GP15, réutilisée dans l'exemple, sur un Raspberry Pi Pico|600](/ressources/img/micropython-entree-tor/montage-bouton.svg)

### 2. Lecture brute

La console est le [[micropython-repl|REPL]] : `print()` y affiche, comme le moniteur série d'Arduino.

```python
from machine import Pin
from time import sleep

bouton = Pin(14, Pin.IN, Pin.PULL_UP)   # entrée + tirage interne : repos = 1

while True:
    print(bouton.value())               # affiche 1 (relâché) ou 0 (appuyé)
    sleep(0.01)                          # ~100 lectures par seconde
```

Lancez le script et appuyez : on voit `1, 1, 0, 0, 1...`. En regardant de près, quelques transitions parasites apparaissent au moment de l'appui (`0, 1, 0, 1`) : c'est le **rebond mécanique**, qui dure quelques millisecondes.

### 3. Anti-rebond logiciel

La parade la plus simple : ignorer toute commutation non confirmée pendant 20–50 ms. On chronomètre avec [[micropython-temporisation|`ticks_ms()` et `ticks_diff()`]] (jamais une soustraction directe de `ticks_ms()`, qui déborde) :

![Chronogramme de l'anti-rebond : à l'appui, la lecture brute oscille quelques millisecondes (rebond) ; après 30 ms sans changement, l'état stable bascule une seule fois.|640](/ressources/img/micropython-entree-tor/rebond.svg)

```python
from machine import Pin
from time import ticks_ms, ticks_diff

bouton = Pin(14, Pin.IN, Pin.PULL_UP)

dernier_etat = 1                 # dernière valeur LUE (tremble pendant le rebond)
etat_stable = 1                  # état CONFIRMÉ (celui sur lequel on agit)
dernier_changement = ticks_ms()  # date du dernier changement de lecture
DELAI_REBOND = 30                # calme exigé avant de valider (ms)

while True:
    lecture = bouton.value()                 # lecture brute à chaque tour

    if lecture != dernier_etat:              # la lecture vient de changer ?
        dernier_changement = ticks_ms()      # on note QUAND
        dernier_etat = lecture               # et la nouvelle valeur lue

    # restée identique assez longtemps ? (le rebond est fini)
    if ticks_diff(ticks_ms(), dernier_changement) > DELAI_REBOND:
        if lecture != etat_stable:           # l'état confirmé a vraiment changé
            etat_stable = lecture            # on valide le nouvel état
            print("Bouton :", "appuye" if etat_stable == 0 else "relache")
```

**Comment lire ce code.** L'astuce tient en **deux variables**. `dernier_etat` suit la valeur *brute* lue à l'instant (elle tremble pendant le rebond). `etat_stable` ne retient que l'état *confirmé*, le seul sur lequel on agit. À chaque tour de boucle :

- si la lecture **change**, on ne croit pas le bouton tout de suite : on note seulement *l'instant* du changement (`dernier_changement = ticks_ms()`) ;
- tant qu'elle **rechange** (rebond), cet instant est repoussé encore et encore ;
- dès qu'elle **reste identique pendant 30 ms**, le rebond est terminé : on valide `etat_stable`.

`ticks_ms()` renvoie un compteur de millisecondes depuis le démarrage. `ticks_diff(maintenant, depart)` donne le temps écoulé *depuis le dernier tremblement*, en gérant le débordement du compteur, ce qu'une soustraction directe ne ferait pas. Le comparer à `DELAI_REBOND`, c'est demander : « le signal est-il calme depuis assez longtemps pour y croire ? »

Maintenant chaque appui produit *exactement une* ligne, peu importe la qualité du bouton.

### 4. Détecter le front (appui vs maintien)

Souvent on veut réagir à *l'appui* lui-même, pas tant que la touche est maintenue. C'est la **détection de front descendant** — dans la branche stable :

```python
        if etat_stable == 0:
            # FRONT DESCENDANT — bouton vient d'être appuyé
            print("Appui detecte !")
```

Variante *toggle* (un appui inverse une LED) : `led.toggle()` à cet endroit.

## Exemple — Compter les appuis et basculer une LED

Anti-rebond + détection de front + action visible.

```python
from machine import Pin
from time import ticks_ms, ticks_diff

bouton = Pin(14, Pin.IN, Pin.PULL_UP)
led = Pin(15, Pin.OUT)

dernier_etat = 1                 # mêmes 2 variables qu'à l'étape 3
etat_stable = 1
dernier_changement = ticks_ms()
DELAI_REBOND = 30
compteur = 0                     # nombre d'appuis comptés

while True:
    lecture = bouton.value()
    if lecture != dernier_etat:              # --- bloc anti-rebond, identique à l'étape 3 ---
        dernier_changement = ticks_ms()
        dernier_etat = lecture
    if ticks_diff(ticks_ms(), dernier_changement) > DELAI_REBOND:
        if lecture != etat_stable:
            etat_stable = lecture
            if etat_stable == 0:             # front descendant = un nouvel appui
                compteur += 1                # +1 appui
                led.toggle()                 # on inverse la LED
                print("Appui n°", compteur)
```

Chaque appui incrémente un compteur et inverse la LED — comportement net, insensible au rebond.

## Pièges

**Pas d'anti-rebond.** Symptôme typique : un appui compte pour 3 ou 4. Le rebond est invisible à l'œil mais visible à la milliseconde du processeur.

**Soustraire `ticks_ms()` directement.** `ticks_ms()` déborde et repart à zéro : `ticks_ms() - depart` peut devenir négatif. **Toujours `ticks_diff(maintenant, depart)`**, conçu pour gérer le débordement.

**Entrée flottante.** Sans `PULL_UP` (ou résistance externe), la broche flotte : la LED bascule au moindre passage de main. Presque toujours `PULL_UP` + bouton vers GND.

**Inverser la logique du pull-up.** `value() == 1` signifie *relâché*, pas *appuyé*.

**Confondre maintien et appui.** Réagir à `value() == 0` agit tant que le bouton est maintenu (un compteur s'emballe). Pour un comportement *par appui*, détecter le **front**.

**`sleep()` dans la boucle de lecture.** Un `sleep(0.5)` rate les appuis brefs. Le pattern anti-rebond ci-dessus n'utilise volontairement aucun `sleep` : il observe le temps via `ticks_ms()`.

**Bouton entre 3,3 V et la broche.** `PULL_UP` + bouton vers 3,3 V = lecture toujours `1`. Toujours bouton vers **GND**.

## Cas particulier — Réagir vite, ou beaucoup de boutons

- **Interruption** — pour ne pas rater un appui pendant un calcul, `bouton.irq(trigger=Pin.IRQ_FALLING, handler=...)` déclenche une fonction sur le front, sans scrutation (voir [[micropython-interruptions|interruptions]]). L'anti-rebond reste nécessaire.
- **Plusieurs boutons** — on duplique le pattern (un état stable + un instant de changement par bouton), idéalement encapsulé dans une [[micropython-fonctions|fonction]] ou une classe.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — tout bouton de commande (Marche/Arrêt, validation) testé isolément avec anti-rebond avant intégration.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — chaque fin de course mécanique se valide comme une entrée TOR avec anti-rebond.

Le pattern anti-rebond est à coller-modifier d'une fiche à l'autre une fois compris : 10 minutes ici évitent des heures de débogage où l'on cherche pourquoi le système compte les appuis de travers.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-gpio|Configurer les GPIO]] — prérequis sur `Pin` et `PULL_UP`
- [[micropython-sortie-tor|Piloter une sortie TOR]] — la sortie correspondante
- [[micropython-temporisation|Temporiser]] — `sleep()` vs `ticks_ms()`, indispensable à l'anti-rebond non bloquant
- [[micropython-interruptions|Interruptions]] — réagir au front sans scrutation
- [[arduino-entree-tor|Lire une entrée TOR (Arduino)]] — l'équivalent C++
