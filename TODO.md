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
- [ ] **Squelette `concept`** (phase 2) — branche descendante du V
- [ ] **Squelette `preuve-de-concept`** (phase 3) — point pivot du V
- [ ] **Squelette `dossier-technique`** (phase 4) — branche ascendante
- [ ] **Squelette `integration-et-tests`** (phase 5) — branche ascendante
- [ ] **Squelette `gestion-de-projet`** (fil transverse)
- [ ] **Squelette `ecoconception`** (fil transverse)
- [ ] **Squelette `securite-et-qualite`** (fil transverse)
- [ ] **Session de cartographie AA** : passe systématique sur `Compétences.xlsx`, rattacher chaque AA à une phase ou un fil transverse. Identifier les trous.
- [ ] **Session de validation cohérence d'ensemble** : relecture bout en bout, ajustements de périmètre entre phases.
- [ ] **Approfondissement `specification-technique`** — étapes 2 à 6 (état de l'art / pieuvre / caractérisation / planification / rédaction CdCF)
- [ ] **Approfondissement `concept`**, puis `preuve-de-concept`, etc. dans l'ordre du V

*Notion `cahier-des-charges-fonctionnel` à produire en parallèle à un moment opportun (mentionnée 3 fois dans le hub, prioritaire). Idem pour `pieuvre` (étape 3 specification-technique).*

### 3. Templates à rédiger
- [ ] **Template fiche-trame** dans `_templates/fiche-trame.md` — à extraire **après** rédaction d'une 2ème fiche-trame (`preuve-de-concept` probablement), pour que le template repose sur 2 cas réels et pas un seul. La fiche `specification-technique.md` sert de modèle de travail en attendant.
- [ ] **Template fiche-tuto** dans `_templates/fiche-tuto.md`
- [ ] **Vérifier / mettre à jour `fiche-notion.md`** existant pour cohérence avec la typologie 3 types
- [ ] Formaliser le champ `type:` et `phases:` dans le front matter (documenter dans chaque template) — première vraie utilisation dans `specification-technique.md`

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
- [x] ~~**Créer `_drafts/flowcharts/`**~~ — fait le 21/05
- [ ] **Désactiver Dark Reader sur localhost et le site déployé**
- [ ] Vérifier le rendu de la fiche hub sur smartphone (vrai test responsive)
- [ ] Vérifier le rendu de la fiche `_templates/callouts.md` (panorama des callouts) en ligne et sur mobile
- [ ] Vérifier le rendu de `bete-a-cornes.md` (3 SVG dans 3 callouts côte à côte : harmonie visuelle ? hauteur des images ?)
- [ ] Configurer le plugin Templates d'Obsidian (`content/_templates`)
- [ ] Installer **Pandoc + MiKTeX** pour export PDF académique (pas urgent)
- [ ] Produire le schéma d'illustration des conventions de flèches (mentionné dans `schema-bloc-fonctionnel`)
- [ ] Produire / trouver une photo de couveuse annotée (mentionné dans `schema-bloc-fonctionnel`)

## Décisions éditoriales en attente
- [ ] **Charte couleur / identité visuelle complète** du site (au-delà de la palette callouts v1) — à traiter quand on aura plus de matière
- [ ] **Pliage des callouts** : faut-il replier `[!example]` par défaut ? À trancher après quelques fiches rédigées
- [ ] Stratégie pour fiches MME/ESE : pages courtes pointant vers collègues, ou ne rien créer ?
- [ ] Glossaire séparé pour acronymes ou fiches courtes individuelles ?

## Fait

*Voir `JOURNAL.md` pour l'historique détaillé.*

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
