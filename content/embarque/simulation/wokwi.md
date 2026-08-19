---
title: Wokwi
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - simulation-electronique
  - arduino-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
phases:
  - preuve-de-concept
draft: false
---

**Wokwi** (`wokwi.com`) est un simulateur en ligne de cartes à **microcontrôleur** — Arduino, ESP32, Raspberry Pi Pico, STM32 — avec un large catalogue de capteurs, afficheurs et modules. On y **écrit le code et on simule le circuit** ensemble, sans matériel : la LED clignote, le capteur renvoie une valeur, le moniteur série défile, le tout dans le navigateur. C'est le complément de [[tinkercad|Tinkercad]], plus riche en composants et en cartes — notamment l'[[esp32|ESP32]] et le sans-fil, là où Tinkercad se limite à l'univers Arduino. Les cartes au format [[xiao-esp32-s3|XIAO]] (C3, S3, C6) y figurent aussi : elles portent le **même SoC** que les cartes du module [[esp32|ESP32]], donc le code se transpose tel quel — seul le brochage change. Cette fiche est un tuto-outil du hub [[simulation-electronique|simulation électronique]].

## À quoi ça sert ?

Wokwi sert à **valider un montage à microcontrôleur avant le matériel** :

- **tester le code sur le circuit simulé** — vérifier qu'un programme lit bien un capteur ou pilote un actionneur, sans attendre la carte ni risquer un composant ;
- **prototyper de l'ESP32 et du sans-fil** — Wokwi simule l'ESP32 et certains scénarios Wi-Fi, hors de portée de Tinkercad ;
- **simuler en [[micropython|MicroPython]]** — le Pico et l'ESP32 s'y programment aussi en MicroPython ou CircuitPython, pas seulement en C++ : c'est le simulateur retenu par le module MicroPython, voir [[micropython-simulation|simuler un Pico]] ;
- **partager en un lien** — un projet Wokwi s'envoie par URL, pratique pour demander de l'aide ou montrer un montage à l'équipe.

C'est un outil de [[preuve-de-concept|preuve de concept]] : il valide la **logique** du programme et du câblage. Il ne dispense pas du passage sur matériel réel (voir *Pièges*).

## Prendre en main

On déroule ici un premier projet complet — un ESP32 qui dit bonjour sur la liaison série — pour installer les gestes de l'outil avant de câbler quoi que ce soit.

### 1. Choisir une carte

La page d'accueil de `wokwi.com` propose quatre familles : **Arduino** (Uno, Mega, Nano), **ESP32**, **STM32** et **Pi Pico**. On prend l'ESP32.

![Page d'accueil de Wokwi, section Simulate with Wokwi Online, avec les quatre familles de cartes proposées : Arduino Uno-Mega-Nano, ESP32, STM32 et Raspberry Pi Pico.|600](/ressources/img/wokwi/choix-du-microcontroleur.png)

### 2. Choisir un modèle de départ

Wokwi propose ensuite des **starter templates** : un projet vide par variante de puce (ESP32, S2, S3, C3, C6, H2) et quelques cartes toutes faites — dont la **XIAO ESP32-C3**, preuve au passage que le format XIAO est bien simulé. Pour débuter, le template ESP32 vide suffit.

![Écran Starter Templates de Wokwi : neuf vignettes de projets de départ, dont ESP32, ESP32-S2, ESP32-S3, ESP32-C3, ESP32-C6, ESP32-H2, ESP32-S3-BOX-3, M5Stack Core S3 et XIAO ESP32-C3.|600](/ressources/img/wokwi/selection-du-template.png)

### 3. Écrire le code

L'éditeur ouvre `sketch.ino` — le même fichier qu'un sketch [[arduino|Arduino]] — avec, à côté, l'onglet `diagram.json` qui décrit le câblage et un **Library Manager** pour les [[bibliotheque|bibliothèques]].

```cpp
void setup() {
  Serial.begin(115200);              // ouvre la liaison série à 115 200 bauds
  Serial.println("Hello, ESP32!");   // envoie le message une fois, au démarrage
}

void loop() {
  delay(10);                         // rien à faire ici : la pause allège la simulation
}
```

![Éditeur de code de Wokwi, onglet sketch.ino, montrant le programme Hello ESP32 : Serial.begin à 115200 et Serial.println dans setup, un delay de 10 millisecondes dans loop.|560](/ressources/img/wokwi/editeur-code-hello.png)

### 4. Regarder le schéma

La zone de schéma ne contient pour l'instant que la carte : ce programme ne pilote aucune broche, il parle seulement par l'USB simulé.

![Zone de schéma de Wokwi ne contenant que la carte ESP32, sans aucun composant ni fil.|560](/ressources/img/wokwi/editeur-schema-hello.png)

### 5. Lancer la simulation

Le bouton de lancement compile puis exécute. Deux issues : la compilation aboutit et la carte démarre, ou elle échoue — et le message indique alors **la ligne fautive**, exactement comme dans l'IDE Arduino (voir [[cpp-logs|lire les erreurs du compilateur]]).

![Interface de Wokwi pendant la phase de compilation, avec l'indicateur de compilation en cours.|560](/ressources/img/wokwi/compilation-en-cours.png)

### 6. Lire le moniteur série

Le message apparaît — précédé du **journal de démarrage de la puce**, ces lignes `rst:0x1`, `mode:DIO`, `load:0x...` que l'ESP32 crache à chaque reset. Ce n'est pas une erreur : c'est le bootloader qui parle, et c'est lui qui impose le débit de 115 200 (voir [[esp32-arduino-core|l'Arduino-core ESP32]]).

![Moniteur série de Wokwi affichant le journal de démarrage de l'ESP32 (rst, configsip, mode DIO, lignes load et entry) suivi du message Hello, ESP32!|600](/ressources/img/wokwi/moniteur-serie-hello.png)

Wokwi embarque aussi un **analyseur logique virtuel** : on pose ses voies sur les fils d'un bus simulé, on capture, et on relit les trames comme avec un vrai [[analyseur-logique|analyseur logique]] — de quoi vérifier un échange [[i2c|I²C]] ou [[uart|UART]] avant même d'avoir câblé quoi que ce soit.

## Exemple — Faire clignoter une LED

Le programme précédent ne touchait aucune broche. On ajoute maintenant un vrai circuit : la LED qui clignote, premier réflexe de tout démarrage sur microcontrôleur.

1. **Ajouter les composants.** Le bouton `+` de la zone de schéma ouvre le catalogue : on y prend une **LED** et une **résistance**.

![Menu d'ajout de composant de Wokwi, catégorie Basic, listant LED, Pushbutton, Pushbutton 6mm et Resistor.|440](/ressources/img/wokwi/ajouter-composant-blink.png)

2. **Câbler.** **GPIO23** part vers la résistance, la résistance vers l'anode de la LED, et la cathode revient au **GND** de la carte. C'est le montage qu'on reproduirait à l'identique sur du vrai matériel — pour savoir quelles broches sont libres et lesquelles éviter, voir [[esp32-gpio|configurer les GPIO]].

![Schéma Wokwi d'une carte ESP32 avec un fil partant de la broche 23 vers une résistance, la résistance vers l'anode d'une LED rouge, et la cathode de la LED reliée à la broche GND.|340](/ressources/img/wokwi/schema-blink.png)

3. **Coder.** Le programme n'a besoin que de deux gestes : déclarer la broche en sortie, puis alterner les deux niveaux.

```cpp
void setup() {
  pinMode(23, OUTPUT);       // la broche 23 devient une sortie
}

void loop() {
  digitalWrite(23, HIGH);    // allume la LED
  delay(1000);               // attend une seconde
  digitalWrite(23, LOW);     // éteint la LED
  delay(1000);               // attend une seconde
}
```

![Éditeur de code de Wokwi montrant le programme de clignotement : pinMode sur la broche 23 en sortie dans setup, puis digitalWrite HIGH, delay 1000, digitalWrite LOW, delay 1000 dans loop.|360](/ressources/img/wokwi/editeur-code-blink.png)

4. **Lancer et confronter à l'attendu.** La LED doit s'allumer une seconde, s'éteindre une seconde. Si elle reste éteinte, c'est le câblage — numéro de broche, sens de la LED ou masse oubliée ; si le rythme n'est pas le bon, c'est le `delay`. Le diagnostic se fait **sans toucher au matériel**, et le raisonnement est le même que sur la table.

L'apport de Wokwi : on valide ensemble le **code** ([[cpp|C++]]) et le **circuit** avant de souder ou de commander quoi que ce soit. La suite — lire un capteur analogique, piloter en [[pwm|PWM]], dialoguer sur un bus — se prototype de la même façon, en reprenant les montages du module [[esp32|ESP32]].

## Pièges

**Simulation ≠ réalité.** Wokwi simule la logique, pas finement l'électrique : courants réels, temps de montée, rebonds de boutons ou bruit d'un capteur ne sont pas tous reproduits. Un montage qui marche sous Wokwi reste **à valider sur matériel**.

**Croire tous les composants disponibles.** Le catalogue est large mais pas exhaustif : un capteur exotique peut manquer ou n'être que partiellement modélisé. Vérifier que le composant clé du projet est bien simulé avant de tout bâtir dessus.

**Négliger les contraintes réelles.** Le simulateur laisse parfois passer un câblage que le vrai matériel ne pardonnerait pas — typiquement un signal 5 V sur une broche [[esp32|ESP32]] 3,3 V. Câbler dans Wokwi comme on câblerait pour de vrai.

**Oublier le passage sur matériel.** Wokwi fait gagner du temps en amont, mais le code devra être **téléversé et revalidé** sur la carte physique : c'est une étape de preuve de concept, pas la fin du chemin.

## Voir aussi

- [[simulation-electronique|Simulation électronique]] — le hub : méthode et lecture des résultats
- [[tinkercad|Tinkercad]] — l'équivalent côté Arduino débutant, sans ESP32
- [[esp32|ESP32]] — la famille que Wokwi simule, sans-fil compris
- [[xiao-esp32-s3|XIAO ESP32-S3]] — même SoC, simulée elle aussi (variantes C3, S3, C6)
- [[esp32-gpio|Configurer les GPIO de l'ESP32]] — quelles broches sont libres, lesquelles éviter ; même question [[arduino-gpio|côté Arduino]] et [[micropython-gpio|côté MicroPython]]
- [[micropython-simulation|Simuler un Pico en MicroPython]] — le même outil, côté MicroPython
- [[analyseur-logique|Analyseur logique]] — le pendant matériel de l'analyseur virtuel de Wokwi
- [[cpp|Le langage C++]] — écrire le code exécuté dans la simulation
- [[niveaux-de-tension|Niveaux de tension]] — respecter le 3,3 V / 5 V, même en simulation
