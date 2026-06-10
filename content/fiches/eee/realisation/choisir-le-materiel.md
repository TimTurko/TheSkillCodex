---
title: Choisir le matériel
type: trame
tags:
  - eee
  - trame
  - realisation
prerequis:
  - decomposition-fonctionnelle
aa: []
draft: false
---

**Choisir le matériel**, c'est la deuxième étape de la [[eee/index|réalisation du sous-système embarqué]]. À partir des fonctions chiffrées au [[decomposition-fonctionnelle|cadrage du besoin]], tu sélectionnes **les capteurs, les actionneurs et la carte** qui les réaliseront, puis tu vérifies que l'ensemble tient — entrées-sorties, calcul, énergie. Le livrable est un **matériel retenu et justifié**, prêt à être câblé à l'[[concevoir-l-electronique|étape 3]].

## Posture attendue

La tentation est de choisir la carte d'abord, par habitude ou par réputation (« on prendra un ESP32 »), puis de plier les besoins autour d'elle. Fais l'inverse : pars des fonctions, déduis ce qu'il faut mesurer et actionner, et choisis le matériel qui répond — pas celui que tu connais le mieux. Et ne choisis jamais un composant sur sa fiche commerciale : c'est la **datasheet** qui dit s'il est compatible. Un choix matériel se justifie par une **matrice**, pas par une intuition — c'est ce qui le rend défendable en revue.

## Objectif de l'étape

Produire un **choix matériel justifié** qui :

- associe à chaque fonction du cadrage le **capteur** ou l'**actionneur** qui la réalise ;
- retient une **plateforme** (microcontrôleur ou ordinateur monocarte, puis famille) dimensionnée aux besoins ;
- justifie le choix de plateforme par une [[matrice-de-decision|matrice de décision]] tracée ;
- **vérifie** que la carte tient : entrées-sorties suffisantes, périphériques requis, marge de calcul, alimentation possible.

## Démarche

### 1. Traduire les fonctions en besoins matériels

Reprends la liste chiffrée du [[decomposition-fonctionnelle|cadrage du besoin]] et traduis chaque fonction en besoin concret : qu'y a-t-il à **mesurer** (donc un capteur), à **actionner** (donc un actionneur), à **calculer** (donc de la ressource) ? Chaque besoin hérite des grandeurs de l'étape 1 — résolution, plage, cadence, effort — qui deviendront les critères de choix. Tu obtiens une liste de besoins matériels, fonction par fonction, sans encore nommer de référence.

> [!example] Exemple : projet bras 3 axes
> Les quatre fonctions du bras, traduites en besoins :
>
> | Fonction | Besoin matériel | Grandeur dimensionnante |
> |---|---|---|
> | Positionner 3 axes | 3 actionneurs rotatifs | couple (chiffré au CdCF), précision ± 0,5° |
> | Connaître la position | 3 capteurs d'angle | résolution, plage 0–270° |
> | Sécuriser les fins de course | 6 contacts tout-ou-rien | détection < 5 ms |
> | Dialoguer avec l'opérateur | 1 liaison de commande | quelques dizaines de kbit/s |
>
> **Sortie** : 3 actionneurs, 3 capteurs, 6 contacts, 1 liaison — chacun avec sa grandeur dimensionnante. C'est la commande du choix de composants.

> [!livrable] Livrable 1/4 — Besoins matériels par fonction
> - Pour chaque fonction : ce qu'il faut mesurer, actionner ou calculer, et la grandeur dimensionnante

### 2. Choisir les capteurs et les actionneurs

Pour chaque besoin, identifie un **type** de composant (capteur d'angle potentiométrique ou magnétique, moteur à courant continu ou stepper, relais ou transistor…), puis une **référence** candidate. C'est ici que tu lis les [[lire-une-datasheet|datasheets]] : tension d'alimentation, plage et résolution, courant consommé, interface de sortie (analogique, logique, bus). Le composant doit être compatible avec une carte raisonnable — inutile de choisir un capteur exotique qui imposera une électronique d'interface lourde.

> [!warning] Attention
> **Un composant ne se choisit pas sur sa photo ni sur son prix.** Deux capteurs d'angle « identiques » peuvent différer sur la tension (3,3 V ou 5 V), l'interface (analogique ou I²C) ou la plage — détails qui décident de toute l'électronique d'interface. Lis la datasheet *avant* de retenir une référence, pas après l'avoir commandée.

> [!example] Exemple : projet bras 3 axes
> Pour l'actionnement, deux types confrontés : moteur à courant continu + réducteur, ou stepper + driver. Le stepper l'emporte sur la précision en boucle ouverte (pas besoin de capteur pour positionner finement) ; la référence retenue est un stepper NEMA 17 piloté par driver A4988. Pour la mesure d'angle — conservée malgré la boucle ouverte du stepper, pour le calibrage à la mise sous tension et la surveillance d'écart en fonctionnement — un capteur magnétique à sortie analogique 0–3,3 V, lu directement par le convertisseur de la carte. Les fins de course sont de simples contacts mécaniques.
>
> **Sortie** : 3 steppers NEMA 17 + drivers A4988, 3 capteurs d'angle analogiques 3,3 V, 6 contacts. Toutes les tensions et interfaces sont relevées sur datasheet.

> [!livrable] Livrable 2/4 — Capteurs et actionneurs retenus
> - Pour chaque besoin : type, référence, et caractéristiques clés relevées sur datasheet (tension, interface, plage, courant)

### 3. Choisir la plateforme

Les capteurs et actionneurs fixent une grande partie du cahier des charges de la carte : combien d'entrées-sorties, quels périphériques (convertisseur analogique-numérique, sorties PWM), quelle connectivité. Décide d'abord du **type** : un **microcontrôleur** (réactif, temps réel, peu coûteux, suffisant pour piloter des moteurs et lire des capteurs) ou un **ordinateur monocarte** sous Linux (puissant, pour de la vision, du réseau, une interface riche). Puis choisis la **famille** à l'aide d'une [[matrice-de-decision|matrice de décision]]. Le panorama des familles et l'aide au choix sont portés par le hub [[microcontroleur|microcontrôleur]] et la fiche [[raspberry-pi|Raspberry Pi]] pour l'option monocarte.

> [!tip] Astuce
> **Ne refais pas le panorama des familles : sers-t'en.** Le hub [[microcontroleur|microcontrôleur]] compare déjà Arduino, ESP32, STM32, Teensy, PIC et l'option monocarte. Ton travail ici n'est pas de réécrire cette comparaison, mais de la *confronter à tes besoins* dans une matrice — c'est l'étape qui transforme un panorama générique en un choix justifié.

> [!example] Exemple : projet bras 3 axes
> Trois candidats confrontés aux besoins (≈ 15 entrées-sorties, dont 3 voies analogiques et 3 sorties d'impulsions STEP en PWM/timer, plus une liaison opérateur) :
>
> | Critère | Pond. | Arduino Uno | ESP32 | STM32 |
> |---|---|---|---|---|
> | Entrées-sorties et PWM | 30 % | 3/5 | 5/5 | 5/5 |
> | Voies analogiques | 20 % | 4/5 | 5/5 | 5/5 |
> | Connectivité opérateur | 20 % | 2/5 | 5/5 | 3/5 |
> | Écosystème et prise en main | 20 % | 5/5 | 4/5 | 3/5 |
> | Prix | 10 % | 3/5 | 5/5 | 4/5 |
> | **Score pondéré** | | **3,4** | **4,8** | **4,1** |
>
> L'**ESP32** sort en tête : assez de PWM et de voies analogiques pour les trois axes, Wi-Fi intégré pour la liaison opérateur, marge de calcul pour l'asservissement. Deux notes sont à tracer pour la revue : l'Uno perd un point en analogique (résolution 10 bits, marge juste face au ± 0,5° demandé) et en connectivité face au STM32 (un seul UART via pont USB, contre USB natif et UART multiples). Décision retenue : ESP32.

> [!livrable] Livrable 3/4 — Plateforme retenue (matrice de choix)
> - Le type (microcontrôleur ou monocarte) et la famille retenus, justifiés par une matrice de décision pondérée selon les besoins

### 4. Vérifier l'adéquation et l'alimentation

Avant de figer le choix, vérifie qu'il tient pour de bon. Compte les **entrées-sorties** réellement nécessaires et confronte-les à celles de la carte ; vérifie qu'elle porte les **périphériques** requis (assez de canaux PWM, de voies analogiques, d'entrées à interruption) ; garde une **marge de calcul**. Esquisse enfin le **besoin d'alimentation** — source, tensions, courant approximatif — pour t'assurer qu'il est réalisable ; le détail viendra à l'[[concevoir-l-electronique|étape 3]] avec la [[alimentation-electronique|conception de l'alimentation]]. Si un point ne passe pas, reviens au choix de plateforme : mieux vaut le corriger ici que sur une carte déjà commandée.

> [!warning] Attention
> **Sous-dimensionner les entrées-sorties ou oublier l'alimentation se paie par un re-choix tardif.** Une carte retenue sans compter les broches se révèle trop juste au câblage, quand la commande est déjà passée. Compte les entrées-sorties et pose le besoin d'énergie *avant* de figer — ce sont les deux oublis qui obligent à recommencer le choix.

> [!example] Exemple : projet bras 3 axes
> Vérification de l'ESP32 : 3 × (STEP, DIR) = 6 sorties (3 impulsions STEP générées par PWM/timer, 3 directions en logique simple), 3 voies analogiques pour les capteurs d'angle, 6 entrées à interruption pour les fins de course — soit 15 broches utiles, dans les capacités de la carte. Périphériques : assez de canaux pour générer les signaux STEP, convertisseur analogique-numérique présent. Alimentation : une source 12 V pour les drivers, régulée en 5 V et 3,3 V pour la logique — réalisable, détail renvoyé à l'étape 3.
>
> **Sortie** : entrées-sorties suffisantes, périphériques présents, alimentation faisable. Le choix matériel est figé.

> [!livrable] Livrable 4/4 — Vérification entrées-sorties, ressources et énergie
> - Le décompte des entrées-sorties et périphériques confronté à la carte, et l'esquisse du besoin d'alimentation

## Conclusion

Ton matériel est choisi et justifié : capteurs, actionneurs, carte, et vérification d'adéquation. La suite bascule vers la [[concevoir-l-electronique|conception de l'électronique]] qui reliera tout cela. L'arbitrage de ce choix en revue, son inscription à la nomenclature et le planning de commande sont portés par la phase [[concept|concept]] du cycle en V.

---

## Pièges fréquents

**Choisir la carte avant de connaître les besoins.** Partir de la carte qu'on connaît et plier les besoins autour fige des contraintes avant de les avoir comprises. Les besoins commandent le matériel, pas l'inverse.

**Retenir un composant sans lire sa datasheet.** Tension, interface, plage, courant : ces détails décident de toute l'électronique d'interface. La fiche commerciale ne suffit pas.

**Sous-dimensionner les entrées-sorties.** Une carte trop juste en broches se découvre au câblage, commande déjà passée. Compte les entrées-sorties avant de figer.

**Oublier l'alimentation dans le choix.** Un matériel séduisant mais gourmand peut rendre l'alimentation impossible ou l'autonomie ridicule. Le besoin d'énergie fait partie du choix.

**Confondre microcontrôleur et ordinateur monocarte.** Le premier est réactif et temps réel ; le second, puissant mais sous système d'exploitation. Piloter trois moteurs en temps réel n'a pas les mêmes besoins que faire de la vision.

**Noter tout pareil dans la matrice.** Une matrice qui met 4/5 partout ne décide rien : le choix est alors fait à l'intuition et la matrice n'est qu'un habillage. Une vraie matrice fait émerger des écarts.

## Ce qui relève d'ailleurs

**L'arbitrage, c'est le cycle en V.** Le choix matériel est validé en revue à la phase [[concept|concept]], inscrit à la nomenclature (BOM) et planifié pour commande — cette fiche donne la méthode technique, le V l'inscrit dans le projet.

*L'outil de choix* — la [[matrice-de-decision|matrice de décision]] — est une notion de conduite de projet, partagée avec toutes les disciplines.

*L'impact écoconception* du matériel (consommation, durée de vie, réparabilité, origine) entre dans la matrice comme critère pondéré : voir [[ecoconception|écoconception]].

## Voir aussi

- [[eee/index|Réalisation du sous-système embarqué]]
- Étape précédente : [[decomposition-fonctionnelle|Cadrer le besoin embarqué]]
- Étape suivante : [[concevoir-l-electronique|Concevoir l'électronique]]
- [[microcontroleur|Microcontrôleur]]
- [[raspberry-pi|Raspberry Pi]]
- [[lire-une-datasheet|Lire une datasheet]]
- [[alimentation-electronique|Concevoir une alimentation]]
- [[matrice-de-decision|Matrice de décision]] *(outil projet)*
- [[concept|Concept]] *(arbitrage, cycle en V)*
- [[ecoconception|Écoconception]] *(fil transverse)*
