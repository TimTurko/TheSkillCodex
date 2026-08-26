---
title: Utiliser un shield / une carte d'extension
type: tuto
phases:
  - concept
  - preuve-de-concept
  - dossier-technique
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/micropython/micropython-shield.md
source_sha256: d29aaea902375bf2912573a87fbddce223a0b1304b06a02e191c1390104966ac
---

Sur Arduino, un **shield** est une carte d'extension qui s'empile par-dessus la carte mère en reprenant le format Uno. Le Pico **ne suit pas ce standard** : il a son propre brochage (40 broches), et son écosystème d'extension prend deux formes — des **cartes porteuses** (*carrier boards*) sur lesquelles on enfiche le Pico, et des **cartes d'extension / packs / HATs** conçus pour son brochage. La logique reste celle du shield : une carte dédiée à une fonction, qui **accapare un jeu de broches précis** qu'il faut connaître pour éviter les conflits. Là où un [[micropython-module-en|module]] se relie par fils Dupont, une carte d'extension se *clipse* — pas de câblage.

## À quoi ça sert ?

C'est la voie rapide pour ajouter une fonction conséquente sans étude de câblage : une **carte porteuse** (type Maker Pi Pico, Pico Breadboard Kit) expose les broches du Pico vers des borniers, ajoute boutons/LED/buzzer/lecteur SD. Un **pack** (écran, capteurs, relais) se branche directement sur la rangée de broches. Trois apports : gain de temps, robustesse mécanique (enfichage rigide), et un câblage déjà documenté. Limite, comme pour le shield Arduino : la carte occupe ses broches en exclusivité.

## Procédure pas à pas

Quatre étapes : identifier le brochage occupé, enficher, alimenter, installer la bibliothèque.

### 1. Identifier les broches occupées

Toute carte d'extension utilise des **GPxx précis**. Pour les connaître : la **documentation officielle** (à lire avant d'engager le choix de la carte et avant de câbler autre chose), la **sérigraphie** de la carte, ou un test en enfichant puis en repérant les broches sollicitées. C'est l'étape qui évite les conflits : si une carte écran utilise le SPI sur certaines broches, ces broches ne sont plus libres pour autre chose.

### 2. Enficher la carte

Opération mécanique : aligner le Pico (ou la carte d'extension) sur le connecteur, pousser doucement jusqu'à l'assise. Points de vigilance : **aligner avant de pousser** (une broche tordue entre dans le mauvais trou) ; **respecter le sens** (repère USB / broche 1) ; **ne jamais enficher/retirer sous tension** (débrancher l'USB d'abord).

### 3. Alimenter l'ensemble

- **Extension faible puissance** (écran, capteurs) — l'USB du Pico suffit.
- **Extension à actionneurs** (relais, moteurs) — **alimentation séparée pour la charge** (bornier de la carte porteuse), GND commun avec le Pico. Voir [[micropython-alimentation-en|alimenter la carte]].

### 4. Installer la bibliothèque

La plupart des cartes d'extension ont une bibliothèque dédiée (souvent fournie par le fabricant, ex. Pimoroni). Voir [[micropython-bibliotheques-en|utiliser une bibliothèque]]. Une fois sur la carte, on pilote chaque fonction par les **GPxx documentés** :

```python
from machine import Pin
# Exemple illustratif : la doc de la carte indique le GP de chaque fonction
buzzer = Pin(18, Pin.OUT)     # GP à remplacer par celui de votre carte
buzzer.on()
```

## Pièges

**Conflit de broches.** Deux extensions qui veulent les mêmes GP ne cohabitent pas. Lire les brochages avant de combiner.

**SPI/I2C partagé.** Plusieurs périphériques sur le même bus partagent les broches mais doivent avoir des **`CS`/adresses distincts**. Sinon ils répondent en même temps et la communication est corrompue.

**Carte sous-alimentée.** Une extension à actionneurs qui tire son courant via l'USB fait rebooter le Pico. Alimentation externe dès qu'il y a de la puissance.

**Brochage 3,3 V.** Une carte d'extension prévue pour une logique 5 V (rare, mais existe via adaptateurs Arduino) doit être compatible 3,3 V — sinon translateur de niveau ([[niveaux-de-tension-en|niveaux de tension]]).

**Enfichage à chaud.** Enficher/retirer sous tension peut détruire des broches par court-circuit transitoire. Toujours débrancher l'USB d'abord.

## Cas particulier — Shields Arduino sur Pico, et carte porteuse maison

- **Réutiliser un shield Arduino** sur un Pico nécessite une **carte d'adaptation** (Pico-to-Uno) qui remappe les broches. C'est possible, mais le code doit pointer les bons GP, et la compatibilité 3,3 V doit être vérifiée.
- **Carte porteuse maison** — une plaque pré-percée ou un PCB simple qui enfiche le Pico et route quelques composants discrets : l'étape intermédiaire entre la breadboard (volatile) et le PCB dédié, et un démonstrateur final plus convaincant qu'un montage sur breadboard.

## Raccrochage projet

- **Étape 4 de la [[concept-en|phase de concept]]** — une carte porteuse/extension disponible peut être un accélérateur de PoC (« on prend cette carte, on gagne du temps »).
- **Étape 2 de la [[preuve-de-concept-en|phase de preuve de concept]]** — enfichage et test de l'extension isolée avant intégration.
- **Étape 4 de la [[dossier-technique-en|phase de dossier technique]]** — décision « carte porteuse » vs « PCB dédié » sur le critère robustesse / délai / reproductibilité.

Une carte d'extension bien choisie est un gain net de temps de PoC et de robustesse. À l'inverse, accumuler des extensions aux brochages incompatibles est un piège qui se paye sur la durée.

## Voir aussi

- [[micropython-en|MicroPython]] — hub du module
- [[micropython-module-en|Câbler un module]] — l'alternative non-enfichée (fils Dupont)
- [[micropython-alimentation-en|Alimenter la carte]] — dimensionner l'alimentation avec extension
- [[shield-en|Shield]] — la notion transverse
- [[arduino-shield-en|Utiliser un shield (Arduino)]] — le standard empilable Uno, à comparer
