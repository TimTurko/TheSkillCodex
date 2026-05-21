---
title: Preuve de concept
type: trame
phase: 3
phases:
  - preuve-de-concept
tags:
  - proj
  - trame
  - phase-3
prerequis:
  - concept
aa: []
draft: false
---

La **preuve de concept** (PoC) est la troisième phase du projet [[mecatronique|mécatronique]] et le **point pivot** du cycle en V : c'est le moment où l'on cesse de raisonner sur le papier et où l'on confronte les choix d'architecture à la **réalité physique**. On ne teste pas tout le système — on teste exclusivement les **points durs** identifiés en [[concept|phase 2]], c'est-à-dire les zones d'incertitude technique critique. Un PoC bien mené dérisque le projet ; un PoC bâclé pousse l'incertitude vers la fin, là où la corriger coûte le plus cher.

## Posture attendue

La tentation, à ce stade, est de plonger directement dans le bricolage : "on a le matos, on monte, on verra ce que ça donne". Résistez. Un PoC sans **énoncé écrit, hypothèse formulée, critère de succès quantifié et protocole** n'est pas un PoC — c'est une expérience qui produira des résultats inexploitables. Vous reviendrez en arrière. À l'inverse, un PoC bien cadré peut conclure en quelques heures là où le bricolage met une semaine. Cette phase enseigne une compétence centrale de l'ingénieur : **savoir tester avant de fabriquer**.

## Objectif de la phase

Produire un **rapport PoC** qui :

- formalise chaque point dur en **énoncé testable** (hypothèse, critère de succès chiffré, protocole de mesure)
- présente les **bancs de test** montés et les **mesures** obtenues
- analyse les résultats face aux critères de succès et **tranche** : solution viable, à ajuster, ou intenable
- met à jour la matrice des risques ([[gestion-de-projet|gestion de projet]]) et l'évaluation environnementale ([[ecoconception|écoconception]]) avec les **mesures réelles**

Ce rapport conditionne le passage à la [[dossier-technique|phase 4]] : sans PoC concluant, il n'y a pas de dossier technique défendable.

## Démarche

### 1. Définir chaque PoC

*[À rédiger — un PoC par point dur identifié en phase 2. Pour chacun : **hypothèse** à tester ("ce capteur peut mesurer X avec une précision Y"), **critère de succès quantifié** ("erreur < 2% sur la plage 0-100°C"), **protocole de mesure** (matériel, conditions, nombre de mesures, traitement). Étape la plus négligée et la plus structurante : un énoncé flou produit un rapport inexploitable. Revue des énoncés par l'encadrant avant tout passage à l'action — la revue *est* la validation.]*

> [!livrable] Livrable de l'étape 1
> - Énoncés PoC validés par l'encadrant (un par point dur : hypothèse + critère de succès + protocole)

### 2. Préparer les moyens

*[À rédiger — recensement des ressources matérielles disponibles. Trois sources, à explorer dans cet ordre : **stock école standard** (composants courants), **stock école divers** (composants spécifiques disponibles), **acquisition exceptionnelle** (uniquement si vraiment critique, avec validation budget). Aucun composant à titre personnel — équité budgétaire et respect du cadre projet. Les achats projet définitifs viendront en [[dossier-technique|phase 4]], pas ici.]*

> [!livrable] Livrable de l'étape 2
> - Liste des ressources matérielles mobilisées par PoC (origine, coût éventuel, justification si acquisition)

### 3. Mener les PoC par point dur

*[À rédiger — pour chaque point dur, trois temps : **monter le banc** (banc focalisé sur le point dur, distinct du banc système global qui viendra en phase 5), **exécuter le protocole et mesurer**, **analyser les résultats face au critère de succès**. À mener en parallèle si plusieurs équipiers. Insister sur la rigueur des conditions de mesure (répétabilité, traçabilité). Le découpage est **par point dur**, pas par discipline : un point dur de mécatronique est rarement mono-disciplinaire.]*

> [!livrable] Livrable de l'étape 3
> - Bancs de test montés et caractérisés (un par point dur)
> - Données de mesure et analyses brutes par PoC

### 4. Consolider et rapporter

*[À rédiger — synchro inter-équipiers pour partager les résultats : les conclusions d'un PoC peuvent invalider les hypothèses d'un autre (ex : consommation mesurée rend une autre solution caduque). Mise à jour de la **matrice des risques** ([[gestion-de-projet|GP]]) et de l'**évaluation environnementale** ([[ecoconception|écoconception]]) avec les mesures réelles vs les estimations de phase 2. Rédaction du rapport, revue interne, présentation à l'encadrant ou au client. À la sortie, trois cas possibles : ✅ concluant → [[dossier-technique|phase 4]] ; 🔁 ajuster les solutions → retour [[concept|phase 2]] ; ⚠️ concept intenable → retour [[specification-technique|phase 1]] (rare mais à ne pas masquer).]*

> [!livrable] Livrable de l'étape 4
> - Rapport PoC (présentation des bancs, mesures, analyses, conclusions par point dur)
> - Matrice des risques mise à jour, évaluation [[ecoconception|écoconception]] révisée avec mesures réelles

---

## Pièges fréquents

*[À compléter au fil de la rédaction des étapes]*

- Démarrer le montage sans énoncé écrit ("on verra ce qu'on mesure") — produit des données inexploitables
- Critère de succès flou ou non chiffré ("ça marche à peu près") — empêche toute conclusion défendable
- Tester l'intégralité du système au lieu de cibler les points durs — coûteux et hors périmètre
- Acheter en personnel ce que le stock école pouvait fournir — entorse à l'équité budgétaire
- Négliger la mise à jour des risques et de l'éco après mesures réelles — fait perdre l'enseignement central de la phase
- Masquer un PoC non concluant pour ne pas avoir à revenir en arrière — l'évaluation porte sur la lucidité, pas sur la perfection

## Pendant cette phase, côté équipe

*[À rédiger — interfaces métiers (méca : tutos collègues sur usinage rapide, prototypage pour bancs ; info : tutos sur instrumentation, acquisition de données) + fils transverses spécifiques : [[gestion-de-projet|GP]] (mise à jour risques avec mesures réelles), [[ecoconception|écoconception]] (première confrontation estimation/mesure), [[securite-et-qualite|sécu]] (premières manipulations matériel sous tension, en mouvement — conditions de sécurité des bancs à formaliser).]*

## Voir aussi

- [[index|Hub du parcours projet]]
- Phase précédente : [[concept|Concept]]
- Phase suivante : [[dossier-technique|Dossier technique]] *(à créer)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — à créer)*
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[securite-et-qualite|Sécurité et qualité]] *(fil transverse — à créer)*
