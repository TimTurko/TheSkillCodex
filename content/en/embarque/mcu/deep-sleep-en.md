---
title: Deep sleep
lang: en
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa: []
phases: []
draft: false
source_fr: embarque/mcu/deep-sleep.md
source_sha256: 507724b0c6e0fe2f074ad4db5db97b47d0dc48b5af3ca81ab358d3ae1c2f84b9
---

**Deep sleep** is a **low-power mode** of a [[microcontroleur-en|microcontroller]]: the core, the fast clocks and most of the peripherals are switched off, leaving nothing but a residual draw of a few microamps, until a **wake-up** triggered by a timer or by an outside event. That wake-up is, mechanically, an [[interruption-en|interrupt]].

![Square-wave consumption profile: brief active peaks of a few tens of milliamps separated by long floors of a few microamps in deep sleep; the average, dashed in amber near the bottom, is what sets the battery life.](/ressources/img/deep-sleep/profil.svg)

## What is it for?

It is the decisive lever for a **battery-powered** object, and it is an enormous lever, because three orders of magnitude separate the two states: an ESP32 active over Wi-Fi draws **80 to 240 mA**, the same one in deep sleep comes down to around **10 µA**. A ratio of the order of ten thousand. Alternating brief active phases with long phases of sleep does not "scrape together" a little battery life, then: it **moves it into another category**, from the order of a day to the order of a year on the same battery (the arithmetic is in the example below).

This is what explains its natural pairing with frugal links such as [[ble-en|BLE]] or [[lora-en|LoRa]]: the object sleeps, wakes to measure and transmit, and goes back to sleep. The object's **current budget** is then reckoned on the *average* consumption, not on the active one *(→ concept page [[alimentation-electronique-en|Designing a power supply]])*.

## How does it work?

Four ideas structure the mechanism.

1. **A gradation of modes, not a switch.** Between "everything on" and "everything off", microcontrollers offer intermediate steps: **light sleep** (the core stops but the state is kept, and waking is near-instant), **deep sleep** (almost everything is cut, consumption in µA), and sometimes an ultimate notch (*hibernation*) that cuts further still. The deeper the mode, the lower the consumption, and the more the wake-up costs in time and in lost state.
2. **A small domain stays powered.** In deep sleep, not everything is dead: an ultra-frugal island (often called the **RTC domain**) keeps a slow clock running, along with the wake-up controller and, on some families, a few kilobytes of **RTC memory** that survive the sleep. It is this night watchman that draws the famous microamps, and it is the one that will switch the rest back on.
3. **Wake-up sources are armed before going to sleep.** Two main families: the **timer** (the slow clock of the RTC domain comes due — the case of the periodic sensor, cousin of the [[timer-en|Timer]]) and the **outside event** (a level or an edge on a pin provided for it — button, detector). Some families add touch or coprocessor wake-ups. The wake-up **is an interrupt**: you configure its source exactly as you arm an [[interruption-en|interrupt]], then you call the sleep function.
4. **Going to sleep is an explicit act.** The program prepares the state to be saved, arms the wake-up source, then calls the sleep function — and execution stops there.

## Waking is not resuming — it is (often) a restart

That is the surprise of the first attempt, and it depends on the family. On the **ESP32**, coming out of deep sleep is a **reset**: the program starts again **from the beginning** (the setup function runs afresh), the RAM is lost, and only the data explicitly placed in **RTC memory** survives. A dedicated function lets you find out *why* you woke up (timer? pin?). On **AVR** (the classic Arduino), by contrast, waking **resumes execution** at the instruction following the sleep call, with the state intact.

The consequence is architectural: a deep-sleep program written "ESP32 style" is not a loop that dozes off now and then, but a **cycle of wake up → identify the cause → act → go back to sleep**, where the persistent state lives in RTC memory or in [[memoire-en|storage]], a piece of [[firmware-en|firmware]] structuring in its own right. Putting it to work: [[esp32-deep-sleep-en|Deep sleep on the ESP32]] for the ESP32, [[arduino-deep-sleep-en|Putting an Arduino to sleep]] for Arduino, [[micropython-deep-sleep-en|Putting a Pico to sleep]] for MicroPython.

## Example — The battery-powered probe

A probe measures and transmits for **2 seconds every 10 minutes** (active consumption ~80 mA), and sleeps the rest of the time (~10 µA). Its average consumption comes to:

(80 mA × 2 s + 0.01 mA × 598 s) ÷ 600 s ≈ **0.28 mA**

On a 2000 mAh battery: 2000 ÷ 0.28 ≈ 7200 hours, that is **about 10 months**. The same probe **with no sleep** would flatten the battery in 2000 ÷ 80 = 25 hours, that is **a day**. Same cycle, same hardware: sleep alone separates the disposable object from the autonomous one. And the arithmetic shows where to act: shortening the active phase (grouping the transmissions, avoiding a Wi-Fi reconnection at every wake-up) weighs more here than shaving a few µA off the floor.

## Pitfalls

**Measuring the chip, deploying the board.** The ~10 µA are those of the *chip*. A **development board** adds a power LED, a linear regulator and a USB interface that all draw current permanently. The real floor climbs back towards the mA, and battery life collapses (with a floor of 1 mA, the probe in the example drops back to ~2 months). Real low power calls for a board designed for it, or for a bare chip.

**Forgetting the external peripherals.** The microcontroller sleeps, but the sensor, the radio module or the measurement divider wired to the rail carry on drawing current. You have to **cut their supply** too — a control pin, a transistor — otherwise they are the ones setting the floor.

**Believing the program picks up where it was.** Depending on the family, waking is a restart (see above): any state not saved to RTC memory is lost, and code written as a plain loop behaves strangely.

**Underestimating the cost of waking.** Waking is not free: start-up, stabilisation, and above all **network reconnection** (a Wi-Fi link renegotiates in seconds, at full power). Wake-ups that come too often can consume more than staying awake: space the cycles out and group the transmissions.

**Debugging in the dark.** During sleep the serial console is silent and the board can look dead. A very short sleep cycle can even get in the way of re-uploading. While developing: trace on waking, keep a long cycle, and provide a way to force the board awake.

## See also

- [[interruption-en|Interrupt]] — the mechanism behind waking (the source is armed like an interrupt)
- [[timer-en|Timer]] — waking on a deadline, cousin of the timer overflow
- [[esp32-deep-sleep-en|Deep sleep on the ESP32]] — putting it to work (RTC memory, wake-up causes)
- [[arduino-deep-sleep-en|Deep sleep on Arduino]] — the AVR sleep modes in practice
- [[micropython-deep-sleep-en|Deep sleep in MicroPython]] — the same mechanics for MicroPython
- [[alimentation-electronique-en|Power supply]] — the current budget that sleep transforms
- [[ble-en|BLE]] — a low-power link, the natural complement to deep sleep
- [[lora-en|LoRa]] — remote battery-powered sensors, the same battery-life constraints
- [[microcontroleur-en|Microcontroller]] — the chip that offers the sleep modes
