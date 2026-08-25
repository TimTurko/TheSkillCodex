---
title: Accuracy, trueness, precision
type: notion
tags:
  - eee
  - notion
prerequis:
  - instruments-de-mesure-en
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
source_fr: embarque/mesure/precision-de-mesure.md
source_sha256: f89ac38466652f461bfe5b83d156632bd31421e16c6de7c3d5c406f774985366
---

**"Accuracy" in everyday language** actually covers **two independent qualities** of a measurement: **trueness** (does the average of the measurements land on the true value?) and **precision** (do repeated measurements give the same result?). A measurement can be precise without being true (always the same figure… always wrong) and true without being precise (the right value, but only on average). In metrology, the word **accuracy** is reserved for the combination of the two.

![Four targets: measurements grouped at the centre (true and precise), grouped but offset (precise but not true, systematic error), scattered around the centre (true but not precise, random error), scattered and offset (neither true nor precise).](/ressources/img/precision-de-mesure/cibles.svg)

## Two defects, two remedies

The two defects are not corrected the same way:

- a **trueness** defect is a **systematic error** — a constant bias: offset instrument, forgotten ×10 probe, resistance of the test leads. Repeating the measurement changes nothing. The remedy is to **check the instrument on a known point** (the voltage of a fresh battery, a marked resistor) and to correct the bias;
- a **precision** defect is a **random error** — a scatter: noise, unreliable contacts, a quantity that genuinely fluctuates. The remedy is to **repeat the measurement** and reason on the average, after taking care of the contacts.

The practical reflex: **measure several times**. If the values scatter, the problem is precision. If they are stable but far from the expected value, the problem is trueness, or the circuit genuinely has that defect, and that is exactly what the measurement was meant to reveal.

## Resolution is not accuracy

A multimeter that displays **4.983 V** is not accurate to the millivolt: the **resolution** (the smallest displayed digit) says nothing about the actual accuracy. That accuracy is found in the instrument's own documentation, in a form like "±0.5% ± 2 digits": a measuring instrument **has a datasheet too** → [[lire-une-datasheet-en|reading a datasheet]]. The last digit "dancing" on the display is below what the instrument guarantees. It has no place in a report.

## In the project

Direct consequence for readings: a measurement is always reported against an **expected value with its tolerance** ("5 V ± 5%"), never against an exact figure. This is the *compare with the expected value* step of the [[instruments-de-mesure-en|measuring instruments]] hub. And a test report states **which instrument was used**: the value only commits to what the instrument can guarantee.

## See also

- [[instruments-de-mesure-en|Measuring instruments]] — the hub: measurement method and interpretation
- [[multimetre-en|Multimeter]] — where the resolution / accuracy confusion is met most often
- [[filtrage-en|Filtering measurements]] — filtering improves precision and corrects no bias
- [[lire-une-datasheet-en|Reading a datasheet]] — instruments have one too
- [[pied-a-coulisse-en|Vernier caliper]] and [[comparateur-en|Dial indicator]] — the same notions, on the dimensional metrology side
