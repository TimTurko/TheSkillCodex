---
title: Project management
tags:
  - hub
  - trame
  - proj
prerequis: []
aa: []
phases:
  - specification
  - concept
  - preuve-de-concept
  - dossier-technique
  - integration-et-tests
draft: true
source_fr: conduite/index.md
source_sha256: f3927441c3623fe0690dcb65ff088c8637b71739bb1ae4b2f9a08370afe35d12
---

The **project path** page describes the five phases of a student-level mechatronics or IoT project, from the initial need to the final presentation. The path follows a **V-model** logic: the left-hand (descending) branch progressively defines the system (specification, concept, proof of concept), while the right-hand (ascending) branch builds and validates it (technical design file, integration and testing). This framework structures the whole tutorial and serves as the entry point for placing every concept, every tool and every deliverable in the flow of the project.

## The five phases

1. [Technical specification](#1-technical-specification) — turn a need into measurable technical requirements
2. [Concept](#2-concept) — choose an architecture and size it roughly
3. [Proof of concept](#3-proof-of-concept) — resolve the technical unknowns before detailed design
4. [Technical design file](#4-technical-design-file) — produce every document needed for manufacturing
5. [Integration and testing](#5-integration-and-testing) — assemble, qualify, close the project

Each phase produces an identifiable deliverable and conditions the next one. No phase is validated until its deliverable has been accepted at a review.

## The V-model

![Cycle en V du projet mécatronique](/ressources/img/conduite/cycle-v-projet.svg)

## 1. Technical specification

> [!question] The key question
> What must the system do, in what context, and for whom?

The team turns a need, often vague at the start of a project, into measurable technical requirements. This phase covers the analysis of the need, the study of the context of use, the state of the art of existing solutions, the [[ecoconception-en|eco-design]] constraints, and the formalisation of performance targets.

> [!livrable] Main deliverable
> The [[cahier-des-charges-fonctionnel-en|cahier des charges fonctionnel]] (CdCF, the French functional requirements specification), together with a [[specification-technique-en|technical specification]] file.

## 2. Concept

> [!question] The key question
> Which technical architecture meets the spec, and does it hold up under rough sizing?

The team picks one concept among several candidates, describes it through diagrams (in particular the [[schema-bloc-fonctionnel-en|functional block diagram]], the [[schema-cinematique-en|kinematic diagram]] and the [[chaine-energie-en|energy and information chains]]), and checks with quick rough sizing that the orders of magnitude hold (power, battery life, footprint).

> [!livrable] Main deliverable
> A [[concept-en|concept]] file presenting the block diagram, the chain diagrams and the rough sizing calculations.

## 3. Proof of concept

> [!question] The key question
> Do the uncertain technical points of the concept actually work?

Before committing to the whole detailed design, the team identifies the **unknowns** in the concept (a control loop to achieve, a link to validate, a component to characterise) and tests them on a minimal setup. If a test fails, the spec or the concept has to change **before** the mistake gets expensive.

This phase is where an essential engineering skill is learned: **resolving uncertainty early**. Rather than designing everything and then testing, the things that could sink the project are tested first.

> [!livrable] Main deliverable
> One or more minimal prototypes, in other words the [[preuve-de-concept-en|proof of concept]] itself. They show that the unknowns have been resolved, and come with an update of the spec and the concept where needed.

## 4. Technical design file

> [!question] The key question
> How is the system built, part by part and line of code by line of code?

The team produces every document needed to build the prototype: detail and assembly drawings, bill of materials (BOM), wiring diagrams, [[pcb-en|PCB]] layout, embedded algorithms, simulations, and the product qualification plan (how it will be shown that the system meets the spec).

> [!livrable] Main deliverable
> The complete [[dossier-technique-en|technical design file]], sufficient for an outside team to build and test the system.

## 5. Integration and testing

> [!question] The key question
> Does the assembled prototype satisfy the spec, and is the project properly closed?

The team manufactures, assembles and wires the prototype, then runs the qualification plan: every function described in the spec is tested, measured, and either validated or recorded as a deviation. The assembly must be safe and presentable. The phase ends with the final presentation, the final report and the lessons learned review.

> [!livrable] Main deliverable
> The outcome of [[integration-et-tests-en|integration and testing]]: a working prototype, a qualification file, the final presentation and the lessons learned.

## Running alongside every phase

Three activities are not phases but **continuous threads**, present from the first week of the project to the last:

- **[[gestion-de-projet-en|Project planning and tracking]]**: schedule, task tracking, risk management, team communication, interim reviews. A team that does not steer its project ends up being steered by it.
- **[[ecoconception-en|Eco-design]]**: life-cycle analysis, material choices, energy frugality. It is not decided at the end of the project. Every design choice commits the environmental footprint.
- **[[securite-et-qualite-en|Safety and quality]]**: product and user risk analysis ([[amdec-en|AMDEC]], the French FMEA), compliance with standards, quality of deliverables. To be considered from the spec onwards, not after the first accident.

These threads are assessed across the board: they appear in the deliverables of every phase, rather than in a phase of their own.

## How to read this site

The tutorial has **three kinds of page**, which you can tell apart by the `type:` field in their header:

- **Framework pages**: describe a phase of the V-model. Dense and detailed, they guide the production of the expected deliverables. This page is a framework page.
- **Tutorials**: show how to put a tool or a method into practice (installing an IDE, understanding the GPIOs of a microcontroller, building a digital PID). Practical, action-oriented.
- **Concept pages**: short reminders (voltage, resistance, torque, force) that bridge to other courses. To be consulted whenever a basic notion is unclear.

## Methods, organisation and framework

Beyond the phases, project management draws on **organisational tools** and a **regulatory framework**:

- **Methods and organisation** ([[en/conduite/meo/index|MEO]]): [[relation-client-en|client relationship]], [[archivage-projet-en|archiving and traceability]], [[revue-de-code-en|code review]], [[unite-si-en|SI units]], [[cable-management-en|cable management]].
- **Standards, safety and eco-design** ([[en/conduite/ese/index|ESE]]): product safety and compliance in [[securite-et-qualite-en|safety and quality]] ; environmental footprint in [[ecoconception-en|eco-design]].
- **Every project tool**: see the [[en/conduite/proj/index|PROJ]] index.
