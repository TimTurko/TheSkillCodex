---
title: ADC
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa: []
phases: []
draft: false
source_fr: embarque/mcu/adc.md
source_sha256: 6a4f037bc8c9cf4f48add2c7086fa0dc731fef8e181ad89d49eed84754a88a5d
---

An **ADC** (*Analog-to-Digital Converter*) is the peripheral that **turns an analog voltage into a number** the program can work with, for instance the voltage a temperature sensor or a potentiometer delivers. Its **resolution**, in bits, sets how fine the measurement is: the higher it goes, the more voltage steps can be told apart.

![Quantisation: a continuous analog signal (grey curve) is rounded by the ADC to the nearest step (amber staircase); one step is worth the reference voltage divided by 2 to the power n.](/ressources/img/adc/quantification.svg)

## What is it for?

Without an ADC, a [[microcontroleur-en|microcontroller]] senses nothing but on or off on its [[gpio-en|logic pins]]. The ADC is what gives it access to the **continuous quantities** of the real world. Every analog sensor reading goes through it.

## In practice

The conversion refers the voltage read to the **reference voltage** (full scale, often the supply: 5 V on an Uno, 3.3 V on an ESP32) and cuts it into **2ⁿ steps**: 10 bits gives 1024 values (one step ≈ 5 mV on 5 V), 12 bits gives 4096. Two pitfalls here. **Going past full scale**: beyond the reference the reading saturates, and a 5 V sensor wired to a 3.3 V ADC threatens the pin itself *(→ concept page [[niveaux-de-tension-en|Logic levels]])*. **Confusing resolution with accuracy**: more steps does not mean a truer measurement. The ESP32's 12-bit ADC, notoriously non-linear, is the illustration *(→ concept page [[precision-de-mesure-en|Accuracy, trueness, precision]])*. Reading one in practice: [[arduino-capteur-analogique-en|Reading an analog sensor]] for Arduino, [[micropython-capteur-analogique-en|Reading an analog sensor]] for MicroPython.

## See also

- [[microcontroleur-en|Microcontroller]] — the chip that carries the ADC
- [[arduino-capteur-analogique-en|Analog sensor (Arduino)]] — analog reading in practice
- [[micropython-capteur-analogique-en|Analog sensor (MicroPython)]] — the same mechanics for MicroPython
- [[entree-sortie-en|Input and output]] — the family of peripherals the ADC belongs to
- [[filtrage-en|Filtering measurements]] — damping the noise on a converted reading, and what it costs in responsiveness
- [[dac-en|DAC]] — the converter the other way round: producing a real analog voltage
- [[pwm-en|PWM]] — the output counterpart: metering a command rather than reading a measurement
- [[precision-de-mesure-en|Measurement accuracy]] — resolution, trueness, precision: not to be confused
