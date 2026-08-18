# Feuille de route — dette de médias

> Fichier de travail privé (hors `content/`, non publié).
> Issu du triage du 18/08 des **101 placeholders sur 57 fiches** relevés par
> `_drafts/inventaire-captures.txt` (balayage complet du même jour).
> Arbitrages Tim, session du 18/08. Regroupement **par session de prise de vue**
> (une session = un logiciel ouvert une fois), pas par fiche.

## Bilan du triage

| Verdict | Placeholders |
|---|---|
| À shooter | 46 |
| À shooter — reporté post-publication (KiCad) | 3 |
| Réemploi cross-dossier (C76), aucune prise | 12 |
| Converti en bloc de code ou tableau | 23 |
| Converti en SVG | 6 |
| Supprimé | 11 |
| **Total** | **101** |

**Critère de tri retenu (18/08)** : une capture gagne sa place quand
**l'interface est opaque**, pas quand le sujet est trivial.

**Exception assumée — priorité au volume d'usage.** Sur les familles de tête
(Arduino, ESP32, ESP8266) et les notions transverses, une image de confirmation
garde une valeur d'accompagnement qu'elle perd sur une fiche de niche. Le critère
d'opacité n'est pas abrogé : il cède devant le trafic, et seulement là.

## Ordre de priorité

| Rang | Périmètre | Prises restantes |
|---|---|---|
| 1 | Notions transverses `[T]` | 6 |
| 1 | `arduino-*` | 5 |
| 1 | `esp32-*` + `esp8266-*` | 12 |
| 2 | `micropython-*` | 8 |
| 3 | `stm32-*`, `teensy-*`, `raspberry-pi-*` | 12 |
| 4 | `kicad` | 3 |

Les notions `[T]` sont en rang 1 **bien qu'elles n'appartiennent à aucun module** :
C26 les fait pointer depuis tous les hubs de famille, donc à placeholder égal ce
sont les images les plus rentables du wiki.

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
| 5 | `esp8266-prise-en-main:55` | Outils déroulé : « NodeMCU 1.0 (ESP-12E Module) » + port | |
| 6 | `teensy-prise-en-main:60` | Outils déroulé : Teensy 4.1 + port + **USB Type sur Serial** | La ligne *USB Type* est le pivot de `teensy-usb` |
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

## S3 · STM32CubeIDE — 7 prises

| # | Fiche:ligne | À montrer |
|---|---|---|
| 21 | `stm32-prise-en-main:50` | Onglet Board Selector, NUCLEO-F411RE sélectionnée, bouton Next |
| 22 | `stm32-prise-en-main:69` | `main.c`, toggle LD2 inséré **entre USER CODE BEGIN 3 et USER CODE END 3** |
| 23 | `stm32-prise-en-main:105` | Perspective Debug, point d'arrêt dans la boucle `while` |
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
| 33 | `micropython-simulation:77` | Simulation du circuit bouton GP14 + LED GP15, bouton appuyé et LED allumée |

## S6 · Raspberry Pi Imager — 2 prises

| # | Fiche:ligne | À montrer |
|---|---|---|
| 34 | `raspberry-pi-prise-en-main:47` | Onglet **Général** de la personnalisation OS (derrière « Modifier les réglages ») : nom d'hôte, identifiants, Wi-Fi |
| 35 | `raspberry-pi-prise-en-main:49` | Onglet **Services**, case « Activer SSH » cochée |

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
| 40 | `esp8266-prise-en-main:79` | NodeMCU branchée, LED allumée + console de téléversement réussi | Idem |
| 41 | `teensy-prise-en-main:92` | **Fenêtre du Teensy Loader** (recentrée dessus) | Application tierce qui surgit seule — le seul cas opaque du lot |

## S9 · Datasheet L298N — 2 prises

| # | Fiche:ligne | À montrer |
|---|---|---|
| 42 | `lire-une-datasheet:128` | Brochage Multiwatt15 (figure « Pin configuration ») + table « Pin function » |
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
| `teensy-prise-en-main:81` | → `esp32-prise-en-main` #8 (compilation réussie) — **idem, identiques mot pour mot** |
| `debugger-embarque:19` | → `arduino-debug` #12 (session de débogage) |
| `micropython-simulation:42` | → lot `wokwi/` (sélecteur de composants) |
| `micropython-simulation:54` | → lot `wokwi/` (console série) |
| `arduino-sortie-pwm:80` | → SVG `oscilloscope/ecran-pwm.svg` |
| `micropython-shield:37` | → photo d'empilage de `shield` `[T]` — ⚠ **voir Points ouverts** |

---

# Conversions en bloc de code ou tableau — 23

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

# Points ouverts

- ⚠ **`micropython-shield:37` → réemploi de `shield` `[T]` : la cible n'existe peut-être pas.**
  Le dashboard note pour `shield` (12/06) une « mention photo C29 [Arduino + shield
  empilés] », mais le balayage du 18/08 ne trouve **aucun placeholder dans
  `shield.md`**. Soit la mention n'a jamais été écrite, soit elle est dans un format
  non canonique qui échappe au balayage (cas déjà rencontré sur `kicad`). À vérifier
  avant de compter sur le réemploi ; sinon `micropython-shield:37` bascule en prise
  propre ou en suppression.

- **Format C29 non canonique, au-delà de `kicad`.** Les quatre placeholders de
  `multimetre` et `oscilloscope` sont en **paragraphe intégralement italique**,
  comme ceux corrigés sur `kicad` le 17/08. Ils disparaissent avec les SVG, mais le
  défaut n'était donc pas isolé — **contrôle de format à passer sur les fiches
  antérieures au canon** (`debugger-embarque`, `ide`, `analyseur-logique`,
  `lire-une-datasheet`, `micropython-repl` sont dans le même cas au balayage).

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
