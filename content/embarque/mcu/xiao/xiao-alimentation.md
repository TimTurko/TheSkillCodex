---
title: Alimenter le XIAO ESP32-S3
type: notion
phases:
  - concept
tags:
  - eee
  - notion
  - xiao
prerequis:
  - xiao-esp32-s3
aa: []
draft: false
---

L'**alimentation du XIAO ESP32-S3** se fait de trois façons — **USB-C**, **batterie LiPo** rechargeable, ou **5 V externe** — et la carte intègre la **gestion de charge** de l'accu. Cette fiche explique comment la nourrir, la recharger sans risque, et surtout **combien de temps elle tient sur batterie** selon ce qu'elle fait : c'est le mode [[deep-sleep|deep sleep]] qui change tout.

## Trois façons de l'alimenter

![Chemins d'alimentation du XIAO : l'USB-C 5V charge la batterie LiPo via le circuit de charge intégré ; l'USB-C ou la batterie alimentent le régulateur 3V3 qui fournit jusqu'à 700 mA à l'ESP32-S3.](/ressources/img/xiao-alimentation/paths.svg)

- **USB-C (5 V)** — le cas normal : la carte est alimentée **et** l'accu se recharge en même temps.
- **Batterie LiPo 3,7 V** — soudée sur les pads **B+ / B−** au dos, pour l'autonomie. Attention : **sur batterie seule, la broche 5V est éteinte** (aucune tension à en tirer).
- **5 V externe** — possible sur la broche 5V, mais **via une diode** en série (Schottky de préférence), **anode côté source, cathode côté 5V** : elle empêche de renvoyer du courant vers le port USB.

Dans tous les cas, le **régulateur 3V3** embarqué fournit la tension logique de la carte et peut débiter jusqu'à **700 mA** pour tes périphériques — au-delà, il faut une alimentation séparée.

## Recharger l'accu sans risque

Le circuit de charge est **embarqué** : tu branches l'USB-C, ça charge. La **LED rouge** te renseigne — elle clignote pendant la charge, s'éteint une fois l'accu plein (et, sans batterie connectée, s'allume puis s'éteint au bout de ~30 s).

Un point important : le **courant de charge est faible**, **50 mA** en rapide (3,8 mA en entretien). Une cellule de 400 mAh met donc environ **8 heures** à se recharger — choisis une petite cellule, ou sois patient.

> [!warning] Sécurité batterie LiPo
> - **Polarité** à la soudure : le **−** est du **côté de l'USB**, le **+** du côté opposé. Inverser, c'est détruire la carte (voire pire).
> - Utilise une cellule **de qualité, avec circuit de protection** (PCM) contre la sur-décharge et le court-circuit.
> - Ne charge pas sans surveillance ni hors de la plage de température, et ne perce/écrase jamais un accu LiPo — risque d'emballement thermique.

## Combien de temps sur batterie ?

Le courant consommé dépend entièrement de ce que fait la carte. À titre d'exemple, avec une cellule de **~400 mAh** (à 3,8 V) :

| Ce que fait la carte | Courant typique | Autonomie indicative |
| --- | --- | --- |
| Wi-Fi actif (émission) | ~100 mA | ~4 h |
| BLE actif | ~85 mA | ~4 h 30 |
| éveillée, sans radio | ~22 mA | ~18 h |
| *light sleep* | ~2 mA | ~8 jours |
| **deep sleep** | **~14 µA** | **~3 ans (théorique)** |

Voilà le message : en **Wi-Fi continu**, tu tiens quelques heures ; en **deep sleep entre deux réveils**, des mois. Tout l'art de l'autonomie est de **dormir le plus possible** et de ne se réveiller que par salves — voir [[deep-sleep|deep sleep]] et sa mise en œuvre côté ESP32 dans [[esp32-deep-sleep|deep sleep de l'ESP32]].

Ces durées sont **théoriques** (elles ignorent l'auto-décharge de l'accu, la consommation propre du régulateur et le vieillissement) : prends-les comme des ordres de grandeur, pas des garanties.

## Lire le niveau de batterie

Sur le XIAO ESP32-S3 « standard », **aucune broche n'est câblée en interne sur la batterie** — les onze GPIO sont tous affectés. Tu ne peux donc **pas** lire la tension de l'accu en logiciel par défaut. Si tu en as besoin, câble toi-même **B+** vers un pad ADC libre **à travers un pont diviseur** (pour ramener 4,2 V sous les 3,3 V admissibles). *(La variante Plus, elle, expose une mesure batterie dédiée.)*

## Voir aussi

- [[xiao-esp32-s3|XIAO ESP32-S3]] — le hub de la carte
- [[deep-sleep|Deep sleep]] — le levier numéro un de l'autonomie
- [[esp32-deep-sleep|Deep sleep de l'ESP32]] — la mise en œuvre concrète
- [[alimentation-electronique|Alimentation électronique]] — chiffrer un budget courant
- [[niveaux-de-tension|Niveaux de tension]] — pourquoi le 3,3 V impose parfois une adaptation
- [[xiao-prise-en-main|XIAO — prise en main]] — flasher la carte
