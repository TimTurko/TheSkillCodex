# Relecture — ordre & tableau de bord

> Fichier de travail privé (hors `content/`, non publié). **Fil conducteur de la relecture humaine**, fiche par fiche, dans l'ordre pédagogique. Sert aussi de mémoire **entre conversations** : on coche au fur et à mesure.
> Inventaire au 08/06 : 213 fiches de contenu (+ index de section + templates internes en annexe).

## Méthode (rappel)

- **Relire sur le rendu Quartz**, pas dans Obsidian : `npx quartz build --serve` dans le dépôt → `http://localhost:8080`. Dans Obsidian les images `/ressources/...` apparaissent cassées (normal, ce n'est pas un défaut).
- **Mode sombre** : tester via le **réglage de Windows** (Paramètres → Couleurs → Sombre), pas seulement le bouton du site (les SVG suivent l'OS). Cas à surveiller : page sombre + dessin resté en couleurs claires. *(Détail + sanity-check des images : voir `peigne-svg-prepublication.md`, désormais en simple référence.)*
- **Une conversation = une session de relecture.** On échange au fil de l'eau : tu lis une fiche, tu me donnes le retour, je corrige, tu revérifies. En fin de conversation, on coche ici et je te prépare un prompt de reprise.

### Gabarit de retour (à me copier-coller, souple)
```
Fiche : <slug>
Verdict : OK / a corriger
- texte   | <section ou courte citation> | <correction voulue>
- svg     | <nom-svg> | OK / a revoir (<quoi>)
- capture | <section> | deposee: <fichier.png> / a prendre
- lien    | [[<lien-rouge>]] dans <section>
```

### Légende
`- [ ]` à relire · `- [x]` relue & corrigée · 🖼 SVG à valider au rendu · 🖼✅ SVG déjà validés · ⚠ point d'attention connu

---

## 0 · Entrée
- [x] `index` (accueil) — 🖼✅ *(cycle-v-projet)*
- [x] `conduite/index` (parcours central)
- [x] `mecatronique` (notion racine)

## 1 · Trame — cycle en V
- [x] `specification-technique` (phase 1) — ⚠ SVG + template docx → TODO
- [x] `concept` (phase 2)
- [x] `preuve-de-concept` (phase 3)
- [x] `dossier-technique` (phase 4)
- [x] `integration-et-tests` (phase 5)

## 1bis · Trame — fils transverses
- [ ] `gestion-de-projet`
- [ ] `ecoconception`
- [ ] `securite-et-qualite`

## 2 · Notions & outils PROJ
- [ ] `bete-a-cornes` — 🖼 ⚠ SVG à reprendre (relecture 08/06)
- [ ] `pieuvre` — 🖼 ⚠ SVG à reprendre (relecture 08/06)
- [ ] `fonction`
- [ ] `fast` — 🖼
- [ ] `decomposition-fonctionnelle` — 🖼 ⚠ arbo 3-axes dense sur mobile
- [ ] `schema-bloc-fonctionnel`
- [ ] `cahier-des-charges-fonctionnel`
- [ ] `caracteriser-une-exigence`
- [ ] `afnor-nfx50-151` *(stub)*
- [ ] `etat-de-l-art-technique`
- [ ] `mind-map` — 🖼
- [ ] `bom`
- [ ] `matrice-de-decision` — 🖼
- [ ] `amdec`
- [ ] `jalons` — 🖼
- [ ] `gantt` — 🖼
- [ ] `wbs` — 🖼
- [ ] `retroplanning` — 🖼
- [ ] `matrice-de-risques` — 🖼 ⚠ légende station-météo
- [ ] `acv-simplifiee`
- [ ] `matrice-eco-criteres`
- [ ] `ecodesign` — *(vérifié 08/06 : pas un doublon — notion sœur d'`ecoconception`, distinction ingénierie/design ; on garde les deux)*

## 3 · MEO — méthodes & organisation
- [ ] `relation-client`
- [ ] `archivage-projet`
- [ ] `revue-de-code`
- [ ] `cable-management`
- [ ] `unite-si`
- [ ] `conduite/meo/index`

## 4 · EEE — fondations électronique
- [x] `niveaux-de-tension` — 🖼✅ *(rouge `#B23A2E` validé en sombre, 11/06)*
- [x] `alimentation-electronique` — 🖼✅ *(refonte 11/06 validée : section source, plan de masse, tip références)*
- [x] `decouplage` — 🖼✅ *(créée et validée 11/06)*
- [x] `protection-electronique` — 🖼✅ *(créée, complétée et validée 11/06 — 6 SVG)*
- [x] `chaine-energie` — 🖼✅ *(relue 11/06 : agir explicité, lien rouge boucle-fermee, tip composants par bloc)*
- [x] `analyse-de-schema-electronique` — 🖼✅ *(enrichie et validée 11/06 ; reprise SVG zones : C3 derrière le bloc MCU → session SVG future)*
- [x] `lire-une-datasheet` — 🖼 *(validée 11/06 : flèche moteur B corrigée, restructurée en 2 parties + sommaire, lecture commentée L298N — 6 captures C29 à récolter, ancres du sommaire à clic-tester ; enrichissement futur → TODO)*
- [x] `instruments-de-mesure` — 🖼✅ *(enrichie et validée 11/06 : callout TBT, paragraphe qualité d'instrument, liens analyseur/GBF)*
- [x] `generateur-de-signaux` — 🖼✅ *(créée et validée 11/06 — capture face avant à prendre)*
- [x] `analyseur-logique` — 🖼✅ *(créée et validée 11/06, tableau C66 — capture PulseView à prendre)*
- [x] `precision-de-mesure` — 🖼✅ *(créée et validée 11/06, SVG 4 cibles)*
- [x] `multimetre` — 🖼✅ *(validée 11/06 : fils du voltmètre prolongés, secteur recadré, recroisements protection/précision, tip I = V/R)*
- [x] `oscilloscope` — 🖼✅ *(enrichie et validée 11/06 : section Brancher la sonde + SVG terre/pince, liens analyseur/GBF, trigger 2,5 V)*

## 5 · EEE — algorithme
- [x] `algorithme` (hub) — 🖼✅ *(enrichi et validé 11/06 : SVG quadriptyque quatre-regards, paragraphe pseudocode, tip Le test du récit)*
- [x] `logigramme` — 🖼✅ *(validée 11/06 : flèche de boucle du `bon` prolongée, exception programme embarqué, liens cpp, ISO 5807 ; `mauvais` laissé tel quel — arbitrage Tim)*
- [x] `machine-a-etats` — 🖼✅ *(validée 11/06 : callout mauvais resynchronisé avec le SVG, état initial ajouté [générique + bon], événement/garde remodélisés, syntaxe B→C corrigée, lien MicroPython)*
- [x] `grafcet` — 🖼✅ *(validée 11/06 : double carré initial basculé en sombre [2 SVG], bande vide compressée, nouveau SVG grafcet-divergences au Cas particulier)*
- [x] `chronogramme` — 🖼✅ *(validée 11/06 : SVG vérifiés au pixel [RAS], liens analyseur-logique, I²C, paragraphe Un statut à part)*

## 6 · EEE — microcontrôleurs : socle commun
- [x] `microcontroleur` (hub mère) — 🖼✅ *(validée 12/06 : tension logique + budget courant aux critères, recroisements choisir-le-materiel/ide/bibliotheque, lignes XIAO + Pico ajoutées [liens rouges = modules/fiche à créer, cf. TODO], nouveau SVG carte de positionnement — Pico 2 W en bande Wi-Fi+BT)*
- [x] `processeur` *(validée 12/06 : section Lire les noms de cœurs [Cortex-M/AVR/Xtensa/RISC-V, bi-cœur], liens cpp + cpp-execution ; C68 : pas de SVG dédié, couvert par le hub)*
- [x] `memoire` *(validée 12/06 : § En pratique — ordres de grandeur Uno/ESP32, RAM ressource rare, 3ᵉ zone EEPROM — renvois arduino-memoire/arduino-eeprom/micropython-stockage ; C68 : pas de SVG dédié, couvert par le hub)*
- [ ] `systeme-d-exploitation`
- [ ] `entree-sortie`
- [ ] `gpio` — 🖼 ⚠ `#B23A2E` en sombre
- [ ] `adc`
- [ ] `pwm`
- [ ] `ide`
- [ ] `bibliotheque`
- [ ] `shield`
- [ ] `interruption`
- [ ] `timer`
- [ ] `deep-sleep`
- [ ] `manipulation-de-bits` — 🖼
- [ ] `firmware` — 🖼
- [ ] `debugger-embarque`
- [ ] `bus-de-communication` — 🖼
- [ ] `uart`
- [ ] `i2c`
- [ ] `spi`
- [ ] `techno-sans-fil` — 🖼
- [ ] `wifi`
- [ ] `ble`
- [ ] `zigbee`
- [ ] `xbee`
- [ ] `lora`
- [ ] `cpp` (hub)
- [ ] `cpp-structure`
- [ ] `cpp-execution` — 🖼
- [ ] `cpp-types`
- [ ] `cpp-conditions`
- [ ] `cpp-boucles`
- [ ] `cpp-portee` — 🖼
- [ ] `cpp-logs`
- [ ] `fonction-informatique`

## 7 · EEE — Arduino (famille de référence)
- [ ] `arduino` (hub)
- [ ] `arduino-prise-en-main`
- [ ] `tinkercad`
- [ ] `arduino-serie`
- [ ] `arduino-gpio`
- [ ] `arduino-entree-tor`
- [ ] `arduino-sortie-tor`
- [ ] `arduino-capteur-numerique`
- [ ] `arduino-capteur-analogique`
- [ ] `arduino-sortie-pwm`
- [ ] `arduino-temporisation`
- [ ] `arduino-bibliotheques`
- [ ] `arduino-module`
- [ ] `arduino-shield`
- [ ] `arduino-alimentation`
- [ ] `arduino-uart`
- [ ] `arduino-i2c`
- [ ] `arduino-spi`
- [ ] `arduino-servomoteur`
- [ ] `arduino-moteur-cc`
- [ ] `arduino-moteur-pas-a-pas`
- [ ] `arduino-afficheur`
- [ ] `arduino-debug`
- [ ] `arduino-gpio-boot`
- [ ] `arduino-programmation-non-bloquante`
- [ ] `arduino-machine-a-etats`
- [ ] `arduino-eeprom`
- [ ] `arduino-interruptions`
- [ ] `arduino-timers`
- [ ] `arduino-deep-sleep`
- [ ] `arduino-pid`
- [ ] `arduino-memoire`
- [ ] `arduino-watchdog`

## 8 · EEE — simulation
- [ ] `simulation-electronique` — 🖼
- [ ] `wokwi`
- [ ] `ltspice`
- [ ] `falstad`

## 9 · EEE — ESP32
- [ ] `esp32` (hub)
- [ ] `esp32-prise-en-main`
- [ ] `esp32-arduino-core`
- [ ] `esp32-idf`
- [ ] `esp32-gpio`
- [ ] `esp32-serie`
- [ ] `esp32-wifi`
- [ ] `esp32-ble`
- [ ] `esp32-deep-sleep` — 🖼
- [ ] `esp32-freertos` — 🖼

## 10 · EEE — ESP8266
- [ ] `esp8266` (hub)
- [ ] `esp8266-prise-en-main`
- [ ] `esp8266-arduino-core`

## 11 · EEE — STM32
- [ ] `stm32` (hub) — 🖼
- [ ] `stm32-prise-en-main`
- [ ] `stm32-arduino-core`
- [ ] `stm32-cubemx` — 🖼
- [ ] `stm32-hal`
- [ ] `stm32-registres`

## 12 · EEE — Teensy
- [ ] `teensy` (hub)
- [ ] `teensy-prise-en-main`
- [ ] `teensy-arduino-core`
- [ ] `teensy-audio` — 🖼
- [ ] `teensy-usb` — 🖼

## 13 · EEE — MicroPython
- [ ] `micropython` (hub) — 🖼
- [ ] `micropython-prise-en-main`
- [ ] `micropython-simulation`
- [ ] `micropython-langage` (hub langage)
- [ ] `micropython-repl`
- [ ] `micropython-types`
- [ ] `micropython-controle`
- [ ] `micropython-fonctions`
- [ ] `micropython-modules`
- [ ] `micropython-gpio`
- [ ] `micropython-entree-tor`
- [ ] `micropython-sortie-tor`
- [ ] `micropython-capteur-numerique`
- [ ] `micropython-capteur-analogique`
- [ ] `micropython-sortie-pwm`
- [ ] `micropython-temporisation`
- [ ] `micropython-bibliotheques`
- [ ] `micropython-module`
- [ ] `micropython-shield`
- [ ] `micropython-alimentation`
- [ ] `micropython-uart`
- [ ] `micropython-i2c`
- [ ] `micropython-spi`
- [ ] `micropython-debug`
- [ ] `micropython-gpio-boot`
- [ ] `micropython-servomoteur`
- [ ] `micropython-moteur-cc`
- [ ] `micropython-moteur-pas-a-pas`
- [ ] `micropython-afficheur`
- [ ] `micropython-programmation-non-bloquante`
- [ ] `micropython-machine-a-etats`
- [ ] `micropython-stockage` *(ex-`eeprom`, renommé)*
- [ ] `micropython-interruptions`
- [ ] `micropython-timers`
- [ ] `micropython-deep-sleep`
- [ ] `micropython-pid`
- [ ] `micropython-memoire`
- [ ] `micropython-watchdog`

## 14 · EEE — Raspberry Pi
- [ ] `raspberry-pi` (hub) — 🖼
- [ ] `raspberry-pi-prise-en-main`
- [ ] `raspberry-pi-gpio` — 🖼
- [ ] `raspberry-pi-projet` — 🖼

## 15 · EEE — PIC
- [ ] `pic`

## 16 · EEE — PCB
- [ ] `pcb` — 🖼
- [ ] `kicad`

## 17 · EEE — colonne « Réalisation » (hub de branche + fiches-étape)
- [x] `embarque/index` (hub « Système embarqué », colonne 7 étapes)
- [x] `choisir-le-materiel`
- [x] `concevoir-l-electronique` *(pilote)*
- [x] `programmer-l-embarque`
- [x] `faire-communiquer` *(étape optionnelle)*
- [x] `fiabiliser-et-deboguer`

## 18 · MME — mécanique (interface)
- [ ] `schema-cinematique` — 🖼✅
- [ ] `optimisation-mecanique` — 🖼
- [ ] `impression-3d`
- [ ] `usinage`
- [ ] `soudure`
- [ ] `pla`
- [ ] `pied-a-coulisse`
- [ ] `comparateur`
- [ ] `meca/index`

## 19 · ESE — normes & sécurité produit (interface)
- [ ] `marquage-ce`
- [ ] `basse-tension`
- [ ] `emc`
- [ ] `iso-12100`
- [ ] `epi`
- [ ] `rohs`
- [ ] `reach`
- [ ] `deee`
- [ ] `conduite/ese/index`

## 20 · Index PROJ
- [ ] `conduite/proj/index`

---

## Annexe — hors parcours étudiant (vérif technique, basse priorité)
- [ ] `ressources/index` (page assets)
- [ ] Templates internes (masqués de la nav) : `templates/callouts`, `fiche-notion`, `fiche-trame`, `fiche-tuto`, `templates/index`
- ✅ **`mia/` supprimé (08/06)** — dossier `content/fiches/mia/` retiré (résidu de la fusion MIA dans EEE).

---

*Les blocs sont indépendants : tu peux suivre l'ordre, ou prendre un module entier en une session. ~213 fiches de contenu au total.*
