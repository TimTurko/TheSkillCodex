---
title: Getting started with MicroPython
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-prise-en-main.md
source_sha256: 79e3311fe6569535a1e98d8887acd4fd3b709b21365f4d02da78ef193fa124f7
---

**Getting started with MicroPython** means installing the **Thonny** editor, dropping the MicroPython firmware onto the board **once** (a Raspberry Pi Pico 2 here), then running a first program. The difference with [[arduino-prise-en-main-en|Arduino]] runs deep: you do not compile a binary every time, you install an **interpreter** on the board, after which you send it Python — from the keyboard in the [[micropython-repl-en|REPL]], or as `.py` files. The target program is still **Blink**, the embedded equivalent of "Hello World".

## What is it for?

Getting started validates the whole chain: editor, firmware on the board, USB link, REPL. If one link is missing, Blink does not blink, and you find out straight away, on trivial code.

Beyond that first program, it installs two habits specific to MicroPython:

- **The REPL as a sandbox.** Once the firmware is in place, you can type a command (`led.on()`) and see the effect **immediately**, without uploading anything. This is the main strength of the scripted approach when exploring a sensor or a module.
- **The "files on the board" model.** A MicroPython program is a `.py` file saved on the board. The file named `main.py` runs **by itself at power-up**. The board becomes standalone, with no computer attached.

## Step by step

Five steps: install Thonny, flash the firmware, connect, write code (first in the REPL, then as a file), make it standalone.

### 1. Install Thonny

Download **Thonny** from `thonny.org` and install it (Windows / macOS / Linux). It is the reference beginner IDE for MicroPython: it can flash the firmware, it opens the REPL, and it manages the files on the board.

Take a screenshot of *the Thonny download page on thonny.org, with the links per operating system*.

### 2. Flash the MicroPython firmware onto the Pico 2

This is the step specific to MicroPython, and it is done **once** per board. The simplest route goes through Thonny:

- plug in the Pico 2, then, at the bottom right of Thonny, click the interpreter selector → **"Installer MicroPython…"** (Install MicroPython…), or *Outils → Options → Interpréteur* (Tools → Options → Interpreter);
- pick the **Raspberry Pi Pico / Pico 2** variant and follow the prompt: Thonny asks you to **hold the BOOTSEL button** while plugging the board back in, then installs the firmware.

> [!tip]
> **Manual method (without Thonny).** Hold the Pico's **BOOTSEL** button **down while plugging in the USB cable**: the board shows up as a **USB drive** named `RP2350` (or `RPI-RP2`). Drag the Pico 2 firmware `.uf2` file onto it, downloaded from `micropython.org` (*Download* section, Pico 2 board) or `raspberrypi.com`. The board reboots running MicroPython.

Take a screenshot of *the "Installer MicroPython" dialog in Thonny, with the Raspberry Pi Pico 2 variant selected*.

### 3. Connect to the board (the REPL)

In *Outils → Options → Interpréteur* (Tools → Options → Interpreter), pick **MicroPython (Raspberry Pi Pico)** and the board's **port**. At the bottom of Thonny, the **Shell** panel shows the REPL prompt:

```
>>>
```

This is the interpreter **running on the Pico**. Type this to check:

```python
>>> print("Hello from the Pico")
Hello from the Pico
```

Take a screenshot of *Thonny with the interpreter set to "MicroPython (Raspberry Pi Pico)" and the Shell showing the prompt and then the result of a print*.

### 4. Turn the LED on… in the REPL, then as a program

First **live**, one line at a time. This is where the scripted approach shines:

```python
>>> from machine import Pin
>>> led = Pin("LED", Pin.OUT)   # on-board LED (GP25 on Pico 2; "LED" works on Pico 2 W too)
>>> led.on()                    # the LED comes on IMMEDIATELY
>>> led.off()
```

Then **Blink** as a program. In the Thonny editor, type:

```python
from machine import Pin
from time import sleep

led = Pin("LED", Pin.OUT)

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

Note the difference with Arduino: **no `setup()`/`loop()`**, just code that runs top to bottom, and a `while True:` loop to repeat. Blocks are delimited by **indentation**, not by braces (see [[micropython-langage-en|the language]]).

Click **Exécuter** (Run, the green button): Thonny sends the script to the Pico and starts it. The LED blinks. **The program is running. Getting started is validated.** To stop it, use the **Stop** button (red), or `Ctrl-C` in the Shell.

If nothing blinks, go back over the interpreter choice in step 3, then see *Pitfalls*.

### 5. Make the board standalone (`main.py`)

As long as the script is launched from Thonny, it stops when you unplug. For it to run **on its own at power-up**, save it **on the board** under the name **`main.py`** (*Fichier → Enregistrer sous… → Raspberry Pi Pico*, that is File → Save as… → Raspberry Pi Pico). Unplug and plug back in: the LED blinks with no computer.

Take a screenshot of *the "Enregistrer sous" dialog in Thonny offering "Raspberry Pi Pico" as a destination, with the file named main.py*.

## Example — Blink, modified

To check that you really control the behaviour, change the rhythm:

```python
from machine import Pin
from time import sleep

led = Pin("LED", Pin.OUT)

while True:
    led.on()
    sleep(0.1)    # short flash
    led.off()
    sleep(0.9)
```

Run it again: a short flash every second. That **small step** — edit, run again, observe — is the basic move of every tutorial that follows. (You can also try `led.toggle()` in the REPL to flip the state in one go.)

## Pitfalls

**Interpreter left on the PC.** If Thonny points at the *local Python* (and not at MicroPython (Raspberry Pi Pico)), the code runs on the computer instead of on the board, and `from machine import Pin` fails. Check the interpreter at the bottom right.

**Firmware not installed.** Without step 2, the board is not a MicroPython interpreter: Thonny will not connect to it. BOOTSEL is only there to **flash the firmware**, not for every run.

**A script launched from Thonny is not standalone.** A program run by Thonny stops when you unplug. For it to stand alone, save it **on the board** as `main.py` (step 5).

**An infinite loop that "locks up" the board.** A `while True:` keeps the interpreter busy: to get the REPL back, use **Stop** or `Ctrl-C`. If `main.py` loops from boot and blocks any connection, plug back in with **BOOTSEL** held and re-flash (or delete `main.py`).

**The 5 V reflex.** The Pico 2 runs at **3.3 V and is not 5 V tolerant**: do not apply 5 V to a pin (see [[niveaux-de-tension-en|logic levels]]).

**A "charge only" cable.** Board powered but no port showing: swap it for a data cable.

## Special case — Other editors and other boards

- **Command line** — `mpremote` (the official one) and `rshell` drive the board and copy files from a terminal, handy for scripting or for continuous integration.
- **VS Code** — the *MicroPico* extension (or *Pico-W-Go*) brings the REPL and file transfer into VS Code, for a more structured project.
- **Other boards** — the same Thonny plus the matching firmware will program an [[esp32-en|ESP32]] or a Pyboard in MicroPython. Only the firmware and a few pins change.

## Where it fits in the project

- **Step 4 of the [[preuve-de-concept-en|proof of concept phase]]** — flashing the firmware and running a first program is the founding act of the software PoC in MicroPython. Until Blink blinks, nothing downstream is credible.
- **Every MicroPython tutorial downstream** — do Blink (and try the REPL) at least once, on the target hardware, as early as you can.

The REPL changes the way you debug: before writing a whole program, you **test one line** on the board. Picking up that habit right from the start saves a great deal of time across the rest of the module.

## Going further

- [Documentation MicroPython pour le Pico (Raspberry Pi)](https://www.raspberrypi.com/documentation/microcontrollers/micropython.html) — installation, examples.
- [[micropython-langage-en|The MicroPython language]] — after the first blink, the building blocks of the language.
- [[micropython-simulation-en|Simulating with Wokwi]] — try it without hardware.

## See also

- [[micropython-en|MicroPython]] — the module hub
- [[micropython-langage-en|The MicroPython language]] — the basics of the language, to follow straight after
- [[micropython-repl-en|The REPL]] — the interactive shell met here, in detail
- [[arduino-prise-en-main-en|Getting started with Arduino]] — the compiled C++ equivalent (for contrast)
- [[niveaux-de-tension-en|Logic levels]] — the Pico 2 runs at 3.3 V and is not 5 V tolerant
