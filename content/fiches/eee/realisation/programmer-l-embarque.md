---
title: Programmer
type: trame
tags:
  - eee
  - trame
  - realisation
prerequis:
  - choisir-le-materiel
aa: []
draft: false
---

**Programmer**, c'est la quatrième étape de la [[fiches/eee/index|réalisation du sous-système embarqué]]. La carte est choisie et l'électronique conçue ; tu dois maintenant **lui donner un comportement**. Cela se fait en deux temps : d'abord **concevoir l'algorithme** de commande (la logique, indépendante du code), puis l'**écrire** pour la carte en pilotant ses périphériques. Le livrable est un **firmware fonctionnel et documenté**, prêt à être fiabilisé à l'[[fiabiliser-et-deboguer|étape 6]].

## Posture attendue

La tentation est d'ouvrir l'éditeur et de coder tout de suite, en empilant des instructions jusqu'à ce que « ça marche ». Tu obtiens alors un programme que personne — toi compris, deux semaines plus tard — ne sait relire ni corriger. Conçois d'abord la **logique** sur le papier, indépendamment du langage : c'est elle qui décide du comportement, le code ne fait que l'exécuter. Et sépare toujours la **logique de commande** de l'**accès au matériel** : un code où tout est mélangé devient impossible à faire évoluer.

## Objectif de l'étape

Produire un **firmware fonctionnel et documenté** qui :

- repose sur un **algorithme de commande** explicite (logigramme, machine à états ou GRAFCET) ;
- est écrit dans un **langage adapté** à la famille de la carte ;
- est **structuré** (initialisation, boucle, modules) et non monolithique ;
- pilote correctement les **périphériques** (entrées-sorties, convertisseur, sorties PWM) ;
- est **documenté** assez pour qu'un autre que toi le reprenne.

## Démarche

### 1. Concevoir l'algorithme de commande

Avant la moindre ligne de code, décris **comment le système se comporte**, indépendamment de la carte et du langage. Selon le problème, l'outil change : un [[logigramme|logigramme]] pour un enchaînement de décisions, une [[machine-a-etats|machine à états]] pour un système qui passe par des modes (repos, marche, défaut), un [[grafcet|GRAFCET]] pour un procédé séquentiel, un [[chronogramme|chronogramme]] pour des signaux à synchroniser dans le temps. La fiche [[algorithme|algorithme]] aide à choisir la forme. Cette logique est ton plan : le code en découlera directement.

> [!warning] Attention
> **Coder sans avoir conçu l'algorithme produit du code spaghetti.** Sans plan, chaque cas particulier s'ajoute à la volée, les conditions s'imbriquent, et le comportement devient impossible à raisonner ou à corriger. La logique se pose d'abord sur le papier ; le code n'est que sa traduction.

> [!example] Exemple : projet bras 3 axes
> Le comportement du bras se décrit par une **machine à états** : *Repos* (moteurs coupés), *Calibrage* (recherche des fins de course pour fixer l'origine), *En course* (asservissement vers la consigne), *Arrêt d'urgence* (coupure immédiate sur fin de course imprévue ou commande opérateur). Les transitions sont nettes : une consigne reçue fait passer de *Repos* à *Calibrage* puis *En course* ; une fin de course imprévue fait basculer n'importe quel état vers *Arrêt d'urgence*.
>
> **Sortie** : une machine à états à 4 états et ses transitions, validée avant tout codage.

> [!livrable] Livrable 1/4 — Algorithme de commande
> - La logique du comportement (logigramme, machine à états ou GRAFCET), indépendante du code

### 2. Choisir le langage et structurer le firmware

Le langage dépend de la famille de la carte : **C++** dans l'écosystème [[cpp|Arduino]] (le plus répandu sur microcontrôleur), ou **[[micropython-langage|MicroPython]]** sur les cartes qui le supportent. Une fois le langage choisi, structure le programme dès le départ : une partie **initialisation** (configuration des broches, des périphériques), une **boucle principale** qui exécute la machine à états, et des **modules** séparés pour les fonctions distinctes. C'est l'objet du [[firmware|firmware]] : organiser le programme embarqué pour qu'il reste lisible et évolutif.

> [!tip] Astuce
> **Structure le firmware avant de le remplir.** Poser d'emblée la séparation initialisation / boucle / modules coûte quelques minutes et évite le monolithe où tout se répond. Un firmware structuré se débogue et s'étend ; un firmware monolithique se réécrit.

> [!example] Exemple : projet bras 3 axes
> Sur l'ESP32, en C++ (écosystème Arduino) : une initialisation qui configure les broches des drivers, les voies analogiques des capteurs et les interruptions des fins de course ; une boucle qui exécute la machine à états et, en mode *En course*, la boucle d'asservissement des trois axes ; des modules séparés pour la lecture des capteurs, la génération des pas et la liaison opérateur.
>
> **Sortie** : un squelette de firmware structuré (init / boucle / modules), compilable, où la machine à états de l'étape 1 a sa place.

> [!livrable] Livrable 2/4 — Squelette de firmware structuré
> - L'organisation du programme : initialisation, boucle principale exécutant l'algorithme, modules séparés

### 3. Piloter les périphériques

L'algorithme doit maintenant agir sur le matériel. Chaque action passe par un périphérique de la carte : lire une entrée logique ou commander une sortie ([[gpio|GPIO]]), mesurer une tension analogique ([[adc|convertisseur analogique-numérique]]), produire un signal modulé pour un moteur ou une LED ([[pwm|sortie PWM]]), parfois manipuler des bits pour configurer un registre ([[manipulation-de-bits|manipulation de bits]]). Relie chaque entrée et sortie de ta machine à états au périphérique qui la réalise, en gardant cette couche d'accès **séparée** de la logique.

> [!warning] Attention
> **Scruter en boucle un événement critique au lieu d'utiliser une interruption fait rater l'événement.** Lire une fin de course en la testant à chaque tour de boucle peut la manquer si la boucle est occupée ailleurs. Les événements critiques (sécurité, fronts rapides) se câblent sur **interruption** ; la scrutation est réservée à ce qui peut attendre le prochain tour.

> [!example] Exemple : projet bras 3 axes
> Affectation des périphériques de l'ESP32 :
>
> | Sous-ensemble | Périphérique | Accès |
> |---|---|---|
> | 3 drivers (STEP) | sortie PWM | génération des pas |
> | 3 drivers (DIR) | sortie logique | sens de rotation |
> | 3 capteurs d'angle | convertisseur A/N | lecture périodique |
> | 6 fins de course | entrée logique | **interruption** (sécurité) |
>
> **Sortie** : une couche d'accès aux périphériques, distincte de la machine à états, avec les fins de course en interruption.

> [!livrable] Livrable 3/4 — Couche d'accès aux périphériques
> - La correspondance entre les entrées-sorties de l'algorithme et les périphériques de la carte, séparée de la logique

### 4. Documenter

Un firmware qui marche mais que personne ne comprend est un firmware à demi terminé. Documente l'essentiel : un **commentaire** sur chaque module et chaque choix non évident, un **tableau d'affectation des broches**, le **diagramme de la machine à états**, et la procédure pour **compiler et flasher** la carte. Vise le lecteur qui reprend le code sans contexte — un coéquipier, un correcteur, ou toi-même dans six mois. C'est la moitié « documentation » du livrable de cette étape.

> [!tip] Astuce
> **La documentation minimale tient en trois éléments : le mapping des broches, le schéma de la machine à états, et comment compiler et flasher.** Avec ces trois-là, n'importe qui reprend le firmware. Sans eux, même un code propre reste opaque.

> [!example] Exemple : projet bras 3 axes
> La documentation du firmware du bras : un tableau des broches (driver, capteur, fin de course → numéro de broche), le diagramme de la machine à états à 4 états, et un court mode d'emploi (environnement, commande de compilation, mise en flash de l'ESP32). Chaque module porte un commentaire d'en-tête décrivant son rôle.
>
> **Sortie** : une documentation autoportante, lisible sans le contexte du projet.

> [!livrable] Livrable 4/4 — Documentation du firmware
> - Mapping des broches, diagramme de l'algorithme, procédure de compilation et de mise en flash, commentaires de code

## Conclusion

Ton firmware est fonctionnel et documenté : l'algorithme est posé, le code structuré, les périphériques pilotés. La suite consiste à **fiabiliser** ce comportement à l'[[fiabiliser-et-deboguer|étape 6]] — temps réel, robustesse, débogage — et, si le projet l'exige, à organiser les **communications** à l'[[faire-communiquer|étape 5]]. L'algorithme et le code sont des livrables du [[dossier-technique|dossier technique]] du cycle en V.

---

## Pièges fréquents

**Coder avant de concevoir l'algorithme.** Sans plan, le comportement s'écrit au fil de l'eau et devient impossible à raisonner. La logique se pose d'abord sur le papier.

**Tout mettre dans la boucle principale.** Un firmware monolithique, où chaque fonction se mêle aux autres, ne se débogue ni ne s'étend. Sépare initialisation, boucle et modules dès le départ.

**Scruter un événement critique au lieu de l'interruption.** Tester une sécurité à chaque tour de boucle peut la manquer. Les événements critiques se câblent sur interruption.

**Bloquer la boucle avec des temporisations actives.** Une attente qui fige tout le programme empêche d'asservir, de lire les capteurs et de réagir aux fins de course. Les attentes se gèrent sans bloquer la boucle.

**Mélanger logique de commande et accès au matériel.** Sans couche d'accès séparée, changer un capteur oblige à toucher la logique. Garde l'algorithme indépendant des périphériques.

**Ne pas documenter.** Un code sans mapping de broches, sans schéma d'algorithme ni procédure de flash redevient opaque en quelques jours, même pour son auteur.

## Ce qui relève d'ailleurs

**Le pilotage, c'est le cycle en V.** L'algorithme et le code sont versés au [[dossier-technique|dossier technique]] — cette fiche produit l'artefact, le V l'inscrit dans le projet et le fait revoir.

*La robustesse temps réel* — interruptions fines, chien de garde, gestion de la mémoire, basse consommation — est traitée à l'[[fiabiliser-et-deboguer|étape 6]]. Ici, tu écris le firmware *fonctionnel* ; là, tu le *durcis*.

## Voir aussi

- [[fiches/eee/index|Réalisation du sous-système embarqué]]
- Étape précédente : [[concevoir-l-electronique|Concevoir l'électronique]]
- Étape suivante : [[faire-communiquer|Faire communiquer]]
- [[algorithme|Algorithme]] — [[logigramme|logigramme]], [[machine-a-etats|machine à états]], [[grafcet|GRAFCET]], [[chronogramme|chronogramme]]
- [[cpp|C++]] ou [[micropython-langage|MicroPython]]
- [[gpio|GPIO]], [[adc|convertisseur analogique-numérique]], [[pwm|sortie PWM]], [[manipulation-de-bits|manipulation de bits]]
- [[firmware|Firmware]]
- [[dossier-technique|Dossier technique]] *(pilotage, cycle en V)*
