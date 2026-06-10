---
title: Mettre un Arduino en veille (deep sleep)
type: tuto
phases:
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
  - deep-sleep
  - interruption
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Mettre un Arduino en **veille** (*deep sleep*) consiste à endormir le microcontrôleur pour réduire sa consommation de plusieurs milliampères à quelques **microampères**, en attendant un événement qui le réveille — une [[interruption|interruption]] sur une broche ou l'échéance d'un [[arduino-watchdog|chien de garde]]. C'est la clé de l'**autonomie sur batterie** : un objet qui dort 99 % du temps et ne se réveille que pour agir tient des mois là où, éveillé en permanence, il tiendrait des jours.

## À quoi ça sert ?

Un microcontrôleur éveillé consomme en continu, même quand il ne fait rien d'utile — il exécute sa boucle à pleine vitesse. Pour un montage alimenté en USB, peu importe ; pour un capteur sur pile (station météo, balise, traceur), c'est l'autonomie qui s'effondre. La [[deep-sleep|veille]] renverse la logique : le système passe l'essentiel de son temps **endormi**, ne consommant presque rien, et ne se réveille que **brièvement** pour mesurer, transmettre, puis se rendort.

Le principe se résume à un cycle : **dormir → se réveiller sur événement → agir vite → se rendormir**. Plus la part de sommeil est grande, plus l'autonomie s'allonge. On met cela en place tard dans le projet, en [[integration-et-tests|phase d'intégration]], comme **optimisation énergétique** d'un montage déjà fonctionnel — pas avant que la fonction marche.

## Procédure pas à pas

Quatre étapes : choisir un mode de veille, couper les périphériques, endormir, et préparer le réveil.

### 1. Choisir un mode de veille

Un AVR offre plusieurs niveaux de sommeil, du plus léger au plus profond. Plus on descend, moins on consomme, mais moins il reste de moyens de se réveiller :

- **Idle** — le processeur s'arrête, mais les périphériques (timers, série) tournent ; réveil facile, gain modeste.
- **Power-down** — presque tout s'éteint ; consommation minimale (quelques µA), mais seuls une **interruption externe** ou le **chien de garde** peuvent réveiller.

Pour l'autonomie, c'est **power-down** que l'on vise. La bibliothèque **LowPower** (à installer via le [[arduino-bibliotheques|gestionnaire de bibliothèques]]) masque les détails de registres et expose ces modes simplement.

### 2. Couper les périphériques inutiles

En sommeil profond, les périphériques encore alimentés gâchent l'économie. On éteint notamment le **convertisseur analogique** ([[adc|ADC]]) et le **détecteur de baisse de tension** (*brown-out detector*, BOD). La bibliothèque LowPower le fait par des arguments :

```cpp
#include <LowPower.h>

// dort 8 s, ADC éteint, brown-out detector éteint
LowPower.powerDown(SLEEP_8S, ADC_OFF, BOD_OFF);
```

### 3. Endormir le microcontrôleur

L'appel à `powerDown()` **bloque volontairement** : c'est la seule attente qu'on s'autorise, puisque l'objectif *est* de ne rien faire. Le programme reprend juste après cette ligne au réveil.

```cpp
void loop() {
  faireLaMesure();                                   // bref réveil utile
  LowPower.powerDown(SLEEP_8S, ADC_OFF, BOD_OFF);    // puis dodo 8 s
}
```

Le chien de garde réveille ici la carte toutes les 8 secondes (durée maximale d'un cycle WDT). Pour dormir plus longtemps, on enchaîne plusieurs cycles dans une boucle.

### 4. Préparer le réveil

Deux sources de réveil depuis le sommeil profond :

- **le [[arduino-watchdog|chien de garde]]** — réveil **périodique** (toutes les N secondes), comme ci-dessus : idéal pour un capteur qui relève une valeur à intervalle régulier ;
- **une [[arduino-interruptions|interruption externe]]** — réveil **sur événement** (un bouton, un détecteur de mouvement) : on attache l'interruption avant d'endormir, et c'est elle qui ranime la carte.

```cpp
// réveil sur événement : dort indéfiniment jusqu'à une interruption sur D2
attachInterrupt(digitalPinToInterrupt(2), reveil, FALLING);
LowPower.powerDown(SLEEP_FOREVER, ADC_OFF, BOD_OFF);
```

Prendre capture ou photo de *un multimètre en série avec l'alimentation du montage, affichant la chute du courant de plusieurs milliampères à quelques microampères quand la carte s'endort*.

## Exemple — Capteur sur batterie réveillé périodiquement

Un capteur de température sur pile relève une mesure toutes les 32 secondes, l'envoie, puis se rendort. Comme un cycle de veille AVR dure au plus 8 secondes, on en enchaîne quatre.

```cpp
#include <LowPower.h>

const int CAPTEUR = A0;

void setup() {
  Serial.begin(9600);
}

void dormir(int secondes) {                  // enchaîne des cycles de 8 s
  for (int i = 0; i < secondes / 8; i++) {
    LowPower.powerDown(SLEEP_8S, ADC_OFF, BOD_OFF);
  }
}

void loop() {
  int mesure = analogRead(CAPTEUR);          // réveil utile : on mesure
  Serial.println(mesure);
  Serial.flush();                            // s'assurer que tout est envoyé avant de dormir

  dormir(32);                                // 4 × 8 s de sommeil profond
}
```

Entre deux mesures, la carte ne consomme presque rien. `Serial.flush()` est important : sans lui, on peut s'endormir avant que l'envoi soit terminé. Sur la durée, le rapport « 32 s de sommeil pour une fraction de seconde d'éveil » transforme l'autonomie — c'est tout l'enjeu d'un objet sur pile.

## Pièges

**La carte Uno consomme trop pour que la veille serve à grand-chose.** Le régulateur de tension et la puce USB d'une Uno tirent plusieurs milliampères **en permanence**, microcontrôleur endormi ou non. Le vrai gain s'obtient sur un **AVR nu** ou une carte conçue basse consommation (sans USB ni régulateur gourmand) ; sur Uno, la mesure est surtout pédagogique.

**Oublier de couper l'ADC et le brown-out.** Laissés actifs, ils maintiennent une consommation qui ruine l'économie. Toujours passer `ADC_OFF` et `BOD_OFF` (ou les couper soi-même) en sommeil profond.

**S'endormir avant d'avoir fini d'émettre.** Le port série et les communications sont asynchrones : `Serial.flush()` (ou l'équivalent) garantit que l'envoi est terminé avant la mise en veille, sinon le message est tronqué.

**Croire que le réveil reprend de zéro.** Au réveil depuis power-down, le programme **continue après la ligne de mise en veille** — il ne redémarre pas comme après un reset. Les variables sont conservées. (À ne pas confondre avec un reset par [[arduino-watchdog|chien de garde]], qui, lui, repart de `setup()`.)

**Câbler une source de réveil sur une broche qui ne réveille pas.** En power-down, seules certaines broches d'interruption peuvent réveiller (D2/D3 sur Uno). Vérifier avant de compter dessus.

## Cas particulier — Réveil par chien de garde en mode interruption

Le [[arduino-watchdog|chien de garde]] a deux usages opposés : en **mode reset**, il redémarre une carte bloquée ; en **mode interruption**, il déclenche une routine sans redémarrer — et c'est ce second mode qui sert de **réveil périodique** pour la veille. La bibliothèque LowPower s'en sert en interne pour ses durées `SLEEP_xS`. Comprendre que le même périphérique sert à la fois de filet de sécurité et de réveil aide à ne pas s'emmêler entre les deux rôles.

## Raccrochage projet

- **[[integration-et-tests|Phase d'intégration et tests]]** — l'optimisation énergétique vient une fois la fonction validée : on mesure la consommation, puis on introduit la veille pour atteindre l'autonomie visée par le cahier des charges.
- **Spécification** — l'autonomie cible (« tenir une saison sur deux piles AA ») est une exigence à poser tôt ; la veille est le moyen de la tenir, à dimensionner avec le budget énergétique du montage (voir [[arduino-alimentation|alimenter la carte]]).

Sur un objet connecté autonome, la veille n'est pas un détail d'optimisation mais l'**architecture même** du programme — d'où l'intérêt de la prévoir dès qu'une contrainte de batterie existe.

## Voir aussi

- [[deep-sleep|Deep sleep]] — la notion : les modes de veille et leur intérêt énergétique
- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-interruptions|Interruptions]] — la source de réveil sur événement
- [[arduino-watchdog|Watchdog]] — la source de réveil périodique, et le filet de sécurité
- [[arduino-alimentation|Alimenter la carte]] — budget énergétique et choix de l'alimentation
- [[esp32|ESP32]] — une famille où la veille profonde est particulièrement soignée (objets connectés)
