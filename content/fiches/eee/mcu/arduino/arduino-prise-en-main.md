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
aa: []
draft: false
---

La **prise en main d'Arduino** consiste à installer l'environnement de développement, à reconnaître sa carte sur l'ordinateur et à téléverser un premier programme. C'est l'étape de rampe d'accès sans laquelle aucun des autres tutoriels Arduino ne s'exécute sur du matériel réel : tout ce qui suit suppose qu'on sait compiler et envoyer du code à la carte. Le programme cible ici est le **Blink** — faire clignoter la LED intégrée — l'équivalent embarqué du « Hello World ».

## À quoi ça sert ?

La prise en main valide en une fois toute la chaîne entre votre code et la carte : éditeur, compilateur, pilote USB, sélection de la carte, sélection du port, téléversement. Si l'un des maillons est cassé, le Blink ne clignote pas — et on le saura tout de suite, sur du code trivial, plutôt que noyé dans un sketch complexe.

Au-delà du premier programme, l'étape a deux rôles :

- **Diagnostiquer plus tard.** Quand un sketch plus avancé refusera de fonctionner, on saura distinguer un problème de *code* d'un problème de *toolchain* — parce que le Blink, lui, fonctionne sur la même chaîne.
- **Donner un repère de référence.** L'IDE, le menu *Outils → Type de carte / Port*, le bouton Téléverser, le moniteur série : ce sont les gestes mille fois répétés du tutoriel. Les ancrer une fois sur du code trivial libère l'attention pour le reste.

## Procédure pas à pas

Quatre étapes : installer, brancher, écrire (ou charger), téléverser.

### 1. Installer l'IDE Arduino

Téléchargez l'IDE depuis le site officiel `arduino.cc`, section *Software*. Deux versions coexistent : l'**IDE 2.x** (récente, recommandée — autocomplétion, débogueur, gestionnaire de cartes intégré) et l'**IDE 1.8.x** (legacy, plus légère, encore présente sur de nombreuses machines pédagogiques). Les captures de cette fiche utilisent l'IDE 2.x.

Sur Windows, l'installateur installe aussi les pilotes USB pour les cartes Arduino officielles. Sous Linux, ajoutez votre utilisateur au groupe `dialout` pour accéder au port série sans `sudo`. Sous macOS, rien à faire en plus.

Prendre capture d'écran de *la page de téléchargement arduino.cc/en/software, avec les liens Windows / macOS / Linux visibles*.

> [!warning]
> **Cartes clones et pilote CH340.** Les cartes Uno ou Nano clones (non officielles, achetées 5-10 € sur AliExpress) embarquent souvent une puce USB-série CH340 au lieu de l'ATmega16U2 d'origine. Le pilote n'est pas installé par défaut sous Windows — la carte n'apparaît alors pas dans la liste des ports. Téléchargez le pilote CH340 sur le site du fabricant (wch-ic.com) et redémarrez après installation.

### 2. Brancher la carte et la faire reconnaître

Branchez la carte avec un **câble USB de données**. Les câbles « charge only » des smartphones ne transmettent que l'alimentation, pas le signal — symptôme classique : la LED *ON* de la carte s'allume, mais l'IDE ne voit aucun port. C'est l'erreur n°1 des débuts.

Dans l'IDE, ouvrez le menu *Outils → Type de carte* et choisissez votre modèle (`Arduino Uno`, `Arduino Mega or Mega 2560`, `Arduino Nano`...). Puis *Outils → Port* et sélectionnez le port qui correspond à votre carte. Sous Windows il apparaît comme `COM3`, `COM4`... ; sous macOS comme `/dev/cu.usbmodem...` ; sous Linux comme `/dev/ttyACM0` ou `/dev/ttyUSB0`.

Prendre capture d'écran de *l'IDE Arduino 2.x ouvert, avec le menu Outils déroulé montrant la sélection carte + port active*.

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

Cliquez sur **Vérifier** (icône coche, en haut à gauche) — c'est la phase de *compilation*. Si tout est correct, la console en bas affiche `Sketch uses XXX bytes (X%) of program storage space`. Aucune ligne rouge.

Prendre capture d'écran de *l'IDE Arduino 2.x avec le code Blink dans l'éditeur et la console en bas affichant la fin de compilation réussie*.

### 4. Téléverser et observer

Cliquez sur **Téléverser** (icône flèche, à droite de Vérifier). L'IDE recompile et envoie le binaire à la carte via le port série. Pendant le téléversement, les LEDs *RX* et *TX* de la carte clignotent rapidement.

Une fois le téléversement terminé, la LED *L* (broche 13) se met à clignoter au rythme d'une seconde allumée, une seconde éteinte. **Le programme tourne — la prise en main est validée.**

Prendre capture d'écran ou photo de *la carte Arduino branchée, avec la LED L (broche 13) allumée*.

> [!tip]
> **Vérifier ≠ téléverser.** *Vérifier* compile sans envoyer à la carte (utile pour traquer une erreur de syntaxe sans risquer de casser un programme qui tourne). *Téléverser* compile puis envoie. Au moindre doute, *Vérifier* d'abord — ça évite d'attendre l'aller-retour USB pour découvrir une faute de frappe.

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

**Mauvais port sélectionné.** Si plusieurs cartes (ou un téléphone) sont branchées en USB, l'IDE peut proposer plusieurs ports. Téléverser sur le mauvais port échoue avec un message d'erreur cryptique — toujours vérifier *Outils → Port* avant chaque téléversement.

**Câble USB charge only.** Symptôme : la LED *ON* s'allume (la carte est alimentée), mais aucun port série n'apparaît dans l'IDE. Le câble transmet l'alimentation mais pas les données. Remplacez-le par un câble de données.

**Pilote CH340 manquant.** Les cartes clones bon marché ont une puce CH340 au lieu du chip USB officiel ; sans pilote, le port n'apparaît pas. À distinguer du piège précédent : ici, on peut avoir le bon câble et la carte alimentée, mais l'OS ne sait pas comment lui parler.

**Compilation OK ≠ téléversement OK.** Une compilation réussie valide la syntaxe du code, pas la connexion à la carte. Si le téléversement échoue avec `programmer is not responding` ou `avrdude: stk500_recv()`, la carte n'a pas répondu — port, câble ou carte à vérifier.

**Téléverser avec le moniteur série ouvert ailleurs.** Si une autre application (PlatformIO, un terminal externe, un autre IDE) tient le port ouvert, le téléversement échoue car le port est verrouillé. Fermer l'autre fenêtre, retenter.

**Confondre la LED *L* et la LED *ON*.** La LED *ON* est l'indicateur d'alimentation (toujours allumée quand la carte est sous tension). C'est la LED *L* (proche de la broche 13) qui clignote sous contrôle du programme. Si seul *ON* s'allume après téléversement, le code n'a peut-être pas pris.

**IDE 1.8.x vs 2.x.** Les chemins des menus diffèrent légèrement entre les deux versions (gestionnaire de cartes, gestionnaire de bibliothèques, traceur série). Si un tutoriel mentionne une option introuvable, vérifier la version installée — la nôtre est la 2.x.

## Cas particulier — Alternatives à l'IDE Arduino

Pour un projet plus structuré (versionnage Git fin, multi-fichiers, multi-plateformes), deux alternatives valent le détour :

- **Arduino CLI** — chaîne de compilation en ligne de commande, scriptable, parfaite en intégration continue.
- **PlatformIO** — extension VS Code qui gère unifié Arduino, ESP32, STM32 et bien d'autres. Gestionnaire de bibliothèques propre, débogage natif.

L'IDE Arduino reste le meilleur point d'entrée pédagogique ; les alternatives prennent leur sens quand le projet grossit. Voir [[firmware|firmware]] pour les enjeux de structuration du code embarqué.

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
