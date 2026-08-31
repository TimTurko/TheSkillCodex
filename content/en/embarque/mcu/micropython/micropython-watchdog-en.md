---
title: Watchdog in MicroPython
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
  - micropython-programmation-non-bloquante-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-watchdog.md
source_sha256: 8ad99f3aa8d3f2c5e268f7a9c98e088ac2095f0839eb3ef3ba3e8892ec4bb956
---

The **watchdog** (WDT) is an independent [[timer-en|counter]] that **restarts the board if the program stops "feeding" it** within a set delay. It is a safety net against hangs: a stalled program — an infinite loop, a wait that never ends, a frozen sensor — starts itself again instead of staying mute. In MicroPython it is handled through the **`machine.WDT`** class: you arm it with a delay, you feed it regularly with `feed()`, and any break in that rhythm causes a reset.

## What is it for?

An embedded system sometimes has to run **with nobody around to press reset**: an isolated station, a buried object, a machine in service. If its program hangs (a library waiting for an answer, a sensor freezing the code, a loop that never exits), it stays inert until someone cuts the power by hand. The watchdog brings **robustness**: as long as the program runs, it pats the dog at a regular interval. If it hangs, the dog stops being fed, and once its delay is up it **resets** the board. It is a **last-resort** mechanism, to be brought in during the [[integration-et-tests-en|integration phase]] to make an already working system dependable, not to paper over bugs.

## Step by step

Three steps: arm the dog, feed it in the right place, choose the delay.

### 1. Arm the watchdog

`WDT(timeout=ms)` starts the watchdog. On the RP2040 and RP2350, the maximum delay is about **8.3 seconds** (8388 ms).

```python
from machine import WDT

wdt = WDT(timeout=8000)        # restarts if not fed for 8 s
```

**A major difference from Arduino**: once armed, the Pico's watchdog **can no longer be stopped** (there is no equivalent of `wdt_disable()`). So you only arm it **after** the initialisations, and only when you are ready to feed it regularly.

### 2. Feed the dog in the right place

`feed()` puts the counter back to zero: that is "feeding" the dog. You call it somewhere the program **can only reach if it is running normally**:

```python
while True:
    # ... the program's normal work ...
    wdt.feed()                 # "I am alive": the deadline is pushed back
```

As long as the loop keeps looping, the dog is fed. If some part of the code hangs and stops `feed()` from being reached, the deadline arrives and the board restarts.

![Timing diagram of the watchdog: as long as the loop calls feed() at a regular interval, the margin before reset is recharged to the armed delay and never falls to zero; when a hang interrupts the feed() calls, the margin drops to zero and the board restarts (RESET, then main.py runs again).|680](/ressources/img/micropython-watchdog/chronogramme-watchdog.svg)

### 3. Choose the delay

The delay has to be **longer than the worst normal loop time**, otherwise the dog restarts a board that was working. But not needlessly long, otherwise the system stays hung before starting again. On the Pico, the ceiling (~8.3 s) means the dog has to be fed **at least once per cycle** in a well-structured loop.

## Example — Making a rig that can hang dependable

A rig questions a sensor on a bus that can, rarely, never answer, freezing the program. The watchdog guarantees that in case of a hang, the board restarts instead of staying mute.

```python
from machine import WDT, Pin, ADC
from time import sleep

capteur = ADC(Pin(26))
print("Startup")
wdt = WDT(timeout=8000)        # dog armed AFTER init: reset if hung > 8 s

while True:
    mesure = capteur.read_u16()   # if a bus read freezes, no more feed()
    print(mesure)
    wdt.feed()                    # feed on every healthy pass
    sleep(0.5)                    # (well under the 8 s)
```

In normal operation, the loop feeds the dog every 500 ms or so, well under the 8 s: nothing happens. But if the read hangs, `feed()` is no longer reached, and after 8 s the board restarts, running `main.py` again, which prints "Startup" once more. The system **recovers on its own**. The `sleep(0.5)` is harmless here because it is well below the delay. In a [[micropython-programmation-non-bloquante-en|non-blocking]] program, you would feed the dog inside the cooperative loop (or through `asyncio`).

The symptom shows up at the [[micropython-repl-en|REPL]] with nothing to measure: the values stop, a few seconds pass, and `Startup` appears again.

```
Startup
34112
33987
34056
34021
Startup
34098
```

Nobody touched the board between the two `Startup`. It is the dog that handed control back to the system.

## Pitfalls

**Believing you will be able to disarm the dog.** On the Pico, `WDT` **cannot be switched off** once armed. Consequence: do not arm it too early (before the end of the init), and **do not then start a blocking operation longer than the delay** without feeding it, hence the value of [[micropython-programmation-non-bloquante-en|non-blocking]] code.

**A delay shorter than the normal loop.** If the worst loop time exceeds the delay, the dog restarts a board that was working. Set the delay **above** the maximum legitimate duration of one pass, with margin (within the ~8.3 s limit).

**Feeding the dog in the wrong place.** Calling `feed()` inside an inner loop, or anywhere the program always reaches **even when it goes off the rails**, empties the mechanism of its meaning: it no longer detects anything. Feed it where only healthy operation leads.

**Using the watchdog to paper over a bug.** Restarting periodically to "work around" a memory leak or a recurring hang treats the symptom, not the cause. The dog is a safety net, not a fix.

**Forgetting that a long `sleep()` and a watchdog are at odds.** A wait longer than the delay triggers the reset. All the more reason to structure the code as [[micropython-programmation-non-bloquante-en|non-blocking tasks]], where no function monopolises the loop.

**Watchdog and deep sleep.** Before a long [[micropython-deep-sleep-en|`deepsleep`]], mind the interaction with an armed WDT: check the behaviour on the board (depending on the firmware, the watchdog may or may not survive the sleep). When in doubt, reason the sleep and wake cycle through without counting on the dog during the sleep.

## Special case — Beyond the ~8.3 s ceiling

The hardware delay is capped (~8.3 s on the RP2040 and RP2350). To watch over a longer cycle (a reading every minute, say), you cannot set a 60 s WDT: you then feed the dog **inside** the steps of the cycle (several `feed()` calls spread out), or you combine the hardware watchdog with software supervision logic. The hardware dog remains the last line of defence. It is no substitute for structured code.

## Where it fits in the project

- **[[integration-et-tests-en|Integration and testing phase]]** — once the system works, the watchdog makes it dependable against unforeseen hangs, above all if it has to run for a long time unattended.
- **Specification** — an **availability** requirement ("the system must recover on its own after a hang") translates concretely into a watchdog, to be planned for if the requirements call for it.

The watchdog is the last line of defence of a robust firmware: it does not replace clean code, but it stops an unforeseen hang from freezing a delivered system for good.

## See also

- [[micropython-deep-sleep-en|Deep sleep]] — sleep and watchdog interaction
- [[micropython-programmation-non-bloquante-en|Non-blocking programming]] — structuring the code to feed the dog without blocking
- [[timer-en|Timer]] — the watchdog is a dedicated counter
- [[chien-de-garde-en|Watchdog]] — the cross-cutting concept: what the dog is independent of, what it fails to detect, and the silent restart
- [[interruption-en|Interrupt]] — the neighbouring notion
- [[firmware-en|Firmware]] — robustness of embedded code (cross-cutting)
- [[micropython-en|MicroPython]] — the module hub
- [[arduino-watchdog-en|Watchdog (Arduino)]] — the C++ equivalent (`avr/wdt.h`, where `wdt_disable()` is possible)
