---
title: Optimising a mechanical design
type: notion
tags:
  - mme
  - notion
prerequis:
  - schema-cinematique-en
aa:
  - RA-MME-C03-1/MME/6
phases:
  - concept
draft: false
source_fr: meca/optimisation-mecanique.md
source_sha256: ded1a76f06c4e9f1a1966a6f0a980c6ee295e92513feb6bd1e0a5ff8ad69e569
---

**Optimising a design** means improving it once a first sizing already works — cutting its mass, its cost or its part count, making it easier to manufacture and to assemble — without degrading its functions or stepping outside the requirements. It is a way of trading off competing criteria, and it is not the same act as designing. This page sets out the optimisation reasoning at project level. Fine sizing (structural analysis, topology optimisation) belongs to the **mechanics course** and to advanced CAD.

![Before and after a weight reduction: on the left a solid section (mass 100%), on the right the same section hollowed out and ribbed (mass down by roughly 30%). The material removed is the material that does not carry load; the functions and the requirements are unchanged.](/ressources/img/optimisation-mecanique/generique.svg)

## What is it for?

Designing and optimising are two different moves. **Designing** is making a solution exist that performs the function. **Optimising** is making that solution *better* on one or more criteria, once it works. A first design that "holds up" is rarely the lightest, the cheapest or the simplest to assemble. Optimisation is what recovers that margin.

In the [[concept-en|concept]] phase, once the solution has been chosen and roughly sized, optimisation refines it before the [[dossier-technique-en|technical design file]] is frozen. It is not a one-off step but a **loop**: you adjust, you re-check against the requirements, you start again as long as there is gain to be had without risk.

## How to optimise

Three levers can be reasoned through at the level of a mechatronics project, with no heavy structural analysis:

- **Choose the material and process pair knowingly.** For the same part, machined aluminium, folded steel and 3D-printed PETG give neither the same mass, nor the same cost, nor the same stiffness, nor the same lead time. Weighing that pair against the requirements (load to carry, precision, budget) is exactly what a [[matrice-de-decision-en|decision matrix]] is for, part by part.
- **Lighten the geometry.** Remove the material that does not work: hollow out or rib a solid section, cut openings in a plate, bring an oversized wall thickness back to what it needs to be. In bending, the material furthest from the neutral axis carries most of the stiffness. You can often empty out the centre for a large mass saving with the stiffness practically unchanged.
- **Cut the part count (*design-for-assembly*).** Merge two parts into one, remove a fastener, standardise the screws. Fewer parts means less cost, less assembly time and fewer points of failure.

The ability to take a design apart at end of life is a fourth lever, covered on the [[ecoconception-en|eco-design]] side: the page sends you there rather than repeating it here.

Whatever the lever, the rule is the same: **do not optimise one variable on its own**. Decide first *which* criteria count and how much they weigh (mass? cost? assembly time?), then trade off the compromises. A mass saving can cost you stiffness or money. The [[matrice-de-decision-en|decision matrix]] is what supports that trade-off.

*Working out the fine detail — how much material can come out without losing strength, where to put the ribs, which shape gives the best stiffness-to-mass ratio — belongs to structural analysis (finite elements), to topology optimisation and to generative design, all of them the subject of the **mechanics course** and of advanced CAD. The wiki stops at trade-off reasoning at system level. Beyond that, you size, you do not guess.*

## Example — The 3-axis arm

Take the **forearm** of the running example. First design: a solid aluminium bar, machined. It works, but it is heavy, and any mass out at the end of the arm weighs on the motors and on the power draw.

The optimisation reasoning, lever by lever:

- **Material and process** — the forearm works mainly in bending under the load carried at its end. A solid bar is oversized for that. Two options: aluminium hollowed out by machining (light, stiff, more expensive) or ribbed 3D-printed PETG (cheap, quick to iterate, more flexible and limited in temperature). We keep **ribbed aluminium** for the loaded forearm (stiffness matters) and **printed PETG** for the lightly loaded tool holder (cost and iteration matter).
- **Geometry** — the solid section is replaced by a ribbed one: the material stays where it takes the bending (far from the neutral axis), the centre is emptied out. Large mass saving, stiffness practically unchanged.
- **Parts** — the original joint stacked four spacers and a bracket. It is redrawn as a single printed part with the spacers built in. **Five parts down to one**, and nothing left to align during assembly.

The decision is traced, as in a [[matrice-de-decision-en|decision matrix]]: roughly −35% mass on the forearm and four fewer parts, for a moderate material cost premium and stiffness held. *The exact wall thickness that keeps the deflection under the limit set by the requirements is worked out in the mechanics course. Here we have reasoned the direction and the compromise, not the final sizing.*

## Pitfalls

- **Optimising too early.** Refining a design before it has been checked functionally is polishing a solution you may well throw away. You optimise what works, not what you hope will work.
- **Optimising a single variable.** Pulling the mass down without watching stiffness, cost or manufacturability only moves the problem somewhere else. Optimisation is multi-criteria by nature.
- **Optimising outside the requirements.** A gain is only a gain if the part still meets its requirements. Lightening an arm to the point where it bends too much is not optimisation, it is a step backwards.
- **Confusing lightening with weakening.** Removing material that *does not work* saves mass at no cost in strength. Removing material that does work degrades the part. Without the calculation, stay conservative and send the fine sizing back to the mechanics course.

## Going further

The structured approach that optimises manufacturing and assembly together has a name: **DfMA** (*Design for Manufacturing and Assembly*). Quantitative sizing — finite elements, topology optimisation, generative design — is the subject of the mechanics course and of advanced CAD. This page sets out the reasoning upstream of it, not the formalism.

## See also

- [[matrice-de-decision-en|Decision matrix]] — the tool for trading off between competing criteria
- [[ecoconception-en|Eco-design]] — taking things apart and using less material, neighbouring levers
- [[schema-cinematique-en|Kinematic diagram]] — the mechanical model being optimised
- [[concept-en|Concept]] and [[dossier-technique-en|Technical design file]] — the phases where optimisation happens
- **Mechanics course** (colleagues) — structural analysis, topology optimisation, fine sizing
