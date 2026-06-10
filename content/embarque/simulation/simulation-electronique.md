---
title: Simulation électronique
type: notion
tags:
  - eee
  - notion
prerequis:
  - analyse-de-schema-electronique
aa:
  - RA-PROJET-C03-3/EEE/3
  - RA-PROJET-C03-3/EEE/4
phases:
  - concept
  - preuve-de-concept
draft: false
---

**Simuler un système électronique**, c'est en calculer le comportement sur ordinateur — tensions, courants, formes d'onde — **avant de câbler quoi que ce soit**. On vérifie qu'une idée tient, on explore des variantes, on évite de griller un composant sur une fausse manœuvre — le tout sans fer à souder. Cette fiche est le **hub d'entrée** vers la simulation : elle pose la **méthode** commune à tous les outils et la façon d'en **lire les résultats**, puis oriente vers le simulateur adapté — des outils analogiques ([[falstad|Falstad]], [[ltspice|LTspice]]) aux simulateurs de cartes à microcontrôleur ([[wokwi|Wokwi]], [[tinkercad|Tinkercad]]).

![Schéma du cycle de simulation : un schéma électronique saisi sur ordinateur alimente un moteur de calcul qui produit des courbes (tensions et courants), lesquelles sont confrontées au comportement attendu ; une flèche de retour indique qu'un écart renvoie à la modification du schéma, avant tout passage au câblage réel.](/ressources/img/simulation-electronique-cycle.svg)

## À quoi ça sert ?

Câbler pour voir « si ça marche » coûte du temps, des composants, et parfois la fumée d'une puce mal alimentée. La simulation déplace cette boucle d'essai-erreur sur l'ordinateur, où elle est gratuite et instantanée. Elle sert à :

- **valider une conception** avant de commander des composants ou de tracer une carte — vérifier qu'un montage produit bien la tension, le courant ou la forme d'onde attendus ;
- **explorer** — « que se passe-t-il si je double cette résistance ? si l'alimentation chute à 4,5 V ? » — en changeant une valeur et en relançant, sans rien recâbler ;
- **ne pas détruire** — tester une idée risquée (un pont en H, une protection) sans mettre un vrai composant en danger ;
- **comprendre** — voir *où* passe le courant et *comment* une tension évolue rend tangible ce qu'un [[analyse-de-schema-electronique|schéma]] décrit statiquement.

La simulation se mène en phase de [[concept|concept]] (explorer et figer une architecture électronique) et surtout en [[preuve-de-concept|preuve de concept]] (valider un sous-ensemble avant de le monter). Elle ne **remplace pas** la mesure réelle — elle la prépare (voir *Pièges* et le lien avec l'oscilloscope).

## Les trois familles d'analyse

Un simulateur ne répond pas à une question unique : il propose plusieurs **types d'analyse**, chacun taillé pour une question différente. Trois couvrent l'essentiel des besoins en projet.

| Analyse | Question à laquelle elle répond | Ce qu'elle produit |
| --- | --- | --- |
| **Point de fonctionnement** *(DC)* | « quelles tensions et courants au repos ? » | une valeur par nœud (régime établi) |
| **Analyse transitoire** *(transient)* | « comment ça évolue dans le temps ? » | une [[chronogramme\|forme d'onde]] tension/courant = f(temps) |
| **Analyse fréquentielle** *(AC)* | « comment ça réagit selon la fréquence ? » | un gain/déphasage = f(fréquence) (filtre, bande passante) |

Le réflexe central : **choisir l'analyse en fonction de la question**. Un pont diviseur au repos se lit en point de fonctionnement ; la charge d'un condensateur se voit en transitoire ; la bande passante d'un filtre se mesure en fréquentiel. Lancer la mauvaise analyse, c'est obtenir une réponse juste à une question qu'on ne se posait pas.

## Méthode pas à pas

Quel que soit l'outil, une simulation suit toujours le même enchaînement.

1. **Saisir le schéma.** Placer les composants, renseigner leurs **valeurs** et leurs **modèles**, ajouter les **sources** (alimentation, générateur de signal). C'est ici que se joue la fidélité du résultat (voir *Pièges*).
2. **Choisir l'analyse** adaptée à la question posée (point de fonctionnement / transitoire / fréquentiel).
3. **Placer les sondes.** Désigner ce qu'on veut observer — une tension en un nœud, le courant dans une branche. On ne lit bien que ce qu'on a explicitement demandé de tracer.
4. **Lancer**, puis lire les courbes ou les valeurs.
5. **Confronter à l'attendu.** Un résultat de simulation ne vaut que rapporté à un **ordre de grandeur attendu** — c'est l'étape qui transforme une jolie courbe en information exploitable, traitée juste en dessous.

## Interpréter les résultats

C'est la moitié du travail, et la plus négligée : une simulation qui tourne ne dit rien tant qu'on n'a pas **lu** ce qu'elle montre. Trois gestes.

**Lire la grandeur.** Identifier l'axe, l'unité et l'échelle avant toute chose : une courbe « qui monte » ne veut rien dire sans savoir si elle culmine à 3,3 V ou à 30 V, en 1 ms ou en 1 s. Repérer les valeurs clés — maximum, valeur au repos, temps de montée, fréquence de coupure.

**Confronter à l'attendu.** Comparer le résultat à ce que prédit la théorie, la [[lire-une-datasheet|datasheet]] ou le cahier des charges. Un pont diviseur 10 kΩ / 10 kΩ alimenté en 5 V *doit* donner 2,5 V à son point milieu : si la simulation affiche 2,5 V, elle confirme la saisie ; si elle affiche 5 V, c'est qu'un fil manque ou qu'une charge écrase le nœud. **La simulation se valide d'abord sur un cas dont on connaît la réponse.**

**Décider.** Trois issues possibles : la conception est **validée** (on passe au montage) ; elle est **à revoir** (une valeur ne convient pas, on itère) ; ou le résultat est **aberrant** — et un résultat aberrant trahit presque toujours une **erreur de saisie ou de modèle**, pas une découverte physique. Le réflexe devant l'invraisemblable n'est pas d'y croire, mais de relire le schéma.

![Lecture d'une courbe transitoire : une tension qui monte de 0 vers un palier, avec repérés sur le graphe la valeur finale (palier), la constante de temps, et une ligne en pointillés marquant la valeur attendue par la théorie ; un encart compare « simulé » et « attendu » et conclut que le montage est validé.](/ressources/img/simulation-electronique-lecture-courbe.svg)

## Choisir un simulateur

Les simulateurs se rangent en deux familles selon ce qu'on simule : l'**électronique analogique** (composants discrets, signaux continus) ou les **cartes à microcontrôleur** (où le *code* pilote le circuit). Le choix dépend de la nature du sous-ensemble étudié — et rien n'interdit d'utiliser les deux dans un même projet.

| Outil | Famille | Particularité | Cas d'usage |
| --- | --- | --- | --- |
| [[falstad\|Falstad]] | analogique | navigateur, sans compte, **visualise le courant qui circule** | comprendre et explorer vite, pédagogie |
| [[ltspice\|LTspice]] | analogique *(SPICE)* | gratuit (Analog Devices), analyses complètes et précises | dimensionnement sérieux, alimentations, filtres |
| [[wokwi\|Wokwi]] | microcontrôleur | navigateur, ESP32/Arduino + capteurs, **exécute le code** | valider un montage MCU + code avant le matériel |
| [[tinkercad\|Tinkercad]] *([A])* | microcontrôleur | bac à sable Arduino + électronique simple, en ligne | premiers pas, prototypage débutant |

Deux repères pour s'orienter. Pour de l'**analogique** — un pont diviseur, un filtre, un étage de puissance — on reste sur Falstad (pour comprendre) ou LTspice (pour dimensionner). Pour un **montage à microcontrôleur** où le comportement dépend du programme, on prend Wokwi ou [[tinkercad|Tinkercad]], qui exécutent le [[cpp|code]] en même temps que le circuit.

> [!note]
> **Simuler n'est pas dessiner.** Des outils comme *Fritzing* servent à **représenter** un montage (vue breadboard, schématique, export vers le [[pcb|PCB]]) — pas à en simuler le comportement. Ils répondent à « à quoi ressemble mon câblage ? », pas à « que fait mon circuit ? ». À ne pas confondre avec les simulateurs ci-dessus.

## Pièges

**Croire la simulation = la réalité.** Le simulateur calcule sur des **modèles idéaux** : sauf à les renseigner, il ignore les tolérances des composants, les résistances parasites, l'échauffement, le bruit. « Ça marche en simulation » signifie « la logique du montage est juste », pas « ça marchera sur la table ».

**Garbage in, garbage out.** Une valeur fausse ou un mauvais modèle de composant produit un résultat **faux mais crédible**. La simulation ne corrige pas une erreur de saisie, elle la propage proprement. D'où l'importance de valider d'abord sur un cas connu.

**Lancer la mauvaise analyse.** Chercher une bande passante avec une analyse transitoire, ou un régime établi avec un balayage fréquentiel, donne une réponse hors sujet. L'analyse se choisit d'après la question.

**Oublier de confronter.** Une courbe sans ordre de grandeur attendu n'est qu'un dessin. Toujours se demander *« quelle valeur devrais-je trouver ? »* avant de lancer, pour avoir un mètre étalon au moment de lire.

**Sur-modéliser un montage trivial.** Sortir LTspice et ses modèles SPICE complets pour vérifier qu'une LED s'allume fait perdre plus de temps qu'un calcul de tête. L'outil suit le besoin : Falstad pour comprendre, SPICE pour dimensionner finement.

## Raccrochage projet

- **Phase de [[concept|concept]]** — la simulation aide à **explorer et figer une architecture électronique** : comparer deux étages de puissance, vérifier qu'une alimentation tient la charge, avant de trancher dans une [[matrice-de-decision|matrice de décision]].
- **Phase de [[preuve-de-concept|preuve de concept]]** — simuler un sous-ensemble **avant de le câbler ou de commander les composants** : c'est quelques minutes qui épargnent une carte à refaire ou un composant grillé.
- **Vers la mesure réelle** — la courbe simulée est l'**attendu** auquel on confrontera ensuite la trace de l'[[oscilloscope|oscilloscope]] sur le vrai montage. Simulation idéale, datasheet normative, mesure réelle : trois facettes d'un même signal (voir [[chronogramme|chronogramme]]).

## Voir aussi

- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — lire le schéma *statique* que la simulation fait *vivre* (prérequis)
- [[lire-une-datasheet|Lire une datasheet]] — d'où viennent les valeurs et modèles à saisir
- [[chronogramme|Chronogramme]] — lire une forme d'onde, idéale comme réelle
- [[niveaux-de-tension|Niveaux de tension]] — une simulation aide à vérifier la compatibilité des niveaux avant câblage
- [[falstad|Falstad]] · [[ltspice|LTspice]] — simulateurs analogiques (tutos outils)
- [[wokwi|Wokwi]] · [[tinkercad|Tinkercad]] — simulateurs de cartes à microcontrôleur (tutos outils)
- [[instruments-de-mesure|Instruments de mesure]] — le pendant réel : mesurer sur la table ce que la simulation a prédit
