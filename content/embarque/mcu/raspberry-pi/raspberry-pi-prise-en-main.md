---
title: Prise en main du Raspberry Pi
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - raspberry-pi
prerequis:
  - raspberry-pi
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

La **prise en main d'un Raspberry Pi** consiste à installer son système d'exploitation sur une carte microSD, à le démarrer **sans écran ni clavier** (en mode *headless*), et à s'y connecter à distance par **SSH** pour y lancer ses premiers programmes. C'est très différent de la prise en main d'un [[microcontroleur|microcontrôleur]] : on ne flashe pas un programme, on **installe un ordinateur**, qu'on pilotera ensuite comme une machine Linux distante. Une fois ce socle en place, écrire du code (en Python le plus souvent) et [[raspberry-pi-gpio|piloter le matériel]] devient immédiat.

## À quoi ça sert ?

Avant de pouvoir faire quoi que ce soit d'utile avec un Pi — lire un capteur, faire de la vision, servir une page web — il faut un système qui démarre et un moyen d'y accéder. Cette étape valide les deux. En projet, on ne branche presque jamais d'écran sur le Pi embarqué dans la maquette : il vit **headless**, alimenté et connecté au réseau, et on l'administre depuis son propre ordinateur portable. Maîtriser ce mode dès le départ, c'est se donner le bon réflexe pour tout le reste du projet.

![Topologie headless : poste de développement et Raspberry Pi sans écran reliés au même réseau local, session SSH du poste vers le Pi|600](/ressources/img/raspberry-pi-prise-en-main/topologie-headless.svg)

## 1. Choisir et flasher le système

L'outil officiel est **Raspberry Pi Imager** (à télécharger sur `raspberrypi.com`, disponible Windows / macOS / Linux). Il écrit une image de système d'exploitation sur une carte microSD, qui sera le « disque » du Pi.

Insérez une carte microSD (16 Go ou plus, de bonne qualité) dans votre ordinateur, lancez Imager, et faites les trois choix proposés : le **modèle de Pi**, le **système**, et le **stockage** (la carte SD).

Pour le système, **Raspberry Pi OS** est le choix par défaut, et il existe en deux saveurs qui comptent :

- **Raspberry Pi OS Lite** — sans interface graphique. C'est le bon choix pour un Pi embarqué piloté en SSH : plus léger, plus rapide à démarrer, moins de surface inutile.
- **Raspberry Pi OS (with desktop)** — avec bureau graphique. Utile si on branche un écran, plus lourd pour un usage headless.

Prendre capture d'écran de *la fenêtre principale de Raspberry Pi Imager, avec les trois boutons « Choisir le modèle », « Choisir l'OS » et « Choisir le stockage »*.

## 2. Préparer le démarrage headless — avant de flasher

C'est l'étape clé du mode sans écran, et elle se règle **avant** d'écrire la carte. Imager propose une **personnalisation de l'OS** (une fenêtre apparaît à la fin, ou via *Modifier les réglages* / `Ctrl+Maj+X`). On y configure tout ce qui, sinon, demanderait un écran au premier démarrage :

- **le nom d'hôte** (*hostname*), par exemple `monpi` — il servira à joindre la carte sur le réseau ;
- **un nom d'utilisateur et un mot de passe** — les versions récentes de Raspberry Pi OS ne créent plus d'utilisateur `pi` par défaut, il faut donc le définir ici ;
- **les identifiants Wi-Fi** (SSID + mot de passe) si le Pi se connecte sans câble — sinon, un câble Ethernet suffit ;
- **activer SSH** (onglet *Services*) — indispensable pour la connexion à distance. Choisir l'authentification par mot de passe (simple) ou par clé (plus sûr).

Prendre capture d'écran de *l'onglet « Général » de la personnalisation OS d'Imager, avec les champs nom d'hôte, nom d'utilisateur/mot de passe et Wi-Fi renseignés*.

Prendre capture d'écran de *l'onglet « Services » de la personnalisation OS, case « Activer SSH » cochée*.

Validez, puis lancez l'écriture. Imager écrit l'image, applique vos réglages, puis vérifie la carte — quelques minutes.

> [!warning]
> **Sans cette préparation, un Pi headless est inaccessible.** Si vous flashez l'image sans activer SSH ni configurer le réseau, la carte démarrera bien mais vous n'aurez aucun moyen d'y entrer sans brancher un écran et un clavier. C'est l'erreur la plus fréquente du premier essai.

## 3. Premier démarrage et connexion SSH

Insérez la carte dans le Pi, branchez son **alimentation** (voir le piège ci-dessous), et patientez : le premier démarrage est plus long (le système étend la partition, applique la configuration), comptez une à deux minutes.

Depuis votre ordinateur, sur le **même réseau**, ouvrez un terminal et connectez-vous :

```bash
ssh monutilisateur@monpi.local
```

Le suffixe `.local` fonctionne grâce à la résolution de noms locale (mDNS) ; si elle échoue sur votre réseau, utilisez directement l'adresse IP du Pi (visible sur le tableau de bord de votre box, ou via un scan réseau). À la première connexion, SSH demande de confirmer l'empreinte de la machine (`yes`), puis le mot de passe défini dans Imager.

Prendre capture d'écran de *un terminal affichant la connexion SSH réussie, avec l'invite de commande du Pi (par exemple `monutilisateur@monpi:~ $`)*.

L'invite change : vous êtes **dans** le Pi. Tout ce que vous tapez s'exécute sur la carte, à distance.

## 4. Lancer un premier programme Python

Python 3 est préinstallé. Vérifiez-le, puis lancez l'interpréteur interactif :

```bash
python3 --version
python3
```

```python
>>> import platform
>>> platform.machine()
'aarch64'
>>> print("Bonjour depuis le Pi !")
Bonjour depuis le Pi !
>>> exit()
```

Pour un vrai fichier, créez `bonjour.py` avec l'éditeur en ligne de commande `nano` :

```bash
nano bonjour.py
```

```python
import platform
print("Bonjour depuis", platform.node(), "—", platform.machine())
```

Enregistrez (`Ctrl+O`, *Entrée*), quittez (`Ctrl+X`), puis exécutez :

```bash
python3 bonjour.py
```

Le programme s'exécute sur le Pi et affiche son nom et son architecture. **Le système tourne, l'accès est validé — la prise en main est faite.** L'étape suivante est de faire dialoguer ce programme avec le monde physique : [[raspberry-pi-gpio|piloter les GPIO depuis Linux]].

## Pièges

**Alimentation sous-dimensionnée.** C'est le piège n°1 du Pi. Un chargeur de téléphone faible provoque des **chutes de tension** : redémarrages intempestifs, carte SD corrompue, comportements erratiques. Un Pi 5 réclame une alimentation USB-C de forte intensité (~5 V / 5 A) ; un Pi 4, ~5 V / 3 A. Un éclair affiché à l'écran (ou signalé dans les journaux) indique une sous-tension — à corriger en priorité.

**SSH non activé / réseau non configuré.** Vu plus haut : sans préparation headless, pas d'accès. Reflasher la carte en cochant SSH est plus rapide que de chercher à contourner.

**Carte microSD de mauvaise qualité.** Les cartes bas de gamme sont lentes et tombent en panne. Une corruption de carte se traduit par un système qui ne démarre plus. Privilégier une carte de marque, classe rapide, et faire des sauvegardes de l'image quand le système est configuré.

**Couper l'alimentation brutalement.** Comme tout ordinateur, le Pi écrit sur son « disque » (la carte SD) ; débrancher sans arrêt propre (`sudo poweroff`) risque de corrompre le système. Toujours arrêter proprement avant de couper.

**Mauvais réseau.** SSH ne fonctionne que si votre ordinateur et le Pi sont sur le **même réseau**. Sur un réseau d'école cloisonné, `.local` peut être bloqué — passer par l'adresse IP, ou utiliser un câble Ethernet direct.

## Aller plus loin

*Au-delà de ce premier démarrage, administrer le système — mettre à jour les paquets (`apt`), installer des bibliothèques, lancer des services au démarrage, sécuriser l'accès — relève de l'**administration Linux**, un domaine à part entière. Ce wiki s'arrête au seuil utile : un Pi qui démarre, accessible en SSH, prêt à exécuter du Python. Pour le reste, la [documentation officielle Raspberry Pi](https://www.raspberrypi.com/documentation/) et un cours Linux sont les bonnes ressources.*

- [Raspberry Pi OS et Imager](https://www.raspberrypi.com/software/) — téléchargement et guide officiel.
- [Documentation Raspberry Pi](https://www.raspberrypi.com/documentation/) — installation, configuration, dépannage.

## Voir aussi

- [[raspberry-pi|Raspberry Pi]] — hub du module SBC
- [[raspberry-pi-gpio|Piloter les GPIO depuis Linux]] — l'étape suivante : dialoguer avec le matériel
- [[systeme-d-exploitation|Système d'exploitation]] — ce qu'apporte (et coûte) la couche OS
- [[microcontroleur|Microcontrôleur]] — hub mère, panorama des familles et aide au choix
