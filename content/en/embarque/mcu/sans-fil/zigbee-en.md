---
title: Zigbee
lang: en
type: notion
tags:
  - eee
  - notion
prerequis:
  - techno-sans-fil-en
aa: []
phases: []
draft: false
source_fr: embarque/mcu/sans-fil/zigbee.md
source_sha256: a5cd3cf3b2ef7661439dcf4a22d6b561048bf9b320bfe7a0ac829ee5eb8ae600
---

**Zigbee** is a **low-power**, **low-rate** [[techno-sans-fil-en|wireless technology]] designed for **sensor networks**. Its strength is **meshing** (*mesh*): each node relays the messages of the others, which extends the reach of the network without extending the reach of any single transmitter.

## How does it work?

It turns up mostly in **home automation** and in networks of numerous objects. The network does not organise itself by magic: it needs a **coordinator** (a home automation hub, a USB dongle) to found it and administer it. The mesh then makes the network **robust**. If a node goes down, messages route around it. That robustness is paid for by an organisation more complex than a plain star. The data rate, deliberately low, is enough for sensors and commands, and it serves the low power draw.

## See also

- [[techno-sans-fil-en|Wireless technologies]] — hub: where Zigbee sits among the others
- [[xbee-en|XBee]] — off-the-shelf modules, often implementing Zigbee
- [[lora-en|LoRa]] — the alternative for very long range
