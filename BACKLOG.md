# BACKLOG — TheSkillCodex

> Fichier privé (non publié). Idées et notions à traiter "un jour".
> Pas d'ordre, pas de priorité. On y déverse, on y pioche selon l'inspiration.

## Fiches-trame à rédiger (phases du cycle en V)

Ces fiches forment l'épine dorsale du parcours étudiant. Voir le hub `content/hub/index.md` pour la trame complète.

- [ ] `hub/specification-technique` — phase 1 du V
- [x] ~~`hub/concept` — phase 2 du V~~ — squelette fait le 22/05 dans `content/fiches/proj/concept.md`
- [x] ~~`hub/preuve-de-concept` — phase 3 du V (point pivot du V)~~ — squelette fait le 22/05 dans `content/fiches/proj/preuve-de-concept.md`
- [x] ~~`hub/dossier-technique` — phase 4 du V~~ — squelette fait le 22/05 dans `content/fiches/proj/dossier-technique.md`
- [x] ~~`hub/integration-et-tests` — phase 5 du V~~ — squelette fait le 22/05 dans `content/fiches/proj/integration-et-tests.md`
- [ ] `hub/gestion-de-projet` — fil transverse
- [ ] `hub/ecoconception` — fil transverse
- [ ] `hub/securite-et-qualite` — fil transverse

À noter : l'emplacement acté implicitement par la session du 22/05 est `content/fiches/proj/` (et non `content/hub/`). Le hub reste un point d'entrée vers ces fiches, pas leur conteneur.

## Fiches à rédiger — par domaine

### EEE — Électronique
- [ ] PWM (modulation de largeur d'impulsion)
- [ ] PID (régulateur proportionnel-intégral-dérivé)
- [ ] Asservissement
- [ ] Microcontrôleur (vs contrôleur générique)
- [ ] Alimentation d'un système embarqué
- [ ] Pull-up / pull-down
- [ ] Niveau logique (3.3V, 5V, compatibilité)
- [ ] ADC / DAC
- [ ] Filtrage analogique de base
- [ ] Masse électrique, plan de masse
- [ ] Découplage (condensateurs)
- [ ] **PCB** (fiche-tuto : concevoir et faire fabriquer un PCB pour un projet étudiant)

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
- [ ] Cahier des charges fonctionnel (mentionné 3 fois dans le hub, prioritaire)
- [x] ~~Bête à cornes~~ — fait le 20/05 (fiche-notion complète + 4 SVG)
- [ ] **Décomposition fonctionnelle** (notion-mère, distincte de `schema-bloc-fonctionnel` qui n'est qu'un des outils possibles — popover posé dans `concept.md` étape 1 le 22/05)
- [ ] **Matrice de décision** (popover posé dans `concept.md` le 22/05, centrale pour la phase concept et la preuve de concept)
- [ ] Analyse fonctionnelle (FAST, SADT, pieuvre) — découper ?
- [ ] Mécatronique (fiche-notion racine, emplacement à arbitrer)
- [ ] Frontière du système
- [ ] Revue de projet
- [ ] Jalons et livrables
- [ ] Gestion des risques projet
- [ ] Approche-test / itération
- [ ] Critères de comparaison de solutions
- [ ] État de l'art (méthodologie)
- [ ] Schéma cinématique
- [ ] Chaîne d'énergie
- [ ] Pré-dimensionnement (méthodologie)
- [ ] Nomenclature / BOM
- [ ] Plan de qualification produit
- [ ] Retour d'expérience (REX)

### MEO — Méthodes et organisation
- [ ] Outils collaboratifs (ODJ, CR, planning)
- [ ] Outils de créativité (brainstorm, SCAMPER, etc.)
- [ ] Prise de décision collective
- [ ] Gamme de fabrication
- [ ] **Relation client** (tuto) — valider la compréhension du besoin, posture en réunion client, gestion des changements de demande
- [ ] **Archivage projet** (tuto) — CR de réunion, traçabilité documentaire, versioning des livrables
- [ ] **Définir un objectif SMART** (tuto)
- [ ] **Rétroplanning** ou **Planifier un projet** (tuto) — partir de la soutenance, remonter les jalons, anticiper le calendrier scolaire
- [ ] **WBS** (Work Breakdown Structure)
- [ ] **Diagramme de Gantt**

### MME — Matériaux / mécanique (interface collègues)
- [ ] Liens vers cours mécanique
- [ ] Liens vers cours fabrication

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
- [ ] SVG pieuvre générique (pour étape 3 de `specification-technique`)
- [ ] Photos de projets étudiants antérieurs avec accord (anonymisées si besoin)
- [ ] Capture d'écran de schéma Fritzing / KiCad type
- [ ] Vidéo courte de démo (intégration via embed ?)
- [x] ~~Schéma cycle en V v2 avec boucles de retour itératives~~ — fait le 21/05 suite 2 (`cycle-v-projet.svg` enrichi de 4 rétroactions ambrées, version v1 archivée)

## Améliorations site / Quartz

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

- [ ] Convention des tags AA (séparer domaine vs code complet)
- [ ] Faut-il un glossaire séparé pour les acronymes ?
- [ ] Quoi faire des fiches MME / ESE : pages très courtes pointant vers les collègues, ou ne rien créer du tout ?
- [ ] Pliage des callouts (`[!example]-` replié par défaut ?) — à trancher après quelques fiches rédigées
- [ ] Sort du flowchart Mermaid dans la fiche hub si jamais on veut le réintroduire un jour (actuellement remplacé par un sommaire textuel)
- [ ] **Politique extensions navigateur pour validation visuelle** : recommander aux utilisateurs/collègues de désactiver Dark Reader (et similaires) sur le domaine du site — à documenter dans une page "comment lire ce site" éventuelle
- [ ] **Palette couleurs disciplines (élec / méca / info)** : 3 couleurs ad-hoc définies pour le flowchart-2-concept (bleu `#D6E8F5`, ocre `#F5E8D6`, vert `#D6F5E0`). À harmoniser avec la palette callouts v1 dans une vraie itération design, puis à appliquer de manière cohérente sur **toutes les phases avec éclatement disciplinaire** (concept, PoC, dossier technique, intégration probable).
- [ ] **Convention de suffixe disciplinaire** `(élec)` / `(méca)` / `(info)` en bout de label des nœuds : à acter comme convention si retenu après plusieurs flowcharts produits.
- [ ] **Layout flowchart phase 2 — non résolu** : le subgraph BRANCHES (étude par discipline) reste chaotique malgré plusieurs tentatives (sous-subgraphs LR/TB, liens invisibles `~~~`). Pistes à explorer plus tard : (a) tester le renderer ELK via `%%{init: {'flowchart': {'defaultRenderer': 'elk'}} }%%` (peut nécessiter une mise à jour de `@mermaid-js/mermaid-cli`), (b) abandonner la grille pure et accepter un autre mode de représentation, (c) sortir complètement de Mermaid pour cette phase (SVG main, draw.io, Excalidraw). **Confirmé 21/05 suite** : le même découpage en grille 3×3 régulière (phase 3) passe sans problème. C'est spécifiquement le 2×3 rectangulaire qui coince. Si on doit résoudre ph2, symétriser en 3×3 (ajouter un 3è étage : matrice + ?) pourrait suffire.
- [ ] **Règle de visualisation des flowcharts** : préférer le SVG généré par `npm run flowcharts` au rendu Obsidian quand le diagramme devient large (Obsidian ne permet pas le scroll horizontal facile). Le SVG s'ouvre dans n'importe quel visualiseur d'image avec zoom natif.

## Points ouverts des flowcharts (21/05 suite)

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
