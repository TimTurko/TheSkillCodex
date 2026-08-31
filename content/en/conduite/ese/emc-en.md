---
title: Electromagnetic compatibility (EMC)
lang: en
type: notion
tags:
  - ese
  - notion
prerequis: []
aa: []
draft: false
source_fr: conduite/ese/emc.md
source_sha256: d0ed75b184275f24efe08e5e5f712785e361793fb083f9acb336b00201bfa621
---

**Electromagnetic compatibility** (EMC, *CEM* in French) is the ability of a piece of equipment to work without disturbing its electromagnetic environment **and without being disturbed** by it. It has two sides: **emission** (what the device puts out) and **immunity** (what it can withstand).

## In the project

EMC turns up in practice long before any certification: a motor that corrupts a measurement, a cable run long enough to pick up 50 Hz, a switching converter that garbles a serial link. Good wiring practice (clean grounds, shielding, decoupling) on the electronics side is the first answer to it. The **EMC Directive** itself is one of the directives under [[marquage-ce-en|CE marking]] — to identify and record, not to certify in a teaching project.

*Standardised measurement (radiated and conducted emission, immunity, chamber testing) and detailed EMC design belong to the **standards course** and to the ESE discipline. This wiki limits itself to wiring reflexes and to spotting the directive.*

## See also

- [[marquage-ce-en|CE marking]] — EMC is one of its directives
- [[securite-et-qualite-en|Safety and quality]] — recording the standards involved
- [[protection-electronique-en|Electronic protections]] — TVS and ESD protection, the hardware side of immunity
- [[decouplage-en|Decoupling]] — clean grounds and decoupling, the first EMC answer on the board
- **Standards course** (colleagues) — EMC testing and design
