---
title: Lire et comprendre les erreurs
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-execution
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Quand un programme refuse de compiler ou de se téléverser, l'IDE affiche un **message d'erreur**. Au premier regard il paraît cryptique, mais il suit une logique : il indique le **fichier**, la **ligne**, et la **nature** du problème. Apprendre à le lire, c'est gagner son **autonomie** — se dépanner seul plutôt que rester bloqué, ou recopier l'erreur dans un moteur de recherche sans la comprendre. La grande majorité des erreurs d'un débutant se ramène à quatre ou cinq types récurrents.

> [!note]
> **Quelle carte ?** Les messages cités ici sont ceux de la chaîne de compilation **Arduino AVR** (Uno, Mega, Nano) telle qu'affichée par l'IDE 2.x. Sur ESP32 ou Teensy, les messages d'erreur du langage sont **très proches** (même compilateur de la famille GCC), mais ceux liés au téléversement diffèrent. Le réflexe de lecture, lui, est le même partout.

## À quoi ça sert ?

Bloquer sur une erreur fait perdre un temps fou quand on ne sait pas la lire — et en débloquer une, c'est presque toujours la même poignée de causes. Savoir **où** regarder (le numéro de ligne), **par quoi** commencer (la première erreur, pas la dernière) et **à quoi** correspondent les messages courants transforme un mur en simple checklist.

## Compilation ou téléversement : deux familles

On l'a vu dans [[cpp-execution|comment s'exécute un programme]] : compiler et téléverser sont deux étapes distinctes, donc **deux familles d'erreurs**.

- **Erreur de compilation** : la traduction du code en binaire échoue. C'est un problème de **code** (syntaxe, nom, type). Le message vient du *compilateur*.
- **Erreur de téléversement** : le code a compilé, mais l'envoi à la carte échoue. C'est un problème de **liaison** (port, câble, carte). Le message vient de l'outil d'envoi (*avrdude* sur AVR).

Savoir à quelle famille on a affaire oriente déjà le dépannage : relire le code, ou vérifier le branchement.

## Anatomie d'un message de compilation

Un message d'erreur de compilation a une forme régulière :

```
sketch.ino: In function 'void loop()':
sketch.ino:7:16: error: 'led' was not declared in this scope
    7 |   digitalWrite(led, HIGH);
      |                ^~~
```

On y lit, dans l'ordre : le **fichier** et la **fonction** concernés (`loop()`), puis `fichier:ligne:colonne` (ici **ligne 7, colonne 16**), le mot **`error:`**, la **description**, et la ligne de code fautive recopiée avec son numéro dans une gouttière — le `^` désigne le mot exact qui pose problème, ici `led` et non l'appel de fonction. Deux réflexes :

- **commencer par la PREMIÈRE erreur.** Une faute en entraîne souvent d'autres en cascade ; corrigez la première, recompilez, et les suivantes disparaissent fréquemment ;
- **aller voir la ligne indiquée** — en gardant en tête que certaines erreurs (comme un `;` manquant) sont signalées sur la ligne **suivante**.

> [!tip]
> **Ne recopiez pas le message à la main.** Quand la compilation échoue, l'IDE 2.x affiche une notification en bas à droite avec un bouton **COPY ERROR MESSAGES** : un clic met tout le message dans le presse-papier, prêt à coller dans un moteur de recherche ou dans une question à un camarade.
>
> Au passage, remarquez que le même message apparaît **trois fois** — détaillé dans le panneau *Output*, résumé sur sa dernière ligne, et repris dans la notification. C'est **une seule** erreur, pas trois.

![Panneau Output de l'IDE Arduino 2.x en bas de la fenêtre, affichant en rouge une erreur de compilation détaillée sur plusieurs lignes, et en bas à droite une notification portant un bouton COPY ERROR MESSAGES.|640](/ressources/img/cpp-logs/panneau-erreur.png)

## Les erreurs de compilation les plus fréquentes

**`expected ';' before ...`** — un point-virgule manque, presque toujours à la **ligne précédant** celle indiquée.

**`'xxx' was not declared in this scope`** — un nom (variable, fonction) est utilisé sans avoir été déclaré : faute de frappe, `#include` oublié, variable déclarée plus bas, ou variable locale utilisée hors de sa portée (voir [[cpp-portee|variables locales et globales]]).

**`fatal error: xxx.h: No such file or directory`** — un fichier d'en-tête est introuvable : bibliothèque non installée, nom mal orthographié, ou **dépendance manquante** d'une bibliothèque installée (voir [[arduino-bibliotheques|utiliser une bibliothèque]]). Le mot `fatal` signifie que la compilation **s'arrête immédiatement** : contrairement aux autres, cette erreur ne vient jamais en cascade — elle est seule, et c'est la seule à traiter.

**`expected '}' at end of input`** — une accolade ouvrante n'a jamais été fermée. Vérifier l'équilibre des `{ }` (l'auto-indentation de l'IDE, *Ctrl+T*, aide à les repérer).

**`redefinition of 'xxx'`** — la même variable est déclarée deux fois dans la même portée.

**`invalid conversion from ... to ...`** — un type incompatible est passé là où un autre est attendu (voir [[cpp-types|le typage des variables]]).

> [!tip]
> **Warning ≠ error.** Le compilateur distingue les **avertissements** (`warning:`) des **erreurs** (`error:`). Un *warning* signale quelque chose de suspect mais **n'empêche pas** de compiler et téléverser (ex. une variable déclarée mais jamais utilisée). Une *error* bloque. Ne pas confondre les deux : on peut ignorer un warning le temps d'avancer, jamais une error.

## Les erreurs de téléversement fréquentes

**`avrdude: stk500_recv(): programmer is not responding`** — la carte n'a pas répondu : mauvais **port** sélectionné, **câble** *charge only*, ou carte non reconnue. Voir le dépannage de la [[arduino-prise-en-main|prise en main]].

**Port occupé / verrouillé** — une autre application (un moniteur série resté ouvert ailleurs, PlatformIO) tient le port : fermer l'autre fenêtre et retenter.

## Messages à décoder

Plutôt qu'un sketch à lire, voici trois **erreurs réelles** à diagnostiquer — le code, le message tel que l'IDE l'affiche, la lecture.

**Cas 1 — le point-virgule oublié.** Le code :

```cpp
void setup() {
  pinMode(2, OUTPUT);
}

void loop() {
  digitalWrite(2, HIGH)
  delay(1000);
  digitalWrite(2, LOW);
  delay(1000);
}
```

Le message :

```
Blink.ino: In function 'void loop()':
Blink.ino:6:24: error: expected ';' before 'delay'
    6 |   digitalWrite(2, HIGH)
      |                        ^
      |                        ;
    7 |   delay(1000);
      |   ~~~~~
exit status 1

Compilation error: expected ';' before 'delay'
```

Lecture : l'erreur est signalée **ligne 6, colonne 24** — et la colonne 24, c'est le caractère qui suit immédiatement la parenthèse fermante. Le compilateur désigne **le vide**, là où il attendait quelque chose. Il va même jusqu'à dessiner le `;` manquant sur la ligne du dessous. Le `~~~~~` sous `delay` désigne le mot qui l'a fait trébucher : il a lu `digitalWrite(2, HIGH)` puis `delay`, sans le séparateur entre les deux. C'est le piège classique du point-virgule — **la faute est à la fin de la ligne précédente**, même quand le message désigne la suivante.

**Cas 2 — la variable hors de sa portée.** Le code :

```cpp
void setup() {
int my_age = 18;
Serial.begin(115200);

}
void loop() {
Serial.print(my_age);
}
```

Le message :

```
Blink.ino: In function 'void loop()':
Blink.ino:7:14: error: 'my_age' was not declared in this scope
    7 | Serial.print(my_age);
      |              ^~~~~~
exit status 1

Compilation error: 'my_age' was not declared in this scope
```

Lecture : `my_age` **existe**, il est déclaré ligne 2 — et pourtant le compilateur dit qu'il n'existe pas. C'est le piège : il est déclaré **à l'intérieur de `setup()`**, donc il naît et meurt avec elle. Arrivé dans `loop()`, le compilateur ne le connaît plus. Le message ne ment pas : *dans cette portée*, le nom n'est pas déclaré. Correction : sortir `int my_age = 18;` des accolades, au-dessus de `setup()`, pour en faire une variable **globale** — voir [[cpp-portee|variables locales et globales]].

C'est l'erreur à la lecture la plus trompeuse du lot, parce que la variable est sous vos yeux dans le fichier. Le réflexe : ne pas chercher *si* le nom existe, mais **dans quel bloc** il a été écrit.

**Cas 3 — l'erreur qui n'est pas dans votre fichier.** Le code :

```cpp
#include <Adafruit_BMP280.h>
void setup() {}
void loop() {}
```

Le message :

```
In file included from Blink.ino:1:
...\libraries\Adafruit_BMP280_Library/Adafruit_BMP280.h:26:10: fatal error: Adafruit_Sensor.h: No such file or directory
   26 | #include <Adafruit_Sensor.h>
      |          ^~~~~~~~~~~~~~~~~~~
compilation terminated.
```

Lecture : trois lignes de code, et le message désigne une **ligne 26** qui n'existe pas chez vous. Le `In file included from` est la clé — il déroule la chaîne : votre sketch inclut `Adafruit_BMP280.h`, qui à sa ligne 26 inclut `Adafruit_Sensor.h`, introuvable. La bibliothèque a bien été installée, mais **pas sa dépendance** (voir [[arduino-bibliotheques|utiliser une bibliothèque]]). Rien à corriger dans le sketch : il faut réinstaller la bibliothèque en acceptant *Install all*.

La leçon dépasse ce cas : **le fichier nommé par une erreur n'est pas forcément le vôtre.** Avant de chercher une faute dans votre code, lisez le chemin.

## Pièges

**Se jeter sur la dernière erreur.** Quand la liste est longue, c'est la **première** qu'il faut lire : les suivantes en découlent souvent et s'évaporent une fois la première corrigée.

**Corriger au hasard.** Modifier sans avoir lu le message ni la ligne mène à empiler de nouvelles fautes. Lire d'abord, comprendre, puis corriger.

**Ignorer le numéro de ligne.** Le message dit *où* : `fichier:ligne`. C'est l'information la plus utile, à condition de se rappeler que le `;` manquant pointe la ligne d'après.

**Confondre warning et error.** Voir l'encart : un *warning* n'empêche pas de téléverser, une *error* si.

## Exercices

> [!question] Exercice 1 — Où est la faute ?
> Le compilateur affiche `sketch.ino:3:3: error: expected ';' before 'delay'`. Voici le code. Quelle ligne corriger, et comment ?
> ```cpp
> void loop() {
>   int etat = digitalRead(2)
>   delay(10);
>   digitalWrite(13, etat);
> }
> ```

> [!success]- Corrigé de l'exercice 1
> Le message pointe la ligne 3 (`delay`), mais la faute est à la **ligne 2** : il manque le `;` après `digitalRead(2)`. Le compilateur ne s'en aperçoit qu'en arrivant au token suivant — d'où le signalement une ligne plus bas. Correction : `int etat = digitalRead(2);`.

> [!question] Exercice 2 — Le nom inconnu
> Message : `error: 'tempo' was not declared in this scope`. Donnez **trois** causes possibles et la correction de chacune.

> [!success]- Corrigé de l'exercice 2
> 1. **Variable jamais déclarée** → l'ajouter, p. ex. `int tempo = 500;` dans les déclarations globales ou la fonction.
> 2. **Faute de frappe** → on a déclaré `tempo` mais écrit `Tempo` (ou l'inverse) ; le C++ distingue les majuscules. Aligner l'orthographe.
> 3. **Variable hors de sa portée** → `tempo` est une variable **locale** d'une autre fonction, utilisée ici où elle n'existe pas (voir [[cpp-portee|portée]]). La déclarer au bon niveau (globale si elle doit être partagée).

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — au premier sketch un peu long, les erreurs de compilation sont inévitables ; savoir les lire est ce qui fait la différence entre avancer seul et rester bloqué.
- **[[integration-et-tests|Phase d'intégration et tests]]** — quand les sous-ensembles s'assemblent, les erreurs se multiplient ; une lecture méthodique des messages fait gagner un temps considérable.

## Voir aussi

- [[cpp|C++]] — hub d'apprentissage du langage
- [[cpp-execution|Exécution d'un programme]] — compilation et téléversement, les deux familles d'erreurs
- [[arduino-prise-en-main|Prise en main d'Arduino]] — le dépannage du téléversement (carte non reconnue)
- [[arduino-debug|Débugger un programme]] — au-delà des erreurs de compilation, traquer les bugs d'exécution
- [[cpp-portee|Variables locales et globales]] — la portée, source fréquente des « not declared in this scope »
