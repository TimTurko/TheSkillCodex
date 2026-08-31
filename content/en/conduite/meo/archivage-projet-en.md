---
title: Project archiving
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
  - notion
prerequis: []
aa:
  - RA-MEO-C10-3/MEO/6
draft: false
source_fr: conduite/meo/archivage-projet.md
source_sha256: 08e186e509148548de86991a3ba9959b03afc0f519c9732699b883aa0c4c0ef8
---

**Project archiving** means organising and keeping the deliverables, the code and the documentation of a project so that they stay **findable and reusable** once the project is over, whether by another team, by the supervisor, or by yourself months later.

## In the project

The **Git** repository is the backbone of it: it carries the history, the **tags** placed at each milestone (see [[securite-et-qualite-en|safety and quality]]) and the whole of the code. Around it, a few simple disciplines make the difference: a clear folder structure, a *README* file explaining how to pick the project back up, stable naming conventions, and the [[dossier-technique-en|technical design file]] filed together with its appendices. A well-archived project can be picked up again in an hour. A badly archived one is lost in practice, even if every file still exists somewhere.

## See also

- [[gestion-de-projet-en|Project planning and tracking]] — which drives traceability
- [[securite-et-qualite-en|Safety and quality]] — Git versioning and tags at each milestone
- [[dossier-technique-en|Technical design file]] — the central deliverable to archive
