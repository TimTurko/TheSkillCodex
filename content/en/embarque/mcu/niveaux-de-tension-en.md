---
title: Logic levels
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa:
  - RA-EEE-C03-2/EEE/4
  - RA-EEE-C03-2/EEE/1
phases:
  - preuve-de-concept
  - dossier-technique
draft: false
source_fr: embarque/mcu/niveaux-de-tension.md
source_sha256: 3935b0e63b3217146bbbcb263315f9a18f6c9771e9ae2d8f5510a83eddf2b690
---

**Logic levels** are the voltage ranges by which a digital component represents a "0" and a "1". Two components can only talk to each other if the level sent by one falls inside the range expected by the other, and that is far from automatic as soon as **3.3 V** and **5 V** get mixed, the most common case on a project. Checking that levels match is one of the very first wiring reflexes: skipping it means risking a misread signal, or worse, a destroyed input.

![Two scenarios on a scale from 0 to 5 V. On the left, a "1" at 3.3 V sent to a 5 V input stays below the VIH threshold (≈ 3.5 V) and falls into the undefined zone: it is not read reliably. On the right, a "1" at 5 V sent to a 3.3 V input goes past the maximum allowed voltage (≈ 3.6 V) and risks destroying the input.](/ressources/img/niveaux-de-tension/generique.svg)

## What is it for?

A digital signal is never exactly 0 V or the supply voltage: each component guarantees **ranges**, and it is their overlap that decides whether two circuits understand each other.

On the output side, the component guarantees two thresholds: **VOL**, the highest voltage it produces for a "0", and **VOH**, the lowest voltage it produces for a "1". On the input side, it expects two others: **VIL**, below which it reads a "0", and **VIH**, above which it reads a "1". Between VIL and VIH lies an **undefined zone**, where the level read is not guaranteed.

Two components are therefore compatible if the "1" sent goes above the VIH expected, if the "0" sent stays below the VIL expected, and if the voltage sent does not go past the **maximum allowed voltage** of the receiving input. The gap between the level sent and the threshold expected (the **noise margin**) is not a luxury: it is what soaks up the noise of the circuit. Mixing 3.3 V and 5 V is precisely what breaks these conditions, in two opposite ways:

- **a "1" at 3.3 V may not be read by a 5 V input**: some 5 V inputs expect a VIH close to 3.5 V, and 3.3 V then falls into the undefined zone — the link fails silently;
- **a "1" at 5 V can destroy a 3.3 V input**: most 3.3 V pins tolerate only about 3.6 V, and 5 V over-volts them, which can burn out the pin.

The first fault costs hours of debugging. The second costs a component. Knowing how to read these thresholds, then shift them when needed, avoids both.

## How do you shift a level?

Level shifting comes in three cases, in order of preference: the best one is often the one you do not have to do.

**Check first: often, nothing to shift.** Before adding a component, read the thresholds in the [[lire-une-datasheet-en|datasheet]] on both sides. Many 5 V inputs are of the **TTL** kind, a historic logic family with low thresholds (VIH ≈ 2 V), and read a "1" at 3.3 V without trouble. Many 3.3 V pins are declared 5 V tolerant. When the ranges overlap, you wire them together directly, with no component in between. Better still: **choosing components that run on the same voltage** from the start removes the problem, a criterion to build into the choice of sensors and actuators.

**Bringing a voltage down: the voltage divider.** To bring a signal from 5 V down to 3.3 V, two resistors in a **voltage divider** are enough: you take the voltage at the midpoint, in a ratio set by the values chosen. It is the cheapest solution, buildable by hand, with three limits to know: it works in **one direction only** (down, never up), it **slows the edges** of the signal (so it is for slow signals only) and it **draws current all the time**: the divider conducts from 5 V to ground for as long as it is powered. Negligible with high values, but worth counting on battery.

> [!warning] Watch out
> A voltage divider shifts a **signal, never a supply**. Powering a 3.3 V circuit through a divider from 5 V does not work: the voltage sags as soon as the circuit draws current, and the energy goes to heat in the resistors. Distributing a supply voltage is the job of a regulator (see [[alimentation-electronique-en|Electronic power supply]]).

**Shifting both ways: the level shifter.** To bring a level **up** (3.3 V to 5 V), for a **two-way** exchange, or for a **fast bus**, you use a **level shifter**: a dedicated component, with a low-voltage side and a high-voltage side, that translates levels in both directions and on several lines at once. It is the clean solution for buses such as [[i2c-en|I2C]] or SPI, where a voltage divider will not do.

![Three fixes: the direct connection when the levels already match; the two-resistor voltage divider to bring a 5 V signal down to 3.3 V in one direction only; the level shifter, a dedicated component that shifts both ways and suits fast buses.](/ressources/img/niveaux-de-tension/adaptation.svg)

## Example — the ESP32 and a 5 V sensor

The **ESP32** is a **3.3 V** [[microcontroleur-en|microcontroller]]: all its pins think in 3.3 V. Yet a large share of common sensors and modules are built for 5 V, hence a need for shifting almost every time. Take an **HC-SR04** ultrasonic sensor, powered at 5 V, wired to an ESP32. The exchange goes both ways, and each way raises a different problem:

- the ESP32 **commands** the sensor (*Trig* pin): it sends a "1" at 3.3 V to a 5 V input. If that input is of the TTL kind, 3.3 V goes above its VIH and gets through. Otherwise, the level has to be brought up;
- the sensor **answers** the ESP32 (*Echo* pin): it sends back a "1" at **5 V** to a 3.3 V input. Here, 5 V goes past the allowed voltage of the pin — wiring it straight means risking burning it out. That signal has to be brought **down**, with a voltage divider (the signal is slow) or a level shifter.

The general rule reads off this example: **from 3.3 V to 5 V, the main risk is not being read. From 5 V to 3.3 V, the risk is destruction**. The direction of the signal sets the danger, and so the fix to put in.

## Pitfalls

**Believing a "0" is 0 V and a "1" the supply voltage.** These are guaranteed ranges (VOL/VOH on the output side, VIL/VIH on the input side), not exact values. Between the two lies a zone where nothing is guaranteed.

**Wiring 5 V to a 3.3 V input "just to see".** Most 3.3 V inputs do not tolerate 5 V: the attempt can destroy the pin, sometimes the whole chip. The danger holds just as much for an analog input: a 3.3 V [[adc-en|ADC]] pin tolerates a sensor that swings 0-5 V no better. The maximum voltage is checked on the [[lire-une-datasheet-en|datasheet]] before wiring, not after.

**Confusing supply voltage with logic level.** A module powered at 5 V does not necessarily send out 5 V signals: many breakout boards carry a regulator and I/O that are already 3.3 V compatible, and the reverse exists too. The supply is read on one line of the datasheet, the logic levels on another.

**Forgetting the common ground.** Comparing levels only means something if both components share the same ground reference (GND). With no common ground, the voltages measured stop meaning anything.

**Putting a voltage divider on a fast signal.** The divider slows the edges of the signal: it suits a slow one-way link, but it distorts a fast bus such as SPI, which calls for a dedicated shifter. As for I2C, it is not its speed that rules the divider out, it is the fact that it goes both ways (see the special case below).

**Shifting the wrong way.** A divider brings down (5 V → 3.3 V). It never brings 3.3 V up to 5 V. To bring a level up, or for a two-way exchange, only a shifter will do.

**Assuming things match without checking.** Two "5 V" components do not necessarily share the same thresholds: a TTL input (fixed thresholds inherited from the historic families, VIH ≈ 2 V) and a CMOS input (thresholds proportional to the supply, VIH ≈ 0.7 × Vsupply) differ markedly. The values are read, they are not guessed.

## Special case — Open-drain and I2C

**Open-collector and open-drain** buses (of which [[i2c-en|I2C]] is the most common case) shift levels differently. On these lines, no component actively **pushes** the high state: each one only **pulls the line down**, and a [[gpio-en|pull-up resistor]] brings the line back up to the high state at rest. The voltage of the line is then set by whatever the pull-up points to, not by the components themselves.

Practical consequence: a 3.3 V component and a 5 V component can sometimes live together on the same I2C bus pulled up to 3.3 V, if the 5 V component accepts 3.3 V as a high level. But as soon as the voltages really diverge, the clean solution is still a **two-way level shifter** meant for open-drain, which handles both lines (SDA and SCL) at once.

## See also

- [[microcontroleur-en|Microcontroller]] — the operating voltage (3.3 V or 5 V) is one of the criteria for choosing a microcontroller
- [[gpio-en|GPIO]] — pin configuration (input/output, pull-up), the direct companion to the logic level
- [[lire-une-datasheet-en|Reading a datasheet]] — where to read the VIH / VIL / VOH / VOL thresholds and the maximum allowed voltage
- [[i2c-en|I2C]] — an open-drain bus, a special case of level shifting
- [[bus-de-communication-en|Communication buses]] — UART / I2C / SPI, where matching levels comes up most often
- [[potentiometre-en|Potentiometer]] — an adjustable divider, a concrete application of the voltage divider
