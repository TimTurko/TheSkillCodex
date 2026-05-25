---
title: Concept
type: trame
phase: 2
phases:
  - concept
tags:
  - proj
  - trame
  - phase-2
prerequis:
  - specification-technique
aa: []
draft: false
---

Le **concept** est la deuxième étape du projet [[mecatronique|mécatronique]] : on transforme le [[cahier-des-charges-fonctionnel|cahier des charges fonctionnel]] (le *quoi*) en une **architecture technique préliminaire** (le *comment*). On choisit les grandes options par discipline, on vérifie qu'elles tiennent ensemble, on chiffre suffisamment pour identifier les **incertitudes** qu'il faudra lever en [[preuve-de-concept|preuve de concept]]. Les composants définitifs viendront plus tard, en [[dossier-technique|dossier technique]].

## Posture attendue

La tentation, à ce stade, est d'aller trop vite vers les composants ("on prendra un ESP32 et un driver A4988") ou de laisser chaque discipline travailler dans son coin. Résistez aux deux. Cette phase ne demande pas de choisir les références exactes, elle demande de **poser une architecture défendable** — c'est-à-dire compatible inter-disciplines, justifiée par des matrices, et pré-dimensionnée. C'est aussi la première phase où l'**[[ecoconception|écoconception]] devient un critère de choix**, pas un commentaire en marge.

## Objectif de la phase

Produire un **dossier concept** qui :

- décompose le système en sous-systèmes et fonctions techniques exploitables par discipline
- pour chaque sous-système, justifie le choix d'une **solution technique** par une [[matrice-de-decision|matrice de décision]] intégrant l'[[ecoconception|écoconception]]
- garantit la **compatibilité inter-disciplines** des solutions retenues
- pré-dimensionne chaque discipline (ordres de grandeur, faisabilité)
- identifie explicitement les **incertitudes** à lever en [[preuve-de-concept|preuve de concept]]

Ce document servira de **référence d'architecture** pour la suite du projet : tout choix de composant en [[dossier-technique|dossier technique]] devra être traçable à une solution validée ici.

## Démarche

### 1. Décomposer le système

Le [[cahier-des-charges-fonctionnel|cahier des charges fonctionnel]] est validé : on sait *ce que* le système doit faire. La phase concept ouvre par un mouvement inverse de celui de la [[specification-technique|spécification technique]] : on va maintenant **regarder l'intérieur** du système, le décomposer en blocs internes traçables, et identifier pour chaque bloc les fonctions techniques qui le réaliseront. C'est la passerelle entre les fonctions de service (vues du dehors) et les solutions techniques (étape 2).

Cette étape se mène en deux temps : du système aux sous-systèmes, puis des sous-systèmes aux fonctions techniques.

#### Du système aux sous-systèmes

La [[decomposition-fonctionnelle|décomposition fonctionnelle]] découpe le système global en **sous-systèmes** cohérents qui, assemblés, réalisent les fonctions de service énoncées dans le CdCF. Un bon découpage produit des blocs aux **interfaces nettes** (entrées et sorties identifiées), à l'**autonomie technique** suffisante pour être travaillés en parallèle par l'équipe, et de **taille comparable** — un sous-système qui pèse à lui seul 80 % du projet a probablement été sous-découpé.

Plusieurs visualisations sont mobilisables selon la culture de l'équipe : le [[schema-bloc-fonctionnel|schéma bloc fonctionnel]] (rapide, lisible, sans formalisme lourd), les diagrammes **SADT/IDEF0** (plus formels, utiles si l'équipe les pratique déjà). L'outil compte moins que la discipline qu'il impose : rendre visibles les blocs et leurs interfaces.

Le découpage produit ici n'est pas figé pour toute la phase. L'exploration des solutions à l'étape 2 peut révéler qu'un bloc doit être scindé (deux logiques de commande très différentes coexistent) ou fusionné (deux blocs partagent en fait la même structure). On revient corriger sans état d'âme.

> [!warning] Attention
> **La décomposition peut révéler un trou dans le [[cahier-des-charges-fonctionnel|CdCF]].** Une [[FC]] oubliée, une [[FP]] mal énoncée, un sous-système qui ne se rattache à aucune fonction de service : ces signaux remontent presque toujours pendant la décomposition, parce que c'est la première fois qu'on regarde le système de l'intérieur. La tentation est de les masquer pour ne pas remettre en cause la revue de CdCF validée. Faites l'inverse : tracez la modification, validez-la avec l'encadrant, puis poursuivez. Un CdCF corrigé en début de concept se paye en quelques heures ; le même trou découvert en intégration coûte des semaines.

#### Des sous-systèmes aux fonctions techniques

Le sous-système est posé. Reste à identifier **comment il opère** — par quelles fonctions techniques internes il réalise sa part des fonctions de service. L'outil canonique est le [[fast|FAST]] (*Function Analysis System Technique*) : on place le sous-système en racine, on liste les fonctions techniques qu'il doit assurer (formulées en **verbe à l'infinitif + complément**, comme les fonctions de service), puis on raffine chaque branche jusqu'à atteindre un grain où chaque fonction technique pourra être confrontée à des solutions candidates en étape 2.

La distinction est conceptuelle mais cruciale : une **fonction de service** (issue de la [[pieuvre]] du CdCF) dit ce que le système rend comme service à l'extérieur ; une **fonction technique** (issue du FAST de cette étape) dit comment le système s'y prend en interne. La même fonction de service peut être réalisée par plusieurs combinaisons de fonctions techniques — c'est précisément ce qui ouvre l'espace de solutions exploré à l'étape suivante.

Sur la profondeur du FAST, la règle pratique est simple : descendre tant que la fonction technique n'est pas directement adressable par une solution candidate, s'arrêter dès qu'elle l'est. Aller plus loin, c'est anticiper le [[dossier-technique|dossier technique]] et s'engager prématurément vers un composant.

> [!tip] Astuce
> **Le FAST se raffine en plusieurs passes, pas en un jet unique.** Premier jet à haut niveau pour caler la structure générale du sous-système, puis raffinement au fur et à mesure que l'exploration des solutions (étape 2) fait apparaître des fonctions techniques manquantes ou redondantes. Viser l'exhaustivité au premier coup fait perdre du temps et fige prématurément un découpage qui va de toute façon évoluer.

> [!example] Exemple : projet bras 3 axes
> Décomposition probable en trois sous-systèmes : **mobilité articulaire** (mettre en mouvement les segments, mesurer la position, asservir), **interface utilisateur** (recevoir une consigne, afficher l'état), **alimentation et sécurité** (fournir l'énergie, surveiller, arrêter en cas d'incident). Le découpage ne reflète pas une répartition par discipline — chaque sous-système mobilise élec, méca et info.
>
> [[fast|FAST]] du sous-système *mobilité articulaire*, premier jet : **générer un couple sur chaque axe** → convertir l'énergie électrique en mouvement mécanique ; **mesurer la position angulaire** → capter l'angle de chaque axe ; **asservir le mouvement** → comparer position cible et mesurée, corriger la commande ; **synchroniser les trois axes** → faire converger les articulations vers la position consigne en parallèle. Chaque branche descendra d'un cran à l'étape 2 quand on confrontera les solutions candidates.
>
> Pendant cette décomposition, l'équipe identifie qu'aucune fonction de service du [[cahier-des-charges-fonctionnel|CdCF]] ne porte explicitement le **remplacement d'un moteur en cas de panne** — la démontabilité du sous-système *mobilité articulaire* n'a pas été énoncée. Le signal est remonté à l'encadrant, la modification est validée, et une **[[FC]] liée à la démontabilité** est ajoutée au CdCF avec son numéro de version mis à jour. La phase concept reprend sa course sans masquer la rétroaction.

> [!livrable] Livrable 1/5 — Concept
> - Décomposition fonctionnelle du système (sous-systèmes + fonctions techniques par bloc, formalisée par schémas ou [[fast|FAST]] selon l'outil retenu)

### 2. Explorer les solutions par discipline

La décomposition de l'étape 1 a fait émerger les fonctions techniques que chaque sous-système doit assurer. À chacune correspond un champ de solutions techniques possibles. L'étape 2 explore ce champ et **choisit, par sous-système, la solution retenue**. L'arbitrage se fait localement, branche par branche disciplinaire (élec, méca, info), avec un outil unique : la [[matrice-de-decision|matrice de décision]]. L'arbitrage inter-disciplines (compatibilité globale, intégration) viendra à l'étape 3.

Cette étape se mène en deux temps : recenser les solutions candidates, puis construire la matrice et arbitrer.

#### Recenser les solutions candidates

Pour chaque sous-système, ou pour chaque fonction technique critique d'un sous-système complexe, identifier **2 à 5 solutions candidates**. Pas plus : la matrice se dilue et ne discrimine plus. Pas moins : on n'a plus rien à comparer, et le choix devient une justification a posteriori.

Sources à parcourir systématiquement :

- L'[[etat-de-l-art-technique|état de l'art technique]] produit en spécification technique — premier réservoir, déjà calibré sur des références existantes
- Catalogues fabricants et distributeurs (Conrad, RS, Mouser, Misumi…)
- Projets open source (GitHub, Hackaday, Thingiverse)
- L'expérience disciplinaire portée par les enseignants et les cours suivis
- Le brainstorm équipe — souvent générateur de solutions hybrides qui ne figurent dans aucun catalogue

Ne filtrer qu'au strict minimum à ce stade. Une solution qui paraît naïve à première vue peut redevenir pertinente une fois confrontée aux pondérations du CdCF (coût serré, [[ecoconception|écoconception]], simplicité d'intégration). Le filtre, c'est la matrice — pas l'intuition de départ.

#### Construire la matrice et arbitrer

La [[matrice-de-decision|matrice de décision]] croise **solutions candidates en colonnes** et **critères pondérés en lignes**. Les critères se choisissent en relisant le CdCF : à chaque exigence chiffrée qui discrimine entre les solutions doit correspondre une ligne de la matrice. Familles de critères à parcourir :

- **Performance** — couple, précision, débit, autonomie selon la fonction technique visée
- **Coût** — achat, fabrication, maintenance
- **Encombrement et masse** — souvent portés par des [[FC]] dans la [[pieuvre]] du [[cahier-des-charges-fonctionnel|CdCF]]
- **[[ecoconception|Écoconception]]** — consommation en service et en veille, durée de vie, démontabilité, origine des matériaux
- **Faisabilité école** — disponibilité fournisseur, délais d'approvisionnement, compétences mobilisables dans l'équipe
- **Risque technique** — maturité de la solution, retour d'expérience disponible

La **pondération** des critères se justifie au regard du CdCF : un critère à fort poids correspond à une exigence en F0 ou F1, pas à un confort en F3. Cette traçabilité est ce qui rend la matrice **opposable** — si la pondération n'est pas justifiée, le choix qui en découle ne l'est pas non plus.

L'écoconception apparaît ici comme un critère pondéré, intégré à la matrice au même titre que la performance ou le coût — **pas comme une case à cocher en fin de tableau**. C'est l'une des conventions structurantes de la trame écoconception : un score écoconception traçable dès le concept évite que le sujet ne dérive en commentaire cosmétique à la soutenance.

Le score pondéré final classe les solutions, mais ne décide pas seul. Une solution arrive en tête sur le score mais consomme la dernière référence d'un composant en rupture de stock chez le fournisseur école ? On retient la deuxième et on trace l'arbitrage. **Le score guide, l'arbitrage motivé tranche.**

> [!warning] Attention
> **Une matrice qui note tout à 4/5 ne décide rien.** C'est la dérive la plus fréquente : par souci d'équité ou par paresse, l'équipe attribue des notes proches sur toutes les solutions. Le score final ne discrimine plus, le « choix » est en réalité fait à l'intuition et la matrice n'est qu'un habillage rétroactif. Une vraie matrice de décision fait **émerger des écarts** — c'est précisément quand une solution se détache (ou est éliminée) qu'elle remplit sa fonction.

> [!tip] Astuce
> **Le découpage en trois branches (élec / méca / info) structure le travail technique, mais ne fige pas qui fait quoi dans l'équipe.** Un équipier qui ne suivrait qu'une seule branche perdrait la cohérence du système et ne pourrait pas défendre l'architecture en présentation.

> [!example] Exemple : projet bras 3 axes
> Sous-système *mobilité articulaire*, branche élec — trois solutions candidates pour générer le couple sur chaque axe : **moteur CC + encodeur incrémental**, **stepper + driver**, **servomoteur intégré**. Critères pondérés et scores (extrait simplifié) :
>
> | Critère | Pond. | CC + encodeur | Stepper + driver | Servomoteur |
> |---|---|---|---|---|
> | Couple disponible | 25 % | 3/5 | 4/5 | 3/5 |
> | Précision angulaire | 25 % | 2/5 | 4/5 | 5/5 |
> | Coût unitaire | 20 % | 5/5 | 4/5 | 2/5 |
> | [[ecoconception|Écoconception]] (conso, réparabilité) | 15 % | 4/5 | 2/5 | 3/5 |
> | Faisabilité école (dispo, doc) | 15 % | 4/5 | 5/5 | 3/5 |
> | **Score pondéré** | | **3,35** | **3,85** | **3,40** |
>
> Le **stepper + driver** sort en tête sur la précision et la faisabilité école. Faiblesse identifiée : score écoconception bas en raison de la consommation continue en maintien. Décision retenue : *stepper + driver*, avec une réserve à lever à l'étape 4 sur la consommation au maintien (mode économie ou commande coupée à l'arrêt à étudier). Les branches méca (structure articulée) et info (commande synchronisée des trois axes) construisent en parallèle leurs propres matrices.

> [!livrable] Livrable 2/5 — Concept
> - Matrices de décision argumentées (une par sous-système ou par fonction technique critique, critère écoconception intégré, pondération justifiée au regard du CdCF)

### 3. Arbitrer l'architecture globale

L'étape 2 a livré, par sous-système et par discipline, des solutions arbitrées localement à l'aide d'une [[matrice-de-decision|matrice de décision]]. Chacune est défendable dans son périmètre — mais rien ne garantit qu'elles tiennent **assemblées**. C'est l'objet de l'étape 3 : confronter les arbitrages locaux, faire émerger les conflits inter-disciplines qu'ils provoquent, puis renégocier ce qui doit l'être pour que l'architecture devienne cohérente. C'est le **pivot de la phase concept** : la première fois que l'équipe arbitre à plusieurs disciplines simultanément, et la dernière occasion de redresser l'architecture avant d'engager les expérimentations en [[preuve-de-concept|preuve de concept]].

Cette étape se mène en trois temps : confronter les solutions retenues, caractériser les conflits qui apparaissent, renégocier sans tout casser.

#### Confronter les solutions retenues

Première bascule : sortir des branches disciplinaires. Chaque sous-système est passé en revue avec sa solution arbitrée, annoté dans le [[schema-bloc-fonctionnel|schéma bloc fonctionnel]] mis à jour. L'équipe partage en séance ce que chaque branche a retenu et les hypothèses sur lesquelles l'arbitrage repose — couple disponible côté élec, encombrement et masse côté méca, latence et fréquence de commande côté info.

La méthode pratique est de **parcourir les interfaces deux à deux** : élec↔méca (le couple fourni couvre-t-il le besoin mécanique ?), élec↔info (la fréquence de commande tient-elle dans le bus série retenu ?), méca↔info (le modèle géométrique de l'info correspond-il à la cinématique réelle de la méca ?). Le geste n'est pas de trancher, c'est de **rendre visibles les frictions** : tout ce qui n'a pas été aligné en silo doit ressortir ici.

À la sortie de ce temps, on dispose d'une liste de points de friction. Aucun n'est encore arbitré. Le pire serait de les fermer trop vite — autant les laisser ouverts pour le temps suivant, qui sert précisément à les qualifier.

#### Caractériser les conflits inter-disciplines

Tous les points de friction n'ont ni la même nature ni la même gravité. Pour chacun, qualifier le conflit selon trois axes :

1. **Nature** — interface géométrique (encombrement, montage, accessibilité), interface physique (couple, courant, fréquence, thermique), ou hypothèse incompatible (un modèle de l'info qui suppose une géométrie que la méca n'a pas retenue, par exemple).
2. **Périmètre touché** — combien de sous-systèmes sont impactés, et combien de disciplines doivent revoir leur arbitrage de l'étape 2 si le conflit doit être résolu côté technique.
3. **Opposabilité au [[cahier-des-charges-fonctionnel|CdCF]]** — un conflit qui menace une exigence en flexibilité F0 ou F1 passe avant un conflit qui pèse sur du F3. La flexibilité fixée au CdCF est la grille de priorité naturelle.

À la sortie de ce temps, on dispose d'un **tableau récapitulatif** des conflits identifiés, hiérarchisés. Ce tableau permet de décider lesquels arbitrer en priorité, lesquels accepter de laisser ouverts s'ils peuvent être tranchés plus tard (étape 4 de pré-dimensionnement, ou [[preuve-de-concept|preuve de concept]] si l'incertitude résiduelle est trop forte pour un calcul de bureau).

#### Renégocier sans tout casser

La renégociation se mène **à toutes les disciplines impactées simultanément**, jamais en bilatéral. Le piège classique est de passer le conflit en ping-pong entre deux branches alors qu'une troisième porte un degré de liberté qui débloque la situation. Convoquer le conflit ouvertement, exposer les contraintes de chaque côté, explorer 2-3 voies de résolution avec leur coût pour chaque discipline.

Trois leviers, dans l'ordre du moins au plus coûteux :

1. **Revoir un arbitrage local de l'étape 2** — la [[matrice-de-decision|matrice de décision]] concernée est reprise avec la contrainte mise à jour. La solution classée deuxième devient parfois meilleure une fois la nouvelle contrainte intégrée. C'est le levier privilégié.
2. **Modifier la décomposition de l'étape 1** — plus rare et plus coûteux, mais légitime si l'interface elle-même est mal posée (deux sous-systèmes qui se chevauchent, ou un sous-système qui aurait dû être scindé).
3. **Assouplir une exigence du [[cahier-des-charges-fonctionnel|CdCF]]** — uniquement si la flexibilité le permet (jamais sur un F0 sans accord enseignant ou client), et avec traçabilité explicite : la modification du CdCF est un acte engageant.

Attention à l'anti-pattern qui ronge cette étape : la branche **la plus avancée** dans son travail — souvent l'info qui prototype vite, parfois l'élec qui a déjà commandé — finit par imposer son arbitrage à la branche la plus lente, qui n'a pas encore eu le temps de défendre son optimum. La renégociation honnête suppose que toutes les disciplines arrivent à parité d'avancement à la table.

À la sortie de l'étape, l'architecture globale est figée comme **assemblage cohérent** des solutions retenues, et toutes les renégociations sont tracées dans les matrices de décision d'origine (lignes de critères ajustées, scores recalculés). Le dossier concept rédigé à l'étape 5 pourra s'appuyer sur cette traçabilité.

> [!warning] Attention
> **Le conflit inter-disciplines arrive presque toujours : chaque branche a trouvé son optimum local, l'assemblage révèle des incompatibilités.** Le couple exigé par la méca dépasse ce que les drivers élec peuvent fournir dans le budget ; la fréquence de commande imposée par l'info sature le bus série ; l'encombrement méca des moteurs choisis empêche l'intégration sur la structure. C'est *normal* — c'est même le moment où l'équipe apprend ce qu'arbitrer veut dire. La compétence à acquérir : renégocier sans tout casser.

> [!tip] Astuce
> **Convoquer toutes les disciplines impactées en même temps, pas en bilatéral.** Un conflit méca↔info traité à deux finit souvent en compromis bancal ; le même conflit traité à trois (méca + info + élec qui suit la consommation et la dissipation) débloque presque toujours une voie que ni l'un ni l'autre n'avait vue. Le coût d'une réunion à trois est très inférieur au coût d'un compromis raté.

> [!example] Exemple : projet bras 3 axes
> À la sortie de l'étape 2, chaque discipline a son arbitrage : la méca a retenu des **articulations à axe unique** pour simplifier l'[[usinage]] et l'[[impression-3d|impression 3D]] ; l'info a dimensionné un algorithme de **cinématique inverse à offset** entre axes consécutifs ; l'élec a retenu **stepper + driver** avec maintien continu pour la précision angulaire. Confrontation en revue d'équipe : deux conflits émergent.
>
> | Conflit | Sous-systèmes impactés | Nature | Opposabilité CdCF |
> |---|---|---|---|
> | Articulations axe unique (méca) ↔ cinématique inverse à offset (info) | Mobilité articulaire | Hypothèse géométrique incompatible | F0 — précision bout de bras ± 5 mm |
> | Maintien stepper continu (élec) ↔ échauffement driver en service prolongé | Mobilité articulaire | Interface physique (thermique) | F1 — durée d'utilisation continue |
>
> Renégociation du conflit n°1 à trois (méca + info + élec) : trois voies explorées — la méca revoit le squelette pour intégrer un offset (coût méca élevé, marge écoconception perdue sur l'impression 3D), l'info reprend le modèle géométrique sans offset (perte de précision estimée à 8 mm en bout, hors F0), ou un compromis avec **offset court intégré côté méca et lookup table d'étalonnage côté info**. Le compromis est retenu, traçabilité ajoutée dans la matrice méca (critère « simplicité de fabrication » réajusté) et la matrice info (critère « complexité algo » réajusté). Le conflit n°2 retombe en partie par effet collatéral : la lookup table autorise un mode **commande coupée à l'arrêt** côté élec, mise à jour de la matrice élec sur le critère écoconception et thermique. L'architecture globale est figée.

> [!livrable] Livrable 3/5 — Concept
> - Architecture globale du système (assemblage cohérent des solutions retenues par discipline)
> - Tableau des conflits inter-disciplines identifiés et arbitrage tracé pour chacun (matrices de décision d'origine de l'étape 2 mises à jour si renégociation)

### 4. Pré-dimensionner et identifier les incertitudes

L'étape 3 a figé l'architecture comme assemblage cohérent. Reste à vérifier qu'elle tient quantitativement : couples, courants, latences, marges. C'est l'objet du **pré-dimensionnement** — un calcul de vérification en ordre de grandeur, pas le calcul exact qui viendra en [[dossier-technique|dossier technique]]. Le geste est de confronter chaque arbitrage de l'étape 2 à un chiffre, pour identifier ce qui passe avec marge, ce qui passe à la limite, et ce qui ne se calcule pas avec confiance suffisante.

Cette étape se mène en deux temps : pré-dimensionner par discipline, puis extraire la liste des incertitudes qui deviendra la commande de la [[preuve-de-concept|preuve de concept]].

#### Pré-dimensionner par discipline

Pour chaque sous-système, chaque branche disciplinaire pose les grandeurs critiques qui décident de la viabilité de l'arbitrage retenu : couples, efforts, flèches, masses et encombrement côté méca ; courants, tensions, dissipation thermique, longueurs de câble côté élec ; ressources matérielles (mémoire, vitesse de boucle), latences cibles, complexité algorithmique côté info. Le calcul reste en **ordre de grandeur** — formules de cours, modèles simplifiés, hypothèses explicites — pas en simulation fine.

La sortie de chaque calcul est uniforme : **valeur calculée**, **valeur de spec** (du composant ou de la solution retenue à l'étape 2), **marge** (absolue et relative). Une marge confortable (>30 %) valide l'arbitrage. Une marge serrée (<10 %) signale un point qui pourrait basculer en incertitude au temps suivant. Une marge négative invalide l'arbitrage et renvoie à l'étape 3 : la renégociation reprend, avec la contrainte chiffrée mise à jour.

#### Identifier les incertitudes à lever en preuve de concept

Tous les calculs de bureau ne tranchent pas. Ce qui ne se calcule pas avec confiance suffisante devient une **incertitude** — pas une approximation à raffiner, une question à trancher expérimentalement. Quatre catégories typiques :

1. **Marge serrée à la limite du calcul** — la marge calculée est plus faible que la précision du modèle utilisé (calcul à 10 % près, marge à 5 %).
2. **Phénomène mal modélisé** — frottements, jeu mécanique, dérive thermique, comportement transitoire en accélération.
3. **Couplage inter-disciplines difficile à simuler** — latence info × dynamique méca, échauffement élec × asservissement info.
4. **Hypothèse d'usage non validée** — charge réelle vs charge nominale, profil de mission, conditions environnementales.

Chaque incertitude est **formulée comme une question** à laquelle un essai expérimental pourra répondre, qualifiée selon sa catégorie, et rattachée à l'exigence du [[cahier-des-charges-fonctionnel|CdCF]] qu'elle peut faire basculer. C'est cette liste — pas un rapport narratif — qui devient la commande de la phase suivante.

> [!warning] Attention
> **Une marge serrée n'est pas une marge, c'est une incertitude.** La tentation, face à un calcul qui passe à 5 % près, est de raffiner le calcul jusqu'à trouver un chiffre plus confortable. Si le modèle utilisé n'a pas la précision suffisante, raffiner ne change rien : on habille une incertitude en certitude. Le réflexe sain : convertir la marge serrée en incertitude à lever, et laisser la [[preuve-de-concept|preuve de concept]] trancher par l'expérience.

> [!tip] Astuce
> **Formuler chaque incertitude comme une question, pas comme un constat.** « Le couple disponible tient-il en accélération maximale réelle ? » se teste ; « marge en accélération incertaine » ne se teste pas. La formulation interrogative force à anticiper le protocole d'essai et fait gagner du temps en [[preuve-de-concept|preuve de concept]].

> [!example] Exemple : projet bras 3 axes
> Pré-dimensionnement consolidé sur le sous-système *mobilité articulaire*, extrait des trois disciplines :
>
> | Discipline | Grandeur | Valeur calculée | Spec retenue | Marge | Verdict |
> |---|---|---|---|---|---|
> | Méca | Couple maximal axe 1, charge nominale 100 g | 1,2 N·m | 1,5 N·m (stepper) | +25 % | OK |
> | Méca | Flèche en bout, charge nominale | 3 mm | 5 mm (F0) | +40 % | OK |
> | Élec | Courant total 3 steppers en service | 4,5 A | 5 A (alim 5 V/5 A) | +11 % | **Marge serrée** |
> | Info | Période boucle asservissement, modèle simplifié | 1,25 ms | 1 ms cible | hors cible | **Marge serrée** |
> | Méca | Couple en accélération maximale (transitoire) | modèle non confiant | — | — | **Incertitude** |
>
> Deux incertitudes formulées en question, rattachées au [[cahier-des-charges-fonctionnel|CdCF]] :
>
> - **I1** — *Le couple disponible des steppers tient-il en accélération maximale réelle, charge en bout ?* (catégorie : phénomène transitoire mal modélisé ; exigence en jeu : F0 précision bout de bras). À lever par essai banc moteur en accélération échelon.
> - **I2** — *L'alimentation tient-elle thermiquement en service prolongé avec une marge courant de +11 % ?* (catégorie : marge serrée + couplage élec↔thermique mal modélisé ; exigence en jeu : F1 durée d'utilisation continue). À lever par essai en charge continue avec mesure de température.
>
> Ces deux incertitudes deviennent la commande explicite de la phase preuve de concept.

> [!livrable] Livrables 4/5 — Concept
> - Pré-dimensionnements par discipline (calculs de vérification, marges, ordres de grandeur)
> - Liste des incertitudes à lever en [[preuve-de-concept|preuve de concept]]

### 5. Rédiger le dossier concept

L'étape 4 a livré le dernier matériau : pré-dimensionnement par discipline et liste des incertitudes à lever en [[preuve-de-concept|preuve de concept]]. L'étape 5 ne produit rien de nouveau — elle **agrège les quatre livrables précédents** (décomposition, matrices, architecture, pré-dim et incertitudes) dans un **dossier concept** unique, relu et réécrit pour un lecteur extérieur, puis présenté en revue.

Le geste est l'équivalent direct de la rédaction du [[cahier-des-charges-fonctionnel|cahier des charges fonctionnel]] en fin de [[specification-technique|spécification technique]] : on passe du matériau de travail interne à un document de référence opposable. Cette étape se mène en trois temps : structurer le dossier, rédiger chaque section, faire valider en revue de concept.

#### Structurer le dossier concept

Le dossier concept agrège en cinq sections les livrables des étapes 1 à 4, dans une narration qui suit l'ordre du raisonnement d'équipe : du *quoi* (décomposition) au *comment* (arbitrages disciplinaires), puis à l'*ensemble* (architecture globale), au *chiffrage* (pré-dimensionnement), et enfin à *ce qui reste à trancher* (incertitudes à lever en preuve de concept).

Cinq sections types, dans cet ordre :

1. **Présentation et contexte** — rappel du CdCF (mission, fonctions de service, exigences chiffrées), périmètre de la phase concept, équipe et calendrier.
2. **Décomposition fonctionnelle** — sous-systèmes identifiés et fonctions techniques par bloc (FAST ou schéma équivalent).
3. **Arbitrages disciplinaires** — matrices de décision par sous-système ou fonction technique critique, pondération justifiée au regard du CdCF.
4. **Architecture globale** — assemblage cohérent des solutions retenues + tableau des conflits inter-disciplines arbitrés.
5. **Pré-dimensionnement et incertitudes** — calculs de vérification par discipline + liste des incertitudes formulées en question, rattachées au CdCF.

Une éventuelle section *Annexes* peut accueillir les calculs détaillés, les fiches techniques des solutions retenues, ou les compte-rendus de séance qui ont tracé une renégociation. Le dossier reste lisible sans elle ; les annexes servent l'instruction approfondie sans alourdir le récit principal.

#### Rédiger chaque section

Trois soins à apporter en rédaction.

Soigner la **forme** : un dossier concept se lit par un encadrant ou un client qui ne suit pas le projet au quotidien. Les figures (FAST, schéma bloc, matrices, tableau de pré-dim) doivent être lisibles isolément, légendées explicitement avec unités et hypothèses. Pagination, table des matières cliquable, en-têtes uniformes — le confort de lecture facilite la revue.

Soigner la **cohérence inter-sections** : chaque section renvoie explicitement aux sections amont sur lesquelles elle s'appuie. L'architecture (section 4) renvoie aux arbitrages (section 3) ; le pré-dim (section 5) renvoie aux solutions de la section 4 ; chaque incertitude renvoie à l'exigence du [[cahier-des-charges-fonctionnel|CdCF]] qu'elle peut faire basculer (tableau déjà construit à l'étape 4). Ces liens explicites rendent le dossier **opposable** — un lecteur peut remonter la chaîne de décisions jusqu'au besoin d'origine.

Soigner la **traçabilité jusqu'au CdCF** : chaque solution retenue doit être rattachable à une fonction de service identifiée en spécification technique. Si un lien manque (solution sans fonction d'origine, fonction sans solution retenue), c'est un signal à corriger avant la revue. Les modifications du CdCF intervenues en cours de phase concept (cf. rétroaction signalée à l'étape 1) sont documentées explicitement dans la section *Présentation et contexte* — pas masquées.

#### Faire valider en revue de concept

La **revue de concept** est l'équivalent enseignant d'un *go / no-go d'architecture*. Elle valide ou non l'engagement vers la [[preuve-de-concept|preuve de concept]] et le [[dossier-technique|dossier technique]]. Conduite par l'encadrant (et par le client si externe), elle vérifie que l'architecture est défendable, traçable, et que la phase suivante a une commande claire.

Préparation : auto-relecture par l'équipe entière, pas seulement par le rédacteur. Vérification de la cohérence d'ensemble. Anticipation des questions critiques — le pourquoi de chaque arbitrage doit pouvoir être défendu en moins d'une minute. Répétition de la présentation orale.

Trois issues nominales, plus un cas rétroactif. La revue **valide sans réserve** : le projet engage la preuve de concept avec la liste des incertitudes comme commande explicite. La revue **valide sous conditions** : un ou plusieurs points (préciser un protocole d'essai, documenter une modification CdCF, compléter un pré-dim) à corriger avant engagement de la phase suivante. La revue **demande une reprise** : un arbitrage ou un pré-dim doit être renégocié, retour à l'étape 3 ou 4 localement. Cas plus rare à intégrer dans la procédure : une **rétroaction vers la [[specification-technique|spécification technique]]** si la décomposition révèle un trou structurant du CdCF qui n'a pas pu être absorbé en cours de phase. La validation engage le projet matériellement : le dossier technique pourra s'appuyer dessus pour commander.

> [!warning] Attention
> **Compiler n'est pas rédiger.** Un dossier concept qui se contente de mettre bout à bout les livrables des étapes 1-4 sans relecture transversale ne tient pas en revue : incohérences entre sections, redondances, doublons de figures, sauts d'argumentation. Le geste de l'étape 5 est précisément la **relecture critique de l'ensemble** et la **réécriture** des transitions et des justifications qui n'existaient pas dans les livrables intermédiaires.

> [!tip] Astuce
> **Faire la revue à blanc en équipe avant le jour J.** Un mock d'une heure, avec un membre de l'équipe qui joue l'encadrant et pose les questions désagréables, fait émerger les arbitrages mal défendus et les figures illisibles. Le coût d'un mock est très inférieur à celui d'un dossier renvoyé pour reprise.

> [!example] Exemple : projet bras 3 axes
> Le dossier concept du bras 3 axes suit la TdM type, instanciée :
>
> 1. **Présentation et contexte** — rappel [[cahier-des-charges-fonctionnel|CdCF]], périmètre concept, équipe, revue de concept planifiée en semaine n°5. Documentation explicite d'une modification intervenue à l'étape 1 : ajout d'une [[FC]] liée à la démontabilité (rétroaction CdCF signalée et tracée en cours de phase).
> 2. **Décomposition fonctionnelle** — 3 sous-systèmes (mobilité articulaire, interface utilisateur, alimentation et sécurité), [[fast|FAST]] par sous-système avec fonctions techniques formulées en verbe + complément.
> 3. **Arbitrages disciplinaires** — une matrice par sous-système, [[ecoconception|écoconception]] intégrée comme critère pondéré (≠ case à cocher), pondération justifiée au regard des flexibilités F0/F1/F3 du CdCF.
> 4. **Architecture globale** — [[schema-bloc-fonctionnel|schéma bloc]] annoté avec les solutions retenues (3 steppers + driver, 1 microcontrôleur unique, IHM PC, structure imprimée 3D avec offset court intégré), tableau des 2 conflits inter-disciplines arbitrés (cinématique ↔ articulations, thermique alim).
> 5. **Pré-dimensionnement et incertitudes** — tableau de pré-dim consolidé sur la mobilité articulaire + les 2 incertitudes I1 (couple en accélération réelle) et I2 (tenue thermique alim) formulées en question, rattachées à F0 et F1.
>
> Revue de concept conduite en semaine n°5 sous présidence enseignante. Dossier **validé sous conditions** : deux compléments demandés — préciser le protocole d'essai pour I1, et documenter dans la section 1 le numéro de version CdCF mis à jour après la rétroaction de l'étape 1. Engagement vers la [[preuve-de-concept|preuve de concept]] en semaine n°6 avec les 2 incertitudes comme commande explicite.

> [!livrable] Livrable 5/5 — Concept
> - Dossier concept agrégé en 5 sections (présentation et contexte / décomposition / arbitrages / architecture / pré-dim et incertitudes), traçable jusqu'au CdCF
> - Validation en revue de concept par l'encadrant (et le client si externe), avec issue tracée — validation, validation sous conditions, reprise locale ou rétroaction CdCF

## Conclusion

À ce stade, l'architecture est posée, justifiée et pré-dimensionnée ; les incertitudes restantes sont explicitement listées. La suite du travail bascule en [[preuve-de-concept|preuve de concept]] pour lever ces incertitudes par l'expérimentation — avant d'engager le projet matériellement en [[dossier-technique|dossier technique]].

---

## Pièges fréquents

**Choisir les composants définitifs trop tôt.** Le concept arbitre des **solutions techniques** (catégorie, principe, ordre de grandeur), pas des références fabricant. Le choix exact des composants vient en [[dossier-technique|dossier technique]], avec les calculs précis. Engager des références trop tôt fige des arbitrages avant d'avoir validé les marges.

**Laisser chaque discipline finir sa matrice avant de confronter les choix.** Le conflit inter-disciplines est inévitable, et plus on le découvre tard, plus il coûte cher. Les matrices se construisent en parallèle, pas en série, et la confrontation de l'étape 3 doit suivre immédiatement les arbitrages locaux.

**Traiter l'écoconception comme une case à cocher en fin de matrice.** L'écoconception est un critère pondéré au même titre que la performance ou le coût, intégré aux scores dès les arbitrages disciplinaires. Sans pondération, elle dérive en commentaire cosmétique à la soutenance.

**Confondre front de travail disciplinaire et répartition des rôles.** Le découpage élec / méca / info structure le travail technique, pas l'organisation de l'équipe. Un équipier qui ne suivrait qu'une seule branche perdrait la cohérence du système et ne pourrait pas défendre l'architecture en revue.

**Renégocier un conflit en bilatéral.** Le conflit méca↔info traité à deux finit souvent en compromis bancal. Convoquer toutes les disciplines impactées (élec inclus) débloque presque toujours une voie que ni l'un ni l'autre n'avait vue — et le coût d'une réunion à trois est bien inférieur à celui d'un compromis raté.

**Habiller une marge serrée en certitude par un calcul plus fin.** Si le modèle utilisé n'a pas la précision suffisante, raffiner le calcul ne change rien : on habille une incertitude en certitude. Une marge serrée (<10 %) doit être convertie en incertitude à lever en preuve de concept, pas en chiffre confortable obtenu sans vérification expérimentale.

**Sauter le pré-dimensionnement.** « On verra ça en preuve de concept » produit des PoC ratés : sans pré-dim, on ne sait pas ce qu'on cherche à valider expérimentalement. Le pré-dim fait émerger les incertitudes — sans lui, la preuve de concept n'a pas de commande.

**Compiler le dossier concept au lieu de le rédiger.** Mettre bout à bout les livrables des étapes 1-4 sans relecture transversale produit incohérences, redondances et sauts d'argumentation. Le dossier se réécrit pour un lecteur extérieur ; les transitions et justifications de liaison n'existaient pas dans les livrables intermédiaires.

## Pendant cette phase, côté équipe

**Interfaces métiers — mécanique, fabrication, informatique.** La phase concept mobilise les cours collègues plus qu'elle ne les refait : dimensionnement mécanique des structures et articulations, faisabilité des procédés ([[usinage]], [[impression-3d|impression 3D]], [[soudure]]) au fablab école, choix d'architecture logicielle si l'info est traitée côté collègues. Le dialogue avec les enseignants concernés se cale en amont de la phase, dès la validation du CdCF, pour aligner les attendus et éviter de découvrir en étape 3 qu'une solution retenue n'est pas fabricable au fablab.

**[[gestion-de-projet|Gestion de projet]].** Les arbitrages d'architecture (étape 3) sont des décisions structurantes : chaque renégociation met à jour la [[matrice-de-risques|matrice de risques]] et le [[retroplanning|rétroplanning]]. Les incertitudes identifiées à l'étape 4 deviennent la **commande de la preuve de concept**, donc des tâches planifiées à part entière. La revue de concept (étape 5) est un jalon majeur, inscrit au rétroplanning dès la spécification technique. La phase autorise des chevauchements temporels entre étapes (l'étape 2 démarre avant que l'étape 1 ne soit close) mais pas dans l'ordre des livrables.

**[[ecoconception|Écoconception]].** Le concept est la phase où l'écoconception devient un critère d'arbitrage, pas un commentaire en marge. Elle est intégrée dès l'étape 2 comme critère pondéré des matrices, reprise à l'étape 3 dans les renégociations (un compromis inter-disciplines améliore parfois le bilan écoconception, cf. exemple bras 3 axes), reprise à l'étape 4 dans le pré-dim (consommation en service et en veille), documentée explicitement dans la section 5 du dossier concept. La trame dédiée tient ces graines réparties ; le dossier concept les agrège.

**[[securite-et-qualite|Sécurité et qualité]].** Les premiers arbitrages qui engagent la sécurité du système sont posés ici : protection électrique, sécurité fonctionnelle, normes applicables. Les exigences réglementaires identifiées en spécification technique (conformité CE, basse tension, [[rohs|RoHS]] / [[reach|REACH]] / [[deee|DEEE]]) sont **traduites en contraintes d'arbitrage** dès l'étape 2 — un composant qui ne passe pas RoHS est éliminé en amont de la matrice, pas en fin de course. La trame dédiée tient ces croisements ; le concept y intègre ce qui est arbitrable à ce stade.

## Voir aussi

- [[index|Hub du parcours projet]]
- Étape précédente : [[specification-technique|Spécification technique]]
- Étape suivante : [[preuve-de-concept|Preuve de concept]] *(à créer)*
- [[matrice-de-decision|Matrice de décision]] *(à créer)*
- [[decomposition-fonctionnelle|Décomposition fonctionnelle]] *(à créer)*
- [[schema-bloc-fonctionnel|Schéma bloc fonctionnel]]
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — à créer)*
