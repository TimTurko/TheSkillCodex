---
title: Using a shield or expansion board
type: tuto
phases:
  - concept
  - preuve-de-concept
  - dossier-technique
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-shield.md
source_sha256: d29aaea902375bf2912573a87fbddce223a0b1304b06a02e191c1390104966ac
---

On Arduino, a **shield** is an expansion board that stacks on top of the main board, following the Uno form factor. The Pico **does not follow that standard**: it has a pinout of its own (40 pins), and its expansion ecosystem takes two shapes — **carrier boards** you plug the Pico into, and **expansion boards, packs and HATs** designed around its pinout. The logic is still the shield's: a board dedicated to one function, which **takes over a specific set of pins** that you have to know about to avoid conflicts. Where a [[micropython-module-en|module]] connects with Dupont wires, an expansion board *clips on* — no wiring at all.

## What is it for?

It is the fast route to adding a substantial function without a wiring study: a **carrier board** (Maker Pi Pico, Pico Breadboard Kit and the like) brings the Pico's pins out to terminal blocks and adds buttons, LEDs, a buzzer, an SD card reader. A **pack** (display, sensors, relays) plugs straight onto the pin row. Three things it brings: time saved, mechanical robustness (a rigid plug-in), and wiring that is already documented. The limit is the same as with the Arduino shield: the board keeps its pins to itself.

## Step by step

Four steps: identify which pins are taken, plug it in, power it, install the library.

### 1. Identify the pins that are taken

Every expansion board uses **specific GPxx pins**. To find out which: the **official documentation** (worth reading before committing to a board and before wiring anything else), the board's **silkscreen**, or a test where you plug it in and spot which pins get used. This is the step that avoids conflicts: if a display board uses SPI on certain pins, those pins are no longer free for anything else.

### 2. Plug the board in

A mechanical operation: line the Pico (or the expansion board) up with the connector, and push gently until it is seated. Points to watch: **line it up before pushing** (a bent pin goes into the wrong hole); **get the orientation right** (the USB marker, pin 1); **never plug or unplug it while powered** (unplug the USB first).

### 3. Power the whole thing

- **Low-power expansion** (display, sensors) — the Pico's USB is enough.
- **Expansion with actuators** (relays, motors) — a **separate supply for the load** (through the carrier board's terminal block), with GND shared with the Pico. See [[micropython-alimentation-en|powering the board]].

### 4. Install the library

Most expansion boards come with a dedicated library, often supplied by the maker (Pimoroni, for instance). See [[micropython-bibliotheques-en|using a library]]. Once it is on the board, you drive each function through the **documented GPxx pins**:

```python
from machine import Pin
# Illustration only: the board's documentation gives the GP for each function
buzzer = Pin(18, Pin.OUT)     # replace this GP with the one on your board
buzzer.on()
```

## Pitfalls

**A pin conflict.** Two expansions that want the same GP pins cannot live together. Read the pinouts before combining them.

**A shared SPI or I2C bus.** Several peripherals on the same bus share the pins, but they need **distinct `CS` lines or addresses**. Otherwise they answer at the same time and the communication is corrupted.

**An under-powered board.** An expansion with actuators drawing its current over USB makes the Pico reboot. An external supply as soon as there is any power involved.

**The 3.3 V pinout.** An expansion board designed for 5 V logic (rare, but it happens through Arduino adapters) has to be 3.3 V compatible — otherwise a level shifter ([[niveaux-de-tension-en|logic levels]]).

**Hot plugging.** Plugging or unplugging under power can destroy pins through a transient short. Always unplug the USB first.

## Special case — Arduino shields on a Pico, and a home-made carrier board

- **Reusing an Arduino shield** on a Pico calls for an **adapter board** (Pico-to-Uno) that remaps the pins. It works, but the code has to point at the right GP pins, and 3.3 V compatibility has to be checked.
- **A home-made carrier board** — a piece of perfboard or a simple PCB that takes the Pico and routes a few discrete components: the middle step between the breadboard (which comes apart) and a dedicated PCB, and a final demonstrator far more convincing than a breadboard build.

## Where it fits in the project

- **Step 4 of the [[concept-en|concept phase]]** — an available carrier or expansion board can accelerate the PoC ("take this board and save time").
- **Step 2 of the [[preuve-de-concept-en|proof of concept phase]]** — plug the expansion in and test it on its own before integration.
- **Step 4 of the [[dossier-technique-en|technical design file phase]]** — the "carrier board" versus "dedicated PCB" decision, on robustness, lead time and reproducibility.

A well-chosen expansion board is a clear gain in PoC time and in robustness. Piling up expansions with incompatible pinouts, on the other hand, is a trap that gets paid for over time.

## See also

- [[micropython-en|MicroPython]] — the module hub
- [[micropython-module-en|Wiring a module]] — the non-plug-in alternative (Dupont wires)
- [[micropython-alimentation-en|Powering the board]] — sizing the supply with an expansion fitted
- [[shield-en|Shield]] — the cross-cutting concept page
- [[arduino-shield-en|Using a shield (Arduino)]] — the stackable Uno standard, worth comparing
