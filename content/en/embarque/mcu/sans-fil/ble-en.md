---
title: BLE
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
source_fr: embarque/mcu/sans-fil/ble.md
source_sha256: 477bdb4ab583fbce4c0743bb5f07d6eddcd74197e598a8a477d4c39203f2dcd3
---

**BLE** (*Bluetooth Low Energy*) is a [[techno-sans-fil-en|wireless technology]] with a **short range**, about ten metres, and **very low power draw**, designed for battery-powered objects. It is the go-to link between a sensor and a **smartphone**. Not to be confused with the "classic" Bluetooth of audio headsets: BLE **carries no sound**, it aims at sparse and brief data.

## How does it work?

The data rate stays moderate, enough for readings and commands, not for a video stream. Like [[wifi-en|Wi-Fi]], BLE is often built into the microcontroller, the [[esp32-en|ESP32]] carrying both. Putting it to work is covered in [[esp32-ble-en|Bluetooth LE on the ESP32]]. For a standalone sensor that has to last for months, pairing BLE with [[deep-sleep-en|deep sleep]] is a classic: the device wakes only to transmit, and only briefly.

## See also

- [[techno-sans-fil-en|Wireless technologies]] — hub: where BLE sits among the others
- [[esp32-ble-en|BLE on the ESP32]] — putting it to work
- [[wifi-en|Wi-Fi]] — a high-rate alternative, but a hungry one
- [[deep-sleep-en|Deep sleep]] — the low-power mode that pairs naturally with BLE
- [[esp32-en|ESP32]] — a microcontroller with BLE (and Wi-Fi) built in
