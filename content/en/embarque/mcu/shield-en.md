---
title: Shield
lang: en
type: notion
tags:
  - eee
  - mcu
  - notion
prerequis: []
aa: []
draft: false
source_fr: embarque/mcu/shield.md
source_sha256: d71f36b1c6f5f62ccf1f4541ee29bfdaec9b828bd39993b20b3df2a50356e6ea
---

A **shield** is an add-on board that plugs straight onto the headers of a [[microcontroleur-en|microcontroller]] board (typically an Arduino) to add a function to it — motor driving, display, sensors, communication — with no wiring at all. Not to be confused with a **module** (breakout), which does the same kind of job but is wired up with jumper leads → [[arduino-module-en|Wiring a module]] for Arduino, [[micropython-module-en|Wiring a module]] for MicroPython.

## The stacking principle

A shield reproduces exactly the header layout of the host board: it sits on top, pin on pin, and several shields can sometimes be stacked. The point is speed of prototyping: no flying leads, a mechanically solid assembly, a function added in seconds. This is one of the reasons for the success of the [[arduino-en|Arduino]] form factor, whose header layout has become a de facto standard picked up by a great many boards. On the software side, every shield comes with **its own [[bibliotheque-en|library]]**, which exposes the function without your having to know the internal wiring. Putting it to work: [[arduino-shield-en|Using a shield]] for Arduino, [[micropython-shield-en|Using a shield]] for MicroPython.

![Arduino Uno board seen from three-quarters with a shield plugged on top: the two rows of headers fit pin on pin.|480](/ressources/img/shield/empilement-uno-shield.jpg)

## Limits

A shield takes up a fixed set of pins: stacking two shields that both claim the same pin creates a **conflict** no wiring can resolve. Beyond the prototype, a shield stays bulkier and less reliable than a dedicated [[pcb-en|printed circuit board]] integrating the same function. That is the natural next step once the architecture settles.

## See also

- [[microcontroleur-en|Microcontroller]] — the host board
- [[arduino-en|Arduino]] — the reference form factor for shields
- [[bibliotheque-en|Library]] — the software counterpart of the shield
- [[arduino-shield-en|Arduino — shield]] — putting it to work in practice
- [[micropython-shield-en|MicroPython — shield]] — the same board driven from MicroPython
- [[pcb-en|PCB]] — the integrated alternative once past prototyping
