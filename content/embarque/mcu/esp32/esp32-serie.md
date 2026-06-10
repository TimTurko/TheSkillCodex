---
title: Moniteur série de l'ESP32
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
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

Le **moniteur série** est l'outil d'observation universel d'un programme embarqué : il permet d'envoyer du texte depuis la carte vers l'ordinateur (et inversement) pendant l'exécution, via le câble USB. C'est le premier outil de débogage, avant l'oscilloscope ou les sondes — quand on veut savoir « qu'est-ce que mon programme fait, là, maintenant ? », on imprime au moniteur série. Sur ESP32, deux particularités le distinguent de l'Arduino : la **vitesse par défaut de 115200 bauds** (celle des messages de démarrage) et, sur les puces à **USB natif**, un réglage à connaître pour que la sortie apparaisse.

## À quoi ça sert ?

Le moniteur série remplit trois rôles complémentaires en projet :

- **Voir l'invisible.** L'état d'une variable, le résultat d'un capteur, le passage dans une branche conditionnelle — toutes choses qu'on ne peut pas observer de l'extérieur — sont accessibles d'une ligne `Serial.println()`.
- **Calibrer.** Avant d'asservir un actionneur sur une consigne, on imprime la valeur du capteur : on lit la plage de mesure, on ajuste les seuils, on chiffre les retards.
- **Communiquer dans l'autre sens.** L'ordinateur peut envoyer des commandes à la carte (consigne, déclenchement), via `Serial.read()` et ses variantes. C'est le canal d'interaction le plus simple, sans interface graphique.

Au démarrage, l'ESP32 imprime de lui-même des **messages de boot** sur ce port (à 115200 bauds) : journal utile, mais qui explique pourquoi un moniteur réglé sur une autre vitesse affiche du charabia dès le reset.

## Procédure pas à pas

Quatre étapes : initialiser la liaison, imprimer, ouvrir le moniteur, lire les retours.

### 1. Initialiser la liaison dans `setup()`

Une seule ligne :

```cpp
void setup() {
  Serial.begin(115200);
}
```

Le paramètre est la **vitesse de transmission** (baud rate). Sur ESP32, on prend `115200` par défaut — c'est la vitesse des messages de démarrage de la puce, et un débit confortable. Côté carte et côté moniteur, **la valeur doit être strictement identique**, sinon le texte s'affiche en caractères incompréhensibles.

> [!warning]
> **Puces à USB natif : activer « USB CDC On Boot ».** Sur les ESP32 dont le port USB est natif (C3, S3, C6…), `Serial` passe par l'USB Serial/JTAG. Pour que la sortie apparaisse dans le moniteur après un reset, activez *Outils → USB CDC On Boot → Enabled* avant de téléverser. Sur un ESP32 d'origine (puce bridge CP2102/CH340), ce réglage n'existe pas et `Serial` fonctionne directement.

### 2. Imprimer dans `loop()`

Deux fonctions principales : `Serial.print()` imprime sans aller à la ligne, `Serial.println()` imprime puis saute une ligne. Les deux acceptent tout : chaîne, nombre, booléen.

```cpp
int valeur = analogRead(34);
Serial.print("Valeur du capteur : ");
Serial.println(valeur);
```

Pour imprimer plusieurs grandeurs séparées par une tabulation (utile pour le traceur série et pour copier vers un tableur) :

```cpp
Serial.print(temps);
Serial.print("\t");
Serial.print(consigne);
Serial.print("\t");
Serial.println(mesure);
```

### 3. Ouvrir le moniteur série

Téléversez d'abord le code, puis ouvrez le **moniteur série** (icône dans la barre latérale de l'IDE 2.x, ou *Outils → Moniteur série*). Une fenêtre s'ouvre en bas.

**Vérifiez le baud rate** dans le menu déroulant en bas à droite — il doit valoir `115200`. Sinon, le texte ressemble à des symboles cassés, y compris les messages de démarrage de la puce.

Prendre capture d'écran de *l'IDE 2.x avec le moniteur série ouvert en bas, montrant des lignes « Valeur du capteur : XXX » et le sélecteur de baud rate réglé sur 115200*.

> [!tip]
> **Le téléversement (ou le bouton EN) redémarre la carte.** À chaque reset, le programme repart de zéro et l'ESP32 réémet ses messages de boot. Si rien ne s'affiche, vérifier dans l'ordre : le baud rate (115200), la présence de `Serial.begin()`, et — sur puce USB native — le réglage *USB CDC On Boot*.

### 4. Lire une entrée depuis l'ordinateur

L'ordinateur peut envoyer du texte à la carte. Tapez dans la zone de saisie du moniteur, validez par Entrée.

Côté code, deux fonctions de base :

- `Serial.available()` renvoie le nombre d'octets reçus en attente (`0` si rien).
- `Serial.read()` lit **un seul octet** dans la file.

```cpp
void loop() {
  if (Serial.available() > 0) {
    char c = Serial.read();
    Serial.print("Reçu : ");
    Serial.println(c);
  }
}
```

> [!warning]
> **`Serial.read()` renvoie un caractère, pas un nombre.** Si vous tapez `42`, vous recevrez successivement `'4'` puis `'2'`, pas l'entier 42. Pour lire un nombre, `Serial.parseInt()` agrège les chiffres ; pour lire une ligne entière, `Serial.readStringUntil('\n')`.

## Exemple — Piloter une LED par commande texte

Cas concret : la carte lit une commande envoyée depuis l'ordinateur (`ON`, `OFF`) et pilote une LED, tout en imprimant périodiquement une mesure analogique. On combine les deux sens de la liaison.

```cpp
const int LED = 16;
const int CAPTEUR = 34;        // ADC1

unsigned long dernierEnvoi = 0;

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
  Serial.println("Commandes : ON / OFF");
}

void loop() {
  // Sens ordinateur -> carte : lire une commande ligne par ligne
  if (Serial.available() > 0) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();                       // retire espaces et retour chariot
    if (cmd == "ON") {
      digitalWrite(LED, HIGH);
      Serial.println("LED allumee");
    } else if (cmd == "OFF") {
      digitalWrite(LED, LOW);
      Serial.println("LED eteinte");
    } else if (cmd.length() > 0) {
      Serial.print("Commande inconnue : ");
      Serial.println(cmd);
    }
  }

  // Sens carte -> ordinateur : imprimer la mesure toutes les 500 ms
  if (millis() - dernierEnvoi >= 500) {
    dernierEnvoi = millis();
    Serial.print("capteur = ");
    Serial.println(analogRead(CAPTEUR));
  }
}
```

Au moniteur, on voit défiler la mesure toutes les demi-secondes ; taper `ON` ou `OFF` allume ou éteint la LED et renvoie une confirmation. Noter le **non-bloquant** : on n'utilise pas `delay()` pour cadencer l'envoi, mais une comparaison sur `millis()` — la lecture des commandes reste réactive en permanence.

Prendre capture d'écran de *le moniteur série montrant l'alternance « capteur = XXX » et les réponses « LED allumee » / « LED eteinte » après saisie des commandes*.

## Pièges

**Baud rate désaccordé.** Le piège n°1 : du texte en symboles cassés, dès les messages de boot. La cause est toujours `Serial.begin(X)` ≠ valeur du moniteur. Aligner sur `115200`.

**Puce USB native sans « USB CDC On Boot ».** Sur C3/S3/C6, moniteur ouvert au bon baud mais **aucune** sortie : le réglage *USB CDC On Boot* est sur *Disabled*. L'activer et re-téléverser.

**Oublier `Serial.begin()`.** Sans cette ligne, les `Serial.print()` n'envoient rien — moniteur ouvert, baud correct, mais sortie muette.

**`print` partout, `println` nulle part.** Toute la sortie sur une ligne illisible. Réflexe : `println` à la fin de chaque ligne logique, `print` au milieu.

**Inonder le port.** Imprimer chaque milliseconde sature la liaison et rend la sortie illisible. Limiter à ~10-50 Hz pour de l'observation humaine (cadencer sur `millis()`, pas figer la boucle avec `delay`).

**Moniteur ouvert ailleurs verrouille le port.** Si PlatformIO ou un terminal externe tient le port, l'IDE ne peut ni ouvrir son moniteur, ni téléverser. Fermer l'autre application.

**`Serial.read()` ne lit qu'un octet.** Un appel unique ne lit qu'un caractère même si l'ordinateur a envoyé un mot. Pour une ligne, `readStringUntil('\n')` ; pour un nombre, `parseInt()`.

## Exercices

> [!question] Exercice 1 — Consigne numérique
> Faites lire à la carte un **nombre** tapé au moniteur (par exemple `180`) et utilisez-le comme rapport cyclique PWM (0-255, borné) d'une LED sur `GPIO16`. Comment lire un entier proprement ?

> [!success]- Corrigé
> On lit la ligne, on la convertit en entier, on borne, on applique en PWM.
> ```cpp
> const int LED = 16;
>
> void setup() {
>   Serial.begin(115200);
>   ledcAttach(LED, 5000, 8);   // 8 bits : duty 0..255
>   Serial.println("Tapez une intensite 0-255 :");
> }
>
> void loop() {
>   if (Serial.available() > 0) {
>     int duty = Serial.parseInt();        // agrège les chiffres
>     duty = constrain(duty, 0, 255);      // borne dans 0..255
>     ledcWrite(LED, duty);
>     Serial.print("Intensite = ");
>     Serial.println(duty);
>   }
> }
> ```
> `parseInt()` lit l'entier, `constrain()` garantit qu'on reste dans la plage valide même si l'utilisateur tape 999 ou -5.

> [!question] Exercice 2 — Relevé pour tableur
> Imprimez, toutes les 100 ms, trois colonnes séparées par des tabulations : le temps écoulé en ms, la valeur brute d'un capteur sur `GPIO34`, et cette valeur convertie en volts. But : copier directement la sortie dans un tableur.

> [!success]- Corrigé
> ```cpp
> const int CAPTEUR = 34;   // ADC1
> unsigned long t0;
>
> void setup() {
>   Serial.begin(115200);
>   analogSetAttenuation(ADC_11db);
>   t0 = millis();
>   Serial.println("temps_ms\tbrut\tvolts");   // en-têtes
> }
>
> void loop() {
>   int brut = analogRead(CAPTEUR);
>   float volts = brut * 3.3 / 4095.0;
>   Serial.print(millis() - t0);
>   Serial.print("\t");
>   Serial.print(brut);
>   Serial.print("\t");
>   Serial.println(volts, 2);
>   delay(100);
> }
> ```
> Les trois colonnes tabulées se collent telles quelles dans un tableur. La ligne d'en-têtes nomme les colonnes (et sert de légende au traceur série).

## Cas particulier — Plusieurs ports série et le traceur

L'ESP32 dispose de **plusieurs UART matériels**. `Serial` (UART0) est réservé au moniteur et au journal de boot ; pour dialoguer avec un second appareil (module GPS, autre carte) sans perturber le moniteur, on utilise un autre port, dont on peut choisir les broches :

```cpp
Serial2.begin(9600, SERIAL_8N1, 16, 17);  // RX=GPIO16, TX=GPIO17
```

Le **traceur série** (*Outils → Traceur série*) est un mini-oscilloscope logiciel : il trace toute valeur numérique imprimée (une par ligne, ou plusieurs en tabulations → courbes superposées). Idéal pour caler des seuils, observer le bruit d'un capteur, comparer consigne et mesure. Limite : pas d'échelle de temps réglable, fenêtre courte — pour des analyses poussées, exporter vers un tableur.

## Raccrochage projet

- **Tout au long de la [[preuve-de-concept|phase de preuve de concept]]** — le moniteur série est l'outil de debug par défaut. Avant l'oscilloscope, avant le profilage, on imprime.
- **Étape 1 de la [[integration-et-tests|phase d'intégration et tests]]** — pour qualifier une fonction sur un parcours de mesures connues, tracer mesure attendue / mesure obtenue côte à côte.
- **Toutes les étapes de calibration** — relevés rapides, vérification de plage, observation d'un transitoire.

Apprendre dès la prise en main à imprimer proprement (en-têtes, séparateurs cohérents, fréquence raisonnable, cadence non bloquante) évite de refaire son instrumentation à chaque nouveau capteur. C'est l'instrument le moins cher du projet et l'un des plus payants.

## Aller plus loin

- [Référence de la classe Serial (Arduino)](https://www.arduino.cc/reference/en/language/functions/communication/serial/) — `peek`, `parseFloat`, `readBytes`…
- [[arduino-programmation-non-bloquante|Programmation non bloquante]] — cadencer les envois sans figer la boucle (le motif `millis()` de l'exemple).
- Pour traiter la sortie en aval : un script Python avec `pyserial` lit le flux (graphique, log fichier, déclenchement d'actions).

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[esp32-prise-en-main|Prise en main de l'ESP32]] — prérequis (IDE + support + premier téléversement)
- [[esp32-gpio|Configurer les GPIO]] — les broches lues et pilotées, observées via le moniteur
- [[cpp|C++]] — le langage utilisé dans les sketches
- [[bus-de-communication|Bus de communication]] — l'UART, bus sous-jacent du moniteur série
