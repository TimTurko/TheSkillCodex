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

La **preuve de concept** (PoC) est la troisième étape du projet [[mecatronique|mécatronique]] et le **point pivot** du cycle en V : c'est le moment où l'on cesse de raisonner sur le papier et où l'on confronte les choix d'architecture à la **réalité physique**. On ne teste pas tout le système — on teste exclusivement les **incertitudes** identifiées en [[concept|concept]], c'est-à-dire les zones critiques que le pré-dimensionnement n'a pas pu trancher. Une preuve de concept bien menée lève les doutes amont ; bâclée, elle pousse l'incertitude vers la fin, là où la corriger coûte le plus cher.

## Posture attendue

La tentation, à ce stade, est de plonger directement dans le bricolage : "on a le matos, on monte, on verra ce que ça donne". Résistez. Une preuve de concept sans **énoncé écrit, hypothèse formulée, critère de succès quantifié et protocole** n'est pas une preuve de concept — c'est une expérience qui produira des résultats inexploitables. Vous reviendrez en arrière. À l'inverse, une preuve bien cadrée peut conclure en quelques heures là où le bricolage met une semaine. Cette étape enseigne une compétence centrale de l'ingénieur : **savoir tester avant de fabriquer**.

## Objectif de la phase

Produire un **rapport de preuve de concept** qui :

- formalise chaque incertitude en **énoncé testable** (hypothèse, critère de succès chiffré, protocole de mesure)
- présente les **bancs de test** montés et les **mesures** obtenues
- analyse les résultats face aux critères de succès et **tranche** : solution viable, à ajuster, ou intenable
- met à jour la matrice des risques ([[gestion-de-projet|gestion de projet]]) et l'évaluation environnementale ([[ecoconception|écoconception]]) avec les **mesures réelles**

Ce rapport conditionne le passage au [[dossier-technique|dossier technique]] : sans preuve concluante, il n'y a pas de dossier technique défendable.

## Démarche

### 1. Définir chaque preuve

*[À rédiger — une preuve par incertitude identifiée en [[concept|concept]]. Pour chacune : **hypothèse** à tester ("ce capteur peut mesurer X avec une précision Y"), **critère de succès quantifié** ("erreur < 2 % sur la plage 0-100 °C"), **protocole de mesure** (matériel, conditions, nombre de mesures, traitement). Étape la plus négligée et la plus structurante : un énoncé flou produit un rapport inexploitable. Revue des énoncés par l'encadrant avant tout passage à l'action — la revue *est* la validation.]*

> [!example] Sur le bras 3 axes
> Incertitude *tenue mécanique des articulations imprimées 3D* — Hypothèse : « une articulation en PLA imprimée à 60 % de remplissage tient un couple de 1,2 N·m sans déformation permanente ». Critère de succès : « après 1000 cycles à 1,2 N·m, le jeu angulaire mesuré reste < 0,5° ». Protocole : montage d'un banc d'application de couple statique + cyclique, mesure au comparateur, 3 articulations testées.

> [!livrable] Livrable de l'étape 1
> - Énoncés de preuve validés par l'encadrant (un par incertitude : hypothèse + critère de succès + protocole)

### 2. Préparer les moyens

*[À rédiger — recensement des ressources matérielles disponibles. Trois sources, à explorer dans cet ordre : **stock école standard** (composants courants), **stock école divers** (composants spécifiques disponibles), **acquisition exceptionnelle** (uniquement si vraiment critique, avec validation budget). Aucun composant à titre personnel — équité budgétaire et respect du cadre projet. Les achats projet définitifs viendront en [[dossier-technique|dossier technique]], pas ici.]*

> [!warning] Pas d'achat à titre personnel
> Même si un composant à 5 € vous semble plus rapide à commander vous-même qu'à demander à l'école, n'achetez rien sur vos deniers personnels. C'est une entorse à l'équité budgétaire entre équipes, et c'est expressément hors cadre projet. Si une acquisition exceptionnelle est nécessaire, elle passe par le responsable projet.

> [!example] Sur le bras 3 axes
> Stock école standard : steppers NEMA17, drivers A4988, microcontrôleur Arduino. Stock divers : filament PLA pour impression des pièces de test, capteurs de fin de course. Acquisition exceptionnelle envisagée : aucune si le banc peut être monté avec le stock disponible.

> [!livrable] Livrable de l'étape 2
> - Liste des ressources matérielles mobilisées par preuve (origine, coût éventuel, justification si acquisition)

### 3. Mener les preuves par incertitude

*[À rédiger — pour chaque incertitude, trois temps : **monter le banc** (banc focalisé sur l'incertitude testée, distinct du banc système global qui viendra en [[integration-et-tests|intégration et tests]]), **exécuter le protocole et mesurer**, **analyser les résultats face au critère de succès**. À mener en parallèle si plusieurs équipiers. Insister sur la rigueur des conditions de mesure (répétabilité, traçabilité). Le découpage est **par incertitude**, pas par discipline : une incertitude de mécatronique est rarement mono-disciplinaire.]*

> [!example] Sur le bras 3 axes
> Banc de la preuve *tenue articulation 3D* : platine d'ancrage + masse étalonnée + bras de levier connu pour appliquer un couple maîtrisé + comparateur pour mesurer le jeu angulaire. 1000 cycles automatisés via un programme simple sur le microcontrôleur. Mesures relevées toutes les 100 cycles. Analyse : tracé du jeu en fonction du nombre de cycles, comparaison au critère 0,5°.

> [!livrable] Livrable de l'étape 3
> - Bancs de test montés et caractérisés (un par incertitude)
> - Données de mesure et analyses brutes par preuve

### 4. Consolider et rapporter

*[À rédiger — synchro inter-équipiers pour partager les résultats : les conclusions d'une preuve peuvent invalider les hypothèses d'une autre (ex : consommation mesurée rend une autre solution caduque). Mise à jour de la **matrice des risques** ([[gestion-de-projet|gestion de projet]]) et de l'**évaluation environnementale** ([[ecoconception|écoconception]]) avec les mesures réelles vs les estimations du [[concept|concept]]. Rédaction du rapport, revue interne, présentation à l'encadrant ou au client. À la sortie, trois cas possibles : ✅ concluant → [[dossier-technique|dossier technique]] ; 🔁 ajuster les solutions → retour [[concept|concept]] ; ⚠️ concept intenable → retour [[specification-technique|spécification technique]] (rare mais à ne pas masquer).]*

> [!warning] Une preuve non concluante n'est pas un échec
> L'évaluation porte sur la **lucidité de l'analyse**, pas sur la conclusion. Une preuve qui invalide une hypothèse, documente proprement pourquoi, et justifie un retour au concept est *un bon livrable*. À l'inverse, une preuve dont les résultats sont bidouillés pour « rentrer dans la case concluante » est un mauvais livrable, même si elle évite la rétroaction.

> [!example] Sur le bras 3 axes
> Si la preuve *tenue articulation 3D* invalide l'hypothèse (jeu > 0,5° après 500 cycles), trois options à documenter : augmenter le remplissage (impact poids et temps d'impression), passer à une articulation usinée (impact coût et délai), ou revoir la cinématique pour réduire le couple sur cet axe (impact concept). Le retour au concept est explicite.

> [!livrable] Livrable de l'étape 4
> - Rapport de preuve de concept (présentation des bancs, mesures, analyses, conclusions par incertitude)
> - Matrice des risques mise à jour, évaluation [[ecoconception|écoconception]] révisée avec mesures réelles

---

## Pièges fréquents

*[À compléter au fil de la rédaction des étapes]*

- Démarrer le montage sans énoncé écrit ("on verra ce qu'on mesure") — produit des données inexploitables
- Critère de succès flou ou non chiffré ("ça marche à peu près") — empêche toute conclusion défendable
- Tester l'intégralité du système au lieu de cibler les incertitudes — coûteux et hors périmètre
- Acheter en personnel ce que le stock école pouvait fournir — entorse à l'équité budgétaire
- Négliger la mise à jour des risques et de l'éco après mesures réelles — fait perdre l'enseignement central de l'étape
- Masquer une preuve non concluante pour ne pas avoir à revenir en arrière — l'évaluation porte sur la lucidité, pas sur la perfection

## Pendant cette phase, côté équipe

*[À rédiger — interfaces métiers (méca : tutos collègues sur usinage rapide, prototypage pour bancs ; info : tutos sur instrumentation, acquisition de données) + fils transverses spécifiques : [[gestion-de-projet|gestion de projet]] (mise à jour risques avec mesures réelles), [[ecoconception|écoconception]] (première confrontation estimation/mesure), [[securite-et-qualite|sécurité et qualité]] (premières manipulations matériel sous tension, en mouvement — conditions de sécurité des bancs à formaliser).]*

## Voir aussi

- [[index|Hub du parcours projet]]
- Étape précédente : [[concept|Concept]]
- Étape suivante : [[dossier-technique|Dossier technique]] *(à créer)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — à créer)*
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[securite-et-qualite|Sécurité et qualité]] *(fil transverse — à créer)*
