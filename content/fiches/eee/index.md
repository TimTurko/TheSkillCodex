---
title: Fiches EEE — Électronique et informatique embarquée
tags: [domaine, eee]
---

# EEE — Électronique et informatique embarquée

Cœur d'expertise. Fiches sur les notions d'électronique embarquée (énergie, alimentation, capteurs, actionneurs, PCB) et d'informatique embarquée (microcontrôleurs, firmware, communication, temps réel). L'ancien domaine MIA est intégré ici depuis la mise à jour 26/05/2026 du référentiel école.

## Notions couvertes

Le domaine s'organise autour de quelques **points d'entrée** ; chaque hub mène à ses fiches filles.

**Lire et concevoir l'électronique**
- [[schema-bloc-fonctionnel|Schéma bloc fonctionnel]] — la vue par fonctions
- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — lire un schéma de principe
- [[chaine-energie|Chaîne d'énergie et d'information]] — les deux chaînes couplées
- [[lire-une-datasheet|Lire une datasheet]] — exploiter la documentation d'un composant

**Microcontrôleur** — hub [[microcontroleur|microcontrôleur]]
- Familles : [[arduino|Arduino]], [[esp32|ESP32]]
- Langage : [[cpp|C++]]
- Concepts transverses : [[gpio|GPIO]], [[niveaux-de-tension|niveaux de tension]], [[firmware|firmware]], [[interruption|interruptions]], [[timer|timers]], [[manipulation-de-bits|manipulation de bits]]

**Communiquer**
- [[bus-de-communication|Bus de communication]] — UART, I²C, SPI
- [[techno-sans-fil|Technologies sans fil]] — Wi-Fi, BLE, LoRa…

**Commander par un algorithme** — hub [[algorithme|algorithme]]
- [[logigramme|Logigramme]], [[machine-a-etats|machine à états]], [[grafcet|GRAFCET]], [[chronogramme|chronogramme]]

**Vérifier et mettre au point**
- [[simulation-electronique|Simulation électronique]] — calculer le comportement avant de câbler
- [[instruments-de-mesure|Instruments de mesure]] — mesurer sur le circuit réel ([[multimetre|multimètre]], [[oscilloscope|oscilloscope]])
- [[debugger-embarque|Déboguer un système embarqué]] — traquer un bug dans le firmware

**Réaliser une carte**
- [[pcb|Circuit imprimé]] — du schéma à la carte fabricable, avec [[kicad|KiCad]]
