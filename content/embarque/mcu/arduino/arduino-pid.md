---
title: Réguler avec un PID sur Arduino
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - asservissement
  - arduino-prise-en-main
  - arduino-sortie-pwm
  - arduino-temporisation
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Un **PID** (Proportionnel-Intégral-Dérivé) est un régulateur qui ajuste en continu une commande pour amener une grandeur mesurée vers une **consigne** : il calcule l'**erreur** (consigne − mesure) et en déduit une commande combinant trois termes. C'est l'outil de référence de l'[[asservissement|asservissement]] (réguler une vitesse, une température, une position) et sa mise en œuvre sur Arduino repose sur un calcul répété à **pas de temps constant**, donc sur une [[arduino-temporisation|cadence régulière]].

## À quoi ça sert ?

Commander « en aveugle » ne suffit pas dès qu'on vise une grandeur précise face à des perturbations. Mettre une tension fixe sur un moteur ne garantit pas sa vitesse : en charge, il ralentit. Le principe de la **boucle fermée** est de **mesurer** le résultat, de le comparer à la consigne, et de **corriger** la commande en conséquence, sans cesse. Le PID est la loi de correction la plus répandue parce qu'elle combine trois comportements complémentaires :

- **P (proportionnel)** — corrige proportionnellement à l'erreur courante : réactif, mais laisse souvent une **erreur résiduelle** ;
- **I (intégral)** — accumule l'erreur passée : **élimine** l'erreur résiduelle, au risque de s'**emballer** ;
- **D (dérivé)** — réagit à la **vitesse de variation** de l'erreur : **amortit** et anticipe, mais amplifie le bruit.

![Boucle fermée d'un asservissement de vitesse : la consigne entre dans un comparateur (erreur = consigne − mesure), le PID en déduit une commande envoyée en PWM au pont en H qui pilote le moteur ; un capteur (encodeur) mesure la vitesse réelle et la renvoie au comparateur, tandis qu'une perturbation (charge) agit sur le moteur.|680](/ressources/img/arduino-pid/boucle-fermee-pid.svg)

On met un PID en place en [[preuve-de-concept|preuve de concept]], dès qu'une fonction doit tenir une consigne malgré les perturbations, typiquement un asservissement de vitesse ou de position.

## Procédure pas à pas

Quatre étapes : mesurer et calculer l'erreur, coder les trois termes, cadencer le calcul, puis régler les gains.

### 1. Définir consigne, mesure et erreur

La boucle a besoin de trois grandeurs : la **consigne** (ce qu'on veut), la **mesure** (ce qu'on a, via un capteur), et la commande de sortie (vers l'actionneur, souvent une [[arduino-sortie-pwm|PWM]]). L'erreur est leur différence.

```cpp
double consigne = 150.0;   // ex. vitesse visée (tr/min)
double mesure   = 0.0;     // lue par un capteur
double erreur   = consigne - mesure;
```

### 2. Coder les trois termes

Le calcul combine l'erreur courante (P), son accumulation (I) et sa variation (D). On garde l'erreur précédente et l'accumulation entre deux pas.

```cpp
double Kp = 2.0, Ki = 0.5, Kd = 0.1;   // gains à régler
double integrale = 0, erreurPrec = 0;

double calculerPID(double erreur, double dt) {
  integrale += erreur * dt;                       // terme I : on accumule
  double derivee = (erreur - erreurPrec) / dt;    // terme D : variation
  erreurPrec = erreur;
  return Kp * erreur + Ki * integrale + Kd * derivee;
}
```

### 3. Cadencer le calcul à pas constant

Un PID suppose un **intervalle de calcul régulier** `dt` : les termes I et D n'ont de sens que si le pas est constant. On exécute donc le calcul à cadence fixe, avec [[arduino-temporisation|`millis()`]] ou, pour du précis, un [[arduino-timers|timer matériel]]. Le résultat pilote l'actionneur, **borné** à la plage utile de la commande.

```cpp
const unsigned long DT_MS = 20;        // pas de 20 ms (50 Hz)
unsigned long tCalcul = 0;

void loop() {
  if (millis() - tCalcul >= DT_MS) {
    tCalcul += DT_MS;                              // on avance la date, on ne la relit pas
    double erreur = consigne - lireVitesse();
    double commande = calculerPID(erreur, DT_MS / 1000.0);
    commande = constrain(commande, 0, 255);        // borne PWM
    analogWrite(MOTEUR, (int)commande);
  }
}
```

### 4. Régler les gains (Kp, Ki, Kd)

Le réglage est **empirique** et se fait dans cet ordre :

- partir de `Ki = Kd = 0`, **augmenter `Kp`** jusqu'à une réponse rapide qui commence à osciller, puis réduire un peu ;
- **monter `Ki`** progressivement pour faire disparaître l'erreur résiduelle, sans réintroduire d'oscillation lente ;
- **ajouter `Kd`** avec parcimonie pour amortir les dépassements, en s'arrêtant dès que le bruit devient gênant.

Visualiser la mesure et la consigne dans le temps guide ce réglage bien mieux que le tâtonnement à l'aveugle.

![Traceur série de l'IDE Arduino affichant deux courbes issues d'un procédé simulé en logiciel, la consigne plate à 150 et la mesure qui bondit à 112 puis s'approche lentement de la consigne, à 146 au bord droit.|600](/ressources/img/arduino-pid/traceur-consigne-mesure.png)

La courbe ci-dessus sort d'un **procédé simulé** (un modèle de moteur calculé dans le sketch lui-même, sans moteur ni capteur) et elle se lit en deux temps. La mesure **bondit** de 0 à plus de 110 tr/min en deux dixièmes de seconde, parce que l'erreur initiale sature la commande à 255, et c'est le terme P qui travaille. Puis elle **rampe** vers la consigne pendant une dizaine de secondes, et ce second temps est celui du terme I, qui comble l'erreur résiduelle d'autant plus lentement que `Ki` est faible. Un tracé qui semble stagner sous la consigne n'est donc pas une boucle en panne, c'est un `Ki` prudent.

**Reproduire cette courbe sans moteur.** L'*Exemple* ci-dessous déclare `double lireVitesse();` sans jamais la définir : le capteur est supposé fourni, et le sketch ne se lie donc pas tel quel. Le bloc suivant la remplace par un **modèle de moteur** du premier ordre calculé en logiciel. La vitesse tend vers `GAIN_MOTEUR × commande` avec une constante de temps `TAU_S`. Une carte et un câble USB suffisent, il n'y a rien à câbler.

```cpp
// Procede simule : remplace la ligne `double lireVitesse();` de l'Exemple

const double GAIN_MOTEUR = 1.5;   // tr/min par unite de PWM (255 donne 382 tr/min)
const double TAU_S       = 0.30;  // constante de temps mecanique, en secondes
double vitesseSimulee    = 0.0;   // etat du modele : la vitesse « reelle »

double lireVitesse() {            // tient lieu de capteur : rend l'etat du modele
  return vitesseSimulee;
}

void simulerMoteur(int commande, double dt) {   // fait avancer le modele d'un pas
  vitesseSimulee += dt / TAU_S * (GAIN_MOTEUR * commande - vitesseSimulee);
}
```

Deux insertions ensuite dans la boucle de l'*Exemple*. D'abord faire réagir le procédé à la commande, juste après `analogWrite` (sans cette ligne le modèle reste à l'arrêt et la mesure ne bouge jamais) :

```cpp
    simulerMoteur((int)commande, dt);   // le procede reagit a la commande
```

Ensuite remplacer l'impression par la forme ci-dessous. Les libellés nomment les deux courbes dans la légende du traceur, et l'espacement est nécessaire : à 50 impressions par seconde, la fenêtre du traceur ne retient qu'une seconde d'historique, où la convergence est invisible.

```cpp
    static byte n = 0;
    if (++n >= 10) {                    // une ligne sur dix, soit 5 points par seconde
      n = 0;
      Serial.print("consigne:"); Serial.print(consigne);
      Serial.print(" mesure:");  Serial.println(mesure);
    }
```

Le gain du modèle n'est pas arbitraire : l'intégrale étant bornée à 200, le terme I ne peut porter seul qu'une commande de `Ki × 200`, soit 120. Un moteur simulé trop peu efficace demanderait davantage en régime établi, et la boucle se stabiliserait **sous** la consigne (voir *Pièges*).

## Exemple — Réguler la vitesse d'un moteur

On asservit la vitesse d'un [[arduino-moteur-cc|moteur à courant continu]] : un capteur (encodeur, tachymètre) donne la vitesse réelle, le PID ajuste la PWM envoyée au pont en H pour coller à la consigne, même quand la charge varie.

```cpp
const int MOTEUR = 9;          // commande PWM vers le pont en H

double consigne = 150.0;       // tr/min visés
double Kp = 1.8, Ki = 0.6, Kd = 0.05;
double integrale = 0, erreurPrec = 0;

const unsigned long DT_MS = 20;
unsigned long tCalcul = 0;

double lireVitesse();          // fournie par le capteur (encodeur, etc.)

void setup() {
  pinMode(MOTEUR, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  if (millis() - tCalcul >= DT_MS) {
    tCalcul += DT_MS;                                // cadence strictement constante
    double dt = DT_MS / 1000.0;

    double mesure = lireVitesse();
    double erreur = consigne - mesure;

    integrale += erreur * dt;
    integrale = constrain(integrale, -200, 200);     // anti-emballement
    double derivee = (erreur - erreurPrec) / dt;
    erreurPrec = erreur;

    double commande = Kp * erreur + Ki * integrale + Kd * derivee;
    commande = constrain(commande, 0, 255);
    analogWrite(MOTEUR, (int)commande);

    Serial.print(consigne); Serial.print(' '); Serial.println(mesure);
  }
}
```

> [!info] Comment lire ce code
> À chaque pas (toutes les 20 ms), le bloc enchaîne les trois termes. `erreur = consigne − mesure` : l'écart à corriger. `integrale += erreur * dt` **accumule** l'erreur au fil du temps (terme I), aussitôt **bornée** par `constrain`. C'est l'anti-emballement. `derivee = (erreur − erreurPrec) / dt` mesure la **vitesse de variation** de l'erreur (terme D), puis on mémorise `erreurPrec` pour le pas suivant. La commande est la **somme pondérée** `Kp·erreur + Ki·integrale + Kd·derivee`, enfin `constrain(…, 0, 255)` la ramène dans la plage PWM avant `analogWrite`. Les deux valeurs imprimées (consigne et mesure) servent à régler les gains à l'œil sur le traceur série.

Le `constrain` sur l'intégrale est un **anti-emballement** (*anti-windup*) : sans lui, si le moteur sature (PWM déjà à 255 mais consigne inatteignable), l'intégrale gonfle indéfiniment et la commande met longtemps à « redescendre » quand l'erreur s'inverse. Borner l'intégrale évite ce dépassement. Le couple consigne/mesure imprimé alimente le traceur série pour régler les gains à l'œil.

## Pièges

**Calculer le PID à pas irrégulier.** Les termes I et D dépendent de `dt`. Un calcul appelé tantôt toutes les 5 ms, tantôt toutes les 50 ms, fausse l'intégrale et la dérivée. Cadencer le calcul à intervalle **fixe** ([[arduino-temporisation|`millis()`]] ou [[arduino-timers|timer]]) est non négociable.

**Oublier l'anti-emballement.** Quand l'actionneur sature, l'intégrale continue d'accumuler dans le vide : à l'inversion de l'erreur, la commande reste « collée » trop longtemps. Borner l'intégrale (ou la commande) corrige ce défaut classique.

**Croire que la borne de l'anti-emballement est sans effet en régime établi.** Une intégrale bornée à ±200 ne laisse le terme I porter qu'une commande de `Ki × 200`. Si le point de fonctionnement visé en demande davantage (moteur peu efficace, charge lourde), l'intégrale colle à sa borne et la boucle se stabilise **avec une erreur résiduelle**, sans que rien ne le signale. La borne se dimensionne sur la commande réellement nécessaire, pas sur une valeur ronde.

**Mettre trop de dérivé sur un signal bruité.** Le terme D amplifie le bruit de mesure : un capteur bruité + un `Kd` élevé donnent une commande qui tremble. Filtrer la mesure ou réduire `Kd`.

**Ne pas borner la commande.** La sortie du PID peut dépasser la plage de l'actionneur (PWM 0–255). Sans `constrain`, la valeur est tronquée n'importe comment. Toujours borner explicitement.

**Croire qu'un PID compense un montage défaillant.** Un capteur mal placé, un actionneur sous-dimensionné ou une mécanique qui coince ne se règlent pas avec des gains. Le PID corrige une commande, pas un défaut matériel.

**Régler les trois gains à la fois.** On ne voit plus l'effet de chacun. La démarche est séquentielle : `Kp`, puis `Ki`, puis `Kd`.

## Cas particulier — La bibliothèque `PID_v1`

Plutôt que de coder le calcul à la main, la bibliothèque **PID** (Brett Beauregard, `PID_v1`) fournit un régulateur prêt à l'emploi, qui gère le pas de temps, l'anti-emballement et les bornes. On lui passe des références vers l'entrée, la sortie et la consigne, les gains, puis on appelle `Compute()` régulièrement. Elle calcule en outre la dérivée **sur la mesure** plutôt que sur l'erreur, ce qui évite le « coup de dérivée » (un pic brutal de commande) lorsqu'on change brusquement de consigne, un raffinement que le calcul manuel ci-dessus n'intègre pas. Pratique en production. Le calcul manuel reste préférable **pour comprendre** ce que la bibliothèque fait, avant de la laisser le faire.

## Raccrochage projet

- **Étape 2-3 de la [[preuve-de-concept|phase de preuve de concept]]** — valider l'asservissement d'une fonction (vitesse, position, température) sur un montage isolé, capteur et actionneur réels, avant intégration.
- **[[integration-et-tests|Phase d'intégration et tests]]** — la boucle de régulation tourne à pas constant imposé par un [[arduino-timers|timer]]. Ses gains, réglés en PoC, sont revérifiés sur le système complet et en charge.

Un PID se conçoit autour d'une **mesure fiable** et d'une **cadence régulière** : ces deux prérequis (capteur, base de temps) comptent autant que les gains eux-mêmes.

## Voir aussi

- [[asservissement|Asservissement]] — la notion mère : boucle fermée, consigne/erreur/correcteur, rôle du PID
- [[arduino-temporisation|delay() vs millis()]] — cadencer le calcul à pas constant
- [[arduino-timers|Timers matériels]] — pour un pas de temps précis sur un asservissement exigeant
- [[arduino-sortie-pwm|Piloter une sortie PWM]] — la commande de sortie du régulateur
- [[arduino-moteur-cc|Moteur à courant continu]] — l'actionneur de l'exemple (pont en H)
- [[arduino-capteur-analogique|Lire un capteur analogique]] — la mesure qui ferme la boucle
- [[arduino-programmation-non-bloquante|Programmation non bloquante]] — le PID est une tâche cadencée parmi d'autres
- [[arduino|Arduino]] — hub des tutoriels Arduino
