---
title: Mettre un Pico en veille (deep sleep)
type: tuto
phases:
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main
  - deep-sleep
  - interruption
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Mettre un Pico en **veille** (*deep sleep*) consiste à endormir le microcontrôleur pour réduire sa consommation, en attendant un événement qui le réveille — une échéance de temps ou une [[interruption|interruption]] sur une broche. C'est la clé de l'**autonomie sur batterie** : un objet qui dort 99 % du temps et ne se réveille que pour agir tient bien plus longtemps. MicroPython expose deux fonctions du module [[micropython-modules|`machine`]] : **`lightsleep()`** (reprend où il s'est endormi) et **`deepsleep()`** (consomme moins, mais **redémarre** au réveil).

## À quoi ça sert ?

Un microcontrôleur éveillé consomme en continu, même quand il ne fait rien d'utile. Pour un montage USB, peu importe ; pour un capteur sur pile (station météo, balise, traceur), c'est l'autonomie qui s'effondre. La [[deep-sleep|veille]] renverse la logique : le système passe l'essentiel de son temps **endormi**, et ne se réveille que **brièvement** pour mesurer, transmettre, puis se rendort. Cycle : **dormir → se réveiller sur événement → agir vite → se rendormir**. On met cela en place tard, en [[integration-et-tests|phase d'intégration]], comme **optimisation énergétique** d'un montage déjà fonctionnel.

## `lightsleep` vs `deepsleep` — la différence clé

- **`machine.lightsleep(ms)`** — endort la puce ; au réveil, le programme **reprend juste après l'appel**, variables conservées. Consommation réduite mais pas minimale.
- **`machine.deepsleep(ms)`** — sommeil plus profond ; au réveil, **la puce redémarre** comme après un reset : `main.py` repart du début. Les variables sont perdues — il faut **sauvegarder l'état** (dans un fichier, voir [[micropython-stockage|stockage persistant]]) avant de dormir, et le relire au démarrage. C'est le même comportement « réveil = redémarrage » que sur l'[[esp32-deep-sleep|ESP32]].

## Procédure pas à pas

Quatre étapes : faire le travail utile, choisir le mode, endormir, gérer le réveil.

### 1. Réveil périodique avec `deepsleep`

Le cas le plus courant : un capteur qui relève une valeur à intervalle régulier. On mesure, puis on dort un temps donné — et au réveil, tout recommence.

```python
import machine
from machine import Pin, ADC

# Detecter d'ou vient le demarrage
if machine.reset_cause() == machine.DEEPSLEEP_RESET:
    print("reveil depuis deep sleep")
else:
    print("demarrage normal")

capteur = ADC(Pin(26))
print("mesure :", capteur.read_u16())     # reveil utile : on mesure
# ... transmettre, ou sauvegarder dans un fichier (voir micropython-stockage) ...

machine.deepsleep(32000)                   # dort 32 s puis REDEMARRE (main.py relance)
```

`machine.reset_cause()` permet de distinguer un vrai premier démarrage d'un réveil (`machine.DEEPSLEEP_RESET`) — utile pour n'exécuter une initialisation lourde qu'une fois.

### 2. Réveil immédiat avec `lightsleep`

Si l'on veut **reprendre** l'exécution sans perdre l'état :

```python
import machine
# ... travail ...
machine.lightsleep(5000)        # dort 5 s, puis REPREND ici (variables conservees)
# ... la suite s'execute normalement ...
```

### 3. Réveil sur événement (broche)

Pour réveiller sur un bouton ou un détecteur plutôt qu'à échéance fixe, on attache une [[micropython-interruptions|interruption]] sur la broche avant d'endormir ; l'événement ranime alors la puce (sans argument de durée, le sommeil dure jusqu'à l'événement) :

```python
from machine import Pin
import machine

bouton = Pin(14, Pin.IN, Pin.PULL_UP)
bouton.irq(trigger=Pin.IRQ_FALLING, handler=lambda p: None)   # source de reveil
machine.lightsleep()            # dort jusqu'a l'appui
```

### 4. Préparer le réveil (sauvegarde d'état)

Avant un `deepsleep`, comme la puce redémarrera, **sauvegarder ce qui doit survivre** : un compteur de cycles, la dernière mesure, l'état d'une machine — dans un **fichier** sur la flash (voir [[micropython-stockage|stockage persistant]]), relu au démarrage. Avec `lightsleep`, rien à sauvegarder (l'exécution reprend).

Prendre capture d'écran ou photo de *un multimètre en série avec l'alimentation du montage, affichant la chute du courant quand la carte s'endort*.

## Exemple — Capteur sur batterie réveillé périodiquement

Un capteur relève une mesure toutes les 60 s, puis se rendort en `deepsleep`. Un compteur de relevés persiste dans un fichier malgré le redémarrage.

```python
import machine, json
from machine import Pin, ADC

FICHIER = "etat.json"
try:
    with open(FICHIER) as f:
        etat = json.load(f)
except OSError:
    etat = {"releves": 0}              # premier demarrage

etat["releves"] += 1
capteur = ADC(Pin(26))
print("releve n°", etat["releves"], ":", capteur.read_u16())
# ... transmettre la mesure ...

with open(FICHIER, "w") as f:          # sauver l'etat avant de dormir
    json.dump(etat, f)

machine.deepsleep(60000)               # 60 s de sommeil, puis redemarrage
```

Entre deux mesures, la puce dort. Le compteur survit grâce au fichier, puisque `deepsleep` redémarre le programme. Sur la durée, le rapport « 60 s de sommeil pour une fraction de seconde d'éveil » transforme l'autonomie.

## Pièges

**Croire que `deepsleep` reprend où il s'est arrêté.** Au réveil, `deepsleep` **redémarre** (`main.py` repart de zéro, variables perdues). Sauvegarder l'état dans un fichier avant de dormir, le relire au démarrage. (`lightsleep`, lui, reprend l'exécution.)

**La carte Pico consomme plus que la puce nue.** Le régulateur et les composants de la carte Pico tirent un courant non négligeable **en permanence**, puce endormie ou non. Le vrai gain basse consommation s'obtient sur un **RP2040/RP2350 nu** ou une carte conçue pour la basse consommation ; sur une carte Pico standard, la mesure est surtout pédagogique. (Réalité analogue à l'Uno.)

**S'endormir avant d'avoir fini d'émettre.** Les communications sont asynchrones : s'assurer que l'envoi (Wi-Fi, UART…) est terminé avant d'appeler `deepsleep`, sinon le message est tronqué.

**Réveil sur une broche mal configurée.** Vérifier que la source de réveil (irq de broche) est bien posée **avant** d'endormir, sinon la puce dort sans pouvoir se réveiller (hors échéance de temps).

**Oublier de regarder `reset_cause()`.** Sans distinguer premier démarrage et réveil, on refait à chaque cycle une initialisation lourde (connexion réseau, calibration) inutilement — coûteux en énergie.

## Cas particulier — Profondeur et sources de réveil

`lightsleep` est plus simple (reprise immédiate, idéal pour des pauses courtes entre deux actions) ; `deepsleep` économise davantage mais impose le redémarrage et la sauvegarde d'état (idéal pour de longues pauses entre relevés espacés). Le choix se fait sur la **durée de sommeil** et le besoin de conserver ou non l'état en RAM. Pour une autonomie sérieuse, raisonner aussi sur le **budget énergétique** complet du montage (voir [[micropython-alimentation|alimenter la carte]]).

## Raccrochage projet

- **[[integration-et-tests|Phase d'intégration et tests]]** — l'optimisation énergétique vient une fois la fonction validée : mesurer la consommation, puis introduire la veille pour atteindre l'autonomie visée.
- **Spécification** — l'autonomie cible (« tenir une saison sur batterie ») est une exigence à poser tôt ; la veille est le moyen de la tenir, à dimensionner avec le budget énergétique.

Sur un objet connecté autonome, la veille n'est pas un détail mais l'**architecture même** du programme — d'où l'intérêt de la prévoir dès qu'une contrainte de batterie existe.

## Voir aussi

- [[deep-sleep|Deep sleep]] — la notion : les modes de veille et leur intérêt énergétique
- [[micropython|MicroPython]] — hub du module
- [[micropython-interruptions|Interruptions]] — la source de réveil sur événement
- [[micropython-stockage|Stockage persistant]] — sauvegarder l'état avant un `deepsleep` (qui redémarre)
- [[micropython-alimentation|Alimenter la carte]] — budget énergétique et choix de l'alimentation
- [[arduino-deep-sleep|Mettre un Arduino en veille]] — l'équivalent C++ (bibliothèque LowPower)
- [[esp32-deep-sleep|Deep sleep sur ESP32]] — même logique « réveil = redémarrage », sur une famille où la veille est très soignée
