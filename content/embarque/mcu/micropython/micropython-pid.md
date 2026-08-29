---
title: Réguler avec un PID en MicroPython
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - asservissement
  - micropython-prise-en-main
  - micropython-sortie-pwm
  - micropython-temporisation
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Un **PID** (Proportionnel-Intégral-Dérivé) est un régulateur qui ajuste en continu une commande pour amener une grandeur mesurée vers une **consigne** : il calcule l'**erreur** (consigne − mesure) et en déduit une commande combinant trois termes. C'est l'outil de référence de l'[[asservissement|asservissement]] — réguler une vitesse, une température, une position. Sa mise en œuvre repose sur un calcul répété à **pas de temps constant**, donc sur une [[micropython-temporisation|cadence régulière]] via `ticks_ms()`. L'algorithme est le même qu'en C++. Seule la syntaxe change.

## À quoi ça sert ?

Commander « en aveugle » ne suffit pas dès qu'on vise une grandeur précise face à des perturbations. Mettre une PWM fixe sur un moteur ne garantit pas sa vitesse : en charge, il ralentit. La **boucle fermée** **mesure** le résultat, le compare à la consigne, et **corrige** sans cesse. Le PID combine trois comportements : **P** est proportionnel à l'erreur courante : réactif, mais laisse une **erreur résiduelle**. **I** accumule l'erreur passée : **élimine** le résiduel, au risque de s'**emballer**. **D** réagit à la **vitesse de variation** : **amortit**, mais amplifie le bruit.

![Schéma-bloc de la boucle fermée : la consigne entre dans un comparateur (erreur = consigne − mesure), le PID en déduit une commande envoyée en PWM au pont en H qui pilote le moteur ; un capteur (encodeur) mesure la vitesse réelle et la renvoie au comparateur ; une perturbation (charge) agit sur le moteur.|680](/ressources/img/micropython-pid/boucle-fermee-pid.svg)

On le met en place en [[preuve-de-concept|preuve de concept]], dès qu'une fonction doit tenir une consigne malgré les perturbations.

## Procédure pas à pas

Quatre étapes : définir l'erreur, coder les trois termes, cadencer à pas constant, régler les gains.

### 1. Définir consigne, mesure et erreur

```python
consigne = 30000          # ex. vitesse visee (unite du capteur, read_u16)
mesure = 0
erreur = consigne - mesure
```

### 2. Coder les trois termes

On garde l'erreur précédente et l'accumulation entre deux pas. Comme Python n'a pas `constrain`, un petit `borne()` borne une valeur :

```python
Kp, Ki, Kd = 1.8, 0.6, 0.05      # gains a regler
integrale = 0.0
erreur_prec = 0.0

def borne(x, lo, hi):
    return max(lo, min(hi, x))

def calculer_pid(erreur, dt):
    global integrale, erreur_prec
    integrale += erreur * dt                       # terme I : on accumule
    integrale = borne(integrale, -50000, 50000)    # anti-emballement
    derivee = (erreur - erreur_prec) / dt          # terme D : variation
    erreur_prec = erreur
    return Kp * erreur + Ki * integrale + Kd * derivee
```

### 3. Cadencer le calcul à pas constant

Les termes I et D n'ont de sens que si `dt` est **constant**. On exécute le calcul à cadence fixe avec [[micropython-temporisation|`ticks_ms()`]] (ou, pour du précis, un [[micropython-timers|timer]]), et on **borne** la commande à la plage de l'actionneur (`duty_u16` : 0–65535) :

```python
from machine import Pin, PWM
from time import ticks_ms, ticks_diff

moteur = PWM(Pin(15)); moteur.freq(1000)
DT_MS = 20
t_calc = ticks_ms()

while True:
    if ticks_diff(ticks_ms(), t_calc) >= DT_MS:
        t_calc = ticks_ms()
        erreur = consigne - lire_vitesse()
        commande = calculer_pid(erreur, DT_MS / 1000)
        moteur.duty_u16(int(borne(commande, 0, 65535)))
```

### 4. Régler les gains (Kp, Ki, Kd)

Réglage **empirique**, dans l'ordre : partir de `Ki = Kd = 0`, **augmenter `Kp`** jusqu'à une réponse rapide qui commence à osciller, puis réduire un peu ; **monter `Ki`** pour effacer l'erreur résiduelle sans réintroduire d'oscillation lente. Enfin, **ajouter `Kd`** avec parcimonie pour amortir, en s'arrêtant dès que le bruit gêne. Visualiser mesure et consigne dans le temps guide bien mieux que le tâtonnement.

Prendre capture d'écran du *traceur de Thonny affichant deux courbes, la consigne constante et la mesure qui converge vers elle*.

## Exemple — Réguler la vitesse d'un moteur

On asservit la vitesse d'un [[micropython-moteur-cc|moteur CC]] : un capteur donne la vitesse réelle, le PID ajuste la PWM du pont en H pour coller à la consigne, même en charge.

```python
from machine import Pin, PWM
from time import ticks_ms, ticks_diff

moteur = PWM(Pin(15)); moteur.freq(1000)

consigne = 30000
Kp, Ki, Kd = 1.8, 0.6, 0.05
integrale = 0.0
erreur_prec = 0.0
DT_MS = 20
t_calc = ticks_ms()

def borne(x, lo, hi):
    return max(lo, min(hi, x))

def lire_vitesse():
    ...                       # fournie par le capteur (encodeur, tachymetre)

while True:
    if ticks_diff(ticks_ms(), t_calc) >= DT_MS:
        t_calc = ticks_ms()
        dt = DT_MS / 1000

        mesure = lire_vitesse()
        erreur = consigne - mesure

        integrale += erreur * dt
        integrale = borne(integrale, -50000, 50000)   # anti-emballement
        derivee = (erreur - erreur_prec) / dt
        erreur_prec = erreur

        commande = Kp * erreur + Ki * integrale + Kd * derivee
        moteur.duty_u16(int(borne(commande, 0, 65535)))

        print(consigne, mesure)                       # pour le traceur
```

> [!info] Comment lire ce code
> À chaque pas (toutes les 20 ms), le bloc enchaîne les trois termes. `erreur = consigne − mesure` : l'écart à corriger. `integrale += erreur * dt` **accumule** l'erreur au fil du temps (terme I), aussitôt **bornée** par `borne(…, -50000, 50000)`. C'est l'anti-emballement. `derivee = (erreur − erreur_prec) / dt` mesure la **vitesse de variation** de l'erreur (terme D), puis on mémorise `erreur_prec` pour le pas suivant. La commande est la **somme pondérée** `Kp*erreur + Ki*integrale + Kd*derivee`, enfin `borne(…, 0, 65535)` la ramène dans la plage `duty_u16` avant de piloter le moteur. Les deux valeurs imprimées (consigne et mesure) servent à régler les gains à l'œil sur le traceur.

Le `borne` sur l'intégrale est l'**anti-emballement** (*anti-windup*) : sans lui, si l'actionneur sature (PWM déjà au max mais consigne inatteignable), l'intégrale gonfle et la commande met longtemps à redescendre quand l'erreur s'inverse. Le couple consigne/mesure imprimé alimente le traceur pour régler les gains à l'œil.

## Pièges

**Calculer le PID à pas irrégulier.** Les termes I et D dépendent de `dt`. Un calcul tantôt toutes les 5 ms, tantôt toutes les 50 ms, fausse l'intégrale et la dérivée. Cadencer à intervalle **fixe** ([[micropython-temporisation|`ticks_ms()`]] ou [[micropython-timers|timer]]) est non négociable.

**Oublier l'anti-emballement.** Quand l'actionneur sature, l'intégrale accumule dans le vide. À l'inversion de l'erreur, la commande reste « collée » trop longtemps. Borner l'intégrale (ou la commande).

**Trop de dérivé sur un signal bruité.** Le terme D amplifie le bruit : capteur bruité + `Kd` élevé = commande qui tremble. Filtrer la mesure (moyenne glissante) ou réduire `Kd`.

**Ne pas borner la commande.** La sortie du PID peut dépasser 0–65535 : `int()` sur une valeur hors plage lève une erreur ou produit un comportement faux. Toujours `borne()` avant `duty_u16`.

**Oublier `global` dans le calcul.** `integrale` et `erreur_prec` doivent être déclarées `global` (ou portées par un objet/classe), sinon elles repartent de zéro à chaque appel.

**Croire qu'un PID compense un montage défaillant.** Capteur mal placé, actionneur sous-dimensionné, mécanique qui coince : aucun gain ne corrige un défaut matériel.

## Cas particulier — Une classe PID, ou une bibliothèque

- **Encapsuler** le régulateur dans une **classe** (`gains, integrale, erreur_prec` en attributs, une méthode `calculer(mesure, dt)`) évite les `global` et permet plusieurs PID indépendants (un par axe).
- Des **bibliothèques PID** MicroPython existent (installables via `mip`, voir [[micropython-bibliotheques|bibliothèques]]) et gèrent pas de temps, anti-emballement et bornes. Pratique en production. Le calcul manuel reste préférable **pour comprendre** avant de déléguer.

## Raccrochage projet

- **Étape 2-3 de la [[preuve-de-concept|phase de preuve de concept]]** — valider l'asservissement d'une fonction (vitesse, position, température) sur un montage isolé, capteur et actionneur réels.
- **[[integration-et-tests|Phase d'intégration et tests]]** — la boucle de régulation tourne à pas constant imposé par un [[micropython-timers|timer]]. Ses gains, réglés en PoC, sont revérifiés sur le système complet et en charge.

Un PID se conçoit autour d'une **mesure fiable** et d'une **cadence régulière** : ces deux prérequis comptent autant que les gains.

## Voir aussi

- [[asservissement|Asservissement]] — la notion mère : boucle fermée, consigne/erreur/correcteur, rôle du PID
- [[micropython-temporisation|sleep() vs ticks_ms()]] — cadencer le calcul à pas constant
- [[micropython-timers|Timers matériels]] — pour un pas de temps précis sur un asservissement exigeant
- [[micropython-sortie-pwm|Piloter une sortie PWM]] — la commande de sortie du régulateur
- [[micropython-moteur-cc|Moteur CC]] — l'actionneur de l'exemple (pont en H)
- [[micropython-capteur-analogique|Lire un capteur analogique]] — la mesure qui ferme la boucle
- [[micropython-programmation-non-bloquante|Programmation non bloquante]] — le PID est une tâche cadencée parmi d'autres
- [[micropython|MicroPython]] — hub du module
- [[arduino-pid|Réguler avec un PID (Arduino)]] — l'équivalent C++ (`constrain`, `PID_v1`)
