---
title: Bête à cornes
type: notion
phases:
  - specification
tags:
  - proj
  - notion
  - analyse-fonctionnelle
prerequis: []
aa:
  - RA-PROJET-C04-4/PROJ/1
draft: false
source_fr: conduite/proj/bete-a-cornes.md
source_sha256: ec5f08d0f4e97bb94811a1cd9b33ce932afccfd00cb749ab43c9d5b7455e8f14
---

The **bête à cornes** is a graphical functional-analysis tool that states a need through three questions: who does the system serve, what does it act on, and to what end. It comes from the APTE method and is backed by [[afnor-nfx50-151-en|standard NF X50-151]]. It opens the [[specification-technique-en|specification phase]] and fixes what will later be quantified in the [[cahier-des-charges-fonctionnel-en|cahier des charges fonctionnel]].

## What is it for?

Three questions, three answers: the bête à cornes looks trivial. Its power lies in the way it **forces you to spell out** what everyone believes is obvious. The moment two team members answer the "who" differently is exactly the moment the tool earns its keep: a disagreement that would have surfaced three months later, on a finished deliverable, becomes a five-minute discussion upstream.

It plays three roles:

- **Framing** the scope of the project by separating user, work object and service rendered
- **Checking** that you are indeed talking about a **need** and not about an already chosen solution
- **Serving as a reference** throughout the project: if a technical decision drifts away from the "end" stated here, that is a warning sign

## How do you build one?

The bête à cornes answers three questions, in this order:

| Question | What it designates |
|---|---|
| **Who does the system serve?** | The user, the beneficiary — not the buyer, nor the client in the commercial sense |
| **What does it act on?** | The work object: the object, information, environment or process the system transforms |
| **To what end?** | The service rendered, stated without presuming the solution |

The classic diagram links those three elements to the system placed at the centre:

![Bête à cornes — generic diagram](/ressources/img/bete-a-cornes/generique.svg)

### How to fill it in

1. **Start with "who"** — who actually uses the system? Not "everyone". If several profiles apply, pick the main user and note the others as secondary stakeholders.
2. **Identify "what it acts on"** — which object, environment or piece of information is transformed by the system? If the answer is "nothing", the bête à cornes is not the right tool (revisit how the project is framed).
3. **State the "to what end"** — answer the question "why does this user need this system?". The end states a **service** or a **purpose**, never a mechanism.
4. **Read it aloud**: *"This system serves [who] by acting on [what] in order to [end]"*. The sentence has to ring true and be understood without a gloss.

## Example — 6-axis teaching robot arm

A robot arm project meant to be deployed in engineering schools to support the teaching of manipulator kinematics.

> [!failure] Poor
> ![Bête à cornes — poor example](/ressources/img/bete-a-cornes/bras-mauvais.svg)
>
> **Why this is poor.** "6 servos" and "Arduino" are solution choices: the bête à cornes has to stay agnostic about implementation. "Make it move" is not an end, it is a technical function. The teaching need, the very reason the project exists, has disappeared.
>
> **Real cost of this mistake.** On that project the team held on to this wording for two months before backtracking: the servos chosen too early turned out to be unsuited to the real requirements of the arm, and the team had to switch to stepper motors. Two months of sizing, soldering and code to redo, a mistake that would have been avoided if the bête à cornes had not locked the actuator technology in as early as the specification phase.

> [!warning] Fair
> ![Bête à cornes — fair example](/ressources/img/bete-a-cornes/bras-moyen.svg)
>
> **Why this is only fair.** The audience is targeted and the need-not-solution stance is respected. But "understand robot arms better" is too vague to be assessable: understand what exactly? "Understanding of robotics" as a work object is imprecise: the system acts on the student's **learning**, not on robotics as a discipline.

> [!example] Good
> ![Bête à cornes — good example](/ressources/img/bete-a-cornes/bras-bon.svg)
>
> **Why this is good.** The target is made precise (discovery, not advanced practice), the work object is learning circumscribed to a specific object, and the end states the intended skills without deciding anything about implementation. A software simulator, a physical arm, an Arduino or an STM32 are all still open solutions at this stage: that is exactly what you want.

## Pitfalls

**Confusing need and solution.** If an answer contains a component name, a technology or a protocol, the bête à cornes is not finished. Reword it one level of abstraction higher.

**"Everyone" as the user.** When you do not know who the system serves, you have not defined the project yet. Force a choice, even an imperfect one: it will be refined after the stakeholder analysis.

**An end written as a technical function.** "Measure the temperature", "display data", "drive a motor" are functions, not ends. The end answers *why* you measure, display or drive, not *what* the system does.

**A missing or fuzzy work object.** If the "what it acts on" box is empty or very vague, the system probably has no clear reason to exist. That is a signal to go back to the analysis of the need before moving on.

**A pretty but empty wording.** "Improve the user experience", "optimise performance": any project could display that end. If it applies to any project, it says nothing about this one.

## Special case — a school project with no real client

When a project has no external client (sumo robot, line-following robot, a demonstrator taken apart after the final presentation), the bête à cornes seems to be running on empty. Two honest positions exist (see [[specification-technique-en#special-case-a-school-project-with-no-real-client|the special case in the specification phase]] for the detail). What matters: pick one position explicitly and hold it.

## See also

- [[specification-technique-en|Technical specification]] — the phase the bête à cornes belongs to
- [[cahier-des-charges-fonctionnel-en|Cahier des charges fonctionnel]] — the final document that quantifies the needs expressed here
- [[afnor-nfx50-151-en|Standard NF X50-151]] — the methodological framework
