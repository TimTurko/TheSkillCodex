---
title: Découplage
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

Le **découplage** consiste à placer des condensateurs au plus près de chaque composant pour servir localement ses **pointes de courant**, trop brèves pour que l'alimentation les rattrape. Sans lui, chaque pointe creuse la tension à la broche du composant — assez pour fausser une mesure ou faire redémarrer un [[microcontroleur|microcontrôleur]] — et le défaut est d'autant plus vicieux qu'il est invisible au [[multimetre|multimètre]].

![Deux panneaux comparés. Sans découplage : un régulateur alimente un microcontrôleur au bout d'une longue piste ; lors d'un appel de courant, la tension à la broche creuse sous la tension minimale du microcontrôleur, qui redémarre. Avec découplage : un condensateur réservoir et un céramique 100 nF placés au plus près de la broche servent la pointe localement, et la tension tient au-dessus du seuil.](/ressources/img/decouplage/generique.svg)

## À quoi ça sert ?

Un régulateur tient la tension de son rail, mais il ne réagit pas instantanément — et surtout, la **piste ou le fil** qui le sépare du composant possède une résistance et une **inductance** qui s'opposent aux variations rapides de courant. Quand un composant appelle une pointe brève — une sortie qui commute, un module radio qui émet, un moteur qui démarre —, le courant ne peut pas s'établir assez vite à travers la piste : la tension **à la broche** s'effondre localement pendant quelques microsecondes, puis tout rentre dans l'ordre.

Quelques microsecondes suffisent pourtant : un microcontrôleur redémarre, une conversion [[adc|ADC]] sort une valeur aberrante, un module radio perd sa trame. Ce sont les pannes intermittentes « inexpliquées » par excellence — le multimètre, trop lent, affiche un rail parfaitement sain ; seul l'[[oscilloscope|oscilloscope]] montre le creux.

Le condensateur de découplage est la parade : un **réservoir local**, chargé à la tension du rail, qui fournit la pointe sur place le temps que le courant s'établisse depuis l'alimentation, puis se recharge.

## Comment découpler ?

**Deux étages qui se complètent.** Un **condensateur réservoir** (*bulk*, électrolytique de 100 à 470 µF) encaisse les variations lentes et amples — il se place à l'entrée d'un étage ou aux bornes d'un gros consommateur (un driver de moteur). Un **condensateur céramique de 100 nF** répond aux variations les plus rapides — il se colle à **chaque broche d'alimentation de chaque circuit intégré**. Aucun des deux ne remplace l'autre : le réservoir est trop « lent » pour les fronts rapides, le céramique trop petit pour les appels amples.

**Au plus près, toujours.** L'efficacité d'un découplage se mesure en millimètres : sur un [[pcb|circuit imprimé]], le 100 nF se place contre la broche ; sur breadboard, dans les trous immédiatement adjacents au composant. À dix centimètres au bout d'un fil, l'inductance du fil annule son effet — autant ne rien mettre.

**Un 100 nF par circuit, pas un pour tous.** Le découplage est local par nature : chaque circuit intégré (microcontrôleur, driver, capteur, mémoire) reçoit le sien. Les schémas d'application des datasheets le rappellent systématiquement — et les cartes du commerce, comme une [[arduino-alimentation|carte Arduino]], en sont déjà couvertes.

> [!tip] Astuce
> **Références éprouvées** — céramique **100 nF X7R** (le standard absolu, à acheter par lots), électrolytique aluminium **100 à 470 µF** pour les réservoirs, céramique 10 µF en complément compact. Prendre une **tension de service d'au moins le double du rail** (25 V sur un rail 12 V), et lire le schéma d'application de la datasheet du composant à découpler : il donne les valeurs attendues.

## Exemple — le bras 3 axes

Sur le bras du fil rouge, chaque **driver A4988** reçoit son condensateur réservoir (100 µF, exigé par la datasheet du driver) : les trois moteurs pas-à-pas tirent leur courant par pointes, à chaque pas. Le microcontrôleur et chaque codeur reçoivent leur **100 nF** à la broche d'alimentation. Sans le réservoir des drivers, le démarrage simultané des trois axes creuse le rail de puissance, le creux se propage, et le microcontrôleur redémarre en plein mouvement — une panne intermittente typique, invisible au multimètre.

## Pièges

**Découpler loin.** Un condensateur au bout d'une longue piste ou d'un fil volant ne découple rien : l'inductance du chemin annule son effet. La distance se compte en millimètres.

**Un seul gros condensateur pour toute la carte.** Le réservoir central ne répond pas aux pointes rapides de chaque circuit. Les deux étages — réservoir commun, céramique par broche — se complètent, aucun ne remplace l'autre.

**Monter un électrolytique à l'envers.** Contrairement au céramique, l'électrolytique est **polarisé** : inversé, il se détruit, parfois en éclatant. Repérer la bande du « − » avant de souder.

**Ajouter des condensateurs au hasard en débogage.** Si un condensateur « répare » un comportement erratique, comprendre quelle pointe et quel composant étaient en cause — sinon le défaut reviendra sous une autre forme.

**Choisir la tension de service au ras du rail.** Un condensateur vieillit mal à sa tension limite. La marge du double est le réflexe sûr.

## Aller plus loin

- **L'impédance d'un condensateur dépend de la fréquence** — c'est pourquoi on met plusieurs valeurs en parallèle (réservoir + céramique) plutôt qu'une seule grosse : chacune couvre sa bande.
- **Les plans d'alimentation** — sur un PCB dense, une paire de plans alimentation/masse se comporte elle-même comme un condensateur distribué, complément naturel du découplage local.

## Voir aussi

- [[alimentation-electronique|Concevoir une alimentation électronique]] — la fiche d'architecture dont le découplage est l'un des gestes
- [[pcb|Concevoir une carte (PCB)]] — le placement des condensateurs se joue au routage
- [[oscilloscope|Oscilloscope]] — le seul instrument qui montre la pointe et le creux
- [[arduino-alimentation|Alimenter une carte Arduino]] — les découplages déjà présents sur une carte du commerce
