---
title: Le potentiomètre
type: notion
tags:
  - eee
  - notion
prerequis: []
aa: []
phases:
  - preuve-de-concept
draft: false
---

Un **potentiomètre** est une résistance à curseur : une piste résistive dont un contact mobile (le **curseur**) prélève une fraction réglable de la tension appliquée entre ses deux extrémités — autrement dit un **pont diviseur réglable**.

![Un potentiomètre sous trois angles : à gauche le composant réel (broches 1 VCC, 2 OUT, 3 GND), au centre son symbole électrique (résistance avec curseur sur la sortie), à droite son schéma mécanique (piste résistive en arc et curseur mobile).|640](/ressources/img/potentiometre/how-potentiometer-works.webp)

## À quoi ça sert ?

C'est le **réglage manuel** le plus simple en projet : une valeur qu'on tourne et que le programme lit. Il sert d'**entrée de consigne** (fixer un seuil, une vitesse, une luminosité, un angle), de molette de **calibration** à la main, ou de **diviseur de tension réglable** sur un banc. Sa sortie est une tension continue, lue par le [[adc|convertisseur analogique-numérique]] de la carte (`analogRead()`).

## Comment ça marche

Trois broches : les **deux extrémités** de la piste résistive (câblées entre `+5 V` et `GND`) et le **curseur** au milieu (la sortie). La position du curseur fixe le rapport du [[niveaux-de-tension|pont diviseur]] : la tension de sortie varie continûment de 0 V (curseur côté GND) à la tension d'alimentation (curseur côté `+5 V`).

La **course** peut être :

- **linéaire (B)** — la tension suit proportionnellement la rotation. C'est le cas courant pour une consigne.
- **logarithmique (A)** — la tension varie peu au début puis vite (ou l'inverse) ; conçue pour le volume audio, calquée sur la perception de l'oreille.

## Formes et variantes

- **Rotatif** (bouton), **linéaire/slider** (glissière), **trimmer** (petit réglage ponctuel au tournevis, figé ensuite).
- **Rhéostat vs potentiomètre** : câblé sur **deux fils** (une extrémité + le curseur), c'est une simple **résistance variable** (un rhéostat) ; câblé sur **trois fils**, c'est un **diviseur** qui sort une tension. Pour lire une consigne sur un ADC, on veut les trois fils.

## Pièges

**Extrémité non câblée = curseur flottant.** Si une seule extrémité est reliée, la sortie n'est plus un diviseur défini : la lecture dérive. Câbler les deux extrémités (VCC et GND).

**Ce n'est pas un variateur de puissance.** Un potentiomètre divise une tension *à vide* (vers l'entrée haute impédance d'un ADC). Y faire passer le courant d'une charge échauffe et détruit la piste — pour piloter de la puissance, voir [[arduino-sortie-pwm|la PWM]] et un étage de sortie.

**Course log lue comme linéaire.** Un potentiomètre audio (A) donne une variation non proportionnelle à l'angle — surprise garantie si le code attend du linéaire. Choisir un modèle **linéaire (B)** pour une consigne.

**Contact usé.** Un vieux potentiomètre fait des **sauts de valeur** quand on le tourne (poussière, usure de la piste). Filtrer la lecture ou remplacer le composant.

## Voir aussi

- [[arduino-capteur-analogique|Lire un capteur analogique]] — le lire sur Arduino (câblage, conversion)
- [[adc|Convertisseur analogique-numérique]] — ce qui transforme la tension du curseur en nombre
- [[niveaux-de-tension|Niveaux de tension]] — le principe du pont diviseur
- [[arduino-sortie-pwm|Piloter une sortie PWM]] — le potentiomètre comme consigne d'intensité ou de vitesse
- [[arduino-servomoteur|Piloter un servomoteur]] — le potentiomètre comme consigne de vitesse / position
