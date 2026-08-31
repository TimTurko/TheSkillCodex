---
title: LoRa
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
source_fr: embarque/mcu/sans-fil/lora.md
source_sha256: 7d6d530ed310766b1dc71c6926da2f6cb47057b45e759aa01824fce4cb1eae90
---

**LoRa** is a [[techno-sans-fil-en|wireless technology]] with a **very long range**, several kilometres, and **very low power draw**, at the price of a **very low data rate**. It is the technology of **distant** sensors that send little data, rarely.

## How does it work?

It aims at **LPWAN** uses, low-power wide-area networks: agriculture, the connected city, tracking objects across large areas. One distinction is worth knowing before buying anything: **LoRa** names the **radio modulation**, so two modules can talk **directly, point to point**, the typical case for a school project. **LoRaWAN** is the **network protocol** built on top of it (gateways and a server, The Things Network for instance) to run fleets of sensors. The trade-off is a deliberate one. Data rate is exchanged for range and for battery life, which can reach several years on a single cell, the module and the microcontroller spending most of their lives in [[deep-sleep-en|deep sleep]]. There is no point looking for a continuous stream here: LoRa carries short readings, spaced far apart.

## See also

- [[techno-sans-fil-en|Wireless technologies]] — hub: where LoRa sits among the others
- [[zigbee-en|Zigbee]] — a low-power alternative for medium range and meshing
- [[deep-sleep-en|Deep sleep]] — the other half of those years of battery life
- [[microcontroleur-en|Microcontroller]] — the chip that drives the LoRa module
