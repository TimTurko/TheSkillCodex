---
title: Project planning and tracking
type: trame
phases:
  - specification
  - concept
  - preuve-de-concept
  - dossier-technique
  - integration-et-tests
tags:
  - proj
  - trame
  - transverse
prerequis: []
aa:
  - RA-PROJET-C07-1/PROJ/1
  - RA-PROJET-C07-1/PROJ/2
  - RA-PROJET-C07-1/PROJ/3
  - RA-MEO-C10-3/MEO/1
  - RA-MEO-C10-3/MEO/2
  - RA-MEO-C10-3/MEO/5
  - RA-MEO-C10-3/MEO/6
  - RA-MEO-C08-6/MEO/1
  - RA-MEO-C08-6/MEO/3
draft: false
source_fr: conduite/proj/gestion-de-projet.md
source_sha256: 469d7a6eab8b9de357004bd304b0b17ba73c956b5187d00875a603901ebc00b9
---

**Project planning and tracking** is a **cross-cutting thread** that runs for the whole length of the [[mecatronique-en|mechatronics]] project: setting the pace of the team's work, giving coordination its tools, seeing trouble coming. It does not start at a particular phase. It runs continuously, from [[specification-technique-en|technical specification]] through to [[integration-et-tests-en|integration and testing]]. The phases of the V-model are what it works on. Project planning and tracking is the cadence.

![The three cross-cutting threads run alongside the V-model](/ressources/img/commun/fils-transverses-generique.svg)

## The right mindset

The temptation with project planning and tracking is to reduce it to a Gantt chart drawn at the start of the project and left untouched until the final presentation. Resist it. Project planning and tracking is not a phase deliverable, it is a **continuous stance**: updating the tools at every review, running the weekly meetings, clearing unknowns before they turn into delays. The key skill this framework page teaches: **keeping a project alive**. A plan you do not keep up to date lies, and a risk you do not review falls asleep.

## Goal

**Keep the coordination of the project alive** for its whole duration:

- a **plan** ([[wbs-en|WBS]] + [[jalons-en|milestones]] + [[retroplanning-en|backward plan]] + [[gantt-en|Gantt]] chart) updated at every phase review
- a **[[matrice-de-risques-en|risk matrix]]** kept up and revised as the team learns
- a structured **cadence** (weekly meetings, phase reviews, final presentation)
- **traceability** of the decisions and commitments the team makes
- **anticipation** of cross-discipline snags and of outside dependencies (orders, fablab, supervisors)

All of this shows up in the deliverables of the five phases of the V-model, and in how well the team runs itself at the close.

## Method

Project planning and tracking works on three fronts that are active **in parallel** from kick-off through to the final presentation: **setting the pace** (the cadence), **tooling up** (the equipment), **holding the stance** (the human side). These three blocks do not run in sequence. They hold together.

### 1. Setting the pace

The rhythm of an engineering project rests on three nested cadences that reinforce one another. **[[jalons-en|Milestones]]** break the route into a few approval points spread across the semester. They are the moments where progress tips over, where one phase is formally closed so the next can open. Each milestone carries a **phase review**: a more formal moment of collective approval, where the team presents its deliverables, updates the [[matrice-de-risques-en|risk matrix]] with what it has learned, and records the transition. Between milestones, the team's **weekly meeting** keeps the short cadence going: 30 minutes to an hour, same slot every week, progress shared and day-to-day snags settled.

This three-level cadence is what connects the planning laid down in [[specification-technique-en|technical specification]] to the real life of the project. Technical specification (step 5) puts the tools in place. This page teaches **how they are held over time**. The [[retroplanning-en|backward plan]] anchors the date of the final presentation and the margin. The [[gantt-en|Gantt]] chart makes the week-by-week commitments visible. The risk matrix is updated at every review. How often each one moves follows the cadence naturally: the Gantt chart shifts at every weekly meeting, often barely at all, but the trace is kept. The risk matrix is revised at every phase review, once per milestone of the V-model, for the whole length of the project. The backward plan rarely changes, except for a major shift, which then has to be flagged explicitly to the supervisor as an event in its own right.

Rhythm is not a methodological comfort, it is a steering tool. A team that holds its cadence spots delays in days, not weeks. A team that loses it discovers its overruns at the phase review, too late to fix without damage.

> [!example] Example: 3-axis arm project
> On a 15-week project, six milestones: **CdCF review in week 3**, **concept review in week 5**, **PoC in week 6**, **technical design file in week 11**, **integration in week 14**, **final presentation in week 15**. First weekly meeting set in week 2 (one hour, Tuesday 10 am, slot held to the end of the project). In week 6, the PoC review brings up a **torque unknown**, confirmed on the test bench. The risk matrix goes from 5 to 7 active lines, the response "strengthen the transmission" is written down and scheduled into the technical design file. In week 9, the weekly meeting is deliberately cut to a 15-minute stand-up to protect build time, without dropping the cadence.

> [!livrable] Deliverable 1/3 — Project planning and tracking
> Cadence actually held for the whole length of the project, evidenced by:
> - **Ongoing**: one set of minutes per weekly meeting, named on the `DD-MM-YYYY-weekly-meeting` convention
> - **At milestones**: one set of phase review minutes at each milestone, named `DD-MM-YYYY-review-<phase>`

### 2. Tooling up

Project planning and tracking draws on six canonical tools, the first five laid down at step 5 of [[specification-technique-en|technical specification]]: the [[wbs-en|WBS]] (breaking the project into traceable items), the [[jalons-en|milestones]] (approval points), the [[retroplanning-en|backward plan]] (planning back from the final presentation), the [[gantt-en|Gantt]] chart (tasks and dependencies laid out over time), the [[matrice-de-risques-en|risk matrix]] (anticipating setbacks and responses), and **budget tracking** (consolidating what the project has spent against the initial envelope, centralised in the [[dossier-technique-en|technical design file]] at the point of material commitments but tracked continuously). Each tool has a page of its own, which this framework page does not duplicate. Its job here is to set out **how they fit together** over the length of the project, and **how to keep them alive**.

The choice of software is made at kick-off and stuck to. **Excel or paper** are enough for most student teams: a Gantt chart in Excel stays readable, stays shareable, and forces nobody to learn a new tool mid-project. **GanttProject** gives a dedicated format and native dependencies, but costs a few hours to learn, which is worth it if the team wants to invest in that skill. **Trello** is lighter, organised around tasks and statuses ("to do / doing / done"), but loses the continuous time dimension of a Gantt chart. Other tools exist (Notion, ClickUp, MS Project and so on). What decides is not sophistication but whether **the team will actually keep it up**. Switching mid-project is rarely worth it, because learning and migrating cost more time than they save.

Beyond the planning tools, traceability rests on three practices: **meeting minutes** for every weekly meeting and every phase review (short in form, but systematic: date, who was there, decisions, commitments); a consolidated **commitment log** (who does what by when, updated at every meeting); centralised **[[archivage-projet-en|archiving]]** on a shared drive with a stable naming convention. These practices look trivial. They are exactly what separates the teams that finish on time from the teams that find out a week before the end that nobody knows who was supposed to order the power cable.

> [!example] Example: 3-axis arm project
> **Task tracking** kept in Trello (board shared between the four teammates, columns by discipline plus a "blocked" column), **Gantt chart** and **risk matrix** in a shared Excel file (5 risks in week 2, 7 in week 6 after the PoC, 4 still active in week 11 after the technical design file), **minutes** archived on the team drive with the `DD-MM-YYYY-<type>` convention (for example `12-09-2025-review-poc`). Trello plus Excel decided in the first week and held to the final presentation without a switch, even when the matrix grew denser after the PoC review.

> [!warning] Watch out
> **A tool nobody updates weighs more than no tool at all.** A Gantt chart that has not moved in three weeks misleads the team about where the project really is, muddies the supervisor's reading, and damages the credibility of the whole thread. A simple tool that is imperfect but kept up beats a sophisticated one abandoned halfway. The commitment to update a tool matters more than the choice of tool.

> [!livrable] Deliverable 2/3 — Project planning and tracking
> Tooling kept up for the whole length of the project, evidenced by:
> - **Ongoing**: Gantt chart and risk matrix updated at the planned cadence (Gantt chart at every weekly meeting, risk matrix at every phase review), budget tracking updated at every phase review and whenever a major material commitment is made
> - **At milestones**: a consolidated commitment log, presented at every phase review

### 3. Holding the stance

Tools and cadence are not enough. The team still has to **make them live**. This is the human and organisational side of the thread, the one most often underrated because it has no graphic deliverable. Four fronts play out here.

**Running the weekly meetings.** Rotating or fixed, it makes no difference. What matters is that someone is identified as running each session. Agenda prepared the day before (state of the Gantt chart, blockers, decisions to make), duration held (30 minutes to an hour, no more), structured round-table. The weekly meeting is not the place to solve technical problems in depth. It is there to **spot them** and to schedule the short technical sessions that will solve them.

**Recording decisions and commitments.** Any decision made in a meeting that does not appear in the minutes is, in practice, forgotten a week later. The discipline of writing minutes is not a formality. It is what lets the team hold each other to what was agreed. Short in form, five lines is enough for a weekly meeting, but **systematic**.

**Seeing cross-discipline snags coming.** Breaks in cadence rarely come from one discipline on its own. They come from the **interfaces**: an electronics order that depends on a 3D-printed mechanical part, firmware waiting on a stable software interface on the PC side, a build that needs a slot at the fablab. These dependencies have to go into the Gantt chart as such, and to get short technical sessions between the disciplines concerned, arranged one to two weeks before they are needed.

**Holding the stance when something slips.** When the team sees that a deliverable will not be met, there are three options and a single rule. The options:

1. **Cut the scope back**, the minimal version is delivered and the refinement moves to future work.
2. **Accept the delay** by drawing on the margin in the backward plan, and say explicitly that the margin has been eaten into.
3. **Alert the supervisor** for a ruling.

The rule: **say it straight away**, no running from it. A delay flagged early costs one check-in. The same delay discovered at the phase review costs the supervisor's trust.

On the 3-axis arm project, the sponsor is the mechatronics teacher, and the team is at once the party doing the work and the party commissioning it: the **student-as-their-own-client** stance (see [[relation-client-en|client relationship]]). The teacher does not settle the technical choices day to day. They approve them at the phase review. So the team has to impose on itself the discipline an outside client would impose: make choices you can stand behind, record them, hold to them.

> [!example] Example: 3-axis arm project
> In week 9, 3D printing the axis mounts takes a week longer than planned (fablab slot pushed back, print settings to be retuned). The team calls a mechanical and software session mid-week to renegotiate the software interface: the high-level command is temporarily degraded (fixed target positions instead of interpolated trajectories) so that the first integration tests can start on the software side without waiting for the mounts. Minutes written the same day, decisions recorded, supervisor warned early. The delay is absorbed without spilling into what follows, because it was flagged rather than hidden.

> [!tip] Tip
> **A short weekly meeting that actually happens beats a long one that keeps being postponed.** Thirty fixed minutes every week in the same slot give the team a structure and build the habit. Two hours "when we have time" slide, and end up being skipped. Regularity matters more than depth: a dense but short weekly meeting is worth more than the promise of an exhaustive one that will never take place.

> [!livrable] Deliverable 3/3 — Project planning and tracking
> Stance held for the whole length of the project, evidenced by:
> - **Ongoing**: weekly meetings run and recorded, cross-discipline technical sessions anticipated and written into the Gantt chart
> - **At milestones**: at every phase review, the updated risk matrix and the list of commitments met or rescheduled are presented

---

## Common pitfalls

- Reducing project planning and tracking to the initial Gantt chart drawn in [[specification-technique-en|technical specification]] and abandoned afterwards
- Confusing the tools (Gantt chart, risk matrix) with the management itself: the tools serve the stance, they do not replace it
- Holding weekly meetings without minutes: the decisions go up in smoke, and there is nothing left to hold anyone to
- Putting off the alert to the supervisor when something slips, since running from it costs more than an early check-in
- Finding out about fablab constraints or external order lead times a week before they are needed
- Switching tools mid-project without a strong reason: the cost of learning and migrating wipes out the benefit

## During this phase, on the team side

Project planning and tracking does not just steer its own territory. It is also the **conductor of the other cross-cutting threads**, [[ecoconception-en|eco-design]] and [[securite-et-qualite-en|safety and quality]]. Three practices structure that.

**Building it into the cadence.** Phase reviews are not only technical progress checks: they are also the moments where eco-design is brought back up. Were the criteria in the decision matrices held to at concept? Do the choices in the technical design file still fit the eco-design options that were retained? Safety and quality is reviewed at the same moment: are the regulatory constraints identified in technical specification still built in? Do the new dependencies impose others? These reminders do not take long, five to ten minutes per thread at a phase review is enough, but without them the cross-cutting threads drift off the radar.

**Building it into the risk matrix.** Eco-design risks (a supplier without the certification it claimed, a part that turns out not to be recyclable, a material ruled out late) and safety and quality risks (a CE compliance defect, a public unexpectedly exposed, a regulatory non-conformity at the end of the project) have to appear in the risk matrix alongside the technical risks. They have the same attributes (likelihood, severity, response) and the same update cadence.

**Do not smother, do not duplicate.** Project planning and tracking **steers** eco-design and safety and quality but does not **do** them. Those two threads have their own methods, their own deliverables, their own stance. The job here is to make sure they do not fall out of sight, not to take their place.

## Wrap-up

By the end of the project, project planning and tracking will have **run through the five phases of the V-model without a break**. Every phase contributed through its own deliverables, every review found its moment to update, every weekly meeting anchored the cadence. Project planning and tracking done well does not show. It is measured by the absence of the accidents it prevented. See the [[en/conduite/index|project path hub]] to place this framework page back in the V-model as a whole, and the [[ecoconception-en|eco-design]] and [[securite-et-qualite-en|safety and quality]] pages for the other two cross-cutting threads that it steers.

## See also

- [[en/conduite/index|Project path hub]]
- [[wbs-en|WBS]]
- [[jalons-en|Milestones]]
- [[retroplanning-en|Backward planning]]
- [[gantt-en|Gantt]]
- [[matrice-de-risques-en|Risk matrix]]
- [[relation-client-en|Client relationship]]
- [[archivage-projet-en|Project archiving]]
- [[ecoconception-en|Eco-design]] *(cross-cutting thread)*
- [[securite-et-qualite-en|Safety and quality]] *(cross-cutting thread)*
