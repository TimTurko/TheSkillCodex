---
title: LoRa
type: notion
tags:
  - eee
  - notion
prerequis:
  - techno-sans-fil-en
aa: []
phases: []
draft: true
source_fr: embarque/mcu/sans-fil/lora.md
source_sha256: 7d6d530ed310766b1dc71c6926da2f6cb47057b45e759aa01824fce4cb1eae90
---

Le **LoRa** est une [[techno-sans-fil-en|technologie sans-fil]] de **très longue portée** (plusieurs kilomètres) et de **très basse consommation**, au prix d'un **débit très faible**. C'est la technologie des capteurs **distants** qui envoient peu de données, rarement.

## Comment ça marche ?

Elle vise les usages **LPWAN** (réseaux étendus basse consommation) : agriculture, ville connectée, suivi d'objets sur de grandes zones. Une distinction à connaître avant d'acheter : **LoRa** désigne la **modulation radio**, si bien que deux modules peuvent dialoguer **en direct, point-à-point**, le cas typique d'un projet école. **LoRaWAN** est le **protocole réseau** bâti par-dessus (passerelles, serveur, par exemple The Things Network) pour exploiter des flottes de capteurs. Le compromis est assumé. On échange le débit contre la distance et l'autonomie, qui peut atteindre plusieurs années sur une pile, le module et le contrôleur passant l'essentiel de leur vie en [[deep-sleep-en|deep sleep]]. Inutile d'y chercher du flux continu : LoRa transporte des relevés brefs, espacés.

## Voir aussi

- [[techno-sans-fil-en|Technologies sans-fil]] — hub : situer le LoRa face aux autres
- [[zigbee-en|Zigbee]] — alternative basse consommation pour la portée moyenne et le maillage
- [[deep-sleep-en|Deep sleep]] — l'autre moitié des années d'autonomie
- [[microcontroleur-en|Microcontrôleur]] — le contrôleur qui pilote le module LoRa
