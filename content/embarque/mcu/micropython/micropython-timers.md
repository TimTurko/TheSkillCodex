---
title: Utiliser un timer matériel en MicroPython
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main
  - timer
  - interruption
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Utiliser un **timer matériel** en MicroPython consiste à configurer un compteur pour exécuter une action à **intervalle précis**, via la classe **`machine.Timer`**. Le timer déclenche une [[interruption|interruption]] à la fréquence choisie : une cadence parfaitement régulière qu'une boucle `ticks_ms()` ne garantit pas. Là où Arduino impose une bibliothèque (TimerOne) ou des registres, MicroPython expose une **API uniforme** valable d'une carte à l'autre.

## À quoi ça sert ?

Pour cadencer une tâche, le réflexe est [[micropython-temporisation|`ticks_ms()`]] dans la boucle. Cela suffit pour un clignotement, mais la cadence **dérive** dès que la boucle fait du travail variable. Pour un échantillonnage, un filtrage ou une [[micropython-pid|régulation]], ce flottement fausse les calculs. Un timer matériel règle le problème : il déclenche l'action **par interruption**, à la fréquence exacte, **quoi que fasse la boucle** ; il libère la boucle du rôle de chronomètre. On le met en place dès qu'une fonction réclame une base de temps fiable. Pour de la temporisation souple, `ticks_ms()` reste plus simple — le timer se réserve au **précis** et au **régulier**.

## Procédure pas à pas

Trois étapes : créer le timer avec sa période/fréquence et son callback, garder le callback minimal, traiter dans la boucle.

### 1. Créer le timer

`Timer.init()` règle la **fréquence** (ou la **période**) et le **mode**, et attache le **callback** appelé à chaque échéance :

```python
from machine import Timer

def on_timer(timer):              # callback : recoit le timer, reste minimal
    global echeance
    echeance = True

echeance = False
tim = Timer()                              # timer virtuel (rp2)
tim.init(freq=100, mode=Timer.PERIODIC, callback=on_timer)   # 100 Hz
```

Au choix : `freq=100` (Hz) ou `period=10` (ms). Mode : `Timer.PERIODIC` (répété) ou `Timer.ONE_SHOT` (une fois). `tim.deinit()` arrête le timer.

Sur le Pico (RP2), `machine.Timer` est un timer **virtuel** (seul `id=-1`, d'où l'appel `Timer()` sans numéro) : pas de périphérique timer dédié à choisir comme sur l'AVR. Sa base de temps est le **timer système matériel** du RP2040 (microseconde), qui génère les interruptions — d'où la régularité : c'est cette base matérielle qui « tient l'horloge », pas un compteur qu'on configurerait à la main.

### 2. Garder le callback minimal

Le callback s'exécute **comme une routine d'interruption** : il obéit aux règles des [[interruption|interruptions]] — court, et idéalement **sans allocation mémoire** (pas de `print` formaté, pas d'objet créé ; voir [[micropython-interruptions|interruptions]]). Cette règle d'allocation vaut pleinement avec **`hard=True`** (le callback devient une *hard IRQ*, à gigue minimale) ; **par défaut**, c'est une *soft IRQ* où l'allocation passe, mais nuit à la régularité. Dans les deux cas, même réflexe : il se contente de **lever un drapeau** (un global déjà existant).

### 3. Traiter dans la boucle

La boucle voit le drapeau levé et fait le travail lourd (lire, calculer, afficher) — là où `print` et l'allocation sont autorisés :

```python
while True:
    if echeance:
        echeance = False
        # ... travail cadence ...
```

Prendre capture d'écran de *le traceur de Thonny (Plotter) affichant des échantillons régulièrement espacés dans le temps*.

## Exemple — Échantillonner un capteur à 100 Hz

On lit une entrée analogique exactement cent fois par seconde, pour alimenter un filtrage ou une régulation à pas constant. Le timer cadence ; le callback lève un drapeau ; la boucle lit et envoie.

```python
from machine import Timer, ADC, Pin

capteur = ADC(Pin(26))
echeance = False

def on_timer(timer):              # callback : juste lever le drapeau
    global echeance
    echeance = True

tim = Timer()
tim.init(freq=100, mode=Timer.PERIODIC, callback=on_timer)   # 100 Hz

while True:
    if echeance:                  # tombe a cadence reguliere
        echeance = False
        print(capteur.read_u16()) # lecture + print dans la boucle, pas dans le callback
```

![Chronogramme comparant deux cadences pour une même période visée de 10 ms : la cadence logicielle (ticks_ms) dérive — ses instants réels glissent vers la droite à mesure que la charge de la boucle varie, le retard s'accumule ; la cadence timer tombe exactement sur la grille, intervalle constant sans dérive.|680](/ressources/img/micropython-timers/cadence-ticks-vs-timer.svg)

L'échantillonnage tombe toutes les 10 ms **quelle que soit la charge de la boucle**, parce que c'est le matériel qui tient l'horloge. Le callback se contente de signaler ; toute la logique reste dans la boucle. Comparée à une cadence `ticks_ms()`, la régularité est sans dérive — ce qui change tout pour un traitement du signal.

## Pièges

**Allouer dans un callback `hard=True`.** En *hard IRQ*, `print` formaté, création d'objet ou calcul flottant qui alloue sont **interdits**. En *soft* IRQ (le défaut), l'allocation passe mais nuit à la régularité — dans les deux cas, le callback se contente de lever un drapeau, la boucle traite. Voir la règle d'allocation des [[micropython-interruptions|interruptions]].

**Oublier `global`.** Sans `global echeance`, le callback crée une variable locale et le drapeau de la boucle ne se lève jamais.

**Callback plus long que la période.** Cadencer à 10 kHz un callback qui met plus de 100 µs à s'exécuter ne laisse plus de temps à la boucle, et le timer se fait rattraper. Vérifier que la période est cohérente avec le travail demandé.

**Période trop courte pour le travail réel.** Même logique côté boucle : si le travail déclenché par le drapeau dépasse la période, le système décroche. Mesurer.

**Croire qu'une cadence `ticks_ms()` vaut une cadence timer.** Pour du précis, non : seule la base matérielle garantit la régularité. C'est le critère de choix entre [[micropython-temporisation|`ticks_ms()`]] et timer.

**Ne pas garder la référence au timer.** Si l'objet `Timer` est libéré (variable locale qui sort de portée), le ramasse-miettes peut l'arrêter. Le garder dans une variable qui vit aussi longtemps que nécessaire.

## Cas particulier — `ONE_SHOT` et plusieurs timers

- **`Timer.ONE_SHOT`** déclenche le callback **une seule fois** après le délai — utile pour une temporisation différée (éteindre une LED après N ms sans bloquer la boucle).
- On peut créer **plusieurs timers** indépendants (cadences différentes), chacun avec son callback. Garder chaque callback minimal pour qu'ils ne se gênent pas.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — échantillonner ou cadencer une fonction à pas constant sur un montage isolé, prérequis d'une mesure ou d'une régulation propre.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — la boucle de commande du système (une [[micropython-pid|régulation PID]]) tourne à période fixe imposée par un timer, condition de sa stabilité.

Disposer d'une base de temps matérielle fiable sépare un montage qui « marche à peu près » d'un système dont le comportement temporel est maîtrisé — indispensable dès qu'on asservit.

## Voir aussi

- [[timer|Timer]] — la notion mère : compteur, prédiviseur, débordement, comparaison (à comprendre avant de coder)
- [[micropython|MicroPython]] — hub du module
- [[micropython-interruptions|Interruptions]] — le mécanisme par lequel le timer exécute son callback (et la règle d'allocation)
- [[micropython-temporisation|sleep() vs ticks_ms()]] — la temporisation logicielle, l'alternative non précise
- [[micropython-pid|Régulation PID]] — un usage direct de l'échantillonnage à pas constant
- [[arduino-timers|Timer matériel (Arduino)]] — l'équivalent C++ (TimerOne, registres CTC)
