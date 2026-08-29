---
title: Reading a MicroPython program you did not write
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-modules-en
aa: []
draft: false
source_fr: embarque/mcu/micropython/micropython-lire-un-programme.md
source_sha256: e47eeb88d4d9e66a3aec8a0243c755e696edde5027eeaf4c78f6343346b3948d
---

Copying an example out takes nothing. **Understanding it** is what then lets you modify it, fix it and reuse it. And a program is not read like a piece of writing, from the first line to the last: you enter it through landmarks, in an order that is not the order it was written in. This page gives a **method for entering** an unfamiliar MicroPython program, the **language mechanisms** that come back from one example to the next, and a **worked reading** of a program from this wiki, taken exactly as it stands. It closes the [[micropython-langage-en|MicroPython]] path: the syntax is assumed to be in place, and what you learn here is how to use it to read.

## What is it for?

On a project, most of the code you handle was not written by you: an example found online, a classmate's script, last year's project picked up again. Three situations come up constantly, and all three call for reading before writing:

- "This example does almost what I want, so what do I change?";
- "My partner wrote this part and I have to plug mine into it";
- "This code worked last week and somebody has changed it."

Reading is not debugging. Here, **no fault is assumed**: the program is taken to work, and the aim is to know *what it does*. When a behaviour is wrong and you are looking for why, that is the other trade (see [[micropython-debug-en|debugging in MicroPython]]). The two follow on from each other, since there is no useful debugging of code you have not read.

## Where to enter an unfamiliar program

Four stages, in this order. The first reflex to unlearn is starting at the top and working down.

### 1. Find the boundaries

A MicroPython program has no `setup()` and no `loop()`: the file **runs from top to bottom**, once, and it is the closing `while True:` that plays the part of the endless loop. The frame is therefore the same three zones, but it is not labelled. It is up to you to see it: the `import` lines and the object creations at the top stand in for initialisation, and everything indented under `while True:` is the repeated behaviour.

Look for the `while True:` first, before reading a single line. Its position cuts the file in two: **what sits above it runs once, what sits inside it runs endlessly**. Some programs do not have one, for instance a script that writes a file and stops, and that is already a first-order piece of information.

### 2. Read the header: wired, tuned, remembered

The header usually runs to about fifteen lines and says three distinct things. Learning to tell them apart at a glance saves most of the reading time.

- The `import` lines — **what the program depends on**. `machine` announces access to the hardware, `time` some timing, `json` a save to file, `network` a Wi-Fi link. The very first line of the file already announces its domain (see [[micropython-modules-en|modules and `import`]]);
- the names **in capitals** — the **settings**. MicroPython has no constant keyword, so nothing technically stops you changing them, and the capital is a pure convention. It is followed everywhere and reads like a promise: pin numbers, durations, thresholds. This is where you act first when adapting an example;
- the objects and variables in lower case — **the hardware that is wired up** (`led = Pin(15, Pin.OUT)`) and **what the program remembers** from one pass to the next. The latter are few in number and carry the whole behaviour.

### 3. Take stock of the states

Take the two or three lower-case variables that are not hardware objects and, for each one, look for **every place it is assigned**. The search function in [[micropython-prise-en-main-en|Thonny]] is enough. A typical embedded program has only three to five state variables, and knowing where each one changes is having understood the logic: the rest is only wiring around it.

In MicroPython this stage comes with a bonus: assignments inside a function count **only** if the function declares `global` (see below). A state variable written from a function without that declaration does not really move, and spotting the gap is often what explains a mysterious behaviour.

### 4. Play one pass, just once

Finally, walk through **one** complete pass of the loop while telling yourself a concrete scenario: "the button is not pressed, 300 ms have gone by since start-up. What is each variable worth, which branch is taken?". A single pass, played seriously, teaches more than three skim readings.

> [!tip] Tip
> **The single-sentence test.** You have read a program when you can answer two questions without reopening the file: *what does this program do, in one sentence?* and *what changes between two passes of the loop?* As long as one of the two resists, the reading is not finished. Conversely, understanding every line is **not** the aim: you can perfectly well read a program without knowing what one particular module call does. And MicroPython offers a luxury that C++ does not: the [[micropython-repl-en|REPL]] lets you test a single line in the meantime.

## The MicroPython mechanisms you meet everywhere

The points below are not syntax to learn, since that is already on the path, but **reading clues**: what the presence of a keyword or of a written form tells you about the program, before you understand any of its detail.

### Indentation is the structure

In MicroPython the left indent **defines** the blocks: there are no braces, and the indentation is not decorative. The consequence for reading is direct and very practical: **a block ends where the text comes back to the left**, which is visible without reading anything.

```python
if valeur > SEUIL:
    led.on()
    compteur += 1        # inside the if (indented)
print(compteur)          # outside the if (back to the left)
```

Scanning down the left margin therefore gives you the structure of the program in a few seconds, before any look at the content. It is exactly the opposite of [[cpp-lire-un-programme-en|C++]], where only the braces count and where the indentation can lie.

Watch out for a less obvious consequence: a deeply indented block signals a **stack of conditions**, and three levels of indent inside a loop are often a sign that there is some logic to untangle.

### The type is not written down: it comes from the assignment

No variable is declared with its type. To know what `valeur` holds, there is only one way: **go back to the place where it is assigned**. That is the cost of dynamic typing when reading, and it makes the stocktaking of stage 3 all the more worthwhile.

Two landmarks help: `read_u16()` always returns an integer from 0 to 65535, `ticks_ms()` an integer number of milliseconds, and any division with `/` produces a **float**, even between two integers. This last point explains a good many unexpected displays (see [[micropython-types-en|variables and types]]).

### `global`: the function writes a shared state

This is the most rewarding reading mechanism in MicroPython, and the one with no direct equivalent in C++. By default, **assigning a variable inside a function creates a new, local one**, even if an identical name exists above. For a function to really modify the state of the program, it has to announce so:

```python
def tache_led():
    global t_led, etat_led      # without this line, the two assignments
    if ticks_diff(ticks_ms(), t_led) >= 500:   # below would stay local
        t_led = ticks_ms(); etat_led ^= 1
        led.value(etat_led)
```

Reading reflex: **the `global` line of a function is the exact list of what that function modifies outside itself**. It is a statement of intent, free to read, and it tells you before any look at the body which state variables the function touches. A function with no `global` can only read and compute: it changes nothing.

### A compound condition is spelled out in words

The logical operators are written `and`, `or` and `not`, rather than `&&`, `||`, `!`. As in C++, **`and` binds more tightly than `or`**, so `A or B and C` reads as "A, **or else** B together with C".

```python
if (ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT or
        (demande_pieton and ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT_MIN)):
```

One point of form specific to the language: the opening bracket lets you **break the line** in the middle of a condition, and what follows is then indented further so that it does not look like the body of the block. An `or` at the top level always opens **two ways out**. Spotting them is understanding the logic of the branch.

### `with` closes by itself

The `with` block takes charge of releasing the resource: on leaving the block the file is closed again, including when an error occurs part-way through.

```python
with open("mesures.csv", "w") as f:
    f.write(ligne)
# here, the file is already closed again
```

Reading reflex: **the absence of a `close()` after a `with` is not an oversight**, it is the normal form. Looking for a manual close would be a mistake imported from [[cpp-lire-un-programme-en|C++]], where closing is precisely the programmer's job.

### `try` / `except`: a planned branch, not an accident

A `try` / `except` block does not signal fragile code: it describes an **anticipated case**. The useful reading consists in asking *which normal situation of the project produces this exception*.

```python
try:
    with open(FICHIER) as f:
        data = json.load(f)
except OSError:
    data = {"demarrages": 0}
```

Here, `OSError` is not a fault: it is the **first start-up**, when the file does not exist yet. The `except` branch therefore carries the starting value, and reads as a conditional initialisation. The type of exception caught is the main clue — `OSError` for a missing file or device, `ValueError` for an impossible conversion.

## A worked reading: the three tasks

Here is the method applied end to end to the program from [[micropython-programmation-non-bloquante-en|non-blocking programming]], taken exactly as it stands. Follow the four stages without looking at the wiki's own commentary.

**The boundaries.** The `while True:` is right at the end of the file and holds nothing but **three function calls**, without a single line of logic. All of the behaviour is therefore in the three functions above it, and the loop does nothing but chain them endlessly.

**The header.** Two `import` lines: `machine` for `Pin` and `ADC` (so hardware: one output, one analogue input, one input), `time` for `ticks_ms` and `ticks_diff` (so timing without blocking). Three hardware objects in lower case — `led`, `capteur`, `bouton` —, then four state variables: `t_led`, `etat_led`, `t_cap`, `dernier_btn`. Not one capital: the durations of this program are written in place inside the functions, which is precisely the flaw you would fix first if you were adapting it.

**The stocktaking of states.** This is where the `global` lines do all the work. `tache_led` declares `global t_led, etat_led`, so it touches the date of the last toggle and the state of the LED, and nothing else. `tache_capteur` declares `global t_cap`, a single variable, the date of the last reading. `tache_bouton` declares `global dernier_btn`, the previous reading of the button. **Three functions, three disjoint scopes**: none of them can interfere with another one's variables, and that reads in three lines without examining a single function body.

**One pass.** Scenario: 120 ms after start-up, the button is not pressed. `tache_led()` compares `ticks_diff(ticks_ms(), t_led)` with 500, a value that 120 does not reach, so the LED does not move. `tache_capteur()` compares the same gap with 100, which 120 does exceed, so the reading is printed and `t_cap` re-dated. `tache_bouton()` reads `1` (at rest, `PULL_UP` holds the pin at 1) and compares it with `dernier_btn`, which is also `1`: no falling edge, nothing happens. The pass ends, and the next one starts again straight away.

The program then sums up in one sentence: *three independent activities — blinking, measuring, watching a button — that share the same loop without any of them waiting for the others*. What the pass has shown is the central mechanism: **each task compares a date with an interval and does nothing most of the time**, which leaves the loop free to keep turning.

## Getting help without being replaced

Having a program explained to you by a conversational assistant is a legitimate use, **on one condition**: that what it states is **checkable on screen**. The criterion is the same as for [[simulation-electronique-en|simulation]] and does not depend on which way the use runs.

"The function `tache_led` modifies `etat_led`" is a checkable statement, since its `global` line confirms or denies it in three seconds. "This `except` catches the first start-up case" is checked by deleting the file and running again. Statements of that kind save time without taking anything away from the work: they are **hypotheses**, you keep the job of validating them, and the [[micropython-repl-en|REPL]] is precisely the tool that makes the check immediate.

"This code is correct" is not of that kind. It is **the conclusion**: the only deliverable of the reading, and the only one that cannot be delegated. An assistant can show you where to look. Deciding that you have understood remains your part.

## Common pitfalls

**Reading from top to bottom.** A program is not a piece of writing: start with the `while True:`, then go back up to the header to shed light on what you saw there.

**Trying to understand everything.** An obscure module call does not stop you reading the program. Note it, carry on, come back to it if the question comes up again, and test it at the REPL if it persists.

**Forgetting to read the `global` lines.** It is the cheapest and densest information in the file. Skipping it means reading each function in full to find out the same thing.

**Looking for a `close()` after a `with`.** Closing is automatic. A reflex imported from C++, with no object here.

**Taking an `except` for a patch.** The branch describes a foreseen case of the project, not badly written code. Asking *which normal situation triggers it* is the right reading.

## Exercises

> [!question] Exercise 1 — What `global` announces
> Without reading the bodies of the functions, say what each of the three functions in the program above is able to modify. Then say what would happen if the line `global t_led, etat_led` were removed from `tache_led`.

> [!success]- Solution to exercise 1
> The `global` lines are enough to answer: `tache_led` can modify `t_led` and `etat_led`, `tache_capteur` can modify `t_cap`, `tache_bouton` can modify `dernier_btn`. Nothing else: the objects `led`, `capteur` and `bouton` are only **used**, never reassigned, and so do not need to be declared.
>
> Without the `global` line, the assignments `t_led = ticks_ms()` and `etat_led ^= 1` would create variables that are **local** to each call. Two consequences: `etat_led ^= 1` would raise an error immediately, because it reads the variable before writing it and it does not exist locally. Had the code been written with a plain assignment, `t_led` would start again from zero at each call, so that the LED would never blink. **A state variable modified inside a function without `global` is a silent bug.**

> [!question] Exercise 2 — Three clues, three conclusions
> Without looking for the complete program, say what each of these three lines tells you, on its own, about the code it was taken from.
> ```python
> from machine import Pin, I2C
> except OSError:
> INTERVALLE_MS = 250
> ```

> [!success]- Solution to exercise 2
> - **`from machine import Pin, I2C`** — the program drives at least one component on an **I²C bus** (a display, a sensor), on top of plain pins. So somewhere there is an `I2C(...)` object creation with its two pins, and probably a device library imported just afterwards.
> - **`except OSError:`** — an operation on a **file or a device** can fail in a foreseen way: a file missing at first start-up, or a component that does not answer on the bus. The branch that follows holds the fallback value or behaviour.
> - **`INTERVALLE_MS = 250`** — capitals, so this is a **setting**, not a state. The `_MS` suffix announces milliseconds, hence a comparison with `ticks_diff` somewhere further down. A good candidate for adapting the program without touching its logic.

## Project hook

- **Stage 4 of the [[preuve-de-concept-en|proof-of-concept phase]]** — most of the software building blocks of a PoC start from an existing example that gets adapted. The quality of the initial reading decides how much time is lost afterwards.
- **[[revue-de-code-en|Code review]]** — reading a classmate's code first calls for being able to read at all. It is the direct prerequisite of the collective routine.

## See also

- [[micropython-langage-en|The MicroPython language]] — hub for learning the language
- [[micropython-modules-en|Modules and `import`]] — the previous stage: importing and organising your code
- [[micropython-repl-en|The REPL]] — testing a single line to settle a doubt while reading
- [[cpp-lire-un-programme-en|Reading a C++ program]] — the twin page on the Arduino side
- [[micropython-debug-en|Debugging in MicroPython]] — the stage after: a behaviour is wrong, find out why
- [[revue-de-code-en|Code review]] — the collective routine that builds on this reading
- [[micropython-programmation-non-bloquante-en|Non-blocking programming]] — the program read as an example above


---
