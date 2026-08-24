---
title: Interruption
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

Une **interruption** est un mécanisme par lequel un [[microcontroleur|microcontrôleur]] **suspend le programme en cours** dès qu'un événement survient, exécute une petite fonction dédiée, la **routine d'interruption** (ISR, *Interrupt Service Routine*), puis reprend le programme exactement là où il s'était arrêté. C'est la façon de **réagir immédiatement** à un événement sans avoir à le surveiller en boucle, et de ne **jamais manquer** un signal trop bref pour être attrapé au passage.

![Chronogramme à deux niveaux : le programme principal s'exécute le long de l'axe du temps, un événement le suspend, l'exécution saute vers la routine d'interruption (ISR) qui s'exécute brièvement, puis redescend et le programme principal reprend là où il s'était arrêté.](/ressources/img/interruption/chronogramme.svg)

## À quoi ça sert ?

Sans interruption, un programme ne perçoit un événement qu'en allant le **vérifier lui-même**, encore et encore, dans sa boucle principale : c'est le *polling* (scrutation). Tant que la boucle est courte, cela suffit. Mais deux situations le mettent en échec :

- **l'événement est trop bref** : une impulsion de quelques microsecondes (le passage d'un aimant devant un capteur, un *tic* d'encodeur) peut survenir et disparaître **entre deux passages** de la boucle, qui ne la verra jamais ;
- **la boucle est occupée** : si elle met du temps à faire autre chose (afficher, calculer, attendre), elle réagit en retard à un événement urgent — un bouton d'arrêt d'urgence pressé pendant ce temps mort n'est pris en compte que bien plus tard.

L'interruption renverse la logique : ce n'est plus le programme qui va chercher l'événement, c'est **l'événement qui vient chercher le programme**. Le matériel surveille en permanence, et déclenche l'ISR à l'instant précis où l'événement se produit. Trois bénéfices en découlent : on **ne manque rien**, on **réagit sans délai**, et la boucle principale **reste libre** de faire son travail entre deux événements. C'est aussi le mécanisme qui **réveille** un microcontrôleur endormi (voir [[deep-sleep|deep sleep]]).

## Comment ça marche ?

Une interruption articule quatre éléments.

1. **L'événement déclencheur.** Une condition matérielle surveillée en continu : un front sur une broche, un compteur de [[timer]] qui déborde, un octet reçu sur une liaison série, une conversion analogique terminée. C'est lui qui provoque l'interruption.
2. **Le vecteur d'interruption.** Une table interne associe chaque source d'interruption à l'adresse de l'ISR correspondante. Quand l'événement survient, le microcontrôleur consulte cette table et saute à la bonne routine — automatiquement, sans que le programme ait à le demander.
3. **La routine d'interruption (ISR).** La fonction qui s'exécute. Elle doit rester **très courte** : pendant qu'elle tourne, le programme principal est figé et, le plus souvent, les autres interruptions sont bloquées. Sa règle d'or est de faire le strict minimum — incrémenter un compteur, mémoriser une valeur, lever un drapeau — et de laisser le **traitement** au programme principal.
4. **Le retour.** En sortant de l'ISR, le microcontrôleur restaure l'état du programme et reprend là où il en était. L'interruption doit être transparente : le code principal ne « sait » même pas qu'il a été suspendu.

Deux notions techniques accompagnent ce mécanisme et sont la source des bugs les plus fréquents.

**Le mot-clé `volatile`.** Une variable partagée entre l'ISR et le programme principal doit être déclarée `volatile`. Sans cela, le compilateur, croyant la variable inchangée, peut en garder une copie obsolète et ne jamais voir la mise à jour faite par l'ISR. `volatile` force une relecture en mémoire à chaque accès.

**La lecture atomique.** Sur un microcontrôleur 8 bits, lire une variable de 16 ou 32 bits prend **plusieurs accès mémoire**. Si une interruption tombe au milieu de cette lecture et modifie la variable, le programme principal récupère une valeur **mi-ancienne mi-nouvelle**, incohérente. La parade est de lire la variable dans une **section critique**, en désactivant brièvement les interruptions le temps de la copie, puis en les réactivant.

Côté Arduino, ce mécanisme se manipule avec `attachInterrupt()` et le mot-clé `volatile`. La mise en œuvre concrète est traitée dans [[arduino-interruptions|le tuto sur les interruptions Arduino]], et côté MicroPython dans [[micropython-interruptions]].

## Les sources d'interruption

Une interruption ne vient pas que d'une broche : la plupart des périphériques d'un microcontrôleur peuvent en déclencher une. Le **mécanisme reste le même** (vecteur → ISR → retour). Seule change la façon de l'armer.

| Source | Déclencheur | Usage typique | En pratique |
| --- | --- | --- | --- |
| **Externe / broche** | front montant ou descendant sur une [[gpio\|broche]] | bouton urgent, compteur d'impulsions, encodeur | [[arduino-interruptions\|Arduino]] · [[micropython-interruptions\|MicroPython]] |
| **Timer** | débordement d'un compteur matériel | cadence régulière (échantillonnage, rafraîchissement) | [[arduino-timers\|Arduino]] · [[micropython-timers\|MicroPython]] |
| **Liaison série** | octet reçu sur l'[[uart\|UART]] | recevoir sans surveiller le port | souvent gérée par la bibliothèque |
| **Fin de conversion [[adc\|ADC]]** | mesure analogique terminée | acquisition rapide en continu | mode avancé, rare en projet étudiant |
| **[[chien-de-garde\|Chien de garde]]** | délai de surveillance dépassé | détecter un programme bloqué | mode non exposé sur toutes les familles |

Les deux sources les plus utilisées en projet — **externe** (réagir à un événement physique) et **timer** (imposer une cadence) — ont chacune leur fiche d'application. Les autres se rencontrent surtout dans des montages avancés, ou sont déjà prises en charge sans qu'on s'en occupe (le cas de la liaison série).

## Exemple — Le bouton d'arrêt d'urgence

Un système exécute une boucle qui met, disons, un dixième de seconde à faire un tour (calculs, affichage, communication). Un opérateur appuie sur le bouton d'arrêt d'urgence.

**En polling**, le bouton n'est lu qu'une fois par tour de boucle. Dans le pire cas, l'appui survient juste après la lecture : il faut attendre la fin du tour pour qu'il soit pris en compte. Un dixième de seconde de retard sur un arrêt d'urgence, c'est inacceptable. Pire, si l'appui est bref et que la boucle est longue, il peut passer **entre deux lectures** et n'être jamais vu.

**En interruption**, le bouton est câblé sur une broche d'interruption. À l'instant de l'appui, le programme en cours est suspendu et l'ISR s'exécute : elle coupe la sortie de puissance et lève un drapeau. La réaction est **immédiate et garantie**, quel que soit ce que faisait la boucle. L'ISR se contente de couper et de signaler. Le programme principal, lui, gérera ensuite l'affichage du défaut et la procédure de redémarrage : le traitement long n'a pas sa place dans l'ISR.

Ce cas résume la règle de choix : dès qu'un événement est **urgent** ou **fugace**, il appelle une interruption. Pour le reste, le polling suffit et reste plus simple.

## Pièges

**ISR trop longue.** Pendant l'ISR, le programme principal est figé et les autres interruptions sont souvent bloquées. Une ISR qui calcule, attend ou affiche déstabilise tout le système. Elle doit faire le minimum et rendre la main vite.

**Oublier `volatile`.** Une variable partagée entre l'ISR et la boucle principale sans `volatile` peut être lue obsolète : le programme ne voit jamais la mise à jour. Toute variable touchée par une ISR et lue ailleurs est `volatile`.

**Lecture non atomique.** Lire une variable multi-octets partagée avec une ISR sans protection peut renvoyer une valeur incohérente si l'interruption tombe au milieu. La copier dans une section critique (interruptions désactivées le temps de la lecture).

**Appeler `delay()` ou écrire sur le port série dans l'ISR.** Ces fonctions reposent elles-mêmes sur des interruptions, désactivées pendant l'ISR : elles s'y comportent mal ou bloquent. On n'y fait ni temporisation, ni affichage.

**Croire que le temps avance dans l'ISR.** Le compteur matériel, lui, tourne toujours. Mais l'**horloge logicielle** (`millis()` et consorts) repose elle-même sur une interruption, bloquée pendant l'ISR : elle ne progresse plus. Mesurer ou attendre une durée depuis l'intérieur d'une ISR donne des résultats faux.

**Oublier le rebond du bouton.** Un appui mécanique rebondit pendant quelques millisecondes : une broche d'interruption câblée sur un bouton déclenche **plusieurs ISR par appui**. Filtrer — ignorer les déclenchements trop rapprochés, ou lever un drapeau dans l'ISR et traiter l'anti-rebond dans le programme principal.

**Mettre une interruption partout.** Une interruption ajoute de la complexité et des pièges (concurrence, `volatile`, atomicité). Pour un événement lent et non urgent, le polling est plus simple et plus sûr. L'interruption se réserve aux événements brefs ou critiques.

## Cas particulier — Le réveil depuis la veille

Quand un microcontrôleur est mis en sommeil pour économiser l'énergie (voir [[deep-sleep|deep sleep]]), son programme principal ne tourne plus : seul un événement matériel peut le réveiller. Ce réveil **est** une interruption — typiquement une broche qui change d'état, ou un timer qui arrive à échéance. C'est ce qui permet à un objet sur batterie de dormir des heures en ne consommant presque rien, puis de se réveiller instantanément au moindre événement. La configuration de la source de réveil est donc une configuration d'interruption.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — le circuit qui porte le mécanisme d'interruption
- [[arduino-interruptions|Interruptions sur Arduino]] — la mise en œuvre concrète des interruptions externes (`attachInterrupt`, code et câblage)
- [[micropython-interruptions|Interruptions en MicroPython]] — la même mécanique côté MicroPython
- [[arduino-timers|Timers Arduino]] — les interruptions périodiques pour cadencer une tâche
- [[micropython-timers|Timers en MicroPython]] — les mêmes interruptions périodiques côté MicroPython
- [[chien-de-garde|Chien de garde]] — la surveillance de délai, qui peut elle aussi lever une interruption
- [[gpio|GPIO]] — les broches d'entrée, source des interruptions externes
- [[deep-sleep|Deep sleep]] — la veille, dont une interruption assure le réveil
- [[programmation-non-bloquante|Programmation non bloquante]] — la boucle coopérative, et ce qu'elle ne peut pas attraper assez vite
