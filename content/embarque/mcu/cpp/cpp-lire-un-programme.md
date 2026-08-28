---
title: Lire un programme qu'on n'a pas écrit
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-logs
aa: []
draft: false
---

Recopier un exemple ne demande rien. **Le comprendre** est ce qui permet ensuite de le modifier, de le corriger et de le réutiliser. Or un programme ne se lit pas comme un texte, de la première ligne à la dernière : on y entre par des points de repère, dans un ordre qui n'est pas celui de l'écriture. Cette fiche donne une **méthode d'entrée** dans un programme C++ inconnu, les **mécanismes du langage** qui reviennent d'un exemple à l'autre, et une **lecture commentée** d'un programme du wiki pris tel quel. Elle clôt le parcours [[cpp|C++]] : la syntaxe est supposée acquise, on apprend ici à s'en servir pour lire.

## À quoi ça sert ?

En projet, la plupart du code qu'on manipule n'a pas été écrit par soi : un exemple de bibliothèque, le sketch d'un camarade, la reprise d'un projet de l'an dernier. Trois situations reviennent constamment, et elles supposent toutes de savoir lire avant d'écrire :

- « Cet exemple fait presque ce que je veux — qu'est-ce que je change ? » ;
- « Mon binôme a écrit cette partie, je dois brancher la mienne dessus » ;
- « Ce code marchait la semaine dernière, quelqu'un l'a modifié. »

Lire n'est pas déboguer. Ici, **on ne suppose aucune panne** : le programme est réputé fonctionner, l'objectif est de savoir *ce qu'il fait*. Quand un comportement est faux et qu'on cherche pourquoi, c'est l'autre métier — voir [[arduino-debug|déboguer un programme Arduino]]. Les deux se suivent : on ne débogue pas utilement un code qu'on n'a pas lu.

## Par où entrer dans un programme inconnu

Quatre temps, dans cet ordre. Le premier réflexe à désapprendre est de commencer en haut et de descendre.

### 1. Repérer les bornes

En C++ Arduino, tout programme a la même charpente : `setup()` s'exécute **une fois** au démarrage, `loop()` **en boucle** ensuite, indéfiniment. Cherchez ces deux fonctions d'abord, avant même de lire une ligne : elles découpent le fichier en trois zones, l'en-tête (avant `setup()`), l'initialisation, et le corps répété.

Cette découpe répond déjà à une question de fond : **ce qui est dans `setup()` est un réglage, ce qui est dans `loop()` est un comportement**. Si vous cherchez « pourquoi la LED clignote comme ça », c'est dans `loop()`. Si vous cherchez « à quelle vitesse le port série est ouvert », c'est dans `setup()`.

### 2. Lire l'en-tête : branché, réglé, mémorisé

L'en-tête tient en général en vingt lignes et dit trois choses distinctes. Apprendre à les séparer d'un coup d'œil fait gagner l'essentiel du temps de lecture.

- Les `#include` — **de quoi le programme dépend**. Une bibliothèque incluse annonce une capacité (un afficheur, un servo, une carte SD) avant tout autre indice ;
- les `const` et les `#define`, généralement **en majuscules** — les **réglages**. Ce sont les valeurs qu'on peut changer sans toucher à la logique : numéros de broches, durées, seuils. C'est ici qu'on intervient en premier pour adapter un exemple ;
- les variables globales en minuscules, souvent initialisées à `0` ou `false` — **ce que le programme mémorise** d'un tour de `loop()` au suivant. Elles sont peu nombreuses et ce sont elles qui portent tout le comportement (voir [[cpp-portee|variables locales et globales]]).

La convention typographique n'est pas garantie par le langage, mais elle est suivie partout dans le monde Arduino et dans tout ce wiki : **majuscules = ne change jamais, minuscules = change**. Un nom en majuscules qu'on voit affecté dans `loop()` est un signal que quelque chose cloche dans le code qu'on lit.

### 3. Faire l'inventaire des états

Prenez les deux ou trois variables globales en minuscules repérées à l'étape précédente et, pour chacune, cherchez **tous les endroits où elle est affectée**. La fonction de recherche de l'éditeur suffit. Un programme embarqué typique n'a que trois à cinq variables d'état, et savoir où chacune change, c'est avoir compris la logique : le reste du code n'est que du câblage autour.

### 4. Jouer un tour, une seule fois

Enfin, parcourez **un** tour complet de `loop()` en vous racontant un scénario concret : « le bouton n'est pas appuyé, il s'est écoulé 3 secondes depuis le démarrage. Que vaut chaque variable, quelle branche est prise ? ». Un seul tour, joué sérieusement, en apprend plus que trois lectures survolées.

> [!tip] Astuce
> **Le test de la phrase unique.** Vous avez lu un programme quand vous pouvez répondre à deux questions sans rouvrir le fichier : *que fait ce programme, en une phrase ?* et *qu'est-ce qui change entre deux tours de boucle ?* Tant qu'une des deux résiste, la lecture n'est pas finie. À l'inverse, comprendre chaque ligne n'est **pas** l'objectif : on peut parfaitement lire un programme sans savoir ce que fait un appel de bibliothèque précis.

## Les mécanismes du C++ qu'on retrouve partout

Les points suivants ne sont pas de la syntaxe à apprendre (elle est déjà au parcours) mais des **indices de lecture** : ce que la présence d'un mot-clé ou d'une forme d'écriture vous apprend sur le programme, avant même d'en comprendre le détail.

### Les accolades délimitent, l'indentation ne fait pas foi

En C++, un bloc est ce qui se trouve entre `{` et `}`. Le décalage à gauche n'est qu'une convention de présentation : **le compilateur l'ignore**. Un `if` sans accolades ne gouverne que la ligne qui le suit immédiatement, même si plusieurs lignes semblent alignées dessous.

```cpp
if (mesure > SEUIL)
  digitalWrite(LED, HIGH);   // dans le if
  compteur++;                // PAS dans le if — s'exécute toujours
```

Réflexe de lecture : dès qu'un `if`, un `for` ou un `while` n'ouvre pas d'accolade, ne considérez que la ligne suivante comme lui appartenant, quelle que soit la mise en page. C'est exactement l'inverse de [[micropython-lire-un-programme|MicroPython]], où le décalage *est* la structure.

### Le type dit la taille — et prévient le débordement

Le type d'une variable n'est pas une décoration : il fixe la plage de valeurs qu'elle peut prendre. Une seule règle de lecture est vraiment rentable en embarqué : **toute date issue de `millis()` se stocke en `unsigned long`**. Voir `unsigned long tDebut` est normal. Voir `int tDebut` sur une variable de temps est une anomalie à signaler, car un `int` sur Uno déborde au bout de 32 secondes.

### Une condition composée se lit « ou bien … et que »

Quand un test mêle `&&` et `||`, la lecture à voix haute lève l'ambiguïté. Le point à connaître : **`&&` est prioritaire sur `||`**, donc `A || B && C` se lit « A, **ou bien** B et que C » — et non « A ou B, et que C ».

```cpp
if (millis() - tDebut >= DUREE_VERT ||
    (demandePieton && millis() - tDebut >= DUREE_VERT_MIN)) {
```

Ce test se lit : « on sort si le temps plein est écoulé, **ou bien** si un piéton a demandé **et que** le minimum est atteint ». Un `||` au premier niveau ouvre toujours **deux chemins de sortie**. Les repérer, c'est comprendre la logique de la branche.

### `volatile` : la variable est modifiée ailleurs

Le mot-clé `volatile` devant une variable globale est un panneau indicateur : **cette variable est écrite en dehors du flux normal du programme**, presque toujours par une routine d'interruption. Sa présence vous dit de chercher l'[[interruption|ISR]] qui la modifie avant d'essayer de comprendre le `loop()`. Attention à ne pas surinterpréter : `volatile` empêche seulement le compilateur d'optimiser les lectures, il ne protège **pas** l'accès concurrent (voir [[arduino-interruptions|les interruptions sur Arduino]]).

### Ce qu'on ouvre, on le ferme

En C++, la libération d'une ressource est **à la charge du programmeur**. Un fichier ouvert avec `SD.open()` doit être refermé par `close()`. Une transmission ouverte par `beginTransmission()` doit être conclue par `endTransmission()`. Réflexe de lecture : **à chaque ouverture repérée, cherchez la fermeture correspondante**. Son absence n'est pas un détail de style. Sans `close()`, un fichier peut rester vide sur la carte.

C'est le point où les deux langages du wiki divergent le plus franchement : côté [[micropython-lire-un-programme|MicroPython]], le bloc `with` ferme tout seul, et l'absence de `close()` n'y est donc pas un oubli.

### Une table de tâches : `struct` et pointeur de fonction

Certains programmes remplacent une pile de tests répétés par un **tableau qu'on parcourt**. La forme revient assez souvent pour valoir la peine d'être reconnue :

```cpp
struct Tache {
  void (*fonction)();          // l'adresse d'une fonction à appeler
  unsigned long intervalle;
  unsigned long dernier;
};
```

Trois choses s'y lisent. Une `struct` **regroupe** plusieurs informations sous un seul nom, ici tout ce qui décrit une tâche. Le champ `void (*fonction)()` est un **pointeur de fonction** : une case qui ne contient pas un nombre mais l'adresse d'une fonction, ce qui permet de l'appeler plus tard sans savoir laquelle. Et la boucle qui suit, `for (Tache &t : taches)`, est un **`for` à plage** : elle parcourt les éléments du tableau un à un, sans indice à gérer. Le sens général se lit sans maîtriser les pointeurs : *le programme tient une liste de choses à faire et la parcourt*. Le détail est développé dans [[arduino-programmation-non-bloquante|la programmation non bloquante sur Arduino]].

## Lecture commentée : le feu tricolore

Voici la méthode appliquée de bout en bout au programme de [[arduino-machine-a-etats|machine à états]], repris tel quel. Suivez les quatre temps sans regarder le commentaire du wiki.

**Les bornes.** `setup()` configure six broches et date le départ. `loop()` contient un `if` puis un `switch` à trois branches. Tout le comportement est donc dans le `switch`.

**L'en-tête.** Aucun `#include` : le programme n'utilise que le cœur Arduino. Les majuscules donnent les réglages — six numéros de broches, quatre durées en millisecondes. Trois minuscules donnent la mémoire : `etat`, `tDebut`, `demandePieton`. On sait déjà que le programme mémorise **où il en est**, **depuis quand**, et **si quelqu'un a appuyé**.

**L'inventaire des états.** `etat` est affecté dans les trois branches du `switch`, jamais ailleurs. C'est le cycle vert → jaune → rouge → vert. `tDebut` est réaffecté à `millis()` exactement aux mêmes endroits, donc à chaque changement d'état : il **redate l'entrée** dans la branche, ce qui fait repartir les comparaisons de durée de zéro. `demandePieton` passe à `true` en tête de `loop()`, hors du `switch` (donc l'appui est écouté **en permanence**, quel que soit l'état) et revient à `false` en entrant dans `ROUGE`, une fois la demande satisfaite.

**Un tour.** Scénario : trois secondes après le démarrage, personne n'a appuyé. `digitalRead(BOUTON)` vaut `HIGH` (la broche est en `INPUT_PULLUP`, donc au repos elle est à `HIGH`), le premier `if` est faux. Le `switch` entre dans `case VERT`, rallume les cinq sorties dans la bonne configuration, puis teste la condition composée : `millis() - tDebut` vaut 3000, ce qui est inférieur à `DUREE_VERT` (6000) — faux. `demandePieton` est faux, donc la seconde branche l'est aussi. Rien ne change, le tour se termine, et le suivant recommence à l'identique.

Le programme se résume alors en une phrase : *un feu qui tourne sur des durées fixes, et qui abrège son vert si un piéton a appuyé, sans jamais descendre sous un vert minimal*. Ce que le tour a montré, c'est **le rôle des majuscules dans le test**. Il suffit de changer `DUREE_VERT` pour retimer tout le feu, sans toucher à une seule ligne de logique.

## Se faire aider sans se faire remplacer

Faire expliquer un programme par un assistant conversationnel est un usage légitime, **à une condition** : que ce qu'il affirme soit **vérifiable à l'écran**. Le critère est le même que pour la [[simulation-electronique|simulation]] et ne dépend pas du sens de l'usage.

« La variable `demandePieton` est modifiée dans le premier `if` de `loop()` » est une affirmation vérifiable : une recherche dans le fichier la confirme ou la dément en trois secondes. « Ce test déborde au bout de 32 secondes si la variable est un `int` » se vérifie en regardant la déclaration. Ces affirmations-là font gagner du temps sans rien retirer au travail : ce sont des **hypothèses**, et vous gardez la charge de les valider.

« Ce code est correct » n'est pas de cette nature. C'est **la conclusion** : le seul livrable de la lecture, et le seul qui ne se délègue pas. Un assistant peut vous montrer où regarder. Décider que vous avez compris reste votre part.

## Pièges fréquents

**Lire de haut en bas.** Un programme n'est pas un texte : commencer par `setup()` et `loop()`, puis remonter à l'en-tête pour éclairer ce qu'on y a vu.

**Chercher à tout comprendre.** Un appel de bibliothèque obscur n'empêche pas de lire le programme. Notez-le, continuez, revenez-y si la question se repose.

**Se fier à l'indentation.** Elle est décorative en C++. Seules les accolades font foi, et un `if` sans accolades est le piège classique.

**Confondre réglage et état.** Une valeur en majuscules ne change jamais en cours d'exécution. La confondre avec une variable d'état fait chercher une logique là où il n'y a qu'un paramètre.

**Sauter l'inventaire des variables globales.** C'est l'étape la plus rentable des quatre, et celle qu'on est le plus tenté d'écourter.

## Exercices

> [!question] Exercice 1 — Deux chemins de sortie
> Dans le programme du feu tricolore ci-dessus, la branche `case VERT` peut se terminer de deux façons. Décrivez chacune en une phrase, puis dites ce qui se passe si un piéton appuie **une seconde** après le passage au vert.

> [!success]- Corrigé de l'exercice 1
> Les deux sorties sont les deux membres du `||` :
> - **le vert a duré son temps plein** — `millis() - tDebut >= DUREE_VERT`, soit 6 secondes ;
> - **un piéton a appelé et le minimum est écoulé** — `demandePieton` est vrai **et** `millis() - tDebut >= DUREE_VERT_MIN`, soit 2 secondes.
>
> Si l'appui a lieu à la première seconde, `demandePieton` passe à `true` immédiatement, mais la seconde condition est encore fausse (1000 < 2000). Le feu **reste au vert** jusqu'à la deuxième seconde, puis bascule au jaune sans attendre les six secondes. C'est précisément le rôle de `DUREE_VERT_MIN` : empêcher qu'un appui coupe un vert qui vient de démarrer.

> [!question] Exercice 2 — Trois indices, trois conclusions
> Sans chercher le programme complet, dites ce que chacune de ces trois lignes vous apprend, isolément, sur le code dont elle est extraite.
> ```cpp
> volatile unsigned long impulsions = 0;
> File f = SD.open("mesures.csv", FILE_WRITE);
> const unsigned long PERIODE = 250;
> ```

> [!success]- Corrigé de l'exercice 2
> - **`volatile unsigned long impulsions`** — le `volatile` annonce une variable écrite par une **interruption** : il existe donc une ISR ailleurs dans le fichier, et c'est par elle qu'il faut commencer. Le `unsigned long` indique un compteur destiné à monter haut, ou une date.
> - **`File f = SD.open(...)`** — une ressource est **ouverte** : il doit exister un `f.close()` plus loin, et son absence serait un défaut. Accessoirement, la ligne annonce qu'une bibliothèque SD est incluse en tête et que le programme journalise des mesures.
> - **`const unsigned long PERIODE = 250`** — majuscules et `const` : c'est un **réglage**, pas un état. Il ne changera jamais en cours d'exécution, et c'est un bon candidat pour adapter le programme à un autre usage.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — la plupart des briques logicielles d'un PoC partent d'un exemple existant qu'on adapte. La qualité de la lecture initiale décide du temps perdu ensuite.
- **[[revue-de-code|Revue de code]]** — relire le code d'un camarade suppose d'abord de savoir le lire. C'est le prérequis direct de la routine collective.

## Voir aussi

- [[cpp|C++]] — hub d'apprentissage du langage
- [[cpp-logs|Lire et comprendre les erreurs]] — l'étape précédente : décoder les messages du compilateur
- [[cpp-portee|Variables locales et globales]] — ce qui survit d'un tour de boucle au suivant, la clé de l'inventaire des états
- [[micropython-lire-un-programme|Lire un programme MicroPython]] — la fiche jumelle côté MicroPython
- [[arduino-debug|Déboguer un programme Arduino]] — l'étape d'après : un comportement est faux, trouver pourquoi
- [[revue-de-code|Revue de code]] — la routine collective qui s'appuie sur cette lecture
- [[arduino-machine-a-etats|Machine à états sur Arduino]] — le programme lu en exemple ci-dessus


---

