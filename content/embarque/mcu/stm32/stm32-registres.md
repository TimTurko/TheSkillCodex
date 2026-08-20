---
title: Descendre au registre sur STM32
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - stm32
prerequis:
  - stm32
  - stm32-hal
  - manipulation-de-bits
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

**Descendre au registre**, c'est piloter le STM32 en écrivant directement dans ses **registres matériels** (`GPIOA->ODR`, `RCC->AHB1ENR`…), sous la [[stm32-hal|HAL]] et la LL. C'est le niveau le plus bas accessible en C, celui que la HAL masque : on y gagne en **performance, en déterminisme et en compréhension**, on y perd en confort et en portabilité. C'est aussi le terrain d'application direct de la [[manipulation-de-bits|manipulation de bits]] — masques, décalages, `|=`, `&= ~`, `^=` deviennent ici concrets. On y va par besoin, pas par principe.

## À quoi ça sert ?

La HAL suffit pour l'essentiel d'un projet. Quatre raisons justifient de descendre plus bas :

- **Performance.** Basculer une broche par registre prend quelques cycles, là où la HAL en prend beaucoup plus (vérifications, indirection par handle). Pour une boucle serrée ou un signal rapide, l'écart compte.
- **Déterminisme.** Un accès registre a une durée connue et stable — précieux pour du temps réel fin.
- **Empreinte mémoire.** Sans le code de la HAL, le binaire est plus petit — utile sur les puces à très peu de Flash.
- **Comprendre et débloquer.** Lire ce que fait réellement la HAL aide à déboguer ; et quand un réglage matériel n'est pas exposé par la HAL, le registre reste le seul accès.

Le revers : le code registre est **spécifique à la puce** (il ne se transpose pas tel quel d'une F4 à une G0) et **moins lisible**. C'est un outil ciblé, pas un mode de vie.

## Les registres via CMSIS

On n'écrit pas des adresses mémoire en dur. **CMSIS** (la couche standard ARM, fournie par ST) définit des **en-têtes** (`stm32f4xx.h` et consorts) qui décrivent chaque périphérique comme une **structure** pointant sur ses registres. Écrire `GPIOA->ODR` revient à accéder au registre de sortie du port A, à la bonne adresse, sans la connaître. Ces structures sont déclarées **`volatile`** : le compilateur ne doit ni supprimer ni réordonner ces accès (un registre peut changer « tout seul », côté matériel).

CMSIS fournit aussi des **macros de bits nommées** — `RCC_AHB1ENR_GPIOAEN`, `GPIO_MODER_MODE5_0`, `GPIO_BSRR_BS5`… — qu'on utilise **à la place des nombres magiques**. C'est exactement la discipline de la [[manipulation-de-bits|manipulation de bits]] : un masque nommé vaut mieux qu'un `0x00000400` illisible.

> [!info]
> Les noms exacts des macros dépendent de la **famille** et de la **version** de l'en-tête CMSIS (`GPIO_MODER_MODE5_0` sur les versions récentes, parfois `GPIO_MODER_MODER5_0` sur d'anciennes). En cas de doute, ouvrir l'en-tête de sa puce (`Ctrl+clic` sur le nom dans CubeIDE) pour vérifier l'orthographe et le champ visé.

## L'exemple canonique — le blink bare-metal

Faire clignoter LD2 (broche `PA5`) **sans la HAL**, registre par registre, est le « Hello World » du bas niveau. Trois gestes :

```c
/* USER CODE BEGIN 3 */
// 1. Alimenter l'horloge du port A  (sinon, tout écrit dans GPIOA est ignoré !)
RCC->AHB1ENR |= RCC_AHB1ENR_GPIOAEN;

// 2. Configurer PA5 en sortie : champ MODE5 = 01
GPIOA->MODER &= ~GPIO_MODER_MODE5;     // effacer les 2 bits du champ
GPIOA->MODER |=  GPIO_MODER_MODE5_0;   // poser le bit de poids faible -> 01 = sortie

// 3. Faire clignoter via BSRR (atomique)
while (1) {
  GPIOA->BSRR = GPIO_BSRR_BS5;         // mettre PA5 à 1
  for (volatile int i = 0; i < 800000; i++);   // délai grossier
  GPIOA->BSRR = GPIO_BSRR_BR5;         // remettre PA5 à 0
  for (volatile int i = 0; i < 800000; i++);
}
/* USER CODE END 3 */
```

On reconnaît la grammaire de la [[manipulation-de-bits|manipulation de bits]] : `|=` pour poser un bit, `&= ~` pour en effacer, des masques nommés partout. Comparé à l'unique `HAL_GPIO_TogglePin(LD2_GPIO_Port, LD2_Pin)` de la HAL, c'est plus long — mais on voit **exactement** ce que le matériel fait. La boucle `for` à compteur `volatile` est un délai rudimentaire (à proscrire en vrai code, où l'on utilise un [[timer|timer]]) ; ici elle sert juste à rendre le clignotement visible.

![Le registre MODER d'un port GPIO STM32 : 16 broches × 2 bits ; les 2 bits de la broche 5 à 01 configurent PA5 en sortie (00 entrée, 01 sortie, 10 fonction alternée, 11 analogique)|640](/ressources/img/stm32-registres/registre-gpio.svg)

Prendre capture d'écran de *la perspective Debug de CubeIDE, vue Registers ouverte sur GPIOA, où le bit 5 du registre ODR bascule à chaque pas d'exécution* — sous forme de GIF, le mouvement étant le message.

## BSRR contre ODR — l'atomicité

Deux façons de changer l'état d'une broche, qui ne se valent pas :

- **Par `ODR`** : `GPIOA->ODR |= GPIO_ODR_OD5;` — c'est un **lire-modifier-écrire** (le `|=` lit le registre, modifie un bit, réécrit le tout). Si une **interruption** modifie une autre broche du même port entre la lecture et l'écriture, sa modification est **perdue**. Non atomique.
- **Par `BSRR`** : `GPIOA->BSRR = GPIO_BSRR_BS5;` — une **simple écriture**, atomique. Les 16 bits de poids faible *mettent à 1*, les 16 bits de poids fort *remettent à 0* ; les bits non visés ne sont pas touchés. **Aucune course possible.**

La règle : **préférer `BSRR`** pour poser ou effacer une broche, surtout si des interruptions touchent le même port. C'est un cas d'école d'atomicité, prolongeant directement la [[manipulation-de-bits|manipulation de bits]].

## Le Reference Manual, pas la datasheet

La source de vérité du bas niveau est le **Reference Manual** (document `RM0xxx` de ST) : il décrit chaque registre, chaque champ de bits, leur adresse et leur effet. À ne pas confondre avec la **datasheet** de la puce, qui donne le brochage, les caractéristiques électriques et les limites (voir [[lire-une-datasheet|lire une datasheet]]). Pour coder un registre, c'est le Reference Manual qu'on ouvre — souvent en parallèle de l'en-tête CMSIS, qui en est la traduction en macros.

## Pièges

**Oublier d'alimenter l'horloge du périphérique.** Le piège n°1 du bas niveau : écrire dans `GPIOA` (ou tout autre périphérique) sans avoir activé son horloge dans `RCC` au préalable. Les écritures sont **silencieusement ignorées**, sans aucune erreur. Toujours commencer par le `RCC->...ENR |= ..._EN`.

**Lire-modifier-écrire non atomique.** Utiliser `ODR |=` / `^=` là où une interruption touche le même port : modification perdue. Préférer `BSRR`.

**Nombres magiques au lieu de macros.** Écrire `0x400` plutôt que `GPIO_MODER_MODE5_0` : illisible, fragile, faux dès qu'on change de broche. Utiliser les macros CMSIS — c'est la leçon de la [[manipulation-de-bits|manipulation de bits]].

**Oublier `volatile`.** Si l'on fabrique son propre pointeur de registre (au lieu de passer par CMSIS), ne pas le déclarer `volatile` laisse le compilateur optimiser les accès — et le code « marche en debug, pas en release ». Les définitions CMSIS sont déjà `volatile`.

**Croire le code portable.** Un blink registre écrit pour une F4 ne compile pas tel quel sur une G0 : les noms de bus (`AHB1ENR` vs `IOPENR`), parfois les champs, diffèrent. C'est le coût assumé de quitter la HAL.

## Exercices

> [!question] Exercice 1 — Le blink muet
> Un étudiant copie les étapes 2 et 3 du blink bare-metal (MODER puis BSRR) mais **oublie l'étape 1**. Le code compile, se flashe, mais la LED ne s'allume jamais. Pourquoi, et que vérifier en premier ?

> [!success]- Corrigé
> Sans `RCC->AHB1ENR |= RCC_AHB1ENR_GPIOAEN`, le **port A n'est pas alimenté** : toutes les écritures dans `GPIOA->MODER` et `GPIOA->BSRR` tombent dans le vide, sans effet et sans erreur. C'est le réflexe à avoir devant un périphérique bas niveau qui « ne répond pas » : **vérifier d'abord que son horloge est activée dans RCC**. La HAL le fait automatiquement (dans `MX_GPIO_Init`), ce qui masque ce piège — d'où sa découverte douloureuse au passage au registre.

> [!question] Exercice 2 — Pourquoi BSRR ?
> Une LED est sur `PA5`, et une interruption rapide bascule `PA6` du même port via `GPIOA->ODR ^= GPIO_ODR_OD6`. Dans la boucle principale, vous écrivez `GPIOA->ODR |= GPIO_ODR_OD5` pour allumer la LED. Quel bug peut survenir, et comment l'éviter ?

> [!success]- Corrigé
> Le `|=` de la boucle principale fait **lire `ODR`, poser le bit 5, réécrire**. Si l'interruption sur `PA6` survient **entre la lecture et la réécriture**, son basculement de `PA6` est écrasé par la réécriture de l'ancienne valeur : l'état de `PA6` est corrompu de façon **intermittente** (un bug très difficile à reproduire). La solution : utiliser **`BSRR`** des deux côtés — `GPIOA->BSRR = GPIO_BSRR_BS5` dans la boucle, et `BSRR` aussi dans l'interruption. Chaque écriture BSRR est atomique et ne touche que sa broche, supprimant la course. C'est l'illustration concrète de l'atomicité vue en [[manipulation-de-bits|manipulation de bits]].

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — descendre au registre est une optimisation **ciblée**, pas le point de départ : on prototype en HAL, on ne « registre » que le chemin critique identifié (un signal trop lent, une empreinte trop grosse). Une PoC qui démarre directement en bas niveau perd du temps sans gain.
- **Mélange assumé** — la pratique courante consiste à **configurer avec [[stm32-cubemx|CubeMX]] et la HAL**, puis à remplacer par des accès registre **seulement** les quelques lignes où la performance l'exige. Le reste reste lisible et portable.

Comprendre les registres, même sans les utiliser au quotidien, démystifie la HAL : on sait désormais ce qu'elle fait « en dessous », et l'on choisit en connaissance de cause à quel niveau écrire chaque partie du firmware.

## Aller plus loin

- [[manipulation-de-bits|Manipulation de bits]] — la notion transverse que cette fiche met en œuvre : masques, décalages, atomicité.
- [[stm32-hal|Programmer avec la HAL]] · [[stm32-cubemx|Configurer avec CubeMX]] — les couches au-dessus, et d'où vient l'init des horloges.
- Reference Manual de votre puce (`RM0xxx`, sur `st.com`) — la description exhaustive des registres.

## Voir aussi

- [[stm32|STM32]] — hub des tutoriels STM32
- [[stm32-hal|Programmer avec la HAL]] — la couche au-dessus, point de départ habituel
- [[manipulation-de-bits|Manipulation de bits]] — masques et bits, le socle transverse de cette fiche
- [[lire-une-datasheet|Lire une datasheet]] — et sa différence avec le Reference Manual
- [[timer|Timers]] — la bonne façon de temporiser, plutôt qu'une boucle `for` (transverse)
