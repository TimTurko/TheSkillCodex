---
title: Mechatronics
type: notion
phases:
  - specification
  - concept
  - preuve-de-concept
  - dossier-technique
  - integration-et-tests
tags:
  - proj
  - notion
  - transverse
prerequis: []
aa: []
draft: false
source_fr: conduite/proj/mecatronique.md
source_sha256: e1569bac81d80cc01383ca8e7e61a95f42057932fe1254cb79424c21c5dc6d4c
---

**Mechatronics** is the engineering of systems that make **mechanics**, **electronics** and **embedded software** work together to deliver a function none of those disciplines would achieve on its own. A mechatronic system senses its environment through sensors, decides through a [[microcontroleur-en|microcontroller]], and acts on the physical world through actuators: the *sense → decide → act* loop is its founding pattern.

![The sense → decide → act loop of a mechatronic system](/ressources/img/mecatronique/generique.svg)

## Three disciplines, one system

What characterises mechatronics is not the juxtaposition of the three disciplines but their **integration**. The mechanical structure drives the choice of actuators. The actuators call for power electronics. The electronics sets the constraints on the [[firmware-en|firmware]]. Finally, the software behaviour has to account for mechanical inertia and response times. Designing in a mechatronic way means arbitrating constantly at those boundaries rather than optimising each domain in isolation.

On this wiki, those disciplines are supported by dedicated technical paths, while the **[[en/conduite/index|project path hub]]** carries the methodology that brings them together: the V-model, from [[specification-technique-en|technical specification]] to [[integration-et-tests-en|integration and testing]].

## Running example

The whole wiki illustrates these principles on a single project: a **3-axis teaching robot arm**. Three motorised joints (mechanics), their drivers and position sensors (electronics), the [[machine-a-etats-en|state machine]] that orchestrates the movements (embedded software): a minimal but complete system where the three disciplines really do have to agree.

## See also

- [[en/conduite/index|Project path hub]] — the V-model methodology
- [[microcontroleur-en|Microcontroller]] — the decision-making core of the system
- [[specification-technique-en|Technical specification]] — the starting point of the V-model
