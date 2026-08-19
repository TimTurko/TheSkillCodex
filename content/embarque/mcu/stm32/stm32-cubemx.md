---
title: Configurer un STM32 avec CubeMX
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
  - stm32-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

**STM32CubeMX** est l'outil graphique de configuration des microcontrôleurs STM32 : on y affecte les broches, on y règle l'**arbre d'horloge**, on y paramètre les périphériques, puis CubeMX **génère le code d'initialisation** correspondant. C'est le cœur de la porte native du STM32, et l'apport le plus distinctif de la famille : on ne *programme* pas d'abord, on **configure le microcontrôleur** — le code vient ensuite. CubeMX s'utilise seul ou intégré dans [[stm32-prise-en-main|STM32CubeIDE]] (la vue `.ioc` rencontrée à la prise en main). L'API que ce code emploie est détaillée dans [[stm32-hal|la HAL]].

## À quoi ça sert ?

Un STM32 a des dizaines de broches, plusieurs horloges, et des périphériques aux nombreux réglages. Écrire à la main toute l'initialisation (quels bits dans quels registres, dans quel ordre) est long et source d'erreurs. CubeMX rend cette configuration **visuelle et vérifiée** :

- **Voir et résoudre les conflits.** Le brochage graphique montre quelles fonctions sont possibles sur chaque broche et **signale les conflits** (une broche déjà prise par un autre périphérique).
- **Maîtriser l'horloge.** L'arbre d'horloge, panneau emblématique du STM32, permet de régler la fréquence du cœur et de chaque bus, en **calculant les diviseurs** et en alertant sur les valeurs invalides.
- **Générer une base saine.** Le code d'initialisation produit est cohérent avec la configuration, et **préserve votre propre code** à chaque régénération.

CubeMX ne remplace pas la compréhension du matériel — il l'**outille**. Lire la datasheet reste utile pour savoir *quoi* configurer (voir [[lire-une-datasheet|lire une datasheet]]).

## Le fichier .ioc

Toute la configuration vit dans un fichier **`.ioc`** (un par projet). C'est un fichier **texte** : il se versionne dans Git au même titre que le code, et deux états de configuration se comparent. « Générer le code » lit le `.ioc` et écrit l'initialisation ; modifier la configuration et régénérer met le code à jour **sans toucher** à ce que vous avez écrit dans les zones réservées.

## Configurer le brochage

Dans la vue **Pinout & Configuration**, chaque broche du boîtier est cliquable. Un clic propose ses fonctions possibles : `GPIO_Output`, `GPIO_Input`, `USART2_TX`, `TIM3_CH1`, `I2C1_SCL`… On affecte les fonctions dont le projet a besoin ; CubeMX colore les broches utilisées et **refuse une affectation en conflit**.

Sur un projet créé depuis une carte Nucleo, le brochage est déjà partiellement rempli (LD2, bouton, port série du ST-LINK). On part de là et on ajoute ce qu'il faut.

![Vue Pinout & Configuration de CubeMX, quelques broches affectées en surbrillance : LD2 en GPIO_Output, PA2 et PA3 en USART2.|640](/ressources/img/stm32-cubemx/pinout-configuration.png)

## Configurer l'arbre d'horloge

L'onglet **Clock Configuration** affiche l'**arbre d'horloge** : la source (oscillateur interne **HSI**, ou quartz externe **HSE**), la **PLL** qui multiplie la fréquence, l'horloge système **SYSCLK**, et les **prédiviseurs** qui alimentent les bus AHB et APB et, à travers eux, les périphériques.

On saisit la fréquence cible (souvent le maximum de la puce) dans la case SYSCLK ; CubeMX **résout les multiplicateurs et diviseurs** ou signale en rouge une combinaison impossible. C'est un panneau à comprendre : une horloge mal réglée donne des **vitesses fausses** partout en aval — un UART qui n'a pas le bon débit, un timer qui ne mesure pas la bonne durée.

![Onglet Clock Configuration de CubeMX : l'arbre HSE vers PLL, SYSCLK et les prédiviseurs AHB et APB, avec la fréquence du cœur affichée.|640](/ressources/img/stm32-cubemx/clock-configuration.png)

## Configurer les périphériques

Chaque périphérique activé ouvre un panneau de **paramètres** : débit et format pour un UART, prédiviseur et période pour un [[timer|timer]], résolution et canaux pour un [[adc|ADC]], vitesse pour un bus [[bus-de-communication|I2C/SPI]]… Deux onglets transverses complètent le réglage :

- **NVIC** — pour **activer l'interruption** d'un périphérique. Sans cocher la ligne NVIC correspondante, le code en mode interruption ne sera jamais appelé (piège classique).
- **DMA** — pour configurer un transfert par accès direct à la mémoire, qui décharge le cœur.

![Panneau de configuration d'un USART dans CubeMX, réglé à 115200 bauds et 8 bits de données, avec l'onglet NVIC Settings visible.|600](/ressources/img/stm32-cubemx/usart-nvic.png)

## HAL ou LL, puis générer

Avant de générer, le **Project Manager → Advanced Settings → Driver Selector** offre un choix important par périphérique : générer l'init en **[[stm32-hal|HAL]]** (l'API portable, par défaut) ou en **LL** (la couche bas niveau, plus proche du registre et plus légère). On peut mélanger d'un périphérique à l'autre : HAL pour la plupart, LL pour un périphérique critique en performance. *(L'onglet voisin **Code Generator** porte d'autres réglages — un fichier par périphérique, conservation du code utilisateur — pas le choix du pilote.)*

« **Generate Code** » écrit alors `main.c`, un fichier d'init par périphérique, et les fonctions `MX_<PERIPH>_Init()`. Tout est jalonné de balises **`/* USER CODE BEGIN/END */`** : votre code n'y survit que **dans** ces balises.

![Le flux de travail CubeMX en six temps : configurer (broches, horloge, périphériques), générer le code d'initialisation (HAL ou LL), compléter dans les zones USER CODE, compiler, flasher via le ST-LINK, déboguer au pas. Une boucle de retour part du débogage vers la configuration : on reconfigure et on régénère, et le code écrit dans les zones USER CODE est préservé.|640](/ressources/img/stm32-cubemx/flux.svg)

## Exemple — Configurer LED + port série, puis générer

Sur une Nucleo, configurons de quoi clignoter *et* écrire sur le port série, en partant d'un projet de carte :

1. **Brochage** — `LD2` est déjà en `GPIO_Output` ; vérifier que `USART2` est activé sur `PA2`/`PA3` (le port série du ST-LINK sur Nucleo-64).
2. **Horloge** — laisser la configuration par défaut de la carte (déjà proche du maximum).
3. **USART2** — *Baud Rate* à `115200`, format `8N1`.
4. **Générer** le code.

Dans `main.c`, CubeMX a produit `MX_GPIO_Init()` et `MX_USART2_UART_Init()`, et déclaré un *handle* `huart2`. Il ne reste qu'à compléter la boucle, dans la zone réservée :

```c
/* USER CODE BEGIN 3 */
HAL_GPIO_TogglePin(LD2_GPIO_Port, LD2_Pin);            // inverse l'état de la LED
HAL_UART_Transmit(&huart2, (uint8_t *)"tic\r\n", 5, 100);   // 5 = octets à envoyer, 100 = délai d'attente en ms
HAL_Delay(1000);                                       // attend une seconde
/* USER CODE END 3 */
```

La LED bat la seconde, et le moniteur série (115200) affiche `tic` chaque seconde. Le **handle** `huart2` est l'objet généré par CubeMX que les fonctions HAL manipulent — détaillé dans [[stm32-hal|la HAL]]. **On a configuré le microcontrôleur, puis seulement écrit la logique** : c'est tout l'esprit de la porte native.

Au moniteur réglé sur 115200 :

```
tic
tic
tic
tic
```

Si les lignes défilent trop vite ou trop lentement, c'est l'arbre d'horloge qu'il faut rouvrir — pas le `HAL_Delay`.

## Pièges

**Code écrit hors des zones USER CODE.** Le piège récurrent du STM32 natif : tout code hors des balises `/* USER CODE BEGIN/END */` disparaît à la prochaine génération. Toujours écrire entre les balises, et regénérer sans crainte une fois la règle acquise.

**Arbre d'horloge mal réglé.** Une fréquence système fausse propage des vitesses fausses partout : UART au mauvais débit, timer à la mauvaise durée, attentes erronées. Vérifier la source (HSI interne vs HSE externe) et lire les fréquences calculées par CubeMX.

**Interruption activée dans le code mais pas dans le NVIC.** Utiliser un périphérique en mode interruption (`HAL_..._IT`) sans cocher sa ligne dans l'onglet **NVIC** : la fonction de rappel n'est jamais appelée, et rien ne le signale à la compilation.

**Conflit de broche ignoré.** Affecter à une broche une fonction alors qu'une autre l'occupe : CubeMX le signale, ne pas passer outre.

**Mauvaise référence de puce.** Créer le projet pour une variante différente de la puce réelle : les broches et périphériques ne correspondent pas. Partir du Board Selector pour une carte connue évite l'erreur.

**Oublier de régénérer.** Modifier la configuration dans le `.ioc` sans relancer « Generate Code » : le code ne reflète pas le changement.

## Exercices

> [!question] Exercice 1 — Le port série du ST-LINK
> Dans CubeMX, quel périphérique correspond au port série virtuel d'une Nucleo-64, et sur quelles broches ? Que se passe-t-il si vous réglez son débit à 9600 dans CubeMX mais ouvrez le moniteur à 115200 ?

> [!success]- Corrigé
> Sur la plupart des Nucleo-64, c'est **USART2**, câblé sur `PA2` (TX) et `PA3` (RX), relié au ST-LINK qui l'expose comme port série virtuel sur l'USB. Si le débit configuré (9600) ne correspond pas à celui du moniteur (115200), les caractères s'affichent en **charabia** : les deux extrémités doivent partager exactement le même débit. C'est l'exemple direct d'un réglage de périphérique dont dépend le bon fonctionnement.

> [!question] Exercice 2 — Ajouter un timer
> Vous voulez faire clignoter la LED **sans** `HAL_Delay` bloquant, à l'aide d'un timer matériel. Dans CubeMX, quel réglage de **TIM** vise une période de 1 s, et quel onglet faut-il penser à activer si vous comptez utiliser son interruption ?

> [!success]- Corrigé
> On active un **TIMx** en *Internal Clock*, puis on règle son **prédiviseur** (*Prescaler*) et sa **période** (*Counter Period*) pour obtenir 1 s : par exemple, avec une horloge de timer à 84 MHz, un prescaler de `8400-1` ramène le compteur à 10 kHz, et une période de `10000-1` donne un débordement chaque seconde. Pour réagir à ce débordement, il faut **cocher la ligne du timer dans l'onglet NVIC** (sinon le rappel `HAL_TIM_PeriodElapsedCallback` ne sera jamais appelé). Le détail des valeurs et des [[timer|timers]] se règle ensuite ; ici, l'essentiel est le couple prescaler × période et l'activation NVIC.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — CubeMX est l'outil qui transforme un choix de microcontrôleur (fait en [[concept|concept]]) en base logicielle prête à coder. Configurer proprement l'horloge et les périphériques en début de PoC évite des bugs de timing difficiles à diagnostiquer plus tard.
- **Traçabilité** — le fichier `.ioc` versionné documente la configuration matérielle du projet : un coéquipier retrouve d'un coup d'œil quelles broches font quoi, ce qui nourrit le [[dossier-technique|dossier technique]].

Comprendre que CubeMX **configure** et que la **HAL** est l'API que le code généré utilise sépare clairement les deux gestes : on règle le microcontrôleur d'un côté, on écrit la logique de l'autre.

## Aller plus loin

- [[stm32-hal|Programmer avec la HAL]] — l'API qu'emploie le code généré par CubeMX.
- [[stm32-registres|Descendre au registre]] — quand la HAL ne suffit pas, ou pour comprendre ce que CubeMX configure réellement.
- [Page STM32CubeMX sur st.com](https://www.st.com/en/development-tools/stm32cubemx.html) — documentation, arbres d'horloge, exemples.

## Voir aussi

- [[stm32|STM32]] — hub des tutoriels STM32
- [[stm32-prise-en-main|Prise en main du STM32]] — la vue `.ioc` rencontrée pour la première fois
- [[stm32-hal|Programmer avec la HAL]] — l'API du code généré, ses trois modes
- [[stm32-registres|Descendre au registre]] — la couche sous la HAL
- [[timer|Timers]] · [[adc|ADC]] · [[bus-de-communication|Bus de communication]] — périphériques configurés dans CubeMX (transverses)
