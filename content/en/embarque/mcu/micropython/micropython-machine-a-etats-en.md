---
title: Programming a state machine in MicroPython
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main-en
  - micropython-temporisation-en
  - machine-a-etats-en
aa:
  - RA-EEE-C03-2/EEE/5
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-machine-a-etats.md
source_sha256: 202159d9c8ac1041d91efeff7c6a43bb428adc58949995f34051fca83d9ba563
---

Programming a **state machine** in MicroPython means turning a diagram of [[machine-a-etats-en|states and transitions]] into Python code. Python has **neither `switch` nor `enum`** the way C++ does: we use named **constants** and an **`if/elif`** cascade (or a dictionary of states). One variable holds the current state, and the loop runs the matching block on every pass. Paired with **non-blocking** timing ([[micropython-temporisation-en|`ticks_ms()`]]), this pattern drives sequential behaviour — traffic lights, a gate, a machine cycle — without ever freezing the program with `sleep()`.

## What is it for?

As soon as a rig has to run through phases ("green, then amber, then red"), two traps are waiting: stacking up `sleep()` calls that leave the board deaf while it waits, or piling on booleans until nothing can be read. The state machine pattern settles both. It **structures** the code into one clear block per state, mirroring the diagram. It keeps the loop **responsive** (between two changes of state, the Pico carries on reading its inputs). It makes the **transitions explicit**, easy to re-read and to test. It is the skeleton of almost any control program, put in place during the [[preuve-de-concept-en|proof of concept]].

## Step by step

Four steps: list the states, structure the loop, code the timed transitions, wire it up and test.

### 1. List the states (constants)

There is no `enum`: we name the states with **constants** (readable throughout the code), one variable holds the current state, **explicitly initialised**, and a time variable will stamp the moment we entered that state:

```python
from time import ticks_ms, ticks_diff

VERT, JAUNE, ROUGE = 0, 1, 2     # constantes nommees (pas de enum)

etat = VERT                       # etat initial explicite
t_debut = ticks_ms()              # instant d'entree dans l'etat courant
```

Named constants rather than bare `0`, `1`, `2`: `etat == VERT` can be read back, `etat == 0` cannot.

### 2. Structure the loop with `if / elif`

One block per state. On every pass, only one of them runs — the one for the current state:

```python
while True:
    if etat == VERT:
        # 1) appliquer les sorties de l'etat
        # 2) tester les transitions
        ...
    elif etat == JAUNE:
        ...
    elif etat == ROUGE:
        ...
```

Two things inside each block: reflect the state on the outputs (light the right LEDs), then test the conditions for leaving towards another state.

### 3. Code the transitions and the non-blocking timing

A **transition** is coded in two moves: change `etat`, then **re-stamp** the entry with `t_debut = ticks_ms()`. For a delay there is no `sleep()`: we compare the time elapsed since entry using `ticks_diff`:

```python
if etat == VERT:
    if ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT:   # evenement : duree ecoulee
        etat = JAUNE
        t_debut = ticks_ms()                            # on date l'entree dans le nouvel etat
```

`ticks_diff(ticks_ms(), t_debut)` gives the time spent in the state. The comparison blocks nothing (see [[micropython-temporisation-en|timing]]). A **guard condition** from the diagram becomes a combined `if`: `if (duree ecoulee) or (demande_pieton and minimum ecoule)`.

### 4. Wire it up and upload

For the example: five LEDs (three for cars, two for pedestrians) with 220 Ω series resistors, and a button between a pin and GND in `PULL_UP` (see [[micropython-entree-tor-en|reading a digital input]] for the debouncing).

![Wiring of the crossing on a Pico: green car LED (GP12), amber (GP11), red (GP10), green pedestrian LED (GP9) and red (GP8), each with its 220 Ω resistor to GND, and a push button between GP14 and GND; the pins carry the names used in the code.|600](/ressources/img/micropython-machine-a-etats/montage.svg)

## Example — Traffic lights with a pedestrian crossing

Cars follow green → amber → red. Pedestrians have a light and a call button. The button **stores a request** which, once a minimum of green has elapsed, triggers the change to red — the guard condition `[demande and minimum écoulé]` from the diagram.

![State diagram of the light: VERT then JAUNE then ROUGE, then back to VERT. The transition from VERT to JAUNE fires as soon as the green duration has elapsed, or a pedestrian has called after the minimum green; JAUNE to ROUGE and ROUGE to VERT happen on elapsed duration. The loop tests these guards on every pass, without blocking.|620](/ressources/img/micropython-machine-a-etats/diagramme-etats.svg)

```python
from machine import Pin
from time import ticks_ms, ticks_diff

VERT, JAUNE, ROUGE = 0, 1, 2

feu_vert     = Pin(12, Pin.OUT)
feu_jaune    = Pin(11, Pin.OUT)
feu_rouge    = Pin(10, Pin.OUT)
pieton_vert  = Pin(9, Pin.OUT)
pieton_rouge = Pin(8, Pin.OUT)
bouton       = Pin(14, Pin.IN, Pin.PULL_UP)

DUREE_VERT, DUREE_VERT_MIN, DUREE_JAUNE, DUREE_ROUGE = 6000, 2000, 2000, 5000

etat = VERT
t_debut = ticks_ms()
demande_pieton = False

while True:
    # Evenement : appui pieton, memorise jusqu'a satisfaction
    if bouton.value() == 0:
        demande_pieton = True

    if etat == VERT:                              # voitures passent, pietons stop
        feu_vert.on();  feu_jaune.off(); feu_rouge.off()
        pieton_vert.off(); pieton_rouge.on()
        if (ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT or
                (demande_pieton and ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT_MIN)):
            etat = JAUNE; t_debut = ticks_ms()

    elif etat == JAUNE:                           # transition
        feu_vert.off(); feu_jaune.on()
        if ticks_diff(ticks_ms(), t_debut) >= DUREE_JAUNE:
            etat = ROUGE; t_debut = ticks_ms()
            demande_pieton = False                # la demande est satisfaite

    elif etat == ROUGE:                           # voitures stop, pietons traversent
        feu_jaune.off(); feu_rouge.on()
        pieton_rouge.off(); pieton_vert.on()
        if ticks_diff(ticks_ms(), t_debut) >= DUREE_ROUGE:
            etat = VERT; t_debut = ticks_ms()
```

> [!info] How to read this code
> The key transition is in the `VERT` block: `if ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT or (demande_pieton and ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT_MIN)`. It reads as "**we go to amber if** the green has run its full time (`DUREE_VERT`) **or else** a pedestrian has called (`demande_pieton`) **and** the minimum green has elapsed". The `or` opens two ways out, the second one protected by a minimum so as not to cut short a green that has only just started. `demande_pieton` goes to `True` the moment the button is pressed (tested at the top of the loop, on every pass) and returns to `False` on entering `ROUGE`. On every change of state, `t_debut = ticks_ms()` re-stamps the entry so that the comparisons start again from zero.
>
> The precedence of `and` over `or`, which governs that reading, is a mechanism of the language and not an embedded idiom: see [[micropython-lire-un-programme-en|reading a MicroPython program]].

The program contains **no `sleep()` at all**: the loop runs continuously, reads the button on every pass, and moves on when the conditions are met. Adding a fourth state comes down to adding an `elif`. The structure takes it without a rewrite.

## Pitfalls

**Using `sleep()` for timing.** During a `sleep(5)`, the Pico is deaf: it no longer reads the button and reacts to nothing. Mistake number one. Timing is **always** done with `ticks_ms()`/`ticks_diff()`.

**An uninitialised state.** A state variable with no starting value begins in an undetermined state. Always `etat = VERT`: the initial state is a decision, not an accident.

**Re-stamping `t_debut` at the wrong moment.** `t_debut = ticks_ms()` is done **only** at the moment of the transition, not on every pass. Resetting it on every pass rearms the stopwatch permanently: the delay is never reached and the machine seizes up.

**Indentation instead of `break`.** In C++ every `case` needs a `break` (otherwise it *falls through*). In Python, `if/elif` does not "fall" into the following block, so there is no fall-through risk, but **the indentation has to be rigorous**: a badly indented line drops out of the state block.

**Testing the input without debouncing.** A button read raw may register several presses. Here the storing (`demande_pieton = True`) absorbs the problem. To count presses or detect edges, [[micropython-entree-tor-en|debouncing]] becomes necessary.

**An overloaded state block.** If a block runs past ten lines or so, some sub-logic deserves a function of its own, or a state ought to be split. Keep every block readable at a glance.

## Special case — A dictionary of states, and parallel machines

- **The pythonic form**: replace the `if/elif` cascade with a **dictionary** mapping each state to the function to run (`etats = {VERT: faire_vert, JAUNE: faire_jaune, ...}` then `etats[etat]()`). More elegant when the states multiply. The `if/elif` cascade stays more readable for a handful of states.
- **Parallel machines**: one rig can run **several state machines** at the same time (a traffic light *and* a blinking display), each with its own state variable and its own `t_debut`, all of them gone through inside the same loop — precisely because none of them uses `sleep()`.

## Where it fits in the project

- **Step 2 of the [[preuve-de-concept-en|proof-of-concept phase]]** — first coding of the sequential behaviour of a function (a cycle, an operating mode) on an isolated bench.
- **Step 3 of the [[integration-et-tests-en|integration and testing phase]]** — the control logic, validated function by function, is what orchestrates the complete system.

Getting this pattern right on a simple case such as traffic lights gives you the reusable skeleton for every sequential control in the project.

## See also

- [[machine-a-etats-en|State machine]] — the parent concept: states, transitions, guards, actions (to be designed before writing code)
- [[micropython-en|MicroPython]] — hub for the module
- [[micropython-temporisation-en|sleep() vs ticks_ms()]] — non-blocking timing, the heart of the pattern
- [[micropython-programmation-non-bloquante-en|Non-blocking programming]] — running several state machines side by side in the same loop
- [[micropython-entree-tor-en|Reading a digital input]] — a button with debouncing and edge detection
- [[micropython-sortie-tor-en|Driving a digital output]] — beyond the LED: relays, buzzers
- [[arduino-machine-a-etats-en|State machine (Arduino)]] — the C++ equivalent (`switch`/`enum`)
