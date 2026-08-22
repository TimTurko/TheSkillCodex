---
title: Embedded systems
tags:
  - branche
  - trame
  - eee
prerequis: []
aa: []
draft: true
source_fr: embarque/index.md
source_sha256: 9cef6247b60a15f143fdb3cb46fd7e027e826300c622eddf44697cb7f37e256a
---

You are building the **electronics and software** side of a mechatronics project: the board, its sensors, its actuators, and the program that drives them. This page is your **entry point**. It lays out the build of the embedded subsystem in **seven steps**, from the technical requirement through to validation on the bench. At each step it tells you **what you have to produce** (the deliverable) and **where to find the method** for getting there.

No need to read it end to end: find the step you are on, and follow the links. The running example is a **3-axis robotic arm**, the same project as the one used in the V-model phases, seen here from the electronics side. Two viewpoints, one project.[^fusion]

> [!info] This column is orthogonal to the V-model
> The [[en/conduite/index|V-model]] is the **project management** column: the time axis (reviews, milestones, team, deliverables). This page is the **embedded engineering** column: the technical axis (from choosing the hardware through to commissioning). Both describe the **same project** from two angles: here the "how to build it", there the "when to decide and validate". All the steering (review, bill of materials, milestone) stays with the phases of the V: each step below points to the phase that frames it, without rewriting it.

## The seven steps

1. [Frame the embedded requirements](#1-frame-the-embedded-requirements) — which technical functions the electronics and the software have to deliver
2. [Choose the hardware](#2-choose-the-hardware) — microcontroller or single-board computer, family, power supply
3. [Design the electronics](#3-design-the-electronics) — schematic, logic levels, printed circuit board, simulation
4. [Write the software](#4-write-the-software) — control algorithm, language, peripherals, firmware
5. [Make it communicate](#5-make-it-communicate) — wired buses and wireless links *(if the requirements call for it)*
6. [Harden and debug](#6-harden-and-debug) — real time, robustness, measuring instruments
7. [Integrate and test](#7-integrate-and-test) — assemble with the rest of the system, validate on the bench

Each step assumes the previous one without ruling out going back: you will often return to the hardware or the schematic after a trial.

## 1. Frame the embedded requirements

Before choosing a board, state **what the electronics and the software have to do**: which technical functions carry the requirements of the specification. This is the translation of the need into functions that can actually be built, on the embedded side.

Start from the functional breakdown of the system and pick out the functions that fall to electronics and software: driving actuators, acquiring quantities, communicating, deciding. Each becomes a quantified constraint that will guide every later choice: number of inputs and outputs, resolution, sampling rate, latency.

- [[decomposition-fonctionnelle-en|Functional breakdown]] — split the system into functions
- [[chaine-energie-en|Energy and information chains]] — tell apart what belongs to control and what belongs to measurement

*On the V-model side: this framing sits within the [[concept-en|concept]] phase, which settles the architecture and owns its deliverable.*

> [!livrable] Deliverable 1/7 — [[schema-bloc-fonctionnel-en|The embedded functions, defined and quantified]]
> The **functional block diagram** of the subsystem and its "function → embedded requirement" table. A paper deliverable. It is the entry contract for every step that follows.

## 2. Choose the hardware

The question: **which hardware runs the functions of step 1 best?** Sensors and actuators first, then the board: a microcontroller (responsive, real time, frugal with power) or a single-board computer (powerful, running Linux)? Which family? And how is all of it powered?

The overview of the families and the selection guide live on the microcontroller hub. Do not rewrite them: go and read them, and come back with a candidate board. Think about the power supply at this stage already, because it is what determines battery life and stability.

- [[microcontroleur-en|Microcontroller]] — overview of the families, microcontroller versus single-board computer, selection guide
- Families: [[arduino-en|Arduino]], [[esp32-en|ESP32]], [[esp8266-en|ESP8266]], [[stm32-en|STM32]], [[teensy-en|Teensy]], [[pic-en|PIC]]
- [[raspberry-pi-en|Raspberry Pi]] — the single-board computer option, and the two-brain architecture
- [[lire-une-datasheet-en|Reading a datasheet]] — comparing components on the evidence
- [[alimentation-electronique-en|Designing a power supply]] — source, regulation, battery life

*On the V-model side: the hardware architecture choice is settled in the [[concept-en|concept]] phase.*

> [!livrable] Deliverable 2/7 — [[choisir-le-materiel-en|The chosen hardware: board, sensors, actuators]]
> A decision matrix that has been settled, and the power budget. A paper deliverable (the selection note). Ordering the hardware comes next.

## 3. Design the electronics

Choosing the board is not enough. You have to **draw the circuit around it**: connect sensors and actuators, adapt the logic levels, distribute the power, protect the inputs. Then check the behaviour before soldering anything.

Read and produce the schematic, hunt down voltage incompatibilities (a 5 V sensor on a 3.3 V input destroys the input), and simulate the parts you are unsure about. Moving to a printed circuit board comes once the schematic has settled.

- [[analyse-de-schema-electronique-en|Reading an electronic schematic]] — read and produce a schematic
- [[niveaux-de-tension-en|Logic levels]] — 3.3 V / 5 V, compatibility and level shifting
- [[simulation-electronique-en|Electronic simulation]] — work out the behaviour before wiring
- [[pcb-en|Printed circuit board]] — from schematic to manufacturable board, with [[kicad-en|KiCad]]

*On the V-model side: these deliverables feed the [[dossier-technique-en|technical design file]] (schematics, layout, simulations).*

> [!livrable] Deliverable 3/7 — [[concevoir-l-electronique-en|The validated electronic schematic]]
> The checked schematic and the simulation of the uncertain parts (a simulated [[preuve-de-concept-en|proof of concept]]). A paper deliverable plus a simulation. The printed circuit board is its manufacturable version.

## 4. Write the software

Two stages: **design the control algorithm** (the logic, independent of any code), then **write it** for the board. The logic is first told in plain words, then described with a flowchart, a state machine or a GRAFCET. The code then implements it by driving the peripherals: inputs and outputs, analog-to-digital converter, PWM outputs.

Choose the form of algorithm that suits your problem first, then the language: C++ in the Arduino ecosystem, MicroPython, or your family's vendor environment. The firmware is the overall organisation of the embedded program.

- Designing the logic: [[algorithme-en|algorithm]] — [[logigramme-en|flowchart]], [[machine-a-etats-en|state machine]], [[grafcet-en|GRAFCET]], [[chronogramme-en|timing diagram]]
- Language: [[cpp-en|C++]] (Arduino ecosystem) or [[micropython-langage-en|MicroPython]]
- Peripherals: [[gpio-en|GPIO]], [[adc-en|analog-to-digital converter]], [[pwm-en|PWM output]], [[manipulation-de-bits-en|bit manipulation]]
- [[firmware-en|Firmware]] — structuring the embedded program as a whole

*On the V-model side: the algorithm and the code are deliverables of the [[dossier-technique-en|technical design file]].*

> [!livrable] Deliverable 4/7 — [[programmer-l-embarque-en|Algorithm and documentation]]
> The control algorithm (flowchart or state machine) and its implementation, which compiles and runs on the board. An algorithm plus code.

## 5. Make it communicate

This step only concerns projects whose **specification requires things to talk to each other**: remote control, supervision, transmitting measurements. If that is your case, choose **how the components talk**: a wired bus between chips on the same board, a wireless or cabled link to the outside world. Every link has its constraints: number of wires, throughput, distance, number of participants.

Choose the bus to suit the need: I²C to connect several sensors with two wires, SPI for speed, UART for a simple link. For wireless, Wi-Fi or BLE.

- [[bus-de-communication-en|Communication buses]] — [[uart-en|UART]], [[i2c-en|I²C]], [[spi-en|SPI]]
- [[techno-sans-fil-en|Wireless technologies]] — [[wifi-en|Wi-Fi]], [[ble-en|BLE]], [[zigbee-en|Zigbee]], [[lora-en|LoRa]]

*On the V-model side: the communication choices belong to the [[dossier-technique-en|technical design file]].*

> [!livrable] Deliverable 5/7 — [[faire-communiquer-en|Choice of communication technologies (if the specification requires it)]]
> How the exchanges are split up (internal buses, wireless link) and one link proven end to end, typically a [[preuve-de-concept-en|proof of concept]] on a breadboard.

## 6. Harden and debug

A setup that works on the first try is not thereby reliable. This step **hardens the system**: guaranteeing real-time behaviour (interrupts, timers), surviving lock-ups (watchdog), saving energy (sleep), and above all **finding the bugs** with the right instruments.

Draw on the cross-cutting topics of real time and robustness, then on the engineer-level pages of your family (watchdog, PID, real-time operating system, and so on). For debugging, the oscilloscope and the multimeter see what the code does not say.

> [!warning] A word of caution about "debugging"
> This step deals with **run-time** bugs: the program compiles, uploads and runs, but badly. An error that **stops it compiling or uploading** is not hunted here. It is read in the compiler message, back at step 4, with [[cpp-logs-en|reading and understanding errors]].

- Real time and robustness: [[interruption-en|interrupts]], [[timer-en|timers]], [[deep-sleep-en|sleep modes]], [[memoire-en|memory management]]
- [[instruments-de-mesure-en|Measuring instruments]] — [[multimetre-en|multimeter]], [[oscilloscope-en|oscilloscope]]
- [[debugger-embarque-en|Debugging an embedded system]] — a method for tracking a bug down
- The engineer level of your family: [[arduino-en|Arduino]], [[esp32-en|ESP32]], [[stm32-en|STM32]]…

*On the V-model side: robustness is prepared as early as the [[preuve-de-concept-en|proof of concept]] and consolidated in the [[dossier-technique-en|technical design file]].*

> [!livrable] Deliverable 6/7 — [[fiabiliser-et-deboguer-en|Test protocol and debugging]]
> The test protocol derived from the specification (each requirement validated on its own, then all together), the countermeasures to the technical risks in place (real time, watchdog, sleep) and a record of the bugs dealt with. A robust system plus a debugging log.

## 7. Integrate and test

The embedded subsystem finally joins **the rest of the project**, the mechanics and the operator. You **check on the bench** that every function from step 1 is met. This is the moment of truth: is the specification satisfied?

The course of integration and qualification, from the test pyramid through to recording deviations, is owned by the integration phase of the V-model. Do not describe it again: run it on your subsystem.

- [[integration-et-tests-en|Integration and testing]] — assemble, qualify, conclude (phase of the V)

*On the V-model side: this step is the [[integration-et-tests-en|integration and testing]] phase itself, seen from the embedded side.*

> [!livrable] Deliverable 7/7 — [[integration-et-tests-en|Finished product]]
> Every function from step 1 tested, measured, and either validated or recorded as a deviation. An assembled subsystem plus an acceptance file. This is the integration phase of the V, run on the embedded side.

## Management is the V-model

This column describes the engineering, it does not steer the project. Reviews, milestones, the bill of materials, team tracking and the validation of deliverables are described by the [[en/conduite/index|Project management]] branch:

- **Framing** (steps 1-2) is decided in the [[concept-en|concept]] phase.
- **Designing, programming, communicating, hardening** (steps 3-6) feed the [[dossier-technique-en|technical design file]].
- **Integrating and testing** (step 7) is the [[integration-et-tests-en|integration and testing]] phase.

If a page asks you to produce a schedule, a review or a project risk analysis, you have crossed into steering: follow the link to the V-model.

[^fusion]: The branch brings together the former EEE and MIA domains, merged in 2026.
