---
title: Programmer une interruption externe en MicroPython
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main
  - interruption
  - micropython-temporisation
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Programmer une **interruption externe** en MicroPython consiste à rattacher une fonction — la routine d'interruption ([[interruption|ISR]]) — à une broche, via la méthode **`Pin.irq()`**, pour qu'elle s'exécute automatiquement à chaque front du signal, sans que la boucle ait à surveiller la broche. C'est l'outil pour **compter des impulsions rapides** ou **réagir instantanément** à un événement, même quand la boucle est occupée. Atout du Pico : **toutes les GPIO** acceptent une interruption (pas seulement deux comme sur un Uno).

## À quoi ça sert ?

Lire une broche dans la boucle ne suffit pas quand le signal est trop bref ou la boucle trop chargée : l'impulsion passe entre deux tours et n'est jamais vue. L'interruption règle le problème : l'impulsion est captée **par le matériel** à l'instant exact, la réaction est **immédiate**, et la boucle **reste libre** entre deux impulsions. Réflexe dès qu'on compte les tics d'un capteur de vitesse, les passages d'un débitmètre, les crans d'un encodeur, ou qu'on réagit sans délai à un bouton critique. On le met en place en [[preuve-de-concept|preuve de concept]].

## Procédure pas à pas

Quatre étapes : écrire une ISR courte, l'attacher avec `irq()`, lire son résultat proprement, respecter la règle d'allocation.

### 1. Écrire l'ISR

L'ISR est une fonction qui **reçoit la broche en argument** et reste minimale : ici, incrémenter un compteur. La variable partagée est un **global** (déclaré `global` dans la fonction). En Python, pas de mot-clé `volatile` : un global est toujours « volatile » de fait, mais une autre règle, propre à MicroPython, la remplace (étape 4).

```python
import micropython
micropython.alloc_emergency_exception_buf(100)   # pour voir les erreurs d'ISR

impulsions = 0

def compter(pin):                 # l'ISR : recoit la broche, reste courte
    global impulsions
    impulsions += 1
```

`alloc_emergency_exception_buf` réserve de quoi afficher une trace si l'ISR lève une erreur (sinon, échec silencieux) — à mettre une fois en tête de programme.

### 2. Attacher l'interruption

`Pin.irq()` relie la broche, l'ISR et le **front** de déclenchement :

```python
from machine import Pin

capteur = Pin(2, Pin.IN, Pin.PULL_UP)
capteur.irq(trigger=Pin.IRQ_FALLING, handler=compter)
```

Le front : `Pin.IRQ_RISING` (montant), `Pin.IRQ_FALLING` (descendant), ou les deux (`Pin.IRQ_RISING | Pin.IRQ_FALLING`). Pour compter des impulsions, **un seul front** (compter une fois par impulsion, pas deux). `capteur.irq(handler=None)` la désactive.

### 3. Lire le compteur proprement

La boucle lit le compteur **sans bloquer**. Comme il est partagé avec l'ISR, on le copie dans une **section critique** — interruptions coupées le temps de la copie — via `disable_irq()`/`enable_irq()`. La cadence d'affichage vient de [[micropython-temporisation|`ticks_ms()`]] :

```python
from machine import Pin, disable_irq, enable_irq
from time import ticks_ms, ticks_diff

t_aff = ticks_ms()
while True:
    if ticks_diff(ticks_ms(), t_aff) >= 1000:      # une fois par seconde
        t_aff = ticks_ms()
        etat = disable_irq()                       # section critique
        n = impulsions
        impulsions = 0
        enable_irq(etat)
        print(n, "impulsions/s")
```

![Montage : capteur à effet Hall (VCC, OUT, GND) relié à un Pico — VCC sur 3,3 V, OUT sur la broche GP2 en PULL_UP, GND commun ; la broche porte le nom du code.|560](/ressources/img/micropython-interruptions/montage.svg)

### 4. Respecter la règle d'allocation

**Règle propre à MicroPython** : dans une ISR « dure », on **ne peut pas allouer de mémoire**. Pas de création d'objet, pas de `print` formaté, pas de calcul flottant qui alloue. On se limite à modifier des variables déjà existantes (un compteur, un drapeau). Pour faire un vrai traitement, on **diffère** hors de l'ISR avec `micropython.schedule()` :

```python
def afficher(arg):                 # contexte planifie : allocation autorisee
    print("evenement detecte")

def isr(pin):
    micropython.schedule(afficher, 0)   # demande l'execution hors de l'ISR dure
```

## Exemple — Compteur de vitesse à effet Hall

Un capteur Hall détecte le passage d'un aimant fixé sur une roue : à chaque tour, une brève impulsion. À vitesse élevée, ces impulsions sont trop rapprochées pour être lues dans la boucle — cas d'école de l'interruption. On compte par interruption. La boucle calcule la vitesse chaque seconde.

![Chronogramme du comptage : la broche GP2 est au repos à HIGH et chute à LOW à chaque passage d'aimant ; chaque front descendant déclenche l'ISR qui fait impulsions += 1 (1, 2, 3, 4) ; une fois par seconde, la boucle lit le compteur, calcule les tr/min et le remet à zéro.|640](/ressources/img/micropython-interruptions/chronogramme-comptage.svg)

```python
from machine import Pin, disable_irq, enable_irq
from time import ticks_ms, ticks_diff
import micropython
micropython.alloc_emergency_exception_buf(100)

IMPULS_PAR_TOUR = 1                # 1 aimant => 1 impulsion par tour
capteur = Pin(2, Pin.IN, Pin.PULL_UP)
impulsions = 0

def compter(pin):                  # ISR : une impulsion de plus
    global impulsions
    impulsions += 1

capteur.irq(trigger=Pin.IRQ_FALLING, handler=compter)

t_aff = ticks_ms()
while True:
    if ticks_diff(ticks_ms(), t_aff) >= 1000:
        t_aff = ticks_ms()
        etat = disable_irq()
        n = impulsions
        impulsions = 0
        enable_irq(etat)
        tr_min = (n / IMPULS_PAR_TOUR) * 60        # calcul dans la boucle
        print(tr_min, "tr/min")
```

> [!info] Comment lire ce code
> Une fois par seconde, la boucle relève le compteur. La copie `n = impulsions` puis la remise `impulsions = 0` sont enfermées dans la section critique `disable_irq()` / `enable_irq()` (cf. étape 3) : on lit **et** on remet à zéro sans qu'une impulsion ne se glisse entre les deux. Compter sur une seconde puis repartir de zéro transforme un total en **fréquence**. La dernière ligne la convertit en tours par minute (× 60). Tout le calcul est dans la boucle : l'ISR ne fait qu'incrémenter, sans allocation.

L'ISR ne fait qu'incrémenter. Tout le calcul (conversion en tr/min, affichage) se passe dans la boucle, là où l'allocation est permise et où le temps de calcul ne gêne personne. La boucle reste réactive, aucune impulsion n'est perdue.

## Pièges

**Allouer dans l'ISR.** Créer un objet, faire un `print` formaté ou un calcul flottant dans une ISR dure lève une erreur (souvent silencieuse sans `alloc_emergency_exception_buf`). L'ISR ne touche qu'à des variables existantes. Le reste passe par `micropython.schedule()` ou la boucle.

**Lire le compteur sans section critique.** Une lecture + remise à zéro n'est pas atomique : si l'interruption tombe entre les deux, on perd une impulsion. Encadrer par `disable_irq()`/`enable_irq()`.

**Oublier `global`.** Sans `global impulsions`, la fonction crée une variable locale et le compteur de la boucle ne bouge jamais.

**Compter un bouton mécanique sans anti-rebond.** Un bouton rebondit : un appui peut générer plusieurs fronts. L'interruption ne filtre pas le rebond — pour compter des appuis, ajouter un [[micropython-entree-tor|anti-rebond]] (mémoriser `ticks_ms()` du dernier front et ignorer les suivants dans une courte fenêtre).

**Faire trop de travail à chaque impulsion.** Si l'ISR doit faire plus qu'incrémenter/mémoriser, le traitement appartient à la boucle. L'ISR signale, la boucle traite.

**Ne pas réserver le tampon d'exception.** Sans `alloc_emergency_exception_buf(100)`, une erreur dans l'ISR échoue sans message — débogage très difficile.

## Cas particulier — Diffuser le travail avec `micropython.schedule`

Quand l'événement demande un vrai traitement (allocation, communication), on ne le fait pas dans l'ISR dure : on appelle `micropython.schedule(fonction, argument)`, qui exécute `fonction` **dès que possible hors de l'ISR**, dans un contexte où l'allocation est autorisée. C'est le pont propre entre la captation immédiate (matériel) et le traitement riche (Python complet).

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — capter un signal capteur rapide (vitesse, débit, position) sur un montage isolé.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — la mesure par interruption, validée seule, sert à l'asservissement du système complet (un comptage de tours alimente une régulation de vitesse).

Roder le couple `Pin.irq` + lecture atomique sur un compteur simple donne le réflexe réutilisable pour tout signal trop rapide à scruter.

## Voir aussi

- [[interruption|Interruption]] — la notion mère : mécanisme, ISR, atomicité (à comprendre avant de coder)
- [[micropython|MicroPython]] — hub du module
- [[micropython-temporisation|sleep() vs ticks_ms()]] — cadencer l'affichage sans bloquer
- [[micropython-entree-tor|Lire une entrée TOR]] — l'anti-rebond, pour compter des appuis
- [[micropython-timers|Timers matériels]] — l'autre source d'interruption : cadencer à intervalle régulier
- [[arduino-interruptions|Interruption externe (Arduino)]] — l'équivalent C++ (`attachInterrupt`, `volatile`)
