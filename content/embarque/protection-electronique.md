---
title: Protections électroniques
type: notion
tags:
  - eee
  - notion
  - puissance
prerequis:
  - alimentation-electronique
aa:
  - RA-EEE-C03-2/EEE/3
phases:
  - dossier-technique
draft: false
---

Les **protections électroniques** rendent les fautes courantes — court-circuit, inversion de polarité, surtension, décharge électrostatique — **non destructrices** : la faute coûte un fusible ou une seconde de repli, pas une carte. Elles se conçoivent en partant du principe qu'on **se trompera** au branchement, et se placent en tête d'alimentation, entre le connecteur d'entrée et les rails.

![Étage de protection en tête d'alimentation : le connecteur d'entrée alimente un bloc anti-inversion (diode ou MOSFET-P), puis un fusible, puis un nœud d'où une diode TVS écrête vers la masse, avant la distribution vers les rails. Trois fautes annotées : l'inversion de polarité est bloquée par le premier bloc, le court-circuit en aval est coupé par le fusible, la surtension est écrêtée par la TVS.](/ressources/img/protection-electronique-generique.svg)

## À quoi ça sert ?

Sur la durée d'un projet, les trois fautes finiront par arriver : un fil qui glisse et court-circuite, un connecteur branché à l'envers un soir de fatigue, un pic de tension à la coupure d'un moteur. La question n'est pas *si*, mais *quand* — et ce que coûtera la faute. Protégée, elle coûte un fusible à quelques centimes et cinq minutes ; non protégée, elle coûte un composant, parfois la chaîne complète qu'il alimentait, et les jours de [[matrice-de-risques|délai]] pour recommander. La règle de conception tient en une phrase : prévoir l'erreur, et faire en sorte qu'elle soit un non-événement.

## Comment protéger ?

**Contre le court-circuit : limiter le courant.** Le **fusible** (verre 5×20 mm dans un porte-fusible) coupe définitivement au-delà de son calibre — choisi **au-dessus de la pointe normale** de consommation, jamais en dessous. Le **polyfuse** (fusible PTC réarmable) se réarme seul après refroidissement, pratique pendant la mise au point. Et pour les premiers essais d'un montage neuf, la limitation électronique d'une **alimentation de laboratoire** (mode courant constant) transforme le court-circuit en simple repli — c'est la protection à régler *avant* de brancher.

![Branchement du fusible : en série sur le fil d'alimentation, entre la source et la charge. Un court-circuit en aval fait fondre le fusible, qui coupe le circuit. Calibre choisi au-dessus de la pointe normale ; le polyfuse réarmable se branche au même endroit.](/ressources/img/protection-electronique-fusible.svg)

**Contre l'inversion de polarité : bloquer ou détromper.** Une **diode en série** bloque le branchement à l'envers — simple, mais elle chute ~0,7 V (~0,3 V pour une Schottky) et chauffe sous fort courant. Un **MOSFET-P** monté en anti-inversion fait le même travail avec une chute négligeable : c'est la solution propre au-delà de quelques centaines de mA. La meilleure protection reste toutefois **mécanique** : un connecteur détrompé (XT60, JST polarisé) rend la faute physiquement impossible — à choisir dès la conception.

![Branchement de la diode anti-inversion : en série sur le fil positif, orientée pour laisser passer le courant dans le bon sens. En cas de branchement à l'envers, elle bloque le courant. Au-delà de quelques centaines de milliampères, un MOSFET-P prend la même place sans chute de tension.](/ressources/img/protection-electronique-anti-inversion.svg)

**Contre la surtension : écrêter.** Une **diode TVS** (ou une Zener) montée en parallèle écrête les pics de tension — transitoire de la source, rebond à la coupure d'une charge — vers la masse, avant qu'ils n'atteignent les circuits. Elle se choisit à la tension du rail : transparente en fonctionnement normal, conductrice dès que la tension s'emballe.

![Branchement de la diode TVS : en parallèle entre le rail et la masse, après les protections série. Un pic de tension arrivant sur le rail est écrêté vers la masse avant d'atteindre la charge.](/ressources/img/protection-electronique-tvs.svg)

**Contre la surtension de coupure des inductifs : la diode de roue libre.** Une bobine — relais, moteur CC, électrovanne — s'oppose aux variations de son courant : à l'ouverture du transistor qui la commande, elle génère une surtension de plusieurs dizaines de volts pour maintenir son courant, et c'est le transistor qui encaisse. Une **diode de roue libre** montée en inverse aux bornes de la bobine offre un chemin de recirculation : le courant s'y éteint doucement, le transistor survit. Elle est **obligatoire** sur toute charge inductive commandée — et souvent déjà intégrée aux drivers et modules relais du commerce, à vérifier dans la datasheet.

![Branchement de la diode de roue libre : en antiparallèle aux bornes de la bobine (relais ou moteur), cathode vers le plus. À la coupure du transistor de commande, le courant de la bobine se referme à travers la diode au lieu de détruire le transistor.](/ressources/img/protection-electronique-roue-libre.svg)

**Contre les décharges électrostatiques (ESD) : protéger les lignes exposées — et les mains.** Un corps humain chargé porte plusieurs **kilovolts** : toucher une broche suffit à claquer une entrée CMOS, immédiatement ou en la fragilisant pour plus tard. Côté circuit, des **diodes TVS spécifiques ESD** se placent sur toute ligne accessible de l'extérieur — connecteur USB, bornier, boutons. Côté manipulation, les gestes comptent autant que les composants : toucher une masse avant de saisir une carte, tenir les cartes par les bords, conserver les composants dans leurs sachets antistatiques.

![Branchement de la TVS ESD : en parallèle entre la ligne de données et la masse, au plus près du connecteur exposé. La décharge électrostatique de plusieurs kilovolts est écrêtée vers la masse avant d'atteindre la broche du microcontrôleur.](/ressources/img/protection-electronique-esd.svg)

**Les organes complémentaires.** Trois protections existent souvent *déjà* dans le système, à connaître pour ne pas les doubler inutilement : la **protection thermique** intégrée aux régulateurs modernes (ils se coupent en surchauffe) ; le ***brown-out detector*** du microcontrôleur, qui le maintient en reset quand son alimentation descend sous un seuil au lieu de le laisser dérailler ; et le **BMS** (*battery management system*) des batteries lithium, indispensable contre la surcharge et la décharge profonde. Enfin, quand puissance et commande doivent être franchement séparées, un **optocoupleur** isole galvaniquement les deux mondes — aucun chemin électrique, le signal passe par la lumière.

> [!tip] Astuce
> **Références éprouvées** — fusible verre 5×20 + porte-fusible ; polyfuse PTC réarmable ; Schottky **1N5819** ou **SS34** (anti-inversion légère, roue libre rapide) ; **1N4007** (roue libre des relais) ; MOSFET-P **AO3401** (petits courants) ou **IRF4905** (forts courants) ; TVS série **SMBJ** choisie à la tension du rail ; pour l'ESD des lignes de données, **USBLC6** ou famille **PESD**. Des familles stables et courantes : partir d'elles, vérifier la disponibilité et lire la datasheet avant d'acheter.

## Exemple — le bras 3 axes

Sur le bras du fil rouge, l'étage d'entrée enchaîne les trois parades : un **MOSFET anti-inversion** garde tout le système d'un branchement à l'envers, un **fusible** calibré sur la pointe des trois moteurs pas-à-pas protège le rail de puissance, une **TVS** près du connecteur encaisse les transitoires de la source. Les **roues libres** des moteurs sont déjà intégrées aux drivers A4988 — un cas fréquent : vérifier dans la [[lire-une-datasheet|datasheet]] ce que le composant intègre avant d'ajouter le sien. La logique 5 V, derrière son régulateur, se retrouve doublement abritée.

## Pièges

**Sous-calibrer le fusible.** Un fusible au niveau de la pointe normale saute au premier démarrage de moteur. Le calibre se place au-dessus de la pointe attendue, en dessous du courant qui détruit le câblage.

**Remplacer un fusible qui saute par un plus gros.** Un fusible qui saute signale un défaut. Le surcalibrer supprime la défense, pas le défaut — c'est la prochaine pièce en amont qui jouera le rôle de fusible.

**Compter sur une diode série sous fort courant.** À 2 A, une diode classique dissipe ~1,4 W et vole 0,7 V au rail. Au-delà de quelques centaines de mA, le MOSFET-P s'impose.

**Oublier la roue libre d'une charge inductive.** Relais ou moteur commandé par un transistor sans diode de roue libre : le transistor meurt à la coupure, première ou centième — mais il meurt.

**Saisir une carte par ses broches.** Les kilovolts d'une décharge électrostatique ne se sentent même pas — le composant, lui, les sent. Par les bords, après avoir touché une masse.

**Croire que l'étage d'entrée protège tout.** Il protège l'alimentation, pas les broches : une GPIO en court-circuit ou recevant une tension trop haute se protège localement — résistance série, et compatibilité des [[niveaux-de-tension|niveaux de tension]].

## Voir aussi

- [[alimentation-electronique|Concevoir une alimentation électronique]] — la fiche d'architecture dont cet étage est l'un des gestes
- [[niveaux-de-tension|Niveaux de tension]] — la surtension côté signal (5 V sur une broche 3,3 V), cousine de celle traitée ici
- [[pcb|Concevoir une carte (PCB)]] — intégrer l'étage de protection à la carte
- [[securite-et-qualite|Sécurité & qualité]] — la sécurité des personnes, sujet distinct de la protection du matériel
