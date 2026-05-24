---
title: Gestion de projet
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

La **gestion de projet** est un **fil transverse** qui court sur toute la durée du projet [[mecatronique|mécatronique]] : rythmer le travail de l'équipe, outiller la coordination, anticiper les aléas. Elle ne se déclenche pas à une phase précise — elle se tient en continu, de la [[specification-technique|spécification technique]] à l'[[integration-et-tests|intégration et tests]]. Les phases du cycle en V en sont l'objet ; la gestion de projet en est la cadence.

## Posture attendue

La tentation, sur la gestion de projet, est de la réduire à un Gantt dessiné en début de projet et laissé tel quel jusqu'à la soutenance. Résistez. La gestion de projet n'est pas un livrable de phase, c'est une **posture continue** : actualiser les outils à chaque revue, animer les points hebdomadaires, lever les incertitudes avant qu'elles deviennent des retards. La compétence-clé enseignée par cette trame : **maintenir un projet vivant** — un planning qu'on ne tient pas ment, un risque qu'on ne révise pas dort.

## Objectif

**Maintenir une coordination vivante du projet** sur toute sa durée :

- un **planning** ([[wbs|WBS]] + [[jalons]] + [[retroplanning|rétroplanning]] + [[gantt|Gantt]]) actualisé à chaque revue de phase
- une **[[matrice-de-risques|matrice de risques]]** tenue et révisée selon les apprentissages successifs
- une **cadence** structurée (points hebdomadaires, revues de phase, soutenance finale)
- une **traçabilité** des décisions et des engagements pris en équipe
- une **anticipation** des aléas inter-disciplines et des dépendances externes (commandes, fablab, encadrants)

Cette tenue s'incarne dans les livrables des 5 phases du cycle en V et dans la qualité d'animation de l'équipe en clôture.

## Démarche

<!--
NOTE — DÉROGATION À LA CONVENTION « N ÉTAPES ORDONNÉES »
========================================================
La gestion de projet est une trame transverse : les 3 blocs ci-dessous
sont **co-actifs** sur toute la durée du projet, pas une séquence à
parcourir une fois. Le mot « Démarche » est conservé pour aligner la
structure de fiche sur le template `fiche-trame.md` (variante « Mener
la gestion de projet » jugée équivalente, à arbitrer à l'usage si la
clarté étudiant l'impose).

Convention v2.1 transposée : « au moins 1 [!example] par étape » devient
« au moins 1 [!example] par bloc » — incarnation bras 3 axes ponctuelle
sur les 15 semaines, pas en panorama unique.

Format [!livrable] adopté pour les transverses : sous-listes « Continu »
et « Jalonné » pour rendre visible le double régime de production
(décision 25/05, à propager aux 2 autres transverses).
-->

La gestion de projet se tient sur trois fronts qui s'activent **en parallèle** dès le lancement et jusqu'à la soutenance : **rythmer** le projet (la cadence), **outiller** la gestion (le matériel), **tenir la posture** (l'humain). Ces trois blocs ne se déroulent pas dans un ordre — ils se tiennent ensemble.

### 1. Rythmer le projet

Le rythme d'un projet ingénieur repose sur trois cadences imbriquées qui se renforcent mutuellement. Les **[[jalons]]** structurent le parcours en quelques points de validation espacés sur le semestre — ce sont les moments où l'avancement bascule, où une phase est officiellement close pour ouvrir la suivante. À chaque jalon correspond une **revue de phase** : un temps de validation collégiale plus formel, où l'équipe présente ses livrables, met à jour la [[matrice-de-risques|matrice de risques]] avec les apprentissages, et acte la transition. Entre ces jalons, le **point hebdomadaire** d'équipe maintient la cadence courte : 30 minutes à 1 heure, même créneau chaque semaine, partage de l'avancement et arbitrage des aléas du quotidien.

Cette cadence à trois niveaux fait le lien entre la planification posée en [[specification-technique|spécification technique]] et la vie réelle du projet. La spécification technique (étape 5) pose les outils ; cette trame enseigne **comment ils se tiennent dans la durée**. Le [[retroplanning|rétroplanning]] ancre la date de soutenance et la marge ; le [[gantt|Gantt]] matérialise les engagements semaine par semaine ; la matrice de risques s'actualise à chaque revue. La fréquence d'actualisation suit naturellement la cadence : le Gantt bouge à chaque point hebdomadaire (souvent peu de modifications, mais traçabilité tenue) ; la matrice de risques est révisée à chaque revue de phase (une fois par jalon du cycle en V, sur toute la durée du projet) ; le rétroplanning se modifie rarement — sauf bascule majeure, qui doit alors être signalée explicitement à l'encadrant comme un événement à part entière.

Le rythme n'est pas un confort méthodologique, c'est un outil de pilotage. Une équipe qui tient sa cadence détecte les retards en quelques jours, pas en quelques semaines. Une équipe qui la perd découvre ses dépassements en revue de phase, trop tard pour corriger sans casse.

> [!example] Exemple : projet bras 3 axes
> Sur un projet de 15 semaines, cinq jalons : **revue de CdCF en semaine n°3**, **PoC en semaine n°6**, **dossier technique en semaine n°11**, **intégration en semaine n°14**, **soutenance en semaine n°15**. Premier point hebdomadaire posé en semaine n°2 (1 heure, mardi 10h, créneau tenu jusqu'à la fin du projet). En semaine n°6, la revue de PoC fait remonter une **incertitude couple** confirmée par le banc d'essai — la matrice de risques passe de 5 à 7 lignes actives, la parade « renforcer la transmission » est inscrite et planifiée en dossier technique. En semaine n°9, le point hebdomadaire est volontairement raccourci en stand-up de 15 minutes pour préserver le temps de fabrication, sans abandonner la cadence.

> [!livrable] Livrable 1/3 — Gestion de projet
> Tenue effective de la cadence sur toute la durée du projet, attestée par :
> - **Continu** : un compte-rendu par point hebdomadaire, nommés selon la convention `JJ-MM-AAAA-point-hebdo`
> - **Jalonné** : un compte-rendu de revue de phase à chaque jalon, nommés `JJ-MM-AAAA-revue-<phase>`

### 2. Outiller la gestion

La gestion de projet mobilise cinq outils canoniques, tous posés dès l'étape 5 de [[specification-technique|spécification technique]] : le [[wbs|WBS]] (découpage du projet en éléments traçables), les [[jalons]] (points de validation), le [[retroplanning|rétroplanning]] (planification à rebours depuis la soutenance), le [[gantt|Gantt]] (visualisation temporelle des tâches et dépendances), la [[matrice-de-risques|matrice de risques]] (anticipation des aléas et parades). Chaque outil fait l'objet d'une fiche dédiée que cette trame ne redouble pas — son rôle ici est de poser **comment ils s'articulent** sur la durée du projet et **comment les faire vivre**.

Le choix de l'outillage logiciel se fait dès le lancement et s'y tient. **Excel ou papier** suffisent pour la plupart des équipes étudiantes : un Gantt sous Excel reste lisible, partageable, et n'oblige personne à apprendre un nouvel outil pendant le projet. **GanttProject** offre un format dédié et des dépendances natives, mais demande quelques heures d'apprentissage initial — pertinent si l'équipe veut investir cette compétence. **Trello** est plus léger, orienté tâches et statuts (« à faire / en cours / fait »), mais perd la dimension temporelle continue d'un Gantt. D'autres outils existent (Notion, ClickUp, MS Project, etc.) ; le critère de choix n'est pas la sophistication mais l'**adhésion de l'équipe** à le tenir. Bascule en cours de projet rarement justifiée : le coût d'apprentissage et de migration consomme plus de temps qu'il n'en fait gagner.

Au-delà des outils de planification, la traçabilité repose sur trois pratiques : des **comptes-rendus de réunion** pour chaque point hebdomadaire et chaque revue de phase (forme courte, mais systématique : date, présents, décisions, engagements) ; un **registre d'engagements** consolidé (qui fait quoi pour quand, mis à jour à chaque point) ; un **archivage** centralisé sur un drive partagé avec une convention de nommage stable. Ces pratiques paraissent triviales — elles sont précisément ce qui distingue les équipes qui finissent dans les temps de celles qui découvrent une semaine avant la fin du projet que personne ne sait qui devait commander le câble d'alimentation.

> [!example] Exemple : projet bras 3 axes
> **Gantt** tenu sous Trello (board partagé entre les 4 équipiers, colonnes par discipline + une colonne « en blocage »), **matrice de risques** sous Excel partagé (5 risques en semaine n°2, 7 en semaine n°6 après PoC, 4 résiduels actifs en semaine n°11 après dossier technique), **comptes-rendus** archivés sur le drive d'équipe avec la convention `JJ-MM-AAAA-<type>` — par exemple `12-09-2025-revue-poc`. Choix Trello + Excel acté dès la première semaine, tenu jusqu'à la soutenance sans bascule, même quand la matrice est devenue plus dense après la revue de PoC.

> [!warning] Attention
> **Un outil non actualisé pèse plus lourd que pas d'outil du tout.** Un Gantt qui n'a pas bougé depuis trois semaines induit l'équipe en erreur sur l'avancement réel, brouille la lecture de l'encadrant, et dégrade la crédibilité de la trame entière. Mieux vaut un outil simple, tenu et imparfait qu'un outil sophistiqué abandonné en cours de route. L'engagement à actualiser un outil prime sur le choix de l'outil lui-même.

> [!livrable] Livrable 2/3 — Gestion de projet
> Outillage tenu sur toute la durée du projet, attesté par :
> - **Continu** : Gantt et matrice de risques actualisés à la cadence prévue (Gantt à chaque point hebdomadaire, matrice de risques à chaque revue de phase)
> - **Jalonné** : un registre d'engagements consolidé et présenté à chaque revue de phase

### 3. Tenir la posture

Les outils et la cadence ne suffisent pas — encore faut-il que l'équipe **les fasse vivre**. C'est la dimension humaine et organisationnelle de la trame, celle qui est la plus souvent sous-estimée parce qu'elle n'a pas de livrable graphique. Quatre fronts s'y jouent.

**Animer les points hebdomadaires.** Une animation tournante ou stable, peu importe — l'important est qu'il y ait un animateur identifié à chaque séance. Ordre du jour préparé la veille (état du Gantt, blocages, arbitrages à faire), durée tenue (30 minutes à 1 heure, pas plus), tour de table structuré. Le point hebdomadaire n'est pas le lieu pour résoudre les problèmes techniques en profondeur — il sert à les **identifier** et à planifier les rendez-vous techniques courts qui les résoudront.

**Tracer les décisions et les engagements.** Toute décision actée en réunion qui ne figure pas dans un compte-rendu est, en pratique, oubliée la semaine suivante. La discipline du CR n'est pas un formalisme — c'est ce qui rend les engagements opposables à l'intérieur de l'équipe. Format court (cinq lignes pour un point hebdomadaire suffisent), mais **systématique**.

**Anticiper les aléas inter-disciplines.** Les ruptures de cadence proviennent rarement d'une discipline isolée — elles viennent des **interfaces** : une commande électronique qui dépend d'une pièce mécanique imprimée 3D, un firmware qui attend une interface logicielle stable côté PC, une fabrication qui nécessite un créneau au fablab. Ces dépendances doivent être inscrites dans le Gantt comme telles, et faire l'objet de rendez-vous techniques courts entre disciplines concernées, anticipés d'une à deux semaines avant le besoin.

**Tenir la posture en cas de dépassement.** Quand l'équipe constate qu'un livrable ne sera pas tenu, trois options et une seule règle. Les options :

1. **Réajuster le périmètre** — la version minimale est livrée, l'option de raffinement passe en perspectives.
2. **Accepter le retard** en mobilisant la marge du rétroplanning et en signalant explicitement que la marge a été entamée.
3. **Alerter l'encadrant** pour un arbitrage.

La règle : **transparence immédiate**, pas de fuite en avant. Un retard signalé tôt coûte un point de contrôle ; le même retard découvert en revue de phase coûte la confiance de l'encadrant.

Pour le projet bras 3 axes, le commanditaire est l'enseignant de mécatronique et l'équipe est à la fois maître d'œuvre et maître d'ouvrage : posture **étudiant-client-de-lui-même**. L'enseignant n'arbitre pas les choix techniques au quotidien — il les valide en revue de phase. L'équipe doit donc s'imposer à elle-même la discipline qu'un client externe lui imposerait : faire des choix défendables, les tracer, les tenir.

> [!example] Exemple : projet bras 3 axes
> En semaine n°9, la fabrication imprimée 3D des supports d'axe prend une semaine de plus que prévu (créneau fablab repoussé, paramètres d'impression à recaler). L'équipe convoque un point méca/info en cours de semaine pour renégocier l'interface logicielle : la commande haut niveau est dégradée temporairement (positions cibles fixes au lieu de trajectoires interpolées) pour permettre les premiers tests d'intégration côté informatique sans attendre les supports. CR du point produit dans la journée, décisions actées, alerte précoce à l'encadrant. Le retard est absorbé sans débordement sur la suite — parce qu'il a été signalé, pas masqué.

> [!tip] Astuce
> **Mieux vaut un point hebdomadaire court et tenu qu'un point long et reporté.** Trente minutes fixes chaque semaine au même créneau structurent l'équipe et créent l'habitude ; deux heures « quand on a le temps » glissent et finissent par sauter. La régularité prime sur la profondeur : un point hebdomadaire dense mais court vaut mieux que la promesse d'un point exhaustif qui n'aura jamais lieu.

> [!livrable] Livrable 3/3 — Gestion de projet
> Posture tenue sur toute la durée du projet, attestée par :
> - **Continu** : points hebdomadaires animés et tracés, rendez-vous techniques inter-disciplines anticipés et inscrits au Gantt
> - **Jalonné** : à chaque revue de phase, présentation de la matrice de risques actualisée et de la liste des engagements tenus / réajustés

---

## Pièges fréquents

- Réduire la gestion de projet au Gantt initial dessiné en [[specification-technique|spécification technique]] et abandonné ensuite
- Confondre les outils (Gantt, matrice de risques) avec la gestion elle-même — les outils servent la posture, ils ne la remplacent pas
- Tenir les points hebdomadaires sans compte-rendu — les décisions partent en fumée, les engagements ne sont plus opposables
- Différer l'alerte à l'encadrant en cas de dépassement (la fuite en avant coûte plus cher qu'un point de contrôle anticipé)
- Découvrir les contraintes du fablab ou des commandes externes une semaine avant le besoin
- Bascule d'outil en cours de projet sans nécessité forte — le coût d'apprentissage et de migration efface le bénéfice

## Pendant cette phase, côté équipe

<!--
NOTE — SECTION RECONVERTIE POUR UNE TRAME TRANSVERSE
====================================================
Le titre de la section reste « Pendant cette phase, côté équipe » pour
aligner sur le template fiche-trame. Pour une trame transverse, son
contenu se reconvertit en **articulation avec les deux autres fils
transverses** (écoconception et sécurité-qualité), que la gestion de
projet pilote sans s'y substituer (décision actée 25/05).
-->

La gestion de projet ne se contente pas de piloter son propre territoire — elle est aussi le **chef d'orchestre des autres fils transverses**, [[ecoconception|écoconception]] et [[securite-et-qualite|sécurité et qualité]]. Trois pratiques structurent cette articulation.

**Intégrer dans la cadence.** Les revues de phase ne sont pas que des points d'avancement technique : ce sont aussi les moments où l'écoconception est rappelée — les critères des matrices de décision ont-ils été tenus en concept ? Les choix en dossier technique restent-ils cohérents avec les options d'écoconception retenues ? — et où la sécurité-qualité est revue — les contraintes réglementaires identifiées en spécification technique sont-elles toujours intégrées ? Les nouvelles dépendances en imposent-elles d'autres ? Ces rappels ne demandent pas un temps long (5 à 10 minutes par fil en revue de phase suffisent), mais leur absence laisse les transverses dériver hors du radar.

**Intégrer dans la matrice de risques.** Les risques écoconception (un fournisseur qui n'a pas la certification annoncée, une pièce qui s'avère non recyclable, un matériau écarté tardivement) et sécurité-qualité (un défaut de conformité CE, une exposition imprévue d'un public, une non-conformité réglementaire en fin de projet) doivent figurer dans la matrice de risques au même titre que les risques techniques. Ils ont les mêmes attributs (probabilité, gravité, parade) et la même cadence d'actualisation.

**Ne pas écraser, ne pas redoubler.** La gestion de projet **pilote** mais ne **fait** pas l'écoconception et la sécurité-qualité — ces deux trames ont leurs propres démarches, leurs propres livrables, leur propre posture. Le rôle de la gestion de projet est de garantir qu'elles ne tombent pas en oubli, pas de les remplacer.

## Conclusion

<!--
NOTE — CONCLUSION ADAPTÉE POUR UNE TRAME TRANSVERSE
===================================================
Pas de phase suivante à pointer (vs les trames de phase). La conclusion
récapitule la nature continue de la trame et renvoie au hub pour
recontextualiser dans le cycle en V global.
-->

À l'issue du projet, la gestion de projet aura **traversé les 5 phases du cycle en V sans interruption** — chaque phase y a contribué par ses propres livrables, chaque revue y a trouvé son moment de mise à jour, chaque point hebdomadaire en a ancré la cadence. Une gestion de projet réussie ne se voit pas ; elle se mesure à l'absence des accidents qu'elle a évités. Voir le [[index|hub du parcours projet]] pour replacer cette trame dans le cycle en V global, et les fiches [[ecoconception|écoconception]] et [[securite-et-qualite|sécurité et qualité]] pour les deux autres fils transverses qu'elle pilote.

## Voir aussi

- [[index|Hub du parcours projet]]
- [[wbs|WBS]] *(à créer)*
- [[jalons|Jalons]] *(à créer)*
- [[retroplanning|Rétroplanning]] *(à créer)*
- [[gantt|Gantt]] *(à créer)*
- [[matrice-de-risques|Matrice de risques]] *(à créer)*
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[securite-et-qualite|Sécurité et qualité]] *(fil transverse — à créer)*
