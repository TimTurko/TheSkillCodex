---
title: PIC
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa: []
phases:
  - concept
draft: false
source_fr: embarque/mcu/pic.md
source_sha256: 0cf2cb822ffb3ecc777ccf8fdc7586c05f271bea80b53afab0552bfc8bfa33dc
---

The **PIC** family are microcontrollers designed by **Microchip**, for a long time among the most widespread in the world, programmed in C with the **MPLAB X** IDE and the **XC** compilers. It is a **classic of embedded work**, still very much present in industry and in teaching thanks to its enormous installed base, but **in decline for new designs**, displaced by the [[stm32-en|STM32]] (and by ARM Cortex-M parts in general) on the industrial side, and by the [[arduino-en|Arduino]] in a school setting. This page **places it in the landscape**. It does not teach it (see below for why).

## A classic in decline

For decades the PIC was a default choice in embedded work, above all in its **8-bit** versions (PIC16, PIC18): robust, available in very large volumes, thoroughly documented, with a mature industrial ecosystem. It is still found in countless products.

Two shifts have nonetheless pushed it to the margins for new projects:

- **in industry**, the **ARM Cortex-M** parts (the STM32 leading the way) offer more performance and more peripherals in the same package, modern tooling and a unified ecosystem, which has moved the majority of new designs across to them;
- **in school**, the **Arduino** (and the ESP32) wins on accessibility: immediate hands-on start, an enormous community, libraries in abundance, and no dedicated programmer to plan for.

## What it is, technically

The PIC spans several families according to core width: **8-bit** (PIC10/12/16/18), **16-bit** (PIC24, and dsPIC for signal processing) and **32-bit** (PIC32). They are programmed **in C** in **MPLAB X** with the matching **XC** compiler (XC8/XC16/XC32), and flashed with a Microchip **programmer** (the *PICkit* range). Unlike the [[esp32-en|ESP32]], the [[teensy-en|Teensy]] or the [[stm32-en|STM32]] (through STM32duino), the PIC **has no native Arduino core** in common use. The ecosystem stays Microchip's own.

A detail that lights up the landscape: **Microchip bought Atmel in 2016**. The PIC and the **AVR** that sits in the Arduino Uno have therefore come from the same manufacturer for about ten years, two historically competing families now maintained under the same roof.

## Where you still meet it

- **Maintaining existing systems** (*legacy*) — a great deal of equipment in service runs on PIC parts;
- **Very large-volume production** — where a stable part number and long-term availability come first;
- **Skills already in place** — a team trained on MPLAB may stay with PIC out of continuity.

## For your projects

This wiki **does not cover the PIC as a module**: your school projects will lean on the [[arduino-en|Arduino]] (accessibility) or the [[stm32-en|STM32]] (performance, closeness to industry). Knowing that the PIC exists is enough to **read the landscape** — to know that an older product may contain one, and to understand why the choice goes elsewhere today. Choosing a family for a project is done from the [[microcontroleur-en|microcontroller]] hub, through a [[matrice-de-decision-en|decision matrix]].

## See also

- [[microcontroleur-en|Microcontroller]] — parent hub: overview of the families and selection guide
- [[stm32-en|STM32]] — what took the PIC's place in industry (ARM Cortex-M)
- [[arduino-en|Arduino]] — what replaced it in a school setting
- [[matrice-de-decision-en|Decision matrix]] — the tool for choosing a controller during concept
