---
title: Reading a datasheet
lang: en
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - microcontroleur-en
  - niveaux-de-tension-en
  - gpio-en
aa:
  - RA-EEE-C03-2/EEE/1
  - RA-EEE-C03-2/EEE/3
  - RA-EEE-C03-2/EEE/4
  - RA-MME-C02-1/MME/6
phases:
  - concept
  - preuve-de-concept
  - dossier-technique
draft: false
source_fr: embarque/mcu/lire-une-datasheet.md
source_sha256: ea23803e92f80118b699691bdc45f4d8726e48c0d1fc80e6796b69ef92d94e3b
---

**Reading a datasheet** means pulling out of a manufacturer's technical document what you need to wire, size and drive a component without destroying it: its **pinout**, its **logic levels**, its **maximum currents and voltages**, its **operating conditions** and its typical **application schematic**. It is a **cross-cutting reading skill**: the same method applies to a sensor, a regulator or a microcontroller. This page sets out the generic method, then puts it to work on the L298N, a dual H-bridge that drives two DC motors.

![Anatomy of a datasheet: from top to bottom, the standard sections (first page, package, pinout, function table, Absolute Maximum Ratings, operating conditions, electrical and thermal characteristics, application schematic) and, alongside each, the question it answers.](/ressources/img/lire-une-datasheet/generique.svg)

**In this page** — two parts:

1. [Reading a datasheet](#reading-a-datasheet) — the generic method: which section answers which question;
2. [Reading the L298N datasheet](#reading-the-l298n-datasheet) — the method applied, document in hand: packages, pinout and truth table, from the table to the algorithm, maximum ratings, heat and heatsink, module or bare component.

## What is it for?

The datasheet is the **manufacturer's contract**: everything the component guarantees, and everything it forbids, is written in it. Reading it before wiring means avoiding three classic traps: frying a component by going past a limit, under-using it by missing a function, or losing hours debugging a circuit the datasheet made obvious.

In practice, being able to read a datasheet lets you:

- **choose** a component with your eyes open — it is the raw material for the selection guidance on the [[microcontroleur-en|microcontroller]] hub and for a [[matrice-de-decision-en|decision matrix]];
- **wire** it correctly, telling the control pins from the power pins;
- **size** the supply and the cooling from the guaranteed figures;
- **drive** the component with a program that respects its function table.

This page assumes a few basics: what a [[microcontroleur-en|microcontroller]] is and what its [[gpio-en|GPIO]] are, the idea of a [[niveaux-de-tension-en|logic level]], and the elementary quantities voltage / current / power (dissipated power is a voltage times a current). These are the prerequisites listed at the head of the page.

## Reading a datasheet

A datasheet has a predictable structure. Reading it efficiently is not going through it from the first page to the last: it is knowing which section answers which question, and going straight there.

### 1. Finding the right datasheet

Before reading, find the right document. A component part number belongs to one **manufacturer** and one precise **revision**. Versions differ, and an off-the-shelf module often has no datasheet of its own (see the next step).

- start from the exact part number silkscreened on the component;
- prefer the manufacturer's own site — the most recent revision is the one that counts;
- be wary of PDFs aggregated by resellers, sometimes truncated or out of date.

It is up to you to find the datasheet of the component studied here: [L298N datasheet (go and find it)](https://letmegooglethat.com/?q=Datasheet+L298n+pdf). Keep it open, every step refers to it.

### 2. Identifying the component and its package

The first page gives the essentials: a **description** (what the component is for), a functional block diagram, and the **package** or packages available. The package decides how the component is soldered and how it fits into a board.

- read the description: function, voltages and currents announced in summary;
- spot the packages offered: **through-hole** (DIP, Multiwatt and the like), solderable by hand, or **SMD** (surface mount), which needs equipment not every workshop has.

> [!warning] Watch out
> **The school workshop does not solder SMD.** A component available only in an SMD package cannot be assembled by hand in our conditions: check at this step that a through-hole version exists, or fall back on a ready-made module.

### 3. Reading the pinout and the function table

The **pinout** gives each pin a role. The pin table spells it out. First useful reflex: sort the pins into families — **supply**, **control** (logic signals), **power** (outputs).

The **function table** (or truth table) says which behaviour comes out of which combination of inputs: it is the **contract the program will have to respect**.

- spot the supply pins and their respective voltages;
- separate the control pins — the logic signals coming from the [[microcontroleur-en|microcontroller]] — from the power pins;
- read the function table as a specification of the code to write.

> [!tip] Tip
> **The function table comes before the code.** Before writing a single line, copy it out: it says exactly which states to put on which pins to get each behaviour. Putting it to work is covered in [[arduino-moteur-cc-en|driving a DC motor]].

### 4. Reading the limits: maximum ratings or operating conditions

Two tables **never** to confuse:

- the **Absolute Maximum Ratings** — the values **never** to exceed, not even for an instant. Beyond them, destruction is possible. These are not usage conditions;
- the **Recommended Operating Conditions** — the **normal usage range**, where the component behaves as specified.

Working right up against the maximum ratings is designing in a failure. Margin is taken on the operating conditions, not on the absolute limits.

> [!warning] Watch out
> **An absolute maximum is not a target.** "Power supply: 50 V" in the maximum ratings does not mean "supply it with 50 V", it means "past 50 V, it breaks". The usage voltage is read in the operating conditions (for the same component, "up to 46 V"), with a margin.

### 5. Detailed characteristics and application schematic

That leaves the quantitative heart of the datasheet:

- **logic levels** — from what voltage an input is seen as a "1", below what voltage as a "0". This is what decides compatibility with a 3.3 V or 5 V microcontroller → [[niveaux-de-tension-en|logic levels]];
- **currents and voltage drops** — the guaranteed output current, and the voltage lost *inside* the component: the load does not get the whole supply voltage. Read the **min** or **max** column depending on the worst case, never the *typ* column;
- **thermal characteristics** — thermal resistance and dissipable power: how much the component heats up, and whether a **heatsink** is needed;
- **application schematic** — a reference circuit offered by the manufacturer, to be read as a starting point and not as the project's final schematic → [[analyse-de-schema-electronique-en|analysing a schematic]] for the study of a complete schematic.

> [!tip] Tip
> **The application schematic is not your schematic.** The manufacturer shows the component in an ideal setting. Your circuit will have to add what the project demands. Use it as a model, not as a copy-paste.

## Reading the L298N datasheet

The method now, with the document in front of you. The **L298N** is a *dual H-bridge*: a single component able to drive **two DC motors** independently, each in both directions of rotation. It makes a good teaching case, because it lives in **two worlds** at once. Open the datasheet you found at step 1. We go through it section by section. The extracts reproduced below and the figures commented on come from the **January 2000** edition of the ST datasheet. A more recent revision renumbers the tables and changes the layout. Find the same lines in **your** copy, that is the one that counts.

![The L298N in two worlds: on the left the 5 V logic world (inputs IN1 to IN4 for direction, ENA/ENB for run and for speed by PWM, logic supply), commanded by the microcontroller; on the right the power world up to 46 V, where two H-bridges each drive a DC motor in independent directions, with heating and a heatsink to plan for.](/ressources/img/lire-une-datasheet/l298n.svg)

**A logic world, a power world.** On one side, **digital** inputs at 5 V: IN1 to IN4 set the direction of each motor, ENA and ENB enable each bridge. This is the side the microcontroller touches, and it is read in the pinout and the logic levels. A concrete detail to read there: a "1" is recognised from about 2.3 V, a threshold low enough for a 3.3 V microcontroller to drive the L298N, even though its logic is supplied at 5 V. This is exactly the reasoning of [[niveaux-de-tension-en|logic levels]]. On the other side, a **power** stage: a motor supply that can climb to several tens of volts, currents of several amps, OUT outputs towards the motors. The quantities there are **analog and continuous** (voltages, currents, voltage drops, heating) and are read in the maximum ratings and the thermal characteristics. The datasheet describes these two worlds in different sections: knowing which side you are on saves a lot of confusion.

### The package: SMD, through-hole… or a module

The first page announces two packages for the same die: the **Multiwatt15**, a 15-lead through-hole package with a drilled metal tab (the one that will take the heatsink), and the **PowerSO-20**, its **SMD** version. The order-code table at the end of the document reveals in passing that "L298N" is precisely the code of the vertical Multiwatt15: the "N" of the common name comes from there.

- the **Multiwatt15** (through-hole) solders by hand: it is the only version buildable in our workshop conditions;
- the **PowerSO-20** (SMD) needs surface-mount soldering equipment — out of reach at school;
- the off-the-shelf **module**, for its part, appears nowhere in the datasheet: it is a small board built *around* the Multiwatt15, with heatsink, terminal blocks and diodes already fitted (see the special case at the end of the page).

The same component therefore exists in three forms. Before ordering or wiring, check **which one you have in hand**: that is what decides what can be soldered and what remains to be built around it.

### The pinout and the truth table

![Extract from the L298 datasheet: pinout of the Multiwatt15 package, the fifteen pins numbered with their names, and the note saying the metal tab is connected to pin 8.|600](/ressources/img/lire-une-datasheet/brochage-multiwatt15.png)

*Source: STMicroelectronics — L298 datasheet, extract unmodified.*

Fifteen pins, to be sorted into families before anything else:

- **supply** — Vs (pin 4, the motor power), Vss (pin 9, the 5 V logic) and GND (pin 8, connected to the metal tab). The datasheet requires a 100 nF capacitor as close as possible to each of the two supplies, and specifies **non-inductive** for the power one, not for the logic one: this is [[decouplage-en|decoupling]], and it is not optional;
- **control** — In1/In2 and Enable A for bridge A, In3/In4 and Enable B for bridge B: six logic signals coming from the microcontroller;
- **power** — Out1/Out2 and Out3/Out4, towards the two motors;
- two **Sense** pins (1 and 15), meant to measure the current of each bridge through a resistor — to be tied to ground when they are not used.

Then comes the truth table for driving a motor ("bidirectional DC motor control"):

The two-worlds diagram above places the inputs at play: `En` is a bridge's enable input, `C` and `D` its two direction inputs.

| Inputs | Behaviour |
| --- | --- |
| En = H · C = H; D = L | forward |
| En = H · C = L; D = H | reverse |
| En = H · C = D | fast stop (brake) |
| En = L (C, D don't matter) | coasting |

C and D are the two In inputs of the bridge used. Two readings not to miss: there are **two different stops** — the brake (both inputs at the same level: the bridge shorts the motor, a fast stop) and coasting (bridge disabled: the motor winds down on its own inertia) — and the application schematic surrounds the motor with **four external diodes**: the [[protection-electronique-en|flyback diodes]], required by the manufacturer for any inductive load.

### From the truth table to the algorithm

This table *is* the program's specification: each row becomes a function. Let us write the algorithm out in plain words, before any line of code:

```text
FUNCTION forward(speed) :
    IN1 <- HIGH
    IN2 <- LOW
    ENA <- PWM(speed)          // speed = duty cycle, from 0 to 100%

FUNCTION reverse(speed) :
    IN1 <- LOW
    IN2 <- HIGH
    ENA <- PWM(speed)

FUNCTION brake() :
    IN1 <- LOW                 // IN1 = IN2 : fast stop
    IN2 <- LOW
    ENA <- HIGH

FUNCTION coast() :
    ENA <- LOW                 // bridge disabled, IN1/IN2 do not matter
```

Speed is set by modulating the enable with a [[pwm-en|PWM]] signal: the duty cycle makes the average speed. And the second motor? The same functions on IN3/IN4 and ENB. Spinning a base on the spot means calling "forward" on one bridge and "reverse" on the other.

To go from this pseudocode to a real program: the general method is laid out in [[algorithme-en|algorithm]] (and its graphical form in [[logigramme-en|flowchart]]), the language in [[cpp-en|the C++ module]], and the full implementation — wiring and code — in [[arduino-moteur-cc-en|driving a DC motor]].

### The Absolute Maximum Ratings, for real

![Extract from the L298 datasheet: table of absolute limit values, with the voltages and currents not to be exceeded.|600](/ressources/img/lire-une-datasheet/absolute-maximum-ratings.png)

*Source: STMicroelectronics — L298 datasheet, extract unmodified.*

A commented reading of the lines that commit the circuit:

- **Vs = 50 V** — the destruction limit of the motor supply. Yet the first page announces "operating supply voltage up to 46 V": two different numbers for two different notions. 46 V is the *usage* limit, 50 V the one past which it breaks. This is exactly the distinction of step 4 of the method;
- **Io = 2 A per bridge, continuous** — 2.5 A in repetitive peaks, 3 A in a single peak. Watch out: a motor draws far more on start-up and under load than in steady running. It is its **stall** current that has to be compared with these lines, not its nominal current;
- **Vi, Ven: −0.3 to 7 V** — the logic inputs do not survive the power world. Never cross the two;
- **Ptot = 25 W** — but read the condition in brackets: *package held at 75 °C*, in other words **with cooling already in place**. This figure does not say what the component dissipates in open air (next section).

To these limits the electrical characteristics add the figure that surprises most: the bridge's **total voltage drop** — 1.8 V typical at 1 A, up to 4.9 V maximum at 2 A. The motor does not get the supply voltage, but that voltage *minus* the drop: supplied "at 12 V", a motor drawing 1 A only sees about 10. To be built into the sizing, or the motor comes out weaker than planned. It is also the perfect illustration of the min / typ / max columns: you size on the **max** (4.9 V), not on the typical.

### The heat: why a heatsink, and where to put it

That lost voltage does not vanish: it becomes heat. The "Thermal data" table lets you do the calculation the "25 W" hides:

- **with no heatsink**, the junction-to-ambient thermal resistance of the Multiwatt15 is 35 °C/W. With a junction limited to 130 °C in operation and a room at 25 °C, the component can only dissipate about **3 W** in open air;
- yet two motors drawing 1 A each already means ≈ 1.8 W per bridge, so ≈ 3.6 W in total: the limit is passed **before even half the maximum current**. Under sustained current, the built-in thermal protection cuts in and the bridge drops out — an intermittent fault that is hard to diagnose;
- **with a heatsink**, it is the junction-to-case resistance (3 °C/W) and that of the heatsink that count: an ordinary heatsink brings the budget back up to 8 or 10 W.

That is why every off-the-shelf L298N module carries a heatsink: it is not an accessory, it is what makes the "2 A per bridge" reachable.

Design consequence: the heatsink has a **size of its own** — a footprint, a height, and air to leave around it. Room for it is booked at component placement, not once the layout is finished → [[pcb-en|designing a PCB]].

### Module or bare component

The L298N exists as a bare component (through-hole package) and as a ready-made **module**. The two are not wired the same way, and do not fit onto a board the same way:

- the **module** already carries the heatsink, the protection diodes and sometimes a 5 V regulator. It connects wire by wire, without soldering, and suits prototyping — but it is a small board in its own right, hard to fit into a dedicated circuit, and bulky;
- the **bare component** solders onto your own board. It is then up to you to add the [[protection-electronique-en|flyback diodes]], the [[decouplage-en|decoupling]] and the heatsink the module was carrying. More design work, but a compact and controlled integration — provided a through-hole package is available, since the workshop does not solder SMD.

The module / bare choice is therefore read partly in the datasheet (package, external parts required) and settled according to the project phase: module to validate fast, bare component for the final board.

## Pitfalls

**Confusing maximum ratings with operating conditions.** The first are destruction limits, the second a usage range. Sizing on the first is designing in a failure.

**Taking the module for the component.** The module carries parts (diodes, heatsink, sometimes a regulator) that the bare component demands you add yourself. Reading the component's datasheet is not enough to know the module.

**Forgetting the bridge's voltage drop.** The load does not get the supply voltage: the L298N loses a share of it. A motor supplied "at 12 V" through the bridge sees noticeably less.

**Ignoring the heatsink.** Under sustained current, with no heatsink, the component reaches its thermal cut-out and drops out, an intermittent fault that is hard to diagnose. To be planned for by its place on the board too.

**Forgetting the flyback diodes.** Driving an inductive load (a motor) without [[protection-electronique-en|protection diodes]] destroys the bridge. The module has them built in, the bare component does not: to be added yourself.

**Reading a "typical" value as a guaranteed one.** The min / typ / max columns do not say the same thing. Size on the worst case, not on the typical.

**Downloading any old PDF.** The real risk is not reading an old revision, it is **not knowing which one you are reading**. Tables get renumbered from one edition to the next, and a reseller's PDF can be truncated or describe a clone documented elsewhere. Spot the revision at the foot of the first page, or the *Revision history* table at the end of the document, before quoting a figure.

## Special case — Modules with no datasheet of their own

Many off-the-shelf modules (the generic "L298N" boards are a typical case) have no official datasheet: only the central component has one. Good practice: read the datasheet of the **component** fitted on the module, then spot on the board what the module adds (regulator, diodes, connectors, enable jumpers). When the seller provides the board's schematic, it usefully completes this reading.

## Where it fits in the project

- **[[concept-en|Concept]] phase** — reading datasheets feeds the choice of components and the [[matrice-de-decision-en|decision matrix]]: part numbers are compared on their guaranteed figures, not on impressions.
- **[[preuve-de-concept-en|Proof of concept]] phase** — before buying or testing, check on the datasheet that the component meets the project's constraints (voltage, current, logic levels).
- **[[dossier-technique-en|Technical design file]] phase** — the figures read freeze the sizing (supply, heatsink) and the [[bom-en|BOM]]. Room for the heatsink is anticipated from the circuit layout onwards.
- **[[integration-et-tests-en|Integration and testing]] phase** — in case of abnormal behaviour, the datasheet is the first reference for telling a wiring fault from a limit reached.

A few minutes of reading up front save a fried component or hours of debugging: it is one of the most profitable professional reflexes in embedded electronics.

## See also

- [[microcontroleur-en|Microcontroller]] — the entry hub, where the datasheet is the raw material of the selection guidance
- [[niveaux-de-tension-en|Logic levels]] — reading and adapting the logic levels found (3.3 V / 5 V)
- [[arduino-moteur-cc-en|Driving a DC motor (H-bridge)]] · [[micropython-moteur-cc-en|in MicroPython]] — putting the function table to work in code
- [[arduino-sortie-pwm-en|Driving a PWM output]] · [[micropython-sortie-pwm-en|in MicroPython]] — speed control through the enable
- [[analyse-de-schema-electronique-en|Analysing an electronic schematic]] — studying a complete project schematic, beyond the application schematic
