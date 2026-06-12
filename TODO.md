# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables. Items faits :
> supprimer plutôt qu'archiver — l'historique est dans `JOURNAL.md`.

## Prochaines sessions (ordre logique)

> **➜ MAJ 11/06 (suite 2)** — **RELECTURE §4 TERMINÉE (8/8) + §5 ALGORITHME TERMINÉ (5/5)**, mode inversé posture renforcée, PC pro → PC perso. **`lire-une-datasheet` restructurée** en 2 parties + sommaire à ancres (méthode / **lecture commentée du L298N** : boîtiers, brochage + table de vérité, pseudocode 4 fonctions, AMR commentés, calcul thermique → radiateur, gabarit PCB — valeurs vérifiées datasheet ST rev 5 ; flèche moteur B corrigée) → **6 captures C29 à récolter + clic-test des 2 ancres du sommaire**. **3 fiches créées** : `generateur-de-signaux` (alias GBF, piège High-Z/50 Ω), `analyseur-logique` (tableau C66), `precision-de-mesure` (4 cibles) → **2 captures C29** (face avant GBF, trame PulseView). Enrichies : `instruments-de-mesure` (callout TBT), `multimetre` (I = V/R, recroisements protection/précision), `oscilloscope` (**section Brancher la sonde + SVG terre/pince**). **§5** : hub (quadriptyque quatre-regards, pseudocode, **tip Le test du récit**), `logigramme` (boucle prolongée, exception embarqué, ISO 5807), `machine-a-etats` (callout mauvais **resynchronisé avec le SVG**, état initial ×2, événement/garde remodélisés), `grafcet` (mode sombre double carré, **SVG divergences ET/OU**), `chronogramme` (**§ Un statut à part**). **7 SVG créés / 8 corrigés.** Candidates : C66 5/N, C67 étendue instruments, **C68 nouvelle** (un schéma explicatif par fiche-outil). **PROCHAINE SESSION = §6 SOCLE MCU** (`microcontroleur` →, ⚠ `gpio` rouge #B23A2E en sombre), même mode, C68 à éprouver fiche par fiche. **RESTE À TIM** : commit/push ; **8 captures C29** ; validations en attente inchangées (micropython-serie→repl, filtrage rouge, slug eeprom).

> **➜ MAJ 11/06 (suite)** — **RELECTURE §4 EEE FONDATIONS : 6/8 + PRODUCTION ALIMENTATION**. Session de relecture en **mode inversé** (Claude critique en premier passage — pédagogie, progression, notions connexes — puis arbitrage Tim) : `niveaux-de-tension`, `alimentation-electronique` (refonte : section *Choisir la source*, plan de masse, piège « puissance à travers le régulateur »), `chaine-energie` (lien rouge `[[boucle-fermee]]` posé, tip composants par bloc), `analyse-de-schema-electronique` (multi-rails, 6 contrôles, justification fausse de l'exemple corrigée, SVG netlabels + zones) — toutes validées et cochées. **2 fiches créées** : `decouplage` et `protection-electronique` (roue libre dédiée, ESD, organes complémentaires, 5 petits SVG de branchement). **9 SVG neufs** au total. Candidates **C66** (tableaux de références éprouvées famille-first, 4×) et **C67** (petit SVG de branchement par organe) en §8. **PROCHAINE SESSION = RELECTURE §4 fin puis §5+** : `lire-une-datasheet` (⚠ sens des 2 flèches moteur L298N) → `instruments-de-mesure` → `multimetre` (⚠ géométrie série/parallèle) → `oscilloscope`, puis §5 algorithme et au-delà — même mode inversé, **posture critique renforcée** (voir prompt de lancement). **RESTE À TIM** : commit/push de la session ; clic-test `[[<branche>/index]]` si pas encore fait. Validations en attente inchangées (micropython-serie→repl, filtrage rouge, slug eeprom).

> **➜ MAJ 11/06** — **NETTOYAGE DOCUMENTAIRE COMPLET (3 volets)**, à cheval PC perso / PC pro. **(1) Archivage JOURNAL (10/06)** : 6 entrées 08/06→10/06 conservées, JOURNAL 97→27,8 ko, archive →422 ko (coupe β, invariant antichrono vérifié au byte près) ; `*.bak` gitignorés puis supprimés des deux postes. **(2) Grooming conventions.md (10-11/06)** : nouveau cluster §6 *Modules MCU — conventions de famille* (C25/C26/C32/C45/C56/C57 promues, arbitrage Tim) ; élagage §8 (bloc 28/05 suite 2 → pointeur ; 7 blocs MCU 06/06 suite 6→12 condensés en une synthèse, ~14 ko) ; **anomalie C50** (numéro orphelin jamais défini) neutralisée + loggée BACKLOG — ne jamais réaffecter, numéroter à partir de C65 ; mentions « promouvable §6 » caduques corrigées (items 32/35/36/45/50) ; ancre d'intro `#7-`→`#8-en-cours-déprouvage` réparée ; 112→103 ko. **(3) Grooming TODO (11/06)** : pile de flèches historiques purgée (l'historique vit au JOURNAL), sections faites supprimées, 77→~10 ko. **Au passage** : premier pull post-réorg 3 branches sur PC pro — erreurs Windows de suppression de dossiers (verrous) **sans conséquence git** ; coquilles vides `content/hub` + `content/fiches` supprimées à la main par Tim ; `git status` propre. **PROCHAINE SESSION = REPRISE RELECTURE HUMAINE — branche Système embarqué** (arbitrage Tim 11/06) : dérouler `_drafts/relecture-ordre.md` à partir de **§4 · EEE — fondations électronique** (`niveaux-de-tension` →), puis §5 algorithme, §6+ socle MCU et familles ; **§1bis transverses** (`gestion-de-projet` / `ecoconception` / `securite-et-qualite`) **et §2-3 PROJ/MEO repoussées après**. Sur le rendu Quartz local (`npx quartz build --serve`), cocher à validation. **RESTE À TIM** : si pas encore fait, build + **clic-test des `[[<branche>/index]]`** (seul filet sur l'angle mort `x/index`, pré-requis promotion C60) ; commit/push du nettoyage. **Validations Tim en attente** (BACKLOG / conventions §8) : déviation `micropython-serie`→`micropython-repl` ; `micropython-filtrage` laissé rouge ; slug `micropython-eeprom`.

### 1. Cadrage pédagogique (suite)
- [ ] **Session "chronopédagogie"** : projeter le cycle en V à 5 phases sur les 15 semaines du semestre. Quelle phase à quel moment, combien de temps, quels jalons concrets ?
- [ ] **Format des compétences (AA)** : discussion sur la granularité et la convention de tag — en attente validation hiérarchie
- [ ] **Trame v2 — boucles itératives** : enrichir le schéma du cycle en V pour afficher honnêtement les retours arrière (PoC échec → revoir spec/concept, qualif échec → revoir dossier). À traiter après quelques fiches de phase rédigées.

### 2. Rédaction de fiches

- [ ] **Module XIAO (Seeed Studio) — cours complet** (demande Tim 12/06 : carte retenue pour un projet de l'an prochain à l'ICAM, base ESP32-C3/S3). Déjà fait : ligne ajoutée au panorama de `microcontroleur` + pastille sur le SVG de positionnement, lien rouge `[[xiao]]` posé (TODO approche A). À cadrer en session dédiée : hub famille C18 dans `embarque/mcu/xiao/` ; la XIAO étant un **format** sur base ESP32, candidat naturel au régime **lean C56** appuyé sur le module `esp32` + couche [T] (spécificités propres : brochage réduit ~11 broches, antenne, formats C3/S3/Sense caméra-micro, pad batterie) — vs parcours autonome complet C47 ; arbitrage Tim au cadrage.
- [ ] **Enrichir `lire-une-datasheet` partie 2** (« Lecture de la datasheet du L298N », restructurée 11/06) — souhait Tim 11/06 : approfondir la lecture commentée plus tard (autres extraits annotés, exercices, etc. — périmètre à cadrer en session dédiée).
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
- [ ] **Vérifier les images** de toutes les fiches (présence + rendu). *(Les 11 SVG du 29/05 — algorithme/logigramme/MAE/grafcet/chronogramme/analyse-de-schema — ont été validés au rendu lors des relectures du 11/06, géométrie vérifiée au calcul ; recoupe le peigne SVG — cf. section Reprise visuelle.)*
- [ ] **Reconcilier la cartographie AA Phase 1** : `RA-PROJET-C03-3/EEE/1` est porté à la fois par `lire-une-datasheet` et `analyse-de-schema-electronique` (multi-couverture C20) ; confirmer le statut de `EEE/2` et des `EEE/5` (logigramme/MAE/grafcet/chronogramme) pour étayer le « MVP strict 100 % ». Vérifier aussi `phases: dossier-technique` sur `analyse-de-schema` (repris du cadrage, non revérifié) et le lien `[[del|LED]]` (probablement rouge — créer `del.md` ou délier).
- [ ] **Vérifier toutes les fiches du lot Phase 0 (gestion de projet)** avant publication : `bom`, `mind-map`, `fast`, `amdec`, `matrice-eco-criteres`, `ecodesign` + fiches GP/outils antérieures.

## Reprise visuelle SVG (voie A — sessions dédiées)

- [ ] **`analyse-de-schema-zones`** — reprise ponctuelle : le condensateur de découplage **C3 passe derrière le bloc MCU** (signalé à la validation du 11/06). Reste de la géométrie validée par Tim.
- [ ] **`cycle-v-projet`** — re-coder en voie A (cohérence de style + mode sombre). Signalé en relecture du hub « Conduite de projet » (08/06) ; embarqué sur l'accueil + le hub. Le peigne complet des ~81 SVG est suivi dans `_drafts/peigne-svg-prepublication.md` et au BACKLOG.
- [ ] **`bete-a-cornes-generique`** — reprendre en voie A. Signalé en relecture de `specification-technique` (08/06) ; embarqué sur `specification-technique` + `bete-a-cornes`.
- [ ] **`pieuvre-generique`** + **`pieuvre-bras-3-axes`** — reprendre en voie A. Signalés en relecture de `specification-technique` (08/06) ; embarqués sur `specification-technique` (générique aussi sur `pieuvre`).

## Tâches techniques en suspens

*Aucune. (Réorganisation 3 branches faite 10/06 ; archivages JOURNAL au fil de l'eau — historique au JOURNAL.)*

## Décisions éditoriales en attente

*Portées par `BACKLOG.md` (section Discussions/décisions en attente, conventions à éprouver) et `conventions.md` §8 (candidates en vol). Pas de duplication ici.*
