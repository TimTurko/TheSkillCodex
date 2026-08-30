---
title: KiCad
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - pcb
aa: []
phases:
  - preuve-de-concept
  - dossier-technique
draft: false
---

**KiCad** est la suite **libre et gratuite** de conception de circuits imprimés (EDA) la plus répandue : éditeur de schéma, éditeur de circuit imprimé, bibliothèques de composants et d'empreintes, export des fichiers de fabrication. Multiplateforme, sans limite de taille, **hébergée par la Linux Foundation** depuis 2019 et développée avec le soutien historique du **CERN**, c'est l'outil de référence pour mener un projet **du schéma à une carte fabricable**. Cette fiche est un tuto-outil du hub [[pcb|circuit imprimé]].

Prendre capture d'écran de *la fenêtre de démarrage de KiCad et de ses deux éditeurs principaux côte à côte : l'éditeur de schéma (Eeschema) à gauche, l'éditeur de circuit imprimé (Pcbnew) à droite*.

## À quoi ça sert ?

KiCad couvre tout le [[pcb|flux de conception de carte]] dans un seul outil :

- **saisir un schéma** électronique propre et vérifié (Eeschema) ;
- **associer une empreinte** à chaque composant (l'objet physique correspondant) ;
- **router** la carte — placer les composants et tracer les pistes de cuivre (Pcbnew) ;
- **vérifier** automatiquement le schéma (ERC) et le routage (DRC) ;
- **exporter** les fichiers Gerber et de perçage pour la fabrication. KiCad sait aussi produire le format **IPC-2581**, qui rassemble tout le dossier de fabrication en un seul fichier, encore peu demandé par les fabricants.

C'est un logiciel **installé en local** (Windows, macOS, Linux), gratuit et sans bridage. C'est le standard libre pour qui veut concevoir des cartes sans dépendre d'un service en ligne.

## Prendre en main

1. **Créer un projet** KiCad — il regroupe le schéma, le circuit imprimé et les fichiers associés sous un même nom.
2. **Saisir le schéma dans Eeschema** — placer les composants depuis les bibliothèques, les relier par des fils, **annoter** (numéroter les composants), puis lancer l'**ERC** (*Electrical Rules Check*) qui repère les broches non connectées et les incohérences.
3. **Associer les empreintes** — à chaque composant du schéma, attribuer l'**empreinte** physique correspondant à son boîtier réel (vérifiée contre la [[lire-une-datasheet|datasheet]]).
4. **Basculer dans Pcbnew** — importer la *netlist* du schéma, **placer** les composants sur la carte, définir le contour, puis **router** les pistes (manuellement ou avec l'aide du routeur).
5. **Vérifier (DRC)** — le *Design Rules Check* contrôle largeurs de pistes, isolations et courts-circuits avant toute fabrication.
6. **Exporter les Gerber** et le fichier de perçage — le livrable transmis au fabricant ou à l'atelier.

Prendre capture d'écran de *Pcbnew montrant une carte 2 couches en cours de routage : composants placés, pistes tracées en rouge (dessus) et vert (dessous), contour de carte visible*.

> [!note]
> **ERC et DRC : deux garde-fous à lancer systématiquement.** L'**ERC** vérifie le *schéma* (broches oubliées, conflits), le **DRC** vérifie le *routage* (pistes trop fines, isolation insuffisante, courts-circuits). Les exécuter avant de commander attrape la majorité des erreurs coûteuses. Une carte fausse commandée est une série perdue.

## Exemple — Une petite carte capteur

On conçoit une carte autonome simple : un microcontrôleur, un capteur de température en [[bus-de-communication|I²C]], un régulateur 3,3 V et un connecteur.

Prendre capture d'écran du *schéma KiCad de la carte : le microcontrôleur au centre, le capteur relié en I²C (deux lignes SDA/SCL), le régulateur d'alimentation, et le connecteur, avec les valeurs annotées*.

1. **Schéma** — placer le microcontrôleur, le capteur, le régulateur et le connecteur ; relier l'alimentation, la masse et les deux lignes du bus ; annoter et passer l'ERC.
2. **Empreintes** — attribuer à chacun son boîtier réel (le bon pas pour le connecteur, le bon format pour le régulateur).
3. **Routage 2 couches** — placer les composants, ajouter un **plan de masse** sur la couche inférieure, router les pistes de signal au-dessus, élargir les pistes d'alimentation.
4. **DRC**, puis **export Gerber** — relire le rendu dans le visualiseur avant de transmettre.

En une carte volontairement minimale, on a parcouru tout le flux : schéma vérifié, empreintes correctes, routage propre, fichiers de fabrication prêts.

## Pièges

**Router avant l'ERC.** Tracer des pistes sur un schéma non vérifié, c'est router des erreurs. On lance l'ERC et on fige le schéma *avant* Pcbnew.

**Mauvaise empreinte.** L'erreur la plus coûteuse : une empreinte au mauvais pas ou au mauvais boîtier donne une carte où le composant ne se soude pas. Vérifier chaque empreinte contre la [[lire-une-datasheet|datasheet]].

**Bibliothèque d'empreintes manquante.** Un composant exotique peut n'avoir aucune empreinte toute prête. Il faut alors la créer ou l'importer, sans quoi le routage est bloqué. Avant de la dessiner soi-même, on regarde du côté des bibliothèques ouvertes : le **CERN** a publié la sienne en mai 2026 — plus de 17 000 composants, symboles et empreintes, sous licence CERN-OHL-P.

**Oublier le plan de masse.** Router toutes les masses en pistes fines au lieu d'un plan dédié dégrade les signaux. Ajouter une zone de cuivre de masse.

**Ne pas relire le Gerber.** Exporter et commander sans ouvrir le visualiseur de Gerber laisse passer des fautes invisibles dans l'éditeur. Une dernière relecture du rendu réel s'impose.

## Voir aussi

- [[pcb|Circuit imprimé]] — le hub : flux de conception, couches, frontière fabrication
- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — savoir lire le schéma qu'on saisit
- [[simulation-electronique|Simulation électronique]] — valider le montage avant de le router
- [[lire-une-datasheet|Lire une datasheet]] — empreintes, brochages et contraintes des composants
- [[dossier-technique|Dossier technique]] — où la carte conçue est documentée
