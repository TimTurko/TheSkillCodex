---
title: État des GPIO à l'allumage
type: tuto
phases:
  - concept
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-gpio
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Entre l'instant où le Pico est alimenté et celui où `main.py` exécute la première instruction utile, il se passe un court délai (firmware + lancement du script) pendant lequel **l'état des GPIO n'est pas celui que vous avez codé** : ils sont en **entrée haute impédance** (flottants). Conséquence concrète : un relais peut coller brièvement, un moteur faire un soubresaut, une LED clignoter au démarrage. Bonne nouvelle : le Pico est **plus simple que l'ESP** sur ce point — il n'a pas de broches de *strapping* qui changent le mode de boot selon leur niveau.

## À quoi ça sert ?

Trois cas où il faut comprendre l'état GPIO au boot : **actionneur qui s'active au démarrage** (relais qui claque, moteur qui tressaute) ; **broches réservées par la carte** (à ne pas utiliser) ; **état sûr après coupure/redémarrage** (revenir dans un état non dangereux).

## Procédure pas à pas

Quatre étapes : comprendre la séquence, repérer les broches réservées, ajouter un tirage externe, initialiser proprement dès le début du code.

### 1. Comprendre la séquence de démarrage

1. **Mise sous tension / reset** — toutes les broches en **entrée flottante** (haute impédance).
2. **Démarrage du firmware MicroPython** (court délai).
3. **Lancement de `main.py`** — les broches sont configurées au fur et à mesure que les objets `Pin` sont créés.
4. **Boucle** — comportement normal.

Pendant les phases 1-2, **toute broche utilisée plus tard en sortie flotte** : un actionneur branché dessus est dans un état indéterminé. Contrairement à l'[[esp8266-arduino-core|ESP8266]]/ESP32, aucune broche du Pico ne doit être à un niveau précis pour *démarrer* — pas de piège de boot bloquant.

![Chronogramme du démarrage d'un Pico : reset, firmware MicroPython (court délai), puis lancement de main.py ; une broche de sortie flotte jusqu'à ce que la création de l'objet Pin la force à son état voulu.|680](/ressources/img/micropython-gpio-boot/sequence-boot.svg)

### 2. Repérer les broches réservées de la carte

Le Pico réserve quelques broches pour son propre fonctionnement — **à ne pas utiliser** pour un usage général :

| Broche | Rôle interne |
|---|---|
| GP23 | contrôle du mode d'alimentation (SMPS) |
| GP24 | détection VBUS (présence USB) |
| GP25 | LED intégrée |
| GP29 | mesure VSYS (ADC3) |

(Sur **Pico W / Pico 2 W**, certaines de ces fonctions passent par la puce sans-fil — la LED notamment, d'où le raccourci `Pin("LED")`.) Le bouton **BOOTSEL** n'est pas une broche utilisateur : le maintenir à la mise sous tension fait entrer la carte en mode mémoire de masse (re-flashage), volontairement.

### 3. Ajouter un tirage externe selon le besoin

Une broche flottante au boot se stabilise par une **résistance externe** : **pull-down** (10 kΩ vers GND) pour que l'actionneur soit *éteint* tant que le code n'a pas pris le contrôle ; **pull-up** (10 kΩ vers 3,3 V) pour un actionneur *actif au repos* (module à entrée active au niveau bas). Pour un **module relais actif-bas**, un pull-up externe garde le relais relâché pendant le boot — la parade générique au *« clic relais au démarrage »*.

![Module relais actif-bas câblé sur la broche GP8 (RELAIS) d'un Pico, avec un pull-up externe 10 kΩ entre la broche de commande et le 3,3 V|560](/ressources/img/micropython-gpio-boot/branchement-relais-pullup.svg)

### 4. Initialiser proprement dès la création de l'objet

MicroPython offre une parade élégante absente d'Arduino : le **constructeur `Pin` accepte une valeur initiale** (`value=`), appliquée **dès** la configuration en sortie — sans transit par 0 :

```python
from machine import Pin

# Le relais (actif-bas) part directement à l'état relâché (1), sans passer par 0
relais = Pin(8, Pin.OUT, value=1)

# Le moteur part arrêté
moteur_en = Pin(15, Pin.OUT, value=0)
```

C'est plus propre que la séquence Arduino « écrire la valeur puis configurer le mode ». **Mais cela ne couvre que la phase 3** (à partir du lancement de `main.py`) : pendant les phases 1-2, seul un tirage matériel garantit l'état.

## Exemple — Module relais qui claque au démarrage

Symptôme : un relais actif-bas qui pilote une lampe *clique* à chaque démarrage du Pico.

**Diagnostic** : pendant le boot du firmware, la broche flotte ; le module (actif-bas) l'interprète comme un niveau bas et colle le relais ; puis `main.py` démarre et met la broche à 1, le relais relâche.

**Solution** (matérielle **+** logicielle) :

1. **Pull-up externe 10 kΩ** entre la broche de commande et 3,3 V → broche tirée à 1 pendant le boot, relais relâché.
2. **Code** :

```python
from machine import Pin
relais = Pin(8, Pin.OUT, value=1)   # relâché dès l'init
# le relais ne colle qu'à la demande explicite (relais.value(0))
```

Démarrage silencieux et propre.

## Pièges

**Compter sur `main.py` seul.** `main.py` ne s'exécute qu'après le démarrage du firmware ; pendant ce délai, les broches flottent. Seul un **tirage matériel** (ou un actionneur insensible) garantit l'état au boot.

**Oublier `value=` à la construction.** Créer `Pin(8, Pin.OUT)` puis écrire la valeur ensuite fait transiter brièvement la sortie par 0 — suffisant pour faire claquer un relais actif-bas. Passer `value=` directement au constructeur.

**Utiliser une broche réservée.** Câbler un actionneur sur GP23/24/25/29 perturbe le fonctionnement interne de la carte. Choisir une autre GPIO.

**Croire le Pico aussi piégeux que l'ESP.** Le Pico n'a pas de broche de strapping qui empêche le boot — inutile de chercher l'équivalent du GPIO0/GPIO2 de l'ESP. Le seul mécanisme volontaire est le bouton BOOTSEL.

**État après reset logiciel.** Un reset (watchdog, `machine.reset()`) repasse par le démarrage du firmware : les sorties reflottent. La parade par tirage externe couvre aussi ce cas.

**Module actif-haut.** Tous les modules ne sont pas actifs-bas : certains relais (sans opto) sont actifs au niveau haut, et le flottement n'est alors pas un problème. Vérifier *« commande active : niveau bas ou haut ? »* avant de dimensionner le tirage.

## Cas particulier — État sûr après coupure

Pour un système qui doit revenir dans un état sûr après une coupure secteur, combiner : **tirage matériel** (état au boot garanti) + **initialisation `value=`** (transition propre) + éventuellement un [[micropython-watchdog|watchdog]] pour relancer proprement en cas de blocage. La logique de l'état sûr se conçoit dès l'architecture, pas après.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — anticiper l'état boot des actionneurs dès le premier câblage (relais, moteurs). Peu coûteux en amont, long à diagnostiquer après coup.
- **Étape 4 de la [[concept|phase de concept]]** — l'EAT prend en compte le comportement au démarrage pour les fonctions critiques.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — tester le power-on cyclique (10 démarrages) pour repérer les actionneurs qui dérapent.

L'état GPIO au boot est un piège *« qu'on découvre en démo »*. Le traiter dès le premier relais — par un tirage de quelques centimes + `value=` — épargne le moment où il faut l'expliquer au jury.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-gpio|Configurer les GPIO]] — prérequis
- [[micropython-sortie-tor|Piloter une sortie TOR]] — pour relais et actionneurs binaires
- [[micropython-watchdog|Watchdog]] — pour le reset logiciel propre
- [[gpio|GPIO]] — la notion transverse (modes, états au boot)
- [[arduino-gpio-boot|État des GPIO à l'allumage (Arduino)]] — l'équivalent C++
