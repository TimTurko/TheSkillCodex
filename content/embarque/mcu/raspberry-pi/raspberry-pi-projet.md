---
title: Le SBC dans un projet mécatronique
type: tuto
phases:
  - integration
tags:
  - eee
  - tuto
  - raspberry-pi
prerequis:
  - raspberry-pi
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Intégrer un **ordinateur monocarte (SBC)** dans un projet mécatronique, c'est lui confier le **haut niveau** — vision, décision, réseau, interface — pendant qu'un [[microcontroleur|microcontrôleur]] tient le **temps réel** — capteurs cadencés, asservissement, commande des moteurs. Cette répartition n'est pas un compromis subi : c'est l'**architecture la plus courante** dès qu'un projet demande à la fois du calcul lourd et de la commande précise. Cette fiche montre comment les deux cerveaux se partagent le travail et dialoguent, et quand, à l'inverse, le SBC suffit seul.

![Architecture bicéphale sur un bras 3 axes : le Raspberry Pi assure vision, planification, réseau ; il envoie des consignes via un bus à un microcontrôleur qui asservit et pilote les moteurs des trois axes.](/ressources/img/raspberry-pi-projet/architecture-bicephale.svg)

## À quoi ça sert ?

Un microcontrôleur seul ne fait pas de vision par ordinateur ; un SBC seul ne garantit pas une boucle d'asservissement (voir [[raspberry-pi-gpio|pas de temps réel sous Linux]]). Dès qu'un projet a besoin des deux — par exemple « repérer un objet à la caméra **et** l'attraper avec un bras » — la bonne réponse est de **combiner** les deux cibles plutôt que d'en forcer une au-delà de son domaine. Le choix se prépare en [[concept|concept]] (dans la [[matrice-de-decision|matrice de décision]] d'architecture) et se valide en [[integration-et-tests|intégration]].

## L'architecture bicéphale

Reprenons le fil rouge du **bras 3 axes**, augmenté d'une caméra. La répartition se lit directement sur le schéma :

- **Le Raspberry Pi (haut niveau).** Il acquiert l'image de la caméra, **détecte la cible** (traitement d'image), **calcule une trajectoire** pour l'atteindre, gère l'**interface** (un écran de supervision, une commande à distance) et le **réseau**. Tout cela est du calcul : sa zone de confort.
- **Le microcontrôleur (temps réel).** Il reçoit des **consignes** (angles ou positions à atteindre), exécute la **boucle d'asservissement** de chaque axe, pilote les **moteurs** via leurs étages de puissance, et lit les capteurs de position et les **fins de course**. Tout cela est cadencé : sa zone de confort.

Entre les deux, un **[[bus-de-communication|bus]]** : une liaison série (UART), un bus I2C (le SBC en maître), ou tout simplement l'**USB** (souvent le plus simple — le microcontrôleur apparaît comme un port série). Le SBC envoie des consignes, le microcontrôleur renvoie son état.

Côté SBC, envoyer une consigne tient en quelques lignes — ici une liaison série, le microcontrôleur étant vu comme un port :

```python
import serial

mcu = serial.Serial("/dev/ttyACM0", 115200, timeout=1)

def envoyer_consigne(a1, a2, a3):
    # protocole texte simple : "C a1 a2 a3\n"
    mcu.write(f"C {a1} {a2} {a3}\n".encode())
    return mcu.readline().decode().strip()   # accusé / état renvoyé par le MCU

print(envoyer_consigne(90, 45, 120))   # vise une posture du bras
```

Côté microcontrôleur, le programme lit cette ligne, met à jour ses consignes d'asservissement, et répond — un travail qui relève des tutoriels de la famille MCU choisie (Arduino, ESP32, STM32…). Le **protocole** (le format des messages) est à définir au cadrage : simple et lisible d'abord, on l'enrichit ensuite.

> [!tip]
> Le partage des rôles donne aussi une **stratégie de test** : on valide le microcontrôleur seul (il asservit correctement sur des consignes injectées à la main), puis le SBC seul (il détecte et calcule sur des images de test), avant de brancher les deux. Deux bugs isolés valent mieux qu'un bug hybride.

## Quand le SBC suffit seul

L'architecture bicéphale n'est pas toujours nécessaire. Le SBC peut piloter seul son [[raspberry-pi-gpio|GPIO]] quand le projet **ne demande pas de temps réel serré** :

- un **enregistreur de données** (data-logger) qui lit des capteurs lents et écrit dans un fichier ou une base ;
- un **tableau de bord** qui affiche l'état d'un système et le commande à distance ;
- un robot dont la commande **tolère de la latence** (un véhicule lent, un bras à mouvements posés).

À l'inverse, dès qu'il y a une **boucle de régulation rapide** ou un signal **cadencé finement**, on déporte cette partie sur un microcontrôleur. La frontière est celle de [[raspberry-pi-gpio|piloter les GPIO depuis Linux]] : l'OS s'intercale et ne garantit pas le temps réel.

## Lancer le programme au démarrage

Dans une maquette, personne n'ouvre une session SSH pour lancer le script à la main : le Pi doit **démarrer son programme tout seul** à la mise sous tension. Le principe est simple — on enregistre le programme comme une **tâche lancée au démarrage** — pour que le robot soit autonome dès qu'il est alimenté.

*La mise en place concrète (créer un service `systemd`, gérer son redémarrage, lire ses journaux) relève de l'**administration Linux**, hors du périmètre de ce wiki — comme le reste du sysadmin (cf. [[raspberry-pi-prise-en-main|prise en main]]). La [documentation officielle](https://www.raspberrypi.com/documentation/) et un cours Linux détaillent le mécanisme. Ce qu'il faut retenir ici : prévoir, dès la conception, que le programme se lance seul, et qu'il se relance s'il plante.*

## Pièges

**Alimenter le Pi et les moteurs sur la même source.** Les moteurs provoquent des appels de courant qui font chuter la tension ; si le Pi partage cette alimentation, il subit des sous-tensions (redémarrages, corruption SD). Prévoir une **alimentation dédiée** pour la puissance, séparée de celle du Pi, avec une **masse commune**.

**Couper l'alimentation sans arrêt propre.** Le Pi écrit sur sa carte SD ; débrancher brutalement risque de la corrompre. Prévoir un arrêt propre (`sudo poweroff`), ou une coupure différée, dans le scénario d'usage.

**Dépendre du réseau de la salle pour la démo.** Le `.local` et le Wi-Fi d'école sont capricieux. Pour une démonstration fiable, utiliser un **câble Ethernet direct**, ou configurer le Pi en **point d'accès** autonome — à préparer en amont, pas le jour J.

**Mettre du temps réel dans le SBC.** Le piège conceptuel récurrent : croire que le Pi, parce qu'il est puissant, fera aussi bien qu'un microcontrôleur sur une boucle rapide. Il est puissant **en calcul**, pas **en déterminisme**. Garder l'asservissement côté microcontrôleur.

**Protocole de liaison bâclé.** Un format de messages ambigu entre SBC et MCU est une source de bugs difficiles. Définir un protocole clair (délimiteurs, accusés de réception, gestion des erreurs) dès le départ.

## Voir aussi

- [[raspberry-pi|Raspberry Pi]] — hub du module SBC, et le choix MCU vs SBC
- [[raspberry-pi-gpio|Piloter les GPIO depuis Linux]] — la frontière du temps réel sous Linux
- [[microcontroleur|Microcontrôleur]] — l'autre cerveau de l'architecture, pour le temps réel
- [[bus-de-communication|Bus de communication]] — UART / I2C / SPI, la liaison entre les deux
- [[integration-et-tests|Intégration et tests]] — valider l'assemblage des sous-ensembles
