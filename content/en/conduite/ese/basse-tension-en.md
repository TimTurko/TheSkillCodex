---
title: Low Voltage Directive
type: notion
tags:
  - ese
  - notion
prerequis: []
aa: []
draft: false
source_fr: conduite/ese/basse-tension.md
source_sha256: 09c6a4572347a340b94a9aeabf62dcb959a07fdc705c5b2f94e95e06aec74225
---

The **Low Voltage Directive** (LVD) is the European directive setting the safety requirements for electrical equipment operating between **50 and 1000 V** AC (75 to 1500 V DC): protection against electric shock, against overheating, and insulation.

## In the project

Most student projects work at **extra-low voltage** (24 V and below), so they fall **outside the scope** of the LVD, which is in itself worth recording. The directive becomes relevant as soon as a sub-system touches the mains (230 V supply, transformer). The project reflex is to spot that boundary and to remember that any work on 230 V is done with a supervisor present (see [[securite-et-qualite-en|safety and quality]]).

*Exact thresholds, insulation classes and LVD design requirements belong to the **standards course** and to the ESE discipline. This wiki limits itself to placing the low-voltage / extra-low-voltage boundary within the project.*

## See also

- [[marquage-ce-en|CE marking]] — the LVD is one of the directives concerned
- [[niveaux-de-tension-en|Logic levels]] — the orders of magnitude on the electronics side
- [[securite-et-qualite-en|Safety and quality]] — the "no 230 V without a supervisor" rule
- [[caracteriser-une-exigence-en|Characterising a requirement]] — a regulatory constraint is written as a requirement (binary target, often F0)
- **Standards course** (colleagues) — thresholds, insulation classes
