# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).
> Sessions antichronologiques antérieures au 25/05 suite 5 archivées dans `JOURNAL-archive.md`
> (mise en place initiale du dépôt, installation PC perso, trame projet cycle
> en V, flowcharts de phase, squelettes du V, charte callouts v2, rédaction
> complète de `specification-technique.md`, première vague de trames
> transverses et fiches-notion, nettoyage documentaire et concept étapes 1-2).

<!-- INSERT_JOURNAL_HERE -->

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

## 2026-05-28 — Nettoyage documentaire : investigation NBSP, source réfutée

### Périmètre
Session de nettoyage documentaire (PRIORITÉ 1 du prompt de lancement Cas A) avant reprise Phase 0. PC perso, MCP `filesystem:*`. Investigation de la cause des NBSP parasitant les fichiers de pilotage. PRIORITÉ 2 (`bom`) non abordée (arbitrage utilisateur : arrêt après P1). C4 test 2/N différé (voir Décisions).

### Livrables
- **Diagnostic NBSP bouclé** : hypothèse 27/05 suite 5 (plugin Obsidian « Smart Typography » → U+202F) **réfutée**. Aucun plugin typographique installé (Excalidraw / Git / Pandoc seuls), aucune option Editor n'insérant de NBSP. Test isolé décisif : une ligne de contrôle écrite par Claude via MCP, bourrée de `: ; ? ! % €`, ressort `--check [ok]` → **mes écritures MCP n'injectent aucun invisible**. Save Obsidian également propre (`[ok]` après édition manuelle utilisateur). Seuls invisibles reproduits de la session : 4× U+00A0 issus d'un collage web délibéré (recette + code C), hors flux normal. Zéro U+202F nulle part.
- **`TODO.md`** : zone de test temporaire retirée — mes 2 lignes de contrôle via MCP, bloc recette/code par l'utilisateur dans Obsidian. Fichier revenu à l'état propre, flèche/contexte 28/05.
- **`conventions.md`** : complément C14 daté 28/05 (réfutation de l'attribution U+202F → Obsidian).

### Décisions
- **PRIORITÉ 1 actée non reproductible** : aucune source active de NBSP dans le flux normal (ni MCP Claude, ni Obsidian, ni saisie utilisateur — l'utilisateur ne touche jamais ces fichiers). `normalize` + hook conservés comme filet de sécurité bon marché pour le rare collage web. Rien à configurer dans Obsidian.
- **C4 test 2/N différé** : l'entrée la plus ancienne du JOURNAL (25/05 suite 6) est une entrée *legacy* pré-C21 (~9 ko), pas une entrée hybride 3-5 ko. La couper en un seul `edit_file` exige de reproduire ~9 ko verbatim (risque de mismatch C14) pour un bénéfice marginal (JOURNAL ~28 ko, sans pression, archivage de masse récent 27/05 suite 4). Reporté à une session sous pression JOURNAL, ou via cut segmenté.
- **Prochaine session = Phase 0 `bom`** (inchangé).

### Conventions
- **C14 complément 28/05** : l'attribution des échecs d'anchor à « la typo française U+202F injectée par Obsidian » (récit porté depuis 26/05) n'est **pas étayée** sur ce poste. Les seuls NBSP reproductibles sont des U+00A0 de collage web (hors flux normal). Les échecs d'anchor historiques relèvent plus probablement des autres causes déjà documentées dans la chaîne C14 (CRLF de states passés, artefacts U+FFFD de troncature `head`/`tail`, typos de transcription).
- **Affinage C4 (candidat)** : la cible « 3 tool calls » suppose des entrées C21 (3-5 ko). Les entrées legacy (~9-15 ko) rendent le cut en 1 `edit_file` risqué → segmenter (symétrique au pattern MARKER+N segments) ou reproduire avec vigilance.

### Tailles
- `JOURNAL.md` : ~28 → ~32 ko (cette entrée, pas d'archivage C4 cette session).
- `conventions.md` : ~32 → ~33 ko (complément C14).
- `TODO.md` : retour à l'état propre (zone test retirée) + flèche/contexte 28/05.

### Acquis méthodo — une hypothèse héritée n'est pas un fait
Le prompt de lancement (rédigé 27/05 suite 5) posait une procédure détaillée de « config Obsidian anti-NBSP » sur la base d'un coupable *supposé* (plugin Smart Typography). Vérification : pas de plugin. L'investigation par élimination puis test isolé a renversé le diagnostic — la source supposée n'existait pas, et l'écrivain unique réel (mes propres écritures MCP) est propre. Leçon : une procédure héritée encode une *hypothèse*, pas un *fait* ; la vérifier avant d'exécuter évite de « couper » une source inexistante. Incident secondaire : `--check` mis en **gras** dans une consigne et copié littéralement (`**--check**`) a fait tourner le script en mode FIX au lieu de CHECK — les consignes de commande à l'utilisateur ne doivent pas porter de markdown.

---

<!-- Sessions antérieures au 25/05 suite 7 déplacées dans `JOURNAL-archive.md` lors des nettoyages documentaires successifs : 25/05 suite 3 (sessions 19→21/05 + 24/05 suite 2), 26/05 suite (sessions 22/05 → 24/05 suite), 26/05 suite 4 (sessions 25/05 → 25/05 suite 4), 27/05 suite 5 (session 25/05 suite 5, premier flux 1-pour-1 selon C4) et 29/05 (session 25/05 suite 6, archivage de masse au seuil 100 ko). -->
