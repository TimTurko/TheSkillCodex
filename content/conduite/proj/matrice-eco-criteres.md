---
title: Matrice éco-critères
type: notion
phases:
  - concept
tags:
  - proj
  - notion
  - ecoconception
prerequis:
  - matrice-de-decision
aa:
  - RA-ESE-C09-2/ESE/4
draft: false
---

La **matrice éco-critères** est l'outil d'évaluation environnementale de l'[[ecoconception|écoconception]] : un jeu de **cinq critères environnementaux** noté sur **N solutions candidates**. Sa particularité : elle ne s'isole pas dans un tableau à part, elle s'**enchâsse dans la [[matrice-de-decision|matrice de décision]]** sous forme d'un bloc de lignes pondérées. Ainsi le critère environnemental pèse sur l'arbitrage au même titre que le coût ou la performance, au lieu d'être relégué à un commentaire en marge.

## À quoi ça sert ?

La matrice éco-critères répond à un problème précis : faire en sorte que l'environnement **pèse réellement** dans le choix d'une solution technique, au lieu d'être évoqué puis oublié au moment de décider.

Trois rôles :

- **Forcer l'arbitrage environnemental.** Une évaluation éco posée *à côté* de la matrice de décision ne change aucun choix — on la regarde, on hoche la tête, on décide sur le coût. Intégrée *dans* la matrice comme un bloc de lignes pondérées, elle pèse mécaniquement sur le classement final.
- **Rester sur des grandeurs chiffrables.** Les cinq critères portent sur ce que l'expertise élec et info embarquée sait mesurer (consommation, durée de vie, démontabilité, matière). Ce qui dépasse ce périmètre (impact des matières premières, [[acv-simplifiee|ACV]] complète) est cité et délégué aux cours dédiés, pas chiffré à la va-vite.
- **Tracer l'arbitrage éco.** Le bloc éco-critères, daté et pondéré dans la matrice de décision, devient une trace écrite défendable en revue — pas un argumentaire reconstruit après coup.

> [!warning] Attention
> **Matrice éco-critères ≠ [[matrice-de-decision|matrice de décision]].** La matrice de décision est l'outil d'arbitrage **général** : toutes les solutions en colonnes, tous les critères pondérés en lignes (coût, performance, robustesse, environnement…). La matrice éco-critères n'est pas un second tableau concurrent — c'est le **bloc des cinq critères environnementaux** qui vient s'insérer dans la matrice de décision. Une matrice éco-critères qui vit dans son coin ne pèse rien ; les mêmes lignes intégrées à la matrice de décision pèsent exactement autant que les autres.

## Comment la construire ?

Quatre temps, calés sur la [[matrice-de-decision|matrice de décision]] dans laquelle le bloc s'insère.

1. **Reprendre les solutions candidates** de la matrice de décision du sous-système concerné — mêmes colonnes, pas un nouveau jeu de solutions.
2. **Poser les cinq critères environnementaux**, chiffrables côté élec/info :
   - **consommation en fonctionnement** (W ou mW)
   - **consommation en veille / maintien** (µA ou mA)
   - **durée de vie / obsolescence** (cycles, MTBF, échéance d'obsolescence annoncée)
   - **démontabilité / réparabilité** (connectique vs soudure, modularité de la carte)
   - **sobriété matière** (masse de cuivre du [[pcb|PCB]], nombre de couches, masse globale)
3. **Noter chaque solution sur chaque critère** sur une échelle commune (1 à 5 typiquement) et **pondérer** ces lignes comme les autres critères de la matrice de décision. La pondération éco se fixe *avant* d'évaluer, pas après.
4. **Insérer le bloc dans la matrice de décision** — pas à côté. La somme pondérée des lignes éco entre dans le calcul du classement global.

Pour tout ce qui sort du périmètre élec/info (impact carbone des matières, énergie de fabrication, fin de vie matériaux), on ne chiffre pas une [[acv-simplifiee|ACV]] ad hoc : on cite l'enjeu et on renvoie aux cours de matériaux et d'analyse de cycle de vie.

## Exemple — Bras 3 axes pédagogique

Bloc éco-critères pour le choix des moteurs du bras, sur trois solutions (steppers / moteurs CC avec encodeurs / servomoteurs). Échelle 1–5 (5 = plus favorable), pondération sur 30 points du barème global de la matrice de décision.

| Critère environnemental | Poids | Steppers | CC + encodeurs | Servomoteurs |
| --- | --- | --- | --- | --- |
| Consommation en fonctionnement | 8 | 2 | 4 | 3 |
| Consommation en veille / maintien | 6 | 1 | 5 | 3 |
| Durée de vie / obsolescence | 7 | 5 | 3 | 3 |
| Démontabilité / réparabilité | 5 | 4 | 3 | 3 |
| Sobriété matière | 4 | 2 | 4 | 3 |
| **Sous-total éco pondéré** (/150) | **30** | **85** | **114** | **90** |

**Lecture.** Sur le seul plan environnemental, les moteurs CC sortent en tête (114/150) : pas de consommation au repos, masse plus faible. Les steppers sont pénalisés par leur consommation en maintien (couple statique permanent). Pourtant, une fois ce bloc **réintégré dans la matrice de décision complète** — où la précision de positionnement en boucle ouverte et la simplicité de commande pèsent lourd — ce sont les steppers qui ont été retenus pour le bras. C'est exactement le comportement attendu : l'éco a **pesé sans trancher seul**. Un bloc éco isolé aurait orienté vers les CC ; intégré, il a fait partie d'un arbitrage équilibré.

## Pièges

**Matrice éco posée à côté de la matrice de décision.** C'est le piège central : un tableau éco séparé n'influence aucun choix. La règle est l'enchâssement — les lignes éco vivent *dans* la matrice de décision, pondérées comme les autres.

**Pondérer l'éco très bas.** Un bloc éco pesé à 2 ou 3 points sur 100 équivaut à ne pas le traiter : il n'a aucun effet sur le classement. Pour que l'éco compte, son poids doit être du même ordre que les autres critères structurants — quitte à le forcer dans le haut du barème quand le contexte du projet le justifie.

**Chiffrer hors de son expertise.** Inventer une note de « recyclabilité matière » ou un « impact carbone » sans méthode validée fragilise toute la matrice. Les cinq critères restent sur les grandeurs élec/info mesurables ; le reste se cite et se délègue.

**Noter sans échelle commune.** Des notes attribuées au feeling, sans grille partagée, ne sont pas comparables entre solutions. L'échelle (1–5) et les repères se fixent avant d'évaluer.

## Voir aussi

- [[ecoconception|Écoconception]] — fil transverse qui porte cet outil d'évaluation
- [[matrice-de-decision|Matrice de décision]] — outil d'arbitrage général dans lequel le bloc éco-critères s'enchâsse
- [[acv-simplifiee|ACV simplifiée]] — méthode quantifiée déléguée aux cours dédiés pour ce qui dépasse l'élec/info
- [[concept|Concept]] — phase où les matrices de décision, et donc le bloc éco-critères, se construisent
