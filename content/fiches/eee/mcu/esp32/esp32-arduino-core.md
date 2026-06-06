---
title: Programmer l'ESP32 avec l'Arduino-core
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - esp32
prerequis:
  - esp32
  - esp32-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

L'**Arduino-core pour ESP32** est la couche logicielle qui apporte l'API Arduino (`setup()`, `loop()`, `digitalWrite`…) sur les puces ESP32. C'est le **chemin recommandé pour débuter** : on réutilise les mêmes réflexes que sur un Arduino, mais avec la puissance, la mémoire et les radios de l'ESP32. Sous le capot, cette couche repose sur **ESP-IDF** (l'environnement natif d'Espressif) et son système temps réel **FreeRTOS** — ce qui change discrètement quelques règles du jeu. La façon de structurer un firmware, quel que soit le chemin, relève de [[firmware|firmware]].

## À quoi ça sert ?

L'Arduino-core remplit un rôle de pont :

- **Réutiliser ce qu'on sait.** Tout le vocabulaire Arduino (`pinMode`, `analogRead`, `Serial`, bibliothèques `Wire`/`SPI`…) fonctionne tel quel. La migration d'un projet Arduino vers ESP32 est souvent immédiate.
- **Accéder aux capacités ESP32 simplement.** Wi-Fi, BLE, deep sleep, PWM par LEDC : autant de fonctions exposées via des API simples, sans plonger dans l'environnement natif.
- **Garder une porte vers le natif.** Depuis un sketch Arduino, on peut appeler directement des fonctions ESP-IDF (`esp_*`) quand on a besoin de finesse — sans tout réécrire.

C'est le bon point d'entrée. Le passage à l'environnement natif complet ([[esp32-idf|ESP-IDF]]) ne se justifie que sur des besoins précis.

## Le même code qu'Arduino, presque

Un sketch ESP32 a la forme d'un sketch Arduino :

```cpp
const int LED = 16;

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, !digitalRead(LED));
  delay(500);
}
```

`setup()` une fois, `loop()` en boucle : le modèle est identique. Les différences sont des **détails de plateforme**, pas de structure : `Serial` à 115200 par défaut, `analogRead` sur 12 bits, PWM par `ledcAttach` au lieu d'`analogWrite`, broches en 3,3 V — tous traités dans [[esp32-gpio|configurer les GPIO]] et [[esp32-serie|le moniteur série]].

## Ce qui change sous le capot

L'Arduino-core ESP32 n'est pas du « bare metal » comme l'Arduino AVR : il tourne **au-dessus de FreeRTOS**. Concrètement :

- **`loop()` est une tâche FreeRTOS.** Le cœur crée une tâche (`loopTask`) qui appelle `setup()` puis répète `loop()`. Votre code partage donc le processeur avec les tâches système (pile Wi-Fi/BLE, etc.).
- **Deux cœurs.** L'ESP32 d'origine a deux cœurs ; `loop()` s'exécute par défaut sur l'un d'eux. On peut créer ses propres tâches et les répartir — voir [[esp32-freertos|FreeRTOS]].
- **Beaucoup plus de mémoire.** Des centaines de kilo-octets de RAM (contre quelques-uns sur un Uno) : les `String`, les buffers, les bibliothèques lourdes passent plus facilement.
- **L'API native est accessible.** `esp_*`, les fonctions FreeRTOS (`xTaskCreate`, `vTaskDelay`) sont utilisables directement dans un sketch.

> [!tip]
> **`loop()` doit rendre la main.** Comme `loop()` est une tâche partageant le CPU, une boucle qui ne « souffle » jamais (calcul intensif sans `delay` ni `vTaskDelay`) peut affamer les tâches système et déclencher le *task watchdog*. Un `delay()` (qui, sur ESP32, cède le processeur) ou une architecture non bloquante évitent le souci.

## Exemple — Un sketch qui mêle Arduino et ESP-IDF

Pour rendre tangible que l'Arduino-core est posé sur l'environnement natif, ce sketch utilise l'API Arduino **et** deux fonctions natives : le cœur sur lequel tourne `loop()`, et la mémoire libre.

```cpp
void setup() {
  Serial.begin(115200);
  delay(200);
}

void loop() {
  // API native ESP-IDF / FreeRTOS, appelees depuis un sketch Arduino
  Serial.print("loop() tourne sur le coeur ");
  Serial.println(xPortGetCoreID());                 // 0 ou 1

  Serial.print("Memoire libre : ");
  Serial.print(esp_get_free_heap_size());           // octets
  Serial.println(" octets");

  delay(2000);
}
```

Au moniteur série, on lit le numéro de cœur et la mémoire libre — deux informations qui n'existent pas sur un Arduino AVR, obtenues sans quitter le confort du sketch. C'est l'illustration concrète du pont : **on programme « en Arduino » tout en ayant l'ESP-IDF sous la main**.

Prendre capture d'écran de *le moniteur série affichant « loop() tourne sur le coeur X » et « Memoire libre : XXXXXX octets » répétés toutes les 2 secondes*.

## Pièges

**Supposer les réflexes AVR.** Manipuler des registres AVR, compter sur des timings au cycle près, ou utiliser `<avr/...>` ne fonctionne pas : l'architecture est différente (Xtensa ou RISC-V). Passer par les API du cœur.

**Boucle qui n'rend jamais la main.** Un `loop()` (ou une tâche) en calcul permanent sans `delay`/`vTaskDelay` déclenche le *task watchdog* (`Task watchdog got triggered`). Céder le processeur régulièrement.

**Bibliothèque Arduino incompatible ESP32.** Toutes les bibliothèques Arduino ne supportent pas l'ESP32 (certaines tapent dans des registres AVR). Vérifier la compatibilité ESP32 avant de dépendre d'une bibliothèque.

**Croire au « bare metal ».** L'Arduino-core ESP32 partage le CPU avec des tâches système (Wi-Fi/BLE). Le déterminisme temporel fin n'est pas garanti comme sur un AVR nu — pour des échéances strictes, structurer en tâches ([[esp32-freertos|FreeRTOS]]) ou passer en natif.

## Exercices

> [!question] Exercice 1 — Sur quel cœur ?
> Faites afficher, une seule fois au démarrage, le numéro de cœur sur lequel s'exécute `setup()`. Est-ce le même que `loop()` ?

> [!success]- Corrigé
> ```cpp
> void setup() {
>   Serial.begin(115200);
>   delay(200);
>   Serial.print("setup() sur le coeur ");
>   Serial.println(xPortGetCoreID());
> }
>
> void loop() {}
> ```
> `setup()` et `loop()` s'exécutent dans la **même tâche** (`loopTask`), donc sur le **même cœur** (le cœur 1 par défaut sur l'ESP32 d'origine). Pour faire travailler l'autre cœur, il faut créer une tâche et l'y épingler — voir [[esp32-freertos|FreeRTOS]].

> [!question] Exercice 2 — Mémoire avant/après
> Affichez la mémoire libre, puis allouez une grande `String` (par exemple 5000 caractères) et réaffichez-la. Que constate-t-on ?

> [!success]- Corrigé
> ```cpp
> void setup() {
>   Serial.begin(115200);
>   delay(200);
>   Serial.print("Avant : ");
>   Serial.println(esp_get_free_heap_size());
>
>   String grosse = "";
>   for (int i = 0; i < 5000; i++) grosse += 'x';
>
>   Serial.print("Apres : ");
>   Serial.println(esp_get_free_heap_size());
>   Serial.print("Longueur : ");
>   Serial.println(grosse.length());
> }
>
> void loop() {}
> ```
> La mémoire libre baisse d'environ la taille allouée (un peu plus, avec le surcoût de gestion). Sur ESP32, ces milliers d'octets passent sans souci ; sur un Uno (2 ko de RAM), la même allocation planterait. C'est l'un des apports concrets de la plateforme.

## Cas particulier — PlatformIO et Arduino dans ESP-IDF

Deux configurations dépassent l'IDE Arduino :

- **PlatformIO** (extension VS Code) gère l'Arduino-core et l'ESP-IDF dans un même projet, avec gestion fine des bibliothèques et du versionnage — pratique dès que le projet grossit.
- **Arduino comme composant d'ESP-IDF** : on peut utiliser les bibliothèques Arduino *à l'intérieur* d'un projet ESP-IDF natif. On garde le confort Arduino pour certaines parties tout en bénéficiant de l'environnement natif — un pont dans l'autre sens.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — choisir l'Arduino-core comme environnement de la PoC logicielle est le défaut raisonnable : on avance vite, on garde la porte du natif ouverte. Le réserver permet de ne basculer en [[esp32-idf|ESP-IDF]] que si un verrou précis l'exige.
- **Réutilisation d'un prototype Arduino** — un montage validé sur Arduino se reporte souvent tel quel sur ESP32 via le core, en gagnant connectivité et mémoire.

Comprendre que l'Arduino-core repose sur FreeRTOS — donc que `loop()` n'est pas seul au monde — évite les pièges de watchdog et prépare le passage au multitâche quand le projet le demande.

## Aller plus loin

- [[esp32-freertos|FreeRTOS]] — créer et coordonner plusieurs tâches, exploiter les deux cœurs.
- [[esp32-idf|Découvrir ESP-IDF]] — quand et pourquoi passer à l'environnement natif.
- [[firmware|Firmware]] — structurer le code embarqué, du super-loop au RTOS (transverse).
- [Documentation Arduino-ESP32 d'Espressif](https://docs.espressif.com/projects/arduino-esp32/en/latest/) — API, cartes, exemples.

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[esp32-prise-en-main|Prise en main de l'ESP32]] — installer le core et téléverser
- [[esp32-idf|Découvrir ESP-IDF]] — l'environnement natif, sous l'Arduino-core
- [[esp32-freertos|FreeRTOS]] — le multitâche sur lequel repose `loop()`
- [[cpp|C++]] — le langage commun aux deux environnements (transverse)
