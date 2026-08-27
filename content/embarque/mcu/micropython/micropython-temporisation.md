---
title: Temporiser en MicroPython
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main
  - micropython-entree-tor
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

**Temporiser** est l'art de mesurer ou de produire un délai. MicroPython propose deux outils opposés en philosophie : **`sleep()`** (et ses variantes), qui suspend tout le programme pendant une durée donnée, et **`ticks_ms()`**, qui donne le temps écoulé depuis le démarrage. La progression entre les deux — passer de `sleep()` aux patterns à base de `ticks_ms()` — est le saut le plus structurant entre un script débutant et un programme embarqué digne du nom. Tout vient du module [[micropython-modules|`time`]].

## À quoi ça sert ?

Tout programme sérieux a besoin de temps : clignoter à 1 Hz, échantillonner à 10 Hz, déclencher une alarme après 3 s, asservir tous les 20 ms. Sans gestion du temps, on a soit un programme sans rythme, soit un programme bloqué par `sleep()` qui rate tout pendant ses pauses. La fiche montre les deux outils, en argumentant pourquoi `ticks_ms()` finit par s'imposer.

## Procédure pas à pas

Quatre étapes : `sleep()` pour démarrer, comprendre sa limite, basculer sur `ticks_ms()`, gérer plusieurs temps.

### 1. `sleep()` — la bombe à retardement pédagogique

```python
from machine import Pin
from time import sleep

led = Pin("LED", Pin.OUT)
while True:
    led.on()
    sleep(0.5)       # secondes (accepte un flottant)
    led.off()
    sleep(0.5)
```

`sleep(N)` met le programme en pause `N` secondes. Variantes entières : **`sleep_ms(N)`** (millisecondes), **`sleep_us(N)`** (microsecondes — utile pour une impulsion courte, cf. HC-SR04). Simple et lisible, mais **rien d'autre ne s'exécute pendant la pause** — pas de lecture de bouton, pas de mesure capteur.

### 2. Comprendre la limite

```python
while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
    # Pendant ces 2 s : impossible de lire un bouton, un capteur, ou la liaison série
```

Si un bouton doit interrompre le clignotement, ce code ne le verra qu'avec jusqu'à 2 s de retard. Inacceptable dès qu'on a deux choses à faire en parallèle.

![Schéma de principe : attente bloquante (sleep) qui fige le programme, vs attente non bloquante (ticks_ms) qui laisse la boucle libre entre deux échéances|640](/ressources/img/micropython-temporisation/sleep-vs-ticks.svg)

### 3. `ticks_ms()` — l'horloge non bloquante

`ticks_ms()` renvoie un compteur de millisecondes depuis le démarrage. Le programme ne s'arrête pas. Il consulte l'horloge. **Différence cruciale avec Arduino** : on **ne soustrait pas** `ticks_ms()` directement (le compteur déborde et repart). On utilise **`ticks_diff(maintenant, depart)`**, conçu pour gérer ce débordement.

```python
from machine import Pin
from time import ticks_ms, ticks_diff

led = Pin("LED", Pin.OUT)
dernier = ticks_ms()
INTERVALLE = 500      # ms
etat = False

while True:
    if ticks_diff(ticks_ms(), dernier) >= INTERVALLE:
        dernier = ticks_ms()
        etat = not etat
        led.value(etat)

    # Ici on peut faire AUTRE CHOSE sans bloquer
    # (lire un bouton, mesurer un capteur...)
```

À chaque tour, on vérifie si l'intervalle est écoulé : si oui, on agit, sinon on continue. Le pattern `if ticks_diff(ticks_ms(), dernier) >= intervalle:` est l'incantation à mémoriser.

### 4. Plusieurs temps en parallèle

Avantage décisif : plusieurs cadences indépendantes dans la même boucle.

```python
from machine import Pin, ADC
from time import ticks_ms, ticks_diff

led = Pin("LED", Pin.OUT)
pot = ADC(Pin(26))

t_led = t_mesure = t_print = ticks_ms()
INT_LED, INT_MESURE, INT_PRINT = 500, 100, 1000   # ms

while True:
    maintenant = ticks_ms()

    if ticks_diff(maintenant, t_led) >= INT_LED:
        t_led = maintenant
        led.toggle()

    if ticks_diff(maintenant, t_mesure) >= INT_MESURE:
        t_mesure = maintenant
        val = pot.read_u16()        # ... traiter la mesure

    if ticks_diff(maintenant, t_print) >= INT_PRINT:
        t_print = maintenant
        print("Vivant")
```

Trois cadences (LED 1 Hz, mesure 10 Hz, impression 1 Hz) cohabitent sans aucun `sleep()`. La boucle reste libre d'écouter un bouton.

![Chronogramme de trois cadences indépendantes dans une même boucle : la LED bascule toutes les 500 ms, une mesure est prise toutes les 100 ms, une ligne « Vivant » est imprimée toutes les 1000 ms ; les trois rythmes cohabitent sur l'axe du temps sans se gêner, et entre deux événements la boucle reste libre.|640](/ressources/img/micropython-temporisation/cadences-paralleles.svg)

## Exemple — Blink non bloquant + bouton réactif

Une LED clignote à 1 Hz, **un bouton bascule la fréquence** entre 1 Hz et 5 Hz sans perte de réactivité — impossible avec un seul `sleep()`.

```python
from machine import Pin
from time import ticks_ms, ticks_diff

led = Pin(15, Pin.OUT)
bouton = Pin(14, Pin.IN, Pin.PULL_UP)

# Clignotement : ce sont des VARIABLES, elles changent en cours d'exécution
t_led = ticks_ms()        # date du dernier basculement de la LED
intervalle = 500          # demi-période courante : 500 ms = 1 Hz, 100 ms = 5 Hz
etat = False              # LED actuellement allumée (True) ou éteinte (False)

# Bouton : anti-rebond + détection de front
dernier_btn = 1           # dernière lecture BRUTE (1 = relâché, pull-up)
etat_stable = 1           # état CONFIRMÉ une fois le rebond passé
dernier_chg = ticks_ms()  # date de la dernière transition de la lecture brute
DELAI_REBOND = 30         # ms de stabilité exigée avant de valider

while True:
    maintenant = ticks_ms()                # on lit l'horloge UNE fois par tour

    # 1. Clignotement à la cadence courante, sans sleep()
    if ticks_diff(maintenant, t_led) >= intervalle:
        t_led = maintenant                 # mémoriser l'instant du basculement
        etat = not etat                    # inverser l'état
        led.value(etat)

    # 2. Bouton : filtrer le rebond, agir au FRONT (une fois par appui)
    lecture = bouton.value()
    if lecture != dernier_btn:             # la lecture brute vient de changer
        dernier_chg = maintenant           # (re)démarrer le chrono d'anti-rebond
        dernier_btn = lecture
    if ticks_diff(maintenant, dernier_chg) > DELAI_REBOND and lecture != etat_stable:
        etat_stable = lecture              # valider ce nouvel état stable
        if etat_stable == 0:                       # front descendant = bouton appuyé
            intervalle = 100 if intervalle == 500 else 500   # bascule 1 Hz <-> 5 Hz
```

**Comment lire ce code.** Le programme fait tourner **deux mécanismes indépendants dans la même boucle**, sans qu'aucun ne bloque l'autre.

- **Le clignotement** repose sur `ticks_ms()` : `t_led` retient la date du dernier basculement, et `ticks_diff(maintenant, t_led) >= intervalle` demande à chaque tour « assez de temps a-t-il passé ? ». Si oui, on rebascule la LED et on remet `t_led` à `maintenant`. Changer `intervalle` (500 ↔ 100 ms) suffit à changer la cadence.
- **Le bouton** combine anti-rebond et détection de front, exactement comme dans [[micropython-entree-tor|lire une entrée TOR]] : `dernier_btn` suit la lecture *brute*, `etat_stable` l'état *confirmé* une fois le rebond passé (`DELAI_REBOND`). La condition `etat_stable == 0` ne se réalise qu'**une seule fois par appui** (au front descendant) — c'est ce qui évite de basculer la fréquence en boucle tant que le doigt reste posé.

Les deux blocs s'exécutent à chaque tour : la LED clignote *pendant* qu'on surveille le bouton — précisément ce qu'un `sleep()` interdirait.

C'est l'illustration directe de pourquoi `ticks_ms()` est le bon outil dès qu'il y a plus d'une chose à faire à la fois.

## Pièges

**Soustraire `ticks_ms()` directement.** `maintenant - depart` peut devenir négatif au débordement du compteur. **Toujours `ticks_diff(maintenant, depart)`** : c'est la différence majeure avec le `millis()` d'Arduino, où la soustraction d'`unsigned` marchait.

**`sleep()` qui bloque tout.** Le piège n°1 : un `sleep(5)` planqué dans une boucle, et tout le reste attend 5 s. Repérer chaque `sleep()` et se demander : *« puis-je le remplacer par un `ticks_ms()` ? »*.

**Mélanger les unités.** `sleep(1)` = 1 s, `sleep_ms(1)` = 1 ms, `sleep_us(1)` = 1 µs. Remplacer l'une par l'autre sans ajuster fait clignoter 1000× trop vite ou trop lentement.

**Une seule variable de temps pour plusieurs cadences.** Chaque cadence doit avoir sa propre variable, sinon les cadences se polluent. 

**`ticks_us()` pour de longues durées.** `ticks_us()` (microsecondes) déborde bien plus vite que `ticks_ms()`. Pour de longs intervalles, rester en `ticks_ms()` ; toujours via `ticks_diff()`.

## Cas particulier — Cadences sub-milliseconde et temps réel

Pour des asservissements rapides (PID à 1 kHz, lecture d'encodeur), le couple `ticks_ms()` + boucle de scrutation atteint sa limite. La latence dépend de ce que fait le reste de la boucle. Trois pistes : **`ticks_us()`** pour la même logique à finesse µs ; **timers matériels** + interruption périodique (voir [[micropython-timers|timers matériels]] et [[micropython-interruptions|interruptions]]) ; **programmation non bloquante** structurée (voir [[micropython-programmation-non-bloquante|programmation non bloquante]]).

## Raccrochage projet

- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — toute boucle mesure-action (asservissement, échantillonnage) repose sur une cadence précise, à structurer avec `ticks_ms()` dès le premier code.
- **Toute la [[integration-et-tests|phase d'intégration et tests]]** — un test qui mesure un temps de réponse s'appuie sur `ticks_ms()`/`ticks_us()` pour les datations.

Faire le pas `sleep() → ticks_ms()` une fois pour toutes en début de PoC évite de réécrire toute la structure quand le projet réclame deux choses en parallèle — ce qui arrive *toujours*.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-entree-tor|Lire une entrée TOR]] — utilise `ticks_ms()` pour l'anti-rebond non bloquant
- [[micropython-programmation-non-bloquante|Programmation non bloquante]] — généralisation du pattern
- [[micropython-interruptions|Interruptions]] — pour les événements ultra-rapides
- [[micropython-timers|Timers matériels]] — pour la périodicité au µs près
- [[timer|Timer]] — le compteur matériel sous-jacent
- [[arduino-temporisation|Temporiser (Arduino)]] — l'équivalent C++ (`delay`/`millis`)
