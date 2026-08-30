---
title: The potentiometer
type: notion
tags:
  - eee
  - notion
prerequis: []
aa: []
phases:
  - preuve-de-concept
draft: false
source_fr: embarque/mcu/potentiometre.md
source_sha256: 3a1374067eef176e6640223199c230b8f8c7c434e886ae2c05d793ac4b219a26
---

A **potentiometer** is a resistor with a wiper: a resistive track along which a moving contact (the **wiper**) picks off an adjustable fraction of the voltage applied across its two ends, in other words an **adjustable voltage divider**.

![A potentiometer from three angles: on the left the real component (pins 1 VCC, 2 OUT, 3 GND), in the middle its electrical symbol (a resistor with a wiper on the output), on the right its mechanical diagram (an arc-shaped resistive track and a moving wiper).|640](/ressources/img/potentiometre/how-potentiometer-works.webp)

## What is it for?

It is the simplest **manual adjustment** on a project: a value you turn and the program reads. It serves as a **setpoint input** (fixing a threshold, a speed, a brightness, an angle), as a **calibration** knob turned by hand, or as an **adjustable voltage divider** on a bench. Its output is a DC voltage, read by the board's [[adc-en|analog-to-digital converter]] (`analogRead()`).

## How does it work?

Three pins: the **two ends** of the resistive track (wired between `+5 V` and `GND`) and the **wiper** in the middle (the output). The wiper position sets the ratio of the [[niveaux-de-tension-en|voltage divider]]: the output voltage varies continuously from 0 V (wiper on the GND side) to the supply voltage (wiper on the `+5 V` side).

The **taper** can be:

- **linear (B).** The voltage follows the rotation proportionally. This is the usual case for a setpoint.
- **logarithmic (A).** The voltage varies little at first then quickly (or the other way round); designed for audio volume, modelled on the response of the ear.

## Shapes and variants

- **Rotary** (a knob), **linear/slider** (a fader), **trimmer** (a one-off adjustment made with a screwdriver, then left alone).
- **Rheostat versus potentiometer**: wired on **two wires** (one end plus the wiper), it is a plain **variable resistor** (a rheostat). Wired on **three wires**, it is a **divider** that outputs a voltage. To read a setpoint on an ADC, the three wires are the ones you want.

## Pitfalls

**An unwired end means a floating wiper.** If only one end is connected, the output is no longer a defined divider: the reading drifts. Wire both ends (VCC and GND).

**It is not a power controller.** A potentiometer divides a voltage *unloaded* (into the high-impedance input of an ADC). Running the current of a load through it heats and destroys the track (to drive power, see [[pwm-en|PWM]] and an output stage).

**A log taper read as linear.** An audio potentiometer (A) gives a variation that is not proportional to the angle: surprises are guaranteed if the code expects a linear one. Choose a **linear (B)** model for a setpoint.

**A worn contact.** An old potentiometer produces **value jumps** as it is turned (dust, track wear). Filter the reading or replace the component.

## See also

- [[arduino-capteur-analogique-en|Reading an analog sensor]] — reading it on Arduino (wiring, conversion) or [[micropython-capteur-analogique-en|in MicroPython]]
- [[adc-en|ADC]] — what turns the wiper voltage into a number
- [[niveaux-de-tension-en|Logic levels]] — the voltage divider principle
- [[arduino-sortie-pwm-en|Driving a PWM output]] — the potentiometer as an intensity or speed setpoint ([[micropython-sortie-pwm-en|MicroPython version]])
- [[arduino-servomoteur-en|Driving a servo]] — the potentiometer as a speed or position setpoint ([[micropython-servomoteur-en|MicroPython version]])
- [[arduino-moteur-cc-en|Driving a DC motor]] — the potentiometer as a speed setpoint ([[micropython-moteur-cc-en|MicroPython version]])
