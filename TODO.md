# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables.
> Section « Fait » : 3 dernières sessions seulement (rotation glissante en fin de session, suppression auto session N-3). Historique complet dans `JOURNAL.md`.

## Prochaines sessions (ordre logique)

> **➤ Prochaine session = approfondissement `dossier-technique`** (acté 25/05 suite 7, option A retenue). Phase 4 du V, calque méthodo concept/PoC, épreuve 3/3 pour conv 10 + 12 et 1ʳᵉ épreuve pour conv 13 (relire amont). Tâche annexe en début de session : décider de l'archivage JOURNAL 22/05 → 24/05 (taille 131,8 ko > seuil).

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
- [ ] **Approfondissement des fiches phases du V** : `concept.md` complet (étapes 1-2 + v2.1 squelette faits 25/05 suite 4 ; étapes 3-4-5 + Pièges + Équipe faits 25/05 suite 5 ; cohérence finale 4 passes faite 25/05 suite 6 — 27 patches, fiche complète et alignée v2.1). `preuve-de-concept.md` complet (5 étapes + Pièges 11 entrées + Équipe 4 paragraphes + cohérence finale 4 passes + round 2 wiki-links outils, faits 25/05 suite 7). **Prochain : `dossier-technique`**, puis `integration-et-tests` dans l'ordre du V. À chaque approfondissement, conduire la passe dédiée wiki-links en sortie de fiche (filet de sécurité — cf. leçon méthodo 25/05 suite 7 : convention 6 applicable au fil quand discipline acquise).

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
- [ ] **Commit + push de la session du 25/05 (suite 4)** (approfondissement concept étapes 1-2 + alignement v2.1 + MAJ doc).
- [ ] **Commit + push de la session du 25/05 (suite 5)** (approfondissement concept étapes 3-4-5 + Pièges + Équipe + MAJ doc).
- [ ] **Commit + push de la session du 25/05 (suite 6)** (cohérence finale concept — 4 passes / 27 patches + MAJ doc).
- [ ] **Commit + push de la session du 25/05 (suite 7)** (approfondissement preuve-de-concept v1 complet — 5 étapes + Pièges + Équipe + cohérence finale + round 2 wiki-links + MAJ doc).

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

## Décisions éditoriales en attente

- [ ] **6 conventions transverses (25/05) + 3 conventions concept/PoC (25/05 suite 4-7)** à éprouver. Conventions 1-6 sur `securite-et-qualite` (3ème transverse), conventions 10-11-12 (matrice incarnée + structure H4 par étape + Pièges nourris a posteriori) sur `dossier-technique` (2ᵉ trame du V suivante). Documentation dans `conventions.md` § 7.
  - Convention 11 (rythme H4) **promue à § 6** suite épreuve 2/2 sur concept + PoC (25/05 suite 7).
  - Convention 6 mode d'application affiné (au fil + filet passe dédiée, 25/05 suite 7).
  - Nouvelle convention candidate : relire sections amont de la fiche (Posture, Objectif) avant section avale (25/05 suite 7).

*Note : les autres décisions éditoriales en attente (mode sombre callouts v2, pliage callouts, alignement rétroactif trames, alias Quartz, station météo, 2 images par fiche-notion, format date, tag `transverse`, section équipe transverses, etc.) sont désormais portées par BACKLOG.md (conventions à éprouver) ou par conventions.md (conventions acquises). Pas de duplication.*

## Fait

*Voir `JOURNAL.md` pour l'historique détaillé. Rotation glissante : 3 dernières sessions seulement.*

### Session 2026-05-25 (suite 7 — PoC : approfondissement v1 complet — 5 étapes + Pièges + Équipe + cohérence finale + round 2 wiki-links outils)
- [x] Cadrer 4 questions tranchées en bloc (découpage 5 étapes 2/2/2/3/3, pivot = étape 4, fil rouge local PoC = articulation 3D PLA 60 %, boucle rétroactive α incarnée)
- [x] **Phase 1** : alignement v2.1 squelette + restructuration 4→5 étapes (9 patches en batch)
- [x] **Phase 2** : étape 1 *Définir chaque preuve* (2 H4, triplet hypothèse/critère/protocole, revue encadrant traçée) — niveau B annoncé puis niveau A pour la suite
- [x] **Phase 3** : étape 2 *Préparer les moyens* (2 H4 économes, hiérarchie stock standard / stock divers / acquisition exceptionnelle)
- [x] **Phase 4** : étape 3 *Mener les essais par incertitude* (2 H4 économes, caractérisation banc + exécution-traçage)
- [x] **Phase 5** : étape 4 *Analyser et trancher* (PIVOT 3 H4 : Confronter / Synchroniser / Statuer, 3 sorties nominales validé / ajustement / retour amont, mises à jour amont même séance)
- [x] **Phase 6** : étape 5 *Rédiger et faire valider* (CLÔTURE DOCUMENTAIRE 3 H4 calque concept : Structurer / Rédiger / Faire valider, TdM type 5 sections, 4 issues nominales)
- [x] **Phase 7** : refonte Pièges (6 puces → 11 entrées gras court, 5/11 issues a posteriori étapes 3-4-5 = ~45 %) + section Équipe (4 paragraphes thématiques calque concept)
- [x] **Phase 8** : cohérence finale 4 passes (3 patches au total : 2 terminologie + 1 fil rouge + 0 ponts + 0 wiki-links). **Résultat majeur : passe 4 wiki-links à 0 patch** vs 20 sur concept — convention 6 internalisée en cours de rédaction.
- [x] **Phase 9** : round 2 utilisateur wiki-links outils (6 nouvelles cibles : multimetre / oscilloscope / alimentation-stabilisee / arduino / pied-a-coulisse / comparateur, 7 patches en batch) + correction factuelle process fablab (pas de filament en propre, transmission STL au responsable fablab) + disjonction MCU/Arduino dans énumération Stock standard
- [x] 1 round 2 utilisateur sur étape 1 (doublon « on a le matos… » Posture vs H4-1) — extension de la leçon ±2 phrases du 25/05 suite 6 : relire sections amont fiche avant section avale
- [x] **Convention 11 promue** vers `conventions.md` § 6 (éprouvée 2/2 trames du V)
- [x] **Convention 6 mode d'application affiné** (au fil + filet passe dédiée)
- [x] **Nouvelle convention candidate ajoutée** § 7 : relire sections amont (Posture, Objectif) avant section avale
- [x] 6 nouvelles fiches notion/tuto poussées au BACKLOG + plan long terme `microcontroleur` = page d'aiguillage par famille (STM32 / ESP32 / MicroPython / Arduino / Teensy)
- [x] Signal taille JOURNAL.md = 131,8 ko (> seuil 100 ko) : archivage sessions 22/05 → 24/05 à envisager en début de prochaine session

### Session 2026-05-25 (suite 6 — Concept : cohérence finale d'ensemble — 4 passes de relecture critique)
- [x] Cadrer 3 arbitrages en bloc : ordre des passes (terminologie → fil rouge → ponts → wiki-links), seuil 1 passe sans nouvel écart, audit exhaustif wiki-links sur les 5 étapes
- [x] **Passe 1 (terminologie)** : 5 patches initiaux (3 étape→phase pour désigner la phase concept entière, 1 verbe isolé « agrège » → « agrège les quatre livrables précédents », 1 verbe isolé « valide » → « valide sans réserve ») + 1 patch correctif effet de bord (doublon « les quatre livrables précédents » introduit par le patch 4)
- [x] **Passe 2 (fil rouge bras 3 axes)** : option (a) retenue — instanciation rétroactive de la rétroaction FC démontabilité dans l'`[!example]` étape 1 (1 patch, paragraphe ajouté avec wiki-links CdCF + FC selon convention 6). Point B (réserve étape 2 → étape 3 vs annonce étape 4) laissé tel quel
- [x] **Passe 3 (ponts inter-étapes)** : 0 patch — pattern stylistique stable détecté (annonces aval N→N+1 portées par l'intro de l'étape suivante, jamais par la sortie de l'étape courante) ; saut étape 3→5 laissé tel quel (option a)
- [x] **Passe 4 (wiki-links / popovers)** : audit exhaustif strict (option α) — 1 doublon (écoconception ×3 dans même H4 étape 2) + 19 oublis (1ère occurrence sans wiki-link dans nouveau contexte) = 20 patches en batch
- [x] Round 2 utilisateur validé sans correction (6 round 2 successifs sur concept depuis 25/05 suite 4)
- [x] **Leçon méthodo 1** : proposer une reformulation sans relire ±2 phrases de contexte crée des effets de bord (cas patch 4 passe 1)
- [x] **Leçon méthodo 2** : convention 6 difficile à appliquer en continu (74 % des patches sur passe 4) → s'applique mieux en passe dédiée en sortie de fiche qu'au fil de la rédaction
- [x] Total : **27 patches** sur la session, fiche `concept.md` complète et cohérente sur les 4 dimensions auditées

### Session 2026-05-25 (suite 5 — Concept : approfondissement étapes 3-4-5 + Pièges + Équipe)
- [x] Cadrer étape 3 (intitulés 3 H4, convention 10 en tableau de conflits, profondeur fil rouge B en cas développé sortie d'étape) — niveau C
- [x] **Étape 3 (pivot dense)** : intro 2 paragraphes + 3 H4 (Confronter / Caractériser / Renégocier) + `[!warning]` retouché + `[!tip]` ajouté + `[!example]` enrichi avec tableau de conflits 4 colonnes × 2 lignes + déroulé renégociation à trois sur conflit n°1 + livrable enrichi
- [x] **Étape 4 (hors pivot)** : intro 2 paragraphes + 2 H4 (Pré-dimensionner par discipline / Identifier les incertitudes) + `[!warning]` + `[!tip]` + `[!example]` enrichi avec tableau de pré-dim 6 colonnes × 5 lignes + 2 incertitudes I1/I2 formulées en question — éprouve convention 11
- [x] Cadrer étape 5 (3 H4 par exception convention 11 pour clôture documentaire, convention 10 en TdM incarnée, pas de template Word) — niveau C
- [x] **Étape 5 (clôture documentaire)** : intro 2 paragraphes + 3 H4 (Structurer / Rédiger / Faire valider) + `[!warning]` + `[!tip]` + `[!example]` avec TdM type 5 sections instanciée sur bras 3 axes + 4 issues nominales de revue + livrable enrichi
- [x] **Pièges fréquents** : refonte de 5 puces simples en 8 pièges format gras court + explication (calque spec-tech 24/05 partie 1) ; 3 nouveaux pièges émergés des étapes 3-4-5 (Renégocier en bilatéral / Marge serrée habillée en certitude / Compiler au lieu de rédiger)
- [x] **Pendant cette phase, côté équipe** : 4 paragraphes thématiques (Interfaces métiers / Gestion de projet / Écoconception / Sécurité-qualité), calque spec-tech
- [x] 5 round 2 successifs validés sans correction (étapes 1, 2, 3, 4, 5)
- [x] Leçon méthodo : section *Pièges* se nourrit a posteriori des leçons rédactionnelles (3/8 pièges émergés spontanément des étapes 3-5), pas a priori d'une checklist méthodo — mode complémentaire à spec-tech 23/05 suite 2 (pièges identifiés en relecture critique)
- [x] Affiner convention 11 : exception clôture documentaire → 3 H4 (éprouvé sur étape 5) → conventions.md § 7
- [x] Convention 10 éprouvée sur 4 contextes au sein de concept (matrice décision / conflits / pré-dim / TdM incarnée) — indicateur de généralité solide


