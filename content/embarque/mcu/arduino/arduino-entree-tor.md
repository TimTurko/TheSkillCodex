---
title: Lire une entrée TOR
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-gpio
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Une **entrée TOR** (Tout Ou Rien) lit un signal binaire qui ne prend que deux états : haut ou bas, appuyé ou relâché, présent ou absent. Bouton-poussoir, interrupteur, fin de course, capteur de présence numérique : tous se lisent par `digitalRead()`. La difficulté n'est pas dans la lecture elle-même mais dans le traitement du **rebond** : un contact mécanique génère plusieurs commutations parasites en quelques millisecondes, qu'il faut filtrer pour obtenir un signal propre.

## À quoi ça sert ?

Lire une entrée TOR est le geste fondateur de toute interface utilisateur embarquée : démarrer un cycle, valider une consigne, déclencher une mesure, détecter une fin de course mécanique. Sur un projet typique on en a plusieurs (bouton *Marche/Arrêt*, fin de course de chaque axe, capteur de présence pièce). La bonne pratique est d'apprendre une fois la lecture *avec anti-rebond*, puis de la dupliquer proprement sur chaque entrée du projet.

## Procédure pas à pas

Quatre étapes : câbler avec pull-up, lire, ajouter l'anti-rebond, détecter le front.

### 1. Câbler le bouton avec `INPUT_PULLUP`

Un côté du bouton sur la broche choisie (ici D2), l'autre côté sur GND. Aucune résistance externe : la résistance interne de pull-up (configurée par `pinMode(BOUTON, INPUT_PULLUP)`) tire le potentiel vers `+5 V` quand le bouton est relâché et le fait tomber à GND quand il est appuyé.

**Logique inversée** : `digitalRead()` renvoie `HIGH` au repos, `LOW` quand appuyé.

![Montage : bouton-poussoir entre D2 et GND et LED + résistance sur D13 (réutilisée dans l'exemple), carte Arduino Uno|600](/ressources/img/arduino-gpio/montage-bouton-led.webp)

### 2. Lecture brute

```cpp
const int BOUTON = 2;                  // bouton câblé sur la broche D2

void setup() {
  pinMode(BOUTON, INPUT_PULLUP);       // entrée + résistance interne : repos = HIGH
  Serial.begin(115200);                // ouvre la liaison série pour observer
}

void loop() {
  int etat = digitalRead(BOUTON);      // lit la broche : HIGH (1) ou LOW (0)
  Serial.println(etat);                // affiche 1 ou 0 au moniteur
  delay(10);                           // petite pause : ~100 lectures par seconde
}
```

Téléversez, ouvrez le moniteur série, appuyez : on voit `1, 1, 1, 0, 0, 0, 1, 1, 1...`. Mais si vous regardez de très près, vous verrez parfois apparaître quelques transitions parasites au moment de l'appui (`0, 1, 0, 1, 0`). C'est le **rebond mécanique** du contact qui dure quelques millisecondes.

### 3. Anti-rebond logiciel

La parade la plus simple : ignorer toute commutation qui n'est pas confirmée pendant 20-50 ms.

![Chronogramme de l'anti-rebond : à l'appui, la lecture brute oscille quelques millisecondes (rebond) ; après 30 ms sans changement, l'état stable bascule une seule fois.|640](/ressources/img/arduino-entree-tor/rebond.svg)

```cpp
const int BOUTON = 2;                    // bouton câblé sur la broche D2

int dernierEtat = HIGH;                  // dernière valeur LUE (tremble pendant le rebond)
int etatStable = HIGH;                   // état CONFIRMÉ du bouton (celui sur lequel on agit)
unsigned long dernierChangement = 0;     // date, en ms, du dernier changement de lecture
const unsigned long DELAI_REBOND = 30;   // calme exigé avant de valider (ms)

void setup() {
  pinMode(BOUTON, INPUT_PULLUP);         // entrée + résistance interne : repos = HIGH
  Serial.begin(115200);                  // liaison série pour afficher les appuis
}

void loop() {
  int lecture = digitalRead(BOUTON);     // lecture brute à chaque tour de boucle

  // La lecture vient-elle de changer ? (à l'appui, elle change plein de fois : rebond)
  if (lecture != dernierEtat) {
    dernierChangement = millis();        // on note QUAND ce changement a eu lieu
    dernierEtat = lecture;               // et on retient la nouvelle valeur lue
  }

  // La lecture est-elle restée identique assez longtemps (> 30 ms) ?
  if (millis() - dernierChangement > DELAI_REBOND) {   // oui : le rebond est fini
    if (lecture != etatStable) {         // et l'état confirmé a vraiment changé
      etatStable = lecture;              // on valide le nouvel état
      Serial.print("Bouton : ");
      Serial.println(etatStable == LOW ? "appuye" : "relache");  // LOW = appuyé (pull-up)
    }
  }
}
```

**Comment lire ce code.** L'astuce tient en **deux variables**. `dernierEtat` suit la valeur *brute* lue à l'instant (elle tremble pendant le rebond). `etatStable` ne retient que l'état *confirmé*, le seul sur lequel on agit. À chaque tour de `loop()` :

- si la lecture **change**, on ne croit pas le bouton tout de suite : on note seulement *l'heure* du changement (`dernierChangement = millis()`) ;
- tant qu'elle **rechange** (rebond), cette heure est repoussée encore et encore ;
- dès qu'elle **reste identique pendant 30 ms**, le rebond est terminé : on valide `etatStable`.

`millis()` renvoie le nombre de millisecondes écoulées depuis le démarrage de la carte. `millis() - dernierChangement` est donc le temps écoulé *depuis le dernier tremblement*. Le comparer à `DELAI_REBOND`, c'est demander : « le signal est-il calme depuis assez longtemps pour y croire ? »

Tester : maintenant chaque appui produit *exactement une* ligne `Bouton : appuye` puis `Bouton : relache`, peu importe la qualité mécanique du bouton.

### 4. Détecter le front (appui vs maintien)

Souvent on veut réagir à *l'appui* lui-même (toggle, déclenchement) et pas tant que la touche est maintenue. C'est la **détection de front descendant** :

```cpp
// Dans la branche d'anti-rebond, remplacer le println par :
if (etatStable == LOW) {
  // FRONT DESCENDANT — bouton vient d'être appuyé
  Serial.println("Appui detecte !");
}
```

Variante *toggle* (un appui inverse l'état d'une LED) :

```cpp
int etatLED = LOW;
// ...
if (etatStable == LOW) {
  etatLED = !etatLED;
  digitalWrite(LED_BUILTIN, etatLED);
}
```

## Exemple — Compter les appuis et basculer une LED

Cas complet qui combine anti-rebond + détection de front + action visible.

```cpp
const int BOUTON = 2;
const int LED = 13;

int dernierEtat = HIGH, etatStable = HIGH;   // mêmes 2 variables qu'à l'étape 3
unsigned long dernierChangement = 0;
const unsigned long DELAI_REBOND = 30;

int compteur = 0;                            // nombre d'appuis comptés
bool ledAllumee = false;                     // état courant de la LED

void setup() {
  pinMode(BOUTON, INPUT_PULLUP);
  pinMode(LED, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  int lecture = digitalRead(BOUTON);
  if (lecture != dernierEtat) {              // --- bloc anti-rebond, identique à l'étape 3 ---
    dernierChangement = millis();
    dernierEtat = lecture;
  }
  if (millis() - dernierChangement > DELAI_REBOND && lecture != etatStable) {
    etatStable = lecture;                    // état confirmé
    if (etatStable == LOW) {                 // front descendant = un nouvel appui
      compteur++;                            // +1 appui
      ledAllumee = !ledAllumee;              // on inverse la LED (toggle)
      digitalWrite(LED, ledAllumee);         // on applique le nouvel état à la LED
      Serial.print("Appui n°");
      Serial.println(compteur);
    }
  }
}
```

Chaque appui incrémente un compteur visible au moniteur série et inverse l'état de la LED (comportement net, insensible au rebond).

## Pièges

**Pas d'anti-rebond.** Symptôme typique : un appui de bouton compte pour 3 ou 4 incréments. Le rebond mécanique est invisible à l'œil mais visible à la microseconde du processeur.

**Câblage `INPUT` sans résistance externe.** Sans pull-up ou pull-down, la broche flotte. La LED bascule au moindre passage de main au-dessus de la carte (effet antenne). Quasi-toujours, `INPUT_PULLUP` + bouton vers GND est la solution.

**Inverser la logique du pull-up.** `digitalRead() == HIGH` signifie *relâché*, pas *appuyé*. Une erreur d'inversion donne une LED allumée par défaut qui s'éteint à l'appui, fonctionnel mais contre-intuitif.

**Délai d'anti-rebond trop court.** En dessous de ~10 ms, certains boutons mécaniques bon marché passent à travers le filtre. 20-50 ms est la plage usuelle. Ne pas descendre sans avoir mesuré le rebond du composant utilisé.

**Confondre maintien et appui.** Une boucle qui réagit à `digitalRead() == LOW` agit tant que le bouton est maintenu (ex. compteur qui incrémente 1000 fois par seconde de maintien). Pour un comportement *par appui*, il faut détecter le **front** : comparer l'état actuel à l'état précédent.

**`delay()` dans la boucle de lecture.** Un `delay(500)` au milieu du `loop()` rate les appuis brefs. Le pattern anti-rebond ci-dessus n'utilise volontairement aucun `delay` : il observe le temps via [[arduino-temporisation|`millis()`]].

**Brancher le bouton entre 5 V et la broche.** Mode `INPUT_PULLUP` + bouton vers 5 V = lecture toujours `HIGH`. Le bouton court-circuite la pull-up vers son propre niveau. Toujours bouton vers **GND**.

## Cas particulier — Plusieurs boutons

Pour 4-8 boutons on duplique simplement le pattern (un état stable, un dernier changement par bouton). Au-delà, deux pistes :

- **Matrice de boutons** (lignes × colonnes scannées) pour 16+ boutons sur peu de broches.
- **Convertisseur analogique** (réseau de résistances + `analogRead`) pour lire N boutons sur une seule broche analogique — économique mais sensible.

Voir [[arduino-bibliotheques|bibliothèques Arduino]] pour `Bounce2` (anti-rebond clé en main) ou `OneButton` (détection clic court, long, double).

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — tout bouton de commande utilisateur (Marche/Arrêt, validation) doit être testé isolément avec anti-rebond avant d'être intégré.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — chaque fin de course mécanique (axe en butée, présence pièce) se valide comme une entrée TOR avec anti-rebond.

Le pattern anti-rebond est à coller-modifier d'une fiche à l'autre une fois qu'il est compris une fois. Investir 10 minutes ici évite des heures de débogage où l'on cherche pourquoi le système compte les appuis de travers.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-gpio|Configurer les GPIO Arduino]] — prérequis sur `pinMode` et `INPUT_PULLUP`
- [[arduino-sortie-tor|Piloter une sortie TOR]] — la sortie correspondante
- [[arduino-temporisation|Temporiser]] — `delay()` vs `millis()`, indispensable pour l'anti-rebond non bloquant
- [[arduino-interruptions|Interruptions]] — alternative à la lecture par scrutation pour réagir vite
