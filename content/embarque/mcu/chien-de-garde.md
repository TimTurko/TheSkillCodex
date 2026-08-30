---
title: Chien de garde
type: notion
tags:
  - eee
  - notion
aliases:
  - watchdog
  - WDT
prerequis:
  - microcontroleur
aa: []
phases:
  - integration-et-tests
draft: false
---

Le **chien de garde** (*watchdog*, WDT) est un compteur qui **redémarre la carte si le programme cesse de le « nourrir »** dans un délai imparti. C'est le seul mécanisme d'un [[microcontroleur|microcontrôleur]] qui agisse **quand le programme n'est plus en état d'agir** : là où une gestion d'erreur suppose du code encore vivant pour la déclencher, le chien de garde n'attend rien de lui : il attend seulement un signe de vie, et son absence *est* le déclencheur.

## À quoi ça sert ?

Un système embarqué qui tourne sans personne pour appuyer sur reset — une station isolée, une machine en service, un objet enfoui — ne survit pas à un blocage. Une bibliothèque qui attend une réponse qui ne vient pas, un capteur qui fige la boucle, une trame incomplète : le programme reste inerte, et il ne peut pas signaler son propre arrêt, précisément parce qu'il est arrêté. Le chien de garde renverse la charge de la preuve. Ce n'est plus au programme de dire qu'il va mal. C'est à lui de **prouver régulièrement qu'il va bien**, et le silence vaut défaillance.

C'est un mécanisme de **dernier recours**, qu'on arme en [[fiabiliser-et-deboguer|phase de fiabilisation]] sur un système déjà fonctionnel, jamais pour masquer un bug qu'on devrait corriger.

## De quoi le chien de garde est-il indépendant ?

Toute la confiance qu'on lui accorde tient dans une seule question : **qu'est-ce qui peut tomber sans l'emporter avec lui ?** Et la réponse n'est pas la même d'une famille à l'autre : c'est la raison pour laquelle il faut la chercher plutôt que la supposer.

![Comparaison de deux architectures d'horloge de chien de garde. À gauche le cas AVR : le quartz alimente l'horloge système puis le cœur, tandis qu'un oscillateur RC séparé, propre au chien de garde, alimente son compteur ; les deux chaînes ne se touchent pas, mais le délai n'est qu'approximatif. À droite le cas RP2040 : le même quartz alimente l'horloge système et, par l'horloge de référence, le compteur du chien ; le délai est précis mais les deux chaînes partagent leur source.|640](/ressources/img/chien-de-garde/independance.svg)

Sur un **AVR**, le chien est cadencé par un oscillateur RC qui lui est propre et tourne en permanence. Un plantage de l'horloge système ne l'atteint pas : le cœur peut se figer, le compteur continue et la carte finit par repartir. Le prix de cette séparation est que cet oscillateur est **libre**, donc imprécis : les délais annoncés valent à 5 V, et ils **s'allongent quand la tension d'alimentation baisse**. Une marge calculée à 5 V n'est plus la bonne à 3,3 V : piège invisible tant qu'on ne teste pas le montage à sa tension réelle.

Sur un **RP2040**, l'architecture est inverse. Le compteur du chien est cadencé par une dérivée de l'horloge de référence, elle-même normalement branchée sur le quartz. Le délai est donc **juste**, mesuré en millisecondes plutôt qu'en paliers approximatifs. Mais le chien partage sa source avec le reste de la puce, et ce que le quartz emporte, il l'emporte aussi.

Aucune des deux options n'est meilleure : ce sont deux arbitrages entre **couverture de panne** et **précision du délai**, et le rôle de l'ingénieur est de savoir lequel il a en main. La question à poser à la datasheet est toujours la même : *d'où vient l'horloge du chien, et qu'est-ce qui l'arrête ?*

## Comment ça marche ?

Trois gestes, partout les mêmes.

**Armer.** On fixe un délai et le compteur démarre. Ce délai doit être **plus long que le pire tour de boucle légitime**, marge comprise : sinon le chien redémarre un système qui fonctionnait. Le plafond est bas : quelques secondes au plus, sur toutes les familles courantes, parce qu'un compteur de surveillance n'est pas fait pour mesurer des durées longues.

**Nourrir.** Une instruction remet le compteur à zéro. Elle se place là où **seul un fonctionnement sain mène** : c'est le choix décisif de tout le mécanisme, et la section suivante lui est consacrée.

**Laisser tomber l'échéance.** Le compteur atteint son terme, la ligne de reset s'active, la carte repart de son point de démarrage.

| Famille | Armer | Nourrir | Peut-on désarmer ? |
|---|---|---|---|
| Arduino / AVR | `wdt_enable()`, paliers de 15 ms à 8 s | `wdt_reset()` | **oui**, `wdt_disable()` |
| MicroPython | `WDT(timeout=…)`, jusqu'à 8 388 ms sur RP2 | `feed()` | **non**, l'API l'interdit |

Cette dernière colonne n'est pas un détail d'API : **la documentation MicroPython pose l'interdiction au niveau de la classe**, toutes cartes confondues : une fois démarré, le chien ne peut être ni arrêté ni reconfiguré. D'où une règle qui vaut aussi là où le désarmement est possible : **ne jamais faire dépendre une architecture du fait de pouvoir rappeler le chien.** Concrètement, on arme **tard**, quand les initialisations sont finies et que la boucle est prête à nourrir. Et on ne prévoit pas d'opération longue qu'on « désarmera le temps qu'il faut ». Sur AVR, le désarmement sert de **parade** au démarrage (certains anciens *bootloaders* laissaient le chien actif avec un délai très court après un reset, d'où un redémarrage en boucle), pas de licence architecturale.

## Ce que le chien de garde ne détecte pas

C'est la limite qu'on découvre le plus tard, et elle est structurelle : **le chien surveille un rythme, pas un résultat.** Il constate qu'une instruction est atteinte à intervalle régulier. Il ne sait rien de ce que le programme fait entre deux passages, ni de la justesse de ce travail.

D'où le mode de panne le plus vicieux : une boucle qui **continue de tourner et de nourrir** pendant qu'une de ses activités est morte. Le capteur ne répond plus mais sa lecture échoue en silence, la liaison est tombée mais l'émission ne bloque pas : la boucle passe, le chien est nourri, le système se déclare vivant et ne fait plus rien d'utile. Aucun redémarrage n'aura lieu, et c'est logique : de son point de vue, tout va bien.

La parade est de **ne nourrir qu'après avoir vérifié que chaque activité a donné signe de vie** depuis le dernier cycle : chaque tâche lève son drapeau quand elle a réellement travaillé, et le chien n'est nourri que si tous sont levés. On surveille alors ce dont on dépend, pas la boucle qui les appelle.

Cette idée est industrialisée sur certaines familles sous le nom de *task watchdog* : chaque tâche **s'inscrit** auprès du chien et doit émarger **pour son propre compte**, faute de quoi l'échéance tombe. Sur ESP32, ce chien-là signale par défaut la tâche fautive dans la console **sans redémarrer** : le redémarrage est une option de configuration. C'est déjà l'aveu que le vrai service rendu est autant un **diagnostic** qu'une remise en marche.

## Exemple — Le montage qui se croit vivant

Une station relève une température toutes les cinq secondes et la transmet. Un chien de garde de huit secondes est armé, nourri à chaque tour de boucle. Au bout de trois jours, la station n'a plus rien transmis, et pourtant elle n'a **jamais redémarré**.

Le capteur avait cessé de répondre. Sa fonction de lecture, au lieu de bloquer, rendait une valeur d'erreur. La boucle continuait son tour, l'émission partait sur une valeur invalide, et le chien recevait sa pâture ponctuellement. Le mécanisme a fonctionné exactement comme prévu, et il n'a servi à rien : ce qui s'était arrêté n'était pas la boucle, mais une activité **dans** la boucle.

Nourri sous condition (« les trois lectures du cycle ont réussi »), le même chien aurait redémarré la carte au bout de huit secondes, et remis en route un capteur que la coupure d'alimentation suffisait à débloquer. **Le chien ne devient utile qu'à partir du moment où on lui donne à surveiller ce dont le service dépend vraiment**, et cette liste-là n'est pas dans le microcontrôleur : elle est dans le cahier des charges.

## Un redémarrage muet n'apprend rien

Le chien de garde rend un système résilient et **silencieux du même geste** : la carte repart de zéro, la trace disparaît avec la mémoire vive, et rien ne distingue un démarrage normal d'une reprise après blocage. Un système qui a redémarré quarante fois cette nuit ressemble en tous points à un système qui n'a jamais bronché, jusqu'à ce que quelqu'un s'aperçoive que le défaut ne se corrige pas de lui-même.

Toutes les familles proposent en principe de relire la **cause du dernier reset** au démarrage. En pratique, l'information se dérobe des deux côtés du parcours, pour des raisons opposées :

- côté **AVR**, le drapeau existe bien dans un registre d'état, mais le *bootloader* des cartes Arduino l'efface souvent avant que le programme ne s'exécute : celui qui le lit dans son initialisation trouve zéro et conclut à tort que le chien n'a pas mordu ;
- côté **MicroPython sur RP2**, la fonction de cause de reset renvoie « chien de garde » **aussi après un redémarrage logiciel volontaire**, celui-ci passant lui-même par le watchdog. La cause ne distingue donc pas les deux situations.

La conclusion à retenir n'est pas « lis la cause du reset » mais **compte tes redémarrages toi-même** : un compteur incrémenté au démarrage et rangé en mémoire persistante, transmis ou affiché avec les mesures. C'est trois lignes de code, ça ne dépend d'aucun mécanisme fourni, et c'est ce qui transforme une carte qui se relève en silence en une carte qui **raconte** qu'elle s'est relevée. Sans cela, la robustesse gagnée se paie en aveuglement.

## Pièges

**Nourrir depuis une interruption ou une tâche cadencée.** Une [[interruption|interruption]] de [[timer|timer]] continue de s'exécuter alors même que le programme principal est bloqué. Le chien nourri depuis là ne détecte plus jamais rien : le mécanisme est en place, armé, et sans effet.

**Armer avant d'être prêt à nourrir.** Une initialisation longue — attente d'un module, montage d'un système de fichiers, connexion réseau — peut dépasser le délai et provoquer un redémarrage en boucle avant même que le programme n'ait commencé. On arme après.

**Calculer la marge à la mauvaise tension.** Sur les familles à oscillateur libre, le délai réel s'allonge à basse tension. La marge se vérifie sur le montage alimenté comme il le sera en service, pas sur le banc en USB.

**Confondre le filet et le correctif.** Redémarrer périodiquement pour « contourner » une fuite mémoire ou un blocage récurrent traite le symptôme et masque la cause, d'autant mieux que le redémarrage est muet.

**Oublier le chien pendant une session de débogage.** Un point d'arrêt fige le processeur mais pas forcément le compteur du chien : la carte se réinitialise en pleine inspection. Certains outils désarment les chiens à chaque arrêt, et ne les réarment pas ensuite : de quoi croire le mécanisme absent alors qu'il est simplement suspendu (voir [[debugger-embarque|déboguer un système embarqué]]).

## Cas particulier — Redémarrer, ou prévenir

Sur certaines familles, le chien offre un second mode : à l'échéance, il déclenche une **interruption** au lieu de réinitialiser. Deux usages en découlent, opposés dans l'esprit.

Le premier est le **dernier mot** : quelques instructions avant le reset pour couper une sortie de puissance, ranger un état ou consigner la panne, ce qui répond directement au redémarrage muet décrit plus haut. Le second est le **réveil périodique** d'un microcontrôleur endormi, où le chien ne joue plus du tout un rôle de sécurité mais de minuterie de basse consommation (voir [[deep-sleep|deep sleep]]).

Le même périphérique remplit donc deux fonctions contraires — filet de sécurité et réveille-matin — et ce mode n'existe pas partout : côté MicroPython, l'interface standard n'expose que le redémarrage. Garder la distinction en tête évite de confondre un **redémarrage subi** et un **réveil voulu** en lisant le comportement d'une carte.

## Voir aussi

- [[timer|Timer]] — le compteur matériel dont le chien de garde est un cas particulier dédié à la surveillance
- [[interruption|Interruption]] — le second mode du chien, et l'endroit où il ne faut surtout pas le nourrir
- [[programmation-non-bloquante|Programmation non bloquante]] — la boucle brève qui rend le chien nourrissable, et l'attente qui le déclenche à tort
- [[firmware|Firmware]] — la robustesse comme choix d'architecture, dont le chien est la dernière marche
- [[fiabiliser-et-deboguer|Fiabiliser et déboguer]] — l'étape de réalisation où le chien s'arme
- [[deep-sleep|Deep sleep]] — le réveil périodique, autre emploi du même périphérique
- [[arduino-watchdog|Chien de garde sur Arduino]] — la mise en œuvre en C++ (`avr/wdt.h`, désarmement possible)
- [[micropython-watchdog|Chien de garde en MicroPython]] — la même mécanique côté MicroPython (`machine.WDT`, sans désarmement)
- [[microcontroleur|Microcontrôleur]] — le circuit qui embarque le périphérique
