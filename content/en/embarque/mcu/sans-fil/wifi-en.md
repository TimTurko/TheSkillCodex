---
title: Wi-Fi
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
source_fr: embarque/mcu/sans-fil/wifi.md
source_sha256: 70b2ff73aaf945bbfb1e51fc2a81b666cdc4880a029d54be08da4667b68bf01d
---

**Wi-Fi** is a [[techno-sans-fil-en|wireless technology]] with a **high data rate** and **short range**, on the scale of a building, which connects a system to a local network and, beyond it, to the **internet**. It is the natural choice as soon as an object has to send or receive data from a server or from the cloud.

## How does it work?

Wi-Fi organises itself in a **star** around an access point, a home router or gateway, which carries the link out to the network. In return for its data rate, it **draws a great deal of power**, which makes it a poor fit for a battery-powered object meant to last for months. And not only on average. Transmission causes **current spikes** of several hundred mA in bursts. An undersized [[alimentation-electronique-en|power supply]] then sags, and the microcontroller reboots with no clear message. On microcontrollers, Wi-Fi is built into some families natively, the [[esp32-en|ESP32]] first among them, which saves a separate radio module. Putting it to work is covered in [[esp32-wifi-en|Wi-Fi on the ESP32]]. Its predecessor the [[esp8266-en|ESP8266]] does nothing else (no Bluetooth) and remains very common in existing hardware. Its API is so close that code transposes almost as it stands, as [[esp8266-arduino-core-en|programming the ESP8266]] shows.

## See also

- [[techno-sans-fil-en|Wireless technologies]] — hub: where Wi-Fi sits among the others
- [[esp32-wifi-en|Wi-Fi on the ESP32]] — putting it to work
- [[ble-en|BLE]] — a short-range alternative at very low power
- [[alimentation-electronique-en|Electronic power supply]] — sizing for transmission spikes
- [[esp32-en|ESP32]] — a microcontroller with Wi-Fi (and BLE) built in
- [[esp8266-en|ESP8266]] — the Wi-Fi-only predecessor, with a near-identical API
