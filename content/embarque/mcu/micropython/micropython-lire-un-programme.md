---
title: Lire un programme qu'on n'a pas écrit
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-modules
aa: []
draft: false
---

Recopier un exemple ne demande rien ; **le comprendre** est ce qui permet ensuite de le modifier, de le corriger et de le réutiliser. Or un programme ne se lit pas comme un texte, de la première ligne à la dernière : on y entre par des points de repère, dans un ordre qui n'est pas celui de l'écriture. Cette fiche donne une **méthode d'entrée** dans un programme MicroPython inconnu, les **mécanismes du langage** qui reviennent d'un exemple à l'autre, et une **lecture commentée** d'un programme du wiki pris tel quel. Elle clôt le parcours [[micropython-langage|MicroPython]] : la syntaxe est supposée acquise, on apprend ici à s'en servir pour lire.

## À quoi ça sert ?

En projet, la plupart du code qu'on manipule n'a pas été écrit par soi : un exemple trouvé en ligne, le script d'un camarade, la reprise d'un projet de l'an dernier. Trois situations reviennent constamment, et elles supposent toutes de savoir lire avant d'écrire :

- « Cet exemple fait presque ce que je veux — qu'est-ce que je change ? » ;
- « Mon binôme a écrit cette partie, je dois brancher la mienne dessus » ;
- « Ce code marchait la semaine dernière, quelqu'un l'a modifié. »

Lire n'est pas déboguer. Ici, **on ne suppose aucune panne** : le programme est réputé fonctionner, l'objectif est de savoir *ce qu'il fait*. Quand un comportement est faux et qu'on cherche pourquoi, c'est l'autre métier — voir [[micropython-debug|déboguer en MicroPython]]. Les deux se suivent : on ne débogue pas utilement un code qu'on n'a pas lu.

## Par où entrer dans un programme inconnu

Quatre temps, dans cet ordre. Le premier réflexe à désapprendre est de commencer en haut et de descendre.

### 1. Repérer les bornes

Un programme MicroPython n'a pas de `setup()` ni de `loop()` : le fichier **s'exécute de haut en bas**, une fois, et c'est le `while True:` final qui joue le rôle de la boucle infinie. La charpente est donc la même en trois zones, mais elle n'est pas nommée — c'est à vous de la voir : les `import` et les créations d'objets en tête tiennent lieu d'initialisation, et tout ce qui est indenté sous `while True:` est le comportement répété.

Cherchez le `while True:` en premier, avant de lire une ligne. Sa position découpe le fichier : **ce qui est au-dessus s'exécute une seule fois, ce qui est dedans s'exécute sans fin**. Certains programmes n'en ont pas — un script qui écrit un fichier et s'arrête, par exemple — et c'est déjà une information de premier ordre.

### 2. Lire l'en-tête : branché, réglé, mémorisé

L'en-tête tient en général en quinze lignes et dit trois choses distinctes. Apprendre à les séparer d'un coup d'œil fait gagner l'essentiel du temps de lecture.

- Les `import` — **de quoi le programme dépend**. `machine` annonce un accès au matériel, `time` un chronométrage, `json` une sauvegarde, `network` une liaison Wi-Fi ; la première ligne du fichier annonce déjà son domaine (voir [[micropython-modules|modules et `import`]]) ;
- les noms **en majuscules** — les **réglages**. MicroPython n'a pas de mot-clé de constante : rien n'empêche techniquement de les modifier, et la majuscule est une pure convention. Elle est suivie partout et se lit comme une promesse : numéros de broches, durées, seuils. C'est ici qu'on intervient en premier pour adapter un exemple ;
- les objets et variables en minuscules — **le matériel branché** (`led = Pin(15, Pin.OUT)`) et **ce que le programme mémorise** entre deux tours. Les seconds sont peu nombreux et portent tout le comportement.

### 3. Faire l'inventaire des états

Prenez les deux ou trois variables en minuscules qui ne sont pas des objets matériels et, pour chacune, cherchez **tous les endroits où elle est affectée**. La fonction de recherche de [[micropython-prise-en-main|Thonny]] suffit. Un programme embarqué typique n'a que trois à cinq variables d'état, et savoir où chacune change, c'est avoir compris la logique — le reste n'est que du câblage autour.

En MicroPython, cette étape a une prime : les affectations dans une fonction ne comptent **que** si la fonction déclare `global` (voir plus bas). Une variable d'état écrite depuis une fonction sans cette déclaration ne bouge pas vraiment, et repérer l'écart est souvent ce qui explique un comportement mystérieux.

### 4. Jouer un tour, une seule fois

Enfin, parcourez **un** tour complet de la boucle en vous racontant un scénario concret : « le bouton n'est pas appuyé, il s'est écoulé 300 ms depuis le démarrage — que vaut chaque variable, quelle branche est prise ? ». Un seul tour, joué sérieusement, en apprend plus que trois lectures survolées.

> [!tip] Astuce
> **Le test de la phrase unique.** Vous avez lu un programme quand vous pouvez répondre à deux questions sans rouvrir le fichier : *que fait ce programme, en une phrase ?* et *qu'est-ce qui change entre deux tours de boucle ?* Tant qu'une des deux résiste, la lecture n'est pas finie. À l'inverse, comprendre chaque ligne n'est **pas** l'objectif : on peut parfaitement lire un programme sans savoir ce que fait un appel de module précis. Et MicroPython offre un luxe que le C++ n'a pas — le [[micropython-repl|REPL]] permet de tester une ligne isolée en attendant.

## Les mécanismes de MicroPython qu'on retrouve partout

Les points suivants ne sont pas de la syntaxe à apprendre — elle est déjà au parcours — mais des **indices de lecture** : ce que la présence d'un mot-clé ou d'une forme d'écriture vous apprend sur le programme, avant même d'en comprendre le détail.

### L'indentation est la structure

En MicroPython, le décalage à gauche **définit** les blocs : il n'y a pas d'accolades, et l'indentation n'est pas décorative. La conséquence pour la lecture est directe et très pratique : **un bloc se termine au retour à gauche**, ce qui se voit sans rien lire.

```python
if valeur > SEUIL:
    led.on()
    compteur += 1        # dans le if (indenté)
print(compteur)          # hors du if (revenu à gauche)
```

Le balayage vertical de la marge gauche donne donc la structure du programme en quelques secondes, avant tout examen du contenu. C'est exactement l'inverse du [[cpp-lire-un-programme|C++]], où seules les accolades font foi et où l'indentation peut mentir.

Attention à une conséquence moins évidente : un bloc profondément indenté signale un **empilement de conditions**, et trois niveaux de décalage dans une boucle sont souvent le signe qu'il y a une logique à démêler.

### Le type n'est pas écrit : il vient de l'affectation

Aucune variable n'est déclarée avec son type. Pour savoir ce que contient `valeur`, il n'y a qu'un moyen : **remonter à l'endroit où elle est affectée**. C'est le coût du typage dynamique en lecture, et cela rend l'inventaire de l'étape 3 d'autant plus rentable.

Deux repères aident : `read_u16()` renvoie toujours un entier de 0 à 65535, `ticks_ms()` un entier de millisecondes, et toute division avec `/` produit un **flottant**, même entre deux entiers. Ce dernier point explique bien des affichages inattendus (voir [[micropython-types|variables et types]]).

### `global` : la fonction écrit un état partagé

C'est le mécanisme de lecture le plus rentable de MicroPython, et celui qui n'a pas d'équivalent direct en C++. Par défaut, **affecter une variable dans une fonction en crée une nouvelle, locale**, même si un nom identique existe au-dessus. Pour qu'une fonction modifie vraiment l'état du programme, elle doit l'annoncer :

```python
def tache_led():
    global t_led, etat_led      # sans cette ligne, les deux affectations
    if ticks_diff(ticks_ms(), t_led) >= 500:   # ci-dessous resteraient locales
        t_led = ticks_ms(); etat_led ^= 1
        led.value(etat_led)
```

Réflexe de lecture : **la ligne `global` d'une fonction est la liste exacte de ce que cette fonction modifie à l'extérieur d'elle-même**. C'est une déclaration d'intention, gratuite à lire, et elle vous dit avant tout examen du corps quelles variables d'état la fonction touche. Une fonction sans `global` ne peut que lire et calculer — elle ne change rien.

### Une condition composée s'écrit en toutes lettres

Les opérateurs logiques s'écrivent `and`, `or` et `not`, et non `&&`, `||`, `!`. Comme en C++, **`and` est prioritaire sur `or`**, donc `A or B and C` se lit « A, **ou bien** B et que C ».

```python
if (ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT or
        (demande_pieton and ticks_diff(ticks_ms(), t_debut) >= DUREE_VERT_MIN)):
```

Un détail de forme propre au langage : la parenthèse ouvrante permet de **passer à la ligne** au milieu d'une condition, et la suite est alors indentée davantage pour ne pas ressembler au corps du bloc. Un `or` au premier niveau ouvre toujours **deux chemins de sortie** ; les repérer, c'est comprendre la logique de la branche.

### `with` ferme tout seul

Le bloc `with` prend en charge la libération de la ressource : à la sortie du bloc, le fichier est refermé, y compris si une erreur survient au milieu.

```python
with open("mesures.csv", "w") as f:
    f.write(ligne)
# ici, le fichier est déjà refermé
```

Réflexe de lecture : **l'absence de `close()` après un `with` n'est pas un oubli**, c'est la forme normale. Chercher une fermeture manuelle serait une erreur d'importation d'habitudes venues du [[cpp-lire-un-programme|C++]], où la fermeture est justement à la charge du programmeur.

### `try` / `except` : une branche prévue, pas un accident

Un bloc `try` / `except` ne signale pas un code fragile : il décrit un **cas de figure anticipé**. La lecture utile consiste à se demander *quelle situation normale du projet produit cette exception*.

```python
try:
    with open(FICHIER) as f:
        data = json.load(f)
except OSError:
    data = {"demarrages": 0}
```

Ici, `OSError` n'est pas une panne : c'est le **premier démarrage**, quand le fichier n'existe pas encore. La branche `except` porte donc la valeur de départ, et se lit comme une initialisation conditionnelle. Le type d'exception attrapé est l'indice principal — `OSError` pour un fichier ou un périphérique absent, `ValueError` pour une conversion impossible.

## Lecture commentée : les trois tâches

Voici la méthode appliquée de bout en bout au programme de [[micropython-programmation-non-bloquante|programmation non bloquante]], repris tel quel. Suivez les quatre temps sans regarder le commentaire du wiki.

**Les bornes.** Le `while True:` est en toute fin de fichier et ne contient que **trois appels de fonction**, sans une seule ligne de logique. Tout le comportement est donc dans les trois fonctions au-dessus, et la boucle ne fait que les enchaîner indéfiniment.

**L'en-tête.** Deux `import` : `machine` pour `Pin` et `ADC` (donc du matériel : une sortie, une entrée analogique, une entrée), `time` pour `ticks_ms` et `ticks_diff` (donc du chronométrage sans blocage). Trois objets matériels en minuscules — `led`, `capteur`, `bouton` —, puis quatre variables d'état : `t_led`, `etat_led`, `t_cap`, `dernier_btn`. Aucune majuscule : les durées de ce programme sont écrites en dur dans les fonctions, ce qui est justement le défaut qu'on corrigerait en premier si on l'adaptait.

**L'inventaire des états.** C'est ici que les lignes `global` font tout le travail. `tache_led` déclare `global t_led, etat_led` : elle touche donc à la date du dernier basculement et à l'état de la LED, rien d'autre. `tache_capteur` déclare `global t_cap` : une seule variable, la date de la dernière mesure. `tache_bouton` déclare `global dernier_btn` : la lecture précédente du bouton. **Trois fonctions, trois périmètres disjoints** — aucune ne peut interférer avec les variables d'une autre, et cela se lit en trois lignes sans examiner un seul corps de fonction.

**Un tour.** Scénario : 120 ms après le démarrage, le bouton n'est pas appuyé. `tache_led()` compare `ticks_diff(ticks_ms(), t_led)` à 500 — 120 est inférieur, la LED ne bouge pas. `tache_capteur()` compare le même écart à 100 — 120 dépasse, donc la mesure est imprimée et `t_cap` redaté. `tache_bouton()` lit `1` (au repos, `PULL_UP` maintient la broche à 1), compare à `dernier_btn` qui vaut aussi `1` : pas de front descendant, rien ne se passe. Le tour se termine, le suivant recommence immédiatement.

Le programme se résume alors en une phrase : *trois activités indépendantes — clignoter, mesurer, surveiller un bouton — qui se partagent la même boucle sans qu'aucune n'attende les autres*. Ce que le tour a montré, c'est le mécanisme central : **chaque tâche compare une date à un intervalle et ne fait rien la plupart du temps**, ce qui laisse la boucle tourner librement.

## Se faire aider sans se faire remplacer

Faire expliquer un programme par un assistant conversationnel est un usage légitime, **à une condition** : que ce qu'il affirme soit **vérifiable à l'écran**. Le critère est le même que pour la [[simulation-electronique|simulation]] et ne dépend pas du sens de l'usage.

« La fonction `tache_led` modifie `etat_led` » est une affirmation vérifiable : sa ligne `global` la confirme ou la dément en trois secondes. « Ce `except` attrape le cas du premier démarrage » se vérifie en supprimant le fichier et en relançant. Ces affirmations-là font gagner du temps sans rien retirer au travail : ce sont des **hypothèses**, et vous gardez la charge de les valider — le [[micropython-repl|REPL]] est justement l'outil qui rend la vérification immédiate.

« Ce code est correct » n'est pas de cette nature. C'est **la conclusion** — le seul livrable de la lecture, et le seul qui ne se délègue pas. Un assistant peut vous montrer où regarder ; décider que vous avez compris reste votre part.

## Pièges fréquents

**Lire de haut en bas.** Un programme n'est pas un texte : commencer par le `while True:`, puis remonter à l'en-tête pour éclairer ce qu'on y a vu.

**Chercher à tout comprendre.** Un appel de module obscur n'empêche pas de lire le programme. Notez-le, continuez, revenez-y si la question se repose — et testez-le au REPL si elle persiste.

**Oublier de lire les lignes `global`.** C'est l'information la moins chère et la plus dense du fichier ; la sauter revient à lire chaque fonction en entier pour retrouver la même chose.

**Chercher un `close()` après un `with`.** La fermeture est automatique. Réflexe importé du C++, sans objet ici.

**Prendre un `except` pour une rustine.** La branche décrit un cas prévu du projet, pas un code mal écrit. Se demander *quelle situation normale la déclenche* est la bonne lecture.

## Exercices

> [!question] Exercice 1 — Ce que `global` annonce
> Sans lire le corps des fonctions, dites ce que chacune des trois fonctions du programme ci-dessus est capable de modifier. Puis dites ce qui se passerait si la ligne `global t_led, etat_led` était supprimée de `tache_led`.

> [!success]- Corrigé de l'exercice 1
> Les lignes `global` suffisent à répondre : `tache_led` peut modifier `t_led` et `etat_led` ; `tache_capteur` peut modifier `t_cap` ; `tache_bouton` peut modifier `dernier_btn`. Rien d'autre — les objets `led`, `capteur` et `bouton` sont seulement **utilisés**, jamais réaffectés, et n'ont donc pas besoin d'être déclarés.
>
> Sans la ligne `global`, les affectations `t_led = ticks_ms()` et `etat_led ^= 1` créeraient des variables **locales** à chaque appel. Deux conséquences : `etat_led ^= 1` lèverait immédiatement une erreur, parce qu'il lit la variable avant de l'écrire et qu'elle n'existe pas localement ; et si le code avait été écrit avec une simple affectation, `t_led` repartirait de zéro à chaque appel, si bien que la LED ne clignoterait jamais. **Une variable d'état modifiée dans une fonction sans `global` est un bug silencieux.**

> [!question] Exercice 2 — Trois indices, trois conclusions
> Sans chercher le programme complet, dites ce que chacune de ces trois lignes vous apprend, isolément, sur le code dont elle est extraite.
> ```python
> from machine import Pin, I2C
> except OSError:
> INTERVALLE_MS = 250
> ```

> [!success]- Corrigé de l'exercice 2
> - **`from machine import Pin, I2C`** — le programme pilote au moins un composant sur un **bus I²C** (un afficheur, un capteur), en plus de broches simples. Il y a donc quelque part une création d'objet `I2C(...)` avec ses deux broches, et probablement une bibliothèque de périphérique importée juste après.
> - **`except OSError:`** — une opération sur un **fichier ou un périphérique** peut échouer de façon prévue : fichier absent au premier démarrage, ou composant qui ne répond pas sur le bus. La branche qui suit contient la valeur ou le comportement de repli.
> - **`INTERVALLE_MS = 250`** — majuscules : c'est un **réglage**, pas un état. Le suffixe `_MS` annonce des millisecondes, donc une comparaison avec `ticks_diff` quelque part plus bas. Bon candidat pour adapter le programme sans toucher à sa logique.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — la plupart des briques logicielles d'un PoC partent d'un exemple existant qu'on adapte ; la qualité de la lecture initiale décide du temps perdu ensuite.
- **[[revue-de-code|Revue de code]]** — relire le code d'un camarade suppose d'abord de savoir le lire ; c'est le prérequis direct de la routine collective.

## Voir aussi

- [[micropython-langage|Le langage MicroPython]] — hub d'apprentissage du langage
- [[micropython-modules|Modules et `import`]] — l'étape précédente : importer et organiser son code
- [[micropython-repl|Le REPL]] — tester une ligne isolée pour lever un doute de lecture
- [[cpp-lire-un-programme|Lire un programme C++]] — la fiche jumelle côté Arduino
- [[micropython-debug|Déboguer en MicroPython]] — l'étape d'après : un comportement est faux, trouver pourquoi
- [[revue-de-code|Revue de code]] — la routine collective qui s'appuie sur cette lecture
- [[micropython-programmation-non-bloquante|Programmation non bloquante]] — le programme lu en exemple ci-dessus


---

