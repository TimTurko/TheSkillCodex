---
title: Grafcet
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

Le **grafcet** (*GRAphe Fonctionnel de Commande Étapes-Transitions*) est un langage graphique **normalisé** (norme **IEC 60848**) qui décrit le comportement séquentiel d'un système automatisé. Il représente un [[algorithme]] de commande par des **étapes** — ce que le système fait — reliées par des **transitions** qui portent les conditions de passage, et excelle là où plusieurs séquences avancent **en parallèle** : c'est l'outil de l'automatisme.

![Symboles d'un grafcet : une étape initiale en double carré, des étapes carrées numérotées portant des actions à droite, des transitions en barres horizontales accompagnées de leurs réceptivités, et une liaison de retour fléchée.](/ressources/img/grafcet-generique.svg)

## À quoi ça sert ?

Pour un procédé qui enchaîne des phases (avancer, percer, reculer, éjecter), le grafcet décrit la séquence de façon **non ambiguë et partageable**. Ses atouts :

- il est **normalisé** (IEC 60848) — un grafcet se lit de la même façon par tout automaticien, c'est un langage commun ;
- il sépare proprement **ce que le système fait** (les actions des étapes) de **ce qui le fait avancer** (les réceptivités des transitions) ;
- il gère le **parallélisme** — plusieurs séquences simultanées — ce qu'un [[logigramme]] ou une [[machine-a-etats|machine à états]] simple peinent à exprimer ;
- il se traduit directement vers la programmation d'un **automate programmable** (le langage SFC en est très proche).

C'est la représentation à privilégier dès qu'on parle de **cycle de machine** ou d'**automatisme**. Pour un simple enchaînement de décisions sans parallélisme, un logigramme reste plus léger.

## Comment lire un grafcet ?

Le grafcet alterne strictement **étapes** et **transitions**, reliées par des **liaisons** lues de haut en bas.

- **Étape** (carré numéroté) — une situation du système. L'**étape initiale** (double carré) est active au démarrage. Une étape active porte un jeton ; les **actions** associées (rectangles à droite) sont exécutées **tant que l'étape est active**.
- **Transition** (barre horizontale) — sépare deux étapes et porte une **réceptivité** : la condition booléenne de franchissement (un capteur, un bouton, une combinaison logique notée avec `·` pour ET, `+` pour OU).
- **Règle de franchissement** : une transition est franchie quand **l'étape amont est active ET la réceptivité est vraie**. Au franchissement, l'étape amont se désactive et l'étape aval s'active — dans le même instant.

Une **liaison de retour** (fléchée quand elle remonte) reboucle le cycle. Sur une séquence simple, une seule étape est active à la fois ; le parallélisme, lui, passe par des divergences (voir *Cas particulier*).

## Exemple — Poste de perçage

Un poste qui perce une pièce puis l'éjecte, en cycle. Au repos (étape 0), rien ne bouge. Le grafcet enchaîne ensuite quatre situations.

![Grafcet cyclique du poste de perçage : étape initiale 0 au repos, franchie sur « départ et pièce présente » vers l'étape 1 Descendre broche, puis « broche en bas » vers l'étape 2 Remonter, « broche en haut » vers l'étape 3 Éjecter, et « pièce évacuée » rebouclant vers le repos.](/ressources/img/grafcet-percage.svg)

La réceptivité de la première transition, `départ · pièce présente`, est une **combinaison logique** : le cycle ne démarre que si l'opérateur appuie sur départ **et** qu'une pièce est en place. Chaque étape ne fait qu'une chose et ne cède la main que sur la condition explicite suivante — la séquence est lisible, et se transcrit telle quelle vers un automate. C'est cette clarté normalisée qui fait préférer le grafcet au logigramme pour un cycle de machine.

## Pièges

**Confondre étape et action.** L'étape est une *situation* (« en train de descendre ») ; l'action est *ce qu'on fait* pendant (« descendre la broche »). L'action vit dans une boîte à droite de l'étape, pas dans le carré.

**Réceptivité oubliée.** Une transition sans réceptivité est franchie immédiatement — le grafcet « tombe » d'une étape à l'autre sans rien attendre. Chaque transition porte une condition.

**Étape initiale manquante.** Sans double carré, le grafcet ne sait pas dans quelle situation démarrer. Une et une seule étape initiale par grafcet (sauf parallélisme).

**Plusieurs étapes actives par erreur.** Sur une séquence simple, une seule étape doit être active à la fois. Plusieurs jetons simultanés non voulus trahissent une divergence mal posée ou une boucle mal refermée.

**Confondre le grafcet et le code automate.** Le grafcet décrit le *cahier des charges* du comportement (IEC 60848) ; il est très proche du langage SFC d'un automate, mais reste une spécification, pas le programme lui-même.

**Divergence ET non refermée.** Ce qui s'ouvre en parallèle (divergence ET) doit se resynchroniser (convergence ET). Oublier la convergence laisse des branches qui ne se rejoignent jamais.

## Cas particulier — Divergences ET et OU

Deux structures distinguent le grafcet des représentations purement séquentielles. La **divergence en OU** (sélection de séquence) : plusieurs transitions partent d'une même étape, et selon les réceptivités **une seule** branche est empruntée — un choix exclusif. La **divergence en ET** (parallélisme) : une seule transition active **plusieurs étapes simultanément**, lançant des séquences en parallèle, qui devront être resynchronisées par une convergence en ET. C'est cette capacité au parallélisme qui fait la spécificité du grafcet ; un [[logigramme]] ou une [[machine-a-etats|machine à états]] simple ne l'expriment pas naturellement.

## Voir aussi

- [[algorithme|Algorithme]] — la fiche mère qui situe le grafcet parmi les représentations
- [[machine-a-etats|Machine à états]] — proche dans l'esprit, mais sans parallélisme normalisé ni cadre automate
- [[logigramme|Logigramme]] — plus léger pour un enchaînement de décisions sans cycle ni parallélisme
- [[chronogramme|Chronogramme]] — complémentaire, pour vérifier le timing des signaux d'un cycle
- [[preuve-de-concept|Preuve de concept]] — où la séquence est implémentée et testée
