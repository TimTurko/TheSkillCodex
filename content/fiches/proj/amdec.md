---
title: AMDEC
type: tuto
phases:
  - concept
  - dossier-technique
tags:
  - proj
  - tuto
  - gestion-risques
prerequis: []
aa: []
draft: false
---

L'**AMDEC** (*Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité*) est une méthode d'analyse de la **sûreté de fonctionnement** : pour chaque fonction ou composant d'un système, on recense les **modes de défaillance** possibles, on évalue leur **gravité**, leur **occurrence** et leur **détectabilité**, et on en déduit une **criticité** qui hiérarchise les actions correctives. C'est l'outil d'analyse des risques *produit* en projet [[mecatronique|mécatronique]], mobilisé en [[concept|concept]] pour orienter les parades de sécurité et affiné en [[dossier-technique|dossier technique]] sur les composants réels.

## À quoi ça sert ?

L'AMDEC sert à **anticiper les défaillances d'un système avant qu'elles ne surviennent**, plutôt qu'à les découvrir en intégration ou, pire, en usage. Là où l'intuition traite les pannes au coup par coup, l'AMDEC les recense méthodiquement et les **hiérarchise** : toutes les défaillances ne se valent pas, et l'effort de prévention doit aller en priorité là où le risque est le plus critique.

Trois rôles :

- **Recenser les modes de défaillance sans en oublier.** Le parcours systématique fonction par fonction (ou composant par composant) fait remonter des défaillances qu'un examen spontané manque — surtout celles qui sont graves mais rares, donc faciles à négliger.
- **Hiérarchiser par la criticité.** La cotation **gravité × occurrence × détectabilité** classe les modes entre eux. Une défaillance grave, fréquente et indétectable concentre l'effort ; une défaillance bénigne, rare et visible peut être acceptée.
- **Orienter les parades et les tests.** Les modes les plus critiques deviennent les parades à intégrer dans l'architecture (en [[concept|concept]]) et les points à vérifier en priorité lors des tests de qualification (en [[integration-et-tests|intégration et tests]]).

> [!warning] Attention
> **AMDEC ≠ [[matrice-de-risques|matrice de risques]].** Les deux cotent des risques, mais ne portent ni sur le même objet ni avec les mêmes axes. La matrice de risques cote les **aléas du projet** (composant indisponible, panne d'imprimante, équipier absent) sur deux axes — probabilité × gravité — et se pilote en [[gestion-de-projet|gestion de projet]]. L'AMDEC cote les **modes de défaillance du produit** (un roulement qui grippe, un capteur qui dérive, un arrêt d'urgence qui ne coupe pas) sur trois axes — gravité × occurrence × détectabilité — et relève de la sûreté de fonctionnement. L'une protège le *déroulement du projet*, l'autre la *fiabilité et la sécurité du système livré*.

## Procédure pas à pas

L'AMDEC se mène en quatre temps : choisir la maille d'analyse, identifier les modes de défaillance, coter la criticité, puis décider et tracer les actions.

### 1. Choisir la maille et lister les éléments à analyser

Décider d'abord du **grain d'analyse** : on conduit une AMDEC soit **fonctionnelle** (sur les fonctions techniques issues de la [[decomposition-fonctionnelle|décomposition]] ou du [[fast|FAST]]), soit **matérielle** (sur les composants physiques). En projet école, l'AMDEC fonctionnelle se mène tôt (en [[concept|concept]], avant le choix des composants), l'AMDEC matérielle plus tard (en [[dossier-technique|dossier technique]], sur les références retenues).

Lister ensuite les éléments à passer en revue. Ne pas viser l'exhaustivité du système entier : se concentrer sur les **fonctions critiques** — celles dont la défaillance touche la sécurité de l'utilisateur ou une exigence en flexibilité F0/F1 du [[cahier-des-charges-fonctionnel|CdCF]].

### 2. Identifier modes, effets et causes

Pour chaque élément, répondre à trois questions distinctes, à ne pas confondre :

- **Mode de défaillance** — *comment* l'élément peut-il défaillir ? (un moteur qui ne tourne plus, qui tourne trop, qui se bloque ; un capteur qui dérive, qui sature, qui se déconnecte). Un même élément a souvent plusieurs modes.
- **Effet** — *quelle conséquence* pour le système et l'utilisateur ? C'est l'effet qui porte la gravité (un effet « perte de précision » n'a pas la même gravité qu'un effet « écrasement d'un doigt »).
- **Cause** — *pourquoi* ce mode survient-il ? C'est la cause qui porte l'occurrence et qui désigne la parade (on agit sur la cause, pas sur l'effet).

### 3. Coter la criticité G × O × D

Attribuer à chaque mode trois notes sur une échelle définie à l'avance — typiquement de 1 à 4 en projet école (une échelle 1–10 existe en contexte industriel, mais le 1–4 suffit et discrimine mieux à cette échelle).

| Note | **G** — Gravité de l'effet | **O** — Occurrence (fréquence) | **D** — Non-détectabilité |
|---|---|---|---|
| 1 | mineure, sans conséquence | très rare | détectée à coup sûr avant l'effet |
| 2 | dégradation de service | occasionnelle | souvent détectée |
| 3 | perte de fonction | fréquente | rarement détectée |
| 4 | danger pour l'utilisateur | quasi systématique | indétectable avant l'effet |

La **criticité** est le produit **C = G × O × D** (de 1 à 64). Elle classe les modes entre eux. Attention au sens de l'axe **D** : on cote la *non*-détectabilité, car un mode grave mais indétectable est plus critique qu'un mode grave qu'on voit venir et qu'on peut arrêter à temps.

> [!tip] Astuce
> **Tout mode avec G = 4 mérite une action, quelle que soit sa criticité.** Un danger pour l'utilisateur ne se négocie pas contre une faible occurrence : même rare et détectable (C faible), un mode qui peut blesser appelle une parade. La criticité hiérarchise les modes ordinaires ; la gravité maximale court-circuite le calcul.

### 4. Décider et tracer les actions

Pour les modes au-dessus du seuil de criticité que l'équipe se fixe (et pour tout G = 4), définir une **action** : agir sur la cause (réduire l'occurrence), renforcer la détection (réduire D), ou atténuer l'effet (réduire G). Chaque action nomme un **porteur** et une **échéance**, puis on recote la **criticité résiduelle** pour vérifier que l'action a bien fait baisser le risque. Un tableau AMDEC qui calcule des criticités sans déboucher sur aucune action n'a servi à rien.

## Exemple — Bras 3 axes pédagogique

AMDEC fonctionnelle partielle du bras 3 axes, centrée sur les fonctions critiques pour la sécurité, en cohérence avec les risques utilisateur identifiés dans la trame [[securite-et-qualite|sécurité et qualité]] (pincement, couple moteur, énergie stockée). Échelle 1–4, criticité C = G × O × D.

| Fonction / composant | Mode de défaillance | Effet | Cause probable | G | O | D | C | Action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Arrêt d'urgence | Ne coupe pas la puissance | Aucun moyen d'arrêter un mouvement dangereux | Coupure pilotée par le [[firmware]] (peut planter) | 4 | 2 | 3 | 24 | Câbler l'AU en coupure directe de l'alim, hors logiciel |
| Articulation (butée) | Dépassement de l'angle max | Pincement opérateur, casse mécanique | Butée logicielle seule, non doublée | 4 | 2 | 2 | 16 | Ajouter une butée mécanique (fin de course) |
| Stepper axe 1 | Perte de pas sous charge | Position erronée, précision hors F0 | Couple insuffisant en accélération | 2 | 3 | 3 | 18 | Marge de couple + détection d'écart par encodeur |
| Alim 12 V | Surchauffe en service continu | Coupure intempestive, arrêt du bras | Marge courant trop serrée (+11 %) | 2 | 2 | 2 | 8 | Surveillance thermique, sinon acceptable en l'état |

**Lecture.** Les deux modes à **G = 4** (arrêt d'urgence, butée) appellent une action quelle que soit leur criticité — ce sont les parades de sécurité qui s'inscriront dans l'architecture en concept (arrêt d'urgence câblé hors firmware, butée mécanique doublant la butée logicielle), cohérentes avec la trame sécurité-qualité. La perte de pas (C = 18) rejoint l'incertitude *couple en accélération* déjà identifiée en concept — l'AMDEC et le pré-dimensionnement convergent. La surchauffe alim (C = 8) reste sous le seuil d'action prioritaire : surveillée, mais non bloquante.

## Pièges

**Confondre AMDEC et [[matrice-de-risques|matrice de risques]].** L'AMDEC analyse les défaillances du *produit*, la matrice de risques les aléas du *projet*. Mélanger les deux dans un seul tableau produit un document qui n'éclaire ni la fiabilité du système ni le pilotage du projet.

**Vouloir une AMDEC exhaustive.** Passer tout le système au crible noie l'analyse sous des dizaines de modes triviaux. L'AMDEC prend sa valeur sur les fonctions critiques (sécurité, exigences F0/F1) — le reste se traite en une ligne ou pas du tout.

**Coter sans échelle définie à l'avance.** Des notes attribuées au feeling, sans grille commune G/O/D, ne sont pas comparables entre modes ni entre membres de l'équipe. L'échelle se fixe avant de coter, pas pendant.

**Oublier l'axe Détectabilité.** Beaucoup d'AMDEC scolaires se réduisent à gravité × occurrence et manquent le facteur le plus discriminant en sécurité : un mode grave *indétectable* est bien plus dangereux qu'un mode grave qu'on voit venir. La détection est souvent le levier d'action le moins cher.

**Calculer la criticité sans agir.** Une AMDEC qui produit des nombres mais aucune action corrective est un exercice mort. La colonne *Action* (avec porteur et criticité résiduelle) est la raison d'être de la méthode.

**AMDEC figée après le premier jet.** Les modes et leurs cotations évoluent avec le projet : la [[preuve-de-concept|preuve de concept]] confirme ou infirme des occurrences, l'[[integration-et-tests|intégration]] révèle des modes non anticipés. L'AMDEC se relit à chaque revue de phase, comme la matrice de risques.

## Cas particulier — AMDEC allégée en projet école

L'AMDEC complète (toutes fonctions, trois axes, criticité résiduelle) peut être disproportionnée pour un projet d'un semestre. La **variante allégée pédagogique**, évoquée dans la trame [[securite-et-qualite|sécurité et qualité]], conserve l'essentiel en réduisant la voilure :

- se limiter aux **fonctions critiques de sécurité** (3 à 6 lignes, pas l'inventaire complet) ;
- coter sur **deux axes** (gravité × occurrence) si l'équipe n'est pas à l'aise avec la détectabilité, quitte à perdre le facteur le plus fin ;
- viser la **décision** (quelles parades intégrer) plutôt que la complétude du tableau.

L'allègement est légitime tant qu'il garde la discipline de fond — recenser, coter sur une échelle commune, déboucher sur des actions. Une AMDEC à 4 lignes bien menée vaut mieux qu'un tableau de 40 lignes jamais relu.

## Raccrochage projet

- **Étape d'arbitrage de la [[concept|phase de concept]]** — l'AMDEC fonctionnelle oriente les parades de sécurité à intégrer dans l'architecture (arrêt d'urgence, butées, isolations), au moment où l'architecture précise les organes mobiles et les niveaux d'énergie.
- **[[dossier-technique|Dossier technique]]** — l'AMDEC s'affine sur les composants réels retenus (AMDEC matérielle), en cohérence avec la BOM et les plans détaillés.
- **[[integration-et-tests|Intégration et tests]]** — la criticité hiérarchise les tests de sécurité du niveau 4 de qualification : on teste en priorité ce que l'AMDEC a désigné comme critique.
- **Trame [[securite-et-qualite|sécurité et qualité]]** — l'AMDEC est l'outil d'analyse des risques produit du bloc *sécurité produit* ; la trame en porte l'intégration au cycle, la fiche en porte la méthode.

Une AMDEC menée tôt sur les fonctions critiques évite de découvrir un mode de défaillance dangereux en intégration, quand l'architecture est figée et la reprise coûteuse.

## Voir aussi

- [[securite-et-qualite|Sécurité et qualité]] — fil transverse qui intègre l'AMDEC au cycle du projet (bloc sécurité produit)
- [[matrice-de-risques|Matrice de risques]] — outil cousin à ne pas confondre : risque projet (P × G) vs défaillance produit (G × O × D)
- [[decomposition-fonctionnelle|Décomposition fonctionnelle]] — source des fonctions techniques qu'une AMDEC fonctionnelle passe en revue
- [[integration-et-tests|Intégration et tests]] — phase aval où la criticité priorise les tests de sécurité
- [[concept|Concept]] — phase où l'AMDEC fonctionnelle oriente les parades d'architecture
