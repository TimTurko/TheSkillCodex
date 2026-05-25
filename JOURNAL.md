# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).
> Sessions antérieures au 22/05/2026 archivées dans `JOURNAL-archive.md`
> (mise en place initiale du dépôt, installation PC perso, trame projet cycle
> en V, flowcharts de phase).

---

## 2026-05-25 (suite 3) — Nettoyage documentaire complet (paliers 1-6)

### Périmètre de session
Session dédiée à réduire le poids des fichiers lus au démarrage de chaque conversation Claude (prompt projet + TODO + JOURNAL + BACKLOG, total mesuré à ~55 k tokens en début de session). Cible : ~15-20 k tokens. Plan en 6 paliers exécuté intégralement dans la session. PC perso, préfixe MCP `filesystem:*`.

### Audit initial — mesure du poids
| Fichier | Poids | ~Tokens |
|---|---|---|
| Prompt projet | ~9 ko | ~2,5 k |
| JOURNAL.md | 138 ko | ~35-40 k |
| TODO.md | 51 ko | ~13-15 k |
| BACKLOG.md | 22 ko | ~5-6 k |
| **Total démarrage** | | **~55 k tokens** |

Redondances identifiées : TODO « Fait » ↔ JOURNAL (massif), JOURNAL pré-22/05, 17 entrées « Commit + push de la session du XX/XX » dans TODO, TODO « Décisions éditoriales » ↔ BACKLOG « Discussions/décisions en attente », prompt §7 (conventions de fiches) externalisable, prompt §1+§8+§9 chevauchements.

### 7 questions de cadrage tranchées (niveau C, validées en bloc)

1. **Externalisation des conventions** dans un fichier dédié à la racine → `conventions.md` créé au palier 1.
2. **Section « Fait » du TODO** → 3 dernières sessions seulement, avec **rotation glissante** (suppression auto session N-3 à chaque fin de session). Intégrée à §9 du prompt v2 au palier 5.
3. **17 « Commit + push » du TODO** → consolidés en checklist unique « Rattrapage commits/pushs en retard — voir JOURNAL pour détail ». Traité au palier 3.
4. **Archivage JOURNAL pré-22/05** dans `JOURNAL-archive.md` → fait au palier 2.
5. **Démarrage automatique** = TODO + conventions.md + 3 dernières entrées JOURNAL en `head` (le JOURNAL est antichronologique). Intégré à §8 du prompt v2 au palier 5, corrigé au palier 6 (cf. ci-dessous).
6. **Méthode** = (c) audit puis refonte ciblée du prompt, plutôt que réécriture intégrale.
7. **Conventions regroupées par thème** dans `conventions.md` (Rédaction / Mise en forme / Images & SVG / Cas d'illustration / Collaboration / Publication-Quartz / En cours d'éprouvage).

### Plan d'exécution en 6 paliers (validé, exécuté intégralement)
1. **Palier 1** — Création `conventions.md` (additif, non destructeur). ✅ Fait.
2. **Palier 2** — Archivage JOURNAL pré-22/05. ✅ Fait.
3. **Palier 3** — Compactage TODO (3 sous-paliers). ✅ Fait.
4. **Palier 4** — Compactage BACKLOG (léger). ✅ Fait.
5. **Palier 5** — Refonte v2 du prompt projet. ✅ Fait.
6. **Palier 6** — Test de démarrage post-refonte. ✅ Fait.

Discipline : commit + push utilisateur avant chaque palier destructeur (3, 4, 5), pratiquée en pratique.

### Palier 1 — Création `conventions.md` (14,6 ko)
Fichier privé (non publié) à la racine du dépôt, au même niveau que TODO/JOURNAL/BACKLOG. 7 sections thématiques + 1 section « En cours d'éprouvage » pour les conventions récentes (3 dernières 25/05 suite 2 : 2 images par fiche-notion d'outil, fil rouge station météo, niveau B = texte rédigé). Dates d'acquisition entre parenthèses pour traçabilité. Centralise les 9 conventions transverses + §7 + §7bis du prompt + conventions disséminées du JOURNAL.

### Palier 2 — Archivage JOURNAL pré-22/05
- `JOURNAL-archive.md` créé (49,7 ko, 8 sessions : 19/05 ×3, 20/05 ×2, 21/05 ×3). Préambule explicatif pointant vers le JOURNAL principal.
- `JOURNAL.md` truncaté (138 ko → 89 ko). Conserve les 11 sessions du 22/05 au 25/05 (suite 2) + nouveau préambule mentionnant l'archive + commentaire HTML de fin pointant vers `JOURNAL-archive.md`.
- Gain mesuré : ~12 k tokens sur le seul JOURNAL.

### Leçon méthodo — write_file long et edit_file matching exact
- Premier `write_file` de ~85 ko du nouveau JOURNAL tronqué par limite de réponse (échec silencieux : pas de soumission, fichier inchangé). Vérification systématique post-écriture via `get_file_info` est essentielle.
- `edit_file` MCP exige matching exact du `oldText` au caractère près ; bloc multi-ko expose à des désynchronisations subtiles (whitespace, retours à la ligne, NBSP). Stratégie retenue : truncate via `write_file` après lecture préalable (head=N lignes) pour identifier la frontière exacte. `dryRun: true` utile pour tester un edit avant exécution.

### Palier 3 — Compactage TODO (51 ko → 12,5 ko, gain ~75 %)
- **3a** — Section « Fait » réduite à 3 dernières sessions (25/05 suite 2 + 25/05 + 24/05 suite 2). 14 sessions antérieures supprimées (détail dans JOURNAL).
- **3b** — 16 lignes « Commit + push session du XX/XX » consolidées en une checklist unique « Rattrapage commits + pushs en retard depuis 19/05 — voir JOURNAL pour détail ».
- **3c** — Section « Décisions éditoriales en attente » quasi-vidée : ne reste qu'une entrée (les 6 conventions transverses à éprouver sur `securite-et-qualite`). Note explicite renvoie au BACKLOG (conventions à éprouver) et à `conventions.md` (conventions acquises). Pas de duplication.
- Réorganisations secondaires : « Tâches techniques en suspens » divisée en 3 sous-sections (Rattrapage / Manipulations manuelles / Vérifications visuelles). Section « Templates » réduite à la seule entrée restante (fiche-tuto).
- Écriture en `write_file` intégrale (TODO compact, pas de risque de troncature).

### Palier 4 — Compactage BACKLOG (22 ko → 20,2 ko, gain ~8 %)
- 5 items supprimés de « Discussions/décisions en attente » : 4 conventions à éprouver désormais portées par `conventions.md` (popovers sigles génériques, alias Quartz, 2 images, station météo) + item obsolète sur le flowchart Mermaid du hub.
- 2 notes ajoutées : pointeur vers `conventions.md` pour traçabilité + rattachement de la section « Points ouverts des flowcharts » à l'inventaire pré-publication.
- Édit ciblé via `filesystem:edit_file` (vs `write_file` réécriture intégrale) — plus sûr sur un fichier de 22 ko, applique la leçon méthodo du palier 2.
- Gain volumétrique modeste comme annoncé (palier léger). L'objectif principal du palier 4 était la cohérence : zero duplication entre BACKLOG et `conventions.md`.

### Palier 5 — Refonte v2 du prompt projet (~9 ko → ~5,5 ko, gain ~40 %)
- 13 sections → 9 sections après fusions (§3+§6+§10 / §8+§9) et externalisations (§7 + §7bis vers conventions.md, simple pointeur).
- §8 démarrage mis à jour : lit TODO + conventions.md + JOURNAL en mode `head` (3 dernières entrées en haut, JOURNAL antichronologique).
- §9 fin de session enrichi : rotation glissante session N-3 + seuil archivage JOURNAL ~100 ko.
- Note structurelle « niveau B = livraison en texte rédigé » intégrée directement dans le bloc Mode de collaboration (anciennement section 13 séparée).
- Chemins des deux PC mentionnés explicitement (pro + perso) avec consigne de fallback automatique.
- Production en chat, copie manuelle par l'utilisateur dans Claude Desktop.

### Palier 6 — Test de démarrage post-refonte
| Fichier lu au démarrage | Poids | ~Tokens |
|---|---|---|
| TODO.md | 12,5 ko | ~3 k |
| conventions.md | 14,6 ko | ~4 k |
| JOURNAL.md (head 3 entrées) | ~15-18 ko | ~4-5 k |
| **Total démarrage post-refonte** | | **~11-12 k tokens** |

Vs cible 15-20 k → **sous la cible**. Vs initial ~55 k → **réduction ~80 %**, mieux qu'estimé en début de palier 1 (objectif initial parlait de ~65 %).

### Patch §8 post-test — erreur tail/head détectée
- **Erreur dans la v2 livrée au palier 5** : §8 disait `tail` au sens sémantique (« 3 dernières entrées de session ») alors que le JOURNAL est antichronologique. Un `tail=N` technique aurait lu les sessions les plus ANCIENNES en bas du fichier — l'inverse de l'intention.
- Correction proposée : remplacement `tail` → `head` au §8 avec explicitation de l'antichronologie. Appliquée par l'utilisateur dans Claude Desktop.

### Leçon méthodo — éprouver le prompt avant de figer
Sans le palier 6 (test concret), le piège `tail` au lieu de `head` serait passé inaperçu jusqu'au prochain démarrage qui aurait chargé le mauvais contexte. Discipline acquise : intégrer un test de démarrage à toute refonte du prompt projet.

### État final des fichiers
- `conventions.md` : 14,6 ko (nouveau)
- `JOURNAL.md` : 89 ko (truncaté palier 2)
- `JOURNAL-archive.md` : 49,7 ko (nouveau palier 2)
- `TODO.md` : 12,5 ko (compactage palier 3)
- `BACKLOG.md` : 20,2 ko (compactage palier 4)
- Prompt projet : ~5,5 ko dans Claude Desktop (refonte palier 5)

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- Prochaine session posée : **approfondissement de `concept`** (fiche-trame phase 2 du cycle en V, squelette fait 22/05). `securite-et-qualite` (3ème trame transverse) reste à faire mais n'est pas le prochain immédiat.

---

## 2026-05-25 (suite 2) — Batch de 7 fiches-notion prioritaires + 12 SVG + approfondissement complet de pieuvre

### Périmètre de session
Lot batch des 7 notions prioritaires sémées dans plusieurs trames (`cahier-des-charges-fonctionnel` + 6 outils méthodologiques planification/décision/risques) suivi de l'approfondissement complet de `pieuvre.md` en clôture. Première session à produire autant de fiches d'un coup (7) et autant de SVG (12). PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 5 questions tranchées (niveau C)
1. **Modèle de référence pour CdCF** : hybride basé sur `bete-a-cornes.md` + section « Structure type du document école » pointant vers `cdcf-ecole-template.docx`. Rejet du modèle `fonction.md` (trop léger pour un pivot).
2. **Profondeur des stubs** : option (a), stubs légers maintenus sur les 6 fiches non-CdCF malgré le TODO qui marquait certaines en « fiche-tuto détaillée ». L'approfondissement détaillé reste pour une session ultérieure.
3. **Ordre** : 6 stubs d'abord (calibrage du format commun), CdCF en seconde moitié.
4. **Front matter `type:`** — **clarif structurante apportée par l'utilisateur** : notion = court (popover only) / tuto = long mais pas structurant (outils en général) / trame = structurante. Répartition : `cahier-des-charges-fonctionnel`, `wbs`, `jalons`, `matrice-de-risques`, `matrice-de-decision` en notion ; `retroplanning` et `gantt` en tuto.
5. **Popovers déjà sémés** : récupération comme base + micro-ajustements ciblés pour cohérence avec les 6 conventions transverses.

### Premier batch — dérive sur les placeholders italiques
Production des 7 fiches en mode « stub avec placeholders italiques entre crochets », en m'alignant littéralement sur `pieuvre.md` post-24/05 suite 2 (qui est lui-même un stub à finir). **Erreur d'interprétation** : pieuvre.md est un stub non terminé, pas un standard cible. Résultat livré inacceptable.

### Recadrage utilisateur — niveau B exige texte rédigé
« Le niveau d'autonomie requiert que tu fasses la fiche avec un texte complet avant validation ». **Convention transverse acquise** : un placeholder italique entre crochets est un aveu de travail non fait, pas une livraison niveau B. La forme italique n'est admissible qu'avec signalement explicite d'un manque de matière.

### Reprise complète des 6 stubs en texte rédigé
Modèle de référence basculé sur `fonction.md` (fiche-notion brève rédigée). Pour chaque fiche : popover + 3 sections en texte complet (À quoi ça sert / Comment construire / Pièges) + Voir aussi. Commentaires HTML « STUB » retirés. Réécriture en `filesystem:write_file` (6 appels).

### Production des 12 SVG — critique transverse de l'utilisateur
Une fois les 6 fiches rédigées, critique transverse : il manque les images. Niveau C : 4 questions tranchées.
1. **Production** : (a) Claude produit en premier jet + entrée backlog pour affinage utilisateur avant publication.
2. **Stratégie** : 1 image générique + 1 image avec valeurs concrètes non liées au bras 3 axes — 12 SVG au total.
3. **Emplacement** : générique après popover, exemple dans la section « Comment … ».
4. **Fil rouge alternatif** retenu : **station météo connectée** (projet école générique, cohérent inter-fiches sur 15 semaines avec mêmes jalons Sem. 2 / 5 / 9 / 12 / 15).

Production des 12 SVG en batch (palette ambre `#BA7517` / gris `#DDDBD3` alignée sur `pieuvre-generique.svg`, support `@media prefers-color-scheme: dark`, viewBox variables selon le type d'image). Patch des 6 fiches pour insertion des 2 images.

### Approfondissement complet de `pieuvre.md` (clôture)
Modèle de référence : `bete-a-cornes.md` (notion fondatrice, sections développées). Popover conservé, image générique conservée, image exemple bras 3 axes conservée (toutes existaient depuis 24/05 suite 2). Rédigé :
- **À quoi ça sert** : 3 rôles articulés (recenser milieux / formaliser sans dériver vers solution / matériau direct pour caractérisation).
- **Comment la construire** : méthode 3 temps + **tableau des 5 familles de milieux** (utilisateurs / matière d'œuvre / énergies / environnement physique / réglementaire) + **paragraphe topologie** (forme rayonnante AFNOR, distinction FP/FS/FC par topologie + numérotation, pas par style de trait).
- **Exemple bras 3 axes** : commentaire enrichi des 5 milieux et des 4 fonctions, chacune avec sa sémantique (FP relie deux milieux et justifie l'existence, FS relie deux milieux pour service complémentaire, FC sur un seul milieu pour contrainte d'adaptation).
- **Pièges** : 5 pièges en gras court, dont **« Confondre FP et FS » nouveau** (test pratique « si je retire cette fonction, le projet reste-t-il défendable ? ») et **« Diagramme rayonnant peu lisible »** (deux pistes : regrouper en familles, ou faire pieuvres locales par sous-système en concept).

Pas de section *Cas particulier* ni *Aller plus loin* (non pertinent ici). Pas de triptyque mauvais/moyen/bon (le triptyque pertinent pour FP/FS/FC est porté par `fonction.md`).

### Conventions transverses — compteur à 6 + 3 nouvelles
6 conventions transverses fixées 25/05 (éprouvées sur ecoconception 25/05 suite + sur les 7 fiches-notion 25/05 suite 2). Trois nouvelles conventions acquises cette session :
7. **2 images par fiche-notion d'outil méthodologique** : générique après popover + exemple valeurs concrètes dans « Comment … ». À confirmer sur 2-3 autres fiches-notion d'outils puis documenter dans `templates/fiche-notion.md`.
8. **Fil rouge alternatif « station météo connectée »** pour les exemples non-bras-3-axes des fiches-notion d'outils. À confirmer ou élargir (arrosage automatique, alarme connectée selon les besoins).
9. **Niveau B = livraison en texte rédigé, placeholders italiques inadmissibles** sauf signalement explicite de manque de matière. À intégrer aux instructions projet section 13.

### Typologie notion / tuto / trame — clarification structurante
Clarif apportée par l'utilisateur en cours de session :
- **notion** = fiche courte (popover-only). Exemple : `jalons`, `wbs`, `matrice-de-risques`.
- **tuto** = fiche longue mais pas structurante (outils méthodologiques détaillés, captures d'écran d'outils). Exemple : `retroplanning`, `gantt`.
- **trame** = fiche structurante (phases du V, fils transverses). Déjà acquis depuis le 22/05.

Cette clarif résoud la tension du TODO qui marquait certaines fiches en « fiche-tuto détaillée » tout en les traitant en stub aujourd'hui : pour les outils qui n'ont pas encore leurs captures d'écran, on pose la **notion** d'abord (court), on construit le **tuto** ensuite. Répartition appliquée : 5 notion + 2 tuto sur les 7 fiches du jour.

### Leçon méthodo — niveau B et fidélité au modèle
Une fiche stub existante (comme `pieuvre.md` post-24/05 suite 2) n'est **pas** un modèle cible ; c'est une fiche à finir, qu'on a marquée en stub pour la souligner. Prendre une fiche stub comme modèle littéral d'un autre stub revient à produire un travail non terminé sous couvert de cohérence. Modèle cible pour fiche-notion brève = `fonction.md` (brève mais rédigée). Modèle cible pour fiche-notion complète = `bete-a-cornes.md`.

### Nouvelles dépendances posées
Aucune nouvelle notion ajoutée au-delà de celles déjà inventoriées. Au contraire, 7 liens rouges résorbés sur l'ensemble du dépôt (`cahier-des-charges-fonctionnel` cité dans le hub + 4 trames + template CdCF + 3 stubs du jour).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Conventions transverses 7, 8, 9** : à éprouver sur les fiches à venir (notamment `caracteriser-une-exigence`, `microcontroleur`, `pla`) avant documentation formelle dans les templates.
- **Reprise visuelle des 12 SVG produits aujourd'hui** : premiers jets, affinage utilisateur attendu avant publication (BACKLOG enrichi en conséquence).
- **Densité du tableau matrice-de-decision générique** : double colonne brute/pondérée potentiellement chargeur visuel — à vérifier en relecture Quartz et simplifier le cas échéant.

---

## 2026-05-25 (suite) — Deuxième trame transverse : squelettisation + approfondissement direct de ecoconception (stresstest réussi)

### Périmètre de session
Deuxième fiche-trame transverse du projet : `ecoconception.md`. Stresstest volontaire de la capacité à rédiger un sujet complexe (interface disciplinaire + densité notionnelle plus forte) en passe unique avec round 2 ciblé, dans le format inauguré sur `gestion-de-projet.md` le matin même. PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 4 questions tranchées (niveau C)

1. **Structure de la fiche-trame** : 3 blocs co-actifs **Évaluer / Réduire / Tracer** (option a). Rejet argumenté de (b) cycle de vie = territoire des collègues et (c) niveau d'intégration = trop méta. Alignement sur le pattern transverse `rythmer/outiller/tenir` de `gestion-de-projet`.
2. **Périmètre vs cours collègues** : frontière nette. Porté côté élec/info (sobriété énergétique, durée de vie composants, démontabilité PCB, sobriété logicielle). Délégué (cité sans approfondir) : ACV complète, recyclabilité matériaux, normes pointues.
3. **Outils canoniques** : 1 outil approfondi (`matrice-eat`), 1 cité + délégué (`acv-simplifiee`), reste en ressources.
4. **Articulation avec gestion-de-projet** : miroir asymétrique. La trame écoconception affirme qu'elle est pilotée par GdP, dans le bloc 3 « Tracer ».

### Squelette + approfondissement en passe unique
Squelette niveau B (front matter tag `transverse` seul, popover miroir GdP, 3 blocs en placeholder italique avec [!example] esquissé + [!livrable] Continu/Jalonné + callouts secondaires). Approfondissement complet enchaîné :
- **Bloc 1 Évaluer** : 4 paragraphes (pourquoi/outils/frontière chiffrable/cadence) + example étoffé avec re-passage en revue de PoC.
- **Bloc 2 Réduire** : 5 paragraphes (1 par front + 1 paragraphe délégation explicite) + warning sur l'optimisation à l'extrême.
- **Bloc 3 Tracer** : 5 paragraphes (opposabilité + pilotage GdP / 3 pratiques liste numérotée / restitution soutenance) + tip intégration diffusée.
- **Section côté équipe** : 3 articulations en gras (GdP miroir, SQ croisements RoHS/REACH/DEEE avec règle de non-redondance, délégation cours collègues).

### Round 2 — 4 remarques utilisateur → 9 patches via `filesystem:edit_file`
1. **MCU → microcontrôleur** avec popover : 5 patches (chaque section/callout).
2. **PLA, ABS, RoHS, REACH, DEEE → popovers** : 4 patches.
3. **usinage, impression 3D, soudure → wiki-links** : 2 patches.
4. **Gras isolé « opposable »** : 1 patch (extension à « la dimension qui rend l'écoconception opposable »).

### 6ème convention transverse fixée
6. **Wiki-link à la 1ère occurrence de chaque section, sous-section ou callout** ; mot complet ailleurs. À éprouver sur `securite-et-qualite` et à documenter dans `templates/fiche-trame.md` une fois confirmée. Compteur conventions transverses : 6.

### Nouvelles notions semées en lien rouge (inventoriées au TODO)
- `microcontroleur` (fiche-notion, popover essentiel, acronyme MCU en alias)
- `pla`, `abs` (fiches-notion matériaux)
- `rohs`, `reach`, `deee` (fiches-notion normes environnementales)
- `usinage`, `impression-3d`, `soudure` (fiches-tuto procédés, actées côté collègues)
- `matrice-eat` (outil canonique de la trame éco, doublement prioritaire)
- `acv-simplifiee` (citée et déléguée)

### Bilan stresstest
Format passe unique + round 2 ciblé tient sur sujet complexe. Pas de scission de session nécessaire malgré l'interface disciplinaire forte. Pattern applicable à `securite-et-qualite` avec prudence sur la matière notionnelle (CE, sécurité fonctionnelle, FMEA…) — risque de scission réel sur cette 3ème trame, à surveiller.

### Évolution du mode de collaboration
**Niveau B acté comme autonomie de base** pour la rédaction conventionnelle (cf. section 13 des instructions projet, paragraphe ajouté en fin de session). Niveau A réservé aux actions mécaniques (typo, formatage), niveaux C et D inchangés.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Conventions transverses** : à éprouver sur `securite-et-qualite` avant documentation formelle dans le template (6 conventions au compteur).
- **Format `[!livrable]` transverse Continu/Jalonné** : confirmé sur 2 trames sur 3, à formaliser après la 3ème.
- **Tag `transverse` seul vs `transverse` + `ese`** : tag seul retenu (alignement strict sur GdP), à arbitrer si besoin de classification par domaine émerge.

---

## 2026-05-25 — Première trame transverse : squelettisation + approfondissement direct de gestion-de-projet

### Périmètre de session
Première fiche-trame transverse du projet : `gestion-de-projet.md`. Session démarrée en mode squelettisation (cadre du TODO) puis basculée sur demande utilisateur en approfondissement complet dans la même session — soit un format inédit pour les transverses. PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 5 questions tranchées

1. **Structure de la fiche-trame transverse** : option (a) thématique, contre chronologique et par compétence MEO. Trois blocs **co-actifs** (non séquentiels) retenus : Rythmer / Outiller / Tenir la posture.
2. **Articulation avec `specification-technique`** : principe acté — la trame transverse **ne redéveloppe aucun outil** (délégation aux notions/tutos dédiés : `wbs`, `gantt`, `jalons`, `retroplanning`, `matrice-de-risques`). La pilote enseigne à poser ; la trame enseigne à tenir.
3. **Fil rouge bras 3 axes** : 1 `[!example]` par bloc thématique (transposition v2.1 « au moins 1 par étape »), pas un panorama 15 semaines unique.
4. **Notions PROJ/MEO** : pointer sans redévelopper. Question secondaire (ajouter `revue-de-phase` / `point-hebdomadaire` au BACKLOG ?) reportée à l'approfondissement.
5. **Périmètre de session** : squelettisation seule au départ, **basculé en approfondissement direct** sur demande utilisateur en cours de session.

### Squelette produit (1ère version, niveau B)
Front matter avec **nouveau tag `transverse`** (en plus de `proj`/`trame`) ; section « Démarche » conservée mais ouverte par préambule qui pose la non-séquentialité ; 3 blocs avec callouts `[!example]` + `[!warning]` (bloc 2) + `[!tip]` (bloc 3) + `[!livrable]` en placeholder explicite (format à trancher : jalonné vs continu) ; section « Pendant cette phase, côté équipe » reconvertie de fait en panorama d'articulation avec les 2 autres transverses ; conclusion adaptée (pas de phase suivante, pont vers le hub).

### 4 décisions de niveau C validées
- **Tag `transverse`** acté (à propager aux 2 autres transverses).
- **Section « Démarche »** : conservée, variante « Mener la gestion de projet » jugée équivalente (arbitrable à l'usage).
- **Format `[!livrable]` transverse** : sous-listes explicites « Continu » et « Jalonné » dans chaque livrable, pour rendre visible le double régime de production.
- **Section « Pendant cette phase, côté équipe »** conservée, reconvertie en « articulation avec les autres transverses » (titre de section inchangé pour aligner template).

### Approfondissement complet en passe unique
Rédaction des 3 blocs en prose dense (3-4 paragraphes par bloc avant callouts), à densité comparable à la fiche pilote `specification-technique`. Format `[!livrable]` posé en sous-listes Continu/Jalonné (3 livrables uniformisés). Section « articulation avec les autres transverses » rédigée en 3 pratiques (intégrer dans la cadence / intégrer dans la matrice de risques / piloter sans écraser). Production initiale en `filesystem:write_file` (squelette de moi, structure connue).

### Round 2 — 9 remarques utilisateur → 14 patches ciblés via `filesystem:edit_file`
- Retrait de toute mention de durée projet chiffrée dans la prose générique (la trame doit servir à tous types de projet, pas seulement aux projets de 15 semaines).
- Conversion `SX` → `semaine n°X` dans les exemples bras 3 axes (la notation `SX` ne parle pas à un étudiant qui découvre).
- Retrait des extensions `.md` dans les conventions de nommage citées en prose (l'étudiant choisit son format).
- Conversion `(i)/(ii)/(iii)` → liste numérotée 1/2/3 pour les énumérations méritant une structure.
- Retrait d'un gras sur verbe isolé (`les **tenir**.`) — convention : gras sur morceau de phrase ou mot technique-clé.

### 5 conventions transverses fixées (à propager à `ecoconception` et `securite-et-qualite`)
1. **Pas de chiffrage de durée projet** dans la prose générique.
2. **Notation `semaine n°X`** dans les exemples bras 3 axes (pas `SX`).
3. **Pas d'extension de fichier** dans les conventions de nommage citées en prose.
4. **Listes numérotées** plutôt que `(i)/(ii)/(iii)`.
5. **Gras** sur morceau de phrase ou mot technique-clé, pas sur verbe isolé.

### Format date : compromis pédagogie vs technique
Demande utilisateur : `DD/MM/YYYY` (format FR). Application : `JJ-MM-AAAA` aux conventions de nommage de fichiers (`12-09-2025-revue-poc`). **Trade-off connu signalé** : la convention technique habituelle pour tri chronologique automatique est ISO 8601 `AAAA-MM-JJ` — décision à arbitrer si le besoin de tri auto émerge.

### Leçon méthodo — `str_replace` vs `filesystem:edit_file`
Confusion en début de round 2 : `str_replace` (outil sandbox de Claude) n'agit pas sur le filesystem MCP. Il faut `filesystem:edit_file` (MCP) pour éditer le dépôt. À retenir.

### Nouvelles dépendances posées
Aucune nouvelle notion ajoutée au-delà de celles déjà inventoriées au TODO/BACKLOG. La trame `gestion-de-projet` pointe vers les 5 outils canoniques (`wbs`, `jalons`, `retroplanning`, `gantt`, `matrice-de-risques`) et les 2 autres transverses (`ecoconception`, `securite-et-qualite`).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Conventions transverses** : à éprouver sur `ecoconception` et `securite-et-qualite` avant de les documenter formellement dans le template `fiche-trame.md`.
- **Format date noms de fichiers** : `JJ-MM-AAAA` retenu sur consigne FR ; bascule en ISO 8601 possible si le tri auto chronologique devient nécessaire.
- **Section « Pendant cette phase, côté équipe »** : titre de section conservé pour alignement template, mais sémantique réelle = « articulation avec les autres transverses » pour les fiches transverses. À documenter formellement quand le pattern aura été confirmé sur les 2 autres.

---

## 2026-05-24 (suite 2) — Clôture phase 1 partie 3 : cohérence finale + refonte architecture pieuvre/fonction + SVG

### Périmètre de session
Clôture de la phase 1 partie 3 sur deux gestes consolidants : (1) cohérence finale des 6 étapes de `specification-technique.md` via 11 patches terminologiques (en 3 passes successives), (2) refonte structurelle de l'architecture des fiches-notion autour de la pieuvre et des fonctions FP/FS/FC, accompagnée de la production des 2 SVG correspondants. Session sur PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 2 questions tranchées

1. **Méthode de relecture** : mixte avec dimension prioritaire — passe 1 = terminologie + fil rouge en lecture continue, passe 2 = ponts par paires.
2. **Stratégie d'enchaînement** : cohérence pure d'abord, puis résorption d'1-2 popovers majeurs si possible. Réalité : tout traité (cohérence + refonte architecture + 2 SVG).

### Cohérence finale — 11 patches sur `specification-technique.md` en 3 passes

Bilan par auto-critique progressive (leçon méthodo : une passe unique n'est jamais exhaustive sur ce type de relecture terminologique) :

**Passe 1** — 5 patches : pont arrière étape 2 ajouté (« **Le besoin est compris et validé.** Avant de chiffrer… »), 4 occurrences « phase 1 » corrigées (préambule étape 5, étape 6 H4 Faire valider, section Équipe / Interfaces métiers, section Équipe / Sécurité-qualité), refonte phrase finale example étape 6 (initialement avec récupération « deux réserves mineures » du JOURNAL, finalement remplacée par version sobre sur retour utilisateur : « validé par les enseignants », sans réserves — l'équipe enseignante n'émet pas de réserves en général).

**Passe 2** (occurrences résiduelles loupées) — 3 patches : « fin de phase 1 lance » → « fin de cette phase lance » (Gestion de projet), « s'ancre dès la phase 1 » → « s'ancre dès la spécification technique » (Écoconception), « ancrage écoconception en phase 1 » → « ancrage écoconception à ce stade » (même paragraphe).

**Passe 3** (finale exhaustive) — 2 patches : « commencent en phase 1 » → « commencent dès cette phase » (Sécurité-qualité, cohérence avec « le faire dès cette phase » du même paragraphe), « autoriser le passage en phase 2, [[concept|concept]] » → « autoriser le passage en [[concept|concept]] » (élision du raccourci numérique redondant avec le wiki-link).

### Refonte architecture `fonction` / `pieuvre` — décision structurante

**Constat utilisateur** : architecture initiale (aliases `[FP, FS, FC]` posés sur `pieuvre.md`, décision 23/05 suite 2) ne correspond pas à l'intention pédagogique. Un étudiant qui survole `[[FC]]` veut une définition de la catégorie « fonction contrainte », pas de l'outil « pieuvre ». Architecture repensée : `FP/FS/FC` → fiche dédiée aux **fonctions** → renvoi vers la pieuvre comme outil graphique de représentation.

**Décision actée** : **séparation `fonction` / `pieuvre`** :
- **`fonction.md`** (nouveau, aliases `[FP, FS, FC]`) : fiche-notion *courte* (lisible au survol) définissant la trichotomie FP/FS/FC, le format d'énoncé verbe + complément, et redirigeant vers `[[pieuvre]]` pour la représentation graphique. Option (b) retenue (fiche brève complète tout de suite) plutôt que stub minimal.
- **`pieuvre.md`** (refonte) : aliases retirés. Fiche-notion sur l'outil graphique, qui s'appuie sur `[[fonction]]` pour la typologie au lieu de la dupliquer. Sections « À quoi ça sert » / « Comment construire » / « Pièges » en placeholders explicites à approfondir en session dédiée.

**Conséquence sur les liens** dans `specification-technique.md` : `[[FP]]` / `[[FS]]` / `[[FC]]` pointent désormais vers `fonction.md` (via alias), `[[pieuvre]]` continue vers `pieuvre.md`. Pas de patch nécessaire dans la trame — les liens existants se résolvent automatiquement via les nouveaux aliases.

### Convention `draft: false` par défaut — actée

Décision déclenchée par un faux bug : popovers `[[FP]]` / `[[FS]]` / `[[FC]]` toujours rouges après création du stub `pieuvre.md` initial. Cause : `Plugin.RemoveDrafts()` actif dans `quartz.config.ts`, filtrant les fiches en `draft: true` du build. Le stub était inaccessible.

**Décision utilisateur** : **passer toutes les fiches en `draft: false` par défaut**. Justifications : (1) Quartz est encore privé, le filtre n'a pas d'utilité opérationnelle, (2) le pilotage de la maturité passera par le **BACKLOG** (inventaire systématique des stubs/placeholders avant publication aux élèves), (3) `draft: true` crée plus de friction (popovers cassés, tests visuels impossibles) que de bénéfice. Convention rétrospective : le template `fiche-trame.md` (déjà `draft: false`) avait préfiguré cette pratique.

### Production des 2 SVG pieuvre

Premier jet de `pieuvre-generique.svg` produit en cours de session (forme « traversante » avec distinction FP plein / FS pointillé / FC simple). **Remarque utilisateur** sur référence visuelle ECPI (5 milieux + système ECPI au centre, traits identiques étiquetés FC1 à FC7) : la convention dominante en France/AFNOR est **forme rayonnante avec tous les liens du même style**, étiquetés Fx.

**Refonte du SVG générique** : forme rayonnante adoptée. Distinction FP/FS/FC ne passe plus par le style du trait, elle passe par : (a) la **topologie** (FP/FS = 2 segments traversant le système entre 2 milieux ; FC = 1 segment vers 1 seul milieu), (b) les **étiquettes** Fx visibles sur les traits, (c) la **numérotation** dans l'énoncé. Composition : système ovale ambre au centre, 6 milieux gris autour, 1 FP traversante (verticale) + 1 FS traversante (horizontale) + 2 FC rayonnantes. Palette `bete-a-cornes-generique.svg` conservée (ambre #BA7517 / gris #DDDBD3, dark mode via `prefers-color-scheme`).

**Création de `pieuvre-bras-3-axes.svg`** (incarné fil rouge) : système « BRAS 3 AXES » au centre, 5 milieux gris (opérateur, objet à déplacer, poste informatique, alimentation 230V, environnement pédagogique), 4 fonctions (FP1 opérateur ↔ objet traversant, FS1 opérateur ↔ poste info traversant, FC1 vers alimentation, FC2 vers environnement pédagogique). Référencé dans l'`[!example]` étape 3 de `specification-technique.md` et dans la section Exemple de `pieuvre.md`.

### Patch collatéral : retrait « plan de travail » de la liste des milieux étape 3

La liste mentionnait 6 milieux mais les 4 fonctions n'en impliquaient que 5. Le plan de travail était listé sans fonction — sémantiquement faux pour une pieuvre qui formalise les fonctions de tous les milieux identifiés. **Décision actée** : retrait du plan de travail (option a). Modification mineure du texte qui assainit l'example et fait correspondre exactement liste textuelle et schéma. Probable héritage de mind map non nettoyé.

### Nouvelles dépendances posées
- `[[fonction]]` — fiche-notion brève complète produite ce jour (aliases FP/FS/FC).
- `[[pieuvre]]` — fiche-notion légère produite (stub méthodologique avec placeholders dans 4 sections).
- SVG `pieuvre-generique.svg` produit (forme rayonnante, convention AFNOR).
- SVG `pieuvre-bras-3-axes.svg` produit (incarnation fil rouge).

### Leçon méthodo — auto-critique en plusieurs passes pour relecture terminologique

En 1ère passe sur la cohérence terminologique « phase N en raccourci numérique », identification de 4 occurrences. En réalité, 9 résiduelles trouvées en passes 2 et 3. Discipline future : pour ce type de relecture exhaustive (substitutions terminologiques systématiques), **grep avant d'annoncer exhaustivité**. L'auto-critique progressive a fonctionné ici (identification spontanée d'occurrences loupées entre les passes), mais un outil de recherche aurait été plus efficace.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes (sauf cohérence finale 6 étapes retombée).
- **Approfondir `pieuvre.md`** au standard `bete-a-cornes.md` : rédiger les 4 sections en placeholder (À quoi ça sert / Comment construire / Pièges / Exemple commenté).
- **Approfondir `fonction.md`** si besoin à l'usage (déjà brève complète, peut être enrichie au standard bete-a-cornes si la pratique le révèle nécessaire).
- **Inventaire systématique des fiches stub/placeholders avant publication aux élèves** : nouvelle tâche structurante pour la phase de pré-ouverture. Le BACKLOG est désormais le pilote de la maturité éditoriale (la convention `draft` ne joue plus ce rôle).
- **Reprise visuelle des images SVG** (pas du contenu) avant publication : à faire juste avant ouverture aux élèves.

---

## 2026-05-24 (suite) — Clôture phase 1 partie 2 : étape 6 + section Équipe + template CdCF

### Périmètre de session
Clôture de la phase 1 partie 2 sur trois fronts : rédaction de l'étape 6 « Rédiger le CdCF » de `specification-technique.md` (3 sous-sections H4 + 4 callouts), rédaction de la section « Pendant cette phase, côté équipe » (4 paragraphes par thème), production du template Word `cdcf-ecole-template.docx`. Session sur PC perso, préfixe MCP `filesystem:*`. Cohérence finale des 6 étapes acquise comme session ultérieure (découpage acté en début de session pour préserver le geste critique).

### Cadrage en début de session — 5 questions tranchées

1. **Stratégie d'enchaînement** : scission étape 6 + Équipe (cette session) / cohérence finale des 6 étapes (session suivante). L'étape 6 est l'agrégateur des 5 précédentes ; le geste de relecture critique mérite distance et tête reposée.

2. **TdM du CdCF école simplifié** : option C — agrégat avec sections explicitement labellisées (cœur NF X50-151 / complément école). Plan retenu en 5 sections suivant l'ordre des 5 étapes précédentes : Présentation / Besoin / Existant (complément école) / Analyse fonctionnelle (cœur NF X50-151) / Planification (complément école). Compromis : ni fidélité stricte NF X50-151 (qui se limite à 2 et 4) ni structure libre, mais agrégation reconnaissable.

3. **Granularité étape 6** : 3 H4 (Structurer le document / Rédiger chaque section / Faire valider en revue de CdCF). Étape 6 = travail d'agrégation et de mise en forme, pas de production nouvelle.

4. **Forme de l'encart « avec client réel »** : callout `[!info]` titré « À retenir », posé après l'introduction de la TdM dans la H4 « Structurer ». Évite le tableau (catalogue) et la prose noyée.

5. **Profondeur section Équipe** : 4 paragraphes courts par thème (Interfaces métiers / Gestion de projet / Écoconception / Sécurité-qualité). Pas de liste de rôles (renvoyée à la fiche-trame `gestion-de-projet`).

### Rédaction étape 6 — Rédiger le CdCF

Structure produite :
- **Préambule** (2 paragraphes) : pont depuis les 5 étapes (matériau déjà produit, reste à agréger), positionnement comme document de référence du projet, version école simplifiée comme dérivée reconnaissable de NF X50-151.
- **H4 « Structurer le document »** : présentation de la TdM en 5 sections avec labellisation explicite (cœur NF X50-151 / compléments école), suivie du paragraphe d'annonce du template Word.
- **H4 « Rédiger chaque section »** : trois soins à apporter — mise en forme, cohérence inter-sections, intégration transversale de l'écoconception (graines déjà semées aux étapes 1-5).
- **H4 « Faire valider en revue de CdCF »** : nature du jalon (validation enseignante équivalente d'une signature client), préparation (auto-relecture, vérification du chiffrage de chaque exigence, anticipation des questions), issues possibles (validé / à reprendre), engagement du projet par ce qui a été validé.

4 callouts :
- `[!info] À retenir` — *En contexte professionnel, le CdCF NF X50-151 strict se limite à l'analyse fonctionnelle.* Différenciation cœur normatif (sections 2 et 4) vs compléments école (3 et 5), avec mention que le « cadre de réponse » NF X50-151 n'a pas d'équivalent direct en école.
- `[!warning] Attention` — *Un CdCF n'est pas un copier-coller des livrables intermédiaires.* Le geste de l'étape 6 est précisément de relire l'ensemble et de réécrire ce qui doit l'être pour produire un récit cohérent.
- `[!example] Exemple : projet bras 3 axes` — Organisation des 5 sections sur le bras, écoconception intégrée transversalement (critère EAT + FC2 démontabilité + risque fablab), revue de CdCF en S3 du rétroplanning, validation avec deux réserves mineures levées en une semaine. Choix délibéré contre « validé sans réserve » : plus réaliste pédagogiquement, illustre le caractère itératif de la validation.
- `[!livrable] Livrable 6/6 — Spécification technique` — CdCF complet structuré en 5 sections, soigné en forme et cohérence inter-sections, présenté et validé en revue.

### Rédaction section « Pendant cette phase, côté équipe »

4 paragraphes courts en gras structurel + prose, alignés sur le format de la section Pièges fréquents (refonte 24/05 partie 1) :
- **Interfaces métiers — mécanique et fabrication** : dialogue précoce avec les enseignants de méca/fabrication pour caler des FC réalistes (fablab, tour CN, impression 3D), éviter de découvrir en dossier technique que l'architecture pré-dimensionnée n'est pas fabricable.
- **Gestion de projet** : la planification (étape 5) structure le travail de l'équipe au-delà du Gantt — qui suit quoi, qui actualise les risques. Premiers points hebdomadaires calés à ce moment.
- **Écoconception** : ancrage par des graines réparties dans les 5 livrables, pas un fil séparé à activer plus tard.
- **Sécurité et qualité** : repérage réglementaire en phase 1 (basse tension, conformité CE, public exposé), traduit en FC avec flexibilité F0 sur tout ce qui relève de la réglementation.

### Production du template CdCF école

Fichier `cdcf-ecole-template.docx` produit (8 pages, A4, validé docx schema). Composantes :
- Page de garde avec métadonnées projet (nom, équipe, encadrant, date de revue, version)
- Sommaire automatique (champ Word, à mettre à jour à l'ouverture)
- 5 sections suivant la TdM (Présentation / Besoin / Existant / Analyse fonctionnelle / Planification) + Annexes
- 4 tableaux pré-structurés : bête à cornes (3 colonnes), comparatif EAT (5 critères × 4 solutions, en-têtes pré-remplis), caractérisation des fonctions (4 colonnes × 4 fonctions FP1/FS1/FC1/FC2 en amorce), matrice de risques (4 colonnes × 5 lignes)
- Header + footer avec pagination « Page X / Y »
- Placeholders italiques en gris pour guider sans pré-remplir le contenu intellectuel
- Police Arial 11 pt, A4, hiérarchie visuelle H1/H2 en bleu

**Emplacement acté** : `content/ressources/templates/cdcf-ecole-template.docx`. Dossier `content/ressources/templates/` créé via MCP. Le fichier `.docx` (binaire) doit être copié manuellement par l'utilisateur — limite technique du MCP filesystem qui ne permet pas l'écriture binaire.

**Liens posés dans la fiche** :
- H4 « Structurer le document » : paragraphe d'annonce avec wiki-link
- « Voir aussi » : entrée dédiée avec mention « (document Word fourni) »

### Patches qualité post-rédaction (auto-critique sur 3 axes)

L'utilisateur a challengé la qualité de la rédaction sans donner ses remarques exactes. Auto-critique honnête sur 3 axes, suivie de patches :

- **Popovers manquants** : 3 ajouts dans l'étape 6 (`cahier-des-charges-fonctionnel` et `pieuvre` au préambule pour autoportance ; `jalons` dans la H4 « Faire valider »). Cas moins critiques notés au BACKLOG (`fablab`, `revue-de-cdcf`, conformité CE, basse tension).
- **Gras dérapé sur demi-phrases** : 4 cas resserrés (« vérifier que cette intégration est présente partout » → retirer le gras ; « autoriser le passage en phase 2 » → « autoriser le passage » ; « chaque exigence du tableau de fonctions est chiffrée » → « chaque exigence chiffrée » ; « valider les ordres de grandeur des matériaux et procédés disponibles » → « valider les ordres de grandeur »).
- **Redondances inter-paragraphes** : 2 doubles gras neutralisés (« agréger » et « intégrée transversalement », gras gardé à la 1ère occurrence seulement).
- **Exemple supplémentaire / template** : troisième axe de challenge — un template Word à compléter manquait vraiment. Production immédiate du `cdcf-ecole-template.docx` en lieu et place d'un simple exemple supplémentaire dans la fiche.

### Leçon méthodo — limite du MCP filesystem sur les binaires

Le serveur MCP filesystem expose `write_file(content: string)` mais pas d'écriture binaire. Conséquence pratique : Claude peut produire un `.docx` dans son sandbox et le présenter en téléchargement, mais ne peut pas le déposer directement dans le dépôt local. L'utilisateur fait la copie manuelle. À retenir pour les futurs templates et ressources binaires (images exportées, PDF, etc.).

### Nouvelles dépendances posées
- `[[gestion-de-projet]]` — fiche-trame fil transverse (lien posé dans la section Équipe).
- `[[securite-et-qualite]]` — fiche-trame fil transverse (lien posé dans la section Équipe).
- `[[cdcf-ecole-template.docx]]` — ressource Word fournie, à copier manuellement dans `content/ressources/templates/` (dossier créé en session).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Cohérence finale des 6 étapes** de `specification-technique.md` : relecture progressive à effectuer en session dédiée pour vérifier que les 6 étapes forment un récit progressif et non une juxtaposition. Geste de clôture phase 1 partie 3.
- **Notion `revue-de-cdcf`** : vocabulaire acté 24/05 partie 1, mais pas de fiche dédiée. À monitorer — si l'utilisation se répète au-delà de la phase 1, fiche-notion légère à produire.
- **Notion `fablab`** : utilisée 2 fois dans la section Équipe (et probablement réutilisée ailleurs), candidate fiche-notion légère.

---

## 2026-05-24 — Clôture phase 1 partie 1 : étape 5 + Pièges fréquents

### Périmètre de session
Clôture de la phase 1 sur deux fronts : rédaction de l'étape 5 « Planifier le projet » de `specification-technique.md` (3 sous-sections H4 + 4 callouts) et refonte de la section « Pièges fréquents » (6 pièges en gras court + explication). Session sur PC perso, préfixe MCP `filesystem:*`. Scission acquise en début de session : 5 + Pièges aujourd'hui, 6 + section Équipe + cohérence d'ensemble dans une session ultérieure.

### Cadrage en début de session — 5 questions tranchées

1. **Structure du CdCF (étape 6)** : version école **simplifiée** enseignée par défaut, avec encart « ce qui change avec un client réel ». Dérivée reconnaissable de la NF X50-151 (pas une structure inventée). Évite à l'étudiant de croire que la version qu'il rédige est la version pro. Décision opérationnelle pour la session suivante.
2. **Granularité étape 5** : **3 H4** (vs 4 initialement projetés). Regroupement `Gantt + jalons + rétroplanning` sous une H4 unique « Planifier dans le temps » qui reflète visuellement leur indissociabilité opérationnelle. WBS et risques en H4 dédiées plus courtes.
3. **Outils de planification** : mention sobre — Excel/papier + GanttProject + **Trello** (acté ici comme outil en ligne grand public). Pas de comparatif, pas de détail de fonctionnement, juste citer.
4. **Validation finale du CdCF** : pas « soutenance intermédiaire » comme initialement envisagé. Le vocabulaire correct est **revue de CdCF** (évaluation enseignante équivalente d'une signature client en contexte école). Reformulation à intégrer en étape 6 + retombée immédiate en étape 5 sur la formulation des jalons (« S3 — Revue de CdCF » dans l'exemple).
5. **Stratégie d'enchaînement** : scission **5 + Pièges** (cette session) / **6 + Équipe + cohérence finale** (session suivante). L'étape 6 (CdCF) est l'agrégateur des 5 précédentes, mérite d'être traitée à tête reposée. La cohérence d'ensemble (vérifier que les 6 étapes forment un récit progressif) est un geste à part entière.

### Vérification visuelle préalable — étapes 3 et 4 sous Quartz
Checklist passée avec utilisateur en début de session, **toute validée**. Étape 3 (note italique BàC/pieuvre, FS1 réécrite, définition FP, popovers FP/FS/FC sur sigles génériques seulement) et étape 4 (sous-liste F0/F1/F2/F3, 4 callouts côte à côte, popover `unite-si`, FP1 reformulée répercutée étapes 3 et 4) : OK. Aucun patch correctif nécessaire avant d'attaquer l'étape 5.

### Rédaction étape 5 — Planifier le projet

Structure produite :
- **Préambule** (2 paragraphes) : pont depuis étape 4 (le *quoi* est posé, reste le *quand* et le *qui*) + spécificité école (date de fin imposée → rétroplanning comme outil natif, pas optionnel)
- **H4 « Décomposer en WBS »** (forme courte) : popover `[[wbs]]` lien rouge. Profondeur 2-3 niveaux pour usage école.
- **H4 « Planifier dans le temps »** (forme longue) : 3 popovers liens rouges `[[jalons]]`, `[[retroplanning|rétroplanning]]`, `[[gantt|Gantt]]`. Trio indissociable présenté en cascade pédagogique (jalons posés → rétroplanning en remontant → Gantt qui matérialise). Paragraphe outils en clôture : Excel/papier, GanttProject, Trello, 1 phrase chacun, message « choisir un et s'y tenir ».
- **H4 « Maîtriser les risques »** (forme courte) : popover `[[matrice-de-risques]]` lien rouge. Identifier / coter (probabilité × gravité) / parade. 5-10 risques en école, **actualisation régulière** comme message clé.

4 callouts :
- `[!warning] Attention` — *Un planning qu'on ne met pas à jour ment.* La planification est un outil vivant, pas un livrable archivé.
- `[!tip] Astuce` — *Poser d'abord la date de soutenance, puis remonter à rebours en gardant une marge.* Au moins 2 semaines de marge avant la butoir.
- `[!example] Exemple : projet bras 3 axes` — 5 jalons sur un projet 15 semaines (S3 Revue de CdCF / S6 PoC / S11 Dossier technique / S14 Intégration / S15 Soutenance), WBS niveau 2 en prose sur 4 branches (Mécanique / Électronique / Informatique / Projet), 5 risques numérotés avec cote *probabilité × gravité* en italique et parade.
- `[!livrable] Livrables 5/6 — Spécification technique` — WBS + Gantt + matrice de risques.

### Refonte section Pièges fréquents

Fusion des 3 pièges génériques existants avec les 4 pièges identifiés au 23/05 suite 2. Résultat : **6 pièges** (et non 7), parce que l'ancien piège générique « Cahier des charges flou » faisait doublon avec les nouveaux « niveau non chiffré » et « critère subjectif » — fondu dans ces derniers, plus précis. Format adopté : **gras court en ouverture suivi d'une phrase d'explication concise** (1-2 phrases). Reformulation au passage des 2 pièges génériques préservés pour aligner le format.

Les 6 pièges :
- Sauter à la solution avant d'avoir formulé le besoin
- Confondre verrou technologique et difficulté d'équipe
- Niveau non chiffré (exigence non opposable)
- Critère subjectif ou non mesurable
- Sur-spécification
- Confondre F3 avec une absence d'exigence

### Vérification visuelle de la session
Checklist passée avec utilisateur en fin de session : étape 5 (préambule + 3 H4 + popovers liens rouges visibles + 4 callouts conformes) + section Pièges (format gras court + explication, popover `pcb` préservé). **Tout validé.** Le dernier geste documentaire (MAJ JOURNAL / TODO / BACKLOG) tenu dans la même session — discipline appliquée suite à la leçon méthodo du 23/05 suite.

### Nouvelles dépendances posées
- `[[wbs]]` — fiche-notion légère (niveau de détail tranché 23/05 suite 2). Découpage projet en éléments traçables, 2-3 niveaux.
- `[[jalons]]` — fiche-tuto détaillée. Points de validation rythmant le projet, conditionnent le passage à la phase suivante.
- `[[retroplanning]]` — fiche-tuto détaillée. Planification à rebours depuis la soutenance, marge ≥ 2 semaines.
- `[[gantt]]` — fiche-tuto détaillée. Matérialisation visuelle du rétroplanning. Outils : Excel/papier, GanttProject, Trello.
- `[[matrice-de-risques]]` — fiche-notion légère. Identification + cotation probabilité × gravité + parade. Actualisation à chaque revue de phase.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Étape 6 — Rédiger le CdCF** : version école simplifiée + encart « avec client réel » + démarche écoconception intégrée + revue de CdCF comme jalon de validation enseignante. À rédiger en session suivante.
- **Section « Pendant cette phase, côté équipe »** de `specification-technique.md` : toujours en placeholder. À rédiger en session suivante (interfaces méca/fabrication + ancrage phase 1 des fils transverses gestion-projet / écoconception / sécurité-qualité).
- **Cohérence d'ensemble des 6 étapes** : relecture progressive à effectuer en session suivante pour vérifier que les 6 étapes forment un récit progressif et non une juxtaposition. Geste de clôture phase 1.

---

## 2026-05-23 (suite 2) — Approfondissement specification-technique étape 4 (cœur structurant)

### Périmètre de session
Approfondissement de l'étape 4 « Caractériser les fonctions » de `specification-technique.md`, cœur structurant de la phase 1. Réalisé sur PC perso. Trois questions de cadrage tranchées en début de session, une décision méthodologique additionnelle introduite en cours de session (alias FP/FS/FC), trois patches collatéraux sur l'étape 3 acquis en cours de session.

### Cadrage en début de session — 3 questions tranchées

1. **Fiche unique vs 3 fiches séparées (critère/niveau/flexibilité)** : décision = **1 fiche-tuto unique `caracteriser-une-exigence`** avec mécanisme d'alias Quartz CrawlLinks (`aliases: [critere, niveau, flexibilite]` dans le front matter). Les 3 wiki-links `[[critere]]`, `[[niveau]]`, `[[flexibilite]]` se résolvent vers la fiche unique. Contrainte rédactionnelle induite : la première phrase de la fiche doit définir le triplet d'un coup pour que le popover ait du sens au survol de chacun des 3 sigles. Argument : critère/niveau/flexibilité ne s'écrivent jamais isolément en NF X50-151, ce sont 3 colonnes d'une même ligne de tableau d'exigence ; 3 fiches séparées dupliqueraient nécessairement l'exemple.

2. **Triptyque mauvais/moyen/bon dans la trame** : décision = **option (c)**, pas de triptyque dans la fiche-trame. Un seul `[!example]` bras 3 axes en mode « bon » sur FP1. Le triptyque vivra dans la future fiche-tuto `caracteriser-une-exigence` (pattern à transposer de `bete-a-cornes.md`). Argument : convention v2.1 « 1 `[!example]` fiche-trame = bras 3 axes » trop fraîchement figée pour la casser ici.

3. **Charte unités/niveaux** : décision = **mini-encart méthodo en prose** porté par un `[!tip]` Astuce dans l'étape 4 (forme légère). Charte typographique complète déléguée à une fiche-notion **`unite-si`** créée comme dépendance dans la session (popover en lien rouge dans le `[!tip]`).

### Décision méthodologique additionnelle — alias FP/FS/FC vers `pieuvre`

Question soulevée en cours de session par l'utilisateur : les sigles **FP**, **FS**, **FC** étaient en gras simple dans l'étape 3, sans popover. Un étudiant qui arrive à l'exemple par ancre n'avait pas la définition sous la main.

**Décision : option A — alias `[FP, FS, FC]` vers la future fiche `pieuvre`** (déjà au TODO doublement prioritaire). Contrainte rédactionnelle induite : l'intro de la fiche `pieuvre` doit énoncer les 3 catégories dès les premières phrases.

**Granularité du popover figée** : popovers **seulement** sur les sigles **génériques** (FP, FS, FC — préambule, définitions, livrable). **Pas** sur les **instances numérotées** (FP1, FS1, FC1, FC2 — alourdiraient visuellement sans rien apporter). Convention à documenter dans le template `fiche-trame.md` ou note méthodo dédiée.

### Élargissement méthodologique — alias comme alternative légère à la fiche-notion stub

La décision Q1 (alias `[critere, niveau, flexibilite]`) étend la typologie 3 types (trame/tuto/notion) avec un mode supplémentaire : la **« facette indissociable d'un outil plus large »** est servie par alias plutôt que par fiche-notion stub.

**Critère discriminant posé** :
- **Notion autoportante** (sens propre, mérite ses propres exemples choisis pour elle) → reste fiche-notion. Exemples : `pieuvre`, `mind-map`, `bete-a-cornes`.
- **Facette indissociable** d'un outil ou méthode plus large → alias suffit. Exemples : `critere`/`niveau`/`flexibilite` (3 colonnes d'une même ligne de tableau d'exigence), `FP`/`FS`/`FC` (3 catégories produites par la pieuvre).

Test pratique : « si je rédige une fiche-notion autonome sur cette notion, est-ce que je vais inévitablement re-rédiger le même exemple et la même prose que dans la fiche-mère ? » Si oui → alias. Si non → fiche-notion.

Convention à intégrer dans le commentaire HTML d'introduction de `templates/fiche-notion.md` une fois le mécanisme alias validé en pratique sous Quartz (à confirmer à la création de `caracteriser-une-exigence` ou `pieuvre`).

### Patches étape 3 — corrections collatérales et popovers FP/FS/FC

Trois corrections de fond identifiées par lecture critique :

- **Incohérence interne au fil rouge bras 3 axes** entre bête à cornes (étape 1, à-qui = enseignant, but = illustrer la démarche) et pieuvre (étape 3, FP1 = positionner un objet). Résolution : ajout d'une **note italique en tête du `[!example]` étape 3** explicitant que la pieuvre porte sur le système physique (le bras) tandis que la bête à cornes portait sur la commande pédagogique au-dessus (l'enseignant). Les deux niveaux coexistent dans la posture étudiant-client-de-lui-même, ne se contredisent pas.
- **FS1 limite sur la règle « deux milieux »** : *« Permettre à l'opérateur de visualiser le statut »* reliait l'opérateur à… l'information du système. Réécriture en *« Permettre à l'opérateur de programmer une séquence de mouvements depuis un poste informatique »* — relie opérateur + PC, deux milieux distincts. **Ajout corrélé** : `poste informatique` dans les milieux environnants identifiés.
- **Définition FP imprécise** : « Sans **FP1**, le système n'a pas lieu d'être » → « Sans **FP**, le système n'a pas lieu d'être » (le FP1 spécifique clouait artificiellement la règle à une seule fonction).

**Patches popovers FP/FS/FC** : 8 patches d'ajout (préambule, définitions, warning anti-pattern, exemple, paragraphe pivot étape 4, livrable). 6 patches inverses ensuite pour retirer les popovers des instances numérotées (granularité figée « génériques seulement »).

### Rédaction étape 4 — Caractériser les fonctions

Structure produite :
- Préambule (2 paragraphes) : pont avec étape 3, opposabilité comme enjeu central, renvoi à `caracteriser-une-exigence`
- 3 sous-sections H4 : **Énoncer le critère** / **Fixer le niveau** / **Définir la flexibilité**
- 4 callouts : `[!warning]` Attention « Niveau non chiffré = exigence non opposable » + `[!tip]` Astuce sur les unités SI + `[!example]` bras 3 axes (FP1 caractérisée + justification ancrée sur étape 2 + ouverture sur évaluation finale) + `[!livrable]` 4/6

**Décision structurelle option (3) sur la flexibilité** : présenter Fn (échelle qualitative NF X50-151 F0/F1/F2/F3) **et** tolérance numérique (± X mm, ± X %) comme **deux composantes complémentaires**. Le `Fn` dit la négociabilité, la tolérance numérique dit la marge concrète. Option défendue contre Fn seul (trop abstrait pour étudiant qui découvre) et contre tolérance numérique seule (perd la dimension négociabilité).

**Densité de callouts** : 4 callouts dans l'étape — borne haute, conforme à v2.1 puisque chacun porte un message distinct (opposabilité / forme d'écriture / illustration / livrable).

### Round 2 — 5 patches d'ajustement étape 4

- Phrase-clé `[!tip]` simplifiée : retrait de « avec un espace insécable entre la valeur et l'unité » — la convention typographique complète sera portée par la future fiche-notion `[[unite-si]]` (popover en lien rouge posé sur la phrase-clé).
- Phrase Obsidian `Ctrl+Maj+Espace` retirée (sera traitée par `unite-si`).
- **FP1 reformulée** : *« Permettre à l'opérateur de positionner un objet léger… »* → *« Permettre à l'opérateur de **manipuler le robot pour** positionner un objet léger… »* — plus précis (l'opérateur ne positionne pas directement, il manipule le bras qui positionne). **Répercuté étapes 3 ET 4** pour cohérence interne du fil rouge.
- Justification de l'exemple : « Moveo » → « le bras Moveo », « uArm Swift Pro » → « le bras uArm Swift Pro » (précision lexicale).

### Nouvelles dépendances posées
- `[[caracteriser-une-exigence]]` — **fiche-tuto à créer en priorité**, avec front matter `aliases: [critere, niveau, flexibilite]`. Embarquera le triptyque mauvais/moyen/bon, la méthode pratique, et l'échelle F0/F1/F2/F3 détaillée.
- `[[unite-si]]` — fiche-notion à créer (popover posé étape 4, lien rouge). Convention typographique des unités (espace insécable, format ± X mm, etc.).
- Future fiche `[[pieuvre]]` : aliases `[FP, FS, FC]` à poser dans son front matter. Intro à rédiger pour définir les 3 catégories d'un coup.

### Vérification visuelle étapes 2-3
Identifiée en début de session comme dette du JOURNAL 23/05 suite (« à faire en début de session suivante »), elle avait en réalité été faite en fin de session du 23/05 suite — c'est la MAJ documentaire qui n'a pas pris ce dernier geste. Correction : étapes 2-3 sous Quartz **vues et validées le 23/05 suite par l'utilisateur en fin de session**, dette tombée. Le on et le off de l'écriture documentaire en fin de session mérite vigilance — ne pas conclure tant que le dernier geste n'est pas écrit.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes (sauf vérification visuelle étapes 2-3 retombée — voir ci-dessus).
- **Étape 5 — Planifier le projet** : orientations actées en fin de session pour la session de clôture phase 1.
  - **Gantt / rétroplanning / jalons** : niveau de détail élevé, fiches-tuto à créer.
  - **WBS / matrice de risques** : niveau de détail léger, fiches-notion à créer.
  - **Version pédagogique** : Excel ou papier, avec mention de quelques outils existants nommés (GanttProject, autres à compléter).
  - Pas de conflit attendu avec les fils transverses (gestion-projet, écoconception, sécurité-qualité), qui seront en tutos/notions distinctes.
- **Étape 6 — Rédiger le CdCF** : orientations actées en fin de session.
  - **Structure canonique NF X50-151** avec souplesse dans l'écriture.
  - **Intégration de la démarche écoconception** ✓.
- **Section « Pendant cette phase, côté équipe »** de `specification-technique.md` : toujours en placeholder.
- **Pièges fréquents** : 4 pièges identifiés ce soir à intégrer (niveau non chiffré / critère subjectif non mesurable / sur-spécification / confusion F3 ≠ absence d'exigence). À traiter à la session de clôture phase 1, conjointement aux étapes 5-6.
- **Convention « popovers seulement sur sigles génériques »** (FP/FS/FC, pas FP1/FS1/…) : à documenter formellement (template fiche-trame ou note méthodo dédiée).
- **Convention « alias = mécanisme léger pour facettes indissociables d'un outil »** : à documenter dans le commentaire HTML d'introduction de `templates/fiche-notion.md` une fois le mécanisme validé en pratique sous Quartz.

---

## 2026-05-23 (suite) — Approfondissement specification-technique étapes 2 et 3

### Périmètre de session
Approfondissement de l'étape 2 (« Étudier l'existant ») et de l'étape 3 (« Formaliser les fonctions ») de `specification-technique.md`. Découpage de l'approfondissement des étapes 2-6 acté en début de session : étapes 2-3 (cette session) / étape 4 dédiée (cœur structurant) / étapes 5-6 (clôture phase 1).

### Cadrage en début de session — 3 questions tranchées

1. **Fil rouge à partir de l'étape 2** : bras 3 axes seul. Retour à la convention « 1 `[!example]` fiche-trame = bras 3 axes ». La dualité couveuse/bras de l'étape 1 reste une exception assumée justifiée par la nature même de l'étape 1.
2. **Découpage en sessions** : option étapes 2-3 / étape 4 dédiée / étapes 5-6 retenue. L'étape 4 (caractérisation) mérite une session dédiée du fait du double triptyque (critère/niveau/flexibilité × mauvais/moyen/bon) et de la question méta « 3 fiches séparées vs 1 fiche unique ».
3. **Popovers en parallèle** : stratégie « liens rouges assumés, fiches-notion par lot ultérieurement » maintenue.

### Étape 2 — « Étudier l'existant »

Structure : préambule + 3 sous-sections H4 (Recenser les solutions / Définir les critères / Comparer en tableau) + 1 `[!warning]` + 1 `[!example]` avec tableau comparatif + 1 `[!livrable]` 2/6.

**Décisions de fond :**
- **Distinction structurante** entre revue bibliographique (lecture, production de notes) et état de l'art technique (recensement de ce qui marche, comparaison chiffrée orientée décision). Portée par un `[!warning]` — anti-pattern pédagogique typique.
- **Tableau comparatif chiffré** dans le `[!example]` bras 3 axes : Niryo One, uArm Swift Pro, BCN3D Moveo × coût, charge utile, répétabilité, ouverture. Conclusion : Moveo comme référence inspirante (ouvert, démontable, abordable), simplification 6→3 axes pour scope pédagogique.
- **Rigueur sur le livrable EAT** : option chiffrée seule retenue (pas d'échappatoire qualitative `--/-/=/+/++`) — la valeur chiffrée est la norme, « n.c. » documente l'inaccessible.

**Round 2 (6 patches de relecture) :**
- Gras retiré sur « votre » (préambule)
- « attaqué un problème proche » → « réalisé un projet similaire »
- Gras déplacé : « **discriminer** » → « **discriminer les solutions entre elles** »
- BOM passé en popover (nouveau lien rouge `[[bom|BOM]]`)
- Titre H4 « Comparer en tableau et conclure » → « Comparer en tableau »
- Phrase sur l'échelle qualitative supprimée

### Étape 3 — « Formaliser les fonctions »

Structure : préambule + image pieuvre (placeholder cassé temporairement) + 2 sous-sections H4 (Identifier les milieux / Énoncer FP/FS/FC) + 1 `[!warning]` + 1 `[!example]` + ouverture FAST en prose + 1 `[!livrable]` 3/6.

**Décisions de fond :**
- **Trio FP/FS/FC retenu** (vs duo FP/FC) : FP relie deux milieux et justifie l'existence du système ; FS relie deux milieux mais répond à un service complémentaire non essentiel ; FC relie le système à un seul milieu, contrainte d'adaptation.
- **Anti-pattern central** : « Une fonction exprime un besoin, jamais une solution. » Règle pratique : si on peut citer une marque, un composant ou une technologie dans l'énoncé, on a dérapé. Porté par `[!warning]`.
- **Illustration pieuvre dans la trame** (option α retenue, parallèle exact `bete-a-cornes`) : placeholder image dans la fiche-trame, SVG `pieuvre-generique.svg` à produire à la session pieuvre avec référence visuelle canonique sous les yeux (leçon méthodo du 20/05 sur les outils canoniques).
- **Ouverture FAST en prose** en fin d'étape : la pieuvre donne le *quoi*, FAST donnera le *comment* en phase concept.

**Round 2 (1 patch de relecture) :**
- « faire le tour mental » → « construire une [[mind-map|mind map]] du système en situation réelle » (nouveau lien rouge `[[mind-map]]`)

### Nouvelles dépendances posées
- `[[bom|BOM]]` — tuto (acronyme + structure d'un BOM : préliminaire en spec, consolidée en concept, finale en dossier technique). Popover posé étape 2.
- `[[mind-map|mind map]]` — notion (outil méthodo générique, mobilisable bien au-delà de la pieuvre). Popover posé étape 3.
- `[[fast|FAST]]` — tuto (popover posé en ouverture étape 3, fiche à créer en phase 2 concept).
- `[[pieuvre]]` — déjà au TODO, désormais doublement prioritaire (popover + image SVG).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Question méta étape 4** : 3 fiches `critere`/`niveau`/`flexibilite` séparées vs 1 fiche unique « Caractériser une exigence ». À trancher en début de session étape 4.
- **Image pieuvre cassée dans la trame** : assumé temporairement. À résoudre lors de la session pieuvre.

---

## 2026-05-23 — Refonte specification-technique étape 1 + révision conventions callouts

### Périmètre de session
Refonte ciblée de l'étape 1 de `specification-technique.md` pour alignement sur les conventions figées le 22/05 (suite), ajout de la section Conclusion absente, réordonnancement final. Au cours de la session, 5 remarques de relecture utilisateur ont déclenché une révision **structurante** des conventions de callouts — répercutée dans les templates `fiche-trame.md` et `callouts.md`.

### Cadrage en début de session — 3 questions tranchées

1. **Fil rouge bras 3 axes vs couveuse pour l'étape 1** : décision = **garder la couveuse** comme `[!example]` illustrant la démarche standard (client externe), et **ajouter** un `[!example]` bras 3 axes après le paragraphe « Cas particulier : projet école sans client réel » pour amorcer le fil rouge dès l'étape 1. Argument : l'étape 1 est structurellement particulière (traite des deux postures client externe / projet école), donc 2 `[!example]` côte à côte est pédagogiquement justifié. **Convention « 1 `[!example]` = bras 3 axes » assouplie pour cette seule étape** (exception assumée).

2. **Convention « 1 `[!example]` par étape »** : ré-interprétée comme « **au moins** 1 `[!example]` obligatoire » et non « **exactement** 1 ». L'étape 1 actuelle est conforme (4 callouts : warning + example + tip + livrable). Faux écart retiré du programme.

3. **Périmètre de session** : refonte étape 1 + Conclusion + réordonnancement final. L'approfondissement de l'étape 2 reporté à session dédiée pour éviter une étape 1 propre + une étape 2 bricolée.

### Refonte spec-technique étape 1 — round 1 (7 patches)

- **Lexique** : « Cette **phase** ne demande pas » → « Cette **étape** ne demande pas » (Posture attendue)
- **Coquille** : « passer a le corriger » → « passé à le corriger »
- **Callout `[!warning]`** : titre `Piège : verrou technologique ≠ difficulté personnelle` → `Attention`, phrase-clé `**Verrou technologique ≠ difficulté personnelle.**` portée par le corps en gras
- **Callout `[!example]` couveuse** : titre `Exemple — Couveuse à œufs de poule` → `Sur la couveuse` (round 1)
- **Nouveau callout `[!example]` bras 3 axes ajouté** après le bloc « Cas particulier » (illustration de la posture étudiant-client-de-lui-même, plante le fil rouge dès l'étape 1)
- **Callout `[!tip]`** : titre `Pourquoi la bête à cornes paraît triviale (et ne l'est pas)` → `Astuce`, phrase-clé `**La bête à cornes paraît triviale, et c'est précisément là sa puissance.**` portée par le corps en gras
- **Section `## Conclusion` ajoutée** entre Équipe et Voir aussi (pont explicite vers `[[concept|concept]]`)
- **Voir aussi** : `Phase suivante : [[concept|Concept]] *(à créer)*` → `Étape suivante : [[concept|Concept]]` (la fiche existe désormais)

### Révision des conventions callouts — round 2 (déclenchée par la relecture)

À la relecture du round 1, 5 remarques utilisateur ont déclenché une révision **structurante** des conventions :

1. **Popovers à ajouter** dans l'objectif de la phase : `[[critere|critère]]`, `[[niveau|niveau]]`, `[[flexibilite|flexibilité]]` (notions), `[[etat-de-l-art-technique|état de l'art technique]]` (tuto). Liens rouges assumés.
2. **Popover à retirer** : `[[relation-client|client ou commanditaire du projet]]` → texte simple sans wiki-link (la notion « client » est trop générique pour mériter un popover ; `relation-client` reste dans Voir aussi en tant que tuto).
3. **Convention titre `[!example]` révisée** : `Sur le bras 3 axes` → **`Exemple : projet bras 3 axes`** (fiche-trame). `Couveuse` → **`Exemple : couveuse`** (fiche-notion). Logique : préfixe `Exemple : ` partout, plus explicite, lecture-friendly.
4. **Convention titre `[!livrable]` révisée** : `Livrable de l'étape N` → **`Livrable N/X — <Nom de la phase>`** (singulier) ou **`Livrables N/X — <Nom de la phase>`** (pluriel selon le nombre d'items listés). N = numéro de l'étape, X = nombre total d'étapes de la phase. Nom de phase en toutes lettres. Logique : un lecteur qui tombe directement sur la fiche (recherche, lien externe) se situe immédiatement dans le cycle en V.
5. **Convention titre `[!warning]` / `[!tip]` confirmée** : titre **fixe** (`Attention` / `Astuce`), phrase-clé porteuse du message **obligatoirement** portée par le corps en gras, jamais par le titre. Confirme le revirement vs la pratique de `concept.md` et des 3 autres trames du 22/05 (qui utilisent encore des phrases-clés en titre).

### Application des nouvelles conventions — 3 fichiers patchés

- **`specification-technique.md`** étape 1 : 4 patches supplémentaires (objectif + 2 `[!example]` + 1 `[!livrable]`) en plus des 7 du round 1. Étape 1 désormais 100 % alignée sur les conventions v2.1.
- **`templates/fiche-trame.md`** : bloc « CONVENTIONS À RESPECTER » réécrit (points 1, 2, 3) + commentaire HTML de motif d'étape patché + 3 étapes-exemple alignées.
- **`templates/callouts.md`** : sections `[!warning]`, `[!tip]`, `[!example]` et `[!livrable]` mises à jour avec les nouvelles conventions et exemples cohérents.

### Conséquence — dette d'alignement des 4 trames du 22/05

`concept.md`, `preuve-de-concept.md`, `dossier-technique.md`, `integration-et-tests.md` utilisent encore les anciennes conventions (`Sur le bras 3 axes`, `Livrable de l'étape N`, phrases-clés en titre des `[!warning]`/`[!tip]`).

**Décision actée** : pas d'alignement rétroactif systématique en session dédiée. L'alignement se fera à l'approfondissement de chaque trame, naturellement. **Conséquence assumée** : `specification-technique` devient temporairement plus rigoureuse que les autres trames sur la convention callouts — acceptable, c'est la fiche pilote du parcours étudiant.

### Vérification visuelle

- **`specification-technique.md` étape 1** : vérification visuelle sous Quartz **OK** (utilisateur, fin de session).
- **`templates/fiche-trame.md`** et **`templates/callouts.md`** : vérification visuelle **à faire** en début de session suivante (modifications patchées n'ont pas été revérifiées visuellement post-round 2).

### Exception assumée — titre `[!terrain]`

Le titre `Vu dans une ancienne promo` reste **non fixe** (variantes possibles : `Vu dans la promo 2024`, etc.), contrairement aux autres callouts qui ont tous reçu un titre fixe. Cohérent avec la sémantique de retour d'expérience daté. Convention conservée en l'état.

### Leçon méthodo — chemin différent par poste pour MCP filesystem

Le contexte de session pointait vers `C:\Users\timothe.turko.ICAMAD\...` (PC pro), or la session s'est déroulée sur le PC perso (`C:\Users\turko\...`). Tentative initiale d'accès échouée (`path outside allowed directories`), résolue en pivotant sur le bon chemin. **À retenir** : le serveur MCP filesystem ne sert que les directories autorisées du poste courant ; vérifier `list_allowed_directories` (ou échec d'accès) pour pivoter sans tergiverser.

### Leçon méthodo — nom du serveur MCP variable par poste

Les consignes du projet pointaient vers les outils préfixés `theskillcodex:*`. Sur ce PC perso, le serveur MCP filesystem est exposé sous le préfixe **`filesystem:*`** (mêmes capacités, même sémantique d'écriture sur disque). Validation par lecture des fichiers à jour (JOURNAL cohérent avec le contexte de session). **À retenir** : le préfixe peut varier d'un poste à l'autre selon le nom donné au serveur dans la configuration MCP — vérifier les outils disponibles plutôt que se fier au nom attendu.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes
- **Alignement rétroactif des 4 trames du 22/05** sur les conventions callouts v2.1 : à faire à l'approfondissement de chacune.
- **Vérification visuelle des 2 templates patchés** au round 2 : à faire en début de session suivante.
- **Acquisition des 4 nouvelles notions/tuto** (`critere`, `niveau`, `flexibilite`, `etat-de-l-art-technique`) : popovers posés, fiches à créer.

---

## 2026-05-22 (suite) — Charte callouts v2 + templates fiche-trame et fiche-notion

### Périmètre de session
Production du template `fiche-trame.md` à partir des 5 trames stabilisées du 22/05 matin (specification-technique étape 1 + les 4 squelettes du cycle en V). Introduction au passage d'une charte graphique des callouts (palette v2). Vérification + refonte du template `fiche-notion.md` en fin de session.

### Cadrage en début de session — 4 questions tranchées

1. **Format du template** : sections vides avec commentaires HTML inline + exemple intégré pour les seuls éléments structurellement non évidents (placeholder italique + callouts fil rouge). Argument : un template entièrement pré-rempli pousserait l'auteur à copier-paraphraser au lieu de réfléchir.

2. **Granularité des commentaires** : commentaires HTML inline, courts à moyens, pointant vers la charte callouts séparée. Pas de fiche méthodo séparée créée maintenant (option B retenue — elle viendra si le besoin se confirme).

3. **Fil rouge dans le template** : présenté (bras 3 axes) avec convention de titre `Sur le bras 3 axes` figée. Pour les transverses, mention explicite dans le guide que la structure « démarche en étapes » peut ne pas s'appliquer telle quelle.

4. **Fiche-notion en fin de session** : OK, traitée (voir section dédiée plus bas).

### Charte callouts v2 — décisions de fond

Proposition initiale utilisateur de palette pastel saturée (ambiance lecture longue) : `[!question]` `#85A2BD`, `[!info]`/`[!note]`/`[!example]`/`[!terrain]` fusionnés `#FAF6EC`, `[!tip]` `#C1D3BB`, `[!warning]` `#FFBD5B`, `[!danger]` `#F08A6A`, `[!livrable]` `#E2BDF9`. Critique constructive Claude + débat → 6 décisions structurantes :

1. **Fusion `[!info]`+`[!note]` maintenue**, mais **différenciation `[!example]`/`[!terrain]` vs `[!info]`/`[!note]`** : ne pas noyer le callout pédagogiquement le plus important (`[!example]`, 1 par étape obligatoire en trame) dans une couleur indistincte de `[!info]`. Résultat : `[!example]`/`[!terrain]` reçoivent une teinte pêche pâle `#F9E6D4` distincte du crème `#FAF6EC` des info/note.

2. **`[!warning]` désaturé** : `#FFBD5B` initial trop saturé par rapport au reste de la palette pastel. Bascule sur `#F5C77D` (ambre plus doux), puis éclairci en `#FADFAF` après la passe d'éclairement globale.

3. **`[!success]`/`[!check]`/`[!done]` créés avec la couleur de `[!tip]`** : sémantique proche, fusion acceptée.

4. **Mode sombre reporté** à une session ultérieure : les étudiants travaillent principalement en mode clair. Reporté dans TODO/BACKLOG, pas d'urgence.

5. **Approche `--color` sombre + `--bg` clair conservée** : la palette utilisateur définit les `--bg`, Claude propose des `--color`/`--border` plus profonds dérivés. Évite le piège « texte de même couleur que fond ». Approche A validée.

6. **Passe d'éclairement globale** sur 6 callouts (question, tip/success, warning, danger, example/terrain inchangé, livrable) après validation visuelle : palette trop saturée en V1.0 du SCSS. Interprétation A retenue (un cran plus pâle, sans aller jusqu'au quasi-blanc) pour préserver la gradation hiérarchique entre callouts.

### Charte callouts v2 — palette finale figée

| Callout | Fond (`--bg`) | Titre / filet (`--color`) |
|---|---|---|
| `[!question]` | `#B5C5D6` | `#3B5F7F` |
| `[!info]` / `[!note]` | `#FAF6EC` | `#8C7E5C` |
| `[!tip]` / `[!success]` / `[!check]` / `[!done]` | `#D8E3D3` | `#5C8556` |
| `[!warning]` | `#FADFAF` | `#A8761F` |
| `[!danger]` / `[!failure]` / `[!bug]` | `#F6B5A0` | `#A33A1F` |
| `[!example]` / `[!terrain]` | `#F9E6D4` | `#A86A3F` |
| `[!livrable]` | `#EED9FB` | `#6B3B96` |

Icônes natives Quartz/Obsidian conservées (option B) : pas d'emoji additionnel dans les titres pour `[!warning]` et `[!danger]`.

### Conventions de titres de callouts — figées

Observation des patterns réels dans les trames du 22/05 + décision utilisateur :

- `[!question]` : `Question : <la question posée>` (le titre EST la question)
- `[!info]` / `[!note]` : `Info` ou `À retenir`
- `[!tip]` / `[!success]` : `Astuce` ou `Succès`
- `[!warning]` : `Attention` (icône native suffisante)
- `[!danger]` : `Danger` (icône native suffisante)
- `[!example]` dans une **fiche-trame** : `Sur le bras 3 axes` (fil rouge unique du projet)
- `[!example]` dans une **fiche-notion** : nom court du cas d'illustration (`Couveuse`, `Bras 6 axes industriel`)
- `[!terrain]` : `Vu dans une ancienne promo`
- `[!livrable]` : `Livrable de l'étape N` (singulier) ou `Livrables de l'étape N` (pluriel)

### Convention de coexistence des cas d'illustration — figée (rappel)

Déjà actée le 22/05 matin, **inscrite dans les commentaires du template `fiche-notion.md`** :
- Fiches-trame → fil rouge unique du projet (bras 3 axes)
- Fiches-notion → cas autonome choisi pour la notion (varié : couveuse, bras 6 axes, etc.)

### Règle de densité callouts — révisée

Ancienne règle (palette v1) : « 0 à 3 callouts par fiche sauf cas justifié ». Révision v2 : **exception assumée pour les fiches-trame** (5-10 callouts par fiche est la norme, 1 `[!example]` + 1 `[!livrable]` par étape obligatoires, plus warnings/tips ponctuels). Inscrit dans `callouts.md`.

### Production des templates

#### `templates/callouts.md` (refonte complète v1 → v2)
Nouveau plan : Règle générale + Charte graphique (tableau) + 8 callouts documentés avec sémantique + convention de titre + exemple markdown + rendu Quartz. Note `quartz/styles/custom.scss` comme source des couleurs CSS. Décision pliage maintenue en attente. La v1 reste traçable dans Git.

#### `templates/fiche-trame.md` (nouveau)
Extrait des 5 trames stabilisées. Structure :
- Front matter complet (type/phase/phases/tags/prerequis/aa/draft)
- Popover
- ## Posture attendue
- ## Objectif de la phase
- ## Démarche (3 étapes d'exemple ; commentaire explicite « dupliquer pour ajouter, plafond pratique 5-6 étapes »)
- ## Pièges fréquents
- ## Pendant cette phase, côté équipe
- ## Conclusion
- ## Voir aussi

Commentaires HTML pédagogiques par section + 1 bloc « CONVENTIONS À RESPECTER » dans la Démarche (callouts obligatoires/optionnels, lexique étape vs phase N, incertitude vs point dur, noms de phases en toutes lettres). 3 étapes-exemples dans le squelette pour montrer le motif sans alourdir.

Test de reconstitution mentale sur `concept.md` : ✅ le template permet de reconstruire les 4 trames du 22/05.

#### `templates/fiche-notion.md` (refonte complète v1 → v2)
L'ancien template datait du 19/05, antérieur à la typologie 3 types. Manques principaux : pas de `type: notion`, pas de `phases:`, pas de tag `notion`, structure de corps trop générique. Refonte sur le modèle de `fiche-trame.md` (même esprit de commentaires HTML) + alignement sur la pratique observée dans `bete-a-cornes.md` (la seule fiche-notion réelle produite à ce jour).

Structure :
- Front matter complet (`type: notion`, `phases:`, `tags: [notion + domaine]`, `prerequis`, `aa`, `draft`)
- Popover (catégorie : outil/méthode/concept/norme...)
- ## À quoi ça sert ? (obligatoire)
- ## Comment \<verbe adapté\> ? (titre adaptatif : construire / câbler / calculer / appliquer / implémenter)
- ## Exemple — \<Nom court du cas\> (convention de titre incarné, cas autonome)
- ## Pièges (obligatoire, pièges en **gras court** suivis d'explication, pas de puces)
- ## Cas particulier — \<sujet\> (optionnel, à supprimer si non nécessaire)
- ## Aller plus loin (optionnel)
- ## Voir aussi (format `[[cible|texte]] — description`)

Test de reconstitution mentale sur `bete-a-cornes.md` : ✅ le template permet de reconstruire la fiche.

### Décisions structurelles annexes

#### `templates/fiche-trame.md` — réordonnancement des sections finales
Après première validation utilisateur, **réorganisation de l'ordre des sections post-Démarche** :
- Ancien : Démarche → Conclusion → `---` → Pièges → Équipe → Voir aussi
- Nouveau : Démarche → `---` → Pièges → Équipe → **Conclusion** → Voir aussi

Argument utilisateur : la Conclusion (pont vers la phase suivante) gagne à être la dernière section utile **avant** le « Voir aussi », plutôt qu'enclavée entre la Démarche et les Pièges. L'étudiant qui termine la lecture utile tombe sur la transition vers la phase suivante au bon moment.

**Conséquence sur les 4 trames du 22/05 + `specification-technique`** : décalage avec le template. **Décision : pas d'alignement rétroactif** (option B retenue). L'alignement se fera à l'approfondissement de chaque trame, naturellement.

#### `_templates/` renommé en `templates/`
Lors de la session, plusieurs frictions sur l'accès aux fiches du dossier `_templates/` :
1. Le dossier était dans `ignorePatterns` (`quartz.config.ts`) — ignoré par le build Quartz. **Retiré** : décision éditoriale « `templates/` public » actée.
2. Même après retrait, l'URL `localhost:8080/_templates/...` renvoyait 404. Cause probable : serveur HTTP de développement gère mal les URLs commençant par underscore. **Renommage** `_templates/` → `templates/` acté comme solution durable.
3. Références internes patchées dans `fiche-trame.md`. `templates/index.md` mis à jour pour lister les 3 fiches.

#### Templates passés en `draft: false`
Le `Plugin.RemoveDrafts()` filtrait les templates eux-mêmes à cause de leur `draft: true`. **Résolution** : le template est de la doc, pas un brouillon. Passés en `draft: false`. Note explicite ajoutée dans le guide HTML : « le template lui-même est `draft: false` ; les fiches que vous créerez à partir de lui doivent commencer en `draft: true` tant qu'elles ne sont pas relues ».

### Fiche-démo jetable `callouts-demo.md`
Fiche créée en cours de session pour valider visuellement la palette callouts v2 sous Quartz (Obsidian ignore le SCSS Quartz, le rendu navigateur était la seule façon de vérifier). Servi depuis `content/callouts-demo.md` (contournement temporaire du problème underscore qui a finalement été résolu par le renommage). **Mission accomplie**, fiche jetable. Suppression à faire à la main (le serveur MCP filesystem n'a pas d'outil delete par sécurité).

### Leçon méthodo — Obsidian vs Quartz
Les couleurs CSS définies dans `quartz/styles/custom.scss` ne sont **pas** lues par Obsidian. Obsidian a son propre moteur de rendu et son propre thème. Pour valider visuellement la palette : **Quartz local obligatoire** (`npx quartz build --serve`). Obsidian reste pertinent pour la rédaction (vitesse, popovers natifs, recherche) mais pas pour valider le rendu visuel du site. Possible d'aligner Obsidian via un snippet CSS dans `.obsidian/snippets/` mais doublon de maintenance — pas la peine.

### Leçon méthodo — modifications de `quartz.config.ts`
Les changements de `quartz.config.ts` (config TypeScript) ne sont **pas** pris en compte par le hot reload. Il faut `Ctrl+C` puis relancer `npx quartz build --serve`. À retenir comme réflexe quand une modif de config ne semble pas prise en compte (`ignorePatterns`, locale, etc.).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes
- **Mode sombre des callouts** : non décliné en v2. À traiter dans une session ultérieure quand on aura du recul d'usage.
- **Pliage des callouts** : toujours pas tranché (`[!example]-` replié par défaut ?). Note ajoutée dans `callouts.md` v2 que la décision est en attente.
- **Alignement rétroactif des 5 trames** sur le nouvel ordre de sections : volontairement non fait. Se traitera à l'approfondissement de chaque trame.
- **Suppression de `content/callouts-demo.md`** : à faire à la main par l'utilisateur (pas d'outil delete MCP).

---

## 2026-05-22 — Squelettes des 4 fiches-trame du cycle en V

### Périmètre de session
Production des 4 squelettes manquants du cycle en V (`concept`, `preuve-de-concept`, `dossier-technique`, `integration-et-tests`), à partir du matériau des flowcharts de phase produits les 20-21/05. Squelettes transverses (`gestion-de-projet`, `ecoconception`, `securite-et-qualite`) reportés en session dédiée (les transverses ne se traitent pas comme des phases : pas de « démarche en étapes » au sens cycle en V, plutôt des « postures à tenir tout au long du projet »).

### Décisions de cadrage en début de session

4 questions ouvertes tranchées avant production :

1. **Ordre de production** : descendant strict du V (concept → PoC → dossier → intégration). Argument : la symétrie du V est déjà *montrée* par le SVG macro, pas besoin d'être *éprouvée* par l'ordre de rédaction. Cohérence narrative du parcours étudiant préservée.

2. **Niveau de détail des étapes** : transposition non linéaire des flowcharts vers les trames. Plafond pratique 5-6 étapes par trame ; au-delà la fiche devient illisible sur smartphone. Compression systématique : 9→10 étapes brutes des flowcharts → 4-5 mouvements pédagogiques. **Argument méthodo retenu** : les flowcharts sont des outils d'analyse, les trames sont des outils de progression pédagogique — leurs granularités optimales diffèrent.

3. **Popovers dès le squelette** : oui, sur popover/objectif/titres d'étapes. Coût zéro et fait émerger la liste des notions à créer pour tracking BACKLOG. Liens rouges assumés (décision du 20/05).

4. **« Voir aussi » dès le squelette** : oui, mais discipline — uniquement les liens structurels évidents (phase précédente/suivante, fils transverses, notions centrales). Pas de chasse aux liens.

### Périmètre revu en début de session

Programme initial : 4 phases + 3 transverses + extraction du template = 8 unités. **Acte de prudence méthodo** : ramené à 4 phases + extraction du template si temps. Argument : les transverses méritent une session dédiée (structure différente), les bâcler en fin de session du soir serait dommage. Extraction du template finalement reportée aussi (densité de session déjà forte avec 2 passes de patchs sur les 4 trames).

### Production des 4 squelettes

| Trame | Étapes brutes (flowchart) → étapes (trame) | Notes |
|---|---|---|
| `concept` | 9 → 5 | Étape pivot = arbitrage architecture globale |
| `preuve-de-concept` | 8 → 4 | 3 sorties de phase explicites (concluant/ajuster/intenable) |
| `dossier-technique` | 10 → 5 | Multi-validation à 3 visible dès l'étape 4 ; étape 5 = point de non-retour |
| `integration-et-tests` | 10 → 5 | Pyramide de tests à 4 niveaux fonctionnels condensée en étape 3 ; pas de rétroaction sortante |

### Relecture critique — 6 corrections de fond

Après relécture du squelette `concept`, 6 corrections demandées :

1. **« Dérisquer » banni** dans toute production étudiante → « lever une incertitude » / « valider le fonctionnement ». Reste utilisable dans les échanges méthodo internes (sessions de travail). Lexique étudiant : termes à proscrire → BACKLOG.

2. **Noms de phases en toutes lettres** : jamais « phase 1/2/3/4/5 » dans la prose ou les liens. Toujours « spécification technique », « concept », etc. Conv. rentrée dans les wiki-links : `[[specification-technique|spécification technique]]`.

3. **Notion `[[decomposition-fonctionnelle]]` à créer** : popover posé dans `concept.md` étape 1. Le `schema-bloc-fonctionnel` n'est qu'**un** outil de décomposition, il manque la notion-mère.

4. **Plus de callouts pédagogiques, moins de tout-livrable** : appliqué via un **fil rouge unique** — voir décision projet fil rouge ci-dessous.

5. **Paragraphes trop courts** : se régleront naturellement à l'approfondissement avec les exemples du fil rouge. Pas d'action immmédiate sur le squelette.

6. **« Point dur » → « incertitude »** : remplacement systématique. La phase 3 devient « lever les incertitudes du concept » plutôt que « dérisquer les points durs ». Sémantique cohérente avec correction 1.

### Décision structurante — projet fil rouge unique

L'hétérogénéité des cas d'illustration (`specification-technique` utilise une couveuse, `bete-a-cornes` utilise un bras 6 axes) pose un problème de charge cognitive : chaque fiche force l'étudiant à recharger un contexte projet.

**Choix acté** : **bras robotique pédagogique 3 axes** comme fil rouge unique pour les 4 trames produites. Trois raisons :
- Mécatronique canonique (élec + méca + info, conflits inter-disciplines naturels)
- Volontairement simple (3 axes vs 6, imaginé en 30 s)
- **Opportunité d'ancrage** : un étudiant de l'utilisateur travaille sur ce sujet et pourra servir de relecteur réel sur la cinématique

**Cadrage figé** :
- Client/contexte : enseignant en mécatronique souhaitant un bras pédagogique démontable et reproductible
- Architecture cible (à découvrir au fil des trames, pas spoilée) : 3 axes rotatifs, steppers + drivers, microcontrôleur unique, structure imprimée 3D, IHM PC
- Incertitudes plausibles : tenue mécanique articulations 3D, précision bout de bras, commande synchronisée des 3 steppers
- Critères CdCF chiffrables : précision ± 5 mm en bout, charge utile 100 g, vitesse 50 mm/s

**Coexistence avec `bete-a-cornes.md`** : la fiche conserve son cas illustratif autonome (bras 6 axes industriel) — c'est une fiche-notion d'outil méthodologique, son cas a vocation à illustrer la notion, pas à servir de fil rouge. **Convention actée** : les fiches-trame partagent un fil rouge unique, les fiches-notion ont leur propre cas d'illustration choisi pour la notion. Pas de retravail rétroactif sur `bete-a-cornes`.

### Incarnation du fil rouge — conventions de callouts

- **1 `[!example]` par étape**, court (3-5 lignes), incarne l'étape sur le bras 3 axes
- `[!warning]` et `[!tip]` optionnels selon situation : warnings pour anti-patterns ou messages forts (« conflit inter-disciplines arrive presque toujours », « pas d'achat à titre personnel », etc.), tips pour clarifications utiles
- Fil rouge se construit progressivement au fil des phases (incertitude identifiée au concept → testée en preuve → ajustement intégré en dossier technique → écart final documenté en intégration). C'est exactement le message pédagogique du cycle en V.

**Total après 2ᵉ passe de patchs** : 19 `[!example]` + 5 `[!warning]` + 1 `[!tip]` = 25 callouts pédagogiques sur les 4 trames.

### Ajout d'une section « Conclusion »

**Décision actée** sur retour utilisateur : ajouter en fin de démarche (après le dernier livrable, avant le séparateur `---`) une section `## Conclusion` courte qui :
- récapitule l'état à la sortie de l'étape
- pose le pont explicite vers la phase suivante (lien interne en prose)
- ferme sur le hub pour la dernière phase (pas de phase suivante)

**Argument** : avant cet ajout, le seul accès à la trame suivante était dans la section « Voir aussi » tout en bas, après les pièges et la section équipe. L'étudiant qui termine la lecture de la démarche n'avait aucun pont vers la suite. Pattern à répliquer sur `specification-technique` lors de son approfondissement.

### Convention rédactionnelle implicite

Dans la prose : **« étape »** (de la démarche, du projet) plutôt que **« phase »** lorsque le mot « phase » pourrait prêter à confusion avec « phase N du cycle en V ». Application : posture, objectif, transitions. Le mot « phase » reste utilisé dans les métadonnées structurelles (front matter `phase: 2`, hub) et les cas où il n'y a pas d'ambiguïté.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes
- **Extraction du template `_templates/fiche-trame.md`** : reportée à la prochaine session. 5 trames stabilisées en main (specification-technique + les 4 nouvelles), conventions consolidées, c'est le bon moment pour figer la méthode.
- **Refonte `specification-technique.md` étape 1 + ajout Conclusion** : étape 1 ne suit pas la convention « 1 callout par étape » (3 callouts), et la fiche n'a pas de section Conclusion. À traiter lors de l'approfondissement des étapes 2-6.

---

<!-- Sessions antérieures (21/05 et avant) déplacées dans `JOURNAL-archive.md` lors du nettoyage documentaire du 25/05. -->
