---
title: Conditions and loops
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
source_fr: embarque/mcu/micropython/micropython-controle.md
source_sha256: 80fe75ca074feeffe06af0bf4a1b52e892fdbe0971b5eb01cd642351b275d62b
---

**Conditions** (`if`) and **loops** (`while`, `for`) steer the way a program unfolds, either acting on a value or repeating an action. In MicroPython one feature shapes everything else: blocks are marked out by **indentation** (the left indent), not by braces. It is clean and readable, but inconsistent indentation raises an error. This page covers conditions, loops, and that central role of indentation.

## Indentation marks out the blocks

Where [[cpp-en|C++]] wraps a block in braces `{ }`, MicroPython marks it with **indentation**. The header line ends with `:`, and everything **indented below it** belongs to the block:

```python
if temperature > 25:
    print("It is hot")         # inside the block (indented)
    ventilateur.on()           # inside the block
print("Rest of the program")   # outside the block (back to the left)
```

The convention is **4 spaces** per level (Thonny does it for you). No braces, and no semicolon at the end of a line.

## Conditions: `if` / `elif` / `else`

```python
valeur = capteur.read_u16()    # an ADC reading, 0..65535

if valeur < 20000:
    etat = "dark"
elif valeur < 45000:
    etat = "medium"
else:
    etat = "bright"
```

The comparisons: `==`, `!=`, `<`, `>`, `<=`, `>=`. The logical operators are spelled out **as words** — `and`, `or`, `not` — rather than `&&` / `||` / `!`:

```python
if bouton.value() == 0 and not alarme_active:
    declencher()
```

## Loops: `while` and `for`

The `while` loop repeats **as long as** a condition holds true. `while True:` is the main loop of an embedded program:

```python
while True:
    led.toggle()
    sleep(0.5)
```

The `for` loop walks through a sequence, often `range(n)` to repeat *n* times:

```python
for i in range(5):      # i takes 0, 1, 2, 3, 4
    led.on()
    sleep(0.1)
    led.off()
    sleep(0.1)
```

You can also walk directly through a [[micropython-types-en|list]]: `for broche in [14, 15, 16]:`. `break` leaves the loop, `continue` moves on to the next pass.

## Pitfalls

**Indentation error.** An inconsistent indent (or a mix of tabs and spaces) raises an `IndentationError`. Stick to **4 spaces** everywhere, and let Thonny handle the indentation.

**Forgetting the `:`.** The header line of an `if`, a `while` or a `for` ends with a colon. Leaving it out raises a `SyntaxError`.

**`and`/`or`/`not`, not `&&`/`||`/`!`.** A reflex to unlearn if you come from C: the logical operators are words.

**`=` is not `==`.** `if x = 5` is an error. The comparison is written `if x == 5`. (Unlike C, assignment inside a condition is not allowed, which rules out the classic bug.)

## Exercises

> [!question] Exercise 1 — Three brightness bands
> From an ADC reading `valeur` (0 to 65535), display `"dark"`, `"medium"` or `"bright"` according to three bands of your choosing.

> [!success]- Solution
> ```python
> valeur = capteur.read_u16()
> if valeur < 20000:
>     print("dark")
> elif valeur < 45000:
>     print("medium")
> else:
>     print("bright")
> ```
> `elif` chains the cases: as soon as one condition is true, the following ones are skipped. Order matters, so test the thresholds from the lowest to the highest.

> [!question] Exercise 2 — Blink N times
> Make the LED blink exactly **10 times** (0.1 s on / 0.1 s off), then stop. Which loop, and why not `while True`?

> [!success]- Solution
> ```python
> from machine import Pin
> from time import sleep
> led = Pin("LED", Pin.OUT)
>
> for i in range(10):
>     led.on()
>     sleep(0.1)
>     led.off()
>     sleep(0.1)
> ```
> `for ... in range(10)` repeats a **known number** of times, which is what is needed here. `while True` would repeat endlessly. `range(10)` produces the values 0 to 9, so 10 passes.

## See also

- [[micropython-langage-en|The MicroPython language]] — hub of the language path
- [[micropython-types-en|Variables and types]] — the values the conditions are testing
- [[micropython-fonctions-en|Functions]] — grouping a reusable block
- [[cpp-conditions-en|Conditions]] · [[cpp-boucles-en|Loops]] in C++ — worth comparing (braces, operators)
