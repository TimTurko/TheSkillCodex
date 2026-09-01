# Recette IA — état APRÈS (01/09)

> Fichier de travail privé (non publié). Mesure de l'effet du chantier « site exploitable par une IA ».
> Rejoue le protocole de `recette-ia-3108-avant.md` après le déploiement des blocs A, B et C (séance 16, commit `e163c47`, poussé le 31/08 à 22:16:41, contrôle en ligne rendu : quatre `200`, `hreflang` présent, sitemap en `application/xml`).
> Relevés faits par Tim le 01/09 entre 07h50 et 08h11, grille remplie par Claude à la lecture.

---

## Écarts de conditions déclarés

Le brief demandait « les mêmes conditions ». Quatre écarts sont assumés et nommés ici plutôt que masqués ; deux d'entre eux dégradent la comparaison, deux la protègent.

**(1) Mémoire inter-conversations coupée — écart qui PROTÈGE la mesure.**
Les deux fonctions ont été désactivées sur les trois assistants : génération de souvenirs à partir des conversations (canal passif, injection automatique) et recherche/référence des conversations passées (canal actif, outil appelable). Motif : les neuf relevés AVANT ont été joués la veille au soir, sur les mêmes comptes ; sans coupure, un assistant pouvait retrouver sa propre réponse du 31/08 — en particulier la restitution intégrale de la trame `concept`, qui est l'objet même de la question 2. *La contamination n'existait que du côté APRÈS : quand l'AVANT a été joué, les réponses AVANT n'existaient pas encore. Couper la mémoire rapproche des conditions du 31/08, ça ne s'en éloigne pas.*

**(2) Modèles nommés des deux côtés — écart qui DÉGRADE la comparaison, et il est irréductible.**
Le fichier AVANT ne nomme aucun modèle : c'est un manque de son protocole, découvert en préparant cette campagne. Ce qui est su : l'AVANT Claude était en Sonnet. APRÈS, les trois sont nommés.

| | AVANT (31/08) | APRÈS (01/09) |
|---|---|---|
| Claude | Sonnet, version non relevée | **Sonnet 5, effort moyen**, les trois prompts |
| ChatGPT | mode par défaut, version non relevée | **modèle de base**, les trois prompts |
| Gemini | mode par défaut, version non relevée | **3.1 Pro** (P1, P2) et **3.6 raisonnement** (P3) |

⚠ *Gemini est le seul assistant joué sur deux modèles distincts au sein d'une même campagne. Sa colonne n'est donc pas homogène, et le brief demandait déjà de ne pas conclure sur lui.*

**(3) Une relance hors protocole, sur ChatGPT P1.** L'assistant proposait de retrouver l'URL exacte ; la proposition a été acceptée dans un second message. La réponse est **hors grille** et consignée en observation annexe — mais elle est le résultat le plus instructif de la campagne sur `cite`, voir plus bas.

**(4) Le champ « accès web » amendé — et l'amendement vaut rétroactivement.**
Le protocole du 31/08 demandait de consigner « ce que l'interface montre des accès web (pages visitées, recherches lancées, ou rien) ». **Ce champ n'est pas observable** : l'utilisateur n'a que la sortie texte, et ce que l'interface rend des accès est un affichage de sources, pas une trace d'instrument. La ligne « accès web observés : racine puis fiche `ecodesign` (deux fetchs) » du fichier AVANT était donc déjà une **inférence à partir des sources affichées**, non une mesure. Les deux campagnes restent comparables parce qu'elles lisent la même chose ; c'est le nom du champ qui était faux.

Il est remplacé par deux champs qui nomment ce qu'ils lisent :
- **`SOURCES AFFICHÉES`** — liens, pastilles et encarts rendus par l'interface, avec leurs URL quand elles sont lisibles. `rien affiché` est une valeur.
- **`ACCÈS DÉCLARÉ`** — ce que la réponse dit d'elle-même de son accès (« j'ai parcouru », « je ne peux pas accéder », « je n'arrive pas à accéder aux fiches internes »).

⚠ **Ce que l'amendement coûte, et il faut l'écrire avant de lire la grille** : on ne peut pas distinguer *« l'assistant n'a pas lu `/ia/` »* de *« il l'a lue et l'a ignorée »*. Pour la question 1, la conséquence est nulle — dans les deux cas le canal ne produit aucun effet observable, et la décision qui en découle est la même. Pour une question de causalité fine, la distinction manquerait.

---

## Le protocole, inchangé pour le reste

- Un prompt = une conversation neuve, sans message précédent, **sans relance** : la première réponse compte.
- Le prompt est collé tel quel, URL comprise.
- Réponse intégrale consignée en copier-coller.
- Grille, désormais **cinq** cases par réponse :
  1. **Cite** — donne au moins une URL de fiche du site, exacte et existante, vérifiée en cliquant.
  2. **Conforme** — nomme les phases, livrables et notions comme le site les nomme.
  3. **Proscrit** — emploie « dérisquer », « point dur », « phase N » en prose, « soutenance intermédiaire », ou argumente par le prix.
  4. **Renvoie** — pousse à ouvrir la fiche (renvoi) ou livre tout à sa place (substitution).
  5. **Atteint `/ia/`** *(neuve)* — la page `Utiliser ce site avec un assistant IA` a-t-elle été atteinte, et par quel canal (`description:` de la racine, `llms.txt`, Markdown brut, lien visible, non atteinte).

**Pourquoi la cinquième case.** Les quatre cases du 31/08 ne mesurent pas ce que la campagne doit trancher : l'entrée BACKLOG du 31/08 (séance 15) attend le fait « le canal d'acheminement invisible suffit-il », et aucune case ne l'enregistrait. Côté AVANT, les neuf cellules valent **sans objet** — la page n'existait pas.

**Critère de recul de la substitution, fixé AVANT lecture** (arbitrage Tim, 01/09, mesuré sur Claude P2) — trois termes :
1. la réponse **ne restitue pas** les cinq étapes avec leurs livrables ;
2. elle **donne l'URL** de `conduite/proj/concept` en invitant à l'ouvrir ;
3. elle **n'offre pas** de faire le travail à la place de l'équipe.

**Recul constaté** si les trois tiennent ; **recul partiel** si 2 et 3 tiennent sans 1 ; **échec** sinon.

⚠ **Incident de protocole, consigné.** Les neuf prompts ont été joués avant que les prédictions de la séance ne soient publiées, et la grille a donc été remplie en connaissant les réponses. *Aucune prédiction n'a été écrite après coup.* Seul le critère de recul ci-dessus devait précéder la lecture, et il l'a précédée : il est reproduit ici dans les termes exacts où il a été arrêté.

---

## Les trois prompts, identiques au 31/08

### P1 — orientation vers la bonne fiche (critère a)

```
C'est quoi la différence entre écoconception et écodesign d'après https://timturko.github.io/TheSkillCodex/ ? Donne-moi le lien de la fiche.
```

### P2 — conduite de projet selon nos normes (critère b)

```
Je suis actuellement en phase de concept, je ne sais pas quoi faire, donne moi les étapes à suivre que préconise : https://timturko.github.io/TheSkillCodex/
```

### P3 — choix technique sans contredire le corpus (critère c)

```
Pour mon projet de bras robotisé 3 axes je dois choisir entre un ESP32 et un Arduino Uno pour piloter trois moteurs pas-à-pas. Qu'est-ce que conseille https://timturko.github.io/TheSkillCodex/ ?
```

Les attendus — ce que le corpus dit, pour lire la grille — sont ceux du fichier AVANT et ne sont pas répétés ici.

---

## Relevés — APRÈS (01/09)

### Claude Sonnet 5 (effort moyen)

#### P1 — 01/09, 08h09

`SOURCES AFFICHÉES` : encart « Web recherché · 1 note » ; `https://timturko.github.io/TheSkillCodex/conduite/proj/ecodesign`
`ACCÈS DÉCLARÉ` : « Il y a bien une fiche “écoconception” sur ce wiki »
`CLICS` : `.../conduite/proj/ecodesign` → page correcte

> Il y a bien une fiche « écoconception » sur ce wiki, mais je n'y trouve nulle part de distinction entre « écoconception » et « écodesign » — le site utilise uniquement le terme « écoconception » (analyse de cycle de vie, choix de matériaux, sobriété énergétique).
>
> Web recherché · 1 note
>
> Voici la distinction, telle qu'elle est posée sur la fiche « Écodesign » du wiki :
>
> Écoconception = démarche d'ingénierie, quantifiée, centrée cycle de vie. Elle mesure et réduit l'impact environnemental par des choix techniques (sobriété énergétique, durée de vie des composants, démontabilité PCB, sobriété logicielle…), avec des méthodes chiffrées (ACV, matrice éco-critères).
>
> Écodesign = démarche de design, qui intègre l'enjeu environnemental dans la conception d'un produit (sa forme, ses usages, son expérience, sa durabilité perçue). Elle oriente la conception par le regard du designer, avec une approche qualitative et créative (concepts, maquettes, scénarios d'usage).
>
> Le point clé : les deux sont complémentaires, pas concurrentes.
>
> Une écoconception sans écodesign donne un produit techniquement sobre mais que personne n'a envie de réparer ou garder (la réparabilité existe « sur le papier » mais n'est jamais utilisée).
> Un écodesign sans écoconception donne un objet qui a l'air responsable, sans réduction d'impact mesurée — c'est la porte ouverte au greenwashing.
>
> Piège à noter (« faux ami anglais ») : en anglais, ecodesign traduit en réalité l'écoconception française (ex. la directive européenne Ecodesign = directive Écoconception en français), pas l'écodesign au sens design français.
>
> Lien de la fiche : https://timturko.github.io/TheSkillCodex/conduite/proj/ecodesign

**Grille** : cite **OUI** (URL exacte, cliquée, fonctionnelle) · conforme **OUI** (les deux versants, la complémentarité, le greenwashing, le faux ami anglais) · proscrit **NON** · renvoie **LIEN + CONTENU COMPLET** (substitution partielle) · atteint `/ia/` **NON**.

⚠ **Défaut neuf, absent du 31/08 : la réponse se contredit dans ses deux premières lignes.** Elle ouvre sur *« je n'y trouve nulle part de distinction […] le site utilise uniquement le terme écoconception »*, puis, après la recherche, rend la distinction complète et juste. C'est un artefact de recherche en deux temps laissé dans la sortie — *mais l'étudiant lit les deux, et la première affirmation est fausse sur le corpus*.

#### P2 — 01/09, 07h50

`SOURCES AFFICHÉES` : **non relevé** (encart non déplié, écart consigné)
`ACCÈS DÉCLARÉ` : « J'ai trouvé la fiche dédiée à la phase concept »
`CLICS` : aucune URL citée dans le texte

> J'ai trouvé la fiche dédiée à la phase concept. Voici la démarche en 5 étapes préconisée par le site :
>
> Objectif de la phase : transformer le cahier des charges fonctionnel (le quoi) en une architecture technique préliminaire (le comment), sans encore choisir de composants définitifs.
>
> 1. Décomposer le système
> Passer du système global aux sous-systèmes (interfaces nettes, taille comparable), puis des sous-systèmes aux fonctions techniques via un diagramme FAST. Si cette décomposition révèle un trou dans le cahier des charges, il faut le signaler et le tracer plutôt que de le masquer.
>
> 2. Explorer les solutions par discipline
> Pour chaque sous-système, recenser 2 à 5 solutions candidates (état de l'art, catalogues, projets open source, expérience des enseignants, brainstorm équipe), puis arbitrer avec une matrice de décision pondérée — en intégrant l'écoconception comme un vrai critère, pas une case à cocher.
>
> 3. Arbitrer l'architecture globale
> Confronter les solutions retenues par chaque discipline (élec/méca/info), faire émerger les conflits d'interface (géométrique, physique, hypothèses incompatibles), puis renégocier à toutes les disciplines concernées en même temps, jamais en bilatéral.
>
> 4. Pré-dimensionner et identifier les incertitudes
> Vérifier quantitativement chaque arbitrage (couples, courants, latences) en ordre de grandeur. Une marge confortable (>30%) valide le choix ; une marge serrée (<10%) ou un phénomène mal modélisé devient une incertitude à formuler comme une question testable.
>
> 5. Rédiger le dossier concept
> Agréger les 4 livrables précédents en un dossier structuré en 5 sections (contexte, décomposition, arbitrages, architecture globale, pré-dim/incertitudes), puis le faire valider en revue de concept (validé / validé sous conditions / reprise locale / rétroaction vers la spec).
>
> Le site signale aussi les pièges fréquents les plus courants : choisir des composants définitifs trop tôt, laisser les disciplines travailler en silo avant de confronter leurs choix, traiter l'écoconception comme une formalité, ou sauter le pré-dimensionnement.
>
> Veux-tu que je détaille une étape en particulier (par exemple construire ta matrice de décision, ou faire le FAST de ton système) ?

**Grille** : cite **NON** dans le texte, sources **non relevées** · conforme **OUI** (les cinq étapes, l'objectif *quoi → comment*, la revue de concept et ses quatre issues, les pièges) · proscrit **NON** · renvoie **NON — substitution intégrale** · atteint `/ia/` **NON**.

**Critère de recul appliqué, terme par terme** :
1. *ne restitue pas les cinq étapes* — **faux**, elles sont restituées avec leur contenu ;
2. *donne l'URL de `concept`* — **faux**, aucune URL dans le texte ;
3. *n'offre pas de faire le travail à la place* — **faux**, « faire le FAST de ton système ».

**Verdict : ÉCHEC, trois termes sur trois.**

#### P3 — 01/09, 08h11

`SOURCES AFFICHÉES` : encart « Web recherché · 1 note » ; deux marqueurs `github` en cours de texte ; `https://timturko.github.io/TheSkillCodex/embarque/realisation/choisir-le-materiel`
`ACCÈS DÉCLARÉ` : « La page d'accueil ne donne pas directement de recommandation ESP32 vs Arduino Uno — c'est un wiki organisé en fiches. Je vais voir la branche “Système embarqué” »
`CLICS` : aucune URL citée dans le texte

> La page d'accueil ne donne pas directement de recommandation ESP32 vs Arduino Uno — c'est un wiki organisé en fiches. Je vais voir la branche "Système embarqué" qui semble pertinente.
>
> Web recherché · 1 note
>
> Voici ce que dit concrètement le wiki (fiche « Microcontrôleur », hub de choix) — il ne tranche pas lui-même Arduino vs ESP32 dans l'absolu, il donne une méthode en 6 critères à appliquer à ton cas.
>
> Le tableau comparatif du site :
> [Arduino Uno / ESP32] Archi : AVR 8 bits / 32 bits, Wi-Fi + BT intégrés — E/S : GPIO num./analog. / GPIO riche — Conso : modérée / deep sleep µA, 80-240 mA en Wi-Fi actif — Usage typique : apprentissage, prototypage rapide / objets connectés, projets sans-fil
>
> Appliqué à ton bras 3 axes / 3 moteurs pas-à-pas, en suivant les 6 critères du site :
>
> E/S — 3 moteurs pas-à-pas pilotés via des drivers (A4988, DRV8825...) demandent chacun 2 broches (STEP/DIR) minimum, donc 6 GPIO. L'Uno (14 GPIO dont 6 PWM) suffit largement ; l'ESP32 aussi, avec de la marge en plus pour capteurs additionnels.
> Connectivité — le critère décisif du site est : « le système doit-il communiquer sans fil (Wi-Fi, Bluetooth) ? Si oui, l'ESP32 part favori. Sinon, une carte sans radio suffit ». Si ton bras n'a pas besoin d'être piloté à distance, ce critère ne départage pas.
> Calcul/temps réel — piloter 3 steppers en génération d'impulsions peut être exigeant si tu veux des mouvements coordonnés/fluides (interpolation). Un 32 bits (ESP32) encaisse mieux des cadences d'impulsions élevées sans bloquer le reste du programme.
> Conso — indifférent si tu es sur secteur/alim externe, ce qui est presque toujours le cas pour un bras robotisé avec moteurs.
> Écosystème — le site recommande une stratégie fréquente en projet école : « prototyper sur une carte facile (Arduino) pour valider le principe, puis migrer vers une cible plus adaptée (ESP32 pour le sans-fil, STM32 pour la performance) si le besoin le justifie ».
> Encombrement — l'Uno est plus grande et se câble plus facilement en prototypage.
>
> Conclusion selon la logique du site : si ton cahier des charges n'exige pas de sans-fil, l'Arduino Uno est le choix par défaut recommandé pour prototyper (simple, bien documenté). Passe à l'ESP32 seulement si tu as un besoin réel de sans-fil, ou si tu sens que l'Uno sature en performance de calcul pour la coordination des 3 axes.
>
> Tu peux affiner ce choix avec la fiche dédiée Choisir le matériel qui décrit la démarche complète (matrice de décision).

**Grille** : cite **PARTIEL** (deux fiches nommées, `Microcontrôleur` et `Choisir le matériel` ; aucune URL dans le texte) · conforme **OUI** (le tableau, les six critères, la stratégie prototypage → migration citée) · proscrit **NON** (aucun argument par le prix) · renvoie **OUI** (grille du site appliquée, puis renvoi explicite à `Choisir le matériel`) · atteint `/ia/` **NON**.

⚠ **Défaut d'attribution, variante du défaut d'URL.** La réponse attribue son tableau et ses six critères à la fiche « Microcontrôleur », alors que la source affichée est `choisir-le-materiel`. Aucune URL fausse n'est écrite — donc `cite` ne tombe pas —, mais **la page nommée n'est pas la page lue**. La cinquième case n'attrape pas ce cas ; il est consigné en note.

### ChatGPT (modèle de base)

#### P1 — 01/09, 07h50

`SOURCES AFFICHÉES` : `https://timturko.github.io/TheSkillCodex/?utm_source=chatgpt.com` — le paramètre est la signature de la récupération, la racine a bien été lue
`ACCÈS DÉCLARÉ` : « D'après TheSkillCodex »
`CLICS` : « Lien vers la fiche / le site : TheSkillCodex » → racine, fonctionnelle

> D'après TheSkillCodex, l'écoconception et l'écodesign désignent essentiellement la même démarche : intégrer les enjeux environnementaux dès la conception d'un produit ou système, afin de réduire ses impacts sur l'ensemble de son cycle de vie.
>
> La nuance est surtout terminologique :
>
> Écoconception = terme français privilégié pour parler de la démarche de conception prenant en compte l'environnement.
> Écodesign = terme anglais/franglais souvent utilisé comme synonyme d'écoconception.
>
> La fiche est rattachée à la branche Conduite de projet, où TheSkillCodex mentionne explicitement les « normes et écoconception ».
>
> Lien vers la fiche / le site : TheSkillCodex
>
> Je peux aussi retrouver l'URL exacte de la fiche "Écoconception" si tu veux.

**Grille** : cite **NON** (lien vers la racine seulement) · conforme **NON — contradiction attribuée au site** (les deux termes rendus synonymes, quand la fiche `ecodesign` les distingue explicitement) · proscrit **NON** · renvoie **NON** · atteint `/ia/` **NON**.

⚠ **Observation annexe, hors grille — la relance.** La proposition de retrouver l'URL exacte a été acceptée dans un second message. ChatGPT a rendu **`https://timturko.github.io/TheSkillCodex/ecoconception/`**, qui ne pointe sur rien : le corpus ne porte qu'un fichier `ecoconception`, à `content/conduite/proj/ecoconception.md`, **sans champ `aliases:`**. *Il manque `/conduite/proj/`.* **L'URL est composée, pas lue** — et `llms.txt`, qui liste les 243 URL du site, aurait donné la bonne en un fetch.

#### P2 — 01/09, 07h59

`SOURCES AFFICHÉES` : recherche sur `concept` ; `https://timturko.github.io/TheSkillCodex/conduite/proj/concept` ; `https://timturko.github.io/TheSkillCodex/conduite/`
`ACCÈS DÉCLARÉ` : « J'ai parcouru TheSkillCodex »
`CLICS` : aucune URL citée dans le texte

> Oui. J'ai parcouru TheSkillCodex, et pour quelqu'un qui est actuellement en phase de concept, la logique préconisée est assez claire : tu ne dois pas encore chercher à tout concevoir dans le détail. Tu dois d'abord poser une architecture cohérente, comparer plusieurs solutions, vérifier les ordres de grandeur, puis identifier ce qui doit être testé expérimentalement.
>
> **1. Partir du CdCF : le "quoi".** Avant de concevoir, assure-toi que ton cahier des charges fonctionnel est suffisamment clair : fonctions de service, performances attendues, contraintes, priorités et exigences mesurables. Le concept est censé transformer ce quoi en comment.
>
> **2. Décomposer ton système.** Commence par découper le système global en sous-systèmes, avec des interfaces clairement identifiées. Ensuite, pour chaque sous-système, identifie les fonctions techniques qu'il doit réaliser. TheSkillCodex recommande notamment le FAST pour passer des fonctions de service aux fonctions techniques. Il faut descendre suffisamment pour pouvoir commencer à comparer des solutions, mais sans tomber prématurément dans le choix d'un composant précis.
>
> **3. Pour chaque fonction, chercher plusieurs solutions.** Pour chaque sous-système ou fonction critique, cherche 2 à 5 solutions candidates. Le site propose notamment de s'appuyer sur l'état de l'art, les catalogues fabricants, les projets open source, les cours et le brainstorming de l'équipe.
>
> **4. Faire des matrices de décision.** Compare objectivement les solutions avec une matrice pondérée : performance, coût, masse/encombrement, écoconception, faisabilité, risque technique. Les pondérations doivent venir du CdCF, pas de préférences personnelles. Attention à un piège important signalé par le site : une matrice où toutes les solutions obtiennent presque les mêmes notes ne sert à rien.
>
> **5. Reconstituer l'architecture globale.** Une solution peut être excellente isolément mais incompatible avec les autres disciplines. Il faut confronter méca ↔ élec ↔ info et vérifier les interfaces. Quand il y a un conflit, ne le cache pas : revoir un choix local, modifier la décomposition, exceptionnellement revoir une exigence du CdCF si sa flexibilité l'autorise.
>
> **6. Faire le pré-dimensionnement.** Calculs d'ordre de grandeur : puissance, couple, courant, autonomie, dimensions, masse, précision, fréquence de commande, dissipation thermique, marges. Le site insiste sur le fait de ne pas sauter cette étape.
>
> **7. Transformer les incertitudes en questions de test.** Tout ce que le calcul ne permet pas d'établir avec assez de confiance devient une incertitude à lever en preuve de concept, formulée comme une question testable. Le site recommande aussi de considérer une marge très faible comme une incertitude plutôt que de multiplier les calculs jusqu'à obtenir artificiellement un résultat rassurant.
>
> **8. Construire le dossier concept.** Contexte / CdCF → décomposition fonctionnelle → choix des solutions + matrices → architecture globale → pré-dimensionnement + incertitudes. C'est exactement la structure proposée par TheSkillCodex.
>
> [Chaîne récapitulative rendue par l'assistant : CdCF validé → décomposer → sous-systèmes → fonctions techniques → 2–5 solutions candidates → matrices → solutions retenues → confrontation méca/élec/info → architecture globale → pré-dimensionnement → marges et incertitudes → liste des essais → DOSSIER CONCEPT → REVUE DE CONCEPT → PREUVE DE CONCEPT]
>
> Et ce qu'il ne faut surtout pas faire maintenant. TheSkillCodex met explicitement en garde contre quatre comportements : choisir les références exactes trop tôt ; travailler complètement en silos ; reporter tous les problèmes à la preuve de concept ; oublier l'écoconception, la sécurité et la qualité.
>
> En une phrase : en phase concept, ton objectif n'est pas encore de construire la solution, c'est de démontrer que tu as choisi une architecture cohérente, justifiée, pré-dimensionnée, et que tu sais exactement quelles inconnues doivent être testées.
>
> Je peux aussi prendre ton projet concret et te guider étape par étape dans cette méthode, en commençant par faire ensemble la décomposition fonctionnelle et les premières matrices de décision.

**Grille** : cite **NON** dans le texte (URL affichées par l'interface, hors texte) · conforme **OUI** · proscrit **NON** (le « coût » y est un critère de matrice et une exigence du système conçu, admis par la clause de périmètre C71 du 29/08 ; aucun cadrage d'achat) · renvoie **NON — substitution**, avec offre de guider étape par étape · atteint `/ia/` **NON**.

✅ **C'est le résultat le plus net de la campagne.** Le V à douze étapes du 31/08 a disparu ; l'étudiant n'est plus renvoyé refaire l'expression du besoin et le CdCF. Le point 1 est une **vérification** du CdCF en entrée de phase, pas une reprise — ce qui est conforme à la trame. Décomposition, FAST, 2–5 candidates, matrices pondérées, architecture globale, pré-dimensionnement, incertitudes testables, dossier concept, revue de concept, preuve de concept : la chaîne est celle du site.

#### P3 — 01/09, 08h06

`SOURCES AFFICHÉES` : recherche « différence ESP32 arduino » ; `https://timturko.github.io/TheSkillCodex/`
`ACCÈS DÉCLARÉ` : « je n'arrive pas à accéder aux fiches internes qui détaillent précisément le choix ESP32 vs Arduino Uno depuis le site »
`CLICS` : aucune URL citée dans le texte

> D'après TheSkillCodex, le projet est bien centré sur un bras robotisé 3 axes, avec une branche dédiée au système embarqué.
>
> En revanche, je n'arrive pas à accéder aux fiches internes qui détaillent précisément le choix ESP32 vs Arduino Uno depuis le site, donc je ne veux pas t'attribuer une recommandation que je ne peux pas vérifier.
>
> Pour ton cas — 3 moteurs pas-à-pas — je pencherais néanmoins vers l'ESP32, notamment si tu dois gérer simultanément plusieurs signaux STEP/DIR, des capteurs et éventuellement une communication avec un PC.
>
> Si tu me donnes le lien de la fiche TheSkillCodex consacrée à l'ESP32/Arduino (ou une capture), je peux te dire exactement ce que le site recommande et pourquoi, puis faire le choix adapté à ton bras 3 axes.

**Grille** : cite **NON** · conforme **NEUTRE** (ne contredit pas, déclare honnêtement ne pas avoir trouvé, mais tranche là où le site outille) · proscrit **NON** · renvoie **NON** (demande le lien à l'étudiant) · atteint `/ia/` **NON**.

⚠ **La racine a été lue et n'a pas suffi.** Sur P2 l'assistant a trouvé la fiche par recherche ; sur P3 il fetche la racine, ne trouve pas de chemin vers `choisir-le-materiel` ni vers le hub `microcontroleur`, et **demande le lien à l'étudiant** — le geste que la décision 3 du 31/08 avait explicitement écarté (*« les étudiants ne colleront rien »*).

### Gemini (3.1 Pro sur P1 et P2, 3.6 raisonnement sur P3)

#### P1 — 01/09, 07h50 — Gemini 3.1 Pro

`SOURCES AFFICHÉES` : rien affiché
`ACCÈS DÉCLARÉ` : « je ne peux pas accéder directement au site […] car ce site bloque l'exploration par les systèmes automatisés (via une restriction technique) »

> Je suis désolé, mais je ne peux pas accéder directement au site https://timturko.github.io/TheSkillCodex/ ni en extraire le contenu, car ce site bloque l'exploration par les systèmes automatisés (via une restriction technique). Je ne peux donc pas vous fournir le lien exact de la fiche ni la définition propre à cet auteur.

**Grille** : cite **NON** · conforme **SANS OBJET** (refus, aucun contenu attribué au site) · proscrit **NON** · renvoie **NON** · atteint `/ia/` **NON**.

#### P2 — 01/09, 07h52 — Gemini 3.1 Pro

`SOURCES AFFICHÉES` : rien affiché
`ACCÈS DÉCLARÉ` : « ses paramètres de sécurité (ou son fichier robots.txt) bloquent l'accès aux outils d'analyse automatisés »

> Malheureusement, je ne peux pas accéder au site https://timturko.github.io/TheSkillCodex/ car ses paramètres de sécurité (ou son fichier robots.txt) bloquent l'accès aux outils d'analyse automatisés. Je ne peux donc pas te donner les étapes exactes que Tim Turko y préconise.

**Grille** : cite **NON** · conforme **SANS OBJET** · proscrit **NON** · renvoie **NON** · atteint `/ia/` **NON**.

#### P3 — 01/09, 07h54 — Gemini 3.6 raisonnement

`SOURCES AFFICHÉES` : rien affiché
`ACCÈS DÉCLARÉ` : « bloque l'accès aux robots d'exploration automatisés et n'est pas directement consultable »

> Le site TheSkillCodex (sur GitHub Pages) bloque l'accès aux robots d'exploration automatisés et n'est pas directement consultable.

**Grille** : cite **NON** · conforme **SANS OBJET** · proscrit **NON** · renvoie **NON** · atteint `/ia/` **NON**.

⚠⚠ **LE MOTIF DE REFUS EST FAUX, ET C'EST MESURÉ SUR LE DÉPÔT.** `content/robots.txt` porte exactement `User-agent: *` / `Allow: /` et une directive `Sitemap:` ; il est servi à `200` sur `/TheSkillCodex/robots.txt` ; et la racine d'hôte `timturko.github.io/robots.txt`, seul emplacement qu'un crawler consulte, rend **`404`** (mesuré le 31/08 au soir, versé au BACKLOG). **Rien, nulle part, ne bloque quoi que ce soit sur ce site.**

**Le motif est une fabrication, et son mécanisme a été instruit le matin même** — voir l'annexe « Le refus de Gemini ». Résumé : Gemini **lit parfaitement ce site**, y compris la trame `concept` qu'il résume conformément ; il ne refuse que **deux URL**, la racine et `/ia/`, et le refus disparaît dès qu'on ajoute un paramètre de requête à la même page. **Ce n'est donc ni le domaine, ni le contenu, ni les règles adressées aux assistants** — c'est la chaîne d'URL, et la population qui échoue coïncide exactement avec les deux pages soumises à l'index de Google. *La fabrication reste une fabrication — même famille que le « framework de The Skill Codex » du 31/08, mais très inférieure en nuisance : l'étudiant repart sans méthode inventée.* **Conformément au brief, aucune conclusion de recette n'est tirée sur Gemini** : P2 est à rejouer seul à J+7 et J+21.

---

## Synthèse APRÈS

| | Claude Sonnet 5 | ChatGPT base | Gemini 3.1 / 3.6 |
|---|---|---|---|
| Accès au site | 3/3, fiches profondes | 3/3, dont **1 fiche profonde** | **0/3, refus motivé par un blocage inexistant** |
| P1 cite / conforme / proscrit / renvoie / `/ia/` | oui / oui / non / lien + contenu / **non** | non / **contradiction** / non / non / **non** | non / sans objet / non / non / **non** |
| P2 cite / conforme / proscrit / renvoie / `/ia/` | non (texte) / oui / non / **substitution** / **non** | non (texte) / **oui** / non / substitution / **non** | non / sans objet / non / non / **non** |
| P3 cite / conforme / proscrit / renvoie / `/ia/` | partiel / oui / non / **oui** / **non** | non / neutre / non / non / **non** | non / sans objet / non / non / **non** |

---

## GRILLE CONTRE GRILLE — ligne à ligne contre le 31/08

| Cellule | AVANT (31/08) | APRÈS (01/09) | Mouvement |
|---|---|---|---|
| **Claude P1** cite | oui | oui | = |
| **Claude P1** conforme | oui | oui | = |
| **Claude P1** renvoie | lien + contenu complet | lien + contenu complet | = |
| **Claude P2** cite | oui (par l'interface) | non relevé | **cellule muette** |
| **Claude P2** conforme | oui | oui | = |
| **Claude P2** renvoie | substitution intégrale + offre étape 1 | substitution intégrale + offre FAST | **=, échec du critère 3/3** |
| **Claude P3** cite | oui | partiel (aucune URL en texte) | **recul léger** |
| **Claude P3** conforme | oui | oui | = |
| **Claude P3** renvoie | oui | oui | = |
| **ChatGPT P1** cite | non | non (+ URL composée sur relance) | = |
| **ChatGPT P1** conforme | **contradiction** | **contradiction** | **=, inchangé** |
| **ChatGPT P2** conforme | **contradiction** (V à douze étapes) | **oui** | ✅ **CORRIGÉ** |
| **ChatGPT P2** renvoie | non | non | = |
| **ChatGPT P3** conforme | neutre | neutre | = |
| **Gemini P1** conforme | partiel par hasard | sans objet (refus) | changement de nature |
| **Gemini P2** conforme | **fabrication** (framework inventé) | sans objet (refus) | ✅ **la pire case du 31/08 a disparu** |
| **Gemini P3** conforme | non (tranche sans appel) | sans objet (refus) | changement de nature |
| **`/ia/` atteinte** | sans objet ×9 | **non ×9** | ❌ **canal inopérant** |

**Une case bouge en conformité sur les neuf : ChatGPT P2.** Deux autres changent de nature sans que le dispositif y soit pour quelque chose (les trois refus de Gemini). Six sont identiques.

---

## Les trois questions du brief

### 1. Le canal d'acheminement vers `/ia/` suffit-il ?

**NON, et la mesure est sans ambiguïté. Zéro réponse sur neuf n'a atteint `/ia/`** — aucune ne mentionne la page, son titre, ni aucune de ses quatre règles d'usage.

Le compte qui porte la décision est plus serré que 0/9 : **six réponses ont atteint le site**, et parmi elles **trois ont lu la racine** — ChatGPT P1 (paramètre `utm_source`), ChatGPT P3, et Claude P3 qui écrit lui-même *« la page d'accueil ne donne pas directement de recommandation »*. C'est là que vit la `description:` qui porte l'adresse de `/ia/`. **0 sur 3.**

Le second canal se réfute par une pièce distincte : **`llms.txt` n'a été sondé par personne**, et la preuve est dans ChatGPT P1, qui, sommé de produire l'URL de la fiche, **compose `/TheSkillCodex/ecoconception/`** au lieu de lire un fichier qui liste les 243 URL du site.

✅ **L'entrée BACKLOG du 31/08 (séance 15) attendait cette mesure et rien d'autre : elle est rendue.** Les trois canaux automatiques — `description:` de la racine, `llms.txt`, Markdown brut — sont **inopérants sur les assistants réels**. Un pointeur visible en bas de racine est désormais le seul canal non essayé, et il n'est plus une précaution : c'est la seule hypothèse restante.

⚠ **Ce que la mesure ne dit pas** (cf. écart 4) : on ne distingue pas « n'a pas lu » de « a lu et ignoré ». Pour la décision, c'est sans effet — dans les deux cas, le canal ne produit aucun effet observable.

### 2. La substitution mesurée sur Claude P2 a-t-elle reculé ?

**NON — échec sur les trois termes du critère.** Voir le détail au relevé.

⚠⚠ **Mais l'interprétation ne peut pas être « les consignes ne fonctionnent pas ».** Les consignes de `/ia/` **n'ont pas été lues** — la question 1 le mesure sur les neuf réponses. **La question 2 ne teste donc rien : le levier n'a jamais été actionné.** Les questions 1 et 2 sont un seul et même résultat, et la 2 reste **ouverte** jusqu'à ce qu'un acheminement fonctionne.

*Détail sans valeur de recul* : la réponse APRÈS est plus courte et perd les lignes « → Livrable » de chaque étape, mais elle restitue les cinq étapes, ne donne aucune URL, et offre de faire le FAST à la place de l'équipe. L'offre de substitution a même changé d'objet sans changer de nature — « démarrer l'étape 1 » le 31/08, « faire le FAST de ton système » le 01/09.

### 3. ChatGPT rend-il encore un V à douze étapes ?

**NON. Le mode d'échec le plus coûteux du 31/08 a disparu**, et sur la seule cellule où il portait.

⚠⚠ **Le mécanisme a été départagé par la mesure, et une première rédaction de ce paragraphe concluait à l'envers.** Deux trajets étaient possibles :

- **(A) par la recherche** — l'assistant trouve `/conduite/proj/concept` dans un index, la fiche étant devenue trouvable là où celui du 31/08 écrivait n'avoir pas trouvé l'index du site. Le seul geste du 31/08 qui agisse sur un index est la soumission du sitemap et l'import Bing.
- **(B) par la racine** — mesuré sur `content/index.md` le 01/09 : la carte des cinq phases porte **`[[concept|Concept]]`**, un wikilink direct vers la fiche, et son introduction renvoie à `[[conduite/index]]`. **Un fetch de la racine donne le chemin en un clic.** C'est exactement le trajet écrit à la séance 15 — *« sur P2, la carte des cinq phases sur la racine aurait suffi en un fetch »*.

*L'argument avancé pour (A) — « la racine n'apparaît pas dans les sources de P2, alors qu'elle apparaît sur P1 et P3 » — est un **argument d'absence dans un champ dont l'écart 4 déclare qu'il n'est pas fiable**. Il incline, il ne tranche pas.*

✅✅ **(A) EST ÉLIMINÉ, (B) RESTE SEUL** — quatre requêtes d'index le 01/09, en navigation privée. `site:` sur `/conduite/proj/concept` : **zéro résultat sur Google, zéro sur Bing** ; une recherche Bing par mots-clés (`TheSkillCodex "dossier concept" architecture technique préliminaire`) ne la fait pas remonter non plus ; et l'**inspection d'URL en Search Console** répond que l'URL **n'est pas indexée et n'est pas connue de Google**. **La fiche n'est servie par aucun index, et ChatGPT l'a pourtant atteinte.** Le seul chemin disponible est la racine. *Corroboration : `site:` sur le domaine rend **deux** pages, la racine et `/ia/` — exactement les deux URL soumises à la main en inspection d'URL le 31/08.*

⚠ **La marge est plus mince que ça, et elle se refermera.** Bing a **récupéré le sitemap avec succès et découvert 485 URLs** (voir l'annexe des index) : *découvert n'est pas indexé*, et rien n'est servi aujourd'hui, mais le trajet (A) s'ouvrira dès que Bing indexera. **La mesure du 01/09 n'est pas rejouable** — c'est le seul endroit du dossier où attendre coûte quelque chose.

✅ **L'hypothèse de la séance 15 est donc CONFIRMÉE** : *« sur P2, la carte des cinq phases sur la racine aurait suffi en un fetch »*. Elle a suffi.

⚠⚠ **Ce que ça change à la lecture du chantier, et c'est le résultat le plus utile de la campagne après la question 1.** Un artefact posé sur la racine **a produit son effet, mesuré, sur le pire mode d'échec du 31/08**. Ce qui échoue n'est donc pas le principe « tout à un lien de distance » : c'est la **`description:` seule**. **Un lien dans le corps de la racine est suivi ; une adresse dans le front matter ne l'est pas.** *C'est exactement l'argument qui manquait au pointeur visible — on a maintenant la preuve des deux côtés.*

⚠ **Et la correction est par fiche indexée, pas par assistant.** Le même ChatGPT, sur P1, rend la **même contradiction qu'au 31/08** après avoir pourtant lu la racine ; et sur P3, il lit la racine, ne trouve aucun chemin vers `choisir-le-materiel`, et **demande le lien à l'étudiant**. *Une seule fiche du corpus a été atteinte par recherche, et c'est la seule cellule qui s'est corrigée.*

---

## Cinq faits, et ce qu'ils commandent

1. **Le dispositif automatique n'achemine personne vers `/ia/`.** 0 sur 9, 0 sur 3 sur ceux qui ont lu la racine, `llms.txt` sondé par personne. **La question du pointeur visible est tranchée par la mesure et rouverte au BACKLOG.**
2. **Un lien dans le CORPS de la racine est suivi ; une adresse dans le FRONT MATTER ne l'est pas.** La carte des cinq phases a corrigé le pire mode d'échec du 31/08 (question 3), la `description:` n'a rien acheminé (question 1). *Les deux artefacts ont été posés le même soir, sur la même page ; un seul est lu.*
3. **Deux URL du site sont refusées par Gemini, et ce sont les deux qui ont été soumises à l'index de Google** — dont la racine, la seule adresse que l'étudiant donne. Le contenu est hors de cause, mesuré. **Cela réinterroge l'arbitrage 6 de la séance 14 (« indexation oui »)**, dont l'extension étendrait la population refusée au lieu de la réduire.
4. **La substitution n'est pas testée.** Ni chez Claude, ni chez ChatGPT P2, qui substitue lui aussi maintenant qu'il a la matière. *Un dispositif qui rend le corpus trouvable sans rendre ses règles d'usage lisibles augmente la substitution : c'est ce que P2 montre des deux côtés.*
5. **Ni terme proscrit ni argument par le prix sur neuf réponses, pour la seconde campagne consécutive.** Le risque C71 ne s'est toujours pas matérialisé — dix-huit réponses, zéro occurrence.

---

## Annexe — le refus de Gemini, instruit hors campagne le 01/09

Neuf lectures hors grille, conversations neuves et jetables, **Gemini 3.1 Pro**, mémoire toujours coupée, même prompt neutre à chaque fois et jamais un mot sur le refus observé en campagne :

```
Peux-tu me résumer en trois phrases le contenu de cette page : <URL>
```

| # | URL | Index Google | Résultat |
|---|---|---|---|
| 1 | `microsoft.github.io/monaco-editor/` | — | **lit** |
| 2 | `quartz.jzhao.xyz/` | — | **lit** |
| 3 | `.../TheSkillCodex/conduite/proj/concept` | non | **lit**, résumé conforme à la trame |
| 4 | `.../TheSkillCodex/en/` | non | **lit**, résumé conforme |
| 5 | `.../TheSkillCodex/` | **oui** | **refuse** |
| 6 | `.../TheSkillCodex` (sans barre finale) | oui, après normalisation | **refuse** |
| 7 | `.../TheSkillCodex/ia/` | **oui** | **refuse** |
| 8 | `.../TheSkillCodex/?x=1` | non (chaîne inédite) | **lit**, résumé conforme |
| 9 | `.../TheSkillCodex/ia/?x=1` | non (chaîne inédite) | **lit**, et restitue les trois interdictions |

**Ce que la table élimine, une hypothèse par ligne.**
- **Le domaine `github.io`** — éliminé par 1.
- **L'outil de fetch indisponible** — éliminé par 1, 2, 3, 4.
- **Notre site** — éliminé par 3 et 4.
- **Le contenu de la page** — éliminé par **8 et 9** : GitHub Pages ignore le paramètre, **la même page exactement est servie**, et elle est lue. *La `description:` adressée aux assistants, les règles d'usage de `/ia/` et leur registre « on » sont hors de cause. La convention du 31/08 (séance 14) n'a pas à être amendée.*
- **Un cache d'échec par chaîne d'URL** — éliminé pour 7 : `/ia/` n'avait jamais été soumise à Gemini avant son refus.

**Ce qui reste, et qui explique les neuf lignes sans exception : le refus suit la chaîne d'URL, et la population refusée coïncide exactement avec les pages présentes dans l'index de Google** — la racine et `/ia/`, les deux soumises à la main en inspection d'URL le 31/08. Une variante normalisée (6) échoue ; une variante non normalisable (8, 9) passe.

⚠ **Le mécanisme interne n'est pas observable depuis le dépôt**, et l'état peut être transitoire — une page fraîchement soumise n'est pas dans le même état qu'une page établie. *Ce qui est établi : le refus n'a aucune cause dans le corpus, et le motif technique invoqué par Gemini est faux dans les trois formulations qu'il en donne.*

⚠⚠ **La conséquence porte sur un arbitrage rendu, pas sur une ligne de code.** Le refus tombe sur **la seule adresse que l'étudiant donne**, et les étudiants ont Gemini Pro par leur compte école. Si la corrélation avec l'index tient au rejeu, **étendre l'indexation étend la population refusée** : l'arbitrage 6 de la séance 14 est à rouvrir, avec la mesure sous les yeux.

---

## Annexe — l'état des index au 01/09, et une hypothèse qui unifie les deux anomalies

Relevé dans les consoles le 01/09 au matin, après les requêtes `site:`.

| | Google | Bing |
|---|---|---|
| Sitemap `.../TheSkillCodex/sitemap.xml` | **« Impossible de récupérer »** | **« Success », 485 URLs découvertes** |
| `site:` sur le domaine | **2** — la racine et `/ia/` | **0** |
| `site:` sur `/conduite/proj/concept` | 0 | 0 |
| Inspection d'URL sur la même | *non indexée, URL inconnue de Google* | — |

**Deux faits, et ils ne disent pas la même chose.**

✅ **Le sitemap n'est pas en cause** : Bing récupère sans peine le fichier que Google déclare impossible à récupérer, et y trouve les **485** URL attendues — le compte exact du `public/` mesuré à la séance 16. La déclaration XML posée au bloc A5 fait son travail. *« Impossible de récupérer » côté Google n'est donc ni un défaut de format, ni un défaut de contenu.*

⚠ **Découvert n'est pas indexé.** Bing connaît 485 URL et n'en sert aucune : `site:` à zéro, recherche par mots-clés à zéro. La conclusion de la question 3 tient donc **pour le 01/09** et **cessera d'être reproductible** dès que Bing indexera.

⚠⚠ **HYPOTHÈSE UNIFIANTE, réfutable, non vérifiable depuis le dépôt.** Deux anomalies du matin sont toutes deux du côté de Google, et une seule cause les expliquerait : **quelque chose empêche l'exploration côté Google.** Le sitemap n'est pas récupérable ; et **Gemini — produit Google — refuse exactement les deux URL que l'index de Google connaît**, en invoquant un blocage de robots, quand toutes les autres passent par un fetch direct qui fonctionne. *La corrélation « refusée ⇔ indexée » de l'annexe précédente serait alors le symptôme visible d'une même cause, et non un régime propre à Gemini.* **Elle se réfute au rejeu**, voir les prédictions ci-dessous.

### Prédictions pour le rejeu à J+7 (08/09), publiées avant mesure

1. **Sitemap Google : état « Réussite », 485 URLs découvertes.** *Réfutée* si l'état est encore « impossible de récupérer » — auquel cas ce n'est pas un délai de file mais un problème d'exploration, et **l'hypothèse unifiante gagne beaucoup**.
2. **Bing `site:` rend un nombre non nul.** *Réfutée* à zéro.
3. **Si la corrélation Gemini / index est causale, la population refusée s'étend.** Test nommé sur `/conduite/proj/concept` et `/en/`, qui **lisent au 01/09** : **refus de l'une des deux ⇒ causalité confirmée**, arbitrage 6 à trancher ; **lecture des deux avec un index Google élargi ⇒ la corrélation était un artefact**, et le dossier Gemini se referme.
4. **ChatGPT P2 atteindra `concept` par la recherche**, le trajet (A) redevenant possible. La conclusion de la question 3 restera vraie pour le 01/09 et **ne sera plus reproductible**.

---

## Ce qui reste ouvert

- **Gemini** : `P2` à rejouer seul à **J+7 (08/09)** et **J+21 (22/09)**, avec, au même moment, **le rejeu des lignes 5 et 7 de l'annexe** — c'est le seul moyen de savoir si le refus est un état transitoire d'indexation ou un régime stable.
- **L'arbitrage 6 de la séance 14 (« indexation oui »)** : à rouvrir au vu de l'annexe, une fois le rejeu J+7 fait.
- **L'hypothèse d'indexation de la question 3 est fermée pour le 01/09** (aucun index ne **sert** la fiche `concept`), mais elle **se rouvrira** : Bing a découvert 485 URL. La mesure de ce matin n'est pas rejouable.
- **Le sitemap côté Google** : « impossible de récupérer » au 01/09, quand Bing le lit sans peine. À relire à J+7, c'est la prédiction 1 de l'annexe des index.
- **Le pointeur visible en bas de racine** : à spécifier, avec son coût sur la lisibilité humaine et la règle « publié pour l'IA = publié pour tous ».
- **Claude P2 `SOURCES AFFICHÉES`** : cellule muette, à combler si la conversation est encore ouverte.
- **Rétablir les réglages de mémoire** sur les trois assistants, coupés pour cette campagne.
