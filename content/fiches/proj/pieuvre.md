---
title: Pieuvre
type: notion
phases:
  - specification
tags:
  - proj
  - notion
  - analyse-fonctionnelle
prerequis:
  - bete-a-cornes
  - fonction
aa:
  - RA-PROJET-C04-4/PROJ/1
  - RA-PROJET-C04-4/PROJ/6
draft: false
---

La **pieuvre** est l'outil graphique d'[[afnor-nfx50-151|analyse fonctionnelle]] qui formalise *ce que le système doit faire* en le reliant aux **milieux environnants** avec lesquels il interagit. Chaque lien tracé est une [[fonction|fonction]] ([[FP|principale]], [[FS|secondaire]] ou [[FC|contrainte]]) qui sera ensuite chiffrée dans le [[cahier-des-charges-fonctionnel|cahier des charges fonctionnel]].

![[pieuvre-generique.svg]]

## À quoi ça sert ?

La pieuvre formalise **l'interface du système avec son monde** avant tout choix de solution technique. Là où la [[bete-a-cornes|bête à cornes]] répond à *« pourquoi le système existe »*, la pieuvre répond à *« avec quoi le système interagit, et que doit-il faire vis-à-vis de chacun »*. C'est un changement de niveau d'analyse : on passe du besoin global à l'inventaire détaillé des services et contraintes.

Trois rôles articulés :

- **Recenser exhaustivement les milieux environnants** pour ne rater aucune contrainte d'interface. Un milieu oublié à ce stade ne se rattrape pas : il devient une exigence manquante du CdCF, qui se révélera tardivement en intégration ou en tests, quand le système ne tient plus dans son environnement réel.
- **Formaliser les fonctions sans dériver vers la solution.** En séparant explicitement ce que le système doit *faire* (FP, FS) de ce qu'il doit *subir ou respecter* (FC), la pieuvre force à raisonner en termes de service rendu, pas en termes de composant à choisir.
- **Servir de matériau direct à la caractérisation chiffrée** de l'étape suivante. Chaque fonction tracée sur la pieuvre devient une ligne du tableau d'exigences via le triplet [[caracteriser-une-exigence|critère / niveau / flexibilité]]. La pieuvre est donc le pont structurant entre l'analyse du besoin (bête à cornes) et le chiffrage des exigences.

## Comment la construire ?

Trois temps, dans l'ordre.

1. **Identifier les milieux environnants** par mind map autour du système. Placer le système au centre d'une feuille, et lister tout autour ce qui l'entoure : utilisateurs, matière d'œuvre, énergies, environnement physique, contraintes réglementaires. Pas de filtre à ce stade — un milieu oublié est une fonction qui n'apparaîtra pas dans le CdCF.
2. **Tracer les liens entre système et milieux**, et formuler chaque lien comme une [[fonction|fonction]] au format **verbe à l'infinitif + complément** (voir la fiche dédiée pour le détail du format d'énoncé et les pièges spécifiques à la formulation).
3. **Classer en [[FP]] / [[FS]] / [[FC]] et numéroter.** Un lien qui traverse le système entre deux milieux est une FP ou une FS ; un lien qui ne touche qu'un seul milieu est une FC. La numérotation (FP1, FP2…, FS1…, FC1…) sert de référence stable pour toute la suite du projet — du CdCF jusqu'à la grille d'évaluation finale.

### Familles de milieux à parcourir systématiquement

| Famille | Exemples typiques |
|---|---|
| **Utilisateurs** | opérateur principal, mainteneur, personne tierce exposée |
| **Matière d'œuvre** | l'objet, l'information, le milieu sur lequel le système agit |
| **Énergies** | alimentation électrique, fluide, ressource consommable |
| **Environnement physique** | température, humidité, vibrations, supports, encombrement disponible |
| **Réglementaire** | normes applicables, contraintes de sécurité, d'[[ecoconception|écoconception]], de conformité CE |

Le parcours systématique de ces cinq familles est ce qui rend la pieuvre **robuste** : c'est en se forçant à passer chaque famille en revue, même celle qui paraît évidemment vide, qu'on découvre les milieux discrets qui auraient été oubliés en remplissage spontané.

### Topologie du diagramme

La forme classique (convention AFNOR / NF X50-151) est **rayonnante** : système au centre, milieux disposés autour, liens tracés en rayons. Tous les liens sont du même style — la distinction FP / FS / FC se lit dans la **topologie** (FP/FS traversent le système entre deux milieux, FC ne touche qu'un seul milieu) et dans la **numérotation**, jamais dans le style de trait. Cette uniformité visuelle est ce qui rend le diagramme lisible : un lecteur extérieur identifie immédiatement la catégorie d'une fonction par sa géométrie, sans avoir à se référer à une légende.

## Exemple — projet bras 3 axes

![[pieuvre-bras-3-axes.svg]]

Cette pieuvre porte sur le **système physique** : le bras robotique et ses interactions directes avec son monde. Elle se distingue de la [[bete-a-cornes|bête à cornes]] de l'étape précédente, qui portait sur la commande pédagogique au-dessus du projet (l'enseignant comme commanditaire, le service rendu étant l'illustration d'une démarche projet). Les deux niveaux coexistent dans la posture étudiant-client-de-lui-même et ne se contredisent pas — ils décrivent simplement deux systèmes emboîtés.

**Cinq milieux identifiés** : opérateur, objet à déplacer, poste informatique, alimentation électrique, environnement pédagogique (fablab et moyens de fabrication accessibles).

**Quatre fonctions énoncées** :

- **[[FP]]1** — *Permettre à l'opérateur de manipuler le robot pour positionner un objet léger en un point du volume de travail.* Fonction principale qui relie deux milieux (opérateur et objet à déplacer) à travers le système : elle justifie l'existence du bras.
- **[[FS]]1** — *Permettre à l'opérateur de programmer une séquence de mouvements depuis un poste informatique.* Fonction secondaire qui ajoute un service utile (programmation différée), mais sans laquelle le bras remplit déjà sa mission principale.
- **[[FC]]1** — *S'adapter à l'alimentation électrique disponible (secteur 230 V via adaptateur).* Contrainte d'adaptation qui ne relie le système qu'à un seul milieu : la prise secteur du bâtiment.
- **FC2** — *Être démontable et reproductible avec les moyens d'un fablab école (imprimante 3D, perceuse, tournevis).* Contrainte d'adaptation à un seul milieu : l'environnement pédagogique du projet.

À ce stade, l'énoncé des fonctions ne dit rien des **niveaux attendus** ni des **flexibilités**. La pieuvre dit qu'il faut « positionner un objet léger », pas combien il pèse ni à quelle précision. C'est précisément le rôle de l'étape suivante — caractériser chaque fonction par un triplet [[caracteriser-une-exigence|critère / niveau / flexibilité]].

## Pièges

**Oublier des milieux.** Les trois familles le plus souvent zappées : la **réglementation** (normes applicables, conformité CE, contraintes [[ecoconception|écoconception]]), l'**environnement physique** (température, humidité, vibrations, supports), et les **énergies** (alimentation, fluides). Le geste utile : parcourir explicitement les cinq familles, même si certaines paraissent vides — c'est en les passant en revue qu'on découvre les milieux discrets.

**Énoncer une solution au lieu d'un besoin.** Le piège générique sur la formulation des fonctions est détaillé dans [[fonction|fonction]] : un énoncé qui cite une marque, un composant ou une technologie est mal formulé. Test simple — *« puis-je remplacer cet énoncé par un autre composant sans changer le sens ? »* Si oui, c'est un besoin. Si la phrase devient incohérente, c'est une solution déguisée.

**Mal classer FP / FS / FC.** La topologie du diagramme doit refléter la sémantique. Une fonction qui ne touche qu'un seul milieu mais classée FP/FS est mal classée — ou bien il manque le second milieu sur le diagramme. Inversement, une fonction tracée entre deux milieux mais classée FC est incohérente : si elle relie deux milieux, c'est qu'elle rend un service à travers le système, donc FP ou FS.

**Confondre FP et FS.** La FP justifie l'existence du système ; sans elle, le projet n'a plus lieu d'être. Test : *« si je retire cette fonction, le projet reste-t-il défendable comme projet ? »* Si oui, c'est une FS, pas une FP. Beaucoup de projets école n'ont **qu'une seule FP** — c'est normal et plutôt sain : multiplier les FP révèle souvent un projet mal cadré qui mélange plusieurs objectifs distincts.

**Diagramme rayonnant peu lisible.** Au-delà de 7 ou 8 milieux, la forme rayonnante devient illisible et les liens se croisent. Deux pistes pour respirer : (1) regrouper certains milieux en familles (les trois normes RoHS / REACH / DEEE peuvent former un seul « milieu réglementaire » au lieu de trois), (2) faire deux pieuvres complémentaires sur deux niveaux du système (pieuvre du système global en spécification, pieuvres locales par sous-système à introduire en [[concept|concept]]).

## Voir aussi

- [[specification-technique|Spécification technique]] — phase où s'insère la pieuvre (étape 3)
- [[fonction|Fonction]] — typologie FP/FS/FC et format d'énoncé
- [[bete-a-cornes|Bête à cornes]] — outil amont qui formule le besoin
- [[caracteriser-une-exigence|Caractériser une exigence]] — étape aval qui chiffre chaque fonction
- [[cahier-des-charges-fonctionnel|Cahier des charges fonctionnel]] — document final qui agrège la pieuvre et les fonctions caractérisées
- [[afnor-nfx50-151|Norme NF X50-151]] — cadre méthodologique
