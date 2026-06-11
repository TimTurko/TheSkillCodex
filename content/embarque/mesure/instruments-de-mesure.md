---
title: Instruments de mesure
type: notion
tags:
  - eee
  - notion
prerequis:
  - analyse-de-schema-electronique
aa:
  - RA-PROJET-C03-3/EEE/2
  - RA-PROJET-C05-3/PROJ/5
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
---

**Mesurer un système électronique**, c'est relever sur le **circuit réel** ses grandeurs — tension, courant, résistance, forme d'onde — à l'aide d'instruments, pour confronter ce qu'il fait *vraiment* à ce qu'on attendait. Là où la [[simulation-electronique|simulation]] calcule un comportement idéal *avant* de câbler, la mesure constate le comportement réel *une fois* câblé : c'est l'épreuve de vérité du montage. Cette fiche est le **hub d'entrée** vers la mesure : elle pose la **méthode** commune à tous les instruments et la façon d'en **lire** les résultats, puis oriente vers l'instrument adapté — du [[multimetre|multimètre]] (une valeur ponctuelle) à l'[[oscilloscope|oscilloscope]] (une forme d'onde dans le temps).

## À quoi ça sert ?

Un montage qui « devrait marcher » d'après le schéma et la simulation ne marche pas toujours sur la table : une soudure froide, une pile fatiguée, un composant monté à l'envers, un [[niveaux-de-tension|niveau de tension]] incompatible. La mesure est le seul moyen de savoir ce qui se passe réellement. Elle sert à :

- **diagnostiquer** — « pourquoi ça ne marche pas ? » : y a-t-il bien 5 V à cette broche ? la piste est-elle continue ? le signal sort-il du capteur ?
- **valider** — confirmer qu'un sous-ensemble produit la tension, le courant ou la forme d'onde attendus, avant de l'intégrer ;
- **caractériser** — relever une valeur exploitable (tension d'alimentation réelle, fréquence d'un signal, rapport cyclique d'un [[pwm|PWM]]) pour un [[dossier-technique|dossier technique]] ou un rapport de test ;
- **confronter au modèle** — comparer la trace réelle à la courbe [[simulation-electronique|simulée]] et à la [[lire-une-datasheet|datasheet]] : trois facettes d'un même signal.

La mesure se mène surtout en [[preuve-de-concept|preuve de concept]] (valider un sous-ensemble réel avant de le monter) et en [[integration-et-tests|intégration et tests]] (qualifier le système assemblé). Elle ne remplace pas la simulation — elle la **vérifie**.

## Quel instrument pour quelle grandeur ?

Chaque instrument répond à une question différente. Le premier réflexe est de **choisir l'instrument d'après la grandeur** à observer.

| Instrument | Grandeur mesurée | Question à laquelle il répond |
| --- | --- | --- |
| [[multimetre\|Multimètre]] | tension, courant, résistance, continuité (valeurs **continues ou lentes**) | « quelle est la valeur ici ? » |
| [[oscilloscope\|Oscilloscope]] | tension **en fonction du temps** (signaux **rapides**, forme d'onde) | « quelle est la *forme* de ce signal ? » |
| [[analyseur-logique\|Analyseur logique]] | états logiques de plusieurs lignes numériques simultanées | « que disent ces lignes de [[bus-de-communication\|bus]] ? » |
| [[generateur-de-signaux\|Générateur de signaux (GBF)]] | *injecte* un signal calibré (ce n'est pas une mesure) | « comment réagit le montage à *cette* entrée ? » |

Le partage essentiel : le **multimètre donne une valeur** (un nombre, lentement), l'**oscilloscope montre une forme** (l'évolution dans le temps, vite). Vérifier une alimentation se fait au multimètre ; observer un signal PWM, un rebond de bouton ou une trame série demande un oscilloscope.

## Méthode de mesure

Quel que soit l'instrument, une mesure suit le même enchaînement.

1. **Choisir l'instrument et la fonction** d'après la grandeur (tension, courant, forme d'onde…).
2. **Régler le calibre.** Partir du calibre le plus large puis resserrer, ou faire confiance à l'*auto-range* — mais ne jamais dépasser la valeur maximale annoncée de l'instrument (voir *Pièges*).
3. **Brancher correctement.** C'est l'étape qui distingue une mesure d'un court-circuit : le **voltmètre se met en parallèle**, l'**ampèremètre en série**, et l'oscilloscope partage sa **masse** avec le circuit (voir *Pièges*).
4. **Lire** la valeur ou la courbe, en notant l'unité et l'échelle.
5. **Confronter à l'attendu.** Une mesure ne vaut que rapportée à un ordre de grandeur attendu, comme en simulation — étape traitée juste en dessous.

> [!warning] Périmètre de tension
> Le projet se mène en **très basse tension** : piles, USB, alimentations de laboratoire. Le **secteur 230 V ne se mesure pas** dans le cadre du projet — c'est un autre univers de précautions, d'instruments et d'habilitations → [[basse-tension|basse tension]].

## Interpréter une mesure

Relever un chiffre ne suffit pas : encore faut-il savoir ce qu'il vaut. Trois gestes, symétriques de ceux de la [[simulation-electronique|simulation]].

**Lire la grandeur.** Identifier l'unité, l'échelle et le calibre avant de conclure. « 2,5 » ne veut rien dire sans savoir si ce sont des volts, des millivolts ou des ampères, ni si le calibre est adapté. Sur un oscilloscope, vérifier le réglage de la sonde (×1 / ×10) avant de lire une amplitude.

**Connaître la qualité de l'instrument.** Une mesure hérite des défauts de l'instrument : sa [[precision-de-mesure|précision]] réelle — affaire de **justesse** et de **fidélité** — se lit dans sa propre documentation, et le dernier chiffre affiché n'est pas une garantie (résolution n'est pas précision). À garder en tête avant de commenter un écart de quelques pour cent.

**Confronter à l'attendu.** Comparer la mesure à ce que prédit la théorie, la [[lire-une-datasheet|datasheet]] ou la [[simulation-electronique|simulation]]. Une alimentation régulée 5 V *doit* afficher entre 4,75 et 5,25 V : si le multimètre lit 3,2 V, l'alimentation s'écroule probablement sous charge ; s'il lit 0 V, un fil manque. **Une mesure se valide d'abord sur un point dont on connaît la réponse** (la tension d'une pile, une résistance marquée).

**Décider.** Trois issues : le sous-ensemble est **validé** (on l'intègre) ; il est **à revoir** (une valeur ne convient pas, on corrige le montage) ; ou la mesure est **aberrante** — et une mesure aberrante trahit le plus souvent un **problème de branchement, de calibre ou de masse**, pas une physique exotique. Devant l'invraisemblable, on vérifie d'abord la mesure elle-même.

> [!warning]
> **La mesure n'est pas neutre.** Brancher un instrument modifie légèrement le circuit : un voltmètre y prélève un peu de courant, une sonde d'oscilloscope ajoute une capacité. Sur les montages courants l'effet est négligeable, mais sur un nœud à très haute impédance une mesure peut fausser ce qu'elle observe. Le réflexe : se demander si l'instrument est adapté au point mesuré.

![Confrontation d'une mesure à l'attendu : une valeur mesurée de 4,98 V tombe dans la plage attendue de 5 V ± 5 % ; la mesure est conforme, le sous-ensemble est validé.](/ressources/img/instruments-de-mesure-confrontation.svg)

## Pièges

**Ampèremètre en parallèle = court-circuit.** Un ampèremètre a une résistance quasi nulle ; le brancher en parallèle (comme un voltmètre) crée un court-circuit qui grille son fusible, voire le montage. Le courant se mesure **en série**, en ouvrant le circuit. C'est la première cause de fusible grillé (voir [[multimetre|multimètre]]).

**Dépasser le calibre.** Mesurer 230 V sur un calibre prévu pour 20 V, ou clipper une sonde sur une tension supérieure à sa limite, endommage l'instrument. Au doute, partir large.

**Oublier la masse commune (oscilloscope).** La masse d'un oscilloscope de paillasse est reliée à la **terre du secteur** : clipper sa pince de masse sur un point qui n'est pas la masse du circuit crée un court-circuit par la terre. Toujours relier la masse de la sonde à la masse du montage (voir [[oscilloscope|oscilloscope]]).

**Confondre les natures.** Lire une tension alternative sur le calibre continu (ou l'inverse), confondre valeur efficace, crête et crête-à-crête, oublier qu'une mesure de résistance se fait **hors tension** : autant d'erreurs qui donnent un chiffre faux mais lisible.

**Croire l'instrument sans le confronter.** Un nombre affiché n'est une information que rapporté à un attendu. Avant de mesurer, se demander *« quelle valeur devrais-je trouver ? »*.

## Raccrochage projet

- **Phase de [[preuve-de-concept|preuve de concept]]** — mesurer un sous-ensemble réel (alimentation, étage capteur, signal de commande) pour confirmer qu'il se comporte comme prévu avant de l'intégrer. La mesure transforme « ça devrait marcher » en « ça marche, mesuré ».
- **Phase d'[[integration-et-tests|intégration et tests]]** — les instruments fournissent les **relevés** qui qualifient le système assemblé et nourrissent le rapport de tests.
- **Du modèle au réel** — la courbe [[simulation-electronique|simulée]] est l'attendu, la trace de l'[[oscilloscope|oscilloscope]] est le constat : simulation idéale, datasheet normative, mesure réelle, trois facettes d'un même signal (voir [[chronogramme|chronogramme]]).

## Voir aussi

- [[multimetre|Multimètre]] — mesurer tension, courant, résistance, continuité (tuto outil)
- [[oscilloscope|Oscilloscope]] — observer une forme d'onde dans le temps (tuto outil)
- [[generateur-de-signaux|Générateur de signaux (GBF)]] — injecter un signal calibré : tester par stimulus connu (tuto outil)
- [[analyseur-logique|Analyseur logique]] — suivre et décoder plusieurs lignes numériques (tuto outil)
- [[precision-de-mesure|Précision, justesse, fidélité]] — ce que vaut vraiment le chiffre affiché
- [[simulation-electronique|Simulation électronique]] — le pendant logiciel : calculer l'attendu avant de câbler
- [[chronogramme|Chronogramme]] — lire une forme d'onde, idéale comme réelle
- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — savoir *ce* qu'on mesure avant de le mesurer (prérequis)
- [[niveaux-de-tension|Niveaux de tension]] — connaître les seuils pour mesurer, et ne pas dépasser le calibre
- [[lire-une-datasheet|Lire une datasheet]] — d'où vient la valeur attendue
