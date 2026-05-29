---
title: Chronogramme
type: notion
tags:
  - eee
  - notion
prerequis:
  - algorithme
aa:
  - RA-EEE-C03-2/EEE/5
phases:
  - concept
  - preuve-de-concept
draft: false
---

Un **chronogramme** est une représentation graphique de l'évolution d'un ou plusieurs **signaux dans le temps**, tracés sur un **axe de temps commun**. Là où les autres représentations d'un [[algorithme]] décrivent la *logique* (l'enchaînement des décisions ou des états), le chronogramme décrit le *timing* : il sert à vérifier les **relations temporelles** entre signaux — qui change avant quoi, combien de temps dure une impulsion, sur quel front réagir.

![Chronogramme générique : trois signaux logiques empilés sur un axe de temps commun, avec une horloge périodique, un signal A à fronts montant et descendant repérés, et un signal B qui réagit après un délai.](/ressources/img/chronogramme-generique.svg)

## À quoi ça sert ?

Beaucoup de problèmes embarqués ne sont pas des problèmes de logique mais de **temps** : un signal doit-il monter avant l'autre ? combien de temps dure une impulsion ? à quelle fréquence ? Le chronogramme rend ces questions visibles. Il sert à :

- **lire les diagrammes de timing d'une datasheet** — la plupart des composants spécifient leurs signaux sous forme de chronogrammes (voir [[lire-une-datasheet|lire une datasheet]]) ;
- **spécifier ou vérifier un protocole** — l'ordre et la durée des bits d'une trame [[uart|UART]], [[i2c|I2C]] ou [[spi|SPI]] ;
- **caractériser un PWM** — période, temps haut, rapport cyclique ;
- **confronter l'attendu au réel** — le chronogramme idéal se compare à ce que montre l'[[oscilloscope|oscilloscope]] sur le vrai montage.

C'est la représentation à mobiliser dès qu'une **contrainte de temps** entre en jeu, en complément des autres : on décrit *quoi faire* avec une machine à états, et *quand* avec un chronogramme.

## Comment lire un chronogramme ?

Tout se lit par rapport à l'**axe horizontal du temps**, commun à tous les signaux et orienté vers la droite.

- **Niveaux.** Un signal **logique** ne prend que deux niveaux : **haut (1)** et **bas (0)**. La ligne reste à un niveau puis bascule.
- **Fronts.** Le passage 0 → 1 est un **front montant** (↑), le passage 1 → 0 un **front descendant** (↓). C'est souvent sur un front, pas sur un niveau, qu'on déclenche une action.
- **Durées.** On lit la **période** T (motif qui se répète), le **temps haut** tₕ, et pour un PWM le **rapport cyclique** α = tₕ / T.
- **Alignement vertical = simultanéité.** Ce qui est à la même abscisse se produit au même instant. Une ligne **pointillée verticale** sert à lire une relation : un front de A entraîne un changement de B après un certain **délai**.

La règle de lecture tient en une phrase : on choisit un instant sur l'axe, et on lit le niveau de **chaque** signal à cet instant.

## Exemple — Signal PWM et trame série

Deux signaux courants en projet, lus sur le même axe.

![Chronogramme à deux signaux : en haut un PWM carré avec période et temps haut cotés, en bas une trame UART avec bit de start, huit bits de données et bit de stop repérés.](/ressources/img/chronogramme-pwm.svg)

Le **PWM** (en haut) est un carré dont seul compte le **rapport cyclique** α = tₕ / T : à fréquence fixe, plus le temps haut est long, plus la puissance moyenne transmise est grande (vitesse d'un moteur, luminosité d'une LED — voir [[arduino-sortie-pwm|piloter une sortie PWM]]). La **trame UART** (en bas) illustre l'autre usage : la ligne au repos est haute, un **bit de start** (bas) annonce la trame, suivent les **8 bits de données**, puis un **bit de stop**. Sans chronogramme, impossible de vérifier qu'on échantillonne chaque bit au bon instant.

## Pièges

**Pas d'axe de temps commun.** Tracer chaque signal sur sa propre échelle interdit toute lecture de relation. Tous les signaux partagent le même axe horizontal, sinon le chronogramme ne veut rien dire.

**Confondre niveau et front.** Réagir « quand c'est haut » et réagir « au front montant » sont deux choses différentes. Beaucoup de bugs (rebonds de bouton, comptages doublés) viennent de cette confusion.

**Échelle de temps absente.** Sans graduation ni durée de référence, on voit l'ordre des événements mais on ne peut rien **mesurer**. Indiquer au moins une durée ou une période.

**Confondre logique et analogique.** Un chronogramme logique n'a que deux niveaux. Un signal qui varie continûment (une tension de capteur) est une **courbe** — son tracé relève plutôt de l'[[oscilloscope|oscilloscope]].

**Confondre rapport cyclique et fréquence.** Le rapport cyclique (α = tₕ/T) dit *quelle fraction du temps* le signal est haut ; la fréquence (1/T) dit *à quelle cadence* il se répète. On peut changer l'un sans l'autre.

**Lire des relations sans aligner.** Estimer « A change avant B » sans tracer la verticale au bon endroit mène à des erreurs de causalité. Aligner verticalement avant de conclure.

## Cas particulier — Du chronogramme à l'oscilloscope

Le chronogramme existe sous trois formes complémentaires. **Idéalisé**, c'est l'outil de conception (signaux parfaits, fronts verticaux). **Normatif**, c'est le diagramme de timing d'une [[lire-une-datasheet|datasheet]], qui fixe les durées minimales à respecter. **Réel**, c'est ce que trace l'[[oscilloscope|oscilloscope]] sur le montage — avec ses imperfections (temps de montée non nul, bruit, rebonds). Savoir lire un chronogramme idéal est le prérequis pour interpréter les deux autres.

## Voir aussi

- [[algorithme|Algorithme]] — la fiche mère ; le chronogramme y est la représentation du *temps*
- [[oscilloscope|Oscilloscope]] — l'instrument qui affiche le chronogramme réel d'un signal
- [[lire-une-datasheet|Lire une datasheet]] — où l'on rencontre les chronogrammes normatifs des composants
- [[arduino-sortie-pwm|Piloter une sortie PWM]] — générer un signal dont le rapport cyclique se lit en chronogramme
- [[uart|UART]] — la trame série dont le chronogramme fixe l'ordre des bits
