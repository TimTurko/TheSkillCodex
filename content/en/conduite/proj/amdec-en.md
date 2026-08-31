---
title: AMDEC
lang: en
type: tuto
phases:
  - concept
  - dossier-technique
tags:
  - proj
  - tuto
  - gestion-risques
prerequis: []
aa: []
draft: false
source_fr: conduite/proj/amdec.md
source_sha256: 00fbe89afacce2648dac92715703e3d7d1d26c39b6c5969e80bae83c371a6c74
---

**AMDEC** (*Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité*), the French acronym for FMEA, is a method for analysing the **dependability** of a system: for each function or component, the possible **failure modes** are listed, their **severity**, **occurrence** and **detectability** are rated, and from those a **criticality** is derived that ranks the corrective actions. It is the tool for analysing *product* risk on a [[mecatronique-en|mechatronics]] project, used at [[concept-en|concept]] to steer the safety measures and refined in the [[dossier-technique-en|technical design file]] on the real components.

## What is it for?

AMDEC is there to **anticipate the failures of a system before they happen**, rather than discover them at integration or, worse, in use. Where instinct deals with breakdowns one at a time, AMDEC lists them methodically and **ranks** them: not all failures are equal, and prevention effort should go first to where the risk is most critical.

Three roles:

- **Listing the failure modes without missing any.** Going through function by function (or component by component) brings up failures that a spontaneous review misses, especially the ones that are severe but rare, and therefore easy to overlook.
- **Ranking by criticality.** Rating on **severity × occurrence × detectability** sorts the modes against each other. A failure that is severe, frequent and undetectable takes the effort. A failure that is minor, rare and visible can be accepted.
- **Steering the safeguards and the tests.** The most critical modes become the safeguards to build into the architecture (at [[concept-en|concept]]) and the points to check first during qualification testing (at [[integration-et-tests-en|integration and testing]]).

> [!warning] Watch out
> **AMDEC ≠ [[matrice-de-risques-en|risk matrix]].** Both rate risks, but not on the same object and not on the same axes. The risk matrix rates **project hazards** (a component out of stock, a printer breakdown, a teammate away) on two axes (likelihood × severity) and is run from [[gestion-de-projet-en|project planning and tracking]]. AMDEC rates the **failure modes of the product** (a bearing that seizes, a sensor that drifts, an emergency stop that fails to cut) on three axes (severity × occurrence × detectability) and belongs to dependability. One protects *how the project runs*, the other the *reliability and safety of the delivered system*.

## Step by step

AMDEC runs in four stages: choose the level of analysis, identify the failure modes, rate the criticality, then decide and record the actions.

### 1. Choose the level and list what is to be analysed

Decide first on the **grain of the analysis**: an AMDEC is run either **functionally** (on the technical functions coming out of the [[decomposition-fonctionnelle-en|breakdown]] or the [[fast-en|FAST]]) or **materially** (on the physical components). On a school project the functional AMDEC is run early (at [[concept-en|concept]], before the components are chosen), and the material one later (in the [[dossier-technique-en|technical design file]], on the parts actually selected).

Then list what is to be reviewed. Do not aim to cover the whole system: focus on the **critical functions**, the ones whose failure affects the safety of the user or a requirement at F0 or F1 flexibility in the [[cahier-des-charges-fonctionnel-en|CdCF]], the French functional requirements specification. F0 means mandatory and F1 barely negotiable, the two levels that leave the least room to negotiate.

### 2. Identify modes, effects and causes

For each item, answer three distinct questions that are not to be mixed up:

- **Failure mode** — *how* can the item fail? (a motor that no longer turns, that turns too much, that jams; a sensor that drifts, that saturates, that disconnects). One item often has several modes.
- **Effect** — *what consequence* for the system and for the user? The effect is what carries the severity (an effect like "loss of accuracy" does not carry the same severity as an effect like "a crushed finger").
- **Cause** — *why* does this mode happen? The cause is what carries the occurrence and what points to the safeguard (you act on the cause, not on the effect).

### 3. Rate the criticality, G × O × D

Give each mode three ratings on a scale set in advance, typically 1 to 4 on a school project (a 1–10 scale exists in industry, but 1–4 is enough and discriminates better at this size). The letters are the French ones, and they are the ones the team will say out loud: **G** for *gravité*, severity, **O** for *occurrence* and **D** for *détectabilité*. The FMEA literature writes the same product as S × O × D and calls it the risk priority number.

| Rating | **G** — severity of the effect | **O** — occurrence (frequency) | **D** — non-detectability |
|---|---|---|---|
| 1 | minor, no consequence | very rare | certain to be caught before the effect |
| 2 | degraded service | occasional | often caught |
| 3 | loss of function | frequent | rarely caught |
| 4 | danger to the user | almost systematic | not detectable before the effect |

The **criticality** is the product **C = G × O × D** (from 1 to 64). It sorts the modes against each other. Watch the direction of the **D** axis: what is rated is *non*-detectability, because a severe mode that cannot be detected is more critical than a severe mode you see coming and can stop in time.

> [!tip] Tip
> **Any mode at G = 4 deserves an action, whatever its criticality.** A danger to the user is not traded against a low occurrence: even rare and detectable (low C), a mode that can injure calls for a safeguard. Criticality ranks the ordinary modes. Maximum severity short-circuits the calculation.

### 4. Decide and record the actions

For the modes above the criticality threshold the team sets itself (and for every G = 4), define an **action**: act on the cause (lower the occurrence), strengthen detection (lower D), or reduce the effect (lower G). Each action names an **owner** and a **deadline**, then the **residual criticality** is rated again to check that the action really did bring the risk down. An AMDEC table that computes criticalities without leading to a single action has served no purpose.

## Example — 3-axis teaching arm

A partial functional AMDEC of the 3-axis arm, focused on the functions that are critical for safety, consistent with the user risks identified in the [[securite-et-qualite-en|safety and quality]] framework page (pinching, motor torque, stored energy). Scale 1–4, criticality C = G × O × D.

| Function / component | Failure mode | Effect | Likely cause | G | O | D | C | Action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Emergency stop | Fails to cut the power | No way to stop a dangerous movement | Cut driven by the [[firmware-en|firmware]] (can crash) | 4 | 2 | 3 | 24 | Wire the e-stop to cut the supply directly, outside the software |
| Joint (travel limit) | Maximum angle exceeded | Operator pinched, mechanical breakage | Software limit alone, not backed up | 4 | 2 | 2 | 16 | Add a mechanical stop (limit switch) |
| Axis 1 stepper | Step loss under load | Wrong position, accuracy outside F0 | Not enough torque under acceleration | 2 | 3 | 3 | 18 | Torque margin plus deviation detection through an encoder |
| 24 V supply | Overheating in continuous service | Nuisance cut-out, arm stops | Current margin too tight (+8%) | 2 | 2 | 2 | 8 | Thermal monitoring, otherwise acceptable as it stands |

**Reading it.** The two modes at **G = 4** (emergency stop, travel limit) call for an action whatever their criticality. These are the safety measures that will go into the architecture at concept (an e-stop wired outside the firmware, a mechanical stop backing up the software limit), consistent with the safety and quality framework page. Step loss (C = 18) meets the *torque under acceleration* unknown already identified at concept. AMDEC and rough sizing converge. Supply overheating (C = 8) stays below the threshold for priority action, monitored but not blocking.

## Pitfalls

**Mixing up AMDEC and the [[matrice-de-risques-en|risk matrix]].** AMDEC analyses the failures of the *product*, the risk matrix the hazards of the *project*. Putting both in a single table produces a document that sheds light neither on the reliability of the system nor on the running of the project.

**Wanting an exhaustive AMDEC.** Sifting the whole system drowns the analysis under dozens of trivial modes. AMDEC earns its value on the critical functions (safety, requirements at F0 and F1). The rest is dealt with in one line, or not at all.

**Rating without a scale set in advance.** Ratings given by feel, with no shared G/O/D grid, are not comparable between modes or between members of the team. The scale is fixed before rating, not during.

**Forgetting the detectability axis.** Many school AMDECs come down to severity × occurrence and miss the factor that discriminates most in safety: a severe mode that is *undetectable* is far more dangerous than a severe mode you see coming. Detection is often the cheapest lever to act on.

**Computing criticality without acting.** An AMDEC that produces numbers but no corrective action is a dead exercise. The *Action* column, with its owner and its residual criticality, is the whole point of the method.

**An AMDEC frozen after the first draft.** Modes and their ratings change with the project: the [[preuve-de-concept-en|proof of concept]] confirms or disproves occurrences, and [[integration-et-tests-en|integration]] reveals modes nobody anticipated. An AMDEC is reread at every phase review, like the risk matrix.

## Special case — a scaled-down AMDEC on a school project

A full AMDEC (every function, three axes, residual criticality) can be out of proportion for a one-semester project. The **scaled-down teaching variant**, mentioned in the [[securite-et-qualite-en|safety and quality]] framework page, keeps what matters while trimming the scope:

- stick to the **safety-critical functions** (3 to 6 lines, not the full inventory);
- rate on **two axes** (severity × occurrence) if the team is not comfortable with detectability, at the cost of losing the finest factor;
- aim for the **decision** (which safeguards to build in) rather than the completeness of the table.

Trimming is legitimate as long as it keeps the underlying discipline — list the modes, rate them on a shared scale, end up with actions. A well-run 4-line AMDEC is worth more than a 40-line table nobody ever rereads.

## Where it fits in the project

- **The decision step of the [[concept-en|concept phase]]** — the functional AMDEC steers the safety measures to build into the architecture (emergency stop, travel limits, insulation), at the point where the architecture pins down the moving parts and the energy levels.
- **[[dossier-technique-en|Technical design file]]** — the AMDEC is refined on the real components selected (material AMDEC), consistent with the BOM and the detailed drawings.
- **[[integration-et-tests-en|Integration and testing]]** — criticality ranks the safety tests of qualification level 4: what the AMDEC flagged as critical is tested first.
- **The [[securite-et-qualite-en|safety and quality]] framework page** — AMDEC is the product-risk analysis tool of the *product safety* block. The framework page carries how it fits into the cycle, this page carries the method.

An AMDEC run early on the critical functions saves you from discovering a dangerous failure mode at integration, when the architecture is frozen and reworking it is expensive.

## See also

- [[securite-et-qualite-en|Safety and quality]] — the cross-cutting thread that fits AMDEC into the project cycle (product safety block)
- [[matrice-de-risques-en|Risk matrix]] — the cousin tool not to be confused with it: project risk (P × G) against product failure (G × O × D)
- [[decomposition-fonctionnelle-en|Functional breakdown]] — the source of the technical functions a functional AMDEC reviews
- [[integration-et-tests-en|Integration and testing]] — the downstream phase where criticality prioritises the safety tests
- [[concept-en|Concept]] — the phase where the functional AMDEC steers the architecture safeguards
