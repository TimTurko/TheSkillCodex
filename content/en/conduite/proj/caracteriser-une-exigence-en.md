---
title: Characterising a requirement
type: notion
phases:
  - specification
tags:
  - proj
  - notion
  - analyse-fonctionnelle
prerequis:
  - bete-a-cornes-en
  - pieuvre-en
  - fonction-en
aa:
  - RA-PROJET-C04-4/PROJ/1
draft: false
source_fr: conduite/proj/caracteriser-une-exigence.md
source_sha256: bcb6a521fcaa15239e7fd93f8a180a93805e173db5cc46da30375671d636d473
---

**Characterising a requirement** means turning it into a triplet that can be quantified and arbitrated: a measurable **criterion**, a **level** quantified with its unit, and an explicit **flexibility**. That discipline, imposed by [[afnor-nfx50-151-en|standard NF X50-151]], is what separates an enforceable requirement from an intention. It applies to each [[fonction-en|function]] coming out of the [[pieuvre-en|pieuvre]], to produce the quantified material of the [[cahier-des-charges-fonctionnel-en|CdCF]].

## What is it for?

A stated function (*"allow the operator to position a light object"*) says what the system must do, but says nothing about the precision, the cost, or the deviation that will be tolerated. As long as you stop there, the requirement can neither be assessed at the end of the project nor arbitrated along the way. The **criterion / level / flexibility** triplet fills that gap: it turns the statement into a quantified commitment.

The triplet plays three inseparable roles:

- **Making the requirement enforceable.** Each line of the CdCF commits the designer and the client to a measurable quantity. No figure, no contract. No contract, and the project lives on the implicit while deviations surface too late.
- **Preparing the final assessment.** At delivery, you go through the CdCF point by point and check that each level has been reached. The success of the project is measured requirement by requirement, not by an overall impression.
- **Anticipating arbitration along the way.** The flexibility says in advance which requirements are negotiable and which are not. Without it, every deviation becomes a crisis. With it, it is a planned arbitration.

This is the most structuring step of the [[specification-technique-en|technical specification]]. Skipping it or rushing it produces a CdCF that does not stand up: a text of good intentions rather than a reference document.

## How do you characterise a requirement?

Three questions to ask for each function coming from the [[pieuvre-en|pieuvre]]:

| Component | Question | Expected form |
|---|---|---|
| **Criterion** | Which measurable attribute is the function judged on? | An observable quantity, ideally a quantifiable one |
| **Level** | Which target value must that criterion reach? | Figure + unit, single value / bound / range |
| **Flexibility** | Which margin is allowed, and is it negotiable? | Numerical tolerance + F0/F1/F2/F3 grade |

The triplet is **inseparable**: each component sheds light on the others. A criterion with no level stays qualitative. A level with no flexibility becomes absolute and blocking. A flexibility with neither criterion nor level has nothing to arbitrate.

### The criterion

The **criterion** is the quantifiable, observable attribute the function will be judged on. A good test while writing: *can you picture a measuring device?* If not, the criterion is badly chosen.

Families of criteria you can draw on:

- **Physical quantities** — mass, length, speed, precision, temperature, power, battery life
- **Economic quantities** — purchase cost, maintenance cost, total cost of ownership
- **Time-related quantities** — service life, MTBF, response time, learning time
- **Binary quantities** — presence/absence, conformity to a standard, sign-off by a referent

The criterion must **discriminate**: it is there to judge, so it has to separate a compliant case from a non-compliant one. Intentions such as *"ergonomic"*, *"pleasant"*, *"robust"* are not criteria: they are fuzzy qualities that have to be translated into measurable quantities (actuation force, allowable temperature range, number of cycles before failure).

### The level

The **level** is the target value the criterion must reach. **Always quantified**, **always with a unit**. It takes several forms depending on the nature of the criterion:

- **Single value** — `100 g`, `230 V`, `12 V`
- **Bound** — `≤ 5 mm`, `≥ 50 mm/s`, `< €200 excl. VAT`
- **Range** — between `20 °C` and `30 °C`, `2.4 GHz ± 100 MHz`
- **Binary target** — *conforming to the [[basse-tension-en|Low Voltage Directive 2014/35/EU]]*, *dismountable without a special tool*

The level is built at the intersection of two sources: **the stated need** ([[bete-a-cornes-en|bête à cornes]], step 1 of the specification) and **the orders of magnitude identified** in the [[etat-de-l-art-technique-en|technical state of the art]] (step 2). The need says what has to be reached. The state of the art says what is already being done and sets realistic orders of magnitude.

> [!tip] Tip
> **Quantified requirements are written in [[unite-si-en|SI units]].** Symmetrical tolerances: `± X mm`. Bounds: `≤ X` or `≥ X`. Ranges: `between X and Y`. This discipline is not a writing affectation: it avoids ambiguities (`100mm` badly broken at the end of a line, `100m m` retyped without proofreading) and makes requirements directly comparable in review.

A central precaution: **do not be more precise than the real need**. A level of `± 0.1 mm` when `± 5 mm` is enough brings nothing usable, makes the cost explode and needlessly complicates arbitration. The right level is *the one that lets the system deliver its service*, not the tightest one you know how to write.

### The flexibility

The **flexibility** says two things: **which margin** is tolerable around the level, and **how far** that margin is negotiable. It has two complementary components.

First, the **numerical tolerance**: the concrete deviation allowed around the level (`± 0.5 mm`, `± 5 %`, `+ 10 mm / − 0 mm`). It sets the acceptability envelope of the requirement.

Second, the **degree of negotiability**, a qualitative four-grade scale imposed by [[afnor-nfx50-151-en|NF X50-151]]:

| Grade | Meaning | When to use it |
|---|---|---|
| **F0 — Mandatory** | Not negotiable. If the level is not reached, you do not deliver. | Safety, regulatory conformity, integrity of the main service |
| **F1 — Barely negotiable** | Deviation tolerated against a strong compensation on another criterion. | Core performance of the system (precision, payload, battery life) |
| **F2 — Negotiable** | Deviation acceptable if justified and arbitrated. | Secondary performance, comfort of use, ergonomics |
| **F3 — Very negotiable** | Comfort value, deviation not blocking. | Final UI details, cosmetic options |

The practical role of the F grade is to say **how arbitration will go** in case of conflict: between requirements, against the budget, against the schedule. An F0 requirement locks the project down. An F3 requirement can be dropped without drama. F1 and F2 are the real ground for arbitration along the way.

## Example — 3-axis teaching arm

Take the main function **FP1** of the 3-axis teaching robot arm again: *"Allow the operator to handle the robot in order to position a light object anywhere in the working volume"*. How do you characterise that function? The triptych below shows three qualities of writing of the same triplet, from the unenforceable version to the fully arbitrable one.

> [!failure] Poor
>
> | Component | Value chosen |
> |---|---|
> | **Criterion** | Precision |
> | **Level** | Good |
> | **Flexibility** | — |
>
> **Why this is poor.** None of the three components holds. *"Precision"* with no qualifier is ambiguous: precision of what (positioning? repeatability? sensor resolution?), measured how, at which point? *"Good"* is not a level, it is an unquantified judgement: good according to whom, against which reference? The flexibility is missing, so nobody knows whether this requirement is locked down or open to arbitration. This line can neither be assessed at the end of the project nor arbitrated along the way.
>
> **Real cost of this mistake.** In a CdCF review, this line will be rejected on the spot and the triplet sent back. Worse: if it slips through the review by inattention, the final assessment becomes impossible: each party will dig in on its own reading of "good precision", and the inevitable gap between the prototype and the expectation cannot be settled by referring to the document.

> [!warning] Fair
>
> | Component | Value chosen |
> |---|---|
> | **Criterion** | Positioning precision |
> | **Level** | ± 5 mm |
> | **Flexibility** | A tolerance is acceptable |
>
> **Why this is only fair.** The criterion has been made more precise (positioning, not repeatability or resolution) and the level is quantified with its unit. That is real progress. But two weaknesses remain. First, the criterion is still vague about the **point of measurement**: precision *where* exactly (at the end of the arm, at a joint, at a single point or throughout the volume)? The ± 5 mm does not describe the same commitment depending on the answer. Second, *"a tolerance is acceptable"* is not a flexibility: it is a pious wish, unquantified and without an F grade. If the level is exceeded, how do you arbitrate? Tolerance up to what, against which compensation, and with how much room to negotiate?

> [!example] Good
>
> | Component | Value chosen |
> |---|---|
> | **Criterion** | Positioning precision at the end of the arm, throughout the accessible working volume |
> | **Level** | ± 5 mm |
> | **Flexibility** | **F1** — deviation up to ± 10 mm acceptable if it brings a substantial cost gain or a significant reduction in mechanical complexity |
>
> **Why this is good.** The criterion is complete: you know *what* (positioning precision), *where* (end of the arm, throughout the volume), and therefore *how to measure it* (a touch probe at several points of the volume). The level is quantified with its unit and written as a symmetrical tolerance in line with [[unite-si-en|SI units]]. The flexibility combines the two expected components: an explicit numerical tolerance (`± 10 mm`) **and** an F grade (`F1`, barely negotiable), together with the kind of compensation that could justify the deviation. This line will be arbitrable during the project, enforceable at assessment time, and readable without a gloss by the client in review.

The gap between the three versions is not a matter of length: the *Good* version is barely two lines longer than the *Poor* one. What changes is the **discipline of statement**. Once acquired, it costs no more writing time, and it saves hours of defensive discussion at delivery.

## Pitfalls

**An unmeasurable criterion.** *"Ergonomic"*, *"pleasant"*, *"robust"*, *"high-performance"* are not criteria but intentions. Reword them systematically into a measurable quantity: maximum actuation force, MTBF, learning time, allowable temperature range. Test: *can you picture a measuring device?*

**An unquantified level.** *"The system must be precise"*, *"the cost must be reasonable"*, *"maintenance must be easy"*: with no value and no unit, the requirement is neither enforceable nor assessable. It is the most frequent pitfall in a school CdCF, and the first one flagged in review.

**Naming a solution in the criterion.** *"Laser precision ± 0.1 mm"* mixes the criterion (precision) with the implementation (laser). You characterise the need, not the measuring instrument: that will be chosen when writing the measurement protocol ([[preuve-de-concept-en|proof of concept]] to remove the uncertainties, then qualification during [[integration-et-tests-en|integration]]).

**A missing flexibility, or one reduced to the F grade alone.** Writing *"F1"* without stating the numerical tolerance, or conversely *"± 10 mm acceptable"* without an F grade, is an incomplete triplet. Both components are needed: with no numerical tolerance, nobody knows how far a deviation is allowed. With no F grade, nobody knows how to arbitrate that deviation during the project.

**Over-specification.** Setting a level tighter than the real need (`± 0.1 mm` when `± 5 mm` is enough, a service life of `100,000 h` when `10,000 h` covers every use case) is of no use. It makes cost and schedule explode with no benefit to the user, and needlessly complicates arbitration during the project. The right level is the one that lets the service be delivered, not the tightest one you know how to write.

**Mistaking F3 for the absence of a requirement.** F3 does not mean "not important": it is a formally quantified requirement whose deviation is tolerable. A legitimate F3 requirement stays in the CdCF and carries a target level. A requirement with *no* F grade at all, on the other hand, is unenforceable, and usually reveals that it should not have been in the document.

## Special case — binary and regulatory requirements

Some requirements do not naturally lend themselves to quantification through a target value and a tolerance. Three typical families:

- **Regulatory conformity** — *"conforming to the [[basse-tension-en|Low Voltage Directive 2014/35/EU]]"*, *"[[marquage-ce-en|CE marking]]"*, *"[[rohs-en|RoHS]]"*. The level is binary (conforming / not conforming), not quantified.
- **Presence/absence of a feature** — *"dismountable without a special tool"*, *"drivable from a computer workstation"*, *"emergency stop within reach"*.
- **Sign-off by a referent** — *"signed off by the mechanics teacher"*, *"approved by the fablab safety officer"*.

The triplet still applies, simply with a binary level:

| Component | Expected form in this case |
|---|---|
| **Criterion** | The binary or regulatory attribute at stake |
| **Level** | Binary target (conforming / present / signed off), with an **explicit reference** to the normative text or to the specification |
| **Flexibility** | Almost always **F0** for regulatory conformity, sometimes F1 for structural features, rarely more permissive |

An associated pitfall: *"the system must comply with the applicable standards"* without a precise citation is not a level: it is a way of dodging. Citing the standard explicitly (reference and version) is what makes the requirement verifiable.

## See also

- [[specification-technique-en|Technical specification]] — the phase where each function is characterised (step 4)
- [[cahier-des-charges-fonctionnel-en|Cahier des charges fonctionnel]] — the final document that consolidates all the characterised triplets
- [[fonction-en|Function]] — the FP/FS/FC typology, each instance of which gets characterised
- [[pieuvre-en|Pieuvre]] — the upstream tool that produces the list of functions to characterise
- [[unite-si-en|SI units]] — the typographic convention for quantified values
- [[afnor-nfx50-151-en|Standard NF X50-151]] — the reference methodological framework
