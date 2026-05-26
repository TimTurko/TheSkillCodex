# Référentiel normalisé — TheSkillCodex

> **Source** : `_drafts/referentiel/Compétences.xlsx` (référentiel école I3.5 / I3.6, version reçue le 26/05/2026).
> **Normalisation effectuée le 26/05/2026** : suppression des doublons exacts du fichier source (5 critères dupliqués, voir notes par AA). Numérotation source **conservée** pour traçabilité — les trous (ex. `/MME/3` manquant entre `/MME/2` et `/MME/4`) marquent les doublons retirés. Typos source non corrigées dans les libellés ci-dessous, mais signalées en commentaire.
> **57 critères distincts** sur 62 lignes source, **12 AA**, **5 domaines** (EEE / ESE / MEO / MME / PROJ).

> Convention de codification : `<Code_RA>/<AA_DOMAIN>/<N°critère>` — ex. `RA-PROJET-C03-3/EEE/1`. Le `AA_DOMAIN` est nécessaire car un même RA porte parfois plusieurs AA dans des domaines différents.

---

## EEE — Électronique et informatique embarquée

### RA-PROJET-C03-3 [EEE]
*RA : Réaliser / fabriquer un système*
*AA : Analyser / Fabriquer un sous-ensemble fonctionnel électrique et électronique d'un système*

- **/1** (S1) — Identifier les composants d'un schéma et leurs rôles
- **/2** (S1) — Analyser le comportement d'un sous-ensemble d'un schéma (jusqu'au composant)
- **/3** (S2) — Effectuer une simulation du système électronique conçu ou d'une partie du système à l'aide de logiciels dédiés
- **/4** (S2) — Interpréter les résultats de la simulation effectuée
- **/5** (S2) — Concevoir / réaliser une carte électronique ou un ensemble de circuits électroniques pour l'acquisition de signaux des capteurs et/ou le traitements des signaux et/ou la transmission des signaux aux actionneurs et/ou la conversion statique de l'énergie électrique

### RA-EEE-C03-2 [EEE]
*RA : Concevoir un système électronique et/ou électrotechnique en tenant compte de l'aspect énergétique du système*
*AA : Mettre en œuvre une démarche de conception de système de contrôle / commande*

- **/1** (S1) — Choisir les capteurs et la technologie des actionneurs à l'aide d'une analyse théorique et/ou de tests effectués sur des moyens de prototypage rapide (Arduino, Raspberry, …)
- **/2** (S1) — Choisir les contrôleurs (système de contrôle / commande)
- **/3** (S1) — Sélectionner les sources d'énergie du système et dimensionner l'alimentation
- **/4** (S1) — Intégrer un ensemble de circuits électroniques (éventuellement existants) pour l'acquisition de signaux des capteurs, le traitement des signaux, la transmission des signaux aux actionneurs et la conversion statique de l'énergie électrique
- **/5** (S1) — Concevoir le système de commande du mécanisme par un algorithme à l'aide d'une méthode (exemple : logigramme, machine à états, grafcet, chronogramme, etc.)

---

## ESE — Écoconception, ACV

### RA-ESE-C09-2 [ESE]
*RA : Comprendre les enjeux de la transition écologique et les prendre en compte dans ses choix liés au domaine*
*AA : Évaluer et sélectionner des améliorations dans une démarche d'écoconception* *(typo source : « une une démarche d"éco-conception »)*

- **/1** (S2) — Mener l'ACV en prenant en compte l'ensemble des composants du système et l'ensemble des phases du cycle de vie
- **/2** (S2) — Interpréter les résultats de l'ACV en identifiant les phases les plus impactantes et les impacts associés *(typo source : « Interprêter »)*
- **/3** (S2) — Proposer des améliorations pour les différentes phases du cycle de vie
- **/4** (S2) — Évaluer les bénéfices de chaque amélioration en termes d'impact
- **/5** (S2) — Sélectionner les améliorations à mettre en œuvre et justifier ces choix

---

## MME — Matériaux, mécanique

### RA-MME-C02-1 [MME]
*RA : Analyser un système mécanique*
*AA : Analyser les matériaux et phénomènes mécaniques mis en jeu et les sollicitations mécaniques associées*

> Doublon source supprimé : `/MME/3` (identique à `/MME/2`). Numérotation source conservée → trou entre `/MME/2` et `/MME/4`.

- **/1** (S1) — Analyser les propriétés attendues du système afin de choisir les matériaux les plus adaptés
- **/2** (S1) — Sélectionner les procédés d'assemblage des composants mécaniques d'un système
- **/4** (S1) — Identifier les différentes sollicitations mécaniques du système étudié (traction, flexion, torsion, …) et les phénomènes mécaniques mis en jeu (effets inertiels, vibrations, déformation élastique …)
- **/5** (S1) — Réaliser un schéma cinématique du système *(typo source : « schema cinematique »)*
- **/6** (S1) — Déterminer les caractéristiques mécaniques nécessaires d'un actionneur (couple nominal, vitesse nominale, couple pic, vitesse maximale, …) afin de sélectionner un composant dans un catalogue fournisseur

### RA-MME-C03-1 [MME]
*RA : Concevoir des structures et des systèmes mécaniques*
*AA : Concevoir des structures et des systèmes mécaniques*

- **/1** (S1) — Lister les outils utilisés par les designers
- **/2** (S1) — Réaliser une note de calcul pour justifier le dimensionnement d'une transmission de puissance
- **/3** (S1) — Créer un assemblage mécanique avec un outil de CAO sur la base du schéma cinématique incluant des composants standards (ou achetés) et des composants conçus pour le projet
- **/4** (S2) — Identifier les paramètres influençant le comportement dynamique du système et les définir à partir des fichiers CAO (masse, position du centre de masse, …)
- **/5** (S2) — Réaliser une nomenclature à partir d'une CAO
- **/6** (S2) — Optimiser la conception de la ou des pièces en fonction de critère de performance à définir (coût, déformée maximale, …)

---

## MEO — Méthodes, organisation, animation

### RA-MEO-C10-3 [MEO]
*RA : Être capable de générer une dynamique et une intelligence collective, choisir les modes de coopération et de communication adaptés aux individus*
*AA : Utiliser des outils d'animation d'équipe en présentiel et à distance*

> Doublons source supprimés : `/MEO/3` (= `/MEO/1`) et `/MEO/4` (= `/MEO/2`). Numérotation source conservée → trous entre `/MEO/2` et `/MEO/5`.

- **/1** (S1) — Mettre en place et suivre les outils de planification et de gestion d'équipe
- **/2** (S1) — Répartir les tâches au sein d'un groupe
- **/5** (S1) — Proposer des outils de prise de décision collective
- **/6** (S1) — Organiser les documents partagés (suite Google Docs, Sheets, Drive, …)

### RA-MEO-C08-6 [MEO]
*RA : Être capable de mettre en œuvre un environnement de travail propice à l'épanouissement individuel et collectif*
*AA : Développer les conditions favorables aux interactions et à l'engagement en équipe*

> Doublons source supprimés : `/MEO/2` (= `/MEO/1`) et `/MEO/4` (= `/MEO/3`). Numérotation source conservée → trous.

- **/1** (S1) — Transmettre les informations nécessaires au fonctionnement de l'équipe
- **/3** (S1) — Mettre en œuvre des routines pour le travail collectif

---

## PROJ — Démarche projet

### RA-PROJET-C03-3 [PROJ]
*RA : Réaliser / fabriquer un système*
*AA : Réaliser un système ou un sous-ensemble incluant des moyens numériques de prototypage rapide*

- **/1** (S2) — Présenter des sketchs (croquis technique) à la main d'un produit
- **/2** (S2) — Prendre en compte le design dans la réalisation du prototype
- **/3** (S2) — Réaliser la ou les structure(s) mécanique(s) en intégrant des éléments électroniques et source(s) d'énergie
- **/4** (S2) — Adapter, modifier la conception et le choix des matériaux/procédés là où c'est nécessaire et modifier les documents associés (de conception et fabrication)
- **/5** (S2) — Programmer ou paramétrer un contrôleur numérique (microcontrôleur, automate, PC embarqué, etc.)
- **/6** (S2) — Valider l'inter-opérabilité des sous-ensembles réalisés
- **/7** (S2) — Garantir la démontabilité du projet

### RA-PROJET-C04-4 [PROJ]
*RA : Rédiger le cahier des charges et les spécifications d'un système*
*AA : Établir un cahier des charges fonctionnel et technique du système*

> Note source : 2 textes d'AA présents pour ce RA dans le xlsx, le second étant une typo (« dfonctionnel »). Considéré comme un seul AA.

- **/1** (S1) — Effectuer une analyse fonctionnelle du système
- **/2** (S1) — Trouver et décrire des solutions existantes par rapport aux fonctions principales d'un système
- **/3** (S1) — Utiliser correctement la terminologie technique et scientifique dans les différents domaines à l'écrit comme à l'oral
- **/4** (S1) — Établir le schéma bloc fonctionnel comprenant les capteurs, les actionneurs, les effecteurs et les contrôleurs d'un système en boucle ouverte et/ou fermée
- **/5** (S1) — Différencier écoconception et écodesign
- **/6** (S1) — Définir les interactions entre blocs à partir d'un cahier des charges
- **/7** (S1) — Identifier les performances du système de contrôle désirées (Ex : rapidité, dépassement, temps de réponse, précision, robustesse…)

### RA-PROJET-C05-3 [PROJ]
*RA : Intégrer un système*
*AA : Évaluer l'intégration et l'interopérabilité des sous-ensembles*

- **/1** (S2) — Réaliser des tests d'intégration
- **/2** (S2) — Proposer des axes d'amélioration du prototype réalisé
- **/3** (S1) — Concevoir des protocoles de test pour un ou plusieurs sous-ensembles
- **/4** (S2) — Réaliser les tests
- **/5** (S2) — Analyser les résultats des tests

### RA-PROJET-C07-1 [PROJ]
*RA : Mettre en œuvre les éléments et outils structurant de la gestion de projet, dans l'objectif de la maîtrise des coûts, de la qualité et des délais*
*AA : Mettre en œuvre les outils de projet*

- **/1** (S1) — Mettre en place un tableau de bord avec les indicateurs les plus pertinents dans le cadre du projet
- **/2** (S1) — Mettre en œuvre les outils et méthodes pour la gestion de projet dans le cadre du projet (Gantt, PERT, WBS, livrables)
- **/3** (S2) — Savoir gérer le budget dans le cadre du projet
- **/4** (S2) — Participer à la réalisation des tâches
- **/5** (S2) — Être force de proposition
- **/6** (S2) — Participer activement aux événements liés au projet (réunions …)

---

## Synthèse par domaine

| Domaine | AA | Critères distincts | Critères source (avant déduplication) |
|---|---|---|---|
| EEE | 2 | 10 | 10 |
| ESE | 1 | 5 | 5 |
| MME | 2 | 11 | 12 |
| MEO | 2 | 6 | 10 |
| PROJ | 5 | 25 | 25 |
| **Total** | **12** | **57** | **62** |
