# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables. Items faits :
> supprimer plutôt qu'archiver — l'historique est dans `JOURNAL.md`.

## Prochaines sessions (ordre logique)

> **➜ Prochaine session = Phase 0 reprise — `etat-de-l-art-technique`** — fiche-tuto, occasion de **figer le template `fiche-tuto.md`**. Bug SVG base path Quartz résolu 27/05 suite 2 (chemin absolu `/ressources/img/...` retenu, 10 fiches migrées, C21 promue § 6, vérifs visuelles débloquées). Puis 6 notions/tutos restants Phase 0 (`bom`, `mind-map`, `fast`, `amdec`, `matrice-eat`, `ecodesign`) + patches conventions (mini-hub imbriqué, fiche transverse multi-techno). Ensuite Phase 1 squelette transverse elec/info (8 fiches AA-centrées dont mini-hub `algorithme`).
>
> **Cadrage stratégique phase 2 elec/info acté 26/05 suite 5 (niveau D)** : (a) elec/info devient le **cœur du wiki**, ~50-60 fiches phase 2 assumées, plusieurs mois ; (b) structure **squelette transverse** (AA + compétences pro communes, indépendantes du choix techno) + **embranchements technologiques** (familles MCU + outils spécifiques, modules autonomes) ; (c) 5 mini-hubs à structurer (`microcontroleur`, `algorithme`, `pcb`, `bus-de-communication`, `techno-sans-fil`) ; (d) roadmap structurée en 5 phases (Phase 0 clôture → Phase 5 alimentation continue) ; (e) 3 cercles de priorité publication : MVP strict (AA 100 %, ~21 sessions) / MVP étendu (~35 sessions) / cible complète (~70 sessions). MVP rentrée scolaire atteignable en 2-3 mois.
>
> **Chantier clôture méthodologique terminé 26/05 suite 4** : (a) promotions C1-C6 dans §§ 1-2 + C15-C16 dans nouveau § 7 *Référentiel AA* de `conventions.md` ; (b) synthèse globale 8 sections dans `_drafts/referentiel/couverture-en-cours.md` (ambition au-delà du référentiel actée comme posture éditoriale) ; (c) archivage 3e vague JOURNAL.md (sessions 25/05 → 25/05 suite 4) via pattern MARKER + N segments éprouvé, JOURNAL 122→86 ko.
>
> **3 décisions niveau D en attente hiérarchie** (catégorie Hors scope par délégation pour 3 critères design, statut des 4 critères MME effleurés sans fiche centrale, statut `schema-cinematique` wiki vs délégation MME).

### 0. Session annexe — Nettoyage documentaire (complète)
**Décision 25/05 suite 2 → exécutée 25/05 suite 3** : compactage du set documentaire pour réduire les tokens chargés au démarrage. Démarrage post-refonte : ~11-12 k tokens (vs ~55 k initial, réduction ~80 %).

- Palier 1 — Création `conventions.md` ✅ fait 25/05 suite 3
- Palier 2 — Archivage JOURNAL pré-22/05 dans `JOURNAL-archive.md` ✅ fait 25/05 suite 3
- Palier 3 — Compactage TODO (51 ko → 12,5 ko) ✅ fait 25/05 suite 3
- Palier 4 — Compactage BACKLOG (22 ko → 20,2 ko) ✅ fait 25/05 suite 3
- Palier 5 — Refonte v2 du prompt projet (9 ko → 5,5 ko, 13 sections → 9) ✅ fait 25/05 suite 3
- Palier 6 — Test de démarrage post-refonte + patch §8 tail→head ✅ fait 25/05 suite 3

### 1. Cadrage pédagogique (suite)
- [ ] **Session "chronopédagogie"** : projeter le cycle en V à 5 phases sur les 15 semaines du semestre. Quelle phase à quel moment, combien de temps, quels jalons concrets ?
- [ ] **Format des compétences (AA)** : discussion sur la granularité et la convention de tag — en attente validation hiérarchie
- [ ] **Trame v2 — boucles itératives** : enrichir le schéma du cycle en V pour afficher honnêtement les retours arrière (PoC échec → revoir spec/concept, qualif échec → revoir dossier). À traiter après quelques fiches de phase rédigées.

### 2. Rédaction de fiches (parcours prioritaire)

**Stratégie actée (20/05 suite)** : squelettisation des 5 trames + 3 fils transverses bout en bout, puis cartographie AA, puis validation cohérence, **puis seulement** approfondissement trame par trame dans l'ordre.

- [x] ~~**Squelette + approfondissement `securite-et-qualite`**~~ (fil transverse — créée ex nihilo + approfondie 26/05 suite, 3 blocs co-actifs Sécurité produit / Sécurité projet / Qualité documentaire, 11 Pièges, 4 paragraphes Équipe, cohérence finale 4 passes → 3 patches wiki-links uniquement)
- [x] ~~**Session de cartographie AA**~~ — bouclée 26/05 suite 3 (passes B + A + écriture champ aa:). 21 fiches cartographiées, matrice par domaine produite, 17 fronts matters écrits + 4 skip légitimes. **Reste : synthèse globale** dans `_drafts/referentiel/couverture-en-cours.md` (niveau B/C, 1 session).
- [ ] **Session de validation cohérence d'ensemble** : relecture bout en bout, ajustements de périmètre entre phases.
- [x] ~~**Approfondissement des fiches phases du V**~~ : `concept.md` complet (25/05 suite 4-6, 27 patches). `preuve-de-concept.md` complet (25/05 suite 7, 5 étapes + 11 pièges + 4 ¶ équipe + 4 passes cohérence + round 2 wiki-links outils). `dossier-technique.md` complet (25/05 suite 8, alignement v2.1 + 5 étapes [étape 3 pré-rédigée autre Claude] + 11 pièges + 4 ¶ équipe + 0 patch cohérence + round 2 PCB). `integration-et-tests.md` complet (26/05, 27 patches : alignement v2.1 + 5 étapes voie C [2/3/3/2/2 H4 dont 3 H4 disciplinaires étape 2 et 3 H4 pyramide compressée étape 3] + 11 pièges + 4 ¶ équipe + 3 patches cohérence + round 2 validé). **Phase 1 du wiki = complète côté trames du V.**

*Notions à produire en parallèle (popovers posés dès les squelettes)* :

> **Roadmap phase 2 elec/info structurée** (actée 26/05 suite 5, niveau D). 3 sous-sections : Phase 0 clôture phase 1 GP / Phase 1 squelette transverse critique AA / Embranchements technologiques. Voir cadrage stratégique en tête de fichier.

#### Phase 0 — Clôture phase 1 GP (~10 sessions, MVP rentrée)

- [x] ~~`decomposition-fonctionnelle` (fiche-tuto, calque bete-a-cornes complet + 4 SVG bras 3 axes + triptyque mauvais/moyen/bon + 2 AA mappés PROJ/1 et /6 multi-couverture + patch concept étape 1 + patch schema-bloc-fonctionnel)~~ — **fait 27/05 suite**
- [ ] **Mini-session — résoudre bug SVG base path Quartz** : tester format `![[fichier.svg]]` sur `pieuvre.md` (1 fichier, 2 images), push, vérifier rendu github.io, migrer globalement si OK. **Bloque toutes les vérifs visuelles** des fiches à chemin `../../ressources/img/`. **Prochaine session.**
- [ ] **Dette** : restructurer `decomposition-fonctionnelle.md` au format fiche-tuto (sections *Procédure pas à pas*, *Captures d'écran*, *Raccrochage projet*) une fois le template `fiche-tuto.md` figé.
- [ ] `etat-de-l-art-technique` (fiche-tuto, popover posé `specification-technique.md` étape 2) — **occasion de figer le template `fiche-tuto.md`**
- [ ] `bom` (fiche-tuto, popover posé étape 2)
- [ ] `mind-map` (fiche-notion, popover posé étape 3)
- [ ] `fast` (fiche-tuto, popover posé étape 3 — à créer en phase 2 concept)
- [ ] **`amdec`** (fiche-tuto, popover sémé dans `securite-et-qualite.md`)
- [ ] **`matrice-eat`** (fiche-tuto, outil canonique trame `ecoconception`, doublement prioritaire)
- [ ] **`ecodesign`** (fiche-notion, popover à poser dans `specification-technique.md` étape 6 + `ecoconception.md`). Lien direct référentiel : critère `RA-PROJET-C04-4/PROJ/5`.
- [ ] **Template `fiche-tuto.md`** à figer en transition Phase 0 → Phase 1 (modèle : calque `fiche-notion.md` + sections *Procédure pas à pas* + *Captures d'écran* + *Raccrochage projet*)
- [ ] **Patches conventions** en transition : C18 mini-hub imbriqué (formalisation), C19 fiche transverse multi-techno (formalisation), patch couverture-en-cours § 6 (structure squelette + embranchements + stratégie MVP)

#### Phase 1 — Squelette transverse critique AA elec/info (~8 sessions)

Ordre pédagogique : datasheet → schéma → chronogramme → méthodes formelles. Couvre 100 % des critères NC EEE.

- [ ] `microcontroleur` (mini-hub mère, panorama familles MCU avec étiquette élargie *plateformes embarquées*)
- [ ] **`lire-une-datasheet`** (fiche-tuto transverse, compétence pro)
- [ ] **`analyse-de-schema-electronique`** (fiche-tuto transverse). Critère NC `RA-PROJET-C03-3/EEE/1`.
- [ ] **`chronogramme`** (fiche-tuto transverse, jonction datasheet ↔ algorithme ↔ oscilloscope ; raccrochages multiples). Contribue au critère `RA-EEE-C03-2/EEE/5`.
- [ ] **`algorithme`** (mini-hub mère pour 3 méthodes de description du flot de comportement)
- [ ] **`logigramme`** (fiche-notion fille hub algorithme). Contribue à `RA-EEE-C03-2/EEE/5` (1/4).
- [ ] **`machine-a-etats`** (fiche-notion fille hub algorithme, alias `MAE`). Contribue à `EEE/5` (2/4).
- [ ] **`grafcet`** (fiche-notion fille hub algorithme). Contribue à `EEE/5` (3/4).

→ **MVP strict atteint dès la fin de Phase 1 + 1er embranchement Arduino** (Phase 2 ci-dessous). Couverture AA 100 %. Site publiable.

#### Phase 2 — Premier embranchement Arduino (~3 sessions, MVP strict publiable)

- [ ] `arduino` (hub fille de `microcontroleur` — Uno + Mega, panorama écosystème)
- [ ] `arduino-prise-en-main` (fiche-tuto)
- [ ] `tinkercad` (fiche-tuto simu spécifique Arduino)

#### Phase 3 — Squelette transverse pro (~10 sessions, MVP étendu)

- [ ] `oscilloscope` (fiche-tuto compétence pro instrumentation)
- [ ] `multimetre` (fiche-tuto compétence pro)
- [ ] `firmware` (fiche-tuto transverse pure, archi code embarqué avec pseudocode ; rabbit hole possible mémoire / interruptions / RT non bloquante)
- [ ] `debugger-embarque` (fiche-tuto compétence pro)
- [ ] `pcb` (mini-hub mère, mention gravure à l'anglaise interne école, distinction monoface interne / double face externe JLCPCB)
- [ ] `kicad` (fiche-tuto outil PCB principal, simu intégrée mention)
- [ ] `bus-de-communication` (hub mère transverse)
- [ ] `uart` (fiche-notion popover, fille hub bus)
- [ ] `i2c` (fiche-notion popover, fille hub bus)
- [ ] `spi` (fiche-notion popover, fille hub bus)

#### Phase 4 — Second embranchement ESP32 (~4 sessions)

- [ ] `esp32` (hub fille de `microcontroleur`)
- [ ] `esp32-arduino-core` (fiche-tuto, entrée pratique)
- [ ] `wokwi` (fiche-tuto simu spécifique ESP32)
- [ ] `alimentation-electronique` (fiche-tuto compétence pro, raccrochage dossier-tech + intégration)

#### Phase 5+ — Alimentation continue (~25 sessions)

*Reste squelette transverse :*
- [ ] `techno-sans-fil` (hub mère transverse)
- [ ] `wifi`, `ble`, `xbee`, `zigbee`, `lora` (fiches-notion popovers, filles hub sans-fil)
- [ ] `circuitverse` (fiche-tuto simu numérique en ligne, retenue 26/05 suite 5)
- [ ] `ltspice` (fiche-tuto simu analogique desktop)
- [ ] `easyeda` (fiche-tuto outil PCB altern, embranchement de choix)
- [ ] `cable-management` (fiche-tuto, popover posé dans `integration-et-tests.md`)
- [ ] `bom-electronique` (fiche-tuto compétence pro)
- [ ] `falstad` (fiche-tuto simu altern, à évaluer si pertinent après CircuitVerse)

*Embranchements technologiques restants :*
- [ ] `esp32-idf` (fiche-tuto approfondissement, second tuto ESP32 après arduino-core)
- [ ] `raspberry-pi` (hub fille, étiquette *plateforme embarquée* car SBC stricto sensu) + `raspberry-pi-prise-en-main`
- [ ] `esp8266` (hub fille) + `esp8266-prise-en-main`
- [ ] **Hubs prio 2** : `stm32`, `teensy`, `pic` (chacun = hub fille + tutos d'utilisation)
- [ ] `pcb-gravure-ecole` (fiche-tuto spécifique monoface interne)

#### Tutos EEE/info embarquée — méthodes commande hors mini-hub algorithme

- [ ] **`chronogramme`** : voir Phase 1 ci-dessus (transverse, jonction datasheet/algorithme/oscilloscope)

#### Tutos délégués cours collègues (mécanique / fabrication / ACV)

- [ ] `usinage` (fiche-tuto procédé — délégué cours collègues)
- [ ] `impression-3d` (fiche-tuto procédé — délégué cours collègues)
- [ ] `soudure` (fiche-tuto procédé — délégué cours collègues)
- [ ] `acv-simplifiee` (fiche-notion citée + déléguée)

#### Tutos MME (statut à trancher niveau D)

- [ ] `schema-cinematique` (fiche-tuto MME). Lien référentiel `RA-MME-C02-1/MME/5`. **Statut wiki vs délégation à trancher.**
- [ ] `optimisation-mecanique` (fiche-tuto MME). Lien référentiel `RA-MME-C03-1/MME/6`. Périmètre à cadrer phase 2.

### 3. Templates à rédiger
- [ ] **Template fiche-tuto** dans `templates/fiche-tuto.md` — reste à produire. Modèle potentiel : `schema-bloc-fonctionnel.md`. À traiter quand on aura une 2ᵉ fiche-tuto pour stabiliser les conventions.

## Tâches techniques en suspens

- [ ] **Activer le hook pre-commit sur le PC perso** : depuis la racine du dépôt, lancer `git config core.hooksPath tools/git-hooks` puis vérifier avec `git config core.hooksPath` (doit renvoyer `tools/git-hooks`). **Pour Claude** : signaler proactivement cette tâche en début de session quand le MCP filesystem répond avec un chemin commençant par `C:\Users\turko\` (PC perso) plutôt que `C:\Users\timothe.turko.ICAMAD\` (PC pro). Tant que cette case n'est pas cochée, le hook ne tourne pas sur le PC perso.

## Décisions éditoriales en attente

- [ ] **6 conventions transverses (25/05) + conventions concept/PoC/dossier-technique (25/05 suite 4-8)** à éprouver. Conventions 1-6 à éprouver sur `securite-et-qualite` (3ᵉ transverse). Documentation dans `conventions.md` § 7.
  - Convention 6 mode d'application affiné (au fil + filet passe dédiée, 25/05 suite 7).
  - **Convention 10** (matrice incarnée dans `[!example]`) **promue § 2 le 26/05 début session** après 12 contextes éprouvés (concept 4 + PoC 4 + dossier-tech 4).
  - **Convention 11** (rythme H4 par étape) **promue § 6 le 25/05 suite 7**. **Amendée § 6 le 26/05** : 2 nouveaux cas inédits acquis sur `integration-et-tests` (étape multi-disciplinaire = 3 H4 par discipline ; pyramide compressée = 3 H4 dense pour 4 niveaux conceptuels).
  - **Convention 12** (Pièges nourris a posteriori) **promue § 6 le 26/05 début session** après ratio stable 37-45 % sur 3 trames du V (concept 37 %, PoC 45 %, dossier-tech 45 % ; integration ~55 %).
  - **Convention 13** (relire amont avant section avale) **promue § 5 le 26/05 fin session** après épreuve 2/2 sur dossier-tech (suite 8) + integration-et-tests.
  - **Convention 14** (seuil 30 ko MCP payload) **enrichie 26/05 suite** à deux niveaux : (a) **pattern MARKER + N segments** validé comme procédure standard pour déplacements de blocs > 30 ko (archivage JOURNAL 22→24/05 réussi, 60 ko net via 3 segments de 17-24 ko) ; (b) **nouveau piège EPERM Windows distinct du seuil de payload** : verrou de fichier quand Obsidian a le focus dessus, `edit_file` échoue au rename final, remède = changer d'onglet Obsidian. Zone intermédiaire 30-40 ko à éprouver pour calibrage exact (24 ko passe, 50 ko échoue suite 8).

*Note : les autres décisions éditoriales en attente (mode sombre callouts v2, pliage callouts, alignement rétroactif trames, alias Quartz, station météo, 2 images par fiche-notion, format date, tag `transverse`, section équipe transverses, etc.) sont désormais portées par BACKLOG.md (conventions à éprouver) ou par conventions.md (conventions acquises). Pas de duplication.*




