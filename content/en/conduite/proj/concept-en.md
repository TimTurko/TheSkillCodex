---
title: Concept
type: trame
phase: 2
phases:
  - concept
tags:
  - proj
  - trame
  - phase-2
prerequis:
  - specification-technique-en
aa:
  - RA-EEE-C03-2/EEE/1
  - RA-EEE-C03-2/EEE/2
  - RA-MME-C02-1/MME/1
  - RA-PROJET-C04-4/PROJ/4
  - RA-PROJET-C04-4/PROJ/6
  - RA-ESE-C09-2/ESE/4
  - RA-ESE-C09-2/ESE/5
draft: false
source_fr: conduite/proj/concept.md
source_sha256: 64ea82d9980866b9a366043d9474be33d397ff668141eaf718f30a21400b6d43
---

**Concept** is the second phase of a [[mecatronique-en|mechatronics]] project: the [[cahier-des-charges-fonctionnel-en|cahier des charges fonctionnel]] (CdCF), the French functional requirements specification, is turned from the *what* into a **preliminary technical architecture**, the *how*. The major options are chosen discipline by discipline, they are checked for compatibility with each other, and enough figures are put on them to identify the **unknowns** that will have to be resolved at [[preuve-de-concept-en|proof of concept]]. The final components come later, in the [[dossier-technique-en|technical design file]].

## The right mindset

The temptation at this stage is to rush towards components ("we will take an ESP32 and an A4988 driver"), or to let each discipline work in its own corner. Both have to be resisted. This phase does not ask for exact part numbers, it asks for **an architecture that holds together**: compatible across disciplines, justified by matrices, and roughly sized. It is also the first phase where **[[ecoconception-en|eco-design]] becomes a selection criterion**, not a side comment.

## Goal of this phase

Produce a **concept file** that:

- breaks the system down into subsystems and technical functions each discipline can work on
- justifies, for each subsystem, the choice of a **technical solution** through a [[matrice-de-decision-en|decision matrix]] that includes [[ecoconception-en|eco-design]]
- guarantees that the chosen solutions are **compatible across disciplines**
- roughly sizes each discipline (orders of magnitude, feasibility)
- explicitly identifies the **unknowns** to be resolved at [[preuve-de-concept-en|proof of concept]]

This document serves as the **architecture reference** for the rest of the project: every component chosen in the [[dossier-technique-en|technical design file]] will have to be traceable to a solution approved here.

## Method

### 1. Break the system down

The [[cahier-des-charges-fonctionnel-en|CdCF]] is approved, so what the system must do is known. The concept phase opens with the opposite movement to that of the [[specification-technique-en|technical specification]]: the inside of the system is now what gets looked at, broken down into traceable internal blocks, with the technical functions that will deliver each block identified. It is the bridge between service functions, seen from outside, and technical solutions, which come at step 2.

This step runs in two stages: from system to subsystems, then from subsystems to technical functions.

#### From system to subsystems

The [[decomposition-fonctionnelle-en|functional breakdown]] splits the overall system into coherent **subsystems** which, assembled, deliver the service functions stated in the CdCF. A good split produces blocks with **clean interfaces** (inputs and outputs identified), with enough **technical independence** to be worked on in parallel by the team, and of **comparable size**. A subsystem that on its own accounts for 80% of the project has probably not been split far enough.

The direct representation is a **top-down tree** (overall system at the root, subsystems at level 1, technical functions at level 2). **SADT/IDEF0** diagrams remain a more formal alternative, useful if the team already practises them. The tool matters less than the discipline it imposes, which is making the blocks and their interfaces visible.

The split produced here is not frozen for the whole phase. Exploring the solutions at step 2 can reveal that a block has to be divided (two very different control logics coexist in it) or merged (two blocks in fact share the same structure). Go back and fix it without hesitation.

> [!warning] Watch out
> **The breakdown can reveal a hole in the [[cahier-des-charges-fonctionnel-en|CdCF]].** A forgotten [[FC-en|FC]], a badly stated [[FP-en|FP]], a subsystem that maps to no service function: these signals nearly always surface during the breakdown, because it is the first time the system is looked at from inside. The temptation is to hide them so as not to reopen the approved CdCF review. Do the opposite: record the change, get it approved with the supervisor, then carry on. A CdCF corrected at the start of concept costs a few hours. The same hole found at integration costs weeks.

#### From subsystems to technical functions

The subsystem is defined. What remains is to identify **how it operates**: through which internal technical functions it delivers its share of the service functions. The canonical tool is [[fast-en|FAST]] (*Function Analysis System Technique*): put the subsystem at the root, list the technical functions it has to provide (written as an **infinitive verb plus complement**, like the service functions), then refine each branch down to a grain where each technical function can be set against candidate solutions at step 2.

The distinction is conceptual but crucial: a **service function** (from the [[pieuvre-en|pieuvre]] of the CdCF, the "octopus" diagram of the French function-mapping method) says what service the system delivers to the outside. A **technical function** (from the FAST of this step) says how the system goes about it internally. The same service function can be delivered by several combinations of technical functions. That is exactly what opens the space of solutions explored at the next step.

On the depth of the FAST, the practical rule is simple: go down as long as the technical function cannot be addressed directly by a candidate solution, and stop as soon as it can. Going further means anticipating the [[dossier-technique-en|technical design file]] and committing prematurely to a component.

> [!tip] Tip
> **A FAST gets refined over several passes, not written in one go.** A first high-level pass to set the general structure of the subsystem, then refinement as the exploration of solutions (step 2) turns up missing or redundant technical functions. Aiming for completeness on the first attempt wastes time and prematurely freezes a split that is going to change anyway.

> [!example] Example: 3-axis arm project
> A likely breakdown into three subsystems: **joint mobility** (move the segments, measure position, run the control loop), **user interface** (receive an instruction, display the state), **power and safety** (supply energy, monitor, stop in case of incident). The split does not mirror a division by discipline. Each subsystem draws on electronics, mechanics and software.
>
> [[fast-en|FAST]] of the *joint mobility* subsystem, first pass: **generate torque on each axis** → convert electrical energy into mechanical movement; **measure angular position** → sense the angle of each axis; **control the movement** → compare target and measured position, correct the command; **synchronise the three axes** → bring the joints to the target position in parallel. Each branch will go down one level at step 2, when candidate solutions are set against it.
>
> During this breakdown, the team finds that no service function of the [[cahier-des-charges-fonctionnel-en|CdCF]] explicitly covers **replacing a motor after a failure**. Demountability of the *joint mobility* subsystem was never stated. The signal goes up to the supervisor, the change is approved, and an **[[FC-en|FC]] on demountability** is added to the CdCF with its version number updated. The concept phase resumes without hiding the loop back.

> [!livrable] Deliverable 1/5 — Concept
> - Functional breakdown of the system (subsystems plus technical functions per block, set out as diagrams or a [[fast-en|FAST]], depending on the tool chosen)

### 2. Explore the solutions, discipline by discipline

The breakdown at step 1 brought out the technical functions each subsystem has to provide. Each of them has a field of possible technical solutions. Step 2 explores that field and **chooses, for each subsystem, the solution to be taken forward**. The choice is made locally, branch by disciplinary branch (electronics, mechanics, software), with a single tool: the [[matrice-de-decision-en|decision matrix]]. Choosing across disciplines, for overall compatibility and integration, comes at step 3.

This step runs in two stages: listing the candidate solutions, then building the matrix and choosing.

#### List the candidate solutions

For each subsystem, or for each critical technical function of a complex subsystem, identify **2 to 5 candidate solutions**. No more: the matrix thins out and stops discriminating. No fewer: there is nothing left to compare, and the choice becomes a justification after the fact.

Sources to work through systematically:

- The [[etat-de-l-art-technique-en|technical state of the art]] produced during the technical specification — the first reservoir, already calibrated on existing references
- Manufacturer and distributor catalogues (Conrad, RS, Mouser, Misumi and the like)
- Open-source projects (GitHub, Hackaday, Thingiverse)
- The disciplinary experience carried by the teaching staff and the courses followed
- The team brainstorm — often the source of hybrid solutions that appear in no catalogue

Filter as little as possible at this stage. A solution that looks naive at first sight can become relevant again once it meets the weightings of the CdCF (tight budget, [[ecoconception-en|eco-design]], ease of integration). The filter is the matrix, not the first instinct.

#### Build the matrix and choose

The [[matrice-de-decision-en|decision matrix]] crosses **candidate solutions in columns** with **weighted criteria in rows**. The criteria are chosen by rereading the CdCF: every quantified requirement that tells the solutions apart should have a row in the matrix. Families of criteria to work through:

- **Performance** — torque, accuracy, throughput, battery life, depending on the technical function concerned
- **Cost** — purchase, manufacture, maintenance
- **Size and mass** — often carried by [[FC-en|FC]] in the [[pieuvre-en|pieuvre]] of the [[cahier-des-charges-fonctionnel-en|CdCF]]
- **[[ecoconception-en|Eco-design]]** — consumption in service and in standby, service life, demountability, origin of the materials
- **School feasibility** — supplier availability, lead times, skills the team can call on
- **Technical risk** — maturity of the solution, lessons learned available

The **weighting** of the criteria is justified against the CdCF: a criterion with a heavy weight matches a requirement at F0 or F1, not a comfort value at F3. That traceability is what makes the matrix hold up. If the weighting is not justified, neither is the choice that follows from it.

Eco-design appears here as a weighted criterion, part of the matrix on the same footing as performance or cost, **not as a box to tick at the bottom of the table**. It is one of the structuring conventions of the eco-design framework page: an eco-design score that is traceable from concept onwards keeps the subject from drifting into a cosmetic remark at the final presentation.

The final weighted score ranks the solutions, but does not decide on its own. A solution comes top on score but uses the last unit of a component the school supplier has run out of? Take the second one and record why. **The score guides, the reasoned choice decides.**

> [!warning] Watch out
> **A matrix that scores everything 4/5 decides nothing.** This is the most common failure: out of fairness or out of laziness, the team gives close scores to every solution. The final score no longer discriminates, the "choice" is in fact made on instinct, and the matrix is only window dressing after the fact. A real decision matrix **makes gaps appear**. It does its job precisely when one solution stands out, or gets eliminated.

> [!tip] Tip
> **Splitting into three branches (electronics / mechanics / software) structures the technical work, but does not fix who does what in the team.** A teammate who followed only one branch would lose sight of the system as a whole and would not be able to defend the architecture at the presentation.

> [!example] Example: 3-axis arm project
> *Joint mobility* subsystem, electronics branch. Three candidate solutions for generating torque on each axis: **DC motor plus incremental encoder**, **stepper plus driver**, **integrated servomotor**. Weighted criteria and scores (simplified extract):
>
> | Criterion | Weight | DC + encoder | Stepper + driver | Servomotor |
> |---|---|---|---|---|
> | Torque available | 25% | 3/5 | 4/5 | 3/5 |
> | Angular accuracy | 25% | 2/5 | 4/5 | 5/5 |
> | Unit cost | 20% | 5/5 | 4/5 | 2/5 |
> | [[ecoconception-en\|Eco-design]] (consumption, repairability) | 15% | 4/5 | 2/5 | 3/5 |
> | School feasibility (availability, documentation) | 15% | 4/5 | 5/5 | 3/5 |
> | **Weighted score** | | **3.45** | **3.85** | **3.30** |
>
> **Stepper plus driver** comes top on accuracy and on school feasibility. Weakness identified: a low eco-design score, because of the continuous consumption while holding position. Decision taken: *stepper plus driver*, with a reservation to be cleared at step 4 on holding consumption (an economy mode, or cutting the command at standstill, to be studied). The mechanics branch (articulated structure) and the software branch (synchronised control of the three axes) build their own matrices in parallel.

> [!livrable] Deliverable 2/5 — Concept
> - Reasoned decision matrices (one per subsystem or per critical technical function, with the eco-design criterion included and the weighting justified against the CdCF)

### 3. Settle the overall architecture

Step 2 delivered, for each subsystem and each discipline, solutions settled locally with a [[matrice-de-decision-en|decision matrix]]. Each holds up within its own scope. Nothing guarantees, however, that they hold up **assembled**. That is what step 3 is for: setting the local choices against each other, bringing out the cross-discipline conflicts they cause, then renegotiating whatever has to be renegotiated for the architecture to become coherent. It is the **pivot of the concept phase**: the first time the team decides across several disciplines at once, and the last chance to straighten the architecture before committing to experiments at [[preuve-de-concept-en|proof of concept]].

This step runs in three stages: setting the chosen solutions against each other, characterising the conflicts that appear, renegotiating without breaking everything.

#### Set the chosen solutions against each other

First switch: come out of the disciplinary branches. Each subsystem is reviewed with its chosen solution, annotated on the updated [[schema-bloc-fonctionnel-en|functional block diagram]]. In session, the team shares what each branch has chosen and the assumptions the choice rests on: torque available on the electronics side, size and mass on the mechanics side, latency and command rate on the software side.

The practical method is to **walk the interfaces two at a time**: electronics to mechanics (does the torque supplied cover the mechanical need?), electronics to software (does the command rate fit in the serial bus chosen?), mechanics to software (does the geometric model in the software match the real kinematics of the mechanics?). The move is not to decide, it is to **make the frictions visible**: anything that was not aligned in the silos has to come out here.

At the end of this stage, there is a list of friction points. None of them is settled yet. The worst thing would be to close them too quickly. Better to leave them open for the next stage, which exists precisely to qualify them.

#### Characterise the cross-discipline conflicts

Not all friction points have the same nature or the same severity. For each one, qualify the conflict along three axes:

1. **Nature** — geometric interface (size, mounting, access), physical interface (torque, current, frequency, thermal), or incompatible assumption (a software model that assumes a geometry the mechanics did not choose, for instance).
2. **Scope affected** — how many subsystems are hit, and how many disciplines would have to revisit their step 2 choice if the conflict were to be resolved on the technical side.
3. **Opposability against the [[cahier-des-charges-fonctionnel-en|CdCF]]** — how far the conflict can be held against a stated requirement. A conflict that threatens a requirement at F0 or F1 flexibility comes before one that weighs on an F3. The flexibility set in the CdCF is the natural priority scale.

At the end of this stage, there is a **summary table** of the conflicts identified, ranked. That table is what makes it possible to decide which ones to settle first, and which ones can be left open if they can be decided later (at step 4, rough sizing, or at [[preuve-de-concept-en|proof of concept]] if the residual uncertainty is too great for a desk calculation).

#### Renegotiate without breaking everything

Renegotiation is done **with every affected discipline at once**, never one to one. The classic trap is to pass the conflict back and forth between two branches when a third holds a degree of freedom that unblocks the situation. Bring the conflict out in the open, set out the constraints on each side, explore two or three routes to a resolution with their cost for each discipline.

Three levers, from the cheapest to the most expensive:

1. **Revisit a local choice from step 2** — the [[matrice-de-decision-en|decision matrix]] concerned is reopened with the constraint updated. The solution ranked second sometimes becomes the better one once the new constraint is factored in. This is the preferred lever.
2. **Change the breakdown from step 1** — rarer and more expensive, but legitimate if the interface itself is badly placed (two subsystems that overlap, or one subsystem that should have been divided).
3. **Relax a requirement of the [[cahier-des-charges-fonctionnel-en|CdCF]]** — only if the flexibility allows it (never on an F0 without the agreement of the teaching staff or the client), and with explicit traceability: changing the CdCF is a binding act.

Watch for the anti-pattern that eats away at this step: the branch that is **furthest along** in its work, often software which prototypes quickly, sometimes electronics which has already ordered, ends up imposing its choice on the slowest branch, which has not yet had time to defend its own optimum. Honest renegotiation assumes that every discipline arrives at the table with comparable progress.

At the end of the step, the overall architecture is frozen as a **coherent assembly** of the chosen solutions, and every renegotiation is recorded in the original decision matrices (criterion rows adjusted, scores recomputed). The concept file written at step 5 will be able to build on that traceability.

> [!warning] Watch out
> **The cross-discipline conflict nearly always turns up: each branch has found its local optimum, and assembly reveals the incompatibilities.** The torque the mechanics need exceeds what the electronics drivers can supply within budget. The command rate the software imposes saturates the serial bus. The size of the motors chosen prevents them being fitted to the structure. That is *normal*. It is even the moment when the team learns what settling a trade-off means. The skill to acquire: renegotiate without breaking everything.

> [!tip] Tip
> **Bring every affected discipline in at the same time, not one to one.** A mechanics-to-software conflict handled between two people often ends in a shaky compromise. The same conflict handled between three (mechanics plus software plus the electronics side that tracks consumption and heat) nearly always unblocks a route neither of the first two had seen. The cost of a three-way meeting is far below the cost of a failed compromise.

> [!example] Example: 3-axis arm project
> Coming out of step 2, each discipline has its own choice: mechanics went for **single-axis joints** to simplify [[usinage-en|machining]] and [[impression-3d-en|3D printing]]. Software sized an **inverse kinematics algorithm with an offset** between consecutive axes. Electronics went for **stepper plus driver** with continuous holding, for angular accuracy. Setting them against each other in the team review: two conflicts emerge.
>
> | Conflict | Subsystems affected | Nature | Opposability, CdCF |
> |---|---|---|---|
> | Single-axis joints (mechanics) ↔ inverse kinematics with offset (software) | Joint mobility | Incompatible geometric assumption | F0 — end-of-arm accuracy ± 5 mm |
> | Continuous stepper holding (electronics) ↔ driver heating in extended service | Joint mobility | Physical interface (thermal) | F1 — continuous operating time |
>
> Renegotiation of conflict 1 between the three disciplines: three routes explored. Mechanics reworks the skeleton to build in an offset (high mechanical cost, eco-design margin lost on 3D printing), software reworks the geometric model without an offset (accuracy loss estimated at 8 mm at the end of the arm, outside F0), or a compromise with **a short offset built in on the mechanics side and a calibration lookup table on the software side**. The compromise is taken, with traceability added to the mechanics matrix ("ease of manufacture" criterion readjusted) and to the software matrix ("algorithm complexity" criterion readjusted). Conflict 2 partly falls away as a side effect: the lookup table allows a **command cut at standstill** mode on the electronics side, and the electronics matrix is updated on the eco-design and thermal criteria. The overall architecture is frozen.

> [!livrable] Deliverable 3/5 — Concept
> - Overall architecture of the system (coherent assembly of the solutions chosen by each discipline)
> - Table of the cross-discipline conflicts identified, with the reasoning recorded for each (original step 2 decision matrices updated if there was a renegotiation)

### 4. Rough-size and identify the unknowns

Step 3 froze the architecture as a coherent assembly. What remains is to check that it holds up in figures: torques, currents, latencies, margins. That is what **rough sizing** is for: a verification calculation to an order of magnitude, not the exact calculation that comes in the [[dossier-technique-en|technical design file]]. The move is to set every step 2 choice against a figure, so as to identify what passes with margin, what passes at the limit, and what cannot be calculated with enough confidence.

This step runs in two stages: rough-sizing discipline by discipline, then extracting the list of unknowns that becomes the order placed on the [[preuve-de-concept-en|proof of concept]].

#### Rough-size discipline by discipline

For each subsystem, each disciplinary branch sets down the critical quantities that decide whether the chosen solution is viable: torques, loads, deflections, masses and size on the mechanics side; currents, voltages, heat dissipation, cable lengths on the electronics side; hardware resources (memory, loop rate), target latencies, algorithmic complexity on the software side. The calculation stays at the level of an **order of magnitude**, with textbook formulas, simplified models and explicit assumptions, not fine simulation.

The output of each calculation has the same shape: **calculated value**, **spec value** (of the component or the solution chosen at step 2), **margin** (absolute and relative). A comfortable margin (above 30%) validates the choice. A tight margin (below 10%) flags a point that could turn into an unknown at the next stage. A negative margin invalidates the choice and sends the work back to step 3: renegotiation resumes, with the quantified constraint updated.

#### Identify the unknowns to be resolved at proof of concept

Not every desk calculation settles the matter. Whatever cannot be calculated with enough confidence becomes an **unknown**, not an approximation to be refined but a question to be settled by experiment. Four typical categories:

1. **A tight margin at the limit of the calculation** — the margin calculated is smaller than the accuracy of the model used (a calculation good to 10%, a margin of 5%).
2. **A poorly modelled phenomenon** — friction, mechanical play, thermal drift, transient behaviour under acceleration.
3. **A cross-discipline coupling that is hard to simulate** — software latency against mechanical dynamics, electronics heating against the software control loop.
4. **An unvalidated assumption about use** — real load against nominal load, mission profile, environmental conditions.

Each unknown is **written as a question** an experiment can answer, sorted into its category, and tied to the [[cahier-des-charges-fonctionnel-en|CdCF]] requirement it could tip over. That list, not a narrative report, is what becomes the order placed on the next phase.

> [!warning] Watch out
> **A tight margin is not a margin, it is an unknown.** Faced with a calculation that passes by 5%, the temptation is to refine the calculation until a more comfortable figure appears. If the model used does not have the accuracy for it, refining changes nothing: it dresses an unknown up as a certainty. The healthy reflex is to convert the tight margin into an unknown to be resolved, and let the [[preuve-de-concept-en|proof of concept]] settle it by experiment.

> [!tip] Tip
> **Write each unknown as a question, not as a statement.** "Does the torque available hold at real maximum acceleration?" can be tested. "Acceleration margin uncertain" cannot. Putting it as a question forces you to think ahead to the test protocol, and saves time at [[preuve-de-concept-en|proof of concept]].

> [!example] Example: 3-axis arm project
> Consolidated rough sizing of the *joint mobility* subsystem, an extract across the three disciplines:
>
> | Discipline | Quantity | Calculated value | Spec chosen | Margin | Verdict |
> |---|---|---|---|---|---|
> | Mechanics | Maximum torque on axis 1, nominal load 100 g | 1.2 N·m | 1.5 N·m (stepper) | +25% | OK |
> | Mechanics | Deflection at the end of the arm, nominal load | 3 mm | 5 mm (F0) | +67% | OK |
> | Electronics | Total current, 3 steppers in service | 4.6 A | 5 A (5 V/5 A supply) | +9% | **Tight margin** |
> | Software | Control loop period, simplified model | 0.85 ms | 1 ms target | +18% | OK |
> | Mechanics | Torque at maximum acceleration (transient) | model not trusted | — | — | **Unknown** |
>
> Two unknowns written as questions, tied to the [[cahier-des-charges-fonctionnel-en|CdCF]]:
>
> - **U1** — *Does the torque available from the steppers hold at real maximum acceleration, with the load at the end of the arm?* (category: poorly modelled transient; requirement at stake: F0 end-of-arm accuracy). To be resolved by a motor bench test under step acceleration.
> - **U2** — *Does the power supply hold thermally in extended service with a current margin of +9%?* (category: tight margin plus a poorly modelled electrical-to-thermal coupling; requirement at stake: F1 continuous operating time). To be resolved by a continuous load test with temperature measurement.
>
> These two unknowns become the explicit order placed on the proof-of-concept phase.

> [!livrable] Deliverable 4/5 — Concept
> - Rough sizing by discipline (verification calculations, margins, orders of magnitude)
> - List of the unknowns to be resolved at [[preuve-de-concept-en|proof of concept]]

### 5. Write the concept file

Step 4 delivered the last of the material: rough sizing by discipline and the list of unknowns to be resolved at [[preuve-de-concept-en|proof of concept]]. Step 5 produces nothing new. It **brings the four previous deliverables together** (breakdown, matrices, architecture, rough sizing and unknowns) into a single **concept file**, reread and rewritten for an outside reader, then presented in review.

The move is the direct equivalent of writing the [[cahier-des-charges-fonctionnel-en|CdCF]] at the end of the [[specification-technique-en|technical specification]]: internal working material becomes a reference document the rest of the project can build on. This step runs in three stages: structuring the file, writing each section, getting it approved at the concept review.

#### Structure the concept file

The concept file gathers the deliverables of steps 1 to 4 into five sections, in a narrative that follows the order the team reasoned in: from the *what* (breakdown) to the *how* (disciplinary choices), then to the *whole* (overall architecture), to the *figures* (rough sizing), and finally to *what is left to settle* (unknowns to be resolved at proof of concept).

Five standard sections, in that order:

1. **Introduction and context** — a reminder of the CdCF (mission, service functions, quantified requirements), the scope of the concept phase, the team and the schedule.
2. **Functional breakdown** — subsystems identified and technical functions per block (FAST or an equivalent diagram).
3. **Disciplinary choices** — decision matrices per subsystem or per critical technical function, with the weighting justified against the CdCF.
4. **Overall architecture** — coherent assembly of the chosen solutions, plus the table of cross-discipline conflicts settled.
5. **Rough sizing and unknowns** — verification calculations by discipline, plus the list of unknowns written as questions and tied to the CdCF.

An optional *Appendices* section can hold the detailed calculations, the datasheets of the chosen solutions, or the minutes of the sessions that recorded a renegotiation. The file stays readable without it. The appendices support a deeper reading without weighing down the main narrative.

#### Write each section

Three things to take care over.

Take care over the **form**: a concept file is read by a supervisor or a client who does not follow the project day to day. The figures (FAST, block diagram, matrices, rough-sizing table) must be readable on their own, captioned explicitly with units and assumptions. Page numbers, a clickable contents list, consistent running heads. Comfortable reading makes the review easier.

Take care over the **coherence between sections**: each section refers explicitly to the upstream sections it rests on. The architecture (section 4) points back to the choices (section 3). The rough sizing (section 5) points back to the solutions of section 4. Each unknown points back to the [[cahier-des-charges-fonctionnel-en|CdCF]] requirement it could tip over (the table already built at step 4). Those explicit links are what make the file **verifiable**: a reader can trace the chain of decisions back to the original need.

Take care over the **traceability back to the CdCF**: every chosen solution has to be traceable to a service function identified during the technical specification. If a link is missing (a solution with no originating function, a function with no chosen solution), that is a signal to fix before the review. Any changes to the CdCF made during the concept phase (see the loop back flagged at step 1) are documented explicitly in the *Introduction and context* section, not hidden.

#### Get it approved at the concept review

The **concept review** is the teaching equivalent of an architecture *go / no-go*. It approves or refuses the move to [[preuve-de-concept-en|proof of concept]] and to the [[dossier-technique-en|technical design file]]. Run by the supervisor (and by the client if there is an external one), it checks that the architecture holds up, that it is traceable, and that the next phase has a clear order to work from.

Preparation: a self-review by the whole team, not just by whoever did the writing. A check on overall coherence. Anticipation of the awkward questions: the reason behind every choice must be defensible in under a minute. An oral run-through.

Three nominal outcomes, plus one that loops back. The review **approves without reservation**: the project starts the proof of concept with the list of unknowns as its explicit order. The review **approves with conditions**: one or more points (specify a test protocol, document a CdCF change, complete a rough sizing) to be corrected before the next phase starts. The review **asks for rework**: a choice or a rough sizing has to be renegotiated, going back locally to step 3 or 4. The rarer case to keep in the procedure: **feedback towards the [[specification-technique-en|technical specification]]** if the breakdown reveals a structural hole in the CdCF that could not be absorbed during the phase. Approval commits the project materially, since the technical design file will build on it to place orders.

> [!warning] Watch out
> **Compiling is not writing.** A concept file that simply strings together the deliverables of steps 1 to 4 without a pass across the whole thing does not survive the review: sections contradict each other, material is repeated, figures are duplicated, arguments jump. The move at step 5 is precisely the **critical rereading of the whole** and the **rewriting** of the transitions and justifications that did not exist in the intermediate deliverables.

> [!tip] Tip
> **Hold a dry-run review as a team before the day itself.** A one-hour mock, with a team member playing the supervisor and asking the awkward questions, brings out the poorly defended choices and the unreadable figures. A mock costs far less than a file sent back for rework.

> [!example] Example: 3-axis arm project
> The concept file for the 3-axis arm follows the standard table of contents, instantiated:
>
> 1. **Introduction and context** — a reminder of the [[cahier-des-charges-fonctionnel-en|CdCF]], the scope of concept, the team, the concept review scheduled in week 5. Explicit documentation of a change made at step 1: an [[FC-en|FC]] on demountability added (CdCF loop back flagged and recorded during the phase).
> 2. **Functional breakdown** — 3 subsystems (joint mobility, user interface, power and safety), a [[fast-en|FAST]] per subsystem with technical functions written as a verb plus complement.
> 3. **Disciplinary choices** — one matrix per subsystem, [[ecoconception-en|eco-design]] included as a weighted criterion (not a box to tick), weighting justified against the F0/F1/F3 flexibilities of the CdCF.
> 4. **Overall architecture** — [[schema-bloc-fonctionnel-en|block diagram]] annotated with the chosen solutions (3 steppers plus drivers, a single microcontroller, a PC interface, a 3D-printed structure with a short offset built in), table of the 2 cross-discipline conflicts settled (kinematics against joints, supply thermal).
> 5. **Rough sizing and unknowns** — consolidated rough-sizing table for joint mobility, plus the 2 unknowns U1 (torque at real acceleration) and U2 (thermal endurance of the supply) written as questions and tied to F0 and F1.
>
> Concept review held in week 5, chaired by the teaching staff. File **approved with conditions**, with two additions requested: specify the test protocol for U1, and document in section 1 the updated CdCF version number after the loop back at step 1. The move to [[preuve-de-concept-en|proof of concept]] is set for week 6, with the 2 unknowns as the explicit order.

> [!livrable] Deliverable 5/5 — Concept
> - Concept file brought together in 5 sections (introduction and context / breakdown / choices / architecture / rough sizing and unknowns), traceable back to the CdCF
> - Approval at the concept review by the supervisor (and the client if there is an external one), with the outcome recorded: approved, approved with conditions, local rework or CdCF feedback

## Wrap-up

At this point the architecture is set, justified and roughly sized. The remaining unknowns are listed explicitly. The work now moves on to [[preuve-de-concept-en|proof of concept]], to resolve those unknowns by experiment, before the project is committed materially in the [[dossier-technique-en|technical design file]].

---

## Common pitfalls

**Choosing the final components too early.** Concept settles **technical solutions** (category, principle, order of magnitude), not manufacturer part numbers. The exact choice of components comes in the [[dossier-technique-en|technical design file]], with the precise calculations. Committing to part numbers too early freezes choices before the margins have been validated.

**Letting each discipline finish its matrix before the choices are set against each other.** The cross-discipline conflict is unavoidable, and the later it is found, the more it costs. The matrices are built in parallel, not in series, and the confrontation at step 3 has to follow the local choices immediately.

**Treating eco-design as a box to tick at the bottom of the matrix.** Eco-design is a weighted criterion on the same footing as performance or cost, part of the scores from the disciplinary choices onwards. Without a weighting, it drifts into a cosmetic remark at the final presentation.

**Confusing the technical work split with the allocation of roles.** The electronics / mechanics / software split structures the technical work, not the organisation of the team. A teammate who followed only one branch would lose sight of the system as a whole and would not be able to defend the architecture in review.

**Renegotiating a conflict one to one.** A mechanics-to-software conflict handled between two people often ends in a shaky compromise. Bringing in every affected discipline (electronics included) nearly always unblocks a route neither of the first two had seen. The cost of a three-way meeting is well below that of a failed compromise.

**Dressing a tight margin up as a certainty with a finer calculation.** If the model used does not have the accuracy for it, refining the calculation changes nothing: it dresses an unknown up as a certainty. A tight margin (below 10%) has to be converted into an unknown to be resolved at proof of concept, not into a comfortable figure obtained without experimental checking.

**Skipping the rough sizing.** "We will see about that at proof of concept" produces failed PoCs: without rough sizing, there is no way to know what is being validated experimentally. Rough sizing is what makes the unknowns appear. Without it, the proof of concept has no order to work from.

**Compiling the concept file instead of writing it.** Stringing the deliverables of steps 1 to 4 together with no pass across the whole thing produces contradictions, repetitions and jumps in the argument. The file is rewritten for an outside reader. The transitions and connecting justifications did not exist in the intermediate deliverables.

## During this phase, on the team side

**Interfaces with other subjects: mechanics, manufacturing, software.** The concept phase draws on colleagues' courses more than it repeats them: mechanical sizing of the structures and joints, feasibility of the processes ([[usinage-en|machining]], [[impression-3d-en|3D printing]], [[soudure-en|soldering]]) at the school fablab, software architecture choices if software is covered by colleagues. The conversation with the teachers concerned is set up ahead of the phase, as soon as the CdCF is approved, so that expectations line up and the team does not discover at step 3 that a chosen solution cannot be made at the fablab.

**[[gestion-de-projet-en|Project planning and tracking]].** The architecture decisions at step 3 are structuring ones: every renegotiation updates the [[matrice-de-risques-en|risk matrix]] and the [[retroplanning-en|backward plan]]. The unknowns identified at step 4 become the **order placed on the proof of concept**, and therefore planned tasks in their own right. The concept review (step 5) is a major milestone, written into the backward plan as early as the technical specification. The phase allows steps to overlap in time (step 2 starting before step 1 is closed) but not in the order of the deliverables.

**[[ecoconception-en|Eco-design]].** Concept is the phase where eco-design becomes a criterion for deciding, not a side comment. It is built into the matrices as a weighted criterion from step 2, picked up again at step 3 in the renegotiations (a cross-discipline compromise sometimes improves the eco-design balance, see the 3-axis arm example), picked up again at step 4 in the rough sizing (consumption in service and in standby), and documented explicitly in section 5 of the concept file. The dedicated framework page holds these seeds. The concept file gathers them.

**[[securite-et-qualite-en|Safety and quality]].** The first choices that commit the safety of the system are made here: electrical protection, functional safety, applicable standards. The regulatory requirements identified during the technical specification (CE conformity, low voltage, [[rohs-en|RoHS]] / [[reach-en|REACH]] / [[deee-en|WEEE]]) are **turned into constraints on the choices** from step 2 onwards: a component that does not pass RoHS is eliminated before the matrix, not at the finish line. The dedicated framework page holds these crossings. Concept builds in whatever can be decided at this stage.

## See also

- [[en/conduite/index|Project path hub]]
- Previous step: [[specification-technique-en|Technical specification]]
- Next step: [[preuve-de-concept-en|Proof of concept]]
- [[matrice-de-decision-en|Decision matrix]]
- [[decomposition-fonctionnelle-en|Functional breakdown]]
- [[schema-bloc-fonctionnel-en|Functional block diagram]]
- [[ecoconception-en|Eco-design]] *(cross-cutting thread)*
- [[gestion-de-projet-en|Project planning and tracking]] *(cross-cutting thread)*
