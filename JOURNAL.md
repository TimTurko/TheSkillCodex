# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).
> Sessions antichronologiques antérieures au 06/06 archivées dans `JOURNAL-archive.md`
> (mise en place initiale du dépôt, installation PC perso, trame projet cycle
> en V, flowcharts de phase, squelettes du V, charte callouts v2, rédaction
> complète de `specification-technique.md`, première vague de trames
> transverses et fiches-notion, nettoyage documentaire et concept étapes 1-2).

<!-- INSERT_JOURNAL_HERE -->

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

## 2026-06-07 (suite 3) — Re-scan exhaustif liens rouges (`bash`) : 0 rouge confirmé + nettoyage des annotations périmées

### Périmètre
PC perso (`filesystem:*`), **`bash` disponible** (cœur du brief). Clôture de l'arc « liens rouges » reportée en (suite 2) : re-scan **exhaustif** réel + traitement des stragglers + passe sur les placeholders périmés rendus faux par les 24 fiches créées en (suite 2).

### Livrables
- **Re-scan exhaustif** — 221 fiches lues (100 % de `content/`) via `read_multiple_files` (déversements `/mnt/user-data/tool_results/`) + parsing python. Univers = 212 basenames ∪ dossiers ∪ alias front-matter ∪ alias manuels (`cdcf`, `critere`, `niveau`, `flexibilite`, `fp`/`fs`/`fc`). **Résultat : 0 lien rouge réel.** ~3260 tokens `[[…]]`, tous résolus hors annotations TODO.
- **Objectif 3 — 43 annotations périmées corrigées** sur 11 fichiers (`edit_file`, ancres verbatim) : `concept` (5), `dossier-technique` (5), `gestion-de-projet` (7), `preuve-de-concept` (4), `integration-et-tests` (4), `securite-et-qualite` (6), `specification-technique` (4), `ecoconception` (1), `micropython-modules` (1), `micropython-repl` (1), `hub/index` (5). Règle : **retirer le statut** (`à créer`/`à venir`), **conserver le descripteur** (`*(fil transverse — à créer)*` → `*(fil transverse)*` ; `*(à créer — délégué cours normatifs)*` → `*(délégué cours normatifs)*`).
- **Objectif 1 — 3 templates** : `[[notion]]` de guidage passé en code `` `[[notion]]` `` (fiche-notion, fiche-tuto, fiche-trame).

### Décisions
- **Objectif 2 (stragglers) vide** : 0 annotation pointant vers une cible absente → **aucun rouge masqué**. L'inventaire est désormais **confirmé exhaustif** ; la faille `acv-simplifiee` de (suite 2) est close.
- **`afnor-nfx50-151 *(stub)*` conservé** : vrai stub (`draft: true`, tag `stub`, 20 l.) — annotation exacte.
- **Faux positifs écartés** : `*(à venir)*` de `instruments-de-mesure` (Analyseur logique, Générateur) et `pcb` (EasyEDA) sont des lignes de **tableau** sur des sous-outils non couverts, pas des annotations de lien.
- **Wording délégation** : les fiches ESE/MEO cibles existent et portent elles-mêmes l'aparté de délégation (C58) → en source on garde le descripteur thématique seul.

### Conventions (→ §8 éprouvage)
- **C59 — Hygiène d'annotation** : quand une cible passe de TODO à existante, retirer le statut `(à créer)`/`(à venir)` de chaque *Voir aussi* qui la référence, **en conservant tout descripteur** ; `(stub)` reste tant que la fiche est un stub.

### Tailles
14 fichiers édités, 46 changements (suppressions/réécritures courtes), ~0 octet net. 0 git (Tim pilote). JOURNAL ~64→~68 ko.

### Corps — méthode de scan `bash` réutilisable
Les déversements `read_multiple_files` **persistent** dans `/mnt/user-data/tool_results/*.json` (réutilisables sans relire, même après compaction). Segmentation fiable par **en-têtes de chemin** (ligne = chemin Windows terminé par `.md:`), pas par `---` (présent en YAML/règles md). Piège corrigé : `os.path.basename()` ne découpe pas les chemins Windows sous POSIX (`\` non séparateur) → **split manuel sur `\`** (sinon tous les tests d'existence faux-négatifs — d'abord interprété à tort comme « tout absent »). `repr()` des lignes cibles avant `edit_file` pour révéler les NBSP : **aucun** dans les annotations, tiret `—` à espaces normaux → 46 ancres matchées sans échec.

## 2026-06-07 (suite 2) — Pré-publication : sweep liens rouges complet + création des 24 fiches cibles

### Périmètre
PC perso (`filesystem:*`). Fin de l'arc « liens rouges » avant publication : sweep d'édition terminé (repoints + déliés) puis **création de toutes les fiches cibles**. Outillage instable (voir Corps). Re-scan de confirmation **reporté** (pas de `bash`).

### Livrables
- **Sweep liens (`edit_file`)** — repoints : `alimentation-stabilisee→alimentation-electronique` (×4), `niveau-logique→niveaux-de-tension` (×2), `pid→arduino-pid` (×2), `controleur→microcontroleur`, `programmation-non-bloquante→arduino-programmation-non-bloquante` (×2). Déliés (wikilink retiré, **texte conservé**) : `capteur`, `actionneur`, `effecteur`, `frontiere-systeme`, `boucle-ouverte-boucle-fermee`, `asservissement`, `del`, `gabarit`, `ppm`, `bras-3-axes`, `pilote`, `arduino-filtrage` (5/5), `micropython-filtrage` (5/5), `abs` (×2), `ese` (×2).
- **24 fiches créées** (`type: notion`, `draft: false`, `aa: []`) :
  - `proj/` : `mecatronique` (racine), `acv-simplifiee` (hors inventaire, cf. Décisions).
  - `eee/mcu/` : `ide`, `bibliotheque`, `shield` (notions transverses).
  - `mme/` : `usinage`, `impression-3d`, `pla`, `soudure`, `comparateur`, `pied-a-coulisse`.
  - `ese/` : `marquage-ce`, `basse-tension`, `emc`, `iso-12100`, `reach`, `rohs`, `deee`, `epi`.
  - `meo/` : `unite-si`, `relation-client`, `revue-de-code`, `archivage-projet`, `cable-management`.
- **Lien ressource `.docx`** — 4 wikilinks `[[cdcf-ecole-template.docx]]` → **chemin absolu markdown** `/ressources/templates/cdcf-ecole-template.docx` (cahier-des-charges-fonctionnel ×2, specification-technique ×2). Fichier déjà présent.

### Décisions
- `bibliotheque`/`shield`/`ide` **créés en notions transverses** (pas repointés) — les fiches `*-bibliotheques`/`*-shield` les désignaient « la notion transverse ».
- `epi` reclassé délier→**création** (marqué « à créer » dans le *Voir aussi*, comme `revue-de-code`).
- `acv-simplifiee` : **lien rouge réel hors des 45 de l'inventaire**, repéré en relisant `ecoconception`/`integration-et-tests`. Créé en pointeur. ⚠️ **L'inventaire n'était donc pas exhaustif** → re-scan `bash` obligatoire avant tout « 0 rouge ».
- Vérif d'intégrité par `directory_tree` (faute de `bash`) : 0 rouge sur la **surface connue** (cibles repoint + liens des 24 fiches), **pas** une ré-énumération exhaustive.

### Conventions (→ §8 éprouvage)
- **Pointeur d'interface léger** (MME/ESE) : définition popover + « Dans le projet » + **aparté italique de délégation** + « **Cours de X** (collègues) » en *Voir aussi*. Plus léger qu'une fiche de domaine (modèle `optimisation-mecanique`). Affine C55.
- **Asset téléchargeable** (`.docx`…) → **lien markdown chemin absolu** `/ressources/…`, jamais wikilink (Quartz résout mal les wikilinks non-`.md` → rouge). Généralise la convention SVG.
- **Anti-régression liens** : une fiche neuve ne relie **jamais** un concept précédemment délié (`capteur`, `actionneur`…).

### Tailles
24 fiches (~150-300 mots, pointeurs ; `mecatronique` racine). ~15 edits de liens + 4 conversions `.docx`. 0 git (Tim pilote). JOURNAL ~60→~64 ko.

### Corps — outillage instable, sweep sans grep-contenu, vérif par arbre
`write_file`/`create_file` ont été **absents plusieurs tours** (création bloquée) avant de revenir comme **outils différés à charger via `tool_search`** (le serveur les expose mais ne les liste pas d'emblée — l'erreur « not loaded yet » a mis sur la piste). `bash` absent en clôture → re-scan reporté.
Sweep efficace **sans grep de contenu** : extraction des lignes-liens **verbatim depuis les déversements** `read_multiple_files` via `bash`+python avec `repr()` (révèle les NBSP) quand `bash` dispo ; sinon lecture `filesystem` ciblée. Un échec d'ancre bruyant (« portés » vs « porté » sur `ese`) a confirmé l'intérêt de recopier verbatim (C14).
Faute de `bash` en clôture, vérif finale par **`directory_tree`** = univers des basenames, contre lequel toutes les cibles de repoint et tous les liens sortants des fiches neuves ont été confirmés présents. Couvre la surface de risque mais **pas** l'exhaustif — d'où le re-scan `bash` en tête de prochaine session, d'autant que `acv-simplifiee` a montré une faille d'inventaire.

## 2026-06-07 (suite) — Ouverture de la famille SBC `raspberry-pi` : hub + 3 fiches + 3 SVG (module complet, ≠ clone C57)

### Périmètre
PC perso (`filesystem:*`), `git pull` fait. Démarrage Cas A. Dernière famille du panorama `microcontroleur` non traitée. **Cadrage D obligatoire d'abord** (validé Tim : option A, SBC Linux), puis production en A. Le versant microcontrôleur de la « famille Raspberry » (Pico/RP2040) étant déjà couvert par MicroPython, le module ne traite que le **SBC Linux**.

### Livrables
Module `eee/mcu/raspberry-pi/` (sous-dossier C18) :
- **hub** `raspberry-pi.md` (`notion`, `aa: EEE/2`) : thèse **MCU vs SBC** (le cœur), panorama cartes Pi 5/4/Zero `[!info]`, warning **3,3 V**, distinction explicite Pico → `micropython`, **paliers adaptés** (Prendre en main / Piloter le matériel / Projet) ;
- `raspberry-pi-prise-en-main.md` (`tuto`, `aa:[]`) : Raspberry Pi Imager + Pi OS Lite, **headless + SSH**, premier Python ; aparté C55 sysadmin délégué ; captures C29 ;
- `raspberry-pi-gpio.md` (`tuto`, `aa: PROJ/5`) : `gpiozero`/`RPi.GPIO` (KO Pi 5)/`lgpio`, LED + bouton (exemples travaillés), **« pas de temps réel dur »** (l'OS s'intercale), 3,3 V ;
- `raspberry-pi-projet.md` (`tuto`, `phases: integration`, `aa: PROJ/5`) : **architecture bicéphale** SBC (haut niveau) + microcontrôleur (temps réel) sur le **fil rouge bras 3 axes**, quand le SBC suffit seul, démarrage auto en aparté C55.
- **3 SVG conceptuels** (gabarit auto-contenu + dark) : `raspberry-pi-mcu-vs-sbc` · `raspberry-pi-gpio-pile` · `raspberry-pi-architecture-bicephale`.

### Décisions
- **Option A (SBC Linux)** ; B caduque (Pico déjà couvert + déjà distingué dans la prose de `microcontroleur`) ; **porte Pico-SDK C/C++ reportée** (optionnelle, hors module).
- **Frontière headless/SSH** : jusqu'au **shell headless + Python**, le sysadmin pur délégué (C55).
- **Paliers adaptés, ≠ 4 paliers C25, ≠ clone C57** : un SBC s'apprend comme un ordinateur, pas comme une puce nue → structure propre.
- **Exemples travaillés, pas d'exercices C49** (un SBC se prête moins au format énoncé/corrigé).
- **Placement `eee/mcu/`** (par usage, malgré le paradigme distinct ; C46).
- **Référentiel** : aucun critère SBC-spécifique (il *nomme* « Raspberry » en `EEE/1` et « PC embarqué » en `PROJ/5`, déjà Couverts) → **tally 79 % inchangé**, multi-couverture C20, **carto non touchée**.

### Conventions
Numérotation reste **57**. **Borne de C57** (le SBC est le contre-cas : paradigme distinct MAIS non transposable → structure propre, pas un clone ; candidate C58 si un 2ᵉ SBC apparaît). **C55 étendue** (OS/sysadmin = 3ᵉ frontière de délégation, après l'élec de puissance et le DSP). **C23 +1** (`-projet`). Réutilisations : C18, C20, C24, C29, C33/C52, C46.

### Tailles
4 fiches 7-8 ko, 3 SVG 3-4 ko. JOURNAL ~55→~60 ko (**archivage 1-pour-1 sauté** — marge sous 100 ko, archivage de masse ce matin). Tally **45 C / 5 E / 4 HS / 3 HS-D / 0 NC (79 %)** inchangé.

### Corps — le SBC, contre-cas de C57
MicroPython avait montré qu'une plateforme à paradigme distinct mais *transposable* pouvait cloner le curriculum Arduino (C57). Le Raspberry Pi (SBC sous Linux) est l'autre branche : paradigme distinct **et non transposable** — on n'y programme pas une puce nue, on s'y sert d'un ordinateur. D'où une **structure propre** (prise en main OS/headless/SSH → piloter le matériel depuis Linux → architecture de projet), ni les 4 paliers MCU ni un décalque. La fiche `-gpio` porte le point pédagogique central, incarné par un SVG : sous Linux, l'OS s'intercale entre le programme et la broche, donc **pas de temps réel dur** — ce qui justifie l'**architecture bicéphale** (le SBC pense, le microcontrôleur agit) de `-projet`, sur le fil rouge bras 3 axes. La profondeur est bornée par C55 (3ᵉ frontière : le sysadmin Linux pur est délégué, comme la méca/ACV). Famille de **largeur** (0 critère neuf, 79 % inchangé) qui **clôt la couche familles MCU/SBC** : le panorama `microcontroleur` n'a plus aucun lien-famille rouge. Reste dû : relecture exactitude OS/API + captures C29 + peigne Quartz des 3 SVG ; et, hors module, le nettoyage pré-publication (4 items) + relectures API en bloc.

---

## 2026-06-07 — Nettoyage pré-publication (partiel) : archivage JOURNAL coupe α + suppression `mia` + promotion C57

### Périmètre
PC perso (`filesystem:*`). Session d'**hygiène pure** (aucune fiche produite), brief de 7 items pré-publication. **2 exécutés** (archivage JOURNAL, suppression ciblée `mia`), **4 reportés** (inventaire stubs/liens rouges, triage `[[ide]]` STM32 + rouges, filtrage Explorer Quartz, peigne SVG). Pivot Tim en clôture : **prochaine session = Raspberry** (cadrage), pas la fin du nettoyage → le nettoyage pré-publication reste **non bouclé**.

### Livrables
- **Archivage coupe α** via script one-off `tools/archive-journal-0607.mjs` : **11 entrées** (28/05 → 06/05 (suite), ~46 ko) déplacées de `JOURNAL.md` vers le haut de `JOURNAL-archive.md`. Invariant antichronologique préservé (raccord 28/05 ↔ 27/05 suite 5), marqueur de groupe « 28/05 → 05/06 » posé, titre/intro/pied resynchronisés, deux `.bak` créés.
- **Suppression ciblée** : `content/fiches/mia/` (stub orphelin du domaine MIA fusionné dans EEE/PROJ, non référencé par l'accueil) → `git rm -r content/fiches/mia` côté Tim. `content/callouts-demo.md` **introuvable** (déjà supprimé lors d'une passe antérieure) — rien à faire.

### Décisions
- **Coupe = α** (tout l'antérieur au 06/06 archivé ; journée 06/06 entièrement conservée au JOURNAL).
- **Méthode archivage = script Node fail-safe**, pas MARKER + N MCP : bloc ~46 ko (au-dessus du seuil `edit_file`) **et** caractère hérité **U+FFFD** dans `28/05 suite 2` → un `slice` brut déplace le bloc fidèlement, atomiquement (octets corrompus inclus), et avorte sans rien écrire si une ancre manque. §8 sanctionne le script pour l'archivage massif.
- **Promotion C57** : le motif « clone de curriculum + hub langage substitué » (éprouvé V1-V3 MicroPython + fiches divergentes) passe en convention numérotée.
- **Arbitrage de priorité (Tim)** : Raspberry avant la fin du nettoyage.

### Conventions
- **C57 promue** : *une plateforme à paradigme distinct peut être traitée comme un clone du curriculum d'une famille de référence (Arduino) — substitution du hub langage, concepts agnostiques en [T] partagés, transposition API fiche-à-fiche, divergences de fond assumées.*
- Note : **2× U+FFFD résiduels** — `28/05 suite 2` (parti fidèlement en archive) et `06/06 suite 10` (reste au JOURNAL, « hands-on … il tient »). Cosmétique, **hors** `normalize-pilotage.js` (qui ne cible que les invisibles), fichiers non publiés → nettoyage manuel si souhaité.

### Tailles
`JOURNAL.md` **~100 → ~55 ko** ; `JOURNAL-archive.md` **~307 → ~353 ko** ; script ~3 ko. Aucune fiche.

### Corps — script vs edit_file pour un déplacement de bloc lourd
Le brief prévoyait l'archivage en MARKER + N segments MCP. Deux constats l'ont écarté : (1) le bloc à déplacer pèse ~46 ko — au-dessus du seuil pratique d'`edit_file` (C14), et le ré-assemblage manuel des séparateurs `---` sur plusieurs segments est intrinsèquement fragile ; (2) un caractère **U+FFFD hérité** (« appliqu—e ») dans `28/05 suite 2` aurait dû être matché à l'identique dans un `oldText` — piège C14 typique, fiabilité douteuse. Le script Node lève les deux : `slice` sur deux ancres propres + écritures atomiques, les octets corrompus voyageant tels quels (déplacement = copie conforme, on ne « corrige » pas — leçon C14 du 29/05 suite 2). Bonus fail-safe : ancre absente → `process.exit(1)` sans écriture, là où un `edit_file` peut s'appliquer à moitié. **Acquis** : pour tout déplacement de bloc lourd (a fortiori avec octets douteux), le script CLI bat la séquence d'`edit_file`. Reste dû : les 4 items de nettoyage reportés, à reprendre avant publication.

---

## 2026-06-06 (suite 12) — MicroPython Vague 3 : 6 fiches Ingénieur — MODULE COMPLET

### Périmètre
PC perso (`filesystem:*`), continuité 06/06, enchaîné sur « go vague 3 ». Régime décalque (Cas A), transposition Python/`machine` des 6 jumelles `arduino-*` du palier « ingénieur ». **Cette vague clôt le module MicroPython** (4 vagues). Relecture API + peigne SVG toujours reportés en bloc final (validé Tim).

### Livrables
**6 fiches** dans `content/fiches/eee/mcu/micropython/` (type tuto, tag micropython, renvoi vers la jumelle `arduino-*`) : `micropython-interruptions` (`Pin.irq`, **règle « pas d'allocation en ISR »** + `micropython.schedule` + `alloc_emergency_exception_buf` + `disable_irq`/`enable_irq`) · `-timers` (`machine.Timer`, API **uniforme**, callback = contexte d'interruption) · `-deep-sleep` (**`lightsleep` reprend / `deepsleep` redémarre**, `reset_cause`, sauvegarde d'état par fichier, réalisme conso carte Pico) · `-pid` (`borne()` maison + `duty_u16` 16 bits + anti-emballement) · `-memoire` (**`gc` ramasse-miettes**, fragmentation, `const()`, modules gelés) · `-watchdog` (`machine.WDT` + `feed()`, **non désarmable**, timeout max ~8,3 s). `manipulation-de-bits` reste **[T]** (transverse, non dupliqué). Aucun SVG produit.

### Décisions
- **API/divergences V3** : **pas d'allocation mémoire en ISR** (ni `print` formaté ni objet ni flottant) → `micropython.schedule()` pour différer ; `machine.Timer` **uniforme** (vs registres AVR) ; **`deepsleep` redémarre** la puce (sauver l'état dans un fichier, comme l'ESP) ; **`gc` ramasse-miettes** renverse la gestion manuelle d'Arduino (`F()`/`PROGMEM`) — surveiller fragmentation + pauses ; **`WDT` non désarmable** une fois armé (vs `wdt_disable()`).
- **aa** : 6 fiches `PROJ/5`. **Tally inchangé 79 %** (largeur, multi-couverture C20).

### Conventions
Aucune convention numérotée nouvelle (reste **56**). **Le motif « clone de curriculum + hub langage substitué » est désormais éprouvé sur les TROIS vagues hands-on (V1 bases, V2 avancées, V3 ingénieur) + des fiches divergentes — il est MÛR.** Recommandation : le **promouvoir en convention numérotée** (C57) — décision structurelle à acter par Tim. Réutilisations : C27/C48, C49, C23, C20.

### Tailles
6 fiches ~7-10 ko ch. Module MicroPython = hub + 37 enfants = **38 fiches** (8 V0 + 11 V1 + 12 V2 + 6 V3 + hub). **Seul `micropython-filtrage` reste rouge** (optionnel, pas de jumeau `arduino-filtrage`). **JOURNAL > 100 ko — ARCHIVAGE URGENT** (`JOURNAL-archive.md`).

### Corps
Clôture du module MicroPython (4 vagues, ouvert suite 9). Le palier ingénieur confirme le motif clone une 3ᵉ fois, avec quelques divergences API marquantes : la règle **« pas d'allocation en ISR »** (+ `micropython.schedule`) est le piège MicroPython le plus subtil de la vague ; le **ramasse-miettes `gc`** renverse complètement la gestion mémoire manuelle d'Arduino (plus de `F()`/`PROGMEM`, mais fragmentation et pauses à surveiller) ; **`deepsleep` redémarre** comme l'ESP (sauvegarde par fichier) ; **`WDT` non désarmable**. Le module est complet et navigable de la première LED au watchdog. **Prochaine = Raspberry** (session dédiée : scoping SBC Linux vs Pico RP2040). Le motif clone, mûr, attend la décision de promotion en convention.

---

## 2026-06-06 (suite 11) — MicroPython Vague 2 : 12 fiches Avancées

### Périmètre
PC perso (`filesystem:*`), continuité 06/06, enchaîné sur « continuer vague 2 ». Régime décalque **mixte** (C27/C48) : 9 fiches homogènes en Cas A silencieux (bus, actionneurs, afficheur/debug/gpio-boot) + 3 fiches **structurellement distinctes** surfacées en clôture (prog non bloquante, machine à états, stockage). Transposition Python/`machine` des 12 jumelles `arduino-*` du palier « avancées ». Relecture API + peigne SVG toujours reportés en bloc final (validé Tim).

### Livrables
**12 fiches** dans `content/fiches/eee/mcu/micropython/` (type tuto, tag micropython, renvoi « voir aussi » vers la jumelle `arduino-*`, exercices/pièges adaptés) : **bus** `micropython-uart` (UART0/1, REPL sur USB ≠ UART matériel, `bytes`) · `-i2c` (`i2c.scan()` intégré, BMP280) · `-spi` (CS = `Pin` manuel, `sdcard`+`os.mount`, 3,3 V natif SD) ; **actionneurs** `-servomoteur` (PWM 50 Hz + `duty_u16`, pas de `Servo.h`) · `-moteur-cc` (pont H, **3,3 V → DRV8833/TB6612 plutôt que L298N**, pot→PWM direct) · `-moteur-pas-a-pas` (28BYJ-48+ULN2003 séquence demi-pas manuelle, A4988 STEP/DIR) ; **`-afficheur`** (OLED SSD1306 via `ssd1306`, `show()` obligatoire) · **`-debug`** (`print`+REPL+`try/except`+`sys.print_exception`+débogueur Thonny) · **`-gpio-boot`** (entrée flottante au reset, Pico sans strapping, broches internes GP23/24/25/29, astuce `Pin(...,value=)`) ; **`-programmation-non-bloquante`** (super-loop `ticks_diff` + **`asyncio` intégré** + second cœur `_thread`) · **`-machine-a-etats`** (constantes + `if/elif`, pas de `switch`/`enum`) · **`-eeprom`** (« Stockage persistant » : **pas d'EEPROM → fichier sur la flash**, `json`, `try/except OSError`, EEPROM I2C externe en option).
Pas de SVG produit (les jumelles n'en exigent pas ; un SVG `micropython` pour la prog non bloquante reste **optionnel**, flag). `micropython-filtrage` **laissé rouge** : pas de jumeau `arduino-filtrage` dans le module, fiche optionnelle.

### Décisions
- **Régime mixte** : 9 décalques homogènes en Cas A ; 3 fiches divergentes traitées et signalées (voir Corps).
- **API spécifiques V2** : `i2c.scan()` intégré (pas de sketch scanner) ; **REPL sur USB ≠ UART matériel** (2 UART libres, pas de `SoftwareSerial`) ; `CS` = `Pin` manuel en SPI ; **servo = PWM 50 Hz + `duty_u16`** (pas de `Servo.h`) ; **DRV8833/TB6612 plutôt que L298N** sur 3,3 V ; OLED `ssd1306` avec `show()` obligatoire ; **`asyncio` intégré** comme forme idiomatique du non-bloquant ; **persistance par fichier ≠ EEPROM** (divergence forte vs `EEPROM.h`) ; Pico **sans broche de strapping** + astuce `Pin(...,value=)`.
- **aa** : 11 fiches `PROJ/5` ; `micropython-machine-a-etats` porte **EEE/5 + PROJ/5** (deux critères, comme sa jumelle). **Tally inchangé 79 %** (EEE/5 déjà couvert ailleurs — multi-couverture C20).

### Conventions
Aucune convention numérotée nouvelle (reste **56**). **Motif « clone de curriculum + hub langage substitué » tient sur sa 2ᵉ vague** (et sur des fiches divergentes, pas seulement des décalques 1:1). Réutilisations : C27/C48 (mixte), C49 (trame + exercices), C23, C20, C33/C52 (pas de SVG neuf ici).

### Tailles
12 fiches ~6-10 ko ch. Module MicroPython = hub + 31 enfants = **32 fiches** (8 V0 + 11 V1 + 12 V2). Restent V3 Ingénieur (~6) + `filtrage` optionnel. **JOURNAL ~100 ko — archivage à faire (seuil atteint, `JOURNAL-archive.md`).**

### Corps
Deuxième vague hands-on du module clone. Les 9 premières fiches confirment le constat de V1 (transposition = travail d'API sur des montages identiques). Les **3 dernières sont les plus intéressantes** car elles *divergent* du jumeau et valident que le clone n'est pas un copier-coller : (1) la **prog non bloquante** gagne un outil que C++ n'a pas — **`asyncio` intégré** — en plus du patron `ticks_diff` ; (2) la **machine à états** perd `switch`/`enum` (absents de Python) au profit de constantes + `if/elif` (ou dict d'états), et l'absence de fall-through remplace le piège du `break` par une exigence d'indentation ; (3) le **stockage** diverge franchement : le Pico n'ayant pas d'EEPROM, la persistance passe par un **fichier sur la flash** (`json`, `try/except OSError`) — plus simple et plus lisible que l'EEPROM brute d'Arduino. Module désormais doté d'un parcours bases + avancées complet. Garde-fou inchangé : relecture API en bloc final + peigne Quartz.

---

## 2026-06-06 (suite 10) — MicroPython Vague 1 : 11 fiches Bases hands-on + SVG modèle d'exécution

### Périmètre
PC perso (`filesystem:*`), continuité 06/06. **Cas A pur** (régime décalque homogène, C27/C48), enchaîné sur « Continuer ». Vague 1 du module MicroPython : transposition Python/`machine` des **11 fiches hands-on `arduino-*`** du palier « bases », + le SVG conceptuel du module. Relecture API + peigne SVG toujours reportés en bloc final (validé Tim).

### Livrables
**11 fiches** dans `content/fiches/eee/mcu/micropython/` (toutes type tuto, tag micropython, lien « voir aussi » vers la jumelle `arduino-*`, exercices C40, captures C29) : `micropython-gpio` (machine.Pin, PULL_UP **et** PULL_DOWN) · `-entree-tor` (anti-rebond `ticks_diff` + détection de front + renvoi `Pin.irq`) · `-sortie-tor` (LED/transistor/relais, pièges ~12 mA + **3,3 V → relais 5 V marginal**) · `-capteur-numerique` (HC-SR04 `time_pulse_us` + pont diviseur Echo) · `-capteur-analogique` (`ADC.read_u16` + temp interne `ADC(4)`) · `-sortie-pwm` (`PWM.duty_u16` 16 bits + pot→PWM direct) · `-temporisation` (`sleep` vs `ticks_ms`/`ticks_diff`) · `-bibliotheques` (`mip`/Thonny/copie + `dht` intégré) · `-module` (DHT11 via `dht`, pull-ups I2C, GND commun) · `-shield` (cartes porteuses/packs Pico, honnête sur l'absence de shield Uno) · `-alimentation` (VBUS/VSYS/3V3(OUT)/3V3_EN, batterie VSYS, brown-out ; `aa:[]`).
**SVG** : `content/ressources/img/micropython-modele-execution.svg` (comparaison 2 colonnes *compilé C++/Arduino* vs *scripté MicroPython*, gabarit standard ambre/gris + dark), **embarqué** dans `## Pourquoi` du hub.

### Décisions
- **Régime décalque Cas A** : structure et pédagogie reprises des jumelles arduino, contenu adapté à MicroPython/Pico.
- **API spécifiques transposées** (différences clés vs Arduino) : `ticks_diff()` **obligatoire** (jamais soustraction directe — débordement du compteur) ; `duty_u16()`/`read_u16()` **tous deux 16 bits** → pot→PWM **sans mise à l'échelle** ; `time_pulse_us()` (≡ pulseIn) ; module **`dht` intégré** ; **toutes** broches PWM ; ~12 mA/broche (< 20 mA Arduino) ; 3,3 V non tolérant 5 V ; alim **VSYS** 1,8-5,5 V / **3V3(OUT)** sortie limitée ; **shield = cartes porteuses** (pas de shield Uno empilable).
- **« Communication » (bases)** confirmé en pratique : pas de fiche `-serie`, le hub pointe `micropython-repl` (déviation au 1:1 **toujours à valider par Tim**).
- **aa** : 10 fiches `PROJ/5` effleuré, `-alimentation` `aa:[]` (comme `arduino-alimentation`). **Tally inchangé 79 %.**

### Conventions
Aucune convention numérotée nouvelle (reste **56**). **Motif « clone de curriculum + hub langage substitué » éprouvé sur sa 1ʳᵉ vague hands-on — il tient.** Réutilisations : C27/C48 (décalque Cas A sur 11 fiches d'un coup), C49 (trame + exercices C40), C23, C20, C33/C52 (SVG conceptuel hors-câblage).

### Tailles
11 fiches ~6-11 ko ch. SVG ~3,5 ko. Module MicroPython = hub + prise-en-main + simulation + hub langage(+5) + 11 bases = **19 fiches** (sur ~28 prévues). JOURNAL ~89→~95 ko — **archivage à envisager** (seuil 100, `JOURNAL-archive.md`).

### Corps
Première vague hands-on d'un module « clone ». L'exercice confirme que la transposition arduino→MicroPython est surtout un travail d'**API** (mêmes montages, mêmes pièges pédagogiques, code Python/`machine`) avec une poignée de **différences de fond** qui méritent l'insistance et distinguent un vrai portage d'un copier-coller : `ticks_diff` (débordement), `duty_u16`/`read_u16` 16 bits (élégance pot→PWM, absente côté Arduino), `time_pulse_us`, `dht` intégré, et les contraintes Pico (3,3 V, ~12 mA, VSYS). Le module a maintenant un **parcours bases complet et navigable**. Restent V2 (Avancées ~12) + V3 (Ingénieur ~6). Garde-fou inchangé : relecture API en bloc final + peigne Quartz du SVG.

---

## 2026-06-06 (suite 9) — PIC (notion) + ouverture du module MicroPython : Vague 0 (hub + prise-en-main + simulation + hub langage à 5 filles)

### Périmètre
Session PC perso (MCP `filesystem:*`), continuité 06/06. Cas A. Deux livrables : (1) **PIC** en fiche notion de positionnement (clôt la famille `pic` en « pointeur léger », pas de module) ; (2) ouverture du **module MicroPython** au **format Arduino**, ancré sur **Pico 2**, découpé en **4 vagues** — **Vague 0** produite ici. Ordre validé Tim : PIC → MicroPython → Raspberry (session dédiée). **Relecture API + intégration SVG reportées en bloc à la fin** (validé Tim : laisse le temps d'intégrer les SVG au fil).

### Livrables
**PIC** — `content/fiches/eee/mcu/pic.md` (notion, `aa:[]`, prereq microcontroleur) : ancien µC Microchip très répandu, MPLAB X/XC, pas d'Arduino-core natif ; détrôné par STM32 en industrie et Arduino en école ; **positionnement seul**. **Lien rouge `[[pic]]` de `microcontroleur` résolu.**

**MicroPython — Vague 0** (`content/fiches/eee/mcu/micropython/`, 9 fiches) :
- `micropython.md` (hub plateforme, **format Arduino** = Tutoriels en tête + Pourquoi/Panorama/Écosystème ; thèse approche scriptée Python ; panorama Pico 2 / 2 W / Pico RP2040 `[!info]` ; **note portabilité** ESP32/Pyboard/Arduino ; callout 3,3 V ; **parcours complet listé sur 4 paliers** — la plupart des enfants rouges jusqu'aux vagues 1-3) ;
- `micropython-prise-en-main.md` (Thonny + flash firmware BOOTSEL/`.uf2` + REPL + blink `machine.Pin`/`while True` + `main.py` autonome ; `aa:[]`) ;
- `micropython-simulation.md` (Wokwi Pico+MicroPython, jumelle de `tinkercad` ; `aa:PROJ/5`) ;
- `micropython-langage.md` (sous-hub langage, calque `cpp.md`, parcours numéroté 5 filles ; `aa:PROJ/5`) + ses **5 filles** (`aa:[]`) : `micropython-repl` (shell interactif), `micropython-types` (typage dynamique), `micropython-controle` (conditions/boucles/indentation), `micropython-fonctions` (def/return), `micropython-modules` (import/`machine`/fichiers/`mip`).

### Décisions
- **PIC = notion seule** (pointeur léger), pas de module — proportionné (PIC hors usage école/projet).
- **MicroPython = clone du curriculum Arduino** transposé Python sur Pico 2 (décision Tim « reprendre le format arduino »). Partage [A]/[T] : **`cpp` [T] remplacé par le hub langage MicroPython propre** ; `niveaux-de-tension`/`lire-une-datasheet`/`manipulation-de-bits` + notions-concept (machine-a-etats/interruption/timer/deep-sleep/memoire) **référencés [T]**, pas redupliqués.
- **Hub langage = sous-hub à 5 filles** (validé Tim), ordre REPL→types→contrôle→fonctions→modules.
- **« Communication » (bases)** : pas de fiche `micropython-serie` — en MicroPython le REPL/`print()` EST la console, donc le hub pointe vers `micropython-repl` (déviation au 1:1 Arduino assumée, à confirmer).
- **Simulation = Wokwi** (Tinkercad ne fait pas le Pico/MicroPython).
- **4 vagues** : V0 (faite) / V1 Bases hands-on (~11) / V2 Avancées (~12) / V3 Ingénieur (~6).
- **AA inchangé** (multi-couverture C20 ; simulation + hub langage portent PROJ/5 effleuré ; reste `aa:[]`).
- **Pas de SVG en V0** ; SVG du module (candidat : modèle d'exécution *firmware une fois + REPL* vs *compiler→binaire*) à produire en V1, validation au peigne final.

### Conventions
§8 : aucune convention numérotée nouvelle (reste à **56**). Réutilisations : C18 (`pic` notion à plat / `micropython` hub+dossier), C25/C26 (4 paliers + [A]/[T], format Arduino repris), C49 (trame tuto + exercices C40), C23 (exemples autonomes), C20. **Motif nouveau à éprouver** : **module « clone de curriculum »** d'une autre famille (MicroPython calque Arduino) **avec substitution du hub langage** (au lieu de référencer `cpp`). À documenter en convention si le motif tient sur les vagues 1-3.

### Tailles
PIC ~3,5 ko. MicroPython V0 : hub ~11 ko, prise-en-main ~11 ko, simulation ~9 ko, hub langage ~3 ko, 5 filles ~5-6 ko ch. JOURNAL ~83→~89 ko (archivage 1-pour-1 sauté, **archivage à envisager bientôt**, seuil 100). Tally global **45 C / 5 E / 4 HS / 3 HS-D / 0 NC (79 %)** inchangé.

### Corps — premier module hors paradigme Arduino-core
Jusqu'ici toutes les familles partageaient le cycle compiler→téléverser un binaire. MicroPython est le **premier module scripté** : firmware une fois, puis REPL + fichiers `.py`. D'où deux partis pris structurants. (1) Le « langage » n'est pas `cpp` mais un **hub propre** (`micropython-langage` + 5 filles), le paradigme différant trop (interprété, typage dynamique, indentation, REPL). (2) Le module **clone le curriculum Arduino** (mêmes paliers, mêmes sujets hands-on) parce que Tim l'a demandé et que les élèves utilisent beaucoup le Pico 2 — au prix d'un parc de ~28 fiches parallèles à produire (4 vagues) et à maintenir en regard d'Arduino (coût assumé, cohérent C47). La V0 pose les fondations (entrée + paradigme + langage) ; les vagues 1-3 rempliront le hands-on, surtout une transposition Python/`machine` des fiches `arduino-*`. Garde-fou : relecture API MicroPython en bloc final (Thonny/firmware Pico 2, `machine`/`time`, `Pin("LED")`/GP25, REPL).

---

## 2026-06-06 (suite 8) — Ouverture de la famille MCU `esp8266` : hub lean + 2 enfants (porte Arduino, sans SVG)

### Périmètre
Session PC perso (MCP `filesystem:*`), continuité du 06/06. Démarrage Cas A. Après inventaire, Tim retient **esp8266** comme prochaine famille (la plus proche de l'ESP32, chemin court). Cadrage présenté en D, **option 1 validée** (hub lean propre + 2 enfants, pas de SVG). Ouverture comme **hub fille priorité 1** sous `microcontroleur`, décalque C18.

### Livrables
- **1 hub** `content/fiches/eee/mcu/esp8266/esp8266.md` (`type: notion`, `aa: []`, `prerequis: [microcontroleur]`, `phases: [concept]`) : thèse **« le petit frère Wi-Fi de l'ESP32 »** (Wi-Fi seul, **pas de BLE**, moins de GPIO, un seul ADC, moins cher) ; une porte (ESP8266 Arduino core) ; **table des variantes** (NodeMCU ESP-12E / D1 mini ESP-12F / ESP-01) marquée `[!info]` ; **deux callouts** `[!warning]` — 3,3 V non tolérant 5 V **et** broches de démarrage (GPIO0/2/15) + ADC 0–1 V ; 4 paliers [A]/[T] ; **pas de SVG**.
- **2 enfants** (`type: tuto`, `phases: [preuve-de-concept]`, tags `[eee, tuto, esp8266]`), trame C49 + exercices C40 + captures C29 :
  - `esp8266-prise-en-main` (Arduino IDE + core ESP8266, URL Boards Manager, **pilote USB-série CH340/CP2102**, NodeMCU, blink **LED active à l'état bas**, auto-reset DTR/RTS ; `aa: []`).
  - `esp8266-arduino-core` (la porte unique : **décalage Dxx ≠ GPIO**, **broches de boot** GPIO0/2/15, **ADC unique** A0 0–1 V / 0–3,3 V sur carte, **pile Wi-Fi en tâche de fond → yield()/watchdog** ; **exemple Wi-Fi intégré** = connexion + IP + RSSI, renvoi `esp32-wifi` ; `aa: PROJ/5`).

### Décisions
- **Une seule porte (Arduino/ESP8266 core)** ; **lean reconduit** : pas de `esp8266-wifi`/`-ble`. Le **Wi-Fi essentiel est porté par l'exemple** d'`esp8266-arduino-core`, les **concepts Wi-Fi renvoyés à `esp32-wifi`** (API quasi identique) ; le *deep sleep* renvoyé à `esp32-deep-sleep`. → 3ᵉ épreuve de C56, sur une famille « moins-disante » (ni native ni distinctive), qui confirme la reformulation (déclencheur = périphériques de base couverts ailleurs).
- **Renvois cross-famille assumés** : exception ponctuelle à C47 (parcours autonome) pour ne pas dupliquer les fiches Wi-Fi/deep-sleep ESP32 ; cohérent avec la thèse « petit frère ». Le parcours reste autonome pour les **spécificités** esp8266 (broches Dxx, boot, ADC, watchdog).
- **Pas de SVG** : famille « moins », aucun concept neuf à illustrer (pièges en tableau).
- **AA : tally inchangé** (multi-couverture C20, PROJ/5 déjà C).

### Conventions
§8 (éprouvage) : **aucune nouvelle convention numérotée** (reste à 56). **C56 (lean-Bases) éprouvée 3/N** — confirme la reformulation (déclencheur indépendant du type de porte). **Nuance C47** : renvois cross-famille (vers `esp32-wifi`/`esp32-deep-sleep`) tolérés pour une famille « petit frère », le parcours restant autonome sur les spécificités. Réutilisations : C18, C25/C26 (6/N), C27/C48 (vague 1 décalque A pur ; **pas de vague 2** — grappe homogène), C29, C40, C43, C49. Détail en §8.

### Tailles
Hub ~9 ko ; 2 enfants ~10-12 ko ; pas de SVG. JOURNAL ~78→~83 ko (**archivage 1-pour-1 sauté**, marge sous 100 ko). Tally global **45 C / 5 E / 4 HS / 3 HS-D / 0 NC (79 %)** inchangé.

### Corps — la 3ᵉ épreuve de lean-Bases, et un cran plus loin
STM32 (porte native) puis Teensy (porte Arduino) avaient posé puis élargi le lean-Bases. ESP8266 ajoute un cas « moins-disant » : non seulement pas de fiche par périphérique de base, mais **pas de fiche par capacité signature** (le Wi-Fi, pourtant sa raison d'être, ne reçoit pas de fiche dédiée). Le Wi-Fi essentiel tient dans l'exemple d'`arduino-core`, et les concepts sont renvoyés à `esp32-wifi`. C'est un cran de plus que le lean : on **mutualise vers une famille voisine** plutôt que de dupliquer — exception assumée à C47, justifiée par le positionnement « petit frère ». Risque à surveiller : que le parcours esp8266 paraisse trop dépendant de l'esp32 ; on a gardé l'autonomie sur les spécificités (Dxx, boot, ADC, watchdog). Famille de **largeur** : aucun critère AA neuf, 79 % inchangé. Garde-fou : relecture exactitude API ESP8266 (URL core, pilote USB-série, LED active-bas, mapping Dxx, broches de boot, ADC, `ESP8266WiFi`).

---

## 2026-06-06 (suite 7) — Ouverture de la famille MCU `teensy` : hub + 4 enfants + 2 SVG (lean-Bases 2/N, porte Arduino)

### Périmètre
Session PC perso (MCP `filesystem:*`), continuité du 06/06. Démarrage Cas A. Après inventaire des familles non traitées (raspberry-pi / esp8266 / teensy / pic + micropython), Tim choisit **teensy** comme chemin le plus court (décalque Arduino + lean-Bases). Cadrage présenté en D, validé. Ouverture comme **hub fille priorité 2** sous `microcontroleur`, décalque des hubs arduino/esp32/stm32.

### Livrables
- **1 hub** `content/fiches/eee/mcu/teensy/teensy.md` (`type: notion`, `aa: []`, `prerequis: [microcontroleur]`, `phases: [concept]`) : thèse **« l'Arduino, mais rapide + couteau-suisse USB/audio »** (une seule porte, Teensyduino) ; **table des variantes** par cœur (4.1/4.0 Cortex-M7 600 MHz · LC M0+ · 3.2/3.6 legacy) marquée `[!info]` à confronter à la doc PJRC ; callout `[!warning]` **3,3 V** avec nuance générationnelle (**4.x NON tolérant 5 V**, ≠ STM32/FT ; 3.2 l'était sur les broches num.) ; 4 paliers [A]/[T] ; pas de SVG embarqué dans le hub (les 2 SVG vivent dans les enfants distinctifs).
- **4 enfants** (`type: tuto`, `phases: [preuve-de-concept]`, tags `[eee, tuto, teensy]`), trame C49 + exercices C40 + captures C29 :
  - **Vague 1 (décalque, A pur)** : `teensy-prise-en-main` (Arduino IDE + Teensyduino, URL Boards Manager PJRC, Teensy Loader + bouton, blink broche 13 ; `aa: []`) ; `teensy-arduino-core` (la porte unique — Arduino musclé : `digitalWriteFast`, `elapsedMillis`, plusieurs Serial, F_CPU 600 MHz ; noyau PJRC **sur registres NXP, pas de HAL** — contraste STM32 ; `aa: PROJ/5`).
  - **Vague 2 (distinctifs, calls surfacés)** : `teensy-audio` (Audio Library + **Audio System Design Tool** + objets/cordons + traitement en tâche de fond DMA + exemple oscillateur→I2S/Audio Shield, alt. USB audio sans shield ; **pas de DAC sur 4.x** ; `aa: PROJ/5`) ; `teensy-usb` (menu **USB Type** : clavier/souris/manette/MIDI/audio + exemple bouton→`Keyboard` avec détection de front C44 ; `aa: PROJ/5`).
- **2 SVG conceptuels** (1ers jets, `ressources/img/`, gabarit auto-contenu + mode sombre) : `teensy-audio-flux.svg` (chaîne audio = objets reliés par cordons, traitement DMA) embarqué dans `teensy-audio` ; `teensy-usb-personnalites.svg` (un Teensy → identités USB choisies à la compilation) embarqué dans `teensy-usb`.

### Décisions
- **Une seule porte (Arduino/Teensyduino)** : pas de thèse « deux portes » comme STM32. Apport = performance + audio/DSP + USB-device, *dans* le cadre Arduino.
- **lean-Bases reconduit** : pas de `teensy-gpio`/`teensy-serie` ; GPIO/UART portés par [T] + `teensy-arduino-core`. → 2ᵉ épreuve de C56, **et élargissement** : Teensy n'ayant **pas** de porte native (≠ STM32), C56 se généralise (déclencheur = couverture suffisante ailleurs, pas la nature *native* de la porte). Cf. conventions §8 suite 7.
- **2 distinctifs = audio + usb** ; **pas de fiche `teensy-performance`** séparée (diluée dans hub + arduino-core) — 5 fiches au total (arbitrage Tim validé).
- **Profondeur `teensy-audio` bornée (C55)** : assembler/piloter la chaîne, théorie du traitement du signal déléguée à un cours de TS.
- **AA : tally inchangé** (multi-couverture C20, PROJ/5 déjà C).

### Conventions
§8 (éprouvage) : **aucune nouvelle convention numérotée** (reste à 56). **C56 (lean-Bases) éprouvée 2/N et reformulée** (déclencheur = couverture des périphériques de base par [T] + fiche(s) de porte, indépendamment du caractère natif de la porte). Réutilisations : C18, C25/C26 (5/N), C27/C48 (batch 2 régimes — variante « vague 2 = capacités signatures », pas pivots d'outillage), C29/C33 (captures + 2 SVG), C40, C43 + **C44** (détection de front réutilisée dans `teensy-usb`), C47, C49, **C55** (borne de profondeur réappliquée au DSP). Détail en §8.

### Tailles
Hub ~10 ko ; 4 enfants ~10-13 ko ; 2 SVG ~3 ko. JOURNAL ~73→~78 ko (**archivage 1-pour-1 sauté**, marge sous 100 ko). Tally global **45 C / 5 E / 4 HS / 3 HS-D / 0 NC (79 %)** inchangé.

### Corps — la 2ᵉ famille « porte Arduino » valide et élargit le lean-Bases
STM32 (suite 6) avait posé le lean-Bases avec une *porte native* (CubeMX/HAL) portant GPIO/UART. Teensy le rejoue sur le cas opposé : **une seule porte, Arduino**. La Bases reste maigre — GPIO/Serial sont du pur vocabulaire Arduino, couverts par la couche [T] et `teensy-arduino-core` — ce qui montre que le déclencheur de C56 n'est pas « avoir une porte native » mais « les périphériques de base sont déjà couverts ailleurs ». C56 passe ainsi à 2/N sur **deux portes différentes**, mûre pour reformulation. Le module évite la fiche-catalogue en s'organisant autour de ce que Teensy fait de neuf *dans* Arduino : la performance (diluée, pas une fiche), et surtout les deux signatures — audio (DSP temps réel par objets/cordons + Audio Design Tool) et USB (le caméléon d'identités). Famille de **largeur** : aucun critère AA neuf, 79 % inchangé. Garde-fou : relecture de l'exactitude API Teensy avant publication (Teensyduino, broches, USB Type, Audio Library, pas-de-DAC 4.x).

---

## 2026-06-06 (suite 6) — Ouverture de la famille MCU `stm32` : hub + 5 enfants + 2 SVG (vague 1 décalque / vague 2 pivots)

### Périmètre
Session PC perso (MCP `filesystem:*`), continuité du 06/06. Démarrage Cas A. Décision Tim (suite 5) : **prochaine grappe MCU = `stm32`**. Cadrage présenté en D, validé « tu peux y aller en A ». Ouverture de la famille comme **hub fille priorité 2** sous `microcontroleur`, décalque des hubs `arduino`/`esp32`. Angle distinctif : le **palier ingénieur natif** (CubeMX / HAL-LL / registres), neuf dans le wiki.

### Livrables
- **1 hub** `content/fiches/eee/mcu/stm32/stm32.md` (~9 ko ; `type: notion`, `aa: []`, `prerequis: [microcontroleur]`, `phases: [concept]`) : thèse **« deux portes »** (continuité STM32duino vs métier CubeMX/HAL/registres) en popover + Écosystème ; **table des variantes 7 lignes** par cœur Cortex-M (C0/F0/G0 · F1 BluePill · F4/F3 BlackPill · G4 · F7/H7 · L0/L4/U5 · WB/WL), marquée `[!info]` **à confronter au ST product selector** ; callout `[!warning]` **3,3 V / broches FT** tolérantes 5 V (pas toutes) ; 4 paliers C25 + marquage [A]/[T] C26 + marqueur C32 `*(→ notion [[manipulation-de-bits]])*` sur `stm32-registres` ; SVG couches embarqué. **Le lien rouge `[[stm32]]` préexistant de `microcontroleur` est résolu** (ligne déjà présente dans sa table familles → aucun patch requis).
- **5 enfants** (`type: tuto`, `phases: [preuve-de-concept]`, tags `[eee, tuto, stm32]`), trame course-grade C49 avec exercices C40 et captures inline C29 :
  - **Vague 1 (décalque homogène, A pur)** : `stm32-prise-en-main` (CubeIDE + Nucleo, projet de carte, zones USER CODE = piège n°1, flash ST-LINK sans bouton BOOT contrairement à l'ESP32 ; `aa: []`) ; `stm32-arduino-core` (STM32duino, URL Boards Manager, support « STM32 MCU based boards », upload SWD via ST-LINK, repose sur HAL/CMSIS, exemple `SystemCoreClock`/`HAL_GetUIDwX` ; `aa: [RA-PROJET-C03-3/PROJ/5]`).
  - **Vague 2 (pivots, calls surfacés)** : `stm32-cubemx` (`.ioc` versionnable, brochage, **arbre d'horloge**, NVIC/DMA, choix HAL/LL, génération, SVG flux embarqué) ; `stm32-hal` (handles, **3 modes** scrutation/interruption/DMA, HAL vs LL, exemple bouton B1/PC13 + UART) ; `stm32-registres` (CMSIS, blink bare-metal PA5 RCC→MODER→BSRR, **BSRR atomique vs ODR read-modify-write**, renvoi fort `manipulation-de-bits`, Reference Manual ≠ datasheet). Les trois `aa: [RA-PROJET-C03-3/PROJ/5]`.
- **2 SVG conceptuels** (1ers jets, `ressources/img/`, gabarit auto-contenu + mode sombre + marker flèche) : `stm32-abstraction-couches.svg` (4 couches STM32duino/HAL/LL/registres-CMSIS + silicium + CubeMX « génère » HAL&LL + axe abstraction↑ — la thèse) ; `stm32-cubemx-flux.svg` (6 boîtes Configurer→Générer→Compléter→Compiler→Flasher→Déboguer + boucle « USER CODE préservé »).

### Décisions
- **Thèse « deux portes »** = idée organisatrice du module (porte de continuité = réutilise le squelette [T]/Arduino ; porte du métier = CubeMX→HAL/LL→registres + debug SWD).
- **Bases volontairement maigre (« lean-Bases »)** : **pas** de `stm32-gpio`/`stm32-serie` dédiés. GPIO et UART natifs sont portés par les **exemples travaillés** de `stm32-cubemx` et `stm32-hal` (et par la porte Arduino). Écart assumé au décalque ESP32, qui a des fiches `-gpio`/`-serie` dédiées. → `conventions.md` §8 C56.
- **`cubemx` et `hal` = 2 fiches** (configurer vs programmer), pas fusionnées.
- **Défauts tranchés en A** : Nucleo carte par défaut (ST-LINK intégré → tisse vers `debugger-embarque`) ; STM32CubeIDE toolchain mise en avant ; ordre pivots CubeMX→HAL→registres ; placement Tutoriels = décalque ESP32.
- **AA : tally inchangé** (multi-couverture C20, PROJ/5 déjà C ailleurs). Aucune édition structurelle de la carto.

### Conventions
§8 (éprouvage) : **1 candidate nouvelle, C56 (« lean-Bases »)** — un hub MCU peut délibérément maigrir son palier *Bases* quand une porte native incarne GPIO/UART dans ses exemples (à confirmer sur une 2ᵉ famille à porte native, Teensy ?). Réutilisations denses : C18 (mini-hub n-ième famille), C24, C25/C26 (4 paliers + [A]/[T], 4/N), **C27/C48 (batch 2 régimes : vague 1 homogène A pur + vague 2 pivots calls surfacés)**, C29 (captures inline), C32 (marqueur), C33/C52 (SVG conceptuel), C40 (corrigés frères), C43 (`const`/typage), C47 (parcours MCU autonome / redites [A] OK), C49 (trame tuto + exercices). Gabarit SVG auto-contenu reconfirmé (liste `.th/.tl/.tf` du §3 toujours obsolète → BACKLOG).

### Tailles
Hub ~9 ko ; 5 enfants ~10-13 ko chacun ; 2 SVG ~3-4 ko. JOURNAL ~68 ko (**archivage 1-pour-1 sauté**, marge sous 100 ko). Tally global **45 C / 5 E / 4 HS / 3 HS-D / 0 NC (79 %)** inchangé.

### Corps — `stm32` ouvert par sa thèse, pas par son catalogue
Le risque d'une famille aussi vaste que STM32 était la fiche-catalogue (vingt lignes de gamme, zéro fil conducteur). Le module est au contraire construit sur une **idée** : deux portes d'entrée, l'une qui prolonge ce que l'étudiant sait déjà (Arduino), l'autre qui ouvre le vrai métier embarqué (configurer un MCU, pas seulement le coder). Cette thèse structure le hub, l'ordre des paliers, et jusqu'au SVG des couches d'abstraction. Conséquence assumée sur les Bases : on ne refait pas de fiches GPIO/UART par périphérique (le **lean-Bases**, C56), les concepts natifs s'incarnant dans les exemples travaillés de CubeMX et HAL — première famille à s'écarter ainsi du décalque ESP32. STM32 est une famille de **largeur**, pas de couverture : aucun critère AA neuf, tally à 79 % inchangé (multi-couverture C20). Le palier ingénieur (CubeMX/HAL/registres) est le premier du wiki à descendre jusqu'au registre par besoin documenté (perf/déterminisme/empreinte), avec `stm32-registres` qui incarne enfin `manipulation-de-bits` sur du matériel réel (BSRR atomique vs ODR read-modify-write). Garde-fou : relecture utilisateur de l'exactitude API STM32 à conduire avant publication (fonctions HAL, broches Nucleo, macros CMSIS, URL STM32duino, modes de flashage).

---

## 2026-06-06 (suite 5) — Clôture du domaine MME : fiche `optimisation-mecanique` + SVG + carto MME/6 E→C

### Périmètre
Session PC perso (MCP `filesystem:*`), continuité du 06/06. Démarrage Cas A. Décision Tim : **finir MME avant d'attaquer la prochaine famille MCU**. MME n'avait plus qu'un item ouvert (`RA-MME-C03-1/MME/6`, *optimiser la conception*, Effleuré avec fiche prévue) → cadrage validé, rédaction, propagation carto. MME refermé.

### Livrables
- **1 fiche** `content/fiches/mme/optimisation-mecanique.md` (~8 ko) : **notion interface** (`mme/`), décalque de `schema-cinematique`. `aa: [RA-MME-C03-1/MME/6]`, `prerequis: [schema-cinematique]`, `phases: [concept]`. Concevoir vs optimiser → 3 leviers (couple matériau/procédé, allègement géométrique, réduction du nombre de pièces / DfA) + renvoi `ecoconception` (DfD) → démarche itérative + critères via `matrice-de-decision` → exemple bras 3 axes → Pièges → DfMA → Voir aussi. **0 lien rouge.**
- **1 SVG conceptuel** (premier jet) `ressources/img/optimisation-mecanique-generique.svg` : avant/après d'allègement (profilé plein → ajouré, masse ≈ 70 %, fonctions conservées), auto-contenu + mode sombre.
- **`mme/index`** : entrée ajoutée sous *Notions couvertes*.
- **Carto `couverture-en-cours.md`** : `RA-MME-C03-1/MME/6` **E→C** propagé partout (ligne passe A + bilan MME + 2 tables de tally + pourcentages + prose synthèse + compteurs *Lecture par catégorie* + bloc dédié + mention obsolète en `dossier-technique`). 5 appels `edit_file`, tous OK du premier coup.

### Décisions
- **Placement MME interface** (`mme/`), pas PROJ/transverse — point laissé à mon jugement au cadrage : le critère est MME-codé, et une fiche-méthode transverse aurait doublonné `matrice-de-decision` (choix multi-critères), `ecoconception` (DfX) et la boucle itérative du V.
- **Un SVG conceptuel** (pas texte-seul) — le concept *optimiser = améliorer* est intrinsèquement un avant→après.
- **On écrit la fiche** (verrou Tim « ok pour rédaction »), pas de délégation E-terminal comme ses frères de RA `C03-1/2` et `/4` (actés *E terminal par délégation* le 06/06).

### Conventions
§8 (éprouvage) : **aucune nouvelle**. Réutilisation : gabarit notion interface `schema-cinematique`, aparté frontière **C55** (calcul/FEA/topologie → cours méca), fil rouge bras 3 axes **C23**, `write_file` neuf **C24**, anchors verbatim **C14**, propagation carto poussée. Le motif « critère Effleuré à fiche prévue → fiche interface dédiée → reclassement E→C + propagation + bloc dédié » est désormais appliqué **deux fois** (EEE/3 en suite 4, MME/6 ici) : stable, candidat à formalisation si un 3ᵉ cas se présente.

### Tailles
Fiche ~8 ko ; SVG ~1,7 ko ; index 1 edit ; carto 5 edits. Tally global **44→45 C / 6→5 E** ; **77→79 %**. MME **5 C / 5 E / 1 HS-D / 0 NC**. JOURNAL ~64 ko (archivage 1-pour-1 sauté, marge sous 100 ko).

### Corps — MME refermé, dernier domaine cœur/interface sans trou
Avec `optimisation-mecanique`, MME rejoint EEE, ESE et MEO : plus aucun trou ouvert. Le critère « optimiser la conception » est tenu honnêtement à l'échelle interface — leviers d'arbitrage système (matériau/procédé, allègement, nombre de pièces) que l'étudiant peut raisonner sans calcul, le dimensionnement fin (éléments finis, topologie, génératif) étant renvoyé au cours de mécanique en aparté. Même borne que `schema-cinematique` (lecture, pas formalisme) et que `alimentation-electronique` (choisir/dimensionner, pas la topologie de puissance) : le wiki s'arrête au raisonnement système. Reste PROJ comme seul domaine partiellement ouvert sur le papier (19 C, 2 critères non-HS portés par d'autres fiches, non bloquants). Couverture directe **79 %** des 57 critères, **0 NC**.

---

## 2026-06-06 (suite 4) — Fiche transverse EEE `alimentation-electronique` + 3 SVG + liens entrants + carto EEE/3 E→C

### Périmètre
Session PC perso (MCP `filesystem:*`), continuité du 06/06. Démarrage Cas A → arbitrage post-Phase 3 tranché vers **(a)** : `alimentation-electronique`, dernière fiche cœur du squelette pro. Cadrage validé avant rédaction (fiche cœur EEE substantielle). Puis résidu de contenu (liens entrants) + clôture.

### Livrables
- **1 fiche** `content/fiches/eee/alimentation-electronique.md` (~14,3 ko) : **notion transverse [T]** (`eee/` à plat), `aa: [RA-EEE-C03-2/EEE/3, RA-PROJET-C03-3/EEE/5]`, `prerequis: [chaine-energie]`, `phases: [concept]`. 5 sections de principes (réguler linéaire/découpage · découpler · router les masses · CV-CC · protéger) + exemple incarné bras 3 axes + Pièges + cas particulier (rails multiples) + Aller plus loin + Voir aussi. **Tous wiki-liens vers fiches existantes → 0 lien rouge créé.**
- **3 SVG conceptuels** (premiers jets, `ressources/img/`) : `alimentation-electronique-regulation` (linéaire vs découpage) ; `-masses` (duo C31 étoile vs chaînage, faute ambre ✗) ; `-bras-3-axes` (archi incarnée : 2 rails, fusible, diode anti-inversion, découplage, masse étoile).
- **3 liens entrants** (résidu de contenu) : `chaine-energie`, `arduino-alimentation`, `eee/index` → `alimentation-electronique`. Plus semi-orpheline.
- **Carto `couverture-en-cours.md`** : `RA-EEE-C03-2/EEE/3` **E→C** propagé partout (matrice par critère + bilan EEE + 2 tables + reprises prose + bloc de session + compteur 84→85). Fichier entièrement cohérent.

### Décisions
- **Frontière à 3 étages** (cadrage validé) : `chaine-energie` situe le bloc *alimenter/distribuer* (niveau carte ⬆) / `alimentation-electronique` porte les principes transverses [T] / `arduino-alimentation` donne la recette d'une carte donnée [A] ⬇. **Zéro redite** : table courants/brown-out/batteries laissée côté Arduino ; ici, principes seuls.
- **Borne de profondeur (C55)** : « Réguler » tenu au raisonnement choisir/dimensionner (expertise EEE, critère EEE/3) ; topologie buck/boost déléguée au cours d'élec de puissance (aparté italique). Frontière intra-EEE.
- **Type notion [T] à plat** (pas tuto, pas de sous-dossier) : fiche de principes transverses popover-friendly, comme `chaine-energie`.

### Conventions
§ 8 (éprouvage) : **C55** nouvelle (borne profondeur Réguler) ; reprises **C19/C42** (alim [T] référencée familles, frontière 3 étages), **C23** +1 (fil rouge bras sur notion concept → conforte option a), **C31** (duo masses), **C33/C52** (SVG conceptuel hors-câblage étendu aux transverses).

### Tailles
Fiche 14,3 ko (cadré ~10, plus dense) ; 3 SVG 3,5 / 4,8 / 5,3 ko ; 3 edits liens entrants ; ~10 edits carto. JOURNAL ~60→~64 ko. **Archivage 1-pour-1 sauté** (marge sous 100 ko, fenêtre 28/05→06/06 utile, cohérent avec les entrées précédentes).

### Corps — premier vrai reclassement depuis le gel de la passe B
`RA-EEE-C03-2/EEE/3` (« sélectionner les sources d'énergie + dimensionner l'alimentation ») était le **seul Effleuré du domaine EEE** : traité en diffus (concept étapes 2+4, dossier-technique étape 3, ecoconception bloc 2, `lire-une-datasheet`) sans jamais être l'objet central d'une fiche. `alimentation-electronique` en fait l'objet central → **E→C**, vrai reclassement — contrairement aux 6 fiches Phase 3 et au module ESP32, toutes en multi-couverture C20 (tally inchangé). Conséquence : **EEE entièrement Couvert (10 C / 0 E)**, tally global **44 C / 6 E / 4 HS / 3 HS-D / 0 NC (77 %)**. Avec l'option (a) retenue, le **squelette pro cœur EEE est structurellement complet** (Phase 3 instruments/débogage/PCB + alimentation). Désambiguïsation reconfirmée : les deux `EEE/3` du référentiel sont distincts (`RA-PROJET-C03-3/EEE/3` = simulation, déjà C ; `RA-EEE-C03-2/EEE/3` = alimentation, ex-E) — ambiguïté RA structurelle connue. La carto étant un gros tracker à reprises multiples du tally, propagation poussée jusque dans la prose (2 tables + ~6 phrases) pour la garder cohérente.

---

## 2026-06-06 (suite 3) — Phase 3 squelette pro EEE : 6 fiches + câblage + 3 SVG + carto

### Périmètre
Session PC perso (MCP `filesystem:*`), continuité du 06/06. Démarrage Cas A → **Phase 3 « squelette pro » EEE** (MVP étendu). Périmètre **hétérogène** → cadrage groupé + triage, pas de batch aveugle (C27). Vérif disque : front Phase 3 réellement vide (aucune des 6 cibles n'existait).

### Livrables
- **6 fiches** (~42,5 ko) : mini-hub `instruments-de-mesure` (`eee/mesure/`, `aa RA-PROJET-C03-3/EEE/2 + RA-PROJET-C05-3/PROJ/5`) + `multimetre` + `oscilloscope` (`aa:[]`, portés par le hub) ; `debugger-embarque` (`eee/mcu/`, tuto transverse [T], « Déboguer un système embarqué », `aa PROJ/5`) ; mini-hub `pcb` (`eee/pcb/`, `aa RA-PROJET-C03-3/EEE/5`) + `kicad` (`aa:[]`).
- **Passe de câblage** (5 edits) : `firmware` + `arduino-debug` → `[[debugger-embarque]]` ; `analyse-de-schema` → `[[instruments-de-mesure]]`+`[[pcb]]` ; `simulation-electronique` → `[[instruments-de-mesure]]`+`[[oscilloscope]]` ; `eee/index` stub → **index curaté par points d'entrée**. `debugger-embarque` n'est plus orphelin ; slugs sortants tous vérifiés.
- **3 SVG conceptuels** (premiers jets) : `multimetre-serie-parallele` (voltmètre //, ampèremètre série), `instruments-de-mesure-confrontation` (mesure dans plage attendue → validé), `pcb-flux` (schéma→Gerber→fabrication, frontière). Embeds posés (multimètre : remplace un placeholder C29).
- **Carto `couverture-en-cours.md`** : bloc de suivi Phase 3 + compteur 78→84 fiches.

### Décisions (cadrage groupé, validées)
- **`debugger-embarque` hors hub mesure** — « déboguer ≠ mesurer » (logique C46 transposée au *placement* de fiche) : tuto transverse `eee/mcu/`, pas une fille d'`instruments-de-mesure`.
- **Mini-hub `instruments-de-mesure`** (vs fiches à plat) — pattern « hub méthode + instruments », décalque de `simulation-electronique`.
- **Conjecture E→C démentie** : `RA-PROJET-C03-3/EEE/5` était **déjà Couvert** (`dossier-technique` étape 2). Les 6 fiches sont donc toutes en **multi-couverture C20 ou `aa:[]`** → **tally inchangé : 43 C / 7 E / 4 HS / 3 HS-D / 0 NC (75 %)**. `pcb` *dédie* EEE/5 (1ʳᵉ fiche centrée), ne le *ferme* pas.

### Conventions
§8 (éprouvage) : **C45** confirmé 2ᵉ/3ᵉ hub d'outils (`instruments-de-mesure` + `pcb` → promouvable §6) ; **C46** généralisé au placement de fiches ; **C33** étendu aux fiches-outils (+3 SVG) ; sous-pattern « hub méthode + outils/instruments » confirmé ; **C27** « cadrage groupé + triage » a tenu sur périmètre hétérogène (non-grappe).

### Tailles
6 fiches ~42,5 ko ; 3 SVG (2,5–3,5 ko) ; 5 edits câblage + 2 edits carto. JOURNAL ~59 → ~64 ko. **Archivage 1-pour-1 sauté** (large marge sous 100 ko, fenêtre 28/05→06/06 utile, cohérent avec les entrées précédentes).

### Corps — vérifier le statut avant de clamer un reclassement
Le réflexe « `pcb` couvre EEE/5 donc E→C » était faux : la carto montrait EEE/5 déjà Couvert par la trame `dossier-technique`. `pcb` ne *ferme* rien — elle *dédie* le critère (1ʳᵉ fiche-tuto centrée sur « concevoir une carte », là où la trame le portait en sous-section). Même logique pour `instruments-de-mesure` (EEE/2 déjà couvert par `integration-et-tests`) et `debugger-embarque` (PROJ/5, grappe de 41 fiches). Leçon : un critère a UN statut dominant ; une nouvelle fiche sur un critère déjà C est une multi-couverture (C20), pas un reclassement — vérifier le statut courant avant d'annoncer un gain. Restent dus en relecture : peigne visuel des 3 SVG au rendu Quartz (surtout le circuit du multimètre) ; captures C29 (face multimètre, écran oscillo, session debugger, éditeurs KiCad).

---

## 2026-06-06 (suite 2) — Module ESP32 : 9 tutos enfants + 2 SVG + hub (batch en 2 régimes)

### Périmètre
Session PC perso (MCP `filesystem:*`), continuité du 06/06. Démarrage Cas A — arbitrage ouvert tranché vers **(a) écriture du batch complet ESP32**. Constat d'entrée (vérif disque) : `caracteriser-une-exigence` ET tout le track (c) PROJ AF/outils (`amdec`/`bom`/`fast`/`mind-map`/`ecoconception`/`ecodesign`/`matrice-eco-criteres`) déjà écrits et substantiels — seul vrai front d'écriture vide = les **enfants ESP32** (hub seul présent).

### Livrables
- **9 fiches `esp32-*`** (`eee/mcu/esp32/`), course-grade, autoportantes, **avec exercices** : *Prendre en main* = `prise-en-main` ; *Bases* = `gpio`, `serie`, `arduino-core` ; *Avancées* = `wifi`, `ble`, `deep-sleep` ; *Ingénieur* = `idf` (orientation), `freertos`. AA : PROJ/5 effleuré sur celles qui programment ; `aa:[]` sur `prise-en-main` et `idf`.
- **2 SVG conceptuels** : `esp32-deep-sleep-reveil` (cycle réveil=RESET + sources), `esp32-freertos-ordonnancement` (préemption 2 tâches).
- **Hub `esp32` retouché** : variantes +C5/H2/P4 (confrontées à Espressif en live) + tendance **Xtensa→RISC-V** ; `[[esp32-idf]]` lié (écosystème + palier Ingénieur) ; `arduino-core` ajouté en *Bases*.

### Décisions (consigne D + calls)
- **Parcours MCU autonome / redites inter-familles assumées** (consigne) — autoportance par famille, redites au niveau **[A]**, couche **[T]** (concepts/langage) commune. Ré-incarner les [T] par famille exclu (contredit C42).
- **Exercices dans les tutos MCU** (consigne) — filles ESP32 = trame C38 + exercices C40 ; asymétrie `arduino-*` (sans exercices) à résoudre.
- **Batch en 2 régimes** — 6 homogènes en A pur, trio `arduino-core`/`idf`/`freertos` avec calls structurels surfacés.
- **IDF tenu en orientation** (pas un cours) ; Wi-Fi/BLE en traitement complet.

### Conventions
§8 nouvelles : **C47** (parcours MCU autonome / redites [A] OK), **C48** (batch 2 régimes), **C49** (trame tuto MCU + exercices). Épreuves : C25/C26 (3/N), C29/C33 (2 SVG), C32 (`[[deep-sleep]]`/`[[firmware]]`), C23 (exemples autonomes). Gabarit SVG auto-contenu confirmé ; liste `.th/.tl/.tf` du §3 paraît obsolète (→ BACKLOG).

### Tailles
9 fiches (~8-12 ko) + 2 SVG ; hub `esp32` 5,9→6,6 ko. JOURNAL ~54→~59 ko. **Archivage 1-pour-1 sauté** (large marge sous 100 ko, fenêtre 28/05→06/06 utile à la poursuite MCU, cohérent avec les entrées précédentes).

### Corps — vérifier le disque, pas le souvenir
Fil méthodo : le track (c) PROJ cru « à rédiger » était entièrement écrit (de `caracteriser-une-exigence` à `ecoconception`). La vérif `list_directory` a évité de refaire du travail fait et redirigé vers le seul vrai vide — les enfants ESP32 — qui se sont révélés le meilleur candidat batch (grappe homogène en calibre, transverses déjà écrits) mais **sans dépendance lecteur vers Arduino** : redites assumées au niveau [A]. La borne C27 a tenu via deux régimes (A pur + trio « avec calls »). Reste dû en relecture utilisateur (garde-fou, 9 fiches + 2 SVG) : exactitude API ESP32 (LEDC core 3.x, BLE2902, pile FreeRTOS en octets, *USB CDC On Boot*), rendu Quartz des 2 SVG, et vérifier que les transverses tissés `[[deep-sleep]]`/`[[wifi]]`/`[[ble]]`/`[[techno-sans-fil]]`/`[[pwm]]` ne sont pas rouges.

---

## 2026-06-06 (suite) — Arbitrages design/MME tranchés + fiches & SVG méca + propagation carto AA

### Périmètre
Session **PC perso** (MCP `filesystem:*`), continuité du 06/06. **Autonomie totale déléguée** sur 2 chantiers : (1) arbitrages design/MME du référentiel ; (2) passe SVG. Relecture utilisateur des fiches conduite en parallèle.

### Livrables
- **2 fiches créées** : `schema-cinematique` (`mme/`, `type: notion`, `aa: RA-MME-C02-1/MME/5`) — tenue en **frontière interface** (liaisons + ddl + exemple bras 3 axes, renvoi explicite au cours de mécanique) ; `chaine-energie` (`eee/`, notion transverse, `aa: []`) — modèle des deux chaînes couplées énergie/information + couplage commande/mesure + 4 pièges. `mme/index` : `schema-cinematique` listé. Les 2 liens rouges du hub résolus.
- **8 SVG** : 4 méca fil-rouge bras 3 axes (`schema-cinematique-generique`/`-bras-3-axes`, `chaine-energie-generique`/`-bras-3-axes`) + 4 élec conceptuels (`simulation-electronique-cycle`/`-lecture-courbe`, `manipulation-de-bits-masquage`, `firmware-architectures`, embeds posés). 5 embeds outils du module simulation → placeholders C29.
- **Cartographie AA `couverture-en-cours.md` entièrement propagée et refermée** : était 42 C / 74 % avec 4 NC → **43 C / 7 E / 4 HS / 3 HS-D / 0 NC (75 %)**. MME 4C/6E/1HS-D ; PROJ +2 HS-D. HS-D définie dans la convention de granularité ; sections « Trous NC » et « Décisions niveau D » réécrites (tranchées).
- **`conventions.md` §7** : HS-D ajoutée (5e catégorie) ; décisions niveau D marquées tranchées. §8 : note C23 (fil rouge étendu aux notions concept-phase).

### Décisions (3 niveau D, tranchées par l'utilisateur)
- **Catégorie « Hors scope par délégation » (HS-D) instaurée** — distincte de HS C15 (transversal enseignant). Acte la délégation d'un contenu enseigné par un cours collègue hors expertise auteur (design produit, méca pure). Reçoit 3 critères design.
- **5 critères MME effleurés** (C02-1/2, /4, /6 ; C03-1/2, /4) **actés Effleuré terminal par délégation** — pas de fiche MME phase 2.
- **`schema-cinematique` créé** — revirement assumé vs délégation : tenu en frontière interface. `chaine-energie` = fiche d'ambition (`aa: []`).

### Conventions
- **HS-D** → `conventions.md` §7 (5e catégorie de couverture).
- **C23** (fil rouge bras 3 axes) — donnée 06/06 : réutilisé sur les SVG de `schema-cinematique`/`chaine-energie` (notions concept-phase), conforte l'option (a) de la reformulation.

### Tailles
2 fiches (~5 + 7 ko) ; 8 SVG (3,2–4,7 ko) ; `couverture-en-cours.md` propagé en ~10 edits ciblés. JOURNAL ~50,8 → ~54 ko. **Archivage 1-pour-1 sauté** (marge sous 100 ko, cohérent avec l'entrée précédente).

### Corps — le défaut SVG de la chaîne d'énergie
La relecture utilisateur a validé le texte des 2 fiches et les SVG de `schema-cinematique` du premier coup. Les deux SVG `chaine-energie` partageaient un défaut (trame clonée) : la flèche de feedback (mesure) partait de `(723, 82)` — au niveau de la rangée *information* mais à droite du dernier bloc info — donnant l'illusion d'un bloc manquant en haut à droite. Corrigée pour partir du haut du bloc **Agir** `(723, 210)` : la mesure remonte alors visiblement du système vers Acquérir, et la boucle se lit correctement (commande qui descend à gauche, mesure qui remonte à droite). Leçon SVG : un tracé de retour doit émaner d'un bloc réel, jamais d'un point libre, sous peine d'être lu comme une structure incomplète.

---

## 2026-06-06 — Réconciliation cartographie AA Phase 2 EEE/info + module simulation (hub + 3 outils)

### Périmètre
Session **PC perso** (MCP `filesystem:*`). Deux chantiers : (1) **passe complète** de mise à jour de `_drafts/referentiel/couverture-en-cours.md` pour intégrer la phase 2 elec/info (reportée depuis plusieurs sessions) ; (2) sur proposition utilisateur, création d'un **module `simulation`** sur le pattern hub (C18), fermant les 2 derniers NC EEE.

### Livrables
- **Carto Phase 2 réconciliée** — front matters `aa:` des **74 fiches** `content/fiches/eee/` vérifiés un par un. Section « Cartographies Phase 2 » ajoutée (blocs individuels pour les porteuses d'AA, blocs groupés pour les grappes homogènes PROJ/5 et `aa:[]`). Passe A + synthèse globale réécrites. **EEE 5C/2E/3NC → 7C/1E/2NC** ; **PROJ/5 NC→C** (40 fiches) ; global **37→40 C (70 %)**.
- **2 écarts JOURNAL corrigés** à la vérif : `lire-une-datasheet` porte EEE/1+/3+/4+MME/6 (pas `[]`) ; grappe Arduino = **3 exceptions `aa:[]`** (hub, `prise-en-main`, `alimentation`), pas ~28 — la grappe PROJ/5 fait 30 Arduino + 8 cpp + firmware + manip-bits = **40**.
- **Module `simulation`** (`content/fiches/eee/simulation/`) — hub `simulation-electronique` [T] (méthode + 3 familles d'analyse + section *Interpréter les résultats*, porte **EEE/3+/4**) + 3 tutos-outils : `falstad` (analogique navigateur, charge RC), `ltspice` (SPICE, filtre RC + fc), `wokwi` (MCU, potar+LED+série, porte PROJ/5). 5 SVG conceptuels en placeholder (cycle, lecture de courbe, 3 interfaces).
- **Carto re-propagée** après le module — **EEE 9C/1E/0NC (domaine complet)** ; global **42/57 = 74 %** ; NC 6→4 (`schema-cinematique` + 3 design).

### Décisions
- **Passe complète d'un coup** (vs MAJ légère) — arbitrage utilisateur.
- **Hub simulation à deux familles** (analogique : Falstad/LTspice ; MCU : Wokwi/Tinkercad) — proposition utilisateur, pattern C18 réappliqué hors « famille MCU ».
- **Fritzing tenu hors hub** (pushback Claude accepté) — outil de représentation/câblage, pas de simulation de comportement → future fiche câblage.
- **AA des tutos-outils** : `[]` (porté par le hub) sauf critère distinct (`wokwi` = PROJ/5 comme `tinkercad`).
- **Design MME/PROJ** (2 NC + arbitrages niveau D) → reporté prochaine session.

### Conventions (éprouvage)
- Nouvelles §8 : **C45** (AA tutos-outils = [] porté par le hub) + **C46** (« simuler ≠ représenter », exclusion d'outils hors-catégorie d'un hub).
- Nouvelles épreuves : **C18** (hub `simulation`, nouvelle famille de hub) ; **C27** (batch 3 tutos-outils homogènes) ; **C29/C33** (SVG conceptuels simulation).
- **C20** : PROJ/5 désormais **Couvert** (40→41 avec wokwi) — promotion §7 mûre.

### Tailles
4 fiches créées (hub + 3 outils, ~6-13 ko ch.) ; `couverture-en-cours.md` réécrit en profondeur (carto 40→42 C / 74 %). JOURNAL ~45,8 → ~50 ko. **Archivage 1-pour-1 sauté** (marge sous 100 ko).

### Corps — la vérification qui recompte
Point méthodo de la session : ne pas faire confiance au JOURNAL pour la carto. La vérification fiche par fiche des 74 front matters a corrigé deux croyances héritées (`lire-une-datasheet` cru `aa:[]`, « ~28 » fiches PROJ/5) — le bon décompte est **40**, et `lire-une-datasheet` réoutille EEE/1+/3 en effleuré. Sans cette relecture des sources réelles, la carto aurait propagé les approximations du JOURNAL. Le module simulation, lui, illustre que le pattern hub (C18) se réapplique hors « famille MCU » : un hub *méthode + outils* ferme un critère (EEE/3+/4) comme `microcontroleur` ferme EEE/2, les outils étant des embranchements non bloquants. Fin de session : design MME/PROJ et passe SVG laissés en autonomie totale à la prochaine session (fil rouge bras 3 axes pour la part méca).

---

<!-- Sessions antérieures au 06/06 déplacées dans `JOURNAL-archive.md` lors des nettoyages documentaires successifs (détail des lots dans l'intro de l'archive et les marqueurs de groupe). Dernière passe : 07/06 — coupe α (nettoyage pré-publication), sessions 28/05 → 06/05 (suite) archivées en bloc. -->
