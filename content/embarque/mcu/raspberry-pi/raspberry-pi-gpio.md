---
title: Piloter les GPIO depuis Linux
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - raspberry-pi
prerequis:
  - raspberry-pi
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

**Piloter les GPIO depuis Linux**, c'est commander les broches d'entrée/sortie du Raspberry Pi depuis un programme — en Python le plus souvent — alors qu'un [[systeme-d-exploitation|système d'exploitation]] tourne en arrière-plan. Le principe reste celui de tout [[gpio|GPIO]] : une broche en sortie applique un niveau logique, une broche en entrée le lit. Mais ici, le programme ne touche pas le matériel directement : il passe par une bibliothèque, puis par le **noyau Linux**, avant d'atteindre la broche. Cette couche supplémentaire est à la fois un confort (du code Python lisible) et une limite (pas de temps réel dur).

![Comparaison du chemin programme vers broche : accès direct sur microcontrôleur, traversée de la bibliothèque puis du noyau Linux sur un Raspberry Pi.](/ressources/img/raspberry-pi-gpio/pile.svg)

## À quoi ça sert ?

C'est le pont entre la puissance logicielle du SBC et le monde physique : lire un capteur, allumer une LED, piloter un relais ou commander un moteur depuis un programme qui, par ailleurs, fait de la vision ou parle au réseau. Sans GPIO, le Pi reste un ordinateur coupé du système mécatronique ; avec, il en devient une cible de commande à part entière (au sens du critère « programmer ou paramétrer un contrôleur numérique »).

## Les bibliothèques

Trois bibliothèques Python coexistent ; on n'en utilise qu'une à la fois.

- **`gpiozero`** — la **bibliothèque de haut niveau recommandée**. Elle raisonne en objets (`LED`, `Button`, `Servo`, `DistanceSensor`…) plutôt qu'en broches brutes, ce qui rend le code court et lisible. Elle s'appuie automatiquement sur la bonne couche bas niveau selon la carte (y compris le Pi 5).
- **`RPi.GPIO`** — l'ancienne bibliothèque historique, plus verbeuse (on configure chaque broche à la main). Très présente dans les anciens tutoriels, mais **ne fonctionne pas sur le Raspberry Pi 5**.
- **`lgpio`** — une bibliothèque bas niveau moderne, compatible Pi 5, qu'on utilise directement quand on a besoin de finesse. C'est l'une des couches sur lesquelles `gpiozero` peut reposer.

> [!tip]
> Commencez par **`gpiozero`**. On descend vers `lgpio` seulement si un besoin précis l'exige — exactement la logique des couches d'abstraction d'un microcontrôleur : on reste haut tant que ça suffit.

Toutes ces bibliothèques désignent les broches par leur **numéro GPIO « BCM »** (par exemple `GPIO17`), qui n'est **pas** le numéro de position physique sur le connecteur. C'est une source de confusion classique : un brochage du connecteur 40 broches du Pi est indispensable pour câbler juste.

![Brochage du connecteur 40 broches du Raspberry Pi : numéros BCM (GPIO) utilisés dans le code et numéros physiques, avec les alimentations 3,3 V / 5 V et les masses|640](/ressources/img/raspberry-pi-gpio/brochage-40-broches.svg)

## Allumer une LED

Câblage : la broche `GPIO17` → une **résistance** (~330 Ω) → l'anode de la LED → la cathode → une broche **GND**. La résistance limite le courant ; le niveau de sortie est à **3,3 V**.

![Câblage sur Raspberry Pi : LED sur GPIO17 via une résistance 330 Ω vers GND, et bouton entre GPIO2 et GND (pull-up interne) ; broches en logique 3,3 V.|640](/ressources/img/raspberry-pi-gpio/montage-led-bouton.svg)

Avec `gpiozero`, le programme tient en quelques lignes :

```python
from gpiozero import LED
from time import sleep

led = LED(17)        # GPIO17 (numérotation BCM)

while True:
    led.on()
    sleep(0.5)
    led.off()
    sleep(0.5)
```

`LED(17)` crée l'objet, `on()` / `off()` pilotent l'état. La bibliothèque offre même un raccourci pour le clignotement : `led.blink(on_time=0.5, off_time=0.5)` fait la même chose en tâche de fond, sans boucle bloquante.

> [!warning]
> **Le courant que peut fournir une broche du Pi est limité** (de l'ordre de quelques milliampères à ~16 mA par broche, avec un total à ne pas dépasser sur l'ensemble). On ne branche **jamais** un moteur ou un actionneur de puissance directement sur une broche : il faut un transistor, un pont en H ou un relais, comme sur un [[microcontroleur|microcontrôleur]]. Une LED avec sa résistance est dans les clous ; au-delà, on passe par un étage de puissance.

## Lire un bouton

Câblage : un bouton entre `GPIO2` et `GND`. On active la **résistance de tirage interne** (vers le haut) : au repos la broche lit un niveau haut, à l'appui elle est tirée vers la masse (niveau bas). `gpiozero` gère ce tirage par défaut.

```python
from gpiozero import LED, Button
from time import sleep

bouton = Button(2)   # GPIO2, tirage interne vers le haut (appui = niveau bas)
led = LED(17)

while True:
    if bouton.is_pressed:
        led.on()
    else:
        led.off()
    sleep(0.01)
```

`Button` expose `is_pressed`, mais aussi une approche par **événements**, plus idiomatique :

```python
from gpiozero import Button
from signal import pause

bouton = Button(2)
bouton.when_pressed  = lambda: print("Appui")
bouton.when_released = lambda: print("Relâché")

pause()   # laisse le programme vivre, en attente d'événements
```

C'est l'équivalent, côté SBC, de la lecture d'une [[entree-sortie|entrée logique]] sur microcontrôleur — en plus concis, parce que l'anti-rebond et la gestion d'événements sont déjà dans la bibliothèque.

## Pas de temps réel dur

Voilà la différence de fond avec un microcontrôleur, et elle conditionne ce qu'on peut confier au Pi. Entre le script et la broche, **le noyau Linux s'intercale** : son ordonnanceur peut suspendre le programme à tout moment pour exécuter une autre tâche. Conséquences :

- la durée d'un `sleep()` n'est **pas** garantie au millième près — elle peut s'allonger si le système est occupé ;
- la **gigue** (variation du temps de réaction) rend le Pi inadapté à une boucle de commande cadencée finement ;
- la **PWM logicielle** (par exemple `PWMLED`) tremble : pour un signal propre, il faut une PWM matérielle, et même elle reste moins fiable qu'un timer de microcontrôleur.

La règle pratique : **le SBC pour le haut niveau** (décision, vision, réseau), **le microcontrôleur pour le temps réel** (asservissement, commande moteur cadencée). Quand un projet a besoin des deux, on les fait travailler ensemble — voir [[raspberry-pi-projet|le SBC dans un projet]].

## Niveaux de tension — 3,3 V

Les broches du Pi sont en **3,3 V et ne tolèrent pas le 5 V**. Lire la sortie d'un capteur alimenté en 5 V, ou la broche d'un Arduino, **directement** sur une entrée du Pi peut endommager la broche. La parade : un **adaptateur de niveau** (level shifter) entre les 5 V et le Pi. Le détail est dans [[niveaux-de-tension|niveaux de tension]].

## Pièges

**Confondre numéro BCM et numéro physique.** `LED(17)` vise `GPIO17`, pas la 17ᵉ broche du connecteur. Toujours câbler avec un brochage sous les yeux.

**Appliquer 5 V sur une entrée.** Le GPIO n'est pas tolérant 5 V ; un signal 5 V passe par un adaptateur de niveau, jamais en direct.

**Tirer trop de courant d'une broche.** Une LED avec résistance, oui ; un moteur, non. Au-delà de quelques milliampères, étage de puissance obligatoire.

**Attendre du temps réel.** Une régulation rapide ou un signal cadencé au microseconde ne se font pas de façon fiable sous Linux. Si le projet l'exige, déporter cette partie sur un microcontrôleur.

**Utiliser `RPi.GPIO` sur un Pi 5.** L'ancienne bibliothèque n'y fonctionne pas. Préférer `gpiozero` (qui s'adapte) ou `lgpio`.

## Aller plus loin

- [Documentation de gpiozero](https://gpiozero.readthedocs.io/) — recettes pour LED, boutons, capteurs, moteurs.
- [Brochage GPIO du Raspberry Pi](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#gpio) — le connecteur 40 broches, numéros BCM et fonctions.

## Voir aussi

- [[raspberry-pi|Raspberry Pi]] — hub du module SBC
- [[raspberry-pi-projet|Le SBC dans un projet]] — répartir haut niveau (SBC) et temps réel (microcontrôleur)
- [[gpio|GPIO]] — la notion d'entrée/sortie logique, indépendante de la carte
- [[niveaux-de-tension|Niveaux de tension]] — la logique 3,3 V et l'adaptation depuis le 5 V
- [[entree-sortie|Entrée/sortie]] — lire une entrée, piloter une sortie
