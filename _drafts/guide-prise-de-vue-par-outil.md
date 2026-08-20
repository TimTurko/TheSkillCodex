# Guide de prise de vue — par outil, puis par page

> Fichier de travail privé (hors `content/`, non publié).
> **Autre axe de lecture** du manifeste de `_drafts/feuille-de-route-captures.md`,
> qui est trié par session de prise de vue (logistique). Ici : un outil, ses
> prises, et pour chacune ce qu'il faut avoir à l'écran, où l'image atterrit,
> et ce que l'alt promet déjà.
>
> **Les numéros `#` sont ceux du manifeste. Ils ne se renumérotent jamais** :
> c'est le seul lien entre les deux documents.
>
> Ouvert le 20/08. Écrit au fil du dialogue — le fichier est l'état de la session,
> interruptible et reprenable.

---

## Le compte, avec sa décomposition

Comptage refait sur le manifeste le 20/08. **Deux chiffres incompatibles
circulaient** dans les prompts de lancement précédents :

- « 49 lignes dont 8 réemplois » — **FAUX**, cela ne laisserait que 41 prises.
- « 49 pivots + 8 réemplois » — **JUSTE**. Ce sont deux ensembles disjoints.

**Total manifeste : 57 lignes = 49 pivots + 8 réemplois.**

| Catégorie | Nombre | Fichier à produire ? |
|---|---|---|
| Pivots — captures d'écran | **44** | oui |
| Pivots — photos / GIF de matériel | **5** | oui |
| Réemplois en attente de leur pivot | 6 | non |
| Réemplois déjà allumés (fichier existant ou SVG produit) | 2 | non |
| **Total manifeste** | **57** | **49 à produire** |
| *(hors manifeste)* placeholders KiCad reportés post-publication (C90) | 3 | reporté |

Les 5 photos de matériel : #39 carte ESP32 LED allumée · #40 NodeMCU LED allumée ·
#47 servo SG90 (GIF) · #48 empilement Uno + shield · #49 couveuse annotée.
Tout le reste est de l'écran, y compris #41 (fenêtre du Teensy Loader) et
#42/#43 (extraits de PDF).

### A. Captures d'écran, par logiciel — 44

| Logiciel | Prises | Numéros | Matériel à brancher |
|---|---|---|---|
| **IDE Arduino** | **15** | #1-12, #36-38 | non pour #1-12 ; **oui** pour #36-38 (traceur série, montage réel) |
| **Thonny** | **8** | #13-20 | **oui**, Pico branché ; #18-20 exigent un montage réel |
| **STM32CubeIDE / CubeMX** | **7** | #21-27 | **oui** pour #23 et #24 (débug pas-à-pas sur Nucleo) |
| **Navigateur** | **5** | #28-31, #46 | **oui** pour #31 (ESP32 qui sert la page) |
| **Wokwi** | 2 | #32-33 | non |
| **Raspberry Pi Imager** | 2 | #34-35 | non |
| **Lecteur PDF (datasheet L298)** | 2 | #42-43 | non |
| **Teensy Loader** | 1 | #41 | **oui**, Teensy 4.1 |
| **PulseView** | 1 | #45 | **oui**, analyseur logique + trafic I²C |
| **nRF Connect (mobile)** | 1 | #44 | **oui**, ESP32 en BLE |
| *(reporté)* **KiCad** | 3 | — | non — hors périmètre de ce guide |

### B. Photos, par matériel à avoir sous la main — 5

| Matériel | Prises | Numéros |
|---|---|---|
| Carte ESP32 DevKit branchée, LED intégrée allumée | 1 | #39 |
| NodeMCU ESP8266 branchée, LED allumée | 1 | #40 |
| Arduino + servo SG90 + palette (GIF de balayage) | 1 | #47 |
| Uno + un shield enfiché, vue de trois quarts | 1 | #48 |
| Couveuse réelle du fil rouge | 1 | #49 |

### C. Réemplois — aucun fichier à produire

Ils s'allument tout seuls quand leur pivot est déposé. **À ne pas chercher
dans la liste des prises.**

| Fiche:ligne | Pointe vers | État |
|---|---|---|
| `esp8266-prise-en-main:41` | #2 `esp32-prise-en-main/preferences-url-cartes.png` | attend le pivot |
| `teensy-prise-en-main:48` | #2 | attend le pivot |
| `stm32-arduino-core:38` | #2 | attend le pivot |
| `teensy-prise-en-main:38` | #28 `esp32-prise-en-main/telechargement-ide.png` | attend le pivot |
| `teensy-prise-en-main:79` | #8 `esp32-prise-en-main/compilation-reussie.png` | attend le pivot |
| `debugger-embarque:19` | #12 `arduino-debug/session-debogage.png` | attend le pivot |
| `arduino-sortie-pwm:80` | `oscilloscope/ecran-pwm.svg` | **allumé** (SVG produit le 19/08) |
| `micropython-simulation:42` | `wokwi/ajouter-composant-blink.png` | **allumé** (fichier existant) |

---

## Points de vigilance

### Dossiers manquants sur disque — relevé du 20/08

`content\ressources\img\` re-listé ce jour. **Huit dossiers de destination
n'existent pas encore** et sont à créer avant dépôt :

`ide` · `esp32-serie` · `cpp-logs` · `micropython-prise-en-main` ·
`micropython-debug` · `micropython-repl` · `micropython-simulation` · `shield`

⚠ **La liste héritée du 19/08 en oubliait un** : `micropython-prise-en-main`,
qui porte pourtant **quatre** prises (#13, #14, #15, #29).

⚠ `shield` n'est **pas** `arduino-shield`, qui existe déjà et contient autre chose.

### Pièges connus

- **#34 — onglet Général de Raspberry Pi Imager** : l'écran expose SSID,
  identifiant et mot de passe. **Valeurs jetables obligatoires.**
- **#24 et #47 — les deux GIF du lot** : poids à vérifier **avant commit**
  (git garde tout à jamais — précédent d'un MP4 de 40 Mo le 17/08).
  Viser < 5 Mo, `fps=15`, sans piste audio.
- **C71 — aucune référence de prix visible à l'écran**, y compris dans un
  panier ou une page produit ouverte en arrière-plan.
- **#42 / #43 — datasheet L298** : noter la révision du PDF hors fiche, la
  numérotation des tables change entre révisions. Attribution C74-c obligatoire.

### Specs à revoir

> Traitement groupé en fin de session : **manifeste + embed + alt bougés ensemble**,
> jamais l'un sans les deux autres. Rien n'est édité dans `content/` avant.

**#1 `ide:19` — la prise se scinde en trois (arbitrage Tim, 20/08).**

L'image déposée est **acceptée telle quelle** pour ce qu'elle montre. Ce qui bouge,
c'est la promesse : l'alt annonçait cinq éléments, l'image en porte trois.

| Élément | Décision |
|---|---|
| Annotations en anglais (*Upload*, *Verify*, *Serial monitor*) | **Gardées** — le mélange français / anglais est un parti pédagogique assumé, aligné sur d'autres cours de la filière |
| Flèches d'annotation | **Validées par Tim** — elles ne couvrent rien de critique |
| Sélecteur de carte / port | **Sort de #1** → capture à part, plus lisible découpé |
| Moniteur série | **Sort de #1** → capture à part |

**À exécuter en fin de session :**

1. **Réécrire l'alt de `ide:19`** — retirer « sélecteurs de carte et de port » et
   « moniteur série », garder zone d'édition + les deux boutons. L'alt décrit ce que
   l'image montre, pas ce que la fiche raconte.
2. **Deux lignes neuves au manifeste**, numérotées à la suite (**#50**, **#51**) —
   la renumérotation de #1-#49 est interdite.
3. **Deux embeds neufs dans `ide.md`** + leurs alts, placés sous le paragraphe qu'ils
   démontrent et non à la suite du premier (C93, volet placement).
4. **Trancher la prose de `ide`** : elle écrit « derrière deux boutons (« Vérifier » /
   « Téléverser ») », l'image annote *Verify* / *Upload*. Si le bilinguisme est le
   parti retenu, **la prose doit porter les deux libellés**, sinon la fiche et son
   image se contredisent à la lecture.

**Question ouverte — le moniteur série.** #10 (`esp32-serie:76`) est, par arbitrage
du 18/08, **la seule capture de moniteur série de tout le wiki** ; les 17 autres ont
été converties en blocs de code. Une capture de moniteur dans `ide` en ferait une
seconde. À trancher avant de shooter.

---

**Libellés d'interface — portée à mesurer (ouvert le 20/08).**

Arbitrage Tim : **les deux langues sont acceptables dans les images**, quel que soit
le moment. Le sujet des captures est donc **clos**.

Reste le versant texte, qui n'est pas couvert par cet arbitrage. La prose et les alts
citent des libellés d'interface **en français, entre guillemets ou en gras**, comme
des chaînes à rechercher à l'écran :

- « URL de gestionnaire de cartes supplémentaires » → *Additional boards manager URLs*
- « Vérifier » / « Téléverser » → *Verify* / *Upload*
- *Outils → Type de carte / Port*, *Board part number*, *Upload method*…

L'IDE Arduino 2.x **est localisé en français** : un étudiant en locale FR verra bien
les libellés français. La prose n'est donc pas fausse — c'est la configuration de la
machine de prise de vue qui est en anglais. Le décalage est réel mais **bénin**, et il
ne bloque aucune prise de vue.

À trancher hors session photo, une fois la portée mesurée (combien de fiches citent un
libellé d'interface) :
(a) forme canonique **« libellé français » (*English label*)** à la première occurrence
de chaque fiche, anglais seul ensuite ;
(b) anglais seul dans toute prose décrivant un clic ;
(c) statu quo, on ne touche à rien.

---

**`esp32-prise-en-main` — piège du mauvais paquet (ouvert le 20/08, révélé par #3).**

La capture #3 montre, **au-dessus** du bon paquet, un leurre que la fiche ne mentionne
nulle part : **« Arduino ESP32 Boards » by Arduino, version 2.0.18**. Il porte le mot
ESP32, il est plus haut dans la liste, et il ne contient **que l'Arduino Nano ESP32**.
Un étudiant avec un DevKit générique qui l'installe ne trouvera jamais
« ESP32 Dev Module » dans *Type de carte*, et soupçonnera son câble avant le paquet.

La section *Pièges* de la fiche couvre déjà « support ESP32 non installé » et
« cœur trop ancien pour la puce », jamais « mauvais paquet ». → **ajouter une entrée
courte**, hors session photo. L'image, elle, est juste : l'encadré et la flèche
désignent le bon paquet.

---

## Les outils, un par un

### IDE Arduino — 15 prises

Toutes en `.png` (capture d'UI, C74). Le dossier de destination est
`content\ressources\img\<slug>\` ; la largeur est celle déjà posée dans l'embed,
elle n'a pas à être respectée au cadrage — c'est un rendu, pas une contrainte de prise.

| # | Fiche:ligne | Dossier sur disque | Nom du fichier | Largeur |
|---|---|---|---|---|
| 1 | `ide:19` | `img\ide\` ⚠ à créer | `interface-annotee.png` | 640 |
| 2 | `esp32-prise-en-main:48` | `img\esp32-prise-en-main\` | `preferences-url-cartes.png` | 600 |
| 3 | `esp32-prise-en-main:55` | `img\esp32-prise-en-main\` | `gestionnaire-cartes-esp32.png` | 600 |
| 4 | `esp32-prise-en-main:69` | `img\esp32-prise-en-main\` | `menu-outils-carte-port.png` | 600 |
| 5 | `esp8266-prise-en-main:53` | `img\esp8266-prise-en-main\` | `menu-outils-nodemcu.png` | 600 |
| 6 | `teensy-prise-en-main:58` | `img\teensy-prise-en-main\` | `menu-outils-teensy41.png` | 600 |
| 7 | `stm32-arduino-core:45` | `img\stm32-arduino-core\` | `menu-outils-nucleo.png` | 600 |
| 8 | `esp32-prise-en-main:92` | `img\esp32-prise-en-main\` | `compilation-reussie.png` | 600 |
| 9 | `arduino-bibliotheques:51` | `img\arduino-bibliotheques\` | `gestionnaire-bibliotheques.png` | 600 |
| 10 | `esp32-serie:76` | `img\esp32-serie\` ⚠ à créer | `moniteur-serie-115200.png` | 600 |
| 11 | `cpp-logs:50` | `img\cpp-logs\` ⚠ à créer | `panneau-erreur.png` | 560 |
| 12 | `arduino-debug:89` | `img\arduino-debug\` | `session-debogage.png` | 640 |
| 36 | `arduino-capteur-analogique:131` | `img\arduino-capteur-analogique\` | `traceur-seuil-lumiere.png` | 600 |
| 37 | `arduino-pid:93` | `img\arduino-pid\` | `traceur-consigne-mesure.png` | 600 |
| 38 | `arduino-timers:76` | `img\arduino-timers\` | `traceur-echantillons.png` | 600 |

**Préalables logiciels.** Quatre cœurs de cartes doivent être installés dans l'IDE
pour que les menus des prises #4 à #7 affichent quoi que ce soit : **esp32**,
**esp8266**, **Teensy** (via Teensyduino) et **STM32** (STM32duino). C'est le vrai
coût d'entrée de cette session, pas les captures elles-mêmes.

**Ce qui doit être branché.** Le découpage « 12 sans matériel » du relevé d'ouverture
est **faux** et se corrige ici : le menu *Outils* n'affiche une ligne de port que si
une carte est connectée.

| Sans rien brancher | Carte branchée pour le port | Montage réel |
|---|---|---|
| #2, #3, #8, #9, #11 | #1 (au moins une carte), #4 ESP32, #5 NodeMCU, #6 Teensy 4.1, #7 Nucleo | #10 ESP32 qui écrit, #12 carte débogable, #36-38 capteur / asservissement / cadence |

---

#### #1 — `ide:19` → `img\ide\interface-annotee.png` — **DÉPOSÉE, périmètre réduit**

- **État à l'écran** : fenêtre entière de l'IDE, sketch neuf (`setup()` / `loop()`
  vides), aucune carte sélectionnée.
- **Lisible dans l'image** : zone d'édition, bouton *Verify*, bouton *Upload*,
  annotés en rouge.
- **Où ça atterrit** : `ide`, section *Ce que l'IDE prend en charge*, sous le
  paragraphe qui explique que l'IDE masque la chaîne de compilation derrière deux
  boutons.
- **Bon point** : l'écran ne nomme **aucune carte** (« Select Board », « No board
  selected ») — C92 satisfaite, la prise est réemployable ailleurs si besoin.
- **Réserves tracées, non bloquantes** : ~916 px de large contre les 1200-1600
  visés par C74 (rendu à 640, légèrement mou sur écran HiDPI) ; la version
  « Arduino IDE 2.3.9 » est lisible en barre de titre, ce qui datera l'image.
- → voir **Specs à revoir** : alt à réécrire, prises **#50** et **#51** à ouvrir.

#### #2 — `esp32-prise-en-main:48` → `img\esp32-prise-en-main\preferences-url-cartes.png`

**La prise la plus contrainte du lot** : un seul fichier sert **quatre fiches**.

- **État à l'écran** : IDE Arduino 2.x, *Fichier → Préférences* ouvert, champ
  **« URL de gestionnaire de cartes supplémentaires »** repéré (encadré / surligné),
  et **le champ VIDE ou effacé**.
- **Pourquoi vide** : `esp32-prise-en-main:48`, `esp8266-prise-en-main:41`,
  `teensy-prise-en-main:48` et `stm32-arduino-core:38` embarquent **le même fichier
  avec le même alt, mot pour mot**. Chaque fiche donne SON URL en bloc de code juste
  au-dessus de l'image. Une URL visible à l'écran contredirait trois lecteurs sur
  quatre — C92, neutralité de famille.
  ⚠ Ce n'est **pas** l'alt qui l'impose : l'alt dit seulement « champ mis en
  évidence ». La contrainte vient du réemploi.
- **Lisible dans l'image** : le libellé exact du champ, pour que l'étudiant le
  retrouve dans sa propre fenêtre. Le reste des préférences peut rester visible.
- **Ne rien brancher** — les préférences s'ouvrent sans carte.
- **ÉTAT : DÉPOSÉE ET VALIDÉE** (20/08). Champ vide, cadre rouge sur la bonne ligne,
  et **le menu *File → Preferences* laissé déroulé** — initiative de Tim, meilleure
  que la spec : l'image donne le **chemin** en plus de la destination.
  Nom d'utilisateur du chemin *Sketchbook location* **flouté**. ~1070 px de large.
  Réserves levées par Tim : chevauchement du dernier champ sur « Editor Quick
  Suggestions », non bloquant.
- ⚠ **L'alt reste à reprendre** : il cite « champ « URL de gestionnaire de cartes
  supplémentaires » » entre guillemets, l'écran affiche *Additional boards manager
  URLs*. Voir **Specs à revoir — libellés d'interface**.
- **Les quatre URL** (relevées dans les fiches, pour la suite du tutoriel) :

```
ESP32     https://espressif.github.io/arduino-esp32/package_esp32_index.json
ESP8266   https://arduino.esp8266.com/stable/package_esp8266com_index.json
Teensy    https://www.pjrc.com/teensy/package_teensy_index.json
STM32     https://github.com/stm32duino/BoardManagerFiles/raw/main/package_stmicroelectronics_index.json
```

#### #3 — `esp32-prise-en-main:55` → `img\esp32-prise-en-main\gestionnaire-cartes-esp32.png` — **DÉPOSÉE ET VALIDÉE**

L'inverse exact de #2 : **assume pleinement l'ESP32**, réemployée nulle part.

- **État à l'écran** : gestionnaire de cartes ouvert, filtre `ESP32` saisi, chemin
  *Tools → Board → Boards Manager* laissé déroulé (même parti que #2).
- **Lisible dans l'image** : paquet **« esp32 » by Espressif Systems** encadré,
  version **3.3.11** dans le déroulant, bouton *Install* fléché, champ de recherche
  annoté *Search*.
- **Le détail qui justifie la capture** : le numéro de version. La fiche exige juste
  au-dessus, en `> [!warning]`, un cœur **3.0 ou plus récent** — 3.3.11 le satisfait.
- **Ne rien brancher.**
- **Micro-incohérence non bloquante** : le sous-menu *Board* liste déjà `esp32` et
  `esp8266` (cœurs installés) alors que le panneau affiche *INSTALL* et non *UPDATE*.
- → voir **Specs à revoir — piège du mauvais paquet**, révélé par cette image.

*(suite à remplir au fil du dialogue)*
