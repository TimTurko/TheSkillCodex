---
title: Découvrir ESP-IDF
type: tuto
phases:
  - preuve-de-concept
  - dossier-technique
tags:
  - eee
  - tuto
  - esp32
prerequis:
  - esp32
  - esp32-arduino-core
aa: []
draft: false
---

**ESP-IDF** (*Espressif IoT Development Framework*) est l'environnement de développement **natif** de l'ESP32 : du C/C++ bâti directement sur **FreeRTOS**, organisé en composants, configuré finement. C'est l'alternative à l'[[esp32-arduino-core|Arduino-core]], pour qui a besoin du **plein contrôle** de la puce. Cette fiche est une **mise en perspective** (quand l'IDF se justifie, ce qu'il apporte, comment y mettre un premier pied) et non un cours complet : la prise en main approfondie passe par la documentation Espressif.

## À quoi ça sert ?

L'Arduino-core suffit à la grande majorité des projets pédagogiques. L'ESP-IDF prend son sens quand on bute sur un de ces besoins :

- **Contrôle fin de l'énergie et du temps réel** — gestion précise des [[esp32-deep-sleep|modes de veille]], ordonnancement de tâches maîtrisé, échéances strictes.
- **Fonctions de production** — mises à jour à distance (OTA), démarrage sécurisé (secure boot), chiffrement de la Flash, partitions sur mesure.
- **Configuration système** — activer/régler finement les composants (pile réseau, BLE, pilotes) via un menu de configuration dédié.
- **Le silicium le plus récent, tout de suite.** Une nouvelle puce Espressif est supportée par l'IDF dès sa sortie, parfois avant l'Arduino-core.

![Arbre de décision Arduino-core ou ESP-IDF : si un besoin précis est avéré (OTA et démarrage sécurisé, contrôle fin de l'énergie ou du temps réel, configuration système poussée, silicium très récent) on passe à ESP-IDF, sinon on reste sur l'Arduino-core|640](/ressources/img/esp32-idf/arbre-de-decision.svg)

> [!tip]
> **Ne pas basculer trop tôt.** L'IDF a une courbe d'apprentissage plus raide. Le bon réflexe est de **rester sur l'Arduino-core** tant qu'aucun verrou précis ne le force, et de migrer la partie concernée seulement quand le besoin est avéré.

## Ce que l'IDF apporte (et qui change des habitudes Arduino)

- **`app_main()` au lieu de `setup()`/`loop()`.** Le point d'entrée est une fonction `app_main()`. Il n'y a pas de boucle imposée : on crée explicitement ses tâches FreeRTOS (voir [[esp32-freertos|FreeRTOS]]).
- **Outil en ligne de commande `idf.py`.** Création, configuration, compilation, flash et moniteur se pilotent en commandes (`idf.py build`, `idf.py flash monitor`), scriptables et reproductibles.
- **Configuration par `menuconfig`.** Une interface (`idf.py menuconfig`) règle des centaines d'options (fréquence CPU, taille des piles, options réseau…), enregistrées dans un fichier `sdkconfig`.
- **Architecture en composants.** Le code est découpé en composants réutilisables, chacun avec son `CMakeLists.txt` — proche de la logique de découpage en modules de [[firmware|firmware]].

## Premiers pas (orientation)

Sans entrer dans le détail, la trajectoire d'entrée ressemble à :

1. **Installer l'IDF** — via l'installateur officiel (Windows) ou l'extension *ESP-IDF* pour VS Code, qui télécharge la chaîne d'outils.
2. **Créer un projet** — `idf.py create-project mon_projet`, ou partir de l'exemple `hello_world` fourni.
3. **Configurer** — `idf.py set-target esp32` (ou la variante visée), puis `idf.py menuconfig` au besoin.
4. **Compiler, flasher, observer** — `idf.py build`, `idf.py -p PORT flash`, `idf.py -p PORT monitor`.

La structure minimale d'un programme IDF tient en une fonction :

```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

void app_main(void) {
    while (1) {
        printf("Bonjour depuis ESP-IDF\n");
        vTaskDelay(pdMS_TO_TICKS(1000));   // FreeRTOS : céder 1 s
    }
}
```

Pas de `setup()`/`loop()` : `app_main()` est appelée une fois, et on y crée soi-même la boucle ou les tâches. On retrouve immédiatement FreeRTOS (`vTaskDelay`).

## Le pont avec Arduino

Les deux mondes ne sont pas étanches :

- **Arduino comme composant d'ESP-IDF.** On peut utiliser les bibliothèques Arduino *dans* un projet IDF, pour garder le confort Arduino sur certaines parties.
- **PlatformIO** gère les deux environnements dans un même projet.

Autrement dit, choisir l'IDF n'oblige pas à abandonner tout l'acquis Arduino : on compose.

## Pièges

**Basculer prématurément.** Passer à l'IDF « pour faire propre » sans besoin réel coûte du temps pour un gain nul. Rester sur l'Arduino-core tant qu'un verrou précis ne force pas la migration.

**Se noyer dans `menuconfig`.** Des centaines d'options : ne toucher que ce qu'un besoin identifié impose, laisser le reste par défaut.

**Oublier que tout est FreeRTOS.** En IDF, il n'y a pas de boucle cachée : sans tâche ni boucle dans `app_main()`, rien de ce qu'on a écrit ne tourne : la fonction retourne, sa tâche est supprimée, et il ne reste que les tâches système. Le multitâche est explicite dès le départ.

## Exercices

> [!question] Exercice 1 — Arduino-core ou ESP-IDF ?
> Pour chacun de ces projets, lequel choisiriez-vous, et pourquoi ? (a) Un thermomètre connecté qui publie une mesure toutes les minutes. (b) Un produit commercial nécessitant des mises à jour à distance sécurisées. (c) Un prototype de robot pour un cours.

> [!success]- Corrigé
> - **(a) Arduino-core.** Besoin simple, connectivité standard : on avance vite, l'IDF n'apporterait rien d'utile ici.
> - **(b) ESP-IDF.** L'OTA sécurisé et le secure boot sont des fonctions de production que l'IDF expose pleinement : c'est précisément un de ses cas d'usage.
> - **(c) Arduino-core.** Prototypage pédagogique : la priorité est la vitesse d'itération et la réutilisation des acquis Arduino.
>
> La règle : Arduino-core par défaut, IDF quand un **besoin précis** (production, contrôle fin) le justifie.

> [!question] Exercice 2 — Premier `hello_world`
> Sans rédiger de code nouveau : décrivez la suite de commandes `idf.py` pour compiler, flasher et observer l'exemple `hello_world` sur une carte branchée au port `COM5`.

> [!success]- Corrigé
> ```
> idf.py set-target esp32      # cible (ou esp32c3, esp32s3...)
> idf.py build                 # compilation
> idf.py -p COM5 flash         # téléversement
> idf.py -p COM5 monitor       # moniteur série (Ctrl+] pour quitter)
> ```
> On peut enchaîner flash et monitor : `idf.py -p COM5 flash monitor`. La logique (configurer la cible, compiler, flasher, observer) est la même que dans l'IDE Arduino, mais en commandes reproductibles, d'où l'intérêt en intégration continue.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]].** La PoC se mène presque toujours en [[esp32-arduino-core|Arduino-core]]. Identifier *si* et *où* l'IDF deviendra nécessaire (besoin OTA, énergie, temps réel strict) est un point d'arbitrage à poser tôt, sans forcément l'implémenter en PoC.
- **Passage vers un livrable.** Si le projet vise un produit (et pas un prototype), les fonctions de production de l'IDF (OTA, sécurité) entrent dans le dossier technique.

Savoir que l'IDF existe et *quand* y recourir évite deux erreurs symétriques : rester bloqué sur l'Arduino-core face à un besoin qu'il ne couvre pas, ou se compliquer la vie en IDF sans nécessité.

## Aller plus loin

- [[esp32-arduino-core|Programmer avec l'Arduino-core]] — l'environnement de départ, sur lequel l'IDF est une montée en exigence.
- [[esp32-freertos|FreeRTOS]] — le cœur temps réel, omniprésent et explicite en IDF.
- [[firmware|Firmware]] — découpage en composants/modules (transverse).
- [Guide de démarrage ESP-IDF d'Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/) — installation et premier projet, pas à pas.

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[esp32-arduino-core|Programmer avec l'Arduino-core]] — l'alternative recommandée pour débuter
- [[esp32-freertos|FreeRTOS]] — le système temps réel natif
- [[firmware|Firmware]] — structuration du code embarqué (transverse)
