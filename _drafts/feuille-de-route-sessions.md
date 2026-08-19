# Feuille de route des sessions — d'ici la rentrée

> Fichier de travail privé (hors `content/`, non publié). Établi le **19/08** en clôture
> des sessions B et C, sur une enveloppe estimée par Tim à **10-15 sessions**.
> Complète `_drafts/feuille-de-route-captures.md`, qui reste la référence des médias.

## Où en est le wiki

| Grandeur | État au 19/08 |
|---|---|
| Fiches publiées | **242** `.md` sous `content/` |
| Relecture de fond | **close** — 212/213, seule `kicad` ouverte par décision |
| Liens rouges | **0** |
| Couverture AA | **45 C / 5 E / 4 HS / 3 HS-D / 0 NC** — cartographie **refermée** |
| Placeholders restants | **3** (KiCad, reportés post-publication, C90) |
| Embeds sans fichier | ~58, régime nominal de (c-large) jusqu'aux prises de vue |
| Conventions | C93 |

**Les 79 % de couverture AA ne sont pas un chantier.** Il n'y a **aucun critère non
couvert** : les 21 % restants sont 5 critères MME actés *effleurés terminaux par
délégation*, 4 hors-scope C15 (participation, terminologie) et 3 hors-scope par
délégation (design produit). Chercher à monter ce chiffre reviendrait à refaire le
cours des collègues, ce que le cadrage projet interdit. **Le socle référentiel est
fini** — ce qui reste n'est plus du remplissage de trous.

## Ce qui reste, rangé par « à qui ça manque »

| Famille | Volume | Qui |
|---|---|---|
| Prises de vue | 49 + 3 reportées | **Tim seul** — manifeste prêt, 12 sessions de prise |
| Promesses écrites non tenues | 3 items | Tim (1) + Claude (2) |
| Trous structurels de maillage | 3 fiches | Claude |
| Dette interne invisible | ~10 items | Claude, **post-rentrée** |

---

## Séquence

### 1 — Notion `[T]` « programmation non bloquante » + balayage inverse

**Le livrable principal n'est pas la fiche, c'est le balayage.** Le motif s'est produit
**deux fois** : une trame transverse qui, faute de notion `[T]` au-dessus, pointe dans une
famille. `firmware` d'abord, puis `programmer-l-embarque` retargée vers
`arduino-programmation-non-bloquante` le 18/08 faute de mieux. Deux occurrences font un
motif, pas un accident — d'où un contrôle **mécanique de toutes les trames transverses**
plutôt que l'attente de la troisième.

- Fiche calibre notion, gabarit `interruption` / `timer` : boucle bloquante contre
  coopérative, `millis()` et ses jumeaux, la borne avec le RTOS.
- **Pas de bloc de code** — la notion sert Arduino *et* MicroPython, précédent `filtrage`
  (un bloc C++ en ferait une fiche Arduino déguisée).
- Réciproques à poser depuis les deux fiches famille et depuis `programmer-l-embarque`.

### 2 — `boucle-ouverte`

Notion courte, demande Tim du 18/08. `chaine-energie` promettait « boucle ouverte /
boucle fermée » ; faute de fiche, le libellé a été rabattu sur `asservissement`, qui ne
définit la boucle ouverte que **par contraste**. La rustine tient, la notion manque.
Quand la commande sans retour suffit, et comment la calibrer. À raccrocher à
`chaine-energie` et `arduino-pid`.

### 3 — Cadrage des fiches de lecture C85, puis `cpp-lire-un-programme`

**Session lourde, discussion d'abord.** C85 a redéfini l'encart « Comment lire ce code »
comme réservé aux **idiomes embarqués**, au motif que les mécanismes de langage montent
dans ces deux fiches. Elles n'existent pas : la convention a posé la moitié amont d'un
dispositif dont l'aval manque, et **C85 n'est pas éprouvable tant que c'est le cas**.

Conception déjà arrêtée le 17/08 (voir `conventions.md` §8 + BACKLOG) : `aa: []`, section
de méthode dupliquée assumément (copie locale C47), trois blocs — par où entrer dans un
programme inconnu / les mécanismes de langage aujourd'hui répétés d'encart en encart /
la lecture commentée d'un programme complet du wiki. **Pas de passe rétroactive** sur
§7 et §13.

C89 s'y jouera frontalement : le critère « l'affirmation est-elle vérifiable à l'écran »
appliqué à un assistant qui *lit* un programme.

### 4 — `micropython-lire-un-programme`

Le jumeau. Raccrochages à poser : `arduino-programmation-non-bloquante`, réciproques avec
`arduino-debug` / `micropython-debug` (frontière **lire** contre **déboguer**), et
`revue-de-code`.

### 5 à 8 — Intégration des captures, au fil des dépôts

**Poste élastique, 3 à 5 sessions, dépendant du rythme de prise de vue.** Ce n'est pas de
la pose d'image : sur `falstad` et `ltspice`, ces allers-retours ont **chaque fois changé
du contenu**. Pour chaque lot déposé :

1. ouvrir chaque image (`read_media_file`) **avant** d'écrire — C81 ;
2. la confronter au cadrage décrit au manifeste ;
3. **vérifier l'alt**, écrit contre la spécification et non contre les pixels — c'est le
   prix assumé de (c-large) ; si le cadrage dévie, **c'est l'alt qu'on reprend** ;
4. caler la largeur réelle ;
5. corriger le texte de la fiche quand l'écran dit autre chose que prévu (C93, C88).

Ordre de rentabilité : **S1 · IDE Arduino** vaut 12 prises à elle seule, un quart de la
dette. Puis les notions `[T]`, puis `esp32`/`esp8266`.

⚠ Un média > ~300 ko ne s'intègre pas avec un alt inventé : version allégée, ou alt
rédigé par Tim.

### 9 — Parcours étudiant

**Déclencheur : le rang 1 des prises de vue déposé et intégré.** Reportée sur arbitrage
Tim du 19/08 — tester le chemin pendant que des images manquent, c'est tester un chemin
qui n'est pas celui qu'aura l'étudiant.

Raison d'être : la relecture de fond a lu 242 fiches **module par module, en mode
inversé** — dans l'ordre du producteur. Les audits ont vérifié des grandeurs mécaniques.
**Personne n'a jamais traversé le wiki comme un primo-lecteur.** Questions que seul ce
test attrape : un étudiant de semaine 1 qui ignore ce qu'est un CdCF trouve-t-il sa
route depuis `index` ? Le passage `conduite/` → `embarque/` se fait-il, ou les deux
branches vivent-elles dos à dos ? Combien de clics entre « mon capteur renvoie n'importe
quoi » et la fiche qui répond ? Les `prerequis` du front matter sont-ils atteignables
dans l'ordre annoncé ?

### 10 — Clôture pré-publication

- Contrôle **Phase 0 / gestion de projet** (`bom`, `mind-map`, `fast`, `amdec`,
  `matrice-eco-criteres`, `ecodesign`) — **vérifier d'abord** ce que la relecture du
  12/06 a réellement couvert avant de conclure à un chantier.
- `audit-medias.mjs` + `audit-wikilinks.mjs` en passe finale.
- Confirmation du premier déploiement réussi (runner `ubuntu-24.04`).
- Réconciliation de la cartographie AA Phase 1 (multi-couverture `EEE/1`).

### Marge — 2 à 5 sessions

**À garder vide.** C'est ce qui absorbera les corrections que le parcours étudiant fera
remonter, et elles ne seront pas nulles. Ne pas la remplir de dette interne.

---

## Hors séquence — à Tim, sans dépendance

- [ ] **Remplacer `cdcf-ecole-template.docx`** dans `ressources/templates/` — le fichier
      présent n'est pas le bon depuis le **08/06**. `specification-technique` et
      `cahier-des-charges-fonctionnel` y renvoient : un étudiant clique et télécharge
      autre chose. **Seul défaut visible du dépôt qui ne dépende d'aucune session.**
- [ ] Les **prises de vue**, quand il voudra — feuille de route et manifeste en main.
- [ ] Trancher le piège `Pin("LED")` **au simulateur** (`micropython-simulation`).
- [ ] Noter la **révision du PDF L298N** hors fiche (S9).

## Arbitrages ouverts

- [ ] **`easyeda`** — le tableau « Choisir un outil » de `pcb` annonce « EasyEDA *(à
      venir)* ». Écrire une seconde fiche-outil PCB avant la rentrée, alors que `kicad`
      attend encore ses 3 captures, paraît un mauvais échange.
      **(a)** retirer la mention et clore l'item · **(b)** produire la fiche ·
      **(c)** statu quo. *Préférence Claude : (a) — une promesse qu'on ne tient pas coûte
      plus qu'une option qu'on ne mentionne pas.* **Non tranché.**
- [ ] **Contrôle Phase 0** — **(a)** contrôle léger (front matter, liens, format C29) ·
      **(b)** relecture de fond · **(c)** item clos, déjà couvert le 12/06.
      *Préférence Claude : (a).* **Non tranché.**

## Post-rentrée, explicitement

Reprises visuelles SVG (4 items, voie A) · grooming de la pile de flèches TODO ·
archivage du JOURNAL · audit de cross-links des notions `[T]` · promotion de C58 avec son
template de fiche-pointeur · fiches d'alimentation continue (`circuitverse`,
`bom-electronique`, `pcb-gravure-ecole`, porte Pico-SDK, `raspberry-pi-pico`,
`bus-de-terrain`, `cpp-tableaux`) · horizon long terme (électronique numérique,
analogique, architecture des ordinateurs).

**Argument de report, tranché le 18/08 et toujours valide :** *un placeholder est un trou
visible, un SVG imparfait est du contenu existant qui pourrait être plus beau.* Il tient
mieux encore maintenant qu'il ne reste plus aucun placeholder hors KiCad.
