---
title: Déboguer un système embarqué
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - firmware
aa:
  - RA-PROJET-C03-3/PROJ/5
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
---

**Déboguer un système embarqué**, c'est traquer la cause d'un comportement anormal d'un programme qui tourne sur un microcontrôleur — là où il n'y a ni écran, ni clavier, ni la console d'un PC. Deux grandes approches coexistent : le **débogage par messages** (afficher des valeurs via la liaison série) et le **débogage matériel** (une sonde qui met le programme en pause, pose des points d'arrêt et inspecte les variables en temps réel). Cette fiche transverse pose la **méthode** et compare les deux approches, agnostique de la famille ; pour la lecture des logs propres à une carte, voir [[cpp-logs|lire les logs d'erreur]] et [[firmware|firmware]].

*Prendre capture d'écran d'une session de débogage dans un IDE : le code arrêté sur un point d'arrêt (ligne surlignée), le panneau des variables/watch affichant leurs valeurs courantes, et la pile d'appels (call stack).*

## À quoi ça sert ?

Un bug sur microcontrôleur est plus difficile à cerner que sur un PC : pas d'affichage immédiat, exécution en temps réel, interaction avec le matériel (capteurs, moteurs, communications). Le débogage répond à des questions précises :

- **« ce code s'exécute-t-il seulement ? »** — la branche d'un `if`, l'intérieur d'une fonction, une interruption sont-ils réellement atteints ?
- **« quelle valeur a cette variable à cet instant ? »** — l'état d'une [[machine-a-etats|machine à états]], la lecture d'un capteur, un compteur ;
- **« où le programme part-il de travers ? »** — figer l'exécution juste avant le symptôme pour observer le contexte ;
- **« est-ce un problème de code ou de matériel ? »** — distinguer un bug logiciel d'un défaut électrique (et basculer alors vers les [[instruments-de-mesure|instruments de mesure]]).

## Deux approches

**Débogage par messages (*printf* / log).** On insère des affichages (`Serial.print`, macros de log) à des points clés du code, et on observe le défilement dans le moniteur série. C'est **universel** (toute carte dotée d'une [[uart|liaison série]]), **sans matériel supplémentaire**, et c'est l'entrée naturelle du débutant. Limites : c'est **intrusif** (les affichages modifient le déroulement et le *timing*), cela alourdit le code, et il n'y a **ni pause ni inspection à la demande** — on ne voit que ce qu'on a pensé à afficher. Détaillé côté famille dans [[cpp-logs|lire les logs d'erreur]] et via les macros `DEBUG` de [[arduino-debug|déboguer un programme Arduino]].

**Débogage matériel (JTAG / SWD).** Une **sonde de débogage** (ST-Link, J-Link, ou le contrôleur intégré à certaines cartes comme l'ESP32-S3/C3) se connecte aux broches de débogage du microcontrôleur et donne la main sur l'exécution :

- **points d'arrêt** (*breakpoints*) — geler le programme à une ligne précise ;
- **pas à pas** (*step*) — avancer instruction par instruction (entrer dans une fonction, l'enjamber, en sortir) ;
- **inspection** — lire (et parfois modifier) les variables, les registres, la mémoire **en temps réel**, sans rien afficher ;
- **pile d'appels** (*call stack*) — savoir par quel chemin on est arrivé là.

Avantage : **non intrusif** (le code ne change pas) et bien plus puissant. Coût : il faut le **matériel** (la sonde) et la **configuration de la chaîne d'outils** (toolchain + IDE), spécifique à la famille de microcontrôleur.

## La méthode, quelle que soit l'approche

Déboguer n'est pas changer du code au hasard jusqu'à ce que « ça passe ». La démarche est une enquête :

1. **Reproduire** le bug de façon fiable — un bug qu'on ne sait pas reproduire ne peut pas être corrigé sereinement.
2. **Isoler** — réduire au plus petit cas qui déclenche encore le problème (commenter, simplifier).
3. **Formuler une hypothèse** précise sur la cause (« la variable d'état ne change jamais », « l'interruption n'est pas appelée »).
4. **Instrumenter** pour tester l'hypothèse — un affichage bien placé, ou un point d'arrêt.
5. **Vérifier**, puis **corriger** — et seulement alors, valider que le symptôme a disparu.

> [!warning]
> **Un point d'arrêt gèle le processeur, pas le monde extérieur.** Quand l'exécution s'arrête sur un *breakpoint*, le microcontrôleur s'immobilise — mais un moteur continue de tourner sur son inertie, une communication arrive à expiration (*timeout*), un condensateur se décharge. Le débogage matériel d'un système qui pilote du mouvement ou des échanges temps réel peut donc fausser ce qu'on observe, voire être dangereux. À manier avec prudence sur les parties commandant de la puissance.

## Exemple — Une LED qui refuse de clignoter

Une LED censée clignoter reste éteinte. Le câblage et l'alimentation sont vérifiés (au [[multimetre|multimètre]]) : le problème est logiciel.

*Prendre capture d'écran de la session : un point d'arrêt posé sur la ligne qui inverse l'état de la LED, et le panneau des variables montrant l'état courant.*

1. **Hypothèse 1** — « la ligne qui inverse la LED n'est jamais atteinte ». On y pose un **point d'arrêt** : s'il ne se déclenche jamais, le chemin d'exécution ne passe pas par là (une condition au-dessus est fausse).
2. **Variante par messages** — sans sonde, on place `Serial.print` juste avant : l'absence de message confirme la même chose.
3. **Remonter** — on déplace le point d'observation vers la condition qui garde ce bloc, on inspecte la variable testée : on découvre qu'elle ne change pas comme prévu (un `=` au lieu d'un `==`, un délai jamais écoulé à cause d'un [[timer|verrou temporel]] mal posé).
4. **Corriger** l'hypothèse validée, retirer l'instrumentation, vérifier que la LED clignote.

L'enquête a localisé la cause sans toucher au reste du code — au lieu de modifier des lignes au hasard.

## Pièges

**Changer du code sans hypothèse.** Modifier au hasard jusqu'à ce que « ça marche » masque le vrai bug au lieu de le comprendre — il réapparaîtra. Une correction se fait sur une cause identifiée.

**L'effet *Heisenberg* du *printf*.** Ajouter un affichage modifie le *timing* : un bug lié au temps (course entre une interruption et le programme principal, *timing* d'un [[bus-de-communication|bus]]) peut disparaître quand on l'instrumente et revenir quand on retire l'affichage. Indice que le problème est temporel.

**Oublier de retirer le débogage.** Les affichages de débogage laissés en place consomment du temps de calcul, de la mémoire et de la liaison série en production. Les conditionner à la compilation (`#if DEBUG`) ou les retirer.

**Confondre « ça compile » et « ça marche ».** Un programme qui compile sans erreur peut faire n'importe quoi à l'exécution. Le compilateur valide la syntaxe, pas l'intention.

**Déboguer du logiciel quand le défaut est matériel.** Si une lecture de capteur est aberrante, la cause peut être un câblage, un niveau de tension, une soudure — pas le code. Avant de plonger dans le programme, vérifier le signal réel aux [[instruments-de-mesure|instruments de mesure]].

## Voir aussi

- [[firmware|Firmware]] — l'architecture du programme qu'on débogue (prérequis)
- [[cpp-logs|Lire les logs d'erreur]] — le débogage par messages, côté chaîne d'outils
- [[arduino-debug|Déboguer un programme Arduino]] — l'incarnation Arduino (macros `DEBUG`, moniteur série)
- [[instruments-de-mesure|Instruments de mesure]] — quand le bug est électrique et non logiciel
- [[machine-a-etats|Machine à états]] — inspecter une variable d'état est un cas fréquent de débogage
- [[microcontroleur|Microcontrôleur]] — les broches de débogage (JTAG/SWD) selon la famille
