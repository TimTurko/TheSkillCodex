---
title: Loops
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-conditions-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/cpp/cpp-boucles.md
source_sha256: 1768377c537a51f7bb3d52d28bdcd7bc2e3ccc82b38946ebe4c708096bab7857
---

A **loop** repeats a block of instructions, which saves you copying and pasting the same code. C++ offers three forms of it: `for` (repeat a **known** number of times), `while` (repeat **as long as** a condition holds), and `do…while` (like `while`, but running **at least once**). This page presents all three, explains **which one to choose**, then warns about a point specific to embedded work: a waiting loop can **freeze** the whole program.

## What is it for?

As soon as an action repeats (configuring 8 pins, sweeping an array of sensors, running an LED along a strip), the loop replaces a dozen repetitive lines with three. And beyond the saving in typing, it is the tool for **going through data** (an array of readings) or **waiting for a condition**. Picking the right form makes the intent readable: "I repeat N times" is not written the same way as "I repeat as long as".

## `for` — a known number of times

The form of choice when you know **how many** times to repeat. Three elements, separated by `;`, between the parentheses:

```cpp
for (int i = 0; i < 8; i++) {   // init ; condition ; increment
  Serial.println(i);            // prints 0, 1, 2, ... 7
}
```

- **initialisation** (`int i = 0`): run once, at the start;
- **condition** (`i < 8`): tested before each pass, you carry on as long as it is true;
- **increment** (`i++`): run at the end of each pass.

The variable `i` (the *counter*) exists only inside the loop (block scope, see [[cpp-portee-en|local and global variables]]). This is the ideal form for going through an **array** by its indices.

## `while` — as long as a condition holds

For when you do **not** know in advance how many times to repeat, but you do know **until when**:

```cpp
while (analogRead(A0) < 500) {   // as long as the reading is low
  // ... do something ...
}
```

The condition is tested **before** each pass. If it is false from the outset, the block does **not run at all** (zero times).

## `do…while` — at least once

Identical to `while`, with one difference: the condition is tested **at the end**. The block therefore **always runs at least once**, even if the condition is false from the start:

```cpp
int valeur;
do {
  valeur = analogRead(A0);   // reads AT LEAST once
} while (valeur < 100);      // then goes again while it is too low
```

Useful when the action has to happen before you can test its result (reading a value before deciding whether it will do).

## Which one to choose?

| Form | When to use it | Number of runs |
| --- | --- | --- |
| `for` | the number of repetitions is **known in advance** | 0 or more (test at the start) |
| `while` | you repeat **as long as** a condition holds, count unknown | 0 or more (test at the start) |
| `do…while` | it has to run **at least once** before testing | 1 or more (test at the end) |

In practice: `for` to go through or count, `while` to wait for a condition, `do…while` in the rarer case where the first run is unconditional. All three are interchangeable on paper. You pick the one that expresses the intent most clearly.

## `break` and `continue`

Two keywords refine how a loop unfolds: `break` **interrupts** the loop immediately. `continue` **skips** to the next pass without finishing the current one.

```cpp
for (int i = 0; i < 100; i++) {
  if (capteurDefaillant(i)) continue;   // skip this sensor, move to the next
  if (urgence()) break;                 // stop straight away
  traiter(i);
}
```

> [!warning]
> **The real "infinite loop" of an embedded program is `loop()`.** So you almost never write a `while (true)` by hand. Above all, a **waiting** loop (`while (digitalRead(BOUTON) == HIGH) { }`) **freezes the whole program** for as long as it runs: nothing else executes, the board looks stuck. That is acceptable for a very brief wait, but as soon as a system has to do several things "at the same time", you do not wait inside a loop: you move to [[arduino-programmation-non-bloquante-en|non-blocking programming]].

## Code to read

A **running light**: an LED travels along six pins, one after another, over and over. The sketch uses one `for` to configure the pins, and one `for` to sweep them — going through an **array** of indices.

```cpp
const int LEDS[] = {2, 3, 4, 5, 6, 7};   // the six pins, in an array
const int NB_LEDS = 6;

void setup() {
  for (int i = 0; i < NB_LEDS; i++) {    // for: configure each pin
    pinMode(LEDS[i], OUTPUT);
  }
  Serial.begin(115200);
}

void loop() {
  for (int i = 0; i < NB_LEDS; i++) {    // for: sweep the LEDs one by one
    digitalWrite(LEDS[i], HIGH);
    delay(100);
    digitalWrite(LEDS[i], LOW);
  }
}
```

Without a loop, you would have had to write twelve `digitalWrite` calls and as many `delay` calls. The `for` goes through the `LEDS` array by its index `i`, from `0` to `NB_LEDS - 1`. Changing the number of LEDs only takes editing the array and `NB_LEDS`.

## Pitfalls

**An unintended infinite loop.** If the condition of a `while` never becomes false (or if you forget to increment the counter of a `for`), the loop runs endlessly and the program freezes. Check that the condition **will eventually** become false.

**Running past the end of an array.** With an array of 6 slots (indices 0 to 5), `for (int i = 0; i <= 6; i++)` reaches slot `6`, which **does not exist**: a memory read out of bounds, unpredictable behaviour. The correct condition is `i < 6` (or `i < NB_LEDS`).

**The fatal `;` after the `for`.** `for (int i = 0; i < 10; i++);`: the trailing semicolon makes an **empty** loop. The real block that follows runs only once, after the loop. Never put a `;` right after the closing parenthesis of a `for`.

**Waiting inside a blocking loop.** See the box: a `while` used for waiting freezes everything. Keep it for very short waits; otherwise, non-blocking programming.

## Exercises

> [!question] Exercise 1 — Counting down
> Using a `for` loop, print a countdown from 10 to 1 on the serial monitor, then the word `"Go!"`.

> [!success]- Answer to exercise 1
> ```cpp
> void setup() {
>   Serial.begin(115200);
>   for (int i = 10; i >= 1; i--) {   // from 10 down to 1, decrement
>     Serial.println(i);
>     delay(500);
>   }
>   Serial.println("Go!");
> }
>
> void loop() {
> }
> ```
> The loop sits in `setup()` because the countdown must happen **only once**. The counter starts at 10, the condition `i >= 1` stops it at 1, and `i--` decrements it.

> [!question] Exercise 2 — `while` or `do…while`?
> What does each of these two loops do if, from the outset, the button is **already** released (`digitalRead` returns `HIGH`)? How do they differ?
> ```cpp
> // A
> while (digitalRead(BOUTON) == LOW) { Serial.println("A"); }
> // B
> do { Serial.println("B"); } while (digitalRead(BOUTON) == LOW);
> ```

> [!success]- Answer to exercise 2
> - **A (`while`)**: the condition is tested **first**. Since the button is released (so `== LOW` is false), the block does **not run at all** — `"A"` is never printed.
> - **B (`do…while`)**: the block runs **once** before the test. `"B"` is printed **once**, then the false condition stops the loop.
>
> That is the whole difference: `do…while` guarantees at least one pass. (And a reminder: both of these waiting loops would freeze the program for as long as the button stayed pressed.)

## Where it fits in the project

- **Step 4 of the [[preuve-de-concept-en|proof of concept phase]]** — sweeping a set of sensors or outputs, going through an array of readings: the `for` loop is the basic tool as soon as you handle several channels.
- **[[arduino-programmation-non-bloquante-en|Non-blocking programming]]** — the limit of blocking waiting loops leads straight to handling time without freezing the program, which becomes essential as soon as the system does several things at once.

## See also

- [[cpp-en|C++]] — the learning hub for the language
- [[cpp-conditions-en|Conditions]] — the step before: deciding according to a value
- [[cpp-logs-en|Reading and understanding errors]] — the next step: getting yourself unstuck
- [[arduino-programmation-non-bloquante-en|Non-blocking programming]] — why you do not wait inside a blocking loop in embedded work
