---
title: Conditions
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-portee-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/cpp/cpp-conditions.md
source_sha256: 4f70800a3db97aa018297d5d1d3b5e6102794fb569cf00f78b3e620fde8f731c
---

A **condition** makes the program take one path rather than another depending on the situation: *if* the temperature goes past a threshold, *then* switch the fan on. Without conditions, a program would only ever do one thing, always the same one. This page covers the two structures of choice (`if` / `else` and `switch` / `case`) and the **operators** (comparison, logical) that make up the test itself.

## What is it for?

Every system that *reacts* rests on conditions: crossing a threshold, detecting a press, changing mode. That is what turns a program which *runs through a sequence* into a program which *decides*. Mastering conditions means being able to write "react like this in one case, like that in another", the very heart of controlling a mechanism.

## Comparison operators

A condition is an expression that is worth **true** or **false** (`bool`). You build it with comparison operators:

| Operator | Meaning | Example that is true |
| --- | --- | --- |
| `==` | equal to | `mode == 2` |
| `!=` | different from | `etat != HIGH` |
| `<` `>` | less than / greater than | `t > 25` |
| `<=` `>=` | less than or equal / greater than or equal | `niveau >= 100` |

Watch the difference right away between `=` (assignment: *storing* a value) and `==` (comparison: *testing* for equality). This is pitfall number one (see below).

## Logical operators

To combine several conditions, three logical operators:

- `&&` (**and**) — true if both conditions are true: `t >= 18 && t <= 25`;
- `||` (**or**) — true if at least one of them is: `bouton == LOW || force == true`;
- `!` (**not**) — inverts a condition: `!enMarche`.

> [!warning]
> **`&&` is not `&`.** `&&` is the logical operator (it combines true/false conditions). `&` is the **bitwise** operator (it acts on the bits of a number, see [[manipulation-de-bits-en|bit manipulation]]). Confusing the two inside a condition gives a wrong but silent result. The same goes for `||` (logical) and `|` (bitwise).

## `if` / `else if` / `else`

The most common structure of choice. You start simple and build up:

```cpp
if (t > 25) {                 // a single case
  digitalWrite(VENTILO, HIGH);
}

if (t > 25) {                 // two mutually exclusive cases
  digitalWrite(VENTILO, HIGH);
} else {
  digitalWrite(VENTILO, LOW);
}

if (t < 18) {                 // several cases, tested in order
  Serial.println("cold");
} else if (t <= 25) {
  Serial.println("ok");
} else {
  Serial.println("hot");
}
```

Inside a cascade, conditions are tested **from top to bottom**, and **only the first** block that is true runs. The final `else` catches "all the other cases".

## `switch` / `case`

When you are branching on the **successive values of a single variable**, a cascade of `if` gets heavy. The `switch` reads better:

```cpp
switch (mode) {
  case 0:
    Serial.println("stop");
    break;            // leaves the switch
  case 1:
    Serial.println("manual");
    break;
  case 2:
    Serial.println("auto");
    break;
  default:            // all the other cases
    Serial.println("unknown mode");
}
```

Each `case` ends with `break`, which **leaves** the `switch`. Without it, execution "falls" into the next `case` (see Pitfalls). The `default` (optional) catches the values you did not plan for. The `switch` is everywhere in [[machine-a-etats-en|state machines]], where you branch on the current state.

## The ternary operator

For the very smallest choices (assigning one value or another depending on a condition), C++ offers a condensed form of the `if`/`else`: the **ternary operator** `condition ? value_if_true : value_if_false`.

```cpp
digitalWrite(LED, mesure > SEUIL ? HIGH : LOW);   // same as the if/else below

if (mesure > SEUIL) { digitalWrite(LED, HIGH); }
else                { digitalWrite(LED, LOW);  }
```

You have already come across it in the sketch in [[cpp-structure-en|the structure of a program]]. Keep it for cases that stay **simple and readable** (one assignment, one argument): as soon as there are several actions, or you feel tempted to nest two of them, go back to the plain `if`/`else`.

## Code to read

This sketch sorts a reading into three zones with an `if` cascade, and shows the `switch` inside a function that prints the mode.

```cpp
const int BROCHE = A0;
const int LED = 13;

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  int mesure = analogRead(BROCHE);     // 0..1023

  if (mesure < 300) {                  // cascade: three zones
    Serial.println("low");
    digitalWrite(LED, LOW);
  } else if (mesure <= 700) {
    Serial.println("mid");
    digitalWrite(LED, LOW);
  } else {
    Serial.println("high");
    digitalWrite(LED, HIGH);           // alert in the high zone only
  }

  delay(500);
}

// A switch example: branching on a mode number
void afficherMode(int mode) {
  switch (mode) {
    case 0:  Serial.println("stop");    break;
    case 1:  Serial.println("manual");  break;
    case 2:  Serial.println("auto");    break;
    default: Serial.println("unknown");
  }
}
```

The `if` cascade handles an **interval** (measurement zones). The `switch` handles **discrete values** (mode numbers). Picking one or the other according to the nature of the test is what makes the code clear.

## Pitfalls

**`=` instead of `==`.** `if (etat = HIGH)` *assigns* `HIGH` to `etat` instead of comparing it, and the condition is then always true. The code compiles without complaint. The behaviour is wrong. Read every test twice.

**A `break` missing in a `switch`.** Without `break`, execution carries on into the next `case` (the *fall-through* effect): you trigger several cases instead of one. Put a `break` at the end of every `case`.

**Comparing two `float` values with `==`.** Floats are approximate: `if (t == 25.0)` is rarely true even when you expect it to be. Compare against a tolerance instead: `if (abs(t - 25.0) < 0.1)`.

**A condition that is always true or always false.** `if (vitesse > 0 || vitesse < 100)` is **always** true (every number satisfies one of the two). What was meant was almost certainly `&&`. Check the logic of your `||` and `&&`.

**`&&`/`&` and `||`/`|` mixed up.** See the box above: the bitwise version inside a condition gives a silently wrong result.

## Exercises

> [!question] Exercise 1 — A comfort range
> Write the condition that lights an LED **only** if the temperature `t` lies between 18 and 25 °C **inclusive**.

> [!success]- Answer to exercise 1
> ```cpp
> if (t >= 18 && t <= 25) {
>   digitalWrite(LED, HIGH);
> } else {
>   digitalWrite(LED, LOW);
> }
> ```
> The `&&` requires **both** bounds to hold. With `||`, the LED would be on almost all the time (every temperature satisfies at least one of the two inequalities).

> [!question] Exercise 2 — The switch that goes off the rails
> This `switch` prints `manual` *and* `auto` when `mode` is 1. Why, and how do you fix it?
> ```cpp
> switch (mode) {
>   case 1: Serial.println("manual");
>   case 2: Serial.println("auto");
> }
> ```

> [!success]- Answer to exercise 2
> The `break` statements are missing: when `mode == 1`, execution enters `case 1`, prints `manual`, then **falls** into `case 2` and prints `auto`. The fix:
> ```cpp
> switch (mode) {
>   case 1: Serial.println("manual"); break;
>   case 2: Serial.println("auto");   break;
> }
> ```

## Where it fits in the project

- **Step 4 of the [[preuve-de-concept-en|proof of concept phase]]** — reacting to a sensor threshold, choosing an action according to a mode: conditions are the first tool of control logic.
- **[[machine-a-etats-en|State machines]]** — a `switch` on the current state is the skeleton of a state machine, the central structure for controlling a mechanism.

## See also

- [[cpp-en|C++]] — the learning hub for the language
- [[cpp-portee-en|Local and global variables]] — the step before
- [[cpp-boucles-en|Loops]] — the next step: repeating a block
- [[machine-a-etats-en|State machines]] — the `switch` as a state selector
- [[manipulation-de-bits-en|Bit manipulation]] — the difference between `&&` (logical) and `&` (bitwise)
