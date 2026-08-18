---
title: Filtrer des mesures
type: notion
tags:
  - eee
  - notion
aliases:
  - filtrage
  - filtre numérique
  - moyenne glissante
  - filtre médian
prerequis:
  - adc
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
---

**Filtrer** une mesure, c'est atténuer ses variations parasites pour ne garder que l'information utile. Une mesure de capteur n'est jamais parfaitement stable : le convertisseur ([[adc|ADC]]) arrondit, l'électronique bruite, le câble capte, le capteur se trompe parfois. Le filtrage est le traitement — logiciel ou matériel — qui rend cette mesure exploitable. Il n'est jamais gratuit : **tout filtre échange de la stabilité contre de la réactivité**.

![Deux courbes d'une grandeur qui passe brusquement d'un niveau bas à un niveau haut : la mesure brute en gris oscille fortement, la mesure filtrée par moyenne glissante en ambre oscille peu mais atteint la mi-hauteur cinq mesures plus tard.|640](/ressources/img/filtrage/bruit-et-retard.svg)

## À quoi ça sert ?

Une mesure brute se lit très bien au moniteur série et très mal dans un programme. Trois symptômes reviennent en projet :

- **un seuil qui claque** — la mesure oscille autour de la valeur de déclenchement, et la sortie bascule dix fois par seconde ;
- **un affichage illisible** — le dernier chiffre danse en permanence, alors qu'il est en dessous de ce que le capteur sait garantir ;
- **un actionneur qui vibre** — une régulation qui recopie le bruit de son capteur le transmet au moteur.

Dans les trois cas, le programme réagit à quelque chose qui n'existe pas. Filtrer, c'est décider **ce qu'on accepte de ne plus voir**.

## Trois bruits, trois remèdes

L'erreur de débutant est de chercher « le bon filtre ». Il n'y en a pas : on choisit un remède **en fonction de la forme du défaut**, qui se lit à l'œil en traçant quelques secondes de mesure brute.

![Trois tracés d'une mesure censée être constante : à gauche une dispersion permanente et désordonnée, au milieu une mesure propre interrompue par deux valeurs isolées très éloignées, à droite une ondulation régulière et périodique.|640](/ressources/img/filtrage/trois-bruits.svg)

- **Dispersion permanente** — bruit électronique, quantification de l'ADC, contacts imparfaits. Typiquement ±1 à ±3 pas de conversion. Remède : **moyenner**.
- **Valeurs isolées absurdes** — une mesure ratée de temps en temps, sur fond de mesures correctes : un écho ultrason qui part de travers, une trame mal lue. Remède : **médiane**.
- **Ondulation régulière** — une périodicité nette, souvent le secteur à 50 Hz capté par un câble long, ou l'alimentation polluée par un moteur. Remède : **la cause d'abord** — reprendre la masse, raccourcir ou blinder le câble, [[decouplage|découpler]] l'alimentation. Un filtre qui masque un défaut de câblage le laisse en place pour la suite du projet.

## Comment ça marche ?

Trois traitements logiciels couvrent l'essentiel des besoins d'un projet, plus un traitement matériel qui agit là où le logiciel ne peut plus rien.

**La moyenne glissante.** On conserve les `N` dernières mesures et on renvoie leur moyenne. Sur du bruit aléatoire, la dispersion est divisée par **√N** : moyenner 10 mesures ne divise donc pas le bruit par 10, mais par un peu plus de 3 — et il en faut 100 pour le diviser par 10. Le coût est double : `N` valeurs à garder en mémoire, et un retard d'environ **N/2 mesures** (exactement `(N−1)/2`).

**Le filtre exponentiel.** Une seule ligne, une seule variable gardée : `y ← y + α × (x − y)`, où `x` est la nouvelle mesure et `α` un coefficient entre 0 et 1. La sortie se déplace à chaque fois d'une fraction `α` de l'écart qui la sépare de la mesure. Proche de 1, le filtre est réactif et lisse peu ; proche de 0, il est très lisse et très lent. C'est le filtre le plus employé en embarqué parce qu'il ne coûte **aucune mémoire de mesures**. Ordre de grandeur pour se repérer : `α ≈ 0,2` lisse à peu près comme une moyenne sur une dizaine de mesures (l'équivalence usuelle est `α = 2/(N+1)`).

**Le filtre médian.** On garde `N` mesures — 3 ou 5 suffisent, en nombre impair — et on renvoie **la valeur du milieu** une fois triées. Une valeur aberrante, si extravagante soit-elle, se retrouve à une extrémité du tri et disparaît sans influencer le résultat. C'est exactement ce que la moyenne ne sait pas faire : une seule mesure absurde tire la moyenne avec elle. En contrepartie, la médiane ne lisse presque pas le bruit ordinaire. Les deux se combinent très bien : médiane d'abord pour retirer les aberrations, moyenne ensuite pour lisser le reste.

**Le filtre passe-bas RC.** Une résistance en série et un condensateur vers la masse, **avant** l'entrée de l'ADC. Il atténue tout ce qui varie plus vite que sa fréquence de coupure `fc = 1/(2πRC)` — par exemple 1 kΩ et 1 µF donnent ≈ 160 Hz. Contrainte à respecter : l'ADC d'un microcontrôleur veut voir une source de **faible impédance** (moins de 10 kΩ sur AVR), donc on privilégie une petite résistance et un gros condensateur plutôt que l'inverse.

## Le prix du filtrage

Le schéma d'ouverture dit l'essentiel : la courbe filtrée est plus propre, et elle arrive **après**. Le front réel est étalé en rampe ; l'information « ça vient de changer » est retardée d'autant.

Cela reste sans conséquence pour un affichage ou un journal de mesures. Cela en a deux, en revanche, dès que la mesure pilote quelque chose. Un **seuil** est franchi plus tard qu'en réalité — pour un détecteur d'obstacle, le retard se convertit en centimètres. Et dans une boucle d'[[asservissement|asservissement]], le filtre ajoute un déphasage qui peut **déstabiliser la régulation** : le correcteur agit sur une image du passé, corrige trop tard, dépasse, et le système se met à osciller. D'où la règle : **filtrer le moins possible**, et vérifier le comportement après filtrage plutôt que de choisir `N` au hasard.

## Pièges

**Moyenner des mesures qui ne sont pas indépendantes.** Lire l'ADC dix fois d'affilée en une milliseconde ne divise pas le bruit par √10 : si le parasite est plus lent que la rafale, les dix valeurs portent **la même** erreur, et leur moyenne aussi. Le gain en √N suppose des mesures espacées — donc une cadence d'échantillonnage régulière, ce que garantit un [[timer|timer]].

**Filtrer un signal logique.** Un bouton qui rebondit ne se moyenne pas : c'est un problème d'anti-rebond, traité autrement (voir [[arduino-entree-tor|lire une entrée TOR]]). Le filtrage s'applique à une grandeur continue, pas à un état binaire.

**Confondre lisser et corriger.** Un filtre supprime la **dispersion** ; il ne corrige aucun **biais**. Une mesure fausse de 2 °C reste fausse de 2 °C après filtrage — et le filtre la rend même plus convaincante, puisqu'elle ne bouge plus. La distinction est celle de la [[precision-de-mesure|fidélité et de la justesse]] : le filtrage améliore la première et ne touche pas la seconde.

**Croire qu'on gagne des bits.** Moyenner peut faire apparaître des décimales sous le pas de l'ADC, mais seulement **si du bruit était déjà présent** pour faire basculer la conversion d'un palier à l'autre. Sur une mesure parfaitement stable, moyenner mille fois le même palier redonne ce palier — et la résolution affichée devient un mensonge.

**Filtrer trop.** Un `N` généreux donne une courbe magnifique et un système qui ne réagit plus. Le réflexe est de partir petit (`N = 4`, ou `α = 0,3`), d'observer, et d'augmenter seulement si le symptôme persiste.

## Cas particulier — ce que le logiciel ne peut plus rattraper

Un filtre logiciel travaille sur ce que l'ADC a déjà converti. Or un parasite qui varie **plus vite que la cadence d'échantillonnage** ne se présente pas comme un parasite rapide : il se replie dans la bande utile et prend l'apparence d'une lente ondulation, indiscernable de la vraie mesure. Aucune moyenne ne l'enlèvera, parce qu'à ce stade il ressemble au signal.

C'est la seule raison qui rend le **passe-bas RC matériel** irremplaçable : posé avant l'ADC, il supprime ces variations rapides **avant** qu'elles ne soient converties. Un signal capté par un long câble, ou prélevé près d'un moteur, mérite ce condensateur bien plus qu'un filtre logiciel sophistiqué.

## Voir aussi

- [[adc|ADC]] — la conversion en amont, et le pas de quantification qui borne la mesure
- [[precision-de-mesure|Précision, justesse, fidélité]] — ce que le filtrage améliore, et ce qu'il ne corrige pas
- [[arduino-capteur-analogique|Lire un capteur analogique (Arduino)]] — le bruit ADC en pratique
- [[arduino-capteur-numerique|Lire un capteur numérique (Arduino)]] — les valeurs aberrantes de l'ultrason
- [[micropython-capteur-analogique|Lire un capteur analogique (MicroPython)]] — la même mécanique côté MicroPython
- [[asservissement|Asservissement]] — pourquoi un filtre trop lourd déstabilise une régulation
- [[timer|Timer]] — la cadence régulière que suppose tout filtrage sérieux
- [[decouplage|Découplage]] — traiter le bruit d'alimentation à la source
- [[arduino-entree-tor|Lire une entrée TOR]] — l'anti-rebond, qui n'est pas du filtrage
