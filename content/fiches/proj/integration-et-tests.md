---
title: Intégration et tests
type: trame
phase: 5
phases:
  - integration-et-tests
tags:
  - proj
  - trame
  - phase-5
prerequis:
  - dossier-technique
aa: []
draft: false
---

L'**intégration et les tests** est la cinquième et dernière étape du projet [[mecatronique|mécatronique]] : on transforme le [[dossier-technique|dossier technique]] validé et les commandes émises en **prototype fonctionnel qualifié**, puis on **clôture le projet**. C'est la branche ascendante du cycle en V — on remonte fonction par fonction jusqu'à la qualification vs [[cahier-des-charges-fonctionnel|CdCF]], moment où le V se referme. C'est aussi la première étape **sans rétroaction sortante** : le calendrier de fin de semestre impose la livraison.

## Posture attendue

La tentation, à ce stade, est de croire que l'essentiel est derrière soi ("on a juste à monter et tester"). Résistez. L'intégration est **précisément l'endroit où les écarts entre la pensée et la réalité se révèlent**, et où l'on doit gérer ces écarts **sans pouvoir revenir en arrière**. C'est aussi l'étape qui enseigne une compétence ingénieur rarement explicitée : **livrer un système avec ses écarts documentés vaut mieux que ne pas livrer en cherchant la perfection**. L'évaluation porte sur la **lucidité de l'analyse**, pas sur l'atteinte parfaite du CdCF.

## Objectif de la phase

Produire un **prototype qualifié** accompagné d'un **rapport final** et d'une **soutenance**, qui :

- intègre les pièces fabriquées et les composants reçus en un système physique fonctionnel
- valide chaque fonction puis chaque composition de fonctions selon une **pyramide de tests à 5 niveaux** (cascade linéaire)
- confronte le prototype aux **critères quantifiés du CdCF** ([[specification-technique|spécification technique]]) — moment où le V se referme
- documente honnêtement les **écarts** lorsque certains critères ne sont pas atteints
- clôture le projet par trois bilans (technique, projet, écoconception) et un REX d'équipe

## Démarche

### 1. Approvisionner et fabriquer

L'intégration commence par récupérer ce qui a été commandé et fabriquer ce qui sera produit en interne. La phase précédente, le [[dossier-technique|dossier technique]], a clos l'amont du V : plans figés, commandes émises chez les fournisseurs partenaires, fabrications internes planifiées. Deux branches désormais avancent **en parallèle** : la branche **réception** vit au rythme des fournisseurs, la branche **fabrication interne** vit au rythme des moyens école disponibles.

Le parallélisme est essentiel à ce stade : attendre la fin d'une branche pour démarrer l'autre, c'est perdre une part importante de la marge de fin de projet. L'équipe anticipe le passage des fichiers en file de production dès la clôture du dossier technique. Une réception qui tarde n'arrête pas la fabrication interne ; une machine occupée n'arrête pas la réception. Gestion d'inventaire à anticiper, surtout si les délais de livraison sont étalés.

#### Recevoir les commandes externes au rythme des livraisons

Les livraisons arrivent à des dates différentes selon le fournisseur partenaire (électronique, matière, sous-traitance externe). À chaque réception, l'équipe effectue trois gestes simples : 1/ contrôler que le bon de livraison correspond au bon de commande émis en [[dossier-technique|dossier technique]] ; 2/ vérifier visuellement que la quantité et les références reçues correspondent ; 3/ ranger en stockage organisé, étiqueté par lot et par fournisseur. Les non-conformités de livraison (mauvaise référence, casse au transport, quantité insuffisante) se réclament dans la journée, pas la semaine d'après.

> [!tip] Astuce
> **La traçabilité par étiquette dès la réception évite les confusions.** Une étiquette par sachet ou par boîte avec référence + lot + date d'arrivée prend cinq minutes et économise une demi-journée le jour où l'on cherche « le bon stepper ».

#### Fabriquer en interne au rythme des moyens disponibles

Trois moyens de fabrication interne se partagent ici : l'[[impression-3d|impression 3D]] (transmise au responsable fablab via fichiers STL), l'[[usinage|usinage]] de pièces simples sur les machines école, et la gravure interne de [[pcb|PCB]] monoface sur la machine à l'anglaise. Chaque moyen a sa file d'attente. L'équipe transmet les fichiers (STL, FAO, GERBER) dès la clôture du dossier technique pour entrer au plus tôt dans les files. La fabrication interne ne se commande pas, elle se planifie au calendrier des machines disponibles.

> [!warning] Attention
> **Une pièce sortie de machine n'est pas une pièce validée.** L'inspection visuelle au moment du retrait machine est insuffisante pour conclure à la conformité. La validation formelle se joue à l'étape suivante (niveau 0 de la pyramide de tests).

> [!example] Exemple : projet bras 3 axes
> Branche réception : les 3 steppers Nema 17 et leurs drivers arrivent en début de **semaine n°13** chez le fournisseur électronique (lead time 5 jours). Les 3 articulations usinées en alu 6061 arrivent en fin de **semaine n°15** chez le fournisseur matière (lead time 3 semaines, contraignant pour le calendrier). Les composants passifs (résistances, condensateurs, connecteurs) sont déjà au stock divers depuis la fin du dossier technique.
>
> Branche fabrication interne : les 3 segments imprimés en PLA passent en file fablab dès l'envoi des STL au responsable (**semaine n°12**), sortie machine en **semaine n°13**. Le [[pcb|PCB]] monoface gravé en interne sur la machine à l'anglaise est lancé dès la clôture du dossier technique (**semaine n°12**), sortie en **semaine n°13**.
>
> En **semaine n°15**, l'ensemble est physiquement disponible. La contrainte structurante du calendrier est l'arrivée des articulations usinées en dernier — les autres branches sont terminées deux semaines plus tôt.

> [!livrable] Livrable 1/5 — Intégration et tests
> - Ensemble des pièces et composants disponibles physiquement (réceptionnés + fabriqués)

### 2. Valider les pièces fabriquées

La phase d'intégration commence officiellement ici : avant tout test fonctionnel mécatronique, on inspecte chaque sortie de fabrication **individuellement**. C'est le **niveau 0 de la pyramide de tests** — une non-conformité non détectée à ce stade contamine tous les tests fonctionnels qui suivent, et le diagnostic devient nettement plus difficile une fois les pièces assemblées.

Cette étape est intrinsèquement **disciplinaire** — par opposition aux tests fonctionnels mécatroniques de l'étape suivante, qui sont par nature multi-disciplines. Un [[pcb|PCB]] est un objet électronique, une articulation usinée est un objet mécanique, un [[firmware|firmware]] est un artefact informatique. La validation au niveau 0 inspecte chacun de ces artefacts dans la grille d'évaluation propre à sa discipline, avec ses outils, ses critères, ses signes de défaillance typiques. Trois H4 disciplinaires suivent, dans cet ordre — électronique, mécanique, informatique. Si une pièce échoue à son niveau 0, elle retourne en étape 1 (refaire ou remplacer), surtout pas en bricolage.

#### Valider la chaîne électrique

Les artefacts électroniques produits ou reçus se valident sur quatre axes : 1/ continuité et absence de court-circuit sur le [[pcb|PCB]] gravé, vérifiée au [[multimetre|multimètre]] en mode buzzer ; 2/ alimentation correctement régulée et stable sous charge nominale, mesurée à l'[[alimentation-stabilisee|alimentation stabilisée]] et confirmée à l'[[oscilloscope|oscilloscope]] ; 3/ [[niveau-logique|niveaux logiques]] cohérents en sortie de [[microcontroleur|MCU]] (typiquement 3,3 V ou 5 V selon la famille) et compatibles avec les entrées des composants en aval (drivers, capteurs, écrans) ; 4/ réponse correcte des drivers en bench, sans charge mécanique, à une commande d'impulsion de référence. Toute non-conformité retourne en étape 1 : refaire le PCB ou remplacer le composant défaillant.

#### Valider les pièces mécaniques

Les artefacts mécaniques se valident d'abord visuellement (qualité de surface, défauts d'[[impression-3d|impression 3D]] tels que délamination ou sous-extrusion, bavures d'[[usinage|usinage]]), puis dimensionnellement au [[pied-a-coulisse|pied à coulisse]] ou au [[comparateur|comparateur]] sur les cotes critiques identifiées en [[dossier-technique|dossier technique]] (alésages d'axe, entraxes de fixation, planéités d'appui). Un [[gabarit|gabarit]] de vérification, simple à fabriquer en interne, accélère les contrôles répétitifs sur séries de pièces identiques. Le geste d'**essai à blanc d'assemblage** (ajustement axe-alésage, montage avec l'élément voisin) révèle les non-conformités fines qu'aucune mesure isolée ne détecte. Une pièce non conforme retourne en fabrication : retoucher peut être tentant, c'est presque toujours plus coûteux que refaire.

#### Valider le firmware et l'environnement de développement

Le [[firmware|firmware]] est en grande partie hérité de la [[preuve-de-concept|preuve de concept]], mais il doit être validé sur la cible matérielle finale : compilation sans erreur sur le poste de développement, transfert vers le [[microcontroleur|MCU]] sans rejet, démarrage à la mise sous tension, réponse de la console série. L'environnement de développement lui-même se valide en parallèle — bibliothèques nécessaires installées sur tous les postes équipe, version stable identifiée et figée, outils de mesure (oscilloscope ou analyseur logique) communiquent avec le poste. Toute non-conformité retourne au code source, aux dépendances, ou à la configuration de l'IDE, pas à un branchement à modifier en urgence.

> [!tip] Astuce
> **Tracer chaque validation sur la fiche dédiée du dossier de tests, dès le niveau 0.** Le dossier de tests n'attend pas le niveau 1 pour commencer à se remplir. Une feuille de validation niveau 0 par pièce ou par sous-ensemble vaut diagnostic instantané quand un test fonctionnel échoue plus tard.

> [!warning] Attention
> **Sauter le niveau 0 contamine tous les tests fonctionnels qui suivent.** Le piège classique consiste à se dire « ça a l'air bon, on verra à l'assemblage » : un défaut non détecté à l'unité se manifeste plus tard en test fonctionnel sous une forme méconnaissable, et le diagnostic prend dix fois plus de temps que la validation initiale aurait pris.

> [!example] Exemple : projet bras 3 axes
> Validation niveau 0 réalisée en **semaine n°13** au fur et à mesure des arrivées et des sorties machine, finalisée en **semaine n°15** avec l'arrivée des articulations alu.
>
> Chaîne électrique : [[pcb|PCB]] monoface gravé en interne — continuité OK sur les 32 pistes, un court-circuit détecté près du connecteur d'alimentation, corrigé au scalpel et vérifié au [[multimetre|multimètre]]. Niveaux logiques en sortie de [[microcontroleur|MCU]] mesurés à 3,3 V conformes au pré-dim. Alimentation 12 V régulée stable sous 1,5 A en charge. Un condensateur de découplage 100 nF défectueux remplacé.
>
> Pièces mécaniques : 2 segments imprimés sur 3 conformes ; le troisième présente une délamination visible entre couches 30 et 45 → retour fablab pour réimpression. Articulations usinées en alu 6061 — cotation au pied à coulisse OK sur les 3, ajustement à blanc avec axe nominal sans jeu excessif. Un gabarit simple imprimé en PLA a servi à vérifier l'entraxe des perçages sur les trois articulations.
>
> Firmware et environnement : compilation sans erreur, chargement sur la cible OK, console série répond avec le message attendu au démarrage. Bibliothèque stepper de la [[preuve-de-concept|preuve de concept]] conservée telle quelle. IDE configuré identiquement sur les trois postes équipe.
>
> Sortie d'étape : 1 segment imprimé à refaire (sortie machine prévue avant fin **semaine n°15**), le reste est validé. La validation conditionne le démarrage de l'étape 3 — pas de test fonctionnel sur une pièce non validée.

> [!livrable] Livrable 2/5 — Intégration et tests
> - Pièces validées individuellement (niveau 0), non-conformités traitées et tracées

### 3. Conduire la pyramide de tests

À ce stade, toutes les pièces sont disponibles et validées individuellement (niveau 0 acquis à l'étape 2). On entre dans le **cœur de l'étape** : la **pyramide de tests fonctionnels**, qui remonte la branche ascendante du cycle en V jusqu'à la qualification face au [[cahier-des-charges-fonctionnel|CdCF]]. Les tests fonctionnels mécatroniques sont par nature multi-disciplines — une fonction du système mobilise simultanément électronique, mécanique et informatique. C'est pourquoi le découpage qui suit est **par fonction**, pas par discipline.

La pyramide se déroule **en cascade linéaire ascendante** avec rétroactions ciblées vers le palier précédent en cas d'échec : niveau 1 (fonctions unitaires) → niveau 2 (compositions de fonctions) → niveau 3 (système complet) → niveau 4 (confrontation au CdCF). Trois principes structurent le passage entre niveaux : 1/ un palier supérieur ne se teste que sur des paliers inférieurs déjà passés ; 2/ un échec à un palier renvoie au palier précédent, pas au début ; 3/ le diagnostic distingue **banc de test inadapté** (revoir le protocole) et **pièce ou logique défaillante** (revoir l'objet testé). Le niveau 4 est le pivot pédagogique de toute la fiche, traité dans un H4 dédié.

#### Tester chaque fonction du CdCF isolément (niveau 1)

Chaque fonction principale ([[fonction|FP]]) et complémentaire (FC) du [[cahier-des-charges-fonctionnel|CdCF]] est testée individuellement, sur le système assemblé mais en isolant la fonction des autres. Insister sur un point souvent mal compris : une fonction mécatronique mobilise **déjà plusieurs disciplines**. Tester « faire tourner un axe » fait intervenir l'élec (commande, alimentation), l'info (logique de commande, lecture du retour) et la méca (transmission mécanique). Il n'existe pas de test « purement élec » au niveau fonctionnel — c'est précisément ce que disait l'étape précédente au niveau 0 et que la pyramide quitte ici. Le protocole de chaque test unitaire reprend les critères chiffrés du CdCF et trace les résultats sur la fiche dédiée du dossier de tests. Échec → diagnostic banc vs pièce, puis retour étape 2 si pièce défaillante.

#### Tester les compositions de fonctions, puis le système complet (niveaux 2 et 3)

Une fois les fonctions unitaires passées, on teste les **compositions** (niveau 2) puis le **système complet** (niveau 3). Au niveau 2, on assemble plusieurs fonctions unitaires qui doivent coopérer : « atteindre un point cible » combine « faire tourner chaque axe » + « calculer la cinématique inverse » + « synchroniser la commande ». Au niveau 3, l'ensemble du système est mis en marche dans son scénario nominal d'usage — interface utilisateur, séquences automatiques, retour d'information. Les échecs au niveau 2 renvoient au niveau 1 (une fonction unitaire qui ne passe plus alors qu'elle passait la veille révèle une interférence) ; les échecs au niveau 3 renvoient au niveau 2 (la composition est instable ou mal synchronisée). La séparation niveau 2 vs niveau 3 n'est pas toujours nette en pratique — règle simple : un test qui mobilise **toutes** les fonctions est un test niveau 3, sinon c'est un niveau 2.

#### Qualifier le prototype contre le CdCF — refermer le V (niveau 4)

Le niveau 4 est le pivot pédagogique de la phase. On ressort le [[cahier-des-charges-fonctionnel|CdCF]] de la [[specification-technique|spécification technique]] et on coche **chaque critère quantifié un par un** avec les mesures effectives du prototype. Trois sorties nominales structurent ce moment : 1/ **critères atteints** → prototype qualifié au sens fort ; 2/ **critères partiellement atteints** → écarts documentés, prototype livré avec ses limites assumées ; 3/ **critères significativement non atteints** → écarts documentés, sans retour amont. Le niveau 4 produit le **tableau de qualification complète** du dossier de tests — colonne critère CdCF, colonne valeur cible, colonne valeur mesurée, colonne statut. C'est sur ce tableau, et sur l'analyse des écarts qui l'accompagne, que se joue une grande partie de l'évaluation finale du projet.

> [!tip] Astuce
> **Préparer la fiche de qualification niveau 4 dès le début de l'étape 3, en parallèle des niveaux 1 à 3.** La fiche reprend directement la grille des critères chiffrés issus de la [[specification-technique|spécification technique]]. Avoir le tableau prêt avant de mesurer évite l'effet « on note les chiffres dans le carnet et on remplit à la fin », qui produit régulièrement des oublis de critères lors de la qualification.

> [!example] Exemple : projet bras 3 axes
> Tests pyramide menés en **semaine n°15** sur le système intégré, qualification menée en sortie de **semaine n°15**.
>
> Niveau 1 (fonctions unitaires) : **FP1** *Faire tourner un axe* testée indépendamment sur les 3 axes — commande, sens de rotation, course, butée logicielle. **FP2** *Lire la position* testée via comptage de pas. Toutes les fonctions unitaires passent au premier essai, modulo un dépassement de butée logicielle sur l'axe 2 corrigé par ré-étalonnage du zéro machine.
>
> Niveau 2 (compositions) : *Atteindre un point cible* combine les 3 axes via cinématique inverse + synchronisation de commande. Passe à la deuxième tentative après correction d'une rotation repère sur l'axe 3 (sens inversé dans le modèle).
>
> Niveau 3 (système complet) : enchaîner une trajectoire prédéfinie depuis l'interface utilisateur. Passe, avec un léger à-coup observé en transition entre les segments de trajectoire — analysé comme un effet du jeu cumulé sur les articulations, pas un défaut de commande.
>
> Niveau 4 (qualification CdCF) : confrontation aux critères chiffrés issus de la [[specification-technique|spécification technique]]. Précision en bout mesurée à ± 8 mm vs cible ± 5 mm → critère **non atteint**, écart documenté ; charge utile 100 g atteinte sans à-coup → critère **atteint** ; vitesse 45 mm/s vs cible 50 mm/s → critère **partiellement atteint**. Statut général : **prototype qualifié avec écarts documentés**, jeu articulaire identifié comme cause principale, piste d'amélioration (articulations à roulements) consignée au rapport final.

> [!warning] Attention
> **Au niveau 4, l'écart se documente, il ne se rattrape pas.** Le calendrier de fin de semestre impose la livraison — il n'y a plus de rétroaction sortante de cette phase. Si la précision visée n'est pas atteinte, on **ne refait pas** la cinématique en urgence : on consigne l'écart au tableau de qualification, on analyse son origine, on propose des pistes d'amélioration documentées dans le rapport final. L'évaluation porte autant sur cette lucidité d'analyse que sur les chiffres bruts.

> [!livrable] Livrables 3/5 — Intégration et tests
> - Prototype qualifié (au sens fort si critères CdCF atteints, avec écarts documentés sinon)
> - Dossier de tests (niveaux 1 à 4, protocoles + résultats)

### 4. Mener les bilans de clôture

Le prototype est qualifié (au sens fort ou avec écarts documentés à l'étape 3) ; le calendrier impose maintenant la transition vers la clôture du projet. L'équipe conduit **trois bilans en parallèle**, tous évalués, qui ferment chacun une dimension du parcours : bilan technique (le système livré vs les exigences posées), bilan projet (la conduite vs les contraintes), bilan écoconception (l'empreinte réelle vs l'empreinte estimée). Les trois convergent vers un **REX d'équipe** réflexif, distinct des bilans évalués.

Conduire ces bilans en parallèle plutôt qu'en série est une question de réalisme calendaire — on n'a plus le temps de les enchaîner. Concrètement, chaque membre de l'équipe peut prendre la main sur un bilan tandis que les autres avancent sur les leurs, avec des points de synchronisation courts en fin de demi-journée. Le REX d'équipe se joue en revanche **ensemble**, en réunion dédiée, parce qu'il fait émerger un regard collectif sur le parcours.

#### Conduire les trois bilans en parallèle

**Bilan technique** : reprendre le tableau de qualification de l'étape 3 et l'analyser — pour chaque écart constaté, formuler une **hypothèse de cause** (chiffrée si possible) et une **piste d'amélioration documentée** (sans avoir à la valider, on est en clôture). Ce que le système fait bien doit également apparaître — l'analyse ne se réduit pas aux écarts. **Bilan projet** ([[gestion-de-projet|gestion de projet]]) : planning effectif vs planning prévisionnel issu du [[retroplanning|rétroplanning]] de phase 1, budget consommé vs budget prévu, risques de la [[matrice-de-risques|matrice de risques]] qui se sont réalisés (ou pas, ou autrement). **Bilan écoconception** ([[ecoconception|écoconception]]) : [[acv-simplifiee|ACV]] **réelle** sur prototype effectif (avec articulations alu, segments PLA, [[pcb|PCB]] gravé) confrontée à l'ACV estimée du [[dossier-technique|dossier technique]] (sur BOM théorique). Identifier les écarts d'empreinte, en tirer une leçon transférable au projet suivant.

#### Capitaliser via le REX d'équipe

Le REX d'équipe est un **retour d'expérience réflexif** — ce que l'équipe referait différemment, ce qu'elle a appris collectivement sur la conduite d'un projet mécatronique. Ce n'est pas un quatrième bilan, c'est un **regard décentré** sur les bilans précédents. Trois questions canoniques guident la réunion : 1/ qu'est-ce qui a coûté le plus en temps qu'on n'avait pas anticipé ? 2/ quelle décision aurait gagné à être prise plus tôt, ou plus tard ? 3/ quelle pratique équipe (synchronisation, traçabilité, anticipation) gagnera à être conservée dans un projet futur ? Le REX se documente sous une forme courte (une page ou deux) — sa valeur tient à sa lucidité, pas à sa longueur. C'est une compétence MEO en propre, évaluée au même titre que les autres bilans.

> [!tip] Astuce
> **Le REX se prépare en revue à blanc, pas à l'oral à froid.** Une heure de préparation collective, où chacun écrit pour soi avant que l'équipe ne mette en commun, produit un REX nettement plus utile qu'une discussion improvisée la veille de la remise.

> [!warning] Attention
> **Le bilan technique ne se résume pas à la liste des écarts.** L'écueil classique : énumérer ce qui n'a pas marché sans rien dire de ce qui a fonctionné, ni du raisonnement de bonne qualité qui a porté le projet. L'évaluation porte aussi sur la **capacité à analyser positivement** ce qui a été produit, pas seulement sur la lucidité des manques.

> [!example] Exemple : projet bras 3 axes
> Bilans conduits en **semaine n°15** par les trois membres de l'équipe en parallèle, REX d'équipe en réunion dédiée en fin de **semaine n°15**.
>
> **Bilan technique** : précision en bout 8 mm vs cible 5 mm, jeu articulaire identifié comme cause principale (pistes d'amélioration : articulations à roulements, ou réduction du nombre de segments). Charge utile et vitesse hors écart majeur. Le système répond globalement à l'usage visé.
>
> **Bilan projet** : retard de 4 jours absorbé sur la marge initiale, budget BOM tenu à 215 € HT (vs enveloppe 250 €), risque « lead time articulations alu » de la [[matrice-de-risques|matrice de risques]] s'est confirmé (3 semaines effectives) sans bloquer le projet grâce à l'anticipation des commandes en sortie de dossier technique.
>
> **Bilan écoconception** : [[acv-simplifiee|ACV]] réelle confirme la prédominance des steppers (acier + cuivre + électronique) sur l'empreinte totale (~50 %). L'alu usiné représente ~30 %, aligné sur l'estimation du dossier technique. Pas d'écart significatif par rapport à l'ACV estimée.
>
> **REX** : « la bascule PLA → alu en sortie de PoC a été coûteuse en temps mais salvatrice pour le respect du CdCF ; une caractérisation plus précoce du jeu articulaire dès la phase concept aurait permis d'arbitrer plus tôt. Pratique à conserver : la transmission STL au responsable fablab dès la clôture du dossier technique, qui nous a fait gagner deux semaines. »

> [!livrable] Livrables 4/5 — Intégration et tests
> - 3 bilans (technique, projet, écoconception)
> - REX d'équipe documenté

### 5. Livrer le projet

La phase d'intégration et tests se ferme par les **livrables documentaires et oraux** qui agrègent l'ensemble du parcours projet. Deux livrables évalués s'ajoutent ici au prototype qualifié de l'étape 3 : le **rapport final**, qui synthétise tout, et la **soutenance**, qui démontre la lucidité d'analyse de l'équipe devant le jury. Cette étape ne produit pas de nouvelle matière — elle assemble et présente ce qui a été établi en étapes 1 à 4.

L'enjeu est de respecter le calendrier de fin de semestre tout en livrant des supports propres. La règle pratique : **rédiger d'abord, démontrer ensuite**. Le rapport sert de matrice à la soutenance, pas l'inverse — préparer la soutenance avant le rapport mène quasi systématiquement à un rapport bâclé et à une soutenance qui ne s'appuie sur rien d'écrit.

#### Rédiger le rapport final

Le rapport final agrège les bilans (étape 4) + le REX + le tableau de qualification (étape 3) + une analyse synthétique des écarts. Sa structure type reprend les phases du cycle en V dans l'ordre : rappel du [[cahier-des-charges-fonctionnel|CdCF]] et de la [[specification-technique|spécification technique]], synthèse du [[concept|concept]] et de la [[preuve-de-concept|preuve de concept]], synthèse du [[dossier-technique|dossier technique]] et des choix d'industrialisation, tests et qualification, bilans et REX. La place dévolue à chaque section reflète son rôle dans l'évaluation finale — la qualification (étape 3) et l'analyse des écarts (étape 4) sont en général les sections les plus lues par le jury. Une revue encadrant est conduite avant remise pour valider la cohérence d'ensemble et signaler les manques.

#### Préparer et passer la soutenance

La soutenance est un **exercice de démonstration courte et structurée**, pas une relecture orale du rapport. Trois moments la structurent typiquement : 1/ une **démonstration en direct** du prototype dans son scénario nominal, qui ancre l'évaluation dans le réel ; 2/ une **mise en évidence honnête des écarts** observés et de leur origine, sans chercher à les masquer ni à les dramatiser ; 3/ un **regard de l'équipe sur son propre parcours**, qui démontre la lucidité d'analyse acquise. Le jury évaluera autant la démo que la capacité de l'équipe à expliquer **pourquoi ce qui ne marche pas ne marche pas**. La répartition de la parole entre les trois membres se prépare à l'avance, ainsi que les questions probables du jury.

> [!tip] Astuce
> **Rédiger le rapport en commençant par les bilans, pas par l'introduction.** Les bilans condensent l'essentiel du projet — une fois rédigés, le reste se construit comme rappel et contexte. Commencer par l'introduction conduit à des introductions interminables et des conclusions bâclées par manque de temps.

> [!warning] Attention
> **Préparer la soutenance avant le rapport est presque toujours une mauvaise idée.** Le rapport est le support stable qui sert de référence à la soutenance ; l'inverse conduit à une soutenance brillante qui s'effondre quand le jury demande à se reporter au rapport pour creuser un point.

> [!example] Exemple : projet bras 3 axes
> Rapport final remis le dernier jour de la **semaine n°15**, soutenance le lendemain en jury.
>
> **Rapport** : structure par phases du V (CdCF → spec-tech → concept → PoC → dossier technique → intégration et tests → bilans et REX). Sections les plus développées : qualification CdCF (5 pages avec tableau) et analyse des écarts (3 pages). Revue encadrant deux jours avant remise — quelques ajustements sur la section écoconception (mieux relier ACV réelle vs estimée).
>
> **Soutenance** : démo en direct du bras parcourant une trajectoire prédéfinie 3 points, mise en évidence du jeu articulaire en bout de course avec capture vidéo ralentie, explication du choix alu 6061 en sortie de PoC et de son intégration en dossier technique, REX d'équipe sur la transmission STL anticipée comme bonne pratique à conserver. Répartition de la parole : un membre par grand bloc (technique / projet / éco-REX). Trois questions du jury anticipées et préparées.
>
> Issue de la phase : prototype qualifié avec écarts documentés, rapport et soutenance livrés dans les délais — le projet est officiellement clos.

> [!livrable] Livrables 5/5 — Intégration et tests
> - Rapport final (livrable documentaire évalué)
> - Soutenance finale (livrable transversal évalué)

## Conclusion

Le projet est livré. Le prototype est qualifié (au sens fort ou avec écarts documentés), le rapport final synthétise les bilans et le REX, la soutenance démontre la lucidité d'analyse acquise au fil du parcours. Le cycle en V est refermé : ce qui avait été promis en [[specification-technique|spécification technique]] a été confronté à la réalité. Pour explorer d'autres parcours ou notions, retour au [[index|hub du tutoriel]].

---

## Pièges fréquents

- **Sauter le niveau 0 de validation pièces.** Une non-conformité non détectée à l'unité se manifeste plus tard en test fonctionnel sous une forme méconnaissable, et le diagnostic prend dix fois plus de temps que la validation initiale aurait pris.
- **Confondre validation disciplinaire (étape 2) et tests fonctionnels (étape 3).** Le niveau 0 est intrinsèquement disciplinaire (on inspecte un objet élec, méca ou info isolé). Les niveaux 1 à 4 sont intrinsèquement multi-disciplines, parce qu'une fonction mécatronique mobilise déjà plusieurs disciplines.
- **Découper les tests fonctionnels par discipline.** « On teste l'élec puis la méca puis l'info » est incohérent avec la nature mécatronique du système. À partir du niveau 1, le découpage est par **fonction**, jamais par discipline.
- **Diagnostiquer un test KO comme défaillance pièce alors que c'est le banc de test.** L'inverse arrive aussi. La discipline minimale du diagnostic : isoler le banc d'un côté, la pièce de l'autre, et conclure seulement quand l'un des deux est écarté.
- **Préparer la fiche de qualification niveau 4 en dernier.** « On verra à la fin » conduit régulièrement à des oublis de critères au moment de qualifier. La fiche se prépare dès le début de l'étape 3, en parallèle des niveaux 1 à 3.
- **Refaire la cinématique en urgence quand la précision dépasse.** Au niveau 4, l'écart se documente, il ne se rattrape pas. Le calendrier impose la livraison ; l'évaluation porte autant sur la lucidité d'analyse que sur les chiffres bruts.
- **Chercher à boucher tous les écarts au lieu de les documenter.** Un prototype « qualifié avec écarts documentés » vaut largement mieux qu'un prototype qu'on n'a pas eu le temps de livrer parce qu'on cherchait à corriger un dernier critère.
- **Conduire les trois bilans en série au lieu de les paralléliser.** Le calendrier de fin de phase ne le permet pas. Chaque membre prend la main sur un bilan tandis que les autres avancent sur les leurs, avec des points de synchronisation courts.
- **Énumérer les écarts sans rien dire de ce qui a fonctionné.** L'évaluation porte aussi sur la capacité à analyser positivement ce qui a été produit, pas seulement sur la lucidité des manques.
- **Confondre REX d'équipe et bilan projet.** Le bilan projet est factuel (planning, budget, risques réalisés), compétence gestion de projet. Le REX est réflexif (ce qu'on referait différemment), compétence MEO en propre. Les deux sont évalués séparément.
- **Préparer la soutenance avant le rapport.** Le rapport est le support stable qui sert de référence à la soutenance ; l'inverse conduit à une soutenance brillante qui s'effondre quand le jury demande à se reporter au rapport pour creuser un point.

## Pendant cette phase, côté équipe

La phase d'intégration mobilise davantage les **interfaces avec les autres disciplines techniques** que les phases précédentes, parce qu'elle confronte le système assemblé aux conditions réelles d'usage. Côté mécanique, les tutoriels des collègues sur les procédés de fabrication ([[impression-3d|impression 3D]], [[usinage|usinage]], assemblage) servent de référence pendant la validation niveau 0 et l'intégration. Côté informatique, les bonnes pratiques de déploiement de [[firmware|firmware]] sur cible matérielle et d'instrumentation de mesure (acquisition, journalisation) accompagnent les niveaux 1 à 4 de la pyramide. Les fiches-tutos disciplinaires de l'électronique ([[pcb|PCB]], [[microcontroleur|microcontroleur]], [[niveau-logique|niveaux logiques]], [[cable-management|cable management]]) restent accessibles depuis cette fiche pour combler les besoins ponctuels d'approfondissement.

La **[[gestion-de-projet|gestion de projet]]** de cette phase est dense par contrainte calendaire — la marge initiale s'est érodée au fil des phases précédentes, et la phase d'intégration est celle où l'on ne peut plus se rattraper. Le suivi se resserre : points équipe quotidiens ou bi-quotidiens, [[matrice-de-risques|matrice de risques]] mise à jour en continu, jalons internes courts (un par étape de la pyramide). Le bilan projet de l'étape 4 ferme ce volet — confrontation du planning effectif au [[retroplanning|rétroplanning]] de phase 1, du budget consommé au budget prévu, des risques réalisés à la matrice initiale.

Côté **[[ecoconception|écoconception]]**, l'[[acv-simplifiee|ACV]] réelle sur prototype effectif vient ici clore l'arc démarré en phase 2 (premier filtre éco dans le concept) et poursuivi en phase 4 (BOM théorique et ACV estimée du dossier technique). La comparaison ACV réelle vs ACV estimée est le moment principal d'apprentissage — les écarts entre le théorique et le réel pointent les angles morts de l'estimation précoce, et alimentent une leçon transférable au projet suivant. Bilan éco documenté en propre à l'étape 4.

Côté **[[securite-et-qualite|sécurité et qualité]]**, la phase d'intégration introduit pour la première fois la **manipulation du système intégré sous tension et en mouvement** — les conditions de sécurité des tests se formalisent explicitement, particulièrement pour le niveau 3 (test système complet) et le niveau 4 (qualification CdCF), où le système est mis en marche dans son scénario nominal. Les protocoles de sécurité (mise sous tension contrôlée, accès à la zone de mouvement, arrêt d'urgence accessible) se documentent en amont du démarrage des tests, pas en cours d'exécution.

## Voir aussi

- [[index|Hub du parcours projet]]
- Étape précédente : [[dossier-technique|Dossier technique]]
- [[cahier-des-charges-fonctionnel|Cahier des charges fonctionnel]] *(à créer — référencé à la qualification niveau 4)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — à créer)*
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[securite-et-qualite|Sécurité et qualité]] *(fil transverse — à créer)*
