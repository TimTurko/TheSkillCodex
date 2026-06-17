---
title: Lire un capteur numérique
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-gpio
  - arduino-serie
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Un **capteur numérique** délivre une information codée en signal binaire — par opposition à un capteur analogique qui sort une tension continue. La codification varie : niveau logique simple (présence / absence), impulsion dont la largeur encode la mesure (capteur ultrason), protocole propriétaire 1-wire (DHT11), ou trame I2C / SPI (BMP280, MPU6050). Cette fiche couvre les deux premiers cas — les bus I2C et SPI ont leurs propres tutoriels.

## À quoi ça sert ?

Les capteurs numériques sont les briques de mesure les plus utilisées en projet école : détecter une présence (PIR), mesurer une distance (HC-SR04 ultrason), repérer un passage (capteur infrarouge). Mesurer une **vitesse** de rotation (encodeur) est un cas voisin mais distinct — du comptage d'impulsions, traité par [[interruption|interruptions]] ou [[timer|timers]], pas par `digitalRead()` ni `pulseIn()`. Leur intérêt sur les capteurs analogiques : insensibilité au bruit du câble, valeur déjà conditionnée, lecture directe sans étalonnage électrique. Leur contrepartie : on dépend de la documentation du capteur (protocole, timing, bibliothèque).

## Procédure pas à pas

D'abord identifier le type de signal, puis mettre la méthode en pratique sur deux capteurs de proximité : un **capteur IR à seuil** lu d'un simple `digitalRead` (le cas minimal), puis le **HC-SR04** à ultrason qui *mesure* la distance par impulsion (câblage, datasheet, code).

### 1. Identifier le type de signal

Trois familles courantes :

- **Niveau logique** — le capteur sort `HIGH` ou `LOW` selon un événement (présence/absence détectée). Exemple : capteur PIR (mouvement), capteur de présence inductif, fin de course magnétique. **Lecture par `digitalRead()` simple.**
- **Impulsion temporelle** — le capteur émet une impulsion dont la **largeur** code la mesure. Exemple : ultrason HC-SR04 (largeur = aller-retour de l'onde, donc distance). **Lecture par `pulseIn()`.**
- **Protocole propriétaire** — séquence binaire structurée que seule une bibliothèque dédiée sait décoder. Exemple : DHT11 (1-wire), DS18B20 (1-wire Dallas). **Lecture via bibliothèque** (voir [[arduino-bibliotheques|utiliser une bibliothèque]]).

La datasheet ou la fiche-produit du capteur indique systématiquement à laquelle des trois familles il appartient.

### 2. Le cas le plus simple — un capteur IR à seuil

Avant l'ultrason, le cas minimal : un capteur qui sort directement `HIGH` ou `LOW`, lu d'un `digitalRead()`. Dans le thème de la distance, l'exemple courant est le **module IR de détection d'obstacle** (type FC-51) : il émet un faisceau infrarouge et bascule sa sortie quand un obstacle réfléchit ce faisceau en deçà d'un seuil réglé par un potentiomètre embarqué. Trois fils, aucune temporisation.

- `VCC` → `+5 V`, `GND` → `GND`, `OUT` → broche D2 (entrée)

```cpp
const int IR  = 2;
const int LED = 13;

void setup() {
  pinMode(IR, INPUT);                       // sortie déjà conditionnée par le module
  pinMode(LED, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  bool obstacle = (digitalRead(IR) == LOW); // ce module : LOW = obstacle détecté
  digitalWrite(LED, obstacle);              // LED allumée si un obstacle est proche
  Serial.println(obstacle ? "Obstacle" : "Libre");
  delay(200);
}
```

La seule subtilité est le **niveau actif** : la plupart de ces modules sont **actifs-bas** (`OUT` tombe à `LOW` quand un obstacle est détecté), d'où le test `== LOW` — à vérifier sur la fiche-produit. Pas d'anti-rebond : contrairement à un bouton (contact mécanique, voir [[arduino-entree-tor|lire une entrée TOR]]), la sortie est **électronique et déjà propre**. Ce capteur signale seulement *un seuil franchi* ; pour mesurer la distance réelle, voir le cas suivant.

### 3. Câbler le HC-SR04

Cas plus riche : le **HC-SR04** (ultrason) *mesure* la distance au lieu de signaler un seuil — capteur emblématique du projet école, présent dans tous les kits :

- `VCC` du capteur → `+5 V` Arduino
- `GND` du capteur → `GND` Arduino
- `Trig` du capteur → broche D9 (sortie : impulsion de déclenchement)
- `Echo` du capteur → broche D10 (entrée : impulsion de retour)

![Branchement du HC-SR04 sur Arduino Uno : VCC vers +5 V, GND vers GND, Trig vers D9 (l'Arduino déclenche), Echo vers D10 (le capteur répond).|600](/ressources/img/arduino-capteur-numerique/branchement-hc-sr04.svg)

### 4. Lire le datasheet du HC-SR04

Le HC-SR04 fonctionne au **temps de vol** (*time of flight*) : l'émetteur envoie une salve d'ultrasons, l'onde se propage, **rebondit sur l'objet**, puis revient vers le récepteur. En mesurant le **temps d'aller-retour** et connaissant la vitesse du son, on en déduit la distance. Ce temps est précisément ce que la broche `Echo` restitue — et que le code lira à l'étape suivante.

![Principe du capteur à ultrasons HC-SR04 : l'émetteur (Transmitter) envoie une onde sonore qui rebondit sur l'objet ; le récepteur (Receiver) capte l'onde réfléchie (écho). Le temps écoulé entre l'émission et la réception donne la distance.|520](/ressources/img/arduino-capteur-numerique/how-ultrasonic-sensor-works.webp)

La datasheet précise les paramètres exploités par ce principe :

- Le capteur attend une impulsion de **10 µs sur `Trig`** pour déclencher une mesure.
- Il génère ensuite une impulsion sur `Echo` dont la durée est proportionnelle au temps d'aller-retour de l'onde sonore.
- Vitesse du son ≈ 343 m/s à 20 °C. Distance = durée × 343 / 2 (aller-retour).
- Plage utile : 2 cm à 4 m.
- Tension `Echo` : 5 V — compatible Uno R3, à adapter sur ESP32 (voir [[niveaux-de-tension|niveaux de tension]]).

![Chronogramme Trig/Echo du HC-SR04 : impulsion de 10 µs sur Trig, puis impulsion sur Echo dont la largeur vaut le temps d'aller-retour de l'onde — la distance s'en déduit par la formule.|620](/ressources/img/arduino-capteur-numerique/chronogramme-trig-echo.svg)

### 5. Écrire le code

```cpp
const int TRIG = 9;                 // broche de déclenchement (sortie)
const int ECHO = 10;                // broche de l'écho de retour (entrée)

void setup() {
  pinMode(TRIG, OUTPUT);            // TRIG : l'Arduino écrit dessus
  pinMode(ECHO, INPUT);             // ECHO : l'Arduino lit dessus
  Serial.begin(115200);            // liaison série pour afficher la distance
}

void loop() {
  // Déclenchement : une impulsion PROPRE de 10 µs sur TRIG
  digitalWrite(TRIG, LOW);          // on part d'un état bas net...
  delayMicroseconds(2);             // ...stabilisé 2 µs
  digitalWrite(TRIG, HIGH);         // front montant : début de l'impulsion
  delayMicroseconds(10);            // maintenue 10 µs (durée exigée par le capteur)
  digitalWrite(TRIG, LOW);          // retour au repos : l'impulsion est émise

  // Mesure : pulseIn() attend l'impulsion ECHO et renvoie sa durée (µs)
  unsigned long duree_us = pulseIn(ECHO, HIGH, 30000UL);  // 30000 = timeout 30 ms

  if (duree_us == 0) {              // 0 = aucun écho avant le timeout (hors portée)
    Serial.println("Hors plage");
  } else {
    float distance_cm = duree_us * 0.0343 / 2;  // durée -> distance (voir encart)
    Serial.print(distance_cm);
    Serial.println(" cm");
  }

  delay(100);                       // une mesure toutes les 100 ms (~10 Hz)
}
```

**Comment lire ce code.** Deux gestes seulement. *Déclencher* : on impose sur `TRIG` une impulsion **propre** de 10 µs — le `LOW` initial (2 µs) garantit un front montant net, et c'est cette durée de 10 µs que le capteur attend pour lancer un tir d'ultrasons. *Mesurer* : `pulseIn(ECHO, HIGH, 30000UL)` met le programme **en attente** de l'impulsion sur `ECHO` et renvoie sa **durée en microsecondes** — le temps d'aller-retour de l'onde. Un `0` signifie qu'aucun écho n'est revenu avant le délai (30 ms), donc cible hors de portée. La conversion `× 0,0343 / 2` traduit cette durée en distance : `0,0343` cm/µs est la vitesse du son, et l'on divise par deux car l'onde fait l'aller **et** le retour.

Approchez et éloignez la main du capteur — la distance s'affiche au moniteur série.

Prendre capture d'écran de *le moniteur série de l'IDE Arduino 2.x affichant une suite de mesures de distance en cm pendant qu'une main bouge devant le capteur*.

## Exemple — Détecteur de seuil avec LED d'alerte

Cas complet : si un objet entre dans une zone proche (< 20 cm), allumer une LED d'alerte.

```cpp
const int TRIG  = 9;
const int ECHO  = 10;
const int LED   = 13;
const float SEUIL_CM = 20.0;        // distance d'alerte en cm

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(LED,  OUTPUT);
  Serial.begin(115200);
}

// Renvoie la distance en cm, ou -1 si aucun écho (cf. encart de l'étape 5)
float mesurerDistance() {
  // Bloc déclenchement + mesure identique à l'étape 5
  digitalWrite(TRIG, LOW);  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  unsigned long d = pulseIn(ECHO, HIGH, 30000UL);
  return (d == 0) ? -1.0 : d * 0.0343 / 2;   // -1 = hors plage, sinon distance
}

void loop() {
  float d = mesurerDistance();               // une mesure
  if (d > 0 && d < SEUIL_CM) {               // objet valide ET dans la zone proche
    digitalWrite(LED, HIGH);                 // alerte : LED allumée
    Serial.print("ALERTE : "); Serial.print(d); Serial.println(" cm");
  } else {
    digitalWrite(LED, LOW);                  // rien dans la zone : LED éteinte
  }
  delay(100);
}
```

La factorisation en fonction `mesurerDistance()` annonce la pratique d'organisation du code embarqué — voir [[firmware|firmware]] et [[arduino-debug|débugger un programme]].

## Pièges

**Confondre numérique et analogique.** Un capteur de présence à niveau logique se lit par `digitalRead()`, pas par `analogRead()`. À l'inverse, un capteur de température LM35 est *analogique* malgré son nom techy — il sort une tension continue, à lire par `analogRead()` (voir [[arduino-capteur-analogique|lire un capteur analogique]]).

**Timeout de `pulseIn()` mal calibré.** Sans timeout explicite, `pulseIn()` bloque jusqu'à 1 s (son timeout par défaut) si aucun écho ne revient (cible trop loin, surface absorbante). Toujours passer un troisième argument (en microsecondes). Pour HC-SR04 en 4 m : ~23 ms d'aller-retour, donc timeout 30 ms.

**Ignorer les valeurs aberrantes.** Le HC-SR04 renvoie parfois des mesures fantaisistes (interférences, mauvaise réflexion). Filtrer (médiane sur 3-5 mesures, ou seuil de variation entre mesures consécutives) avant d'asservir un actionneur sur la sortie — voir [[filtrage|filtrer des mesures]].

**Niveau 5 V sur entrée ESP32.** Le HC-SR04 sort `Echo` à 5 V. Sur ESP32 (entrée tolérante 3,3 V), brancher directement endommage la broche. Diviseur de tension ou convertisseur de niveau (voir [[niveaux-de-tension|niveaux de tension]]).

**Bibliothèque cassée ou pas à jour pour DHT11/22.** Ces capteurs ont un timing strict et de multiples bibliothèques concurrentes. Vérifier que la bibliothèque utilisée est maintenue (commits récents) et compatible avec la carte cible (R3, R4, ESP32 — ce n'est pas la même chose).

**Mesure trop fréquente.** Le HC-SR04 a un cycle de mesure d'environ 60 ms (le temps d'attendre la dissipation de l'écho). Mesurer plus vite (10 ms) donne des résultats incohérents. 10 Hz (toutes les 100 ms) est un bon rythme.

**Capteur PIR pas stabilisé.** Le PIR a besoin de 30 à 60 secondes de stabilisation thermique après mise sous tension. Lire la sortie pendant ce temps donne du bruit. Prévoir un `delay(30000)` dans `setup()` ou un voyant indiquant l'état de stabilisation.

## Cas particulier — Capteurs sur bus I2C ou SPI

Beaucoup de capteurs modernes (BMP280, MPU6050, MAX30102, VL53L0X) communiquent par bus — ils sont *numériques* mais d'une catégorie traitée à part. Voir [[arduino-i2c|I2C sur Arduino]] et [[arduino-spi|SPI sur Arduino]]. Le câblage et le code diffèrent radicalement de la lecture impulsionnelle ou par niveau logique.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — chaque capteur du projet se valide isolément avant intégration : câblage, lecture brute, plage de mesure observée.
- **Étape 1 de la [[integration-et-tests|phase d'intégration et tests]]** — chaque capteur est requalifié unitairement avant tests d'intégration.

Brancher un capteur, lire sa documentation, en sortir une mesure crédible sur quelques minutes — c'est la boucle qui fait la PoC. Le faire vite et bien sur un capteur autonome, dans le bon ordre, est le geste à automatiser pour tous les capteurs du projet.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-capteur-analogique|Lire un capteur analogique]] — l'alternative continue (potentiomètre, LM35, LDR)
- [[arduino-i2c|I2C sur Arduino]] — bus pour capteurs numériques évolués (BMP280, MPU6050)
- [[arduino-bibliotheques|Utiliser une bibliothèque]] — pour DHT11, DS18B20, etc.
- [[lire-une-datasheet|Lire une datasheet]] — pour identifier la nature exacte du signal
- [[filtrage|Filtrer des mesures]] — pour lisser le bruit des capteurs
