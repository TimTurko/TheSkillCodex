---
title: C++
lang: en
type: notion
tags:
  - eee
  - notion
prerequis:
  - arduino-prise-en-main-en
aa:
  - RA-PROJET-C03-3/PROJ/5
phases:
  - preuve-de-concept
draft: false
source_fr: embarque/mcu/cpp/cpp.md
source_sha256: 58fce82ce9f6bba495391e3181323b7ad58c3737563fe51c57b1923c2e564285
---

**C++** is the language Arduino programs are written in, or more precisely a C++ with scaffolding around it (the *Wiring* dialect), where two [[fonction-informatique-en|functions]], `setup()` and `loop()`, frame the whole of the code. Mastering its building blocks is what separates *copying* an example from *writing* your own program. This page is the **step-by-step learning hub** for the language on the embedded side: from the first program that compiles through to control structures, every sub-page comes with code to read and exercises to work through. The same language programs the [[esp32-en|ESP32]], the Teensy and the other boards of the Arduino framework. This path therefore serves them all.

## Learning path

To be followed in order: each step assumes the one before it.

1. [[cpp-execution-en|How a program runs]] — the *compile → upload → run* cycle, and the minimum code that compiles;
2. [[cpp-structure-en|The structure of a program]] — preprocessor, `#include`, `#define`, global variables, `setup()`, `loop()`, functions;
3. [[cpp-types-en|Typing variables]] — picking the right type, and what it costs in memory;
4. [[cpp-portee-en|Local and global variables]] — scope, and what survives from one pass of the loop to the next;
5. [[cpp-conditions-en|Conditions]] — `if` / `else`, `switch`, comparison and logical operators;
6. [[cpp-boucles-en|Loops]] — `for`, `while`, `do…while`: which one to choose;
7. [[cpp-logs-en|Reading and understanding errors]] — decoding the compiler's messages to get yourself unstuck;
8. [[cpp-lire-un-programme-en|Reading a program you did not write]] — getting into unfamiliar code, and the language mechanisms that come back from one example to the next.

Once these blocks are in place, the question becomes *how to structure* the code: see [[arduino-programmation-non-bloquante-en|non-blocking programming]], [[machine-a-etats-en|state machines]] and the overall shaping of the [[firmware-en|firmware]]. And for the **MicroPython** path, the same apprenticeship in the language exists as a twin: [[micropython-langage-en|The MicroPython language]].

## See also

- [[arduino-en|Arduino]] — the module hub
- [[micropython-langage-en|MicroPython, the language]] — the twin path on the MicroPython side
- [[arduino-prise-en-main-en|Getting started]] — compiling and uploading, the practical prerequisite for trying the examples
- [[fonction-informatique-en|Function]] — the notion of a function in programming
- [[arduino-memoire-en|Memory management]] — types, `String`, pointers and allocation, seen as a resource question (cross-cutting)
- [[manipulation-de-bits-en|Bit manipulation]] — bitwise operators and registers (cross-cutting)
- [[firmware-en|Firmware]] — structuring embedded code (cross-cutting)
