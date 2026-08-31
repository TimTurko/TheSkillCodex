---
title: PWM
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
source_fr: embarque/mcu/pwm.md
source_sha256: 7859e74e13342d4f216df2229ae3329b0e5505ba1d5944f31caa2bbf40678e5f
---

**PWM** (*Pulse Width Modulation*) is a signal that is only ever **fully on or fully off**, and whose proportion of time spent high is what gets varied. That proportion is called the **duty cycle**. On average, this switching mimics an adjustable voltage without a single analog component.

![Three timing diagrams of the same PWM signal at duty cycles of 25, 50 and 75%: the signal stays fully on or fully off, while the amber dashed average rises with the proportion of time spent high.](/ressources/img/pwm/rapport-cyclique.svg)

## What is it for?

This is the usual way, from a [[microcontroleur-en|microcontroller]], to set a **motor speed**, an **LED brightness** or the position of a servo: you act on the duty cycle rather than on a genuinely variable voltage. The signal stays digital, and so is simple to generate on a pin.

## In practice

PWM has **two independent settings**: the duty cycle, which meters, and the **switching frequency**, which says how fast the signal alternates. The frequency is chosen to suit the load. Too slow and an LED **flickers**. Below ≈ 20 kHz a motor **whines** in the audible range. A servo, for its part, expects a 50 Hz signal where only the pulse width counts. And when what is needed is a **real analog voltage** rather than a switched average, filtered PWM (a simple RC filter) stands in for a [[dac-en|DAC]]. Putting it to work: [[arduino-sortie-pwm-en|Driving a PWM output]] for Arduino, [[micropython-sortie-pwm-en|Driving a PWM output]] for MicroPython.

## See also

- [[microcontroleur-en|Microcontroller]] — the chip that generates the PWM
- [[arduino-sortie-pwm-en|PWM output (Arduino)]] — putting it to work
- [[micropython-sortie-pwm-en|PWM output (MicroPython)]] — the same mechanics for MicroPython
- [[timer-en|Timer]] — inside the microcontroller, this is what produces the PWM signal and sets its frequency
- [[entree-sortie-en|Input and output]] — the family of peripherals PWM belongs to
- [[adc-en|ADC]] — the input counterpart: reading a measurement rather than metering a command
- [[dac-en|DAC]] — the real analog voltage, for when a switched average will not do
- [[chronogramme-en|Timing diagram]] — the representation that shows PWM as it actually is
