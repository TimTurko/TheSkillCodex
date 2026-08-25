---
title: Cahier des charges fonctionnel
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
  - caracteriser-une-exigence-en
aa:
  - RA-PROJET-C04-4/PROJ/1
  - RA-PROJET-C04-4/PROJ/2
  - RA-PROJET-C04-4/PROJ/7
draft: false
source_fr: conduite/proj/cahier-des-charges-fonctionnel.md
source_sha256: c816f479ee0488fd05efb393bc5f1229afc3bec54ae94d2277dd9dd47b354544
---

The **cahier des charges fonctionnel** (CdCF), the French functional requirements specification, is the reference document of a project: it states unambiguously what the system must do, puts figures on every requirement, and formally commits both the client and the designer. Defined by [[afnor-nfx50-151-en|standard NF X50-151]], it is the **main output of the [[specification-technique-en|technical specification]] phase**. The version taught in this wiki is a *simplified school version*, gathering the five deliverables of the phase into a single document: presentation of the project, statement of the need, study of what exists, functional analysis and project plan.

## What is it for?

A well-written CdCF plays three inseparable roles, and together they justify the effort it takes to write:

- **A shared reference**: everyone involved (team, client, supervisors, suppliers) is talking about the same project. When a disagreement comes up along the way, you go back to the CdCF — not to an email thread or to somebody's memory of a meeting.
- **An opposable document**: every quantified requirement commits both sides. The client cannot ask for more than what was approved, and the team cannot deliver less. *Opposable* is meant here in its French legal sense, that is, capable of being held against either party. Being able to hold the document against someone is exactly what separates a CdCF from a mere statement of intent.
- **A final assessment grid**: at delivery, the CdCF is gone through point by point to accept or reject each requirement. The success of the project is measured requirement by requirement, not by overall impression.

With no formal CdCF, a project lives on the implicit. Everyone builds their own picture of what is to be delivered, and the gaps only show up at the end, when it is too late to close them without cost.

## How is it built?

A CdCF is not written in one go. It **brings together** the material produced all the way through the [[specification-technique-en|technical specification]] phase. The full method — analysing the need with the [[bete-a-cornes-en|bête à cornes]] (the "horned beast" diagram, the French need-statement tool), studying what exists, formalising the functions with the [[pieuvre-en|pieuvre]] (the "octopus" diagram, the French function-mapping tool), quantified characterisation, planning — is set out in the framework page for the phase.

Writing the document itself (step 6 of the phase) means:

1. **Bringing together** the five intermediate deliverables into the standard structure of the document (see the next section)
2. **Laying it out**: contents list, page numbers, running heads, numbered sections, clean tables, captioned diagrams
3. **Checking coherence between sections**: a requirement quantified at step 4 has to be consistent with the order of magnitude retained at step 2, and a risk identified at step 5 has to echo an [[FC-en|FC]] (constraint function) from the pieuvre
4. **Getting it approved** at the *CdCF review*, the [[jalons-en|milestone]] closing the technical specification, run by the teaching staff (who play the role of the client in the school setting)

A **pre-filled Word template** is provided in the repository: [cdcf-ecole-template.docx](/ressources/templates/cdcf-ecole-template.docx). The document is in French, like the diagrams of this wiki. It carries the five-section table of contents, with a cover page, an automatic contents list and the tables already laid out (bête à cornes, comparative state of the art, characterisation of the functions, risk matrix). Fill in the placeholders in square brackets and the CdCF takes shape.

## Standard structure of the school document

The simplified school CdCF is organised in five sections, following the order of the teaching sequence of the phase:

1. **Presentation of the project** — context, stakeholders, system boundary *(material from step 1)*
2. **Statement of the need** — [[bete-a-cornes-en|bête à cornes]], need checked *(material from step 1)*
3. **Study of what exists** *(school addition)* — [[etat-de-l-art-technique-en|technical state of the art]], comparison table, synthesis *(material from step 2)*
4. **Functional analysis** *(core of NF X50-151)* — [[pieuvre-en|pieuvre]], table of characterised [[fonction-en|functions]] *(material from steps 3 and 4)*
5. **Project plan** *(school addition)* — [[wbs-en|WBS]], [[jalons-en|milestones]], [[retroplanning-en|backward plan]], [[gantt-en|Gantt]] chart, [[matrice-de-risques-en|risk matrix]] *(material from step 5)*

The sections are **labelled explicitly**, "core of NF X50-151" on section 4 and "school addition" on sections 3 and 5, so that the reader, and the student themselves, can tell the normative core from the teaching additions.

> [!info] Worth knowing
> In a professional setting, the **strict NF X50-151 CdCF is limited to the functional analysis** (sections 2 and 4 above). The technical state of the art and the project plan are separate deliverables, produced in parallel and aimed at different readers (the technical team, the project management). The formal "response framework" of NF X50-151, the chapter setting out how a supplier is to answer the call for tenders, has no direct equivalent at school: the project plan takes its practical role, framing what comes next rather than organising a supplier consultation.

## Example — 3-axis arm project

For the running example, a 3-axis teaching robot arm, the CdCF is organised in the 5 standard sections of the table of contents. Section 1 restates the students-as-their-own-client position (sponsor = the mechatronics teacher, teaching goal made explicit). Section 4, the core of NF X50-151, gathers the pieuvre and the table of characterised functions: 1 [[FP-en|FP]] (main function), 1 [[FS-en|FS]] (secondary function) and 2 [[FC-en|FC]], all carrying figures (accuracy ± 5 mm at F1, programming from a computer at F2, 230 V supply at F0, fablab demountability at F0).

[[ecoconception-en|Eco-design]] is woven through the document: an "openness / repairability" criterion in the state-of-the-art table (section 3), FC2 on demountability in the pieuvre (section 4), the "fablab availability" risk in the risk matrix (section 5). There is no dedicated eco-design section. The environmental question runs through the whole document.

The full method of construction (the six steps of the phase, step by step) is in the [[specification-technique-en|technical specification]] framework page. The CdCF is then presented at the *CdCF review*, approved by the teaching staff, and the project moves officially into [[concept-en|concept]].

## Pitfalls

**Compiling instead of bringing together.** When five steps have produced five batches of pages, the temptation is to staple the lot together and add a cover page. What comes out of that is a compilation, not a document: the repetitions are still there, the transitions are missing, the inconsistencies between sections go unnoticed. Writing the CdCF is the moment to **reread the whole thing** and rewrite whatever needs rewriting, so that it reads as a coherent account.

**Unquantified requirements.** *"The system must be accurate"*, *"the cost must be reasonable"*: with no value and no unit, the requirement can neither be assessed at the end of the project nor traded off along the way. Every line of the CdCF has to carry a figure. The method is covered in [[caracteriser-une-exigence-en|characterising a requirement]].

**Subjective criteria.** *"Ergonomic"*, *"pleasant"*, *"robust"* are not criteria but intentions. They are to be reworded systematically as measurable quantities (maximum actuation force, MTBF, learning time, allowable temperature range).

**Eco-design as an appendix.** An *"eco-design"* section added at the end of the CdCF, with nothing built into the other sections, does not hold up. [[ecoconception-en|Eco-design]] has to be **woven through**: a criterion in the state of the art, an [[FC-en|FC]] in the pieuvre, a risk in the matrix. A dedicated framework page sets out the method. And not to be confused with [[ecodesign-en|écodesign]], the French design-discipline sense of the word: the CdCF carries eco-design in the quantified engineering sense, écodesign being usually left to the design courses.

**Skipping the CdCF review.** Being reviewed by the teaching staff (or by the client in a professional setting) is not a formality: it is what **commits** the document. With no review, the CdCF stays a team draft. After review, it is a contract that is not casually reopened.

## Special case — a school project with no real client

When a project has no external client (sumo robot, line-following robot, a demonstrator taken apart after the final presentation), writing a full CdCF can feel artificial. Two honest positions exist (see [[specification-technique-en#special-case-a-school-project-with-no-real-client|the special case in the specification phase]] for the detail). What matters is to pick one position explicitly (*students as their own client* or *credible fictional client*) and hold it throughout the document.

## See also

- [[specification-technique-en|Technical specification]] — the phase that produces the CdCF (method set out in 6 steps)
- [School CdCF template to fill in](/ressources/templates/cdcf-ecole-template.docx) — pre-filled Word document to get the writing started *(in French)*
- [[bete-a-cornes-en|Bête à cornes]] — tool for stating the need (section 2 of the CdCF)
- [[pieuvre-en|Pieuvre]] — tool for formalising the functions (section 4 of the CdCF)
- [[fonction-en|Function]] — the FP/FS/FC typology used in the functional analysis
- [[caracteriser-une-exigence-en|Characterising a requirement]] — the criterion / level / flexibility triplet (section 4)
- [[etat-de-l-art-technique-en|Technical state of the art]] — section 3 of the CdCF
- [[afnor-nfx50-151-en|Standard NF X50-151]] — the reference methodological framework
