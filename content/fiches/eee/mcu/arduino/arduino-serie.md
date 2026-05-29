---
title: Moniteur série Arduino
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino
  - arduino-prise-en-main
aa: []
draft: false
---

Le **moniteur série** est l'outil d'observation universel d'un programme embarqué : il permet d'envoyer du texte depuis la carte vers l'ordinateur (et inversement) pendant l'exécution, via le câble USB. C'est le premier outil de débogage avant l'oscilloscope ou les sondes dédiées — quand on veut savoir « qu'est-ce que mon programme fait, là, maintenant ? », on imprime au moniteur série.

## À quoi ça sert ?

Le moniteur série remplit trois rôles complémentaires en projet :

- **Voir l'invisible.** L'état d'une variable, le résultat d'un capteur, le passage dans une branche conditionnelle — toutes choses qu'on ne peut pas observer de l'extérieur — sont accessibles d'une ligne `Serial.println()`.
- **Calibrer.** Avant d'asservir un moteur sur une consigne, on imprime la valeur du capteur de position : on lit la plage de mesure, on ajuste les seuils, on chiffre les retards.
- **Communiquer dans l'autre sens.** L'ordinateur peut aussi envoyer des commandes à la carte (saisir une consigne, déclencher une mesure), via `Serial.read()`. C'est le canal d'interaction le plus simple, sans interface graphique.

Le **traceur série** complète le moniteur en affichant les valeurs imprimées sous forme de graphique au cours du temps — idéal pour visualiser une mesure qui évolue.

## Procédure pas à pas

Quatre étapes : initialiser la liaison, imprimer, ouvrir le moniteur, lire les retours.

### 1. Initialiser la liaison dans `setup()`

Une seule ligne, presque toujours la même :

```cpp
void setup() {
  Serial.begin(9600);
}
```

Le paramètre est la **vitesse de transmission** (baud rate, en bits par seconde). `9600` est la valeur historique compatible partout ; `115200` est aujourd'hui plus courante et permet un débit ~12× supérieur (utile dès qu'on imprime souvent). Côté carte et côté moniteur, **la valeur doit être strictement identique** — sinon le texte s'affiche en caractères incompréhensibles.

### 2. Imprimer dans `loop()`

Deux fonctions principales : `Serial.print()` imprime sans aller à la ligne, `Serial.println()` imprime puis saute une ligne. Les deux acceptent tout : chaîne, nombre, booléen.

```cpp
int valeur = analogRead(A0);
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

Téléversez d'abord le code, puis cliquez sur l'**icône loupe** en haut à droite de l'IDE (IDE 1.8.x) ou sur l'**icône moniteur série** dans la barre latérale (IDE 2.x). Une fenêtre s'ouvre en bas.

**Vérifiez le baud rate** dans le menu déroulant en bas à droite — il doit correspondre à celui passé à `Serial.begin()`. Sinon, le texte ressemble à `⸮Ââ ⸮À⸮` au lieu de phrases lisibles.

Le texte imprimé par la carte apparaît au fil de l'eau.

Prendre capture d'écran de *l'IDE Arduino 2.x avec le moniteur série ouvert en bas, montrant plusieurs lignes de sortie « Valeur du capteur : XXX » et le sélecteur de baud rate visible*.

> [!tip]
> **Le téléversement redémarre la carte.** À chaque téléversement, le programme repart de zéro, le moniteur série reste ouvert — pratique pour observer le démarrage. Si rien ne s'affiche après téléversement, vérifier d'abord le baud rate, ensuite la présence de `Serial.begin()`.

### 4. Lire une entrée depuis l'ordinateur

L'ordinateur peut aussi envoyer du texte à la carte. Tapez dans la zone de saisie en haut du moniteur, validez par Entrée.

Côté code, deux fonctions :

- `Serial.available()` renvoie le nombre d'octets reçus en attente de lecture (`0` si rien).
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
> **`Serial.read()` renvoie un caractère, pas un nombre.** Si vous tapez `42` dans le moniteur, vous recevrez successivement `'4'` (code ASCII 52) puis `'2'` (code ASCII 50), pas l'entier 42. Pour lire un nombre, utilisez `Serial.parseInt()` qui agrège les chiffres jusqu'au prochain séparateur.

## Exemple — Surveiller consigne et mesure

Cas concret : un programme qui lit une valeur sur l'entrée analogique A0 (une consigne envoyée par un potentiomètre) et la compare à un compteur interne en `millis()`. On veut voir évoluer les deux au moniteur **et** au traceur série.

```cpp
unsigned long t0;

void setup() {
  Serial.begin(115200);
  t0 = millis();
  Serial.println("temps_ms\tconsigne\tmesure");  // en-têtes
}

void loop() {
  unsigned long t = millis() - t0;
  int consigne = analogRead(A0);
  int mesure = (consigne * 0.7) + random(-30, 30);  // mesure fictive bruitée

  Serial.print(t);
  Serial.print("\t");
  Serial.print(consigne);
  Serial.print("\t");
  Serial.println(mesure);

  delay(50);  // 20 Hz de rafraîchissement
}
```

Au moniteur série, on voit défiler trois colonnes séparées par des tabulations — copiables directement dans un tableur pour analyse. Au **traceur série** (*Outils → Traceur série*), les trois valeurs s'affichent en trois courbes superposées, avec une légende prise de la ligne d'en-tête. Tourner le potentiomètre — la courbe `consigne` bouge, la courbe `mesure` suit avec du bruit.

Prendre capture d'écran de *le traceur série de l'IDE Arduino 2.x affichant trois courbes superposées (temps_ms, consigne, mesure) avec la légende visible*.

## Pièges

**Baud rate désaccordé.** Le piège n°1, qui produit du texte en caractères chinois ou en symboles cassés. La cause est toujours la même : `Serial.begin(X)` côté code ≠ valeur sélectionnée en bas du moniteur. Aligner les deux.

**Oublier `Serial.begin()`.** Sans cette ligne, les `Serial.print()` n'envoient rien. Symptôme : moniteur ouvert, baud rate correct, mais aucune sortie.

**`print` partout, `println` nulle part.** Toute la sortie sur une seule ligne illisible qui glisse à droite. Réflexe : `println` à la fin de chaque ligne logique, `print` au milieu.

**Inonder le port.** Imprimer toutes les millisecondes (`delay(1)` ou pas de `delay` du tout) sature le port série, ralentit la carte, et rend la sortie illisible. Limiter à ~10-50 Hz (`delay(50)` ou plus) pour de l'observation humaine, davantage si on traite la sortie en script côté ordinateur.

**Moniteur ouvert ailleurs verrouille le port.** Si PlatformIO, un terminal externe ou un autre IDE tient le port ouvert, l'IDE ne peut ni ouvrir son propre moniteur, ni téléverser. Fermer l'autre application avant de retenter.

**`Serial.read()` consomme un seul octet.** Une boucle qui appelle `Serial.read()` une fois ne lit qu'un caractère même si l'ordinateur a envoyé un mot entier. Pour lire jusqu'au saut de ligne, boucler sur `Serial.available()`. Plus simple : `Serial.parseInt()` ou `Serial.readStringUntil('\n')`.

**Tampon non vidé à l'ouverture.** Certaines cartes (Leonardo, Micro) ne réinitialisent pas la liaison série au téléversement comme l'Uno. Le tampon peut contenir des données anciennes. Ajouter `while (!Serial) {}` après `Serial.begin()` attend que la liaison soit prête (inutile sur Uno, recommandé sur Leonardo).

## Cas particulier — Le traceur série pour visualiser des grandeurs

Le **traceur série** (*Outils → Traceur série*) est un mini-oscilloscope logiciel intégré à l'IDE. Il trace toute valeur numérique imprimée, à raison d'une valeur par ligne (ou plusieurs séparées par tabulations, tracées en courbes superposées). C'est l'outil idéal pour :

- caler les seuils d'une mesure (lire visuellement la plage),
- observer le bruit d'un capteur,
- comparer consigne et mesure dans un asservissement simple.

**Limite** : pas d'échelle de temps ajustable, fenêtre de défilement courte. Pour des analyses plus poussées, copier la sortie texte vers un tableur ou un script Python.

## Raccrochage projet

- **Tout au long de la [[preuve-de-concept|phase de preuve de concept]]** — le moniteur série est l'outil de debug par défaut. Avant l'oscilloscope, avant les outils de profilage, on imprime.
- **Étape 1 de la [[integration-et-tests|phase d'intégration et tests]]** — pour qualifier le comportement d'une fonction sur un parcours de mesures connues, le moniteur permet de tracer mesure attendue / mesure obtenue côte à côte.
- **Toutes les étapes où on calibre un capteur ou un actionneur** — relevés rapides, vérification de plage, observation de comportement transitoire.

Apprendre dès la prise en main à imprimer proprement (en-têtes, séparateurs cohérents, fréquence raisonnable) évite de devoir refaire son instrumentation à chaque nouveau capteur. Le moniteur série est l'instrument le moins cher du projet et l'un des plus payants.

## Aller plus loin

- [Référence officielle de la classe Serial](https://www.arduino.cc/reference/en/language/functions/communication/serial/) — toutes les fonctions (`peek`, `parseFloat`, `readBytes`, ...).
- [[arduino-debug|Débugger un programme Arduino]] — outils plus avancés (assertions, breakpoints sur IDE 2.x), au-delà du moniteur.
- Pour traiter la sortie en aval : un script Python avec la bibliothèque `pyserial` lit le flux et le traite (graphique, log fichier, déclenchement d'actions).

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-prise-en-main|Prise en main d'Arduino]] — prérequis (IDE + premier téléversement)
- [[tinkercad|Tinkercad]] — le moniteur série est aussi disponible en simulation
- [[cpp|C++]] — le langage utilisé dans les sketches
- [[bus-de-communication|Bus de communication]] — UART est le bus utilisé en sous-jacent par le moniteur série
