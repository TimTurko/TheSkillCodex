---
title: Prise en main d'Arduino
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

La **prise en main d'Arduino** consiste à installer l'environnement de développement, à reconnaître sa carte sur l'ordinateur et à téléverser un premier programme. C'est l'étape de rampe d'accès sans laquelle aucun des autres tutoriels Arduino ne s'exécute sur du matériel réel : tout ce qui suit suppose qu'on sait compiler et envoyer du code à la carte. Le programme cible ici est le **Blink** (faire clignoter la LED intégrée), l'équivalent embarqué du « Hello World ».

## À quoi ça sert ?

La prise en main valide en une fois toute la chaîne entre votre code et la carte : éditeur, compilateur, pilote USB, sélection de la carte, sélection du port, téléversement. Si l'un des maillons est cassé, le Blink ne clignote pas, et on le saura tout de suite, sur du code trivial, plutôt que noyé dans un sketch complexe.

Au-delà du premier programme, l'étape a deux rôles :

- **Diagnostiquer plus tard.** Quand un sketch plus avancé refusera de fonctionner, on saura distinguer un problème de *code* d'un problème de *toolchain*, parce que le Blink, lui, fonctionne sur la même chaîne.
- **Donner un repère de référence.** L'IDE, le menu *Outils → Type de carte / Port*, le bouton Téléverser, le [[arduino-serie|moniteur série]] : ce sont les gestes mille fois répétés du tutoriel. Les ancrer une fois sur du code trivial libère l'attention pour le reste.

## Procédure pas à pas

Quatre étapes : installer, brancher, écrire (ou charger), téléverser.

### 1. Installer l'IDE Arduino

Téléchargez l'IDE depuis le site officiel : [arduino.cc](https://www.arduino.cc/) → *Products → Software → Arduino IDE* (lien direct : [arduino.cc/en/software](https://www.arduino.cc/en/software)). Deux versions coexistent : l'**IDE 2.x** (récente, recommandée — autocomplétion, débogueur, gestionnaire de cartes intégré) et l'**IDE 1.8.x** (legacy, plus légère, encore présente sur de nombreuses machines pédagogiques). Les captures de cette fiche utilisent l'IDE 2.x.

Au moment du téléchargement, Arduino peut proposer de **contribuer (don)** ou de créer un compte : c'est **optionnel**. Cliquer sur *Just Download* pour passer directement au téléchargement.

Sur Windows, l'installateur installe aussi les pilotes USB pour les cartes Arduino officielles. Sous Linux, ajoutez votre utilisateur au groupe `dialout` pour accéder au port série sans `sudo`. Sous macOS, rien à faire en plus.

![Page de téléchargement de l'IDE Arduino|600](/ressources/img/arduino-prise-en-main/telechargement.png)

### 2. Brancher la carte et vérifier la reconnaissance

Branchez la carte avec un **câble USB de données**. Les câbles « charge only » des smartphones ne transmettent que l'alimentation, pas le signal. Symptôme classique : la LED *ON* de la carte s'allume, mais l'IDE ne voit aucun port. C'est l'erreur n°1 des débuts.

Dans l'IDE, ouvrez le menu *Outils → Type de carte* et choisissez votre modèle (`Arduino Uno`, `Arduino Mega or Mega 2560`, `Arduino Nano`...). Puis *Outils → Port* et sélectionnez le port qui correspond à votre carte. Sous Windows il apparaît comme `COM3`, `COM4`... ; sous macOS comme `/dev/cu.usbmodem...` ; sous Linux comme `/dev/ttyACM0` ou `/dev/ttyUSB0`.

![Menu Outils → Type de carte|600](/ressources/img/arduino-prise-en-main/type-de-carte.png)

![Menu Outils → Port|600](/ressources/img/arduino-prise-en-main/port.png)

**Point de contrôle.** À ce stade, votre carte doit apparaître dans *Outils → Port* (`COMx` sous Windows, `/dev/cu.usbmodem...` sous macOS, `/dev/ttyACM0` ou `/dev/ttyUSB0` sous Linux). Si c'est le cas, passez à l'étape 3. Si **aucun port ne correspond à la carte**, traitez d'abord le dépannage ci-dessous.

### Si la carte n'apparaît pas (dépannage)

Symptôme commun : aucun port ne correspond à la carte dans *Outils → Port*. Les causes, par ordre de fréquence :

**1. Câble USB *charge only*.** La LED *ON* de la carte est allumée (elle est alimentée), mais aucun port n'apparaît. Le câble, souvent un cordon de smartphone, ne transmet que l'alimentation, pas les données. C'est de loin la cause la plus fréquente : remplacez-le par un **câble USB de données**.

**2. Pilote CH340 manquant (cartes clones).** Le câble est bon, la carte est alimentée, mais toujours aucun port sous Windows. Les cartes Uno/Nano clones (non officielles) embarquent une puce USB-série **CH340** au lieu du circuit USB officiel. Windows ne sait pas lui parler tant que son pilote n'est pas installé.

> [!tip]
> **Installer le pilote CH340, pas à pas.**
> 1. Ouvrez le *Gestionnaire de périphériques* (clic droit sur le menu Démarrer → *Gestionnaire de périphériques*). Un périphérique marqué d'un point d'exclamation jaune (sous *Autres périphériques*, ou nommé *USB-SERIAL CH340*) confirme le diagnostic.
> 2. Téléchargez le pilote CH340 directement depuis [sparks.gogo.co.nz/ch340.html](https://sparks.gogo.co.nz/ch340.html), qui regroupe les pilotes Windows / macOS / Linux. *(Pilote d'origine : le fabricant wch-ic.com, paquet CH341SER.)*
> 3. Décompressez l'archive, lancez `SETUP.EXE`, puis cliquez sur *Install*.
> 4. Débranchez puis rebranchez la carte (redémarrez si le port n'apparaît toujours pas). Le port `COMx` doit désormais être listé dans *Outils → Port*.

![Téléchargement du pilote CH340 — sparks.gogo.co.nz|600](/ressources/img/arduino-prise-en-main/ch340-driver.jpg)

<video controls src="/ressources/img/arduino-prise-en-main/ch340-gestionnaire.mp4"></video>

**3. Linux / macOS.** Sous Linux, vérifiez l'appartenance au groupe `dialout` (cf. étape 1). Un `ls /dev/ttyACM* /dev/ttyUSB*` après branchement confirme la présence du port. Sous macOS, les cartes officielles fonctionnent sans pilote. Seuls de vieux clones CH340 peuvent réclamer un pilote signé.

### 3. Charger l'exemple Blink

Ouvrez *Fichier → Exemples → 01.Basics → Blink*. L'IDE ouvre un nouvel onglet contenant ce code :

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

Deux [[fonction-informatique|fonctions]] structurent tout programme Arduino : `setup()` s'exécute une fois au démarrage de la carte, `loop()` se répète indéfiniment ensuite. Le programme déclare la broche `LED_BUILTIN` (la LED soudée sur la carte, broche 13 sur Uno) en sortie, puis dans la boucle l'allume, attend 1 seconde, l'éteint, attend 1 seconde, recommence.

Cliquez sur **Vérifier** (icône coche, en haut à gauche). C'est la phase de *compilation*. Si tout est correct, la console en bas affiche `Sketch uses XXX bytes (X%) of program storage space`. Aucune ligne rouge.

![IDE Arduino — Blink compilé|600](/ressources/img/arduino-prise-en-main/blink-compilation.png)

### 4. Téléverser et observer

Cliquez sur **Téléverser** (icône flèche, à droite de Vérifier). L'IDE recompile et envoie le binaire à la carte via le port série. Pendant le téléversement, les LEDs *RX* et *TX* de la carte clignotent rapidement.

Une fois le téléversement terminé, la LED *L* (broche 13) se met à clignoter au rythme d'une seconde allumée, une seconde éteinte. **Le programme tourne. La prise en main est validée.**

![Carte Arduino — LED L clignotante|420](/ressources/img/arduino-prise-en-main/led-blink.gif)

> [!tip]
> **Vérifier ≠ téléverser.** *Vérifier* compile sans envoyer à la carte (utile pour traquer une erreur de syntaxe sans risquer de casser un programme qui tourne). *Téléverser* compile puis envoie. Au moindre doute, *Vérifier* d'abord. Ça évite d'attendre l'aller-retour USB pour découvrir une faute de frappe.

## Exemple — Blink modifié

Pour vérifier qu'on contrôle réellement ce qui se passe (et pas juste qu'on a réussi à téléverser *un* code), modifiez les temporisations :

```cpp
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(100);
  digitalWrite(LED_BUILTIN, LOW);
  delay(900);
}
```

Téléversez à nouveau. La LED fait maintenant un éclair court (100 ms) toutes les secondes. Ce **petit pas** — modifier, téléverser, observer le changement attendu — est le geste de base de tous les tutoriels suivants. Tant qu'on n'a pas pris ce réflexe, on confond ses bugs avec ses succès.

## Pièges

**Mauvais port sélectionné.** Si plusieurs cartes (ou un téléphone) sont branchées en USB, l'IDE peut proposer plusieurs ports. Téléverser sur le mauvais port échoue avec un message d'erreur cryptique : toujours vérifier *Outils → Port* avant chaque téléversement.

**Compilation OK ≠ téléversement OK.** Une compilation réussie valide la syntaxe du code, pas la connexion à la carte. Si le téléversement échoue avec `programmer is not responding` ou `avrdude: stk500_recv()`, la carte n'a pas répondu — port, câble ou carte à vérifier.

**Clone Nano, mauvais bootloader.** Sur certains clones Nano, le port est reconnu mais le téléversement échoue (timeout `avrdude`). Choisir *Outils → Processeur → ATmega328P (Old Bootloader)* règle le souci.

**Téléverser avec le moniteur série ouvert ailleurs.** Si une autre application (PlatformIO, un terminal externe, un autre IDE) tient le port ouvert, le téléversement échoue car le port est verrouillé. Fermer l'autre fenêtre, retenter.

**Confondre la LED *L* et la LED *ON*.** La LED *ON* est l'indicateur d'alimentation (toujours allumée quand la carte est sous tension). C'est la LED *L* (proche de la broche 13) qui clignote sous contrôle du programme. Si seul *ON* s'allume après téléversement, le code n'a peut-être pas pris.

**IDE 1.8.x vs 2.x.** Les chemins des menus diffèrent légèrement entre les deux versions (gestionnaire de cartes, gestionnaire de bibliothèques, traceur série). Si un tutoriel mentionne une option introuvable, vérifier la version installée. La nôtre est la 2.x.

## Cas particulier — Alternatives à l'IDE Arduino

Pour un projet plus structuré (versionnage Git fin, multi-fichiers, multi-plateformes), deux alternatives valent le détour :

- **Arduino CLI** — chaîne de compilation en ligne de commande, scriptable, parfaite en intégration continue.
- **PlatformIO** — extension VS Code qui gère unifié Arduino, ESP32, STM32 et bien d'autres. Gestionnaire de bibliothèques propre, débogage natif.

L'IDE Arduino reste le meilleur point d'entrée pédagogique. Les alternatives prennent leur sens quand le projet grossit. Voir [[firmware|firmware]] pour les enjeux de structuration du code embarqué.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — la première compilation + téléversement d'un sketch sur la carte cible est l'acte fondateur de la PoC logicielle. Tant que le Blink ne clignote pas, aucune mesure ni asservissement aval n'est crédible.
- **Tous les tutoriels Arduino aval** — sans prise en main effective, lire les autres tutoriels sans pouvoir tester revient à lire du code sans l'exécuter. Faites le Blink au moins une fois, sur le matériel cible du projet, le plus tôt possible.

Investir une demi-heure pour valider la chaîne complète en début de PoC évite des heures de bugs hybrides plus tard, quand on ne saura plus distinguer un problème de toolchain d'un problème d'algorithme.

## Aller plus loin

- [Guide officiel arduino.cc](https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/) — la version étendue, anglophone.
- [Référence du langage Arduino](https://www.arduino.cc/reference/en/) — toutes les fonctions intégrées (`pinMode`, `digitalWrite`, `analogRead`, ...).

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[microcontroleur|Microcontrôleur]] — hub mère, panorama des familles
- [[tinkercad|Tinkercad]] — simuler un montage Arduino en ligne, sans matériel
- [[cpp|C++]] — bases du langage outillé par Arduino
- [[firmware|Firmware]] — structurer le code embarqué (transverse)
