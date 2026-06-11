# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).
> Sessions antichronologiques antérieures au 08/06 archivées dans `JOURNAL-archive.md`
> (mise en place initiale du dépôt, trame projet cycle en V, squelettes du V,
> rédaction de `specification-technique.md`, trames transverses et fiches-notion,
> modules MCU complets — ESP32, STM32, Teensy, ESP8266, MicroPython, Raspberry Pi —,
> clôture MME, squelette pro EEE, sweep liens rouges pré-publication ;
> dernière coupe : β du 10/06, sessions 06/06 → 07/06 suite 3).

<!-- INSERT_JOURNAL_HERE -->

## 2026-06-11 — Grooming conventions.md (promotions §6 + élagage §8)

### Périmètre
PC perso (`filesystem:*` direct). Session de maintenance documentaire (Cas A, 2ᵉ volet après l'archivage JOURNAL du 10/06) : grooming de `conventions.md` — promotions §8→§6 et élagage des blocs d'éprouvage clos. Aucune production de fiches. 0 git (Tim pilote).

### Livrables
- **conventions.md 112→103 ko** : nouveau cluster §6 « Modules MCU — conventions de famille » (sous C18) + élagage §8.
- **BACKLOG.md** : anomalie C50 logée (section Décisions en attente).

### Décisions
- **6 conventions de famille MCU promues §6** (arbitrage Tim en deux temps : C32/C45/C56/C57 puis C25/C26) : **C25** (4 paliers), **C26** ([A]/[T]), **C32** (marqueur → notion), **C45** (AA porté par le hub), **C56** (lean-Bases, **reformulation actée** — déclencheur = couverture des périphériques de base ailleurs, indépendamment de la nature de la porte ; cran ESP8266 = mutualisation de capacité signature), **C57** (clone de curriculum + contre-cas SBC en borne).
- **C50 = numéro orphelin confirmé** : aucune définition nulle part (conventions.md / JOURNAL / archive / BACKLOG) ; Tim a confirmé que Claude est seul responsable du nommage — slip de numérotation assumé. Référence neutralisée dans la note §8 du 06/07, anomalie logée BACKLOG. **Ne jamais réaffecter C50** ; numéroter à partir du plus haut atteint (C65).
- **Élagage §8 cadré** : bloc 28/05 suite 2 (C25/C26) → pointeur une-ligne ; **7 blocs MCU per-session 06/06 suite 6→12** (~14 ko de logs d'éprouvage) → une synthèse condensée pointant le cluster §6 (détail au JOURNAL archivé). **Préservés** : toutes les candidates en vol (C19/C20/C23/C27/C28/C46/C55, C58→C65) et la chaîne C14 (load-bearing).

### Conventions
Aucune nouvelle convention numérotée (maintenance).

### Tailles
conventions.md 103 ko · JOURNAL.md 27 ko (hors cette entrée) · BACKLOG.md 58 ko.

Acquis méthodo : la copie locale sandbox de `conventions.md` (dump initial de session) avait **divergé du disque** — un `edit_file` a échoué sur un `oldText` recopié depuis elle. Confirme C14 sous un angle nouveau : recopier l'`oldText` verbatim depuis une **lecture MCP fraîche**, jamais depuis une copie locale, même issue d'un dump de la même session (le fichier peut avoir été édité entre-temps). Le fichier disque est par ailleurs propre d'invisibles (ancres ASCII matchent directement).

Complément (même session, reprise PC pro) : mentions « promouvable § 6 » caduques neutralisées dans les items 32/35/36/45/50 du §8 (→ « promue §6 le 10/06 ») + ancre d'intro corrigée (`#7-` → `#8-en-cours-déprouvage`, lien interne cassé depuis la renumérotation des sections). **Grooming TODO.md exécuté dans la foulée : 77,3 → 6,3 ko** (réécriture complète `write_file`) — pile de ~25 flèches historiques remplacée par une flèche unique ➤ MAJ 11/06 ; sections faites supprimées (« 0. Session annexe », items cochés des phases 0-5, « Tâches techniques » vidée, bloc C10-C14 des « Décisions éditoriales » purgé — doublons de conventions.md) ; préservés : 3 items cadrage, validation d'ensemble, 4 items Pré-publication MVP (dont « vérifier lot Phase 0 GP »), 4 fiches d'alimentation continue + porte Pico-SDK, 3 SVG voie A. Au passage : premier pull post-réorganisation 3 branches sur PC pro — échecs Windows de suppression de dossiers (verrous) sans conséquence git ; coquilles vides `content/hub` et `content/fiches` supprimées à la main par Tim. Reste ouvert : déviation `micropython-serie`→`micropython-repl` toujours à valider par Tim.

---

## 2026-06-10 (suite) — Réorganisation physique en 3 branches (dossiers) + repointage des liens index

### Périmètre
PC perso (`filesystem:*` direct). Session dédiée (Cas A) : **déplacer `content/` en 3 dossiers de branche** pour que l'**Explorer Quartz reflète les 3 branches métier** (Conduite de projet / Système embarqué / Méca). Cadrage D → `git mv` côté Tim → Claude inventorie et repointe les liens index. 0 git (Tim pilote).

### Livrables
- **Structure 3 branches (option B — la branche EST son hub)** : `content/conduite/` (index = le cycle en V, ex-`hub/index` ; sous-dossiers `proj`/`meo`/`ese` préservés) · `content/embarque/` (index = ex-`fiches/eee/index` ; `eee` **dissous**, sous-dossiers `mcu`/`algorithme`/`realisation`/`mesure`/`pcb`/`simulation` conservés) · `content/meca/` (ex-`fiches/mme/index`, `mme` dissous). `content/fiches/` supprimé. `content/index.md` (accueil) inchangé à la racine. Traçabilité AA préservée (sous-dossiers de domaine gardés là où multi-critères).
- **Inventaire exhaustif** : 225/225 fiches scannées (méthode `read_multiple_files` → déversement sandbox → grep `bash`). **32 liens index à chemin complet** repérés, 2 familles : `[[hub/index|…]]` (17) et `[[fiches/<dom>/index|…]]` (15). Aucun `[[fiches/…]]` non-index, aucun `](/fiches/…)`, aucun embed relatif.
- **32 repoints** appliqués (17 fichiers, `edit_file` ancres verbatim) → `[[conduite/index]]` ×17, `[[embarque/index]]` ×11 (accueil + 10 réalisation), `[[meca/index]]` ×1, `[[conduite/{meo,ese,proj}/index]]` ×1 chacun — **forme chemin-complet-depuis-`content/`** (seule résolvante, cf. angle mort `x/index` du 10/06). Libellés conservés tels quels (l'harmonisation « Hub du parcours projet » vs « hub du tutoriel » reste au BACKLOG).
- **`quartz.layout.ts`** : l'Explorer masque désormais `ressources` en plus de `templates` (sur les 2 layouts).
- **`_drafts/relecture-ordre.md`** : 6 libellés d'index réalignés sur les nouveaux chemins.
- **Straggler nettoyé** : `schema-bloc-fonctionnel` portait 2 wikilinks **relatifs** `[[../proj/…]]` (invisibles au scan index, cassés par le déplacement) → normalisés en slugs nus (item ouvert du 10/06 clos).
- **Vérification finale** (dump frais des 17 fichiers touchés) : **0 résidu** `hub/index` / `fiches/`, nouvelles cibles toutes présentes et cohérentes. Intégrité des liens du dépôt totale.

### Décisions (Tim)
- **Option B** retenue (branche = son hub) ; **`conduite/index` = le cycle en V** directement (pas de wrapper) ; MAJ `relecture-ordre.md` dans la foulée validée.
- **C60 révisée** : le « non-déplacement » de 08/06 est levé (raisons caduques avant publication) → déplacement physique assumé.

### Conventions
- **§8** : bloc « Acquises 10/06 (suite) — réorganisation physique » révisant **C60** (3 branches = dossiers physiques, option B, forme chemin-complet ; pré-requis de promotion en §6 = clic-test au rendu).

### Acquis méthodo (narratif)
Le déversement `read_multiple_files` → `/mnt/user-data/tool_results/` ne se déclenche **que** lorsque le résultat dépasse le contexte (gros lot) ; un petit lot revient **inline**. D'où un balayage en gros lots volontaires (par branche), chacun dumpé, puis grep `bash` cumulatif via un parseur réutilisable (segmentation par en-tête de chemin Windows, basename par split `\`). Piège à retenir : `tool_results/` est **en lecture seule** — on ne peut pas purger les dumps périmés avant la vérification post-édition ; le parseur dé-doublonne par chemin (garde la 1ʳᵉ occurrence), donc pour vérifier à frais il faut grep **le seul dump le plus récent** (par `ls -t`), pas relancer le scan global. L'angle mort `x/index` (10/06) a guidé toute la forme des repoints : seule la forme chemin-complet résout, et seul le clic-test au rendu la confirme — d'où le clic-test laissé à Tim comme unique filet.

### Tailles
17 fiches repointées (±0 ko, substitutions) + `schema-bloc-fonctionnel` (±0) ; `quartz.layout.ts` (+petit) ; `conventions.md` ~+1,5 ko ; `_drafts/relecture-ordre.md` (6 lignes) ; JOURNAL ~+3,5 ko.

## 2026-06-10 — Relecture humaine : colonne « Système embarqué » terminée (6/6) + 3 SVG

### Périmètre
PC pro (`theskillcodex:*` déférés). Session de relecture humaine sur rendu Quartz : hub `eee/index` + les 5 fiches `eee/realisation/`, corrections appliquées au fil (Tim lit, Claude propose, Tim tranche, Claude applique). Détour sur `schema-bloc-fonctionnel` (devenue fiche-livrable de l'étape 1). 0 git (Tim pilote).

### Livrables
- **Colonne relue et validée intégralement** — 6/6 cochées au tableau de bord (le §17 du tableau de bord a été étendu aux 6 lignes de la colonne).
- **Lien mort systémique corrigé** : `[[eee/index|…]]` ne résout pas (slug réel `fiches/eee`) → `[[fiches/eee/index|…]]`, 10 occurrences sur les 5 fiches.
- **3 SVG voie A neufs** : `schema-bloc-fonctionnel-generique` (conventions : frontière pointillée, 3 styles de flux, blocs par fonction) et `-couveuse` (remplaçant un Mermaid hors charte ; rails 230 V et 5 V ajoutés) ; `concevoir-l-electronique-bras-3-axes` (schéma de principe annoté de synthèse, pastilles d'étapes ①-⑤ — validé smartphone).
- **Corrections de fond par fiche** : `choisir` — scores de matrice recalculés (3,4/4,8/4,1), notes traçables, ≈ 15 E/S harmonisées, capteurs conservés malgré la boucle ouverte (calibrage/surveillance) ; `concevoir` — tableaux MCU/GPIO, rails réalistes (5 V → VIN, 3,3 V embarqué), liaison opérateur Wi-Fi vs console série harmonisée sur 3 fiches, tip « droit de ne pas savoir — pas de ne pas tester », « routage » retiré de la posture, livrables 2-4/5 renommés en artefacts nominaux ; `programmer` — étage langage naturel (recette de cuisine), warning « code juste, mauvaises broches » (contexte obligatoire pour toute demande de code, IA comprise), `programmation-non-bloquante` enfin liée, environnement constructeur ajouté ; `faire-communiquer` — optionnalité réancrée sur le CdCF, tableau d'aide au choix sans fil (portée/débit/conso/infra), « bus imposé par le composant », test de fumée bout-en-bout ; `fiabiliser` — test « Mesurer » corrigé métrologiquement (référence externe, < 0,2°, instrument plus juste que la tolérance), principe « CdC → tests individuels puis simultanés », mémoire/veille incarnées.
- **Hub** : livrable 1/7 repointé sur `schema-bloc-fonctionnel` ; passe stylistique complète (accroches étapes 2/4/5, registre tu généralisé, labels 1/7-2/7 nominalisés, livrable 5/7 « si le cahier des charges l'exige », note de bas de page EEE/MIA).

### Décisions (Tim)
- **`aa: []` confirmé vide** pour les 6 pages de la colonne (C64-c) ; exception « instruments » sur `fiabiliser` rejetée.
- **Registre tu/on : contraste conservé** et promu en candidate **C65** (trames du V = on/infinitif ; colonne réalisation + hubs de branche = tu).
- **Réorganisation des dossiers en 3 branches validée** (option 2, révise C60) — session dédiée inscrite au TODO ; fenêtre idéale avant publication (URL non publiées, embeds absolus, wikilinks par slug).
- Optionnalité de l'étape 5 : **le cahier des charges décide** (fiche + hub + sommaire alignés).
- Tests : principe pédagogique inscrit — partir du CdC, valider chaque exigence individuellement puis en simultané.

### Conventions
- Candidate **C65** (registre par type de trame) inscrite en §8 ; **C64-c confirmée** (10/06).

### Acquis méthodo (narratif)
Deux leçons techniques. (1) **Angle mort des audits de liens** : un wikilink de forme `x/index` échoue à la résolution Quartz alors qu'il est propre côté source — le scan bash ne peut pas le voir, seul un clic-test au rendu le révèle (→ BACKLOG : vérifier les autres `x/index` du site). (2) **SVG** : une règle CSS de classe écrase les attributs de présentation (`text-anchor`, `font-size`) — cause du chevauchement flèches/textes des légendes ; ne plus mettre ces propriétés dans `<defs><style>`, les poser par élément.

### Tailles
3 SVG (4,3-4,6 ko) ; fiches stables (± 1 ko) ; JOURNAL ≈ +4 ko.

## 2026-06-09 (suite) — Production : colonne « Système embarqué » (hub + 5 fiches-étape)

### Périmètre
PC pro (`theskillcodex:*` déférés). Session de production lançant le cadrage D validé en session précédente : restructuration de `eee/index` en **colonne de méthodologie de réalisation** du sous-système embarqué, orthogonale au cycle en V, puis création des **5 fiches-étape détaillées** dans `eee/realisation/`. Pilotage itératif : cadrage en brique B → arbitrages Tim → production. 0 git (Tim pilote).

### Livrables
- **`eee/index` restructuré** en colonne (7 H2 : cadrer → choisir le matériel → concevoir l'élec → programmer → faire communiquer → fiabiliser & déboguer → intégrer & tester). Intro « point d'entrée » en **tu** ; `[!info]` d'orthogonalité en tête ; sommaire à ancres ; un `[!livrable]` par étape (lien C61 dans le mot-clé + label « Livrable X/7 » + dénominations Tim) ; catalogue des familles **dissous** (renvoi au hub `microcontroleur`) ; clôture « Le management, c'est le cycle en V ». `aa: []`, tags `[branche, trame, eee]`. ~12 ko.
- **5 fiches-étape créées** dans `content/fiches/eee/realisation/` (toutes `type: trame`, `aa: []`, tags `[eee, trame, realisation]`, en **tu**) : `choisir-le-materiel` (11,6 ko), `concevoir-l-electronique` (15,1 ko, pilote), `programmer-l-embarque` (10,8 ko), `faire-communiquer` (8,9 ko, optionnelle), `fiabiliser-et-deboguer` (10,2 ko). Étapes 1 et 7 **sans fiche neuve** (rattachées à `decomposition-fonctionnelle`/`concept` et `integration-et-tests` du V).
- **7 livrables du hub reliés** ; **0 lien rouge** dans la colonne ; navigation précédente/suivante chaînée.

### Décisions (Tim)
- **Architecture** : hub calqué sur le cycle en V (`hub/index`) + **fiches-étape détaillées avec livrables** — *renverse* la sous-question Q1 du cadrage (« pas de fiches-étape »). Périmètre = **5 fiches** (étapes 2-6) ; étapes 1 et 7 réutilisent le V.
- **Livrable embarqué = artefact technique** (tableau de composants, schéma validé, firmware+algorithme, plan de comm, protocole de tests, produit fini), distinct du jalon-revue projet du V ; les artefacts *alimentent* le dossier technique sans cloner les revues. Élargi par Tim : objet physique / rendu papier ou simu / algorithme.
- **Dénominations des livrables** (hub) fixées par Tim : 1 Définir et chiffrer les fonctions / 2 Sélectionner le microcontrôleur, les capteurs et les actionneurs / 3 Le schéma électronique validé / 4 Algorithme et documentation / 5 Choix des technologies de communications (optionnel) / 6 Protocole de tests et débogage / 7 Produit fini. Label « Livrable X/7 » dans le titre du callout.
- **Registre = « tu »** pour la colonne (hub + 5 fiches) — la pilote, d'abord rédigée en « on »/infinitif (calque `concept.md`), a été reconvertie. Les trames du V restent en « on » → **incohérence de registre à arbitrer** (→ BACKLOG).
- **Étape 5 optionnelle** : `faire-communiquer` assume l'optionnalité (pour le bras : capteurs analogiques + drivers en direct → aucun bus interne ; cas léger illustré).
- **Production en bloc** validée pour les 4 fiches restantes (relecture après).

### Conventions
- **§8 — candidates C63-C64** : (C63) **colonne d'ingénierie orthogonale au V** (hub de branche = colonne méthodo à N étapes, délègue le pilotage au V par `[!info]` de tête + aparté italique par étape + section de clôture ; hub sobre sans `[!example]`) ; (C64) **fiche-étape de réalisation** (fiche-trame en « tu » SANS « Équipe » → « Ce qui relève d'ailleurs » ; fiche de méthode qui orchestre les fiches outils → `aa: []` ; livrable = artefact technique ; tag `realisation`).
- **C61 confirmée au rendu** : le lien dans le mot-clé du `[!livrable]` s'affiche bien (validé Tim).

### Tailles
`content/fiches/eee/index.md` (~12 ko) ; `content/fiches/eee/realisation/` créé (5 fiches, 56,5 ko) ; pilotage : `JOURNAL.md`, `TODO.md`, `BACKLOG.md`, `conventions.md`. JOURNAL ~80→~85 ko (archivage 1-pour-1 non requis sous 100 ko).

### Corps — un hub orthogonal qui demande des livrables sans cloner le V
Le pivot de la session : après le hub linéaire, Tim a voulu **rapprocher la colonne du cycle en V** — y demander des livrables et créer des fiches-étape détaillées (ce que Q1 du cadrage avait écarté). Le risque immédiat était de recréer le V (revues, jalons). Désamorçage retenu : les livrables de la colonne sont des **artefacts techniques** (un schéma, un firmware, une recette de banc), pas des jalons-revue ; ils *alimentent* les livrables du V sans les redéfinir. Chaque fiche-étape est une **fiche de méthode** qui *orchestre* les fiches outils existantes (`microcontroleur`, `alimentation-electronique`, `analyse-de-schema-electronique`, `cpp`, `bus-de-communication`…) comme `concept.md` orchestre `matrice-de-decision` — pas un re-cours technique. La section « Équipe » des trames du V (pilotage) est remplacée par « Ce qui relève d'ailleurs » (pilotage → V, fabrication → cours collègues, délégation C55). Deux contraintes de densité ont guidé le hub : garder 7 `[!example]` **et** 7 `[!livrable]` aurait fait 15 callouts (budget trame ~10) → les `[!example]` fil rouge ont migré du hub vers les fiches-étape, leur place naturelle. Le fil rouge bras 3 axes a été aligné sur `concept.md` (steppers NEMA 17 + drivers A4988, ESP32). Point ouvert : le **registre** — la colonne est en « tu » (point d'entrée étudiant), les trames du V en « on » ; harmonisation à trancher.

## 2026-06-09 — Relecture humaine : session 2 (trames du V terminées) + cadrage trame embarquée

### Périmètre
PC pro (`theskillcodex:*` déférés). Session 2 de relecture humaine sur le rendu Quartz : les **4 trames du V restantes** relues une par une (`concept`/`preuve-de-concept`/`dossier-technique`/`integration-et-tests`), retour critique → arbitrage Tim → `edit_file` (dryRun puis apply, ancres verbatim C14). **§1 (trame cycle en V) intégralement relue.** Clôture par un **cadrage D** d'une nouvelle trame (Système embarqué). 0 git (Tim pilote).

### Livrables
- **`concept` validé** : matrice (scores pondérés recalculés CC+encodeur 3,45 / servo 3,30), pré-dim ré-harmonisé (marges sur base uniforme, courant +9 %), pipe `\|` échappé dans la cellule de tableau écoconception, « comptes rendus », « Livrable 4/5 ». Coché.
- **`preuve-de-concept` validé** : pipe `\|` échappé (synthèse étape 4), « en sortie de la phase concept », « Données de mesure brutes » (retrait « et analyses »), « non concluant »/« ambiguë », *go / no-go* italique, « point de bascule du V ». Coché.
- **`dossier-technique` validé** : 3× « phase N » → noms de phase, exemple PoC étape 1 recadré (jeu angulaire/matage ≠ cisaillement), « gravure à l'anglaise » → « fraisage mécanique » ×3, 11 pièges dé-puçés, « Livrable 3/5 », BOM vérifié (213,20 € HT). Coché.
- **`integration-et-tests` validé** : 4× « phase N » → noms de phase, « par fraisage mécanique » ×2, 11 pièges dé-puçés, 3 « Livrable N/5 » au singulier, « NEMA 17 », display « microcontrôleur », « correction du sens de rotation de l'axe 3 », `[[fonction|FC]]` lié, « au banc ». Coché. **§1 close.**

### Décisions (Tim)
- **Lexique relecture** : « stepper » **conservé** (exposer fr/eng — *renverse* la conversion « moteurs pas-à-pas » de la session 1 sur `specification-technique`, désormais assumée comme double exposition) ; **anglicismes techniques admis** (lookup table, go/no-go, lead time, BOM, REX…) ; « **Xᵉ étape du projet** » en intro **toléré** (« phase N » en *nombre* reste proscrit ailleurs) ; « **gravure à l'anglaise** » **proscrit** → « gravure mécanique / fraisage ». Harmonisation globale du libellé de hub (« Hub du parcours projet » vs « hub du tutoriel ») → BACKLOG.
- **E2 (integration) tenu** : les 4 blocs « Pendant cette phase, côté équipe » restent en prose (non reformatés en gras-tête) — laissé à l'appréciation, non demandé.
- **Nouvelle trame « Système embarqué » — cadrage D validé** (production en session dédiée suivante) : **nature** = méthodo de réalisation (« où j'en suis / quoi faire ensuite » sur le sous-système embarqué, délègue tout le management au V par liens) ; **fil rouge** = bras 3 axes (même projet, deux lentilles) ; **placement** = **restructurer `eee/index`** en colonne linéaire (le catalogue familles MCU devient une section). Brief détaillé dans `_drafts/cadrage-trame-embarquee.md`.

### Conventions
- **§1 enrichi** : « gravure à l'anglaise » ajouté aux termes proscrits ; nouveau bloc « Anglicismes techniques — admis » (stepper, lookup table…, « Xᵉ étape » intro).
- **§8 — C62 candidate** : échappement du pipe `\|` dans un wikilink à libellé en **cellule de tableau** (`[[slug\|Libellé]]`), sinon le `|` casse le lien et la colonne. 2 instances (`concept`, `preuve-de-concept`).

### Tailles
4 fiches `content/fiches/proj/` patchées ; pilotage : `relecture-ordre.md` (4 cases), `conventions.md` (§1+§8), `TODO.md`, `BACKLOG.md`, `_drafts/cadrage-trame-embarquee.md` (créé). JOURNAL ~76→~80 ko (archivage 1-pour-1 non requis sous 100 ko, comme sessions 08/06).

### Corps — la trame embarquée doit rester orthogonale au V
Le réflexe naturel (« une 2ᵉ trame pour réaliser un projet ») dupliquerait le cycle en V et ferait croire à deux projets. Recadrage retenu : le V est la colonne **gestion de projet** (axe temporel — décisions, revues, équipe), la nouvelle trame est la colonne **ingénierie embarquée** (axe technique — choisir le matériel, concevoir l'élec, programmer, faire communiquer, fiabiliser, intégrer). Le manque réel comblé : la branche Système embarqué (`eee/index`) est aujourd'hui un **catalogue** (panorama des familles + notions) sans parcours linéaire — un mur de fiches, pas un chemin. La colonne (7 étapes, cf. cadrage) enfile les fiches existantes dans l'ordre d'usage et **délègue tout le management au V par liens** ; elle ne tient que si cette frontière tient (sinon clone du V en moins bien). Mapping naturel sur les phases (cadrer↔concept, concevoir/programmer↔dossier technique, intégrer↔intégration). Côté outil : le bug récurrent du pipe en cellule de tableau (C62) — le `|` d'un `[[slug\|Libellé]]` entre en collision avec le séparateur de colonne ; remède `\|`. Trouvé sur `concept` et `preuve-de-concept`, tables de `dossier-technique` déjà correctes.

## 2026-06-08 (suite) — Relecture humaine : session 1 (entrée + passe liens parcours + spécification technique)

### Périmètre
PC pro (`theskillcodex:*` déférés). Suite directe de la refonte 3 branches : **1re vraie session de relecture humaine** sur le rendu Quartz. Bouclé l'entrée du tableau de bord (`hub/index`, `mecatronique`) + 1re trame du V (`specification-technique`), avec une **passe de correction des liens parcours** au milieu. 0 git (Tim pilote).

### Livrables
- **Hub « Conduite de projet » validé** : lexique proscrit corrigé (5 patches — « dérisquer »→« lever les incertitudes », « point dur »→« incertitude » dans sommaire + phase 3) ; coché.
- **`mecatronique` validé** : 2 liens `[[index|…]]` (qui visaient l'accueil) → `[[hub/index|…]]` ; coché.
- **Passe liens parcours (grep exhaustif, méthode dumps + bash)** : toute la sphère parcours — 31 fiches `proj/` + 5 index de domaine + hubs `eee/index`/`mme/index` — **0 `[[index]]`/`[[..]]`**. La refonte du 08/06 n'avait laissé **qu'un seul straggler**, `mecatronique` (corrigé). `hub/index` et `ecoconception` étaient **déjà** en forme absolue — mes signalements antérieurs « liens cassés » étaient des **erreurs de mémoire**, infirmées par relecture fraîche. Les `[[FP/FS/FC]]` et `[[critère/niveau/flexibilité]]` **ne sont pas rouges** (résolus par `aliases:` front-matter sur `fonction` et `caracteriser-une-exigence`).
- **`specification-technique` validée — 12 corrections** : « point dur »→« verrou » (proscrit) ; abréviations explicitées (`PoC` lié à `[[preuve-de-concept]]`, EAT/TdM développés) ; « steppers »→« moteurs pas-à-pas » (×3) ; 4 tournures. Cochée.
- **`afnor-nfx50-151` publié** : `draft:true→false` + ajout `type: notion` → résout le **404** (le stub était exclu du build).
- **Bookkeeping** : `ecodesign` confirmé non-doublon (notion sœur) ; `mia/` supprimé (Tim) ; TODO item docx requalifié « créer »→« **remplacer** » (fichier présent = mauvais) ; SVG `bete-a-cornes-generique` + `pieuvre-generique`/`-bras-3-axes` ajoutés à « Reprise visuelle SVG » ; marques 🖼✅→🖼 ⚠ sur `bete-a-cornes`/`pieuvre` en §2.

### Décisions (Tim)
- **Mélange tu/vous toléré** (pas d'uniformisation de registre hub/trames).
- **`(stub)`** sur le lien afnor en Voir aussi : **gardé**.
- **Récap « Pièges fréquents »** en fin de trame : **gardé** (valeur checklist, duplication assumée).
- afnor **publié** (option a) plutôt qu'étoffé d'abord. MTBF/ROI/IHM **non glossés** (termes standard).

### Conventions
Aucune nouvelle (réutilisation C14, dryRun, grep dumps).

### Tailles
`content/` : hub (5 patches), `specification-technique` (12), `afnor` (2). Pilotage : `relecture-ordre.md`, `TODO.md`. JOURNAL ~72→~76 ko.

### Corps — la leçon « vérifier, ne jamais affirmer de mémoire »
Trois fausses alertes en chaîne, toutes nées d'une reconstruction mémorielle au lieu d'une lecture fraîche : (1) j'ai d'abord « corrigé » `mecatronique` en `[[../../hub/index]]` (relatif → 404) avant de retrouver que Quartz résout **racine-absolu** (`[[hub/index|…]]`) ; (2) puis annoncé 3 liens `../` cassés sur `hub/index` — faux, déjà absolus ; (3) puis 2 `[[index]]` sur `ecoconception` — faux, déjà `[[hub/index]]`. À chaque fois la relecture fraîche (ou le grep) a tranché. **Renforce C14** : sur les liens comme sur les ancres d'édition, l'autorité est le fichier vivant, jamais le souvenir. Corollaire découvert : les termes d'un cluster conceptuel (FP/FS/FC ; critère/niveau/flexibilité) sont rendus **non-rouges par `aliases:`** sur la fiche-parapluie — ne pas les compter rouges lors d'un audit. Méthode grep confirmée : `read_multiple_files` **dump en sandbox** (cap **1 Mo**/résultat → ~25 fiches/lot, sinon batcher) que `bash` parcourt sans coût contexte.

## 2026-06-08 — Bascule PC pro, tableau de bord de relecture & refonte architecture 3 branches

### Périmètre
PC pro (`theskillcodex:*`, **outils déférés chargés via `tool_search`**). Démarrage de la **relecture humaine** fiche par fiche ; 1re séance = accueil + hub. **Décision structurelle** prise en séance (refonte en branches métier). Synchro Git OK (rename `micropython-stockage` ramené du PC perso).

### Livrables
- **Tableau de bord de relecture** `_drafts/relecture-ordre.md` : 213 fiches de contenu dans l'ordre pédagogique validé, cases `[ ]`/`[x]`, repères image (SVG à valider) / attention, méthode + gabarit de retour. Fil conducteur **inter-conversations** (synchronisé entre les 2 PC).
- **Refonte architecture — 3 branches métier** (couche d'orientation, fichiers **NON déplacés**) :
  - `index.md` (accueil) **refondu** : mot d'accueil retiré, 3 sections (Comment utiliser / Par où commencer = 3 branches / À propos). **Validé Tim.**
  - `hub/index.md` → **« Conduite de projet »** (PROJ+MEO+ESE) : titre changé, embed SVG corrigé relatif→**absolu**, « Entrée par domaine » remplacée par « Méthodes, organisation & cadre » (MEO+ESE, index PROJ/MEO/ESE conservés → pas d'orphelins). Puis retours relecture : **sommaire « Les cinq phases » remonté** avant le SVG ; **lien de phase intégré à chaque callout `[!livrable]`** (sur le mot-clé), lignes « À lire ensuite » supprimées (5 phases).
  - `fiches/eee/index.md` → **« Système embarqué »** (EEE+MIA) : promu hub de branche, familles MCU complétées (ESP8266/STM32/Teensy/MicroPython/Raspberry/PIC + MicroPython langage).
  - `fiches/mme/index.md` → **« Méca »** (MME) : promu hub de branche, notions complétées, posture interface.
- **`index` (accueil) coché** dans le tableau de bord. **`hub/index` en cours** (pas validé).

### Décisions
- **3 branches = couche d'orientation, pas de déplacement de fichiers** (3 raisons : régression embeds relatifs + URL ; traçabilité AA par dossier ; wiki-links par slug → transversalité gratuite). `eee`/`mme` index promus hubs de branche ; `proj`/`meo`/`ese` restent index de domaine sous la branche Conduite.
- **Nom « Conduite de projet »** (≠ fiche transverse `gestion-de-projet`).
- **Cycle en V = hub de la branche Conduite** (supprime le doublon accueil/hub).
- **SVG : voie A** (re-coder maison pour cohérence + dark mode) ; cycle-v et le reste traités en **sessions SVG dédiées**.
- Ancres de sommaire **relatives** (`#1-…`) conservées, pas les URL absolues `github.io` (cassent hors-ligne).
- Pas d'emojis dans les pages (pictos d'orientation proposés, en attente Tim).

### Conventions (→ §8 éprouvage)
- **C60 — Architecture par 3 branches métier** (couche d'orientation).
- **C61 — Callout *Livrable* à lien intégré** (fiches-trame du V, plus de ligne « À lire ensuite »).
- Notes : méthode de relecture (1 conversation = 1 session, tableau de bord, rendu Quartz local) ; MCP pro déféré (`tool_search` au démarrage).

### Tailles
5 fichiers `content/` édités/réécrits + tableau de bord créé. 0 git (Tim pilote). JOURNAL ~68→~72 ko.

### Corps — MCP pro déféré au démarrage
Après reboot du serveur MCP côté PC pro, les outils `theskillcodex:*` ne sont plus en connexion directe (comme `filesystem:*` côté perso) mais **déférés** : il faut `tool_search` pour charger chaque grappe (list_allowed_directories, read/edit/write_file, directory_tree, list_directory, read_multiple_files…) avant tout appel. L'erreur « has not been loaded yet » est le signal qu'un outil existe mais n'est pas chargé (≠ « not found » = serveur absent). À intégrer à la procédure de démarrage pro. Pour le reste, mêmes pièges qu'avant (dryRun systématique avant apply sur `content/`, anchors verbatim) : les 6 edits du hub ont matché sans échec (em-dash à espaces normaux, aucun NBSP).

---

<!-- Sessions antérieures au 08/06 déplacées dans `JOURNAL-archive.md` lors des nettoyages documentaires successifs (détail des lots dans l'intro de l'archive et les marqueurs de groupe). Dernière passe : 10/06 — coupe β (nettoyage documentaire), sessions 06/06 → 07/06 (suite 3) archivées en bloc. -->
