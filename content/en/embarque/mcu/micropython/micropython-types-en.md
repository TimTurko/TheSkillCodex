---
title: Variables and types
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
source_fr: embarque/mcu/micropython/micropython-types.md
source_sha256: c53220021779e1c0f896ea5fd801232348e2f1cbf1e45367d52d3c382b77a551
---

In MicroPython a **variable** is created by plain assignment, **without declaring its type**: `x = 5` is enough. This is **dynamic typing**: the interpreter works out the type, and one and the same variable can even change type along the way. That is the big difference with [[cpp-en|C++]] (`int x = 5;`), a source of concision… and of one pitfall worth knowing. This page covers the basic types and the essential containers.

## No declaration, a deduced type

```python
temperature = 21.5      # float
nom = "Pico"            # str (character string)
actif = True            # bool
nombre = 42             # int
```

`type()` reveals the current type:

```python
>>> type(temperature)
<class 'float'>
>>> type(nombre)
<class 'int'>
```

**`int` values have arbitrary precision** (no overflow at 65535 as on a 16-bit AVR `int`), and **division** comes in two operators:

```python
>>> 5 / 2      # true division -> float
2.5
>>> 5 // 2     # integer division -> int
2
```

## Converting between types

Conversions are explicit: `int()`, `float()`, `str()`.

```python
>>> int("42") + 1        # the string "42" becomes the number 42
43
>>> "value: " + str(nombre)     # to concatenate, convert the number to str
'value: 42'
```

This comes up often in embedded work: an [[micropython-capteur-analogique-en|ADC]] returns an `int`, which you convert into a voltage (`float`) or into text for display.

## The containers: `list` and `dict`

A **`list`** holds ordered values that can be modified:

```python
mesures = [512, 530, 528]
mesures.append(541)      # adds at the end
print(mesures[0])        # first element -> 512
print(len(mesures))      # number of elements -> 4
```

A **`dict`** maps keys to values, which is handy for naming things:

```python
capteur = {"nom": "LDR", "broche": 26, "valeur": 512}
print(capteur["broche"])   # -> 26
```

## Pitfalls

**The type can change silently.** Since nothing is declared, reassigning `x = "text"` after `x = 5` is allowed, and it can introduce a bug that is hard to spot. Keep a variable on a single type unless there is a clear reason not to.

**`/` is not `//`.** `5 / 2` gives `2.5` (a float), not `2`. For an integer division, use `//`. It is the opposite of the C reflex, where `/` between integers truncates.

**The Pico computes in single precision.** Its `float` values sit on 32 bits, not 64 as on a computer, so a perfectly simple calculation can display stray decimals. `float("3.3") * 2` may give `6.5999999` instead of `6.6`. That is normal. The consequence: do not compare two floats for strict equality (`==`), but test a small gap (`abs(a - b) < 0.001`).

**`str` + `int` raises an error.** `"value: " + 42` raises a `TypeError`, so you have to convert (`+ str(42)`). Python does not mix types implicitly.

**Memory cost.** A Python object is heavier than a C integer. That does not matter while learning, but it is worth bearing in mind on large arrays (see [[memoire-en|memory management]]).

## Exercises

> [!question] Exercise 1 — Inspect and convert
> At the REPL, create a variable holding the string `"3.3"`, check its type, then convert it into a float and multiply it by 2.

> [!success]- Solution
> ```python
> >>> v = "3.3"
> >>> type(v)
> <class 'str'>
> >>> float(v) * 2
> 6.6
> ```
> The string `"3.3"` is not a number until you convert it: `float(v)` turns it into a float, which you can then compute with. Multiplying the string (`v * 2`) would give `'3.33.3'`, hence the importance of the conversion. On the Pico (single precision), the displayed result may be `6.5999999` rather than `6.6`: the calculation is right, it is the display that reveals the limit (see the pitfall).

> [!question] Exercise 2 — Average of some readings
> From a list of three readings `[512, 530, 528]`, work out their average. Hint: `sum()` and `len()`.

> [!success]- Solution
> ```python
> mesures = [512, 530, 528]
> moyenne = sum(mesures) / len(mesures)
> print(moyenne)        # 523.33...
> ```
> `sum()` adds the elements up, `len()` counts them. True division `/` gives an average as a `float`. You will meet this pattern again when smoothing noisy readings.

## See also

- [[micropython-langage-en|The MicroPython language]] — hub of the language path
- [[micropython-controle-en|Conditions and loops]] — the values the conditions are testing
- [[cpp-types-en|Typing in C++]] — the static approach, worth comparing
- [[memoire-en|Memory management]] — what objects cost (cross-cutting)
