---
title: Watchdog on Arduino
type: tuto
phases:
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main-en
  - arduino-programmation-non-bloquante-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/arduino/arduino-watchdog.md
source_sha256: 07936033509d632a2d2c5ea0bcf1beb1c887eccd6293809569cc660bcb6bda3a
---

The **watchdog** (WDT) is an independent [[timer-en|counter]] that **restarts the board if the program stops "feeding" it** within a set delay. It is a safety net against hangs: a stalled program — an infinite loop, a wait that never ends, a frozen sensor — starts itself again instead of staying mute. On Arduino it is handled simply through `avr/wdt.h`: you arm it, you reset it regularly, and any abnormal break in that rhythm triggers a reset.

## What is it for?

An embedded system sometimes has to run **with nobody around to press reset**: an isolated station, a buried object, a machine in service. If its program hangs — a library waiting for an answer that never comes, a sensor freezing the code, a loop that never exits — it stays inert until someone cuts the power by hand. The watchdog brings **robustness**: as long as the program runs normally, it pats the dog at a regular interval. If it hangs, the dog stops being fed, and once its delay is up it **resets** the board, which starts again from scratch.

It is a **last-resort** mechanism, to be brought in during the [[integration-et-tests-en|integration phase]] to make an already working system dependable, not to paper over bugs that ought to be fixed.

## Step by step

Four steps: arm the dog, feed it, choose the delay, and disarm it cleanly when you have to.

### 1. Arm the watchdog

`wdt_enable()` starts the watchdog with a delay. Go past that delay without a reset and the board restarts.

```cpp
#include <avr/wdt.h>

void setup() {
  wdt_enable(WDTO_2S);   // restarts if not fed for 2 s
}
```

(Internally this function configures a dedicated register, and the matching bitwise operations are described in [[manipulation-de-bits-en|bit manipulation]], but `avr/wdt.h` hides them completely.)

`avr/wdt.h` belongs to the **AVR** (Uno R3, Nano, Mega). On an **Uno R4** (Renesas), the watchdog is armed through the `WDT` library (`WDT.begin()`, `WDT.refresh()`). On **ESP32** it is the *task watchdog* (`esp_task_wdt`). The principle, feeding a counter or facing a reset, is the same everywhere, and only the API changes (see [[esp32-en|ESP32]]).

### 2. Feed the dog regularly

`wdt_reset()` puts the counter back to zero: that is "feeding" the dog. You call it on every pass of the main loop, somewhere the program **can only reach if it is running normally**.

```cpp
void loop() {
  // ... the program's normal work ...
  wdt_reset();   // "I am alive": the deadline is pushed back
}
```

As long as `loop()` keeps looping, the dog is fed and all is well. If some part of the code hangs and stops `wdt_reset()` from being reached, the deadline arrives and the board restarts.

![Timing diagram of the watchdog: as long as the loop calls wdt_reset() at a regular interval, the margin before reset is recharged to the armed delay and never falls to zero; when a hang interrupts the wdt_reset() calls, the margin drops to zero and the board restarts (RESET, then back to setup()).|680](/ressources/img/arduino-watchdog/chronogramme-watchdog.svg)

### 3. Choose the delay

The delay (`WDTO_15MS` up to `WDTO_8S`) has to be **longer than the worst normal loop time**, otherwise the dog restarts a board that was working. But not too long either, or the system sits hung for no reason before restarting. You set it above the longest legitimate pass through the loop, with some margin.

### 4. Disarm the dog when you need to

`wdt_disable()` stops the watchdog — useful at the very start of `setup()` (see the reboot-loop pitfall), or ahead of a deliberately long operation you cannot break up.

```cpp
void setup() {
  wdt_disable();         // safety: neutralise the dog at start-up
  // ... initialisations ...
  wdt_enable(WDTO_2S);   // then arm it once you are ready
}
```

## Example — Making a rig that can hang dependable

A rig polls a sensor over a bus that may, rarely, never answer, freezing the program. The watchdog guarantees that if it does hang, the board restarts instead of going silent.

```cpp
#include <avr/wdt.h>

void setup() {
  wdt_disable();              // neutralise it first (reboot safety)
  Serial.begin(9600);
  Serial.println(F("Startup"));
  wdt_enable(WDTO_4S);        // dog armed: reset if hung > 4 s
}

void loop() {
  int mesure = lireCapteur(); // <- if this sensor freezes, no more wdt_reset()
  Serial.println(mesure);

  wdt_reset();                // feed the dog on every healthy pass
  delay(500);                 // (the loop stays well under the 4 s)
}
```

In normal use, `loop()` feeds the dog every ~500 ms, well under the 4 s: nothing happens. But if `lireCapteur()` hangs, `wdt_reset()` is no longer reached, and after 4 s the board restarts, going back through `setup()`, which prints "Startup" again. The system **recovers on its own**, with nobody stepping in. Note that the `delay(500)` is harmless here because it is well below the dog's delay. In a [[arduino-programmation-non-bloquante-en|non-blocking]] program, you would feed the dog inside the cooperative loop.

## Pitfalls

**The endless reboot loop.** On some older Arduino *bootloaders*, after a watchdog reset the dog **stays active with a very short delay** and the bootloader does not disarm it: the board resets before it has even had a chance to feed the dog again (restarting in a loop, unusable). The fix is to call `wdt_disable()` **at the very start of `setup()`**. Recent boards (Optiboot bootloader) no longer suffer from this, but the reflex remains a healthy one.

**A delay shorter than the normal loop.** If the worst loop time exceeds the dog's delay, it restarts a board that was working perfectly. Always set the delay **above** the longest legitimate pass, with margin.

**Feeding the dog too often, in the wrong place.** Calling `wdt_reset()` inside an internal loop, or somewhere that is always reached **even when the program has gone off the rails**, empties the mechanism of its meaning: the dog no longer detects anything. It has to be fed where only healthy operation leads.

**Using the watchdog to hide a bug.** Restarting periodically to "work around" a memory leak or a recurring hang treats the symptom, not the cause. The dog is a safety net, not a fix.

**Forgetting that a long `delay()` and a watchdog pull against each other.** A wait longer than the dog's delay sets it off. All the more reason to structure the code as [[arduino-programmation-non-bloquante-en|non-blocking tasks]], where no single function monopolises the loop.

## Special case — Interrupt mode and waking from sleep

The watchdog has a second mode: instead of **restarting**, it can fire an **interrupt** when the delay is up. That mode serves in particular as the **periodic wake-up** for [[arduino-deep-sleep-en|deep sleep]]. It is what brings a battery sensor back to life every N seconds. So the same peripheral fills two opposite roles: **safety net** (reset mode) and **alarm clock** (interrupt mode). Keeping that distinction in mind saves you from confusing a restart you suffered with a wake-up you asked for.

## Where it fits in the project

- **[[integration-et-tests-en|Integration and testing phase]]** — once the system works, the watchdog makes it dependable against unforeseen hangs, especially if it has to run for a long time unattended.
- **Specification** — an **availability** requirement ("the system must recover on its own after a hang") comes down in practice to a watchdog; worth planning for if the specification calls for it.

The watchdog is the last line of defence of a robust firmware: it is no substitute for clean code, but it stops an unforeseen hang from freezing a delivered system for good.

## See also

- [[arduino-deep-sleep-en|Deep sleep on Arduino]] — where the watchdog acts as the periodic wake-up (interrupt mode)
- [[arduino-programmation-non-bloquante-en|Non-blocking programming]] — structuring the code to feed the dog without blocking
- [[timer-en|Timer]] — the watchdog is a dedicated counter
- [[chien-de-garde-en|Watchdog]] — the cross-cutting concept: what the dog is independent of, what it fails to detect, and the silent restart
- [[interruption-en|Interrupt]] — the watchdog's interrupt mode
- [[esp32-en|ESP32]] — the watchdog there goes through the task watchdog (`esp_task_wdt`), an API distinct from `avr/wdt.h`
- [[firmware-en|Firmware]] — robustness of embedded code (cross-cutting)
- [[arduino-en|Arduino]] — hub for the Arduino tutorials
