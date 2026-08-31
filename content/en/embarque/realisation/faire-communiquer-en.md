---
title: Getting things talking
lang: en
type: trame
tags:
  - eee
  - trame
  - realisation
prerequis:
  - choisir-le-materiel-en
aa: []
draft: false
source_fr: embarque/realisation/faire-communiquer.md
source_sha256: 2ffde05c9a98bb65ec2146826444cad0a20a3da6201287737683aaf7708e43ea
---

**Getting things talking** is the fifth step of [[en/embarque/index|building the embedded subsystem]]. As soon as several components have to exchange data — between chips on the same board, or with the outside world (a PC, a network, an operator) — you have to **choose how they talk to each other**: a wired bus on the inside, a wireless or cabled link towards the outside. The deliverable is a **choice of communication technologies**, justified and tested.

This step is **optional: the client's need is what decides**. Read the [[cahier-des-charges-fonctionnel-en|functional requirements specification]] again, along with the functions from the scoping stage: if none of them calls for talking to anything — remote control, monitoring, sending measurements, working alongside another system — you can skip this page and go straight to [[fiabiliser-et-deboguer-en|step 6]]. A subsystem built around a single microcontroller, with every sensor and actuator wired directly to it (I/O, analog inputs, PWM signals), often has neither an internal bus to choose nor an external link to create. The stocktaking of step 1 settles it: if it turns up no exchange between chips and no need for an external link, this step shrinks to almost nothing.

## The right mindset

The temptation is to add communication because it happens to be there: a bus because the board has one, Wi-Fi because the chip offers it. Every link has a cost, though — wires, code, power draw, things that can fail. Only keep a bus or a link if a **real exchange** calls for it, and choose it on concrete criteria: how many devices, what data rate, what distance, which direction. The simplest thing that does the job is the right one.

## Goal of this step

Produce a **justified communication choice** that:

- lists every **exchange** needed, internal and external;
- settles, for the exchanges between chips, on the right **bus** (or on none at all, if everything is wired directly);
- settles, for the link to the outside, on a suitable wired or wireless **link**;
- has been **tested** on at least one link, end to end.

## Method

### 1. List the exchanges

Before choosing a technology, write down **who has to talk to whom**. Tell the **internal** exchanges (between the board and a peripheral chip: a sensor on a bus, a display, a memory) apart from the **external** ones (to a PC, a phone, another system, a network). For each of them, note the **data** exchanged, the **data rate** needed, the **distance** and how many **devices** take part. This map of the exchanges is what will tell you which buses and which link you actually need, and often that you need fewer than you thought.

> [!example] Example: 3-axis arm project
> Stocktaking of the arm's exchanges: the three angle sensors are **analog** (read directly by the converter, no bus), the three drivers receive **PWM and logic** signals directly, the limit switches are **logic inputs**. No exchange between chips at all, so there is **no internal bus** to choose. One exchange is left: receiving the operator's commands and sending the status back.
>
> **Output**: zero internal buses, one external link (the operator). For this project the step comes down to that single link, a direct illustration of how optional buses are.

> [!livrable] Deliverable 1/3 — Map of the exchanges
> - The list of internal and external exchanges, with data, data rate, distance and number of devices

### 2. Choose the internal buses

For each exchange **between chips**, choose the bus against the criteria you listed. **[[i2c-en|I²C]]** links several components with two wires at a moderate data rate, ideal for a few sensors and a display. **[[spi-en|SPI]]** is faster but wants more wires, for a memory or a demanding screen. **[[uart-en|UART]]** is a plain point-to-point serial link. The [[bus-de-communication-en|communication buses]] page covers how they work and where they stop. Often the bus is in fact **forced on you by the component** you settled on when [[choisir-le-materiel-en|choosing the hardware]]: a sensor sold as I²C gets wired as I²C. Your choice then comes down to checking compatibility and organising how the bus is shared. If there is no exchange between chips, this step is empty. That is a valid result, not an oversight.

> [!warning] Watch out
> **Piling up buses, or picking one out of reflex, complicates the system without serving it.** A bus is justified by a real exchange and by its criteria (devices, data rate, distance), not by its presence on the board. Three analog sensors read directly need no bus. A display added later will, on the other hand, go naturally onto the I²C that is already there.

> [!example] Example: 3-axis arm project
> The arm has no exchange between chips: no internal bus. As a counter-example, if you added a **status display** and a digital torque sensor, both would go onto the same **I²C** bus (two shared wires, plenty of data rate) rather than being wired separately.
>
> **Output**: no internal bus for the arm as it stands. I²C would be the default choice if digital components were added.

> [!livrable] Deliverable 2/3 — Internal buses chosen
> - For each exchange between chips, the bus chosen and why (or an explicit "no bus needed")

### 3. Choose the external link

For the link to the outside — an operator PC, a phone, a network — choose between **wired** and **wireless**. Wired (USB serial) is simple, reliable and sometimes powers the board, but it ties the system down. Wireless opens up mobility: **[[wifi-en|Wi-Fi]]** for a high data rate and an existing network, **[[ble-en|BLE]]** for small, frugal exchanges, **[[zigbee-en|Zigbee]]** for a mesh of sensors, **[[lora-en|LoRa]]** for long range at a very low data rate. The [[techno-sans-fil-en|wireless technologies]] page helps you weigh them up. Keep in mind that a **serial console** link (USB) stays useful for debugging almost whatever operator link you settle on.

To find your way, the criteria that separate them are **range**, **data rate**, **power draw** and **the infrastructure available**:

| The question to ask yourself | Typical answer |
|---|---|
| Does the system stay within cable reach while in use? | **Wired (USB serial)** — simple and reliable |
| Mobility or distance, comfortable data rate, a network already there? | **Wi-Fi** |
| Small messages to a phone, tight battery budget? | **BLE** |
| Many sensors to mesh across a building? | **Zigbee** |
| Kilometres of range, a few bytes an hour? | **LoRa** |

Before you freeze the choice, **test the link end to end** — a command one way, a status back: ten minutes that save you from finding out late that a range, a data rate or a pairing does not hold. Full qualification comes later, with the test protocol of [[fiabiliser-et-deboguer-en|step 6]].

> [!tip] Tip
> **Wireless is tempting, but it has a cost: power draw, reliability, security.** If the system stays within cable reach while in use, a wired link is often safer and simpler. Keep wireless for the cases where mobility or distance really call for it.

> [!example] Example: 3-axis arm project
> The operator has to be able to drive the arm from a distance, so the link chosen is **Wi-Fi** (built into the ESP32, with far more data rate than commands and status feedback need). Alongside it, the **USB serial console** stays plugged in while the firmware is being brought up, to watch what it does.
>
> **Output**: an operator link over Wi-Fi, checked with a command-and-status round trip, and a serial console for debugging. That is the arm's only real "communication".

> [!livrable] Deliverable 3/3 — External link chosen
> - The technology chosen for the external link (wired or wireless), justified and tested end to end, and the debugging link kept alongside

## Wrap-up

Your communications are settled: the exchanges are listed, the internal buses chosen (or ruled out for good reason), the external link chosen and tested. What follows is **hardening** the whole thing at [[fiabiliser-et-deboguer-en|step 6]]. The communication choices go into the [[dossier-technique-en|technical design file]] of the V-model.

---

## Common pitfalls

**Adding communication because it happens to be there.** A bus or a link is justified by a real exchange, not by its presence on the board. The simplest thing that does the job is the right one.

**Reaching for wireless out of reflex.** When a cable is enough for the way the system is used, wired is simpler, more reliable and often safer. Wireless earns its place through mobility or distance.

**Ignoring the number of devices, the data rate and the distance.** Those three criteria decide the bus. Skipping them means picking at random between I²C, SPI and UART.

**Forgetting the console link.** A serial debugging link stays useful during bring-up almost every time, even when the operator link is wireless.

**Taking a wireless link's robustness for granted.** A radio link drops out, gets jammed, can be listened to. A system that depends on one has to plan for the link being lost and, if the data is sensitive, for protecting it.

## What belongs elsewhere

**Running the step belongs to the V-model.** The communication choices appear in the [[dossier-technique-en|technical design file]]. This page produces the artefact, the V-model puts it into the project.

*Link security* (encryption, integrity, authentication), as soon as the data exchanged is sensitive, is one dimension of [[securite-et-qualite-en|safety and quality]], arbitrated at project level.

*The application protocol*, the format of the commands and statuses exchanged on top of the link, belongs to the firmware and to the engineer-level material of your family.

## See also

- [[en/embarque/index|Building the embedded subsystem]]
- Previous step: [[programmer-l-embarque-en|Programming]]
- Next step: [[fiabiliser-et-deboguer-en|Hardening and debugging]]
- [[bus-de-communication-en|Communication buses]] — [[uart-en|UART]], [[i2c-en|I²C]], [[spi-en|SPI]]
- [[techno-sans-fil-en|Wireless technologies]] — [[wifi-en|Wi-Fi]], [[ble-en|BLE]], [[zigbee-en|Zigbee]], [[lora-en|LoRa]]
- [[dossier-technique-en|Technical design file]] *(project management, V-model)*
- [[securite-et-qualite-en|Safety and quality]] *(cross-cutting)*
