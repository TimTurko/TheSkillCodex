# Cadrage — module XIAO ESP32-S3 (parcours autonome par composition)

> Fichier de travail privé (hors `content/`, non publié). Cadre la **production** du module XIAO ESP32-S3, décidée le 13/06. Carte retenue pour un projet ICAM l'an prochain.

## Décisions de cadrage (13/06)

- **Carte cible : XIAO ESP32-S3.** Le module se concentre sur la S3 (celle utilisée l'an prochain), avec une **ouverture vers les autres modèles** de la gamme (mêmes format, options différentes) — cf. « Ouverture famille ».
- **Régime : parcours autonome (esprit C47) par composition.** Le module forme un **parcours complet et navigable** (l'étudiant le suit de bout en bout pour son projet), mais **réutilise l'existant par liens** au lieu de dupliquer : les étapes génériques pointent vers le module `esp32`, les fiches transverses [T] et les modules de langage `arduino`/`micropython`. On n'écrit de **fiches neuves que pour le spécifique S3/carte**. *(Nuance à éprouver : distinct du lean C56 — ici c'est un vrai parcours, pas un hub mince — et du C47 littéral — pas de duplication.)*
- **Langages : les deux.** Le parcours présente Arduino (C++) **et** MicroPython ; l'étudiant choisit son fil.
- **Granularité : hub + 1 à 3 fiches neuves** (`xiao-prise-en-main`, `xiao-alimentation`, `xiao-sense`).

## Capacités — puce + carte de développement

### XIAO ESP32-S3 (cible)
- **SoC** : ESP32-S3, Xtensa LX7 **double cœur @240 MHz**, instructions vectorielles (IA/ML embarquée).
- **Mémoire** : **8 Mo PSRAM + 8 Mo Flash**.
- **Radios** : Wi-Fi 4 (2,4 GHz, 802.11 b/g/n) + **BLE 5**.
- **GPIO** : le SoC expose ~45 GPIO, **mais la carte XIAO n'en sort que ~11** (+ 5V / GND / 3V3, + pads batterie B+/B− au dos). → piège récurrent + motivation de l'extendeur d'E/S.
- **Carte** : format XIAO ~21 × 17,5 mm ; **USB-C** (USB OTG natif sur S3) ; bords castellés (montage CMS) ; boutons reset/boot ; **charge LiPo embarquée** ; **antenne céramique interne + connecteur d'antenne externe (IPEX)** ; modes **deep-sleep** (argument basse conso / wearable).

### Ouverture famille (mentionner, ne pas approfondir)
Même format XIAO, SoC et options variables :
- **ESP32-C3** — RISC-V mono-cœur @160 MHz, 400 Ko SRAM / 4 Mo Flash, Wi-Fi 4 + BLE 5 : entrée de gamme, basse conso / coût.
- **ESP32-S3 Sense** — la S3 + **caméra OV2640** (1600×1200, compat. OV5640) + **micro numérique** + **lecteur SD** (≤ 32 Go) + IA SenseCraft. *(= notre cible si version Sense.)*
- **ESP32-C6** — double RISC-V (HP @160 MHz + LP @20 MHz), 512 Ko / 4 Mo, **Wi-Fi 6 (802.11ax)** + BLE 5 + **802.15.4 (Thread/Zigbee), compatible Matter** : domotique.
- **ESP32-C5** — **Wi-Fi 6 bi-bande (2,4 / 5 GHz)** : le plus récent, passerelles.

*(Specs au pad / à la datasheet près : à confirmer sur le wiki Seeed en production.)*

## Notions à couvrir

### A. Délégué par liens (le parcours pointe, ne ré-enseigne pas)
- SoC + radios + chaîne d'outils → **module `esp32`** : `esp32-prise-en-main`, `esp32-arduino-core`, `esp32-idf`, `esp32-gpio`, `esp32-wifi`, `esp32-ble`, `esp32-deep-sleep`, `esp32-freertos`, `esp32-serie`.
- Fondamentaux → **[T]** : `gpio`, `pwm`, `adc` / `dac`, `i2c` / `spi` / `uart`, `interruption`, `timer`, `deep-sleep`, `manipulation-de-bits`.
- Programmation → **`arduino`** (+ `arduino-*`) **et `micropython`** (+ `micropython-*`).

### B. Hub-parcours `xiao` (« tu », fiche neuve)
Pose le **parcours** (étapes d'un projet sur XIAO S3) + l'**aide au choix** de variante + l'**ouverture famille**, et **aiguille** vers A. Porte en sections le spécifique carte qui ne mérite pas sa propre fiche :
- **Brochage réduit (~11 pads)** + **extendeur d'E/S** : réponse au manque de broches — expandeur I²C (PCF8574 / MCP23017), renvoi `i2c`. *(demande Tim)*
- **Antenne** : interne vs externe (IPEX), quand / comment basculer (antenne A-01). *(demande Tim)*
- Format / montage castellé CMS, USB-C.
- `aa: []` (AA porté par les fiches outils, C45).

### C. Fiches neuves (1 à 3, spécifique S3)
- **`xiao-prise-en-main`** — premier upload (USB-C, gestionnaire de cartes Arduino / flashage MicroPython, bouton boot), en pointant `esp32-prise-en-main` pour la partie SoC.
- **`xiao-alimentation`** — alimenter et **recharger l'accu** (circuit de charge LiPo embarqué, courant de charge, pads B+/B−, choix / sécurité batterie) + USB-C + **basse conso / deep-sleep**. *(demande Tim : « recharge d'accu »)*
- **`xiao-sense`** — caméra OV2640 + micro + SD + IA SenseCraft : capacité distincte (si version Sense).

### D. À compléter (« etc. » Tim — à lister avant production)
- *(autres spécificités carte à couvrir — à préciser)*

## Structure de fichiers — `content/embarque/mcu/xiao/`
- `xiao.md` — **hub-parcours** (slug `xiao` → résout le lien rouge `[[xiao]]` posé au panorama de `microcontroleur` le 12/06).
- `xiao-prise-en-main.md`
- `xiao-alimentation.md`
- `xiao-sense.md`
- *(nommage hub `xiao` vs `xiao-esp32s3` : à confirmer — `xiao` retenu pour résoudre le lien rouge existant.)*

## Conventions à appliquer
- **C18** (hub de famille) · **C47** parcours autonome **par composition** (réutilisation par liens — nuance à éprouver) · **C45** (`aa: []` sur tutos, AA au hub) · **C20** (multi-couverture si un AA est touché).
- **C65** : registre **« tu »** (hub de famille + fiches de réalisation = adresse à l'étudiant qui réalise).
- Contrôles d'office : **C62** (pipes `\|` en cellule de tableau) · **C68** (un SVG explicatif par fiche-outil / notion — ici : brochage XIAO, branchement extendeur I²C, branchement antenne / batterie ; type *branchement* ou *compréhension*) · **C69** (markers SVG en classes, override sombre) · **C70** (ancres double-tiret si titre à deux-points).
- **C14** : ancres verbatim depuis une lecture fraîche, dryRun sur les fichiers `content/`.

## Pré-requis / liens à résoudre
- Lien rouge `[[xiao]]` (panorama `microcontroleur`, posé 12/06) → cible = le hub `xiao`.
- Vérifier l'existence des fiches pointées (esp32-*, `i2c`, arduino-*, micropython-*) avant de lier.
- Pastille XIAO déjà présente sur le SVG de positionnement de `microcontroleur`.

## Captures / visuels probables (C29 / SVG)
- SVG brochage XIAO S3 (les ~11 pads + alim + pads batterie) — type *compréhension*.
- SVG branchement extendeur I²C ; SVG branchement antenne externe / batterie LiPo — type *branchement* (C67/C68).
- Photo / capture carte (C29) si pertinent.
