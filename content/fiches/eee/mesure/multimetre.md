---
title: Multimètre
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - instruments-de-mesure
  - niveaux-de-tension
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
---

**Le multimètre** est l'instrument de mesure de base de tout électronicien : il mesure une **tension**, un **courant**, une **résistance**, et teste la **continuité** d'une connexion. Il donne une **valeur ponctuelle** — un nombre, pas une forme d'onde : pour observer un signal qui varie vite, c'est l'[[oscilloscope|oscilloscope]] qu'il faut. Robuste et peu coûteux, il répond à l'immense majorité des questions de diagnostic : « y a-t-il du 5 V ici ? », « cette piste est-elle coupée ? », « quelle est la valeur de cette résistance ? ». Cette fiche est un tuto-outil du hub [[instruments-de-mesure|instruments de mesure]].

*Prendre capture d'écran d'un multimètre numérique avec ses éléments annotés : l'écran, le sélecteur rotatif (positions tension continue V⎓, tension alternative V∼, résistance Ω, courant A, continuité), et les trois bornes (COM, V/Ω, et la borne courant marquée 10 A).*

## À quoi ça sert ?

Les fonctions courantes d'un multimètre :

- **tension continue (V⎓ / DC)** — vérifier une alimentation (5 V, 3,3 V, tension d'une pile), relever un niveau logique ;
- **tension alternative (V∼ / AC)** — mesurer une tension du secteur ou un signal alternatif (valeur efficace) ;
- **résistance (Ω)** — lire la valeur d'une résistance, vérifier un capteur résistif (thermistance, photorésistance) ;
- **continuité** — un bip quand la résistance est quasi nulle : tester en quelques secondes si une piste, une soudure ou un câble est bien connecté ;
- **courant (A)** — mesurer le courant consommé par un montage (en série, voir plus bas) ;
- souvent aussi **test de diode**, et parfois **capacité** ou **fréquence**.

Pour les signaux qui **varient dans le temps** ([[pwm|PWM]], trame série, rebond de contact), le multimètre ne suffit pas — il affiche une moyenne ou une valeur instable : passer à l'[[oscilloscope|oscilloscope]].

## Mesurer pas à pas

1. **Choisir la fonction et le calibre** avec le sélecteur : type de grandeur (V⎓, V∼, Ω, A) et, sur un appareil manuel, le calibre adapté (partir large). Les appareils *auto-range* choisissent seuls le calibre.
2. **Brancher les cordons aux bonnes bornes.** Le cordon noir va toujours dans **COM**. Le rouge va dans la borne **V/Ω** pour mesurer tension, résistance et continuité — ou dans la borne **courant** (souvent « 10 A » ou « mA ») uniquement pour mesurer un courant. *C'est le point qui prête le plus à l'erreur (voir Pièges).*
3. **Connecter au circuit selon la grandeur :**
   - **tension** → pointes **en parallèle** sur les deux points entre lesquels on veut la différence de potentiel (le circuit reste alimenté) ;
   - **résistance / continuité** → composant **hors tension**, idéalement isolé du reste du circuit ;
   - **courant** → **en série**, en ouvrant le circuit pour y insérer le multimètre.
4. **Lire la valeur** et son unité, en tenant compte du calibre.

![Deux montages comparés : à gauche un voltmètre branché en parallèle aux bornes d'une résistance (circuit fermé), à droite un ampèremètre inséré en série dans le circuit (ouvert pour le placer).](/ressources/img/multimetre-serie-parallele.svg)

> [!tip]
> **Le mode continuité est le meilleur ami du dépannage.** Avant de soupçonner un composant, on vérifie au bip que chaque liaison est bien établie : un câble coupé, une soudure froide ou une piste fêlée se trouvent en quelques secondes, montage éteint.

## Exemple — Vérifier l'alimentation d'une carte

Une carte à microcontrôleur ne démarre pas. Avant tout, on vérifie « est-ce que le courant arrive, et à la bonne tension ? ».

*Prendre capture d'écran de la mesure : pointe noire sur GND, pointe rouge sur la broche 5 V d'une carte Arduino, l'écran affichant une valeur proche de 5 V.*

1. **Alimentation** — sélecteur sur **V⎓**, COM sur la masse (GND) de la carte, pointe rouge sur la broche **5 V** : on attend ≈ 5 V. Une valeur très basse (3 V, 0 V) oriente vers une alimentation insuffisante, un câble USB *charge seule*, ou un court-circuit qui fait s'écrouler la tension.
2. **Chute sur une LED** — pointes aux bornes d'une LED allumée : on lit sa tension directe (≈ 2 V pour une rouge, ≈ 3 V pour une bleue). Cela confirme qu'elle est bien polarisée et alimentée.
3. **Continuité d'une piste** — montage **éteint**, mode continuité, une pointe à chaque extrémité d'une liaison suspecte : un bip confirme qu'elle passe, le silence révèle la coupure.

En trois mesures simples, on a localisé si le problème vient de l'alimentation, d'un composant ou d'une connexion — sans rien dessouder à l'aveugle.

## Pièges

**Ampèremètre laissé en position courant, rebranché en parallèle.** L'erreur classique : après une mesure de courant, on oublie de remettre le cordon rouge dans la borne V/Ω et de repasser le sélecteur en tension. La fois suivante, on pose les pointes en parallèle « pour mesurer une tension » — mais l'appareil est encore en ampèremètre : court-circuit, **fusible grillé**. Réflexe : revenir en mesure de tension dès qu'on a fini une mesure de courant.

**Mesurer une résistance sous tension.** La fonction ohmmètre injecte son propre courant : appliquée à un circuit alimenté, elle donne n'importe quoi et peut endommager l'appareil. On mesure une résistance **hors tension**.

**Lire le mauvais calibre.** Sur un appareil manuel, un calibre trop petit sature (affichage « 1 » ou « OL »), un calibre trop grand perd en précision. Régler le calibre, ou prendre un *auto-range*.

**Confondre continu et alternatif.** Mesurer du continu sur le calibre alternatif (ou l'inverse) donne une valeur fausse. Vérifier la position ⎓ / ∼ du sélecteur.

**Oublier l'effet de charge.** Sur un nœud à très haute impédance, le faible courant prélevé par le voltmètre peut abaisser la tension lue. Rare en projet, mais à connaître (voir le hub, *La mesure n'est pas neutre*).

## Voir aussi

- [[instruments-de-mesure|Instruments de mesure]] — le hub : méthode et choix de l'instrument
- [[oscilloscope|Oscilloscope]] — quand la valeur ne suffit pas et qu'il faut voir la *forme* du signal
- [[niveaux-de-tension|Niveaux de tension]] — les seuils qu'on vérifie au multimètre (prérequis)
- [[lire-une-datasheet|Lire une datasheet]] — la valeur attendue à laquelle confronter la mesure
- [[gpio|GPIO]] — vérifier au multimètre l'état réel d'une broche (HIGH / LOW)
