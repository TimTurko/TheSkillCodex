---
title: Algorithme
type: notion
tags:
  - eee
  - notion
prerequis: []
aa:
  - RA-EEE-C03-2/EEE/5
phases:
  - concept
  - preuve-de-concept
draft: false
---

Un **algorithme** est une suite finie d'opérations non ambiguës qui transforme des entrées en sorties pour résoudre un problème — ici, piloter le comportement d'un système embarqué. Avant de l'écrire en code, on le **représente** : un schéma rend la logique visible, partageable en équipe et critiquable avant qu'une seule ligne ne soit tapée. Cette fiche est le **hub d'entrée** vers les quatre représentations les plus courantes en projet — le [[logigramme]], la [[machine-a-etats|machine à états]], le [[grafcet]] et le [[chronogramme]] — et donne la méthode pour choisir la bonne selon ce qu'on cherche à décrire.

## À quoi ça sert ?

Coder directement un comportement un peu riche (un cycle, plusieurs modes, des conditions imbriquées) mène vite à un enchevêtrement de `if` que personne ne relit. Représenter l'algorithme avant de programmer sert à :

- **clarifier la logique** — poser les cas, les conditions et l'ordre des opérations à plat, hors du langage ;
- **communiquer** — un schéma se discute en revue d'équipe là où du code se subit ;
- **détecter les trous tôt** — un cas oublié (que se passe-t-il si le capteur ne répond pas ?) saute aux yeux sur un schéma, pas dans 200 lignes ;
- **préparer le code** — une bonne représentation se traduit presque mécaniquement en structure de programme.

Cette représentation se construit en phase de [[concept|concept]] (quand on définit le comportement attendu) et se vérifie en [[preuve-de-concept|preuve de concept]] (quand on l'implémente et qu'on la teste).

## Comment choisir une représentation ?

Les quatre représentations ne décrivent pas la même chose. Le choix dépend de la **nature du comportement** : enchaînement de décisions, succession d'états, étapes parallèles, ou relations de temps entre signaux.

| Représentation | Décrit bien | Forme | Quand l'utiliser |
| --- | --- | --- | --- |
| [[logigramme\|Logigramme]] | un enchaînement de décisions et d'actions | losanges (tests) et rectangles (actions) reliés par des flèches | un traitement linéaire avec des branchements (`si… alors… sinon`) |
| [[machine-a-etats\|Machine à états]] | un système qui reste dans un état jusqu'à un événement | états reliés par des transitions conditionnelles | un comportement **séquentiel à modes** (veille / marche / alarme, ouverture / fermeture…) |
| [[grafcet\|Grafcet]] | un procédé séquentiel, éventuellement avec étapes en parallèle | étapes et transitions normalisées (norme IEC 60848) | l'**automatisme industriel**, les séquences avec actions simultanées |
| [[chronogramme\|Chronogramme]] | l'évolution de plusieurs signaux **dans le temps** | courbes/niveaux logiques sur un axe temporel commun | vérifier des **relations temporelles** (qui change avant quoi, durées, fronts) |

Trois réflexes pour trancher. Si le comportement est une **cascade de décisions** ponctuelle, le logigramme suffit. Si le système **change de mode** et réagit différemment selon où il en est, c'est une machine à états — le cas le plus fréquent en projet mécatronique. Si plusieurs séquences avancent **en parallèle** (typique d'un automate), le grafcet est taillé pour ça. Et pour raisonner sur le **timing** (un signal doit-il monter avant l'autre, combien de temps dure une impulsion), aucun des trois ne remplace le chronogramme.

Ces représentations ne s'excluent pas : on décrit souvent l'architecture générale en machine à états, puis le détail d'un traitement par un logigramme, et on vérifie une contrainte de timing par un chronogramme.

## Voir aussi

- [[machine-a-etats|Machine à états]] — la représentation reine du comportement séquentiel à modes
- [[logigramme|Logigramme]] — l'enchaînement de décisions et d'actions
- [[grafcet|Grafcet]] — la séquence normalisée, avec parallélisme, de l'automatisme
- [[chronogramme|Chronogramme]] — les relations temporelles entre signaux
- [[microcontroleur|Microcontrôleur]] — la cible qui exécutera l'algorithme une fois codé
