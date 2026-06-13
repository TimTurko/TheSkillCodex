---
title: Précision, justesse, fidélité
type: notion
tags:
  - eee
  - notion
aliases:
  - justesse
  - fidélité
  - exactitude
  - précision de mesure
prerequis:
  - instruments-de-mesure
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
---

**La « précision » du langage courant** recouvre en réalité **deux qualités indépendantes** d'une mesure : la **justesse** — la moyenne des mesures tombe-t-elle sur la valeur vraie ? — et la **fidélité** — des mesures répétées donnent-elles le même résultat ? Une mesure peut être fidèle sans être juste (toujours le même chiffre… toujours faux) et juste sans être fidèle (la bonne valeur, mais en moyenne seulement). La métrologie réserve le mot **exactitude** à la combinaison des deux.

![Quatre cibles : mesures groupées au centre (juste et fidèle), groupées mais décalées (fidèle mais pas juste, erreur systématique), dispersées autour du centre (juste mais pas fidèle, erreur aléatoire), dispersées et décalées (ni juste ni fidèle).](/ressources/img/precision-de-mesure-cibles.svg)

## Deux défauts, deux remèdes

Les deux défauts ne se corrigent pas de la même façon :

- un défaut de **justesse** est une **erreur systématique** — un biais constant : instrument décalé, sonde ×10 oubliée, résistance des fils de mesure. Répéter la mesure n'y change rien ; le remède est de **vérifier l'instrument sur un point connu** (la tension d'une pile neuve, une résistance marquée) et de corriger le biais ;
- un défaut de **fidélité** est une **erreur aléatoire** — une dispersion : bruit, contacts incertains, grandeur qui fluctue réellement. Le remède est de **répéter la mesure** et de raisonner sur la moyenne, après avoir soigné les contacts.

Le réflexe pratique : **mesurer plusieurs fois**. Si les valeurs se dispersent, le problème est de fidélité ; si elles sont stables mais loin de l'attendu, le problème est de justesse — ou le montage a réellement ce défaut, et c'est précisément ce que la mesure devait révéler.

## Résolution n'est pas précision

Un multimètre qui affiche **4,983 V** n'est pas précis au millivolt : la **résolution** — le plus petit chiffre affiché — ne dit rien de la précision réelle. Celle-ci se lit dans la documentation de l'instrument, sous une forme du type « ±0,5 % ± 2 digits » : un instrument de mesure **a lui aussi sa datasheet** → [[lire-une-datasheet|lire une datasheet]]. Le dernier chiffre qui « danse » à l'affichage est en dessous de ce que l'instrument garantit — il ne se commente pas dans un rapport.

## Dans le projet

Conséquence directe pour les relevés : une mesure se rapporte toujours à un **attendu avec sa tolérance** (« 5 V ± 5 % »), jamais à un chiffre exact — c'est le geste *confronter à l'attendu* du hub [[instruments-de-mesure|instruments de mesure]]. Et un rapport de test mentionne **l'instrument utilisé** : la valeur n'engage que ce que l'instrument sait garantir.

## Voir aussi

- [[instruments-de-mesure|Instruments de mesure]] — le hub : méthode de mesure et interprétation
- [[multimetre|Multimètre]] — là où la confusion résolution / précision se rencontre le plus
- [[lire-une-datasheet|Lire une datasheet]] — les instruments aussi ont la leur
- [[pied-a-coulisse|Pied à coulisse]] et [[comparateur|Comparateur]] — les mêmes notions, côté métrologie dimensionnelle
