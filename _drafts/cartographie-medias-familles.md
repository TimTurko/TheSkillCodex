# Cartographie des médias des familles MCU

> Document de pilotage interne (`_drafts/`, hors site). Inventaire produit le 19/06 (PC perso).
> **But : recenser** les visuels à produire (SVG à dessiner + captures à shooter) pour amener les
> familles MCU à la densité du gabarit **Arduino**. On ne produit pas les visuels ici, on les liste.

## Principe directeur (densité modulée, pilotée par C47)

Cible d'une fiche famille = le **spécifique carte/outil**, pas un décalque de tous les SVG Arduino :
**brochage** de la carte, **câblage aux broches de cette carte** (C78 schéma SVG pas photo ; C80
broches étiquetées comme dans le code), **captures de l'IDE/outil propre** (C29). Le conceptuel
**déjà couvert ailleurs n'est pas re-illustré** (C47) : chronogrammes de bus dans
`[[uart]]`/`[[i2c]]`/`[[spi]]`, sawtooth dans `[[timer]]`, boucle fermée dans `[[asservissement]]`,
profil de veille dans `[[deep-sleep]]`, etc. Un SVG conceptuel **propre à la famille** (Wi-Fi
STA/AP, ordonnancement FreeRTOS) reste légitime.

Deux constats vérifiés (calibrage 19/06) : (1) les **placeholders C29 sont déjà inline** dans les
fiches (modules construits sous C29/C49) — les captures sont « à shooter en place », la production
neuve porte d'abord sur les **SVG** ; (2) plusieurs placeholders de câblage MicroPython sont en
**« photo »** (pré-C78) et doivent devenir des **schémas SVG aux broches Pico**.

## Synthèse chiffrée

| Famille | Prio | Fiches | SVG existants | SVG à dessiner | Photos carte | Captures / pinouts |
| --- | --- | --- | --- | --- | --- | --- |
| ESP32 | 1 | 10 | 2 | ~4 | 1 | ~7 |
| MicroPython | 1 | 37 | 1 | ~16 | 1 | ~7 |
| Raspberry Pi | 1 | 4 | 3 | ~2 | 1 | ~3 |
| STM32 | 2 | 6 | 2 | ~1 (option) | 1 | ~6 |
| Teensy | 2 | 5 | 2 | 0 | 1 | ~5 |
| ESP8266 | 2 | 3 | 0 | ~1 | 1 | ~2 |
| XIAO | — | 4 | 7 | 0 (audit) | — | à vérifier |
| **Total** | | | | **~24 SVG** | **6 photos** | **~30 captures** |

---

## Tableau unique des visuels à produire

> Chemin = dossier où ranger l'image (C73 : un dossier par fiche). `<x>` = extension selon le
> format (`.webp`/`.png` pour capture/photo, `.svg` pour schéma).

| Fiche | Nom de l'image | Chemin | Description détaillée de l'image | Type |
| --- | --- | --- | --- | --- |
| `esp32` (hub) | `photo-devkit.<x>` | `/ressources/img/esp32/` | Photo de dessus d'une carte ESP32 DevKit v1 (38 broches), connecteur USB et bouton EN/BOOT visibles. | photo |
| `esp32-gpio` | `brochage.svg` | `/ressources/img/esp32-gpio/` | Brochage ESP32 annoté : numéros GPIO, broches **entrée seule** (34/35/36/39), **strapping** (0/2/5/12/15), **Flash** (6-11, à ne pas toucher), zones ADC1/ADC2, TX/RX. Code couleur danger sur les broches à éviter. | svg |
| `esp32-gpio` | `montage-led-bouton.svg` | `/ressources/img/esp32-gpio/` | Câblage : LED + résistance sur GPIO16 (sortie), bouton sur GPIO4 en INPUT_PULLUP vers GND. Broches étiquetées comme le code (C80). | svg |
| `esp32-wifi` | `sta-vs-ap.svg` | `/ressources/img/esp32-wifi/` | Schéma de principe : mode **station** (ESP32 rejoint une box existante) vs mode **point d'accès** (ESP32 crée son propre réseau auquel un client se connecte). Option. | svg |
| `esp32-ble` | `roles-ble.svg` | `/ressources/img/esp32-ble/` | Schéma des rôles BLE : périphérique/serveur exposant services + caractéristiques, central/client qui scanne et se connecte. Option. | svg |
| `esp32-prise-en-main` | `boards-manager.<x>` | `/ressources/img/esp32-prise-en-main/` | IDE 2.x, Boards Manager, paquet « esp32 by Espressif » installé, avec l'URL du gestionnaire renseignée dans les préférences. | capture |
| `esp32-prise-en-main` | `selection-carte.<x>` | `/ressources/img/esp32-prise-en-main/` | Sélecteur de carte réglé sur « ESP32 Dev Module » et port COM sélectionné. | capture |
| `esp32-serie` | `moniteur-serie.<x>` | `/ressources/img/esp32-serie/` | Moniteur série de l'IDE 2.x, baud 115200, lignes « Valeur du capteur : XXX » qui défilent + sélecteur de baud rate. | capture |
| `esp32-serie` | `commandes-led.<x>` | `/ressources/img/esp32-serie/` | Moniteur série : alternance « capteur = XXX » toutes les 500 ms et réponses « LED allumee » / « LED eteinte » après saisie de ON/OFF. | capture |
| `esp32-wifi` | `page-web-ip.<x>` | `/ressources/img/esp32-wifi/` | Navigateur affichant la page « ESP32 » (liens Allumer/Eteindre) côte à côte avec le moniteur série montrant l'adresse IP attribuée. | capture |
| `esp32-ble` | `scanner-ble.<x>` | `/ressources/img/esp32-ble/` | Application nRF Connect (mobile) listant le périphérique BLE annoncé par l'ESP32. | capture |
| `esp32-idf` | `idf-build.<x>` | `/ressources/img/esp32-idf/` | VS Code + extension ESP-IDF, terminal montrant un `idf.py build` terminé avec succès. Option. | capture |
| `micropython` (hub) | `photo-pico.<x>` | `/ressources/img/micropython/` | Photo de dessus d'un Raspberry Pi Pico 2 (broches GP visibles, port USB, bouton BOOTSEL). | photo |
| `micropython-gpio` | `brochage-pico.<x>` | `/ressources/img/micropython-gpio/` | Brochage (pinout) officiel du Raspberry Pi Pico 2 : numéros GP, broches ADC (GP26/27/28), broches par défaut UART/I2C/SPI, LED GP25, rails 3,3 V / GND. | capture |
| `micropython-gpio` | `montage-led-bouton.svg` | `/ressources/img/micropython-gpio/` | Câblage : LED + résistance sur GP15, bouton sur GP14 en PULL_UP vers GND. Broches étiquetées comme le code. | svg |
| `micropython-entree-tor` | `montage-bouton.svg` | `/ressources/img/micropython-entree-tor/` | Bouton sur GP en PULL_UP vers GND (entrée TOR avec anti-rebond). | svg |
| `micropython-sortie-tor` | `montage-relais.svg` | `/ressources/img/micropython-sortie-tor/` | Sortie de puissance : transistor/module relais piloté depuis un GP, charge + alimentation séparée, GND commun. | svg |
| `micropython-capteur-numerique` | `montage-capteur.svg` | `/ressources/img/micropython-capteur-numerique/` | Câblage d'un capteur numérique (ex. capteur IR ou DHT) sur un GP du Pico, alimentation 3,3 V. | svg |
| `micropython-capteur-analogique` | `montage-adc.svg` | `/ressources/img/micropython-capteur-analogique/` | Potentiomètre (ou capteur résistif + diviseur) sur l'entrée analogique GP26 (ADC0). | svg |
| `micropython-sortie-pwm` | `montage-led-pwm.svg` | `/ressources/img/micropython-sortie-pwm/` | LED pilotée en PWM sur un GP (intensité), avec résistance série. | svg |
| `micropython-module` | `montage-module.svg` | `/ressources/img/micropython-module/` | Câblage d'un module (ex. DHT ou module I2C) sur le Pico : alimentation, signal/bus, GND commun. | svg |
| `micropython-uart` | `branchement-uart.svg` | `/ressources/img/micropython-uart/` | Liaison UART : TX/RX **croisés** Pico ↔ périphérique, GND commun. Broches GP du code. | svg |
| `micropython-i2c` | `branchement-i2c.svg` | `/ressources/img/micropython-i2c/` | Bus I2C : SDA/SCL du Pico + résistances de tirage, périphérique I2C, GND commun. | svg |
| `micropython-spi` | `branchement-spi.svg` | `/ressources/img/micropython-spi/` | Bus SPI : SCK/MOSI/MISO + CS du Pico vers un périphérique (ex. carte microSD). | svg |
| `micropython-servomoteur` | `branchement-servo.svg` | `/ressources/img/micropython-servomoteur/` | Servo : signal sur GP15, rouge sur +5 V (VBUS ou alim externe), marron sur GND commun. | svg |
| `micropython-moteur-cc` | `branchement-pont-h.svg` | `/ressources/img/micropython-moteur-cc/` | Moteur CC via pont en H (L298N/TB6612) piloté depuis des GP, alimentation moteur séparée, GND commun. | svg |
| `micropython-moteur-pas-a-pas` | `branchement-stepper.svg` | `/ressources/img/micropython-moteur-pas-a-pas/` | Moteur pas-à-pas via driver (ULN2003 ou A4988) piloté depuis des GP, alimentation dédiée. | svg |
| `micropython-afficheur` | `branchement-oled.svg` | `/ressources/img/micropython-afficheur/` | Afficheur OLED I2C (SSD1306) sur SDA/SCL du Pico, alimentation 3,3 V. | svg |
| `micropython-temporisation` | `sleep-vs-ticks.svg` | `/ressources/img/micropython-temporisation/` | Schéma de principe : `time.sleep()` bloquant vs `time.ticks_ms()` non bloquant (deux frises temporelles). | svg |
| `micropython-programmation-non-bloquante` | `frise-taches.svg` | `/ressources/img/micropython-programmation-non-bloquante/` | Frise de plusieurs tâches cadencées en parallèle sans `sleep` bloquant (jumeau `arduino-programmation-non-bloquante`). | svg |
| `micropython-prise-en-main` | `thonny-firmware.<x>` | `/ressources/img/micropython-prise-en-main/` | Thonny : installation du firmware MicroPython `.uf2` sur le Pico (boîte de dialogue d'installation de l'interpréteur). | capture |
| `micropython-prise-en-main` | `thonny-interpreteur.<x>` | `/ressources/img/micropython-prise-en-main/` | Thonny : sélection de l'interpréteur « MicroPython (Raspberry Pi Pico) » + port. | capture |
| `micropython-prise-en-main` | `thonny-run.<x>` | `/ressources/img/micropython-prise-en-main/` | Thonny : un premier programme `.py` lancé, LED qui clignote, sortie au Shell. | capture |
| `micropython-simulation` | `wokwi-pico.<x>` | `/ressources/img/micropython-simulation/` | Simulation Wokwi d'un montage Pico + MicroPython (carte + composants + code). | capture |
| `micropython-repl` | `shell-repl.<x>` | `/ressources/img/micropython-repl/` | Panneau Shell de Thonny, invite `>>>`, une expression évaluée et un `led.on()` qui agit en direct. | capture |
| `micropython-repl` | `traceur-thonny.<x>` | `/ressources/img/micropython-repl/` | Vue Plotter de Thonny traçant une grandeur qui varie (courbe qui ondule au fil des `print`). | capture |
| `raspberry-pi` (hub) | `photo-pi.<x>` | `/ressources/img/raspberry-pi/` | Photo de la carte Raspberry Pi utilisée en cours, header GPIO 40 broches visible. | photo |
| `raspberry-pi-gpio` | `brochage-40-broches.svg` | `/ressources/img/raspberry-pi-gpio/` | Brochage du header 40 broches : numérotation **BCM** et **board**, rails 3,3 V / 5 V / GND, broches I2C/SPI/UART repérées. | svg |
| `raspberry-pi-gpio` | `montage-led-bouton.svg` | `/ressources/img/raspberry-pi-gpio/` | Câblage LED + bouton aux broches du Pi (numérotation BCM, `gpiozero`), résistances. Broches comme le code. | svg |
| `raspberry-pi-prise-en-main` | `imager.<x>` | `/ressources/img/raspberry-pi-prise-en-main/` | Raspberry Pi Imager : choix de l'OS + réglages avancés (activation SSH, Wi-Fi, nom d'hôte). | capture |
| `raspberry-pi-prise-en-main` | `raspi-config.<x>` | `/ressources/img/raspberry-pi-prise-en-main/` | `raspi-config` dans un terminal : menu de configuration des interfaces (I2C/SPI/SSH). | capture |
| `raspberry-pi-prise-en-main` | `ssh-headless.<x>` | `/ressources/img/raspberry-pi-prise-en-main/` | Session SSH connectée depuis un PC (`ssh pi@…`), invite shell du Pi affichée. | capture |
| `stm32` (hub) | `photo-carte.<x>` | `/ressources/img/stm32/` | Photo d'une carte STM32 de cours (Nucleo ou « Blue Pill »), connecteur de programmation visible. | photo |
| `stm32` (hub) | `brochage.<x>` | `/ressources/img/stm32/` | Brochage (pinout) officiel de la carte STM32 utilisée, fonctions des broches repérées. | capture |
| `stm32-prise-en-main` | `cubeide-install.<x>` | `/ressources/img/stm32-prise-en-main/` | STM32CubeIDE (ou Arduino core STM32) : écran de création de projet / sélection de la carte. | capture |
| `stm32-prise-en-main` | `televersement-stlink.<x>` | `/ressources/img/stm32-prise-en-main/` | Téléversement réussi via ST-Link (ou DFU), message de fin de flash. | capture |
| `stm32-arduino-core` | `boards-manager-stm32.<x>` | `/ressources/img/stm32-arduino-core/` | Boards Manager : paquet « STM32 MCU based boards » (STM32duino) installé + URL du gestionnaire. | capture |
| `stm32-cubemx` | `cubemx-pinout.<x>` | `/ressources/img/stm32-cubemx/` | STM32CubeMX, vue de configuration des broches (Pinout view) avec quelques broches assignées. | capture |
| `stm32-cubemx` | `cubemx-horloge.<x>` | `/ressources/img/stm32-cubemx/` | STM32CubeMX, arbre d'horloge (Clock Configuration) montrant la propagation des fréquences. | capture |
| `stm32-registres` | `registre-gpio.svg` | `/ressources/img/stm32-registres/` | Un registre GPIO 32 bits décomposé en champs (ex. MODER) montrant le bit-banging. Option (sinon couvert par `[[manipulation-de-bits]]`). | svg |
| `teensy` (hub) | `photo-carte.<x>` | `/ressources/img/teensy/` | Photo d'une carte Teensy 4.x (vue de dessus, broches visibles). | photo |
| `teensy` (hub) | `brochage.<x>` | `/ressources/img/teensy/` | Brochage (pinout) officiel de la Teensy utilisée, fonctions repérées (broches audio, série, etc.). | capture |
| `teensy-prise-en-main` | `teensy-loader.<x>` | `/ressources/img/teensy-prise-en-main/` | Teensy Loader pendant un téléversement (attente du bouton de programmation / flash en cours). | capture |
| `teensy-prise-en-main` | `teensyduino-install.<x>` | `/ressources/img/teensy-prise-en-main/` | Installeur Teensyduino par-dessus l'IDE Arduino (ou sélection de la carte Teensy). | capture |
| `teensy-audio` | `audio-design-tool.<x>` | `/ressources/img/teensy-audio/` | Audio System Design Tool (interface web) : un patch de blocs audio reliés. | capture |
| `teensy-usb` | `menu-usb-type.<x>` | `/ressources/img/teensy-usb/` | Menu *Outils → USB Type* de l'IDE montrant les personnalités USB disponibles (Serial, MIDI, Keyboard…). | capture |
| `esp8266` (hub) | `photo-carte.<x>` | `/ressources/img/esp8266/` | Photo d'une carte ESP8266 (NodeMCU ou Wemos D1 mini), connecteur USB visible. | photo |
| `esp8266` (hub) | `brochage-d1-gpio.svg` | `/ressources/img/esp8266/` | Mapping des étiquettes de carte (D0…D8) vers les **vrais numéros GPIO** + broches à usage restreint. C'est le piège n°1 de la famille. | svg |
| `esp8266-prise-en-main` | `boards-manager-esp8266.<x>` | `/ressources/img/esp8266-prise-en-main/` | Boards Manager : paquet « esp8266 by ESP8266 Community » installé + URL du gestionnaire. | capture |
| `esp8266-prise-en-main` | `selection-nodemcu.<x>` | `/ressources/img/esp8266-prise-en-main/` | Sélecteur de carte réglé sur « NodeMCU 1.0 » (ou Wemos D1) + port. | capture |

---

## Déjà existant (ne pas refaire)

SVG conceptuels déjà en place, couverts → exclus de la production :

- ESP32 : `esp32-deep-sleep/reveil.svg`, `esp32-freertos/ordonnancement.svg`
- STM32 : `stm32/abstraction-couches.svg`, `stm32-cubemx/flux.svg`
- Teensy : `teensy-audio/flux.svg`, `teensy-usb/personnalites.svg`
- Raspberry Pi : `raspberry-pi/mcu-vs-sbc.svg`, `raspberry-pi-gpio/pile.svg`, `raspberry-pi-projet/architecture-bicephale.svg`
- MicroPython : `micropython/modele-execution.svg`
- **XIAO** : 7 SVG (`xiao-esp32-s3/` brochage, variantes, extendeur-i2c, antenne ; `xiao-prise-en-main/bootloader` ; `xiao-alimentation/paths` ; `xiao-sense/peripheriques`). Module au gabarit → **audit seul**, résidu éventuel : vérifier que `xiao-prise-en-main` a ses captures d'install Arduino.

**PIC** : notion d'interface unique, pas de module → hors périmètre média (au plus une mention au panorama `microcontroleur`).

---

## Points ouverts

- **`micropython-serie` → `micropython-repl`** : déviation validée (19/06, C57) ; section « Tracer une grandeur dans Thonny » ajoutée à la fiche. Reste : `aa: RA-PROJET-C03-3/PROJ/5` ajouté ou non à `micropython-repl` (parité `arduino-serie`, multi-couverture C20, tally inchangé).
- **`micropython-filtrage`** : lien rouge optionnel, sans jumeau Arduino — hors carto.
- **Sous-arbitrage câblage MicroPython** : parité stricte (~14 câblages SVG, ci-dessus) **vs** allégé (brochage Pico posé une fois + câblages des seules fiches pivots, renvoi au pinout ailleurs). À trancher au lancement de la production MicroPython.

## Ordre de production suggéré

1. **Brochages + photos de carte** (1 par famille) — débloquent les câblages aval (réutilisables).
2. **ESP32** (brochage + montage GPIO ; SVG Wi-Fi/BLE en option) — priorité 1, faible volume.
3. **Raspberry Pi** (brochage 40 broches + câblage GPIO) — priorité 1, faible volume.
4. **MicroPython** (gros volume câblage — décider strict/allégé) — priorité 1, à étaler.
5. **STM32 / Teensy / ESP8266** — captures-centrées, peu de SVG.
