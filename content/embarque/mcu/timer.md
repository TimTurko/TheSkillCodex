---
title: Timer
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
aa: []
phases: []
draft: false
---

Un **timer** (ou *minuterie*, *compteur matériel*) est un circuit interne au [[microcontroleur|microcontrôleur]] qui **compte des impulsions d'horloge tout seul**, en parallèle du programme et sans solliciter le processeur. Parce qu'il compte le temps à la place du code, il sert à **mesurer une durée**, à **cadencer** un événement à intervalle régulier, à **générer un signal [[pwm|PWM]]**, ou à **surveiller un délai** — le tout sans bloquer le programme principal.

![Graphe de la valeur d'un compteur de timer au cours du temps : il monte régulièrement de zéro jusqu'à sa valeur maximale (TOP), revient instantanément à zéro en déclenchant un événement de débordement, et déclenche aussi un événement chaque fois qu'il atteint une valeur de comparaison intermédiaire. La durée entre deux débordements est une période fixe.](/ressources/img/timer/compteur.svg)

## À quoi ça sert ?

Compter le temps « à la main » dans le programme — en empilant des `delay()` ou en comptant des tours de boucle — pose deux problèmes : c'est **imprécis** (la durée dépend de ce que fait la boucle par ailleurs) et, pour `delay()`, ça **bloque** tout le reste. Un timer résout les deux d'un coup : il compte en **matériel**, à une cadence régulière et indépendante du programme.

Quatre usages en découlent :

- **mesurer une durée** — combien de temps s'est écoulé entre deux événements (un chronomètre, le calcul d'une vitesse) ;
- **cadencer** — déclencher une action à **intervalle parfaitement régulier** (échantillonner un capteur, rafraîchir un afficheur, faire tourner une boucle d'asservissement) ;
- **générer un [[pwm|signal PWM]]** — un timer produit automatiquement le signal carré dont on règle le rapport cyclique ;
- **surveiller un délai** — détecter qu'un événement attendu n'est pas arrivé à temps (principe du [[arduino-watchdog|chien de garde]]).

Le point qui surprend souvent : les fonctions `delay()` et `millis()` ne sont pas magiques, elles **reposent elles-mêmes sur un timer** qui tourne en arrière-plan (voir [[arduino-temporisation|delay() vs millis()]]).

## Comment ça marche ?

Un timer s'articule autour de quatre éléments.

1. **La source d'horloge.** Le timer compte les impulsions d'une horloge dérivée de l'horloge système du microcontrôleur. C'est cette base régulière qui donne au comptage sa valeur de mesure du temps.
2. **Le prédiviseur (*prescaler*).** Avant d'être comptée, la fréquence d'horloge est **divisée** par un facteur réglable (2, 8, 64, 256…). Ce réglage arbitre entre **résolution** (un petit prédiviseur = comptage fin, mais qui sature vite) et **durée maximale mesurable** (un grand prédiviseur = longue durée, mais grain plus grossier). C'est le paramètre central pour fixer la cadence.
3. **Le comptage et le débordement.** Le compteur s'incrémente jusqu'à sa **valeur maximale** (TOP), fixée par sa taille — 8 bits (jusqu'à 255) ou 16 bits (jusqu'à 65 535) — puis **déborde** : il repasse à zéro. Ce débordement est un **événement** que le timer peut signaler.
4. **La comparaison (*compare match*).** On peut fixer une **valeur cible** intermédiaire ; quand le compteur l'atteint, un événement est déclenché. C'est ce qui permet de régler une période ou une fréquence **exacte**, sans attendre le débordement complet.

À chaque débordement ou comparaison, le timer peut faire deux choses : **agir directement sur une broche** (basculer son état — c'est ainsi qu'il génère un [[pwm|PWM]]), ou **déclencher une [[interruption|interruption]]** qui exécute une routine à intervalle régulier. La fréquence de ces événements suit une logique simple : *fréquence de l'horloge ÷ (prédiviseur × valeur de comptage)*.

## Exemple — Échantillonner à intervalle précis

Une boucle de traitement du signal ou d'asservissement doit lire un capteur à **cadence rigoureusement constante** — disons exactement 100 fois par seconde, soit toutes les 10 ms. Une régulation conçue pour un pas de 10 ms se dérègle si le pas varie.

**En comptant le temps dans la boucle** (`millis()` + comparaison), l'intervalle réel **dérive** : selon que la boucle affiche, calcule ou attend, un tour ne dure pas toujours la même chose, et l'écart entre deux lectures fluctue. Pour de la mesure approximative c'est sans conséquence, mais pour un traitement régulier, ça fausse les calculs.

**Avec un timer** réglé pour déclencher une interruption toutes les 10 ms, la lecture tombe à **intervalle parfaitement régulier**, quoi que fasse la boucle au même moment. Le pas d'échantillonnage devient une **garantie matérielle**, pas un espoir. C'est la raison pour laquelle toute mesure cadencée sérieuse — acquisition, filtrage, régulation — s'appuie sur un timer plutôt que sur un comptage logiciel.

## Pièges

**Confondre timer matériel et temporisation logicielle.** `delay()` et `millis()` *utilisent* un timer, mais comptent côté logiciel : `delay()` bloque, et la cadence d'une boucle `millis()` dérive. Le timer matériel, lui, agit seul et reste précis. Pour de la cadence rigoureuse, c'est lui qu'on configure.

**Mal arbitrer prédiviseur et résolution.** Un prédiviseur trop petit fait déborder le compteur très vite (durée mesurable courte) ; trop grand, le grain de mesure devient grossier. Le bon réglage dépend de la durée et de la précision visées.

**Croire le timer infiniment précis.** Sa précision est celle de l'horloge qui l'alimente — un quartz est stable, mais un oscillateur interne dérive avec la température. Pour une base de temps exigeante, la qualité de l'horloge compte.

**Oublier que les timers sont une ressource rare et partagée.** Un microcontrôleur n'en a qu'une poignée, et beaucoup de fonctions courantes en occupent déjà (voir *Cas particulier*). Reconfigurer un timer sans savoir qui s'en sert casse silencieusement autre chose.

**Routine de timer trop longue.** Quand un débordement déclenche une [[interruption|interruption]], la routine associée obéit aux mêmes règles que toute ISR : courte, pas de `delay()`, variables partagées en `volatile`. Si elle n'a pas fini avant le débordement suivant, le système se noie.

## Cas particulier — Une ressource rare et partagée

Un microcontrôleur ne dispose que de **quelques timers** (trois sur une Arduino Uno). Or plusieurs fonctions très utilisées s'en servent déjà, le plus souvent à l'insu du débutant : `millis()` et `delay()` mobilisent l'un d'eux, la génération de [[pwm|PWM]] par `analogWrite()` en occupe d'autres, et des bibliothèques comme Servo ou la génération de tonalités réquisitionnent les leurs. Configurer un timer pour son propre usage revient donc à **choisir lequel sacrifier**, en connaissant ce qu'il pilotait — sous peine de voir `delay()` se dérégler ou un servomoteur trembler. Le détail des timers disponibles et de leurs conflits sur Arduino est traité dans [[arduino-timers|le tuto dédié]] ; côté MicroPython, la classe `Timer` est traitée dans [[micropython-timers]].

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — le circuit qui intègre les timers
- [[arduino-timers|Timers sur Arduino]] — la mise en œuvre concrète (bibliothèque et registres)
- [[micropython-timers|Timers en MicroPython]] — la même mécanique côté MicroPython
- [[interruption|Interruption]] — ce qu'un débordement ou une comparaison déclenche pour exécuter une routine périodique
- [[pwm|PWM]] — le signal généré par un timer, dont on règle le rapport cyclique
- [[arduino-temporisation|delay() vs millis()]] — la temporisation logicielle, bâtie sur un timer
- [[deep-sleep|Deep sleep]] — un timer peut réveiller un microcontrôleur endormi à échéance
