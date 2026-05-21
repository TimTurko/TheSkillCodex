---
title: Concept
type: trame
phase: 2
phases:
  - concept
tags:
  - proj
  - trame
  - phase-2
prerequis:
  - specification-technique
aa: []
draft: false
---

Le **concept** est la deuxième phase du projet [[mecatronique|mécatronique]] : on transforme le [[cahier-des-charges-fonctionnel|cahier des charges fonctionnel]] (le *quoi*) en une **architecture technique préliminaire** (le *comment*). On choisit les grandes options par discipline, on vérifie qu'elles tiennent ensemble, on chiffre suffisamment pour identifier ce qu'il faudra dérisquer au [[preuve-de-concept|PoC]]. Les composants définitifs viendront plus tard, en [[dossier-technique|dossier technique]].

## Posture attendue

La tentation, à ce stade, est d'aller trop vite vers les composants ("on prendra un ESP32 et un driver A4988") ou de laisser chaque discipline travailler dans son coin. Résistez aux deux. Cette phase ne demande pas de choisir les références exactes, elle demande de **poser une architecture défendable** — c'est-à-dire compatible inter-disciplines, justifiée par des matrices, et pré-dimensionnée. C'est aussi la première phase où l'**écoconception devient un critère de choix**, pas un commentaire en marge.

## Objectif de la phase

Produire un **dossier concept** qui :

- décompose le système en sous-systèmes et fonctions techniques exploitables par discipline
- pour chaque sous-système, justifie le choix d'une **solution technique** par une matrice de décision intégrant l'[[ecoconception|écoconception]]
- garantit la **compatibilité inter-disciplines** des solutions retenues
- pré-dimensionne chaque discipline (ordres de grandeur, faisabilité)
- identifie explicitement les **points durs** à dérisquer en [[preuve-de-concept|preuve de concept]]

Ce document servira de **référence d'architecture** pour la suite du projet : tout choix de composant en [[dossier-technique|phase 4]] devra être traçable à une solution validée ici.

## Démarche

### 1. Décomposer le système

*[À rédiger — décomposition fonctionnelle du système (passage du global aux sous-systèmes), puis FAST par bloc pour faire émerger les fonctions techniques. Outils mobilisables : SADT/IDEF0, [[schema-bloc-fonctionnel|schéma bloc fonctionnel]], autres. Insister : la décomposition peut révéler un trou dans le CdCF — c'est une rétroaction normale vers la phase 1, à ne pas masquer.]*

> [!livrable] Livrable de l'étape 1
> - Décomposition fonctionnelle du système (sous-systèmes + fonctions techniques par bloc)

### 2. Explorer les solutions par discipline

*[À rédiger — pour chaque sous-système, recensement des solutions candidates puis [[matrice-de-decision|matrice de décision]] argumentée. Trois branches typiques (élec, méca, info), à mener en parallèle. Critère [[ecoconception|écoconception]] intégré dans la matrice (pas traité à part). Insister sur le risque pédagogique : les branches montrent les fronts de travail, **pas une assignation à des personnes** — chaque équipier doit comprendre l'architecture entière.]*

> [!livrable] Livrable de l'étape 2
> - Matrices de décision argumentées (une par sous-système, critère écoconception intégré)

### 3. Arbitrer l'architecture globale

*[À rédiger — étape pivot. Synchronisation inter-disciplines : confronter les solutions retenues localement, vérifier leur **compatibilité** (couple méca vs courant élec, encombrement vs intégration, latence info vs réactivité système). En cas de conflit, retour aux matrices avec contraintes mises à jour. Une fois validée, l'architecture est figée comme **assemblage cohérent**, livrable distinct du dossier final.]*

> [!livrable] Livrable de l'étape 3
> - Architecture globale du système (assemblage cohérent des solutions retenues par discipline)

### 4. Pré-dimensionner et identifier les points durs

*[À rédiger — pré-dimensionnement par discipline : ordres de grandeur, calculs de vérification, marges. Pas le calcul exact (ça vient en phase 4), mais suffisant pour valider la viabilité. À la sortie : extraction explicite des **points durs** = ce que le pré-dim n'a pas pu trancher et qu'il faudra dérisquer en PoC. C'est la passerelle vers la [[preuve-de-concept|phase 3]].]*

> [!livrable] Livrables de l'étape 4
> - Pré-dimensionnements par discipline (calculs de vérification, marges, ordres de grandeur)
> - Liste des points durs à dérisquer en [[preuve-de-concept|PoC]]

### 5. Rédiger le dossier concept

*[À rédiger — agrégation : décomposition fonctionnelle + matrices argumentées + architecture globale + pré-dimensionnements + liste des points durs. Revue d'équipe interne, puis présentation à l'encadrant ou au client. Validation finale : si remise en cause profonde, rétroaction possible vers la phase 1.]*

> [!livrable] Livrable de l'étape 5
> - Dossier concept agrégé et validé (en revue d'équipe puis présentation à l'encadrant/client)

---

## Pièges fréquents

*[À compléter au fil de la rédaction des étapes]*

- Choisir les composants définitifs trop tôt (ça vient en phase 4)
- Laisser chaque discipline finir sa matrice avant de confronter les choix (le conflit inter-disciplines est plus coûteux à découvrir tard)
- Traiter l'écoconception comme une case à cocher en fin de matrice, au lieu d'un critère pondéré
- Confondre « front de travail disciplinaire » et « répartition des rôles » dans l'équipe
- Sauter le pré-dimensionnement (« on verra au PoC ») — c'est exactement ce qui produit des PoC ratés

## Pendant cette phase, côté équipe

*[À rédiger — interfaces métiers (méca : tutos collègues sur dimensionnement matériaux, fabrication ; info : tutos sur architecture logicielle) + fils transverses spécifiques à la phase : [[gestion-de-projet|GP]] (mise à jour risques selon les choix d'architecture), [[ecoconception|écoconception]] (intégrée dans les matrices), [[securite-et-qualite|sécu]] (premières contraintes à intégrer).]*

## Voir aussi

- [[index|Hub du parcours projet]]
- Phase précédente : [[specification-technique|Spécification technique]]
- Phase suivante : [[preuve-de-concept|Preuve de concept]] *(à créer)*
- [[matrice-de-decision|Matrice de décision]] *(à créer)*
- [[schema-bloc-fonctionnel|Schéma bloc fonctionnel]]
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — à créer)*
