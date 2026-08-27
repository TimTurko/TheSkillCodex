---
title: Programmer une machine à états en MicroPython
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
  - micropython-temporisation
  - machine-a-etats
aa:
  - RA-EEE-C03-2/EEE/5
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Programmer une **machine à états** en MicroPython consiste à traduire un diagramme d'[[machine-a-etats|états et transitions]] en code Python. Python n'a **ni `switch` ni `enum`** comme le C++ : on utilise des **constantes** nommées et une cascade **`if/elif`** (ou un dictionnaire d'états). Une variable mémorise l'état courant, la boucle exécute le bloc correspondant à chaque tour. Couplé à une temporisation **non bloquante** ([[micropython-temporisation|`ticks_ms()`]]), ce motif pilote un comportement séquentiel — feux, portail, cycle de machine — sans jamais figer le programme avec `sleep()`.

## À quoi ça sert ?

Dès qu'un montage doit enchaîner des phases (« vert, puis orange, puis rouge »), deux écueils guettent : empiler des `sleep()` qui rendent la carte sourde pendant l'attente, ou multiplier les booléens jusqu'à l'illisible. Le motif machine à états règle les deux : il **structure** le code en un bloc clair par état, calqué sur le diagramme. Il garde la boucle **réactive** (entre deux changements d'état, le Pico continue de lire ses entrées). Il rend les **transitions explicites**, faciles à relire et à tester. C'est le squelette de presque tout programme de commande, mis en place en [[preuve-de-concept|preuve de concept]].

## Procédure pas à pas

Quatre étapes : énumérer les états, structurer la boucle, coder les transitions temporisées, câbler et tester.

### 1. Énumérer les états (constantes)

Pas d'`enum` : on nomme les états par des **constantes** (lisibles dans tout le code), une variable mémorise l'état courant, **initialisée explicitement**, et une variable de temps datera l'entrée dans l'état :

```python
from time import ticks_ms, ticks_diff

VERT, JAUNE, ROUGE = 0, 1, 2     # constantes nommees (pas de enum)

etat = VERT                       # etat initial explicite
t_debut = ticks_ms()              # instant d'entree dans l'etat courant
```

Des constantes nommées plutôt que `0`, `1`, `2` bruts : `etat == VERT` se relit, `etat == 0` non.

### 2. Structurer la boucle avec `if / elif`

Un bloc par état. À chaque tour, un seul s'exécute — celui de l'état courant :

```python
while True:
    if etat == VERT:
        # 1) appliquer les sorties de l'etat
        # 2) tester les transitions
        ...
    elif etat == JAUNE:
        ...
    elif etat == ROUGE:
        ...
```

Dans chaque bloc, deux choses : refléter l'état sur les sorties (allumer les bonnes LED), puis tester les conditions de sortie vers un autre état.

### 3. Coder les transitions et la temporisation non bloquante

Une **transition** se code en deux gestes : changer `etat`, puis **redater** l'entrée avec `t_debut = ticks_ms()`. Pour un délai, pas de `sleep()` : on compare le temps écoulé depuis l'entrée avec `ticks_diff` :

```python
if etat == VERT:
    if ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT:   # evenement : duree ecoulee
        etat = JAUNE
        t_debut = ticks_ms()                            # on date l'entree dans le nouvel etat
```

`ticks_diff(ticks_ms(), t_debut)` donne le temps passé dans l'état. La comparaison ne bloque rien (voir [[micropython-temporisation|temporisation]]). Une **garde-condition** du diagramme devient un `if` combiné : `if (duree ecoulee) or (demande_pieton and minimum ecoule)`.

### 4. Câbler et téléverser

Pour l'exemple : cinq LED (trois voitures, deux piétons) avec résistances série 220 Ω, et un bouton entre une broche et GND en `PULL_UP` (voir [[micropython-entree-tor|lire une entrée TOR]] pour l'anti-rebond).

![Montage du carrefour sur Pico : LED voiture verte (GP12), orange (GP11), rouge (GP10), LED piéton verte (GP9) et rouge (GP8), chacune avec sa résistance 220 Ω vers GND, et un bouton poussoir entre GP14 et GND ; les broches portent les noms du code.|600](/ressources/img/micropython-machine-a-etats/montage.svg)

## Exemple — Feux tricolores avec passage piéton

Les voitures suivent vert → orange → rouge. Les piétons ont un feu et un bouton d'appel. Le bouton **mémorise une demande** qui, une fois un minimum de vert écoulé, déclenche le passage au rouge — la garde-condition `[demande and minimum écoulé]` du diagramme.

![Diagramme d'états du feu : VERT puis JAUNE puis ROUGE, puis retour à VERT. La transition VERT vers JAUNE part dès que la durée de vert est écoulée, ou qu'un piéton a appelé après le minimum de vert ; JAUNE vers ROUGE et ROUGE vers VERT se font sur durée écoulée. La boucle teste ces gardes à chaque tour, sans bloquer.|620](/ressources/img/micropython-machine-a-etats/diagramme-etats.svg)

```python
from machine import Pin
from time import ticks_ms, ticks_diff

VERT, JAUNE, ROUGE = 0, 1, 2

feu_vert     = Pin(12, Pin.OUT)
feu_jaune    = Pin(11, Pin.OUT)
feu_rouge    = Pin(10, Pin.OUT)
pieton_vert  = Pin(9, Pin.OUT)
pieton_rouge = Pin(8, Pin.OUT)
bouton       = Pin(14, Pin.IN, Pin.PULL_UP)

DUREE_VERT, DUREE_VERT_MIN, DUREE_JAUNE, DUREE_ROUGE = 6000, 2000, 2000, 5000

etat = VERT
t_debut = ticks_ms()
demande_pieton = False

while True:
    # Evenement : appui pieton, memorise jusqu'a satisfaction
    if bouton.value() == 0:
        demande_pieton = True

    if etat == VERT:                              # voitures passent, pietons stop
        feu_vert.on();  feu_jaune.off(); feu_rouge.off()
        pieton_vert.off(); pieton_rouge.on()
        if (ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT or
                (demande_pieton and ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT_MIN)):
            etat = JAUNE; t_debut = ticks_ms()

    elif etat == JAUNE:                           # transition
        feu_vert.off(); feu_jaune.on()
        if ticks_diff(ticks_ms(), t_debut) >= DUREE_JAUNE:
            etat = ROUGE; t_debut = ticks_ms()
            demande_pieton = False                # la demande est satisfaite

    elif etat == ROUGE:                           # voitures stop, pietons traversent
        feu_jaune.off(); feu_rouge.on()
        pieton_rouge.off(); pieton_vert.on()
        if ticks_diff(ticks_ms(), t_debut) >= DUREE_ROUGE:
            etat = VERT; t_debut = ticks_ms()
```

> [!info] Comment lire ce code
> La transition clé est dans le bloc `VERT` : `if ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT or (demande_pieton and ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT_MIN)`. Elle se lit « **on passe au jaune si** le vert a duré son temps plein (`DUREE_VERT`) **ou bien** un piéton a appelé (`demande_pieton`) **et** que le minimum de vert est écoulé ». Le `or` ouvre deux chemins de sortie, le second protégé par un minimum pour ne pas couper un vert qui vient de démarrer. `demande_pieton` passe à `True` dès l'appui (testé en tête de boucle, à chaque tour) et revient à `False` en entrant dans `ROUGE`. À chaque changement d'état, `t_debut = ticks_ms()` redate l'entrée pour que les comparaisons repartent de zéro.
>
> La priorité de `and` sur `or`, qui commande cette lecture, est un mécanisme du langage et non un idiome embarqué : voir [[micropython-lire-un-programme|lire un programme MicroPython]].

Le programme ne contient **aucun `sleep()`** : la boucle tourne en continu, lit le bouton à chaque tour, avance quand les conditions sont réunies. Ajouter un quatrième état revient à ajouter un `elif`. La structure encaisse sans réécriture.

## Pièges

**Utiliser `sleep()` pour temporiser.** Pendant un `sleep(5)`, le Pico est sourd : il ne lit plus le bouton, ne réagit à rien. Erreur n°1. La temporisation se fait **toujours** avec `ticks_ms()`/`ticks_diff()`.

**État non initialisé.** Une variable d'état sans valeur de départ démarre dans un état indéterminé. Toujours `etat = VERT` : l'état initial est une décision, pas un hasard.

**Redater `t_debut` au mauvais moment.** `t_debut = ticks_ms()` se fait **uniquement** au moment de la transition, pas à chaque tour. Le remettre à chaque passage réarme le chrono en permanence : le délai n'est jamais atteint, la machine se fige.

**Indentation au lieu de `break`.** En C++ il faut un `break` à chaque `case` (sinon *fall-through*). En Python, `if/elif` ne « tombe » pas dans le bloc suivant, pas de risque de fall-through, mais **l'indentation doit être rigoureuse** : une ligne mal indentée sort du bloc d'état.

**Tester l'entrée sans anti-rebond.** Un bouton lu brut peut enregistrer plusieurs appuis. Ici la mémorisation (`demande_pieton = True`) absorbe le problème. Pour compter des appuis ou détecter des fronts, l'[[micropython-entree-tor|anti-rebond]] devient nécessaire.

**Bloc d'état trop chargé.** Si un bloc dépasse une dizaine de lignes, une sous-logique mérite sa propre fonction, ou un état devrait être scindé. Garder chaque bloc lisible d'un coup d'œil.

## Cas particulier — Dictionnaire d'états, et machines parallèles

- **Forme pythonique** : remplacer la cascade `if/elif` par un **dictionnaire** qui associe à chaque état la fonction à exécuter (`etats = {VERT: faire_vert, JAUNE: faire_jaune, ...}` puis `etats[etat]()`). Plus élégant quand les états se multiplient. La cascade `if/elif` reste plus lisible pour quelques états.
- **Machines parallèles** : un montage peut faire tourner **plusieurs machines à états** simultanément (un feu *et* un afficheur clignotant), chacune avec sa variable d'état et son `t_debut`, toutes parcourues dans la même boucle — précisément parce qu'aucune n'utilise `sleep()`.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — premier codage du comportement séquentiel d'une fonction (un cycle, un mode de marche) sur un montage isolé.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — la logique de commande, validée fonction par fonction, est celle qui orchestre le système complet.

Maîtriser ce motif sur un cas simple comme les feux donne le squelette réutilisable de toute commande séquentielle du projet.

## Voir aussi

- [[machine-a-etats|Machine à états]] — la notion mère : états, transitions, gardes, actions (à concevoir avant de coder)
- [[micropython|MicroPython]] — hub du module
- [[micropython-temporisation|sleep() vs ticks_ms()]] — la temporisation non bloquante, cœur du motif
- [[micropython-programmation-non-bloquante|Programmation non bloquante]] — faire tourner plusieurs machines à états de front dans la même boucle
- [[micropython-entree-tor|Lire une entrée TOR]] — bouton avec anti-rebond et détection de front
- [[micropython-sortie-tor|Piloter une sortie TOR]] — au-delà de la LED : relais, buzzer
- [[arduino-machine-a-etats|Machine à états (Arduino)]] — l'équivalent C++ (`switch`/`enum`)
