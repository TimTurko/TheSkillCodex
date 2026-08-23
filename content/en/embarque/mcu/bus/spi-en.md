---
title: SPI
type: notion
tags:
  - eee
  - notion
prerequis:
  - bus-de-communication-en
aa: []
phases: []
draft: true
source_fr: embarque/mcu/bus/spi.md
source_sha256: 7da64a78efb72fdb1249a5931e413af33569cf7bc33c3b49926302bcc8c8600c
---

**SPI** (*Serial Peripheral Interface*) is a fast **synchronous** [[bus-de-communication-en|communication bus]] running on four wires: **MOSI** and **MISO** (the data in each direction), **SCK** (the clock) and **CS** (the select). One device acts as the **controller** (historically called the master) and talks to one peripheral at a time, activating it by pulling that peripheral's dedicated **CS** line low. The exchange is **full-duplex**, the controller sending and receiving at the same time.

![SPI wiring: one controller and two peripherals. The three wires MOSI, MISO and SCK are shared in a single bundle, each peripheral gets its own CS line, and the GND rails are tied together.](/ressources/img/spi/branchement.svg)

## How does it work?

The three wires MOSI, MISO and SCK are **shared** by every device. Each peripheral, on the other hand, gets its own **CS** line: adding a device means adding a select wire. There is no addressing, then. The controller picks who it talks to through the CS pin it pulls low. **How many peripherals, at most?** The protocol imposes no limit, and the ceiling is the **number of CS pins available** on the controller, which is to say the [[gpio-en|GPIO]] budget. In return for that extra wire per peripheral, SPI offers **high throughput**, well suited to graphic displays, SD cards and converters, over **very short distances**. At that scale no termination resistor is needed.

## On the wire

![SPI timing diagram: CS goes low first, then eight SCK clock pulses, with the MOSI and MISO bytes travelling at the same time in full duplex, before CS goes back high.](/ressources/img/spi/chronogramme.svg)

The controller first pulls the targeted peripheral's **CS** low, then beats out **eight clock pulses** on SCK: on each pulse a bit leaves on MOSI **and** a bit comes back on MISO. The exchange is simultaneous, which is what full duplex means. CS goes back high at the end. Exactly when the bits are sampled depends on the **SPI mode** (clock polarity and phase, numbered 0 to 3). Putting it to work is covered in [[arduino-spi-en|SPI on Arduino]] for Arduino, [[esp32-spi-en|SPI on the ESP32]] for the ESP32 and [[micropython-spi-en|SPI in MicroPython]] for MicroPython.

## Pitfalls

**Forgetting to assert CS.** As long as a peripheral's CS line is not pulled low, that peripheral ignores the bus. An exchange without a prior select produces nothing at all.

**Adding peripherals without counting wires.** Unlike [[i2c-en|I2C]], which stacks devices onto two wires by address, SPI demands one more CS pin per peripheral: past a handful of devices, the pin budget becomes a criterion in its own right.

**Picking the wrong SPI mode.** Clock polarity and phase mismatched to the device: the wiring is right, but the data arrives shifted or empty. The mode **is read from the device's [[lire-une-datasheet-en|datasheet]]** and **set in the library**.

## See also

- [[bus-de-communication-en|Communication bus]] — hub: where SPI sits next to UART and I2C
- [[arduino-spi-en|SPI on Arduino]] · [[esp32-spi-en|SPI on the ESP32]] · [[micropython-spi-en|SPI in MicroPython]] — putting it to work, family by family
- [[i2c-en|I2C]] — a two-wire synchronous alternative, at more modest throughput
- [[uart-en|UART]] — an asynchronous, point-to-point alternative
- [[niveaux-de-tension-en|Logic levels]] — four lines to adapt between a 3.3 V device and a 5 V one
