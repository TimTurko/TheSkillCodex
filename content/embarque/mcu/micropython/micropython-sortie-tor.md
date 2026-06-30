---
title: Piloter une sortie TOR
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-gpio
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Une **sortie TOR** (Tout Ou Rien) commute une charge entre deux états : alimentée ou éteinte. LED de signalisation, buzzer, relais de puissance, ventilateur sur transistor — toutes se pilotent par `Pin.value()` (ou `on()`/`off()`). La fiche couvre les trois cas rencontrés en projet école : pilotage direct d'une petite charge (LED), via transistor pour une charge moyenne (buzzer, ventilateur), via module relais pour une charge secteur ou inductive importante. Une contrainte structure tout : le Pico est en **3,3 V** et délivre **moins de courant** qu'un Arduino.

## À quoi ça sert ?

Toute commande binaire d'un actionneur — allumer un témoin, déclencher une vanne, mettre en route un ventilateur — passe par une sortie TOR. Le bon choix d'interface (broche directe, transistor, module relais) dépend du **courant** appelé et de la **tension** d'alimentation de la charge. Règle de base : **~12 mA et 3,3 V maximum directement sur une broche** du Pico. Au-delà, on intercale un composant tampon.

## Procédure pas à pas

Quatre étapes : choisir l'interface, câbler, écrire le code, vérifier la consommation.

### 1. Choisir l'interface selon la charge

| Charge | Tension | Courant | Interface |
|---|---|---|---|
| LED standard | 1,8–3,3 V | 3–10 mA | Broche directe + résistance série |
| Buzzer passif, petit relais | 3,3–5 V | 20–100 mA | Transistor NPN (2N2222, BC547) ou MOSFET (2N7000) |
| Module relais (avec entrée logique) | 3,3 V logique | < 10 mA logique | Broche directe **si l'entrée accepte 3,3 V** (voir piège) |
| Ventilateur 12 V, moteur, ampoule secteur | > 5 V | > 100 mA | Module relais ou pont H, jamais sur broche |

On prend les trois cas usuels : **LED** (broche directe), **buzzer** (transistor), **module relais** (broche directe vers le module).

### 2. Câbler

**LED** : anode (+) → résistance 220 Ω à 1 kΩ → GP8 ; cathode (−) → GND.

**Buzzer via transistor NPN 2N2222** : émetteur → GND ; collecteur → buzzer (−) ; buzzer (+) → +5 V (ou +3,3 V) ; base → résistance 1 kΩ → GP9.

**Module relais** : IN du module → GP10 ; VCC → +5 V (souvent depuis VBUS) ; GND → GND. La charge secteur se branche **sur les bornes COM + NO du module**, le Pico n'y touche jamais.

![Câblage des trois interfaces de sortie TOR sur le Pico : LED via résistance 220 Ω sur GP8, buzzer via transistor NPN 2N2222 (base sur GP9), module relais commandé par GP10 ; alimentation +5 V (VBUS) et masse communes.|640](/ressources/img/micropython-sortie-tor/montage-relais.svg)

### 3. Écrire le code

Le code est identique quelle que soit l'interface — `Pin.on()` ne sait pas s'il pilote une LED ou un relais.

```python
from machine import Pin
from time import sleep

led    = Pin(8, Pin.OUT)        # LED sur GP8 (broche directe)
buzzer = Pin(9, Pin.OUT)        # buzzer via transistor sur GP9
relais = Pin(10, Pin.OUT)       # module relais sur GP10

while True:
    led.on(); buzzer.on(); relais.on()      # tout actif (relais parfois inversé, cf. avertissement)
    sleep(2)                                 # maintenu 2 s
    led.off(); buzzer.off(); relais.off()    # tout éteint
    sleep(2)                                 # 2 s, puis on recommence
```

> [!warning]
> **Logique du relais souvent inversée.** Beaucoup de modules relais sont *actifs au niveau bas* : `relais.off()` (0) colle le relais, `on()` (1) le relâche. Vérifier sur le module ou par essai — la LED du module s'allume quand le relais colle.

### 4. Vérifier la consommation

Avant de lancer un montage neuf, faire la somme : combien de mA tire chaque charge directe ? Combien au total ? La source (USB ≈ 500 mA, ou la broche 3V3 du Pico, limitée) suffit-elle ? Un Pico qui redémarre dès qu'on active un actionneur est presque toujours sous-alimenté — passer par une alimentation externe (sur **VSYS**) ou séparée pour les charges.

## Exemple — Buzzer alarme + LED clignotante

```python
from machine import Pin
from time import sleep

led    = Pin(8, Pin.OUT)
buzzer = Pin(9, Pin.OUT)

while True:
    for i in range(3):          # une salve = 3 bips, LED clignote en même temps
        led.on(); buzzer.on()   # LED + buzzer ON
        sleep(0.2)              # ON pendant 200 ms
        led.off(); buzzer.off() # LED + buzzer OFF
        sleep(0.2)              # OFF pendant 200 ms
    sleep(3)                    # pause avant la prochaine salve
```

Même structure pour piloter un module relais à la place du buzzer — seule l'interface matérielle change.

## Pièges

**Charge au-delà de ~12 mA par broche.** Le Pico délivre ~4 mA par défaut, ~12 mA au maximum — **moins** qu'un Arduino. Au moindre doute (buzzer, plusieurs LED, relais), passer par un transistor.

**3,3 V vers un module relais conçu pour 5 V.** Beaucoup de modules relais attendent une entrée logique **5 V** : 3,3 V peut ne pas suffire à les déclencher de façon fiable. Vérifier que le module accepte 3,3 V, sinon intercaler un transistor (ou un translateur de niveau). C'est un piège propre aux cartes 3,3 V comme le Pico.

**LED sans résistance.** La LED grille, ou la broche s'abîme. Toujours 220 Ω à 1 kΩ en série.

**Buzzer actif vs passif.** Un *buzzer actif* sonne dès qu'on lui applique sa tension — `on()` suffit. Un *buzzer passif* ne sonne pas en TOR — il lui faut un signal carré (voir [[micropython-sortie-pwm|PWM]]).

**Charge inductive sans diode de roue libre.** Bobine de relais, moteur, électrovanne : la coupure produit une surtension qui peut détruire le transistor. Une **diode 1N4007 en inverse en parallèle de la bobine** l'absorbe. Les modules relais commerciaux l'intègrent déjà.

**Logique inversée du relais oubliée.** Le relais colle alors qu'on l'a mis à `off()` — c'est l'optocoupleur du module qui inverse. Lire la doc ou tester.

**Sortie TOR pour un moteur CC.** Un moteur veut un sens et une vitesse — il faut un pont H (voir [[micropython-moteur-cc|piloter un moteur CC]]), pas une sortie TOR.

## Cas particulier — Charges secteur 230 V

Le pilotage de charges secteur **ne se fait jamais directement** — toujours par module relais ou contacteur statique (SSR). Trois vigilances : **isolation galvanique** (modules à optocoupleur `PC817`) ; **calibre du contact** (un relais bas de gamme ≈ 10 A / 250 V) ; **sécurité électrique** (câblage 230 V sous supervision, disjoncteur amont, bornes protégées).

## Raccrochage projet

- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — chaque actionneur binaire (témoin, buzzer, relais d'un sous-système) se valide en TOR avant intégration à la boucle de commande.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — validation pièce-par-pièce avant tests pyramidaux.

Choisir l'interface (broche / transistor / module relais) en amont, sur les datasheets — et pas après avoir grillé le premier composant — fait la différence entre une PoC qui converge et une qui s'éternise.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-gpio|Configurer les GPIO]] — prérequis (mode sortie, courants max)
- [[micropython-entree-tor|Lire une entrée TOR]] — la lecture correspondante
- [[micropython-sortie-pwm|Piloter une sortie PWM]] — moduler l'intensité d'une LED ou la vitesse d'un moteur
- [[lire-une-datasheet|Lire une datasheet]] — vérifier courants et tensions des modules
- [[arduino-sortie-tor|Piloter une sortie TOR (Arduino)]] — l'équivalent C++
