---
title: Programming
type: trame
tags:
  - eee
  - trame
  - realisation
prerequis:
  - choisir-le-materiel-en
aa: []
draft: false
source_fr: embarque/realisation/programmer-l-embarque.md
source_sha256: 6ff42708fa550367b991bf4d8491001dbeff540663c894276b8e71a908046e23
---

**Programming** is the fourth step of [[en/embarque/index|building the embedded subsystem]]. The board is chosen and the electronics designed. What you now have to do is **give it a behaviour**. This happens in two stages: first **design the control algorithm** (the logic, independent of any code), then **write it** for the board, driving its peripherals. The deliverable is a **working, documented firmware**, ready to be hardened at [[fiabiliser-et-deboguer-en|step 6]].

## The right mindset

The temptation is to open the editor and start coding straight away, piling up instructions until "it works". What you get is a program nobody can read back or fix, yourself included, two weeks later. Design the **logic** on paper first, whatever the language: the logic decides the behaviour, the code only carries it out. And always keep the **control logic** apart from the **hardware access**: code where everything is mixed together becomes impossible to develop further.

## Goal of this step

Produce a **working, documented firmware** that:

- rests on an explicit **control algorithm** (flowchart, state machine or GRAFCET);
- is written in a **language suited** to the board's family;
- is **structured** (setup, loop, modules) rather than monolithic;
- drives the **peripherals** correctly (I/O, converter, PWM outputs);
- is **documented** well enough for someone other than you to pick it up.

## Method

### 1. Design the control algorithm

Before a single line of code, describe **how the system behaves**, independently of the board and of the language. And start more simply still: **tell the behaviour in plain words**, like a cooking recipe. If you can write "boil the water, drop in the pasta, wait nine minutes, taste, drain", you can turn it into a flowchart: every sentence becomes an action, every "if" or "when" becomes a decision. A behaviour you cannot tell in plain words will not let itself be coded. The tool changes with the problem: a [[logigramme-en|flowchart]] for a chain of decisions, a [[machine-a-etats-en|state machine]] for a system that goes through modes (idle, running, fault), a [[grafcet-en|GRAFCET]] for a sequential process, a [[chronogramme-en|timing diagram]] for signals that have to line up in time. The [[algorithme-en|algorithm]] page helps you pick the form. This logic is your plan: the code follows straight from it.

> [!warning] Watch out
> **Coding before designing the algorithm produces spaghetti code.** With no plan, every special case gets bolted on as you go, the conditions nest into each other, and the behaviour becomes impossible to reason about or to fix. The logic goes on paper first. The code is only its translation.

> [!example] Example: 3-axis arm project
> Told first in plain words: "at rest the motors are off. When a target comes in, the arm looks for its limit switches to set its origin, then moves to the position. At any moment, an unexpected limit switch or an operator command shuts everything down". That description becomes a **state machine**: *Idle* (motors off), *Homing* (finding the origin), *Moving* (closed-loop control towards the target), *Emergency stop* (immediate shutdown). The transitions are clean: a target received moves it from *Idle* to *Homing* then *Moving*. An unexpected limit switch throws any state at all into *Emergency stop*.
>
> **Output**: a four-state machine and its transitions, agreed before any coding.

> [!livrable] Deliverable 1/4 — Control algorithm
> - The behaviour described in plain words, then formalised (flowchart, state machine or GRAFCET), independently of the code

### 2. Choose the language and structure the firmware

The language follows from the board's family: **[[cpp-en|C++]]** in the Arduino ecosystem (the most widespread on microcontrollers), **[[micropython-langage-en|MicroPython]]** on the boards that support it, or your family's **vendor toolchain** (STM32Cube for [[stm32-en|STM32]], for instance) when it leaves you no choice. Once the language is settled, structure the program from the start: a **setup** part (configuring the pins and the peripherals), a **main loop** that runs the state machine, and separate **modules** for the distinct jobs. That is what [[firmware-en|firmware]] is about: organising the embedded program so that it stays readable and open to change. From this point on, banish blocking waits: [[programmation-non-bloquante-en|non-blocking programming]] is what lets the loop do everything "at the same time".

> [!tip] Tip
> **Structure the firmware before you fill it.** Setting the setup / loop / modules split right at the start costs a few minutes and avoids the monolith where everything answers to everything else. Structured firmware can be debugged and extended. Monolithic firmware gets rewritten.

> [!example] Example: 3-axis arm project
> On the ESP32, in C++ (Arduino ecosystem): a setup that configures the driver pins, the analog inputs for the sensors and the interrupts for the limit switches; a loop that runs the state machine and, in *Moving* mode, the closed-loop control of the three axes; separate modules for reading the sensors, generating the steps and handling the operator link.
>
> **Output**: a structured firmware skeleton (setup / loop / modules), that builds, with a place in it for the state machine from step 1.

> [!livrable] Deliverable 2/4 — Structured firmware skeleton
> - How the program is laid out: setup, main loop running the algorithm, separate modules

### 3. Drive the peripherals

The algorithm now has to act on the hardware. Every action goes through a peripheral of the board: reading a logic input or setting an output ([[gpio-en|GPIO]]), measuring an analog voltage ([[adc-en|analog-to-digital converter]]), producing a modulated signal for a motor or an LED ([[pwm-en|PWM output]]), sometimes shifting bits around to configure a register ([[manipulation-de-bits-en|bit manipulation]]). Tie every input and output of your state machine to the peripheral that carries it out, keeping that access layer **separate** from the logic. The anchor point is the **pin assignment**: you are the one who decides which GPIO pin carries which signal, in step with the circuit schematic from [[concevoir-l-electronique-en|step 3]]. This pin ↔ signal table is born here. Step 4 will document it.

> [!warning] Watch out
> **Code that is right on the wrong pins does nothing, or burns something.** Asking a tutorial or an AI for code without giving it your pin assignment and your wiring produces a correct program… for somebody else's build. Always hand over the context with the request: exact board, pin ↔ signal table, voltages. The code adapts to the wiring, never the other way round.

> [!warning] Watch out
> **Polling a critical event in a loop instead of using an interrupt means missing the event.** Reading a limit switch by testing it on every pass of the loop can miss it if the loop is busy elsewhere. Critical events (safety, fast edges) are wired to an **interrupt**. Polling is kept for what can wait until the next pass.

> [!example] Example: 3-axis arm project
> Peripheral assignment on the ESP32:
>
> | Subsystem | Peripheral | Access |
> |---|---|---|
> | 3 drivers (STEP) | PWM output | step generation |
> | 3 drivers (DIR) | logic output | direction of rotation |
> | 3 angle sensors | A/D converter | periodic reading |
> | 6 limit switches | logic input | **interrupt** (safety) |
>
> **Output**: a peripheral access layer, distinct from the state machine, with the limit switches on interrupts.

> [!livrable] Deliverable 3/4 — Peripheral access layer
> - The match between the algorithm's inputs and outputs and the board's peripherals, kept apart from the logic

### 4. Document it

Firmware that works but that nobody understands is firmware only half finished. Document what matters: a **comment** on every module and every choice that is not obvious, a **pin assignment table**, the **state machine diagram**, and how to **build and flash** the board. Aim at the reader who picks the code up with no context — a teammate, a marker, or yourself in six months. That is the documentation half of this step's deliverable.

> [!tip] Tip
> **The minimum documentation is three things: the pin mapping, the state machine diagram, and how to build and flash.** With those three, anyone can pick the firmware up. Without them, even clean code stays opaque.

> [!example] Example: 3-axis arm project
> Documentation for the arm's firmware: a pin table (driver, sensor, limit switch → pin number), the diagram of the four-state machine, and a short set of instructions (environment, build command, flashing the ESP32). Every module carries a header comment describing what it does.
>
> **Output**: self-contained documentation, readable without the context of the project.

> [!livrable] Deliverable 4/4 — Firmware documentation
> - Pin mapping, algorithm diagram, build and flash procedure, code comments

## Wrap-up

Your firmware works and is documented: the algorithm is settled, the code structured, the peripherals driven. Next: organising the **communications** at [[faire-communiquer-en|step 5]] if the project calls for them, then **hardening** that behaviour at [[fiabiliser-et-deboguer-en|step 6]] — real time, robustness, debugging. The algorithm and the code are deliverables of the [[dossier-technique-en|technical design file]] of the V-model.

---

## Common pitfalls

**Coding before designing the algorithm.** With no plan, the behaviour gets written as you go and becomes impossible to reason about. The logic goes on paper first.

**Putting everything in the main loop.** Monolithic firmware, where each function tangles with the others, can neither be debugged nor extended. Split setup, loop and modules from the start.

**Polling a critical event instead of using an interrupt.** Testing a safety input on every pass of the loop can miss it. Critical events are wired to an interrupt.

**Blocking the loop with busy waits.** A wait that freezes the whole program stops you controlling the axes, reading the sensors and reacting to the limit switches. Waits are handled without blocking the loop.

**Mixing control logic and hardware access.** With no separate access layer, changing a sensor forces you to touch the logic. Keep the algorithm independent of the peripherals.

**Not documenting.** Code with no pin mapping, no algorithm diagram and no flashing procedure goes opaque within days, even to the person who wrote it.

## What belongs elsewhere

**Running the step belongs to the V-model.** The algorithm and the code go into the [[dossier-technique-en|technical design file]]. This page produces the artefact, the V-model puts it into the project and has it reviewed.

*Real-time robustness* — fine-grained interrupts, watchdog, memory management, low power — is covered at [[fiabiliser-et-deboguer-en|step 6]]. Here you write the *working* firmware. There, you *harden* it.

## See also

- [[en/embarque/index|Building the embedded subsystem]]
- Previous step: [[concevoir-l-electronique-en|Designing the electronics]]
- Next step: [[faire-communiquer-en|Getting things talking]]
- [[algorithme-en|Algorithm]] — [[logigramme-en|flowchart]], [[machine-a-etats-en|state machine]], [[grafcet-en|GRAFCET]], [[chronogramme-en|timing diagram]]
- [[cpp-en|C++]] or [[micropython-langage-en|MicroPython]]
- [[gpio-en|GPIO]], [[adc-en|analog-to-digital converter]], [[pwm-en|PWM output]], [[manipulation-de-bits-en|bit manipulation]]
- [[firmware-en|Firmware]]
- [[programmation-non-bloquante-en|Non-blocking programming]]
- [[dossier-technique-en|Technical design file]] *(project management, V-model)*
