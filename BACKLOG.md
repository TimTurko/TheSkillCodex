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
- [x] ~~`hub/ecoconception` — fil transverse~~ — squelettisée + approfondie 25/05 suite dans `content/fiches/proj/ecoconception.md`. 3 blocs co-actifs Évaluer / Réduire / Tracer, calque transverse établi sur gestion-de-projet.
- [x] ~~`hub/securite-et-qualite` — fil transverse~~ — créée ex nihilo + approfondie 26/05 dans `content/fiches/proj/securite-et-qualite.md`. 3 blocs co-actifs Sécurité produit / Sécurité projet / Qualité documentaire. **Phase 1 du wiki complète côté trames du V + fils transverses.**

À noter : l'emplacement acté implicitement par la session du 22/05 est `content/fiches/proj/` (et non `content/hub/`). Le hub reste un point d'entrée vers ces fiches, pas leur conteneur.

## Fiches à rédiger — par domaine

### EEE — Électronique
- [x] ~~PWM (modulation de largeur d'impulsion)~~ — popover `pwm` créé 28/05 suite 4 (brique MCU).
- [ ] PID (régulateur proportionnel-intégral-dérivé)
- [ ] Asservissement
- [ ] **`microcontroleur`** — **hub mère** (re-cadrage 26/05 suite 5). Page d'aiguillage vers hubs filles familles MCU (mini-hubs imbriqués, convention C18). Familles priorité 1 : `arduino`, `esp32`, `esp8266`, `raspberry-pi` (sous étiquette élargie *plateformes embarquées*). Familles priorité 2 : `stm32`, `teensy`, `pic`. Chaque famille = hub fille + tutos d'utilisation. Pose les notions communes (registres, périphériques, bus, IDE) puis renvoie vers les tutos spécifiques.
- [ ] **`arduino`** — **hub fille** de `microcontroleur` (re-cadrage 26/05 suite 5). Uno + Mega, panorama écosystème + tutos enfants : `arduino-prise-en-main`, `tinkercad` (simu spécifique). Popover posé dans `preuve-de-concept.md` Stock standard, 25/05 suite 7.
- [x] ~~**`stm32`** — hub fille priorité 2.~~ — **hub + 1ʳᵉ grappe faits 06/06 (suite 6)** : hub `eee/mcu/stm32/stm32.md` (décalque C18, thèse **deux portes** STM32duino/native, table variantes 7 lignes par cœur Cortex-M **`[!info]` à confronter au ST product selector**, callout 3,3 V/broches FT, 4 paliers [A]/[T], SVG couches embarqué ; lien rouge `[[stm32]]` de `microcontroleur` résolu, aucun patch) + **5 enfants** : vague 1 `stm32-prise-en-main` (CubeIDE+Nucleo) / `stm32-arduino-core` (STM32duino sur HAL) ; vague 2 pivots `stm32-cubemx` (arbre d'horloge, génération) / `stm32-hal` (3 modes scrutation-IT-DMA, HAL/LL) / `stm32-registres` (CMSIS, blink bare-metal, BSRR vs ODR → `manipulation-de-bits`). 2 SVG conceptuels. **Tally inchangé 79 %** (largeur, multi-couverture C20). Décision **lean-Bases** (pas de `stm32-gpio`/`-serie`, §8 C56). **Restent (enrichissement)** : tutos enfants additionnels (périphériques : `stm32-timers`/PWM, ADC, I2C/SPI), `micropython`-STM32 éventuel. **En attente relecture (garde-fou)** : exactitude API STM32 (HAL, broches Nucleo, macros CMSIS, URL STM32duino, modes flashage) + 2 SVG au rendu + captures C29.
- [x] ~~**`esp32`** — **hub fille** de `microcontroleur`~~ — **hub fait 02/06 (suite)** (`eee/mcu/esp32/esp32.md` ; 4 paliers + [A]/[T], alerte 3,3 V ; C25/C26 2/N). **Restent les tutos enfants** (rouges) : `esp32-prise-en-main`, `esp32-arduino-core`, `esp32-idf`, `wokwi`, `esp32-gpio`/`-serie`/`-wifi`/`-ble`/`-deep-sleep`/`-freertos`. ⚠️ Tableau des variantes (ESP32/S2/S3/C3/C6) à confronter à la doc Espressif avant publication. **→ Enfants écrits + tableau variantes refresh fait 06/06 (suite) ; reste relecture utilisateur.**
- [x] ~~**`esp8266`** — hub fille priorité 1.~~ — **hub lean + 2 enfants faits 06/06 (suite 8)** : hub `eee/mcu/esp8266/esp8266.md` (décalque C18, thèse « petit frère Wi-Fi de l'ESP32 » — Wi-Fi seul, pas de BLE, un seul ADC ; une porte ESP8266 core ; table variantes NodeMCU/D1 mini/ESP-01 `[!info]` ; 2 callouts 3,3 V + broches de boot/ADC ; 4 paliers [A]/[T] ; lien rouge `[[esp8266]]` de `microcontroleur` résolu) + **2 enfants** : `esp8266-prise-en-main` (core ESP8266, pilote USB-série, NodeMCU, blink LED active-bas) / `esp8266-arduino-core` (Dxx≠GPIO, broches de boot, ADC unique, watchdog/yield, exemple Wi-Fi → renvoi `esp32-wifi`). **Pas de SVG** (famille « moins »). **Tally inchangé 79 %** (largeur, multi-couverture C20). **lean + un cran** : pas de `esp8266-wifi`/`-ble` (Wi-Fi dans l'exemple + renvoi esp32) → **C56 3/N**, nuance C47 (renvois cross-famille). **Restent (enrichissement)** : enfants additionnels (serveur web/MQTT, OTA, deep-sleep détaillé) si besoin. **En attente relecture (garde-fou)** : exactitude API ESP8266 (URL core, pilote USB-série, LED active-bas, mapping Dxx, broches de boot, ADC, `ESP8266WiFi`).
- [x] ~~**`raspberry-pi`** — hub fille priorité 1 (SBC Linux).~~ — **module complet fait 06/07** : hub `eee/mcu/raspberry-pi/raspberry-pi.md` (notion, thèse **MCU vs SBC**, panorama Pi 5/4/Zero `[!info]`, warning 3,3 V, distinction explicite Pico→`micropython`, **paliers adaptés** ≠ C25 ≠ clone C57) + **3 fiches** : `-prise-en-main` (Imager + Pi OS Lite + **headless/SSH**, aparté C55 sysadmin délégué, `aa:[]`) / `-gpio` (`gpiozero`/`RPi.GPIO`(KO Pi 5)/`lgpio`, LED+bouton, **« pas de temps réel dur »**, `aa:PROJ/5`) / `-projet` (**architecture bicéphale** SBC+MCU sur bras 3 axes, `aa:PROJ/5`). **3 SVG conceptuels**. **Tally inchangé 79 %** (largeur, C20). **lien rouge `[[raspberry-pi]]` de `microcontroleur` résolu, aucun patch → couche familles MCU/SBC complète.** **En attente relecture (garde-fou)** : exactitude OS/API (Imager, `gpiozero`/Pi 5, numérotation BCM, courant/broche, alim Pi 5) + 3 SVG au rendu + captures C29.
- [x] ~~**`micropython`** — fiche-tuto approche scriptée haut niveau (positionnement à trancher : tuto autonome ou enfant de hub MCU ?).~~ — **module complet ouvert 06/06 (suite 9), au format Arduino, ancré Pico 2, en 4 vagues.** **Vague 0 faite** (`eee/mcu/micropython/`) : hub `micropython.md` + `micropython-prise-en-main` (Thonny/firmware/REPL) + `micropython-simulation` (Wokwi) + hub langage `micropython-langage` + 5 filles (`-repl`/`-types`/`-controle`/`-fonctions`/`-modules`). Partage [A]/[T] : hub langage propre remplace `cpp` ; concepts agnostiques référencés [T] ; « Communication » (bases) → `micropython-repl` (pas de fiche `-serie`, à confirmer). **V1 Bases hands-on faite** (06/06 suite 10 — 11 fiches : gpio, entree-tor, sortie-tor, capteur-numerique, capteur-analogique, sortie-pwm, temporisation, bibliotheques, module, shield, alimentation ; + SVG `micropython-modele-execution` embarqué dans le hub). **V2 Avancées faite** (06/06 suite 11 — 12 fiches : uart/i2c/spi, servomoteur/moteur-cc/moteur-pas-a-pas, afficheur, debug, gpio-boot, prog-non-bloquante, machine-a-etats, stockage/eeprom ; filtrage laissé rouge, pas de jumeau arduino). **V3 Ingénieur faite** (06/06 suite 12 — 6 fiches : interruptions, timers, deep-sleep, pid, memoire, watchdog ; manipulation-de-bits reste [T]). **✅ MODULE MicroPython COMPLET** (hub + 37 enfants = 38 fiches, 4 vagues) — seul `micropython-filtrage` reste rouge (optionnel, pas de jumeau arduino). **En attente relecture (bloc final)** : API MicroPython COMPLÈTE (tout le module) + captures C29. Motif « clone de curriculum + hub langage substitué » **mûr → promotion en C57 à acter** (conventions §8).
- [ ] **`pico-sdk`** — fiche-tuto **optionnelle** (reportée 06/07, hors module SBC) : programmer le Raspberry Pi **Pico** en **C/C++** via le Pico SDK (2ᵉ porte du Pico, à côté de MicroPython). Public marginal (l'école passe par MicroPython) ; à produire un jour si besoin.
- [x] ~~**`teensy`** — hub fille priorité 2.~~ — **hub + 1ʳᵉ grappe faits 06/06 (suite 7)** : hub `eee/mcu/teensy/teensy.md` (décalque C18, thèse « Arduino mais rapide + couteau-suisse USB/audio », une seule porte Teensyduino ; table variantes par cœur **`[!info]` à confronter doc PJRC** ; callout 3,3 V — **4.x NON tolérant 5 V** ; 4 paliers [A]/[T]) + **4 enfants** : vague 1 `teensy-prise-en-main` (Teensyduino + Teensy Loader) / `teensy-arduino-core` (Arduino musclé, noyau PJRC sur registres NXP, pas de HAL) ; vague 2 distinctifs `teensy-audio` (Audio Library + Audio System Design Tool + DMA, pas de DAC sur 4.x) / `teensy-usb` (USB Type : clavier/MIDI/manette…). 2 SVG conceptuels (`teensy-audio-flux`, `teensy-usb-personnalites`). **Tally inchangé 79 %** (largeur, multi-couverture C20). **lean-Bases** reconduit (pas de `teensy-gpio`/`-serie`) → **C56 2/N + élargie** (porte Arduino, pas native). Pas de fiche perf séparée. **Restent (enrichissement)** : enfants additionnels (périphériques, Audio Shield détaillé, Ethernet/SD sur 4.1). **En attente relecture (garde-fou)** : exactitude API Teensy (Teensyduino, broches, USB Type, Audio Library, pas-de-DAC 4.x) + 2 SVG au rendu + captures C29.
- [x] ~~**`pic`** — hub fille priorité 2.~~ — **fait 06/06 (suite 9) en fiche notion** (`eee/mcu/pic.md`, pas de module) : positionnement (ancien µC Microchip MPLAB/XC, pas d'Arduino-core natif, détrôné par STM32 en industrie / Arduino en école) ; `[[pic]]` rouge de `microcontroleur` résolu. **Choix : pointeur léger** (PIC hors usage école). Pas de relecture lourde nécessaire.
- [ ] **`algorithme`** — mini-hub mère (acquis 26/05 suite 5). Regroupe 3 méthodes de description du flot de comportement : `logigramme`, `machine-a-etats` (MAE), `grafcet`. Critique pour la couverture du critère `RA-EEE-C03-2/EEE/5`.
- [ ] **`logigramme`** — fiche-notion fille hub algorithme. Représentation graphique d'une séquence d'instructions/décisions.
- [ ] **`machine-a-etats`** — fiche-notion fille hub algorithme, alias `MAE`. Automate fini, états et transitions sur événements.
- [ ] **`grafcet`** — fiche-notion fille hub algorithme. Graphe de commande étape-transition, norme IEC 60848.
- [ ] **`chronogramme`** — fiche-tuto transverse (acquis 26/05 suite 5). Jonction datasheet ↔ algorithme ↔ oscilloscope. Diagramme temporel, X = temps, Y = signaux. **Hors mini-hub algorithme** (sémantique différente : signaux dans le temps vs flot de comportement). Contribue au critère `RA-EEE-C03-2/EEE/5`.
- [x] ~~**`bus-de-communication`** + `uart` / `i2c` / `spi`~~ — **fait 28/05 suite 4** (grappe batch `eee/mcu/bus/` ; hub tableau comparatif + aide au choix + SVG topologies).
- [ ] **Enrichissement grappes bus / sans-fil** (déféré 28/05 suite 4) : SVG de brochage par fille bus (`uart`/`i2c`/`spi`), trame UART + chronogrammes I2C/SPI (jonction `chronogramme`), approfondissement des filles sans-fil (actuellement popover). Optionnel bus : `can`, `rs-485`.
- [x] ~~**`techno-sans-fil`** + `wifi` / `ble` / `zigbee` / `xbee` / `lora`~~ — **fait 28/05 suite 4** (grappe batch `eee/mcu/sans-fil/` ; hub tableau + carte portée×débit + SVG comparaison).
- [x] ~~**`lire-une-datasheet`** — fiche-tuto transverse compétence pro~~ — **fait 28/05 suite 3** (procédure générique 5 étapes + *Exemple* L298N autonome 2 moteurs CC + 2 SVG ; C19 variante-(c), épreuve faible — vrai test multi-techno reste `analyse-de-schema-electronique` / `firmware`).
- [ ] **`analyse-de-schema-electronique`** — fiche-tuto transverse compétence pro. Critère NC `RA-PROJET-C03-3/EEE/1` (couvert dans Phase 1 squelette critique AA). À éprouver pour la convention C19 (fiche transverse multi-techno).
- [x] ~~**`firmware`** — fiche transverse pure~~ — **fait 02/06 (suite)** (`eee/mcu/firmware.md` ; typé **notion** ; progression super-loop → RTOS + section « selon la famille » ; **C19 vrai test → option (c)** ; `aa: .../PROJ/5` effleuré ; SVG couches = candidat).
- [x] ~~**`debugger-embarque`** — fiche-tuto compétence pro. SWD, JTAG, printf, breakpoints.~~ — **fait 06/06 (suite 3)** (eee/mcu/, tuto transverse [T], « Déboguer un système embarqué » ; deux approches printf vs JTAG/SWD + méthode d'enquête ; aa PROJ/5).
- [x] ~~**`pcb`** — mini-hub mère léger (gravure école, monoface interne / double face JLCPCB ; enfants kicad/easyeda).~~ — **fait 06/06 (suite 3)** (eee/pcb/, hub C18, aa EEE/5 *dédiée* ; flux schéma→Gerber + SVG ; **`easyeda` reste à faire**).
- [x] ~~**`kicad`** — fiche-tuto outil PCB principal (open source, double face). Simu intégrée mention possible.~~ — **fait 06/06 (suite 3)** (eee/pcb/, fille hub pcb, aa:[]).
- [ ] **`easyeda`** — fiche-tuto outil PCB altern (en ligne, JLCPCB-friendly). Embranchement de choix outil.
- [ ] **`pcb-gravure-ecole`** — fiche-tuto spécifique monoface interne école. À produire ultérieurement (alimentation continue).
- [ ] **`circuitverse`** — fiche-tuto simu numérique en ligne (retenu 26/05 suite 5 après test utilisateur). Squelette transverse.
- [ ] **`ltspice`** — fiche-tuto simu analogique desktop. Squelette transverse.
- [ ] **`tinkercad`** — fiche-tuto simu Arduino (embranchement Arduino).
- [ ] **`wokwi`** — fiche-tuto simu ESP32 (embranchement ESP32).
- [ ] **`falstad`** — fiche-tuto simu altern, à évaluer après CircuitVerse. Squelette transverse.
- [x] ~~**`multimetre`** — fiche-tuto compétence pro (mesures tension/courant/résistance/continuité, choix d'échelle, pièges).~~ — **fait 06/06 (suite 3)** (eee/mesure/, fille du hub instruments-de-mesure, aa:[], + SVG série/parallèle).
- [x] ~~**`oscilloscope`** — fiche-tuto compétence pro (lecture d'écran, sonde, déclenchement, mesures).~~ — **fait 06/06 (suite 3)** (eee/mesure/, fille du hub instruments-de-mesure, aa:[] ; frontière lecture conceptuelle → [[chronogramme]]).
- [x] ~~**`alimentation-electronique`** — fiche-tuto compétence pro (re-cadrage 26/05 suite 5, ex `alimentation-stabilisee`). Régulation, découplage, masse, mode CV/CC, sécurité court-circuit.~~ — **fait 06/06 (suite 4)** : finalement **notion transverse [T]** (`eee/alimentation-electronique.md`), 5 principes + exemple bras 3 axes + 3 SVG ; carto `RA-EEE-C03-2/EEE/3` **E→C**. **2 SVG candidats restants** (différés du 1er jet) : courbe CV/CC, placement du découplage.
- [ ] **`bom-electronique`** — fiche-tuto compétence pro. Au-delà du `bom` générique projet, focus composants élec.
- [ ] Alimentation d'un système embarqué
- [x] ~~Pull-up / pull-down~~ — couvert par `gpio` (02/06) : modes de tirage interne/externe, logique inversée, schéma push-pull/drain ouvert/tirage.
- [x] ~~**`niveau-logique`** — compatibilité 3,3 V / 5 V, level shifters~~ — **fait 28/05 suite 4** sous le slug **`niveaux-de-tension`** (fiche-notion + 2 SVG ; popover posé dans `integration-et-tests.md` 26/05).
- [x] ~~ADC~~ / DAC — popover `adc` créé 28/05 suite 4 (brique MCU) ; `DAC` reste à traiter.
- [ ] Filtrage analogique de base
- [ ] Masse électrique, plan de masse
- [ ] Découplage (condensateurs)
- [ ] **`cable-management`** — fiche-tuto (popover posé dans `integration-et-tests.md` section Équipe, 26/05). Routage des câbles, attaches, repérage, anti-arrachement, protection en mouvement.

### MIA — Informatique embarquée
- [x] ~~**`firmware`** — fiche-notion~~ — **fait 02/06 (suite)**, fusionnée avec l'entrée EEE ci-dessus (une seule fiche `eee/mcu/firmware.md` couvre architecture + définition/cycle de vie).
- [ ] **`revue-de-code`** — fiche-notion (popover posé dans `securite-et-qualite.md` § Qualité documentaire, 26/05). Pratique de qualité logicielle : revue croisée entre équipiers ou avec l'encadrant, focus défauts manifestes (gestion interrupts, machine à états, fonctions de sécurité), 30 min par jalon.
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
- [ ] **`amdec`** — fiche-notion (popover posé dans `securite-et-qualite.md` § Sécurité produit, 26/05). Méthode d'analyse des risques produit : modes de défaillance, gravité, probabilité, parade. Variante allégée pédagogique envisageable ; méthode complète déléguée au cours dédié.
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
- [ ] **`gabarit`** — fiche-notion (popover posé dans `integration-et-tests.md` étape 2 H4-2, 26/05). Pièce de vérification dimensionnelle réutilisable, simple à fabriquer en interne, accélère les contrôles répétitifs sur séries de pièces identiques. Probablement délégable au cours fabrication des collègues.
- [ ] **`pied-a-coulisse`** — fiche-notion (popover posé dans `preuve-de-concept.md` outillage, 25/05 suite 7). Instrument de mesure dimensionnelle de base, lecture vernier, plage 0-150 mm typique. Court, popover-only.
- [ ] **`comparateur`** — fiche-notion (popover posé dans `preuve-de-concept.md` instruments de mesure, 25/05 suite 7). Aliases possibles `[comparateur-micrometrique]`. Mesure de variation dimensionnelle (jeu, défaut de planéité, dérive), précision typique 0,01–0,02 mm.

### ESE — Écoconception, sécurité produit, normes
- [ ] ACV (analyse cycle de vie) — principes
- [ ] Liens vers cours dédié
- [ ] **`marquage-ce`** — fiche-notion (popover posé dans `securite-et-qualite.md` Objectif + § Sécurité produit + § Qualité documentaire + § Équipe, 26/05). Conformité européenne, périmètre projet pédagogique, renvoi cours normatif.
- [ ] **`basse-tension`** — fiche-notion (popover posé dans `securite-et-qualite.md`, 26/05). Directive 2014/35/UE, périmètre, applicabilité projet étudiant. Délégué cours normatif.
- [ ] **`emc`** — fiche-notion alias `[cem, compatibilite-electromagnetique]` (popover posé dans `securite-et-qualite.md`, 26/05). Compatibilité électromagnétique, principes, renvoi cours dédié.
- [ ] **`iso-12100`** — fiche-notion (popover posé dans `securite-et-qualite.md`, 26/05). Norme sécurité des machines, principes, périmètre projet pédagogique.
- [ ] **`epi`** — fiche-notion (popover posé dans `securite-et-qualite.md` § Sécurité projet, 26/05). Équipement de protection individuelle, recensement par environnement (atelier, fablab, salle élec), articulation avec les responsables d'équipement.

## Idées de fiches transversales / méta

- [ ] **Convention mécatronique "par fonction"** — acquis 21/05 suite : en mécatronique, une fonction mobilise toujours plusieurs disciplines. Pas de test purement disciplinaire. À expliciter dans une fiche-notion sur l'**essence mécatronique** (ce qui distingue la mécatronique d'un assemblage élec + méca + info).

- [ ] Glossaire d'acronymes (PWM, PID, PCB, PPM, etc.) — à décider : fiche unique ou fiches courtes ? `ppm` est un prospect typique (acronyme périphérique, pas digne d'une fiche dédiée)
- [ ] FAQ projet mécatronique
- [x] ~~"Premiers pas" (page d'onboarding pour étudiant qui arrive sur le site)~~ — l'accueil refondu fait office d'onboarding (« Par où commencer » = 3 branches), 08/06.
- [x] ~~Mode d'emploi du site (popovers, recherche, graph)~~ — couvert par la refonte de l'accueil (section « Comment utiliser ce site »), 08/06.

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

- [ ] **Masquer / filtrer l'explorateur de fichiers Quartz** — l'arborescence alphabétique des fiches (`arduino-*` notamment) paraît « en vrac » côté étudiant (signalé 02/06), alors que l'ordre pédagogique vit dans les hubs. Agir sur le **composant Explorer du layout Quartz** (le retirer, ou lui donner un filtre de dossiers). **Ne PAS utiliser `draft: true`** : en Quartz une page `draft` est exclue du build (dépubliée), ce qui casserait tous les wiki-links/popovers entrants. À traiter en pré-publication.
- [ ] **Reprise visuelle des images SVG** (pas du contenu) avant publication — **très peu urgent, à faire juste avant l'ouverture aux élèves**. Concerne tous les SVG produits depuis le début du projet :
  - **Premiers jets fragiles, affinage utilisateur attendu** (produits le 25/05 suite 2, génériques + exemples station météo) : `jalons-generique.svg`, `jalons-station-meteo.svg`, `wbs-generique.svg`, `wbs-station-meteo.svg`, `retroplanning-generique.svg`, `retroplanning-station-meteo.svg`, `gantt-generique.svg`, `gantt-station-meteo.svg`, `matrice-de-risques-generique.svg`, `matrice-de-risques-station-meteo.svg`, `matrice-de-decision-generique.svg`, `matrice-de-decision-station-meteo.svg`. Ce sont des premiers jets Claude, à reprendre visuellement avant publication (alignements, hauteurs de lignes, positionnements de textes proches des bords, lisibilité smartphone).
  - **Premiers jets EEE/mcu (28/05)** : `microcontroleur-architecture.svg` (schéma bloc, 28/05 suite 2), `lire-une-datasheet-generique.svg` (anatomie datasheet), `lire-une-datasheet-l298n.svg` (L298N deux mondes). 1ers jets Claude — affinage avant publication (alignements, lisibilité smartphone, sens des deux flèches de rotation moteur sur le SVG L298N).
  - **Premiers jets EEE/mcu (02/06)** : `gpio-modes`, `gpio-flottant`, `gpio-courant-max` (#B23A2E), `interruption-chronogramme`, `timer-compteur`, `programmation-non-bloquante` — 6 SVG hand-codés à valider au rendu Quartz. **+ 2 SVG candidats non encore produits** : schéma-bloc PID (consigne→erreur→P+I+D→système→retour) pour `arduino-pid`, profil de consommation deep-sleep (pics de réveil + vallées) pour `arduino-deep-sleep`.
  - **Premiers jets EEE/mcu (02/06 suite)** : **aucune SVG produite** — `cpp`, `fonction-informatique`, `manipulation-de-bits`, `firmware`, `esp32` rédigées sans schéma (tables + code + motifs binaires monospace). **Les 2 SVG conceptuels candidats ont été produits 06/06** (`manipulation-de-bits-masquage`, `firmware-architectures`).
  - **Premiers jets EEE/mcu (05/06 suite)** : **2 SVG conceptuels produits** pour le module `cpp` (relecture parcours Arduino), à valider au rendu — `cpp-execution-cycle.svg` et `cpp-portee-locale-globale.svg` : schéma du cycle `setup()`/`loop()` (mise sous tension → `setup()` une fois → `loop()` en boucle) pour `cpp-execution` ; visuel portée locale vs globale (variable recréée/détruite à chaque tour de `loop()` vs persistante) pour `cpp-portee`.
  - **Premiers jets 06/06** : module `simulation` — 4 SVG conceptuels (`simulation-electronique-cycle`, `simulation-electronique-lecture-courbe`, `manipulation-de-bits-masquage`, `firmware-architectures`), embeds posés, à valider au rendu Quartz. **SVG méca relus 06/06 en séance** (fil rouge bras 3 axes) : `schema-cinematique-generique`/`-bras-3-axes` **validés** ; `chaine-energie-generique`/`-bras-3-axes` **corrigés** (flèche de mesure re-routée depuis le bloc Agir).
  - **Premiers jets 06/06 (suite)** : module `esp32` — 2 SVG conceptuels (`esp32-deep-sleep-reveil` = cycle réveil=RESET + sources de réveil ; `esp32-freertos-ordonnancement` = préemption de 2 tâches), à valider au rendu Quartz. **Note** : la liste de classes SVG `.th/.tl/.tf` du § 3 de `conventions.md` paraît obsolète — les SVG récents embarquent leur propre `<style>` auto-contenu ; à nettoyer.
  - **Premiers jets 06/06 (suite 3)** : Phase 3 squelette pro — 3 SVG conceptuels (`multimetre-serie-parallele` = voltmètre en parallèle / ampèremètre en série ; `instruments-de-mesure-confrontation` = mesure dans plage attendue → validé ; `pcb-flux` = schéma→Gerber→fabrication avec frontière), embeds posés, à valider au rendu Quartz (**géométrie du circuit multimètre en priorité**, lisibilité smartphone).
  - **Premiers jets 06/06 (suite 4 + suite 5)** : EEE `alimentation-electronique` — 3 SVG (`alimentation-electronique-regulation` linéaire vs découpage ; `-masses` duo étoile/chaînage C31 ; `-bras-3-axes` archi incarnée 2 rails / fusible / diode anti-inversion / découplage / masse étoile) **non listés jusqu'ici**. MME `optimisation-mecanique` — 1 SVG (`optimisation-mecanique-generique` = avant/après allègement, profilé plein → ajouré, masse ≈ 70 %). Tous 1ers jets auto-contenus + mode sombre, à valider au rendu Quartz.
  - **Premiers jets 06/06 (suite 6)** : module `stm32` — 2 SVG conceptuels (`stm32-abstraction-couches` = 4 couches STM32duino/HAL/LL/registres-CMSIS + silicium, CubeMX « génère » HAL&LL, axe abstraction↑ — la thèse du module ; `stm32-cubemx-flux` = 6 boîtes Configurer→Générer→Compléter→Compiler→Flasher→Déboguer + boucle « USER CODE préservé »), embeds posés (chemins racine-absolus), à valider au rendu Quartz (lisibilité smartphone des axes/boîtes).
  - **Premiers jets 06/06 (suite 7)** : module `teensy` — 2 SVG conceptuels (`teensy-audio-flux` = chaîne audio, objets reliés par cordons, traitement DMA en tâche de fond ; `teensy-usb-personnalites` = un Teensy → identités USB choisies à la compilation), embeds posés dans `teensy-audio`/`teensy-usb`, à valider au rendu Quartz (lisibilité smartphone des chaînes/fan-out).
  - **Premiers jets 06/07** : module `raspberry-pi` — 3 SVG conceptuels (`raspberry-pi-mcu-vs-sbc` = comparaison MCU/SBC 2 panneaux, la thèse ; `raspberry-pi-gpio-pile` = l'OS qui s'intercale entre programme et broche, point « pas de temps réel dur » ; `raspberry-pi-architecture-bicephale` = SBC haut niveau + MCU temps réel sur bras 3 axes), embeds posés (chemins racine-absolus), à valider au rendu Quartz.
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

## Décisions hiérarchie en attente (à arbitrer)

*Migrées depuis TODO 27/05 suite 3 (Q4 cleanup documentation).*

- [ ] Convention de tags AA (granularité, syntaxe)
- [ ] Niveau d'écart accepté entre référentiel et contenu produit (peut-on aller au-delà ?)
- [ ] Couleurs / charte graphique : faut-il aligner sur la charte école ?
- [x] ~~**Catégorie « Hors scope par délégation »**~~ — **instaurée 06/06** (arbitrage utilisateur, autonomie déléguée). Distincte de C15. Reçoit les 3 critères design (`PROJ-C03-3/1`, `/2`, `MME-C03-1/1`). Actée dans `conventions.md` §7 + `couverture-en-cours.md`.
- [x] ~~**Statut des 4 critères MME effleurés sans fiche centrale**~~ — **tranché 06/06** : les **5** critères (`RA-MME-C02-1/MME/2`, `/4`, `/6`, `RA-MME-C03-1/MME/2`, `/4`) actés *Effleuré terminal par délégation* — pas de fiche MME phase 2.
- [x] ~~**Statut de la fiche `schema-cinematique`**~~ — **tranché 06/06** : fiche **créée** dans le wiki (`mme/`, frontière interface + renvoi cours méca), `RA-MME-C02-1/MME/5` NC→C, wiki-link du hub résolu.

## Manipulations manuelles différées

*Migrées depuis TODO 27/05 suite 3. Limites techniques MCP filesystem (pas d'écriture binaire, pas de delete) ou configurations utilisateur ponctuelles.*

- [ ] **Déposer manuellement `cdcf-ecole-template.docx`** dans `content/ressources/templates/` (limite technique MCP filesystem : pas d'écriture binaire).
- [ ] **Supprimer `content/callouts-demo.md`** — fiche jetable, mission accomplie (validation visuelle palette v2). À faire à la main (pas d'outil delete MCP).
- [ ] **Supprimer le dossier `content/fiches/mia/` et son `index.md`** — MIA fusionné dans EEE depuis 26/05/2026. Patches navigation déjà effectués sur `content/index.md`, `content/hub/index.md` et `content/fiches/eee/index.md`. À faire à la main (limite MCP : pas d'outil delete).
- [ ] **Désactiver Dark Reader sur localhost et le site déployé**
- [ ] Configurer le plugin Templates d'Obsidian (`content/templates`)
- [ ] Installer **Pandoc + MiKTeX** pour export PDF académique (pas urgent)
- [ ] Produire le schéma d'illustration des conventions de flèches (mentionné dans `schema-bloc-fonctionnel`)
- [ ] Produire / trouver une photo de couveuse annotée (mentionné dans `schema-bloc-fonctionnel`)

## Vérifications visuelles différées (rendus Quartz + smartphone)

*Migrées depuis TODO 27/05 suite 3. Accumulées au fil des fiches, à conduire en passe dédiée avant publication aux élèves.*

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
- [ ] Vérifier le rendu de `concept.md` étapes 1-2 (2 H4 par étape, callouts v2.1, tableau matrice 3 solutions × 5 critères + scores pondérés dans l'`[!example]` étape 2)
- [ ] Vérifier le rendu de `concept.md` étape 3 (3 H4 pivot dense, tableau de conflits 4 colonnes × 2 lignes dans `[!example]`, callouts warning + tip + example + livrable)
- [ ] Vérifier le rendu de `concept.md` étape 4 (2 H4 économes, tableau de pré-dim 6 colonnes × 5 lignes dans `[!example]` — point de vigilance mobile)
- [ ] Vérifier le rendu de `concept.md` étape 5 (3 H4 clôture documentaire, TdM type 5 sections + TdM instanciée dans `[!example]`)
- [ ] Vérifier le rendu de `concept.md` section Pièges (8 entrées gras court + explication, format calque spec-tech)
- [ ] Vérifier le rendu de `concept.md` section Équipe (4 paragraphes thématiques, wiki-links rouges sur normes RoHS/REACH/DEEE et procédés usinage/impression-3d/soudure)
- [ ] Vérifier le rendu de `concept.md` post-cohérence (passe 25/05 suite 6, densité wiki-links après audit exhaustif convention 6)
- [ ] Vérifier le rendu de `preuve-de-concept.md` approfondi (5 étapes complètes, callouts v2.1, 6 nouveaux wiki-links sur outils/instruments)
- [ ] Vérifier le rendu de `preuve-de-concept.md` section Pièges (11 entrées gras court + explication)
- [ ] Vérifier le rendu de `preuve-de-concept.md` section Équipe (4 paragraphes thématiques, wiki-links rouges sur 6 nouvelles cibles)
- [ ] Vérifier le rendu de `integration-et-tests.md` étape 1 (2 H4 économes, `[!example]` 3 paragraphes structurés par branche, calendrier semaine n°12-15)
- [ ] Vérifier le rendu de `integration-et-tests.md` étape 2 (**3 H4 disciplinaires** élec/méca/info — cas inédit C11, `[!example]` 4 paragraphes structurés par discipline)
- [ ] Vérifier le rendu de `integration-et-tests.md` étape 3 (**3 H4 pivot dense pyramide compressée** niveau 1 / niveaux 2-3 / niveau 4, `[!example]` 5 paragraphes structurés par niveau + 3 statuts qualification)
- [ ] Vérifier le rendu de `integration-et-tests.md` étape 4 (2 H4 économes bilans, `[!example]` 4 paragraphes structurés par bilan + REX)
- [ ] Vérifier le rendu de `integration-et-tests.md` étape 5 (2 H4 économes rapport+soutenance, `[!example]` 3 paragraphes structurés)
- [ ] Vérifier le rendu de `integration-et-tests.md` section Pièges (11 entrées gras court + explication, ratio ~55 %)
- [ ] Vérifier le rendu de `integration-et-tests.md` section Équipe (4 paragraphes thématiques, wiki-links rouges sur nouvelles cibles : `cable-management`, `gabarit`, `firmware`)
- [ ] Vérifier le rendu de `securite-et-qualite.md` (3 blocs co-actifs Sécurité produit / Sécurité projet / Qualité documentaire, callouts v2.1, popovers nouvelles cibles wiki-links rouges)
- [ ] Vérifier le rendu de `securite-et-qualite.md` Bloc 1 (`[!example]` 4 axes pincement/couple/énergie/parades, calendrier semaine n°2-15)
- [ ] Vérifier le rendu de `securite-et-qualite.md` Bloc 2 (3 risques cotés, cas dérogation refusée semaine n°12, `[!warning]` règles non négociables)
- [ ] Vérifier le rendu de `securite-et-qualite.md` Bloc 3 (plan 6 points revues, tags Git v0.1→v1.0.1, `[!tip]` tracer au moment de la décision)
- [ ] Vérifier le rendu de `securite-et-qualite.md` section Pièges (11 entrées gras court + explication, ratio ~45 %)
- [ ] Vérifier le rendu de `securite-et-qualite.md` section Équipe (3 axes articulation cadence/matrice de risques/piloter sans écraser)
- [ ] Vérifier le rendu de `decomposition-fonctionnelle.md` (4 SVG arborescences 3 niveaux + triptyque mauvais/moyen/bon, densité SVG-3-axes en 920×500 = point de vigilance mobile)
- [ ] Vérifier le rendu du patch `concept.md` étape 1 (arborescence descendante en lieu et place de schema-bloc-fonctionnel, SADT/IDEF0 en alternative formelle)
- [ ] Vérifier le rendu du patch `schema-bloc-fonctionnel.md` *Voir aussi* (lien réciproque vers decomposition-fonctionnelle en première position)

## Idées éditoriales

- [ ] **Lexique étudiant : termes à proscrire** — démarrage suite à la décision du 22/05 de bannir « dérisquer » (non français) et « point dur » (peu lisible) dans toute production étudiante. À constituer comme petit document méthodologique (markdown court dans `_templates/` ou page de référence) listant les termes à éviter et leurs alternatives recommandées : « dérisquer » → « lever une incertitude » / « valider le fonctionnement », « point dur » → « incertitude », « phase N » → noms en toutes lettres dans la prose. À enrichir au fil des sessions.
- [ ] Mini-séries thématiques (ex: "tout pour piloter un moteur DC en 5 fiches")
- [ ] Parcours guidé : "Tu démarres ton projet ?" → suite logique de fiches
- [ ] Encadré "Vu en projet" (callout terrain) systématisé
- [ ] Page "ressources externes recommandées" (datasheets utiles, sites de référence)
- [ ] Version anglaise des fiches (très long terme, après stabilisation du contenu français)

## Discussions / décisions en attente

- [ ] **Inventaire systématique des fiches stub/placeholders avant publication aux élèves** — tâche structurante pour la phase de pré-ouverture. Posée 24/05 (suite 2) en conséquence de la décision « `draft: false` par défaut » : le BACKLOG est désormais le pilote de la maturité éditoriale. Passe à conduire en fin de phase de rédaction (avant ouverture aux élèves) sur l'ensemble du contenu : identifier les fiches stub, les sections `*[À rédiger]*`, les liens rouges, les images placeholder. Sortie : checklist d'éléments à finaliser ou à retirer. **➜ Liens rouges : CLOS 07/06 (suite 3)** — re-scan exhaustif `bash` (221 fiches, 100 % de `content/`), **0 lien rouge réel** confirmé + **43 annotations périmées** nettoyées (statut retiré / descripteur conservé, C59). **Restent ouverts** (3 autres volets de l'inventaire) : fiches **stub** (`afnor-nfx50-151` recensé), sections `*[À rédiger]*`/placeholders des templates, **images placeholder** (peigne Quartz des SVG — liste « Vérifications visuelles différées » ci-dessus).

- [ ] Convention des tags AA (séparer domaine vs code complet)
- [ ] **Harmoniser le commentaire `draft` des templates** (`fiche-tuto.md`, et vérifier `fiche-notion.md` / `fiche-trame.md`) : le commentaire indique de commencer une nouvelle fiche en `draft: true` tant qu'elle n'est pas relue, ce qui contredit la convention `draft: false` par défaut (24/05, maturité pilotée par le BACKLOG) appliquée de fait sur toutes les fiches récentes. Incohérence signalée 28/05 suite 3.
- [ ] Faut-il un glossaire séparé pour les acronymes ?
- [ ] Quoi faire des fiches MME / ESE : pages très courtes pointant vers les collègues, ou ne rien créer du tout ?
- [x] ~~Pliage des callouts~~ — **résolu 05/06** : le pliable `[!type]-` fonctionne sur Quartz **à condition de ne pas être imbriqué** dans un autre callout (sinon figé ouvert ; cf. C40). Les corrigés d'exercice du module `cpp` l'utilisent en callout **frère** de l'énoncé. Le fond des blocs de code dans les callouts a aussi été corrigé (CSS `var(--light)`, cf. conventions §8). Reste ouvert : faut-il replier `[!example]-` **par défaut** dans les fiches-trame ? (préférence à trancher à l'usage).
- [ ] **Mode sombre des callouts v2** — non décliné actuellement. À traiter quand on aura du recul d'usage. SCSS Quartz à étendre, équivalent Obsidian éventuel à décider.
- [ ] **Convention de gras dans la section Pièges des fiches-notion** : « \*\*Piège en gras court.\*\* Phrase d'explication. » — figé dans le template `fiche-notion.md` mais pourrait constituer une « exception structurelle » dans la règle de gras minimal (« uniquement sur 1ère occurrence des concepts-clé »). À documenter formellement quand on écrira un guide éditorial unifié.
- [x] ~~**Convention de triptyque mauvais/moyen/bon dans les fiches-notion** : utilise `[!failure]` / `[!warning]` / `[!example]` (vu dans `bete-a-cornes.md`, mentionné dans `fiche-notion.md`). À figer formellement dans `callouts.md` si on confirme le pattern après 2-3 fiches-notion supplémentaires.~~ — promue § 2 conventions le 27/05 suite après épreuve 3/N (bete-a-cornes + caracteriser-une-exigence + decomposition-fonctionnelle).
- [ ] **Politique extensions navigateur pour validation visuelle** : recommander aux utilisateurs/collègues de désactiver Dark Reader (et similaires) sur le domaine du site — à documenter dans une page "comment lire ce site" éventuelle
- [ ] **Palette couleurs disciplines (élec / méca / info)** : 3 couleurs ad-hoc définies pour le flowchart-2-concept (bleu `#D6E8F5`, ocre `#F5E8D6`, vert `#D6F5E0`). À harmoniser avec la **palette callouts v2** (figée 22/05 suite) dans une vraie itération design, puis à appliquer de manière cohérente sur **toutes les phases avec éclatement disciplinaire** (concept, PoC, dossier technique, intégration probable).
- [ ] **Convention de suffixe disciplinaire** `(élec)` / `(méca)` / `(info)` en bout de label des nœuds : à acter comme convention si retenu après plusieurs flowcharts produits.
- [ ] **Layout flowchart phase 2 — non résolu** : le subgraph BRANCHES (étude par discipline) reste chaotique malgré plusieurs tentatives (sous-subgraphs LR/TB, liens invisibles `~~~`). Pistes à explorer plus tard : (a) tester le renderer ELK via `%%{init: {'flowchart': {'defaultRenderer': 'elk'}} }%%` (peut nécessiter une mise à jour de `@mermaid-js/mermaid-cli`), (b) abandonner la grille pure et accepter un autre mode de représentation, (c) sortir complètement de Mermaid pour cette phase (SVG main, draw.io, Excalidraw). **Confirmé 21/05 suite** : le même découpage en grille 3×3 régulière (phase 3) passe sans problème. C'est spécifiquement le 2×3 rectangulaire qui coince. Si on doit résoudre ph2, symétriser en 3×3 (ajouter un 3è étage : matrice + ?) pourrait suffire.
- [ ] **Règle de visualisation des flowcharts** : préférer le SVG généré par `npm run flowcharts` au rendu Obsidian quand le diagramme devient large (Obsidian ne permet pas le scroll horizontal facile). Le SVG s'ouvre dans n'importe quel visualiseur d'image avec zoom natif.

- [ ] **Mode d'application convention 6 (wiki-link à la 1ère occurrence par section/sous-section/callout)** : observation 25/05 suite 6 — 20 patches sur 27 de la session de cohérence finale concept ont porté sur la convention 6 (74 %). Hypothèse : la convention 6 s'applique mieux en **passe dédiée en sortie de fiche** qu'en application au fil de la rédaction. À confirmer sur `preuve-de-concept` : si le ratio passe wiki-links / total reste similaire, formaliser le mode d'application dans `conventions.md` § 2 (Mise en forme — Popovers et wiki-links).

- [x] ~~**Pattern MARKER + N segments** comme procédure standard pour déplacements de gros blocs (>30 ko) via MCP~~ — **documenté formellement dans `conventions.md` § 7** (26/05 suite). Capitalisation faite. 2ᵉ cas d'usage non encore rencontré mais pattern doc tracé pour réutilisation.

- [ ] **Re-calibrage seuil C14 dans la zone 30-40 ko** — valeur exacte du seuil pratique payload MCP non clairement identifiée. Épreuves connues : 24 ko net passe (26/05 suite, seg2 archive), 50 ko échoue silencieusement (25/05 suite 8). À éprouver à froid en testant des payloads progressivement croissants (35, 40, 45 ko) pour préciser la limite. Résultat utile pour calibrer la segmentation MARKER + N segments.

- [x] ~~**Convention emplacement `_drafts/referentiel/`** pour les documents école externes (référentiel compétences, grilles d'évaluation, etc.)~~ — **confirmée sur 2e cas 26/05 suite 2** : production en session du fichier de travail `_drafts/referentiel/couverture-en-cours.md` + `_drafts/referentiel/referentiel-normalise.md`. Convention de rangement stabilisée pour les documents de pilotage interne (hors site Quartz). À documenter formellement dans `conventions.md` § 6 (Publication / Quartz) si repéré sur un 3e cas.

- [ ] **Synthèse globale de `couverture-en-cours.md` à compléter en fin de passe B+A** — section placeholder déjà en place dans le fichier (26/05 suite 2). Contenu cible : (a) **table de couverture par domaine** (EEE/ESE/MEO/MME/PROJ) avec statut par critère ; (b) **liste des Hors scope** explicités ; (c) **liste des trous phase 1** à corriger (patches à appliquer aux fiches existantes) et **trous phase 2** prévus (alimente le TODO phase 2) ; (d) **note explicative sur sécurité-qualité** = trame sans critère central AA (insight 26/05 suite 2, le cadre AA n'est pas le seul critère de pertinence d'une fiche). Production estimée 0,5 session après passe B+A finie.

- [ ] **Écriture champ `aa:` dans front matter** sur ~22 fiches en passe groupée — opération mécanique après passe B+A finie. Structure du champ : sous-clés `aa.couvert`, `aa.effleure`, `aa.hors_scope` (liste de codes courts `<Code_RA>/<AA_DOMAIN>/<N°critère>`). Source de vérité = `couverture-en-cours.md`. À conduire en 1 passe niveau B mécanique. Estimé 0,5 session.

- [x] ~~**Amendement C14 — verrou Windows EPERM**~~ — **documenté formellement dans `conventions.md` § 7** (26/05 suite). Piège distinct du seuil de payload, symptôme explicite EPERM, remède = changer d'onglet Obsidian.

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
