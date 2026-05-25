# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables.
> Section « Fait » : 3 dernières sessions seulement (rotation glissante en fin de session, suppression auto session N-3). Historique complet dans `JOURNAL.md`.

## Prochaines sessions (ordre logique)

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

- [ ] **Squelette `securite-et-qualite`** (fil transverse — dernière des 3 transverses, occasion d'éprouver les 6 conventions transverses fixées)
- [ ] **Session de cartographie AA** : passe systématique sur `Compétences.xlsx`, rattacher chaque AA à une phase ou un fil transverse. Identifier les trous.
- [ ] **Session de validation cohérence d'ensemble** : relecture bout en bout, ajustements de périmètre entre phases.
- [ ] **Approfondissement `concept`**, puis `preuve-de-concept`, etc. dans l'ordre du V — à chaque approfondissement, **aligner les callouts** sur les conventions v2.1 (titres + phrase-clé dans le corps)

*Notions à produire en parallèle (popovers posés dès les squelettes)* :
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

### Manipulations manuelles en attente
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

## Décisions éditoriales en attente

- [ ] **6 conventions transverses fixées 25/05** à éprouver sur `securite-et-qualite` avant documentation formelle dans le template `fiche-trame.md`. Documentées dans `conventions.md`.

*Note : les autres décisions éditoriales en attente (mode sombre callouts v2, pliage callouts, alignement rétroactif trames, alias Quartz, station météo, 2 images par fiche-notion, format date, tag `transverse`, section équipe transverses, etc.) sont désormais portées par BACKLOG.md (conventions à éprouver) ou par conventions.md (conventions acquises). Pas de duplication.*

## Fait

*Voir `JOURNAL.md` pour l'historique détaillé. Rotation glissante : 3 dernières sessions seulement.*

### Session 2026-05-25 (suite 3 — Nettoyage documentaire complet : paliers 1-6)
- [x] Trancher les 7 questions de cadrage en bloc (externalisation conventions, rotation glissante TODO Fait, consolidation Commit+push, archivage JOURNAL, démarrage auto, méthode audit+refonte ciblée, regroupement conventions par thème)
- [x] **Palier 1** : création de `conventions.md` (14,6 ko, 7 sections + section « En cours d'éprouvage »)
- [x] **Palier 2** : archivage JOURNAL pré-22/05 (création `JOURNAL-archive.md` 49,7 ko, troncature JOURNAL.md 138 ko → 89 ko)
- [x] **Palier 3** : compactage TODO (51 ko → 12,5 ko, gain ~75 %) — 3a réduction section Fait à 3 dernières sessions, 3b consolidation 16 lignes Commit+push, 3c quasi-vidage section Décisions éditoriales
- [x] **Palier 4** : compactage BACKLOG (22 ko → 20,2 ko, gain ~8 %) — 5 items supprimés déjà absorbés par conventions.md ou obsolètes, 2 notes ajoutées pour traçabilité
- [x] **Palier 5** : refonte v2 du prompt projet (~9 ko → ~5,5 ko, 13 sections → 9) avec fusions §3+§6+§10 et §8+§9, externalisations §7+§7bis vers conventions.md, mise à jour §8 démarrage et §9 fin de session, intégration note « niveau B = texte rédigé »
- [x] **Palier 6** : test de démarrage post-refonte (~11-12 k tokens vs cible 15-20 k, réduction ~80 % vs initial)
- [x] **Patch §8 post-test** : détection erreur `tail` → `head` sur lecture JOURNAL antichronologique, corrigé par l'utilisateur dans Claude Desktop
- [x] Leçon méthodo : `filesystem:edit_file` (édit ciblé, plus sûr sur gros fichiers) préféré à `filesystem:write_file` (réécriture intégrale)
- [x] Leçon méthodo : éprouver le prompt par un test de démarrage avant de figer

### Session 2026-05-25 (suite 2 — Batch de 7 fiches-notion prioritaires + pieuvre approfondie)
- [x] Trancher les 5 questions de cadrage (modèle hybride CdCF / stubs légers maintenus / ordre stubs puis CdCF / répartition type:notion vs type:tuto après clarif Q4 / popovers sémés comme base + micro-ajustements)
- [x] Premier batch 7 fiches en mode stub avec placeholders italiques (modèle `pieuvre.md` littéral)
- [x] **Recadrage utilisateur** : niveau B = livraison en texte rédigé, placeholders italiques inadmissibles — reprise complète des 6 stubs en rédaction réelle (modèle `fonction.md` fiche-notion brève)
- [x] Production 12 SVG en batch (6 génériques + 6 exemples station météo connectée, palette ambre #BA7517 / gris #DDDBD3 alignée sur `pieuvre-generique.svg`, support `@media prefers-color-scheme: dark`)
- [x] Patch des 6 fiches pour insertion 2 images (générique après popover + station météo dans « Comment »)
- [x] **Approfondissement complet de `pieuvre.md`** au standard `bete-a-cornes.md` : 3 rôles / méthode 3 temps + tableau des 5 familles de milieux + paragraphe topologie / exemple bras 3 axes enrichi (5 milieux, 4 fonctions commentées) / 5 pièges dont « Confondre FP et FS » nouveau
- [x] Mise à jour BACKLOG (2 nouvelles conventions + extension de l'item reprise visuelle des SVG)
- [x] Clé d'enseignement : **typologie notion/tuto précisée par l'utilisateur** — notion = court (popover) ; tuto = long mais pas structurant (outils en général). Trame = structurante.

### Session 2026-05-25 (Première trame transverse — gestion-de-projet : squelette + approfondissement direct)
- [x] Trancher les 5 questions de cadrage (structure thématique 3 blocs co-actifs / délégation totale des outils / 1 [!example] par bloc / pas de nouvelles notions / squelettisation seule au départ)
- [x] Produire le squelette de `gestion-de-projet.md` (niveau B) avec front matter complet, popover, posture, objectif, 3 blocs + callouts conventionnels v2.1, section équipe en placeholder explicite, conclusion adaptée, voir aussi
- [x] Valider 4 décisions de niveau C : tag `transverse`, conservation « Démarche » comme nom de section, format `[!livrable]` Continu/Jalonné, section « Pendant cette phase, côté équipe » reconvertie en articulation avec les autres transverses
- [x] Basculer en approfondissement complet sur demande utilisateur — rédaction des 3 blocs en prose dense (3-4 paragraphes par bloc) + callouts incarnés + section articulation rédigée en 3 pratiques + conclusion adaptée
- [x] Round 2 — 9 remarques utilisateur traitées en 14 patches `filesystem:edit_file` : pas de chiffrage durée projet, `semaine n°X`, pas d'extension `.md`, liste numérotée 1/2/3, gras sur morceau de phrase
- [x] Fixer 5 conventions transverses à propager (à éprouver sur les 2 autres)
- [x] Leçon méthodo : `str_replace` ≠ `filesystem:edit_file` (outil sandbox vs MCP)
