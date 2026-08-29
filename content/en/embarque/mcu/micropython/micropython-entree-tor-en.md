---
title: Reading a digital input in MicroPython
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-gpio-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-entree-tor.md
source_sha256: 810ce2e35193ef2fbdaf60081ed3b17f0a40ea02f48d6aa6c6e7c543173be894
---

A **digital input** reads a binary signal that takes only two states: pressed or released, present or absent. Pushbutton, switch, limit switch, digital presence sensor: all of them are read with `Pin.value()`. The difficulty is not the reading itself but dealing with **bounce**: a mechanical contact produces several spurious transitions within a few milliseconds, and they have to be filtered out to get a clean signal.

## What is it for?

Reading a digital input is the founding gesture of any embedded user interface: starting a cycle, confirming a setpoint, triggering a measurement, detecting a limit switch. A typical project has several of them (a *Start/Stop* button, a limit switch on each axis). The good practice: learn the reading *with debouncing* once, then duplicate it cleanly on every input.

## Step by step

Four steps: wire with a pull-up, read, add debouncing, detect the edge.

### 1. Wire the button with `PULL_UP`

One side of the button on the pin (here GP14), the other on GND. No external resistor: the internal pull-up (`Pin.PULL_UP`) holds `3.3 V` at rest and falls to GND when pressed.

**Inverted logic**: `bouton.value()` returns `1` at rest and `0` when pressed.

![Circuit: pushbutton between GP14 and GND (PULL_UP reading: rest = 1, press = 0) and an LED with a 220 Ω resistor on GP15, reused in the example, on a Raspberry Pi Pico|600](/ressources/img/micropython-entree-tor/montage-bouton.svg)

### 2. Raw reading

The console is the [[micropython-repl-en|REPL]]: `print()` writes to it, like the Arduino serial monitor.

```python
from machine import Pin
from time import sleep

bouton = Pin(14, Pin.IN, Pin.PULL_UP)   # input + internal pull-up: rest = 1

while True:
    print(bouton.value())               # shows 1 (released) or 0 (pressed)
    sleep(0.01)                          # ~100 readings per second
```

Run the script and press: you see `1, 1, 0, 0, 1...`. Looking closely, a few spurious transitions appear at the moment of the press (`0, 1, 0, 1`): that is **mechanical bounce**, and it lasts a few milliseconds.

### 3. Software debouncing

The simplest countermeasure: ignore any transition that has not been confirmed for 20–50 ms. The timing is done with [[micropython-temporisation-en|`ticks_ms()` and `ticks_diff()`]] (never a direct subtraction of `ticks_ms()`, which wraps around):

![Debounce timing diagram: on the press, the raw reading oscillates for a few milliseconds (bounce); after 30 ms with no change, the stable state switches exactly once.|640](/ressources/img/micropython-entree-tor/rebond.svg)

```python
from machine import Pin
from time import ticks_ms, ticks_diff

bouton = Pin(14, Pin.IN, Pin.PULL_UP)

dernier_etat = 1                 # last value READ (shakes during the bounce)
etat_stable = 1                  # CONFIRMED state (the one we act on)
dernier_changement = ticks_ms()  # time of the last change in the reading
DELAI_REBOND = 30                # quiet period required before validating (ms)

while True:
    lecture = bouton.value()                 # raw reading on every pass

    if lecture != dernier_etat:              # has the reading just changed?
        dernier_changement = ticks_ms()      # note WHEN
        dernier_etat = lecture               # and the new value read

    # unchanged for long enough? (the bounce is over)
    if ticks_diff(ticks_ms(), dernier_changement) > DELAI_REBOND:
        if lecture != etat_stable:           # the confirmed state really changed
            etat_stable = lecture            # validate the new state
            print("Button:", "pressed" if etat_stable == 0 else "released")
```

**How to read this code.** The trick is held by **two variables**. `dernier_etat` follows the *raw* value read at this instant (it shakes during the bounce). `etat_stable` keeps only the *confirmed* state, the one we act on. On each pass through the loop:

- if the reading **changes**, we do not believe the button straight away: we only note *the moment* of the change (`dernier_changement = ticks_ms()`);
- as long as it **changes again** (bounce), that moment is pushed back over and over;
- as soon as it **stays the same for 30 ms**, the bounce is over: `etat_stable` is validated.

`ticks_ms()` returns a millisecond counter running since start-up. `ticks_diff(maintenant, depart)` gives the time elapsed *since the last shake*, handling the counter wrap-around, which a direct subtraction would not. Comparing it with `DELAI_REBOND` amounts to asking: has the signal been quiet long enough to be believed?

From now on each press produces *exactly one* line, whatever the quality of the button.

### 4. Detect the edge (press vs hold)

Often we want to react to *the press* itself, not for as long as the key is held. That is **falling-edge detection** — inside the stable branch:

```python
        if etat_stable == 0:
            # FALLING EDGE — the button has just been pressed
            print("Press detected!")
```

A *toggle* variant (one press inverts an LED): `led.toggle()` at that point.

## Example — Count presses and toggle an LED

Debouncing, edge detection and a visible action.

```python
from machine import Pin
from time import ticks_ms, ticks_diff

bouton = Pin(14, Pin.IN, Pin.PULL_UP)
led = Pin(15, Pin.OUT)

dernier_etat = 1                 # the same 2 variables as in step 3
etat_stable = 1
dernier_changement = ticks_ms()
DELAI_REBOND = 30
compteur = 0                     # number of presses counted

while True:
    lecture = bouton.value()
    if lecture != dernier_etat:              # --- debounce block, identical to step 3 ---
        dernier_changement = ticks_ms()
        dernier_etat = lecture
    if ticks_diff(ticks_ms(), dernier_changement) > DELAI_REBOND:
        if lecture != etat_stable:
            etat_stable = lecture
            if etat_stable == 0:             # falling edge = one more press
                compteur += 1                # +1 press
                led.toggle()                 # invert the LED
                print("Press #", compteur)
```

Each press increments a counter and inverts the LED — crisp behaviour, immune to bounce.

## Pitfalls

**No debouncing.** Typical symptom: one press counts as 3 or 4. The bounce is invisible to the eye but plain to see at the processor's millisecond.

**Subtracting `ticks_ms()` directly.** `ticks_ms()` wraps around and restarts at zero: `ticks_ms() - depart` can go negative. **Always `ticks_diff(maintenant, depart)`**, which is designed to handle the wrap-around.

**Floating input.** With no `PULL_UP` (or external resistor), the pin floats: the LED toggles as a hand passes nearby. Almost always `PULL_UP` with the button to GND.

**Getting the pull-up logic backwards.** `value() == 1` means *released*, not *pressed*.

**Confusing hold and press.** Reacting to `value() == 0` acts for as long as the button is held (a counter runs away). For per-press behaviour, detect the **edge**.

**`sleep()` inside the reading loop.** A `sleep(0.5)` misses short presses. The debounce pattern above deliberately uses no `sleep`: it watches time through `ticks_ms()`.

**Button between 3.3 V and the pin.** `PULL_UP` with the button to 3.3 V gives a reading that is always `1`. Always take the button to **GND**.

## Special case — Reacting fast, or many buttons

- **Interrupt** — so as not to miss a press during a computation, `bouton.irq(trigger=Pin.IRQ_FALLING, handler=...)` fires a function on the edge, with no polling (see [[micropython-interruptions-en|interrupts]]). Debouncing is still required.
- **Several buttons** — duplicate the pattern (one stable state and one change timestamp per button), ideally wrapped in a [[micropython-fonctions-en|function]] or a class.

## Where it fits in the project

- **Step 2 of the [[preuve-de-concept-en|proof of concept phase]]** — every command button (Start/Stop, confirm) tested in isolation with debouncing before integration.
- **Step 2 of the [[integration-et-tests-en|integration and testing phase]]** — every mechanical limit switch is validated as a digital input with debouncing.

The debounce pattern is meant to be copied and adapted from one page to the next once understood: 10 minutes here save hours of debugging spent wondering why the system miscounts presses.

## See also

- [[micropython-en|MicroPython]] — the module hub
- [[micropython-gpio-en|Configuring MicroPython GPIO]] — prerequisite on `Pin` and `PULL_UP`
- [[micropython-sortie-tor-en|Driving an on/off output]] — the matching output
- [[micropython-temporisation-en|Timing delays in MicroPython]] — `sleep()` vs `ticks_ms()`, essential to non-blocking debouncing
- [[micropython-interruptions-en|Interrupts in MicroPython]] — reacting to an edge without polling
- [[arduino-entree-tor-en|Reading an on/off input (Arduino)]] — the C++ equivalent
