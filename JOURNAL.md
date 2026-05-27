# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).
> Sessions antichronologiques antérieures au 25/05 suite 5 archivées dans `JOURNAL-archive.md`
> (mise en place initiale du dépôt, installation PC perso, trame projet cycle
> en V, flowcharts de phase, squelettes du V, charte callouts v2, rédaction
> complète de `specification-technique.md`, première vague de trames
> transverses et fiches-notion, nettoyage documentaire et concept étapes 1-2).

---

## 2026-05-26 (suite 5) — Cadrage stratégique phase 2 elec/info + livraison `caracteriser-une-exigence`

### Périmètre de session
Session double : (1) rédaction de la fiche-tuto `caracteriser-une-exigence` (pivot phase 1, aliases `[critere, niveau, flexibilite]`, calque `bete-a-cornes`) ; (2) cadrage stratégique de la phase 2 elec/info en réponse à la demande utilisateur d'une roadmap de tutos elec/info raccrochés aux phases du V. Le cadrage stratégique a pris l'essentiel de la session après livraison de la fiche. PC perso, préfixe MCP `filesystem:*` puis bascule sur `theskillcodex:*` (PC pro synchronisé) en fin de session après déchargement du serveur filesystem.

### Livraison `caracteriser-une-exigence.md` (15,5 ko)

4 questions méthodo tranchées en cadrage niveau C en début de session :
- **Q1 — Structure triptyque** : 1 exigence (FP1 bras 3 axes) déclinée en 3 niveaux de qualité, pas 3 triptyques séparés. Critère/niveau/flexibilité = triplet indissociable, pas trois objets pédagogiques distincts.
- **Q2 — F0/F1/F2/F3** : tableau 4 lignes dans H3 *La flexibilité*, pas section H2 séparée. Sous-élément de la méthode, pas objet de niveau égal.
- **Q3 — Fil rouge bras 3 axes** retenu (vs cas autonome). Trois arguments : (a) fiche-tuto pivot phase 1 fonctionnellement plus proche d'une trame, (b) critères CdCF chiffrés déjà figés (22/05) directement réutilisables, (c) crée boucle de lecture intra-wiki avec `specification-technique.md` étape 4. Esquisse une **convention candidate** : « fiches-tuto pivot phase 1 = fil rouge, fiches-notion historiques = cas autonome » — à éprouver sur PCB et AMDEC.
- **Q4 — Profondeur** : calque bete-a-cornes complet visé, profondeur livrée à 15,5 ko sous la cible 25-30 ko (économe assumé, à étoffer en round 2 si manque de respiration).

Rédaction niveau A en autonomie après cadrage. Structure : popover → À quoi ça sert (3 rôles : opposabilité, évaluation finale, arbitrage en cours de route) → Comment caractériser (intro + 3 H3 : critère / niveau / flexibilité avec tableau F0/F1/F2/F3 + colonne *Quand l'utiliser*) → Exemple bras 3 axes avec triptyque mauvais/moyen/bon en tableaux markdown 3 lignes (composant / valeur retenue) → Pièges (6 entrées format gras court + explication) → Cas particulier exigences binaires et réglementaires → Voir aussi.

Choix structurels assumés :
- Pas de SVG produit (caractérisation = format textuel d'énoncé, pas forme graphique canonique comme bête à cornes ou pieuvre).
- Triptyque en **tableaux markdown** au lieu de SVG, cohérent avec la nature de la notion — pattern à acter si retenu pour les fiches-notion d'outils textuels (vs outils graphiques).
- Colonne *Quand l'utiliser* ajoutée au tableau F0/F1/F2/F3 (utile pédagogiquement, à statuer en round 2).
- Wiki-link `unite-si` propagé × 2 (popover déjà rouge dans spec-tech étape 4, déblocage transverse à venir intégré dans Phase 0 clôture phase 1 GP).

### Cadrage stratégique phase 2 elec/info — décisions majeures

Demande utilisateur : roadmap des tutos elec/info raccrochés aux phases du V, deux voies prioritaires (AA école + compétences pro pour aller plus loin). Cinq cycles d'échange en niveau D ont consolidé un cadrage majeur. Synthèse :

**1. Posture éditoriale renforcée** : elec/info devient le **cœur du wiki**, ~50-60 fiches phase 2 assumées, plusieurs mois de travail. Inflation de périmètre (× 7 par rapport à l'estimation initiale 8 fiches phase 2). Posture inscrite dans la section 6 *Ambition au-delà du référentiel* de `couverture-en-cours.md` (nouvelle sous-section *Phase 2 elec/info — cœur du wiki* ajoutée en fin de session).

**2. Structure squelette transverse + embranchements technologiques** — distinction structurante pour publication progressive :
- **Squelette transverse** = fiches indépendantes du choix techno, couvrent tous les AA pour n'importe quel chemin technologique suivi. Socle pédagogique publiable.
- **Embranchements technologiques** = fiches spécifiques à une famille MCU et ses outils de simu liés. Chaque famille forme un module autonome complétable au fil de l'eau.
- Un étudiant 100 % ESP32 doit voir tous les AA via squelette + module ESP32. Pareil pour Arduino, Raspberry Pi.
- **Conséquence opérationnelle** : publication site possible à la rentrée scolaire dès que squelette transverse complet + ≥1 embranchement complet (idéalement Arduino).

**3. Hiérarchie mini-hubs imbriqués** — 5 mini-hubs à structurer :
- `microcontroleur` (hub mère panorama → hubs filles familles MCU → tutos d'utilisation, 2 niveaux d'imbrication)
- `algorithme` (mini-hub mère → 3 fiches-notion filles : logigramme/MAE/grafcet)
- `pcb` (hub léger → 2 tutos outils : kicad/easyeda)
- `bus-de-communication` (hub → 3+ notions popovers : uart/i2c/spi)
- `techno-sans-fil` (hub → 5 notions popovers : wifi/ble/xbee/zigbee/lora)

**4. Roadmap structurée en 5 phases + clôture phase 1** :
- **Phase 0** — clôture phase 1 GP (~10 sessions) : 8 fiches notion (`decomposition-fonctionnelle`, `etat-de-l-art-technique`, `bom`, `mind-map`, `fast`, `amdec`, `matrice-eat`, `ecodesign`) + template `fiche-tuto.md` + patches conventions (C18/C19, couverture § 6).
- **Phase 1** — squelette critique AA (~8 sessions) : ordre pédagogique `microcontroleur` (hub mère) → `lire-une-datasheet` → `analyse-de-schema-electronique` (NC EEE/1) → `chronogramme` (jonction datasheet ↔ algorithme ↔ oscilloscope) → `algorithme` (hub) → `logigramme` / `machine-a-etats` / `grafcet`. Critères NC EEE-C03-3/1 et EEE-C03-2/5 entièrement couverts.
- **Phase 2** — premier embranchement Arduino (~3 sessions) : `arduino` (hub fille) + `arduino-prise-en-main` + `tinkercad`. **MVP strict atteint, site publiable.**
- **Phase 3** — squelette transverse pro (~10 sessions) : `oscilloscope`, `multimetre`, `firmware`, `debugger-embarque`, `pcb` (hub) + `kicad`, `bus-de-communication` (hub) + `uart`/`i2c`/`spi`.
- **Phase 4** — second embranchement ESP32 (~4 sessions) : `esp32` (hub fille) + `esp32-arduino-core` + `wokwi` + `alimentation-electronique`. **MVP étendu atteint.**
- **Phase 5+** — alimentation continue (~25 sessions) : reste squelette transverse (sans-fil hub, circuitverse, ltspice, easyeda, cable-management, bom-electronique) + embranchements restants (Raspberry Pi, ESP8266, ESP32-IDF, MCU prio 2 STM32/Teensy/PIC, pcb-gravure-ecole, falstad).

**5. Choix techniques actés** :
- **ESP32** : Arduino-core en 1er tuto (entrée pratique), ESP-IDF en 2ème (approfondissement pro).
- **Hub `bus-de-communication`** avec **fiches-notion popovers** (UART/I2C/SPI séparées, convention C16).
- **Hub `techno-sans-fil`** avec **fiches-notion popovers** (Wi-Fi/BLE/XBee/Zigbee/LoRa séparées).
- **Raspberry Pi** sous étiquette élargie *plateformes embarquées* dans hub MCU (techniquement SBC pas MCU, mais usage pédagogique commun avec les autres).
- **CircuitVerse** retenu pour simu numérique en ligne (testé par utilisateur en session). **Falstad** évalué ultérieurement.
- **XBee** (et non Zigbee) en initial : XBee = module hardware (Digi) qui parle Zigbee/Wi-Fi. Finalement reclassé en hub `techno-sans-fil` comme tous les modules radio.
- **`chronogramme`** transverse à datasheet/algorithme/oscilloscope, fiche autonome (pas dans mini-hub algorithme malgré le critère EEE-C03-2/5 qui les liste ensemble — sémantique trop différente : signaux dans le temps vs flot de comportement).
- **`firmware`** transverse pur avec pseudocode (pas d'exemple spécifique à un MCU), illustrations multi-techno via la structure wiki. Rabbit hole optionnel : gestion mémoire / interruptions / programmation RT non bloquante.
- **Fiches-tuto pivot phase 1 = fil rouge** esquissée comme convention candidate (vs fiches-notion historiques = cas autonome).

**6. Trois cercles MVP** pour publication :
- **MVP strict** (AA 100 %) = Phase 0 + Phase 1 + Phase 2 = ~21 sessions, 2-3 mois. Site publiable rentrée.
- **MVP étendu** (+ PCB + bus + ESP32) = + Phase 3 + Phase 4 = ~35 sessions, 3-4 mois.
- **Cible complète** = ~70 sessions, plusieurs mois (alimentation continue post-rentrée).

### Conventions candidates en éprouvage

- **C18 candidate — mini-hub imbriqué** : 5 cas identifiés. À éprouver sur `algorithme` (cas le plus simple) puis `microcontroleur` (cas le plus complexe, 2 niveaux). Convention à fixer : front matter du hub, structure de dossier (sous-dossiers physiques vs à plat), format de listing des fiches filles dans le corps. Formalisation prévue dans `conventions.md` § 6 (Publication / Quartz) une fois éprouvée.
- **C19 candidate — fiche transverse multi-techno** : fiche d'une notion couvrant plusieurs technologies (ex. `firmware`, `analyse-de-schema-electronique`, `lire-une-datasheet`). À éprouver sur `firmware` et `analyse-de-schema-electronique`. Trois options de structuration : (a) callouts par techno côte à côte ; (b) tableau comparatif ; (c) exemple unique générique + renvois vers modules MCU. Intuition : (c) plus léger éditorialement.
- **C17 éprouvée 2/N** : patch flèche TODO post-arbitrage utilisateur en fin de session — épreuve 2 réussie (flèche patchée de « reprise rédaction phase 2 » vers « Phase 0 clôture phase 1 GP » selon l'arbitrage sortant du cadrage stratégique). 1-2 épreuves restantes avant promotion vers § 5 ou § 8 du prompt projet.

### Acquis méthodo et incidents

**Convention candidate « fiches-tuto pivot phase 1 = fil rouge »** esquissée sur `caracteriser-une-exigence` (Q3). À éprouver sur PCB et AMDEC.

**Triptyque en tableaux markdown** (vs SVG) pour fiches-notion d'outils textuels. À acter si reproduit sur 1-2 autres fiches.

**Limitation technique session** : serveur MCP `filesystem` (PC perso) déchargé entre l'écriture initiale de `caracteriser-une-exigence.md` (début de session) et la phase de clôture (patches TODO/conventions/couverture/BACKLOG/JOURNAL). Tentatives directes échouées (« Tool 'filesystem:read_text_file' not found » même en invocation directe sans `tool_search`). **Bascule effective sur le serveur `theskillcodex` (PC pro)** après vérification que le PC pro est synchronisé avec le PC perso (probablement via OneDrive ou un sync de fond). Tous les patches de clôture ont été appliqués avec succès côté PC pro. **Acquis** : vérifier l'accès aux deux serveurs au démarrage de session, l'utilisateur peut indiquer la disponibilité si doute. Cas à évoquer en clôture si la situation se reproduit.

**1 incident C14 à mi-clôture** : suppression de la session 26/05 suite 2 dans la section *Fait* du TODO (rotation glissante) **échouée 2 fois** sur anchor non matché. Hypothèse : NBSPs fines U+202F invisibles devant ponctuations françaises (`:`, `;`, etc.). Anchor non recopié depuis lecture MCP fraîche (j'avais le bloc en contexte début de session, mais la session du PC pro pouvait avoir des espaces typo différents après synchro). **Décision** : dette reportée à traitement manuel utilisateur ou prochaine session avec accès PC perso — 4 sessions dans *Fait* au lieu de 3 jusqu'à correction, pas de conséquence pédagogique. Discipline C14 confirmée à chaud : si retentative, recopier strictement depuis `read_text_file` fraîche.

### État des patches de clôture appliqués

- **TODO.md** : 4 patches réussis (flèche prochaine session → Phase 0 + cadrage stratégique en tête ; cocher `caracteriser-une-exigence` ; refonte section *Notions à produire* en 3 sous-sections roadmap phase 2 ; ajout session 26/05 suite 5 en tête section *Fait*). 1 patch échoué sur anchor non matché (retrait session 26/05 suite 2 pour rotation glissante — dette manuelle).
- **conventions.md** : 1 patch réussi (§ 8 *En cours d'éprouvage* : maj C17 à épreuve 2/N + ajout C18 candidate mini-hub imbriqué + ajout C19 candidate fiche transverse multi-techno).
- **couverture-en-cours.md** : 2 patches réussis (ajout sous-section *Phase 2 elec/info — cœur du wiki* dans § 6 *Ambition au-delà du référentiel* + correction typo « délibement » → « délibérément »).
- **BACKLOG.md** : 2 patches réussis (refonte EEE avec nouvelles cibles wiki-links : 5 mini-hubs + filles + fiches transverses + outils simu + compétences pro ; nettoyage doublon `cable-management` et entrée PCB obsolète).
- **JOURNAL.md** : entrée courante en tête (ce patch).

### Décisions reportées (toujours en attente)

- Toutes celles des sessions précédentes.
- **3 décisions niveau D en attente hiérarchie** : catégorie Hors scope par délégation pour 3 critères design, statut des 4 critères MME effleurés sans fiche centrale, statut `schema-cinematique` wiki vs délégation MME.
- **C17 épreuve 1-2/N restantes** avant promotion vers `conventions.md` § 5 ou § 8.
- **C18 + C19 à éprouver** sur Phase 0 (transition) puis Phase 1 elec/info.
- **Dette manuelle TODO** : retrait session 26/05 suite 2 dans section *Fait* (anchor C14 récalcitrant en fin de session).
- **Prochaine session** = Phase 0 démarre par `decomposition-fonctionnelle` (fiche-notion outil natif phase concept étape 1, popover déjà attendu).
- **Commit + push** : workflow fin de session utilisateur, inclut la fiche `caracteriser-une-exigence` + tous les patches de clôture.

### Tailles fichiers en fin de session

- JOURNAL.md : 86 → ~93 ko (sous seuil 100 ko, marge confortable, archivage non nécessaire à cette session).
- caracteriser-une-exigence.md : 15,5 ko (livré début de session).
- TODO.md : 16 → ~22 ko (refonte section roadmap phase 2, attendu).
- conventions.md : 16 → ~18 ko (ajout C18/C19).
- couverture-en-cours.md : 12 → ~15 ko (ajout sous-section phase 2 elec/info).
- BACKLOG.md : ~20 → ~22 ko (refonte EEE, nettoyage doublons).

---

## 2026-05-26 (suite 4) — Clôture méthodologique : promotions conventions + synthèse globale couverture AA + archivage JOURNAL 3e vague

### Périmètre de session
Session de clôture méthodologique du chantier cartographie AA bouclé 26/05 suite 3. Alternative 2 actée en cadrage : trois actes à froid dédiés aux livrables méthodologiques avant reprise de la rédaction phase 2. PC perso, préfixe MCP `filesystem:*`.

### Acte 1 — Promotions C1-C6 / C15 / C16 dans `conventions.md` (6 edits, niveau C)
Retrait de la bannière « Acquises 25/05 suite — épreuve 3/3 réussie » du § 7 (les conventions transverses sont déjà dans les sections fixes, bannière obsolète). Enrichissement du bullet wiki-links § 2 avec mode d'application (au fil + filet passe dédiée en sortie de fiche).

**Création d'un nouveau § 7 *Référentiel AA*** consolidant C15 et C16 :
- Codification critique format `<Code_RA>/<AA_DOMAIN>/<N°critère>` (ex. `RA-PROJET-C03-3/EEE/1`)
- 4 catégories de cartographie : Couvert / Effleuré / Hors scope / Non couvert
- **Règle du statut dominant** quand un critère apparaît dans plusieurs fiches : C > E > HS > NC
- Convention **1 fiche-tuto par critère EEE/info embarquée** en phase 2 (ou tutoriel gonflé multi-couverture)
- Champ `aa:` dans front matter comme source de vérité (skip légitime à `aa: []` documenté)
- Référentiel source : `_drafts/referentiel/Compétences.xlsx` + version normalisée `referentiel-normalise.md` (57 critères, 12 AA, 5 domaines)
- 3 décisions niveau D ouvertes actées comme en attente hiérarchie

Renumérotation § 7 *En cours d'éprouvage* → § 8 (puisque le nouveau § 7 *Référentiel AA* prend la place). Retrait des entrées 15 et 16 du § 8 (promues). Suppression d'une sous-section « Référence AA » redondante du § 6 (portée par le nouveau § 7). Mise à jour du bullet annexe pointant vers le nouveau § 7.

**6 edits passés sans échec C14**. Discipline anchor court confirmée.

### Acte 2 — Synthèse globale dans `couverture-en-cours.md` (3 edits, niveau B/C)
Remplacement du placeholder de synthèse globale par 8 sections rédigées :

1. **Bilan en chiffres** — tableau récap par domaine (EEE 5C/2E/0HS/3NC, ESE 5/0/0/0, MEO 6/0/0/0, MME 3/6/0/2, PROJ 17/1/4/3) + total 36 C / 9 E / 4 HS / 8 NC sur 57 critères (63 %/16 %/7 %/14 %)
2. **Lecture par domaine** — ESE et MEO entirement couverts (cohérent nature transverse), EEE et MME ont trous structurés tous adressés phase 2, PROJ domaine majeur (44 %) couvert hors design délégable
3. **Lecture par catégorie** — 17 fronts matters écrits + 4 skip légitimes à `aa: []`
4. **Trous NC adressés vs à arbitrer** — 2 trous déjà au TODO (analyse-de-schema-electronique, microcontroleur+firmware) + 3 trous à adresser (simulation-electronique, schema-cinematique) + 3 NC à interroger hiérarchie (PROJ-C03-3/1, /2 design + MME-C03-1/1 outils designers)
5. **Décisions niveau D ouvertes** — catégorie Hors scope par délégation, statut 4 critères MME effleurés, statut schema-cinematique
6. **Ambition au-delà du référentiel** (reformulé selon retour utilisateur : *« on peut faire plus que le scope des AA, mieux trop que pas assez »*) — 3 fiches phase 1 sans critère AA central illustrent l'ambition au-delà du référentiel : `securite-et-qualite` (posture professionnelle), `matrice-de-decision` (outil pivot transverse), `hub/index` (méta-structure). Pas exception à justifier, ces fiches actent une posture éditoriale.
7. **Conventions méthodo validées** — récapitulatif des 17 conventions du `conventions.md` actuel après acte 1
8. **Suite des opérations** — reprise rédaction phase 2 (caracteriser-une-exigence prioritaire, puis pcb, puis amdec) + 3 décisions D à arbitrer hiérarchie

Deux patches typo correctifs lors de la rédaction (« critore » → « critère », régression de la session 26/05 suite 3) + reformulation pourcentage PROJ (17 C + 1 E sur 21 critères non-HS).

### Acte 3 — Archivage JOURNAL 3e vague via pattern MARKER + N segments (12 edits, niveau A/B)
**JOURNAL.md initialement à 122 ko** (au-delà du seuil 100 ko). Périmètre d'archivage : 5 sessions 25/05 + suite + suite 2 + suite 3 + suite 4 (~36 ko net).

Découpage 4 segments adopté pour sécurité (payload max ~22 ko vs seuil 24-25 ko documenté) :
- Seg 1 (le + ancien, inséré en 1er) : 25/05 + 25/05 suite — ~22 ko
- Seg 2 : 25/05 suite 2 — ~11 ko
- Seg 3 : 25/05 suite 3 — ~12 ko
- Seg 4 (le + récent, inséré en dernier) : 25/05 suite 4 — ~9 ko

**Phase 1 — Insertion archive (6 edits)** : pose marker `<!-- ARCHIVE_INSERT_MARKER -->` + nouveau commentaire `<!-- DEBUT DES SESSIONS 25/05 — ARCHIVEES LE 26/05 SUITE 4 -->` avec correction simultanée de la dette commentaire précédent (« 25/05 SUITE 7 » → « 26/05 SUITE »). Ordre d'insertion = du plus ancien au plus récent, empilement vers le bas du MARKER (chaque insertion remplace `MARKER` par `MARKER\n[segment]`). Retrait du marker en clôture. Antichronologie top-down vérifiée : suite 4 → suite 3 → suite 2 → suite → 25/05 → 24/05 suite 2 (existant) → ...

**Phase 2 — Trim JOURNAL.md (5 edits effectifs)** : T1 (25/05 suite 4, ~110 lignes) + T2 (25/05 suite 3, ~108 lignes) + **batch groupé T3+T4+T5** après relecture authentique du fichier (suite 2 + suite + 25/05 supprimées en un seul edit_file à 3 entrées, ~175 lignes) + T6 mise à jour préambule (« Sessions antérieures au 25/05 suite 5 ») + commentaire HTML final (mention des 3 vagues 25/05 suite 3 + 26/05 suite + 26/05 suite 4).

**Bonus** : correction du préambule de l'archive (dette « 25/05 SUITE 7 » → « 26/05 SUITE » + ajout 3e vague + titre Archive « sessions du 2026-05-19 au 2026-05-25 suite 4 »).

### Bilan tailles
- **JOURNAL.md** : 122 → **86 ko** (-36 ko, sous seuil 100 ko ✓)
- **JOURNAL-archive.md** : 119 → **158 ko** (+39 ko, cohérent avec le delta)

### Incident C14 — résolu en suivant la discipline
**T3 échec initial** : suppression de 25/05 suite 2 a échoué sur typo de transcription. Cause : dans l'oldText reconstitué de mémoire (après lecture précédente), j'avais écrit « Cette clarif **resoud** la tension » sans accent, alors que le fichier authentique contient « Cette clarif **résoud** la tension » avec é. Mismatch silencieux, edit_file rejeté.

**Résolution** : `read_text_file --tail 600` pour relire le contenu authentique. Identification de la typo. Reconstruction du oldText à partir du contenu MCP authentifié. Batch T3+T4+T5 groupé en un seul edit_file passé du premier coup après relecture.

**Leçon** : discipline C14 confirmée à 100 %. Ne jamais retranscrire un oldText de mémoire pour un anchor de plus de quelques lignes. Toujours recopier depuis la sortie d'un `read_text_file` récent. Quand le contenu à supprimer a déjà été inséré ailleurs (cas archivage), le contenu inséré peut contenir des typos introduites à l'insertion (cas vécu : « resoud » dans le segment inséré dans l'archive vs « résoud » dans le JOURNAL source).

**Séquelle assumée** : `JOURNAL-archive.md` contient désormais la typo « Cette clarif resoud » (sans accent) dans le segment 25/05 suite 2 archivé. Le JOURNAL source étant trim, plus de divergence à gérer. Acceptable comme dette mineure de transcription.

### Posture éditoriale actée
La section 6 de la synthèse globale **Ambition au-delà du référentiel** acte explicitement que le wiki dépasse délibérément le scope AA. Reformulation utilisateur en session : *« on peut faire plus que le scope des AA, mieux trop que pas assez »*. Les 3 fiches phase 1 sans critère AA central (securite-et-qualite = posture professionnelle, matrice-de-decision = outil pivot transverse, hub/index = méta-structure) illustrent cette ambition au-delà du référentiel — pas exception à justifier, choix éditorial assumé. Inscription dans le wiki via la synthèse globale.

### Convention C17 candidate — éprouvée empiriquement
**C17 candidate** : *patcher la flèche TODO après arbitrage utilisateur final, en fin de session*. Éprouvée empiriquement en fin de session courante : la flèche TODO du prompt projet était « Prochaine session = clôture méthodologique en 3 actes ». En fin de session, j'ai patché vers « Prochaine session = reprise rédaction phase 2 » (caracteriser-une-exigence prioritaire) selon l'arbitrage utilisateur sortant de la clôture. À confirmer sur 2-3 sessions avant promotion vers `conventions.md` § 8.

### Conventions éprouvées et acquises
- **C1-C6** (les 6 transverses) : promues vers §§ 1-2 (acte 1) après 3/3 épreuve réussie (gestion-de-projet → ecoconception → securite-et-qualite). Bannière § 7 retirée.
- **C15** (catégorie Hors scope, acquise 26/05 suite 2) : consolidée dans nouveau § 7 *Référentiel AA*.
- **C16** (1 fiche-tuto par critère EEE/info embarquée, acquise 26/05 suite 2) : consolidée dans nouveau § 7 *Référentiel AA*.
- **C14** (seuil MCP) : 2e épreuve formelle réussie sur le pattern MARKER + N segments (archivage 3e vague). 1 incident résolu en suivant la discipline.
- **C17 candidate** : patch flèche TODO post-arbitrage. À éprouver sur 2-3 sessions.

### Tailles fichiers en fin de session
- JOURNAL.md : 86 ko (sous seuil 100 ko ✓)
- JOURNAL-archive.md : 158 ko
- TODO.md : ~16 ko (rotation glissante respectée : 3 sessions Fait)
- conventions.md : ~16 ko (après ajout § 7 *Référentiel AA*)
- couverture-en-cours.md : ~12 ko (synthèse globale 8 sections)

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **3 décisions niveau D en attente hiérarchie** : catégorie Hors scope par délégation pour 3 critères design, statut des 4 critères MME effleurés sans fiche centrale, statut schema-cinematique wiki vs délégation MME.
- **C17 à éprouver** sur 2-3 sessions avant promotion vers `conventions.md` § 8.
- **Prochaine session** = reprise rédaction phase 2 (caracteriser-une-exigence prioritaire).
- **Commit + push** : workflow fin de session utilisateur.

---

## 2026-05-26 (suite 3) — Cartographie AA bouclée : passes B + A + écriture champ aa: dans 17 fronts matters

### Périmètre de session
Enchaînement des 4 sous-tâches du chantier cartographie AA en niveau A mécanique : (1) passe B accélérée sur 13 fiches restantes (12 fiches-notion + hub), (2) passe A par domaine (matrice critère × fiches), (3) amendement passe B sur integration-et-tests pour cohérence avec passe A, (4) écriture champ `aa:` dans 17 fronts matters. Bilan : couverture AA complète des 21 fiches phase 1, **36 C + 9 E + 4 HS + 8 NC sur 57 critères**. 3 décisions niveau D nouvelles, 2 fiches phase 2 nouvelles ajoutées au TODO.

### Passe B accélérée — 13 cartographies fiche-par-fiche
Lecture en aveugle + cartographie YAML pour les 13 fiches non encore traitées. **Un seul edit_file de ~22 ko payload pour les 13 cartographies, passe du premier coup**. Insights : quatuor CdCF (bete-a-cornes / fonction / pieuvre / cahier-des-charges-fonctionnel) se partage `RA-PROJET-C04-4` ; quatuor outils GP (gantt / jalons / retroplanning / wbs) se partage `RA-PROJET-C07-1/PROJ/2` ; matrice-de-decision = outil pivot transverse à 0 critère central ; hub/index = méta-structure pure ; schema-bloc-fonctionnel = seule fiche EEE phase 1.

### Passe A par domaine — cartographie inverse
Croisement des 21 cartographies pour produire la matrice critère × fiches par domaine. Légende C/E/HS/NC, règle de **statut dominant** (C > E > HS > NC). **Erreur initiale** : sommation C+E quand un critère est dans plusieurs fiches, 8 patches de correction appliqués (tableau global + bilans EEE/MME/PROJ + sous-liste NC + insight 3 + typo « critore » → « critère »).

**Couverture finale (57 critères)** :

| Domaine | C | E | HS | NC | Total |
|---|---|---|---|---|---|
| EEE | 5 | 2 | 0 | 3 | 10 |
| ESE | 5 | 0 | 0 | 0 | 5 |
| MEO | 6 | 0 | 0 | 0 | 6 |
| MME | 3 | 6 | 0 | 2 | 11 |
| PROJ | 17¹ | 1 | 4 | 3 | 25 |
| **Total** | **36** | **9** | **4** | **8** | **57** |

¹ Y compris amendement C03-3/3 (sans : 16 C / 4 NC, total global 35 C).

**Pourcentages** : 63 % C / 16 % E / 7 % HS / 14 % NC.

**8 NC ventilés** : 2 trous déjà adressés au TODO (analyse-de-schema-electronique pour EEE-C03-3/1, microcontroleur+firmware pour /5) + 3 trous à adresser par fiches nouvelles (simulation-electronique pour EEE-C03-3/3+/4, schema-cinematique pour MME-C02-1/5) + 3 NC à interroger hiérarchie (design délégable : PROJ-C03-3/1 sketchs + /2 prise en compte design + MME-C03-1/1 outils designers).

**5 insights structurants** :
1. ESE et MEO entièrement couverts phase 1 (0 NC). Cohérent nature transverse.
2. EEE et MME ont trous structurés, tous adressés par phase 2.
3. PROJ = domaine majeur (44 %), couverture forte hors design délégable.
4. Convention C16 validée empiriquement : 5 critères EEE phase 2 chacun adressé par 1 à 4 fiches.
5. 3 fiches phase 1 sans critère AA central (securite-et-qualite, matrice-de-decision, hub/index) pour 3 raisons distinctes — cadre AA pas le seul critère de pertinence.

### Amendement passe B — integration-et-tests
Passe A identifie un manquement passe B : integration-et-tests couvre matériellement `RA-PROJET-C03-3/PROJ/3` (réaliser structure mécanique avec élec et énergie) via étapes 1+2, non explicité en passe B initiale. **Patch en 2 edits sur couverture-en-cours.md** : ajout en Couvert + bilan 7 → 8 C, total 13 → 14. Discipline confirmée : la passe A vérifie la passe B.

### Écriture champ `aa:` dans 17 fronts matters
Inventaire : 4 fiches skip légitimes à `aa: []` (sans Couvert : securite-et-qualite, afnor-nfx50-151, matrice-de-decision, hub/index) ; 17 fiches à patcher dont 1 cas spécial (schema-bloc-fonctionnel : ancien format `AA-EEE-C02-CFE1-01` → 2 codes `RA-PROJET-C04-4/PROJ/4` et `/6`).

**17 edit_file séquentiels en niveau A mécanique, tous passés du premier coup, 0 échec C14, 0 typo de transcription**. Discipline anchor court `aa: []` + lecture préalable confirmée robuste sur YAML standard.

Trames patchées (7) : specification-technique (5 codes), concept (7), preuve-de-concept (5), dossier-technique (10), integration-et-tests (8), gestion-de-projet (9), ecoconception (4).
Fiches-notion patchées (10) : bete-a-cornes (1), cahier-des-charges-fonctionnel (3), fonction (1), pieuvre (2), gantt (1), jalons (1), retroplanning (1), wbs (1), matrice-de-risques (1), schema-bloc-fonctionnel (1→2).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Promotion C1-C6, C15, C16** : actes à froid en attente, niveau C session ultérieure.
- **Synthèse globale dans `couverture-en-cours.md`** : à conduire session ultérieure, niveau B/C, ~30-60 min.
- **3 décisions niveau D nouvelles** : catégorie « Hors scope par délégation » à instaurer, statut des 4 critères MME effleurés sans fiche centrale, statut schema-cinematique wiki ou délégation.
- **Commit/push** : rattrapage 10+ sessions cumulées + session courante.

### État JOURNAL.md
~96 ko avant cette entrée. Après ajout : estimation ~105-110 ko, **dépasse le seuil 100 ko**. **Archivage à proposer en session ultérieure** : sessions 25/05 suite 4 et antérieures peuvent être archivées dans `JOURNAL-archive.md` (pattern MARKER + N segments, méthode éprouvée 26/05 suite). À ne pas faire dans cette session pour limiter le coût.

---

## 2026-05-26 (suite 2) — Cartographie AA passe B sur 8 fiches phase 1 + nouvelle catégorie Hors scope + patch budget GP

### Périmètre de session
Session de cartographie AA déclenchée selon le cadrage de la session précédente. Tranchage des 3 questions méthodo Q1/Q2/Q3 en début, puis passe B (lecture en aveugle, fiche par fiche) sur les 8 fiches de la phase 1 du wiki (5 trames du V + 3 transverses). Acquisition d'une 4ᵉ catégorie de cartographie **Hors scope** en cours de session, propagée rétroactivement aux fiches déjà cartographiées. Patch structurel déclenché par cartographie : ajout du suivi budgétaire comme 6ᵉ outil canonique dans `gestion-de-projet.md`.

### Décisions méthodo Q1/Q2/Q3 tranchées en début de session
1. **Format cartographie** : option C — champ `aa:` dans front matter (source de vérité, codes courts) + table dérivée centralisée. La cartographie descend **jusqu'au critère** (pas juste l'AA).
2. **Granularité** : 3 niveaux initiaux + 1 acquis en session.
   - **Couvert** : objet central d'une fiche ou d'une section H2/H3.
   - **Effleuré** : mention H4, `[!example]`, wiki-link, posture/pièges.
   - **Non couvert** : pas du tout présent, identifie un trou à combler.
   - **Hors scope** (acquise C15) : critère hors périmètre wiki par décision éditoriale (évaluation transversale enseignants, pas contenu pédagogique).
3. **Ordre** : hybride B (fiche par fiche, lecture en aveugle) puis A (par domaine, check complétude).

### Codification critères validée
Format : `<Code_RA>/<AA_DOMAIN>/<N°critère>` (ex. `RA-PROJET-C03-3/EEE/1`). AA_DOMAIN nécessaire car un même RA porte parfois plusieurs AA dans des domaines différents.

### Normalisation du référentiel
Fichier source 62 lignes, 5 doublons supprimés → **57 critères distincts**, 12 AA, 5 domaines (PROJ 25, MME 12, EEE 10, MEO 10, ESE 5). **MIA n'existe plus** dans le référentiel — fusionné dans EEE et PROJ. Numérotation source conservée (trous explicites) pour traçabilité. Production du fichier `_drafts/referentiel/referentiel-normalise.md`.

Patches navigation MIA→EEE (3 fichiers) : `content/index.md`, `content/hub/index.md`, `content/fiches/eee/index.md` (titre + description élargis « EEE — Électronique et informatique embarquée », mention historique du basculement MIA→EEE le 26/05/2026). Suppression manuelle du dossier `content/fiches/mia/` reste en attente (limite MCP delete).

### Capitalisation des cartographies dans `_drafts/referentiel/couverture-en-cours.md`
Fichier de travail privé produit avec grille de lecture (3 niveaux + Hors scope, phase 1 vs phase 2, convention 1-fiche-par-critère EEE/info). 8 cartographies fiche par fiche écrites au format YAML couvert/effleure/hors_scope avec commentaires localisant chaque critère dans la fiche. Synthèse globale en placeholder, à compléter en fin de passe B+A.

### Bilans par fiche
| Fiche | Couvert | Effleuré | Hors scope | Total touché / 57 |
|---|---|---|---|---|
| specification-technique | 5 | 6 | 1 | 11 |
| concept | 7 | 9 | 1 | 16 |
| preuve-de-concept | 5 | 7 | 1 | 12 |
| dossier-technique | 10 | 7 | 1 | 17 |
| integration-et-tests | 7 | 6 | 3 | 13 |
| gestion-de-projet | 9 | 0 | 3 | 12 |
| ecoconception | 4 | 3 | 0 | 7 |
| securite-et-qualite | 0 | 5 | 0 | 5 |

### Découvertes structurantes
- **`RA-PROJET-C07-1/PROJ/3`** (gérer le budget) : vrai trou phase 1 identifié dans `gestion-de-projet.md` (5 outils canoniques mentionnés mais pas le budget). **Patché en session** : passage à 6 outils canoniques avec ajout du suivi budgétaire (« consolidation de la consommation projet vs enveloppe initiale, centralisé en dossier technique au moment des engagements matériels mais piloté en continu ») + mention dans le livrable 2/3 (sous-liste Continu).
- **`RA-MEO-C10-3/MEO/5`** (proposer outils de prise de décision collective) : précédemment trou phase 1 à vérifier sur `gestion-de-projet`, **vérifié présent** (bloc 3, 3 options + règle pour dépassement = outil structurant de décision).
- **`RA-PROJET-C03-3/PROJ/7`** (garantir la démontabilité du projet) : n'apparaissait dans aucune fiche cartographiée antérieurement. **Couvert dans ecoconception bloc 2** (démontabilité PCB / connectique JST / carte modulaire). Pas un trou, critère bien attribué.
- **`RA-PROJET-C03-3/EEE/2`** (analyser comportement sous-ensemble jusqu'au composant) : précédemment identifié trou phase 2 sur PoC. **Reclassé en Couvert** dans `integration-et-tests` étape 2. La fiche-tuto `analyse-de-schema-electronique` reste au TODO mais avec motivation reformulée : tuto pédagogique propre (popover depuis integration-et-tests étape 2), pas trou AA.
- **`securite-et-qualite.md` = 0 critère Couvert** : insight structurant. Cette trame ne porte pratiquement aucun critère AA central du référentiel école. Cohérent et attendu : c'est un domaine de **posture / culture professionnelle** (sécurité produit AMDEC + arrêt d'urgence, sécurité projet 3 règles + EPI, qualité documentaire Git tags + revue de code + sérigraphie PCB + plan de revues, normatif pointu CE/EMC/ISO 12100 délégué) non explicitement capturé par les AA techniques du référentiel I3.5/I3.6. La fiche conserve toute sa valeur pédagogique mais ne sert pas la cartographie AA. À noter en synthèse globale.

### Conventions acquises en session
- **C15 — catégorie Hors scope** : critère du référentiel école non traité par le projet TheSkillCodex par décision éditoriale (évaluation transversale des étudiants : soft skills, engagement, participation, terminologie professionnelle évaluée en revue par les enseignants). À distinguer de **Non couvert** : pas un trou, une décision éditoriale. Cas identifiés en session : `RA-PROJET-C04-4/PROJ/3` (terminologie technique écrit/oral), `RA-PROJET-C07-1/PROJ/4` (participer aux tâches), `RA-PROJET-C07-1/PROJ/5` (être force de proposition), `RA-PROJET-C07-1/PROJ/6` (participer aux événements).
- **C16 — 1 fiche-tuto par critère EEE/info embarquée (ou tutoriel gonflé multi-couverture)** : pour les critères EEE et info embarquée, une fiche-tuto par critère ou par groupe cohérent en phase 2. Pas de critère EEE qui reste en effleurage permanent — chacun doit avoir un endroit nommé dans le wiki phase 2. Quand un critère cite plusieurs solutions (ex. logigramme/MAE/grafcet/chronogramme pour `EEE/5`), **1 fiche par solution** plutôt qu'une fiche regroupante. **Un tutoriel gonflé peut couvrir plusieurs critères** — acquis 26/05 suite 2 sur décision utilisateur.

### Reclassement rétroactif Hors scope sur fiches déjà cartographiées
Après acquisition de C15 en session, le critère `RA-PROJET-C04-4/PROJ/3` (Effleuré dans spec-tech / concept / PoC / dossier-tech) a été déplacé vers la catégorie Hors scope dans les 4 cartographies concernées. Bilans normalisés en conséquence : spec-tech 12 → 11, concept 17 → 16, PoC 13 → 12, dossier-tech 18 → 17. Patch batch d'edits sur `couverture-en-cours.md`.

### Patches structurels en session
- **`content/fiches/proj/gestion-de-projet.md`** : 5 outils canoniques → 6 outils (ajout du suivi budgétaire dans le bloc 2) + livrable 2/3 enrichi (sous-liste Continu mentionne suivi budgétaire mis à jour à chaque revue de phase et engagement matériel majeur).
- **`content/index.md`**, **`content/hub/index.md`**, **`content/fiches/eee/index.md`** : MIA retiré de la navigation, EEE élargie sémantiquement (« Électronique et informatique embarquée »).
- **`TODO.md`** : 6 fiches phase 2 ajoutées à la liste *Notions à produire en parallèle* (ecodesign, analyse-de-schema-electronique, 4 méthodes commande logigramme/MAE/grafcet/chronogramme, optimisation-mecanique). Ajout manipulation manuelle suppression dossier `content/fiches/mia/`.

### Incident technique résolu en session
**GitHub Actions « Deploy quartz site to github page » avait échoué en 2s** d'après un mail reçu par l'utilisateur. Diagnostic initial : workflow `.github/workflows/deploy.yml` standard (Quartz vanilla, Node 22, `actions/deploy-pages@v4`). Aucun changement local poussé cette session à ce stade.

**Cause identifiée après remontée logs utilisateur** : `actions/upload-pages-artifact@v3` résolue par GitHub Actions vers le SHA `56afc609e74202658d3ffba0e8f6dda462b719fa`, non téléchargeable depuis `codeload.github.com` (« Failed to download archive after 1 attempts »). SHA pinné du tag v3 révoqué ou non servi.

**Fix appliqué en session** : bump `actions/upload-pages-artifact@v3` → `@v4` dans `.github/workflows/deploy.yml`. Patch d'une ligne, niveau C (modification d'infra validée). Push utilisateur → build redevenu OK. Compatibilité avec `actions/deploy-pages@v4` conservée (pas besoin de bumper deploy-pages).

**Leçon** : sur les actions GitHub officielles pinées par tag majeur, surveiller périodiquement les bumps majeurs. v3 → v4 d'`upload-pages-artifact` semble correspondre au passage de format d'artifact (suit la migration v3→v4 d'`actions/upload-artifact` plus largement, fin 2024-2025).

### Incident C14 vécu en session
- 2 typos de transcription dans anchors `oldText` sur le batch initial de `couverture-en-cours.md` (espacement 2 vs 3 espaces avant `#` dans les commentaires YAML selon fiche). Batch rejeté, anchors recopiés depuis lecture MCP. **Discipline C14 confirmée** : recopier `oldText` exactement, ne jamais retranscrire de mémoire.
- 1 erreur de routage : 2 edits sur 2 fichiers différents passés en un seul appel `edit_file` avec un seul path. Batch rejeté. **Discipline** : 1 appel `edit_file` = 1 fichier.
- 2 régressions typographiques introduites par patch GP (« Le » → « le » et « centralisé » → « centralé ») corrigées immédiatement.

### Estimation du restant pour boucler le traitement AA
- **12 fiches-notion/tuto + hub** à cartographier en passe B accélérée — 1-2 sessions niveau B
- **Passe A par domaine** (EEE, ESE, MEO, MME, PROJ) — 0.5 session
- **Écriture champ `aa:` dans front matter** sur ~22 fiches — 0.5 session
- **Synthèse globale dans `couverture-en-cours.md`** — 0.5 session

Total : **2-3 sessions** pour boucler. Reprise rédaction fiches phase 2 possible dès passe A finie.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Promotion C1-C6 § 7 → § 1-2** : épreuve 3/3 réussie, à acter à froid (niveau C requis).
- **Promotion C13** (relire amont) déjà acquise.
- **Promotions C15 + C16** : acquises 26/05 suite 2, à documenter en § 7 puis acter en § 6 après confirmation sur fiches-notion phase 2.
- **Vérification GitHub Pages** : résolu en session, voir paragraphe Incident technique ci-dessus.
- **Commit/push** : rattrapage depuis 19/05 (9+ sessions accumulées maintenant) + session courante.
- **Suppression manuelle dossier `content/fiches/mia/`** : limite MCP delete.

---

## 2026-05-26 (suite) — Sécurité-qualité (3e transverse) + finalisation archivage MCP + cadrage session AA

### Périmètre de session
Triple front : (1) rédaction complète de la fiche-trame `securite-et-qualite` (3e et dernière transverse, clôt la phase 1 du wiki avec 5/5 trames V + 3/3 transverses), (2) MAJ documentaire à chaud BACKLOG/TODO/conventions, (3) finalisation de l'archivage JOURNAL 22→24/05 (suite) via MCP segmenté (défi C14 relevé), (4) cadrage de la prochaine session sur la cartographie des 107 AA.

### Rédaction `securite-et-qualite.md`

Cadrage initial — 5 questions tranchées :

1. **Structure** : 3 blocs co-actifs (Sécurité produit / Sécurité projet / Qualité documentaire), pas N étapes. Convention transverses confirmée (3/3).
2. **Tressage** : sécu et qualité tressées dans chaque bloc (option a), pas séparées.
3. **Frontière ESE** : citer + déléguer le normatif pointu (marquage CE, basse tension, EMC, ISO 12100, EPI) — ne pas refaire le travail des collègues.
4. **Fil rouge bras 3 axes** : 3 axes méthodologiques + 3 règles ajoutées par l'utilisateur (pas de 230V sans encadrant, pas de machine sans formation, jamais seul).
5. **Articulation des 3 axes** : cadence projet / matrice de risques / piloter sans écraser.

Production : fiche complète (28 ko), 3 `[!example]` bras 3 axes avec semaines n°2-15 (cohérence chiffrée avec `integration-et-tests` et `dossier-technique` : alu 6061, PCB monoface gravé interne, 3 cond. 100 nF, 24 V, fusible 3 A, couple stepper 0.5 Nm), 3 `[!livrable]` format Continu/Jalonné, 1 `[!warning]` sécu projet + 1 `[!tip]` qualité doc, 11 pièges format gras court + explication (~45 % a posteriori, conforme C12).

Cohérence finale 4 passes : 0/0/N-A/3 patches wiki-links (Objectif + Bloc 3 + Équipe). Pattern stable post-promotion C6.

### MAJ documentaire à chaud

- **BACKLOG.md** (5 patches batch) : `hub/ecoconception` et `hub/securite-et-qualite` cochés → phase 1 wiki complète (5/5 trames V + 3/3 transverses). 7 nouvelles cibles wiki-links ajoutées : `revue-de-code` (MIA), `amdec` (PROJ), `marquage-ce` / `basse-tension` / `emc` / `iso-12100` / `epi` (ESE renommée « Écoconception, sécurité produit, normes »).
- **TODO.md** (5 patches en 2 batches) : flèche prochaine session refondue → cartographie AA OU fiche-notion prioritaire (PCB / AMDEC / caracteriser-une-exigence). Sécu-qualité cochée. Entry commit/push session ajoutée. Rotation glissante Fait : nouvelle session 2026-05-26 (suite) en tête (12 entrées capitalisation), session 25/05 suite 7 PoC retirée.
- **conventions.md** (1 patch) : bannière § 7 C1-C6 épreuve 3/3 réussie → promotion § 1-2 envisageable à acter à froid (niveau C requis).

Incident C14 vécu : typo de transcription arrow `➤` (U+27A4) vs `➔` (U+2794) → 1er patch TODO en échec, corrigé via `read_text_file head=10` puis re-batch OK. Discipline retenue : recopier `oldText` depuis lecture MCP plutôt que retranscrire.

### Finalisation archivage JOURNAL 22→24/05 (suite) via MCP — défi C14 relevé

Bloc à archiver = 7 sessions (22/05 + 22/05 suite + 23/05 + 23/05 suite + 23/05 suite 2 + 24/05 + 24/05 suite) = **~60 ko net**. Au-dessus du seuil C14 (~30 ko payload) → segmentation obligatoire.

**Stratégie validée : MARKER temporaire + N segments**. Pattern à acter comme procédure standard pour gros déplacements de blocs.

**Phase 1 — Insertion archive (5 étapes)** : pose marker `<!-- ARCHIVE_INSERT_MARKER -->` juste avant `## 2026-05-21 (suite 2)` dans `JOURNAL-archive.md` → insertion seg3 (22/05 ×2, ~20 ko) → seg2 (23/05 ×3, ~24 ko — payload le plus gros, sous seuil) → seg1 (24/05 ×2, ~17 ko) → retrait marker. Antichronologie respectée : 24/05 (suite 2) — 24/05 (suite) — 24/05 — 23/05 (suite 2) — 23/05 (suite) — 23/05 — 22/05 (suite) — 22/05 — 21/05 (suite 2).

**Phase 2 — Trim JOURNAL.md (5 étapes)** : T1 seg1 supprimé → T2 seg2 supprimé → **T3 bloqué EPERM** (verrou Windows, Obsidian focus sur JOURNAL.md) → T3 réussi après libération du verrou (changement d'onglet dans Obsidian) → T4 warning préambule supprimé + mise à jour de la phrase « antérieures au 25/05 » + résumé d'archive élargi → T5 séparateur orphelin nettoyé + commentaire HTML final mis à jour (mentionne les deux vagues d'archivage : 25/05 pour 19→21/05 + 24/05 suite 2, et 26/05 suite pour 22→24/05 suite).

**Bilan tailles** : JOURNAL.md 156 → 96 ko (−60 ko), JOURNAL-archive.md 60 → 119 ko (+59 ko). Cohérent.

### Leçons méthodo

**C14 seuil ~30 ko validé** : un `edit_file` de 24 ko net + 200 chars d'anchor passe sans souci. Marge confortable à 25 ko. La zone d'échec silencieux semble commencer plus haut que documenté initialement (à ré-éprouver à froid pour calibrage).

**Nouveau piège distinct du seuil C14 — verrou Windows EPERM** : quand Obsidian a le fichier focus ouvert, MCP `edit_file` réussit l'écriture du `.tmp` mais échoue au rename final avec `EPERM: operation not permitted, rename '*.tmp' -> 'file.md'`. C'est un problème d'OS, pas de payload. Remède : changer d'onglet dans Obsidian (libère le verrou, pas besoin de fermer Obsidian). À documenter dans `conventions.md` § 7 comme amendement C14.

**Pattern MARKER + N segments** : stratégie méthodo qui rend faisables les déplacements de blocs > 30 ko via MCP. À capitaliser comme procédure standard si la situation se reproduit (typiquement les archivages JOURNAL ultérieurs).

### Cadrage prochaine session — cartographie AA

Référentiel école à jour rangé dans `_drafts/referentiel/Compétences.xlsx` (sous-dossier `referentiel/` créé par l'utilisateur). Décision d'emplacement : cohérent avec `_drafts/flowcharts/`, hors site Quartz, document de pilotage interne. Également uploadé dans le projet Claude.ai pour accès `/mnt/project/` en début de session.

3 questions méthodo à trancher en début de session AA :
1. **Format de cartographie** : champ `aa: [...]` dans front matter (C9, jamais rempli) / table centralisée dans `hub/index.md` / les deux ?
2. **Granularité** : un AA effleuré compte-t-il comme couvert, ou faut-il un seuil (fiche dédiée OU section dédiée) ?
3. **Ordre de traitement** : par domaine du référentiel (EEE → MIA → MEO → PROJ → MME → ESE) ou par fiche existante (lecture en aveugle de chaque fiche, lister les AA couverts, recoupement) ?

Mode : niveau C jusqu'aux conventions stabilisées sur 2-3 fiches, puis niveau B sur l'exécution répétitive.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Promotion C1-C6 § 7 → § 1-2** : épreuve 3/3 réussie (`gestion-de-projet`, `ecoconception`, `securite-et-qualite`), à acter à froid (niveau C requis).
- **Amendement C14 — leçon EPERM Windows** : à intégrer dans `conventions.md` § 7 « En cours d'éprouvage ».
- **Cartographie 107 AA** : session dédiée à programmer (prochaine session, voir cadrage ci-dessus).
- **Convention emplacement référentiels** : `_drafts/referentiel/` pour les documents école externes — à documenter formellement si confirmé sur un 2e cas.
- **Re-calibrage seuil C14** : la valeur exacte du seuil pratique mérite éprouvage à froid (24 ko passe, 50 ko échoue le 25/05 suite 8 — zone intermédiaire 30-40 ko à explorer).
- **Commit/push** : rattrapage depuis 19/05 (8+ sessions accumulées) + session courante — à faire en fin de session.

---

## 2026-05-26 — Integration et tests : approfondissement complet voie C + 3 actes à froid + amendements conventions

### Périmètre de session
Approfondissement complet de `integration-et-tests.md` (5ᵉ et dernière trame du V) sur session démarrée sur PC pro. Session structurée en 3 actes à froid de capitalisation documentaire (rotation glissante TODO + promotions C10 et C12) puis cadrage voie C en 5 questions tranchées + arbitrage d'un conflit pédagogique détecté entre squelette 22/05 et demande Q1 utilisateur, puis rédaction complète en niveau A des 5 étapes (rythme 2/3/3/2/2 H4 dont 1 cas exception multi-disciplinaire et 1 cas pyramide compressée) + Pièges + Équipe + cohérence finale 4 passes.

### 3 actes à froid en début de session
1. **Rotation glissante TODO** : suite 5 retirée de la section Fait (4 sessions → 3 conformément à la règle § 9 du prompt projet).
2. **Promotion C10 vers § 2** (matrice incarnée dans `[!example]`) après épreuve 3/3 cumulant **12 contextes** : concept 4 (matrice de décision 3×5 / tableau conflits 4×2 / pré-dim 6×5 / TdM 5 sections) + PoC 4 (liste 3 sources / relevés 5 points 1000 cycles / tableau de statut / TdM type 5 sections) + dossier-technique 4 (ajustements 3 familles / BOM 7×6 213,20 € HT / 3 validateurs × 5 colonnes / 3 bons de commande). Bannière promotion ajoutée en § 7 avec marqueur « promue 26/05 », entrée 10 conservée intacte pour traçabilité.
3. **Promotion C12 vers § 6** (Pièges nourris a posteriori) après ratio stable 37-45 % sur 3 trames du V éprouvées (concept 37 %, PoC 45 %, dossier-tech 45 %). Bannière promotion ajoutée en § 7 avec marqueur « promue 26/05 », entrée 12 conservée pour traçabilité.

### Cadrage en début de session — 5 questions tranchées + conflit pédagogique détecté
5 questions tranchées en bloc, validées par utilisateur avec ajustements Q1 (sous-titres disciplinaires élec/méca/info avec wiki-links vers futurs tutos) et rappel Q3 (pas de temporel en prose, `semaine n°X` uniquement dans `[!example]`).

**Conflit pédagogique majeur détecté** au moment de lire le squelette existant : la structure 22/05 défend explicitement les tests **par fonction** (anti-pattern explicite « par discipline = incohérent mécatronique »), incompatible avec la demande Q1 utilisateur (sous-titres disciplinaires). **Voie C retenue par utilisateur** : conserver la structure squelette 22/05 (tests par fonction sur les niveaux 1+), appliquer 3 H4 disciplinaires UNIQUEMENT en étape 2 (validation niveau 0 = inspection d'artefacts physiques disciplinaires, légitime). Compatible avec anti-pattern + demande Q1.

**Rythme final 2/3/3/2/2 = 12 H4**, dont 2 cas inédits :
- Étape 2 = 3 H4 par discipline (élec / méca / info) — exception multi-disciplinaire à acter en C11.
- Étape 3 = 3 H4 dense pivot pour 4 niveaux (niveau 1 / niveaux 2-3 / niveau 4) — cas pyramide compressée à acter en C11.

### Niveau A en autonomie sur toute la fiche
Accordé par l'utilisateur après cadrage. Workflow A = clôture autonome avec récap synthétique en fin de phase 8.

### Phase 1 — Alignement v2.1 du squelette (11 patches batch)
5× titre example `Exemple : projet bras 3 axes`, 5× titre livrable `Livrable N/X — Intégration et tests` (singulier ou pluriel selon nombre d'items), 1× warning titre `Attention` + phrase-clé gras dans le corps. Squelette aligné conventions visuelles avant rédaction.

### Phases 2-6 — Rédaction des 5 étapes en niveau A

**Étape 1 *Approvisionner et fabriquer*** (2 H4 économes hors pivot) : intro 2 ¶ (pont depuis dossier-tech, propos parallélisme branche réception vs branche fabrication interne) + H4-1 *Recevoir les commandes externes au rythme des livraisons* (3 gestes simples à la réception) + tip Astuce traçabilité étiquette + H4-2 *Fabriquer en interne au rythme des moyens disponibles* (3 moyens : impression 3D / usinage / PCB gravure école) + warning Attention « Une pièce sortie de machine n'est pas une pièce validée » (pont vers étape 2 niveau 0). `[!example]` refondu sur fil rouge alu 6061 : 3 paragraphes structurés par branche + sortie d'étape sem. 15.

**Étape 2 *Valider les pièces fabriquées*** (**3 H4 disciplinaires**, 1ʳᵉ exception multi-disciplinaire C11) : intro 2 ¶ justifiant pourquoi disciplinaire ici vs multi-discipline étape 3 (artefacts physiques disciplinaires vs fonctions mécatroniques). H4-1 *Valider la chaîne électrique* (4 axes : continuité PCB / alim régulée / niveaux logiques MCU / réponse drivers bench). H4-2 *Valider les pièces mécaniques* (visuel + dimensionnel + essai à blanc). H4-3 *Valider le firmware et l'environnement de développement*. Tip Astuce traçabilité fiche dossier de tests + warning Attention « Sauter le niveau 0 contamine ». `[!example]` : 4 paragraphes structurés (chaîne élec / pièces méca / firmware / sortie d'étape) avec 1 condensateur 100 nF remplacé, 1 segment PLA délamination → réimpression.

**Étape 3 *Conduire la pyramide de tests*** (**3 H4 dense pivot, pyramide compressée** — cas particulier C11) : intro 2 ¶ (cœur de l'étape, tests par fonction multi-discipline, cascade ascendante avec rétroactions ciblées). H4-1 *Tester chaque fonction du CdCF isolément (niveau 1)*. H4-2 *Tester les compositions de fonctions, puis le système complet (niveaux 2 et 3)*. H4-3 *Qualifier le prototype contre le CdCF — refermer le V (niveau 4)* avec 3 sorties nominales (critères atteints / partiellement atteints / non atteints). Tip Astuce préparer fiche qualif niveau 4 en parallèle + warning Attention refondu sur « Au niveau 4, l'écart se documente, il ne se rattrape pas » (refonte pour éviter doublon avec H4-3 qui définit « le V se referme »). `[!example]` : 5 paragraphes structurés par niveau, qualification CdCF chiffrée (précision 8 mm vs 5 mm cible NON atteint, charge 100 g ATTEINT, vitesse 45 vs 50 mm/s PARTIELLEMENT atteint), statut « prototype qualifié avec écarts documentés », jeu articulaire identifié comme cause, articulations à roulements pistées.

**Étape 4 *Mener les bilans de clôture*** (2 H4 économes, ni pivot ni clôture documentaire pure) : intro 2 ¶ (3 bilans en parallèle par contrainte calendaire + REX réflexif distinct). H4-1 *Conduire les trois bilans en parallèle* (bilan technique : tableau qualif + analyse écarts ; bilan projet : planning vs rétroplanning, budget, matrice de risques ; bilan écoconception : ACV réelle vs estimée du dossier-tech). H4-2 *Capitaliser via le REX d'équipe* (3 questions canoniques, compétence MEO en propre). Tip Astuce REX en revue à blanc + warning Attention « bilan technique ≠ liste d'écarts ». `[!example]` : 4 paragraphes structurés (bilan technique reprend précision 8 mm + jeu articulaire / bilan projet retard 4 jours + budget 215 € HT + risque lead time confirmé / bilan éco ACV ≈50 % steppers + 30 % alu aligné estimé / REX bascule PLA→alu salvatrice + caractérisation jeu plus précoce + transmission STL anticipée bonne pratique).

**Étape 5 *Livrer le projet*** (2 H4 économes, livraison documentaire + orale) : intro 2 ¶ (rédiger d'abord, démontrer ensuite — rapport matrice de la soutenance). H4-1 *Rédiger le rapport final* (structure par phases du V, qualif + écarts les plus lus). H4-2 *Préparer et passer la soutenance* (3 moments : démo / écarts honnêtes / regard équipe). Tip Astuce rédiger rapport en commençant par les bilans + warning Attention « préparer soutenance avant rapport mauvaise idée ». `[!example]` : 3 paragraphes structurés (rapport remis dernier jour sem. 15 / soutenance lendemain avec démo trajectoire 3 points + jeu articulaire vidéo ralentie + REX transmission STL + répartition parole par bloc).

### Phase 7 — Pièges + Équipe refondus

**Pièges fréquents** : 6 puces simples du squelette refondues en **11 entrées format `**Piège court.** Phrase d'explication.`** (convention 12). Ratio a posteriori ~55 % (6/11 émergés pendant rédaction des étapes 2-5), cohérent avec range 37-45 % typique en légère augmentation. Pièges : sauter niveau 0 / confondre validation disciplinaire et tests fonctionnels / découper tests par discipline / banc vs pièce / fiche qualif en dernier / refaire cinématique en urgence / boucher au lieu documenter / bilans en série / énumérer sans positif / REX vs bilan projet / soutenance avant rapport.

**Pendant cette phase, côté équipe** : 4 ¶ thématiques (interfaces métiers méca/info/élec / gestion-de-projet / écoconception / sécurité-et-qualité). Wiki-links posés sur cibles existantes ou à créer (`firmware`, `gabarit`, `cable-management`, `niveau-logique`).

### Phase 8 — Cohérence finale 4 passes (3 patches)

- **Passe 1 terminologie** : 1 typo « écartoé » → « écarté » dans piège 4 (banc vs pièce).
- **Passe 2 fil rouge bras 3 axes** : 0 patch (cohérence chiffrée inter-étapes OK : précision 8 mm récurrente, budget 215 € HT, ACV 50 %/30 %, articulations alu en lead time long).
- **Passe 3 ponts inter-étapes** : 0 patch (sortie d'étape 2 example renvoie vers étape 3, étape 3 H4-1 rétroactive vers étape 2, étape 4 intro ponte depuis étape 3, étape 5 intro depuis étape 4 — pattern stable).
- **Passe 4 wiki-links exhaustif** : 2 doublons détectés (PCB ×2 dans étape 2 H4-1, CdCF ×2 dans étape 3 H4-1) → retirer le 2ᵉ wiki-link de chaque section. Pattern « 0 patch » du dossier-tech non atteint, mais corrections mineures (3 patches au total).

Total **27 patches** sur la session, fiche `integration-et-tests.md` 35 878 bytes.

### Round 2 utilisateur
Validé sans correction. Fiche close.

### Conventions éprouvées et acquises
- **C1** (temporel limité aux `[!example]`) : 5/5 `[!example]` contiennent `semaine n°X`, aucune prose générique.
- **C6** (wiki-links 1ʳᵉ occurrence par section/sous-section/callout) : audit passé en passe 4 avec 2 corrections de doublons (mode au fil + filet passe dédiée).
- **C10** (matrice incarnée) : 5/5 `[!example]` sont des objets structurés (3/4/5/4/3 paragraphes selon étape). Pattern stable post-promotion.
- **C11** (rythme H4) : 2 cas inédits acquis. **Convention amendée § 6** : exception multi-disciplinaire (3 H4 par discipline) + cas pyramide compressée (3 H4 dense pour 4 niveaux). Documenté en sortie de session.
- **C12** (Pièges a posteriori) : ratio 55 % (6/11), cohérent avec range 37-45 % en légère croissance.
- **C13** (relire amont) : 2ᵉ épreuve formelle réussie. **Convention promue § 5 (Collaboration)** en sortie de session après dossier-tech + integration-et-tests sans round 2 utilisateur sur sections amont.
- **C14** (seuil 30 ko payload MCP) : éprouvée en début de session sur les patches d'alignement v2.1 (batch 11 patches ~2 ko). **Convention enrichie § 7** : leçon NBSPs U+202F + typos de transcription dans anchors longs comme source d'échec silencieux du matching `oldText` (2 cas vécus en session : NBSPs présumés sur placeholder + typo « enchaîner » → « enchaâîner » dans anchor).

### Wiki-links nouveaux poussés au BACKLOG
- `firmware` (MIA) — popover posé étape 2 intro + H4-3 + section Équipe
- `gabarit` (MME) — popover posé étape 2 H4-2
- `cable-management` (EEE) — popover posé section Équipe
- `niveau-logique` (EEE) — transformation entrée existante en wiki-link explicite

### Leçons méthodo capitalisées dans `conventions.md` § 7
- **Typos de transcription dans anchors `edit_file`** : reconstituer un `oldText` de mémoire introduit des typos invisibles (cas vécu : « enchaâîner » au lieu de « enchaîner » dans anchor étape 3 example, mismatch silencieux). Discipline : recopier `oldText` directement depuis la sortie de `read_text_file` plutôt que retranscrire.
- **NBSPs fines U+202F** : la typo française pose des NBSPs invisibles devant `: ; ? ! % » €`. Anchors longs reconstitués visuellement → mismatch silencieux. Discipline : anchors courts privilégiés (1 phrase identifiante), `\u202f` explicite si traversée nécessaire.

### Tâches restantes en fin de session
1. Tâche manuelle utilisateur : finalisation archivage JOURNAL 22-24/05 dans Obsidian (rappelée en début de session, toujours pendante).
2. Commit + push session 26/05 (s'ajoute à la liste de rattrapage depuis 19/05).
3. Vérifications visuelles rendu Quartz mobile poussées au TODO (5 étapes + Pièges + Équipe d'integration-et-tests).

### Phase 1 du wiki = complète côté trames du V
Avec la clôture de `integration-et-tests`, les 5 trames du V sont approfondies (concept 25/05 suite 4-6, PoC 25/05 suite 7, dossier-technique 25/05 suite 8, integration-et-tests 26/05 ; specification-technique antérieure). Prochaine cible : `securite-et-qualite` (3ᵉ et dernier fil transverse, après `gestion-de-projet` 25/05 et `ecoconception`). Niveau A en autonomie déjà validé par l'utilisateur pour cette fiche.

### État JOURNAL.md
Taille actuelle estimée 140 ko (au-dessus du seuil 100 ko). Archivage 22-24/05 toujours pendant en tâche manuelle utilisateur (procédure dans TODO Manipulations manuelles, voir convention 14 sur le seuil pratique MCP).

---

## 2026-05-25 (suite 8) — Dossier technique : approfondissement complet + leçon méthodo MCP seuil 30 ko

### Périmètre de session
Approfondissement complet de `dossier-technique.md` (phase 4 du V) sur session de démarrage PC perso. Tâche annexe initiale (archivage JOURNAL 22-24/05) résolue partiellement via MCP (résorption duplication 24/05 suite 2) + report en finalisation manuelle pour le reste. Surprise structurante : **étape 3 trouvée pré-rédigée** dans le fichier au moment d'attaquer la rédaction de fond — hypothèse plus probable : autre instance Claude Desktop lancée en parallèle (brief utilisateur multi-appareil §2). Cohérence vérifiée et préservée.

### Cadrage en début de session — 5 questions tranchées en bloc
1. **Fil rouge local** : aligner sur PoC final (articulation **usinée alu 6061** suite à marge négative en PoC), pas l'ajustement local PLA 60→80 % du squelette. Cohérence inter-fiches PoC ↔ dossier-technique recherchée. Refonte des 5 `[!example]`.
2. **Étape pivot = étape 4** (multi-validation à 3 interlocuteurs). Rythme H4 : 2/2/3/3/2 (étape 5 = cas inédit sortie matérielle, ni clôture documentaire ni étape économe).
3. **Convention 10 (matrice incarnée) — épreuve 3/3** : 4 contextes ciblés (ajustements PoC→dossier étape 1 / BOM matricielle étape 3 / 3 validateurs matriciels étape 4 / structure 3 bons commande étape 5).
4. **Convention 13 (relire amont) — 1ʳᵉ épreuve formelle** : passe rapide sur Posture + Objectif + Conclusion avant chaque section avale.
5. **Découpage** : session complète calque PoC suite 7, **niveau A en autonomie accordé par l'utilisateur**.

**Info ajoutée par l'utilisateur en cours** : les commandes doivent être réalisées sur une liste de **fournisseurs partenaires** (catalogue restreint, pas de libre choix marché). Intégrée comme contrainte structurante en étapes 3 et 5.

### Archivage JOURNAL 22-24/05 — résolu partiellement
- Tentative `write_file` ~50 ko payload pour reconstruire JOURNAL : **échec silencieux** (taille fichier inchangée, date modification inchangée). 2ᵉ occurrence du symptôme après 25/05 suite 3.
- Décision : abandon de l'approche massive. Action MCP minimale + procédure manuelle pour le reste.
- **Action MCP** : suppression session 24/05 suite 2 du JOURNAL (résorption duplication avec archive). JOURNAL passé de 144 → 135 ko (−8,8 ko). Préambule patché pour pointer vers la finalisation manuelle.
- **Action documentaire** : ajout au TODO d'une tâche *Finaliser archivage 22-24/05* en *Manipulations manuelles* (procédure Obsidian détaillée), nouvelle convention 14 capitalisée dans `conventions.md` § 7.

### Convention 14 acquise — Seuil pratique MCP write_file/edit_file ≈ 30 ko payload
Toute opération MCP `write_file` ou `edit_file` avec payload > 30 ko a une probabilité non négligeable d'échouer silencieusement (sans message d'erreur). Symptôme : tool call qui semble réussir mais `get_file_info` montre fichier inchangé. **Discipline acquise** : (a) `get_file_info` systématique après tout write/edit lourd, (b) opérations massives en édition manuelle Obsidian + Git ou script Node CLI hors MCP.

### Phase 1 — Alignement v2.1 du squelette (11 patches batch)
5× `[!example] Sur le bras 3 axes` → `Exemple : projet bras 3 axes` (désambiguïsation par première ligne du corps), 5× `[!livrable] Livrable de l'étape N` → `Livrable N/5 — Dossier technique` (et `Livrables 3/5` pluriel pour étape 3), 1× `[!warning] Trois interlocuteurs distincts, trois disponibilités` → titre fixe `Attention` + phrase-clé en gras. Diff propre.

### Phase 2 — Étape 1 *Intégrer les retours de la preuve de concept* rédigée
2 paragraphes intro (pont depuis PoC avec 3 issues nominales, anti-pattern « rouvrir CAO directement »), 2 H4 économes :
- H4-1 « Du compte rendu PoC aux ajustements à intégrer » : 3 familles d'ajustements (composants confirmés / recalés / contraintes nouvelles) en liste numérotée + tip « Une page de synthèse, pas une réunion orale ».
- H4-2 « Propager les ajustements aux trois disciplines » : effet inter-discipline, exemples concrets + warning « Repartir des plans du concept revient à effacer la PoC ».

`[!example]` refondu sur articulation usinée alu 6061 : 3 familles d'ajustements instanciées. Wiki-links sémés : `[[microcontroleur]]`, `[[pla]]`, `[[usinage]]`, `[[retroplanning]]`, `[[ecoconception]]`.

### Phase 3 — Étape 2 *Détailler les plans par discipline* rédigée
2 paragraphes intro (transition étape 1, niveau précision supérieur, retour grille disciplinaire vs PoC), 2 H4 économes :
- H4-1 « Travailler en parallèle par discipline » : 3 disciplines en liste (élec/méca/info), outils typiques cités + tip « Reprenez le schéma bloc fonctionnel comme carte d'interfaces ».
- H4-2 « Vérifier la cohérence inter-disciplines avant les validateurs externes » : 3 familles d'interfaces (physiques / électriques / logicielles) en liste numérotée + warning « Une spécification d'interface n'est pas une spécification interne ».

`[!example]` instancié : 3 disciplines + revue interne tracée (2 conflits arbitrés sans rétroaction concept). Wiki-links nouveaux : `[[schema-bloc-fonctionnel]]`, `[[cahier-des-charges-fonctionnel|CdCF]]`, `[[matrice-de-decision]]`, `[[impression-3d]]`.

### Phase 4 — Étape 3 *Consolider la BOM et chiffrer l'environnement* : pré-rédigée (autre Claude)
Étape 3 trouvée déjà rédigée en pleine qualité au moment de l'attaquer. Hypothèse autre instance Claude lancée en parallèle (brief multi-appareil). Contenu trouvé : 3 H4 dense (BOM finale chiffrée / Quantifier l'écoconception / Planning + budget) + tip + warning + example matriciel avec **BOM 7 lignes 6 colonnes** (213,20 € HT sous enveloppe 250 €) + ACV simplifiée (steppers ~52 %, alu+usinage ~28 %) + livrable 3 items. Cohérence vérifiée avec mes étapes 1-2-4-5.

### Phase 5 — Étape 4 *Rédiger et faire valider* (PIVOT) rédigée
2 paragraphes intro (pont depuis étape 3, multi-validation à 3+1 comme miniature industrielle), 3 H4 dense :
- H4-1 « Préparer la multi-validation » : sous-dossier ciblé par validateur, 3 choses à figer.
- H4-2 « Mener les trois validations disciplinaires » : 3 RDV séparés 1-2 semaines, ordre logique.
- H4-3 « Faire valider l'ensemble en revue globale » : encadrant vérifie cohérence inter-parties + qualité argumentation + lisibilité tiers.

Warning existant + tip nouveau « Ouvrez chaque RDV par les livrables-clés ». `[!example]` refondu : **tableau matriciel 3 validateurs × 5 colonnes** — 3ᵉ contexte fort de convention 10. Wiki-links de la table échappés avec `\|` pour pipe.

### Phase 6 — Étape 5 *Émettre les commandes* rédigée (cas inédit)
2 paragraphes intro (point de non-retour matériel, rôle équipe vs responsable projet), 2 H4 :
- H4-1 « Préparer les bons de commande » : 1 bon par fournisseur partenaire, 4 contenus attendus.
- H4-2 « Émettre et tracer » : émission par resp projet, traçabilité, vérification conformité à réception.

Warning nouveau « Émettre avant la validation d'ensemble est un échec d'étape ». Tip nouveau « Suivi par tableau partagé ». `[!example]` structuré en 3 bons de commande (partenaire élec / matière / fablab-atelier) — 4ᵉ contexte de convention 10.

### Phase 7 — Pièges + Équipe refondus
- **Pièges fréquents** : refonte de 5 puces du squelette en **11 entrées format gras court + explication** (calque concept 8 / PoC 11). ~5/11 pièges émergés a posteriori des étapes 2-5 (≈ 45 %, ratio aligné PoC) — éprouve C12.
- **Équipe** : 4 paragraphes thématiques (Interfaces métiers / Gestion de projet / Écoconception / Sécurité et qualité), calque concept/PoC. Wiki-links sémés : `[[gestion-de-projet]]`, `[[retroplanning]]`, `[[acv-simplifiee]]`, `[[securite-et-qualite]]`.

### Phase 8 — Cohérence finale 4 passes : **0 patch sur les 4 passes** (pattern PoC confirmé)
- Passe 1 (terminologie) : 0 patch.
- Passe 2 (fil rouge bras 3 axes) : 0 patch — articulation usinée alu 6061 cohérente sur les 5 étapes (lead time 3 semaines / 15 j, masse +35 %, ISO 2768 m + Ra ≤ 1,6).
- Passe 3 (ponts inter-étapes) : 0 patch — chaque intro d'étape ouvre par un pont rétro-arrière propre.
- Passe 4 (wiki-links exhaustif) : 0 patch — convention 6 tenue au fil. **2ᵉ confirmation après PoC suite 7** que la discipline est acquise quand internalisée.

### Round 2 utilisateur — 2 points tranchés
1. **Cohérence PCB-BOM** : tranché par information utilisateur — PCB monoface gravé en interne sur **machine de gravure à l'anglaise** de l'école. Donc PCB jamais commandé, pas de ligne BOM nécessaire, **fiche-tuto PCB à créer** avec mention spécifique. 3 patches en cascade appliqués : étape 2 H4 (production interne possible), étape 2 example (5×7 cm monoface gravé en interne), étape 5 example (PCB non commandé + remplacement par 3 condensateurs 100 nF céramique pour le découplage + chiffre ajusté ≈ 98 € HT au lieu de 122 €).
2. **Cohérence chiffrée étape 5** : ajustée automatiquement par patch 1. Désormais 98 + 21 + 95 = 214 € HT cohérent avec BOM étape 3 (213,20 €) + connecteur coudé étape 4 (+1,80 €) = 215 € HT.

### Conventions éprouvées sur dossier-technique
- **Convention 10 (matrice incarnée)** : **épreuve 3/3 réussie**, 4 contextes incarnés. Cumul total 8+ contextes (4 sur concept + 4 sur PoC + 4 sur dossier-tech). **Promotion vers § 2 envisageable** (à acter à froid).
- **Convention 11 (rythme H4)** : promotion § 6 déjà actée en suite 7. Cas inédit nouveau éprouvé sur étape 5 (2 H4 sortie matérielle, ni clôture ni économe). Pattern stable.
- **Convention 12 (Pièges a posteriori)** : **épreuve 3/3 réussie** (concept 37 %, PoC 45 %, dossier-tech 45 %). **Promotion vers § 6 envisageable**.
- **Convention 13 (relire amont)** : **1ʳᵉ épreuve formelle réussie** — aucun round 2 sur sections amont, fiche cohérente. À éprouver sur `integration-et-tests` (5ᵉ trame) avant promotion.
- **Convention 14 (seuil pratique MCP ~30 ko)** : nouvelle, acquise et capitalisée § 7.

### Nouvelles dépendances posées
- Fiche-tuto `[[pcb]]` à créer avec mention **machine de gravure à l'anglaise + monoface en interne école** (procédé spécifique projet école, pas une commande). Ajout BACKLOG.

### Décisions reportées
- Toutes celles des sessions précédentes (sauf cohérence inter-fiches concept↔PoC partiellement levée via fil rouge articulation usinée traversant les 5 étapes dossier-tech).
- Promotion C10 vers § 2 : à acter à froid.
- Promotion C12 vers § 6 : à acter à froid.
- C13 à éprouver sur `integration-et-tests`.
- Finalisation archivage 22-24/05 manuel à faire à la maison.

---

## 2026-05-25 (suite 7) — PoC : approfondissement v1 complet

### Périmètre de session
1ère session d'approfondissement de `preuve-de-concept.md` (squelette du 22/05). Calque méthodo 25/05 suite 4-5-6 sur `concept.md`. Geste de cette session : appliquer le mode d'application proposé pour la convention 6 (passe dédiée en sortie de fiche) et éprouver les conventions 10 / 11 / 12 sur la trame du V suivante. PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 4 questions tranchées en bloc (niveau C)
1. **Découpage en 5 étapes** (pas 4 du squelette) : 1) Définir / 2) Préparer / 3) Mener / 4) Analyser et trancher (pivot) / 5) Rédiger et faire valider (clôture documentaire). Rythme H4 selon convention 11 : 2/2/2/3/3.
2. **Étape pivot = 4** (Analyser et trancher), clôture documentaire = étape 5. Justification : le pivot du V se joue au moment de la décision (go / ajustement / retour amont), pas au moment de la mesure.
3. **Fil rouge local PoC = articulation 3D imprimée PLA 60 %** (incertitude locale cohérente avec le fil rouge global, pas alignement strict sur I1/I2 sortis de l'étape 4 concept). Décision tranchée : le callout exemple sert d'incarnation locale, pas de continuité narrative inter-fiches stricte. À surveiller si la cohérence inter-fiches devient un fil rouge structurant.
4. **Boucle rétroactive marge négative incarnée (α)** : la preuve articulation 3D conclut marge négative → retour amont structurant vers concept étape 3 (renégociation à 3 disciplines). Matérialisée dans `[!example]` étape 4 + closure dans `[!example]` étape 5 (revue PoC validée sous conditions après reprise concept aboutie sur articulation usinée).

### Phase 1 — Alignement v2.1 du squelette + restructuration 4→5 étapes (9 patches en batch)
Niveau B annoncé. 3× `[!example]` titre fixe « Exemple : projet bras 3 axes » ; 3× `[!livrable]` titre format « Livrable N/5 — Preuve de concept » ; 1× `[!warning]` étape 2 titre fixe Attention + phrase-clé gras ; 1× renommage étape 3 (« Mener les preuves » → « Mener les essais ») ; 1× refonte massive étape 4 originale → étape 4 (placeholder pivot avec 3 sorties + warning + example + livrable) + nouvelle étape 5 (clôture documentaire, placeholders à rédiger).

### Phase 2 — Étape 1 *Définir chaque preuve* (1 patch)
Niveau B annoncé puis niveau A demandé par l'utilisateur pour la suite. Structure 2 H4 : *D'une incertitude à un énoncé testable* / *Le triplet hypothèse / critère / protocole*. `[!warning]` Un énoncé non écrit n'est pas un énoncé. `[!tip]` Formuler le critère en miroir d'une exigence chiffrée du CdCF. `[!example]` enrichi (triplet posé + revue encadrant traçée 3 corrections demandées). 1 pitié méthodo dryRun-rattrapée (1ère tentative astérisques parasites + duplication `[!livrable]`).

**Round 2 utilisateur — 1 correction** : doublon « on a le matos, on monte, on verra ce que ça donne » présent dans Posture amont ET dans H4-1 étape 1. Patch correctif appliqué (refonte du paragraphe : 3 conséquences en miroir des 3 éléments du triplet — sans hypothèse / sans critère / sans protocole). **Leçon méthodo : extension de la leçon ±2 phrases (25/05 suite 6)** — relire les sections amont de la fiche elle-même (Posture, Objectif) avant de rédiger une section avale, même quand elles ont été rédigées en session antérieure. Convention candidate à pousser en § 7 conventions.

### Phase 3 — Étape 2 *Préparer les moyens* (1 patch, niveau A)
2 H4 économes : *Du protocole aux ressources* / *Trois sources, dans l'ordre*. `[!warning]` Pas d'achat à titre personnel (conservé). `[!tip]` Demander tôt le stock divers. `[!example]` enrichi liste à puces des 3 sources, rattachement traçable + lien rétroactif vers correction étape 1 (couple appliqué à la balance + pied à coulisse).

### Phase 4 — Étape 3 *Mener les essais par incertitude* (1 patch, niveau A)
2 H4 économes : *Monter le banc* (caractérisation préalable) / *Exécuter et tracer les mesures*. `[!warning]` Caractériser le banc avant de mesurer. `[!tip]` Noter les anomalies, pas seulement les valeurs. `[!example]` enrichi : caractérisation banc + relevés 5 points 1000 cycles montrant dépassement critère 0,5° entre 480-550 cycles (profil sur 3 articulations).

### Phase 5 — Étape 4 *Analyser et trancher* (PIVOT, 1 patch, niveau A)
3 H4 dense (convention 11 éprouvée une 2ᵉ fois) : *Confronter au critère* / *Synchroniser entre preuves* / *Statuer*. 3 sorties nominales numérotées : Validé / Ajustement local / Retour amont structurant + mises à jour amont dans la même séance ([[matrice-de-risques|matrice de risques]] + éco + matrices décision concept). `[!warning]` Une preuve non concluante n'est pas un échec. `[!tip]` Synchroniser avant de statuer. `[!example]` enrichi avec tableau de statut (incarnation α) + décision traçée retour concept étape 3 + mises à jour matrice de risques + écoconception révisée (PLA 60 % défavorable).

### Phase 6 — Étape 5 *Rédiger et faire valider* (CLÔTURE DOCUMENTAIRE, 1 patch, niveau A)
3 H4 calque concept étape 5 (convention 11 sous-règle clôture documentaire éprouvée 2/2) : *Structurer le rapport* / *Rédiger chaque section* / *Faire valider en revue PoC*. TdM type 5 sections numérotée. 4 issues nominales calque concept étape 5 (sans réserve / sous conditions / reprise locale / rétroaction amont). `[!warning]` Compiler n'est pas rédiger. `[!tip]` Faire la revue à blanc en équipe. `[!example]` avec TdM type instanciée sur cas bras 3 axes + revue PoC traçée *validé sous conditions* après reprise concept aboutie (articulation usinée).

### Phase 7 — Pièges + Équipe (1 patch)
**Pièges fréquents** : refonte 6 puces simples → 11 entrées format gras court + explication (convention 12 confirmée). **5/11 pièges issus a posteriori des étapes 3-4-5 (~45 %)**, supérieur à concept (3/8 ≈ 37 %) — indicateur que la convention 12 généralise.
**Pendant cette phase, côté équipe** : 4 paragraphes thématiques (Interfaces métiers / Gestion de projet / Écoconception / Sécurité et qualité), calque concept.

### Phase 8 — Cohérence finale d'ensemble (4 passes calque concept 25/05 suite 6, 1 batch de 3 patches)
- **Passe 1 (terminologie)** : 2 corrections (« troisième étape » → « troisième phase » intro ; typo « enchâine » → « enchaîne » étape 3).
- **Passe 2 (fil rouge bras 3 axes)** : 1 correction (« section 5 du dossier concept » ambigu en étape 5 → « bilan écoconception du dossier concept »).
- **Passe 3 (ponts inter-étapes)** : 0 patch. Pattern stylistique déjà internalisé (annonces aval N→N+1 portées par intro étape suivante, calque concept).
- **Passe 4 (wiki-links / popovers)** : 0 patch. **Résultat majeur** : la convention 6 a été appliquée correctement au fil de la rédaction sur PoC (vs 74 % des patches concentrés en passe finale sur concept). Audit final n'a révélé aucun oubli significatif. **Confirme partiellement** la leçon méthodo 25/05 suite 6 : la convention 6 est applicable au fil quand on a la discipline acquise, la passe dédiée devient plutôt un filet de sécurité.

### Phase 9 — Round 2 utilisateur sur les wiki-links
Demande utilisateur niveau A : ajouter wiki-links sur 4 outils tuto (multimètre, oscilloscope, alimentation stabilisée, Arduino) et 2 instruments notion (pied à coulisse, comparateur). 6 nouvelles cibles de wiki-links posées (1 batch de 7 patches sur 6 contextes : étape 2 H4-1, étape 2 H4-2, étape 2 example, étape 3 warning, étape 3 example, étape 5 example). Convention 6 (1ère occurrence par contexte) respectée.

**Correction factuelle process fablab** : reformulation étape 2 H4-2 et example pour refléter la réalité école — l'équipe ne reçoit pas de filament en propre, elle transmet des fichiers STL au responsable fablab impression 3D qui prend en charge l'impression. Information de cadrage importante pour la PoC, transposable à d'autres fiches mentionnant l'impression 3D à surveiller.

**Mini-patch final** : disjonction `[[microcontroleur|microcontrôleurs]]` et `[[arduino|Arduino]]` dans l'énumération Stock standard (après remarque utilisateur). **Plan long terme à matérialiser** : la fiche `microcontroleur` deviendra une page d'aiguillage vers tutoriels par famille (STM32, ESP32, MicroPython, Arduino, Teensy, etc.). Poussé au BACKLOG.

### État de `preuve-de-concept.md` en fin de session
- Démarche complète : 5 étapes rédigées et alignées sur les 4 dimensions auditées.
- Sections transverses : *Pièges fréquents* (11 entrées) et *Pendant cette phase, côté équipe* (4 paragraphes thématiques) rédigées.
- Front matter + Posture + Objectif + Conclusion + Voir aussi : posés et alignés.
- Wiki-links : 6 nouvelles cibles ajoutées au réseau (multimetre / oscilloscope / alimentation-stabilisee / arduino / pied-a-coulisse / comparateur).
- **Fiche complète et alignée v2.1. Phase 3 du cycle en V close.**

### Leçons méthodo de la session
- **Leçon 1 (extension leçon ±2 phrases du 25/05 suite 6)** : relire les sections amont de la fiche (Posture, Objectif) avant de rédiger une section avale, même quand elles ont été rédigées en session antérieure. Coût 1 round 2 sur PoC étape 1. Convention candidate → `conventions.md` § 7.
- **Leçon 2 (confirmation partielle du 25/05 suite 6)** : la convention 6 (wiki-link 1ère occurrence par section/sous-section/callout) s'applique correctement au fil quand la discipline est acquise. Sur PoC, 0 patch en passe finale (vs 74 % sur concept). La passe dédiée en sortie de fiche devient un filet de sécurité, pas le mode principal d'application.
- **Leçon 3 (généralité convention 12)** : la section *Pièges fréquents* se nourrit a posteriori des étapes aval à ~45 % sur PoC (5/11), supérieur au ratio concept (3/8). Convention 12 confirmée, promotion possible vers § 6.

### État des conventions à éprouver — sortie session
- **Convention 6** (wiki-link 1ère occurrence par contexte) : confirmée en audit final exhaustif PoC. Mode d'application affiné (au fil + filet passe dédiée). MAJ note méthodo dans `conventions.md` § 7.
- **Convention 10** (matrice incarnée dans `[!example]`) : éprouvée sur **4 contextes PoC** (liste à puces 3 sources étape 2, relevés 5 points étape 3, tableau de statut étape 4, TdM type instanciée étape 5). Indicateur de généralité renforcé. Promotion possible vers § 2 si confirmée sur dossier-technique.
- **Convention 11** (rythme H4 selon densité d'étape) : éprouvée 2/2 trames consécutives (concept + PoC). Règle tripartite validée : pivot → 3 H4 / hors pivot non-clôture → 2 H4 / clôture documentaire → 3 H4 calque. **Promotion proposée** vers `conventions.md` § 6 (Structure des fiches-trame).
- **Convention 12** (Pièges nourris a posteriori) : confirmée (~45 % sur PoC vs ~37 % sur concept). Promotion possible vers § 6 si confirmée sur dossier-technique.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Cohérence inter-fiches concept ↔ PoC** : la rétroaction marge négative incarnée dans PoC étape 4 renvoie vers concept étape 3, et la rétroaction articulation usinée revient dans PoC étape 5. Ces ponts sont posés côté PoC mais pas instanciés côté concept (l'`[!example]` concept étape 3 connaissait déjà ses 2 conflits propres). Question reportée à une session dédiée « cohérence inter-fiches » après rendu 2-3 trames supplémentaires.
- **`microcontroleur` page d'aiguillage par famille** : posé au BACKLOG. À décider quand on tackle la fiche notion.
- **6 nouvelles fiches notion/tuto au réseau** (multimetre, oscilloscope, alimentation-stabilisee, arduino, pied-a-coulisse, comparateur) : poussées au BACKLOG.
- **Prochaine session** : objectif à discuter en début de session suivante (cf. propositions ci-dessous).

---

## 2026-05-25 (suite 6) — Concept : cohérence finale d'ensemble (4 passes de relecture critique)

### Périmètre de session
Session de clôture phase 2 sur `concept.md`. Démarche complète rédigée (5 étapes + Pièges 8 entrées + Équipe 4 paragraphes, faits 25/05 suite 4 et suite 5). Geste de cette session : relecture critique progressive de l'ensemble sur 4 dimensions, calque méthodo 24/05 suite 2 sur spec-tech (11 patches en 3 passes successives auto-critiques). Session courte attendue, **résultat 27 patches** sur les 4 passes — plus volumineux que prévu en raison de la passe 4 (wiki-links) qui concentre 20 patches. PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 3 arbitrages tranchés en bloc (niveau C)
1. **Ordre des 4 passes** : terminologie → fil rouge → ponts inter-étapes → wiki-links. Justification : terminologie mécanique (grep) dégage le bruit avant les passes sémantiques ; le fil rouge nourrit la décision FC démontabilité qui peut créer des ponts à ajuster ; les wiki-links arrivent en dernier sur texte stabilisé.
2. **Seuil d'arrêt** : 1 passe sans nouvel écart par dimension, max 2 passes par dimension. Plus strict que spec-tech 24/05 suite 2 (qui a tourné jusqu'à 3 passes), parce que `concept.md` a déjà bénéficié de 5 round 2 sans correction.
3. **Profondeur audit wiki-links** : exhaustif sur les 5 étapes (et pas Pièges/Équipe/Conclusion qui ont leur propre logique). Audit ciblé mais complet.

### Passe 1 — Terminologie (5 + 1 = 6 patches)
Grep sur les 6 termes du brief : pas de « point dur », pas de « dérisquer », pas de « soutenance intermédiaire », pas d'extension `.md`, `incertitude(s)` employé au bon endroit partout, `semaine n°X` cohérent (n°5 revue de concept, n°6 engagement PoC).

**5 écarts initiaux** :
1. Posture : « Cette **étape** ne demande pas… » → « Cette **phase** » (désigne la phase concept entière)
2. Posture : « la première **étape** où l'écoconception devient un critère » → « première **phase** »
3. Section Équipe / Écoconception : « Le concept est l'**étape** où l'écoconception devient un critère d'arbitrage » → « la **phase** »
4. Étape 5 intro : « elle **agrège** » → verbe isolé en gras (conflit convention 25/05) → « elle **agrège les quatre livrables précédents** »
5. Étape 5 H4-3 : « La revue **valide** le dossier » → verbe isolé en gras → « La revue **valide sans réserve** » (homogénéise les 4 issues nominales : sans réserve / sous conditions / demande une reprise / rétroaction CdCF)

**1 patch correctif effet de bord** : le patch 4 (« agrège les quatre livrables précédents ») a introduit un doublon avec la phrase suivante (« Les quatre livrables précédents… sont assemblés… »). Correction par fusion des 2 phrases : « elle agrège les quatre livrables précédents (décomposition, matrices, architecture, pré-dim et incertitudes) dans un dossier concept unique ».

### Passe 2 — Fil rouge bras 3 axes (1 patch)
Reconstitution de la chaîne d'éléments instanciés étape par étape. Chaînage propre vérifié sur 4 axes (solutions stepper+driver retenues étape 2 → reprises étape 3 → mesurées étape 4 → consolidées étape 5 ; I1/I2 étape 4 rattachées F0/F1 → reprises section 5 dossier étape 5 ; compromis offset court étape 3 → architecture étape 5 ; 2 conflits étape 3 → tableau conflits arbitrés étape 5).

**Point A — FC démontabilité (point du brief)** : l'étape 5 mentionnait « ajout d'une FC liée à la démontabilité (rétroaction CdCF signalée et tracée en cours de phase) », mais l'étape 1 ne l'instanciait pas (le `[!warning]` reste générique, l'`[!example]` étape 1 ne racontait aucune rétroaction). Option (a) retenue : instanciation rétroactive dans l'`[!example]` étape 1, paragraphe ajouté (~4 lignes) : « Pendant cette décomposition, l'équipe identifie qu'aucune fonction de service du CdCF ne porte explicitement le remplacement d'un moteur en cas de panne… une FC liée à la démontabilité est ajoutée au CdCF avec son numéro de version mis à jour. » Wiki-links re-déclenchés selon convention 6 ([[cahier-des-charges-fonctionnel|CdCF]] et [[FC]]). Cohérence narrative 1→5 désormais propre.

**Point B — réserve étape 2 → étape 3 vs annonce étape 4 (mineur)** : l'`[!example]` étape 2 dit « réserve à lever à l'étape 4 sur la consommation au maintien » mais l'étape 3 débloque concrètement via le compromis lookup table. Inconsistance narrative ténue, lecture continue tient. Laissé tel quel.

### Passe 3 — Ponts inter-étapes (0 patch)
Vérification des renvois explicites dans les deux sens (annonce N→N+1 et référence N+1→N). Tous les ponts amont OK (étape 3 → étape 2 matrices d'origine ; étape 4 → étape 3 retour si marge négative ; étape 5 → étapes 1-4 agrégation ; Conclusion → preuve de concept).

**Pattern stylistique stable détecté** : les annonces aval N→N+1 sont systématiquement portées par l'**intro de l'étape suivante**, jamais par la sortie de l'étape courante. Cohérent sur les 4 transitions. Choix de fluidité narrative défendable.

**Saut étape 3→5** (sortie étape 3 mentionne étape 5 « le dossier concept rédigé à l'étape 5 pourra s'appuyer sur cette traçabilité ») : déroge légèrement au pattern mais sémantiquement justifié (la traçabilité des matrices d'origine sert effectivement la section 3 du dossier étape 5). Option (a) retenue, laissé tel quel.

### Passe 4 — Wiki-links / popovers (20 patches en batch)
Audit exhaustif strict (option α) de la convention 6 (wiki-link à la 1ère occurrence par section/sous-section/callout). Profondeur sur les 5 étapes uniquement.

**1 doublon détecté** : étape 2 H4 « Construire la matrice et arbitrer » → `[[ecoconception|écoconception]]` wiki-linkée 3 fois dans le même H4 (1 puce critère + 2 paragraphes suivants). Wiki-links 2 et 3 retirés.

**19 oublis détectés** (1ère occurrence dans nouveau contexte sans wiki-link) :
- `[!warning]` étape 1 H4-1 : [[cahier-des-charges-fonctionnel|CdCF]]
- `[!example]` étape 1 ¶2 : [[fast|FAST]]
- Étape 2 H4-2 puce Encombrement : [[pieuvre]] + [[cahier-des-charges-fonctionnel|CdCF]]
- `[!example]` étape 2 tableau : [[ecoconception|Écoconception]]
- Étape 3 H4-3 levier 1 : [[matrice-de-decision|matrice de décision]]
- Étape 3 H4-3 levier 3 : [[cahier-des-charges-fonctionnel|CdCF]]
- `[!example]` étape 3 : [[usinage]] + [[impression-3d|impression 3D]]
- `[!warning]` étape 4 : [[preuve-de-concept|preuve de concept]]
- `[!tip]` étape 4 : [[preuve-de-concept|preuve de concept]]
- `[!example]` étape 4 : [[cahier-des-charges-fonctionnel|CdCF]]
- Étape 5 intro : [[specification-technique|spécification technique]]
- Étape 5 H4-2 « Rédiger » : [[cahier-des-charges-fonctionnel|CdCF]]
- Étape 5 H4-3 « Faire valider » : [[preuve-de-concept|preuve de concept]]
- `[!example]` étape 5 : [[cahier-des-charges-fonctionnel|CdCF]], [[FC]], [[fast|FAST]], [[ecoconception|écoconception]], [[schema-bloc-fonctionnel|schéma bloc]], [[preuve-de-concept|preuve de concept]]

20 patches passés en un seul appel `filesystem:edit_file` (array d'edits, méthodo calque 25/05 suite 4). Diff propre.

Cohérence aliases FP/FS/FC vérifiée : FC wiki-linké à 4 endroits (warning étape 1, puce étape 2 H4-2, `[!example]` étape 1 par patch passe 2, `[!example]` étape 5 par patch passe 4), FP wiki-linké 1 fois (warning étape 1), FS jamais mentionné. Aucun écart sur cet axe.

### Round 2 utilisateur — validé sans correction
6ᵉ round 2 successif validé sans correction sur `concept.md` depuis le 25/05 suite 4 (étapes 1+2 / étape 3 / étape 4 / étape 5 / Pièges+Équipe / cohérence finale 4 passes). Pattern de régularité maintenu. Signal renforcé : les conventions sont désormais internalisées dans la rédaction, mais la convention 6 fait exception (cf. leçon méthodo ci-dessous).

### Leçon méthodo 1 — relire ±2 phrases avant de proposer une reformulation
Le patch 4 de la passe 1 (verbe isolé « agrège » → morceau de phrase « agrège les quatre livrables précédents ») a introduit un doublon stylistique avec la phrase suivante (« Les quatre livrables précédents sont assemblés… »). Cause : reformulation proposée sans relecture du contexte aval. Discipline acquise : pour tout patch de gras / reformulation, lire ±2 phrases avant de figer la proposition. Coût : 1 patch correctif supplémentaire. Surface d'application : toutes les passes de relecture critique où Claude propose une reformulation locale.

### Leçon méthodo 2 — convention 6 plus efficace en passe dédiée qu'en continu
La passe 4 a généré 20 patches sur 27 de la session (74 %). Signal fort : la convention 6 (wiki-link à la 1ère occurrence par section/sous-section/callout) n'avait pas été appliquée stricte au fur et à mesure de la rédaction des étapes 1-5 (faits 25/05 suite 4 et suite 5), alors qu'elle est en éprouvage depuis 25/05 suite. Hypothèse : la convention 6 demande une vigilance constante difficile à tenir en continu pendant la production de fond, mais s'applique très efficacement en **passe dédiée en sortie de fiche** (20 patches en batch en une passe, audit exhaustif tenable). Mode d'application proposé : ne pas chercher à appliquer la convention 6 au fil de la rédaction ; faire une passe wiki-links systématique en sortie de fiche. À confirmer sur `preuve-de-concept` : si le ratio passe wiki-links / total reste similaire (~70-80 %), formaliser la convention dans `conventions.md` § 7 avec mode d'application explicite. MAJ légère effectuée ce jour sur convention 6.

### État de `concept.md` en fin de session
- Démarche complète : 5 étapes rédigées et alignées sur les 4 dimensions auditées.
- Sections transverses : *Pièges fréquents* (8 entrées) et *Pendant cette phase, côté équipe* (4 paragraphes thématiques) rédigées et cohérentes.
- Front matter + Posture + Objectif + Conclusion + Voir aussi : posés et alignés.
- Wiki-links : audit exhaustif convention 6 appliqué, 1 doublon + 19 oublis corrigés.
- **Fiche complète et alignée v2.1. Phase 2 du cycle en V close.**

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Prochaine session** posée : approfondissement de `preuve-de-concept` (fiche-trame phase 3 du V, point pivot du V, squelette fait 22/05). À chaque approfondissement, appliquer le mode d'application proposé pour la convention 6 (passe dédiée en sortie).
- **Conventions 10 et 11 affinées** à éprouver sur preuve-de-concept et dossier-technique pour confirmation avant promotion vers les sections fixes du fichier `conventions.md`.
- **Cohérence inter-fiches (spec-tech ↔ concept)** : hors champ pour cette session (annoncé brief). Vérification à conduire ultérieurement, possible session dédiée si désynchros détectées.

---

## 2026-05-25 (suite 5) — Concept : approfondissement étapes 3-4-5 + Pièges + Équipe

### Périmètre de session
Approfondissement des 3 étapes restantes de `concept.md` (étapes 1-2 + alignement v2.1 faits 25/05 suite 4), puis refonte des sections *Pièges fréquents* et *Pendant cette phase, côté équipe*. Cohérence finale d'ensemble (relecture progressive des 5 étapes) reportée à session dédiée selon le découpage acquis 24/05 suite 2 (geste de relecture critique = tête reposée). PC perso, préfixe MCP `filesystem:*`.

### Cadrage étape 3 — 3 questions tranchées (niveau C)
1. **Intitulés des 3 H4** : *Confronter les solutions retenues* / *Caractériser les conflits inter-disciplines* / *Renégocier sans tout casser*. Reformulation de H4-2 par rapport au cadrage initial (*Identifier et arbitrer* → *Caractériser*) : l'identification est mécaniquement induite par H4-1, l'arbitrage est porté par H4-3, H4-2 sert spécifiquement à qualifier (nature / périmètre / opposabilité CdCF).
2. **Convention 10 (matrice incarnée) sur étape 3** : oui, sous forme de **tableau de conflits identifiés** (1 ligne = 1 conflit, colonnes : sous-systèmes impactés / nature / opposabilité CdCF) plutôt qu'une matrice 3×3 (élégante en apparence mais artificielle si peu de conflits réels — beaucoup de cellules vides ou symétriques). Scalable, narratif, et reste opposable.
3. **Profondeur du fil rouge bras 3 axes** : option B — cas développé en sortie d'étape (1 `[!example]` riche), aligné sur la convention « 1 `[!example]` par étape ». Micro-allusions au fil rouge possibles dans le corps des H4 mais récit principal concentré dans le `[!example]`.

### Production étape 3 (pivot dense) — 4 patches en batch
Niveau B. Structure : intro 2 paragraphes (pont depuis étape 2, annonce 3 temps, positionnement comme **pivot de la phase concept**) + 3 H4 :
- **Confronter les solutions retenues** — sortir des branches, parcourir les interfaces deux à deux (élec↔méca, élec↔info, méca↔info), rendre visibles les frictions sans trancher.
- **Caractériser les conflits inter-disciplines** — 3 axes de qualification (nature / périmètre / opposabilité CdCF) en liste numérotée (convention 4), sortie = tableau récapitulatif hiérarchisé.
- **Renégocier sans tout casser** — à toutes les disciplines impactées simultanément (jamais en bilatéral), 3 leviers ordonnés du moins au plus coûteux (revoir arbitrage local / modifier décomposition / assouplir exigence CdCF), anti-pattern « branche la plus avancée impose son arbitrage ».

Callouts : `[!warning]` Attention légèrement retouché pour éviter doublon avec l'intro (« moment pédagogique central » → « moment où l'équipe apprend ce qu'arbitrer veut dire ») + `[!tip]` Astuce nouveau (convocation à trois plutôt qu'en bilatéral) + `[!example]` enrichi avec tableau de conflits 4 colonnes × 2 lignes (Conflit / Sous-systèmes impactés / Nature / Opposabilité CdCF) + déroulé renégociation à trois sur conflit n°1 (méca articulations à axe unique ↔ info cinématique inverse à offset) avec 3 voies explorées et compromis retenu (offset court côté méca + lookup table côté info). Conflit n°2 retombe en partie par effet collatéral. `[!livrable]` enrichi d'une ligne sur le tableau des conflits arbitrés.

Round 2 validé sans correction.

### Production étape 4 (hors pivot) — niveau B, annonce + batch de 2 patches
Structure : intro 2 paragraphes (pont depuis étape 3, annonce 2 temps, distinction nette pré-dim ≠ dimensionnement définitif qui vient en dossier technique) + 2 H4 économes (éprouve convention 11 stricte) :
- **Pré-dimensionner par discipline** — grandeurs critiques par discipline (méca : couples/efforts/flèches ; élec : courants/tensions/dissipation ; info : ressources/latences), sortie uniforme (valeur calculée / valeur de spec / marge), seuils 30 %/10 %/négative qui orientent vers OK / incertitude / retour étape 3.
- **Identifier les incertitudes à lever en preuve de concept** — 4 catégories typiques (marge serrée à la limite du calcul / phénomène mal modélisé / couplage inter-disciplines / hypothèse d'usage non validée) en liste numérotée, sortie comme **liste de questions** rattachées au CdCF.

Callouts : `[!warning]` « Une marge serrée n'est pas une marge, c'est une incertitude » + `[!tip]` formuler chaque incertitude en question (test pratique : ça se teste ou non) + `[!example]` avec **tableau de pré-dim 6 colonnes × 5 lignes** sur la *mobilité articulaire* (verdicts : 2 OK, 2 marges serrées, 1 incertitude) + I1 et I2 formulées en question, rattachées à F0 et F1, avec protocole d'essai esquissé. Livrables existants conservés.

Round 2 validé sans correction.

### Cadrage étape 5 — 3 questions tranchées (niveau C léger)
1. **Structure 3 H4** — par analogie spec-tech étape 6 (Structurer / Rédiger / Faire valider). **Exception assumée à la convention 11 pour les étapes de clôture documentaire** — réformulation : « 2 H4 hors pivot, sauf clôture documentaire qui suit son propre miroir de spec-tech étape 6 ». Intitulés : *Structurer le dossier concept* / *Rédiger chaque section* / *Faire valider en revue de concept* (calque lexical de « revue de CdCF »).
2. **Convention 10 sur étape 5** : oui, sous forme de **TdM incarnée du dossier concept** dans l'`[!example]`, calque de la TdM CdCF de spec-tech étape 6 — 5 sections agrégeant les 5 livrables des étapes 1-4 dans l'ordre. Convention 10 éprouvée dans son 4ᵉ contexte au sein de concept (matrice décision / tableau de conflits / tableau de pré-dim / TdM).
3. **Template Word concept** : **non**, pas maintenant. Argument contre : le dossier concept agrège des productions hétérogènes (décomposition + matrices + architecture + pré-dim + incertitudes) là où le CdCF était plus normé. Un template Word figerait un format avant d'avoir du recul. Possibilité ouverte ultérieurement, pas en session.

### Production étape 5 (clôture documentaire) — niveau B, batch de 3 patches
Structure : intro 2 paragraphes (« l'étape 5 ne produit rien de nouveau, elle agrège » + équivalence directe avec rédaction du CdCF en fin de spec-tech) + 3 H4 :
- **Structurer le dossier concept** — narration *quoi → comment → ensemble → chiffrage → ce qui reste* + **TdM type 5 sections** en liste numérotée (Présentation et contexte / Décomposition fonctionnelle / Arbitrages disciplinaires / Architecture globale / Pré-dim et incertitudes) + mention section *Annexes* optionnelle.
- **Rédiger chaque section** — 3 soins (forme / cohérence inter-sections / traçabilité jusqu'au CdCF) avec mention explicite de la documentation des rétroactions CdCF intervenues en cours de phase (ne pas masquer).
- **Faire valider en revue de concept** — nature du jalon (équivalent go/no-go d'architecture) + préparation + **4 issues** (validé / validé sous conditions / reprise locale étape 3-4 / rétroaction vers spec-tech).

Callouts : `[!warning]` « Compiler n'est pas rédiger » + `[!tip]` revue à blanc en équipe avant le jour J + `[!example]` avec TdM type instanciée sur les 5 sections du dossier bras 3 axes (rappel rétroaction CdCF étape 1 = ajout FC démontabilité, 3 sous-systèmes, matrices, schéma bloc avec offset court, 2 incertitudes I1/I2 rattachées F0/F1) + issue de revue tracée (« validé sous conditions » + 2 compléments demandés) + engagement preuve de concept en semaine n°6. Livrable enrichi avec mention 5 sections + traçabilité CdCF + issue tracée.

Round 2 validé sans correction.

### Pièges fréquents — refonte 5 puces → 8 entrées gras court + explication
Niveau B sur le calque spec-tech 24/05 partie 1. Les 5 pièges existants reformulés au format **« Piège court. » + 1-2 phrases d'explication** (Choisir les composants définitifs trop tôt / Laisser chaque discipline finir sa matrice avant de confronter / Traiter l'écoconception comme une case à cocher / Confondre front de travail et répartition des rôles / Sauter le pré-dim). **3 nouveaux pièges émergés spontanément des étapes 3-4-5** : Renégocier en bilatéral (étape 3) / Habiller une marge serrée en certitude par un calcul plus fin (étape 4) / Compiler le dossier au lieu de le rédiger (étape 5). Total : 8 pièges. **Leçon méthodo** : la section *Pièges* se nourrit a posteriori des leçons rédactionnelles des étapes (3 pièges sur 8 émergés pendant la rédaction), pas a priori d'une checklist méthodo. Mode complémentaire à spec-tech 23/05 suite 2 (pièges identifiés en relecture critique) — les deux modes coexistent.

### Pendant cette phase, côté équipe — 4 paragraphes thématiques
Niveau B sur le calque spec-tech 24/05 partie 1. **Interfaces métiers** — méca, fabrication, info, mobilisation des cours collègues, dialogue calé en amont de la phase. **Gestion de projet** — arbitrages d'architecture comme décisions structurantes (mise à jour matrice de risques et rétroplanning), incertitudes étape 4 comme commande de la PoC, revue de concept inscrite au rétroplanning dès spec-tech, autorisation des chevauchements temporels mais pas dans l'ordre des livrables. **Écoconception** — graines réparties étapes 2-3-4-5, agrégées par le dossier concept. **Sécurité-qualité** — exigences réglementaires CE/RoHS/REACH/DEEE traduites en contraintes d'arbitrage dès la matrice de l'étape 2 (éliminer en amont, pas en fin de course). Wiki-links semerés en lien rouge sur les notions normatives (rohs, reach, deee) et procédés (usinage, impression-3d, soudure) — déjà inventoriés au TODO.

Round 2 validé sans correction.

### 5 round 2 successifs sans correction — signal méthodo
Les 5 étapes (étapes 1+2 du 25/05 suite 4, puis étapes 3+4+5 + Pièges + Équipe ce jour) ont toutes été validées en round 2 sans correction. Au-delà de l'indicateur « les conventions sont internalisées » déjà noté au 25/05 suite 4, signal renforcé : la régularité tient sur 5 étapes consécutives avec deux types d'étape (pivot vs hors pivot) et deux sections transverses (Pièges et Équipe). Discipline à maintenir : ne pas relâcher la rigueur du round 2 sous prétexte de régularité (l'absence de correction ne dispense pas de la relecture).

### Convention 10 — 4 contextes éprouvés au sein de concept
1. Matrice décision 3×5 + scores pondérés (étape 2, 25/05 suite 4) — forme matricielle classique.
2. Tableau de conflits 4×2 (étape 3) — forme narrative, scalable.
3. Tableau de pré-dim 6×5 (étape 4) — densité supérieure, point de vigilance mobile.
4. TdM type 5 sections + TdM instanciée (étape 5) — forme listée plutôt que tabulaire.

Quatre formes différentes du même pattern (« incarner par un objet structuré dans l'`[!example]` »). Indicateur de généralité solide. Convention 10 promotionnable de la section *En cours d'éprouvage* vers la section 2 (Mise en forme — Callouts) lors d'une session ultérieure si confirmée sur preuve-de-concept et au-delà. Pour l'instant, MAJ de l'entrée « En cours d'éprouvage » pour acter les 4 contextes.

### Convention 11 — affinée avec exception clôture documentaire
Formulation initiale : « 2 H4 hors pivot » (validation étapes 1 et 2). Étape 3 (pivot) conforme : 3 H4 dense. Étape 4 (hors pivot) conforme : 2 H4 économes. Étape 5 (hors pivot) ne suit pas la formulation initiale : 3 H4 par analogie spec-tech étape 6 (également clôture documentaire).

Reformulation : **2 H4 hors pivot, sauf clôture documentaire qui suit son propre miroir** (3 H4 calque Structurer / Rédiger / Faire valider). Le critère d'application est donc tripartite : pivot → 3 H4 dense ; hors pivot non-clôture → 2 H4 économes ; clôture documentaire → 3 H4 calque structurel. À éprouver sur preuve-de-concept et dossier-technique étape 5 (probable clôture documentaire similaire). Convention reformulée poussée dans `conventions.md` § 7.

### Leçon méthodo — nourriture a posteriori de la section *Pièges*
Les 3 nouveaux pièges du concept (Renégocier en bilatéral / Marge serrée habillée / Compiler au lieu de rédiger) ont émergé spontanément pendant la rédaction des étapes 3-4-5 (warning / tip / warning respectivement). Indicateur : la section *Pièges* d'une fiche-trame n'a pas vocation à être rempli a priori comme une checklist méthodo — elle se nourrit a posteriori des arbitrages rendus visibles par la rédaction des étapes. Mode complémentaire à celui de spec-tech 23/05 suite 2 (4 pièges identifiés en relecture critique à froid). Les deux modes coexistent : un « grand nettoyage » en fin de phase (relecture critique) + un « dépôt continu » en cours de rédaction (warnings/tips qui se transforment en pièges). Convention possible à dériver si pattern confirmé sur preuve-de-concept.

### État de `concept.md` en fin de session
- Démarche complète : 5 étapes rédigées (1+2 économes, 3 pivot dense, 4 économe, 5 clôture documentaire 3 H4).
- Sections transverses : *Pièges fréquents* (8 entrées) et *Pendant cette phase, côté équipe* (4 paragraphes thématiques) rédigées.
- Front matter + Posture + Objectif + Conclusion + Voir aussi : posés depuis le 22/05 ou les sessions intermédiaires.
- **Reste pour clôturer la fiche** : cohérence finale d'ensemble (relecture progressive des 5 étapes + recoupements terminologiques + vérification fil rouge entre étapes + alignement des wiki-links). Geste de relecture critique à part entière — session dédiée courte selon le découpage acquis 24/05 suite 2.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Cohérence finale concept** — prochain enchainement proposé, session courte.
- **Conventions 10 et 11 affinées** à éprouver sur preuve-de-concept et dossier-technique pour confirmation avant promotion vers les sections fixes du fichier `conventions.md`.
- **Rétroaction CdCF de l'étape 1** (ajout FC démontabilité instancié dans l'`[!example]` étape 5) : exemple placé dans la trame concept, pas à propager rétroactivement dans spec-tech. À surveiller : si l'exemple devient un fil de cohérence inter-trames, préparer une note au CdCF d'origine en spec-tech à l'occasion d'un approfondissement.

---

<!-- Sessions antérieures au 25/05 suite 5 déplacées dans `JOURNAL-archive.md` lors des nettoyages documentaires successifs : 25/05 suite 3 (sessions 19→21/05 + 24/05 suite 2), 26/05 suite (sessions 22/05 → 24/05 suite) et 26/05 suite 4 (sessions 25/05 → 25/05 suite 4). -->
