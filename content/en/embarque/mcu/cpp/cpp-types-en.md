---
title: Typing variables
lang: en
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-structure-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/cpp/cpp-types.md
source_sha256: d1b3d0c52f52665e67c4b1e211cc0d99bd8b70a2c364d163c951f17955a6c64e
---

A variable is declared by giving its **type**, its **name**, and often a starting value: `int compteur = 0;`. The type fixes two things, what the variable can **hold** (an integer, a character, a number with a decimal point) and the **room** it takes up in memory. In embedded work, where every byte counts and where some calculations are slow, that choice is never neutral: pick the wrong type and the program overflows, truncates or slows down without warning.

## What is it for?

Choosing the right type means avoiding a whole family of bugs, among the most bewildering there are, because they produce **no compilation error at all**. The code goes onto the board and misbehaves. Three hardware consequences, invisible on a computer, become concrete here:

- a **type that is too small overflows**: past its maximum value it "wraps" abruptly (often into the negative) and falsifies everything;
- a **`float` is expensive** on a microcontroller with no hardware floating-point unit — every operation is slow;
- a badly typed **time** value overflows within a few tens of seconds.

The right reflex is not "I put `int` everywhere", but "what is the range of this value, and what kind of thing is it?".

## Declaring a variable

The general form: `type name = value;`. You can declare without initialising (`int x;`, undefined value — best avoided) or with (`int x = 0;`, recommended).

```cpp
int compteur = 0;        // an integer, initialised to 0
bool enMarche = false;   // a boolean (true/false)
char lettre = 'A';       // a character (single quotes)
```

Once declared with a type, the variable **keeps that type**: you cannot store just anything in it without consequences (storing `3.7` in an `int` truncates it to `3`).

## The integer types

These are the most common. They differ by their **size** (hence their maximum value) and by their **sign**.

| Type | Size (AVR / ARM) | Content | Typical use |
| --- | --- | --- | --- |
| `bool` | 1 B | `true` / `false` | a state, a flag |
| `char` | 1 B | a character (`'A'`) | text, ASCII code |
| `byte` / `uint8_t` | 1 B | integer 0-255 | a byte value, a register |
| `int` | **2 B** / **4 B** | signed integer | counter, raw reading |
| `unsigned int` | 2 B / 4 B | integer ≥ 0 | index, quantity |
| `long` | 4 B | large signed integer | large counters |
| `unsigned long` | 4 B | large integer ≥ 0 | **time** (`millis()`) |

Two sensitive points, the source of most type bugs:

**The `unsigned` prefix removes the sign.** The variable then stores **positive** values only, but in exchange its maximum value **doubles**. An `int` on 2 bytes runs from −32768 to +32767. An `unsigned int` runs from 0 to 65535.

**The size of `int` changes with the board.** It is **2 bytes on AVR** (Uno R3, Mega, Nano) and **4 bytes on ARM** (Uno R4, [[esp32-en|ESP32]], Teensy). The same code can therefore overflow on one board and not on another — the most classic cause of "impossible to reproduce" bugs. When in doubt about the range, take `long` (always 4 bytes).

## Numbers with a decimal point

For a physical quantity (voltage, temperature, distance), you use a `float`:

```cpp
float tension = 3.3;     // 4 bytes, number with a decimal point
```

Two warnings specific to embedded work. First, on AVR a `double` **is** a `float` (same precision): it brings nothing. Second, on those same boards **with no floating-point unit**, every operation on a `float` is **markedly slower** than an integer calculation. So you keep floats for the calculations that really call for them (physical conversions), and stay on integers everywhere else.

## Text

A single character fits in a `char` (`'A'`, **single** quotes). A sequence of characters — a string — can be stored in two ways:

- a **`char[]` array**: the C-style string, lightweight, with no memory surprises;
- the **`String`** class (capital S): more comfortable (concatenation with `+`, ready-made methods), but it is **not standard C++** — it is an Arduino addition, and it uses **dynamic** memory.

On a microcontroller with little RAM, heavy use of `String` can fragment memory and cause crashes that are hard to diagnose. The subject is covered from the resource angle in [[arduino-memoire-en|managing memory]].

## Fixing a constant value: `const`

A value that does not change (a pin, a threshold) is declared `const`. The compiler then stops you modifying it by mistake, and the code reads better:

```cpp
const int BROCHE_LED = 13;
const float SEUIL = 25.0;
```

This is the form **preferred** to the `#define` seen in [[cpp-structure-en|the structure of a program]]: `const` is **typed** and respects scope, where `#define` is nothing but a text replacement.

## Code to read

This sketch reads a sensor and prints its voltage once per second. It puts **four types** to good use. Watch why each one is chosen.

```cpp
const int BROCHE = A0;                  // const int: a fixed pin
unsigned long dernierAffichage = 0;     // unsigned long: TIME (millis)
const unsigned long PERIODE = 1000;     // ms between two printouts

void setup() {
  Serial.begin(115200);
}

void loop() {
  if (millis() - dernierAffichage >= PERIODE) {   // once per second
    dernierAffichage = millis();

    int brut = analogRead(BROCHE);            // int: ADC value 0..1023
    float tension = brut * (5.0 / 1023.0);    // float: conversion to volts

    Serial.print("raw = ");
    Serial.print(brut);
    Serial.print("   voltage = ");
    Serial.print(tension, 2);                 // 2 decimal places
    Serial.println(" V");
  }
}
```

Each type is chosen for what it carries: `int` for the raw integer value from the ADC, `float` for the voltage (a quantity with a decimal point), `unsigned long` for time (which would soon outgrow the capacity of an `int`). Writing `5.0` rather than `5` in the conversion **forces a floating-point calculation** and avoids integer division (see Pitfalls).

## Pitfalls

**`int` overflowing depending on the board.** On AVR, `int` tops out at 32767. Beyond that it flips into the negative. The same code on a Uno R4 or an ESP32 (`int` on 4 bytes) does not overflow, hence bugs that only show up on certain boards. When in doubt, `long`.

**`unsigned long` compulsory for time.** A duration coming from `millis()` stored in an `int` overflows within about thirty seconds. Time is **always** stored in an `unsigned long` (see [[arduino-temporisation-en|delay() vs millis()]]).

**Unexpected integer division.** `5 / 2` gives `2`, not `2.5`: as long as both numbers are integers, the result is an integer. To get `2.5`, at least one operand has to be floating-point: `5.0 / 2`. A classic mistake in measurement conversions.

**Comparing two `float` values with `==`.** Floats are **approximate**: `a == b` is rarely reliable. Compare against a tolerance instead: `abs(a - b) < 0.01`.

**Believing the `float` is "free".** On AVR, every floating-point operation is slow, and `double` brings no extra precision. Keep floats for the calculations that call for them.

## Exercises

> [!question] Exercise 1 — Choosing the right type
> A flow meter returns a number of litres that can climb to 50000. On a **Uno R3**, which type do you store that value in without risking an overflow? And if the value could be negative?

> [!success]- Answer to exercise 1
> On a Uno R3 (AVR), `int` tops out at **32767**: 50000 would make it **overflow**. Since the value is positive, the soundest choice is `unsigned long` (0 to ~4 billion), or at the very least `unsigned int` (0 to 65535), which only just fits and leaves little margin. If the value could be **negative**, you take `long` (signed, 4 bytes), because `unsigned` rules out the negative.

> [!question] Exercise 2 — The wrong calculation
> This average sometimes gives an absurd result. Find the **two** problems and fix them.
> ```cpp
> int a = 20000;
> int b = 18000;
> int moyenne = (a + b) / 2;     // on a Uno R3
> ```

> [!success]- Answer to exercise 2
> Two traps stacked on a Uno R3:
> 1. **Overflow**: `a + b = 38000`, beyond the 32767 of an AVR `int` → the intermediate result flips into the negative before the division even happens.
> 2. **Integer division**: even without an overflow, `/ 2` truncates the decimal part.
>
> Fix: type wide enough for the sum, and keep an integer if the average has to be one.
> ```cpp
> long a = 20000;
> long b = 18000;
> long moyenne = (a + b) / 2;    // 19000, no overflow
> ```
> If you wanted a **decimal** average, you would go through a `float`: `float moyenne = (a + b) / 2.0;`.

## Where it fits in the project

- **Step 4 of the [[preuve-de-concept-en|proof of concept phase]]** — converting a sensor reading (raw value → physical quantity) forces a type choice at every step. That is where overflows and integer divisions take up residence.
- **Criterion *"Programming or configuring a digital controller"*** — well-typed code produces accurate measurements and reliable calculations, whichever board is chosen.

## See also

- [[cpp-en|C++]] — the learning hub for the language
- [[cpp-structure-en|The structure of a program]] — the step before: where to declare your variables
- [[cpp-portee-en|Local and global variables]] — the next step: how long a variable lives
- [[arduino-memoire-en|Managing memory on Arduino]] — `String`, pointers and the memory cost of types (cross-cutting)
- [[arduino-temporisation-en|delay() vs millis()]] — why time is stored in an `unsigned long`
- [[ascii-en|ASCII code]] — what a `char` holds: the numeric code of a character
- [[manipulation-de-bits-en|Bit manipulation]] — acting on the bits of an integer (cross-cutting)
