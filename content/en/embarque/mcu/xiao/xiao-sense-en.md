---
title: XIAO ESP32-S3 Sense
type: notion
phases:
  - concept
tags:
  - eee
  - notion
  - xiao
prerequis:
  - xiao-esp32-s3-en
aa: []
draft: false
source_fr: embarque/mcu/xiao/xiao-sense.md
source_sha256: c692eabdab2e27cabdd14f8930edb5614eb9b4b5d90e0643ab19d2f66c2ef0c5
---

The **XIAO ESP32-S3 Sense** is the "sensors" variant of the [[xiao-esp32-s3-en|XIAO ESP32-S3]]: on the same stamp-sized form factor, it adds a **camera**, a **digital microphone** and a **microSD reader**, carried by a small expansion board that clips onto the **B2B** connector. It is the board for **embedded vision and audio**, and for a first taste of **AI on a microcontroller** (TinyML). Everything that holds for the XIAO ESP32-S3 — pinout, [[xiao-alimentation-en|power]], [[xiao-prise-en-main-en|getting started]] — applies here. This page covers **only what the Sense adds**.

## What the Sense adds

![The XIAO ESP32-S3 connected through the B2B connector to the three Sense peripherals: an OV3660 camera on a parallel DVP plus an I²C control bus, a PDM microphone on GPIO42 and GPIO41, a microSD reader on the SPI bus D8 D9 D10.|640](/ressources/img/xiao-sense/peripheriques.svg)

Three peripherals, connected through the **B2B connector**, which also exposes **2 more GPIOs** (D11 = GPIO42, D12 = GPIO41). But beware: those two are **reserved for the microphone by default**. To get them back you have to cut the J1/J2 jumper on the expansion board, and you **then lose the microphone**. The Sense is dense: every pin already does something.

And the **PSRAM (8 MB)** stops being a luxury: it is what holds the camera's **frame buffer**.

## The camera

Historically an **OV2640** (1600 × 1200), today an **OV3660** (2048 × 1536). The OV2640 has been discontinued. The **OV5640** module is compatible too, and the Seeed example code works for all three. The sensor is **detachable**.

Two consequences to keep in mind:

- **It eats pins.** The link is a **parallel DVP**: a dozen internal GPIOs (image data, pixel/line/frame clocks) plus a small [[i2c-en|I²C]] control bus (SCCB). That is the other reason so few pins are free.
- **PSRAM is mandatory.** A 2 Mpx image does not fit in the internal RAM: the **framebuffer** lives in PSRAM. Without PSRAM enabled in the IDE, camera initialisation fails.

On the electrical side, while capturing, the assembly draws **~350 mA peak** at 5 V (for ~140 mA on average in video streaming): plan for solid [[xiao-alimentation-en|power]], and for prolonged use the **heatsink** offered by Seeed (the chip heats up fast with the camera).

## The microphone and the microSD card

- **Digital microphone (PDM)** — clock on **GPIO42**, data on **GPIO41** (the D11/D12 of the B2B). Ideal for sound or keyword detection.
- **microSD reader** (up to 32 GB, FAT). It **shares the board's [[spi-en|SPI]] bus** (SCK/MISO/MOSI = **D8 / D9 / D10**) with a chip select line (CS). That line is **GPIO21**, the pin of the **user LED**: on a Sense, the Blink from getting started and the SD reader fight over the same pin. Adding another SPI peripheral means managing the chip selects. The expansion board even has a jumper (J3) to switch between **free SPI** and **SD card**.

Worth keeping in mind: on the Sense, **microphone or D11/D12**, and **SD or SPI for something else**. Work out which peripheral takes which pins before wiring anything.

> [!warning] The Sense does not sleep like a bare XIAO
> The **14 µA** of deep sleep quoted for the XIAO ESP32-S3 do **not** hold for a fitted Sense. Seeed measurements, in deep sleep: **~64 µA** for the expansion board alone, **~1.1 mA** with the SD card, **~3.0 mA** with the camera, **~4.0 mA** with both. That is a factor of **200 to 280** on battery life. The same cell that would last years on a bare XIAO lasts a few days here. On a battery-powered object, **detaching the unused sensor** is the only really effective lever. See [[xiao-alimentation-en|power]].

## Vision and embedded AI (TinyML)

The ESP32-S3 has **vector instructions** that speed up inference on small neural networks: the Sense is a concrete way into **TinyML** — recognising images, sounds or gestures directly on the board.

The tooling, however, is **outside this wiki**: Seeed's **SenseCraft** platform (training and deploying models, no code) and **Edge Impulse** (a full TinyML pipeline) take over from there, and the ebook *XIAO: Big Power, Small Board — Mastering Arduino and TinyML* serves as a guide. *We point at these resources without developing them: embedded AI is beyond the scope of the tutorial.*

## See also

- [[xiao-esp32-s3-en|XIAO ESP32-S3]] — the board's hub (pinout, variants, use)
- [[xiao-alimentation-en|XIAO — power]] — the camera is greedy, size accordingly
- [[spi-en|SPI]] — the bus shared with the microSD card
- [[i2c-en|I²C]] — the camera's control bus (SCCB)
- [[xiao-prise-en-main-en|XIAO — getting started]] — flash the board before anything else
