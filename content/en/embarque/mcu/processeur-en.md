---
title: Processor
lang: en
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa: []
phases: []
draft: false
source_fr: embarque/mcu/processeur.md
source_sha256: 685363407cc3b31545c767a3635e913c4d597e04b827ac0f45588a3af6d73886
---

The **processor** (or core) is the unit that **executes the program** of a [[microcontroleur-en|microcontroller]]: it reads the instructions one by one and applies them. Its width (8, 16 or 32 bits) and its clock frequency give a first idea of its compute power (without summing up on their own the real performance, which also depends on the architecture).

## Reading core names

The names met across the family overview designate **processor architectures**. **ARM Cortex-M** is a range of 32-bit cores that ARM licenses to manufacturers (STM32, Teensy, Uno R4…), graded from the frugal M0 to the powerful M7. **AVR** is the historic 8-bit of the first Arduino boards. **Xtensa** equips the ESP32 and the ESP8266, and **RISC-V** is a royalty-free architecture growing fast (some ESP32-C, Pico 2). A microcontroller can finally carry **several cores** (the ESP32 and the Pico have two) and so run two tasks in parallel.

## See also

- [[microcontroleur-en|Microcontroller]] — the chip that integrates the processor and its peripherals
- [[memoire-en|Memory]] — where the running program and the working data are held
- [[firmware-en|Firmware]] — the program the processor executes
- [[cpp-en|C++]] — the hub of the language that program is written in
- [[cpp-execution-en|How a program runs]] — how written code becomes what the processor executes
