# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables.

## Prochaines sessions (ordre logique)

### 1. Cadrage pédagogique (suite)
- [ ] **Session "chronopédagogie"** : projeter le cycle en V à 5 phases sur les 15 semaines du semestre. Quelle phase à quel moment, combien de temps, quels jalons concrets ?
- [ ] **Format des compétences (AA)** : discussion sur la granularité et la convention de tag — en attente validation hiérarchie
- [ ] **Trame v2 — boucles itératives** : enrichir le schéma du cycle en V pour afficher honnêtement les retours arrière (PoC échec → revoir spec/concept, qualif échec → revoir dossier). À traiter après quelques fiches de phase rédigées.

### 2. Rédaction de fiches (parcours prioritaire)

**Stratégie actée (20/05 suite)** : squelettisation des 5 trames + 3 fils transverses bout en bout, puis cartographie AA, puis validation cohérence, **puis seulement** approfondissement trame par trame dans l'ordre.

**Révision (20/05 fin)** : avant la squelettisation, **prochaine session = flowchart macroscopique du parcours projet**. Objectif : produire une carte navigable montrant les chemins, embranchements (choix techniques), points de synchronisation inter-équipiers, boucles de rétroaction. Le flowchart définira par construction la liste des fiches à créer.

**À trancher en début de prochaine session** : tous les points traités en fin de session du 20/05. Récapitulatif des décisions :
- Granularité : **N3** (décisions + synchros visibles, zoom N4 local si besoin)
- Format : **Mermaid**, découpé en **5 flowcharts détaillés + 1 vue d'ensemble macro** pour les rétroactions inter-phases
- Sémantique visuelle : rectangles=étapes, losanges=décisions, cercles=synchros inter-équipiers, doubles cercles=livrables évalués, flèches pleines=flux normal, flèches pointillées=rétroactions, fond couleur=discipline (palette callouts v1)
- Position : **hors site** pour le moment, dans `_drafts/flowcharts/` (dossier ignoré par Quartz à créer, ou utiliser le pattern existant)
- Périmètre disciplinaire : **modélisation complète incluant méca/fabrication**, fiches vides en attendant un collègue. ⚠️ **Changement** par rapport à la posture initiale d'interface uniquement.
- Périmètre session : cadrage fait, prochaine session = **inventaire + construction des 6 flowcharts en Mermaid**

Squelette = front matter complet + popover + posture + objectif + démarche en titres d'étapes seulement + livrable principal + voir aussi. Pas de rédaction détaillée des étapes à ce stade.

- [x] ~~**Session flowchart macroscopique**~~ — sessions du 21/05 : flowcharts phase 1, 2, 3, 4 et 5 produits dans `_drafts/flowcharts/`, script de rendu Mermaid → SVG mis en place
- [x] ~~**Phase 3 — preuve de concept** (flowchart)~~ — 21/05 suite
- [x] ~~**Phase 4 — dossier technique** (flowchart)~~ — 21/05 suite
- [x] ~~**Phase 5 — intégration et tests** (flowchart)~~ — 21/05 suite
- [x] ~~**Vue d'ensemble macro**~~ — 21/05 suite 2 : enrichissement du `cycle-v-projet.svg` (V replié + 4 rétroactions ambrées, archive de l'ancien en `archive/cycle-v-projet-v1.svg`). Choix retenu : pas de flowchart Mermaid supplémentaire.
- [x] ~~**Squelette `concept`** (phase 2)~~ — 22/05
- [x] ~~**Squelette `preuve-de-concept`** (phase 3)~~ — 22/05
- [x] ~~**Squelette `dossier-technique`** (phase 4)~~ — 22/05
- [x] ~~**Squelette `integration-et-tests`** (phase 5)~~ — 22/05
- [ ] **Squelette `gestion-de-projet`** (fil transverse)
- [ ] **Squelette `ecoconception`** (fil transverse)
- [ ] **Squelette `securite-et-qualite`** (fil transverse)
- [x] ~~**Template `_templates/fiche-trame.md`**~~ — fait le 22/05 (suite), renommé en `templates/fiche-trame.md`. Structure : front matter + popover + posture + objectif + démarche (3 étapes-exemple) + pièges + équipe + conclusion + voir aussi. Convention ordre des sections : Pièges/Équipe avant Conclusion. **Conventions callouts révisées le 23/05** (titres `Exemple : projet bras 3 axes` / `Livrable N/X — <Nom de la phase>` / `Attention` / `Astuce` avec phrase-clé dans le corps en gras).
- [x] ~~**Refonte `specification-technique.md` étape 1**~~ — fait le 23/05 : alignement callouts v2.1 + ajout section Conclusion + réordonnancement final + popovers de l'objectif posés. **Étapes 2-6 restent en placeholder** (objet de la prochaine session).
- [x] ~~**Approfondissement `specification-technique` — étape 4 (cœur de la phase)**~~ — fait le 23/05 (suite 2) : 3 sous-sections + warning + tip + example + livrable 4/6 + 5 patches d'ajustement + 3 patches collatéraux étape 3 + décision méthodologique alias FP/FS/FC.
- [ ] **Approfondissement `specification-technique` — étapes 5-6 + Pièges + section Équipe** → **session de clôture phase 1**.
  - Étape 5 (Planifier) : Gantt / rétroplanning / jalons en fiches-tuto détaillées ; WBS / matrice de risques en fiches-notion légères ; outils mentionnés Excel/papier + GanttProject et autres à compléter.
  - Étape 6 (Rédiger le CdCF) : structure canonique NF X50-151 avec souplesse ; intégration de la démarche écoconception confirmée.
  - Pièges fréquents : intégrer les 4 pièges identifiés au 23/05 (suite 2) — niveau non chiffré, critère subjectif non mesurable, sur-spécification, F3 ≠ absence d'exigence.
  - Section « Pendant cette phase, côté équipe » : à rédiger.
  - Alignement v2.1 de la fiche déjà fait au fil — vérification de cohérence finale.
- [ ] **Session de cartographie AA** : passe systématique sur `Compétences.xlsx`, rattacher chaque AA à une phase ou un fil transverse. Identifier les trous.
- [ ] **Session de validation cohérence d'ensemble** : relecture bout en bout, ajustements de périmètre entre phases.
- [ ] **Approfondissement `concept`**, puis `preuve-de-concept`, etc. dans l'ordre du V — à chaque approfondissement, **aligner les callouts** sur les conventions v2.1 (titres + phrase-clé dans le corps)

*Notions à produire en parallèle (popovers posés dès les squelettes du 22/05 + 23/05)* :
- [ ] `cahier-des-charges-fonctionnel` (mentionné dans le hub + 4 trames — prioritaire)
- [ ] `pieuvre` (fiche-notion **triplement prioritaire** : popover posé + placeholder image cassée dans la trame + **aliases `[FP, FS, FC]` à poser** dans le front matter — décision 23/05 suite 2). Intro à rédiger pour définir les 3 catégories d'un coup, contrainte induite par le popover servi sur les 3 sigles génériques.
- [ ] `decomposition-fonctionnelle` (popover posé dans `concept.md` étape 1)
- [ ] `matrice-de-decision` (popover posé dans `concept.md`, mentionné aussi dans pré-concept)
- [ ] **`caracteriser-une-exigence`** (fiche-tuto **prioritaire**, avec front matter `aliases: [critere, niveau, flexibilite]` — décision 23/05 suite 2). Embarquera le triplet, le triptyque mauvais/moyen/bon (pattern à transposer de `bete-a-cornes.md`), l'échelle F0/F1/F2/F3 détaillée. Première phrase = définition du triplet pour popover cohérent au survol des 3 alias. Popovers déjà posés dans l'objectif de `specification-technique.md` (23/05) et dans le préambule de l'étape 4 (23/05 suite 2).
- [ ] **`unite-si`** (fiche-notion, popover posé étape 4 du 23/05 suite 2 — lien rouge). Convention typographique des unités SI (espace insécable, format ± X mm, bornes, plages, etc.).
- [ ] **`etat-de-l-art-technique`** (tuto, popover posé dans l'objectif de `specification-technique.md` — 23/05 ; fusionner avec l'entrée BACKLOG existante « État de l'art (méthodologie) »)
- [ ] **`bom`** (tuto, popover posé étape 2 de `specification-technique.md` le 23/05 suite — acronyme + structure BOM, évolution attendue préliminaire/consolidée/finale)
- [ ] **`mind-map`** (notion, popover posé étape 3 de `specification-technique.md` le 23/05 suite — outil méthodo générique)
- [ ] **`fast`** (tuto, popover posé en ouverture de l'étape 3 de `specification-technique.md` le 23/05 suite — à créer en phase 2 concept)

### 3. Templates à rédiger
- [x] ~~**Template fiche-trame**~~ — fait le 22/05 (suite) dans `templates/fiche-trame.md`
- [x] ~~**Vérifier / mettre à jour `fiche-notion.md`** existant pour cohérence avec la typologie 3 types~~ — fait le 22/05 (suite), refonte complète (front matter + structure alignée sur `bete-a-cornes.md`)
- [ ] **Template fiche-tuto** dans `templates/fiche-tuto.md` — reste à produire. Modèle potentiel : `schema-bloc-fonctionnel.md`. À traiter quand on aura une 2ᵉ fiche-tuto pour stabiliser les conventions.
- [x] ~~Formaliser le champ `type:` et `phases:` dans le front matter (documenter dans chaque template)~~ — fait le 22/05 (suite) dans les commentaires HTML des deux templates

## Décisions à valider avec la hiérarchie
- [ ] Convention de tags AA (granularité, syntaxe)
- [ ] Niveau d'écart accepté entre référentiel et contenu produit (peut-on aller au-delà ?)
- [ ] Couleurs / charte graphique : faut-il aligner sur la charte école ?

## Tâches techniques en suspens
- [ ] Commit + push de la session du 19/05 (suite et suite 2) pour voir hub + SVG + callouts en ligne
- [ ] Commit + push de la session du 20/05 (bête à cornes + 4 SVG + mises à jour doc)
- [ ] **Commit + push de la session du 21/05** : flowchart phase 1, script `scripts/render-flowcharts.mjs`, ajout `flowcharts` dans scripts de `package.json`, ajout `@mermaid-js/mermaid-cli` en devDependency — *(une partie déjà pushée PC perso, vérifier)*
- [ ] **Commit + push de la session du 21/05 (suite, PC pro)** : flowcharts phase 3, 4, 5 dans `_drafts/flowcharts/` (avec SVG générés), mise à jour JOURNAL / TODO / BACKLOG
- [ ] **Commit + push de la session du 21/05 (suite 2)** : nouveau `cycle-v-projet.svg` avec rétroactions + archivage v1 dans `content/ressources/img/archive/`, mise à jour JOURNAL / TODO / BACKLOG
- [ ] **Commit + push de la session du 22/05** : 4 squelettes de fiches-trame (`concept.md`, `preuve-de-concept.md`, `dossier-technique.md`, `integration-et-tests.md`), 2 passes de patchs (corrections de fond + fil rouge + Conclusion), mise à jour JOURNAL / TODO / BACKLOG
- [ ] **Commit + push de la session du 22/05 (suite)** : charte callouts v2 (refonte `quartz/styles/custom.scss` + refonte `templates/callouts.md`), nouveau `templates/fiche-trame.md`, refonte `templates/fiche-notion.md`, renommage `_templates/` → `templates/` (avec `quartz.config.ts` patché), `templates/index.md` mis à jour, templates passés en `draft: false`. À supprimer avant commit : `content/callouts-demo.md` (fiche jetable).
- [ ] **Commit + push de la session du 23/05** : refonte `specification-technique.md` étape 1 (11 patches : alignement callouts v2.1 + ajout Conclusion + réordo final + popovers objectif), révision conventions callouts v2.1 dans `templates/fiche-trame.md` (bloc CONVENTIONS À RESPECTER + commentaires HTML + 3 étapes-exemple) et `templates/callouts.md` (sections warning/tip/example/livrable), mise à jour JOURNAL / TODO / BACKLOG.
- [ ] **Commit + push de la session du 23/05 (suite)** : approfondissement étapes 2-3 de `specification-technique.md` (2 patches initiaux + 7 patches round 2 de relecture), mise à jour JOURNAL / TODO / BACKLOG.
- [ ] **Commit + push de la session du 23/05 (suite 2)** : approfondissement étape 4 de `specification-technique.md` (rédaction complète + 5 patches d'ajustement) + 3 patches collatéraux étape 3 (cohérence BàC/pieuvre, FS1, définition FP) + 8+6 patches popovers FP/FS/FC, mise à jour JOURNAL / TODO / BACKLOG.
- [ ] **Supprimer `content/callouts-demo.md`** — fiche jetable, mission accomplie (validation visuelle palette v2). À faire à la main (pas d'outil delete MCP).
- [x] ~~**Créer `_drafts/flowcharts/`**~~ — fait le 21/05
- [ ] **Désactiver Dark Reader sur localhost et le site déployé**
- [ ] Vérifier le rendu des 4 nouveaux squelettes (`concept`, `preuve-de-concept`, `dossier-technique`, `integration-et-tests`) en local Quartz + smartphone
- [ ] Vérifier le rendu de la fiche hub sur smartphone (vrai test responsif)
- [ ] Vérifier le rendu de la fiche `templates/callouts.md` (charte v2 + révision v2.1 du 23/05) en ligne et sur mobile
- [ ] Vérifier le rendu des templates `templates/fiche-trame.md` (post-23/05) et `templates/fiche-notion.md` en ligne et sur mobile (en particulier la lisibilité des commentaires HTML — normalement invisibles dans le rendu, à confirmer)
- [x] ~~Vérifier le rendu de `specification-technique.md` étape 1 refondue sous Quartz~~ — fait le 23/05, OK utilisateur.
- [x] ~~Vérifier le rendu des étapes 2-3 de `specification-technique.md` sous Quartz~~ — fait par l'utilisateur en fin de session du 23/05 suite (MAJ doc avait dérapé, confirmé en début de session 23/05 suite 2).
- [ ] Vérifier le rendu de l'étape 4 de `specification-technique.md` sous Quartz et sur smartphone (sous-liste F0/F1/F2/F3 avec indent 4 espaces — bascule en 2 espaces si la hiérarchie casse, callouts warning/tip/example/livrable côte à côte).
- [ ] Vérifier le rendu de `bete-a-cornes.md` (3 SVG dans 3 callouts côte à côte : harmonie visuelle ? hauteur des images ?)
- [ ] Configurer le plugin Templates d'Obsidian (`content/templates`)
- [ ] Installer **Pandoc + MiKTeX** pour export PDF académique (pas urgent)
- [ ] Produire le schéma d'illustration des conventions de flèches (mentionné dans `schema-bloc-fonctionnel`)
- [ ] Produire / trouver une photo de couveuse annotée (mentionné dans `schema-bloc-fonctionnel`)

## Décisions éditoriales en attente
- [ ] **Charte couleur / identité visuelle complète** du site (au-delà de la palette callouts v2 désormais figée) — à traiter quand on aura plus de matière
- [ ] **Mode sombre des callouts v2** — non décliné, report délibéré. À traiter dans une session ultérieure quand on aura du recul d'usage et qu'on souhaitera élargir la charte au mode sombre. Le SCSS actuel commente la décision.
- [ ] **Pliage des callouts** : faut-il replier `[!example]` par défaut ? À trancher après quelques fiches rédigées
- [ ] **Alignement rétroactif des 5 trames** (specification-technique + 4 du 22/05) sur le nouvel ordre de sections du template (Conclusion entre Équipe et Voir aussi) — décision actée de **ne pas le faire systématiquement** mais lors de l'approfondissement de chaque trame, naturellement. **`specification-technique` alignée le 23/05.**
- [ ] **Alignement rétroactif des 4 trames du 22/05 sur les conventions callouts v2.1** (titres `Exemple : projet bras 3 axes`, `Livrable N/X — <Nom de la phase>`, `Attention` / `Astuce` avec phrase-clé dans le corps en gras) — acquis 23/05. Décision : **pas d'alignement systématique**, à faire lors de l'approfondissement de chaque trame. `specification-technique` est temporairement la seule fiche conforme v2.1.
- [ ] Stratégie pour fiches MME/ESE : pages courtes pointant vers collègues, ou ne rien créer ?
- [ ] Glossaire séparé pour acronymes ou fiches courtes individuelles ?
- [ ] **Convention « popovers seulement sur sigles génériques »** (FP/FS/FC, pas FP1/FS1/…) à documenter dans le template `fiche-trame.md` ou note méthodo dédiée — décision 23/05 suite 2.
- [ ] **Convention « alias Quartz CrawlLinks = mécanisme léger pour facettes indissociables d'un outil »** à documenter dans le commentaire HTML d'introduction de `templates/fiche-notion.md` une fois le mécanisme validé en pratique sous Quartz — décision 23/05 suite 2.

## Fait

*Voir `JOURNAL.md` pour l'historique détaillé.*

### Session 2026-05-23 (suite 2 — Approfondissement specification-technique étape 4)
- [x] Trancher les 3 questions de cadrage (fiche-tuto unique avec alias / option (c) pas de triptyque dans la trame / mini-encart unités en prose)
- [x] Acter le mécanisme alias Quartz CrawlLinks pour les facettes indissociables d'un outil (extension de la typologie 3 types)
- [x] Acter alias `[FP, FS, FC]` vers la future fiche `pieuvre` avec granularité popover « sigles génériques uniquement »
- [x] Patches collatéraux étape 3 : note italique BAC/pieuvre en tête de l'`[!example]`, FS1 réécrite pour relier deux milieux distincts, définition FP corrigée (« Sans FP » au lieu de « Sans FP1 »)
- [x] 8 patches popovers FP/FS/FC sur les sigles génériques + 6 patches inverses sur les instances numérotées
- [x] Rédiger l'étape 4 « Caractériser les fonctions » (3 sous-sections + 4 callouts + option (3) sur la flexibilité avec Fn + tolérance numérique)
- [x] Round 2 — 5 patches d'ajustement étape 4 : phrase-clé `[!tip]` simplifiée avec popover `[[unite-si]]` posé, retrait phrase Obsidian, FP1 reformulée « manipuler le robot pour positionner » répercutée étapes 3 et 4, précision « le bras » devant Moveo et uArm Swift Pro
- [x] Poser 2 nouvelles dépendances : `caracteriser-une-exigence` (fiche-tuto avec alias) et `unite-si` (fiche-notion)
- [x] Lever la dette « vérification visuelle étapes 2-3 » (était faite en fin de session 23/05 suite, MAJ doc tardive identifiée en début de session)

### Session 2026-05-23 (suite — Approfondissement specification-technique étapes 2 et 3)
- [x] Trancher les 3 questions de cadrage (fil rouge bras 3 axes seul, découpage 2-3 / 4 dédiée / 5-6, popovers en lien rouge sauf cas bloquant)
- [x] Rédiger l'étape 2 « Étudier l'existant » (préambule + 3 sous-sections H4 + warning EAT≠biblio + example tableau Niryo/uArm/Moveo + livrable 2/6)
- [x] Round 2 — 6 patches de relecture sur l'étape 2 (gras votre, projet similaire, gras discriminer, popover BOM, titre H4, suppression échelle qualitative)
- [x] Rédiger l'étape 3 « Formaliser les fonctions » (préambule + image pieuvre placeholder + 2 sous-sections H4 + warning fonction≠solution + example FP/FS/FC + ouverture FAST + livrable 3/6)
- [x] Round 2 — 1 patch de relecture sur l'étape 3 (mind map avec popover)
- [x] Acter le trio FP/FS/FC (vs duo FP/FC)
- [x] Acter l'option α pour l'image pieuvre (placeholder cassé en attendant la session pieuvre, parallèle exact bete-a-cornes)
- [x] Poser 3 nouvelles dépendances : `bom`, `mind-map`, `fast`

### Session 2026-05-23 (Refonte specification-technique étape 1 + révision conventions callouts)
- [x] Trancher les 3 questions de cadrage (fil rouge bras 3 axes + couveuse en double sur l'étape 1, interprétation « au moins 1 `[!example]` par étape », périmètre limité à l'étape 1)
- [x] Round 1 — 7 patches sur `specification-technique.md` étape 1 : lexique `phase`→`étape`, coquille `passer a`→`passé à`, titres callouts alignés (warning/example/tip), ajout `[!example]` bras 3 axes, ajout section Conclusion, réordo final, `Phase suivante`→`Étape suivante`
- [x] Round 2 — déclenché par 5 remarques de relecture : ajout popovers (`critere`, `niveau`, `flexibilite`, `etat-de-l-art-technique`) + retrait popover `relation-client` dans le texte + révision conventions titre `[!example]` (`Exemple : projet <cas>`) + révision conventions titre `[!livrable]` (`Livrable N/X — <Nom de la phase>`) + confirmation titres fixes `Attention`/`Astuce` avec phrase-clé dans le corps en gras
- [x] Patches sur `templates/fiche-trame.md` (bloc CONVENTIONS À RESPECTER + commentaires HTML + 3 étapes-exemple) pour propager les nouvelles conventions v2.1
- [x] Patches sur `templates/callouts.md` (4 sections : warning, tip, example, livrable) pour propager les nouvelles conventions v2.1
- [x] Vérification visuelle de `specification-technique.md` étape 1 sous Quartz : OK
- [x] Leçon méthodo : chemin différent par poste pour MCP filesystem (PC pro vs PC perso)
- [x] Leçon méthodo : nom du serveur MCP variable par poste (`theskillcodex:*` vs `filesystem:*`)

### Session 2026-05-22 (suite — Charte callouts v2 + templates fiche-trame et fiche-notion)
- [x] Trancher les 4 questions de cadrage (format du template, granularité des commentaires, fil rouge intégré, sort de fiche-notion)
- [x] Débattre et figer la **charte callouts v2** : 8 callouts × (couleur fond + couleur titre/filet), 6 décisions structurantes documentaires dans le JOURNAL
- [x] Production de la fiche-démo jetable `callouts-demo.md` pour validation visuelle sous Quartz (parce qu'Obsidian ignore le SCSS)
- [x] **Passe d'éclairement globale** sur 6 callouts après validation visuelle initiale (palette v1.0 trop saturée)
- [x] Figer les **conventions de titres** par callout (`Question : ...`, `Astuce`, `Attention`, `Sur le bras 3 axes`, `Vu dans une ancienne promo`, `Livrable de l'étape N`, etc.)
- [x] Acter la **règle de densité révisée** : 0-3 par défaut, exception assumée pour fiches-trame (5-10)
- [x] **Refonte complète de `templates/callouts.md`** (v1 → v2) avec charte graphique en tableau + sémantique par callout + conventions de titres + exemples rendus
- [x] **Production de `templates/fiche-trame.md`** : front matter + 8 sections + commentaires HTML pédagogiques + 3 étapes-exemple + bloc « Conventions à respecter ». Test de reconstitution mentale sur `concept.md` réussi.
- [x] **Réordonnancement des sections finales** du template fiche-trame après première validation : Conclusion descendue entre Équipe et Voir aussi (vs ordre v1 entre Démarche et Pièges)
- [x] **Refonte complète de `templates/fiche-notion.md`** (v1 → v2) alignée sur la pratique observée dans `bete-a-cornes.md` : front matter `type: notion` + `phases:`, structure (À quoi ça sert / Comment <verbe adapté> / Exemple incarné / Pièges en gras / Cas particulier / Aller plus loin / Voir aussi). Test de reconstitution sur `bete-a-cornes.md` réussi.
- [x] **Renommage `_templates/` → `templates/`** (sans underscore) : résolution du problème d'URL `localhost:8080/_templates/...` qui renvoyait 404 même après retrait de `ignorePatterns`. Références patchées dans `fiche-trame.md`. `templates/index.md` mis à jour pour lister les 3 fiches.
- [x] **Templates passés en `draft: false`** : le template est de la doc, pas un brouillon. Note explicite ajoutée dans les guides HTML.
- [x] **Décision éditoriale « `templates/` public »** actée : retrait de `_templates` de `ignorePatterns` dans `quartz.config.ts`.
- [x] Leçon méthodo : Obsidian ignore le SCSS Quartz → validation visuelle obligatoirement via `npx quartz build --serve`.
- [x] Leçon méthodo : modifs de `quartz.config.ts` non prises en compte par hot reload → Ctrl+C + relance nécessaire.

### Session 2026-05-22 (Squelettes des 4 fiches-trame du cycle en V)
- [x] Trancher les 4 questions de cadrage (ordre descendant strict, transposition non linéaire flowcharts→trames, popovers dès le squelette, « Voir aussi » dès le squelette)
- [x] Décider du périmètre réaliste de session (4 phases, transverses reportées à session dédiée)
- [x] Produire les 4 squelettes : `concept` (5 étapes), `preuve-de-concept` (4 étapes), `dossier-technique` (5 étapes), `integration-et-tests` (5 étapes)
- [x] Relecture critique du squelette `concept` → 6 corrections de fond identifiées et traitées sur les 4 trames :
  - « Dérisquer » banni en production étudiante → « lever une incertitude » / « valider le fonctionnement »
  - « Phase N » proscrit dans la prose, noms de phases en toutes lettres systématiquement
  - Popover `[[decomposition-fonctionnelle]]` posé (notion-mère manquante distincte de `schema-bloc-fonctionnel`)
  - « Point dur » → « incertitude » partout
  - Plus de callouts pédagogiques via le projet fil rouge
  - Paragraphes trop courts → report à l'approfondissement avec exemples du fil rouge
- [x] Acter le **projet fil rouge unique** : bras robotique pédagogique 3 axes (compromis simplicité + mécatronique canonique + ancrage par un étudiant disponible pour relecture). Cadrage figé (architecture, incertitudes, critères CdCF chiffrés).
- [x] Acter la **convention de coexistence des cas d'illustration** : fiches-trame = fil rouge unique ; fiches-notion = cas autonome choisi pour la notion. `bete-a-cornes.md` (bras 6 axes) conserve son cas sans retravail rétroactif.
- [x] Patcher les 4 trames : 25 callouts pédagogiques posés sur le fil rouge (19 `[!example]` + 5 `[!warning]` + 1 `[!tip]`), un par étape pour `[!example]`, optionnels pour les autres
- [x] Acter la convention **« 1 callout `[!livrable]` par étape »** dès le squelette (était ambigüe dans `specification-technique`)
- [x] Ajouter une section `## Conclusion` en fin de démarche dans les 4 trames (après le dernier livrable, avant le séparateur des pièges). Pattern à répliquer sur `specification-technique` lors de son approfondissement.
- [x] Acter la convention rédactionnelle implicite : « étape » plutôt que « phase » dans la prose lorsqu'il y a risque de confusion avec « phase N du cycle en V »

### Session 2026-05-21 suite 2 (Vue d'ensemble macro — V replié avec rétroactions)
- [x] Décider de la forme : enrichir `cycle-v-projet.svg` plutôt qu'un 6è flowchart Mermaid
- [x] Archiver `cycle-v-projet.svg` v1 dans `content/ressources/img/archive/cycle-v-projet-v1.svg`
- [x] Produire le nouveau `cycle-v-projet.svg` avec 4 arcs de rétroaction agrégés (R1, R2a, R2b, R3) et l'étiquette « pas de retour » sur ph5
- [x] Repositionner R3 par le haut (sur retour utilisateur) pour éviter la gêne visuelle avec le pointillé « guide »
- [x] Décider : abandon des 3 flowcharts transverses (les flowcharts sont des outils amont de rédaction des trames, pas des livrables exhaustifs)
- [x] Identifier la confusion outils sandbox vs MCP filesystem (`create_file` ≠ `theskillcodex:write_file`) — à retenir comme leçon méthodo

### Session 2026-05-21 suite (Flowcharts phase 3, 4, 5)
- [x] Trancher les 3 questions ouvertes phase 3 (branches par point dur, pas d'acquisition matériel séparée, 3 sorties D-PoC)
- [x] Produire le flowchart **phase 3 — preuve de concept** (rendu validé, layout 3×3 propre)
- [x] Cadrage **phase 4 — dossier technique** (périmètre, multi-validation à 3 profs, structures de décisions)
- [x] Produire le flowchart **phase 4 — dossier technique**
- [x] Cadrage **phase 5 — intégration et tests** (5 niveaux de tests en cascade linéaire, par fonction et non par discipline, pas de rétroaction sortante)
- [x] Produire le flowchart **phase 5 — intégration et tests**
- [x] Décisions structurelles consolidées : grilles carrées > grilles rectangulaires (Mermaid+dagre), tests "par fonction" en mécatronique (pas "par discipline" ni "par interface"), pas de retour arrière depuis ph5

### Session 2026-05-21 (Flowcharts phase 1 et 2)
- [x] Créer `_drafts/flowcharts/`
- [x] Mettre en place le pipeline Mermaid → SVG : `scripts/render-flowcharts.mjs`, ajout du script `npm run flowcharts` dans `package.json`, devDependency `@mermaid-js/mermaid-cli`
- [x] Corriger le bug Windows `spawn EINVAL` (ajout `shell: true` dans `execFile`)
- [x] Produire le flowchart de la **phase 1 — spécification technique** (rendu validé)
- [x] Produire le flowchart de la **phase 2 — concept** (rendu fond OK, layout du subgraph BRANCHES non résolu malgré plusieurs tentatives — reporté dans BACKLOG)
- [x] Décisions : convention `IO_LEFT` (subgraph invisible englobant START + FB_PHASE1 pour ancrage à gauche), 3 couleurs disciplines ad-hoc (élec/méca/info), suffixe de label `(élec)` / `(méca)` / `(info)`
- [x] Cadrage **phase 3 — preuve de concept** amorcé (inventaire complet posé, 3 questions ouvertes), production reportée en nouvelle session

### Session 2026-05-20 suite (Fiche-notion `bete-a-cornes` + stratégie d'enchaînement)
- [x] Rédiger `content/fiches/proj/bete-a-cornes.md` (8 sections, popover de 3 phrases, exemples triptyque bras robotique 6 axes)
- [x] Produire les 4 SVG : générique + 3 exemples bras (mauvais/moyen/bon), palette amber alignée sur cycle-v-projet.svg
- [x] Itérer le SVG générique sur le modèle canonique (cornes vers le haut + flèche vers la fonction en bas)
- [x] Patcher `specification-technique.md` étape 1 : placeholder image remplacé par le SVG générique
- [x] Diagnostic incident Dark Reader (faux bug de rendu)
- [x] Stratégie de rédaction actée puis révisée : squelettisation bout en bout des 5 trames + 3 transverses, puis cartographie AA, puis approfondissement trame par trame

### Session 2026-05-20 (Fiche-trame `specification-technique` — étape 1)
- [x] Cadrer la structure type d'une fiche-trame (front matter + 7 sections)
- [x] Découper la phase 1 en 6 étapes (analyser le besoin / étudier l'existant / formaliser / caractériser / planifier / rédiger CdCF)
- [x] Cadrage méthodo : NF X50-151 (AFNOR), enrichissement FAST reporté en phase 2
- [x] Décision : un seul callout `[!livrable]` groupé par étape (vs un par sous-étape)
- [x] Décision : fiche-stub pour `afnor-nfx50-151` (popover natif) plutôt que lien externe direct
- [x] Créer `content/fiches/proj/specification-technique.md` avec étape 1 entièrement rédigée et étapes 2-6 en placeholders
- [x] Créer la stub `content/fiches/proj/afnor-nfx50-151.md`
- [x] Poser les popovers (`mecatronique`, `ecoconception`, `relation-client`, `bete-a-cornes`, `pcb`, `ppm`)

### Session 2026-05-19 (suite 2 — Trame projet)
- [x] Cadrer le cycle en V : 5 phases retenues, PoC remonté avant dossier technique
- [x] Typologie de fiches formalisée : trame / tuto / notion
- [x] Arborescence : décision actée (par domaine + champ `phases:` en front matter)
- [x] Politique d'images actée : `content/ressources/img/`
- [x] Créer le schéma SVG du cycle en V (`content/ressources/img/cycle-v-projet.svg`)
- [x] Rédiger la fiche hub (fusion dans `content/hub/index.md`)
- [x] Supprimer `content/hub/parcours-projet.md` (transitoire)
- [x] Restyler les 5 callouts natifs avec palette alignée sur le V
- [x] Créer la fiche de doc des callouts (`content/_templates/callouts.md`)

### Session 2026-05-19 (suite — PC perso)
- [x] Installer Git for Windows sur PC perso (déjà présent — `git clone` a fonctionné)
- [x] Installer Node.js v22 LTS sur PC perso (déjà présent)
- [x] Configurer Git (user.name = TimTurko, user.email = turko.tim@gmail.com)
- [x] Cloner le dépôt TheSkillCodex sur PC perso
- [x] Installer Obsidian sur PC perso
- [x] Configurer Obsidian Git (auto-rapatrié via `.obsidian/` versionné)
- [x] Tester un cycle complet : pull → édit test → commit-and-sync → vérifié sur GitHub
