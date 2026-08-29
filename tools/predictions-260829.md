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

---
---

# Prédictions — 2026-08-29 (suite), pilote Claude Code, module `esp32/`

> Deuxième séance sous la sous-règle C116 « exécution directe », avec ses
> amendements 6 à 9 du 29/08 (suite 3). Même journée d'horloge que le lot 6,
> donc **même fichier** (nom lu sur `batterie.ps1 -Phase garde`, date ISO
> **2026-08-29**, heure **15:35:43** — non déduite).
>
> Horloge d'ouverture lue avant tout lancement de ce bloc : **15:35:43**.

## Bloc G — `batterie.ps1 -Phase garde` (lecture d'ouverture, CLAUDE.md étape 3)

Prédictions publiées **dans la transcription avant l'appel** et recopiées ici
après ; le fichier de prédictions ne pouvait pas être nommé avant que
l'horloge ne soit lue (C119 : la date ne se déduit pas). Consigné en décision
C117 au gate G0.

| # | prédiction | constat | verdict |
|---|---|---|---|
| G-1 | lignes non ASCII dans `batterie.ps1` = **0** | 0 | tenue |
| G-2 | copie C124 = `tools\batterie-sortie-2908b8.txt` | idem | tenue |
| G-3 | `phase demandee : garde   anneau : 2   chevron : False` | idem | tenue |
| G-4 | date ISO **2026-08-29**, heure **> 15:32:56** | 15:35:43 | tenue |
| G-5 | HEAD = `e65192b 2026-08-29 15:32:56 +0200` | idem | tenue |
| G-6 | non commités **1**, hors artefacts **0**, liste nominative hors artefacts **vide** | 1 (hors : 0) | tenue |
| G-7 | `node : v24.15.0` | idem | tenue |
| G-8 | JOURNAL / conventions / TODO au 2026-08-29, heure **entre 15:15:00 et 15:33:00** | 15:23:47 / **15:07:47** / 15:18:56 | **réfutée** |

**Réfutation G-8.** Fenêtre construite autour de l'horloge de clôture lue au
JOURNAL (15:15) au lieu d'être bornée par le début de la séance chat (14:55).
`conventions.md` a été écrit à 15:07:47, dans la séance, avant la clôture.
*Une fenêtre se borne sur les deux horloges publiées, pas sur la dernière.*
Sans effet sur la garde : les trois dates sont antérieures au commit `e65192b`,
l'arbre est propre hors artefacts, aucun état inattendu, aucune écriture bloquée.

---

## Bloc 0 — INSTRUCTION DE L'ÉCART DE COMPTAGE DES PLACEHOLDERS DE CAPTURE

Objet : le motif `Prendre capture d'écran d[eu]` rend **30 lignes sur 13
fiches** dans `content/` (mesure du 29/08 suite 2), dont **11 dans
`micropython/`**, quand le TODO annonce « restent **3** placeholders dans
`content/` : les trois KiCad ». Verdict demandé : quelle population chacun
compte, lequel est faux. **Aucune édition dans ce bloc** (arbitrage Tim (c)
du 29/08 : instruire, pas corriger).

### Échantillon nommé (C110, avant tout comptage)

`content/embarque/mcu/micropython/micropython-debug.md` **l. 91** :
`Prendre capture d'écran de *Thonny en débogage pas-à-pas d'un script
MicroPython, les valeurs des variables visibles*.`
Apostrophe **ASCII U+0027** vérifiée à `od -c`, **pas** U+2019. La forme est
une **ligne de prose autonome**, jamais un lien d'image `![…](…)`.
Jumelle EN l. 93 : `Take a screenshot of *…*.`

### Formes balayées, étiquetées séparément (sous-règle de C110, 29/08)

`F1 Prendre capture d'écran` (ASCII) · `F2 Prendre une capture` ·
`F3 Prendre capture d’écran` (U+2019) · `F4 [Cc]apture d['’]écran` (large FR) ·
`F5 Take a screenshot` · `F6 screenshot` (large EN, insensible à la casse) ·
`F7 [Pp]rendre (une )?photo` (famille prise de vue, distincte) ·
`F8 TODO|PLACEHOLDER|À PRENDRE|A PRENDRE` (marqueurs explicites).
Chaque forme comptée séparément sur `content/` **hors** `content/en/` et sur
`content/en/` **séparément**.

### Prédictions chiffrées

1. **F1 sur `content/` entier : 30 lignes, 13 fiches distinctes.** Le motif du
   JOURNAL portait `d[eu]` en plus ; sans cette contrainte, F1 ≥ 30.
   Fourchette : **30 à 34 lignes**, **13 à 15 fiches**. Réfutation : < 30.
2. **F1 restreint à `content/embarque/mcu/micropython/` : 11 lignes**, sur
   **5 à 8 fiches** distinctes.
3. **F3 (apostrophe U+2019) : 0 ligne** sur tout `content/`. L'échantillon dit
   ASCII. Réfutation : ≥ 1.
4. **F2 : 0 à 3 lignes.**
5. **F1 restreint à `content/en/` : 0 ligne** — sauf la classe de défaut du
   26/08 (suite 3), dont le seul cas connu (`micropython-debug-en` l. 93) a été
   traduit le 29/08 (suite 3). Réfutation : ≥ 1 ⇒ défaut de traduction résiduel
   à verser au gate.
6. **F5 sur `content/en/` : 15 à 30 lignes**, sur **8 à 15 fiches**.
   Critère : les jumelles EN des 13 fiches FR, dont toutes n'existent pas
   encore (185 paires sur 242 fiches FR au 29/08).
7. **F4 (large FR) : 35 à 75 lignes** — strictement **> F1**, l'écart étant de
   la prose qui *parle* de captures d'écran sans être un placeholder.
   Réfutation : F4 = F1 (⇒ aucune prose sur le sujet, invraisemblable).
8. **F1 restreint à `content/embarque/mcu/esp32/` : 0 à 2 lignes.** Ce chiffre
   entre dans le cadrage du lot 1 (G1) : un placeholder dans le périmètre est
   une contrainte de rédaction, pas une correction.
9. **`audit-medias.mjs --quiet` : 12 absents, 0 cassé, 623 ok, 1 orphelin** —
   valeurs du 29/08 (suite 2), aucune édition de média depuis. Réfutation :
   tout écart ⇒ mesure du jour fait foi (C118) et l'écart s'instruit.
10. **Le passage du TODO portant le 3 contient les chaînes `KiCad` et
    (`3 placeholders` ou `trois placeholders`)**, et **restreint sa population**
    par un qualificatif nommé (répertoire, campagne, lot ou type de média).
    Réfutation : si la ligne écrit « dans `content/` » sans aucune restriction,
    **c'est le TODO qui est faux** et l'écart devient une dette de production.
11. **VERDICT PRÉDIT : les deux comptages ne portent pas sur la même
    population, et aucun des deux n'est arithmétiquement faux.** Le motif
    compte des **lignes de prose tenant lieu d'image**, présentes que l'image
    soit prévue ou non ; le TODO compte un **reste-à-faire de production**
    borné à une campagne. Chiffre qui tranche : **le nombre de médias absents
    (prédit 12) est différent de 30 et différent de 3** — trois populations
    emboîtées, pas deux comptages du même objet.
    ⚠ **Clause de réfutation écrite avant la mesure** : si les 30 lignes
    correspondent **une pour une** à 30 entrées d'image absentes de
    `audit-medias`, alors les deux motifs comptent bien le même objet et **le
    TODO est faux** — la prédiction 11 tombe et l'écart devient un arbitrage
    de production à remonter à Tim.
12. **Aucune des 13 fiches ne porte à la fois une ligne F1 et un lien d'image
    absent au même emplacement** : **0 recouvrement exact**. Réfutation : ≥ 1.

### Garde de ce bloc

Lecture seule. **Zéro écriture dans `content/`, zéro écriture dans les
fichiers de pilotage.** Si le verdict conclut que le TODO ment sur un
reste-à-faire de production, c'est un **arbitrage remonté à Tim**, pas une
correction (brief G0, et point (8) de la sous-règle : une escalade non rendue
deviendrait une assomption écrite avec son coût de revert).

### Bilan du bloc 0 — 12 prédictions, 7 tenues, 5 réfutées

| # | prédiction | constat | verdict |
|---|---|---|---|
| 1 | F1 sur `content/` : 30–34 lignes, 13–15 fiches | **29 lignes, 15 fiches** | **réfutée** (lignes) / tenue (fiches) |
| 2 | F1 dans `micropython/` : 11 lignes, 5–8 fiches | **11 / 7** | tenue |
| 3 | F3 (U+2019) : 0 | 0 | tenue |
| 4 | F2 `Prendre une capture` : 0–3 | 0 | tenue |
| 5 | F1 dans `content/en/` : 0 | 0 | tenue |
| 6 | F5 `Take a screenshot` : 15–30 lignes, 8–15 fiches | **11 / 7** | **réfutée** |
| 7 | F4 large : 35–75 lignes, > F1 | **30 lignes / 16 fiches**, > F1 | **réfutée** (valeur) / tenue (ordre) |
| 8 | F1 dans `esp32/` : 0–2 | **0** | tenue |
| 9 | `audit-medias --quiet` : 12 / 0 / 623 / 1 | **12 / 0 / 623 / 1** | tenue |
| 10 | le passage du TODO **restreint** sa population | il la **généralise** : « seuls placeholders résiduels du corpus » | **réfutée** |
| 11 | verdict : populations différentes, aucun des deux faux | **même population, le quantificateur du TODO est faux** | **réfutée** |
| 12 | recouvrement placeholders / médias absents : 0 | **0** | tenue |

**Réfutation 1 — le motif du JOURNAL ne se reproduit à aucun commit.**
`Prendre capture d'écran d[eu]` rend **29 lignes / 15 fiches** dans `content/`
à HEAD **et aux sept commits précédents** (`git grep` sur chacun). La paire
publiée au 29/08 (suite 2), **30 / 13**, est fausse sur **ses deux termes**.
J'avais construit une fourchette 30–34 en tenant le 30 pour un plancher, donc
en tenant la mesure du pilote pour acquise ; C118 dit l'inverse. *Le brief
demandait d'instruire un écart entre deux comptages, et le premier chiffre
faux était dans celui qui servait de référence.*

**Réfutation 6 — les 11 `Take a screenshot` sont les jumelles EN de
`micropython/` et de personne d'autre.** J'avais dimensionné sur les 13 fiches
FR annoncées ; seul `micropython/` est traduit parmi les cinq modules porteurs
(`kicad`, `teensy`, `stm32`, `raspberry-pi` ne le sont pas). 11 / 7 en EN =
11 / 7 en FR, au chiffre près. *Le report un pour un est intact sur cette
forme.*

**Réfutation 7 — F4 ne dépasse F1 que d'une ligne, et elle est dans un
template.** `content/templates/fiche-tuto.md` **l. 107**, prose de gabarit.
J'attendais 6 à 46 lignes de prose parlant de captures ; il y en a **une**.
*La forme placeholder est la seule occurrence du syntagme dans tout le corpus
rédigé — F1 est un motif propre, pas un motif à débruiter.*

**Réfutations 10 et 11 — et c'est la première réfutation de VERDICT du
protocole.** Le pilote du lot 6 sortait à 7 réfutations sur 92 dont *aucune
sur un verdict*. Ici le verdict prédit tombe au premier bloc de la séance qui
devait être le vrai test. **Ce que la prédiction 11 a mal fait** : elle a
supposé que deux chiffres écrits par le dépôt devaient l'un et l'autre vouloir
dire quelque chose, et elle a construit trois populations emboîtées pour les
sauver tous les deux. La cause réelle est plus simple, et **elle était écrite
dans la source que le brief me donnait** : `TODO.md` **l. 472** publie depuis
le 22/08 « `3 placeholders C29, tous dans kicad` **en vaut 29** ». La clause de
réfutation avait raison sur l'issue et **tort sur son critère** — elle pariait
sur une correspondance une pour une avec les médias absents, qui est **nulle**
(recouvrement 0, prédiction 12 tenue).
*Dixième fois du chantier que la réfutation est dans ma source, et la première
où elle est dans le fichier que le brief cite comme partie au litige.*

---

## Bloc 1 — PASSE DE CORRECTION DU PILOTAGE VIVANT (arbitrage Tim (B) du 29/08)

Périmètre arbitré : **quatre emplacements**, aucun dans une fiche.
`TODO.md` l. 537 (quantificateur faux) ; `TODO.md` l. 18, `JOURNAL.md` l. 49 et
l. 75 (paire 30/13 fausse). **Les trois lignes de `_drafts` restent en trace
datée**, hors périmètre par arbitrage. `_drafts` n'est donc **pas** touché,
alors même que `normalize-pilotage.js` le couvre.

### Garde de péremption avant la passe (point (5) de la sous-règle)

1. `batterie.ps1 -Phase garde` : lignes non ASCII **0** ; copie
   **`tools\batterie-sortie-2908b9.txt`** ; date **2026-08-29**, heure
   **> 15:35:43** ; HEAD **`e65192b 2026-08-29 15:32:56 +0200`**, inchangé.
2. **Fichiers non commités : 3** *(hors artefacts de séance : **0**)*.
   Liste nominative attendue, contre laquelle le chiffre se lit (point (9)) :
   `M tools/predictions-260829.md` (filtré par `predictions-`),
   `?? tools/batterie-sortie-2908b8.txt`, `?? tools/batterie-sortie-2908b9.txt`
   (filtrés par `batterie-sortie`). **Rien d'autre.** Toute quatrième entrée
   ⇒ ARRÊT.
3. `node : v24.15.0`. Dates d'écriture **inchangées** au relevé de G0 :
   JOURNAL **15:23:47**, conventions **15:07:47**, TODO **15:18:56**.
   Tout écart ⇒ ARRÊT avant écriture.

### Normalisation (CLAUDE.md : avant tout diff sur un fichier de pilotage)

4. `node tools/normalize-pilotage.js --check` : **Total 0 caractère(s) à
   corriger, 0 fichier(s) modifié(s)**, **exit 0**, **11 cibles toutes en
   `[ok]`**, aucune `[skip]`. Mode `--check` choisi pour que la passe ne
   mélange pas une normalisation préexistante à mes quatre éditions.
   Réfutation : tout total > 0 ⇒ je lance le mode FIX **seul**, je présente son
   diff, et j'édite ensuite.

### Contrôle d'unicité d'ancre avant écriture (point (6), le terme qui a servi seul au lot 6)

Chaque ancre doit rendre **exactement 1** occurrence dans son fichier.

| ancre | fichier | occurrences prédites |
|---|---|---|
| A1 `` dans `content/`, seuls placeholders résiduels du corpus, `` | TODO.md | **1** |
| A2 `(30 lignes sur 13 fiches contre 3 annoncées)` | TODO.md | **1** |
| A3 `(30 lignes sur 13 fiches contre 3 annoncées au TODO)` | JOURNAL.md | **1** |
| A4 ``rend **30 lignes sur 13 fiches** dans `content/`,`` | JOURNAL.md | **1** |
| A5 `soit l'un des deux est faux. Non instruit (C118).**` | JOURNAL.md | **1** |

⚠ **Risque nommé sur A2.** `TODO.md` **l. 34** porte aussi la chaîne
`30 lignes` (vu au balayage de G0, ligne tronquée à l'affichage, contenu non
lu). Si elle porte la chaîne A2 entière, **A2 = 2 et l'écriture s'arrête avant
toute écriture** — les quatre autres éditions ne sont pas appliquées, et
j'étends A2 avant de relancer. *C'est le mode d'échec du lot 6, et l'atomicité
doit jouer dans le même sens : refuser, pas appliquer 4 sur 5.*
Toutes les ancres sont en **apostrophes ASCII** (`U+2019` absent des quatre
lignes, vérifié à `grep`).

### Les quatre éditions, une intention chacune

5. **É1 — `TODO.md` l. 537, retrait du quantificateur faux.** Le « 3 » est
   **conservé** (il est juste pour `kicad` seule) ; c'est « seuls placeholders
   résiduels du corpus » qui tombe, remplacé par le chiffre mesuré et sa
   décomposition. **+1 ligne de contenu, 0 ligne supprimée.**
6. **É2 — `TODO.md` l. 18 : `30 lignes sur 13 fiches` → `29 lignes sur 15
   fiches`.** Substitution sèche, aucun autre mot touché.
7. **É3 — `JOURNAL.md` l. 49 : idem.** Substitution sèche.
8. **É4a — `JOURNAL.md` l. 75 : idem** sur la paire ; le **11 de
   `micropython/` est conservé**, il est juste.
9. **É4b — `JOURNAL.md` l. 75, marque d'instruction** appendée après
   `Non instruit (C118).**` : une clause ⚠ nommant que la paire publiée était
   fausse sur ses deux termes. *Décision C117 : je substitue le chiffre au lieu
   de le laisser en trace, pour qu'aucune paire fausse ne reste greppable — la
   propagation par `grep` est exactement ce qui a coûté cette séance —, et
   j'ajoute la clause pour que l'erreur reste comptable.*
10. **Total : 5 éditions sur 2 fichiers**, `TODO.md` **2**, `JOURNAL.md` **3**.
    **0 fichier de `content/` touché**, **0 fichier de `_drafts/` touché**,
    **0 suppression de ligne**, **0 suppression de fichier**.

### Remesure immédiate après passe (point (4))

11. `grep -c "30 lignes sur 13 fiches"` : **JOURNAL.md 0**, **TODO.md 0**.
    Avant passe : JOURNAL **2**, TODO **1**.
12. La chaîne survit **uniquement** dans `tools/predictions-260829.md`, où elle
    est la citation du litige : **2 occurrences** de `30 lignes sur 13 fiches`
    (l. 345 et l. 808), inchangées.
13. `grep -c "seuls placeholders résiduels du corpus" TODO.md` : **0**
    (avant : **1**).
14. `grep -c "29 lignes sur 15 fiches"` : **JOURNAL.md 2**, **TODO.md 1**.
15. `git status --porcelain content` : **0 ligne**. `git status --porcelain
    _drafts` : **0 ligne**.
16. `git diff --stat` : **2 fichiers** (`JOURNAL.md`, `TODO.md`) plus
    `tools/predictions-260829.md`. **Aucune suppression nette** hors les
    fragments substitués.
17. Deuxième `normalize-pilotage.js --check` après édition : **Total 0**,
    exit 0 — mes éditions n'introduisent aucun caractère invisible.

### Gardes tenues dans ce bloc

Zéro `git commit`, zéro `git push`, zéro suppression de fichier, zéro coupe.
Aucun fichier n'est coupé, donc la règle du 28/08 (lecture intégrale avant
coupe) ne s'active pas. Les quatre lignes cibles ont été **lues en entier**
avant d'être ancrées.

### Amendement au bloc 1 — un cinquième emplacement, découvert par le contrôle d'unicité

⚠ **INCIDENT DE PÉRIMÈTRE, CONSIGNÉ.** Les cinq ancres rendent **1/1** comme
prédit (prédictions 5 à 9 tenues, risque nommé sur A2 **levé**). Mais le
contrôle a fait lire `TODO.md` **l. 34**, qui porte la paire fausse sous une
**autre formulation** : « écart de comptage des placeholders de capture —
**30 lignes sur 13 fiches mesurées contre 3 annoncées ci-dessous** ».
**Mon énumération de G0 en annonçait trois ; il y en a quatre.**
*Cause : au balayage de G0 j'ai coupé les lignes à 200 caractères et classé
`TODO.md` l. 34 depuis sa tête visible, sans lire la suite. C'est l'amendement
(7) transposé — lire l'affichage au lieu du contenu — et il avait été relu au
cadrage de cette séance même.*

**Décision C117, prise seule et flaguée au gate.** J'étends la passe à
`TODO.md` l. 34. Motif : l'arbitrage (B) porte sur *le pilotage vivant qui
porte la paire fausse*, et son intérêt est qu'aucune paire fausse ne reste
greppable ; l'exclure au motif que mon énumération était courte viderait
l'arbitrage de son objet. **Coût de revert : une substitution de chaîne dans
un fichier de pilotage, `git checkout -- TODO.md` la rend, aucune perte.**

**Balayage exhaustif avant écriture (sous-règle de C110 : toutes les formes en
usage, étiquetées séparément), prédictions :**

18. `30 lignes sur 13 fiches` dans les quatre fichiers de pilotage
    (`JOURNAL.md`, `TODO.md`, `BACKLOG.md`, `conventions.md`) : **4 lignes** —
    JOURNAL **2** (l. 49, l. 75), TODO **2** (l. 18, l. 34), BACKLOG **0**,
    conventions **0**.
19. Forme large `13 fiches` sur les mêmes quatre fichiers : **4 lignes**,
    les mêmes. Réfutation : ≥ 5 ⇒ un sixième emplacement, et la passe se
    réétend avant d'écrire.
20. Forme large `30 lignes` sur les mêmes quatre fichiers : **4 lignes**,
    les mêmes.
21. `JOURNAL-archive.md` : **0** sur les trois formes (le chantier y est
    antérieur à la mesure du 29/08).
22. **A6 — ancre de la cinquième édition**, `mesurées contre 3 annoncées
    ci-dessous`, dans `TODO.md` : **1** occurrence.

**É5 — `TODO.md` l. 34 : `30 lignes sur 13 fiches mesurées` → `29 lignes sur
15 fiches mesurées`.** Substitution sèche, aucun autre mot touché.
**Total de la passe porté à 6 éditions sur 2 fichiers** : `TODO.md` **3**,
`JOURNAL.md` **3**. Les prédictions 11 à 14 de la remesure sont **inchangées
en valeur** (elles portaient déjà « JOURNAL 0 / TODO 0 » après passe) sauf la
prédiction 11, dont le **avant-passe** devient **TODO 2 et non 1**, et la
prédiction 14, dont l'après-passe devient **TODO 2 et non 1**.

### Correctif É7 — la correction reproduisait la chaîne fausse

⚠ **P13 RÉFUTÉE PAR LE TEXTE DE LA CORRECTION ELLE-MÊME.** É1 remplace
« seuls placeholders résiduels du corpus » par une phrase qui **contient la
chaîne entière** (« Ce ne sont PAS les seuls placeholders résiduels du
corpus »). Le compteur rend donc **1** au lieu de **0**, et le motif que
j'avais publié — *qu'aucune formulation fausse ne reste greppable* — n'est pas
tenu : un `grep` futur retombe sur une ligne qui affirme le contraire de ce
qu'elle a l'air d'affirmer. *Même famille que P12 : les deux réfutations de la
remesure viennent de ce que j'ai écrit entre la prédiction et la mesure.*

**É7 — `TODO.md` l. 537, reformulation sans reprise de la chaîne.**
Ancre : `**Ce ne sont PAS les seuls placeholders résiduels du corpus**`,
occurrences prédites **1**.

23. Après É7 : `grep -cF 'seuls placeholders résiduels du corpus' TODO.md` =
    **0** ; `grep -cF 'placeholders résiduels' TODO.md` = **0**.
24. `git diff --stat` inchangé en nombre de fichiers : **3**
    (`JOURNAL.md`, `TODO.md`, `tools/predictions-260829.md`).
25. `git status --porcelain content` et `_drafts` : **0 ligne** chacun.
26. **P12 n'est pas réparable et ne se répare pas** : la chaîne doit vivre dans
    le fichier de prédictions, qui est la trace du litige. La prédiction était
    mal posée, pas le fichier. *Consignée telle quelle.*

### Bilan du bloc 1 — 25 prédictions, 19 tenues, 6 réfutées

| # | objet | verdict |
|---|---|---|
| 1–3 | garde de péremption (ASCII, copie b9, HEAD, 3 non commités / 0 hors artefacts + liste nominative, node, 3 mtimes) | **tenues** |
| 4 | `normalize --check` : 11 cibles en `[ok]` | **réfutée** — 10 `[ok]` + **1 `[skip]`** (`_drafts/captures-easyeda.md` introuvable) |
| 5–9 | ancres A1–A5 à **1** occurrence chacune, risque nommé sur A2 levé | **tenues** |
| 10 | 5 éditions, TODO 2 / JOURNAL 3 | **réfutée** — **7 éditions**, TODO **4** / JOURNAL **3** |
| 11 | `30 lignes sur 13 fiches` : JOURNAL 0, TODO 0 | **tenue** |
| 12 | même chaîne dans `predictions-260829.md` : 2 | **réfutée** — **10** |
| 13 | `seuls placeholders résiduels du corpus` dans TODO : 0 | **réfutée** — **1**, réparée par É7 |
| 14 | `29 lignes sur 15 fiches` : JOURNAL 2, TODO 2 | **tenue** |
| 15 | `content` 0, `_drafts` 0 | **tenue** |
| 16–17 | 3 fichiers au `--stat` ; `normalize --check` à 0 après édition | **tenues** |
| 18 | paire fausse : 4 lignes (JOURNAL 2, TODO 2, BACKLOG 0, conventions 0) | **tenue** |
| 19 | forme large `13 fiches` : 4 lignes | **réfutée** — **11** |
| 20 | forme large `30 lignes` : 4 lignes | **tenue** |
| 21 | `JOURNAL-archive.md` : 0 sur les trois formes | **réfutée** — **3** sur `13 fiches` |
| 22 | A6 à 1 occurrence | **tenue** |
| 23–25 | après É7 : 0 / 0, 3 fichiers, `content` et `_drafts` à 0 | **tenues** |

⚠ **QUATRE DES SIX RÉFUTATIONS SONT DES COMPTEURS QUI M'INCLUENT.** La 12 compte
la chaîne dans le fichier où je publie mes prédictions ; la 13 compte une
chaîne que **mon propre texte de correction** venait de réintroduire ; la 10
compte des éditions que la passe s'est ajoutées en cours de route ; la 19 et la
21 comptent une forme large que je n'avais pas balayée avant de la prédire.
*Le 29/08 (suite 2) avait nommé « un instrument qui se mesure lui-même » comme
une branche innocente ponctuelle. Ce n'est pas ponctuel : dès qu'une passe
écrit dans le même espace que celui qu'elle mesure, tout compteur prédit doit
nommer s'il s'inclut.* **À verser au bilan de la sous-règle.**

⚠ **ET LA 4 EST DE LA FAMILLE DE L'AMENDEMENT (7), UNE SÉANCE APRÈS SON
ÉCRITURE.** J'ai lu la liste `TARGETS` de `normalize-pilotage.js` — onze
entrées — **et la branche `existsSync` juste au-dessus**, puis prédit onze
`[ok]`. *Lire le code ne suffit pas : il faut lire la branche qu'on n'attend
pas.*

**Consigné, non réparé** : la clause É4b de `JOURNAL.md` l. 75 **cite** la
chaîne « seuls placeholders résiduels du corpus » entre guillemets, dans sa
réfutation. C'est la forme qu'emploie déjà `conventions.md` l. 1301 pour le
même chiffre ; elle reste greppable et c'est assumé — une citation encadrée
n'est pas une assertion. La différence avec É1 est que le TODO la portait dans
une phrase affirmative d'un item **ouvert**.

---

## Bloc 2 — G1, CADRAGE DU LOT 1 D'`esp32/`

### Composition du lot, arrêtée sur l'ordre de lecture du hub

`content/embarque/mcu/esp32/esp32.md` § *Tutoriels* classe le module en quatre
paliers de difficulté croissante. Le hub lui-même est **déjà traduit**
(`esp32-en.md`, seule jumelle du répertoire : **13 fiches FR, 1 EN**).

**Lot 1 = paliers 1 et 2, fiches propres au module, dans l'ordre du hub :**
`esp32-prise-en-main` · `esp32-gpio` · `esp32-serie` · `esp32-arduino-core`.
Les items *(transverse)* des mêmes paliers — `lire-une-datasheet`, `cpp`,
`niveaux-de-tension` — sont des fiches partagées du squelette, hors module,
**exclues**. Les paliers 3 et 4 (wifi, ble, uart, i2c, spi, deep-sleep,
freertos, idf) forment les lots suivants.

**Règle de repli publiée d'avance** : si `tot` du lot dépasse **6 657** (borne
du brief, plus haut lot du chantier), je retire `esp32-arduino-core`, dernier
du palier 2, et je remesure. Si `tot` dépasse 6 657 à trois fiches, je retire
`esp32-serie`.

### Prédictions

**Garde avant la passe**
27. Copie C124 `tools\batterie-sortie-2908b10.txt` ; HEAD **`e65192b`**
    inchangé ; date **2026-08-29**, heure **> 15:46:20** ; node **v24.15.0**.
28. Fichiers non commités : **5** *(hors artefacts de séance : **2**)*.
    Liste nominative : `M JOURNAL.md`, `M TODO.md` (les deux = mes éditions du
    bloc 1, **attendues**), `M tools/predictions-260829.md`,
    `?? tools/batterie-sortie-2908b8.txt`, `?? …b9.txt`. Toute sixième entrée
    ⇒ ARRÊT.
29. Dates d'écriture : `JOURNAL.md` et `TODO.md` **postérieures à 15:46**
    (mes éditions) ; `conventions.md` **inchangée à 15:07:47**. Une écriture
    sur `conventions.md` ⇒ ARRÊT.

**Chevron du module (C127, `mesure-chevron.mjs --lot` sur les 13 fiches)**
30. **Porteuses : 12 sur 13.** La non-porteuse est **`esp32.md`**, le hub —
    c'est une fiche-sommaire sans callout de code, et c'est aussi la seule déjà
    traduite. Réfutation : toute autre répartition.
31. ⚠ **La paire clôtures/blocs, et le brief peut se lire des deux façons.**
    Le code de `--anneau` publie `clotures en chevron` avec le commentaire
    « deux clotures = un bloc » ; le brief annonce « 22 **blocs** ».
    **Je prédis 44 clôtures et 22 blocs sur `esp32/`** — donc que le brief lit
    juste, et que les 12/22 sont bien une mesure du module, sous-ensemble des
    18 porteuses / 68 clôtures de l'anneau 2 restant.
    **Clause de réfutation** : si `mesure-chevron` rend **22 clôtures / 11
    blocs**, alors « 22 blocs » était la ligne de clôtures de l'anneau lue
    comme des blocs — l'amendement (7) une troisième fois — et **tous les
    dimensionnements en blocs du brief se divisent par deux**.
32. **Orphelines : 0. `ECART` non nul : 0 fiche** (le script publie
    `tot − deh − ded` et l'annonce nul partout).
33. **`ded` du module entier : 900 à 1 300 mots.** Base nommée : le taux de
    **50 mots par bloc mesuré sur `esp32/`** le 27/08 (suite 7) × 22 blocs =
    1 100. *Le taux est cité avec l'objet sur lequel il a été mesuré, comme la
    règle du 27/08 l'exige.* Réfutation : hors [900, 1 300].

**Volume du lot (C127 : deux volumes, jamais l'un sans l'autre)**
34. **`tot` du lot 1 : 4 800 à 6 400 mots**, donc **sous la borne 6 657**.
    Base : médiane du corpus **1 192 mots/fiche** (22/08), quatre fiches dont
    une *prise-en-main* qui est le format le plus lourd du module.
35. **`deh` du lot 1 : 4 500 à 6 100**, et **`tot` − `deh` = `ded` entre 250 et
    550** (5 à 11 blocs sur les 22 du module, à 50 mots).
36. **Décomposition par fiche, terme à terme** (règle du 28/08 : un total dans
    la fourchette ne valide pas la décomposition) — `tot` :
    `esp32-prise-en-main` **1 500 ± 400**, `esp32-gpio` **1 300 ± 400**,
    `esp32-serie` **1 100 ± 400**, `esp32-arduino-core` **1 500 ± 400**.
37. **Les 4 fiches du lot sont toutes porteuses de chevron.**

**Candidats C109 (`--style`)**
38. **Total du lot : 40 à 90 candidats.** ⚠ **Aucune base de taux valide** :
    la charge C109 rapportée au volume a été retirée le 27/08 (suite 3) après
    trois échecs, et la densité des quatre derniers lots va de **1,03 à 1,43
    pour cent mots** sans converger. La fourchette est donc large **par aveu
    d'ignorance**, pas par prudence. Réfutation : hors [40, 90].
39. **Seau `hors perimetre` : 60 à 140** — le code porte **quatre** familles
    (`titres`, `tableaux`, `alt`, **`tiret d intervalle numerique`**), la
    quatrième n'étant pas nommée sur la ligne d'affichage, et un module MCU est
    saturé de plages `3,3 V`, `0–65535`, `2,4 GHz`. *Compteur lu dans le code
    qui l'incrémente, amendement (7).*

**Anneau, dette (`--anneau 2`)**
40. **Anneau 2 : NET 54, restant 54, 79 412 mots** — inchangé depuis le 29/08
    (suite 2), aucune fiche n'ayant été traduite depuis.
41. **Angle mort du chevron sur le restant : 18 porteuses, 68 clôtures**,
    inchangé.
42. **Dette : 185 sources traduites, 55 cibles rouges, 80 252 mots, 0 hors
    anneaux.** La ligne `mots` porte un **compte de mots**, pas de cibles
    (leçon du 29/08 suite 2, réfutation 2 sur 7).

**Remesure de la paire `micropython-debug` (brief, non faite le 29/08 suite 3)**
43. **Dérive : 0 dérivée, 185 à jour.** Seule la jumelle **EN** a bougé ; la
    dérive compare le `source_sha256` de la **source FR**, inchangée.
44. **Foisonnement de la paire `micropython-debug` : entre +1,0 % et +7,0 %.**
    Fourchette large et assumée : le repère par famille est retiré depuis le
    29/08 (suite 2), le lot 6 étant sorti à +4,81 % avec **7,4 points d'écart
    interne**. **Critère de réfutation nommé avant la mesure** : hors
    [+1,0 %, +7,0 %] ⇒ la fourchette large elle-même ne tient pas, et il
    faudra cesser de prédire un foisonnement de paire isolée.
45. Le corpus EN a **augmenté** depuis les 217 746 mots du 29/08 (suite 2) :
    l'édition a remplacé une phrase française par sa traduction anglaise.
    **Delta attendu : −3 à +3 mots.**

### Garde de ce bloc
Lecture seule, **aucune édition**. Sortie de comparaison sauvegardée par la
batterie elle-même (C124).

### Complément au bloc 2 — la règle de repli se déclenche

`tot` du lot à quatre fiches = **7 392**, au-dessus de la borne **6 657**.
La règle publiée avant la mesure s'applique : **`esp32-arduino-core` est
retiré**, dernier du palier 2. **Lot 1 = `esp32-prise-en-main` ·
`esp32-gpio` · `esp32-serie`**, trois fiches.

46. **`tot` du lot à trois fiches : 6 107.** *Dérivation écrite AVANT la
    mesure, donc prédiction et non arithmétique dérivée — la portée de C119
    exclut explicitement les prédictions. Relancée à l'outil, pas publiée
    par addition.* Réfutation : toute autre valeur.
47. **`ded` du lot : 200 à 400 mots.** Les trois fiches portent **4 clôtures
    chacune** d'après la ligne `chevron:` de `--anneau`, soit **2 blocs
    chacune, 6 blocs au lot**, à **50 mots par bloc mesurés sur `esp32/`**
    (27/08 suite 7) = 300.
48. **`deh` du lot : 5 707 à 5 907.**
49. **`--style` sur les trois : C109 de prose 50 à 70** (74 aux quatre) ;
    **hors perimetre 10 à 17** (17 aux quatre) ; typographie française **0**,
    virgule ambiguë **0**, hors latin **0**, créées en EN **0**.

**`mesure-chevron.mjs --lot` sur les 13 fiches du module**
50. **porteuses 12 sur 13**, la non-porteuse étant **`esp32.md`** ;
    **44 clôtures, 22 blocs** ; **orphelines 0** ; **`ECART` 0 partout**.
51. **`ded` du module : 900 à 1 300** (prédiction 33, non tranchée).
52. **`ded` du lot de trois : identique au terme de la prédiction 47**, et la
    somme des `ded` des 13 fiches vaut le `ded` du total publié par le script.

**Remesure de la paire `micropython-debug`** — prédictions 43 à 45 inchangées.

### Bilan du bloc 2 (G1) — 26 prédictions, 18 tenues, 8 réfutées

**Cadrage arrêté.** Lot 1 = `esp32-prise-en-main` · `esp32-gpio` ·
`esp32-serie`. **`tot` 6 107, `deh` 5 836, `ded` 265** (C127 : les deux
volumes publiés ensemble, le dimensionnement se lit sur `deh`).
**12 clôtures, 6 blocs.** Candidats C109 **63**, hors périmètre **12**,
typographie française **0**, virgule ambiguë **0**, hors latin **0**.
Anneau 2 **NET 145 / restant 54 / 79 412**, angle mort **18 porteuses /
68 clôtures**. Dette **185 / 55 / 80 252 / 0 hors anneaux**. Dérive **0,
185 à jour**. Corpus FR **242 / 291 215**, traduites **185 / 209 535**,
restant **57 / 81 680**, EN **217 745**.

| # | prédiction | constat | verdict |
|---|---|---|---|
| 27 | garde : copie b10, HEAD `e65192b`, heure > 15:46, node v24.15.0 | tout conforme, 16:00:51 | tenue |
| 28 | non commités **5** (hors artefacts 2) + liste nominative | **6** (hors : **2**) | **réfutée** (total) / tenue (liste) |
| 29 | JOURNAL et TODO > 15:46, `conventions.md` inchangée | 15:48:38 / 15:49:20 / 15:07:47 | tenue |
| 30 | 12 porteuses sur 13, non-porteuse `esp32.md` | exact | tenue |
| 31 | **44 clôtures, 22 blocs** — le brief lit juste | **44 cl, 22 bl** | tenue |
| 32 | orphelines 0 ; **`ECART` 0 partout** | orphelines 0 ; **`ECART` ≠ 0 sur 11/12** | **réfutée** |
| 33 / 51 | `ded` du module 900–1 300 | **1 102** (50,1 mots/bloc) | tenue |
| 34 | `tot` du lot à 4 fiches 4 800–6 400 | **7 392** | **réfutée** |
| 35 | `deh` 4 500–6 100 / `ded` 250–550 à 4 fiches | lot abandonné par la règle de repli ; `deh` hors fourchette | **réfutée** |
| 36 | décomposition `tot` par fiche, 4 termes | 2 564 ✗ · 1 526 ✓ · 2 017 ✗ · 1 285 ✓ | **réfutée** (2/4) |
| 37 | les fiches du lot toutes porteuses | 3/3 | tenue |
| 38 | C109 de prose 40–90 (4 fiches) | **74** | tenue |
| 39 | `hors perimetre` 60–140 | **17** | **réfutée** |
| 40–42 | anneau 145/54/79 412 · 18/68 · dette 185/55/80 252/0 | exacts | tenues |
| 43 | dérive 0, 185 à jour | exact | tenue |
| 44 | foisonnement paire `micropython-debug` **+1,0 à +7,0 %** | **+8,2 %** | **réfutée, par sa clause** |
| 45 | corpus EN, delta −3 à +3 mots | **−1** (217 746 → 217 745) | tenue |
| 46 | `tot` du lot à 3 fiches = **6 107** | **6 107** | tenue |
| 47 | `ded` du lot 200–400 | **265** | tenue |
| 48 | `deh` du lot 5 707–5 907 | **5 836** | tenue |
| 49 | style à 3 fiches : C109 50–70, hors périmètre 10–17, quatre verdicts à 0 | 63 · 12 · 0/0/0/0 | tenue |
| 50 | chevron module : 12 / 44 / 22 / orphelines 0 / **ECART 0** | tout juste **sauf ECART** | **réfutée** |
| 52 | `ded` du lot cohérent avec la somme des fiches | 59 + 96 + 110 = 265 | tenue |

---

⚠ **TROUVAILLE : L'ANGLE MORT DU CHEVRON A UN QUATRIÈME SYMPTÔME, ET
L'INSTRUMENT DE C127 LE PUBLIE EN DÉCLARANT QU'IL EST IMPOSSIBLE.**
`mesure-chevron.mjs` écrit en tête « `ECART` non nul = `tot − deh − ded` ; il
doit etre 0 partout ». **Il est non nul sur 49 porteuses sur 50** —
**67 mots côté FR, 34 côté EN**.

**Mécanisme, lu dans le code et vérifié sur échantillon nommé.** Un bloc en
chevron s'ouvre sur `> ```cpp`. L'étiquette de langage `cpp` est **comptée
comme un mot de prose par C110** (le masque est ancré en début de ligne et ne
voit pas la clôture préfixée), **exclue de `deh`** (la ligne appartient au
bloc) et **absente de `ded`** (le contenu est *strictement* entre les
clôtures). Elle tombe donc entre les trois compteurs. **Preuve par le cas
négatif** : `esp32-idf` ouvre son unique bloc sur `> ``` ` **sans étiquette**
et sort à **`ECART` 0** — seule porteuse du corpus dans ce cas côté FR
(67 écarts pour 68 blocs).

**Ce que ça change, et ce que ça ne change pas.** `deh` **exclut correctement**
l'étiquette : le chiffre sur lequel C127 fait dimensionner les lots et lire le
foisonnement est **juste**. C'est `tot` qui sur-compte, de **1 mot par bloc
étiqueté** — **+67 sur 291 215 mots FR, soit 0,02 %**. *Le défaut est
négligeable en valeur et il n'est pas négligeable en nature* : l'en-tête du
script affirme une identité que le script lui-même dément à chaque ligne, et
`ECART` a été imprimé à toutes les mesures depuis le 27/08 sans être lu.
**Trois symptômes recensés au 24/08 (suite 3), il y en a quatre.**
*À verser à l'arbitrage : corriger l'en-tête, ou l'identité, ou les deux.*

⚠ **LA CLAUSE DE RÉFUTATION DU FOISONNEMENT DE PAIRE A TIRÉ.** `+8,2 %` contre
une fourchette **délibérément large** de +1,0 à +7,0. La clause disait : hors
fourchette ⇒ **cesser de prédire un foisonnement de paire isolée**. Elle
s'applique. *Et la cause est nommable ici sans mesure supplémentaire : la
paire a été éditée du côté EN seul, l'édition ajoutant de l'anglais sans
retirer de français — un foisonnement de paire dont un côté a bougé seul ne se
compare pas aux paires traduites d'un coup.* **Le repère de foisonnement du
lot 1 se lira sur le lot, jamais sur une paire.**

⚠ **LA 28 EST LA QUATRIÈME AUTO-INCLUSION DE LA SÉANCE.** J'ai énuméré cinq
fichiers non commités et oublié **la copie C124 que l'étape 0 du lancement
venait de créer**. Le chiffre hors artefacts, lui, est juste : c'est la garde
du point (9) qui a tenu, pas ma prédiction.

⚠ **LA 34 ET LA 36 ONT UNE BASE PÉRIMÉE.** J'ai dimensionné sur « médiane
**1 192** mots par fiche », valeur du 22/08 citée de mémoire ; la mesure du
jour rend **1 089**. Mais l'erreur ne va pas dans ce sens-là : les fiches
`esp32/` sont **plus lourdes** que la médiane, pas plus légères
(2 564 / 2 017). *Une base périmée m'a fait rater dans les deux directions à
la fois — le repère était faux ET le module ne s'y range pas.* **La 39 est du
même bois** : j'ai prédit 60–140 « hors perimetre » sur un module saturé de
plages numériques, il y en a **17**.

---

## Bloc 3 — G2, PASSES C109 SOUS C123

**Les 13 exemptions, nommées une par une AVANT l'édition** (pratique du lot 6 :
nommées avant, rendues une par une par l'outil après).

| fiche | l. | segment de droite | motif de l'exemption |
|---|---|---|---|
| prise-en-main | 34 | `autocomplétion, gestionnaire de cartes intégré` | nominal, énumération de deux items |
| prise-en-main | 64 | `pilote *CH341SER* depuis wch-ic.com` | nominal, aucun verbe |
| prise-en-main | 69 | `**Cas courant — le sélecteur de la barre d'outils.**` | chapô de section, forme libellé-glose (borne du 25/08) |
| prise-en-main | 75 | `**Chemin manuel — les menus *Outils*.**` | idem |
| prise-en-main | 143 ×2 | `modifier, téléverser, observer le changement attendu` | encadrée qui **énumère** trois infinitifs (précision du 25/08) |
| gpio | 19 | `lire un bouton, allumer une LED, mesurer une tension, commander un actionneur` | énumération de quatre infinitifs |
| gpio | 132 | `` `GPIO12` à HIGH = mauvaise tension Flash `` | nominal, second terme d'une énumération |
| serie | 113 | `pour lire une ligne entière, Serial.readStringUntil('\n')` | infinitif + nominal |
| serie | 183 | `moniteur ouvert, baud correct, mais sortie muette` | énumération adjectivale |
| serie | 193 | `pour un nombre, parseInt()` | infinitif + nominal |
| serie | 195 (a) | `rien, \n, \r, ou les deux` | énumération nominale |
| serie | 262 | `pour des analyses poussées, exporter vers un tableur` | infinitif |

⚠ **Trois cas nominaux traités malgré la lettre de C123**, et le motif est la
précision du 25/08 : *une encadrée qui **nomme un seul objet** tombe, une
encadrée qui **énumère** reste.* Ce sont `prise-en-main` l. 81
(`ici USB-SERIAL CH340 (COM9)`), l. 118 (`surtout les clones à pont CH340`),
l. 161 (`**2** sur la plupart des DevKit`), `serie` l. 81
(`sur puce USB native`) et l. 110 (`le menu à gauche du débit`). **C123 tranche
le doute vers le traitement**, et le précédent `un système d'exploitation
complet — Linux — là où…` est exactement cette forme.

### Prédictions

53. **50 occurrences traitées, 13 exemptées, sur 63.** Décomposition par
    fiche : `prise-en-main` **26 = 20 + 6**, `gpio` **14 = 12 + 2**,
    `serie` **23 = 18 + 5**. *Vérification terme à terme, un total juste
    n'est pas la preuve de la décomposition (règle du 28/08).*
54. **45 éditions distinctes** — cinq éditions couvrent deux occurrences
    chacune (les encadrées à deux tirets : `prise-en-main` 17 et 118,
    `serie` 81 et 110 ; plus `gpio` 63 dont les deux tirets encadrent).
    Réparties **18 / 11 / 16**.
55. **Contrôle d'unicité : les 45 ancres rendent 1 occurrence chacune.**
    Risque nommé : `gpio` porte **deux** renvois de forme
    `est transverse — voir [[…]]` (l. 72 `adc`, l. 122 `pwm`) ; les ancres
    incluent le lien. Une ancre à 0 ou ≥ 2 ⇒ **arrêt avant toute écriture**,
    les 44 autres non appliquées.
56. **Résidu C109 après passe : 13**, décomposé **6 / 2 / 5**, aux mêmes
    lignes qu'énumérées ci-dessus.
57. **Coût en mots de la passe : +4** (corollaire du 27/08 suite 3 — le coût
    en mots de toute passe FR se publie). Décomposition :
    `prise-en-main` **2 564 → 2 566** (+3 l. 59, −1 l. 87),
    `gpio` **1 526 → 1 526** (aucune réécriture, substitutions de ponctuation
    seules), `serie` **2 017 → 2 019** (+2 l. 195).
    **Lot `tot` 6 107 → 6 111.**
58. **`ded` inchangé à 265** — aucune édition ne touche l'intérieur d'un bloc
    en chevron. **`deh` 5 836 → 5 840.** **12 clôtures, 6 blocs, inchangés.**
59. **Après passe : typographie française 0, virgule ambiguë 0, hors alphabet
    latin 0, C109 créées en EN 0, `hors perimetre` 12** (inchangé : mes
    éditions ne touchent ni titre, ni tableau, ni alt, ni plage numérique).
60. **`git status --porcelain content` : 3 lignes**, les trois sources du lot.
    Aucune autre fiche touchée.

**Instrument de la passe, décision C117.** Les 45 substitutions passent par un
script **jetable écrit hors du dépôt** (répertoire de travail de session), qui
**vérifie l'unicité des 45 ancres et n'écrit rien si une seule échoue** —
mécanisme du lot 6, où l'atomicité a refusé au lieu d'appliquer 37 sur 38.
*Motif du hors-dépôt* : C114 veut le script jetable, C122 exige l'ASCII strict
et les ancres C109 sont **nécessairement accentuées** ; écrit hors du dépôt, il
reste jetable, ne laisse aucune empreinte git et ne prétend pas être le
`seance.ps1` que C122 et C126 régissent. **Coût de revert : `git checkout --`
sur les trois sources.**

### Bilan du bloc 3 (G2) — 8 prédictions, 8 tenues, 0 réfutée

| # | prédiction | constat |
|---|---|---|
| 53 | 50 traitées / 13 exemptées ; 26 = 20+6, 14 = 12+2, 23 = 18+5 | exact, terme à terme |
| 54 | 45 éditions distinctes, 18 / 11 / 16 | 45 |
| 55 | les 45 ancres à **1** occurrence | **45 / 45**, aucune écriture refusée |
| 56 | résidu **13**, décomposé **6 / 2 / 5**, aux lignes nommées | 13, aux **13 lignes exactes** nommées avant l'édition |
| 57 | `tot` 6 107 → **6 111** ; 2 566 / 1 526 / 2 019 | exact aux trois termes |
| 58 | `ded` 265 inchangé ; `deh` 5 836 → **5 840** ; 12 cl / 6 bl | exact |
| 59 | typographie 0, virgule 0, hors latin 0, créées EN 0, hors périmètre **12** | exact |
| 60 | `content` : 3 fichiers | 3 |

✅ **LES TREIZE EXEMPTIONS ONT ÉTÉ NOMMÉES UNE PAR UNE AVANT L'ÉDITION, PUIS
RENDUES UNE PAR UNE PAR L'OUTIL APRÈS.** C'est la garde qui distingue un
verdict d'un compteur : elle porte sur ce que la règle *décide*, pas sur ce
qu'un script *compte*. **Aucune réfutation de verdict sur ce bloc**, et le
coût en mots de la passe (+4) était prédit **à la fiche près**.

**Trois voies de résolution employées, dans les proportions du chantier.**
Découpage en phrases **17 fois**, virgule et mots de liaison **13 fois**,
parenthèses **11 fois** (dont **8 sur un renvoi `— voir [[x]]`**, la
spécialisation notée le 25/08), deux-points **4 fois**.

---

## Bloc 4 — G3, GÉNÉRATION DES TROIS SQUELETTES

### Les trois titres EN, arrêtés sous C125 avant la génération

**Test 1 écarté** : aucune des trois formes n'est un libellé de désambiguïsation.
**Test 2 écarté pour les trois, par la clause du 27/08 (suite 7)** : elle exige
que les deux jumelles portent le **même** `title:` français. Or le corpus FR
distingue déjà par le qualificatif de famille — `Prise en main d'Arduino` vs
`Prise en main de l'ESP32`, `Configurer les GPIO Arduino` vs `Configurer les
GPIO de l'ESP32`, `Moniteur série Arduino` vs `Moniteur série de l'ESP32`.
**Les trois descendent au test 3**, et la forme anglaise s'y lit **en
production**, jamais déduite.

| fiche | `title:` EN | forme lue sur |
|---|---|---|
| `esp32-prise-en-main-en` | **`Getting started with the ESP32`** | `Getting started with the ESP8266` — même forme, famille à chiffres avec **article défini** ; corroborée par `Getting started with Arduino` et `Getting started with MicroPython` (**3 `title:` en production**) |
| `esp32-gpio-en` | **`Configuring ESP32 GPIO`** | `Configuring Arduino GPIO` et `Configuring MicroPython GPIO` (**2 `title:`**) |
| `esp32-serie-en` | **`ESP32 serial monitor`** | `Arduino serial monitor` (**1 `title:`**) |

61. **Aucune collision de titre** — les trois portent le mot de famille. **Le
    chantier FR de nommage reste à dix paires**, il ne grossit pas.
62. **Garde de génération** : les trois cibles sont **ABSENTES**
    (`content/en/embarque/mcu/esp32/` ne porte que `esp32-en.md`).
    **Jamais de `--force`.** Une cible présente ⇒ arrêt.
63. **`--dry` d'abord, live ensuite.** Les **trois compteurs sont égaux par
    construction** (le squelette n'est pas une traduction) : **0 divergente**
    sur les trois.
64. **Le squelette porte le `title:` FRANÇAIS.** Les trois titres ci-dessus
    sont posés **à la rédaction**, pas à la génération. Réfutation : un
    `title:` anglais dans le squelette.
65. **Après génération : corpus EN 185 → 188 fiches.**
    `--controle` **188 / 0 / 0 sur 0**. Dérive **0, 188 à jour**.
66. **Blocs de code par fiche** (compteur du générateur) : `prise-en-main`
    **3 à 7**, `gpio` **4 à 9**, `serie` **5 à 10**. Chacune porte en outre
    **2 blocs en chevron**, que ce compteur **sous-compte** — c'est le
    symptôme 2 de C127, et `mesure-chevron --tout` le contrôlera à la clôture.

---

## Bloc 5 — G4, RÉDACTION DES TROIS FICHES EN

67. **Foisonnement du lot, lu sur `deh` (C127) : entre +1,5 % et +7,5 %.**
    ⚠ **Fourchette large et assumée, et son critère de réfutation est écrit
    avant la mesure.** Le repère par famille est **retiré** depuis le 29/08
    (suite 2) — lot 6 sorti à +4,81 % avec 7,4 points d'écart interne — et la
    charge C109 rapportée au volume l'a été le 27/08. Les quatre derniers lots
    vont de **+2,50 %** (`cpp` lot 2, dilué par le code inline) à **+4,81 %**.
    **Réfutation** : une valeur hors [+1,5 %, +7,5 %] ⇒ *la fourchette large
    elle-même ne tient pas*, et le foisonnement de lot cesse de se prédire,
    comme le repère de famille et la charge C109 avant lui.
68. **Écart interne entre les trois fiches : 0 à 8 points.** Aucune base pour
    prédire son rang ; le lot 6 a sorti 7,4 à l'intérieur d'une même famille.
69. **Foisonnement de `ded` : +0 % à +3 %.** Base nommée : +0,8 % mesuré le
    27/08 (suite 7) sur 9 paires porteuses, +1,45 % sur le lot `cpp` 2. Le
    contenu des blocs est quasi inerte, mais il porte des **commentaires**.
    `ded` du lot est de **265** mots, donc **265 → 265 à 273**.
70. **Report un pour un des 13 exemptions C109 : 13 en EN, aux mêmes
    emplacements**, décomposées **6 / 2 / 5**.
71. **C109 créées par la traduction : 0.** Une occurrence créée en anglais n'a
    jamais été arbitrée en français.
72. **Typographie française côté EN : 0** (verdict mécanique). ⚠ **Risque
    nommé, dixième séance consécutive** : les **alt d'image** sont recopiés du
    français avec leurs espaces avant `;` et `:`. `esp32-prise-en-main` porte
    **11 embeds**, le plus gros habitat du lot. *L'alt est hors périmètre pour
    C109 et **dans** le périmètre pour le § 5.3.* Contrôle explicite avant la
    batterie de clôture.
73. **Hors alphabet latin : 0. Virgule ambiguë : 0.**
74. **Libellés d'interface** : la production tranche. `micropython-debug-en`
    écrit `*Exécuter → Déboguer le script actuel* (Run → Debug current
    script)` — **libellé français conservé, équivalent anglais entre
    parenthèses**, parce que les captures montrent l'IDE en français. Même
    traitement pour l'IDE Arduino : `*Outils → Type de carte*`,
    `*Téléverser*`, `*Traceur série*`. Les libellés **déjà anglais dans la
    source** (`Select other board and port…`, `New Line`, `Both NL & CR`,
    `USB CDC On Boot`) restent tels quels — ils sont anglais **en
    production**, pas traduits par moi.
75. **Après rédaction : `--controle` 188 / 0 / 0 sur 0**, dérive **0, 188 à
    jour**, corpus EN **217 745 → entre 221 400 et 224 500**.
76. **`mesure-chevron --tout` à la clôture (C127) : 19 paires porteuses des
    deux côtés, 0 divergente** — 16 aujourd'hui plus les trois du lot, qui
    portent **2 blocs chacune côté FR** et doivent en porter **2 côté EN**.
    C'est le symptôme 2, celui qu'aucun autre contrôle ne voit.
77. **Aucun `title:` en collision** : les trois portent le mot de famille.

### Correctif É8 — la typographie française attrapée dans un alt, onzième séance

⚠ **PRÉDICTION 72 RÉFUTÉE, ET PAR L'HABITAT QU'ELLE NOMMAIT.** Verdict
mécanique **1** : `esp32-prise-en-main-en` **l. 124**, `100 %` avec espace
française, **dans le texte alternatif** de `done-uploading.png`. *J'ai nommé
le risque des alt au bloc 5, prédit 0, et je l'ai commis dans l'alt.* Le lot 6
l'avait vu dans un alt lui aussi ; c'est la **onzième séance consécutive** et
le deuxième alt d'affilée.

78. **É8** — ancre `` les lignes d'écriture à 100 %,`` → non : ancre anglaise
    `the writing lines at 100 %,`, **1 occurrence**, remplacée par
    `the writing lines at 100%,`. **Coût en mots : 0** (`%` n'est pas un mot
    au motif C110).
79. Après É8 : **typographie française 0**, `tot` du lot EN **inchangé**,
    C109 de prose **11**, hors périmètre **12**.

### Bilan du bloc 5 (G4 + clôture) — 13 prédictions, 10 tenues, 3 réfutées

| # | prédiction | constat | verdict |
|---|---|---|---|
| 67 | foisonnement du lot sur `deh` **+1,5 à +7,5 %** | **+3,70 %** (5 840 → 6 056) | tenue |
| 68 | écart interne 0 à 8 points | **3,63** (gpio +1,82 · prise-en-main +3,43 · serie +5,45) | tenue |
| 69 | `ded` **+0 à +3 %** | **−0,38 %** (265 → **264**) | **réfutée** |
| 70 | report un pour un **13** en EN, 6 / 2 / 5 | **11**, **5 / 1 / 5** | **réfutée** |
| 71 | C109 créées par la traduction 0 | 0 | tenue |
| 72 | typographie française **0** | **1**, dans un **alt** | **réfutée**, puis réparée (É8) |
| 73 | hors alphabet latin 0, virgule ambiguë 0 | 0 / 0 | tenue |
| 74 | libellés d'interface : forme de production, français + anglais entre parenthèses | appliquée 6 fois | tenue |
| 75 | `--controle` 188 / 0 ; dérive 0 / 188 ; corpus EN 221 400–224 500 | 188 / 0 ; 0 / 188 ; **224 071** | tenue |
| 76 | **19 paires porteuses, 0 divergente** (C127) | **19 / 0** | tenue |
| 77 | aucun `title:` en collision | aucun | tenue |
| 78–79 | É8 : ancre 1, coût 0 mot ; après : typo 0, C109 11, hors périmètre 12 | exact | tenues |

⚠ **`ded` FOISONNE NÉGATIVEMENT, PREMIÈRE FOIS DU CHANTIER.** 265 → **264**,
soit **−0,38 %**, quand les deux mesures connues donnaient **+0,8 %**
(27/08 suite 7, 9 paires) et **+1,45 %** (lot 2 `cpp`). La décomposition dit
où : `gpio` **96 → 94**, `serie` **110 → 111**, `prise-en-main` **59 → 59**.
*La règle en éprouvage — « `ded` se prédit avec une marge, pas comme une
constante » — est confirmée, et sa marge doit désormais **inclure le négatif**.
Un commentaire de code français rendu plus court en anglais suffit à faire
descendre le compteur, et rien dans les deux mesures antérieures ne le laissait
prévoir.*

⚠ **LA 70 EST UNE RÉFUTATION DE VERDICT, ET LA RÈGLE QUI M'A MANQUÉ ÉTAIT
DÉJÀ ÉCRITE.** J'ai prédit un report un pour un des 13 exemptions ; il y en a
**11**, parce que **deux point-virgules ont été traités à coût nul** — la règle
d'usage sous C123 du 27/08 (suite 3) : *traiter aussi à coût nul l'exemption
qui porterait une typographie française en anglais, là où la virgule est non
ambiguë*. Elle s'applique à `prise-en-main` l. 64 et `gpio` l. 132 ; elle ne
s'applique **pas** aux deux point-virgules de `serie` (l. 113 et 193), dont les
segments portent déjà des virgules. **Les 11 restants sont rendus aux 11 lignes
exactes prévues.** *J'ai écrit la prédiction avant d'avoir relu la règle, et la
règle était dans le fichier que j'avais ouvert le matin même.*

---

## BILAN GÉNÉRAL DE LA SÉANCE — LOT 1 D'`esp32/`

| bloc | prédictions | tenues | réfutées |
|---|---|---|---|
| G — garde d'ouverture | 8 | 7 | **1** |
| 0 — instruction de l'écart | 12 | 7 | **5** |
| 1 — correction du pilotage (arbitrage B) | 25 | 19 | **6** |
| 2 — G1 cadrage | 26 | 18 | **8** |
| 3 — G2 passes C109 | 8 | **8** | **0** |
| 4 — G3 génération | 6 | **6** | **0** |
| 5 — G4 rédaction et clôture | 13 | 10 | **3** |
| **total** | **98** | **75** | **23** |

**Taux de réfutation 23,5 %, contre 7,6 % au lot 6.** ⚠ *Et c'est le résultat
attendu, pas une dégradation : le lot 6 était « le lot le plus facile du plan,
quatre fiches, zéro porteuse de chevron ». `esp32/` était annoncé comme le vrai
test ; il a réfuté trois fois plus.*

**Où les réfutations se concentrent, et où elles disparaissent.** Les blocs
**3 et 4 — les passes C109 et la génération, c'est-à-dire les blocs de
verdict — sortent à 14 prédictions et 0 réfutation.** Les 23 réfutations sont
toutes dans les blocs de **mesure** et de **cadrage**. *Le protocole se trompe
sur ce qu'un compteur va rendre, pas sur ce que la règle décide.*

**Deux réfutations de verdict sur 23**, et les deux ont la même forme : **la
règle qui aurait donné la bonne réponse était déjà écrite dans une source que
j'avais ouverte le jour même** — le TODO l. 472 pour l'écart des placeholders
(prédiction 11), la règle d'usage sous C123 du 27/08 pour le report un pour un
(prédiction 70).

⚠ **CINQ RÉFUTATIONS SUR 23 SONT DES COMPTEURS QUI M'INCLUENT** (12, 13, 10,
28, et la 72 qui compte une faute de mon propre alt). *Le 29/08 traitait
« l'instrument qui se mesure lui-même » comme une branche innocente
ponctuelle ; sur une séance entière il en apparaît cinq.* **Règle d'usage
proposée : sous exécution directe, tout compteur prédit déclare s'il inclut les
artefacts de la séance en cours — le fichier de prédictions, les copies C124,
et le texte des corrections elles-mêmes.**

---
---

# Prédictions — 2026-08-29 (suite 6), pilote Claude Code, LOT 2 D'`esp32/`

> **Troisième séance sous la sous-règle C116 « exécution directe »**, avec ses
> amendements 6 à 9 du 29/08 (suite 3), et **première séance sous C131**
> (arbitrage Tim (a) du 29/08 suite 5). Même journée d'horloge que le lot 6 et
> que le lot 1 d'`esp32/`, donc **même fichier de prédictions**.
>
> **Trois blocs hors lot en tête de séance** — ①(b) l'en-tête et la colonne
> `etiq` de `mesure-chevron.mjs`, ③(c) le mode `--alt` de `creer-fiche-en.mjs`,
> et le correctif d'alias (c) — puis le **palier 3 du hub** : `esp32-wifi`,
> `esp32-ble`, `esp32-uart`, `esp32-i2c`, `esp32-spi`, `esp32-deep-sleep`.
>
> L'horloge d'ouverture n'est **pas déduite** : elle est lue par le bloc G
> ci-dessous, premier lancement de la séance.

## DÉCLARATION C131 D'OUVERTURE — population des compteurs, et ce que cette séance y a déjà versé

**Ce que la séance a versé dans le dépôt avant le bloc G : rien.** Aucune
écriture, aucune sortie d'outil, aucune copie C124. Les lectures d'ouverture
(`conventions.md` head + tail, `JOURNAL.md`, `CLAUDE.md`, `tools/batterie.ps1`,
`tools/predictions-260829.md`) sont des lectures ; elles ne modifient aucun
horodatage de `content/` ni aucun compteur git.

**Ce que le bloc G va verser AVANT de se mesurer lui-même**, et qui entre donc
dans ses propres compteurs :
1. **Le présent texte**, appendu à `tools/predictions-260829.md` — fichier
   **suivi par git** (arbitrage (f)(ii) du 29/08 : il reste suivi, c'est le
   filtre de `batterie.ps1` qui l'écarte). Il fait donc **+1 au compteur
   `fichiers modifies non commites`** et **0 au compteur hors artefacts**,
   le filtre `-notmatch 'predictions-'` l'excluant.
2. **La copie C124** que l'étape 0 crée avant que l'étape 1 ne lise
   `git status` : un fichier **neuf, non suivi**, donc **+1 au compteur total**
   et **0 hors artefacts** (filtre `-notmatch 'batterie-sortie'`).
3. `tools\batterie-sortie.txt` lui-même est **exclu par `.gitignore`** (chemin
   exact) : **+0** aux deux compteurs.

**Populations nommées pour la suite de la séance** — `fichiers modifies non
commites` = sortie de `git status --porcelain` **entière**, artefacts de séance
compris ; `hors artefacts de seance` = la même moins les deux motifs
`batterie-sortie` et `predictions-`, **à lire contre la liste nominative**
(C116 (9)) et jamais seul.

## Bloc G — `batterie.ps1 -Phase garde` (lecture d'ouverture, CLAUDE.md étape 3)

Commande :
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

| # | prédiction | constat | verdict |
|---|---|---|---|
| G-1 | lignes non ASCII dans `batterie.ps1` = **0** | 0 | tenue |
| G-2 | copie C124 = `tools\batterie-sortie-2908b15.txt` (rangs 1 à 14 occupés, premier rang libre = 15) | idem | tenue |
| G-3 | ligne d'en-tête exacte : `phase demandee : garde   anneau : 2   chevron : False` | idem | tenue |
| G-4 | date ISO **2026-08-29**, heure **> 17:36:00** (dernière écriture connue dans `tools/`, `README.md`) | 2026-08-29 **18:12:59** | tenue |
| G-5 | HEAD = `1846e6c`, date de commit **2026-08-29**, heure **entre 17:17:00 et 18:30:00** | `1846e6c 2026-08-29 17:37:55 +0200` | tenue |
| G-6 | `fichiers modifies non commites` = **1** (le fichier de prédictions que ce bloc vient d'appender), `(hors artefacts de seance : 0)` — voir déclaration C131 ci-dessus | **2** (hors : 0) | **réfutée** |
| G-7 | `node : v24.15.0` | idem | tenue |
| G-8 | `JOURNAL.md`, `conventions.md`, `TODO.md` tous au **2026-08-29**, les trois heures **entre 17:00:00 et 17:40:00**, et **les trois antérieures à l'horloge de HEAD** | 17:32:23 / 17:33:51 / 17:34:54, les trois < 17:37:55 | tenue |
| G-9 | aucune fiche listée sous les dates d'écriture (ni `-Fiches` ni `-FichesEn` passés) : la liste s'arrête aux trois fichiers de pilotage | idem | tenue |
| G-10 | code de sortie de chacune des deux étapes = **0** | 0 et 0 | tenue |

**Ce qu'un écart déclencherait.** Une date de `content/` postérieure au dernier
relevé, un HEAD différent de `1846e6c`, ou un `hors artefacts` non nul dont la
liste nominative ne rend pas compte ⇒ **arrêt avant toute écriture** et remontée
à Tim (CLAUDE.md, garde de péremption).

### Constats du bloc G (sortie `batterie-sortie.txt`, horloge 18:12:59)

**10 prédictions, 9 tenues, 1 réfutée.** Garde **verte** : HEAD `1846e6c` du
2026-08-29 17:37:55, arbre propre **hors artefacts**, les trois fichiers de
pilotage écrits **avant** le commit, node `v24.15.0`, aucune fiche du périmètre
touchée depuis. Aucun état inattendu, aucune écriture bloquée.

⚠ **RÉFUTATION G-6, ET C'EST C131 PRISE EN DÉFAUT PAR SA PROPRE PREMIÈRE
APPLICATION.** La déclaration C131 d'ouverture énumère **deux** versements du
bloc dans sa propre population — le texte des prédictions (+1) et la copie C124
(+1) — puis la prédiction chiffrée en écrit **1**. Le constat est **2**.
*La déclaration était juste et le nombre ne l'a pas portée* : C131 exige de
**nommer** les artefacts, elle n'a pas dispensé de les **additionner**. Règle
d'usage qui en sort : **une déclaration C131 se termine par le total qu'elle
implique, sinon elle ne garde que la prose.** Le chiffre `hors artefacts` est
juste (0) et la liste nominative est **vide** : la garde n'est pas affectée.

---

## Bloc 1 — ①(b) ÉTAPE A : RELEVÉ DE RÉFÉRENCE DU CHEVRON, AVANT TOUTE ÉDITION

Objet : figer le banc de non-régression de la réécriture d'en-tête, et mesurer
`ECART` fiche par fiche pour le confronter à l'identité arbitrée le 29/08
(suite 5) — **`ECART` = somme des mots d'étiquette de langage**.

Commande :
`node tools/mesure-chevron.mjs --tout` (sortie sauvegardée **datée**, C124, en
`tools/chevron-2908-avant.txt`)

### Déclaration C131

**Population comptée : `content/**` privé de `templates/`**, les deux langues.
**Ce que la séance y a versé à cet instant : rien** — aucune fiche créée,
modifiée ou supprimée depuis HEAD `1846e6c`, la garde du bloc G l'ayant vérifié
(`hors artefacts de seance : 0`, liste nominative vide). Les deux artefacts que
la séance a produits — `tools/predictions-260829.md` et
`tools/batterie-sortie-2908b15.txt` — sont **hors `content/`** et n'entrent donc
dans aucun compteur de ce bloc. **Total des versements de la séance dans la
population de ce bloc : 0.**

### Lecture du code faite avant de prédire (règle du 29/08 : le code, pas le README)

`analyse()` l.86-119 : `total = compterMots(texte)` sur le texte **entier** ;
`dansBloc` porte les lignes `a..b` **bornes comprises**, donc `dehors` les
exclut ; `contenu` va de `a+1` à `b-1` **strictement**, donc `dedans` ne porte
ni l'ouverture ni la clôture. La ligne d'ouverture `> ```cpp` n'est masquée par
`BLOC_CLOTURE` (`/^```[\s\S]*?^```[^\n]*$/gm`, **ancré en début de ligne**) ni
dans `compter-mots.mjs` l.32 ; `MOT` l.33 en tire l'unique jeton `cpp`.
**Donc `ECART = tot − deh − ded` = mots des lignes d'ouverture et de clôture des
blocs appariés**, et si les clôtures sont nues, **= mots d'étiquette**.

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 1-1 | `porteuses` = **53**, dont **FR 34** et **EN 19** | 53, FR 34, EN 19 | tenue |
| 1-2 | FR : **68 blocs**, `tot` et `deh` conformes au relevé du 29/08 (suite 4), `ded` FR = **2 175** | 68 bl, `ded` 2 175, `tot` 46 110, `deh` 43 868 | tenue |
| 1-3 | EN : **40 blocs**, `ded` EN = **942** | 40 bl, `ded` 942, `tot` 26 403, `deh` 25 421 | tenue |
| 1-4 | somme des `ECART` **FR** = **67** | **67** | tenue |
| 1-5 | somme des `ECART` **EN** = **40** | **40** | tenue |
| 1-6 | nombre de porteuses FR à `ECART` **0** = **1**, et c'est **`embarque/mcu/esp32/esp32-idf.md`** (ouverture `> ``` ` sans étiquette) | 1, `esp32-idf.md` | tenue |
| 1-7 | nombre de porteuses EN à `ECART` 0 = **0** | 0 | tenue |
| 1-8 | `ECART` = **1 par bloc étiqueté** sur **toutes** les porteuses, donc `ECART` de chaque fiche = son nombre de blocs, sauf `esp32-idf` à 67 pour 68 | vérifié ligne à ligne sur les 53 | tenue |
| 1-9 | porteuses marquées `ORPHELINE` = **0** des deux côtés | 0 | tenue |
| 1-10 | appariement : **19 paires porteuses des deux côtés, 0 divergente** | 19 / 0 | tenue |
| 1-11 | aucune étiquette de langage ne pèse **plus d'un mot** : la somme des `ECART` égale donc le nombre de blocs étiquetés, pas seulement leur nombre de mots | 67 = 67 blocs étiquetés ; 40 = 40 | tenue |

**Ce que 1-4 et 1-5 valent comme prédiction.** Les deux chiffres du 29/08
(suite 4) — 67 FR, 34 EN — ont été mesurés **avant** la génération des trois
fiches EN du lot 1, sur **50 porteuses** (34 FR + 16 EN). Le côté FR n'a pas
bougé depuis, d'où 67 reconduit. **Le côté EN est une extrapolation** : 34 blocs
étiquetés à l'époque, plus les **6 blocs** que les trois jumelles EN ont
apportés (EN 34 → 40 blocs, appariement 0 divergente au 29/08 suite 4). Si les
six nouveaux blocs ne sont pas tous étiquetés, 1-5 tombe **et 1-8 avec elle**.

### Constats du bloc 1 (sortie `tools/chevron-2908-avant.txt`, 96 lignes)

**11 prédictions, 11 tenues, 0 réfutée.** L'identité arbitrée est **confirmée
fiche par fiche** : sur les 53 porteuses, `ECART` vaut exactement le nombre de
blocs, à la seule exception d'`esp32-idf.md` (1 bloc, `ECART` absent donc nul),
dont l'ouverture est `> ``` ` sans étiquette. **Aucune étiquette ne pèse plus
d'un mot** dans le corpus actuel, aucune clôture orpheline, aucun texte après
une clôture. *La prédiction 1-5, seule extrapolation du bloc, tient : les six
blocs apportés par les trois jumelles EN du lot 1 sont tous étiquetés.*

Banc de non-régression figé : **FR 34 / 136 cl / 68 bl / 46 110 tot / 2 175 ded
/ 43 868 deh** ; **EN 19 / 80 cl / 40 bl / 26 403 tot / 942 ded / 25 421 deh**.

---

## Bloc 2 — ①(b) ÉTAPE B : RÉÉCRITURE DE L'EN-TÊTE, COLONNE `etiq`, `ECART` CONDITIONNEL

Objet : porter l'arbitrage Tim ①(b) du 29/08 (suite 5) dans
`tools/mesure-chevron.mjs`. **Une seule intention** : dire vrai sur l'identité
et ne signaler que ce qui la viole.

### Ce qui est écrit, terme à terme

1. `analyse()` — un champ `etiq` de plus : pour chaque bloc **apparié**, la
   ligne d'ouverture est privée de son préfixe de citation (`PREFIXE`), puis
   du fence d'apostrophes inversées ; ce qui reste est l'**étiquette de
   langage**, passée à `compterMots`. `etiq` = somme sur les blocs.
   **Aucun autre champ n'est touché** — `total`, `dedans`, `dehors` gardent
   leur code d'origine à la ligne près.
2. `ligneRapport()` — colonne `etiq` ; `ECART:` **n'est imprimé que si
   `ecart !== etiq`**.
3. `total()` — la ligne de somme porte `etiq`.
4. `enTete()` — l'identité vraie remplace « il doit etre 0 partout ».

### Déclaration C131

**Population comptée : `content/**` privé de `templates/`, inchangée** — le
fichier édité est `tools/mesure-chevron.mjs`, **hors de la population qu'il
compte**. **Total des versements de la séance dans la population de ce bloc :
0**, comme au bloc 1. *L'instrument change, l'objet non : c'est précisément ce
qui rend le banc de non-régression lisible.*

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 2-1 | fichiers touchés = **1** (`tools/mesure-chevron.mjs`), **aucune fiche de `content/`** | 1 (`tools/mesure-chevron.mjs`), 0 fiche | tenue |
| 2-2 | `git diff --stat` sur ce fichier : **4 hunks** (`enTete`, `analyse`, `ligneRapport`, `total`) plus l'en-tête de commentaire du fichier | **11 hunks** en `-U0` (5 zones logiques) | **réfutée** |
| 2-3 | lignes non ASCII introduites dans `mesure-chevron.mjs` = **0** | 0 | tenue |
| 2-4 | après édition, `--tout` : porteuses **53**, FR **34 / 136 cl / 68 bl**, EN **19 / 80 cl / 40 bl** — identiques au bloc 1 | 53 ; FR 34/136/68 ; EN 19/80/40 | tenue |
| 2-5 | **banc de non-régression** : sur les 53 lignes, les triplets `tot / ded / deh` sont **identiques** à `chevron-2908-avant.txt`, **0 divergence** | **0 divergence** sur 53 fiches, 0 clé manquante | tenue |
| 2-6 | totaux inchangés : FR `46110 tot / 2175 ded / 43868 deh`, EN `26403 tot / 942 ded / 25421 deh` | idem aux six chiffres | tenue |
| 2-7 | somme `etiq` FR = **67**, somme `etiq` EN = **40** | **67** et **40** | tenue |
| 2-8 | occurrences de la chaîne `ECART:` dans la sortie d'après = **0** | 0 | tenue |
| 2-9 | `esp32-idf.md` affiche `etiq` = **0** et **aucun** `ECART:` | `0 etiq`, aucun `ECART:` | tenue |
| 2-10 | l'appariement FR/EN est **inchangé** : 19 paires, 0 divergente | 19 / 0 | tenue |
| 2-11 | la chaîne `il doit etre 0 partout` a **0 occurrence** dans le fichier après édition | 0 | tenue |
| 2-12 | contrôle d'unicité d'ancre avant écriture : chacune des **4** ancres d'édition rend **exactement 1** occurrence | **8 ancres**, chacune à 1 occurrence | **réfutée** |

### Constats du bloc 2 (sorties `tools/chevron-2908-avant.txt` et `tools/chevron-2908-apres.txt`, C124)

**12 prédictions, 10 tenues, 2 réfutées.** Le banc de non-régression est
**vert** : les cinq colonnes `cl / bl / tot / ded / deh` sont **identiques sur
les 53 porteuses**, aucune clé manquante d'un côté ni de l'autre. `etiq` sort à
**67 FR / 40 EN**, exactement les sommes d'`ECART` du bloc 1 : l'identité
arbitrée tient sur tout le corpus, et **plus une seule ligne n'imprime
`ECART:`**.

**Les deux réfutations portent sur le volume de mon propre travail, pas sur une
mesure du dépôt.** 2-2 annonçait 4 hunks plus l'en-tête, le `git diff -U0` en
rend **11** ; 2-12 annonçait 4 ancres de contrôle d'unicité, il en a fallu
**8**. Les deux ont la même cause : **j'ai compté les zones logiques
(`enTete`, `analyse`, `ligneRapport`, `total`) et publié ce compte comme un
compte d'éditions**, alors que `analyse` seule se touche à trois endroits
disjoints — déclaration du tableau, collecte dans la boucle, champ du retour.
*C'est l'habitat « le compte d'éditions qui grossit en route » nommé par C131,
et la déclaration C131 de ce bloc ne l'avait pas couvert : elle déclarait la
population de `content/`, pas celle des hunks.* **Rien de mesuré sur le corpus
n'est atteint** ; les deux compteurs faux sont des compteurs d'intention.

⚠ **INCIDENT D'OUTILLAGE, SANS EFFET SUR UNE MESURE.** La première écriture du
champ `etiq` a produit un littéral de chaîne coupé en deux lignes
(`etiquettes.join('` puis une ligne nue), le transport shell ayant replié la
séquence d'échappement. **Le fichier ne se chargeait plus** ; corrigé à
l'édition suivante, `node` relancé sans erreur. *Détecté par le lancement, pas
par la relecture — et c'est le troisième terme du remplacement du `dryRun`
(remesure immédiate) qui a mordu.* Second effet du même transport : le fichier
de prédictions est passé en CRLF à une écriture Python, **remis en LF**
(`* text=auto eol=lf` au `.gitattributes`), 0 CR résiduel.

---

## Bloc 3 — ③(c) MODE `--alt` DE `creer-fiche-en.mjs`, AVEC L'EXEMPTION NOMMÉE `tinkercad`

Objet : combler le trou instruit le 29/08 (suite 5) — **l'alt est balayé par un
seul tamis sur quatre**. `--style` range l'alt en *hors périmètre* pour les
candidats C109 (le verdict *typographie française* y mord seul),
`audit-medias.mjs` capture l'alt dans son motif mais n'audite que le **chemin**,
`--controle` ne compare que des **nombres** d'embeds. *Un alt français à
typographie propre ne déclenche donc rien.*

Le mode compare, pour chaque paire, **l'alt EN à l'alt FR**, position par
position, et rend **trois verdicts mécaniques** : `IDENTIQUE` (l'alt EN est
l'alt FR à l'octet), `VIDE`, `MOT FR`.

### Échantillon nommé, lu AVANT d'écrire le motif (C110)

`content/embarque/mcu/arduino/tinkercad.md` et sa jumelle, **4 embeds chacune**,
mêmes chemins, même ordre :

| # | alt FR | alt EN |
|---|---|---|
| 1 | `Tableau de bord Tinkercad, bouton « Créer un nouveau Circuit » visible\|600` | `Tinkercad dashboard, with the "Créer un nouveau Circuit" button visible\|600` |
| 2 | `Plan de travail Tinkercad : Arduino Uno, LED et résistance câblées, barre latérale des composants à droite\|600` | `Tinkercad workplane: Arduino Uno, LED and resistor wired up, component sidebar on the right\|600` |
| 3 | `Bascule du mode Blocs vers le mode Texte dans le volet Code de Tinkercad\|600` | `Switching from Blocs mode to Texte mode in Tinkercad's Code panel\|600` |
| 4 | `Simulation Tinkercad en cours d'exécution, LED allumée sur le plan de travail\|600` | `Tinkercad simulation running, LED lit on the workplane\|600` |

**Ce que l'échantillon apprend au motif, et qui n'était pas prévu.** Les trois
formes françaises qui subsistent côté EN — `Créer un nouveau Circuit`, `Blocs`,
`Texte` — sont des **libellés d'interface incrustés dans la capture**, donc du
**C113 appliqué à l'image** : ce que le programme *désigne* ne se traduit pas.
*L'exemption nommée arbitrée par Tim n'est donc pas une dispense de confort,
c'est la seule lecture qui ne fasse pas mentir C113.* Deuxième enseignement : le
suffixe de taille `|600` fait partie de l'alt brut — il entre dans le test
`IDENTIQUE` et doit sortir des tests `VIDE` et `MOT FR`, faute de quoi un alt
réduit à `|600` passerait pour rempli.

**Portée du motif `MOT FR`, arrêtée sur cet échantillon** : (a) une lettre
latine **accentuée** ; (b) un mot d'une **liste nommée** de mots-outils
français, **purgée des homographes anglais** — `a`, `an`, `on`, `in`, `son`,
`ton`, `plus`, `car`, `or`, `pas`, `no`, `sale`, `mode`, `note`, `page`,
`train` en sont **exclus** faute de quoi le motif crierait sur de l'anglais.
Sur l'échantillon : **1 alt EN sur 4** déclenche (`Créer`, accent + `un`), et
c'est un alt **exempté**.

### Déclaration C131

**Population comptée : les embeds des 188 fiches de `content/en/` et de leurs
sources FR.** **Ce que la séance y a versé : 0.** Aucune fiche n'a été touchée
depuis HEAD `1846e6c` — les trois écritures de la séance sont
`tools/predictions-260829.md`, `tools/mesure-chevron.mjs` et `tools/README.md`,
**toutes hors `content/`**, plus trois artefacts de mesure
(`batterie-sortie-2908b15.txt`, `chevron-2908-avant.txt`,
`chevron-2908-apres.txt`). **Total des versements dans la population de ce
bloc : 0.** *Mais le compteur `git status` de la prochaine garde en portera
**6**, dont **3 hors artefacts** — `mesure-chevron.mjs`, `README.md` et, à la
fin de ce bloc, `creer-fiche-en.mjs` — et c'est la liste nominative qui les
couvre, pas le chiffre.*

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 3-1 | fichiers touchés par l'édition = **1** (`tools/creer-fiche-en.mjs`) plus **1** de documentation (`tools/README.md`), **0 fiche** | 1 + 1 (`creer-fiche-en.mjs`, `README.md`), 0 fiche | tenue |
| 3-2 | contrôle d'unicité d'ancre : **4** ancres (`usage` en tête, drapeau, dispatch, bloc de fonction), chacune à **1** occurrence | **5** ancres, chacune à 1 | **réfutée** |
| 3-3 | fiches EN balayées par `--alt` = **188** | 188 | tenue |
| 3-4 | fiches EN **porteuses d'au moins un embed** = **118** | **128** | **réfutée** |
| 3-5 | embeds EN totaux = **286** | **245** | **réfutée** |
| 3-6 | paires dont le **nombre** d'embeds diverge FR/EN = **0** (`--controle` sort à `188 / 0 / 0 sur 0` depuis le 29/08 suite 4, et le compteur d'embeds en fait partie) | 0 | tenue |
| 3-7 | verdict `VIDE` = **0** | 0 | tenue |
| 3-8 | verdict `IDENTIQUE` **hors exemption** = **9** | **1** | **réfutée** |
| 3-9 | verdict `MOT FR` **hors exemption** = **4** | **16** au premier jet, **14** après correctif É1 | **réfutée** |
| 3-10 | embeds **exemptés** (paire `tinkercad`) = **4**, dont **1** aurait déclenché `MOT FR` et **0** `IDENTIQUE` | 4 exemptés, 1 aurait déclenché, 0 IDENTIQUE | tenue |
| 3-11 | fiches EN **sans `source_fr`** rencontrées par le mode = **0** | 0 | tenue |
| 3-12 | le mode **n'écrit rien** : `git status` inchangé sur `content/` après lancement | `git status` sur `content/` vide | tenue |

**Ce que valent 3-4, 3-5, 3-8 et 3-9.** Aucune mesure du dépôt ne les porte :
`audit-medias` publie **638 ok / 12 absents** mais son motif `LIEN_MD` compte
**liens et embeds confondus, les deux langues confondues**, et aucune ligne
publiée ne sépare les quatre populations. **Ce sont donc quatre estimations, et
elles sont annoncées comme telles** — 3-5 est bâtie sur ~1,5 embed par fiche EN
porteuse, 3-8 sur l'idée qu'un alt identique est presque toujours un nom propre
ou une référence, 3-9 sur les **deux** alt fautifs trouvés en deux séances
(26/08 suite 4 et 29/08 suite 4) plus une marge. *La onzième séance consécutive
de la classe « alt » commence donc par admettre qu'elle ne sait pas ce qu'elle
va compter.*

### Constats du bloc 3 (sortie `tools/alt-2908.txt`, C124)

**12 prédictions, 7 tenues, 5 réfutées.** Le mode tourne, ne rend **aucune
divergence de nombre** (0 sur 128 fiches porteuses), **aucun `VIDE`**, et sort
`IDENTIQUE 1 / VIDE 0 / MOT FR 16` avant correctif. **L'exemption nommée
fonctionne exactement comme arbitrée** : `tinkercad-en` sort en `[exempte]`
avec son motif écrit, ses 4 embeds comptés à part, et le rapport dit que **1**
d'entre eux aurait déclenché — prédiction 3-10 tenue au terme près, seule
prédiction chiffrée du bloc à l'être.

⚠ **LES QUATRE ESTIMATIONS ANNONCÉES COMME TELLES SONT TOUTES FAUSSES, ET
AUCUNE N'EST FAUSSE DANS LE MÊME SENS.** Porteuses **118 → 128** (+8 %),
embeds **286 → 245** (−14 %), `IDENTIQUE` **9 → 1**, `MOT FR` **4 → 16**.
*Les deux compteurs de population se trompent en sens contraire, ce qui veut
dire que le ratio « ~1,5 embed par fiche porteuse » sur lequel 3-5 était bâtie
valait en réalité **1,91**, et que le corpus a plus de fiches illustrées mais
moins d'images par fiche que je ne le supposais.* Et les deux compteurs de
verdict se trompent **d'un facteur 4 chacun, en sens contraire eux aussi** :
j'attendais des alt recopiés et j'ai trouvé des alt traduits qui gardent du
français **à dessein**.

⚠ **CORRECTIF É1 — `×` ET `÷` NE SONT PAS DES LETTRES, ET MON ÉCHANTILLON
NOMMÉ NE LES CONTENAIT PAS.** `ACCENT_FR` s'écrivait `/[À-ÿŒœŸ]/u`, intervalle
qui **contient U+00D7 `×` et U+00F7 `÷`**, deux signes mathématiques logés au
milieu du bloc Latin-1. Deux fiches remontent pour cette seule raison —
`matrice-de-decision-en` (« 3 solutions × 5 weighted criteria ») et
`matrice-de-risques-en` (« Likelihood × severity matrix »), **deux alt anglais
irréprochables**. *C'est exactement la faute que C110 existe pour attraper : le
motif a été testé sur un échantillon nommé, et l'échantillon nommé ne portait
pas le caractère qui allait le mettre en défaut.* Correctif : l'intervalle
devient `/[À-ÖØ-öø-ÿŒœŸ]/u`, qui saute les deux trous.

---

## Bloc 4 — CORRECTIF É1 DE `--alt`, ET RELEVÉ DES DEUX CLASSES QUE LE VERDICT MÉLANGE

### Déclaration C131

**Population comptée : les 245 embeds des 188 fiches EN, inchangée.** La séance
n'a versé **aucun** embed dans cette population. **Mais le texte du correctif
É1 modifie l'instrument, pas l'objet** : les deux chiffres qui bougent entre le
bloc 3 et le bloc 4 sont imputables **en totalité** à `ACCENT_FR`, et **aucun
alt du dépôt n'a été touché entre les deux lancements** — c'est ce que la
prédiction 4-5 vérifie.

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 4-1 | fichier touché = **1** (`tools/creer-fiche-en.mjs`), **1 ancre**, **0 fiche** | 1 fichier, 1 ancre, 0 fiche | tenue |
| 4-2 | après correctif : `MOT FR` = **14**, `IDENTIQUE` = **1**, `VIDE` = **0**, total **15** | 14 / 1 / 0, total 15 | tenue |
| 4-3 | fiches signalées `[!]` : **11 → 9** ; `matrice-de-decision-en` et `matrice-de-risques-en` **disparaissent**, aucune autre | 9 lignes `[!]`, 0 occurrence de `matrice-de` | tenue |
| 4-4 | exemptés inchangés : **4 embeds, 1 aurait déclenché** | 4 / 1 | tenue |
| 4-5 | `fiches EN balayees 188`, `porteuses 128`, `embeds 245`, `divergent 0`, `sans source 0` — **les cinq inchangés** | 188 / 128 / 245 / 0 / 0 | tenue |
| 4-6 | code de sortie du mode = **1** (des verdicts subsistent) | 1 | tenue |
| 4-7 | sur les **14** `MOT FR` restants, ceux dont la forme française est un **libellé d'interface ou une étiquette de SVG** (donc du C113, classe `tinkercad`) = **12** | **12** — 9 libellés d’IDE ou de Windows, 3 étiquettes de SVG | tenue |
| 4-8 | défauts **vrais** restants, c'est-à-dire alt non traduits : **1**, et c'est `en/conduite/index.md` | **1**, `en/conduite/index.md` | tenue |

### Constats du bloc 4 (sortie `tools/alt-2908-b.txt`, C124)

**8 prédictions, 8 tenues, 0 réfutée.** *Comme au lot 1, les blocs de verdict
sortent propres et les réfutations se concentrent dans les blocs de mesure et
de cadrage : le protocole se trompe sur ce qu'un compteur va rendre, pas sur ce
que la règle décide.* Le correctif É1 retire exactement les deux fiches
attendues, les cinq compteurs de population sont à l'octet identiques d'un
lancement à l'autre, et **aucun alt du dépôt n'a bougé entre les deux** : la
variation 16 → 14 est **entièrement imputable à l'instrument**.

⚠ **LE VERDICT `MOT FR` MÉLANGE DEUX CLASSES QUE RIEN NE SÉPARE
MÉCANIQUEMENT, ET LA PROPORTION EST DE 1 CONTRE 13.** Sur les 15 verdicts
restants :

| classe | n | exemple |
|---|---|---|
| **alt non traduit** — défaut vrai | **1** | `en/conduite/index.md` : `Cycle en V du projet mécatronique`, **identique à l'octet** à la source |
| **libellé d'interface incrusté** (IDE Arduino, gestionnaire Windows, sortie du sketch) | **9** | `Ports (COM et LPT)`, `URL de gestionnaire de cartes supplémentaires`, `Valeur du capteur` |
| **étiquette de SVG** citée dans l'alt | **3** | `alimenter, distribuer, convertir` ; `bâti`, `liaison pivot`, `liaison glissière` |
| **nom français d'une méthode enseignée** | **1** | `Bête à cornes — generic diagram` |

*Les treize derniers sont exactement la classe `tinkercad` — du C113 appliqué à
l'image : ce que le programme, l'écran ou le schéma **désigne** ne se traduit
pas.* **Le seul défaut vrai est celui que le verdict `IDENTIQUE` attrapait
déjà** ; `MOT FR` n'en a trouvé aucun que `IDENTIQUE` ne trouvait pas.
**Arbitrage monté à Tim** (voir dossier en fin de séance) : le mode remontera
ces treize à chaque lancement tant qu'ils ne sont pas traités.

---

## Bloc 5 — CORRECTION DE L'UNIQUE DÉFAUT VRAI, ET DOCUMENTATION DE `--alt`

**Décision prise seule (C117).** L'alt de `en/conduite/index.md` l. 34 est
**identique à l'octet** à celui de sa source FR et n'est ni un libellé d'écran
ni une étiquette de SVG : c'est une **description d'image restée en français**.
La fiche elle-même écrit **`V-model`** cinq fois (l. 20, 32, 102) et son
`title:` est `Project management`. La correction ne demande donc aucun
arbitrage de vocabulaire, et son coût de revert est **une ligne**.
*Consigné parce que la fiche est hors du lot du jour.*

### Déclaration C131

**Population comptée : les 245 embeds des 188 fiches EN.** **La séance va y
verser 1 alt réécrit** — l'embed #1 de `en/conduite/index.md`. Les compteurs de
population (`188 / 128 / 245`) ne bougent pas, seuls les **verdicts** bougent.
La copie C124 du bloc 4 (`alt-2908-b.txt`) est **hors `content/`** et n'entre
pas dans la population.

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 5-1 | contrôle d'unicité d'ancre : la chaîne `![Cycle en V du projet mécatronique](` rend **1** occurrence dans tout `content/en/` | 1 occurrence, `content/en/conduite/index.md` | tenue |
| 5-2 | fiches de `content/` touchées = **1**, éditions = **1** | 1 fiche, 1 édition (`1 insertion(+), 1 deletion(-)`) | tenue |
| 5-3 | nouvel alt = `V-model of the mechatronics project`, cible **inchangée** `/ressources/img/conduite/cycle-v-projet.svg` | idem, cible inchangée | tenue |
| 5-4 | après édition : `IDENTIQUE` = **0**, `MOT FR` = **13**, `VIDE` = **0**, total **13** | 0 / 13 / 0, total 13 | tenue |
| 5-5 | lignes `[!]` = **8** ; `en/conduite/index.md` disparaît du rapport | 8 lignes `[!]`, 0 occurrence de `conduite/index` | tenue |
| 5-6 | les cinq compteurs de population restent `188 / 128 / 245 / 0 / 0` | 188 / 128 / 245 / 0 / 0 | tenue |
| 5-7 | `--controle` sur la fiche : embeds **FR 1 / EN 1**, **inchangé** — l'édition ne touche ni un lien, ni un embed, ni un bloc de code | `[ok] en/conduite/index.md liens 25, embeds 1, code 0` ; **188 / 0 divergente / 0 lien nu** | tenue |
| 5-8 | `--style` sur `en/conduite/index.md` : **0** verdict de typographie française **avant comme après** (l'alt était français mais sans espace avant ponctuation double) | après = **0** typographie française ; « avant » **non remesuré** (voir incident) | **partielle** |
| 5-9 | `derive-traduction` : **0 dérive**, l'édition portant sur une fiche EN et non sur une source FR | DERIVE 0, SANS SOURCE 0, SANS MARQUE 0, A JOUR 188 | tenue |
| 5-10 | `tools/README.md` reçoit **1** section `--alt` ; ancre unique | 1 section, ancre unique | tenue |

### Constats du bloc 5 (sortie `tools/alt-2908-c.txt`, C124)

**10 prédictions, 9 tenues, 1 partielle.** L'unique défaut vrai est corrigé :
`IDENTIQUE` tombe de **1 à 0**, `MOT FR` de 14 à **13**, la fiche disparaît du
rapport, et les **cinq compteurs de population sont inchangés à l'octet** —
l'édition ne crée ni ne détruit d'embed. `--controle` reste à **188 / 0 / 0**,
`derive-traduction` à **0 dérive / 188 à jour**, `--style` de la fiche à **0**
typographie française. *La seule occurrence C109 que `--style` y trouve — un
point-virgule de prose l. 111 — est **antérieure** à l'édition et sans rapport
avec l'alt.*

⚠ **INCIDENT SUR 5-8 : LA MOITIÉ « AVANT » D'UNE PRÉDICTION AVANT/APRÈS N'EST
PLUS MESURABLE APRÈS L'ÉDITION.** La prédiction déclarait « 0 avant comme
après » ; seul le terme *après* a été mesuré. Le terme *avant* n'est qu'une
**lecture** — l'ancien alt `Cycle en V du projet mécatronique` ne porte aucune
ponctuation double, donc aucun déclencheur du verdict de typographie — et sous
C119 **une lecture n'est pas une mesure**. *Règle d'usage qui en sort : une
prédiction avant/après doit lancer sa mesure « avant » **dans le bloc qui la
publie**, pas après l'édition qui la rend inatteignable.* Sans effet sur le
verdict : le compteur qui décide est celui d'après, et il est à 0.

---

## Bloc 6 — CORRECTIF D'ALIAS (c), ÉTAPE A : RELEVÉ CHIFFRÉ DE LA PASSE DE RATTRAPAGE

Objet : chiffrer **avant de la lancer** la passe de rattrapage sur le stock EN
déjà écrit. Rappel du dossier du 29/08 (suite 5) : `critere` / `niveau` /
`flexibilite` sont des **aliases** de `caracteriser-une-exigence.md`, `FC` /
`FP` / `FS` des aliases de `fonction.md` ; `creer-fiche-en.mjs` **retire les
aliases** des fiches EN, si bien qu'un wikilink qui **vise** un alias est
suffixé vers un slug qui n'aura **jamais** de fiche. *Traduire la cible ne
répare rien* — c'est une classe, pas un retard.

Commande : script de relevé jetable (C114), **aucune écriture**.

### Déclaration C131

**Deux populations, et elles ne se recouvrent pas.** (1) Les **occurrences de
wikilink** de `content/**` hors `templates/` ; (2) les **entrées `aliases:`**
des front matters FR. **Ce que la séance y a versé : 1 occurrence d'embed
réécrite au bloc 5** — qui n'est **ni** un wikilink **ni** un alias, donc
**0 versement** dans les deux populations de ce bloc. Les fichiers écrits par
la séance (`creer-fiche-en.mjs`, `mesure-chevron.mjs`, `README.md`,
`predictions-260829.md`, cinq sorties datées) sont **tous hors `content/`**.

### Échantillon nommé (C110), lu avant tout comptage

Le motif de wikilink compté est celui de `compter()` l. 395 :
`/(?<!!)\[\[[^\]]+\]\]/g` — **négation d'embed en tête**, donc `![[x]]` ne
compte pas. Une cible se lit **avant** le premier `|` **et** avant le premier
`#`, et la forme de tableau échappe sa barre `\|` (C62). Les six cibles
relevées côté EN sont donc exactement `critere-en`, `niveau-en`,
`flexibilite-en`, `FC-en`, `FP-en`, `FS-en`, **casse comprise** — `FC` est en
capitales dans le corpus.

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 6-1 | entrées `aliases:` distinctes dans tout `content/` (FR) = **25** | **24** entrées, **24** distinctes | **réfutée** |
| 6-2 | alias **effectivement visés** par au moins un wikilink FR = **6**, et ce sont les six du dossier | 6, et ce sont les six | tenue |
| 6-3 | occurrences FR visant un alias = **69** (chiffre du 29/08 suite 5, à remesurer sous C119) | **69** (FC 26, FP 12, FS 12, niveau 7, critere 6, flexibilite 6) | tenue |
| 6-4 | occurrences EN visant l'un des six slugs suffixés = **44** | **50** | **réfutée** |
| 6-5 | fiches EN concernées = **17** | **5** | **réfutée** |
| 6-6 | décomposition EN : `FP-en` **13**, `FS-en` **11**, `FC-en` **9**, `critere-en` **5**, `niveau-en` **4**, `flexibilite-en` **2** | `FC-en` **22**, `FP-en` **8**, `FS-en` **8**, `critere-en` **4**, `niveau-en` **4**, `flexibilite-en` **4** | **réfutée** |
| 6-7 | ces occurrences sont **toutes** comptées dans les `58 mortes` d'`audit-wikilinks` (mesure du 29/08 suite 4), donc **44 des 58** | **6 cibles sur 58**, portant **50** occurrences — la ligne `MORT` compte des **cibles**, pas des occurrences | **réfutée** |
| 6-8 | aucune de ces occurrences n'est signalée par `--controle` : `liens FR = liens EN` **par construction**, le suffixage ayant transformé un lien en un lien | `--controle` 188 / 0 divergente / 0 lien nu | tenue |
| 6-9 | fiches EN portant une entrée `aliases:` = **0** (le générateur les retire) | 0 entrée, 0 fiche | tenue |
| 6-10 | aucun des six slugs `critere-en` … `FS-en` n'existe comme **fichier** dans `content/en/` | les six : `AUCUN FICHIER` | tenue |

**Ce que valent 6-4, 6-5 et 6-6.** Aucune mesure publiée ne les porte : le
dossier du 29/08 (suite 5) a chiffré le **côté FR** (69 occurrences sur six
cibles) et n'a pas descendu le côté EN. **Ce sont trois estimations**, bâties
sur la part traduite du corpus — 188 fiches EN pour 242 FR, soit **78 %** — et
sur l'idée que les six cibles sont concentrées dans les fiches d'analyse
fonctionnelle, dont la quasi-totalité est traduite. *Le bloc 3 vient de rater
ses quatre estimations de population dans deux sens opposés ; celles-ci sont
publiées en sachant cela.*

### Constats du bloc 6 (sorties `tools/alias-2908.txt` et `tools/wikilinks-2908.txt`, C124)

**10 prédictions, 5 tenues, 5 réfutées.** Les cinq tenues sont des **verdicts**
— quels alias sont visés, qu'aucune fiche EN ne porte d'`aliases:`, qu'aucune
des six cibles n'existe comme fichier, que `--controle` ne voit rien. **Les
cinq réfutées sont des compteurs**, sans exception. *Troisième bloc de suite
où la coupure tombe exactement là.*

⚠ **LES DEUX PORTEUSES N'ONT PAS DE JUMELLE EN, ET C'EST CE QUI DONNE SA
VALEUR AU CORRECTIF.** `conduite/proj/fonction.md` et
`conduite/proj/caracteriser-une-exigence.md` sont **non traduites**. Un lien
réécrit vers `fonction-en` reste donc **rouge aujourd'hui** — mais il
**deviendra vert le jour où la porteuse sera traduite**, alors que `FC-en` ne
le serait **jamais**. *C'est exactement la phrase de l'arbitrage (c) : traduire
la cible ne réparait rien ; après le correctif, traduire la cible répare tout.*
Les deux cibles justes sont d'ailleurs **déjà** dans la liste des mortes —
`fonction-en` à 8 occurrences, `caracteriser-une-exigence-en` à 9 — et la
passe de rattrapage va les y grossir au lieu de créer six entrées orphelines.

⚠ **RÉFUTATION 6-7 : `MORT 58` COMPTE DES CIBLES, PAS DES OCCURRENCES, ET
`audit-wikilinks` L'ÉCRIT.** La ligne de bilan dit `MORT 58 cible(s)`, et
chaque cible imprime son propre `N occurrence(s)`. J'ai prédit « 44 des 58 »
en lisant 58 comme un nombre de liens. Les six alias suffixés sont **6 cibles
sur 58**, et elles portent **50 occurrences**. *C'est l'amendement (7) de la
sous-règle C116 — tout compteur dont on publie une prédiction se lit dans le
code qui l'incrémente — pris en défaut pour la quatrième fois du chantier, et
cette fois le mot juste était **imprimé sur la ligne même**.*

⚠ **LA DÉCOMPOSITION 6-6 EST FAUSSE SUR SES SIX TERMES ET JUSQU'À SON ORDRE.**
Prédit `FP 13 > FS 11 > FC 9 > critere 5 > niveau 4 > flexibilite 2` ; mesuré
`FC 22 > FP 8 = FS 8 > critere 4 = niveau 4 = flexibilite 4`. **`FC` est le
plus fréquent des trois sigles, pas le moins**, et les trois termes du triplet
`critère / niveau / flexibilité` sont **strictement égaux**, ce qu'aucune
répartition « naturelle » ne laissait attendre : ils viennent d'un **tableau
répété**, pas d'une prose. *Le motif du 28/08 — un total dans la fourchette ne
valide pas la décomposition — se lit ici à l'envers : une décomposition
entièrement fausse sous un total (50) qui n'était lui-même faux que de 14 %.*

⚠ **6-5 EST LA PLUS GROSSE ERREUR DE LA SÉANCE : 17 FICHES PRÉDITES, 5
MESURÉES.** Les 50 occurrences sont concentrées sur **cinq fiches**, toutes
dans `en/conduite/proj/` — `cahier-des-charges-fonctionnel-en`, `concept-en`,
`ecoconception-en`, `securite-et-qualite-en`, `specification-technique-en`.
*J'ai raisonné en part traduite du corpus (78 %) sur une population que je
croyais diffuse ; elle est en réalité **locale à un dossier**, et une
estimation par proportion ne dit rien d'une population concentrée.*

---

## Bloc 7 — CORRECTIF D'ALIAS (c), ÉTAPE B : LE GÉNÉRATEUR, PUIS LA PASSE DE RATTRAPAGE

### Ce qui est écrit, terme à terme

1. **Index d'alias FR** construit au chargement, à côté de `titreParSlug` :
   `alias -> chemin de la fiche porteuse`. Lecture des `aliases:` par une
   **copie verbatim** de `readAliases` d'`audit-wikilinks.mjs` — même motif que
   l'outil qui résout ces liens correctement, donc pas de seconde
   implémentation sous la même phrase.
2. `transformerLien()` — avant le suffixage, une cible **sans barre oblique**,
   **qui n'est pas elle-même une fiche FR** et **qui est un alias** est
   remplacée par le **slug de sa porteuse**. Le suffixage s'applique ensuite
   normalement.
3. **Le libellé par défaut devient l'alias**, pas le titre de la porteuse :
   `[[FC]]` rend `[[fonction-en|FC]]` et non `[[fonction-en|Fonction]]`.
   *Le corpus écrit `FC` parce que c'est la désignation qui porte le sens à cet
   endroit ; la remplacer par le titre de la porteuse perdrait ce que le lien
   disait.*
4. Journal de génération : une ligne `alias resolus` par occurrence.

### La passe de rattrapage, chiffrée avant d'être lancée

**50 occurrences, 5 fiches, 6 formes exactes**, toutes à libellé explicite —
`[[FC-en\|FC]]` ×22, `[[FS-en\|FS]]` ×8, `[[FP-en\|FP]]` ×8,
`[[niveau-en\|level]]` ×4, `[[flexibilite-en\|flexibility]]` ×4,
`[[critere-en\|criterion]]` ×4. **Aucune forme sans libellé, aucune barre
échappée** (donc aucune en cellule de tableau, C62), **aucune ancre `#`**.
La réécriture ne touche que la **cible**, jamais le libellé.

### Déclaration C131

**Population comptée : les occurrences de wikilink de `content/**`.** **La
séance va y verser 50 réécritures** — 50 occurrences changent de cible, **le
nombre total d'occurrences ne bouge pas**, et c'est ce que la prédiction 7-9
vérifie par `--controle`. Les deux cibles `fonction-en` et
`caracteriser-une-exigence-en` **portent déjà 8 et 9 occurrences** avant la
passe : *le compteur d'après n'est donc pas le compte de la passe, il est la
somme de la passe et du stock antérieur*, et 7-7 le déclare terme à terme.

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 7-1 | contrôle d'unicité d'ancre sur `creer-fiche-en.mjs` : **3** ancres, chacune à 1 occurrence | **6** ancres, chacune à 1 | **réfutée** |
| 7-2 | `--dry` sur `conduite/proj/cahier-des-charges-fonctionnel.md` après correctif : les trois compteurs **ok**, et le journal imprime **26** alias résolus | trois compteurs **ok** (34/34, 0/0, 0/0) ; **5** alias résolus | **réfutée** |
| 7-3 | dans la sortie `--dry`, **0** occurrence de la chaîne `FC-en`, `FP-en`, `FS-en`, `critere-en`, `niveau-en`, `flexibilite-en` | vérifié autrement : les **69** occurrences FR se résolvent, **10 fiches**, somme 5+5+2+3+9+1+37+4+3 = **69** | tenue |
| 7-4 | passe de rattrapage : **5** fiches EN touchées, **50** occurrences réécrites, **0** libellé modifié | 5 fiches, **50** occurrences, 27 insertions / 27 suppressions (aucun libellé touché) | tenue |
| 7-5 | contrôle d'unicité d'ancre de la passe : les **6** formes rendent respectivement **22 / 8 / 8 / 4 / 4 / 4**, total **50** | 22 / 8 / 8 / 4 / 4 / 4 = **50**, et **aucune autre forme** dans `content/en` | tenue |
| 7-6 | après passe, `releve-alias` : `cibles alias suffixees : 0   occurrences : 0   fiches EN concernees : 0` | `cibles alias suffixees : 0   occurrences : 0   fiches EN concernees : 0` | tenue |
| 7-7 | après passe, `audit-wikilinks` : `MORT` **58 → 52** cibles ; `fonction-en` **8 → 46** occurrences ; `caracteriser-une-exigence-en` **9 → 21** | MORT **52** ; `fonction-en` **46** ; `caracteriser-une-exigence-en` **21** | tenue |
| 7-8 | `CASSE 0`, `AMBIGU 0`, `GABARIT 8`, `ALIAS 6`, `OK 432` — **les cinq inchangés** | 0 / 0 / 8 / 6 / 432 | tenue |
| 7-9 | `--controle` après passe : **188 fiches, 0 divergente, 0 lien non suffixé** | 188 / 0 / 0 | tenue |
| 7-10 | `derive-traduction` après passe : **0 dérive, 188 à jour** — la passe ne touche que des fiches EN | DERIVE 0, A JOUR 188 | tenue |
| 7-11 | `compter-mots` : le corpus EN **ne change pas d'un mot** (la cible d'un wikilink n'est pas comptée, seul le libellé l'est, et aucun libellé ne bouge) | EN **224 071 → 224 070**, soit **−1 imputable au bloc 5** et **0 à la passe** | tenue |

### Constats du bloc 7 (sorties `alias-2908-b.txt`, `wikilinks-2908-b.txt`, C124)

**11 prédictions, 9 tenues, 2 réfutées.** *Quatrième bloc de suite où les
réfutations sont des compteurs et où les verdicts sortent propres.*

**Le correctif fait exactement ce que l'arbitrage (c) demandait, et les trois
chiffres de sortie se recoupent sur trois instruments indépendants.**
`releve-alias` tombe à **0 occurrence sur 0 fiche** ; `audit-wikilinks` passe de
**58 à 52 cibles mortes** — les six cibles fantômes ont disparu, aucune autre
n'est apparue — et les deux cibles justes absorbent le stock **au report exact**
(`fonction-en` 8 + 38 = **46**, `caracteriser-une-exigence-en` 9 + 12 = **21**,
et 38 + 12 = **50**). `CASSE`, `AMBIGU`, `GABARIT`, `ALIAS` et `OK` sont
**inchangés aux cinq chiffres** : la passe n'a ni cassé ni créé un seul lien.

⚠ **RÉFUTATION 7-2 : J'AI PRÉDIT SUR UNE FICHE LE TOTAL D'UN CORPUS.** 26 était
le nombre d'occurrences de `FC` **sur les sept fiches FR** relevées au bloc 6 ;
`cahier-des-charges-fonctionnel` en porte **5**. *Même faute de population que
6-5, à trois blocs d'intervalle et dans le même dossier : un chiffre juste, lu
sur la mauvaise population.*

⚠ **ET LE RELEVÉ DU BLOC 6 SOUS-COMPTAIT SES PROPRES FICHES.** La vérification
de 7-3 a demandé de lancer `--dry` fiche par fiche : les sept fiches trouvées
par balayage textuel ne rendaient que **62** des 69 occurrences. Les **7**
manquantes vivent dans **trois fiches de plus** — `etat-de-l-art-technique` (4),
`fonction` (3), `integration-et-tests` (0) — que mon motif de balayage avait
manquées, alors que `releve-alias.mjs`, lui, les comptait. **Dix fiches FR, pas
sept.** *Le motif de grep et le motif de l'outil ne portaient pas la même
population, et c'est l'outil qui avait raison — exactement ce que C110 demande
de vérifier sur un échantillon nommé avant de compter.* Sans effet sur la
passe, qui porte sur le **côté EN** et dont les six formes ont été comptées une
à une.

**Ce que le correctif change au fond, et qui n'est pas un chiffre.** Les deux
porteuses `fonction.md` et `caracteriser-une-exigence.md` **ne sont pas encore
traduites**, donc les 50 liens réécrits **restent rouges ce soir**. Mais ils
sont désormais rouges **d'un rouge réparable** : le jour où les deux porteuses
passent, les 50 virent au vert d'un coup. Avant la passe, `FC-en` n'aurait
jamais viré, quoi qu'on traduise. *Une classe de liens rouges a cessé d'être une
classe pour redevenir un retard.*

⚠ **C131 : LE −1 MOT DU CORPUS EN EST À MOI, PAS À LA PASSE.** Le corpus EN
passe de **224 071 à 224 070**. La passe d'alias y contribue pour **0** — `FC-en`
et `fonction-en` pèsent **un jeton chacun** sous le motif de C110, qui garde les
traits d'union. Le mot manquant vient du **bloc 5** : `Cycle en V du projet
mécatronique` (6 jetons) rendu `V-model of the mechatronics project` (5).
*Sans la déclaration, ce −1 aurait été porté au compte de la passe.*

---

## Bloc 8 — G1, CADRAGE DU LOT 2 D'`esp32/` (palier 3 du hub)

Commande :
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage -Fiches embarque/mcu/esp32/esp32-wifi.md,embarque/mcu/esp32/esp32-ble.md,embarque/mcu/esp32/esp32-uart.md,embarque/mcu/esp32/esp32-i2c.md,embarque/mcu/esp32/esp32-spi.md`

### Composition, et la règle de repli publiée AVANT la mesure

Le palier 3 du hub (`esp32.md` l. 83-85) se lit dans cet ordre : **Connectivité**
`esp32-wifi` · `esp32-ble` ; **Communication** `esp32-uart` · `esp32-i2c` ·
`esp32-spi` ; puis **`esp32-deep-sleep`**, seule de sa ligne.

**Le lot des six dépasse la borne, et le calcul est fait sur `deh` comme le
brief l'exige.** Mesure du jour (bloc 1, sortie `chevron-2908-avant.txt`) :
`deh` **1 318 + 1 187 + 1 175 + 1 052 + 1 020 + 1 401 = 7 153**, contre une
borne de chantier à **6 657**. *Le `tot` publié par l'anneau — 7 804 — n'a
jamais été le chiffre de dimensionnement depuis C127.*

**Règle de repli, écrite avec son seuil et son ordre de retrait avant tout
lancement** : on retire **la dernière fiche de l'ordre de lecture du hub**, soit
**`esp32-deep-sleep`**, et le lot tombe à **`deh` 5 752**. Ce retrait tombe sur
une **frontière de groupe** — la ligne 85 du hub ne porte qu'elle — donc les
deux groupes *Connectivité* et *Communication* restent **entiers**. S'il avait
fallu retirer davantage, le suivant aurait été `esp32-spi`, dernier de la ligne
84. `esp32-deep-sleep` part au **lot 3** avec `esp32-arduino-core`,
`esp32-freertos` et `esp32-idf`.

### Déclaration C131 — la garde de ce bloc compte 22 fichiers, dont 19 « hors artefacts », et 19 est un chiffre que la séance a fabriqué

`batterie.ps1` n'écarte que **deux motifs**, `batterie-sortie` et
`predictions-` (l. 165 du script, lue et non déduite). **Les onze sorties de
mesure que cette séance a créées sous `tools/` ne portent aucun de ces deux
motifs** et comptent donc **dans le chiffre « hors artefacts »** — c'est
exactement l'habitat que C116 (9) et C131 décrivent. **Liste nominative
attendue, 19 entrées** :

*Modifiées, 9* — les six fiches EN des blocs 5 et 7
(`en/conduite/index.md`, `cahier-des-charges-fonctionnel-en`, `concept-en`,
`ecoconception-en`, `securite-et-qualite-en`, `specification-technique-en`),
plus `tools/creer-fiche-en.mjs`, `tools/mesure-chevron.mjs`,
`tools/README.md`.

*Non suivies, 10* — `tools/releve-alias.mjs` (outil de relevé du bloc 6) et
neuf sorties datées : `alt-2908.txt`, `alt-2908-b.txt`, `alt-2908-c.txt`,
`chevron-2908-avant.txt`, `chevron-2908-apres.txt`, `alias-2908.txt`,
`alias-2908-b.txt`, `wikilinks-2908.txt`, `wikilinks-2908-b.txt`.

*Écartées par le filtre, 3* — `tools/predictions-260829.md`,
`tools/batterie-sortie-2908b15.txt`, et la copie `2908b16` que l'étape 0 va
créer avant que l'étape 1 ne lise `git status`.

**Population du lot, et ce que la séance y a versé : rien.** Les cinq sources
FR n'ont été ni lues en écriture ni touchées depuis HEAD `1846e6c` ; leur date
d'écriture doit être **antérieure au 29/08 17:37:55** et identique au relevé du
bloc G.

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 8-1 | copie C124 = `tools\batterie-sortie-2908b16.txt` | idem | tenue |
| 8-2 | lignes non ASCII dans `batterie.ps1` = **0** | 0 | tenue |
| 8-3 | HEAD **inchangé** `1846e6c 2026-08-29 17:37:55 +0200` ; JOURNAL / conventions / TODO **inchangés** à 17:32:23 / 17:33:51 / 17:34:54 | les quatre horodatages identiques au bloc G | tenue |
| 8-4 | `fichiers modifies non commites` = **22**, `(hors artefacts de seance : 19)`, la liste nominative ci-dessus étant complète | **22   (hors artefacts de seance : 19)** | tenue |
| 8-5 | les **cinq** sources FR listées sous les dates d'écriture, **aucune ABSENTE**, toutes datées **avant** le 29/08 17:37:55 | 5 listées, 0 ABSENTE, dates 20/08 23:01, 21/08 12:54, 19/08 10:00 ×3 | tenue |
| 8-6 | `compter-mots --lot` : `tot` par fiche **1 455 / 1 279 / 1 282 / 1 143 / 1 150**, total **6 309** | 1 455 / 1 279 / 1 282 / 1 143 / 1 150, **LOT 6 309** | tenue |
| 8-7 | `deh` du lot = **5 752**, `ded` = **547**, `etiq` = **10** sur **5 porteuses / 10 blocs** — sous la borne 6 657 avec **905** de marge | `20 cl  10 bl  6309 tot  547 ded  5752 deh  10 etiq` | tenue |
| 8-8 | candidats C109 des cinq sources FR (`--style`) = **58** au total | **82** | **réfutée** |
| 8-9 | verdict `typographie francaise` sur les cinq sources FR = **0** | 0 | tenue |
| 8-10 | verdict `hors alphabet latin` = **0** ; `virgule ambigue` = **0** | 0 et 0 | tenue |
| 8-11 | `--anneau 2` : **NET 145**, **94 traduites**, restant **51 / 73 305** — les quatre chiffres du 29/08 (suite 4), **inchangés**, aucune fiche EN n'ayant été créée depuis | NET 145, 94 traduites, RESTANT 51 / 73 305 | tenue |
| 8-12 | dette : **188 sources, 52 cibles, 74 145 mots, 0 hors anneaux** — inchangée | 188 / 52 / 74 145 / 0 | tenue |
| 8-13 | bloc `chevron` de `--anneau` : **15 porteuses / 56 clôtures**, inchangé | 15 porteuses / 56 clôtures | tenue |
| 8-14 | `cibles sans fiche` de `--anneau` : les **six alias** y figurent **toujours** — `--anneau` ignore la table d'alias (README), et le correctif du bloc 7 porte sur le **générateur**, pas sur ce mode | les six y figurent | tenue |
| 8-15 | code de sortie de chacune des quatre étapes = **0** | 0 / 0 / 0 / 0 | tenue |

**Ce que 8-8 vaut.** Le lot 1 a rendu **63** candidats pour **6 107** mots `tot`
sur trois fiches, soit **1,03 %**. Appliqué aux 6 309 mots du lot 2, cela donne
**65**. **Je prédis 58**, plus bas : les cinq fiches du palier 3 sont des tutos
courts et répétitifs de périphérique, là où le lot 1 portait
`esp32-prise-en-main` (2 566 mots, la plus longue du module) dont la prose de
procédure est riche en incises. *La prédiction est donc un écart assumé au taux
observé, pas son report.*

### Constats du bloc 8 (G1) — sorties `batterie-sortie.txt` et `chevron-lot2-avant.txt`

**15 prédictions, 14 tenues, 1 réfutée.** Garde **verte** pour la deuxième fois
de la séance : HEAD, JOURNAL, conventions et TODO **aux quatre mêmes
horodatages** qu'au bloc G, cinq sources FR datées du 19 au 21/08 donc
**antérieures au commit**, aucune ABSENTE.

⚠ **LE CHIFFRE « HORS ARTEFACTS » SORT À 19 ET LA LISTE NOMINATIVE EN REND
COMPTE ENTIÈREMENT — C'EST LA PREMIÈRE FOIS QUE LA DÉCLARATION C131 SERT À
QUELQUE CHOSE.** `batterie.ps1` n'écarte que `batterie-sortie` et
`predictions-` ; les **neuf sorties de mesure** que la séance a créées sous
`tools/` (`alt-2908*`, `chevron-2908-*`, `alias-2908*`, `wikilinks-2908*`) et
**l'outil de relevé `releve-alias.mjs`** ne portent aucun de ces motifs et
gonflent donc le compteur qu'ils servent à alimenter. *Sans la liste nominative
publiée avant le lancement, un 19 aurait été impossible à distinguer d'un
19 anormal.* **La déclaration C131 du bloc, elle, est juste sur ses deux
chiffres — leçon de la réfutation G-6 appliquée.**

⚠ **RÉFUTATION 8-8, ET ELLE EST DU CÔTÉ OÙ JE NE L'ATTENDAIS PAS.** Prédit
**58**, mesuré **82** — soit **1,30 %** du `tot` contre **1,03 %** au lot 1, et
non 0,9 % comme je l'avais raisonné. **Mon argument était exactement à
l'envers** : j'ai supposé que des tutos courts de périphérique porteraient
moins d'incises qu'une longue fiche de procédure, alors qu'ils en portent
**davantage**. La cause se lit dans la sortie : ces cinq fiches ouvrent chacune
sur une **définition à apposition** (l. 18-20, deux à trois tirets d'incise sur
la seule première phrase) et enchaînent des **paragraphes-pièges à
point-virgule**. *La densité C109 suit la **forme** de la fiche, pas sa
longueur, et le lot 1 ne pouvait pas l'apprendre puisqu'il ne portait qu'un
seul genre.* **Décomposition** : `spi` 20, `ble` 21, `uart` 15, `i2c` 14,
`wifi` 12 — et `spi`, la deuxième plus courte, est la plus dense.

**Les deux volumes du lot, publiés ensemble comme C127 l'exige** :
`tot` **6 309**, `deh` **5 752**. Le découpage s'est fait sur `deh`, la borne
est **6 657**, la marge est de **905** — et `esp32-deep-sleep` (`deh` 1 401)
part au lot 3. *La règle de repli était écrite avec son seuil et son ordre de
retrait avant la mesure ; elle n'a demandé aucun arbitrage, pour la deuxième
fois du chantier.*

**`--anneau` reconduit les treize chiffres du 29/08 (suite 4) sans en bouger
un** : NET 145, 94 traduites, restant 51 / 73 305, dette 188 / 52 / 74 145 / 0,
chevron 15 / 56. **Et les six alias sont toujours en « cibles sans fiche »** —
le correctif du bloc 7 porte sur le **générateur** et sur le **stock EN**, pas
sur ce mode, qui ignore la table d'alias par construction (README). *Prédit et
constaté : ce n'est pas une régression du correctif.*

---

## Bloc 9 — G2, PASSES C109 SUR LES CINQ SOURCES FR — ⚠ INCIDENT DE PROTOCOLE, BLOC HORS DÉCOMPTE

⚠ **LES PRÉDICTIONS DE CE BLOC N'ONT PAS ÉTÉ APPENDUES AVANT SON EXÉCUTION.**
Elles ont été **rédigées** avant la passe, dans un fichier de travail hors
dépôt, et **le lancement qui devait les verser ici n'a jamais été fait** : la
passe d'édition a suivi directement. La sous-règle C116 est explicite —
*les prédictions s'appendent à `tools/predictions-AAMMJJ.md` avant chaque bloc
d'exécution, **l'ordre des appels dans la transcription faisant foi***, et son
point (3) prévoit qu'*une prédiction manquante se consigne en incident*.

**Conséquence tenue, sans négociation : les 12 prédictions de ce bloc sont
réputées ABSENTES et le bloc entier sort du décompte de la séance.** Elles sont
reproduites ci-dessous **pour la valeur de leur contenu**, jamais pour un
verdict : aucune ne compte comme tenue, aucune comme réfutée, et le bilan
général les porte en ligne séparée.

⚠ *Le mode de défaillance est neuf et mérite d'être nommé : ce n'est pas un
oubli de rédaction — le texte existait — c'est **un appel d'outil manquant
entre deux appels d'outil**. Les huit blocs précédents alternaient
« j'écris les prédictions » / « je lance » ; ici la préparation de la passe
d'édition, qui est elle-même un fichier à écrire, s'est intercalée et a pris la
place de l'appel d'écriture des prédictions.* **Règle d'usage qui en sort :
sous exécution directe, le versement des prédictions et le lancement du bloc
doivent être **le même appel** ou deux appels **immédiatement consécutifs** ;
tout appel intercalé est l'occasion de la perte.*

### Ce qui avait été prédit (reproduit, HORS DÉCOMPTE)

| # | prédiction rédigée avant la passe | constat | rapprochement |
|---|---|---|---|
| 9-1 | ancres de contrôle d'unicité = **66**, chacune à 1 | **71**, chacune à 1, et **1 défaut** au premier contrôle | écart |
| 9-2 | lignes réécrites `wifi` 10 / `ble` 17 / `uart` 12 / `i2c` 12 / `spi` 15 = **66** | 10 / 17 / 12 / 12 / 15 = **66** | conforme |
| 9-3 | occurrences traitées **72**, exemptions **10** | 72 et 10 | conforme |
| 9-4 | `C109 de prose` après passe = **10**, et exactement les dix nommés | **10**, les dix nommés | conforme |
| 9-5 | `typographie francaise` / `virgule ambigue` / `hors alphabet latin` = **0 / 0 / 0** | 0 / 0 / 0 | conforme |
| 9-6 | `hors perimetre` = **26** | 26 | conforme |
| 9-7 | `tot` 6 309 → **6 311** (+2) | 6 309 → **6 310** (+1) | écart |
| 9-8 | `deh` 5 752 → **5 754** (+2), `ded` **547** | 5 752 → **5 753** (+1), `ded` 547 | écart sur `deh` |
| 9-9 | `etiq` **10**, `20 cl / 10 bl / 5 porteuses` | idem | conforme |
| 9-10 | `git diff --stat` : **5** fichiers, **66** insertions / **66** suppressions | idem | conforme |
| 9-11 | aucune fiche EN touchée | aucune | conforme |
| 9-12 | `--controle` **188 / 0 / 0** | 188 / 0 / 0 | conforme |

### Les dix exemptions, et pourquoi ce sont celles-là

C123 exige l'absence de **tout** verbe conjugué, subordonnée comprise, et tranche
le doute vers le traitement. Le résidu est de **trois formes seulement** :

| fiche | l. | forme | motif |
|---|---|---|---|
| `wifi` | 18 | `— interroger une API, exposer une page web, publier des mesures` | énumération de **trois infinitifs** |
| `wifi` | 24 | `; envoyer des mesures vers un serveur` | énumération de **deux infinitifs**, sur puce |
| `ble` | 24 | `— température, niveau, état —` | **incise encadrée qui énumère**, borne du 25/08 |
| `uart` | 20 | `— module GPS, lecteur RFID, seconde carte —` | idem, **2** occurrences |
| `i2c` | 20 | `— capteurs, écrans OLED, horloges temps réel —` | idem, **2** occurrences |
| `spi` | 20 | `— carte SD, écran TFT, capteurs à haut débit —` | idem, **2** occurrences |
| `spi` | 190 | `(VSPI : 18/19/23/5 ; HSPI : 14/12/13/15)` | **liste nominale en ligne** dans une parenthèse |

⚠ **Trois candidats sont exemptés par la lettre de C123 et traités quand
même** : `wifi` l. 70 (`— en projet, reprendre ce motif borné`), `ble` l. 185
(`; pour les rôles mixtes, prévoir l'architecture`), `i2c` l. 120
(`; sinon, ajouter deux résistances`). **Aucun n'est une énumération** — ce sont
des injonctions de prose à l'infinitif, et l'exemption de C123 a été écrite pour
les **items de liste**. *La lecture mécanique seule aurait rendu un résidu de 13
au lieu de 10.*

### Constats mesurés du bloc

⚠ **LE CONTRÔLE D'UNICITÉ D'ANCRE A SERVI SEUL POUR LA DEUXIÈME FOIS DU
CHANTIER, ET IL A REFUSÉ 71 ÉDITIONS POUR UNE.** `esp32-i2c` l. 184 : l'ancre
écrivait `differents de GPIO21/22`, la fiche porte `diffèrent de GPIO21/22` —
**un verbe conjugué recopié en adjectif**. La passe s'est arrêtée **avant toute
écriture**, les 70 autres ancres étant justes. *C'est le mode d'échec redouté du
28/08 — un lot multi-édition est atomique — et l'atomicité joue une seconde fois
dans le bon sens : elle refuse au lieu d'appliquer 70 sur 71.* Corrigé,
relancé : **71 / 71, 0 défaut.**

⚠ **TROIS POPULATIONS EMBOÎTÉES, ET J'EN AVAIS PUBLIÉ UNE SOUS LE NOM D'UNE
AUTRE** : **66 lignes** réécrites, **71 fragments** d'ancre, **72 occurrences**
C109 retirées. Le décalage 71 → 72 a une cause nommable — `esp32-uart` l. 60
porte **un point-virgule et un tiret dans la même phrase**, traités par **une
seule** réécriture.

⚠ **LE COÛT DE LA PASSE EST DE +1 MOT, ET LE MOT EST NOMMABLE.** Sur 72
réécritures, **71 sont à coût nul** — un `;` devient un point, un tiret devient
deux-points, virgule ou parenthèse, et aucune de ces voies n'ajoute de mot. Le
seul mot ajouté est le `Avec` d'`esp32-ble` l. 141 : `allume une LED
(`GPIO16`) ; `0`, elle l'éteint` ne devient grammatical que sous la forme
`. Avec `0`, elle l'éteint`. *La décomposition écrite avant la passe portait
+1 ; c'est le **total** provisionné à +2 qui était faux — le motif du 28/08
pris à l'envers.*

**Les six renvois `— voir [[x]]` sont tous passés par la troisième voie**, les
parenthèses (précision du 25/08) : `wifi` l. 29 et 96, `ble` l. 117, `uart`
l. 60, `i2c` l. 43, `spi` l. 43.

**Les deux volumes après passe, publiés ensemble (C127)** : `tot` **6 310**,
`deh` **5 753**, `ded` **547 inchangé** — aucun bloc en chevron n'a été touché,
ce que la stabilité de `ded` **mesure** au lieu de le supposer. `etiq` **10**,
`20 cl / 10 bl`, inchangés. `--controle` **188 / 0 / 0**.

---

## Bloc 10 — G3, LES CINQ TITRES EN SOUS C125, PUIS LA GÉNÉRATION DES CINQ SQUELETTES

### Les cinq titres, arrêtés AVANT la génération

**Test 2 tombe sur les cinq, et pour la même raison qu'au lot 1.** La clause du
27/08 (suite 7) exige des `title:` FR **identiques** entre jumelles ; le corpus
français **distingue déjà** par le qualificatif de famille — `UART sur Arduino`
contre `UART sur l'ESP32`. Les cinq paires descendent donc au **test 3**.

**Test 3, et le corpus anglais a déjà tranché quatre fois sur cinq.** Les cibles
sont **rouges mais nommées** : dix-neuf wikilinks EN les visent déjà.

| cible | formes lues en production | titre arrêté |
|---|---|---|
| `esp32-wifi-en` | `Wi-Fi on the ESP32` **×10**, `Wi-Fi` ×1 | **Wi-Fi on the ESP32** |
| `esp32-uart-en` | `UART on the ESP32` ×4, `UART` ×1 | **UART on the ESP32** |
| `esp32-i2c-en` | `I2C on the ESP32` ×2, `I2C` ×1 | **I2C on the ESP32** |
| `esp32-spi-en` | `SPI on the ESP32` ×2, `SPI` ×1 | **SPI on the ESP32** |
| `esp32-ble-en` | `Bluetooth LE` ×1, `Bluetooth LE on the ESP32` ×1, `BLE on the ESP32` ×1 | **Bluetooth LE on the ESP32** |

⚠ **`ble` porte trois formes concurrentes à une occurrence chacune, et c'est le
motif du lot 1 qui tranche : un libellé en production n'est pas un titre en
production.** La forme `BLE on the ESP32` vient du **Voir aussi** de `ble-en`
l. 25 — et elle y **reporte fidèlement** le libellé français `[[esp32-ble|BLE
sur ESP32]]`, qui **diffère déjà du `title:` FR** `Bluetooth LE avec l'ESP32`.
*Le corpus français distingue son libellé de son titre à cet endroit précis ;
prendre le libellé pour le titre importerait en anglais une distinction que la
source range de l'autre côté.* La forme `Bluetooth LE on the ESP32`, lue en
prose l. 20 de la même fiche, est le **report du `title:`** et gagne.

**L'article défini est celui du lot 1.** `Getting started with the ESP32` et
`Getting started with the ESP8266` l'ont établi — *l'article défini devant une
famille à chiffres*. La famille Arduino, elle, écrit `UART on Arduino`,
`I2C on Arduino`, `SPI on Arduino` **sans article**, et c'est cohérent : Arduino
n'est pas une famille à chiffres. **Aucune collision de titre n'est créée** :
`UART on Arduino` et `UART on the ESP32` sont deux formes distinctes, ce que
`titres-doublons.mjs` vérifiera à la clôture.

### Garde de génération

Les cinq cibles doivent être **ABSENTES**. `--force` n'est **jamais** passé :
une cible présente arrête le bloc.

### Déclaration C131

**Population comptée : le corpus EN, 188 fiches / 224 070 mots avant ce bloc.**
**Ce que le bloc va y verser : 5 fiches et le texte FR de leurs squelettes**,
soit `tot` **6 310 mots de source**, **plus** les libellés que le générateur
ajoute aux wikilinks nus (`[[x]]` devient `[[x-en|Titre FR]]`). *Le corpus EN
d'après n'est donc pas 224 070 + 6 310 : il porte en plus un nombre de mots que
seul le journal de génération donne, et c'est ce que 10-9 tente de prédire.*
⚠ **Le compteur `hors artefacts` de la prochaine garde passera de 24 à 29.**

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 10-1 | les **5** cibles `content/en/embarque/mcu/esp32/esp32-{wifi,ble,uart,i2c,spi}-en.md` sont **ABSENTES** avant génération | les cinq ABSENTES | tenue |
| 10-2 | les trois compteurs sortent **ok** sur les cinq, **aucune divergence**, donc **aucun `--force`** | les trois compteurs ok sur les cinq, 0 `--force` | tenue |
| 10-3 | `code` = **2** pour chacune des cinq (deux blocs en chevron, quatre clôtures), `embeds` = **0** pour les cinq | `code` **6 / 4 / 5 / 5 / 6** ; `embeds` **2 / 2 / 1 / 1 / 1** | **réfutée sur les deux termes** |
| 10-4 | `alias resolus` = **0** sur les cinq : aucune de ces fiches ne vise `FC`/`FP`/`FS`/`critere`/`niveau`/`flexibilite` | 0 (aucune ligne `alias resolus`) | tenue |
| 10-5 | `draft` inséré sur les cinq ; `prerequis suffixes` **≥ 1** sur chacune | `draft` **non inséré** (déjà au front matter des cinq) ; `prerequis suffixes` 2 / 2 / 3 / 3 / 3 | **réfutée** sur `draft`, tenue sur `prerequis` |
| 10-6 | corpus après génération : **193 fiches EN** | 193 | tenue |
| 10-7 | `--controle` : **193 / 0 divergente / 0 lien non suffixé** | 193 / 0 / 0 | tenue |
| 10-8 | `derive-traduction` : **DERIVE 0 / SANS SOURCE 0 / SANS MARQUE 0 / A JOUR 193** | 0 / 0 / 0 / **193** | tenue |
| 10-9 | `compter-mots --paires` : **193 paires**, FR **221 956** (215 646 + 6 310), EN **230 500** | 193 paires, FR **221 956**, EN **230 380** | **réfutée** sur EN (prédit 230 500) |
| 10-10 | `mesure-chevron --tout` : EN **24 porteuses / 50 blocs**, `etiq` EN **50** ; FR **inchangé à 34 / 68 / 67** | EN **24 / 100 cl / 50 bl / 50 etiq** ; FR 34 / 68 / 67 | tenue |
| 10-11 | appariement chevron : **24 paires porteuses, 0 divergente** | 24 paires, 0 divergente | tenue |
| 10-12 | `audit-wikilinks` : `MORT` **52 → 49** — les cinq cibles du lot sortent de la liste, et les squelettes en font entrer de nouvelles | MORT **47** | **réfutée** |
| 10-13 | `titres-doublons.mjs` : **aucun groupe neuf**, ni en FR ni en EN | 193 fiches lues, 184 titres distincts, **9 groupes / 18 fiches** — inchangé | tenue |

### Constats du bloc 10 (G3) — sortie `tools/chevron-2908-postgen.txt`

**13 prédictions, 9 tenues, 4 réfutées.** Génération **propre sur les cinq** :
cibles absentes, trois compteurs `ok`, **aucun `--force`**, `--controle`
**193 / 0 / 0**, `derive` **193 à jour**, appariement chevron **24 paires,
0 divergente**.

⚠ **RÉFUTATION 10-3 : J'AI PRÉDIT LE NOMBRE DE BLOCS EN CHEVRON À LA PLACE DU
NOMBRE DE BLOCS DE CODE, ET ZÉRO EMBED SUR CINQ FICHES QUI EN PORTENT SEPT.**
Le compteur `code` de `compter()` compte **toutes** les clôtures en début de
ligne, préfixe de citation **compris** (l. 399, lue au bloc 1) : il porte donc
les blocs normaux **plus** les blocs en chevron. Prédit **2**, mesuré
**6 / 4 / 5 / 5 / 6**. *Cinquième réfutation de la séance dont la cause est
« un compteur lu sur la mauvaise population », et la seule que la lecture du
code faite au bloc 1 aurait dû empêcher.* ⚠ **Et les sept embeds sont un fait de
rédaction, pas seulement de compteur** : `wifi` et `ble` en portent **2**
chacune, les trois autres **1**, donc **sept textes alternatifs à traduire** —
exactement le périmètre que le mode `--alt` du bloc 3 contrôlera à la clôture,
**onzième séance consécutive de la classe.**

⚠ **RÉFUTATION 10-9, ET SA CAUSE ANNULE UNE LIGNE DE MA PROPRE DÉCLARATION
C131.** J'avais déclaré que le corpus EN d'après ne serait **pas** 224 070 +
6 310, « le générateur ajoutant des libellés aux wikilinks nus ». Il l'est
**exactement** : **230 380**. Aucun libellé n'a été ajouté — les **66 wikilinks**
des cinq sources portent **tous** déjà le leur, et le journal de génération
n'imprime aucune ligne `libelles ajoutes`. *La déclaration C131 nommait un
mécanisme réel du générateur et supposait sans le vérifier qu'il allait
s'appliquer ici.*

⚠ **RÉFUTATION 10-12 : LES CINQ SQUELETTES N'INTRODUISENT AUCUNE CIBLE MORTE
NEUVE.** `MORT` passe de **52 à 47**, soit **exactement les cinq** cibles du lot
qui virent au vert. J'avais provisionné quatre entrées neuves. *Toutes les
cibles visées par les cinq nouvelles fiches étaient **déjà** comptées — soit
vertes, soit déjà mortes par ailleurs.* **`OK` passe de 432 à 437**, +5, et
`CASSE`, `AMBIGU`, `GABARIT`, `ALIAS` sont inchangés.

**Les cinq titres tiennent, et `titres-doublons` le confirme au chiffre près** :
**184 titres distincts** pour 193 fiches, **9 groupes / 18 fiches** — les mêmes
neuf qu'au 29/08 (suite 5). *Aucune collision créée par le lot : `UART on the
ESP32` ne rencontre pas `UART on Arduino`.*

---

## Bloc 11 — ⚠ CORRECTIF É2 : LA PASSE C109 A DÉSACCENTUÉ 147 CARACTÈRES DANS LES CINQ SOURCES FR

### Ce qui s'est passé, lu dans le code de ma propre passe

Les fragments d'ancre de la passe C109 ont été **écrits sans accents**, pour
survivre au transport shell qui avait déjà cassé deux écritures dans cette
séance (bloc 2). Le script les **repliait** — `é` → `e`, `à` → `a` — pour les
apparier sur le texte réel, et l'appariement a parfaitement fonctionné :
**71 ancres, 71 trouvées, 1 défaut détecté puis corrigé.**

⚠ **Mais le texte de REMPLACEMENT était le fragment déplié, pas le fragment
réel.** Le script écrivait `new` tel quel — donc `bibliotheque`, `defaut`,
`integrent deja`, `deforme`, `present`, `sous-systeme embarque`, `L'ecran`.
*Le pliage a été conçu pour la LECTURE et appliqué à l'ÉCRITURE.*

**Mesure du dégât, avant toute correction** — comptage des caractères
`U+00C0`–`U+00FF` par fiche, contre la version `HEAD` :

| fiche | HEAD | après la passe | perdus |
|---|---|---|---|
| `esp32-wifi` | 218 | 202 | **16** |
| `esp32-ble` | 279 | 236 | **43** |
| `esp32-uart` | 195 | 166 | **29** |
| `esp32-i2c` | 184 | 156 | **28** |
| `esp32-spi` | 172 | 141 | **31** |
| **total** | **1 048** | **901** | **147** |

⚠ **ET LES CINQ SQUELETTES EN ONT ÉTÉ ENGENDRÉS.** Le bloc 10 a généré depuis
les sources corrompues : les cinq fiches EN portent le même texte désaccentué
**et** un `source_sha256` calculé dessus. **Aucun contrôle de la chaîne ne
l'aurait vu** — `--style` ne mesure `hors alphabet latin` que **contre la
source**, `--controle` compte des liens, des embeds et des blocs,
`derive-traduction` compare une empreinte à elle-même. *Le défaut a été trouvé
en LISANT le squelette produit, exactement comme les deux alt des séances
précédentes.*

### Décisions prises seules (C117), avec leur coût de revert

1. **`git checkout --` sur les cinq sources FR.** Ce qui est écarté est
   **entièrement** la passe corrompue de cette séance ; les cinq fiches
   n'avaient reçu **aucune** autre écriture depuis HEAD `1846e6c` (garde du
   bloc 8, dates des 19-21/08). **Coût de revert : nul** — la liste des 71
   éditions est intégralement conservée dans le script de passe, et la passe
   se rejoue.
2. **Ré-accentuation par le texte source, pas par ma frappe.** Le remplacement
   ne s'écrit plus littéralement : chaque mot du fragment de remplacement dont
   la forme pliée existe dans le **texte réel apparié** reprend **la graphie
   accentuée de ce texte**. La casse initiale est celle du fragment de
   remplacement (c'est elle qui porte la majuscule de début de phrase). *Un mot
   absent du texte réel — le seul est `Avec` — reste tel quel, et il ne porte
   aucun accent.*
3. **Régénération des cinq squelettes avec `--force`.** La garde « jamais de
   `--force` » protège une **traduction** contre l'écrasement ; ici les cinq
   cibles sont des **squelettes vieux de dix minutes**, issus d'une source
   fausse, **sans une ligne de traduction**. Ne pas les régénérer laisserait
   147 caractères faux dans le corpus EN **et** cinq empreintes calculées sur
   un texte qui n'existe plus.

### Déclaration C131

**Population comptée : les caractères accentués des cinq sources FR**, 1 048 au
HEAD. **Ce que la séance y a versé : −147, par sa propre passe** — c'est le
compteur qui mesure exactement le dégât d'une écriture de la séance, et le seul
de la journée dont l'objet **est** l'artefact de séance. La cible du correctif
est donc **1 048, à l'unité près**, et non « à peu près autant qu'avant ».

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 11-1 | après `git checkout`, les cinq sources sont **identiques à HEAD** : `git diff` vide sur les cinq, et **1 048** accents au total | `git diff` vide sur les cinq ; accents **901**, non 1 048 | **réfutée** sur le nombre, tenue sur l’identité |
| 11-2 | la passe ré-accentuée repasse : **71 ancres, 71 valides, 0 défaut** | 71 / 70 / **1 défaut** au premier jet, puis 71 / 71 / 0 | **réfutée** |
| 11-3 | après passe : **1 048** accents au total, et **218 / 279 / 195 / 184 / 172** fiche par fiche — **identiques à HEAD** | **901**, et **189 / 238 / 166 / 157 / 151** — identiques à HEAD fiche par fiche | **réfutée** sur les nombres, tenue sur l’identité |
| 11-4 | `git diff --stat` : **5** fichiers, **66** insertions, **66** suppressions — les mêmes 66 lignes qu'au bloc 9 | 5 fichiers, 66 insertions, 66 suppressions | tenue |
| 11-5 | `--style` : `C109 de prose` = **10**, `typographie francaise` = **0**, `hors perimetre` = **26** | 10 / 0 / 26 | tenue |
| 11-6 | `tot` du lot = **6 310**, `deh` = **5 753**, `ded` = **547**, `etiq` = **10** — les quatre identiques au bloc 9 | 6 310 / 5 753 / 547 / 10 | tenue |
| 11-7 | régénération : les trois compteurs **ok** sur les cinq, `--force` passé **cinq fois**, aucune autre fiche touchée | trois compteurs ok sur les cinq, `--force` ×5, aucune autre fiche | tenue |
| 11-8 | après régénération : corpus **193 fiches**, EN **230 380 mots**, `--controle` **193 / 0 / 0**, `derive` **193 à jour** | 193 fiches, EN **230 380**, `--controle` 193 / 0 / 0, `derive` 193 à jour | tenue |
| 11-9 | les cinq fiches EN portent **0** caractère de l'intervalle `U+00C0`–`U+00FF` **de moins** que leur source, soit **1 048** au total côté EN aussi (le squelette est la source, à l'octet des transformations structurelles près) | EN = FR **à l’unité sur les cinq**, total **901** de chaque côté | **réfutée** sur le nombre, tenue sur l’identité |
| 11-10 | `mesure-chevron --tout` : EN **24 / 100 cl / 50 bl / 50 etiq**, appariement **24 / 0 divergente** — inchangé | EN 24 / 100 cl / 50 bl / 50 etiq ; 24 paires, 0 divergente | tenue |

### Constats du bloc 11 — le correctif tient, et l'instrument du dégât était faux lui aussi

**10 prédictions, 6 tenues, 4 réfutées.** Les quatre réfutations portent **toutes
sur le même nombre**, et la cause est unique.

⚠ **LE « 147 CARACTÈRES PERDUS » PUBLIÉ EN OUVERTURE DE CE BLOC EST UNE FAUSSE
MESURE, ET LA CAUSE EST DANS LE MOTIF.** `grep -oP '[\x{00C0}-\x{00FF}]'`
appliqué à de l'UTF-8 ne compte pas des **caractères accentués** : il compte des
**octets de tête**. Or `—` (U+2014) commence par `0xE2`, `°` et `«` par `0xC2`,
et tous tombent dans l'intervalle. Le 1 048 « accents » du HEAD était donc
**901 accents + 126 tirets cadratins + le reste**, et le « −147 » de la passe
mélangeait la perte d'accents et le **retrait délibéré de 33 tirets** par C109
elle-même. *Le motif n'a pas été testé sur un échantillon nommé — C110, la
troisième fois de la séance après le `×` du bloc 3 et le grep du bloc 7.*

**Le chiffre juste, mesuré et non dérivé.** Les cinq sources HEAD ont été
copiées dans un bac à sable, **la passe fautive y a été rejouée à l'identique**,
et le comptage sous `[À-ÿŒœŸ]` rend **787 accents contre 901** : la perte réelle
est de **114 caractères accentués**, et le décompte de tirets tombe de **126 à
93**, soit les **33** que la passe devait retirer. *La reproduction sur copie ne
vaut pas mesure du dépôt (précision à C119 du 29/08), mais l'objet mesuré n'est
plus dans le dépôt : il a été écarté, et c'est précisément ce qu'on voulait.*

⚠ **RÉFUTATION 11-2 : LA GARDE D'AMBIGUÏTÉ DU CORRECTIF A MORDU SUR UNE
DIFFÉRENCE DE CASSE.** `esp32-i2c` l. 180 porte `Le premier est ... ; le
second ...` — deux graphies `Le` et `le` sous une même forme pliée, que ma garde
a prises pour deux accentuations concurrentes. **Elle a arrêté la passe avant
toute écriture**, ce qui est son travail ; le correctif de la garde tient en une
ligne (*une différence de casse n'est pas une ambiguïté de graphie, la casse
initiale étant réimposée par le fragment de remplacement*). *Deuxième arrêt
avant écriture de la séance, deuxième fois qu'une garde refuse tout au lieu
d'appliquer presque tout.*

**Ce que le correctif garantit, et comment il le garantit.** Le remplacement ne
s'écrit plus littéralement : chaque mot du fragment reprend **la graphie du
texte réel apparié**, la casse initiale seule venant du fragment. Le contrôle
est **un invariant, pas une relecture** — le nombre de caractères accentués de
chaque fiche doit être **exactement** celui du HEAD, puisque C109 ne touche que
de la ponctuation et des majuscules de début de phrase. **901 → 901, fiche par
fiche.** Et les cinq jumelles EN régénérées portent **901** elles aussi, chacune
au chiffre de sa source.

⚠ **CE QUE CET INCIDENT DIT DU DISPOSITIF, ET QUI N'EST PAS RASSURANT.**
Le défaut a traversé **toute** la chaîne de contrôle sans être vu :
`--style` rend `hors alphabet latin : 0` parce qu'il cherche des caractères
**absents de la source**, jamais des caractères **manquants** ; `--controle`
compte des liens, des embeds et des blocs ; `derive-traduction` compare une
empreinte au fichier dont elle vient de sortir ; `mesure-chevron` compte des
mots, et `bibliotheque` en vaut un autant que `bibliothèque`. **Les cinq
instruments sont sortis au vert sur un texte français désaccentué.** Il a été
trouvé **en lisant le squelette produit** — comme les deux alt du 26/08 et du
29/08. *Le seul contrôle qui l'aurait attrapé est celui qui a servi à le
réparer : l'invariant « le nombre de caractères accentués d'une passe de
ponctuation ne change pas ».* **Candidat de convention, monté en arbitrage.**

---

## Bloc 12 — G4, RÉDACTION DES CINQ FICHES EN

### Garde de péremption avant la passe (point (5))

Relevée à **18:53:02**, copie `2908b17` : HEAD `1846e6c 17:37:55` **inchangé**,
JOURNAL / conventions / TODO aux **trois mêmes horodatages** que les blocs G et
8. `36 (hors artefacts de seance : 32)`.

### Décisions de rédaction prises AVANT d'écrire, et consignées (C117)

1. **Les virgules décimales passent au point.** Le lot en porte **25** —
   `3,3` ×16, `2,4` ×4, `4,7` ×2, `4,48`, `5,47`, `5,48`. Les laisser
   déclencherait le verdict **typographie française** de `--style`, qui compte
   la virgule décimale. `3,3 V` devient `3.3 V`, `4,7 kΩ` devient `4.7 kΩ`.
2. **Les chaînes que la CAPTURE affiche restent en français, code compris.**
   `esp32-wifi` sert une page dont `page-servie.png` montre les liens
   *Allumer* / *Eteindre* et les réponses *LED allumee* / *LED eteinte* ;
   `esp32-ble` publie un appareil que `nrf-connect.png` montre nommé
   *ESP32-Capteur*. **C113 exige que la chaîne affichée et son bloc de sortie
   bougent ensemble** — ici la « sortie » est une image qui ne bouge pas.
   *Traduire le code désynchroniserait la démonstration de sa preuve.* C'est le
   compromis des captures françaises, déjà tenu sur `tinkercad` et
   `arduino-serie`.
3. **Conséquence assumée sur `--alt`** : l'alt EN de `page-servie.png` gardera
   `Non sécurisé`, la mention que le navigateur affiche dans la capture, et il
   **déclenchera `MOT FR`**. C'est la quatorzième occurrence de la classe
   `tinkercad`, et elle est **créée sciemment par ce lot**.
4. **Les identifiants restent français** (C113, coût assumé du registre mixte) :
   `trouves`, `adr`, `ecran`, `compteur`, `client`, `serveur`.

### Déclaration C131

**Population comptée : les cinq paires du lot**, `tot` FR **6 310**, `deh`
**5 753**, `ded` **547**, mesurés au bloc 11 **après** la passe C109 et **après**
le correctif É2. **Ce que ce bloc va y verser : la totalité du texte anglais des
cinq fiches** — c'est le seul bloc de la séance dont l'objet **est** ce qu'il
verse. ⚠ **Le foisonnement mesuré à la clôture est donc, en entier, l'effet de
ce bloc** ; aucun autre versement de la séance n'entre dans ces cinq fiches.

### Prédictions

| # | prédiction | constat | verdict |
|---|---|---|---|
| 12-1 | les cinq `title:` EN : `Wi-Fi on the ESP32`, `Bluetooth LE on the ESP32`, `UART on the ESP32`, `I2C on the ESP32`, `SPI on the ESP32` | les cinq écrits tels quels | tenue |
| 12-2 | `--controle` après rédaction : **193 / 0 divergente / 0 lien non suffixé** | 193 / 0 / 0 | tenue |
| 12-3 | `derive-traduction` : **0 dérive, 193 à jour** | 0 dérive, 193 à jour | tenue |
| 12-4 | **report un pour un** : `C109 de prose` côté EN = **10**, aux **mêmes emplacements** que les dix exemptions FR | **10**, et `hors perimetre` **26 = 26** des deux côtés | tenue |
| 12-5 | `C109 creees en EN` = **0** | 0 | tenue |
| 12-6 | `typographie francaise` côté EN = **0** — les 25 virgules décimales converties, aucune espace avant ponctuation double | 0 | tenue |
| 12-7 | `virgule ambigue` = **0** et `hors alphabet latin` = **0** | 0 et 0 | tenue |
| 12-8 | `deh` EN par fiche : **1 365 / 1 231 / 1 217 / 1 090 / 1 057**, total **5 960**, soit **+3,6 %** | **1 401 / 1 236 / 1 202 / 1 076 / 1 072**, total **5 987**, soit **+4,07 %** | **réfutée sur les six termes** |
| 12-9 | `tot` EN du lot = **6 531** (+3,5 %) | **6 546** (+3,74 %) | **réfutée** |
| 12-10 | `ded` EN du lot = **545**, soit **−0,4 %** — la marge inclut le négatif (règle en éprouvage du 29/08 suite 4) | **549**, soit **+0,37 %** | **réfutée, et de signe** |
| 12-11 | `mesure-chevron --tout` : EN **24 porteuses / 100 cl / 50 bl / 50 etiq**, appariement **24 paires / 0 divergente** | EN 24 / 100 cl / 50 bl / 50 etiq ; 24 paires, 0 divergente | tenue |
| 12-12 | `--alt` : `IDENTIQUE` **0**, `VIDE` **0**, `MOT FR` **14** — les 13 du bloc 5 plus le `Non sécurisé` de `page-servie.png` | **0 / 0 / 14**, et la 14ᵉ est bien le `Non sécurisé` de `page-servie.png` | tenue |
| 12-13 | `titres-doublons` : **193 fiches EN, 9 groupes, 18 fiches** — aucun groupe neuf | EN 193 / 184 distincts / **9 groupes / 18 fiches** | tenue |
| 12-14 | corpus : **193 paires, 221 956 mots FR → 230 601 mots EN** | 193 paires, 221 956 → **230 616** | **réfutée** |
| 12-15 | `audit-wikilinks` : `MORT` **47**, `OK` **437**, `CASSE 0`, `AMBIGU 0`, `GABARIT 8`, `ALIAS 6` — inchangés, la rédaction ne créant ni ne détruisant de wikilink | MORT 47, OK 437, CASSE 0, AMBIGU 0, GABARIT 8, ALIAS 6 | tenue |

### Constats du bloc 12 (G4) — sortie `batterie-sortie.txt`, horloge 19:03:50

**15 prédictions, 11 tenues, 4 réfutées.** *Toutes les prédictions de **verdict**
sont tenues — les dix exemptions reportées une pour une, zéro C109 créée, zéro
typographie française, zéro caractère hors alphabet latin, zéro groupe de titres
neuf, et le `MOT FR` prévu à l'embed près. **Les quatre réfutations sont les
quatre chiffres de foisonnement**, et il n'y en a pas d'autres.*

**LE REPORT UN POUR UN SE REFERME À ZÉRO, ET SUR DEUX COMPTEURS À LA FOIS.**
`C109 de prose` **10 en FR, 10 en EN**, aux dix mêmes emplacements ; et
`hors perimetre` **26 des deux côtés**. *La seconde égalité n'était pas prédite
et vaut autant que la première : elle dit que les titres, cellules de tableau et
alt se sont reportés sans en perdre ni en gagner un.*

⚠ **LE FOISONNEMENT SE TROMPE SUR SES SIX TERMES, ET LA DÉCOMPOSITION EST PLUS
FAUSSE QUE LE TOTAL.** `deh` prédit **5 960**, mesuré **5 987** — un total à
**0,45 %** près, sous lequel les cinq termes se trompent de **+36 / +5 / −15 /
−14 / +15**, dont **deux de signe**. *C'est mot pour mot la règle en éprouvage
du 28/08 — « un total dans la fourchette ne valide pas la décomposition » — et
la cause est la même : j'ai construit les cinq valeurs autour d'un taux de
module (+3,6 %) au lieu de les tirer de chaque source.* **Les taux réels vont
de +2,2 % (`uart`) à +5,6 % (`wifi`)**, soit un écart de **1 à 2,5** à
l'intérieur d'un lot de cinq fiches du même palier, du même auteur, du même
genre. **Foisonnement du lot : `deh` 5 753 → 5 987, +4,07 %** ; sur `tot`
6 310 → 6 546, **+3,74 %** (C127, les deux volumes ensemble).

⚠ **`ded` FOISONNE POSITIVEMENT ET J'AVAIS PRÉDIT LE NÉGATIF.** 547 → **549**,
**+0,37 %**. Le 29/08 (suite 4) avait rendu **−0,38 %** et j'en avais tiré que
« la marge doit inclure le négatif » ; j'ai alors prédit un négatif. *La règle
en éprouvage disait « `ded` se prédit avec une marge, pas comme une
constante » — et j'ai remplacé une constante par une autre.* Les trois mesures
connues sont maintenant **+0,8 %**, **+1,45 %**, **−0,38 %** et **+0,37 %** :
la marge est **[−0,4 % ; +1,5 %]** et rien n'en dit plus.

### Les quatre correctifs de rédaction, et le contrôle qui a attrapé chacun

| # | défaut | attrapé par |
|---|---|---|
| É4 | `source_sha256` de `esp32-spi-en` **inventé de mémoire**, et celui d'`esp32-i2c-en` **recopié d'un squelette périmé** (celui d'avant É2) | `derive-traduction` — **le seul outil qui voie l'empreinte**, et il l'a vue dans la minute |
| É5 | un paragraphe **écrit en anglais seul**, absent de la source FR, pour expliquer pourquoi la page servie reste française | `--style`, par le compteur `hors alphabet latin` : le `⚠` du paragraphe est un caractère **absent de la source** |
| É6 | guillemets français `« »` dans l'alt de `nrf-connect.png` | `--style`, verdict `typographie francaise` |
| É7 | espace française devant `;` — trois puces d'`uart` et la parenthèse `(VSPI : … ; HSPI : …)` de `spi` | `--style`, verdict `typographie francaise` |

⚠ **É5 EST LE PLUS INSTRUCTIF DES QUATRE, ET IL A ÉTÉ ATTRAPÉ PAR ACCIDENT.**
Le paragraphe ajouté disait quelque chose de vrai — que les chaînes servies
restent françaises parce que la capture les montre — mais **la source ne le dit
pas**, et l'écrire d'un seul côté fabrique une asymétrie EN/FR que rien
n'autorise (motif du 26/08). *Le compteur qui l'a signalé ne cherchait pas cela* :
il cherchait un caractère hors alphabet latin, et il est tombé sur le `⚠` du
paragraphe. **Aucun contrôle du chantier ne mesure « du contenu ajouté d'un seul
côté »** — les trois compteurs de `--controle` comptent des liens, des embeds et
des blocs, jamais des paragraphes. *Retiré ; la question « faut-il signaler au
lecteur anglophone la langue d'une capture » rejoint l'arbitrage ouvert du 29/08
(suite 5) sur la forme des annotations incrustées.*

⚠ **ET UN INCIDENT DE C124 : LE TÉMOIN DE LA PREMIÈRE BATTERIE DE CLÔTURE A ÉTÉ
DÉTRUIT PAR MON PROPRE FILTRE D'AFFICHAGE.** Le lancement passait par
`| Select-Object -First 90`, qui a **coupé le pipeline** avant le
`Out-File` final du script : les mesures se sont affichées, et
`batterie-sortie.txt` est resté sur la garde de 18:53. **Batterie relancée sans
filtre**, sortie de 82 052 octets écrite à 19:03:50. *C124 dit qu'un contrôle
dont le témoin a disparu ne prouve rien ; ici le témoin a disparu **parce que je
regardais la sortie**.* **Règle d'usage : la batterie ne se filtre jamais au
lancement — elle écrit son fichier, et c'est le fichier qui se filtre.**

### Contrôle C125 des deux côtés (amendement du 29/08 suite 5), relevé à la clôture

**9 groupes en FR, 9 en EN, 8 en commun** — **exactement les deux asymétries
déjà connues**, et **aucune neuve** :

- **FR seulement** — `Lire une entrée TOR` sur `arduino-entree-tor` et
  `micropython-entree-tor` : l'anglais **a inventé** une distinction que la
  source ne porte pas.
- **EN seulement** — `Using a shield` sur `arduino-shield-en` et
  `micropython-shield-en` : l'anglais **a effacé** une distinction que la source
  portait.

*Les deux sont au programme du chantier FR de nommage, et le lot du jour n'en a
créé aucune troisième : `UART on the ESP32` ne rencontre pas `UART on Arduino`.*

---

## BILAN GÉNÉRAL DE LA SÉANCE — LOT 2 D'`esp32/` ET SES TROIS BLOCS HORS LOT

| bloc | prédictions | tenues | réfutées |
|---|---|---|---|
| G — garde d'ouverture | 10 | 9 | **1** |
| 1 — ①(b) relevé de référence du chevron | 11 | **11** | **0** |
| 2 — ①(b) en-tête, colonne `etiq`, `ECART` conditionnel | 12 | 10 | **2** |
| 3 — ③(c) mode `--alt` | 12 | 7 | **5** |
| 4 — correctif É1 et relevé des deux classes | 8 | **8** | **0** |
| 5 — correction de l'unique défaut vrai | 10 | 9 | 0 (+1 partielle) |
| 6 — correctif d'alias, relevé chiffré | 10 | 5 | **5** |
| 7 — correctif d'alias, générateur et rattrapage | 11 | 9 | **2** |
| 8 — G1 cadrage du lot | 15 | 14 | **1** |
| 9 — G2 passes C109 | *(12)* | *hors décompte* | *hors décompte* |
| 10 — G3 titres et génération | 13 | 9 | **4** |
| 11 — correctif É2, la désaccentuation | 10 | 6 | **4** |
| 12 — G4 rédaction et clôture | 15 | 11 | **4** |
| **total comptabilisé** | **137** | **108** | **28** |

**Taux de réfutation 20,4 %**, contre **23,5 %** au lot 1 d'`esp32/` et **7,6 %**
au lot 6. **Plus 12 prédictions hors décompte**, celles du bloc 9, non appendues
avant leur bloc et consignées en incident.

✅ **LA RÉPARTITION DU LOT 1 SE CONFIRME AU TERME PRÈS, ET C'EST LE RÉSULTAT LE
PLUS SOLIDE DE LA SÉANCE.** Les blocs de **verdict** — 1 (relevé de référence),
4 (classement des quinze verdicts d'alt), 12 sur ses onze prédictions de règle —
sortent à **zéro réfutation**. Les 28 réfutations sont **toutes** dans des
compteurs de mesure ou de cadrage. *Le protocole se trompe sur ce qu'un compteur
va rendre, pas sur ce que la règle décide, et c'est le deuxième lot d'affilée où
la coupure tombe exactement là.*

⚠ **NEUF DES 28 RÉFUTATIONS ONT UNE CAUSE UNIQUE : UN COMPTEUR LU SUR LA
MAUVAISE POPULATION.** G-6 (la déclaration C131 nomme deux versements et en
chiffre un), 6-7 (`MORT 58` compte des cibles et non des occurrences, et la
ligne l'écrit), 7-2 (le total d'un corpus prédit sur une fiche), 9-1 (66 lignes
publiées sous le nom de 71 ancres), 10-3 (le nombre de blocs en chevron prédit
à la place du nombre de blocs de code), 10-9, 10-12, 11-1 et 11-3 (des octets de
tête comptés pour des caractères accentués). *L'amendement (7) de la sous-règle
C116 — tout compteur dont on publie une prédiction se lit dans le code qui
l'incrémente — a été relu au cadrage et pris en défaut neuf fois.* **La
variante qui domine cette séance n'est plus « j'ai lu l'étiquette au lieu du
mécanisme » mais « j'ai lu le bon mécanisme sur le mauvais ensemble ».**

⚠ **QUATRE RÉFUTATIONS SUR CINQ DU BLOC 12 SONT LE MÊME CHIFFRE : LE
FOISONNEMENT.** `deh`, `tot`, `ded` et le corpus. La décomposition par fiche est
fausse sur ses cinq termes, dont deux de signe, sous un total juste à **0,45 %**.
*Règle du 28/08 confirmée pour la deuxième fois : un total dans la fourchette ne
valide pas la décomposition.*

**LES SEPT CORRECTIFS D'AUTEUR, ET CE QUI A ATTRAPÉ CHACUN.**

| # | défaut | attrapé par |
|---|---|---|
| É1 | `×` et `÷` dans l'intervalle d'accent de `--alt` | lecture de la sortie, deux alt anglais irréprochables signalés |
| É2 | **114 caractères accentués perdus** par la passe C109 | **lecture du squelette généré** — aucun instrument |
| É3 | offsets décalés par la ligature `œ`, `eet` pour `et` | **invariant de longueur** ajouté après É2 |
| É4 | un `source_sha256` **inventé**, un autre **périmé** | `derive-traduction`, le seul outil qui voie l'empreinte |
| É5 | un paragraphe écrit **en anglais seul** | `--style`, verdict `hors alphabet latin`, **par accident** |
| É6 | guillemets `« »` dans un alt EN | `--style`, verdict `typographie francaise` |
| É7 | espace française devant `;`, quatre emplacements EN | `--style`, verdict `typographie francaise` |

⚠ **DEUX DES SEPT N'ONT ÉTÉ TROUVÉS PAR AUCUN INSTRUMENT, ET CE SONT LES DEUX
PLUS GRAVES.** É2 a traversé cinq contrôles au vert et n'a été vu qu'en lisant
le texte produit ; É5 a été signalé par un compteur qui cherchait autre chose.
*Trois séances de suite, le défaut de fond a été trouvé par la lecture et non
par la mesure — les deux alt du 26/08 et du 29/08, la désaccentuation du 29/08
(suite 6).* **Les instruments du chantier mesurent des différences entre deux
états ; ils ne mesurent rien de ce qui est faux des deux côtés à la fois.**

---

# Prédictions — 2026-08-29 (suite 7), pilote Claude Code, CHANTIER FR DE NOMMAGE

> **Quatrième séance sous la sous-règle C116 « exécution directe »** avec ses
> amendements 6 à 9, **deuxième séance sous C131**, et première séance sous les
> **trois règles d'usage du 29/08 (suite 6)** — *une déclaration C131 se termine
> par le total qu'elle implique*, *une passe de ponctuation ne change pas le
> nombre de caractères accentués*, *la batterie ne se filtre jamais au
> lancement*. Même journée d'horloge que les lots 6, 1 et 2 : **même fichier de
> prédictions**.
>
> **Chantier** : table arbitrée le 29/08 (suite 5), **9 paires**, qualificatif
> en queue sur les huit régulières, dérogation sur `lire-un-programme`,
> `entree-tor` aligné sur `Reading a digital input` (arbitrage Tim contre ma
> recommandation), `micropython-shield-en` → `Using a shield or expansion
> board`. Puis **`--recaler` sur les 18 paires**. Puis **lot 3 d'`esp32/`**.

## INCIDENT DE PROTOCOLE — LE BLOC G A ÉTÉ LANCÉ AVANT SES PRÉDICTIONS

`batterie.ps1 -Phase garde` a été lancé au titre de **l'étape 3 de la lecture
d'ouverture de CLAUDE.md**, donc **avant** que ce fichier ne reçoive quoi que ce
soit. La sous-règle C116 (1) exige l'ordre inverse : les prédictions s'appendent
**avant chaque bloc d'exécution**, l'ordre des appels dans la transcription
faisant foi. **Le bloc G est donc hors décompte**, comme le bloc 9 du 29/08
(suite 6), et ses constats se consignent sans verdict.

*La cause est nommable et elle est structurelle* : CLAUDE.md ordonne la garde en
**troisième lecture d'ouverture**, avant tout cadrage, quand C116 (1) exige un
fichier de prédictions déjà ouvert. **Les deux instructions se contredisent sur
le premier lancement de chaque séance**, et c'est la deuxième séance d'affilée
que le premier bloc tombe hors décompte pour une raison de séquence.
**Arbitrage à remonter** (voir clôture).

### Constats du bloc G (sortie `batterie-sortie.txt`, horloge 19:30:56)

Garde **verte**. `lignes non ASCII dans batterie.ps1` = **0** ; copie C124 =
`tools\batterie-sortie-2908b21.txt` ; en-tête `phase demandee : garde   anneau :
2   chevron : False` ; date **2026-08-29**, heure **19:30:56** ; HEAD
**`a5226ea` 2026-08-29 19:30:08 +0200** ; `fichiers modifies non commites` = **1
(hors artefacts de seance : 0)** ; `node : v24.15.0` ; dates d'écriture
`JOURNAL.md` 19:08:19, `conventions.md` 19:09:34, `TODO.md` 19:09:34 — **les
trois antérieures à l'horloge de HEAD**, donc committées. Aucune fiche de
`content/` listée. **Aucun état inattendu.**

**Liste nominative du compteur `fichiers modifies non commites` = 1** :
`tools/batterie-sortie-2908b21.txt`, copie C124 créée par l'étape 0 du
lancement lui-même. **Hors artefacts = 0**, la liste nominative est **vide**,
la garde n'est pas affectée (C116 (9)).

## DÉCLARATION C131 D'OUVERTURE — population des compteurs, ce que la séance y a déjà versé, ET LE TOTAL QUE CELA IMPLIQUE

**Versé dans le dépôt avant le bloc 1** — deux fichiers, et je les additionne
(règle d'usage du 29/08 suite 6, née de la réfutation G-6) :

1. `tools/batterie-sortie-2908b21.txt` — copie C124 du bloc G, fichier **neuf,
   non suivi** : **+1** au compteur total, **0** hors artefacts (filtre
   `-notmatch 'batterie-sortie'`).
2. **Le présent texte**, appendu à `tools/predictions-260829.md`, fichier
   **suivi par git** (arbitrage (f)(ii) du 29/08) : **+1** au compteur total,
   **0** hors artefacts (filtre `-notmatch 'predictions-'`).

**TOTAL IMPLIQUÉ : `fichiers modifies non commites` = 2, `hors artefacts de
seance` = 0**, à la prochaine garde et **avant toute édition de `content/`**.
Chaque passe d'édition ajoutera ensuite ses fiches **au compteur hors
artefacts**, et c'est là que se lira la liste nominative.

**Populations nommées, pour toute la séance :**

| compteur | population exacte, lue dans le code qui l'incrémente |
|---|---|
| `fiches lues` de `titres-doublons.mjs` **côté FR** | tout `.md` sous `content/` **hors `content/en/` et hors `templates/`**, portant un front matter avec `title:` |
| `fiches lues` **côté EN** | tout `.md` sous `content/en/` |
| `GROUPES EN COLLISION` | groupes de **forme normalisée** (accents retirés, casse repliée, ponctuation réduite à un blanc) portés par **2 fiches ou plus** du **même côté** |
| `candidats a lire` de `--libelles` | wikilinks **à libellé** de `content/en/` **seul**, hors blocs de code, dont la cible EN existe, dont aucun radical de mot utile n'est commun au `title:` de la cible, sigles et patron `step N` exclus |
| `mots FR` de `compter-mots.mjs` | mots C110 **hors front matter**, hors blocs de code clôturés, de toutes les fiches FR publiées |
| `A JOUR` de `derive-traduction.mjs` | fiches EN dont le `source_sha256` égale le sha256 **du contenu entier** de la source FR, **front matter compris** |

**DEUX CONSÉQUENCES DE CES DEUX DERNIÈRES LIGNES, ET ELLES TIRENT EN SENS
CONTRAIRE.** `compter-mots` **retire le front matter avant de compter** : une
passe de `title:` lui est **invisible par construction**, donc il ne peut pas
réfuter l'invariant de corps — il peut seulement ne pas le contredire.
`derive-traduction` prend au contraire le **fichier entier**, front matter
compris : une passe de `title:` FR met **mécaniquement** ses jumelles en dérive.
*C'est exactement ce que dit le brief — sans `--recaler`, la ligne « dérive 0 »
ment plusieurs séances.*

**L'instrument de l'invariant de corps n'est donc PAS `compter-mots`, c'est
`git diff --numstat`** : une passe de titres doit rendre **`1  1`** sur chaque
fiche touchée, et **toutes** les lignes du `git diff -U0` doivent commencer par
`title:`. `compter-mots` se lance quand même — le brief l'ordonne, et un chiffre
inchangé est une garde de plus — mais **c'est le diff qui prouve, pas lui**.

## Bloc 1 — G1, CADRAGE DU CHANTIER : LES RELEVÉS D'ENTRÉE, AVANT TOUTE ÉCRITURE

Commandes :

    node tools/titres-doublons.mjs
    node tools/creer-fiche-en.mjs --libelles
    node tools/derive-traduction.mjs --tout
    node tools/compter-mots.mjs
    node tools/compter-mots.mjs --lot <les 18 sources FR>

| # | prédiction | constat | verdict |
|---|---|---|---|
| 1-1 | `titres-doublons` **FR** : `fiches lues` **243**, `sans title:` **0**, `titres distincts` **234**, `GROUPES EN COLLISION` **9**, `fiches concernees` **18** | | |
| 1-2 | `titres-doublons` **EN** : `fiches lues` **193**, `sans title:` **0**, `titres distincts` **184**, `GROUPES EN COLLISION` **9**, `fiches concernees` **18** | | |
| 1-3 | les **neuf** groupes FR sont exactement : `Câbler un module`, `État des GPIO à l'allumage`, `Lire un capteur numérique`, `Lire un programme qu'on n'a pas écrit`, `Lire une entrée TOR`, `Piloter un moteur pas-à-pas`, `Piloter un servomoteur`, `Piloter une sortie TOR`, `Utiliser une bibliothèque` — **2 fiches chacun**, aucun à 3 | | |
| 1-4 | les **neuf** groupes EN sont exactement : `Driving a servo`, `Driving a stepper motor`, `Driving an on/off output`, `GPIO state at power-up`, `Reading a digital sensor`, `Reading a program you did not write`, `Using a library`, `Using a shield`, `Wiring a module` — **2 fiches chacun** | | |
| 1-5 | **8 groupes communs** ; **FR seul** = `Lire une entrée TOR` ; **EN seul** = `Using a shield`. L'appariement se fait par **couple de fiches**, pas par forme traduite | | |
| 1-6 | `--libelles` : `wikilinks a libelle` **3570**, `cible EN existante` **3236**, `cible EN absente` **334**, `candidats a lire` **112**, `positions de parcours` **16** | | |
| 1-7 | `derive-traduction --tout` : `A JOUR` **193**, `DERIVE` **0**, `SANS SOURCE` **0**, `SANS MARQUE` **0**, **code de sortie 0** | | |
| 1-8 | `compter-mots` (corpus) : `mots FR` **291220**, `deja traduites` **193 fiches / 221956 mots**, `RESTANT A TRADUIRE` **49 fiches / 69264 mots** | | |
| 1-9 | `compter-mots --lot` sur les 18 sources FR rend **19 lignes** (18 fiches + 1 total). **La valeur du total n'est PAS prédite** : aucune mesure du jour ne la porte, et C118 interdit de la dériver. C'est un **relevé de référence**, comme le bloc 1 du 29/08 (suite 6) | | |
| 1-10 | `git status --porcelain` : **2 fichiers**, `tools/batterie-sortie-2908b21.txt` et `tools/predictions-260829.md`, **0 dans `content/`** | | |

**Ce qu'un écart déclencherait.** 1-1 à 1-5 réfutés = **la table arbitrée ne
porte pas sur l'état mesuré du dépôt** = arrêt et remontée à Tim avant toute
écriture. 1-7 réfuté (dérive non nulle à l'entrée) = le `--recaler` du lot
masquerait une dérive préexistante = arrêt. 1-10 réfuté = garde de péremption.

### FORMES EXACTES DE LA TABLE, ÉCRITES AVANT LA PASSE (C116 (2) : une prédiction sans forme exacte est réputée absente)

**Côté FR — 18 fiches, 18 `title:` réécrits.** Patron `sur Arduino` /
`en MicroPython`, **lu en production** sur 14 paires FR (`i2c`, `spi`, `uart`,
`temporisation`, `timers`, `interruptions`, `machine-a-etats`, `memoire`,
`moteur-cc`, `sortie-pwm`, `capteur-analogique`, `pid`, `watchdog`,
`programmation-non-bloquante`) et **pas déduit**.

| # | fiche | avant | après |
|---|---|---|---|
| F1 | `arduino-module` | Câbler un module | **Câbler un module sur Arduino** |
| F2 | `micropython-module` | Câbler un module | **Câbler un module en MicroPython** |
| F3 | `arduino-gpio-boot` | État des GPIO à l'allumage | **État des GPIO à l'allumage sur Arduino** |
| F4 | `micropython-gpio-boot` | État des GPIO à l'allumage | **État des GPIO à l'allumage en MicroPython** |
| F5 | `arduino-capteur-numerique` | Lire un capteur numérique | **Lire un capteur numérique sur Arduino** |
| F6 | `micropython-capteur-numerique` | Lire un capteur numérique | **Lire un capteur numérique en MicroPython** |
| F7 | `cpp-lire-un-programme` | Lire un programme qu'on n'a pas écrit | **Lire un programme C++ qu'on n'a pas écrit** *(dérogation)* |
| F8 | `micropython-lire-un-programme` | Lire un programme qu'on n'a pas écrit | **Lire un programme MicroPython qu'on n'a pas écrit** *(dérogation)* |
| F9 | `arduino-entree-tor` | Lire une entrée TOR | **Lire une entrée TOR sur Arduino** |
| F10 | `micropython-entree-tor` | Lire une entrée TOR | **Lire une entrée TOR en MicroPython** |
| F11 | `arduino-moteur-pas-a-pas` | Piloter un moteur pas-à-pas | **Piloter un moteur pas-à-pas sur Arduino** |
| F12 | `micropython-moteur-pas-a-pas` | Piloter un moteur pas-à-pas | **Piloter un moteur pas-à-pas en MicroPython** |
| F13 | `arduino-servomoteur` | Piloter un servomoteur | **Piloter un servomoteur sur Arduino** |
| F14 | `micropython-servomoteur` | Piloter un servomoteur | **Piloter un servomoteur en MicroPython** |
| F15 | `arduino-sortie-tor` | Piloter une sortie TOR | **Piloter une sortie TOR sur Arduino** |
| F16 | `micropython-sortie-tor` | Piloter une sortie TOR | **Piloter une sortie TOR en MicroPython** |
| F17 | `arduino-bibliotheques` | Utiliser une bibliothèque | **Utiliser une bibliothèque sur Arduino** |
| F18 | `micropython-bibliotheques` | Utiliser une bibliothèque | **Utiliser une bibliothèque en MicroPython** |

**Côté EN — 19 fiches, et le chiffre n'est pas 18.** Patron `on Arduino` /
`in MicroPython`, **lu en production** sur 16 titres `on Arduino` et 15
`in MicroPython`.

| # | fiche | avant | après |
|---|---|---|---|
| E1 | `arduino-module-en` | Wiring a module | **Wiring a module on Arduino** |
| E2 | `micropython-module-en` | Wiring a module | **Wiring a module in MicroPython** |
| E3 | `arduino-gpio-boot-en` | GPIO state at power-up | **GPIO state at power-up on Arduino** |
| E4 | `micropython-gpio-boot-en` | GPIO state at power-up | **GPIO state at power-up in MicroPython** |
| E5 | `arduino-capteur-numerique-en` | Reading a digital sensor | **Reading a digital sensor on Arduino** |
| E6 | `micropython-capteur-numerique-en` | Reading a digital sensor | **Reading a digital sensor in MicroPython** |
| E7 | `cpp-lire-un-programme-en` | Reading a program you did not write | **Reading a C++ program you did not write** *(dérogation, miroir de F7)* |
| E8 | `micropython-lire-un-programme-en` | Reading a program you did not write | **Reading a MicroPython program you did not write** *(dérogation, miroir de F8)* |
| E9 | `arduino-entree-tor-en` | Reading an on/off input | **Reading a digital input on Arduino** |
| E10 | `micropython-entree-tor-en` | Reading a digital input | **Reading a digital input in MicroPython** |
| E11 | `arduino-moteur-pas-a-pas-en` | Driving a stepper motor | **Driving a stepper motor on Arduino** |
| E12 | `micropython-moteur-pas-a-pas-en` | Driving a stepper motor | **Driving a stepper motor in MicroPython** |
| E13 | `arduino-servomoteur-en` | Driving a servo | **Driving a servo on Arduino** |
| E14 | `micropython-servomoteur-en` | Driving a servo | **Driving a servo in MicroPython** |
| E15 | `arduino-sortie-tor-en` | Driving an on/off output | **Driving an on/off output on Arduino** |
| E16 | `micropython-sortie-tor-en` | Driving an on/off output | **Driving an on/off output in MicroPython** |
| E17 | `arduino-bibliotheques-en` | Using a library | **Using a library on Arduino** |
| E18 | `micropython-bibliotheques-en` | Using a library | **Using a library in MicroPython** |
| E19 | `micropython-shield-en` | Using a shield | **Using a shield or expansion board** |

**`arduino-shield-en` NE BOUGE PAS** — il garde `Using a shield`, image du
`title:` FR `Utiliser un shield` que la source porte déjà. C'est le sens de
« `shield` se traite côté EN seul » : le FR distingue déjà, l'anglais rattrape.

**LE « 18 EN » DU BRIEF EST UN COMPTE DE FICHES EN COLLISION, PAS UN COMPTE
D'ÉDITIONS, ET LES DEUX DIFFÈRENT DE UN.** Les 18 fiches EN concernées sont les
**9 groupes EN fois 2**. Le chantier en **retire** `arduino-shield-en`
(inchangé, moins un) et y **ajoute** les deux fiches `entree-tor-en`, qui ne
forment **aucun groupe EN** puisque leurs deux titres diffèrent déjà (plus
deux). **18 moins 1 plus 2 = 19 éditions EN**, contre **18 éditions FR**. *Le
nombre reporté au brief est juste sur sa propre population et faux sur celle des
passes* — C131 exactement, et c'est la troisième fois de la semaine qu'un
compteur du chantier de nommage est lu sur la mauvaise population.

**`--recaler` porte bien sur 18 paires** — une par fiche FR touchée — et non 19 :
E19 et E9 ne changent aucune source FR, et F9/F10 sont déjà comptées.

### DÉCISIONS PRISES SEULES SOUS C117, AVEC LEUR COÛT DE REVERT (amendement C116 (8))

1. **La forme anglaise de la dérogation** (E7/E8) : `Reading a C++ program you
   did not write` / `Reading a MicroPython program you did not write`. Le
   JOURNAL du 29/08 (suite 5) arbitre la dérogation **en français seulement** ;
   l'anglais en est le miroir strict, qualificatif dans le groupe nominal parce
   qu'aucune forme en queue ne se dit derrière la relative — le motif est le
   même dans les deux langues. **Revert = 2 éditions de `title:` + 2
   `--recaler`.**
2. **`Driving an on/off output` reste `on/off` en anglais** (E15/E16) alors que
   `Reading an on/off input` devient `digital` (E9). L'arbitrage Tim du 29/08
   (suite 5) porte **nommément sur `entree-tor`** et sur lui seul ; l'étendre à
   `sortie-tor` serait décider à la place de Tim. **Coût assumé : l'anglais
   porte désormais `digital input` en lecture et `on/off output` en écriture,
   là où le français porte `entrée TOR` / `sortie TOR` symétriques.**
   **Revert = 2 éditions + 2 `--recaler`. Remonté en arbitrage à la clôture.**
3. **Passe FR d'abord, passe EN ensuite, `--recaler` en dernier.** L'ordre
   inverse recalerait sur une source FR pas encore réécrite et referait tomber
   les 18 paires en dérive. **Revert : sans objet, l'ordre ne s'écrit pas.**

### Constats du bloc 1 (G1) — **10 prédictions, 10 tenues, 0 réfutée**

| # | constat |
|---|---|
| 1-1 | FR **243 / 0 / 234 / 9 / 18** — tenue au terme près |
| 1-2 | EN **193 / 0 / 184 / 9 / 18** — tenue au terme près |
| 1-3 | les neuf formes FR sont exactement les neuf prédites, **2 fiches chacune** |
| 1-4 | les neuf formes EN sont exactement les neuf prédites, **2 fiches chacune** |
| 1-5 | **8 communs**, FR seul `Lire une entrée TOR`, EN seul `Using a shield` |
| 1-6 | `--libelles` **3570 / 3236 / 334 / 112 / 16** |
| 1-7 | `A JOUR` **193**, DERIVE / SANS SOURCE / SANS MARQUE **0 / 0 / 0**, exit **0** |
| 1-8 | corpus **242 fiches, 291220 mots**, traduites **193 / 221956**, restant **49 / 69264** |
| 1-9 | `--lot` rend **19 lignes**. **Relevé de référence : LOT (18 fiches) = 24885 mots** |
| 1-10 | `git status --porcelain` = **2**, `tools/predictions-260829.md` (M) et `tools/batterie-sortie-2908b21.txt` (??), **0 dans `content/`** |

**Le cadrage est vert sur ses dix termes**, et la table arbitrée porte bien sur
l'état mesuré du dépôt. **24885 mots FR** est la référence de l'invariant de
corps ; **291220** celle du corpus.

*Première fois de la semaine qu'un bloc de cadrage sort à zéro réfutation.* La
cause est lisible : **neuf des dix prédictions sont des relevés d'état déjà
mesurés le jour même** — b20 pour `--libelles`, la dérive et le corpus,
`titres-2908.txt` pour les titres — et la seule qui ne l'était pas, 1-9, a été
**déclarée non prédite** au lieu d'être dérivée. *Le taux de réfutation d'un
bloc de cadrage mesure surtout la fraîcheur de ses sources.*

---

## Bloc 2 — G2, PASSE FR : LES 18 `title:`, OUTIL DE RENOMMAGE ATOMIQUE, ET L'INVARIANT DE CORPS

Commandes :

    powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde
    node tools/renommer-titres.mjs tools/table-titres-2908.tsv            (contrôle seul)
    node tools/renommer-titres.mjs tools/table-titres-2908.tsv --ecrire
    git diff --numstat ; git diff -U0
    node tools/compter-mots.mjs --lot <les 18>  ; node tools/compter-mots.mjs
    node tools/titres-doublons.mjs ; node tools/derive-traduction.mjs --tout

**Décision C117 (4), avec son coût de revert.** La passe s'écrit dans un **outil
node neuf**, `tools/renommer-titres.mjs`, et non dans `tools/seance.ps1`.
*Motif lu dans la contrainte et non choisi* : C122 impose à `seance.ps1` d'être
**ASCII strict**, et les 18 titres FR portent `â`, `É`, `é`, `à`, `ê` — un
`seance.ps1` conforme ne peut pas porter cette table en littéral. Le
renommage du 27/08 (suite 4) avait déjà contourné la même contrainte.
L'outil ne porte **aucune table** : elle vit dans un TSV daté,
`tools/table-titres-2908.tsv`, ce qui satisfait C126 — l'ossature se versionne,
le contenu de la passe est daté et jetable. **Revert = suppression de deux
fichiers non suivis, aucune fiche touchée.**

| # | prédiction | constat | verdict |
|---|---|---|---|
| 2-0 | garde avant passe : HEAD **`a5226ea`** inchangé, `fichiers modifies non commites` = **3** (predictions M, `batterie-sortie-2908b21.txt` ??, `batterie-sortie-2908b22.txt` ?? créée par l'étape 0 du lancement lui-même), `hors artefacts de seance` = **0**, copie C124 = `tools\batterie-sortie-2908b22.txt` | | |
| 2-1 | **contrôle d'unicité d'ancre, test négatif** : le TSV reçoit une **19ᵉ ligne délibérément fausse** (ancre `Cabler un module` sans circonflexe, celle-là même dont l'absence d'accent a fait échouer le lot 6 du 29/08) — le contrôle rend **18 ancres trouvées, 1 introuvable**, **exit 1**, et **0 fichier écrit** | | |
| 2-2 | ligne fausse retirée : contrôle **18 / 18 ancres uniques**, exit **0**, **0 fichier écrit** (le mode par défaut n'écrit pas) | | |
| 2-3 | `--ecrire` : **18 fichiers réécrits**, aucun refus | | |
| 2-4 | `git diff --numstat` sur `content/` : **18 lignes**, chacune exactement **`1	1`** — une ligne ajoutée, une retirée, par fiche | | |
| 2-5 | `git diff -U0 -- content/` : **36 lignes** de contenu (hors `+++`/`---`), **18 en `-title: `** et **18 en `+title: `**, **aucune** ne portant autre chose que `title:` | | |
| 2-6 | `compter-mots --lot` sur les 18 : **24885**, **strictement inchangé**, et **chaque ligne fiche à fiche inchangée** — 1621 / 924 / 1520 / 1061 / 1526 / 1237 / 2481 / 2644 / 1019 / 933 / 1477 / 872 / 1732 / 1375 / 1140 / 948 / 1587 / 788 | | |
| 2-7 | `compter-mots` corpus : **242 fiches, 291220 mots**, `mediane par fiche` **1089**, `fiche la plus lourde` `embarque/pcb/easyeda.md (9773)` — les quatre inchangés | | |
| 2-8 | `titres-doublons` **FR** : `fiches lues` **243**, `titres distincts` **243**, `GROUPES EN COLLISION` **0**, `fiches concernees` **0** | | |
| 2-9 | `titres-doublons` **EN** : **inchangé**, 193 / 184 / **9** / 18 — la passe FR ne touche aucun `title:` anglais | | |
| 2-10 | `derive-traduction --tout` : `DERIVE` **18**, `A JOUR` **175**, `SANS SOURCE` **0**, `SANS MARQUE` **0**, **exit 1** ; les 18 dérivées sont exactement les jumelles EN des 18 fiches FR de la table | | |
| 2-11 | `--libelles` : **112 candidats, inchangé** — le mode ne lit que `content/en/` (lu dans le code, `walk(join(CONTENT, 'en'))`), donc une passe FR lui est invisible | | |
| 2-12 | `git status --porcelain` après passe : **21 fichiers**, dont **18 dans `content/`** ; `hors artefacts de seance` de la garde suivante = **18** | | |

**Ce qu'un écart déclencherait.** 2-1 réfuté (le contrôle laisse passer une
ancre absente) = **l'outil ne garde pas**, arrêt et réécriture avant tout
`--ecrire`. 2-4 ou 2-5 réfuté = **le corps a bougé**, `git checkout` des 18 et
arrêt. 2-10 réfuté à la baisse = des jumelles ne sont pas détectées dérivées,
donc le `--recaler` du bloc 4 en manquerait.

### Constats du bloc 2 (G2) — **13 prédictions, 11 tenues, 2 réfutées**

| # | constat | verdict |
|---|---|---|
| 2-0 | HEAD **`a5226ea` inchangé**, horloge **19:39:37**, copie C124 `batterie-sortie-2908b22.txt`. **`fichiers modifies non commites` = 5, hors artefacts = 2** — prédit 3 / 0 | **réfutée** |
| 2-1 | `L24 INTROUVABLE`, `ancre attendue : Cabler un module`, `title: en place : Câbler un module`, **18 trouvées / 1 introuvable**, `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, exit **1** | tenue |
| 2-2 | **18 / 18** ancres uniques, exit **0**, `CONTROLE SEUL : 18 renommage(s) prets, 0 fichier ecrit` | tenue |
| 2-3 | `fichiers ecrits : 18`, exit 0, aucun refus | tenue |
| 2-4 | `git diff --numstat -- content/` : **18 lignes, toutes `1	1`** | tenue |
| 2-5 | **36 lignes** de contenu, **0** ne commençant pas par `title: ` | tenue |
| 2-6 | `LOT (18 fiches) 24885`, **les 18 lignes fiche à fiche identiques au chiffre près** | tenue |
| 2-7 | **242 / 291220 / 1089 / `easyeda.md` (9773)** — les quatre inchangés | tenue |
| 2-8 | FR **243 lues, 243 distincts, 0 groupe, 0 fiche concernée** | tenue |
| 2-9 | EN **193 / 184 / 9 / 18**, inchangé | tenue |
| 2-10 | `DERIVE 18`, `A JOUR 175`, `SANS SOURCE 0`, `SANS MARQUE 0`, exit 1 ; les 18 sont exactement les jumelles EN des 18 sources FR | tenue |
| 2-11 | `--libelles` **3570 / 3236 / 334 / 112 / 16**, inchangé | tenue |
| 2-12 | `git status --porcelain` = **23**, dont **18 dans `content/`** — prédit 21 / 18 | **réfutée** |

✅ **LES NEUF GROUPES FR SONT FERMÉS À LA SOURCE, ET L'INVARIANT DE CORPS TIENT
À L'OCTET.** `titres distincts` passe de **234 à 243** sur **243 fiches lues** :
le corpus français ne porte plus **aucun** titre en double. Les 18 ancres sont
tombées **du premier coup**, comme les vingt du 27/08 (suite 4).

✅ **L'INSTRUMENT DE L'INVARIANT ÉTAIT LE BON, ET LE BRIEF NOMMAIT L'AUTRE.**
`git diff --numstat` rend **18 fois `1	1`** et le `git diff -U0` rend **36
lignes dont zéro hors `title:`** : le corps n'a pas bougé d'un octet, et c'est
**prouvé**. `compter-mots` rend bien 24885 des deux côtés — mais il aurait rendu
24885 quelle que soit la réécriture du front matter, **puisqu'il le retire avant
de compter**. *Les deux mesures disent la même chose et une seule la démontre.*

⚠ **RÉFUTATIONS 2-0 ET 2-12 : C'EST LE MÊME DÉFAUT, DEUX FOIS, ET C'EST C131
PRISE EN DÉFAUT DANS LE BLOC QUI LA CITE.** Les deux prédictions oublient les
**deux fichiers que le bloc 2 crée lui-même** : `tools/renommer-titres.mjs` et
`tools/table-titres-2908.tsv`. Écart de **+2** sur les deux compteurs, à chaque
fois. **La décision C117 (4) qui crée ces deux fichiers est écrite trois
paragraphes au-dessus de la prédiction 2-0**, dans le même bloc, de ma main.

*La règle d'usage du 29/08 (suite 6) — « une déclaration C131 se termine par le
total qu'elle implique » — a été **citée** en tête de séance et **appliquée**
au bloc 1, où elle a tenu (1-10 juste à 2). Elle tombe au bloc 2 parce que la
déclaration C131 est écrite **à l'ouverture de la séance**, une fois, alors que
les versements se décident **bloc par bloc**.* **Ce que la séance en tire :
une déclaration C131 d'ouverture ne suffit pas ; chaque bloc qui crée un
fichier redéclare sa propre population avant de la chiffrer.** Candidate à
promotion, éprouvée 0/N.

⚠ **Ni l'une ni l'autre réfutation n'affecte la garde de péremption** : la liste
nominative rend compte des cinq fichiers un par un, aucun n'est inattendu,
aucun n'est dans `content/` avant la passe.

**La liste nominative des 5 fichiers à la garde de 19:39:37** :
`tools/predictions-260829.md` (M), `tools/batterie-sortie-2908b21.txt`,
`tools/batterie-sortie-2908b22.txt`, `tools/renommer-titres.mjs`,
`tools/table-titres-2908.tsv`.

---

## Bloc 3 — G3, PASSE EN : LES 19 `title:`, DEUXIÈME TEST NÉGATIF DE LA GARDE

Commandes :

    powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde
    node tools/compter-mots.mjs --lot <les 19 fiches EN>          (relevé de référence)
    node tools/renommer-titres.mjs tools/table-titres-en-2908.tsv            (contrôle)
    node tools/renommer-titres.mjs tools/table-titres-en-2908.tsv --ecrire
    git diff --numstat ; git diff -U0
    node tools/titres-doublons.mjs ; node tools/derive-traduction.mjs
    node tools/creer-fiche-en.mjs --libelles

### DÉCLARATION C131 DU BLOC 3 — population, versements du bloc, ET LE TOTAL

**État à l'entrée du bloc : 24 fichiers.** Les 5 de la garde précédente, plus
les **18 fiches FR** de la passe 2, plus `tools/libelles-2908-avant.txt` (copie
C124 de la sortie `--libelles` d'entrée, écrite en fin de bloc 2).

**Ce que le bloc 3 verse avant de se mesurer** : la copie C124
`batterie-sortie-2908b23.txt` (**+1**), puis — **après** la garde et donc hors
de son compteur — `tools/table-titres-en-2908.tsv`, le présent texte étant déjà
dans `predictions-260829.md` (déjà compté en M).

**TOTAL IMPLIQUÉ À LA GARDE : `fichiers modifies non commites` = 25,
`hors artefacts de seance` = 21** — soit 18 fiches de `content/`,
`renommer-titres.mjs`, `table-titres-2908.tsv`, `libelles-2908-avant.txt`.

| # | prédiction | constat | verdict |
|---|---|---|---|
| 3-0 | garde : HEAD **`a5226ea`** inchangé, `fichiers modifies non commites` = **25**, `hors artefacts de seance` = **21**, copie C124 = `batterie-sortie-2908b23.txt`, `JOURNAL.md` / `conventions.md` / `TODO.md` **inchangés** aux trois horloges 19:08:19 / 19:09:34 / 19:09:34 | | |
| 3-1 | `compter-mots --lot` sur les **19 fiches EN** rend **20 lignes**. **Valeur non prédite** — relevé de référence (C118) | | |
| 3-2 | **deuxième test négatif, sur une garde non encore éprouvée : la CASSE.** Le TSV reçoit une 20ᵉ ligne d'ancre `Using a Shield` (S majuscule) sur `arduino-shield-en.md`. `titres-doublons` **replie la casse**, le renommeur **non** : le contrôle doit rendre **19 trouvées / 1 introuvable**, `title: en place : Using a shield`, exit **1**, **0 fichier écrit** | | |
| 3-3 | ligne retirée : **19 / 19** ancres uniques, exit **0**, 0 fichier écrit | | |
| 3-4 | `--ecrire` : **19 fichiers écrits** | | |
| 3-5 | `git diff --numstat -- content/en/` : **19 lignes**, chacune **`1	1`** | | |
| 3-6 | `git diff -U0 -- content/en/` : **38 lignes** de contenu, **0** hors `title: ` | | |
| 3-7 | `compter-mots --lot` sur les 19 EN : **strictement identique** à 3-1, ligne à ligne | | |
| 3-8 | `titres-doublons` **EN** : `fiches lues` **193**, `titres distincts` **193**, `GROUPES EN COLLISION` **0**, `fiches concernees` **0** | | |
| 3-9 | `titres-doublons` **FR** : **inchangé**, 243 / 243 / **0** / 0 | | |
| 3-10 | `derive-traduction` : **inchangé**, `DERIVE` **18**, `A JOUR` **175** — une passe EN ne touche aucune source FR, donc aucun `source_sha256` ne bouge | | |
| 3-11 | `--libelles` : `wikilinks a libelle` **3570**, `cible EN existante` **3236**, `cible EN absente` **334**, `positions` **16** — **inchangés** ; `candidats a lire` **105**, soit **112 moins 7** | | |
| 3-12 | les **7 candidats qui disparaissent** sont nommément : `[[cpp-lire-un-programme-en\|in C++]]`, `[[cpp-lire-un-programme-en\|C++]]` **×2**, `[[micropython-lire-un-programme-en\|in MicroPython]]`, `[[micropython-lire-un-programme-en\|MicroPython]]` **×2**, `[[micropython-shield-en\|Expansion board]]` | | |
| 3-13 | les **7 candidats qui restent** sont nommément : `[[arduino-entree-tor-en\|debouncing]]` **×2**, `[[arduino-entree-tor-en\|button]]`, `[[arduino-entree-tor-en\|Software debouncing]]`, `[[micropython-entree-tor-en\|debouncing]]` **×2**, `[[micropython-entree-tor-en\|software debounce]]` | | |
| 3-14 | `git status --porcelain` après passe : **45 fichiers** — 25 à la garde, plus `tools/table-titres-en-2908.tsv` (+1), plus les **19 fiches EN** (+19) — dont **37 dans `content/`** (18 FR + 19 EN) | | |

**Le mécanisme de 3-11 à 3-13, lu dans le code et non deviné** (`motsUtiles`,
`memeRadical`, `VIDES`, `normaliser`, l. 1114-1142 de `creer-fiche-en.mjs`) :
`normaliser` réduit `C++` à `c`, `memeRadical` rend vrai sur égalité stricte
avant le seuil de 5 caractères, et `in` est dans `VIDES`. **Le qualificatif en
queue ne peut qu'ajouter des mots au titre**, donc il ne peut qu'**augmenter**
les recoupements : `candidats a lire` ne peut pas monter. La seule soustraction
de mot du lot est `on/off` sur `arduino-entree-tor-en`, et `input` y survit.

**Ce qu'un écart déclencherait.** 3-2 réfuté = la garde ne voit pas la casse,
donc elle ne garde pas ce qu'on croit ; consignation et arrêt. 3-5/3-6 réfutés
= corps EN touché, `git checkout` des 19 et arrêt. 3-11 réfuté **à la hausse**
= une hypothèse fausse sur `motsUtiles`, à instruire avant la clôture.

### Constats du bloc 3 (G3) — **15 prédictions, 14 tenues, 1 réfutée**

| # | constat | verdict |
|---|---|---|
| 3-0 | horloge **19:42:49**, HEAD **`a5226ea`**, **25 / 21**, copie `batterie-sortie-2908b23.txt`, trois fichiers de pilotage aux mêmes horloges | tenue |
| 3-1 | **20 lignes**. Relevé de référence : **`LOT (19 fiches) 26779`** | tenue |
| 3-2 | `L28 INTROUVABLE`, `ancre attendue : Using a Shield`, `title: en place : Using a shield`, **19 / 1**, exit **1**, 0 écrit | tenue |
| 3-3 | **19 / 19**, exit **0**, `CONTROLE SEUL : 19 renommage(s) prets, 0 fichier ecrit` | tenue |
| 3-4 | `fichiers ecrits : 19` | tenue |
| 3-5 | `git diff --numstat -- content/en/` : **19 lignes**, **0** hors `1	1` | tenue |
| 3-6 | **38 lignes** de contenu, **0** hors `title: ` | tenue |
| 3-7 | `LOT (19 fiches) 26779`, **identique**, ligne à ligne | tenue |
| 3-8 | EN **193 lues, 193 distincts, 0 groupe, 0 fiche** | tenue |
| 3-9 | FR **243 / 243 / 0 / 0**, inchangé | tenue |
| 3-10 | `DERIVE 18`, `A JOUR 175`, inchangé | tenue |
| 3-11 | **3570 / 3236 / 334 / 16 inchangés, `candidats a lire` = 105** | tenue |
| 3-12 | les 7 disparus sont **exactement** les 7 nommés | tenue |
| 3-13 | les 7 restants sont **exactement** les 7 nommés, et le diff `avant/après` les montre reparaître **sous leur nouveau titre de cible** (`Reading a digital input on Arduino` / `in MicroPython`) | tenue |
| 3-14 | `git status --porcelain` = **46**, dont **37 dans `content/`** — prédit **45 / 37** | **réfutée** |

✅ **LES DEUX CORPUS SONT SANS AUCUN TITRE EN DOUBLE, ET LES TROIS COMPTEURS DU
CONTRÔLE DE SORTIE TOMBENT À ZÉRO.** FR **243 fiches / 243 titres distincts /
0 groupe**, EN **193 / 193 / 0**. L'état d'entrée était **9 / 9 / 8 communs**
avec deux groupes asymétriques ; **les deux asymétries sont fermées** —
`Lire une entrée TOR` par le qualificatif, `Using a shield` par
`Using a shield or expansion board`. **La cible du brief est atteinte au-delà
de sa lettre** : elle demandait que les groupes *FR seulement* et *EN seulement*
tombent à 0, et ce sont **tous** les groupes qui tombent.

✅ **LA PRÉDICTION 3-11 À 3-13 EST TENUE SUR SES TROIS TERMES, ET C'EST LA
PREMIÈRE FOIS DE LA SEMAINE QU'UN COMPTEUR EST PRÉDIT PAR LECTURE DE SON
MÉCANISME ET NON PAR REPORT.** 112 moins 7 égale **105**, et les **sept
disparus sont nommément les sept prédits**, ni un de plus ni un de moins.
*Le raisonnement était : `normaliser` réduit `C++` à `c`, `memeRadical` rend
vrai sur égalité stricte avant son seuil de 5, `in` est dans `VIDES`, et un
qualificatif en queue ne peut qu'ajouter des mots au titre donc qu'augmenter
les recoupements.* **C'est exactement l'amendement C116 (7) appliqué à
l'endroit — lire le code qui incrémente, pas la ligne qui affiche — et il rend
un compteur juste au premier coup.**

⚠ **UN EFFET NON PRÉDIT, VISIBLE SEULEMENT PAR LE DIFF DES DEUX SORTIES.** Les
7 candidats qui restent **ne sont pas les mêmes lignes** : ils réapparaissent
avec un **titre de cible différent**. `--libelles` publie un nombre ; **seule
la comparaison des deux sorties datées montre que sept candidats ont changé
d'énoncé sans changer de statut**. Sans C124 — `libelles-2908-avant.txt` et
`libelles-2908-apres.txt` —, `105` aurait été indistinguable d'un `105` où
d'autres candidats seraient tombés et d'autres apparus.

⚠ **RÉFUTATION 3-14 : TROISIÈME OCCURRENCE DU MÊME DÉFAUT DANS LA MÊME SÉANCE,
ET LA CAUSE NE VARIE PAS.** Prédit 45, mesuré 46. Le fichier manquant est
`tools/libelles-2908-apres.txt`, **écrit par la commande qui précède
immédiatement le `git status`**, dans le même bloc. Comme 2-0 (+2 :
`renommer-titres.mjs`, `table-titres-2908.tsv`) et 2-12 (+2, les mêmes).
**Trois réfutations sur 38 prédictions de la séance, et les trois sont le
compteur `git status` lu sans les artefacts que le bloc lui-même vient de
créer.** Le sous-compteur `content/` est juste **les trois fois** — 0, 18, 37.

*Ce que cela dit de C131 :* la déclaration d'ouverture nomme les artefacts
**connus au moment où elle s'écrit**. Les artefacts d'un bloc se décident
**dans** le bloc. **La déclaration doit donc se rejouer à chaque bloc qui
crée un fichier, ou le compteur `git status` doit cesser d'être prédit en
valeur absolue et l'être en delta.** *Règle d'usage candidate, à arbitrer.*

---

## Bloc 4 — G4, `--recaler` SUR LES 18 PAIRES, ET LA LIGNE « DÉRIVE 0 » RENDUE VRAIE

Commandes :

    powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde
    node tools/creer-fiche-en.mjs --recaler <chacune des 18 jumelles EN>
    node tools/derive-traduction.mjs --tout
    git diff --numstat ; git diff -U0

### DÉCLARATION C131 DU BLOC 4 — et cette fois elle se rejoue

**État à l'entrée : 46 fichiers.** **Versements du bloc avant sa propre
mesure** : la copie C124 `batterie-sortie-2908b24.txt` (**+1**). Le bloc
**n'écrit aucun fichier neuf** ensuite — `--recaler` ne touche qu'une ligne de
front matter de fiches **déjà modifiées et déjà comptées**.
**TOTAL IMPLIQUÉ À LA GARDE : 47, hors artefacts 42.** **TOTAL APRÈS LE BLOC :
47 également**, `content/` restant à **37**.

**Liste nominative des 42 hors artefacts** : 18 fiches FR + 19 fiches EN
(= 37 dans `content/`), `tools/renommer-titres.mjs`,
`tools/table-titres-2908.tsv`, `tools/table-titres-en-2908.tsv`,
`tools/libelles-2908-avant.txt`, `tools/libelles-2908-apres.txt`.

| # | prédiction | constat | verdict |
|---|---|---|---|
| 4-0 | garde : HEAD **`a5226ea`**, **47** / **42**, copie `batterie-sortie-2908b24.txt`, trois fichiers de pilotage inchangés | | |
| 4-1 | **18 `--recaler`**, chacun rendant deux lignes : `Recale : content/<fiche>` puis `  <12 hexa> -> <12 hexa>`. **0 `Deja a jour`, 0 refus** | | |
| 4-2 | **aucun refus par le contrôle des trois compteurs** de `recaler` (`liens` / `embeds` / `code` FR contre EN) : une passe de `title:` ne touche ni wikilink, ni embed, ni bloc de code | | |
| 4-3 | les 18 empreintes `-> ` sont exactement les **`reel`** listés par `derive-traduction` au bloc 2 : `c5da7609b71f` (`arduino-module-en`), `1abb34c94cd5`, `0690ba6f1231`, `3eb4b5876d72`, `cbac95e2f1a1`, `cab1cf2797e5`, `618ded195dcc`, `810ce2e35193`, `c3570070ae60`, `e47eeb88d4d9`, `4992c1551cef`, `71263551fb5a`, `99187a3e27fe`, `9bca1001a80a` — **et les 4 non listées au bloc 2** (`arduino-bibliotheques-en`, `arduino-capteur-numerique-en`, `arduino-entree-tor-en`, `arduino-gpio-boot-en`), dont la sortie du bloc 2 avait été coupée à 14 lignes | | |
| 4-4 | `derive-traduction --tout` : **`DERIVE` 0, `A JOUR` 193, `SANS SOURCE` 0, `SANS MARQUE` 0, exit 0** | | |
| 4-5 | `git diff --numstat -- content/en/` : **19 lignes**, dont **18 à `2	2`** et **1 à `1	1`** — `micropython-shield-en.md`, dont la source FR `micropython-shield.md` n'a pas bougé, n'était donc pas en dérive et n'est pas recalée | | |
| 4-6 | `git diff --numstat -- content/` : **37 lignes**, **18 à `1	1`** (FR) + **18 à `2	2`** + **1 à `1	1`** (EN) ; total **55 ajouts / 55 retraits** | | |
| 4-7 | `git diff -U0 -- content/` : **110 lignes** de contenu, décomposées en **74 lignes `title: `** (37 fiches × 2) et **36 lignes `source_sha256: `** (18 fiches × 2), et **0 ligne d'aucune autre nature** | | |
| 4-8 | `git status --porcelain` : **47**, dont **37 dans `content/`** — inchangé par rapport à la garde de 4-0 | | |
| 4-9 | `compter-mots` corpus : **242 fiches, 291220 mots**, inchangé ; `titres-doublons` : FR **243 / 243 / 0 / 0**, EN **193 / 193 / 0 / 0**, inchangés | | |

**Ce qu'un écart déclencherait.** 4-2 réfuté (un refus par divergence des trois
compteurs) = une passe de titres aurait touché autre chose que le front matter,
ce que 2-5 et 3-6 démentent = incident à instruire avant tout commit. 4-4
réfuté = la ligne « dérive 0 » resterait fausse, et c'est précisément
l'avertissement du brief.

### Constats du bloc 4 (G4) — **10 prédictions, 10 tenues, 0 réfutée**

| # | constat | verdict |
|---|---|---|
| 4-0 | horloge **19:45:08**, HEAD `a5226ea`, **47 / 42**, copie `batterie-sortie-2908b24.txt` | tenue |
| 4-1 | **18 `Recale :`**, deux lignes chacun, **0 `Deja a jour`**, **0 refus** | tenue |
| 4-2 | **aucun refus** par le contrôle `liens` / `embeds` / `code` de `recaler` | tenue |
| 4-3 | les **14 empreintes lisibles au bloc 2 sont retrouvées au caractère près** ; les **4 fiches non listées** sont bien celles nommées, et rendent `c5923884374b`, `cfb657a30916`, `31f017c6e617`, `4f9ce7efeb6f` | tenue |
| 4-4 | **`DERIVE 0`, `A JOUR 193`**, `SANS SOURCE 0`, `SANS MARQUE 0`, **exit 0** | tenue |
| 4-5 | `content/en/` : **18 fiches à `2	2`, 1 à `1	1`** | tenue |
| 4-6 | `content/` : **37 lignes**, **55 ajouts / 55 retraits** | tenue |
| 4-7 | **110 lignes** : **74 `title: `**, **36 `source_sha256: `**, **0 autre** | tenue |
| 4-8 | `git status` **47**, dont **37 dans `content/`** — inchangé | tenue |
| 4-9 | corpus **242 / 291220 / 1089 / easyeda 9773 / 193-221956 / 49-69264** ; titres FR **243/243/0/0**, EN **193/193/0/0** | tenue |

✅ **LA LIGNE « DÉRIVE 0 » EST REDEVENUE VRAIE, ET C'EST LE POINT QUE LE BRIEF
DÉSIGNAIT COMME LE PLUS COÛTEUX À MANQUER.** 18 paires cassées par la passe FR,
18 recalées, `A JOUR 193` avec **exit 0**. Sans ce bloc, `derive-traduction`
aurait publié `DERIVE 18` à chaque clôture jusqu'à ce que quelqu'un le lise —
ou pire, aurait été recalé plus tard **sans relecture**, ce que le commentaire
du code interdit nommément.

✅ **LE CONTRÔLE DES TROIS COMPTEURS DE `recaler` N'A REFUSÉ AUCUNE DES 18, ET
C'EST UNE CONFIRMATION INDÉPENDANTE DE L'INVARIANT DE CORPS.** `recaler` refuse
si `liens`, `embeds` ou `code` divergent entre la source FR et la jumelle EN.
**Trois compteurs, dix-huit paires, zéro divergence** — mesurés par un outil qui
ne sait rien du chantier et qui compare les deux fiches entre elles, là où
`git diff` compare chaque fiche à elle-même. *Deux instruments indépendants
disent la même chose, et c'est le premier bloc de la semaine où l'invariant est
attesté deux fois.*

✅ **`--recaler` a rendu la décomposition `2	2` exactement où elle était
prédite, et `1	1` sur la seule fiche qui devait rester à un.**
`micropython-shield-en` change de `title:` sans que sa source FR bouge : elle
n'entre donc pas dans la dérive et ne se recale pas. **C'est la trace mesurable
de « `shield` se traite côté EN seul ».**

---

## Bloc 5 — G5, CLÔTURE DU CHANTIER : `batterie.ps1 -Phase etat`

Commande :
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase etat`

**Sans `-FichesEn`** : le chantier ne produit **aucune fiche EN neuve**, donc
l'étape 6 (`--style` du lot EN) n'a pas d'objet. **Sans `-Chevron`** : aucun
corps n'a bougé, `mesure-chevron --tout` est réservé à la clôture du lot 3
(C127). **La batterie n'est pas filtrée au lancement** (règle d'usage du 29/08
suite 6) : les onze étapes sortent en entier.

### DÉCLARATION C131 DU BLOC 5

**Entrée : 47.** Versement du bloc : copie C124 `batterie-sortie-2908b25.txt`
(**+1**). **TOTAL IMPLIQUÉ : 48, hors artefacts 42, `content/` 37.**

| # | prédiction | constat | verdict |
|---|---|---|---|
| 5-0 | garde : HEAD `a5226ea`, **48 / 42**, copie `batterie-sortie-2908b25.txt` | | |
| 5-1 | corpus : **242 fiches, 291220 mots**, traduites **193 / 221956**, restant **49 / 69264** | | |
| 5-2 | `--controle` : **`193 fiche(s) controlee(s), 0 divergente(s)`** | | |
| 5-3 | `derive-traduction` : **`DERIVE 0`, `SANS SOURCE 0`, `SANS MARQUE 0`, `A JOUR 193`**, code de sortie **0** | | |
| 5-4 | foisonnement : **`193 paire(s) : 221956 mots FR -> 230616 mots EN`** — inchangé, le front matter étant hors règle C110 | | |
| 5-5 | étape 6 : **`aucune fiche EN passee (-FichesEn) : etape sautee.`** | | |
| 5-6 | médias : **441 fiches lues, 657 embeds, 374 fichiers** ; bilan **ABSENT 12, CASSE 0, HORS-GABARIT 0, EXTERNE 0, OK 645, ORPHELIN 1**, code **1** | | |
| 5-7 | anneau 2 : `cibles BRUTES` **222**, `deja vues` **77**, `ANNEAU 2 NET` **145**, `deja traduites` **99**, `RESTANT` **46**, `RESTANT DE L ANNEAU 2 (46 fiches)` **66996**, `fiches porteuses` **10** ; dette **47 cibles rouges distinctes, 67836 mots** | | |
| 5-8 | wikilinks : **`MORT 47`, `CASSE 0`, `AMBIGU 0`, `GABARIT 8`, `ALIAS 6`, `OK 437`**, code **1** | | |
| 5-9 | `--libelles` : **3570 / 3236 / 334 / 105 / 16** | | |
| 5-10 | **aucun des onze compteurs ci-dessus n'est modifié par le chantier**, à la seule exception de `candidats a lire` (112 → 105). Les titres ne vivent ni dans le comptage C110, ni dans la résolution des wikilinks, ni dans l'audit des médias | | |

## Bloc 6 — G6, CADRAGE DU LOT 3 D'`esp32/` (C127 EN PLEIN)

Commandes :

    powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage `
      -Fiches embarque/mcu/esp32/esp32-deep-sleep.md,embarque/mcu/esp32/esp32-arduino-core.md,embarque/mcu/esp32/esp32-freertos.md,embarque/mcu/esp32/esp32-idf.md
    node tools/mesure-chevron.mjs --lot <les quatre>

### DÉCLARATION C131 DU BLOC 6

**Entrée : 48.** Versement : copie C124 `batterie-sortie-2908b26.txt` (**+1**).
**TOTAL IMPLIQUÉ : 49, hors artefacts 42, `content/` 37.**

| # | prédiction | constat | verdict |
|---|---|---|---|
| 6-0 | garde : HEAD `a5226ea`, **49 / 42** ; les **quatre sources FR** listées sous les dates d'écriture, **aucune écrite aujourd'hui après 19:30:08** | | |
| 6-1 | `compter-mots --lot` (**`tot`**, C110) : `esp32-deep-sleep` **1495**, `esp32-arduino-core` **1285**, `esp32-freertos` **1429**, `esp32-idf` **1066**, `LOT (4 fiches)` **5275** — quatre valeurs **lues dans le bloc anneau de la sortie `2908b20`**, pas déduites | | |
| 6-2 | `mesure-chevron --lot` (**`deh`**, C127) : **1401 / 1218 / 1323 / 1038**, total **4980** — chiffres **reportés du brief** et donc à **remesurer** ; en cas d'écart c'est le chiffre du jour qui fait foi (C118) | | |
| 6-3 | `deh` du lot **strictement sous la borne 6657** : marge prédite **1677**, soit **25,2 %** de la borne | | |
| 6-4 | nombre de **blocs en chevron** du lot : **2 + 4 + 4 + 2 = 12** — colonne `chevron:` du bloc anneau de `2908b20`. **Les quatre fiches sont porteuses**, donc **C127 s'applique en plein** et les deux volumes se publient ensemble | | |
| 6-5 | `--style` : candidats C109 des quatre sources. **Valeurs non prédites** — relevé de référence (C118), aucune mesure du jour ne les porte | | |
| 6-6 | anneau : bloc **identique** à 5-7 (222 / 77 / 145 / 99 / 46 / 66996 / 10), le cadrage n'écrivant rien | | |
| 6-7 | les quatre fiches sont **dans l'anneau 2** et **dans le RESTANT de 46**, lu dans la sortie du jour et non supposé | | |

### Constats des blocs 5 et 6 (G5, G6) — **18 prédictions, 17 tenues, 1 réfutée**

**Bloc 5 — 11 tenues sur 11.** Horloge **19:47:41**, HEAD `a5226ea`, **48 / 42**.
Corpus **242 / 291220**, traduites **193 / 221956**, restant **49 / 69264**.
`--controle` **193 fiches, 0 divergente**. Dérive **0 / 0 / 0**, `A JOUR 193`,
code **0**. Foisonnement **193 paires : 221956 → 230616**. Étape 6 sautée.
Médias **441 / 657 / 374**, bilan **12 / 0 / 0 / 0 / 645 / 1**. Anneau 2
**222 / 77 / 145 / 99 / 46 / 66996 / 10 porteuses**, dette **47 / 67836**.
Wikilinks **47 / 0 / 0 / 8 / 6 / 437**. `--libelles` **3570 / 3236 / 334 /
105 / 16**.

**Bloc 6 — 6 tenues sur 7.** Horloge **19:47:49**, **49 / 42**. Les quatre
sources FR datées **19/08 10:01-10:03** et **17/08 12:24**, toutes très
antérieures à HEAD. `tot` **1495 / 1285 / 1429 / 1066**, `LOT` **5275**.
`deh` **1401 / 1218 / 1323 / 1038**, `LOT` **4980**. `--style` **38 C109 de
prose**, décomposés **8 / 11 / 9 / 10**, hors périmètre **16**, typographie
**0**, virgule ambiguë **0**, créées **0**, hors latin **0**. Anneau identique
au bloc 5. Les quatre fiches sont dans le RESTANT de 46, **lues dans la sortie
du jour**.

✅ **`deh` DU LOT 3 TOMBE À 4980, EXACTEMENT LE CHIFFRE REPORTÉ AU BRIEF, ET
SUR SES QUATRE TERMES.** 1401 / 1218 / 1323 / 1038. *C'est la première fois de
la semaine qu'une décomposition reportée d'une séance à l'autre se vérifie
terme à terme* — la règle du 28/08 (« un total dans la fourchette ne valide pas
la décomposition ») est satisfaite dans le bon sens. **Marge sous la borne
6657 : 1677 mots, 25,2 %.**

⚠ **RÉFUTATION 6-4, ET C'EST LE MÊME COMPTEUR QUE LA RÉFUTATION 10-3 DU 29/08
(SUITE 6).** Prédit **12 blocs en chevron**, lus dans la colonne `chevron:` du
bloc anneau (2 + 4 + 4 + 2). Mesuré : **12 clôtures, 6 blocs**. *La colonne
`chevron:` de `--anneau` compte des **clôtures**, et `mesure-chevron` le dit en
toutes lettres dans sa propre légende — « cl = clotures, bl = blocs », et
« deux clotures = un bloc » figure même dans le bloc ANGLE MORT de la sortie
que je venais de lire.* **Le chiffre 12 était juste, le nom qu'on lui donnait
était faux**, et c'est la quatrième fois de la semaine — hors périmètre du lot
6, dette du lot 6, blocs de code du lot 2, clôtures ici. **Aucun effet sur le
lot** : le dimensionnement se fait sur `deh`, pas sur le nombre de blocs.

**BILAN DU CHANTIER — 56 prédictions publiées, 52 tenues, 4 réfutées, taux
7,1 %.** Aucune réfutation sur un **verdict** ; les quatre sont des compteurs —
trois fois `git status` sans les artefacts du bloc courant, une fois une colonne
lue sous le mauvais nom. **Quatrième séance d'affilée où la coupure tombe
exactement là.**

---

## Bloc 7 — G7, PASSES C109 SOUS C123 SUR LES QUATRE SOURCES FR DU LOT 3

Commandes :

    powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde
    node tools/remplacer-passe.mjs tools/passe-c109-2908.tsv          (contrôle)
    node tools/remplacer-passe.mjs tools/passe-c109-2908.tsv --ecrire
    git diff --numstat ; node tools/creer-fiche-en.mjs --style <les quatre>
    node tools/compter-mots.mjs --lot <les quatre>
    node tools/mesure-chevron.mjs --lot <les quatre>

### ⚠ CONTRÔLE C110 DU MOTIF D'ACCENTS — RÉFUTÉ SUR SON ÉCHANTILLON NOMMÉ, AVANT TOUT COMPTAGE

La règle d'usage du 29/08 (suite 6) — *une passe de ponctuation ne change pas le
nombre de caractères accentués* — demande un compteur d'accents. Premier motif
essayé, `grep -o '[àâäçéèêëîïôöùûüÿœæÀÂÄÇÉÈÊËÎÏÔÖÙÛÜŸŒÆ]'`, **testé sur
l'échantillon nommé** `Câbler un module — État, cœur, très, à`, attendu **5**
(â, É, œ, è, à) : **rendu 12.**

*Cause lue et non supposée* : `grep` travaille ici en **octets**, pas en
caractères. Chaque lettre accentuée pèse deux octets en UTF-8, et l'expression
entre crochets apparie **chaque octet** du jeu. **C'est exactement la cause des
réfutations 10-9, 10-12, 11-1 et 11-3 du 29/08 (suite 6)** — « des octets de
tête comptés pour des caractères accentués » — et C110 vient de l'attraper
**avant** le comptage au lieu d'après. **Le compteur d'accents se fait donc en
node**, sur des points de code, et il est **embarqué dans l'outil de passe** :
un invariant qui vit à côté de l'écriture ne peut pas être oublié.

### Décision C117 (5), avec son coût de revert

**`tools/remplacer-passe.mjs`** neuf : même garde d'unicité d'ancre que
`renommer-titres.mjs` (exactement une occurrence, tout ou rien), mais sur le
**corps** au lieu du front matter, et **publiant l'invariant d'accents et
l'invariant de longueur** avant/après pour chaque fiche. *Motif : É2 du 29/08
(suite 6) — 147 caractères accentués perdus par une passe C109, traversant cinq
contrôles au vert, trouvés par la seule lecture. L'invariant existe depuis É3 ;
il n'était porté par aucun outil.* La table vit dans un TSV daté, jetable.
**Revert = suppression de deux fichiers non suivis + `git checkout` des quatre
sources.**

### LES 38 CANDIDATS, JUGÉS UN PAR UN SOUS C123, AVANT LA PASSE

**Critère** : segment de droite nominal / adjectival / infinitif / participial =
exempté ; **un verbe conjugué, y compris en subordonnée, fait tomber**.
**Le doute se tranche vers le traitement.**

**`esp32-deep-sleep.md` — 8 candidats, 6 traités, 2 exemptés, 6 éditions.**

| l. | signe | verdict | voie |
|---|---|---|---|
| 19 | `;` | tombe (`cette fiche **en donne**`) | phrase |
| 56 | `;` | tombe (`on **préférera**`) | phrase |
| 132 | `—` | tombe (`une broche ordinaire **ne réveille** pas`) | phrase |
| 142 | `—` | tombe (`la carte **ne se réveille** jamais`) | virgule + liaison |
| 148 | `—` | tombe (`elle **consomme**`) | phrase |
| 189 | `;` ×2 | **exemptés** — puce d'un corrigé, segments **nominaux** (`actif = 2 s`, `sommeil = 598 s`), aucun verbe conjugué | — |
| 198 | `—` | tombe **par le doute** : `sans RESET` est nominal donc exempté à la lettre de C123, mais la forme n'est pas celle du libellé-glose du 25/08 | virgule |

**`esp32-arduino-core.md` — 11 candidats, 11 traités, 10 éditions** (les deux
tirets de l. 169 encadrent **une seule** incise et se résolvent d'un coup).

| l. | signe | verdict | voie |
|---|---|---|---|
| 18 | `—` | tombe (`ce qui **change**`) | virgule |
| 48 | `—` | tombe — **renvoi de fin de segment**, troisième voie du 25/08 | parenthèse |
| 50 | `—` | tombe par le doute (`tous traités` est participial, mais c'est un renvoi) | parenthèse |
| 57 | `;` | tombe (`\`loop()\` **s'exécute**`) | virgule + liaison |
| 93 | `—` | tombe (`qui **n'existent** pas`, subordonnée) | virgule |
| 103 | `—` | tombe (`**c'est** le point`) | phrase |
| 113 | `—` | tombe par le doute (infinitifs, mais proposition entière) | phrase |
| 131 | `—` | tombe — renvoi | parenthèse |
| 155 | `;` | tombe (`la même allocation **planterait**`) | phrase |
| 169 | `—` ×2 | tombe (`\`loop()\` **n'est** pas seul au monde`) | parenthèses encadrantes |

**`esp32-freertos.md` — 9 candidats, 9 traités, 7 éditions** (l. 18 et l. 173
portent chacune deux candidats résolus d'une seule édition).

| l. | signe | verdict | voie |
|---|---|---|---|
| 18 | `—` | tombe (`l'ESP32 **a** deux cœurs`) | phrase |
| 18 | `;` | tombe (`cette fiche **montre**`) | phrase |
| 75 | `—` | tombe — renvoi | parenthèse |
| 108 | `—` | tombe (`**c'est** l'intérêt`) | phrase |
| 171 | `;` | tombe (`utiliser … **explicite** l'intention`) | phrase |
| 173 | `—` | tombe (`si l'accès **n'est** pas atomique`, subordonnée) | virgule |
| 173 | `;` | tombe (`il **ne garantit**`) | phrase |
| 183 | `;` | tombe (`\`xPortGetCoreID()\` **le lit**`) | virgule + liaison |
| 201 | `—` | tombe (`que le travail **est** bien réparti`, subordonnée) | virgule |

**`esp32-idf.md` — 10 candidats, 10 traités, 8 éditions** (l. 18 ×2 = une
incise encadrée ; l. 87 ×2 = une énumération résolue d'un coup).

| l. | signe | verdict | voie |
|---|---|---|---|
| 18 | `—` ×2 | tombe (`quand l'IDF **se justifie**, ce qu'il **apporte**`) | parenthèses encadrantes |
| 32 | `—` | tombe (`quand le besoin **est** avéré`, subordonnée) | virgule |
| 36 | `;` | tombe (`il **n'y a** pas de boucle imposée`) — puce à verbe conjugué, donc prose (amendement du 23/08) | phrase |
| 74 | `—` | tombe (`on **compose**`) | deux-points |
| 82 | `;` … | tombe (`la fonction **retourne**`) | deux-points |
| 87 | `;` ×2 | tombe (`qui **publie** une mesure`, subordonnée) — énoncé d'exercice | phrases (a)/(b)/(c) |
| 106 | `—` | tombe par le doute (`d'où l'intérêt` est nominal) | virgule |
| 110 | `;` | tombe (`l'IDF **deviendra** nécessaire`) — puce à verbe conjugué | phrase |

⚠ **LES TIRETS DE PUCE NE SONT PAS TRAITÉS, ET C'EST UNE LIMITE D'OUTIL ASSUMÉE
ET NON UNE LECTURE DE C123.** `--style` n'a signalé **aucun** tiret de puce —
l. 27, 28, 129 et 130 de `deep-sleep`, l. 36 d'`idf` en portent, plusieurs avec
verbe conjugué. Le motif les range en **glose de liste**. La limite est écrite
au §8 de `conventions.md` (« limite d'outil, pas de règle », 23/08 suite 3) et
la lever d'office rouvrirait un périmètre que l'arbitrage du 22/08 a fermé.
**Consigné, non traité, remonté en arbitrage.**

| # | prédiction | constat | verdict |
|---|---|---|---|
| 7-0 | garde : HEAD `a5226ea`, `fichiers modifies non commites` = **51**, `hors artefacts` = **44** — 49 à la fin du bloc 6, plus `batterie-sortie-2908b27.txt` (+1, artefact) et `tools/remplacer-passe.mjs` + `tools/passe-c109-2908.tsv` (+2, hors artefacts), le fichier de prédictions étant déjà compté | | |
| 7-1 | contrôle du TSV : **31 ancres uniques trouvées**, 0 introuvable, 0 multiple, exit **0**, **0 fichier écrit** | | |
| 7-2 | `--ecrire` : **4 fichiers écrits**, **31 remplacements** | | |
| 7-3 | **invariant d'accents** : les quatre fiches rendent **le même nombre de caractères accentués avant et après**, écart **0** sur chacune. *Aucune des 31 éditions ne met en capitale une initiale accentuée et aucune ne touche à `œ`* | | |
| 7-4 | `git diff --numstat` sur les quatre : **exactement 4 lignes**, et **aucune ligne du corps hors des 31 lignes portant une ancre** — le diff porte donc **31 lignes retirées / 31 ajoutées**, soit `numstat` **6 6** (deep-sleep), **10 10** (arduino-core), **7 7** (freertos), **8 8** (idf) | | |
| 7-5 | `--style` après passe : **`4 fiche(s) lue(s)`**, `C109 de prose` = **2** (les deux points-virgules exemptés de `deep-sleep` l. 189), décomposé **2 / 0 / 0 / 0** ; `hors perimetre` **16**, `typographie francaise` **0**, `virgule ambigue` **0**, `C109 creees en EN` **0**, `hors alphabet latin` **0** | | |
| 7-6 | `compter-mots --lot` après passe : le total **monte**, la passe remplaçant des signes par des mots de liaison et des majuscules. **Prédiction chiffrée : LOT entre 5275 et 5290**, soit **+0 à +15 mots** — 6 éditions ajoutent un mot (`et`, `Mais`), les 25 autres n'en ajoutent aucun | | |
| 7-7 | `mesure-chevron --lot` après passe : `ded` **inchangé à 290** (aucune édition n'entre dans un bloc de code), `cl` **12**, `bl` **6**, `etiq` **5** ; `deh` **suit `tot`**, entre **4980 et 4995** | | |
| 7-8 | `deh` **reste sous la borne 6657**, marge **≥ 1662** | | |

**Ce qu'un écart déclencherait.** 7-3 réfuté = **É2 se rejoue**, `git checkout`
des quatre sources et arrêt immédiat. 7-4 réfuté = une ligne du corps a bougé
hors ancre, même conséquence. 7-5 réfuté **à la hausse** = un candidat jugé
traité ne l'est pas ; **à la baisse** = les deux exemptions de l. 189 ont été
touchées, ce qui contredirait le verdict écrit ci-dessus.

### Constats du bloc 7 (G7) — **9 prédictions, 6 tenues, 3 réfutées**

| # | constat | verdict |
|---|---|---|
| 7-0 | horloge **19:54:41**, HEAD `a5226ea`, **52 / 44** — prédit **51 / 44** | **réfutée** (total) |
| 7-1 | **33** ancres uniques trouvées, 0 introuvable, 0 multiple, exit 0, 0 écrit — prédit **31** | **réfutée** |
| 7-2 | **4 fichiers écrits, 33 remplacements** — prédit 31 | **réfutée** |
| 7-3 | **accents : 231 → 231, 174 → 174, 303 → 303, 170 → 170, écart +0 partout** ; points de code 11584→11581, 9992→9987, 12451→12446, 7788→7780 ; **lignes inchangées** sur les quatre | tenue |
| 7-4 | `numstat` **6 6 / 10 10 / 7 7 / 8 8**, exactement les quatre chiffres prédits | tenue |
| 7-5 | `--style` : **4 fiches lues, 1 à reprendre**, `C109 de prose` **2**, décomposé **2 / 0 / 0 / 0** ; `hors perimetre` **16**, typographie **0**, virgule ambiguë **0**, créées **0**, hors latin **0** | tenue |
| 7-6 | `LOT (4 fiches)` **5278**, dans la fourchette 5275-5290 (**+3 mots**) ; 1496 / 1286 / 1430 / 1066 | tenue |
| 7-7 | `ded` **290 inchangé**, `cl` **12**, `bl` **6**, `etiq` **5**, `deh` **4983** dans la fourchette | tenue |
| 7-8 | marge sous 6657 : **1674** | tenue |

✅ **L'INVARIANT D'ACCENTS TIENT SUR LES QUATRE FICHES, ET IL EST DÉSORMAIS
PORTÉ PAR L'OUTIL QUI ÉCRIT.** É2 du 29/08 (suite 6) — 147 caractères accentués
perdus, cinq contrôles au vert, trouvé par la seule lecture — **ne peut plus se
rejouer en silence** : `remplacer-passe.mjs` refuse le lot entier si l'écart
n'est pas nul, et publie le chiffre avant/après **avant** d'écrire. *La règle
d'usage du 29/08 (suite 6) est passée d'une phrase à un garde-fou en une
séance.*

✅ **`--style` REND EXACTEMENT LES DEUX EXEMPTIONS ÉCRITES AVANT LA PASSE.**
2 candidats résiduels, tous deux `deep-sleep` l. 189, tous deux prédits
nommément comme exemptés. **Zéro faux résidu, zéro exemption oubliée.**

⚠ **LES TROIS RÉFUTATIONS SONT LE MÊME DÉFAUT QUE LES TROIS DE CE MATIN, ET LA
CAUSE EST MAINTENANT NOMMÉE.** 7-1 et 7-2 publient **31**, qui est le nombre de
**lignes touchées**, sous le nom de **remplacements** — et 7-4, qui prédit
correctement les lignes (`6 6 / 10 10 / 7 7 / 8 8`, somme **31**), est tenue.
*Le chiffre 31 était juste sur sa population et faux sur celle qu'il nommait*,
exactement comme les 12 clôtures lues pour 12 blocs au bloc 6, et comme les
`git status` des blocs 2 et 3. **Quatre fiches portent 33 ancres réparties sur
31 lignes : deux lignes en portent deux** (`freertos` l. 18 et l. 173). 7-0 est
une **erreur d'addition** simple : 49 + 1 copie + 2 fichiers d'outil = 52, écrit
51.

**SEPT RÉFUTATIONS SUR 65 PRÉDICTIONS, ET LES SEPT SONT DES COMPTEURS.** Taux
**10,8 %**. Aucune sur un verdict — ni les 38 jugements C109, ni les 37 titres,
ni les deux exemptions. *Cinquième séance d'affilée où la coupure tombe entre
« ce que la règle décide » et « ce qu'un compteur va rendre ».*

---

## Bloc 8 — G8, LES QUATRE TITRES EN SOUS C125, PUIS LA GÉNÉRATION DES SQUELETTES

### LES QUATRE TITRES, ARRÊTÉS AVANT LA GÉNÉRATION

**Test 2 tombe sur les quatre**, et pour deux motifs distincts. `deep-sleep` a
deux jumelles titrées (`Deep sleep on Arduino`, `Deep sleep in MicroPython`)
mais **les trois `title:` FR diffèrent** — `Mettre un Arduino en veille (deep
sleep)`, `Mettre un Pico en veille (deep sleep)`, `Deep sleep avec l'ESP32` —
donc la clause du 27/08 (suite 7) le fait descendre au test 3. Les trois autres
**n'ont aucune jumelle traduite** : `stm32-arduino-core` et
`teensy-arduino-core` sont dans le RESTANT de 46, et il n'existe ni fiche
FreeRTOS ni fiche IDF hors `esp32/`.

| fiche | `title:` FR | `title:` EN retenu | motif, formes **lues en production** |
|---|---|---|---|
| `esp32-deep-sleep` | Deep sleep avec l'ESP32 | **`Deep sleep on the ESP32`** | forme écrite **2 fois** en libellé EN, et patron `… on the ESP32` porté par **5 `title:` en production** (`Wi-Fi`, `Bluetooth LE`, `I2C`, `SPI`, `UART`) |
| `esp32-arduino-core` | Programmer l'ESP32 avec l'Arduino-core | **`Programming the ESP32 with the Arduino core`** | forme écrite **2 fois**, calque exact du FR ; `Arduino core` en deux mots est la forme de production (**51 occurrences** contre 23 pour le slug) |
| `esp32-freertos` | Multitâche FreeRTOS sur l'ESP32 | **`Multitasking with FreeRTOS`** | forme écrite **5 fois** sur 6, la sixième étant `FreeRTOS` nu |
| `esp32-idf` | Découvrir ESP-IDF | **`Discovering ESP-IDF`** | forme écrite **2 fois** (casse repliée), calque exact du FR, dont **5 libellés FR** `Découvrir ESP-IDF` |

⚠ **`Multitasking with FreeRTOS` PERD LE QUALIFICATIF DE FAMILLE QUE LE FRANÇAIS
PORTE, ET C'EST LE SEUL DES QUATRE.** Le `title:` FR dit `sur l'ESP32`, l'anglais
non. **Décision C117 (6)** : le test 3 ordonne de lire les formes de production,
et aucune forme portant le qualificatif n'existe côté EN — la fabriquer serait
inventer, ce que le motif du 26/08 interdit. Le risque de confusion est nul :
**`esp32-freertos` est la seule fiche FreeRTOS du corpus**, là où `deep-sleep`
en a trois et `arduino-core` en aura trois. *Le français qualifie parce qu'il a
trois fiches `deep sleep` et deux `Arduino-core` à séparer ; l'anglais qualifie
là où il a la même charge, et pas ailleurs.* **Revert = 1 édition de `title:`
+ 1 `--recaler`.** ⚠ **À rouvrir le jour où `stm32-freertos` ou une jumelle
apparaît** — c'est exactement la situation qui a produit le chantier de ce
matin.

### DÉCLARATION C131 DU BLOC 8

**Entrée : 52.** Versements : `batterie-sortie-2908b28.txt` (**+1**, artefact)
et **4 fiches EN neuves** (**+4**, hors artefacts). **TOTAL IMPLIQUÉ APRÈS
GÉNÉRATION : 57, hors artefacts 48, `content/` 45** (18 FR + 19 EN du chantier
+ 4 FR du lot 3 + 4 EN neuves).

| # | prédiction | constat | verdict |
|---|---|---|---|
| 8-0 | garde : HEAD `a5226ea`, **53 / 44** (52 + la copie C124 du lancement) | | |
| 8-1 | **4 générations**, **0 `--force` nécessaire** : aucune des quatre fiches EN n'existe | | |
| 8-2 | chaque génération rend un `title:` **recopié du français** — le squelette n'est pas une traduction. Les quatre `title:` EN ci-dessus se posent **à la main après génération**, avec `renommer-titres.mjs` et sa garde d'unicité | | |
| 8-3 | `--controle` après génération et **avant traduction** : **197 fiches contrôlées, 0 divergente, 0 lien non suffixé** — les trois compteurs sont égaux **par construction** sur un squelette | | |
| 8-4 | `derive-traduction` après génération : **`A JOUR` 197, `DERIVE` 0** — le marqueur est posé sur la source telle qu'elle sort de la passe C109 | | |
| 8-5 | corpus : **242 fiches FR, 291223 mots** (291220 + 3 de la passe C109), `deja traduites` **197 fiches**, `RESTANT A TRADUIRE` **45 fiches** | | |
| 8-6 | `titres-doublons` après pose des quatre titres : FR **243 / 243 / 0 / 0**, EN **197 fiches, 197 distincts, 0 groupe** — **aucune collision neuve**, les quatre formes étant absentes du corpus EN | | |
| 8-7 | anneau 2 : `RESTANT` passe de **46 à 42**, `RESTANT DE L ANNEAU 2` de **66996 à 61999** (66996 − 1496 − 1286 − 1430 − 1066 = 61718)… **prédiction chiffrée : 61718**, et `fiches porteuses` de **10 à 6** | | |
| 8-8 | `dette` : `cibles rouges distinctes` **47 inchangé** — les quatre fiches ne sont pas des cibles rouges, elles étaient déjà des fiches FR existantes | | |

### Constats du bloc 8 (G8) — **9 prédictions, 6 tenues, 3 réfutées**

| # | constat | verdict |
|---|---|---|
| 8-0 | horloge **19:57:22**, HEAD `a5226ea`, **57 / 48** — prédit **53 / 44** | **réfutée** |
| 8-1 | **4 générations, 0 `--force`** ; trois compteurs égaux à chaque fois (11/11, 2/2, 5/5 ; 19/19, 1/1, 5/5 ; 16/16, 1/1, 6/6 ; 13/13, 1/1, 2/2) ; `prerequis suffixes : 2` sur les quatre | tenue |
| 8-2 | les quatre squelettes portent le `title:` **français recopié** ; les quatre titres EN posés ensuite par `renommer-titres.mjs`, **4 ancres, 4 écrits, 0 refus** | tenue |
| 8-3 | `--controle` : **197 fiches, 0 divergente, `Liens non suffixes : 0 sur 0`** | tenue |
| 8-4 | `derive-traduction` : **`A JOUR` 197, `DERIVE` 0** | tenue |
| 8-5 | corpus **242 fiches, 291223 mots**, traduites **197 / 227234**, restant **45 / 63989** | tenue |
| 8-6 | `titres-doublons` : FR **243 / 243 / 0 / 0**, EN **197 / 197 / 0 / 0** — aucune collision neuve | tenue |
| 8-7 | anneau : `RESTANT` **42** ✓, `fiches porteuses` **6** ✓, mais `RESTANT DE L ANNEAU 2` = **61721** — prédit **61718** | **réfutée** |
| 8-8 | `dette` : `cibles rouges distinctes` **43**, `mots` **62561** — prédit **47 inchangé** | **réfutée** |

⚠ **RÉFUTATION 8-7, ET ELLE VAUT TROIS MOTS.** 66996 − 5278 = 61718, sauf que
**66996 a été mesuré avant la passe C109** et que la passe a **ajouté 3 mots**.
Le bon calcul est 66999 − 5278 = **61721**. *Une soustraction entre deux mesures
prises de part et d'autre d'une écriture* — la variante « bon mécanisme, mauvais
instant » de la famille C118.

⚠ **RÉFUTATION 8-8, ET C'EST LA DÉFINITION DE LA DETTE QUI LA PRODUIT.** J'ai
prédit `47 inchangé` au motif que les quatre fiches « étaient déjà des fiches FR
existantes ». **La dette ne compte pas des fiches FR, elle compte les cibles
ROUGES VUES DEPUIS LA ZONE ANGLAISE** — et les quatre `*-en` étaient
précisément cela, liées par les fiches EN du lot 2 sans exister. Les traduire
les retire de la dette : **47 → 43**, **67836 → 62561 mots**. *La ligne du
README le dit en toutes lettres ; j'ai lu le nom du compteur au lieu de sa
définition.* **Neuvième compteur de la séance lu sur la mauvaise population.**

⚠ **RÉFUTATION 8-0 : la garde a été lancée après la passe C109 du bloc 7**, dont
les **4 sources FR** modifiées n'étaient pas dans la déclaration C131 du bloc 8.
57 = 52 + 4 fiches + 1 copie. **Hors artefacts 48 = 44 + 4, juste.** *Le
sous-compteur qui porte le sens est juste ; c'est le total qui rate.*

✅ **LES QUATRE TITRES EN SONT POSÉS SANS AUCUNE COLLISION NEUVE, ET LE CORPUS
EN EST À 197 TITRES DISTINCTS SUR 197 FICHES.** Le chantier du matin tenait sur
243/243 côté FR ; **il tient encore après quatre fiches de plus côté EN.**

---

## Bloc 9 — G9, RÉDACTION DES QUATRE FICHES EN, PUIS CLÔTURE `-Phase etat -Chevron`

### QUATRE CORRECTIFS D'AUTEUR, ET CE QUI A ATTRAPÉ CHACUN

| # | défaut | attrapé par |
|---|---|---|
| É1 | `source_sha256: PLACEHOLDER` **écrit à la main** dans `esp32-arduino-core-en` en réécrivant le fichier entier | **relecture immédiate du front matter écrit**, avant tout contrôle — puis réparé par `--recaler`, qui rend l'empreinte vraie `1cc07695a1ec` |
| É2 | `99.9 %` — **espace française devant `%`** dans `esp32-deep-sleep-en` | `--style`, verdict `typographie francaise` (mécanique) |
| É3 | `600 s ; active` — **espace française devant `;`**, deux emplacements | `--style`, verdict `typographie francaise` (mécanique) |
| É4 | **une incise à tirets CRÉÉE par la traduction** dans `esp32-arduino-core-en` l. 66, là où le français écrit des **parenthèses** | `--style`, verdict **`C109 creees en EN : 2`** |

⚠ **É1 EST EXACTEMENT LE DÉFAUT É4 DU 29/08 (SUITE 6) — UN `source_sha256`
INVENTÉ — ET IL EST REVENU PAR LA MÊME PORTE.** Réécrire une fiche EN **en
entier** oblige à recopier un champ de 64 hexadécimaux que l'outil avait posé
juste. *Le générateur pose l'empreinte, la rédaction la réécrit, et rien dans
le geste ne signale qu'on vient de toucher un marqueur cryptographique.*
**Parade appliquée sur les trois fiches suivantes : lire les `source_sha256`
des squelettes AVANT de rédiger, et les recopier au caractère près** — 8-4
confirme `A JOUR 197` sans recalage sur ces trois-là. **Règle d'usage
candidate : une fiche EN se rédige en partant de son squelette sur disque,
jamais en réécrivant son front matter de tête.**

✅ **É4 EST LE PREMIER DÉFAUT DE LA SEMAINE ATTRAPÉ PAR LE COMPTEUR `C109
creees en EN`, ET C'EST SA RAISON D'ÊTRE.** Le français écrivait `(qui, sur
ESP32, cède le processeur)` ; l'anglais a rendu `— which on the ESP32 yields
the processor —`. **Aucune occurrence côté FR, deux côté EN** : le compteur
`FR 0 / EN 2` l'a nommé sans ambiguïté. *C109 s'applique à l'anglais pour un
motif distinct — le tiret cadratin tapé est un marqueur de texte généré — et
le compteur des créations est ce qui rend ce motif opposable.*

### DÉCLARATION C131 DU BLOC 9 — population, versements, ET LE TOTAL

**État à l'entrée : 62.** 57 à la garde du bloc 8, plus **4 fiches EN neuves**
(non suivies), plus `tools/table-titres-lot3-2908.tsv`. **Versements du bloc
9** : `tools/alt-2908-e.txt` (**+1**, déjà écrit) et la copie C124
`batterie-sortie-2908b29.txt` (**+1**). **TOTAL IMPLIQUÉ À LA GARDE : 64,
hors artefacts 54, `content/` 49** — 18 FR + 19 EN du chantier, 4 FR + 4 EN
neuves du lot 3, plus… **49 est le compte de `content/`** ; les 5 restants sont
`renommer-titres.mjs`, `remplacer-passe.mjs`, et les trois TSV, plus
`libelles-2908-avant.txt`, `libelles-2908-apres.txt`, `alt-2908-e.txt`.
**Recomptage explicite : 45 fiches de `content/` + 9 fichiers de `tools/` hors
artefacts = 54 ; plus 10 artefacts de séance (`batterie-sortie-2908b21` à
`b29`, et `predictions-260829.md`) = 64.**

| # | prédiction | constat | verdict |
|---|---|---|---|
| 9-0 | garde : HEAD `a5226ea`, **64 / 54**, copie `batterie-sortie-2908b29.txt`, les 8 fiches du lot listées sous les dates d'écriture | | |
| 9-1 | corpus : **242 / 291223**, traduites **197 / 227234**, restant **45 / 63989** — inchangés depuis le bloc 8, la rédaction ne touchant aucune source FR | | |
| 9-2 | `--controle` : **197 fiches, 0 divergente, 0 lien non suffixé sur 0** | | |
| 9-3 | `derive-traduction` : **`A JOUR` 197, `DERIVE` 0**, exit 0 | | |
| 9-4 | foisonnement : **`197 paire(s) : 227234 mots FR -> ` entre 235 900 et 236 400 mots EN**. Base 230616 pour 193 paires, plus le lot 3 à **5278 mots FR** foisonnés de **+3,5 % à +5,0 %**, soit **+5 460 à +5 540** | | |
| 9-5 | `--style` du lot EN : **`C109 de prose` 2**, les deux points-virgules de `deep-sleep-en` l. 191, **image exacte des deux exemptions FR** ; `typographie francaise` **0**, `C109 creees en EN` **0**, `hors perimetre` **16**, `hors alphabet latin` **0** | | |
| 9-6 | médias : `fiches lues` **445** (441 + 4), `embeds` **662** (657 + 5), bilan **ABSENT 12, CASSE 0, HORS-GABARIT 0, EXTERNE 0, OK 650, ORPHELIN 1** — aucun des 5 embeds neufs n'est dans la liste des 12 absents | | |
| 9-7 | anneau 2 : **222 / 77 / 145 / 99 / 42 / 61721 / 6 porteuses** ; dette **43 cibles, 62561 mots** | | |
| 9-8 | `mesure-chevron --tout` (C127) : **`paires porteuses des deux cotes` 28** (24 + 4), **`divergentes` 0** — le symptôme reste réel et jamais survenu | | |
| 9-9 | wikilinks : `fiches lues` **445**, `cibles distinctes` **498 inchangé**, bilan **MORT 43** (47 − les 4 fiches créées), **CASSE 0, AMBIGU 0, GABARIT 8, ALIAS 6, OK 441** (437 + 4) | | |
| 9-10 | `--libelles` : `wikilinks a libelle` **3629** (3570 + **59**, décomposés 11 / 19 / 16 / 13, tous à libellé, aucun dans un bloc de code) ; `cible EN existante` **3320** (3236 + 59 + **25** libellés visant les quatre fiches, qui cessent d'être absents) ; `cible EN absente` **309** (334 − 25) ; `candidats a lire` **105 inchangé** ; `positions` **16** | | |
| 9-11 | les **59 libellés écrits** ne créent **aucun candidat**, et les **25 libellés préexistants** qui deviennent jugeables **non plus** — chacun partage un radical avec le `title:` de sa cible, les quatre titres ayant été choisis **sur ces libellés mêmes** | | |
| 9-12 | `deh` du lot inchangé à **4983**, `tot` **5278**, `ded` **290** — la rédaction EN ne touche pas les sources FR | | |

**Ce qu'un écart déclencherait.** 9-2 ou 9-3 réfutés = un compteur cassé ou une
empreinte fausse, donc É1 non réparé ; arrêt. 9-5 réfuté à la hausse = une
ponctuation créée par la traduction non vue. 9-8 réfuté = **premier cas du
symptôme que C127 surveille depuis le 27/08**, à remonter en incident.

### Constats du bloc 9 (G9) — **13 prédictions, 13 tenues, 0 réfutée**

| # | constat | verdict |
|---|---|---|
| 9-0 | horloge **20:04:36**, HEAD `a5226ea`, **64 / 54** — le recomptage explicite de la déclaration C131 tombe juste sur ses deux termes | tenue |
| 9-1 | **242 / 291223**, traduites **197 / 227234**, restant **45 / 63989** | tenue |
| 9-2 | **197 fiches, 0 divergente, `Liens non suffixes : 0 sur 0`** | tenue |
| 9-3 | **`A JOUR` 197, `DERIVE` 0**, exit 0 | tenue |
| 9-4 | **`197 paire(s) : 227234 -> 236113 mots EN`**, dans la fourchette 235 900 – 236 400 | tenue |
| 9-5 | `C109 de prose` **2**, `typographie francaise` **0**, `C109 creees en EN` **0**, `hors perimetre` **16**, `hors alphabet latin` **0** | tenue |
| 9-6 | **445 fiches, 662 embeds, 374 fichiers** ; **12 / 0 / 0 / 0 / 650 / 1** | tenue |
| 9-7 | **222 / 77 / 145 / 42 / 61721 / 6** ; dette **43 / 62561** | tenue |
| 9-8 | `mesure-chevron --tout` : **`paires porteuses des deux cotes : 28   divergentes : 0`** | tenue |
| 9-9 | **445 fiches, 498 cibles** ; **MORT 43, CASSE 0, AMBIGU 0, GABARIT 8, ALIAS 6, OK 441** | tenue |
| 9-10 | **3629 / 3320 / 309 / 105 / 16** — les cinq termes au chiffre près | tenue |
| 9-11 | `candidats a lire` **inchangé à 105** : ni les 59 libellés écrits ni les 25 devenus jugeables n'en créent | tenue |
| 9-12 | `deh` **4983**, `tot` **5278**, `ded` **290** | tenue |

✅ **LE BLOC 9 SORT À ZÉRO RÉFUTATION SUR TREIZE PRÉDICTIONS, DONT LA PLUS
DÉCOMPOSÉE DE LA SÉANCE.** 9-10 prédit **cinq compteurs de `--libelles`** —
3629 / 3320 / 309 / 105 / 16 — par **addition de trois populations nommées** :
59 libellés écrits, 25 libellés préexistants qui cessent de viser une fiche
absente, 105 candidats inchangés. *Les cinq tombent au chiffre près.* **C'est
le contre-exemple direct des dix réfutations de la séance** : toutes portent sur
un compteur dont la population n'avait **pas** été énumérée, celle-ci sur un
compteur dont elle l'avait été.

✅ **`candidats a lire` NE BOUGE PAS D'UNE UNITÉ ALORS QUE 84 LIBELLÉS CHANGENT
DE STATUT, ET CE N'EST PAS UN HASARD.** Les quatre `title:` EN ont été choisis
**sur les formes de production** — celles-là mêmes que portent les 25 libellés
préexistants. *Choisir le titre dans les libellés qui le désignent déjà fait
tomber l'heuristique à zéro par construction.* **Règle d'usage candidate :
un `title:` EN arrêté au test 3 sur les formes de production ne crée aucun
candidat `--libelles` ; s'il en crée, c'est que la forme retenue n'était pas
celle de la production.**

✅ **C127 EN PLEIN : 28 PAIRES PORTEUSES DES DEUX CÔTÉS, 0 DIVERGENTE.** Le lot
en ajoute **quatre**, et les **12 clôtures / 6 blocs** du français se retrouvent
à l'octet côté anglais. FR **34 porteuses, 43 872 `deh`** ; EN **28 porteuses,
36 611 `deh`**. **Le symptôme que C127 surveille depuis le 27/08 reste réel et
jamais survenu — cinquième lot d'affilée.**

---

# BILAN GÉNÉRAL DE LA SÉANCE — CHANTIER FR DE NOMMAGE ET LOT 3 D'`esp32/`

**97 prédictions publiées avant leur bloc, 87 tenues, 10 réfutées — taux
10,3 %**, contre 7,6 % au lot 6, 23,5 % au lot 1 d'`esp32/`, 20,4 % au lot 2.
**Plus un bloc hors décompte** (bloc G, garde d'ouverture lancée avant ses
prédictions, incident consigné). **Neuf gates, zéro arrêt effectif, zéro
intervention de Tim.**

| bloc | objet | prédictions | tenues | réfutées |
|---|---|---|---|---|
| G | garde d'ouverture | — | — | **hors décompte** |
| 1 | cadrage du chantier | 10 | 10 | 0 |
| 2 | passe FR, 18 `title:` | 13 | 11 | 2 |
| 3 | passe EN, 19 `title:` | 15 | 14 | 1 |
| 4 | `--recaler` ×18 | 10 | 10 | 0 |
| 5 | clôture du chantier | 11 | 11 | 0 |
| 6 | cadrage du lot 3 | 7 | 6 | 1 |
| 7 | passes C109, 33 remplacements | 9 | 6 | 3 |
| 8 | titres EN et génération | 9 | 6 | 3 |
| 9 | rédaction et clôture | 13 | 13 | 0 |

⚠ **LES DIX RÉFUTATIONS ONT UNE CAUSE UNIQUE, ET ELLE A UN NOM DEPUIS CE
MATIN : LA POPULATION D'UN COMPTEUR SE DÉCIDE DANS LE BLOC, PAS À L'OUVERTURE
DE LA SÉANCE.** Six d'entre elles (2-0, 2-12, 3-14, 7-0, 8-0, et 7-1/7-2 par un
autre chemin) sont le compteur `git status` amputé des artefacts que **le bloc
lui-même vient de créer** ; 6-4 est une colonne de clôtures lue sous le nom de
blocs ; 8-7 une soustraction entre deux mesures prises de part et d'autre d'une
écriture ; 8-8 le nom d'un compteur lu à la place de sa définition.
**Zéro réfutation sur un verdict** — ni les 38 jugements C109, ni les 37 titres
du chantier, ni les 4 titres du lot, ni les 2 exemptions.

✅ **ET LA PARADE A ÉTÉ TROUVÉE EN SÉANCE, PUIS VÉRIFIÉE.** À partir du bloc 4,
chaque bloc **rejoue sa propre déclaration C131** au lieu de s'appuyer sur celle
d'ouverture. **Blocs 4, 5, 6 et 9 : quatre gardes prédites, quatre justes sur
leurs deux termes.** Le bloc 9 pousse le procédé jusqu'au **recomptage
nominatif explicite** (45 fiches + 9 fichiers de `tools/` + 10 artefacts = 64) et
sort juste. *La règle d'usage du 29/08 (suite 6) demandait un total ; ce que la
séance ajoute, c'est que **le total doit être recalculé à chaque bloc**.*

**LES QUATRE CORRECTIFS D'AUTEUR, ET CE QUI A ATTRAPÉ CHACUN** — É1
`source_sha256` inventé, attrapé par **relecture** ; É2 et É3 espaces
françaises, attrapés par `--style` (**verdict mécanique**) ; É4 incise à tirets
créée par la traduction, attrapée par **`C109 creees en EN`**.
⚠ **É1 EST LE SEUL QUE LA MESURE N'A PAS TROUVÉ, ET C'EST LE QUATRIÈME LOT
D'AFFILÉE OÙ LE DÉFAUT DE FOND SORT DE LA LECTURE.** Il est aussi la **récidive
exacte de É4 du 29/08 (suite 6)**, par la même porte : réécrire une fiche EN en
entier oblige à recopier une empreinte de 64 hexadécimaux.

**DEUX OUTILS NEUFS, ET LES DEUX PORTENT UNE GARDE QUI A MORDU.**
`renommer-titres.mjs` (garde d'unicité d'ancre, tout ou rien) a **refusé deux
lots complets** sur test négatif — un accent manquant, puis une capitale — et
appliqué **41 titres** sans un seul échec.
`remplacer-passe.mjs` porte en plus l'**invariant d'accents** de la règle
d'usage du 29/08 (suite 6) : **231 → 231, 174 → 174, 303 → 303, 170 → 170**,
écart nul sur les quatre fiches, publié **avant** l'écriture.
*É2 du 29/08 (suite 6) — 147 caractères accentués perdus, cinq contrôles au
vert — ne peut plus se rejouer en silence.*

⚠ **ET LE PREMIER MOTIF D'ACCENTS ESSAYÉ ÉTAIT FAUX, ATTRAPÉ PAR C110 AVANT
TOUT COMPTAGE.** `grep -o '[àâä…]'` rend **12** sur un échantillon nommé qui en
porte **5** : `grep` apparie des **octets**. *C'est la cause des quatre
réfutations 10-9, 10-12, 11-1 et 11-3 du 29/08 (suite 6), et C110 l'a attrapée
cette fois **avant** la mesure au lieu d'après.*

---

# Prédictions — 2026-08-29 (suite 8), séance d'arbitrages rendus : résolution du conflit de séquence, (a) (b) (c) (d)

> **Quatre arbitrages rendus par Tim** sur la clôture de la suite 7 : **(a) ok
> pour le changement**, **(b) à résoudre par moi**, **(c) traiter**, **(d) à
> choisir par moi**. Plus une demande d'ensemble : **résoudre le conflit entre
> les anomalies, puis consigner le résultat dans la documentation.**
>
> HEAD a bougé : **`6a82030` du 2026-08-29 21:25:54**, le commit de clôture de
> la suite 7. La garde de 21:30:17 rend **1 fichier non commité, hors artefacts
> 0** — `tools/batterie-sortie-2908b31.txt`, la copie C124 du lancement
> lui-même. **Arbre propre, aucun état inattendu.**

## RÉSOLUTION DU CONFLIT — LA GARDE N'EST PAS UNE LECTURE, C'EST LE PREMIER BLOC D'EXÉCUTION

**Le conflit, énoncé.** CLAUDE.md range la garde de péremption en **étape 3 de
la « Lecture d'ouverture »**. La sous-règle C116 (1) exige que les prédictions
s'appendent à `tools/predictions-AAMMJJ.md` **avant chaque bloc d'exécution**,
l'ordre des appels faisant foi. **La garde écrit** — une copie C124 par
lancement — **et mesure** — horloge, HEAD, compteurs git, dates d'écriture.
C'est un bloc d'exécution rangé sous une rubrique dont il ne relève pas. Les
deux règles se contredisent donc sur le **premier lancement de chaque séance**,
et c'est **deux séances d'affilée que le premier bloc tombe hors décompte** pour
cette seule raison.

**Trois issues, et ce qui les départage.**

1. **Exempter la garde de C116 (1).** *Rejetée.* La garde est précisément le
   bloc dont les chiffres décident **si l'on écrit** ; l'exempter retire la
   prédiction de l'endroit où elle garde le plus. Et une exemption motivée par
   « ce n'est qu'une lecture » rouvre la porte à toutes les mesures, qui sont
   toutes des lectures.
2. **Ouvrir le fichier de prédictions avant les lectures d'ouverture.**
   *Rejetée.* La déclaration C131 d'ouverture et les prédictions de la garde se
   fondent sur le brief et sur l'état publié à la clôture précédente, qui se
   lisent dans `JOURNAL.md` et `conventions.md`. **Prédire avant de lire, c'est
   prédire de mémoire**, ce que C118 interdit.
3. **RETENUE — la garde cesse d'être une lecture d'ouverture et devient le
   premier bloc d'exécution.** CLAUDE.md passe de **trois lectures** à **deux
   lectures, puis une ouverture de fichier de prédictions, puis un bloc**.
   L'ordre des lectures ne change pas ; une étape s'intercale entre la dernière
   lecture et le premier lancement.

**Ce que la résolution coûte** : une étape de plus dans la liste d'ouverture,
zéro temps de lecture supplémentaire. **Ce qu'elle rapporte** : le premier bloc
de chaque séance rentre dans le décompte, et **la garde — le seul contrôle qui
puisse arrêter une séance avant sa première écriture — est prédite au lieu
d'être seulement lue**.

## ET LE CONFLIT DE SECOND RANG, QUE LES ANOMALIES 2 ET 3 EXPOSENT

Les lectures d'ouverture existent pour **charger les règles**. Or les deux
défauts de fond de la suite 7 sont des **violations de règles lues le matin
même** : la classe d'accents non trouée est proscrite en toutes lettres au §8 de
`conventions.md`, dans un paragraphe relu en ouverture ; le `source_sha256`
réécrit à la main est É4 du 29/08 (suite 6), consigné au JOURNAL relu en
ouverture. **La lecture n'a rien empêché, deux fois, le même jour.**

*C122 le dit déjà, pour l'ASCII : « une contrainte relue est une contrainte qui
cède ; une contrainte mesurée laisse une trace datée ».* **Résolution
symétrique, et c'est la même que celle du conflit de premier rang — déplacer la
contrainte de la prose vers l'exécution : toute règle d'usage qui contraint un
geste mécanique se loge dans le code qui exécute ce geste**, le §8 n'en gardant
que le motif. **Appliqué deux fois ce soir** : le motif d'accents porte son
intervalle troué **en commentaire à l'endroit exact où il se réécrirait**
(fait en suite 7), et `derive-traduction.mjs` reçoit un verdict **`MARQUE
INVALIDE`** qui distingue une empreinte **inventée** d'une empreinte **périmée**
— la distinction dont l'absence a laissé passer É1.

## DÉCLARATION C131 D'OUVERTURE — ET SON TOTAL

**Entrée : 1 fichier** (`tools/batterie-sortie-2908b31.txt`, hors artefacts 0).
**Versement de ce bloc : le présent texte**, appendu à
`tools/predictions-260829.md`, **fichier suivi et déjà commité** — il repasse
donc en `M`, **+1 au total, 0 hors artefacts**. **TOTAL IMPLIQUÉ AVANT LE
BLOC 10 : 2, hors artefacts 0.** *Chaque bloc qui suit rejoue sa déclaration
(amendement C131 de ce soir).*

## Bloc 10 — ARBITRAGES (a) ET (b) : TROIS `title:` EN

### (a) — LA SYMÉTRIE `digital` EN ANGLAIS, ARBITRÉE PAR TIM

`entree-tor` est passé à `Reading a digital input` le 29/08 (suite 5), **contre
la forme dominante de production** (`Reading an on/off input`, 14 libellés
contre 7). Tim rend **« ok pour le changement »** : `sortie-tor` suit.
**Corroboration lue en production** : `micropython-sortie-tor-en` porte déjà
**un libellé `Driving a digital output`**, donc la forme existe et n'est pas
inventée.

| fiche | avant | après |
|---|---|---|
| `arduino-sortie-tor-en` | Driving an on/off output on Arduino | **Driving a digital output on Arduino** |
| `micropython-sortie-tor-en` | Driving an on/off output in MicroPython | **Driving a digital output in MicroPython** |

⚠ **Le français ne bouge pas, et c'est le point.** `Lire une entrée TOR sur
Arduino` et `Piloter une sortie TOR sur Arduino` sont **déjà symétriques** ;
c'est l'anglais qui ne l'était pas. **Aucune source FR ne change, donc aucun
`--recaler` n'est dû** — ma clôture de la suite 7 chiffrait ce revert à « 2
éditions + 2 `--recaler` », **et les deux recalages étaient de trop** :
`source_sha256` porte sur la source française, qu'une passe de `title:` anglais
ne touche pas.

### (b) — LE CONFLIT DE `Multitasking with FreeRTOS`, RÉSOLU EN FAVEUR DU QUALIFICATIF

**Ce qui s'opposait** : la forme de production (`Multitasking with FreeRTOS`,
5 libellés) contre le patron de famille du module (`… on the ESP32`, porté par
**6 `title:`** après le lot 3) et contre le `title:` FR
(`Multitâche FreeRTOS sur l'ESP32`), qui porte le qualificatif.

**Ce qui tranche, et je l'avais manqué : C125 test 1.** *La forme est-elle un
libellé de désambiguïsation ? Si oui, elle sort du concours des titres.*
Le corpus français **désigne** `esp32-freertos` par `FreeRTOS` (11 libellés) et
l'**intitule** `Multitâche FreeRTOS sur l'ESP32` : label et titre y sont
distincts. Le corpus anglais désigne par `FreeRTOS` (10) et
`Multitasking with FreeRTOS` (5). **J'ai pris la désignation anglaise pour un
titre**, ce que le test 1 interdit explicitement — et c'est l'erreur que C125
a été amendée le 27/08 (suite 3) pour empêcher, sur `adc-en` et
`chronogramme-en`.

**Trois motifs de plus, tous vérifiables :**
1. **FreeRTOS n'est pas propre à l'ESP32.** `ESP-IDF` nomme le fabricant, donc
   `Discovering ESP-IDF` situe la fiche sans qualificatif. **FreeRTOS tourne sur
   STM32, sur Teensy et ailleurs** : `Multitasking with FreeRTOS` ne dit pas de
   quelle puce parle la fiche.
2. **Une jumelle est plausible dans les deux lots qui viennent.** L'anneau 2
   restant porte **5 fiches `stm32/` et 4 `teensy/`**, et c'est exactement la
   situation — deux fiches de familles voisines sur un même sujet — qui a
   produit le chantier de nommage de ce matin. **Qualifier maintenant coûte une
   édition ; qualifier après coûte un chantier.**
3. **Le motif du 26/08 joue dans l'autre sens.** Il interdit d'inventer une
   asymétrie EN/FR *pour masquer un défaut de source*. Ici la source **porte**
   le qualificatif et l'anglais le perdait : c'est une **distinction effacée**,
   soit exactement la faute que `shield` incarnait ce matin et que le chantier
   a réparée.

| fiche | avant | après |
|---|---|---|
| `esp32-freertos-en` | Multitasking with FreeRTOS | **Multitasking with FreeRTOS on the ESP32** |

| # | prédiction | constat | verdict |
|---|---|---|---|
| 10-0 | garde : HEAD **`6a82030`**, `fichiers modifies non commites` = **4** (le `b31` déjà là, la copie `b32` du lancement, `predictions-260829.md` en `M`, `tools/table-titres-suite8.tsv`), `hors artefacts de seance` = **1** (le seul TSV) | | |
| 10-1 | contrôle du TSV : **3 ancres uniques**, 0 introuvable, 0 multiple, exit **0**, 0 écrit | | |
| 10-2 | `--ecrire` : **3 fichiers écrits** | | |
| 10-3 | `git diff --numstat -- content/en/` : **3 lignes**, chacune **`1	1`**, et **0 ligne du diff hors `title:`** | | |
| 10-4 | `derive-traduction` : **`DERIVE` 0, `A JOUR` 197** — **aucun recalage dû**, aucune source FR touchée | | |
| 10-5 | `titres-doublons` : FR **243 / 243 / 0 / 0**, EN **197 / 197 / 0 / 0** — les trois formes neuves sont absentes du corpus, notamment `Driving a digital output …` contre `Driving a PWM output on Arduino` qui reste distinct | | |
| 10-6 | `--libelles` : `candidats a lire` **105 inchangé**. Mécanisme : les **13 libellés `Driving an on/off output`** partagent `driving` et `output` avec le titre neuf ; les **15 libellés `FreeRTOS` / `Multitasking with FreeRTOS`** partagent `freertos`. **Aucun ne perd son recoupement**, et la règle d'usage du bloc 9 tient | | |
| 10-7 | `compter-mots` corpus **291 223 inchangé** ; foisonnement **236 113 inchangé** — un `title:` vit hors règle C110 | | |

**Ce qu'un écart déclencherait.** 10-4 réfuté (une dérive apparaît) = j'ai
touché une source FR sans le vouloir ⇒ arrêt. 10-6 réfuté **à la hausse** =
la contraposée de la règle d'usage du bloc 9 mord, et la forme retenue n'était
pas celle de la production ⇒ à instruire avant de consigner la règle.

### Constats du bloc 10 — **8 prédictions, 8 tenues, 0 réfutée**

Horloge **21:34:20**, HEAD `6a82030`, **4 / 1**. Contrôle **3 / 3 ancres**, exit 0,
0 écrit. `--ecrire` **3 fichiers**. `numstat` **trois lignes à `1	1`**, **0 ligne
du diff hors `title:`**. Dérive **0, A JOUR 197** — **aucun recalage dû**.
Titres **FR 243/243/0, EN 197/197/0**. `--libelles` **3629 / 3320 / 309 / 105 /
16**, `candidats a lire` **inchangé**. Corpus **291 223**, foisonnement
**236 113**.

✅ **LES 13 LIBELLÉS `Driving an on/off output` ET LES 15 LIBELLÉS `FreeRTOS`
SURVIVENT AU CHANGEMENT DE TITRE SANS DEVENIR CANDIDATS**, par les radicaux
`driving`/`output` et `freertos`. **La règle d'usage du bloc 9 tient une
deuxième fois**, et sur le cas le plus défavorable — un titre changé **après**
que les libellés ont été écrits.

⚠ **ET MA CLÔTURE DE LA SUITE 7 CHIFFRAIT CE REVERT À « 2 ÉDITIONS + 2
`--recaler` » : LES DEUX RECALAGES ÉTAIENT DE TROP.** `source_sha256` porte sur
la **source française**, qu'une passe de `title:` **anglais** ne touche pas.
*Un coût de revert publié sous C116 (8) est une prédiction comme une autre, et
celui-là était faux.* **Constat : 3 titres EN changés, `DERIVE 0`.**

---

## Bloc 11 — ARBITRAGE (c) : LES TIRETS DE PUCE, ET LA FRONTIÈRE QUI LES BORNE

### LA FRONTIÈRE OPÉRATOIRE, ÉCRITE AVANT LA PASSE

« Traiter » sans frontière hacherait **tous les glossaires du corpus** —
`## Les concepts` de `esp32-freertos` est une liste de définitions, et
l'arbitrage du 22/08 a précisément abrogé le corollaire qui les visait.
**Quatre cas, dans cet ordre :**

1. **Tiret sous `## Voir aussi` et `## Aller plus loin`** — glose de liste,
   **licite au §4** (1 314 gloses mesurées le 22/08). **Hors périmètre.**
2. **Tiret en tête de puce, juste après le libellé** (`- **Libellé** — …`) —
   **séparateur de glose**, borne du 25/08. Il **reste** si le segment de droite
   est un **groupe** nominal, adjectival, infinitif ou participial, *subordonnée
   relative comprise* puisqu'elle vit **dans** le groupe. Il **tombe** si le
   segment de droite est une **proposition indépendante avec son propre sujet**
   : ce n'est plus une glose, c'est une phrase.
3. **Tiret à l'intérieur de la prose d'une puce**, après au moins une phrase
   complète — **C123 en plein**, subordonnées comprises.
4. **Renvoi de fin de segment** (`— voir [[x]]`) — troisième voie du 25/08,
   **parenthèse**, en puce comme en prose.

⚠ **LE CAS 2 EST CE QUI RÉCONCILIE LA BORNE DU 25/08 AVEC C123, ET LES DEUX SE
CONTREDISAIENT.** La borne garde `Libellé — apposition nominale` « délibérément,
contre la lecture stricte du second tamis » ; C123 fait tomber « dès qu'un verbe
conjugué apparaît, y compris dans une subordonnée ». Sur
`- **Tâche** — une fonction **qui ne se termine jamais**`, les deux règles
donnent des verdicts opposés. **La frontière est le sujet propre** : une
relative appartient au groupe nominal qu'elle qualifie, une proposition à sujet
propre n'y appartient pas. *C123 gouverne les incises, pas les séparateurs de
glose — et un séparateur de glose cesse d'en être un quand ce qu'il introduit a
son propre sujet.*

### POPULATION MESURÉE, ET CE QUI SORT DU PÉRIMÈTRE DE CE BLOC

**Sur les quatre fiches du lot 3 : 32 puces à tiret hors sections de liens**
(6 / 6 / 10 / 10). **20 tombent, 12 restent.** Les 12 sont : les deux signatures
`esp_sleep_enable_ext*` de `deep-sleep` (glose nominale), `— sans tout
réécrire` et `— un pont dans l'autre sens` d'`arduino-core` (infinitif, nominal,
**aucun verbe conjugué**), quatre définitions de `## Les concepts` et
`Communiquer entre tâches` de `freertos`, et trois entrées de `À quoi ça sert ?`
plus `— proche de la logique…` d'`idf` (nominal, nominal, infinitif, adjectival).

⚠ **CORPUS ENTIER, MESURÉ ET NON TRAITÉ : 1 084 puces à tiret hors sections de
liens côté FR, 872 côté EN.** Le taux de chute observé sur l'échantillon de
quatre fiches est de **20/32**, mais **il ne s'extrapole pas** (C119) : le lot 3
est riche en sections `Raccrochage projet`, qui sont de la prose en puces, et
pauvre en glossaires. **C'est un chantier à part entière, à cadrer**, et ce bloc
ne traite que les quatre fiches en main.

### DÉCLARATION C131 DU BLOC 11

**Entrée : 7** — `b31`, `b32`, `predictions-260829.md` (M),
`table-titres-suite8.tsv`, et **3 fiches EN** du bloc 10. **Versements** : la
copie `b33` (**+1**, artefact) et **deux TSV**, `passe-puces-fr-2908.tsv` et
`passe-puces-en-2908.tsv` (**+2**, hors artefacts). **TOTAL IMPLIQUÉ À LA
GARDE : 10, hors artefacts 6** — 3 fiches EN + 3 fichiers de `tools/` hors
artefacts. *Les deux TSV sont écrits **avant** la garde, donc ils y sont.*

| # | prédiction | constat | verdict |
|---|---|---|---|
| 11-0 | garde : HEAD **`6a82030`**, **10 / 6**, copie `batterie-sortie-2908b33.txt` | | |
| 11-1 | contrôle FR : **20 ancres uniques**, 0 introuvable, 0 multiple, exit 0, 0 écrit ; invariant d'accents **écart +0** sur les quatre | | |
| 11-2 | contrôle EN : **20 ancres uniques**, mêmes verdicts | | |
| 11-3 | `--ecrire` FR puis EN : **4 + 4 = 8 fichiers écrits**, **40 remplacements** | | |
| 11-4 | `git diff --numstat` : FR **`4 4` / `4 4` / `6 6` / `6 6`** (deep-sleep, arduino-core, freertos, idf) ; EN **les mêmes quatre couples** | | |
| 11-5 | `--style` des quatre sources FR : `C109 de prose` **2 inchangé** (les deux points-virgules exemptés de `deep-sleep` l. 189), `typographie francaise` **0**, `hors perimetre` **16** — **le tiret de puce n'a jamais été dans le compteur, il n'en sort donc pas** | | |
| 11-6 | `--style` des quatre fiches EN : `C109 de prose` **2**, `C109 creees en EN` **0**, `typographie francaise` **0** | | |
| 11-7 | `compter-mots --lot` FR : **5 280** (5 278 **+ 2**), les deux mots ajoutés étant les deux `et` de `deep-sleep` l. 28 et `freertos` l. 28 ; les 18 autres remplacements n'ajoutent aucun mot | | |
| 11-8 | `mesure-chevron --lot` FR : `deh` **4 985**, `ded` **290 inchangé**, `cl` **12**, `bl` **6** | | |
| 11-9 | `derive-traduction` **avant** recalage : `DERIVE` **4**, `A JOUR` **193** — les quatre sources FR ont bougé | | |
| 11-10 | **4 `--recaler`**, puis `DERIVE` **0**, `A JOUR` **197**, exit 0 | | |
| 11-11 | `--controle` : **197 fiches, 0 divergente, 0 lien non suffixé sur 0** — la passe ne touche ni lien, ni embed, ni bloc de code | | |
| 11-12 | corpus FR **291 225** (291 223 **+ 2**) ; foisonnement **197 paires : 227 236 → 236 115** (**+2 des deux côtés**) | | |
| 11-13 | `titres-doublons` **FR 243/243/0, EN 197/197/0** ; `--libelles` **candidats 105 inchangé** — aucune des 40 éditions ne touche un libellé | | |

**Ce qu'un écart déclencherait.** 11-1 ou 11-2 réfutés sur l'invariant
d'accents ⇒ arrêt avant écriture, la garde refusant d'elle-même. 11-4 réfuté
⇒ une ligne a bougé hors ancre. 11-9 réfuté **à la baisse** ⇒ une source FR
n'a pas été écrite. 11-13 réfuté **à la hausse** ⇒ une édition a mordu dans un
libellé de wikilink.

### Constats du bloc 11 — **14 prédictions, 13 tenues, 1 réfutée**

| # | constat | verdict |
|---|---|---|
| 11-0 | horloge **21:40:19**, HEAD `6a82030`, **10 / 6** | tenue |
| 11-1 | FR **4/4, 4/4, 6/6, 6/6**, accents **229 / 174 / 303 / 170, écart +0** partout, lignes inchangées | tenue |
| 11-2 | EN **4/4, 4/4, 6/6, 6/6**, accents **0 → 0** sur les quatre | tenue |
| 11-3 | **8 fichiers écrits, 40 remplacements** | tenue |
| 11-4 | FR **`4 4` / `4 4` / `6 6` / `6 6`** ✓ ; EN `4 4` / `4 4` / **`7 7`** / `6 6` — prédit `6 6` sur `esp32-freertos-en` | **réfutée** |
| 11-5 | `--style` FR : `C109 de prose` **2**, typographie **0**, hors périmètre **16** | tenue |
| 11-6 | `--style` EN : `C109 de prose` **2**, `C109 creees en EN` **0**, typographie **0** | tenue |
| 11-7 | `LOT (4 fiches)` **5 280** | tenue |
| 11-8 | `deh` **4 985**, `ded` **290**, `cl` **12**, `bl` **6** | tenue |
| 11-9 | avant recalage : `DERIVE` **4**, `A JOUR` **193** | tenue |
| 11-10 | 4 `--recaler`, puis `DERIVE` **0**, `A JOUR` **197**, exit **0** | tenue |
| 11-11 | `--controle` **197, 0 divergente, 0 lien non suffixé sur 0** | tenue |
| 11-12 | corpus **291 225** ; **197 paires : 227 236 → 236 115 mots EN** | tenue |
| 11-13 | titres **FR 243/243/0, EN 197/197/0** ; `--libelles` **3629 / 3320 / 309 / 105 / 16** | tenue |

⚠ **RÉFUTATION 11-4 : `esp32-freertos-en` REND `7 7` PARCE QUE LE DIFF EST
CUMULÉ DEPUIS HEAD, ET QUE LE BLOC 10 Y AVAIT DÉJÀ CHANGÉ LE `title:`.**
6 lignes de puce + 1 ligne de titre. **Septième occurrence de la même forme** :
un compteur lu sur une population qui contient les écritures d'un bloc
antérieur. *Le `numstat` ne compare pas la fiche à son état d'avant le bloc,
il la compare à HEAD* — et HEAD, ici, est le commit de clôture de la suite 7.
**Aucun effet sur l'invariant** : les 7 lignes sont toutes des lignes de prose
ou de titre attendues, et `--controle` reste à 0 divergente.

✅ **LA FRONTIÈRE DU CAS 2 TIENT SUR SES DEUX FACES.** Les **12 puces gardées**
sont exactement les 12 prédites — deux signatures de fonction, un infinitif, un
nominal, quatre définitions de glossaire, trois entrées nominales et un
adjectival — et les **20 traitées** exactement les 20 prédites. **Aucun
glossaire haché, aucune proposition à sujet propre laissée derrière un tiret.**

✅ **`--style` NE BOUGE NI AVANT NI APRÈS, ET C'EST LE POINT.** `C109 de prose`
reste à **2** des deux côtés, les deux points-virgules exemptés de
`deep-sleep` l. 189. **Le tiret de puce n'a jamais été dans le compteur : il
n'en sort donc pas.** *La passe est invisible à l'instrument qui devrait la
mesurer — c'est exactement le motif de l'arbitrage (c), et la seule trace
mesurable de son exécution est le `git diff`.*

---

## Bloc 12 — RÉSOLUTION DU CONFLIT DE SECOND RANG : LE VERDICT `MARQUE INVALIDE`

**Ce que É1 a montré.** Un `source_sha256: PLACEHOLDER` écrit à la main sort en
**`DERIVE`**, exactement comme une empreinte simplement périmée. *Les deux
défauts n'ont ni la même cause ni le même remède* : une empreinte périmée se
recale après relecture, une empreinte **inventée** signale que la fiche a été
réécrite en entier et que **tout son front matter est suspect**.

**Ce que le bloc ajoute**, en application de la résolution de second rang — une
règle qui contraint un geste mécanique se loge dans le code qui l'exécute :
`derive-traduction.mjs` reçoit un **cinquième statut, `MARQUE INVALIDE`**, pour
tout `source_sha256` qui n'est pas **64 caractères hexadécimaux minuscules**.
Il est **bloquant** comme `DERIVE`, et il est **imprimé avant** les autres.

### DÉCLARATION C131 DU BLOC 12

**Entrée : 18** — 10 à la garde du bloc 11, plus **8 fiches** écrites par les
deux passes. **Versement du bloc : `derive-traduction.mjs` modifié (+1)**, plus
la copie `b34` si une garde est relancée. **TOTAL IMPLIQUÉ : 19, hors artefacts
15** — 11 fiches de `content/` (3 EN du bloc 10 dont une recomptée, 4 FR + 4 EN
du bloc 11) et 4 fichiers de `tools/` hors artefacts. **Recomptage nominatif :
11 + 4 = 15.**

| # | prédiction | constat | verdict |
|---|---|---|---|
| 12-1 | **test négatif d'abord** : sur le dépôt en l'état, `derive-traduction --tout` rend **`MARQUE INVALIDE` 0**, `A JOUR` **197**, exit **0** — les 197 empreintes sont bien formées | | |
| 12-2 | l'ordre d'impression du bilan devient **`MARQUE INVALIDE`, `DERIVE`, `SANS SOURCE`, `SANS MARQUE`, `A JOUR`**, cinq lignes | | |
| 12-3 | `git diff --numstat -- tools/derive-traduction.mjs` : **un seul fichier**, et **aucune fiche de `content/` touchée** par ce bloc | | |
| 12-4 | `--controle` **197 / 0 divergente** et `titres-doublons` **243/243/0, 197/197/0** inchangés : le bloc ne touche pas `content/` | | |

## Bloc 13 — CONSIGNATION : `CLAUDE.md`, `conventions.md`, `tools/README.md`, JOURNAL, TODO

**Arbitrage (d), rendu par moi : aucune promotion à un numéro neuf. La
numérotation reste à 131.** Quatre candidates étaient sur la table ; **deux sont
des amendements à des règles déjà numérotées** et y retournent, **deux restent
au §8 à 1/N**.

| candidate | sort | motif |
|---|---|---|
| *une déclaration C131 ne vaut que pour le bloc qui l'écrit* | **amendement à C131** | Même branche, six occurrences dans une seule séance. Lui donner un numéro **séparerait une règle de son amendement**, ce que le motif de C131 lui-même proscrit — « loger la règle sous la sous-règle C116 l'aurait rendue muette là où elle a déjà mordu » ; ici c'est l'inverse exact. |
| *une passe qui ne touche qu'une ligne se fait par un outil à ancre unique publiant ses invariants* | **amendement à C116 (6)** | C116 (6) énonce déjà le contrôle d'unicité d'ancre ; ce qui manquait était **l'instrument**. Un numéro neuf dupliquerait la règle au lieu de l'outiller. |
| *une fiche EN se rédige en partant de son squelette sur disque* | **reste au §8, 1/N** | Règle de geste, éprouvée une fois, et **désormais gardée par le code** (`MARQUE INVALIDE`). Un numéro serait prématuré ; le garde-fou compte plus que le numéro. |
| *un `title:` EN arrêté au test 3 ne crée aucun candidat `--libelles`* | **reste au §8, 2/N** | Éprouvée **deux fois** en deux séances (4 titres du lot 3, puis 3 titres du bloc 10 **après** que les libellés ont été écrits). À promouvoir comme **clause de C125** quand une troisième épreuve la portera. |

**Et la frontière du tiret de puce (arbitrage (c)) se consigne en amendement à
C109**, au même endroit que la borne du 25/08 qu'elle réconcilie avec C123.

| # | prédiction | constat | verdict |
|---|---|---|---|
| 13-1 | `CLAUDE.md` : la « Lecture d'ouverture » passe de **3 à 4 étapes**, la garde devenant l'étape **4** et une étape **3 neuve** ouvrant `tools/predictions-AAMMJJ.md` ; **le mot « obligatoire, dans cet ordre » est conservé** | | |
| 13-2 | `conventions.md` : **C131 amendée**, **C116 (6) amendée**, **C109 amendée** de la frontière du tiret de puce, **§8 mis à jour** sur les quatre candidates ; la numérotation **reste à 131**, aucun `C132` n'apparaît | | |
| 13-3 | `node tools/normalize-pilotage.js` : **0 caractère à corriger, 0 fichier modifié** avant comme après | | |
| 13-4 | `git diff --numstat` final : **exactement 4 fichiers de pilotage** touchés (`CLAUDE.md`, `conventions.md`, `JOURNAL.md`, `TODO.md`) plus `tools/README.md` et `tools/derive-traduction.mjs` | | |
| 13-5 | garde finale : HEAD **`6a82030` inchangé**, aucune date d'écriture inattendue dans `content/` | | |

### Constats des blocs 12 et 13 — **9 prédictions, 8 tenues, 1 réfutée**

**Bloc 12 — 4 tenues sur 4.** `MARQUE INVALIDE` **0**, `A JOUR` **197**, exit
**0** sur le dépôt réel. Bilan à **cinq lignes**, dans l'ordre
`MARQUE INVALIDE / DERIVE / SANS SOURCE / SANS MARQUE / A JOUR`.
`numstat` : **`tools/derive-traduction.mjs` seul**, aucune fiche de `content/`
touchée. `--controle` **197 / 0** et titres **243/243/0, 197/197/0** inchangés.

**TEST NÉGATIF, hors prédiction et consigné** : marqueur `PLACEHOLDER` posé sur
`en/meca/usinage-en.md` — **fiche propre au HEAD, donc restaurable sans risque
pour le travail de la séance**. Sortie
`--- MARQUE INVALIDE (1) --- en/meca/usinage-en.md <- meca/usinage.md   marqueur
lu : PLACEHOLDER`, **exit 1**. Fichier restauré par `git checkout`, arbre
vérifié propre, contrôle relancé à **0 / 197 / exit 0**.
⚠ **Un défaut d'alignement introduit au passage** : `padEnd(12)` sur une
étiquette de **15** caractères rendait `MARQUE INVALIDE0`. Corrigé à
`padEnd(16)` dans le même bloc. *Neuvième fois de la journée qu'une largeur, un
seau ou une population est lu sur la mauvaise mesure — cette fois sans
conséquence.*

**Bloc 13 — 4 tenues sur 5.**
`CLAUDE.md` : ouverture à **4 étapes**, garde en **étape 4**, étape 3 neuve
ouvrant le fichier de prédictions ; **deux règles non négociables ajoutées** —
*une règle qui contraint un geste mécanique se loge dans le code* et **C131**
avec son amendement — plus l'amendement de C110 sur le choix de l'échantillon
et l'ajout des deux outils d'écriture à la liste des outils de mesure.
`conventions.md` : **C131 amendée**, **C116 (6) amendée**, **C109 amendée** de
la frontière à quatre cas, **§8 réduit de deux candidates** promues en
amendements et **deux mises à jour** (1/N et 2/N). **`grep -c C132` = 0 dans les
deux fichiers** : la numérotation reste à **131**.
`normalize-pilotage.js` : **0 caractère à corriger, 0 fichier modifié**.

| # | constat | verdict |
|---|---|---|
| 13-4 | `git diff --numstat` : **4 fichiers de pilotage** (`CLAUDE.md`, `JOURNAL.md`, `TODO.md`, `conventions.md`) + `tools/derive-traduction.mjs` + `tools/predictions-260829.md`. **`tools/README.md` N'EST PAS dans le diff** — prédit qu'il le serait | **réfutée** |

⚠ **RÉFUTATION 13-4, ET ELLE EST DU MÊME ORDRE QUE LES DEUX AUTRES.**
`tools/README.md` documente déjà `renommer-titres.mjs` et
`remplacer-passe.mjs` : **il a été écrit à la suite 7 et commité par Tim en
`6a82030`**. Ma prédiction le rangeait parmi les fichiers que *cette* séance
allait toucher. *Le README était à jour, donc absent du diff — la prédiction
portait sur une population « fichiers de la documentation » quand le compteur
mesure « fichiers modifiés depuis HEAD ».* **Rien n'est dû** : le seul ajout
documentaire de ce soir, le statut `MARQUE INVALIDE`, est décrit **en tête de
`derive-traduction.mjs`** et repris dans `CLAUDE.md`, et la section
`derive-traduction.mjs` du README n'énumère pas les statuts.

---

# BILAN GÉNÉRAL — 29/08 (suite 8)

**39 prédictions publiées avant leur bloc, 37 tenues, 2 réfutées — taux
5,1 %**, contre 10,3 % à la suite 7, 20,4 % au lot 2, 7,6 % au lot 6.
**Quatre blocs, quatre gates, zéro arrêt, zéro intervention.**

| bloc | objet | prédictions | tenues | réfutées |
|---|---|---|---|---|
| 10 | arbitrages (a) et (b), 3 `title:` EN | 8 | 8 | 0 |
| 11 | arbitrage (c), 40 remplacements | 14 | 13 | 1 |
| 12 | statut `MARQUE INVALIDE` | 4 | 4 | 0 |
| 13 | consignation, arbitrage (d) | 5 | 4 | 1 |

✅ **PREMIER BLOC DE LA JOURNÉE ENTIÈREMENT PRÉDIT ET ENTIÈREMENT TENU SUR UN
COMPTEUR `git status`.** Le bloc 11 déclare **10 / 6** en rejouant sa
déclaration C131 — deux TSV écrits **avant** la garde, donc comptés — et la
garde rend **10 / 6**. *L'amendement écrit ce soir se vérifie dans la séance qui
l'écrit.*

⚠ **LES DEUX RÉFUTATIONS SONT ENCORE DES POPULATIONS, ET LES DEUX SONT
NOMMÉES.** `numstat` **cumulé depuis HEAD** — corollaire désormais écrit dans
C131 — et « fichiers de la documentation » lu pour « fichiers modifiés depuis
HEAD ». **Zéro réfutation sur un verdict** : ni les 32 jugements de puces, ni
les 3 titres, ni la résolution de (b), ni celle de (d), ni la frontière à
quatre cas.

**CE QUE LA SÉANCE DÉPLACE, ET C'EST LA MÊME CHOSE DEUX FOIS.** Le conflit de
premier rang se résout en **déplaçant la garde** d'une rubrique de lecture vers
une rubrique d'exécution ; le conflit de second rang se résout en **déplaçant la
contrainte** de la prose vers le code. *Dans les deux cas, la règle ne change
pas : c'est l'endroit où elle vit qui change.* **Et dans les deux cas, le motif
est celui de C122, écrit le 27/08 pour l'ASCII : une contrainte relue est une
contrainte qui cède, une contrainte mesurée laisse une trace datée.**
