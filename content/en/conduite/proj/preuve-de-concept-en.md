---
title: Proof of concept
type: trame
phase: 3
phases:
  - preuve-de-concept
tags:
  - proj
  - trame
  - phase-3
prerequis:
  - concept-en
aa:
  - RA-PROJET-C05-3/PROJ/2
  - RA-PROJET-C05-3/PROJ/3
  - RA-PROJET-C05-3/PROJ/4
  - RA-PROJET-C05-3/PROJ/5
  - RA-MEO-C08-6/MEO/3
draft: false
source_fr: conduite/proj/preuve-de-concept.md
source_sha256: 2db5b3dcb13b0f120a1ca2fee899a68121c64fedca3f166e82348eda58d4c02a
---

The **proof of concept** (PoC) is the third phase of a [[mecatronique-en|mechatronics]] project and the **pivot point** of the V-model: it is the moment when reasoning on paper stops and the architectural choices are confronted with **physical reality**. The whole system is not tested. Only the **unknowns** identified during [[concept-en|concept]] are tested, that is, the critical areas that rough sizing could not settle. A well-run proof of concept resolves the doubts early. A rushed one pushes uncertainty towards the end of the project, where fixing it costs the most.

## The right mindset

The temptation at this stage is to dive straight into tinkering: "we have the parts, let's build it and see what happens". It has to be resisted. A proof of concept without a **written statement, a formulated hypothesis, a quantified success criterion and a protocol** is not a proof of concept. It is an experiment that will produce unusable results and a guaranteed step backwards. A well-framed proof, on the other hand, can settle in a few hours what tinkering takes a week to approach. This phase teaches a skill that sits at the heart of engineering: **testing before building**.

## Goal of this phase

Produce a **proof-of-concept report** that:

- turns every unknown into a **testable statement** (hypothesis, quantified success criterion, measurement protocol)
- presents the **test benches** that were built and the **measurements** obtained
- compares the results against the success criteria and **decides**: solution viable, to be adjusted, or untenable
- updates the risk matrix ([[gestion-de-projet-en|project planning and tracking]]) and the environmental assessment ([[ecoconception-en|eco-design]]) with the **real measurements**

This report conditions the move to the [[dossier-technique-en|technical design file]]: without a conclusive proof, there is no technical design file that holds up.

## Method

### 1. Define each proof

The [[concept-en|concept]] phase ended with a **list of unknowns**, each written as a question and tied to the requirements of the [[cahier-des-charges-fonctionnel-en|CdCF]] (the French functional requirements specification) that could tip over. That list is the explicit order placed on the proof-of-concept phase. It is not a narrative report, it is a set of work items. Step 1 turns each unknown into a **testable statement**: what is assumed, what is expected in figures, how it will be measured. Until that translation is frozen, no bench gets built.

The step runs in two stages: moving from an unknown to a testable statement, then setting down the **hypothesis / criterion / protocol** triplet that the supervisor's review will clear for execution.

#### From an unknown to a testable statement

An unknown properly written at the end of [[concept-en|concept]] (for instance: *does the available torque hold at real maximum acceleration?*) is already a question, but it is not yet something that can be executed. Moving from the question to the measurement calls for three successive commitments: identifying what is assumed to be true, fixing the numerical criterion that will settle the matter, and describing the measurement procedure precisely enough for another teammate to carry it out without asking the author.

This is the most neglected stage of the PoC cycle, and probably the most structuring. A vague statement produces unusable data. Without a clear hypothesis, there is no way to know what is being looked for. Without a numerical criterion, there is no way to know whether it has been found. Without a recorded protocol, the measurement can neither be repeated nor defended. The time saved by skipping the writing is paid back when the team has to reinterpret unusable results, and that cost is almost always the higher one.

Writing it down serves another purpose: it stops the team from cheating on itself. A criterion written before the measurement can hardly be moved once the result is known. A criterion decided afterwards is a retrofit. Assessment rests on clear-sightedness, not on the conclusion.

> [!warning] Watch out
> **An unwritten statement is not a statement.** Until hypothesis, criterion and protocol are frozen on paper (or in the team wiki), the proof of concept drifts from the first bench built: the measurement gets adjusted to what is observed, the criterion gets moved so that "it passes", and the verdict of the proof stops being worth anything. The written triplet is the reference point that lets the team stand behind the final decision, whatever it turns out to be.

#### The hypothesis / criterion / protocol triplet

Three items to freeze, in that order.

The **hypothesis** states what the team assumes to be true, phrased positively: *X holds Y under conditions Z*. Not "it should work", not "we hope that". A precise hypothesis forces the conditions of validity to be spelled out. That is exactly what makes the protocol non-trivial to design, and it is also what anchors the criterion.

The **success criterion** is numerical, and tied to the [[cahier-des-charges-fonctionnel-en|CdCF]] requirement that raised the unknown at concept. If the unknown is tied to F0, the criterion follows directly from the F0 value in the CdCF, possibly with a margin added. A criterion without figures ("it works more or less", "that's acceptable") is not a criterion: it does not discriminate, and it makes the decision impossible. If the expected measurement cannot be quantified by construction (visual quality, user perception), the proof of concept is probably the wrong tool. The [[pieuvre-en|pieuvre]] (the "octopus" diagram, the French function-mapping tool) should be revisited and the unknown reclassified.

The **protocol** describes the equipment involved, the measurement conditions (temperature, load, duration), the number of repetitions and the handling of the raw data. The level of detail expected: another teammate must be able to repeat the test without asking the author. This is also where **repeatability** is decided. Without it, a single result stays anecdotal.

The **supervisor's review** closes the step. It is not a formality: it is the teaching safety net that keeps the team from setting off with a flawed protocol and losing a week of experiments. The supervisor probes the soundness of the triplet (is the hypothesis properly phrased? will the criterion discriminate? can the protocol be run with what the school has?). Without that review, the statement is not validated. The execution stage does not start.

> [!tip] Tip
> **Phrase the criterion as a direct mirror of a quantified [[cahier-des-charges-fonctionnel-en|CdCF]] requirement.** If the unknown is tied to F1 (continuous operating time: 2 h without interruption), the criterion of the matching proof reuses that value: "the temperature of the power supply stays below 60 °C after 2 h of continuous service at nominal load". Inventing a criterion by intuition ("50 °C, that should do") cuts the proof off from its reason for existing, which is to validate the original requirement or not.

> [!example] Example: 3-axis arm project
> Suppose the [[concept-en|concept]] phase identified as an unknown the *mechanical endurance of the 3D-printed joints in the chosen kinematics*. The triplet set down at the end of step 1:
>
> - **Hypothesis** — a PLA joint printed at 60% infill holds a torque of 1.2 N·m without permanent deformation over 1000 duty cycles.
> - **Success criterion** — after 1000 cycles at 1.2 N·m, the angular play measured with the dial indicator stays below 0.5° (derived from the end-of-arm accuracy required in F0 of the [[cahier-des-charges-fonctionnel-en|CdCF]]).
> - **Protocol** — static and cyclic torque bench (mounting plate, known lever arm, calibrated mass), dial indicator on the measurement axis, cycles automated by microcontroller, readings every 100 cycles, three joints tested in parallel for repeatability.
>
> Supervisor's review at the end of the step. Three corrections requested on the first version: state the ambient temperature of the bench (PLA is sensitive to it), spell out the stopping criterion in case of early failure, and record the traceability of the applied torque (mass and lever arm measured on the balance and with the vernier caliper). Triplet validated in its corrected version. The execution stage can start.

> [!livrable] Deliverable 1/5 — Proof of concept
> - Proof statements validated by the supervisor (one per unknown: hypothesis + success criterion + protocol)

### 2. Prepare the resources

The step 1 review validates the triplets. Every unknown now has a described protocol. Step 2 turns those protocols into physical resources available in time to run the tests. The point is not to reinvent everything: it is to make the most of what the school already provides, and to request an exceptional purchase only for what cannot be covered any other way. Saving time and keeping the budget fair between teams go together here.

The step runs in two stages: extracting from the protocols the inventory of resources needed for each proof, then working through three ranked sources (standard school stock, miscellaneous school stock, exceptional purchase) until every item is tied to a recorded origin.

#### From protocol to resources

For each unknown, reread the protocol validated at step 1 and extract the **resources needed**, sorted into categories that are useful for procurement: hardware components (sensors, actuators, power supplies), consumables (filament, screws, cables), measuring instruments ([[comparateur-en|dial indicator]], [[oscilloscope-en|oscilloscope]], [[multimetre-en|multimeter]], balance), tooling ([[impression-3d-en|3D printer]], vice, [[pied-a-coulisse-en|vernier caliper]]). One proof can share a resource with another, a [[microcontroleur-en|microcontroller]] often serving two protocols, but the allocation stays recorded unknown by unknown.

The inventory produced here does not go beyond what is strictly needed to resolve the unknown. The final component choices (exact part numbers for the finished product) come later, in the [[dossier-technique-en|technical design file]], along with the detailed calculations and the budget commitment that goes with them, not here. The proof of concept remains a measuring instrument, not an advance commitment.

> [!warning] Watch out
> **No personal purchases.** Even if a €5 component seems quicker to order oneself than to request from the school, nothing is to be bought out of personal money. It breaks budget fairness between teams, and it is expressly outside the project framework. If an exceptional purchase is needed, it goes through the project coordinator.

#### Three sources, in order

Once the inventory is drawn up, every item is looked for in three sources, in order of increasing friction.

1. **Standard school stock** — common components available immediately in the lab ([[microcontroleur-en|microcontrollers]], [[arduino-en|Arduino]] boards, [[multimetre-en|multimeters]], bench [[oscilloscope-en|oscilloscopes]], [[alimentation-electronique-en|regulated power supplies]], [[comparateur-en|dial indicators]], balance). The default source, to be exhausted first.
2. **Miscellaneous school stock** — specific components available on request from the fablab or the equipment manager (unusual sensors, screws outside the standard stock) and **3D-printed parts on request**: the team does not receive filament of its own, it sends STL files to the [[impression-3d-en|3D printing]] fablab manager, who takes care of the print. No cost, but logistical friction: the lead time and the fablab slot have to be anticipated.
3. **Exceptional purchase** — only if it is genuinely critical to the proof, and after budget approval by the project coordinator. The purchase lead time has to be compatible with the schedule of the proof. If the arrival of the component pushes the test beyond the PoC review milestone, the need should be questioned again rather than bought in a hurry.

Respecting this order is not just a matter of organisation, it is also something to be learned. Short-circuiting the process because going out and buying it oneself is faster means learning to work around a framework that professional life will reproduce in another form (centralised purchasing, approval chains, fairness between teams). What is saved on a week of waiting is lost in project culture.

> [!tip] Tip
> **Ask for miscellaneous stock early.** The lead time for a non-standard component through the fablab can stretch over several days, sometimes longer if the supplier is external. Identifying the miscellaneous needs as soon as step 1 closes and sending the requests in parallel with finishing the benches avoids blocking the execution stage on a late printed washer.

> [!example] Example: 3-axis arm project
> For the *3D joint endurance* proof, inventory of resources and allocation to sources:
>
> - **Standard school stock** — [[arduino-en|Arduino]] [[microcontroleur-en|microcontroller]] (cycle automation), [[comparateur-en|dial indicator]] (angular play measurement), precision balance and [[pied-a-coulisse-en|vernier caliper]] (traceability of the applied torque, as requested at the step 1 review), [[alimentation-electronique-en|bench power supply]], [[multimetre-en|multimeter]].
> - **Miscellaneous school stock** — [[pla-en|PLA]] joints at 60% infill (3 joints plus 1 spare) to be printed at the fablab: STL files sent to the [[impression-3d-en|3D printing]] fablab manager as soon as step 1 closes, to book the print slot (indicative lead time 3 working days).
> - **Exceptional purchase** — none. The bench can be built from stock.

> [!livrable] Deliverable 2/5 — Proof of concept
> - List of the physical resources used by each proof (origin, cost if any, justification if purchased)

### 3. Run the tests, one unknown at a time

Step 2 secured the resources: every unknown has a validated protocol and the physical resources tied to it. Step 3 follows on with execution proper. The move: for each unknown, build a bench focused on the question asked, run the protocol keeping strictly to the conditions of the triplet, and deposit the raw data in a form the next step can work with.

The step runs in two stages: building the bench, then running and recording the measurements. Several proofs can be run in parallel if the team has the resources. The split is **by unknown**, not by discipline: an unknown in mechatronics is rarely confined to one discipline, and splitting by discipline would artificially introduce boundaries that the measurement will not respect.

#### Build the test bench

The bench is **focused on the unknown being tested**, and distinct from the whole-system bench that comes later in [[integration-et-tests-en|integration and testing]]. The focusing rule: build the minimum needed to answer the question, not a scaled-down system. That saves time, isolates the variables under observation, and increases analytical sensitivity. A complete system introduces noise (couplings, parasitic interactions) that complicates the reading of the results.

The build must faithfully reflect the validated protocol. If the step 1 review asked for corrections (for instance, recording the traceability of the applied torque through the balance and the vernier caliper), they are physically implemented before anything starts. Skipping a correction at build time implicitly voids the validated triplet.

Before the first measurement, the bench itself is **characterised**: measurable constants (lever arm length, calibrated mass, instrument calibration), ambient conditions (temperature, humidity where relevant), traceable references. That characterisation is then what tells a fault in the bench apart from a behaviour of the component under test. Without it, any surprising measurement stays ambiguous.

> [!warning] Watch out
> **Characterise the bench before measuring.** A poorly set [[comparateur-en|dial indicator]] can show 0.1° of intrinsic drift, an unregulated [[alimentation-electronique-en|power supply]] can shift a current reading by 5%, a badly placed temperature sensor can end up measuring the ambient air instead of the component. Without prior characterisation, the team cannot tell a fault in the bench apart from real behaviour of the component, and the result of the proof no longer proves anything.

#### Run and record the measurements

Execution keeps strictly to the conditions of the validated triplet: number of repetitions, range of variation, controlled ambient conditions, durations held. Any departure from the protocol has to be noted, justified and discussed before the next measurement, not after the fact.

Raw values are written down as they come, in a minimal but systematic form: date and time, conditions, values read, instrument used, anomalies observed. Nothing memorised, no "I'll write it up tonight": whatever is not written during the test is lost. The medium matters little (notebook, spreadsheet, wiki) as long as it is shared with the team and the columns are fixed before starting.

**Repeatability** is tested during the run, not afterwards. At the first and the last point of the range, repeat the measurement 2 or 3 times and check that the values converge. If they diverge, flag it before going on: either the protocol has a flaw (unstable bench, inconsistent operator), or the component under test is itself unstable. In both cases it is information to record and to carry into the step 4 analysis.

At this stage, data is collected, not judged. The natural tendency is to anticipate the conclusion mid-test ("it passes", "it doesn't pass") and to bend the measurement towards the expected direction, a classic cognitive bias. The explicit separation between execution (step 3) and analysis (step 4) exists precisely to protect the team from it: the raw data is deposited as it stands, and the verdict comes later, cold.

> [!tip] Tip
> **Record the anomalies, not just the values.** A proof of concept gains as much from qualitative observations (mechanical noise, local heating, unusual transient behaviour) as from numbers. An observation outside the protocol can reveal an unknown nobody had identified at [[concept-en|concept]], or suggest a second proof worth building. A logbook with an *anomalies* column alongside the *value* column multiplies what can be extracted from each test.

> [!example] Example: 3-axis arm project
> Bench for the *3D joint endurance* proof, built to the validated protocol: fablab mounting plate, 100 mm lever arm (measured with the [[pied-a-coulisse-en|vernier caliper]]), calibrated mass of 1.22 kg (checked on the balance before each session), [[arduino-en|Arduino]] [[microcontroleur-en|microcontroller]] driving the 30° to 0° cycle at 60°/s. Prior characterisation: [[comparateur-en|dial indicator]] calibrated to within 0.02°, ambient temperature 22 ± 1 °C, initial no-load play of the bench 0.08° (bench constant derived from the readings).
>
> Measurements recorded over 1000 cycles, joint A (extract from the raw data):
>
> - 0 cycles: play 0.12°; nominal
> - 100 cycles: 0.18°; nothing to report
> - 300 cycles: 0.38°; slight heating perceptible by hand on the joint
> - 500 cycles: 0.54°; criterion of 0.5° exceeded; growing mechanical noise
> - 1000 cycles: 0.71°; visible degradation (crushing of the housing)
>
> Joints B and C: similar profiles, criterion exceeded between 480 and 550 cycles. Raw data for all three joints deposited in the shared spreadsheet. The decision on the outcome of the criterion is deferred to step 4.

> [!livrable] Deliverable 3/5 — Proof of concept
> - Test benches built and characterised (one per unknown)
> - Raw measurement data for each proof

### 4. Analyse and decide

Step 3 delivered the raw data. Every proof has a set of readings deposited in the shared format. Step 4 is the **turning point of the V-model**: the first step in the project where the ascending branch can send work back to the descending one. The team learns to rule. Not to observe, to rule. The distinction is sharp: observing states a fact ("the play exceeds 0.5° at 500 cycles"), ruling commits to a decision the team will have to stand behind ("back to [[concept-en|concept]] step 3 to renegotiate"). This step produces the second, not the first.

The step runs in three stages: comparing each result against its success criterion, synchronising across proofs so that interactions surface, then ruling among three nominal outcomes while updating the upstream artefacts ([[matrice-de-risques-en|risk matrix]], [[ecoconception-en|eco-design]] assessment, concept decision matrices if the work goes back upstream). The order is not negotiable: ruling before synchronising means missing the crossed effects. Updating the artefacts after the report (step 5) breaks traceability.

#### Compare against the criterion

For each proof, put the measured data and the numerical criterion fixed at step 1 side by side. The comparison is mechanical: observed value against criterion value, absolute and relative margin, immediate verdict (comfortable margin / tight margin / criterion missed / inconclusive). Visually, a curve with the threshold drawn as a dashed line and the measured profile alongside makes the verdict obvious to an outside reader.

Three classic pitfalls to avoid at this stage. First, **refining the criterion after the fact**: if the measurement exceeds the criterion, that is an exceedance, not a "nearly compliant" measurement. The criterion was frozen at step 1 precisely so that it could not be moved now. Second, **reading the margin before having measured it properly**: a margin calculated at 5% on a measurement whose accuracy is 10% is not a margin, it is residual uncertainty. The precision of the verdict does not exceed the precision of the measurement. Third, **concluding from a single case**: if the test covered 3 joints and only one meets the criterion, the verdict is not "it passes". It is "one joint in three passes", which raises at least as many questions as it answers.

The verdict comes out proof by proof, not globally. No aggregation yet at this stage: each unknown is dealt with on its own terms.

#### Synchronise across proofs

The proofs were run in parallel, possibly by different teammates on separate benches. Synchronising brings the results together and lets the **interactions** surface that running each proof individually could not reveal.

Three kinds of interaction to look for systematically. **A conclusion from one proof that invalidates the hypothesis of another**: the measured motor consumption exceeds the [[concept-en|concept]] estimates, and the margin on battery life disappears although the unknown was thought to have been resolved by rough sizing. **Anomalies coinciding across independent proofs**: the thermal bench heats up at the moment the accuracy measurement on the mechanical bench drifts, a sign of a shared environmental problem (unstable shared power supply, electromagnetic interference) rather than two independent faults. **A knock-on effect of a decision already taking shape**: if the team is leaning towards one solution to resolve unknown A, check that this solution does not introduce a new unknown on proof B.

Synchronising is done **with the full team in the room**, all disciplines present. Not by email, not one-to-one. A practical format: one round-table on the results of each proof, then a second round devoted specifically to the interactions each person has spotted. Expected output: a consolidated table of cross-proof results, with the interactions identified and explicitly dealt with.

#### Decide

Once synchronisation is done, each proof can be ruled on. **Three nominal outcomes** per unknown:

1. **Validated** ✅ — hypothesis confirmed, criterion met with enough margin, no unfavourable interaction. The solution chosen at [[concept-en|concept]] moves to the [[dossier-technique-en|technical design file]] unchanged.
2. **Local adjustment** 🔁 — criterion met but under stated conditions (restricted operating mode, reduced range, adjusted parameter). A targeted revisit of one concept trade-off without breaking everything: the solution changes, the architecture is not renegotiated. The [[matrice-de-decision-en|decision matrix]] concerned at step 2 of concept is updated, with the traceability documented.
3. **Structural upstream return** ⚠️ — hypothesis invalidated, criterion missed, or a blocking interaction between proofs. Back to concept step 3 (renegotiation across the 3 disciplines) if the conflict revealed is between disciplines, or to step 4 (refined rough sizing) if the calculated margin turned out to be badly modelled. Feedback towards the [[specification-technique-en|technical specification]] in the rarer cases where the proof reveals that a service function of the [[cahier-des-charges-fonctionnel-en|CdCF]] is badly framed.

The decision comes **in the same session** with the updates it entails: [[matrice-de-risques-en|risk matrix]] carrying the real measurements ([[gestion-de-projet-en|project planning and tracking]]), [[ecoconception-en|eco-design]] assessment set against the measurements rather than the estimates, and the [[concept-en|concept]] decision matrices if the work goes back upstream. Those updates are not a writing exercise. They are the concrete expression of the decision. Deferring them to step 5 (writing the report) would break traceability: the report would then rest on artefacts that are no longer current.

> [!warning] Watch out
> **An inconclusive proof is not a failure.** Assessment rests on the clear-sightedness of the analysis, not on the conclusion. A proof that invalidates a hypothesis, documents cleanly why, and justifies going back upstream is *a good deliverable*. A proof whose results have been massaged to "fit the conclusive box" is a bad one, even if it avoids the loop back.

> [!tip] Tip
> **Synchronise before ruling.** The order is not a presentation convention, it is a methodological discipline: ruling proof by proof before synchronising means missing the interactions, and it leads to decisions that are each fine on their own but no longer fit together once assembled. Thirty minutes of round-table beforehand are worth more than one extra loop back upstream afterwards.

> [!example] Example: 3-axis arm project
> Comparison against the criterion for the *3D joint endurance* proof: the criterion of 0.5° at 1000 cycles is met by none of the three joints tested (exceeded between 480 and 550 cycles), with a negative margin confirmed by three converging measurements. No single-case effect, no scope for refining the criterion after the fact. The verdict is clear.
>
> Cross-proof synchronisation: the running example has only one proof under way, so there is no interaction to arbitrate. Had other proofs been run in parallel (on the thermal endurance of the power supply, for instance), the heating perceptible on the joints from around 300 cycles would have had to be set against the thermal readings.
>
> Summary and status:
>
> | Proof | Result | Against criterion | Decision |
> |---|---|---|---|
> | 3D joint endurance | Play > 0.5° from ~500 cycles, 3 joints | Criterion missed | ⚠️ Upstream return → [[concept-en\|concept]] step 3 |
>
> Decision recorded: structural upstream return to [[concept-en|concept]] step 3 for renegotiation across the three disciplines. Three routes to explore: a mechanical route with a [[impression-3d-en|3D-printed]] joint at higher infill (impact on weight and print time), a switch to a [[usinage-en|machined]] joint (impact on cost and lead time), or a software route revisiting the kinematics so as to reduce the torque on the axis concerned (impact on the concept). The mechanical [[matrice-de-decision-en|decision matrix]] from concept step 2 will be updated, with the "endurance under continuous cycling" criterion revised downwards for PLA at 60% infill.
>
> Updates made in the session: [[matrice-de-risques-en|risk matrix]] extended with a new thermal risk (heating of printed joints under continuous cycling, observed and not anticipated by the rough sizing), [[ecoconception-en|eco-design]] assessment revised (an unfavourable balance for [[pla-en|PLA]] at 60% infill once the effective service life has been measured, the printed solution losing part of its initial eco-design advantage). The concept step 3 revisit is scheduled before the PoC report is written.

> [!livrable] Deliverable 4/5 — Proof of concept
> - Status table by unknown (raw result, comparison against the criterion, decision recorded: validated / local adjustment / upstream return)
> - [[matrice-de-risques-en|Risk matrix]] updated, [[ecoconception-en|eco-design]] assessment revised with the real measurements, [[concept-en|concept]] decision matrices updated if the work goes back upstream

### 5. Write up and get it approved

Step 4 delivered the recorded decisions and the updated upstream artefacts ([[matrice-de-risques-en|risk matrix]], [[ecoconception-en|eco-design]] assessment, [[concept-en|concept]] decision matrices if the work went back upstream). Step 5 produces nothing new technically: it **brings the four previous steps together** (proof statements, benches built, measurements, analyses and decisions) into a single **proof-of-concept report**, reread and rewritten for an outside reader. The move is the direct equivalent of writing the concept file at the end of the concept phase: internal working material becomes a reference document the rest of the project can build on.

The step runs in three stages: structuring the report, writing each section, getting it approved at the PoC review.

#### Structure the report

Five standard sections, in the order the study reasoned in:

1. **Introduction and unknowns at entry** — a reminder of the unknowns written at the end of [[concept-en|concept]] step 4 (questions, [[cahier-des-charges-fonctionnel-en|CdCF]] link, category), scope of the PoC, team.
2. **Benches and protocols** — for each unknown: presentation of the bench built, protocol validated at step 1, measurement conditions and bench characterisation.
3. **Measurements and analyses** — for each unknown: raw data (significant extracts, the detail goes in the appendices), comparison against the criterion, anomalies recorded.
4. **Summary and decisions** — consolidated table of the status of each unknown (result / criterion / decision), cross-proof interactions identified, upstream updates entailed by the decisions (risk matrix, eco-design, concept decision matrices if the work goes back upstream).
5. **Appendices** — complete raw data, test logs, photographs of the benches, full curves. Everything that supports a deeper reading without weighing down the main narrative.

The order is not neutral: it follows the natural reading progression of an outsider (what is this about / how was it tested / what was measured / what was decided). Inverting it, by putting the decisions first for instance, makes the reader lose the thread and forces them to rebuild the reasoning backwards.

#### Write each section

Three things to take care over.

Take care over the **form**: the report may be read by a teacher who has not followed the project day to day, or by an external client with none of the team context. The figures (measurement curves, bench photographs, block diagrams) must be readable on their own, captioned explicitly with units, axes and measurement conditions. Raw values are cleanly formatted in sections 3 and 4. Spreadsheet pages as they stand go in the appendices.

Take care over the **coherence between sections**: each section refers explicitly to the upstream sections it rests on. Section 4 (summary) points back to the measurements (section 3), which point back to the protocols (section 2), which point back to the unknowns (section 1), which point back to the CdCF. That chain of references is what makes the report **verifiable**: a reader can trace any decision back to the original requirement that triggered it.

Take care over the **traceability back to the CdCF**: every decision recorded at step 4 must be traceable to the CdCF requirement that raised the unknown at [[concept-en|concept]]. If the PoC has led to a change in the CdCF (rare, but possible if the proof reveals a badly framed service function), it is documented explicitly in section 1, with the CdCF version updated, not hidden.

#### Get approval at the PoC review

The **PoC review** is the teaching equivalent of a *go / no-go* on committing money: it validates or refuses the move to the [[dossier-technique-en|technical design file]] and the purchase of the final components. Run by the supervisor (and by the client if there is an external one), it checks that the unknowns at entry have been resolved (or that the upstream return has been properly recorded), and that the next phase can safely place its orders.

Preparation: a self-review by the whole team, not just by whoever did the writing. Anticipation of the awkward questions: every recorded decision must be defended in under a minute, by pointing at the measurement and the criterion that produced it. An oral run-through.

Four nominal outcomes, mirroring the [[concept-en|concept]] review:

1. **Validated without reservation** — every unknown has been resolved, the decisions are recorded, the upstream artefacts are current. The move to the [[dossier-technique-en|technical design file]] is unconditional.
2. **Validated with conditions** — one or more points to complete before committing (complete a measurement, document a decision, repeat a test on a marginal case). The corrections are requested explicitly, and the move to the technical design file is conditional on their being made.
3. **Local rework** — a protocol or a decision has to be revisited, going back locally to step 3 or 4. The PoC review is held again after the rework.
4. **Structural upstream feedback** — the PoC has revealed that a return to [[concept-en|concept]] (step 3 or 4) or to the [[specification-technique-en|technical specification]] is needed. In that case the review validates the **loop** (decision to go back upstream plus a rework plan) rather than the move to the technical design file. This outcome is nominal, not exceptional: it is what the PoC exists to make possible.

> [!warning] Watch out
> **Compiling is not writing.** A PoC report that simply strings together the deliverables of steps 1 to 4 (statements, benches, raw readings, decisions) without a pass across the whole thing does not survive the review: sections contradict each other, figures are duplicated, arguments jump. The move at step 5 is precisely the **critical rereading of the whole** and the **rewriting** of the transitions and justifications that did not exist in the intermediate deliverables.

> [!tip] Tip
> **Hold a dry-run review as a team before the day itself.** A one-hour mock, with a team member playing the supervisor and asking the awkward questions ("how do you justify the criterion?", "does the 5% margin really hold up?", "why not the other route?"), brings out the poorly defended decisions and the unreadable figures. A mock costs far less than a report sent back for rework.

> [!example] Example: 3-axis arm project
> PoC report for the 3-axis arm, standard table of contents instantiated on the single-unknown case:
>
> 1. **Introduction and unknowns at entry** — a reminder of the unknowns written at the end of [[concept-en|concept]] step 4 (mechanical endurance of the 3D-printed joints, tied to F0 end-of-arm accuracy), scope of the PoC (one proof), team.
> 2. **Benches and protocols** — bench built for the *3D joint endurance* proof: fablab mounting plate, 100 mm lever arm, calibrated mass of 1.22 kg, [[comparateur-en|dial indicator]] calibrated to 0.02°, [[arduino-en|Arduino]] [[microcontroleur-en|microcontroller]]. Protocol validated at step 1 with three corrections (temperature, stopping criterion, traceability of the applied torque).
> 3. **Measurements and analyses** — readings over 1000 cycles, 3 joints tested. Criterion of 0.5° exceeded between 480 and 550 cycles, heating perceptible from 300 cycles, visible degradation (crushing of the housing) by the end of the test. Complete raw data in the appendix.
> 4. **Summary and decisions** — status table: the *3D joint endurance* proof → ⚠️ upstream return to [[concept-en|concept]] step 3. Three routes to explore (higher infill / [[usinage-en|machined]] joint / revised kinematics), mechanical [[matrice-de-decision-en|decision matrix]] from concept step 2 to be updated, [[matrice-de-risques-en|risk matrix]] extended with a thermal risk, [[ecoconception-en|eco-design]] revised.
> 5. **Appendices** — raw data for the 3 joints (shared spreadsheet), play against cycles curves, photographs of the bench, test log.
>
> PoC review held after the [[concept-en|concept]] step 3 revisit (renegotiation completed: switch to a [[usinage-en|machined]] joint on all 3 axes, mechanical decision matrices and eco-design updated, the loop back approved by the supervisor). Outcome of the review: **validated with conditions**. The move to the [[dossier-technique-en|technical design file]] is subject to documenting the drift of [[pla-en|PLA]] at 60% infill in the eco-design balance of the updated concept file. Rework plan recorded, schedule adjusted with two extra weeks for machining the joints.

> [!livrable] Deliverable 5/5 — Proof of concept
> - Aggregated proof-of-concept report (introduction and unknowns / benches / measurements and analyses / summary and decisions / appendices), traceable back to the [[cahier-des-charges-fonctionnel-en|CdCF]]
> - Approval at the PoC review by the supervisor (and the client if there is an external one), with the outcome recorded

## Wrap-up

At this point the critical unknowns have been resolved: every hypothesis has been confronted with physical reality, the chosen solutions are confirmed or adjusted, and the residual risks carry figures. The work now moves on to the [[dossier-technique-en|technical design file]], which turns this validated architecture into detailed, buildable drawings and commits the project materially.

---

## Common pitfalls

**Starting the build with no written statement.** The statement (hypothesis + criterion + protocol) is what makes the proof stick. Without it, the measurement gets adjusted to what is observed, the criterion gets moved so that "it passes", and the verdict loses all value. The first trap of step 1, and the most structuring.

**A vague or unquantified success criterion.** "It works more or less", "that's acceptable" are not criteria: they do not discriminate, and they make the decision impossible. The criterion follows directly from the [[cahier-des-charges-fonctionnel-en|CdCF]] requirement that raised the unknown, quantified and checkable by someone else.

**Testing the whole system instead of targeting the unknowns.** The PoC bench is focused on the unknown, not a scaled-down system. Building the complete system introduces noise, lengthens the test session and complicates the reading. The PoC answers one precise question. [[integration-et-tests-en|Integration and testing]] validates the whole.

**Buying personally what the school stock could have supplied.** It breaks budget fairness between teams and works around the project framework. If the lead time on miscellaneous stock is too long, it is the planning that needs revisiting, not the process.

**Skipping the characterisation of the bench.** Without prior characterisation (bench constants, instrument calibration, ambient conditions), a fault in the bench cannot be told apart from real behaviour of the component under test. A poorly set dial indicator can show 0.1° of intrinsic drift that pollutes every measurement.

**Concluding mid-test instead of collecting first.** A classic cognitive bias: bending the measurement towards the conclusion being anticipated. The separation between execution (step 3) and analysis (step 4) exists precisely to protect the team from it. At this stage, data is collected, not judged.

**Refining the criterion after the fact.** If the measurement exceeds the criterion, that is an exceedance, not a "nearly compliant" measurement. The criterion was frozen at step 1 precisely so that it could not be moved once the test is over.

**Ruling proof by proof with no cross-proof synchronisation.** It produces decisions that are each fine on their own but no longer fit together once assembled. Synchronising brings the results together and lets the interactions surface that running each proof individually could not reveal.

**Neglecting to update the risks and the eco-design once the real measurements are in.** This is where the central lesson of the PoC gets lost. The [[matrice-de-risques-en|risk matrix]] and the [[ecoconception-en|eco-design]] assessment are updated with the measurements at step 4, in the same session as the decision, not when the report is written.

**Hiding an inconclusive proof to avoid going back upstream.** Assessment rests on the clear-sightedness of the analysis, not on the conclusion. A proof that invalidates a hypothesis, documents cleanly why, and justifies going back upstream is a good deliverable, not a failure.

**Compiling the report instead of writing it.** Stringing deliverables 1 to 4 together with no pass across the whole thing produces contradictions, duplicates and jumps in the argument. The report is rewritten for an outside reader, with transitions and justifications that did not exist in the intermediate deliverables.

## During this phase, on the team side

**Interfaces with other subjects.** The proof of concept draws on colleagues' courses more than it repeats them: building the benches at the fablab ([[usinage-en|machining]], [[impression-3d-en|3D printing]], [[soudure-en|soldering]]), instrumentation and data acquisition on the software side, quick mechanical sizing for the test fixtures. The conversation with the teachers concerned is set up ahead of the phase, as soon as [[concept-en|concept]] step 4 closes, so that fablab availability, test slots and the specific equipment requested from miscellaneous stock can be lined up.

**[[gestion-de-projet-en|Project planning and tracking]].** The PoC consumes the **order placed by the previous phase** (the list of unknowns written at the end of [[concept-en|concept]] step 4) and produces, on the way out, updated artefacts that condition the rest of the project: [[matrice-de-risques-en|risk matrix]] set against the measurements, [[ecoconception-en|eco-design]] assessment revised, concept decision matrices brought up to date if the work goes back upstream. Every upstream return is a structural update to the [[retroplanning-en|backward plan]]: allow margin if the PoC sends work back to concept step 3 (renegotiation), and more if feedback towards the [[specification-technique-en|technical specification]] is needed. The backward plan builds those contingencies in from concept onwards, not at the end of the PoC.

**[[ecoconception-en|Eco-design]].** The PoC is the first phase where the [[concept-en|concept]] estimates (consumption, service life, material balances) are set against real measurements. It is the moment of truth for the eco-design assessment: a solution that looked favourable on paper turns out to be less so under a real duty cycle. A material wore more slowly than expected, and the balance can be revised downwards. Estimates that remain in place after the PoC are marked as such, distinct from measured data.

**[[securite-et-qualite-en|Safety and quality]].** These are the first hands-on sessions under power, in motion, sometimes in limit configurations (testing beyond nominal in order to characterise a component). Bench safety is formalised before anything starts: appropriate personal protective equipment (PPE), an emergency procedure on display, a teacher present for the risky operations (high voltage, rotating machinery, chemicals). The written record of the safety conditions of each bench is itself a deliverable of the phase, included in the appendix of the PoC report.

## See also

- [[en/conduite/index|Project path hub]]
- Previous step: [[concept-en|Concept]]
- Next step: [[dossier-technique-en|Technical design file]]
- [[comparateur-en|Dial indicator]] *(characterising the play of a test bench)*
- [[gestion-de-projet-en|Project planning and tracking]] *(cross-cutting thread)*
- [[ecoconception-en|Eco-design]] *(cross-cutting thread)*
- [[securite-et-qualite-en|Safety and quality]] *(cross-cutting thread)*
