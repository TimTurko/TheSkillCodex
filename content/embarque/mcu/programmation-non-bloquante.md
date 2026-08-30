---
title: Programmation non bloquante
type: notion
tags:
  - eee
  - notion
aliases:
  - boucle coopérative
  - super-loop
  - non bloquant
prerequis:
  - microcontroleur
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
---

La **programmation non bloquante** est la discipline qui consiste à n'écrire aucune attente dans un programme embarqué : plutôt que de s'arrêter jusqu'à ce qu'un délai s'écoule ou qu'un événement arrive, chaque tâche regarde si son moment est venu, agit ou non, et rend aussitôt la main. La boucle principale ne s'interrompt donc jamais, ce qui permet à un [[microcontroleur|microcontrôleur]], qui ne fait pourtant **qu'une chose à la fois**, de mener plusieurs activités de front. C'est une façon d'organiser le code, pas une fonction à appeler : elle ne dépend ni de la carte ni du langage.

![Deux frises temporelles superposées sur la même durée. En haut, une boucle bloquante alterne de courtes tâches et de longues attentes ; un événement qui survient pendant une attente n'est pris en compte qu'à la fin de celle-ci, d'où un retard marqué. En bas, une boucle coopérative découpe la même durée en tranches brèves qui se succèdent sans interruption ; le même événement est vu dès la tranche suivante.|640](/ressources/img/programmation-non-bloquante/bloquant-vs-cooperatif.svg)

## À quoi ça sert ?

Tant qu'un montage ne fait **qu'une seule chose**, attendre ne coûte rien : pendant qu'une LED reste allumée une demi-seconde, il n'y a rien d'autre à faire. Le problème apparaît à la deuxième activité, et il apparaît d'un coup. Un système qui doit simultanément signaler son état, mesurer à cadence régulière et réagir à une commande ne peut plus se permettre la moindre pause : pendant une attente, **tout** est figé, pas seulement la tâche qui attend.

Les conséquences se lisent sur la frise ci-dessus. Un événement qui survient pendant l'attente est vu **tard**, quand il n'est pas manqué tout à fait s'il a cessé entre-temps. Une mesure censée tomber toutes les 100 ms saute des rendez-vous. Et le programme devient impossible à faire évoluer : ajouter une activité oblige à recalculer toutes les attentes des autres.

Le piège est que l'attente ne se présente pas toujours comme telle. Une fonction de pause est visible, mais « attendre qu'une trame arrive », « attendre qu'un capteur ait fini sa conversion », « attendre que le moteur atteigne sa position » sont des attentes aussi, et une fonction de bibliothèque peut en cacher une sans le dire. **Toute phrase qui commence par « attendre que » est un blocage**, quelle que soit la façon dont elle est écrite.

## Les deux façons de faire passer le temps

Le contraste tient en une phrase : les deux approches lisent **le même compteur**, et seule la structure du code diffère.

**L'attente bloquante** consiste à lire ce compteur en boucle jusqu'à ce que la durée voulue soit écoulée. Ce n'est pas une magie du langage : la fonction de pause d'une bibliothèque est littéralement écrite ainsi. Pendant tout ce temps, le processeur tourne à plein régime **pour ne rien faire**, et rien d'autre ne peut s'exécuter.

**La coopération** renverse le test : au lieu d'attendre que la durée s'écoule, on demande à chaque tour si elle *est* écoulée, et on rend la main dans tous les cas. D'où le nom de *boucle coopérative* : aucune tâche n'est interrompue de force, chacune **rend la main d'elle-même**. Tout repose sur cette bonne volonté : c'est la force du procédé (il n'y a rien à installer) et sa limite (voir plus bas).

## Comment ça marche ?

Trois briques suffisent.

**1. Un compteur de temps qui tourne tout seul.** Chaque famille en fournit un : un compteur de millisecondes depuis le démarrage, incrémenté en arrière-plan par une [[interruption|interruption]] de [[timer|timer]], sans que le programme ait à s'en occuper.

| Famille | Le compteur | Ce qu'il rend |
|---|---|---|
| Arduino, C++ | `millis()` | millisecondes depuis le démarrage, sur 32 bits non signés |
| MicroPython | `ticks_ms()` | un compteur **opaque**, à ne comparer qu'avec `ticks_diff()` |
| STM32, bibliothèque HAL | `HAL_GetTick()` | millisecondes, incrémentées par l'interruption SysTick |

**2. Le patron de temporisation.** Une tâche périodique garde sa **propre** date de dernier passage et teste, à chaque tour, si l'écart dépasse son intervalle. Deux tâches à deux cadences différentes gardent deux dates différentes : elles n'ont rien à se dire.

**3. Un état par tâche.** Une tâche qui traverse des modes — au repos, en cours, terminée — mémorise où elle en est dans sa propre variable d'état. C'est une [[machine-a-etats|machine à états]], et c'est ce qui remplace le déroulé linéaire qu'on écrivait avec des attentes : au lieu de « faire ceci, attendre, faire cela », la tâche répond à chaque tour à la question « où en suis-je, et est-ce le moment de passer à la suite ? ».

### Le débordement, et pourquoi l'idiome ne s'écrit pas partout pareil

Ce compteur n'est pas infini : il finit par revenir à zéro. En C et en C++, sur 32 bits non signés, cela survient au bout d'environ **49 jours**, et l'écart calculé par soustraction reste **juste malgré le passage par zéro**, parce que l'arithmétique non signée boucle exactement comme le compteur. C'est la raison pour laquelle l'idiome s'écrit en soustrayant deux dates, et la raison pour laquelle la variable qui range la date doit être du **même type non signé** : un type plus petit, ou signé, casse cette propriété et fait mentir le calcul.

En MicroPython, la même astuce ne fonctionne pas. Les entiers n'ont pas de taille fixe, et la période de bouclage du compteur n'est **ni la même d'une carte à l'autre ni exposée** par le langage. La documentation demande donc de traiter la valeur comme opaque et de passer par une fonction dédiée, qui fait le calcul en arithmétique circulaire. **Le même patron, deux écritures, et la différence n'est pas cosmétique.**

Cette fonction ajoute une condition qui vaut leçon générale : le résultat n'est fiable que si les deux dates comparées sont **proches**, à moins d'une demi-période l'une de l'autre. Autrement dit, regarder l'horloge régulièrement fait partie du contrat. La contrainte de débordement et la discipline coopérative disent donc la même chose : **ne jamais laisser une tâche s'attarder longtemps.**

## Exemple — Trois activités, une seule boucle

Une petite station doit faire clignoter une LED d'état une fois par seconde, lire un capteur dix fois par seconde, et réagir sans délai à l'appui d'un bouton.

**Avec des attentes**, c'est infaisable, et l'échec est immédiat plutôt que subtil. Une pause d'une demi-seconde pour le clignotement interdit mécaniquement les dix mesures par seconde, et le bouton reste invisible la moitié du temps. Aucun réglage ne rattrape cela : les trois cadences sont incompatibles entre elles dès qu'une seule d'entre elles fige le programme.

**En coopératif**, les trois activités deviennent trois tâches. La première garde sa date et bascule la LED tous les 500 ms. La deuxième garde la sienne et mesure toutes les 100 ms. La troisième se contente de lire l'entrée à chaque tour et de détecter le changement. La boucle les appelle l'une après l'autre, indéfiniment. Comme aucune ne s'attarde, un tour complet dure une fraction de milliseconde : les deux cadences sont tenues et l'appui est vu presque instantanément.

Le bénéfice décisif se voit à l'ajout d'une quatrième activité — piloter un afficheur, écouter une liaison série. Il suffit d'écrire une quatrième tâche et de l'appeler dans la boucle : **rien de ce qui existait n'est à retoucher.** C'est ce qui fait de cette organisation l'architecture par défaut de presque tout programme embarqué réel, et non une optimisation réservée aux cas difficiles.

## Pièges

**Une seule attente suffit à tout figer.** La règle vaut pour **chaque** fonction appelée depuis la boucle, y compris celles qu'on n'a pas écrites soi-même. Une pause oubliée au fond d'une fonction utilitaire annule la discipline de tout le programme.

**Une tâche longue bloque autant qu'une attente.** Sans aucune pause, une tâche qui calcule pendant des dizaines de millisecondes, ou qui interroge un capteur lent jusqu'à obtenir sa réponse, retarde toutes les autres. Ce qui compte n'est pas l'absence de pause, c'est la **brièveté** de chaque passage, quitte à découper la tâche en étapes successives.

**Confondre coopération et parallélisme.** Rien ne s'exécute réellement en même temps : une seule tâche tourne à la fois, très vite, en séquence. L'illusion de simultanéité vient de la vitesse du tour de boucle. Seules les [[interruption|interruptions]] s'exécutent véritablement par-dessus la boucle.

**Ranger une date dans un type trop petit.** Une date de compteur stockée dans un entier de taille insuffisante déborde en quelques dizaines de secondes, et la tâche se met à se déclencher n'importe quand. Le type de la variable doit correspondre à celui que rend le compteur.

**Croire que le coopératif garantit une cadence.** Il garantit qu'une tâche ne sera pas oubliée, pas qu'elle passera à l'instant exact. La durée d'un tour de boucle varie avec ce que font les autres tâches, si bien qu'un intervalle demandé de 10 ms est en réalité de « 10 ms ou un peu plus ». Pour un pas rigoureusement constant — échantillonnage, [[asservissement|asservissement]] —, c'est un [[timer|timer]] matériel qu'il faut.

**Attendre une réponse plutôt que la guetter.** Guetter l'arrivée d'une trame ou la fin d'un mouvement par une boucle d'attente fige tout. La transformation à faire est toujours la même : au lieu d'attendre que la réponse arrive, demander à chaque tour **si elle est arrivée**, et repasser plus tard sinon.

## Cas particulier — Là où la coopération s'arrête

Tout le mécanisme repose sur la **bonne volonté** de chaque tâche : rien, dans le système, ne force une tâche à rendre la main. Tant qu'elles sont brèves, cela tient sans effort. Mais dès qu'une tâche doit respecter une **échéance stricte quoi qu'il arrive** (une commande de moteur qui ne tolère aucun retard, une acquisition qui ne peut pas manquer un pas), la bonne volonté ne suffit plus : il faudrait pouvoir *retirer* la main à une tâche qui s'attarde.

C'est ce que fait un **système d'exploitation temps réel** (RTOS) : il **préempte**, interrompt une tâche pour en exécuter une plus prioritaire, et garantit ainsi les échéances. Le prix est réel : davantage de mémoire, un ordonnanceur à configurer, et une famille de bugs nouvelle (accès concurrents aux ressources partagées) qui n'existait pas en coopératif, puisque les tâches ne s'interrompaient jamais.

Entre les deux se trouvent deux leviers plus légers, à essayer d'abord. Une [[interruption|interruption]] traite un événement rare et urgent sans rien changer à la boucle. Un [[timer|timer]] matériel impose une cadence exacte à une tâche critique, indépendamment de la charge. L'ordre à retenir : **la boucle coopérative par défaut, l'interruption ou le timer sur les points durs, le RTOS seulement quand les échéances l'exigent** : c'est l'escalier d'architectures décrit par la fiche [[firmware|firmware]], et il se monte marche par marche.

## Voir aussi

- [[firmware|Firmware]] — l'escalier des architectures, dont la boucle coopérative est la deuxième marche
- [[arduino-programmation-non-bloquante|Programmation non bloquante (Arduino)]] — la mise en œuvre en C++ et son patron de temporisation
- [[micropython-programmation-non-bloquante|Programmation non bloquante (MicroPython)]] — la même discipline, plus l'ordonnanceur intégré du langage
- [[machine-a-etats|Machine à états]] — la forme que prend une tâche à modes
- [[interruption|Interruption]] — ce qui s'exécute réellement par-dessus la boucle
- [[timer|Timer]] — la cadence garantie en matériel, quand le coopératif ne suffit plus
- [[microcontroleur|Microcontrôleur]] — un cœur, une chose à la fois
- [[programmer-l-embarque|Programmer]] — l'étape du parcours où la discipline se pose
- [[preuve-de-concept|Preuve de concept]] — dès le premier montage qui fait plus d'une chose
