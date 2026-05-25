---
title: Dossier technique
type: trame
phase: 4
phases:
  - dossier-technique
tags:
  - proj
  - trame
  - phase-4
prerequis:
  - preuve-de-concept
aa: []
draft: false
---

Le **dossier technique** est la quatrième étape du projet [[mecatronique|mécatronique]] : on transforme l'architecture validée en [[concept|concept]] et confirmée par la [[preuve-de-concept|preuve de concept]] en **plans détaillés exécutables** — schémas électroniques finaux, routage PCB, plans mécaniques cotés, architecture logicielle détaillée, nomenclature complète. C'est aussi l'étape où l'on **engage le projet matériellement** : la BOM finale devient un ensemble de commandes émises. Après cette étape, l'argent est dépensé, les pièces arrivent.

## Posture attendue

La tentation, à ce stade, est de croire que le travail est fait ("on a validé l'architecture en concept, on copie-colle"). Résistez. Le dossier technique exige un **niveau de précision que le concept n'avait pas** : un schéma bloc devient un schéma électrique câblé, un pré-dimensionnement devient une cote, une intention logicielle devient une spécification d'interface. C'est aussi l'étape de la **multi-validation** : trois interlocuteurs distincts valident chacun leur périmètre. C'est dans cette logique de pluralité que se joue l'apprentissage du travail en équipe d'ingénieurs.

## Objectif de la phase

Produire un **dossier technique agrégé** qui :

- traduit l'architecture validée en plans **exécutables** par discipline (élec, méca, info)
- consolide la **BOM finale** (composants, matières, sous-traitance) chiffrée au centime près
- documente une **évaluation environnementale quantifiée** ([[ecoconception|écoconception]] : ACV simplifiée sur BOM réelle vs estimations du [[concept|concept]])
- met à jour le **planning d'approvisionnement et de fabrication** et le budget consolidé ([[gestion-de-projet|gestion de projet]])
- est validé par les **trois interlocuteurs disciplinaires** (prof élec qui porte élec + info, prof méca qui porte méca + fabrication, responsable projet qui porte achats + budget)

Et concrétise l'engagement matériel du projet : **commandes émises**.

## Démarche

### 1. Intégrer les retours de la preuve de concept

Le dossier technique commence là où la [[preuve-de-concept|preuve de concept]] s'arrête. La fiche `preuve-de-concept` s'est conclue par une revue qui statue : *validée sans réserve* (rare), *validée sous conditions* (le plus fréquent — reprises locales à intégrer) ou *retour amont structurant* (une preuve a renvoyé l'équipe en [[concept|concept]] pour reprendre une décision d'architecture, qui revient maintenant remaniée dans le dossier technique). Dans les trois cas, le dossier technique **récupère un matériau qui n'est plus exactement celui du concept**.

L'erreur la plus fréquente à ce stade est de rouvrir directement les outils de plans (CAO, schéma élec, IDE) et de **partir du concept tel qu'il était sorti à la fin de la phase 2**, comme si la preuve de concept n'avait pas eu lieu. Cette étape sert précisément à fermer cette porte : on prend trente minutes en équipe pour faire le tri entre *ce que la preuve a confirmé*, *ce qu'elle a fait basculer* et *ce qu'elle a fait rétroagir vers le concept*. Sans ce tri explicite, les enseignements de la phase 3 s'évaporent.

#### Du compte rendu PoC aux ajustements à intégrer

Reprenez le rapport de preuve de concept et listez, point par point, ce qui change pour le dossier technique. Trois familles d'ajustements à distinguer :

1. **Composants confirmés** — les choix de l'étape 2 du [[concept|concept]] (matrices de décision) passés sans réserve. Référence, fournisseur, ordre de grandeur de coût validés. Ils filent directement dans la BOM finale (étape 3) sans relecture.
2. **Composants ou solutions recalés** — issus d'un *ajustement local* ou d'un *retour amont structurant* en sortie de PoC. Il faut tracer la décision : quelle preuve a échoué, quelle alternative a été retenue, sur quelles bases. Cette traçabilité sera redemandée par les validateurs disciplinaires (étape 4).
3. **Contraintes nouvelles** — valeurs mesurées qui s'imposent désormais (couples maximum constatés, courants de pointe, temps de cycle observés), ou contraintes émergées du protocole d'essai (alignement de fabrication, sensibilité au montage, etc.). À reporter dans les exigences chiffrées propagées aux disciplines.

> [!tip] Astuce
> **Une page de synthèse, pas une réunion orale.** Posez un tableau écrit *avant* / *après* PoC, daté et nominatif. Sans trace écrite, les trois disciplines reconstruisent trois versions différentes du compte rendu et arbitrent chacune dans son coin.

#### Propager les ajustements aux trois disciplines

Chaque ajustement de la sous-section précédente a presque toujours un effet sur **plus d'une discipline**. Un composant recalé en méca change la masse en bout, donc le couple à fournir par l'élec, donc la commande à programmer par l'info. Un protocole de mesure qui a révélé une dérive thermique impose une consigne logicielle de compensation et un dimensionnement électrique avec marge supplémentaire. La discipline qui propage les ajustements n'est pas forcément celle qui les a découverts en PoC.

Pratiquement : pour chaque ajustement, identifiez en équipe les disciplines impactées et notez l'effet attendu — *masse +30 %, couple à recalculer*, *lead time fournisseur +2 semaines, planning à recaler*, *bilan [[ecoconception|écoconception]] à reprendre sur nouvelle référence matière*. C'est ce travail de propagation qui ouvre proprement les étapes 2 (plans par discipline) et 3 (BOM + ACV + planning).

> [!warning] Attention
> **Repartir des plans du concept revient à effacer la PoC.** Avant d'ouvrir un seul outil de production (CAO, schéma élec, IDE), figez en équipe la liste des ajustements à propager. Cinq lignes écrites évitent dix heures de retours arrière.

> [!example] Exemple : projet bras 3 axes
> La preuve de concept sur les articulations imprimées en PLA 60 % a montré que les marges en cisaillement n'étaient pas tenues malgré 1000 cycles à 0,5° de précision — l'équipe a tranché en *retour amont structurant* (basculer vers articulations usinées en aluminium 6061) et le concept a été repris avec compromis offset court côté méca + lookup table côté info. Trois familles d'ajustements à propager au dossier technique en sortie :
>
> - **Composants confirmés** : steppers + drivers + [[microcontroleur|microcontrôleur]] + alim 12 V (matrice élec de l'étape 2 concept inchangée).
> - **Composants recalés** : articulations imprimées [[pla|PLA]] → articulations [[usinage|usinées]] alu 6061. À tracer dans la BOM (ligne *filament PLA* supprimée, ligne *barre alu Ø20 mm + usinage sous-traité* ajoutée) et dans l'ACV (acier/cuivre des steppers déjà identifiés comme empreinte dominante en concept ; à confirmer ou réviser avec la nouvelle ligne alu).
> - **Contraintes nouvelles** : masse articulation usinée +35 % vs PLA → couple en bout d'axe à recalculer avant de figer les références steppers ; lead time usinage sous-traité ≈ 3 semaines → [[retroplanning|rétroplanning]] d'appro à recaler.
>
> Synthèse posée en page 1 du dossier technique, datée et signée des trois étudiants. Ouverture de l'étape 2 sur cette base.

> [!livrable] Livrable 1/5 — Dossier technique
> - Synthèse écrite des ajustements à intégrer (composants confirmés, composants recalés, contraintes nouvelles), datée et nominative, avec propagation aux disciplines impactées identifiée

### 2. Détailler les plans par discipline

À l'entrée de cette étape, la synthèse des ajustements est figée et propagée aux trois disciplines. Le travail bascule alors **en parallèle** : chaque membre de l'équipe revient sur sa branche pour transformer le pré-dimensionnement du [[concept|concept]] (calculs d'ordre de grandeur, blocs et schémas de principe) en **plans exécutables** — schémas câblés, plans cotés, architecture logicielle détaillée. Le niveau de précision attendu est qualitativement différent de l'étape 2 du concept : ce qui s'écrivait alors en notations qualitatives (« stepper + driver », « articulation usinée », « commande synchrone ») doit ici se chiffrer, se coter, se spécifier au niveau du composant et de l'interface.

Le retour à la **grille disciplinaire** marque la différence avec la [[preuve-de-concept|preuve de concept]] (organisée *par incertitude*) : ici, on est sur du travail de fond par discipline. Pour autant, la fin de l'étape n'est pas la somme de trois dossiers indépendants : avant d'aller chercher les validateurs externes (étape 4), l'équipe procède à une **revue interne de cohérence inter-disciplines** qui peut révéler des conflits que les pré-dim du concept n'avaient pas vus.

#### Travailler en parallèle par discipline

Les trois branches travaillent en parallèle sur leur livrable disciplinaire, avec un niveau de précision systématiquement supérieur à celui du concept :

- **Électronique** — schémas câblés (composants finaux référencés, valeurs des passifs, connectique précisée), routage [[pcb|PCB]] si carte sur mesure (production interne possible sur machine de gravure à l'anglaise pour monoface ; sinon plaque à essais documentée), nomenclature électronique chiffrée avec références fournisseurs. Outils typiques : KiCAD, EasyEDA, ou équivalent.
- **Mécanique** — plans cotés avec tolérances ISO, choix matériaux argumenté (au-delà de la décision concept), procédé de fabrication spécifié ([[impression-3d|impression 3D]], [[usinage|usinage]], assemblage), fichiers exportables (STL, DXF, STEP) selon le procédé. Outils typiques : Fusion 360, FreeCAD, SolidWorks.
- **Informatique** — architecture logicielle détaillée (modules, dépendances, flux de données), spécifications d'interfaces (protocoles série, format des trames, API internes), structures de données partagées. Diagrammes UML ou équivalent pour la vue d'ensemble.

L'arbitrage *qui fait quoi* a été pris en début de phase 2 (concept) et tient en général sur la totalité du projet. Si une discipline déborde sur l'autre (par exemple : un composant élec impose un assemblage méca particulier), c'est négocié à la revue de cohérence ci-dessous, pas en bilatéral.

> [!tip] Astuce
> **Reprenez le [[schema-bloc-fonctionnel|schéma bloc fonctionnel]] du concept comme carte d'interfaces.** Ce schéma a perdu sa vocation décisionnelle (les solutions sont arbitrées) mais retrouve une utilité opératoire : il identifie tous les points de contact entre disciplines, donc tous les points de spécification d'interface à figer pendant cette étape.

#### Vérifier la cohérence inter-disciplines avant les validateurs externes

Une fois les trois sorties disciplinaires posées, l'équipe se retrouve pour une **revue interne**, *avant* d'aller voir les validateurs externes (étape 4). L'objectif : vérifier que les trois plans s'articulent proprement sur trois familles d'interfaces.

1. **Interfaces physiques** — fixation des composants élec sur les pièces méca (boulonnerie, perçages, accessibilité), passage des câblages, contraintes d'encombrement, chaleur dissipée près des matériaux sensibles.
2. **Interfaces électriques** — tensions et courants compatibles entre alim, drivers, [[microcontroleur|microcontrôleur]], capteurs ; connectique (calibre, type, polarité) ; protection contre courants de retour ou pics de commutation.
3. **Interfaces logicielles** — timings respectés (échantillonnage capteurs, fréquence commande moteurs), protocoles de communication entre composants (série, I²C, SPI), format des données et unités cohérentes (degré vs radian, ms vs µs).

Si la revue révèle un conflit qu'aucune renégociation locale ne résout (ex. : tension d'alim incompatible avec une exigence du [[cahier-des-charges-fonctionnel|CdCF]]), l'équipe rétrograde vers le [[concept|concept]] pour reprendre une [[matrice-de-decision|matrice de décision]]. Ce cas reste rare à ce stade, mais il existe — d'où la valeur de cette revue interne avant la multi-validation.

> [!warning] Attention
> **Une spécification d'interface n'est pas une spécification interne.** Les interfaces sont les seules choses qu'on doit pouvoir lire à plusieurs : tensions, signaux, perçages, protocoles, formats. La spécification interne de chaque discipline reste son affaire — c'est l'interface qui se documente pour les autres.

> [!example] Exemple : projet bras 3 axes
> Élec : schéma de câblage finalisé (3 drivers + [[microcontroleur|microcontrôleur]] + alim 12 V régulée), nomenclature avec références ; [[pcb|PCB]] routé pour le module de commande (carte 5×7 cm, monoface, gravée en interne école sur machine de gravure à l'anglaise). Méca : plans cotés des 3 segments + des 3 articulations [[usinage|usinées]] alu 6061 (tolérances ISO 2768 m, finitions usinage spécifiées), nomenclature visserie M3 et M5. Info : architecture logicielle en 4 modules (cinématique inverse / commande synchrone des 3 axes / lookup table compensation offset / IHM série), spécification du protocole série PC↔microcontrôleur (format de trame, fréquence, gestion d'erreurs).
>
> Revue interne de cohérence inter-disciplines tenue en équipe avant rendez-vous validateurs : 2 conflits remontés et arbitrés sans rétroaction concept — (1) hauteur PCB sous le 2ᵉ segment méca incompatible avec connecteur droit, résolu par bascule sur connecteur coudé ; (2) protocole série à 9600 bauds initialement, jugé insuffisant pour la fréquence d'asservissement, porté à 115 200 bauds après vérification compatibilité microcontrôleur.
>
> Revue tracée dans une page dédiée du dossier (date, participants, conflits identifiés, arbitrages). Cette page sera redemandée par les validateurs externes en étape 4.

> [!livrable] Livrable 2/5 — Dossier technique
> - Plans détaillés par discipline (schémas câblés + routage [[pcb|PCB]] + plans cotés + architecture logicielle + spécifications d'interfaces) avec niveau de précision exécutable
> - Page de revue interne de cohérence inter-disciplines (date, participants, conflits, arbitrages)

### 3. Consolider la BOM et chiffrer l'environnement

Les plans disciplinaires posés en étape 2 deviennent ici **un seul matériau agrégé** : la BOM finale chiffrée. C'est aussi le moment où l'[[ecoconception|écoconception]] passe d'estimations qualitatives en concept à un **bilan quantifié** sur des références réelles, et où le planning d'approvisionnement se cale sur les lead times des composants effectivement retenus. Trois livrables denses, à produire dans un ordre précis : la BOM nourrit l'ACV, et la BOM + les lead times nourrissent le planning.

Spécificité du projet école : la **BOM se construit sur un catalogue de fournisseurs partenaires** négocié par l'établissement (partenaire électronique pour composants actifs et passifs, partenaire matière pour métaux et plastiques, partenaire fablab pour la sous-traitance d'[[usinage|usinage]] et d'[[impression-3d|impression 3D]] si l'équipement interne ne suffit pas). Cette contrainte est **structurante** : elle limite les références accessibles, fixe des conditions tarifaires connues et des lead times documentés. Si un composant retenu en étape 2 n'a pas d'équivalent au catalogue, soit l'équipe arbitre en interne (substitution simple), soit elle fait remonter au responsable projet (achat hors catalogue, processus alourdi).

#### Consolider la BOM finale chiffrée

Agréger les trois nomenclatures disciplinaires (élec, méca, info — bien que l'info ne consomme généralement pas de matériel propre au-delà du PC de développement) en une seule [[bom|BOM]], ligne par ligne : *désignation, référence catalogue partenaire, quantité, prix unitaire HT, prix total HT, lead time annoncé*. Le chiffrage est attendu **au centime près** : c'est ce niveau de précision qui rend le total opposable à l'enveloppe budget en H4-3. Toute ligne hors catalogue est marquée explicitement (drapeau *hors catalogue, achat à négocier*) avec son surcoût estimé.

> [!tip] Astuce
> **Démarrez la BOM par les composants confirmés en étape 1.** Ces lignes sont stables et chiffrent vite. Gardez les composants recalés pour la fin : ils peuvent demander un aller-retour avec le partenaire (disponibilité, lead time) ou impliquer une sous-traitance à chiffrer séparément.

#### Quantifier l'écoconception sur la BOM réelle

L'étape 3 est le **premier moment où l'[[ecoconception|écoconception]] devient quantitative**. En concept, les choix se sont faits sur des estimations qualitatives (« les composants élec dominent l'empreinte » plutôt que « 73 % de l'empreinte vient des steppers »). Avec la BOM réelle, on peut produire une [[acv-simplifiee|ACV simplifiée]] : empreinte par poste (élec / méca / fabrication / consommables), identification du ou des contributeurs dominants, comparaison à l'estimation qualitative du concept.

L'ACV de cette étape n'a pas vocation à être normée (pas d'ISO 14040) — elle reste *simplifiée*, basée sur des facteurs d'émission documentés (bases de données type Base IMPACTS®, GHG Protocol, ou estimations encadrées). Sa valeur opératoire : objectiver les décisions d'écoconception et alimenter la conclusion qui sera lue par les validateurs en étape 4.

#### Consolider le planning d'approvisionnement et le budget

Sur la base des lead times annoncés dans la BOM, construire le **rétroplanning d'approvisionnement** : date d'émission de commande la plus tardive compatible avec l'arrivée des pièces avant le début de l'[[integration-et-tests|intégration et tests]]. La ligne directrice : la pièce la plus longue à arriver fixe la date butoir d'émission. Toute marge est consommée par les aléas (rupture stock partenaire, transport, valeurs annoncées non tenues).

En parallèle, le **budget consolidé** est comparé à l'enveloppe initiale du projet (fixée par l'établissement ou négociée en début de projet). Trois sorties possibles :

1. **Budget dans l'enveloppe** — passage à l'étape 4 sans alerte.
2. **Dépassement marginal** — arbitrage interne (compromis sur composant non critique, ou demande de rallonge motivée au responsable projet).
3. **Dépassement structurel** — rétroaction vers le [[concept|concept]] : la [[matrice-de-decision|matrice de décision]] a retenu une solution hors budget cible. Reprise de l'étape 2 du concept sur l'axe coût.

> [!warning] Attention
> **Un budget hors enveloppe ne se règle pas en commandant moins.** L'équipe est parfois tentée de réduire les quantités ou de sauter des sécurités pour rentrer dans l'enveloppe. C'est une porte ouverte vers une intégration ratée ou une non-conformité [[securite-et-qualite|sécurité-qualité]]. Si l'enveloppe est dépassée structurellement, c'est le concept qu'il faut reprendre, pas la BOM qu'il faut amputer.

> [!example] Exemple : projet bras 3 axes
> BOM finale chiffrée à partir du catalogue partenaires école :
>
> | Désignation | Réf. catalogue | Qté | PU HT | Total HT | Lead time |
> | --- | --- | --- | --- | --- | --- |
> | Stepper NEMA 17 1,8°/pas | ELEC-MOT-N17 | 3 | 14,80 € | 44,40 € | 5 j |
> | Driver A4988 | ELEC-DRV-A49 | 3 | 4,20 € | 12,60 € | 5 j |
> | [[microcontroleur\|MCU]] Arduino-compatible | ELEC-MCU-ARD | 1 | 22,00 € | 22,00 € | 5 j |
> | Alim 12 V / 5 A régulée | ELEC-ALI-125 | 1 | 18,50 € | 18,50 € | 5 j |
> | Barre alu 6061 Ø20 mm × 1 m | MAT-ALU-6061-20 | 1 | 12,30 € | 12,30 € | 7 j |
> | Usinage 3 articulations (sous-traité fablab) | SST-USI-3PCS | 1 | 95,00 € | 95,00 € | 15 j |
> | Visserie M3 + M5 (lot) | MAT-VIS-LOT | 1 | 8,40 € | 8,40 € | 5 j |
> | **Total HT** |   |   |   | **213,20 €** | **15 j (max)** |
>
> ACV simplifiée : la nouvelle ligne *barre alu + usinage sous-traité* contribue à hauteur de ~28 % de l'empreinte totale (vs ~3 % pour l'ancienne ligne PLA imprimée), portée par l'aluminium primaire et l'énergie d'[[usinage|usinage]]. Les steppers restent toutefois le contributeur dominant (~52 %, acier + cuivre + électronique). Constat à reporter dans la conclusion d'écoconception : le retour amont structurant *[[pla|PLA]] → alu usiné* a un coût environnemental réel, partiellement compensable si l'alu est issu de recyclé (à creuser au partenaire matière).
>
> Rétroplanning d'appro : usinage sous-traité = 15 j de lead time → date butoir d'émission de commande fixée 3 semaines avant le début de l'[[integration-et-tests|intégration et tests]]. Budget consolidé 213,20 € HT, sous l'enveloppe initiale de 250 € — passage en étape 4 sans alerte.
>
> Synthèse posée en pages 2-4 du dossier technique (BOM + ACV + planning), prête pour la multi-validation de l'étape 4.

> [!livrable] Livrables 3/5 — Dossier technique
> - BOM finale chiffrée au centime près, références catalogue partenaires explicites, lignes hors catalogue signalées
> - Évaluation environnementale quantifiée ([[acv-simplifiee|ACV simplifiée]] sur BOM réelle, contributeurs dominants identifiés)
> - Rétroplanning d'approvisionnement et budget consolidé, comparé à l'enveloppe initiale

### 4. Rédiger et faire valider le dossier agrégé

Avec la BOM chiffrée, l'ACV quantifiée et le planning consolidé, les trois livrables structurants sont posés. Reste à les **assembler en un dossier unique cohérent** et à le faire valider — étape pivot de la phase, car c'est elle qui autorise les commandes (étape 5). La validation n'est pas unique : trois interlocuteurs distincts valident chacun leur périmètre, puis l'encadrant valide l'ensemble en revue globale.

Cette **multi-validation à 3 + 1** est l'enseignement central de la phase. Elle reproduit en miniature le fonctionnement d'un projet industriel : un chef de projet ne valide pas seul un dossier qui engage l'élec, la méca, les achats et le planning — il s'appuie sur des validateurs disciplinaires distincts dont la responsabilité technique est segmentée. À l'école, cette segmentation est portée par trois figures : le prof élec (qui porte aussi l'info), le prof méca (qui porte aussi la fabrication) et le responsable projet (qui porte aussi le budget). Apprendre à coordonner cette pluralité est en soi un objectif pédagogique de la phase.

#### Préparer la multi-validation

Avant chacun des trois rendez-vous, l'équipe **prépare un sous-dossier ciblé** sur le périmètre du validateur. Le dossier intégral existe, mais l'envoyer brut à chaque validateur dilue le travail de relecture (chacun cherche son périmètre dans le tout). Cibler améliore le taux de retour utile et raccourcit le rendez-vous.

Trois choses à figer avant la prise de rendez-vous :

- **Le périmètre exact validé par chaque interlocuteur** — pas d'ambiguïté sur « qui valide quoi ». Un point validé deux fois est inutile ; un point non validé bloque le projet.
- **La liste des questions ouvertes** que l'équipe veut soulever à ce validateur (hypothèses de pré-dim non encore vérifiées, choix matériau à débattre, écart à l'estimation concept à expliquer).
- **Le format du retour attendu** — validation directe, validation sous conditions (liste d'ajustements à intégrer), ou refus (avec motif et chemin de reprise).

#### Mener les trois validations disciplinaires

Les trois rendez-vous se tiennent **séparément**, sur 1-2 semaines selon les disponibilités. Ordre logique : commencer par le validateur dont les retours peuvent **rétroagir sur les autres dossiers** (typiquement le prof élec quand l'élec est structurante, ou le prof méca quand le procédé impacte les délais), garder le responsable projet en dernier (il consolide budget + planning, qui dépendent des ajustements précédents).

Pendant chaque rendez-vous, l'équipe **prend des notes structurées** : qu'est-ce qui est validé d'emblée, qu'est-ce qui nécessite un ajustement, qu'est-ce qui n'est pas validé. À la sortie, soit le sous-dossier est validé, soit la liste d'ajustements est intégrée et le sous-dossier représenté en un second rendez-vous court. Le cas « refus avec retour amont » est rare à ce stade (une PoC bien menée et une revue interne consciencieuse l'évitent), mais existe — il s'agit alors de remonter en étape 3 (ajustement BOM/planning) voire en [[concept|concept]] (matrice à revoir).

#### Faire valider l'ensemble en revue globale

Une fois les trois validations disciplinaires obtenues, l'équipe organise une **revue globale avec l'encadrant**. Cette revue ne refait pas les validations techniques — elles sont actées. Elle vérifie trois choses : (1) la **cohérence inter-parties** du dossier agrégé (les retours des trois validateurs ne se contredisent pas ; les ajustements intégrés à l'un n'ont pas cassé un autre), (2) la **qualité d'argumentation** (un dossier technique ne se contente pas de poser des plans, il les motive — choix matériau, choix protocole, hiérarchie ACV), (3) la **lisibilité par un tiers** (un ingénieur extérieur au projet pourrait-il reprendre le dossier ?).

C'est cette revue globale qui produit le **feu vert pour l'étape 5** : autorisation d'émettre les commandes. Sans elle, le dossier reste validé en parties mais non engageant matériellement.

> [!warning] Attention
> **Trois interlocuteurs distincts ne se synchronisent pas en une réunion.** Il faut **organiser trois rendez-vous séparés** avec trois interlocuteurs aux agendas indépendants. Anticipez d'au moins deux semaines, sinon vous serez bloqués au moment d'émettre les commandes et tout le planning aval glissera.

> [!tip] Astuce
> **Ouvrez chaque rendez-vous par les livrables-clés du périmètre.** Le validateur a peu de temps : commencer par les livrables ciblés (et non par l'historique de la phase) maximise le retour utile. L'historique se déroule en cas de question, pas par défaut.

> [!example] Exemple : projet bras 3 axes
> Découpage de la multi-validation :
>
> | Validateur | Périmètre validé | Livrables présentés | Questions ouvertes | Sortie obtenue |
> | --- | --- | --- | --- | --- |
> | Prof élec | élec + info | Schémas câblés, [[pcb\|PCB]] routé, architecture logicielle, spécif. protocole | Choix régulation alim 12 V → 5 V suffisant ? | Validé sous conditions (ajouter découplage 100 nF sur chaque driver) |
> | Prof méca | méca + fabrication | Plans cotés, choix alu 6061, sous-traitance [[usinage\|usinage]] | Tolérance ISO 2768 m suffisante sur articulations ? | Validé sous conditions (préciser état de surface Ra ≤ 1,6 sur portées de roulement) |
> | Responsable projet | achats + budget | BOM finale 213,20 € HT, rétroplanning d'appro, [[acv-simplifiee\|ACV simplifiée]] | Ajout d'un connecteur coudé hors catalogue partenaire ? | Validé (substitution acceptée, +1,80 € HT non bloquant) |
>
> Ajustements intégrés en équipe (3 j de retravail), puis revue globale avec l'encadrant : cohérence inter-parties OK, argumentation du retour amont [[pla|PLA]] → alu jugée solide, conclusion d'[[ecoconception|écoconception]] lisible. **Validation d'ensemble obtenue, étape 5 ouverte**.

> [!livrable] Livrable 4/5 — Dossier technique
> - Dossier technique agrégé, validé en parties (par les 3 interlocuteurs disciplinaires) et en ensemble (par l'encadrant en revue globale)
> - Trace écrite des ajustements demandés par chaque validateur et de leur intégration

### 5. Émettre les commandes

La validation d'ensemble obtenue, l'étape 5 s'ouvre. C'est l'étape **la plus courte** de la phase en temps actif, mais la **plus engageante** : à partir d'ici, l'argent est dépensé, les pièces arrivent, le projet bascule du papier vers le matériel. Toute reprise ultérieure (en cas de non-conformité découverte en intégration) se fera dans un cadre dégradé : recommander, payer une deuxième fois, perdre des semaines.

Le rôle de l'équipe à cette étape n'est plus de décider — les choix sont actés — mais de **préparer les bons de commande avec le niveau de précision attendu par les fournisseurs partenaires**, et de **tracer** ce qui sort. L'émission matérielle elle-même est généralement portée par le responsable projet à l'école (signature, validation interne école, transmission au fournisseur), mais l'équipe a la responsabilité de la cohérence ligne à ligne entre BOM validée et bon de commande émis.

#### Préparer les bons de commande

Un bon de commande par fournisseur partenaire (et non un bon agrégé pour toutes les lignes BOM) : c'est le format attendu par les processus d'achat école et le format émis par les partenaires. Trois fournisseurs partenaires → trois bons de commande à préparer en parallèle.

Contenu attendu de chaque bon de commande :

- **Lignes du périmètre fournisseur** — copie ligne à ligne de la section BOM correspondante (désignation, référence catalogue, quantité, prix unitaire HT, total HT).
- **Ajustements de l'étape 4 intégrés** — les conditions posées par les validateurs (ex. découplage 100 nF par driver, état de surface Ra ≤ 1,6) sont reportées en spécification de commande quand elles modifient une référence ou une quantité.
- **Adresse de livraison école** et coordonnées du responsable projet pour réception.
- **Référence projet interne** (code projet école) pour traçabilité comptable.

#### Émettre et tracer

L'émission elle-même est portée par le responsable projet (signature, validation école, transmission). L'équipe assure la **traçabilité** : pour chaque bon émis, conserver le numéro de commande retourné, la date d'émission, le montant TTC effectif (différent du total HT si TVA non incluse dans la BOM), la date de livraison annoncée. Ces informations alimentent le [[retroplanning|rétroplanning]] de l'[[integration-et-tests|intégration et tests]] : la date de livraison la plus tardive fixe le début effectif de la phase suivante.

À réception, **vérifier la conformité** ligne à ligne avant d'ouvrir l'intégration : référence reçue = référence commandée, quantité reçue = quantité commandée, état apparent. Une non-conformité à la réception est mieux traitée à chaud (retour fournisseur) que découverte deux semaines plus tard pendant l'intégration.

> [!warning] Attention
> **Émettre avant la validation d'ensemble est un échec d'étape.** L'autorisation de commander vient de l'étape 4 (revue globale encadrant), pas de la satisfaction d'avoir un dossier visuellement complet. Toute commande émise sans cette autorisation est non-conforme processus école et difficilement réversible — le partenaire a livré, l'école a payé.

> [!tip] Astuce
> **Suivi par tableau partagé : *commandé / livré annoncé / livré effectif / réception conforme*.** Quatre colonnes en regard de la BOM. Sans ce tableau, une ligne en retard passe inaperçue jusqu'à ce qu'elle bloque l'intégration.

> [!example] Exemple : projet bras 3 axes
> Trois bons de commande préparés en parallèle :
>
> - **Partenaire élec** — 3 steppers NEMA 17 (ELEC-MOT-N17), 3 drivers A4988 (ELEC-DRV-A49), 1 [[microcontroleur|microcontrôleur]] Arduino-compatible (ELEC-MCU-ARD), 1 alim 12 V / 5 A (ELEC-ALI-125), 3 condensateurs céramique 100 nF (ELEC-PAS-100N — ajustement étape 4 pour découplage drivers), connectique et passifs courants → ≈ 98 € HT. **[[pcb|PCB]] non commandé** : gravé en interne école sur machine de gravure à l'anglaise (monoface, carte 5×7 cm).
> - **Partenaire matière** — 1 barre alu 6061 Ø20 mm × 1 m (MAT-ALU-6061-20), visserie M3 + M5 lot (MAT-VIS-LOT) → ≈ 21 € HT.
> - **Partenaire fablab/atelier** — sous-traitance [[usinage|usinage]] des 3 articulations (SST-USI-3PCS) avec spécif. tolérance ISO 2768 m + état de surface Ra ≤ 1,6 sur portées de roulement (ajustement étape 4) → ≈ 95 € HT.
>
> Émission portée par le responsable projet en S+1 après validation d'ensemble. Numéros de commande conservés et reportés dans le tableau de suivi de l'équipe. Livraison complète annoncée en S+4 (cycle d'usinage le plus long). Réception conforme constatée, ouverture de l'[[integration-et-tests|intégration et tests]] en S+4.

> [!livrable] Livrable 5/5 — Dossier technique
> - Bons de commande émis (un par fournisseur partenaire), avec ajustements de l'étape 4 intégrés en spécification
> - Tableau de suivi commandes/livraisons (référence commande, dates, montants, conformité réception)

## Conclusion

À ce stade, le dossier technique est validé en parties et en ensemble, la BOM est chiffrée et commandée, l'évaluation environnementale est quantifiée sur la base réelle. Le projet bascule matériellement : les pièces arrivent, l'argent est dépensé. La suite du travail bascule en [[integration-et-tests|intégration et tests]] pour remonter la branche ascendante du cycle en V et confronter le prototype au CdCF.

---

## Pièges fréquents

- **Reprendre le pré-dimensionnement du concept sans intégrer les ajustements de la PoC.** L'étape 1 sert précisément à fermer cette porte. Si elle est sautée, le dossier technique est déconnecté du travail de levée d'incertitudes qui vient de se faire.
- **Confondre spécification d'interface et spécification interne.** Les interfaces sont le seul livrable que les autres disciplines lisent. La spécification interne reste l'affaire de la discipline qui la produit.
- **Différer la revue interne inter-disciplines après les profs.** Aller chercher les validateurs externes avec trois dossiers qui ne s'articulent pas en interne est une perte de temps collective. La revue interne se fait *avant*, pas pendant la multi-validation.
- **Construire la BOM sans intégrer la contrainte fournisseurs partenaires.** Choisir une référence parfaite sur un distributeur généraliste est inutile si elle n'est pas au catalogue partenaire. Le sourcing se fait sur le catalogue fermé, pas sur le marché ouvert.
- **Différer l'écoconception à la fin du projet.** L'ACV simplifiée est quantifiable dès l'étape 3 sur la BOM réelle. La différer prive le dossier d'un livrable structurant et fait perdre la valeur décisionnelle (choix matière, alternative recyclée).
- **Découvrir un dépassement budgétaire en étape 5.** Au moment d'émettre, il est trop tard pour rétroagir vers le concept proprement. Le total cumulé se vérifie à chaque ligne ajoutée à la BOM, pas à la fin.
- **Amputer la BOM pour rentrer dans l'enveloppe.** Réduire des quantités ou supprimer des sécurités pour rester sous budget est une porte ouverte vers une intégration ratée. Si le dépassement est structurel, c'est le concept qu'il faut reprendre, pas la BOM qu'il faut tronquer.
- **Sous-estimer la charge calendaire de la multi-validation.** Trois interlocuteurs aux agendas indépendants ne se synchronisent pas en une réunion. Anticiper deux semaines minimum, sinon le planning aval glisse.
- **Envoyer le dossier intégral à tous les validateurs.** Diluer le travail de relecture sur le tout fait baisser le taux de retour utile. Cibler le sous-dossier sur le périmètre du validateur est la règle.
- **Émettre les commandes avant la validation d'ensemble.** L'autorisation vient de la revue globale encadrant, pas de la satisfaction d'avoir un dossier visuellement complet. Une commande émise sans cette autorisation est non-conforme processus école.
- **Négliger la traçabilité des numéros de commande et dates de livraison.** Sans tableau de suivi en regard de la BOM, une ligne en retard passe inaperçue jusqu'à ce qu'elle bloque l'intégration. Les numéros de commande sont aussi la piste comptable pour l'école.

## Pendant cette phase, côté équipe

**Interfaces métiers.** Le dossier technique est la phase où les cours des collègues prennent une résonance opératoire forte. Côté mécanique, les apprentissages de cotation fonctionnelle, de choix matériaux et de procédés de fabrication ([[usinage|usinage]], [[impression-3d|impression 3D]], assemblage) deviennent des livrables à produire — plans cotés avec tolérances ISO, justification matière, spécifications de finition. Côté informatique, les notions d'architecture logicielle, de spécifications d'interfaces et de structures de données passent du niveau cours au niveau livrable validable. La fiche se contente de pointer ces apprentissages disciplinaires sans les refaire : elle articule ce qui relève de l'électronique et de l'informatique embarquée avec ce que les collègues portent dans leurs cours dédiés.

**Gestion de projet.** Le fil transverse [[gestion-de-projet|gestion de projet]] est particulièrement chargé sur cette phase. Trois chantiers s'imbriquent : le **rétroplanning d'approvisionnement** ([[retroplanning|rétroplanning]] sur lead times fournisseurs partenaires), le **budget consolidé** à piloter contre l'enveloppe initiale, et la **coordination de la multi-validation** (trois rendez-vous à caler, ajustements à intégrer entre eux, revue globale à organiser). Le chef de projet de l'équipe étudiante porte ces trois chantiers en parallèle, ce qui en fait la phase la plus exigeante du rôle.

**Écoconception.** Le fil [[ecoconception|écoconception]] bascule du qualitatif au quantitatif : l'[[acv-simplifiee|ACV simplifiée]] sur BOM réelle est le premier livrable chiffré d'éco du projet. La hiérarchie des contributeurs (quels composants pèsent dans le bilan eqCO₂) alimente directement la conclusion d'écoconception et peut motiver un dernier arbitrage matière (alu primaire vs recyclé, par exemple) avant émission de la commande. C'est aussi le moment de signaler les points d'attention que le projet n'a pas pu lever — matière non recyclable en boucle école, fin de vie complexe — pour qu'un projet ultérieur puisse les reprendre.

**Sécurité et qualité.** Le fil [[securite-et-qualite|sécurité et qualité]] s'incarne en étape 2 (intégration des contraintes de sécurité aux plans : protections, sécurités d'arrêt, accessibilité des points de maintenance) et en étape 5 (conformité au processus d'achat école, traçabilité comptable). La discipline de la **traçabilité écrite** — page de synthèse PoC, page de revue interne, trace des ajustements validés, numéros de commande conservés — n'est pas un confort administratif : c'est ce qui permet à un tiers (validateur, suivant, auditeur) de reprendre le projet sans repartir de zéro.

## Voir aussi

- [[index|Hub du parcours projet]]
- Étape précédente : [[preuve-de-concept|Preuve de concept]]
- Étape suivante : [[integration-et-tests|Intégration et tests]] *(à créer)*
- [[pcb|PCB]] *(à créer)*
- [[gestion-de-projet|Gestion de projet]] *(fil transverse — à créer)*
- [[ecoconception|Écoconception]] *(fil transverse — à créer)*
- [[securite-et-qualite|Sécurité et qualité]] *(fil transverse — à créer)*
