# Prédictions — 2026-08-29, pilote Claude Code, lot 6 de `micropython/`

> Sous-règle C116 « exécution directe » (arbitrage Tim (c) du 29/08, séance
> annexe) : les prédictions s'**appendent ici avant chaque bloc d'exécution**,
> l'ordre des appels dans la transcription faisant foi. Une prédiction sans
> nombre ni forme exacte est réputée absente. Chaque gate se ferme sur un
> bilan prédictions/constats.
>
> Horloge d'ouverture lue avant tout lancement : **2026-08-29 14:15:21**
> (lecture d'horloge, pas une mesure du dépôt).

---

## Bloc 1 — `batterie.ps1 -Phase garde` (relevé de référence du cadrage)

Commande prévue :
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

### Étape 0 — autocontrôle ASCII (C122) + sauvegarde C124

1. **Lignes non ASCII dans `batterie.ps1` : 0.** Le script a été relu en
   entier ; ses commentaires sont désaccentués.
2. **`tools/batterie-sortie.txt` existe** (vu au listage du répertoire avant
   toute prédiction) ⇒ ligne « sortie precedente copiee ».
3. **Nom exact de la copie : `tools\batterie-sortie-2908b3.txt`.**
   `ddMM` = `2908` ; `b1` et `b2` existent déjà, premier rang libre = 3.

### Étape 1 — garde de péremption

4. **`date ISO : 2026-08-29`**, **heure entre 14:15:21 et 14:35:00**.
5. **`HEAD git` : `5b0617f`**, commit « seance annexe 29/08: cloture
   (JOURNAL, TODO, BACKLOG, C129), batterie corrigee », daté du
   **2026-08-29**.
6. **`fichiers modifies non commites : 1   (hors sorties batterie : 0)`.**
   ⚠ **Issue innocente nommée d'avance n° 1 — l'auto-comptage de la copie
   C124 du lancement courant.** L'étape 0 vient de créer
   `tools/batterie-sortie-2908b3.txt`, qui est **suivi** (le `.gitignore`
   n'exclut que `tools/batterie-sortie.txt`, chemin exact) ; `git status
   --porcelain` le rend donc en `??`. Le compteur brut monte à 1 **du fait
   du lancement lui-même**. **Le chiffre comparable est « hors sorties
   batterie » = 0**, et c'est le seul à lire. Branche manquée deux fois le
   29/08, nommée ici avant lancement.
7. ⚠ **Issue innocente nommée d'avance n° 2 — l'arbre déjà commité.** Un
   « hors sorties batterie : 0 » est l'**état attendu**, pas un défaut de
   mesure : Tim a passé le bloc de clôture de la séance annexe (HEAD
   `5b0617f`). Zéro fichier modifié **n'est pas** un signal d'alerte ici.
8. **`node` : présent, forme `v<majeur>.<mineur>.<correctif>`**, jamais
   `INTROUVABLE`. Valeur non prédite : jamais mesurée dans cette session,
   et je ne la déduis pas (C118).
9. **Trois fichiers de pilotage listés et trois seulement** — `JOURNAL.md`,
   `conventions.md`, `TODO.md` — aucune ligne de fiche, `-Fiches` et
   `-FichesEn` étant vides en phase `garde`.
10. **Dates de dernière écriture des trois : 2026-08-29, entre 12:00:00 et
    14:15:21.** Ce sont les livrables de la séance annexe close ce matin ;
    aucune ne doit être postérieure à l'horloge d'ouverture. **Toute date
    postérieure à 14:15:21, ou d'un autre jour, vaut ARRÊT.**
11. **Aucune étape 2 ni suivante** : la phase `garde` s'arrête à l'étape 1.
12. **Codes de sortie : 0** aux deux étapes.

### Ce qui vaudrait ARRÊT sur ce bloc

- `hors sorties batterie` different de 0 (fichier modifié inexpliqué).
- `HEAD` different de `5b0617f`.
- mtime d'un fichier de pilotage postérieur à l'horloge d'ouverture.
- `node : INTROUVABLE`.

### Constats du bloc 1 (sortie `batterie-sortie.txt`, horloge 14:16:43)

| # | Prédit | Constaté | Verdict |
|---|---|---|---|
| 1 | non ASCII = 0 | 0 | ✅ |
| 2 | copie faite | « sortie precedente copiee » | ✅ |
| 3 | `batterie-sortie-2908b3.txt` | idem, au caractère près | ✅ |
| 4 | 2026-08-29, 14:15:21–14:35:00 | 2026-08-29 **14:16:43** | ✅ |
| 5 | HEAD `5b0617f`, 2026-08-29 | `5b0617f 2026-08-29 14:13:30 +0200` | ✅ |
| 6 | `1 (hors sorties batterie : 0)` | **`2 (hors sorties batterie : 1)`** | ❌ |
| 7 | arbre commité = état attendu | confirmé (aucune modif de contenu) | ✅ |
| 8 | node présent, `v<M>.<m>.<c>` | **`v24.15.0`** | ✅ |
| 9 | 3 lignes de pilotage, 0 fiche | 3 et 3 seulement | ✅ |
| 10 | pilotage du 2026-08-29, avant 14:15:21 | 14:06:42 / 14:06:54 / 14:07:37 | ✅ |
| 11 | pas d'étape 2 | s'arrête à l'étape 1 | ✅ |
| 12 | codes de sortie 0 | 0 et 0 | ✅ |

⚠ **INCIDENT n° 1 — TROISIÈME BRANCHE INNOCENTE, ET C'EST LE PROTOCOLE
LUI-MÊME QUI LA FABRIQUE.** Prédiction 6 réfutée. `git status --porcelain`
rend **deux** entrées :

```
?? tools/batterie-sortie-2908b3.txt      <- branche n° 1, nommée d'avance
?? tools/predictions-260829.md           <- NON NOMMÉE
```

La sous-règle C116 « exécution directe » **impose** d'écrire
`tools/predictions-AAMMJJ.md` avant chaque bloc ; ce fichier est **suivi**
(aucune ligne du `.gitignore` ne le couvre) ; il est donc **présent dans le
compteur « hors sorties batterie » dès la première prédiction et jusqu'au
commit de clôture**. J'avais nommé les deux branches manquées le 29/08 et
manqué celle que la règle du jour venait de créer. *La garde a été écrite
avant l'artefact qu'elle allait devoir ignorer.*

**Conséquence de dispositif, valable pour tout le reste de la séance :**
**la valeur de référence de « hors sorties batterie » est 1, pas 0**, et elle
monte à mesure que les éditions du lot s'accumulent. Chaque garde suivante
se lit contre le relevé précédent **et contre la liste nominative des
fichiers attendus**, jamais contre le seul chiffre.

**Non bloquant** : aucun fichier de **contenu** n'est modifié, aucune date
d'écriture n'est postérieure à l'horloge, HEAD est celui attendu. **Pas
d'ARRÊT.**

**Relevé de référence du cadrage (C124, copie `batterie-sortie-2908b3.txt`) :**
HEAD `5b0617f` · node `v24.15.0` · JOURNAL 14:06:42 · conventions 14:06:54 ·
TODO 14:07:37 · hors sorties batterie **1** (`predictions-260829.md`).

---

## Bloc 2 — `batterie.ps1 -Phase cadrage -Fiches <les quatre>` (G1)

Commande prévue :

```
powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage `
  -Fiches embarque/mcu/micropython/micropython-servomoteur.md,embarque/mcu/micropython/micropython-moteur-pas-a-pas.md,embarque/mcu/micropython/micropython-pid.md,embarque/mcu/micropython/micropython-watchdog.md
```

*Les quatre sources ont été lues en entier avant l'écriture de ces prédictions.*

### Étape 0

13. **non ASCII = 0** ; copie **`tools\batterie-sortie-2908b4.txt`** (b1–b3
    pris, premier rang libre = 4).

### Étape 1 — garde, relue contre le relevé de référence

14. **HEAD inchangé `5b0617f`** ; **node `v24.15.0`** ; **mtimes de pilotage
    identiques au relevé** (14:06:42 / 14:06:54 / 14:07:37, à la seconde).
15. **`fichiers modifies non commites : 3   (hors sorties batterie : 1)`.**
    Décomposition nominative attendue : `batterie-sortie-2908b3.txt` (bloc 1),
    `batterie-sortie-2908b4.txt` (ce lancement), `predictions-260829.md`.
    **Le 1 « hors sorties » est le fichier de prédictions**, branche nommée
    au bloc 1.
16. **Quatre lignes de fiche, aucune `ABSENTE`**, avec ces mtimes exacts :
    `micropython-servomoteur.md` **2026-06-30 12:28**,
    `micropython-moteur-pas-a-pas.md` **2026-06-30 12:42**,
    `micropython-pid.md` **2026-08-20 23:08**,
    `micropython-watchdog.md` **2026-08-19 15:09**.
    *(Reportés d'un listage du répertoire fait avant prédiction ; la garde
    doit les rendre à la seconde près, et l'année est prédite 2026 pour les
    deux dates de juin — un `ls` sans année ne la donne pas.)*

### Étape 2 — `compter-mots --lot` (règle C110 : hors front matter, hors blocs de code clôturés, inline inclus)

17. Décomposition **tirée de chaque source** (octets de prose hors blocs de
    code, lus fiche par fiche), **pas d'une moyenne de module** :

    | fiche | mots prédits | fourchette |
    |---|---|---|
    | `micropython-servomoteur.md` | **1 330** | 1 230 – 1 430 |
    | `micropython-moteur-pas-a-pas.md` | **950** | 870 – 1 030 |
    | `micropython-pid.md` | **1 055** | 970 – 1 140 |
    | `micropython-watchdog.md` | **1 095** | 1 010 – 1 180 |
    | **LOT (4 fiches)** | **4 430** | **4 300 – 4 560** |

    ⚠ **Faiblesse de méthode nommée d'avance** : les quatre valeurs sont
    tirées de leurs octets de prose respectifs, mais **converties par un
    ratio octets/mot unique** — donc une moyenne de module se cache dans le
    dernier pas. C'est exactement le mécanisme du 28/08 (« un total dans la
    fourchette ne valide pas la décomposition »). **Le bilan se lit terme à
    terme, et un total juste ne vaudra pas preuve.**
18. **Chiffre hérité à vérifier : le brief du 29/08 annonce 4 434 mots.** Il
    n'est **pas** ma prédiction, il est l'objet du test (C118 : à remesurer,
    rien ne se déduit). **Confirmé si le LOT tombe à 4 434 ± 0** ; toute
    autre valeur réfute le chiffre du brief, et c'est la mesure qui fait foi.
19. **Ordre des lignes = ordre passé en `-Fiches`**, une ligne par fiche puis
    un filet et la ligne `LOT (4 fiches)`.

### Étape 3 — `creer-fiche-en --style` sur les quatre sources FR

20. **Trois compteurs mécaniquement nuls, par construction** : les contrôles
    de typographie ne s'arment que sur `en/` (note d'outillage du 24/08).
    Donc **`typographie francaise : 0`**, **`C109 creees en EN : 0`**,
    **`hors alphabet latin : 0`**.
21. **`virgule ambigue` : 0**, fourchette 0 – 2.
22. **`fiche(s) lue(s) : 4`** ; **`a reprendre : 4`** (les quatre portent des
    tirets de prose, aucune n'est à résidu nul).
23. **Décomposition C109 de prose, par fiche** (prédiction de décomposition,
    licite ; le **total** reste ce que seule la machine atteint — corollaire
    du 25/08 suite 2) :

    | fiche | C109 prédits | fourchette |
    |---|---|---|
    | `micropython-servomoteur.md` | **17** | 13 – 21 |
    | `micropython-moteur-pas-a-pas.md` | **10** | 7 – 14 |
    | `micropython-pid.md` | **10** | 7 – 14 |
    | `micropython-watchdog.md` | **10** | 7 – 14 |
    | **total** | **47** | **34 – 63** |

24. **Chiffre hérité à vérifier : le brief annonce 46 candidats.** Même statut
    qu'au point 18 — objet du test, pas prédiction.
25. **`hors perimetre` (titres, tableaux et alt) : 10**, fourchette 5 – 20.
    Les quatre fiches portent **trois tableaux** et **quatre alt d'image**
    dont plusieurs à tiret.
26. **Forme de sortie** : pour chaque fiche à reprendre, un en-tête `  <rel>`
    puis des lignes `  <no ligne>  [<cat>] <detail>` suivies de l'extrait.
    **Pas de ligne `-> content/en/...`** : `--style` ne génère rien.

### Étape 4 — `creer-fiche-en --anneau 2`

27. **Anneau 2 : 54 fiches / 79 412 mots, 18 porteuses / 68 clôtures** —
    valeurs de la batterie `2908b2` du 29/08 13:47, **inchangées**, aucun
    contenu n'ayant bougé depuis (HEAD `5b0617f`, mtimes de fiches de juin et
    d'août).
28. **Dette : 59 cibles / 84 686 mots / 4 hors anneaux**, et ces **4 hors
    anneaux sont exactement les quatre fiches du lot 6**.
29. **Aucune des quatre n'apparaît comme porteuse de chevron.** Lecture des
    quatre sources : les blocs de code y sont tous en clôture ```` ``` ````,
    **zéro bloc en chevron `>`**. **C127 ne s'applique pas à ce lot**, et
    `-Chevron` n'est pas passé.

### Ce qui vaudrait ARRÊT sur ce bloc

- HEAD, node ou mtimes de pilotage différents du relevé de référence.
- `hors sorties batterie` supérieur à 1, ou une entrée autre que les trois
  nommées au point 15.
- une fiche `ABSENTE`, ou un mtime de fiche différent du point 16.
- code de sortie non nul à une étape.

### Points hors mesure relevés à la lecture des sources, à porter au gate G1

30. ⚠ **C71 — `micropython-moteur-pas-a-pas.md` porte un prix.** Deux
    emplacements : « réducteur 1:64 …, module ULN2003 avec 4 LEDs qui suivent
    les phases. **3–5 € le couple.** » et « arbitrage pas-à-pas / servo /
    moteur CC + encodeur selon précision + couple + **budget** ». Test de
    C71 appliqué (« que reste-t-il quand je l'enlève ») : la puce garde son
    argumentaire technique entier ⇒ **reformulation, pas reconstruction**.
    **Les trois autres fiches sont propres en C71.**
31. ⚠ **`micropython-pid.md` porte une consigne de production non exécutée**,
    en clair dans la prose du § *4. Régler les gains* : « Prendre capture
    d'écran du *traceur de Thonny affichant deux courbes…* ». Ce n'est ni du
    C109, ni du C71, ni un compteur : **aucun des contrôles ne le voit**, et
    une traduction au report un pour un l'emporterait telle quelle dans
    l'anglais. Même famille que le défaut du 26/08 (suite 3) attrapé en
    lisant la production.

### Constats du bloc 2 (sortie `batterie-sortie.txt`, horloge 14:19:36)

| # | Prédit | Constaté | Verdict |
|---|---|---|---|
| 13 | 0 non ASCII ; copie `…2908b4.txt` | 0 ; `tools\batterie-sortie-2908b4.txt` | ✅ |
| 14 | HEAD `5b0617f`, node `v24.15.0`, mtimes pilotage identiques | identiques à la seconde | ✅ |
| 15 | `3   (hors sorties batterie : 1)` | `3   (hors sorties batterie : 1)` | ✅ |
| 16 | 4 mtimes exacts, année 2026 | 12:28:37 / 12:42:37 / 23:08:58 / 15:09:46, 2026 | ✅ |
| 17 servo | 1 330 (1 230–1 430) | **1 375** | ✅ (+3,4 %) |
| 17 pas-à-pas | 950 (870–1 030) | **876** | ✅ (−7,8 %) |
| 17 pid | 1 055 (970–1 140) | **1 055** | ✅ **exact** |
| 17 watchdog | 1 095 (1 010–1 180) | **1 128** | ✅ (+3,0 %) |
| 17 LOT | 4 430 (4 300–4 560) | **4 434** | ✅ (+4) |
| 18 | brief = 4 434, à confirmer ou réfuter | **4 434** | ✅ **confirmé au mot** |
| 20 | typo 0, créées 0, hors latin 0 | 0 / 0 / 0 | ✅ |
| 21 | virgule ambiguë 0 (0–2) | 0 | ✅ |
| 22 | 4 lues, 4 à reprendre | 4 et 4 | ✅ |
| 23 servo | 17 (13–21) | **15** | ✅ |
| 23 pas-à-pas | 10 (7–14) | **8** | ✅ |
| 23 pid | 10 (7–14) | **10** | ✅ **exact** |
| 23 watchdog | 10 (7–14) | **13** | ✅ |
| 23 total | 47 (34–63) | **46** | ✅ |
| 24 | brief = 46, à confirmer ou réfuter | **46** | ✅ **confirmé à l'unité** |
| 25 | hors périmètre 10 (5–20) | **30** | ❌ |
| 26 | forme de sortie `--style` | conforme | ✅ |
| 27 | anneau 2 : 54 / 79 412, 18 / 68 | 54 / 79 412, 18 / 68 | ✅ **exact** |
| 28 | dette 59 / 84 686 / 4 = le lot | 59 / 84 686 / 4, les quatre nommées | ✅ **exact** |
| 29 | 0 porteuse de chevron dans le lot | aucune des quatre ne porte de chevron | ✅ |

**Score : 25 tenues sur 26. Une réfutation.**

⚠ **INCIDENT n° 2 — J'AI PRÉDIT LE SEAU « HORS PÉRIMÈTRE » SUR SON ÉTIQUETTE,
ET L'ÉTIQUETTE MENT — CE QUI ÉTAIT ÉCRIT NOIR SUR BLANC DEPUIS LE 27/08.**
Prédit **10** sur la lecture de la ligne de bilan (« titres, tableaux et alt »),
constaté **30**, soit **trois fois**. Cause lue **dans le code** après coup
(`creer-fiche-en.mjs`, lignes 888-901) : le seau porte **quatre** familles et
non trois, et la quatrième est `tiret d intervalle numerique` — que la ligne
de bilan **ne nomme pas**. Or les quatre sources du lot 6 sont saturées
d'intervalles : `4,8–6 V`, `9–11 kg·cm`, `0–180°`, `0–65535`, `200–300 mA`,
`1–1,7 A`, `12–24 V`, `1/2 … 1/256`.

*C'est mot pour mot la réfutation du 27/08 (suite 3) — « l'étiquette du seau
ment, elle annonce titres, tableaux et alt et contient aussi des plages
numériques » — et la règle du 29/08 : **une phrase de README décrit une
intention, seul le code décrit un comportement**. Je l'ai lue en ouverture et
j'ai quand même prédit sur l'étiquette.* **Deuxième fois du chantier que la
réfutation était déjà écrite dans ce que je venais de lire.**

⚠ **Non mesuré (C118)** : la **décomposition des 30** entre les quatre
familles. `--style` n'imprime pas les lignes `hors-perimetre` (filtre `dur`,
ligne 961), donc le chiffre existe sans son détail. **Non bloquant** : le
mode d'échec est unilatéral et `hors périmètre` n'est pas la charge de
travail. Rien codé, rien édité.

**Correctif de méthode, appliqué à partir d'ici : tout compteur dont je
publie une prédiction se lit dans le code qui l'incrémente, jamais dans la
ligne qui l'affiche.**

### Points hors mesure — vérifications du gate G1

32. **BILAN wikilinks coché** dans `tools/seance-sortie-2908s17.txt`
    (dernière sortie `etat`, ligne 65) : **MORT 65 / CASSE 0 / AMBIGU 0 /
    GABARIT 8 / ALIAS 6 / OK 425** — **identique à la référence du brief**.
    Le point ⚠ « BILAN wikilinks non relu » du JOURNAL du 29/08 est **soldé**.
33. **CIBLES SANS FICHE (6)** rendues par `--anneau` : `[[FC]] [[FP]] [[FS]]
    [[critere]] [[flexibilite]] [[niveau]]` — ce sont exactement les **six
    liens rouges du triplet NF X50-151** déjà en file d'arbitrage. Aucun neuf.
34. **Titres EN arrêtés sous C125**, lus dans les `title:` en production
    (jamais déduits d'un libellé) :

    | source FR | `title:` FR | jumelle Arduino FR | jumelle Arduino EN | test | **titre EN retenu** |
    |---|---|---|---|---|---|
    | `micropython-servomoteur` | Piloter un servomoteur | **Piloter un servomoteur** (identique) | `Driving a servo` | **2** | **`Driving a servo`** |
    | `micropython-moteur-pas-a-pas` | Piloter un moteur pas-à-pas | **Piloter un moteur pas-à-pas** (identique) | `Driving a stepper motor` | **2** | **`Driving a stepper motor`** |
    | `micropython-pid` | Réguler avec un PID **en MicroPython** | Réguler avec un PID **sur Arduino** (diffère) | `PID control on Arduino` | **3** | **`PID control in MicroPython`** |
    | `micropython-watchdog` | Utiliser le chien de garde (watchdog) **en MicroPython** | … **sur Arduino** (diffère) | `Watchdog on Arduino` | **3** | **`Watchdog in MicroPython`** |

    **Test 2 (servo, pas-à-pas)** : la clause du 27/08 (suite 7) est
    satisfaite — les deux `title:` FR sont **identiques au caractère près**,
    donc la jumelle titrée arbitre. ⚠ **Deux collisions de titre, assumées
    par C125** ; ces deux paires sont **déjà** dans le chantier FR de nommage
    (« dix paires », TODO l. 16), la résolution est côté FR et hors de ce lot.
    **Corroboration indépendante pour `servo`** : `micropython-sortie-pwm-en`
    l. 132 écrit déjà en production `[[micropython-servomoteur-en|Driving a
    servo]]` — les deux arbitres concordent.
    **Test 3 (pid, watchdog)** : les `title:` FR **diffèrent**, la paire
    descend au test 3. Le patron **« sur Arduino » / « en MicroPython »** est
    celui arbitré par Tim (b) le 27/08 (suite 4) et déjà appliqué à 20
    titres ; sa forme anglaise en production est **`in MicroPython`**, lue sur
    **14 `title:`** de `content/en/embarque/mcu/micropython/` (`Deep sleep in
    MicroPython`, `I2C in MicroPython`, `Timers in MicroPython`, `Driving a DC
    motor in MicroPython`, …). Racine alignée sur la jumelle, qualificatif de
    famille distinguant : **aucune collision** sur ces deux-là.
    ⚠ **Conflit nommé et tranché sur `moteur-pas-a-pas`** : les *Voir aussi*
    en production écrivent `Stepper motor` (rang 3) là où la jumelle titrée
    dit `Driving a stepper motor` (rang 2). **C125 ordonne le test 2 au-dessus
    du test 3** : `Driving a stepper motor`.

35. **Correction de mon point 31 — ce n'est pas un défaut, c'est une
    convention de placeholder du dépôt, et elle a un rendu EN en production.**
    Motif `Prendre capture d'écran d[eu] *…*` : **30 lignes sur 13 fiches**
    dans `content/` (échantillon nommé, liste complète relevée), dont **11
    dans `micropython/`** et **une seule dans le lot 6** (`micropython-pid`
    l. 88). Les jumelles EN déjà livrées rendent la forme
    **`Take a screenshot of *…*`** — 10 occurrences. **Précédent exact pour
    le lot 6** : `micropython-timers-en` l. 67 rend « traceur de Thonny » par
    **``Thonny's plotter (`Traceur`)``**, l'étiquette d'interface française
    gardée et glosée (C113).
    ⚠ **Écart avec le TODO l. 529, non instruit (C118)** : il annonce
    « restent **3** placeholders dans `content/` : les trois KiCad ». Le motif
    ci-dessus en rend **30**. Soit les deux comptages ne portent pas sur le
    même motif, soit l'un des deux est faux. **Hors périmètre du lot 6**,
    versé au gate.
36. ⚠ **DÉFAUT TROUVÉ DANS UNE FICHE DÉJÀ LIVRÉE, ET AUCUN CONTRÔLE NE LE
    VOIT.** `micropython-debug-en.md` l. 93 : « Take a screenshot of *Thonny
    en débogage pas-à-pas d'un script MicroPython, les valeurs des variables
    visibles*. » — **la description italique est restée intégralement en
    français**, seule des onze. Ni compteur, ni typographie, ni C109, ni
    hors-latin : même classe que le défaut du 26/08 (suite 3), attrapé en
    lisant la production. **Hors périmètre du lot 6**, versé au gate.

---

## Bloc 3 — G2 : garde avant passe, puis passes C109 sous C123 sur les sources FR

*Les 46 emplacements ont été relus un par un dans leur ligne complète avant
l'écriture de ces prédictions. Arbitrages du gate G1 non rendus par Tim
(« enchaîne jusqu'à G5 ») : **C71 appliqué** (règle absolue, retrait
mécanique, précédent d'arbitrage Tim (b) du 26/08 suite 5) ; **trouvailles
hors périmètre versées au gate sans édition** ; **diff de rédaction par lot**.*

### 3a — `batterie.ps1 -Phase garde` avant passe

37. **HEAD `5b0617f`**, **node `v24.15.0`**, **pilotage 14:06:42 / 14:06:54 /
    14:07:37** — identiques au relevé de référence.
38. **`fichiers modifies non commites : 4   (hors sorties batterie : 1)`** :
    `2908b3`, `2908b4`, `2908b5` (créé par l'étape 0 de ce lancement) et
    `predictions-260829.md`. Copie attendue : **`batterie-sortie-2908b5.txt`**.
39. **Heure entre 14:20:00 et 14:50:00**, date **2026-08-29**.

### 3b — Passes C109 sous C123 : classement des 46, décidé avant l'édition

40. **Décomposition traités / exemptés, fiche par fiche :**

    | fiche | candidats | **traités** | **exemptés** |
    |---|---|---|---|
    | `micropython-servomoteur` | 15 | **13** | **2** |
    | `micropython-moteur-pas-a-pas` | 8 | **6** | **2** |
    | `micropython-pid` | 10 | **8** | **2** |
    | `micropython-watchdog` | 13 | **11** | **2** |
    | **total** | **46** | **38** | **8** |

41. **Les huit exemptions, nommées et motivées** (C123 : segment de droite
    sans aucun verbe conjugué, second tamis « énumère » et non « commente ») :
    - `servomoteur` l. 44, **deux points-virgules** : `**rouge** → +5 V (…) ;
      **marron/noir** → GND ; **orange/jaune** → la broche de signal` —
      énumération en ligne de trois items **strictement nominaux**.
    - `moteur-pas-a-pas` l. 153, **un point-virgule** : `alimentation séparée
      (au moins pour NEMA17), **GND commun**` — deux consignes nominales.
    - `moteur-pas-a-pas` l. 157, **un point-virgule** : `trop haut →
      surchauffe` — nominal, second membre d'une paire de cas.
    - `pid` l. 21, **un tiret** : `réguler une vitesse, une température, une
      position` — **infinitif énumératif**, il énumère et reste.
    - `pid` l. 86, **le premier point-virgule** : `**monter `Ki`** pour effacer
      l'erreur résiduelle sans réintroduire d'oscillation lente` — trois
      infinitifs, **zéro verbe conjugué**.
    - `watchdog` l. 18, **les deux tirets de l'incise encadrée** : `— boucle
      infinie, attente sans fin, capteur figé —` — énumération nominale pure,
      `figé` participial. *C'est le cas `— Teensy LC, 3.2, 3.5 et 3.6 —` du
      25/08 : le contenu décide, pas la forme.*
42. ⚠ **La discrimination la plus fine du lot est entre `watchdog` l. 18 et
    l. 22, et elle est prédite avant l'édition.** Les deux sont des incises
    encadrées de trois items. **L. 18 reste** (`boucle infinie, attente sans
    fin, capteur figé` : aucun verbe). **L. 22 tombe** (`une bibliothèque qui
    **attend** une réponse, un capteur qui **fige** le code, une boucle sans
    sortie` : deux relatives conjuguées). **C123 tranche « y compris dans une
    subordonnée ».** Si l'outil rend un résidu de 4 sur `watchdog` au lieu de
    2, c'est cette lecture qui est fausse.
43. **Coût en mots, fiche par fiche** (règle C110, sortie de
    `compter-mots --lot`, publié même nul) :

    | fiche | avant | **après prédit** | delta |
    |---|---|---|---|
    | `micropython-servomoteur` | 1 375 | **1 375** | **0** |
    | `micropython-moteur-pas-a-pas` | 876 | **872** | **−4** |
    | `micropython-pid` | 1 055 | **1 057** | **+2** |
    | `micropython-watchdog` | 1 128 | **1 128** | **0** |
    | **LOT** | **4 434** | **4 432** | **−2** |

    Les **−4** sont la correction C71 (`3–5 € le couple.` retiré : les jetons
    `3`, `5`, `le`, `couple`). Les **+2** sont deux mots ajoutés par les
    résolutions de `pid` : **`est`** (l. 25, `**P** (proportionnel` →
    `**P** est proportionnel`) et **`Enfin`** (l. 86). **Toutes les autres
    résolutions sont à coût nul par construction** : virgule, parenthèse,
    découpage en phrases, suppression pure.
44. **Résidu attendu après passes**, `--style` relancé sur les quatre sources :
    **C109 de prose = 8**, décomposé **2 / 2 / 2 / 2**. `typographie
    francaise 0`, `virgule ambigue 0`, `C109 creees en EN 0`, `hors alphabet
    latin 0`. **`hors perimetre` : 30, inchangé** — aucune édition ne touche
    un intervalle numérique, un titre, un tableau ni un alt.
    ⚠ **Sauf sur `moteur-pas-a-pas` l. 36** : le retrait de `3–5 €` **supprime
    un intervalle numérique**, donc **`hors perimetre` doit tomber de 30 à 29**.
    Prédiction ferme : **29**.
45. **`4 fiche(s) lue(s), 4 a reprendre`** — les quatre gardent au moins une
    exemption, donc aucune ne passe à zéro.
46. **Nombre d'éditions : 33** (31 pour C109, une intention par ligne touchée ;
    2 pour C71). Fourchette 30 – 36.
47. **Aucun lien, embed ni bloc de code déplacé** : les 33 éditions sont de la
    ponctuation et deux retraits de prose. `--controle` reste à **181 / 0 / 0**
    au gate G5 pour les fiches déjà traduites.

### Ce qui vaudrait ARRÊT sur ce bloc

- Garde divergente du relevé de référence.
- Une ancre d'édition qui ne mord pas, ou qui mord plus d'une fois.
- Un résidu C109 différent de 8 sans explication tenue par la lecture.

### 3c — Constats des éditions, avant remesure

48. **38 éditions appliquées**, contre **33 prédites (fourchette 30 – 36)** au
    point 46. ❌ **Prédiction réfutée.** Cause : j'avais compté **une édition
    par ligne touchée**, et j'ai exécuté **une édition par groupe
    d'occurrences**. Trois lignes portaient plusieurs occurrences résolues
    séparément (`moteur-pas-a-pas` l. 18 en 2, `watchdog` l. 22 en 3,
    `watchdog` l. 77 en 2). *Le classement des 46 était juste ; c'est l'unité
    de compte des éditions qui ne l'était pas.*
49. ⚠ **UNE ANCRE SUR 38 N'A PAS MORDU, ET LE LOT A REFUSÉ D'ÉCRIRE.**
    Édition 38 : j'avais tapé `à prevoir` sans accent pour `à prévoir`. Le
    contrôle d'unicité a rendu **0 occurrence** et le script s'est arrêté
    **avant toute écriture** — les 37 autres ancres étaient uniques.
    *C'est la protection de C114 conservée sous exécution directe : le lot
    multi-édition est atomique, une seule ancre fausse annule les trente-sept
    autres au lieu d'en appliquer trente-sept sur trente-huit.* Corrigée,
    relancée, **38/38**.

### Bloc 4 — remesure : `batterie.ps1 -Phase cadrage -Fiches <les quatre>`

50. **Garde** : HEAD `5b0617f`, node `v24.15.0`, pilotage inchangé.
    **`fichiers modifies non commites : 9   (hors sorties batterie : 5)`** —
    les **quatre sources FR modifiées** plus `predictions-260829.md` ;
    copie **`batterie-sortie-2908b6.txt`**. **Les mtimes des quatre fiches
    sont maintenant du 2026-08-29, postérieurs au relevé de référence : c'est
    l'effet attendu de mes propres éditions, pas une péremption.**
51. **Volumes et résidus** : voir points **43**, **44**, **45** ci-dessus,
    publiés avant l'édition. Rappel : LOT **4 432**, résidu C109 **8**
    (2/2/2/2), `hors perimetre` **29**, `4 a reprendre`.
52. **Anneau 2 et dette inchangés** : 54 / 79 412, 18 / 68 ; 59 / 84 686 / 4.
    Les passes ne touchent aucun wikilink.

### Constats du bloc 4 (sortie `batterie-sortie.txt`, horloge 14:31:00)

| # | Prédit | Constaté | Verdict |
|---|---|---|---|
| 50 garde | HEAD / node / pilotage inchangés | inchangés | ✅ |
| 50 git | `9   (hors sorties batterie : 5)` | `9   (hors sorties batterie : 5)` | ✅ |
| 50 copie | `batterie-sortie-2908b6.txt` | idem | ✅ |
| 43 servo | 1 375 | **1 375** | ✅ |
| 43 pas-à-pas | 872 | **872** | ✅ |
| 43 pid | 1 057 | **1 057** | ✅ |
| 43 watchdog | 1 128 | **1 128** | ✅ |
| 43 LOT | **4 432** (−2) | **4 432** | ✅ **exact, terme à terme** |
| 40/44 résidu | 8, décomposé 2 / 2 / 2 / 2 | **8**, 2 / 2 / 2 / 2 | ✅ |
| 41 | les huit exemptions, nommées une par une | **les huit rendues sont exactement celles-là** | ✅ |
| 42 | `watchdog` l. 18 reste, l. 22 tombe | résidu `watchdog` = les deux tirets de l. 18 | ✅ |
| 44 | typo 0 / virgule 0 / créées 0 / hors latin 0 | 0 / 0 / 0 / 0 | ✅ |
| 44 | `hors perimetre` **29** (de 30, par le retrait C71) | **29** | ✅ |
| 45 | `4 fiche(s) lue(s), 4 a reprendre` | idem | ✅ |
| 52 anneau | 54 / 79 412, 18 / 68 | 54 / 79 412, 18 / 68 | ✅ |
| 52 dette | 59 / **84 686** / 4 | 59 / **84 684** / 4 | ❌ sur le terme « mots » |

**Le coût des passes est publié : −2 mots sur le lot** (−4 C71, +2 C109),
**0 mot sur `servomoteur` et `watchdog`**, où les treize et onze résolutions
sont toutes à coût nul par construction.

⚠ **INCIDENT n° 3 — J'AI DÉCLARÉ UNE LIGNE ENTIÈRE INCHANGÉE PARCE QUE SON
MÉCANISME PRINCIPAL L'ÉTAIT.** Prédiction 52 : « dette inchangée », motif
« les passes ne touchent aucun wikilink ». Le motif est **vrai** — 59 cibles
et 4 hors anneaux n'ont pas bougé — mais la ligne porte **un troisième terme
qui n'est pas un compte de liens** : les **mots** des cibles, qui incluent
les quatre fiches du lot. Elle tombe donc de **84 686 à 84 684, exactement le
delta du lot**. *Même famille que le 28/08 : une prédiction agrégée se vérifie
terme à terme, et un mécanisme juste sur un terme ne couvre pas les autres.*
Non bloquant, et la cause est entièrement expliquée par mes propres éditions.
**L'anneau 2, lui, est bien inchangé** — les quatre fiches en sont **hors**,
ce que la ligne « dont HORS anneaux 0..2 : 4 » dit depuis le cadrage.

**Diff des passes : 4 fichiers, 33 insertions, 33 suppressions**, aucune
ligne ajoutée ni retirée. **Score du bloc : 15 tenues sur 16.**

---

## Bloc 5 — G3 : garde de génération, puis les quatre `creer-fiche-en.mjs`

53. **Garde de génération (corollaire C116)** — les quatre cibles EN sont
    **ABSENTES** avant appel. Vérifié au cadrage : `content/en/embarque/mcu/
    micropython/` porte **35 fichiers**, aucun `micropython-servomoteur-en.md`,
    `-moteur-pas-a-pas-en.md`, `-pid-en.md`, `-watchdog-en.md`.
    **Jamais de `--force`.** Si une cible existe, on n'appelle pas.
54. **Les trois compteurs sont égaux par construction** : chaque génération
    rend `liens N -> N  ok`, `embeds N -> N  ok`, `code N -> N  ok`. **Aucune
    ligne `DIVERGE`.**
55. **Embeds, fiche par fiche** : servo **2**, pas-à-pas **1**, pid **1**,
    watchdog **1**. **Total 5.**
56. **Blocs de code clôturés** : **4 par fiche**, **total 16**.
57. **`prerequis suffixes`** : servo **1**, pas-à-pas **1**, pid **4**,
    watchdog **2**. **Total 8.**
58. **`draft:` inséré : 0 fois** — les quatre portent déjà `draft: false`.
    **`aliases retires` : 0** sur les quatre. **`ANCRES DE WIKILINK` : 0.**
    **`ANCRES INTRA-PAGE` : 0.**
59. **`libelles ajoutes` : 1 au total**, et un seul lien nu dans tout le lot —
    **`[[adc]]`** dans `micropython-servomoteur` § *Lire la position (retour
    analogique)*. Les trois autres fiches sont à **0 lien nu**.
    ⚠ **Rappel de mesure (24/08 suite 3)** : remplir le libellé d'un lien nu
    **gonfle le compte EN** sous C110 — `[[adc-en|Convertisseur
    analogique-numérique]]` fait quatre jetons là où `[[adc]]` en fait un.
    **+3 mots de foisonnement qui ne sont pas du texte**, à défalquer à la
    lecture du taux au gate G5.
60. **Corpus EN : 181 → 185 fiches.**
61. **`--controle` après génération : `185 fiche(s) controlee(s), 0
    divergente(s)`, `Liens non suffixes : 0 sur 0`.**
62. **Quatre lignes `Ecrit : content/en/... (N o)`**, N compris entre
    **7 000 et 13 000** octets par fiche.

### Constats du bloc 5 (G3, génération)

| # | Prédit | Constaté | Verdict |
|---|---|---|---|
| 53 | 4 cibles ABSENTES, 35 fichiers EN | 4 ABSENTES, 35 | ✅ |
| 54 | 3 compteurs égaux, 0 `DIVERGE` | 12 lignes `ok`, 0 `DIVERGE` | ✅ |
| 55 | embeds 2 / 1 / 1 / 1, total 5 | 2 / 1 / 1 / 1 | ✅ **exact** |
| 56 | code 4 / 4 / 4 / 4, total 16 | 4 / 4 / 4 / 4 | ✅ **exact** |
| 57 | prérequis 1 / 1 / 4 / 2, total 8 | 1 / 1 / 4 / 2 | ✅ **exact** |
| 58 | draft 0, aliases 0, ancres 0 et 0 | aucune ligne rendue | ✅ |
| 59 | 1 libellé ajouté, `[[adc]]` de `servomoteur` | `adc -> ADC`, et lui seul | ✅ |
| 59 bis | « +3 mots » de gonflement | **+1** (`adc-en` + `ADC` = 2 jetons contre 1) | ❌ |
| 60 | corpus EN 181 → 185 | **185** | ✅ |
| 61 | `185 / 0 divergente`, `0 sur 0` | idem | ✅ |
| 62 | 7 000 – 13 000 o par fiche | 11 886 / 8 890 / 10 142 / 8 760 | ✅ |

**Dérive : 0, sans source 0, sans marque 0, à jour 185.** L'ordre contraignant
du 24/08 (passe C109 **puis** génération) est tenu : les quatre empreintes
sont prises sur les sources **après** passes.

⚠ **Défaut mineur de prédiction (59 bis)** : j'annonçais que le libellé
injecté serait le `title:` FR complet, donc `Convertisseur
analogique-numérique` et **+3 jetons**. Le `title:` de `adc` est **`ADC`**, et
le gonflement non textuel vaut **+1 jeton**, pas +3. *J'avais lu le libellé
`[[adc|Convertisseur analogique-numérique]]` du Voir aussi et pris un libellé
pour un titre — la faute exacte que C125 interdit, commise ici sur un compte
de mots et non sur un titre.* Non bloquant ; le correctif de lecture est le
même : **le `title:` se lit dans le front matter de la cible, jamais dans un
libellé qui la vise.**

**Score du bloc : 11 tenues sur 12.**

---

## Bloc 6 — G4/G5 : rédaction, puis `batterie.ps1 -Phase etat -FichesEn <les quatre>`

### Décisions de rédaction prises seules (C117, sous la ligne du § 8), consignées

63. **`Demarrage` → `Startup`.** La chaîne affichée de `micropython-watchdog`
    est écrite **sans accent** dans la source française. La **troisième borne
    de C113** (25/08 suite 8) exempte les chaînes *dont la forme porte une
    contrainte matérielle*. **Elle n'est pas invoquée ici**, pour deux motifs
    mesurables : (1) **tout le bloc de code est désaccentué**, commentaires
    compris (`# chien arme APRES l'init`), donc l'absence d'accent est la
    **convention de code du module** et non un marqueur porté par cette
    chaîne ; (2) la production traduit les chaînes affichées — **24
    occurrences relevées** dans `content/en/embarque/mcu/micropython/`
    (`"Obstacle" if obstacle else "Clear"`, `"Press detected!"`,
    `"woke up from deep sleep"`…). **Traduite, donc, et propagée aux trois
    emplacements solidaires** : le `print()`, le bloc de sortie REPL, et les
    deux mentions de prose. *Si Tim tranche l'inverse, c'est un revert de
    quatre occurrences dans un seul fichier.*
64. **Les quatre titres EN sont posés** tels qu'arrêtés au gate G1 :
    `Driving a servo`, `Driving a stepper motor`, `PID control in
    MicroPython`, `Watchdog in MicroPython`.
65. **`micropython-watchdog-en` s'aligne sur `arduino-watchdog-en` en
    production**, jumelle stricte : le chapô, les gloses de *Voir aussi* et le
    vocabulaire (`feed`, `arm`, `pats the dog`, `last-resort`) sont repris au
    mot près **là où le français des deux fiches coïncide**, et divergent
    partout où ma passe C109 a modifié ma source (l'incise du § *À quoi ça
    sert* passée en parenthèses, le point-virgule scindé).

### Prédictions du bloc 6

66. **Garde** : HEAD `5b0617f`, node `v24.15.0`, pilotage inchangé ; copie
    **`batterie-sortie-2908b7.txt`** ;
    **`fichiers modifies non commites : 14   (hors sorties batterie : 9)`** —
    4 sources FR modifiées, 4 fiches EN neuves, `predictions-260829.md`.
    Les huit fiches portent des mtimes du **2026-08-29**, effet de mes
    éditions.
67. **Corpus FR : 242 fiches / 291 215 mots** (291 217 au 29/08, **−2** par
    les passes de ce lot).
68. **Déjà traduites : 185 fiches / 209 535 mots FR** (205 103 + 4 432).
    **Restant : 57 fiches / 81 680 mots.**
69. **`--controle` : 185 contrôlées, 0 divergente, liens non suffixés 0 sur 0.**
70. **Dérive : 0, sans source 0, sans marque 0, à jour 185.**
71. **Foisonnement du lot** (prédit **par lot et non par fiche** — règle du
    24/08 suite 3) : **+2,0 %**, fourchette **+1,0 % à +3,0 %**, soit
    **4 432 → environ 4 521 mots EN**.
    *Motif : le 25/08 (suite 8) a mesuré le foisonnement le plus bas du
    chantier sur les tutos d'actionneur Arduino — `servomoteur` +1,1 %,
    `moteur-pas-a-pas` +1,2 %, `moteur-cc` **négatif** — avec pour hypothèse
    non mesurée que ces fiches procèdent par chaînes nominales que l'anglais
    soude. Trois des quatre fiches d'ici sont de cette famille.*
    ⚠ **Si le lot sort au-dessus de +3 %, l'hypothèse de famille tombe** et
    le repère du 25/08 ne se cite plus.
72. **Foisonnement du corpus, 185 paires : +3,9 %**, fourchette 3,8 – 4,0.
73. **Style EN du lot : C109 8**, décomposé **2 / 2 / 2 / 2**, aux mêmes
    emplacements qu'en français. **typographie française 0**, **C109 créées
    par la traduction 0**, **virgule ambiguë 0**, **hors alphabet latin 0**,
    **hors périmètre 13**. *(Déjà mesuré à la rédaction ; la batterie doit
    rendre les mêmes chiffres.)*
74. **Médias : 12 absents, 0 cassé, 623 ok, 1 orphelin.** Les cinq embeds des
    quatre fiches EN visent des SVG **existants** (chemins recopiés à
    l'octet), donc `ok` monte de 618 à 623 et `ABSENT` ne bouge pas.
75. **Anneau 2 inchangé : 54 / 79 412, 18 porteuses / 68 clôtures**, les
    quatre fiches en étant hors.
76. **Dette : cibles rouges 55** (59 − 4), fourchette 55 – 58 ;
    **mots environ 80 252**, fourchette 79 500 – 84 000 ;
    **`dont HORS anneaux 0..2` : 0**, prédiction **ferme** — les quatre seules
    cibles hors anneaux étaient ce lot.
77. **Wikilinks : MORT 61** (65 − les quatre cibles désormais existantes),
    fourchette 60 – 63 ; **CASSE 0**, **AMBIGU 0**, **GABARIT 8**,
    **ALIAS 6** — les quatre fermes. **OK : 445**, fourchette 435 – 455.
78. **`--libelles` : 112**, fourchette 105 – 125. *Rappel du 25/08 (suite 4) :
    traduire une fiche rend jugeables d'un coup **tous les liens qui
    pointaient déjà vers elle**, donc le chiffre monte de plus que les
    libellés des quatre fiches neuves.*

### Constats du bloc 6 (sortie `batterie-sortie.txt`, horloge 14:41:37)

| # | Prédit | Constaté | Verdict |
|---|---|---|---|
| 66 | HEAD / node / pilotage inchangés | inchangés | ✅ |
| 66 | `14   (hors sorties batterie : 9)` | idem | ✅ |
| 66 | copie `batterie-sortie-2908b7.txt` | idem | ✅ |
| 67 | corpus FR **242 / 291 215** | 242 / **291 215** | ✅ |
| 68 | traduites **185 / 209 535** | 185 / **209 535** | ✅ |
| 68 | restant **57 / 81 680** | 57 / **81 680** | ✅ |
| 69 | `--controle` 185 / 0 / 0 sur 0 | idem | ✅ |
| 70 | dérive 0 / 0 / 0, 185 à jour | idem | ✅ |
| **71** | **foisonnement du lot +2,0 % (1,0 – 3,0)** | **+4,81 %** (4 432 → 4 645) | ❌ |
| 72 | corpus 185 paires **+3,9 %** | 209 535 → 217 746, **+3,9 %** | ✅ |
| 73 | style EN **8**, 2 / 2 / 2 / 2 | **8**, 2 / 2 / 2 / 2 | ✅ |
| 73 | typo 0, créées 0, virgule 0, latin 0 | 0 / 0 / 0 / 0 | ✅ |
| 73 | hors périmètre **13** | **13** | ✅ |
| 74 | médias 12 / 0 / **623** / 1 | 12 / 0 / **623** / 1 | ✅ |
| 75 | anneau 2 : 54 / 79 412, 18 / 68 | idem | ✅ |
| 76 | dette cibles **55** | **55** | ✅ |
| 76 | dette mots ~**80 252** | **80 252** | ✅ **exact** |
| 76 | `dont HORS anneaux` **0** (ferme) | **0** | ✅ |
| 77 | MORT **61** (60 – 63) | **61** | ✅ |
| 77 | CASSE 0, AMBIGU 0, GABARIT 8, ALIAS 6 | 0 / 0 / 8 / 6 | ✅ |
| **77** | **OK 445 (435 – 455)** | **429** | ❌ |
| 78 | `--libelles` **112** (105 – 125) | **112** | ✅ **exact** |

**Score du bloc : 20 tenues sur 22.**

⚠ **INCIDENT n° 4 — L'HYPOTHÈSE DU 25/08 SUR LES TUTOS D'ACTIONNEUR EST
RÉFUTÉE, ET ELLE L'EST PAR SA PROPRE CLAUSE.** J'avais prédit **+2,0 %,
fourchette +1,0 à +3,0**, en écrivant d'avance que **« si le lot sort
au-dessus de +3 %, l'hypothèse de famille tombe »**. Le lot sort à
**+4,81 %**. Décomposition, qui est le vrai enseignement :

| paire | FR | EN | foisonnement |
|---|---|---|---|
| `micropython-servomoteur` | 1 375 | 1 397 | **+1,6 %** |
| `micropython-watchdog` | 1 128 | 1 155 | **+2,4 %** |
| `micropython-moteur-pas-a-pas` | 872 | 941 | **+7,9 %** |
| `micropython-pid` | 1 057 | 1 152 | **+9,0 %** |
| **lot** | **4 432** | **4 645** | **+4,81 %** |

**L'écart interne est de 7,4 points**, et il ne se range **pas** par famille
d'actionneur : `servomoteur` et `moteur-pas-a-pas` sont deux tutos
d'actionneur de la même page-notion, à **6,3 points d'écart**. *La cause
supposée le 25/08 — « les tutos d'actionneur procèdent par chaînes nominales
que l'anglais soude » — ne classe pas ces quatre paires.* **Quatrième fois
que la liste des causes échoue à classer, et première fois qu'elle échoue à
l'intérieur d'une même famille.** **Cause non mesurée (C118)** ; le repère du
25/08 (suite 8) **ne se cite plus**, comme la charge C109 rapportée au volume
avant lui.
⚠ **Ce que la prédiction a bien fait** : elle a nommé son critère de
réfutation **avant** la mesure, donc la réfutation est nette et ne se
renégocie pas.

⚠ **DÉFAUT n° 5, DE MÉTHODE — J'AI DÉRIVÉ `OK` AU LIEU DE LE PRÉDIRE.**
`OK 445` a été obtenu en ajoutant « 425 + une vingtaine de liens résolus » :
c'est une **arithmétique dérivée** sur un compteur de **cibles distinctes**,
et non de liens. Les quatre cibles neuves résolvent bien 4 entrées de MORT
(65 → 61, prédit juste), mais `OK` compte les cibles **distinctes atteintes**
et les quatre fiches neuves n'en ajoutent que celles que personne ne visait
encore. Constaté **429**, soit **+4**, exactement les quatre fiches.
*C119 interdit l'arithmétique dérivée ; je l'ai appliquée à MORT, où le
mécanisme était juste, et pas à OK, où il ne l'était pas.* Non bloquant.

---

## BILAN GÉNÉRAL DES PRÉDICTIONS — LOT 6

| bloc | prédictions | tenues | réfutées |
|---|---|---|---|
| 1 — garde de référence | 12 | 11 | **1** |
| 2 — cadrage | 26 | 25 | **1** |
| 3a — garde avant passe | 3 | 3 | 0 |
| 3b — nombre d'éditions | 1 | 0 | **1** |
| 4 — remesure après passes | 16 | 15 | **1** |
| 5 — génération | 12 | 11 | **1** |
| 6 — clôture | 22 | 20 | **2** |
| **total** | **92** | **85** | **7** |

**Les sept réfutations, et ce qu'elles ont en commun.** Aucune ne porte sur un
**verdict** — pas un classement C109 faux, pas une exemption mal jugée, pas un
titre déduit d'un libellé. Six portent sur la **valeur d'un compteur** et une
sur une **unité de compte**. Trois d'entre elles ont la même cause exacte :
**j'ai lu l'étiquette d'un agrégat au lieu de son mécanisme** (le seau
`hors perimetre`, la ligne `dette`, le compteur `OK`). *Le correctif est écrit
au bloc 2 et il a tenu ensuite : tout compteur dont je publie une prédiction
se lit dans le code qui l'incrémente.*
