---
title: Gérer la mémoire sur Arduino
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
  - memoire
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Gérer la **mémoire** sur Arduino, c'est composer avec une ressource rare : un microcontrôleur a très peu de mémoire vive (2 Ko de [[memoire|SRAM]] sur une Uno). Comprendre **quelle mémoire stocke quoi** — la Flash le programme, la SRAM les variables, l'EEPROM les données persistantes — et savoir **déporter les constantes vers la Flash** (macro `F()`, `PROGMEM`) évite les plantages silencieux par saturation de RAM, l'un des bugs les plus déroutants du débutant.

## À quoi ça sert ?

Sur un PC, la mémoire semble infinie ; sur un microcontrôleur, elle est comptée. Un sketch qui multiplie les variables, accumule des chaînes de caractères ou embarque de gros tableaux peut épuiser la SRAM — et le symptôme est traître : pas de message d'erreur, juste un programme qui **redémarre tout seul, se fige ou se comporte n'importe comment**. Savoir où va la mémoire et comment l'économiser est donc une compétence de survie dès qu'un projet grossit. L'enjeu se pose en [[preuve-de-concept|preuve de concept]], quand le code dépasse le sketch d'exemple et commence à manquer de place.

## Procédure pas à pas

Quatre étapes : distinguer les trois mémoires, comprendre où vivent les variables, économiser la RAM, et la mesurer.

### 1. Distinguer les trois mémoires

Un AVR (ATmega328P de l'Uno) sépare trois espaces aux rôles distincts :

- **Flash (32 Ko)** — la mémoire de **programme** : elle contient le code téléversé. Vaste, mais en lecture seule à l'exécution. On peut y ranger des **constantes**.
- **SRAM (2 Ko)** — la mémoire **vive** : elle contient les variables manipulées pendant l'exécution. **Petite et précieuse** — c'est elle qui sature.
- **EEPROM (1 Ko)** — la mémoire **persistante** : elle conserve quelques données après extinction (réglages, calibration), via [[arduino-eeprom|son tuto dédié]].

La règle de fond : **la SRAM est la ressource critique**, et tout ce qui peut en sortir doit en sortir.

### 2. Comprendre où vivent les variables en SRAM

La SRAM se partage en trois zones :

- les **variables globales et statiques**, placées en bas, occupent une part fixe dès le démarrage ;
- la **pile** (*stack*), qui grandit vers le bas, stocke les variables **locales** et les appels de fonctions ;
- le **tas** (*heap*), qui grandit vers le haut, sert à l'allocation **dynamique** (les chaînes `String`, le `new`).

Pile et tas grandissent **l'un vers l'autre** dans le même petit espace : s'ils se rejoignent, c'est le plantage. Les détails du langage (pointeurs, allocation) relèvent des bases du [[cpp|C++]] ; ici, l'essentiel est de savoir que **chaque variable a un coût** et que le tas est le plus risqué.

### 3. Économiser la RAM : `F()` et `PROGMEM`

Le gaspillage le plus courant : les **chaînes de caractères** littérales. Par défaut, `Serial.println("texte")` **copie le texte en SRAM** au démarrage. La macro `F()` le **laisse en Flash** :

```cpp
Serial.println(F("Ce texte reste en Flash, il ne mange pas la SRAM"));
```

Pour des **données constantes volumineuses** (tables de correspondance, polices, sons), `PROGMEM` les range en Flash, lues à la demande. Et côté texte dynamique, **préférer les tableaux de caractères de taille fixe (`char[]`) aux `String`** : les `String` allouent sur le tas et le **fragmentent** (voir pièges).

### 4. Mesurer la RAM libre

On ne devine pas la saturation, on la **mesure**. Une fonction `freeMemory()` (ou la bibliothèque MemoryFree) renvoie l'espace restant entre la pile et le tas. L'imprimer permet de surveiller la marge et de repérer une fuite.

```cpp
// (freeMemory() fourni par la bibliothèque MemoryFree)
Serial.print(F("RAM libre : "));
Serial.println(freeMemory());
```

Prendre capture d'écran de *le moniteur série affichant la RAM libre en octets, et sa diminution au fil des allocations*.

## Exemple — Diagnostiquer un plantage par saturation

Un sketch affiche des messages et concatène des `String`. Au bout d'un moment, il redémarre sans raison apparente. Le coupable : la SRAM épuisée par les chaînes.

```cpp
// AVANT — gaspille et fragmente la SRAM
void afficher(int n) {
  String message = "Mesure numero ";   // alloue sur le tas
  message += n;                          // réalloue, fragmente
  message += " : OK";                    // encore
  Serial.println(message);
}
```

Réécrit pour garder les textes en Flash et éviter le tas :

```cpp
// APRES — textes en Flash, pas d'allocation dynamique
void afficher(int n) {
  Serial.print(F("Mesure numero "));     // en Flash
  Serial.print(n);
  Serial.println(F(" : OK"));            // en Flash
}
```

La seconde version ne touche pas au tas : aucune fragmentation, aucune copie de texte en SRAM. Sur un sketch qui affiche souvent, l'écart de RAM libre est spectaculaire — et le redémarrage mystérieux disparaît. La démarche générale : **mesurer** la RAM libre, repérer les `String` et les longs textes, les remplacer par `F()` et des `char[]`.

## Pièges

**La classe `String` qui fragmente le tas.** Concaténer des `String` alloue et réalloue sans cesse, laissant des « trous » dans le tas (fragmentation). Avec si peu de SRAM, c'est la cause n°1 de plantages erratiques. Préférer les `char[]` de taille fixe et les fonctions de chaîne C, ou réserver les `String` à un usage très limité.

**Oublier `F()` sur les textes.** Chaque chaîne littérale sans `F()` mange de la SRAM inutilement. Sur un programme bavard, des centaines d'octets partent en fumée pour rien.

**De gros tableaux en variables globales.** Un tableau de quelques centaines d'entiers en SRAM, et la marge fond. S'il est **constant**, le ranger en `PROGMEM` (Flash) ; sinon, repenser le besoin.

**La récursion ou les grosses variables locales.** La pile est minuscule : une fonction récursive profonde ou un gros tableau local peut la faire mordre sur le tas. Éviter la récursion non bornée sur AVR.

**Variable de temps en `int` au lieu d'`unsigned long`.** Au-delà de la mémoire, un mauvais type provoque des débordements (voir [[arduino-temporisation|temporisation]]) — le bon dimensionnement des types fait aussi partie de la gestion mémoire.

**Confondre Flash pleine et SRAM pleine.** Le compilateur annonce deux chiffres : l'espace **programme** (Flash) et la **mémoire dynamique** (SRAM). Un programme peut tenir en Flash mais manquer de SRAM à l'exécution — c'est ce second chiffre qu'il faut surveiller.

## Cas particulier — Lire le rapport de compilation

Après chaque téléversement, l'IDE affiche deux lignes : combien de Flash le programme occupe, et combien de SRAM les **variables globales** réservent (avec la RAM restante pour la pile et le tas). Ce rapport est le premier réflexe de diagnostic : si la SRAM annoncée frôle déjà la limite **avant même** l'allocation dynamique, le plantage est quasi assuré dès que le programme tourne. Le surveiller à chaque build évite de découvrir le problème trop tard.

## Raccrochage projet

- **[[preuve-de-concept|Phase de preuve de concept]]** — dès que le code dépasse l'exemple (plusieurs capteurs, affichage, journalisation), surveiller la RAM et adopter `F()`/`PROGMEM` avant de heurter le mur de la SRAM.
- **[[integration-et-tests|Phase d'intégration et tests]]** — l'intégration de plusieurs fonctions cumule leurs besoins mémoire ; un budget RAM tenu fonction par fonction évite les plantages qui n'apparaissent qu'une fois tout assemblé.

Anticiper la mémoire évite la situation la plus pénible en embarqué : un programme qui marchait, qui plante après l'ajout d'une fonctionnalité, sans message — et qu'on traque pendant des heures faute d'avoir regardé la RAM libre.

## Voir aussi

- [[memoire|Mémoire]] — la notion : les types de mémoire d'un microcontrôleur
- [[arduino-eeprom|Stockage EEPROM]] — conserver des données après extinction
- [[cpp|Le langage C++]] — pointeurs, types et allocation, à la racine de la gestion mémoire (transverse)
- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[processeur|Processeur]] — le cœur qui accède à ces mémoires
