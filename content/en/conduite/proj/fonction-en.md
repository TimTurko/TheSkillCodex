---
title: Function
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
source_fr: conduite/proj/fonction.md
source_sha256: be41744a4993fd9e643187b672750caba359e1283323e1cd1576313362d89ce5
---

In [[afnor-nfx50-151-en|NF X50-151]] functional analysis, a **function** is a relationship between the system and its environment, written as an **infinitive verb + object** without presuming any technical solution. Three categories: **main function (FP)** — a relationship running through the system between two external environments, and the reason the system exists; **secondary function (FS)** — same structure, but a complementary service that is not essential to the mission; **constraint function (FC)** — a relationship between the system and a single external environment, expressing a constraint the system must adapt to ("withstand", "adapt to").

## What is it for?

Separating what the system must *do* (FP, FS) from what it must *endure* or *comply with* (FC) is the structuring move of the [[specification-technique-en|technical specification]]. The typology then allows you to draw, with the [[pieuvre-en|pieuvre]], an exhaustive diagram of the system's interactions with its surrounding environments. Each identified function is then turned into a quantified requirement through the [[caracteriser-une-exigence-en|criterion]] / [[caracteriser-une-exigence-en|level]] / [[caracteriser-une-exigence-en|flexibility]] triplet in the [[cahier-des-charges-fonctionnel-en|CdCF]].

## Statement format

A function is written as **infinitive verb + object**, never as a noun phrase and never by naming a technical solution.

| ✓ Correct statement | ✗ Incorrect statement | Why |
|---|---|---|
| Allow the operator to move an object | Movement of an object by servo | "by servo" is a solution |
| Withstand the vibrations of transport | Robustness | Not a verb, not measurable |
| Adapt to the 230 V mains supply | Electrical supply | Not a verb |

Each function is **numbered** within its group: FP1, FP2…, FS1, FS2…, FC1, FC2… The numbering is a stable reference for the whole life of the project, from the CdCF to the final assessment grid.

## Pitfalls

**Naming a solution in the statement.** If you can name a brand, a component, a technology or a protocol, the function is badly written. *"Use a Raspberry Pi to drive the motors"* is an implementation choice, not a function.

**Confusing FP and FS.** The FP is the reason the system exists. Without it, the system has no purpose. Test: if you remove the function, does the project still stand up? If it does, it is probably an FS.

**Writing an FC with two environments.** An FC links the system to *one* environment only. If the statement brings in two environments, it is probably a badly classified FP or FS.

## See also

- [[pieuvre-en|Pieuvre]] — the graphical tool that formalises the functions
- [[specification-technique-en|Technical specification]] — the phase where functions are stated
- [[caracteriser-une-exigence-en|Characterising a requirement]] — quantifying each function
- [[afnor-nfx50-151-en|Standard NF X50-151]] — the methodological framework
