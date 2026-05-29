# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables. Items faits :
> supprimer plutôt qu'archiver — l'historique est dans `JOURNAL.md`.

## Prochaines sessions (ordre logique)

> **➜ MAJ 29/05 (suite)** — Phase 1 squelette EEE **close** (grappe `algorithme` : algorithme / MAE / logigramme / grafcet / chronogramme + tuto `analyse-de-schema-electronique` ; reste `gpio` rouge). **MVP strict structurellement atteint** — couverture AA 100 % **à reconcilier** (cf. *Pré-publication MVP*). **Prochaine session = à décider ensemble (post-push)** : pistes ouvertes — clore `gpio` ; chaîne `arduino-machine-a-etats` (notion MAE désormais disponible) ; 1ʳᵉ fiche Niveau ingénieur ; hub `esp32` (Phase 4) ; ou passe relecture/images du backlog livré.
>
> **➜ Prochaine session = arbitrage utilisateur ouvert (post-batch Arduino)** — Phase 2 a livré 21 fiches arduino-* (Bases 11 + Avancées straight 10) en batch le 29/05 soir, hub Arduino Avancées à 19/21 (manquent `arduino-machine-a-etats` + `arduino-filtrage` optionnel) + Niveau ingénieur entièrement à faire (7 fiches, cadrage propre par fiche). **Choix probable à proposer en démarrage** : (a) chaîne `machine-a-etats` (notion transverse) + `arduino-machine-a-etats` ; (b) 1ère fiche Niveau ingénieur (`arduino-interruptions` ou `arduino-pid` comme têtes naturelles) ; (c) hub `esp32` (second embranchement, ouverture Phase 4) ; (d) `gpio` transverse (la grappe E/S reste rouge). **Relecture des 21 fiches arduino-* en attente** de la récolte du premier set d'images utilisateur (garde-fou explicite acté le 29/05).
>
> **Sessions 28/05** : Phase 0 GP **close** (6 fiches ; entrée JOURNAL reconstruite a posteriori 28/05 suite). Squelette EEE/mcu démarré 28/05 suite 2 — hubs `microcontroleur` + `arduino`, SVG archi MCU, Tutoriels Arduino en 4 paliers, **C18 épreuve 1/N**. Suite 3 : `lire-une-datasheet` (tuto transverse + 2 SVG). Suite 4 : `niveaux-de-tension` + grappes `bus` et `sans-fil` + 7 briques MCU **en batch** (18 fiches + 4 SVG), **C18 promue § 6** (épreuve 3/3).
>
> **Session 29/05** : Phase 2 embranchement Arduino — matinée PC perso, 3 fiches *Prendre en main* (`arduino-prise-en-main` + `tinkercad` + `arduino-serie`) hors-batch. Soir PC pro (MCP `theskillcodex:*`), **batch 21 fiches Bases + Avancées straight** après pushback D et arbitrage utilisateur Option A. Hub Arduino à 22/24 fiches en vert (manquent `arduino-machine-a-etats` + `arduino-filtrage`). **C27 épreuve 3/N étendue à batch de fiches-tuto pleines** — borne déplacée, reformulation à acter avant promotion. Relecture utilisateur des 21 fiches reportee a la recolte du premier set d'images.
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
- [x] ~~**Dette** : restructurer `decomposition-fonctionnelle.md` au format fiche-tuto (sections *Procédure pas à pas*, *Captures d'écran*, *Raccrochage projet*) une fois le template `fiche-tuto.md` figé.~~ — fait 27/05 suite 4 (procédure en 3 H3 numérotées, Raccrochage projet ajouté entre Cas particulier et Voir aussi, contenu intact ailleurs)
- [x] ~~`etat-de-l-art-technique` (fiche-tuto, popover posé `specification-technique.md` étape 2) — **occasion de figer le template `fiche-tuto.md`**~~ — fait 27/05 suite 4 (méthode N×M, exemple bras 3 axes 3 réfs × 6 critères Niryo/uArm/Moveo, 7 pièges, AA mappés multi-couverture PROJ/2 + MEO/1)
- [x] ~~`bom` · `mind-map` · `fast` · `amdec` · `matrice-eat` (→ renommé `matrice-eco-criteres`) · `ecodesign`~~ — **6 fiches créées 28/05** (session Phase 0 non journalisée sur le moment, entrée reconstruite a posteriori : JOURNAL 28/05 suite). Renommage `matrice-eat`→`matrice-eco-criteres` acté (collision EAT = état de l'art technique). Vérification finale reportée au gate *Pré-publication MVP*.
- [x] ~~**Template `fiche-tuto.md`** à figer en transition Phase 0 → Phase 1 (modèle : calque `fiche-notion.md` + sections *Procédure pas à pas* + *Captures d'écran* + *Raccrochage projet*)~~ — figé 27/05 suite 4 (Captures d'écran option B = inline dans étapes, ordre A des sections finales avec Raccrochage projet en pénultième position, fil rouge bras 3 axes en commentaire de la section *Exemple* en éprouvage)
- [ ] **Patches conventions** : ~~C18 mini-hub~~ **promue § 6 le 28/05 suite 4** (épreuve 3/3 : microcontroleur + bus + sans-fil) ; ~~C19~~ éprouvée (faible) sur `lire-une-datasheet`, vrai test reste `analyse-de-schema`/`firmware` ; **C24 `write_file`** promotion § 6 mûre (~18 créations, 0 faux positif) ; nouvelles candidates § 8 : **C27** batch de grappe homogène (2/2), **C28** rouge danger #B23A2E SVG (1/1) ; candidates 4 paliers + [A]/[T] à confirmer sur `esp32`.

#### Phase 1 — Squelette transverse critique AA elec/info (~8 sessions)

Ordre pédagogique : datasheet → schéma → chronogramme → méthodes formelles. Couvre 100 % des critères NC EEE.

- [x] ~~`microcontroleur`~~ (hub mère — panorama 7 familles + aide au choix + SVG archi MCU + 11 popover-notions) — **fait 28/05 suite 2**
- [x] ~~`lire-une-datasheet`~~ — **fait 28/05 suite 3** (fiche-tuto transverse ~15,3 ko + 2 SVG : anatomie datasheet générique + L298N deux mondes ; procédure générique 5 étapes + *Exemple* L298N autonome 2 moteurs CC ; C19 variante-(c) épreuve faible ; AA élargi C20 ; cas autonome ≠ fil rouge bras 3 axes — borne C23).
- [x] ~~**`niveaux-de-tension`** (fiche-notion transverse — 3,3 V vs 5 V, adaptation de niveau)~~ — **fait 28/05 suite 4** (~8,6 ko + 2 SVG, AA EEE/4 + /1, cas autonome ESP32/HC-SR04, rouge danger #B23A2E)
- [ ] **`gpio`** (fiche transverse — promue de popover à fiche substantielle : modes INPUT/OUTPUT/INPUT_PULLUP/open-drain + état à l'allumage ; émergée 28/05 suite 2) — **seul reliquat Phase 1, laissé rouge**
- [x] ~~**`analyse-de-schema-electronique`** (fiche-tuto transverse)~~ — fait 29/05 suite (+ 2 SVG ; aa `EEE/1` multi-couverture avec `lire-une-datasheet` + `EEE/2` ; cas autonome pont diviseur → MCU → LED)
- [x] ~~**`chronogramme`** (fiche-notion, 4ᵉ représentation du hub algorithme)~~ — fait 29/05 suite (+ 2 SVG : générique axe-temps + PWM/UART ; `EEE/5` ; raccrochage oscilloscope/datasheet)
- [x] ~~**`algorithme`** (mini-hub mère)~~ — fait 29/05 (début session ; hub léger : panorama 4 représentations + aide au choix)
- [x] ~~**`logigramme`** (fiche-notion fille hub algorithme)~~ — fait 29/05 suite (+ générique symboles + triptyque thermostat ; `EEE/5`)
- [x] ~~**`machine-a-etats`** (fiche-notion fille, alias `MAE`)~~ — fait 29/05 (début session ; + générique + triptyque portail ; `EEE/5`)
- [x] ~~**`grafcet`** (fiche-notion fille hub algorithme)~~ — fait 29/05 suite (+ générique IEC 60848 + cycle perçage ; `EEE/5`)

→ **Phase 1 squelette quasi complète** (reste `gpio`, laissé rouge) + embranchement Arduino livré → **MVP strict structurellement atteint**. ⚠️ Couverture AA 100 % **à reconcilier** : `RA-PROJET-C03-3/EEE/1` est déjà porté par `lire-une-datasheet`, donc le sous-critère qui ferme réellement le 100 % (EEE/1 vs EEE/2) est à confirmer sur la cartographie avant de clamer le site publiable.

#### Phase 2 — Premier embranchement Arduino (~3 sessions, MVP strict publiable)

- [x] ~~`arduino`~~ (hub Arduino — panorama cartes Uno R3/R4/Mega/Nano + écosystème + section *Tutoriels* en 4 paliers) — **fait 28/05 suite 2**
- [x] ~~`arduino-prise-en-main` (fiche-tuto, palier *Prendre en main*)~~ — fait 29/05 matin (cas Blink LED_BUILTIN)
- [x] ~~`tinkercad` (fiche-tuto simu, palier *Prendre en main*)~~ — fait 29/05 matin (Blink simulé + bouton `INPUT_PULLUP`)
- [x] ~~**Module Arduino — batch Bases + Avancées straight (21 fiches)**~~ — fait 29/05 soir (PC pro, MCP `theskillcodex:*`). **Reste à écrire** : `arduino-machine-a-etats` (chaîne avec notion `machine-a-etats`) ; `arduino-filtrage` (optionnel) ; 7 Niveau ingénieur (`arduino-programmation-non-bloquante`, `arduino-interruptions`, `arduino-deep-sleep`, `arduino-pid`, `arduino-timers`, `arduino-memoire`, `arduino-watchdog`) — chacun en session dédiée avec cadrage propre. **Relecture/amélioration utilisateur** post-récolte premier set d'images à conduire avant publication.

#### Pré-publication MVP (après Phase 2)

> Passe de vérification avant mise en ligne du site aux étudiants (MVP strict atteint).

- [ ] **Créer le template Word `cdcf-ecole-template.docx`** — référencé en lien dans `specification-technique.md` étape 6 et `cahier-des-charges-fonctionnel.md`, mais le fichier n'existe pas encore. Vigilance « EAT » : réserver l'abréviation à *état de l'art technique*, ne pas réintroduire « matrice EAT » (renommée « matrice éco-critères »).
- [ ] **Vérifier les images** de toutes les fiches (présence + rendu) — **dont les 11 SVG du 29/05** (algorithme : générique + triptyques logigramme/MAE ; grafcet, chronogramme, analyse-de-schema), hand-codés au premier jet : valider la géométrie au rendu Quartz, en priorité `analyse-de-schema-exemple` (symboles composants) et les SVG placés dans les callouts de triptyque.
- [ ] **Reconcilier la cartographie AA Phase 1** : `RA-PROJET-C03-3/EEE/1` est porté à la fois par `lire-une-datasheet` et `analyse-de-schema-electronique` (multi-couverture C20) ; confirmer le statut de `EEE/2` et des `EEE/5` (logigramme/MAE/grafcet/chronogramme) pour étayer le « MVP strict 100 % ». Vérifier aussi `phases: dossier-technique` sur `analyse-de-schema` (repris du cadrage, non revérifié) et le lien `[[del|LED]]` (probablement rouge — créer `del.md` ou délier).
- [ ] **Vérifier toutes les fiches du lot Phase 0 (gestion de projet)** avant publication : `bom`, `mind-map`, `fast`, `amdec`, `matrice-eco-criteres`, `ecodesign` + fiches GP/outils antérieures.

#### Phase 3 — Squelette transverse pro (~10 sessions, MVP étendu)

- [ ] `oscilloscope` (fiche-tuto compétence pro instrumentation)
- [ ] `multimetre` (fiche-tuto compétence pro)
- [ ] `firmware` (fiche-tuto transverse pure, archi code embarqué avec pseudocode ; rabbit hole possible mémoire / interruptions / RT non bloquante)
- [ ] `debugger-embarque` (fiche-tuto compétence pro)
- [ ] `pcb` (mini-hub mère, mention gravure à l'anglaise interne école, distinction monoface interne / double face externe JLCPCB)
- [ ] `kicad` (fiche-tuto outil PCB principal, simu intégrée mention)
- [x] ~~`bus-de-communication` (hub mère) + `uart` / `i2c` / `spi`~~ — **fait 28/05 suite 4** (grappe batch dans `eee/mcu/bus/` ; hub tableau comparatif + aide au choix + SVG topologies ; C18 épreuve 2/N ; AA hub EEE/4, filles [])

#### Phase 4 — Second embranchement ESP32 (~4 sessions)

- [ ] `esp32` (hub fille de `microcontroleur`)
- [ ] `esp32-arduino-core` (fiche-tuto, entrée pratique)
- [ ] `wokwi` (fiche-tuto simu spécifique ESP32)
- [ ] `alimentation-electronique` (fiche-tuto compétence pro, raccrochage dossier-tech + intégration)

#### Phase 5+ — Alimentation continue (~25 sessions)

*Reste squelette transverse :*
- [x] ~~`techno-sans-fil` (hub mère) + `wifi` / `ble` / `zigbee` / `xbee` / `lora`~~ — **fait 28/05 suite 4** (grappe batch dans `eee/mcu/sans-fil/` ; hub tableau + carte portée×débit ; C18 épreuve 3/N)
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

- [ ] **Archivage JOURNAL — 1-pour-1 à reprendre en tête de prochaine session** : `25/05 suite 6` archivée 29/05 (début session, 104→93 ko). Avec l'entrée 29/05 suite, JOURNAL ~97 ko (**sous le seuil 100 ko**). Entrée la plus ancienne à archiver = `25/05 suite 7` (PoC) → vers `JOURNAL-archive.md`, dans le groupe « DEBUT DES SESSIONS 25/05 » (au-dessus de suite 6). Convention : archivage **hors clôture**, en tête de session.

## Décisions éditoriales en attente

- [ ] **6 conventions transverses (25/05) + conventions concept/PoC/dossier-technique (25/05 suite 4-8)** à éprouver. Conventions 1-6 à éprouver sur `securite-et-qualite` (3ᵉ transverse). Documentation dans `conventions.md` § 7.
  - Convention 6 mode d'application affiné (au fil + filet passe dédiée, 25/05 suite 7).
  - **Convention 10** (matrice incarnée dans `[!example]`) **promue § 2 le 26/05 début session** après 12 contextes éprouvés (concept 4 + PoC 4 + dossier-tech 4).
  - **Convention 11** (rythme H4 par étape) **promue § 6 le 25/05 suite 7**. **Amendée § 6 le 26/05** : 2 nouveaux cas inédits acquis sur `integration-et-tests` (étape multi-disciplinaire = 3 H4 par discipline ; pyramide compressée = 3 H4 dense pour 4 niveaux conceptuels).
  - **Convention 12** (Pièges nourris a posteriori) **promue § 6 le 26/05 début session** après ratio stable 37-45 % sur 3 trames du V (concept 37 %, PoC 45 %, dossier-tech 45 % ; integration ~55 %).
  - **Convention 13** (relire amont avant section avale) **promue § 5 le 26/05 fin session** après épreuve 2/2 sur dossier-tech (suite 8) + integration-et-tests.
  - **Convention 14** (seuil 30 ko MCP payload) **enrichie 26/05 suite** à deux niveaux : (a) **pattern MARKER + N segments** validé comme procédure standard pour déplacements de blocs > 30 ko (archivage JOURNAL 22→24/05 réussi, 60 ko net via 3 segments de 17-24 ko) ; (b) **nouveau piège EPERM Windows distinct du seuil de payload** : verrou de fichier quand Obsidian a le focus dessus, `edit_file` échoue au rename final, remède = changer d'onglet Obsidian. Zone intermédiaire 30-40 ko à éprouver pour calibrage exact (24 ko passe, 50 ko échoue suite 8).

*Note : les autres décisions éditoriales en attente (mode sombre callouts v2, pliage callouts, alignement rétroactif trames, alias Quartz, station météo, 2 images par fiche-notion, format date, tag `transverse`, section équipe transverses, etc.) sont désormais portées par BACKLOG.md (conventions à éprouver) ou par conventions.md (conventions acquises). Pas de duplication.*




