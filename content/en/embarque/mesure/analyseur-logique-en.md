---
title: Logic analyzer
lang: en
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - instruments-de-mesure-en
  - bus-de-communication-en
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
source_fr: embarque/mesure/analyseur-logique.md
source_sha256: 0db90898741addb8863071a0f7fb07d1bc23581197324e29d4fba0c4eb512737
---

**The logic analyzer** watches **several digital lines at the same time** and keeps only their logic states — 0 or 1 — with timestamps. Where the [[oscilloscope-en|oscilloscope]] shows the analog shape of one or two channels, the analyzer follows eight or sixteen and can **decode protocols**: it turns the pulses of a bus into readable bytes. It is the instrument for debugging [[bus-de-communication-en|communication buses]]. This is a tool tutorial of the [[instruments-de-mesure-en|measuring instruments]] hub.

![PulseView displaying a captured and decoded I²C frame: the address and the bytes are readable above the pulses.|640](/ressources/img/analyseur-logique/pulseview-i2c-decode.png)

## What is it for?

When a sensor "does not respond", the code tells you nothing: the question is what **actually** travels on the wires. The logic analyzer is there to:

- **see for yourself** that a frame leaves and arrives — or does not: is the address sent? does the peripheral (historically the slave) answer ACK?
- **decode** a [[uart-en|UART]], [[i2c-en|I²C]] or [[spi-en|SPI]] frame into readable bytes, instead of counting edges by hand;
- **follow several synchronous lines**: the four signals of an SPI bus are watched together, which a two-channel oscilloscope cannot do;
- **compare the real timing diagram** with the expected [[chronogramme-en|timing diagram]] from the datasheet.

Interpreting the decoded frames — who talks, in what order, with which addresses — remains the business of each [[bus-de-communication-en|bus]] page: the analyzer simply makes them visible.

## Getting equipped

The project does not require a laboratory instrument. This table is there to **recognise the one you have in hand** and to know what it can do:

| Instrument | What it can do |
| --- | --- |
| **8-channel USB clone** (the "24 MHz, 8 CH" type) | eight lines sampled at up to 24 Msamples/s, far above the UART, I²C and SPI of a project; natively recognised by free software, so no proprietary driver to install |
| **PulseView** (from the free sigrok suite) | drives these clones and ships the UART / I²C / SPI decoders — this is the software described in this page |
| **Saleae Logic 8** | the professional reference: greater capture depth and a more comfortable program. When the laboratory has one, that is the one to take |

## Connect and capture

1. **GND first**: connect one ground of the analyzer to the ground of the circuit — without a common reference, the readings are meaningless.
2. **Clip the channels** onto the lines to watch: SDA + SCL for I²C, TX + RX for UART, CS + CLK + MOSI + MISO for SPI.
3. **Name the channels** in the software — "CH0" says nothing, "SDA" does.
4. **Choose the sampling rate**: at least four times the fastest signal being watched — ten times to be comfortable.
5. **Capture, then enable the decoder** for the protocol: the pulses become bytes.

![A logic analyzer wired onto an I²C bus: channels CH0 and CH1 tap the SDA and SCL lines in parallel, the ground joins the circuit ground, and the analyzer connects over USB to the PC that decodes with PulseView.](/ressources/img/analyseur-logique/branchement.svg)

## Pitfalls

**Looking for analog in it.** The analyzer slices everything into 0 / 1: a bouncing button, a slow edge, a level degraded by a track that is too long are invisible to it. It will display a beautiful square signal where the [[oscilloscope-en|oscilloscope]] would show the problem. When in doubt about the *quality* of a signal, take the oscilloscope.

**Exceeding the input voltage.** USB clones tolerate 5 V, hardly more: no measurement on a 12 V or 24 V rail without adaptation.

**Sampling too slowly.** Undersampled, a bus produces a *plausible but wrong* frame — the most treacherous error, because nothing signals the aliasing. If the decoding looks inconsistent: raise the sampling rate before suspecting the circuit.

**Forgetting the common ground.** First step of the wiring, first cause of garbage captures.

## Where it fits in the project

- **[[preuve-de-concept-en|Proof of concept]] phase** — validating the microcontroller ↔ sensor dialogue from the very first wiring: the I²C address answers, the expected bytes flow.
- **[[integration-et-tests-en|Integration and testing]] phase** — debugging the exchanges between assembled sub-systems, with frame captures as evidence for the test report → [[fiabiliser-et-deboguer-en|hardening and debugging]].

## See also

- [[instruments-de-mesure-en|Measuring instruments]] — the hub: common method and choice of instrument
- [[oscilloscope-en|Oscilloscope]] — the analog complement: the *quality* of the signal, not just its states
- [[uart-en|UART]] · [[i2c-en|I²C]] · [[spi-en|SPI]] — the protocols the analyzer decodes
- [[chronogramme-en|Timing diagram]] — reading what the analyzer displays
- [[wokwi-en|Wokwi]] — its virtual logic analyzer, to capture a **simulated** bus before wiring anything
