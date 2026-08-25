---
title: WBS
type: notion
phases:
  - specification
tags:
  - proj
  - notion
  - planification
prerequis: []
aa:
  - RA-PROJET-C07-1/PROJ/2
draft: false
source_fr: conduite/proj/wbs.md
source_sha256: 9a38d6fcb24d8aee82258af6d30ad2bda583f656c829d8a1818fe718b756b1c1
---

The **WBS** (work breakdown structure) is the tool for splitting a project into traceable items, from the overall deliverable down to elementary tasks. It acts as a shared reference for splitting the work across the team and for making sure no structuring task has been forgotten. On a school project, **two or three levels of depth are enough**: phase, then sub-deliverable, then concrete task.

![WBS — generic breakdown tree over three levels](/ressources/img/wbs/generique.svg)

## What is it for?

The WBS makes the scope of the work to be done exhaustive before any attempt to place it in time. Without that explicit breakdown, the team discovers tasks along the way (*"we hadn't thought we would have to solder the connectors, make a custom power cable, write the user documentation"*), and the schedule slips by as much.

It plays three roles:

- **A shared reference for splitting the work.** Each teammate knows which branch of the WBS they are taking on and where their responsibilities stop.
- **A guard against structuring omissions.** The act of working methodically down from the overall deliverable to the elementary tasks brings out the pieces nobody had seen with the naked eye.
- **The direct foundation of the [[retroplanning-en|backward plan]] and the [[gantt-en|Gantt]] chart.** The leaves of the WBS become the bars of the Gantt chart. A Gantt chart with no WBS upstream is a drawing with no content.

## How do you build one?

Three steps:

1. **Start from the overall deliverable** (here, the complete mechatronics project) and break it down into **phases of the V-model**: technical specification, concept, proof of concept, technical design file, integration and testing.
2. **Break each phase down into identifiable sub-deliverables.** For the specification phase you will have, for instance, the [[cahier-des-charges-fonctionnel-en|CdCF]] (the French functional requirements specification), the [[etat-de-l-art-technique-en|technical state of the art]], the [[matrice-de-risques-en|risk matrix]] and the Gantt chart. Each sub-deliverable has to be nameable without ambiguity.
3. **Go down one more level if needed**, as far as concrete tasks that can be entrusted to one person over a few days or so. Stop at that level. A WBS that goes finer tips over into administration and loses its steering value.

Two splitting logics coexist — by **phases of the V-model** (robust for the cross-cutting deliverables) or by **subsystem** (readable for splitting the technical work). The method above runs the first one. The illustration below shows the second.

*A worked case: the WBS of a connected weather station project, split by subsystem rather than by discipline.*

![WBS of a connected weather station project](/ressources/img/wbs/station-meteo.svg)

## Pitfalls

**Confusing the WBS with the team org chart.** The WBS breaks down the **work**, not the people. *"Antoine's branch / Salma's branch / Karim's branch"* is not a WBS, it is an allocation, which comes after the breakdown, not before.

**Going too deep.** Two or three levels are enough on a school project. At five or six levels the WBS becomes unmanageable, nobody reopens it, and the team falls back on informal tracking. Better not to have one at all.

**Splitting by discipline rather than by deliverable.** A WBS reading *"Electronics / Mechanics / Software"* at the root is tempting, but it hides the cross-cutting deliverables (the CdCF, the concept file, the final report) that belong to no discipline in particular. Starting from the phases of the V-model is more robust. Splitting by discipline comes at level 2 or 3.

## See also

- [[specification-technique-en|Technical specification]] — step 5, where the project WBS is built
- [[jalons-en|Milestones]] — approval points that structure the upper levels of the WBS
- [[retroplanning-en|Backward planning]] — the next step: fitting the WBS tasks into time
- [[gantt-en|Gantt]] — visual rendering of the WBS tasks on the calendar
- [[gestion-de-projet-en|Project planning and tracking]] — the cross-cutting thread that keeps the WBS alive through the phases
