---
title: Configurer les GPIO de l'ESP32
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

Configurer les **GPIO** (*General Purpose Input/Output*) de l'ESP32, c'est choisir quelles broches lire ou piloter, et comment. C'est le geste de base de toute interaction avec le monde physique — lire un bouton, allumer une LED, mesurer une tension, commander un actionneur. L'ESP32 offre beaucoup de broches, mais **toutes ne se valent pas** : certaines sont réservées, d'autres ont des contraintes au démarrage. Savoir lesquelles utiliser évite la majorité des montages qui « ne marchent pas sans raison ». Le concept général de broche d'entrée/sortie est traité dans [[gpio|GPIO]] ; cette fiche en donne l'incarnation ESP32.

## À quoi ça sert ?

Sur l'ESP32, bien choisir et configurer ses broches conditionne trois choses :

- **Que le montage fonctionne tout court.** Brancher un bouton sur une broche réservée à la Flash, ou attendre une résistance de tirage interne sur une broche qui n'en a pas, produit un comportement erratique impossible à déboguer au logiciel.
- **Que la carte démarre.** Quelques broches (*strapping pins*) sont lues au reset pour choisir le mode de boot ; un montage qui les force peut empêcher le démarrage.
- **Que la mesure soit lisible.** Les entrées analogiques ont des contraintes propres (plage, conflit avec le Wi-Fi) qu'il faut connaître avant de croire un relevé.

## Les broches de l'ESP32

L'ESP32 d'origine expose des GPIO numérotées (`GPIO0` à `GPIO39`). On les désigne **par leur numéro**, pas par une position de carte. Quelques catégories à connaître :

- **Broches polyvalentes** — la majorité : entrée, sortie, tirage interne, PWM. À privilégier.
- **Broches d'entrée seule** — `GPIO34`, `35`, `36`, `39` : lecture uniquement, **pas de sortie, pas de résistance de tirage interne**. Parfaites pour un capteur analogique, à proscrire pour piloter quoi que ce soit ou pour un bouton sans tirage externe.
- **Broches de la Flash** — `GPIO6` à `GPIO11` : utilisées par la mémoire Flash de la carte. **Ne pas y toucher**, sous peine de planter la puce.
- **Broches série** — `GPIO1` (TX) et `GPIO3` (RX) : c'est l'UART0 du [[esp32-serie|moniteur série]] ; les laisser libres tant qu'on l'utilise.
- **Strapping pins** — `GPIO0`, `2`, `5`, `12`, `15` : lues au reset pour le mode de boot. Utilisables, mais avec précaution (voir Pièges).

![Brochage de l'ESP32 par catégorie : broches polyvalentes, entrée seule (GPIO34/35/36/39), broches Flash (GPIO6-11), série (GPIO1/3) et strapping (GPIO0/2/5/12/15)|640](/ressources/img/esp32-gpio/brochage.svg)

> [!warning]
> **L'ESP32 est en 3,3 V et ne tolère pas le 5 V.** Appliquer 5 V sur une entrée peut **détruire la broche**. Tout signal 5 V (capteur, module) passe par une adaptation de niveau — voir [[niveaux-de-tension|niveaux de tension]]. C'est la différence la plus piégeuse avec l'Arduino.

## Configurer une broche numérique

Comme partout, deux temps : déclarer le **sens** dans `setup()`, puis lire ou écrire dans `loop()`.

```cpp
const int LED = 16;       // sortie
const int BOUTON = 4;     // entrée

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BOUTON, INPUT_PULLUP);  // tirage interne activé
}

void loop() {
  bool appuye = (digitalRead(BOUTON) == LOW);  // PULLUP : LOW quand appuyé
  digitalWrite(LED, appuye ? HIGH : LOW);
}
```

`pinMode` accepte `INPUT`, `OUTPUT`, `INPUT_PULLUP` et — spécificité ESP32 absente de l'Arduino AVR — `INPUT_PULLDOWN` (tirage interne vers la masse). Le tirage interne évite l'entrée *flottante* : une broche en `INPUT` nu capte le bruit ambiant et lit n'importe quoi. **Rappel : les broches `GPIO34-39` n'ont aucun tirage interne** — un bouton sur l'une d'elles exige une résistance externe.

![Câblage sur ESP32 : LED avec résistance 220 Ω sur GPIO16, bouton entre GPIO4 et GND lu en INPUT_PULLUP|600](/ressources/img/esp32-gpio/montage-led-bouton.svg)

> [!tip]
> **Constantes en `const`, pas en `#define`.** Déclarer `const int LED = 16;` est typé et lisible ; le compilateur vérifie l'usage. On réserve `#define` à ce que `const` ne sait pas faire (compilation conditionnelle, macros).

## Lire une entrée analogique

`analogRead(broche)` renvoie la tension de la broche sur une échelle **12 bits : 0 à 4095** (et non 10 bits / 0-1023 comme l'Arduino Uno). Deux contraintes ESP32 majeures :

- **Plage utile et atténuation.** Par défaut, la pleine échelle ne couvre pas tout le 0-3,3 V. Pour lire jusqu'à ~3,3 V, régler l'atténuation : `analogSetAttenuation(ADC_11db);` dans `setup()`.
- **Conflit ADC2 / Wi-Fi.** Les broches du convertisseur **ADC2** (`GPIO0, 2, 4, 12-15, 25-27`) sont **inutilisables dès que le Wi-Fi est actif**. Pour une mesure analogique sur un projet connecté, utiliser **ADC1** : `GPIO32` à `GPIO39`.

```cpp
const int POTAR = 34;  // ADC1, compatible Wi-Fi, entrée seule

void setup() {
  Serial.begin(115200);
  analogSetAttenuation(ADC_11db);  // plage ~0–3,3 V
}

void loop() {
  int brut = analogRead(POTAR);          // 0..4095
  float volts = brut * 3.3 / 4095.0;     // conversion en tension
  Serial.println(volts, 2);
  delay(200);
}
```

## Commander en PWM (intensité, vitesse)

L'ESP32 n'a pas d'`analogWrite` historique : la modulation de largeur d'impulsion passe par le périphérique **LEDC**. Avec le cœur 3.x, on **attache** une broche à une fréquence et une résolution, puis on écrit un rapport cyclique :

```cpp
const int LED = 16;

void setup() {
  ledcAttach(LED, 5000, 8);   // 5 kHz, résolution 8 bits (0..255)
}

void loop() {
  for (int duty = 0; duty <= 255; duty++) {
    ledcWrite(LED, duty);     // fondu progressif
    delay(5);
  }
}
```

> [!warning]
> **L'API LEDC a changé au cœur 3.0.** Le code ci-dessus (`ledcAttach(broche, freq, bits)` + `ledcWrite(broche, duty)`) suppose un cœur **≥ 3.0**. Sur un cœur 2.x, l'API était `ledcSetup(canal, freq, bits)` + `ledcAttachPin(broche, canal)` + `ledcWrite(canal, duty)`. Si `ledcAttach` est introuvable, c'est une question de version (voir [[esp32-prise-en-main|prise en main]], étape 2).

Le concept de PWM lui-même (rapport cyclique, fréquence) est transverse — voir [[pwm|PWM]].

## Pièges

**Broche d'entrée seule utilisée en sortie.** `GPIO34-39` ne peuvent pas piloter une LED ni fournir de tirage interne. Symptôme : `pinMode(34, OUTPUT)` sans effet, ou un bouton qui lit n'importe quoi. Les réserver aux **capteurs en lecture**.

**Entrée flottante.** Un bouton sur une broche `INPUT` sans tirage (ni interne ni externe) lit aléatoirement HIGH/LOW. Utiliser `INPUT_PULLUP` (ou `INPUT_PULLDOWN`), et sur `GPIO34-39` une **résistance externe** obligatoire.

**ADC2 + Wi-Fi.** Une mesure analogique qui devient nulle ou figée dès qu'on active le Wi-Fi : la broche est sur ADC2. Migrer le capteur sur ADC1 (`GPIO32-39`).

**Strapping pin contrainte au boot.** Un montage qui force `GPIO0`, `2`, `5`, `12` ou `15` à un niveau au reset peut empêcher le démarrage (`GPIO0` à LOW = mode bootloader ; `GPIO12` à HIGH = mauvaise tension Flash). Éviter de les câbler en tirage permanent, ou choisir d'autres broches.

**Toucher aux broches Flash 6-11.** Les câbler plante la puce. Ne jamais les utiliser comme GPIO.

**Croire l'échelle Arduino.** `analogRead` rend 0-4095 (12 bits), pas 0-1023. Une formule de conversion copiée d'un code Uno donne des valeurs fausses d'un facteur 4.

## Exercices

> [!question] Exercice 1 — Bouton anti-rebond, une action par appui
> Un bouton sur `GPIO4` (en `INPUT_PULLUP`) doit **basculer** une LED (`GPIO16`) à chaque appui : un appui = un changement d'état, pas un clignotement tant qu'on tient le bouton. Quel est le bon motif ?

> [!success]- Corrigé
> Le motif canonique est la **détection de front** : on mémorise l'état stable et on n'agit qu'à la transition. Pas de verrou temporel artificiel.
> ```cpp
> const int BOUTON = 4;
> const int LED = 16;
>
> bool etatStable = HIGH;   // PULLUP : relâché = HIGH
> bool etatLed = LOW;
>
> void setup() {
>   pinMode(BOUTON, INPUT_PULLUP);
>   pinMode(LED, OUTPUT);
> }
>
> void loop() {
>   bool lecture = digitalRead(BOUTON);
>   if (lecture != etatStable) {
>     delay(20);                      // petit anti-rebond
>     etatStable = lecture;
>     if (etatStable == LOW) {        // front d'appui détecté
>       etatLed = !etatLed;
>       digitalWrite(LED, etatLed);
>     }
>   }
> }
> ```
> On agit **à la transition** vers LOW (appui), pas en continu. C'est la même logique que pour toute entrée tout-ou-rien fiable.

> [!question] Exercice 2 — Gradateur piloté au potentiomètre
> Un potentiomètre sur `GPIO34` (ADC1) doit régler l'intensité d'une LED sur `GPIO16` en PWM. Reliez la lecture 0-4095 au rapport cyclique 0-255.

> [!success]- Corrigé
> ```cpp
> const int POTAR = 34;   // ADC1
> const int LED = 16;
>
> void setup() {
>   analogSetAttenuation(ADC_11db);
>   ledcAttach(LED, 5000, 8);   // 8 bits → duty 0..255
> }
>
> void loop() {
>   int brut = analogRead(POTAR);          // 0..4095
>   int duty = map(brut, 0, 4095, 0, 255); // mise à l'échelle
>   ledcWrite(LED, duty);
>   delay(20);
> }
> ```
> `map()` convertit l'échelle d'entrée (12 bits) vers l'échelle PWM (8 bits). Tourner le potentiomètre fait varier l'intensité en continu.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — dès qu'on branche le premier capteur ou actionneur sur la carte cible, le choix des broches (entrée seule, ADC1 vs ADC2, strapping) conditionne la fiabilité du prototype. Un câblage choisi à la légère se paie en bugs intermittents.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — valider une pièce électronique isolée passe par la lecture de ses entrées/sorties, donc par des GPIO correctement configurées et des niveaux de tension respectés.

Fixer une fois pour toutes une carte de ses broches sûres (ADC1 pour les capteurs, broches polyvalentes pour les actionneurs, strapping évitées) évite de redécouvrir les contraintes à chaque montage.

## Aller plus loin

- [[gpio|GPIO]] — le concept général d'entrée/sortie numérique (transverse).
- [[pwm|PWM]] — la modulation de largeur d'impulsion en détail (transverse).
- [Référence GPIO de l'Arduino-ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/gpio.html) — fonctions et contraintes par variante.
- Sortie analogique vraie (DAC) sur `GPIO25`/`26` de l'ESP32 d'origine : `dacWrite(broche, valeur)` — absente des C3/S3.

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[esp32-prise-en-main|Prise en main de l'ESP32]] — prérequis (IDE + support + premier téléversement)
- [[esp32-serie|Moniteur série]] — observer les valeurs lues sur les GPIO
- [[gpio|GPIO]] — concept transverse d'entrée/sortie
- [[niveaux-de-tension|Niveaux de tension]] — adaptation 3,3 V / 5 V, indispensable avec l'ESP32
