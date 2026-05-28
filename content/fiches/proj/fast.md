---
title: FAST
type: tuto
phases:
  - concept
tags:
  - proj
  - tuto
  - analyse-fonctionnelle
prerequis:
  - fonction
  - decomposition-fonctionnelle
aa:
  - RA-PROJET-C04-4/PROJ/1
  - RA-PROJET-C04-4/PROJ/6
draft: false
---

Le **FAST** (*Function Analysis System Technique*) est un diagramme d'analyse fonctionnelle qui enchaîne une fonction et les **fonctions techniques** qui la réalisent, selon une chaîne logique lue dans deux sens : **POURQUOI** de droite à gauche, **COMMENT** de gauche à droite, l'axe vertical portant le **QUAND** (fonctions assurées simultanément). Mobilisé à l'étape 1 de la [[concept|phase de concept]], il formalise une branche de la [[decomposition-fonctionnelle|décomposition fonctionnelle]] jusqu'au grain où chaque fonction technique appelle des solutions candidates.

![FAST — schéma générique](/ressources/img/fast-generique.svg)

## À quoi ça sert ?

La [[decomposition-fonctionnelle|décomposition fonctionnelle]] découpe le système en sous-systèmes et fonctions techniques, mais elle ne dit pas si la chaîne de réalisation **tient logiquement**. C'est le rôle du FAST : il prend une fonction et déroule, vers la droite, le « comment la réalise-t-on ? », chaque réponse devenant une fonction technique fille, jusqu'à atteindre des fonctions directement adressables par une solution concrète. Sa force tient dans une **discipline de lecture bidirectionnelle** qui valide la logique.

L'outil joue trois rôles :

- **Valider la chaîne causale** — toute chaîne FAST doit se lire juste dans les deux sens. De gauche à droite, chaque maillon répond au « comment » du précédent ; de droite à gauche, chaque maillon répond au « pourquoi » du suivant. Si la lecture inverse ne retombe pas sur la fonction mère, la chaîne est fausse — un maillon manque ou un niveau a été sauté.
- **Préparer le choix de solutions** — chaque fonction technique terminale (la feuille de la chaîne) appelle 2 à 5 solutions candidates, confrontables en [[matrice-de-decision|matrice de décision]] à l'étape suivante. Le FAST est ce qui transforme une fonction de service abstraite en un jeu de décisions techniques traçables.
- **Rendre visible la simultanéité** — l'axe vertical (QUAND) regroupe les fonctions techniques qui doivent être assurées **en même temps** pour qu'une fonction mère soit réalisée. Cette lecture évite de traiter en série des fonctions qui sont en réalité concomitantes.

> [!warning] Attention
> **FAST ≠ [[decomposition-fonctionnelle|décomposition fonctionnelle]].** La décomposition est l'exercice large : découper le système en sous-systèmes aux interfaces nettes et de taille comparable. Le FAST est le **formalisme** qui développe **une** branche de ce découpage en chaîne logique POURQUOI / COMMENT / QUAND, et la valide par lecture bidirectionnelle. On décompose d'abord pour structurer ; on déroule ensuite un FAST par sous-système (ou par fonction critique) pour descendre proprement jusqu'aux solutions. Les deux ne s'opposent pas — le FAST est l'outil de précision au sein de la décomposition.

## Procédure pas à pas

Un FAST se construit en quatre temps : poser la fonction racine, dérouler le COMMENT vers la droite, valider en remontant le POURQUOI (et placer les fonctions simultanées sur l'axe QUAND), puis raccorder les feuilles aux solutions candidates.

### 1. Poser la fonction racine

À gauche du diagramme, la fonction de départ — souvent une fonction technique de premier niveau issue de la [[decomposition-fonctionnelle|décomposition]], parfois directement une fonction de service de la [[pieuvre|pieuvre]]. Elle se formule comme toute [[fonction|fonction]] : **verbe d'action à l'infinitif + complément** (*« mettre en mouvement les segments »*, *« réguler la température »*). Une racine mal formulée — un nom au lieu d'un verbe, un composant au lieu d'une fonction — fausse toute la chaîne qui en découle.

### 2. Dérouler le COMMENT vers la droite

Pour la fonction racine, poser la question **« comment la réalise-t-on ? »**. Chaque réponse est une fonction technique fille, placée à droite de sa mère. Répéter le « comment » sur chaque fille, niveau par niveau, en suivant la **règle d'arrêt** héritée de la décomposition : on descend tant que la fonction n'est pas directement adressable par une solution candidate, on s'arrête dès qu'elle l'est.

*« Mesurer la position angulaire »* est adressable (encodeur, potentiomètre…) → on s'arrête. *« Gérer le mouvement »* ne l'est pas (trop vague pour lister 2 à 5 solutions) → on raffine d'un cran vers la droite.

### 3. Valider par le POURQUOI et placer le QUAND

Le FAST n'est correct que s'il se **lit aussi à l'envers**. Remonter la chaîne de droite à gauche en posant à chaque maillon **« pourquoi cette fonction ? »** : la réponse doit être exactement la fonction mère. Si la lecture inverse produit une réponse différente, ou ne retombe sur rien, la chaîne est cassée — un niveau a été sauté ou une fonction est mal rattachée.

Pendant cette passe, repérer les fonctions qui doivent être assurées **en même temps** pour réaliser leur mère : on les empile verticalement sur l'**axe QUAND**. Trois fonctions techniques simultanées (générer un couple, mesurer la position, asservir) se lisent alors comme un groupe concomitant, pas comme une séquence.

> [!tip] Astuce
> **Le FAST se raffine en plusieurs passes, pas en un jet.** Un premier déroulé à haut niveau cale la structure ; les passes suivantes ajoutent les fonctions oubliées que l'exploration des solutions fait apparaître. Viser l'exhaustivité au premier coup fait perdre du temps et fige un découpage qui va de toute façon évoluer à l'étape 2 du concept.

### 4. Raccorder les feuilles aux solutions candidates

Chaque fonction technique terminale — la feuille la plus à droite de chaque chaîne — devient le point d'entrée d'un choix technique. Lister pour chacune **2 à 5 solutions candidates** : ce sont elles qui peupleront les lignes de la [[matrice-de-decision|matrice de décision]] de l'étape 2. À ce stade, on **n'arbitre pas** encore — on identifie le champ des possibles. Choisir une solution dès le FAST revient à décider sans comparer, ce qui vide la matrice de décision de son sens.

## Exemple — Bras 3 axes pédagogique

Reprenons le sous-système **mobilité articulaire** du bras 3 axes, déjà isolé par la [[decomposition-fonctionnelle|décomposition fonctionnelle]]. On en déroule le FAST à partir de la fonction racine *« mettre en mouvement les segments du bras »*.

![FAST du sous-système mobilité articulaire — bras 3 axes](/ressources/img/fast-bras-3-axes.svg)

**Lecture COMMENT (vers la droite).** *Comment* mettre en mouvement les segments ? En assurant trois fonctions techniques simultanées : générer un couple sur chaque axe, mesurer la position angulaire, asservir le mouvement. *Comment* générer un couple ? Par un stepper + driver, un moteur CC + réducteur, ou un servomoteur intégré.

**Lecture POURQUOI (vers la gauche).** *Pourquoi* un stepper + driver ? Pour générer un couple sur chaque axe. *Pourquoi* générer un couple ? Pour mettre en mouvement les segments. La chaîne se lit juste dans les deux sens — elle est valide.

**Axe QUAND.** Les trois fonctions techniques sont empilées verticalement : il ne s'agit pas de les enchaîner dans le temps, mais de les assurer **ensemble**. Sans génération de couple *et* mesure *et* asservissement simultanés, l'articulation ne se positionne pas.

**Ce que le FAST prépare.** Chaque feuille devient une ligne de [[matrice-de-decision|matrice de décision]] : *générer un couple* confronte stepper / moteur CC / servomoteur, *mesurer la position* confronte encodeur / potentiomètre, *asservir* confronte boucle PID / commande pas-à-pas. Le FAST a transformé une fonction abstraite en sept décisions techniques traçables — sans en trancher aucune.

## Pièges

**Confondre FAST et organigramme d'équipe.** Dérouler des branches « Élec / Méca / Info » n'est pas un FAST : c'est une répartition de compétences. Le FAST chaîne des **fonctions** du système, dont chacune mobilise plusieurs disciplines. Si une branche porte un nom de métier, on a dérapé.

**Chaîne qui ne se lit pas dans les deux sens.** C'est le défaut propre au FAST : une chaîne où le « pourquoi » remonté ne retombe pas sur la fonction mère. Elle révèle un niveau sauté ou un maillon mal rattaché. La validation bidirectionnelle n'est pas une formalité — c'est le contrôle qualité du diagramme.

**Descendre jusqu'au composant.** Écrire *« moteur NEMA 17 »* comme feuille du FAST est une erreur de niveau : le composant est un choix qui se fait en [[matrice-de-decision|matrice de décision]] puis se fige en [[dossier-technique|dossier technique]], pas dans le FAST. La feuille reste une fonction technique adressable (*« générer un couple »*), pas une référence.

**Confondre fonction de service et fonction technique.** Recopier dans le FAST les [[fonction|FP/FS/FC]] de la [[pieuvre|pieuvre]] revient à n'avoir rien déroulé. Une fonction de service dit ce que le système rend à l'extérieur ; une fonction technique dit comment il s'y prend en interne. Le FAST produit la seconde à partir de la première.

**Oublier l'axe QUAND.** Empiler en série (de gauche à droite) des fonctions qui sont en réalité simultanées casse la sémantique du FAST. Les fonctions concomitantes se placent verticalement, pas en enchaînement.

**Vouloir un FAST exhaustif du premier coup.** Le diagramme se construit en plusieurs passes : structure générale d'abord, raffinement ensuite au fil de l'exploration des solutions. Un FAST figé trop tôt freine plus qu'il n'aide.

## Cas particulier — FAST partiel sur les fonctions critiques

En projet école, dérouler un FAST complet de tout le système est rarement utile : la plupart des fonctions sont triviales (*« fournir l'énergie »* → alimentation) et n'ouvrent aucun vrai champ de solutions. Le FAST prend sa valeur sur les **fonctions critiques ou incertaines** — celles dont la réalisation conditionne une exigence en flexibilité F0 ou F1 du [[cahier-des-charges-fonctionnel|CdCF]], ou dont les solutions candidates sont nombreuses et non évidentes.

La pratique efficace est donc un FAST **partiel** : on déroule en détail le ou les sous-systèmes qui portent le risque technique (sur le bras 3 axes, *mobilité articulaire*), et on traite les autres en une ligne. Concentrer l'effort là où il y a un arbitrage à préparer, pas là où la solution est évidente.

## Raccrochage projet

- **Étape 1 de la [[concept|phase de concept]]** — phase principale où le FAST est déroulé, en aval immédiat de la [[decomposition-fonctionnelle|décomposition fonctionnelle]] : un FAST par sous-système (ou par fonction critique).
- **Sortie de la [[specification-technique|spécification technique]]** — les fonctions de service issues de la [[pieuvre|pieuvre]] alimentent les racines des FAST : le FAST est la passerelle entre fonction de service (le *quoi*) et fonctions techniques (le *comment*).
- **Étape 2 de la [[concept|phase de concept]]** — chaque feuille du FAST devient une ligne de [[matrice-de-decision|matrice de décision]] confrontant 2 à 5 solutions candidates.

Un FAST validé dans les deux sens à l'étape 1 garantit que l'espace de solutions exploré à l'étape 2 est complet et bien rattaché au besoin — aucune fonction technique orpheline, aucune solution sans fonction d'origine.

## Aller plus loin

- Le FAST est issu de l'**analyse de la valeur** (*value engineering*), où il sert à relier les fonctions d'un produit à leur coût pour identifier les pistes d'optimisation. En projet mécatronique école, on en retient surtout l'usage d'analyse fonctionnelle technique, mais la logique de chaînage reste la même.
- Variante répandue : le **FAST technique** (orienté solutions) place directement les composants en bout de chaîne. À réserver à une phase aval (dossier technique), une fois les solutions arbitrées — pas en concept, où l'on veut justement garder l'espace de solutions ouvert.

## Voir aussi

- [[decomposition-fonctionnelle|Décomposition fonctionnelle]] — exercice amont de découpage dont le FAST formalise une branche
- [[fonction|Fonction]] — typologie FP/FS/FC et format d'énoncé verbe + complément réutilisé par le FAST
- [[pieuvre|Pieuvre]] — source des fonctions de service qui alimentent les racines du FAST
- [[matrice-de-decision|Matrice de décision]] — outil aval qui arbitre les solutions candidates de chaque feuille
- [[concept|Concept]] — phase où le FAST est mobilisé (étape 1)
