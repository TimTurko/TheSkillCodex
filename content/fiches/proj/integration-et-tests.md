---
title: Intégration et tests
type: trame
phase: 5
phases:
  - integration-et-tests
tags:
  - proj
  - trame
  - phase-5
prerequis:
  - dossier-technique
aa: []
draft: false
---

L'**intégration et les tests** est la cinquième et dernière phase du projet [[mecatronique|mécatronique]] : on transforme le [[dossier-technique|dossier technique]] validé et les commandes émises en **prototype fonctionnel qualifié**, puis on **clôture le projet**. C'est la branche ascendante du cycle en V — on remonte fonction par fonction jusqu'à la qualification vs [[cahier-des-charges-fonctionnel|CdCF]], moment où le V se referme. C'est aussi la première phase **sans rétroaction sortante** : le calendrier de fin de semestre impose la livraison.

## Posture attendue

La tentation, à ce stade, est de croire que l'essentiel est derrière soi ("on a juste à monter et tester"). Résistez. L'intégration est **précisément l'endroit où les écarts entre la pensée et la réalité se révèlent**, et où l'on doit gérer ces écarts **sans pouvoir revenir en arrière**. C'est aussi la phase qui enseigne une compétence ingénieur rarement explicitée : **livrer un système avec ses écarts documentés vaut mieux que ne pas livrer en cherchant la perfection**. L'évaluation porte sur la **lucidité de l'analyse**, pas sur l'atteinte parfaite du CdCF.

## Objectif de la phase

Produire un **prototype qualifié** accompagné d'un **rapport final** et d'une **soutenance**, qui :

- intègre les pièces fabriquées et les composants reçus en un système physique fonctionnel
- valide chaque fonction puis chaque composition de fonctions selon une **pyramide de tests à 5 niveaux** (cascade linéaire)
- confronte le prototype aux **critères quantifiés du CdCF** ([[specification-technique|phase 1]]) — moment où le V se referme
- documente honnêtement les **écarts** lorsque certains critères ne sont pas atteints
- clôture le projet par trois bilans (technique, projet, écoconception) et un REX d'équipe

## Démarche

### 1. Approvisionner et fabriquer

*[À rédiger — deux branches en parallèle : **réception des commandes externes** (composants élec, matières, sous-traitance) au rythme des livraisons, et **fabrication interne** (usinage, impression 3D, PCB école) au rythme des moyens disponibles. Pas d'équivalent informatique à fabriquer matériellement — l'environnement de dev est typiquement déjà prêt depuis le PoC. Les deux branches convergent vers la validation pièces. Gestion d'inventaire et de stockage : à anticiper, surtout si les délais de livraison sont étalés.]*

> [!livrable] Livrable de l'étape 1
> - Ensemble des pièces et composants disponibles physiquement (réceptionnés + fabriqués)

### 2. Valider les pièces fabriquées

*[À rédiger — **niveau 0 de la pyramide de tests** : validation individuelle de chaque sortie de fabrication, **avant tout test fonctionnel**. Exemples : continuité électrique d'un PCB, cotation d'une pièce imprimée, ajustement d'un usinage. Étape souvent escamotée ("on verra à l'assemblage") qui coûte cher : une non-conformité non détectée à ce stade contamine tous les tests fonctionnels qui suivent. Si non conforme → retour fabrication.]*

> [!livrable] Livrable de l'étape 2
> - Pièces validées individuellement (niveau 0), non-conformités traitées et tracées

### 3. Conduire la pyramide de tests

*[À rédiger — **cœur de la phase**. Pyramide à 4 niveaux fonctionnels (après le niveau 0 de l'étape 2), en **cascade linéaire** avec rétroactions ciblées vers le niveau précédent :*

*— **Niveau 1 — Tests unitaires par fonction** : chaque fonction du CdCF testée individuellement. Insister : une fonction mécatronique mobilise **déjà plusieurs disciplines** (« faire tourner la roue » = élec + info). Pas de test « purement élec ». Découpage **par fonction**, pas par discipline. Deux causes d'échec à distinguer : banc inadapté (revoir le protocole) ou pièce défaillante (retour étape 2).*

*— **Niveau 2 — Tests d'intégration par fonction composée** : assemblage de fonctions unitaires. « Faire avancer le robot » = « faire tourner les roues » + « synchroniser les moteurs ». Si échec → retour niveau 1.*

*— **Niveau 3 — Test système complet** : le tout fonctionne ensemble. Si échec → retour niveau 2.*

*— **Niveau 4 — Qualification vs CdCF** : confrontation aux **critères quantifiés** du CdCF (phase 1). **C'est ici que le V se referme** : la branche descendante (spécifications) est validée par la branche ascendante (tests). Si critères atteints → prototype qualifié au sens fort. Si non atteints → **l'écart est documenté, on ne retourne pas en arrière** : le calendrier impose la livraison.]*

> [!livrable] Livrable de l'étape 3
> - Prototype qualifié (au sens fort si critères CdCF atteints, avec écarts documentés sinon)
> - Dossier de tests (niveaux 1 à 4, protocoles + résultats)

### 4. Mener les bilans de clôture

*[À rédiger — trois bilans **en parallèle**, tous évalués :*

*— **Bilan technique** : écarts vs CdCF documentés, ce qui marche, ce qui ne marche pas, pourquoi.*

*— **Bilan projet** ([[gestion-de-projet|gestion de projet]]) : planning tenu ? budget tenu ? risques anticipés ou non ?*

*— **Bilan écoconception** ([[ecoconception|écoconception]]) : ACV **réelle** (sur prototype effectif) vs ACV estimée en phase 4 (sur BOM théorique). Leçons sur les écarts.*

*Les trois convergent vers le **REX d'équipe** : ce que l'équipe referait différemment. Réflexif, distinct des bilans évalués — c'est une compétence MEO en propre.]*

> [!livrable] Livrable de l'étape 4
> - 3 bilans (technique, projet, écoconception)
> - REX d'équipe documenté

### 5. Livrer le projet

*[À rédiger — agrégation finale : rédaction du **rapport final** (bilans + REX + démonstrations + analyse des écarts), **revue encadrant** avant passage en jury, **soutenance** devant le jury. Trois livrables évalués au total dans cette phase : le prototype qualifié (étape 3), le rapport final, la soutenance. La soutenance est l'occasion de démontrer la **lucidité d'analyse** sur l'ensemble du parcours projet, pas seulement le résultat final.]*

> [!livrable] Livrable de l'étape 5
> - Rapport final (livrable documentaire évalué)
> - Soutenance finale (livrable transversal évalué)

---

## Pièges fréquents

*[À compléter au fil de la rédaction des étapes]*

- Sauter le niveau 0 (validation pièces) au prétexte que « ça a l'air bon » — contamine tous les tests fonctionnels suivants
- Diagnostiquer un test KO comme une défaillance pièce alors que c'est le banc de test qui est mal posé (ou l'inverse)
- Découper les tests par discipline (« on teste l'élec puis la méca ») au lieu de découper par fonction — incohérent avec la nature mécatronique du système
- Chercher à boucher tous les écarts au lieu de les documenter — l'évaluation porte sur la lucidité, pas sur l'atteinte parfaite
- Bâcler la clôture (« on a livré, c'est fini ») — les bilans et le REX sont des livrables évalués, pas un appendice
- Confondre REX d'équipe (réflexif, compétence MEO) et bilan projet (factuel, gestion de projet)

## Pendant cette phase, côté équipe

*[À rédiger — interfaces métiers (méca : tutos collègues sur procédés de fabrication, ajustements ; info : tutos sur déploiement, instrumentation de mesure pour les tests) + fils transverses spécifiques : [[gestion-de-projet|GP]] (bilan projet, gestion des écarts planning/budget, REX), [[ecoconception|écoconception]] (ACV réelle sur prototype effectif), [[securite-et-qualite|sécu]] (manipulation du système intégré sous tension, en mouvement — conditions de sécurité des tests à formaliser, particulièrement pour le test système).]*

## Voir aussi

- [[index|Hub du parcours projet]]
- Phase précédente : [[dossier-technique|Dossier technique]]
- [[cahier-des-charges-fonctionnel|Cahier des charges fonctionnel]] *(à créer — référencé à la qualification niveau 4)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — à créer)*
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[securite-et-qualite|Sécurité et qualité]] *(fil transverse — à créer)*
