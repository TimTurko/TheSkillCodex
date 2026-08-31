---
title: Driving a digital output in MicroPython
lang: en
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-gpio-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-sortie-tor.md
source_sha256: 9bca1001a80ad0af7910c3fb2eee9b2aa430f0339aa8e3438abfc75eae79fbfe
---

An **on/off output** switches a load between two states: powered or off. Indicator LED, buzzer, power relay, fan on a transistor: all of them are driven with `Pin.value()` (or `on()`/`off()`). This page covers the three cases met in school projects: driving a small load directly (an LED), through a transistor for a medium load (buzzer, fan), through a relay board for a mains or heavily inductive load. One constraint shapes everything: the Pico runs at **3.3 V** and supplies **less current** than an Arduino.

## What is it for?

Every binary command of an actuator — lighting an indicator, opening a valve, starting a fan — goes through an on/off output. Choosing the right interface (direct pin, transistor, relay board) depends on the **current** drawn and the **supply voltage** of the load. Rule of thumb: **~12 mA and 3.3 V maximum straight off a pin** of the Pico. Beyond that, a buffer component goes in between.

## Step by step

Four steps: choose the interface, wire it, write the code, check the current budget.

### 1. Choose the interface for the load

| Load | Voltage | Current | Interface |
|---|---|---|---|
| Standard LED | 1.8–3.3 V | 3–10 mA | Direct pin + series resistor |
| Passive buzzer, small relay | 3.3–5 V | 20–100 mA | NPN transistor (2N2222, BC547) or MOSFET (2N7000) |
| Relay board (with logic input) | 3.3 V logic | < 10 mA logic | Direct pin **if the input accepts 3.3 V** (see pitfalls) |
| 12 V fan, motor, mains bulb | > 5 V | > 100 mA | Relay board or H-bridge, never straight off a pin |

We take the three usual cases: an **LED** (direct pin), a **buzzer** (transistor), a **relay board** (direct pin into the board).

### 2. Wire it

**LED**: anode (+) → 220 Ω to 1 kΩ resistor → GP8, cathode (−) → GND.

**Buzzer through an NPN 2N2222 transistor**: emitter → GND; collector → buzzer (−); buzzer (+) → +5 V (or +3.3 V); base → 1 kΩ resistor → GP9.

**Relay board**: IN of the board → GP10, VCC → +5 V (often from VBUS), GND → GND. The mains load goes **on the COM and NO terminals of the board**, and the Pico never touches it.

![Wiring of the three on/off output interfaces on the Pico: LED through a 220 Ω resistor on GP8, buzzer through an NPN 2N2222 transistor (base on GP9), relay board driven by GP10; shared +5 V (VBUS) supply and ground.|640](/ressources/img/micropython-sortie-tor/montage-relais.svg)

### 3. Write the code

The code is the same whatever the interface: `Pin.on()` does not know whether it drives an LED or a relay.

```python
from machine import Pin
from time import sleep

led    = Pin(8, Pin.OUT)        # LED on GP8 (direct pin)
buzzer = Pin(9, Pin.OUT)        # buzzer through a transistor on GP9
relais = Pin(10, Pin.OUT)       # relay board on GP10

while True:
    led.on(); buzzer.on(); relais.on()      # all active (relay often inverted, see the warning)
    sleep(2)                                 # held for 2 s
    led.off(); buzzer.off(); relais.off()    # all off
    sleep(2)                                 # 2 s, then round again
```

> [!warning]
> **Relay logic is often inverted.** Many relay boards are *active low*: `relais.off()` (0) closes the relay and `on()` (1) releases it. Check on the board or by trial: the board LED lights up when the relay closes.

### 4. Check the current budget

Before powering a new circuit, add it up: how many mA does each direct load draw? How much in total? Is the source (USB ≈ 500 mA, or the limited 3V3 pin of the Pico) enough? A Pico that reboots as soon as an actuator is switched on is almost always under-supplied — move to an external supply (on **VSYS**) or a separate one for the loads.

## Example — Alarm buzzer and blinking LED

```python
from machine import Pin
from time import sleep

led    = Pin(8, Pin.OUT)
buzzer = Pin(9, Pin.OUT)

while True:
    for i in range(3):          # one burst = 3 beeps, LED blinks along
        led.on(); buzzer.on()   # LED + buzzer ON
        sleep(0.2)              # ON for 200 ms
        led.off(); buzzer.off() # LED + buzzer OFF
        sleep(0.2)              # OFF for 200 ms
    sleep(3)                    # pause before the next burst
```

The same structure drives a relay board in place of the buzzer: only the hardware interface changes.

## Pitfalls

**A load beyond ~12 mA per pin.** The Pico supplies ~4 mA by default and ~12 mA at most — **less** than an Arduino. At the slightest doubt (buzzer, several LEDs, relay), go through a transistor.

**3.3 V into a relay board designed for 5 V.** Many relay boards expect a **5 V** logic input: 3.3 V may not be enough to trigger them reliably. Check that the board accepts 3.3 V, otherwise put a transistor (or a level shifter) in between. This pitfall belongs to 3.3 V boards such as the Pico.

**An LED with no resistor.** The LED burns out, or the pin is damaged. Always 220 Ω to 1 kΩ in series.

**Active vs passive buzzer.** An *active buzzer* sounds as soon as its voltage is applied: `on()` is enough. A *passive buzzer* does not sound on an on/off output: it needs a square wave (see [[micropython-sortie-pwm-en|PWM]]).

**An inductive load with no flyback diode.** Relay coil, motor, solenoid valve: switching off produces a voltage spike that can destroy the transistor. A **1N4007 diode reversed across the coil** absorbs it. Commercial relay boards already include one.

**Forgetting the inverted relay logic.** The relay closes although it was set to `off()`: the board optocoupler is what inverts. Read the documentation or test it.

**An on/off output for a DC motor.** A motor needs a direction and a speed: that calls for an H-bridge (see [[micropython-moteur-cc-en|driving a DC motor]]), not an on/off output.

## Special case — 230 V mains loads

Mains loads are **never driven directly** — always through a relay board or a solid state relay. Three points of care: **galvanic isolation** (boards with a `PC817` optocoupler); **contact rating** (a low-end relay is around 10 A / 250 V); **electrical safety** (230 V wiring under supervision, an upstream breaker, protected terminals).

## Where it fits in the project

- **Step 2 of the [[preuve-de-concept-en|proof of concept phase]]** — every binary actuator (indicator, buzzer, the relay of a subsystem) is validated on/off before being integrated into the control loop.
- **Step 2 of the [[integration-et-tests-en|integration and testing phase]]** — piece-by-piece validation before the pyramid of tests.

Choosing the interface (pin, transistor, relay board) up front, from the datasheets — and not after burning out the first component — is what separates a proof of concept that converges from one that drags on.

## See also

- [[micropython-en|MicroPython]] — the module hub
- [[micropython-gpio-en|Configuring MicroPython GPIO]] — prerequisite (output mode, maximum currents)
- [[micropython-entree-tor-en|Reading a digital input]] — the matching input
- [[micropython-sortie-pwm-en|Driving a PWM output in MicroPython]] — modulating the brightness of an LED or the speed of a motor
- [[lire-une-datasheet-en|Reading a datasheet]] — checking the currents and voltages of a board
- [[arduino-sortie-tor-en|Driving an on/off output (Arduino)]] — the C++ equivalent
