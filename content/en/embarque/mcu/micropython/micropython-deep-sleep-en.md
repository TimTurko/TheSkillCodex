---
title: Deep sleep in MicroPython
lang: en
type: tuto
phases:
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main-en
  - deep-sleep-en
  - interruption-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-deep-sleep.md
source_sha256: bf48d9e261241a429c1f30bad9f9e5ef2b9d4d1a16b56275d2a131b52e16d351
---

Putting a Pico into **sleep** (*deep sleep*) means sending the microcontroller to sleep to cut its consumption, waiting for an event to wake it — a time deadline or an [[interruption-en|interrupt]] on a pin. It is the key to **battery life**: an object that sleeps 99% of the time and only wakes up to act lasts far longer. MicroPython exposes two functions from the [[micropython-modules-en|`machine`]] module: **`lightsleep()`** (picks up where it fell asleep) and **`deepsleep()`** (**restarts** on waking).

## What is it for?

A microcontroller that is awake draws current continuously, even when it is doing nothing useful. For a USB-powered rig that hardly matters. For a sensor on a battery (weather station, beacon, tracker), it is the battery life that collapses. [[deep-sleep-en|Sleep]] turns the logic on its head: the system spends most of its time **asleep**, and only wakes **briefly** to measure, transmit, then go back to sleep. The cycle: **sleep → wake on an event → act fast → go back to sleep**.

![Current profile illustrating the principle of deep sleep: long stretches at low current while asleep, broken up by brief spikes on waking, which pull the average consumption downwards — a long way from a high current drawn continuously.|680](/ressources/img/micropython-deep-sleep/profil-courant-veille.svg)

You put this in place late, during the [[integration-et-tests-en|integration phase]], as an **energy optimisation** of a rig that already works.

## `lightsleep` vs `deepsleep` — the key difference

- **`machine.lightsleep(ms)`** — sends the chip to sleep. On waking, the program **picks up right after the call**, with variables preserved. Consumption is reduced but not minimal.
- **`machine.deepsleep(ms)`** — a deeper sleep. On waking, **the chip restarts** as though after a reset: `main.py` starts again from the top. Variables are lost. You have to **save the state** (in a file, see [[micropython-stockage-en|persistent storage]]) before sleeping, and read it back on start-up. It is the same "waking = restarting" behaviour as on the [[esp32-deep-sleep-en|ESP32]].

## Step by step

Four steps: do the useful work, choose the mode, sleep, handle the wake-up.

### 1. Periodic wake-up with `deepsleep`

The most common case: a sensor taking a reading at regular intervals. We measure, then sleep for a given time. On waking, the whole thing starts again.

```python
import machine
from machine import Pin, ADC

# Detecter d'ou vient le demarrage
if machine.reset_cause() == machine.DEEPSLEEP_RESET:
    print("woke up from deep sleep")
else:
    print("normal start-up")

capteur = ADC(Pin(26))
print("reading:", capteur.read_u16())     # reveil utile : on mesure
# ... transmettre, ou sauvegarder dans un fichier (voir micropython-stockage) ...

machine.deepsleep(32000)                   # dort 32 s puis REDEMARRE (main.py relance)
```

`machine.reset_cause()` lets you tell a genuine first start-up from a wake-up (`machine.DEEPSLEEP_RESET`) — useful for running a heavy initialisation only once.

### 2. Immediate wake-up with `lightsleep`

If you want to **pick up** execution without losing the state:

```python
import machine
# ... travail ...
machine.lightsleep(5000)        # dort 5 s, puis REPREND ici (variables conservees)
# ... la suite s'execute normalement ...
```

### 3. Waking on an event (a pin)

In principle, to wake on a button or a detector rather than at a fixed deadline, you attach an [[micropython-interruptions-en|interrupt]] to the pin before sleeping. The event then brings the chip back to life (with no duration argument, the sleep lasts until the event):

```python
from machine import Pin
import machine

bouton = Pin(14, Pin.IN, Pin.PULL_UP)
bouton.irq(trigger=Pin.IRQ_FALLING, handler=lambda p: None)   # source de reveil
machine.lightsleep()            # dort jusqu'a l'appui
```

> [!warning] Waking on a pin: a limitation on the Pico
> On RP2 (Pico / Pico 2), waking from `lightsleep()` through a **pin interrupt** is a **known limitation** of MicroPython: depending on the firmware version, the chip does not wake up (the code above does toggle the interrupt but never resumes execution). The **reliable** route on the Pico is the **timed** wake-up (`lightsleep(ms)` / `deepsleep(ms)`). For a genuinely well-handled wake-up on an event, the [[esp32-deep-sleep-en|ESP32]] is the reference family.

### 4. Preparing the wake-up (saving state)

Before a `deepsleep`, since the chip will restart, **save whatever has to survive**: a cycle counter, the last reading, the state of a machine — in a **file** on the flash (see [[micropython-stockage-en|persistent storage]]), read back on start-up. With `lightsleep`, there is nothing to save (execution picks up again).

Consumption is measured with a multimeter, in series with the rig's supply:

| Rig state | Current measured |
|---|---|
| Awake, reading under way | … |
| `lightsleep()` | … |
| `deepsleep()` | … |

Do **not** expect a drop into microamps on the last line: on the RP2040, `deepsleep` is in practice a `lightsleep`, and both read the same order of magnitude (see the *Pitfalls*). That is precisely what the measurement is there to establish, and on top of it comes the permanent consumption of the board's regulator and USB, which never sleep.

## Example — A battery sensor woken periodically

A sensor takes a reading every 60 s, then goes back to sleep with `deepsleep`. A count of readings survives in a file despite the restart.

```python
import machine, json
from machine import Pin, ADC

FICHIER = "etat.json"
try:
    with open(FICHIER) as f:
        etat = json.load(f)
except OSError:
    etat = {"releves": 0}              # premier demarrage

etat["releves"] += 1
capteur = ADC(Pin(26))
print("reading #", etat["releves"], ":", capteur.read_u16())
# ... transmettre la mesure ...

with open(FICHIER, "w") as f:          # sauver l'etat avant de dormir
    json.dump(etat, f)

machine.deepsleep(60000)               # 60 s de sommeil, puis redemarrage
```

Between two readings, the chip sleeps. The counter survives thanks to the file, since `deepsleep` restarts the program. Over time, the ratio of "60 s asleep for a fraction of a second awake" transforms the battery life.

## Pitfalls

**Believing `deepsleep` picks up where it stopped.** On waking, `deepsleep` **restarts** (`main.py` starts again from zero, variables lost). Save the state in a file before sleeping, read it back on start-up. (`lightsleep`, for its part, does resume execution.)

**On the RP2040, `deepsleep` saves almost nothing.** In MicroPython, the RP2040's `deepsleep` is in practice a **synonym for `lightsleep`**: it does restart the chip on waking, but it does **not** come down to the µA of a genuine deep sleep (of the order of a few **tens of mA** measured). On top of that comes the permanent draw of the board's regulator and USB. On the Pico, the gain from `deepsleep` is therefore **mainly a teaching point**. For serious battery life, aim for a family where deep sleep is properly implemented (the [[esp32-deep-sleep-en|ESP32]]) or for low-level work (pico-extras). It is an **honest divergence** from the AVR, where power-down really does reach a few µA on a bare chip.

**Falling asleep before finishing a transmission.** Communications are asynchronous: make sure the send (Wi-Fi, UART…) is finished before calling `deepsleep`, otherwise the message is truncated.

**A badly configured wake-up pin.** Check that the wake-up source (the pin irq) is properly set **before** sleeping, otherwise the chip sleeps with no way of waking (short of a time deadline).

**Forgetting to look at `reset_cause()`.** Without telling a first start-up from a wake-up, every cycle repeats a heavy initialisation (network connection, calibration) needlessly — costly in energy.

## Special case — Depth and wake-up sources

`lightsleep` is simpler (immediate resume, ideal for short pauses between two actions). `deepsleep` saves more but forces a restart and the saving of state (ideal for long pauses between widely spaced readings). The choice rests on the **length of the sleep** and on whether the state needs to be kept in RAM. For serious battery life, reason as well about the complete **energy budget** of the rig (see [[micropython-alimentation-en|powering the board]]).

## Where it fits in the project

- **[[integration-et-tests-en|Integration and testing phase]]** — energy optimisation comes once the function is validated: measure the consumption, then bring in sleep to reach the battery life you are aiming for.
- **Specification** — the target battery life ("lasting a season on a battery") is a requirement to set early. Sleep is the means of meeting it, to be sized against the energy budget.

On a self-contained connected object, sleep is not a detail but the very **architecture** of the program, which is why it is worth planning for the moment a battery constraint exists.

## See also

- [[deep-sleep-en|Deep sleep]] — the concept: sleep modes and what they are worth in energy terms
- [[micropython-en|MicroPython]] — hub for the module
- [[micropython-interruptions-en|Interrupts]] — the wake-up source for events
- [[micropython-stockage-en|Persistent storage]] — saving the state before a `deepsleep` (which restarts)
- [[micropython-alimentation-en|Powering the board]] — energy budget and choice of supply
- [[arduino-deep-sleep-en|Putting an Arduino to sleep]] — the C++ equivalent (LowPower library)
- [[esp32-deep-sleep-en|Deep sleep on ESP32]] — the same "waking = restarting" logic, on a family where sleep is very carefully handled
