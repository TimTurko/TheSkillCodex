---
title: Hardening and debugging
type: trame
tags:
  - eee
  - trame
  - realisation
prerequis:
  - programmer-l-embarque-en
aa: []
draft: false
source_fr: embarque/realisation/fiabiliser-et-deboguer.md
source_sha256: c32ac7cac32ea6c902cfdd78540a70b7d0e977906272e80d2707c9b0f5cb7a87
---

**Hardening and debugging** is the sixth step of [[en/embarque/index|building the embedded subsystem]]. A build that works first time is not reliable for all that. This step **hardens the system** — guaranteeing real-time behaviour, surviving lock-ups, saving power — and puts in place the **method** for hunting down faults. The deliverable is a **test and debugging protocol**: what you check, how, and the record of the problems you dealt with.

## The right mindset

The temptation is to stop as soon as "it works once". But an embedded system runs for a long time, in varying conditions, sometimes with people's safety at stake: what works once has to work *every time*. So come at this step with two reflexes. First, **decide what you are testing before you test**: with no protocol, a successful run proves nothing in particular. Second, **debug by isolating, not by guessing**: a bug is cornered by methodical observation, not by random changes.

## Goal of this step

Produce a **test and debugging protocol**, and the hardened system that goes with it:

- a **test protocol** that says, for each function, what to check and what result to expect;
- **robustness measures** in place: real time (interrupts, timers), surviving lock-ups (watchdog), memory and power management;
- a **debugging method** with the right instruments, and the **record** of the faults met and fixed.

## Method

### 1. Define the test protocol

Before hardening or fixing anything at all, decide **how you will check** that the system holds up. Go back to the figures for each function from [[decomposition-fonctionnelle-en|scoping the embedded need]]: for each one, write a **test** (the action to carry out), the **expected result** (the value or the behaviour), and the **condition** (from cold, under load, over time). Ideally you go all the way back to the [[cahier-des-charges-fonctionnel-en|functional requirements specification]]: every requirement gets its test and is checked **on its own**, then the functions are tested **together**. It is in those combined runs that the interaction faults show up, the ones no isolated test reveals. This protocol is the thread running through the whole bring-up. It also prepares the final acceptance run, carried out at [[integration-et-tests-en|step 7]] across the whole system.

> [!warning] Watch out
> **Testing at random proves nothing.** "I plugged it in and it moved" says nothing about whether the accuracy holds, whether the safety reacts fast enough, whether the system survives ten minutes of service. A run is only worth something when it is tied to a result you expected in advance. Write the protocol *before* switching on.

> [!example] Example: 3-axis arm project
> Test protocol for the arm's embedded subsystem, derived from the functions:
>
> | Function | Test | Expected | Condition |
> |---|---|---|---|
> | Position | command a full travel | ± 0.5° | from cold and after 10 min |
> | Measure the position | set the sensor reading against an external reference angle (known hard stop, protractor) | deviation < 0.2° (well under the positioning tolerance) | across the whole range |
> | Limit switch safety | make a contact | stop < 5 ms | while moving |
> | Operator link | send a command from a distance | carried out without loss | at nominal range |
>
> Once each row is checked on its own, the protocol is replayed **combined**: positioning while the operator link is transmitting, for instance. That is exactly the interaction that will reveal the fault hunted down at step 3.
>
> **Output**: a protocol of four tests, each with its expected result and condition, checked one by one then all at once. It guides the bring-up and feeds the acceptance run of step 7.

> [!livrable] Deliverable 1/3 — Test protocol
> - For each function: the test to run, the expected result and the test condition — checked individually, then all at once

### 2. Harden the real-time behaviour and the robustness

The working firmware from [[programmer-l-embarque-en|step 4]] now has to hold up over time and in the face of the unexpected. Four levers: guarantee **real-time behaviour** by clocking periodic tasks off a [[timer-en|timer]] and by handling urgent events on an [[interruption-en|interrupt]] rather than by polling; survive **lock-ups** thanks to a **[[chien-de-garde-en|watchdog]]** that restarts the board if the program freezes; keep the **[[memoire-en|memory]]** under control so that nothing overflows; and, if battery life matters, make use of **[[deep-sleep-en|sleep]]**. The engineer-level pages for each family ([[arduino-en|Arduino]], [[esp32-en|ESP32]], [[stm32-en|STM32]]…) cover these mechanisms board by board.

> [!warning] Watch out
> **No real-time behaviour without interrupts and timers, no robustness without a watchdog.** An acquisition clocked by the main loop drifts as soon as the loop gets busy. A safety input that is polled gets missed. And a program that freezes with no watchdog leaves the system stuck, sometimes powered up and moving. Neither mechanism is optional once safety is in play.

> [!example] Example: 3-axis arm project
> Hardening the arm: reading the three angle sensors is triggered by a **timer** every 10 ms (guaranteed rate, whatever the loop is doing). The six limit switches are wired to a high-priority **interrupt**, which forces the *Emergency stop* state without waiting for the next pass of the loop. A **watchdog** restarts the ESP32 if the loop stops feeding it (frozen program). No blocking waits anywhere in the loop. **Memory** is watched from the console (stable after 30 minutes of service). No **sleep** mode: the arm is powered all the time, and writing that down is a decision too.
>
> **Output**: real time guaranteed by a timer, safety on an interrupt, watchdog armed, memory watched. The system stands up to lock-ups and holds its rate.

> [!livrable] Deliverable 2/3 — Robustness measures
> - The mechanisms in place: tasks on a timer, critical events on an interrupt, watchdog, memory and power management

### 3. Debug methodically

Something does not work as expected: that is unavoidable. Debug with **method** rather than at random. **Reproduce** the fault reliably, **isolate** the area at fault (hardware or software? which module?), then **observe** it with the right instrument. The code does not tell you everything: a [[multimetre-en|multimeter]] checks a voltage, an [[oscilloscope-en|oscilloscope]] reveals a signal that is malformed or badly timed, a [[debugger-embarque-en|debugger]] follows execution step by step. The [[instruments-de-mesure-en|measuring instruments]] page says which tool for which symptom. Record every fault and its fix: that log is part of the deliverable.

> [!tip] An **intermittent** fault is looked for in the hardware first
> "It works one time in three" rarely points at the code: a deterministic program goes wrong the same way every pass. The first three causes to rule out are physical — a **loose connection** or a wire torn off by the movement ([[cable-management-en|wiring]]), a **supply that sags** when an actuator starts up and resets the board ([[alimentation-electronique-en|power supply]], [[decouplage-en|decoupling]]), and the **intermittent contacts** of a breadboard, which moving to a [[pcb-en|printed circuit board]] does away with. Rule the hardware out before you reread a single line of code.

> [!tip] Tip
> **The oscilloscope sees what the code does not say.** When a digital signal "ought" to be fine but the behaviour is off, the instrument settles it in one measurement: is the STEP signal really regular? does the supply voltage hold under load? Guessing costs you hours. Measuring gets you the answer.

> [!example] Example: 3-axis arm project
> Symptom: one axis "judders" now and then. Approach: the fault is reproduced by commanding fast travels. It is isolated on the software side (the other two axes are fine on the same hardware). On the **oscilloscope**, the STEP signal for that axis, generated by a software task, shows gaps whenever the Wi-Fi link transmits. Cause found: Wi-Fi transmission briefly blocks the step generation. Fix: move step generation onto a high-priority timer task. Gaps gone, checked again on the oscilloscope.
>
> **Output**: a fault reproduced, isolated, observed with an instrument, fixed and rechecked. All of it recorded in the debugging log.

> [!livrable] Deliverable 3/3 — Debugging log
> - The record of the faults met: symptom, isolation, instrumented observation, cause, fix and check

## Wrap-up

Your system is hardened and your bring-up has the right instruments: test protocol written, robustness in place, faults recorded and fixed. What follows is the **whole-system acceptance run** at [[integration-et-tests-en|step 7]], which carries out the qualification of the subsystem once it is integrated with the rest of the project. Robustness itself starts being prepared as early as the [[preuve-de-concept-en|proof of concept]] and firms up in the [[dossier-technique-en|technical design file]] of the V-model.

---

## Common pitfalls

**Testing at random, with no protocol.** A successful run proves nothing unless it is tied to a result expected in advance. The protocol gets written before the run.

**Getting real-time behaviour by polling.** A task clocked by the loop drifts under load. An urgent event that is polled gets missed. Timers and interrupts are the right tools.

**Doing without a watchdog.** A frozen program with no watchdog leaves the system stuck, sometimes dangerously so. The watchdog is not optional once safety is in play.

**Debugging by guessing.** Changing things at random and hoping it goes away hides the fault instead of explaining it. You reproduce, you isolate, you observe.

**Ignoring the instruments when the code is not enough.** Plenty of "software" bugs are really hardware ones — a malformed signal, a voltage that drops. The multimeter and the oscilloscope settle it.

**Mistaking "it worked once" for "it is reliable".** An embedded system runs for a long time and in varying conditions. Reliability is checked over time and under load, not on a single run.

## What belongs elsewhere

**Robustness is prepared upstream and confirmed downstream, in the V-model.** The reliability unknowns are closed as early as the [[preuve-de-concept-en|proof of concept]]. The robustness measures firm up in the [[dossier-technique-en|technical design file]]. This page carries the technical side of it, the V-model puts it into the project.

**A compile error is not a bug.** This page deals with what goes wrong **at run time**: the program builds, uploads, and behaves badly. A program that **refuses to build or to upload** is not debugged with an instrument. It is read in the compiler's message: [[cpp-logs-en|reading and understanding the errors]].

*Final qualification* — bench acceptance, measuring the deviations, the verdict — is [[integration-et-tests-en|step 7]], that is, the integration phase of the V-model. Here you prepare and bring up. There, you deliver the verdict.

## See also

- [[en/embarque/index|Building the embedded subsystem]]
- Previous step: [[faire-communiquer-en|Getting things talking]]
- Next step: [[integration-et-tests-en|Integration and testing]]
- Real time and robustness: [[interruption-en|interrupts]], [[timer-en|timers]], [[chien-de-garde-en|watchdog]], [[deep-sleep-en|sleep]], [[memoire-en|memory management]]
- [[debugger-embarque-en|Debugging an embedded system]]
- [[instruments-de-mesure-en|Measuring instruments]] — [[multimetre-en|multimeter]], [[oscilloscope-en|oscilloscope]]
- The engineer-level page for your family: [[arduino-en|Arduino]], [[esp32-en|ESP32]], [[stm32-en|STM32]]…
- [[preuve-de-concept-en|Proof of concept]] *(V-model)*
- [[dossier-technique-en|Technical design file]] *(project management, V-model)*
