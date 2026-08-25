---
title: Energy chain and information chain
type: notion
tags:
  - eee
  - notion
  - architecture
prerequis: []
aa: []
phases:
  - concept
draft: false
source_fr: embarque/chaine-energie.md
source_sha256: acabe705c18665ba45cb03a72c8344496be40dbc84fcdadeff819e683fa96298
---

The **energy chain** and the **information chain** are two sequences of functions that describe any mechatronic system: one says how it **acts** on the world (the power side), the other how it is **driven** (the control side). The two are coupled. Information commands energy and measures its effects in return. It is the simplest model for placing every part of a project: power side, or control side.

![Model of a mechatronic system as two coupled chains: at the bottom the energy chain (alimenter, distribuer, convertir, transmettre, agir sur la matière d'œuvre); at the top the information chain (acquérir, traiter, communiquer). The information chain commands the energy chain at the "distribuer" stage and receives the sensor readings in return.](/ressources/img/chaine-energie/generique.svg)

## What is it for?

A mechatronic system does two things at once: it **transforms energy** to produce an action (turning a motor, heating, moving something) and it **processes information** to decide what to do (reading a sensor, comparing with a target, commanding). Splitting them into two chains helps you:

- **share out the project** — the energy chain draws on power electronics and mechanics (our colleagues' side); the information chain, on sensors, the [[microcontroleur-en|microcontroller]] and the [[cpp-en|code]];
- **spot the interfaces** — it is where the two chains meet that [[niveaux-de-tension-en|logic levels]], drivers and signal compatibility get decided;
- **see the control loop** — when information measures what energy produced, the loop closes and the system is under closed-loop control.

The model complements the [[schema-bloc-fonctionnel-en|functional block diagram]] (which shows the functions) and the [[schema-cinematique-en|kinematic diagram]] (which shows the motions). Here, you follow the **flows** of energy and information.

## The two chains

**The energy chain** transforms a source all the way to the action, in four stages before it acts:

1. **Supply** (*alimenter*) — provide the energy (battery, mains, regulated supply).
2. **Distribute** (*distribuer*) — meter it and route it under the control of the command side (driver, H-bridge, relay). This is the **driven stage**.
3. **Convert** (*convertir*) — change the form of the energy: a motor converts electrical into mechanical.
4. **Transmit** (*transmettre*) — adapt the motion (gearbox, belt, gear train).

At the end of the chain, the system **acts** (*agir*) on the object it works on.

**The information chain** drives the system in three stages:

1. **Acquire** (*acquérir*) — measure quantities (sensors, limit switches, encoders) and take in the target value.
2. **Process** (*traiter*) — decide: compare with the target, apply a control law ([[microcontroleur-en|microcontroller]], [[firmware-en|firmware]]).
3. **Communicate** (*communiquer*) — report back (display, indicator, network message, feedback to the operator).

The French names are given in brackets because the diagrams of this wiki keep them, and because that is what your teammates will say out loud.

**The coupling** is what makes the model worth having: the information chain **commands** the energy chain (typically at the *distribute* stage) and **acquires** the measure of its effects in return. This measure → decision → action loop is the heart of a closed-loop system.

> [!tip] Tip
> **Which parts for each block?** Stable families, common in student projects. Check availability, and the datasheet has the final word.
>
> | Block | Common parts | To choose |
> |---|---|---|
> | Supply | Li-ion battery + BMS, 9-12 V mains adapter, 7805 / AMS1117 / LM2596 regulators | [[alimentation-electronique-en\|Power supply]] |
> | Distribute | A4988 / DRV8825 stepper drivers, L298N / DRV8871 H-bridges, relays, MOSFETs | [[choisir-le-materiel-en\|Choosing the hardware]] |
> | Convert | DC motors, NEMA 17 steppers, SG90 / MG996R servos | [[choisir-le-materiel-en\|Choosing the hardware]] |
> | Transmit | GT2 belts, gearboxes, gear trains | *mechanics course (colleagues)* |
> | Acquire | limit switches, incremental encoders, HC-SR04, DHT22, MPU-6050 | [[choisir-le-materiel-en\|Choosing the hardware]] |
> | Process | Arduino / ESP32 / STM32 families… | [[microcontroleur-en\|Microcontroller]] |
> | Communicate | SSD1306 OLED, 1602 LCD, LEDs and buzzers, Wi-Fi / BLE | [[techno-sans-fil-en\|Wireless technologies]] |

## Example — The 3-axis arm

![The two chains applied to the 3-axis arm. Energy chain: battery or mains (alimenter), drivers (distribuer), motors (convertir), gearboxes and belts (transmettre), the arm in motion (agir). Information chain: encoders and limit switches (acquérir), microcontroller (traiter), operator interface (communiquer). The microcontroller commands the drivers and receives the measured position.](/ressources/img/chaine-energie/bras-3-axes.svg)

On the arm used as the running example, the two chains read joint by joint. On the **energy** side: the battery supplies, the drivers distribute power to each axis, the motors convert, the gearboxes and belts transmit, and the arm acts to pick up the object. On the **information** side: the encoders and limit switches acquire the position, the microcontroller processes it (it compares with the target position and computes the command), and the operator interface communicates the state. The microcontroller **commands** the drivers and reads back the **measured position**: the loop is closed, and the arm knows where it is.

## Pitfalls

**Forgetting the *distribute* stage.** You do not wire a motor straight onto a microcontroller output: you need a **driver** (or an H-bridge) between the command and the power. Skipping that stage means a burnt output, and it is exactly the stage the chain makes visible.

**Mixing up convert and transmit.** The motor **converts** the energy (electrical → mechanical). The gearbox **transmits** it while adapting it (torque, speed). Two distinct functions, usually in two distinct parts.

**Drawing an energy chain with no feedback.** With no sensor measuring the effect produced, the system runs [[boucle-ouverte-en|open loop]]: it commands blind. Plenty of failures come from feedback that was never designed in.

**Filing a part under the wrong chain.** A sensor belongs to the **information** chain (it reports), even though a current runs through it. The test: does the part carry **power** (energy) or a **quantity you want to know** (information)?

## See also

- [[alimentation-electronique-en|Designing a power supply]] — the engineering of the *supply / distribute* blocks
- [[schema-bloc-fonctionnel-en|Functional block diagram]] — the **functions** and their flows, a complementary view
- [[schema-cinematique-en|Kinematic diagram]] — the **motions** of the mechanism that the energy chain sets going
- [[asservissement-en|Closed-loop control]] — what the coupling becomes when the measurement comes back to the command: the closed loop
- [[microcontroleur-en|Microcontroller]] — the heart of the information chain
- [[concept-en|Concept]] — the phase where these chains are laid down to share out the project
