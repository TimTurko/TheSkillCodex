# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables.
> Section « Fait » : 3 dernières sessions seulement (rotation glissante en fin de session, suppression auto session N-3). Historique complet dans `JOURNAL.md`.

## Prochaines sessions (ordre logique)

> **➜ Prochaine session = Phase 0 clôture phase 1 GP** — `decomposition-fonctionnelle` prioritaire (fiche-notion outil natif phase concept étape 1). Puis 7 notions phase 1 (`etat-de-l-art-technique`, `bom`, `mind-map`, `fast`, `amdec`, `matrice-eat`, `ecodesign`) + **template `fiche-tuto.md`** + patches conventions (mini-hub imbriqué, fiche transverse multi-techno). Ensuite Phase 1 squelette transverse elec/info (8 fiches AA-centrées dont mini-hub `algorithme`).
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

- [ ] `decomposition-fonctionnelle` (fiche-notion, popover posé dans `concept.md` étape 1) — **prochaine session**
- [ ] `etat-de-l-art-technique` (fiche-tuto, popover posé `specification-technique.md` étape 2)
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

## Décisions à valider avec la hiérarchie
- [ ] Convention de tags AA (granularité, syntaxe)
- [ ] Niveau d'écart accepté entre référentiel et contenu produit (peut-on aller au-delà ?)
- [ ] Couleurs / charte graphique : faut-il aligner sur la charte école ?
- [ ] **Catégorie « Hors scope par délégation »** (acquise passe A 26/05 suite 3) : distincte de C15 (évaluation transversale enseignants). Concerne 3 critères design probablement délégables aux cours collègues : `PROJ-C03-3/1` (sketchs), `PROJ-C03-3/2` (prise en compte design), `MME-C03-1/1` (lister outils designers). À acter avec hiérarchie pour officialiser la délégation et la documenter dans les fiches concernées (specification-technique, concept).
- [ ] **Statut des 4 critères MME effleurés sans fiche centrale** (acquis passe A 26/05 suite 3) : `RA-MME-C02-1/MME/2` (procédés d'assemblage), `/4` (sollicitations mécaniques), `/6` (caractéristiques actionneurs), `RA-MME-C03-1/MME/2` (note de calcul transmission), `/4` (paramètres dynamiques). Effleurement récurrent dans concept et dossier-technique mais pas de fiche centrale. Délégation cours collègues MME ou fiches-tuto phase 2 à ajouter ?
- [ ] **Statut de la fiche `schema-cinematique`** (acquise passe A 26/05 suite 3) : wiki-link rouge déjà posé dans `hub/index.md`, critère `RA-MME-C02-1/MME/5` NC. Fiche-tuto à produire dans le wiki, ou délégation entière cours collègues MME (et retrait du wiki-link rouge) ?

## Tâches techniques en suspens

### Rattrapage commits + pushs en retard

> **Section nettoyée le 26/05 suite 3.** Le commit+push se fait systématiquement en fin de session, après le dernier prompt de Claude (voir `conventions.md` § 6 *Workflow Git*). Ne plus alimenter cette section. Le suivi des commits relève de Git (`git log`), pas du TODO.

- [x] ~~**Vérifier GitHub Actions « Deploy quartz site to github page »**~~ — **résolu en session 26/05 suite 2** : cause = action `actions/upload-pages-artifact@v3` résolue vers un SHA non téléchargeable (`56afc60...`). Fix appliqué : bump `upload-pages-artifact@v3` → `@v4` dans `.github/workflows/deploy.yml`. Build OK après push. Compatibilité avec `deploy-pages@v4` conservée (pas besoin de bumper deploy-pages).

### Manipulations manuelles en attente
- [x] ~~**Finaliser archivage JOURNAL 22-24/05**~~ **fait 26/05 suite via MCP** (pattern MARKER + N segments, 10 edit_file successifs, JOURNAL 156→96 ko / archive 60→119 ko, antichronologie préservée). Le seuil C14 30 ko a été contourné par segmentation en sub-blocs <25 ko. Incident EPERM verrou Windows Obsidian rencontré et résolu en changeant d'onglet — à documenter dans conventions § 7.
- [ ] **Déposer manuellement `cdcf-ecole-template.docx`** dans `content/ressources/templates/` (limite technique MCP filesystem : pas d'écriture binaire).
- [ ] **Supprimer `content/callouts-demo.md`** — fiche jetable, mission accomplie (validation visuelle palette v2). À faire à la main (pas d'outil delete MCP).
- [ ] **Supprimer le dossier `content/fiches/mia/` et son `index.md`** — MIA fusionné dans EEE depuis 26/05/2026 (référentiel école mis à jour, plus de domaine MIA). À faire à la main (limite MCP : pas d'outil delete). Patches navigation déjà effectués sur `content/index.md`, `content/hub/index.md` et `content/fiches/eee/index.md` (élargissement sémantique EEE).
- [ ] **Désactiver Dark Reader sur localhost et le site déployé**
- [ ] Configurer le plugin Templates d'Obsidian (`content/templates`)
- [ ] Installer **Pandoc + MiKTeX** pour export PDF académique (pas urgent)
- [ ] Produire le schéma d'illustration des conventions de flèches (mentionné dans `schema-bloc-fonctionnel`)
- [ ] Produire / trouver une photo de couveuse annotée (mentionné dans `schema-bloc-fonctionnel`)

### Vérifications visuelles en attente (rendus Quartz + smartphone)
- [ ] Vérifier le rendu des 4 squelettes (`concept`, `preuve-de-concept`, `dossier-technique`, `integration-et-tests`) en local Quartz + smartphone
- [ ] Vérifier le rendu de la fiche hub sur smartphone (vrai test responsif)
- [ ] Vérifier le rendu de la fiche `templates/callouts.md` (charte v2 + révision v2.1) en ligne et sur mobile
- [ ] Vérifier le rendu des templates `templates/fiche-trame.md` et `templates/fiche-notion.md` en ligne et sur mobile
- [ ] Vérifier le rendu de l'étape 4 de `specification-technique.md` (sous-liste F0/F1/F2/F3, callouts côte à côte)
- [ ] Vérifier le rendu de l'étape 6 + section Équipe de `specification-technique.md` (callout `[!info]` première utilisation, densité popovers TdM H4 Structurer)
- [ ] Vérifier le rendu de `bete-a-cornes.md` (3 SVG dans 3 callouts côte à côte)
- [ ] Vérifier le rendu de `gestion-de-projet.md` (3 blocs co-actifs, callouts v2.1, sous-listes Continu/Jalonné)
- [ ] Vérifier le rendu de `ecoconception.md` (3 blocs co-actifs, callouts v2.1, popovers wiki-links — `microcontroleur`, `pla`, `rohs`)
- [ ] Vérifier le rendu des 7 nouvelles fiches du 25/05 suite 2 (densité tableau `matrice-de-decision`, légende `matrice-de-risques-station-meteo`, mode sombre des 12 SVG)
- [ ] Vérifier le rendu de `pieuvre.md` approfondi (tableau 5 familles de milieux, double H3 Familles + Topologie)
- [ ] Vérifier le rendu de `concept.md` étapes 1-2 (2 H4 par étape, callouts v2.1, tableau matrice 3 solutions × 5 critères + scores pondérés dans l'`[!example]` étape 2 — densité 6 lignes × 5 colonnes potentiellement chargée en mobile)
- [ ] Vérifier le rendu de `concept.md` étape 3 (3 H4 pivot dense, tableau de conflits 4 colonnes × 2 lignes dans `[!example]`, callouts warning + tip + example + livrable)
- [ ] Vérifier le rendu de `concept.md` étape 4 (2 H4 économes, tableau de pré-dim 6 colonnes × 5 lignes dans `[!example]` — densité supérieure aux précédents, point de vigilance mobile)
- [ ] Vérifier le rendu de `concept.md` étape 5 (3 H4 clôture documentaire, TdM type 5 sections + TdM instanciée dans `[!example]`)
- [ ] Vérifier le rendu de `concept.md` section Pièges (8 entrées gras court + explication, format calque spec-tech)
- [ ] Vérifier le rendu de `concept.md` section Équipe (4 paragraphes thématiques, wiki-links rouges sur normes RoHS/REACH/DEEE et procédés usinage/impression-3d/soudure)
- [ ] Vérifier le rendu de `concept.md` post-cohérence (passe 25/05 suite 6 : densité wiki-links après audit exhaustif convention 6, notamment dans l'`[!example]` étape 5 qui prend 6 wiki-links supplémentaires)
- [ ] Vérifier le rendu de `preuve-de-concept.md` approfondi (5 étapes complètes, callouts v2.1, 6 nouveaux wiki-links sur outils/instruments, tableau de statut étape 4, TdM type 5 sections instanciée étape 5)
- [ ] Vérifier le rendu de `preuve-de-concept.md` section Pièges (11 entrées gras court + explication, ratio supérieur à concept)
- [ ] Vérifier le rendu de `preuve-de-concept.md` section Équipe (4 paragraphes thématiques, wiki-links rouges sur 6 nouvelles cibles)
- [ ] Vérifier le rendu de `integration-et-tests.md` étape 1 (2 H4 économes, `[!example]` 3 paragraphes structurés par branche, calendrier semaine n°12-15)
- [ ] Vérifier le rendu de `integration-et-tests.md` étape 2 (**3 H4 disciplinaires** élec/méca/info — cas inédit C11, `[!example]` 4 paragraphes structurés par discipline)
- [ ] Vérifier le rendu de `integration-et-tests.md` étape 3 (**3 H4 pivot dense pyramide compressée** niveau 1 / niveaux 2-3 / niveau 4, `[!example]` 5 paragraphes structurés par niveau + 3 statuts qualification)
- [ ] Vérifier le rendu de `integration-et-tests.md` étape 4 (2 H4 économes bilans, `[!example]` 4 paragraphes structurés par bilan + REX)
- [ ] Vérifier le rendu de `integration-et-tests.md` étape 5 (2 H4 économes rapport+soutenance, `[!example]` 3 paragraphes structurés)
- [ ] Vérifier le rendu de `integration-et-tests.md` section Pièges (11 entrées gras court + explication, ratio ~55 % a posteriori)
- [ ] Vérifier le rendu de `integration-et-tests.md` section Équipe (4 paragraphes thématiques, wiki-links rouges sur nouvelles cibles : `cable-management`, `gabarit`, `firmware`)
- [ ] Vérifier le rendu de `securite-et-qualite.md` (3 blocs co-actifs Sécurité produit / Sécurité projet / Qualité documentaire, callouts v2.1, popovers nouvelles cibles wiki-links rouges — `marquage-ce`, `basse-tension`, `emc`, `iso-12100`, `amdec`, `revue-de-code`, `epi`)
- [ ] Vérifier le rendu de `securite-et-qualite.md` Bloc 1 (`[!example]` 4 axes pincement/couple/énergie/parades, calendrier semaine n°2-15 cohérence chiffrée avec dossier-tech)
- [ ] Vérifier le rendu de `securite-et-qualite.md` Bloc 2 (3 risques cotés, cas dérogation refusée semaine n°12, `[!warning]` règles non négociables)
- [ ] Vérifier le rendu de `securite-et-qualite.md` Bloc 3 (plan 6 points revues, tags Git v0.1→v1.0.1, `[!tip]` tracer au moment de la décision)
- [ ] Vérifier le rendu de `securite-et-qualite.md` section Pièges (11 entrées gras court + explication, ratio ~45 %)
- [ ] Vérifier le rendu de `securite-et-qualite.md` section Équipe (3 axes articulation cadence/matrice de risques/piloter sans écraser, délégation explicite ESE + responsables équipement)

## Décisions éditoriales en attente

- [ ] **6 conventions transverses (25/05) + conventions concept/PoC/dossier-technique (25/05 suite 4-8)** à éprouver. Conventions 1-6 à éprouver sur `securite-et-qualite` (3ᵉ transverse). Documentation dans `conventions.md` § 7.
  - Convention 6 mode d'application affiné (au fil + filet passe dédiée, 25/05 suite 7).
  - **Convention 10** (matrice incarnée dans `[!example]`) **promue § 2 le 26/05 début session** après 12 contextes éprouvés (concept 4 + PoC 4 + dossier-tech 4).
  - **Convention 11** (rythme H4 par étape) **promue § 6 le 25/05 suite 7**. **Amendée § 6 le 26/05** : 2 nouveaux cas inédits acquis sur `integration-et-tests` (étape multi-disciplinaire = 3 H4 par discipline ; pyramide compressée = 3 H4 dense pour 4 niveaux conceptuels).
  - **Convention 12** (Pièges nourris a posteriori) **promue § 6 le 26/05 début session** après ratio stable 37-45 % sur 3 trames du V (concept 37 %, PoC 45 %, dossier-tech 45 % ; integration ~55 %).
  - **Convention 13** (relire amont avant section avale) **promue § 5 le 26/05 fin session** après épreuve 2/2 sur dossier-tech (suite 8) + integration-et-tests.
  - **Convention 14** (seuil 30 ko MCP payload) **enrichie 26/05 suite** à deux niveaux : (a) **pattern MARKER + N segments** validé comme procédure standard pour déplacements de blocs > 30 ko (archivage JOURNAL 22→24/05 réussi, 60 ko net via 3 segments de 17-24 ko) ; (b) **nouveau piège EPERM Windows distinct du seuil de payload** : verrou de fichier quand Obsidian a le focus dessus, `edit_file` échoue au rename final, remède = changer d'onglet Obsidian. Zone intermédiaire 30-40 ko à éprouver pour calibrage exact (24 ko passe, 50 ko échoue suite 8).

*Note : les autres décisions éditoriales en attente (mode sombre callouts v2, pliage callouts, alignement rétroactif trames, alias Quartz, station météo, 2 images par fiche-notion, format date, tag `transverse`, section équipe transverses, etc.) sont désormais portées par BACKLOG.md (conventions à éprouver) ou par conventions.md (conventions acquises). Pas de duplication.*

## Fait

*Voir `JOURNAL.md` pour l'historique détaillé. Rotation glissante : 3 dernières sessions seulement.*

### Session 2026-05-26 (suite 5) — Livraison `caracteriser-une-exigence` + cadrage stratégique phase 2 elec/info
- [x] **Fiche `caracteriser-une-exigence.md` livrée** (15,5 ko, calque bete-a-cornes complet, triplet critère/niveau/flexibilité, triptyque tableau mauvais/moyen/bon sur exigence FP1 bras 3 axes ± 5 mm F1, tableau F0/F1/F2/F3 avec colonne *Quand l'utiliser*, 6 pièges, cas particulier exigences binaires et réglementaires, wiki-link `unite-si` propagé × 2). Cadrage niveau C en 4 questions méthodo tranchées, rédaction niveau A en autonomie.
- [x] **Cadrage stratégique phase 2 elec/info acté niveau D** : (a) posture éditoriale renforcée — elec/info devient le cœur du wiki, ~50-60 fiches phase 2 assumées ; (b) structure squelette transverse (AA + compétences pro communes) + embranchements technologiques (familles MCU + outils spécifiques) ; (c) 5 mini-hubs imbriqués identifiés (`microcontroleur`, `algorithme`, `pcb`, `bus-de-communication`, `techno-sans-fil`) ; (d) roadmap structurée en 5 phases (Phase 0 clôture phase 1 → Phase 5 alimentation continue) ; (e) 3 cercles de priorité publication (MVP strict / MVP étendu / cible complète) ; MVP rentrée scolaire ~21 sessions.
- [x] **Choix techniques actés** : ESP32 Arduino-core puis IDF, hub `bus-de-communication` + hub `techno-sans-fil` avec fiches-notion popovers, Raspberry sous étiquette élargie *plateformes embarquées* dans hub MCU, CircuitVerse retenu pour simu numérique (testé par utilisateur), XBee reclassé en hub sans-fil (module hardware qui parle Zigbee/Wi-Fi), chronogramme transverse jonction datasheet/algorithme/oscilloscope (fiche autonome hors mini-hub algorithme), firmware transverse pur avec pseudocode et rabbit hole optionnel, fiches-tuto pivot phase 1 = fil rouge esquissée.
- [x] **Refonte TODO** en 3 sous-sections roadmap (Phase 0 clôture phase 1 / Phase 1 squelette critique AA / Embranchements technologiques) avec ordre pédagogique datasheet → schéma → chronogramme → méthodes formelles. Flèche prochaine session patchée vers `decomposition-fonctionnelle`.
- [x] **Conventions candidates en éprouvage** : C18 mini-hub imbriqué (5 cas identifiés), C19 fiche transverse multi-techno (à éprouver sur `firmware` et `analyse-de-schema-electronique`). C17 patch flèche TODO post-arbitrage éprouvée 2/N.
- [x] **Limitation technique session** : serveur MCP `filesystem` (PC perso) déchargé entre l'écriture initiale de la fiche et la phase de clôture. Bascule sur `theskillcodex` (PC pro synchronisé via OneDrive/sync) pour appliquer les patches. Acquis : vérifier l'accès aux deux serveurs au démarrage de session, l'utilisateur peut indiquer la disponibilité si doute.

### Session 2026-05-26 (suite 4) — Clôture méthodologique : promotions conventions + synthèse globale couverture AA + archivage JOURNAL 3e vague
- [x] **Acte 1 — Promotions conventions** (6 edits sur `conventions.md`) : retrait bannière § 7 acquise 25/05 suite (C1-C6), enrichissement bullet wiki-links § 2 (mode au fil + filet passe dédiée), création nouveau **§ 7 *Référentiel AA*** consolidant C15/C16 (codification critères, 4 catégories C/E/HS/NC + règle statut dominant, 1 fiche-tuto par critère EEE/info embarquée, front matter `aa`, référentiel source, 3 décisions niveau D ouvertes), renumérotation § 7 → § 8 *En cours d'éprouvage*, nettoyage redondance § 6.
- [x] **Acte 2 — Synthèse globale couverture AA** (3 edits sur `_drafts/referentiel/couverture-en-cours.md`) : 8 sections rédigées (Bilan en chiffres / Lecture par domaine / Lecture par catégorie / Trous NC adressés vs à arbitrer / Décisions niveau D ouvertes / **Ambition au-delà du référentiel** / Conventions méthodo validées / Suite des opérations) + 2 patches typo correctifs (« critore » → « critère ») + précision pourcentage PROJ.
- [x] **Acte 3 — Archivage JOURNAL 3e vague** (12 edits) : pattern MARKER + N segments éprouvé une 2e fois. Phase 1 (6 edits) : marker + correction dette commentaire HTML + 4 insertions segments (du plus ancien au plus récent) + retrait marker. Phase 2 (5 edits effectifs) : T1 + T2 + batch T3+T4+T5 + T6 préambule + commentaire HTML final. Bonus : correction préambule archive (dette « 25/05 SUITE 7 » → « 26/05 SUITE » + mention 3e vague).
- [x] **Bilan tailles** : JOURNAL.md 122 → 86 ko (-36 ko, sous seuil 100 ko ✓) ; JOURNAL-archive.md 119 → 158 ko (+39 ko, cohérent).
- [x] **1 incident C14 résolu** : T3 échoué sur typo de transcription (« resoud » sans accent vs « résoud » dans le fichier), corrigé en relisant le fichier via MCP (discipline C14 confirmée : ne pas retranscrire de mémoire pour les anchors).
- [x] **Posture éditoriale actée** : le wiki dépasse délibérément le scope AA (mieux trop que pas assez). 3 fiches phase 1 sans critère AA central (securite-et-qualite, matrice-de-decision, hub/index) illustrent l'ambition au-delà du référentiel, pas exception à justifier. Inscrit dans la synthèse globale.

### Session 2026-05-26 (suite 3) — Cartographie AA bouclée (passes B + A + écriture aa: front matters)
- [x] **Passe B accélérée** sur 13 fiches : 12 fiches-notion (afnor-nfx50-151, bete-a-cornes, cahier-des-charges-fonctionnel, fonction, pieuvre, gantt, jalons, retroplanning, wbs, matrice-de-decision, matrice-de-risques, schema-bloc-fonctionnel) + hub/index. 1 seul edit_file pour les 13 cartographies (~22 ko payload, sous seuil C14), 0 patch supplémentaire.
- [x] **Passe A par domaine** (EEE → ESE → MEO → MME → PROJ) : matrice critère × fiches pour chaque critère, bilans par domaine, tableau global. **Couverture finale 57 critères : 36 C (63 %) + 9 E (16 %) + 4 HS (7 %) + 8 NC (14 %)**.
- [x] **8 patches de correction** sur le tableau global (erreur initiale : sommation C+E quand un critère est dans plusieurs fiches ; correction : statut dominant C > E > HS > NC).
- [x] **Amendement passe B** sur integration-et-tests : ajout `RA-PROJET-C03-3/PROJ/3` (réaliser structure méca avec élec et énergie) en Couvert via étapes 1+2. Bilan 7 C → 8 C, total 13 → 14.
- [x] **Écriture champ `aa:` dans 17 fronts matters** : 7 trames (specification-technique, concept, preuve-de-concept, dossier-technique, integration-et-tests, gestion-de-projet, ecoconception) + 10 fiches-notion (bete-a-cornes, cahier-des-charges-fonctionnel, fonction, pieuvre, gantt, jalons, retroplanning, wbs, matrice-de-risques, schema-bloc-fonctionnel — remplacement ancien format AA-EEE-C02-CFE1-01 → 2 codes nouvelle convention RA-PROJET-C04-4/PROJ/4 et /6). **17 patches edit_file séquentiels passés du premier coup**, 0 échec C14, 0 typo de transcription. Discipline anchor court `aa: []` + lecture préalable confirmée.
- [x] **4 fiches skip légitimes** à `aa: []` (0 Couvert justifié) : securite-et-qualite (posture professionnelle), afnor-nfx50-151 (stub référentiel), matrice-de-decision (outil pivot transverse), hub/index (méta-structure).
- [x] **2 fiches phase 2 nouvelles ajoutées au TODO** : `simulation-electronique` (EEE, couvre EEE/3+/4 groupés), `schema-cinematique` (MME, couvre MME/5, statut wiki vs délégation à trancher).
- [x] **3 décisions niveau D nouvelles** ajoutées à la liste hiérarchie : catégorie « Hors scope par délégation », statut des 4 critères MME effleurés sans fiche centrale, statut schema-cinematique wiki ou délégation.
- [x] **5 insights structurants** capitalisés en bilan passe A : ESE et MEO entièrement couverts phase 1, EEE et MME ont des trous structurés, PROJ est le domaine majeur, convention C16 validée empiriquement, 3 fiches phase 1 sans critère AA central pour 3 raisons distinctes.

### Session 2026-05-26 (suite 2) — Cartographie AA passe B sur 8 fiches phase 1 + Hors scope + patch budget GP
- [x] **Décisions méthodo Q1/Q2/Q3 tranchées** : format cartographie option C (champ `aa:` + table dérivée, descente jusqu'au critère) + granularité 3 niveaux + ordre hybride B-then-A
- [x] **Codification critères** : `<Code_RA>/<AA_DOMAIN>/<N°critère>`
- [x] **Normalisation référentiel** : `_drafts/referentiel/referentiel-normalise.md` produit, 57 critères distincts (62 lignes source, 5 doublons retirés), 12 AA, 5 domaines (PROJ 25 / MME 12 / EEE 10 / MEO 10 / ESE 5). MIA fusionné dans EEE et PROJ
- [x] **Patches navigation MIA→EEE** : `content/index.md`, `content/hub/index.md`, `content/fiches/eee/index.md` (titre élargi « Électronique et informatique embarquée », mention historique 26/05/2026)
- [x] **Fichier capitalisation** : `_drafts/referentiel/couverture-en-cours.md` produit avec grille de lecture (3 niveaux + Hors scope, phase 1 vs phase 2, convention 1-fiche-par-critère EEE)
- [x] **Cartographie B passe sur 8 fiches phase 1** : spec-tech (11), concept (16), PoC (12), dossier-tech (17), integration-et-tests (13), gestion-de-projet (12), ecoconception (7), securite-et-qualite (5)
- [x] **C15 acquise — catégorie Hors scope** : critère évalué transversalement par enseignants, hors périmètre wiki. 4 cas identifiés (`PROJ/3`, `PROJ/4`, `PROJ/5`, `PROJ/6`). Reclassement rétroactif sur 4 fiches déjà cartographiées
- [x] **C16 acquise — 1 fiche par critère EEE/info embarquée** (ou tutoriel gonflé multi-couverture). Décision utilisateur 26/05 suite 2
- [x] **Patch budget gestion-de-projet** : trou phase 1 identifié (`RA-PROJET-C07-1/PROJ/3`) puis résolu en session — 5 → 6 outils canoniques (ajout suivi budgétaire bloc 2) + livrable 2/3 enrichi
- [x] **Trou phase 1 MEO/5 vérifié présent** dans GP bloc 3 (3 options + règle pour dépassement)
- [x] **PROJ/7 démontabilité** : critère bien attribué découvert dans ecoconception bloc 2 (pas un trou)
- [x] **EEE/2 reclassé en Couvert** dans integration-et-tests étape 2 (était identifié trou phase 2 sur PoC)
- [x] **Insight securite-et-qualite** = 0 critère Couvert : trame de posture professionnelle, à noter en synthèse globale (le cadre AA n'est pas le seul critère de pertinence)
- [x] **C14 vécue à chaud** : 3 typos transcription anchors (espacement variable, caractère flèche U+279C vs U+27A4), 1 erreur de routage, 2 régressions typo introduites par patch corrigées immédiatement
- [x] **6 nouvelles fiches phase 2** ajoutées au TODO : `ecodesign`, `analyse-de-schema-electronique`, 4 méthodes commande (`logigramme`/`machine-a-etats`/`grafcet`/`chronogramme`), `optimisation-mecanique`
- [x] **Incident GitHub Pages résolu en session** : `actions/upload-pages-artifact@v3` résolue vers un SHA non téléchargeable (`56afc60...`). Fix bump v3→v4 dans `.github/workflows/deploy.yml`. Build OK après push. Compatibilité avec `deploy-pages@v4` conservée











