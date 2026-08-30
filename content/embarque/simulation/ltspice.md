---
title: LTspice
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - simulation-electronique
aa: []
phases:
  - preuve-de-concept
  - dossier-technique
draft: false
---

**LTspice** (édité gratuitement par Analog Devices) est le simulateur **SPICE** de référence pour le dimensionnement **précis** d'un circuit analogique. Là où [[falstad|Falstad]] fait *comprendre*, LTspice fait *décider* : modèles réels de composants, analyses complètes, résultats fidèles. C'est l'outil que la fiche [[falstad|Falstad]] annonce en clôture, celui qu'on ouvre le jour où il faut **relever** une fréquence de coupure au point −3 dB, et non plus la deviner en changeant la fréquence à la main. Cette fiche est un tuto-outil du hub [[simulation-electronique|simulation électronique]], qui porte la méthode générale. On apprend ici les **gestes**, dans le même ordre que sur Falstad — **lire** un circuit qui tourne, en **modifier** un, puis en **construire** un — précédés d'une étape dont Falstad se passait : **installer**. À suivre l'écran sous les yeux.

> [!note]
> **L'interface est en anglais.** Les noms de menus sont donc cités tels qu'ils s'affichent (*File*, *Simulate*, *View*) au milieu d'une prose française. Autant s'y habituer : ce sont les mêmes libellés dans la documentation d'Analog Devices et dans à peu près tous les tutoriels qu'on trouvera ensuite.

## À quoi ça sert ?

On l'ouvre pour :

- **dimensionner sérieusement** — choisir une valeur de composant en connaissant la marge réelle, pas un ordre de grandeur.
- **balayer une plage entière d'un coup** — demander le gain sur cinq décades et relever la coupure au curseur, là où un simulateur temps réel oblige à changer la fréquence à la main.
- **simuler des composants existants.** Le catalogue embarqué contient les références d'Analog Devices, et un répertoire *Contrib* rassemble celles d'autres fabricants.
- **produire des valeurs citables** dans un [[dossier-technique|dossier technique]] : une coupure relevée sur une courbe, pas estimée à l'œil.

Contrepartie : rien n'est animé, rien ne se recalcule tout seul, et **rien ne s'affiche tant qu'une directive n'a pas dit quelle question on pose**. Pour explorer vite et voir le courant circuler, on reste sur [[falstad|Falstad]].

## Installer LTspice

C'est la seule étape que Falstad n'imposait pas, et elle se règle en quelques minutes.

Le logiciel se télécharge sur le site d'Analog Devices. Il est **gratuit**, sans compte, sans clé et sans limite de taille de circuit, et il n'existe pas de version bridée dont il faudrait sortir plus tard. Deux systèmes sont servis : **Windows** et **macOS**.

> [!warning]
> **Il n'y a pas de version Linux.** C'est une contrainte matérielle, pas un réglage : sur une machine sous Linux, il faut prévoir une autre solution (une machine de l'école, un poste partagé en binôme) ou rester sur [[falstad|Falstad]] pour la partie exploration. Mieux vaut le découvrir en début de projet qu'à la veille d'une revue.

Au premier lancement, la fenêtre est **vide** : ni circuit d'accueil, ni animation, et la plupart des boutons grisés. C'est normal, et c'est la première chose qui déroute quand on arrive de Falstad.

![Fenêtre d'accueil de LTspice au premier lancement : aucun circuit ouvert, la plupart des boutons de la barre d'outils sont grisés, et la barre d'état en bas indique seulement que le logiciel est prêt.|420](/ressources/img/ltspice/interface.png)

On ne part pourtant pas de rien. L'outil embarque une bibliothèque d'exemples, et c'est par là qu'on commence.

## Lire un circuit qui tourne déjà

*File → Open Examples…*, puis le répertoire `Educational` : l'entrée ouvre une **cascade de menus** qui déroule directement l'arborescence des exemples, sans passer par une boîte de dialogue. Les fichiers `.asc` qu'on y trouve **portent déjà leur directive de simulation** : ils tournent tels quels, sans rien éditer. En ouvrir un et lancer la simulation donne, en deux clics, l'écran qu'on doit apprendre à lire.

![Menu File déroulé sur l'entrée Open Examples : la cascade s'ouvre sur le répertoire Educational, qui contient des sous-répertoires et une liste de fichiers .asc.|640](/ressources/img/ltspice/open-examples.png)

Trois choses sont à lire, et elles ne sont pas au même endroit.

- **Le schéma** — les composants et leurs valeurs, comme sur n'importe quel [[analyse-de-schema-electronique|schéma électronique]]. Rien n'y bouge : aucune couleur ne signale une tension, aucun point ne matérialise un courant.
- **La directive** — une ligne de texte posée *sur le schéma*, du genre `.tran 5m` ou `.ac dec 100 10 100k`. C'est elle qui dit quelle analyse a été demandée, et c'est l'élément que Falstad n'a pas du tout. La lire en premier évite bien des malentendus : elle annonce à l'avance ce que la courbe pourra ou ne pourra pas montrer.
- **Le tracé** — la fenêtre de courbes, avec son axe horizontal en **temps** ou en **fréquence** selon la directive, et ses traces désignées par le nom du nœud, `V(out)` ou `I(R1)`.

![Schéma d'un filtre à variable d'état à trois amplificateurs : les nœuds sont étiquetés HP, BP et LP, et les directives point .ac et point include sont posées en bas à droite, au milieu des composants.|560](/ressources/img/ltspice/exemple-opamp-asc-schematic.png)

Sur cet exemple, la directive `.ac oct 25 1 100K` est posée sur le schéma comme n'importe quel texte : elle demande un balayage de 1 Hz à 100 kHz, par octaves, à raison de 25 points par octave. La mention `AC 1.` sous la source dit, elle, que l'amplitude d'entrée du balayage vaut 1. Ce sont deux informations qu'aucun schéma papier ne porte, et sans lesquelles la courbe ne veut rien dire.

Le geste de mesure tient en un clic : **cliquer le libellé d'une trace**, en haut du graphe. Un curseur s'accroche à la courbe et une fenêtre de lecture s'ouvre. Sur une analyse fréquentielle, elle donne pour le point pointé la fréquence (*Freq*), le gain en décibels (*Mag*) et la phase (*Phase*). Sur une analyse transitoire, l'abscisse est un temps. Un **double-clic** sur ce même libellé pose **deux** curseurs : la fenêtre affiche alors les deux positions et, en dessous, leur **rapport** (*Ratio*). C'est ce qu'il faut dès qu'une lecture en réclame deux — relever un dépassement à un endroit et la phase à un autre, mesurer une durée, comparer deux gains.

![Fenêtre de tracé où deux curseurs sont accrochés à la trace V de hp ; la fenêtre de lecture affiche pour chacun la fréquence, le gain et la phase, puis le rapport entre les deux.|640](/ressources/img/ltspice/curseur-lecture.png)

> [!note]
> **Ce qui se survole d'un côté se clique de l'autre.** Sur [[falstad|Falstad]], pointer un composant suffit à lire son courant et sa tension, en direct et sans rien lancer. Ici, il faut d'abord avoir simulé, puis désigner une trace. C'est la première manifestation d'une différence de fond : Falstad calcule **en permanence**, LTspice calcule **sur demande**.

## Modifier un circuit existant

Le circuit de la bibliothèque est déjà juste : l'attention ne se dépense donc que sur ce qu'on change. C'est le moment d'apprendre le geste central de l'outil, sur un montage dont on n'a pas à douter.

### 1. Poser une autre question au même circuit

La directive n'est pas un réglage technique, c'est **la question**. Cinq suffisent en projet, et trois couvrent l'essentiel (voir le tableau des [[simulation-electronique#Les trois familles d'analyse|trois familles d'analyse]] du hub) :

- `.op` — le **point de fonctionnement** : tensions et courants au repos, une valeur par nœud, aucune courbe (onglet *DC op pnt*) ;
- `.tran` — l'analyse **transitoire** : l'évolution dans le temps, axe horizontal en secondes (onglet *Transient*) ;
- `.ac` — l'analyse **fréquentielle** : le gain et la phase sur une plage de fréquences, axe horizontal en hertz (onglet *AC Analysis*).

Deux autres se rencontrent vite : `.dc` (balayage d'une source continue, pour tracer une caractéristique de diode ou de transistor) et `.noise` (le bruit). Une même directive s'écrit à la main sur le schéma, ou se règle dans le dialogue à onglets ouvert par *Simulate → Configure Analysis* (raccourci `A`) : on remplit les champs, le dialogue compose la ligne de commande et la pose sur le schéma. Le bas du dialogue rappelle la syntaxe attendue et affiche la directive générée. C'est le meilleur endroit pour apprendre à les écrire soi-même.

![Dialogue Configure Analysis ouvert sur l'onglet AC Analysis : type de balayage, nombre de points, fréquences de début et de fin, avec la syntaxe rappelée et la directive composée en bas.|600](/ressources/img/ltspice/configure-analysis.png)

### 2. Basculer d'une analyse à l'autre

Le raccourci qui rend la chose spectaculaire : **Maj + clic gauche sur un texte du schéma le bascule entre directive et commentaire**. Commenter la directive existante, en écrire (ou décommenter) une autre, relancer. Le **même circuit** répond à une autre question, et la fenêtre de tracé change d'axe. Les deux directives peuvent cohabiter sur le schéma, à condition qu'une seule soit active à la fois.

> [!question]
> **Prédire avant de basculer.** Le circuit ne change pas d'un iota, seule la directive change. Avant de relancer : l'axe horizontal restera-t-il le même ? La courbe montrera-t-elle encore ce qui se passe *à un instant*, ou ce qui se passe *à une fréquence* ? Et si la nouvelle fenêtre était vide, à quoi faudrait-il l'attribuer ?

### 3. Changer une valeur — et penser à relancer

Un clic droit sur un composant ouvre ses paramètres. On saisit une nouvelle valeur, on valide. Et **la courbe affichée ne bouge pas** : c'est encore celle du calcul précédent. Il faut relancer par le bouton ▶ (*Simulate → Run/Pause*, `Alt+R`).

![Menu Simulate déroulé : l'entrée Run slash Pause est en tête avec son raccourci, au-dessus de Stop, Clear Waveforms, Settings et Configure Analysis.|560](/ressources/img/ltspice/run-simulation.png)

C'est l'erreur la plus fréquente en arrivant de Falstad, où toute modification se répercutait immédiatement à l'écran. Ici, un tracé n'est jamais qu'une **photographie du dernier calcul**, et rien ne signale qu'il a vieilli.

## Construire son circuit — un filtre passe-bas

Reste le geste complet : partir de rien. On monte un **filtre passe-bas** RC et on relève sa fréquence de coupure, la mesure que [[falstad|Falstad]] ne sait pas produire.

### 1. Page blanche et placement

*File → New Schematic* (`Ctrl+N`) ouvre une feuille vide. Les composants les plus courants — résistance, condensateur, fil, masse — ont leur **bouton dans la barre d'outils** et leur raccourci clavier. Tout le reste, sources comprises, se prend dans le catalogue par *Edit → Component*. Pour identifier un bouton, il suffit de le survoler : son nom et son raccourci s'affichent dans la **barre d'état**, en bas de la fenêtre.

Il faut ici une **source de tension**, une **résistance de 1 kΩ** en série, un **condensateur de 160 nF** vers la masse, et la **masse** elle-même. Le montage tient en une maille : la source alimente la résistance, la résistance alimente le condensateur, le condensateur redescend à la masse. La sortie se lit **aux bornes du condensateur**, et c'est ce qui fait un passe-bas plutôt qu'un passe-haut.

> [!warning]
> **Sans masse, rien ne simule.** SPICE a besoin d'un nœud de référence à 0 V auquel rapporter toutes les tensions. Un schéma sans masse échoue, avec un message qui ne dit pas franchement pourquoi. C'est l'erreur de débutant numéro un sous SPICE, et elle ne pardonne pas : elle bloque tout, quelle que soit la directive.

Dernier geste, et il rapportera deux fois : **étiqueter les nœuds**. Poser une étiquette `in` à l'entrée et `out` sur la sortie fait apparaître les traces sous les noms `V(in)` et `V(out)` au lieu de `V(n001)` et `V(n002)`. Le tracé devient lisible d'un coup d'œil, et la description textuelle du circuit aussi, ce qui servira plus loin.

### 2. Régler la source pour le fréquentiel

Une source de tension porte **plusieurs réglages indépendants**, et c'est là que se joue le piège de l'analyse fréquentielle. Le clic droit sur la source, puis le bouton *Advanced*, ouvre le dialogue complet : on y trouve la valeur continue, la forme d'onde temporelle (`SINE`, `PULSE`…), et, dans une section à part, l'**amplitude pour l'analyse petit signal**, celle qu'utilise `.ac`. C'est ce champ-là qu'il faut renseigner, à **1** : le gain se lira alors directement comme un rapport à l'entrée. Le passage par ce dialogue se voit dans la séquence filmée en fin de section.

> [!warning]
> **Une source sans amplitude AC donne une courbe vide.** L'amplitude de la forme d'onde temporelle et l'amplitude petit signal sont **deux champs différents**. Renseigner la première et lancer un `.ac` produit un tracé plat, nul, ou une fenêtre où il ne semble rien y avoir — sans le moindre message d'erreur. Devant un `.ac` qui « ne montre rien », c'est la première chose à vérifier, avant même de soupçonner le circuit.

### 3. Poser la directive et prédire

La directive de balayage s'écrit `.ac dec 100 10 100k` : balayage par **décades**, **100 points** par décade, de **10 Hz à 100 kHz**. Cinq décades, largement de quoi encadrer la coupure attendue. Dans le dialogue *Configure Analysis*, onglet *AC Analysis*, cela revient à choisir *Decade* comme type de balayage et à remplir les trois champs suivants. La ligne se compose toute seule en bas du dialogue.

> [!question]
> **Prédire avant de lancer.** La fréquence de coupure d'un filtre RC vaut fc = 1 / (2π·R·C). Avec 1 kΩ et 160 nF, où tombe-t-elle ? Et de combien de décibels le gain aura-t-il chuté **à cette fréquence précise** ? Car ce chiffre-là ne dépend ni de R, ni de C, ni du circuit choisi.

### 4. Relever le −3 dB et confronter

La théorie donne fc = 1 / (2π × 1 kΩ × 160 nF) ≈ **995 Hz**, et le gain y vaut exactement **−3,01 dB**. C'est la définition même de la fréquence de coupure, le point où la tension de sortie est tombée à 1/√2 de l'entrée.

Sur la courbe, le geste est celui appris plus haut : cliquer le libellé `V(out)`, puis amener le curseur jusqu'à ce que la fenêtre de lecture affiche environ −3 dB. **La fréquence lue est la coupure mesurée**, et elle doit tomber au voisinage de 995 Hz.

C'est cette **confrontation**, et non la courbe, qui valide la saisie : un écart franc entre les 995 Hz calculés et la fréquence relevée ne dit pas que le filtre est mauvais, il dit qu'une valeur a été mal saisie ou qu'un fil manque. Une fois les deux chiffres d'accord, la coupure est une valeur **citable**, et elle peut entrer telle quelle dans une note de dimensionnement.

La séquence complète, de la feuille blanche au curseur posé sur le −3 dB, tient en un peu plus d'une minute. À regarder **après** avoir essayé, pour comparer les gestes — pas avant, sous peine de recopier au lieu de construire.

![Séquence complète de la construction du filtre RC : placement depuis la barre d'outils de la masse, de la source de tension, du condensateur et de la résistance, câblage, ajout des étiquettes de nœud IN et OUT, réglage des valeurs par clic droit sur chaque composant ; puis Simulate et Configure Analysis pour composer la directive point ac dec 100 10 100K, lancement de la simulation, sondage du nœud OUT pour tracer le diagramme de Bode, et double-clic sur le libellé V de out pour faire apparaître le curseur, amené sur le point −3 dB.|640](/ressources/img/ltspice/low-pass-analyse.gif)

> [!note]
> **Le même circuit, connu de deux façons.** Sur Falstad, on aurait changé la fréquence de la source à la main et regardé la sinusoïde de sortie maigrir : on *sent* le filtre travailler, mais on ne relève aucune coupure, car l'outil simule dans le temps et ne trace pas de réponse en fréquence. LTspice ne montre rien du courant qui circule, mais il balaie cinq décades et donne le chiffre au curseur. L'un donne l'intuition, l'autre la valeur. Un projet sérieux passe par les deux, et **dans cet ordre**.

> [!tip]
> **Des composants existants, sans rien installer de plus.** Le catalogue de *Edit → Component* ne contient pas que des composants idéaux : on y trouve les références d'Analog Devices et, dans le répertoire *Contrib*, celles d'autres fabricants. Un bouton y ouvre même un **circuit d'exemple** pour la référence sélectionnée — souvent le montage typique de sa fiche technique. Un modèle absent du catalogue s'importe depuis un fichier `.lib` ou `.mod` fourni par le fabricant, mais le coût réel n'est pas l'import : c'est l'**association d'un symbole au modèle**, un détour qui dépasse largement le cadre d'un projet. Chercher d'abord dans le catalogue, ou une référence équivalente. Et la précision ne rachète rien : un modèle exact sur une valeur mal saisie donne un résultat **précis et faux**.

## Exporter la netlist

Un schéma LTspice a une **description textuelle**, et l'outil sait la montrer : *View → Update and View SPICE Netlist* ouvre une fenêtre où le circuit apparaît en quelques lignes — un composant par ligne, ses nœuds, sa valeur — suivies des directives posées sur le schéma. Le contenu se sélectionne et se copie.

![Menu View déroulé sur l'entrée Update and View SPICE Netlist ; à droite, le schéma du filtre RC avec la source V1 marquée AC 1, la résistance R1 de 1000 ohms, le condensateur C1 de 160 nF, les deux masses, les nœuds étiquetés IN et OUT, et la directive point ac dec 100 10 100K posée sous le montage.|640](/ressources/img/ltspice/view-update-and-view-netliste.png)

![Fenêtre de netlist du filtre RC : trois lignes de composants où apparaissent les nœuds IN, OUT et 0, puis la directive point ac dec 100 10 100K, et enfin les lignes de fin de fichier.|400](/ressources/img/ltspice/spice-netlist.png)

Quatre lignes suffisent à décrire le filtre : chaque composant y donne son nom, les deux nœuds entre lesquels il est branché, et sa valeur. La masse porte le numéro `0`. C'est la convention SPICE, et c'est pourquoi son absence bloque tout. La source affiche son amplitude de balayage à la suite de ses nœuds. Et la **directive est recopiée telle quelle** depuis le schéma : le texte dit donc à la fois de quoi le circuit est fait et quelle question lui a été posée.

C'est ici que l'étiquetage des nœuds paie : sans lui, la netlist parle en `n001` et `n002`, et plus personne ne sait quel nœud est la sortie — ni un camarade, ni un encadrant, ni soi-même trois semaines plus tard.

> [!warning]
> **Deux netlists, deux usages.** *View → Update and View SPICE Netlist* donne la description **électrique**, directives comprises : elle s'affiche à l'écran, se sélectionne et se copie. C'est celle que lit le simulateur, et celle qu'on partage pour faire analyser un circuit. *Tools → Export Netlist* fait autre chose : il **enregistre un fichier `.net`** sur le disque, destiné au **routage d'une carte**, celle qu'on rencontrera en passant au [[pcb|circuit imprimé]], et elle ne décrit que les connexions entre broches, sans géométrie et sans analyse. Pour tout usage où le texte doit être relu ou collé ailleurs, c'est la première qu'il faut, pas la seconde.

> [!tip]
> **Faire lire une netlist par un assistant, et garder l'arbitrage.** Une netlist est un texte court, sans géométrie et sans ambiguïté : elle se colle telle quelle dans un assistant conversationnel, à qui l'on peut demander ce que fait le circuit, ou pourquoi un tracé ne ressemble pas à l'attendu. Le cadrage est le même que dans [[falstad|Falstad]], pris par l'autre bout : ce que produit l'assistant n'est pas une réponse, c'est une **hypothèse**, et le critère tient en une question, *cette affirmation est-elle vérifiable à l'écran ?* « L'amplitude AC de la source est à zéro » se vérifie en trois clics. « Le gain à 1 kHz vaut −3 dB » se vérifie au curseur. En revanche, « prenez 330 nF » n'est pas une hypothèse vérifiable : c'est **la conclusion**, et la faire produire par un tiers revient à déléguer le seul travail qui ne se délègue pas.
>
> Une limite technique par-dessus : la netlist n'emporte **pas** le contenu des fichiers `.lib` externes. Sur un circuit à composant réel, l'assistant ne connaît pas le modèle et comblera le vide de lui-même.

## Pièges

**Oublier de relancer.** Une valeur modifiée ne met pas le tracé à jour : la courbe à l'écran est celle du calcul précédent, et rien ne le signale. Réflexe à prendre. Toute modification du schéma se termine par un *Run/Pause*.

**Oublier la masse.** Sans nœud de référence, la simulation échoue quelle que soit la directive. L'erreur de débutant la plus fréquente sous SPICE, et la plus vite corrigée une fois identifiée.

**Lancer la mauvaise directive.** Chercher une fréquence de coupure avec `.tran`, ou un régime établi avec `.ac`, donne une réponse juste à une question qu'on ne se posait pas. La directive suit la question, jamais l'inverse.

**Échec de convergence.** SPICE peut refuser de converger sur certains montages — boucles de réaction, modèles raides, commutations rapides. Le message est déroutant mais le cas est classique : il se traite en ajustant les options de simulation ou en simplifiant le modèle, **pas** en concluant que le circuit est faux.

**Sur-outiller un cas trivial.** Vérifier qu'une LED s'allume ne justifie pas d'installer LTspice, d'y saisir un schéma et d'y poser une directive : [[falstad|Falstad]] répond en trente secondes. LTspice se réserve aux cas où la valeur exacte compte.

## Exercices

> [!question]
> **Exercice 1 — La mauvaise question.** Reprenez le filtre passe-bas et, au lieu du `.ac`, lancez une analyse transitoire `.tran 10m` avec une source sinusoïdale à 1 kHz. Décrivez ce que montre la courbe obtenue, puis expliquez pourquoi elle ne permet pas de relever la fréquence de coupure. Que faudrait-il faire pour y arriver malgré tout ?

> [!success]- Corrigé
> La courbe montre deux sinusoïdes dans le temps : l'entrée à son amplitude pleine, la sortie un peu plus petite et légèrement en retard. C'est une information juste, mais elle ne concerne **qu'une seule fréquence**, celle réglée sur la source.
>
> Or une fréquence de coupure est une propriété du filtre **sur toute une plage**. Pour la relever en transitoire, il faudrait relancer la simulation à 10 Hz, 20 Hz, 50 Hz… en relevant l'amplitude de sortie à chaque fois, et chercher où elle est tombée à 1/√2 de l'entrée. Une trentaine de simulations pour un chiffre, et aucun décibel nulle part, puisque l'axe est en volts.
>
> C'est exactement la méthode qu'impose [[falstad|Falstad]], et c'est précisément ce que `.ac` fait tout seul en une fois.

> [!question]
> **Exercice 2 — Dimensionner.** On veut maintenant une coupure à **500 Hz**, en gardant la résistance de 1 kΩ. Calculez la valeur de condensateur nécessaire, choisissez la valeur normalisée la plus proche, saisissez-la, relancez et relevez la coupure obtenue au curseur. L'écart entre la coupure visée et la coupure obtenue est-il acceptable ?

> [!success]- Corrigé
> De fc = 1 / (2π·R·C) on tire C = 1 / (2π × 1 kΩ × 500 Hz) ≈ **318 nF**. Cette valeur n'existe pas au catalogue : la valeur normalisée la plus proche est **330 nF**, qui donne fc = 1 / (2π × 1 kΩ × 330 nF) ≈ **482 Hz**. Le curseur doit confirmer une coupure aux environs de 482 Hz.
>
> L'écart est de **3,5 %** sur la coupure visée — négligeable devant la **tolérance du condensateur lui-même**, couramment 10 % voire 20 % sur un céramique. Autrement dit : viser une coupure au hertz près avec des composants ordinaires n'a pas de sens, et c'est une conclusion que la simulation seule ne donne pas, puisqu'elle vient de la [[lire-une-datasheet|fiche technique]] du composant. Un dimensionnement sérieux annonce une plage, pas une valeur.

## Voir aussi

- [[simulation-electronique|Simulation électronique]] — le hub : méthode, types d'analyse et lecture des résultats
- [[falstad|Falstad]] — l'outil pour comprendre et explorer vite, en amont du dimensionnement
- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — lire le schéma que la directive met en mouvement
- [[lire-une-datasheet|Lire une datasheet]] — d'où viennent les modèles, les valeurs et les tolérances
- [[pcb|Circuit imprimé]] — l'autre netlist, celle du routage
- [[niveaux-de-tension|Niveaux de tension]] — vérifier une compatibilité de niveaux par simulation
- [[dossier-technique|Dossier technique]] — où les valeurs dimensionnées sont consignées
