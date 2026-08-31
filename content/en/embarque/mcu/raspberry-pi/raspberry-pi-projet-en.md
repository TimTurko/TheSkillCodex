---
title: The SBC on a mechatronics project
lang: en
type: tuto
phases:
  - integration
tags:
  - eee
  - tuto
  - raspberry-pi
prerequis:
  - raspberry-pi-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/raspberry-pi/raspberry-pi-projet.md
source_sha256: de4b3a3347116424291c8fb0387f35b006767372e5932b1ab3950a0195dd740a
---

Bringing a **single-board computer (SBC)** into a mechatronics project means entrusting it with the **high level** — vision, decision, network, interface — while a [[microcontroleur-en|microcontroller]] holds the **real time** — timed sensors, control loops, motor commands. This split is not a compromise you put up with: it is the **most common architecture** as soon as a project asks for both heavy computation and precise control. This page shows how the two brains share the work and talk to each other, and when, conversely, the SBC is enough on its own.

![Two-brain architecture on a 3-axis arm: the Raspberry Pi handles vision, planning and network; it sends setpoints over a bus to a microcontroller that runs the control loops and drives the motors of the three axes.](/ressources/img/raspberry-pi-projet/architecture-bicephale.svg)

## What is it for?

A microcontroller on its own does not do computer vision. An SBC on its own does not guarantee a control loop (see [[raspberry-pi-gpio-en|no hard real time under Linux]]). As soon as a project needs both (for instance "spot an object with the camera **and** pick it up with an arm"), the right answer is to **combine** the two targets rather than force one beyond its domain. The choice is prepared in [[concept-en|concept]] (in the architecture [[matrice-de-decision-en|decision matrix]]) and validated in [[integration-et-tests-en|integration]].

## The two-brain architecture

Let us take up the running example of the **3-axis arm** again, with a camera added. The split reads straight off the diagram:

- **The Raspberry Pi (high level).** It acquires the camera image, **detects the target** (image processing), **computes a trajectory** to reach it, handles the **interface** (a supervision screen, a remote command) and the **network**. All of that is computation: its comfort zone.
- **The microcontroller (real time).** It receives **setpoints** (angles or positions to reach), runs the **control loop** of each axis, drives the **motors** through their power stages, and reads the position sensors and the **limit switches**. All of that is timed: its comfort zone.

Between the two, a **[[bus-de-communication-en|bus]]**: a serial link (UART), an I2C bus (with the SBC as master), or quite simply **USB** (often the simplest: the microcontroller shows up as a serial port). The SBC sends setpoints, the microcontroller sends back its state.

On the SBC side, sending a setpoint fits in a few lines (here over a serial link, with the microcontroller seen as a port):

```python
import serial

mcu = serial.Serial("/dev/ttyACM0", 115200, timeout=1)

def envoyer_consigne(a1, a2, a3):
    # simple text protocol: "C a1 a2 a3\n"
    mcu.write(f"C {a1} {a2} {a3}\n".encode())
    return mcu.readline().decode().strip()   # acknowledgement / state returned by the MCU

print(envoyer_consigne(90, 45, 120))   # aims at one posture of the arm
```

On the microcontroller side, the program reads that line, updates its control setpoints, and replies, a job that belongs to the tutorials of the chosen MCU family (Arduino, ESP32, STM32…). The **protocol** (the message format) is to be defined at framing time: simple and readable first, enriched later.

> [!tip]
> Splitting the roles also gives a **test strategy**: you validate the microcontroller alone (it tracks correctly on setpoints injected by hand), then the SBC alone (it detects and computes on test images), before connecting the two. Two isolated bugs are worth more than one hybrid bug.

## When the SBC is enough on its own

The two-brain architecture is not always needed. The SBC can drive its own [[raspberry-pi-gpio-en|GPIO]] when the project **does not ask for tight real time**:

- a **data logger** that reads slow sensors and writes to a file or a database;
- a **dashboard** that displays a system's state and commands it remotely;
- a robot whose command **tolerates latency** (a slow vehicle, an arm with unhurried movements).

Conversely, as soon as there is a **fast regulation loop** or a **finely timed** signal, that part is moved onto a microcontroller. The boundary is the one in [[raspberry-pi-gpio-en|driving the GPIO from Linux]]: the OS sits in the way and does not guarantee real time.

## Starting the program at boot

In a mock-up, nobody opens an SSH session to launch the script by hand: the Pi must **start its program on its own** when power comes up. The principle is simple: you register the program as a **task started at boot**, so that the robot is autonomous as soon as it is powered.

*The concrete setup (creating a `systemd` service, handling its restart, reading its logs) belongs to **Linux administration**, outside the scope of this wiki, like the rest of sysadmin (cf. [[raspberry-pi-prise-en-main-en|getting started]]). The [official documentation](https://www.raspberrypi.com/documentation/) and a Linux course lay out the mechanism. What matters here: plan, from the design stage, for the program to start on its own, and to restart if it crashes.*

## Pitfalls

**Powering the Pi and the motors from the same source.** Motors cause current surges that pull the voltage down. If the Pi shares that supply, it suffers undervoltages (reboots, SD corruption). Provide a **dedicated supply** for power, separate from the Pi's, with a **common ground**.

**Cutting the power without a clean shutdown.** The Pi writes to its SD card. Unplugging brutally risks corrupting it. Plan a clean shutdown (`sudo poweroff`), or a delayed cut, in the usage scenario.

**Depending on the room's network for the demo.** School `.local` and Wi-Fi are capricious. For a reliable demonstration, use a **direct Ethernet cable**, or configure the Pi as a standalone **access point**, to be prepared upstream, not on the day.

**Putting real time in the SBC.** The recurring conceptual pitfall: believing that the Pi, because it is powerful, will do as well as a microcontroller on a fast loop. It is powerful **in computation**, not **in determinism**. Keep the control loop on the microcontroller side.

**Sloppy link protocol.** An ambiguous message format between SBC and MCU is a source of hard bugs. Define a clear protocol (delimiters, acknowledgements, error handling) from the start.

## See also

- [[raspberry-pi-en|Raspberry Pi]] — hub of the SBC module, and the MCU vs SBC choice
- [[raspberry-pi-gpio-en|Driving the GPIO from Linux]] — the real-time boundary under Linux
- [[microcontroleur-en|Microcontroller]] — the other brain of the architecture, for real time
- [[bus-de-communication-en|Communication buses]] — UART / I2C / SPI, the link between the two
- [[integration-et-tests-en|Integration and testing]] — validating the assembly of the sub-systems
