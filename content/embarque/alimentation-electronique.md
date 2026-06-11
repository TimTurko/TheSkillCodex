---
title: Concevoir une alimentation électronique
type: notion
tags:
  - eee
  - notion
  - puissance
prerequis:
  - chaine-energie
aa:
  - RA-EEE-C03-2/EEE/3
  - RA-PROJET-C03-3/EEE/5
phases:
  - concept
draft: false
---

**Concevoir une alimentation électronique**, c'est fournir à chaque partie d'un système la tension et le courant dont elle a besoin, **proprement et en sécurité** : choisir une source, la réguler à la bonne tension, absorber les pics de consommation, organiser les retours de masse et protéger l'ensemble des fautes de branchement. C'est l'ingénierie du bloc *alimenter / distribuer* de la [[chaine-energie|chaîne d'énergie]] — l'étage le plus sous-estimé d'un projet, ignoré quand tout marche, accusé à tort dès qu'un autre défaut survient.

## À quoi ça sert ?

Tant qu'un montage tient sur table, alimenté en USB, la question ne se pose pas. Elle surgit dès qu'on ajoute de la puissance — un moteur, un relais, un module radio, un bandeau de LED : le courant grimpe, des pointes apparaissent, et la tension de la logique se met à bouger. Raisonner l'alimentation **avant** d'en arriver là permet de :

- **dimensionner la source** sur la consommation réelle, pointes comprises, et non sur le courant moyen ;
- **garder la tension stable** quand un actionneur démarre, pour que le [[microcontroleur|microcontrôleur]] ne se réinitialise pas ;
- **isoler le bruit de puissance** du signal, en séparant ce qui transporte de l'énergie de ce qui transporte de l'information ;
- **rendre les fautes non destructrices** : un court-circuit ou une inversion de polarité doivent couper, pas griller.

La démarche relève de la conception du système ([[concept|phase de concept]], puis dimensionnement au [[dossier-technique|dossier technique]]). Sa mise en œuvre concrète sur une carte donnée — par exemple [[arduino-alimentation|alimenter une carte Arduino]] — applique ces principes à un matériel précis.

## Choisir la source

Tout part d'une **source**, et son choix précède la régulation : c'est elle qui fixe ce qu'il y aura à réguler. Quatre familles couvrent l'essentiel des projets :

- l'**USB** (5 V) — la source des essais sur table : gratuite, sûre, mais limitée en courant (0,5 A sur un port d'ordinateur classique, jusqu'à ~3 A sur un chargeur récent) et inadaptée dès que des moteurs entrent en jeu ;
- les **piles et accus** — la mobilité, au prix d'une tension qui glisse en se déchargeant (un accu Li-ion descend de 4,2 à 3,0 V) : la régulation devient obligatoire, et le lithium exige un circuit de protection et de charge dédié ;
- le **bloc secteur** (9 à 12 V typiques) — la puissance stationnaire, simple et abondante, à dimensionner sur la pointe de consommation ;
- l'**alimentation de laboratoire** — la source des phases d'essai : tension et limite de courant réglables (voir *Tension constante ou courant constant* plus bas), c'est elle qui protège un montage neuf.

Le choix se joue sur quatre critères : la **tension** (compatible avec l'étage de régulation en aval), le **courant de pointe** disponible (jamais le courant moyen), l'**autonomie** si le système est mobile, et la **sécurité** de mise en œuvre. Les valeurs concrètes pour une carte donnée — connecteurs, plages admises, courants disponibles par broche — se lisent dans la fiche de la carte, par exemple [[arduino-alimentation|alimenter une carte Arduino]].

## Réguler la tension

Une source brute (une batterie qui se décharge de 8,4 à 6 V, un secteur redressé à 9-12 V) ne fournit pas directement le 5 V ou le 3,3 V stable qu'attend la logique. Un **régulateur** ramène une entrée variable à une sortie fixe. Deux familles existent, deux compromis.

![Deux façons de produire 5 V à partir de 9 V. À gauche, un régulateur linéaire : un élément série laisse passer ce qu'il faut et dissipe le reste, soit (Vin moins Vout) multiplié par le courant, sous forme de chaleur. À droite, un régulateur à découpage : un interrupteur commute rapidement à travers une inductance et un condensateur, avec très peu de pertes mais un bruit de commutation.](/ressources/img/alimentation-electronique-regulation.svg)

Le **régulateur linéaire** (un LDO, *low-dropout*) est simple, silencieux et bon marché : il se comporte comme une résistance pilotée qui absorbe l'écart entre l'entrée et la sortie. Le revers est mécanique : tout ce qu'il n'envoie pas en sortie part en **chaleur**, à hauteur de (Vin − Vout) × I. Produire 5 V à partir de 9 V sous 0,5 A dissipe (9 − 5) × 0,5 = 2 W — assez pour brûler les doigts sans dissipateur. On le réserve aux faibles écarts de tension et aux faibles courants, là où sa propreté électrique prime.

Le **régulateur à découpage** (*switching*) commute l'énergie par paquets à travers une inductance : il ne dissipe presque rien et atteint des rendements de 85 à 95 %, même avec un grand écart de tension. Le prix à payer est la complexité — plus de composants, un dessin de carte soigné — et un **bruit de commutation** qu'il faut parfois filtrer. C'est le choix par défaut dès que le courant ou l'écart de tension devient important, et sur batterie où chaque watt perdu raccourcit l'autonomie.

*Le détail des topologies (abaisseur, élévateur, leurs équations) relève du cours d'électronique de puissance ; ce qui se décide au niveau du projet, c'est lequel choisir et comment le dimensionner.*

## Découpler

Un régulateur réagit vite, mais pas instantanément. Quand un composant appelle une pointe de courant brève — un module radio qui émet, un moteur qui démarre, une sortie logique qui bascule —, la tension locale s'effondre le temps que la régulation rattrape. Un **condensateur de découplage** placé **au plus près** du composant joue le rôle de petit réservoir : il fournit la pointe localement, puis se recharge.

On combine deux types par étage : un **condensateur réservoir** (*bulk*, quelques dizaines à centaines de µF) qui encaisse les grosses variations, et un **condensateur céramique** (100 nF typique) collé à la broche d'alimentation, qui répond aux variations les plus rapides. La règle d'or tient en deux mots : **au plus près**. Un découplage à dix centimètres du composant, au bout d'une longue piste, ne sert presque à rien — l'inductance de la piste annule son effet.

C'est l'absence de découplage qui explique une bonne part des comportements erratiques « inexpliqués » : un capteur qui donne des valeurs aberrantes pendant qu'un moteur tourne, un microcontrôleur qui plante par intermittence. La pointe est trop brève pour se voir au [[multimetre|multimètre]] — elle se débusque à l'[[oscilloscope|oscilloscope]].

## Router les masses

La masse (le 0 V) n'est pas un fil neutre : c'est le **chemin de retour** de tous les courants. Or un fil a une résistance, si petite soit-elle, et tout courant qui le traverse y crée une chute de tension. Si le retour d'un moteur et la référence d'un capteur partagent le même bout de fil, le courant du moteur **décale la référence** du capteur : le signal mesuré est faussé, sans qu'aucun composant ne soit en cause.

![Deux façons de câbler les masses de trois charges (microcontrôleur, capteur, moteur). À gauche, en chaînage : les retours sont mis en série, et le fort courant du moteur traverse le segment de masse partagé par la logique, dont il décale la référence. À droite, en étoile : chaque retour rejoint séparément un point de masse commun unique, si bien que le courant du moteur n'emprunte jamais le chemin du signal.](/ressources/img/alimentation-electronique-masses.svg)

D'où la distinction entre **masse de puissance** (retours des actionneurs, gros courants, parfois bruyants) et **masse de signal** (retours de la logique et des capteurs, faibles courants à protéger). L'objectif est qu'elles ne partagent pas leurs chemins de retour, tout en restant **un seul et même potentiel de référence**. La technique de base est la **masse en étoile** : chaque retour rejoint un **point commun unique** plutôt que d'être chaîné aux autres. À l'inverse, des masses **en chaînage** (*daisy-chain*) font transiter les gros courants par les segments partagés et y injectent leur bruit.

La masse en étoile est la technique du câblage filaire et de la breadboard. Sur un [[pcb|circuit imprimé]], elle se généralise en **plan de masse** : une couche entière dédiée au 0 V, qui offre à chaque retour un chemin court et de faible impédance — le réflexe à prendre dès la conception de la carte.

Quand on dispose de deux alimentations distinctes — une pour la logique, une pour les moteurs —, la même règle impose une **masse commune** : sans référence partagée, les signaux logiques échangés entre les deux mondes n'ont aucun sens. C'est l'erreur classique du débutant qui alimente ses moteurs « à part » et oublie de relier les masses.

## Tension constante ou courant constant

La plupart des alimentations maintiennent une **tension constante** (CV, *constant voltage*) : elles imposent 5 V et laissent la charge tirer le courant qu'elle veut, jusqu'à une limite. C'est le mode attendu pour de la logique. Mais certaines applications demandent l'inverse — imposer un **courant constant** (CC, *constant current*) et laisser la tension s'ajuster : alimenter une LED de puissance (dont c'est le courant, pas la tension, qui fixe la luminosité et la durée de vie), ou charger une batterie.

Une **alimentation de laboratoire** rend ce comportement visible : on y règle une tension *et* une limite de courant. Tant que la charge consomme peu, l'appareil tient la tension (mode CV). Si la charge réclame plus que la limite — ou en cas de court-circuit —, il bascule en **mode CC** : il plafonne le courant et laisse la tension chuter. Régler cette limite avant un premier essai transforme un court-circuit potentiellement destructeur en simple repli inoffensif : c'est le réflexe à prendre pour tester un montage neuf.

## Protéger

Une alimentation bien conçue rend les fautes courantes **non destructrices**. Trois protections couvrent l'essentiel des projets.

Contre le **court-circuit**, une limitation de courant : un **fusible**, qui coupe définitivement au-delà d'un seuil, ou un repli électronique qui plafonne le courant (comme le mode CC). On dimensionne le seuil un peu au-dessus de la pointe normale attendue, jamais en dessous, sous peine de coupures intempestives.

Contre l'**inversion de polarité** — brancher le + et le − à l'envers, faute classique sur un connecteur non détrompé —, une **diode** en série (simple, mais elle chute ~0,7 V et chauffe) ou, mieux, un **MOSFET** monté en protection (chute négligeable). Sans elle, une inversion peut détruire instantanément les composants alimentés.

Contre les **surtensions** (pic à la coupure d'une charge inductive, décharge électrostatique, transitoire secteur), une **diode TVS** ou une diode Zener écrête la pointe avant qu'elle n'atteigne les circuits sensibles. C'est particulièrement utile près d'un relais ou d'un moteur, dont la coupure renvoie une surtension.

La règle générale tient en une phrase : prévoir qu'on **se trompera** au branchement et au câblage, et faire en sorte que l'erreur coûte un fusible, pas une carte.

## Exemple — Le bras 3 axes

![Architecture d'alimentation du bras 3 axes. Une source unique passe par une protection contre l'inversion, puis se sépare en deux rails : un rail de puissance protégé par un fusible alimente les drivers et les moteurs ; un régulateur 5 V alimente le microcontrôleur, les codeurs et l'IHM. Chaque rail est découplé au plus près. Les retours de masse des deux rails rejoignent un point de masse commun unique, en étoile, près de la source.](/ressources/img/alimentation-electronique-bras-3-axes.svg)

Sur le bras du fil rouge, le bloc *alimenter / distribuer* de la chaîne d'énergie se concrétise en **deux rails issus d'une même source**. En entrée, une **protection contre l'inversion** garde tout le système d'un branchement à l'envers. La source se sépare ensuite :

- un **rail de puissance**, protégé par un **fusible** dimensionné sur la pointe des trois moteurs, alimente les drivers puis les moteurs ;
- un **régulateur 5 V** alimente la logique : le microcontrôleur, les codeurs et l'IHM.

Chaque rail porte son **découplage** au plus près : un condensateur réservoir aux bornes des drivers, où les appels de courant des moteurs sont brutaux, un céramique à la broche d'alimentation du microcontrôleur. Enfin, les retours des deux rails rejoignent une **masse commune en étoile** près de la source : le courant des moteurs ne traverse jamais la référence des codeurs, dont la position mesurée resterait sinon entachée de bruit à chaque mouvement. C'est cette boucle propre — commande qui descend, mesure qui remonte sans parasitage — qui permet au bras de savoir où il se trouve.

## Pièges

**Dimensionner sur le courant moyen.** Une alimentation se choisit sur la **pointe** de consommation (démarrage moteur, émission radio), pas sur la moyenne. Une marge de l'ordre de 1,5× sur la pointe évite les chutes en limite de charge.

**Imposer une forte chute à un régulateur linéaire.** Un LDO qui ramène 12 V à 5 V sous quelques centaines de mA chauffe vite : (Vin − Vout) × I part en chaleur. Baisser la tension d'entrée, ou passer au découpage.

**Tirer la puissance à travers le régulateur de la logique.** Un moteur ou un servo branché sur le rail 5 V de la carte fait transiter sa pointe de courant par un régulateur prévu pour la logique : chute de tension, reset du microcontrôleur, voire destruction du régulateur. La puissance prend son propre rail, directement depuis la source.

**Masses en chaînage.** Mettre les retours en série fait transiter le courant de puissance par la masse du signal et y injecte son bruit. Une masse en étoile, vers un point commun unique, sépare les chemins.

**Oublier la masse commune entre deux alimentations.** Deux sources sans référence partagée : les signaux logiques échangés n'ont aucun sens. La masse commune n'est pas optionnelle.

**Découplage trop loin.** Un condensateur de découplage placé loin du composant, au bout d'une piste, ne joue plus son rôle. Au plus près de la broche, toujours.

**Aucune protection au branchement.** Un connecteur non détrompé finira par être inversé. Une diode ou un MOSFET de protection transforme la faute en non-événement.

## Cas particulier — Plusieurs tensions à fournir

Beaucoup de systèmes mélangent les tensions : 5 V pour une logique ancienne ou des capteurs, 3,3 V pour un microcontrôleur moderne ou un module radio, une tension plus élevée pour les moteurs. On parle alors de **rails** multiples. Deux stratégies se combinent : partir de la source la plus haute et **cascader** les régulateurs (le rail moteur alimente un régulateur 5 V, qui alimente lui-même un régulateur 3,3 V), ou tirer chaque rail en parallèle depuis la source. La cohabitation des 5 V et 3,3 V sur les **signaux** est un sujet distinct, celui des [[niveaux-de-tension|niveaux de tension]] : une chose est de *fournir* deux tensions, une autre de faire *dialoguer* deux logiques qui n'ont pas le même niveau haut.

## Aller plus loin

- **Le rendement et l'autonomie sur batterie** — quand l'énergie est comptée, le choix découpage contre linéaire et la mise en veille ([[deep-sleep|deep sleep]]) déterminent la durée de fonctionnement.
- **Les circuits de gestion d'alimentation (PMIC)** — sur les systèmes complexes, une puce dédiée gère plusieurs rails, leur séquencement et la charge de la batterie.
- **La compatibilité électromagnétique (CEM)** — le bruit de commutation d'un découpage et les boucles de masse sont aussi des sources de perturbations rayonnées, traitées dès la conception de la [[pcb|carte]].

## Voir aussi

- [[chaine-energie|Chaîne d'énergie]] — le modèle d'ensemble ; cette fiche en détaille le bloc *alimenter / distribuer*
- [[arduino-alimentation|Alimenter une carte Arduino]] — la mise en œuvre concrète de ces principes sur une carte précise
- [[niveaux-de-tension|Niveaux de tension]] — faire dialoguer des logiques 3,3 / 5 V (le signal, pas la puissance)
- [[pcb|Concevoir une carte (PCB)]] — router proprement l'alimentation : largeurs de pistes, plans de masse, découplage
- [[instruments-de-mesure|Instruments de mesure]] — vérifier que la tension tient en charge et débusquer l'ondulation
- [[dossier-technique|Dossier technique]] — où l'alimentation finale du démonstrateur entre au BOM, avec sa marge
