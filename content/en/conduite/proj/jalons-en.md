---
title: Milestones
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
source_fr: conduite/proj/jalons.md
source_sha256: 4ac46141a3a19704293f68e4b76d16630bbb7b7522b77a6a6e482f376998c56a
---

**Milestones** are the approval points that give a project its rhythm: they mark the transition between two phases and **gate the move** to the next one. A missed milestone is not something you catch up by working harder the following week. It pushes everything downstream.

![Milestones — generic timeline of a V-model project](/ressources/img/jalons/generique.svg)

## What is it for?

Milestones take the progress of a project out of the implicit. Rather than pushing on continuously until the final presentation (where a missing part would only come to light late), they impose **explicit stopping points** where the team checks that it has actually produced what was needed before moving on.

Three inseparable roles:

- **Formally closing a phase** and clearing the move to the next one. An approved milestone commits the project. A missed milestone forces either catching up or renegotiating the scope.
- **Forcing an approval appointment** (CdCF review, PoC review, qualification review) that holds out against the drift of *"let's carry on, we'll see"*.
- **Acting as time anchors** for the [[retroplanning-en|backward plan]] and the [[gantt-en|Gantt]] chart: the project calendar is built around the milestones, not the other way round.

## How do you set them?

Three steps:

1. **Identify the phase transitions of the project.** On a V-model project the natural milestones are the CdCF review (*cahier des charges fonctionnel*, the French functional requirements specification), the concept approved, the PoC conclusive, the technical design file approved, integration delivered and the final presentation. That is the minimum skeleton. Finer ones can be added depending on what is at stake on the project.
2. **Fit the milestones onto the calendar** by [[retroplanning-en|backward planning]] from the deadline. The milestones are the fixed points. The [[wbs-en|WBS]] tasks slot in between them.
3. **Attach a precise deliverable and a mode of approval to each milestone** (team review, demo, document submitted for reading). The criterion has to make the milestone binary (passed / not passed), not a vague goal to be judged by eye on the day.

*A worked case: a connected weather station project over 15 weeks.*

![Milestones of a connected weather station project](/ressources/img/jalons/station-meteo.svg)

## Pitfalls

**A milestone with no explicit approval criterion.** A milestone reading *"PoC done"* cannot be used: who judges it, and against what? A milestone reading *"PoC demonstrating the three axes synchronised under nominal load"* can be approved. The criterion is set at the same time as the milestone, not afterwards.

**Too many milestones.** Half a dozen major milestones is enough on a school project. Beyond that the ritual wears out and loses its threshold effect. Each milestone becomes one step among others rather than a real stopping point that commits what follows.

**Confusing a milestone with an internal deadline.** One teammate delivering a subtask to another is not a milestone, it is an internal dependency. A milestone commits the **phase change of the whole project**, with outside approval (supervisor, client).

## See also

- [[specification-technique-en|Technical specification]] — step 5, where the project milestones are set
- [[gestion-de-projet-en|Project planning and tracking]] — the cross-cutting thread that keeps the milestones alive throughout the project
- [[retroplanning-en|Backward planning]] — planning back from the end, using the milestones as time anchors
- [[gantt-en|Gantt]] — the graphical tool that puts the milestones on the calendar
- [[wbs-en|WBS]] — breakdown of the project into tasks positioned between the milestones
