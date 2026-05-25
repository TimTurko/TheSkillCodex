# BACKLOG — TheSkillCodex

> Fichier privé (non publié). Idées et notions à traiter "un jour".
> Pas d'ordre, pas de priorité. On y déverse, on y pioche selon l'inspiration.

## Fiches-trame à rédiger (phases du cycle en V)

Ces fiches forment l'épine dorsale du parcours étudiant. Voir le hub `content/hub/index.md` pour la trame complète.

- [ ] `hub/specification-technique` — phase 1 du V
- [x] ~~`hub/concept` — phase 2 du V~~ — squelette fait le 22/05 dans `content/fiches/proj/concept.md`
- [x] ~~`hub/preuve-de-concept` — phase 3 du V (point pivot du V)~~ — squelette fait le 22/05 dans `content/fiches/proj/preuve-de-concept.md` ; **approfondi 25/05 suite 7** (5 étapes + Pièges 11 entrées + Équipe 4 paragraphes + cohérence finale 4 passes + 6 nouvelles cibles wiki-links sur outils)
- [x] ~~`hub/dossier-technique` — phase 4 du V~~ — squelette fait le 22/05 dans `content/fiches/proj/dossier-technique.md` ; **approfondi 25/05 suite 8** (5 étapes [étape 3 pré-rédigée par autre instance Claude] + Pièges 11 entrées + Équipe 4 paragraphes + cohérence finale 4 passes à 0 patch + round 2 PCB gravure à l'anglaise + alignement v2.1)
- [x] ~~`hub/integration-et-tests` — phase 5 du V~~ — squelette fait le 22/05 dans `content/fiches/proj/integration-et-tests.md`
- [x] ~~`hub/gestion-de-projet` — fil transverse~~ — squelettisée + approfondie 25/05 dans `content/fiches/proj/gestion-de-projet.md`. 5 conventions transverses fixées à propager aux 2 autres transverses.
- [ ] `hub/ecoconception` — fil transverse
- [ ] `hub/securite-et-qualite` — fil transverse

À noter : l'emplacement acté implicitement par la session du 22/05 est `content/fiches/proj/` (et non `content/hub/`). Le hub reste un point d'entrée vers ces fiches, pas leur conteneur.

## Fiches à rédiger — par domaine

### EEE — Électronique
- [ ] PWM (modulation de largeur d'impulsion)
- [ ] PID (régulateur proportionnel-intégral-dérivé)
- [ ] Asservissement
- [ ] **`microcontroleur`** — fiche-notion racine, alias `MCU`. **Plan long terme (25/05 suite 7)** : la fiche devient une **page d'aiguillage** vers tutoriels par famille de microcontrôleurs : `[[stm32]]`, `[[esp32]]`, `[[micropython]]`, `[[arduino]]`, `[[teensy]]`, etc. Pose les notions communes (registres, périphériques, bus, IDE) puis renvoie vers les tutos spécifiques. À traiter en même temps que la fiche-tuto `arduino` pour cadrer l'architecture aiguillage.
- [ ] **`arduino`** — fiche-tuto (popover posé dans `preuve-de-concept.md` Stock standard, 25/05 suite 7). Plate-forme + IDE + écosystème. Distinguer du langage ; positionner dans la famille `microcontroleur`. **À traiter en même temps que la page d'aiguillage `microcontroleur`**.
- [ ] **`stm32`** — fiche-tuto (mentionné dans le plan d'aiguillage `microcontroleur` 25/05 suite 7). Cible avancée, registres, HAL/LL, CubeMX.
- [ ] **`esp32`** — fiche-tuto (mentionné dans le plan d'aiguillage `microcontroleur` 25/05 suite 7). Cible Wi-Fi/Bluetooth intégrés, Arduino Core ou ESP-IDF.
- [ ] **`micropython`** — fiche-tuto (mentionné dans le plan d'aiguillage `microcontroleur` 25/05 suite 7). Approche scriptée haut niveau pour microcontrôleurs.
- [ ] **`teensy`** — fiche-tuto (mentionné dans le plan d'aiguillage `microcontroleur` 25/05 suite 7). Cible performance temps réel / DSP / MIDI.
- [ ] **`multimetre`** — fiche-tuto (popover posé dans `preuve-de-concept.md` Stock standard, 25/05 suite 7). Mesures de base (tension, courant, résistance, continuité), choix d'échelle, pièges classiques.
- [ ] **`oscilloscope`** — fiche-tuto (popover posé dans `preuve-de-concept.md` Stock standard, 25/05 suite 7). Lecture d'écran, calibration sonde, déclenchement, mesures de période/amplitude.
- [ ] **`alimentation-stabilisee`** — fiche-tuto (popover posé dans `preuve-de-concept.md` Stock standard, 25/05 suite 7). Tension/courant/limite, mode CV/CC, sécurité court-circuit.
- [ ] Alimentation d'un système embarqué
- [ ] Pull-up / pull-down
- [ ] Niveau logique (3.3V, 5V, compatibilité)
- [ ] ADC / DAC
- [ ] Filtrage analogique de base
- [ ] Masse électrique, plan de masse
- [ ] Découplage (condensateurs)
- [ ] **PCB** (fiche-tuto : concevoir et faire fabriquer un PCB pour un projet étudiant). **Info 25/05 suite 8** : inclure la **production interne école sur machine de gravure à l'anglaise** pour PCB monoface (pas de commande externe pour ce cas). Distinguer PCB monoface interne / PCB double face externe (JLCPCB ou équivalent). Popover posé dans `dossier-technique.md` étapes 2/4/5.

### MIA — Informatique embarquée
- [ ] Architecture logicielle d'un objet connecté
- [ ] Boucle principale (`loop()`) vs interruptions
- [ ] Lecture capteur (polling vs interrupt)
- [ ] Communication série (UART, I2C, SPI)
- [ ] MQTT pour IoT
- [ ] Versionning du code embarqué
- [ ] Structuration d'un projet Arduino / PlatformIO
- [ ] Debug embarqué (sortie série, LED de status)

### PROJ — Démarche projet
- [x] ~~Cahier des charges fonctionnel~~ — fait 25/05 suite 2 dans `content/fiches/proj/cahier-des-charges-fonctionnel.md` (fiche-notion complète au standard `bete-a-cornes.md` hybridé avec section « Structure type du document école »).
- [ ] **`caracteriser-une-exigence`** (fiche-tuto **prioritaire**, décision 23/05 suite 2 : 1 fiche unique avec `aliases: [critere, niveau, flexibilite]` dans le front matter). Embarquera le triplet, le triptyque mauvais/moyen/bon (pattern `bete-a-cornes.md`), l'échelle F0/F1/F2/F3 NF X50-151. Première phrase = définition du triplet pour popover cohérent au survol des 3 alias.
- [ ] **`unite-si`** (fiche-notion, popover posé étape 4 de `specification-technique.md` le 23/05 suite 2). Convention typographique des unités SI (espace insécable, format ± X mm, bornes, plages). Traitera aussi la mention `Ctrl+Maj+Espace` dans Obsidian.
- [x] ~~Bête à cornes~~ — fait le 20/05 (fiche-notion complète + 4 SVG)
- [ ] **Décomposition fonctionnelle** (notion-mère, distincte de `schema-bloc-fonctionnel` qui n'est qu'un des outils possibles — popover posé dans `concept.md` étape 1 le 22/05)
- [x] ~~**Matrice de décision**~~ — fait 25/05 suite 2 dans `content/fiches/proj/matrice-de-decision.md` (fiche-notion brève rédigée + 2 SVG : tableau générique 3 sol × 5 critères + matrice choix d'alimentation station météo).
- [x] ~~Analyse fonctionnelle (FAST, SADT, pieuvre) — découper ?~~ — décision 23/05 suite : on découpe en fiches séparées (entrées `pieuvre` et `fast` ci-dessous, SADT à voir si besoin)
- [x] ~~**`pieuvre`** (notion, **triplement prioritaire** : popover posé étape 3 de `specification-technique.md` + placeholder image cassée dans la trame + **aliases `[FP, FS, FC]` à poser** dans le front matter — décision 23/05 suite 2)~~ — fait 24/05 (suite 2) : fiche-notion légère produite (stub méthodologique). **Aliases déplacés sur la nouvelle fiche `fonction.md`** (décision 24/05 suite 2 : FP/FS/FC pointent sémantiquement vers la catégorie de fonction, pas l'outil pieuvre). Approfondissement au standard `bete-a-cornes.md` restant.
- [x] ~~**`fonction`** (nouveau, aliases `[FP, FS, FC]`)~~ — fait 24/05 (suite 2) : fiche-notion brève complète (option b) avec trichotomie FP/FS/FC, format d'énoncé verbe + complément, tableau d'exemples correct/incorrect, 3 pièges.
- [ ] **`fast`** (tuto, popover posé en ouverture de l'étape 3 de `specification-technique.md` le 23/05 suite — la pieuvre donne le *quoi*, FAST donne le *comment*). À traiter en phase 2 concept.
- [ ] **`revue-de-cdcf`** (notion candidate — vocabulaire acté 24/05, utilisé 4-5 fois dans `specification-technique`. À monitorer ; produire une fiche-notion légère si l'utilisation se répète aux phases 2-5 ou si une fiche dédiée aux revues de jalon émerge).
- [ ] Mécatronique (fiche-notion racine, emplacement à arbitrer)
- [ ] Frontière du système
- [ ] Revue de projet
- [ ] Approche-test / itération
- [ ] Critères de comparaison de solutions
- [ ] **`etat-de-l-art-technique`** (tuto, popover posé dans l'objectif de `specification-technique.md` le 23/05). Méthode N×M (N solutions × M critères pondérés) pour étude comparative chiffrée. À distinguer d'une simple revue bibliographique. Fusionne l'ancienne entrée « État de l'art (méthodologie) ».
- [ ] Schéma cinématique
- [ ] Chaîne d'énergie
- [ ] Pré-dimensionnement (méthodologie)
- [ ] **`bom`** / Nomenclature (tuto, popover posé étape 2 de `specification-technique.md` le 23/05 suite). Acronyme + structure d'un BOM. Évolution attendue : BOM préliminaire (spec) → consolidée (concept) → finale (dossier technique).
- [ ] Plan de qualification produit
- [ ] Retour d'expérience (REX)

### MEO — Méthodes et organisation
- [ ] Outils collaboratifs (ODJ, CR, planning)
- [ ] Outils de créativité (brainstorm, SCAMPER, etc.)
- [ ] **`mind-map`** (notion, popover posé étape 3 de `specification-technique.md` le 23/05 suite). Outil méthodo générique mobilisable bien au-delà de la pieuvre (structuration d'idées, analyse de besoin, brainstorming).
- [ ] **`fablab`** (notion candidate — terme utilisé 2 fois dans la section Équipe de `specification-technique.md` (24/05 suite). À monitorer ; produire fiche-notion légère si l'utilisation se généralise dans les fiches de fabrication ou de mise à disposition de moyens école).
- [ ] Prise de décision collective
- [ ] Gamme de fabrication
- [ ] **Relation client** (tuto) — valider la compréhension du besoin, posture en réunion client, gestion des changements de demande
- [ ] **Archivage projet** (tuto) — CR de réunion, traçabilité documentaire, versioning des livrables
- [ ] **Définir un objectif SMART** (tuto)
- [x] ~~**`retroplanning`** (fiche-tuto détaillée)~~ — fait 25/05 suite 2 : fiche-tuto brève rédigée (5 étapes méthode) + 2 SVG (axe temps avec flèche à rebours + rétroplanning station météo 15 sem.).
- [x] ~~**`jalons`** (fiche-tuto détaillée)~~ — fait 25/05 suite 2 : **type:notion** après clarif Q4 25/05 suite 2 (notion = court/popover). Fiche-notion brève rédigée + 2 SVG (frise générique cycle en V + jalons station météo sur 15 semaines).
- [x] ~~**`gantt`** (fiche-tuto détaillée)~~ — fait 25/05 suite 2 : fiche-tuto brève rédigée + 2 SVG (mini-Gantt générique 4 tâches × 8 sem. + Gantt station météo 6 × 15 sem. avec dépendances). Approfondissement avec captures GanttProject/Trello/Excel reste à faire ultérieurement.
- [x] ~~**`wbs`** (fiche-notion légère)~~ — fait 25/05 suite 2 : fiche-notion brève rédigée + 2 SVG (arbre générique 3 niveaux + WBS station météo par sous-système).
- [x] ~~**`matrice-de-risques`** (fiche-notion légère)~~ — fait 25/05 suite 2 : fiche-notion brève rédigée + 2 SVG (grille 3×3 P×G générique colorée + 6 risques cotés sur projet station météo avec parades).

### MME — Matériaux / mécanique (interface collègues)
- [ ] Liens vers cours mécanique
- [ ] Liens vers cours fabrication
- [ ] **`pied-a-coulisse`** — fiche-notion (popover posé dans `preuve-de-concept.md` outillage, 25/05 suite 7). Instrument de mesure dimensionnelle de base, lecture vernier, plage 0-150 mm typique. Court, popover-only.
- [ ] **`comparateur`** — fiche-notion (popover posé dans `preuve-de-concept.md` instruments de mesure, 25/05 suite 7). Aliases possibles `[comparateur-micrometrique]`. Mesure de variation dimensionnelle (jeu, défaut de planéité, dérive), précision typique 0,01–0,02 mm.

### ESE — Écoconception
- [ ] ACV (analyse cycle de vie) — principes
- [ ] Liens vers cours dédié

## Idées de fiches transversales / méta

- [ ] **Convention mécatronique "par fonction"** — acquis 21/05 suite : en mécatronique, une fonction mobilise toujours plusieurs disciplines. Pas de test purement disciplinaire. À expliciter dans une fiche-notion sur l'**essence mécatronique** (ce qui distingue la mécatronique d'un assemblage élec + méca + info).

- [ ] Glossaire d'acronymes (PWM, PID, PCB, PPM, etc.) — à décider : fiche unique ou fiches courtes ? `ppm` est un prospect typique (acronyme périphérique, pas digne d'une fiche dédiée)
- [ ] FAQ projet mécatronique
- [ ] "Premiers pas" (page d'onboarding pour étudiant qui arrive sur le site)
- [ ] Mode d'emploi du site (popovers, recherche, graph)

## Idées d'illustrations / médias à produire

- [ ] Schéma annoté d'une couveuse réelle (référencé dans schema-bloc-fonctionnel)
- [ ] Illustration des conventions de flèches (info / énergie / matière)
- [x] ~~**SVG bête à cornes générique**~~ — fait le 20/05 (4 SVG produits : générique + 3 exemples bras robotique). Placeholder dans `specification-technique.md` étape 1 remplacé.
- [ ] SVG bête à cornes — version simplifiée 3-cases (variante éventuelle pour fiche très courte ou résumé carte mentale)
- [x] ~~SVG pieuvre générique (pour étape 3 de `specification-technique`) — **désormais doublement prioritaire** : placeholder cassé dans la trame depuis le 23/05 suite.~~ — fait 24/05 (suite 2) : `pieuvre-generique.svg` produit (forme rayonnante classique AFNOR, tous liens même style, étiquettes Fx). Première version « traversante FP/FS/FC » refondue suite à retour utilisateur sur la convention dominante.
- [x] ~~SVG pieuvre incarné bras 3 axes~~ — fait 24/05 (suite 2) : `pieuvre-bras-3-axes.svg` produit (système BRAS 3 AXES + 5 milieux + 4 fonctions FP1/FS1/FC1/FC2). Référencé dans l'`[!example]` étape 3 de `specification-technique.md` et dans la section Exemple de `pieuvre.md`.
- [ ] Photos de projets étudiants antérieurs avec accord (anonymisées si besoin)
- [ ] Capture d'écran de schéma Fritzing / KiCad type
- [ ] Vidéo courte de démo (intégration via embed ?)
- [x] ~~Schéma cycle en V v2 avec boucles de retour itératives~~ — fait le 21/05 suite 2 (`cycle-v-projet.svg` enrichi de 4 rétroactions ambrées, version v1 archivée)

## Améliorations site / Quartz

- [ ] **Reprise visuelle des images SVG** (pas du contenu) avant publication — **très peu urgent, à faire juste avant l'ouverture aux élèves**. Concerne tous les SVG produits depuis le début du projet :
  - **Premiers jets fragiles, affinage utilisateur attendu** (produits le 25/05 suite 2, génériques + exemples station météo) : `jalons-generique.svg`, `jalons-station-meteo.svg`, `wbs-generique.svg`, `wbs-station-meteo.svg`, `retroplanning-generique.svg`, `retroplanning-station-meteo.svg`, `gantt-generique.svg`, `gantt-station-meteo.svg`, `matrice-de-risques-generique.svg`, `matrice-de-risques-station-meteo.svg`, `matrice-de-decision-generique.svg`, `matrice-de-decision-station-meteo.svg`. Ce sont des premiers jets Claude, à reprendre visuellement avant publication (alignements, hauteurs de lignes, positionnements de textes proches des bords, lisibilité smartphone).
  - **Versions stabilisées antérieures** : `cycle-v-projet.svg`, `bete-a-cornes-generique.svg` + 3 exemples, `pieuvre-generique.svg`, `pieuvre-bras-3-axes.svg`.
  - **Critères de la passe d'affinage** : homogénéité visuelle (poids des traits, tailles relatives, alignement des éléments), positionnement texte (centrages, gaps autour des bords), cohérence palette, lisibilité smartphone. Le contenu pédagogique reste inchangé — passe de polissage esthétique uniquement. Posée 24/05 (suite 2), enrichie 25/05 suite 2.

- [ ] Charte couleur / identité visuelle complète (au-delà de la palette callouts v1)
- [ ] Thème couleur école / ICAM
- [ ] Page personnalisée 404
- [ ] Favicon custom
- [ ] Logo en haut à gauche
- [ ] Tester l'export PDF académique (Pandoc + xelatex)
- [ ] Tester l'export HTML pour Moodle
- [ ] Ajouter un bouton "Suggérer une amélioration" (lien vers GitHub Issues ?)
- [ ] Lien permanent vers la version PDF de chaque fiche
- [ ] Sitemap publié pour SEO

## Idées éditoriales

- [ ] **Lexique étudiant : termes à proscrire** — démarrage suite à la décision du 22/05 de bannir « dérisquer » (non français) et « point dur » (peu lisible) dans toute production étudiante. À constituer comme petit document méthodologique (markdown court dans `_templates/` ou page de référence) listant les termes à éviter et leurs alternatives recommandées : « dérisquer » → « lever une incertitude » / « valider le fonctionnement », « point dur » → « incertitude », « phase N » → noms en toutes lettres dans la prose. À enrichir au fil des sessions.
- [ ] Mini-séries thématiques (ex: "tout pour piloter un moteur DC en 5 fiches")
- [ ] Parcours guidé : "Tu démarres ton projet ?" → suite logique de fiches
- [ ] Encadré "Vu en projet" (callout terrain) systématisé
- [ ] Page "ressources externes recommandées" (datasheets utiles, sites de référence)
- [ ] Version anglaise des fiches (très long terme, après stabilisation du contenu français)

## Discussions / décisions en attente

- [ ] **Inventaire systématique des fiches stub/placeholders avant publication aux élèves** — tâche structurante pour la phase de pré-ouverture. Posée 24/05 (suite 2) en conséquence de la décision « `draft: false` par défaut » : le BACKLOG est désormais le pilote de la maturité éditoriale. Passe à conduire en fin de phase de rédaction (avant ouverture aux élèves) sur l'ensemble du contenu : identifier les fiches stub, les sections `*[À rédiger]*`, les liens rouges, les images placeholder. Sortie : checklist d'éléments à finaliser ou à retirer.

- [ ] Convention des tags AA (séparer domaine vs code complet)
- [ ] Faut-il un glossaire séparé pour les acronymes ?
- [ ] Quoi faire des fiches MME / ESE : pages très courtes pointant vers les collègues, ou ne rien créer du tout ?
- [ ] Pliage des callouts (`[!example]-` replié par défaut ?) — à trancher après quelques fiches rédigées
- [ ] **Mode sombre des callouts v2** — non décliné actuellement. À traiter quand on aura du recul d'usage. SCSS Quartz à étendre, équivalent Obsidian éventuel à décider.
- [ ] **Convention de gras dans la section Pièges des fiches-notion** : « \*\*Piège en gras court.\*\* Phrase d'explication. » — figé dans le template `fiche-notion.md` mais pourrait constituer une « exception structurelle » dans la règle de gras minimal (« uniquement sur 1ère occurrence des concepts-clé »). À documenter formellement quand on écrira un guide éditorial unifié.
- [ ] **Convention de triptyque mauvais/moyen/bon dans les fiches-notion** : utilise `[!failure]` / `[!warning]` / `[!example]` (vu dans `bete-a-cornes.md`, mentionné dans `fiche-notion.md`). À figer formellement dans `callouts.md` si on confirme le pattern après 2-3 fiches-notion supplémentaires.
- [ ] **Politique extensions navigateur pour validation visuelle** : recommander aux utilisateurs/collègues de désactiver Dark Reader (et similaires) sur le domaine du site — à documenter dans une page "comment lire ce site" éventuelle
- [ ] **Palette couleurs disciplines (élec / méca / info)** : 3 couleurs ad-hoc définies pour le flowchart-2-concept (bleu `#D6E8F5`, ocre `#F5E8D6`, vert `#D6F5E0`). À harmoniser avec la **palette callouts v2** (figée 22/05 suite) dans une vraie itération design, puis à appliquer de manière cohérente sur **toutes les phases avec éclatement disciplinaire** (concept, PoC, dossier technique, intégration probable).
- [ ] **Convention de suffixe disciplinaire** `(élec)` / `(méca)` / `(info)` en bout de label des nœuds : à acter comme convention si retenu après plusieurs flowcharts produits.
- [ ] **Layout flowchart phase 2 — non résolu** : le subgraph BRANCHES (étude par discipline) reste chaotique malgré plusieurs tentatives (sous-subgraphs LR/TB, liens invisibles `~~~`). Pistes à explorer plus tard : (a) tester le renderer ELK via `%%{init: {'flowchart': {'defaultRenderer': 'elk'}} }%%` (peut nécessiter une mise à jour de `@mermaid-js/mermaid-cli`), (b) abandonner la grille pure et accepter un autre mode de représentation, (c) sortir complètement de Mermaid pour cette phase (SVG main, draw.io, Excalidraw). **Confirmé 21/05 suite** : le même découpage en grille 3×3 régulière (phase 3) passe sans problème. C'est spécifiquement le 2×3 rectangulaire qui coince. Si on doit résoudre ph2, symétriser en 3×3 (ajouter un 3è étage : matrice + ?) pourrait suffire.
- [ ] **Règle de visualisation des flowcharts** : préférer le SVG généré par `npm run flowcharts` au rendu Obsidian quand le diagramme devient large (Obsidian ne permet pas le scroll horizontal facile). Le SVG s'ouvre dans n'importe quel visualiseur d'image avec zoom natif.

- [ ] **Mode d'application convention 6 (wiki-link à la 1ère occurrence par section/sous-section/callout)** : observation 25/05 suite 6 — 20 patches sur 27 de la session de cohérence finale concept ont porté sur la convention 6 (74 %). Hypothèse : la convention 6 s'applique mieux en **passe dédiée en sortie de fiche** qu'en application au fil de la rédaction. À confirmer sur `preuve-de-concept` : si le ratio passe wiki-links / total reste similaire, formaliser le mode d'application dans `conventions.md` § 2 (Mise en forme — Popovers et wiki-links).

*Note : 4 conventions à éprouver précédemment listées ici (popovers sigles génériques, alias Quartz CrawlLinks, 2 images par fiche-notion d'outil, fil rouge station météo) sont désormais portées par `conventions.md` section « En cours d'éprouvage ». Pas de duplication.*

## Points ouverts des flowcharts (21/05 suite)

*Note : à arbitrer en relecture avant ouverture aux élèves, dans le cadre de l'inventaire systématique des fiches stub/placeholders.*

### Phase 4 — dossier technique
- [ ] **3 cercles S2 parallèles (S2e / S2m / S2r)** : si le layout est trop chaotique après rendu, alternative possible = cercle unique avec note textuelle sur les 3 validateurs (au prix de perdre l'enseignement).
- [ ] **D1 + 3 flèches `non`** vers les 3 branches : même problème potentiel qu'en phase 2.
- [ ] **L1 (dossier validé) vs L2 (commandes émises)** : maintenir 2 livrables séparés est défendable mais peut alourdir. À évaluer si on garde la séparation ou si on fusionne en "Dossier technique + commandes".
- [ ] **Validation écoconception non matérialisée** : transversale aux 3 validateurs sur leur périmètre. Peut donner l'impression que l'éco "tombe" sans contrôle. Option alternative : ajouter une mention "validation transversale éco" sur les 3 cercles S2 (labels chargés).
- [ ] **Étape E7 (passer commandes)** : action opérationnelle, parfois faite par le responsable projet et pas par l'équipe étudiante. À clarifier : qui clique sur "valider la commande" dans l'outil école ?

### Phase 5 — intégration et tests
- [ ] **Double sortie de D1** (`banc inadapté` vers E3 + `pièce défaillante` vers E2) : visuellement chargé. À évaluer après rendu.
- [ ] **D4 → L1 dans les deux cas** (oui/non, écart documenté) : visuellement bizarre. Alternative : un seul nœud `L1` précédé d'un nœud "documenter écarts si nécessaire".
- [ ] **Soutenance de mi-parcours / jalons intermédiaires** : pas matérialisés. À ajouter si l'école impose des points de contrôle en cours de phase.
- [ ] **Train final L1 → 3 bilans → E8 → E9 → S1 → L2 → L3** : 8 nœuds en série après L1, longueur LR potentiellement excessive. Si trop long, empiler L2 et L3 en colonne plutôt qu'en ligne.
- [ ] **Sous-graphe APPRO_FAB déséquilibré (2 branches)** : si le déséquilibre rend mal visuellement, possibilité d'ajouter un nœud info "Préparer environnement de déploiement final" pour symétriser.
