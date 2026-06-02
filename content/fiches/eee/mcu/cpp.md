---
title: Le langage C++
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
aa: [RA-PROJET-C03-3/PROJ/5]
draft: false
---

Le **C++** est le langage dans lequel s'écrivent les programmes Arduino — plus précisément un C++ « outillé » (dialecte *Wiring*) où deux [[fonction-informatique|fonctions]], `setup()` et `loop()`, encadrent tout le code. En maîtriser les briques — la structure d'un programme, les variables et leurs types, les opérateurs, les fonctions et les structures de contrôle — est le **socle** sans lequel aucun autre tutoriel ne se comprend vraiment : c'est ce qui sépare *recopier* un exemple d'*écrire* son propre code. Cette fiche en fait le tour du point de vue de l'embarqué, où chaque octet et chaque type comptent, et ouvre vers les notions plus avancées qui s'appuient dessus.

## À quoi ça sert ?

Tous les tutoriels Arduino montrent du code. Sans le langage, on le recopie sans le comprendre — et le moindre écart casse tout sans qu'on sache pourquoi. Connaître les briques permet de **distinguer trois pannes** qu'on confond sinon : une erreur de syntaxe (le code ne compile pas), une erreur de type (il compile mais déborde ou tronque), une erreur d'algorithme (il tourne mais fait la mauvaise chose).

Surtout, en embarqué, le langage a des **conséquences matérielles directes** que le C++ d'un PC laisse oublier :

- un **type trop petit déborde** silencieusement et fausse un calcul ;
- un `float` **coûte cher** sur un microcontrôleur sans unité de calcul flottant ;
- une variable mal placée **disparaît entre deux tours** de la boucle principale.

Le langage n'est donc pas un détail de forme : c'est là que se jouent une partie des bugs les plus déroutants du projet. On le pratique dès la [[preuve-de-concept|preuve de concept]], au premier sketch qui dépasse l'exemple fourni.

## Le tour du langage

Cinq briques, de la structure d'ensemble au détail : le squelette d'un programme, les variables, les opérateurs, les fonctions, et les structures de contrôle.

### 1. La structure d'un programme : `setup()` et `loop()`

Tout programme Arduino tient dans **deux fonctions obligatoires**. `setup()` s'exécute **une seule fois** au démarrage : on y règle ce qui ne change pas (sens des broches, vitesse du port série). `loop()` s'exécute **en boucle infinie** ensuite : c'est le cœur vivant du programme. Le `main()` du C++ classique existe toujours, mais Arduino le cache et appelle `setup()` puis `loop()` à votre place.

```cpp
void setup() {
  // exécuté une fois au démarrage
  pinMode(13, OUTPUT);
  Serial.begin(115200);   // ouvre le port série à 115200 bauds
}

void loop() {
  // répété indéfiniment
}
```

Trois règles d'écriture : chaque instruction se termine par un **point-virgule** `;`, un bloc se délimite par des **accolades** `{ }`, et les **commentaires** s'écrivent `// sur une ligne` ou `/* sur plusieurs */`. Comme un microcontrôleur n'a pas d'écran, on « voit » ce qui se passe via le **port série** : `Serial.begin()` dans `setup()`, puis `Serial.print()` / `println()` pour afficher (voir [[arduino-serie|moniteur série]]).

### 2. Les variables et leurs types

Une variable se déclare en donnant son **type**, son **nom**, et éventuellement une valeur initiale : `int compteur = 0;`. Le type fixe ce que la variable peut contenir **et la place qu'elle occupe en mémoire** — un choix qui n'est jamais neutre en embarqué.

| Type | Taille (AVR / ARM) | Contenu | Usage typique |
| --- | --- | --- | --- |
| `bool` | 1 o | `true` / `false` | un état, un drapeau |
| `char` | 1 o | un caractère (`'A'`) | texte, code ASCII |
| `byte` / `uint8_t` | 1 o | entier 0–255 | une valeur d'octet, un registre |
| `int` | **2 o** / **4 o** | entier signé | compteur, mesure brute |
| `unsigned int` | 2 o / 4 o | entier ≥ 0 | index, quantité |
| `long` | 4 o | grand entier signé | grands compteurs |
| `unsigned long` | 4 o | grand entier ≥ 0 | **temps** (`millis()`) |
| `float` | 4 o | nombre à virgule | conversion, calcul physique |

Deux points sensibles. Le préfixe **`unsigned`** retire le signe : la variable ne stocke que des valeurs positives, mais double la valeur maximale atteignable. Et la **taille de `int` change selon la carte** : 2 octets sur AVR (Uno R3, Mega, Nano), 4 octets sur ARM (Uno R4, [[esp32|ESP32]]). Un même code peut donc déborder sur une carte et pas sur l'autre — la source de bugs « impossibles à reproduire » la plus classique (voir *Pièges*).

Pour le **texte**, `char` stocke un caractère ; une suite de caractères se range dans un tableau `char[]` (chaîne « à la C »). La classe `String`, plus confortable, n'est **pas** du C++ standard mais un ajout d'Arduino, et elle consomme de la mémoire dynamique : ses précautions sont traitées sous l'angle ressource dans [[arduino-memoire|gestion mémoire]].

### 3. Les opérateurs

Les opérateurs combinent les variables. Quatre familles suffisent au quotidien :

- **arithmétiques** : `+ - * /`, le modulo `%` (reste de division), et l'incrément `++` / décrément `--` ;
- **comparaison** : `==` (égal), `!=` (différent), `< > <= >=` — ils renvoient un `bool` ;
- **logiques** : `&&` (et), `||` (ou), `!` (non), pour enchaîner des conditions ;
- **affectation** : `=` et ses formes condensées `+= -= *= /=`.

Les opérateurs **bit-à-bit** (`& | ^ ~ << >>`), qui agissent sur les bits individuels d'un nombre, servent surtout à manipuler les registres du microcontrôleur — ils sont détaillés dans [[manipulation-de-bits|la manipulation de bits]].

Deux pièges de débutant logent ici : confondre l'affectation `=` et la comparaison `==` (`if (x = 3)` compile mais affecte au lieu de tester), et la **division entière** — `5 / 2` vaut `2`, pas `2.5`, tant qu'aucun des deux nombres n'est un flottant.

### 4. Les fonctions et la portée

Une [[fonction-informatique|fonction]] est un bloc de code nommé, qu'on définit une fois et qu'on rappelle ensuite. Elle déclare un **type de retour**, un **nom**, des **paramètres** entre parenthèses, et renvoie une valeur avec `return` (`void` si elle ne renvoie rien).

```cpp
int doubler(int n) {     // prend un entier, en renvoie un autre
  return n * 2;
}
```

`setup()` et `loop()` sont elles-mêmes des fonctions. Découper un programme en fonctions nommées (`lireCapteur()`, `commanderMoteur()`) le rend **lisible et réutilisable** plutôt que de tout empiler dans `loop()`.

La **portée** décide de la durée de vie d'une variable. Déclarée **dans** une fonction, elle est *locale* : elle naît à l'appel et meurt au retour. Déclarée **hors** de toute fonction, elle est *globale* : elle vit tout le programme. En embarqué, cette distinction est concrète — une valeur qu'on veut **conserver d'un tour de `loop()` au suivant** (un compteur, un dernier état) doit être globale, sinon elle se réinitialise à chaque passage.

### 5. Les structures de contrôle

Elles dirigent le déroulement du programme.

- **`if` / `else if` / `else`** — choisir selon une condition.
- **`for`** — répéter un nombre **connu** de fois : `for (int i = 0; i < 10; i++)`.
- **`while`** / **`do…while`** — répéter **tant qu'**une condition tient.
- **`switch` / `case`** — aiguiller selon la valeur d'une variable, alternative lisible à une cascade de `if` (omniprésent dans les [[machine-a-etats|machines à états]]).

`break` interrompt une boucle ou un `switch`, `continue` saute au tour suivant. À noter : la « boucle infinie » d'un programme embarqué, c'est `loop()` elle-même — on n'a presque jamais besoin d'écrire un `while (true)` à la main.

## Exemple — Un classificateur de seuil

Un capteur de température sur l'entrée `A0`. Le programme lit la valeur, la convertit, la **classe** en trois zones (froid / confort / chaud) et le signale par un nombre de clignotements. Un seul montage qui mobilise les cinq briques : types (`int`, `float`, `bool`, `const`), opérateurs, deux fonctions avec portée, et une cascade `if`.

```cpp
const int BROCHE_CAPTEUR = A0;   // capteur de température
const int BROCHE_LED = 13;       // LED de signalisation
const float SEUIL_BAS = 18.0;    // °C : sous ce seuil, "froid"
const float SEUIL_HAUT = 25.0;   // °C : au-dessus, "chaud"

float lireTemperature() {                  // fonction : lit et convertit
  int brut = analogRead(BROCHE_CAPTEUR);   // entier 0..1023
  float tension = brut * (5.0 / 1023.0);   // conversion en volts (flottant)
  return (tension - 0.5) * 100.0;          // formule indicative (dépend du capteur)
}

void clignote(int fois) {                  // fonction paramétrée : clignote n fois
  for (int i = 0; i < fois; i++) {         // structure de contrôle : for
    digitalWrite(BROCHE_LED, HIGH);
    delay(150);
    digitalWrite(BROCHE_LED, LOW);
    delay(150);
  }
}

void setup() {
  pinMode(BROCHE_LED, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  float t = lireTemperature();             // appel de fonction, valeur de retour

  if (t < SEUIL_BAS) {                      // comparaison + logique de décision
    Serial.println(F("froid"));
    clignote(1);
  } else if (t <= SEUIL_HAUT) {
    Serial.println(F("ok"));
    clignote(2);
  } else {
    Serial.println(F("chaud"));
    clignote(3);
  }

  delay(1000);                             // une mesure par seconde
}
```

La conversion passe volontairement par un `int` (la valeur brute de l'ADC) puis un `float` (les volts, puis les °C) : choisir le bon type à chaque étape évite la division entière et le débordement. La formule de conversion est *indicative* — la vraie dépend du capteur, à lire dans sa [[lire-une-datasheet|datasheet]]. Et la macro `F()` autour des textes les garde en mémoire programme plutôt qu'en mémoire vive (voir [[arduino-memoire|gestion mémoire]]).

*Ce sketch utilise `delay()`, qui fige tout pendant la pause : acceptable ici, mais dès qu'il fera plusieurs choses à la fois, on passera à la [[arduino-programmation-non-bloquante|programmation non bloquante]].*

## Pièges

**`int` qui déborde selon la carte.** Sur AVR (Uno R3, Mega, Nano), `int` tient sur 2 octets et plafonne à 32 767 ; passé ce seuil, il « repart » dans le négatif. Le même code sur Uno R4 ou ESP32 (`int` sur 4 octets) ne déborde pas — d'où des bugs qui n'apparaissent que sur certaines cartes. En cas de doute sur l'amplitude, prendre `long`.

**`unsigned long` obligatoire pour le temps.** Une durée issue de `millis()` stockée dans un `int` déborde en une trentaine de secondes. Le temps se stocke toujours en `unsigned long` (voir les pièges de [[arduino-temporisation|temporisation]]).

**`=` au lieu de `==` dans un test.** `if (etat = HIGH)` *affecte* `HIGH` à `etat` au lieu de le comparer — et le test est toujours vrai. Le code compile sans broncher ; le comportement est faux. Relire chaque condition.

**Division entière inattendue.** `5 / 2` vaut `2`. Pour obtenir `2.5`, au moins un des deux nombres doit être flottant : `5.0 / 2`. Erreur classique dans les conversions de mesures.

**Variable locale qu'on croyait persistante.** Une variable déclarée dans `loop()` se réinitialise à chaque tour. Pour mémoriser un état d'un passage au suivant, la déclarer **globale** (ou `static`).

**Comparer des `float` avec `==`.** Les flottants sont approchés : `a == b` sur deux flottants est rarement fiable. Comparer plutôt à une tolérance (`abs(a - b) < 0.01`).

**`float` gratuit en apparence.** Sur AVR (sans calcul flottant matériel), chaque opération sur `float` est lente et le `double` n'apporte rien (il *est* un `float`). Réserver les flottants aux calculs qui les exigent.

## Cas particulier — Déclarer une constante

Pour fixer une valeur qui ne change pas (une broche, un seuil), deux écritures coexistent :

```cpp
#define BROCHE 13          // ancienne forme : remplacement de texte par le préprocesseur
const int BROCHE = 13;     // forme recommandée : une vraie variable typée
```

Le `#define` fonctionne, mais il **n'a pas de type** et se contente d'un copier-coller de texte avant compilation, ce qui peut produire des erreurs surprenantes et complique le débogage. La forme `const int` (ou `constexpr`) est **typée**, respecte la portée et se lit comme une variable ordinaire : c'est elle qu'on privilégie aujourd'hui. On garde `#define` surtout pour les options de compilation.

## Aller plus loin

Ces cinq briques sont le socle ; les notions plus avancées s'y greffent directement :

- **Tableaux et structures** — un `int mesures[10]` regroupe plusieurs valeurs sous un nom ; une `struct` rassemble des champs hétérogènes (un capteur = une broche + un seuil + un état). C'est le pas suivant pour organiser des données.
- **Pointeurs et références** — manipuler l'**adresse** d'une variable plutôt que sa valeur. La notion est aussi la porte de l'allocation dynamique, dont le **coût mémoire** est traité dans [[arduino-memoire|gestion mémoire]].
- **Manipulation bit-à-bit** — masques, décalages et registres, pour parler directement au matériel : [[manipulation-de-bits|manipulation de bits]].
- **Architecture du code** — une fois les briques acquises, l'enjeu devient *comment structurer* : [[arduino-programmation-non-bloquante|programmation non bloquante]], [[machine-a-etats|machines à états]], et la structuration d'ensemble du [[firmware|firmware]].

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — le premier sketch qui dépasse le *Blink* mobilise types, opérateurs et fonctions. Maîtriser le langage à ce moment évite de confondre une erreur d'algorithme avec une faute de syntaxe ou un mauvais type — distinction qui fait gagner des heures de débogage.
- **Critère *« Programmer ou paramétrer un contrôleur numérique »*** — écrire le code du système, attendu en phase de réalisation, repose entièrement sur ces fondamentaux : ils en sont le socle transverse, quelle que soit la carte choisie.
- **[[integration-et-tests|Phase d'intégration et tests]]** — un code bien typé et découpé en fonctions claires produit moins de bugs au moment où les sous-ensembles s'assemblent, là où ils sont les plus coûteux à traquer.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-prise-en-main|Prise en main d'Arduino]] — compiler et téléverser, le prérequis pratique pour essayer ces exemples
- [[fonction-informatique|Fonction]] — la notion de fonction en programmation
- [[arduino-memoire|Gestion mémoire]] — types, `String`, pointeurs et allocation, sous l'angle de la ressource (transverse)
- [[manipulation-de-bits|Manipulation de bits]] — les opérateurs bit-à-bit et les registres (transverse)
- [[arduino-temporisation|delay() vs millis()]] — le typage du temps en `unsigned long`
- [[microcontroleur|Microcontrôleur]] — pourquoi mémoire et types sont comptés en embarqué
