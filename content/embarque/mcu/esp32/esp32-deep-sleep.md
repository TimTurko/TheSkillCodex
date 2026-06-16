---
title: Deep sleep avec l'ESP32
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

Le **deep sleep** est le mode très basse consommation de l'ESP32 : le processeur et la radio sont coupés, la consommation tombe d'une dizaine de **milliampères** à une dizaine de **microampères**, et la puce ne se réveille qu'à un événement choisi (un délai, un bouton, un toucher). C'est ce qui rend l'ESP32 viable sur batterie : un capteur qui se réveille, mesure, envoie, puis se rendort passe l'essentiel de sa vie à ne presque rien consommer. La notion générale de gestion d'énergie est traitée dans [[deep-sleep|deep sleep]] *(→ notion [[deep-sleep]])* ; cette fiche en donne l'incarnation ESP32.

![Cycle du deep sleep et ses sources de réveil](/ressources/img/esp32-deep-sleep/reveil.svg)

## À quoi ça sert ?

Le deep sleep répond à un besoin précis : **fonctionner longtemps sur une petite batterie** quand le système n'a rien à faire la plupart du temps.

- **Allonger l'autonomie d'un facteur énorme.** Une station qui mesure toutes les 10 minutes peut dormir 99,9 % du temps. Le gain ne se joue pas sur la consommation active, mais sur celle du repos — passer de 20 mA à 10 µA au repos change l'autonomie d'une pile bouton de quelques jours à plusieurs mois.
- **Se réveiller au bon moment.** Le réveil est déclenché par un **timer** (mesure périodique), un **bouton/capteur** (événement), ou un **toucher** (interaction) — la puce dort jusque-là.

> [!warning]
> **Le réveil est un RESET, pas une reprise.** Au réveil, l'ESP32 redémarre : `setup()` est rejoué depuis le début, le code placé *après* `esp_deep_sleep_start()` n'est jamais atteint, et **toutes les variables ordinaires sont réinitialisées**. Seule la mémoire RTC (voir plus bas) survit. C'est le contresens n°1 sur le deep sleep.

## Réveil par timer (le plus courant)

Deux lignes : armer le timer, entrer en sommeil. Le délai est en **microsecondes**.

```cpp
#define uS_PAR_S 1000000ULL          // microsecondes par seconde

void setup() {
  Serial.begin(115200);
  delay(100);                        // laisse le temps a l'USB de s'etablir

  Serial.println("Reveil ! Je travaille...");
  // ... mesure, envoi ...

  esp_sleep_enable_timer_wakeup(10 * uS_PAR_S);  // dormir 10 s
  Serial.println("Je m'endors.");
  Serial.flush();                    // vide le port avant de couper
  esp_deep_sleep_start();            // au-dela : plus rien ne s'execute
}

void loop() {}                       // jamais atteint en deep sleep
```

Tout le travail se fait dans `setup()` : à chaque réveil, la carte exécute `setup()`, fait sa tâche, se rendort. `loop()` reste vide. Ici, `#define` est légitime (constante d'échelle utilisée dans un calcul de durée) ; pour des broches ou seuils, on préférera `const`.

## Mémoire RTC : ce qui survit au sommeil

Pour conserver une information d'un réveil au suivant (un compteur, un état), on la place en **mémoire RTC**, alimentée pendant le sommeil, avec l'attribut `RTC_DATA_ATTR` :

```cpp
RTC_DATA_ATTR int nombreReveils = 0;   // survit au deep sleep

void setup() {
  Serial.begin(115200);
  delay(100);
  nombreReveils++;                      // incremente a chaque reveil
  Serial.print("Reveil n° ");
  Serial.println(nombreReveils);

  esp_sleep_enable_timer_wakeup(5 * 1000000ULL);
  esp_deep_sleep_start();
}

void loop() {}
```

Sans `RTC_DATA_ATTR`, `nombreReveils` repartirait de zéro à chaque réveil (puisque c'est un RESET). Avec, il s'accumule.

## Exemple — Station de mesure périodique

Le motif type d'un capteur sur batterie : réveil toutes les 30 secondes, lecture d'un capteur analogique, affichage, compteur de cycles conservé, puis rendormissement.

```cpp
#define uS_PAR_S 1000000ULL
const int CAPTEUR = 34;                 // ADC1
const uint64_t PERIODE_S = 30;          // intervalle entre deux mesures

RTC_DATA_ATTR int cycle = 0;            // conserve entre les reveils

void setup() {
  Serial.begin(115200);
  delay(100);
  analogSetAttenuation(ADC_11db);

  cycle++;
  int mesure = analogRead(CAPTEUR);
  Serial.print("Cycle ");
  Serial.print(cycle);
  Serial.print(" — mesure = ");
  Serial.println(mesure);
  // ... ici : envoyer la mesure (Wi-Fi/BLE) avant de dormir ...

  esp_sleep_enable_timer_wakeup(PERIODE_S * uS_PAR_S);
  Serial.flush();
  esp_deep_sleep_start();
}

void loop() {}
```

Au moniteur série, on voit une ligne apparaître toutes les 30 secondes, le numéro de cycle s'incrémentant. Entre deux, la carte est en deep sleep : sur un **module nu** (sans la carte de développement), la consommation y est de l'ordre du microampère.

Prendre capture d'écran de *le moniteur série montrant les lignes « Cycle N — mesure = XXX » espacées de 30 secondes, le numéro de cycle croissant après plusieurs réveils*.

## Réveil par un événement externe

Au lieu (ou en plus) du timer, l'ESP32 peut se réveiller sur une **broche** :

- `esp_sleep_enable_ext0_wakeup(GPIO_NUM_33, niveau)` — réveil sur **une** broche (un bouton), au niveau `0` (LOW) ou `1` (HIGH).
- `esp_sleep_enable_ext1_wakeup(masque, mode)` — réveil sur **plusieurs** broches à la fois.

Ces réveils n'acceptent que les **broches RTC** (`GPIO0, 2, 4, 12-15, 25-27, 32-39`) — une broche ordinaire ne réveille pas la puce. Après le réveil, `esp_sleep_get_wakeup_cause()` indique *pourquoi* la carte s'est réveillée (timer, ext0, touch…), pour réagir différemment selon la source.

## Pièges

**Croire que le code reprend où il s'était arrêté.** Le réveil est un RESET : `setup()` rejoué, `loop()` jamais atteint avant le sommeil, variables remises à zéro. Tout le travail va dans `setup()`, avant `esp_deep_sleep_start()`.

**Variable perdue entre deux réveils.** Un compteur ou un état déclaré normalement repart de zéro à chaque réveil. Le déclarer `RTC_DATA_ATTR` pour qu'il survive.

**Broche non-RTC pour un réveil externe.** `ext0`/`ext1` n'acceptent que les broches RTC. Une broche ordinaire est ignorée — la carte ne se réveille jamais.

**Bouton flottant en sommeil.** Pendant le deep sleep, les résistances de tirage internes ne sont pas garanties. Un bouton de réveil exige une **résistance externe** (ou l'activation explicite du tirage RTC), sinon des réveils intempestifs sur du bruit.

**`Serial` coupé trop tôt.** Sans `Serial.flush()` avant `esp_deep_sleep_start()`, les derniers messages peuvent ne pas partir. Et un `delay(100)` en début de `setup()` laisse le temps à l'USB de se rétablir avant d'imprimer.

**Consommation décevante sur carte de développement.** La carte de dev (DevKit) garde sous tension sa puce USB-série, sa LED d'alimentation et son régulateur — elle consomme bien plus que le microampère annoncé. La très basse consommation se mesure sur le **module nu**, pas sur le kit de dev.

## Exercices

> [!question] Exercice 1 — Réveil au bouton + cause du réveil
> Configurez un réveil **timer** (toutes les 20 s) **et** un réveil **bouton** sur `GPIO33`. À chaque réveil, affichez *pourquoi* la carte s'est réveillée (timer ou bouton).

> [!success]- Corrigé
> On arme les deux sources, puis on interroge la cause au réveil.
> ```cpp
> #define uS_PAR_S 1000000ULL
>
> void setup() {
>   Serial.begin(115200);
>   delay(100);
>
>   // pourquoi s'est-on reveille ?
>   esp_sleep_wakeup_cause_t cause = esp_sleep_get_wakeup_cause();
>   switch (cause) {
>     case ESP_SLEEP_WAKEUP_TIMER: Serial.println("Reveil : timer");   break;
>     case ESP_SLEEP_WAKEUP_EXT0:  Serial.println("Reveil : bouton");  break;
>     default:                     Serial.println("Demarrage initial"); break;
>   }
>
>   // armer les deux sources pour le prochain sommeil
>   esp_sleep_enable_timer_wakeup(20 * uS_PAR_S);
>   esp_sleep_enable_ext0_wakeup(GPIO_NUM_33, 0);   // bouton vers GND, niveau LOW
>
>   Serial.flush();
>   esp_deep_sleep_start();
> }
>
> void loop() {}
> ```
> Le `switch` sur la cause permet d'agir différemment : une mesure de routine au réveil timer, une action immédiate au réveil bouton. Le bouton sur `GPIO33` (broche RTC) vers la masse, avec une résistance externe de tirage vers 3,3 V.

> [!question] Exercice 2 — Estimer l'autonomie
> Une carte (module nu) consomme **80 mA** pendant 2 s d'activité (réveil, mesure, envoi Wi-Fi), puis **10 µA** en deep sleep, avec un cycle toutes les **10 minutes**. Estimez la consommation moyenne. Ordre de grandeur de l'autonomie sur une pile de 1000 mAh ?

> [!success]- Corrigé
> Consommation moyenne = (charge active + charge sommeil) / durée du cycle.
> - Cycle = 600 s ; actif = 2 s à 80 mA ; sommeil = 598 s à 0,01 mA.
> - Charge active : 80 mA × 2 s = 160 mA·s. Charge sommeil : 0,01 mA × 598 s ≈ 6 mA·s.
> - Courant moyen ≈ (160 + 6) / 600 ≈ **0,28 mA**.
> - Autonomie ≈ 1000 mAh / 0,28 mA ≈ **3500 h ≈ 5 mois**.
>
> Le sommeil pèse négligeablement (6 contre 160) : c'est la **brièveté et la rareté de l'activité** qui font l'autonomie, pas seulement le courant de veille. Sans deep sleep (80 mA en continu), la même pile tiendrait ~12 h.

## Cas particulier — Light sleep

Entre le fonctionnement normal et le deep sleep existe le **light sleep** : la puce suspend le processeur mais **conserve l'état** (RAM, périphériques), et reprend l'exécution là où elle s'était arrêtée au réveil — sans RESET. La consommation est intermédiaire (quelques centaines de µA à quelques mA). On le choisit quand on veut économiser **sans perdre le contexte** (latence de réveil faible), là où le deep sleep impose de tout reconstruire à chaque cycle.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — si le projet est alimenté sur batterie, valider tôt un cycle réveil → mesure → sommeil et **mesurer la consommation réelle** lève l'incertitude d'autonomie, souvent dimensionnante pour un objet connecté.
- **Dimensionnement de l'alimentation** — l'estimation de consommation moyenne (cf. exercice 2) conditionne le choix de la batterie et entre dans le dossier technique.

Penser le système autour du cycle veille/réveil dès la conception (que faire au réveil, qu'est-ce qui doit survivre) évite de découvrir trop tard qu'une architecture « toujours active » condamne l'autonomie visée.

## Aller plus loin

- [[deep-sleep|Deep sleep]] — la notion d'économie d'énergie par mise en veille (transverse).
- [[esp32-wifi|Wi-Fi]] · [[esp32-ble|Bluetooth LE]] — réveiller, échanger, se rendormir : le motif des objets connectés sur batterie.
- ULP (*Ultra Low Power coprocessor*) — un cœur minuscule qui peut surveiller un capteur pendant que le processeur principal dort, et ne le réveiller qu'au seuil utile.
- [Documentation Sleep Modes d'Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/sleep_modes.html) — sources de réveil détaillées, mesures de consommation.

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[esp32-prise-en-main|Prise en main de l'ESP32]] — prérequis (IDE + support + premier téléversement)
- [[esp32-gpio|Configurer les GPIO]] — broches RTC utilisables pour le réveil externe
- [[deep-sleep|Deep sleep]] — la notion transverse d'économie d'énergie
- [[esp32-freertos|FreeRTOS]] — gérer plusieurs tâches quand la carte reste active
