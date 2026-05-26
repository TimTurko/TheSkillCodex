---
title: Sécurité et qualité
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
aa: []
draft: false
---

La **sécurité et qualité** est un **fil transverse** qui veille à deux exigences indissociables du projet [[mecatronique|mécatronique]] : protéger les personnes — utilisateurs comme équipe — et garantir la traçabilité documentaire qui rend les choix techniques défendables. Comme la [[gestion-de-projet|gestion de projet]] et l'[[ecoconception|écoconception]], elle ne se déclenche pas à une phase précise — elle s'installe en continu, de la [[specification-technique|spécification technique]] à l'[[integration-et-tests|intégration et tests]]. Elle s'articule avec les disciplines voisines (mécanique, fabrication) et avec les expertises normatives portées par les enseignants spécialisés.

## Posture attendue

La tentation, sur la sécurité et qualité, est de la réduire à un addendum de fin de rapport — un paragraphe sur les normes CE, une mention rapide des EPI utilisés. Résistez. La sécurité et qualité n'est ni une case à cocher, ni un dossier produit en fin de projet : c'est une **vigilance intégrée à chaque décision technique** et une **discipline de traçabilité** qui court tout le long du semestre. La compétence-clé enseignée par cette trame : **protéger sans paralyser, tracer sans noyer** — porter ce qui relève de l'expertise élec et info embarquée pédagogique (architecture sûre, revues de code, traçabilité versions, plan de tests), citer et déléguer ce qui relève de la conformité réglementaire pointue ou des risques métiers spécifiques (basse tension, EMC, ISO 12100, usinage) aux disciplines compétentes.

## Objectif

**Maintenir une démarche sécurité-qualité** intégrée aux choix techniques et à la cadence du projet :

- une **sécurité produit** anticipée par l'analyse des risques utilisateur (énergie stockée, contacts, organes mobiles) et incarnée dans l'architecture (arrêt d'urgence, protections, isolations, butées)
- une **sécurité projet** garantie par des règles fermes d'atelier et de manipulation (formations préalables, EPI, binôme obligatoire)
- une **qualité documentaire** tenue par un plan de revues, une traçabilité des versions matérielle ([[pcb|PCB]]) et logicielle ([[firmware]] sous Git), et un dossier sécu distribué dans les livrables des 5 phases
- une **articulation explicite** avec les cours normatifs portés par les disciplines voisines ([[marquage-ce|marquage CE]], directive [[basse-tension]], [[emc|EMC]], [[iso-12100|ISO 12100]])

Cette démarche s'incarne transversalement dans les livrables des 5 phases du cycle en V, pas dans un livrable séparé.

## Démarche

<!--
NOTE — DÉROGATION À LA CONVENTION « N ÉTAPES ORDONNÉES »
========================================================
La sécurité et qualité est une trame transverse : les 3 blocs ci-dessous
sont **co-actifs** sur toute la durée du projet, pas une séquence à
parcourir une fois. Le mot « Démarche » est conservé pour aligner la
structure de fiche sur le template `fiche-trame.md` (pattern transverse
établi sur `gestion-de-projet.md` puis `ecoconception.md` le 25/05).

Choix d'architecture des 3 blocs (acté 26/05 fin de session) :
1. Sécurité produit (utilisateur final)
2. Sécurité projet (équipe en cours de fabrication)
3. Qualité documentaire

Sécurité et qualité sont tressées dans chaque bloc : chaque bloc embarque
sa propre logique d'anticipation, de contrôle et de trace. Le bloc 3
cristallise le volet qualité documentaire au sens strict (plan de revues,
traçabilité versions, dossier sécu distribué).

Convention v2.1 transposée : « au moins 1 [!example] par étape » devient
« au moins 1 [!example] par bloc » — incarnation bras 3 axes ponctuelle
sur les 15 semaines, pas en panorama unique.

Format [!livrable] transverse : sous-listes « Continu » et « Jalonné »
dans chaque livrable, pour rendre visible le double régime de production
(convention transverse établie sur `gestion-de-projet.md` le 25/05).
-->

La sécurité et qualité se tient sur trois fronts qui s'activent **en parallèle** dès la [[specification-technique|spécification technique]] et jusqu'à la soutenance : **protéger l'utilisateur final** (sécurité produit), **protéger l'équipe en cours de fabrication** (sécurité projet), **tracer ce qui a été fait et pourquoi** (qualité documentaire). Ces trois blocs ne se déroulent pas dans un ordre — ils se nourrissent mutuellement et tournent en continu, sécurité et qualité tressées dans chacun.

### 1. Sécurité produit (utilisateur final)

**Identifier les risques utilisateur dès la spécification.** Tout système mécatronique embarque des sources de risque : énergie cinétique des organes mobiles, énergie électrique stockée, échauffements, parties tranchantes ou pinçantes, émissions (lumière, son, rayonnements). L'analyse se conduit en [[specification-technique|spécification technique]], dans la [[pieuvre|pieuvre]] via les [[FC]] sécurité-utilisateur, et se complète à l'arbitrage en [[concept|concept]] quand l'architecture précise les organes mobiles et les niveaux d'énergie. Une **analyse de risques** type [[amdec|AMDEC]] produit (ou variante allégée pédagogique) liste les modes de défaillance possibles, leur gravité, leur probabilité et la parade prévue. La trame ne porte pas la méthode AMDEC en détail — elle relève des cours dédiés — mais elle en porte l'intégration au cycle du projet.

**Inscrire la sécurité dans l'architecture, pas en surcouche.** Une fois les risques identifiés, les parades prennent corps dans les choix techniques : **arrêt d'urgence** câblé en coupure directe de la puissance (pas via le [[firmware]], qui peut planter), **isolation galvanique** sur les interfaces opérateur, **butées mécaniques** en complément des butées logicielles, **fusibles** dimensionnés au juste besoin, **carter** sur les zones à risque de contact. La règle d'architecture : aucune fonction de sécurité critique ne doit reposer uniquement sur le logiciel — un défaut firmware ne doit pas pouvoir compromettre la sécurité utilisateur. Cette discipline est l'un des marqueurs principaux d'un système ingénieur vs un prototype amateur.

**Valider en intégration, pas en mise en service.** La sécurité produit se vérifie pendant la phase d'[[integration-et-tests|intégration et tests]], au même titre que les fonctions du [[cahier-des-charges-fonctionnel|CdCF]]. Les tests de sécurité font partie du niveau 4 de qualification : arrêt d'urgence testé en conditions réelles (avec organe en mouvement), butées vérifiées en simulation de dépassement, isolation contrôlée à l'ohmmètre. Un système qui n'a jamais testé son arrêt d'urgence n'a pas d'arrêt d'urgence — il a un bouton rouge.

**Citer et déléguer ce qui relève du normatif pointu.** Conformité [[marquage-ce|marquage CE]], directive [[basse-tension]], compatibilité électromagnétique ([[emc|EMC]]), [[iso-12100|ISO 12100]] sécurité des machines, classes d'isolation, indices IP / IK : ces normes ont un volet d'expertise propre porté par les disciplines [[ese|ESE]] et par les cours dédiés. La trame les **cite quand elles s'appliquent** au projet étudiant, les **intègre en contraintes** dans la pieuvre et le CdCF, mais ne les redouble pas. Un projet pédagogique ne vise pas un marquage CE réel — mais doit savoir identifier que tel composant relève de telle directive, et renvoyer à la fiche ou au cours correspondant.

> [!example] Exemple : projet bras 3 axes
> Risques utilisateur identifiés dès la spécification : **pincement** au niveau des 3 articulations en mouvement, **couple moteur** suffisant pour blesser un doigt coincé (steppers ~0,5 Nm en maintien), **énergie électrique** 24 V DC stockée dans le condensateur de bus alim (énergie limitée mais non négligeable au touché). Parades intégrées en concept : **arrêt d'urgence** champignon rouge en coupure directe de l'alim 24 V (validation au niveau 4 d'intégration en **semaine n°14**), **butées mécaniques** par fins de course doublant les butées logicielles, **carter [[pla|PLA]] imprimé** masquant les zones de pincement opérateur, **fusible 3 A** sur l'arrivée 24 V. Le bras reste un prototype pédagogique — pas de visée CE — mais le risque pincement est traité comme un risque réel, pas comme un détail de finition.

> [!livrable] Livrable 1/3 — Sécurité et qualité
> Sécurité produit anticipée et incarnée, attestée par :
> - **Continu** : critère sécurité-utilisateur présent dans la pieuvre (FC sécurité) et dans les matrices de décision concept, parades architecturales documentées dans le dossier technique
> - **Jalonné** : tests de sécurité (arrêt d'urgence, butées, isolation) exécutés et tracés au niveau 4 de qualification en intégration et tests

### 2. Sécurité projet (équipe en cours de fabrication)

**Identifier les risques côté équipe dès le lancement.** Un projet mécatronique met l'équipe au contact de risques propres à la fabrication : risque électrique en câblage et tests sous tension (24 V généralement maîtrisable, mais soudures d'alim et manipulation cartes sous tension), risque mécanique sur les machines d'atelier (perceuse, fraiseuse, machine de gravure à l'anglaise pour PCB monoface), risque chimique léger (résine de gravure PCB, soudure à l'étain et flux), risque oculaire (projection en perçage, lumière intense des machines de gravure). Le risque n'est pas un risque industriel — il est pédagogique — mais il est réel et doit être nommé. La trame inscrit ces risques dans la [[matrice-de-risques|matrice de risques]] au même titre que les risques techniques ou planning, pour qu'ils restent visibles tout au long du projet et révisés à chaque revue de phase.

**Trois règles non négociables au quotidien.** Au-delà des [[epi|EPI]] standards (lunettes en perçage, gants quand pertinent, chaussures fermées, cheveux longs attachés), trois règles s'imposent comme garde-fous absolus du projet étudiant :

1. **Pas de travail sur du 230 V sans encadrant présent.** La basse tension 24 V des moteurs et microcontrôleurs est manipulable en autonomie après formation initiale. Le 230 V (alimentations secteur, transformateurs, lignes d'atelier) impose la présence physique d'un enseignant ou technicien — sans exception, sans dérogation pour cause d'urgence calendrier.

2. **Pas d'usage d'une machine sans formation préalable.** Toute machine d'atelier (perceuse à colonne, fraiseuse, machine de gravure PCB, équipements spécifiques fablab) impose une formation initiale validée par le responsable de l'équipement. La formation n'est pas une formalité — elle conditionne l'usage. Une équipe qui découvre une machine en cours de projet doit programmer cette formation comme une tâche du Gantt, pas l'improviser au pied de la machine.

3. **Jamais seul à l'atelier.** Le binôme minimum n'est pas un confort — c'est la condition pour pouvoir prévenir les secours en cas d'incident. Travailler seul à l'atelier ou au fablab, même pour cinq minutes, est interdit. Cette règle prime sur toutes les contraintes de planning.

**Les EPI ne sont pas un détail.** Lunettes de protection en perçage, en [[usinage]] et lors de la gravure PCB ; chaussures fermées en atelier ; cheveux longs attachés près des machines tournantes ; vêtements près du corps. Ces consignes ne relèvent pas de la trame en propre — elles sont portées par les responsables d'atelier et les cours fabrication. La trame en intègre la discipline dans le planning du projet (créneaux atelier identifiés, formations préalables programmées) et garantit qu'elles ne sont pas escamotées sous pression de calendrier.

**Articulation avec les responsables d'équipement.** Le responsable fablab, le responsable atelier mécanique, le responsable salle élec ne sont pas des fournisseurs de service — ce sont des **interlocuteurs métier** qui portent la culture de sécurité dans leur domaine. L'équipe les rencontre tôt, comprend leurs consignes, et les intègre comme contraintes structurantes du projet. Une équipe qui attend la dernière semaine pour solliciter le responsable fablab [[impression-3d|impression 3D]] découvre tard les délais, les paramètres et les règles ; une équipe qui anticipe peut intégrer ces contraintes dès le concept.

> [!example] Exemple : projet bras 3 axes
> En matrice de risques de l'équipe en **semaine n°2** : 3 risques projet identifiés — **risque électrique** sur la soudure d'alimentation 24 V (parade : binôme + formation [[soudure]] préalable en semaine n°3), **risque mécanique** sur l'usinage de l'articulation alu 6061 (parade : formation fraiseuse en semaine n°4 + encadrant présent obligatoire), **risque chimique léger** sur la résine de gravure PCB monoface (parade : gants + ventilation, encadrant présent obligatoire pour la machine à l'anglaise). Trois règles tenues sans exception sur les 15 semaines : pas de 230 V sans encadrant, pas de machine sans formation, jamais seul à l'atelier. Une dérogation envisagée en **semaine n°12** (un équipier seul pour finir une soudure le dimanche après-midi) a été refusée par l'équipe elle-même — le retard a été absorbé le lundi matin en binôme, sans dommage sur le calendrier global.

> [!warning] Attention
> **Une règle de sécurité projet ne se relâche jamais sous pression de planning.** Le retard est un coût acceptable ; un incident d'atelier ne l'est pas. Quand le calendrier presse, la bonne posture est de **dégrader le périmètre** (livrer une version minimale, repousser une option) ou d'**alerter l'encadrant** pour un arbitrage — jamais de transiger sur les règles de manipulation. Une équipe qui acquiert cette discipline dans un projet pédagogique l'emportera durablement dans sa vie professionnelle ; une équipe qui apprend à les contourner reprendra le même réflexe à enjeux plus lourds.

> [!livrable] Livrable 2/3 — Sécurité et qualité
> Sécurité projet tenue sur toute la durée du projet, attestée par :
> - **Continu** : 3 règles tenues sans exception (pas de 230 V sans encadrant, pas de machine sans formation, jamais seul à l'atelier), risques projet présents dans la matrice de risques et révisés à chaque revue de phase
> - **Jalonné** : formations préalables aux machines programmées en amont des phases de fabrication, validation par le responsable d'équipement tracée

### 3. Qualité documentaire

**Un plan de revues posé dès la spécification.** La qualité documentaire repose d'abord sur un **échéancier de revues** identifié dès la spécification technique et tenu jusqu'à la soutenance. Cet échéancier est structuré par les jalons du cycle en V : **revue de CdCF** (clôture spécification), **revue de concept** (clôture concept), **revue de PoC** (clôture preuve de concept), **revue de dossier technique** (clôture dossier technique), **revue de qualification** (clôture intégration), **soutenance finale**. Chaque revue est annoncée, préparée par les livrables de la phase, et **tracée par un compte-rendu** qui acte le passage. Cette cadence est largement pilotée par la [[gestion-de-projet|gestion de projet]] — la qualité documentaire s'y inscrit, elle ne crée pas une cadence parallèle.

**Une traçabilité des versions matérielle et logicielle.** Toute évolution d'un livrable structurant doit pouvoir être datée et expliquée. Trois pratiques canoniques côté élec et info embarquée :

1. **Numéro de révision sérigraphié sur les [[pcb|PCB]].** Tout PCB porte une mention « Rev A », « Rev B » directement sérigraphiée sur la carte. À chaque modification du routage, un nouveau numéro. La révision est tracée dans le dossier technique avec ce qui a changé et pourquoi. Un PCB sans numéro de révision devient inutilisable en débogage tardif — l'équipe ne sait plus quelle version est sur la table.

2. **Tags Git par jalon pour le [[firmware]].** Le code embarqué est versionné sous Git ; à chaque jalon majeur (PoC, dossier technique, qualif, soutenance), un tag est posé sur le commit correspondant. La discipline permet de revenir précisément à la version qualifiée du firmware en cas de régression introduite ultérieurement. Un projet sans Git ne tient pas la qualité documentaire ; un projet avec Git mais sans tags reste fragile.

3. **[[revue-de-code|Revue de code]] croisée à chaque jalon.** Avant chaque jalon, une revue croisée entre équipiers (au minimum) ou avec l'encadrant (idéalement) regarde les morceaux critiques du firmware — fonctions de sécurité, gestion des interrupts, machine à états. La revue ne cherche pas la perfection — elle cherche les défauts manifestes qu'un regard extérieur attrape immédiatement et que l'auteur du code, trop proche, ne voit plus.

**Un dossier de sécu structuré et défendable.** Le dossier de sécu n'est pas une section unique du rapport — il est **distribué dans les livrables des 5 phases** : analyse des risques utilisateurs en spécification, parades architecturales en concept, vérifications matérielles en preuve de concept, plans détaillés en dossier technique, tests de qualification sécurité en intégration. À la soutenance, ce dossier se lit comme un **fil cohérent traversant le projet**, pas comme un chapitre tardif. La preuve de qualité documentaire est la capacité du jury à suivre ce fil sans rupture.

**Une articulation explicite avec les normes citées.** La qualité documentaire intègre les normes pertinentes au projet ([[rohs|RoHS]], [[reach|REACH]], [[deee|DEEE]] côté écoconception, [[marquage-ce|marquage CE]] / [[basse-tension]] / [[emc|EMC]] / [[iso-12100|ISO 12100]] côté sécurité produit), mais ne les redouble pas. Pour chaque norme touchée, la trace documentaire prend la forme d'une **ligne dans le dossier technique** mentionnant la norme, le composant ou le sous-système concerné, et le renvoi au cours ou à la fiche normative dédiée. La règle : citer pour tracer, déléguer pour la profondeur.

> [!example] Exemple : projet bras 3 axes
> Plan de revues posé en **semaine n°2** et tenu sans glissement : revue de CdCF (**semaine n°3**), revue de concept (**semaine n°5**), revue de PoC (**semaine n°6**), revue de dossier technique (**semaine n°11**), revue de qualif (**semaine n°14**), soutenance (**semaine n°15**). Traçabilité matérielle : PCB monoface gravé en interne école **Rev A** sérigraphié en semaine n°9, **Rev B** en semaine n°10 après cohérence dossier-technique (ajout de 3 condensateurs 100 nF de découplage), tracé dans le dossier technique. Traçabilité logicielle : dépôt Git initialisé en semaine n°2, tags `v0.1-poc` (semaine n°6), `v0.2-dossier` (semaine n°11), `v1.0-qualif` (semaine n°14), `v1.0.1-soutenance` (semaine n°15). Revue de code croisée à chaque tag, 30 minutes minimum, focus sur la gestion d'interrupts de l'arrêt d'urgence et la machine à états des butées. Dossier de sécu distribué : analyse des risques en spécification (3 risques utilisateur), parades en concept (arrêt d'urgence + butées + carter + fusible), validation en qualif (4 tests sécurité tracés). Citations normatives en dossier technique : 1 ligne par norme touchée (RoHS sur composants, EMC mentionnée sans visée certification, ISO 12100 citée pour la culture).

> [!tip] Astuce
> **Tracer au moment où la décision se prend, pas en fin de phase.** La discipline de traçabilité s'effondre quand on la reporte à la rédaction du rapport — les justifications oubliées en deux semaines ne se reconstruisent pas fidèlement. La pratique qui tient : à chaque arbitrage acté en réunion d'équipe, une phrase écrite dans le document concerné le jour même (matrice de décision, dossier technique, registre d'engagements). Un compte-rendu de point hebdomadaire bien tenu suffit souvent à porter cette trace ; la qualité documentaire en aval n'est plus qu'un travail de mise en forme.

> [!livrable] Livrable 3/3 — Sécurité et qualité
> Qualité documentaire tenue sur toute la durée du projet, attestée par :
> - **Continu** : traçabilité versions PCB (numéros de révision sérigraphiés) et firmware (commits Git + tags par jalon), revues de code aux jalons, dossier de sécu distribué dans les livrables des 5 phases
> - **Jalonné** : un compte-rendu de revue à chaque jalon (CdCF, concept, PoC, dossier technique, qualif, soutenance) actant le passage et tracant les décisions

---

## Pièges fréquents

- **Reporter la sécurité à la fin du projet.** L'analyse des risques utilisateur ne se conduit pas en intégration — elle se pose en spécification, dans la pieuvre via les FC sécurité-utilisateur, et s'arbitre en concept. Une sécurité produit ajoutée tard se résume à un addendum cosmétique qui ne pèse sur aucun choix technique.
- **Faire reposer une fonction de sécurité critique uniquement sur le logiciel.** Un défaut firmware ne doit pas pouvoir compromettre l'utilisateur. L'arrêt d'urgence se câble en coupure directe de la puissance ; les butées logicielles sont doublées par des butées mécaniques.
- **Tester l'arrêt d'urgence trop tard ou pas du tout.** Un système qui n'a jamais testé son arrêt d'urgence n'en a pas un — il a un bouton rouge. Le test fait partie de la qualification sécurité en intégration, en conditions réelles avec organe en mouvement.
- **Confondre sécurité projet et sécurité produit.** Les deux fronts ne se traitent pas avec les mêmes outils ni les mêmes interlocuteurs. La sécurité projet vise l'équipe pendant la fabrication (EPI, formations, règles d'atelier) ; la sécurité produit vise l'utilisateur final (architecture, arrêt d'urgence, conformité).
- **Transiger sur les règles d'atelier sous pression de planning.** Pas de 230 V sans encadrant, pas de machine sans formation, jamais seul : ces règles ne se relâchent pas. Un retard est un coût acceptable ; un incident, non.
- **Découvrir tard le responsable fablab ou les contraintes d'atelier.** Une équipe qui sollicite le responsable d'équipement la semaine du besoin découvre tard les délais, les formations préalables, les paramètres. Anticiper d'au moins deux semaines.
- **Tenir la traçabilité en différé, à la rédaction du rapport.** Les justifications de décisions oubliées en deux semaines ne se reconstruisent pas fidèlement. La trace s'écrit le jour de la décision, dans le document concerné.
- **Versionner le firmware sans poser de tags.** Un dépôt Git sans tags par jalon ne permet pas de revenir précisément à la version qualifiée. La traçabilité versions n'est pas l'existence du dépôt, c'est la discipline des points stables tagués.
- **PCB sans numéro de révision sérigraphié.** Une équipe qui produit plusieurs révisions sans les distinguer matériellement perd la trace de ce qui est sur la table. La sérigraphie « Rev A » / « Rev B » est triviale à intégrer au routage et indispensable au débogage tardif.
- **Empiéter sur les normes pointues côté ESE.** Marquage CE, EMC, ISO 12100, classes d'isolation ont une expertise propre. La trame les cite et renvoie aux cours dédiés ; un argumentaire normatif construit en interne, sans validation, fragilise le rapport en soutenance.
- **Confondre dossier de sécu et chapitre dédié.** Le dossier de sécu se distribue dans les livrables des 5 phases (analyse, parades, vérifications, plans, tests), pas dans un chapitre unique tardif. Sa qualité se mesure à la cohérence du fil traversant le projet.

## Pendant cette phase, côté équipe

<!--
NOTE — SECTION RECONVERTIE POUR UNE TRAME TRANSVERSE
====================================================
Le titre de la section reste « Pendant cette phase, côté équipe » pour
aligner sur le template fiche-trame. Pour une trame transverse, son
contenu se reconvertit en :
1. Articulation avec les autres fils transverses (gestion-de-projet,
   écoconception).
2. Délégation explicite aux cours collègues (normatif pointu) et aux
   responsables d'équipement (sécurité projet en atelier).

Pattern transverse établi sur `gestion-de-projet.md` puis
`ecoconception.md` le 25/05.
-->

La sécurité et qualité s'articule avec les deux autres fils transverses et délègue explicitement à plusieurs cours et interlocuteurs portés par les disciplines voisines. Trois articulations structurent cette section.

1. **Intégrer dans la cadence projet.** La [[gestion-de-projet|gestion de projet]] pilote la trame sécurité-qualité au même titre qu'elle pilote l'[[ecoconception|écoconception]]. Les revues de phase intègrent un point sécu-qualité (5 à 10 minutes suffisent) : l'arrêt d'urgence est-il toujours dans l'architecture ? Les normes citées en spécification restent-elles applicables ? Le plan de tests sécurité est-il à jour ? Les 3 règles d'atelier sont-elles tenues ? Sans cette présence régulière en revue, la trame dérive hors du radar en quelques semaines.

2. **Intégrer dans la matrice de risques.** Les risques sécurité produit (défaillance d'un organe de sécurité, défaut de conformité réglementaire, exposition imprévue d'un public) et sécurité projet (incident d'atelier, indisponibilité d'une formation préalable, dépendance à un responsable d'équipement absent) figurent dans la [[matrice-de-risques|matrice de risques]] au même titre que les risques techniques ou planning. Mêmes attributs (probabilité, gravité, parade), même cadence d'actualisation à chaque revue de phase. La qualité documentaire trouve dans cette matrice un de ses supports les plus visibles.

3. **Piloter sans écraser.** La sécurité-qualité n'est pas le projet — elle l'accompagne. Un projet pédagogique ne vise pas une certification réelle (CE, ISO, etc.) ; il vise une culture sécurité-qualité **vivante** qui prépare les étudiants à les rencontrer en milieu industriel. La règle de non-écrasement : ne pas transformer le projet en exercice normatif où tout choix technique est tordu pour servir une mise en conformité simulée. Les normes se citent, s'intègrent en contraintes dans la pieuvre et le CdCF, mais ne dictent pas le projet.

Spécifique à cette trame, **délégation explicite aux disciplines voisines** sur deux fronts. Côté normatif pointu : [[marquage-ce|marquage CE]], directive [[basse-tension]], [[emc|EMC]], [[iso-12100|ISO 12100]], classes d'isolation, indices IP / IK — portés par les cours [[ese|ESE]] et les enseignants spécialisés. Côté fabrication : responsable fablab pour l'[[impression-3d|impression 3D]] et la transmission de fichiers STL, responsable atelier pour l'[[usinage]] et la [[soudure]], responsable salle élec pour la gravure [[pcb|PCB]] monoface et les manipulations 24 V. Ces interlocuteurs portent la culture sécurité de leur domaine — la trame s'y articule, ne la redouble pas.

## Conclusion

À l'issue du projet, la sécurité et qualité aura **traversé les 5 phases du cycle en V sans interruption** — chaque phase y aura contribué par une analyse, une parade, une vérification ou une trace. Une sécurité-qualité réussie ne se voit pas comme un addendum ; elle se mesure à la **cohérence du fil sécu** entre l'analyse des risques en spécification et les tests de qualification en intégration, et à la **lisibilité de la trace documentaire** que le jury de soutenance peut suivre sans rupture. Voir le [[index|hub du parcours projet]] pour replacer cette trame dans le cycle en V global, et les fiches [[gestion-de-projet|gestion de projet]] et [[ecoconception|écoconception]] pour les deux autres fils transverses avec lesquels elle s'articule.

## Voir aussi

- [[index|Hub du parcours projet]]
- [[matrice-de-risques|Matrice de risques]] *(porte les risques sécurité et qualité — à créer)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — pilote la sécurité-qualité)*
- [[ecoconception|Écoconception]] *(fil transverse — croisements réglementaires RoHS / REACH / DEEE)*
- [[amdec|AMDEC]] *(à créer — méthode d'analyse des risques produit)*
- [[marquage-ce|Marquage CE]] *(à créer — délégué cours normatifs)*
- [[basse-tension|Directive basse tension]] *(à créer — délégué cours normatifs)*
- [[emc|Compatibilité électromagnétique]] *(à créer — délégué cours normatifs)*
- [[iso-12100|ISO 12100]] *(à créer — délégué cours normatifs)*
- [[revue-de-code|Revue de code]] *(à créer — pratique de qualité logicielle)*
- [[epi|EPI]] *(à créer — équipement de protection individuelle)*
