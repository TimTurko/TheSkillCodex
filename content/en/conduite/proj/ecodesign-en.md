---
title: Écodesign
type: notion
phases:
  - specification
tags:
  - proj
  - notion
  - ecoconception
prerequis: []
aa:
  - RA-PROJET-C04-4/PROJ/5
draft: false
source_fr: conduite/proj/ecodesign.md
source_sha256: fb073c653acb40f50a3eaa0bff58d0fe4d48e455c8af8c800d2be0e12e13bdad
---

**Écodesign** (the French term, sometimes written *éco-design*) is the approach that brings the environmental stake into the **design process** of a product — its shape, its uses, its experience, its perceived durability. It differs from **[[ecoconception-en|eco-design]]**, a quantified **engineering** approach centred on the life cycle: where eco-design *measures and reduces* impact through technical choices, écodesign *steers the design* through the designer's eye. The two are **complementary**, not competing.

## What is it for?

Telling the two apart is not a vocabulary exercise for the final review. It is knowing **which lever you are pulling** when you set out to make a product more responsible. Confusing them leads you to believe the environmental stake is covered when only half of it has been dealt with.

The key point is their **complementarity**:

- [[ecoconception-en|Eco-design]] without écodesign produces a system that is technically frugal but that nobody wants to keep, repair or take apart. Repairability exists on paper, but use never calls on it. Real impact is not reduced.
- Écodesign without eco-design produces an object *that looks* responsible — soft shapes, materials advertised as "green" — with no measured reduction in impact at all. That is the open door to **greenwashing**.

A genuinely responsible product mobilises both: the engineering rigour that quantifies and reduces, and the design of use that makes that reduction something the user actually experiences.

## How do you tell them apart?

The distinction shows up along a few axes. It stays **porous** (the two approaches overlap in practice), but the centres of gravity are clear.

| Axis | Eco-design (écoconception) | Écodesign |
| --- | --- | --- |
| **Discipline of origin** | engineering, standardisation (ISO 14006) | product / industrial design |
| **Central question** | what is the impact, how do we reduce it? | how do we make the object desirable, durable, frugal in use? |
| **Scope** | full life cycle, multi-criteria | shape, use, experience, user behaviour |
| **Method** | quantified ([[acv-simplifiee-en\|LCA]], [[matrice-eco-criteres-en\|eco-criteria matrix]], indicators) | qualitative and creative, use-driven |
| **Deliverables** | matrices, LCA, trade-off appendix | concepts, mock-ups, use scenarios |
| **In this wiki** | the [[ecoconception-en\|eco-design]] thread (carried in house) | partly delegated to the design courses |

On a [[mecatronique-en|mechatronics]] project in electronics and embedded software, **eco-design is the ground carried in house**: it is what the dedicated thread details (energy frugality, component lifetime, [[pcb-en|PCB]] disassembly, software frugality). **Écodesign leans towards the neighbouring disciplines** (design, ergonomics, materials). The wiki explains its logic and how it fits, but delegates the practice to the courses concerned.

## Example — 3-axis teaching arm

The same object, looked at through both lenses, on one shared point: **disassembly**.

- **Through eco-design** (engineering): JST connectors rather than direct soldering, a modular board, standard fasteners. Disassembly is *technically possible and measurable* (time to take apart, number of tools, share of recoverable parts).
- **Through écodesign** (design of use): a casing whose shape **invites** opening, sorting markings screen-printed on the parts, a grip that avoids breakage during removal. Disassembly is *actually used*, because the object makes it obvious and desirable.

Both serve the same goal. Eco-design guarantees that taking the arm apart is *feasible*. Écodesign guarantees that the user *will do it* rather than throw the whole thing away. Technical repairability that the design makes off-putting (hidden screws, closed shape) is dead repairability.

## Pitfalls

**Believing that the two are opposed.** They are not two rival schools but two complementary levers. A responsible project mobilises them together, each covering the other's blind spot.

**Reducing écodesign to "making it green or pretty".** An object with organic shapes and natural colours is not écodesigné if it reduces no real impact. Without an anchor in use and in effective durability, it is window dressing, the exact border of greenwashing.

**Believing that technical eco-design is enough.** A system optimised for power draw and repairability, but whose real use has not been thought through (nobody knows it can be repaired, or wants to keep it), misses its environmental goal. Technical frugality only turns into reduced impact if use follows.

**Encroaching on design while thinking you are carrying it in house.** Écodesign draws on skills (product design, ergonomics, use scenarios) that the electronics and software team does not necessarily have. The reflex: cite the stake, articulate it with the design courses, do not improvise a design argument nobody has validated.

## Special case — the English false friend

Take care when reading English-language sources: in English, **ecodesign translates écoconception**, not écodesign in the French sense. The **European *Ecodesign* directive** is officially the *directive Écoconception* in French. It covers the energy efficiency and life cycle impact of products, pure engineering register. The French term *écodesign*, on the other hand, keeps its **design-discipline** connotation. An English-language text talking about *ecodesign* is therefore almost always talking about what this wiki calls eco-design. Do not let the resemblance trap you.

## See also

- [[ecoconception-en|Eco-design]] — the quantified engineering approach, carried in house by the wiki
- [[matrice-eco-criteres-en|Eco-criteria matrix]] — environmental evaluation tool of eco-design
- [[acv-simplifiee-en|Simplified LCA]] — quantified method delegated to the dedicated courses
- [[specification-technique-en|Technical specification]] — the phase where the distinction is set, at the cross-cutting integration of the functional requirements specification
