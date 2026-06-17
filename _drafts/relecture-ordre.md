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
- [x] `gestion-de-projet` *(relu 12/06)*
- [x] `ecoconception` *(relu 12/06)*
- [x] `securite-et-qualite` *(relu 12/06)*

## 2 · Notions & outils PROJ
- [x] `bete-a-cornes` — 🖼 ⚠ SVG à reprendre (relu 12/06 ; SVG en session dédiée)
- [x] `pieuvre` — 🖼 ⚠ SVG à reprendre + FC3 à intégrer (relu 12/06 ; SVG en session dédiée)
- [x] `fonction` *(relu 12/06)*
- [x] `fast` — 🖼 *(relu 12/06)*
- [x] `decomposition-fonctionnelle` — 🖼 ⚠ arbo 3-axes dense sur mobile (relu 12/06)
- [x] `schema-bloc-fonctionnel` *(relu 12/06 ; réciproque schema-cinematique ajoutée 13/06)*
- [x] `cahier-des-charges-fonctionnel` *(relu 12/06)*
- [x] `caracteriser-une-exigence` *(relu 12/06)*
- [x] `afnor-nfx50-151` *(stub ; relu 12/06)*
- [x] `etat-de-l-art-technique` *(relu 12/06 ; chiffres Niryo/Moveo web-corrigés)*
- [x] `mind-map` — 🖼 *(relu 12/06 ; aa PROJ/1)*
- [x] `bom` *(relu 12/06)*
- [x] `matrice-de-decision` — 🖼 *(relu 12/06 ; aa PROJ/6 retiré 13/06 — mal collé pour une matrice d'arbitrage, retour aa:[])*
- [x] `amdec` *(relu 12/06 ; aa:[] assumé)*
- [x] `jalons` — 🖼 *(relu 12/06 ; ossature 6 losanges)*
- [x] `gantt` — 🖼 *(relu 12/06)*
- [x] `wbs` — 🖼 *(relu 12/06)*
- [x] `retroplanning` — 🖼 *(relu 12/06)*
- [x] `matrice-de-risques` — 🖼 ⚠ légende station-météo (relu 12/06 ; légende recodée, clic-test rendu)
- [x] `acv-simplifiee` *(relu 12/06 ; aa ESE/1+2)*
- [x] `matrice-eco-criteres` *(relu 12/06)*
- [x] `ecodesign` — *(vérifié 08/06 : pas un doublon — notion sœur d'`ecoconception`, distinction ingénierie/design ; on garde les deux ; relu 12/06)*

## 3 · MEO — méthodes & organisation
- [x] `relation-client` *(relu 12/06 ; phases transverses, aa:[] assumé)*
- [x] `archivage-projet` *(relu 12/06 ; aa MEO/6)*
- [x] `revue-de-code` *(relu 12/06 ; aa MEO/3, lien interruption)*
- [x] `cable-management` *(relu 12/06 ; phases: integration-et-tests)*
- [x] `unite-si` *(relu 12/06 ; « unitées »→« unités », réciproque caracteriser)*
- [x] `conduite/meo/index` *(relu 12/06)*

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
- [x] `systeme-d-exploitation` *(validée 12/06 : 3 régimes en gradation — bare metal déterministe / RTOS ordonnanceur [fait FreeRTOS sous le capot de l'ESP32] / OS complet sans temps réel dur — liens firmware, esp32-freertos, raspberry-pi ; C68 : pas de SVG dédié)*
- [x] `entree-sortie` *(validée 12/06 : demi-phrase DAC vs PWM, lien interruption ; C68 : pas de SVG dédié — la rangée périphériques du SVG du hub porte la fiche)*
- [x] `gpio` — 🖼✅ *(validée 12/06 clair+sombre+smartphone : markers des 3 SVG passés en classes [rouge #E0705F et ambre #EF9F27 suivent en sombre — cause du ⚠ levée], prose drain ouvert → [[i2c]], renvoi arduino-gpio-boot [section boot + Voir aussi] ; C68 exemplaire : 3 SVG compréhension/branchement)*
- [x] `adc` — 🖼✅ *(validée 12/06 : § En pratique [Vref, 2ⁿ paliers chiffrés, saturation, résolution ≠ précision/cas ESP32], SVG quantification, renvois precision-de-mesure + tutos famille ; C68 : SVG compréhension justifié)*
- [x] `dac` *(créée et validée 12/06 — popover-court symétrique de l'adc, PWM en remplaçant habituel ; lienée depuis entree-sortie et adc)*
- [ ] `potentiometre` — 🖼 *(notion transverse [T] créée 17/06 pendant la relecture arduino-capteur-analogique : résistance à curseur = diviseur réglable ; webp triptyque réel/électrique/mécanique migrée depuis capteur-analogique ; course lin/log, rhéostat vs pot, pièges ; liée depuis capteur-analogique + réciproque niveaux-de-tension ; à valider au rendu)*
- [x] `pwm` — 🖼✅ *(validée 12/06 : rapport cyclique en gras + duty cycle, SVG 3 chronogrammes 25/50/75 % à moyenne ambre, § En pratique [fréquence selon la charge : scintillement / sifflement < 20 kHz / servo 50 Hz, PWM filtrée → dac], renvois tutos famille + chronogramme ; C68 : SVG compréhension justifié)*
- [x] `ide` *(validée 12/06 : mention capture C29 inline [IDE Arduino annoté — 1ʳᵉ capture sur une notion T, extension C29 arbitrée], renvoi prise-en-main + Voir aussi ; C68 : ni SVG ni schéma — territoire capture)*
- [x] `bibliotheque` *(validée 12/06 : « Trois réflexes » corrigé [bug de comptage], lien i2c 1ʳᵉ occurrence, note shield ↔ bibliothèque associée, renvois arduino/micropython-bibliotheques ; C68 : délégation aux captures des tutos)*
- [x] `shield` *(validée 12/06 : réciproque bibliothèque associée, distinction module/breakout → arduino-module, mention photo C29 [Arduino + shield empilés], Voir aussi complété ; C68 : photo plutôt que schéma)*
- [x] `interruption` — 🖼✅ *(validée 12/06 : piège « temps dans l'ISR » reformulé [horloge logicielle, pas matérielle], piège rebond ajouté [plusieurs ISR par appui], porte micropython-interruptions ouverte ; C68 conforme — SVG chronogramme C33)*
- [x] `timer` — 🖼✅ *(validée 12/06 : porte micropython-timers ouverte [Cas particulier + Voir aussi] — même motif que interruption ; C68 conforme — SVG dent de scie C33)*
- [x] `deep-sleep` — 🖼✅ *(réécrite et validée 12/06 : montée au calibre interruption [7,6 ko] sur demande Tim — ordres de grandeur ×10 000, domaine RTC, sources de réveil, section réveil = redémarrage ESP32 vs reprise AVR, exemple chiffré 10 mois vs 1 jour, 5 pièges [dont carte de dev → plancher mA], 3 portes famille ; SVG profil de consommation créé ; C68 : SVG compréhension)*
- [x] `manipulation-de-bits` — 🖼✅ *(validée 12/06 : fond irréprochable [RAS], phrase de transposition MicroPython ajoutée au rappel binaire ; SVG masquage pré-audité propre [dark complet, bande bit 2 alignée] ; C68 conforme)*
- [x] `ascii` — 🖼 *(créée 16/06 pendant la relecture arduino-serie : notion transverse [T] « code ASCII », `aa:[]`, SVG `caractere-vers-code` [bande caractère→code + piège '4'=52] ; liée depuis arduino-serie / cpp-types / manipulation-de-bits ; SVG + affichage du « \n » à valider au rendu)*
- [x] `firmware` — 🖼✅ *(validée 12/06 : 3 liens — réciproque systeme-d-exploitation, esp32-freertos au niveau 5, bullet MicroPython dans « selon la famille » ; SVG escalier pré-audité propre ; C68 conforme)*
- [x] `debugger-embarque` — 🖼✅ *(validée 12/06 : lien trompeur « verrou temporel »→timer corrigé [comparaison millis() + arduino-temporisation], porte micropython-debug [REPL], **SVG deux chaînes créé** [série directe vs sonde SWD/JTAG insérée] ; C67/C68 : branchement instrumenté)*
- [x] `bus-de-communication` — 🖼✅ *(validée 12/06 : marker TX→RX du SVG passé en classe [sombre], recroisement analyseur-logique [prose + Voir aussi], ouverture bus de terrain RS-485/CAN avec lien rouge volontaire [[bus-de-terrain]] [item TODO posé] ; C68 conforme — SVG topologies)*
- [x] `uart` — 🖼✅ *(validée 12/06 : gonflée sur demande Tim — 2 SVG créés [branchement TX/RX croisés + GND, chronogramme de trame], § Sur le fil, piège TX-sur-TX, max explicite « deux équipements, pas plus », portes arduino-uart/micropython-uart ; pas de terminaison à ces distances)*
- [x] `i2c` — 🖼✅ *(validée 12/06 : gonflée — 2 SVG créés [branchement maître + 2 esclaves avec pull-ups ≈ 4,7 kΩ, chronogramme START/adresse/ACK/STOP], § Sur le fil, lien réciproque [[gpio|drain ouvert]], max = capacité du bus [~dizaine] vs centaine d'adresses théoriques, portes arduino-i2c/micropython-i2c)*
- [x] `spi` — 🖼✅ *(validée 12/06 : gonflée — 2 SVG créés [branchement faisceau partagé + CS dédiés, chronogramme CS/SCK/MOSI-MISO full-duplex], § Sur le fil, piège mode SPI [datasheet → bibliothèque], max = broches CS disponibles, portes arduino-spi/micropython-spi)*
- [x] `techno-sans-fil` — 🖼✅ *(validée 12/06 : marker des axes passé en classe .aro [4ᵉ récidive markers], recroisement deep-sleep [bullet conso + Voir aussi], § Trois précisions de paysage [XBee = gamme de modules, bande 2,4 GHz partagée, LoRa 868 MHz → portée] ; C68 conforme — SVG carte portée×débit)*
- [x] `wifi` — ✅ *(validée 12/06 : piège pics de courant à l'émission [centaines de mA → alimentation-electronique], porte esp32-wifi ; C68 : pas de SVG, couvert par la carte du hub)*
- [x] `ble` — ✅ *(validée 12/06 : distinction Bluetooth classique/BLE [pas de son] au popover, porte esp32-ble ; C68 : couvert par le hub)*
- [x] `zigbee` — ✅ *(validée 12/06 : coordinateur [box/dongle] ajouté ; C68 : couvert par le hub)*
- [x] `xbee` — ✅ *(validée 12/06 : RAS — marque/module assumé, pilotage UART ; C68 : couvert par le hub)*
- [x] `lora` — ✅ *(validée 12/06 : distinction LoRa/LoRaWAN [modulation point-à-point vs protocole réseau TTN], lien deep-sleep ; C68 : couvert par le hub)*
- [x] `cpp` (hub) — ✅ *(validé 12/06 : pont C57 vers micropython-langage [prose + Voir aussi] ; chaîne des prerequis vérifiée conforme à l'ordre 1→7 du parcours)*
- [x] `cpp-structure` — ✅ *(validée 12/06 : RAS — le ternaire de son sketch est désormais expliqué dans cpp-conditions)*
- [x] `cpp-execution` — 🖼✅ *(validée 12/06 : RAS fond ; SVG cycle pré-audité propre [markers en classes] ; capture moniteur série déjà mentionnée inline)*
- [x] `cpp-types` — ✅ *(validée 12/06 : RAS — tableau AVR/ARM exact, pièges débordement/division entière justes)*
- [x] `cpp-conditions` — ✅ *(validée 12/06 : § « L'opérateur ternaire » ajouté — trou pédagogique repéré en croisant avec cpp-structure qui l'utilisait sans explication)*
- [x] `cpp-boucles` — ✅ *(validée 12/06 : RAS — tableaux utilisés sans fiche dédiée, explication inline suffisante, item BACKLOG cpp-tableaux posé)*
- [x] `cpp-portee` — 🖼✅ *(validée 12/06 : étiquettes du SVG corrigées [(etat)→(compteur local)/(compteur global), raccord valeurs 1-1-1/1-2-3] ; SVG pré-audité propre par ailleurs)*
- [x] `cpp-logs` — ✅ *(validée 12/06 : message de l'exercice 1 corrigé [:3:3 before 'delay' — le token suivant est delay, pas digitalWrite], corrigé nettoyé de sa rustine ; capture panneau d'erreur déjà mentionnée inline)*
- [x] `fonction-informatique` — ✅ *(validée 12/06 : renvoi portée pointé directement sur cpp-portee [au lieu du hub cpp] ; désambiguïsation analyse fonctionnelle déjà en place)*

## 7 · EEE — Arduino (famille de référence)
- [x] `arduino` (hub) — 🖼 *(relu 15/06 : tutoriels gardés en tête [fonction hub], « par où commencer » → prise-en-main, plafond AVR ajouté, radio restreinte au panorama, FreeRTOS « est traité » ; 2 images webp posées [photo Uno R3 + pinout, |420 / |600, légendes centrées] ; CSS — centrage images global + légende-figure)*
- [x] `arduino-prise-en-main` — 🖼✅ *(relu + médias intégrés 15/06 : C71 prix retiré, AA PROJ/5 ajouté, piège clone Nano Old Bootloader, lien arduino-serie, chemin téléchargement IDE + don optionnel, captures scindées type-de-carte/port + pilote CH340 [sparks.gogo.co.nz] ; 7 médias intégrés à plat [6 captures + GIF Blink + vidéo CH340, 1re vidéo du wiki] ; chemins migrés en dossier `arduino-prise-en-main/` le 16/06 — C73)*
- [x] `tinkercad` — 🖼✅ *(relu + médias 16/06 : symptôme bouton corrigé [pull-up → LED jamais allumée], mode Scratch écarté + image de bascule, placeholders C29, recroisement simulation-electronique + wokwi wikilisés, 4 captures intégrées ; casse git Creer→creer résolue ; C68 = territoire-capture)*
- [x] `arduino-serie` — ✅ *(faite 16/06, validée au rendu 17/06 ; lien vers la notion `ascii` au warning `Serial.read()` [piège caractère/nombre '4'=52])*
- [x] `arduino-gpio` — 🖼✅ *(relu + médias 16/06 : diagnostic pull-up corrigé [LED toujours allumée = liaison GND / bouton tactile 4 pattes], Nano « D2 »→D0–D13, phases +integration-et-tests, pinout du hub réutilisé étape 1 [C76] + schéma de montage ; C68 territoire-capture)*
- [x] `arduino-entree-tor` — 🖼✅ *(relu + médias + code commenté 16/06 : pull-up & anti-rebond corrects [C44], SVG rebond créé [chronogramme lecture brute → fenêtre 30 ms → état stable], montage gpio réutilisé [C76], phases +integration, style [insensible / fait tomber] ; code commenté débutant + encart « Comment lire ce code » → C77)*
- [x] `arduino-sortie-tor` — 🖼✅ *(relu + médias + code commenté 16/06 : fond OK ; 2 SVG créés [transistor-bas-cote zoom NPN + montage carte d'interfaces], photo de montage proscrite → C78 ; code commenté C77 ; phases +integration, « relais chinois »→« bon marché » ; ⚠ SVG transistor à reprendre avant mise en ligne)*
- [x] `arduino-capteur-numerique` — 🖼✅ *(relu + médias + code commenté 17/06 : pulseIn timeout 1 s [pas indéfini], vitesse de rotation = comptage d'impulsions [renvoi interruption/timer], C71 prix retiré, C78 schéma branchement SVG [remplace placeholder photo], C68 chronogramme Trig/Echo, C77 code loop commenté + encart + renvoi exemple, principe temps de vol [how-ultrasonic-sensor-works.webp en intro étape 4] + nouvelle **étape 2 capteur IR à seuil** [FC-51, digitalRead actif-bas — démontre la famille niveau logique, contraste seuil/mesure + anti-rebond inutile vs bouton], phases +integration, liens rouges [[filtrage]] ×2 [fiche transverse à créer → TODO] ; 2 SVG + webp + GIF principe IR validés au rendu)*
- [x] `arduino-capteur-analogique` — 🖼✅ *(relu + médias + code commenté 17/06 : **erreur Uno R4 corrigée** [défaut 10 bits / 0-1023, vérifié docs Arduino — table + piège inversé reformulés], warning AREF [EXTERNAL avant 1er analogRead → risque ADC], note TMP36 [offset 0,5 V], C77 snippets conversion commentés + encart « Comment lire ce code », 2 SVG créés [branchement-potentiometre + pont-diviseur-ldr, bug masse non connectée corrigé — bloc h=265], liens [[adc]] / [[precision-de-mesure]] / [[filtrage]]×2, phases +integration, capture traceur série [placeholder à déposer] ; notion potentiometre extraite [webp triptyque migrée])*
- [x] `arduino-sortie-pwm` — 🖼✅ *(relu + médias + code commenté 17/06 : broches PWM par carte [Uno/Mega/Nano/R4] + réflexe pinout/doc constructeur pour MCU hors liste, note R4 analogWrite [0-255 défaut, analogWriteResolution en option], C77 boucle fondu commentée, C78 SVG branchement-led-pwm créé [remplace placeholder photo] + SVG potentiomètre ressorti dans l'Exemple, oscillo = capture C29, liens [[potentiometre]] / [[dac]] / [[arduino-capteur-analogique]] / [[pwm]], phases +integration ; **C79 appliquée** — chaque bloc de code a son montage)*
- [x] `arduino-temporisation` — 🖼✅ *(relu 17/06 : callout `[!danger]` — delay() aveugle aux événements → processus critique [1er danger du module] ; 2 SVG créés [delay-vs-millis chronogramme de principe + cadences-paralleles 3 pistes, C79] ; encart C77 « Comment lire ce code » sur l'Exemple + câblage renvoyé à entree-tor [C79] ; note R4 sur le piège int [Cortex-M4 32 bits → ~24,8 j, vérifié source] ; nuance vitesse loop ; liens [[arduino-capteur-analogique]]/[[arduino-serie]] ; verrou temporel C44 RAS [détection de front])*
- [x] `arduino-bibliotheques` — 🖼✅ *(relu 17/06 : SVG « couches d'abstraction » créé [sketch → bibliothèque → Wire/I2C → composant, C68] ; SVG branchement servo SG90 créé dans `arduino-servomoteur/` [4a, cross-dossier, remplace la photo de câblage — C78] ; placeholder restant = GIF/photo de résultat ; C77 léger sur le code servo ; maillage EEPROM/SoftwareSerial/Stepper/EAT ; phase concept ajoutée ; « 2018 » → intemporel)*
- [x] `arduino-module` — 🖼✅ *(relu 17/06 : **erreur de fond corrigée** — pull-ups I2C trop faibles = bus qui ne descend plus à 0, pas « montée » ; **étape 4 revulgarisée** [résistance/pull-up, métaphore tire-vers-le-haut, jargon open-drain retiré] ; spec DHT11 corrigée [1 mesure/s, vérifié datasheet] + code C77 ; 2 SVG créés [branchement-dht11 C78 + pullups-paralleles refait en avant/après symboles de résistance] ; capture recadrée identification broches ; maillage moteur-cc/afficheur ; phase integration-et-tests ; C71 « grand public » / « sans marque » [AliExpress retiré])*
- [x] `arduino-shield` — 🖼✅ *(relu 17/06 : **exemple refait piloté par bibliothèque** [`AFMotor` / `AF_DCMotor` / `run(FORWARD/RELEASE/BACKWARD)` — zéro broche, pont en H renvoyé à moteur-cc] ; **produits démêlés** [L293D « v1 » / lib 1.x vs Adafruit V2 TB6612-I2C ; « compatible L298 » faux retiré, graphie déprécié·e·s retirée ; tableau → « Motor Shield Arduino officiel (L298P) »] ; 2 photos déposées [empilage + montage L293D] ; C71 « avant de t'en servir » / « investissement » reformulé ; lien EAT ; phases concept+dossier-technique)*
- [x] `arduino-alimentation` — 🖼✅ *(relu 17/06 : **régulateur de carte corrigé** — NCP1117 LDO sur Uno R3 [pas LM7805], ISL854102 à découpage sur R4 [6-24 V], vérifié docs — tableau + note étape 3 + 3 pièges [5V sur Vin, 12V sur 5V, régulateur qui chauffe + R4 ne chauffe pas] ; SVG `alimentation-separee` créé [alim séparée servo + GND commun, C68/C79] ; C77 code servo ; PSU glosé + BOM « nomenclature » ; renvoi [[alimentation-electronique]] étape 2 ; lien EAT ; aa PROJ/5 ; phases concept+PoC+dossier-technique+integration. **Clic-test rendu** : SVG alim-separee. **Capture étape 3 → TODO** [Uno + 3 voies d'alim])*
- [x] `arduino-uart` — 🖼 *(relu 17/06 : popover lié [[uart]] [1ʳᵉ occurrence], note Uno R4 [Serial/Serial1 indépendants → SoftwareSerial inutile pour un module, vérifié docs Arduino] + callout [!danger] conflit UART/USB R3 [échec de téléversement, erreur classique en TP], C78 SVG branchement croisé TX/RX [remplace placeholder photo], C79 SVG « pont série » [PC↔Arduino↔module], C77 encart « Comment lire ce code » sur la boucle pont + back-ref Cas b + commentaires délimitation de trame récepteur, C71 prix/AliExpress retiré [adaptateur USB-série], phases +integration-et-tests, Exemple renvoi câblage étape 2 + relevé deux moniteurs reformulé. **Clic-test rendu** : 2 SVG [cablage-croise + pont-serie], clair/sombre/mobile)*
- [x] `arduino-i2c` — 🖼 *(relu 17/06 : popover lié [[i2c]], C78 SVG branchement-i2c [module sur A4/A5 + pull-ups vers VCC, intégrées au module signalées] remplace placeholder photo, C79 renvoi câblage dans l'Exemple, C77 scanner commenté + encart « Comment lire ce code » [mécanisme ACK endTransmission()==0] + BMP280 commenté, C65 « Soufflez/Faites » → infinitif, note R4 [pas de pull-ups montées + Qwiic = Wire1 3,3 V au Cas particulier], **erreur corrigée** Mega 2560 « plusieurs bus I2C » → 1 seul TWI [retiré, R4 WiFi à la place], phases +concept, « BMP280 chinois » → « génériques ». **Clic-test rendu** : SVG branchement-i2c, clair/sombre/mobile)*
- [x] `arduino-spi` — 🖼 *(relu 17/06 : popover lié [[spi]], C78 SVG branchement-sd [module microSD : SCK/MOSI/MISO/CS sur D13/D11/D12/D10 + VCC/GND] remplace placeholder photo, C79 renvois câblage [exemple SD + datalogger], C77 code SD commenté + encart « Comment lire ce code » [cycle open/write/close/relire, close() obligatoire] + datalogger commenté [cadence non bloquante → arduino-temporisation], phases +integration-et-tests, lien [[potentiometre]]/[[arduino-capteur-analogique]] au datalogger, « SoftwareSPI » → « SPI logiciel (p. ex. SoftSPI) ». Specs R3/R4/Mega/ESP32 vérifiées exactes. **Clic-test rendu** : SVG branchement-sd, clair/sombre/mobile)*
- [x] `arduino-servomoteur` — 🖼 *(relu 17/06 : C71 colonne Coût retirée + usage MG996R recentré « articulations de bras / pinces lourdes / axes sous contrainte » [drone hors-scope retiré], C78 embed du branchement-sg90.svg existant [remplace placeholder photo], C79 renvoi câblage Exemple, C77 encart « Comment lire ce code » [logique sens ±1 + map vitesse] + commentaires butées, C65 2× « vous » → « on », phases +concept, lien [[potentiometre]]/[[arduino-capteur-analogique]] + réciproque [[arduino-servomoteur]] posée dans potentiometre, nuance courant [SG90 centaines mA / MG996R >1 A au calage]. Specs SG90/MG90S/MG996R, Timer1→PWM D9/D10, 12 servos max, PCA9685, ESP32Servo exactes. **Clic-test rendu** : branchement-sg90 + retour-position [déjà créés], clair/sombre/mobile. **AJOUT 17/06** : section « Servos à retour de position » [Lecture 1 seule : retour analogique = tension du potentiomètre interne sur A0, analogRead + calibration map ; usages confirmer arrivée / détecter blocage / bras 3 axes ; variante PWM Parallax Feedback 360 (Hall, pulseIn) signalée sans la confondre avec un pot ; SVG retour-position ; liens [[potentiometre]]/[[adc]]/[[arduino-pid]]] — section à relire par Tim)*
- [x] `arduino-moteur-cc` — 🖼 *(relu 17/06 : C78 SVG branchement-l298n créé [IN1→D12 / IN2→D11 / ENA→D3, OUT1/OUT2→moteur, alim externe 9-12 V, masses communes] remplace placeholder photo, C79 + pull-up câblage Exemple [L298N étape 2 + potentiomètre A0 + bouton D2/GND INPUT_PULLUP, pas de résistance externe] + réciproque [[arduino-moteur-cc]] dans potentiometre, C77 encart « Comment lire ce code » sur l'anti-rebond non bloquant [dernierBouton/etatStable, front descendant], C71 « économique » / « très bon marché » retirés du tableau driver, phases +concept. Specs L298N/TB6612FNG/DRV8833/L9110S + fréquences PWM exactes ; logique INPUT_PULLUP vérifiée juste. BACKLOG : notion transverse [[pont-en-h]] candidate. **Clic-test rendu** : SVG branchement-l298n, clair/sombre/mobile)*
- [x] `arduino-moteur-pas-a-pas` — 🖼 *(relu 17/06 : C71 prix € retirés [2 lignes Coût + colonne Coût du tableau ; gardé « fourni en kit » / « imprimante 3D, CNC »], C78 SVG branchement-28byj48 créé [28BYJ-48 + ULN2003 : IN1-IN4→D8-D11, alim +/−, connecteur 5 broches] remplace placeholder photo, C79 + pull-up câblage Exemple précisé [bouton entre D2 et GND, pas de résistance externe], C77 encart « Comment lire ce code » [anti-rebond renvoi moteur-cc + piège step() bloquant : appui manqué pendant le mouvement], phases +concept, lien trimmer [[potentiometre]] au piège Vref A4988 [pas de réciproque — trimmer driver]. Specs 28BYJ-48/NEMA17/A4988/DRV8825/TMC2209, formule Vref, ENABLE actif-bas exactes ; INPUT_PULLUP juste. **Clic-test rendu** : SVG branchement-28byj48, clair/sombre/mobile)*
- [x] `arduino-afficheur` — 🖼 *(relu 17/06 : C71 colonne Coût + « ~5 € » (×2) retirés [ligne E-paper du tableau remise d'aplomb], C78 SVG branchement-i2c créé [Afficheur I2C OLED/LCD : VCC→ 5V, GND, SDA→A4, SCL→A5 ; un seul SVG couvre les deux types] remplace placeholder photo, C77 2 encarts « Comment lire ce code » [buffer OLED → display() obligatoire ; LCD sans buffer → espaces/clear()], C79 renvoi « même bus qu'à l'étape 2 » à l'Exemple, phases +integration-et-tests. Specs SSD1306 0x3C/0x3D, LCD 0x27/0x3F, BMP280 0x76, deps Adafruit GFX/BusIO, U8g2 UTF-8, setTextSize(3)→7 car. exactes. Convention candidate « exemple piloté par bibliothèque » = 2ᵉ occurrence (BACKLOG). **Clic-test rendu** : SVG branchement-i2c, clair/sombre/mobile)*
- [x] `arduino-debug` — 🖼 *(relu 17/06 : fiche déjà propre [specs __DATE__/pulseIn/0,0343/while(!Serial)/9600≈1ms exactes, registre on, phases PoC+integration, pas de prix] — **ENRICHISSEMENT pédagogique** (demande Tim : élèves font bcp d'erreurs de base) : C68 SVG « ou-est-le-probleme » [triage ça compile ? → ça fait ce qu'on veut ? → bug logique/dichotomie/matériel ; markers en classe C69] + 3 sections : « Comprendre où est le problème » (intro+SVG), B « Quand ça ne compile pas » [lire le message : 1er message, ligne d'avant, was not declared/scope, accolade, no matching function, caractères invisibles], A « Quand ça compile mais ne fait pas ce qu'on veut » [12 pièges logique : =/==, Serial.begin oublié, débit moniteur, pinMode, INPUT_PULLUP inversé, division entière, millis dans int, float ==, delay bloquant, index hors borne, var non initialisée, setup/loop mal orthographiés]. Liens [[cpp]]/[[arduino-gpio]] ajoutés. Capture IDE debug = C29 (placeholder maintenu → TODO). **À relire par Tim** (gros ajout). **Clic-test rendu** : SVG ou-est-le-probleme, clair/sombre/mobile)*
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

## 9bis · EEE — XIAO ESP32-S3 (module créé 13/06, à relire au rendu)
- [ ] `xiao-esp32-s3` (hub) — 🖼 *(créé 13/06 ; 4 SVG : brochage, variantes, extendeur-i2c, antenne)*
- [ ] `xiao-prise-en-main` — 🖼 *(créé 13/06 ; SVG bootloader)*
- [ ] `xiao-alimentation` — 🖼 *(créé 13/06 ; SVG paths)*
- [ ] `xiao-sense` — 🖼 *(créé 13/06 ; SVG peripheriques)*

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
- [x] `schema-cinematique` — 🖼✅ *(relue 13/06 : RAS fond ; réciproque [[schema-bloc-fonctionnel]] ajoutée)*
- [x] `optimisation-mecanique` — 🖼 *(relue 13/06 : RAS — pointeur C58 propre ; SVG générique render à valider)*
- [x] `impression-3d` *(relue 13/06 : RAS — fiche procédé, territoire photo C29)*
- [x] `usinage` *(relue 13/06 : RAS — fiche procédé)*
- [x] `soudure` *(relue 13/06 : RAS — dual-tag eee/mme assumé)*
- [x] `pla` *(relue 13/06 : RAS — fiche matériau)*
- [x] `pied-a-coulisse` — 🖼 *(relue 13/06 : SVG mesures créé [becs ext/int + jauge], recroisement precision-de-mesure)*
- [x] `comparateur` — 🖼 *(relue 13/06 : SVG battement créé, « jeu angulaire »→« jeu », amorce + lien precision-de-mesure)*
- [x] `meca/index` *(relue 13/06 : registre « on » tranché [sommaire d'interface], pas de champ type)*

## 19 · ESE — normes & sécurité produit (interface)
- [x] `marquage-ce` *(relu 13/06 : RAS — pointeur C58 propre ; réciproque caracteriser-une-exigence ajoutée)*
- [x] `basse-tension` *(relu 13/06 : RAS — C58 propre ; réciproque caracteriser-une-exigence ajoutée)*
- [x] `emc` *(relu 13/06 : C58 propre ; pont protection-electronique + decouplage ajouté — immunité côté matériel)*
- [x] `iso-12100` *(relu 13/06 : RAS — C58 propre)*
- [x] `epi` *(relu 13/06 : RAS — C58 propre, délégation atelier/fablab)*
- [x] `rohs` *(relu 13/06 : RAS — C58 propre ; réciproque caracteriser-une-exigence ajoutée)*
- [x] `reach` *(relu 13/06 : RAS — C58 propre)*
- [x] `deee` *(relu 13/06 : RAS — C58 propre)*
- [x] `conduite/ese/index` *(relu 13/06 : registre « on » [sommaire d'interface] ; RAS)*

## 20 · Index PROJ
- [x] `conduite/proj/index` *(relu/rempli 12/06 — sommaire par grappe, 30 fiches)*

---

## Annexe — hors parcours étudiant (vérif technique, basse priorité)
- [ ] `ressources/index` (page assets)
- [ ] Templates internes (masqués de la nav) : `templates/callouts`, `fiche-notion`, `fiche-trame`, `fiche-tuto`, `templates/index`
- ✅ **`mia/` supprimé (08/06)** — dossier `content/fiches/mia/` retiré (résidu de la fusion MIA dans EEE).

---

*Les blocs sont indépendants : tu peux suivre l'ordre, ou prendre un module entier en une session. ~213 fiches de contenu au total.*
