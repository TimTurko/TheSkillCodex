---
title: Backward planning
lang: en
type: tuto
phases:
  - specification
tags:
  - proj
  - tuto
  - planification
prerequis:
  - jalons-en
aa:
  - RA-PROJET-C07-1/PROJ/2
draft: false
source_fr: conduite/proj/retroplanning.md
source_sha256: 3329eb4e1e57815d38879ce03202101c04b0f57bce331417331b868d2a4608bd
---

**Backward planning** is the technique of planning in reverse: you start from the deadline (final presentation, final delivery) and work back in time, first putting down the end-of-phase [[jalons-en|milestones]], then fitting the [[wbs-en|WBS]] tasks between those milestones. It is the method suited to projects with an **imposed end date**, typically school projects, where the academic calendar fixes the final presentation.

![Backward planning — building in reverse from the deadline](/ressources/img/retroplanning/generique.svg)

## What is it for?

Backward planning makes the calendar constraint operative from the start of the project rather than something suffered at the end. On a school project the deadline is not negotiable (presentation timetable, exam windows). Planning forwards from today to estimate an arrival date makes no sense: you plan back from a known arrival date to today.

Three roles:

- **Bringing out a realistic buffer** at the end of the project (finishing the report, rehearsing the presentation). A project stacked end to end right up to the eve has no margin at all. The first slip makes it overflow.
- **Revealing overloaded phases early**, the ones that do not fit in the calendar available. Better to find the shortage of time at the start of the project, while the scope can still be renegotiated, than at the moment of facing it.
- **Acting as a continuous steering support.** A backward plan is not an opening deliverable to be filed away: it is reread at every phase review and updated at every slip.

## How do you build one?

Five steps, in order:

1. **Put down the deadline** (final presentation, final delivery) as the anchor point.
2. **Reserve a buffer before the deadline**, set aside for finishing the report and rehearsing the presentation. That margin is non-negotiable. It does not absorb technical work, it absorbs the unexpected.
3. **Put the end-of-phase [[jalons-en|milestones]] down in reverse**, allowing each phase a plausible duration given the academic calendar.
4. **Fit the [[wbs-en|WBS]] tasks between the milestones**, spotting the dependencies (this task is waiting on that one) and the bottlenecks (this week has far too much work running in parallel).
5. **Set it against the real calendar**: holidays, exams, the fablab unavailable during exam periods, work placements. Those constraints are not negotiable: build them in when the backward plan is laid down, not afterwards. Then give the whole thing shape as a [[gantt-en|Gantt]] chart.

*A worked case: the backward plan of a connected weather station project over 15 weeks.*

![Backward plan of a connected weather station project](/ressources/img/retroplanning/station-meteo.svg)

## Pitfalls

**No buffer at the end.** Naive backward planning stacks the tasks end to end right up to the eve of the final presentation. One unforeseen event, and there is always one, and the whole thing overflows. Keeping an explicit buffer before the deadline changes the nature of the project: the stress stops being systemic and becomes occasional.

**Ignoring the real calendar constraints.** A backward plan that ignores exam periods, holidays or the windows when the fablab is unavailable is wrong the moment it is produced. Better to discover those constraints at the start, while there is room to adapt, than at the moment they block you.

**A frozen backward plan.** A backward plan that is not reread at every phase review lies from the first slip onwards. Its value lies in being kept up to date: a living plan, not an archive document.

## See also

- [[specification-technique-en|Technical specification]] — step 5, where the project backward plan is built
- [[jalons-en|Milestones]] — the anchor points of the backward plan, to be set first
- [[wbs-en|WBS]] — tasks to fit between the milestones
- [[gantt-en|Gantt]] — the graphical tool that gives the backward plan its shape
- [[gestion-de-projet-en|Project planning and tracking]] — the cross-cutting thread that keeps the backward plan up to date as the project runs
