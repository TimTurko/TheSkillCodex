---
title: Prise en main du STM32
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - stm32
prerequis:
  - stm32
aa: []
draft: false
---

La **prise en main du STM32** consiste à installer l'environnement officiel **STM32CubeIDE**, à créer un projet pour sa carte Nucleo, et à flasher un premier programme via le débogueur **ST-LINK intégré**. Par rapport à un Arduino, l'approche diffère : on ne tape pas directement du code dans un éditeur, on **crée un projet à partir de sa carte**, ce qui pré-configure automatiquement le microcontrôleur. Le programme cible reste le **Blink** — faire clignoter la LED utilisateur — l'équivalent embarqué du « Hello World ». Cette fiche emprunte la **porte native** ; pour la porte Arduino, voir [[stm32-arduino-core|programmer avec l'Arduino-core]].

## À quoi ça sert ?

La prise en main valide en une fois toute la chaîne native : éditeur, générateur de configuration (CubeMX intégré), compilateur GCC, débogueur GDB, et liaison ST-LINK avec la carte. Si un maillon est cassé, le Blink ne clignote pas — et on le sait tout de suite, sur du code trivial, plutôt que noyé dans un projet complexe.

Au-delà du premier programme, l'étape a deux rôles :

- **Ancrer les gestes natifs.** Créer un projet de carte, générer le code, compléter dans les zones réservées, compiler, flasher, déboguer au pas : ce sont les gestes répétés de tous les tutoriels STM32 suivants. Les ancrer une fois sur du trivial libère l'attention pour le reste.
- **Découvrir le ST-LINK.** Le câble USB d'une Nucleo n'est pas un simple câble de programmation : il porte le **flashage**, le **débogage au pas** *et* un **port série virtuel**. Comprendre ce triple rôle dès le départ évite bien des confusions.

## Procédure pas à pas

Cinq étapes : installer CubeIDE, créer un projet de carte, écrire le clignotement, compiler, flasher et observer.

### 1. Installer STM32CubeIDE

Téléchargez **STM32CubeIDE** depuis le site de ST (`st.com`, rubrique outils de développement). Le téléchargement demande la création d'un compte *myST* gratuit. L'outil est libre d'usage et tout-en-un : il embarque l'éditeur, CubeMX, la chaîne de compilation GCC pour ARM et le débogueur.

Sous Windows, le pilote ST-LINK est installé avec l'IDE. Sous Linux, ajoutez les règles `udev` fournies par ST pour accéder au ST-LINK sans `sudo`.

Prendre capture d'écran de *la page de téléchargement de STM32CubeIDE sur st.com, avec les liens Windows / Linux / macOS*.

### 2. Créer un projet à partir de la carte

C'est l'étape propre au STM32 natif : on part de la **carte**, pas d'un fichier vide. *File → New → STM32 Project*, puis l'onglet **Board Selector**. Cherchez votre Nucleo (par exemple **NUCLEO-F411RE** ou **NUCLEO-G431RB**), sélectionnez-la, *Next*, nommez le projet.

À la question **« Initialize all peripherals with their default Mode? »**, répondez **Yes** : CubeMX configure alors automatiquement le microcontrôleur pour cette carte — notamment la **LED utilisateur LD2** (sur GPIO `PA5` de la plupart des Nucleo-64) déjà déclarée en sortie, et l'horloge système réglée.

Prendre capture d'écran de *l'onglet Board Selector de STM32CubeIDE, NUCLEO-F411RE sélectionnée, avec le bouton Next*.

L'IDE ouvre la vue de configuration `.ioc` (le brochage de la carte) et génère un squelette de projet. On reviendra sur cette vue dans [[stm32-cubemx|CubeMX]] ; pour l'instant, fermez-la, le projet est prêt.

### 3. Écrire le clignotement — dans la bonne zone

Ouvrez `Core/Src/main.c`. Le code généré est jalonné de balises **`/* USER CODE BEGIN … */`** et **`/* USER CODE END … */`**. Tout ce que vous écrivez **entre** ces balises est conservé si la configuration est régénérée ; tout ce qui est écrit ailleurs est **écrasé**. C'est la règle d'or du STM32 natif.

Trouvez la boucle principale `while (1)` et complétez la zone `USER CODE BEGIN 3` :

```c
/* USER CODE BEGIN 3 */
HAL_GPIO_TogglePin(LD2_GPIO_Port, LD2_Pin);
HAL_Delay(500);
/* USER CODE END 3 */
```

`HAL_GPIO_TogglePin` inverse l'état de la broche à chaque passage ; `HAL_Delay(500)` attend 500 ms. `LD2_Pin` et `LD2_GPIO_Port` sont les noms générés pour la LED — pas besoin de connaître le numéro de broche, CubeMX les a définis.

Prendre capture d'écran de *l'éditeur main.c avec le toggle de LD2 inséré entre USER CODE BEGIN 3 et USER CODE END 3*.

### 4. Compiler

Cliquez sur l'icône **marteau** (*Build*). La console affiche la taille du binaire (`text`, `data`, `bss`) et se termine par `Build Finished. 0 errors`. Une erreur ici est un problème de *code* ou de configuration, pas de matériel — la carte n'est pas encore sollicitée.

Prendre capture d'écran de *la console Build de CubeIDE affichant « Build Finished. 0 errors » et le récapitulatif de taille mémoire*.

### 5. Flasher et observer

Branchez la Nucleo par son connecteur USB **côté ST-LINK** (un câble de **données**, pas un câble « charge seule »). Cliquez sur la flèche verte **Run** : l'IDE compile, flashe le binaire via le ST-LINK, et lance le programme.

> [!tip]
> **À la première connexion, CubeIDE peut proposer une mise à jour du firmware du ST-LINK.** Acceptez-la : c'est rapide et cela évite des échecs de connexion ultérieurs. Contrairement à l'ESP32, **aucune manipulation de bouton n'est nécessaire** — le flashage par SWD est direct et fiable.

La LED LD2 clignote au rythme d'une demi-seconde. **Le programme tourne — la prise en main est validée.**

Prendre capture d'écran ou photo de *la carte Nucleo branchée, LED utilisateur LD2 (verte) allumée*.

## Exemple — Blink modifié et débogué

Pour vérifier qu'on contrôle réellement ce qui se passe, modifiez les temporisations :

```c
/* USER CODE BEGIN 3 */
HAL_GPIO_TogglePin(LD2_GPIO_Port, LD2_Pin);
HAL_Delay(100);
HAL_GPIO_TogglePin(LD2_GPIO_Port, LD2_Pin);
HAL_Delay(900);
/* USER CODE END 3 */
```

La LED fait maintenant un éclair court (100 ms) toutes les secondes. Ce **petit pas** — modifier, flasher, observer le changement attendu — est le geste de base de tous les tutoriels suivants.

Profitez-en pour découvrir le débogage : cliquez sur l'icône **insecte** (*Debug*) au lieu de *Run*. Le programme s'arrête au début de `main`. Posez un point d'arrêt sur la ligne `HAL_Delay`, exécutez pas à pas (*Step Over*), et observez le programme franchir la boucle. C'est l'atout du ST-LINK : voir le code s'exécuter, ligne par ligne, ce qu'aucun Arduino nu ne permet sans matériel dédié.

Prendre capture d'écran de *la perspective Debug de CubeIDE, point d'arrêt posé dans la boucle while et flèche d'exécution sur une ligne*.

## Pièges

**Code écrit hors des zones USER CODE.** C'est le piège n°1 du STM32 natif : tout code placé en dehors des balises `/* USER CODE BEGIN/END */` disparaît à la prochaine génération de CubeMX. Toujours écrire entre les balises.

**Pilote ou firmware ST-LINK.** Carte non détectée : vérifier le câble (données, pas charge seule), accepter la mise à jour du firmware ST-LINK proposée par CubeIDE, et sous Linux installer les règles `udev` de ST.

**Mauvaise variante de carte sélectionnée.** Si `LD2_Pin` n'est pas reconnu ou si rien ne clignote alors que la compilation passe, c'est souvent que la carte choisie au Board Selector ne correspond pas à la vôtre (la LED n'est pas sur la même broche selon les Nucleo).

**Confondre le câble ST-LINK avec une simple alimentation.** Le connecteur USB de la Nucleo porte trois fonctions (flashage, débogage, port série). Brancher la carte sur un chargeur l'alimente mais ne permet ni flashage ni débogage.

**Oublier de lancer la bonne configuration d'exécution.** Au premier *Run*, CubeIDE demande parfois de choisir « STM32 C/C++ Application ». La sélectionner ; les fois suivantes, c'est automatique.

Sur les Nucleo-64, la LED LD2 et le bouton B1 (utilisés ci-dessus et en exercice) occupent des positions communes à toute la gamme :

![Repères communs aux STM32 Nucleo-64 : connecteurs Arduino (analogique + alimentation, numérique) et Morpho, ST-LINK intégré, LED LD2 sur D13 et bouton B1 sur PC13 ; la fonction précise des broches dépend du MCU.|640](/ressources/img/stm32-prise-en-main/brochage-nucleo-64.svg)

## Exercices

> [!question] Exercice 1 — Deux rythmes
> Modifiez le Blink pour que la LED reste allumée 2 secondes, puis clignote rapidement trois fois (100 ms allumée / 100 ms éteinte), avant de recommencer.

> [!success]- Corrigé
> ```c
> /* USER CODE BEGIN 3 */
> HAL_GPIO_WritePin(LD2_GPIO_Port, LD2_Pin, GPIO_PIN_SET);
> HAL_Delay(2000);
> HAL_GPIO_WritePin(LD2_GPIO_Port, LD2_Pin, GPIO_PIN_RESET);
> HAL_Delay(300);
>
> for (int i = 0; i < 3; i++) {
>   HAL_GPIO_WritePin(LD2_GPIO_Port, LD2_Pin, GPIO_PIN_SET);
>   HAL_Delay(100);
>   HAL_GPIO_WritePin(LD2_GPIO_Port, LD2_Pin, GPIO_PIN_RESET);
>   HAL_Delay(100);
> }
> /* USER CODE END 3 */
> ```
> On passe de `Toggle` à `WritePin` pour piloter explicitement l'état (`GPIO_PIN_SET` / `GPIO_PIN_RESET`). La boucle `for` factorise les trois éclairs. On retrouvera ce besoin de rythmes sans `HAL_Delay` bloquant en [[firmware|structurant le firmware]].

> [!question] Exercice 2 — Lire le bouton
> La plupart des Nucleo-64 ont un bouton utilisateur **B1** sur `PC13`, déjà configuré en entrée par le projet de carte. Allumez la LED **tant que** le bouton est appuyé, éteignez-la sinon. (Indice : sur Nucleo, B1 est souvent câblé en logique inversée — appui = niveau bas.)

> [!success]- Corrigé
> ```c
> /* USER CODE BEGIN 3 */
> if (HAL_GPIO_ReadPin(B1_GPIO_Port, B1_Pin) == GPIO_PIN_RESET) {
>   HAL_GPIO_WritePin(LD2_GPIO_Port, LD2_Pin, GPIO_PIN_SET);
> } else {
>   HAL_GPIO_WritePin(LD2_GPIO_Port, LD2_Pin, GPIO_PIN_RESET);
> }
> /* USER CODE END 3 */
> ```
> `HAL_GPIO_ReadPin` lit l'état de la broche. Le bouton B1 de la Nucleo est relié à la masse à l'appui (résistance de tirage vers le haut au repos), donc l'appui correspond à `GPIO_PIN_RESET` — d'où le test inversé. La logique de tirage est détaillée dans [[gpio|les GPIO]].

## Cas particulier — STM32duino et PlatformIO

Cette fiche utilise l'**outillage natif** (CubeIDE), parce que c'est lui qui ouvre le vrai apport du STM32. Mais on peut aussi prendre la carte en main par la **porte Arduino** : [[stm32-arduino-core|STM32duino]] permet d'écrire un Blink à la mode Arduino (`digitalWrite`, `delay`) en quelques lignes, sans projet ni génération. C'est plus rapide pour un premier contact, au prix de ne pas voir l'outillage natif. **PlatformIO** (extension VS Code) gère les deux mondes dans un même projet versionnable.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — la première compilation et le premier flashage sur la carte cible sont l'acte fondateur de la PoC logicielle. Tant que le Blink ne clignote pas, aucune mesure ni asservissement aval n'est crédible.
- **Tous les tutoriels STM32 aval** — sans prise en main effective, lire les autres tutoriels sans pouvoir tester revient à lire du code sans l'exécuter. Faites le Blink au moins une fois, sur le matériel cible, le plus tôt possible.

Investir une demi-heure pour valider la chaîne native complète en début de PoC évite des heures de bugs hybrides plus tard, quand on ne saura plus distinguer un problème d'outillage d'un problème d'algorithme.

## Aller plus loin

- [Page STM32CubeIDE sur st.com](https://www.st.com/en/development-tools/stm32cubeide.html) — téléchargement, documentation, notes de version.
- [[stm32-cubemx|Configurer avec CubeMX]] — la vue `.ioc` ouverte ici, expliquée en détail.

## Voir aussi

- [[stm32|STM32]] — hub des tutoriels STM32
- [[microcontroleur|Microcontrôleur]] — hub mère, panorama des familles et aide au choix
- [[stm32-arduino-core|Programmer avec l'Arduino-core]] — la porte de continuité, un Blink à la mode Arduino
- [[debugger-embarque|Déboguer un système embarqué]] — exploiter le ST-LINK pour le pas-à-pas
- [[niveaux-de-tension|Niveaux de tension]] — le STM32 est en 3,3 V, broches *FT* tolérantes 5 V
- [[cpp|C++]] — bases du langage (transverse)
