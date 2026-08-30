---
title: Technical state of the art
type: tuto
phases:
  - specification
  - concept
tags:
  - proj
  - tuto
  - analyse-amont
prerequis:
  - bete-a-cornes-en
aa:
  - RA-PROJET-C04-4/PROJ/2
  - RA-MEO-C10-3/MEO/1
draft: false
source_fr: conduite/proj/etat-de-l-art-technique.md
source_sha256: 74b4c85fea64893e13f29c722c372e09a3f3e78e4ead79c085e2c774d9c27272
---

The **technical state of the art** (TSA) is a comparison in figures of existing solutions that address a need close to the project being run. Produced at step 2 of the [[specification-technique-en|technical specification]], it calibrates the realistic orders of magnitude of the [[cahier-des-charges-fonctionnel-en|cahier des charges fonctionnel]] and identifies the reusable technical building blocks. Its canonical form is an **N × M table**: N solutions in columns, M quantified criteria in rows, together with a reasoned summary that says what is retained.

## What is it for?

The TSA answers a discipline of engineering: before putting figures on what you are going to build, you look at **what already exists**. Nobody designs in a vacuum: for almost any [[mecatronique-en|mechatronic]] project, commercial solutions, open-source projects or earlier school projects have already tackled a need close to the one at hand. Studying them saves time, calibrates expectations, and guides the architecture choices that follow.

The tool plays three inseparable roles:

- **Calibrating the realistic orders of magnitude** for the [[caracteriser-une-exigence-en|levels]] of the [[cahier-des-charges-fonctionnel-en|CdCF]]. Knowing that a €300 teaching arm exists and reaches 1 to 2 mm of repeatability stops you from arbitrarily setting a ± 0.1 mm level that is out of reach on that budget.
- **Identifying the reusable technical building blocks** — open-source schematics, proven component choices, available firmware. A school project does not have to reinvent everything, and inheriting what works frees time for the real stakes of the project.
- **Spotting the room for improvement** — what the existing solutions do not do, do badly, or only do at prohibitive cost. That is what justifies the project existing: with no room identified, you reproduce the existing and add nothing.

The TSA is not a technical decision: it **prepares** the decision. Weighting the criteria and arbitrating between candidate solutions internal to the project belong to the [[matrice-de-decision-en|decision matrix]], in the [[concept-en|concept]] phase. Mixing the two tools makes the student do the same work twice.

> [!warning] Watch out
> **TSA ≠ literature review.** A literature review means reading (papers, [[lire-une-datasheet-en|datasheets]], standards, books) and producing notes. A TSA means listing what exists and works, and producing a **comparison in figures aimed at a decision**. The two feed each other (the review supplies the raw material), but they are not the same deliverable. A TSA that is only a list of papers read is not a TSA.

## Step by step

The TSA is run in four short but disciplined steps: list the solutions, define the criteria, fill in the table, summarise. None can be skipped without degrading the next.

### 1. List 3 to 6 comparable solutions

Identify references that address a need close to the project, **even partially**. No more than 6: beyond that the analysis dilutes and the table becomes unreadable. No fewer than 3: with 1 or 2 references, there is nothing to compare.

Sources to vary systematically:

- **Commercial products** — manufacturer catalogues, distributor sites, public datasheets.
- **Open-source projects** — GitHub, Hackaday, Thingiverse, Instructables, Open Hardware Repository.
- **Short academic publications** — conference papers, final-year dissertations, technical review articles.
- **Earlier school projects** — the institution's archives, feedback available from the teaching staff.

For each reference retained, note the name, the source or URL, the main public figures, and the status (in production, in progress, abandoned). This first pass can be broad: you filter for relevance when you fill in the table.

### 2. Define 5 to 8 quantifiable criteria

Choose the criteria that make sense **for the project**, starting from the need formulated at step 1 of the technical specification (the [[bete-a-cornes-en|bête à cornes]]). The criteria must **discriminate between the solutions**: a criterion on which every reference has the same value adds nothing to the table and can be dropped.

Families to go through systematically:

- **Cost** — purchase, manufacturing, maintenance. Almost always present, especially on a school project.
- **Main performance** — the target quantity of the system (accuracy, throughput, endurance, payload, range depending on the project).
- **Constraints of use** — size, mass, consumption, robustness, safety, noise level.
- **[[ecoconception-en|Eco-design]]** — origin and recyclability of the materials, durability, ease of disassembly, repairability.
- **Openness** — availability of the [[bom-en|BOM]], the firmware, the schematics, the documentation. Decisive for reusing building blocks.

> [!tip] Tip
> **The criteria chosen here prefigure those that will be quantified at step 4 of the technical specification.** A TSA well equipped with criteria makes writing the [[cahier-des-charges-fonctionnel-en|CdCF]] markedly simpler: every discriminating criterion in the table gives an anchor point for [[caracteriser-une-exigence-en|characterising a requirement]] with a realistic rather than an arbitrary level.

### 3. Fill in the N × M table

Cross solutions and criteria in a table, **solutions in columns** and **criteria in rows** by convention of readability: four narrow columns read more easily than six long rows.

Four writing disciplines to hold:

- **Values in figures with a unit** (`250 g`, `0.1 mm`, `€180`). No vague qualifier (`good endurance`, `low cost`) that would bring back the fog the TSA is there to lift.
- **No empty cell.** Missing data is noted `n/a` (not published) or `?`. Its absence becomes information in itself: an industrial firm that does not publish the repeatability of its arm is sending a signal.
- **Source given** for every figure, in a note or a dedicated row. An unsourced figure cannot be checked and has no place in a deliverable that someone is going to rely on.
- **Estimate marked as such.** If you derive a figure by calculation (payload estimated from the published motor torque, for instance), say so explicitly: `~250 g (estimated)`.

The TSA **does not weight** the criteria and does not compute an aggregate score. That is the fundamental difference with the [[matrice-de-decision-en|decision matrix]]: here you map what exists, you do not arbitrate. Weighting comes in the [[concept-en|concept]] phase, to decide between candidate solutions **internal** to the project.

### 4. Summarise and conclude

The table alone is not enough. Conclude in a few lines: **what do we retain?** The summary answers three questions:

- **Which solution or solutions inspire the architecture envisaged?** Not a technical decision (nothing is chosen yet), but a light shone: this reference looks consistent with the need and the constraints of the project.
- **Which solutions are set aside, and why?** Prohibitive cost, complexity out of scope, documentation unavailable. Documenting what is eliminated matters as much as documenting what is kept.
- **Which orders of magnitude do we retain to calibrate the CdCF?** Target material cost, main performance aimed at, floor constraints. These orders of magnitude become the reference figures for step 4 of the specification.

The summary runs to two to four paragraphs. Beyond that it turns into a narrative that dilutes the decision. Below it, it stays vague and gives the reader of the CdCF nothing.

> [!warning] Watch out
> **A summary that says *"everything is interesting, to be seen later"* cancels the upstream work.** The TSA is meant to light the way forward, not to postpone the decision. If the summary does not commit, it is usually because the criteria chosen at step 2 did not discriminate: you then have to go back to step 2 and start again, not carry on by kicking the ball into touch.

## Example — 3-axis teaching arm

Take the running example again, a 3-axis teaching robot arm. The TSA run to calibrate the CdCF retains three references from commercial catalogues and open-source communities, compared on six discriminating criteria.

| Criterion | Niryo One | uArm Swift Pro | BCN3D Moveo |
|---|---|---|---|
| **Cost** | ~€2,000 ready to use | ~€600 ready to use | ~€300 in materials, to be built |
| **Payload** | 300 g | 500 g | ~250 g (estimated, community) |
| **Repeatability** | ± 1 mm | 0.2 mm | 1 to 2 mm (estimated) |
| **Work volume** | sphere R ≈ 440 mm | sphere R ≈ 340 mm | sphere R ≈ 500 mm |
| **Openness** | partial BOM + open firmware | closed | full BOM + open firmware + STL files |
| **Fablab buildability** | no (monolithic industrial kit) | no (factory assembly) | yes (3D printable + standard fasteners) |

**Sources**: the Niryo and UFactory manufacturer sites for the first two references, the BCN3D Moveo GitHub repository and the Reddit r/robotics community thread for the third.

**What we retain.** The **Moveo** is the most inspiring reference for the project: it is open, easy to take apart, affordable, and its 3D-printable structure lines up with the constraints of the school fablab. We reuse its general logic (articulated architecture, printable, driven by steppers) but simplify from 5 axes to 3 to stay within a one-semester teaching scope. The Niryo and the uArm are set aside: the first because its cost is beyond a school project budget, the second because its closed nature rules out any exploration of the architecture choices.

**Orders of magnitude calibrated for the CdCF:**

- Material cost **target ~€300**, aligned on the Moveo.
- Payload **target 100 g** (a reduction accepted because of the 3 axes instead of 5, and of the demonstrative rather than productive objective).
- Repeatability **target ± 5 mm** at the tip, calibrated between the Moveo (1 to 2 mm, with a complexity out of scope) and an operational minimum for a classroom demonstration.

These three orders of magnitude become the reference figures at step 4 of the specification, where every [[fonction-en|function]] will be characterised by a [[caracteriser-une-exigence-en|criterion]] / [[caracteriser-une-exigence-en|level]] / [[caracteriser-une-exigence-en|flexibility]] triplet.

## Pitfalls

**Confusing the TSA with a literature review.** A list of papers read is not a TSA. The TSA produces a table of figures aimed at a decision. The literature review produces notes. The review **feeds** the TSA (it supplies the raw material), it does not replace it.

**Criteria that do not discriminate.** A criterion on which every reference retained has the same value (all are mains powered at 230 V, all weigh around 5 kg) adds nothing to the table. Drop the criterion, or widen the sample to make the discrimination appear.

**The silently empty cell.** Missing data left blank looks visually like a low or zero value, and skews the reading of the table. The discipline of `n/a` or `?` makes visible what is not known, and the absence becomes information in itself, to be debated at review.

**The unsourced figure.** A cost or a performance reported with no source cannot be checked and commits nobody. Traceability of the figures is what turns a TSA table into a deliverable that commits rather than a team hunch.

**Comparing solutions that are not comparable.** Putting a €50,000 industrial product next to a €200 maker project in the same table dilutes the analysis. Either you compare them on criteria that make them coherent (pure performance, ignoring cost), or you separate them into two distinct TSAs if the budget targets only one of the two worlds.

**A TSA that drifts into exhaustiveness.** 15 solutions × 12 criteria becomes a document nobody reads any more, neither at review nor in the team. The discipline of 3 to 6 solutions × 5 to 8 criteria is not an arbitrary norm: it is the window where the analysis stays demanding without becoming a full-time job.

**The muted summary.** A table delivered with no summary, or with a vague paragraph (*"we retain several interesting solutions"*), cancels the upstream work. The summary is what turns the map into a decision prepared for the rest of the project.

## Special case — an immature market or a niche project

Plenty of school projects tackle specific use cases for which **no comparable commercial solution exists**: an inspection robot fitted to a particular geometry, measurement instrumentation for a rare experimental protocol, an assistive device for a small group of users. The TSA then looks impossible to run for lack of material.

Three adjustments make the exercise useful anyway:

- **Widen the sources** beyond finished products: active patents, research publications, uncommercialised university prototypes, technical blogs of R&D teams.
- **Compare building blocks rather than products.** If no complete system resembles the project, sub-systems (the actuation, the instrumentation, the control) may well do. The TSA then becomes a patchwork of partial comparisons, to be made explicit as such in the summary.
- **Set a timebox from the start** — one to two days devoted to the TSA, no more. On an immature market, the risk is over-investing in exploration at the expense of the rest of the project. Conversely, doing no TSA at all on the pretext that there is no material deprives the project of any external calibration.

In every case, the TSA of a niche project accepts that it is **exploratory** rather than industrial. The summary takes account of that: the orders of magnitude retained for the CdCF are then calibrated less by what exists and more by the project's own constraints (budget, calendar, accessible means of manufacture).

## Where it fits in the project

The TSA is not an isolated deliverable: it feeds several later steps, sometimes several phases away.

- **Step 2 of the [[specification-technique-en|technical specification]]** — the main phase where the TSA is produced, as a table plus summary integrated into the [[cahier-des-charges-fonctionnel-en|CdCF]] in the *Study of the existing* section of the school document.
- **Step 4 of the [[specification-technique-en|technical specification]].** The orders of magnitude retained in the summary calibrate the **levels** of the requirements. With no TSA, the levels of the CdCF are set arbitrarily and risk being either out of reach or too lax compared with what is already done.
- **Step 2 of the [[concept-en|concept]] phase.** The criteria chosen for the TSA often become the basis of the criteria of the [[matrice-de-decision-en|decision matrix]] that arbitrates between candidate solutions internal to the project, with the central addition of **weighting**, absent from the TSA.
- **[[dossier-technique-en|Technical design file]].** Preliminary sizing and the final choice of components can reuse TSA orders of magnitude (consumption, size, thermal constraints) to calibrate the first simulations.

This multi-phase anchoring is what justifies the initial investment: a solid TSA at step 2 of the specification avoids going back over uncalibrated assumptions at each of the following steps.

## See also

- [[specification-technique-en|Technical specification]] — the phase where the TSA is produced (step 2)
- [[cahier-des-charges-fonctionnel-en|Cahier des charges fonctionnel]] — the final document that consolidates the TSA in the *Study of the existing* section
- [[caracteriser-une-exigence-en|Characterising a requirement]] — the downstream step (step 4 of the specification) that reuses TSA orders of magnitude to set the levels
- [[matrice-de-decision-en|Decision matrix]] — the downstream tool (step 2 of concept) that weights and arbitrates between internal candidate solutions
- [[concept-en|Concept]] — the downstream phase where the TSA criteria are reused
- [[bom-en|BOM]] — the downstream tool (technical design file) that formalises the final choice of components
