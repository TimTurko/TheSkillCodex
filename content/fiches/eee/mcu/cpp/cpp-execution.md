---
title: Exécution d'un programme
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Avant d'écrire la moindre ligne, il faut comprendre ce qui se passe entre le moment où l'on clique sur **Téléverser** et celui où la carte exécute le programme. Cette fiche suit ce chemin — *édition → compilation → téléversement → exécution* — puis présente le **code minimal** qui compile sur Arduino : les deux fonctions `setup()` et `loop()`. Tant qu'on ne sait pas *ce qui s'exécute, quand, et combien de fois*, on programme à l'aveugle.

## À quoi ça sert ?

Comprendre l'exécution sert deux fois. D'abord à **se dépanner** : quand un programme refuse de marcher, la première question est « est-ce qu'il a seulement compilé et été téléversé ? » — et on ne sait y répondre que si l'on connaît les étapes. Ensuite à **écrire du code juste** : la plupart des erreurs de débutant viennent d'une mauvaise idée de ce que fait la carte. Deux malentendus reviennent sans cesse :

- croire que le programme s'exécute **une fois puis s'arrête**, comme un script sur un ordinateur — alors qu'un microcontrôleur tourne en **boucle sans fin** tant qu'il est alimenté ;
- croire que tout le code dans le fichier s'exécute **de haut en bas** — alors que seules deux fonctions sont appelées, et pas dans l'ordre où on les lit.

Lever ces deux malentendus, c'est le but de cette fiche.

## De l'édition à l'exécution

Entre votre texte et la LED qui clignote, il y a quatre temps. Les comprendre permet de situer une panne au bon endroit.

1. **Édition.** Vous écrivez du C++ dans l'éditeur. À ce stade, ce n'est que du **texte** : la carte ne comprend pas ce langage.
2. **Compilation.** Le bouton *Vérifier* lance le **compilateur**, qui traduit votre texte en **code machine** — la suite d'instructions binaires que comprend le microcontrôleur. S'il reste une faute de syntaxe (un `;` oublié, une accolade non fermée), la traduction échoue : rien n'est produit, et le compilateur affiche une erreur. **Tant que ça ne compile pas, rien ne part vers la carte.**
3. **Téléversement.** Le bouton *Téléverser* recompile puis **envoie le code machine** à la carte par le câble USB. Un petit programme déjà présent sur la carte, le *bootloader*, reçoit ces octets et les **écrit dans la mémoire flash** (la mémoire qui garde le programme même hors tension).
4. **Exécution.** Dès que le téléversement est fini — ou à chaque mise sous tension et à chaque appui sur *Reset* — le microcontrôleur lit le programme depuis la flash et l'**exécute**. Il continue tant qu'il est alimenté.

> [!info]
> **Compiler ≠ téléverser ≠ marcher.** Trois étapes distinctes, trois pannes distinctes. Le code peut compiler (syntaxe correcte) mais ne pas se téléverser (mauvais port, câble). Il peut se téléverser mais mal fonctionner (erreur d'algorithme). Savoir à quelle étape ça coince, c'est la moitié du dépannage.

## Le code minimal

Voici le plus petit programme Arduino qui **compile et se téléverse** sans erreur :

```cpp
void setup() {
}

void loop() {
}
```

Il ne fait rien de visible, mais il est valide — et il contient déjà tout le squelette obligatoire. Deux fonctions, et elles ne sont pas interchangeables :

- **`setup()`** s'exécute **une seule fois**, au démarrage. On y met ce qui se règle une fois pour toutes : le sens des broches, l'ouverture du port série.
- **`loop()`** s'exécute **en boucle infinie**, juste après `setup()`. C'est le cœur vivant du programme : dès que la carte arrive au bout de `loop()`, elle la **recommence immédiatement**, et ainsi de suite jusqu'à la coupure de l'alimentation.

Les deux sont **obligatoires**, même vides : si l'une manque, le programme ne compile pas.

> [!note]
> **Où est passé le `main()` ?** En C++ « normal », tout programme commence par une fonction `main()`. Sur Arduino, elle existe toujours, mais le framework la **cache** : il écrit pour vous un `main()` qui appelle `setup()` une fois, puis `loop()` en boucle. C'est tout l'« outillage » du dialecte Wiring — il vous épargne ce code répétitif.

## Que fait la carte à la mise sous tension

Le déroulement est toujours le même, quel que soit le programme :

```
mise sous tension / Reset
        │
        ▼
   setup()        ←── exécuté UNE fois
        │
        ▼
   loop()  ──┐
        ▲     │     ←── répété À L'INFINI
        └─────┘
```

Un programme embarqué ne « se termine » donc jamais de lui-même. C'est une différence de fond avec un programme d'ordinateur : il n'y a ni fin, ni retour au système — juste `loop()` qui tourne, encore et encore, jusqu'à ce qu'on débranche.

## Code à lire

Ce sketch rend l'exécution **visible** sur le [[arduino-serie|moniteur série]]. Téléversez-le, ouvrez le moniteur (loupe en haut à droite, vitesse réglée sur 115200), et observez.

```cpp
unsigned long passages = 0;     // compte les tours de loop() — déclarée hors des fonctions

void setup() {
  Serial.begin(115200);         // ouvre le port série (une seule fois)
  Serial.println("=== Démarrage : setup() exécuté ===");
}

void loop() {
  passages = passages + 1;      // un de plus à chaque tour
  Serial.print("Tour de loop n° ");
  Serial.println(passages);
  delay(500);                   // ralentit l'affichage pour qu'il soit lisible
}
```

Trois choses à remarquer en lisant la sortie :

- la ligne `=== Démarrage ===` n'apparaît **qu'une fois** — c'est `setup()`, exécuté une seule fois ;
- le compteur s'incrémente **sans fin** (1, 2, 3, …) — c'est `loop()`, répété à l'infini ;
- si vous appuyez sur le bouton **Reset** de la carte, le message de démarrage **réapparaît** et le compteur **repart de 1** : un Reset, c'est exactement « remise sous tension », donc `setup()` se rejoue.

Sans le `delay(500)`, la boucle tournerait des dizaines de milliers de fois par seconde et le moniteur serait illisible : c'est une bonne occasion de mesurer à quel point `loop()` est rapide.

## Pièges

**Une des deux fonctions manque.** Supprimer `setup()` ou `loop()` provoque une erreur de compilation du type `undefined reference to 'loop'`. Les deux sont obligatoires, même vides.

**Du code écrit hors de toute fonction.** Une instruction « exécutable » (un `digitalWrite`, un appel de fonction) placée directement entre `setup()` et `loop()`, hors de toute accolade, ne compile pas. Seules des **déclarations** (de variables, de fonctions) vivent à ce niveau ; les **actions** vont à l'intérieur de `setup()` ou de `loop()`.

**Croire que `loop()` ne s'exécute qu'une fois.** C'est le contresens le plus fréquent. Tout ce qui est dans `loop()` se répète sans fin. Ce qui ne doit se faire qu'une fois (un réglage, un message d'accueil) va dans `setup()`.

**Oublier `Serial.begin()`.** Sans cette ligne dans `setup()`, les `Serial.print()` n'affichent rien — le port n'a jamais été ouvert. Symptôme : un moniteur série désespérément vide.

**Vitesse du moniteur qui ne correspond pas.** Si `Serial.begin(115200)` et que le moniteur est réglé sur une autre vitesse (9600…), l'affichage est un charabia de caractères. Les deux valeurs doivent être identiques.

## Exercices

> [!question] Exercice 1 — Le programme qui « ne fait rien »
> Téléversez le code minimal (`setup()` et `loop()` vides). Que se passe-t-il ? La compilation réussit-elle ? Le téléversement ? Et sur la carte, observe-t-on quelque chose ?
>
> > [!success]- Corrigé
> > La compilation **réussit** et le téléversement **aussi** : le programme est valide. Mais sur la carte, **rien de visible** — aucune broche n'est pilotée, aucun message envoyé. C'est le point clé : *un programme qui compile et se téléverse n'« agit » pas pour autant*. Compiler prouve seulement que la syntaxe est correcte, pas que le programme fait quelque chose d'utile.

> [!question] Exercice 2 — Rendre la boucle visible
> Faites afficher sur le moniteur série un compteur qui augmente à chaque tour de `loop()`, une ligne toutes les secondes. Combien de lignes voyez-vous en 10 secondes ?
>
> > [!success]- Corrigé
> > ```cpp
> > unsigned long n = 0;
> >
> > void setup() {
> >   Serial.begin(115200);
> > }
> >
> > void loop() {
> >   n = n + 1;
> >   Serial.println(n);
> >   delay(1000);            // une seconde entre deux affichages
> > }
> > ```
> > Avec `delay(1000)`, on obtient **une ligne par seconde**, donc une dizaine en 10 secondes. Le `delay` ne « cadence » pas la carte : il l'oblige juste à attendre entre deux affichages. Sans lui, `loop()` tournerait des milliers de fois par seconde.

> [!question] Exercice 3 — Prouver que `setup()` ne s'exécute qu'une fois
> Écrivez un programme qui affiche `"setup"` dans `setup()` et `"loop"` dans `loop()` (une fois par seconde). Téléversez, observez, puis **appuyez sur le bouton Reset**. Qu'observe-t-on à chaque étape ?
>
> > [!success]- Corrigé
> > ```cpp
> > void setup() {
> >   Serial.begin(115200);
> >   Serial.println("setup");
> > }
> >
> > void loop() {
> >   Serial.println("loop");
> >   delay(1000);
> > }
> > ```
> > Au démarrage : **un seul** `"setup"`, puis `"loop"` qui se répète. À l'appui sur **Reset** : un nouveau `"setup"` apparaît, puis les `"loop"` reprennent. Conclusion : un Reset équivaut à une remise sous tension — `setup()` se rejoue intégralement, ce qui réinitialise aussi toutes les variables (à voir dans [[cpp-portee|variables locales et globales]]).

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — le tout premier téléversement (le *Blink* de la [[arduino-prise-en-main|prise en main]]) est l'acte qui valide la chaîne complète. Comprendre les quatre temps de l'exécution, c'est savoir où chercher quand ce premier essai échoue.
- **Critère *« Programmer ou paramétrer un contrôleur numérique »*** — tout le code du projet repose sur ce modèle `setup()` une fois / `loop()` sans fin. C'est le cadre mental commun à toutes les cartes du framework Arduino.

## Voir aussi

- [[cpp|C++]] — hub d'apprentissage du langage
- [[cpp-structure|La structure d'un programme]] — l'étape suivante : ce qu'on met *autour* de `setup()` et `loop()`
- [[arduino-prise-en-main|Prise en main d'Arduino]] — compiler et téléverser, le prérequis pratique
- [[arduino-serie|Moniteur série]] — l'outil pour « voir » l'exécution
- [[firmware|Firmware]] — structurer le code embarqué une fois les bases acquises (transverse)
