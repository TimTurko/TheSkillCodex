---
title: Eco-criteria matrix
lang: en
type: notion
phases:
  - concept
tags:
  - proj
  - notion
  - ecoconception
prerequis:
  - matrice-de-decision-en
aa:
  - RA-ESE-C09-2/ESE/4
draft: false
source_fr: conduite/proj/matrice-eco-criteres.md
source_sha256: 809acf7392dc0d71b6f03f1cf50af2cea18c950d1c9e50359b72e25f9d4ac350
---

The **eco-criteria matrix** is the environmental evaluation tool of [[ecoconception-en|eco-design]]: a set of **five environmental criteria** scored across **N candidate solutions**. Its distinctive feature: it does not sit apart in its own table, it is **embedded in the [[matrice-de-decision-en|decision matrix]]** as a block of weighted rows. The environmental criterion then weighs on the trade-off in the same way as cost or performance, instead of being relegated to a note in the margin.

## What is it for?

The eco-criteria matrix answers one precise problem: making sure the environment **actually weighs** on the choice of a technical solution, instead of being mentioned and then forgotten when the decision is made.

Three roles:

- **Forcing the environmental trade-off.** An eco evaluation placed *beside* the decision matrix changes no choice. You look at it, you nod, you decide on cost. Built *into* the matrix as a block of weighted rows, it weighs mechanically on the final ranking.
- **Staying on quantifiable magnitudes.** The five criteria bear on what electronics and embedded software expertise knows how to measure (power draw, lifetime, disassembly, material). Anything beyond that scope (raw material impact, full [[acv-simplifiee-en|LCA]]) is cited and delegated to the dedicated courses, not quantified in haste.
- **Recording the eco trade-off.** The eco-criteria block, dated and weighted inside the decision matrix, becomes a written trace you can produce as it stands in a review, and not an argument reconstructed after the fact.

> [!warning] Watch out
> **Eco-criteria matrix ≠ [[matrice-de-decision-en|decision matrix]].** The decision matrix is the **general** trade-off tool: every solution in columns, every weighted criterion in rows (cost, performance, robustness, environment…). The eco-criteria matrix is not a second, competing table. It is the **block of five environmental criteria** that slots into the decision matrix. An eco-criteria matrix living in its own corner weighs nothing. The same rows built into the decision matrix weigh exactly as much as the others.

## How do you build one?

Four stages, aligned on the [[matrice-de-decision-en|decision matrix]] the block slots into.

1. **Take the candidate solutions back** from the decision matrix of the sub-system concerned — same columns, not a new set of solutions.
2. **Set the five environmental criteria**, quantifiable on the electronics and software side:
   - **power draw in operation** (W or mW)
   - **power draw in standby / holding** (µA or mA)
   - **lifetime / obsolescence** (cycles, MTBF, announced end-of-life date)
   - **disassembly / repairability** (connectors vs soldering, board modularity)
   - **material frugality** ([[pcb-en|PCB]] copper mass, layer count, overall mass)
3. **Score each solution on each criterion** on a common scale (1 to 5 typically) and **weight** those rows like the other criteria of the decision matrix. The eco weighting is fixed *before* scoring, not after.
4. **Insert the block into the decision matrix** — not beside it. The weighted sum of the eco rows enters the calculation of the overall ranking.

For everything outside the electronics and software scope (carbon impact of materials, manufacturing energy, material end of life), you do not quantify an ad hoc [[acv-simplifiee-en|LCA]]: you cite the stake and refer to the materials and life cycle assessment courses.

## Example — 3-axis teaching arm

Eco-criteria block for the choice of the arm's motors, across three solutions (steppers / DC motors with encoders / servos). Scale 1–5 (5 = most favourable), weighted over 30 points of the decision matrix's overall scoring scheme.

| Environmental criterion | Weight | Steppers | DC + encoders | Servos |
| --- | --- | --- | --- | --- |
| Power draw in operation | 8 | 2 | 4 | 3 |
| Power draw in standby / holding | 6 | 1 | 5 | 3 |
| Lifetime / obsolescence | 7 | 5 | 3 | 3 |
| Disassembly / repairability | 5 | 4 | 3 | 3 |
| Material frugality | 4 | 2 | 4 | 3 |
| **Weighted eco subtotal** (/150) | **30** | **85** | **114** | **90** |

**Reading.** On the environmental plane alone, the DC motors come out on top (114/150): lower power draw at rest (subject to a non-backdrivable transmission, a nuance recorded in [[ecoconception-en|the eco-design thread]]) and lower mass. The steppers are penalised by their holding current (permanent static torque). Yet once this block is **put back into the complete decision matrix** (where open-loop positioning accuracy and simplicity of control weigh heavily), it is the steppers that were retained for the arm. That is exactly the expected behaviour: the eco side **weighed without deciding on its own**. An isolated eco block would have pointed towards the DC motors. Built in, it took part in a balanced trade-off.

## Pitfalls

**An eco matrix placed beside the decision matrix.** This is the central pitfall: a separate eco table influences no choice. The rule is embedding. The eco rows live *inside* the decision matrix, weighted like the others.

**Weighting eco very low.** An eco block weighted at 2 or 3 points out of 100 amounts to not treating it at all: it has no effect on the ranking. For eco to count, its weight must be of the same order as the other structuring criteria, even if that means forcing it towards the top of the scoring scheme when the project context justifies it.

**Quantifying outside your expertise.** Inventing a "material recyclability" score or a "carbon impact" with no validated method weakens the whole matrix. The five criteria stay on quantifiable electronics and software magnitudes. The rest is cited and delegated.

**Scoring with no common scale.** Scores given by feel, with no shared grid, are not comparable across solutions. The scale (1–5) and its reference points are fixed before scoring.

## See also

- [[ecoconception-en|Eco-design]] — cross-cutting thread that carries this evaluation tool
- [[matrice-de-decision-en|Decision matrix]] — general trade-off tool the eco-criteria block is embedded in
- [[acv-simplifiee-en|Simplified LCA]] — quantified method delegated to the dedicated courses for what goes beyond electronics and software
- [[concept-en|Concept]] — the phase where the decision matrices, and therefore the eco-criteria block, are built
