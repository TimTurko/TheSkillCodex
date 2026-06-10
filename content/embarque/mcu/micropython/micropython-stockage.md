---
title: Stockage persistant (fichier, EEPROM)
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-modules
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Conserver des données **après coupure d'alimentation** (calibration, mode, compteur d'événements) est un besoin récurrent. Sur Arduino, on écrit dans l'[[arduino-eeprom|EEPROM intégrée]] via `EEPROM.h`. **Le Pico n'a pas d'EEPROM** : la persistance passe par un **fichier écrit sur la mémoire flash** — c'est-à-dire le **système de fichiers MicroPython** lui-même (le même qui héberge vos `.py`). C'est la **divergence majeure** avec le module Arduino : pas d'adressage à l'octet, mais des fichiers (texte ou JSON), bien plus pratiques. Pour de la vraie EEPROM, on ajoute une **puce EEPROM I2C externe** (24LCxx).

## À quoi ça sert ?

Cas d'usage : **compteur persistant** (démarrages, cycles, durée d'usage) ; **paramètres de calibration** (offset, seuils, mode) ; **dernière configuration** (reprendre où on s'était arrêté) ; **petits logs**.

Le Pico stocke ces données dans un **fichier** sur sa flash interne. Avantages sur l'EEPROM brute d'Arduino : on manipule des noms de fichiers et des structures (JSON) au lieu de numéros d'octets. Limites : la flash a un **nombre de cycles d'écriture fini** (n'écrire que sur changement), et le fichier partage la flash avec le code (ne pas la saturer).

## Procédure pas à pas

Quatre étapes : comprendre où vivent les données, lire/écrire un fichier, économiser les écritures, gérer des structures.

### 1. Comprendre : un fichier sur la flash

Le système de fichiers MicroPython est **persistant** : un fichier créé par le programme survit aux redémarrages et aux coupures. On le lit/écrit avec `open()` comme en Python standard. `import os` permet de l'inspecter (`os.listdir()`, `os.remove()`).

### 2. Lire / écrire un fichier (texte)

```python
# Ecrire une valeur
with open("config.txt", "w") as f:        # "w" cree ou ecrase
    f.write("42")

# Relire — en gerant l'absence de fichier (premier demarrage)
try:
    with open("config.txt") as f:
        valeur = int(f.read())
except OSError:
    valeur = 0                            # fichier absent
print(valeur)
```

Point clé : un fichier qui n'existe pas encore lève **`OSError`** à l'ouverture en lecture. On l'attrape avec `try/except` pour fournir une valeur par défaut au premier démarrage — l'équivalent de la détection « EEPROM neuve » d'Arduino, en plus propre.

### 3. Économiser les écritures (usure de la flash)

Comme l'EEPROM, la flash supporte un **nombre fini de cycles d'écriture** par secteur. **Discipline obligatoire** : ne pas écrire en boucle, n'écrire **que quand la valeur change**.

```python
def enregistrer(valeur):
    try:
        with open("config.txt") as f:
            actuelle = f.read()
    except OSError:
        actuelle = None
    if str(valeur) != actuelle:           # ecrire seulement si different
        with open("config.txt", "w") as f:
            f.write(str(valeur))
```

### 4. Gérer des structures avec JSON

Pour plusieurs paramètres ensemble, le module **`json`** sérialise un dictionnaire entier — bien plus simple que de calculer des adresses d'octets :

```python
import json

config = {"seuil": 512, "coeff": 1.04, "mode": 1, "demarrages": 0}

with open("config.json", "w") as f:       # sauver
    json.dump(config, f)

with open("config.json") as f:            # charger
    config = json.load(f)
```

Le dictionnaire documente lui-même le format des données et facilite l'évolution (ajouter une clé ne casse rien si on gère son absence).

## Exemple — Compteur de démarrages persistant

Compter le nombre de démarrages du Pico et l'afficher.

```python
import json

FICHIER = "compteur.json"

try:
    with open(FICHIER) as f:
        data = json.load(f)
except OSError:
    data = {"demarrages": 0}              # premier demarrage : fichier absent

data["demarrages"] += 1

with open(FICHIER, "w") as f:
    json.dump(data, f)

print("Demarrage n°", data["demarrages"])
```

Lancer (`Demarrage n° 1`), débrancher, rebrancher — la valeur s'incrémente (`n° 2`, `n° 3`…) et persiste après une déconnexion totale. (Ici on écrit à chaque démarrage, ce qui est acceptable ; pour des écritures fréquentes en boucle, appliquer l'économie de l'étape 3.)

## Pièges

**Croire que le Pico a une EEPROM.** Il n'en a pas : la persistance se fait par **fichier** sur la flash (ou EEPROM I2C externe). Du code Arduino `EEPROM.read/write` n'a pas d'équivalent direct — on raisonne en fichiers.

**Ne pas gérer le fichier absent.** Lire un fichier inexistant lève `OSError`. **Toujours** encadrer la première lecture d'un `try/except OSError` et fournir une valeur par défaut, sinon le programme plante au premier démarrage.

**Écrire en boucle.** Écrire le fichier à chaque tour de boucle use la flash (cycles finis) et peut, à terme, la corrompre. N'écrire **que sur changement** (étape 3) ou sur événement (changement de mode, bouton).

**Coupure pendant l'écriture.** Une coupure pendant `f.write()` peut laisser un fichier **tronqué/corrompu**. Pour des données critiques : écrire dans un fichier temporaire puis le renommer (`os.rename`) une fois complet, ou garder deux copies et un indicateur de validité.

**Saturer la flash.** Le fichier de données partage la flash avec le code et les bibliothèques. Écrire de gros volumes (logs continus) finit par la remplir — pour ça, utiliser une **carte SD** ([[micropython-spi|SPI]]).

**Type mal reconstruit.** `f.read()` renvoie une **chaîne** : convertir (`int(...)`, `float(...)`) à la relecture. JSON, lui, restitue directement les types (nombre, booléen, liste, dict) — préférer JSON dès qu'il y a plusieurs champs.

**JSON invalide à la lecture.** Un fichier JSON corrompu fait échouer `json.load` (lève une exception). Encadrer aussi le `json.load` d'un `try/except` et repartir d'une config par défaut si la lecture échoue.

## Cas particulier — EEPROM I2C externe (24LCxx)

Pour une vraie EEPROM (plus de cycles d'écriture que la flash, et indépendante du code), on ajoute une **puce 24LCxx** sur le bus [[micropython-i2c|I2C]]. On y accède par adresse mémoire via `i2c.writeto_mem(adresse, registre, data)` et `i2c.readfrom_mem(adresse, registre, n)` (ou un pilote dédié). Utile pour des compteurs très sollicités ou pour isoler les données du firmware ; pour la plupart des projets école, le **fichier sur la flash suffit largement**.

## Raccrochage projet

- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — au premier paramètre réglable (seuil, mode), envisager la sauvegarde par fichier dès la PoC pour ne pas recoder le paramétrage à chaque cycle.
- **Étape 4 de la [[dossier-technique|phase de dossier technique]]** — la persistance des paramètres et compteurs fait partie des choix d'architecture du firmware.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — la calibration en condition réelle se sauvegarde pour ne pas être perdue à la coupure.

Sauvegarder par fichier transforme un programme de démo en système qui *se souvient* — et la voie « fichier sur la flash » est plus simple et plus lisible que l'EEPROM brute d'Arduino.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-modules|Modules]] — prérequis (`json`, `os`)
- [[micropython-i2c|I2C]] — pour une EEPROM externe 24LCxx
- [[micropython-spi|SPI]] — pour les gros volumes (carte SD)
- [[firmware|Firmware]] — organisation du code embarqué incluant la persistance
- [[arduino-eeprom|Stockage EEPROM (Arduino)]] — l'équivalent C++ (`EEPROM.h`) et la divergence
