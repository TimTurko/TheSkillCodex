---
title: Machine à états
type: notion
tags:
  - eee
  - notion
prerequis:
  - algorithme
aa:
  - RA-EEE-C03-2/EEE/5
phases:
  - concept
  - preuve-de-concept
draft: false
---

Une **machine à états** (ou **automate fini**) est une représentation d'un [[algorithme]] où le système occupe, à chaque instant, un **état** parmi un nombre fini, et passe de l'un à l'autre par des **transitions** déclenchées par des événements. Elle décrit les comportements **séquentiels à modes** — un système qui réagit différemment selon là où il en est (un portail est fermé, en ouverture, ouvert ou en fermeture) — et se traduit presque directement en code (voir [[arduino-machine-a-etats|sa mise en œuvre sur Arduino]]).

![Schéma générique d'une machine à états : trois états reliés par des transitions orientées en cycle, chaque transition portant la syntaxe « événement [garde-condition] / action ».](/ressources/img/machine-a-etats/generique.svg)

## À quoi ça sert ?

Beaucoup de systèmes mécatroniques ne font pas « toujours la même chose » : ils ont des **modes** (veille, marche, défaut), et un même événement n'a pas le même effet selon le mode. Coder ça avec des `if` empilés et des variables booléennes éparpillées (`enMarche`, `aDejaOuvert`, `attente`…) produit rapidement un programme que personne ne suit et où les bugs se cachent dans les combinaisons oubliées.

La machine à états remet de l'ordre :

- elle **nomme** explicitement les situations possibles, et impose qu'on soit dans **une seule à la fois** ;
- elle **rend visible** ce qui déclenche chaque changement, et sous quelle condition ;
- elle **force à traiter les cas** : pour chaque état, que se passe-t-il si tel événement arrive ? Les trous sautent aux yeux ;
- elle est **testable** : on peut vérifier chaque transition isolément.

C'est l'outil de prédilection dès qu'un comportement se décrit par « tant que…, puis quand…, alors… ». Elle se conçoit en phase de [[concept|concept]] et se valide en [[preuve-de-concept|preuve de concept]].

## Comment construire une machine à états ?

Quatre ingrédients suffisent. Le schéma générique ci-dessus les met en scène ; les voici un par un.

1. **Les états.** Ce sont les situations **stables** et **mutuellement exclusives** du système. Bien choisis, ils répondent à la question « dans quelle situation suis-je en train d'attendre la suite ? ». Un état n'est pas une action en cours mais une position d'attente d'un événement. L'**état initial** — celui où la machine démarre à la mise sous tension — se marque d'un **point plein** relié au premier état : sans lui, le comportement au démarrage n'est pas défini.
2. **Les transitions.** Ce sont les passages orientés d'un état vers un autre, **déclenchés par un événement** (appui sur un bouton, fin de course atteinte, temporisation écoulée, mesure dépassée). Sans événement, pas de changement d'état.
3. **Les garde-conditions.** Une transition peut être soumise à une **condition booléenne** qui l'autorise ou non, notée entre crochets `[…]`. L'événement « fin de fermeture » ne referme vraiment que `[si aucun obstacle]`. La garde encode les règles de sécurité et les cas particuliers directement dans le schéma.
4. **Les actions (ou sorties).** Ce que le système **fait** — démarrer un moteur, allumer une LED, envoyer une trame. L'action peut être attachée à la transition (notée `/ action`) ou produite tant qu'on est dans un état. Cette distinction porte un nom (voir *Cas particulier*).

La discipline tient en une phrase : **un seul état actif, des transitions explicites, et tout cas non prévu reste dans l'état courant** (le système ne « tombe » jamais dans un état indéfini).

## Exemple — Portail automatique

Un portail coulissant motorisé piloté par un bouton, deux fins de course (haut/bas) et un capteur d'obstacle. Le même système est décrit ci-dessous à trois niveaux de qualité, du brouillon à la machine à états exploitable.

> [!failure] Contre-exemple — schéma soigné, modélisation fautive
> ![Quatre états propres — Fermé, Ouverture, Ouvert, Bloqué — aux coins d'un carré, avec trois fautes de modélisation signalées en ambre : aucun état initial sur Fermé, une transition de Fermé vers Ouverture sans événement, et un état Bloqué sans aucune transition de sortie ; le cycle ne revient jamais à Fermé.](/ressources/img/machine-a-etats/portail-mauvais.svg)
>
> **Pourquoi c'est mauvais.** Les états sont propres, le tracé est net — et la modélisation est trouée trois fois. **D'où part-on ?** Aucun état initial : le comportement à la mise sous tension n'est pas défini. **Qu'est-ce qui ouvre ?** La transition *Fermé → Ouverture* ne porte aucun événement : elle se franchit… quand ? Et surtout, **Bloqué est un puits** : aucune transition n'en sort, le cycle ne reboucle jamais. Comme pour le [[logigramme|logigramme]] : la propreté du dessin ne valide pas la logique.
>
> **Coût réel.** Traduit tel quel, le programme démarre dans un état imprévisible et, au premier obstacle, le portail entre dans *Bloqué*… pour toujours. Seule issue : couper le courant. Le bug n'est pas dans le code — il était déjà dans le schéma.

> [!warning] Version moyenne — états nets, transitions creuses
> ![Quatre états Fermé, Ouverture, Ouvert, Fermeture aux coins d'un carré, reliés par un cycle de transitions, chacune étiquetée d'un seul mot vague : bouton, capteur, minuterie, capteur.](/ressources/img/machine-a-etats/portail-moyen.svg)
>
> **Pourquoi c'est moyen.** Les quatre états sont propres et exclusifs, le cycle est clair — c'est déjà exploitable. Mais les transitions restent **sous-spécifiées** : « capteur » lequel ? aucune garde-condition, aucune action notée, et surtout **aucune gestion de l'obstacle**. Un portail qui ne sait pas réagir à un obstacle pendant la fermeture est dangereux. Le schéma est lisible mais incomplet pour passer au code.

> [!example] Version cible — machine à états complète
> ![Les mêmes quatre états avec un point plein d'état initial relié à Fermé, des transitions complètes notées « événement [garde] / action », et une transition de sécurité en ambre de Fermeture vers Ouverture déclenchée par l'événement obstacle avec l'action inverser le moteur.](/ressources/img/machine-a-etats/portail-bon.svg)
>
> **Pourquoi c'est bon.** L'**état initial** est marqué (le point plein → *Fermé* : à la mise sous tension, le portail se considère fermé). Chaque transition porte les informations utiles : l'**événement** (`bouton`, `fin haut`, `tempo 5 s`, `obstacle`), la **garde-condition** quand il en faut une (`fin bas [aucun obstacle]` — le portail ne se déclare fermé que si rien ne gêne), et l'**action** associée (`/ moteur ↑`, `/ stop`, `/ inverser`). La transition de sécurité — *Fermeture → Ouverture* sur l'événement `obstacle` — met la **sécurité dans le schéma**, pas dans un patch ajouté après coup. Ce diagramme se transcrit ligne pour ligne en code (un `case` par état, voir le tuto Arduino).

## Pièges

**États qui se recouvrent.** Si l'on peut « être dans deux états à la fois », ce ne sont pas des états. Le test : à tout instant, un seul doit être vrai. Sinon, fusionner ou redécouper.

**Confondre état et action.** « En train d'ouvrir » est un état (on attend la fin de course) ; « ouvrir » est une action. Nommer les états par des situations (Ouverture, Ouvert), pas par des verbes d'action en cours.

**Oublier l'état initial.** Une machine à états doit dire d'où elle part au démarrage. Un état initial non défini, c'est un comportement aléatoire à la mise sous tension (à rapprocher de l'[[gpio|état des GPIO au boot]]).

**Cas non couverts laissés au hasard.** Pour chaque état, se demander ce qui arrive si un événement *inattendu* survient. La règle saine : tout événement non prévu **laisse dans l'état courant**, il ne provoque pas de saut silencieux.

**Confondre événement et garde.** L'événement *déclenche* l'examen de la transition ; la garde *autorise* le passage. « Fin de course atteinte » est un événement ; « si aucun obstacle » est une garde. Les mélanger rend les transitions intestables.

**Explosion du nombre d'états.** Multiplier les états pour coder chaque combinaison de conditions fait exploser le schéma. Quand ça arrive, c'est souvent qu'une donnée devrait être une **variable** (un compteur, un mode) plutôt qu'un état — ou qu'il faut passer à un [[grafcet|grafcet]] pour gérer le parallélisme.

## Cas particulier — Moore et Mealy

Deux conventions coexistent selon **où** l'on attache les actions. Dans une machine de **Moore**, l'action dépend uniquement de l'**état** (tant qu'on est dans *Ouverture*, le moteur tourne). Dans une machine de **Mealy**, l'action est attachée à la **transition** (au passage *Fermé → Ouverture*, démarrer le moteur). En pratique on mélange souvent les deux, et la distinction importe surtout pour raisonner proprement : une action « continue » se rattache à un état, une action « ponctuelle » à une transition. Le choix n'a pas d'incidence sur la puissance du modèle, seulement sur sa lisibilité.

## Voir aussi

- [[algorithme|Algorithme]] — la fiche mère qui situe la machine à états parmi les représentations (logigramme, grafcet, chronogramme)
- [[arduino-machine-a-etats|Programmer une machine à états sur Arduino]] — la mise en œuvre en C++ avec le motif `switch(etat)`
- [[micropython-machine-a-etats|Programmer une machine à états en MicroPython]] — la même mise en œuvre côté Python
- [[logigramme|Logigramme]] — l'alternative pour un enchaînement de décisions ponctuel, sans notion de mode
- [[grafcet|Grafcet]] — la représentation à privilégier quand des séquences avancent en parallèle
- [[preuve-de-concept|Preuve de concept]] — où la machine à états conçue est implémentée et testée
- [[programmation-non-bloquante|Programmation non bloquante]] — l'architecture qui appelle ces machines à chaque tour sans jamais bloquer
