---
title: Dossier technique
type: trame
phase: 4
phases:
  - dossier-technique
tags:
  - proj
  - trame
  - phase-4
prerequis:
  - preuve-de-concept
aa: []
draft: false
---

Le **dossier technique** est la quatrième phase du projet [[mecatronique|mécatronique]] : on transforme l'architecture validée en [[concept|phase 2]] et confirmée par les [[preuve-de-concept|PoC]] en **plans détaillés exécutables** — schémas électroniques finaux, routage PCB, plans mécaniques cotés, architecture logicielle détaillée, nomenclature complète. C'est aussi la phase où l'on **engage le projet matériellement** : la BOM finale devient un ensemble de commandes émises. Après cette phase, l'argent est dépensé, les pièces arrivent.

## Posture attendue

La tentation, à ce stade, est de croire que le travail est fait ("on a validé l'architecture en phase 2, on copie-colle"). Résistez. Le dossier technique exige un **niveau de précision que le concept n'avait pas** : un schéma bloc devient un schéma électrique câblé, un pré-dim devient une cote, une intention logicielle devient une spécification d'interface. C'est aussi la phase de la **multi-validation** : trois interlocuteurs distincts valident chacun leur périmètre. C'est dans cette logique de pluralité que se joue l'apprentissage du travail en équipe d'ingénieurs.

## Objectif de la phase

Produire un **dossier technique agrégé** qui :

- traduit l'architecture validée en plans **exécutables** par discipline (élec, méca, info)
- consolide la **BOM finale** (composants, matières, sous-traitance) chiffrée au centime près
- documente une **évaluation environnementale quantifiée** ([[ecoconception|écoconception]] : ACV simplifiée sur BOM réelle vs estimations phase 2)
- met à jour le **planning d'approvisionnement et de fabrication** et le budget consolidé ([[gestion-de-projet|gestion de projet]])
- est validé par les **trois interlocuteurs disciplinaires** (prof élec qui porte élec + info, prof méca qui porte méca + fabrication, responsable projet qui porte achats + budget)

Et concrétise l'engagement matériel du projet : **commandes émises**.

## Démarche

### 1. Intégrer les retours des PoC

*[À rédiger — point d'entrée explicite. Reprendre l'architecture validée en phase 2, **intégrer les ajustements issus des PoC** (composants confirmés/recalés, valeurs mesurées, contraintes nouvelles). Étape souvent escamotée : l'étudiant a tendance à oublier les enseignements de la phase 3 et à reprendre le pré-dim phase 2 tel quel. Sans ce nœud, le dossier technique est déconnecté du dérisquage qui vient de se faire.]*

> [!livrable] Livrable de l'étape 1
> - Synthèse des ajustements PoC à intégrer (composants confirmés, valeurs mesurées, contraintes nouvelles)

### 2. Détailler les plans par discipline

*[À rédiger — trois branches en parallèle : **électronique** (schémas finaux, [[pcb|routage PCB]], nomenclature composants détaillée) ; **mécanique** (plans cotés, matériaux, procédés de fabrication) ; **informatique** (architecture logicielle détaillée, spécifications d'interfaces, structures de données). Retour à la grille élec/méca/info (vs la grille « par point dur » de la phase 3) : ici, travail disciplinaire de fond. Revue inter-équipe avant validation externe : avant d'aller chercher les profs, l'équipe vérifie elle-même que les trois sorties disciplinaires sont **compatibles** (interfaces physiques, électriques, logicielles). Si conflit interface fondamentale révélé ici → rétroaction vers la phase 2 (matrices à revoir).]*

> [!livrable] Livrable de l'étape 2
> - Plans détaillés par discipline (schémas + routage PCB + plans cotés + architecture logicielle + spécifications d'interfaces)

### 3. Consolider la BOM et chiffrer l'environnement

*[À rédiger — agrégation : **BOM finale** (composants élec, matières méca, sous-traitance fabrication) chiffrée au centime près ; **ACV simplifiée** sur la BOM réelle (premier moment où l'éco devient quantifiable, vs estimations qualitatives phase 2) ; **planning d'approvisionnement et fabrication** + **budget consolidé** (gestion de projet). Si la BOM révèle un écart budgétaire majeur → rétroaction vers la phase 2 (les matrices ont retenu des solutions hors budget cible).]*

> [!livrable] Livrable de l'étape 3
> - BOM finale chiffrée
> - Évaluation environnementale quantifiée (ACV simplifiée sur BOM réelle)
> - Planning appro/fabrication + budget consolidé

### 4. Rédiger et faire valider le dossier agrégé

*[À rédiger — rédaction du dossier agrégé (parties élec + méca + info + achats + éco). **Multi-validation à 3 interlocuteurs en parallèle**, enseignement central de la phase : **prof élec** valide élec + info (le prof élec porte les deux disciplines à l'école), **prof méca** valide méca + fabrication, **responsable projet** valide achats + budget. L'écoconception n'a pas de validateur dédié : elle est vérifiée transversalement par les trois sur leur périmètre. Après les 3 validations disciplinaires, **revue globale encadrant + présentation finale** = validation d'ensemble (cohérence inter-parties, qualité d'argumentation). C'est cette dernière validation qui autorise les commandes.]*

> [!livrable] Livrable de l'étape 4
> - Dossier technique agrégé, validé en parties (par les 3 interlocuteurs) et en ensemble (par l'encadrant)

### 5. Émettre les commandes

*[À rédiger — étape de sortie, **point de non-retour**. La BOM finale se transforme en bons de commande émis. Action souvent matériellement opérée par le responsable projet à l'école (qui clique sur « valider la commande »), mais l'équipe la **prépare et l'argumente**. Sans cette étape, le dossier reste théorique ; avec, le projet bascule en réalité matérielle pour la [[integration-et-tests|phase 5]]. À partir d'ici, l'argent est dépensé.]*

> [!livrable] Livrable de l'étape 5
> - Bons de commande émis (matérialisation de l'engagement financier du projet)

---

## Pièges fréquents

*[À compléter au fil de la rédaction des étapes]*

- Reprendre le pré-dim phase 2 sans intégrer les ajustements issus des PoC
- Découvrir un conflit d'interface inter-disciplines au moment de la validation par les profs (la revue interne avant validation externe doit l'éviter)
- Différer l'évaluation environnementale à la fin du projet — c'est en phase 4 qu'elle devient quantifiable et utile à la décision
- Sous-estimer la charge de la multi-validation : trois interlocuteurs distincts à coordonner, chacun avec ses disponibilités
- Émettre les commandes avant la validation globale — point de non-retour irréversible si la phase doit être recyclée

## Pendant cette phase, côté équipe

*[À rédiger — interfaces métiers (méca : tutos collègues sur cotation fonctionnelle, choix matériaux, procédés ; info : tutos sur architectures logicielles, spécifications d'interfaces) + fils transverses spécifiques : [[gestion-de-projet|GP]] (planning appro/fabrication, budget consolidé, multi-validation à coordonner), [[ecoconception|écoconception]] (ACV simplifiée sur BOM réelle, étape dédiée), [[securite-et-qualite|sécu]] (contraintes de sécurité à intégrer aux plans : protections, sécurités d'arrêt, accessibilité).]*

## Voir aussi

- [[index|Hub du parcours projet]]
- Phase précédente : [[preuve-de-concept|Preuve de concept]]
- Phase suivante : [[integration-et-tests|Intégration et tests]] *(à créer)*
- [[pcb|PCB]] *(à créer)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — à créer)*
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[securite-et-qualite|Sécurité et qualité]] *(fil transverse — à créer)*
