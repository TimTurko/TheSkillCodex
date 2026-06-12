---
title: Processeur
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
aa: []
phases: []
draft: false
---

Le **processeur** (ou cœur, *core*) est l'unité qui **exécute le programme** d'un [[microcontroleur|microcontrôleur]] : il lit les instructions une à une et les applique. Sa largeur (8, 16 ou 32 bits) et sa fréquence d'horloge donnent une première idée de sa puissance de calcul — sans résumer à elles seules les performances réelles, qui dépendent aussi de l'architecture.

## Lire les noms de cœurs

Les noms croisés dans le panorama des familles désignent des **architectures de processeur**. **ARM Cortex-M** est une gamme de cœurs 32 bits qu'ARM licencie aux fabricants (STM32, Teensy, Uno R4…), échelonnée du M0 économe au M7 performant. **AVR** est le 8 bits historique des premières cartes Arduino. **Xtensa** équipe les ESP32 et ESP8266, et **RISC-V** est une architecture libre de droits en plein essor (certains ESP32-C, Pico 2). Un microcontrôleur peut enfin embarquer **plusieurs cœurs** — l'ESP32 et le Pico en ont deux — et exécuter ainsi deux tâches en parallèle.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — le circuit qui intègre le processeur et ses périphériques
- [[memoire|Mémoire]] — où sont rangés le programme exécuté et les données de travail
- [[firmware|Firmware]] — le programme que le processeur exécute
- [[cpp|C++]] — le hub du langage dans lequel ce programme s'écrit
- [[cpp-execution|Exécution d'un programme]] — comment le code écrit devient ce que le processeur exécute
