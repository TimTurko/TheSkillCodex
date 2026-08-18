---
title: Chaîne d'énergie et chaîne d'information
type: notion
tags:
  - eee
  - notion
  - architecture
prerequis: []
aa: []
phases:
  - concept
draft: false
---

La **chaîne d'énergie** et la **chaîne d'information** sont deux suites de fonctions qui décrivent tout système mécatronique : l'une dit comment il **agit** sur le monde (la puissance), l'autre comment il se **pilote** (la commande). Les deux sont couplées — l'information commande l'énergie et mesure ses effets en retour. C'est le modèle le plus simple pour situer chaque composant d'un projet : côté puissance, ou côté commande.

![Modèle d'un système mécatronique en deux chaînes couplées : en bas la chaîne d'énergie (alimenter, distribuer, convertir, transmettre, agir sur la matière d'œuvre) ; en haut la chaîne d'information (acquérir, traiter, communiquer). La chaîne d'information commande la chaîne d'énergie au niveau « distribuer » et reçoit en retour la mesure des capteurs.](/ressources/img/chaine-energie/generique.svg)

## À quoi ça sert ?

Un système mécatronique fait deux choses à la fois : il **transforme de l'énergie** pour produire une action (faire tourner un moteur, chauffer, déplacer) et il **traite de l'information** pour décider quoi faire (lire un capteur, comparer à une consigne, commander). Les séparer en deux chaînes aide à :

- **répartir le projet** — la chaîne d'énergie mobilise l'électronique de puissance et la mécanique (côté collègues) ; la chaîne d'information, les capteurs, le [[microcontroleur|microcontrôleur]] et le [[cpp|code]] ;
- **repérer les interfaces** — c'est à la jonction des deux chaînes que se jouent les [[niveaux-de-tension|niveaux de tension]], les drivers, la compatibilité des signaux ;
- **voir l'asservissement** — quand l'information mesure ce que l'énergie produit, la boucle se ferme : le système est asservi.

Le modèle complète le [[schema-bloc-fonctionnel|schéma bloc fonctionnel]] (qui montre les fonctions) et le [[schema-cinematique|schéma cinématique]] (qui montre les mouvements) : ici, on suit les **flux** d'énergie et d'information.

## Les deux chaînes

**La chaîne d'énergie** transforme une source jusqu'à l'action, en quatre temps avant d'agir :

1. **Alimenter** — fournir l'énergie (batterie, secteur, alimentation régulée).
2. **Distribuer** — la doser et l'aiguiller sous le contrôle de la commande (driver, pont en H, relais). C'est l'**étage piloté**.
3. **Convertir** — changer de forme d'énergie : un moteur convertit l'électrique en mécanique.
4. **Transmettre** — adapter le mouvement (réducteur, courroie, engrenage).

Au bout de la chaîne, le système **agit** sur la matière d'œuvre.

**La chaîne d'information** pilote le système en trois temps :

1. **Acquérir** — mesurer des grandeurs (capteurs, fins de course, codeurs) et recevoir la consigne.
2. **Traiter** — décider : comparer à la consigne, appliquer une loi de commande ([[microcontroleur|microcontrôleur]], [[firmware|firmware]]).
3. **Communiquer** — restituer (afficheur, voyant, message réseau, retour à l'opérateur).

**Le couplage** fait tout l'intérêt du modèle : la chaîne d'information **commande** la chaîne d'énergie — typiquement au niveau *distribuer* — et **acquiert** en retour la mesure de ses effets. Cette boucle mesure → décision → action est le cœur d'un système asservi.

> [!tip] Astuce
> **Quels composants pour chaque bloc ?** Des familles stables et courantes en projet étudiant — à vérifier en disponibilité, la datasheet faisant foi.
>
> | Bloc | Composants courants | Pour choisir |
> |---|---|---|
> | Alimenter | batterie Li-ion + BMS, bloc secteur 9-12 V, régulateurs 7805 / AMS1117 / LM2596 | [[alimentation-electronique\|Alimentation électronique]] |
> | Distribuer | drivers pas-à-pas A4988 / DRV8825, ponts en H L298N / DRV8871, relais, MOSFET | [[choisir-le-materiel\|Choisir le matériel]] |
> | Convertir | moteurs CC, pas-à-pas NEMA 17, servomoteurs SG90 / MG996R | [[choisir-le-materiel\|Choisir le matériel]] |
> | Transmettre | courroies GT2, réducteurs, engrenages | *cours de mécanique (collègues)* |
> | Acquérir | fins de course, codeurs incrémentaux, HC-SR04, DHT22, MPU-6050 | [[choisir-le-materiel\|Choisir le matériel]] |
> | Traiter | familles Arduino / ESP32 / STM32… | [[microcontroleur\|Microcontrôleur]] |
> | Communiquer | OLED SSD1306, LCD 1602, LED et buzzer, Wi-Fi / BLE | [[techno-sans-fil\|Technologies sans fil]] |

## Exemple — Le bras 3 axes

![Les deux chaînes appliquées au bras 3 axes. Chaîne d'énergie : batterie ou secteur (alimenter), drivers (distribuer), moteurs (convertir), réducteurs et courroies (transmettre), bras en mouvement (agir). Chaîne d'information : codeurs et fins de course (acquérir), microcontrôleur (traiter), IHM opérateur (communiquer). Le microcontrôleur commande les drivers et reçoit la position mesurée.](/ressources/img/chaine-energie/bras-3-axes.svg)

Sur le bras du fil rouge, les deux chaînes se lisent membre par membre. Côté **énergie** : la batterie alimente, les drivers distribuent la puissance vers chaque axe, les moteurs convertissent, les réducteurs et courroies transmettent, et le bras agit pour saisir l'objet. Côté **information** : les codeurs et fins de course acquièrent la position, le microcontrôleur traite (il compare à la position cible et calcule la commande), et l'IHM communique l'état à l'opérateur. Le microcontrôleur **commande** les drivers et lit en retour la **position mesurée** : la boucle est fermée, le bras sait où il se trouve.

## Pièges

**Oublier l'étage *distribuer*.** On ne branche pas un moteur directement sur une sortie de microcontrôleur : il faut un **driver** (ou un pont en H) entre la commande et la puissance. Sauter cet étage, c'est griller une sortie — et c'est précisément l'étage que la chaîne fait apparaître.

**Confondre convertir et transmettre.** Le moteur **convertit** l'énergie (électrique → mécanique) ; le réducteur la **transmet** en l'adaptant (couple, vitesse). Deux fonctions distinctes, souvent dans deux composants distincts.

**Tracer une chaîne d'énergie sans retour.** Sans capteur qui mesure l'effet produit, le système est en boucle ouverte : il commande à l'aveugle. Beaucoup de défaillances viennent d'un retour oublié dès la conception.

**Ranger un composant dans la mauvaise chaîne.** Un capteur appartient à la chaîne d'**information** (il renseigne), même s'il est parcouru par un courant. Le critère : le composant transporte-t-il de la **puissance** (énergie) ou une **grandeur à connaître** (information) ?

## Voir aussi

- [[alimentation-electronique|Concevoir une alimentation électronique]] — l'ingénierie du bloc *alimenter / distribuer*
- [[schema-bloc-fonctionnel|Schéma bloc fonctionnel]] — les **fonctions** et leurs flux ; vue complémentaire
- [[schema-cinematique|Schéma cinématique]] — les **mouvements** du mécanisme mis en action par la chaîne d'énergie
- [[asservissement|Boucle ouverte / boucle fermée]] — ce que devient le couplage quand la mesure revient à la commande
- [[microcontroleur|Microcontrôleur]] — le cœur de la chaîne d'information
- [[concept|Concept]] — la phase où l'on pose ces chaînes pour répartir le projet
