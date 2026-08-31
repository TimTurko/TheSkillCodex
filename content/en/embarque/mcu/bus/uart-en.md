---
title: UART
lang: en
type: notion
tags:
  - eee
  - notion
prerequis:
  - bus-de-communication-en
aa: []
phases: []
draft: false
source_fr: embarque/mcu/bus/uart.md
source_sha256: 81bdb46b852601c57e8c3137df039ae1286984f1ad31a52c7febaf4f432436b6
---

**UART** (*Universal Asynchronous Receiver-Transmitter*) is an **asynchronous** [[bus-de-communication-en|communication bus]]: two devices exchange data over two wires, **TX** (transmit) and **RX** (receive), crossed over to one another. With no shared clock, both sides have to agree in advance on the same **rate** (the *baud*).

![UART wiring between two boards: the TX of A goes to the RX of B, the RX of A comes from the TX of B, so the wires cross over, and the GND rails are tied together. No termination is needed at these distances.](/ressources/img/uart/branchement.svg)

## How does it work?

Each byte is framed by a **start bit** and one or more **stop bits**. It is that frame which lets the receiver lock onto the stream without a shared clock. The link is **point-to-point**, meaning **two devices and no more**, by construction: a single pair of devices per link, with no addressing. That simplicity is paid for in extensibility. Talking to several peripherals takes as many UART links, or a different bus.

## On the wire

![Timing diagram of a UART frame: the line idles high, the start bit goes low, eight data bits follow from least significant to most significant, the stop bit goes high, and the line returns to idle. Each bit lasts the inverse of the rate.](/ressources/img/uart/chronogramme.svg)

The line idles high. The **start** bit, a low bit, warns the receiver, which begins counting. Each bit lasting exactly 1 ÷ rate, the receiver samples the line in the middle of every interval to read the 8 data bits, least significant first, then checks the **stop** bit. Everything rests on that counting, which is why a mismatched rate produces unreadable characters.

This is the bus of the **debug console**, often through a USB-to-serial bridge back to the PC, and of many standalone modules: GPS, Bluetooth, radio modules. Putting it to work is covered in [[arduino-uart-en|UART on Arduino]] for Arduino, [[esp32-uart-en|UART on the ESP32]] for the ESP32 and [[micropython-uart-en|UART in MicroPython]] for MicroPython.

## Pitfalls

**Wiring TX to TX.** The classic first-connection mistake: joining transmit to transmit and receive to receive. Nothing burns, nothing flows, and the hunt goes on for a long while. TX talks, RX listens, so **the wires cross over**.

**Mismatched rate.** If the two sides are not set to the same baud, the characters received are unreadable. The rate is set identically on both sides before any exchange.

**Forgetting the common ground.** As with any link, TX and RX only mean something if both devices share the same ground reference (GND).

## See also

- [[bus-de-communication-en|Communication bus]] — hub: where UART sits next to I2C and SPI
- [[arduino-uart-en|UART on Arduino]] · [[esp32-uart-en|UART on the ESP32]] · [[micropython-uart-en|UART in MicroPython]] — putting it to work, family by family
- [[i2c-en|I2C]] — a synchronous alternative for several devices
- [[spi-en|SPI]] — a fast synchronous alternative
- [[niveaux-de-tension-en|Logic levels]] — TX and RX to adapt between a 3.3 V device and a 5 V one
