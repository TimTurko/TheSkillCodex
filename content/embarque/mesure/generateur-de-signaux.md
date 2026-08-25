---
title: Générateur de signaux
type: tuto
tags:
  - eee
  - tuto
aliases:
  - GBF
  - générateur basse fréquence
prerequis:
  - instruments-de-mesure
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
---

**Le générateur de signaux** (souvent appelé **GBF**, générateur basse fréquence) est l'instrument *inverse* de la mesure : au lieu de relever ce que fait le circuit, il lui **injecte un signal calibré** (sinus, carré, triangle) dont on choisit la forme, la fréquence et l'amplitude. Il permet de tester un montage avec une entrée parfaitement connue, sans attendre que le vrai signal — capteur, microcontrôleur — soit disponible. Fiche tuto-outil du hub [[instruments-de-mesure|instruments de mesure]].

![Face avant d'un générateur de signaux en blocs fonctionnels : l'afficheur qui récapitule forme, fréquence, amplitude et offset ; le bloc de choix de forme d'onde (sinus, carré, triangle) ; le bloc de sortie avec son connecteur BNC, la touche Output et le rappel du réglage de charge High-Z ou 50 Ω ; et les trois boutons fréquence, amplitude, offset.|640](/ressources/img/generateur-de-signaux/face-avant.svg)

## À quoi ça sert ?

Tester un montage exige une entrée. Tant que le capteur n'est pas câblé ou que le programme n'est pas écrit, cette entrée n'existe pas. Le GBF la fabrique :

- **stimuler** un sous-ensemble avec un signal maîtrisé : on connaît exactement ce qui entre, on observe ce qui sort à l'[[oscilloscope|oscilloscope]] — la réponse se compare à un attendu ;
- **remplacer provisoirement** un élément absent : simuler la sortie d'un capteur analogique pour tester l'étage de conditionnement ou une entrée [[adc|ADC]] avant que le vrai capteur n'arrive ;
- **caractériser** : balayer plusieurs fréquences pour relever la réponse d'un filtre, monter l'amplitude pour trouver le seuil d'une entrée.

![Principe du générateur de signaux : le GBF injecte un stimulus maîtrisé dans le montage testé, l'oscilloscope observe la réponse, les trois appareils partagent une masse commune.](/ressources/img/generateur-de-signaux/injection.svg)

Le GBF et l'oscilloscope forment un **binôme** : l'un injecte, l'autre observe. C'est la version paillasse du couple simulation / mesure, sauf qu'ici tout est réel.

## Réglages essentiels

Quatre paramètres définissent le signal :

- **la forme d'onde** — sinus (réponse en fréquence, signaux « analogiques »), carré (signaux logiques, horloges, test de [[pwm|PWM]]), triangle (rampes, tests de seuil) ;
- **la fréquence** — celle du phénomène à reproduire ;
- **l'amplitude** — attention à l'unité affichée : crête-à-crête (Vpp) le plus souvent ;
- **l'offset** — le décalage continu du signal. C'est lui qui transforme un signal centré sur zéro en signal purement positif : pour une entrée logique 3,3 V, on règle un carré de 3,3 Vpp **avec un offset de +1,65 V** — jamais de tension négative sur une broche de microcontrôleur → [[niveaux-de-tension|niveaux de tension]].

> [!warning] Le piège du genre : High-Z ou 50 Ω
> Le générateur calcule l'amplitude affichée en supposant une charge de **50 Ω** à sa sortie. Branché sur une entrée à haute impédance (un montage électronique ordinaire), le signal réel vaut **le double de l'affiché**. Avant toute injection : régler la sortie sur **High-Z** dans les menus (ou diviser mentalement par deux), et **vérifier l'amplitude réelle à l'oscilloscope**.

## Brancher et injecter

1. **Régler avant de brancher** : forme, fréquence, amplitude, offset — sortie désactivée.
2. **Vérifier le signal à l'oscilloscope** seul, avant de l'injecter dans le montage : amplitude réelle, offset réel.
3. **Relier les masses** : le blindage du câble BNC porte la masse du générateur, à raccorder à la masse du montage.
4. **Injecter et observer** la réponse — en gardant amplitude et offset dans la plage que le montage tolère.

## Pièges

**Croire l'amplitude affichée.** Le réglage High-Z / 50 Ω (voir warning) est la première cause de « j'envoie 3,3 V, il en reçoit 6,6 ». Vérification à l'oscilloscope systématique.

**Injecter du négatif dans une entrée logique.** Un sinus ou un carré sans offset passe sous 0 V à chaque période : une entrée de microcontrôleur n'y survit pas longtemps. L'offset n'est pas un réglage décoratif.

**Dépasser ce que le montage tolère.** L'amplitude se choisit d'après le montage testé (sa datasheet, ses [[niveaux-de-tension|niveaux]]), pas d'après ce que le générateur sait produire.

**Oublier la masse commune.** Sans référence partagée, le signal injecté n'a pas de sens pour le montage — et la mesure en sortie non plus.

## Raccrochage projet

- **Phase de [[preuve-de-concept|preuve de concept]]** — tester un étage de la chaîne sans attendre les autres : la chaîne de traitement se valide avec un signal de synthèse avant de brancher le vrai capteur.
- **Phase d'[[integration-et-tests|intégration et tests]]** — produire des cas de test **reproductibles** : la même rampe, le même carré, à chaque essai, ce qu'un capteur réel ne garantit jamais.

## Voir aussi

- [[instruments-de-mesure|Instruments de mesure]] — le hub : méthode commune et choix de l'instrument
- [[oscilloscope|Oscilloscope]] — le binôme naturel : injecter d'un côté, observer de l'autre
- [[adc|ADC]] — l'entrée analogique qu'on teste souvent au GBF
- [[niveaux-de-tension|Niveaux de tension]] — la plage à respecter avant d'injecter quoi que ce soit
