---
title: FAST
lang: en
type: tuto
phases:
  - concept
tags:
  - proj
  - tuto
  - analyse-fonctionnelle
prerequis:
  - fonction-en
  - decomposition-fonctionnelle-en
aa:
  - RA-PROJET-C04-4/PROJ/1
  - RA-PROJET-C04-4/PROJ/6
draft: false
source_fr: conduite/proj/fast.md
source_sha256: 9faf8103f9450c22d60030fc6d459d62920b9363241b6ba36f131c13df20b19a
---

The **FAST** (*Function Analysis System Technique*) is a functional analysis diagram that chains a function to the **technical functions** that carry it out, along a logical chain read in two directions: **WHY** from right to left, **HOW** from left to right, the vertical axis carrying the **WHEN** (functions ensured simultaneously). Used at step 1 of the [[concept-en|concept phase]], it formalises one branch of the [[decomposition-fonctionnelle-en|functional breakdown]] down to the grain where each technical function calls for candidate solutions.

![FAST — generic diagram](/ressources/img/fast/generique.svg)

## What is it for?

The [[decomposition-fonctionnelle-en|functional breakdown]] cuts the system into sub-systems and technical functions, but it does not say whether the chain of realisation **holds logically**. That is the role of the FAST: it takes a function and unrolls, towards the right, the "how do we carry it out?", each answer becoming a child technical function, until it reaches functions that a concrete solution can address directly. Its strength lies in a **discipline of bidirectional reading** that validates the logic.

The tool plays three roles:

- **Validating the causal chain.** Every FAST chain must read correctly in both directions. From left to right, each link answers the "how" of the previous one. From right to left, each link answers the "why" of the next one. If the reverse reading does not land back on the parent function, the chain is wrong. A link is missing or a level has been skipped.
- **Preparing the choice of solutions.** Each terminal technical function (the leaf of the chain) calls for 2 to 5 candidate solutions, compared in a [[matrice-de-decision-en|decision matrix]] at the following step. The FAST is what turns an abstract service function into a set of traceable technical decisions.
- **Making simultaneity visible.** The vertical axis (WHEN) groups the technical functions that must be ensured **at the same time** for a parent function to be realised. This reading avoids treating in series functions that are in reality concurrent.

> [!warning] Watch out
> **FAST ≠ [[decomposition-fonctionnelle-en|functional breakdown]].** The breakdown is the broad exercise: cutting the system into sub-systems with clean interfaces and comparable sizes. The FAST is the **formalism** that develops **one** branch of that cut into a logical WHY / HOW / WHEN chain, and validates it by bidirectional reading. You break down first, to structure. You then unroll one FAST per sub-system (or per critical function) to descend cleanly to the solutions. The two are not opposed. The FAST is the precision tool within the breakdown.

## Step by step

A FAST is built in four stages: set the root function, unroll the HOW towards the right, validate by going back up the WHY (and place the simultaneous functions on the WHEN axis), then connect the leaves to the candidate solutions.

### 1. Set the root function

At the left of the diagram, the starting function — often a first-level technical function coming from the [[decomposition-fonctionnelle-en|breakdown]], sometimes directly a service function from the [[pieuvre-en|pieuvre]]. It is worded like any [[fonction-en|function]]: **action verb in the infinitive + complement** (*"set the segments in motion"*, *"regulate the temperature"*). A badly worded root — a noun instead of a verb, a component instead of a function — falsifies the whole chain that follows from it.

### 2. Unroll the HOW towards the right

For the root function, ask the question **"how do we carry it out?"**. Each answer is a child technical function, placed to the right of its parent. Repeat the "how" on each child, level by level, following the **stopping rule** inherited from the breakdown: you go down as long as the function is not directly addressable by a candidate solution, and you stop as soon as it is.

*"Measure the angular position"* is addressable (encoder, potentiometer…) → you stop. *"Manage the movement"* is not (too vague to list 2 to 5 solutions) → you refine one notch further right.

### 3. Validate by the WHY and place the WHEN

A FAST is only correct if it **also reads backwards**. Go back up the chain from right to left, asking at each link **"why this function?"**: the answer must be exactly the parent function. If the reverse reading produces a different answer, or lands on nothing, the chain is broken. A level has been skipped or a function is wrongly attached.

During this pass, spot the functions that must be ensured **at the same time** to realise their parent: they are stacked vertically on the **WHEN axis**. Three simultaneous technical functions (generate a torque, measure the position, control in closed loop) then read as a concurrent group, not as a sequence.

> [!tip] Tip
> **A FAST is refined over several passes, not in one go.** A first high-level pass sets the structure. The following passes add the functions you missed, the ones that exploring the solutions brings to light. Aiming for exhaustiveness on the first attempt wastes time and freezes a cut that will evolve anyway at step 2 of the concept.

### 4. Connect the leaves to the candidate solutions

Each terminal technical function (the rightmost leaf of each chain) becomes the entry point of a technical choice. For each of them, list **2 to 5 candidate solutions**: they are the ones that will populate the columns of its [[matrice-de-decision-en|decision matrix]] at step 2. At this stage, you do **not arbitrate** yet. You identify the field of possibilities. Choosing a solution as early as the FAST amounts to deciding without comparing, which empties the decision matrix of its meaning.

## Example — 3-axis teaching arm

Take the **joint mobility** sub-system of the 3-axis arm, already isolated by the [[decomposition-fonctionnelle-en|functional breakdown]]. Its FAST is unrolled from the root function *"set the arm segments in motion"*.

![FAST of the joint mobility sub-system — 3-axis arm](/ressources/img/fast/bras-3-axes.svg)

**HOW reading (towards the right).** *How* do we set the segments in motion? By ensuring three simultaneous technical functions: generate a torque on each axis, measure the angular position, control the movement in closed loop. *How* do we generate a torque? With a stepper + driver, a DC motor + gearbox, or an integrated servo.

**WHY reading (towards the left).** *Why* a stepper + driver? To generate a torque on each axis. *Why* generate a torque? To set the segments in motion. The chain reads correctly in both directions. It is valid.

**WHEN axis.** The three technical functions are stacked vertically: it is not a matter of chaining them in time, but of ensuring them **together**. Without torque generation *and* measurement *and* closed-loop control at the same time, the joint does not reach its position.

**What the FAST prepares.** Each leaf opens its [[matrice-de-decision-en|decision matrix]]: *generate a torque* compares stepper / DC motor / servo, *measure the position* compares encoder / potentiometer, *control in closed loop* compares a [[asservissement-en|PID]] loop / step-by-step command. The FAST has turned an abstract function into three traceable technical decisions (seven candidate solutions in the running) without settling any of them.

## Pitfalls

**Confusing the FAST with a team org chart.** Unrolling "Electronics / Mechanics / Software" branches is not a FAST: it is a split of skills. The FAST chains **functions** of the system, each of which mobilises several disciplines. If a branch carries a job title, you have gone off track.

**A chain that does not read in both directions.** This is the defect specific to the FAST: a chain where the "why" read backwards does not land on the parent function. It reveals a skipped level or a wrongly attached link. Bidirectional validation is not a formality. It is the quality control of the diagram.

**Going all the way down to the component.** Writing *"NEMA 17 motor"* as a leaf of the FAST is a level error: the component is a choice made in a [[matrice-de-decision-en|decision matrix]], then frozen in the [[dossier-technique-en|technical design file]], not in the FAST. The leaf stays an addressable technical function (*"generate a torque"*), not a part number.

**Confusing service function and technical function.** Copying the [[fonction-en|FP/FS/FC]] of the [[pieuvre-en|pieuvre]] into the FAST amounts to having unrolled nothing. A service function says what the system delivers to the outside. A technical function says how it goes about it internally. The FAST produces the second from the first.

**Forgetting the WHEN axis.** Stacking in series (from left to right) functions that are in reality simultaneous breaks the semantics of the FAST. Concurrent functions are placed vertically, not one after the other.

**Wanting an exhaustive FAST on the first attempt.** The diagram is built over several passes: general structure first, refinement afterwards as the solutions are explored. A FAST frozen too early holds you back more than it helps.

## Special case — a partial FAST on the critical functions

On a school project, unrolling a complete FAST of the whole system is rarely useful: most functions are trivial (*"supply the energy"* → power supply) and open no real field of solutions. The FAST earns its value on the **critical or uncertain functions**, the ones whose realisation conditions a requirement at flexibility level F0 or F1 of the [[cahier-des-charges-fonctionnel-en|CdCF]], or whose candidate solutions are numerous and not obvious.

The effective practice is therefore a **partial** FAST: you unroll in detail the sub-system or sub-systems that carry the technical risk (on the 3-axis arm, *joint mobility*), and you treat the others in one line. Concentrate the effort where there is a trade-off to prepare, not where the solution is obvious.

## Where it fits in the project

- **Step 1 of the [[concept-en|concept phase]]** — the main phase, where the FAST is unrolled immediately downstream of the [[decomposition-fonctionnelle-en|functional breakdown]]: one FAST per sub-system (or per critical function).
- **Output of the [[specification-technique-en|technical specification]].** The service functions coming from the [[pieuvre-en|pieuvre]] feed the roots of the FAST diagrams: the FAST is the bridge between service function (the *what*) and technical functions (the *how*).
- **Step 2 of the [[concept-en|concept phase]].** Each leaf of the FAST opens a [[matrice-de-decision-en|decision matrix]] comparing 2 to 5 candidate solutions.

A FAST validated in both directions at step 1 guarantees that the solution space explored at step 2 is complete and properly attached to the need — no orphan technical function, no solution without a function of origin.

## Going further

- The FAST comes from **value analysis** (*value engineering*), where it serves to link the functions of a product to their cost in order to identify optimisation paths. On a school mechatronics project, what is kept is mainly its use as technical functional analysis, but the chaining logic stays the same.
- A widespread variant: the **technical FAST** (solution-oriented) places components directly at the end of the chain. To be kept for a downstream phase (technical design file), once the solutions have been settled, and not in the concept, where the point is precisely to keep the solution space open.

## See also

- [[decomposition-fonctionnelle-en|Functional breakdown]] — upstream cutting exercise, one branch of which the FAST formalises
- [[fonction-en|Function]] — FP/FS/FC typology and the verb + complement wording format reused by the FAST
- [[pieuvre-en|Pieuvre]] — source of the service functions that feed the roots of the FAST
- [[matrice-de-decision-en|Decision matrix]] — downstream tool that arbitrates the candidate solutions of each leaf
- [[concept-en|Concept]] — the phase where the FAST is used (step 1)
