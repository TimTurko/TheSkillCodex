---
title: Code review
lang: en
type: notion
phases:
  - specification
  - concept
  - preuve-de-concept
  - dossier-technique
  - integration-et-tests
tags:
  - meo
  - eee
  - notion
prerequis: []
aa:
  - RA-MEO-C08-6/MEO/3
draft: false
source_fr: conduite/meo/revue-de-code.md
source_sha256: 9e9395845c617ae256baa114a073a8ab9879a79c2d1f9513bd65a7d6d9e38209
---

A **code review** means having a piece of code read by someone else before a milestone, by a teammate or by yourself with a fresh eye, so as to catch the defects an outside reader spots at once and the author, too close to the work, no longer sees.

## In the project

A review is not looking for perfection. It targets the **obvious defects** and the **critical areas** of the [[firmware-en|firmware]]: [[interruption-en|interrupt]] handling, the [[machine-a-etats-en|state machine]], safety functions. The practice that holds up on a project is a cross-review **at every milestone**, between teammates at the very least and with the supervisor ideally, short but regular, recorded as a quality step (see [[securite-et-qualite-en|safety and quality]]). It is also a powerful way to learn, since reading other people's code is how you get better. That still takes the ability to find your way into a program you did not write, which is itself something to learn ([[cpp-lire-un-programme-en|in C++]], [[micropython-lire-un-programme-en|in MicroPython]]).

## See also

- [[securite-et-qualite-en|Safety and quality]] — code review as a quality practice
- [[firmware-en|Firmware]] — what reviews mostly look at
- [[machine-a-etats-en|State machine]] — an area of code to read first
- [[cpp-lire-un-programme-en|Reading a C++ program]] — the reading method, a prerequisite for reviewing
- [[micropython-lire-un-programme-en|Reading a MicroPython program]] — the same method on the MicroPython side
