---
title: Technical design file
lang: en
type: trame
phase: 4
phases:
  - dossier-technique
tags:
  - proj
  - trame
  - phase-4
prerequis:
  - preuve-de-concept-en
aa:
  - RA-PROJET-C03-3/PROJ/4
  - RA-PROJET-C03-3/EEE/5
  - RA-PROJET-C04-4/PROJ/6
  - RA-EEE-C03-2/EEE/4
  - RA-MME-C03-1/MME/3
  - RA-MME-C03-1/MME/5
  - RA-ESE-C09-2/ESE/1
  - RA-ESE-C09-2/ESE/2
  - RA-PROJET-C07-1/PROJ/2
  - RA-PROJET-C07-1/PROJ/3
draft: false
source_fr: conduite/proj/dossier-technique.md
source_sha256: 43e4811f73e05519bd8da24c407e770896fc93a8e7960b9a49920131bb6a7feb
---

The **technical design file** is the fourth phase of a [[mecatronique-en|mechatronics]] project: the architecture approved at [[concept-en|concept]] and confirmed by the [[preuve-de-concept-en|proof of concept]] is turned into **detailed buildable drawings**: final electronic schematics, PCB layout, dimensioned mechanical drawings, detailed software architecture, complete bill of materials. It is also the phase where **the project is committed materially**: the final BOM becomes a set of purchase orders sent out. After this phase, the money is spent and the parts arrive.

## The right mindset

The temptation at this stage is to believe the work is done ("we approved the architecture at concept, we just copy it across"). It has to be resisted. The technical design file calls for a **level of precision the concept did not have**: a block diagram becomes a wired electrical schematic, a rough sizing becomes a dimension, a software intention becomes an interface specification. It is also the phase of **multiple sign-off**: three separate people each sign off their own scope. That plurality is where the learning about working in an engineering team happens.

## Goal of this phase

Produce an **aggregated technical design file** that:

- turns the approved architecture into drawings each discipline can **build from** (electronics, mechanics, software)
- consolidates the **final BOM** (components, materials, subcontracting) costed to the cent
- documents a **quantified environmental assessment** ([[ecoconception-en|eco-design]]: simplified LCA on the real BOM against the estimates from [[concept-en|concept]])
- updates the **procurement and manufacturing schedule** and the consolidated budget ([[gestion-de-projet-en|project planning and tracking]])
- is signed off by the **three disciplinary approvers** (the electronics teacher for electronics and software, the mechanics teacher for mechanics and manufacturing, the project coordinator for purchasing and budget)

And it makes the project's material commitment real: **orders sent out**.

## Method

### 1. Bring in the feedback from the proof of concept

The technical design file starts where the [[preuve-de-concept-en|proof of concept]] stops. The proof-of-concept page ended with a review that rules one of three ways: *approved without reservation* (rare), *approved with conditions* (the most frequent, with local rework to bring in) or *structural upstream return* (a proof sent the team back to [[concept-en|concept]] to revisit an architecture decision, which now comes back reworked into the technical design file). In all three cases, the technical design file **inherits material that is no longer exactly the concept's**.

The most frequent mistake at this stage is to open the drawing tools straight away (CAD, schematic editor, IDE) and **start from the concept as it stood at the end of the concept phase**, as if the proof of concept had never happened. This step exists precisely to close that door: take thirty minutes as a team to sort out *what the proof confirmed*, *what it overturned* and *what it sent back upstream to concept*. Without that explicit sorting, what the proof of concept taught evaporates.

#### From the PoC report to the adjustments to bring in

Take the proof-of-concept report and list, point by point, what changes for the technical design file. Three families of adjustment to tell apart:

1. **Components confirmed** — the step 2 choices from [[concept-en|concept]] (decision matrices) that passed without reservation. Part number, supplier and order of magnitude of cost are all validated. They go straight into the final BOM (step 3) with no rereading.
2. **Components or solutions overturned** — coming out of a *local adjustment* or a *structural upstream return* at the end of the PoC. The decision has to be recorded: which proof failed, which alternative was chosen, on what grounds. The disciplinary approvers will ask for that record again at step 4.
3. **New constraints** — measured values that now apply (maximum torques observed, peak currents, cycle times measured), or constraints that emerged from the test protocol (assembly alignment, sensitivity to mounting, and so on). To be carried into the quantified requirements passed on to the disciplines.

> [!tip] Tip
> **A summary page, not a spoken meeting.** Write a *before* / *after* PoC table, dated and with names on it. Without a written record, the three disciplines each rebuild a different version of the report and each decides in its own corner.

#### Propagate the adjustments to all three disciplines

Almost every adjustment from the previous subsection affects **more than one discipline**. A component overturned on the mechanics side changes the mass at the end of the arm, so the torque the electronics has to supply, so the command the software has to produce. A test protocol that revealed thermal drift imposes a compensation setting in software and an electrical sizing with extra margin. The discipline that propagates the adjustments is not necessarily the one that found them at PoC.

In practice: for each adjustment, identify as a team the disciplines affected and note the expected effect: *mass +30%, torque to be recalculated*, *supplier lead time +2 weeks, schedule to be reset*, *[[ecoconception-en|eco-design]] balance to be redone on the new material*. That propagation work is what opens step 2 (drawings by discipline) and step 3 (BOM plus LCA plus schedule) cleanly.

> [!warning] Watch out
> **Starting again from the concept drawings amounts to erasing the PoC.** Before opening a single production tool (CAD, schematic editor, IDE), freeze the list of adjustments to propagate as a team. Five written lines save ten hours of backtracking.

> [!example] Example: 3-axis arm project
> The proof of concept on the joints printed in PLA at 60% infill showed the angular play going past the 0.5° criterion from around 500 cycles (crushing of the housing), well short of the 1000 cycles targeted. The team ruled a *structural upstream return* (switch to joints machined in 6061 aluminium). The compromise of a short offset on the mechanics side plus a lookup table on the software side comes from the original architecture trade-off at concept (kinematics against joints conflict) and stays in place. Three families of adjustment to propagate into the technical design file:
>
> - **Components confirmed**: steppers plus drivers plus [[microcontroleur-en|microcontroller]] plus 12 V supply (the step 2 electronics matrix from concept is unchanged).
> - **Components overturned**: [[pla-en|PLA]] printed joints → [[usinage-en|machined]] 6061 aluminium joints. To be recorded in the BOM (*PLA filament* line removed, *Ø20 mm aluminium bar plus subcontracted machining* line added) and in the LCA (the steel and copper of the steppers were already identified as the dominant footprint at concept; to be confirmed or revised with the new aluminium line).
> - **New constraints**: machined joint mass +35% against PLA → torque at the end of the axis to be recalculated before freezing the stepper part numbers; subcontracted machining lead time around 3 weeks → procurement [[retroplanning-en|backward plan]] to be reset.
>
> Summary written on page 1 of the technical design file, dated and signed by the three students. Step 2 opens on that basis.

> [!livrable] Deliverable 1/5 — Technical design file
> - Written summary of the adjustments to bring in (components confirmed, components overturned, new constraints), dated and with names on it, with the propagation to the disciplines affected identified

### 2. Detail the drawings, discipline by discipline

Entering this step, the summary of adjustments is frozen and propagated to the three disciplines. The work then splits **in parallel**: each member of the team goes back to their branch to turn the rough sizing from [[concept-en|concept]] (order-of-magnitude calculations, blocks and outline schematics) into **buildable drawings**: wiring schematics, dimensioned drawings, detailed software architecture. The level of precision expected is qualitatively different from step 2 of concept: what was then written in qualitative terms ("stepper plus driver", "machined joint", "synchronous command") now has to carry figures, dimensions and specifications at the level of the component and the interface.

Going back to a **disciplinary grid** marks the difference with the [[preuve-de-concept-en|proof of concept]], which was organised *by unknown*. Here the work is in-depth work by discipline. That said, the end of the step is not the sum of three independent files: before going to find the external approvers (step 4), the team holds an **internal cross-discipline coherence review**, which can reveal conflicts the rough sizings at concept had not seen.

#### Work in parallel by discipline

The three branches work in parallel on their disciplinary deliverable, at a level of precision systematically above that of concept:

- **Electronics** — wiring schematics (final components referenced, passive values, connectors specified), [[pcb-en|PCB]] layout if the board is custom (in-house production possible on the milling machine for a single-sided board; otherwise a documented prototyping board), costed electronic parts list with supplier references. Typical tools: KiCad, EasyEDA, or equivalent.
- **Mechanics** — dimensioned drawings with ISO tolerances, material choice argued (beyond the concept decision), manufacturing process specified ([[impression-3d-en|3D printing]], [[usinage-en|machining]], assembly), exportable files (STL, DXF, STEP) depending on the process. Typical tools: Fusion 360, FreeCAD, SolidWorks.
- **Software** — detailed software architecture (modules, dependencies, data flows), interface specifications (serial protocols, frame formats, internal APIs), shared data structures. UML diagrams or equivalent for the overall view.

Who does what was settled at the start of the concept phase and usually holds for the whole project. If one discipline spills over into another (for instance, an electronic component forces a particular mechanical assembly), that is negotiated at the coherence review below, not one to one.

> [!tip] Tip
> **Reuse the [[schema-bloc-fonctionnel-en|functional block diagram]] from concept as an interface map.** That diagram has lost its decision-making purpose, since the solutions are settled, but it regains an operational one: it identifies every point of contact between disciplines, and therefore every interface specification to freeze during this step.

#### Check cross-discipline coherence before the external approvers

Once the three disciplinary outputs are in place, the team gets together for an **internal review**, *before* going to see the external approvers (step 4). The aim is to check that the three sets of drawings fit together cleanly across three families of interface.

1. **Physical interfaces** — mounting of the electronic components on the mechanical parts (fasteners, holes, access), cable routing, size constraints, heat dissipated near sensitive materials.
2. **Electrical interfaces** — voltages and currents compatible between supply, drivers, [[microcontroleur-en|microcontroller]] and sensors; connectors (rating, type, polarity); protection against back-EMF or switching spikes.
3. **Software interfaces** — timings met (sensor sampling, motor command rate), communication protocols between components (serial, I²C, SPI), data formats and consistent units (degree against radian, ms against µs).

If the review reveals a conflict that no local renegotiation resolves (for example, a supply voltage incompatible with a requirement of the [[cahier-des-charges-fonctionnel-en|CdCF]], the French functional requirements specification), the team goes back to [[concept-en|concept]] to revisit a [[matrice-de-decision-en|decision matrix]]. That case stays rare at this stage, but it happens. Hence the value of this internal review before the sign-off round.

> [!warning] Watch out
> **An interface specification is not an internal specification.** Interfaces are the only things several people have to be able to read: voltages, signals, holes, protocols, formats. The internal specification of each discipline stays its own business. It is the interface that gets documented for the others.

> [!example] Example: 3-axis arm project
> Electronics: wiring schematic finalised (3 drivers plus [[microcontroleur-en|microcontroller]] plus regulated 12 V supply), parts list with references; [[pcb-en|PCB]] laid out for the control module (5 by 7 cm board, single-sided, milled in-house at the school). Mechanics: dimensioned drawings of the 3 segments and the 3 [[usinage-en|machined]] 6061 aluminium joints (ISO 2768 m tolerances, machining finishes specified), M3 and M5 fastener list. Software: software architecture in 4 modules (inverse kinematics / synchronous command of the 3 axes / offset compensation lookup table / serial interface), specification of the PC-to-microcontroller serial protocol (frame format, rate, error handling).
>
> Internal cross-discipline coherence review held as a team before the approver appointments: 2 conflicts raised and settled with no loop back to concept: (1) PCB height under the 2nd mechanical segment incompatible with a straight connector, resolved by switching to a right-angle connector; (2) serial protocol at 9600 baud initially, judged too slow for the control loop rate, raised to 115 200 baud after checking microcontroller compatibility.
>
> Review recorded on a dedicated page of the file (date, participants, conflicts identified, decisions). The external approvers will ask for that page at step 4.

> [!livrable] Deliverable 2/5 — Technical design file
> - Detailed drawings by discipline (wiring schematics plus [[pcb-en|PCB]] layout plus dimensioned drawings plus software architecture plus interface specifications) at a level of precision that can be built from
> - Internal cross-discipline coherence review page (date, participants, conflicts, decisions)

### 3. Consolidate the BOM and quantify the environmental side

The disciplinary drawings produced at step 2 become **a single aggregated body of material** here: the final costed BOM. It is also the moment when [[ecoconception-en|eco-design]] moves from qualitative estimates at concept to a **quantified balance** on real part numbers, and when the procurement schedule is set against the lead times of the components actually chosen. Three dense deliverables, to be produced in a precise order: the BOM feeds the LCA, and the BOM plus the lead times feed the schedule.

Particular to a school project: the **BOM is built on a catalogue of partner suppliers** negotiated by the institution (an electronics partner for active and passive components, a materials partner for metals and plastics, a fablab partner for subcontracted [[usinage-en|machining]] and [[impression-3d-en|3D printing]] when the in-house equipment is not enough). That constraint is **structuring**: it limits which part numbers are available, and it fixes known pricing and documented lead times. If a component chosen at step 2 has no equivalent in the catalogue, either the team settles it internally (a straight substitution), or it goes up to the project coordinator (an off-catalogue purchase, with a heavier process).

#### Consolidate the final costed BOM

Aggregate the three disciplinary parts lists (electronics, mechanics, software, though software rarely consumes hardware of its own beyond the development PC) into a single [[bom-en|BOM]], line by line: *item, partner catalogue reference, quantity, unit price excluding VAT, total excluding VAT, quoted lead time*. The costing is expected **to the cent**: that level of precision is what makes the total comparable with the budget envelope when the budget is consolidated below. Any off-catalogue line is flagged explicitly (*off catalogue, price to be negotiated*) with its estimated extra cost.

> [!tip] Tip
> **Start the BOM with the components confirmed at step 1.** Those lines are stable and cost up quickly. Keep the overturned components for last: they may need a round trip with the partner (availability, lead time) or involve subcontracting to be costed separately.

#### Quantify eco-design on the real BOM

Step 3 is the **first moment when [[ecoconception-en|eco-design]] becomes quantitative**. At concept, the choices were made on qualitative estimates ("the electronic components dominate the footprint" rather than "73% of the footprint comes from the steppers"). With the real BOM, a [[acv-simplifiee-en|simplified LCA]] becomes possible: footprint by category (electronics / mechanics / manufacturing / consumables), identification of the dominant contributor or contributors, comparison with the qualitative estimate from concept.

The LCA at this step is not meant to be a standards-compliant one (no ISO 14040). It stays *simplified*, based on documented emission factors (databases such as Base IMPACTS®, the GHG Protocol, or bounded estimates). Its working value is to put figures behind the eco-design decisions and to feed the conclusion the approvers will read at step 4.

#### Consolidate the procurement schedule and the budget

On the basis of the lead times quoted in the BOM, build the **procurement backward plan**: the latest order date compatible with the parts arriving before [[integration-et-tests-en|integration and testing]] starts. The guiding rule: the part that takes longest to arrive fixes the deadline for sending orders. Any margin gets eaten by the unexpected (partner out of stock, transport, quoted values not met).

In parallel, the **consolidated budget** is compared with the project's initial envelope (set by the institution or negotiated at the start of the project). Three possible outcomes:

1. **Budget within the envelope** — move to step 4 with no alert.
2. **Marginal overrun** — settled internally (a compromise on a non-critical component, or a reasoned request for extra funds to the project coordinator).
3. **Structural overrun** — feedback towards [[concept-en|concept]]: the [[matrice-de-decision-en|decision matrix]] chose a solution outside the target budget. Step 2 of concept is revisited on the cost axis.

> [!warning] Watch out
> **A budget outside the envelope is not fixed by ordering less.** Teams are sometimes tempted to cut quantities or skip safety measures to get back inside the envelope. That is an open door to a failed integration or to a [[securite-et-qualite-en|safety and quality]] non-conformity. If the envelope is structurally exceeded, it is the concept that has to be revisited, not the BOM that has to be cut.

> [!example] Example: 3-axis arm project
> Final BOM costed from the school partner catalogue:
>
> | Item | Catalogue ref. | Qty | Unit excl. VAT | Total excl. VAT | Lead time |
> | --- | --- | --- | --- | --- | --- |
> | NEMA 17 stepper, 1.8°/step | ELEC-MOT-N17 | 3 | €14.80 | €44.40 | 5 d |
> | A4988 driver | ELEC-DRV-A49 | 3 | €4.20 | €12.60 | 5 d |
> | Arduino-compatible [[microcontroleur-en\|MCU]] | ELEC-MCU-ARD | 1 | €22.00 | €22.00 | 5 d |
> | Regulated 12 V / 5 A supply | ELEC-ALI-125 | 1 | €18.50 | €18.50 | 5 d |
> | 6061 aluminium bar, Ø20 mm × 1 m | MAT-ALU-6061-20 | 1 | €12.30 | €12.30 | 7 d |
> | Machining of 3 joints (fablab subcontract) | SST-USI-3PCS | 1 | €95.00 | €95.00 | 15 d |
> | M3 and M5 fasteners (set) | MAT-VIS-LOT | 1 | €8.40 | €8.40 | 5 d |
> | **Total excl. VAT** |   |   |   | **€213.20** | **15 d (max)** |
>
> Simplified LCA: the new *aluminium bar plus subcontracted machining* line contributes around 28% of the total footprint (against around 3% for the old printed PLA line), driven by primary aluminium and the energy of [[usinage-en|machining]]. The steppers nonetheless remain the dominant contributor (around 52%, steel plus copper plus electronics). A finding to carry into the eco-design conclusion: the structural upstream return from *[[pla-en|PLA]] to machined aluminium* has a real environmental cost, partly offset if the aluminium comes from recycled stock (to be explored with the materials partner).
>
> Procurement backward plan: subcontracted machining at 15 days of lead time → order deadline set 3 weeks before [[integration-et-tests-en|integration and testing]] starts. Consolidated budget €213.20 excl. VAT, under the initial envelope of €250. Move to step 4 with no alert.
>
> Summary written on pages 2 to 4 of the technical design file (BOM plus LCA plus schedule), ready for the sign-off round at step 4.

> [!livrable] Deliverable 3/5 — Technical design file
> - Final BOM costed to the cent, partner catalogue references explicit, off-catalogue lines flagged
> - Quantified environmental assessment ([[acv-simplifiee-en|simplified LCA]] on the real BOM, dominant contributors identified)
> - Procurement backward plan and consolidated budget, compared with the initial envelope

### 4. Write the aggregated file and get it signed off

With the BOM costed, the LCA quantified and the schedule consolidated, the three structuring deliverables are in place. What remains is to **assemble them into a single coherent file** and get it signed off. This is the pivot step of the phase, because it is the one that authorises the orders (step 5). Sign-off is not a single act: three separate people each sign off their own scope, then the supervisor approves the whole at an overall review.

This **three-plus-one sign-off** is the central lesson of the phase. It reproduces in miniature how an industrial project works: a project manager does not sign off alone on a file that commits electronics, mechanics, purchasing and the schedule. They rely on separate disciplinary approvers whose technical responsibility is segmented. At school, that segmentation is carried by three figures: the electronics teacher (who also covers software), the mechanics teacher (who also covers manufacturing) and the project coordinator (who also covers the budget). Learning to coordinate that plurality is itself a teaching goal of the phase.

#### Prepare the sign-off round

Before each of the three appointments, the team **prepares a targeted sub-file** on that approver's scope. The full file exists, but sending it raw to each approver dilutes the reading work (each of them has to find their scope inside the whole). Targeting improves the rate of useful feedback and shortens the appointment.

Three things to freeze before booking the appointments:

- **The exact scope signed off by each person** — no ambiguity about who signs off what. A point signed off twice is wasted. A point signed off by nobody blocks the project.
- **The list of open questions** the team wants to raise with that approver (rough-sizing assumptions not yet verified, a material choice to debate, a departure from the concept estimate to explain).
- **The form of feedback expected** — straight sign-off, sign-off with conditions (a list of adjustments to bring in), or refusal (with the reason and the route back).

#### Run the three disciplinary sign-offs

The three appointments are held **separately**, over one or two weeks depending on availability. Logical order: start with the approver whose feedback can **feed back into the other files** (typically the electronics teacher when electronics is structuring, or the mechanics teacher when the process drives the schedule), and keep the project coordinator for last, since they consolidate budget and schedule, which depend on the earlier adjustments.

During each appointment, the team **takes structured notes**: what is signed off straight away, what needs an adjustment, what is not signed off. On the way out, either the sub-file is signed off, or the list of adjustments is brought in and the sub-file presented again at a short second appointment. The "refusal with upstream return" case is rare at this stage, since a well-run PoC and a conscientious internal review head it off, but it happens. It then means going back to step 3 (BOM and schedule adjustment) or even to [[concept-en|concept]] (a matrix to revisit).

#### Get the whole thing approved at the overall review

Once the three disciplinary sign-offs are in, the team organises an **overall review with the supervisor**. That review does not redo the technical sign-offs. Those are settled. It checks three things: (1) the **coherence between the parts** of the aggregated file (the feedback from the three approvers does not contradict itself, and the adjustments brought in for one have not broken another), (2) the **quality of the argument** (a technical design file does not just set out drawings, it motivates them: material choice, protocol choice, LCA ranking), (3) the **readability by an outsider** (could an engineer from outside the project pick the file up?).

It is that overall review that produces the **green light for step 5**: authorisation to send the orders. Without it, the file is signed off in parts but commits nothing materially.

> [!warning] Watch out
> **Three separate people do not synchronise in one meeting.** Three separate appointments have to be **organised** with three people whose diaries are independent. Plan at least two weeks ahead, otherwise the team will be stuck when the time comes to send the orders and the whole downstream schedule will slip.

> [!tip] Tip
> **Open each appointment with the key deliverables for that scope.** The approver has little time: starting with the targeted deliverables, rather than with the history of the phase, maximises useful feedback. The history comes out if asked, not by default.

> [!example] Example: 3-axis arm project
> How the sign-off round was split:
>
> | Approver | Scope signed off | Deliverables presented | Open questions | Outcome |
> | --- | --- | --- | --- | --- |
> | Electronics teacher | electronics and software | Wiring schematics, [[pcb-en\|PCB]] layout, software architecture, protocol spec | Is 12 V → 5 V regulation enough? | Signed off with conditions (add 100 nF decoupling on each driver) |
> | Mechanics teacher | mechanics and manufacturing | Dimensioned drawings, 6061 aluminium choice, [[usinage-en\|machining]] subcontract | Is ISO 2768 m tolerance enough on the joints? | Signed off with conditions (specify surface finish Ra ≤ 1.6 on the bearing seats) |
> | Project coordinator | purchasing and budget | Final BOM €213.20 excl. VAT, procurement backward plan, [[acv-simplifiee-en\|simplified LCA]] | A right-angle connector outside the partner catalogue? | Signed off (substitution accepted, €1.80 excl. VAT, not blocking) |
>
> Adjustments brought in as a team (3 days of rework), then the overall review with the supervisor: coherence between the parts fine, the argument for the [[pla-en|PLA]] to aluminium upstream return judged solid, the [[ecoconception-en|eco-design]] conclusion readable. **Overall approval obtained, step 5 open**.

> [!livrable] Deliverable 4/5 — Technical design file
> - Aggregated technical design file, signed off in parts (by the 3 disciplinary approvers) and as a whole (by the supervisor at the overall review)
> - Written record of the adjustments each approver asked for and of how they were brought in

### 5. Place the orders

With overall approval obtained, step 5 opens. It is the **shortest** step of the phase in active time, but the **most committing**: from here on, the money is spent, the parts arrive, and the project moves from paper to hardware. Any later rework, if a non-conformity turns up at integration, will happen in degraded conditions: reorder, pay a second time, lose weeks.

The team's role at this step is no longer to decide, since the choices are settled, but to **prepare the purchase orders at the level of precision the partner suppliers expect**, and to **record** what goes out. Sending the orders is generally handled by the project coordinator at school (signature, internal school approval, transmission to the supplier), but the team is responsible for line-by-line consistency between the approved BOM and the purchase order sent.

#### Prepare the purchase orders

One purchase order per partner supplier, not one aggregated order for every BOM line: that is the format the school purchasing process expects and the format the partners issue. Three partner suppliers means three purchase orders to prepare in parallel.

What each purchase order has to carry:

- **The lines within that supplier's scope** — a line-by-line copy of the matching BOM section (item, catalogue reference, quantity, unit price excluding VAT, total excluding VAT).
- **The step 4 adjustments brought in** — the conditions set by the approvers (for instance 100 nF decoupling per driver, surface finish Ra ≤ 1.6) are carried into the order specification whenever they change a part number or a quantity.
- **The school delivery address** and the project coordinator's contact details for receipt.
- **The internal project reference** (school project code) for accounting traceability.

#### Place and record

Sending the order is handled by the project coordinator (signature, school approval, transmission). The team looks after **traceability**: for each order sent, keep the order number returned, the date it was sent, the actual amount including VAT (different from the total excluding VAT if VAT was not in the BOM), and the delivery date quoted. That information feeds the [[retroplanning-en|backward plan]] for [[integration-et-tests-en|integration and testing]]: the latest delivery date fixes when the next phase can actually start.

On receipt, **check conformity** line by line before opening integration: part received against part ordered, quantity received against quantity ordered, apparent condition. A non-conformity at receipt is better handled on the spot (returned to the supplier) than found two weeks later during integration.

> [!warning] Watch out
> **Sending orders before overall approval is a failed step.** Authorisation to order comes from step 4 (the supervisor's overall review), not from the satisfaction of having a file that looks complete. Any order sent without that authorisation breaches the school process and is hard to reverse. The partner has delivered and the school has paid.

> [!tip] Tip
> **Track it in a shared table: *ordered / delivery quoted / actually delivered / receipt checked*.** Four columns alongside the BOM. Without that table, a late line goes unnoticed until it blocks integration.

> [!example] Example: 3-axis arm project
> Three purchase orders prepared in parallel:
>
> - **Electronics partner** — 3 NEMA 17 steppers (ELEC-MOT-N17), 3 A4988 drivers (ELEC-DRV-A49), 1 Arduino-compatible [[microcontroleur-en|microcontroller]] (ELEC-MCU-ARD), 1 12 V / 5 A supply (ELEC-ALI-125), 3 ceramic 100 nF capacitors (ELEC-PAS-100N, a step 4 adjustment for driver decoupling), connectors and common passives → around €98 excl. VAT. **[[pcb-en|PCB]] not ordered**: milled in-house at the school (single-sided, 5 by 7 cm board).
> - **Materials partner** — 1 aluminium 6061 bar, Ø20 mm × 1 m (MAT-ALU-6061-20), M3 and M5 fastener set (MAT-VIS-LOT) → around €21 excl. VAT.
> - **Fablab and workshop partner** — subcontracted [[usinage-en|machining]] of the 3 joints (SST-USI-3PCS) with an ISO 2768 m tolerance spec plus surface finish Ra ≤ 1.6 on the bearing seats (step 4 adjustment) → around €95 excl. VAT.
>
> Orders sent by the project coordinator one week after overall approval. Order numbers kept and carried into the team's tracking table. Full delivery quoted for week 4 (the machining cycle being the longest). Receipt checked and conforming, [[integration-et-tests-en|integration and testing]] opens in week 4.

> [!livrable] Deliverable 5/5 — Technical design file
> - Purchase orders sent (one per partner supplier), with the step 4 adjustments carried into the specification
> - Order and delivery tracking table (order reference, dates, amounts, conformity on receipt)

## Wrap-up

At this point the technical design file is signed off in parts and as a whole, the BOM is costed and ordered, and the environmental assessment is quantified on the real basis. The project tips over materially: the parts arrive, the money is spent. The work now moves on to [[integration-et-tests-en|integration and testing]], to climb the ascending branch of the V-model and confront the prototype with the CdCF.

---

## Common pitfalls

**Reusing the rough sizing from concept without bringing in the PoC adjustments.** Step 1 exists precisely to close that door. If it is skipped, the technical design file is disconnected from the work of resolving unknowns that has just been done.

**Confusing an interface specification with an internal specification.** Interfaces are the only deliverable the other disciplines read. The internal specification stays the business of the discipline that produces it.

**Putting off the internal cross-discipline review until after the teachers.** Going to the external approvers with three files that do not fit together internally wastes everyone's time. The internal review happens *before* the sign-off round, not during it.

**Building the BOM without the partner supplier constraint.** Finding the perfect part number at a general distributor is useless if it is not in the partner catalogue. Sourcing happens on a closed catalogue, not on the open market.

**Putting off eco-design until the end of the project.** The simplified LCA can be quantified as early as step 3 on the real BOM. Putting it off deprives the file of a structuring deliverable and loses its value for deciding (material choice, recycled alternative).

**Discovering a budget overrun at step 5.** By the time the orders are being sent, it is too late to loop back to concept cleanly. The running total is checked at every line added to the BOM, not at the end.

**Cutting the BOM to fit the envelope.** Reducing quantities or removing safety measures to stay under budget is an open door to a failed integration. If the overrun is structural, it is the concept that has to be revisited, not the BOM that has to be trimmed.

**Underestimating how much calendar time the sign-off round takes.** Three people with independent diaries do not synchronise in one meeting. Plan two weeks minimum, otherwise the downstream schedule slips.

**Sending the full file to every approver.** Diluting the reading work across the whole lowers the rate of useful feedback. Targeting the sub-file on the approver's scope is the rule.

**Sending the orders before overall approval.** Authorisation comes from the supervisor's overall review, not from the satisfaction of having a file that looks complete. An order sent without that authorisation breaches the school process.

**Neglecting to record order numbers and delivery dates.** Without a tracking table alongside the BOM, a late line goes unnoticed until it blocks integration. The order numbers are also the accounting trail for the school.

## During this phase, on the team side

**Interfaces with other subjects.** The technical design file is the phase where colleagues' courses take on their strongest operational resonance. On the mechanics side, what was learned about functional dimensioning, material choice and manufacturing processes ([[usinage-en|machining]], [[impression-3d-en|3D printing]], assembly) becomes deliverables to produce: dimensioned drawings with ISO tolerances, material justification, finish specifications. On the software side, the notions of software architecture, interface specifications and data structures move from course level to the level of a deliverable that can be signed off. This page only points to that disciplinary learning without repeating it: it connects what belongs to electronics and embedded software with what colleagues cover in their own courses.

**Project planning and tracking.** The [[gestion-de-projet-en|project planning and tracking]] thread is unusually heavy in this phase. Three strands interlock: the **procurement schedule** (a [[retroplanning-en|backward plan]] on partner supplier lead times), the **consolidated budget** to steer against the initial envelope, and the **coordination of the sign-off round** (three appointments to book, adjustments to bring in between them, an overall review to organise). The student team's project manager carries all three at once, which makes this the most demanding phase of the role.

**Eco-design.** The [[ecoconception-en|eco-design]] thread moves from qualitative to quantitative: the [[acv-simplifiee-en|simplified LCA]] on the real BOM is the project's first eco deliverable carrying figures. The ranking of contributors (which components weigh in the CO₂e balance) feeds the eco-design conclusion directly, and can motivate one last material trade-off (primary against recycled aluminium, for instance) before the order goes out. It is also the moment to flag the points the project could not resolve, such as a material that cannot be recycled in the school loop or a complicated end of life, so that a later project can pick them up.

**Safety and quality.** The [[securite-et-qualite-en|safety and quality]] thread shows up at step 2 (bringing safety constraints into the drawings: guards, emergency stops, access to maintenance points) and at step 5 (compliance with the school purchasing process, accounting traceability). The discipline of **written records** (the PoC summary page, the internal review page, the record of approved adjustments, the order numbers kept) is not administrative comfort: it is what lets an outsider (an approver, a successor, an auditor) pick the project up without starting from scratch.

## See also

- [[en/conduite/index|Project path hub]]
- Previous step: [[preuve-de-concept-en|Proof of concept]]
- Next step: [[integration-et-tests-en|Integration and testing]]
- [[pcb-en|PCB]]
- [[gestion-de-projet-en|Project planning and tracking]] *(cross-cutting thread)*
- [[ecoconception-en|Eco-design]] *(cross-cutting thread)*
- [[securite-et-qualite-en|Safety and quality]] *(cross-cutting thread)*
