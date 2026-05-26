# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables.
> Section « Fait » : 3 dernières sessions seulement (rotation glissante en fin de session, suppression auto session N-3). Historique complet dans `JOURNAL.md`.

## Prochaines sessions (ordre logique)

> **➜ Prochaine session = cartographie AA** sur les 107 acquis de `Compétences.xlsx` (rangé dans `_drafts/referentiel/`, également uploadé dans Project files Claude.ai pour accès `/mnt/project/`). **3 questions méthodo à trancher en début de session** : (1) format de cartographie — champ `aa: [...]` dans front matter (C9, jamais rempli) / table centralisée dans `hub/index.md` / les deux ; (2) granularité — un AA effleuré compte-t-il comme couvert ou faut-il un seuil (fiche dédiée OU section dédiée) ; (3) ordre — par domaine du référentiel (EEE → MIA → MEO → PROJ → MME → ESE) ou par fiche existante (lecture en aveugle puis recoupement). Mode niveau C jusqu'à conventions stabilisées sur 2-3 fiches, puis B sur l'exécution répétitive. **OU** ouverture d'une fiche-notion prioritaire (PCB / AMDEC / caractériser-une-exigence). Phase 1 du wiki désormais complète côté trames du V (5/5) + fils transverses (3/3). **Actes à froid à conduire** : promotion C1–C6 vers § 1-2 conventions (épreuve 3/3 réussie sur les 3 transverses) + amendement C14 leçon EPERM Windows + capitalisation pattern MARKER + N segments.

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
- [ ] **Session de cartographie AA** : passe systématique sur `Compétences.xlsx`, rattacher chaque AA à une phase ou un fil transverse. Identifier les trous.
- [ ] **Session de validation cohérence d'ensemble** : relecture bout en bout, ajustements de périmètre entre phases.
- [x] ~~**Approfondissement des fiches phases du V**~~ : `concept.md` complet (25/05 suite 4-6, 27 patches). `preuve-de-concept.md` complet (25/05 suite 7, 5 étapes + 11 pièges + 4 ¶ équipe + 4 passes cohérence + round 2 wiki-links outils). `dossier-technique.md` complet (25/05 suite 8, alignement v2.1 + 5 étapes [étape 3 pré-rédigée autre Claude] + 11 pièges + 4 ¶ équipe + 0 patch cohérence + round 2 PCB). `integration-et-tests.md` complet (26/05, 27 patches : alignement v2.1 + 5 étapes voie C [2/3/3/2/2 H4 dont 3 H4 disciplinaires étape 2 et 3 H4 pyramide compressée étape 3] + 11 pièges + 4 ¶ équipe + 3 patches cohérence + round 2 validé). **Phase 1 du wiki = complète côté trames du V.**

*Notions à produire en parallèle (popovers posés dès les squelettes)* :
- [ ] **`pcb`** (fiche-tuto, popover posé dans `dossier-technique.md` étapes 2/4/5). Mention spécifique à inclure : **machine de gravure à l'anglaise** en interne école pour PCB monoface (pas de commande externe pour ce cas), routage logiciel + transfert physique. Distinguer PCB monoface interne / PCB double face externe (JLCPCB ou équivalent).
- [ ] `decomposition-fonctionnelle` (popover posé dans `concept.md` étape 1)
- [ ] **`caracteriser-une-exigence`** (fiche-tuto **prioritaire**, front matter `aliases: [critere, niveau, flexibilite]`). Triplet + triptyque mauvais/moyen/bon (pattern `bete-a-cornes.md`) + échelle F0/F1/F2/F3.
- [ ] **`unite-si`** (fiche-notion, popover posé étape 4 du 23/05 suite 2). Convention typographique unités SI.
- [ ] **`etat-de-l-art-technique`** (tuto, popover posé étape 2)
- [ ] **`bom`** (tuto, popover posé étape 2)
- [ ] **`mind-map`** (notion, popover posé étape 3)
- [ ] **`fast`** (tuto, popover posé étape 3 — à créer en phase 2 concept)
- [ ] **`microcontroleur`** (fiche-notion, acronyme **MCU** en alias)
- [ ] **`pla`** (fiche-notion matériau)
- [ ] **`abs`** (fiche-notion matériau)
- [ ] **`rohs`** (fiche-notion norme environnementale)
- [ ] **`reach`** (fiche-notion norme environnementale)
- [ ] **`deee`** (fiche-notion norme environnementale)
- [ ] **`usinage`** (fiche-tuto procédé — délégué cours collègues)
- [ ] **`impression-3d`** (fiche-tuto procédé — délégué cours collègues)
- [ ] **`soudure`** (fiche-tuto procédé — délégué cours collègues)
- [ ] **`matrice-eat`** (fiche-tuto, outil canonique trame `ecoconception`, doublement prioritaire)
- [ ] **`acv-simplifiee`** (fiche-notion, citée + déléguée)

### 3. Templates à rédiger
- [ ] **Template fiche-tuto** dans `templates/fiche-tuto.md` — reste à produire. Modèle potentiel : `schema-bloc-fonctionnel.md`. À traiter quand on aura une 2ᵉ fiche-tuto pour stabiliser les conventions.

## Décisions à valider avec la hiérarchie
- [ ] Convention de tags AA (granularité, syntaxe)
- [ ] Niveau d'écart accepté entre référentiel et contenu produit (peut-on aller au-delà ?)
- [ ] Couleurs / charte graphique : faut-il aligner sur la charte école ?

## Tâches techniques en suspens

### Rattrapage commits + pushs en retard
- [ ] **Rattrapage commits + pushs en retard depuis 19/05** — voir `JOURNAL.md` pour le détail session par session (sessions 19/05 → 25/05 suite 2 non encore committées au moment du palier 3 du nettoyage documentaire). Les paliers 1-2 du nettoyage (25/05 suite 3) ont été committés avant le palier 3.
- [ ] **Commit + push de la session du 25/05 (suite 3)** (paliers 3-6 du nettoyage documentaire) — à faire en fin de session.
- [ ] **Commit + push de la session du 25/05 (suite 4)** (approfondissement concept étapes 1-2 + alignement v2.1 + MAJ doc).
- [ ] **Commit + push de la session du 25/05 (suite 5)** (approfondissement concept étapes 3-4-5 + Pièges + Équipe + MAJ doc).
- [ ] **Commit + push de la session du 25/05 (suite 6)** (cohérence finale concept — 4 passes / 27 patches + MAJ doc).
- [ ] **Commit + push de la session du 25/05 (suite 7)** (approfondissement preuve-de-concept v1 complet — 5 étapes + Pièges + Équipe + cohérence finale + round 2 wiki-links + MAJ doc).
- [ ] **Commit + push de la session du 25/05 (suite 8)** (approfondissement dossier-technique complet — alignement v2.1 + 5 étapes [étape 3 pré-rédigée par autre Claude] + Pièges 11 + Équipe + cohérence finale 0 patch + round 2 PCB gravure anglaise + archivage JOURNAL partiel + conv 14 + MAJ doc).
- [ ] **Commit + push de la session du 26/05** (approfondissement integration-et-tests complet — alignement v2.1 + 5 étapes voie C [rythme H4 2/3/3/2/2 dont étape 2 à 3 H4 disciplinaires et étape 3 à 3 H4 pyramide compressée] + Pièges 11 + Équipe + cohérence finale 3 patches + round 2 validé + 3 actes à froid TODO/conv + amendement C11 + promotion C13 + leçon NBSPs/typos transcription + MAJ doc).
- [ ] **Commit + push de la session du 26/05 (suite)** (création ex nihilo + approfondissement `securite-et-qualite` complet — 3 blocs co-actifs Sécurité produit / Sécurité projet / Qualité documentaire + Pièges 11 + Équipe 3 axes + délégation explicite + cohérence finale 3 patches wiki-links + 8 nouvelles cibles wiki-links poussées au BACKLOG + acte clôture phase 1 du wiki + **finalisation archivage MCP JOURNAL 22→24/05 via pattern MARKER + N segments** + cadrage prochaine session AA + MAJ doc).

### Manipulations manuelles en attente
- [x] ~~**Finaliser archivage JOURNAL 22-24/05**~~ **fait 26/05 suite via MCP** (pattern MARKER + N segments, 10 edit_file successifs, JOURNAL 156→96 ko / archive 60→119 ko, antichronologie préservée). Le seuil C14 30 ko a été contourné par segmentation en sub-blocs <25 ko. Incident EPERM verrou Windows Obsidian rencontré et résolu en changeant d'onglet — à documenter dans conventions § 7.
- [ ] **Déposer manuellement `cdcf-ecole-template.docx`** dans `content/ressources/templates/` (limite technique MCP filesystem : pas d'écriture binaire).
- [ ] **Supprimer `content/callouts-demo.md`** — fiche jetable, mission accomplie (validation visuelle palette v2). À faire à la main (pas d'outil delete MCP).
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

### Session 2026-05-26 (suite) — Sécurité et qualité : création ex nihilo + approfondissement complet (clôture phase 1 du wiki)
- [x] Cadrage niveau D en 5 questions tranchées + rappel actions manuelles Obsidian (finalisation archivage JOURNAL 22-24/05 + configuration plugin Templates)
- [x] **Niveau A en autonomie** accordé par l'utilisateur sur toute la fiche
- [x] **Création ex nihilo** : pas de squelette préexistant (sécurité-qualité hors du périmètre 22/05 qui n'a squelettisé que les 4 trames du V)
- [x] **Structure** : 3 blocs co-actifs **Sécurité produit / Sécurité projet / Qualité documentaire** (sécu et qualité tressées dans chaque bloc, bloc 3 cristallise qualité documentaire au sens strict)
- [x] **Bloc 1 Sécurité produit** : 4 paragraphes (identifier risques utilisateur dès spec / inscrire sécu dans archi pas en surcouche / valider en intégration / citer-déléguer normatif pointu) + `[!example]` 4 axes (pincement, couple moteur 0,5 Nm, énergie 24 V, parades : AU + butées + carter PLA + fusible 3 A)
- [x] **Bloc 2 Sécurité projet** : 4 paragraphes (identifier risques équipe / **3 règles non négociables** : pas de 230 V sans encadrant, pas de machine sans formation, jamais seul / EPI / articulation responsables équipement) + `[!example]` 3 risques cotés + cas dérogation refusée semaine n°12 + `[!warning]` Une règle ne se relâche jamais sous pression de planning
- [x] **Bloc 3 Qualité documentaire** : 4 paragraphes (plan de revues posé dès spec / traçabilité PCB Rev A/B + Git tags par jalon + revue de code croisée / dossier de sécu distribué dans 5 phases / articulation normes citées) + `[!example]` plan 6 points + tags Git v0.1-poc → v1.0.1-soutenance + `[!tip]` Tracer au moment où la décision se prend
- [x] **Pièges** 11 entrées format gras court + explication (~5/11 a posteriori = ~45 %, cohérent C12) + **Équipe** 3 axes d'articulation (cadence / matrice de risques / piloter sans écraser) + paragraphe délégation explicite ESE + responsables équipement
- [x] **Cohérence finale 4 passes** : passe 1 terminologie 0 patch, passe 2 fil rouge bras 3 axes 0 patch (cohérence chiffrée transverses ↔ trames du V tenue), passe 3 ponts inter-blocs N/A (blocs co-actifs), passe 4 wiki-links 1ʳᵉ occurrence par section **3 patches batch** (Objectif + Bloc 3 para 4 + Équipe — normes CE/basse-tension/EMC/ISO 12100 + procédés rallumés au changement de section)
- [x] **8 nouvelles cibles wiki-links** poussées au BACKLOG : `amdec`, `marquage-ce`, `basse-tension`, `emc`, `iso-12100`, `revue-de-code`, `epi` + élargissement section ESE (renommée « ESE — Écoconception, sécurité produit, normes »)
- [x] **BACKLOG** : `hub/ecoconception` et `hub/securite-et-qualite` marqués faits (clôture phase 1 du wiki côté trames + transverses, 5/5 + 3/3)
- [x] **C14 vécue à chaud** : 1 typo de transcription sur caractère arrow ➤ vs ➔ détectée au premier patch TODO, corrigée immédiatement après relecture (head=10) du fichier source. Confirme la leçon : recopier `oldText` depuis read plutôt que retranscrire.
- [x] Conventions **C1-C6** (les 6 transverses § 7) : **épreuve 3/3 réussie** sur les 3 transverses (gestion-de-projet → ecoconception → securite-et-qualite). Promotion vers § 1-2 envisageable à acter à froid (niveau C requis).
- [x] Conventions **C10** (matrice incarnée) + **C12** (Pièges a posteriori) + **C13** (relire amont) : tenues sans patch spécifique — conventions post-promotion stabilisées.

- [x] **Convention C14 enrichie 26/05 suite** : pattern MARKER + N segments validé (archivage JOURNAL 22→24/05 réussi par segmentation, 10 edit_file successifs) + nouveau piège EPERM verrou Windows Obsidian identifié et résolu (changer d'onglet)
- [x] **Archivage JOURNAL 22→24/05 via MCP segmenté** : 5 étapes insertion (MARKER posé + seg3 + seg2 + seg1 + MARKER retiré, antichronologie respectée) + 5 étapes trim (T1 seg1 + T2 seg2 + T3 seg3 [bloqué EPERM, résolu] + T4 warning préambule + T5 séparateur orphelin & commentaire HTML final). JOURNAL.md 156→96 ko, archive 60→119 ko.
- [x] **Référentiel à jour rangé** : `_drafts/referentiel/Compétences.xlsx` (sous-dossier créé par l'utilisateur). Décision d'emplacement : cohérent avec `_drafts/flowcharts/`, hors site Quartz.
- [x] **Cadrage prochaine session AA** : 3 questions méthodo posées (format / granularité / ordre) + prompt de démarrage produit pour 1er message conversation suivante.

### Session 2026-05-26 — Integration et tests : approfondissement complet voie C + 3 actes à froid + amendements conventions
- [x] 3 actes à froid début session : rotation glissante TODO (suite 5 retirée) + promotion C10 vers § 2 (matrice incarnée, 12 contextes) + promotion C12 vers § 6 (Pièges a posteriori, ratio 37-45 %)
- [x] Cadrage niveau C en 5 questions tranchées + arbitrage **voie C** suite conflit pédagogique détecté entre squelette 22/05 (tests par fonction, anti-pattern par discipline) et demande Q1 utilisateur (sous-titres disciplinaires élec/méca/info)
- [x] **Niveau A en autonomie** accordé par l'utilisateur sur toute la fiche
- [x] **Phase 1** : alignement v2.1 squelette (11 patches batch — 5× example, 5× livrable, 1× warning Attention)
- [x] **Phase 2** : étape 1 *Approvisionner et fabriquer* (2 H4 économes, fil rouge alu 6061 + segments PLA + PCB monoface gravé interne)
- [x] **Phase 3** : étape 2 *Valider les pièces fabriquées* (**3 H4 disciplinaires** élec/méca/info — 1ᵉ exception multi-disciplinaire C11)
- [x] **Phase 4** : étape 3 *Conduire la pyramide de tests* (**3 H4 dense pivot** — cas particulier pyramide compressée niveau 1 / niveaux 2-3 / niveau 4) + warning Attention refondu (« écart se documente » au lieu de « V se referme » pour éviter doublon avec H4-3)
- [x] **Phase 5** : étape 4 *Mener les bilans de clôture* (2 H4 économes, 3 bilans en parallèle + REX réflexif)
- [x] **Phase 6** : étape 5 *Livrer le projet* (2 H4 économes, rapport + soutenance)
- [x] **Phase 7** : Pièges 11 entrées (~55 % a posteriori) + Équipe 4 paragraphes thématiques
- [x] **Phase 8** : cohérence finale 4 passes — 3 patches (1 typo « écartoé » → « écarté », 2 doublons wiki-links PCB étape 2 H4-1 + CdCF étape 3 H4-1). Pattern « 0 patch » du dossier-tech non atteint mais corrections mineures.
- [x] Round 2 utilisateur validé sans correction
- [x] **Convention 11 amendée § 6** (cas étape multi-disciplinaire + cas pyramide compressée)
- [x] **Convention 13 promue § 5** après 2ᵉ épreuve formelle réussie
- [x] **Convention 14 enrichie § 7** : leçon NBSPs U+202F + typos de transcription dans anchors longs comme source d'échec silencieux du matching `oldText`
- [x] Nouveaux wiki-links posés : `firmware`, `gabarit`, `cable-management` (à ajouter au BACKLOG)
- [x] Total **27 patches** sur la session, fiche `integration-et-tests.md` 35 878 bytes

### Session 2026-05-25 (suite 8 — Dossier technique : approfondissement complet + leçon méthodo MCP seuil 30 ko)
- [x] Tâche annexe début de session : archivage JOURNAL 22-24/05 résolu partiellement (résorption duplication 24/05 suite 2 via MCP, JOURNAL 144 → 135 ko ; finalisation manuelle requise — ajoutée en Manipulations manuelles)
- [x] Cadrer 5 questions tranchées en bloc + info utilisateur fournisseurs partenaires intégrée comme contrainte structurante étapes 3 et 5
- [x] **Niveau A en autonomie** accordé par l'utilisateur
- [x] **Phase 1** : alignement v2.1 squelette dossier-technique (11 patches batch — 5× exemple, 5× livrable, 1× warning Attention)
- [x] **Phase 2** : étape 1 *Intégrer les retours de la preuve de concept* (2 H4 économes, fil rouge refondu sur articulation usinée alu 6061)
- [x] **Phase 3** : étape 2 *Détailler les plans par discipline* (2 H4 économes : parallèle disciplinaire + revue interne cohérence inter-disciplines)
- [x] **Phase 4** : étape 3 **trouvée pré-rédigée** (autre instance Claude probable, brief multi-appareil §2) — cohérence vérifiée et préservée
- [x] **Phase 5** : étape 4 *Rédiger et faire valider* PIVOT (3 H4 dense, **tableau matriciel 3 validateurs × 5 colonnes** — 3ᵉ contexte convention 10)
- [x] **Phase 6** : étape 5 *Émettre les commandes* cas inédit (2 H4 sortie matérielle, ni clôture ni économe, 3 bons de commande structurés)
- [x] **Phase 7** : Pièges 5 → 11 entrées (45 % a posteriori étapes 2-5, éprouve C12) + Équipe 4 paragraphes thématiques
- [x] **Phase 8** : cohérence finale 4 passes — **0 patch sur les 4 passes** (2ᵉ confirmation après PoC suite 7 que la discipline est acquise quand internalisée)
- [x] Round 2 utilisateur : PCB monoface gravé en interne école (machine de gravure à l'anglaise) → 3 patches cascade (étape 2 H4 + étape 2 example + étape 5 example), cohérence chiffrée étape 5 alignée à 214 € HT
- [x] **Convention 14 acquise** : seuil pratique MCP write_file/edit_file ~30 ko payload, capitalisée § 7
- [x] Convention 10 (matrice incarnée) : **épreuve 3/3 réussie** — promotion § 2 envisageable à acter à froid
- [x] Convention 12 (Pièges a posteriori) : **épreuve 3/3 réussie** — promotion § 6 envisageable à acter à froid
- [x] Convention 13 (relire amont) : **1ʳᵉ épreuve formelle réussie**, à confirmer sur integration-et-tests
- [x] Nouvelle dépendance posée : fiche-tuto `pcb` avec mention machine de gravure à l'anglaise + monoface en interne école (à créer, ajout liste notions/tutos à produire)







