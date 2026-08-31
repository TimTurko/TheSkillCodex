---
title: Function (programming)
lang: en
type: notion
phases:
  - preuve-de-concept
tags:
  - eee
  - notion
prerequis: []
aa: []
draft: false
source_fr: embarque/mcu/fonction-informatique.md
source_sha256: 946555cdc32095580266239847a5ab002d70df3d4118bff117c4d1dbe7e8643c
---

A **function**, in programming, is a **named** block of instructions defined once and reused by calling it by its name. It can take data in as **input** (the *parameters*) and return a result as **output** (the *return value*). Splitting a program into functions makes it readable, reusable and testable: instead of one long sequence of instructions, you read a series of blocks with a clear role.

Not to be confused with a [[fonction-en|function in the sense of functional analysis]] (FP / FS / FC), which describes a **service the product delivers**, not a block of code.

## What is it for?

Three benefits, and they add up as soon as a program grows:

- **Factoring out** — writing once what serves several times, instead of copying and pasting (and having to fix every copy when a bug shows up).
- **Naming an intent.** `lireTemperature()` reads better than a dozen conversion lines drowned in the loop.
- **Isolating.** A function is tested and debugged on its own, which matters once the system gets large.

In embedded work it is also the **basic structure**: every Arduino program lives in two functions, `setup()` (start-up settings) and `loop()` (main loop), and the rest of the [[firmware-en|firmware]] is organised into functions with a clear role (`lireCapteur()`, `commanderMoteur()`).

## How to write a function

A function is defined by a **return type**, a **name**, **parameters** between brackets, and a body between braces. `return` sends the output value back. The `void` type means there is no return value.

```cpp
float moyenne(int a, int b) {   // return type · name · parameters
  return (a + b) / 2.0;         // value returned
}
```

It is then **called** by its name, with its arguments passed to it:

```cpp
float m = moyenne(10, 20);      // m is 15.0
```

Variables declared **inside** a function only exist while it runs (their *scope* is local): that point, central in embedded work, is detailed in [[cpp-portee-en|local and global variables]].

## Pitfalls

**Confusing defining and calling.** Writing a function does not run it: as long as it is never called by its name, its code never runs.

**Forgetting the return value.** A function that is not `void` must return a value consistent with its type, on every execution path.

**A function that does too much.** A function meant to do everything ends up as unreadable as the code it was supposed to clarify. One function, one intent.

## See also

- [[cpp-en|C++]] — the full syntax of functions and the scope of variables
- [[fonction-en|Function]] — the other meaning of the word: a service the product delivers
- [[arduino-en|Arduino]] — `setup()` and `loop()`, the two functions of every Arduino program
