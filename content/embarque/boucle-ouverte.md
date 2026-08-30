---
title: Boucle ouverte
type: notion
tags:
  - eee
  - notion
aliases:
  - commande en boucle ouverte
prerequis:
  - schema-bloc-fonctionnel
aa: []
phases: []
draft: false
---

Une commande **en boucle ouverte** applique une action **sans mesurer son résultat** : on envoie la commande, et on fait confiance au montage pour qu'elle produise l'effet attendu. C'est le mode de commande de la grande majorité des systèmes (un chauffage sur minuterie, un stepper qu'on fait tourner d'un nombre de pas, une LED qu'on allume). La question utile n'est donc pas « faut-il un [[asservissement|asservissement]] ? » mais l'inverse : **à quelles conditions peut-on se passer de mesurer ?**

![Chaîne de commande sans retour : la consigne traverse la commande, l'actionneur puis le procédé jusqu'à la grandeur obtenue, tandis qu'une perturbation agit sur le procédé ; le chemin de retour qui ramènerait une mesure est tracé en pointillés et barré, l'écart à la consigne n'étant jamais connu.|640](/ressources/img/boucle-ouverte/chaine-sans-retour.svg)

## À quoi ça sert ?

La boucle ouverte n'est pas un pis-aller : c'est le choix par défaut, et il est souvent le bon. Elle ne demande **aucun capteur**, donc pas de câblage supplémentaire, pas de conversion, pas de filtrage, pas de cadence de calcul à tenir. Elle ne peut pas osciller (le défaut qui guette tout [[asservissement|asservissement]] mal réglé). Et elle se débogue en regardant une seule chaîne, du haut vers le bas, sans se demander si le symptôme vient de la mesure ou de la correction.

Le prix est unique et il est entier : **le système ne sait pas ce qu'il fait**. Tout écart entre l'effet voulu et l'effet obtenu — dû à une charge, à une usure, à une température, à un défaut — reste invisible et non corrigé. Toute la question tient donc dans une évaluation honnête de ces écarts.

## Les quatre conditions

Une commande en boucle ouverte tient si **les quatre** conditions suivantes sont réunies. Il suffit qu'une seule tombe pour que la mesure redevienne nécessaire.

1. **Le comportement est prévisible.** On sait, par le calcul ou par un essai, quelle commande produit quel effet. Un stepper avance d'un angle connu par pas. Une résistance chauffante monte en température de façon reproductible dans un volume donné.
2. **Les perturbations restent bornées.** Elles existent toujours, mais leur effet cumulé doit rester **sous la tolérance** admise. C'est une comparaison chiffrée, pas une impression : si le cahier des charges demande ± 0,5° et que la charge fait perdre 2°, la condition est violée.
3. **L'origine est connue.** Une commande relative (« avance de 30° ») ne vaut que si l'on sait d'où l'on part. D'où la **prise d'origine** au démarrage, contre une butée ou un capteur de fin de course : un unique point de mesure, une fois, qui n'est pas une boucle fermée.
4. **Il n'y a pas de dérive cumulative.** Une erreur qui s'ajoute à la précédente finit toujours par dépasser la tolérance, même minuscule. C'est la condition la plus souvent négligée, et celle qui fait basculer un système en apparence sain (voir *Cas particulier*).

## Exemple — le bras 3 axes, en boucle ouverte et pas tout à fait

Les trois axes du bras sont pilotés par des steppers, **sans asservissement de position** : le programme compte les pas, et l'angle en découle. Les quatre conditions sont examinées une à une : le comportement est prévisible (angle par pas connu), les efforts sont bornés par le dimensionnement, l'origine est prise au démarrage contre les **fins de course**, et la quatrième condition est celle qui inquiète.

C'est pourquoi le bras porte quand même **trois capteurs d'angle** : non pas pour corriger en continu, mais pour **surveiller l'écart** entre la position commandée et la position réelle. Le montage n'est donc ni une boucle ouverte pure ni un asservissement : il **mesure pour détecter**, pas pour corriger.

C'est une configuration très courante en projet, et elle mérite d'être nommée : *commande en boucle ouverte avec surveillance*. Elle coûte le capteur mais pas le réglage, et elle transforme une défaillance silencieuse en défaut signalé.

## Pièges

**Confondre « ça marche à l'essai » et « les conditions sont réunies ».** Un essai réussi à vide, à froid, sur un exemplaire neuf ne dit rien des perturbations en service. Les quatre conditions s'évaluent sur le **pire cas d'usage**, pas sur la démonstration.

**Oublier la prise d'origine.** Un système à commande relative qui démarre en supposant être à zéro se trompe de tout ce qui a bougé depuis l'extinction, y compris à la main, y compris sous son propre poids. L'origine se prend à chaque mise sous tension, jamais une fois pour toutes.

**Prendre la répétabilité pour de la justesse.** Une commande en boucle ouverte peut être remarquablement **répétable** (revenir toujours au même endroit) et pourtant systématiquement **fausse** de quelques degrés. Sans mesure, rien ne distingue les deux, et seul un contrôle externe le révèle (voir [[precision-de-mesure|précision de mesure]]).

**Compenser une dérive par une correction en dur.** Ajouter « +3 pas tous les dix tours » parce qu'on a observé une perte, c'est modéliser un défaut au lieu de le traiter. La correction vaut pour la charge du jour et ment pour toutes les autres.

**Basculer en asservissement au premier écart.** L'inverse est un piège tout aussi réel. Fermer la boucle apporte un capteur, une cadence à tenir, des gains à régler et un risque d'oscillation. Avant d'y aller, vérifier laquelle des quatre conditions a cédé : souvent c'est la mécanique ou le dimensionnement qu'il faut reprendre, pas la commande.

## Cas particulier — le pas perdu

Le stepper est l'exemple canonique de la boucle ouverte, et il en porte aussi le défaut signature. Quand le couple demandé dépasse ce que le moteur peut fournir — accélération trop vive, obstacle, sous-dimensionnement —, le rotor **ne suit pas** l'impulsion : le pas est perdu. Rien ne le signale. Le programme, lui, continue de compter comme si de rien n'était.

L'écart entre la position réelle et la position supposée est alors **définitif et cumulatif** : chaque pas perdu s'ajoute au précédent jusqu'à la prochaine prise d'origine. Un bras qui dévie lentement au fil des cycles n'a pas un problème de programme, il a des pas perdus.

C'est exactement la quatrième condition qui cède, et le remède se choisit dans cet ordre : réduire l'accélération, augmenter la marge de couple, et seulement ensuite ajouter une mesure (surveillance d'écart si l'on veut détecter, [[asservissement|asservissement]] si l'on veut corriger).

## Voir aussi

- [[asservissement|Asservissement]] — la boucle fermée, quand une des quatre conditions cède
- [[schema-bloc-fonctionnel|Schéma bloc fonctionnel]] — le formalisme où la présence ou l'absence du retour se lit d'un coup d'œil
- [[chaine-energie|Chaîne d'énergie]] — la chaîne de commande dont la boucle ouverte est la forme sans retour
- [[choisir-le-materiel|Choisir le matériel]] — l'étape où le choix d'un actionneur commandable en boucle ouverte se décide
- [[precision-de-mesure|Précision, justesse, fidélité]] — répétable n'est pas juste
- [[arduino-moteur-pas-a-pas|Piloter un stepper (Arduino)]] et [[micropython-moteur-pas-a-pas|(MicroPython)]] — la mise en œuvre du cas canonique
