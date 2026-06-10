---
title: Logigramme
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

Un **logigramme** (aussi appelé *organigramme* ou *ordinogramme*) est une représentation graphique d'un [[algorithme]] sous forme d'un enchaînement de **symboles normalisés** — début/fin, traitements, décisions — reliés par des flèches qui suivent le fil d'exécution. Il décrit bien un **traitement à branchements** (`si… alors… sinon`, boucles), là où la [[machine-a-etats|machine à états]] décrit plutôt un système à modes.

![Symboles d'un logigramme : un terminal en forme de stade (début/fin), un parallélogramme (entrée/sortie), un losange de décision à deux sorties oui/non, et un rectangle de traitement, reliés par des flèches.](/ressources/img/logigramme-generique.svg)

## À quoi ça sert ?

Quand un comportement se décrit par « on lit ceci, puis *si* telle condition *alors* on fait ça, *sinon* autre chose », le logigramme met cette logique à plat avant de la coder. Il sert à :

- **dérouler une procédure** pas à pas, en rendant chaque décision et chaque branche visibles ;
- **repérer les cas oubliés** — une décision dont une branche ne mène nulle part saute aux yeux sur le schéma ;
- **communiquer** une logique de traitement sans imposer un langage de programmation ;
- **préparer le code** : chaque losange devient un `if`, chaque rectangle une instruction.

C'est l'outil naturel pour un **traitement séquentiel à embranchements** ponctuel. Dès que le système a des **modes** persistants (en marche / en défaut / en veille), le logigramme enfle et devient illisible : c'est le signal de passer à une [[machine-a-etats|machine à états]].

## Comment lire un logigramme ?

Quatre symboles suffisent à la plupart des logigrammes, reliés par des **flèches** qui donnent le sens de lecture (de haut en bas par convention).

- **Terminal** (forme de stade) — marque le **début** et la **fin**. Un logigramme commence par un seul début et se termine par au moins une fin.
- **Entrée / sortie** (parallélogramme) — une donnée qui entre (lire un capteur) ou sort (afficher, envoyer).
- **Traitement** (rectangle) — une action ou un calcul (« incrémenter », « couper le chauffage »).
- **Décision** (losange) — une **condition** à deux sorties **étiquetées** (`oui` / `non`). C'est le seul symbole à plusieurs sorties.

Trois règles de bonne lecture. Le flux **ne se sépare qu'au niveau d'un losange**, et ses deux sorties sont toujours nommées. Les branches **se rejoignent** ensuite, ou mènent chacune à une fin. Et tout chemin **se termine** : un trait qui s'arrête dans le vide est une erreur, pas un raccourci.

## Exemple — Thermostat

Le même thermostat « si la température dépasse la consigne, couper le chauffage, sinon chauffer » décliné en trois niveaux, du tracé fautif au logigramme exploitable.

> [!failure] Contre-exemple — tracé propre mais fautif
> ![Logigramme de thermostat proprement dessiné mais incomplet : seule la sortie oui de la décision est traitée, la sortie non se termine sans suite, et aucun terminal de fin ne clôt le programme.](/ressources/img/logigramme-thermostat-mauvais.svg)
>
> **Pourquoi c'est mauvais.** Le tracé est soigné — symboles corrects, flèches nettes — mais la **logique est trouée**. La décision n'a qu'une branche traitée : *que se passe-t-il si la température est sous la consigne ?* Rien n'est prévu. Et le flux s'arrête dans le vide, sans terminal de fin. Un schéma bien dessiné peut être tout aussi faux qu'un schéma brouillon : la propreté ne valide pas la logique.
>
> **Coût réel.** Traduit tel quel, le code ne fait rien dans la moitié des cas, et personne ne s'en aperçoit avant que le chauffage ne reste bloqué — le bug est dans la branche qu'on a oublié de dessiner.

> [!warning] Version moyenne — correcte mais sans boucle
> ![Logigramme de thermostat avec les deux branches traitées, oui vers couper et non vers allumer, se rejoignant vers un terminal de fin, sans aucune boucle.](/ressources/img/logigramme-thermostat-moyen.svg)
>
> **Pourquoi c'est moyen.** Les deux branches sont traitées et le flux se termine proprement : la logique est juste. Mais il **manque la boucle** — le programme lit la température *une seule fois*, agit, et s'arrête. Un thermostat doit réguler en continu. Le logigramme est correct pour un traitement ponctuel, incomplet pour une régulation.

> [!example] Version cible — logique complète et bouclée
> ![Logigramme de thermostat complet : les deux branches sont traitées et une flèche reboucle vers la lecture de la température, assurant une régulation continue.](/ressources/img/logigramme-thermostat-bon.svg)
>
> **Pourquoi c'est bon.** Les deux cas sont couverts, et une **boucle** ramène le flux vers la lecture de la température : la régulation tourne en permanence. Chaque symbole se traduit directement en code — le losange en `if`, les rectangles en actions, la boucle en `while` ou en `loop()`. C'est un logigramme qu'on peut coder sans rien deviner.

## Pièges

**Décision à une seule sortie.** Un losange a *toujours* deux sorties étiquetées. Oublier la branche « non » (ou « oui ») laisse un cas non traité — l'erreur la plus fréquente et la plus silencieuse.

**Flux qui ne se termine pas.** Un trait qui s'arrête dans le vide n'est pas une fin. Tout chemin doit rejoindre un autre chemin ou un terminal de fin.

**Boucle sans condition de sortie.** Une boucle qui reboucle sans qu'aucune décision ne permette d'en sortir est une boucle infinie. Une régulation continue est voulue ; une boucle bloquante ne l'est pas.

**Flèches qui se croisent.** Quand les liaisons s'entrecroisent, le logigramme devient illisible. C'est souvent le signe qu'il faut réorganiser les blocs, ou que le comportement relève d'une [[machine-a-etats|machine à états]].

**Trop de détail.** Un logigramme décrit une logique, pas chaque ligne de code. Y recopier les déclarations de variables ou la syntaxe exacte le noie. Rester au niveau des décisions et des actions.

**Confondre avec un organigramme hiérarchique.** « Organigramme » désigne aussi l'arbre des fonctions ou des personnes d'une organisation. Ici, il s'agit du flux d'exécution d'un algorithme — rien à voir.

## Voir aussi

- [[algorithme|Algorithme]] — la fiche mère qui situe le logigramme parmi les représentations
- [[machine-a-etats|Machine à états]] — à préférer dès que le système a des modes persistants
- [[grafcet|Grafcet]] — pour une séquence, surtout avec des actions en parallèle
- [[chronogramme|Chronogramme]] — pour raisonner sur le temps plutôt que sur les décisions
- [[preuve-de-concept|Preuve de concept]] — où le logigramme conçu est codé et testé
