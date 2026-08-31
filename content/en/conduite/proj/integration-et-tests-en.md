---
title: Integration and testing
lang: en
type: trame
phase: 5
phases:
  - integration-et-tests
tags:
  - proj
  - trame
  - phase-5
prerequis:
  - dossier-technique-en
aa:
  - RA-PROJET-C03-3/EEE/2
  - RA-PROJET-C03-3/PROJ/3
  - RA-PROJET-C03-3/PROJ/6
  - RA-PROJET-C05-3/PROJ/1
  - RA-PROJET-C05-3/PROJ/2
  - RA-PROJET-C05-3/PROJ/3
  - RA-PROJET-C05-3/PROJ/4
  - RA-PROJET-C05-3/PROJ/5
draft: false
source_fr: conduite/proj/integration-et-tests.md
source_sha256: e32e88e72137b73e96a4fbda367281774a89e3c5531d7464a30e3752451b54e4
---

**Integration and testing** is the fifth and last phase of a [[mecatronique-en|mechatronics]] project: the approved [[dossier-technique-en|technical design file]] and the orders sent out are turned into a **qualified working prototype**, and then the project is **closed**. It is the ascending branch of the V-model: the work climbs back function by function up to qualification against the [[cahier-des-charges-fonctionnel-en|CdCF]], the French functional requirements specification, and that is where the V closes. It is also the first phase **with no way back upstream**: the end-of-semester calendar forces delivery.

## The right mindset

The temptation at this stage is to believe the hard part is behind you ("we just have to build it and test it"). It has to be resisted. Integration is **exactly where the gaps between thinking and reality show up**, and where those gaps have to be handled **without being able to go back**. It is also the phase that teaches an engineering skill rarely spelled out: **delivering a system with its deviations documented is worth more than not delivering while chasing perfection**. Assessment rests on the **clear-sightedness of the analysis**, not on hitting every CdCF target.

## Goal of this phase

Produce a **qualified prototype** together with a **final report** and a **final presentation**, which:

- brings the parts made and the components received together into a working physical system
- validates each function, then each combination of functions, through a **five-level test pyramid** (a linear cascade)
- confronts the prototype with the **quantified criteria of the CdCF** ([[specification-technique-en|technical specification]]) — the moment when the V closes
- honestly documents the **deviations** where a criterion is not met
- closes the project with three assessments (technical, project, eco-design) and a team lessons-learned review

## Method

### 1. Take delivery and manufacture

Integration starts by collecting what was ordered and making what will be produced in-house. The previous phase, the [[dossier-technique-en|technical design file]], closed the descending branch of the V: drawings frozen, orders sent to the partner suppliers, in-house manufacturing scheduled. Two strands now move **in parallel**: the **goods-in** strand runs at the suppliers' pace, the **in-house manufacturing** strand runs at the pace of the school equipment available.

Working in parallel matters at this stage: waiting for one strand to finish before starting the other burns a large part of the end-of-project margin. The team gets the files into the production queue as soon as the technical design file closes. A late delivery does not stop in-house manufacturing. A busy machine does not stop goods-in. Stock management has to be anticipated, especially if the delivery dates are spread out.

#### Take delivery of external orders as they arrive

Deliveries arrive on different dates depending on the partner supplier (electronics, materials, external subcontracting). At each delivery, the team does three simple things: 1/ check that the delivery note matches the purchase order sent during the [[dossier-technique-en|technical design file]] phase; 2/ check visually that the quantities and part numbers received match; 3/ put everything into organised storage, labelled by batch and by supplier. Delivery non-conformities (wrong part, transport damage, short quantity) are claimed the same day, not the following week.

> [!tip] Tip
> **Labelling at goods-in avoids mix-ups.** One label per bag or per box, with part number, batch and arrival date, takes five minutes and saves half a day the day someone goes looking for "the right stepper".

#### Manufacture in-house at the pace of the equipment available

Three in-house manufacturing routes share the load here: [[impression-3d-en|3D printing]] (sent to the fablab manager as STL files), [[usinage-en|machining]] of simple parts on the school machines, and in-house milling of single-sided [[pcb-en|PCBs]]. Each route has its own queue. The team sends the files (STL, CAM, Gerber) as soon as the technical design file closes, so as to enter the queues as early as possible. In-house manufacturing is not ordered, it is scheduled against the calendar of the machines available.

> [!warning] Watch out
> **A part that has come off the machine is not a validated part.** Looking it over as it comes off is not enough to conclude that it conforms. Formal validation happens at the next step (level 0 of the test pyramid).

> [!example] Example: 3-axis arm project
> Goods-in strand: the 3 NEMA 17 steppers and their drivers arrive at the start of **week 13** from the electronics supplier (5-day lead time). The 3 joints machined in 6061 aluminium arrive at the end of **week 15** from the materials supplier (3-week lead time, which drives the calendar). The passive components (resistors, capacitors, connectors) have been in miscellaneous stock since the end of the technical design file.
>
> In-house manufacturing strand: the 3 segments printed in PLA go into the fablab queue as soon as the STL files are sent to the manager (**week 12**), off the machine in **week 13**. The single-sided [[pcb-en|PCB]] milled in-house is started as soon as the technical design file closes (**week 12**), finished in **week 13**.
>
> By **week 15**, everything is physically available. The constraint that drives the calendar is the aluminium joints arriving last. The other strands finish two weeks earlier.

> [!livrable] Deliverable 1/5 — Integration and testing
> - All parts and components physically available (received plus manufactured)

### 2. Validate the parts made

Integration proper starts here: before any mechatronic function test, every manufacturing output is inspected **on its own**. This is **level 0 of the test pyramid**. A non-conformity that goes undetected at this point contaminates every function test that follows, and diagnosis becomes markedly harder once the parts are assembled.

This step is inherently **disciplinary**, in contrast with the mechatronic function tests of the next step, which are cross-discipline by nature. A [[pcb-en|PCB]] is an electronic object, a machined joint is a mechanical object, [[firmware-en|firmware]] is a software artefact. Level 0 inspects each of those artefacts against the criteria of its own discipline, with its own tools, its own standards and its own typical failure signs. Three subsections follow, in that order: electronics, mechanics, software. If a part fails its level 0, it goes back to step 1 to be remade or replaced, never bodged.

#### Validate the electrical chain

Electronic artefacts, whether made or received, are validated on four axes: 1/ continuity and absence of short circuits on the milled [[pcb-en|PCB]], checked with the [[multimetre-en|multimeter]] in continuity mode; 2/ power supply properly regulated and stable under nominal load, measured on the [[alimentation-electronique-en|bench power supply]] and confirmed on the [[oscilloscope-en|oscilloscope]]; 3/ [[niveaux-de-tension-en|logic levels]] consistent at the [[microcontroleur-en|MCU]] outputs (typically 3.3 V or 5 V depending on the family) and compatible with the inputs of the components downstream (drivers, sensors, displays); 4/ correct response from the drivers on the bench, with no mechanical load, to a reference pulse command. Any non-conformity goes back to step 1: remake the PCB or replace the faulty component.

#### Validate the mechanical parts

Mechanical artefacts are validated visually first (surface quality, [[impression-3d-en|3D printing]] defects such as delamination or under-extrusion, [[usinage-en|machining]] burrs), then dimensionally with the [[pied-a-coulisse-en|vernier caliper]] or the [[comparateur-en|dial indicator]] on the critical dimensions identified in the [[dossier-technique-en|technical design file]] (shaft bores, mounting centre distances, seating flatness). A simple in-house check jig speeds up repetitive checks on runs of identical parts. **Dry-fit assembly** (shaft into bore, fitting to the neighbouring part) reveals the fine non-conformities that no isolated measurement catches. A non-conforming part goes back to manufacturing: reworking is tempting, and it is almost always more expensive than remaking.

#### Validate the firmware and the development environment

The [[firmware-en|firmware]] is largely inherited from the [[preuve-de-concept-en|proof of concept]], but it has to be validated on the final target hardware: compiles without error on the development machine, transfers to the [[microcontroleur-en|MCU]] without rejection, starts up at power-on, answers on the serial console. The development environment itself is validated in parallel: the libraries needed installed on every team machine, a stable version identified and frozen, measurement tools (oscilloscope or logic analyser) talking to the machine. Any non-conformity goes back to the source code, the dependencies or the IDE configuration, not to a connection to be changed in a hurry.

> [!tip] Tip
> **Record every validation on its sheet in the test file, from level 0 onwards.** The test file does not wait for level 1 to start filling up. One level 0 validation sheet per part or per subassembly is an instant diagnosis when a function test fails later.

> [!warning] Watch out
> **Skipping level 0 contaminates every function test that follows.** The classic trap is to think "it looks fine, we will see at assembly": a defect not caught on the individual part shows up later in a function test in an unrecognisable form, and diagnosis takes ten times longer than the initial validation would have.

> [!example] Example: 3-axis arm project
> Level 0 validation carried out in **week 13** as parts arrived and came off the machines, finished in **week 15** when the aluminium joints arrived.
>
> Electrical chain: [[pcb-en|PCB]] milled in-house. Continuity fine on all 32 tracks, one short circuit found near the power connector, cut away with a scalpel and rechecked with the [[multimetre-en|multimeter]]. Logic levels at the [[microcontroleur-en|MCU]] outputs measured at 3.3 V, in line with the rough sizing. 12 V supply regulated and stable at 1.5 A under load. One faulty 100 nF decoupling capacitor replaced.
>
> Mechanical parts: 2 printed segments out of 3 conform. The third shows visible delamination between layers 30 and 45 → back to the fablab for reprinting. Joints machined in 6061 aluminium: dimensions fine on all 3 with the vernier caliper, dry fit with a nominal shaft with no excessive play. A simple jig printed in PLA was used to check the hole centre distances on all three joints.
>
> Firmware and environment: compiles without error, loads onto the target, serial console answers with the expected start-up message. The stepper library from the [[preuve-de-concept-en|proof of concept]] kept as it is. IDE configured identically on all three team machines.
>
> Output of the step: 1 printed segment to remake (off the machine before the end of **week 15**), everything else validated. Validation gates the start of step 3: no function test on a part that has not been validated.

> [!livrable] Deliverable 2/5 — Integration and testing
> - Parts validated individually (level 0), non-conformities dealt with and recorded

### 3. Run the test pyramid

At this stage every part is available and has been validated individually (level 0 achieved at step 2). This is the **heart of the phase**: the **functional test pyramid**, which climbs the ascending branch of the V-model up to qualification against the [[cahier-des-charges-fonctionnel-en|CdCF]]. Mechatronic function tests are cross-discipline by nature. One function of the system draws on electronics, mechanics and software at the same time. That is why the split below is **by function**, not by discipline.

The pyramid runs as a **linear ascending cascade**, with targeted returns to the previous level in case of failure: level 1 (individual functions) → level 2 (combinations of functions) → level 3 (whole system) → level 4 (confrontation with the CdCF). Three principles govern the move between levels. 1/ A level is only tested on levels below it that have already passed. 2/ A failure at one level sends the work back to the previous level, not to the beginning. 3/ Diagnosis tells an **unsuitable test bench** (revisit the protocol) from a **faulty part or logic** (revisit the object under test). Level 4 is the teaching pivot of the whole page, and has its own subsection.

#### Test each CdCF function in isolation (level 1)

Each main function ([[fonction-en|FP]]) and constraint function ([[fonction-en|FC]]) of the [[cahier-des-charges-fonctionnel-en|CdCF]] is tested on its own, on the assembled system but with the function isolated from the others. One point is often misunderstood and worth insisting on: a mechatronic function **already draws on several disciplines**. Testing "turn an axis" brings in electronics (command, power), software (command logic, reading the feedback) and mechanics (mechanical transmission). There is no such thing as a "purely electronic" test at function level. That is exactly what the previous step was doing at level 0, and what the pyramid leaves behind here. The protocol of each individual test reuses the quantified criteria of the CdCF and records the results on its sheet in the test file. Failure → diagnose bench against part, then back to step 2 if the part is at fault.

#### Test combinations of functions, then the whole system (levels 2 and 3)

Once the individual functions have passed, the **combinations** are tested (level 2), then the **whole system** (level 3). At level 2, several individual functions that have to work together are assembled: "reach a target point" combines "turn each axis" plus "compute the inverse kinematics" plus "synchronise the command". At level 3, the whole system is run in its nominal use scenario: user interface, automatic sequences, feedback. Failures at level 2 send the work back to level 1 (an individual function that no longer passes when it passed the day before reveals an interference). Failures at level 3 send the work back to level 2 (the combination is unstable or badly synchronised). The line between level 2 and level 3 is not always sharp in practice. A simple rule: a test that draws on **every** function is a level 3 test, otherwise it is level 2.

#### Qualify the prototype against the CdCF, closing the V (level 4)

Level 4 is the teaching pivot of the phase. The [[cahier-des-charges-fonctionnel-en|CdCF]] from the [[specification-technique-en|technical specification]] comes back out, and **every quantified criterion is ticked off one by one** against the prototype's actual measurements. Three nominal outcomes structure that moment: 1/ **criteria met** → prototype qualified in the full sense; 2/ **criteria partly met** → deviations documented, prototype delivered with its limits acknowledged; 3/ **criteria significantly missed** → deviations documented, with no return upstream. Level 4 produces the **full qualification table** of the test file: CdCF criterion column, target value column, measured value column, status column. It is on that table, and on the analysis of the deviations that goes with it, that a large part of the project's final assessment is decided.

> [!tip] Tip
> **Prepare the level 4 qualification sheet at the start of step 3, alongside levels 1 to 3.** The sheet reuses the grid of quantified criteria straight from the [[specification-technique-en|technical specification]]. Having the table ready before measuring avoids the "write the figures in a notebook and fill it in at the end" effect, which regularly leads to criteria being forgotten at qualification time.

> [!example] Example: 3-axis arm project
> Pyramid tests run in **week 15** on the integrated system, qualification carried out at the end of **week 15**.
>
> Level 1 (individual functions): **FP1** *Turn an axis* tested independently on all 3 axes: command, direction of rotation, travel, software limit. **FP2** *Read the position* tested by step counting. Every individual function passes first time, apart from a software limit overshoot on axis 2, fixed by recalibrating the machine zero.
>
> Level 2 (combinations): *Reach a target point* combines the 3 axes through inverse kinematics plus command synchronisation. Passes on the second attempt after correcting the direction of rotation of axis 3 (reversed in the model).
>
> Level 3 (whole system): run a predefined trajectory from the user interface. Passes, with a slight judder observed at the transitions between trajectory segments, analysed as an effect of the cumulative play in the joints rather than a command fault.
>
> Level 4 (CdCF qualification): confrontation with the quantified criteria from the [[specification-technique-en|technical specification]]. End-of-arm accuracy measured at ± 8 mm against a target of ± 5 mm → criterion **missed**, deviation documented; payload of 100 g carried with no judder → criterion **met**; speed of 45 mm/s against a target of 50 mm/s → criterion **partly met**. Overall status: **prototype qualified with documented deviations**, joint play identified as the main cause, an improvement route (joints on bearings) recorded in the final report.

> [!warning] Watch out
> **At level 4, a deviation gets documented, not recovered.** The end-of-semester calendar forces delivery. There is no way back upstream from this phase. If the accuracy target is missed, the kinematics is **not** redone in a hurry: the deviation goes into the qualification table, its origin is analysed, and improvement routes are documented in the final report. Assessment rests as much on that clear-sightedness as on the raw figures.

> [!livrable] Deliverable 3/5 — Integration and testing
> - Qualified prototype (in the full sense if the CdCF criteria are met, with documented deviations otherwise)
> - Test file (levels 1 to 4, protocols plus results)

### 4. Run the closing assessments

The prototype is qualified (in the full sense, or with deviations documented at step 3). The calendar now forces the move to closing the project. The team runs **three assessments in parallel**, all of them marked, each closing one dimension of the journey: the technical assessment (the system delivered against the requirements set), the project assessment (how it was run against the constraints), the eco-design assessment (the real footprint against the estimated one). The three converge into a reflective **team lessons-learned review**, distinct from the marked assessments.

Running these assessments in parallel rather than one after another is a matter of calendar realism: there is no time left to chain them. In practice, each member of the team can take the lead on one assessment while the others move forward on theirs, with short synchronisation points at the end of each half-day. The lessons-learned review, on the other hand, is done **together**, in a dedicated meeting, because it is where a collective view of the journey emerges.

#### Run the three assessments in parallel

**Technical assessment**: take the qualification table from step 3 and analyse it. For each deviation observed, put forward a **hypothesis about its cause** (with figures where possible) and a **documented improvement route** (with no obligation to validate it, since the project is closing). What the system does well has to appear too. The analysis does not reduce to the deviations. **Project assessment** ([[gestion-de-projet-en|project planning and tracking]]): actual schedule against the planned schedule from the [[retroplanning-en|backward plan]] of the technical specification, budget spent against budget planned, risks from the [[matrice-de-risques-en|risk matrix]] that materialised (or did not, or did so differently). **Eco-design assessment** ([[ecoconception-en|eco-design]]): a **real** [[acv-simplifiee-en|LCA]] on the actual prototype (with aluminium joints, PLA segments, milled [[pcb-en|PCB]]) set against the estimated LCA from the [[dossier-technique-en|technical design file]] (on the theoretical BOM). Identify the differences in footprint and draw a lesson that transfers to the next project.

#### Capitalise through the team lessons-learned review

The team lessons-learned review is a **reflective look back**: what the team would do differently, what it learned collectively about running a mechatronics project. It is not a fourth assessment, it is a **step back** from the previous three. Three canonical questions guide the meeting: 1/ what cost the most time that nobody had anticipated? 2/ which decision would have gained from being taken earlier, or later? 3/ which team practice (synchronisation, record-keeping, anticipation) is worth keeping on a future project? The review is written up in a short form, one page or two. Its value lies in its clear-sightedness, not in its length. It is a facilitation skill in its own right, marked on the same footing as the other assessments.

> [!tip] Tip
> **The lessons-learned review is prepared in a dry run, not improvised out loud.** An hour of collective preparation, where each person writes for themselves before the team pools it, produces a far more useful review than a discussion improvised the day before submission.

> [!warning] Watch out
> **The technical assessment is not just a list of deviations.** The classic pitfall is to list what did not work without saying anything about what did, or about the good reasoning that carried the project. Assessment also rests on the **ability to analyse positively** what was produced, not only on being clear-sighted about the gaps.

> [!example] Example: 3-axis arm project
> Assessments run in **week 15** by the three team members in parallel, lessons-learned review in a dedicated meeting at the end of **week 15**.
>
> **Technical assessment**: end-of-arm accuracy 8 mm against a target of 5 mm, joint play identified as the main cause (improvement routes: joints on bearings, or fewer segments). Payload and speed with no major deviation. The system meets the intended use overall.
>
> **Project assessment**: 4 days of delay absorbed by the initial margin, BOM budget held at €215 excl. VAT (against a €250 envelope), the "aluminium joint lead time" risk from the [[matrice-de-risques-en|risk matrix]] did materialise (3 weeks in practice) without blocking the project, thanks to the orders being anticipated at the end of the technical design file.
>
> **Eco-design assessment**: the real [[acv-simplifiee-en|LCA]] confirms that the steppers dominate the total footprint (around 50%, steel plus copper plus electronics). The machined aluminium accounts for around 30%, in line with the technical design file estimate. No significant difference from the estimated LCA.
>
> **Lessons learned**: "switching from PLA to aluminium at the end of the PoC was expensive in time but saved us on the CdCF. Characterising the joint play earlier, back at concept, would have let us decide sooner. Practice worth keeping: sending the STL files to the fablab manager as soon as the technical design file closed, which gained us two weeks."

> [!livrable] Deliverable 4/5 — Integration and testing
> - 3 assessments (technical, project, eco-design)
> - Team lessons-learned review, written up

### 5. Deliver the project

The integration and testing phase closes with the **written and spoken deliverables** that bring the whole project journey together. Two marked deliverables come on top of the qualified prototype from step 3: the **final report**, which pulls everything together, and the **final presentation**, which shows the panel how clear-sighted the team's analysis is. This step produces no new material. It assembles and presents what was established in steps 1 to 4.

The challenge is to hold the end-of-semester calendar while still delivering clean material. The practical rule: **write first, demonstrate second**. The report is the framework the presentation rests on, not the other way round. Preparing the presentation before the report almost always leads to a rushed report and a presentation with nothing written behind it.

#### Write the final report

The final report brings together the assessments (step 4), the lessons-learned review, the qualification table (step 3) and a summary analysis of the deviations. Its standard structure follows the phases of the V-model in order: a reminder of the [[cahier-des-charges-fonctionnel-en|CdCF]] and the [[specification-technique-en|technical specification]], a summary of [[concept-en|concept]] and of the [[preuve-de-concept-en|proof of concept]], a summary of the [[dossier-technique-en|technical design file]] and the manufacturing choices, tests and qualification, assessments and lessons learned. How much room each section gets reflects its part in the final assessment: qualification (step 3) and the analysis of deviations (step 4) are generally the sections the panel reads most closely. A review with the supervisor is held before submission, to check overall coherence and flag what is missing.

#### Prepare and give the final presentation

The final presentation is **a short, structured demonstration**, not the report read out. Three moments typically structure it: 1/ a **live demonstration** of the prototype in its nominal scenario, which anchors the assessment in something real; 2/ an **honest account of the deviations** observed and where they come from, with no attempt to hide them or to dramatise them; 3/ **the team's own view of its journey**, which shows the clear-sightedness it has acquired. The panel will judge the demonstration and the team's ability to explain **why what does not work does not work** in equal measure. Who speaks when is prepared in advance, along with the questions the panel is likely to ask.

> [!tip] Tip
> **Write the report starting with the assessments, not with the introduction.** The assessments condense the essence of the project. Once they are written, the rest builds itself as background and context. Starting with the introduction leads to endless introductions and conclusions rushed for lack of time.

> [!warning] Watch out
> **Preparing the presentation before the report is almost always a bad idea.** The report is the framework the presentation rests on. The other way round leads to a brilliant presentation that collapses when the panel asks to turn to the report to dig into a point.

> [!example] Example: 3-axis arm project
> Final report submitted on the last day of **week 15**, final presentation the following day before the panel.
>
> **Report**: structured by phases of the V (CdCF → technical specification → concept → PoC → technical design file → integration and testing → assessments and lessons learned). The most developed sections: CdCF qualification (5 pages with the table) and analysis of the deviations (3 pages). Supervisor review two days before submission: a few adjustments to the eco-design section (a better link between real and estimated LCA).
>
> **Presentation**: live demonstration of the arm running a predefined 3-point trajectory, the joint play at the end of travel shown with slow-motion video, an explanation of the 6061 aluminium choice at the end of the PoC and how it was carried into the technical design file, and the team's lessons learned on sending the STL files early as a practice worth keeping. Speaking split: one member per major block (technical / project / eco and lessons learned). Three likely panel questions anticipated and prepared.
>
> Outcome of the phase: prototype qualified with documented deviations, report and presentation delivered on time. The project is officially closed.

> [!livrable] Deliverable 5/5 — Integration and testing
> - Final report (marked written deliverable)
> - Final presentation (marked cross-cutting deliverable)

## Wrap-up

The project is delivered. The prototype is qualified, in the full sense or with documented deviations, the final report brings the assessments and the lessons learned together, and the final presentation shows the clear-sightedness acquired along the way. The V-model is closed: what was promised at [[specification-technique-en|technical specification]] has been confronted with reality. To explore other paths or concepts, go back to the [[en/conduite/index|hub of this wiki]].

---

## Common pitfalls

**Skipping level 0 part validation.** A non-conformity not caught on the individual part shows up later in a function test in an unrecognisable form, and diagnosis takes ten times longer than the initial validation would have.

**Confusing disciplinary validation (step 2) with function testing (step 3).** Level 0 is inherently disciplinary, since an isolated electronic, mechanical or software object is being inspected. Levels 1 to 4 are inherently cross-discipline, because a mechatronic function already draws on several disciplines.

**Splitting the function tests by discipline.** "We test the electronics, then the mechanics, then the software" does not fit the mechatronic nature of the system. From level 1 onwards, the split is **by function**, never by discipline.

**Diagnosing a failed test as a faulty part when it is the test bench.** The reverse happens too. The minimum discipline in diagnosis: isolate the bench on one side and the part on the other, and conclude only once one of the two has been ruled out.

**Preparing the level 4 qualification sheet last.** "We will see at the end" regularly leads to criteria being forgotten when the time comes to qualify. The sheet is prepared at the start of step 3, alongside levels 1 to 3.

**Redoing the kinematics in a hurry when the accuracy is out.** At level 4, a deviation gets documented, not recovered. The calendar forces delivery. Assessment rests as much on clear-sighted analysis as on the raw figures.

**Trying to close every deviation instead of documenting them.** A prototype "qualified with documented deviations" is worth a great deal more than a prototype that never got delivered because someone was still chasing one last criterion.

**Running the three assessments one after another instead of in parallel.** The end-of-phase calendar does not allow it. Each member takes the lead on one assessment while the others move forward on theirs, with short synchronisation points.

**Listing the deviations without saying anything about what worked.** Assessment also rests on the ability to analyse positively what was produced, not only on being clear-sighted about the gaps.

**Confusing the team lessons-learned review with the project assessment.** The project assessment is factual (schedule, budget, risks that materialised), and belongs to project planning and tracking. The lessons-learned review is reflective (what the team would do differently), and is a facilitation skill in its own right. The two are marked separately.

**Preparing the presentation before the report.** The report is the framework the presentation rests on. The other way round leads to a brilliant presentation that collapses when the panel asks to turn to the report to dig into a point.

## During this phase, on the team side

The integration phase draws on the **interfaces with the other technical subjects** more than the previous phases do, because it confronts the assembled system with real conditions of use. On the mechanics side, colleagues' tutorials on manufacturing processes ([[impression-3d-en|3D printing]], [[usinage-en|machining]], assembly) serve as the reference during level 0 validation and integration. On the software side, good practice for deploying [[firmware-en|firmware]] onto target hardware and for instrumenting measurements (acquisition, logging) supports levels 1 to 4 of the pyramid. The electronics tutorial pages ([[pcb-en|PCB]], [[microcontroleur-en|microcontroller]], [[niveaux-de-tension-en|logic levels]], [[cable-management-en|cable management]]) stay reachable from this page for whatever needs going into in more depth.

**[[gestion-de-projet-en|Project planning and tracking]]** is dense in this phase because of the calendar. The initial margin has eroded over the previous phases, and integration is where there is no catching up. Tracking tightens: daily or twice-daily team check-ins, [[matrice-de-risques-en|risk matrix]] updated continuously, short internal milestones (one per level of the pyramid). The project assessment at step 4 closes that strand: actual schedule set against the [[retroplanning-en|backward plan]] from the technical specification, budget spent against budget planned, risks that materialised against the initial matrix.

On the **[[ecoconception-en|eco-design]]** side, the real [[acv-simplifiee-en|LCA]] on the actual prototype closes the arc that started at concept (the first eco filter) and continued at the technical design file (theoretical BOM and estimated LCA). Comparing the real LCA with the estimated one is the main learning moment. The differences between theory and reality point at the blind spots of early estimation, and feed a lesson that transfers to the next project. The eco assessment is documented in its own right at step 4.

On the **[[securite-et-qualite-en|safety and quality]]** side, integration is the first time the **integrated system is handled under power and in motion**. The safety conditions of the tests are formalised explicitly, particularly for level 3 (whole-system test) and level 4 (CdCF qualification), where the system runs in its nominal scenario. The safety protocols (controlled power-up, access to the movement zone, emergency stop within reach) are documented before testing starts, not while it is under way.

## See also

- [[en/conduite/index|Project path hub]]
- Previous step: [[dossier-technique-en|Technical design file]]
- [[cahier-des-charges-fonctionnel-en|Cahier des charges fonctionnel]] *(referenced at level 4 qualification)*
- [[pied-a-coulisse-en|Vernier caliper]] and [[comparateur-en|Dial indicator]] *(dimensional checking of the parts made)*
- [[gestion-de-projet-en|Project planning and tracking]] *(cross-cutting thread)*
- [[ecoconception-en|Eco-design]] *(cross-cutting thread)*
- [[securite-et-qualite-en|Safety and quality]] *(cross-cutting thread)*
