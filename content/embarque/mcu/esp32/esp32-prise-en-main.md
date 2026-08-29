---
title: Prise en main de l'ESP32
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - esp32
prerequis:
  - esp32
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

La **prise en main de l'ESP32** consiste à installer le support de la carte dans l'IDE Arduino, à reconnaître la carte sur l'ordinateur et à téléverser un premier programme. Par rapport à un Arduino, une étape s'ajoute : l'ESP32 n'est pas connu de l'IDE par défaut, il faut d'abord **installer son support** (le cœur Arduino pour ESP32). Le programme cible reste le **Blink** (faire clignoter une LED), l'équivalent embarqué du « Hello World ».

## À quoi ça sert ?

La prise en main valide en une fois toute la chaîne entre votre code et la carte : éditeur, compilateur, support ESP32, pilote USB, sélection de la carte, sélection du port, téléversement. Si l'un des maillons est cassé, le Blink ne clignote pas, et on le saura tout de suite, sur du code trivial, plutôt que noyé dans un sketch complexe.

Au-delà du premier programme, l'étape a deux rôles :

- **Diagnostiquer plus tard.** Quand un sketch plus avancé refusera de fonctionner, on saura distinguer un problème de *code* d'un problème de *toolchain* — parce que le Blink, lui, fonctionne sur la même chaîne.
- **Donner un repère de référence.** L'IDE, le menu *Outils → Type de carte / Port*, le bouton Téléverser, le [[esp32-serie|moniteur série]] : ce sont les gestes mille fois répétés des tutoriels suivants. Les ancrer une fois sur du code trivial libère l'attention pour le reste.

## Procédure pas à pas

Cinq étapes : installer l'IDE, ajouter le support ESP32, brancher la carte, charger le Blink, téléverser.

### 1. Installer l'IDE Arduino

Téléchargez l'IDE depuis le site officiel `arduino.cc`, par *Products → Arduino IDE*. Prenez l'**IDE 2.x** (récente, recommandée — autocomplétion, gestionnaire de cartes intégré). Les captures de cette fiche l'utilisent. Le menu déroulant propose plusieurs variantes par système : sous Windows l'installeur ordinaire convient, sous macOS **vérifiez Intel ou Apple Silicon**, sous Linux l'AppImage évite toute installation.

Sous Linux, ajoutez votre utilisateur au groupe `dialout` pour accéder au port série sans `sudo`. Sous macOS, rien de plus.

![Deux moments de la navigation sur arduino.cc réunis dans une seule image : en haut le menu Products ouvert, une flèche rouge désignant l'entrée Arduino IDE ; en bas la page de téléchargement en version 2.3.10, son menu déroulant listant les sept variantes Windows, Linux et macOS, et le bouton Download.|600](/ressources/img/esp32-prise-en-main/telechargement-ide.png)

### 2. Ajouter le support ESP32

C'est l'étape propre à l'ESP32, absente d'un démarrage Arduino classique. Ouvrez *Fichier → Préférences*, et dans le champ **URL de gestionnaire de cartes supplémentaires**, collez :

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

![Fenêtre Préférences de l'IDE Arduino 2.x, champ « URL de gestionnaire de cartes supplémentaires » mis en évidence.|600](/ressources/img/esp32-prise-en-main/preferences-url-cartes.png)

Ouvrez ensuite le **gestionnaire de cartes** (icône en barre latérale, ou *Outils → Type de carte → Gestionnaire de cartes*), cherchez `esp32`, et installez le paquet **« esp32 » par Espressif Systems**. La recherche remonte plusieurs résultats : vérifiez le nom de l'éditeur avant d'installer.

> [!warning]
> **Prenez la version 3.0 ou plus récente.** Le silicium récent (ESP32-C6, S3 récents…) n'est reconnu qu'à partir du cœur **3.0**, qui repose sur ESP-IDF 5.1. Sur une version antérieure, la définition de carte n'apparaît pas et la compilation échoue. En cas de doute, mettez le paquet à jour avant de continuer.

![Gestionnaire de cartes de l'IDE Arduino filtré sur « esp32 », montrant le paquet Espressif Systems, son numéro de version et le bouton Installer.|600](/ressources/img/esp32-prise-en-main/gestionnaire-cartes-esp32.png)

### 3. Brancher la carte et sélectionner carte + port

Branchez la carte avec un **câble USB de données** (les câbles « charge only » de smartphone ne transmettent que l'alimentation, avec pour symptôme une LED d'alimentation qui s'allume sans qu'aucun port n'apparaisse).

La plupart des cartes de développement ESP32 (type DevKitC) embarquent une puce d'interface USB-série :

- **CP2102** (Silicon Labs) — la plus courante. Sous Windows ancien, installer le pilote *CP210x VCP* depuis le site Silicon Labs si le port n'apparaît pas.
- **CH340** — sur certains clones ; pilote *CH341SER* depuis `wch-ic.com`.
- **USB Serial/JTAG natif** — sur les puces récentes (C3, S3, C6…), la carte se présente directement comme un port USB, **sans puce bridge ni pilote** à installer.

Deux chemins mènent à la sélection, selon que l'IDE reconnaît votre carte ou non.

**Cas courant — le sélecteur de la barre d'outils.** Déroulez le sélecteur en haut de la fenêtre : les cartes détectées y apparaissent avec leur port. Choisissez la vôtre.

![Sélecteur de carte de l'IDE Arduino déroulé : « ESP32 Dev Module » associé au port COM9 en tête de liste, plusieurs ports « Unknown » en dessous, et l'entrée « Select other board and port… » tout en bas.|400](/ressources/img/esp32-prise-en-main/menu-outils-carte-port.png)

Sur un DevKit à pont CH340, la carte s'affiche `Unknown` tant qu'elle n'a jamais été associée. C'est normal (voir *Pièges*). Passez alors par ***Select other board and port…***, choisissez **ESP32 Dev Module** à gauche et votre port à droite : l'association est mémorisée.

**Chemin manuel — les menus *Outils*.** Il fonctionne dans tous les cas, y compris quand l'IDE ne reconnaît rien. *Outils → Type de carte → esp32*, puis votre modèle : **« ESP32 Dev Module »** convient à la majorité des DevKit génériques (sinon le modèle exact : *ESP32-C3 Dev Module*, *ESP32-S3 Dev Module*…).

![Menu Outils de l'IDE Arduino déroulé sur Type de carte puis esp32 : la longue liste des modèles ESP32, dont « ESP32 Dev Module », coché et encadré.|640](/ressources/img/esp32-prise-en-main/selection-board.png)

Puis *Outils → Port* : `COMx` sous Windows, `/dev/cu.usbserial-...` ou `/dev/cu.usbmodem...` sous macOS, `/dev/ttyUSB0` ou `/dev/ttyACM0` sous Linux.

Reste à savoir **lequel de ces ports est le vôtre**. Sous Windows, le gestionnaire de périphériques le nomme explicitement : à la rubrique *Ports (COM et LPT)*, la carte apparaît sous le nom de sa puce d'interface, ici `USB-SERIAL CH340 (COM9)`. Les autres entrées de la liste sont le plus souvent des liaisons série Bluetooth, sans rapport avec la carte : ce sont elles qui remplissent le sélecteur de ports « Unknown ».

![Menu Outils → Port de l'IDE Arduino déroulé à côté du gestionnaire de périphériques Windows : COM9 est coché dans l'IDE, et une flèche le relie à l'entrée « USB-SERIAL CH340 (COM9) » sous Ports (COM et LPT).|640](/ressources/img/esp32-prise-en-main/selection-port-com.png)

### 4. Charger le Blink

Saisissez (ou collez) ce sketch. La LED intégrée de la plupart des DevKit est câblée sur **GPIO 2**, le numéro sérigraphié **D2** sur la carte :

```cpp
const int LED = 2;   // LED intégrée, sérigraphiée D2

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
  delay(1000);
  digitalWrite(LED, LOW);
  delay(1000);
}
```

Deux [[fonction-informatique|fonctions]] structurent tout programme : `setup()` s'exécute une fois au démarrage, `loop()` se répète indéfiniment ensuite. Le programme déclare la broche en sortie, puis l'allume une seconde, l'éteint une seconde, recommence.

> [!warning]
> **N'utilisez pas `LED_BUILTIN` sur ESP32.** L'exemple *Blink* livré avec l'IDE emploie cette constante, héritée de l'Arduino Uno où la LED est sur la broche 13. Beaucoup de définitions de cartes ESP32 ne la définissent pas, et la compilation s'arrête sur `'LED_BUILTIN' was not declared in this scope`. Écrire le numéro de GPIO fonctionne partout.

Cliquez sur **Vérifier** (icône coche) : c'est la *compilation*. Si tout est correct, la console affiche la taille du binaire, sans ligne rouge.

### 5. Téléverser et observer

Cliquez sur **Téléverser** (icône flèche). L'IDE recompile et envoie le binaire via le port. La console récapitule d'abord la taille occupée en flash et en mémoire vive, puis affiche `Connecting......` pendant qu'esptool cherche à faire entrer la carte en mode téléchargement.

![Console de l'IDE Arduino pendant un téléversement : le récapitulatif de taille du binaire en flash et en mémoire vive, la version d'esptool, le port série, puis la ligne Connecting suivie de points ; deux fenêtres de progression Compiling sketch et Uploading sont visibles.|640](/ressources/img/esp32-prise-en-main/upload-in-progress.png)

> [!tip]
> **Si le téléversement n'entre pas en mode programmation.** Beaucoup de cartes ESP32 (surtout les clones à pont **CH340**) n'ont pas le circuit d'auto-reset qui les bascule seules en mode téléchargement. **Maintenez le bouton BOOT (parfois noté *IO0*) enfoncé pendant tout le téléversement**, du clic sur *Téléverser* jusqu'à la fin de l'écriture. L'outil de flashage effectue **son propre reset après le clic** : un appui relâché avant ce reset, ou fait avant de cliquer, reste sans effet.

Une fois terminé, la console vérifie ce qu'elle a écrit (`Hash of data verified.`), redémarre la carte (`Hard resetting via RTS pin...`) et annonce **Done uploading**.

![Console de l'IDE Arduino en fin de téléversement : les lignes d'écriture à 100 %, la vérification du condensat, le redémarrage par la broche RTS, et la notification Done uploading encadrée en bas à droite.|640](/ressources/img/esp32-prise-en-main/done-uploading.png)

La LED clignote alors au rythme d'une seconde. **Le programme tourne : la prise en main est validée.**

![Carte ESP32 DevKit branchée en USB, vue de dessus : la LED intégrée sérigraphiée D2 est allumée en bleu, à côté de la LED d'alimentation PWR allumée en rouge.|420](/ressources/img/esp32-prise-en-main/led-on.jpg)

![La même carte une seconde plus tard : la LED D2 est éteinte, seule la LED d'alimentation PWR reste allumée en rouge.|420](/ressources/img/esp32-prise-en-main/led-off.jpg)

## Exemple — Blink modifié

Pour vérifier qu'on contrôle réellement ce qui se passe (et pas juste qu'on a réussi à téléverser *un* code), modifiez les temporisations :

```cpp
void loop() {
  digitalWrite(LED, HIGH);
  delay(100);
  digitalWrite(LED, LOW);
  delay(900);
}
```

Téléversez à nouveau : la LED fait maintenant un éclair court (100 ms) toutes les secondes. Ce **petit pas** — modifier, téléverser, observer le changement attendu — est le geste de base de tous les tutoriels suivants.

## Pièges

**Support ESP32 non installé.** Sans l'étape 2, aucune carte ESP32 n'apparaît dans *Outils → Type de carte*, et coller du code ESP32 dans l'IDE ne suffit pas. C'est l'oubli le plus fréquent quand on vient d'Arduino, où les cartes AVR sont reconnues d'origine.

**Mauvais paquet installé.** La recherche `esp32` remonte aussi **« Arduino ESP32 Boards » par Arduino**, placé plus haut dans la liste. Celui-là n'apporte que l'**Arduino Nano ESP32** : sur un DevKit générique, aucune définition utilisable n'apparaît ensuite dans *Outils → Type de carte*, et on soupçonne le câble ou le pilote bien avant le paquet. Vérifier l'éditeur : **Espressif Systems**.

**Cœur trop ancien pour la puce.** Une carte récente (C6, par exemple) compilée sur un cœur antérieur à 3.0 ne propose pas sa définition, ou échoue à la compilation. Mettre le paquet à jour.

**Téléversement bloqué faute de mode programmation.** `Connecting....____` qui n'aboutit pas : la carte n'est pas entrée en bootloader. Maintenir **BOOT** pendant tout le téléversement (voir l'astuce ci-dessus).

**`Wrong boot mode detected (0x13)`.** Ce message n'annonce pas une carte morte, au contraire : pour l'émettre, l'outil a **dialogué avec la puce**, donc le câble, le port et la carte fonctionnent. Il signale seulement que l'ESP32 a démarré en exécution normale au lieu du mode téléchargement, parce que **GPIO0 (BOOT)** n'était pas au niveau bas au moment du reset. Maintenir **BOOT** pendant tout le téléversement.

**Port marqué *Unknown*.** Sur une carte à pont **CH340**, l'IDE affiche `Unknown` en face du port : le pont annonce son propre identifiant USB, pas celui d'une carte, et l'IDE n'a donc rien à quoi rattacher le port. Ce n'est **pas** un défaut de pilote : Windows, lui, affiche bien la puce. Associer la carte au port une fois par *Select other board and port…* : l'association est mémorisée.

**Pilote USB-série manquant (Windows).** Carte alimentée mais aucun port : pilote CP210x (CP2102) ou CH340 à installer. Les puces à USB natif (C3/S3/C6) n'ont pas ce souci.

**`'LED_BUILTIN' was not declared in this scope`.** L'exemple *Blink* fourni avec l'IDE utilise cette constante, héritée de l'Arduino Uno où la LED est sur la broche 13. Beaucoup de définitions de cartes ESP32 ne la définissent pas : la compilation s'arrête net. Remplacez-la par le numéro de GPIO réel, **2** sur la plupart des DevKit, sérigraphié **D2**. Sur les cartes où elle *est* définie, la redéfinir soi-même déclenche un avertissement de redéfinition : mieux vaut une constante à soi.

**LED intégrée RGB adressable (C3, S3, C6…).** Sur beaucoup de DevKit récents, la LED soudée n'est pas une LED simple mais une **WS2812 adressable** : elle se pilote par une trame de données, pas par un niveau logique. Un Blink au `digitalWrite` ne peut donc rien allumer, quelle que soit la broche indiquée : changer de numéro de GPIO ne résoudra rien. Le cœur 3.x expose pour ces cartes la constante `RGB_BUILTIN` et la fonction `neopixelWrite(RGB_BUILTIN, rouge, vert, bleu)`, illustrée par l'exemple officiel *BlinkRGB*. Vérifier le type de LED de sa carte avant de conclure qu'elle est morte.

**Coupure d'alimentation (brown-out) sur USB faible.** L'ESP32 appelle des pointes de courant. Sur un port USB faible ou un câble médiocre, la tension chute et la carte redémarre en boucle (`Brownout detector was triggered`). Changer de port USB ou de câble, éviter les hubs non alimentés.

## Exercices

> [!question] Exercice 1 — Deux rythmes
> Modifiez le Blink pour que la LED reste allumée 2 secondes, puis clignote rapidement trois fois (100 ms allumée / 100 ms éteinte), avant de recommencer.

> [!success]- Corrigé
> ```cpp
> const int LED = 2;
>
> void setup() {
>   pinMode(LED, OUTPUT);
> }
>
> void loop() {
>   digitalWrite(LED, HIGH);
>   delay(2000);
>   digitalWrite(LED, LOW);
>   delay(300);
>
>   for (int i = 0; i < 3; i++) {
>     digitalWrite(LED, HIGH);
>     delay(100);
>     digitalWrite(LED, LOW);
>     delay(100);
>   }
> }
> ```
> La boucle `for` factorise les trois éclairs. On retrouvera ce besoin de « rythmes » sans `delay` bloquant dans [[arduino-programmation-non-bloquante|la programmation non bloquante]] : le motif y est traité côté Arduino, il se transpose tel quel sur ESP32.

> [!question] Exercice 2 — LED externe
> Câblez une LED externe (avec sa résistance de ~220 Ω en série) sur **GPIO 16** et faites-la clignoter, sans toucher à la LED intégrée. Quelle ligne change ?

![Câblage de la LED externe sur ESP32 : GPIO16 vers une résistance de 220 Ω puis l'anode de la LED, cathode vers GND|600](/ressources/img/esp32-prise-en-main/montage-led-externe.svg)

> [!success]- Corrigé
> Une seule chose change : la broche pilotée.
> ```cpp
> const int LED = 16;
>
> void setup() {
>   pinMode(LED, OUTPUT);
> }
>
> void loop() {
>   digitalWrite(LED, HIGH);
>   delay(500);
>   digitalWrite(LED, LOW);
>   delay(500);
> }
> ```
> La broche est déclarée en `const int` (constante typée) plutôt qu'en `#define` (voir [[esp32-gpio|configurer les GPIO]] pour le choix des broches sûres). Anode de la LED vers GPIO 16 via la résistance, cathode vers GND.

## Cas particulier — Arduino-core, ESP-IDF, PlatformIO

Cette fiche utilise l'**Arduino-core pour ESP32** : la même API que l'Arduino (`setup()`, `loop()`, `digitalWrite`…), c'est le chemin recommandé pour débuter (détaillé dans [[esp32-arduino-core|l'Arduino-core ESP32]]). Pour un contrôle natif plus poussé (multitâche fin, pile réseau bas niveau), Espressif fournit **ESP-IDF**, son environnement natif (voir [[esp32-idf|découvrir ESP-IDF]]). **PlatformIO** (extension VS Code) gère les deux et facilite le versionnage Git et le multi-fichiers.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — la première compilation et le premier téléversement sur la carte cible sont l'acte fondateur de la PoC logicielle. Tant que le Blink ne clignote pas, aucune mesure ni asservissement aval n'est crédible.
- **Tous les tutoriels ESP32 aval** — sans prise en main effective, lire les autres tutoriels sans pouvoir tester revient à lire du code sans l'exécuter. Faites le Blink au moins une fois, sur le matériel cible, le plus tôt possible.

Investir une demi-heure pour valider la chaîne complète en début de PoC évite des heures de bugs hybrides plus tard, quand on ne saura plus distinguer un problème de toolchain d'un problème d'algorithme.

## Aller plus loin

- [Documentation Arduino-ESP32 d'Espressif](https://docs.espressif.com/projects/arduino-esp32/en/latest/) — installation, cartes supportées, API.
- [Espressif Boards Manager URL](https://espressif.github.io/arduino-esp32/package_esp32_index.json) — l'URL à coller en préférences (étape 2).

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[microcontroleur|Microcontrôleur]] — hub mère, panorama des familles et aide au choix
- [[esp32-gpio|Configurer les GPIO]] — broches utilisables, broches à éviter au démarrage
- [[esp32-serie|Moniteur série]] — observer et piloter le programme via USB
- [[niveaux-de-tension|Niveaux de tension]] — l'ESP32 est en 3,3 V, non tolérant 5 V
- [[cpp|C++]] — bases du langage outillé par le cœur Arduino
