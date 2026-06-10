---
title: Falstad
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - simulation-electronique
aa: []
phases:
  - concept
  - preuve-de-concept
draft: false
---

**Falstad** (du nom de son auteur, Paul Falstad — *Circuit Simulator*, sur `falstad.com/circuit`) est un simulateur de circuits **analogiques** qui tourne directement dans le navigateur, gratuitement et **sans compte**. Sa signature : il **montre le courant circuler** sous forme de points animés et la tension par un code couleur. C'est l'outil pour *comprendre* un montage et l'explorer vite — moins pour le dimensionner finement (voir [[ltspice|LTspice]]). Cette fiche est un tuto-outil du hub [[simulation-electronique|simulation électronique]] : la méthode et la lecture des résultats y sont posées une fois pour toutes, on les applique ici.

*Prendre capture d'écran de l'interface de Falstad : la zone de dessin avec un circuit simple (source, résistance, condensateur), les points animés figurant le courant le long des fils, l'affichage tension/courant au survol d'un composant, et l'oscilloscope intégré en bas.*

## À quoi ça sert ?

Falstad occupe une niche de **clarté pédagogique** plutôt que de précision. On l'ouvre quand on veut :

- **voir** ce qu'un schéma fait — le courant qui ralentit quand un condensateur se charge, une tension qui s'effondre sous une charge trop lourde ;
- **explorer en temps réel** — modifier une valeur et observer l'effet immédiatement, sans relancer ;
- **démarrer sans rien installer** — pas de logiciel, pas de compte, une URL suffit, ce qui le rend idéal en cours ou pour un premier essai.

Sa contrepartie : les composants sont **génériques et idéaux** (pas de modèle fabricant précis). Pour confirmer un dimensionnement avant de commander, on passe à [[ltspice|LTspice]].

## Prendre en main

1. **Ouvrir** `falstad.com/circuit` — la simulation démarre seule sur un circuit d'exemple.
2. **Repartir de zéro** ou charger un exemple depuis le menu des circuits (la bibliothèque intégrée couvre la plupart des montages classiques).
3. **Placer un composant** : choisir son type dans le menu de dessin, puis le tracer sur la zone par un glissé. Relier les bornes par des fils.
4. **Régler une valeur** : double-cliquer un composant ouvre ses paramètres (résistance, capacité, tension de source…).
5. **Observer** : la simulation tourne en continu. Survoler un composant affiche sa tension et son courant ; ajouter un **oscilloscope** sur un nœud trace l'évolution dans le temps.
6. **Régler le temps** : la vitesse de simulation et l'échelle de temps se règlent à part — un réflexe à prendre pour lire correctement un transitoire rapide.

> [!tip]
> **Le partage se fait par texte ou par lien.** Faute de compte, Falstad exporte le circuit sous forme de texte (ou d'URL) à conserver soi-même. À copier dans le dossier projet pour retrouver un montage.

## Exemple — La charge d'un condensateur

Montons le cas d'école du régime **transitoire** : un condensateur qui se charge à travers une résistance.

*Prendre capture d'écran du circuit RC sur Falstad : source continue, résistance en série, condensateur vers la masse, avec l'oscilloscope intégré montrant la tension du condensateur qui monte en exponentielle et le courant qui décroît.*

1. **Saisir** : une source continue (5 V), une résistance (10 kΩ) en série, un condensateur (10 µF) vers la masse.
2. **Choisir l'observation** : poser un oscilloscope sur la tension du condensateur.
3. **Lancer** : les points de courant filent vite au départ, puis **ralentissent** à mesure que le condensateur se charge — la visualisation rend l'exponentielle tangible.
4. **Lire** : la courbe monte de 0 vers 5 V en s'aplatissant. On repère la **constante de temps** τ, durée au bout de laquelle la tension atteint ~63 % de sa valeur finale.
5. **Confronter** : la théorie prédit τ = R × C = 10 kΩ × 10 µF = 0,1 s. Si la courbe atteint ~3,15 V vers 0,1 s, la simulation confirme la saisie. Un écart franc trahirait une valeur mal réglée.

C'est tout l'intérêt de Falstad pour ce cas : on ne calcule pas seulement τ, on **voit** le courant mourir à mesure que le condensateur se remplit.

## Pièges

**Confondre clarté et précision.** Falstad donne le bon *comportement*, pas la valeur garantie d'un composant réel. Pour décider d'une valeur de résistance de puissance ou vérifier une marge, c'est [[ltspice|LTspice]] et ses modèles fabricants.

**Mal lire l'échelle de temps.** La simulation tourne en continu à une vitesse réglable : un transitoire de quelques millisecondes peut défiler trop vite ou trop lentement. Ajuster la vitesse et l'échelle avant de conclure sur une durée.

**Oublier de sauvegarder.** Sans compte, fermer l'onglet perd le travail. Exporter le circuit (texte ou lien) dès qu'il vaut la peine d'être gardé.

**Prendre un modèle idéal pour la réalité.** Pas de résistance parasite, pas d'échauffement, pas de tolérance — les pièges généraux de la [[simulation-electronique#Pièges|simulation]] s'appliquent ici aussi.

## Voir aussi

- [[simulation-electronique|Simulation électronique]] — le hub : méthode, types d'analyse et lecture des résultats
- [[ltspice|LTspice]] — l'outil du dimensionnement précis, quand les valeurs comptent
- [[chronogramme|Chronogramme]] — lire une forme d'onde, idéale comme réelle
- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — le schéma que Falstad fait vivre
