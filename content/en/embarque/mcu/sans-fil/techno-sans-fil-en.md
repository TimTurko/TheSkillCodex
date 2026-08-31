---
title: Wireless technologies
lang: en
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa:
  - RA-EEE-C03-2/EEE/4
phases:
  - concept
  - dossier-technique
draft: false
source_fr: embarque/mcu/sans-fil/techno-sans-fil.md
source_sha256: 8673b9487ea21d15c2e2826191e19cd7ef5fab2a91104569ea8d2aa30d687742
---

**Wireless technologies** let a system exchange data over radio waves, with no wired link — to talk to a smartphone, to a server, or to other nodes of a sensor network. This page is the **entry hub** to the protocols most common on a project — [[wifi-en|Wi-Fi]], [[ble-en|BLE]], [[zigbee-en|Zigbee]], [[xbee-en|XBee]] modules and [[lora-en|LoRa]] — and gives the method for choosing between them, without detailing each one (that is what the child pages are for).

![Positioning map of the five wireless technologies by range (horizontal axis) and data rate (vertical axis). Wi-Fi: high data rate, short range. BLE: short range, moderate data rate. Zigbee and XBee: medium range, low data rate. LoRa: very long range, very low data rate. Overall trend: the further the range, the lower the data rate.](/ressources/img/techno-sans-fil/comparaison.svg)

## What is it for?

Wireless frees the system from the cable: it makes an object mobile, allows readings from distant sensors, or connects the project to a phone and to the network. It is often what turns a stand-alone circuit into a **connected object**.

Choosing a technology means weighing up a few parameters, bearing in mind that one fact dominates: **range and data rate largely work against each other** (the further you aim, the slower you transmit), and that **power draw** is decisive as soon as an object runs on a battery:

- the useful **range** (a few metres to several kilometres);
- the **data rate** you can reach;
- the **power draw**, and so the battery life — bearing in mind that real battery life is decided as much by the [[deep-sleep-en|deep sleep]] between two transmissions as by the radio chosen;
- the **topology**: star (around a central point) or mesh (each node relays);
- the **infrastructure** required (access point, gateway) and the frequency band.

This choice comes up during the [[concept-en|concept]] phase and is frozen in the [[dossier-technique-en|technical design file]].

## How do you choose?

The five common technologies line up along these parameters:

| Technology | Range | Data rate | Power | Topology | Typical use |
| --- | --- | --- | --- | --- | --- |
| [[wifi-en\|Wi-Fi]] | local (tens of m) | high | high | star (access point) | internet access, data streams |
| [[ble-en\|BLE]] | short (~10 m) | moderate | very low | star (around the phone) | battery sensor, smartphone link |
| [[zigbee-en\|Zigbee]] | medium | low | low | mesh | home automation, sensor networks |
| [[xbee-en\|XBee]] | medium to long | low | low | point-to-point / mesh | wireless serial link, telemetry |
| [[lora-en\|LoRa]] | very long (km) | very low | very low | long-range star | distant sensors, farming, city |

Three pointers about the landscape. **XBee is not a protocol** but a range of ready-made **modules** (Digi), which carry Zigbee or proprietary variants inside. The detail lives in the child page. **Four of the five technologies live in the same worldwide 2.4 GHz band**: they can interfere with one another (and with a microwave oven). **LoRa transmits at 868 MHz** in Europe: a lower frequency carries further. That is part of the secret of its range.

Three reflexes for settling it. To link the object to **the internet or to a smartphone**, Wi-Fi (data rate, network access) or BLE (low power, close to the phone). For a **sensor network** that is large and frugal, Zigbee or the XBee modules, whose mesh extends the range. For a few readings sent **from very far away** and rarely, LoRa, which trades data rate for distance and battery life.

Putting it to work in practice (protocol stack, antenna, code) depends on the module and the microcontroller chosen: some families carry the radio natively, the [[esp32-en|ESP32]] having both Wi-Fi and BLE on board.

## See also

- [[wifi-en|Wi-Fi]] — high data rate, access to the local network and to the internet
- [[ble-en|BLE]] — short range, very low power, smartphone link
- [[zigbee-en|Zigbee]] — low-power mesh for sensor networks
- [[xbee-en|XBee]] — ready-made radio modules, wireless serial link
- [[lora-en|LoRa]] — very long range, very low data rate
- [[deep-sleep-en|Deep sleep]] — the other half of battery life: sleeping between two transmissions
- [[microcontroleur-en|Microcontroller]] — some families carry the radio (ESP32: Wi-Fi and BLE)
