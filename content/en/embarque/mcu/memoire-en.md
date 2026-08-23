---
title: Memory
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa: []
phases: []
draft: true
source_fr: embarque/mcu/memoire.md
source_sha256: cadc21fa387b1ddacc431b8aa07d54d16d26a1cddcad4f91d52536a322e60099
---

The **memory** of a [[microcontroleur-en|microcontroller]] splits into two roles. **Flash** keeps the **program** even with the power off, and it is what gets written at upload time. **RAM** is the **working** memory, fast but **volatile**. Its contents vanish the moment power is cut. The size of each bounds what can be written (Flash) and what can be juggled while the program runs (RAM).

## In practice

The orders of magnitude speak for themselves: an Uno board offers 32 kB of Flash and **2 kB of RAM**, an ESP32 4 MB and 520 kB. RAM is the **scarce resource** of embedded work. It is the one that runs out first *(what to do when it does: [[arduino-memoire-en|Managing memory on Arduino]] for Arduino, [[micropython-memoire-en|Managing memory in MicroPython]] for MicroPython)*. A third area remains. For a **piece of data** (a usage counter, a calibration, a setting) to survive a power cut the way the program does, the microcontroller sets aside an **EEPROM** or a dedicated slice of Flash, described in [[arduino-eeprom-en|EEPROM storage on Arduino]] for Arduino and [[micropython-stockage-en|Persistent storage, files and EEPROM]] for MicroPython.

## See also

- [[microcontroleur-en|Microcontroller]] — the chip that carries the memory
- [[processeur-en|Processor]] — the unit that reads the program from Flash and works in RAM
- [[arduino-memoire-en|Managing memory (Arduino)]] — when RAM starts running short
- [[micropython-memoire-en|Managing memory (MicroPython)]] — the same constraint for MicroPython
- [[arduino-eeprom-en|EEPROM (Arduino)]] and [[micropython-stockage-en|Storage (MicroPython)]] — saving data with the power off
