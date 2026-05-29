---
title: État des GPIO à l'allumage
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-gpio
aa: []
draft: false
---

Entre l'instant où l'Arduino est alimenté et celui où `setup()` exécute la première instruction utile, il se passe quelques dizaines à centaines de millisecondes pendant lesquelles **l'état des GPIO n'est pas celui que vous avez codé**. Conséquence concrète : un relais peut coller brièvement, un moteur peut faire un soubresaut, une LED peut clignoter au démarrage. Cette fiche couvre les causes, les symptômes et les parades de ce comportement spécifique au boot — sujet souvent ignoré jusqu'au jour où il pose problème en démo.

## À quoi ça sert ?

Trois cas où il faut comprendre l'état GPIO au boot :

- **Actionneur qui s'active au démarrage** — le relais qui claque, le moteur qui tressaute, le servo qui se met en butée à chaque mise sous tension.
- **Brochage de la carte avec broches sensibles** — sur ESP32 notamment, certaines broches doivent être à un niveau précis pendant le boot, sous peine d'empêcher la carte de démarrer du tout.
- **Comportement défini en sortie d'arrêt-redémarrage** — pour un système qui doit revenir dans un état sûr après coupure secteur.

## Procédure pas à pas

Quatre étapes : comprendre ce qui se passe au boot, identifier les broches problématiques, ajouter des pull-up/pull-down externes, séquencer les actionneurs en début de `setup()`.

### 1. Comprendre la séquence de démarrage

Sur Arduino Uno R3 (ATmega328P), l'enchaînement typique après mise sous tension :

1. **Reset matériel** (~quelques µs) — toutes les broches en mode `INPUT` flottant (haute impédance).
2. **Bootloader** (~1-2 secondes) — attend une mise à jour par USB (clignote la LED 13). Pendant ce temps les broches sont toujours en `INPUT` flottant pour la plupart.
3. **Lancement du sketch** — `setup()` s'exécute. Les broches sont configurées au fur et à mesure que `pinMode()` est appelé.
4. **`loop()`** — comportement normal.

Pendant la phase 1-2, **toute broche utilisée plus tard en `OUTPUT` flotte**. Un actionneur branché dessus est dans un état indéterminé.

Sur ESP32, le démarrage est plus complexe : certaines broches sont lues par le ROM bootloader (broches *strapping*) pour choisir le mode de boot. Leur niveau au démarrage influence le démarrage lui-même.

### 2. Identifier les broches problématiques de la carte

| Carte | Broches sensibles au boot | Comportement |
|---|---|---|
| Uno R3 | D13 | clignote pendant le bootloader (LED intégrée) |
| Uno R3 | D0, D1 | utilisées par USB, à éviter pour autre chose |
| ESP32 | GPIO 0 | doit être HIGH au boot (LOW = flash mode) |
| ESP32 | GPIO 2 | sort à LOW au boot — incompatible avec pull-up forte |
| ESP32 | GPIO 12 | doit être LOW au boot |
| ESP32 | GPIO 15 | sort des messages de log si HIGH au boot |
| Uno R4 | D13 | clignote par le bootloader, comme R3 |

Sur l'Uno R3, la principale gêne est la **LED 13 qui clignote pendant la séquence bootloader** — si un actionneur (relais, moteur) est branché sur D13, il subit cette gigue. Solution simple : utiliser une autre broche pour l'actionneur.

### 3. Ajouter des pull-up ou pull-down externes selon le besoin

Une broche `INPUT` flottante peut être stabilisée par une résistance externe :

- **Pull-down externe** (résistance 10 kΩ entre broche et GND) — la broche est à `LOW` au boot. Convient si l'actionneur en aval doit être *éteint* tant que le code n'a pas pris le contrôle.
- **Pull-up externe** (résistance 10 kΩ entre broche et `+5 V`) — la broche est à `HIGH` au boot. Convient si l'actionneur doit être *actif au repos* (logique inversée, ou cas particulier d'un module avec entrée active-LOW).

Pour les **modules relais standard** (5 V, opto-isolés, actifs au niveau LOW) : un pull-up externe 10 kΩ entre la broche de commande et `+5 V` garde le relais relâché pendant le boot, même si la broche flotte. C'est la solution générique au *« clic relais au démarrage »*.

Prendre capture d'écran ou photo de *un module relais 5 V câblé sur une broche Arduino avec un pull-up externe 10 kΩ entre la broche de commande et le +5 V*.

### 4. Séquencer les actionneurs en début de `setup()`

Premier reflexe à coder dans `setup()` : **forcer toutes les sorties dans un état sûr AVANT de configurer le mode `OUTPUT`**. L'ordre des deux lignes a son importance :

```cpp
void setup() {
  // ORDRE CORRECT : forcer l'état souhaité D'ABORD, puis configurer en OUTPUT
  digitalWrite(RELAIS, HIGH);   // pour module actif-LOW, HIGH = relâché
  pinMode(RELAIS, OUTPUT);

  digitalWrite(MOTEUR_EN, LOW); // moteur arrêté
  pinMode(MOTEUR_EN, OUTPUT);

  // ... le reste de l'initialisation
}
```

Pourquoi cet ordre ? Quand on appelle `pinMode(X, OUTPUT)`, la broche bascule en mode sortie avec une valeur par défaut (typiquement `LOW`). Si on écrit d'abord `digitalWrite(X, HIGH)` *avant* `pinMode(X, OUTPUT)`, on configure le **registre interne** PORT à `HIGH` — donc dès l'instant du `pinMode`, la sortie part directement à `HIGH` sans transit par `LOW`.

## Exemple — Module relais qui claque au démarrage

Symptôme : un projet de domotique avec un module relais 5 V qui pilote une lampe. À chaque démarrage de l'Arduino, on entend un *click* puis la lampe s'éteint. C'est gênant pour la fiabilité mécanique du relais et pour la perception du système.

**Diagnostic** : pendant le bootloader, la broche de commande flotte. Le module relais (actif-LOW) interprète ce flou comme un `LOW` (suffisamment de bruit pour franchir le seuil), colle le relais. Puis le sketch démarre, configure proprement la broche en `OUTPUT` à `HIGH` — le relais relâche.

**Solution** :

1. **Pull-up externe 10 kΩ** entre la broche de commande et `+5 V` → la broche est tirée à `HIGH` pendant le boot, le relais reste relâché.
2. **Code** :

```cpp
const int RELAIS = 8;

void setup() {
  // Forcer HIGH avant de configurer en sortie
  digitalWrite(RELAIS, HIGH);
  pinMode(RELAIS, OUTPUT);
}

void loop() {
  // Le relais ne colle qu'à la demande explicite
}
```

Avec ces deux mesures (matérielle + logicielle), le démarrage est silencieux et propre.

## Pièges

**Croire que `pinMode(OUTPUT)` initialise à `LOW`.** C'est le comportement par défaut, mais à l'instant où la broche bascule, la sortie va effectivement à `LOW` (commute brièvement si elle était haute). Pour un actionneur actif-LOW (relais avec opto), cela suffit à le faire claquer. Écrire `digitalWrite(HIGH)` *avant* `pinMode(OUTPUT)`.

**Confier la sécurité à `setup()` seul.** `setup()` ne s'exécute qu'après le bootloader (~1-2 s sur Uno). Pendant ces secondes, les broches flottent — un actionneur sans pull-up/pull-down externe est dans un état indéterminé. La sécurité au boot ne peut être garantie que par le matériel (résistance, ou actionneur insensible).

**Pull-up sur GPIO 0 d'ESP32.** GPIO 0 doit être à `HIGH` au boot pour démarrer normalement. Un bouton branché entre GPIO 0 et GND peut empêcher l'ESP32 de démarrer si on l'enfonce au mauvais moment. Solution : ne pas utiliser GPIO 0 pour un usage utilisateur, ou ajouter un pull-up et un délai de stabilisation.

**LED 13 d'Uno utilisée pour un actionneur.** Pendant le bootloader, le firmware fait clignoter D13 pour signaler son état — donc tout actionneur sur D13 subit ce clignotement. Préférer toute autre broche pour les actionneurs (D8, D9, etc.).

**Oubli de l'état après reset logiciel.** Un `wdt_reset()` (watchdog), un reset par bouton, ou un appel à `asm volatile("jmp 0")` redéclenche le bootloader — on repasse par tout le cycle, y compris le flottement des sorties. La parade par pull-up/pull-down externe couvre aussi ce cas.

**Confondre boot et power-on.** Un reset par bouton ne provoque pas une vraie séquence de power-on — les broches conservent en partie leur dernier état pendant les microsecondes du reset. Mais pour la majorité des actionneurs, le bootloader qui suit met de toute façon les broches en flottement. Comportement à valider expérimentalement.

**Code qui dépend de l'état d'une entrée avant `setup()`.** Une broche `INPUT_PULLUP` n'est configurée qu'au moment du `pinMode()` correspondant — avant, elle flotte. Si un capteur est lu trop tôt (par exemple par une interruption qui s'active avant la fin de `setup()`), la lecture est fausse.

## Cas particulier — Modules actifs au niveau HIGH

Tous les modules actifs ne sont pas actifs-LOW. Certains modules relais haut de gamme (sans opto) sont actifs au niveau HIGH — le boot avec flottement n'est *pas* un problème dans ce cas. Vérifier toujours dans la fiche du module : « *commande active : LOW ou HIGH ?* » avant de dimensionner le pull-up ou pull-down externe.

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — anticiper l'état boot des actionneurs dès le premier câblage, surtout pour relais et moteurs. Mesure peu coûteuse en amont, longue à diagnostiquer après coup.
- **Étape 4 de la [[concept|phase de concept]]** — l'EAT doit prendre en compte le comportement au démarrage pour les fonctions critiques (sécurité, énergie).
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — tester explicitement le power-on cyclique (10 démarrages consécutifs) pour repérer les actionneurs qui dérapent.

L'état GPIO au boot est l'un de ces pièges *« qu'on découvre toujours en démo »*. Le traiter dès le premier branchement d'un relais ou d'un moteur — par un pull-up/pull-down de 5 centimes — épargne le moment où l'on doit l'expliquer au jury.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-gpio|Configurer les GPIO Arduino]] — prérequis
- [[arduino-sortie-tor|Piloter une sortie TOR]] — pour les relais et actionneurs binaires
- [[arduino-watchdog|Watchdog sur Arduino]] — pour le reset logiciel propre
- [[gpio|GPIO]] — la notion transverse (modes, états au boot)
