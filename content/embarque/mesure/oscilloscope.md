---
title: Oscilloscope
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - instruments-de-mesure
  - chronogramme
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
---

**L'oscilloscope** affiche la **tension en fonction du temps** : là où le [[multimetre|multimètre]] donne *une valeur*, l'oscilloscope montre *une forme d'onde* — l'évolution du signal, instant par instant. C'est l'instrument indispensable dès qu'un signal **varie vite** : visualiser un [[pwm|PWM]], mesurer une fréquence et un rapport cyclique, repérer le rebond d'un bouton, vérifier qu'une trame série ou un signal de [[bus-de-communication|bus]] a la bonne allure. Il ne donne sa pleine mesure qu'avec trois réglages bien compris — base de temps, calibre vertical et **déclenchement** (*trigger*). Cette fiche est un tuto-outil du hub [[instruments-de-mesure|instruments de mesure]] ; pour la lecture d'une forme d'onde en elle-même, voir [[chronogramme|chronogramme]].

*Prendre capture d'écran de la face avant d'un oscilloscope avec ses zones annotées : l'écran quadrillé, le bloc de réglage vertical (Volts/div), le bloc horizontal (Temps/div), et le bloc de déclenchement (Trigger : niveau et front).*

## À quoi ça sert ?

L'oscilloscope répond à des questions que le multimètre ne peut pas traiter :

- **voir la forme** d'un signal — carré, sinusoïdal, en dents de scie, bruité — et pas seulement sa valeur moyenne ;
- **mesurer dans le temps** — la période et donc la **fréquence**, le **rapport cyclique** d'un PWM, un temps de montée, la durée d'une impulsion ;
- **repérer un défaut dynamique** — un rebond de contact, une oscillation parasite, un signal qui s'effondre sous charge, un *glitch* trop bref pour un multimètre ;
- **vérifier une communication** — l'allure d'une trame [[bus-de-communication|UART, I²C ou SPI]] (un analyseur logique la *décode*, l'oscilloscope en montre la *qualité électrique*).

Pour une simple valeur continue — une tension d'alimentation, une résistance — le [[multimetre|multimètre]] reste plus rapide. L'oscilloscope se réserve aux signaux qui **bougent**.

## Prendre en main

1. **Brancher la sonde, masse comprise.** La sonde a une pointe (le signal) et une **pince de masse** : cette pince doit être reliée à la **masse du circuit**. Ce n'est pas optionnel — c'est une condition de sécurité (voir *Pièges*).
2. **Régler le calibre vertical (Volts/div).** L'axe vertical est en volts : choisir l'échelle pour que le signal occupe une bonne partie de l'écran sans déborder.
3. **Régler la base de temps (Temps/div).** L'axe horizontal est en secondes : l'ajuster pour voir quelques périodes du signal — ni une bouillie d'oscillations tassées, ni une seule période étirée.
4. **Régler le déclenchement (*trigger*).** C'est le réglage clé : il dit à l'oscilloscope **quand** commencer à tracer (par exemple « au front montant, quand le signal passe 1,6 V »). Sans trigger correct, l'image défile et reste illisible.
5. **Tenir compte de la sonde (×1 / ×10).** Une sonde ×10 divise le signal par 10 (pour mesurer de plus fortes tensions sans saturer) : l'oscilloscope doit être réglé sur ×10 pour afficher la vraie valeur.
6. **Lire** amplitude et durées sur le quadrillage, ou via les mesures automatiques de l'appareil.

> [!note]
> **Le trigger transforme un signal défilant en image stable.** Un signal périodique retracé sans synchronisation « glisse » sur l'écran. Le déclenchement fixe un point de départ commun à chaque balayage (un front, un niveau) : les tracés se superposent et le signal paraît figé, donc lisible. Un signal instable à l'écran est presque toujours un problème de trigger, pas de signal.

## Exemple — Observer un signal PWM

On veut vérifier le signal produit par un `analogWrite()` sur une carte Arduino : sa forme, sa fréquence et son rapport cyclique.

*Prendre capture d'écran de l'écran de l'oscilloscope montrant un signal carré PWM : niveau haut puis bas, avec la période repérée sur l'axe horizontal et le rapport cyclique (proportion du temps à l'état haut) visible.*

1. **Brancher** la pointe de sonde sur la broche PWM, la pince de masse sur la GND de la carte.
2. **Régler** le calibre vertical autour de 1 à 2 V/div (signal 0–5 V) et la base de temps pour voir quelques périodes.
3. **Déclencher** sur le front montant, niveau ≈ 1,6 V : le signal carré se fige.
4. **Lire la fréquence** : mesurer la période T sur l'axe horizontal ; la fréquence vaut 1/T (≈ 490 Hz sur la plupart des broches PWM Arduino par défaut).
5. **Lire le rapport cyclique** : la proportion du temps passé à l'état haut sur une période. Une consigne `analogWrite(broche, 128)` (la moitié de 255) doit donner ≈ 50 %, une consigne 64 ≈ 25 %.

On a confirmé non seulement *que* le signal sort, mais *à quelle fréquence* et *avec quel rapport cyclique* — une information que le multimètre, qui n'aurait montré qu'une tension moyenne, ne pouvait pas donner.

## Pièges

**Oublier la masse commune — court-circuit par la terre.** La masse d'un oscilloscope de paillasse est reliée à la terre du secteur. Clipper la pince de masse sur un point qui n'est *pas* la masse du circuit relie ce point à la terre : court-circuit, dégâts possibles. Toujours relier la pince de masse à la masse du montage, et redoubler de prudence sur un circuit relié au secteur.

**Sonde ×10 non déclarée.** Si la sonde est en position ×10 mais l'oscilloscope réglé sur ×1, toutes les amplitudes lues sont fausses, d'un facteur 10. Vérifier l'accord sonde / réglage avant de mesurer.

**Mauvais trigger.** Un niveau de déclenchement hors de la plage du signal, ou le mauvais front, laisse l'image défiler. Régler le niveau dans l'amplitude réelle du signal.

**Base de temps inadaptée.** Trop rapide, on ne voit qu'un bout de période ; trop lente, le signal se tasse en un trait. L'ajuster pour quelques périodes à l'écran.

**Confondre les amplitudes.** Crête, crête-à-crête (Vpp) et valeur efficace décrivent des grandeurs différentes : lire la bonne selon ce qu'on cherche (voir [[chronogramme|chronogramme]]).

**Sous-estimer la bande passante.** Un oscilloscope et sa sonde ont une bande passante maximale : un signal trop rapide est arrondi ou atténué. Pour les signaux lents d'un projet étudiant c'est rarement limitant, mais à garder en tête sur les fronts très raides.

## Voir aussi

- [[instruments-de-mesure|Instruments de mesure]] — le hub : méthode et choix de l'instrument
- [[multimetre|Multimètre]] — quand une valeur ponctuelle suffit
- [[chronogramme|Chronogramme]] — lire et interpréter une forme d'onde (prérequis conceptuel)
- [[simulation-electronique|Simulation électronique]] — la courbe simulée, attendu auquel confronter la trace réelle
- [[pwm|PWM]] — le signal carré qu'on observe le plus souvent à l'oscilloscope
- [[lire-une-datasheet|Lire une datasheet]] — les caractéristiques (niveaux, *timings*) à vérifier
