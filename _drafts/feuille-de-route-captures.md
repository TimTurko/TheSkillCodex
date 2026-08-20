# Feuille de route — dette de médias

> Fichier de travail privé (hors `content/`, non publié).
> Issu du triage du 18/08 des **101 placeholders sur 57 fiches** relevés par
> `_drafts/inventaire-captures.txt` (balayage complet du même jour).
> Arbitrages Tim, session du 18/08. Regroupement **par session de prise de vue**
> (une session = un logiciel ouvert une fois), pas par fiche.
>
> **Re-balayage à motif élargi, 19/08 — 242 fiches balayées sur 242 `.md` de
> `content/`.** Le compte passe à **107 placeholders sur 60 fiches** : les 101 du
> triage sont tous retrouvés à la ligne exacte, **+6 nets** qui commençaient par
> une forme de « photo » (`Prendre photo de`, `Prendre une photo de`,
> `Intégrer un GIF ou une photo de`), invisible au motif du 18/08. Un 108ᵉ item
> hors compteur a été trouvé en commentaire HTML. Arbitrages Tim du 19/08 intégrés
> ci-dessous, repérés **[19/08]**.
>
> **Contre-balayage de session B, 19/08 — à nouveau 242 fiches sur 242.** Motif
> élargi + second rideau (paragraphes tout-italique, commentaires HTML, amorces
> `Ajouter / Illustrer / Montrer / Filmer / Enregistrer`). **Il restait 35
> placeholders sur 31 fiches, et non 31** : 23 conversions + 8 SVG + 3 KiCad
> reportées + `micropython-simulation` non posé. Le 31 venait d'une soustraction
> (108 − 16 − 60), pas d'un comptage. **Les 23 conversions sont faites** ; il
> reste **12 placeholders**. Contrôles de grandeur mesurable : les **56 chemins de
> médias distincts du manifeste sont tous présents** dans les fiches, et les 23
> fiches converties portent **0** placeholder résiduel.
>
> **Session C, 19/08 — les 8 SVG sont produits et intégrés.** Avec la suppression de
> `micropython-simulation:52`, il ne reste que **3 placeholders dans tout `content/`** :
> les trois KiCad, reportés post-publication par décision (C90). La dette de captures
> se réduit désormais aux **prises de vue** — plus aucune conversion en attente.

## Bilan du triage

| Verdict | 18/08 | **19/08** | État |
|---|---|---|---|
| À shooter | 46 | **49** | à faire |
| À shooter — reporté post-publication (KiCad) | 3 | 3 | reporté |
| Réemploi cross-dossier (C76), aucune prise | 12 | **9** | embeds posés ; **8** après la suppression de `micropython-simulation:52` |
| Converti en bloc de code ou tableau | 23 | 23 | **fait le 19/08 (session B)** |
| Converti en SVG | 6 | **8** | **fait le 19/08 (session C)** |
| Supprimé | 11 | **16** | fait ; **17** avec `micropython-simulation:52` (19/08, session B) |
| **Total** | **101** | **108** | |

Le total 19/08 est de 108 et non 107 : le commentaire HTML de
`schema-bloc-fonctionnel:67` entre au compteur en devenant un placeholder visible.

**Critère de tri retenu (18/08)** : une capture gagne sa place quand
**l'interface est opaque**, pas quand le sujet est trivial.

**Exception assumée — priorité au volume d'usage.** Sur les familles de tête
(Arduino, ESP32, ESP8266) et les notions transverses, une image de confirmation
garde une valeur d'accompagnement qu'elle perd sur une fiche de niche. Le critère
d'opacité n'est pas abrogé : il cède devant le trafic, et seulement là.

## Ordre de priorité

| Rang | Périmètre | Prises restantes |
|---|---|---|
| 1 | Notions transverses `[T]` | **8** |
| 1 | `arduino-*` | **6** |
| 1 | `esp32-*` + `esp8266-*` | 12 |
| 2 | `micropython-*` | 8 |
| 3 | `stm32-*`, `teensy-*`, `raspberry-pi-*` | 12 |
| 4 | `kicad` | 3 |

Les notions `[T]` sont en rang 1 **bien qu'elles n'appartiennent à aucun module** :
C26 les fait pointer depuis tous les hubs de famille, donc à placeholder égal ce
sont les images les plus rentables du wiki.

---

# À apporter par Tim — suivi

> **Seule liste à tenir à jour pendant les prises de vue.** Tout le reste du
> fichier est de la spécification ; ceci est le suivi. Cocher au fil de l'eau.

## A. Prises de vue — 49 + 3 reportées

Une ligne par session, détail des cadrages dans la partie *Sessions* ci-dessous.

- [ ] **S1 · IDE Arduino** — 12 prises (la plus rentable : un quart de la dette)
- [ ] **S2 · Thonny + Pico branché** — 8 prises (les 3 Plotter exigent un montage réel)
- [ ] **S3 · STM32CubeIDE** — 7 prises — **REPORTÉES post-rentrée (20/08)** (l'unique candidat GIF : `stm32-registres:68`)
- [ ] **S4 · Navigateur** — **3 prises actives** sur 4 (#30 reportée avec STM32 ; 2 pages de téléchargement + la page servie par l'ESP32)
- [ ] **S5 · Wokwi** — 2 prises
- [ ] **S6 · Raspberry Pi Imager** — 2 prises (même dialogue, deux onglets)
- [ ] **S7 · IDE Arduino + matériel (traceur série)** — 3 prises
- [ ] **S8 · Cartes branchées** — 3 prises
- [ ] **S9 · Datasheet L298N** — 2 extraits, **cadrés serré sur la figure utile**
- [ ] **S10 · Prises isolées** — 3 (nRF Connect, PulseView, Audio Design Tool)
- [ ] **S12 · Matériel sur la paillasse** — 3 prises **[19/08]**
- [ ] *(reporté)* **S11 · KiCad** — 3 prises, post-publication (C90)

## B. Valeurs à relever au banc — 8

Les blocs de code de régime **(b)** sont écrits en forme neutre : ce que le **monde**
produit ne s'invente pas. Chaque ligne ci-dessous est un trou à combler carte en main.

**Écrits le 19/08 (session B) — les lignes ci-dessous pointent désormais le bloc posé,
plus le placeholder disparu.** Deux reclassements par rapport au triage du 18/08 :
`teensy-arduino-core` **sort** de cette liste (son sketch n'imprime aucune mémoire
libre — seulement `F_CPU`, une constante de compilation, donc régime (a)), et
`esp32-arduino-core` **y entre** (il imprime `esp_get_free_heap_size()`, grandeur de
carte, sœur exacte de la « RAM libre » d'`arduino-memoire`).

- [ ] `arduino-memoire:75` — RAM libre en octets, trois relevés : la **tendance** compte plus que le chiffre
- [ ] `micropython-memoire:77` — `gc.mem_free()` **avant** et **après** `gc.collect()`
- [ ] `esp32-arduino-core:99` — mémoire libre ; **les deux lignes doivent afficher la même valeur**, c'est le point de la démonstration
- [ ] `stm32-arduino-core:119` — fréquence cœur ; **UID laissé masqué**, ne pas le remplacer par le vôtre
- [ ] `esp8266-arduino-core:92` — adresse IP attribuée (dépend de la box) ; masquée en `192.168.X.X`
- [ ] `stm32-prise-en-main:79` — récapitulatif `text` / `data` / `bss` de la console Build
- [ ] `arduino-deep-sleep:80` — tableau à trois états, courant relevé au multimètre
- [ ] `micropython-deep-sleep:94` — idem, **sans chute en µA à écrire** : sur RP2040 `deepsleep` ≈ `lightsleep` (correction du 30/06)

## C. À rédiger toi-même

- [ ] **L'alt de tout média trop lourd pour être ouvert** côté Claude (> ~300 ko). Un
  alt inventé sur un fichier illisible est une violation C81 — précédent
  `interface.png` du 18/08. Soit une version allégée, soit l'alt vient de toi.
- [ ] **Vérifier les alts des 61 embeds posés d'avance, au dépôt de chaque image.**
  En (c-large) l'alt est écrit **contre la spécification du placeholder**, faute
  d'image à ouvrir — c'est le prix assumé de l'arbitrage. Tant que la prise suit le
  cadrage décrit, l'alt est juste ; **si un cadrage dévie, c'est l'alt qu'il faut
  reprendre**, pas seulement l'image.
- [ ] **La révision du PDF L298N** (S9), hors fiche : la numérotation des tables
  change entre révisions et rendrait l'exercice faux sans que rien ne le signale.
- [ ] **Trancher `Pin("LED")` au simulateur** (`micropython-simulation`) : la fiche
  écrit que le raccourci « *peut* » ne pas être reconnu sur le Pico simulé. Le
  « peut » est mou pour un piège — à vérifier à l'écran, pas de mémoire.
- [x] **Arbitrer `micropython-simulation:52`** (ex-`:54`) — **tranché le 19/08 : suppression.**

## D. Décisions encore ouvertes

- [ ] **Portée des embeds posés d'avance — TRANCHÉ le 19/08 : (c-large).** Embeds posés
  sur les 12 réemplois **et** sur les 49 prises pivots, ~59 absents acceptés jusqu'à
  la prise de vue. Nommage contractuel au **Manifeste des embeds** ci-dessous. Reste
  à exécuter, session par session.
- [x] **`micropython-simulation:52` — TRANCHÉ le 19/08 : suppression.** Le lot `wokwi/` montre un **ESP32
  avec `sketch.ino`** ; `moniteur-serie-hello.png` affiche le journal de boot ESP32
  puis `Hello, ESP32!`. Le réemployer sous une phrase MicroPython/Pico reproduit
  exactement le défaut qui a fait **supprimer** `:48` le 18/08 — et C92 veut qu'un réemploi
  non neutralisable se règle en prise propre ou en suppression, jamais en réemploi assumé.
  **Placeholder retiré** : la prose de l'étape 4 décrit déjà Play, la console série et le REPL.
  `:42` reste conservé en prise propre (le sélecteur de composants, lui, est
  indépendant de la carte). **Les 61 embeds sont donc clos : 60 posés, 1 supprimé.**

---

# Sessions de prise de vue

## S1 · IDE Arduino — 12 prises

La session la plus rentable : une seule ouverture règle un quart de la dette.

| # | Fiche:ligne | À montrer | Note |
|---|---|---|---|
| 1 | `ide:19` | IDE annoté : zone d'édition, Vérifier / Téléverser, sélecteurs carte et port, moniteur série | **Pièce maîtresse.** Source de réemploi potentielle pour tout le wiki |
| 2 | `esp32-prise-en-main:48` | Préférences, **champ « URL de gestionnaire de cartes supplémentaires » mis en évidence, sans URL lisible** | Prise **neutre** — l'image porte le *où*, chaque fiche porte son URL en bloc de code. Réemploi ×3 |
| 3 | `esp32-prise-en-main:55` | Gestionnaire de cartes filtré sur « esp32 », paquet Espressif Systems + bouton Installer | Prise **pivot**. Réemploi ×2 |
| 4 | `esp32-prise-en-main:69` | Outils déroulé : « ESP32 Dev Module » + port | |
| 5 | `esp8266-prise-en-main:53` | Outils déroulé : « NodeMCU 1.0 (ESP-12E Module) » + port | |
| 6 | `teensy-prise-en-main:58` | Outils déroulé : Teensy 4.1 + port + **USB Type sur Serial** | La ligne *USB Type* est le pivot de `teensy-usb` |
| 7 | `stm32-arduino-core:45` | Outils déroulé : Nucleo-64 + **Board part number** + **Upload method (STM32CubeProgrammer SWD)** | Deux sous-menus dont l'oubli fait échouer le flashage en silence |
| 8 | `esp32-prise-en-main:92` | Code Blink + console de compilation réussie | Réemploi ×1 |
| 9 | `arduino-bibliotheques:51` | Gestionnaire de **bibliothèques**, recherche « Adafruit BMP280 » | À ne pas confondre avec le gestionnaire de **cartes** (#3) |
| 10 | `esp32-serie:76` | Moniteur série ouvert + **sélecteur de débit sur 115200** | **Capture unique du moniteur dans tout le wiki** — les 17 autres passent en blocs de code |
| 11 | `cpp-logs:50` | Panneau d'erreur **cadré serré**, replié/déplié | Porte le *où* ; le message part en bloc de code |
| 12 | `arduino-debug:89` | Mode Debug : breakpoint posé + panneau des variables | Réemploi ×1 |

## S2 · Thonny + Pico branché — 8 prises

| # | Fiche:ligne | À montrer |
|---|---|---|
| 13 | `micropython-prise-en-main:48` | Dialogue « Installer MicroPython », variante Pico 2 sélectionnée |
| 14 | `micropython-prise-en-main:65` | Interpréteur réglé sur « MicroPython (Raspberry Pi Pico) » + Shell à l'invite `>>>` |
| 15 | `micropython-prise-en-main:103` | Boîte « Enregistrer sous » proposant « Raspberry Pi Pico » comme destination, fichier `main.py` |
| 16 | `micropython-bibliotheques:44` | Fenêtre « Gérer les paquets », recherche `ssd1306`, bouton Installer |
| 17 | `micropython-debug:91` | Débogage pas-à-pas, valeurs des variables visibles |
| 18 | `micropython-repl:88` | Vue **Plotter** traçant une grandeur qui ondule |
| 19 | `micropython-timers:65` | Plotter, échantillons régulièrement espacés |
| 20 | `micropython-pid:88` | Plotter, consigne constante + mesure qui converge |

Les trois Plotter (#18-20) exigent le Pico branché et un montage réel.

## S3 · STM32CubeIDE — 7 prises — **REPORTÉES POST-RENTRÉE (20/08)**

| # | Fiche:ligne | À montrer |
|---|---|---|
| 21 | `stm32-prise-en-main:50` | Onglet Board Selector, NUCLEO-F411RE sélectionnée, bouton Next |
| 22 | `stm32-prise-en-main:69` | `main.c`, toggle LD2 inséré **entre USER CODE BEGIN 3 et USER CODE END 3** |
| 23 | `stm32-prise-en-main:114` | Perspective Debug, point d'arrêt dans la boucle `while` |
| 24 | `stm32-registres:68` | Vue Registers sur GPIOA, **bit 5 d'ODR qui bascule** en pas-à-pas — **candidat GIF (C87)**, le mouvement est le message |
| 25 | `stm32-cubemx:41` | Pinout & Configuration, broches affectées en surbrillance (LD2, PA2/PA3) |
| 26 | `stm32-cubemx:49` | Clock Configuration, arbre HSE → PLL → SYSCLK → prédiviseurs |
| 27 | `stm32-cubemx:58` | Panneau USART (115200, 8 bits) + onglet NVIC Settings |

## S4 · Navigateur — 4 prises

| # | Fiche:ligne | À montrer | Note |
|---|---|---|---|
| 28 | `esp32-prise-en-main:38` | Page `arduino.cc/en/software`, liens Windows / macOS / Linux | Réemploi ×1 |
| 29 | `micropython-prise-en-main:36` | Page `thonny.org`, liens par système | |
| 30 | `stm32-prise-en-main:38` | Page de téléchargement STM32CubeIDE sur `st.com` | |
| 31 | `esp32-wifi:147` | Navigateur sur la page servie par l'ESP32 (liens Allumer / Eteindre) | **Recentré sur le navigateur** — l'IP au moniteur part en bloc de code |

## S5 · Wokwi — 2 prises

| # | Fiche:ligne | À montrer |
|---|---|---|
| 32 | `micropython-simulation:36` | Page de création de projet, **« Raspberry Pi Pico » + « MicroPython »** sélectionnés — le seul écran du wiki où le choix du langage se fait |
| 33 | `micropython-simulation:75` | Simulation du circuit bouton GP14 + LED GP15, bouton appuyé et LED allumée |

## S6 · Raspberry Pi Imager — 2 prises

| # | Fiche:ligne | À montrer |
|---|---|---|
| 34 | `raspberry-pi-prise-en-main:45` | Onglet **Général** de la personnalisation OS (derrière « Modifier les réglages ») : nom d'hôte, identifiants, Wi-Fi |
| 35 | `raspberry-pi-prise-en-main:47` | Onglet **Services**, case « Activer SSH » cochée |

Même dialogue, deux onglets — une seule ouverture.

## S7 · IDE Arduino + matériel (traceur série) — 3 prises

| # | Fiche:ligne | À montrer |
|---|---|---|
| 36 | `arduino-capteur-analogique:131` | Traceur série, deux courbes superposées (seuil au potentiomètre / lumière) |
| 37 | `arduino-pid:93` | Traceur série, consigne constante + mesure qui converge après réglage des gains |
| 38 | `arduino-timers:76` | Traceur série, échantillons régulièrement espacés |

Le traceur / Plotter est **l'exception légitime** à la conversion en bloc de code :
il produit une courbe, pas du texte.

## S8 · Cartes branchées — 3 prises

| # | Fiche:ligne | À montrer | Note |
|---|---|---|---|
| 39 | `esp32-prise-en-main:103` | Carte ESP32 branchée, LED intégrée allumée | Conservé au titre de la priorité au trafic |
| 40 | `esp8266-prise-en-main:77` | NodeMCU branchée, LED allumée + console de téléversement réussi | Idem |
| 41 | `teensy-prise-en-main:90` | **Fenêtre du Teensy Loader** (recentrée dessus) | Application tierce qui surgit seule — le seul cas opaque du lot |

## S9 · Datasheet L298N — 2 prises

| # | Fiche:ligne | À montrer |
|---|---|---|
| 42 | `lire-une-datasheet:126` | Brochage Multiwatt15 (figure « Pin configuration ») + table « Pin function » |
| 43 | `lire-une-datasheet:180` | Table « Absolute maximum ratings » (table 1) |

**Extraits cadrés serré sur la figure utile, pas la page entière.**
Attribution C74-c obligatoire sous chaque embed :
`*Source : STMicroelectronics — datasheet L298, extrait non modifié.*`
Précédent du dépôt : brochages Pico (Raspberry Pi Ltd, CC BY-ND) et Teensy (PJRC).

**Noter la révision du PDF** hors fiche (nom de fichier ou ici) : la table
*Absolute maximum ratings* peut changer de numérotation entre révisions, ce qui
rendrait l'exercice faux sans que rien ne le signale. Même précaution que la
version de LTspice, jamais citée dans `ltspice`.

## S10 · Prises isolées — 3

| # | Fiche:ligne | À montrer |
|---|---|---|
| 44 | `esp32-ble:99` | nRF Connect (mobile) : périphérique « ESP32-Capteur » connecté, service déplié, caractéristique qui s'incrémente |
| 45 | `analyseur-logique:19` | PulseView, trame I²C capturée **et décodée** (adresse + octets lisibles au-dessus des impulsions) |
| 46 | `teensy-audio:42` | Audio System Design Tool dans le navigateur : objets posés (waveform, filter, i2s) et cordons tracés |

## S12 · Matériel sur la paillasse — 3 prises **[19/08]**

Les trois nouveaux à shooter issus du re-balayage. Rien d'un logiciel : de l'objet
posé sur la table, photographié ou filmé.

| # | Fiche:ligne | À montrer | Note |
|---|---|---|---|
| 47 | `arduino-bibliotheques:130` | Servo SG90, palette montée, balayage 0° → 180° puis retour | **GIF** — boucle courte, le mouvement *est* le message (C87). < 5 Mo, `fps=15`, sans audio, **intercepter avant commit** |
| 48 | `shield:19` | Uno avec un shield enfiché, **vue de trois quarts** montrant l'empilement broche sur broche | **Pièce pivot** : c'est la cible du réemploi `micropython-shield:37`. Format Uno et non Teensy — la fiche fait de l'implantation Uno le standard de fait. Second cliché carte + shield séparés côte à côte : optionnel |
| 49 | `schema-bloc-fonctionnel:67` | Couveuse réelle, annotée des blocs fonctionnels identifiés | Vient d'un **commentaire HTML** converti en placeholder C29 visible. L'annotation peut se poser après coup en SVG par-dessus la photo |

## S11 · KiCad — 3 prises, REPORTÉES

Post-publication, arbitrage 18/08. Placeholders visibles assumés (C90).

| Fiche:ligne | À montrer |
|---|---|
| `kicad:18` | Fenêtre de démarrage + Eeschema et Pcbnew côte à côte |
| `kicad:41` | Pcbnew, carte 2 couches en cours de routage |
| `kicad:50` | Schéma de la carte capteur (MCU, I²C, régulateur, connecteur) |

---

# Réemplois cross-dossier (C76) — aucune prise

Chemin absolu vers le dossier de la fiche pivot. **Conséquence C73** : une retouche
d'une image pivot touche toutes ses fiches consommatrices d'un coup — dans le bon sens.

| Fiche:ligne | Pivot |
|---|---|
| `esp8266-prise-en-main:41` | → `esp32-prise-en-main` #2 (Préférences neutre) |
| `teensy-prise-en-main:48` | → #2 |
| `stm32-arduino-core:38` | → #2 |
| `esp8266-prise-en-main:45` | → `esp32-prise-en-main` #3 (gestionnaire de cartes) |
| `teensy-prise-en-main:52` | → #3 |
| `teensy-prise-en-main:38` | → `esp32-prise-en-main` #28 (page arduino.cc) — **libellés identiques mot pour mot** |
| `teensy-prise-en-main:79` | → `esp32-prise-en-main` #8 (compilation réussie) — **idem, identiques mot pour mot** |
| `debugger-embarque:19` | → `arduino-debug` #12 (session de débogage) |
| `micropython-simulation:42` | → lot `wokwi/` (sélecteur de composants) |
| `micropython-simulation:52` | → lot `wokwi/` (console série) |
| `arduino-sortie-pwm:80` | → SVG `oscilloscope/ecran-pwm.svg` |
| `micropython-shield:37` | → photo d'empilage de `shield` `[T]` — **cible confirmée le 18/08**, le placeholder existe bien dans `shield.md` |

---

# Conversions en bloc de code ou tableau — 23 — **FAIT le 19/08 (session B)**

Les 23 sont écrites, les placeholders retirés, **0 résiduel** dans les fiches concernées.
Les lignes ci-dessous sont celles du **triage du 18/08** et ne servent plus qu'à l'historique :
la seule à avoir bougé avant conversion était `raspberry-pi-prise-en-main:68` (devenue `:66`).
Deux fiches ont changé de régime à la lecture du code réel — voir la section **B** ci-dessus.
Convention de forme retenue : **fence nue** pour toute sortie console, comme `cpp-logs`
et `micropython-debug`.

## Sorties série, Shell, REPL (17)

Régime **(a)** — dérivé du code de la fiche, valeurs exactes, rien d'inventé :

`cpp-execution:89` · `esp32-i2c:106` · `esp32-serie:149` · `esp32-spi:102` ·
`esp32-uart:98` · `esp32-deep-sleep:114` · `esp32-freertos:110` ·
`esp32-arduino-core:95` · `stm32-cubemx:89` · `stm32-hal:120` ·
`arduino-capteur-numerique:132` (format seul) · `micropython-capteur-numerique:115` (format seul)

Régime **(b)** — forme neutre, grandeur du monde à combler au banc :

| Fiche:ligne | Ce qui reste à mesurer |
|---|---|
| `arduino-memoire:72` | RAM libre en octets |
| `micropython-memoire:73` | `gc.mem_free()` avant / après `gc.collect()` |
| `teensy-arduino-core:100` | mémoire libre affichée à côté du « Coeur : 600 MHz » |
| `stm32-arduino-core:116` | fréquence cœur + **UID masqué en `XXXX-XXXX-XXXX`** — un numéro de série de puce recopié induit l'étudiant en erreur |
| `esp8266-arduino-core:88` | adresse IP, dépend de la box |

**Le critère de partage** : la valeur est-elle produite par le code (chaînes
littérales, compteurs, adresses, échos) ou par le monde (distance, RAM, fréquence,
IP, UID) ?

## Autres conversions (6)

| Fiche:ligne | Forme cible |
|---|---|
| `raspberry-pi-prise-en-main:68` | Bloc de code — invite SSH `user@monpi:~ $` |
| `stm32-prise-en-main:75` | Bloc de code — console Build, « 0 errors » + **récapitulatif de taille mémoire** (régime b, dépend de la chaîne de compilation) |
| `arduino-interruptions:39` | **Tableau markdown** — broches à interruption d'un Uno (D2, D3) |
| `arduino-deep-sleep:78` | **Tableau** état / courant / autonomie — régime (b2), adossé à l'exemple « 10 mois contre 1 jour » déjà validé le 12/06 |
| `micropython-deep-sleep:92` | **Tableau à structure vide** — régime (b1) : sur RP2040 `deepsleep` ≈ `lightsleep`, il n'y a **pas** de chute en µA à écrire (correction du 30/06) |
| `micropython-watchdog:58` | Bloc de code — branche REPL : lignes de démarrage qui réapparaissent après le blocage simulé |

---

# Conversions en SVG — 6 placeholders, 5 SVG

| SVG à produire | Remplace | Contenu |
|---|---|---|
| `multimetre/face-avant.svg` | `multimetre:19` | Blocs fonctionnels : écran, sélecteur (V⎓, V∼, Ω, A, continuité), trois bornes COM / V-Ω / 10 A |
| `multimetre/mesure-5v.svg` | `multimetre:56` | Arduino, pointe noire sur GND, pointe rouge sur 5 V, afficheur ≈ 5,0 V |
| `oscilloscope/face-avant.svg` | `oscilloscope:19` | Écran quadrillé + trois blocs **positionnés comme sur un appareil réel** : vertical (V/div), horizontal (T/div), trigger |
| `oscilloscope/ecran-pwm.svg` | `oscilloscope:58` | Trace carrée 0-5 V, période T repérée, zone haute cotée — **valeurs de l'étape 5 de la fiche** : ≈ 490 Hz, `analogWrite(128)` → 50 % |
| `arduino-alimentation/trois-sources.svg` | `arduino-alimentation:73` | Uno : USB type B, jack DC 9 V, Vin/GND — C78, le câblage se montre en schéma |
| *(complément)* `micropython-alimentation/alimentation-separee.svg` | `micropython-alimentation:63` | **SVG existant à compléter** plutôt qu'à doubler : ajouter la branche USB à côté de VSYS/GND |
| `generateur-de-signaux/face-avant.svg` **[19/08]** | `generateur-de-signaux:21` | Face avant de GBF en blocs fonctionnels : sélecteur de forme d'onde (sinus / carré / triangle), réglages fréquence / amplitude / offset, **sortie BNC**. **3ᵉ instrument du lot** — même argument que multimètre et oscilloscope |
| `arduino-module/serigraphie-module-i2c.svg` **[19/08]** | `arduino-module:77` | Contour d'un module I²C type BMP280, **sérigraphie VCC / GND / SDA / SCL** lisible le long du peigne, plus le cavalier d'adresse. C80 : les broches portent les noms que le code emploie |

**Pourquoi le SVG gagne sur les instruments alors qu'il perd sur les logiciels.**
Une face avant photographiée, c'est *un* multimètre ; l'étudiant en trouvera un
autre à la paillasse. Le schéma enseigne la grammaire commune de l'instrument —
il y a toujours un sélecteur, toujours une borne COM, toujours une borne courant
à part. Précaution de dessin : **blocs fonctionnels en position relative typique**
(vertical à gauche, horizontal au centre, trigger à droite), pas un instrument
idéalisé à quatre boutons, sinon l'étudiant ne reconnaît pas le vrai.

**Vérification faite le 18/08** : ni `serie-parallele.svg` (multimètre) ni
`branchement-sonde.svg` (oscilloscope) ne couvrent ces placeholders — les SVG
existants portent la **topologie de branchement**, les nouveaux portent la
**face avant** et l'**écran**. Aucun doublon.

---

# Suppressions — 11

| Fiche:ligne | Motif |
|---|---|
| `micropython-prise-en-main:97` | Photo de LED allumée — rang 2, l'étudiant a la carte devant lui |
| `stm32-prise-en-main:86` | Idem, rang 3 |
| `raspberry-pi-prise-en-main:36` | Fenêtre Imager, trois gros boutons nommés dans le texte |
| `debugger-embarque:62` | Doublon interne de `debugger-embarque:19` |
| `arduino-machine-a-etats:93` | Photo du carrefour, LED allumées |
| `teensy-audio:80` | Casque jouant 440 Hz — le son ne se photographie pas |
| `micropython-simulation:48` | Éditeur Wokwi — pas d'interface opaque, et le lot `wokwi/` montre `sketch.ino` + ESP32, donc **non réemployable** sans contredire la phrase illustrée |
| `micropython-sortie-pwm:78` | Renvoi vers `oscilloscope/ecran-pwm.svg` |
| `lire-une-datasheet:118` | Dessins de boîtier → une phrase (« le même composant existe en deux boîtiers, vérifiez lequel vous avez ») |
| `lire-une-datasheet:139` | Table de commande + figure 8 → renvoi au SVG de branchement L298N déjà en place |
| `teensy-usb:74` | Éditeur recevant « Teensy! » — rang 3, à rouvrir sur demande d'un groupe étudiant |
| `lire-une-datasheet:124` **[19/08]** | Trois objets côte à côte (composant nu / CMS / module) — même motif que `:118` : un montage de studio pour une idée qui tient en une phrase |
| `lire-une-datasheet:201` **[19/08]** | Photo du module L298N, radiateur visible — tombe avec `:124`, le radiateur se mentionne dans la prose sur la dissipation |
| `esp8266-prise-en-main:45` **[19/08]** | Gestionnaire de cartes — le pivot #3 est **filtré sur « esp32 » et montre Espressif Systems**, il contredirait la phrase qui dit d'installer « esp8266 » par ESP8266 Community. Non neutralisable : un gestionnaire sans filtre ne montre plus rien. La prose nomme déjà le paquet |
| `teensy-prise-en-main:52` **[19/08]** | Idem, paquet de Paul Stoffregen. **La capture #3 reste sur l'ESP32 seul**, elle cesse d'être une prise pivot |
| `micropython-shield:37` **[19/08]** | Pico sur carte porteuse — le pivot #48 montre un **Uno avec son shield**, format sans rapport avec le Pico. Même motif que le pivot #3. La prose décrit déjà le geste : aligner avant de pousser, respecter le sens, jamais sous tension |

## Phrases de contrôle en remplacement

Les suppressions de « LED allumée » et « compilation réussie » ne laissent pas un
trou : une **phrase de contrôle** prend la place. Registre **« vous »** (C65 — les
prise-en-main sont l'étalon « vous » intégral). Elle porte **deux** choses, le
signe attendu **et** où aller s'il n'arrive pas.

Gabarit :

> La LED intégrée doit se mettre à clignoter à la seconde. Si rien ne bouge,
> reprenez le choix du port dans *Outils*, puis voyez les *Pièges*.

> La console doit se terminer sans message rouge. Un `error:` en fin de
> compilation se lit de haut en bas : c'est la **première** ligne qui compte
> (voir `cpp-logs`).

Le renvoi diffère par famille — le piège du port n'est pas le même sur NodeMCU
que sur Nucleo. À caler fiche ouverte sur la section *Pièges* réelle.

---

# Manifeste des embeds — c-large (19/08)

> **Arbitrage Tim, 19/08 : c-large.** Les embeds sont posés **avant** les prises de
> vue, sur les 49 pivots **et** les 12 réemplois. Le chemin devient la spécification :
> **enregistre chaque prise sous le nom exact ci-dessous** et l'image apparaît sans
> autre édition. ~59 absents attendus à `audit-medias.mjs` jusqu'à la prise de vue —
> **c'est le régime nominal, pas une régression** ; le compteur retombe à zéro au fil
> des dépôts. Les 3 KiCad restent en placeholder (reportées, C90).
>
> Descripteur = nom du média moins le préfixe de fiche (C73). Chemins absolus.
> Extensions : capture d'UI → `.png`, photo → `.jpg`, animation → `.gif` (C74).

## Pivots — 49

| # | Fiche:ligne | Fichier | Largeur |
|---|---|---|---|
| 1 | `ide:19` | `/ressources/img/ide/interface-annotee.png` | 640 |
| 2 | `esp32-prise-en-main:48` | `/ressources/img/esp32-prise-en-main/preferences-url-cartes.png` | 600 |
| 3 | `esp32-prise-en-main:55` | `/ressources/img/esp32-prise-en-main/gestionnaire-cartes-esp32.png` | 600 |
| 4 | `esp32-prise-en-main:69` | `/ressources/img/esp32-prise-en-main/menu-outils-carte-port.png` | 400 |
| 5 | `esp8266-prise-en-main:53` | `/ressources/img/esp8266-prise-en-main/menu-outils-carte-port.png` | 400 |
| 6 | `teensy-prise-en-main:58` | `/ressources/img/teensy-prise-en-main/menu-outils-teensy41.png` | 600 |
| 7 | `stm32-arduino-core:45` | `/ressources/img/stm32-arduino-core/menu-outils-nucleo.png` | 600 |
| 8 | `esp32-prise-en-main:92` | *(absorbée par #57 — `compilation-reussie.png` ne sera jamais produite)* | — |
| 9 | `arduino-bibliotheques:51` | `/ressources/img/arduino-bibliotheques/gestionnaire-bibliotheques.png` | 600 |
| 10 | `esp32-serie:76` | `/ressources/img/esp32-serie/moniteur-serie-115200.png` | 600 |
| 11 | `cpp-logs:50` | `/ressources/img/cpp-logs/panneau-erreur.png` | 560 |
| 12 | `arduino-debug:89` | `/ressources/img/arduino-debug/session-debogage.png` | 640 |
| 13 | `micropython-prise-en-main:48` | `/ressources/img/micropython-prise-en-main/installer-micropython.png` | 560 |
| 14 | `micropython-prise-en-main:65` | `/ressources/img/micropython-prise-en-main/interpreteur-et-shell.png` | 600 |
| 15 | `micropython-prise-en-main:103` | `/ressources/img/micropython-prise-en-main/enregistrer-sur-pico.png` | 560 |
| 16 | `micropython-bibliotheques:44` | `/ressources/img/micropython-bibliotheques/gerer-les-paquets.png` | 600 |
| 17 | `micropython-debug:91` | `/ressources/img/micropython-debug/thonny-pas-a-pas.png` | 640 |
| 18 | `micropython-repl:88` | `/ressources/img/micropython-repl/plotter.png` | 600 |
| 19 | `micropython-timers:65` | `/ressources/img/micropython-timers/plotter-echantillons.png` | 600 |
| 20 | `micropython-pid:88` | `/ressources/img/micropython-pid/plotter-consigne-mesure.png` | 600 |
| 21 | `stm32-prise-en-main:50` | `/ressources/img/stm32-prise-en-main/board-selector.png` | 600 |
| 22 | `stm32-prise-en-main:69` | `/ressources/img/stm32-prise-en-main/main-c-user-code.png` | 600 |
| 23 | `stm32-prise-en-main:114` | `/ressources/img/stm32-prise-en-main/perspective-debug.png` | 640 |
| 24 | `stm32-registres:68` | `/ressources/img/stm32-registres/vue-registers-odr.gif` | 600 |
| 25 | `stm32-cubemx:41` | `/ressources/img/stm32-cubemx/pinout-configuration.png` | 640 |
| 26 | `stm32-cubemx:49` | `/ressources/img/stm32-cubemx/clock-configuration.png` | 640 |
| 27 | `stm32-cubemx:58` | `/ressources/img/stm32-cubemx/usart-nvic.png` | 600 |
| 28 | `esp32-prise-en-main:38` | `/ressources/img/esp32-prise-en-main/telechargement-ide.png` | 600 |
| 29 | `micropython-prise-en-main:36` | `/ressources/img/micropython-prise-en-main/telechargement-thonny.png` | 600 |
| 30 | `stm32-prise-en-main:38` | `/ressources/img/stm32-prise-en-main/telechargement-cubeide.png` | 600 |
| 31 | `esp32-wifi:147` | `/ressources/img/esp32-wifi/page-servie.png` | 440 |
| 32 | `micropython-simulation:36` | `/ressources/img/micropython-simulation/creation-projet-pico.png` | 600 |
| 33 | `micropython-simulation:75` | `/ressources/img/micropython-simulation/simulation-bouton-led.png` | 560 |
| 34 | `raspberry-pi-prise-en-main:45` | `/ressources/img/raspberry-pi-prise-en-main/imager-onglet-general.png` | 560 |
| 35 | `raspberry-pi-prise-en-main:47` | `/ressources/img/raspberry-pi-prise-en-main/imager-onglet-services.png` | 560 |
| 36 | `arduino-capteur-analogique:131` | `/ressources/img/arduino-capteur-analogique/traceur-seuil-lumiere.png` | 600 |
| 37 | `arduino-pid:93` | `/ressources/img/arduino-pid/traceur-consigne-mesure.png` | 600 |
| 38 | `arduino-timers:76` | `/ressources/img/arduino-timers/traceur-echantillons.png` | 600 |
| 39 | `esp32-prise-en-main:103` | `/ressources/img/esp32-prise-en-main/led-on.jpg` | 420 |
| 40 | `esp8266-prise-en-main:77` | `/ressources/img/esp8266-prise-en-main/nodemcu-led-allumee.jpg` | 420 |
| 41 | `teensy-prise-en-main:90` | `/ressources/img/teensy-prise-en-main/teensy-loader.png` | 480 |
| 42 | `lire-une-datasheet:126` | `/ressources/img/lire-une-datasheet/brochage-multiwatt15.png` | 600 |
| 43 | `lire-une-datasheet:180` | `/ressources/img/lire-une-datasheet/absolute-maximum-ratings.png` | 600 |
| 44 | `esp32-ble:99` | `/ressources/img/esp32-ble/nrf-connect.png` | 400 |
| 45 | `analyseur-logique:19` | `/ressources/img/analyseur-logique/pulseview-i2c-decode.png` | 640 |
| 46 | `teensy-audio:42` | `/ressources/img/teensy-audio/audio-design-tool.png` | 640 |
| 47 | `arduino-bibliotheques:130` | `/ressources/img/arduino-bibliotheques/servo-balayage.gif` | 420 |
| 48 | `shield:19` | `/ressources/img/shield/empilement-uno-shield.jpg` | 480 |
| 49 | `schema-bloc-fonctionnel:67` | `/ressources/img/schema-bloc-fonctionnel/couveuse-annotee.jpg` | 600 |
| 50 | `ide` | `/ressources/img/ide/selecteur-carte-port.png` | 600 |
| 51 | *(annulée le 20/08 — `moniteur-serie.png` ne sera jamais produite)* | — |
| 52 | `esp32-prise-en-main` | `/ressources/img/esp32-prise-en-main/selection-board.png` | 640 |
| 53 | `esp32-prise-en-main` | `/ressources/img/esp32-prise-en-main/selection-port-com.png` | 640 |
| 54 | `esp8266-prise-en-main` | `/ressources/img/esp8266-prise-en-main/selection-board.png` | 640 |
| 55 | `esp8266-prise-en-main` | `/ressources/img/esp8266-prise-en-main/selection-port-com.png` | 640 |
| 56 | `esp8266-prise-en-main` | `/ressources/img/esp8266-prise-en-main/gestionnaire-cartes-esp8266.png` | 600 |
| 57 | `esp32-prise-en-main` | `/ressources/img/esp32-prise-en-main/upload-in-progress.png` | 640 |
| 58 | `esp32-prise-en-main` | `/ressources/img/esp32-prise-en-main/done-uploading.png` | 640 |
| 59 | `esp32-prise-en-main` | `/ressources/img/esp32-prise-en-main/led-off.jpg` | 420 |
| 60 | `arduino-bibliotheques` | `/ressources/img/arduino-bibliotheques/installer-bibliotheques-dependances.png` | 600 |

## Prises ouvertes en session de prise de vue — 20/08

Onze prises nées du découpage de #1, de la réécriture de l'étape 3 d'`esp32-prise-en-main`,
et d'une boîte de dialogue rencontrée en shootant #9.
**#1 à #49 ne sont jamais renumérotées** ; celles-ci prennent la suite.

| # | Origine | État |
|---|---|---|
| 50 | #1 scindée — le sélecteur de carte / port sort de l'interface annotée | **déposée et intégrée le 20/08 (suite)** — boîte *Select Other Board and Port*, cartes et ports côte à côte |
| 51 | #1 scindée — le moniteur série sort de l'interface annotée | **ANNULÉE le 20/08 (suite)**, voir ci-dessous |
| 52 | chemin manuel *Outils → Type de carte* | **déposée et intégrée le 20/08** |
| 53 | chemin manuel *Outils → Port* + gestionnaire de périphériques | **déposée et intégrée le 20/08** |
| 54 | pendant ESP8266 de #52 | **déposée et intégrée le 20/08** |
| 55 | pendant ESP8266 de #53 | **déposée et intégrée le 20/08** |
| 56 | gestionnaire de cartes filtré sur `esp8266`, étape 2 | **déposée et intégrée le 20/08** — **annule la suppression du 19/08** de `esp8266-prise-en-main:45` : le réemploi était rejeté faute d'image propre, la prise propre existe désormais |
| 57 | console pendant le téléversement (`upload-in-progress`) | **déposée et intégrée le 20/08** — absorbe #8 |
| 58 | console après téléversement (`done-uploading`) | **déposée et intégrée le 20/08** |
| 59 | LED éteinte, pendant de #39 — remplace le GIF abandonné | **déposée et intégrée le 20/08** |
| 60 | boîte *Install library dependencies*, rencontrée en shootant #9 | **déposée et intégrée le 20/08 (suite)** |

**#51 est annulée (20/08, suite).** Elle avait été ouverte pour combler une promesse
de l'alt de #1 — « sélecteurs de carte **et de port**, moniteur série » — que l'image
ne tenait pas. Vérification faite image ouverte : `interface-annotee.png` **annote déjà
le moniteur série** d'un encadré, d'une flèche et d'un libellé. Le *où* est donc livré
dans `ide` ; le *ce qu'il affiche et comment le régler* est livré par #10. Une troisième
capture n'avait plus de travail, et elle contredisait l'arbitrage « une seule capture de
moniteur dans tout le wiki ». **L'alt de #1 a été recalé à la place** : il ne promet plus
de sélecteur de port (l'IDE 2.x n'en a qu'un, combiné) et nomme les boutons *Verify* et
*Upload* comme l'image les annote, avec la traduction entre parenthèses.

**Le numéro 51 n'est pas réutilisé.**

**Réserve tracée sur #50.** Le champ de recherche a bien été laissé vide, mais la liste
est restée en haut de l'alphabet : les six cartes visibles s'appellent toutes *Arduino*.
Le cadrage visait une liste multi-familles, argument perdu. Sans conséquence — `ide`
illustre déjà la notion avec l'IDE Arduino (#1), il n'y a pas de contradiction. Un
défilement jusqu'aux `E` la récupérerait sans reshoot complet, si l'occasion se présente.

**Ce que #50 a livré à la place, et qui vaut mieux (C99).** La boîte porte sa propre
phrase d'explication : une carte seule permet de **compiler**, un port est nécessaire pour
**téléverser**. C'est la distinction des deux familles d'erreurs de `cpp-logs`, énoncée
par l'IDE lui-même — qu'aucune des quatre captures carte/port existantes (#4, #5, #52,
#53) ne porte. La phrase d'accompagnement dans `ide` a été écrite dessus, avec un lien
neuf vers `cpp-execution` que la fiche n'avait pas.

**#5 change de nom et de largeur** : `menu-outils-nodemcu.png` → `menu-outils-carte-port.png`,
600 → 400, en miroir de #4. Le nom promettait une NodeMCU, l'écran montre
*Generic ESP8266 Module*.

**`esp8266-prise-en-main` bascule sur « Generic ESP8266 Module »** (arbitrage Tim, 20/08) :
les retouches multi-onglets rendaient le reshoot coûteux. Conséquences écrites dans la
fiche — étape 4 en deux chemins, piège des étiquettes `D0`-`D8` retourné, exercice 2 et
corrigé passés de `D5` à `14`. Le SVG de câblage portait déjà les deux désignations :
inchangé.

**Réserve tracée sur #55.** La colonne d'options du menu *Outils* y montre encore
celles du cœur ESP32 (*USB CDC On Boot*, *CPU Frequency 240MHz (WiFi)* — impossible sur
ESP8266, qui plafonne à 160 MHz). Erreur visuelle **acceptée par Tim le 20/08**.
Un recadrage à la hauteur de #54 la supprimerait sans reshoot, si l'occasion se présente
avant publication.

## Teensy — REPORTÉ POST-RENTRÉE (arbitrage Tim, 20/08)

Logiciel secondaire, rarement utilisé ; il est possible qu'aucun étudiant n'en ait
besoin cette année. **Trois prises sortent du lot actif** et leurs embeds sont
**reconvertis en placeholders C29** — et non laissés en place, un embed vers un fichier
absent produisant une image cassée, seul cas que C90 ne couvre pas.

| # | Fiche:ligne | Fichier attendu | État |
|---|---|---|---|
| 6 | `teensy-prise-en-main:58` | `teensy-prise-en-main/menu-outils-teensy41.png` | placeholder C29 rétabli |
| 41 | `teensy-prise-en-main:90` | `teensy-prise-en-main/teensy-loader.png` | placeholder C29 rétabli |
| 46 | `teensy-audio:42` | `teensy-audio/audio-design-tool.png` | placeholder C29 rétabli |
| — | `teensy-prise-en-main:79` | *(réemploi de #8)* | placeholder C29 — réemploi coupé, #8 absorbée par #57 |

**#46 ne demandait pourtant aucune carte** — c'est une page web, shootable avec le lot
navigateur. Report demandé quand même, pour traiter Teensy d'un seul bloc.

**Les trois réemplois de `teensy-prise-en-main` restent actifs** : `:38` → #28, `:48` → #2,
`:79` → #8. Ils pointent des fichiers ESP32 et s'allumeront avec eux. La fiche Teensy
garde donc trois images malgré le report.

**Conséquence sur le compte** : la session S1 · IDE Arduino passe de 15 à **14 prises**
(#6 sort), puis à **13** avec le report de #7 ci-dessous, et
S10 · Prises isolées de 3 à **2** (#46 sort). #41 sortait déjà de S8.

## STM32 — REPORTÉ POST-RENTRÉE (arbitrage Tim, 20/08)

Même motif que Teensy, même exécution : **neuf prises sortent du lot actif** et leurs
embeds sont **reconvertis en placeholders C29**. L'arbitrage a été rendu et appliqué
dans `content/` le 20/08 ; **cette section a été écrite après coup, le même jour** —
le manifeste ne portait le report que côté Teensy, et présentait encore les neuf
prises STM32 comme actives.

| # | Fiche:ligne | Fichier attendu | État |
|---|---|---|---|
| 7 | `stm32-arduino-core:45` | `stm32-arduino-core/menu-outils-nucleo.png` | placeholder C29 rétabli |
| 21 | `stm32-prise-en-main:50` | `stm32-prise-en-main/board-selector.png` | placeholder C29 rétabli |
| 22 | `stm32-prise-en-main:69` | `stm32-prise-en-main/main-c-user-code.png` | placeholder C29 rétabli |
| 23 | `stm32-prise-en-main:114` | `stm32-prise-en-main/perspective-debug.png` | placeholder C29 rétabli |
| 24 | `stm32-registres:68` | `stm32-registres/vue-registers-odr.gif` | placeholder C29 rétabli |
| 25 | `stm32-cubemx:41` | `stm32-cubemx/pinout-configuration.png` | placeholder C29 rétabli |
| 26 | `stm32-cubemx:49` | `stm32-cubemx/clock-configuration.png` | placeholder C29 rétabli |
| 27 | `stm32-cubemx:58` | `stm32-cubemx/usart-nvic.png` | placeholder C29 rétabli |
| 30 | `stm32-prise-en-main:38` | `stm32-prise-en-main/telechargement-cubeide.png` | placeholder C29 rétabli |

**#24 emporte l'unique candidat GIF logiciel du dépôt.** `vue-registers-odr.gif` était
le seul GIF encore prévu au manifeste après l'abandon de celui d'`esp32-prise-en-main` ;
les précautions C87 qui le visaient (< 5 Mo, `fps=15`, interception avant commit) n'ont
plus d'objet tant que le report tient. Reste #47, le servo, qui est un GIF de paillasse.

**#30 ne demandait aucune carte** — c'est une page de téléchargement sur `st.com`,
shootable avec le lot navigateur. Reportée quand même, pour traiter STM32 d'un seul
bloc : exactement le raisonnement appliqué à #46 côté Teensy.

**Le réemploi `stm32-arduino-core:38` reste actif, et il est déjà allumé** : il pointe
#2 (`esp32-prise-en-main/preferences-url-cartes.png`), déposée le 20/08. La fiche garde
donc une image malgré le report — vérifié fiche ouverte.

**Conséquence sur le compte** : S1 passe à **13** prises actives (#7 sort après #6),
S3 tombe à **0**, S4 passe de 4 à **3** (#30 sort). Les trois réemplois Teensy et le
réemploi STM32 restent hors de ce décompte, n'étant pas des prises.

**#4 change de largeur : 600 → 400.** La capture déposée fait 372 px de large et ne
peut pas être agrandie (menu déroulant natif). L'alt a été refait : ce n'est plus le
menu *Outils* mais **le sélecteur de la barre d'outils**, qui montre en prime les
ports « Unknown » et l'entrée *Select other board and port…*.

**À légender en plus (C74-c, attribution)** : #42 et #43 —
`*Source : STMicroelectronics — datasheet L298, extrait non modifié.*`

## Réemplois cross-dossier — 12

Aucun fichier à produire : le chemin pointe vers le dossier du pivot (C73/C76).
Une retouche du pivot se propage à toutes ses consommatrices d'un coup.

| Fiche:ligne | Pointe vers | État du fichier |
|---|---|---|
| `esp8266-prise-en-main:41` | #2 `esp32-prise-en-main/preferences-url-cartes.png` | à shooter |
| `teensy-prise-en-main:48` | #2 | à shooter |
| `stm32-arduino-core:38` | #2 | à shooter |
| `esp8266-prise-en-main:45` | #3 `esp32-prise-en-main/gestionnaire-cartes-esp32.png` | **annulé le 19/08 — passé en suppression** |
| `teensy-prise-en-main:52` | #3 | **annulé le 19/08 — passé en suppression** |
| `teensy-prise-en-main:38` | #28 `esp32-prise-en-main/telechargement-ide.png` | à shooter |
| `teensy-prise-en-main:79` | #8 `esp32-prise-en-main/compilation-reussie.png` | **coupé le 20/08 — placeholder C29** : #8 est absorbée par #57, dont la console affiche `esptool`, `COM9` et un binaire ESP32 |
| `debugger-embarque:19` | #12 `arduino-debug/session-debogage.png` | à shooter |
| `micropython-shield:37` | #48 `shield/empilement-uno-shield.jpg` | **annulé le 19/08 — passé en suppression** |
| `arduino-sortie-pwm:80` | `oscilloscope/ecran-pwm.svg` | **produit le 19/08 (session C)** |
| `micropython-simulation:42` | `wokwi/ajouter-composant-blink.png` | **existe déjà** |
| `micropython-simulation:52` | `wokwi/moniteur-serie-hello.png` | **supprimé le 19/08** — image ESP32/C++ sous une phrase Pico/MicroPython |

**`micropython-simulation:52` était le seul des 61 non posé** ; il est **supprimé** depuis le
19/08 (session B) : l'image montre un ESP32 en C++, la phrase parle d'un Pico en
MicroPython. Poser l'embed, c'était publier la contradiction, pas un lien mort.

---

# Points ouverts

- ✅ **Résolu le 19/08 — le re-balayage a eu lieu, 242 fiches sur 242.** Motif élargi à `Prendre (capture|photo|vidéo)`, `Prendre une photo de`, `Intégrer un GIF ou une photo de`, `Intégrer une vidéo` (C75) et paragraphes intégralement en italique ; puis contrôle de second rideau sur les amorces `Ajouter / Illustrer / Montrer / Filmer / Enregistrer`, les italiques courts, et les 41 lignes résiduelles contenant un mot-média hors motif. **Résultat : 107 placeholders sur 60 fiches**, les 101 du triage retrouvés à la ligne exacte, +6 nets, tous en forme « photo ». Le compte de fiches balayées a été vérifié contre `search_files **/*.md` — c'est la grandeur mesurable, pas le code de retour. Historique de l'alerte ci-dessous.

- ~~⚠ **L'inventaire n'est pas exhaustif : 101 est un plancher.**~~ Vérification du 18/08 — `shield.md` porte un placeholder que le balayage **n'a pas vu**, parce qu'il commence par « **Prendre photo de** » et non « Prendre capture ». Le motif du balayage attrapait bien « Prendre capture d'écran **ou photo** de » et les paragraphes tout en italique, mais pas cette forme-là. C'est le mode d'échec recensé le 18/08 : *l'opération réussit formellement, seule la quantité de travail réel est tronquée*. **À faire avant la première session de prise de vue** : re-balayer avec un motif élargi — `Prendre (capture|photo|vidéo)`, plus `Intégrer une vidéo` (C75) — et **vérifier le nombre de fiches balayées**, pas seulement le nombre de résultats.

- **Format C29 non canonique, au-delà de `kicad`.** Les quatre placeholders de
  `multimetre` et `oscilloscope` sont en **paragraphe intégralement italique**,
  comme ceux corrigés sur `kicad` le 17/08. Ils disparaissent avec les SVG, mais le
  défaut n'était donc pas isolé — **contrôle de format à passer sur les fiches
  antérieures au canon**. **Chiffré le 19/08 : 17 occurrences sur 9 fiches**, et non
  5 — `lire-une-datasheet` (6), `multimetre` (2), `oscilloscope` (2),
  `debugger-embarque` (2), `ide`, `micropython-repl`, `shield`, `analyseur-logique`,
  `generateur-de-signaux` (1 chacune). Onze d'entre elles tombent avec les SVG ou
  les suppressions déjà arbitrés ; **les six qui restent à remettre au canon** sont
  `ide:19`, `debugger-embarque:19`, `analyseur-logique:19`, `micropython-repl:88`,
  `shield:19` et `lire-une-datasheet:128 / :180` (7 en comptant la paire).

- **`micropython-simulation` — piège `Pin("LED")` à trancher au simulateur.**
  La fiche écrit que le raccourci « *peut* ne pas être reconnu » sur le Pico simulé.
  Le « peut » est mou pour un piège : soit Wokwi le résout, soit non. À vérifier
  à l'écran, pas de mémoire. Hors périmètre captures.

- **`_drafts/inventaire-captures.txt` porte un BOM** (U+FEFF). Hors périmètre de
  `normalize-pilotage.js`. Sans conséquence aujourd'hui ; un parseur qui découpe sur
  le premier `|` avalerait le BOM dans le nom de la première fiche.

---

# Ce qui reste vrai après cette feuille de route

**C90** — les placeholders non encore traités restent **visibles en production** et
c'est assumé. La dette de captures n'est pas un bloquant de publication : aucune
fiche ne passe en `draft: true`, aucune n'est amputée.

**C88** — sur une **refonte** de fiche-outil, c'est le scénario retenu qui détermine
la liste des captures, décrite une par une avant toute prise de vue. Cette feuille
de route couvre l'existant, pas les refontes à venir.

**C87** — GIF pour la boucle courte où le mouvement est le message, vidéo pour la
séquence longue. Un seul candidat GIF ici : `stm32-registres:68` (#24). Viser
< 5 Mo, `fps=15`, sans piste audio — et **intercepter avant commit**, git gardant
tout fichier commité dans son historique pour toujours.
