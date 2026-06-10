---
title: Technologies sans-fil
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
aa:
  - RA-EEE-C03-2/EEE/4
phases:
  - concept
  - dossier-technique
draft: false
---

Les **technologies sans-fil** permettent à un système d'échanger des données par ondes radio, sans liaison filaire — pour dialoguer avec un smartphone, un serveur, ou d'autres nœuds d'un réseau de capteurs. Cette fiche est le **hub d'entrée** vers les protocoles les plus courants en projet — le [[wifi|Wi-Fi]], le [[ble|BLE]], le [[zigbee|Zigbee]], les modules [[xbee|XBee]] et le [[lora|LoRa]] — et donne la méthode pour choisir entre eux, sans détailler chacun (c'est le rôle des fiches filles).

![Carte de positionnement des cinq technologies sans-fil selon la portée (axe horizontal) et le débit (axe vertical). Wi-Fi : débit élevé, courte portée. BLE : portée courte, débit modéré. Zigbee et XBee : portée moyenne, débit bas. LoRa : très longue portée, débit très faible. Tendance d'ensemble : plus la portée augmente, plus le débit diminue.](/ressources/img/techno-sans-fil-comparaison.svg)

## À quoi ça sert ?

Le sans-fil affranchit le système du câble : il rend un objet mobile, permet de relever des capteurs éloignés, ou connecte le projet à un téléphone et au réseau. C'est souvent ce qui transforme un montage isolé en **objet connecté**.

Choisir une technologie, c'est arbitrer entre quelques paramètres — sachant qu'un fait domine : **portée et débit s'opposent largement** (plus on vise loin, moins on transmet vite), et que la **consommation** est décisive dès qu'un objet fonctionne sur pile :

- la **portée** utile (quelques mètres à plusieurs kilomètres) ;
- le **débit** atteignable ;
- la **consommation**, donc l'autonomie sur batterie ;
- la **topologie** : étoile (autour d'un point central) ou maillage (chaque nœud relaie) ;
- l'**infrastructure** requise (point d'accès, passerelle) et la bande de fréquence.

Ce choix se pose en phase de [[concept|concept]] et se fige en [[dossier-technique|dossier technique]].

## Comment choisir ?

Les cinq technologies courantes se rangent selon ces paramètres :

| Technologie | Portée | Débit | Conso | Topologie | Usage typique |
| --- | --- | --- | --- | --- | --- |
| [[wifi\|Wi-Fi]] | locale (dizaines de m) | élevé | élevée | étoile (point d'accès) | accès internet, flux de données |
| [[ble\|BLE]] | courte (~10 m) | modéré | très basse | étoile (autour du téléphone) | capteur sur pile, lien smartphone |
| [[zigbee\|Zigbee]] | moyenne | bas | basse | maillage | domotique, réseaux de capteurs |
| [[xbee\|XBee]] | moyenne à longue | bas | basse | point-à-point / maillage | liaison série sans-fil, télémétrie |
| [[lora\|LoRa]] | très longue (km) | très bas | très basse | étoile longue portée | capteurs distants, agriculture, ville |

Trois réflexes pour trancher. Pour relier l'objet à **internet ou à un smartphone**, le Wi-Fi (débit, accès réseau) ou le BLE (basse conso, proximité du téléphone). Pour un **réseau de capteurs** nombreux et économes, le Zigbee ou les modules XBee, dont le maillage étend la portée. Pour quelques mesures envoyées **de très loin** et rarement, le LoRa, qui échange le débit contre la distance et l'autonomie.

La mise en œuvre concrète (pile protocolaire, antenne, code) dépend du module et du contrôleur retenus : certaines familles intègrent la radio nativement, l'[[esp32|ESP32]] embarquant à la fois le Wi-Fi et le BLE.

## Voir aussi

- [[wifi|Wi-Fi]] — haut débit, accès au réseau local et à internet
- [[ble|BLE]] — courte portée, très basse consommation, lien smartphone
- [[zigbee|Zigbee]] — maillage basse consommation pour réseaux de capteurs
- [[xbee|XBee]] — modules radio prêts à l'emploi, liaison série sans-fil
- [[lora|LoRa]] — très longue portée, très bas débit
- [[microcontroleur|Microcontrôleur]] — certaines familles intègrent la radio (ESP32 : Wi-Fi + BLE)
