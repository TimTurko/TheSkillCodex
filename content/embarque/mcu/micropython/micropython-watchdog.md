---
title: Utiliser le chien de garde (watchdog) en MicroPython
type: tuto
phases:
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main
  - micropython-programmation-non-bloquante
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Le **chien de garde** (*watchdog*, WDT) est un [[timer|compteur]] indépendant qui **redémarre la carte si le programme cesse de le « nourrir »** dans un délai imparti. C'est un filet de sécurité contre les blocages : un programme planté — boucle infinie, attente sans fin, capteur figé — se relance tout seul au lieu de rester muet. En MicroPython, il se manie via la classe **`machine.WDT`** : on l'arme avec un délai, on le nourrit régulièrement avec `feed()`, et tout arrêt de ce rythme provoque un reset.

## À quoi ça sert ?

Un système embarqué doit parfois fonctionner **sans personne pour appuyer sur reset** : une station isolée, un objet enfoui, une machine en marche. Si son programme se bloque — une bibliothèque qui attend une réponse, un capteur qui fige le code, une boucle sans sortie — il reste inerte jusqu'à coupure manuelle. Le chien de garde apporte une **robustesse** : tant que le programme tourne, il « caresse » le chien à intervalle régulier ; s'il se bloque, le chien n'est plus nourri, et au bout de son délai il **réinitialise** la carte. C'est un mécanisme de **dernier recours**, à introduire en [[integration-et-tests|phase d'intégration]] pour fiabiliser un système déjà fonctionnel — pas pour masquer des bugs.

## Procédure pas à pas

Trois étapes : armer le chien, le nourrir au bon endroit, choisir le délai.

### 1. Armer le chien de garde

`WDT(timeout=ms)` démarre le watchdog. Sur RP2040/RP2350, le délai maximal est d'environ **8,3 secondes** (8388 ms).

```python
from machine import WDT

wdt = WDT(timeout=8000)        # redemarre si pas nourri pendant 8 s
```

**Différence majeure avec Arduino** : une fois armé, le watchdog du Pico **ne peut plus être arrêté** (pas d'équivalent de `wdt_disable()`). On ne l'arme donc qu'**après** les initialisations, et seulement quand on est prêt à le nourrir régulièrement.

### 2. Nourrir le chien au bon endroit

`feed()` remet le compteur à zéro : c'est « nourrir » le chien. On l'appelle à un endroit que le programme **ne peut atteindre que s'il fonctionne normalement** :

```python
while True:
    # ... le travail normal du programme ...
    wdt.feed()                 # « je suis vivant » : on repousse l'echeance
```

Tant que la boucle tourne, le chien est nourri. Si une partie du code se bloque et empêche d'atteindre `feed()`, l'échéance tombe et la carte redémarre.

![Chronogramme du chien de garde : tant que la boucle appelle feed() régulièrement, la marge avant reset est rechargée au délai armé et ne descend jamais à zéro ; quand un blocage interrompt les feed(), la marge décroît jusqu'à zéro et la carte redémarre (RESET puis relance de main.py).|680](/ressources/img/micropython-watchdog/chronogramme-watchdog.svg)

### 3. Choisir le délai

Le délai doit être **plus long que le pire temps de boucle normal**, sinon le chien redémarre une carte qui fonctionnait. Mais pas inutilement long, sinon le système reste bloqué avant de se relancer. Sur le Pico, le plafond (~8,3 s) impose de nourrir le chien **au moins une fois par cycle** dans une boucle bien structurée.

## Exemple — Fiabiliser un montage qui peut se bloquer

Un montage interroge un capteur sur un bus qui peut, rarement, ne jamais répondre — figeant le programme. Le chien de garde garantit qu'en cas de blocage, la carte redémarre au lieu de rester muette.

```python
from machine import WDT, Pin, ADC
from time import sleep

capteur = ADC(Pin(26))
print("Demarrage")
wdt = WDT(timeout=8000)        # chien arme APRES l'init : reset si bloque > 8 s

while True:
    mesure = capteur.read_u16()   # si une lecture sur bus fige, plus de feed()
    print(mesure)
    wdt.feed()                    # nourrir a chaque tour sain
    sleep(0.5)                    # (bien en deca des 8 s)
```

En fonctionnement normal, la boucle nourrit le chien toutes les ~500 ms, bien sous les 8 s : rien ne se passe. Mais si la lecture se bloque, `feed()` n'est plus atteint, et au bout de 8 s la carte redémarre — réexécutant `main.py`, qui réaffiche « Demarrage ». Le système se **rétablit seul**. Le `sleep(0.5)` est ici inoffensif car bien inférieur au délai ; dans un programme [[micropython-programmation-non-bloquante|non bloquant]], on nourrirait le chien dans la boucle coopérative (ou via `asyncio`).

Le symptôme est visible au [[micropython-repl|REPL]] sans rien mesurer : les valeurs s'arrêtent, quelques secondes passent, et `Demarrage` réapparaît.

```
Demarrage
34112
33987
34056
34021
Demarrage
34098
```

Personne n'a touché à la carte entre les deux `Demarrage` — c'est le chien qui a rendu la main au système.

## Pièges

**Croire qu'on pourra désarmer le chien.** Sur le Pico, `WDT` **ne se désactive pas** une fois armé. Conséquence : ne pas l'armer trop tôt (avant la fin de l'init), et **ne pas lancer ensuite une opération bloquante plus longue que le délai** sans la nourrir — d'où l'intérêt d'un code [[micropython-programmation-non-bloquante|non bloquant]].

**Un délai plus court que la boucle normale.** Si le pire temps de boucle dépasse le délai, le chien redémarre une carte qui fonctionnait. Régler le délai **au-dessus** de la durée maximale légitime d'un tour, avec marge (dans la limite des ~8,3 s).

**Nourrir le chien au mauvais endroit.** Appeler `feed()` dans une boucle interne ou un endroit toujours atteint **même quand le programme déraille** vide le mécanisme de son sens : il ne détecte plus rien. Le nourrir là où seul un fonctionnement sain mène.

**Utiliser le watchdog pour masquer un bug.** Redémarrer périodiquement pour « contourner » une fuite mémoire ou un blocage récurrent traite le symptôme, pas la cause. Le chien est un filet de sécurité, pas un correctif.

**Oublier que `sleep()` long et watchdog s'opposent.** Une attente plus longue que le délai déclenche le reset. Raison de plus pour structurer le code en [[micropython-programmation-non-bloquante|tâches non bloquantes]], où aucune fonction ne monopolise la boucle.

**Watchdog et deep sleep.** Avant un [[micropython-deep-sleep|`deepsleep`]] long, attention à l'interaction avec un WDT armé : vérifier le comportement sur la carte (selon le firmware, le watchdog peut survivre ou non au sommeil). En cas de doute, raisonner le cycle veille/réveil sans compter sur le chien pendant le sommeil.

## Cas particulier — Au-delà du plafond de ~8,3 s

Le délai matériel est plafonné (~8,3 s sur RP2040/RP2350). Pour surveiller un cycle plus long (un relevé toutes les minutes, par exemple), on ne peut pas régler un WDT de 60 s : on nourrit alors le chien **à l'intérieur** des étapes du cycle (plusieurs `feed()` répartis), ou l'on combine le watchdog matériel avec une logique de supervision logicielle. Le chien matériel reste la dernière ligne de défense ; il ne se substitue pas à un code structuré.

## Raccrochage projet

- **[[integration-et-tests|Phase d'intégration et tests]]** — une fois le système fonctionnel, le chien de garde le fiabilise contre les blocages imprévus, surtout s'il doit tourner longtemps sans surveillance.
- **Spécification** — une exigence de **disponibilité** (« le système doit se rétablir seul après un blocage ») se traduit concrètement par un watchdog ; à prévoir si le cahier des charges l'impose.

Le chien de garde est la dernière ligne de défense d'un firmware robuste : il ne remplace pas un code propre, mais il évite qu'un blocage imprévu ne fige durablement un système livré.

## Voir aussi

- [[micropython-deep-sleep|Deep sleep]] — interaction veille / watchdog
- [[micropython-programmation-non-bloquante|Programmation non bloquante]] — structurer le code pour nourrir le chien sans blocage
- [[timer|Timer]] — le chien de garde est un compteur dédié
- [[chien-de-garde|Chien de garde]] — la notion transverse : de quoi le chien est indépendant, ce qu'il ne détecte pas, et le redémarrage muet
- [[interruption|Interruption]] — la notion voisine
- [[firmware|Firmware]] — la robustesse du code embarqué (transverse)
- [[micropython|MicroPython]] — hub du module
- [[arduino-watchdog|Watchdog (Arduino)]] — l'équivalent C++ (`avr/wdt.h`, `wdt_disable()` possible)
