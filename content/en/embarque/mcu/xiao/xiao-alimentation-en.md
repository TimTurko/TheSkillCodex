---
title: Powering the XIAO ESP32-S3
lang: en
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
source_fr: embarque/mcu/xiao/xiao-alimentation.md
source_sha256: ce7d97ccf949337102f7df33a563609a179408b9f570176375679e81e865bba2
---

**Powering the XIAO ESP32-S3** can be done in three ways — **USB-C**, a rechargeable **LiPo battery**, or an **external 5 V** supply — and the board carries its own **charging circuit** for the cell. This page explains how to feed it, how to recharge it safely, and above all **how long it lasts on battery** depending on what it does: it is [[deep-sleep-en|deep sleep]] that changes everything.

## Three ways to power it

![XIAO power paths: the 5V USB-C input charges the LiPo cell through the on-board charging circuit; either USB-C or the battery feeds the 3V3 regulator, which supplies up to 700 mA to the ESP32-S3.|640](/ressources/img/xiao-alimentation/paths.svg)

- **USB-C (5 V)** — the normal case: the board runs and the cell charges at the same time.
- **3.7 V LiPo battery** — soldered to the **B+ / B−** pads on the back, for untethered operation. Careful: **on battery alone, the 5V pin is dead** (no voltage to draw from it).
- **External 5 V** — possible on the 5V pin, but **through a series diode** (a Schottky for preference), **anode on the source side, cathode on the 5V side**: it prevents current from being pushed back into the USB port.

In every case, the on-board **3V3 regulator** provides the board's logic voltage and can supply up to **700 mA** for peripherals. Beyond that, a separate supply is needed.

## Recharging the cell safely

The charging circuit is **on board**: plug in USB-C and it charges. The **red LED** tells the story: it blinks while charging, goes out once the cell is full (and, with no battery connected, lights up then goes out after about 30 s).

One point matters: the **charging current is modest**, **100 mA** as announced by Seeed. A 400 mAh cell therefore takes on the order of **4 to 5 hours** to recharge, the constant-voltage end of charge always dragging on a little. Better a small cell, or some patience.

> [!warning] LiPo battery safety
> - **Polarity** when soldering: the **−** is on the **USB side**, the **+** on the opposite side. Reversing it destroys the board (or worse).
> - Use a **quality cell with a protection circuit** (PCM) against over-discharge and short circuits.
> - Never charge unattended or outside the temperature range, and never pierce or crush a LiPo cell: risk of thermal runaway.

## How long does it last on battery?

The current drawn depends entirely on what the board is doing. As an example, with a **~400 mAh** cell (at 3.8 V):

| What the board is doing | Typical current | Indicative runtime |
| --- | --- | --- |
| Wi-Fi active (transmitting) | ~100 mA | ~4 h |
| BLE active | ~85 mA | ~4 h 30 |
| awake, radio off | ~22 mA | ~18 h |
| *light sleep* | ~2 mA | ~8 days |
| **deep sleep** | **~14 µA** | **~3 years (theoretical)** |

Here is the message: in **continuous Wi-Fi**, a few hours; in **deep sleep between wake-ups**, months. The whole art of battery life is to **sleep as much as possible** and to wake only in bursts (see [[deep-sleep-en|deep sleep]] and its ESP32 implementation in [[esp32-deep-sleep-en|deep sleep on the ESP32]]).

These figures are **theoretical** (they ignore the cell's self-discharge, the regulator's own consumption and ageing): take them as orders of magnitude, not as guarantees. They apply to the **bare** XIAO: the [[xiao-sense-en|Sense]] version sleeps far less deeply (see its page).

## Reading the battery level

On the "standard" XIAO ESP32-S3, **no pin is wired internally to the battery**: all eleven GPIO are already assigned. So there is **no** way to read the cell voltage in software by default. If needed, wire **B+** yourself to a free ADC pad **through a divider** (to bring 4.2 V below the 3.3 V limit).

## See also

- [[xiao-esp32-s3-en|XIAO ESP32-S3]] — the board's hub
- [[deep-sleep-en|Deep sleep]] — the number one lever for battery life
- [[esp32-deep-sleep-en|Deep sleep on the ESP32]] — the concrete implementation
- [[alimentation-electronique-en|Power supply]] — putting numbers on a current budget
- [[niveaux-de-tension-en|Logic levels]] — why 3.3 V sometimes forces an adaptation
- [[xiao-prise-en-main-en|XIAO — getting started]] — flashing the board
