---
title: Decision matrix
lang: en
type: notion
phases:
  - concept
tags:
  - proj
  - notion
  - methode-decision
prerequis: []
aa: []
draft: false
source_fr: conduite/proj/matrice-de-decision.md
source_sha256: 21d5ff3bedf4b4b7a048298c7491a935634ee9aab54f5f3ee5fa4b37738a9481
---

The **decision matrix** is the tool for making an argued choice between candidate technical solutions: it crosses **candidate solutions in columns** with **weighted criteria in rows**, each solution is scored on each criterion, and the weighted sum gives a ranking that can be justified. It is the canonical tool of the [[concept-en|concept]] phase for choosing a technical solution subsystem by subsystem, without falling into either arbitrariness or false intuition.

![Decision matrix — generic table, 3 solutions × 5 weighted criteria](/ressources/img/matrice-de-decision/generique.svg)

## What is it for?

The decision matrix forces the criteria for choosing between technical solutions out into the open. Without it, the trade-off *"we'll take steppers rather than servomotors"* stays implicit. A month later nobody on the team can justify why, and the decision no longer holds up in review.

Three roles:

- **Making the choice criteria explicit and weighted.** With no written weighting, each teammate reasons from their own implicit priorities, and the final decision is the one made by the most confident voice, not the one with the most arguments.
- **Building [[ecoconception-en|eco-design]] in as a weighted criterion**, on the same footing as cost and performance. It is the only way to stop it being treated as a marginal comment or a box ticked at the bottom of the matrix.
- **Recording the decision** for the rest of the project. A written matrix stays available to consult. Team memory does not. If the architecture is called into question at [[dossier-technique-en|technical design file]] stage, the matrix is reopened and shows what was settled, on which criteria, with which weights.

## How do you build one?

Four steps:

1. **List the candidate solutions** for each leaf technical function coming out of the [[decomposition-fonctionnelle-en|functional breakdown]] and the [[fast-en|FAST]]. Three to five solutions at most. Beyond that the analysis dilutes and the evaluation effort explodes. The solutions spotted in the [[etat-de-l-art-technique-en|technical state of the art]] are natural candidates.
2. **List the choice criteria**, anchored on the requirements of the [[cahier-des-charges-fonctionnel-en|CdCF]] (the French functional requirements specification): main performance, cost, eco-design, robustness, integration complexity, openness, availability. Five to eight criteria are enough.
3. **Weight the criteria** by relative weights (summing to 100, for instance). The weighting has to reflect the real hierarchy of what is at stake on the project, not a soft consensus. If everything is weighted equally, the matrix settles nothing.
4. **Score each solution on each criterion** on a simple scale (1 to 5 typically) and compute the weighted sum. The sum gives a **ranking**, not an automatic decision. It still has to be interpreted, the narrow gaps discussed, and the choice made explicit in a few lines of justification.

*A worked case: choosing a power strategy for a connected weather station deployed outdoors.*

![Decision matrix — choosing the power supply of a connected weather station](/ressources/img/matrice-de-decision/station-meteo.svg)

## Pitfalls

**Weighting patched up after the fact.** If the team adjusts the weights until the hoped-for result comes out, the matrix serves no purpose. Better to choose directly and own it. The weighting is set **before** the solutions are evaluated, and the result stands even when it comes as a surprise.

**Non-discriminating criteria.** A criterion on which every solution scores the same brings nothing to the trade-off. It weighs the matrix down without settling it. Remove it, or reword it so that it really does tell the solutions apart.

**Eco-design in an isolated box.** Treating eco-design as a separate criterion, unweighted or weighted very low, amounts to not treating it at all. For it to carry real weight in the decision it has to be weighted like the other main criteria, or even forced into the top 3 when the context of the project calls for it.

## See also

- [[concept-en|Concept]] — the phase where the decision matrices are built (step 2)
- [[decomposition-fonctionnelle-en|Functional breakdown]] — upstream: produces the leaf technical functions to settle between
- [[fast-en|FAST]] — upstream: validates the chains whose every leaf opens a matrix
- [[ecoconception-en|Eco-design]] — a weighted criterion in every decision matrix
- [[matrice-eco-criteres-en|Eco-criteria matrix]] — the block of environmental criteria that nests inside this matrix
- [[cahier-des-charges-fonctionnel-en|Cahier des charges fonctionnel]] — source of the requirements the choice criteria are founded on
- [[caracteriser-une-exigence-en|Characterising a requirement]] — the upstream method that puts figures on the requirements usable as criteria
