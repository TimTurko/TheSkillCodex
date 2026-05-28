---
title: Niveaux de tension
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
aa:
  - RA-EEE-C03-2/EEE/4
  - RA-EEE-C03-2/EEE/1
phases:
  - preuve-de-concept
  - dossier-technique
draft: false
---

Les **niveaux de tension** logiques sont les plages de tension par lesquelles un composant numérique représente un « 0 » et un « 1 ». Deux composants ne peuvent dialoguer que si le niveau émis par l'un tombe dans la plage attendue par l'autre — et c'est loin d'être automatique dès qu'on mélange du **3,3 V** et du **5 V**, le cas le plus courant en projet. Vérifier la compatibilité des niveaux est l'un des tout premiers réflexes de câblage : s'en passer, c'est risquer un signal mal lu, ou pire, une entrée détruite.

![Deux scénarios sur une échelle de 0 à 5 V. À gauche, un « 1 » à 3,3 V envoyé vers une entrée 5 V reste sous le seuil VIH (≈ 3,5 V) et tombe dans la zone indéterminée : il n'est pas lu de façon fiable. À droite, un « 1 » à 5 V envoyé vers une entrée 3,3 V dépasse la tension maximale admissible (≈ 3,6 V) et risque de détruire l'entrée.](/ressources/img/niveaux-de-tension-generique.svg)

## À quoi ça sert ?

Un signal numérique n'est jamais exactement 0 V ou la tension d'alimentation : chaque composant garantit des **plages**, et c'est leur recouvrement qui décide si deux circuits se comprennent.

Côté sortie, le composant garantit deux seuils : **VOL**, la tension maximale qu'il produit pour un « 0 », et **VOH**, la tension minimale qu'il produit pour un « 1 ». Côté entrée, il en attend deux autres : **VIL**, sous laquelle il lit un « 0 », et **VIH**, au-dessus de laquelle il lit un « 1 ». Entre VIL et VIH s'étend une **zone indéterminée**, où le niveau lu n'est pas garanti.

Deux composants sont donc compatibles si le « 1 » émis dépasse le VIH attendu, si le « 0 » émis reste sous le VIL attendu, et si la tension émise ne dépasse pas la **tension maximale admissible** de l'entrée réceptrice. Le mélange 3,3 V / 5 V met justement ces conditions en défaut, de deux façons opposées :

- **un « 1 » à 3,3 V peut ne pas être lu par une entrée 5 V** : certaines entrées 5 V attendent un VIH proche de 3,5 V, et 3,3 V tombe alors dans la zone indéterminée — la communication échoue silencieusement ;
- **un « 1 » à 5 V peut détruire une entrée 3,3 V** : la plupart des broches 3,3 V ne tolèrent qu'environ 3,6 V, et 5 V les met en surtension, ce qui peut griller la broche.

Le premier défaut fait perdre des heures de débogage ; le second coûte un composant. Savoir lire ces seuils, puis les adapter au besoin, évite les deux.

## Comment adapter un niveau ?

L'adaptation se range en trois cas, par ordre de préférence — la meilleure est souvent celle qu'on n'a pas à faire.

**Vérifier d'abord : souvent, rien à adapter.** Avant d'ajouter un composant, lire les seuils dans la [[lire-une-datasheet|datasheet]] des deux côtés. Beaucoup d'entrées 5 V sont de type TTL (VIH ≈ 2 V) et lisent sans peine un « 1 » à 3,3 V ; beaucoup de broches 3,3 V sont déclarées tolérantes 5 V. Quand les plages se recouvrent, on relie directement, sans composant. Mieux encore : **choisir des composants de même tension de fonctionnement** dès le départ supprime le problème — un critère à intégrer au choix des capteurs et des actionneurs.

**Abaisser une tension : le diviseur de tension.** Pour ramener un signal de 5 V vers 3,3 V, deux résistances en **diviseur de tension** suffisent : on prélève la tension au point milieu, dans un rapport fixé par les valeurs choisies. C'est la solution la moins chère, montable à la main, avec deux limites à connaître : elle ne fonctionne que dans **un seul sens** (abaisser, jamais élever) et elle **ralentit les fronts** du signal — réservée donc aux signaux lents.

**Adapter dans les deux sens : le convertisseur de niveau.** Pour **élever** un niveau (3,3 V vers 5 V), pour un échange **bidirectionnel**, ou pour un **bus rapide**, on emploie un **convertisseur de niveau** (*level shifter*) : un composant dédié, avec un côté basse tension et un côté haute tension, qui translate les niveaux dans les deux sens et sur plusieurs lignes à la fois. C'est la solution propre pour des bus comme l'[[i2c|I2C]] ou le SPI, où le diviseur de tension ne convient pas.

![Trois parades : la liaison directe quand les niveaux sont déjà compatibles ; le diviseur de tension à deux résistances pour abaisser un signal 5 V vers 3,3 V dans un seul sens ; le convertisseur de niveau, composant dédié qui adapte dans les deux sens et convient aux bus rapides.](/ressources/img/niveaux-de-tension-adaptation.svg)

## Exemple — ESP32 et un capteur 5 V

L'**ESP32** est un [[microcontroleur|microcontrôleur]] **3,3 V** : toutes ses broches raisonnent en 3,3 V. Or une grande partie des capteurs et modules courants sont conçus pour du 5 V — d'où un besoin d'adaptation quasi systématique. Prenons un capteur à ultrasons **HC-SR04**, alimenté en 5 V, relié à un ESP32. Le dialogue se fait dans les deux sens, et chacun pose un problème différent :

- l'ESP32 **commande** le capteur (broche *Trig*) : il envoie un « 1 » à 3,3 V vers une entrée 5 V. Si cette entrée est de type TTL, 3,3 V dépasse son VIH et passe ; sinon, il faut élever le niveau ;
- le capteur **répond** à l'ESP32 (broche *Echo*) : il renvoie un « 1 » à **5 V** vers une entrée 3,3 V. Là, 5 V dépasse la tension admissible de la broche — relier directement, c'est risquer de la griller. Il faut **abaisser** ce signal, par un diviseur de tension (le signal est lent) ou un convertisseur.

La règle générale se lit dans cet exemple : **du 3,3 V vers du 5 V, on risque surtout de ne pas être lu ; du 5 V vers du 3,3 V, on risque de détruire**. Le sens du signal détermine le danger, donc la parade à mettre.

## Pièges

**Croire qu'un « 0 » vaut 0 V et un « 1 » la tension d'alimentation.** Ce sont des plages garanties (VOL/VOH côté sortie, VIL/VIH côté entrée), pas des valeurs exactes ; entre les deux s'étend une zone où rien n'est garanti.

**Brancher du 5 V sur une entrée 3,3 V « juste pour voir ».** La plupart des entrées 3,3 V ne tolèrent pas 5 V : l'essai peut détruire la broche, parfois la puce entière. La tension maximale se vérifie sur la [[lire-une-datasheet|datasheet]] avant de brancher, pas après.

**Oublier la masse commune.** Comparer des niveaux n'a de sens que si les deux composants partagent la même référence de masse (GND). Sans masse commune, les tensions mesurées ne veulent plus rien dire.

**Mettre un diviseur de tension sur un signal rapide.** Le diviseur ralentit les fronts du signal : il convient à une liaison lente, mais déforme un bus rapide comme le SPI ou l'I2C, qui appelle un convertisseur dédié.

**Adapter dans le mauvais sens.** Un diviseur abaisse (5 V → 3,3 V) ; il n'élève jamais 3,3 V vers 5 V. Pour élever, ou pour un échange bidirectionnel, seul un convertisseur convient.

**Supposer la compatibilité sans vérifier.** Deux composants « 5 V » ne partagent pas forcément les mêmes seuils : une entrée TTL et une entrée CMOS diffèrent nettement. Les valeurs se lisent, elles ne se devinent pas.

## Cas particulier — Open-drain et I2C

Les bus en **collecteur ou drain ouvert** — dont l'[[i2c|I2C]] est le cas le plus courant — adaptent les niveaux autrement. Sur ces lignes, aucun composant ne **pousse** activement l'état haut : chacun ne fait que **tirer la ligne vers le bas**, et une résistance de tirage (*pull-up*) ramène la ligne à l'état haut au repos. La tension de la ligne est alors fixée par celle vers laquelle pointe le pull-up, pas par les composants eux-mêmes.

Conséquence pratique : un composant 3,3 V et un composant 5 V peuvent parfois cohabiter sur un même bus I2C tiré à 3,3 V, si le composant 5 V accepte 3,3 V comme niveau haut. Mais dès que les tensions divergent vraiment, la solution propre reste un **convertisseur de niveau bidirectionnel** prévu pour l'open-drain, qui gère les deux lignes (SDA et SCL) à la fois.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — la tension de fonctionnement (3,3 V ou 5 V) est l'un des critères de choix d'un contrôleur
- [[gpio|GPIO]] — configuration des broches (entrée/sortie, tirage) ; complément direct du niveau de tension
- [[lire-une-datasheet|Lire une datasheet]] — où lire les seuils VIH / VIL / VOH / VOL et la tension maximale admissible
- [[i2c|I2C]] — bus en drain ouvert, cas particulier d'adaptation de niveau
- [[bus-de-communication|Bus de communication]] — UART / I2C / SPI, là où la compatibilité des niveaux se pose le plus souvent
