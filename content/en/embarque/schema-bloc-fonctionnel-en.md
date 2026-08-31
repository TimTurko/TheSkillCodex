---
title: Functional block diagram
lang: en
tags:
  - eee
  - notion
  - architecture
prerequis: []
aa:
  - RA-PROJET-C04-4/PROJ/4
  - RA-PROJET-C04-4/PROJ/6
draft: false
source_fr: embarque/schema-bloc-fonctionnel.md
source_sha256: 7cc6d87ee524bdc96ee133f5ddf4d474473e25053a753f07dfea9f960177773a
---

A **functional block diagram** is a drawing of a mechatronic system that shows its sub-functions (sensors, [[microcontroleur-en|controllers]], actuators, end effectors) and the flows of information, energy and material moving between them. It bridges the [[cahier-des-charges-fonctionnel-en|requirements specification]] and the choice of technical solutions.

## What is it for?

Before picking a specific [[microcontroleur-en|microcontroller]], motor or sensor, you need to know which functions the system has to perform and how they follow on from one another. The functional block diagram answers three questions:

- **What?** Which sub-functions make up the system?
- **How do they talk to each other?** Which flows (information, energy, material) travel between the blocks?
- **Where are the boundaries?** What belongs to the system, and what belongs to its environment?

Without this diagram you end up picking parts at random, with no idea what role they play in the whole. It is the classic mistake at the start of a project: *"we went with an Arduino because everyone knows it"*, without knowing what you are asking it to do. Three weeks later the team finds out it is two analog inputs and one [[pwm-en|PWM]] output short. The wiring is redone from scratch and two days are gone.

The block diagram plays another decisive role: it is a communication document. It gets passed around the team, discussed with the supervisor, presented at project reviews. A clear diagram saves hours of misunderstanding.

## How to draw one

A block diagram is built from the [[cahier-des-charges-fonctionnel-en|functional requirements specification]] by answering five questions in order:

1. What is the main function of the system? → one central block, or the system boundary.
2. Which input signals does it pick up? → identify the sensors (information coming from the environment or the user).
3. Which actions does it produce on the world? → identify the actuators and end effectors.
4. Who decides? → identify the [[microcontroleur-en|controllers]] (microcontroller, PLC, hard-wired logic).
5. How does information travel? → draw the arrows between blocks, with the type of flow.

Order matters. Starting with the controller is a common trap, and it leads to sizing the system around a part instead of around a need. *"I know ESP32s well, I'll go with that"*, and you end up squeezing the use case into the constraints of the part.

### Drawing conventions

- **Rectangular blocks**: sub-functions or components. Use a function name (a verb) rather than a product name.
- **Arrows**: flows between blocks. Label the type:
  - *Information*: logic signal, sensor reading, network message. Thin line by convention.
  - *Energy*: electrical, mechanical or hydraulic power. Thick line or double arrow.
  - *Material*: fluid, part being handled, sample. Dashed line or wide solid arrow.
- **System boundary**: a dashed outline around the blocks that belong to the system. Everything outside is environment (user, object to be handled, external conditions).
- **[[boucle-ouverte-en|Open loop]] vs closed loop**: if the controller gets a measured feedback from the end effector through a sensor, the loop is closed (a servo loop). Otherwise it is open.

![Functional block diagram conventions: blocks, system boundary and flow types](/ressources/img/schema-bloc-fonctionnel/generique.svg)

## Example

Project: temperature control of an egg incubator.

![Functional block diagram of the incubator: closed-loop temperature control](/ressources/img/schema-bloc-fonctionnel/couveuse.svg)

The diagram reads like this: the user sets a target, the controller compares it with the thermistor reading, and drives the relay that powers the heating element in [[pwm-en|PWM]]. The heat spreads through the air inside the incubator, the sensor measures it, and the loop closes.

A few things worth taking from this example:

- The user and the air inside the incubator sit outside the system (outside the dashed boundary). They are part of the environment.
- The end effector (heating element) is not the actuator (SSR relay). The relay switches the power. The element turns it into heat.
- The loop closes through the physical world: the heat travels through the air before it is measured. That is typical of thermal systems, and it explains the long lag that comes with this kind of control loop (a [[asservissement-en|PID]] controller is usually needed to keep it stable).
- The energy flow is drawn all the way back to its sources: the 230 V mains powers the relay, the 5 V supply powers the controller, two separate rails crossing the boundary. This is what diagrams that only show signals typically leave out (see Pitfalls).

## Pitfalls

**Mixing up actuator and end effector.** The motor (actuator) turns electrical energy into mechanical energy. The wheel (end effector) applies that energy to the environment. The two are distinct, even though they tend to be lumped together. The distinction becomes critical when the end effector changes (drive wheel vs track vs propeller) and the actuator stays the same.

**Mixing levels of abstraction.** A block labelled "Arduino Uno" and a block labelled "PID control loop" are not at the same level. Either you reason in hardware components or in software functions, but not both on one diagram. If you really need both, draw two separate diagrams that reference each other.

**Leaving out the energy flows.** Many students draw only the information wires (logic signals) and forget the power flows. Yet powering an actuator is often the critical point of failure: not enough current, a badly wired ground, poor isolation.

**Trying to fit everything in.** A functional block diagram is not a circuit diagram. No resistor values, no pinouts, no part numbers. If you hesitate over whether to include a detail, it probably belongs in another document (schematic, parts list, manufacturing file).

**Confusing the system boundary with the PCB boundary.** The system often includes mechanical parts (end effectors), links (cables, tubing), sometimes an enclosure. The board is only one part of the system.

## See also

- [[decomposition-fonctionnelle-en|Functional breakdown]] — the upstream analysis on the project management side, which produces the technical functions that this diagram turns into hardware blocks.
- [[cahier-des-charges-fonctionnel-en|Functional requirements specification]] — the input to the process, from which the block diagram follows.
- [[schema-cinematique-en|Kinematic diagram]] — the view of the **motions** of the mechanism, complementary to the view of the functions.
- Open loop / closed loop — characterises the nature of the control in the diagram.
- Sensors and actuators — the two families of blocks that interface with the environment.
