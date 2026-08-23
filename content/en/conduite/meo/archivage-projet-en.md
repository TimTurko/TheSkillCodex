---
title: Archivage projet
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
draft: true
source_fr: conduite/meo/archivage-projet.md
source_sha256: 08e186e509148548de86991a3ba9959b03afc0f519c9732699b883aa0c4c0ef8
---

L'**archivage projet** consiste à organiser et conserver les livrables, le code et la documentation d'un projet pour qu'ils restent **retrouvables et réutilisables** une fois le projet terminé, que ce soit par une autre équipe, par l'encadrant, ou par soi-même des mois plus tard.

## Dans le projet

Le dépôt **Git** en est la colonne vertébrale : il porte l'historique, les **tags** par jalon (voir [[securite-et-qualite-en|sécurité et qualité]]) et l'ensemble du code. Autour, quelques disciplines simples font la différence : une arborescence claire, un fichier *README* qui explique comment reprendre le projet, des conventions de nommage stables, et le [[dossier-technique-en|dossier technique]] rangé avec ses annexes. Un projet bien archivé se reprend en une heure. Un projet mal archivé est, en pratique, perdu, même si tous les fichiers existent quelque part.

## Voir aussi

- [[gestion-de-projet-en|Gestion de projet]] — qui pilote la traçabilité
- [[securite-et-qualite-en|Sécurité et qualité]] — versionnage Git et tags par jalon
- [[dossier-technique-en|Dossier technique]] — le livrable central à archiver
