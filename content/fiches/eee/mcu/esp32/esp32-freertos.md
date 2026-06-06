---
title: Multitâche FreeRTOS sur l'ESP32
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

**FreeRTOS** est le système temps réel au cœur de l'ESP32 : il permet de faire tourner plusieurs **tâches** « en parallèle », chacune écrite comme une petite boucle indépendante, que l'ordonnanceur (*scheduler*) entrelace sur le ou les processeurs. C'est la spécialité de la famille — l'ESP32 a deux cœurs et un RTOS natif. La `loop()` d'un sketch Arduino est elle-même une tâche FreeRTOS ; cette fiche montre comment **créer et coordonner ses propres tâches**. Le *pourquoi* d'un RTOS et sa place dans l'échelle des architectures sont traités dans [[firmware|firmware]] *(→ notion [[firmware]])*.

![Ordonnancement préemptif de deux tâches FreeRTOS](/ressources/img/esp32-freertos-ordonnancement.svg)

## À quoi ça sert ?

Le multitâche répond à un besoin récurrent : faire **plusieurs choses à des rythmes différents** sans les emmêler à la main.

- **Séparer les activités.** Lire un capteur à 10 Hz, mettre à jour un afficheur à 2 Hz, gérer le Wi-Fi en arrière-plan : chaque activité devient une tâche autonome, au lieu d'un seul `loop()` qui jongle avec des compteurs.
- **Exploiter les deux cœurs.** Une tâche de calcul lourd peut tourner sur un cœur pendant que l'autre gère la communication, sans se gêner.
- **Tenir des échéances.** Une tâche prioritaire (régulation, sécurité) passe devant les autres quand elle est prête — l'ordonnancement préemptif garantit sa réactivité.

C'est l'alternative structurée à la boucle coopérative non bloquante quand le nombre d'activités ou les contraintes de temps grandissent (cf. l'échelle de [[firmware|firmware]]).

## Les concepts

- **Tâche** — une fonction qui ne se termine jamais (`for (;;) { ... }`), exécutée comme une activité indépendante.
- **Scheduler préemptif** — il donne le processeur à la **tâche prête la plus prioritaire**. Si une tâche plus prioritaire devient prête, elle **interrompt** (préempte) celle en cours.
- **Priorité** — un entier : plus il est élevé, plus la tâche passe devant.
- **`vTaskDelay()`** — l'équivalent FreeRTOS de `delay()`, mais qui **rend explicitement la main** : pendant l'attente, les autres tâches s'exécutent. C'est ce qui permet la coexistence.
- **Deux cœurs** — sur l'ESP32 d'origine, on peut **épingler** une tâche à un cœur (`xTaskCreatePinnedToCore`) ou la laisser libre.

## Créer une tâche

Une tâche est une fonction `void f(void *param)` contenant une boucle infinie. On la lance avec `xTaskCreatePinnedToCore` :

```cpp
void tacheClignote(void *param) {
  pinMode(LED_BUILTIN, OUTPUT);
  for (;;) {                                  // boucle infinie : ne retourne jamais
    digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
    vTaskDelay(pdMS_TO_TICKS(500));           // cede le CPU 500 ms
  }
}

void setup() {
  xTaskCreatePinnedToCore(
    tacheClignote,   // fonction de la tache
    "Clignote",      // nom (debug)
    2048,            // taille de pile en octets (ESP-IDF)
    NULL,            // parametre passe a la tache
    1,               // priorite
    NULL,            // handle (NULL si on n'en a pas besoin)
    1                // coeur (0 ou 1)
  );
}

void loop() {}       // loop() est elle-meme une tache, ici inutilisee
```

> [!tip]
> **`vTaskDelay`, pas une boucle d'attente.** Une tâche qui attend par `while (millis() - t < d) {}` monopolise le CPU et bloque les autres. `vTaskDelay(pdMS_TO_TICKS(d))` met la tâche en sommeil et **libère le processeur** : c'est la clé de la coexistence.

## Exemple — Deux tâches indépendantes

Deux activités à des rythmes différents, vraiment séparées : une tâche fait clignoter une LED toutes les 200 ms, l'autre lit un capteur et l'imprime toutes les secondes. Aucun compteur partagé, aucun entrelacement manuel.

```cpp
const int LED = 16;
const int CAPTEUR = 34;          // ADC1

void tacheLed(void *param) {
  pinMode(LED, OUTPUT);
  for (;;) {
    digitalWrite(LED, !digitalRead(LED));
    vTaskDelay(pdMS_TO_TICKS(200));    // 200 ms
  }
}

void tacheCapteur(void *param) {
  for (;;) {
    int v = analogRead(CAPTEUR);
    Serial.print("Capteur : ");
    Serial.println(v);
    vTaskDelay(pdMS_TO_TICKS(1000));   // 1 s
  }
}

void setup() {
  Serial.begin(115200);
  analogSetAttenuation(ADC_11db);

  xTaskCreatePinnedToCore(tacheLed,     "LED",     2048, NULL, 1, NULL, 1);
  xTaskCreatePinnedToCore(tacheCapteur, "Capteur", 2048, NULL, 1, NULL, 1);
}

void loop() {}
```

La LED clignote à son rythme, les mesures défilent au leur, sans que l'un ne perturbe l'autre. Chaque tâche est une boucle simple, lisible isolément — c'est l'intérêt structurant du RTOS face à un `loop()` unique qui devrait jongler avec deux temporisations.

Prendre capture d'écran de *le moniteur série affichant les lignes « Capteur : XXX » une fois par seconde, pendant que la LED clignote visiblement plus vite sur la carte*.

## Communiquer entre tâches

Deux tâches ne doivent pas se partager une variable sans précaution (accès concurrents = données corrompues). FreeRTOS fournit deux outils :

- **File (queue)** — une tâche *productrice* y dépose des valeurs, une tâche *consommatrice* les retire, dans l'ordre. C'est le canal recommandé pour transmettre des données.
- **Mutex (sémaphore)** — un « jeton » qu'une tâche prend avant d'accéder à une ressource partagée et rend après, garantissant qu'une seule y touche à la fois.

```cpp
QueueHandle_t file;

void producteur(void *param) {
  for (;;) {
    int mesure = analogRead(34);
    xQueueSend(file, &mesure, portMAX_DELAY);   // depose dans la file
    vTaskDelay(pdMS_TO_TICKS(500));
  }
}

void consommateur(void *param) {
  int recu;
  for (;;) {
    if (xQueueReceive(file, &recu, portMAX_DELAY)) {  // attend une valeur
      Serial.print("Recu : ");
      Serial.println(recu);
    }
  }
}

void setup() {
  Serial.begin(115200);
  file = xQueueCreate(10, sizeof(int));   // 10 entiers
  xTaskCreatePinnedToCore(producteur,   "Prod", 2048, NULL, 1, NULL, 1);
  xTaskCreatePinnedToCore(consommateur, "Conso", 2048, NULL, 1, NULL, 1);
}

void loop() {}
```

## Pièges

**Tâche qui ne rend jamais la main.** Une boucle de tâche sans `vTaskDelay` (ni attente bloquante FreeRTOS) affame les autres tâches et déclenche le *task watchdog*. Toute tâche doit céder le CPU régulièrement.

**Variable partagée non protégée.** Deux tâches qui écrivent la même variable sans mutex produisent des valeurs incohérentes (course critique). Passer par une file, ou protéger l'accès par un mutex.

**Pile trop petite.** Une tâche qui déborde sa pile plante (`stack canary` ou redémarrage). Augmenter la taille (le 3ᵉ argument, en octets) si la tâche utilise des buffers ou de la récursion.

**Retour de la fonction de tâche.** Une fonction de tâche ne doit **jamais** retourner : sans boucle infinie, la tâche se termine et peut planter le système. Toujours `for (;;)`.

**Confondre priorité et fréquence.** Une priorité élevée ne fait pas tourner la tâche « plus souvent » : elle la fait passer **devant** quand elle est prête. Le rythme, c'est le `vTaskDelay` qui le fixe.

**`delay()` vs `vTaskDelay()`.** Sur l'Arduino-core ESP32, `delay()` cède aussi le CPU (il appelle `vTaskDelay`), donc reste acceptable dans une tâche ; mais utiliser `vTaskDelay(pdMS_TO_TICKS(...))` explicite l'intention en contexte multitâche.

## Exercices

> [!question] Exercice 1 — Une tâche par cœur
> Lancez deux tâches qui impriment chacune le numéro de cœur sur lequel elles tournent, l'une épinglée au cœur 0, l'autre au cœur 1. Vérifiez au moniteur.

> [!success]- Corrigé
> Le dernier argument de `xTaskCreatePinnedToCore` fixe le cœur ; `xPortGetCoreID()` le lit depuis la tâche.
> ```cpp
> void tache(void *param) {
>   for (;;) {
>     Serial.print("Tache sur le coeur ");
>     Serial.println(xPortGetCoreID());
>     vTaskDelay(pdMS_TO_TICKS(1000));
>   }
> }
>
> void setup() {
>   Serial.begin(115200);
>   xTaskCreatePinnedToCore(tache, "T0", 2048, NULL, 1, NULL, 0);  // coeur 0
>   xTaskCreatePinnedToCore(tache, "T1", 2048, NULL, 1, NULL, 1);  // coeur 1
> }
>
> void loop() {}
> ```
> Les deux tâches partagent le même code mais affichent des numéros de cœur différents — la preuve que le travail est bien réparti sur les deux cœurs.

> [!question] Exercice 2 — Protéger un compteur partagé
> Deux tâches incrémentent un même compteur global, chacune à son rythme. Protégez l'accès par un mutex pour éviter les incohérences.

> [!success]- Corrigé
> On crée un mutex, et chaque tâche le prend avant de toucher au compteur, le rend après.
> ```cpp
> SemaphoreHandle_t verrou;
> volatile int compteur = 0;
>
> void incremente(void *param) {
>   for (;;) {
>     xSemaphoreTake(verrou, portMAX_DELAY);   // acces exclusif
>     compteur++;
>     int copie = compteur;
>     xSemaphoreGive(verrou);                   // libere
>     Serial.println(copie);
>     vTaskDelay(pdMS_TO_TICKS(300));
>   }
> }
>
> void setup() {
>   Serial.begin(115200);
>   verrou = xSemaphoreCreateMutex();
>   xTaskCreatePinnedToCore(incremente, "A", 2048, NULL, 1, NULL, 1);
>   xTaskCreatePinnedToCore(incremente, "B", 2048, NULL, 1, NULL, 1);
> }
>
> void loop() {}
> ```
> Le mutex garantit qu'une seule tâche modifie `compteur` à la fois : la séquence lue est cohérente, sans valeurs sautées ou écrasées. (Une file conviendrait aussi pour transmettre les valeurs sans variable partagée.)

## Cas particulier — `loop()` est déjà une tâche

Sur l'Arduino-core ESP32, on n'est jamais « hors RTOS » : le cœur crée une tâche `loopTask` qui exécute `setup()` puis `loop()`. Créer ses propres tâches ne fait qu'**ajouter** des activités à côté de celle-là. On peut donc adopter le multitâche **progressivement** : garder `loop()` pour le principal, déporter en tâches les activités qui méritent leur propre rythme ou leur propre cœur. C'est l'application directe du dernier barreau de l'échelle de [[firmware|firmware]].

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — dès que le prototype doit mener plusieurs activités à des cadences différentes (acquisition + communication + IHM), structurer en tâches lève l'enchevêtrement d'un `loop()` surchargé et clarifie le comportement.
- **Régulation et échéances** — une tâche de régulation prioritaire, cadencée par `vTaskDelay`, garantit une période d'asservissement régulière, isolée des autres traitements.

Choisir entre boucle non bloquante et RTOS au bon moment (cf. [[firmware|firmware]]) évite deux écueils : un `loop()` ingérable de compteurs, ou un RTOS introduit prématurément là où une simple boucle coopérative aurait suffi.

## Aller plus loin

- [[firmware|Firmware]] — l'échelle des architectures, du super-loop au RTOS : *quand* franchir le pas (transverse).
- [[esp32-arduino-core|Programmer avec l'Arduino-core]] — pourquoi `loop()` est déjà une tâche.
- [[esp32-idf|Découvrir ESP-IDF]] — en natif, le multitâche est explicite dès `app_main()`.
- [Documentation FreeRTOS d'Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/freertos.html) — tâches, files, sémaphores, timers logiciels.

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[esp32-arduino-core|Programmer avec l'Arduino-core]] — la couche au-dessus de FreeRTOS
- [[esp32-idf|Découvrir ESP-IDF]] — l'environnement natif, FreeRTOS de bout en bout
- [[firmware|Firmware]] — structurer le code embarqué, du super-loop au RTOS (transverse)
- [[esp32-deep-sleep|Deep sleep]] — l'autre levier de gestion du temps et de l'énergie
