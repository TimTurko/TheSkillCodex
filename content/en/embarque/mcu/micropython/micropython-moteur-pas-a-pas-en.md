---
title: Driving a stepper motor
type: tuto
phases:
  - concept
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-gpio-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-moteur-pas-a-pas.md
source_sha256: a088200021dda4af028f874ddc5d4619cd1572df7a345e51c4882e83f91477e5
---

A **stepper motor** turns in **discrete angular steps** (often 200 steps per turn, 1.8° per step) under the sequential drive of several coils. The rotor position is therefore *known by construction* with no feedback sensor, hence its appeal for precise multi-turn positioning (3D printers, CNC machines). This page covers two drivers: the **28BYJ-48 plus ULN2003** (for teaching) and the **NEMA17 plus A4988** (industrial). In MicroPython, with no dedicated library built in, you **sequence the coils by hand**, which shows exactly how a stepper advances.

## What is it for?

Typical cases: **precise angular positioning** (with no sensor, from a known *home*), **linear movement through a leadscrew** (3D printer axes, CNC), **very slow rotation** with no jerks, **multi-turn valves**.

| Actuator | Position | Torque | Accuracy |
|---|---|---|---|
| Standard servo | 0-180° | low | medium |
| DC motor | none | good | none (without an encoder) |
| **Stepper motor** | step by step | medium | excellent |

## Step by step

Four steps: choose the motor and driver pair, wire them, sequence, drive.

### 1. Choose the motor and the driver

- **For teaching: 28BYJ-48 plus ULN2003** — a 5 V motor, a 1:64 gearbox (about 2048 steps per turn in full step, 4096 in half step), and a ULN2003 board with 4 LEDs that follow the phases.
- **Industrial: NEMA17 plus A4988** — a bipolar 200 step per turn motor, a driver with 2 pins (`STEP`, `DIR`), and microstepping. Used in 3D printers and CNC machines.

For a first try, the **28BYJ-48 plus ULN2003**.

### 2. Wire it (28BYJ-48 plus ULN2003)

The motor plugs into the ULN2003 board. On the Pico side:

| ULN2003 | Pico |
|---|---|
| IN1 | GP2 |
| IN2 | GP3 |
| IN3 | GP4 |
| IN4 | GP5 |
| `+` | 5 V (VBUS) or an external supply |
| `−` | GND |

The ULN2003 (Darlington) inputs accept the Pico's 3.3 V.

![Wiring a 28BYJ-48 through its ULN2003 board on the Pico: IN1-IN4 on GP2-GP5, a 5 V supply (VBUS or external) on "+", the motor plugged into the board, shared ground.|640](/ressources/img/micropython-moteur-pas-a-pas/branchement-stepper.svg)

### 3. Sequence the coils

You apply a **sequence of patterns** to the 4 pins. The **half step** sequence (8 steps) gives a finer and smoother movement:

```python
from machine import Pin
from time import sleep_ms

broches = [Pin(p, Pin.OUT) for p in (2, 3, 4, 5)]   # IN1..IN4

SEQ = [                       # half step (8 steps)
    [1,0,0,0], [1,1,0,0], [0,1,0,0], [0,1,1,0],
    [0,0,1,0], [0,0,1,1], [0,0,0,1], [1,0,0,1],
]

def pas(nb, sens=1, delai=2):
    seq = SEQ if sens > 0 else SEQ[::-1]
    for _ in range(nb):
        for motif in seq:
            for broche, v in zip(broches, motif):
                broche.value(v)
            sleep_ms(delai)
```

### 4. Drive it

```python
PAS_PAR_TOUR = 4096           # 28BYJ-48 in half step

while True:
    pas(PAS_PAR_TOUR, sens=1)     # one clockwise turn
    sleep_ms(1000)
    pas(PAS_PAR_TOUR, sens=-1)    # one counter-clockwise turn
    sleep_ms(1000)
```

The motor makes one turn, pauses, then sets off the other way. If the pin order is wrong, it **vibrates without turning** (see *Pitfalls*).

### Variant NEMA17 plus A4988 (STEP/DIR)

The A4988 only asks for two logic pins:

```python
from machine import Pin
from time import sleep_us, sleep_ms

step = Pin(2, Pin.OUT)
dir_ = Pin(3, Pin.OUT)

def pas_a4988(nb, sens=1, delai_us=800):
    dir_.value(1 if sens > 0 else 0)
    for _ in range(nb):
        step.value(1); sleep_us(2)        # STEP pulse
        step.value(0); sleep_us(delai_us) # delay = speed
```

**The A4988's `VMOT` demands a 100 µF capacitor** to GND (without it, destruction at power-up), a 12-24 V motor supply, and the current set on the driver's trimmer.

## Example — A quarter turn per button press

```python
from machine import Pin
from time import sleep_ms, ticks_ms, ticks_diff

broches = [Pin(p, Pin.OUT) for p in (2,3,4,5)]
SEQ = [[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,1,1,0],
       [0,0,1,0],[0,0,1,1],[0,0,0,1],[1,0,0,1]]
bouton = Pin(14, Pin.IN, Pin.PULL_UP)
PAS_PAR_TOUR = 4096

def pas(nb):
    for _ in range(nb):
        for motif in SEQ:
            for b, v in zip(broches, motif): b.value(v)
            sleep_ms(2)

etat_stable, dernier = 1, 1
chg = ticks_ms()
while True:
    lect = bouton.value()
    if lect != dernier:
        chg = ticks_ms(); dernier = lect
    if ticks_diff(ticks_ms(), chg) > 30 and lect != etat_stable:
        etat_stable = lect
        if etat_stable == 0:                 # edge: one quarter turn per press
            pas(PAS_PAR_TOUR // 4)
```

> [!info] How to read this code
> The non-blocking debouncing follows the same pattern as for the [[micropython-moteur-cc-en|DC motor]]: `dernier` marks the moment the raw reading changes (and restarts the stopwatch), `etat_stable` holds the state confirmed after 30 ms. The quarter turn is only triggered on a **falling edge** (`PULL_UP` → pressed = 0). **Watch out**: `pas()` is **blocking**. During the quarter turn the loop is frozen and the button is not read, so a press during the movement is ignored. To react continuously, structure the code as [[micropython-programmation-non-bloquante-en|non-blocking]].

## Pitfalls

**Wrong phase order.** The order of the 4 pins sets the sequencing. Get it wrong and the motor vibrates without turning. Check the IN1..IN4 wiring and the order inside `broches`.

**Not enough current.** A 28BYJ-48 draws about 200-300 mA, a NEMA17 1-1.7 A per coil. Powering from the Pico's 3.3 V makes it reboot; a separate supply (at least for the NEMA17), **shared GND**.

**An A4988 with no capacitor on VMOT.** Near-instant destruction at power-up. A **100 µF capacitor** between VMOT and GND, close to the driver.

**Setting the A4988 current.** Too low and steps are lost; too high and it overheats. Calibrate Vref with a multimeter, following the driver's datasheet.

**Lost steps under load.** Too fast, or too heavy a load, and the motor *skips* steps, so the computed position drifts away. Slow it down (a larger `delai`), raise the torque.

**Blocking sequencing.** The `pas()` function is blocking: nothing else runs during the movement. For parallelism, structure the code as non-blocking (see [[micropython-programmation-non-bloquante-en|non-blocking programming]]) or drive it from an interrupt or a timer.

**Consumption at rest (28BYJ-48).** Energised coils mean about 150 mA continuously, even at rest, and the ULN2003 heats up. Cut the supply (set the 4 pins to 0) between two movements if the position does not need to be held.

## Special case — Libraries and microstepping

- MicroPython **stepper libraries** exist (for the 28BYJ-48, or `AccelStepper` style with ramps), installable through `mip` (see [[micropython-bibliotheques-en|libraries]]) — they add acceleration and non-blocking behaviour.
- The A4988, DRV8825 and TMC2209 drivers support **microstepping** (1/2 up to 1/256): a smoother and quieter movement, at the price of less effective torque at the intermediate positions.

## Where it fits in the project

- **Step 2 of the [[preuve-de-concept-en|proof of concept phase]]** — validating motor plus driver: a full turn both ways, top speed with no lost steps.
- **Step 3 of the [[preuve-de-concept-en|proof of concept phase]]** — integration into a precise movement chain (an X axis, a dispenser).
- **Step 4 of the [[concept-en|concept phase]]** — choosing between stepper, servo and DC motor plus encoder according to accuracy, torque and availability.

The stepper is the actuator of projects that aim at a precise repeatable movement with no sensor, and the results are spectacular in a demonstration.

## See also

- [[micropython-en|MicroPython]] — the module hub
- [[micropython-gpio-en|Configuring MicroPython GPIO]] — prerequisite (sequencing the pins)
- [[micropython-moteur-cc-en|Driving a DC motor]] · [[micropython-servomoteur-en|Servo]] — the alternatives
- [[micropython-programmation-non-bloquante-en|Non-blocking programming]] — for non-blocking sequencing
- [[micropython-interruptions-en|Interrupts]] — reading an end stop alongside the movement
- [[micropython-alimentation-en|Powering the board]] — sizing with a power motor
- [[arduino-moteur-pas-a-pas-en|Driving a stepper motor (Arduino)]] — the C++ equivalent (`Stepper.h`)
