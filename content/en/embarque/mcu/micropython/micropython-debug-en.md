---
title: Debugging a MicroPython program
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-repl-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-debug.md
source_sha256: d891672dfdc2af9ae1e405b5145838581ee3ba59ae0fe9491f775920943c5d2d
---

**Debugging a MicroPython program** means working out why a program does not behave as expected, by watching its internal state while it runs. MicroPython has one advantage the Arduino does not: the **[[micropython-repl-en|REPL]]**, which lets you **test a line live** and, when a program crashes, **inspect the variables on the board**. The basic tools: `print()`, the REPL, `try/except`, and the **step-by-step debugger in Thonny**.

## What is it for?

Any project quickly outgrows the point where you can check everything by eye. Typical cases: the program **hangs** without your knowing where, a **sensor reading is nonsense** (the reading? the conversion? the display?), a **random behaviour** you cannot reproduce, a **function returns a strange value**. The discipline of debugging, *observe before you change*, is what separates a quick fix from a whole night of blind edits.

## Step by step

Four steps: well-placed `print()` calls, making the most of the REPL, catching errors with `try/except`, using the Thonny debugger.

### 1. Well-placed `print()`

The basic tool: print the critical variables to follow the execution.

```python
from machine import ADC, Pin
from time import sleep

capteur = ADC(Pin(26))
led = Pin(15, Pin.OUT)

while True:
    brut = capteur.read_u16()
    print("[DBG] raw =", brut)

    tension = brut * 3.3 / 65535
    print("[DBG] voltage =", tension, "V")

    if tension > 1.65:
        print("[DBG] above threshold")
        led.on()
    else:
        led.off()
    sleep(0.5)
```

At every step of the calculation, you print what you observe. If the value matches what you expect, you move on. If it does not, you have the bug. Prefixing the lines (`[DBG]`, `[ERR]`) helps you filter them as the output scrolls.

### 2. Make the most of the REPL

The MicroPython advantage: when a program crashes (or after `Ctrl-C`), you **drop back into the REPL** and inspect the state **on the board**:

```python
>>> capteur.read_u16()      # test the sensor live
512
>>> dir(led)                # see the available methods
```

You can also **work out a line at the REPL** before dropping it into the program — much faster than reloading a whole file.

### 3. Catch errors with `try / except`

Rather than let the program crash, you **catch** the error and report it, which keeps the system alive:

```python
import sys

while True:
    try:
        mesure = lire_capteur()
        traiter(mesure)
    except Exception as e:
        print("[ERR] exception caught:")
        sys.print_exception(e)      # print the full traceback
    sleep(1)
```

`sys.print_exception(e)` prints the **traceback** (error type, line) — the equivalent of the crash message, but without stopping the loop.

### 4. Use the Thonny debugger

Thonny offers a **step-by-step debugger** for MicroPython: *Exécuter → Déboguer le script actuel* (Run → Debug current script), then step line by line while watching the variables. Slower than `print()`, but valuable for following fine-grained logic.

Take a screenshot of *Thonny en débogage pas-à-pas d'un script MicroPython, les valeurs des variables visibles*.

## Reading a traceback

A MicroPython program fails in two ways, and what to do differs:

- **It crashes**: MicroPython stops the execution and shows a **traceback** in the REPL. The bug is reported — all that is left is to read it.
- **It runs but does something other than what you wanted**: no error shown. That is where the method (observe, compare, bisect) earns its keep (next section).

Unlike the Arduino, **nothing is "compiled"**: MicroPython reads the file and runs it directly. A syntax error is therefore only caught **when the file loads** (or when the line is typed at the REPL), never before.

**You read a traceback from the bottom up.** The **last line** gives the **type** of error and its message. Just above it, the number of the offending **line**.

```
Traceback (most recent call last):
  File "<stdin>", line 7, in <module>
ValueError: invalid syntax for integer with base 10
```

The most frequent errors when starting out:

- **`SyntaxError` / `IndentationError`** (on loading) — a bracket or a `:` forgotten, inconsistent indentation (spaces and tabs mixed). The file does not even start.
- **`NameError`** — an unknown name here: a typing or **case** mistake (`maLed` is not `maLED`), a forgotten `import`, or a variable used before it is defined.
- **`AttributeError`** — a method that does not exist on the object (`led.hihg()` instead of `high()`, or the wrong type of object).
- **`TypeError`** — the wrong type of argument: very often **`bytes` against `str`** (`uart.write("x")` wants `bytes`), or a forgotten argument.
- **`OSError`** — a hardware or system error: an I2C/SPI device missing, an SD card not mounted, a file not found. Often a **wiring problem** (next section).
- **`ValueError`** — an inconsistent value: `int("abc")`, a pin that does not exist, a range exceeded.
- **`ImportError`** — a library not installed on the board (see [[micropython-bibliotheques-en|libraries]]).
- **`IndexError` / `KeyError`** — reading outside a list (`t[5]` on 4 items) or a dictionary key that is not there.

When a program crashes, you **drop back into the REPL**: you can then inspect the state (`print(variable)`, `dir(objet)`) at the exact moment of the crash — the decisive advantage of an interpreted language (step 2).

## When the program runs but does something else

No traceback here: the syntax is fine, the **logic** is not. You have to **observe** (`print`, bisection — see the *Step by step*) and to know the most common MicroPython traps:

- **Indentation that changes the meaning.** A badly indented block runs at the wrong moment (outside the loop, outside the `if`). Python has no braces: **the indentation IS the structure**. Keep a consistent style, 4 spaces.
- **`/` always gives a float.** `5 / 2` is `2.5`, not `2`. For the integer, `//` (`5 // 2` is `2`). And on the Pico floats are **single precision**: do not insist on exact decimals (see [[micropython-types-en|types]]).
- **`bytes` against `str`.** A `uart` read or a binary file read returns `bytes` (`b"..."`). Comparing or concatenating them with text fails. Convert with `.decode()` / `.encode()`.
- **Comparing two floats with `==`.** `if tension == 3.3` is nearly always false (rounding). Test an interval instead: `if abs(tension - 3.3) < 0.01`.
- **`global` forgotten.** Changing a module variable inside a function without `global` silently creates a **local** one, and the global does not move (the classic trap of [[micropython-interruptions-en|interrupt]] counters).
- **`Pin` with no direction.** `Pin(15)` drives nothing until you have said `Pin(15, Pin.OUT)`. An input with no `Pin.PULL_UP` floats and reads anything.

None of these mistakes raises an exception: that is why the method (observe, compare, close in by bisection) is the only way out.

## The code says one thing, the wiring says another

The program can be right and the wiring wrong. The wiring can be right and the code wrong. Both often give the **same symptom** ("nothing happens"), and it is one of the most frequent sticking points in a lab session. The key: **the pin number in the code *is* the physical address of the component**. `Pin(15, Pin.OUT)` is a promise that a wire runs from GP15 to the component — not GP14, not GP16.

The way out is bisection applied to the code-and-hardware boundary — **isolate the two halves**:

- **Prove the board** with the built-in LED (`Pin("LED")`), with nothing wired at all. If it flashes, the Thonny-to-board chain works. The problem is downstream.
- **Prove the wiring** with a few lines at the REPL that only drive (or only read) *the* suspect pin: `Pin(15, Pin.OUT).on()`, or `ADC(Pin(26)).read_u16()`. If the component reacts, the wiring is good: the bug is in the logic of the program.
- **Trace the wire** from the pin named in the code to the component: read `LED = Pin(15, Pin.OUT)`, put your finger on GP15, follow the wire. Nine times out of ten, the mistake jumps out.
- **Check the *role* and the *polarity*, not just the number.** A pin declared `Pin.OUT` but wired to a sensor, or an LED tied to GND while the code thinks it is active high: the number is right, but the direction does not match.

Two disciplines keep that link readable: **naming the pins** (`LED = Pin(15, Pin.OUT)` rather than `15` repeated in place), and **reading this wiki's wiring diagrams alongside the code**: their pins carry the same names as the program (`Trig → GP9`, `SDA → GP4`). The example below applies that logic of isolation, from the sensor out to the output.

## Example — Diagnosing an ultrasonic sensor that returns -1

You have wired an HC-SR04, the code runs, but the distance is always `-1`. An onion-skin approach (from the sensor out to the output):

**Step 1: is the echo coming back?**

```python
duree = time_pulse_us(echo, 1, 30000)
print("[DBG] duration =", duree)
```

`duree < 0` means no echo: `trig` badly wired, sensor not powered, or a **5 V level on `Echo`** with no voltage divider (the Pico is not 5 V tolerant).

**Step 2: is the calculation right?**

```python
distance = duree * 0.0343 / 2
print("[DBG] distance =", distance)
```

`duree` consistent (~580 µs for 10 cm) but `distance` nonsense means a mistake in the formula.

**Step 3: does the value reach what comes next?** Check the condition (sign, threshold) and the wiring of the output. This approach quickly isolates the faulty segment.

## Pitfalls

**`print()` changing the timing.** Printing inside a critical loop (a control loop, a fast reading) slows the code down and can change the very behaviour you are watching. Print at a reduced rate (through [[micropython-temporisation-en|`ticks_ms()`]]), or take the `print` calls out once the bug is found.

**The Heisenberg bug.** Adding a `print` (or stepping through) slows things enough to make the bug *disappear* — often the sign of a timing dependency. Alternative diagnosis: an LED you toggle to mark a pass, without slowing anything down.

**Confusing "not printed" with "not run".** If a `print` does not appear, there are two hypotheses: the line is not reached, OR an exception interrupted before it. Wrap it in `try/except` to find out.

**Leaving `print` calls everywhere in production.** Too many `print` calls eat time and slow things down. The discipline: one flag to switch them all off in one place.

```python
DEBUG = True
def dbg(*a):
    if DEBUG:
        print("[DBG]", *a)
```

**A program that crashes in a loop at start-up.** If `main.py` raises an exception as soon as it boots, the board can look unreachable. Plug it back in through **BOOTSEL** (or break in early at the REPL) to take back control, then fix it.

## Special case — Hardware debugging (SWD)

The Pico can be debugged at hardware level through **SWD** (a second Pico as a *picoprobe* plus OpenOCD and gdb), but that route mainly targets development **in C**. In MicroPython, the trio `print()` plus REPL plus `try/except` covers the essentials. The cross-cutting view (investigation method, JTAG/SWD) is in [[debugger-embarque-en|debugging an embedded system]].

## Where it fits in the project

- **Step 3 of the [[preuve-de-concept-en|proof of concept]] phase** — a PoC with no `print` is a PoC you troubleshoot badly. Investing early in instrumentation saves hours of wandering.
- **Step 1 of the [[integration-et-tests-en|integration and testing]] phase** — instrumentation conditions the quality of the pyramid of tests.
- **Step 4 of the [[integration-et-tests-en|integration and testing]] phase** — hunting intermittent bugs rests on continuous logs, analysed after the fact.

Debugging is less a stroke of genius than a **method**: observe, compare, bisect. The MicroPython REPL makes that method particularly fast.

## See also

- [[micropython-en|MicroPython]] — hub of the module
- [[micropython-repl-en|The REPL]] — the live inspection tool (prerequisite)
- [[micropython-langage-en|The MicroPython language]] — types, `/` against `//`: the root of a great many basic mistakes
- [[micropython-lire-un-programme-en|Reading a program you did not write]] — the step before: understanding code without assuming a fault
- [[micropython-gpio-en|Inputs and outputs (GPIO)]] — `Pin`, pin direction and pull resistors
- [[micropython-temporisation-en|Timing delays]] — to pace the `print` calls without flooding
- [[debugger-embarque-en|Debugging an embedded system]] — the cross-cutting view (method plus JTAG/SWD)
- [[micropython-watchdog-en|Watchdog]] — for the silent hangs
- [[arduino-debug-en|Debugging an Arduino program]] — the C++ equivalent (`Serial.print`)
