- **Le protocole de prédiction tient à 97 % sur ses INSTRUMENTS et à 42 % sur
  son OBJET, et les deux chiffres ne veulent pas dire la même chose.**
  *Née le 30/08 (séance 11), première séance du dépôt qui ne soit pas un lot.*
  Les 66 prédictions de la séance se coupent en deux populations que quinze
  séances n'avaient jamais séparées : **prédictions d'instrument** — ce qu'un
  outil va imprimer, ce qu'un `git status` va porter, ce qu'un contrôle croisé
  va refermer — **35, dont 34 tenues (97,1 %)**, l'unique réfutée portant sur
  la taille d'un diff ; **prédictions de monde** — ce que le corpus va se
  révéler être — **31, dont 13 tenues (41,9 %)**.
  ⚠ **La conséquence est une règle de lecture des bilans** : un taux global
  de tenue ne dit rien tant que les deux populations ne sont pas séparées,
  parce qu'il **varie avec le mélange** et non avec la qualité du travail. Un
  lot de production, riche en prédictions d'instrument, sortira toujours
  au-dessus de 90 % ; une séance d'enquête, riche en prédictions de monde,
  sortira toujours en dessous, **et c'est le signe qu'elle a servi à quelque
  chose**.
  ✅ *La séance 10 l'avait entrevu sans le chiffrer — « le registre garde sa
  valeur sur les compteurs de DENSITÉ et la perd sur le SIGNE du
  foisonnement ». **Le protocole ne rend pas le monde prévisible ; il rend
  visible l'endroit où on croyait savoir.*** *Éprouvée 0/N — un seul point de
  mesure, et il faudra le rejouer sur un lot de production pour que la coupe
  ait deux appuis.*
- **Le foisonnement se mesure à la LIGNE et pas à la fiche — et le mélange de
  lignes ne le prédit pas davantage.**
  *Née le 30/08 (séance 11), sur la question laissée ouverte par le lot 14 et
  sur deux entrées du BACKLOG qu'elle ferme.* Trois mesures, dans cet ordre :
  1. **Le corpus est HOMOGÈNE par registre** — `titre` +6,7 %, `callout`
     +3,4 %, `tableau` +2,2 %, `liste` +3,7 %, `paragraphe` +3,3 % — et par
     construit — `alt` +0,4 %, `chemin d'embed` +0,0 %, `libellé de wikilink`
     −0,1 %, `code inline` −0,2 %, `prose nue` +3,9 %. **Aucune catégorie du
     corpus n'est structurellement négative** : le foisonnement d'un lot
     **n'est pas un effet de mélange de registres**, contrairement à ce que
     quatre séances avaient supposé.
  2. **À l'échelle de la ligne, la densité de génitif français (`de` / `du` /
     `des`) rend une échelle MONOTONE sur cinq seaux** : **+6,89 / +3,92 /
     +3,49 / +2,00 / +0,63 %**, sur **270 857 mots** de 233 paires à lignes
     appariées, `r = −0,188` sur 7 450 lignes d'au moins dix mots. Le
     mécanisme est lisible sur pièce : `le hub de la carte` **4** → `the
     board's hub` **3**, `le bus de réglage de la caméra` **6** → `the
     camera's control bus` **4**.
  3. ⚠ **Et il n'en reste RIEN à l'échelle de la fiche** : `r = −0,029` entre
     densité génitive et foisonnement sur 242 paires ; un prédicteur bâti sur
     le mélange des cinq seaux bat la constante `+3,5 %` de **1,6 %**
     seulement. *Cause mesurée : le modèle ne sort jamais de la bande
     **+1,6 % à +5,0 %** quand le réel va de **−6,1 % à +18,2 %**.*
  ⚠ **Ce qui reste ouvert est donc plus étroit qu'avant, et il faut l'écrire
  ainsi** : la **variance de fiche à fiche**, **24 points d'amplitude**, est
  sans cause — et **trois hypothèses sont désormais mesurées fausses**
  (famille, mélange de registres, densité génitive de la fiche), donc aucune
  séance future ne doit les rejouer.
  ✅ *Ce qui a marché : chaque hypothèse a été **mesurée fausse au lieu d'être
  plaidée**, trois fois de suite. C'est le motif que la séance 10 avait
  inauguré sur cette même question.* *Éprouvée 0/N.*
- **Un contrôle de MISE EN LIGNE manque au chantier : trois fiches EN
  divergent de leur source de trente-deux lignes de paragraphe, et aucun des
  six contrôles de clôture ne peut le voir.**
  *Née le 30/08 (séance 11), trouvée sans être cherchée.* Sur 242 paires,
  **9 n'ont pas le même nombre de lignes** dans leur corps C110. Trois d'entre
  elles, toutes dans `conduite/proj/` — `securite-et-qualite`,
  `ecoconception`, `gestion-de-projet` — perdent **−31, −32 et −32 lignes de
  paragraphe** en anglais **pendant que tous les autres registres sont égaux
  au chiffre** : `titre` 10/10, `callout` 22/22, `liste` 40/35, 22/20, 24/24.
  *Ce n'est pas une perte de contenu, c'est une **divergence de mise en
  ligne** : leurs paragraphes anglais sont écrits en lignes longues quand
  toutes les sources sont coupées à la main.*
  ⚠ **Pourquoi rien ne le voit** : `--controle` compare des **nombres**
  d'embeds et de liens, `derive-traduction` compare des **empreintes de
  source**, `compter-mots` **somme** des mots, `--style` lit des **motifs**,
  `--alt` compare des **alt de même rang**, `--libelles` des **libellés**.
  **Le nombre de lignes n'est lu nulle part**, et c'est le seul endroit où la
  divergence est visible. *Correctif : trois lignes dans la phase `etat` de la
  batterie — comparer `corpsC110(FR).split('\n').length` aux deux côtés.*
  ⚠ **Un fait séparé sort du même relevé et n'est pas expliqué** :
  `gestion-de-projet` foisonne à **−6,13 %**, le plus bas du corpus, quand ses
  deux jumelles de même défaut de mise en ligne font −0,37 % et −1,61 %.
  **C'est la première fiche à relire, et le motif est chiffré.**
  *Éprouvée 0/N.*
- **Un contrôle écrit dans un seul sens ne garde qu'une moitié, et son
  correctif symétrique se vérifie sur le cas même qui l'a révélé.**
  *Née le 30/08 (séance 11), arbitrage 1 sur 18 de la file, annoncé à deux
  lignes depuis le lot 13.* Le seau `C109 creees en EN` avait pour code
  `if (nEn > nFr)` : il voyait ce que la traduction **crée**, jamais ce
  qu'elle **supprime**, et `easyeda-en` sortait à `0 a reprendre` comme une
  réussite là où sa source portait un cadratin rendu par une virgule **sans
  décision**. Le seau symétrique `C109 supprimees en EN` fait **deux lignes de
  logique et une d'affichage**.
  ✅ **Ce qui vaut d'être retenu est la forme de la vérification** : le
  correctif **retrouve seul** le cas connu — `easyeda-en   C109 : FR 1 / EN 0`
  — et rend **0** sur les trois fiches du lot 14, c'est-à-dire qu'il
  **reproduit sans intervention** le verdict que la séance 10 avait obtenu par
  une comparaison à la main. *Un correctif qui rejoue à vide un contournement
  manuel déjà fait est vérifié par cela même.*
  ⚠ **Arbitrage (b), non rendu** : le seau **n'entre pas** dans le code de
  sortie, au motif qu'une suppression n'est pas un défaut mécanique — le lot
  13 a décidé que la virgule restait. **Coût de revert : une ligne.**
  *Éprouvée 1/N.*

