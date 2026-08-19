---
title: Asservissement
type: notion
tags:
  - eee
  - notion
prerequis:
  - schema-bloc-fonctionnel
aa: []
phases: []
draft: false
---

Un **asservissement** est une commande **en boucle fermée** : au lieu de piloter un système « en aveugle », on **mesure** la grandeur à régler, on la **compare** à la **consigne** (la valeur visée) et on **corrige** la commande en fonction de l'**erreur** (consigne − mesure) — sans cesse. C'est ce retour permanent de la mesure qui sépare l'asservissement de la commande en **boucle ouverte**, et qui lui permet de tenir une consigne **malgré les perturbations**.

![Schéma général d'un asservissement en boucle fermée : la consigne entre dans un comparateur qui calcule l'erreur (consigne − mesure) ; le correcteur en déduit une commande, appliquée par l'actionneur au procédé ; un capteur mesure la grandeur réglée et la renvoie au comparateur, tandis qu'une perturbation agit sur le procédé.](/ressources/img/asservissement/boucle-fermee.svg)

## À quoi ça sert ?

En **[[boucle-ouverte|boucle ouverte]]**, on applique une commande sans vérifier le résultat : mettre une tension fixe sur un moteur, c'est espérer une vitesse — mais en charge, il ralentit, et rien ne le rattrape. Dès qu'on vise une grandeur **précise** face à des aléas (charge, température, frottements, vieillissement), la boucle ouverte ne suffit plus.

La boucle fermée renverse la logique : elle **observe** en continu l'écart à la consigne et agit pour le réduire. C'est ce qui permet de réguler une vitesse, une position, une température ou un niveau avec une précision qui ne dépend plus de la qualité du modèle, mais de la qualité de la **mesure** et de la **correction**. Le prix à payer : il faut un capteur, une cadence de calcul régulière, et un réglage soigné — un asservissement mal réglé **oscille** ou diverge là où la boucle ouverte se contentait d'être imprécise.

## Comment ça marche ?

Quatre éléments structurent la boucle.

1. **Le comparateur et l'erreur.** Un sommateur calcule en permanence l'**erreur** = consigne − mesure. C'est le signal moteur de tout l'asservissement : tant qu'elle n'est pas nulle, le système a une raison d'agir.
2. **Le correcteur.** Il transforme l'erreur en **commande**. Sa loi peut être simple (tout-ou-rien d'un thermostat) ou continue ; la plus répandue est le **PID**, qui combine trois réactions à l'erreur (voir plus bas).
3. **L'actionneur et le procédé.** La commande passe par un actionneur (un moteur via une [[pwm|PWM]], une résistance chauffante…) qui agit sur le **procédé** — le système physique dont on règle la grandeur. C'est aussi là que les **perturbations** s'invitent.
4. **Le retour par le capteur.** Un **capteur** mesure la grandeur réglée et **ferme la boucle** en la ramenant au comparateur. Tout l'asservissement est suspendu à cette mesure : un capteur bruité, lent ou mal placé plafonne la qualité de la régulation, quels que soient les réglages.

À cela s'ajoute une contrainte de mise en œuvre numérique : le calcul se répète à **pas de temps constant** (→ [[timer|timer]]), faute de quoi les termes qui dépendent du temps perdent leur sens.

## Le correcteur PID

Le PID (Proportionnel-Intégral-Dérivé) somme trois termes, chacun réagissant différemment à l'erreur :

- **P** — proportionnel à l'erreur courante : réactif, mais laisse souvent une **erreur résiduelle** ;
- **I** — proportionnel à l'erreur **accumulée** : annule l'erreur résiduelle, au risque de **s'emballer** si l'actionneur sature ;
- **D** — proportionnel à la **vitesse de variation** de l'erreur : amortit et anticipe les dépassements, mais **amplifie le bruit**.

Régler un PID, c'est arbitrer entre **rapidité**, **stabilité** et **précision** : trop de gain et le système oscille ; pas assez et il répond mollement. Le réglage est empirique et séquentiel (P, puis I, puis D), guidé par l'observation de la réponse dans le temps.

## Pièges

**Asservir alors qu'une boucle ouverte suffirait.** Si la grandeur est stable et les perturbations négligeables, une commande directe (bien calibrée) est plus simple et plus robuste. La boucle fermée a un coût — capteur, réglage, risque d'instabilité — qu'il faut justifier.

**Monter les gains jusqu'à l'instabilité.** Un gain trop fort rend la boucle **oscillante**, voire divergente : le système poursuit la consigne en la dépassant de plus en plus. La stabilité prime sur la rapidité.

**Négliger le capteur.** La régulation ne peut pas être meilleure que sa mesure : un capteur bruité fait trembler la commande, un capteur lent introduit un retard déstabilisant. Le maillon faible d'un asservissement est souvent le retour, pas le correcteur. Le [[filtrage|filtrage]] de la mesure atténue le bruit, mais ajoute un retard qui peut à son tour déstabiliser la boucle.

**Oublier la saturation de l'actionneur.** Quand l'actionneur est « à fond » mais que la consigne reste inatteignable, le terme intégral continue d'accumuler dans le vide (*emballement*) : à l'inversion de l'erreur, la commande met longtemps à redescendre. On le corrige en **bornant l'intégrale** (anti-emballement).

**Croire qu'un bon réglage rattrape un mauvais montage.** Des gains ne compensent ni un actionneur sous-dimensionné, ni une mécanique qui coince, ni un capteur mal placé. L'asservissement règle une commande, pas un défaut matériel.

## Voir aussi

- [[boucle-ouverte|Boucle ouverte]] — la commande sans mesure, et les quatre conditions qui la rendent légitime
- [[arduino-pid|Réguler avec un PID sur Arduino]] — la mise en œuvre concrète du correcteur PID
- [[micropython-pid|Réguler avec un PID en MicroPython]] — la même boucle, écrite en MicroPython
- [[schema-bloc-fonctionnel|Schéma bloc fonctionnel]] — le formalisme des blocs et flux dont la boucle fermée est un cas
- [[pwm|PWM]] — la commande typique d'un actionneur depuis un microcontrôleur
- [[arduino-moteur-cc|Moteur à courant continu sur Arduino]] — l'actionneur asservi le plus courant en projet
- [[micropython-moteur-cc|Moteur à courant continu en MicroPython]] — le même actionneur, piloté depuis MicroPython
- [[arduino-capteur-analogique|Lire un capteur analogique sur Arduino]] — le retour qui ferme la boucle
- [[micropython-capteur-analogique|Lire un capteur analogique en MicroPython]] — la même lecture, côté MicroPython
- [[filtrage|Filtrer des mesures]] — nettoyer le retour sans lui ajouter un retard qui déstabilise
- [[timer|Timer]] — la base de temps qui cadence le calcul à pas constant
