---
title: I/O
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa: []
phases: []
draft: false
source_fr: embarque/mcu/entree-sortie.md
source_sha256: fdf8ab87bd9fe59f5470730731a4104bc0487eeab9420173f204244529374ec2
---

**Inputs and outputs** (I/O) are the peripherals through which the digital core of a [[microcontroleur-en|microcontroller]] talks to the **physical world**: reading a sensor, driving an actuator, communicating with another chip. Without them, the processor would compute without ever acting or perceiving.

## What forms does it take?

I/O covers the [[gpio-en|logic pins]] (on/off), [[adc-en|analog-to-digital]] conversion (reading a voltage), [[pwm-en|PWM]] signal generation (dosing a command) and the [[bus-de-communication-en|communication buses]] (UART, I2C, SPI) for exchanging structured data. The converter the other way round (the [[dac-en|DAC]], which produces a real analog voltage) is rarer: PWM, direct or filtered, stands in for it in most cases.

## See also

- [[microcontroleur-en|Microcontroller]] — the chip that integrates the I/O peripherals
- [[gpio-en|GPIO]] — the logic input and output pins
- [[bus-de-communication-en|Communication buses]] — the I/O dedicated to exchanging data
- [[interruption-en|Interrupt]] — reacting to an input without polling it in a loop
