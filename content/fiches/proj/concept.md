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

Le **concept** est la deuxième étape du projet [[mecatronique|mécatronique]] : on transforme le [[cahier-des-charges-fonctionnel|cahier des charges fonctionnel]] (le *quoi*) en une **architecture technique préliminaire** (le *comment*). On choisit les grandes options par discipline, on vérifie qu'elles tiennent ensemble, on chiffre suffisamment pour identifier les **incertitudes** qu'il faudra lever en [[preuve-de-concept|preuve de concept]]. Les composants définitifs viendront plus tard, en [[dossier-technique|dossier technique]].

## Posture attendue

La tentation, à ce stade, est d'aller trop vite vers les composants ("on prendra un ESP32 et un driver A4988") ou de laisser chaque discipline travailler dans son coin. Résistez aux deux. Cette étape ne demande pas de choisir les références exactes, elle demande de **poser une architecture défendable** — c'est-à-dire compatible inter-disciplines, justifiée par des matrices, et pré-dimensionnée. C'est aussi la première étape où l'**[[ecoconception|écoconception]] devient un critère de choix**, pas un commentaire en marge.

## Objectif de la phase

Produire un **dossier concept** qui :

- décompose le système en sous-systèmes et fonctions techniques exploitables par discipline
- pour chaque sous-système, justifie le choix d'une **solution technique** par une [[matrice-de-decision|matrice de décision]] intégrant l'[[ecoconception|écoconception]]
- garantit la **compatibilité inter-disciplines** des solutions retenues
- pré-dimensionne chaque discipline (ordres de grandeur, faisabilité)
- identifie explicitement les **incertitudes** à lever en [[preuve-de-concept|preuve de concept]]

Ce document servira de **référence d'architecture** pour la suite du projet : tout choix de composant en [[dossier-technique|dossier technique]] devra être traçable à une solution validée ici.

## Démarche

### 1. Décomposer le système

*[À rédiger — [[decomposition-fonctionnelle|décomposition fonctionnelle]] du système (passage du global aux sous-systèmes), puis FAST par bloc pour faire émerger les fonctions techniques. Outils mobilisables : SADT/IDEF0, [[schema-bloc-fonctionnel|schéma bloc fonctionnel]], autres. Insister : la décomposition peut révéler un trou dans le CdCF — c'est une rétroaction normale vers la [[specification-technique|spécification technique]], à ne pas masquer.]*

> [!example] Sur le bras 3 axes
> Décomposition probable en trois sous-systèmes : **mobilité articulaire** (mettre en mouvement les segments), **interface utilisateur** (recevoir une consigne, afficher l'état), **alimentation et sécurité** (fournir l'énergie, arrêter en cas d'incident). Chaque sous-système ouvrira ensuite un FAST listant les fonctions techniques (positionner un axe, mesurer un angle, asservir un moteur…).

> [!livrable] Livrable de l'étape 1
> - Décomposition fonctionnelle du système (sous-systèmes + fonctions techniques par bloc)

### 2. Explorer les solutions par discipline

*[À rédiger — pour chaque sous-système, recensement des solutions candidates puis [[matrice-de-decision|matrice de décision]] argumentée. Trois branches typiques (élec, méca, info), à mener en parallèle. Critère [[ecoconception|écoconception]] intégré dans la matrice (pas traité à part). Insister sur le risque pédagogique : les branches montrent les fronts de travail, **pas une assignation à des personnes** — chaque équipier doit comprendre l'architecture entière.]*

> [!tip] Branches ≠ rôles
> Le découpage en trois branches (élec / méca / info) sert à structurer le travail technique, pas à figer qui fait quoi dans l'équipe. Un équipier qui ne suivrait qu'une seule branche perdrait la cohérence du système et ne pourrait pas défendre l'architecture en présentation.

> [!example] Sur le bras 3 axes
> Sous-système *mobilité articulaire* — solutions candidates en élec : moteurs CC + encodeurs / steppers + drivers / servomoteurs. Critères pondérés : couple disponible, précision angulaire, coût, écoconception (consommation en maintien, recyclabilité). Une matrice par sous-système, à mener en parallèle entre disciplines.

> [!livrable] Livrable de l'étape 2
> - Matrices de décision argumentées (une par sous-système, critère écoconception intégré)

### 3. Arbitrer l'architecture globale

*[À rédiger — étape pivot. Synchronisation inter-disciplines : confronter les solutions retenues localement, vérifier leur **compatibilité** (couple méca vs courant élec, encombrement vs intégration, latence info vs réactivité système). En cas de conflit, retour aux matrices avec contraintes mises à jour. Une fois validée, l'architecture est figée comme **assemblage cohérent**, livrable distinct du dossier final.]*

> [!warning] Le conflit inter-disciplines arrive presque toujours
> Chaque branche a trouvé son optimum local, mais l'assemblage révèle des incompatibilités : le couple exigé par la méca dépasse ce que les drivers élec peuvent fournir dans le budget ; la fréquence de commande imposée par l'info sature le bus série ; l'encombrement méca des moteurs choisis empêche l'intégration sur la structure. C'est *normal* — c'est même le moment pédagogique central de cette étape. La compétence à acquérir : renégocier sans tout casser.

> [!example] Sur le bras 3 axes
> La méca a retenu des articulations à axe unique pour simplifier les liaisons ; l'info a dimensionné un algo de cinématique inverse qui suppose un offset entre axes consécutifs. Conflit : la méca doit revoir le squelette ou l'info doit reprendre le modèle géométrique. Une renégociation à trois (méca + info + élec qui suit la consommation) tranche.

> [!livrable] Livrable de l'étape 3
> - Architecture globale du système (assemblage cohérent des solutions retenues par discipline)

### 4. Pré-dimensionner et identifier les incertitudes

*[À rédiger — pré-dimensionnement par discipline : ordres de grandeur, calculs de vérification, marges. Pas le calcul exact (ça vient en [[dossier-technique|dossier technique]]), mais suffisant pour valider la viabilité. À la sortie : extraction explicite des **incertitudes** = ce que le pré-dimensionnement n'a pas pu trancher et qu'il faudra lever en [[preuve-de-concept|preuve de concept]]. C'est la passerelle vers la phase suivante.]*

> [!example] Sur le bras 3 axes
> Pré-dim méca : le couple maximal en bout de bras avec une charge de 100 g se calcule à partir de la géométrie et de la cinématique. Le résultat (en N·m) confronté au couple disponible des steppers retenus laisse une marge faible sur l'axe 1. **Incertitude identifiée** : la marge sera-t-elle suffisante en accélération réelle ? À lever en preuve de concept par essai sur un banc moteur représentatif.

> [!livrable] Livrables de l'étape 4
> - Pré-dimensionnements par discipline (calculs de vérification, marges, ordres de grandeur)
> - Liste des incertitudes à lever en [[preuve-de-concept|preuve de concept]]

### 5. Rédiger le dossier concept

*[À rédiger — agrégation : décomposition fonctionnelle + matrices argumentées + architecture globale + pré-dimensionnements + liste des incertitudes. Revue d'équipe interne, puis présentation à l'encadrant ou au client. Validation finale : si remise en cause profonde, rétroaction possible vers la [[specification-technique|spécification technique]].]*

> [!example] Sur le bras 3 axes
> Le dossier concept rassemble : la décomposition en 3 sous-systèmes, les 3 matrices de décision (mobilité, IHM, alimentation/sécurité), l'architecture choisie (3 steppers + 1 microcontrôleur + IHM PC), les pré-dim avec marges, et la liste des incertitudes (tenue mécanique des articulations imprimées 3D, précision bout de bras, commande synchronisée).

> [!livrable] Livrable de l'étape 5
> - Dossier concept agrégé et validé (en revue d'équipe puis présentation à l'encadrant/client)

## Conclusion

À ce stade, l'architecture est posée, justifiée et pré-dimensionnée ; les incertitudes restantes sont explicitement listées. La suite du travail bascule en [[preuve-de-concept|preuve de concept]] pour lever ces incertitudes par l'expérimentation — avant d'engager le projet matériellement en [[dossier-technique|dossier technique]].

---

## Pièges fréquents

*[À compléter au fil de la rédaction des étapes]*

- Choisir les composants définitifs trop tôt (ça vient en [[dossier-technique|dossier technique]])
- Laisser chaque discipline finir sa matrice avant de confronter les choix (le conflit inter-disciplines est plus coûteux à découvrir tard)
- Traiter l'écoconception comme une case à cocher en fin de matrice, au lieu d'un critère pondéré
- Confondre « front de travail disciplinaire » et « répartition des rôles » dans l'équipe
- Sauter le pré-dimensionnement (« on verra à la preuve de concept ») — c'est exactement ce qui produit des PoC ratés

## Pendant cette phase, côté équipe

*[À rédiger — interfaces métiers (méca : tutos collègues sur dimensionnement matériaux, fabrication ; info : tutos sur architecture logicielle) + fils transverses spécifiques à l'étape : [[gestion-de-projet|gestion de projet]] (mise à jour risques selon les choix d'architecture), [[ecoconception|écoconception]] (intégrée dans les matrices), [[securite-et-qualite|sécurité et qualité]] (premières contraintes à intégrer).]*

## Voir aussi

- [[index|Hub du parcours projet]]
- Étape précédente : [[specification-technique|Spécification technique]]
- Étape suivante : [[preuve-de-concept|Preuve de concept]] *(à créer)*
- [[matrice-de-decision|Matrice de décision]] *(à créer)*
- [[decomposition-fonctionnelle|Décomposition fonctionnelle]] *(à créer)*
- [[schema-bloc-fonctionnel|Schéma bloc fonctionnel]]
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — à créer)*
