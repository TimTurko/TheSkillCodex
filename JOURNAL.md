# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).
> Sessions antichronologiques antérieures au 28/05 archivées dans `JOURNAL-archive.md`
> (mise en place initiale du dépôt, installation PC perso, trame projet cycle
> en V, flowcharts de phase, squelettes du V, charte callouts v2, rédaction
> complète de `specification-technique.md`, première vague de trames
> transverses et fiches-notion, nettoyage documentaire et concept étapes 1-2).

<!-- INSERT_JOURNAL_HERE -->

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

## 2026-06-05 (suite) — Relecture/enrichissement complète du parcours Arduino (4 paliers) + lien rouge `mise-en-service`

### Périmètre
Session longue, **PC pro** (MCP `theskillcodex:*`). Démarrage Cas A — relecture/enrichissement du parcours d'apprentissage Arduino **bout en bout**, dans l'ordre étudiant : *Prendre en main* (`tinkercad`, module `cpp` relu) → *Apprendre les bases* → *Notions avancées* → *Niveau ingénieur*, ~33 fiches (hub + 32 filles + module cpp). Relecture technique fiche par fiche (faits élec/info vérifiés exacts), enrichissement, harmonisation. Clôture sur un lien rouge structurel.

### Livrables
- **AA `RA-PROJET-C03-3/PROJ/5` propagé en effleuré (C20)** sur toutes les fiches `arduino-*` qui programment/paramètrent la carte (~28) — marqueur de transversalité du critère « programmer un contrôleur ». **Pas** sur `arduino-alimentation` (matérielle). `arduino-machine-a-etats` : PROJ/5 **ajouté à côté** de `RA-EEE-C03-2/EEE/5` existant. `manipulation-de-bits` le portait déjà.
- **Bug « verrou anti-doublon » — systémique, corrigé dans 3 fiches** (`arduino-temporisation`, `arduino-moteur-cc`, `arduino-moteur-pas-a-pas`). Cause : `dernierAntirebond = millis() + 10000` (verrou placé **dans le futur**) → `millis() - dernierAntirebond` **sous-déborde** (unsigned) → condition toujours vraie → action répétée à chaque tour tant que le bouton est tenu. Fix : pattern de **détection de front** (variable `etatStable`) aligné sur `arduino-entree-tor`, sans verrou temporel artificiel.
- **`const` vs `#define` harmonisé** (décision A) — revert `#define`→`const` sur `arduino-temporisation`, `arduino-module`, `arduino-afficheur`. `#define` conservé là où il est seul légitime (compilation conditionnelle `DEBUG`/`DBG_PRINT` de `arduino-debug`, macros `F()`).
- **Correction `arduino-alimentation`** — « le watchdog déclenche un reset » → « la tension passe sous le seuil, le µC se réinitialise (**brown-out**) » (cohérence avec `arduino-watchdog`).
- **Lien rouge `mise-en-service` résolu** — `arduino-eeprom` repointé vers `integration-et-tests` (étape 3) ; bullet redondant retiré de `arduino-afficheur`. `mise-en-service` n'est plus référencé nulle part.
- **2 SVG conceptuels module cpp** — `cpp-execution-cycle.svg` (mise sous tension → `setup()` une fois → `loop()` en boucle) et `cpp-portee-locale-globale.svg` (variable locale recréée à chaque tour vs globale persistante). Premiers jets → BACKLOG (reprise visuelle).

### Décisions
- **(A) `const` partout dans les tutos** pour les constantes de valeur — cohérence avec `cpp-types`/`cpp-structure` (« `const` préféré au `#define` »). `#define` réservé à la compilation conditionnelle et aux macros.
- **(B) Pas de 6ᵉ phase `mise-en-service`** — le modèle reste un **V à 5 phases**, terminal à `integration-et-tests` (qui se présente noir sur blanc comme « cinquième et **dernière** étape », V refermé, projet clos, soutenance comprise). Les raccrochages pointant `mise-en-service` (valider l'IHM en condition, calibration réelle) relèvent en réalité de `integration-et-tests` niveaux 3-4 → repointés. Créer une 6ᵉ phase aurait exigé de réécrire ce cadrage et le modèle du V (refusé pour cohérence).

### Conventions (éprouvage)
- Nouvelles (§8, **C43-C44**) : `const` partout pour les valeurs / `#define` réservé compilation conditionnelle + macros ; **anti-rebond par détection de front** (`etatStable`), proscription du verrou temporel `millis() + offset`.
- **C20** : +~28 instances PROJ/5 effleuré (parcours Arduino) → renforce vers promotion §7.

### Tailles
Aucune fiche créée (relecture/édition seule) : ~28 fronts matters PROJ/5 + 3 fixes bug + 3 revert `const` + 2 corrections techniques + 2 repointages + 2 SVG. JOURNAL ~41,6 → ~46 ko. **Archivage 1-pour-1 sauté** (large marge sous 100 ko ; fenêtre 28/05→05/06 utile à la poursuite ESP32).

### Corps — un bug copié-collé, une phase fantôme
Deux fils structurants en clôture de relecture. (1) **Le « verrou anti-doublon ».** Trois tutos partageaient le même idiome : armer un verrou en écrivant `dernierAntirebond = millis() + 10000`, puis comparer `millis() - dernierAntirebond > seuil`. Le verrou étant dans le futur, la soustraction unsigned déborde par le bas (~4 milliards) et repasse au-dessus du seuil immédiatement — l'« anti-doublon » ne bloque jamais rien, l'action se répète à chaque tour de `loop()`. Le bug était identique aux trois endroits (copier-coller). Fix unique : remplacer le verrou temporel par la détection de front déjà éprouvée dans `arduino-entree-tor` (mémoriser l'état stable, n'agir qu'à la transition). (2) **La phase `mise-en-service`.** Deux raccrochages (`afficheur`, `eeprom`) pointaient une phase inexistante. La trame `integration-et-tests` se définit comme la dernière étape du V (refermé à la soutenance) : pas de phase d'exploitation après dans le modèle projet école. Plutôt que d'ajouter une 6ᵉ phase (qui aurait contredit ce cadrage), les deux liens ont été ramenés sur `integration-et-tests`, où la validation en condition et la calibration réelle vivent déjà (niveaux 3-4).

---

## 2026-06-05 — Module C++ (hub + 7 fiches) + refonte hub/prise-en-main Arduino + réconciliation AA + correctifs rendu Quartz

### Périmètre
Session longue, **PC pro** (MCP `theskillcodex:*`) — bascule depuis PC perso en cours de session (git pull, d'où le « mystère » des deux serveurs MCP : deux dépôts synchronisés par Git, pas un FS partagé). Démarrage Cas A (réconciliation AA Phase 1 + relecture du parcours Arduino). Quatre chantiers : corrections de cartographie AA, refonte du hub Arduino + de la prise-en-main, **création du module C++ complet** (hub + 7 sous-fiches), puis correctifs de rendu Quartz sur les fiches à exercices.

### Livrables
- **Réconciliation AA Phase 1** — 2 corrections de front matter : `lire-une-datasheet` (retrait `RA-PROJET-C03-3/EEE/1` — une datasheet n'est pas un schéma, sur-attribution) ; `microcontroleur` (`RA-PROJET-C03-3/EEE/5` → `RA-EEE-C03-2/EEE/2` — le hub aide au *choix* du contrôleur, pas à la *conception* d'une carte).
- **Hub `arduino.md` refondu** — section *Tutoriels* remontée en 2e (juste après l'intro-popover) ; 3 frictions corrigées : `lire-une-datasheet` → *Apprendre les bases* ; `programmation-non-bloquante` remontée en *Avancées* avant `machine-a-etats` ; `manipulation-de-bits` ajoutée en *Niveau ingénieur*.
- **`arduino-prise-en-main.md` réorganisée** — logique brancher → vérifier la reconnaissance (point de contrôle) → bloc *« Si la carte n'apparaît pas »* (câble charge-only → pilote CH340 étoffé pas-à-pas → Linux/macOS) ; pièges de reconnaissance retirés de la liste *Pièges*.
- **Module C++** dans nouveau sous-dossier `eee/mcu/cpp/` (C18) : hub `cpp.md` (ex-fiche transverse `cpp` déplacée + réécrite en hub, parcours des 7 filles) + 7 sous-tutoriels — `cpp-execution`, `cpp-structure`, `cpp-types`, `cpp-portee`, `cpp-conditions`, `cpp-boucles` (multi-notions for/while/do…while), `cpp-logs` (famille-spécifique AVR). Tous `type: tuto`, `aa: [RA-PROJET-C03-3/PROJ/5]` effleuré.
- **Correctifs rendu Quartz** : CSS `custom.scss` (fond des blocs de code dans callouts = `var(--light)`) + dé-imbrication des corrigés sur les 7 fiches + bannières de zones `/* === ZONE n === */` dans `cpp-structure`.

### Décisions
- **Factorisation transverse du C++** (vs duplication par MCU) — pushback Claude accepté : le langage et le framework Arduino sont communs à ESP32/Teensy, donc hub + sous-fiches partagés ; seule `cpp-logs` est famille-spécifique (toolchain). Revient sur la duplication un temps envisagée.
- **Hub `cpp` = fichier unique** sur le modèle `arduino.md` (intro-popover + parcours), pas notion + hub séparés.
- **Trame fiche-tuto langage** validée comme étalon (`cpp-execution`) ; **structure multi-notions** (une section par forme + « Laquelle choisir ? » + Code/Pièges/Exercices mutualisés) sur `cpp-boucles`.
- **AA** : EEE passe de 5C/2E/3NC à **7C/1E/2NC** ; couverture globale ~37C → **~40C (~70 % / 57)**. MAJ `couverture-en-cours.md` Phase 2 EEE/info **toujours reportée** (l'état bouge encore).

### Conventions (éprouvage / amendements)
- Nouvelles (§8, **C38-C42**) : trame fiche-tuto langage ; structure multi-notions ; **callout corrigé repliable = TOUJOURS frère de l'énoncé, JAMAIS imbriqué** (Quartz casse le pliage d'un callout pliable imbriqué) ; bannières de zones de code ; factorisation transverse du langage. + règle CSS fond code dans callouts.
- **C27** : batch validé sur les 4 dernières fiches cpp (grappe homogène, étalon + format validés).
- **C20** : +7 fiches cpp portent PROJ/5 effleuré.

### Tailles
hub `cpp` ~2,5 · `cpp-execution` ~9 · `cpp-structure` ~8 · `cpp-types` ~8 · `cpp-portee` ~7 · `cpp-conditions` ~7 · `cpp-boucles` ~7 · `cpp-logs` ~7 ko. JOURNAL ~40 → ~45 ko. **Archivage 1-pour-1 sauté** (large marge sous 100 ko ; les entrées 28/05 — C18, découpage transverse/famille — restent utiles à la poursuite Arduino/ESP32).

### Corps — bug de rendu Quartz : l'imbrication des callouts pliables
Les corrigés d'exercice, écrits selon ma trame initiale comme callout `[!success]-` **imbriqué** dans le `[!question]` de l'énoncé (`> >`), s'affichaient figés ouverts et non repliables sur Quartz (corrects sous Obsidian, plus permissif). Diagnostic : Quartz gère mal un callout pliable imbriqué dans un autre callout. Correctif = **dé-imbriquer** — le corrigé devient un callout `[!success]-` *frère*, juste après l'énoncé. Validé sur 2 pilotes (`cpp-execution`, `cpp-structure`) après rebuild de Tim, puis propagé aux 5 autres fiches. Bug connexe : les blocs de code dans les callouts se fondaient dans le pastel — `pre` n'a pas de fond propre, il héritait du `--bg` du callout ; corrigé par une règle CSS ciblée donnant aux blocs le fond de page (`var(--light)`, qui suit clair/sombre).

---

## 2026-06-02 (suite) — Phase 1 EEE : transverses langage/architecture + hub ESP32

### Périmètre
Suite directe de la session 02/06 (même jour), PC perso (MCP `filesystem:*`). Démarrage Cas A (prompt `cpp`). Rédaction de la fiche transverse `cpp`, puis enchaînement sur `fonction-informatique`, `manipulation-de-bits`, `firmware`, et le hub famille `esp32`. Toutes dans `eee/mcu/`.

### Livrables
- **`cpp`** (14,7 ko, tuto transverse, `aa: [RA-PROJET-C03-3/PROJ/5]` effleuré C20) — socle langage : **ferme le dernier rouge de *Apprendre les bases*** du hub Arduino. Tour du langage en 5 blocs (setup/loop · types + tailles AVR/ARM · opérateurs · fonctions & portée · contrôle), exemple classificateur de seuil, `#define`/`const`, *Aller plus loin* en tremplin.
- **`fonction-informatique`** (3,0 ko, notion popover, `aa: []`) — fonction-programmation distinguée de la `fonction` AF ; profondeur déléguée à `cpp`.
- **`manipulation-de-bits`** (6,2 ko, notion, `aa: [.../PROJ/5]` effleuré) — 4 idiomes masque (agnostiques) + 1 illustration registre AVR ; **résout le double rouge `cpp` ↔ `arduino-timers`** ; pas de SVG (motifs binaires monospace).
- **`firmware`** (5,7 ko, notion, `aa: [.../PROJ/5]` effleuré) — progression super-loop → coopératif → MAE → modules → RTOS + section « selon la famille » ; option (c).
- **`esp32/esp32.md`** (6,0 ko, hub famille, `aa: []`) — décalque `arduino`, 4 paliers + [A]/[T], alerte **3,3 V non tolérant 5 V** en callout. Nouveau sous-dossier dédié (C18).

### Décisions
- **AA PROJ/5** (« Programmer ou paramétrer un contrôleur numérique », trouvé via `Competences.xlsx`) posé en **effleuré C20** sur `cpp`/`manipulation-de-bits`/`firmware`. Déjà Couvert ailleurs → statut dominant intact, marqueur de transversalité seulement.
- **`cpp` à plat dans `eee/mcu/`** (transverse [T], pas dans `arduino/`) ; structure « tour du langage » (déviation de la procédure séquentielle) ; saveur Arduino assumée. Pointeurs/allocation : `cpp` = socle qui ouvre (*Aller plus loin*), allocation côté ressource → `arduino-memoire` (arbitrage Tim).
- **`firmware` + `esp32` une-par-une** (refus batch C27 argumenté : tous deux nommés exceptions une-par-une, zéro surface de cadrage commune). Tim a tranché « fais-les » → faites une-par-une, calls assumés en relecture.
- **`esp32` en sous-dossier dédié** (C18), comme `arduino`.

### Conventions (éprouvage)
- **C19 — vrai test sur `firmware`** : `analyse-de-schema` était une épreuve faible (mono-exemple) ; `firmware` est le cas multi-techno réel → **option (c)** (générique + renvois). Reformulable/promouvable.
- **C25 (4 paliers) + C26 ([A]/[T]) — épreuve 2/N sur `esp32`** : confirmées, promouvables §6. C32 (`*(→ notion [[x]])*`) réutilisé (`esp32-deep-sleep`).
- **C20** : 3 fiches en effleuré PROJ/5.

### Tailles
`cpp` 14,7 · `fonction-informatique` 3,0 · `manipulation-de-bits` 6,2 · `firmware` 5,7 · `esp32` 6,0 ko. JOURNAL ~35 → ~40 ko. **Archivage 1-pour-1 repris** (entrée la plus ancienne déplacée en archive).

### Corps — pushback batch + correctif méthodo (recherche récursive)
Le « batch firmware+esp32 » demandé a déclenché un D obligatoire : C27 nomme explicitement `firmware` et les hubs familles comme exceptions une-par-une, et ces deux fiches n'ont aucune surface de cadrage commune (multi-techno transverse vs hub famille) — un « cadrage groupé » aurait été deux cadrages agrafés. Tim a maintenu « fais-les » ; faites une-par-une avec calls structurants assumés. C27 a tenu sans forcer sa borne.

**Deux fausses alertes documentaires corrigées en clôture.** J'avais signalé `templates/` et `fonction.md` comme absents : c'était un artefact de recherche (`search_files` avec motif `*x*` ne scanne que le dossier courant, et j'avais regardé la racine au lieu de `content/`). En réalité `content/templates/` contient `fiche-tuto.md` / `-notion` / `-trame` / `callouts`, et `content/fiches/proj/fonction.md` (AF) existe. **Leçon** : pour un scan récursif, motif `**/*x*` obligatoire ; ne pas conclure « absent » sur un `*x*` simple. Aucun écart documentaire réel, rien au BACKLOG. Seul point ouvert : le tableau des variantes `esp32` (issu de ma connaissance, pas d'une source live) à confronter à la doc Espressif avant publication.

---

## 2026-06-02 — Phase 1 EEE scellée (`gpio`) + grappes `interruption`/`timer` + palier Niveau ingénieur Arduino complet

### Périmètre
Session longue, PC perso (MCP `filesystem:*`). Démarrage Cas A (prompt `gpio`). Clôture du squelette Phase 1 EEE (dernier rouge `gpio`), puis ouverture **et complétion** du palier *Niveau ingénieur* du hub Arduino : 2 grappes notion+tuto (`interruption`, `timer`), 1 tuto seul (`programmation-non-bloquante`), 1 batch de 4. Clôture documentaire en fin de session.

### Livrables
- **`gpio`** (transverse substantielle, `aa: [RA-EEE-C03-2/EEE/4]` C20) + 3 SVG (modes push-pull/drain ouvert/tirage ; bouton flottant ; courant max #B23A2E). **Scelle le squelette Phase 1.**
- **Grappe `interruption`** : notion transverse (`aa: []`, ISR/`volatile`/atomicité + panorama 5 sources) + `arduino-interruptions` (externes, cas débitmètre Hall) + SVG chronogramme.
- **Grappe `timer`** : notion transverse (`aa: []`, compteur/prescaler/débordement/comparaison) + `arduino-timers` (TimerOne + encart registres CTC) + SVG sawtooth.
- **`arduino-programmation-non-bloquante`** (tuto seul, architecture coopérative) + SVG (boucle bloquante vs non-bloquante).
- **Batch 4** : `arduino-deep-sleep` (LowPower), `arduino-pid` (manuel + `PID_v1`), `arduino-memoire` (`F()`/`PROGMEM`/SRAM), `arduino-watchdog` (`avr/wdt.h`). → **palier Niveau ingénieur 7/7 ; hub Arduino complet (4 paliers)**.
- **Patchs/cross-links** : hub microcontroleur (frontière `interruption`) ; gpio→interruption ; pwm→timer ; arduino-temporisation→timer ; arduino-bibliotheques dans arduino-timers ; marqueurs `*(→ notion [[x]])*` au hub pour interruption/timer/deep-sleep/memoire.

### Décisions
- **Interruptions Option A** (concept transverse + tutos par source) : `interruption` écrite une fois, `arduino-interruptions` = externes seules, timer→`arduino-timers`, série/ADC au panorama. Anti-duplication C26.
- **Notion transverse `timer`** créée (demande utilisateur), symétrique d'`interruption` ; résout le `[[timer]]` de la notion interruption.
- **Batch des 4 Niveau ingénieur** malgré « cadrage propre » (précédent batch 21) : relecture concentrée reportée. Trous `cpp`/bit-à-bit **contournés** par bibliothèques (LowPower, `avr/wdt.h`) + traitement conceptuel (`memoire`).
- **`programmation-non-bloquante` = 1 fiche** (pas grappe) : l'architecture est portée par le tuto, qui référence les notions existantes.

### Conventions (candidates § 8)
- **Marqueur `*(→ notion [[x]])*`** dans les hubs familles (tuto→notion transverse), éprouvé 5×.
- **Exception SVG conceptuel à C29** : un schéma conceptuel (chronogramme, sawtooth, boucle) reste légitime dans un tuto MCU ; captures inline pour le câblage. Éprouvé 3×.
- **C28 #B23A2E** : 2/2 (gpio-courant-max après niveaux-de-tension).

### Tailles
gpio 9,3 ; interruption 9,7 ; timer 7,6 ko ; 6 tutos arduino 7,9-10,9 ko ; **6 SVG**. JOURNAL ~30→~35 ko. **Archivage 1-pour-1 sauté** (mass-archivage à la session immédiatement précédente 29/05 suite 2, JOURNAL court, fenêtre 28-29/05 préservée à portée de lecture).

### Corps — relecture concentrée (garde-fou)
Relecture utilisateur due. (1) **Trou `cpp`** : `cpp.md` inexistant (rouge depuis le hub) alors que `memoire`/`programmation-non-bloquante`/`timers` s'y appuient → **prochaine session = rédiger `cpp`** (décision utilisateur). (2) **`manipulation-de-bits`** à créer (registres/masques/bit-à-bit), red-linkée depuis l'encart registres de `arduino-timers`. (3) **Géométrie des 6 SVG** hand-codés à valider au rendu. (4) **2 SVG candidats** non produits : schéma-bloc PID, profil consommation deep-sleep. (5) **Explorateur Quartz** : masquer via le composant Explorer du layout (**pas `draft:true`**, qui dépublie) — au BACKLOG. (6) Liens rouges volontaires : `cpp`, `manipulation-de-bits`, `esp32`, `firmware`, `arduino-filtrage`.

---

## 2026-05-29 (suite 2) — Maintenance documentaire : archivage de masse 8 entrées (25/05 suite 7 → 27/05 suite 5)

### Périmètre
Session de maintenance pure (pas de rédaction de fiche). Le JOURNAL était repassé au-dessus du seuil 100 ko : déplacement **1-pour-1 fidèle** des 8 entrées les plus anciennes vers `JOURNAL-archive.md`. Périmètre = `25/05 suite 7`, `25/05 suite 8`, `26/05 suite 3/4/5`, `27/05 suite 3/4/5`. JOURNAL repart à `28/05`. PC pro, MCP `theskillcodex:*`.

### Geste
- **8 insertions archive + 8 suppressions JOURNAL**, chaque entrée recopiée intégralement (jamais résumée — archivage = déplacement). Marqueurs `<!-- DEBUT DES SESSIONS … -->` par groupe-date (27/05, 26/05, 25/05), ordre interne antichronologique.
- **Invariant antichronologique restauré** : sommet de l'archive = `27/05 suite 5`, plus récent que tout ce qui reste au JOURNAL (`28/05`).
- Logs synchronisés des deux fichiers (cutoffs intro/footer/titre/préambule + 8 bullets « Périmètre couvert » côté archive).

### Incident D8 — leçon C14 confirmée
La suppression de `25/05 suite 7` a échoué au premier essai : mon ancre portait des graphies « corrigées » (« tracée », « 2ème ») alors que l'original disait **« traçée »** (avec ç, ×3) et **« 2ᵉ »** (e exposant). Relecture fraîche `tail` → ancre recopiée verbatim → passe. La même cause m'avait fait insérer `25/05 suite 7` dans l'archive avec mes graphies : 4 correctifs appliqués côté archive pour rétablir la fidélité. **Leçon (C14)** : ne jamais « corriger » une graphie d'origine en déplaçant un bloc ; recopier l'ancre depuis une lecture fraîche, caractère pour caractère. Les 7 autres entrées ont matché du premier coup (donc fidèles).

### Tailles
- `JOURNAL.md` : 97,4 → **29,7 ko** (−67,6 ko, large marge sous le seuil 100 ko).
- `JOURNAL-archive.md` : 234,0 → **302,9 ko** (+68,9 ko). Somme conservée (+1,25 ko = marqueurs + bullets périmètre + narrative, enrichissement attendu, aucune perte).

---

## 2026-05-29 (suite) — Phase 1 EEE : grappe « représentations d'algorithme » + tuto `analyse-de-schema-electronique` (MVP strict)

### Périmètre
Suite directe du batch Arduino (29/05). PC pro, MCP `theskillcodex:*`. Début de session : reprise du mini-hub `algorithme` + fiche `machine-a-etats` (faits avant compaction). Puis **batch des 4 fiches Phase 1 restantes hors `gpio`**, validé en cadrage groupé unique (C27) : `logigramme`, `grafcet`, `chronogramme` (3 notions filles du hub) + `analyse-de-schema-electronique` (1 tuto transverse). Scelle le squelette Phase 1 critique.

### Livrables
- **`logigramme`** (6,77 ko, notion EEE/5) + 4 SVG : générique (symboles normalisés) + triptyque thermostat (mauvais/moyen/bon).
- **`grafcet`** (6,32 ko, notion EEE/5) + 2 SVG : générique (IEC 60848) + cycle poste de perçage.
- **`chronogramme`** (6,01 ko, notion EEE/5) + 2 SVG : générique (axe commun, fronts) + PWM/UART.
- **`analyse-de-schema-electronique`** (7,69 ko, fiche-tuto, `eee/` transverse) + 2 SVG : anatomie fonctionnelle + schéma commenté (pont diviseur → MCU → LED). aa `RA-PROJET-C03-3/EEE/1` + `/EEE/2`.
- **Reprise** `machine-a-etats-portail-mauvais.svg` selon la nouvelle convention SVG.
- Dossier `eee/algorithme/` complet : hub + 4 représentations (32,3 ko). **11 SVG touchés** (1 repris + 10 neufs, 3,2-4,9 ko/SVG).

### Décisions
- **Scope batch = 4** (logigramme/grafcet/chronogramme/analyse-de-schema), calibre hétérogène assumé (3 notions homogènes + 1 tuto plus lourd, critère NC). `gpio` laissé rouge (convention utilisateur maintenue).
- **`chronogramme` typé notion** (4ᵉ représentation du hub), pas le tuto-transverse plus lourd ; raccrochages `oscilloscope`/`lire-une-datasheet` en Voir aussi.
- **Triptyque sur `logigramme` uniquement** (la qualité du tracé EST la leçon) ; `grafcet`/`chronogramme` = générique + 1 exemple propre.

### Conventions
- **Nouvelle convention SVG (consigne utilisateur) — inscrite § 8 « Éprouvage »** : le « mauvais » d'un triptyque = schéma proprement rendu MAIS comportant des fautes/incohérences délibérées (signalées en ambre ✗), plus de brouillon flou. Et : explication → 1 SVG ; exemple de rendu/qualité → triptyque ; les deux peuvent cohabiter dans une fiche. **Raffine C7.** Éprouvée sur la reprise MAE + le triptyque logigramme.
- **C27 confirmé sur grappe hétérogène** (3 notions + 1 tuto) : cadrage groupé unique validé → passe A. Borne « calibre homogène » tenue à l'œil (analyse-de-schema isolé comme le plus lourd).
- **C20 multi-couverture** : `EEE/1` est déjà porté par `lire-une-datasheet` → analyse-de-schema en multi-couverture, pas sceau exclusif.

### Tailles
- 4 fiches (6,0-7,7 ko) + 11 SVG (3,2-4,9 ko). `eee/algorithme/` = 32,3 ko.
- `JOURNAL.md` ~93 → ~97 ko avec cette entrée — **sous le seuil 100 ko**. Archivage 1-pour-1 de `25/05 suite 7` (PoC) **reporté en tête de prochaine session** (convention : archivage JOURNAL hors clôture ; à insérer dans le groupe « DEBUT DES SESSIONS 25/05 » de l'archive, au-dessus de suite 6).

### Corps — points de relecture concentrés (garde-fou)
La relecture utilisateur reste due sur l'ensemble. Quatre points signalés. (1) **AA** : la claim « MVP strict 100 % » repose sur une carto à reconcilier — `RA-PROJET-C03-3/EEE/1` est déjà couvert par `lire-une-datasheet`, donc quel sous-critère ferme réellement le 100 % (EEE/1 vs EEE/2) reste à trancher sur la cartographie. (2) **`phases: dossier-technique`** sur analyse-de-schema, repris du cadrage sans revérif de l'énum de phases du projet. (3) **Qualité géométrique des 11 SVG hand-codés** à valider au rendu Quartz, surtout `analyse-de-schema-exemple` (symboles composants : résistances rect IEC, LED, pont diviseur, IC) et les losanges/branches des triptyques — les SVG des triptyques sont DANS les callouts (`> ![…]`), à sortir au-dessus si le rendu coince. (4) Lien `[[del|LED]]` (analyse-de-schema étape 3) probablement rouge, pas de `del.md` repéré. Liens vérifiés : schema-bloc-fonctionnel, lire-une-datasheet, niveaux-de-tension, adc, arduino-sortie-pwm, uart, i2c, microcontroleur ✓ ; `oscilloscope` rouge volontaire (Phase 3+).

## 2026-05-29 — Phase 2 embranchement Arduino : batch 21 fiches-tuto Bases + Avancées straight

### Périmètre
Deux sessions successives. **Matinée (PC perso, MCP `filesystem:*`)** : suite directe de 28/05 suite 5, rédaction des 3 fiches structurantes Arduino *Prendre en main* (`arduino-prise-en-main`, `tinkercad`, `arduino-serie`) une-par-une. **Soir (PC pro, MCP `theskillcodex:*`)** : reprise sur prompt de lancement Cas A, **bascule batch** sur consigne utilisateur après pushback D (C27 borderline sur fiches-tuto pleines). Compromis Option A retenu : Bases (11) + Avancées straight (10) = **21 fiches**, exclusion explicite des 7 Niveau ingénieur + `arduino-machine-a-etats` + `arduino-filtrage`.

### Livrables
- **Prendre en main (3)** : `arduino-prise-en-main` (~10,0 ko, cas Blink LED_BUILTIN), `tinkercad` (~8,7 ko, Blink simulé + bouton `INPUT_PULLUP`), `arduino-serie` (~9,9 ko, compteur `millis` + lecture A0 + traceur série).
- **Bases (11)** : `arduino-gpio` (bouton D2 `INPUT_PULLUP` + LED D13), `arduino-entree-tor` (anti-rebond logiciel + détection de front), `arduino-sortie-tor` (LED + buzzer via 2N2222 + module relais 5 V), `arduino-capteur-numerique` (HC-SR04 + `pulseIn`), `arduino-capteur-analogique` (potentiomètre + LDR + tableau ADC Uno R3/R4/Nano/Mega/ESP32), `arduino-sortie-pwm` (LED fondu + variateur), `arduino-temporisation` (`delay` vs `millis`, overflow), `arduino-bibliotheques` (`Servo.h` SG90), `arduino-module` (DHT11 + Adafruit DHT), `arduino-shield` (Motor Shield R3 L298), `arduino-alimentation` (USB / jack / Vin + cas batterie LiPo 7,4 V).
- **Avancées straight (10)** : `arduino-uart` (pont série 2 Arduino via SoftwareSerial), `arduino-i2c` (scanner I2C + BMP280), `arduino-spi` (datalogger SD card), `arduino-debug` (`Serial.print` stratégique + IDE 2.x debugger R4), `arduino-gpio-boot` (relais qui claque + pull-up externe + ordre `digitalWrite` avant `pinMode`), `arduino-servomoteur` (SG90 balayage + alim séparée), `arduino-moteur-cc` (L298N + table pont H + potar+bouton), `arduino-moteur-pas-a-pas` (28BYJ-48 + ULN2003 + Stepper.h, mention NEMA17 + A4988), `arduino-afficheur` (OLED SSD1306 + LCD I2C, cas BMP280→OLED), `arduino-eeprom` (compteur démarrages + détection EEPROM neuve 0xFF + ESP32 Preferences).
- **Dossier** `content/fiches/eee/mcu/arduino/` : 25 fichiers (hub + tinkercad + 23 fiches arduino-*), **226 ko total**. Toutes les fiches `draft: false`, template `fiche-tuto.md` respecté.

### Décisions
- **Scope batch** étendu de "fiches structurantes" (3) à "20 fiches" (Bases + Avancées straight). Pushback Claude justifié : C27 borderline (épreuves 2/2 sur popovers/hubs courts, pas fiches-tuto pleines), hétérogénéité de calibre Bases/Avancées/Ingénieur. Sortis du batch : `arduino-machine-a-etats` (chaîne dépendance avec notion `machine-a-etats`), `arduino-filtrage` (optionnel), 7 Niveau ingénieur (chacun mérite cadrage propre). Comptage final 21 (off-by-one corrigé sur Avancées straight : `eeprom` initialement omis du décompte).
- **C23 confirmé** : tutos MCU prennent cas autonome propre (pas bras 3 axes). Consigne utilisateur explicite : "Nous pouvons dévier du bras 3 axes pour les tutos mcu".
- **Format captures inline figé** (option B) : Claude rédige texte + insère phrases `Prendre capture d'écran de *info précise de l'image*` inline en italique, utilisateur prend captures/photos plus tard, itération texte après récolte. **Pas de SVG produits unilatéralement** cette session.
- **GPIO transverse laissé rouge** : convention utilisateur ("Ok pour GPIO laissé rouge actuellement"). `arduino-gpio` (le tuto) écrit malgré tout — distinct du transverse `gpio`.
- **Relecture/amélioration reportée** explicitement à la récolte du premier set d'images. Garde-fou utilisateur posé, dette de relecture concentrée massive acceptée.

### Conventions
- **C27 production par batch — épreuve 3/N étendue, borne déplacée**. Convention initialement éprouvée sur grappes de popovers/hubs courts (bus 6 fiches, sans-fil 7 fiches + 7 briques MCU). Ce soir : **batch massif de 21 fiches-tuto pleines** (procédure 4 étapes + cas autonome + 6-8 pièges + raccrochage projet, 8-10 ko/fiche). Saut qualitatif vs épreuves antérieures. À reformuler avant promotion : "grappe homogène en calibre" plutôt que "grappe homogène de popovers". La dette de relecture s'étend en proportion (~226 ko à relire avant publication).
- **C23 fil rouge bras 3 axes — borne posée 28/05 suite 3, confirmée 29/05** sur consigne utilisateur explicite. Mure pour promotion au prochain figeage.
- **Format captures inline** (candidate § 8) — `Prendre capture d'écran de *info précise de l'image*` tout en italique, posé en début de texte de l'étape. Pas de SVG produits unilatéralement par Claude pour les fiches-tuto MCU. Éprouvé sur ~70 mentions inline réparties sur 21 fiches.
- **C24 `write_file`** — cumul ~46 créations sans incident (28/05 suite 4 + cette session). Vérification immédiate `get_file_info` remplacée par `list_directory_with_sizes` global en fin de batch — C27-compatible.
- **Préfixe MCP variable selon poste** — `theskillcodex:*` sur PC pro vs `filesystem:*` sur PC perso. Le prompt projet § 6 référence l'ancien préfixe ; à généraliser ou contextualiser pour les futures sessions PC pro.

### Tailles
- 21 fiches arduino-* (7,8-10,4 ko / fiche) + 3 Prendre en main (8,7-10,0 ko). Dossier `arduino/` total **226 ko**.
- **`JOURNAL.md` réel ~99 → ~104 ko** (cette entrée ~5 ko). **Seuil 100 ko franchi**. Tâche d'archivage TODO maintenue ; à conduire hors clôture de session, à partir de l'entrée la plus ancienne (`25/05 (suite 6)`, legacy ~9 ko).

### Corps — pushback batch sur fiches-tuto pleines : C27 a tenu sans casse, mais la borne s'est élargie
La demande utilisateur de batcher l'ensemble des fiches Arduino restantes (~30) a déclenché un D obligatoire avant exécution : C27 telle qu'éprouvée (popovers + hubs courts) ne couvrait pas le calibre des fiches-tuto pleines. Le compromis Option A (20 fiches Bases + Avancées straight, exclusion Ingénieur + machine-a-etats + filtrage) a tenu sans casse à l'œil — qualité homogène observée sur les 21 livrables, aucune fiche manifestement bâclée, pièges spécifiques fidèles à la techno (anti-rebond, overflow `millis`, EEPROM neuve 0xFF, `Servo.h` qui désactive PWM D9/D10, pull-ups I2C en parallèle). La dette de relecture utilisateur reste massive — c'est le garde-fou explicite acté en début de batch (relecture post-récolte d'images). **Acquis méthodo** : C27 peut s'étendre aux fiches-tuto pleines à condition que le calibre soit homogène — Ingénieur (PID, interruptions, watchdog, timers) reste hors batch. La reformulation à la promotion devra trancher "grappe homogène de popovers" vs "batch homogène en calibre", ouvrant à des cas autres que les popovers d'un mini-hub.

---

## 2026-05-28 (suite 4) — Phase 1 squelette EEE : `niveaux-de-tension` + grappes `bus` et `sans-fil` en batch + briques MCU

### Périmètre
Démarrage Cas A (`niveaux-de-tension`), puis bascule en **production par batch** sur consigne utilisateur. Mode arbitré : grappes homogènes en cadrage groupé validé → écriture A ; fiches substantielles/pivots maintenues une-par-une. Trois lots après `niveaux-de-tension` : grappe bus, grappe sans-fil, briques MCU. PC perso, MCP `filesystem:*` exclusif. **18 fiches + 4 SVG** en une session.

### Livrables
- **`niveaux-de-tension.md`** (~8,6 ko, notion transverse) + 2 SVG (seuils 3,3/5 V en double scénario ; 3 parades d'adaptation). AA `RA-EEE-C03-2/EEE/4` + `/1` effleurés. Cas autonome ESP32 / HC-SR04.
- **Grappe bus** (`eee/mcu/bus/`) : hub `bus-de-communication.md` (4,1 ko, tableau comparatif + aide au choix) + `uart`/`i2c`/`spi` (popovers) + SVG topologies.
- **Grappe sans-fil** (`eee/mcu/sans-fil/`) : hub `techno-sans-fil.md` (3,9 ko, tableau + carte portée×débit) + `wifi`/`ble`/`zigbee`/`xbee`/`lora` + SVG comparaison.
- **Briques MCU** (à plat dans `eee/mcu/`) : `processeur`, `memoire`, `entree-sortie`, `adc`, `pwm`, `deep-sleep`, `systeme-d-exploitation` (7 popovers).
- Réseau : une quinzaine de liens rouges passés au vert (périphériques + bus + filles sans-fil de `microcontroleur` ; `i2c` réciproque de `niveaux-de-tension`). `esp32` devient le lien rouge le plus sollicité.

### Décisions
- **Mode batch acté** : grappe homogène = 1 cadrage groupé (frontières + nommage + AA + SVG hub) validé une fois → écriture A des filles. Hors-batch : `gpio`, `analyse-de-schema`, `firmware`, hubs familles.
- **Folders** : mini-hubs en sous-dossier (`bus/`, `sans-fil/`) ; briques internes à plat.
- **AA grappes** : hub porte `EEE/4` (transmission), filles `[]`.
- **`niveaux-de-tension`** : rouge brique `#B23A2E` introduit pour zones danger/destruction du SVG (écart palette assumé) ; C19 non compté (mono-concept).

### Conventions
- **C18 mini-hub — promue § 6** après épreuve 3/3 (`microcontroleur` 1/N, `bus` 2/N, `sans-fil` 3/N). Forme : sous-dossier physique par mini-hub, hub en fichier nommé (`type: notion`), listing des filles en tableau dans le corps.
- **C27 (candidate § 8)** — production par batch de grappe homogène (cadrage groupé validé → écriture A). Éprouvée 2/2 (bus, sans-fil).
- **C28 (candidate § 8)** — rouge danger `#B23A2E` dans les SVG de sécurité, complément palette ambre/gris. Éprouvée 1/1.
- **C24 `write_file`** : ~18 créations propres, 0 faux positif → promotion § 6 mûre.

### Tailles
- 18 fiches (0,7–8,6 ko) + 4 SVG (5,8–7,6 ko).
- **`JOURNAL.md` réel ~93 → ~98 ko** (cette entrée). Les estimations « Tailles » des entrées précédentes avaient dérivé sous la réalité. **Seuil 100 ko quasi atteint** : archivage de masse à planifier (TODO technique), pas conduit ce soir pour éviter une coupe legacy fragile en clôture.

### Corps — le batch gagne du débit, au prix d'une dette de relecture concentrée
Le mode batch a produit 18 fiches en une session (vs 1-2 en rythme une-par-une), sans incident MCP (C24 confirmé à grande échelle). Le coût se reporte sur la **relecture utilisateur** : deux grappes entières à relire en bloc plutôt qu'un contrôle fiche à fiche. Le garde-fou tient tant que la relecture est effectivement conduite avant publication — à ne pas laisser filer. Découverte annexe : le suivi de taille du JOURNAL dans les entrées était faux (estimations jamais recalées sur le réel) ; le flux 1-pour-1 C4, non réellement appliqué depuis le 27/05 suite 5, n'a donc pas stabilisé le fichier. À reprendre proprement (archivage segmenté ou Obsidian) avant le franchissement des 100 ko.

---

## 2026-05-28 (suite 3) — Phase 1 squelette EEE/mcu : fiche-tuto `lire-une-datasheet` (exemple L298N)

### Périmètre
Démarrage Cas A. Première fiche de **contenu** Phase 1 (squelette EEE/info) après les hubs `microcontroleur`/`arduino` : la fiche-tuto transverse `lire-une-datasheet`, calque template `fiche-tuto.md`. Cadrage tranché en niveau D avant écriture (structuration C19, découpage procédure, SVG, prérequis, AA), puis rédaction + 2 SVG en niveau A. PC perso, MCP `filesystem:*` exclusif.

### Livrables
- **`content/fiches/eee/mcu/lire-une-datasheet.md`** (~15,3 ko, `type: tuto`, `draft: false`) : popover (compétence de lecture transverse, aligné sur le pré-cadrage des hubs) + image générique + *À quoi ça sert* + *Procédure pas à pas* en **5 étapes génériques** (trouver la datasheet / boîtier / brochage + table des fonctions / limites AMR vs operating / caractéristiques + application) + *Exemple — L298N* (deux mondes logique/puissance, table des fonctions = contrat algo C, chute de tension, chauffe → dissipateur, module vs composant nu) + 7 pièges + cas particulier (modules sans datasheet propre) + raccrochage projet 4 phases + voir aussi. Lien `letmegooglethat` pour faire chercher la datasheet réelle aux élèves (non reproduite — copyright).
- **`content/ressources/img/lire-une-datasheet-generique.svg`** (~6 ko) : anatomie d'une datasheet, 8 bandes section → question, AMR mise en évidence (ambre). Image générique placée après le popover.
- **`content/ressources/img/lire-une-datasheet-l298n.svg`** (~7,6 ko) : L298N en deux mondes (logique 5 V / puissance ≤ 46 V), 2 ponts en H, 2 moteurs CC en sens opposés, lien algo C.

### Décisions
- **Structuration C19 = variante-(c)** : procédure rédigée en **générique** (réutilisable pour toute datasheet) + incarnation **unique** L298N concentrée dans *Exemple* + renvois wiki. Préserve la transversalité et regroupe les demandes utilisateur (deux mondes / SMD / module-nu / chauffe / lien algo C) au même endroit.
- **Écart volontaire au fil rouge** : le L298N est un cas **autonome** (2 moteurs CC en sens opposés), confirmé par l'utilisateur — pas la motorisation du bras 3 axes. Le bras cadre le projet (cycle en V) ; les tutos brique technique (composant/MCU) prennent un cas propre.
- **Frontières tenues** : adaptation de niveau → `niveaux-de-tension` ; analyse d'un schéma complet → `analyse-de-schema-electronique` ; pilotage/PWM → `arduino-moteur-cc`/`arduino-sortie-pwm`. Chaque sujet riche finit en renvoi.
- **Boîtier CMS non soudable à l'école** acté en étape 2 + warning.
- **AA élargi C20** : `RA-PROJET-C03-3/EEE/1` + `RA-EEE-C03-2/EEE/1` (cœur), `/3` + `/4` (effleurés), `RA-MME-C02-1/MME/6` (transversalité sélection actionneur catalogue).

### Conventions
- **C19 — épreuve faible signalée** : fiche mono-exemple, ne stresse pas la question multi-techno (vrai test = `analyse-de-schema-electronique`, `firmware`). Variante-(c) actée pour fiche-*compétence*. § 8 mis à jour.
- **C23 — borne posée** : le fil rouge bras 3 axes ne s'étend **pas** aux tutos composant/MCU (cas autonome). § 8 mis à jour ; à intégrer à la reformulation lors de la promotion.
- **C20** : épreuve supplémentaire (mapping élargi multi-couverture, transversalité MME/6 donnée à voir aux étudiants).
- **C24 `write_file`** : 3 créations propres (2 SVG + fiche), 0 faux positif, `get_file_info` OK. Cumul 6 créations sans incident (avec 28/05 suite 2) → promotion § 6 envisageable.
- **Incohérence template signalée** (poussée BACKLOG) : commentaire de `fiche-tuto.md` dit `draft: true` pour les nouvelles fiches, contredit la convention `draft: false` par défaut (24/05) appliquée de fait.

### Tailles
- `lire-une-datasheet.md` ~15,3 ko · SVG ~6 + 7,6 ko.
- `JOURNAL.md` : ~42 → ~47 ko (cette entrée). **Archivage C4 différé** : entrée la plus ancienne = 25/05 suite 6 (legacy ~9 ko, cut 1-edit risqué C14) + aucune pression JOURNAL (~47 ko ≪ 100 ko). 2 sessions différées cumulées — à traiter par cut segmenté ou manuel Obsidian quand pratique.

---

## 2026-05-28 (suite 2) — Squelette EEE/mcu : hubs microcontroleur + arduino + passe nettoyage

### Périmètre
Session double. **Objectif 1** : passe de nettoyage chirurgical `edit_file` (liens stale, réciproques, propagation reclassement PROJ/5, carto passe B) — bouclée. **Objectif 2** : démarrage Phase 1 squelette EEE/info, branche Arduino — création + rédaction des hubs `microcontroleur` (mère) et `arduino`. PC perso, MCP `filesystem:*` exclusif.

### Livrables
- **`content/fiches/eee/mcu/microcontroleur.md`** (~6,3 ko, `type: notion`) : hub mère panorama + aide au choix, techno-agnostique. Popover + schéma bloc SVG + 7 familles MCU (tableau) + 6 critères de choix + 11 liens popover-notions (processeur, mémoire, entrée/sortie, système-d-exploitation, GPIO, ADC, PWM, I2C, SPI, UART, deep-sleep). `aa: [RA-PROJET-C03-3/EEE/5]`.
- **`content/fiches/eee/mcu/arduino/arduino.md`** (~6 ko, `type: notion`) : hub Arduino (« regroupe l'ensemble des tutoriels Arduino »). Popover + Pourquoi Arduino + panorama cartes (Uno R3/R4, Mega 2560, Nano) + écosystème + section *Tutoriels* en **4 paliers** (Prendre en main / Bases / Avancées / Ingénieur, ~20 tutos + transverses référencées). Popover-notions IDE/shield/bibliothèque/cpp/fonction-informatique/pilote.
- **`content/ressources/img/microcontroleur-architecture.svg`** : schéma bloc générique (CPU + Flash + RAM + bus interne + GPIO/ADC/PWM/UART/I2C/SPI + broches E/S), palette ambre/gris calée sur `fast-generique.svg`, mode sombre. 1er jet, affinage utilisateur.
- **`TODO.md`** : gate *Pré-publication MVP (après Phase 2)* ajouté ; nettoyage Phase 0/1/2 + flèche prochaine session (clôture).
- **Objectif 1 (nettoyage)** : patches stale links `securite-et-qualite.md`, lien réciproque `matrice-de-decision`↔`matrice-eco-criteres`, propagation reclassement PROJ/5 E→C dans `couverture-en-cours.md` (PROJ 18C/0E, total 37C/8E), 6 blocs carto passe B, lien `ecodesign` posé spec-tech étape 6 + CdCF. Images : 4/4 SVG présents.

### Décisions
- **C18 mini-hub — épreuve 1/N (`microcontroleur`)** : sous-dossiers physiques `content/fiches/eee/mcu/<famille>/`, hubs en **fichiers nommés** (pas `index.md`, pour résolution `[[microcontroleur]]`/`[[arduino]]` par nom), `type: notion`, listing des filles **en tableau dans le corps**. À confirmer sur `algorithme` (2ᵉ cas).
- **4 paliers de difficulté** pour la section tutos d'un hub famille — candidate § 8.
- **Double marquage [A] tuto famille / [T] fiche transverse** — candidate § 8. Évite la duplication des fondamentaux entre familles.
- **Collision `fonction`** : `[[fonction]]` = AF (FP/FS/FC) ; la fonction programmation → slug distinct `[[fonction-informatique]]`.
- **`arduino` `aa: []`** : panorama, EEE/5 porté par la mère + tuto prise-en-main (à confirmer C20).
- **Fiches transverses émergées** : `niveaux-de-tension` (nouvelle, Phase 1) ; `gpio` promu de popover à fiche substantielle (modes + état au boot).
- **Bus segmenté** : `arduino-uart` / `arduino-i2c` / `arduino-spi`.
- **Prochaine session** = `lire-une-datasheet`, fil rouge **L298N**.

### Conventions
- C18 — épreuve 1/N (voir Décisions). C19 (fiche transverse multi-techno) — à éprouver sur `lire-une-datasheet`.
- C24 `write_file` — 3 créations réussies (microcontroleur, arduino, svg), 0 faux positif.
- Candidates 25 (4 paliers) + 26 (double marquage [A]/[T]) ajoutées § 8.
- « Image générique après popover » (§ 3) appliquée au SVG MCU (1er schéma bloc d'architecture du wiki).

### Tailles
- `microcontroleur.md` ~6,3 ko · `arduino.md` ~6 ko · `microcontroleur-architecture.svg` créé.
- `JOURNAL.md` : ~32 → ~42 ko (cette entrée + reconstruction Phase 0). **Pas d'archivage C4 cette session** : 2 entrées ajoutées (dont reconstruction), JOURNAL ~42 ko sous le seuil 100 ko avec marge — archivage reporté à la prochaine session.

### Note — découpage transverse vs famille (acquis structurant)
Le retour utilisateur sur l'exhaustivité des tutos Arduino (entrée TOR, actionneurs, série, niveaux de tension, datasheet, GPIO, alimentation, état GPIO au boot, segmentation bus) a fait ressortir que beaucoup de « tutos Arduino » sont en réalité des **fondamentaux transverses**. Tranché : la notion transverse vit dans le squelette (écrite une fois, liée partout), le module famille ne porte que le « comment faire en code/câblage ». Les 4 paliers servent aussi de **carte de priorité publication** (Prendre en main + cœur Bases = MVP strict) — le module Arduino complet pèse ~20 tutos, l'estimation roadmap « Phase 2 = 3 sessions » ne vaut que pour le sous-ensemble MVP.

---

## 2026-05-28 (suite) — Phase 0 close : 6 fiches GP (entrée reconstruite a posteriori)

### Périmètre
Clôture Phase 0 (clôture phase 1 GP) : création des 6 fiches restantes du lot gestion de projet + écoconception. **Entrée reconstruite a posteriori le 28/05 (suite 2)** — la session n'avait pas été journalisée sur le moment (`edit_file` indisponible alors). Reconstruction à partir du contenu disque (timestamps ~08:50–09:34) et du prompt de lancement.

### Livrables
- `content/fiches/proj/bom.md` (fiche-tuto ; `aa` MME/5 + PROJ/3 + ESE/1).
- `content/fiches/proj/mind-map.md` (fiche-notion ; `aa: []`) + SVG `mind-map-generique` / `mind-map-bras-3-axes`.
- `content/fiches/proj/fast.md` (fiche-tuto ; `aa` PROJ/1 + /6) + SVG `fast-generique` / `fast-bras-3-axes`.
- `content/fiches/proj/amdec.md` (fiche-tuto ; `aa: []`).
- `content/fiches/proj/ecodesign.md` (fiche-notion ; `aa` RA-PROJET-C04-4/PROJ/5).
- `content/fiches/proj/matrice-eco-criteres.md` (fiche-tuto ; `aa` ESE/4) — **renommage `matrice-eat` → `matrice-eco-criteres`** (collision EAT = état de l'art technique).

### Décisions
- Renommage `matrice-eat` → `matrice-eco-criteres`.
- Lot Phase 0 complet → Phase 1 (squelette EEE) peut démarrer.

### Note
Session non journalisée sur le moment. Vérification fine des 6 fiches reportée au gate *Pré-publication MVP* du TODO.

---

<!-- Sessions antérieures au 28/05 déplacées dans `JOURNAL-archive.md` lors des nettoyages documentaires successifs : 25/05 suite 3 (sessions 19→21/05 + 24/05 suite 2), 26/05 suite (sessions 22/05 → 24/05 suite), 26/05 suite 4 (sessions 25/05 → 25/05 suite 4), 27/05 suite 5 (session 25/05 suite 5, premier flux 1-pour-1 selon C4), 29/05 (session 25/05 suite 6, archivage de masse au seuil 100 ko) et 29/05 suite 2 (sessions 25/05 suite 7 → 27/05 suite 5, archivage de masse 8 entrées). -->
