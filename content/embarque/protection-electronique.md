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

Les **protections électroniques** rendent les fautes courantes — court-circuit, inversion de polarité, surtension — **non destructrices** : la faute coûte un fusible ou une seconde de repli, pas une carte. Elles se conçoivent en partant du principe qu'on **se trompera** au branchement, et se placent en tête d'alimentation, entre le connecteur d'entrée et les rails.

![Étage de protection en tête d'alimentation : le connecteur d'entrée alimente un bloc anti-inversion (diode ou MOSFET-P), puis un fusible, puis un nœud d'où une diode TVS écrête vers la masse, avant la distribution vers les rails. Trois fautes annotées : l'inversion de polarité est bloquée par le premier bloc, le court-circuit en aval est coupé par le fusible, la surtension est écrêtée par la TVS.](/ressources/img/protection-electronique-generique.svg)

## À quoi ça sert ?

Sur la durée d'un projet, les trois fautes finiront par arriver : un fil qui glisse et court-circuite, un connecteur branché à l'envers un soir de fatigue, un pic de tension à la coupure d'un moteur. La question n'est pas *si*, mais *quand* — et ce que coûtera la faute. Protégée, elle coûte un fusible à quelques centimes et cinq minutes ; non protégée, elle coûte un composant, parfois la chaîne complète qu'il alimentait, et les jours de [[matrice-de-risques|délai]] pour recommander. La règle de conception tient en une phrase : prévoir l'erreur, et faire en sorte qu'elle soit un non-événement.

## Comment protéger ?

**Contre le court-circuit : limiter le courant.** Le **fusible** (verre 5×20 mm dans un porte-fusible) coupe définitivement au-delà de son calibre — choisi **au-dessus de la pointe normale** de consommation, jamais en dessous. Le **polyfuse** (fusible PTC réarmable) se réarme seul après refroidissement, pratique pendant la mise au point. Et pour les premiers essais d'un montage neuf, la limitation électronique d'une **alimentation de laboratoire** (mode courant constant) transforme le court-circuit en simple repli — c'est la protection à régler *avant* de brancher.

**Contre l'inversion de polarité : bloquer ou détromper.** Une **diode en série** bloque le branchement à l'envers — simple, mais elle chute ~0,7 V (~0,3 V pour une Schottky) et chauffe sous fort courant. Un **MOSFET-P** monté en anti-inversion fait le même travail avec une chute négligeable : c'est la solution propre au-delà de quelques centaines de mA. La meilleure protection reste toutefois **mécanique** : un connecteur détrompé (XT60, JST polarisé) rend la faute physiquement impossible — à choisir dès la conception.

**Contre la surtension : écrêter.** Une **diode TVS** (ou une Zener) montée en parallèle écrête les pics — décharge électrostatique, transitoire de la source — vers la masse, avant qu'ils n'atteignent les circuits. Cas particulier obligatoire : toute **charge inductive** (relais, moteur CC) renvoie une surtension à sa coupure ; une **diode de roue libre** à ses bornes la recycle, sans quoi le transistor qui la commande meurt en quelques cycles.

> [!tip] Astuce
> **Références éprouvées** — fusible verre 5×20 + porte-fusible ; polyfuse PTC réarmable ; Schottky **1N5819** ou **SS34** (anti-inversion légère, roue libre rapide) ; **1N4007** (roue libre des relais) ; MOSFET-P **AO3401** (petits courants) ou **IRF4905** (forts courants) ; TVS série **SMBJ** choisie à la tension du rail. Des familles stables et courantes : partir d'elles, vérifier la disponibilité et lire la datasheet avant d'acheter.

## Exemple — le bras 3 axes

Sur le bras du fil rouge, l'étage d'entrée enchaîne les trois parades : un **MOSFET anti-inversion** garde tout le système d'un branchement à l'envers, un **fusible** calibré sur la pointe des trois moteurs pas-à-pas protège le rail de puissance, une **TVS** près du connecteur encaisse les transitoires de la source. Les **roues libres** des moteurs sont déjà intégrées aux drivers A4988 — un cas fréquent : vérifier dans la [[lire-une-datasheet|datasheet]] ce que le composant intègre avant d'ajouter le sien. La logique 5 V, derrière son régulateur, se retrouve doublement abritée.

## Pièges

**Sous-calibrer le fusible.** Un fusible au niveau de la pointe normale saute au premier démarrage de moteur. Le calibre se place au-dessus de la pointe attendue, en dessous du courant qui détruit le câblage.

**Remplacer un fusible qui saute par un plus gros.** Un fusible qui saute signale un défaut. Le surcalibrer supprime la défense, pas le défaut — c'est la prochaine pièce en amont qui jouera le rôle de fusible.

**Compter sur une diode série sous fort courant.** À 2 A, une diode classique dissipe ~1,4 W et vole 0,7 V au rail. Au-delà de quelques centaines de mA, le MOSFET-P s'impose.

**Oublier la roue libre d'une charge inductive.** Relais ou moteur commandé par un transistor sans diode de roue libre : le transistor meurt à la coupure, première ou centième — mais il meurt.

**Croire que l'étage d'entrée protège tout.** Il protège l'alimentation, pas les broches : une GPIO en court-circuit ou recevant une tension trop haute se protège localement — résistance série, et compatibilité des [[niveaux-de-tension|niveaux de tension]].

## Voir aussi

- [[alimentation-electronique|Concevoir une alimentation électronique]] — la fiche d'architecture dont cet étage est l'un des gestes
- [[niveaux-de-tension|Niveaux de tension]] — la surtension côté signal (5 V sur une broche 3,3 V), cousine de celle traitée ici
- [[pcb|Concevoir une carte (PCB)]] — intégrer l'étage de protection à la carte
- [[securite-et-qualite|Sécurité & qualité]] — la sécurité des personnes, sujet distinct de la protection du matériel
