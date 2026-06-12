---
title: Deep sleep
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
aa: []
phases: []
draft: false
---

Le **deep sleep** (sommeil profond) est un **mode de basse consommation** d'un [[microcontroleur|microcontrôleur]] : le cœur, les horloges rapides et la plupart des périphériques sont coupés, ne laissant qu'une consommation résiduelle de quelques microampères, jusqu'à un **réveil** déclenché par une minuterie ou un événement extérieur — qui est, mécaniquement, une [[interruption|interruption]].

![Profil de consommation en créneaux : de brefs pics actifs de quelques dizaines de milliampères séparés par de longs planchers de quelques microampères en deep sleep ; la moyenne, en pointillé ambre près du bas, détermine l'autonomie.](/ressources/img/deep-sleep-profil.svg)

## À quoi ça sert ?

C'est le levier décisif pour un objet **sur pile ou batterie** — et c'est un levier énorme, parce que trois ordres de grandeur séparent les deux états : un ESP32 actif en Wi-Fi tire **80 à 240 mA**, le même en deep sleep descend autour de **10 µA**. Un rapport de l'ordre de 10 000. Alterner de brèves phases actives et de longues phases de sommeil ne « grappille » donc pas de l'autonomie : il la **change de catégorie** — de l'ordre du jour à l'ordre de l'année sur la même pile (calcul dans l'exemple plus bas).

C'est ce qui explique son association naturelle avec les liaisons sobres comme le [[ble|BLE]] ou le [[lora|LoRa]] : l'objet dort, se réveille pour mesurer et transmettre, et se rendort. Le **budget courant** de l'objet se chiffre alors sur la consommation *moyenne*, pas sur la consommation active *(→ notion [[alimentation-electronique]])*.

## Comment ça marche ?

Quatre idées structurent le mécanisme.

1. **Une gradation de modes, pas un interrupteur.** Entre « tout allumé » et « tout éteint », les microcontrôleurs offrent des paliers : la **veille légère** (*light sleep* — le cœur s'arrête mais l'état est conservé, réveil quasi instantané), le **deep sleep** (presque tout est coupé, consommation en µA), et parfois un cran ultime (*hibernation*) qui coupe encore davantage. Plus le mode est profond, plus la consommation baisse — et plus le réveil coûte cher en temps et en état perdu.
2. **Un petit domaine reste allumé.** En deep sleep, tout n'est pas mort : un îlot ultra-sobre — souvent appelé **domaine RTC** — garde une horloge lente, le contrôleur de réveil et, sur certaines familles, quelques kilooctets de **mémoire RTC** qui survivent au sommeil. C'est ce veilleur de nuit qui consomme les fameux microamps, et c'est lui qui rallumera le reste.
3. **Les sources de réveil s'arment avant de dormir.** Deux familles principales : la **minuterie** (l'horloge lente du domaine RTC arrive à échéance — le cas du capteur périodique, cousin du [[timer|timer]]) et l'**événement extérieur** (un niveau ou un front sur une broche prévue à cet effet — bouton, détecteur ; certaines familles ajoutent des réveils tactiles ou par coprocesseur). Le réveil **est une interruption** : on configure sa source exactement comme on arme une [[interruption|interruption]], puis on appelle la mise en sommeil.
4. **S'endormir est un acte explicite.** Le programme prépare l'état à sauvegarder, arme la source de réveil, puis appelle la fonction de mise en sommeil — et l'exécution s'arrête là.

## Le réveil n'est pas une reprise — c'est (souvent) un redémarrage

C'est la surprise du premier essai, et elle dépend de la famille. Sur **ESP32**, sortir du deep sleep est un **reset** : le programme repart **du début** (la fonction d'initialisation s'exécute à nouveau), la RAM est perdue, et seules les données placées explicitement en **mémoire RTC** survivent ; une fonction dédiée permet de savoir *pourquoi* on s'est réveillé (minuterie ? broche ?). Sur **AVR** (Arduino classique), au contraire, le réveil **reprend l'exécution** à l'instruction qui suit la mise en sommeil, état intact.

La conséquence est architecturale : un programme à deep sleep « façon ESP32 » ne s'écrit pas comme une boucle qui s'endort de temps en temps, mais comme un **cycle réveil → identifier la cause → agir → se rendormir**, où l'état persistant vit en mémoire RTC ou en [[memoire|stockage]] — une structuration de [[firmware|firmware]] à part entière.

## Exemple — La sonde sur pile

Une sonde mesure et transmet **2 secondes toutes les 10 minutes** (consommation active ~80 mA), et dort le reste du temps (~10 µA). Sa consommation moyenne vaut :

(80 mA × 2 s + 0,01 mA × 598 s) ÷ 600 s ≈ **0,28 mA**

Sur une pile de 2 000 mAh : 2 000 ÷ 0,28 ≈ 7 200 heures, soit **environ 10 mois**. La même sonde **sans veille** viderait la pile en 2 000 ÷ 80 = 25 heures — **un jour**. Même cycle, même matériel : seul le sommeil sépare l'objet jetable de l'objet autonome. Et le calcul montre où agir : raccourcir la phase active (regrouper les envois, éviter une reconnexion Wi-Fi à chaque réveil) pèse ici plus lourd que gagner quelques µA de plancher.

## Pièges

**Mesurer la puce, déployer la carte.** Les ~10 µA sont ceux de la *puce* ; une **carte de développement** ajoute LED d'alimentation, régulateur linéaire et interface USB qui consomment en permanence — le plancher réel remonte vers le mA, et l'autonomie s'effondre (avec un plancher de 1 mA, la sonde de l'exemple retombe à ~2 mois). La vraie basse consommation exige une carte conçue pour, ou une puce nue.

**Oublier les périphériques externes.** Le microcontrôleur dort, mais le capteur, le module radio ou le diviseur de mesure branchés sur le rail continuent de consommer. Il faut **couper leur alimentation** aussi — broche de commande, transistor — sinon le plancher est dicté par eux.

**Croire que le programme reprend où il était.** Selon la famille, le réveil est un redémarrage (voir plus haut) : tout état non sauvegardé en mémoire RTC est perdu, et le code écrit comme une simple boucle se comporte étrangement.

**Sous-estimer le coût du réveil.** Se réveiller n'est pas gratuit : démarrage, stabilisation, et surtout **reconnexion réseau** (un Wi-Fi se renégocie en secondes, à pleine puissance). Des réveils trop fréquents peuvent consommer plus que de rester éveillé — espacer les cycles et regrouper les transmissions.

**Se déboguer dans le noir.** Pendant le sommeil, la console série est muette et la carte peut sembler morte ; un cycle de sommeil très court peut même gêner le re-téléversement. En développement : tracer au réveil, garder un cycle long, et prévoir un moyen de forcer la carte éveillée.

## Voir aussi

- [[interruption|Interruption]] — le mécanisme du réveil (la source s'arme comme une interruption)
- [[timer|Timer]] — le réveil à échéance, cousin du débordement de timer
- [[esp32-deep-sleep|Deep sleep sur ESP32]] — la mise en œuvre concrète (mémoire RTC, causes de réveil)
- [[arduino-deep-sleep|Deep sleep sur Arduino]] — les modes de veille AVR en pratique
- [[micropython-deep-sleep|Deep sleep en MicroPython]] — la même mécanique côté MicroPython
- [[alimentation-electronique|Alimentation électronique]] — le budget courant que le sommeil transforme
- [[ble|BLE]] — liaison basse consommation, complément naturel du deep sleep
- [[lora|LoRa]] — capteurs distants sur pile, mêmes contraintes d'autonomie
- [[microcontroleur|Microcontrôleur]] — le circuit qui propose les modes de veille
