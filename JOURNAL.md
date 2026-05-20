# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).

---

## 2026-05-21 — Flowcharts phase 1 et 2 + pipeline Mermaid → SVG

### Création du dossier et structure
- `_drafts/flowcharts/` créé (dossier hors site, document de travail conformément à la décision du 20/05)
- Méthode d'inventaire actée : **B — par phase** (vs brut total ou par typologie). Permet de produire le matériau directement exploitable pour le flowchart de la phase, fait émerger les transverses naturellement.

### Pipeline de rendu Mermaid → SVG
- **Problème déclencheur** : le rendu Mermaid dans Obsidian devient illisible dès qu'un flowchart dépasse la largeur d'écran (pas de scroll horizontal pratique). Bascule sur SVG fichier pour pouvoir zoomer/dézoomer dans un visualiseur d'image.
- Choix : **install `@mermaid-js/mermaid-cli` en devDependency + script Node** qui parcourt `_drafts/flowcharts/`, extrait les blocs Mermaid des `.md`, génère un SVG par bloc dans le même dossier.
- Création de `scripts/render-flowcharts.mjs` + ajout du script `flowcharts` dans `package.json`.
- Cache mtime : SVG sauté si plus récent que `.md`. `npm run flowcharts -- --force` pour tout regen.
- Convention de nommage : 1 bloc Mermaid dans `foo.md` → `foo.svg`. N blocs → `foo-1.svg`, `foo-2.svg`, etc.
- Couleur de fond : transparent (`-b transparent`).

### Incident Windows — `spawn EINVAL`
- Premier lancement échoué : `spawn EINVAL` sur les deux fichiers `.md`.
- Cause : depuis Node 20, `child_process.execFile` n'autorise plus l'exécution directe de `.cmd` / `.bat` sans `shell: true`. Le binaire mmdc s'appelle `mmdc.cmd` sur Windows.
- **Résolution** : ajout `{ shell: true }` dans l'appel `execFileAsync`.
- **Leçon méthodo** : sur Windows, tout binaire installé via npm en mode wrapper (`.cmd`) nécessite `shell: true` avec Node ≥ 20. À retenir pour les futurs scripts qui appellent des CLI npm.

### Flowchart phase 1 — spécification technique

#### Inventaire produit
6 étapes (contextualiser → rencontre client + bête à cornes → étude existant → CdCF : formaliser fonctions + caractériser → planifier → rédiger), 4 décisions, 3 synchros, 2 livrables évalués.

#### Décisions structurelles
- **Boucle rencontre client ↔ formalisation bête à cornes** : aller-retour explicite jusqu'à stabilisation (D2). La bête à cornes est **un** outil, pas l'outil.
- **Étude de l'existant simplifiée** : initialement avec losange « solution existante répond directement ? » + bloc « Re-cadrer le projet ». **Supprimé** : en projet étudiant, on ne fait pas de recherche fondamentale, l'existant est presque toujours disponible. L'étude vise à identifier les briques réutilisables et le point de départ simple, pas à décider de pivoter.
- **Subgraph CdCF englobant** : formalisation des fonctions (FP/FC/FS), caractérisation et losange de validation regroupés dans un subgraph titré « Cahier des Charges Fonctionnel ». Matérialise visuellement que les deux étapes constituent un même livrable.
- **D-CdCF** : reformulé en **« CdCF défendable en soutenance ? »** (vs « caractérisation complète ? »). Plus projetant pédagogiquement, embarque implicitement couverture des fonctions + SMART des critères.
- **Pas de constitution d'équipe en tête de phase** : décision actée. Ne pas inciter à la répartition des rôles (les élèves doivent rester polyvalents).
- **Transverses intégrées au flowchart de phase** : nœud GP « jalons + risques » après le contexte, nœud ESE « première lecture environnementale » avant la rédaction du CdCF. Stratégie **β + γ** actée (transverses injectées aux points d'ancrage clés ET détaillées dans leurs propres flowcharts à venir).

#### Sémantique visuelle posée
- **Flèches pleines** : flux normal + boucles d'itération normales (« non, à retravailler »)
- **Flèches pointillées** : vraies rétroactions (remise en cause profonde d'un travail validé)

#### Validation
Rendu propre, subgraph CdCF lisible, validation utilisateur sans modification.

### Flowchart phase 2 — concept

#### Cadrage
- **Périmètre** : architecture + pré-dimensionnement. Les composants définitifs viendront en phase 4. « Solutions retenues » ≠ « composants finaux ».
- **Découpage disciplinaire visible** : 3 branches élec/méca/info dans le flowchart. Pédagogiquement crucial pour enseigner les **conflits inter-disciplines** (l'optimum local de chaque discipline n'est pas nécessairement compatible avec celui des autres).
- **Matrice de décision en phase 2** : une matrice par sous-système, critère écoconception intégré dans la matrice (pas traité à part). C'est le choix pédagogique fort : l'éco est embarqué dans la décision, pas plaqué à la fin.
- **FAST** : étape commune avant l'éclatement disciplinaire (vs un FAST par discipline).

#### Décisions structurelles
- **Synchro inter-disciplines (S2) + losange D-compat** : moment pédagogique central. Après les matrices, point de vérification que les solutions retenues sont compatibles entre elles. Si non, retour aux matrices avec contraintes mises à jour.
- **Pré-dimensionnement post-architecture** : par discipline (3 nœuds parallèles), décision D-predim à la sortie.
- **Rétroactions sortantes vers phase 1** : D1 (décomposition révélant un trou dans le CdCF) et D5 (remise en cause profonde à la présentation). Matérialisées par un nœud trapézoïde `FB_PHASE1` avec classe de style dédiée (`feedback`, fond ambré pointillé).

#### Renommages débattus
- **« Schéma bloc fonctionnel » → « Décomposition fonctionnelle du système »** : terme neutre disciplinairement (vs marqué élec/automatique). La fiche-tuto `schema-bloc-fonctionnel` reste **un** outil mobilisable, pas le seul. SADT/IDEF0 évoqués comme alternatives, fiches à créer plus tard.

#### Layout — difficultés persistantes
- **Bascule TD → LR** à mi-session : suite à la découverte que le flowchart dépasse la largeur d'écran Obsidian. Le SVG permet maintenant de s'étaler librement.
- **Convention `IO_LEFT`** : subgraph invisible (titre vide, `fill:none, stroke:none`) englobant `START` et `FB_PHASE1` en TB. Permet d'ancrer les deux nœuds en colonne gauche du graphe LR, START en haut, FB_PHASE1 en bas. À réutiliser sur les autres phases.
- **Subgraph PREDIM résolu** : 3 nœuds plats en TB — layout impeccable.
- **Subgraph BRANCHES non résolu** : malgré plusieurs stratégies (sous-subgraphs LR/TB, sous-subgraphs aplatis, liens invisibles `~~~` pour forcer la grille 2×3), Mermaid LR + dagre n'arrive pas à produire un layout propre des 6 nœuds (E3e/E4e/E3m/E4m/E3i/E4i). Tentative ELK (`%%{init: {'flowchart': {'defaultRenderer': 'elk'}} }%%`) abandonnée pour ne pas bloquer la session. **Reporté dans BACKLOG**. SVG actuel laid mais accepté comme « assez bon » pour passer à la phase suivante.

#### Conventions visuelles ajoutées
- **3 couleurs disciplines (ad-hoc)** : élec `#D6E8F5` / stroke `#3B6EA8` (bleu clair), méca `#F5E8D6` / stroke `#A87B3B` (ocre clair), info `#D6F5E0` / stroke `#3BA85A` (vert clair). Trois classDef dédiées : `elec`, `meca`, `info`.
- **Suffixe disciplinaire en bout de label** : `(élec)` / `(méca)` / `(info)`. À acter comme convention après plusieurs flowcharts produits.
- **À réutiliser** sur toutes les phases avec éclatement disciplinaire (concept, PoC, dossier technique, intégration probable). Harmonisation avec palette callouts v1 reportée dans BACKLOG.

### Cadrage phase 3 — preuve de concept (amorcé, reprise en nouvelle session)
Inventaire complet posé en fin de session :
- 8 étapes (énoncé PoC, choix composants représentatifs, acquisition matériel, banc de test, réalisation, mesure, analyse, rapport)
- 5 décisions, 4 synchros, 2 livrables évalués
- Transverses : GP (mise à jour risques), ESE (éco partielle = premières mesures réelles)
- Rétroactions sortantes : vers phase 2 ou phase 1 si concept intenable

**3 questions ouvertes** à trancher en début de prochaine session :
1. Structure des branches de réalisation (3 disciplines ? unifié ? « par point dur » ?)
2. Acquisition matériel comme étape distincte avec décision sortante ?
3. Nombre de sorties du losange D-PoC (2 ou 3 ?)

**Stratégie d'enchaînement** : phase 3 en nouvelle session pour fraîcheur cognitive (session du 21/05 déjà dense entre 2 flowcharts et la mise en place du pipeline SVG).

### Décisions reportées (toujours en attente)
- Toutes celles de la session précédente
- **Layout du subgraph BRANCHES (phase 2)** : voir BACKLOG. Pistes ELK / abandon de la grille / outil hors Mermaid.
- **Palette couleurs disciplines** : harmonisation avec callouts v1 — voir BACKLOG.

---

## 2026-05-20 (suite) — Fiche-notion `bete-a-cornes` + stratégie d'enchaînement

### Production de la fiche
- `content/fiches/proj/bete-a-cornes.md` rédigée intégralement (8 sections, popover de 3 phrases, exemples triptyque bon/moyen/mauvais)
- Cas support : **bras robotique pédagogique 6 axes** pour écoles d'ingénieurs (situation projet réaliste pour le public visé, alternative défendue à la couveuse)
- Format des exemples : callouts `[!failure]` / `[!warning]` / `[!example]` avec **image SVG dédiée par cas** (vs listes à puces). Bloc "Coût réel de cette erreur" ajouté sur le mauvais cas (anecdote vécue : choix prématuré de servomoteurs, bascule sur steppers après 2 mois)

### Production des SVG
- 4 SVG produits dans `content/ressources/img/` :
  - `bete-a-cornes-generique.svg` — schéma canonique (2 ovales en haut formant les "cornes", rectangle produit/service au centre, flèche vers rectangle FONCTION en bas)
  - `bete-a-cornes-bras-mauvais.svg`
  - `bete-a-cornes-bras-moyen.svg`
  - `bete-a-cornes-bras-bon.svg`
- Style cohérent avec `cycle-v-projet.svg` : palette amber (#BA7517), gestion native du mode sombre via `@media (prefers-color-scheme: dark)`, marker flèche réutilisé
- **Itération sur le générique** : première version partait du modèle "système central avec 3 branches" ; refait sur le modèle canonique "cornes vers le haut + flèche vers le bas" après référence visuelle apportée par l'utilisateur. **Retenir** : pour les outils canoniques (bête à cornes, pieuvre, FAST), partir d'une référence visuelle de la littérature plutôt que d'inventer une variante — les étudiants doivent reconnaître l'outil dans d'autres sources.

### Retour dans `specification-technique`
- Placeholder image étape 1 remplacé par l'image SVG réelle (edit ciblé via `edit_file`)

### Incident Dark Reader (à retenir)
- Faux bug de rendu : fond brun foncé `#221818` observé en mode clair sur les pages contenant des callouts
- Cause : extension navigateur **Dark Reader** active sur localhost, qui repère les `<blockquote class="callout">` et leur applique un fond sombre par-dessus le CSS Quartz
- Diagnostic : confirmé par traces `data-darkreader-inline-stroke` dans le HTML rendu
- Résolution : désactiver Dark Reader sur localhost et sur le site déployé (Quartz a son propre mode sombre natif, Dark Reader fait doublon et altère l'aperçu)
- **Leçon méthodo** : avant de chercher un bug CSS, vérifier les extensions navigateur actives (Dark Reader, Stylus, uBlock Origin, etc.).

### Stratégie d'enchaînement actée (deux temps)

**Première décision** : 
- Ordre de production : fiches-trame (cycle en V dans l'ordre) → fiches-tuto associées → fiches-notion → glossaire
- Liens rouges pendant la rédaction des trames : assumés, tracking dans BACKLOG.md (option (a)). Pas de stubs systématiques.
- Profondeur : finaliser chaque trame avant la suivante (vs MVP bout en bout)

**Révision spontanée par l'utilisateur** : avant de plonger sur l'approfondissement de `specification-technique`, **fabriquer la trame complète bout en bout** pour avoir un guide cohérent avec les compétences à évaluer.

**Stratégie finale** :
1. Squelettes des 5 trames + 3 fils transverses (front matter complet + posture + objectif + démarche en titres d'étapes seulement + livrable principal + voir aussi). `draft: false` pour navigabilité.
2. Cartographie systématique des 107 AA → phases/transverses, identification des trous.
3. Validation cohérence d'ensemble (relecture bout en bout, ajustements de périmètre).
4. Approfondissement trame par trame dans l'ordre du V, en commençant par `specification-technique` étapes 2 à 6.

**Rationnel** : permet de positionner correctement chaque AA et chaque fil transverse avant de creuser, évite les retours en arrière sur les décisions de périmètre inter-phases.

### 2ᵉ révision (fin de session) : flowchart macroscopique avant squelettisation

Avant même de commencer la squelettisation, l'utilisateur propose une **étape zéro** : produire un flowchart macroscopique du parcours projet qui montre **les chemins réels** (pas seulement la séquence des phases).

**Rationnel utilisateur** : *« Le cycle en V n'a qu'une porte d'entrée (le CdCF), mais dès le PoC ou les choix de solutions, des embranchements se créent (tutos méca/élec/info), des boucles de rétroaction pour validation, des attentes inter-équipiers. »*

**Pourquoi c'est meilleur que la squelettisation séquentielle** :
- Honnêteté pédagogique : un projet mécatronique est un graphe, pas une ligne droite
- Inventaire structurel des fiches à produire (chaque nœud du graphe = fiche potentielle)
- Rend visibles les points de synchronisation inter-équipiers (compétence MEO concrète)
- Le flowchart devient outil d'auto-positionnement pour l'étudiant : *« où suis-je dans mon projet ? »*

**Stratégie définitive (au 20/05 fin)** :
1. **Étape zéro** : flowchart macroscopique du parcours projet (prochaine session)
2. Squelettes des trames + transverses (la liste sera potentiellement révisée à partir du flowchart)
3. Cartographie AA
4. Validation cohérence
5. Approfondissement trame par trame

**Éléments à trancher en début de prochaine session** — **TOUS TRANCHÉS EN FIN DE SESSION DU 20/05** :
- Granularité : **N3** (décisions + synchros visibles, zoom N4 local si besoin)
- Format : **Mermaid**, organisé en **5 flowcharts détaillés + 1 vue d'ensemble macro**. Les rétroactions inter-phases (PoC échec → retour spec/concept, qualif échec → retour dossier) seront portées par la vue d'ensemble macro, pas diluées dans les flowcharts détaillés.
- Sémantique visuelle validée : rectangles=étapes, losanges=décisions, cercles=synchros inter-équipiers, doubles cercles=livrables évalués, flèches pleines=flux normal, flèches pointillées=rétroactions, fond couleur=discipline (aligné palette callouts v1).
- Position : **hors site pour l'instant**, dans `_drafts/flowcharts/`. Mention explicite : « document de travail, on verra selon la qualité du résultat si on l'intègre au hub ». Choix d'un meilleur outil que Mermaid différé à d'éventuelle publication.
- Périmètre disciplinaire : **inflexion actée**. Initialement le tutoriel devait servir d'**interface** vers les cours collègues (méca, fabrication) sans refaire leur travail. Décision révisée : on **modélise complètement** la structure méca/fabrication dans le flowchart et on crée des **fiches vides** correspondantes. Rationnel utilisateur : *« avec un peu de chance j'arriverai à embarquer un collègue dans ce projet pour les compléter »*. C'est un pari raisonnable : la coquille existe, le collègue n'a plus qu'à remplir. Si le pari échoue, la coquille reste comme stub renvoyant vers le cours du collègue — statu quo de la posture initiale, sans perte.
- Périmètre prochaine session : **inventaire + construction des 6 flowcharts en Mermaid**. Le cadrage est déjà acquis en fin de cette session.

### Décisions reportées (toujours en attente)
- Toutes celles de la session précédente
- **Politique extensions navigateur pour validation visuelle** : recommander la désactivation de Dark Reader (et similaires) sur le domaine du site

---

## 2026-05-20 — Fiche-trame `specification-technique` (étape 1)

### Structure type d'une fiche-trame actée
Première fiche-trame du projet. Structure décidée par construction puis éprouvée sur le cas réel de la phase 1 :

- **Front matter spécifique** : `type: trame`, `phase: N`, `phases: [nom]`, en plus des champs standards.
- **7 sections de corps** :
  1. Définition popover (1-3 phrases en tête)
  2. **Posture attendue** — italique étudiant court, plante l'ambiance
  3. **Objectif de la phase** — la promesse de fin (3-5 lignes)
  4. **Démarche** — étapes ordonnées, callouts `[!livrable]` placés en fin d'étape
  5. **Pièges fréquents**
  6. **Pendant cette phase, côté équipe** — fusion interfaces métiers + fils transverses
  7. **Voir aussi**

### Décisions de structure
- **Fusion "interfaces métiers" + "fils transverses"** dans une seule section "Pendant cette phase, côté équipe". Rationnel : même registre cognitif pour l'étudiant (attention aux dépendances), et les fiches-trame ne portent pas l'évaluation (c'est le corps enseignant qui évalue, les fiches sont une aide à la création).
- **Pas de section "critères de fin de phase"** : les livrables au fil de la démarche jouent ce rôle.
- **Pas de "position dans le cycle"** : redondant avec le hub.
- **Pas de "durée estimée"** : effet repoussoir si la durée dépasse une heure de lecture.
- **Un callout `[!livrable]` groupé par étape** : préféré à un callout par sous-étape (dilution). Liste à puces à l'intérieur.

### Découpage de la phase 1 en 6 étapes
1. Analyser le besoin (contextualiser → bête à cornes → valider)
2. Étudier l'existant (état de l'art technique chiffré, comparaison N×M)
3. Formaliser les fonctions (pieuvre NF X50-151)
4. Caractériser les fonctions (étape **centrale**, exemples bon/moyen/mauvais)
5. Planifier le projet (WBS + rétroplanning depuis la soutenance)
6. Rédiger le CdCF (agrégation, intègre la démarche environnementale)

### Cadrage méthodologique
- **NF X50-151 (AFNOR)** retenue, avec mention explicite "norme française, payante".
- **Ouverture sur autres modèles** (INCOSE, ingénierie système, user stories anglo-saxonnes) prévue en fin de fiche pour les étudiants partant à l'étranger.
- **FAST reporté en phase 2 (concept)** : prématuré en phase 1 où le concept n'est pas encore choisi.
- **SMART non détaillé dans la fiche-trame** : sera traité dans une fiche-tuto dédiée `definir-un-objectif-smart` (MEO).
- **Grille d'évaluation CdCF transmise par l'utilisateur** : consultée pour calibrer la couverture, **mais pas mise en référence dans la fiche** (la grille passera bientôt à une évaluation par compétences, donc évolutive).

### Décisions éditoriales
- **Cas particulier "projet école sans client réel"** : encart dédié dans l'étape 1. Deux postures honnêtes proposées — étudiant-client-de-lui-même (acquisition de compétences ciblées, défendable en école mais pas en pro), ou client fictif crédible.
- **Exemples bon/moyen/mauvais** : approche pédagogique systématique pour les éléments les plus structurants (caractérisation, bête à cornes).
- **AFNOR NF X50-151** : pas de lien externe inline. Fiche-stub `afnor-nfx50-151.md` créée avec lien Wikipédia + mention payante, sert de popover propre.
- **Lien Wikipédia AFNOR** : article "Analyse fonctionnelle (conception)" — ressource pédagogique francophone plutôt que page d'achat AFNOR.
- **Traces écrites de validation client** : abordées ici mais méritent fiches-tuto dédiées à créer (`relation-client`, `archivage-projet`).

### Production de la fiche
- `content/fiches/proj/specification-technique.md` créée. **Étape 1 entièrement rédigée**, étapes 2-6 en placeholders explicites (titres + 2-3 lignes de cadrage).
- 4 callouts dans l'étape 1 : `[!warning]` (verrous), `[!example]` (couveuse), `[!tip]` (bête à cornes triviale), `[!livrable]` (groupé fin d'étape).
- Front matter avec `type: trame` et `phases: [specification]` — **première vraie utilisation** des champs actés la veille.
- Popovers posés : `mecatronique`, `ecoconception`, `relation-client`, `bete-a-cornes`, `pcb`, `ppm`, `pid` (existant), `cahier-des-charges-fonctionnel`, `afnor-nfx50-151`, `concept`, `archivage-projet`.

### Stub AFNOR
- `content/fiches/proj/afnor-nfx50-151.md` créée. Trois lignes de définition + callout `[!info]` avec lien Wikipédia et mention que la norme officielle est payante. Taggée `stub` pour la distinguer des vraies fiches-notion.

### À retenir méthode
- **Ne pas écraser le travail de l'utilisateur** : bascule de `write_file` (écrase tout) à `edit_file` (patches ciblés) actée en cours de session. Discipline : relire le fichier avant toute modification.

### Décisions reportées (toujours en attente)
- Toutes celles de la session précédente, plus :
- **Glossaire vs fiches courtes pour acronymes** : `ppm` ajouté comme prospect pour le glossaire (vs `pcb` qui aura sa fiche-tuto dédiée). À trancher quand la décision globale sera prise.
- **Template fiche-trame formel** : à extraire **après** une 2ème fiche-trame rédigée (probablement `preuve-de-concept`).

---

## 2026-05-19 (suite 2) — Trame projet : cycle en V

### Cadrage de la trame
- **Décision structurante : cycle en V à 5 phases** (vs séquence linéaire ou liste de livrables) :
  1. **Spécification technique** (besoin, état de l'art, cibles, intègre l'analyse du besoin)
  2. **Concept** (schémas, pré-dimensionnement)
  3. **Preuve de concept** (dérisquage des points durs)
  4. **Dossier technique** (plans, élec, soft, BOM intégré)
  5. **Intégration et tests** (prototype, qualif, clôture/REX intégrés)
- **PoC remonté avant le dossier technique** : choix pédagogiquement et techniquement plus sain que la version école initiale (PoC après dossier). Enseigne le **dérisquage amont** comme compétence ingénieur.
- **Fils transverses** (renommés "En parallèle de toutes les phases" pour clarté étudiant) : gestion de projet, écoconception, sécurité/qualité. Évalués transversalement, pas dans une phase dédiée.
- **Itératif différé** : la trame v1 est affichée en linéaire pour structurer la rédaction. Les boucles de retour seront ajoutées en v2.
- **Vocabulaire** : français pour tout le tutoriel. Version anglaise éventuelle hors scope (très long terme).

### Typologie de fiches formalisée
Trois types de fiches distincts, à indiquer en front matter (`type:` ou via les `tags`) :
- **Trame** — phases du cycle en V. Dense, détaillée. Livrable de phase évalué.
- **Tuto** — mise en œuvre d'un outil ou méthode (IDE, GPIO, PID numérique, etc.). Souvent évalué via livrable concret.
- **Notion** — rappels courts (tension, résistance, couple, force) faisant le pont avec d'autres cours. Non évaluée chez Tim.

**Statut `schema-bloc-fonctionnel`** : reclassée en **tuto** (méthode produisant un livrable évalué), pas en notion. Reste dans `fiches/eee/`, juste son `type:` change le moment venu.

### Arborescence : domaine + champ `phases:`
- **Décision actée** : on garde l'arborescence physique par domaine (cohérence référentiel, agréable enseignant) et on ajoute un champ `phases:` en front matter listant les phases où la fiche est mobilisée. L'étudiant aura deux entrées dans le site (par parcours, par domaine).
- Première utilisation : `hub/index.md` qui liste les 5 phases dans son front matter.
- À documenter dans les futurs templates de fiches.

### Production de la fiche hub
- Fiche **fusionnée dans `content/hub/index.md`** (l'ancien index par domaine est devenu le hub principal du site, avec une section "Entrée par domaine" qui récupère les liens d'origine).
- Ancien fichier `content/hub/parcours-projet.md` créé en cours de session puis supprimé après la fusion.
- Format spécifique fiche-hub (pas le template "1 notion = 1 fiche") : définition popover, schéma SVG, sommaire numéroté à ancres, une section par phase, fils transverses, typologie des fiches, entrée par domaine. **Pas de section "Voir aussi"** sur les fiches-hub (la fiche EST une page de liens).

### Schéma SVG du cycle en V
- **Décision politique d'images actée** : `content/ressources/img/` adopté pour toutes les images du site.
- Schéma `content/ressources/img/cycle-v-projet.svg` créé : V à 5 phases avec correspondances horizontales étiquetées ("validée par", "guide", "éclaire la conception détaillée") et bande "En parallèle" en bas.
- Couleurs : Purple (branche descendante 1-2), Amber (PoC, pivot), Teal (branche ascendante 4-5), Gray (fils transverses).
- Gestion native du mode sombre via `@media (prefers-color-scheme: dark)` dans le SVG.
- **Tentative initiale en SVG inline dans le markdown a échoué sous Quartz** (bloc vide). Bascule sur fichier externe — confirme la stratégie de stockage séparé.

### Mermaid abandonné dans la fiche hub
- Le flowchart Mermaid linéaire des 5 phases (sous le V) était redondant avec le SVG du V.
- **Remplacé par un sommaire textuel numéroté à liens-ancres** (`#1-spécification-technique`, etc.). Plus léger, plus lisible, sert de table des matières.
- Mermaid reste utilisable ailleurs sur le site (la fiche pilote `schema-bloc-fonctionnel` continue de l'utiliser pour le schéma vertical).

### Palette de callouts harmonisée
- **5 callouts natifs restylés** dans `quartz/styles/custom.scss` avec une palette alignée sur le SVG du V :
  - `[!question]` → Blue (informatif neutre)
  - `[!info]` / `[!note]` → Gray (complément discret)
  - `[!tip]` → Teal (astuce pratique)
  - `[!warning]` → Amber (piège fréquent)
  - `[!danger]` / `[!failure]` / `[!bug]` → Red (sécurité, risque réel)
  - `[!example]` → Purple light (exemple, démo)
- **2 callouts custom conservés** : `[!terrain]` (orange brûlé, aparté projet), `[!livrable]` (purple foncé, livrable évalué).
- Tous gèrent le mode sombre via `[saved-theme="dark"]`.

### Fiche de doc des callouts
- Créée à `content/_templates/callouts.md` : panorama de tous les callouts avec sémantique d'usage, exemples markdown et exemples rendus.
- **Règle générale** documentée : un callout n'est pas un effet de mise en page. Viser 0 à 3 callouts par fiche sauf cas justifié (fiche-trame avec un `[!livrable]` par phase). En abuser dilue leur force visuelle.
- **Usage strict de `[!livrable]`** : à utiliser uniquement pour les livrables qui correspondent à une compétence évaluée. À garder en tête lors de la rédaction des fiches.

### Décisions actées en cours de session
- **Trame projet** : cycle en V à 5 phases (vs cascade linéaire ou cycle en V école strict)
- **Typologie** : 3 types de fiches (trame, tuto, notion) déclarés en front matter
- **Arborescence** : par domaine + champ `phases:` pour double entrée parcours/domaine
- **Politique d'images** : `content/ressources/img/` pour tout
- **Hub principal** : `content/hub/index.md` (fusion), pas de fiche `parcours-projet.md` séparée
- **SVG hors markdown** : toujours en fichier externe (l'inline ne passe pas sous Quartz)
- **Vocabulaire** : 100 % français
- **Palette callouts v1** : 8 callouts alignés sur le V, première itération à raffiner avec l'usage

### Décisions reportées (toujours en attente)
- **Convention de tags AA** : session dédiée à programmer
- **Stratégie fiches MME/ESE** : pages courtes pointant vers collègues, ou rien ?
- **Glossaire vs fiches courtes** pour acronymes : à voir à l'usage
- **Charte couleur / identité visuelle complète** : nouvelle décision en attente, à traiter quand on aura plus de matière
- **Pliage des callouts** (`[!example]-` replié par défaut ?) : à trancher après quelques fiches rédigées
- **Sort du flowchart Mermaid commenté** dans hub : finalement supprimé, sommaire textuel suffit

---

## 2026-05-19 (suite) — Installation PC perso

### Outils installés et vérifiés
- Git for Windows : déjà présent (le `git clone` initial avait fonctionné avant début de session)
- Node.js v22 LTS : déjà présent
- Obsidian : installé + vault ouvert sur `C:\Users\turko\Documents\TheSkillCodex`

### Configuration Git PC perso
- `user.name` = `TimTurko`
- `user.email` = `turko.tim@gmail.com`
- Remote `origin` correctement branché en fetch + push sur `https://github.com/TimTurko/TheSkillCodex.git`
- Branche `main` synchro avec `origin/main`

### Obsidian Git
- Plugin auto-rapatrié via `.obsidian/` versionné — **validation du choix de versionner la config Obsidian** : zero reconfiguration manuelle sur le 2ème poste, gain de temps confirmé
- Cycle test pull → édit → commit-and-sync → vérif GitHub : OK

### Note ajoutée a posteriori (session du 2026-05-19 suite 2)
- `npm install` est obligatoire **une fois par poste** pour faire tourner `npx quartz build --serve` en local. Oublié à l'installation PC perso, identifié au moment du premier rendu local de la fiche hub.

### Bilan
- Workflow multi-poste opérationnel : PC pro + PC perso peuvent maintenant alterner sans friction
- Smartphone reste en consultation seule (décision précédente confirmée)
- Discipline Git à maintenir : pull à l'arrivée, push au départ sur chaque poste

---

## 2026-05-19 — Mise en place initiale

### Infrastructure
- Création dépôt GitHub `TimTurko/TheSkillCodex` (public)
- Git configuré sur PC pro
- PAT créé avec scope minimal (repo + workflows)
- Obsidian installé sur PC pro + plugin Obsidian Git
- Convention de discipline Git : pull à l'arrivée, push au départ

### Quartz
- Quartz v4 installé dans le dépôt (un seul dépôt, pas de submodule)
- Configuration personnalisée : titre "TheSkillCodex", locale fr-FR, baseUrl `timturko.github.io/TheSkillCodex`
- Pas d'analytique (choix de simplicité au démarrage)
- Workflow GitHub Actions `deploy.yml` créé sur branche `main`
- GitHub Pages activé avec source "GitHub Actions"
- **Site déployé** : https://timturko.github.io/TheSkillCodex/

### Structure de contenu
- Arborescence `content/` créée :
  - `hub/` (parcours pédagogique)
  - `fiches/{eee, mia, meo, proj, mme, ese}/` (6 domaines)
  - `ressources/` (médias, datasheets)
  - `_templates/` (modèles de fiches)
- 9 fichiers `index.md` créés, un par dossier
- `content/index.md` racine (page d'accueil du site)

### Conventions éditoriales fixées
- **Noms de fichiers** : kebab-case (`cahier-des-charges-fonctionnel.md`)
- **Front matter YAML** : title, tags, prerequis, aa, draft
- **Pas de H1 dans le corps** : Quartz génère le titre depuis le front matter
- **Définition popover** : premier paragraphe de la fiche, autoportant, 1-3 phrases
- **Structure de fiche** : sections suggérées en commentaires HTML, l'auteur garde ce qui sert
- **Sections type** : `À quoi ça sert ?` → `Comment le réaliser ?` → `Exemple` → `Cas particuliers` → `Pièges` → `Aller plus loin` → `Voir aussi` (toutes optionnelles sauf "Voir aussi")
- **Politique du gras** : uniquement sur concepts-clé en 1ère occurrence. Exception tolérée : gras "structurel" (têtes de paragraphes-pièges, mots de scan dans listes à puces)
- **Liens popovers** : approche A — liens directs `[[notion]]`, le rouge sert de TODO list
- **Apartés étudiants** : intégrés dans le texte en *italique* (pas de callout dédié)
- **Justification du texte** : justifié sur écran large avec césure auto, drapeau sur smartphone (<600px)

### Personnalisations CSS (`quartz/styles/custom.scss`)
- Justification des paragraphes d'article + césure auto (désactivée sous 600px)
- Centrage horizontal des diagrammes Mermaid
- Callout custom `[!terrain]` couleur orange brûlé (réservé pour usages futurs type avertissement, note méthodo)

### Fichiers de suivi de projet
- `TODO.md` — court terme, actionnable
- `BACKLOG.md` — long terme, idées en réserve, fiches à rédiger par domaine
- `JOURNAL.md` — mémoire datée (ce fichier)
- Méthode : mise à jour à la fin de chaque session

### Fiche pilote
- `fiches/eee/schema-bloc-fonctionnel.md` créée et raffinée en plusieurs itérations
- Validation : template, liens internes, rendu Mermaid (vertical, centré), conventions de gras minimal
- 10 popovers en liens directs (capteur, actionneur, effecteur, controleur, microcontroleur, frontiere-systeme, boucle-ouverte-boucle-fermee, pwm, asservissement, pid, cahier-des-charges-fonctionnel)
- 2 apartés étudiants intégrés en italique

### Décisions reportées
- **Convention de tags AA** : session dédiée à programmer (pas de décision rapide)
- **Politique de stockage des images** : à définir
- **Glossaire séparé vs fiches courtes** pour acronymes : à voir à l'usage
- **Stratégie fiches MME/ESE** : pages pointant vers collègues, ou rien du tout ?

### Référentiel
- Analyse de `Compétences.xlsx` : 107 dénominations regroupées en 27 codes-AA uniques, 6 domaines
- Note : `AA-PROJ-C03-CFE3-01` mélange MIA (objet connecté) et MME (fabrication) — anomalie référentiel à signaler à terme

### Décisions calées en fin de session
- **Smartphone en consultation seule** : pas d'install Obsidian mobile, le smartphone consulte directement le site déployé. Édition uniquement sur PC pro et PC perso. Cohérent avec le principe "écran vertical court = lecture, pas écriture". Évite aussi les conflits Git à 3 appareils.
- **Démarrage de session automatisé** : ajout aux instructions du projet Claude.ai des consignes pour lire JOURNAL.md et TODO.md au démarrage de chaque conversation, et pour proposer une mise à jour à la fin de session.
- **OS PC perso** : Windows 11 (cohérent avec PC pro). Le guide d'installation initial est directement réutilisable.

---
