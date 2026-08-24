---
title: Manipulation de bits
type: notion
phases:
  - preuve-de-concept
tags:
  - eee
  - notion
prerequis:
  - cpp
aa: [RA-PROJET-C03-3/PROJ/5]
draft: false
---

La **manipulation de bits** consiste à lire et modifier les bits **individuels** d'un nombre, à l'aide des opérateurs bit-à-bit (`& | ^ ~ << >>`). C'est la technique de base pour parler directement au matériel d'un microcontrôleur — activer une broche, configurer un [[timer|timer]], régler un périphérique — là où chaque bit d'un **registre** commande une fonction précise. Quatre idiomes suffisent au quotidien : mettre un bit à 1, le mettre à 0, le basculer, le tester.

## À quoi ça sert ?

En embarqué, une grande partie des réglages d'un microcontrôleur tient dans des **registres** : des octets où **chaque bit commande une fonction** distincte. Pour changer *un* réglage sans perturber les autres, il faut agir sur *son* bit seulement. C'est précisément ce que permet le masquage. Sans cette technique, on écrase un réglage en voulant en changer un autre.

Deux autres usages reviennent souvent :

- **économiser la mémoire** — ranger huit booléens dans un seul octet plutôt que dans huit variables, ce qui compte quand la [[memoire|SRAM]] est minuscule ;
- **comprendre le code « sous le capot »** — les bibliothèques masquent les registres, mais lire ou ajuster finement un périphérique oblige à y revenir.

On y touche en [[preuve-de-concept|preuve de concept]], dès qu'on configure un périphérique au-delà de ce qu'une bibliothèque expose.

## Comment manipuler les bits

**Le rappel binaire.** Un octet, ce sont 8 bits numérotés de 0 (poids faible, à droite) à 7. En [[cpp|C++]], le préfixe `0b` écrit un nombre en binaire (`0b00101101`). L'expression `1 << n` décale un `1` de `n` positions vers la gauche : elle fabrique un **masque** qui isole exactement le bit `n`. *Les mêmes opérateurs existent à l'identique en MicroPython, où les idiomes ci-dessous se transposent mot pour mot.*

**Les opérateurs.** Chacun a un rôle dédié :

- `&` (ET) — 1 seulement si les deux bits valent 1 → sert à **tester** et à **effacer** ;
- `|` (OU) — 1 si au moins un bit vaut 1 → sert à **mettre à 1** ;
- `^` (OU exclusif) — 1 si les bits diffèrent → sert à **basculer** ;
- `~` (NON) — inverse tous les bits → sert à fabriquer un **masque inverse** ;
- `<<` et `>>` — décalent les bits → fabriquent un masque, ou multiplient/divisent par deux.

**Les quatre idiomes.** Tout se ramène à ces quatre gestes, où `n` est le numéro du bit visé :

```cpp
byte r = 0b00101001;

r |=  (1 << n);          // mettre le bit n à 1
r &= ~(1 << n);          // mettre le bit n à 0
r ^=  (1 << n);          // basculer le bit n
bool actif = r & (1 << n);   // tester le bit n (non nul si à 1)
```

Le masquage agit **sur le seul bit visé**, les autres restent intacts :

```text
  valeur         0b0010 1001
  masque         0b0000 0100     (1 << 2)
  valeur | masque  0b0010 1101     -> le bit 2 passe de 0 à 1
```

![Opération de masquage OU : la valeur 0b00101001 combinée par OU avec le masque 0b00000100 (bit 2) donne 0b00101101 ; seul le bit 2 passe de 0 à 1, les sept autres restent intacts. En pied, les quatre idiomes : | mettre à 1, &~ mettre à 0, ^ basculer, & tester.](/ressources/img/manipulation-de-bits/masquage.svg)

## Exemple — Huit drapeaux dans un octet

Plutôt que huit variables `bool` (huit octets), on range huit états dans un seul octet, un bit par état. Des constantes nommées rendent le code lisible malgré la mécanique binaire.

```cpp
const byte CAPTEUR_OK = 0;     // bit 0
const byte MOTEUR_ON  = 1;     // bit 1
const byte ERREUR     = 2;     // bit 2

byte etats = 0;                // tous les drapeaux à 0 au départ

etats |=  (1 << MOTEUR_ON);    // le moteur démarre   -> bit 1 à 1
etats &= ~(1 << CAPTEUR_OK);   // le capteur lâche    -> bit 0 à 0

if (etats & (1 << ERREUR)) {   // une erreur est-elle levée ?
  // ... traiter l'erreur
}
```

Le même octet porte huit informations indépendantes, chacune modifiable sans toucher aux autres. C'est le principe exact d'un registre matériel, à ceci près qu'ici, c'est nous qui décidons du sens de chaque bit.

## Cas particulier — Les registres d'un microcontrôleur

C'est l'usage le plus fréquent en projet. Chaque périphérique (timer, port d'E/S, liaison série) se configure via des registres dont **chaque bit active une fonction**. L'idiome « mettre à 1 » s'y applique directement :

```cpp
TCCR1B |= (1 << WGM12);   // active le mode CTC du Timer1, sans toucher aux autres bits
```

`WGM12` n'est qu'un **nom** donné à un numéro de bit (défini par les en-têtes de la puce). On écrit `|=` et non `=` pour ne modifier que ce bit : un simple `=` écraserait tous les autres réglages du registre. La correspondance *quel bit commande quelle fonction* se lit dans la [[lire-une-datasheet|datasheet]] du microcontrôleur. Cet exemple est **spécifique à l'AVR** (ATmega328P de l'Uno). Un autre microcontrôleur a d'autres registres, mais la **technique est identique**. En projet, une bibliothèque suffit presque toujours (voir [[arduino-timers|timers sur Arduino]]). Ce niveau ne sert qu'au réglage fin ou pour relire un code existant.

## Pièges

**Confondre `&` / `|` (bit-à-bit) et `&&` / `||` (logiques).** Les premiers agissent sur chaque bit, les seconds sur des conditions vraies/fausses. Les intervertir produit un résultat faux qui compile sans erreur.

**Oublier les parenthèses.** Les opérateurs bit-à-bit ont une priorité plus basse que `==` : `x & 1 == 0` est interprété comme `x & (1 == 0)`. Toujours parenthéser : `(x & 1) == 0`.

**Effacer un bit sans le `~`.** `r &= (1 << n)` n'efface pas le bit `n`. Il efface **tous les autres**. Le masque d'effacement est l'inverse : `r &= ~(1 << n)`.

**Écraser un registre avec `=`.** `TCCR1B = (1 << WGM12)` remet à zéro tous les autres bits du registre. Pour ne toucher qu'un bit, c'est `|=` (mettre à 1) ou `&= ~` (mettre à 0).

**Décalage qui déborde le type.** `1 << 20` déborde si `1` est un `int` 16 bits (AVR) : la constante hérite du type `int`. Forcer un type assez large avec `1UL << 20`.

## Voir aussi

- [[cpp|Le langage C++]] — les opérateurs et les types, socle de la manipulation de bits
- [[ascii|Code ASCII]] — un caractère est un octet : sa valeur est son code
- [[timer|Timer]] · [[arduino-timers|Timers sur Arduino]] — l'application directe : configurer un timer par ses registres
- [[lire-une-datasheet|Lire une datasheet]] — la cartographie des registres : quel bit commande quelle fonction
- [[gpio|GPIO]] · [[entree-sortie|Entrées-sorties]] — les registres de port qui pilotent les broches
- [[microcontroleur|Microcontrôleur]] — où vivent les registres
