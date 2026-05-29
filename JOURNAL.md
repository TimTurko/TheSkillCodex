# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).
> Sessions antichronologiques antérieures au 25/05 suite 5 archivées dans `JOURNAL-archive.md`
> (mise en place initiale du dépôt, installation PC perso, trame projet cycle
> en V, flowcharts de phase, squelettes du V, charte callouts v2, rédaction
> complète de `specification-technique.md`, première vague de trames
> transverses et fiches-notion, nettoyage documentaire et concept étapes 1-2).

<!-- INSERT_JOURNAL_HERE -->

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

## 2026-05-27 (suite 5) — Méthodo : actage 4 conventions candidates + test C4 boucle fermée 1/N

### Périmètre
Session 100 % méthodo selon prompt de lancement Cas A (option 2, méthodo pure pour mesurer proprement le gain C4). 4 conventions candidates issues de l'analyse méta 27/05 suite 4 actées en niveau D une par une (proposition → arbitrage utilisateur → écriture). 5ᵉ convention (signalement proactif hook PC perso) analysée puis écartée. Test boucle fermée de la convention C4 (archivage à session suivante immédiate) sur 25/05 suite 5. Hook pre-commit PC perso activé en début de session.

### Livrables
- **`conventions.md`** :
  - § 6 nouvelles sous-sections : *Archivage JOURNAL à la session suivante immédiate* (C4) + *Préfixe MCP `filesystem:*` exclusif sur le dépôt* (C1) promues directement, sans passage par § 8 (incidents concrets + sémantique critique).
  - § 6 ordre interne : Workflow Git → C4 (archivage) → C1 (MCP exclusif) → Hygiène fichiers.
  - § 8 nouvelle sous-section *Acquises 27/05 suite 5* avec convention candidate 24 (`write_file > create_file`).
  - § 8 nouveau complément à C14 (artefact U+FFFD sur `head=N` tronqué).
- **`JOURNAL.md`** : entrée présente insérée en tête au marker, entrée 25/05 suite 5 archivée vers `JOURNAL-archive.md` à sa place chronologique (test C4 1/N) + commentaire de pied mis à jour (suite 5 → suite 6 + vague 27/05 suite 5).
- **`TODO.md`** : tâche *Activer le hook pre-commit PC perso* supprimée (faite en début de session) + flèche prochaine session updated vers Phase 0 `bom`.

### Décisions
- **4 conventions actées niveau D**, formulations négociées une par une (C1 / C24 / C3 / C4 dans l'ordre du prompt utilisateur). Mode proposition → arbitrage → écriture maintenu strictement.
- **5ᵉ convention écartée** (signalement proactif hook PC perso) : analyse → convention existante § 6 *Hygiène* suffisante, l'incident d'origine vient de non-application par l'instance Claude 27/05 suite 4 + le hook activé reste persistant pour toujours. Résolution naturelle après cette session.
- **Cadrage session** : méthodo pure (option 2), pas d'enchaînement `bom`. Mesure C4 indépendante.

### Conventions
- **C1 — préfixe MCP `filesystem:*` exclusif** : promotion directe § 6 (sémantique critique, piège de nommage entre `filesystem:create_file` MCP et `create_file` sandbox).
- **C4 — archivage 1-pour-1** : promotion directe § 6 (test boucle fermée 1/N réussi techniquement, voir Acquis méthodo).
- **C24 — `write_file > create_file`** : candidate § 8, à éprouver sur 2-3 créations Phase 0 (`bom`, `mind-map`, `fast`...).
- **C14 complément artefact U+FFFD** : ajout à la chaîne de compléments existants, pas une nouvelle convention.

### Tailles
- `conventions.md` : ~26 → ~32 ko (+6 ko pour 4 conventions).
- `JOURNAL.md` : ~38 → ~28 ko (insertion entrée +~5 ko, archivage 25/05 suite 5 -~15 ko).
- `JOURNAL-archive.md` : +~15 ko (insertion 25/05 suite 5).
- `TODO.md` : -~0,5 ko (suppression hook PC perso + update flèche).

### Acquis méthodo — C4 nécessite raffinement (cas invariant violé)

La formulation actuelle de C4 dit « insérer en tête de l'archive », ce qui suppose l'invariant antichronologique JOURNAL/archive : toute entrée archive est plus ancienne que toute entrée JOURNAL. **Cet invariant est actuellement violé** : l'archive contient des entrées 27/05 (matin, suite, suite 2) qui sont plus récentes que les entrées 26/05 (suite 3 → suite 5) restées dans le JOURNAL — séquelle des archivages de masse antérieurs qui ont priorisé l'allègement du JOURNAL sur la cohérence chronologique globale.

Pour cette session 1/N, l'entrée 25/05 suite 5 a été insérée à sa **place chronologique correcte** dans l'archive (entre 26/05 et 25/05 suite 4 via anchor court `## 2026-05-25 (suite 4)`) plutôt qu'en tête nominale. Trade-off : lisibilité de l'archive préservée, même coût en tool calls.

**Raffinement C4 à acter session future** : reformuler la procédure pour dire « insérer à la place chronologique correcte dans l'archive » (qui tombe automatiquement en tête dans le cas standard où l'invariant tient), plutôt que « en tête » qui supposait l'invariant tacitement. Pas urgent — le cas tient avec un anchor court sur le titre de l'entrée voisine plus ancienne.

### Acquis méthodo — test C4 1/N coût technique

Le coût technique du test C4 sur cette session : **4 tool calls** dédiés archivage (1 read tail JOURNAL pour identifier l'entrée + 1 read head archive pour repérer l'anchor + 2 edits : insertion archive + coupe JOURNAL) + 0 retry, 0 échec C14. Conforme à l'estimation « 3 tool calls » de C4 (légèrement au-dessus parce que j'ai dû préparer l'anchor d'insertion archive cas invariant violé). Cas standard (invariant tenu) : 3 tool calls suffiraient. **Convention C4 validée 1/N** sur le coût technique. À éprouver 2-3 fois encore avant raffinement formel sur l'invariant.

---

## 2026-05-27 (suite 4) — Phase 0 reprise : EAT + figeage template fiche-tuto + restructuration `decomposition-fonctionnelle`

### Périmètre
Phase 0 reprise selon prompt de lancement Cas A (premier test du workflow démarrage Cas A formalisé § 6 du prompt projet). PC perso, MCP filesystem. Trois objectifs annoncés en briefing, trois objectifs réalisés.

### Livrables
- **`content/fiches/proj/etat-de-l-art-technique.md`** (~15 ko, `type: tuto`, fiche-tuto pivot phase 1) : méthode N × M, **Procédure pas à pas** en 4 étapes (recenser 3-6 solutions / définir 5-8 critères / chiffrer le tableau / synthétiser), exemple bras 3 axes en tableau 3 réfs × 6 critères (Niryo / uArm / Moveo), 7 pièges, *Cas particulier* marché immature, **Raccrochage projet** 4 entrées. Distinctions explicites **EAT vs revue bibliographique** (intro + Pièges) et **EAT vs matrice de décision** (pas de pondération dans EAT, réservée à la MdD aval).
- **`content/templates/fiche-tuto.md`** **figé** : calque `fiche-notion.md` + 2 sections distinctives *Procédure pas à pas* (H3 numérotées 3-6 étapes) + *Raccrochage projet* (obligatoire, en pénultième position avant *Voir aussi*). Section *Captures d'écran* absente du template (option B retenue, voir Décisions). Convention candidate fil rouge bras 3 axes inscrite en commentaire de la section *Exemple* avec renvoi explicite vers conventions.md § 8.
- **`content/fiches/proj/decomposition-fonctionnelle.md`** restructurée au format figé : renommage H2 *Comment décomposer* → *Procédure pas à pas*, 3 sous-sections H3 numérotées (1. Du système aux sous-systèmes / 2. Des sous-systèmes aux fonctions techniques / 3. Arrêter au bon niveau), intro reformulée pour annoncer 3 étapes, **Raccrochage projet** ajouté entre *Cas particulier* et *Voir aussi*. Contenu intact partout ailleurs. **Dette TODO résolue (cf. JOURNAL 27/05 suite).**
- **2 templates patchés** (`fiche-notion.md` + `fiche-tuto.md`) : retrait `mia` de la liste de tags possibles dans le commentaire du front matter (dissous depuis 26/05/2026, coquille héritée signalée et corrigée).

### Décisions structurelles template fiche-tuto
- **Captures d'écran : pas de section dédiée** (option B). Convention dans le guide template : intégrer les captures INLINE dans les étapes de la procédure. Décision **provisoire**, à figer définitivement après premiers tutos Arduino/ESP32/oscilloscope (objets cibles plus complexes en UI).
- **Ordre A des sections finales** retenu : Pièges → Cas particulier (opt) → **Raccrochage projet** → Aller plus loin (opt) → Voir aussi. Argument : *Raccrochage projet* clôt le contenu utile en rebouclant sur le projet, *Voir aussi* est un appendice navigationnel pur.
- **Convention candidate fil rouge bras 3 axes** inscrite dans le commentaire du template avec mention « en éprouvage ». Quand promotion (après N épreuves), retrait de la mention.

### Conventions éprouvées cette session
- **C17 patch flèche TODO post-arbitrage** : épreuve 4/N réussie (flèche patchée vers `bom` en clôture).
- **C20 mapping AA multi-couverture** : épreuve 2/N réussie sur EAT (PROJ-C04-4/PROJ/2 + MEO-C10-3/MEO/1, le second au titre du critère écoconception listé dans la procédure).
- **C21 format JOURNAL hybride** : épreuve 2/N réussie (présente entrée, ~6 ko).
- **C22 briques A/B/C/D** : épreuve 2/N — pas de confusion observée à vue par l'utilisateur, brique D mobilisée sur arbitrages template + diff structurel decomp-fonctionnelle, brique A en exécution silencieuse pendant la fin de session.
- **Convention candidate fil rouge bras 3 axes pour fiches-tuto pivot phase 1** : épreuve 2/N réussie sur EAT (triplet Niryo/uArm/Moveo cohérent avec le projet pivot). Reformulation différée (élargissement aux fiches-notion-pivot ou reclassement `caracteriser-une-exigence` en tuto) — non scopée cette session.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **3 décisions niveau D en attente hiérarchie** (catégorie Hors scope par délégation, 4 critères MME effleurés, statut `schema-cinematique`).
- **Reformulation convention candidate fil rouge** vs reclassement carac-exigence.
- **C18 + C19 + C20 + C21 + C22** : épreuves restantes avant promotion.
- **Section *Captures d'écran* du template fiche-tuto** : à figer après tutos Arduino/ESP32/oscilloscope.

### Tailles fichiers en fin de session
- `etat-de-l-art-technique.md` : ~15 ko (créé).
- `decomposition-fonctionnelle.md` : ~14 → ~15 ko (ajout Raccrochage projet).
- `fiche-tuto.md` template : ~10 ko (créé).
- `fiche-notion.md` template : inchangé sauf patch mia.
- `JOURNAL.md` : ~104 → ~38 ko après archivage 3 entrées 27/05 (suite 2 + suite + matin) vers `JOURNAL-archive.md` + insertion présente entrée.
- `JOURNAL-archive.md` : +~37 ko après réception des 3 entrées 27/05.
- `conventions.md`, `TODO.md`, `BACKLOG.md` : patches mineurs (incréments épreuves § 8 + cochages).

### Acquis méthodo — épisode faux positif MCP `create_file`

Bug MCP non documenté précédemment. Première tentative de création de `etat-de-l-art-technique.md` via `create_file` : retour `File created successfully` du serveur MCP, mais le fichier n'existait pas sur disque (confirmé côté utilisateur via explorateur Windows). Le `get_file_info` qui a suivi a timeout 4 min. Reboot complet Claude Desktop par l'utilisateur. Au reboot, `list_directory` confirmait l'absence du fichier (état cohérent), mais une seconde tentative `create_file` a retourné `File already exists` — le serveur MCP gardait en mémoire un état incohérent malgré le redémarrage de Claude Desktop. Contournement : passage à `write_file` (idempotent, overwrite sans état préalable), création réussie en un appel.

**Discipline pour sessions futures** : préférer `write_file` à `create_file` pour les fiches en session. `write_file` est idempotent et ne dépend pas d'un état préalable du serveur MCP. `create_file` peut échouer silencieusement (faux positif) puis se bloquer sur un état mémoire corrompu nécessitant un reboot complet de Claude Desktop. Coût de cet épisode cette session : ~3 messages perdus en diagnostic + 1 reboot + retry. Capitalisation immédiate dans cette entrée — pas de promotion en convention formelle (convention candidate au § 8 conventions seulement après 2-3 épreuves supplémentaires si le bug est revu).

---

## 2026-05-27 (suite 3) — Refonte documentaire structurale : briques A/B/C/D, marker JOURNAL, migrations TODO→BACKLOG

### Périmètre
Session 100 % refonte du système documentaire (Q1–Q5 du briefing utilisateur). Pas de rédaction de fiche. Refonte du prompt projet, de `conventions.md`, et compactage TODO/BACKLOG. Première instance du format JOURNAL hybride.

### Livrables
- **Prompt projet refait** (8 sections au lieu de 10) : § 3 chiffres AA actualisés (62 critères, 12 AA, 5 domaines, MIA dissous), § 6 Cas A/B au démarrage selon prompt de lancement, § 7 nouvelle procédure fin de session (MAJ systématique → réflexion → prompt de lancement), § 8 briques A/B/C/D (par forme de communication). Copié-collé par utilisateur dans les instructions Claude.ai.
- **`conventions.md`** : § 5 briques A/B/C/D (refonte complète de l'ancien découpage par nature d'action), § 5 *Round 2* → *Phase de relecture utilisateur*, § 5 *Livraison rédigée — pas de placeholders* (renommée et désindexée des niveaux), § 7 chiffres AA actualisés, § 8 complément C14 multi-edits atomique + C21 format JOURNAL hybride + C22 briques A/B/C/D en éprouvage pratique.
- **`TODO.md` compacté** (~25 → ~12 ko) : suppression section *Fait* (rotation glissante abandonnée), nettoyage en-tête, migration des sections *Décisions hiérarchie* + *Manipulations différées* + *Vérifications visuelles* vers BACKLOG.
- **`BACKLOG.md` enrichi** (~25 → ~33 ko) : 3 nouvelles sections H2 migrées depuis TODO.
- **`JOURNAL.md` marker posé** : `<!-- INSERT_JOURNAL_HERE -->` après l'intro. Les insertions en tête auront désormais un payload = 1× la taille de l'entrée (au lieu de 2× avec l'ancien anchor sur la première entrée existante).

### Décisions structurales
- **Briques de réponse A/B/C/D** : refonte du contrat de communication. Découpage par **forme** (Fait / Questions / Procédure utilisateur / Explication), pas par nature de l'action. Briques **combinables**, pas mutuellement exclusives. Liste explicite des topics qui forcent D obligatoire.
- **Section *Fait* TODO supprimée** : l'historique reste dans JOURNAL, plus de duplication.
- **Workflow démarrage** : Cas A (prompt de lancement fourni) = lecture conventions + JOURNAL head seulement, pas de TODO. Cas B (sans prompt) = lecture des 3 fichiers + résumé classique.
- **Workflow fin de session** : MAJ systématique TODO/JOURNAL/BACKLOG sur demande, puis réflexion commune, puis Claude rédige et propose un prompt de lancement pour la session suivante.

### Conventions
- **C14 complément 27/05 suite 3** (acquise) : `edit_file` multi-edits est **atomique** — un anchor non trouvé annule tout le batch. Règle : edits ambitieux (oldText > 1 ko, fin de fichier, NBSPs suspects) toujours en appel séparé.
- **C21 Format JOURNAL hybride** (en éprouvage § 8) : header bullets + narratif court. Cible 3-5 ko. Cette entrée = épreuve 1/N.
- **C22 Briques A/B/C/D** (en éprouvage § 8) : critère de succès = réduction effective du texte produit, mesurée à vue par l'utilisateur. Cette session = épreuve 1/N.
- **« Round 2 » → « phase de relecture utilisateur »** (vocabulaire).
- **Chiffres AA actualisés** : 62 critères (au lieu de 57), 5 domaines (au lieu de 6 — MIA dissous depuis 26/05/2026).

### Tailles fichiers en fin de session
- `conventions.md` : ~22 → ~26 ko (briques refondues + 2 conventions en éprouvage + complément C14)
- `TODO.md` : ~25 → ~12 ko (compactage majeur)
- `BACKLOG.md` : ~25 → ~33 ko (3 sections migrées)
- `JOURNAL.md` : ~99 → ~104 ko avec cette entrée ~5 ko. **Seuil 100 ko dépassé** : archivage à proposer en début de prochaine session.

### Acquis méthodo

La refonte des « niveaux d'autonomie » a glissé en 3 itérations sous pression d'objectif. Ma proposition initiale = 3 niveaux par **nature d'action**. Proposition utilisateur = 3 niveaux par **dynamique d'interaction**. Recadrage utilisateur final = 4 briques par **forme de communication** (Fait / Question / Procédure / Explication). L'angle d'analyse a glissé deux fois (nature → dynamique → forme) sous le critère explicite « minimiser le texte ». Compromis final = briques combinables + règle de défaut implicite + liste D obligatoire = simplicité orientée verbosité produite, sans perte de garde-fou sur les topics structurants. Leçon : lorsque l'utilisateur fixe un objectif terminal explicite (« le but est de minimiser X »), arrêter de proposer des compromis multi-critères et réaligner entièrement sur l'objectif.

L'épisode multi-edits sur TODO (1 batch de 4 edits raté → 3 appels successifs) a coûté ~3-4× la durée prévue. Cause : edit n°4 avec anchor de fin de fichier (~3 ko de oldText avec trailing newlines incertains) a échoué et annulé les 3 edits propres qui précédaient. Capitalisation immédiate sous forme de complément C14 § 8. Effet attendu : prochaines sessions, batches multi-edits prudents (2-3 anchors courts max), edits ambitieux isolés dans des appels dédiés. La leçon précise vient s'ajouter aux pièges connus (seuil 30 ko payload, EPERM verrou Windows, typos transcription).

---

## 2026-05-26 (suite 5) — Cadrage stratégique phase 2 elec/info + livraison `caracteriser-une-exigence`

### Périmètre de session
Session double : (1) rédaction de la fiche-tuto `caracteriser-une-exigence` (pivot phase 1, aliases `[critere, niveau, flexibilite]`, calque `bete-a-cornes`) ; (2) cadrage stratégique de la phase 2 elec/info en réponse à la demande utilisateur d'une roadmap de tutos elec/info raccrochés aux phases du V. Le cadrage stratégique a pris l'essentiel de la session après livraison de la fiche. PC perso, préfixe MCP `filesystem:*` puis bascule sur `theskillcodex:*` (PC pro synchronisé) en fin de session après déchargement du serveur filesystem.

### Livraison `caracteriser-une-exigence.md` (15,5 ko)

4 questions méthodo tranchées en cadrage niveau C en début de session :
- **Q1 — Structure triptyque** : 1 exigence (FP1 bras 3 axes) déclinée en 3 niveaux de qualité, pas 3 triptyques séparés. Critère/niveau/flexibilité = triplet indissociable, pas trois objets pédagogiques distincts.
- **Q2 — F0/F1/F2/F3** : tableau 4 lignes dans H3 *La flexibilité*, pas section H2 séparée. Sous-élément de la méthode, pas objet de niveau égal.
- **Q3 — Fil rouge bras 3 axes** retenu (vs cas autonome). Trois arguments : (a) fiche-tuto pivot phase 1 fonctionnellement plus proche d'une trame, (b) critères CdCF chiffrés déjà figés (22/05) directement réutilisables, (c) crée boucle de lecture intra-wiki avec `specification-technique.md` étape 4. Esquisse une **convention candidate** : « fiches-tuto pivot phase 1 = fil rouge, fiches-notion historiques = cas autonome » — à éprouver sur PCB et AMDEC.
- **Q4 — Profondeur** : calque bete-a-cornes complet visé, profondeur livrée à 15,5 ko sous la cible 25-30 ko (économe assumé, à étoffer en round 2 si manque de respiration).

Rédaction niveau A en autonomie après cadrage. Structure : popover → À quoi ça sert (3 rôles : opposabilité, évaluation finale, arbitrage en cours de route) → Comment caractériser (intro + 3 H3 : critère / niveau / flexibilité avec tableau F0/F1/F2/F3 + colonne *Quand l'utiliser*) → Exemple bras 3 axes avec triptyque mauvais/moyen/bon en tableaux markdown 3 lignes (composant / valeur retenue) → Pièges (6 entrées format gras court + explication) → Cas particulier exigences binaires et réglementaires → Voir aussi.

Choix structurels assumés :
- Pas de SVG produit (caractérisation = format textuel d'énoncé, pas forme graphique canonique comme bête à cornes ou pieuvre).
- Triptyque en **tableaux markdown** au lieu de SVG, cohérent avec la nature de la notion — pattern à acter si retenu pour les fiches-notion d'outils textuels (vs outils graphiques).
- Colonne *Quand l'utiliser* ajoutée au tableau F0/F1/F2/F3 (utile pédagogiquement, à statuer en round 2).
- Wiki-link `unite-si` propagé × 2 (popover déjà rouge dans spec-tech étape 4, déblocage transverse à venir intégré dans Phase 0 clôture phase 1 GP).

### Cadrage stratégique phase 2 elec/info — décisions majeures

Demande utilisateur : roadmap des tutos elec/info raccrochés aux phases du V, deux voies prioritaires (AA école + compétences pro pour aller plus loin). Cinq cycles d'échange en niveau D ont consolidé un cadrage majeur. Synthèse :

**1. Posture éditoriale renforcée** : elec/info devient le **cœur du wiki**, ~50-60 fiches phase 2 assumées, plusieurs mois de travail. Inflation de périmètre (× 7 par rapport à l'estimation initiale 8 fiches phase 2). Posture inscrite dans la section 6 *Ambition au-delà du référentiel* de `couverture-en-cours.md` (nouvelle sous-section *Phase 2 elec/info — cœur du wiki* ajoutée en fin de session).

**2. Structure squelette transverse + embranchements technologiques** — distinction structurante pour publication progressive :
- **Squelette transverse** = fiches indépendantes du choix techno, couvrent tous les AA pour n'importe quel chemin technologique suivi. Socle pédagogique publiable.
- **Embranchements technologiques** = fiches spécifiques à une famille MCU et ses outils de simu liés. Chaque famille forme un module autonome complétable au fil de l'eau.
- Un étudiant 100 % ESP32 doit voir tous les AA via squelette + module ESP32. Pareil pour Arduino, Raspberry Pi.
- **Conséquence opérationnelle** : publication site possible à la rentrée scolaire dès que squelette transverse complet + ≥1 embranchement complet (idéalement Arduino).

**3. Hiérarchie mini-hubs imbriqués** — 5 mini-hubs à structurer :
- `microcontroleur` (hub mère panorama → hubs filles familles MCU → tutos d'utilisation, 2 niveaux d'imbrication)
- `algorithme` (mini-hub mère → 3 fiches-notion filles : logigramme/MAE/grafcet)
- `pcb` (hub léger → 2 tutos outils : kicad/easyeda)
- `bus-de-communication` (hub → 3+ notions popovers : uart/i2c/spi)
- `techno-sans-fil` (hub → 5 notions popovers : wifi/ble/xbee/zigbee/lora)

**4. Roadmap structurée en 5 phases + clôture phase 1** :
- **Phase 0** — clôture phase 1 GP (~10 sessions) : 8 fiches notion (`decomposition-fonctionnelle`, `etat-de-l-art-technique`, `bom`, `mind-map`, `fast`, `amdec`, `matrice-eat`, `ecodesign`) + template `fiche-tuto.md` + patches conventions (C18/C19, couverture § 6).
- **Phase 1** — squelette critique AA (~8 sessions) : ordre pédagogique `microcontroleur` (hub mère) → `lire-une-datasheet` → `analyse-de-schema-electronique` (NC EEE/1) → `chronogramme` (jonction datasheet ↔ algorithme ↔ oscilloscope) → `algorithme` (hub) → `logigramme` / `machine-a-etats` / `grafcet`. Critères NC EEE-C03-3/1 et EEE-C03-2/5 entièrement couverts.
- **Phase 2** — premier embranchement Arduino (~3 sessions) : `arduino` (hub fille) + `arduino-prise-en-main` + `tinkercad`. **MVP strict atteint, site publiable.**
- **Phase 3** — squelette transverse pro (~10 sessions) : `oscilloscope`, `multimetre`, `firmware`, `debugger-embarque`, `pcb` (hub) + `kicad`, `bus-de-communication` (hub) + `uart`/`i2c`/`spi`.
- **Phase 4** — second embranchement ESP32 (~4 sessions) : `esp32` (hub fille) + `esp32-arduino-core` + `wokwi` + `alimentation-electronique`. **MVP étendu atteint.**
- **Phase 5+** — alimentation continue (~25 sessions) : reste squelette transverse (sans-fil hub, circuitverse, ltspice, easyeda, cable-management, bom-electronique) + embranchements restants (Raspberry Pi, ESP8266, ESP32-IDF, MCU prio 2 STM32/Teensy/PIC, pcb-gravure-ecole, falstad).

**5. Choix techniques actés** :
- **ESP32** : Arduino-core en 1er tuto (entrée pratique), ESP-IDF en 2ème (approfondissement pro).
- **Hub `bus-de-communication`** avec **fiches-notion popovers** (UART/I2C/SPI séparées, convention C16).
- **Hub `techno-sans-fil`** avec **fiches-notion popovers** (Wi-Fi/BLE/XBee/Zigbee/LoRa séparées).
- **Raspberry Pi** sous étiquette élargie *plateformes embarquées* dans hub MCU (techniquement SBC pas MCU, mais usage pédagogique commun avec les autres).
- **CircuitVerse** retenu pour simu numérique en ligne (testé par utilisateur en session). **Falstad** évalué ultérieurement.
- **XBee** (et non Zigbee) en initial : XBee = module hardware (Digi) qui parle Zigbee/Wi-Fi. Finalement reclassé en hub `techno-sans-fil` comme tous les modules radio.
- **`chronogramme`** transverse à datasheet/algorithme/oscilloscope, fiche autonome (pas dans mini-hub algorithme malgré le critère EEE-C03-2/5 qui les liste ensemble — sémantique trop différente : signaux dans le temps vs flot de comportement).
- **`firmware`** transverse pur avec pseudocode (pas d'exemple spécifique à un MCU), illustrations multi-techno via la structure wiki. Rabbit hole optionnel : gestion mémoire / interruptions / programmation RT non bloquante.
- **Fiches-tuto pivot phase 1 = fil rouge** esquissée comme convention candidate (vs fiches-notion historiques = cas autonome).

**6. Trois cercles MVP** pour publication :
- **MVP strict** (AA 100 %) = Phase 0 + Phase 1 + Phase 2 = ~21 sessions, 2-3 mois. Site publiable rentrée.
- **MVP étendu** (+ PCB + bus + ESP32) = + Phase 3 + Phase 4 = ~35 sessions, 3-4 mois.
- **Cible complète** = ~70 sessions, plusieurs mois (alimentation continue post-rentrée).

### Conventions candidates en éprouvage

- **C18 candidate — mini-hub imbriqué** : 5 cas identifiés. À éprouver sur `algorithme` (cas le plus simple) puis `microcontroleur` (cas le plus complexe, 2 niveaux). Convention à fixer : front matter du hub, structure de dossier (sous-dossiers physiques vs à plat), format de listing des fiches filles dans le corps. Formalisation prévue dans `conventions.md` § 6 (Publication / Quartz) une fois éprouvée.
- **C19 candidate — fiche transverse multi-techno** : fiche d'une notion couvrant plusieurs technologies (ex. `firmware`, `analyse-de-schema-electronique`, `lire-une-datasheet`). À éprouver sur `firmware` et `analyse-de-schema-electronique`. Trois options de structuration : (a) callouts par techno côte à côte ; (b) tableau comparatif ; (c) exemple unique générique + renvois vers modules MCU. Intuition : (c) plus léger éditorialement.
- **C17 éprouvée 2/N** : patch flèche TODO post-arbitrage utilisateur en fin de session — épreuve 2 réussie (flèche patchée de « reprise rédaction phase 2 » vers « Phase 0 clôture phase 1 GP » selon l'arbitrage sortant du cadrage stratégique). 1-2 épreuves restantes avant promotion vers § 5 ou § 8 du prompt projet.

### Acquis méthodo et incidents

**Convention candidate « fiches-tuto pivot phase 1 = fil rouge »** esquissée sur `caracteriser-une-exigence` (Q3). À éprouver sur PCB et AMDEC.

**Triptyque en tableaux markdown** (vs SVG) pour fiches-notion d'outils textuels. À acter si reproduit sur 1-2 autres fiches.

**Limitation technique session** : serveur MCP `filesystem` (PC perso) déchargé entre l'écriture initiale de `caracteriser-une-exigence.md` (début de session) et la phase de clôture (patches TODO/conventions/couverture/BACKLOG/JOURNAL). Tentatives directes échouées (« Tool 'filesystem:read_text_file' not found » même en invocation directe sans `tool_search`). **Bascule effective sur le serveur `theskillcodex` (PC pro)** après vérification que le PC pro est synchronisé avec le PC perso (probablement via OneDrive ou un sync de fond). Tous les patches de clôture ont été appliqués avec succès côté PC pro. **Acquis** : vérifier l'accès aux deux serveurs au démarrage de session, l'utilisateur peut indiquer la disponibilité si doute. Cas à évoquer en clôture si la situation se reproduit.

**1 incident C14 à mi-clôture** : suppression de la session 26/05 suite 2 dans la section *Fait* du TODO (rotation glissante) **échouée 2 fois** sur anchor non matché. Hypothèse : NBSPs fines U+202F invisibles devant ponctuations françaises (`:`, `;`, etc.). Anchor non recopié depuis lecture MCP fraîche (j'avais le bloc en contexte début de session, mais la session du PC pro pouvait avoir des espaces typo différents après synchro). **Décision** : dette reportée à traitement manuel utilisateur ou prochaine session avec accès PC perso — 4 sessions dans *Fait* au lieu de 3 jusqu'à correction, pas de conséquence pédagogique. Discipline C14 confirmée à chaud : si retentative, recopier strictement depuis `read_text_file` fraîche.

### État des patches de clôture appliqués

- **TODO.md** : 4 patches réussis (flèche prochaine session → Phase 0 + cadrage stratégique en tête ; cocher `caracteriser-une-exigence` ; refonte section *Notions à produire* en 3 sous-sections roadmap phase 2 ; ajout session 26/05 suite 5 en tête section *Fait*). 1 patch échoué sur anchor non matché (retrait session 26/05 suite 2 pour rotation glissante — dette manuelle).
- **conventions.md** : 1 patch réussi (§ 8 *En cours d'éprouvage* : maj C17 à épreuve 2/N + ajout C18 candidate mini-hub imbriqué + ajout C19 candidate fiche transverse multi-techno).
- **couverture-en-cours.md** : 2 patches réussis (ajout sous-section *Phase 2 elec/info — cœur du wiki* dans § 6 *Ambition au-delà du référentiel* + correction typo « délibement » → « délibérément »).
- **BACKLOG.md** : 2 patches réussis (refonte EEE avec nouvelles cibles wiki-links : 5 mini-hubs + filles + fiches transverses + outils simu + compétences pro ; nettoyage doublon `cable-management` et entrée PCB obsolète).
- **JOURNAL.md** : entrée courante en tête (ce patch).

### Décisions reportées (toujours en attente)

- Toutes celles des sessions précédentes.
- **3 décisions niveau D en attente hiérarchie** : catégorie Hors scope par délégation pour 3 critères design, statut des 4 critères MME effleurés sans fiche centrale, statut `schema-cinematique` wiki vs délégation MME.
- **C17 épreuve 1-2/N restantes** avant promotion vers `conventions.md` § 5 ou § 8.
- **C18 + C19 à éprouver** sur Phase 0 (transition) puis Phase 1 elec/info.
- **Dette manuelle TODO** : retrait session 26/05 suite 2 dans section *Fait* (anchor C14 récalcitrant en fin de session).
- **Prochaine session** = Phase 0 démarre par `decomposition-fonctionnelle` (fiche-notion outil natif phase concept étape 1, popover déjà attendu).
- **Commit + push** : workflow fin de session utilisateur, inclut la fiche `caracteriser-une-exigence` + tous les patches de clôture.

### Tailles fichiers en fin de session

- JOURNAL.md : 86 → ~93 ko (sous seuil 100 ko, marge confortable, archivage non nécessaire à cette session).
- caracteriser-une-exigence.md : 15,5 ko (livré début de session).
- TODO.md : 16 → ~22 ko (refonte section roadmap phase 2, attendu).
- conventions.md : 16 → ~18 ko (ajout C18/C19).
- couverture-en-cours.md : 12 → ~15 ko (ajout sous-section phase 2 elec/info).
- BACKLOG.md : ~20 → ~22 ko (refonte EEE, nettoyage doublons).

---

## 2026-05-26 (suite 4) — Clôture méthodologique : promotions conventions + synthèse globale couverture AA + archivage JOURNAL 3e vague

### Périmètre de session
Session de clôture méthodologique du chantier cartographie AA bouclé 26/05 suite 3. Alternative 2 actée en cadrage : trois actes à froid dédiés aux livrables méthodologiques avant reprise de la rédaction phase 2. PC perso, préfixe MCP `filesystem:*`.

### Acte 1 — Promotions C1-C6 / C15 / C16 dans `conventions.md` (6 edits, niveau C)
Retrait de la bannière « Acquises 25/05 suite — épreuve 3/3 réussie » du § 7 (les conventions transverses sont déjà dans les sections fixes, bannière obsolète). Enrichissement du bullet wiki-links § 2 avec mode d'application (au fil + filet passe dédiée en sortie de fiche).

**Création d'un nouveau § 7 *Référentiel AA*** consolidant C15 et C16 :
- Codification critique format `<Code_RA>/<AA_DOMAIN>/<N°critère>` (ex. `RA-PROJET-C03-3/EEE/1`)
- 4 catégories de cartographie : Couvert / Effleuré / Hors scope / Non couvert
- **Règle du statut dominant** quand un critère apparaît dans plusieurs fiches : C > E > HS > NC
- Convention **1 fiche-tuto par critère EEE/info embarquée** en phase 2 (ou tutoriel gonflé multi-couverture)
- Champ `aa:` dans front matter comme source de vérité (skip légitime à `aa: []` documenté)
- Référentiel source : `_drafts/referentiel/Compétences.xlsx` + version normalisée `referentiel-normalise.md` (57 critères, 12 AA, 5 domaines)
- 3 décisions niveau D ouvertes actées comme en attente hiérarchie

Renumérotation § 7 *En cours d'éprouvage* → § 8 (puisque le nouveau § 7 *Référentiel AA* prend la place). Retrait des entrées 15 et 16 du § 8 (promues). Suppression d'une sous-section « Référence AA » redondante du § 6 (portée par le nouveau § 7). Mise à jour du bullet annexe pointant vers le nouveau § 7.

**6 edits passés sans échec C14**. Discipline anchor court confirmée.

### Acte 2 — Synthèse globale dans `couverture-en-cours.md` (3 edits, niveau B/C)
Remplacement du placeholder de synthèse globale par 8 sections rédigées :

1. **Bilan en chiffres** — tableau récap par domaine (EEE 5C/2E/0HS/3NC, ESE 5/0/0/0, MEO 6/0/0/0, MME 3/6/0/2, PROJ 17/1/4/3) + total 36 C / 9 E / 4 HS / 8 NC sur 57 critères (63 %/16 %/7 %/14 %)
2. **Lecture par domaine** — ESE et MEO entirement couverts (cohérent nature transverse), EEE et MME ont trous structurés tous adressés phase 2, PROJ domaine majeur (44 %) couvert hors design délégable
3. **Lecture par catégorie** — 17 fronts matters écrits + 4 skip légitimes à `aa: []`
4. **Trous NC adressés vs à arbitrer** — 2 trous déjà au TODO (analyse-de-schema-electronique, microcontroleur+firmware) + 3 trous à adresser (simulation-electronique, schema-cinematique) + 3 NC à interroger hiérarchie (PROJ-C03-3/1, /2 design + MME-C03-1/1 outils designers)
5. **Décisions niveau D ouvertes** — catégorie Hors scope par délégation, statut 4 critères MME effleurés, statut schema-cinematique
6. **Ambition au-delà du référentiel** (reformulé selon retour utilisateur : *« on peut faire plus que le scope des AA, mieux trop que pas assez »*) — 3 fiches phase 1 sans critère AA central illustrent l'ambition au-delà du référentiel : `securite-et-qualite` (posture professionnelle), `matrice-de-decision` (outil pivot transverse), `hub/index` (méta-structure). Pas exception à justifier, ces fiches actent une posture éditoriale.
7. **Conventions méthodo validées** — récapitulatif des 17 conventions du `conventions.md` actuel après acte 1
8. **Suite des opérations** — reprise rédaction phase 2 (caracteriser-une-exigence prioritaire, puis pcb, puis amdec) + 3 décisions D à arbitrer hiérarchie

Deux patches typo correctifs lors de la rédaction (« critore » → « critère », régression de la session 26/05 suite 3) + reformulation pourcentage PROJ (17 C + 1 E sur 21 critères non-HS).

### Acte 3 — Archivage JOURNAL 3e vague via pattern MARKER + N segments (12 edits, niveau A/B)
**JOURNAL.md initialement à 122 ko** (au-delà du seuil 100 ko). Périmètre d'archivage : 5 sessions 25/05 + suite + suite 2 + suite 3 + suite 4 (~36 ko net).

Découpage 4 segments adopté pour sécurité (payload max ~22 ko vs seuil 24-25 ko documenté) :
- Seg 1 (le + ancien, inséré en 1er) : 25/05 + 25/05 suite — ~22 ko
- Seg 2 : 25/05 suite 2 — ~11 ko
- Seg 3 : 25/05 suite 3 — ~12 ko
- Seg 4 (le + récent, inséré en dernier) : 25/05 suite 4 — ~9 ko

**Phase 1 — Insertion archive (6 edits)** : pose marker `<!-- ARCHIVE_INSERT_MARKER -->` + nouveau commentaire `<!-- DEBUT DES SESSIONS 25/05 — ARCHIVEES LE 26/05 SUITE 4 -->` avec correction simultanée de la dette commentaire précédent (« 25/05 SUITE 7 » → « 26/05 SUITE »). Ordre d'insertion = du plus ancien au plus récent, empilement vers le bas du MARKER (chaque insertion remplace `MARKER` par `MARKER\n[segment]`). Retrait du marker en clôture. Antichronologie top-down vérifiée : suite 4 → suite 3 → suite 2 → suite → 25/05 → 24/05 suite 2 (existant) → ...

**Phase 2 — Trim JOURNAL.md (5 edits effectifs)** : T1 (25/05 suite 4, ~110 lignes) + T2 (25/05 suite 3, ~108 lignes) + **batch groupé T3+T4+T5** après relecture authentique du fichier (suite 2 + suite + 25/05 supprimées en un seul edit_file à 3 entrées, ~175 lignes) + T6 mise à jour préambule (« Sessions antérieures au 25/05 suite 5 ») + commentaire HTML final (mention des 3 vagues 25/05 suite 3 + 26/05 suite + 26/05 suite 4).

**Bonus** : correction du préambule de l'archive (dette « 25/05 SUITE 7 » → « 26/05 SUITE » + ajout 3e vague + titre Archive « sessions du 2026-05-19 au 2026-05-25 suite 4 »).

### Bilan tailles
- **JOURNAL.md** : 122 → **86 ko** (-36 ko, sous seuil 100 ko ✓)
- **JOURNAL-archive.md** : 119 → **158 ko** (+39 ko, cohérent avec le delta)

### Incident C14 — résolu en suivant la discipline
**T3 échec initial** : suppression de 25/05 suite 2 a échoué sur typo de transcription. Cause : dans l'oldText reconstitué de mémoire (après lecture précédente), j'avais écrit « Cette clarif **resoud** la tension » sans accent, alors que le fichier authentique contient « Cette clarif **résoud** la tension » avec é. Mismatch silencieux, edit_file rejeté.

**Résolution** : `read_text_file --tail 600` pour relire le contenu authentique. Identification de la typo. Reconstruction du oldText à partir du contenu MCP authentifié. Batch T3+T4+T5 groupé en un seul edit_file passé du premier coup après relecture.

**Leçon** : discipline C14 confirmée à 100 %. Ne jamais retranscrire un oldText de mémoire pour un anchor de plus de quelques lignes. Toujours recopier depuis la sortie d'un `read_text_file` récent. Quand le contenu à supprimer a déjà été inséré ailleurs (cas archivage), le contenu inséré peut contenir des typos introduites à l'insertion (cas vécu : « resoud » dans le segment inséré dans l'archive vs « résoud » dans le JOURNAL source).

**Séquelle assumée** : `JOURNAL-archive.md` contient désormais la typo « Cette clarif resoud » (sans accent) dans le segment 25/05 suite 2 archivé. Le JOURNAL source étant trim, plus de divergence à gérer. Acceptable comme dette mineure de transcription.

### Posture éditoriale actée
La section 6 de la synthèse globale **Ambition au-delà du référentiel** acte explicitement que le wiki dépasse délibérément le scope AA. Reformulation utilisateur en session : *« on peut faire plus que le scope des AA, mieux trop que pas assez »*. Les 3 fiches phase 1 sans critère AA central (securite-et-qualite = posture professionnelle, matrice-de-decision = outil pivot transverse, hub/index = méta-structure) illustrent cette ambition au-delà du référentiel — pas exception à justifier, choix éditorial assumé. Inscription dans le wiki via la synthèse globale.

### Convention C17 candidate — éprouvée empiriquement
**C17 candidate** : *patcher la flèche TODO après arbitrage utilisateur final, en fin de session*. Éprouvée empiriquement en fin de session courante : la flèche TODO du prompt projet était « Prochaine session = clôture méthodologique en 3 actes ». En fin de session, j'ai patché vers « Prochaine session = reprise rédaction phase 2 » (caracteriser-une-exigence prioritaire) selon l'arbitrage utilisateur sortant de la clôture. À confirmer sur 2-3 sessions avant promotion vers `conventions.md` § 8.

### Conventions éprouvées et acquises
- **C1-C6** (les 6 transverses) : promues vers §§ 1-2 (acte 1) après 3/3 épreuve réussie (gestion-de-projet → ecoconception → securite-et-qualite). Bannière § 7 retirée.
- **C15** (catégorie Hors scope, acquise 26/05 suite 2) : consolidée dans nouveau § 7 *Référentiel AA*.
- **C16** (1 fiche-tuto par critère EEE/info embarquée, acquise 26/05 suite 2) : consolidée dans nouveau § 7 *Référentiel AA*.
- **C14** (seuil MCP) : 2e épreuve formelle réussie sur le pattern MARKER + N segments (archivage 3e vague). 1 incident résolu en suivant la discipline.
- **C17 candidate** : patch flèche TODO post-arbitrage. À éprouver sur 2-3 sessions.

### Tailles fichiers en fin de session
- JOURNAL.md : 86 ko (sous seuil 100 ko ✓)
- JOURNAL-archive.md : 158 ko
- TODO.md : ~16 ko (rotation glissante respectée : 3 sessions Fait)
- conventions.md : ~16 ko (après ajout § 7 *Référentiel AA*)
- couverture-en-cours.md : ~12 ko (synthèse globale 8 sections)

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **3 décisions niveau D en attente hiérarchie** : catégorie Hors scope par délégation pour 3 critères design, statut des 4 critères MME effleurés sans fiche centrale, statut schema-cinematique wiki vs délégation MME.
- **C17 à éprouver** sur 2-3 sessions avant promotion vers `conventions.md` § 8.
- **Prochaine session** = reprise rédaction phase 2 (caracteriser-une-exigence prioritaire).
- **Commit + push** : workflow fin de session utilisateur.

---

## 2026-05-26 (suite 3) — Cartographie AA bouclée : passes B + A + écriture champ aa: dans 17 fronts matters

### Périmètre de session
Enchaînement des 4 sous-tâches du chantier cartographie AA en niveau A mécanique : (1) passe B accélérée sur 13 fiches restantes (12 fiches-notion + hub), (2) passe A par domaine (matrice critère × fiches), (3) amendement passe B sur integration-et-tests pour cohérence avec passe A, (4) écriture champ `aa:` dans 17 fronts matters. Bilan : couverture AA complète des 21 fiches phase 1, **36 C + 9 E + 4 HS + 8 NC sur 57 critères**. 3 décisions niveau D nouvelles, 2 fiches phase 2 nouvelles ajoutées au TODO.

### Passe B accélérée — 13 cartographies fiche-par-fiche
Lecture en aveugle + cartographie YAML pour les 13 fiches non encore traitées. **Un seul edit_file de ~22 ko payload pour les 13 cartographies, passe du premier coup**. Insights : quatuor CdCF (bete-a-cornes / fonction / pieuvre / cahier-des-charges-fonctionnel) se partage `RA-PROJET-C04-4` ; quatuor outils GP (gantt / jalons / retroplanning / wbs) se partage `RA-PROJET-C07-1/PROJ/2` ; matrice-de-decision = outil pivot transverse à 0 critère central ; hub/index = méta-structure pure ; schema-bloc-fonctionnel = seule fiche EEE phase 1.

### Passe A par domaine — cartographie inverse
Croisement des 21 cartographies pour produire la matrice critère × fiches par domaine. Légende C/E/HS/NC, règle de **statut dominant** (C > E > HS > NC). **Erreur initiale** : sommation C+E quand un critère est dans plusieurs fiches, 8 patches de correction appliqués (tableau global + bilans EEE/MME/PROJ + sous-liste NC + insight 3 + typo « critore » → « critère »).

**Couverture finale (57 critères)** :

| Domaine | C | E | HS | NC | Total |
|---|---|---|---|---|---|
| EEE | 5 | 2 | 0 | 3 | 10 |
| ESE | 5 | 0 | 0 | 0 | 5 |
| MEO | 6 | 0 | 0 | 0 | 6 |
| MME | 3 | 6 | 0 | 2 | 11 |
| PROJ | 17¹ | 1 | 4 | 3 | 25 |
| **Total** | **36** | **9** | **4** | **8** | **57** |

¹ Y compris amendement C03-3/3 (sans : 16 C / 4 NC, total global 35 C).

**Pourcentages** : 63 % C / 16 % E / 7 % HS / 14 % NC.

**8 NC ventilés** : 2 trous déjà adressés au TODO (analyse-de-schema-electronique pour EEE-C03-3/1, microcontroleur+firmware pour /5) + 3 trous à adresser par fiches nouvelles (simulation-electronique pour EEE-C03-3/3+/4, schema-cinematique pour MME-C02-1/5) + 3 NC à interroger hiérarchie (design délégable : PROJ-C03-3/1 sketchs + /2 prise en compte design + MME-C03-1/1 outils designers).

**5 insights structurants** :
1. ESE et MEO entièrement couverts phase 1 (0 NC). Cohérent nature transverse.
2. EEE et MME ont trous structurés, tous adressés par phase 2.
3. PROJ = domaine majeur (44 %), couverture forte hors design délégable.
4. Convention C16 validée empiriquement : 5 critères EEE phase 2 chacun adressé par 1 à 4 fiches.
5. 3 fiches phase 1 sans critère AA central (securite-et-qualite, matrice-de-decision, hub/index) pour 3 raisons distinctes — cadre AA pas le seul critère de pertinence.

### Amendement passe B — integration-et-tests
Passe A identifie un manquement passe B : integration-et-tests couvre matériellement `RA-PROJET-C03-3/PROJ/3` (réaliser structure mécanique avec élec et énergie) via étapes 1+2, non explicité en passe B initiale. **Patch en 2 edits sur couverture-en-cours.md** : ajout en Couvert + bilan 7 → 8 C, total 13 → 14. Discipline confirmée : la passe A vérifie la passe B.

### Écriture champ `aa:` dans 17 fronts matters
Inventaire : 4 fiches skip légitimes à `aa: []` (sans Couvert : securite-et-qualite, afnor-nfx50-151, matrice-de-decision, hub/index) ; 17 fiches à patcher dont 1 cas spécial (schema-bloc-fonctionnel : ancien format `AA-EEE-C02-CFE1-01` → 2 codes `RA-PROJET-C04-4/PROJ/4` et `/6`).

**17 edit_file séquentiels en niveau A mécanique, tous passés du premier coup, 0 échec C14, 0 typo de transcription**. Discipline anchor court `aa: []` + lecture préalable confirmée robuste sur YAML standard.

Trames patchées (7) : specification-technique (5 codes), concept (7), preuve-de-concept (5), dossier-technique (10), integration-et-tests (8), gestion-de-projet (9), ecoconception (4).
Fiches-notion patchées (10) : bete-a-cornes (1), cahier-des-charges-fonctionnel (3), fonction (1), pieuvre (2), gantt (1), jalons (1), retroplanning (1), wbs (1), matrice-de-risques (1), schema-bloc-fonctionnel (1→2).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Promotion C1-C6, C15, C16** : actes à froid en attente, niveau C session ultérieure.
- **Synthèse globale dans `couverture-en-cours.md`** : à conduire session ultérieure, niveau B/C, ~30-60 min.
- **3 décisions niveau D nouvelles** : catégorie « Hors scope par délégation » à instaurer, statut des 4 critères MME effleurés sans fiche centrale, statut schema-cinematique wiki ou délégation.
- **Commit/push** : rattrapage 10+ sessions cumulées + session courante.

### État JOURNAL.md
~96 ko avant cette entrée. Après ajout : estimation ~105-110 ko, **dépasse le seuil 100 ko**. **Archivage à proposer en session ultérieure** : sessions 25/05 suite 4 et antérieures peuvent être archivées dans `JOURNAL-archive.md` (pattern MARKER + N segments, méthode éprouvée 26/05 suite). À ne pas faire dans cette session pour limiter le coût.

---

## 2026-05-25 (suite 8) — Dossier technique : approfondissement complet + leçon méthodo MCP seuil 30 ko

### Périmètre de session
Approfondissement complet de `dossier-technique.md` (phase 4 du V) sur session de démarrage PC perso. Tâche annexe initiale (archivage JOURNAL 22-24/05) résolue partiellement via MCP (résorption duplication 24/05 suite 2) + report en finalisation manuelle pour le reste. Surprise structurante : **étape 3 trouvée pré-rédigée** dans le fichier au moment d'attaquer la rédaction de fond — hypothèse plus probable : autre instance Claude Desktop lancée en parallèle (brief utilisateur multi-appareil §2). Cohérence vérifiée et préservée.

### Cadrage en début de session — 5 questions tranchées en bloc
1. **Fil rouge local** : aligner sur PoC final (articulation **usinée alu 6061** suite à marge négative en PoC), pas l'ajustement local PLA 60→80 % du squelette. Cohérence inter-fiches PoC ↔ dossier-technique recherchée. Refonte des 5 `[!example]`.
2. **Étape pivot = étape 4** (multi-validation à 3 interlocuteurs). Rythme H4 : 2/2/3/3/2 (étape 5 = cas inédit sortie matérielle, ni clôture documentaire ni étape économe).
3. **Convention 10 (matrice incarnée) — épreuve 3/3** : 4 contextes ciblés (ajustements PoC→dossier étape 1 / BOM matricielle étape 3 / 3 validateurs matriciels étape 4 / structure 3 bons commande étape 5).
4. **Convention 13 (relire amont) — 1ʳᵉ épreuve formelle** : passe rapide sur Posture + Objectif + Conclusion avant chaque section avale.
5. **Découpage** : session complète calque PoC suite 7, **niveau A en autonomie accordé par l'utilisateur**.

**Info ajoutée par l'utilisateur en cours** : les commandes doivent être réalisées sur une liste de **fournisseurs partenaires** (catalogue restreint, pas de libre choix marché). Intégrée comme contrainte structurante en étapes 3 et 5.

### Archivage JOURNAL 22-24/05 — résolu partiellement
- Tentative `write_file` ~50 ko payload pour reconstruire JOURNAL : **échec silencieux** (taille fichier inchangée, date modification inchangée). 2ᵉ occurrence du symptôme après 25/05 suite 3.
- Décision : abandon de l'approche massive. Action MCP minimale + procédure manuelle pour le reste.
- **Action MCP** : suppression session 24/05 suite 2 du JOURNAL (résorption duplication avec archive). JOURNAL passé de 144 → 135 ko (−8,8 ko). Préambule patché pour pointer vers la finalisation manuelle.
- **Action documentaire** : ajout au TODO d'une tâche *Finaliser archivage 22-24/05* en *Manipulations manuelles* (procédure Obsidian détaillée), nouvelle convention 14 capitalisée dans `conventions.md` § 7.

### Convention 14 acquise — Seuil pratique MCP write_file/edit_file ≈ 30 ko payload
Toute opération MCP `write_file` ou `edit_file` avec payload > 30 ko a une probabilité non négligeable d'échouer silencieusement (sans message d'erreur). Symptôme : tool call qui semble réussir mais `get_file_info` montre fichier inchangé. **Discipline acquise** : (a) `get_file_info` systématique après tout write/edit lourd, (b) opérations massives en édition manuelle Obsidian + Git ou script Node CLI hors MCP.

### Phase 1 — Alignement v2.1 du squelette (11 patches batch)
5× `[!example] Sur le bras 3 axes` → `Exemple : projet bras 3 axes` (désambiguïsation par première ligne du corps), 5× `[!livrable] Livrable de l'étape N` → `Livrable N/5 — Dossier technique` (et `Livrables 3/5` pluriel pour étape 3), 1× `[!warning] Trois interlocuteurs distincts, trois disponibilités` → titre fixe `Attention` + phrase-clé en gras. Diff propre.

### Phase 2 — Étape 1 *Intégrer les retours de la preuve de concept* rédigée
2 paragraphes intro (pont depuis PoC avec 3 issues nominales, anti-pattern « rouvrir CAO directement »), 2 H4 économes :
- H4-1 « Du compte rendu PoC aux ajustements à intégrer » : 3 familles d'ajustements (composants confirmés / recalés / contraintes nouvelles) en liste numérotée + tip « Une page de synthèse, pas une réunion orale ».
- H4-2 « Propager les ajustements aux trois disciplines » : effet inter-discipline, exemples concrets + warning « Repartir des plans du concept revient à effacer la PoC ».

`[!example]` refondu sur articulation usinée alu 6061 : 3 familles d'ajustements instanciées. Wiki-links sémés : `[[microcontroleur]]`, `[[pla]]`, `[[usinage]]`, `[[retroplanning]]`, `[[ecoconception]]`.

### Phase 3 — Étape 2 *Détailler les plans par discipline* rédigée
2 paragraphes intro (transition étape 1, niveau précision supérieur, retour grille disciplinaire vs PoC), 2 H4 économes :
- H4-1 « Travailler en parallèle par discipline » : 3 disciplines en liste (élec/méca/info), outils typiques cités + tip « Reprenez le schéma bloc fonctionnel comme carte d'interfaces ».
- H4-2 « Vérifier la cohérence inter-disciplines avant les validateurs externes » : 3 familles d'interfaces (physiques / électriques / logicielles) en liste numérotée + warning « Une spécification d'interface n'est pas une spécification interne ».

`[!example]` instancié : 3 disciplines + revue interne tracée (2 conflits arbitrés sans rétroaction concept). Wiki-links nouveaux : `[[schema-bloc-fonctionnel]]`, `[[cahier-des-charges-fonctionnel|CdCF]]`, `[[matrice-de-decision]]`, `[[impression-3d]]`.

### Phase 4 — Étape 3 *Consolider la BOM et chiffrer l'environnement* : pré-rédigée (autre Claude)
Étape 3 trouvée déjà rédigée en pleine qualité au moment de l'attaquer. Hypothèse autre instance Claude lancée en parallèle (brief multi-appareil). Contenu trouvé : 3 H4 dense (BOM finale chiffrée / Quantifier l'écoconception / Planning + budget) + tip + warning + example matriciel avec **BOM 7 lignes 6 colonnes** (213,20 € HT sous enveloppe 250 €) + ACV simplifiée (steppers ~52 %, alu+usinage ~28 %) + livrable 3 items. Cohérence vérifiée avec mes étapes 1-2-4-5.

### Phase 5 — Étape 4 *Rédiger et faire valider* (PIVOT) rédigée
2 paragraphes intro (pont depuis étape 3, multi-validation à 3+1 comme miniature industrielle), 3 H4 dense :
- H4-1 « Préparer la multi-validation » : sous-dossier ciblé par validateur, 3 choses à figer.
- H4-2 « Mener les trois validations disciplinaires » : 3 RDV séparés 1-2 semaines, ordre logique.
- H4-3 « Faire valider l'ensemble en revue globale » : encadrant vérifie cohérence inter-parties + qualité argumentation + lisibilité tiers.

Warning existant + tip nouveau « Ouvrez chaque RDV par les livrables-clés ». `[!example]` refondu : **tableau matriciel 3 validateurs × 5 colonnes** — 3ᵉ contexte fort de convention 10. Wiki-links de la table échappés avec `\|` pour pipe.

### Phase 6 — Étape 5 *Émettre les commandes* rédigée (cas inédit)
2 paragraphes intro (point de non-retour matériel, rôle équipe vs responsable projet), 2 H4 :
- H4-1 « Préparer les bons de commande » : 1 bon par fournisseur partenaire, 4 contenus attendus.
- H4-2 « Émettre et tracer » : émission par resp projet, traçabilité, vérification conformité à réception.

Warning nouveau « Émettre avant la validation d'ensemble est un échec d'étape ». Tip nouveau « Suivi par tableau partagé ». `[!example]` structuré en 3 bons de commande (partenaire élec / matière / fablab-atelier) — 4ᵉ contexte de convention 10.

### Phase 7 — Pièges + Équipe refondus
- **Pièges fréquents** : refonte de 5 puces du squelette en **11 entrées format gras court + explication** (calque concept 8 / PoC 11). ~5/11 pièges émergés a posteriori des étapes 2-5 (≈ 45 %, ratio aligné PoC) — éprouve C12.
- **Équipe** : 4 paragraphes thématiques (Interfaces métiers / Gestion de projet / Écoconception / Sécurité et qualité), calque concept/PoC. Wiki-links sémés : `[[gestion-de-projet]]`, `[[retroplanning]]`, `[[acv-simplifiee]]`, `[[securite-et-qualite]]`.

### Phase 8 — Cohérence finale 4 passes : **0 patch sur les 4 passes** (pattern PoC confirmé)
- Passe 1 (terminologie) : 0 patch.
- Passe 2 (fil rouge bras 3 axes) : 0 patch — articulation usinée alu 6061 cohérente sur les 5 étapes (lead time 3 semaines / 15 j, masse +35 %, ISO 2768 m + Ra ≤ 1,6).
- Passe 3 (ponts inter-étapes) : 0 patch — chaque intro d'étape ouvre par un pont rétro-arrière propre.
- Passe 4 (wiki-links exhaustif) : 0 patch — convention 6 tenue au fil. **2ᵉ confirmation après PoC suite 7** que la discipline est acquise quand internalisée.

### Round 2 utilisateur — 2 points tranchés
1. **Cohérence PCB-BOM** : tranché par information utilisateur — PCB monoface gravé en interne sur **machine de gravure à l'anglaise** de l'école. Donc PCB jamais commandé, pas de ligne BOM nécessaire, **fiche-tuto PCB à créer** avec mention spécifique. 3 patches en cascade appliqués : étape 2 H4 (production interne possible), étape 2 example (5×7 cm monoface gravé en interne), étape 5 example (PCB non commandé + remplacement par 3 condensateurs 100 nF céramique pour le découplage + chiffre ajusté ≈ 98 € HT au lieu de 122 €).
2. **Cohérence chiffrée étape 5** : ajustée automatiquement par patch 1. Désormais 98 + 21 + 95 = 214 € HT cohérent avec BOM étape 3 (213,20 €) + connecteur coudé étape 4 (+1,80 €) = 215 € HT.

### Conventions éprouvées sur dossier-technique
- **Convention 10 (matrice incarnée)** : **épreuve 3/3 réussie**, 4 contextes incarnés. Cumul total 8+ contextes (4 sur concept + 4 sur PoC + 4 sur dossier-tech). **Promotion vers § 2 envisageable** (à acter à froid).
- **Convention 11 (rythme H4)** : promotion § 6 déjà actée en suite 7. Cas inédit nouveau éprouvé sur étape 5 (2 H4 sortie matérielle, ni clôture ni économe). Pattern stable.
- **Convention 12 (Pièges a posteriori)** : **épreuve 3/3 réussie** (concept 37 %, PoC 45 %, dossier-tech 45 %). **Promotion vers § 6 envisageable**.
- **Convention 13 (relire amont)** : **1ʳᵉ épreuve formelle réussie** — aucun round 2 sur sections amont, fiche cohérente. À éprouver sur `integration-et-tests` (5ᵉ trame) avant promotion.
- **Convention 14 (seuil pratique MCP ~30 ko)** : nouvelle, acquise et capitalisée § 7.

### Nouvelles dépendances posées
- Fiche-tuto `[[pcb]]` à créer avec mention **machine de gravure à l'anglaise + monoface en interne école** (procédé spécifique projet école, pas une commande). Ajout BACKLOG.

### Décisions reportées
- Toutes celles des sessions précédentes (sauf cohérence inter-fiches concept↔PoC partiellement levée via fil rouge articulation usinée traversant les 5 étapes dossier-tech).
- Promotion C10 vers § 2 : à acter à froid.
- Promotion C12 vers § 6 : à acter à froid.
- C13 à éprouver sur `integration-et-tests`.
- Finalisation archivage 22-24/05 manuel à faire à la maison.

---

## 2026-05-25 (suite 7) — PoC : approfondissement v1 complet

### Périmètre de session
1ère session d'approfondissement de `preuve-de-concept.md` (squelette du 22/05). Calque méthodo 25/05 suite 4-5-6 sur `concept.md`. Geste de cette session : appliquer le mode d'application proposé pour la convention 6 (passe dédiée en sortie de fiche) et éprouver les conventions 10 / 11 / 12 sur la trame du V suivante. PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 4 questions tranchées en bloc (niveau C)
1. **Découpage en 5 étapes** (pas 4 du squelette) : 1) Définir / 2) Préparer / 3) Mener / 4) Analyser et trancher (pivot) / 5) Rédiger et faire valider (clôture documentaire). Rythme H4 selon convention 11 : 2/2/2/3/3.
2. **Étape pivot = 4** (Analyser et trancher), clôture documentaire = étape 5. Justification : le pivot du V se joue au moment de la décision (go / ajustement / retour amont), pas au moment de la mesure.
3. **Fil rouge local PoC = articulation 3D imprimée PLA 60 %** (incertitude locale cohérente avec le fil rouge global, pas alignement strict sur I1/I2 sortis de l'étape 4 concept). Décision tranchée : le callout exemple sert d'incarnation locale, pas de continuité narrative inter-fiches stricte. À surveiller si la cohérence inter-fiches devient un fil rouge structurant.
4. **Boucle rétroactive marge négative incarnée (α)** : la preuve articulation 3D conclut marge négative → retour amont structurant vers concept étape 3 (renégociation à 3 disciplines). Matérialisée dans `[!example]` étape 4 + closure dans `[!example]` étape 5 (revue PoC validée sous conditions après reprise concept aboutie sur articulation usinée).

### Phase 1 — Alignement v2.1 du squelette + restructuration 4→5 étapes (9 patches en batch)
Niveau B annoncé. 3× `[!example]` titre fixe « Exemple : projet bras 3 axes » ; 3× `[!livrable]` titre format « Livrable N/5 — Preuve de concept » ; 1× `[!warning]` étape 2 titre fixe Attention + phrase-clé gras ; 1× renommage étape 3 (« Mener les preuves » → « Mener les essais ») ; 1× refonte massive étape 4 originale → étape 4 (placeholder pivot avec 3 sorties + warning + example + livrable) + nouvelle étape 5 (clôture documentaire, placeholders à rédiger).

### Phase 2 — Étape 1 *Définir chaque preuve* (1 patch)
Niveau B annoncé puis niveau A demandé par l'utilisateur pour la suite. Structure 2 H4 : *D'une incertitude à un énoncé testable* / *Le triplet hypothèse / critère / protocole*. `[!warning]` Un énoncé non écrit n'est pas un énoncé. `[!tip]` Formuler le critère en miroir d'une exigence chiffrée du CdCF. `[!example]` enrichi (triplet posé + revue encadrant traçée 3 corrections demandées). 1 pitié méthodo dryRun-rattrapée (1ère tentative astérisques parasites + duplication `[!livrable]`).

**Round 2 utilisateur — 1 correction** : doublon « on a le matos, on monte, on verra ce que ça donne » présent dans Posture amont ET dans H4-1 étape 1. Patch correctif appliqué (refonte du paragraphe : 3 conséquences en miroir des 3 éléments du triplet — sans hypothèse / sans critère / sans protocole). **Leçon méthodo : extension de la leçon ±2 phrases (25/05 suite 6)** — relire les sections amont de la fiche elle-même (Posture, Objectif) avant de rédiger une section avale, même quand elles ont été rédigées en session antérieure. Convention candidate à pousser en § 7 conventions.

### Phase 3 — Étape 2 *Préparer les moyens* (1 patch, niveau A)
2 H4 économes : *Du protocole aux ressources* / *Trois sources, dans l'ordre*. `[!warning]` Pas d'achat à titre personnel (conservé). `[!tip]` Demander tôt le stock divers. `[!example]` enrichi liste à puces des 3 sources, rattachement traçable + lien rétroactif vers correction étape 1 (couple appliqué à la balance + pied à coulisse).

### Phase 4 — Étape 3 *Mener les essais par incertitude* (1 patch, niveau A)
2 H4 économes : *Monter le banc* (caractérisation préalable) / *Exécuter et tracer les mesures*. `[!warning]` Caractériser le banc avant de mesurer. `[!tip]` Noter les anomalies, pas seulement les valeurs. `[!example]` enrichi : caractérisation banc + relevés 5 points 1000 cycles montrant dépassement critère 0,5° entre 480-550 cycles (profil sur 3 articulations).

### Phase 5 — Étape 4 *Analyser et trancher* (PIVOT, 1 patch, niveau A)
3 H4 dense (convention 11 éprouvée une 2ᵉ fois) : *Confronter au critère* / *Synchroniser entre preuves* / *Statuer*. 3 sorties nominales numérotées : Validé / Ajustement local / Retour amont structurant + mises à jour amont dans la même séance ([[matrice-de-risques|matrice de risques]] + éco + matrices décision concept). `[!warning]` Une preuve non concluante n'est pas un échec. `[!tip]` Synchroniser avant de statuer. `[!example]` enrichi avec tableau de statut (incarnation α) + décision traçée retour concept étape 3 + mises à jour matrice de risques + écoconception révisée (PLA 60 % défavorable).

### Phase 6 — Étape 5 *Rédiger et faire valider* (CLÔTURE DOCUMENTAIRE, 1 patch, niveau A)
3 H4 calque concept étape 5 (convention 11 sous-règle clôture documentaire éprouvée 2/2) : *Structurer le rapport* / *Rédiger chaque section* / *Faire valider en revue PoC*. TdM type 5 sections numérotée. 4 issues nominales calque concept étape 5 (sans réserve / sous conditions / reprise locale / rétroaction amont). `[!warning]` Compiler n'est pas rédiger. `[!tip]` Faire la revue à blanc en équipe. `[!example]` avec TdM type instanciée sur cas bras 3 axes + revue PoC traçée *validé sous conditions* après reprise concept aboutie (articulation usinée).

### Phase 7 — Pièges + Équipe (1 patch)
**Pièges fréquents** : refonte 6 puces simples → 11 entrées format gras court + explication (convention 12 confirmée). **5/11 pièges issus a posteriori des étapes 3-4-5 (~45 %)**, supérieur à concept (3/8 ≈ 37 %) — indicateur que la convention 12 généralise.
**Pendant cette phase, côté équipe** : 4 paragraphes thématiques (Interfaces métiers / Gestion de projet / Écoconception / Sécurité et qualité), calque concept.

### Phase 8 — Cohérence finale d'ensemble (4 passes calque concept 25/05 suite 6, 1 batch de 3 patches)
- **Passe 1 (terminologie)** : 2 corrections (« troisième étape » → « troisième phase » intro ; typo « enchâine » → « enchaîne » étape 3).
- **Passe 2 (fil rouge bras 3 axes)** : 1 correction (« section 5 du dossier concept » ambigu en étape 5 → « bilan écoconception du dossier concept »).
- **Passe 3 (ponts inter-étapes)** : 0 patch. Pattern stylistique déjà internalisé (annonces aval N→N+1 portées par intro étape suivante, calque concept).
- **Passe 4 (wiki-links / popovers)** : 0 patch. **Résultat majeur** : la convention 6 a été appliquée correctement au fil de la rédaction sur PoC (vs 74 % des patches concentrés en passe finale sur concept). Audit final n'a révélé aucun oubli significatif. **Confirme partiellement** la leçon méthodo 25/05 suite 6 : la convention 6 est applicable au fil quand on a la discipline acquise, la passe dédiée devient plutôt un filet de sécurité.

### Phase 9 — Round 2 utilisateur sur les wiki-links
Demande utilisateur niveau A : ajouter wiki-links sur 4 outils tuto (multimètre, oscilloscope, alimentation stabilisée, Arduino) et 2 instruments notion (pied à coulisse, comparateur). 6 nouvelles cibles de wiki-links posées (1 batch de 7 patches sur 6 contextes : étape 2 H4-1, étape 2 H4-2, étape 2 example, étape 3 warning, étape 3 example, étape 5 example). Convention 6 (1ère occurrence par contexte) respectée.

**Correction factuelle process fablab** : reformulation étape 2 H4-2 et example pour refléter la réalité école — l'équipe ne reçoit pas de filament en propre, elle transmet des fichiers STL au responsable fablab impression 3D qui prend en charge l'impression. Information de cadrage importante pour la PoC, transposable à d'autres fiches mentionnant l'impression 3D à surveiller.

**Mini-patch final** : disjonction `[[microcontroleur|microcontrôleurs]]` et `[[arduino|Arduino]]` dans l'énumération Stock standard (après remarque utilisateur). **Plan long terme à matérialiser** : la fiche `microcontroleur` deviendra une page d'aiguillage vers tutoriels par famille (STM32, ESP32, MicroPython, Arduino, Teensy, etc.). Poussé au BACKLOG.

### État de `preuve-de-concept.md` en fin de session
- Démarche complète : 5 étapes rédigées et alignées sur les 4 dimensions auditées.
- Sections transverses : *Pièges fréquents* (11 entrées) et *Pendant cette phase, côté équipe* (4 paragraphes thématiques) rédigées.
- Front matter + Posture + Objectif + Conclusion + Voir aussi : posés et alignés.
- Wiki-links : 6 nouvelles cibles ajoutées au réseau (multimetre / oscilloscope / alimentation-stabilisee / arduino / pied-a-coulisse / comparateur).
- **Fiche complète et alignée v2.1. Phase 3 du cycle en V close.**

### Leçons méthodo de la session
- **Leçon 1 (extension leçon ±2 phrases du 25/05 suite 6)** : relire les sections amont de la fiche (Posture, Objectif) avant de rédiger une section avale, même quand elles ont été rédigées en session antérieure. Coût 1 round 2 sur PoC étape 1. Convention candidate → `conventions.md` § 7.
- **Leçon 2 (confirmation partielle du 25/05 suite 6)** : la convention 6 (wiki-link 1ère occurrence par section/sous-section/callout) s'applique correctement au fil quand la discipline est acquise. Sur PoC, 0 patch en passe finale (vs 74 % sur concept). La passe dédiée en sortie de fiche devient un filet de sécurité, pas le mode principal d'application.
- **Leçon 3 (généralité convention 12)** : la section *Pièges fréquents* se nourrit a posteriori des étapes aval à ~45 % sur PoC (5/11), supérieur au ratio concept (3/8). Convention 12 confirmée, promotion possible vers § 6.

### État des conventions à éprouver — sortie session
- **Convention 6** (wiki-link 1ère occurrence par contexte) : confirmée en audit final exhaustif PoC. Mode d'application affiné (au fil + filet passe dédiée). MAJ note méthodo dans `conventions.md` § 7.
- **Convention 10** (matrice incarnée dans `[!example]`) : éprouvée sur **4 contextes PoC** (liste à puces 3 sources étape 2, relevés 5 points étape 3, tableau de statut étape 4, TdM type instanciée étape 5). Indicateur de généralité renforcé. Promotion possible vers § 2 si confirmée sur dossier-technique.
- **Convention 11** (rythme H4 selon densité d'étape) : éprouvée 2/2 trames consécutives (concept + PoC). Règle tripartite validée : pivot → 3 H4 / hors pivot non-clôture → 2 H4 / clôture documentaire → 3 H4 calque. **Promotion proposée** vers `conventions.md` § 6 (Structure des fiches-trame).
- **Convention 12** (Pièges nourris a posteriori) : confirmée (~45 % sur PoC vs ~37 % sur concept). Promotion possible vers § 6 si confirmée sur dossier-technique.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Cohérence inter-fiches concept ↔ PoC** : la rétroaction marge négative incarnée dans PoC étape 4 renvoie vers concept étape 3, et la rétroaction articulation usinée revient dans PoC étape 5. Ces ponts sont posés côté PoC mais pas instanciés côté concept (l'`[!example]` concept étape 3 connaissait déjà ses 2 conflits propres). Question reportée à une session dédiée « cohérence inter-fiches » après rendu 2-3 trames supplémentaires.
- **`microcontroleur` page d'aiguillage par famille** : posé au BACKLOG. À décider quand on tackle la fiche notion.
- **6 nouvelles fiches notion/tuto au réseau** (multimetre, oscilloscope, alimentation-stabilisee, arduino, pied-a-coulisse, comparateur) : poussées au BACKLOG.
- **Prochaine session** : objectif à discuter en début de session suivante (cf. propositions ci-dessous).

---

## 2026-05-25 (suite 6) — Concept : cohérence finale d'ensemble (4 passes de relecture critique)

### Périmètre de session
Session de clôture phase 2 sur `concept.md`. Démarche complète rédigée (5 étapes + Pièges 8 entrées + Équipe 4 paragraphes, faits 25/05 suite 4 et suite 5). Geste de cette session : relecture critique progressive de l'ensemble sur 4 dimensions, calque méthodo 24/05 suite 2 sur spec-tech (11 patches en 3 passes successives auto-critiques). Session courte attendue, **résultat 27 patches** sur les 4 passes — plus volumineux que prévu en raison de la passe 4 (wiki-links) qui concentre 20 patches. PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 3 arbitrages tranchés en bloc (niveau C)
1. **Ordre des 4 passes** : terminologie → fil rouge → ponts inter-étapes → wiki-links. Justification : terminologie mécanique (grep) dégage le bruit avant les passes sémantiques ; le fil rouge nourrit la décision FC démontabilité qui peut créer des ponts à ajuster ; les wiki-links arrivent en dernier sur texte stabilisé.
2. **Seuil d'arrêt** : 1 passe sans nouvel écart par dimension, max 2 passes par dimension. Plus strict que spec-tech 24/05 suite 2 (qui a tourné jusqu'à 3 passes), parce que `concept.md` a déjà bénéficié de 5 round 2 sans correction.
3. **Profondeur audit wiki-links** : exhaustif sur les 5 étapes (et pas Pièges/Équipe/Conclusion qui ont leur propre logique). Audit ciblé mais complet.

### Passe 1 — Terminologie (5 + 1 = 6 patches)
Grep sur les 6 termes du brief : pas de « point dur », pas de « dérisquer », pas de « soutenance intermédiaire », pas d'extension `.md`, `incertitude(s)` employé au bon endroit partout, `semaine n°X` cohérent (n°5 revue de concept, n°6 engagement PoC).

**5 écarts initiaux** :
1. Posture : « Cette **étape** ne demande pas… » → « Cette **phase** » (désigne la phase concept entière)
2. Posture : « la première **étape** où l'écoconception devient un critère » → « première **phase** »
3. Section Équipe / Écoconception : « Le concept est l'**étape** où l'écoconception devient un critère d'arbitrage » → « la **phase** »
4. Étape 5 intro : « elle **agrège** » → verbe isolé en gras (conflit convention 25/05) → « elle **agrège les quatre livrables précédents** »
5. Étape 5 H4-3 : « La revue **valide** le dossier » → verbe isolé en gras → « La revue **valide sans réserve** » (homogénéise les 4 issues nominales : sans réserve / sous conditions / demande une reprise / rétroaction CdCF)

**1 patch correctif effet de bord** : le patch 4 (« agrège les quatre livrables précédents ») a introduit un doublon avec la phrase suivante (« Les quatre livrables précédents… sont assemblés… »). Correction par fusion des 2 phrases : « elle agrège les quatre livrables précédents (décomposition, matrices, architecture, pré-dim et incertitudes) dans un dossier concept unique ».

### Passe 2 — Fil rouge bras 3 axes (1 patch)
Reconstitution de la chaîne d'éléments instanciés étape par étape. Chaînage propre vérifié sur 4 axes (solutions stepper+driver retenues étape 2 → reprises étape 3 → mesurées étape 4 → consolidées étape 5 ; I1/I2 étape 4 rattachées F0/F1 → reprises section 5 dossier étape 5 ; compromis offset court étape 3 → architecture étape 5 ; 2 conflits étape 3 → tableau conflits arbitrés étape 5).

**Point A — FC démontabilité (point du brief)** : l'étape 5 mentionnait « ajout d'une FC liée à la démontabilité (rétroaction CdCF signalée et tracée en cours de phase) », mais l'étape 1 ne l'instanciait pas (le `[!warning]` reste générique, l'`[!example]` étape 1 ne racontait aucune rétroaction). Option (a) retenue : instanciation rétroactive dans l'`[!example]` étape 1, paragraphe ajouté (~4 lignes) : « Pendant cette décomposition, l'équipe identifie qu'aucune fonction de service du CdCF ne porte explicitement le remplacement d'un moteur en cas de panne… une FC liée à la démontabilité est ajoutée au CdCF avec son numéro de version mis à jour. » Wiki-links re-déclenchés selon convention 6 ([[cahier-des-charges-fonctionnel|CdCF]] et [[FC]]). Cohérence narrative 1→5 désormais propre.

**Point B — réserve étape 2 → étape 3 vs annonce étape 4 (mineur)** : l'`[!example]` étape 2 dit « réserve à lever à l'étape 4 sur la consommation au maintien » mais l'étape 3 débloque concrètement via le compromis lookup table. Inconsistance narrative ténue, lecture continue tient. Laissé tel quel.

### Passe 3 — Ponts inter-étapes (0 patch)
Vérification des renvois explicites dans les deux sens (annonce N→N+1 et référence N+1→N). Tous les ponts amont OK (étape 3 → étape 2 matrices d'origine ; étape 4 → étape 3 retour si marge négative ; étape 5 → étapes 1-4 agrégation ; Conclusion → preuve de concept).

**Pattern stylistique stable détecté** : les annonces aval N→N+1 sont systématiquement portées par l'**intro de l'étape suivante**, jamais par la sortie de l'étape courante. Cohérent sur les 4 transitions. Choix de fluidité narrative défendable.

**Saut étape 3→5** (sortie étape 3 mentionne étape 5 « le dossier concept rédigé à l'étape 5 pourra s'appuyer sur cette traçabilité ») : déroge légèrement au pattern mais sémantiquement justifié (la traçabilité des matrices d'origine sert effectivement la section 3 du dossier étape 5). Option (a) retenue, laissé tel quel.

### Passe 4 — Wiki-links / popovers (20 patches en batch)
Audit exhaustif strict (option α) de la convention 6 (wiki-link à la 1ère occurrence par section/sous-section/callout). Profondeur sur les 5 étapes uniquement.

**1 doublon détecté** : étape 2 H4 « Construire la matrice et arbitrer » → `[[ecoconception|écoconception]]` wiki-linkée 3 fois dans le même H4 (1 puce critère + 2 paragraphes suivants). Wiki-links 2 et 3 retirés.

**19 oublis détectés** (1ère occurrence dans nouveau contexte sans wiki-link) :
- `[!warning]` étape 1 H4-1 : [[cahier-des-charges-fonctionnel|CdCF]]
- `[!example]` étape 1 ¶2 : [[fast|FAST]]
- Étape 2 H4-2 puce Encombrement : [[pieuvre]] + [[cahier-des-charges-fonctionnel|CdCF]]
- `[!example]` étape 2 tableau : [[ecoconception|Écoconception]]
- Étape 3 H4-3 levier 1 : [[matrice-de-decision|matrice de décision]]
- Étape 3 H4-3 levier 3 : [[cahier-des-charges-fonctionnel|CdCF]]
- `[!example]` étape 3 : [[usinage]] + [[impression-3d|impression 3D]]
- `[!warning]` étape 4 : [[preuve-de-concept|preuve de concept]]
- `[!tip]` étape 4 : [[preuve-de-concept|preuve de concept]]
- `[!example]` étape 4 : [[cahier-des-charges-fonctionnel|CdCF]]
- Étape 5 intro : [[specification-technique|spécification technique]]
- Étape 5 H4-2 « Rédiger » : [[cahier-des-charges-fonctionnel|CdCF]]
- Étape 5 H4-3 « Faire valider » : [[preuve-de-concept|preuve de concept]]
- `[!example]` étape 5 : [[cahier-des-charges-fonctionnel|CdCF]], [[FC]], [[fast|FAST]], [[ecoconception|écoconception]], [[schema-bloc-fonctionnel|schéma bloc]], [[preuve-de-concept|preuve de concept]]

20 patches passés en un seul appel `filesystem:edit_file` (array d'edits, méthodo calque 25/05 suite 4). Diff propre.

Cohérence aliases FP/FS/FC vérifiée : FC wiki-linké à 4 endroits (warning étape 1, puce étape 2 H4-2, `[!example]` étape 1 par patch passe 2, `[!example]` étape 5 par patch passe 4), FP wiki-linké 1 fois (warning étape 1), FS jamais mentionné. Aucun écart sur cet axe.

### Round 2 utilisateur — validé sans correction
6ᵉ round 2 successif validé sans correction sur `concept.md` depuis le 25/05 suite 4 (étapes 1+2 / étape 3 / étape 4 / étape 5 / Pièges+Équipe / cohérence finale 4 passes). Pattern de régularité maintenu. Signal renforcé : les conventions sont désormais internalisées dans la rédaction, mais la convention 6 fait exception (cf. leçon méthodo ci-dessous).

### Leçon méthodo 1 — relire ±2 phrases avant de proposer une reformulation
Le patch 4 de la passe 1 (verbe isolé « agrège » → morceau de phrase « agrège les quatre livrables précédents ») a introduit un doublon stylistique avec la phrase suivante (« Les quatre livrables précédents sont assemblés… »). Cause : reformulation proposée sans relecture du contexte aval. Discipline acquise : pour tout patch de gras / reformulation, lire ±2 phrases avant de figer la proposition. Coût : 1 patch correctif supplémentaire. Surface d'application : toutes les passes de relecture critique où Claude propose une reformulation locale.

### Leçon méthodo 2 — convention 6 plus efficace en passe dédiée qu'en continu
La passe 4 a généré 20 patches sur 27 de la session (74 %). Signal fort : la convention 6 (wiki-link à la 1ère occurrence par section/sous-section/callout) n'avait pas été appliquée stricte au fur et à mesure de la rédaction des étapes 1-5 (faits 25/05 suite 4 et suite 5), alors qu'elle est en éprouvage depuis 25/05 suite. Hypothèse : la convention 6 demande une vigilance constante difficile à tenir en continu pendant la production de fond, mais s'applique très efficacement en **passe dédiée en sortie de fiche** (20 patches en batch en une passe, audit exhaustif tenable). Mode d'application proposé : ne pas chercher à appliquer la convention 6 au fil de la rédaction ; faire une passe wiki-links systématique en sortie de fiche. À confirmer sur `preuve-de-concept` : si le ratio passe wiki-links / total reste similaire (~70-80 %), formaliser la convention dans `conventions.md` § 7 avec mode d'application explicite. MAJ légère effectuée ce jour sur convention 6.

### État de `concept.md` en fin de session
- Démarche complète : 5 étapes rédigées et alignées sur les 4 dimensions auditées.
- Sections transverses : *Pièges fréquents* (8 entrées) et *Pendant cette phase, côté équipe* (4 paragraphes thématiques) rédigées et cohérentes.
- Front matter + Posture + Objectif + Conclusion + Voir aussi : posés et alignés.
- Wiki-links : audit exhaustif convention 6 appliqué, 1 doublon + 19 oublis corrigés.
- **Fiche complète et alignée v2.1. Phase 2 du cycle en V close.**

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Prochaine session** posée : approfondissement de `preuve-de-concept` (fiche-trame phase 3 du V, point pivot du V, squelette fait 22/05). À chaque approfondissement, appliquer le mode d'application proposé pour la convention 6 (passe dédiée en sortie).
- **Conventions 10 et 11 affinées** à éprouver sur preuve-de-concept et dossier-technique pour confirmation avant promotion vers les sections fixes du fichier `conventions.md`.
- **Cohérence inter-fiches (spec-tech ↔ concept)** : hors champ pour cette session (annoncé brief). Vérification à conduire ultérieurement, possible session dédiée si désynchros détectées.

---

<!-- Sessions antérieures au 25/05 suite 6 déplacées dans `JOURNAL-archive.md` lors des nettoyages documentaires successifs : 25/05 suite 3 (sessions 19→21/05 + 24/05 suite 2), 26/05 suite (sessions 22/05 → 24/05 suite), 26/05 suite 4 (sessions 25/05 → 25/05 suite 4) et 27/05 suite 5 (session 25/05 suite 5, premier flux 1-pour-1 selon C4). -->
