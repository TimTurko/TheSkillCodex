---
title: LoRa
type: notion
tags:
  - eee
  - notion
prerequis:
  - techno-sans-fil
aa: []
phases: []
draft: false
---

Le **LoRa** est une [[techno-sans-fil|technologie sans-fil]] de **très longue portée** (plusieurs kilomètres) et de **très basse consommation**, au prix d'un **débit très faible**. C'est la technologie des capteurs **distants** qui envoient peu de données, rarement.

## Comment ça marche ?

Elle vise les usages **LPWAN** (réseaux étendus basse consommation) : agriculture, ville connectée, suivi d'objets sur de grandes zones. Une distinction à connaître avant d'acheter : **LoRa** désigne la **modulation radio**, si bien que deux modules peuvent dialoguer **en direct, point-à-point**, le cas typique d'un projet école. **LoRaWAN** est le **protocole réseau** bâti par-dessus (passerelles, serveur, par exemple The Things Network) pour exploiter des flottes de capteurs. Le compromis est assumé. On échange le débit contre la distance et l'autonomie, qui peut atteindre plusieurs années sur une pile, le module et le contrôleur passant l'essentiel de leur vie en [[deep-sleep|deep sleep]]. Inutile d'y chercher du flux continu : LoRa transporte des relevés brefs, espacés.

## Voir aussi

- [[techno-sans-fil|Technologies sans-fil]] — hub : situer le LoRa face aux autres
- [[zigbee|Zigbee]] — alternative basse consommation pour la portée moyenne et le maillage
- [[deep-sleep|Deep sleep]] — l'autre moitié des années d'autonomie
- [[microcontroleur|Microcontrôleur]] — le contrôleur qui pilote le module LoRa
