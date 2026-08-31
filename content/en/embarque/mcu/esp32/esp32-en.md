---
title: ESP32
lang: en
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
source_fr: embarque/mcu/esp32/esp32.md
source_sha256: f9336cf579522fb052c541db94d7ea897e816c812d0abc2b6cf06b495246c7fd
---

The **ESP32** is a family of *system-on-chip* microcontrollers from Espressif, which integrate **Wi-Fi and Bluetooth** on the chip and offer far more power and memory than a classic Arduino. They are programmed with the **same framework as the [[arduino-en|Arduino]]** (the [[esp32-arduino-core-en|Arduino core]]) or with **ESP-IDF**, Espressif's native environment. This page is **the hub that gathers the tutorials related to the ESP32**: why this family, its variants, its ecosystem, and the tutorials sorted by difficulty. The general overview of microcontroller families and the selection guide stay with [[microcontroleur-en|microcontroller]].

## Why ESP32?

Where the Arduino aims at accessibility, the ESP32 aims at **connectivity and performance**:

- **built-in Wi-Fi and Bluetooth** — the deciding argument: a connected object with no external radio module;
- **power** — one or two cores up to 240 MHz, far more RAM and Flash, and a native [[systeme-d-exploitation-en|RTOS]] (FreeRTOS) for multitasking;
- **battery life** — a very frugal [[deep-sleep-en|deep sleep]] mode, suited to battery-powered operation.

In exchange, the ESP32 is **less forgiving**: it runs at **3.3 V** (see the warning below), needs a carefully designed power supply (current surges when the radio transmits), and its richness makes it harder to start with. The choice is settled with the selection guide on the [[microcontroleur-en|microcontroller]] hub: for learning, or for simple prototyping without connectivity, the Arduino stays gentler. As soon as **wireless**, **battery life** or **compute power** is needed, the ESP32 is the answer.

## Variant overview

The family has branched out, but a handful of variants cover most needs.

| Variant | Core(s) | Radio | Notable feature |
| --- | --- | --- | --- |
| ESP32 (original) | 2× Xtensa LX6, 240 MHz | Wi-Fi + Bluetooth Classic + BLE | the all-rounder, the most widespread |
| ESP32-S2 | 1× Xtensa LX7 | Wi-Fi only | native USB, no Bluetooth |
| ESP32-S3 | 2× Xtensa LX7 | Wi-Fi + BLE 5 | native USB, AI instructions |
| ESP32-C3 | 1× RISC-V | Wi-Fi + BLE 5 | compact package |
| ESP32-C6 | 1× RISC-V | Wi-Fi 6 + BLE 5 + 802.15.4 | Thread / Zigbee for home automation |
| ESP32-C5 | 1× RISC-V | dual-band Wi-Fi 6 (2.4 + 5 GHz) + BLE 5 + 802.15.4 | the only 5 GHz variant |
| ESP32-H2 | 1× RISC-V | BLE 5 + 802.15.4, no Wi-Fi | Thread / Zigbee, without Wi-Fi |
| ESP32-P4 | 2× high-performance RISC-V | none (pairs with a wireless chip) | compute / multimedia / HMI |

These chips are met on **modules** (WROOM, WROVER), themselves mounted on **development boards** (DevKitC, plus Feather and LOLIN variants…). For a project, an original ESP32 DevKit board is the safe entry point.

Underlying trend: the original ESP32 and the S series rest on **Xtensa** cores, while the recent variants (C, H and P series) move to **RISC-V**. The S3 is the last big Xtensa. For a new project, RISC-V is the direction the ecosystem is taking.

![Positioning map of the ESP32 variants by wireless connectivity and compute power|640](/ressources/img/esp32/positionnement-variantes.svg)

*Placing the variants by connectivity and power. The table above gives the detail.*

## Ecosystem

Two programming paths coexist:

- **Arduino core for ESP32** — the **same API as the Arduino** (`setup()`, `loop()`, `digitalWrite`…), through the [[esp32-arduino-core-en|ESP32 core]] installed in the Arduino [[ide-en|IDE]]. This is the gentlest migration from the Arduino, and the recommended path to start with.
- **[[esp32-idf-en|ESP-IDF]]** — Espressif's **native** framework, built on **FreeRTOS**, which gives full control (multitasking, fine-grained power management, network stack). More demanding, it earns its place on mature projects.

PlatformIO handles both. How the code is **structured** (loop, tasks, states, RTOS) belongs to [[firmware-en|firmware]], whichever path is chosen.

## Watch the voltage

> [!warning]
> **The ESP32 pins run at 3.3 V and do not tolerate 5 V.** Wiring a 5 V sensor or module straight onto an ESP32 input can **destroy the pin**. This is the trickiest difference with the Arduino, which is 5 V tolerant. Any interface with a 5 V signal goes through level shifting (see [[niveaux-de-tension-en|logic levels]]).

## Tutorials

The tutorials of the ESP32 module, sorted by increasing difficulty. As with the Arduino, the entries marked *(cross-cutting)* are shared pages of the skeleton (valid for every family), the rest is specific to the ESP32.

### Getting started

- [[esp32-prise-en-main-en|Getting started with the ESP32]] — install the Arduino core, select the board, upload a first program;
- [[lire-une-datasheet-en|Reading a datasheet]] *(cross-cutting)* — pinout, levels, maximum current.

### Learning the basics

- [[cpp-en|The C++ language]] *(cross-cutting)* — the basics of the language;
- [[niveaux-de-tension-en|Logic levels]] *(cross-cutting)* — **3.3 V**, and not frying a pin;
- [[esp32-gpio-en|Configuring the GPIO]] — usable pins, pins to avoid at boot;
- [[esp32-serie-en|Serial monitor]] — read from and write to the serial port;
- [[esp32-arduino-core-en|Programming with the Arduino core]] — the coding environment, and what changes under the hood.

### Advanced topics

- Connectivity: [[esp32-wifi-en|Wi-Fi]] · [[esp32-ble-en|Bluetooth LE]] — the heart of the family;
- Communication: [[esp32-uart-en|UART]] · [[esp32-i2c-en|I2C]] · [[esp32-spi-en|SPI]] *(cross-cutting concept page: [[bus-de-communication-en|communication buses]])*;
- [[esp32-deep-sleep-en|Deep sleep]] *(→ concept page [[deep-sleep-en|Deep sleep]])* — battery-powered operation.

### Engineer level

- [[esp32-freertos-en|Multitasking with FreeRTOS]] — the ESP32 speciality: several pre-emptive tasks;
- [[esp32-idf-en|Discovering ESP-IDF]] — the native environment, when the need outgrows the Arduino core;
- [[interruption-en|Interrupts]] *(cross-cutting)* · [[timer-en|Timers]] *(cross-cutting)*;
- [[firmware-en|Firmware]] *(cross-cutting)* — structuring an ESP32 firmware, from super-loop to RTOS.

More tutorials will fill in these levels as projects come along.

## See also

- [[microcontroleur-en|Microcontroller]] — parent hub: overview of the families and selection guide
- [[arduino-en|Arduino]] — neighbouring family, programmable through the same framework ([[esp32-arduino-core-en|Programming the ESP32 with the Arduino core]])
- [[firmware-en|Firmware]] — how embedded code is structured, from super-loop to FreeRTOS (cross-cutting)
- [[niveaux-de-tension-en|Logic levels]] — the 3.3 V / 5 V adaptation, essential with the ESP32
- [[bus-de-communication-en|Communication buses]] — UART / I2C / SPI
