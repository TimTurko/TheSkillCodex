---
title: Library
type: notion
tags:
  - eee
  - mcu
  - notion
prerequis: []
aa: []
draft: false
source_fr: embarque/mcu/bibliotheque.md
source_sha256: 88540dd9b4a31272306cf1ebd7f3e9e8f3d6c2db283d3292dfdef0ea0a988904
---

A **library** is a set of code already written and packaged, which you add to your project to drive a component or a protocol through a simple interface, without rewriting the low-level code yourself.

## What is it for

Getting an [[i2c-en|I2C]] sensor to talk, printing text on an OLED display or driving a stepper motor calls for driver code that is often long and delicate (registers, timings, protocol). A library wraps that work up: you call `display.print("...")` or `capteur.lire()` without knowing the detail of the component. It is the same principle of reuse as the modules of a language, applied to hardware. It is also the normal way to use a [[shield-en|Shield]]: every add-on board comes with **its own library**, which exposes its functions.

## Installing and choosing

Most IDEs include a **library manager** that downloads them and keeps them up to date in a few clicks (see [[ide-en|IDE]]). Three habits of caution: check that the library is **maintained** (recent commits) and **compatible with the target board** (a library written for an Arduino Uno does not always work on an ESP32), and **freeze its version** on a team project so that an update does not change the behaviour halfway through. Putting it to work step by step: [[arduino-bibliotheques-en|Using a library]] for Arduino, [[micropython-bibliotheques-en|Using a library]] for MicroPython.

## See also

- [[ide-en|IDE]] — where libraries are installed from
- [[shield-en|Shield]] — the add-on board and its associated library
- [[arduino-bibliotheques-en|Arduino — libraries]] — installing and using a library in practice
- [[micropython-bibliotheques-en|MicroPython — libraries]] — the same method for MicroPython
- [[microcontroleur-en|Microcontroller]] — the target that runs the code
