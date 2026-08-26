---
title: Programmer une machine à états sur Arduino
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
  - arduino-temporisation
  - machine-a-etats
aa:
  - RA-EEE-C03-2/EEE/5
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Programmer une **machine à états** sur Arduino consiste à traduire un diagramme d'[[machine-a-etats|états et transitions]] en code C++ à l'aide du motif **`switch(etat)`** : une variable mémorise l'état courant, et la boucle `loop()` exécute le bloc correspondant à chaque tour. Couplé à une temporisation **non bloquante** (`millis()`), ce motif pilote un comportement séquentiel — feux, portail, cycle de machine — sans jamais figer le programme avec des `delay()`.

## À quoi ça sert ?

Dès qu'un montage Arduino doit enchaîner des phases (« vert, puis orange, puis rouge », « ouvrir, attendre, fermer »), deux écueils guettent le débutant : empiler des `delay()` qui rendent la carte sourde au reste du monde pendant l'attente, ou multiplier les variables booléennes jusqu'à l'illisible. Le motif `switch(etat)` règle les deux :

- il **structure** le code en un bloc clair par état, calqué sur le diagramme ;
- il garde la boucle **réactive** : entre deux changements d'état, l'Arduino continue de lire ses entrées ;
- il rend les **transitions explicites** et donc faciles à relire et à tester.

C'est le squelette de presque tout programme de commande un peu vivant. Il se met en place en [[preuve-de-concept|preuve de concept]], au moment de coder le comportement d'une fonction.

## Procédure pas à pas

Quatre étapes : énumérer les états, structurer la boucle, coder les transitions temporisées, puis câbler et tester.

### 1. Énumérer les états

Un `enum` nomme les états et les rend lisibles dans tout le code. Une variable mémorise l'état courant. On l'**initialise explicitement** (pas d'état indéfini au démarrage). Une variable de temps datera l'entrée dans l'état courant.

```cpp
enum Etat { VERT, JAUNE, ROUGE };

Etat etat = VERT;            // état initial explicite
unsigned long tDebut = 0;    // instant (ms) d'entrée dans l'état courant
```

`enum` plutôt que des nombres bruts (`0`, `1`, `2`) : `case VERT` se relit, `case 0` non.

### 2. Structurer la boucle avec `switch(etat)`

Un `case` par état, chacun terminé par `break`. À chaque tour de `loop()`, un seul bloc s'exécute, celui de l'état courant.

```cpp
void loop() {
  switch (etat) {
    case VERT:
      // 1) appliquer les sorties de l'état
      // 2) tester les transitions
      break;
    case JAUNE:
      break;
    case ROUGE:
      break;
  }
}
```

Dans chaque `case`, on fait deux choses : refléter l'état sur les sorties (allumer les bonnes LED), puis tester les conditions de sortie vers un autre état.

### 3. Coder les transitions et la temporisation non bloquante

Une **transition** se code en deux gestes : changer `etat`, puis **redater** l'entrée avec `tDebut = millis()`. Pour un délai, on ne bloque pas avec `delay()` : on compare le temps écoulé depuis l'entrée dans l'état.

```cpp
case VERT:
  if (millis() - tDebut >= DUREE_VERT) {   // événement : durée écoulée
    etat = JAUNE;
    tDebut = millis();                     // on date l'entrée dans le nouvel état
  }
  break;
```

`millis()` renvoie le nombre de millisecondes depuis le démarrage. La soustraction `millis() - tDebut` donne le temps passé dans l'état : la comparaison ne bloque rien, la boucle continue de tourner (voir [[arduino-temporisation|delay() vs millis()]]). Une **garde-condition** du diagramme devient un simple `if` combiné : `if (durée écoulée || (demandePieton && minimum écoulé))`.

### 4. Câbler et téléverser

Pour l'exemple ci-dessous : cinq LED (trois pour les voitures, deux pour les piétons) chacune avec sa résistance série de 220 Ω, et un bouton poussoir entre une broche et GND en `INPUT_PULLUP` (voir [[arduino-entree-tor|lire une entrée TOR]] pour l'anti-rebond).

![Montage du carrefour : LED voiture verte (D12), orange (D11), rouge (D10), LED piéton verte (D9) et rouge (D8), chacune avec sa résistance 220 Ω vers GND, et un bouton poussoir entre D2 et GND ; les broches portent les noms du code.|600](/ressources/img/arduino-machine-a-etats/montage.svg)

Après téléversement, le cycle tourne seul. Un appui sur le bouton avance le passage au rouge pour laisser traverser.

## Exemple — Feux tricolores avec passage piéton

Un carrefour à un feu : les voitures ont le cycle vert → orange → rouge, les piétons disposent d'un feu rouge/vert et d'un bouton d'appel. Le bouton **mémorise une demande** qui, une fois un minimum de vert écoulé, déclenche le passage au rouge, exactement la garde-condition `[demande && minimum écoulé]` du diagramme.

![Diagramme d'états du feu : VERT puis JAUNE puis ROUGE, puis retour à VERT. La transition VERT vers JAUNE part dès que la durée de vert est écoulée, ou qu'un piéton a appelé après le minimum de vert ; JAUNE vers ROUGE et ROUGE vers VERT se font sur durée écoulée. La boucle teste ces gardes à chaque tour, sans bloquer.|620](/ressources/img/arduino-machine-a-etats/diagramme-etats.svg)

```cpp
enum Etat { VERT, JAUNE, ROUGE };

const int FEU_VERT     = 12;
const int FEU_JAUNE    = 11;
const int FEU_ROUGE    = 10;
const int PIETON_VERT  = 9;
const int PIETON_ROUGE = 8;
const int BOUTON       = 2;

const unsigned long DUREE_VERT     = 6000;  // vert voiture (ms)
const unsigned long DUREE_VERT_MIN = 2000;  // minimum avant de céder à un piéton
const unsigned long DUREE_JAUNE    = 2000;
const unsigned long DUREE_ROUGE    = 5000;  // durée de traversée piéton

Etat etat = VERT;
unsigned long tDebut = 0;
bool demandePieton = false;

void setup() {
  pinMode(FEU_VERT, OUTPUT);
  pinMode(FEU_JAUNE, OUTPUT);
  pinMode(FEU_ROUGE, OUTPUT);
  pinMode(PIETON_VERT, OUTPUT);
  pinMode(PIETON_ROUGE, OUTPUT);
  pinMode(BOUTON, INPUT_PULLUP);
  tDebut = millis();
}

void loop() {
  // Événement : appui piéton, mémorisé jusqu'à satisfaction
  if (digitalRead(BOUTON) == LOW) {
    demandePieton = true;
  }

  switch (etat) {

    case VERT:                               // voitures passent, piétons stop
      digitalWrite(FEU_VERT, HIGH);
      digitalWrite(FEU_JAUNE, LOW);
      digitalWrite(FEU_ROUGE, LOW);
      digitalWrite(PIETON_VERT, LOW);
      digitalWrite(PIETON_ROUGE, HIGH);
      if (millis() - tDebut >= DUREE_VERT ||
          (demandePieton && millis() - tDebut >= DUREE_VERT_MIN)) {
        etat = JAUNE;
        tDebut = millis();
      }
      break;

    case JAUNE:                              // transition
      digitalWrite(FEU_VERT, LOW);
      digitalWrite(FEU_JAUNE, HIGH);
      if (millis() - tDebut >= DUREE_JAUNE) {
        etat = ROUGE;
        tDebut = millis();
        demandePieton = false;               // la demande est satisfaite
      }
      break;

    case ROUGE:                              // voitures stop, piétons traversent
      digitalWrite(FEU_JAUNE, LOW);
      digitalWrite(FEU_ROUGE, HIGH);
      digitalWrite(PIETON_ROUGE, LOW);
      digitalWrite(PIETON_VERT, HIGH);
      if (millis() - tDebut >= DUREE_ROUGE) {
        etat = VERT;
        tDebut = millis();
      }
      break;
  }
}
```

> [!info] Comment lire ce code
> La transition clé est dans le `case VERT` : `if (millis() - tDebut >= DUREE_VERT || (demandePieton && millis() - tDebut >= DUREE_VERT_MIN))`. Elle se lit « **on passe au jaune si** le vert a duré son temps plein (`DUREE_VERT`) **ou bien** un piéton a appelé (`demandePieton`) **et** que le minimum de vert est déjà écoulé ». Le `||` ouvre deux chemins de sortie, le second protégé par un minimum pour ne pas couper un vert qui vient de démarrer. `demandePieton` passe à `true` dès l'appui (testé en tête de `loop()`, donc à chaque tour) et revient à `false` en entrant dans `ROUGE`, une fois la demande satisfaite. À chaque changement d'état, `tDebut = millis()` redate l'entrée pour que les comparaisons de durée repartent de zéro.
>
> La priorité de `&&` sur `||`, qui commande cette lecture, est un mécanisme du langage et non un idiome embarqué : voir [[cpp-lire-un-programme|lire un programme C++]].

Le programme ne contient **aucun `delay()`** : la boucle tourne en continu, lit le bouton à chaque tour et avance dans le cycle quand les conditions sont réunies. Ajouter un quatrième état (orange clignotant la nuit, par exemple) revient à ajouter un `case` : la structure encaisse sans réécriture.

*Pour rester lisible, l'exemple omet la phase « tout rouge » de dégagement entre le vert piéton et le vert voiture. Un vrai carrefour l'ajouterait, précisément comme un état de plus, au coût d'un `case` supplémentaire.*

## Pièges

**Utiliser `delay()` pour temporiser.** Pendant un `delay(5000)`, l'Arduino est sourd : il ne lit plus le bouton, ne réagit à rien. C'est l'erreur n°1. La temporisation d'une machine à états se fait **toujours** avec `millis()` et une comparaison.

**Oublier le `break`.** Sans `break`, l'exécution « tombe » dans le `case` suivant (*fall-through*) et exécute plusieurs états d'affilée. Symptôme : le feu saute des étapes ou clignote n'importe comment.

**État non initialisé.** Une variable `Etat etat;` sans valeur de départ démarre dans un état indéterminé. Toujours `Etat etat = VERT;`. L'état initial est une décision, pas un hasard.

**Redater `tDebut` au mauvais moment.** `tDebut = millis()` se fait **uniquement** au moment de la transition, pas à chaque tour. Le remettre à chaque passage dans `loop()` réarme le chrono en permanence : le délai n'est jamais atteint, la machine se fige.

**Tester l'entrée sans anti-rebond.** Un bouton lu brut peut enregistrer plusieurs appuis pour une seule pression. Ici la mémorisation (`demandePieton = true`) absorbe le problème, mais pour compter des appuis ou détecter des fronts, l'[[arduino-entree-tor|anti-rebond]] devient nécessaire.

**Faire trop dans un `case`.** Si un bloc d'état dépasse une dizaine de lignes, c'est souvent qu'une sous-logique mérite sa propre fonction, ou qu'un état devrait être scindé. Garder chaque `case` lisible d'un coup d'œil.

## Cas particulier — Plusieurs machines à états en parallèle

Un montage peut faire tourner **plusieurs machines à états simultanément** (un feu *et* un afficheur clignotant, par exemple). Chacune a sa propre variable d'état et son propre `tDebut`, et toutes leurs `switch` s'exécutent à la suite dans le même `loop()`. C'est précisément parce qu'aucune n'utilise `delay()` qu'elles peuvent cohabiter sans se bloquer l'une l'autre : chacune avance à son rythme à chaque tour de boucle. C'est le cœur de la [[arduino-programmation-non-bloquante|programmation non bloquante]].

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — premier codage du comportement séquentiel d'une fonction (un cycle, un mode de marche) sur un montage isolé.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — la logique de commande, validée fonction par fonction, est celle qui orchestre le système complet.

Maîtriser le motif `switch(etat)` sur un cas simple comme les feux donne le squelette réutilisable de toute commande séquentielle du projet : il vaut mieux le roder ici qu'au moment d'asservir le système complet.

## Voir aussi

- [[machine-a-etats|Machine à états]] — la notion mère : états, transitions, gardes, actions (à concevoir avant de coder)
- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-temporisation|delay() vs millis()]] — la temporisation non bloquante, cœur du motif
- [[arduino-programmation-non-bloquante|Programmation non bloquante]] — faire tourner plusieurs machines à états de front dans le même `loop()`
- [[arduino-entree-tor|Lire une entrée TOR]] — bouton avec anti-rebond et détection de front
- [[arduino-sortie-tor|Piloter une sortie TOR]] — au-delà de la LED : relais, buzzer
