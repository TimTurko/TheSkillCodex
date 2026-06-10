---
title: Matrice de risques
type: notion
phases:
  - specification
tags:
  - proj
  - notion
  - gestion-risques
prerequis: []
aa:
  - RA-PROJET-C07-1/PROJ/1
draft: false
---

La **matrice de risques** est l'outil d'anticipation des aléas du projet : on identifie les principaux risques, on les **cote selon leur probabilité et leur gravité**, et on définit pour chacun une parade (prévention, atténuation, plan B). En projet école, 5 à 10 risques majeurs suffisent ; ce qui compte n'est pas l'exhaustivité initiale mais **l'actualisation régulière** à chaque revue de phase.

![Matrice probabilité × gravité — grille 3 × 3 générique](/ressources/img/matrice-de-risques-generique.svg)

## À quoi ça sert ?

La matrice de risques sort les aléas du projet de l'implicite. Tout projet rencontre des imprévus — composant indisponible, panne d'imprimante 3D, équipier malade, brique technique qui s'avère plus dure que prévu. Sans matrice formelle, ces aléas surviennent par surprise et l'équipe les subit ; avec elle, on les a anticipés et on a déjà prévu une réponse.

Trois rôles :

- **Nommer ce qui pourrait mal se passer.** Ce qui est nommé peut être préparé ; ce qui est tu surprend. Le geste d'écrire un risque, même improbable, change la posture de l'équipe.
- **Prioriser l'effort de prévention.** Tous les risques ne se valent pas — un risque à la fois probable et grave mérite une action préventive, un risque peu probable et peu grave peut être ignoré. La cotation probabilité × gravité rend cette priorisation explicite.
- **Servir de boussole en revue de phase.** À chaque revue, on relit la matrice : quels risques se sont concrétisés (et qu'a-t-on appris), lesquels ne sont plus d'actualité (à retirer), lesquels apparaissent (à ajouter). C'est un outil vivant, pas une checklist d'ouverture.

## Comment la construire ?

Trois temps :

1. **Identifier les risques** par brainstorming d'équipe, en parcourant systématiquement les familles : techniques (brique non maîtrisée, dimensionnement limite), calendaires (dépendances externes, fenêtres fablab), humains (absences, départs en stage), logistiques (fournisseurs, livraisons), réglementaires. Cinq à dix risques majeurs suffisent en projet école — au-delà, la liste se dilue et perd son effet de priorisation.
2. **Coter chaque risque** par un couple **probabilité × gravité** sur une échelle simple (faible / moyenne / élevée pour chacun, ou cotation 1-3 sur chaque axe). Le but n'est pas la précision statistique mais le classement relatif des risques entre eux.
3. **Définir une parade** pour les risques en haut-droite de la matrice (probabilité × gravité élevées) : action préventive (qui annule le risque), atténuation (qui en réduit l'impact), ou plan B (qui prévoit une réponse si le risque se concrétise). Chaque parade nomme un porteur et une échéance.

*Illustration sur un cas concret : six risques majeurs positionnés sur un projet de station météo connectée, avec parades associées.*

![Six risques majeurs — projet station météo connectée](/ressources/img/matrice-de-risques-station-meteo.svg)

## Pièges

**Matrice produite une fois et oubliée.** Une matrice de risques figée au démarrage du projet vaut peu : les risques évoluent, certains se concrétisent ou disparaissent, de nouveaux apparaissent en cours de route. Sa valeur tient à l'actualisation régulière, à chaque revue de phase.

**Confondre risque et difficulté connue.** *« Nous n'avons jamais fait de PCB »* n'est pas un risque, c'est une lacune à combler par de la formation ou de l'aide. Un vrai risque est un **événement incertain** qui peut survenir ou non — la panne d'imprimante 3D, l'indisponibilité d'un composant, l'absence d'un équipier.

**Parade vague.** *« Faire attention »*, *« anticiper »*, *« être vigilant »* ne sont pas des parades — ce sont des intentions. Une parade nomme une **action concrète**, son **porteur** et son **déclencheur** (*« commander le composant critique en début de phase concept, porté par X, déclenché à validation du concept »*).

## Voir aussi

- [[specification-technique|Spécification technique]] — étape 5 où la matrice de risques initiale est construite
- [[gestion-de-projet|Gestion de projet]] — fil transverse qui maintient la matrice vivante au fil du projet
- [[ecoconception|Écoconception]] — risques environnementaux et réglementaires intégrés à la matrice
- [[securite-et-qualite|Sécurité et qualité]] — risques de sécurité et de conformité qui s'y croisent
- [[jalons|Jalons]] — rendez-vous d'actualisation de la matrice
