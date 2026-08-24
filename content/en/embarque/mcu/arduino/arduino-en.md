---
title: Arduino
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
source_fr: embarque/mcu/arduino/arduino.md
source_sha256: f81600a4c0bf58f7ae1097bec28b32c612803510924ffaee0174b33672c3537a
---

**Arduino** is an open-source electronics prototyping platform: a family of microcontroller boards paired with a development environment ([[ide-en|IDE]]) and a vast ecosystem of [[bibliotheque-en|libraries]] and [[shield-en|shields]], designed to make embedded electronics approachable. This page is **the hub that gathers every tutorial related to Arduino**: board overview, ecosystem, and usage tutorials sorted by difficulty. The generic overview of microcontroller families and the selection guide stay with [[microcontroleur-en|microcontroller]].

## Tutorials

The tutorials of the Arduino module, **in the recommended order**: from the first blinking LED up to engineer level. Most of them apply a cross-cutting concept to Arduino, defined once for all the families. The entries marked *(cross-cutting)* are those shared pages of the skeleton, the rest is specific to Arduino.

**Where to start?** With [[arduino-prise-en-main-en|getting started]]: install the IDE and blink a first LED on real hardware. The rest can be followed in order, or picked out as the project needs it.

### Getting started

- [[arduino-prise-en-main-en|Getting started with Arduino]] — install the IDE, write and upload a first program;
- [[tinkercad-en|Tinkercad]] — simulate a circuit online, before touching hardware.

### Learning the basics

- [[cpp-en|The C++ language]] *(cross-cutting)* — the basics of the language;
- [[niveaux-de-tension-en|Logic levels]] *(cross-cutting)* — 3.3 V vs 5 V, and not frying a board;
- [[arduino-gpio-en|Configuring the GPIO]] — `INPUT` / `OUTPUT` / `INPUT_PULLUP` modes;
- [[arduino-serie-en|Serial monitor]] — read from and write to the serial port;
- [[arduino-entree-tor-en|Reading an on/off input]] — button or switch, plus debouncing;
- [[arduino-sortie-tor-en|Driving an on/off output]] — LED, relay;
- [[arduino-capteur-numerique-en|Reading a digital sensor]];
- [[arduino-capteur-analogique-en|Reading an analog sensor]] — through the ADC;
- [[arduino-sortie-pwm-en|Driving a PWM output]];
- [[arduino-temporisation-en|Timing delays]] — `delay()` vs `millis()`;
- [[arduino-bibliotheques-en|Using a library]] — install it, include it, read its docs;
- [[lire-une-datasheet-en|Reading a datasheet]] *(cross-cutting)* — finding Vin, logic levels and maximum current there, when the time comes to wire a component;
- [[arduino-module-en|Wiring a module]] · [[arduino-shield-en|Using a shield]];
- [[arduino-alimentation-en|Powering the board]] — USB / Vin / barrel jack, voltage range, maximum current.

### Advanced topics

- Communication, by protocol: [[arduino-uart-en|UART]] · [[arduino-i2c-en|I2C]] · [[arduino-spi-en|SPI]] *(cross-cutting concept pages: [[bus-de-communication-en|communication buses]])*;
- [[arduino-debug-en|Debugging a program]];
- [[arduino-gpio-boot-en|GPIO state at power-up]] — default levels, sensitive pins;
- Actuators: [[arduino-servomoteur-en|servo]] · [[arduino-moteur-cc-en|DC motor (H-bridge)]] · [[arduino-moteur-pas-a-pas-en|stepper motor]];
- [[arduino-afficheur-en|LCD / OLED display]];
- [[arduino-programmation-non-bloquante-en|Non-blocking programming]] — getting out of the blocking `delay()`, a prerequisite for the state machine;
- [[arduino-machine-a-etats-en|State machines on Arduino]] *(→ concept page [[machine-a-etats-en|State machine]])*;
- [[arduino-eeprom-en|EEPROM storage]];
- Filtering measurements *(optional)*.

### Engineer level

- [[arduino-interruptions-en|Interrupts]] *(→ concept page [[interruption-en|Interrupt]])*;
- [[arduino-timers-en|Hardware timers]] *(→ concept page [[timer-en|Timer]])*;
- [[manipulation-de-bits-en|Bit manipulation]] *(cross-cutting)* — registers, masks, low-level access;
- [[arduino-deep-sleep-en|Deep sleep]] *(→ concept page [[deep-sleep-en|Deep sleep]])*;
- [[arduino-pid-en|PID control]] — the control loop;
- [[arduino-memoire-en|Memory management]] *(→ concept page [[memoire-en|Memory]])* — RAM, PROGMEM;
- [[arduino-watchdog-en|Watchdog]] — firmware robustness.

Multitasking (FreeRTOS) is covered on the ESP32 module side and in [[firmware-en|Firmware]]. More tutorials will fill in these levels as projects come along.

## Why Arduino?

Arduino occupies a **niche of accessibility** rather than a niche of performance. Its strengths do not come from the specs of the chip, but from everything around it:

- a **huge community** and documentation in abundance — for almost any sensor or module, a tutorial and a library already exist;
- a **shield ecosystem** (stackable expansion boards) that add functions without any soldering;
- **5 V tolerance** on the I/O, compatible with a large pool of sensors and modules;
- a **gentle learning curve**, ideal for a first step into embedded work.

It is therefore the default choice for learning, prototyping fast and proving a principle. Its limits show on the 8-bit boards (Uno R3, Mega, Nano): 2 kB of RAM on the Uno R3, no floating-point unit (`float` values are emulated, and therefore slow) and no native USB. When the project calls for **wireless** (Wi-Fi, Bluetooth), **battery life** or **raw performance**, another family is often the right answer. The decision is made with the selection guide on the [[microcontroleur-en|microcontroller]] hub. Worth noting: apart from the Uno R4 WiFi, none of the boards in this overview carries a radio. For a connected object, look towards the [[esp32-en|ESP32]].

## Board overview

Three boards cover most of what a school project needs. The rest of the range (Leonardo, Due, Giga, Nano variants) is chosen case by case.

![Arduino Uno R3 board seen from above|420](/ressources/img/arduino/uno-photo.webp)

*The Arduino Uno R3 board — the reference board of the overview.*

![Pinout of the Arduino Uno R3|600](/ressources/img/arduino/uno-pinout.webp)

*Pinout of the Arduino Uno R3: digital pins, analog pins, power and buses.*

| Board | MCU | Flash / RAM | I/O (dig. / ana. / PWM) | Notable feature | Typical use case |
| --- | --- | --- | --- | --- | --- |
| Uno (R3 / R4) | R3: ATmega328P (8-bit AVR, 16 MHz) · R4: Renesas RA4M1 (ARM Cortex-M4, 48 MHz) | R3: 32 kB / 2 kB · R4: 256 kB / 32 kB | 14 / 6 / 6 | reference board, shield form factor; R4: USB-C, DAC, CAN bus, *WiFi* variant (ESP32-S3 + 12×8 LED matrix) | learning, project baseline |
| Mega 2560 | ATmega2560 (8-bit AVR, 16 MHz) | 256 kB / 8 kB | 54 / 16 / 15 | large I/O count | I/O-heavy projects (3D printers, for example) |
| Nano | ATmega328P (8-bit AVR, 16 MHz) | 32 kB / 2 kB | 14 / 8 / 6 | compact breadboard form factor | compact final integration |

*Moving from the Uno R3 (8-bit) to the Uno R4 (32-bit ARM) keeps the same form factor and the 5 V shield compatibility, while multiplying memory and compute power. It is a clear example of moving up a range without breaking the ecosystem.*

## Ecosystem

The reference environment is the **Arduino IDE**, which recognises the boards without any extra driver. For more structured projects, PlatformIO or the Arduino CLI offer a more powerful build chain. The language is [[cpp-en|C++]] **with a layer of helpers on top** (the Wiring dialect), built around two [[fonction-informatique-en|functions]]: `setup()`, which runs once at start-up, and `loop()`, which repeats indefinitely. The built-in library manager gives access, in a few clicks, to thousands of sensor and module drivers.

This ecosystem reaches beyond Arduino hardware alone: the same development framework also programs the [[esp32-en|ESP32]] (through the Arduino core) and many other boards. One boundary is worth keeping in mind. This block describes the **tooling** specific to Arduino, not the way embedded code is structured, which belongs to [[firmware-en|Firmware]].

## See also

- [[microcontroleur-en|Microcontroller]] — parent hub: overview of the families and selection guide
- [[esp32-en|ESP32]] — neighbouring family, programmable through the same Arduino framework ([[esp32-arduino-core-en|Programming the ESP32 with the Arduino core]])
- [[firmware-en|Firmware]] — how embedded code is structured (cross-cutting)
- [[bus-de-communication-en|Communication buses]] — UART / I2C / SPI
