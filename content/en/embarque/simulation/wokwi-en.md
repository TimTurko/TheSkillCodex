---
title: Wokwi
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - simulation-electronique-en
  - arduino-prise-en-main-en
aa:
  - RA-PROJET-C03-3/PROJ/5
phases:
  - preuve-de-concept
draft: false
source_fr: embarque/simulation/wokwi.md
source_sha256: da9273f1b2fb61999c142b67a250f2e83c4e0b265fc6eda41d6f08856df20589
---

**Wokwi** (`wokwi.com`) is an online simulator for **microcontroller** boards — Arduino, ESP32, Raspberry Pi Pico, STM32 — with a large catalogue of sensors, displays and modules. You **write the code and simulate the circuit** together, with no hardware at all: the LED blinks, the sensor returns a value, the serial monitor scrolls, and all of it in the browser. It is the companion to [[tinkercad-en|Tinkercad]], richer in parts and in boards, notably the [[esp32-en|ESP32]] and wireless, where Tinkercad stops at the Arduino world. Boards in the [[xiao-esp32-s3-en|XIAO]] form factor (C3, S3, C6) are there too: they carry the **same SoC** as the boards of the [[esp32-en|ESP32]] module, so the code transfers as it stands, and only the pinout changes. This page is a tool tutorial belonging to the [[simulation-electronique-en|circuit simulation]] hub.

## What is it for?

Wokwi is there to **check a microcontroller circuit before the hardware**:

- **test the code on the simulated circuit** — check that a program really does read a sensor or drive an actuator, without waiting for the board or risking a part.
- **prototype ESP32 and wireless work.** Wokwi simulates the ESP32 and some Wi-Fi scenarios, which are out of Tinkercad's reach.
- **simulate in [[micropython-en|MicroPython]].** The Pico and the ESP32 can also be programmed in MicroPython or CircuitPython, not only in C++: it is the simulator the MicroPython module settles on, see [[micropython-simulation-en|simulating a Pico]].
- **share with a single link.** A Wokwi project goes out as a URL, which is handy for asking for help or for showing a circuit to the team.

It is a [[preuve-de-concept-en|proof of concept]] tool: it validates the **logic** of the program and of the wiring. It does not spare you the pass on real hardware (see *Pitfalls*).

## Getting started

We run through a first complete project here (an ESP32 that says hello over the serial link) so as to install the moves of the tool before wiring anything at all.

### 1. Choose a board

The `wokwi.com` home page offers four families: **Arduino** (Uno, Mega, Nano), **ESP32**, **STM32** and **Pi Pico**. Take the ESP32.

![Wokwi home page, Simulate with Wokwi Online section, with the four board families on offer: Arduino Uno-Mega-Nano, ESP32, STM32 and Raspberry Pi Pico.|600](/ressources/img/wokwi/choix-du-microcontroleur.png)

### 2. Choose a starter template

Wokwi then offers **starter templates**: an empty project for each chip variant (ESP32, S2, S3, C3, C6, H2) and a few ready-made boards, among them the **XIAO ESP32-C3**, which incidentally proves that the XIAO form factor really is simulated. To begin with, the empty ESP32 template is enough.

![Wokwi Starter Templates screen: nine project tiles, among them ESP32, ESP32-S2, ESP32-S3, ESP32-C3, ESP32-C6, ESP32-H2, ESP32-S3-BOX-3, M5Stack Core S3 and XIAO ESP32-C3.|600](/ressources/img/wokwi/selection-du-template.png)

### 3. Write the code

The editor opens `sketch.ino` (the same file as an [[arduino-en|Arduino]] sketch) with, beside it, the `diagram.json` tab that describes the wiring and a **Library Manager** for the [[bibliotheque-en|libraries]].

```cpp
void setup() {
  Serial.begin(115200);              // opens the serial link at 115 200 baud
  Serial.println("Hello, ESP32!");   // sends the message once, at start-up
}

void loop() {
  delay(10);                         // nothing to do here: the pause eases the simulation
}
```

![Wokwi code editor, sketch.ino tab, showing the Hello ESP32 program: Serial.begin at 115200 and Serial.println in setup, a delay of 10 milliseconds in loop.|560](/ressources/img/wokwi/editeur-code-hello.png)

### 4. Look at the schematic

For the moment the schematic area holds nothing but the board: this program drives no pin at all, it speaks only over the simulated USB.

![Wokwi schematic area holding nothing but the ESP32 board, with no part and no wire.|560](/ressources/img/wokwi/editeur-schema-hello.png)

### 5. Run the simulation

The run button compiles, then executes. Two outcomes: the build succeeds and the board starts, or it fails, and the message then points at **the offending line**, exactly as in the Arduino IDE (see [[cpp-logs-en|reading compiler errors]]).

![Wokwi interface during the build phase, with the build-in-progress indicator.|560](/ressources/img/wokwi/compilation-en-cours.png)

### 6. Read the serial monitor

The message appears, preceded by the **boot log of the chip**, those `rst:0x1`, `mode:DIO`, `load:0x...` lines the ESP32 spits out at every reset. It is not an error: it is the bootloader talking, and it is the bootloader that imposes the 115 200 rate (see [[esp32-arduino-core-en|the ESP32 Arduino core]]).

![Wokwi serial monitor showing the ESP32 boot log (rst, configsip, mode DIO, load and entry lines) followed by the message Hello, ESP32!|600](/ressources/img/wokwi/moniteur-serie-hello.png)

Wokwi also carries a **virtual logic analyzer**: you put your channels on the wires of a simulated bus, you capture, and you read the frames back as you would with a real [[analyseur-logique-en|logic analyzer]] — enough to check an [[i2c-en|I²C]] or [[uart-en|UART]] exchange before anything has been wired at all.

## Example — Blinking an LED

The previous program touched no pin. We now add a real circuit: the blinking LED, first reflex of every start on a microcontroller.

1. **Add the parts.** The `+` button of the schematic area opens the catalogue: take an **LED** and a **resistor** from it.

![Wokwi add-a-part menu, Basic category, listing LED, Pushbutton, Pushbutton 6mm and Resistor.|440](/ressources/img/wokwi/ajouter-composant-blink.png)

2. **Wire it.** **GPIO23** goes to the resistor, the resistor to the anode of the LED, and the cathode comes back to the **GND** of the board. This is the circuit you would build identically on real hardware — to find out which pins are free and which to avoid, see [[esp32-gpio-en|configuring the GPIO]].

![Wokwi schematic of an ESP32 board with a wire running from pin 23 to a resistor, the resistor to the anode of a red LED, and the cathode of the LED tied to the GND pin.|340](/ressources/img/wokwi/schema-blink.png)

3. **Write the code.** The program needs only two moves: declare the pin as an output, then alternate the two levels.

```cpp
void setup() {
  pinMode(23, OUTPUT);       // pin 23 becomes an output
}

void loop() {
  digitalWrite(23, HIGH);    // turns the LED on
  delay(1000);               // waits one second
  digitalWrite(23, LOW);     // turns the LED off
  delay(1000);               // waits one second
}
```

![Wokwi code editor showing the blink program: pinMode on pin 23 as an output in setup, then digitalWrite HIGH, delay 1000, digitalWrite LOW, delay 1000 in loop.|360](/ressources/img/wokwi/editeur-code-blink.png)

4. **Run it and compare with what you expected.** The LED should light for one second and go out for one second. If it stays dark, it is the wiring — pin number, direction of the LED, or a forgotten ground. If the rhythm is wrong, it is the `delay`. The diagnosis is made **without touching the hardware**, and the reasoning is the same as on the bench.

What Wokwi brings: you validate the **code** ([[cpp-en|C++]]) and the **circuit** together before soldering or ordering anything at all. What follows — reading an analog sensor, driving a [[pwm-en|PWM]] output, talking on a bus — is prototyped the same way, by taking up the circuits of the [[esp32-en|ESP32]] module.

## Pitfalls

**Simulation ≠ reality.** Wokwi simulates the logic, not the electrical detail: real currents, rise times, button bounce or sensor noise are not all reproduced. A circuit that works under Wokwi still has **to be checked on hardware**.

**Believing every part is available.** The catalogue is broad but not exhaustive: an exotic sensor may be missing, or only partly modelled. Check that the key part of the project really is simulated before building everything on top of it.

**Neglecting real constraints.** The simulator sometimes lets through a wiring that real hardware would not forgive — typically a 5 V signal on a 3.3 V [[esp32-en|ESP32]] pin. Wire in Wokwi as you would wire for real.

**Forgetting the pass on hardware.** Wokwi saves time upstream, but the code will still have to be **uploaded and re-checked** on the physical board: this is a proof-of-concept step, not the end of the road.

## See also

- [[simulation-electronique-en|Circuit simulation]] — the hub: method and reading of results
- [[tinkercad-en|Tinkercad]] — the equivalent on the beginner Arduino side, with no ESP32
- [[esp32-en|ESP32]] — the family Wokwi simulates, wireless included
- [[xiao-esp32-s3-en|XIAO ESP32-S3]] — same SoC, simulated too (C3, S3, C6 variants)
- [[esp32-gpio-en|Configuring ESP32 GPIO]] — which pins are free, which to avoid; same question [[arduino-gpio-en|on the Arduino side]] and [[micropython-gpio-en|on the MicroPython side]]
- [[micropython-simulation-en|Simulating a Pico in MicroPython]] — the same tool, on the MicroPython side
- [[analyseur-logique-en|Logic analyzer]] — the hardware counterpart of Wokwi's virtual analyzer
- [[cpp-en|C++]] — writing the code the simulation runs
- [[niveaux-de-tension-en|Logic levels]] — respecting 3.3 V / 5 V, even in simulation
