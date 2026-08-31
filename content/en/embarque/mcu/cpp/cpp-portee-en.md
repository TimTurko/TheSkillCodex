---
title: Local and global variables
lang: en
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-types-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/cpp/cpp-portee.md
source_sha256: 5f7f291f82e398ff7477bcbfcb733139736427414b16acc2960f6466a522a583
---

The **scope** of a variable settles two things: *where* it is visible in the program, and *how long* it lives. A variable declared **inside** a function is *local*: it is born when the function is called and dies when it returns. Declared **outside** any function, it is *global*: it lives for as long as the program runs. In embedded work this distinction is very concrete: it is what decides whether a value **survives** from one pass of `loop()` to the next or resets on every pass.

![Local vs global: over three passes of loop(), the global keeps its value (1, 2, 3) while the local starts again from 0 on each pass (1, 1, 1)](/ressources/img/cpp-portee/locale-globale.svg)

## What is it for?

This is one of the most frequent misreadings a beginner makes: declaring a variable inside `loop()`, believing it "remembers" something, and finding that it starts again from zero on every pass. Understanding scope means knowing **where to declare** a variable according to its use:

- a **working** value, useful for the length of a calculation → local (the default, and the safest);
- a **state to be kept** between passes (a counter, a last instant, a current mode) → global (or `static`).

Placing your variables well avoids both the "memory that wipes itself" bugs and the conflicts of a global variable modified from everywhere.

## The local variable

A variable declared inside a function exists **only** in that function, and only for the duration of its execution:

```cpp
void loop() {
  int compteur = 0;     // LOCAL: recreated on every pass of loop()
  compteur = compteur + 1;
  Serial.println(compteur);   // always prints 1!
  delay(500);
}
```

On every pass, `compteur` is **recreated** and reset to `0`, incremented to `1`, printed, then **destroyed** at the end of the pass. Hence the display stuck at `1`. That is fine for a throwaway value, but not for remembering anything at all.

## The global variable

Declared **outside** any function (at the top of the sketch, among the global declarations seen in [[cpp-structure-en|the structure of a program]]), a variable is visible everywhere and **lives for the whole program**:

```cpp
int compteur = 0;       // GLOBAL: created once, kept from then on

void loop() {
  compteur = compteur + 1;
  Serial.println(compteur);   // 1, 2, 3, 4, ...
  delay(500);
}
```

Here `compteur` is created **only once**, at start-up. It keeps its value from one pass to the next: the display climbs. That is what you need for any state that has to persist.

> [!tip]
> **The mental test.** "Does this value have to survive into the next pass of `loop()`?" If yes → global. If no → local. Most variables are local. You only make something global when it really has to be shared or remembered.

## The middle ground: `static`

Sometimes you want a variable to **persist** between calls to a function **without** exposing it to the whole program. The `static` keyword does exactly that: the variable stays local (invisible elsewhere), but it is initialised **only once** and keeps its value afterwards:

```cpp
void loop() {
  static int compteur = 0;   // initialised once, kept between passes
  compteur = compteur + 1;
  Serial.println(compteur);  // 1, 2, 3, ... like a global, but confined to loop()
  delay(500);
}
```

It is a good reflex when a single function needs a memory of its own: it saves you from cluttering the global space.

## Block scope

A variable declared inside a `{ }` block (the body of an `if`, of a `for`) exists only in that block:

```cpp
for (int i = 0; i < 10; i++) {
  // i exists only here
}
// i no longer exists on this line
```

That is deliberate: `i` is a tool of the loop, of no use outside it. Trying to use it afterwards gives an `'i' was not declared in this scope` error.

## Code to read

This sketch counts presses on a button. The **running total** has to survive between passes (so it is global), while the **reading** of the button is a working value (so it is local).

```cpp
int nbAppuis = 0;             // GLOBAL: the running total, kept between passes
const int BOUTON = 2;

void setup() {
  pinMode(BOUTON, INPUT_PULLUP);   // pull-up: button released = HIGH
  Serial.begin(115200);
}

void loop() {
  int etat = digitalRead(BOUTON);  // LOCAL: recomputed every pass, throwaway
  if (etat == LOW) {               // pressed (pull-up: pressed = LOW)
    nbAppuis = nbAppuis + 1;
    Serial.print("Presses so far: ");
    Serial.println(nbAppuis);
    delay(200);                    // crude debounce (see arduino-entree-tor)
  }
}
```

`nbAppuis` has to be global, otherwise the counter would start from zero on every pass and would never print anything but `1`. `etat` has no reason to survive: local, it stays isolated and readable.

## Pitfalls

**The local variable you thought was persistent.** Pitfall number one: a counter or a last state declared inside `loop()` resets on every pass. To remember it, declare it **global** or `static`.

**Shadowing.** Declaring a local variable with the same name as a global "hides" the global inside that function: you think you are modifying the global, you are only touching a local copy. Avoid reusing the same names.

**An uninitialised global.** An uninitialised global variable is worth `0` by default. An uninitialised **local** holds an **undefined** value (anything at all). Always initialise your locals.

**Too many global variables.** When everything is global, any function can modify anything: bugs become hard to pin down. Keep the global space to the strict minimum (shared state, persistence).

## Exercises

> [!question] Exercise 1 — Predict the output
> For each of these two `loop()` functions, what does the serial monitor print on the first three passes?
> ```cpp
> // Version A
> void loop() { int n = 0; n++; Serial.println(n); delay(500); }
>
> // Version B
> int n = 0;
> void loop() { n++; Serial.println(n); delay(500); }
> ```

> [!success]- Answer to exercise 1
> - **Version A**: `1`, `1`, `1`. `n` is **local**, recreated and reset to 0 on every pass, so always incremented from 0 to 1.
> - **Version B**: `1`, `2`, `3`. `n` is **global**, created only once. It keeps its value and is incremented pass after pass.

> [!question] Exercise 2 — The counter that does not count
> This program is meant to count how many times a reading goes past a threshold, but it always prints `1`. Fix it in two different ways.
> ```cpp
> void loop() {
>   int depassements = 0;
>   if (analogRead(A0) > 500) {
>     depassements++;
>     Serial.println(depassements);
>   }
>   delay(100);
> }
> ```

> [!success]- Answer to exercise 2
> `depassements` is local → reset to 0 on every pass. Two possible fixes:
> ```cpp
> // Fix 1: a global variable
> int depassements = 0;
> void loop() {
>   if (analogRead(A0) > 500) { depassements++; Serial.println(depassements); }
>   delay(100);
> }
> ```
> ```cpp
> // Fix 2: a static local variable (confined to loop, but persistent)
> void loop() {
>   static int depassements = 0;
>   if (analogRead(A0) > 500) { depassements++; Serial.println(depassements); }
>   delay(100);
> }
> ```

## Where it fits in the project

- **Step 4 of the [[preuve-de-concept-en|proof of concept phase]]** — as soon as a program has to remember a state (last mode, counter, last instant), scope becomes decisive. A poor choice produces "memory that wipes itself" bugs that are hard to understand.
- **[[machine-a-etats-en|State machines]]** — the current state of a state machine is typically a persistent **global** variable: scope is the bedrock of the mechanism.

## See also

- [[cpp-en|C++]] — the learning hub for the language
- [[cpp-types-en|Typing variables]] — the step before: choosing the type of a variable
- [[cpp-conditions-en|Conditions]] — the next step: deciding according to a value
- [[cpp-structure-en|The structure of a program]] — where global variables are declared
- [[arduino-entree-tor-en|Reading an on/off input]] — the button and the debounce in the example
