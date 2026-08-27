---
title: MicroPython
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
source_fr: embarque/mcu/micropython/micropython.md
source_sha256: ad53ba765fd061a45cd4691c93878e1d055afdb9c1aa966206d22b6f1b9b8203
---

**MicroPython** is a lightweight implementation of **Python 3** that runs directly on a microcontroller. Instead of compiling and then uploading a binary (as in [[cpp-en|C++]]/[[arduino-en|Arduino]]), you install a MicroPython *firmware* on the board **once**, and it then runs a **Python interpreter**: you talk to the board live from the keyboard (the [[micropython-repl-en|REPL]]) and drop `.py` files onto its memory. This is the **scripted** approach to embedded work — readable and immediate. This page is **the hub that gathers every MicroPython tutorial**, organised like the Arduino module, from the first LED up to engineer level. The reference board for this path is the **Raspberry Pi Pico 2**, but MicroPython programs plenty of other boards just as well (see below). The overview of the families and the help in choosing one stay with [[microcontroleur-en|microcontroller]].

## Tutorials

The tutorials of the MicroPython module, **in the recommended order**. Items marked *(cross-cutting)* are shared pages of the skeleton, valid for every family. The rest is specific to MicroPython. The **language** replaces the C++ page here: MicroPython has a learning path of its own.

**Where to start?** With [[micropython-prise-en-main-en|getting started]]: install Thonny, flash the firmware and run a first program on the board. The rest follows in order, or gets picked up as the project needs it.

### Getting started

- [[micropython-prise-en-main-en|Getting started with MicroPython]] — install Thonny, flash the firmware, write and run a first program;
- [[micropython-simulation-en|Simulating with Wokwi]] — test a Pico + MicroPython setup online, before touching hardware.

### Learning the basics

- [[micropython-langage-en|The MicroPython language]] — Python on a microcontroller: a **learning hub** (types, control flow, functions, modules);
- [[niveaux-de-tension-en|Logic levels]] *(cross-cutting)* — **3.3 V**, the Pico 2 is not 5 V tolerant;
- [[micropython-gpio-en|Configuring the GPIO]] — `machine.Pin`, input / output / pull modes;
- Talking back: `print()` and the [[micropython-repl-en|REPL]] — the equivalent of the serial monitor (the interactive shell doubles as a console);
- [[micropython-entree-tor-en|Reading an on/off input]] — button or switch, plus debouncing;
- [[micropython-sortie-tor-en|Driving an on/off output]] — LED, relay;
- [[micropython-capteur-numerique-en|Reading a digital sensor]];
- [[micropython-capteur-analogique-en|Reading an analog sensor]] — through the `ADC`;
- [[micropython-sortie-pwm-en|Driving a PWM output]];
- [[micropython-temporisation-en|Timing delays]] — `time.sleep()` versus `time.ticks_ms()`;
- [[micropython-bibliotheques-en|Using a library]] — `import`, modules, installing with `mip`;
- [[lire-une-datasheet-en|Reading a datasheet]] *(cross-cutting)* — where to find Vin, logic levels and maximum current, at wiring time;
- [[micropython-module-en|Wiring a module]] · [[micropython-shield-en|Using a shield]];
- [[micropython-alimentation-en|Powering the board]] — USB / VSYS, voltage range, maximum current.

### Advanced topics

- Communication, by protocol: [[micropython-uart-en|UART]] · [[micropython-i2c-en|I2C]] · [[micropython-spi-en|SPI]] *(cross-cutting concept pages: [[bus-de-communication-en|communication buses]])*;
- [[micropython-debug-en|Debugging a program]];
- [[micropython-gpio-boot-en|GPIO states at power-up]] — default levels, sensitive pins;
- Actuators: [[micropython-servomoteur-en|servo]] · [[micropython-moteur-cc-en|DC motor (H-bridge)]] · [[micropython-moteur-pas-a-pas-en|stepper motor]];
- [[micropython-afficheur-en|OLED display]];
- [[micropython-programmation-non-bloquante-en|Non-blocking programming]] — getting out of the blocking `sleep()`, a prerequisite for the state machine;
- [[micropython-machine-a-etats-en|State machine]] *(→ concept page [[machine-a-etats-en|State machine]])*;
- [[micropython-stockage-en|Persistent storage]] — files on the flash, or an external EEPROM.

### Engineer level

- [[micropython-interruptions-en|Interrupts]] *(→ concept page [[interruption-en|Interrupt]])*;
- [[micropython-timers-en|Hardware timers]] *(→ concept page [[timer-en|Timer]])* — `machine.Timer`;
- [[manipulation-de-bits-en|Bit manipulation]] *(cross-cutting)* — registers, masks, low-level access;
- [[micropython-deep-sleep-en|Deep sleep]] *(→ concept page [[deep-sleep-en|Deep sleep]])* — `machine.lightsleep` / `deepsleep`;
- [[micropython-pid-en|PID control]] — the control loop;
- [[micropython-memoire-en|Memory management]] *(→ concept page [[memoire-en|Memory]])* — RAM, garbage collector (`gc`);
- [[micropython-watchdog-en|Watchdog]] — `machine.WDT`, firmware robustness.

More tutorials will fill in these levels as projects come along. How embedded code is structured overall stays with [[firmware-en|firmware]].

## Why MicroPython?

![Execution model: compiled approach (C++/Arduino) versus scripted approach (MicroPython)](/ressources/img/micropython/modele-execution.svg)

MicroPython occupies a **niche of readability and fast iteration**, not one of raw performance. What it brings:

- **Python, readable and already familiar** — many students arrive with some Python behind them, and put it straight to work on hardware;
- **no compilation** — edit a file, run it again, see the result, and the try-it cycle is close to instant;
- **the REPL** — an interactive shell runs *on the board*: you try one line (`Pin("LED", Pin.OUT).on()`) and the result is immediate, ideal for exploring a sensor or a module;
- **short code** — dynamic typing and no verbose declarations: a program fits in a handful of lines.

In exchange, MicroPython is **slower and less deterministic** than compiled C++ (the interpreter adds overhead and the garbage collector can introduce pauses), and it leaves **less usable memory**. It is the right choice for **learning, prototyping, scripting** — less so for tight real time or maximum performance, where you go back to [[arduino-en|Arduino]]/C++ or to the [[stm32-en|STM32]]. That decision is made with the help in choosing on the [[microcontroleur-en|microcontroller]] hub.

## Board overview

The reference board here is the **Raspberry Pi Pico 2**, but the table sums up the essentials of the range.

> [!info]
> This table is a **teaching reference**, to be confirmed on `raspberrypi.com` before locking in a choice (part numbers and availability change).

| Board | Chip | Core | Notable feature |
| --- | --- | --- | --- |
| Pico 2 | RP2350 | 2× Cortex-M33 (or 2× RISC-V), 150 MHz | the reference board of this module; more RAM than the Pico 1 |
| Pico 2 W | RP2350 | same | adds **Wi-Fi / Bluetooth** (CYW43 chip) |
| Pico / Pico W | RP2040 | 2× Cortex-M0+, 133 MHz | previous generation, still widespread and compatible |

All of them are programmed **the same way in MicroPython**. The choice comes down to Wi-Fi (the *W* variant) and to processing power (RP2350 versus RP2040). The board exposes a USB connector for power and programming, and a row of **3.3 V GPIO pins**.

## Ecosystem

- **The MicroPython firmware** — a `.uf2` file to install once on the board (see [[micropython-prise-en-main-en|getting started]]). After that, the board *is* a Python interpreter.
- **Thonny** — the reference beginner IDE: it flashes the firmware, opens the REPL, and manages the `.py` files on the board (including `main.py`, which runs at start-up).
- **The REPL and the file system** — you type commands live, and you save your programs as files on the board. This is the heart of the MicroPython model.
- **The modules** — `machine` (hardware access: `Pin`, `ADC`, `PWM`, `I2C`…), `time`, `network` (on Wi-Fi boards)… plus library installation with `mip` (see [[micropython-bibliotheques-en|libraries]]).

**MicroPython is not tied to the Pico alone**: the same language and the same approach program the [[esp32-en|ESP32]], the Pyboard range, and several recent Arduino boards (Nano RP2040, Nano ESP32…). This module is anchored on the Pico 2 because that is the board used in class, but the path carries over. How to **structure** embedded code belongs to [[firmware-en|firmware]], whatever the board.

## See also

- [[microcontroleur-en|Microcontroller]] — parent hub: overview of the families and help in choosing
- [[micropython-langage-en|The MicroPython language]] — the learning path for the language itself
- [[arduino-en|Arduino]] — the compiled approach (C++); same curriculum, opposite paradigm
- [[esp32-en|ESP32]] — another common MicroPython target (and Wi-Fi/BLE)
- [[firmware-en|Firmware]] — structuring embedded code (cross-cutting)
- [[niveaux-de-tension-en|Logic levels]] — 3.3 V logic (the Pico 2 is not 5 V tolerant)
