---
title: Débugger un programme MicroPython
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-repl
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

**Débugger un programme MicroPython** consiste à comprendre pourquoi un programme ne se comporte pas comme attendu, en observant son état interne pendant l'exécution. MicroPython offre un atout que l'Arduino n'a pas : le **[[micropython-repl|REPL]]**, qui permet de **tester une ligne en direct** et, quand un programme plante, d'**inspecter les variables sur la carte**. Les outils de base : `print()`, le REPL, `try/except`, et le **débogueur pas-à-pas de Thonny**.

## À quoi ça sert ?

Tout projet dépasse vite la complexité où l'on vérifie tout à l'œil. Cas typiques : le programme **se bloque** sans qu'on sache où ; une **mesure capteur est aberrante** (lecture ? conversion ? affichage ?) ; un **comportement aléatoire** non reproductible ; une **fonction renvoie une valeur étrange**. La discipline de débug — *observer avant de modifier* — sépare un dépannage rapide d'une nuit de modifications aveugles.

## Procédure pas à pas

Quatre étapes : `print()` stratégique, exploiter le REPL, capturer les erreurs avec `try/except`, utiliser le débogueur Thonny.

### 1. `print()` stratégique

L'outil de base : afficher les variables critiques pour suivre l'exécution.

```python
from machine import ADC, Pin
from time import sleep

capteur = ADC(Pin(26))
led = Pin(15, Pin.OUT)

while True:
    brut = capteur.read_u16()
    print("[DBG] brut =", brut)

    tension = brut * 3.3 / 65535
    print("[DBG] tension =", tension, "V")

    if tension > 1.65:
        print("[DBG] au-dessus du seuil")
        led.on()
    else:
        led.off()
    sleep(0.5)
```

À chaque étape de calcul, on imprime ce qu'on observe ; si la valeur colle à l'attendu, on passe à la suite ; sinon, on tient le bug. Préfixer (`[DBG]`, `[ERR]`) aide à filtrer le défilement.

### 2. Exploiter le REPL

Atout MicroPython : quand un programme plante (ou après `Ctrl-C`), on **retombe dans le REPL** et on inspecte l'état **sur la carte** :

```python
>>> capteur.read_u16()      # tester le capteur en direct
512
>>> dir(led)                # voir les méthodes disponibles
```

On peut aussi **mettre au point une ligne au REPL** avant de l'intégrer au programme — bien plus rapide que recharger tout un fichier.

### 3. Capturer les erreurs avec `try / except`

Plutôt que de laisser le programme planter, on **attrape** l'erreur et on la signale, ce qui garde le système vivant :

```python
import sys

while True:
    try:
        mesure = lire_capteur()
        traiter(mesure)
    except Exception as e:
        print("[ERR] exception attrapee :")
        sys.print_exception(e)      # affiche la trace complète
    sleep(1)
```

`sys.print_exception(e)` imprime la **trace** (type d'erreur, ligne) — l'équivalent du message d'un plantage, mais sans arrêter la boucle.

### 4. Utiliser le débogueur de Thonny

Thonny propose un **débogueur pas-à-pas** pour MicroPython : *Exécuter → Déboguer le script actuel*, puis avancer ligne à ligne en observant les variables. Plus lent que `print()`, mais précieux pour suivre une logique fine.

![Thonny en débogage pas-à-pas d'un script MicroPython, les valeurs des variables visibles.|640](/ressources/img/micropython-debug/thonny-pas-a-pas.png)

## Lire la traceback

Un programme MicroPython rate de deux façons, et la marche à suivre diffère :

- **Il plante** : MicroPython interrompt l'exécution et affiche une **traceback** (trace d'erreur) dans le REPL. Le bug est signalé — il reste à le lire.
- **Il tourne mais fait autre chose que prévu** : aucune erreur affichée. C'est là que la méthode (observer, comparer, dichotomiser) prend tout son sens (section suivante).

Contrairement à l'Arduino, **rien ne « compile »** : MicroPython lit le fichier et l'exécute directement. Une faute de syntaxe n'est donc détectée **qu'au chargement** du fichier (ou de la ligne au REPL), pas avant.

**On lit une traceback par le bas.** La **dernière ligne** donne le **type** d'erreur et son message ; juste au-dessus, le numéro de **ligne** fautive.

```
Traceback (most recent call last):
  File "<stdin>", line 7, in <module>
ValueError: invalid syntax for integer with base 10
```

Les erreurs les plus fréquentes en début d'apprentissage :

- **`SyntaxError` / `IndentationError`** (au chargement) — parenthèse ou `:` oublié, indentation incohérente (mélange d'espaces et de tabulations). Le fichier ne démarre même pas.
- **`NameError`** — nom inconnu ici : faute de frappe ou de **casse** (`maLed` ≠ `maLED`), `import` oublié, ou variable utilisée avant d'être définie.
- **`AttributeError`** — méthode qui n'existe pas sur l'objet (`led.hihg()` au lieu de `high()`, ou mauvais type d'objet).
- **`TypeError`** — mauvais type d'argument : très souvent **`bytes` vs `str`** (`uart.write("x")` veut des `bytes`), ou un argument oublié.
- **`OSError`** — erreur matérielle/système : périphérique I2C/SPI absent, carte SD non montée, fichier introuvable. Souvent un **problème de câblage** (section suivante).
- **`ValueError`** — valeur incohérente : `int("abc")`, broche inexistante, plage dépassée.
- **`ImportError`** — bibliothèque non installée sur la carte (voir [[micropython-bibliotheques|bibliothèques]]).
- **`IndexError` / `KeyError`** — accès hors d'une liste (`t[5]` sur 4 éléments) ou d'une clé de dictionnaire absente.

Quand un programme plante, on **retombe dans le REPL** : on inspecte alors l'état (`print(variable)`, `dir(objet)`) au moment exact du plantage — l'avantage décisif de l'interprété (étape 2).

## Quand le programme tourne mais fait autre chose

Aucune traceback ici : la syntaxe est bonne, la **logique** ne l'est pas. Il faut **observer** (`print`, dichotomie — voir la *Procédure*) et connaître les pièges les plus courants en MicroPython :

- **Indentation qui change le sens.** Un bloc mal indenté s'exécute au mauvais moment (hors de la boucle, hors du `if`). Python n'a pas d'accolades : **l'indentation EST la structure**. Style cohérent, 4 espaces.
- **`/` donne toujours un flottant.** `5 / 2` vaut `2.5`, pas `2` ; pour l'entier, `//` (`5 // 2` = `2`). Et sur le Pico les flottants sont en **simple précision** : ne pas asséner de décimales exactes (voir [[micropython-types|types]]).
- **`bytes` vs `str`.** Une lecture `uart`/fichier binaire renvoie des `bytes` (`b"..."`) ; les comparer ou les concaténer avec du texte échoue. Convertir par `.decode()` / `.encode()`.
- **Comparer deux flottants avec `==`.** `if tension == 3.3` est presque toujours faux (arrondis). Tester un intervalle : `if abs(tension - 3.3) < 0.01`.
- **`global` oublié.** Modifier une variable de module dans une fonction sans `global` crée une variable **locale** silencieuse — la globale ne bouge pas (piège classique des compteurs d'[[micropython-interruptions|interruption]]).
- **`Pin` sans direction.** `Pin(15)` ne pilote rien tant qu'on n'a pas précisé `Pin(15, Pin.OUT)` ; une entrée sans `Pin.PULL_UP` flotte et lit n'importe quoi.

Aucune de ces erreurs ne lève d'exception : c'est pourquoi la méthode — observer, comparer, resserrer par dichotomie — est la seule porte de sortie.

## Le code dit une chose, le câblage en dit une autre

Le programme peut être juste et le câblage faux ; le câblage peut être bon et le code faux. Les deux donnent souvent le **même symptôme** (« rien ne se passe »), et c'est l'un des blocages les plus fréquents en TP. La clé : **le numéro de broche dans le code *est* l'adresse physique du composant**. `Pin(15, Pin.OUT)` est une promesse qu'un fil part de GP15 vers le composant — ni GP14, ni GP16.

La sortie est la dichotomie appliquée à la frontière code / matériel — **isoler les deux moitiés** :

- **Prouver la carte** avec la LED embarquée (`Pin("LED")`), sans rien câbler. Si elle clignote, la chaîne Thonny → carte fonctionne ; le problème est en aval.
- **Prouver le câblage** avec quelques lignes au REPL qui ne pilotent (ou ne lisent) que *la* broche suspecte : `Pin(15, Pin.OUT).on()`, ou `ADC(Pin(26)).read_u16()`. Si le composant réagit, le câblage est bon : le bug est dans la logique du programme.
- **Tracer le fil** depuis la broche nommée dans le code jusqu'au composant : lire `LED = Pin(15, Pin.OUT)`, poser le doigt sur GP15, suivre le fil. Neuf fois sur dix, l'erreur saute aux yeux.
- **Vérifier le *rôle* et la *polarité*, pas seulement le numéro.** Une broche déclarée `Pin.OUT` mais câblée à un capteur, ou une LED reliée à GND alors que le code la croit active à l'état haut : le numéro est bon, le sens ne colle pas.

Deux disciplines gardent ce lien lisible : **nommer les broches** (`LED = Pin(15, Pin.OUT)` plutôt que `15` répété en dur), et **lire les schémas de câblage de ce wiki en regard du code** — leurs broches portent les mêmes noms que le programme (`Trig → GP9`, `SDA → GP4`). L'exemple ci-dessous applique cette logique d'isolement, du capteur vers la sortie.

## Exemple — Diagnostiquer un capteur ultrason qui renvoie -1

On a câblé un HC-SR04, le code tourne, mais la distance est toujours `-1`. Démarche en oignon (du capteur vers la sortie) :

**Étape 1 — l'écho arrive-t-il ?**

```python
duree = time_pulse_us(echo, 1, 30000)
print("[DBG] duree =", duree)
```

`duree < 0` → pas d'écho : `trig` mal câblé, capteur non alimenté, ou **niveau 5 V de `Echo`** sans pont diviseur (Pico non tolérant 5 V).

**Étape 2 — le calcul est-il bon ?**

```python
distance = duree * 0.0343 / 2
print("[DBG] distance =", distance)
```

`duree` cohérent (~580 µs pour 10 cm) mais `distance` aberrante → erreur de formule.

**Étape 3 — la valeur arrive-t-elle à l'aval ?** Vérifier la condition (signe, seuil) et le câblage de la sortie. Cette démarche isole vite le segment fautif.

## Pièges

**`print()` qui change le timing.** Imprimer dans une boucle critique (asservissement, lecture rapide) ralentit le code et peut modifier le comportement observé. Imprimer sur une cadence réduite (via [[micropython-temporisation|`ticks_ms()`]]), ou retirer les `print` une fois le bug trouvé.

**Bug Heisenberg.** Ajouter un `print` (ou un pas-à-pas) ralentit assez pour faire *disparaître* le bug — souvent le signe d'une dépendance temporelle. Diagnostic alternatif : une LED qu'on bascule pour marquer un passage, sans ralentir.

**Confondre « pas imprimé » et « pas exécuté ».** Si un `print` n'apparaît pas, deux hypothèses : la ligne n'est pas atteinte, OU une exception a interrompu avant. Encadrer de `try/except` pour le savoir.

**Laisser des `print` partout en production.** Trop de `print` consomme du temps et ralentit. Discipline : un drapeau pour tout désactiver d'un coup.

```python
DEBUG = True
def dbg(*a):
    if DEBUG:
        print("[DBG]", *a)
```

**Programme qui plante en boucle au démarrage.** Si `main.py` lève une exception dès le boot, la carte peut sembler injoignable. Rebrancher en **BOOTSEL** (ou interrompre tôt au REPL) pour reprendre la main, puis corriger.

## Cas particulier — Débogage matériel (SWD)

Le Pico peut être débogué au niveau matériel via **SWD** (un second Pico en *picoprobe* + OpenOCD + gdb), mais cette voie vise surtout le développement **en C**. En MicroPython, le trio `print()` + REPL + `try/except` couvre l'essentiel ; la vue transverse (méthode d'enquête, JTAG/SWD) est dans [[debugger-embarque|déboguer un système embarqué]].

## Raccrochage projet

- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — un PoC sans `print` se dépanne mal. Investir tôt en instrumentation évite des heures d'errance.
- **Étape 1 de la [[integration-et-tests|phase d'intégration et tests]]** — l'instrumentation conditionne la qualité des tests pyramidaux.
- **Étape 4 de la [[integration-et-tests|phase d'intégration et tests]]** — la chasse aux bugs intermittents s'appuie sur des logs continus, analysés après coup.

Le débug est moins un coup de génie qu'une **méthode** : observer, comparer, dichotomiser. Le REPL de MicroPython rend cette méthode particulièrement rapide.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-repl|Le REPL]] — l'outil d'inspection en direct (prérequis)
- [[micropython-langage|Le langage MicroPython]] — types, `/` vs `//` : la racine de beaucoup d'erreurs de base
- [[micropython-lire-un-programme|Lire un programme qu'on n'a pas écrit]] — l'étape d'avant : comprendre un code sans supposer de panne
- [[micropython-gpio|Entrées-sorties (GPIO)]] — `Pin`, direction et tirage des broches
- [[micropython-temporisation|Temporiser]] — cadencer les `print` sans surcharger
- [[debugger-embarque|Déboguer un système embarqué]] — la vue transverse (méthode + JTAG/SWD)
- [[micropython-watchdog|Watchdog]] — pour les blocages silencieux
- [[arduino-debug|Débugger un programme Arduino]] — l'équivalent C++ (`Serial.print`)
