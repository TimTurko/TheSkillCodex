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
sketch.ino:7:3: error: 'led' was not declared in this scope
   digitalWrite(led, HIGH);
   ^~~~~~~~~~~~
```

On y lit, dans l'ordre : le **fichier** et la **fonction** concernés (`loop()`), puis `fichier:ligne:colonne` (ici **ligne 7**), le mot **`error:`**, la **description**, et souvent la ligne de code fautive avec un `^` qui pointe l'endroit. Deux réflexes :

- **commencer par la PREMIÈRE erreur.** Une faute en entraîne souvent d'autres en cascade ; corrigez la première, recompilez, et les suivantes disparaissent fréquemment ;
- **aller voir la ligne indiquée** — en gardant en tête que certaines erreurs (comme un `;` manquant) sont signalées sur la ligne **suivante**.

## Les erreurs de compilation les plus fréquentes

**`expected ';' before ...`** — un point-virgule manque, presque toujours à la **ligne précédant** celle indiquée.

**`'xxx' was not declared in this scope`** — un nom (variable, fonction) est utilisé sans avoir été déclaré : faute de frappe, `#include` oublié, variable déclarée plus bas, ou variable locale utilisée hors de sa portée (voir [[cpp-portee|variables locales et globales]]).

**`expected '}' at end of input`** — une accolade ouvrante n'a jamais été fermée. Vérifier l'équilibre des `{ }` (l'auto-indentation de l'IDE, *Ctrl+T*, aide à les repérer).

**`redefinition of 'xxx'`** — la même variable est déclarée deux fois dans la même portée.

**`invalid conversion from ... to ...`** — un type incompatible est passé là où un autre est attendu (voir [[cpp-types|le typage des variables]]).

> [!tip]
> **Warning ≠ error.** Le compilateur distingue les **avertissements** (`warning:`) des **erreurs** (`error:`). Un *warning* signale quelque chose de suspect mais **n'empêche pas** de compiler et téléverser (ex. une variable déclarée mais jamais utilisée). Une *error* bloque. Ne pas confondre les deux : on peut ignorer un warning le temps d'avancer, jamais une error.

## Les erreurs de téléversement fréquentes

**`avrdude: stk500_recv(): programmer is not responding`** — la carte n'a pas répondu : mauvais **port** sélectionné, **câble** *charge only*, ou carte non reconnue. Voir le dépannage de la [[arduino-prise-en-main|prise en main]].

**Port occupé / verrouillé** — une autre application (un moniteur série resté ouvert ailleurs, PlatformIO) tient le port : fermer l'autre fenêtre et retenter.

## Messages à décoder

Plutôt qu'un sketch à lire, voici deux **erreurs réelles** à diagnostiquer — le code, le message, la lecture.

**Cas 1.** Le code :

```cpp
void setup() {
  int x = 5            // ← rien ici
  Serial.begin(9600);
}
```

Le message :

```
sketch.ino:3:3: error: expected ';' before 'Serial'
```

Lecture : l'erreur est signalée **ligne 3** (`Serial`), mais la cause est **ligne 2** — il manque le `;` après `int x = 5`. C'est le piège classique du point-virgule : la faute est sur la ligne *précédant* celle qu'indique le message.

**Cas 2.** Le code :

```cpp
void loop() {
  digitalWrite(led, HIGH);
}
```

Le message :

```
sketch.ino:2:16: error: 'led' was not declared in this scope
```

Lecture : `led` est utilisé mais jamais déclaré. Soit on a oublié `const int led = 13;` dans les déclarations globales, soit c'est une faute de frappe (`LED` au lieu de `led` ?). Correction : déclarer la variable, ou corriger le nom.

## Pièges

**Se jeter sur la dernière erreur.** Quand la liste est longue, c'est la **première** qu'il faut lire : les suivantes en découlent souvent et s'évaporent une fois la première corrigée.

**Corriger au hasard.** Modifier sans avoir lu le message ni la ligne mène à empiler de nouvelles fautes. Lire d'abord, comprendre, puis corriger.

**Ignorer le numéro de ligne.** Le message dit *où* : `fichier:ligne`. C'est l'information la plus utile, à condition de se rappeler que le `;` manquant pointe la ligne d'après.

**Confondre warning et error.** Voir l'encart : un *warning* n'empêche pas de téléverser, une *error* si.

## Exercices

> [!question] Exercice 1 — Où est la faute ?
> Le compilateur affiche `sketch.ino:4:3: error: expected ';' before 'digitalWrite'`. Voici le code. Quelle ligne corriger, et comment ?
> ```cpp
> void loop() {
>   int etat = digitalRead(2)
>   delay(10);
>   digitalWrite(13, etat);
> }
> ```
>
> > [!success]- Corrigé
> > Le message pointe la ligne 4, mais la faute est à la **ligne 2** : il manque le `;` après `digitalRead(2)`. Le compilateur ne s'en aperçoit qu'en arrivant au token suivant. Correction : `int etat = digitalRead(2);`. *(Le message indiquait `delay` ou `digitalWrite` selon la mise en page exacte — l'idée reste : remonter d'une ligne.)*

> [!question] Exercice 2 — Le nom inconnu
> Message : `error: 'tempo' was not declared in this scope`. Donnez **trois** causes possibles et la correction de chacune.
>
> > [!success]- Corrigé
> > 1. **Variable jamais déclarée** → l'ajouter, p. ex. `int tempo = 500;` dans les déclarations globales ou la fonction.
> > 2. **Faute de frappe** → on a déclaré `tempo` mais écrit `Tempo` (ou l'inverse) ; le C++ distingue les majuscules. Aligner l'orthographe.
> > 3. **Variable hors de sa portée** → `tempo` est une variable **locale** d'une autre fonction, utilisée ici où elle n'existe pas (voir [[cpp-portee|portée]]). La déclarer au bon niveau (globale si elle doit être partagée).

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — au premier sketch un peu long, les erreurs de compilation sont inévitables ; savoir les lire est ce qui fait la différence entre avancer seul et rester bloqué.
- **[[integration-et-tests|Phase d'intégration et tests]]** — quand les sous-ensembles s'assemblent, les erreurs se multiplient ; une lecture méthodique des messages fait gagner un temps considérable.

## Voir aussi

- [[cpp|C++]] — hub d'apprentissage du langage
- [[cpp-execution|Exécution d'un programme]] — compilation et téléversement, les deux familles d'erreurs
- [[arduino-prise-en-main|Prise en main d'Arduino]] — le dépannage du téléversement (carte non reconnue)
- [[arduino-debug|Débugger un programme]] — au-delà des erreurs de compilation, traquer les bugs d'exécution
- [[cpp-portee|Variables locales et globales]] — la portée, source fréquente des « not declared in this scope »
