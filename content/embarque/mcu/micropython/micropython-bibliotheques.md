---
title: Utiliser une bibliothèque
type: tuto
phases:
  - preuve-de-concept
  - concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Une **bibliothèque** (ou *library*) est un module de code prêt à l'emploi qui encapsule la communication avec un composant : `ssd1306` pour un écran OLED, `dht` pour un capteur DHT11/22, un pilote de capteur sur [[micropython-i2c|I2C]]. Au lieu de réécrire le protocole d'un capteur à chaque projet, on **importe** la bibliothèque et on utilise ses fonctions. La logique diffère d'Arduino sur un point : il n'y a pas de gestionnaire d'`#include` à compiler — une bibliothèque MicroPython est un **fichier `.py`** (ou un module gelé dans le firmware) qu'on rend disponible sur la carte, puis qu'on `import`. Voir aussi [[micropython-modules|modules et import]].

## À quoi ça sert ?

- **Économiser du temps** — afficher un texte sur OLED SSD1306 sans bibliothèque demande des dizaines de lignes d'I2C + polices ; avec `ssd1306`, quelques lignes.
- **Bénéficier de l'expérience accumulée** — les bibliothèques maintenues ont essuyé les bugs subtils (timing, conditions limites) qu'on n'a pas envie de redécouvrir.
- **Faciliter le portage** — une même bibliothèque couvre souvent plusieurs cartes MicroPython.

## Procédure pas à pas

Quatre voies/étapes : reconnaître ce qui est déjà intégré, trouver, installer, importer et lire la doc.

### 1. Reconnaître les modules déjà intégrés

Certaines bibliothèques sont **gelées dans le firmware** — rien à installer, juste `import`. Sur le Pico : `machine`, `time`, **`dht`**, `neopixel`, `rp2`… Un `help("modules")` au [[micropython-repl|REPL]] liste les modules disponibles.

### 2. Trouver une bibliothèque

- **micropython-lib** — la collection officielle (pilotes de capteurs, utilitaires) ;
- **GitHub du fabricant** (Pimoroni, Adafruit pour CircuitPython à adapter, dépôts communautaires) ;
- recherche `nom_du_composant micropython` dans un moteur. Vérifier la date du dernier commit et l'activité du dépôt.

### 3. Installer la bibliothèque

**Méthode A — gestionnaire de Thonny** (recommandé) : *Outils → Gérer les paquets…*, chercher le nom (`ssd1306`), *Installer*. Thonny l'enregistre **sur la carte**.

![Fenêtre « Gérer les paquets » de Thonny, recherche « ssd1306 » et bouton Installer visible.|600](/ressources/img/micropython-bibliotheques/gerer-les-paquets.png)

**Méthode B — `mip`** (carte connectée au réseau, Pico 2 W / ESP32) :

```python
import mip
mip.install("ssd1306")
```

**Méthode C — copie manuelle** : télécharger le `.py` de la bibliothèque et l'enregistrer **sur la carte** (comme un fichier de plus). C'est la voie de repli quand la carte n'a pas de réseau.

### 4. Importer et lire la doc

Une fois le `.py` sur la carte, on l'`import` :

```python
from machine import Pin, I2C
from ssd1306 import SSD1306_I2C

i2c = I2C(0, scl=Pin(5), sda=Pin(4))   # bus I2C 0 : SCL=GP5, SDA=GP4
ecran = SSD1306_I2C(128, 64, i2c)      # écran 128×64 pixels
ecran.text("Bonjour", 0, 0)            # écrit en haut à gauche (x=0, y=0)
ecran.show()                           # transfère le tampon vers l'écran
```

Sources de doc : le **README** du dépôt, les **exemples** fournis, et — pour les bibliothèques courtes — le **code source** lui-même (lisible, c'est du Python).

## Exemple — Lire un DHT11 avec le module intégré `dht`

Cas complet : `dht` est **gelé dans le firmware** du Pico — aucune installation.

**Câblage** : module DHT11, `+` → 3,3 V, `−` → GND, `OUT` → GP2.

![Câblage du module DHT11 sur le Pico : broche + vers 3,3 V, broche − vers GND, broche OUT (données) vers GP2 ; la résistance de tirage est intégrée au module.|560](/ressources/img/micropython-bibliotheques/montage-dht11.svg)

```python
from machine import Pin
import dht
from time import sleep

capteur = dht.DHT11(Pin(2))     # capteur DHT11 sur GP2

while True:
    sleep(2)                 # 1 mesure/s max sur DHT11 ; 2 s laisse de la marge
    capteur.measure()        # déclenche une mesure (protocole 1-wire encapsulé)
    print("T =", capteur.temperature(), "°C   H =", capteur.humidity(), "%")
```

Souffler sur le capteur — l'humidité monte. Avant `dht`, lire ce capteur demandait de coder à la main son protocole 1-wire au timing strict — la bibliothèque encapsule tout ça.

## Pièges

**Bibliothèque pas sur la carte.** `import ssd1306` échoue (`ImportError`) si le `.py` n'a pas été enregistré **sur la carte** (pas seulement ouvert dans Thonny). Vérifier les fichiers de la carte.

**Confondre CircuitPython et MicroPython.** Beaucoup de pilotes Adafruit sont écrits pour **CircuitPython**, proche mais distinct : ils peuvent ne pas marcher tels quels. Chercher la version MicroPython, ou adapter.

**Version incompatible avec la carte.** Un pilote écrit pour ESP32 peut supposer des broches ou un module absent sur le Pico. Vérifier la cible.

**Écraser un module intégré.** Nommer son fichier `dht.py` masque le module intégré `dht`. Choisir un autre nom.

**Mémoire saturée.** Importer de grosses bibliothèques sur une carte à RAM limitée peut lever `MemoryError`. Voir [[micropython-memoire|gestion mémoire]] (compilation en `.mpy`, modules gelés).

## Cas particulier — `.mpy` et modules gelés

Pour gagner de la RAM, une bibliothèque peut être **pré-compilée en `.mpy`** (bytecode) ou **gelée dans le firmware** (compilée avec MicroPython). Au-delà du projet école, c'est la voie pour embarquer beaucoup de code sur une carte contrainte — voir [[micropython-memoire|gestion mémoire]].

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — au premier capteur ou actionneur évolué (OLED, BMP280), installer la bonne bibliothèque et faire tourner son exemple AVANT d'écrire du code projet. C'est le test de validation matériel + outil.
- **Étape 4 de la [[concept|phase de concept]]** — la disponibilité d'une bibliothèque MicroPython maintenue est un critère de choix d'un composant : un composant sans pilote ajoute des semaines de développement.

Une bibliothèque bien choisie est l'un des plus gros leviers d'efficacité. À l'inverse, réinventer ce qu'une bibliothèque éprouvée fait déjà se paye en bugs sur la durée.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-modules|Modules et import]] — le mécanisme `import` sous-jacent
- [[micropython-afficheur|Afficheur OLED]] — exemple d'usage de `ssd1306`
- [[micropython-i2c|I2C]] — le bus de beaucoup de modules à bibliothèque
- [[bibliotheque|Bibliothèque]] — la notion transverse
- [[arduino-bibliotheques|Utiliser une bibliothèque (Arduino)]] — l'équivalent C++ (`#include`)
