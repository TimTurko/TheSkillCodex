---
title: Watchdog
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa: []
phases:
  - integration-et-tests
draft: false
source_fr: embarque/mcu/chien-de-garde.md
source_sha256: 580a103f03752f291fed71661c226c77a16613bc1491c6d9923e053f9787d19d
---

The **watchdog** (WDT) is a counter that **restarts the board if the program stops "feeding" it** within a set delay. It is the only mechanism of a [[microcontroleur-en|microcontroller]] that acts **when the program is no longer in a state to act**: where error handling assumes code still alive to trigger it, the watchdog expects nothing from it: it expects only a sign of life, and the absence of that sign *is* the trigger.

## What is it for?

An embedded system that runs with nobody around to press reset — a remote station, a machine in service, a buried object — does not survive a lock-up. A library waiting for an answer that never comes, a sensor that freezes the loop, an incomplete frame: the program stays inert, and it cannot report its own halt, precisely because it has halted. The watchdog reverses the burden of proof. It is no longer up to the program to say that it is unwell. It is up to it to **prove regularly that it is well**, and silence counts as failure.

It is a **last resort** mechanism, armed during the [[fiabiliser-et-deboguer-en|hardening phase]] on a system that already works, never to hide a bug that ought to be fixed.

## What is the watchdog independent of?

All the trust placed in it rests on a single question: **what can fall without taking it down too?** And the answer is not the same from one family to another: that is why it has to be looked up rather than assumed.

![A comparison of two watchdog clock architectures. On the left the AVR case: the crystal feeds the system clock then the core, while a separate RC oscillator, private to the watchdog, feeds its counter; the two chains do not touch, but the delay is only approximate. On the right the RP2040 case: the same crystal feeds the system clock and, through the reference clock, the watchdog counter; the delay is precise but the two chains share their source.|640](/ressources/img/chien-de-garde/independance.svg)

On an **AVR**, the watchdog is clocked by an RC oscillator of its own that runs permanently. A crash of the system clock does not reach it: the core can freeze, the counter keeps going and the board eventually restarts. The price of that separation is that this oscillator is **free-running**, hence imprecise: the quoted delays hold at 5 V, and they **stretch as the supply voltage drops**. A margin computed at 5 V is no longer the right one at 3.3 V: an invisible trap as long as the build is not tested at its real voltage.

On an **RP2040**, the architecture is the other way round. The watchdog counter is clocked by a derivative of the reference clock, itself normally tied to the crystal. The delay is therefore **exact**, measured in milliseconds rather than in approximate steps. But the watchdog shares its source with the rest of the chip, and whatever the crystal takes down, it takes down too.

Neither option is better: they are two trade-offs between **fault coverage** and **delay accuracy**, and the engineer's job is to know which one is in hand. The question to put to the datasheet is always the same: *where does the watchdog clock come from, and what stops it?*

## How does it work?

Three gestures, the same everywhere.

**Arming.** A delay is set and the counter starts. That delay must be **longer than the worst legitimate loop pass**, margin included: otherwise the watchdog restarts a system that was working. The ceiling is low, a few seconds at most on every common family, because a supervision counter is not made to time long durations.

**Feeding.** One instruction resets the counter to zero. It is placed where **only healthy operation leads**: that is the decisive choice of the whole mechanism, and the next section is devoted to it.

**Letting the deadline fall.** The counter reaches its term, the reset line goes active, the board restarts from its start-up point.

| Family | Arming | Feeding | Can it be disarmed? |
|---|---|---|---|
| Arduino / AVR | `wdt_enable()`, steps from 15 ms to 8 s | `wdt_reset()` | **yes**, `wdt_disable()` |
| MicroPython | `WDT(timeout=…)`, up to 8,388 ms on RP2 | `feed()` | **no**, the API forbids it |

That last column is no API detail: **the MicroPython documentation states the ban at class level**, all boards included: once started, the watchdog can be neither stopped nor reconfigured. Hence a rule that also holds where disarming is possible: **never make an architecture depend on being able to call the watchdog back.** In practice, arming happens **late**, once initialisations are finished and the loop is ready to feed. And no long operation is planned that would be "disarmed for as long as it takes". On AVR, disarming serves as a **workaround** at start-up (some old *bootloaders* left the watchdog active with a very short delay after a reset, hence a restart loop), not as an architectural licence.

## What the watchdog does not detect

This is the limit discovered latest, and it is structural: **the watchdog watches a rhythm, not a result.** It observes that an instruction is reached at regular intervals. It knows nothing of what the program does between two passes, nor of how correct that work is.

Hence the nastiest failure mode: a loop that **keeps turning and feeding** while one of its activities is dead. The sensor no longer answers but its read fails silently, the link is down but transmission does not block: the loop passes, the watchdog is fed, the system declares itself alive and no longer does anything useful. No restart will happen, and that is logical: from its point of view, all is well.

The countermeasure is to **feed only after checking that every activity has shown a sign of life** since the last cycle: each task raises its flag when it has really worked, and the watchdog is fed only if all of them are raised. What is then watched is what the service depends on, not the loop that calls them.

That idea is industrialised on some families under the name *task watchdog*: each task **registers** with the watchdog and must sign in **on its own behalf**, failing which the deadline falls. On ESP32, that watchdog reports the offending task on the console by default **without restarting**: restarting is a configuration option. It is already an admission that the real service rendered is as much a **diagnosis** as a return to service.

## Example — The build that thinks it is alive

A station reads a temperature every five seconds and transmits it. An eight-second watchdog is armed, fed on every loop pass. After three days, the station has transmitted nothing, and yet it has **never restarted**.

The sensor had stopped answering. Its read function, instead of blocking, returned an error value. The loop kept going round, transmission went out on an invalid value, and the watchdog got its food on time. The mechanism worked exactly as designed, and it served no purpose: what had stopped was not the loop, but an activity **inside** the loop.

Fed on condition ("the three readings of the cycle succeeded"), the same watchdog would have restarted the board after eight seconds, and brought back a sensor that a power cut was enough to unstick. **The watchdog only becomes useful once it is given to watch what the service really depends on**, and that list is not in the microcontroller: it is in the specification.

## A silent reboot teaches nothing

The watchdog makes a system resilient and **silent in the same gesture**: the board restarts from scratch, the trace disappears with the RAM, and nothing tells a normal start-up from a recovery after a lock-up. A system that restarted forty times last night looks in every respect like a system that never faltered, until somebody notices that the defect does not fix itself.

Every family in principle offers a way to read the **cause of the last reset** at start-up. In practice, the information slips away at both ends of the journey, for opposite reasons:

- on the **AVR** side, the flag does exist in a status register, but the *bootloader* of Arduino boards often clears it before the program runs: whoever reads it in their initialisation finds zero and wrongly concludes that the watchdog did not bite;
- on the **MicroPython on RP2** side, the reset cause function returns "watchdog" **after a deliberate software restart as well**, since that restart itself goes through the watchdog. The cause therefore does not tell the two situations apart.

The conclusion to keep is not "read the reset cause" but **count your restarts yourself**: a counter incremented at start-up and stored in persistent memory, transmitted or displayed with the readings. It is three lines of code, it depends on no supplied mechanism, and it is what turns a board that picks itself up in silence into a board that **says** it picked itself up. Without that, the robustness gained is paid for in blindness.

## Pitfalls

**Feeding from an interrupt or a scheduled task.** A [[timer-en|timer]] [[interruption-en|interrupt]] keeps running even while the main program is stuck. A watchdog fed from there never detects anything again: the mechanism is in place, armed, and without effect.

**Arming before being ready to feed.** A long initialisation — waiting for a module, mounting a file system, connecting to a network — can exceed the delay and cause a restart loop before the program has even started. Arm afterwards.

**Computing the margin at the wrong voltage.** On families with a free-running oscillator, the real delay stretches at low voltage. The margin is checked on the build powered as it will be in service, not on the bench over USB.

**Confusing the safety net and the fix.** Restarting periodically to "work around" a memory leak or a recurring lock-up treats the symptom and hides the cause, all the more so because the restart is silent.

**Forgetting the watchdog during a debugging session.** A breakpoint freezes the processor but not necessarily the watchdog counter: the board resets in the middle of an inspection. Some tools disarm watchdogs on every halt and do not re-arm them afterwards: enough to believe the mechanism absent when it is merely suspended (see [[debugger-embarque-en|debugging an embedded system]]).

## Special case — Reboot, or warn

On some families, the watchdog offers a second mode: at the deadline, it raises an **interrupt** instead of resetting. Two uses follow from that, opposite in spirit.

The first is the **last word**: a few instructions before the reset to cut a power output, store a state or log the failure, which answers directly to the silent reboot described above. The second is the **periodic wake-up** of a sleeping microcontroller, where the watchdog no longer plays any safety role but acts as a low-power alarm clock (see [[deep-sleep-en|deep sleep]]).

The same peripheral therefore fills two contrary roles — a safety net and an alarm clock — and that mode does not exist everywhere: on the MicroPython side, the standard interface only exposes restarting. Keeping the distinction in mind avoids confusing a **restart suffered** with a **wake-up wanted** when reading the behaviour of a board.

## See also

- [[timer-en|Timer]] — the hardware counter of which the watchdog is a special case devoted to supervision
- [[interruption-en|Interrupt]] — the second mode of the watchdog, and the place where it must never be fed
- [[programmation-non-bloquante-en|Non-blocking programming]] — the brief loop that makes the watchdog feedable, and the wait that trips it wrongly
- [[firmware-en|Firmware]] — robustness as an architecture choice, of which the watchdog is the last step
- [[fiabiliser-et-deboguer-en|Hardening and debugging]] — the build step where the watchdog is armed
- [[deep-sleep-en|Deep sleep]] — the periodic wake-up, another use of the same peripheral
- [[arduino-watchdog-en|Watchdog on Arduino]] — the implementation in C++ (`avr/wdt.h`, disarming possible)
- [[micropython-watchdog-en|Watchdog in MicroPython]] — the same mechanics on the MicroPython side (`machine.WDT`, no disarming)
- [[microcontroleur-en|Microcontroller]] — the chip that carries the peripheral
