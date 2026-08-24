---
title: The REPL
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-repl.md
source_sha256: 02e962e7f0f675d959efd96b9405a1f5f0066438cf44fb592bf3f85881ece045
---

The **REPL** (*Read-Eval-Print Loop*) is the **interactive shell** of MicroPython, an interpreter that runs **on the board** and executes each line as soon as you type it. It is the *Shell* panel of Thonny, with its `>>>` prompt. This is the great advantage of a scripted approach: before writing a whole program, you **test one line** and see the effect **straight away**, which is ideal for exploring a sensor, checking a connection, or inspecting a value.

## Read–evaluate–print

You type, MicroPython executes, and **prints the result** of an expression:

```python
>>> 2 + 3
5
>>> "Pico" * 2
'PicoPico'
```

An **assignment** returns nothing (so nothing is displayed), but the variable exists afterwards:

```python
>>> x = 10
>>> x * 2
20
```

And above all, you **act on the hardware live**:

```python
>>> from machine import Pin
>>> led = Pin("LED", Pin.OUT)
>>> led.on()          # the LED lights up right away
>>> led.value()       # read back its state
1
```

## Typing several lines

When a line opens a block (it ends with `:`), the REPL switches to the continuation prompt `...` and waits for the **indented** body. An empty line closes the block:

```python
>>> for i in range(3):
...     print("pass", i)
...
pass 0
pass 1
pass 2
```

## Exploring and taking back control

The REPL is also a tool for **discovery** and for **regaining control**:

- `dir(machine)` lists what a module offers, and `help(Pin)` gives its help text;
- **`Ctrl-C`** interrupts a running program (a `while True:` loop that is spinning, for instance) and hands control back;
- **`Ctrl-D`** performs a *soft reboot*: it restarts the interpreter (and re-runs `main.py`) — handy for starting clean, but **the variables typed at the REPL are wiped in the process**;
- **`Ctrl-E`** opens *paste mode*, to paste a block of several lines without the automatic indentation getting in the way.

The typical workflow: you **tinker at the REPL** until a sequence works, then you **copy it into a** `.py` **file** (see [[micropython-prise-en-main-en|getting started]], `main.py`).

## Plotting a value in Thonny

Thonny ships with a **plotter** (the *Plotter* view, *View → Plotter*) that charts the **numbers printed to the Shell** over time, the equivalent of the Arduino IDE's serial plotter. One numeric value per line, and the curve draws itself, which is handy for watching a sensor evolve or for tuning a threshold without wiring anything extra.

```python
from machine import ADC, Pin
import time

capteur = ADC(Pin(26))           # analogue input (Pico: GP26 = ADC0)

while True:
    valeur = capteur.read_u16()  # 0..65535
    print(valeur)                # one value per line -> one curve
    time.sleep_ms(50)            # ~20 Hz, readable by eye
```

Take a screenshot of *the Thonny Plotter view tracing a value that varies, the curve rippling along as the prints come in*.

To overlay several values, for instance to compare a setpoint with a measurement, print them **on the same line, separated by a space**:

```python
print(consigne, mesure)          # two numbers -> two curves
```

The plotter expects **numbers**, so a line that mixes text and value (`print("sensor", valeur)`) plots badly. To plot, print the number or numbers on their own and keep the annotated `print()` calls for reading in the Shell. Since the plotter reads the Shell, a loop that prints too fast will saturate it, so keep the pace reasonable (`sleep_ms`).

## Pitfalls

**An assignment displays nothing.** `x = 10` returns no value. To see the contents, type `x`. That is normal, not a bug.

**An infinite loop "blocks" the REPL.** As long as a `while True:` is running, the prompt does not come back: `Ctrl-C` to regain control.

**The *soft reboot* wipes the variables.** After `Ctrl-D` (or a disconnect and reconnect), the variables defined at the REPL no longer exist: they have to be redefined. What does persist is the **files** saved on the board.

## Exercises

> [!question] Exercise 1 — Drive and read at the REPL
> At the REPL, light up the built-in LED, read its state, then switch it off and read again. Which method flips the state in one go?

> [!success]- Solution
> ```python
> >>> from machine import Pin
> >>> led = Pin("LED", Pin.OUT)
> >>> led.on()
> >>> led.value()
> 1
> >>> led.off()
> >>> led.value()
> 0
> >>> led.toggle()   # flip the state
> ```
> `toggle()` inverts the current state, which is handy for a blink written on one line.

> [!question] Exercise 2 — Explore a module
> With no documentation in front of you, find out at the REPL what the `time` module contains. Which command? Spot a pause function.

> [!success]- Solution
> ```python
> >>> import time
> >>> dir(time)
> [..., 'sleep', 'sleep_ms', 'sleep_us', 'ticks_ms', 'ticks_us', ...]
> >>> help(time.sleep)
> ```
> `dir()` lists the names in a module. `sleep` (in seconds) and `sleep_ms` (in milliseconds) are the pauses. `dir()` and `help()` are the two reflexes for exploring an unfamiliar library directly on the board.

## See also

- [[micropython-langage-en|The MicroPython language]] — hub of the language path
- [[micropython-prise-en-main-en|Getting started]] — where the REPL first appears
- [[micropython-modules-en|Modules and import]] — `dir()`/`import` to explore and load code
- [[micropython-debug-en|Debugging a program]] — the REPL as a diagnostic tool (cross-cutting)
