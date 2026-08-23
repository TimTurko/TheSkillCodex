---
title: The MicroPython language
type: notion
tags:
  - eee
  - notion
prerequis:
  - micropython-prise-en-main-en
aa:
  - RA-PROJET-C03-3/PROJ/5
phases:
  - preuve-de-concept
draft: false
source_fr: embarque/mcu/micropython/micropython-langage.md
source_sha256: 943fb37cfca7d19811426a81a525d46fe52b9a6a15954c92e6b0d58a29b803d7
---

**MicroPython** is **Python 3** running on the microcontroller itself: an **interpreted** language (no compilation step), with **dynamic typing** (variable types are never declared), where blocks are delimited by **indentation** rather than by braces. Mastering its building blocks is what separates *copying* an example from *writing* your own program. This page is the **step-by-step learning hub** for the language on the embedded side: every sub-page comes with code to read and exercises to work through. The same language programs the [[esp32-en|ESP32]] and other boards. This path therefore serves them all. It is the MicroPython counterpart of the [[cpp-en|C++]] page in the Arduino module.

## Learning path

To be followed in order: each step assumes the one before it.

1. [[micropython-repl-en|The REPL]] — the interactive shell that runs *on the board*: type one line and see the effect at once, the working tool behind all the rest;
2. [[micropython-types-en|Variables and types]] — dynamic typing, `int` / `float` / `str` / `bool`, and the `list` / `dict` containers;
3. [[micropython-controle-en|Conditions and loops]] — `if` / `elif` / `else`, `while`, `for … in`, and the structural role of indentation;
4. [[micropython-fonctions-en|Functions]] — `def`, arguments, default values, `return`: factoring out and naming;
5. [[micropython-modules-en|Modules and `import`]] — importing `machine`, `time` and the rest, and spreading code across several files;
6. [[micropython-lire-un-programme-en|Reading a program you did not write]] — getting into unfamiliar code, and the language mechanisms that come back from one example to the next.

Once these blocks are in place, the question becomes *how to drive the hardware* (see [[micropython-gpio-en|GPIO]], [[micropython-sortie-pwm-en|PWM]], [[micropython-capteur-analogique-en|ADC]]) and then *how to structure* the code: [[micropython-programmation-non-bloquante-en|non-blocking programming]], [[machine-a-etats-en|state machines]], and the [[firmware-en|firmware]] as a whole.

## See also

- [[micropython-en|MicroPython]] — the module hub
- [[micropython-prise-en-main-en|Getting started]] — flashing and running a program, the practical prerequisite for trying the examples
- [[cpp-en|C++]] — the language of the Arduino module, worth comparing (compiled, statically typed)
- [[fonction-informatique-en|Function]] — the notion of a function in programming
- [[firmware-en|Firmware]] — structuring embedded code (cross-cutting)
