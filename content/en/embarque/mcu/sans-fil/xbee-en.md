---
title: XBee
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
source_fr: embarque/mcu/sans-fil/xbee.md
source_sha256: 219add5e92a992037166dfb4ec788140efe5d27fcd3ae686cf454c78b056fb72
---

**XBee** modules (from Digi) are **ready-to-use radio modules** that often implement [[zigbee-en|Zigbee]] or the 802.15.4 standard. Their appeal: turning a serial link into a **wireless link** with almost no software effort.

## How does it work?

They are used to **replace a serial cable** between two remote boards, or for **telemetry**. Range varies a lot from one model to another: from a few tens of metres to several kilometres in the long-range version. On the controller side they are driven over [[uart-en|UART]], which makes them simple to integrate: as far as the program is concerned, it is just another serial link.

## See also

- [[techno-sans-fil-en|Wireless technologies]] — hub: where XBee sits among the others
- [[zigbee-en|Zigbee]] — the protocol many XBee modules implement
- [[uart-en|UART]] — the serial interface an XBee module is driven through
