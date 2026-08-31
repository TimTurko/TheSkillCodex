---
title: SI units
lang: en
type: notion
phases:
  - specification
  - concept
  - preuve-de-concept
  - dossier-technique
  - integration-et-tests
tags:
  - meo
  - notion
prerequis: []
aa: []
draft: false
source_fr: conduite/meo/unite-si.md
source_sha256: 2283fc1f2d30b3d6e6688bd044c7d17f04fbb790ddf575373c758905a2bb238f
---

**SI units** (the International System of Units) form the coherent, standardised basis of every physical measurement: the metre (m), the kilogram (kg), the second (s), the ampere (A) and their derived units (volt, watt, newton and so on), together with standard **prefixes** (milli, kilo, mega and so on).

## In the project

What is at stake here is not theory but **engineering rigour**: always write a value **with its unit**, use the standard prefixes, and never mix scales (a centre distance in mm, a cable length in m, a current given sometimes in mA and sometimes in A). A specification or a measurement with no unit, or with an ambiguous one, is a classic source of error, from the conversion bug to the undersized component. Unit consistency holds across every deliverable: the [[specification-technique-en|specification]], the [[dossier-technique-en|technical design file]], the measurement records.

## See also

- [[lire-une-datasheet-en|Reading a datasheet]] — where quantities and their units are read
- [[specification-technique-en|Technical specification]] — expressing numerical requirements with their units
- [[caracteriser-une-exigence-en|Characterising a requirement]] — the discipline of a number plus its unit in requirements
- [[dossier-technique-en|Technical design file]] — recording values that are consistent with one another
