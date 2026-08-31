---
title: The structure of a program
lang: en
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-execution-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/cpp/cpp-structure.md
source_sha256: a7add87f218fbe276a55cfdc13ca9dbfab1009ff09f985823a93559c15b0f368
---

An Arduino program file (a *sketch*) reads from top to bottom and always follows the **same anatomy**: the preprocessor directives, then the global declarations, then `setup()` and `loop()`, and finally the functions you write yourself. Knowing *what does what and where* lets you read any example — and organise your own code instead of piling everything into `loop()`.

## What is it for?

Every sketch you will come across has this structure. Recognising it means being able to **read an example** without getting lost, and to **put your code** in the right place. Three questions come up constantly, and the structure answers them:

- "Where do I put this `#include` line?" → right at the top, it is a preprocessor directive;
- "Where do I declare a value used everywhere?" → in the global declarations, before `setup()`;
- "My `loop()` is becoming unreadable, what do I do?" → pull named **functions** out of it.

Above all, tell two kinds of line apart: what is **declared** (variables, functions, which you *name*) and what is **executed** (the actions, which live *inside* `setup()` or `loop()`). Mixing the two up is the beginner's leading cause of compilation errors.

## The anatomy of a sketch

From top to bottom, four zones follow one another. Here is their order and their role, before the complete sketch further down.

### 1. The preprocessor directives (`#include`, `#define`)

Lines starting with `#` are not "ordinary" C++: they are handled by the **preprocessor**, *before* compilation proper. The two most common ones:

```cpp
#include <Servo.h>     // pulls in a library: its content is added here
#define BROCHE_LED 13   // replaces the text "BROCHE_LED" with "13" everywhere
```

`#include` **pastes** the content of a library (your own, or one for a sensor or a display) into the program: that is what makes ready-made functions available (see [[arduino-bibliotheques-en|using a library]]). `#define` performs a plain **text replacement** before compilation. A trap worth knowing: a `#` directive **never** ends with a semicolon (it is preprocessor, not a C++ statement).

### 2. The global declarations

Right after the `#include` lines, you declare what has to be **visible everywhere** and **live for the whole program**: the setting constants, the variables to remember from one turn of the loop to the next, and the objects supplied by libraries.

```cpp
const int BROCHE_CAPTEUR = A0;   // a typed constant (preferred to #define)
int derniereMesure = 0;          // a variable remembered between turns
Servo monServo;                  // an object from the Servo library
```

We will come back in detail to *why* some variables belong here rather than in `loop()` in [[cpp-portee-en|local and global variables]].

### 3. `setup()` and `loop()`

The two compulsory functions, already seen in [[cpp-execution-en|how a program runs]]: `setup()` once at start-up (the settings), `loop()` in an endless loop (the heart of the program). This is where the **actions** live.

### 4. The functions you write yourself

So as not to stack everything into `loop()`, you group pieces of logic into **named functions** — `lireCapteur()`, `commanderMoteur()` — that you define once and call afterwards (the notion is covered in detail in [[fonction-informatique-en|function]]).

```cpp
int lireCapteur() {                 // return type, name, (parameters)
  return analogRead(BROCHE_CAPTEUR);
}
```

> [!note]
> **Where do you put your functions?** In pure C++, a function has to be declared before it is called. The Arduino IDE **generates the declarations automatically** for you, so you can write your functions *after* `loop()` without an error. That is a convenience of the Wiring dialect. In a more structured project (`.h`/`.cpp` files), you will find the classic order again.

## Code to read

A complete and **well-ordered** sketch: it drives a servo from a sensor, and lights an LED above a threshold. The **comment banners** separate the four zones visually, a habit that makes a long program far more readable.

```cpp
/* ============================================= */
/*  ZONE 1 — Preprocessor (#include, #define)    */
/* ============================================= */
#include <Servo.h>               // library: driving a servo
#define LED_ALERTE 13            // text replacement: the LED pin

/* ============================================= */
/*  ZONE 2 — Global declarations                 */
/* ============================================= */
const int BROCHE_CAPTEUR = A0;   // typed constant
const int SEUIL = 500;           // above this value, we raise an alert
Servo monServo;                  // global object: the servo
int derniereMesure = 0;          // global variable: remembered between turns

/* ============================================= */
/*  ZONE 3 — setup() and loop()                  */
/* ============================================= */
void setup() {                   // run once
  Serial.begin(115200);
  pinMode(LED_ALERTE, OUTPUT);
  monServo.attach(9);            // the servo is wired to pin 9
}

void loop() {                    // repeated endlessly
  derniereMesure = lireCapteur();        // we call our own functions
  positionnerServo(derniereMesure);
  delay(100);
}

/* ============================================= */
/*  ZONE 4 — Your own functions                  */
/* ============================================= */
int lireCapteur() {                       // reads and returns the measurement
  return analogRead(BROCHE_CAPTEUR);
}

void positionnerServo(int mesure) {       // acts according to the measurement
  int angle = map(mesure, 0, 1023, 0, 180);   // 0..1023 → 0..180°
  monServo.write(angle);
  digitalWrite(LED_ALERTE, mesure > SEUIL ? HIGH : LOW);
}
```

`loop()` stays **short and readable**: it says *what* to do (read, position), not *how*. The "how" is put away in the zone 4 functions. That is exactly the benefit of a good structure, and the basis of everything that follows on [[firmware-en|structuring the firmware]].

## Pitfalls

**`#define` followed by a `;`.** `#define LED 13;` inserts the semicolon **into** the replaced text: everywhere you write `LED`, the code becomes `13;`, which breaks expressions (`digitalWrite(13;, HIGH)`). A `#` directive never takes a `;`.

**`#include` forgotten.** Using `Servo` or `monServo.attach()` without `#include <Servo.h>` at the top gives an error of the kind `'Servo' was not declared in this scope`. The library has to be included before it is used.

**An action written outside a function.** `digitalWrite(13, HIGH);` placed in zone 2 (global declarations), outside any brace, does not compile: at that level, only **declarations** are allowed. Actions go in `setup()` or `loop()`.

**A variable used before it is declared.** The compiler reads from top to bottom: a global variable has to be declared **above** the first line that uses it.

**Piling everything into `loop()`.** It "works", but it quickly becomes unreadable and impossible to debug. As soon as a block runs beyond a few lines or repeats itself, turn it into a function.

## Exercises

> [!question] Exercise 1 — The role of each zone
> In the "Code to read" sketch, four zones are marked out by banners. For each one, say what goes in it. Then explain why an **action** such as `digitalWrite(13, HIGH);` **cannot** appear in zone 2 (global declarations).

> [!success]- Answer to exercise 1
> - **Zone 1 — preprocessor**: the `#include` lines (libraries) and the `#define` lines (text replacements).
> - **Zone 2 — global declarations**: constants (`const`), library objects (`Servo monServo;`), variables to remember between turns.
> - **Zone 3 — `setup()` / `loop()`**: the **actions** — settings once in `setup()`, the repeated heart in `loop()`.
> - **Zone 4 — your own functions**: the logic split into named functions.
>
> An action cannot appear in zone 2 because at that level — **outside any function** — there is no "moment" of execution: the compiler accepts nothing there but **declarations**. An action only makes sense *inside* a function that runs (`setup()` once, `loop()` in a loop).

> [!question] Exercise 2 — Extract a function
> Here is a `loop()` that does everything itself. Rewrite it, taking the angle calculation and the servo command out into a named function `commanderServo(int mesure)`.
> ```cpp
> void loop() {
>   int mesure = analogRead(A0);
>   int angle = map(mesure, 0, 1023, 0, 180);
>   monServo.write(angle);
>   delay(100);
> }
> ```

> [!success]- Answer to exercise 2
> ```cpp
> void loop() {
>   int mesure = analogRead(A0);
>   commanderServo(mesure);        // loop() says "what", the function says "how"
>   delay(100);
> }
>
> void commanderServo(int mesure) {
>   int angle = map(mesure, 0, 1023, 0, 180);
>   monServo.write(angle);
> }
> ```
> `loop()` becomes more readable: it describes the intent (read, command) and delegates the detail. The `commanderServo` function takes the measurement as a **parameter** and returns nothing (`void`).

## Where it fits in the project

- **Step 4 of the [[preuve-de-concept-en|proof of concept phase]]** — as soon as the first sketch goes beyond *Blink*, giving it a clear structure (settings in `setup()`, logic in functions) buys back time when debugging starts.
- **[[firmware-en|Firmware]]** — organising a program into zones and functions is the first step towards structuring embedded code as a whole, which becomes decisive as the project grows.

## See also

- [[cpp-en|C++]] — the learning hub for the language
- [[cpp-execution-en|How a program runs]] — the step before: `setup()`, `loop()` and the execution cycle
- [[cpp-types-en|Typing variables]] — the next step: choosing the right type for your declarations
- [[fonction-informatique-en|Function]] — the notion of a function in programming
- [[arduino-bibliotheques-en|Using a library]] — what `#include` makes available
- [[firmware-en|Firmware]] — structuring embedded code (cross-cutting)
