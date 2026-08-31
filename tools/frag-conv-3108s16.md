- **Une prédiction de `git diff --numstat` se compte sur les lignes que GIT
  COMPARE, jamais sur le geste d'édition.**
  *Née le 31/08 (séance 16), trois réfutations de la même forme dans la même
  séance.* L'amendement du 30/08 à la sous-règle C116 exige qu'une prédiction
  de compteur se publie sous la forme de la **ligne exacte** attendue, et il
  donne pour motif qu'on ne peut pas l'écrire sans avoir ouvert le code. Sur
  un `numstat`, cela ne suffit pas : **il faut aussi savoir ce que git compte**.
  Trois cas, trois causes distinctes et un seul défaut de méthode :
  (1) `tools/creer-fiche-en.mjs` prédit `11 0`, sorti **`12 0`** — j'avais
  compté la ligne vide d'**ouverture** de mon insertion et oublié celle de
  **fermeture** ; *une ligne vide est une ligne* ;
  (2) `tools/compter-mots.mjs` prédit `13 2`, sorti **`12 1`** — j'avais compté
  « deux lignes remplacées par trois », alors que la première des deux est
  **identique** et **sort du hunk** ; *git ne compare pas des blocs, il compare
  des lignes* ;
  (3) `hubNomme` prédit à 2 occurrences, sorti **3** — « une déclaration, un
  appel » oubliait le `.set()` de la boucle d'inventaire.
  ✅ **Règle** : *avant de publier une prédiction de `numstat`, écrire la
  décomposition **ligne à ligne du texte final**, ajoutées et retirées
  séparément, et vérifier que chaque ligne conservée à l'identique en est
  exclue.* ⚠ *Le corollaire vaut aussi pour l'autre sens* : les prédictions de
  `numstat` **cumulées depuis HEAD** — `content/en/index.md` à `15 1`,
  `content/en/conduite/index.md` à `3 2` — ont toutes deux tenu, parce que
  leur décomposition était écrite en termes de lignes et non de gestes.
  *Éprouvée 0/N.*

- **Une page bilingue sort de TOUS les contrôles de la zone anglaise, et la
  perte est silencieuse.**
  *Née le 31/08 (séance 16), à la pose de `content/ia/index.md`.* La page
  porte son bloc anglais sous `<section lang="en">` **dans le fichier
  français**, ce qui est exactement ce que la décision de Tim du 31/08
  demandait — une page unique, une seule adresse, un seul entretien. **Prix
  non chiffré au cadrage** : tous les contrôles du chantier de traduction
  balaient `content/en/`, et **aucun ne voit ce texte**. `--controle` (les
  trois compteurs), `--style` (C109 et typographie), `--alt`, `--libelles`,
  `derive-traduction` (empreinte de source) et `compter-mots --paires`
  (foisonnement) itèrent tous sur la zone anglaise. **Le seul anglais publié
  du dépôt qui n'a jamais été mesuré est celui de la page qui explique le
  dépôt aux machines.** ✅ **Règle** : *toute page qui déclare `bilingue: true`
  se relit à la main, à sa rédaction et à chaque retouche, et le déclare —
  aucun instrument ne la couvre.* ⚠ *L'exemption `bilingue: true` posée au
  bloc C2 referme la **population** des compteurs ; elle ne crée **aucun**
  contrôle sur le texte exempté. Exempter n'est pas contrôler.*
  *Éprouvée 0/N.*

- **Une spécification qui présuppose une structure du corpus se vérifie SUR LE
  CORPUS avant d'être codée.**
  *Née le 31/08 (séance 16), défaut trouvé en relisant une sortie et absent de
  toute prédiction.* Le § 8 du cadrage disait, pour `llms.txt` : « groupées par
  dossier FR (**titre du `index.md` du dossier**) ». Codé à la lettre, il rend
  **dix-sept en-têtes sur vingt-quatre en chemin brut** — `## embarque/mcu/arduino`,
  `## embarque/pcb` — parce que **dix-sept des vingt-quatre dossiers FR n'ont
  pas d'`index.md`** : C18 y loge un **hub en fichier nommé** (`<theme>.md`),
  précisément pour que `[[theme]]` résolve par nom. *La spécification décrivait
  une structure que le corpus n'a pas, et rien ne l'a arrêtée : les prédictions
  du bloc portaient sur le nombre de paires et la taille du fichier, pas sur la
  lisibilité de ce qui est écrit.* ✅ **Règle** : *une spécification qui nomme
  un fichier, un champ ou une convention de nommage comme source de données se
  paie une mesure de couverture avant d'être codée — « combien de cas la
  règle atteint-elle », et pas seulement « la règle est-elle juste ».*
  ⚠ *Le repli posé (hub nommé de C18) en résout **dix** ; les **sept** derniers
  ont un hub dont le nom n'est pas celui du dossier — `microcontroleur` pour
  `mcu`, `bus-de-communication` pour `bus` — et aucune règle mécanique ne les
  attrape. Ils gardent leur chemin, et c'est écrit au BACKLOG plutôt que codé
  en dur.* *Éprouvée 0/N.*

- **Avant d'ouvrir un arbitrage sur ce qu'un outil VA signaler, lire ce que
  l'outil COMPTE.**
  *Née le 31/08 (séance 16), sur un arbitrage annoncé qui n'avait pas d'objet.*
  Le brief de séance portait : « l'orpheline attendue : `/ia/` n'a aucun lien
  entrant, `audit-wikilinks` la signalera — exemption nommée ou acceptation à
  trancher en séance ». **Lecture du code faite avant d'arbitrer** :
  `audit-wikilinks.mjs` indexe des **cibles de wiki-liens** et les range en
  MORT / CASSE / AMBIGU / GABARIT / ALIAS / OK. **Une page sans lien entrant
  n'est la cible de rien : elle n'entre dans aucun seau, et l'outil ne peut pas
  la voir.** Mesuré après la pose de la page : `MORT 0`, `CASSE 0`, code 0.
  *Il n'y avait donc ni exemption à écrire, ni décision à rendre.* ✅ **Règle** :
  *une question de la forme « l'outil X va signaler Y, faut-il l'exempter ? »
  se referme en ouvrant le code de X, jamais en délibérant sur Y.* ⚠ *C'est
  C116 (7) — un compteur se lit dans le code qui l'incrémente — portée d'un
  chiffre à un **arbitrage** : la même erreur coûtait un nombre faux, elle
  coûte ici une décision inutile et une exemption qui aurait pollué un outil
  pour rien.* *Le seul instrument qui nomme une page FR sans jumelle est
  `derive-traduction --manquantes`, sous le titre `ORPHELINE`, et il n'est pas
  bloquant.* *Éprouvée 0/N.*

- **« La fin de ligne d'un fichier » n'existe pas toujours : l'unité est la
  ligne d'ancre.**
  *Née le 31/08 (séance 16), à la préparation de la passe `lang: en`.* La
  consigne de bloc disait « fin de ligne **relue par fichier** ». Le corpus
  porte un fichier **mixte** — `content/en/conduite/proj/fonction-en.md`,
  **33 CR pour 49 LF** — sur lequel « la » fin de ligne du fichier n'a pas de
  valeur. L'outil de passe relit donc la fin de ligne **sur la ligne d'ancre
  elle-même** (le `\r` résiduel après un `split('\n')`), seule unité où la
  question ait un sens. *Mesuré ensuite : les 242 ancres sont en LF, le delta
  est de 9 octets par fiche, `+2178` au total, prédit avant écriture.*
  ✅ **Règle** : *une passe qui insère une ligne lit la fin de ligne de la
  ligne qu'elle suit, jamais une fin de ligne « du fichier » — un corpus édité
  sur deux postes en porte au moins une exception.* *Éprouvée 0/N.*

