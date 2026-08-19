---
title: Programmation non bloquante
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
  - micropython-temporisation
  - machine-a-etats
  - micropython-machine-a-etats
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

La **programmation non bloquante** est une **façon de structurer** un programme embarqué pour que la boucle principale ne s'arrête **jamais**. Au lieu d'attendre avec `sleep()`, chaque tâche avance un peu à chaque tour de boucle puis rend la main : le système mène **plusieurs activités de front** et reste réactif. Ce n'est pas une fonction à appeler, mais une **discipline d'architecture** qui s'appuie sur la [[micropython-temporisation|temporisation par `ticks_ms()`]] et sur les [[machine-a-etats|machines à états]]. MicroPython offre en plus un outil dédié, **`asyncio`**, qui formalise cette coopération.

![Comparaison de deux boucles principales. À gauche, l'approche bloquante : la boucle alterne une action courte et un long sleep() pendant lequel tout est figé, et un bouton pressé pendant le sleep() n'est vu qu'à la fin. À droite, l'approche non bloquante : la boucle tourne en continu et distribue le travail à de petites tâches, et un bouton pressé est vu dès le tour suivant.|680](/ressources/img/micropython-programmation-non-bloquante/bloquant-vs-non-bloquant.svg)

## À quoi ça sert ?

`sleep()` fige **tout** le programme, pas seulement la tâche qui attend : pendant un `sleep(0.5)`, le Pico ne lit plus son bouton et manque ses mesures. Tant qu'un script ne fait qu'une chose, on ne le remarque pas ; dès qu'il en fait deux, c'est le mur.

La règle qui en découle tient en une phrase : *aucune fonction ne doit bloquer, et la boucle doit toujours pouvoir reboucler*. Pourquoi cette discipline vaut pour tout programme embarqué, ce qu'elle fait gagner et où elle s'arrête : voir la notion transverse [[programmation-non-bloquante|programmation non bloquante]]. Ici, on la met en œuvre en MicroPython — dès la [[preuve-de-concept|preuve de concept]], au premier montage qui combine plusieurs fonctions.

## Procédure pas à pas

Quatre étapes : poser la règle, rendre chaque tâche autonome, les assembler dans la boucle, savoir refactorer un code bloquant.

### 1. Bannir `sleep()`, penser en tâches

Le basculement mental : ce que le système « fait » se découpe en **tâches**, et chaque tâche devient une **fonction appelée à chaque tour**, qui agit si c'est le moment et **rend la main immédiatement**. Plus aucune fonction n'attend.

### 2. Donner à chaque tâche son temps et son état

Une tâche autonome embarque ce dont elle a besoin : **du temps** — sa propre date de dernier passage, comparée via le patron `ticks_diff(ticks_ms(), dernier) >= intervalle` (voir [[micropython-temporisation|temporisation]]) ; **un état** — si elle a des modes, c'est une petite [[machine-a-etats|machine à états]] avec sa propre variable.

### 3. Assembler les tâches dans la boucle

La boucle se contente d'**appeler chaque tâche à chaque tour** (la *boucle coopérative*, ou *super-loop*) :

```python
while True:
    tache_led()        # chacune agit si c'est son moment,
    tache_capteur()    # puis rend la main aussitot
    tache_bouton()
```

L'ordre importe peu tant que chaque tâche reste brève : la boucle tourne très vite, toutes sont servies quasi simultanément.

![Frise : trois tâches à cadences différentes (LED, capteur, bouton) progressent en parallèle dans une même boucle, sans attente bloquante|640](/ressources/img/micropython-programmation-non-bloquante/frise-taches.svg)

### 4. Refactorer un code bloquant

Le clignotant bloquant :

```python
while True:
    led.on();  sleep(0.5)      # <- pause : tout est fige
    led.off(); sleep(0.5)
```

devient une tâche qui **mémorise le temps** au lieu d'attendre :

```python
from time import ticks_ms, ticks_diff

t_led = ticks_ms()
etat_led = 0

def tache_led():
    global t_led, etat_led
    if ticks_diff(ticks_ms(), t_led) >= 500:    # a-t-on attendu assez ?
        t_led = ticks_ms()
        etat_led ^= 1
        led.value(etat_led)
```

Règle de refactor : *chaque `sleep()` cache un « attendre que tel temps soit écoulé » — on le réécrit en test sur `ticks_diff`, et chaque « attendre qu'un événement arrive » devient un test sur une condition à chaque tour.*

## Exemple — Une station qui fait trois choses à la fois

Clignoter une LED (1 Hz), lire un capteur (10 Hz) et réagir sans délai à un bouton. Trois tâches coopératives, aucune ne bloque.

```python
from machine import Pin, ADC
from time import ticks_ms, ticks_diff

led = Pin(15, Pin.OUT)
capteur = ADC(Pin(26))
bouton = Pin(14, Pin.IN, Pin.PULL_UP)

t_led = ticks_ms(); etat_led = 0
t_cap = ticks_ms()
dernier_btn = 1

def tache_led():
    global t_led, etat_led
    if ticks_diff(ticks_ms(), t_led) >= 500:
        t_led = ticks_ms(); etat_led ^= 1; led.value(etat_led)

def tache_capteur():
    global t_cap
    if ticks_diff(ticks_ms(), t_cap) >= 100:
        t_cap = ticks_ms(); print(capteur.read_u16())

def tache_bouton():
    global dernier_btn
    lect = bouton.value()
    if dernier_btn == 1 and lect == 0:        # front descendant
        print("appui !")
    dernier_btn = lect

while True:
    tache_led()
    tache_capteur()
    tache_bouton()
```

La boucle passe ses trois tâches en revue à chaque tour : la LED clignote, le capteur est lu dix fois par seconde, le bouton est vu **dès l'appui** — parce que rien n'arrête jamais la boucle. Ajouter une quatrième activité = écrire une quatrième tâche. La même chose en `sleep()` serait infaisable.

## Cas particulier — `asyncio`, l'outil intégré de MicroPython

Là où Arduino n'a que le patron `millis()` à la main, MicroPython embarque **`asyncio`** : on écrit chaque tâche comme une coroutine (`async def`) qui rend la main avec `await asyncio.sleep_ms(...)`, et l'ordonnanceur s'occupe de les entrelacer. Le code redevient linéaire (on « attend » dans chaque tâche) **sans** bloquer les autres.

```python
import asyncio                 # 'uasyncio' sur les firmwares plus anciens
from machine import Pin

led = Pin(15, Pin.OUT)

async def clignoter():
    while True:
        led.toggle()
        await asyncio.sleep_ms(500)     # rend la main pendant l'attente

async def lire_capteur():
    while True:
        print("mesure")
        await asyncio.sleep_ms(100)

async def main():
    asyncio.create_task(clignoter())
    asyncio.create_task(lire_capteur())
    while True:
        await asyncio.sleep_ms(1000)

asyncio.run(main())
```

`asyncio` est la forme idiomatique de la coopération en MicroPython dès que les tâches se multiplient. Le `await` est le moment où une tâche **rend la main** — un `sleep()` bloquant au milieu d'une coroutine casserait tout, comme dans la super-loop.

## Cas particulier — La limite : RTOS et second cœur

La coopération repose sur la **bonne volonté** de chaque tâche : si l'une s'attarde, elle retarde les autres. Quand certaines doivent respecter des **échéances strictes**, on atteint la limite. Deux prolongements : un **RTOS** (FreeRTOS, qui *préempte* — voir [[esp32-freertos|FreeRTOS sur ESP32]] et [[firmware|firmware]]) ; ou, sur le RP2040/RP2350 **bicœur**, lancer une tâche sur le **second cœur** (`import _thread`) pour un vrai parallélisme matériel.

## Pièges

**Un `sleep()` qui se cache dans une tâche.** Un seul `sleep()` oublié fige tout le programme. La règle vaut pour **chaque** fonction de la boucle (et chaque coroutine `asyncio`).

**Une tâche trop longue.** Même sans `sleep()`, une tâche qui calcule longtemps ou attend activement bloque les autres. Chaque tâche doit être **brève** et, si besoin, découpée en états.

**Croire que c'est du vrai parallélisme.** Sur un seul cœur, une seule tâche s'exécute à la fois, très vite, en séquence. Seules les [[interruption|interruptions]] (et le second cœur) s'exécutent réellement « par-dessus » la boucle.

**Variables de temps mal gérées.** Toujours comparer avec `ticks_diff()`, jamais par soustraction directe (débordement du compteur — voir [[micropython-temporisation|temporisation]]).

**Attendre une réponse en bloquant.** Guetter une trame par attente active fige la boucle. Transformer l'attente en **test à chaque tour** : « la réponse est-elle arrivée ? sinon, je repasse plus tard ».

**Oublier `global` dans une tâche.** Une fonction qui met à jour sa date/état doit déclarer ces variables `global` (ou les encapsuler dans une classe/objet), sinon Python crée une variable locale et l'état est perdu d'un tour à l'autre.

## Raccrochage projet

- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — dès que le montage fait plus d'une chose (mesurer *et* commander *et* signaler), structurer en tâches non bloquantes plutôt que de découvrir le blocage à l'intégration.
- **[[integration-et-tests|Phase d'intégration et tests]]** — le firmware du système complet est un ensemble de tâches coopératives (ou `asyncio`, ou un RTOS) : chaque fonction validée seule y devient une tâche.

Adopter la discipline non bloquante au premier montage multi-fonctions évite la réécriture intégrale qui guette tout programme bâti sur des `sleep()`.

## Voir aussi

- [[micropython-temporisation|sleep() vs ticks_ms()]] — la brique de chaque tâche
- [[machine-a-etats|Machine à états]] — chaque tâche à modes est une petite machine à états
- [[micropython-machine-a-etats|Machine à états sur MicroPython]] — l'implémentation de ce concept dans le parcours MicroPython
- [[micropython|MicroPython]] — hub du module
- [[micropython-interruptions|Interruptions]] — pour les événements que la boucle ne peut pas attraper assez vite
- [[micropython-timers|Timers matériels]] — pour imposer une cadence précise à une tâche critique
- [[programmation-non-bloquante|Programmation non bloquante]] — la notion transverse : le patron de temporisation, ses jumeaux d'une famille à l'autre, et la borne du RTOS
- [[firmware|Firmware]] — l'architecture du code embarqué et l'horizon RTOS (transverse)
- [[arduino-programmation-non-bloquante|Programmation non bloquante (Arduino)]] — l'équivalent C++ (`millis()`)
