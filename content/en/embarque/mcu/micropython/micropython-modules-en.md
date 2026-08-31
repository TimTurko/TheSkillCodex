---
title: Modules and import
lang: en
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-langage-en
aa: []
draft: false
source_fr: embarque/mcu/micropython/micropython-modules.md
source_sha256: 4721f9f8419f1b9dfdb3c20b6b12d12c57c57fa34f76a5927ac801c70a435b96
---

A **module** is a set of functions and objects that you load with `import` in order to use them. In MicroPython all access to the hardware goes through modules (`machine`, `time`…), and you can also **organise your own code** across several files, each one becoming a module. This page covers the two forms of `import`, the built-in modules worth knowing, your own files, and installing libraries.

## Two ways of importing

```python
import machine                 # imports the whole module
led = machine.Pin("LED", machine.Pin.OUT)
```

or, more briefly, importing only what you need:

```python
from machine import Pin        # imports just Pin
led = Pin("LED", Pin.OUT)
```

The second form is the more common one in examples. Both are equivalent. They differ in the way you **name** things afterwards (`machine.Pin` versus `Pin`).

## The built-in modules worth knowing

MicroPython ships with a subset of the Python library, plus modules of its own for embedded work:

- **`machine`** — access to the hardware: `Pin`, `ADC`, `PWM`, `I2C`, `SPI`, `UART`, `Timer`, `WDT`… the central one of the whole path;
- **`time`** — pauses and timing: `sleep`, `sleep_ms`, `ticks_ms` (see [[micropython-temporisation-en|timing]]);
- **`network`** — Wi-Fi, on the boards that have it (Pico 2 W, ESP32);
- **`math`**, **`random`**, **`json`**, **`os`** — maths, randomness, serialisation, file system.

`dir(machine)` at the [[micropython-repl-en|REPL]] lists what a module offers: it is the reflex for exploring without documentation.

## Organising your code across several files

Any `.py` file saved on the board is **importable** as a module, and its name is the file name without the `.py`. Take a file `outils.py` on the board:

```python
# outils.py
def en_volts(brut):
    return brut * 3.3 / 65535
```

It is used from `main.py` like this:

```python
# main.py
import outils
print(outils.en_volts(32768))
```

That is how you **tidy up** a project as it grows: one file per responsibility, imported into `main.py`.

## Installing a library

For a sensor or a display, a MicroPython library often exists already. Two routes:

- **`mip`** — the MicroPython package manager: from a board connected to the network, `import mip; mip.install("name")` downloads the library. Thonny also offers *Outils → Gérer les paquets*.
- **Manual copy** — download the library's `.py` file and **save it on the board** (as one more file), then import it.

Covered in detail in [[micropython-bibliotheques-en|using a library]].

## Pitfalls

**`import machine` is not `from machine import Pin`.** With the first, you write `machine.Pin`. With the second, `Pin`. Mixing the two names raises a name error.

**The module has to be *on the board*.** `import outils` only works if `outils.py` is saved on the Pico, not merely open in Thonny. Check that it really is among the files on the board.

**Do not overwrite a built-in name.** Calling your file `time.py` or `machine.py` **shadows** the built-in module of the same name, so `import time` would then load your file. Choose distinct names.

**MicroPython does not have the whole Python library.** It is a subset, and some CPython modules are absent or trimmed down. Check at the REPL (`import ...`) before depending on one.

## Exercises

> [!question] Exercise 1 — Two ways of writing the same LED
> Light the LED two ways: first with `import machine`, then with `from machine import Pin`. What changes in the code?

> [!success]- Solution
> ```python
> import machine
> led = machine.Pin("LED", machine.Pin.OUT)
> led.on()
> ```
> ```python
> from machine import Pin
> led = Pin("LED", Pin.OUT)
> led.on()
> ```
> Only the **prefix** changes: `machine.Pin` when you import the whole module, `Pin` when you import that name directly. The behaviour is identical.

> [!question] Exercise 2 — A module of your own
> Create a file `outils.py` on the board holding a function `moyenne(liste)`, then use it from another program.

> [!success]- Solution
> ```python
> # outils.py  (saved ON the board)
> def moyenne(liste):
>     return sum(liste) / len(liste)
> ```
> ```python
> # main.py
> import outils
> print(outils.moyenne([512, 530, 528]))   # 523.33...
> ```
> `outils.py` becomes an importable module because it is **on the board**. Splitting a project into files this way makes it readable and reusable: it is the basis for organising a [[firmware-en|firmware]] as it grows.

## See also

- [[micropython-langage-en|The MicroPython language]] — hub of the language path
- [[micropython-repl-en|The REPL]] — `dir()`/`import` to explore a module
- [[micropython-bibliotheques-en|Using a library]] — installing and including a driver
- [[firmware-en|Firmware]] — structuring a multi-file project (cross-cutting)
