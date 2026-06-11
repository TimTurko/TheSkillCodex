# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables. Items faits :
> supprimer plutôt qu'archiver — l'historique est dans `JOURNAL.md`.

## Prochaines sessions (ordre logique)

> **➜ MAJ 11/06** — **NETTOYAGE DOCUMENTAIRE COMPLET (3 volets)**, à cheval PC perso / PC pro. **(1) Archivage JOURNAL (10/06)** : 6 entrées 08/06→10/06 conservées, JOURNAL 97→27,8 ko, archive →422 ko (coupe β, invariant antichrono vérifié au byte près) ; `*.bak` gitignorés puis supprimés des deux postes. **(2) Grooming conventions.md (10-11/06)** : nouveau cluster §6 *Modules MCU — conventions de famille* (C25/C26/C32/C45/C56/C57 promues, arbitrage Tim) ; élagage §8 (bloc 28/05 suite 2 → pointeur ; 7 blocs MCU 06/06 suite 6→12 condensés en une synthèse, ~14 ko) ; **anomalie C50** (numéro orphelin jamais défini) neutralisée + loggée BACKLOG — ne jamais réaffecter, numéroter à partir de C65 ; mentions « promouvable §6 » caduques corrigées (items 32/35/36/45/50) ; ancre d'intro `#7-`→`#8-en-cours-déprouvage` réparée ; 112→103 ko. **(3) Grooming TODO (11/06)** : pile de flèches historiques purgée (l'historique vit au JOURNAL), sections faites supprimées, 77→~10 ko. **Au passage** : premier pull post-réorg 3 branches sur PC pro — erreurs Windows de suppression de dossiers (verrous) **sans conséquence git** ; coquilles vides `content/hub` + `content/fiches` supprimées à la main par Tim ; `git status` propre. **PROCHAINE SESSION = REPRISE RELECTURE HUMAINE — branche Système embarqué** (arbitrage Tim 11/06) : dérouler `_drafts/relecture-ordre.md` à partir de **§4 · EEE — fondations électronique** (`niveaux-de-tension` →), puis §5 algorithme, §6+ socle MCU et familles ; **§1bis transverses** (`gestion-de-projet` / `ecoconception` / `securite-et-qualite`) **et §2-3 PROJ/MEO repoussées après**. Sur le rendu Quartz local (`npx quartz build --serve`), cocher à validation. **RESTE À TIM** : si pas encore fait, build + **clic-test des `[[<branche>/index]]`** (seul filet sur l'angle mort `x/index`, pré-requis promotion C60) ; commit/push du nettoyage. **Validations Tim en attente** (BACKLOG / conventions §8) : déviation `micropython-serie`→`micropython-repl` ; `micropython-filtrage` laissé rouge ; slug `micropython-eeprom`.

### 1. Cadrage pédagogique (suite)
- [ ] **Session "chronopédagogie"** : projeter le cycle en V à 5 phases sur les 15 semaines du semestre. Quelle phase à quel moment, combien de temps, quels jalons concrets ?
- [ ] **Format des compétences (AA)** : discussion sur la granularité et la convention de tag — en attente validation hiérarchie
- [ ] **Trame v2 — boucles itératives** : enrichir le schéma du cycle en V pour afficher honnêtement les retours arrière (PoC échec → revoir spec/concept, qualif échec → revoir dossier). À traiter après quelques fiches de phase rédigées.

### 2. Rédaction de fiches

- [ ] **Session de validation cohérence d'ensemble** : relecture bout en bout, ajustements de périmètre entre phases. *(Largement portée par la relecture humaine en cours via `_drafts/relecture-ordre.md`.)*

*Fiches restantes (alimentation continue, non bloquantes pour la publication) :*
- [ ] `circuitverse` (fiche-tuto simu **numérique/logique** en ligne — niche distincte de `falstad`, pertinence à évaluer)
- [ ] `easyeda` (fiche-tuto outil PCB altern, embranchement de choix)
- [ ] `bom-electronique` (fiche-tuto compétence pro)
- [ ] `pcb-gravure-ecole` (fiche-tuto spécifique monoface interne)
- [ ] Porte **Pico-SDK C/C++** (optionnelle, hors module Raspberry — cf. BACKLOG)

#### Pré-publication MVP

> Passe de vérification avant mise en ligne du site aux étudiants.

- [ ] **Remplacer le template Word `cdcf-ecole-template.docx`** — référencé en lien dans `specification-technique.md` étape 6 et `cahier-des-charges-fonctionnel.md`, mais le fichier présent dans `ressources/templates/` n'est PAS le bon (mauvais fichier repéré en relecture 08/06). Vigilance « EAT » : réserver l'abréviation à *état de l'art technique*, ne pas réintroduire « matrice EAT » (renommée « matrice éco-critères »).
- [ ] **Vérifier les images** de toutes les fiches (présence + rendu) — **dont les 11 SVG du 29/05** (algorithme : générique + triptyques logigramme/MAE ; grafcet, chronogramme, analyse-de-schema), hand-codés au premier jet : valider la géométrie au rendu Quartz, en priorité `analyse-de-schema-exemple` (symboles composants) et les SVG placés dans les callouts de triptyque. *(Recoupe le peigne SVG — cf. section Reprise visuelle.)*
- [ ] **Reconcilier la cartographie AA Phase 1** : `RA-PROJET-C03-3/EEE/1` est porté à la fois par `lire-une-datasheet` et `analyse-de-schema-electronique` (multi-couverture C20) ; confirmer le statut de `EEE/2` et des `EEE/5` (logigramme/MAE/grafcet/chronogramme) pour étayer le « MVP strict 100 % ». Vérifier aussi `phases: dossier-technique` sur `analyse-de-schema` (repris du cadrage, non revérifié) et le lien `[[del|LED]]` (probablement rouge — créer `del.md` ou délier).
- [ ] **Vérifier toutes les fiches du lot Phase 0 (gestion de projet)** avant publication : `bom`, `mind-map`, `fast`, `amdec`, `matrice-eco-criteres`, `ecodesign` + fiches GP/outils antérieures.

## Reprise visuelle SVG (voie A — sessions dédiées)

- [ ] **`cycle-v-projet`** — re-coder en voie A (cohérence de style + mode sombre). Signalé en relecture du hub « Conduite de projet » (08/06) ; embarqué sur l'accueil + le hub. Le peigne complet des ~81 SVG est suivi dans `_drafts/peigne-svg-prepublication.md` et au BACKLOG.
- [ ] **`bete-a-cornes-generique`** — reprendre en voie A. Signalé en relecture de `specification-technique` (08/06) ; embarqué sur `specification-technique` + `bete-a-cornes`.
- [ ] **`pieuvre-generique`** + **`pieuvre-bras-3-axes`** — reprendre en voie A. Signalés en relecture de `specification-technique` (08/06) ; embarqués sur `specification-technique` (générique aussi sur `pieuvre`).

## Tâches techniques en suspens

*Aucune. (Réorganisation 3 branches faite 10/06 ; archivages JOURNAL au fil de l'eau — historique au JOURNAL.)*

## Décisions éditoriales en attente

*Portées par `BACKLOG.md` (section Discussions/décisions en attente, conventions à éprouver) et `conventions.md` §8 (candidates en vol). Pas de duplication ici.*
