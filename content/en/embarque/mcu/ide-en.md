---
title: IDE
lang: en
type: notion
tags:
  - eee
  - mcu
  - notion
prerequis: []
aa: []
draft: false
source_fr: embarque/mcu/ide.md
source_sha256: 7143e815fd1b8dc1d646430f490a501e622540bdf85c0c07f2c46923211b085b
---

An **IDE** (*Integrated Development Environment*) gathers into a single piece of software everything needed to program a [[microcontroleur-en|microcontroller]]: a code editor, a compiler (or a build chain), uploading to the board, and often a serial monitor to watch the program run.

## What the IDE takes care of

Without an IDE, programming an embedded target would mean chaining compilation, linking, conversion and flashing by hand. The IDE hides that chain behind two buttons ("Verify" / "Upload") and handles the choice of board, port and libraries. It usually includes a **[[bibliotheque-en|library]] manager** and a **board manager** that installs support for a new microcontroller family.

![The Arduino 2.x IDE window annotated in red: the Verify and Upload buttons at the top left, the board selector in the middle, the serial monitor icon at the top right, and the code editing area in the centre of the window.|640](/ressources/img/ide/interface-annotee.png)

**Compiling and uploading do not ask for the same thing.** Choosing a board is enough to compile. You also need **a port** to send the program into it (see [[cpp-execution-en|how a program runs]]). The IDE says so itself in its selection box, which lists the installed boards on one side and the detected ports on the other.

![The Select Other Board and Port box of the Arduino 2.x IDE: on the left the list of installed boards with its search field, on the right the list of detected serial ports, and at the top the sentence reminding that a board alone allows compiling but not uploading.|600](/ressources/img/ide/selecteur-carte-port.png)

## Which one for which target

Every family has its reference environment: the [[arduino-en|Arduino IDE]] and PlatformIO for the Arduino ecosystem and the [[esp32-en|ESP32]], STM32CubeIDE for [[stm32-en|STM32]], Thonny for MicroPython. The choice of IDE is not neutral: it drives how easily a project starts, how rich the debugging is, and how portable the project is from one machine to another. Installing and using one step by step belongs to each family tutorial: [[arduino-prise-en-main-en|Getting started with Arduino]], [[micropython-prise-en-main-en|Getting started with MicroPython]]…

## See also

- [[microcontroleur-en|Microcontroller]] — the target the IDE programs
- [[bibliotheque-en|Library]] — managed from the IDE
- [[firmware-en|Firmware]] — the binary the IDE produces and uploads
- [[arduino-prise-en-main-en|Getting started with Arduino]] — installing and using the IDE step by step (screenshots)
