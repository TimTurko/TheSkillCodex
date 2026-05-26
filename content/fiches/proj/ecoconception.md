---
title: Écoconception
type: trame
phase: 
phases:
  - specification
  - concept
  - preuve-de-concept
  - dossier-technique
  - integration-et-tests
tags:
  - proj
  - trame
  - transverse
prerequis: []
aa:
  - RA-ESE-C09-2/ESE/3
  - RA-ESE-C09-2/ESE/4
  - RA-ESE-C09-2/ESE/5
  - RA-PROJET-C03-3/PROJ/7
draft: false
---

L'**écoconception** est un **fil transverse** qui informe les choix techniques tout au long du projet [[mecatronique|mécatronique]] : évaluer leur impact environnemental, en réduire la part qui relève de l'électronique et de l'informatique embarquée, tracer les arbitrages dans les livrables du projet. Comme la [[gestion-de-projet|gestion de projet]], elle ne se déclenche pas à une phase précise — elle s'installe en continu, de la [[specification-technique|spécification technique]] à l'[[integration-et-tests|intégration et tests]]. Elle s'articule avec les cours de matériaux et d'analyse de cycle de vie portés par les disciplines voisines.

## Posture attendue

La tentation, sur l'écoconception, est de la traiter en case à cocher de fin de projet — un paragraphe ajouté au rapport sur la « recyclabilité du PLA » et l'affaire est faite. Résistez. L'écoconception n'est ni un livrable, ni une section, ni un commentaire en marge : c'est un **critère intégré aux choix techniques** dès la spécification. La compétence-clé enseignée par cette trame : **questionner chaque décision sous l'angle environnemental sans empiéter sur les disciplines voisines** — porter ce qui relève de l'électronique et de l'informatique embarquée, déléguer ce qui relève des matériaux ou de l'analyse de cycle de vie aux cours dédiés.

## Objectif

**Maintenir une démarche d'écoconception** intégrée aux choix techniques sur toute la durée du projet :

- une **évaluation** environnementale des choix structurants ([[matrice-eat|matrice EAT]], [[acv-simplifiee|ACV simplifiée]] en délégation)
- une **réduction** d'impact incarnée dans les choix élec et info embarqué (sobriété énergétique, durée de vie composants, démontabilité PCB, sobriété logicielle)
- une **traçabilité** des arbitrages dans le dossier technique et la soutenance
- une **articulation** explicite avec les cours de matériaux et d'analyse de cycle de vie portés par les disciplines voisines

Cette démarche s'incarne transversalement dans les livrables des 5 phases du cycle en V, pas dans un livrable séparé.

## Démarche

<!--
NOTE — DÉROGATION À LA CONVENTION « N ÉTAPES ORDONNÉES »
========================================================
L'écoconception est une trame transverse : les 3 blocs ci-dessous sont
**co-actifs** sur toute la durée du projet, pas une séquence à parcourir
une fois. Le mot « Démarche » est conservé pour aligner la structure de
fiche sur le template `fiche-trame.md` (pattern établi sur la trame
`gestion-de-projet.md` le 25/05).

Convention v2.1 transposée : « au moins 1 [!example] par étape » devient
« au moins 1 [!example] par bloc » — incarnation bras 3 axes ponctuelle
sur les 15 semaines, pas en panorama unique.

Format [!livrable] transverse : sous-listes « Continu » et « Jalonné »
dans chaque livrable, pour rendre visible le double régime de production
(convention transverse établie sur `gestion-de-projet.md` le 25/05).
-->

L'écoconception se tient sur trois fronts qui s'activent **en parallèle** dès la [[specification-technique|spécification technique]] et jusqu'à la soutenance : **évaluer** l'impact environnemental des choix techniques, **réduire** cet impact dans les domaines relevant de l'expertise élec et info embarquée, **tracer** les arbitrages pour qu'ils restent visibles tout au long du projet. Ces trois blocs ne se déroulent pas dans un ordre — ils se nourrissent mutuellement et tournent en continu.

### 1. Évaluer

Évaluer l'impact environnemental d'un choix technique n'a de sens que **si l'évaluation peut encore orienter ce choix**. Une évaluation conduite après l'arbitrage ne sert plus qu'à justifier *a posteriori* ce qui a déjà été décidé — au mieux à produire un rapport de conformité, jamais à infléchir une trajectoire. C'est la raison pour laquelle l'évaluation se cale dès la première matrice où une décision se prend : tableau comparatif de l'[[etat-de-l-art-technique|état de l'art technique]] en [[specification-technique|spécification technique]], [[matrice-de-decision|matrices de décision]] par sous-système en [[concept|concept]]. Évaluer plus tard est toujours possible — mais sans levier sur les choix qui comptent.

L'outil canonique porté par cette trame est la **[[matrice-eat|matrice EAT]]** : 5 critères environnementaux × N solutions candidates, intégrée directement aux matrices de décision existantes sous forme d'une ligne ou d'un bloc dédié, plutôt qu'isolée dans un livrable séparé. Cette intégration force l'arbitrage : le critère environnemental pèse au même titre que le coût, la performance ou la durée de vie. Une matrice EAT à côté ne pèse rien — une ligne EAT dans la matrice de décision pèse exactement autant que les autres lignes. L'[[acv-simplifiee|ACV simplifiée]] complète l'outillage pour les choix structurants où le périmètre dépasse l'élec/info : sa méthodologie complète relève des cours de matériaux et d'analyse de cycle de vie, la trame se contente de la citer et de renvoyer au cours dédié.

La frontière entre ce qui se chiffre côté expertise utilisateur et ce qui se délègue est nette. Côté élec/info, des grandeurs accessibles : **consommation en fonctionnement** (en W ou mW), **consommation en veille** (en µA ou mA), **durée de vie indicative** des composants (cycles, MTBF, échéance d'obsolescence annoncée), **masse de cuivre du PCB**, **nombre de couches**. Côté cours collègues : impact carbone des matières premières, énergie de fabrication, fin de vie matériaux, normes ACV ISO 14040. La règle pratique : si le chiffrage demande une compétence matériaux ou procédés que l'équipe n'a pas, on cite l'enjeu et on renvoie ; on n'invente pas une ACV ad hoc.

La cadence d'évaluation suit naturellement les jalons du projet. Évaluation initiale dès la première matrice de décision en concept ; ré-évaluation à chaque revue de phase quand un choix bascule (nouveau composant retenu en [[dossier-technique|dossier technique]], recâblage d'architecture après [[preuve-de-concept|preuve de concept]]) ; vérification finale en revue d'[[integration-et-tests|intégration et tests]] pour confirmer que les arbitrages tenus en concept n'ont pas été silencieusement effacés par les choix de composants ultérieurs.

> [!example] Exemple : projet bras 3 axes
> Sur le choix des moteurs en [[concept|concept]] (étape 2), une [[matrice-eat|matrice EAT]] à 5 critères × 3 solutions (steppers / CC avec encodeurs / servomoteurs) intègre un critère **consommation en maintien** chiffré en W (les steppers consomment en couple statique, pas les CC à l'arrêt) et un critère **durée de vie indicative** en cycles. Le critère écoconception ne s'ajoute pas en colonne séparée — il pèse sur la décision au même titre que le coût ou la précision. En revue de PoC en semaine n°6, la matrice est re-passée : la consommation mesurée des steppers est conforme à l'ordre de grandeur retenu, le choix est confirmé sans rediscussion.

> [!livrable] Livrable 1/3 — Écoconception
> Évaluation environnementale présente dans les choix techniques structurants, attestée par :
> - **Continu** : critère écoconception intégré aux [[matrice-de-decision|matrices de décision]] (étape 2 de [[concept|concept]]) et au tableau comparatif de l'[[etat-de-l-art-technique|état de l'art technique]] (étape 2 de [[specification-technique|spécification technique]])
> - **Jalonné** : une [[matrice-eat|matrice EAT]] par sous-système structurant, présentée en revue de phase

### 2. Réduire

La réduction d'impact se joue dans les **choix techniques courants**, pas dans un acte séparé d'« optimisation environnementale » conduit en fin de projet. Quatre fronts relèvent de l'expertise élec et info embarquée et doivent être portés en propre par cette trame.

**Sobriété énergétique.** Dimensionner au juste besoin plutôt qu'à la marge confortable. Un driver moteur surdimensionné « pour avoir de la réserve » consomme en pertes statiques toute la durée du projet ; une alimentation linéaire choisie par simplicité dissipe en chaleur ce qu'un convertisseur à découpage économiserait. Côté [[microcontroleur|microcontrôleur]], exploiter les **modes basse consommation** (sleep, deep sleep, hibernation selon les microcontrôleurs) plutôt que laisser le cœur tourner en permanence. Le calcul d'ordre de grandeur est immédiat : un microcontrôleur à 50 mA en fonctionnement permanent vs 10 µA en deep sleep, c'est un rapport de 5000 sur la consommation moyenne dès que le système est majoritairement en attente.

**Durée de vie des composants.** Choisir des composants qui ne deviendront pas obsolètes pendant la durée de vie du système. Les composants industriels (gamme étendue, second-source disponible, datasheet stable depuis plusieurs années) tiennent là où les composants grand public peuvent disparaître en deux ans. Les **marges thermiques** (un composant utilisé à 60 % de sa température maximale dure significativement plus longtemps qu'à 95 %) sont une assurance vie peu coûteuse. La règle pratique : préférer un composant qu'on retrouve chez deux distributeurs et qui existe depuis cinq ans à la dernière référence marketing dont le statut « en production » n'est pas vérifiable.

**Démontabilité du PCB.** Privilégier la **connectique** (JST, headers, borniers) aux soudures directes pour tous les éléments qui peuvent légitimement être remplacés (moteurs, capteurs, alimentation, modules radio). Garder une carte modulaire — fonctions séparables — plutôt qu'un PCB monolithique où une panne implique le remplacement du tout. Cette démontabilité a un coût en surface et en BOM, mais elle change radicalement la réparabilité et la fin de vie du système. Réfléchir aussi à la **sérigraphie** : un PCB bien étiqueté est un PCB qu'on peut diagnostiquer sans schéma, donc réparer.

**Sobriété logicielle.** Le code embarqué a un coût énergétique direct. Une boucle de *polling* qui interroge un capteur toutes les millisecondes maintient le [[microcontroleur|microcontrôleur]] actif en permanence ; le même besoin servi par **interrupt** sur le capteur laisse le microcontrôleur en sleep entre événements. Plus largement : microcontrôleur dimensionné au juste besoin (pas un Cortex-M7 pour clignoter une LED), bibliothèques compilées avec optimisation, RTOS choisi pour son empreinte si pertinent. La sobriété logicielle n'est pas une coquetterie d'optimisation prématurée — c'est une discipline d'architecture qui sépare ce qui doit tourner en permanence de ce qui peut dormir.

Ce que cette trame **ne porte pas** : choix des matériaux ([[pla|PLA]], [[abs|ABS]], métaux, composites), procédés de fabrication, recyclabilité matière, ACV complète. Ces fronts relèvent des cours de matériaux, de fabrication et d'analyse de cycle de vie. L'équipe les cite, les intègre comme [[FC]] ou comme risques quand pertinent, mais ne les redouble pas en interne.

> [!example] Exemple : projet bras 3 axes
> Quatre choix écoconçus tenus côté élec/info : **ESP32 en deep sleep** entre commandes (consommation inférieure à 10 µA en attente, contre ~80 mA en fonctionnement nominal), **connectique JST** pour les liaisons moteurs et capteurs de fin de course (démontables au tournevis, pas de fil soudé), **drivers moteurs dimensionnés au juste courant** d'usage (pas de surdimensionnement systématique « pour avoir de la marge »), **code en interrupt** sur les fins de course plutôt qu'en *polling* ([[microcontroleur|microcontrôleur]] au repos la majorité du temps en attente d'événement). Le [[pla|PLA]] d'[[impression-3d|impression 3D]] des pièces de structure relève du cours matériaux et n'est pas arbitré ici.

> [!warning] Attention
> **Réduire ne veut pas dire optimiser à l'extrême un seul critère.** Choisir le [[microcontroleur|microcontrôleur]] le moins consommateur sans regarder sa disponibilité, sa durée de vie ou son écosystème de développement peut dégrader le résultat global du projet. La réduction d'impact se joue par **arbitrages équilibrés sur plusieurs fronts** (sobriété énergétique, durée de vie, démontabilité, sobriété logicielle), pas par sur-investissement sur un seul. Un composant ultra-sobre mais obsolète dans 18 mois pèse plus lourd, en impact total, qu'un composant moyen mais durable.

> [!livrable] Livrable 2/3 — Écoconception
> Réduction d'impact incarnée dans les choix techniques élec et info embarqué, attestée par :
> - **Continu** : critères écoconception explicites dans les choix de composants, d'architecture PCB et de structure logicielle
> - **Jalonné** : à chaque revue de phase, justification des choix écoconçus sur les quatre fronts (sobriété énergétique, durée de vie, démontabilité, sobriété logicielle)

### 3. Tracer

La traçabilité est **la dimension qui rend l'écoconception opposable**. Sans elle, les arbitrages écoconçus restent dans la tête de l'équipe, disparaissent au moindre changement de composant en cours de projet, et se réduisent à un paragraphe générique en rapport final. Avec elle, ils traversent le projet comme une ligne directrice continue. Cette traçabilité est largement **pilotée par la [[gestion-de-projet|gestion de projet]]** — c'est la GdP qui rythme les revues, tient la matrice de risques, structure le dossier technique. La trame écoconception se cale sur ce pilotage : elle ne crée pas sa propre cadence, elle s'inscrit dans celle qui existe déjà.

Trois pratiques de traçabilité structurent ce bloc.

1. **Intégrer le critère écoconception dans les matrices de décision** dès le concept. Pas en commentaire de bas de tableau, pas en colonne accessoire — comme **ligne ou groupe de lignes pondérées au même titre que les autres critères**. Cette intégration est l'acte le plus structurant des trois : un critère qui pèse dans la pondération oriente effectivement la décision ; un critère qui se contente d'apparaître en marge n'oriente rien. Les matrices de décision deviennent ainsi les premiers documents traçables où l'écoconception laisse une trace écrite, datée, défendable.

2. **Suivre les risques écoconception dans la [[matrice-de-risques|matrice de risques]]** du projet, au même titre que les risques techniques ou planning. Risques typiques : indisponibilité d'un composant à durée de vie longue, fournisseur qui n'a pas la certification annoncée, matériau écarté tardivement par une contrainte de fabrication, dépendance à un composant en fin de cycle commercial. Ces risques ont les mêmes attributs (probabilité, gravité, parade) que les autres et la même cadence d'actualisation — révision à chaque revue de phase.

3. **Consacrer une annexe écoconception au [[dossier-technique|dossier technique]]** listant les arbitrages retenus et leur justification. Format simple : un tableau à trois colonnes (choix retenu / alternatives écartées / justification environnementale), une ligne par arbitrage structurant. Pas un essai littéraire — un récapitulatif factuel qui rend les décisions vérifiables et défendables en soutenance.

À la soutenance, l'écoconception se restitue comme un **fil traversant** le projet, pas comme une section finale ajoutée. Le jury (ou l'enseignant) doit pouvoir suivre la cohérence du fil entre la première matrice de décision en concept, les choix arbitrés en dossier technique, et le système livré en intégration. Une écoconception bien tracée tient en quelques minutes de présentation parce qu'elle s'appuie sur des documents produits tout au long du projet — elle ne demande pas de slide dédiée.

> [!example] Exemple : projet bras 3 axes
> Annexe écoconception du [[dossier-technique|dossier technique]] : un tableau à 4 lignes (**choix moteurs steppers**, **deep sleep [[microcontroleur|microcontrôleur]]**, **connectique JST**, **choix [[pla|PLA]] pour pièces 3D**), 3 colonnes (choix retenu / alternatives écartées / justification environnementale). Le quatrième arbitrage (PLA) est explicitement marqué **« délégation cours matériaux »** — la trame n'argumente pas sur la recyclabilité comparée des bioplastiques, elle renvoie au cours dédié pour la justification matériau et se contente d'archiver le choix tel qu'il a été acté avec l'enseignant concerné.

> [!tip] Astuce
> **L'écoconception n'a pas besoin d'une section dédiée — elle a besoin d'être visible partout.** Plutôt qu'un chapitre « Écoconception » ajouté en fin de rapport, intégrer une mention par section où c'est pertinent : critère écoconception dans le tableau comparatif (état de l'art), [[FC]] sur les matériaux dans la [[pieuvre|pieuvre]], critère écoconception dans chaque [[matrice-de-decision|matrice de décision]], jalon d'éco-vérification en revue de phase, annexe d'arbitrages dans le dossier technique. Cette intégration **diffusée** vaut mieux qu'une section concentrée et isolée.

> [!livrable] Livrable 3/3 — Écoconception
> Traçabilité des arbitrages écoconçus tenue sur toute la durée du projet, attestée par :
> - **Continu** : présence de l'écoconception dans les revues de phase et dans la [[matrice-de-risques|matrice de risques]]
> - **Jalonné** : annexe écoconception du [[dossier-technique|dossier technique]] listant les arbitrages retenus et leur justification, présentée et défendue en soutenance

---

## Pièges fréquents

- **Traiter l'écoconception comme un chapitre de fin de rapport.** Une section ajoutée après coup qui ne pèse sur aucun choix technique : c'est un paragraphe d'affichage, pas une démarche.
- **Réduire l'écoconception au seul choix de matériaux**, en oubliant qu'elle se joue tout autant côté électronique (sobriété énergétique, durée de vie composants, démontabilité PCB) et côté logiciel (sobriété logicielle).
- **Empiéter sur le terrain des cours collègues** : produire une [[acv-simplifiee|ACV]] ad hoc dont la méthodologie n'a pas été validée par les disciplines compétentes, ou argumenter en interne sur la recyclabilité de matériaux qu'on ne maîtrise pas.
- **Évaluer après les choix techniques**, quand l'évaluation ne peut plus rien orienter — au mieux justifier *a posteriori* ce qui a déjà été décidé.
- **Sur-optimiser un seul critère environnemental** au détriment de la cohérence globale du système — un composant ultra-sobre mais obsolète dans 18 mois pèse plus lourd qu'un composant moyen mais durable.
- **Confondre écoconception et greenwashing** — la traçabilité des arbitrages écoconçus n'est pas un argumentaire promotionnel, c'est une donnée d'ingénierie défendable en revue.

## Pendant cette phase, côté équipe

<!--
NOTE — SECTION RECONVERTIE POUR UNE TRAME TRANSVERSE
====================================================
Le titre de la section reste « Pendant cette phase, côté équipe » pour
aligner sur le template fiche-trame. Pour une trame transverse, son
contenu se reconvertit en :
1. Articulation avec les autres fils transverses (gestion-de-projet,
   sécurité-et-qualité).
2. Délégation explicite aux cours collègues (matériaux, fabrication,
   ACV) — spécificité forte de l'écoconception comme domaine d'interface.

Pattern établi sur `gestion-de-projet.md` le 25/05.
-->

L'écoconception ne fonctionne pas en autonomie : elle s'articule avec les deux autres fils transverses et délègue explicitement à plusieurs cours portés par les disciplines voisines. Trois articulations structurent cette section.

**Articulation avec la [[gestion-de-projet|gestion de projet]] — miroir asymétrique.** La GdP pilote l'écoconception au même titre qu'elle pilote la sécurité-qualité : elle l'intègre dans la cadence (rappel en revue de phase), dans la matrice de risques (risques écoconception au même titre que les risques techniques), dans les jalons (éco-vérification en revue). La trame écoconception ne crée donc pas ses propres temps formels — elle s'inscrit dans la cadence existante. La conséquence pratique : tenir l'écoconception ne demande pas de réunions supplémentaires, mais un **temps dédié en revue de phase** (5 à 10 minutes suffisent) et une présence explicite dans la matrice de risques actualisée. Sans cette présence dans la GdP, l'écoconception dérive hors du radar en quelques semaines.

**Articulation avec la [[securite-et-qualite|sécurité et qualité]] — croisements réglementaires.** L'écoconception croise la sécurité-qualité sur les normes environnementales ([[rohs|RoHS]], [[reach|REACH]], [[deee|DEEE]] notamment) qui ont à la fois une dimension de **conformité** (portée par la sécurité-qualité) et une dimension d'**orientation des choix techniques** (portée par l'écoconception). La règle de non-redondance est nette : la sécurité-qualité porte la conformité réglementaire stricto sensu — l'identification des normes applicables, la traçabilité du respect, les déclarations CE — l'écoconception porte l'arbitrage technique qui découle des contraintes correspondantes (par exemple : choisir une alternative à un composant contenant une substance restreinte par REACH). Quand un point se trouve à la frontière, le réflexe : le traiter dans les deux trames sous deux angles différents, pas dans une seule au détriment de l'autre.

**Délégation explicite aux cours collègues.** Spécificité forte de l'écoconception : une part importante du domaine relève des disciplines voisines et doit être renvoyée sans hésitation. Sont portés ailleurs : choix et caractérisation des **matériaux** ([[pla|PLA]], [[abs|ABS]], métaux, composites — cours matériaux), **procédés de fabrication** et leur impact ([[usinage|usinage]], [[impression-3d|impression 3D]], [[soudure|soudure]] — cours fabrication), **analyse de cycle de vie complète** suivant ISO 14040 (cours ACV dédié), **normes environnementales pointues** au-delà de [[rohs|RoHS]]/[[reach|REACH]]/[[deee|DEEE]]. La trame écoconception cite chacun de ces domaines quand un arbitrage les touche, **mais ne les redouble pas en interne**. Un étudiant qui produirait une ACV ad hoc sans validation du cours dédié construit un argumentaire fragile que la soutenance révélera comme tel.

## Conclusion

<!--
NOTE — CONCLUSION ADAPTÉE POUR UNE TRAME TRANSVERSE
===================================================
Pas de phase suivante à pointer (vs les trames de phase). La conclusion
récapitule la nature continue de la trame et renvoie au hub pour
recontextualiser dans le cycle en V global.
-->

À l'issue du projet, l'écoconception aura **traversé les 5 phases du cycle en V** sans constituer une section ou un livrable séparé — elle se sera incarnée dans les choix techniques, dans les [[matrice-de-decision|matrices de décision]], dans la [[matrice-de-risques|matrice de risques]], dans le [[dossier-technique|dossier technique]]. Une écoconception réussie ne se voit pas comme un addendum ; elle se mesure à la **cohérence des arbitrages** sous l'angle environnemental tout au long du projet. Voir le [[index|hub du parcours projet]] pour replacer cette trame dans le cycle en V global, et les fiches [[gestion-de-projet|gestion de projet]] et [[securite-et-qualite|sécurité et qualité]] pour les deux autres fils transverses avec lesquels elle s'articule.

## Voir aussi

- [[index|Hub du parcours projet]]
- [[matrice-eat|Matrice EAT]] *(à créer — outil canonique de cette trame)*
- [[acv-simplifiee|ACV simplifiée]] *(à créer — citée et déléguée aux cours collègues pour la version complète)*
- [[matrice-de-decision|Matrice de décision]] *(à créer — porte le critère écoconception)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — pilote l'écoconception)*
- [[securite-et-qualite|Sécurité et qualité]] *(fil transverse — à créer)*
