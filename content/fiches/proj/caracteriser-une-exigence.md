---
title: Caractériser une exigence
type: notion
aliases:
  - critere
  - niveau
  - flexibilite
phases:
  - specification
tags:
  - proj
  - notion
  - analyse-fonctionnelle
prerequis:
  - bete-a-cornes
  - pieuvre
  - fonction
aa:
  - RA-PROJET-C04-4/PROJ/1
draft: false
---

**Caractériser une exigence**, c'est la transformer en un triplet chiffrable et arbitrable : un **critère** mesurable, un **niveau** chiffré avec son unité, une **flexibilité** explicite. Cette discipline, imposée par [[afnor-nfx50-151|la norme NF X50-151]], est ce qui distingue une exigence opposable d'une intention. Elle s'applique à chaque [[fonction|fonction]] issue de la [[pieuvre|pieuvre]] pour produire la matière chiffrée du [[cahier-des-charges-fonctionnel|CdCF]].

## À quoi ça sert ?

Une fonction énoncée — *« permettre à l'opérateur de positionner un objet léger »* — dit ce que le système doit faire, mais ne dit ni avec quelle précision, ni à quel coût, ni avec quelle marge d'écart admise. Tant qu'on en reste là, l'exigence n'est ni évaluable en fin de projet, ni arbitrable en cours de route. Le triplet **critère / niveau / flexibilité** comble ce vide : il transforme l'énoncé en engagement chiffré.

Le triplet joue trois rôles indissociables :

- **Rendre l'exigence opposable** — chaque ligne du CdCF engage le concepteur et le client sur une grandeur mesurable. Sans chiffre, pas de contrat ; sans contrat, le projet vit dans l'implicite et les écarts se révèlent trop tard.
- **Préparer l'évaluation finale** — à la livraison, on reprend le CdCF point par point et on vérifie l'atteinte de chaque niveau. Le succès du projet se mesure exigence par exigence, pas par appréciation globale.
- **Prévoir l'arbitrage en cours de route** — la flexibilité dit à l'avance quelles exigences sont négociables et lesquelles ne le sont pas. Sans elle, chaque écart devient une crise ; avec elle, c'est un arbitrage prévu.

C'est l'étape la plus structurante de la [[specification-technique|spécification technique]]. La sauter ou la bâcler produit un CdCF qui ne tient pas debout : un texte de bonnes intentions plutôt qu'un document de référence.

## Comment caractériser une exigence ?

Trois questions à poser pour chaque fonction issue de la [[pieuvre|pieuvre]] :

| Composant | Question | Forme attendue |
|---|---|---|
| **Critère** | Sur quel attribut mesurable juge-t-on la fonction ? | Grandeur observable, idéalement chiffrable |
| **Niveau** | Quelle valeur cible doit atteindre ce critère ? | Chiffre + unité, valeur unique / borne / plage |
| **Flexibilité** | Quelle marge est admise, et est-elle négociable ? | Tolérance numérique + cran F0/F1/F2/F3 |

Le triplet est **indissociable** — chaque composant éclaire les autres. Un critère sans niveau reste qualitatif. Un niveau sans flexibilité devient absolu et bloquant. Une flexibilité sans critère ni niveau n'a rien à arbitrer.

### Le critère

Le **critère** est l'attribut chiffrable et observable sur lequel on jugera la fonction. Bon test à l'écriture : *peut-on imaginer un dispositif de mesure ?* Si non, le critère est mal choisi.

Familles de critères mobilisables :

- **Grandeurs physiques** — masse, longueur, vitesse, précision, température, puissance, autonomie
- **Grandeurs économiques** — coût d'achat, coût de maintenance, coût total de possession
- **Grandeurs temporelles** — durée de vie, MTBF, temps de réponse, temps d'apprentissage
- **Grandeurs binaires** — présence/absence, conformité à une norme, validation par un référent

Le critère doit **discriminer** : il sert à juger, donc il doit séparer un cas conforme d'un cas non conforme. Des intentions comme *« ergonomique »*, *« agréable »*, *« robuste »* ne sont pas des critères — ce sont des qualités floues qu'il faut traduire en grandeurs mesurables (force d'actionnement, plage de température admissible, nombre de cycles avant défaillance).

### Le niveau

Le **niveau** est la valeur cible que doit atteindre le critère. **Toujours chiffré**, **toujours avec une unité**. Il prend plusieurs formes selon la nature du critère :

- **Valeur unique** — `100 g`, `230 V`, `12 V`
- **Borne** — `≤ 5 mm`, `≥ 50 mm/s`, `< 200 € HT`
- **Plage** — entre `20 °C` et `30 °C`, `2,4 GHz ± 100 MHz`
- **Cible binaire** — *conforme directive basse tension 2014/35/UE*, *démontable sans outil spécifique*

Le niveau se construit à l'intersection de deux sources : **le besoin formulé** ([[bete-a-cornes|bête à cornes]], étape 1 de la spécification) et **les ordres de grandeur identifiés** dans l'[[etat-de-l-art-technique|état de l'art technique]] (étape 2). Le besoin dit ce qu'il faut atteindre ; l'état de l'art dit ce qui se fait déjà et fixe les ordres de grandeur réalistes.

> [!tip] Astuce
> **Les exigences chiffrées s'écrivent en [[unite-si|unités SI]].** Tolérances symétriques : `± X mm`. Bornes : `≤ X` ou `≥ X`. Plages : `entre X et Y`. Cette discipline n'est pas une coquetterie d'écriture — elle évite les ambiguïtés (`100mm` mal coupé en bout de ligne, `100m m` ressaisi sans relire) et rend les exigences directement comparables en revue.

Précaution centrale : **ne pas être plus précis que le besoin réel**. Un niveau à `± 0,1 mm` quand `± 5 mm` suffit n'apporte rien d'utilisable, fait exploser le coût et complique inutilement l'arbitrage. Le bon niveau est *celui qui permet au système de remplir son service*, pas le plus serré qu'on sait écrire.

### La flexibilité

La **flexibilité** dit deux choses : **quelle marge** est tolérable autour du niveau, et **dans quelle mesure** cette marge est négociable. Elle a deux composantes complémentaires.

D'abord, la **tolérance numérique** : l'écart concret admis autour du niveau (`± 0,5 mm`, `± 5 %`, `+ 10 mm / − 0 mm`). Elle fixe le périmètre d'acceptabilité de l'exigence.

Ensuite, le **niveau de négociabilité**, échelle qualitative à quatre crans imposée par [[afnor-nfx50-151|NF X50-151]] :

| Cran | Sémantique | Quand l'utiliser |
|---|---|---|
| **F0 — Impérative** | Non négociable. Si le niveau n'est pas atteint, on ne livre pas. | Sécurité, conformité réglementaire, intégrité du service principal |
| **F1 — Peu négociable** | Écart toléré contre compensation forte sur un autre critère. | Performances centrales du système (précision, charge utile, autonomie) |
| **F2 — Négociable** | Écart acceptable s'il est justifié et arbitré. | Performances secondaires, confort d'usage, ergonomie |
| **F3 — Très négociable** | Valeur de confort, écart non bloquant. | Détails finaux d'IHM, options esthétiques |

Le rôle pratique du cran F est de dire **comment on arbitrera** en cas de conflit — entre exigences, contre le budget, contre le calendrier. Une exigence F0 verrouille le projet ; une exigence F3 peut s'effacer sans drame ; les F1 et F2 sont les vrais terrains d'arbitrage en cours de route.

> [!warning] Attention
> **F3 ne veut pas dire « pas important ».** C'est une exigence formellement chiffrée dont l'écart est tolérable et négociable. Une exigence **sans** F du tout, en revanche, est non opposable — la flexibilité est une donnée à part entière du triplet, pas une option qu'on peut omettre quand on n'y a pas réfléchi.

## Exemple — Bras 3 axes pédagogique

Reprenons la fonction principale **FP1** du bras robotique pédagogique 3 axes : *« Permettre à l'opérateur de manipuler le robot pour positionner un objet léger en un point du volume de travail »*. Comment caractérise-t-on cette fonction ? Le triptyque ci-dessous montre trois qualités d'écriture du même triplet — depuis l'écriture inopposable jusqu'à l'écriture pleinement arbitrable.

> [!failure] Mauvais
>
> | Composant | Valeur retenue |
> |---|---|
> | **Critère** | Précision |
> | **Niveau** | Bonne |
> | **Flexibilité** | — |
>
> **Pourquoi c'est mauvais.** Aucun des trois composants ne tient. *« Précision »* sans complément est ambigu : précision de quoi (positionnement ? répétabilité ? résolution capteur ?), mesurée comment, en quel point ? *« Bonne »* n'est pas un niveau, c'est un jugement non chiffré : bon selon qui, par rapport à quel référentiel ? La flexibilité est absente, donc on ne sait pas si cette exigence est verrouillée ou ouverte à arbitrage. Cette ligne ne peut être ni évaluée en fin de projet, ni arbitrée en cours de route.
>
> **Coût réel de cette erreur.** En revue de CdCF, cette ligne sera rejetée immédiatement et le triplet à reprendre. Plus grave : si elle passe la revue par inattention, l'évaluation finale devient impossible — chaque partie s'arc-boutera sur sa propre interprétation de « bonne précision », et l'écart inévitable entre le prototype et l'attente ne pourra pas être tranché par référence au document.

> [!warning] Moyen
>
> | Composant | Valeur retenue |
> |---|---|
> | **Critère** | Précision de positionnement |
> | **Niveau** | ± 5 mm |
> | **Flexibilité** | Une tolérance est acceptable |
>
> **Pourquoi c'est moyen.** Le critère s'est précisé (positionnement, pas répétabilité ni résolution), le niveau est chiffré avec son unité. C'est un vrai progrès. Mais deux faiblesses subsistent. D'abord, le critère reste imprécis sur le **point de mesure** : précision *où* exactement — en bout de bras, à l'articulation, en un point unique ou dans tout le volume ? Le ± 5 mm ne décrit pas le même engagement selon la réponse. Ensuite, *« une tolérance est acceptable »* n'est pas une flexibilité — c'est un vœu pieux non chiffré et sans cran F. En cas de dépassement, comment arbitrer ? Tolérance jusqu'où, contre quelle compensation, et avec quelle marge de négociation ?

> [!example] Bon
>
> | Composant | Valeur retenue |
> |---|---|
> | **Critère** | Précision de positionnement en bout de bras, dans tout le volume de travail accessible |
> | **Niveau** | ± 5 mm |
> | **Flexibilité** | **F1** — écart jusqu'à ± 10 mm acceptable si gain de coût substantiel ou réduction significative de la complexité mécanique |
>
> **Pourquoi c'est bon.** Le critère est complet : on sait *quoi* (précision de positionnement), *où* (bout de bras, dans tout le volume), et donc *comment mesurer* (sonde de palpage en plusieurs points du volume). Le niveau est chiffré avec son unité et formulé en tolérance symétrique conforme aux [[unite-si|unités SI]]. La flexibilité combine les deux composantes attendues : une tolérance numérique explicite (`± 10 mm`) **et** un cran F (`F1`, peu négociable), avec la nature de la compensation qui pourrait justifier l'écart. Cette ligne sera arbitrable en cours de projet, opposable au moment de l'évaluation, et lisible sans glose par le client en revue.

L'écart entre les trois écritures n'est pas une question de longueur — la version *Bon* fait à peine deux lignes de plus que la version *Mauvais*. Ce qui change, c'est la **discipline d'énoncé**. Une fois acquise, elle ne coûte pas plus de temps à l'écriture, et elle évite des heures de discussion défensive à la livraison.

## Pièges

**Critère non mesurable.** *« Ergonomique »*, *« agréable »*, *« robuste »*, *« performant »* ne sont pas des critères mais des intentions. À reformuler systématiquement en grandeur mesurable : force d'actionnement maximale, MTBF, temps d'apprentissage, plage de température admissible. Test : *peut-on imaginer un dispositif de mesure ?*

**Niveau non chiffré.** *« Le système doit être précis »*, *« le coût doit être raisonnable »*, *« la maintenance doit être aisée »* : sans valeur ni unité, l'exigence n'est ni opposable ni évaluable. C'est le piège le plus fréquent en CdCF école, et le premier signalé en revue.

**Citer une solution dans le critère.** *« Précision laser ± 0,1 mm »* mélange le critère (précision) et l'implémentation (laser). On caractérise le besoin, pas l'instrument de mesure — celui-ci sera choisi en phase de [[concept|concept]] ou de [[dossier-technique|dossier technique]] selon la solution retenue.

**Flexibilité absente ou réduite au cran F seul.** Écrire *« F1 »* sans préciser la tolérance numérique, ou inversement *« ± 10 mm acceptable »* sans cran F, est un triplet incomplet. Les deux composantes sont nécessaires : sans tolérance numérique, on ne sait pas jusqu'où l'écart est admis ; sans cran F, on ne sait pas comment arbitrer cet écart en cours de projet.

**Sur-spécification.** Fixer un niveau plus précis que le besoin réel (`± 0,1 mm` quand `± 5 mm` suffit, durée de vie de `100 000 h` quand `10 000 h` couvre tous les cas d'usage) ne sert à rien. Cela fait exploser le coût et le délai sans bénéfice utilisateur, et complique inutilement les arbitrages en cours de projet. Le bon niveau est celui qui permet de remplir le service, pas le plus serré qu'on sait écrire.

**Confondre F3 avec une absence d'exigence.** F3 ne signifie pas « pas important » : c'est une exigence formellement chiffrée, dont l'écart est tolérable. Une exigence légitime à F3 reste dans le CdCF et porte un niveau cible. Une exigence *sans* cran F du tout, en revanche, est non opposable — et révèle généralement qu'elle n'aurait pas dû être dans le document.

## Cas particulier — exigences binaires et réglementaires

Certaines exigences ne se prêtent pas naturellement à un chiffrage par valeur cible et tolérance. Trois familles typiques :

- **Conformité réglementaire** — *« conforme à la directive basse tension 2014/35/UE »*, *« marquage CE »*, *« RoHS »*. Le niveau est binaire (conforme / non conforme), pas chiffré.
- **Présence/absence d'une caractéristique** — *« démontable sans outil spécifique »*, *« pilotable depuis poste informatique »*, *« porte coupure d'urgence accessible »*.
- **Validation par un référent** — *« validé par l'enseignant de mécanique »*, *« approuvé par le responsable sécurité fablab »*.

Le triplet reste applicable, simplement avec un niveau binaire :

| Composant | Forme attendue dans ce cas |
|---|---|
| **Critère** | L'attribut binaire ou réglementaire en jeu |
| **Niveau** | Cible binaire (conforme / présent / validé), avec **référence explicite** au texte normatif ou à la spécification |
| **Flexibilité** | Quasi toujours **F0** pour la conformité réglementaire, parfois F1 pour les caractéristiques structurelles, rarement plus permissif |

Piège associé : *« le système doit respecter les normes en vigueur »* sans citation précise n'est pas un niveau — c'est une formule d'évitement. Citer la norme explicitement (référence et version) est ce qui rend l'exigence vérifiable.

## Voir aussi

- [[specification-technique|Spécification technique]] — phase où chaque fonction est caractérisée (étape 4)
- [[cahier-des-charges-fonctionnel|Cahier des charges fonctionnel]] — document final qui consolide tous les triplets caractérisés
- [[fonction|Fonction]] — typologie FP/FS/FC dont chaque instance se caractérise
- [[pieuvre|Pieuvre]] — outil amont qui produit la liste des fonctions à caractériser
- [[unite-si|Unités SI]] — convention typographique des grandeurs chiffrées
- [[afnor-nfx50-151|Norme NF X50-151]] — cadre méthodologique de référence
