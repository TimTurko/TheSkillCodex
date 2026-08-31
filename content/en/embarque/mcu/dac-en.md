---
title: DAC
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
source_fr: embarque/mcu/dac.md
source_sha256: d54c9fb53deb96980bc01850235d5723084ed3f90ad4929e2d20fdbc661ef965
---

A **DAC** (Digital-to-Analog Converter) is the peripheral that does the opposite of the [[adc-en|ADC]]: it **turns a number into a real analog voltage**, adjustable continuously between zero and full scale. It is the output you need when the **shape of the signal** matters — generating a sound, a waveform, a setpoint for an analog stage.

## In practice

A DAC is a rare thing on microcontrollers: many have none at all (the classic Uno), and the original ESP32 offers two of them, 8 bits wide. For most control needs (speed, brightness) you do without one: [[pwm-en|PWM]] — direct or filtered — takes its place. A true DAC only becomes necessary when the signal itself has to be analog (audio, test signals). If the built-in DAC is not enough, an external DAC is driven over a [[bus-de-communication-en|bus]] (I2C or SPI).

## See also

- [[adc-en|ADC]] — the converter the other way round: reading an analog voltage
- [[pwm-en|PWM]] — the usual stand-in for a DAC when dosing a command
- [[entree-sortie-en|I/O]] — the family of peripherals
- [[microcontroleur-en|Microcontroller]] — the chip that sometimes integrates a DAC
