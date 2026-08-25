---
title: Matrice de décision
type: notion
phases:
  - concept
tags:
  - proj
  - notion
  - methode-decision
prerequis: []
aa: []
draft: false
source_fr: conduite/proj/matrice-de-decision.md
source_sha256: 21d5ff3bedf4b4b7a048298c7491a935634ee9aab54f5f3ee5fa4b37738a9481
---

La **matrice de décision** est l'outil d'arbitrage argumenté entre solutions techniques candidates : on liste les solutions en colonnes, les critères de choix pondérés en lignes, on note chaque solution sur chaque critère et la somme pondérée donne un classement justifiable. Elle est l'outil canonique de la phase de [[concept-en|concept]] pour choisir, par sous-système, une solution technique sans tomber dans l'arbitraire ni dans la fausse intuition.

![Matrice de décision — tableau générique 3 solutions × 5 critères pondérés](/ressources/img/matrice-de-decision/generique.svg)

## À quoi ça sert ?

La matrice de décision force l'explicitation des critères de choix entre solutions techniques. Sans elle, l'arbitrage *« on prend les steppers plutôt que les servomoteurs »* reste implicite. Un mois plus tard, personne dans l'équipe ne saurait justifier pourquoi, et la décision ne tient plus en revue.

Trois rôles :

- **Rendre les critères de choix explicites et pondérés.** Sans pondération écrite, chaque équipier raisonne avec ses propres priorités implicites, et la décision finale est celle de la voix la plus assurée, pas celle qui a le plus d'arguments.
- **Intégrer l'[[ecoconception-en|écoconception]] comme critère pondéré**, au même titre que coût et performance. C'est la seule manière d'éviter qu'elle soit traitée comme un commentaire en marge ou une case à cocher en fin de matrice.
- **Tracer la décision** pour la suite du projet. La matrice écrite reste consultable. La mémoire d'équipe ne l'est pas. En cas de remise en cause de l'architecture en [[dossier-technique-en|dossier technique]], on rouvre la matrice et on voit ce qui avait été arbitré, sur quels critères, avec quels poids.

## Comment la construire ?

Quatre temps :

1. **Recenser les solutions candidates** pour chaque fonction technique feuille issue de la [[decomposition-fonctionnelle-en|décomposition]] et du [[fast-en|FAST]]. Trois à cinq solutions maximum. Au-delà, l'analyse se dilue et l'effort d'évaluation explose. Les solutions repérées dans l'[[etat-de-l-art-technique-en|état de l'art]] sont des candidates naturelles.
2. **Lister les critères de choix** ancrés sur les exigences du [[cahier-des-charges-fonctionnel-en|CdCF]] : performance principale, coût, écoconception, robustesse, complexité d'intégration, ouverture, disponibilité. Cinq à huit critères suffisent.
3. **Pondérer les critères** par poids relatifs (somme = 100, par exemple). La pondération doit refléter la hiérarchie réelle des enjeux du projet, pas un consensus mou. Si tout est pondéré à parts égales, la matrice n'arbitre rien.
4. **Noter chaque solution sur chaque critère** sur une échelle simple (1 à 5 typiquement) et calculer la somme pondérée. La somme donne un **classement**, pas une décision automatique. Il reste à interpréter, à discuter les écarts faibles, et à conclure en justifiant le choix retenu en quelques lignes.

*Illustration sur un cas concret : choix d'une stratégie d'alimentation pour une station météo connectée en déploiement extérieur.*

![Matrice de décision — choix d'alimentation d'une station météo connectée](/ressources/img/matrice-de-decision/station-meteo.svg)

## Pièges

**Pondération bricolée a posteriori.** Si l'équipe ajuste les poids jusqu'à obtenir le résultat espéré, la matrice ne sert à rien. Autant choisir directement et l'assumer. La pondération se pose **avant** d'évaluer les solutions, et on tient le résultat même quand il surprend.

**Critères non discriminants.** Un critère sur lequel toutes les solutions ont la même note n'apporte rien à l'arbitrage. Il alourdit la matrice sans la trancher. À retirer ou à reformuler pour qu'il discrimine vraiment les solutions.

**Écoconception en case isolée.** Traiter l'écoconception comme un critère séparé, non pondéré ou pondéré très bas, équivaut à ne pas la traiter. Pour qu'elle pèse réellement dans la décision, elle doit être pondérée comme les autres critères principaux, voire forcée dans le top 3 quand le contexte du projet le justifie.

## Voir aussi

- [[concept-en|Concept]] — phase où les matrices de décision sont construites (étape 2)
- [[decomposition-fonctionnelle-en|Décomposition fonctionnelle]] — amont : produit les fonctions techniques feuilles à arbitrer
- [[fast-en|FAST]] — amont : valide les chaînes dont chaque feuille ouvre une matrice
- [[ecoconception-en|Écoconception]] — critère pondéré dans chaque matrice de décision
- [[matrice-eco-criteres-en|Matrice éco-critères]] — bloc de critères environnementaux qui s'enchâsse dans cette matrice
- [[cahier-des-charges-fonctionnel-en|Cahier des charges fonctionnel]] — source des exigences qui fondent les critères de choix
- [[caracteriser-une-exigence-en|Caractériser une exigence]] — méthode amont qui chiffre les exigences mobilisables comme critères
