# Cadrage — Cartographie des médias des familles MCU

> Brief de lancement (créé en clôture du 17/06 suite 3). Document de pilotage interne (`_drafts/`, hors site).
> **But de la prochaine session : un inventaire, pas des fiches.** On ne produit pas encore les visuels — on les **recense**.

## Objectif

Le §7 **Arduino** est relu et richement illustré ; il sert désormais de **gabarit de densité visuelle**. Les autres familles MCU (§8+) ont été produites plus tôt, souvent sans schémas (ou avec 1-2 SVG conceptuels seulement). La prochaine session **cartographie**, famille par famille et fiche par fiche, **tous les SVG à créer et toutes les captures d'écran (C29) à prendre** pour amener ces familles **au même format et à la même densité** qu'Arduino.

Livrable de la session : un document d'inventaire structuré (proposé : `_drafts/cartographie-medias-familles.md`) — une **liste actionnable** de visuels manquants, classés par famille et par fiche, prête à alimenter les sessions de production qui suivront.

## Périmètre — familles à cartographier

D'après le BACKLOG (à **revérifier en listant les dossiers**, ne pas se fier au décompte de mémoire) :

- **ESP32** — `content/embarque/mcu/esp32/` : hub + enfants (prise-en-main, arduino-core, idf, wokwi, gpio, serie, wifi, ble, deep-sleep, freertos). 2 SVG conceptuels déjà là (`esp32-deep-sleep-reveil`, `esp32-freertos-ordonnancement`).
- **ESP8266** — hub + 2 (prise-en-main, arduino-core). **Aucun SVG** (famille « moins » assumée — la densité cible peut rester plus basse, à arbitrer).
- **STM32** — hub + 5 (prise-en-main, arduino-core, cubemx, hal, registres). 2 SVG (`stm32-abstraction-couches`, `stm32-cubemx-flux`).
- **Teensy** — hub + 4 (prise-en-main, arduino-core, audio, usb). 2 SVG (`teensy-audio-flux`, `teensy-usb-personnalites`).
- **Raspberry Pi** — hub + 3 (prise-en-main, gpio, projet). 3 SVG.
- **MicroPython** — hub + ~37 enfants (4 vagues, calqué sur Arduino). 1 SVG embarqué (`micropython-modele-execution`) — **le plus gros chantier média potentiel**, car structuré comme Arduino mais peu illustré.
- **XIAO ESP32-S3** — hub + 3 (prise-en-main, alimentation, sense). **7 SVG déjà** (famille bien dotée — sert plutôt de second point de comparaison).
- **PIC** — notion unique (pas de module) : probablement hors périmètre média.

## Méthode proposée (par famille)

1. **Lister le dossier** de la famille → inventaire réel des fiches (et de leurs SVG existants dans `content/ressources/img/<slug>/`).
2. Pour chaque fiche, **chercher son jumeau Arduino** (ex. `esp32-gpio` ↔ `arduino-gpio`, `micropython-machine-a-etats` ↔ `arduino-machine-a-etats`) et **reporter les types de visuels** que le jumeau possède.
3. **Noter l'écart** : quels SVG manquent (montage, chronogramme, schéma de principe…), quelles captures C29 seraient pertinentes (IDE/outil spécifique à la famille, moniteur série, etc.).
4. **Tenir compte des conventions de famille** : C47 (une fiche famille délègue la théorie aux notions transverses — donc pas besoin de re-illustrer ce qui vit dans `[[uart]]`, `[[timer]]`, `[[asservissement]]`…) ; la « note de portabilité » récente. Beaucoup de visuels conceptuels **vivent déjà dans les notions/Arduino** : la cible famille est surtout le **spécifique carte** (brochage, IDE, câblage avec les broches de la carte, captures d'outils propres à la famille).
5. **Classer par priorité** : familles priorité 1 (ESP32, MicroPython, Raspberry Pi) avant priorité 2 (STM32, Teensy, ESP8266).

## Référence de densité — ce qu'a une fiche Arduino aboutie

- **≥ 1 SVG par fiche** (C68) ; **un montage ou un schéma de principe par bloc de code** (C79).
- **Câblage = SVG**, pas photo (C78) ; **broches étiquetées comme dans le code** (C80, `IN1 → D12`).
- Types de SVG rencontrés : **branchement** (composant ↔ broches), **chronogramme** (signaux/temps), **diagramme d'états**, **schéma de principe** (boucle fermée, carte mémoire, profil de consommation), **frise/ordonnancement**.
- **Code commenté débutant** + encart « Comment lire ce code » sur les blocs denses (C77) — *contenu, pas média, mais souvent à compléter en même temps.*
- **Captures C29** réservées aux **résultats / UI** non rendables en SVG (IDE, traceur série, oscillo, multimètre…), avec placeholder « Prendre capture… ».
- Gabarit SVG : auto-contenu `<defs><style>` + `@media (prefers-color-scheme: dark)`, palette ambre, **markers/pointes de flèche en classe** (C69), `text-anchor` par élément, **vrais caractères UTF-8** (jamais `\u`), dossier par fiche (C73/C76).

## Format de sortie attendu (livrable de la session)

Pour chaque famille, une sous-section ; pour chaque fiche, une ligne du type :

> `esp32-gpio` — **manque** : SVG de brochage ESP32 (≠ Arduino), SVG montage LED+bouton avec broches ESP32 ; capture C29 moniteur série. **Déjà** : —. **Jumeau** : `arduino-gpio`.

Plus, en tête, une **synthèse chiffrée** (nb de SVG à créer / captures à prendre par famille) pour estimer la charge des sessions de production.

## À arbitrer par Tim au lancement

- **Densité cible par famille** : vise-t-on la parité stricte avec Arduino partout, ou une densité **modulée** (ESP8266/PIC plus légers, MicroPython au niveau d'Arduino) ?
- **MicroPython** : ~37 fiches — chantier média majeur. Tout cartographier d'un bloc, ou se limiter aux fiches Bases + Avancées d'abord ?
- **Captures C29** : la session ne fait que les **lister** (Tim les shoote) — confirmer.
- Périmètre : inclut-on **XIAO** (déjà bien doté) et **PIC** (notion seule) dans la carto, ou les exclut-on ?

## Rappels méthode (démarrage session)

- **Cas A** : lire `conventions.md` + tête de `JOURNAL.md` avant d'exécuter ; vérifier le poste via `list_allowed_directories`.
- Session **d'inventaire** : surtout de la **lecture** (`list_directory`, `read_text_file`) + production du document de carto. Pas (ou peu) d'écriture dans `content/`.
- Git toujours piloté par Tim.
