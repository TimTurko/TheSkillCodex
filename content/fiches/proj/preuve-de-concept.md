---
title: Preuve de concept
type: trame
phase: 3
phases:
  - preuve-de-concept
tags:
  - proj
  - trame
  - phase-3
prerequis:
  - concept
aa:
  - RA-PROJET-C05-3/PROJ/2
  - RA-PROJET-C05-3/PROJ/3
  - RA-PROJET-C05-3/PROJ/4
  - RA-PROJET-C05-3/PROJ/5
  - RA-MEO-C08-6/MEO/3
draft: false
---

La **preuve de concept** (PoC) est la troisième phase du projet [[mecatronique|mécatronique]] et le **point pivot** du cycle en V : c'est le moment où l'on cesse de raisonner sur le papier et où l'on confronte les choix d'architecture à la **réalité physique**. On ne teste pas tout le système — on teste exclusivement les **incertitudes** identifiées en [[concept|concept]], c'est-à-dire les zones critiques que le pré-dimensionnement n'a pas pu trancher. Une preuve de concept bien menée lève les doutes amont ; bâclée, elle pousse l'incertitude vers la fin, là où la corriger coûte le plus cher.

## Posture attendue

La tentation, à ce stade, est de plonger directement dans le bricolage : "on a le matos, on monte, on verra ce que ça donne". Résistez. Une preuve de concept sans **énoncé écrit, hypothèse formulée, critère de succès quantifié et protocole** n'est pas une preuve de concept — c'est une expérience qui produira des résultats inexploitables. Vous reviendrez en arrière. À l'inverse, une preuve bien cadrée peut conclure en quelques heures là où le bricolage met une semaine. Cette étape enseigne une compétence centrale de l'ingénieur : **savoir tester avant de fabriquer**.

## Objectif de la phase

Produire un **rapport de preuve de concept** qui :

- formalise chaque incertitude en **énoncé testable** (hypothèse, critère de succès chiffré, protocole de mesure)
- présente les **bancs de test** montés et les **mesures** obtenues
- analyse les résultats face aux critères de succès et **tranche** : solution viable, à ajuster, ou intenable
- met à jour la matrice des risques ([[gestion-de-projet|gestion de projet]]) et l'évaluation environnementale ([[ecoconception|écoconception]]) avec les **mesures réelles**

Ce rapport conditionne le passage au [[dossier-technique|dossier technique]] : sans preuve concluante, il n'y a pas de dossier technique défendable.

## Démarche

### 1. Définir chaque preuve

La phase [[concept|concept]] s'est conclue par une **liste d'incertitudes** formulées en question et rattachées aux exigences du [[cahier-des-charges-fonctionnel|CdCF]] qui peuvent basculer. Cette liste est la commande explicite de la phase preuve de concept — pas un rapport narratif, une suite d'objets de travail. L'étape 1 transforme chaque incertitude en **énoncé testable** : ce qu'on suppose, ce qu'on attend chiffré, comment on le mesure. Tant que cette traduction n'est pas figée, aucun banc ne se monte.

L'étape se mène en deux temps : passer de l'incertitude à un énoncé testable, puis poser le triplet **hypothèse / critère / protocole** que la revue de l'encadrant validera comme bon pour exécution.

#### D'une incertitude à un énoncé testable

Une incertitude bien formulée en sortie de [[concept|concept]] (par exemple : *le couple disponible tient-il en accélération maximale réelle ?*) est déjà une question — mais ce n'est pas encore un objet exécutable. Le passage de la question à la mesure exige trois figeages successifs : identifier ce qu'on suppose être vrai, fixer le critère chiffré qui tranchera, et décrire la procédure de mesure suffisamment précisément pour qu'un autre équipier puisse l'exécuter sans interroger l'auteur.

C'est l'étape la plus négligée du cycle PoC, et probablement la plus structurante. Un énoncé flou produit des données inexploitables : sans hypothèse claire, on ne sait pas ce qu'on cherche ; sans critère chiffré, on ne sait pas si on l'a trouvé ; sans protocole tracé, on ne peut ni refaire ni défendre la mesure. Le temps gagné à sauter l'écrit se paie au moment où l'équipe doit ré-interpréter des résultats inexploitables, et ce coût est presque toujours supérieur au coût initial.

L'écrit a un autre rôle : il rend l'énoncé **opposable**. Un critère écrit avant la mesure peut difficilement être déplacé une fois le résultat connu. Un critère décidé après coup est un habillage rétroactif — l'évaluation porte sur la lucidité, pas sur la conclusion.

> [!warning] Attention
> **Un énoncé non écrit n'est pas un énoncé.** Tant qu'hypothèse, critère et protocole ne sont pas figés sur papier (ou dans le wiki d'équipe), la preuve de concept dérive dès le premier banc monté : on ajuste la mesure à ce qu'on observe, on déplace le critère pour que « ça passe », et le verdict de la preuve n'est plus opposable. Le triplet écrit est le point de référence qui rend la décision finale défendable, quelle qu'elle soit.

#### Le triplet hypothèse / critère / protocole

Trois éléments à figer, dans cet ordre.

L'**hypothèse** énonce ce que l'équipe suppose vrai, formulé positivement : *X tient Y dans les conditions Z*. Pas « ça devrait marcher », pas « on espère que ». Une hypothèse précise oblige à expliciter les conditions de validité — c'est précisément ce qui rend le protocole non trivial à concevoir, et c'est aussi ce qui donne au critère son ancrage.

Le **critère de succès** est chiffré, et lié à l'exigence du [[cahier-des-charges-fonctionnel|CdCF]] qui a fait remonter l'incertitude au concept. Si l'incertitude est rattachée à F0, le critère se déduit directement de la valeur F0 du CdCF, éventuellement assortie d'une marge. Un critère non chiffré (« ça marche à peu près », « c'est acceptable ») n'est pas un critère : il ne discrimine pas, il rend la décision impossible. Si la mesure attendue ne peut pas être chiffrée par construction (qualité visuelle, ressenti utilisateur), la preuve de concept n'est probablement pas le bon outil — relire la [[pieuvre]] et requalifier l'incertitude.

Le **protocole** décrit le matériel mobilisé, les conditions de mesure (température, charge, durée), le nombre de répétitions et le traitement des données brutes. Niveau de détail attendu : un autre équipier doit pouvoir refaire l'essai sans interroger l'auteur. C'est aussi à ce niveau-là que se joue la **répétabilité** — sans elle, un résultat unique reste anecdotique.

La **revue par l'encadrant** clôt l'étape. Elle n'est pas une formalité : c'est le filet pédagogique qui évite à l'équipe de partir sur un protocole bancal et de perdre une semaine d'expérimentation. L'encadrant teste la solidité du triplet (l'hypothèse est-elle bien formulée ? le critère sera-t-il discriminant ? le protocole est-il exécutable avec les moyens de l'école ?). Sans cette revue, l'énoncé n'est pas validé — la phase d'exécution n'engage pas.

> [!tip] Astuce
> **Formuler le critère en miroir direct d'une exigence chiffrée du [[cahier-des-charges-fonctionnel|CdCF]].** Si l'incertitude est rattachée à F1 (durée d'utilisation continue : 2 h sans interruption), le critère de la preuve correspondante reprend cette valeur — « température de l'alimentation reste < 60 °C après 2 h de service continu en charge nominale ». Inventer un critère par intuition (« 50 °C, ça devrait aller ») détache la preuve de sa raison d'être : valider ou non l'exigence d'origine.

> [!example] Exemple : projet bras 3 axes
> Supposons que la phase [[concept|concept]] ait identifié comme incertitude la *tenue mécanique des articulations imprimées 3D dans la cinématique retenue*. Le triplet posé en sortie d'étape 1 :
>
> - **Hypothèse** — une articulation en PLA imprimée à 60 % de remplissage tient un couple de 1,2 N·m sans déformation permanente sur 1000 cycles d'utilisation.
> - **Critère de succès** — après 1000 cycles à 1,2 N·m, le jeu angulaire mesuré au comparateur reste < 0,5° (déduit de la précision en bout de bras exigée au [[cahier-des-charges-fonctionnel|CdCF]] en F0).
> - **Protocole** — banc d'application de couple statique + cyclique (platine d'ancrage, bras de levier connu, masse étalonnée), comparateur sur l'axe de mesure, automatisation des cycles via microcontrôleur, relevé toutes les 100 cycles, trois articulations testées en parallèle pour la répétabilité.
>
> Revue de l'encadrant en sortie d'étape : trois corrections demandées sur la première version — préciser la température ambiante du banc (sensible pour le PLA), expliciter le critère d'arrêt en cas de rupture précoce, et tracer la traçabilité du couple appliqué (masse + bras de levier mesurés à la balance et au pied à coulisse). Triplet validé en version corrigée — la phase d'exécution peut engager.

> [!livrable] Livrable 1/5 — Preuve de concept
> - Énoncés de preuve validés par l'encadrant (un par incertitude : hypothèse + critère de succès + protocole)

### 2. Préparer les moyens

La revue d'étape 1 valide les triplets ; chaque incertitude dispose désormais d'un protocole décrit. L'étape 2 transforme ces protocoles en moyens matériels disponibles à temps pour exécuter. Le geste n'est pas de tout réinventer : il s'agit de maximiser l'usage de ce que l'école met déjà à disposition, et de ne demander d'acquisition exceptionnelle que pour ce qui ne peut pas être couvert autrement. Économie de temps et équité budgétaire entre équipes vont de pair.

L'étape se mène en deux temps : extraire des protocoles l'inventaire des moyens nécessaires par preuve, puis explorer trois sources hiérarchisées (stock école standard, stock école divers, acquisition exceptionnelle) jusqu'à ce que chaque élément soit rattaché à une provenance tracée.

#### Du protocole aux ressources

Pour chaque incertitude, relire le protocole validé à l'étape 1 et en extraire les **moyens nécessaires**, répartis par catégories utiles à l'approvisionnement : composants matériels (capteurs, actionneurs, alimentations), consommables (filament, vis, câbles), instruments de mesure ([[comparateur|comparateur]], [[oscilloscope|oscilloscope]], [[multimetre|multimètre]], balance), outillage ([[impression-3d|imprimante 3D]], étau, [[pied-a-coulisse|pied à coulisse]]). Une preuve peut partager une ressource avec une autre — un [[microcontroleur|microcontrôleur]] sert souvent à deux protocoles — mais le rattachement reste tracé incertitude par incertitude.

L'inventaire produit ici ne déborde pas du strict nécessaire pour lever l'incertitude. Les choix définitifs de composants (références exactes du produit final) viendront en [[dossier-technique|dossier technique]], avec les calculs précis et l'engagement budgétaire associé — pas ici. La preuve de concept reste un instrument de mesure, pas un pré-engagement.

> [!warning] Attention
> **Pas d'achat à titre personnel.** Même si un composant à 5 € vous semble plus rapide à commander vous-même qu'à demander à l'école, n'achetez rien sur vos deniers personnels. C'est une entorse à l'équité budgétaire entre équipes, et c'est expressément hors cadre projet. Si une acquisition exceptionnelle est nécessaire, elle passe par le responsable projet.

#### Trois sources, dans l'ordre

Une fois l'inventaire posé, chaque élément est cherché dans trois sources, dans l'ordre de friction croissante.

1. **Stock école standard** — composants courants disponibles immédiatement au labo ([[microcontroleur|microcontrôleurs]], cartes [[arduino|Arduino]], [[multimetre|multimètres]], [[oscilloscope|oscilloscopes]] de paillasse, [[alimentation-stabilisee|alimentations stabilisées]], [[comparateur|comparateurs]], balance). Source par défaut, à épuiser en premier.
2. **Stock école divers** — composants spécifiques disponibles à la demande auprès du fablab ou du gestionnaire matériel (capteurs particuliers, vis hors stock standard) et **pièces imprimées 3D à la demande** : l'équipe ne reçoit pas de filament en propre, elle transmet des fichiers STL au responsable fablab [[impression-3d|impression 3D]] qui prend en charge l'impression. Coût zéro mais friction logistique : il faut anticiper le délai d'approvisionnement et le créneau du fablab.
3. **Acquisition exceptionnelle** — uniquement si vraiment critique pour la preuve, et après validation budget par le responsable projet. Le délai d'achat doit être compatible avec le planning de la preuve ; si l'arrivée du composant repousse l'essai au-delà du jalon de revue PoC, le besoin doit être requestionné plutôt qu'acheté dans l'urgence.

Le respect de cette hiérarchie n'est pas qu'une question d'organisation : c'est aussi une compétence pédagogique. Court-circuiter le processus parce qu'il est plus rapide d'aller acheter soi-même, c'est apprendre à contourner un cadre que la vie professionnelle reproduira sous une autre forme (achats centralisés, validations hiérarchiques, équité entre équipes). Ce qu'on économise sur la semaine d'attente, on le perd en culture projet.

> [!tip] Astuce
> **Demander tôt le stock divers.** Le délai d'approvisionnement d'un composant non-standard via le fablab peut s'étaler sur plusieurs jours, parfois plus si le fournisseur est externe. Identifier les besoins divers dès la sortie d'étape 1 et lancer les demandes en parallèle de la finalisation des bancs évite de bloquer la phase d'exécution sur une rondelle imprimée en retard.

> [!example] Exemple : projet bras 3 axes
> Pour la preuve *tenue articulation 3D*, inventaire des moyens et rattachement aux sources :
>
> - **Stock école standard** — [[microcontroleur|microcontrôleur]] [[arduino|Arduino]] (automatisation des cycles), [[comparateur|comparateur micrométrique]] (mesure du jeu angulaire), balance de précision et [[pied-a-coulisse|pied à coulisse]] (traçabilité du couple appliqué selon la correction demandée en revue d'étape 1), [[alimentation-stabilisee|alimentation de paillasse]], [[multimetre|multimètre]].
> - **Stock école divers** — articulations en [[pla|PLA]] à 60 % de remplissage (3 articulations + 1 de réserve) à imprimer au fablab : fichiers STL transmis au responsable fablab [[impression-3d|impression 3D]] dès la sortie d'étape 1 pour réserver le créneau d'impression (délai indicatif 3 jours ouvrés).
> - **Acquisition exceptionnelle** — aucune. Le banc tient avec le stock disponible.

> [!livrable] Livrable 2/5 — Preuve de concept
> - Liste des ressources matérielles mobilisées par preuve (origine, coût éventuel, justification si acquisition)

### 3. Mener les essais par incertitude

L'étape 2 a sécurisé les moyens : chaque incertitude dispose d'un protocole validé et des ressources matérielles rattachées. L'étape 3 enchaîne par l'exécution proprement dite. Le geste : pour chaque incertitude, construire un banc focalisé sur la question posée, exécuter le protocole en respectant strictement les conditions du triplet, et déposer les données brutes dans un format exploitable pour l'analyse de l'étape suivante.

L'étape se mène en deux temps : monter le banc, puis exécuter et tracer les mesures. Plusieurs preuves peuvent être menées en parallèle si l'équipe est ressourcée — le découpage est **par incertitude**, pas par discipline : une incertitude de mécatronique est rarement mono-disciplinaire, et la répartition par discipline introduirait artificiellement des frontières que la mesure ne respectera pas.

#### Monter le banc

Le banc est **focalisé sur l'incertitude testée**, distinct du banc système global qui viendra en [[integration-et-tests|intégration et tests]]. La règle de focalisation : on monte le minimum nécessaire pour répondre à la question, pas un système réduit. Cela économise du temps, isole les variables observées, et augmente la sensibilité analytique — un système complet introduit du bruit (couplages, interactions parasites) qui complique l'interprétation des résultats.

Le montage doit refléter fidèlement le protocole validé. Si la revue d'étape 1 a demandé des corrections (par exemple : tracer la traçabilité du couple appliqué via balance et pied à coulisse), elles sont implémentées physiquement avant tout démarrage. Sauter une correction au montage, c'est invalider implicitement le triplet validé.

Avant la première mesure, le banc lui-même est **caractérisé** : constantes mesurables (longueur du bras de levier, masse étalonnée, calibration des instruments), conditions ambiantes (température, humidité quand pertinent), références traçables. Cette caractérisation sert ensuite à distinguer un défaut du banc d'un comportement du composant testé — sans elle, toute mesure surprise reste ambigüe.

> [!warning] Attention
> **Caractériser le banc avant de mesurer.** Un [[comparateur|comparateur]] mal réglé peut donner 0,1° de dérive intrinsèque, une [[alimentation-stabilisee|alimentation]] non stabilisée peut faire varier la mesure de courant de 5 %, un capteur de température mal positionné peut mesurer l'air ambiant au lieu du composant. Sans caractérisation préalable, l'équipe ne sait pas distinguer un défaut du banc d'un comportement réel du composant — et le résultat de la preuve perd son opposabilité.

#### Exécuter et tracer les mesures

L'exécution respecte strictement les conditions du triplet validé : nombre de répétitions, gamme de variation, conditions ambiantes contrôlées, durées tenues. Tout écart par rapport au protocole doit être noté, justifié et discuté avant la mesure suivante — pas après coup.

Les valeurs brutes sont notées au fur et à mesure dans un format minimal mais systématique : date et heure, conditions, valeurs lues, instrument utilisé, anomalies observées. Pas de mémorisation, pas de « je note ce soir » : ce qui n'est pas écrit pendant l'essai est perdu. Le support compte peu (cahier, fichier de tableur, wiki) tant qu'il est partagé avec l'équipe et que les colonnes sont fixées avant de commencer.

La **répétabilité** est testée pendant l'essai, pas après. Au premier point et au dernier point de la gamme, refaire la mesure 2 ou 3 fois et vérifier que les valeurs convergent. Si elles divergent, signaler avant de continuer — soit le protocole a un défaut (banc instable, opérateur incohérent), soit le composant testé est instable lui-même. Dans les deux cas, c'est une information à tracer et à porter à l'analyse de l'étape 4.

À ce stade, on collecte, on ne décide pas. La tendance naturelle est d'anticiper la conclusion en cours d'essai (« ça passe », « ça ne passe pas ») et d'adapter la mesure pour aller dans la direction attendue — biais cognitif classique. La séparation explicite entre exécution (étape 3) et analyse (étape 4) sert précisément à protéger l'équipe de ce biais : les données brutes sont déposées telles quelles, le verdict viendra à froid.

> [!tip] Astuce
> **Noter les anomalies, pas seulement les valeurs.** La preuve de concept gagne autant des observations qualitatives (bruit mécanique, échauffement local, comportement transitoire inhabituel) que des valeurs numériques. Une observation hors protocole peut révéler une incertitude que personne n'avait identifiée au [[concept|concept]], ou suggérer une seconde preuve à monter. Un cahier de bord avec une colonne *anomalies* en plus de la colonne *valeur* multiplie la valeur extractible de chaque essai.

> [!example] Exemple : projet bras 3 axes
> Banc de la preuve *tenue articulation 3D* monté selon le protocole validé : platine d'ancrage du fablab, bras de levier de 100 mm (mesuré au [[pied-a-coulisse|pied à coulisse]]), masse étalonnée de 1,22 kg (vérifiée à la balance avant chaque session), [[microcontroleur|microcontrôleur]] [[arduino|Arduino]] pilotant le cycle 30° → 0° à 60°/s. Caractérisation préalable : [[comparateur|comparateur]] calibré à 0,02° près, température ambiante 22 ± 1 °C, jeu à vide initial du banc 0,08° (constante du banc déduite des relevés).
>
> Mesures relevées sur 1000 cycles, articulation A (extrait des données brutes) :
>
> - 0 cycle : jeu 0,12° ; nominal
> - 100 cycles : 0,18° ; rien à signaler
> - 300 cycles : 0,38° ; léger échauffement perceptible à la main sur l'articulation
> - 500 cycles : 0,54° ; dépassement du critère 0,5° ; bruit mécanique en croissance
> - 1000 cycles : 0,71° ; dégradation visible (matage du logement)
>
> Articulations B et C : profils similaires, dépassement du critère entre 480 et 550 cycles. Données brutes des trois articulations déposées au format tableur partagé. Décision sur l'issue du critère reportée à l'étape 4.

> [!livrable] Livrable 3/5 — Preuve de concept
> - Bancs de test montés et caractérisés (un par incertitude)
> - Données de mesure et analyses brutes par preuve

### 4. Analyser et trancher

L'étape 3 a livré les données brutes ; chaque preuve dispose d'un relevé déposé au format partagé. L'étape 4 est le **pivot du V** : la première étape du projet où la chaîne aval peut renvoyer la chaîne amont. L'équipe apprend à statuer — pas à constater, à statuer. La distinction est nette : constater énonce un fait (« le jeu dépasse 0,5° à 500 cycles »), statuer engage une décision opposable (« retour [[concept|concept]] étape 3 pour renégocier »). Cette étape produit la seconde, pas la première.

L'étape se mène en trois temps : confronter chaque résultat à son critère de succès, synchroniser entre preuves pour faire émerger les interactions, statuer parmi trois sorties nominales en mettant à jour les artefacts amont ([[matrice-de-risques|matrice de risques]], évaluation [[ecoconception|écoconception]], matrices de décision concept si retour amont). L'ordre n'est pas négociable : statuer avant la synchronisation fait rater les effets croisés ; mettre à jour les artefacts après le rapport (étape 5) brise la traçabilité.

#### Confronter au critère

Pour chaque preuve, mettre face à face la donnée mesurée et le critère chiffré fixé à l'étape 1. La confrontation est mécanique : valeur observée vs valeur de critère, marge absolue et relative, verdict immédiat (marge confortable / marge serrée / critère manqué / non-conclusif). Visuellement, une courbe avec la valeur seuil tracée en pointillés et le profil mesuré rend le verdict évident pour un lecteur extérieur.

Trois pièges classiques à éviter à ce stade. D'abord, **raffiner le critère a posteriori** : si la mesure dépasse le critère, c'est un dépassement, pas une mesure « presque conforme ». Le critère a été figé à l'étape 1, il sert précisément à ce qu'on ne puisse pas le déplacer maintenant. Ensuite, **interpréter la marge avant de l'avoir mesurée proprement** : une marge calculée à 5 % sur une mesure dont la précision est de 10 % n'est pas une marge, c'est une incertitude résiduelle. La précision du verdict ne dépasse pas la précision de la mesure. Enfin, **conclure sur un cas particulier** : si l'essai a porté sur 3 articulations et qu'une seule passe le critère, le verdict n'est pas « ça passe » — c'est « une articulation sur trois passe », ce qui pose au moins autant de questions que ça n'en répond.

Le verdict sort par preuve, pas globalement. Pas encore d'agrégation à ce stade : chaque incertitude est traitée pour elle-même.

#### Synchroniser entre preuves

Les preuves ont été menées en parallèle, possiblement par des équipiers différents sur des bancs séparés. La synchronisation rassemble les résultats et fait émerger les **interactions** que la conduite individuelle de chaque preuve n'a pas pu voir.

Trois types d'interactions à chercher systématiquement. **Conclusion d'une preuve qui invalide l'hypothèse d'une autre** : la consommation mesurée du moteur dépasse les estimations du [[concept|concept]], la marge sur l'autonomie batterie disparaît alors qu'on pensait l'incertitude levée par un pré-dim. **Concomitance d'anomalies sur des preuves indépendantes** : échauffement du banc thermique au moment où la mesure de précision du banc mécanique dérive — signal d'un problème environnemental commun (alimentation partagée instable, perturbation électromagnétique) plutôt que de deux défauts indépendants. **Effet collatéral d'une décision déjà esquissée** : si l'équipe penche vers une solution pour lever l'incertitude A, vérifier que cette solution n'introduit pas une nouvelle incertitude sur la preuve B.

La synchronisation se fait **en réunion d'équipe complète**, toutes disciplines présentes. Pas par mail, pas en bilatéral. Format pratique : un tour de table résultats par preuve, puis un tour spécifiquement consacré aux interactions repérées par chacun. Sortie attendue : un tableau consolidé des résultats inter-preuves avec interactions identifiées et traitées explicitement.

#### Statuer

La synchronisation faite, chaque preuve peut être tranchée. **Trois sorties nominales** par incertitude :

1. **Validé** ✅ — hypothèse confirmée, critère tenu avec marge suffisante, pas d'interaction défavorable. La solution retenue au [[concept|concept]] passe au [[dossier-technique|dossier technique]] sans modification.
2. **Ajustement local** 🔁 — critère tenu mais à conditions précisées (mode de fonctionnement limité, plage réduite, paramètre ajusté). Reprise ciblée d'un arbitrage concept sans tout casser : on modifie la solution sans renégocier l'architecture. La [[matrice-de-decision|matrice de décision]] concernée à l'étape 2 du concept est mise à jour, traçabilité documentée.
3. **Retour amont structurant** ⚠️ — hypothèse invalidée, critère manqué, ou interaction inter-preuves bloquante. Reprise du concept étape 3 (renégociation à 3 disciplines) si le conflit révélé est inter-disciplines, ou étape 4 (pré-dim raffiné) si la marge calculée s'est révélée mal modélisée. Rétroaction vers la [[specification-technique|spécification technique]] dans les cas plus rares où la preuve révèle qu'une fonction de service du [[cahier-des-charges-fonctionnel|CdCF]] est mal posée.

La décision s'accompagne **dans la même séance** des mises à jour qu'elle entraîne : [[matrice-de-risques|matrice de risques]] avec les mesures réelles ([[gestion-de-projet|gestion de projet]]), évaluation [[ecoconception|écoconception]] confrontée aux mesures plutôt qu'aux estimations, et matrices de décision du [[concept|concept]] si retour amont. Ces mises à jour ne sont pas un travail de rédaction — elles sont l'expression concrète de la décision. Les reporter à l'étape 5 (rédaction du rapport) briserait la traçabilité : on rédigerait un rapport qui ne s'appuie plus sur les artefacts à jour.

> [!warning] Attention
> **Une preuve non concluante n'est pas un échec.** L'évaluation porte sur la lucidité de l'analyse, pas sur la conclusion. Une preuve qui invalide une hypothèse, documente proprement pourquoi, et justifie un retour amont est *un bon livrable*. À l'inverse, une preuve dont les résultats sont bidouillés pour « rentrer dans la case concluante » est un mauvais livrable, même si elle évite la rétroaction.

> [!tip] Astuce
> **Synchroniser avant de statuer.** L'ordre n'est pas une convention de présentation, c'est une discipline méthodologique : statuer preuve par preuve avant la synchronisation fait rater les interactions, et débouche sur des décisions individuellement défendables mais incohérentes une fois assemblées. Trente minutes de tour de table en amont valent mieux qu'un retour amont supplémentaire en aval.

> [!example] Exemple : projet bras 3 axes
> Confrontation au critère pour la preuve *tenue articulation 3D* : critère 0,5° à 1000 cycles tenu pour aucune des trois articulations testées (dépassement entre 480 et 550 cycles), avec une marge négative confirmée par les trois mesures convergentes. Pas d'effet de cas particulier, pas de raffinement de critère a posteriori envisageable — le verdict est clair.
>
> Synchronisation inter-preuves : cas fil rouge à une seule preuve menée, pas d'interaction à arbitrer. Si d'autres preuves avaient été menées en parallèle (par exemple sur la tenue thermique de l'alimentation), l'échauffement perceptible des articulations à partir de ~300 cycles aurait été à confronter aux relevés thermiques.
>
> Synthèse et statut :
>
> | Preuve | Résultat | Comparaison critère | Décision |
> |---|---|---|---|
> | Tenue articulation 3D | Jeu > 0,5° dès ~500 cycles, 3 articulations | Critère manqué | ⚠️ Retour amont → [[concept|concept]] étape 3 |
>
> Décision tracée : retour amont structurant vers [[concept|concept]] étape 3 pour renégociation à trois disciplines. Trois voies à explorer : méca articulation [[impression-3d|imprimée]] à plus haut remplissage (impact poids et temps d'impression), passage à une articulation [[usinage|usinée]] (impact coût et délai), ou retour info pour revoir la cinématique de manière à réduire le couple sur l'axe concerné (impact concept). La [[matrice-de-decision|matrice de décision]] méca de l'étape 2 concept sera mise à jour avec le critère « tenue en cycle continu » réajusté à la baisse pour le PLA 60 %.
>
> Mises à jour en séance : [[matrice-de-risques|matrice de risques]] enrichie d'un risque thermique nouveau (échauffement articulations imprimées en cycle continu, observé non-prévu par le pré-dim), évaluation [[ecoconception|écoconception]] révisée (bilan défavorable du [[pla|PLA]] 60 % une fois la durée de vie effective mesurée — la solution imprimée perd une partie de son avantage écoconception initial). Reprise concept étape 3 prévue avant rédaction du rapport PoC.

> [!livrable] Livrable 4/5 — Preuve de concept
> - Tableau de statut par incertitude (résultat brut, comparaison au critère, décision tracée : validé / ajustement local / retour amont)
> - [[matrice-de-risques|Matrice des risques]] mise à jour, évaluation [[ecoconception|écoconception]] révisée avec mesures réelles, matrices de décision du [[concept|concept]] mises à jour si retour amont

### 5. Rédiger et faire valider

L'étape 4 a livré les décisions tracées et les artefacts amont à jour ([[matrice-de-risques|matrice de risques]], évaluation [[ecoconception|écoconception]], matrices de décision du [[concept|concept]] si retour amont). L'étape 5 ne produit rien de nouveau techniquement : elle **agrège les quatre étapes précédentes** (énoncés de preuves, bancs montés, mesures, analyses et décisions) dans un **rapport de preuve de concept** unique, relu et réécrit pour un lecteur extérieur. Le geste est l'équivalent direct de la rédaction du dossier concept en sortie de phase 2 : on passe du matériau de travail interne à un document de référence opposable.

L'étape se mène en trois temps : structurer le rapport, rédiger chaque section, faire valider en revue PoC.

#### Structurer le rapport

Cinq sections types, dans l'ordre du raisonnement de l'étude :

1. **Présentation et incertitudes en entrée** — rappel des incertitudes formulées en sortie de [[concept|concept]] étape 4 (questions, rattachement [[cahier-des-charges-fonctionnel|CdCF]], catégorie), périmètre de la PoC, équipe.
2. **Bancs et protocoles** — par incertitude : présentation du banc monté, protocole validé à l'étape 1, conditions de mesure et caractérisation du banc.
3. **Mesures et analyses** — par incertitude : données brutes (extraits significatifs, le détail va en annexes), confrontation au critère, anomalies relevées.
4. **Synthèse et décisions** — tableau consolidé du statut par incertitude (résultat / critère / décision), interactions inter-preuves identifiées, mises à jour amont entraînées par les décisions (matrice de risques, écoconception, matrices de décision concept si retour amont).
5. **Annexes** — données brutes complètes, journaux d'essai, photos des bancs, courbes complètes — tout ce qui sert l'instruction approfondie sans alourdir le récit principal.

L'ordre n'est pas neutre : il suit la progression naturelle de lecture par un extérieur (de quoi parle-t-on / comment l'a-t-on testé / qu'a-t-on mesuré / qu'a-t-on décidé). Inverser cet ordre (mettre les décisions au début, par exemple) fait perdre le fil au lecteur qui doit refaire le raisonnement dans le mauvais sens.

#### Rédiger chaque section

Trois soins à apporter à la rédaction.

Soigner la **forme** : le rapport peut être lu par un enseignant qui n'a pas suivi le projet au quotidien, ou par un client externe qui ne dispose pas du contexte d'équipe. Les figures (courbes de mesure, photos de bancs, schémas synoptiques) doivent être lisibles isolément, légendées explicitement avec unités, axes et conditions de mesure. Les valeurs brutes sont mises en forme propre dans les sections 3 et 4 ; les feuilles de tableur en l'état vont en annexes.

Soigner la **cohérence inter-sections** : chaque section renvoie explicitement aux sections amont sur lesquelles elle s'appuie. La section 4 (synthèse) renvoie aux mesures (section 3) qui renvoient aux protocoles (section 2) qui renvoient aux incertitudes (section 1) qui renvoient au CdCF. Cette chaîne de renvois rend le rapport **opposable** : un lecteur peut remonter de n'importe quelle décision jusqu'à l'exigence d'origine qui l'a déclenchée.

Soigner la **traçabilité jusqu'au CdCF** : chaque décision tracée en étape 4 doit pouvoir se rattacher à l'exigence CdCF qui a fait remonter l'incertitude au [[concept|concept]]. Si la PoC a entraîné une modification du CdCF (cas rare, mais possible si la preuve révèle une fonction de service mal posée), elle est documentée explicitement dans la section 1, version du CdCF mise à jour — pas masquée.

#### Faire valider en revue PoC

La **revue PoC** est l'équivalent enseignant d'un go/no-go pour engagement matériel : elle valide ou non le passage au [[dossier-technique|dossier technique]] et l'achat des composants définitifs. Conduite par l'encadrant (et par le client si externe), elle vérifie que les incertitudes en entrée ont été levées (ou que le retour amont a été acté proprement), et que la phase suivante peut engager les commandes en sécurité.

Préparation : auto-relecture par l'équipe complète, pas seulement par le rédacteur. Anticipation des questions critiques — chaque décision tracée doit pouvoir être défendue en moins d'une minute, en pointant la mesure et le critère qui l'ont produite. Répétition orale.

Quatre issues nominales, calquées sur la revue de [[concept|concept]] en miroir :

1. **Validé sans réserve** — l'ensemble des incertitudes est levé, les décisions sont tracées, les artefacts amont à jour. Engagement vers le [[dossier-technique|dossier technique]] sans condition.
2. **Validé sous conditions** — un ou plusieurs points à compléter avant engagement (compléter une mesure, documenter une décision, refaire un essai sur un cas marginal). Les corrections sont demandées explicitement, le passage au dossier technique est conditionné à leur intégration.
3. **Reprise locale** — un protocole ou une décision doit être revu, retour à l'étape 3 ou 4 localement. La revue PoC se tient à nouveau après la reprise.
4. **Rétroaction amont structurante** — la PoC a révélé qu'un retour [[concept|concept]] (étape 3 ou 4) ou [[specification-technique|spécification technique]] est nécessaire. Dans ce cas, la revue valide la **boucle** (décision de retour amont + plan de reprise) et non l'engagement vers le dossier technique. Cette issue est nominale, pas exceptionnelle : c'est ce que la PoC est là pour rendre possible.

> [!warning] Attention
> **Compiler n'est pas rédiger.** Un rapport PoC qui se contente de mettre bout à bout les livrables des étapes 1-4 (énoncés, bancs, relevés bruts, décisions) sans relecture transversale ne tient pas en revue : incohérences entre sections, doublons de figures, sauts d'argumentation. Le geste de l'étape 5 est précisément la **relecture critique de l'ensemble** et la **réécriture** des transitions et justifications qui n'existaient pas dans les livrables intermédiaires.

> [!tip] Astuce
> **Faire la revue à blanc en équipe avant le jour J.** Un mock d'une heure, avec un membre de l'équipe qui joue l'encadrant et pose les questions désagréables (« comment justifiez-vous le critère ? », « la marge à 5 % est-elle vraiment opposable ? », « pourquoi pas l'autre voie ? »), fait émerger les décisions mal défendues et les figures illisibles. Le coût d'un mock est très inférieur à celui d'un rapport renvoyé pour reprise.

> [!example] Exemple : projet bras 3 axes
> Rapport PoC bras 3 axes — TdM type instanciée sur le cas à une incertitude :
>
> 1. **Présentation et incertitudes en entrée** — rappel des incertitudes formulées en sortie de [[concept|concept]] étape 4 (tenue mécanique des articulations imprimées 3D, rattachée à F0 précision bout de bras), périmètre PoC (une preuve), équipe.
> 2. **Bancs et protocoles** — banc monté pour la preuve *tenue articulation 3D* : platine du fablab, bras de levier 100 mm, masse étalonnée 1,22 kg, [[comparateur|comparateur]] calibré 0,02°, [[microcontroleur|microcontrôleur]] [[arduino|Arduino]]. Protocole validé à l'étape 1 avec trois corrections (température, critère d'arrêt, traçabilité couple appliqué).
> 3. **Mesures et analyses** — relevés sur 1000 cycles, 3 articulations testées. Dépassement du critère 0,5° entre 480 et 550 cycles, échauffement perceptible à partir de 300 cycles, dégradation visible (matage du logement) en fin d'essai. Données brutes complètes en annexe.
> 4. **Synthèse et décisions** — tableau de statut : preuve *tenue articulation 3D* → ⚠️ retour amont [[concept|concept]] étape 3. Trois voies à explorer (remplissage plus haut / articulation [[usinage|usinée]] / révision cinématique), [[matrice-de-decision|matrice de décision]] méca étape 2 concept à mettre à jour, [[matrice-de-risques|matrice de risques]] enrichie d'un risque thermique, [[ecoconception|écoconception]] révisée.
> 5. **Annexes** — données brutes 3 articulations (tableur partagé), courbes jeu vs cycles, photos du banc, journal d'essai.
>
> Revue PoC conduite après reprise [[concept|concept]] étape 3 (renégociation aboutie : passage à articulation [[usinage|usinée]] pour les 3 axes, mise à jour matrices de décision méca + écoconception, rétroaction validée par l'encadrant). Issue de la revue : **validé sous conditions** — engagement vers [[dossier-technique|dossier technique]] sous réserve de documenter la dérive du [[pla|PLA]] 60 % dans le bilan écoconception du dossier concept mis à jour. Plan de reprise tracé, calendrier ajusté avec deux semaines supplémentaires pour la fabrication des articulations usinées.

> [!livrable] Livrable 5/5 — Preuve de concept
> - Rapport de preuve de concept agrégé (présentation et incertitudes / bancs / mesures et analyses / synthèse et décisions / annexes), traçable jusqu'au [[cahier-des-charges-fonctionnel|CdCF]]
> - Validation en revue PoC par l'encadrant (et le client si externe), avec issue tracée

## Conclusion

À ce stade, les incertitudes critiques sont levées : chaque hypothèse a été confrontée à la réalité physique, les solutions retenues sont confirmées ou ajustées, et les risques résiduels sont chiffrés. La suite du travail bascule en [[dossier-technique|dossier technique]] pour transformer cette architecture validée en plans détaillés exécutables et engager matériellement le projet.

---

## Pièges fréquents

**Démarrer le montage sans énoncé écrit.** L'énoncé (hypothèse + critère + protocole) est ce qui rend la preuve opposable. Sans lui, on ajuste la mesure à ce qu'on observe, on déplace le critère pour que « ça passe », et le verdict perd toute valeur. Premier écueil de l'étape 1, le plus structurant.

**Critère de succès flou ou non chiffré.** « Ça marche à peu près », « c'est acceptable » ne sont pas des critères : ils ne discriminent pas, ils rendent la décision impossible. Le critère se déduit directement de l'exigence du [[cahier-des-charges-fonctionnel|CdCF]] qui a fait remonter l'incertitude, chiffré et opposable.

**Tester l'intégralité du système au lieu de cibler les incertitudes.** Le banc PoC est focalisé sur l'incertitude, pas un système réduit. Monter le système complet introduit du bruit, allonge le temps de manip et complique l'interprétation. La PoC répond à une question précise — l'[[integration-et-tests|intégration et tests]] valide l'ensemble.

**Acheter en personnel ce que le stock école pouvait fournir.** Entorse à l'équité budgétaire entre équipes et contournement du cadre projet. Si le délai logistique du stock divers est trop long, c'est la planification qu'il faut revoir, pas le processus.

**Sauter la caractérisation du banc.** Sans caractérisation préalable (constantes du banc, calibration des instruments, conditions ambiantes), on ne peut pas distinguer un défaut du banc d'un comportement réel du composant testé. Un comparateur mal réglé peut donner 0,1° de dérive intrinsèque qui pollue toute la mesure.

**Conclure en cours d'essai au lieu de collecter d'abord.** Biais cognitif classique : adapter la mesure à la conclusion qu'on anticipe. La séparation entre exécution (étape 3) et analyse (étape 4) sert précisément à protéger l'équipe de ce biais. À ce stade, on collecte, on ne décide pas.

**Raffiner le critère a posteriori.** Si la mesure dépasse le critère, c'est un dépassement, pas une mesure « presque conforme ». Le critère a été figé à l'étape 1, il sert précisément à ce qu'on ne puisse pas le déplacer en sortie de manip.

**Statuer preuve par preuve sans synchronisation inter-preuves.** Produit des décisions individuellement défendables mais incohérentes une fois assemblées. La synchronisation rassemble les résultats et fait émerger les interactions que la conduite individuelle de chaque preuve n'a pas pu voir.

**Négliger la mise à jour des risques et de l'écoconception après mesures réelles.** C'est l'enseignement central de la PoC qui se perd. La [[matrice-de-risques|matrice de risques]] et l'évaluation [[ecoconception|écoconception]] se mettent à jour avec les mesures à l'étape 4, dans la même séance que la décision, pas en rédaction du rapport.

**Masquer une preuve non concluante pour éviter le retour amont.** L'évaluation porte sur la lucidité de l'analyse, pas sur la conclusion. Une preuve qui invalide une hypothèse, documente proprement pourquoi, et justifie un retour amont est un bon livrable — pas un échec.

**Compiler le rapport au lieu de le rédiger.** Mettre bout à bout les livrables 1-4 sans relecture transversale produit incohérences, doublons et sauts d'argumentation. Le rapport se réécrit pour un lecteur extérieur, avec transitions et justifications qui n'existaient pas dans les livrables intermédiaires.

## Pendant cette phase, côté équipe

**Interfaces métiers.** La preuve de concept mobilise les cours collègues plus qu'elle ne les refait : montage des bancs au fablab ([[usinage|usinage]], [[impression-3d|impression 3D]], [[soudure|soudure]]), instrumentation et acquisition de données côté info, dimensionnement mécanique rapide pour les supports d'essai. Le dialogue avec les enseignants concernés se cale en amont de la phase, dès la sortie d'étape 4 [[concept|concept]], pour synchroniser disponibilités fablab, créneaux de manip, et matériel spécifique demandé via le stock divers.

**[[gestion-de-projet|Gestion de projet]].** La PoC consomme la **commande de la phase précédente** (liste d'incertitudes formulées en sortie de [[concept|concept]] étape 4) et produit en sortie des artefacts mis à jour qui conditionnent la suite du projet : [[matrice-de-risques|matrice de risques]] confrontée aux mesures, évaluation [[ecoconception|écoconception]] révisée, matrices de décision concept actualisées en cas de retour amont. Chaque retour amont est une mise à jour structurante du [[retroplanning|rétroplanning]] : prévoir une marge si la PoC renvoie au concept étape 3 (renégociation), davantage si une rétroaction vers la [[specification-technique|spécification technique]] est nécessaire. Le rétroplanning intègre ces aléas dès le concept, pas en sortie de PoC.

**[[ecoconception|Écoconception]].** La PoC est la première phase où les estimations du [[concept|concept]] (consommations, durées de vie, bilans matériaux) sont confrontées à des mesures réelles. C'est la phase de vérité de l'évaluation écoconception : telle solution paraissait favorable sur le papier, la mesure révèle qu'elle l'est moins en cycle d'usage réel ; tel matériau s'usait moins vite que prévu, le bilan peut être révisé à la baisse. Les estimations qui restent en place après la PoC sont marquées comme telles, distinctes des données mesurées.

**[[securite-et-qualite|Sécurité et qualité]].** Premières manipulations sous tension, en mouvement, parfois en configuration limite (essai au-delà du nominal pour caractériser le composant). La sécurité des bancs est formalisée avant tout démarrage : équipement de protection individuelle adapté, procédure d'urgence affichée, intervention de l'enseignant requise pour les manipulations à risque (haute tension, machines tournantes, produits chimiques). La trace écrite des conditions de sécurité de chaque banc est elle-même un livrable de la phase, intégrée au rapport PoC en annexe.

## Voir aussi

- [[index|Hub du parcours projet]]
- Étape précédente : [[concept|Concept]]
- Étape suivante : [[dossier-technique|Dossier technique]] *(à créer)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — à créer)*
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[securite-et-qualite|Sécurité et qualité]] *(fil transverse — à créer)*
