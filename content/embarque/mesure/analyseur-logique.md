---
title: Analyseur logique
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - instruments-de-mesure
  - bus-de-communication
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
---

**L'analyseur logique** observe **plusieurs lignes numériques en même temps** et n'en retient que les états logiques — 0 ou 1 — horodatés. Là où l'[[oscilloscope|oscilloscope]] montre la forme analogique d'une ou deux voies, l'analyseur en suit huit ou seize et sait **décoder les protocoles** : il transforme les impulsions d'un bus en octets lisibles. C'est l'instrument du débogage de [[bus-de-communication|bus de communication]]. Fiche tuto-outil du hub [[instruments-de-mesure|instruments de mesure]].

*Prendre capture d'écran de PulseView avec une trame I²C capturée et décodée (adresse + octets lisibles au-dessus des impulsions).*

## À quoi ça sert ?

Quand un capteur « ne répond pas », le code n'en dit rien : la question est de savoir ce qui circule **vraiment** sur les fils. L'analyseur logique sert à :

- **constater** qu'une trame part et arrive — ou pas : l'adresse est-elle émise ? l'esclave répond-il (ACK) ?
- **décoder** une trame [[uart|UART]], [[i2c|I²C]] ou [[spi|SPI]] en octets lisibles, au lieu de compter des fronts à la main ;
- **suivre plusieurs lignes synchrones** : les quatre signaux d'un bus SPI s'observent ensemble, ce qu'un oscilloscope deux voies ne peut pas faire ;
- **confronter le chronogramme réel** au [[chronogramme|chronogramme]] attendu de la datasheet.

L'interprétation des trames décodées — qui parle, dans quel ordre, avec quelles adresses — reste l'affaire des fiches de chaque [[bus-de-communication|bus]] : l'analyseur les rend simplement visibles.

## S'équiper

Le projet n'exige pas un instrument de laboratoire :

| Référence éprouvée | Pourquoi celle-là |
| --- | --- |
| **Clone USB 8 voies** (type « 24 MHz, 8 CH », ~10 €) | largement suffisant pour l'UART, l'I²C et le SPI du projet ; reconnu par les logiciels libres |
| **PulseView** (suite libre sigrok) | pilote les clones USB, décodeurs UART / I²C / SPI intégrés, gratuit |
| **Saleae Logic 8** | la référence professionnelle, logiciel remarquable — à utiliser si le labo en possède un, pas à acheter pour le projet |

## Brancher et capturer

1. **GND d'abord** : relier une masse de l'analyseur à la masse du montage — sans référence commune, les lectures sont fantaisistes.
2. **Clipper les voies** sur les lignes à observer : SDA + SCL pour l'I²C, TX + RX pour l'UART, CS + CLK + MOSI + MISO pour le SPI.
3. **Nommer les voies** dans le logiciel — « CH0 » ne dit rien, « SDA » si.
4. **Choisir la fréquence d'échantillonnage** : au moins quatre fois le signal le plus rapide observé — dix fois pour être confortable.
5. **Capturer, puis activer le décodeur** du protocole : les impulsions deviennent des octets.

![Branchement d'un analyseur logique sur un bus I²C : les voies CH0 et CH1 piquent les lignes SDA et SCL en dérivation, la masse rejoint celle du montage, l'analyseur se relie en USB au PC qui décode sous PulseView.](/ressources/img/analyseur-logique/branchement.svg)

## Pièges

**Y chercher de l'analogique.** L'analyseur tranche tout en 0 / 1 : un rebond de bouton, un front mou, un niveau dégradé par une piste trop longue lui sont invisibles — il affichera un beau signal carré là où l'[[oscilloscope|oscilloscope]] montrerait le problème. Au doute sur la *qualité* d'un signal, c'est l'oscilloscope.

**Dépasser la tension d'entrée.** Les clones USB tolèrent 5 V, guère plus : pas de mesure sur un rail 12 V ou 24 V sans adaptation.

**Échantillonner trop lentement.** Sous-échantillonné, un bus produit une trame *plausible mais fausse* — l'erreur la plus sournoise, car rien ne signale le repliement. En cas de décodage incohérent : monter la fréquence d'échantillonnage avant de soupçonner le montage.

**Oublier la masse commune.** Premier geste du branchement, première cause de capture aberrante.

## Raccrochage projet

- **Phase de [[preuve-de-concept|preuve de concept]]** — valider le dialogue microcontrôleur ↔ capteur dès le premier câblage : l'adresse I²C répond, les octets attendus circulent.
- **Phase d'[[integration-et-tests|intégration et tests]]** — déboguer les échanges entre sous-ensembles assemblés, preuves de trames à l'appui pour le rapport de test → [[fiabiliser-et-deboguer|fiabiliser et déboguer]].

## Voir aussi

- [[instruments-de-mesure|Instruments de mesure]] — le hub : méthode commune et choix de l'instrument
- [[oscilloscope|Oscilloscope]] — le complément analogique : la *qualité* du signal, pas seulement ses états
- [[uart|UART]] · [[i2c|I²C]] · [[spi|SPI]] — les protocoles que l'analyseur décode
- [[chronogramme|Chronogramme]] — lire ce que l'analyseur affiche
