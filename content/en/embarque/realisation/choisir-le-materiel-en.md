---
title: Choosing the hardware
lang: en
type: trame
tags:
  - eee
  - trame
  - realisation
prerequis:
  - decomposition-fonctionnelle-en
aa: []
draft: false
source_fr: embarque/realisation/choisir-le-materiel.md
source_sha256: beb0e88e6139696c1b240f1a02aa87d957acf65289a932547c79b13347ebe2df
---

**Choosing the hardware** is the second step of [[en/embarque/index|building the embedded subsystem]]. Starting from the functions you put figures on when [[decomposition-fonctionnelle-en|scoping the embedded need]], you select **the sensors, the actuators and the board** that will carry them out, then you check that the whole thing holds up — I/O, compute, power. The deliverable is a **hardware selection you can justify**, ready to be wired up at [[concevoir-l-electronique-en|step 3]].

## The right mindset

The temptation is to pick the board first, out of habit or reputation ("we'll just use an ESP32"), then bend the needs around it. Do the opposite: start from the functions, work out what has to be measured and actuated, and pick the hardware that meets the need, not the one you know best. And never pick a component from a seller's product page: it is the **datasheet** that says whether it fits. A hardware choice is justified by a **matrix**, not by a hunch. That is what lets you defend it at the review.

## Goal of this step

Produce a **justified hardware selection** that:

- matches every function from the scoping stage with the **sensor** or **actuator** that carries it out;
- settles on a **platform** (microcontroller or single-board computer, then family) sized to the needs;
- justifies the platform choice with a documented [[matrice-de-decision-en|decision matrix]];
- **checks** that the board holds up: enough I/O, the peripherals required, compute headroom, a workable power supply.

## Method

### 1. Turn the functions into hardware needs

Take the list of figures from [[decomposition-fonctionnelle-en|scoping the embedded need]] and turn each function into something concrete: what has to be **measured** (so a sensor), **actuated** (so an actuator), **computed** (so processing resource)? Each need inherits the figures from step 1 — resolution, range, rate, force — which become the selection criteria. You end up with a list of hardware needs, function by function, without naming a single part number yet.

> [!example] Example: 3-axis arm project
> The arm's four functions, turned into needs:
>
> | Function | Hardware need | Sizing figure |
> |---|---|---|
> | Position 3 axes | 3 rotary actuators | torque (set in the CdCF, the functional requirements specification), accuracy ± 0.5° |
> | Know the position | 3 angle sensors | resolution, range 0–270° |
> | Make the travel limits safe | 6 on/off contacts | detection < 5 ms |
> | Talk to the operator | 1 command link | a few tens of kbit/s |
>
> **Output**: 3 actuators, 3 sensors, 6 contacts, 1 link. Each one carries its sizing figure. That is the order sheet for choosing components.

> [!livrable] Deliverable 1/4 — Hardware needs, function by function
> - For each function: what has to be measured, actuated or computed, and the sizing figure

### 2. Choose the sensors and actuators

For each need, identify a **type** of component (potentiometric or magnetic angle sensor, brushed DC motor or stepper, relay or transistor…), then a candidate **part number**. This is where you read the [[lire-une-datasheet-en|datasheets]]: supply voltage, range and resolution, current draw, output interface (analog, logic, bus). The component has to work with a sensible board. There is no point picking an exotic sensor that will force a heavy interface circuit on you.

> [!warning] Watch out
> **A component is not chosen from its photo or its price.** Two "identical" angle sensors can differ on voltage (3.3 V or 5 V), on interface (analog or I²C) or on range. Those details decide the whole interface circuit. Read the datasheet *before* settling on a part number, not after ordering it.

> [!example] Example: 3-axis arm project
> For actuation, two types were compared: brushed DC motor + gearbox, or stepper + driver. The stepper wins on accuracy in [[boucle-ouverte-en|open loop]] (no sensor needed to position it precisely). The part chosen is a NEMA 17 stepper driven by an A4988. For angle measurement, a magnetic sensor with a 0–3.3 V analog output, read straight by the board's converter. That measurement is kept despite the stepper's open loop, for calibration at power-up and for watching drift while the arm runs. The limit switches are plain mechanical contacts.
>
> **Output**: 3 NEMA 17 steppers + A4988 drivers, 3 analog angle sensors at 3.3 V, 6 contacts. Every voltage and interface has been taken from a datasheet.

> [!livrable] Deliverable 2/4 — Sensors and actuators chosen
> - For each need: type, part number, and the key figures taken from the datasheet (voltage, interface, range, current)

### 3. Choose the platform

The sensors and actuators fix most of the board's requirements: how much I/O, which peripherals (analog-to-digital converter, PWM outputs), what connectivity. Decide on the **type** first: a **microcontroller** (responsive, real-time, cheap to run, plenty for driving motors and reading sensors) or a **single-board computer** running Linux (powerful, for vision, networking, a rich interface). Then choose the **family** with a [[matrice-de-decision-en|decision matrix]]. The overview of the families and the help in choosing sit in the [[microcontroleur-en|microcontroller]] hub and in the [[raspberry-pi-en|Raspberry Pi]] page for the single-board option.

> [!tip] Tip
> **Do not redo the overview of the families: use it.** The [[microcontroleur-en|microcontroller]] hub already compares Arduino, ESP32, STM32, Teensy, PIC and the single-board option. Your job here is not to rewrite that comparison, but to *set it against your own needs* in a matrix. That is the step that turns a generic overview into a justified choice.

> [!example] Example: 3-axis arm project
> Three candidates set against the needs (≈ 15 I/O, of which 3 analog inputs and 3 STEP pulse outputs on PWM or timer, plus one operator link):
>
> | Criterion | Weight | Arduino Uno | ESP32 | STM32 |
> |---|---|---|---|---|
> | I/O and PWM | 30% | 3/5 | 5/5 | 5/5 |
> | Analog inputs | 20% | 4/5 | 5/5 | 5/5 |
> | Operator connectivity | 20% | 2/5 | 5/5 | 3/5 |
> | Ecosystem and getting started | 20% | 5/5 | 4/5 | 3/5 |
> | Price | 10% | 3/5 | 5/5 | 4/5 |
> | **Weighted score** | | **3.4** | **4.8** | **4.1** |
>
> The **ESP32** comes out on top: enough PWM and analog inputs for the three axes, built-in Wi-Fi for the operator link, compute headroom for the control loop. Two notes are worth recording for the review: the Uno loses a point on the analog side (10-bit resolution, a tight margin against the ± 0.5° asked for) and on connectivity against the STM32 (a single UART through a USB bridge, against native USB and several UARTs). Decision: ESP32.

> [!livrable] Deliverable 3/4 — Platform chosen (selection matrix)
> - The type (microcontroller or single-board) and the family chosen, justified by a decision matrix weighted to the needs

### 4. Check the fit and the power supply

Before you freeze the choice, check that it really holds up. Count the **I/O** you actually need and set that against what the board offers. Check that it carries the **peripherals** required (enough PWM channels, analog inputs, interrupt-capable inputs). Keep some **compute headroom**. Finally, sketch out the **power need** — source, voltages, rough current — to make sure it is workable. The detail comes at [[concevoir-l-electronique-en|step 3]], with [[alimentation-electronique-en|designing the power supply]]. If one point does not pass, go back to the platform choice: better to fix it here than on a board that has already been ordered.

> [!warning] Watch out
> **Running short on I/O or forgetting the power supply is paid for by a late change of board.** A board chosen without counting the pins turns out too tight at wiring time, once the order has gone out. Count the I/O and set down the power need *before* you freeze anything. Those are the two omissions that force you to start the choice again.

> [!example] Example: 3-axis arm project
> Checking the ESP32: 3 × (STEP, DIR) = 6 outputs (3 STEP pulse trains on PWM or timer, 3 directions on plain logic), 3 analog inputs for the angle sensors, 6 interrupt-capable inputs for the limit switches. That comes to 15 pins in use, within what the board offers. Peripherals: enough channels to generate the STEP signals, analog-to-digital converter present. Power: a 12 V source for the drivers, regulated down to 5 V and 3.3 V for the logic. That is workable, and the detail goes to step 3.
>
> **Output**: enough I/O, peripherals present, power supply feasible. The hardware selection is frozen.

> [!livrable] Deliverable 4/4 — Check on I/O, resources and power
> - The count of I/O and peripherals set against the board, and the sketch of the power need

## Wrap-up

Your hardware is chosen and justified: sensors, actuators, board, and the check that it all fits. Next comes [[concevoir-l-electronique-en|designing the electronics]] that will tie it all together. Arbitrating this choice at a review, entering it in the parts list and planning the order are carried by the [[concept-en|concept]] phase of the V-model.

---

## Common pitfalls

**Choosing the board before you know the needs.** Starting from the board you happen to know and bending the needs around it locks in constraints before you have understood them. The needs drive the hardware, not the other way round.

**Settling on a component without reading its datasheet.** Voltage, interface, range, current: those details decide the whole interface circuit. The seller's product page is not enough.

**Running short on I/O.** A board too tight on pins shows it up at wiring time, order already placed. Count the I/O before you freeze anything.

**Leaving the power supply out of the choice.** Hardware that looks attractive but draws a lot can make the power supply impossible, or the battery life laughable. The power need is part of the choice.

**Mixing up a microcontroller and a single-board computer.** The first is responsive and real-time. The second is powerful, but running under an operating system. Driving three motors in real time does not have the same needs as doing vision.

**Scoring everything the same in the matrix.** A matrix that gives 4/5 everywhere decides nothing: the choice is then made on a hunch and the matrix is only dressing. A real matrix makes the gaps show.

## What belongs elsewhere

**Arbitration belongs to the V-model.** The hardware choice is approved at a review during the [[concept-en|concept]] phase, entered in the parts list (BOM) and planned for ordering. This page gives the technical method, the V-model puts it into the project.

*The selection tool*, the [[matrice-de-decision-en|decision matrix]], is a project management concept, shared with every discipline.

*The eco-design impact* of the hardware (power draw, lifetime, repairability, origin) enters the matrix as a weighted criterion: see [[ecoconception-en|eco-design]].

## See also

- [[en/embarque/index|Building the embedded subsystem]]
- Previous step: [[decomposition-fonctionnelle-en|Scoping the embedded need]]
- Next step: [[concevoir-l-electronique-en|Designing the electronics]]
- [[microcontroleur-en|Microcontroller]]
- [[raspberry-pi-en|Raspberry Pi]]
- [[lire-une-datasheet-en|Reading a datasheet]]
- [[alimentation-electronique-en|Designing a power supply]]
- [[matrice-de-decision-en|Decision matrix]] *(project tool)*
- [[concept-en|Concept]] *(arbitration, V-model)*
- [[ecoconception-en|Eco-design]] *(cross-cutting)*
