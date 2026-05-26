---
title: Fonction
type: notion
aliases:
  - FP
  - FS
  - FC
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
---

En analyse fonctionnelle [[afnor-nfx50-151|NF X50-151]], une **fonction** est une relation entre le système et son environnement, formulée en **verbe à l'infinitif + complément** sans présumer de la solution technique. Trois catégories : **fonction principale (FP)** — relation à travers le système entre deux milieux, qui justifie son existence ; **fonction secondaire (FS)** — même structure mais service complémentaire, non essentiel à la mission ; **fonction contrainte (FC)** — relation entre le système et un seul milieu, exprimant une contrainte d'adaptation (« résister à », « s'adapter à »).

## À quoi ça sert ?

Distinguer ce que le système doit *faire* (FP, FS) de ce qu'il doit *subir* ou *respecter* (FC) est le geste structurant de la [[specification-technique|spécification technique]]. La typologie permet ensuite, à l'aide de la [[pieuvre|pieuvre]], de tracer un diagramme exhaustif des interactions du système avec ses milieux environnants. Chaque fonction identifiée se traduit en exigence chiffrée via le triplet [[critere|critère]] / [[niveau|niveau]] / [[flexibilite|flexibilité]] dans le [[cahier-des-charges-fonctionnel|CdCF]].

## Format d'énoncé

Une fonction s'écrit **verbe à l'infinitif + complément**, jamais sous forme nominale et jamais en citant une solution technique.

| ✓ Énoncé correct | ✗ Énoncé incorrect | Pourquoi |
|---|---|---|
| Permettre à l'opérateur de déplacer un objet | Mouvement d'un objet par servomoteur | « par servomoteur » est une solution |
| Résister aux vibrations du transport | Robustesse | Pas un verbe, pas mesurable |
| S'adapter à l'alimentation 230 V secteur | Alimentation électrique | Pas un verbe |

Chaque fonction est **numérotée** dans son groupe : FP1, FP2…, FS1, FS2…, FC1, FC2… La numérotation sert de référence stable pendant toute la durée du projet, du CdCF à la grille d'évaluation finale.

## Pièges

**Citer une solution dans l'énoncé.** Si on peut citer une marque, un composant, une technologie ou un protocole, la fonction est mal formulée. *« Utiliser un Raspberry Pi pour piloter les moteurs »* est un choix d'implémentation, pas une fonction.

**Confondre FP et FS.** La FP justifie l'existence du système — sans elle, le système n'a pas lieu d'être. Test : si on retire la fonction, le projet reste-t-il défendable ? Si oui, c'est probablement une FS.

**Formuler une FC avec deux milieux.** Une FC ne relie le système qu'à *un seul* milieu. Si l'énoncé fait apparaître deux milieux, c'est probablement une FP ou FS mal classée.

## Voir aussi

- [[pieuvre|Pieuvre]] — outil graphique qui formalise les fonctions
- [[specification-technique|Spécification technique]] — phase où les fonctions sont énoncées
- [[caracteriser-une-exigence|Caractériser une exigence]] — chiffrer chaque fonction
- [[afnor-nfx50-151|Norme NF X50-151]] — cadre méthodologique
