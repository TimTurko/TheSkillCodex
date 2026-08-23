---
title: I2C
type: notion
tags:
  - eee
  - notion
prerequis:
  - bus-de-communication-en
aa: []
phases: []
draft: true
source_fr: embarque/mcu/bus/i2c.md
source_sha256: 87d6d6286142da3a85616410b5a41036f54907e1f3a53d34e2325d5820fac1a7
---

**I2C** (*Inter-Integrated Circuit*) is a **synchronous** [[bus-de-communication-en|communication bus]] running on two wires: **SDA** (the data) and **SCL** (the clock), shared by every device on the bus. One device acts as the **controller** (historically called the master) and paces the exchanges. Each **peripheral** device answers to a unique **address**, which is what lets you hang several of them off the same two wires.

![I2C wiring: one controller and two peripherals hanging off the same two wires, SDA and SCL, with two pull-up resistors of about 4.7 kΩ to Vcc and the GND rails tied together.](/ressources/img/i2c/branchement.svg)

## How does it work?

Both lines work in **[[gpio-en|open collector or open drain]]**: no device ever drives the line high, each one can only **pull it low**. A **pull-up** resistor (typically ≈ 4.7 kΩ) brings the line back high when idle. This is what makes I2C unusual where [[niveaux-de-tension-en|logic levels]] are concerned: the line voltage is set by the pull-up, so a 3.3 V device and a 5 V device can sometimes share the same bus depending on the pull-up voltage chosen. That pull-up doubles as the line conditioning. There is no other termination to plan for.

Throughput is moderate and range is short, on the scale of a single board. In return, addressing lets you line up a good many sensors, displays or real-time clocks on just two wires. **How many, at most?** Seven-bit addressing offers a good hundred addresses in theory. In practice, it is the **electrical capacitance of the bus** that caps things well before that. Beyond a dozen devices, or a few tens of centimetres of wire, the edges degrade and the bus turns unstable.

## On the wire

![Simplified I2C timing diagram: the controller clocks SCL in regular pulses; on SDA, a START condition, a 7-bit address, the read/write bit, the peripheral's ACK acknowledgement, then a STOP condition.](/ressources/img/i2c/chronogramme.svg)

The controller opens with a **START** condition (SDA falls while SCL is high), sends the 7-bit **address** followed by the read/write bit, and the targeted peripheral answers with an **acknowledgement** bit (ACK). That is how you know it is actually there. Data bytes follow the same pattern (8 bits plus an ACK), through to the **STOP** condition. The SCL clock, for its part, is held by the controller from beginning to end. Putting it to work is covered in [[arduino-i2c-en|I2C on Arduino]] for Arduino, [[esp32-i2c-en|I2C on the ESP32]] for the ESP32 and [[micropython-i2c-en|I2C in MicroPython]] for MicroPython.

## Pitfalls

**Forgetting the pull-up resistors.** Without them the lines never come back high and the bus stays silent. Plenty of modules carry their own, but not all of them.

**Address collision.** Two devices sharing one address on the bus make each other unreachable. The address is worth checking on the [[lire-une-datasheet-en|datasheet]], and some devices expose a few pins to change it.

## See also

- [[bus-de-communication-en|Communication bus]] — hub: where I2C sits next to UART and SPI
- [[arduino-i2c-en|I2C on Arduino]] · [[esp32-i2c-en|I2C on the ESP32]] · [[micropython-i2c-en|I2C in MicroPython]] — putting it to work, family by family
- [[spi-en|SPI]] — a faster synchronous alternative, at the cost of one select wire per device
- [[uart-en|UART]] — an asynchronous, point-to-point alternative
- [[niveaux-de-tension-en|Logic levels]] — the open-drain special case and pull-ups on the I2C bus
