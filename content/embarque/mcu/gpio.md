---
title: GPIO
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur
aa:
  - RA-EEE-C03-2/EEE/4
phases: []
draft: false
---

Une **GPIO** (*General Purpose Input/Output*, entrée/sortie à usage général) est une broche logique d'un [[microcontroleur|microcontrôleur]] qu'on **configure par programme** soit en **entrée** — pour lire un état tout-ou-rien, comme un bouton appuyé ou relâché — soit en **sortie** — pour imposer un niveau haut ou bas, et ainsi allumer une LED ou commander un relais. C'est la brique la plus élémentaire de la famille [[entree-sortie|entrée/sortie]] : un seul bit, lu ou écrit, sans conversion ni protocole.

## À quoi ça sert ?

Une broche logique ne connaît que deux états : **haut** (proche de la tension d'alimentation) et **bas** (proche de la masse). C'est suffisant pour une grande partie des besoins d'un système mécatronique, qui sont par nature binaires : un interrupteur de fin de course est ouvert ou fermé, une LED de signalisation est allumée ou éteinte, un relais est passant ou bloqué.

La GPIO se distingue des deux autres périphériques d'[[entree-sortie|entrée/sortie]] qui traitent, eux, des grandeurs continues : l'[[adc|ADC]] **lit** une tension variable (un capteur analogique), la [[pwm|PWM]] **dose** une commande (vitesse, luminosité). La GPIO, elle, ne fait que constater ou imposer un « 0 » ou un « 1 ». C'est le réflexe par défaut dès qu'une information ou une commande est franchement tout-ou-rien.

## Comment configurer une broche ?

Une même broche peut servir d'entrée ou de sortie ; c'est le programme qui fixe son rôle au démarrage. Au-delà de la direction, deux réglages décident de la façon dont la broche se comporte électriquement : le **tirage** en entrée et le **type de sortie**.

![Trois schémas comparés : une sortie push-pull dont deux interrupteurs internes relient la broche à l'alimentation (haut) ou à la masse (bas) ; une sortie drain ouvert qui ne tire que vers le bas et a besoin d'une résistance pull-up externe pour l'état haut ; une entrée avec résistance de tirage (pull-up) qui maintient un niveau franc au repos.](/ressources/img/gpio-modes.svg)

| Mode | Direction | Ce qu'il fait | État au repos | Usage typique |
| --- | --- | --- | --- | --- |
| Entrée haute impédance *(INPUT)* | entrée | lit le niveau sans charger le circuit | **flottant** (indéfini) | broche pilotée par un signal franc |
| Entrée avec tirage *(INPUT_PULLUP)* | entrée | une résistance interne fixe le repos | « 1 » (pull-up) ou « 0 » (pull-down) | bouton, interrupteur |
| Sortie push-pull *(OUTPUT)* | sortie | impose activement haut **et** bas | imposé par le programme | LED, signal de commande |
| Sortie drain ouvert | sortie | ne tire que vers le bas | « 1 » si pull-up externe | bus partagé ([[i2c|I2C]]), ligne d'alarme commune |

Les noms entre parenthèses (`INPUT`, `INPUT_PULLUP`, `OUTPUT`) sont les constantes que l'on retrouve côté Arduino : ce sont des étiquettes de vocabulaire, la mise en pratique du code est traitée dans [[arduino-gpio|le tuto Arduino GPIO]].

**Push-pull ou drain ouvert ?** Une sortie **push-pull** est le cas courant : elle relie la broche à l'alimentation pour un « 1 » et à la masse pour un « 0 », imposant les deux niveaux de façon nette. Une sortie **drain ouvert** ne sait que tirer la broche vers le bas ; pour l'état haut, elle relâche la broche et compte sur une résistance **pull-up** externe pour la ramener vers l'alimentation. Ce comportement, en apparence handicapé, est exactement ce qu'il faut quand **plusieurs composants partagent une même ligne** : aucun ne pousse activement l'état haut, donc aucun n'entre en conflit avec les autres. C'est le principe de l'[[i2c|I2C]] et des lignes d'alarme communes.

## Le piège du flottant — pourquoi un bouton a besoin d'un tirage

Une entrée en **haute impédance** ne consomme presque rien : c'est sa qualité quand elle lit un signal déjà franc, mais c'est aussi son piège. Si la broche n'est reliée à rien de défini, elle se comporte comme une petite antenne et capte le bruit électrique ambiant : elle **flotte**, et lit un niveau imprévisible, tantôt « 0 », tantôt « 1 ».

C'est exactement ce qui arrive avec un bouton câblé naïvement. Quand le bouton est **appuyé**, il relie la broche à une tension définie ; mais quand il est **relâché**, la broche n'est plus reliée à rien — elle flotte.

![À gauche, un bouton sans résistance de tirage : relâché, la broche n'est reliée à rien, flotte et lit « 0 » ou « 1 » au hasard. À droite, le même bouton avec une résistance pull-up vers l'alimentation et le bouton vers la masse : au repos le niveau est « 1 », l'appui force « 0 », le niveau est toujours défini.](/ressources/img/gpio-flottant.svg)

La parade est une **résistance de tirage**, qui impose un niveau franc au repos. Un **pull-up** (vers l'alimentation) maintient la broche à « 1 » tant que le bouton est relâché, et l'appui la force à « 0 » : la logique est alors **inversée** (repos = 1, appui = 0), ce qui surprend souvent au premier câblage. Un **pull-down** (vers la masse) fait l'inverse. La plupart des microcontrôleurs intègrent un pull-up activable par programme *(INPUT_PULLUP)*, ce qui évite d'ajouter une résistance externe — le réflexe le plus simple pour un bouton.

## L'état des broches à l'allumage

Au moment précis où le système est mis sous tension, le programme n'a pas encore tourné : sa fonction d'initialisation ne s'est pas exécutée, donc **aucune broche n'est encore configurée**. Pendant cette courte fenêtre, la quasi-totalité des microcontrôleurs laissent leurs broches en **entrée haute impédance** — c'est-à-dire flottantes.

Le danger n'est pas pour les broches d'entrée, mais pour ce qu'on a branché **en sortie**. Si une broche commande un relais, un moteur ou un buzzer, et que rien ne fixe son niveau pendant le boot, l'actionneur peut **partir dans un état non maîtrisé** : un relais qui claque, un moteur qui a un soubresaut, une sortie qui s'active une fraction de seconde avant que le programme ne reprenne la main. Sur un bras robotisé ou une machine, ce genre de transitoire est une vraie question de [[securite-et-qualite|sécurité]].

La parade ne se joue pas dans le code, justement parce que le code n'est pas encore là : elle est **matérielle**. On ajoute une résistance de tirage **externe** sur les sorties critiques, dimensionnée pour forcer l'actionneur dans son état sûr (généralement éteint) tant que le microcontrôleur n'a pas pris le contrôle. Compter sur la seule initialisation logicielle pour mettre une sortie dans un état sûr, c'est ignorer la fenêtre de démarrage. La mise en pratique — broches à éviter au démarrage, câblage des tirages de sécurité — est traitée dans [[arduino-gpio-boot|le tuto GPIO au démarrage]].

## Pièges

**Oublier le tirage sur une entrée.** Une broche d'entrée laissée flottante lit du bruit. Tout bouton ou interrupteur exige un pull-up ou un pull-down — interne *(INPUT_PULLUP)* de préférence, externe sinon.

**Tirer trop de courant sur une broche.** Une broche fournit au mieux quelques dizaines de milliampères ; un moteur, une bobine de relais ou une grappe de LED en demandent bien davantage. Brancher une charge gourmande **en direct** met la broche en surintensité et la grille. On passe par un transistor, un *driver* ou un module relais, qui laissent l'alimentation fournir le courant.

![À gauche, montage dangereux : la broche pilote un moteur en direct, le courant dépasse le maximum admissible et grille la broche. À droite, montage correct : la broche commande un transistor à travers une résistance, et c'est le transistor qui laisse passer le fort courant de l'alimentation, la broche ne fournissant qu'un courant de commande.](/ressources/img/gpio-courant-max.svg)

**Confondre logique et niveau électrique.** Un « 1 » logique n'est pas forcément 5 V : c'est le niveau haut du composant, qui peut être 3,3 V. Faire dialoguer deux broches de tensions différentes est un sujet à part entière, traité dans [[niveaux-de-tension|niveaux de tension]].

**Croire la sortie dans un état défini dès la mise sous tension.** Avant que le programme ne configure ses broches, elles sont flottantes — un piège pour les sorties commandant un actionneur (voir la section sur l'état à l'allumage).

**Oublier la logique inversée du pull-up.** Avec un pull-up, le repos vaut « 1 » et l'appui vaut « 0 ». Lire la broche comme si « appuyé » valait « 1 » donne un comportement inversé, source classique de bug au premier essai.

## Voir aussi

- [[entree-sortie|Entrée/sortie]] — la famille de périphériques dont la GPIO est la brique élémentaire
- [[niveaux-de-tension|Niveaux de tension]] — quelle tension réelle se cache derrière un « 0 » et un « 1 », et comment adapter 3,3 V / 5 V
- [[microcontroleur|Microcontrôleur]] — le circuit qui porte les broches GPIO
- [[adc|ADC]] — le pendant en entrée pour les grandeurs continues (lire une tension variable)
- [[pwm|PWM]] — le pendant en sortie pour doser une commande plutôt que l'imposer en tout-ou-rien
- [[interruption|Interruption]] — réagir immédiatement à un changement d'état d'une broche, sans la surveiller en boucle
- [[bus-de-communication|Bus de communication]] — où le drain ouvert prend tout son sens (I2C, lignes partagées)
- [[arduino-gpio|Arduino — GPIO]] — la mise en pratique sur Arduino (bouton, LED, code et câblage)
- [[arduino-gpio-boot|Arduino — GPIO au démarrage]] — l'état des broches au boot en pratique, tirages de sécurité
