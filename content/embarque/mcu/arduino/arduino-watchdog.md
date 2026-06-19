---
title: Utiliser le chien de garde (watchdog) sur Arduino
type: tuto
phases:
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
  - arduino-programmation-non-bloquante
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Le **chien de garde** (*watchdog*, WDT) est un [[timer|compteur]] indépendant qui **redémarre la carte si le programme cesse de le « nourrir »** dans un délai imparti. C'est un filet de sécurité contre les blocages : un programme planté — boucle infinie, attente sans fin, capteur figé — se relance tout seul au lieu de rester muet. Sur Arduino, il se manie simplement via `avr/wdt.h` : on l'arme, on le réinitialise régulièrement, et tout arrêt anormal de ce rythme provoque un reset.

## À quoi ça sert ?

Un système embarqué doit parfois fonctionner **sans personne pour appuyer sur reset** : une station isolée, un objet enfoui, une machine en marche. Si son programme se bloque — une bibliothèque qui attend une réponse qui ne vient pas, un capteur qui fige le code, une boucle qui ne sort jamais — il reste inerte jusqu'à coupure manuelle. Le chien de garde apporte une **robustesse** : tant que le programme tourne normalement, il « caresse » le chien à intervalle régulier ; s'il se bloque, le chien n'est plus nourri, et au bout de son délai il **réinitialise** la carte, qui repart de zéro.

C'est un mécanisme de **dernier recours**, à introduire en [[integration-et-tests|phase d'intégration]] pour fiabiliser un système déjà fonctionnel — pas pour masquer des bugs qu'on devrait corriger.

## Procédure pas à pas

Quatre étapes : armer le chien, le nourrir, choisir le délai, et le désarmer proprement au besoin.

### 1. Armer le chien de garde

`wdt_enable()` démarre le watchdog avec un délai. Au-delà de ce délai sans réinitialisation, la carte redémarre.

```cpp
#include <avr/wdt.h>

void setup() {
  wdt_enable(WDTO_2S);   // redémarre si pas nourri pendant 2 s
}
```

(En interne, cette fonction configure un registre dédié ; les opérations bit-à-bit correspondantes sont décrites dans [[manipulation-de-bits|la manipulation de bits]], mais `avr/wdt.h` les masque entièrement.)

`avr/wdt.h` est propre à l'**AVR** (Uno R3, Nano, Mega). Sur **Uno R4** (Renesas), le watchdog s'arme via la bibliothèque `WDT` (`WDT.begin()`, `WDT.refresh()`) ; sur **ESP32**, c'est le *task watchdog* (`esp_task_wdt`). Le principe — nourrir un compteur sous peine de reset — reste partout le même ; seule l'API change (voir [[esp32|ESP32]]).

### 2. Nourrir le chien régulièrement

`wdt_reset()` remet le compteur à zéro : c'est « nourrir » le chien. On l'appelle à chaque tour de la boucle principale, à un endroit que le programme **ne peut atteindre que s'il fonctionne normalement**.

```cpp
void loop() {
  // ... le travail normal du programme ...
  wdt_reset();   // « je suis vivant » : on repousse l'échéance
}
```

Tant que `loop()` boucle, le chien est nourri et tout va bien. Si une partie du code se bloque et empêche d'atteindre `wdt_reset()`, l'échéance tombe et la carte redémarre.

![Chronogramme du chien de garde : tant que la boucle appelle wdt_reset() à intervalle régulier, la marge avant reset est rechargée au délai armé et ne descend jamais à zéro ; lorsqu'un blocage interrompt les wdt_reset(), la marge décroît jusqu'à zéro et la carte redémarre (RESET puis retour à setup()).|680](/ressources/img/arduino-watchdog/chronogramme-watchdog.svg)

### 3. Choisir le délai

Le délai (`WDTO_15MS` jusqu'à `WDTO_8S`) doit être **plus long que le pire temps de boucle normal**, sinon le chien redémarre une carte qui fonctionnait. Mais pas trop long, sinon le système reste bloqué inutilement avant de se relancer. On le règle au-dessus de la durée maximale d'un tour de boucle légitime, avec une marge.

### 4. Désarmer le chien quand il le faut

`wdt_disable()` arrête le watchdog — utile au tout début de `setup()` (voir le piège de la boucle de reboot), ou avant une opération volontairement longue qu'on ne peut pas découper.

```cpp
void setup() {
  wdt_disable();         // sécurité : on neutralise le chien au démarrage
  // ... initialisations ...
  wdt_enable(WDTO_2S);   // puis on l'arme une fois prêt
}
```

## Exemple — Fiabiliser un montage qui peut se bloquer

Un montage interroge un capteur sur un bus qui peut, rarement, ne jamais répondre — figeant le programme. Le chien de garde garantit qu'en cas de blocage, la carte redémarre au lieu de rester muette.

```cpp
#include <avr/wdt.h>

void setup() {
  wdt_disable();              // on neutralise d'abord (sécurité reboot)
  Serial.begin(9600);
  Serial.println(F("Demarrage"));
  wdt_enable(WDTO_4S);        // chien armé : reset si bloqué > 4 s
}

void loop() {
  int mesure = lireCapteur(); // <- si ce capteur fige, plus de wdt_reset()
  Serial.println(mesure);

  wdt_reset();                // nourrir le chien à chaque tour sain
  delay(500);                 // (la boucle reste bien en deçà des 4 s)
}
```

En fonctionnement normal, `loop()` nourrit le chien toutes les ~500 ms, bien sous les 4 s : rien ne se passe. Mais si `lireCapteur()` se bloque, `wdt_reset()` n'est plus atteint, et au bout de 4 s la carte redémarre — repassant par `setup()`, qui réaffiche « Demarrage ». Le système se **rétablit seul**, sans intervention. Noter que le `delay(500)` est ici inoffensif car bien inférieur au délai du chien ; dans un programme [[arduino-programmation-non-bloquante|non bloquant]], on nourrirait le chien dans la boucle coopérative.

## Pièges

**La boucle de reboot infinie.** Sur certains anciens *bootloaders* Arduino, après un reset par watchdog, le chien **reste actif avec un délai très court** et le bootloader ne le désarme pas : la carte se réinitialise avant même d'avoir pu re-nourrir le chien — redémarrage en boucle, inutilisable. La parade est d'appeler `wdt_disable()` **tout au début de `setup()`**. Les cartes récentes (bootloader Optiboot) ne souffrent plus de ce défaut, mais le réflexe reste sain.

**Un délai plus court que la boucle normale.** Si le pire temps de boucle dépasse le délai du chien, celui-ci redémarre une carte qui fonctionnait parfaitement. Toujours régler le délai **au-dessus** de la durée maximale légitime d'un tour, avec marge.

**Nourrir le chien trop souvent, au mauvais endroit.** Appeler `wdt_reset()` dans une boucle interne ou un endroit toujours atteint **même quand le programme déraille** vide le mécanisme de son sens : le chien ne détecte plus rien. Il faut le nourrir là où seul un fonctionnement sain mène.

**Utiliser le watchdog pour masquer un bug.** Redémarrer périodiquement pour « contourner » une fuite mémoire ou un blocage récurrent traite le symptôme, pas la cause. Le chien est un filet de sécurité, pas un correctif.

**Oublier que `delay()` long et watchdog s'opposent.** Une attente plus longue que le délai du chien le déclenche. Raison de plus pour structurer le code en [[arduino-programmation-non-bloquante|tâches non bloquantes]], où aucune fonction ne monopolise la boucle.

## Cas particulier — Mode interruption et réveil de veille

Le watchdog a un second mode : au lieu de **redémarrer**, il peut déclencher une **interruption** à l'échéance. Ce mode sert notamment de **réveil périodique** pour la [[arduino-deep-sleep|mise en veille]] — c'est lui qui ranime un capteur sur batterie toutes les N secondes. Le même périphérique remplit donc deux rôles opposés : **filet de sécurité** (mode reset) et **réveil** (mode interruption). Garder cette distinction à l'esprit évite de confondre un redémarrage subi et un réveil voulu.

## Raccrochage projet

- **[[integration-et-tests|Phase d'intégration et tests]]** — une fois le système fonctionnel, le chien de garde le fiabilise contre les blocages imprévus, surtout s'il doit tourner longtemps sans surveillance.
- **Spécification** — une exigence de **disponibilité** (« le système doit se rétablir seul après un blocage ») se traduit concrètement par un watchdog ; à prévoir si le cahier des charges l'impose.

Le chien de garde est la dernière ligne de défense d'un firmware robuste : il ne remplace pas un code propre, mais il évite qu'un blocage imprévu ne fige durablement un système livré.

## Voir aussi

- [[arduino-deep-sleep|Deep sleep]] — où le watchdog sert de réveil périodique (mode interruption)
- [[arduino-programmation-non-bloquante|Programmation non bloquante]] — structurer le code pour nourrir le chien sans blocage
- [[timer|Timer]] — le chien de garde est un compteur dédié
- [[interruption|Interruption]] — le mode interruption du watchdog
- [[esp32|ESP32]] — le watchdog y passe par le task watchdog (`esp_task_wdt`), API distincte de `avr/wdt.h`
- [[firmware|Firmware]] — la robustesse du code embarqué (transverse)
- [[arduino|Arduino]] — hub des tutoriels Arduino
