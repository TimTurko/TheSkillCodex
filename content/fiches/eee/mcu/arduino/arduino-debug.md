---
title: Débugger un programme Arduino
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-serie
aa: []
draft: false
---

**Débugger un programme Arduino** consiste à comprendre pourquoi un sketch ne se comporte pas comme attendu, en observant son état interne au cours de l'exécution. À la différence du développement sur PC où l'on a des debuggers graphiques natifs, l'écosystème Arduino classique repose principalement sur des **`Serial.print()`** stratégiques. L'IDE 2.x et certaines cartes (Uno R4, Zero, MKR) ajoutent un vrai débogueur à breakpoints — mais le `print()` reste l'outil universel à connaître en premier.

## À quoi ça sert ?

Tout projet d'embarqué dépasse rapidement la complexité où l'on peut tout vérifier à l'œil sur le sketch. Cas typiques où le débug devient nécessaire :

- **Le programme se bloque** à un endroit non identifié (boucle qui ne tourne plus).
- **Une mesure capteur est aberrante** sans qu'on sache si le bug est dans la lecture, la conversion, ou l'affichage.
- **Un comportement aléatoire** (parfois OK, parfois KO) qu'on ne reproduit pas.
- **Une fonction renvoie une valeur étrange** qu'on n'arrive pas à expliquer.

La discipline de débug — observer avant de modifier — est ce qui sépare un dépannage rapide d'une nuit entière de modifications aveugles.

## Procédure pas à pas

Quatre étapes : poser des `print()` stratégiques, vérifier la version compilée, comparer attendu vs observé, exploiter le débogueur quand il est disponible.

### 1. `Serial.print()` stratégique

L'outil de base : afficher la valeur des variables critiques au moniteur série pour suivre l'exécution.

```cpp
void loop() {
  int valeurBrute = analogRead(A0);
  Serial.print("Lecture brute : "); Serial.println(valeurBrute);

  float tension = valeurBrute * 5.0 / 1023.0;
  Serial.print("Tension : "); Serial.print(tension); Serial.println(" V");

  if (tension > 2.5) {
    Serial.println("Au-dessus du seuil");
    digitalWrite(LED_BUILTIN, HIGH);
  } else {
    Serial.println("En dessous du seuil");
    digitalWrite(LED_BUILTIN, LOW);
  }
  delay(500);
}
```

À chaque étape de calcul, on imprime ce qu'on observe. Si la valeur est ce qu'on attend, on passe à la suite ; si elle est aberrante, on tient le bug.

Astuce : préfixer les prints avec un marqueur (`[DBG]`, `[ERR]`, nom de la fonction) pour les filtrer mentalement quand le moniteur défile.

### 2. Vérifier que la version compilée est celle observée

Erreur classique : modifier le code et observer toujours le comportement de la version précédente parce qu'on a oublié de téléverser. Indices à vérifier :

- L'IDE indique-t-il *« Téléversement terminé »* après chaque modification ?
- Le moniteur série affiche-t-il bien les nouveaux `print()` qu'on a ajoutés ?
- Le port COM est-il celui de la bonne carte (cas où on a plusieurs Arduino branchés) ?

Quand on doute, écrire un `Serial.println("Version 23 - " __DATE__ " - " __TIME__);` dans le `setup()` — le compilateur substitue la date et l'heure de compilation, on voit immédiatement si c'est la dernière version.

### 3. Comparer ce qu'on observe à ce qu'on attend

À chaque `print()`, se poser la question : *« quelle valeur devrait apparaître ? »*. Si la valeur observée colle, le bug est plus loin. Si elle ne colle pas, le bug est entre le précédent `print()` correct et celui-ci.

C'est le principe de la **dichotomie de débug** : poser des marqueurs aux deux extrémités d'un bloc suspect, voir où l'observation diverge de l'attendu, resserrer.

### 4. Utiliser un vrai débogueur (carte compatible)

Sur cartes **Arduino Uno R4 Minima**, **Zero**, **MKR**, **Nano 33 IoT**, **Portenta**, l'IDE 2.x intègre un débogueur à breakpoints — fonctionnalité absente sur Uno R3 et clones AVR.

Procédure :
1. Sélectionner la carte compatible (*Tools → Board*).
2. Mode Debug (*Sketch → Optimize for Debugging*).
3. Téléverser.
4. Poser un breakpoint en cliquant à gauche du numéro de ligne.
5. Lancer le débogueur (icône en haut à droite de l'IDE 2.x).
6. Le programme se met en pause au breakpoint — inspecter les variables dans le panneau de droite.

Prendre capture d'écran de *l'IDE Arduino 2.x en mode Debug, avec un breakpoint posé sur une ligne de code et le panneau des variables ouvert à droite*.

## Exemple — Diagnostiquer un capteur ultrason qui renvoie 0

Cas réel : on a câblé un HC-SR04, le code tourne, mais la distance affichée est toujours 0 ou très étrange. Démarche structurée.

**Étape 1 — Vérifier que le code reçoit bien un signal :**

```cpp
unsigned long duree = pulseIn(ECHO, HIGH, 30000UL);
Serial.print("Duree pulseIn : "); Serial.println(duree);
```

Si `duree` est toujours 0 → l'écho n'arrive pas. Causes possibles : `Trig` mal câblé, capteur non alimenté, niveau 5 V incompatible (cas ESP32). Vérifier au multimètre que `Trig` reçoit bien une impulsion (5 V transitoire).

**Étape 2 — Vérifier le calcul de distance :**

```cpp
float distance_cm = duree * 0.0343 / 2;
Serial.print("Distance calculee : "); Serial.println(distance_cm);
```

Si `duree` est cohérent (~580 µs pour 10 cm) mais `distance_cm` est aberrant → erreur de formule (coefficient ou /2 oublié, ou unités mélangées).

**Étape 3 — Vérifier que la valeur arrive à l'aval :**

```cpp
if (distance_cm < SEUIL_CM) {
  Serial.println("Sous le seuil — allumer LED");
  digitalWrite(LED, HIGH);
}
```

Si `distance_cm` est correct mais la LED n'allume pas → erreur dans la condition (signe inversé, valeur de seuil) ou erreur de câblage LED.

Cette démarche en oignon (du capteur vers la sortie) isole rapidement le segment fautif.

## Pièges

**`Serial.print()` qui change le timing du code.** Un `print()` à 9600 bauds bloque ~1 ms par caractère envoyé. Dans une boucle critique (asservissement, lecture rapide d'encodeur), ajouter du `print` peut casser le timing et changer le comportement à observer. Solution : passer en 115200 ou 230400 bauds, ou utiliser `Serial.print()` sur une cadence réduite (toutes les 100 ms via `millis()`).

**Print après ouverture immédiate du moniteur.** Le moniteur série de l'IDE prend ~1-2 secondes à s'ouvrir après le téléversement. Les `print()` du `setup()` peuvent passer inaperçus. Ajouter `delay(2000)` ou `while (!Serial);` (sur cartes avec USB natif) en tête de `setup()` pour attendre l'ouverture.

**Variable observée hors de scope.** Imprimer une variable locale n'a de sens que dans le bloc où elle existe. Si on copie un `print` ailleurs, le compilateur sort une erreur — facile à corriger, mais frustrant à diagnostiquer si la variable a juste un nom proche.

**`Serial.print()` oublié en production.** Un build final qui parle constamment au PC consomme du CPU, dégrade la latence et est plus lent à démarrer. Discipline : tous les `print` de débug sont précédés d'une macro qu'on peut désactiver d'un coup :

```cpp
#define DEBUG 1
#if DEBUG
  #define DBG_PRINT(x) Serial.print(x)
  #define DBG_PRINTLN(x) Serial.println(x)
#else
  #define DBG_PRINT(x)
  #define DBG_PRINTLN(x)
#endif
```

**Breakpoint qui ne déclenche jamais.** Sur les cartes compatibles débug, oublier de basculer en mode debug (`Optimize for Debugging`) compile une version *release* où les optimisations peuvent supprimer ou réordonner le code — le breakpoint pointe sur une instruction qui n'existe plus.

**Bug Heisenberg.** Le simple fait d'ajouter du `print` (ou de mettre un breakpoint) ralentit suffisamment le code pour faire disparaître le bug. C'est souvent le signe d'une *race condition* ou d'une dépendance temporelle. Diagnostic : observer sans `print` mais avec une LED toggle qui marque les passages dans une fonction.

**Confondre une non-impression avec une absence d'exécution.** Si un `print()` n'apparaît pas, deux hypothèses : la ligne n'est pas exécutée, OU le `Serial.begin()` n'a pas été lancé. Vérifier l'initialisation avant de conclure que le bloc n'est pas atteint.

## Cas particulier — Bibliothèques de logging avancées

Pour des projets sérieux, plusieurs bibliothèques structurent le débug au-delà du `print()` brut :

- **`ArduinoLog`** — niveaux de log (verbose, notice, warning, error, fatal), filtrage, format.
- **`SerialDebug`** — print conditionnels avec activation à chaud par commande.
- **`telnet`** sur ESP32 — observer les logs sans même brancher l'USB.

À considérer dès qu'on dépasse 50 `print()` éparpillés dans un projet.

## Raccrochage projet

- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — un PoC sans `print` est un PoC qu'on dépanne mal. Investir 5 minutes en `print()` au plus tôt évite des heures d'errance plus tard.
- **Étape 1 de la [[integration-et-tests|phase d'intégration et tests]]** — l'instrumentation par log conditionne directement la qualité des tests pyramidaux.
- **Étape 4 de la [[integration-et-tests|phase d'intégration et tests]]** — la chasse aux bugs intermittents s'appuie sur le log de toutes les variables intéressantes en continu, puis l'analyse après coup.

Le débug est moins un coup de génie qu'une **méthode** : observer, comparer, dichotomiser. Le faire mécaniquement, sans paniquer, est ce qui fait la différence entre un projet qui converge et un projet qui s'éternise.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-serie|Moniteur série]] — prérequis pour utiliser `Serial.print()`
- [[arduino-temporisation|Temporiser]] — pour cadencer les `print` sans surcharger
- [[firmware|Firmware]] — organisation plus large du code embarqué
- [[arduino-watchdog|Watchdog sur Arduino]] — pour les blocages silencieux du programme
