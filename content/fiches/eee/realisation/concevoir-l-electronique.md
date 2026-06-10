---
title: Concevoir l'électronique
type: trame
tags:
  - eee
  - trame
  - realisation
prerequis:
  - choisir-le-materiel
aa: []
draft: false
---

**Concevoir l'électronique**, c'est la troisième étape de la [[fiches/eee/index|réalisation du sous-système embarqué]]. Ta carte est choisie ([[choisir-le-materiel|étape 2]]) ; tu dois maintenant **dessiner le circuit qui l'entoure** — relier les capteurs et les actionneurs retenus à l'étape 2, adapter les niveaux de tension, distribuer l'énergie, protéger les entrées — puis le **vérifier** par le calcul et la simulation avant de souder quoi que ce soit. Le livrable est un **schéma électronique validé**, prêt à passer au [[pcb|circuit imprimé]].

## Posture attendue

La tentation est double : te précipiter vers la réalisation physique de la carte — le [[pcb|circuit imprimé]] — avant que le schéma ne soit juste, ou recopier un schéma de tutoriel sans vérifier qu'il tient avec *ta* carte et *tes* composants. Le schéma n'est pas un dessin, c'est un **raisonnement** : chaque liaison y est justifiée par une tension, un courant, une protection. Tu ne le figes qu'une fois chaque interface vérifiée — jamais avant. Le coût d'une erreur de schéma découverte après fabrication (une entrée grillée, un rail sous-dimensionné) se compte en cartes refaites ; la même erreur trouvée sur le papier se corrige en une minute.

## Objectif de l'étape

Produire un **schéma électronique validé** qui :

- relie chaque capteur et chaque actionneur recensé à l'inventaire des interfaces (étape 1 ci-dessous) à la carte retenue ;
- garantit la **compatibilité des niveaux de tension** entre la carte et chaque périphérique ;
- distribue l'énergie par des **rails dimensionnés**, régulés et découplés, avec une masse pensée ;
- **protège** les entrées sensibles et les charges (diodes, tirages, limitations) ;
- est **vérifié** par calcul ou simulation sur les points incertains ;
- est **figé** et prêt à passer au [[pcb|circuit imprimé]].

## Démarche

### 1. Inventorier les interfaces

Avant de tracer le moindre fil, dresse la liste exhaustive de ce que ta carte doit relier. Tu croises deux entrées : la liste chiffrée des fonctions issue du [[decomposition-fonctionnelle|cadrage du besoin]] (combien de moteurs, de capteurs, de contacts, quelle interface opérateur) et le brochage de la carte choisie à l'[[choisir-le-materiel|étape 2]]. Pour chaque liaison, note la **nature du signal** (logique, analogique, puissance), sa **tension**, son **courant** et sa **fréquence**. La [[lire-une-datasheet|datasheet]] de chaque composant donne ces valeurs ; l'[[analyse-de-schema-electronique|analyse de schéma]] fournit les symboles et conventions.

Cet inventaire est ta carte des interfaces : il dit *quoi* relier avant de dire *comment*. Toute liaison oubliée ici devient un fil manquant sur le circuit imprimé.

> [!example] Exemple : projet bras 3 axes
> Le bras retient trois steppers pilotés par drivers, trois capteurs d'angle, six fins de course et une console série vers le PC — la liaison opérateur finale est en Wi-Fi : sans fil, elle n'ajoute aucune interface à câbler. Inventaire des interfaces autour de l'ESP32 (logique 3,3 V) :
>
> | Liaison | Nature | Tension | Courant / fréquence |
> |---|---|---|---|
> | 3 drivers de stepper (STEP, DIR) | logique (impulsions) | 3,3 V | signal, ~20 kHz max |
> | 3 capteurs d'angle | analogique | 3,3 V | 1 mesure / 10 ms |
> | 6 fins de course | logique (état tout-ou-rien) | contact sec | événementiel |
> | Bobines des steppers (via drivers) | puissance | 12 V | ~1 A par phase |
> | Console PC (débogage) | série | 3,3 V | 115 kbit/s |
>
> **Sortie** : 5 familles de liaisons, dont une seule en puissance (12 V) et une seule à adapter (fins de course). Cet inventaire commande les étapes 2 à 4.

> [!livrable] Livrable 1/5 — Tableau des composants à interfacer
> - L'inventaire des interfaces : pour chaque liaison, nature du signal, tension, courant, fréquence

### 2. Adapter les niveaux de tension

Chaque liaison de l'inventaire relie deux mondes qui n'ont pas forcément la même tension. Ton microcontrôleur raisonne le plus souvent en 3,3 V ; un capteur peut sortir du 5 V, un étage de puissance vit en 12 V. Pour chaque liaison, compare la tension côté microcontrôleur et côté périphérique, puis choisis l'adaptation quand elles diffèrent : liaison **directe** si les tensions coïncident, **pont diviseur** pour abaisser une sortie vers une entrée, **convertisseur de niveau** (*level-shifter*) pour une liaison bidirectionnelle ou rapide, **optocoupleur** pour isoler la puissance de la logique. Les [[niveaux-de-tension|niveaux de tension]] détaillent ces montages et leurs limites.

> [!warning] Attention
> **Une entrée 3,3 V ne survit pas à un signal 5 V.** Appliquer à une entrée logique une tension supérieure à son alimentation fait conduire ses diodes de protection internes, puis détruit l'étage d'entrée — souvent en silence, le défaut n'apparaissant qu'à l'usage. Ramène tout signal entrant dans la plage de ton microcontrôleur *avant* qu'il n'atteigne la broche, jamais après.

> [!tip] Astuce
> **Tu as le droit de ne pas savoir — pas de ne pas tester.** Première rencontre avec un *level-shifter* ou un optocoupleur ? Monte-le seul sur platine d'essai et vérifie-le à la mesure avant de l'inscrire au schéma : c'est l'équivalent matériel d'un test unitaire. Et commence par la [[lire-une-datasheet|datasheet]] : elle fournit presque toujours le schéma de câblage de principe (*typical application*), point de départ plus sûr qu'un tutoriel.

> [!example] Exemple : projet bras 3 axes
> Les cinq familles de liaisons passées en revue : une seule demande une adaptation, et la puissance ne touche jamais le microcontrôleur.
>
> | Liaison | Côté MCU | Côté périphérique | Adaptation |
> |---|---|---|---|
> | Drivers STEP/DIR | sorties GPIO 3,3 V | entrées 3,3 V tolérées | directe |
> | Capteurs d'angle | entrées ADC 0–3,3 V | sortie 0–3,3 V | directe |
> | Fins de course | entrées GPIO 3,3 V | contact vers tension de tirage | tirage sur 3,3 V |
> | Console PC | UART 3,3 V (TX/RX) | pont USB-série de la carte de dev | directe (intégrée à la carte) |
> | Bobines des steppers | — (jamais reliées au MCU) | 12 V | gérée par le driver |
>
> **Sortie** : aucune incompatibilité résiduelle dès lors que les fins de course sont tirées sur le 3,3 V — et non sur un 5 V, piège classique écarté par conception.

> [!livrable] Livrable 2/5 — Tableau des niveaux de tension
> - Le tableau d'adaptation des niveaux : pour chaque liaison, tension des deux côtés et montage d'adaptation retenu

### 3. Distribuer l'énergie

Tes composants sont reliés et compatibles ; reste à les **alimenter**. Conçois l'arborescence d'alimentation, de la source aux composants : une **source** (batterie, bloc secteur), un ou plusieurs **rails régulés** (souvent 12 V pour la puissance, 5 V et 3,3 V pour la logique), le **découplage** (condensateurs au plus près de chaque circuit, pour absorber les appels de courant), et une **masse** pensée comme un réseau, pas comme un fil. Pour chaque rail, établis un **budget de courant** : la somme des consommations des composants alimentés, majorée d'une marge. La [[alimentation-electronique|conception d'une alimentation]] détaille régulation, dimensionnement et autonomie.

> [!warning] Attention
> **Le découplage oublié et la masse mal pensée sont les deux fautes d'alimentation les plus coûteuses.** Sans condensateur de découplage près d'un microcontrôleur, les appels de courant des commutations font chuter sa tension et provoquent des redémarrages erratiques, impossibles à diagnostiquer dans le code. Une masse partagée entre la puissance (moteurs) et la logique fait remonter le bruit des moteurs dans tes mesures analogiques : sépare les deux masses, réunis-les en un seul point (masse en étoile).

> [!example] Exemple : projet bras 3 axes
> Arborescence d'alimentation du bras, à partir d'une source 12 V :
>
> | Rail | Tension | Alimente | Budget courant |
> |---|---|---|---|
> | Puissance | 12 V | 3 drivers de stepper (bobines) | ~3 A |
> | Logique | 5 V (régulé du 12 V) | entrée VIN de la carte ESP32 | ~0,6 A |
> | Microcontrôleur | 3,3 V (régulé du 5 V, sur la carte) | ESP32, capteurs d'angle, tirages des fins de course | ~0,5 A (pics Wi-Fi) |
>
> Masses puissance et logique séparées, réunies en un point près de la source. Découplage de 100 nF à chaque broche d'alimentation de l'ESP32 et des drivers.
>
> **Sortie** : trois rails, budget de courant établi, régulateurs choisis (12→5 V externe, 5→3,3 V embarqué sur la carte), masse en étoile. Ce schéma d'alimentation s'intègre au schéma général.

> [!livrable] Livrable 3/5 — Schéma d'alimentation (logique et puissance)
> - Le schéma d'alimentation : arborescence source → rails, régulation, découplage, masse, et budget de courant par rail

### 4. Protéger et fiabiliser le câblage

Un schéma qui relie et alimente correctement peut encore détruire ses composants au premier incident. Ajoute les **protections** : une **diode de roue libre** (*flyback*) sur toute charge inductive commandée (relais, moteur à courant continu) pour absorber la surtension à la coupure — les drivers de stepper l'intègrent généralement, mais une bobine que tu pilotes directement l'exige ; des **résistances de tirage** (*pull-up* / *pull-down*) pour fixer le niveau des entrées flottantes (un bouton, une fin de course) ; une **limitation de courant** sur les sorties qui pilotent des LED ou des charges ; une **protection des entrées** exposées (résistance série et écrêtage) dès qu'un fil sort de la carte. Ces montages relèvent de l'[[analyse-de-schema-electronique|analyse de schéma]] et des [[niveaux-de-tension|niveaux de tension]].

> [!tip] Astuce
> **Place tes protections sur le schéma, pas en rattrapage sur la carte finie.** Ajouter une diode de roue libre ou un tirage après coup, sur un circuit imprimé déjà routé, oblige à du fil volant peu fiable. Penser les protections au schéma coûte un symbole ; les ajouter après coûte une révision de carte.

> [!example] Exemple : projet bras 3 axes
> Protections retenues pour le bras :
>
> | Élément à protéger | Risque | Protection |
> |---|---|---|
> | Bobines des steppers | surtension à la coupure | intégrée aux drivers (roue libre) |
> | Entrées fins de course | niveau flottant, rebonds | tirage 3,3 V + filtrage RC léger |
> | Entrées capteurs (fils longs) | parasites, surtension | résistance série + condensateur |
> | Alimentation 12 V | inversion de polarité | diode série en tête |
>
> **Sortie** : chaque entrée a un niveau défini au repos, chaque charge inductive est protégée, l'alimentation est protégée en polarité. Le schéma est désormais robuste aux incidents courants.

> [!livrable] Livrable 4/5 — Protections du circuit
> - Les protections intégrées au schéma : roue libre sur charges inductives, tirages sur entrées, protections des entrées exposées et de l'alimentation

### 5. Vérifier, figer, passer au circuit imprimé

Ton schéma est complet ; avant de le figer, **vérifie ses points incertains**. Tout ne se calcule pas de tête : un pont diviseur sous charge, un régulateur en limite de courant, un transitoire d'allumage se vérifient par la [[simulation-electronique|simulation]]. Ne simule pas tout — seulement ce dont tu n'es pas sûr. Une fois chaque incertitude levée, fige le schéma : c'est la version qui part au **routage**, le tracé des pistes. Le [[pcb|circuit imprimé]] traduit ce schéma figé en carte fabricable ; toute modification ultérieure du schéma t'oblige à reprendre le routage, d'où l'intérêt de ne figer qu'une fois sûr.

> [!warning] Attention
> **Router avant d'avoir figé le schéma fait perdre le routage.** Chaque correction du schéma après le début du tracé invalide une partie du routage. Fige le schéma d'abord, route ensuite. Et ne simule que l'incertain : simuler un montage évident fait perdre du temps, ne pas simuler un montage douteux fait perdre une carte.

> [!example] Exemple : projet bras 3 axes
> Deux points incertains du schéma du bras, vérifiés en simulation avant de figer :
>
> - **Le tirage des fins de course** : simulation du montage (tirage 3,3 V + filtrage RC) pour vérifier que le niveau bas est franc et que le temps de réponse reste sous 5 ms malgré le filtre. Résultat : niveau bas à 0,1 V, réponse à 1,2 ms — conforme.
> - **Le régulateur 5→3,3 V sous pic Wi-Fi** : simulation de la chute de tension lors d'un appel de 0,5 A. Résultat : creux de 80 mV, dans la tolérance de l'ESP32.
>
> **Sortie** : les deux incertitudes levées, le schéma est figé et transmis au routage.

En synthèse, le schéma de principe du bras, annoté des cinq couches de la démarche :

![Schéma de principe annoté du sous-système embarqué du bras 3 axes : interfaces, niveaux, énergie, protections et points vérifiés](/ressources/img/concevoir-l-electronique-bras-3-axes.svg)

> [!livrable] Livrable 5/5 — Schéma électronique
> - Le **schéma électronique validé** : complet, vérifié en simulation sur les points incertains, figé et prêt pour le routage du circuit imprimé

## Conclusion

Ton schéma est validé : interfaces inventoriées, niveaux adaptés, énergie distribuée, protections en place, points incertains simulés. La suite bascule vers la [[programmer-l-embarque|programmation]] du firmware qui animera ce matériel, et vers la **réalisation physique** de la carte (routage, fabrication, soudure). Le pilotage de cette étape — revue du schéma, mise à jour de la nomenclature, planning d'approvisionnement — est porté par le [[dossier-technique|dossier technique]] du cycle en V.

---

## Pièges fréquents

**Router le circuit imprimé avant d'avoir figé le schéma.** Chaque correction du schéma invalide une partie du tracé déjà posé. Fige le schéma d'abord, route ensuite.

**Recopier un schéma de tutoriel sans vérifier les tensions.** Un montage trouvé en ligne suppose *ses* composants et *sa* carte. Confronte chaque liaison aux tensions réelles de ton inventaire avant de l'adopter.

**Oublier le découplage.** Sans condensateur près des broches d'alimentation, les commutations font chuter la tension et provoquent des redémarrages erratiques — un défaut qui se cherche en vain dans le code.

**Négliger la diode de roue libre sur une charge inductive.** Une bobine coupée brutalement génère une surtension qui détruit le composant de commande. Toute charge inductive pilotée directement exige sa roue libre.

**Partager une seule masse entre puissance et logique.** Le bruit des moteurs remonte alors dans tes mesures analogiques. Sépare les masses puissance et logique, réunis-les en un point unique.

**Tout simuler, ou ne rien simuler.** Simuler un montage évident fait perdre du temps ; ne pas simuler un montage douteux fait perdre une carte. Cible l'incertain, et seulement lui.

## Ce qui relève d'ailleurs

**Le pilotage, c'est le cycle en V.** La revue du schéma, sa place dans la nomenclature (BOM), le planning de commande des composants relèvent du [[dossier-technique|dossier technique]] — cette fiche produit l'artefact, le V l'inscrit dans le projet.

*La fabrication physique de la carte* — gravure ou commande du circuit imprimé, perçage, soudure, contrôle — n'est pas traitée ici : elle relève des travaux pratiques d'électronique et du cours de fabrication des collègues. Cette fiche s'arrête au schéma figé et au routage logique.

*L'impact écoconception* du choix des composants (consommation, durée de vie, réparabilité) et *la sécurité électrique* (protection, conformité basse tension) sont arbitrés au niveau projet : voir [[ecoconception|écoconception]] et [[securite-et-qualite|sécurité et qualité]].

## Voir aussi

- [[fiches/eee/index|Réalisation du sous-système embarqué]]
- Étape précédente : [[choisir-le-materiel|Choisir le matériel]]
- Étape suivante : [[programmer-l-embarque|Programmer]]
- [[analyse-de-schema-electronique|Analyser un schéma électronique]]
- [[niveaux-de-tension|Niveaux de tension]]
- [[alimentation-electronique|Concevoir une alimentation]]
- [[simulation-electronique|Simulation électronique]]
- [[pcb|Circuit imprimé]]
- [[dossier-technique|Dossier technique]] *(pilotage, cycle en V)*
- Cours de fabrication électronique *(collègues)*
