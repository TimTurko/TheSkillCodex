---
title: Programmer un STM32 avec la HAL
type: tuto
phases:
  - preuve-de-concept
  - dossier-technique
tags:
  - eee
  - tuto
  - stm32
prerequis:
  - stm32
  - stm32-cubemx
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

La **HAL** (*Hardware Abstraction Layer*, couche d'abstraction matérielle) est l'**API native de STMicroelectronics** pour piloter les périphériques d'un STM32 : GPIO, UART, timers, ADC, bus… C'est l'API que le code généré par [[stm32-cubemx|CubeMX]] emploie par défaut. Elle est **portable** — le même appel `HAL_UART_Transmit` fonctionne d'une F0 à une H7 — au prix d'un peu de verbosité. Apprendre la HAL, c'est apprendre à *programmer* le microcontrôleur une fois qu'il est *configuré* : la suite naturelle de CubeMX. Pour le détail du langage, voir [[cpp|C++]] ; pour structurer l'ensemble, [[firmware|firmware]].

## À quoi ça sert ?

La HAL répond à un problème : piloter un périphérique STM32 « à la main » demande d'écrire les bons bits dans les bons registres, dans le bon ordre — fastidieux et peu portable. La HAL **encapsule** ces séquences dans des fonctions lisibles et communes à toute la gamme :

- **Lisibilité.** `HAL_UART_Transmit(&huart2, ...)` dit ce qu'il fait ; la séquence de registres équivalente, non.
- **Portabilité.** Le code écrit en HAL se transpose d'une puce STM32 à une autre avec peu de changements — un atout pour réutiliser une base de projet.
- **Cohérence avec CubeMX.** Les *handles* manipulés par la HAL sont précisément ce que CubeMX génère : les deux outils sont faits pour aller ensemble.

La HAL n'est pas la seule couche : pour la performance brute, on descend en LL ou au [[stm32-registres|registre]]. Mais c'est le **bon défaut** pour la majorité d'un projet.

## Les handles

Chaque périphérique est représenté par une **structure handle**, générée par CubeMX : `UART_HandleTypeDef huart2`, `TIM_HandleTypeDef htim3`, `ADC_HandleTypeDef hadc1`… Le handle contient toute la configuration du périphérique (broches, débit, mode…). Les fonctions HAL prennent l'**adresse** du handle en premier argument :

```c
HAL_UART_Transmit(&huart2, (uint8_t *)"Bonjour\r\n", 9, HAL_MAX_DELAY);
```

On ne crée pas ces handles soi-même : on les **configure dans CubeMX** et on les **utilise** dans le code. Choisir le bon handle (`&huart2`, pas `&huart1`) est une cause d'erreur fréquente.

## Les trois modes d'un périphérique

Un même périphérique se pilote de **trois façons** en HAL, du plus simple au plus efficace. Comprendre ce choix est le cœur de la HAL.

![Trois chronogrammes comparés pour un même transfert : en scrutation le cœur est occupé pendant toute sa durée ; en interruption il lance puis reste libre et n'est rappelé qu'à la fin ; en DMA le contrôleur déplace les données à sa place pendant qu'il reste libre.|640](/ressources/img/stm32-hal/trois-modes.svg)

**Scrutation (*polling*, bloquant).** La fonction fait le travail et **rend la main une fois terminé** (ou au bout d'un délai d'attente). Simple, mais elle **immobilise le programme** pendant l'opération.

```c
HAL_UART_Transmit(&huart2, data, len, 100);   // bloque jusqu'à la fin, ou 100 ms
```

**Interruption.** La fonction `_IT` **lance** l'opération et rend la main aussitôt ; quand l'opération est finie, la HAL appelle une **fonction de rappel** (*callback*) que vous écrivez. Le cœur reste libre entre-temps. Nécessite que l'interruption du périphérique soit **activée dans le NVIC** (case à cocher dans CubeMX).

```c
HAL_UART_Receive_IT(&huart2, &rx, 1);          // arme la réception d'un octet

void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart) {
  // appelée automatiquement quand un octet est reçu
  HAL_UART_Receive_IT(&huart2, &rx, 1);        // ré-armer pour le suivant
}
```

**DMA (*Direct Memory Access*).** La fonction `_DMA` confie le transfert à un **contrôleur dédié** qui déplace les données **sans le cœur** ; un *callback* signale la fin. Idéal pour de gros volumes (audio, écran, blocs de mesures). Nécessite un canal DMA configuré dans CubeMX.

```c
HAL_UART_Transmit_DMA(&huart2, buffer, taille);   // le DMA s'en charge
```

> [!tip]
> **Quel mode choisir ?** En scrutation pour le simple et l'occasionnel (un message de debug). En interruption pour réagir à un événement sans bloquer (réception d'octets, fin de conversion ADC). En DMA pour les gros transferts réguliers. On commence souvent en scrutation, on passe en interruption ou DMA quand le blocage devient gênant — exactement la logique de l'[[interruption|interruption]] et de la [[firmware|structuration du firmware]].

## HAL ou LL

À côté de la HAL, ST fournit la couche **LL** (*Low-Layer*) : des fonctions très fines, souvent *inline*, qui sont presque des écritures de registre déguisées (`LL_GPIO_SetOutputPin(GPIOA, LL_GPIO_PIN_5)`). Comparées à la HAL :

- **HAL** — portable, lisible, un peu de surcoût et de mémoire ; le défaut.
- **LL** — proche du registre, rapide, compacte, **moins portable** ; pour les chemins critiques en performance ou les puces à très peu de mémoire.

On **mélange** les deux sans problème, **périphérique par périphérique** : HAL partout, LL là où ça compte. Le choix se fait dans CubeMX (*Project Manager → Advanced Settings → Driver Selector*) et il est **exclusif pour un même périphérique** — un USART donné est généré en HAL *ou* en LL, jamais dans les deux à la fois. La couche encore en dessous, l'accès direct aux registres, fait l'objet de [[stm32-registres|descendre au registre]].

## Exemple — Bouton, LED et port série en HAL

Sur une Nucleo configurée dans CubeMX (LD2 en sortie, B1 en entrée sur `PC13`, USART2 à 115200), ce programme allume la LED tant que le bouton est appuyé et annonce chaque changement sur le port série — tout en HAL, en scrutation :

```c
/* USER CODE BEGIN 3 */
GPIO_PinState etat = HAL_GPIO_ReadPin(B1_GPIO_Port, B1_Pin);

if (etat == GPIO_PIN_RESET) {              // B1 appuyé = niveau bas sur Nucleo
  HAL_GPIO_WritePin(LD2_GPIO_Port, LD2_Pin, GPIO_PIN_SET);
} else {
  HAL_GPIO_WritePin(LD2_GPIO_Port, LD2_Pin, GPIO_PIN_RESET);
}
HAL_Delay(20);                             // anti-rebond simple
/* USER CODE END 3 */
```

Pour passer la **réception série en interruption** (écho des caractères reçus, sans bloquer la boucle), on arme la réception une fois et on écrit le *callback*, dans les zones USER CODE :

```c
/* USER CODE BEGIN PV */
uint8_t rx;
/* USER CODE END PV */

/* USER CODE BEGIN 2 */         // une fois, après l'init
HAL_UART_Receive_IT(&huart2, &rx, 1);
/* USER CODE END 2 */

/* USER CODE BEGIN 4 */
void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart) {
  HAL_UART_Transmit(&huart2, &rx, 1, 10);   // renvoie l'octet reçu
  HAL_UART_Receive_IT(&huart2, &rx, 1);     // ré-arme la réception
}
/* USER CODE END 4 */
```

La boucle principale reste libre pendant que les caractères sont reçus et renvoyés « en tâche de fond » par l'interruption. **C'est le passage du bloquant au réactif** — le geste qui distingue un firmware qui attend d'un firmware qui réagit.

Prendre capture d'écran de *le moniteur série renvoyant en écho les caractères tapés, pendant que la LED suit le bouton*.

## Pièges

**Oublier `HAL_Init()` ou `SystemClock_Config()`.** CubeMX les place au début de `main` ; en code écrit à la main, les omettre laisse la HAL ou l'horloge non initialisées et rien ne marche. Vérifier leur présence avant toute chose.

**Bloquer sur un délai infini.** `HAL_UART_Transmit(..., HAL_MAX_DELAY)` attend indéfiniment ; si la liaison est muette, tout le programme se fige. Préférer un délai d'attente fini quand le blocage est risqué, ou passer en interruption/DMA.

**Interruption non activée dans le NVIC.** Utiliser `HAL_..._IT` sans cocher la ligne du périphérique dans l'onglet NVIC de CubeMX : le *callback* n'est jamais appelé, sans aucune erreur de compilation. Le piège n°1 du mode interruption.

**Oublier de ré-armer la réception `_IT`.** Un `HAL_UART_Receive_IT` ne déclenche **qu'un** *callback* ; sans le re-armer à l'intérieur, on ne reçoit que le premier octet.

**Mauvais handle.** Passer `&huart1` à la place de `&huart2` (ou un timer pour un autre) : le périphérique visé n'est pas celui qu'on croit.

**`HAL_Delay` dans une interruption.** `HAL_Delay` repose sur l'interruption SysTick ; l'appeler depuis un *callback* de priorité supérieure ou égale peut **bloquer définitivement**. Ne pas temporiser dans une interruption — y faire le strict minimum.

## Exercices

> [!question] Exercice 1 — Bloquant ou non ?
> Dans l'exemple, la boucle principale appelle `HAL_Delay(20)` à chaque tour. Pendant ces 20 ms, que se passe-t-il si un caractère arrive sur le port série en mode interruption ? Et en mode scrutation (`HAL_UART_Receive` bloquant) ?

> [!success]- Corrigé
> **En interruption**, le caractère est reçu et traité **même pendant le `HAL_Delay`** : l'interruption suspend brièvement la boucle, exécute le *callback*, puis rend la main — le `HAL_Delay` ne gêne pas la réception. **En scrutation bloquante**, il faudrait que le programme soit justement *à l'instant* sur l'appel `HAL_UART_Receive` pour attraper l'octet ; pendant le `HAL_Delay`, un caractère arrivé serait **manqué**. C'est tout l'intérêt de l'interruption : découpler l'événement de la boucle. Voir [[interruption|interruption]].

> [!question] Exercice 2 — HAL ou LL ?
> Vous devez générer un signal carré le plus rapide possible en basculant une broche dans une boucle serrée. Vaut-il mieux `HAL_GPIO_TogglePin` ou `LL_GPIO_TogglePin` ? Pourquoi ? Et quelle solution serait encore meilleure ?

> [!success]- Corrigé
> `LL_GPIO_TogglePin` est **plus rapide** que `HAL_GPIO_TogglePin` : la fonction LL est une fine enveloppe (souvent *inline*) autour de l'écriture de registre, sans les vérifications et l'indirection par handle de la HAL. Pour un signal carré logiciel, LL bascule la broche en bien moins de cycles. Mais la **meilleure** solution n'est ni l'une ni l'autre : un **timer matériel en PWM** génère le signal *sans le cœur*, à fréquence stable — le rôle des [[timer|timers]]. Règle générale : pour la performance, descendre en LL ou registre ; pour un signal périodique, confier le travail à un périphérique dédié.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — la HAL est l'outil d'écriture de la logique de la PoC une fois le microcontrôleur configuré. Choisir le bon mode (scrutation / interruption / DMA) dès la PoC évite de devoir tout réécrire quand le blocage devient un problème.
- **Lisibilité et reprise** — un code HAL se relit et se reprend plus facilement qu'un code registre, ce qui compte en projet d'équipe et dans le [[dossier-technique|dossier technique]].

Comprendre les trois modes — et que CubeMX configure les handles que la HAL utilise — donne la grammaire du STM32 natif : configurer d'un côté, piloter de l'autre, en choisissant à chaque fois le bon niveau de réactivité.

## Aller plus loin

- [[stm32-registres|Descendre au registre]] — la couche sous la HAL et la LL, et pourquoi y aller.
- [[stm32-cubemx|Configurer avec CubeMX]] — d'où viennent les handles et l'activation NVIC.
- [[interruption|Interruptions]] · [[timer|Timers]] — les concepts transverses derrière les modes `_IT` et la PWM.
- [Documentation HAL/LL de ST (UM1725 et équivalents)](https://www.st.com/en/embedded-software/stm32cubef4.html) — description des fonctions par famille.

## Voir aussi

- [[stm32|STM32]] — hub des tutoriels STM32
- [[stm32-cubemx|Configurer avec CubeMX]] — l'étape qui précède : configurer les périphériques
- [[stm32-registres|Descendre au registre]] — sous la HAL, l'accès direct au matériel
- [[stm32-arduino-core|Programmer avec l'Arduino-core]] — la porte de continuité, posée sur cette même HAL
- [[firmware|Firmware]] — structurer le code, du super-loop au RTOS (transverse)
