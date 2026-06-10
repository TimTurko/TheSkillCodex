---
title: Prise en main de MicroPython
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython
aa: []
draft: false
---

La **prise en main de MicroPython** consiste à installer l'éditeur **Thonny**, à déposer **une fois** le firmware MicroPython sur la carte (un Raspberry Pi Pico 2 ici), puis à exécuter un premier programme. La différence avec l'[[arduino-prise-en-main|Arduino]] est de fond : on ne compile pas un binaire à chaque fois ; on installe un **interpréteur** sur la carte, après quoi on lui envoie du Python — au clavier dans le [[micropython-repl|REPL]], ou sous forme de fichiers `.py`. Le programme cible reste le **Blink**, l'équivalent embarqué du « Hello World ».

## À quoi ça sert ?

La prise en main valide toute la chaîne : éditeur, firmware sur la carte, liaison USB, REPL. Si un maillon manque, le Blink ne clignote pas — et on le sait tout de suite, sur du code trivial.

Au-delà du premier programme, elle installe deux réflexes propres à MicroPython :

- **Le REPL comme bac à sable.** Une fois le firmware en place, on peut taper une commande (`led.on()`) et voir l'effet **immédiatement**, sans téléverser quoi que ce soit. C'est l'atout majeur de l'approche scriptée pour explorer un capteur ou un module.
- **Le modèle « fichiers sur la carte ».** Un programme MicroPython est un fichier `.py` enregistré sur la carte. Le fichier nommé `main.py` se lance **tout seul à la mise sous tension** — la carte devient autonome, sans ordinateur.

## Procédure pas à pas

Cinq étapes : installer Thonny, flasher le firmware, se connecter, écrire (au REPL puis en fichier), rendre autonome.

### 1. Installer Thonny

Téléchargez **Thonny** depuis `thonny.org` et installez-le (Windows / macOS / Linux). C'est l'IDE débutant de référence pour MicroPython : il sait flasher le firmware, ouvre le REPL, et gère les fichiers de la carte.

Prendre capture d'écran de *la page de téléchargement thonny.org avec les liens par système*.

### 2. Flasher le firmware MicroPython sur le Pico 2

C'est l'étape propre à MicroPython, à faire **une seule fois** par carte. Le plus simple passe par Thonny :

- branchez le Pico 2, puis, en bas à droite de Thonny, cliquez sur le sélecteur d'interpréteur → **« Installer MicroPython… »** (ou *Outils → Options → Interpréteur*) ;
- choisissez la variante **Raspberry Pi Pico / Pico 2**, et suivez l'invite : Thonny demande de **maintenir le bouton BOOTSEL** en rebranchant la carte, puis installe le firmware.

> [!tip]
> **Méthode manuelle (sans Thonny).** Maintenez le bouton **BOOTSEL** du Pico **enfoncé en branchant l'USB** : la carte apparaît comme une **clé USB** nommée `RP2350` (ou `RPI-RP2`). Glissez-y le fichier `.uf2` du firmware Pico 2, téléchargé sur `micropython.org` (rubrique *Download*, carte Pico 2) ou `raspberrypi.com`. La carte redémarre en exécutant MicroPython.

Prendre capture d'écran de *la boîte de dialogue « Installer MicroPython » de Thonny, variante Pico 2 sélectionnée*.

### 3. Se connecter à la carte (le REPL)

Dans *Outils → Options → Interpréteur*, choisissez **« MicroPython (Raspberry Pi Pico) »** et le **port** de la carte. En bas de Thonny, le panneau **Shell** affiche l'invite du REPL :

```
>>>
```

C'est l'interpréteur **qui tourne sur le Pico**. Tapez pour vérifier :

```python
>>> print("Bonjour depuis le Pico")
Bonjour depuis le Pico
```

Prendre capture d'écran de *Thonny avec l'interpréteur réglé sur « MicroPython (Raspberry Pi Pico) » et le Shell affichant l'invite >>> et un print*.

### 4. Allumer la LED… au REPL, puis en programme

D'abord **en direct**, ligne à ligne — c'est là que l'approche scriptée brille :

```python
>>> from machine import Pin
>>> led = Pin("LED", Pin.OUT)   # LED integree (GP25 sur Pico 2 ; "LED" marche aussi sur Pico 2 W)
>>> led.on()                    # la LED s'allume IMMEDIATEMENT
>>> led.off()
```

Puis le **Blink** comme programme. Dans l'éditeur de Thonny, saisissez :

```python
from machine import Pin
from time import sleep

led = Pin("LED", Pin.OUT)

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

Notez la différence avec Arduino : **pas de `setup()`/`loop()`**, mais du code qui s'exécute de haut en bas, et une boucle `while True:` pour répéter. Les blocs sont délimités par l'**indentation**, pas par des accolades (voir [[micropython-langage|le langage]]).

Cliquez sur **Exécuter** (le bouton vert) : Thonny envoie le script au Pico et le lance. La LED clignote. **Le programme tourne — la prise en main est validée.** Pour l'arrêter, le bouton **Stop** (rouge), ou `Ctrl-C` dans le Shell.

Prendre capture d'écran de *Thonny avec le script Blink dans l'éditeur, le bouton Exécuter, et le Pico LED allumée*.

### 5. Rendre la carte autonome (`main.py`)

Tant que le script est lancé depuis Thonny, il s'arrête si l'on débranche. Pour qu'il tourne **seul à la mise sous tension**, enregistrez-le **sur la carte** sous le nom **`main.py`** (*Fichier → Enregistrer sous… → Raspberry Pi Pico*). Débranchez/rebranchez : la LED clignote sans ordinateur.

Prendre capture d'écran de *la boîte « Enregistrer sous » de Thonny proposant « Raspberry Pi Pico » comme destination, fichier nommé main.py*.

## Exemple — Blink modifié

Pour vérifier qu'on contrôle réellement le comportement, changez le rythme :

```python
from machine import Pin
from time import sleep

led = Pin("LED", Pin.OUT)

while True:
    led.on()
    sleep(0.1)    # eclair court
    led.off()
    sleep(0.9)
```

Relancez : un éclair court toutes les secondes. Ce **petit pas** — modifier, relancer, observer — est le geste de base de tous les tutoriels suivants. (On peut aussi tester `led.toggle()` au REPL pour basculer l'état d'un coup.)

## Pièges

**Interpréteur resté sur le PC.** Si Thonny pointe sur le *Python local* (et non « MicroPython (Raspberry Pi Pico) »), le code s'exécute sur l'ordinateur, pas sur la carte — `from machine import Pin` échoue. Vérifier l'interpréteur en bas à droite.

**Firmware non installé.** Sans l'étape 2, la carte n'est pas un interpréteur MicroPython : Thonny ne s'y connecte pas. Le BOOTSEL ne sert qu'à **flasher le firmware**, pas à chaque exécution.

**Script lancé depuis Thonny ≠ autonome.** Un programme exécuté par Thonny s'arrête au débranchement. Pour l'autonomie, l'enregistrer **sur la carte** sous `main.py` (étape 5).

**Boucle infinie qui « bloque » la carte.** Un `while True:` occupe l'interpréteur : pour reprendre la main au REPL, **Stop** ou `Ctrl-C`. Si `main.py` boucle dès le démarrage et empêche toute connexion, rebrancher en **BOOTSEL** et re-flasher (ou supprimer `main.py`).

**Réflexe 5 V.** Le Pico 2 est en **3,3 V, non tolérant 5 V** : ne pas appliquer 5 V sur une broche (voir [[niveaux-de-tension|niveaux de tension]]).

**Câble « charge seule ».** Carte alimentée mais aucun port : changer pour un câble de données.

## Cas particulier — Autres éditeurs et autres cartes

- **Ligne de commande** — `mpremote` (officiel) et `rshell` pilotent la carte et copient des fichiers depuis un terminal, pratiques pour scripter ou pour l'intégration continue.
- **VS Code** — l'extension *MicroPico* (ou *Pico-W-Go*) apporte REPL et envoi de fichiers dans VS Code, pour un projet plus structuré.
- **Autres cartes** — le même Thonny + le firmware adapté programment un [[esp32|ESP32]] ou une Pyboard en MicroPython ; seuls le firmware et quelques broches changent.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — flasher le firmware et lancer un premier programme est l'acte fondateur de la PoC logicielle en MicroPython. Tant que le Blink ne clignote pas, rien en aval n'est crédible.
- **Tous les tutoriels MicroPython aval** — faites le Blink (et essayez le REPL) au moins une fois, sur le matériel cible, le plus tôt possible.

Le REPL change la façon de déboguer : avant d'écrire un programme complet, on **teste une ligne** sur la carte. Prendre ce réflexe dès la prise en main fait gagner un temps considérable sur tout le reste du module.

## Aller plus loin

- [Documentation MicroPython pour le Pico (Raspberry Pi)](https://www.raspberrypi.com/documentation/microcontrollers/micropython.html) — installation, exemples.
- [[micropython-langage|Le langage MicroPython]] — après le premier blink, les briques du langage.
- [[micropython-simulation|Simuler avec Wokwi]] — essayer sans matériel.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-langage|Le langage MicroPython]] — bases du langage, à suivre juste après
- [[micropython-repl|Le REPL]] — le shell interactif découvert ici, en détail
- [[arduino-prise-en-main|Prise en main d'Arduino]] — l'équivalent en C++ compilé (contraste)
- [[niveaux-de-tension|Niveaux de tension]] — le Pico 2 est en 3,3 V, non tolérant 5 V
