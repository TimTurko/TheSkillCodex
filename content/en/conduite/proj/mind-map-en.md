---
title: Mind map
lang: en
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
source_fr: conduite/proj/mind-map.md
source_sha256: 9fce1933175d9ac800840e72c8d5a26703f7a010e8a145cf35a96d6b4f8b8a78
---

A **mind map** is a **radial** diagram that organises ideas around a central concept: you place the subject in the middle of the sheet and unfold branches all around it, ranked by successive associations. On a [[mecatronique-en|mechatronics]] project it serves as a **structured brainstorming** tool, its most canonical use being to list the surrounding environments of a system before drawing its [[pieuvre-en|pieuvre]].

![Mind map — generic diagram](/ressources/img/mind-map/generique.svg)

## What is it for?

A mind map exists to **bring out and organise divergent thinking** without constraining it too early. Its radial shape follows reasoning by association: one idea calls up another, which you hook on as a sub-branch without having to decide on a linear outline in advance. It is a first-draft tool: you capture widely, you structure afterwards.

On a project it comes in mostly upstream, at three moments:

- **Listing the surrounding environments** before building the [[pieuvre-en|pieuvre]]: the system at the centre, and all around it whatever surrounds it (users, work object, energy sources, physical environment, regulations). This is the canonical use in [[specification-technique-en|technical specification]].
- **Brainstorming candidate solutions**, or exploring a poorly framed problem as a team, before formalising it in a more rigid tool.
- **Structuring collective thinking** in a kick-off meeting: a shared mind map makes everyone's ideas and their links visible.

A mind map is not a formal deliverable: it is the **scaffolding** that comes before a structured tool. A brainstorm of environments becomes a [[pieuvre-en|pieuvre]]. A brainstorm of solutions becomes a [[matrice-de-decision-en|decision matrix]]. Its value lies in what it feeds, not in itself.

## How do you build one?

Three moves, in order.

1. **Put the subject at the centre.** The system, the problem or the question, in a central bubble. Everything starts there.
2. **Unfold the main branches.** The broad categories radiate around the centre. For a survey of environments, the branches are the **five families** (users, work object, energy sources, physical environment, regulations — detailed in the [[pieuvre-en|pieuvre]] page).
3. **Branch out by association.** Each branch subdivides into derived ideas, freely, for as long as they come. You do not filter during the burst: a discreet item noted here is an oversight avoided later.

A few rules make the difference between a useful mind map and a scribble: **one keyword per branch** (no sentences: brevity forces clarity), **no filtering during the burst** (you sort afterwards, not during), and **visual grouping** (colours or zones) so it can be read at a glance. As for tools, paper is enough and remains the fastest for a first draft. To share or rework it together, tools such as Excalidraw, XMind or FreeMind will do.

## Example — 3-axis teaching arm

Take the 3-axis teaching robot arm again. Before drawing its [[pieuvre-en|pieuvre]] during [[specification-technique-en|technical specification]], the team lists its surrounding environments with a mind map, going through the five families one by one.

![Mind map of the surrounding environments — 3-axis arm](/ressources/img/mind-map/bras-3-axes.svg)

Going through the families systematically brings up **eight candidates**: the **operator** (users), the **object to be moved** (work object), the **230 V mains** (energy sources), the **computer workstation** and the **fablab** (physical environment and means of manufacture), **CE conformity**, **eco-design** and **operator safety** (regulations). It is by forcing itself through the *regulations* family, which looked empty at first glance, that the team noted those three constraints, discreet candidates that would have been forgotten in a spontaneous fill-in.

At this stage no function is drawn: the mind map only **lists candidates**. The sorting happens on the way into the [[pieuvre-en|pieuvre]]: five candidates become the environments of the diagram, where each system ↔ environment link is formalised as an [[fonction-en|FP]] / [[fonction-en|FS]] / [[fonction-en|FC]] [[fonction-en|function]] and then numbered. **Operator safety** becomes the safety FC on the operator environment. **Eco-design** moves into the criteria of the FCs. **CE conformity** (noted, traced) is deliberately left out of scope (no certification is aimed at on a school project). This is post-burst sorting in action: the map captures widely, the downstream tool structures.

## Pitfalls

**Writing sentences instead of keywords.** A branch loaded with text kills radial readability and slows the burst down. One or two words per branch: the rewording will come in the downstream tool, not in the mind map.

**Filtering during the burst.** Judging an idea the moment it arrives kills divergence, and it is often the idea you would have discarded that reveals a forgotten environment or lead. You capture everything, you sort afterwards.

**Mistaking the mind map for the deliverable.** The mind map is the scaffolding, not the wall. Handing it in as it stands instead of a [[pieuvre-en|pieuvre]] or a [[matrice-de-decision-en|decision matrix]] amounts to presenting a draft as a result. It prepares the formal tool, it does not replace it.

**A mind map that leads nowhere.** A mind map you draw and then never use downstream is wasted time. Before starting one, know which structured tool it feeds into (pieuvre, matrix, report outline).

**Too many levels.** Beyond three levels of branching, the map becomes unreadable. If a branch goes too deep, it usually deserves a dedicated mind map of its own.

## See also

- [[pieuvre-en|Pieuvre]] — the downstream tool that turns the listed environments into drawn functions
- [[specification-technique-en|Technical specification]] — the phase where the mind map of environments is used (step 3)
- [[decomposition-fonctionnelle-en|Functional breakdown]] — another tree representation, but top-down and formal, in the concept phase
- [[matrice-de-decision-en|Decision matrix]] — a downstream tool that a brainstorm of solutions can feed
