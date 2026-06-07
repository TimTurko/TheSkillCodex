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
>>> dir(led)                # voir les methodes disponibles
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
        sys.print_exception(e)      # affiche la trace complete
    sleep(1)
```

`sys.print_exception(e)` imprime la **trace** (type d'erreur, ligne) — l'équivalent du message d'un plantage, mais sans arrêter la boucle.

### 4. Utiliser le débogueur de Thonny

Thonny propose un **débogueur pas-à-pas** pour MicroPython : *Exécuter → Déboguer le script actuel*, puis avancer ligne à ligne en observant les variables. Plus lent que `print()`, mais précieux pour suivre une logique fine.

Prendre capture d'écran de *Thonny en mode débogage d'un script MicroPython, exécution en pas-à-pas et valeurs des variables visibles*.

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
- [[micropython-temporisation|Temporiser]] — cadencer les `print` sans surcharger
- [[debugger-embarque|Déboguer un système embarqué]] — la vue transverse (méthode + JTAG/SWD)
- [[micropython-watchdog|Watchdog]] — pour les blocages silencieux
- [[arduino-debug|Débugger un programme Arduino]] — l'équivalent C++ (`Serial.print`)
