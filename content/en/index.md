---
title: TheSkillCodex
lang: en
tags: [accueil]
description: "Teaching wiki for the mechatronics project of semesters I3.5 and I3.6: the five phases of the V-model, embedded systems, mechanics. Running example, a 3-axis robotic arm. French is the reference version."
draft: false
source_fr: index.md
source_sha256: dd5f2aae3e83538ba79e8fcef064b83332ca3b05076a89003e2ce09febbc99e0
---

# Welcome to TheSkillCodex

> [!info] Version française
> Ce wiki existe d'abord en français, et la version française reste la plus complète : **[TheSkillCodex en français](/)**.

## How to use this site

This site is a set of **short, self-contained pages** (about 5 minutes each), linked to one another: every page reads on its own and points to the neighbouring concepts.

- **On a computer**: hover over a `[[notion]]` link to preview it without leaving your page; click to open it.
- **On a phone**: tap the link to open the page, the back button to return.
- **Search**: `Ctrl+K` (or the magnifying glass) to find a concept by name.
- **Explore**: the graph shows how the pages connect.

## Where to start

Pick the branch that matches your role on the project. The wiki will send you to the others through its links, whenever a topic calls for it.

- **[[en/conduite/index|Project management]]** — the method: V-model, steps, milestones, tools, organisation, standards and eco-design.
- **[[en/embarque/index|Embedded systems]]** — electronics and embedded software
- **[[en/meca/index|Mechanical]]** — materials and mechanics (mostly covered by the mechanical engineering teachers)

## The project in five phases

The project follows a **V-model**: the descending branch defines the system, the ascending branch builds and validates it. Each phase produces an identifiable deliverable and conditions the next one; none is validated until its deliverable has been accepted at a review. The detail of each phase sits in its own page: [[en/conduite/index|Project management]].

1. **[[specification-technique-en|Technical specification]]**: turn a need into measurable technical requirements. Deliverable: the [[cahier-des-charges-fonctionnel-en|CdCF]] and the specification file.
2. **[[concept-en|Concept]]**: choose an architecture and size it roughly. Deliverable: the concept file.
3. **[[preuve-de-concept-en|Proof of concept]]**: resolve the technical unknowns before detailed design. Deliverable: the minimal prototypes.
4. **[[dossier-technique-en|Technical design file]]**: produce every document needed for manufacturing. Deliverable: the complete technical design file.
5. **[[integration-et-tests-en|Integration and testing]]**: assemble, qualify, close the project. Deliverable: a working prototype, a qualification file, the final presentation and the lessons learned.

Three **continuous threads** run through the whole project, from the first week to the last: [[gestion-de-projet-en|project planning and tracking]], [[ecoconception-en|eco-design]], [[securite-et-qualite-en|safety and quality]].

## About

Teaching support for semesters **I3.5 and I3.6** (mechatronics project), aligned with the school's competency framework. Running example: a **3-axis robotic arm**.

Built with [Quartz](https://quartz.jzhao.xyz/), edited in [Obsidian](https://obsidian.md/), versioned on GitHub.
