- **Une exemption MUETTE n'est pas une exemption, c'est une perte — et un
  chantier dont le périmètre vit dans une exemption ne peut pas se chiffrer
  tant qu'elle se tait.**
  *Née le 30/08 (séance 12), correctif #10, sur l'entrée de la file
  d'arbitrages qui bloquait le chantier des puces à tiret.* `exemptions()` de
  `creer-fiche-en.mjs` rangeait le premier tiret d'une puce en « glose de
  liste » et `styleFiche()` faisait `continue` dessus : l'occurrence n'était
  **ni comptée, ni affichée, ni rangée hors périmètre — elle disparaissait**.
  ⚠ *Le code portait déjà la bonne règle **dix lignes plus bas**, sur la garde
  d'intervalle numérique : « L'exemption sort en hors-perimetre et non en
  silence, comme les alt et les tableaux : elle reste comptée, donc
  mesurable. » **Deux exemptions voisines, deux régimes opposés, et c'est celle
  qui portait le chantier qui était muette.***
  ✅ **Le correctif est de trois lignes et il rend un périmètre** : la catégorie
  `glose-liste`, exclue du détail par fiche et du code de sortie, **comptée et
  affichée**. **FR 2 553 gloses / EN 2 506**, dont **1 389 / 1 378** en section
  de liens (cas 1, hors périmètre) et **1 164 / 1 128** de périmètre réel sur
  **178 / 173** fichiers.
  ⚠ **Règle générale qui en sort** : *une exemption se publie dans un seau
  nommé, jamais par un `continue`. Le test est mécanique — si retirer la règle
  d'exemption change un compteur affiché, l'exemption parle ; si elle n'en
  change aucun, elle est muette et il faut la faire parler avant de s'appuyer
  dessus.* *Éprouvée 1/N.*
- **Une référence appelée « borne haute » n'en est une que si son prédicat
  couvre la population de la règle qu'elle borne — et celle du chantier des
  puces MINORAIT de 24 %.**
  *Née le 30/08 (séance 12), sur la mesure que le correctif #10 débloque.* Le
  BACKLOG et le brief présentaient `puces-tiret.mjs --corpus` motif A —
  **FR 937 puces / 166 porteuses / 248 fichiers** — comme un plafond du
  chantier. **Le périmètre mesuré vaut FR 1 164 et EN 1 128, contre 937 et 902 :
  +227 et +226, soit +24,2 % et +25,1 %.**
  ✅ **La décomposition se referme au chiffre dans les deux langues, et son
  premier terme n'est pas une subtilité de typographie** : **193 FR et 183 EN
  items de LISTE NUMÉROTÉE**, que le prédicat `PUCE = /^\s*[-*]\s/` du motif A
  **ne peut pas voir** — quand l'amendement C109 du 29/08 (suite 8) ne
  distingue nulle part la puce de l'item numéroté. Le reste, sur les puces
  seules : **39 par langue** logées dans un **blockquote** (`^\s*[-*]\s` ne
  franchit pas un `>`), **4 par langue** de gloses au **demi-cadratin**, **0**
  de cadratin non entouré d'espaces, **moins 9 FR** de lignes de commentaire
  HTML de gabarit que le motif A compte à tort — *et l'asymétrie 9 / 0 tient à
  ce que `content/en/` ne porte aucun gabarit.*
  ⚠ **Ce que la règle demande** : *avant de citer une référence comme borne,
  lire le prédicat qui l'a produite et vérifier qu'il couvre la population de
  la règle — pas seulement qu'il est plus strict.* **Un prédicat plus strict
  sur une population plus étroite ne borne rien.** *Éprouvée 0/N.*
- **Un filtre écrit comme une recherche de SOUS-CHAÎNE attrape les outils qui
  portent le nom de ce qu'ils filtrent.**
  *Née le 30/08 (séance 12), sur une prédiction réfutée et un chiffre publié
  sans mesure.* Le compteur `hors artefacts de seance` de `batterie.ps1`
  écarte toute ligne portant `batterie-sortie` **ou** `predictions-`.
  **`tools/coupe-predictions-3008s12.mjs` et
  `tools/coupe-predictions-dry-3008s12.txt` la portent** : un **outil** et un
  **relevé** disparaissent du compteur qui existe pour voir les outils.
  ⚠ *La déclaration C131 du bloc qui les a créés **nommait le filtre en toutes
  lettres**, à propos d'un troisième fichier, sans le rejouer sur ces deux-là ;
  et le bilan du même bloc a publié `6 hors artefacts` **sans les mesurer**,
  quand le chiffre juste était 4. **C118 pris en défaut dans une phrase dont le
  premier terme, lui, était mesuré.***
  ✅ **Deux règles pratiques** : *(1) un outil qui opère **sur** le fichier de
  prédictions ne se nomme pas `coupe-predictions-…` — le filtre ne distingue
  pas l'objet de l'instrument ; (2) les deux termes d'une ligne « total (hors
  X) » se mesurent **tous les deux**, jamais l'un mesuré et l'autre reporté de
  la déclaration.* *Éprouvée 0/N.*
- **Un échantillon C110 construit sur la famille à DEUX fautes rate la famille
  à UNE — et l'écart part dans le seau qu'on ne regardait pas.**
  *Née le 30/08 (séance 12), correctif #10, sur la seule réfutation de fond du
  bloc.* L'échantillon nommé était les **quatre** lignes du corpus où un
  **intervalle numérique précède** une glose : deux fautes en sens contraire
  sur la même ligne, le cas le plus riche. **Prédit : `hors perimetre` +2 par
  langue. Mesuré : +9.** *Les sept manquantes sont les puces dont l'intervalle
  est le **seul** tiret : muettes avant, `hors-perimetre` après.*
  ⚠ **C'est la règle du 30/08 (séance 10) rejouée à l'identique** — *« quand un
  raisonnement écarte un cas d'une passe, il faut le rejouer sur chaque membre
  de la même classe »* — **appliquée cette fois à un échantillon et non à une
  table** : l'échantillon a été choisi pour sa richesse, et la richesse est
  précisément ce qui le rend non représentatif de sa classe.
  ✅ *Ce qui a marché : la cause a été **mesurée** — 9 lignes par langue, 2 avec
  glose et 7 sans, nominatives — au lieu d'être plaidée, et la symétrie FR/EN
  parfaite est elle-même un contrôle.* **Formulation** : *un échantillon C110
  se choisit pour faire mordre le motif à tort **et** se complète du cas le
  plus PAUVRE de la même classe, parce que c'est lui qui dit ce que le motif
  fait quand il n'a qu'un seul indice.* *Éprouvée 0/N, contre elle.*
- **Un contrôle d'intégrité se borne à l'OBJET qu'il prétend garder, jamais à
  la région qui le contient.**
  *Née le 30/08 (séance 12), coupe C128, sur une prédiction qui se réfute par
  lecture de son propre énoncé.* P151.14 annonçait que « les octets compris
  entre `<!-- INSERT_JOURNAL_HERE -->` et le pied » seraient identiques avant et
  après la coupe. **Cette plage porte 58 entrées avant et une seule après :
  elle ne *peut* pas être identique**, et la mesure rend `753825` contre
  `13432`. *Aucune mesure n'était nécessaire pour voir la faute.*
  ✅ **Le contrôle rejoué correctement borne l'entrée par son propre titre et
  par le titre suivant** : **13 429 octets des deux côtés, identiques**, et le
  bloc déplacé — **740 390 octets** — se retrouve **verbatim** dans l'archive.
  *Une plage bornée par une ancre de fichier mesure le fichier, pas l'entrée.*
  *Éprouvée 0/N, contre elle.*
- **Un bloc qui lance un outil en `--dry` VERSE la sortie du `--dry`, et sa
  déclaration C131 doit la porter.**
  *Née le 30/08 (séance 12), coupe C128.* La déclaration du bloc 150 nommait
  trois artefacts et n'a pas prévu la **copie C124 de la sortie `--dry`** —
  sortie qui est par construction « destinée à comparaison » avec celle de la
  passe live. *Le compteur d'entrées est tombé juste, parce que la sortie avait
  été écrite hors arbre par commodité : le défaut n'est pas un écart de
  comptage, c'est une **anticipation manquante**.* **`--dry` n'écrit rien dans
  les fichiers cibles ; il n'écrit pas rien tout court.** *Éprouvée 0/N.*

