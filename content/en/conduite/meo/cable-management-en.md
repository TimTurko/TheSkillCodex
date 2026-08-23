---
title: Cable management
type: notion
phases:
  - integration-et-tests
tags:
  - eee
  - meo
  - notion
prerequis: []
aa: []
draft: false
source_fr: conduite/meo/cable-management.md
source_sha256: 574b55be0833c99fe2ab9842e652696c01d037a33c199e29c1e2b14963a031ca
---

**Cable management** is the business of routing and securing the wiring of a system so that it is **reliable, diagnosable and safe**: route it cleanly, gather it into harnesses, label the wires, and take the mechanical strain off the connectors.

## In the project

Untidy wiring is a classic cause of **intermittent** faults (bad contacts, wires pulled off) and makes debugging painful. A few habits are worth having, above all during [[integration-et-tests-en|integration]]: route and bundle the harnesses, **label both ends** of every wire, provide *strain relief* on the connectors that take load, and leave a little service length. In the running example, clean wiring of the arm's motors and limit switches keeps the movement from tearing a connection loose, and makes diagnosis easier when an axis stops responding.

## See also

- [[integration-et-tests-en|Integration and testing]] — the phase where the wiring is made reliable
- [[pcb-en|PCB]] — the integrated alternative to flying leads
- [[ecoconception-en|Eco-design]] — demountable connectors and repairability
