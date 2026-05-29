---
title: Lire un capteur analogique
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-gpio
  - arduino-serie
aa: []
draft: false
---

Un **capteur analogique** délivre une tension continue proportionnelle à la grandeur mesurée. Sur Arduino, on lit cette tension via le **convertisseur analogique-numérique** (ADC) intégré, par la fonction `analogRead()`. Les capteurs typiques : potentiomètre (rotation), LDR (luminosité), LM35 / TMP36 (température), capteur de force FSR, capteur de gaz MQ-x. Cette fiche couvre la lecture ADC, l'étalonnage et les pièges spécifiques aux signaux analogiques.

## À quoi ça sert ?

Beaucoup de phénomènes physiques se mesurent naturellement par une tension : intensité lumineuse, température, position d'un curseur, force appliquée. Le capteur convertit le phénomène en tension 0-5 V (ou 0-3,3 V), l'Arduino la transforme en nombre entier sur lequel on calcule. Le geste à maîtriser est moins la lecture elle-même (une ligne de code) que la **conversion correcte** entre la valeur entière brute et la grandeur physique.

## Procédure pas à pas

Quatre étapes : connaître son ADC, câbler, lire, convertir.

### 1. Connaître son ADC

| Carte | Résolution | Plage entière | Tension pleine échelle | Référence |
|---|---|---|---|---|
| Uno R3 (ATmega328P) | **10 bits** | 0 - 1023 | 5 V | `AREF` ou interne 1,1 V |
| Mega 2560 | 10 bits | 0 - 1023 | 5 V | `AREF` ou interne 1,1 / 2,56 V |
| Uno R4 (Renesas RA4M1) | **12 bits par défaut, 14 bits possible** | 0 - 4095 (ou 16383) | 5 V | `AREF` ou interne |
| Nano (ATmega328P) | 10 bits | 0 - 1023 | 5 V | `AREF` ou interne 1,1 V |
| ESP32 | 12 bits | 0 - 4095 | 3,3 V | interne |

**Sur Uno R3** : une lecture `analogRead()` renvoie un entier entre 0 (broche à GND) et 1023 (broche à 5 V). La résolution est donc 5 V / 1024 ≈ 4,88 mV par pas.

### 2. Câbler un potentiomètre

Pour ce premier exemple : un potentiomètre 10 kΩ, trois broches.

- Broche extrême 1 → `+5 V` Arduino
- Broche extrême 2 → `GND` Arduino
- Curseur (broche du milieu) → `A0` Arduino

Le potentiomètre forme un **pont diviseur** dont la sortie varie linéairement de 0 V (curseur à fond côté GND) à 5 V (curseur à fond côté 5 V).

Prendre capture d'écran ou photo de *un potentiomètre 10 kΩ câblé sur une breadboard, avec ses trois broches connectées à 5 V / A0 / GND sur une carte Arduino Uno*.

### 3. Lecture brute

```cpp
const int CAPTEUR = A0;

void setup() {
  Serial.begin(115200);
}

void loop() {
  int valeur = analogRead(CAPTEUR);
  Serial.println(valeur);
  delay(100);
}
```

Tournez le potentiomètre, observez les valeurs au moniteur série : 0 à 1023 (sur Uno R3). À mi-course, environ 512.

### 4. Convertir en grandeur physique

La conversion dépend du capteur. Trois exemples :

**Potentiomètre comme consigne 0-100 %** :

```cpp
int valeur = analogRead(A0);
float pourcentage = valeur * 100.0 / 1023.0;
```

**LDR comme niveau de luminosité** : un pont diviseur LDR + résistance fixe donne une tension qui dépend de la lumière. Pas d'unité physique directe — souvent on garde la valeur brute ou on étalonne par seuils (`< 200` = sombre, `> 800` = lumineux).

**LM35 comme capteur de température** : le LM35 délivre 10 mV par °C. À 5 V de pleine échelle :

```cpp
int valeur = analogRead(A0);
float tension_V = valeur * 5.0 / 1023.0;
float temperature_C = tension_V * 100.0;  // 10 mV / °C → ×100
Serial.print(temperature_C);
Serial.println(" °C");
```

## Exemple — Potentiomètre comme variateur de seuil

Cas complet qui combine lecture analogique + sortie binaire : un potentiomètre règle un seuil au-dessus duquel une LED s'allume, en fonction d'une autre entrée analogique (par exemple une LDR).

**Câblage** : potentiomètre sur `A0`, LDR + résistance 10 kΩ en pont diviseur sur `A1`, LED + 220 Ω sur D13.

```cpp
const int POT      = A0;
const int LUMIERE  = A1;
const int LED      = 13;

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  int seuil    = analogRead(POT);      // 0-1023
  int lumiere  = analogRead(LUMIERE);  // 0-1023

  digitalWrite(LED, lumiere < seuil ? HIGH : LOW);

  Serial.print("Seuil : "); Serial.print(seuil);
  Serial.print("\tLumiere : "); Serial.println(lumiere);
  delay(50);
}
```

La sortie au [[arduino-serie|moniteur série]] (et au **traceur série**) permet de visualiser simultanément seuil et mesure — utile pour calibrer le seuil au pifomètre, puis le figer en constante.

## Pièges

**Confondre `analogRead()` et `digitalRead()`.** `analogRead(A0)` renvoie un entier 0-1023, `digitalRead(A0)` renvoie `HIGH`/`LOW` selon le seuil logique. Un capteur analogique lu par `digitalRead()` donne 0 ou 1 en fonction du fait que la tension dépasse ~2,5 V — perte d'information massive.

**Broche analogique inexistante.** Sur Uno, A0-A5 sont analogiques. Sur Nano, A0-A7 — mais **A6 et A7 ne fonctionnent qu'en analogique** (pas en GPIO digital). Sur ESP32, broches ADC1 et ADC2 — ADC2 indisponible quand le Wi-Fi est actif (piège classique).

**Plage de l'ADC fausse.** Sur Uno R4, la résolution **par défaut** est 12 bits (0-4095). Un code écrit pour Uno R3 (suppose 0-1023) lit des valeurs ~4× trop grandes. `analogReadResolution(10)` rétablit la compatibilité, ou réécrire la conversion.

**Référence de tension non précisée.** Par défaut, l'ADC compare à la tension d'alimentation de la carte. Si l'Arduino est alimenté par USB d'un PC qui débite 4,8 V au lieu de 5 V, la plage pleine échelle est 4,8 V — toutes les mesures sont biaisées de 4 %. Pour des mesures précises, utiliser `analogReference(INTERNAL)` (1,1 V interne stable) ou une référence externe sur `AREF`.

**Bruit sur les mesures.** Une mesure analogique brute a typiquement ±1 à ±3 LSB de bruit (~5-15 mV). Sur un capteur précis (LM35 0,01 V/°C → 1 LSB = 0,5 °C), ça compte. Filtrer : moyenne sur 10-20 mesures (oversampling), ou filtre passe-bas RC matériel (voir [[arduino-filtrage|filtrer des mesures]]).

**Tension d'entrée hors plage.** Brancher une tension > 5 V sur une broche analogique d'Uno R3 abîme l'ADC. Vérifier la plage de sortie du capteur dans sa datasheet — voir [[lire-une-datasheet|lire une datasheet]].

**Câbles trop longs sans masse.** Un câble de capteur de plus de 30-50 cm avec GND mal référencé devient une antenne 50 Hz parfaite. Symptôme : la mesure oscille de ±20 LSB sans rien faire. Ramener GND, raccourcir, ou blinder.

## Cas particulier — Capteurs sur 3,3 V vs 5 V

Beaucoup de capteurs modernes (capteurs Adafruit, modules Grove) sortent 0-3,3 V au lieu de 0-5 V. Branchés sur Uno R3 (ADC référencé sur 5 V), la pleine échelle du capteur ne donne que `analogRead() ≈ 675` (3,3 / 5 × 1023), pas 1023. Solutions :

- **Vivre avec** — convertir `valeur × 3,3 / 1023` au lieu de `× 5 / 1023`. Perte de ~1/3 de la résolution.
- **Utiliser `AREF`** — câbler `AREF` à 3,3 V, déclarer `analogReference(EXTERNAL)`, retrouver pleine résolution.
- **Utiliser une carte 3,3 V native** — ESP32, Uno R4 Minima en option, STM32. Voir [[niveaux-de-tension|niveaux de tension]].

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — chaque capteur analogique se valide en lecture brute + conversion en grandeur physique, idéalement comparée à un étalon (thermomètre du commerce pour le LM35, luxmètre pour la LDR, multimètre pour le potentiomètre).
- **Étape 1 de la [[integration-et-tests|phase d'intégration et tests]]** — requalification de chaque capteur avant tests d'intégration : plage utile, résolution effective, bruit résiduel.

Le pas-à-pas étalonnage est l'étape qui transforme un capteur « branché qui sort un nombre » en *instrument de mesure* — sans quoi tout asservissement aval est calibré sur du sable.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-capteur-numerique|Lire un capteur numérique]] — l'alternative TOR ou impulsionnelle
- [[arduino-serie|Moniteur série]] — observer les mesures brutes et calibrer
- [[arduino-filtrage|Filtrer des mesures]] — lisser le bruit ADC
- [[niveaux-de-tension|Niveaux de tension]] — 3,3 V vs 5 V sur capteurs et cartes
- [[lire-une-datasheet|Lire une datasheet]] — pour repérer la plage de tension du capteur
