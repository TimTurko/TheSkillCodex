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

**LTspice** (édité gratuitement par Analog Devices) est le simulateur **SPICE** de référence pour le dimensionnement **précis** d'un circuit analogique. Là où [[falstad|Falstad]] fait *comprendre*, LTspice fait *décider* : modèles réels de composants, analyses complètes (temporelle, fréquentielle, point de fonctionnement), résultats fidèles. Il est plus austère — schéma à saisir, analyse à déclarer par une directive — mais c'est l'outil quand les valeurs comptent vraiment (alimentations, filtres, étages de puissance). Cette fiche est un tuto-outil du hub [[simulation-electronique|simulation électronique]].

*Prendre capture d'écran de l'interface de LTspice : le schéma à gauche (source, résistance, condensateur, masse) avec la directive .ac visible, et à droite la fenêtre de tracé du gain en fonction de la fréquence avec le point -3 dB repéré.*

## À quoi ça sert ?

LTspice vise la **précision SPICE** :

- **dimensionner sérieusement** — choisir une valeur de composant en connaissant la marge réelle, pas un ordre de grandeur ;
- **utiliser des modèles fabricants** — beaucoup de composants (régulateurs, MOSFET, diodes) ont un modèle SPICE fourni par leur fabricant, qu'on importe pour simuler le composant *réel* et non une version idéale ;
- **mener les trois analyses** avec rigueur — point de fonctionnement, transitoire, fréquentiel — et lire des valeurs exploitables dans un [[dossier-technique|dossier technique]].

C'est un logiciel **installé en local** (Windows, macOS), gratuit et sans limite de taille de circuit — au prix d'une prise en main plus exigeante que Falstad.

## Prendre en main

1. **Installer** LTspice depuis le site d'Analog Devices, puis créer un **nouveau schéma**.
2. **Placer les composants** (résistance, condensateur, source, semi-conducteurs) depuis la barre d'outils, et les **relier** par des fils. Ne pas oublier la **masse** : sans nœud de référence, SPICE refuse de simuler.
3. **Renseigner les valeurs** (double-clic) et, pour un composant réel, **importer son modèle SPICE** (fichier `.lib`/`.mod` fourni par le fabricant).
4. **Choisir l'analyse par une directive** posée sur le schéma :
   - `.op` — le point de fonctionnement (tensions/courants au repos) ;
   - `.tran` — l'analyse transitoire (évolution dans le temps) ;
   - `.ac` — l'analyse fréquentielle (gain et phase selon la fréquence).
5. **Lancer**, puis **cliquer un nœud** pour tracer sa tension, ou **un fil** pour le courant qui y circule.

> [!note]
> **La directive est le choix de l'analyse.** Contrairement à Falstad qui simule en continu, LTspice ne calcule que ce que la directive demande. Oublier la directive, ou en poser une qui ne correspond pas à la question, est la première cause de « ça ne montre rien ».

## Exemple — Un filtre RC passe-bas

Reprenons un montage simple mais riche : un filtre passe-bas RC, dont on veut connaître la **fréquence de coupure**.

*Prendre capture d'écran sur LTspice du filtre RC passe-bas (source AC, résistance en série, condensateur vers la masse) et du tracé du gain en dB selon la fréquence : plateau à basse fréquence puis décroissance, avec la fréquence de coupure repérée au point -3 dB.*

1. **Saisir** : une source `AC` en entrée, une résistance (1 kΩ) en série, un condensateur (160 nF) vers la masse, et la masse.
2. **Analyse transitoire d'abord** (`.tran`) : appliquer un échelon et voir la sortie monter doucement — la même exponentielle que sur [[falstad|Falstad]], mais avec des valeurs exactes.
3. **Puis analyse fréquentielle** (`.ac`) : tracer le **gain en dB** selon la fréquence. La courbe est plate à basse fréquence, puis décroît.
4. **Lire la fréquence de coupure** : c'est l'abscisse où le gain a chuté de **−3 dB**. On la relève sur la courbe.
5. **Confronter** : la théorie donne fc = 1 / (2π·R·C) = 1 / (2π × 1 kΩ × 160 nF) ≈ **1 kHz**. Si le −3 dB simulé tombe vers 1 kHz, le filtre est dimensionné juste ; sinon, on ajuste R ou C et on relance.

L'apport de LTspice ici : la fréquence de coupure n'est pas estimée à l'œil, elle est **mesurée** sur une courbe fidèle — exploitable telle quelle dans une note de dimensionnement.

## Pièges

**Garbage in, garbage out.** Un modèle de composant faux ou une valeur mal saisie donne un résultat **précis mais faux**. La précision de LTspice ne rachète pas une erreur de saisie — d'où la validation sur un cas connu (voir le hub).

**Oublier la masse.** Sans nœud de référence (GND), la simulation échoue ou renvoie n'importe quoi. C'est l'erreur de débutant la plus fréquente sous SPICE.

**Lancer la mauvaise directive.** Chercher une fréquence de coupure avec `.tran`, ou un régime établi avec `.ac`, ne donne pas la réponse attendue. La directive suit la question (voir hub, *les trois familles d'analyse*).

**Échec de convergence.** SPICE peut refuser de converger sur certains montages (boucles, modèles raides). Le message est déroutant mais classique : il se traite en ajustant les options de simulation ou en simplifiant le modèle — pas en concluant que le circuit est faux.

**Sur-outiller un cas trivial.** Vérifier qu'une LED s'allume ne justifie pas LTspice : pour comprendre vite, [[falstad|Falstad]] suffit. LTspice se réserve aux cas où la valeur exacte compte.

## Voir aussi

- [[simulation-electronique|Simulation électronique]] — le hub : méthode, types d'analyse et lecture des résultats
- [[falstad|Falstad]] — l'outil pour comprendre et explorer vite, en amont du dimensionnement
- [[lire-une-datasheet|Lire une datasheet]] — d'où viennent les modèles et valeurs à saisir
- [[niveaux-de-tension|Niveaux de tension]] — vérifier une compatibilité de niveaux par simulation
- [[dossier-technique|Dossier technique]] — où les valeurs dimensionnées sont consignées
