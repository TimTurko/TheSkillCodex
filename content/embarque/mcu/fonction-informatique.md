---
title: Fonction (informatique)
type: notion
phases:
  - preuve-de-concept
tags:
  - eee
  - notion
prerequis: []
aa: []
draft: false
---

Une **fonction**, en programmation, est un bloc d'instructions **nommé** qu'on définit une fois et qu'on réutilise en l'appelant par son nom. Elle peut recevoir des données en **entrée** (les *paramètres*) et renvoyer un résultat en **sortie** (la *valeur de retour*). Découper un programme en fonctions le rend lisible, réutilisable et testable : au lieu d'une longue suite d'instructions, on lit une série de blocs au rôle clair.

À ne pas confondre avec la [[fonction|fonction au sens de l'analyse fonctionnelle]] (FP / FS / FC), qui décrit un **service rendu par le produit** — pas un bloc de code.

## À quoi ça sert ?

Trois bénéfices, qui se cumulent dès qu'un programme grossit :

- **Factoriser** — écrire une fois ce qui sert plusieurs fois, au lieu de copier-coller (et de devoir corriger partout en cas de bug) ;
- **Nommer une intention** — `lireTemperature()` se lit mieux qu'une dizaine de lignes de conversion noyées dans la boucle ;
- **Isoler** — une fonction se teste et se débogue seule, ce qui est précieux quand le système devient gros.

En embarqué, c'est aussi la **structure de base** : tout programme Arduino tient dans deux fonctions, `setup()` (réglages au démarrage) et `loop()` (boucle principale), et on structure le reste du [[firmware|firmware]] en fonctions au rôle clair (`lireCapteur()`, `commanderMoteur()`).

## Comment écrire une fonction

Une fonction se définit par un **type de retour**, un **nom**, des **paramètres** entre parenthèses, et un corps entre accolades. `return` renvoie la valeur de sortie ; le type `void` indique qu'il n'y a pas de retour.

```cpp
float moyenne(int a, int b) {   // type de retour · nom · paramètres
  return (a + b) / 2.0;         // valeur renvoyée
}
```

On l'**appelle** ensuite par son nom, en lui passant ses arguments :

```cpp
float m = moyenne(10, 20);      // m vaut 15.0
```

Les variables déclarées **dans** une fonction n'existent que le temps de son exécution (leur *portée* est locale) : ce point, central en embarqué, est détaillé dans [[cpp|le langage C++]].

## Pièges

**Confondre définir et appeler.** Écrire une fonction ne l'exécute pas — tant qu'on ne l'appelle pas par son nom, son code ne tourne jamais.

**Oublier la valeur de retour.** Une fonction qui n'est pas `void` doit renvoyer une valeur cohérente avec son type, sur tous ses chemins d'exécution.

**Une fonction qui fait trop.** Une fonction censée tout faire redevient aussi illisible que le code qu'elle devait clarifier. Une fonction = une intention.

## Voir aussi

- [[cpp|Le langage C++]] — la syntaxe complète des fonctions et la portée des variables
- [[fonction|Fonction (analyse fonctionnelle)]] — l'autre sens du mot : un service rendu par le produit
- [[arduino|Arduino]] — `setup()` et `loop()`, les deux fonctions de tout programme Arduino
