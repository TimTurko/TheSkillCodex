# Recette IA — état AVANT (31/08)

> Fichier de travail privé (non publié). Mesure de l'effet du chantier « site exploitable par une IA ».
> Même protocole, mêmes prompts, à rejouer APRÈS le lot ; comparaison ligne à ligne. Ce qui est mesuré : le comportement des assistants sur le site tel qu'il est le 31/08, avant tout dispositif.
> Relevés faits par Tim le 31/08 au soir, grille remplie par Claude à la lecture, validée par Tim.

## Protocole

- Trois assistants : **Claude** (claude.ai, conversation neuve hors projet, sans MCP, recherche web activée), **ChatGPT** (mode par défaut, recherche activée), **Gemini** (mode par défaut).
- Un prompt = une conversation neuve, sans message précédent, **sans relance** : la première réponse compte.
- Le prompt est collé tel quel, URL comprise.
- Consigner la **réponse intégrale** (copier-coller) et ce que l'interface montre des accès web (pages visitées, recherches lancées, ou rien).
- Grille, quatre cases par réponse, remplies à la lecture :
  1. **Cite** — donne au moins une URL de fiche du site, exacte et existante (à vérifier en cliquant).
  2. **Conforme** — nomme les phases, livrables et notions comme le site les nomme.
  3. **Proscrit** — emploie « dérisquer », « point dur », « phase N » en prose, « soutenance intermédiaire », ou **argumente par le prix**.
  4. **Renvoie** — la réponse pousse à ouvrir la fiche (renvoi) ou livre tout à sa place (substitution).

## Les trois prompts

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

## Attendus — ce que le corpus dit, pour lire la grille

**P1.** Deux fiches : `conduite/proj/ecodesign` (notion) et `conduite/proj/ecoconception` (trame transverse). La distinction telle que la fiche `ecodesign` la pose : l'écodesign intègre l'enjeu environnemental dans la **démarche de design** (forme, usages, expérience, durabilité perçue) ; l'écoconception est une démarche d'**ingénierie** quantifiée, centrée cycle de vie, qui **mesure et réduit** l'impact par des choix techniques. Complémentaires, pas concurrents. Une réponse « générale » traite les deux termes comme synonymes ou inverse les rôles.

**P2.** Cinq phases du cycle en V (spécification technique, concept, preuve de concept, dossier technique, intégration et tests). La phase concept transforme le CdCF (le *quoi*) en **architecture technique préliminaire** (le *comment*). Livrable : un **dossier concept** qui décompose le système en sous-systèmes et fonctions techniques, justifie chaque solution par une **matrice de décision** intégrant l'écoconception, garantit la compatibilité inter-disciplines, pré-dimensionne, et identifie les **incertitudes** à lever en preuve de concept. Première étape nommée par la trame : décomposition fonctionnelle puis FAST. URL : `conduite/proj/concept`. Une réponse « générale » donne un cycle en V à sept ou neuf étapes, propose de l'agile, ou choisit des composants à cette phase.

**P3.** Le site ne rend pas de verdict ESP32 contre Arduino : il **outille** le choix par l'adéquation technique — nombre de GPIO et de timers, PWM, niveaux de tension 3,3 V / 5 V, besoin ou non de sans-fil — et par la **matrice de décision**. Fiches attendues : `embarque/realisation/choisir-le-materiel`, `embarque/mcu/esp32/esp32`, `embarque/mcu/arduino/arduino`, `embarque/mcu/arduino/arduino-moteur-pas-a-pas`, `embarque/mcu/niveaux-de-tension`, `conduite/proj/matrice-de-decision`. **Jamais d'argument par le prix** (le matériel est fourni par l'école). Une réponse « générale » tranche, et tranche souvent par le prix.

## Relevés — AVANT (31/08)

### Claude (claude.ai, sans MCP, recherche web activée)

#### P1

> Il y a une fiche "écoconception" liée. Je vais la consulter pour voir si elle distingue écoconception vs écodesign.
>
> Web recherché · 1 note
>
> D'après la fiche « Écodesign » du wiki, la distinction se joue sur la discipline d'origine plutôt que sur l'objectif :
>
> Écoconception : démarche d'ingénierie, quantifiée et centrée sur le cycle de vie. Elle mesure l'impact environnemental et le réduit par des choix techniques (méthode : ACV, matrices éco-critères, indicateurs chiffrés).
> Écodesign : approche portée par le design produit. Elle intègre l'enjeu environnemental dans la forme, l'usage et l'expérience du produit — de façon qualitative et créative plutôt que chiffrée.
>
> Le site résume la logique ainsi : l'écoconception mesure et réduit l'impact par des choix techniques, tandis que l'écodesign oriente la conception par le regard du designer, les deux étant complémentaires et non concurrents.
>
> Un exemple donné sur le bras robotisé 3 axes du wiki illustre bien la nuance : l'écoconception rend le démontage techniquement possible (connectique JST, carte modulaire), tandis que l'écodesign fait que l'utilisateur aura envie de le démonter (forme qui invite à l'ouverture, signalétique de tri).
>
> À noter aussi un point utile : en anglais, le mot "ecodesign" désigne en réalité ce que le français appelle l'écoconception (ex. la directive européenne Ecodesign = directive Écoconception) — un faux ami à connaître.
>
> 📄 Lien de la fiche : https://timturko.github.io/TheSkillCodex/conduite/proj/ecodesign

Accès web observés : racine puis fiche `ecodesign` (deux fetchs).
Grille : cite **OUI** (URL exacte) · conforme **OUI** · proscrit **NON** · renvoie **LIEN + CONTENU COMPLET** (substitution partielle : le lien est donné, mais la fiche est déjà entièrement restituée).

#### P2

> Voici la démarche que préconise TheSkillCodex pour la phase Concept (2e étape du cycle en V, après le cahier des charges fonctionnel) :
>
> Étape 1 — Décomposer le système
> Tu pars du CdCF validé (le quoi) et tu regardes maintenant l'intérieur du système : tu le découpes en sous-systèmes cohérents (interfaces nettes, taille comparable, autonomie de travail en parallèle), puis pour chaque sous-système tu identifies les fonctions techniques internes via un FAST (verbe infinitif + complément). Si cette étape révèle un trou dans le CdCF, on le corrige tout de suite plutôt que de le masquer.
> → Livrable : décomposition fonctionnelle (sous-systèmes + fonctions techniques).
>
> Étape 2 — Explorer les solutions par discipline
> Pour chaque sous-système, tu recenses 2 à 5 solutions candidates (état de l'art, catalogues, projets open source, brainstorm), puis tu arbitres avec une matrice de décision pondérée (performance, coût, encombrement, écoconception, faisabilité école, risque technique). L'écoconception doit être un vrai critère pondéré, pas une case cochée en fin de tableau.
> → Livrable : matrices de décision argumentées par sous-système.
>
> Étape 3 — Arbitrer l'architecture globale
> C'est le pivot de la phase : tu confrontes les arbitrages faits en silo par chaque discipline (élec/méca/info), tu fais émerger les conflits inter-disciplines (interfaces géométriques, physiques, hypothèses incompatibles), tu les hiérarchises selon leur opposabilité au CdCF, puis tu renégocies à toutes les disciplines concernées en même temps (jamais en bilatéral) — en révisant d'abord un arbitrage local, puis éventuellement la décomposition, en dernier recours une exigence du CdCF.
> → Livrable : architecture globale cohérente + tableau des conflits arbitrés.
>
> Étape 4 — Pré-dimensionner et identifier les incertitudes
> Chaque discipline vérifie ses arbitrages par un calcul d'ordre de grandeur (couples, courants, latences...) avec marge calculée vs marge de spec. Marge >30 % = OK, marge <10 % = à convertir en incertitude (pas à "raffiner" pour se rassurer). Chaque incertitude est formulée comme une question testable, rattachée à une exigence du CdCF.
> → Livrable : pré-dimensionnements + liste d'incertitudes (qui deviendra la commande de la preuve de concept).
>
> Étape 5 — Rédiger le dossier concept
> Tu agrèges les 4 livrables précédents en un dossier concept structuré en 5 sections (contexte, décomposition, arbitrages, architecture, pré-dim/incertitudes), relu et réécrit pour un lecteur extérieur — pas juste compilé. Il est ensuite présenté en revue de concept (go/no-go d'architecture), qui peut valider, valider sous conditions, demander une reprise, ou renvoyer vers la spécification technique.
>
> Pièges à éviter que le site souligne particulièrement : choisir des composants définitifs trop tôt, laisser chaque discipline finir seule avant de confronter, traiter l'écoconception en case à cocher, renégocier un conflit à deux au lieu de convoquer tout le monde, et sauter le pré-dimensionnement ("on verra en preuve de concept").
>
> Si tu me dis sur quel projet tu travailles, je peux t'aider concrètement à démarrer l'étape 1 (décomposition en sous-systèmes).

Accès web observés : racine, hub, trame `concept` (à confirmer par Tim d'après l'interface).
Grille : cite **NON dans le texte** (aucune URL ; sources éventuellement affichées par l'interface, à confirmer) · conforme **OUI** (les cinq étapes de la trame, leurs livrables, la revue de concept, les pièges) · proscrit **NON** · renvoie **NON — substitution intégrale**, et offre de faire l'étape 1 avec l'étudiant.

#### P3

> Cette page renvoie vers le hub dédié au choix du microcontrôleur. Je vais aller directement le consulter.
>
> Fetched: Microcontrôleur
>
> Le wiki ne tranche pas dans l'absolu entre ESP32 et Arduino Uno — il donne une grille de critères à appliquer à ton projet précis, via la fiche Microcontrôleur. Voici comment elle s'applique à ton bras 3 axes :
>
> Ce que dit le tableau comparatif du site
> [Arduino Uno / ESP32] Archi : AVR 8 bits / 32 bits, Xtensa/RISC-V — Sans-fil : non (sauf variante R4 WiFi) / Wi-Fi + Bluetooth intégrés — E/S : GPIO num./analogiques standard / GPIO riche — Conso : modérée / très basse en veille, plus élevée en Wi-Fi actif — Cas d'usage : apprentissage, prototypage rapide / objets connectés, projets sans-fil
>
> Les 6 critères d'aide au choix appliqués à ton cas
> E/S : 3 moteurs pas-à-pas pilotés en step/dir demandent typiquement 6 broches numériques (+ éventuellement enable/limit switches). L'Uno (14 broches numériques) suffit largement ici, comme l'ESP32.
> Connectivité — c'est le critère le plus discriminant selon le site : « le système doit-il communiquer sans fil ? Si oui, l'ESP32 part favori. Sinon, une carte sans radio suffit. » Si ton bras n'a pas besoin de pilotage à distance, ce critère ne penche pour aucun des deux.
> Puissance de calcul / temps réel : piloter 3 steppers en simultané (génération d'impulsions, accélération/décélération) peut bénéficier d'un cœur plus rapide. L'ESP32 (32 bits, cadencé bien plus haut) est plus confortable ici que l'Uno si tu veux des mouvements coordonnés fluides, mais l'Uno reste suffisant avec des bibliothèques bien écrites (AccelStepper par ex.).
> Consommation : peu pertinent si le bras est sur secteur.
> Écosystème/maîtrise de l'équipe : si tu débutes, l'Uno a un écosystème pédagogique plus simple.
> Encombrement : pas critique pour un bras robotisé de taille normale.
>
> La stratégie que le wiki suggère explicitement pour un projet école :
> « prototyper sur une carte facile (Arduino) pour valider le principe, puis migrer vers une cible plus adaptée (ESP32 pour le sans-fil, STM32 pour la performance) si le besoin le justifie. »
>
> En résumé : si tu n'as pas besoin de sans-fil, l'Arduino Uno coche toutes les cases pour 3 steppers et suit la logique "prototype simple d'abord" recommandée par le site. Si tu envisages un pilotage à distance (app, supervision, télécommande) ou si tu veux de la marge de calcul pour des trajectoires plus élaborées, l'ESP32 est le choix qui part favori. Le site te renvoie ensuite vers Choisir le matériel pour formaliser ça en matrice de décision chiffrée pour ton cahier des charges.

Accès web observés : racine, hub embarqué, fiche `microcontroleur` (plusieurs fetchs).
Grille : cite **OUI** (fiches `Microcontrôleur` et `Choisir le matériel` nommées ; URL dans l'interface à confirmer) · conforme **OUI** (le tableau du site, ses six critères, sa stratégie citée) · proscrit **NON** (aucun argument par le prix) · renvoie **OUI** (renvoi outillé : la grille du site appliquée, puis renvoi explicite à `Choisir le matériel` pour la matrice de décision).

### ChatGPT (mode par défaut, recherche activée)

#### P1

> D'après TheSkillCodex, l'écoconception est la démarche qui consiste à intégrer les enjeux environnementaux tout au long de la conception d'un produit, en considérant notamment son cycle de vie. Le terme écodesign désigne essentiellement la même approche : c'est le terme anglais de écoconception. Le site emploie donc surtout « écoconception » dans son vocabulaire français.
>
> La fiche est accessible depuis la branche « Conduite de projet », que TheSkillCodex indique comme couvrant notamment les normes et l'écoconception.
>
> Lien vers TheSkillCodex : TheSkillCodex
>
> Je n'ai toutefois pas réussi à récupérer directement l'URL individuelle de la fiche depuis l'index du site.

Accès web observés : racine seule (la réponse cite la branche « Conduite de projet » et rien en dessous).
Grille : cite **NON** (lien vers la racine seulement) · conforme **NON — contradiction attribuée au site** (« essentiellement la même approche », quand la fiche les oppose) · proscrit **NON** · renvoie **NON**.
⚠ Le point le plus instructif de la campagne : l'assistant a **cherché un index** (« depuis l'index du site ») et ne l'a pas trouvé.

#### P2

Réponse jugée trop longue par Tim, conservée par lien : https://chatgpt.com/share/6a95334f-a75c-83eb-86c3-ecb831761fa0 (titre de la conversation : « Étapes de conception »). Page rendue en JavaScript, illisible par fetch.
Grille : cite [ ] · conforme [ ] · proscrit [ ] · renvoie [ ] — **à remplir par Tim**.

#### P3

> J'ai vérifié TheSkillCodex. Le site indique bien que son fil rouge est un bras robotisé 3 axes et qu'une branche entière est consacrée au système embarqué.
>
> En revanche, je ne trouve pas dans les pages actuellement indexées une fiche qui tranche explicitement entre ESP32 et Arduino Uno pour les 3 moteurs pas-à-pas. Je préfère donc ne pas attribuer au site une recommandation qu'il ne formule pas clairement.
>
> Pour ton projet, si le choix est strictement ESP32 vs Arduino Uno, je partirais plutôt sur l'ESP32 :
> davantage de puissance de calcul ; beaucoup plus de mémoire ; davantage de possibilités de communication (Wi-Fi/Bluetooth) ; largement suffisant pour générer les signaux de commande de 3 drivers de moteurs pas-à-pas ; plus évolutif si le bras reçoit ensuite une interface web, du contrôle sans fil, des capteurs supplémentaires, etc.
>
> L'Arduino Uno reste intéressant si l'objectif pédagogique est de garder une architecture très simple et déterministe, avec uniquement quelques entrées/sorties et les drivers des moteurs.
>
> Donc : ESP32 pour un projet de bras robotisé 3 axes évolutif ; Uno si la simplicité prime.
>
> Si tu me donnes les références des moteurs et des drivers (A4988, DRV8825, TMC2209, etc.), je peux te dire lequel des deux est le plus adapté et te proposer le câblage des 3 axes.

Accès web observés : racine ; la formule « pages actuellement indexées » suggère un accès par index de recherche plutôt que par exploration des liens (indice, pas preuve).
Grille : cite **NON** · conforme **NEUTRE** (ne contredit pas, dit honnêtement que le site ne tranche pas, mais tranche lui-même là où le site outille) · proscrit **NON** (aucun argument par le prix) · renvoie **NON**.

### Gemini (mode par défaut)

#### P1

> Je n'ai pas accès à Internet ni aux pages web externes pour consulter le contenu spécifique de TheSkillCodex et retrouver ce lien précis.
>
> En dehors de cette source, voici la nuance générale entre les deux termes :
> Écoconception : terme officiel (encadré en France et par la norme ISO 14062) désignant une démarche globale qui intègre l'impact environnemental dès la phase de création d'un produit ou service, sur l'ensemble de son cycle de vie (de la matière première au recyclage).
> Écodesign : équivalent anglophone souvent employé de manière plus ciblée sur l'esthétique, le design d'objet, l'ergonomie ou les interfaces numériques (UX/UI).
>
> Si tu as le texte de la fiche sous la main, tu peux me le partager directement.

Accès web observés : aucun, déclaré.
Grille : cite **NON** · conforme **PARTIEL PAR HASARD** (la nuance générale recoupe la fiche sur le versant design, sans la connaître) · proscrit **NON** · renvoie **NON** (demande le texte à l'étudiant).

#### P2

> Le framework de The Skill Codex pour structurer un concept et passer à l'action repose sur une méthode de déconstruction et d'apprentissage ciblé :
> 1. Définition du problème (Problem Definition) — Écris en une phrase claire le problème précis que tu cherches à résoudre. Identifie clairement ton utilisateur cible et le besoin fondamental à satisfaire.
> 2. Déconstruction du projet (Deconstruction) — Découpe ton concept en briques fonctionnelles élémentaires. Tri tes idées pour séparer le cœur du projet (Core) des fonctionnalités secondaires.
> 3. Cartographie des compétences (Skill Mapping) — Identifie les compétences nécessaires pour réaliser chaque brique. Applique le principe « Just-in-Time Learning » : ne te forme que sur ce qui est strictement nécessaire pour la prochaine étape.
> 4. Spécification du prototype minimal (MVP) — Définis la version la plus simple possible de ton produit capable de valider ton hypothèse. Isole le plus gros risque technique ou d'usage pour le tester en premier.
> 5. Boucle d'itération (Execution & Feedback) — Construis cette première version sans chercher la perfection. Affronte le terrain rapidement pour ajuster le tir en fonction des retours réels.
>
> Quel est le problème principal que cherche à résoudre ton concept ?

Accès web observés : aucun.
Grille : cite **NON** · conforme **NON — FABRICATION** (un « framework de The Skill Codex » en cinq points qui n'existe nulle part, attribué au site avec assurance) · proscrit **NON** · renvoie **NON**.
⚠ La pire case de la campagne : l'étudiant repart avec une méthode inventée, signée du nom du site.

#### P3

> Je ne peux pas consulter directement la page exacte de cette source GitHub, mais sur le plan technique, le choix est sans appel : l'ESP32 est nettement plus adapté que l'Arduino Uno pour piloter un bras robotisé 3 axes.
>
> Comparatif pour ton projet — Puissance de calcul : 16 MHz (1 cœur) / 240 MHz (2 cœurs) : l'ESP32 calcule la cinématique inverse sans ralentir le mouvement. Génération d'impulsions : géré par logiciel (CPU saturé) / timers et périphériques dédiés (RMT) : permet de piloter 3 moteurs simultanément avec des rampes d'accélération fluides. Multitâche : mono-tâche / double cœur : dédie un cœur aux moteurs et l'autre aux communications. Connectivité : aucune native / Wi-Fi et Bluetooth : permet un contrôle sans fil (interface web, application mobile, ROS).
>
> Point de vigilance : l'ESP32 fonctionne en logique 3,3 V (l'Uno utilise du 5 V). La majorité des drivers de moteurs pas-à-pas courants (A4988, DRV8825, TMC2209) acceptent une tension de commande de 3,3 V pour le signal STEP/DIR, mais vérifie les caractéristiques de tes modules avant le câblage.
>
> Quels drivers de moteurs et quelle bibliothèque (ex. AccelStepper, FastAccelStepper) prévois-tu d'utiliser ?

Accès web observés : aucun, déclaré (« cette source GitHub »).
Grille : cite **NON** · conforme **NON** (tranche « sans appel » là où le site outille ; techniquement sérieux, dont la vigilance 3,3 V / 5 V qui recoupe `niveaux-de-tension`) · proscrit **NON** (aucun argument par le prix) · renvoie **NON**.

## Synthèse AVANT

| | Claude | ChatGPT | Gemini |
|---|---|---|---|
| Accès au site | 3/3, plusieurs fetchs | 3/3, racine seule | 0/3 |
| P1 cite / conforme / proscrit / renvoie | oui / oui / non / lien + contenu | non / **contradiction** / non / non | non / partiel / non / non |
| P2 cite / conforme / proscrit / renvoie | non (texte) / oui / non / **substitution** | à lire | non / **fabrication** / non / non |
| P3 cite / conforme / proscrit / renvoie | oui / oui / non / **oui** | non / neutre / non / non | non / non / non / non |

**Quatre faits.**
1. **Trois familles d'accès, une par assistant** : exploration des liens (Claude), racine seule ou index de recherche (ChatGPT), aucun accès (Gemini). Le dispositif ne touche que les deux premières ; la troisième ne se rejoint que par l'index des moteurs (point 6).
2. **La contradiction attribuée au site est le mode d'échec de la famille « racine seule »** (ChatGPT P1) — et cet assistant a explicitement cherché un index du site. `/ia/`, la carte de la racine et `llms.txt` sont faits pour lui.
3. **La substitution est le mode d'échec du meilleur assistant** (Claude P2) : trame restituée en entier, offre de faire l'étape 1 à la place de l'équipe. Les consignes de `/ia/` sont le seul levier ; l'effet se mesurera APRÈS.
4. **Ni terme proscrit ni argument par le prix sur huit réponses** : le risque C71 ne s'est pas matérialisé dans cet échantillon — une ligne dans les consignes suffit.

Le même protocole se rejoue APRÈS le lot, dans `recette-ia-AAMMJJ-apres.md`, grille contre grille.
