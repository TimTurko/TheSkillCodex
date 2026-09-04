# Couverture des acquis d'apprentissage — en cours

> Fichier de travail privé (non publié). Capitalise les cartographies fiche par fiche pendant la **passe B** (lecture en aveugle), avant écriture des champs `aa:` dans les front matter (faite en une passe groupée une fois le pattern stabilisé sur 2-3 fiches).
> Source de vérité : `referentiel-normalise.md` (62 entrées matrice − 5 doublons = 57 critères distincts, 12 AA, 5 domaines).

## Convention de granularité (catégories de couverture)

- **Couvert** : critère qui est l'objet central d'une fiche dédiée OU d'une section H2/H3 dédiée au sein d'une trame/transverse.
- **Effleuré** : critère mentionné en passant (H4, dans un `[!example]`, via un wiki-link uniquement, ou en posture/pièges sans traitement central).
- **Non couvert** : pas du tout présent, mais qui devrait l'être. Se déduit par différence avec l'ensemble du référentiel (pas listé fiche par fiche, calculé en synthèse finale). Identifie un trou à combler.
- **Hors scope** (acquise 26/05 suite 2) : critère du référentiel école que le projet TheSkillCodex ne traite pas par choix pédagogique, parce qu'il relève de l'évaluation transversale des étudiants (soft skills, engagement, participation, terminologie professionnelle évaluée en revue par les enseignants) plutôt que du contenu enseigné par le wiki. À distinguer de **Non couvert** : pas un trou, une décision éditoriale. Cas identifiés : `RA-PROJET-C04-4/PROJ/3` (terminologie technique écrit/oral), `RA-PROJET-C07-1/PROJ/4` (participer aux tâches), `RA-PROJET-C07-1/PROJ/6` (participer aux événements).
- **Hors scope par délégation** (HS-D, acquise 06/06) : critère qui *est* un contenu enseigné, mais par un **cours collègue** hors du périmètre d'expertise de l'auteur (élec / info embarquée / gestion de projet) — typiquement le **design produit** et la **mécanique pure**. Le wiki ne le traite pas mais peut y renvoyer. À distinguer du **Hors scope** classique (évaluation transversale comportementale, jamais enseignée comme contenu) et du **Non couvert** (trou réel à combler). Cas identifiés : `RA-PROJET-C03-3/PROJ/1` (sketchs), `RA-PROJET-C03-3/PROJ/2` (prise en compte design), `RA-MME-C03-1/MME/1` (outils designers).

## Grille de lecture par phase du wiki (acquise 26/05 suite 2)

La cartographie se lit en distinguant deux phases du wiki :

- **Phase 1 du wiki** (terminée à ce jour : 5 trames du V + 3 transverses) couvre principalement les domaines **PROJ + MEO + ESE** (démarche projet, gestion de projet, écoconception, sécurité-qualité). Un critère PROJ/MEO/ESE non couvert ou effleuré dans la phase 1 = **vrai trou à interroger** (oubli ou mauvais rattachement).
- **Phase 2 du wiki** (à venir : fiches-tutos/notions disciplinaires) couvrira la majorité des critères **EEE + MME**. Un critère EEE/MME non couvert ou effleuré dans la phase 1 = **trou prévu**, sans problème, devient input de priorisation pour la phase 2.

**Convention pédagogique actée 26/05 suite 2** : pour les critères en lien avec **EEE et info embarquée**, une fiche-tuto par critère ou par groupe cohérent en phase 2. Pas de critère EEE qui reste en effleurage permanent — chacun doit avoir un endroit nommé dans le wiki phase 2. Quand un critère cite plusieurs solutions (ex. logigramme/MAE/grafcet/chronogramme pour `EEE/5`), 1 fiche par solution plutôt qu'une fiche regroupante.

La synthèse globale (en fin de passe B+A) séparera ces deux familles de trous pour orienter la suite du travail.

## Convention de format des entrées

```yaml
fiche: <nom-fiche>
couvert:
  - code_crit  # commentaire bref localisant le critère dans la fiche
effleure:
  - code_crit  # idem
```

---

## Cartographies par fiche

### specification-technique.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — étape 1 (bête à cornes) + étape 3 (pieuvre)
  - RA-PROJET-C04-4/PROJ/2  # Solutions existantes — étape 2 (état de l'art)
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — étape 4 (critère/niveau/flexibilité)
  - RA-PROJET-C07-1/PROJ/2  # Outils GP (Gantt/PERT/WBS/livrables) — étape 5
  - RA-MEO-C10-3/MEO/1      # Outils de planification et gestion d'équipe — étape 5
effleure:
  - RA-PROJET-C04-4/PROJ/4  # Schéma bloc fonctionnel — mentionné étape 3, renvoi à concept
  - RA-PROJET-C04-4/PROJ/5  # Différencier écoconception/écodesign — étape 6 intégration transversale (fiche `ecodesign` à créer)
  - RA-PROJET-C04-4/PROJ/6  # Interactions entre blocs depuis CdCF — étape 4
  - RA-PROJET-C07-1/PROJ/1  # Tableau de bord et indicateurs — étape 5 matrice de risques
  - RA-MEO-C10-3/MEO/2      # Répartir les tâches — étape 5 WBS
  - RA-MEO-C08-6/MEO/1      # Transmettre informations équipe — section Équipe
```

**Bilan** : 5 Couvert + 6 Effleuré + 1 Hors scope = 11/57 critères touchés (après retrait `PROJ/3` reclassé hors scope). L'AA central `RA-PROJET-C04-4/PROJ` (CdCF) reste intégralement balayé hors hors scope (6/6 critères non hors-scope, dont 4 Couvert et 2 Effleuré).

---

### concept.md

```yaml
couvert:
  - RA-EEE-C03-2/EEE/1       # Choisir capteurs/actionneurs — étape 2 (matrice élec)
  - RA-EEE-C03-2/EEE/2       # Choisir contrôleurs — étape 2 (matrice élec)
  - RA-MME-C02-1/MME/1       # Choisir matériaux adaptés — étape 2 (branche méca) + étape 4
  - RA-PROJET-C04-4/PROJ/4   # Schéma bloc fonctionnel — étape 1 (décomposition)
  - RA-PROJET-C04-4/PROJ/6   # Définir interactions entre blocs — étapes 1 (FAST) et 3 (interfaces 2 à 2)
  - RA-ESE-C09-2/ESE/4       # Évaluer bénéfices d'amélioration — étape 2 (score écoconception pondéré)
  - RA-ESE-C09-2/ESE/5       # Sélectionner améliorations et justifier — étape 2 (matrice + arbitrage)
effleure:
  - RA-EEE-C03-2/EEE/3       # Sources d'énergie + dim alimentation — étape 2 + étape 4 (marge courant)
  - RA-PROJET-C03-3/EEE/2    # Analyser comportement sous-ensemble — étape 4 (pré-dim courant/dissipation, partiel)
  - RA-MME-C02-1/MME/4       # Identifier sollicitations mécaniques — étape 4 (pré-dim couple, flèche, transitoires)
  - RA-MME-C02-1/MME/6       # Caractéristiques mécaniques actionneurs — étape 2 + étape 4
  - RA-MME-C03-1/MME/2       # Note de calcul dimensionnement transmission — étape 4 (pré-dim méca, pas note formelle)
  - RA-MME-C03-1/MME/4       # Paramètres dynamiques du système — étape 4 (modèle simplifié transitoire)
  - RA-ESE-C09-2/ESE/3       # Proposer améliorations cycle de vie — étape 2 (écoconception comme critère)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP (Gantt/WBS) — section Équipe (revue inscrite au rétroplanning)
  - RA-MEO-C08-6/MEO/1       # Transmettre informations équipe — section Équipe (interfaces métiers)
```

**Bilan** : 7 Couvert + 9 Effleuré + 1 Hors scope = 16/57 critères touchés (après retrait `PROJ/3` reclassé hors scope). La phase concept couvre nettement plus large que spec-tech (16 vs 11) parce qu'elle mobilise les 3 disciplines (élec / méca / info) simultanément. Les effleurements EEE/MME sont attendus : ils renvoient implicitement vers les futures fiches phase 2 du wiki.

---

### preuve-de-concept.md

```yaml
couvert:
  - RA-PROJET-C05-3/PROJ/3   # Concevoir protocoles de test — étape 1 (triplet hypothèse/critère/protocole)
  - RA-PROJET-C05-3/PROJ/4   # Réaliser les tests — étape 3 (montage banc, exécution)
  - RA-PROJET-C05-3/PROJ/5   # Analyser les résultats des tests — étape 4 (confronter, synchroniser, statuer)
  - RA-PROJET-C05-3/PROJ/2   # Proposer axes d'amélioration prototype — étape 4 (statuer ajustement/retour amont, voies de résolution explorées)
  - RA-MEO-C08-6/MEO/3       # Routines travail collectif — étape 4 (synchronisation en réunion d'équipe complète, format tour de table)
effleure:
  - RA-PROJET-C04-4/PROJ/7   # Performances désirées — étape 1 (critère en miroir CdCF)
  - RA-EEE-C03-2/EEE/1       # Capteurs/actionneurs via moyens prototypage rapide (Arduino) — étape 2 (moyens mobilisés)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP (Gantt/WBS) — section Équipe (rétroplanning, intégration des aléas)
  - RA-PROJET-C07-1/PROJ/3   # Gérer le budget — étape 2 (validation acquisition exceptionnelle)
  - RA-ESE-C09-2/ESE/2       # Interpréter ACV — étape 4 + section Équipe (révision avec mesures réelles)
  - RA-ESE-C09-2/ESE/3       # Proposer améliorations cycle de vie — section Équipe (mesures réelles)
  - RA-MEO-C08-6/MEO/1       # Transmettre informations équipe — section Équipe
```

**Bilan** : 5 Couvert + 7 Effleuré + 1 Hors scope = 12/57 critères touchés (après retrait `PROJ/3` reclassé hors scope). Ratio Couvert plus équilibré que première proposition grâce à deux montées (PROJ/C05-3/2 axes d'amélioration et MEO/C08-6/3 routines collectives).

**Trou phase 2 identifié** : `RA-PROJET-C03-3/EEE/2` (Analyser le comportement d'un sous-ensemble d'un schéma jusqu'au composant) ressort de PoC — à traiter dans une fiche-tuto dédiée (nom proposé `analyse-de-schema-electronique`, ajout TODO).

---

### dossier-technique.md

```yaml
couvert:
  - RA-PROJET-C03-3/PROJ/4   # Adapter, modifier conception/matériaux/procédés et docs — étape 1 (propagation PoC→dossier)
  - RA-PROJET-C03-3/EEE/5    # Concevoir/réaliser carte électronique — étape 2 (schémas câblés + routage PCB)
  - RA-PROJET-C04-4/PROJ/6   # Définir interactions entre blocs — étape 2 (interfaces, revue cohérence inter-disciplines)
  - RA-EEE-C03-2/EEE/4       # Intégrer circuits électroniques (acquisition/traitement/transmission/conversion) — étape 2
  - RA-MME-C03-1/MME/3       # Créer assemblage CAO — étape 2 (plans cotés, fichiers STL/DXF/STEP)
  - RA-MME-C03-1/MME/5       # Réaliser nomenclature à partir d'une CAO — étape 3 (BOM agrégée)
  - RA-ESE-C09-2/ESE/1       # Mener l'ACV — étape 3 (ACV simplifiée sur BOM réelle)
  - RA-ESE-C09-2/ESE/2       # Interpréter ACV — étape 3 (contributeurs dominants identifiés)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP (Gantt/WBS) — étape 3 (rétroplanning approvisionnement)
  - RA-PROJET-C07-1/PROJ/3   # Gérer budget — étape 3 + étape 5 (consolidation, arbitrages, émission)
effleure:
  - RA-PROJET-C04-4/PROJ/4   # Schéma bloc fonctionnel — étape 2 (réutilisé en carte d'interfaces, central en concept)
  - RA-EEE-C03-2/EEE/3       # Sources d'énergie + dim alim — étape 3 (alim 12V/5A référencée BOM, dim central en concept)
  - RA-EEE-C03-2/EEE/5       # Concevoir système de commande par algorithme — étape 2 (archi logicielle UML/modules)
  - RA-MME-C02-1/MME/2       # Procédés d'assemblage — étape 2 (procédé fabrication spécifié)
  - RA-MME-C03-1/MME/6       # Optimiser conception — étape 2 (choix matériau et procédé argumenté)
  - RA-PROJET-C07-1/PROJ/1   # Tableau de bord indicateurs — étape 5 (tableau suivi commandes/livraisons)
  - RA-MEO-C08-6/MEO/1       # Transmettre infos équipe — étapes 1 et 4 (synthèse écrite, sous-dossiers ciblés)
```

**Bilan** : 10 Couvert + 7 Effleuré + 1 Hors scope = 17/57 critères touchés (après retrait `PROJ/3` reclassé hors scope). Reste le pic de couverture parmi les 4 trames cartographiées jusque-là (spec-tech 11, concept 16, PoC 12). Cohérent : dossier-technique consolide toutes les disciplines + budget + ACV + planning en simultané.

**Trous phase 2 identifiés** :
- `RA-EEE-C03-2/EEE/5` (commande par algorithme : logigramme/MAE/grafcet/chronogramme) — 4 fiches-tuto à créer, 1 par méthode (ajout TODO).
- `RA-MME-C03-1/MME/6` (optimisation conception) — **fermé 06/06** par la fiche `optimisation-mecanique` (notion MME interface, E→C).

**Trou phase 1 à vérifier sur `gestion-de-projet.md`** : `RA-MEO-C10-3/MEO/5` (proposer outils de prise de décision collective). Si absent là-bas aussi, vrai trou à corriger.

---

### integration-et-tests.md

```yaml
couvert:
  - RA-PROJET-C03-3/EEE/2    # Analyser comportement sous-ensemble jusqu'au composant — étape 2 (validation chaîne élec, niveau 0)
  - RA-PROJET-C03-3/PROJ/3   # Réaliser structure mécanique avec élec et énergie — étapes 1+2 (fabriquer + valider niveau 0). Amendement passe A 26/05 suite 3.
  - RA-PROJET-C03-3/PROJ/6   # Valider inter-opérabilité sous-ensembles réalisés — étape 3 (niveaux 2-3 composition + système complet)
  - RA-PROJET-C05-3/PROJ/1   # Réaliser tests d'intégration — étape 3 (cœur de l'étape, niveaux 1-4)
  - RA-PROJET-C05-3/PROJ/2   # Proposer axes d'amélioration prototype — étape 4 (bilan technique, pistes documentées)
  - RA-PROJET-C05-3/PROJ/3   # Concevoir protocoles de test — étape 3 (multi-couverture PoC + ici, tutoriel gonflé OK)
  - RA-PROJET-C05-3/PROJ/4   # Réaliser tests — étape 3 (multi-couverture PoC + ici)
  - RA-PROJET-C05-3/PROJ/5   # Analyser résultats des tests — étape 3 niveau 4 (multi-couverture)
effleure:
  - RA-PROJET-C04-4/PROJ/7   # Performances désirées — étape 3 niveau 4 (confrontation aux critères CdCF)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP — étape 4 (planning effectif vs rétroplanning de phase 1)
  - RA-PROJET-C07-1/PROJ/3   # Gérer budget — étape 4 (budget consommé vs prévu, multi-couverture)
  - RA-ESE-C09-2/ESE/2       # Interpréter ACV — étape 4 (ACV réelle vs estimée, 3ᵉ contexte)
  - RA-ESE-C09-2/ESE/3       # Proposer améliorations cycle de vie — étape 4 (multi-couverture)
  - RA-MEO-C08-6/MEO/3       # Routines travail collectif — étape 4 (REX en réunion dédiée, multi-couverture PoC)
hors_scope:
  - RA-PROJET-C04-4/PROJ/3   # Terminologie technique écrit/oral — étape 5 (rapport + soutenance). Évaluation transversale enseignants, pas contenu wiki.
  - RA-PROJET-C07-1/PROJ/4   # Participer aux tâches — évaluation transversale, hors périmètre tutoriel.
  - RA-PROJET-C07-1/PROJ/6   # Participer aux événements — évaluation transversale, hors périmètre tutoriel.
```

**Bilan** : 8 Couvert + 6 Effleuré + 3 Hors scope = 14 critères touchés sur 54 cartographiables (57 – 3 hors scope du référentiel détectés ici, amendement passe A 26/05 suite 3 : ajout PROJ-C03-3/PROJ/3). Moyenne stable parmi les trames du V après normalisation hors scope (spec-tech 11, concept 16, PoC 12, dossier-tech 17, integration 14).

**Reclassement majeur sortie de session** : `RA-PROJET-C03-3/EEE/2` (analyser comportement sous-ensemble jusqu'au composant) **était identifié trou phase 2** en PoC. Reclassé en Couvert ici car le critère est matériellement traité par l'étape 2 de la trame. La fiche-tuto `analyse-de-schema-electronique` conservée au TODO **avec motivation reformulée** : tuto pédagogique propre (popover depuis integration-et-tests étape 2), pas trou AA.

---

### gestion-de-projet.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/1   # Tableau de bord et indicateurs — bloc 2 (Gantt + matrice + registre engagements)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP (Gantt/PERT/WBS/livrables) — blocs 1 et 2 (cadence + outillage)
  - RA-PROJET-C07-1/PROJ/3   # Gérer le budget — bloc 2 (suivi budgétaire ajouté patch 26/05 suite 2 comme 6ᵉ outil canonique)
  - RA-MEO-C10-3/MEO/1       # Outils planification et gestion d'équipe — bloc 1 (cadence à 3 niveaux)
  - RA-MEO-C10-3/MEO/2       # Répartir les tâches — bloc 3 (animation, registre, qui fait quoi)
  - RA-MEO-C10-3/MEO/5       # Outils de prise de décision collective — bloc 3 (3 options + règle pour dépassement)
  - RA-MEO-C10-3/MEO/6       # Organiser documents partagés — bloc 2 (drive partagé, convention nommage)
  - RA-MEO-C08-6/MEO/1       # Transmettre informations équipe — bloc 3 (CR, traçabilité, alertes)
  - RA-MEO-C08-6/MEO/3       # Routines travail collectif — bloc 3 (point hebdo créneau fixe, animation, OdJ veille)
hors_scope:
  - RA-PROJET-C07-1/PROJ/4   # Participer aux tâches — évaluation transversale
  - RA-PROJET-C07-1/PROJ/5   # Être force de proposition — évaluation transversale (par analogie /4 et /6)
  - RA-PROJET-C07-1/PROJ/6   # Participer aux événements — évaluation transversale
```

**Bilan** : 9 Couvert + 0 Effleuré + 3 Hors scope = 12 critères touchés. **Densité Couvert exceptionnelle** — cohérent avec le rôle structurant de la trame transverse : tout y est central, rien n'est en passant.

**Trous phase 1 résolus en session** :
- `RA-MEO-C10-3/MEO/5` (proposer outils de prise de décision collective) : **vérifié présent** (bloc 3, 3 options + règle pour dépassement = outil structurant de décision).
- `RA-PROJET-C07-1/PROJ/3` (gérer le budget) : **patché en session** — ajout du suivi budgétaire comme 6ᵉ outil canonique dans le bloc 2, mention dans le livrable 2/3.

---

### ecoconception.md

```yaml
couvert:
  - RA-ESE-C09-2/ESE/3       # Proposer améliorations cycle de vie — bloc 2 (4 fronts : sobriété énergétique, durée de vie, démontabilité, sobriété logicielle)
  - RA-ESE-C09-2/ESE/4       # Évaluer bénéfices d'amélioration — bloc 1 (matrice éco-critères pondérée intégrée aux matrices de décision)
  - RA-ESE-C09-2/ESE/5       # Sélectionner améliorations et justifier — blocs 1 et 3 (matrice éco-critères + annexe dossier technique)
  - RA-PROJET-C03-3/PROJ/7   # Garantir la démontabilité du projet — bloc 2 (démontabilité PCB, connectique JST, carte modulaire)
effleure:
  - RA-ESE-C09-2/ESE/1       # Mener l'ACV — bloc 1 (cité et délégué explicitement aux cours collègues, central en dossier-tech)
  - RA-ESE-C09-2/ESE/2       # Interpréter ACV — bloc 1 (cadence d'évaluation aux jalons, multi-couverture)
  - RA-EEE-C03-2/EEE/3       # Sources d'énergie + dim alim — bloc 2 (dimensionnement juste besoin, multi-couverture)
```

**Bilan** : 4 Couvert + 3 Effleuré = 7 critères touchés. Densité plus faible que gestion-de-projet, cohérent : ecoconception est focalisée ESE + délègue beaucoup aux cours collègues.

**Critère bien attribué découvert en session** : `RA-PROJET-C03-3/PROJ/7` (Démontabilité du projet) n'apparaissait dans aucune fiche cartographiée antérieurement. Couvert ici via la démontabilité PCB / connectique JST / carte modulaire (bloc 2). Pas un trou.

---

### securite-et-qualite.md

```yaml
couvert: []
effleure:
  - RA-PROJET-C04-4/PROJ/1   # Analyse fonctionnelle — bloc 1 (FC sécurité-utilisateur dans la pieuvre, mention)
  - RA-PROJET-C03-3/EEE/5    # Concevoir/réaliser carte électronique — bloc 3 (Rev A/B sérigraphiée PCB, multi-couverture dossier-tech)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP (jalons, revues) — bloc 3 (plan de revues posé en jalons, multi-couverture spec-tech/GP)
  - RA-PROJET-C05-3/PROJ/3   # Concevoir protocoles de test — bloc 1 (tests sécurité au niveau 4 de qualification, multi-couverture PoC/integration)
  - RA-PROJET-C05-3/PROJ/4   # Réaliser tests — bloc 1 (tests sécurité en conditions réelles, multi-couverture PoC/integration)
```

**Bilan** : 0 Couvert + 5 Effleuré = 5 critères touchés. Densité la plus basse parmi les trames cartographiées (gestion-de-projet 12, ecoconception 7, securite-et-qualite 5).

**Insight structurant** : cette trame ne porte pratiquement **aucun critère AA central** du référentiel école I3.5/I3.6. C'est **attendu et cohérent**, pas une défaillance. La sécurité-qualité est un domaine de **posture / culture professionnelle** qui prépare les étudiants à des enjeux (sécurité produit AMDEC + arrêt d'urgence + parades, sécurité projet 3 règles + EPI + formations, qualité documentaire Git tags + revue de code + sérigraphie PCB + plan de revues, normatif pointu CE/EMC/ISO 12100 délégué) **non explicitement capturés par les AA techniques du référentiel**.

La fiche conserve toute sa valeur pédagogique (culture sécurité, traçabilité, articulation responsables) mais elle ne sert pas la cartographie AA. **À noter en synthèse globale** : le cadre AA n'est pas le seul critère de pertinence d'une fiche.

---

### afnor-nfx50-151.md

```yaml
couvert: []
effleure:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — norme citée comme cadre, outils délégués (Wikipédia)
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — triplet critère/niveau/flexibilité mentionné comme apport de la norme
```

**Bilan** : 0 Couvert + 2 Effleuré = 2/57 critères touchés. Fiche-stub purement référentielle (cadre méthodo cité, norme payante AFNOR). Pas un trou : le contenu pédagogique est porté par les fiches outils (bête à cornes, pieuvre, fonction, caractériser-une-exigence).

---

### bete-a-cornes.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — bête à cornes = 1er geste d'AF (à qui / sur quoi / dans quel but)
effleure: []
```

**Bilan** : 1 Couvert + 0 Effleuré = 1/57 critère touché. Fiche-notion mono-critère par construction — outil canonique d'expression du besoin, premier amont de l'AF. Multi-couverture avec specification-technique, cahier-des-charges-fonctionnel, pieuvre et fonction — l'AA `RA-PROJET-C04-4/PROJ/1` est porté collectivement par cet ensemble.

---

### cahier-des-charges-fonctionnel.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — section 4 « cœur NF X50-151 » du CdCF école
  - RA-PROJET-C04-4/PROJ/2  # Solutions existantes — section 3 état de l'art (complément école)
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — chaque exigence chiffrée par triplet critère/niveau/flexibilité
effleure:
  - RA-PROJET-C04-4/PROJ/4  # Schéma bloc fonctionnel — cité dans la matière agrégée, renvoi à phase concept
  - RA-PROJET-C04-4/PROJ/5  # Différencier écoconception/écodesign — écoconception transversale mentionnée + piège « écoconception en addendum »
  - RA-PROJET-C04-4/PROJ/6  # Interactions entre blocs — issues de la pieuvre agrégée en section 4
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — section 5 planification (WBS, Gantt, matrice de risques)
hors_scope:
  - RA-PROJET-C04-4/PROJ/3  # Terminologie technique écrit/oral — le CdCF mobilise terminologie technique mais évaluation transversale enseignants
```

**Bilan** : 3 Couvert + 4 Effleuré + 1 Hors scope = 8/57 critères touchés. Document agrégateur de la phase 1 — couvre l'essentiel de l'AA `RA-PROJET-C04-4` (CdCF) plus pointes vers GP et planification. Multi-couverture forte avec specification-technique (qui produit la matière) et bête à cornes / pieuvre / fonction (qui portent les outils méthodo amont).

---

### fonction.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — typologie FP/FS/FC = grille structurante de l'AF
effleure:
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — triplet critère/niveau/flexibilité mentionné comme aval
```

**Bilan** : 1 Couvert + 1 Effleuré = 2/57 critères touchés. Fiche-notion étroite (typologie + format d'énoncé). Multi-couverture avec pieuvre, bête à cornes et CdCF — la typologie FP/FS/FC est mobilisée à travers tout l'outillage de l'AF.

---

### pieuvre.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — pieuvre = outil canonique d'AF (recense fonctions face aux milieux)
  - RA-PROJET-C04-4/PROJ/6  # Interactions entre blocs — la pieuvre formalise les interactions système / milieux
effleure:
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — chaque fonction tracée renvoie au triplet aval
```

**Bilan** : 2 Couvert + 1 Effleuré = 3/57 critères touchés. Fiche-notion approfondie (post-25/05 suite 2). Multi-couverture sur `RA-PROJET-C04-4/PROJ/1` avec bête à cornes et fonction. Cas net où la fiche-notion porte le contenu, pas la trame (spec-tech effleure et renvoie).

---

### gantt.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — Gantt explicite dans la liste « Gantt, PERT, WBS, livrables »
effleure:
  - RA-PROJET-C07-1/PROJ/1  # Tableau de bord et indicateurs — Gantt = outil de pilotage et support de revue
  - RA-MEO-C10-3/MEO/1      # Outils planification et gestion d'équipe — multi-couverture avec spec-tech et GP
```

**Bilan** : 1 Couvert + 2 Effleuré = 3/57 critères touchés. Fiche-tuto outil de planification. Multi-couverture forte avec wbs / jalons / retroplanning sur l'AA `RA-PROJET-C07-1` — chaque outil porte un morceau de l'AA.

---

### jalons.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — jalons = « livrables » explicites dans la liste « Gantt, PERT, WBS, livrables »
effleure:
  - RA-MEO-C10-3/MEO/1      # Outils planification — jalons structurent la cadence projet
```

**Bilan** : 1 Couvert + 1 Effleuré = 2/57 critères touchés. Fiche-notion centrale du couple jalons / retroplanning — pas d'outil de planification sans points fixes.

---

### retroplanning.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — rétroplanning = méthode de planification à rebours (planification listée implicitement dans « livrables »)
effleure:
  - RA-MEO-C10-3/MEO/1      # Outils planification — rétroplanning = outil de planification équipe
```

**Bilan** : 1 Couvert + 1 Effleuré = 2/57 critères touchés. Fiche-tuto qui matérialise la pose des jalons en calendrier vivant.

---

### wbs.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — WBS explicite dans la liste « Gantt, PERT, WBS, livrables »
effleure:
  - RA-MEO-C10-3/MEO/1      # Outils planification — WBS = socle amont des outils de planification
  - RA-MEO-C10-3/MEO/2      # Répartir les tâches — WBS = référence pour la répartition du travail
```

**Bilan** : 1 Couvert + 2 Effleuré = 3/57 critères touchés. Fiche-notion socle des outils de planification (WBS → rétroplanning → Gantt).

---

### matrice-de-decision.md

```yaml
couvert: []
effleure:
  - RA-ESE-C09-2/ESE/4      # Évaluer bénéfices d'amélioration — écoconception entre comme critère pondéré dans la matrice
  - RA-ESE-C09-2/ESE/5      # Sélectionner améliorations et justifier — la matrice trace l'arbitrage écrit
  - RA-EEE-C03-2/EEE/1      # Choisir capteurs/actionneurs — matrice appliquée par sous-système élec
  - RA-EEE-C03-2/EEE/2      # Choisir contrôleurs — idem
  - RA-MME-C02-1/MME/1      # Choisir matériaux adaptés — idem côté méca
```

**Bilan** : 0 Couvert + 5 Effleuré = 5/57 critères touchés. **Insight structurant** : la matrice de décision est un **outil pivot transverse** — elle ne porte aucun critère AA en propre, mais elle est l'outil par lequel passent les critères de choix EEE/MME/ESE en phase concept. Pas un trou, une caractéristique. Multi-couverture potentielle quand les fiches-tuto phase 2 EEE/MME seront produites (chaque fiche disciplinaire mobilisera la matrice).

---

### matrice-de-risques.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/1  # Tableau de bord et indicateurs — la matrice de risques est l'indicateur d'aléas du projet
effleure:
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — matrice de risques mentionnée dans le sillage Gantt/WBS/livrables comme outil de pilotage
```

**Bilan** : 1 Couvert + 1 Effleuré = 2/57 critères touchés. Fiche-notion outil de pilotage projet. Multi-couverture avec gestion-de-projet (où la matrice est intégrée à la cadence) et avec spec-tech (où elle est posée la première fois en étape 5).

---

### schema-bloc-fonctionnel.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/4  # Schéma bloc fonctionnel — objet central de la fiche (capteurs/actionneurs/effecteurs/contrôleurs, boucle ouverte/fermée)
  - RA-PROJET-C04-4/PROJ/6  # Définir interactions entre blocs depuis CdCF — méthode en 5 questions partant du CdCF
effleure:
  - RA-EEE-C03-2/EEE/1      # Choisir capteurs / technologie actionneurs — capteurs et actionneurs identifiés dans le schéma
  - RA-EEE-C03-2/EEE/2      # Choisir contrôleurs — contrôleur identifié dans le schéma
  - RA-EEE-C03-2/EEE/4      # Intégrer circuits électroniques (acquisition/traitement/transmission) — sous-fonctions élec représentées
```

**Bilan** : 2 Couvert + 3 Effleuré = 5/57 critères touchés. **Seule fiche-notion EEE existante en phase 1** — porte 2 critères AA centraux (PROJ/4 et PROJ/6) et effleure 3 critères EEE. Multi-couverture avec concept (étape 1 décomposition) et dossier-technique (étape 2 carte d'interfaces).

---

### mind-map.md

```yaml
couvert: []
effleure:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — recensement des milieux en amont de la pieuvre (échafaudage, aucune fonction tracée)
```

**Bilan** : 0 Couvert + 1 Effleuré = 1 critère touché. Fiche-notion **échafaudage** : outil de brainstorming amont qui alimente la pieuvre (milieux) ou la matrice de décision (solutions), sans porter de critère central. `aa: []` légitime — sa valeur tient à ce qu'elle alimente, pas à elle-même.

---

### fast.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — FAST = diagramme d'AF (chaîne POURQUOI/COMMENT/QUAND), objet central
effleure:
  - RA-PROJET-C04-4/PROJ/6  # Interactions entre blocs — axe QUAND (fonctions simultanées), chaînage fonctionnel
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — cas particulier (FAST sur fonctions critiques liées à la flexibilité F0/F1 du CdCF)
```

**Bilan** : 1 Couvert + 2 Effleuré = 3 critères touchés. Fiche-tuto outil d'AF de l'étape 1 du concept. `PROJ/1` en multi-couverture avec bete-a-cornes, fonction, pieuvre et decomposition-fonctionnelle (statut dominant C inchangé). Prépare les feuilles → lignes de matrice de décision (étape 2).

---

### ecodesign.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/5  # Différencier écoconception/écodesign — objet central (tableau d'axes + complémentarité + faux ami anglais)
effleure: []
```

**Bilan** : 1 Couvert + 0 Effleuré = 1 critère touché. Fiche-notion mono-critère qui **fait passer `RA-PROJET-C04-4/PROJ/5` d'Effleuré (specification-technique étape 6, cahier-des-charges-fonctionnel) à Couvert** : la distinction écoconception/écodesign devient l'objet central d'une fiche dédiée. **Amendement Passe A à appliquer** (PROJ/5 : E → C, voir stats globales). Multi-couverture avec specification-technique et cahier-des-charges-fonctionnel (désormais en effleurement).

---

### matrice-eco-criteres.md

```yaml
couvert:
  - RA-ESE-C09-2/ESE/4  # Évaluer bénéfices d'amélioration — objet central (5 critères env. notés sur N solutions, enchâssés dans la matrice de décision)
effleure:
  - RA-ESE-C09-2/ESE/5  # Sélectionner améliorations et justifier — la pondération du bloc éco trace l'arbitrage (central en ecoconception/concept)
```

**Bilan** : 1 Couvert + 1 Effleuré = 2 critères touchés. Fiche-notion outil d'évaluation environnementale de l'écoconception (prérequis : matrice-de-decision). `ESE/4` et `ESE/5` déjà traités par concept + ecoconception (multi-couverture, statut dominant inchangé) — la fiche en porte l'outil dédié.

---

### bom.md

```yaml
couvert:
  - RA-MME-C03-1/MME/5     # Réaliser nomenclature à partir d'une CAO — objet central (consolidation des nomenclatures des 3 disciplines)
  - RA-PROJET-C07-1/PROJ/3  # Gérer le budget — étape 4 (total HT confronté à l'enveloppe, rétroaction concept si dépassement structurel)
effleure:
  - RA-ESE-C09-2/ESE/1     # Mener l'ACV — l'ACV simplifiée se calcule sur la BOM réelle (ACV conduite en dossier-technique étape 3)
  - RA-PROJET-C07-1/PROJ/1  # Tableau de bord et indicateurs — étape 5 (BOM = source des bons de commande, suivi appro)
```

**Bilan** : 2 Couvert + 2 Effleuré = 4 critères touchés. Fiche-tuto de l'étape 3 du dossier technique. `MME/5` et `PROJ/3` déjà Couverts par dossier-technique (multi-couverture, statut dominant inchangé) — la BOM est l'artefact qui matérialise la nomenclature CAO et l'engagement budgétaire.

---

### amdec.md

```yaml
couvert: []
effleure:
  - RA-PROJET-C05-3/PROJ/1  # Réaliser tests d'intégration — la criticité hiérarchise les tests de sécurité niveau 4 (multi-couverture integration-et-tests)
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — l'AMDEC fonctionnelle s'appuie sur les fonctions techniques issues de la décomposition / du FAST
```

**Bilan** : 0 Couvert + 2 Effleuré = 2 critères touchés. Fiche-tuto **méthode de sûreté de fonctionnement** — comme `securite-et-qualite`, elle relève d'un domaine de posture/méthode non capturé par un AA technique central du référentiel. `aa: []` légitime : la trame sécurité-qualité porte l'intégration au cycle du projet, l'AMDEC en porte la méthode.

---

### hub/index.md

```yaml
couvert: []
effleure: []
```

**Bilan** : 0 Couvert + 0 Effleuré = 0/57 critères touchés directement. **Page d'index méta** — recense les 5 phases et 3 transverses, ne porte aucun contenu pédagogique au sens AA. Tous les critères AA sont portés par les fiches-trame et fiches-notion en aval. Cohérent avec son rôle de point d'entrée. Comparable à l'insight `securite-et-qualite` (0 critère central) mais pour une raison différente : le hub est méta-structure, pas posture professionnelle.

---

## Cartographies Phase 2 — EEE / info embarquée

> Cartographie des fiches produites en **phase 2 elec/info** (squelette transverse + modules MCU Arduino/ESP32), depuis le gel de la passe B phase 1. **85 fiches** dans `content/fiches/eee/` (hors `schema-bloc-fonctionnel`, phase 1, déjà cartographiée ; +4 pour le module simulation ; +6 pour la phase 3 mesure/débogage/PCB, 06/06 suite 3 ; +1 `alimentation-electronique`, 06/06 suite 4). Front matters `aa:` **vérifiés un par un**. Blocs individuels pour les fiches porteuses d'AA, blocs groupés pour les grappes homogènes (PROJ/5 ; `aa: []`).

### analyse-de-schema-electronique.md

```yaml
couvert:
  - RA-PROJET-C03-3/EEE/1   # Identifier les composants d'un schéma et leurs rôles — objet central (anatomie fonctionnelle + schéma commenté). FERME le NC EEE/1.
  - RA-PROJET-C03-3/EEE/2   # Analyser le comportement d'un sous-ensemble jusqu'au composant — lecture signal par signal (multi-couverture integration-et-tests, dominant C inchangé)
```

**Bilan** : 2 C. Fiche-tuto transverse. **Reclassement majeur** : fait passer `RA-PROJET-C03-3/EEE/1` de **NC → C** (seul critère EEE jusque-là sans aucune fiche).

### Module `simulation` (hub + 3 tutos-outils) — `eee/simulation/`

```yaml
simulation-electronique.md (hub):
  couvert:
    - RA-PROJET-C03-3/EEE/3   # Effectuer une simulation — méthode + 3 familles d'analyse (DC / transitoire / fréquentiel). FERME le NC EEE/3.
    - RA-PROJET-C03-3/EEE/4   # Interpréter les résultats — section dédiée (lire / confronter / décider). FERME le NC EEE/4.

# Tutos-outils (AA porté par le hub, C18) :
falstad.md:  aa: []           # simulateur analogique navigateur (comprendre, explorer)
ltspice.md:  aa: []           # simulateur SPICE (dimensionnement précis)
wokwi.md:
  couvert:
    - RA-PROJET-C03-3/PROJ/5   # exécute le code MCU (comme tinkercad) — rejoint la grappe PROJ/5
```

**Bilan** : 4 fiches. **Reclassement majeur** : le hub `simulation-electronique` ferme `EEE/3`+`/4` (NC→C) — **domaine EEE désormais complet (9C/1E/0NC)**. `wokwi` rejoint la grappe PROJ/5 (41 fiches). Fritzing tenu hors hub (outil de représentation/câblage, pas de simulation).

### Module `algorithme` (hub + 4 représentations) — `RA-EEE-C03-2/EEE/5`

```yaml
# algorithme (hub) · logigramme · machine-a-etats · grafcet · chronogramme
couvert:
  - RA-EEE-C03-2/EEE/5   # Concevoir un système de commande par algorithme — 1 fiche par représentation (C16 : pas de fiche regroupante)
```

**Bilan** : 5 fiches, chacune Couvre `EEE/5`. **Reclassement** : fait passer `RA-EEE-C03-2/EEE/5` de **E → C** (était effleuré en dossier-technique étape 2, archi logicielle UML). `arduino-machine-a-etats` porte aussi ce critère (voir grappe Arduino) — incarnation famille du motif `switch(etat)`.

### Briques & hubs transverses MCU porteurs d'AA

```yaml
microcontroleur.md (hub):
  couvert:
    - RA-EEE-C03-2/EEE/2   # Choisir un contrôleur — panorama des familles + aide au choix (multi-couverture concept, dominant C inchangé)

gpio.md:
  couvert:
    - RA-EEE-C03-2/EEE/4   # Intégrer circuits (facette acquisition / E-S) — multi-couverture dossier-technique

niveaux-de-tension.md:
  couvert:
    - RA-EEE-C03-2/EEE/4   # Intégrer circuits (compatibilité des niveaux) — multi-couverture
  effleure:
    - RA-EEE-C03-2/EEE/1   # Choisir capteurs/actionneurs — la tension de fonctionnement comme critère de choix

lire-une-datasheet.md:
  effleure:
    - RA-EEE-C03-2/EEE/1   # Choisir — la datasheet alimente le choix (central concept)
    - RA-EEE-C03-2/EEE/3   # Sources énergie + dim alim — Vin / courant / thermique pour dimensionner
    - RA-EEE-C03-2/EEE/4   # Intégrer circuits — brochage, niveaux logiques
    - RA-MME-C02-1/MME/6   # Caractéristiques mécaniques actionneurs — lire la datasheet d'un actionneur (central concept)

bus-de-communication.md (hub):
  couvert:
    - RA-EEE-C03-2/EEE/4   # Intégrer circuits (facette transmission) — multi-couverture

techno-sans-fil.md (hub):
  couvert:
    - RA-EEE-C03-2/EEE/4   # Intégrer circuits (facette transmission sans-fil) — multi-couverture
```

**Bilan** : 6 fiches, contribution majoritairement en **multi-couverture** sur des critères EEE déjà Couverts ailleurs (statut dominant inchangé). Renforce nettement `EEE/4` (intégration de circuits), désormais porté par 5 fiches phase 2 + dossier-technique. `niveaux-de-tension` et `lire-une-datasheet` réoutillent `EEE/1` et `EEE/3` en effleuré (C20).

### Grappe PROJ/5 — programmation (`RA-PROJET-C03-3/PROJ/5`)

```yaml
# 41 fiches portent RA-PROJET-C03-3/PROJ/5 (« Programmer ou paramétrer un contrôleur numérique »)
#
# Coverers CENTRAUX (objet = écrire / structurer le programme) :
#   Module cpp (8) : cpp (hub) · cpp-execution · cpp-structure · cpp-types · cpp-portee
#                    · cpp-conditions · cpp-boucles · cpp-logs
#   Module Arduino programmation (30) : tinkercad + arduino-{afficheur, bibliotheques,
#     capteur-analogique, capteur-numerique, debug, deep-sleep, eeprom, entree-tor, gpio,
#     gpio-boot, i2c, interruptions, machine-a-etats, memoire, module, moteur-cc,
#     moteur-pas-a-pas, pid, programmation-non-bloquante, serie, servomoteur, shield,
#     sortie-pwm, sortie-tor, spi, temporisation, timers, uart, watchdog}
#
# Marqueurs de transversalité (transverses) : firmware · manipulation-de-bits
#
# Module simulation (1) : wokwi (simulateur MCU, exécute le code)
#
# Note : arduino-machine-a-etats porte EN PLUS RA-EEE-C03-2/EEE/5 (voir module algorithme).
couvert:
  - RA-PROJET-C03-3/PROJ/5
```

**Bilan** : **41 fiches** portent PROJ/5. **Reclassement majeur** : `RA-PROJET-C03-3/PROJ/5` passe de **NC → C** — « programmer un contrôleur » est désormais l'objet central du module `cpp` (le langage) et des tutos `arduino-*` de programmation. C'est le marqueur de transversalité C20 le plus large du wiki.

### Fiches sans critère AA (`aa: []`) — 22 fiches

```yaml
# Hubs famille : arduino · esp32
# Rampe / matériel : arduino-prise-en-main · arduino-alimentation
# Briques notion MCU : processeur · memoire · entree-sortie · adc · pwm · deep-sleep
#                      · systeme-d-exploitation · interruption · timer · fonction-informatique
# Popovers bus : uart · i2c · spi
# Popovers sans-fil : wifi · ble · zigbee · xbee · lora
couvert: []
effleure: []
```

**Bilan** : 22 fiches sans AA propre. `aa: []` légitime (C18 : l'AA est porté collectivement par le hub / la fiche d'application). `interruption` et `timer` sont des notions transverses dont l'AA est porté par leurs tutos d'application (`arduino-interruptions`, `arduino-timers` → PROJ/5).

---

### Fiches méca / transverses (06/06)

```yaml
schema-cinematique.md (mme):
  couvert:
    - RA-MME-C02-1/MME/5   # Schéma cinématique — objet central (liaisons, ddl, exemple bras 3 axes). FERME le NC MME/5.

chaine-energie.md (eee, transverse):
  couvert: []
  effleure: []
```

**Bilan** : 2 fiches (créées 06/06, fil rouge bras 3 axes). `schema-cinematique` fait passer `RA-MME-C02-1/MME/5` de **NC → C** (frontière interface : lecture + renvoi cours mécanique). `chaine-energie` est une fiche d'**ambition** (modèle des deux chaînes, complément de `schema-bloc-fonctionnel`) — `aa: []` légitime, pas de critère central. Les deux ferment les liens rouges `[[schema-cinematique]]` et `[[chaine-energie]]` du hub.

---

### Phase 3 — instruments de mesure, débogage, PCB (06/06 suite 3)

> 6 fiches « squelette pro » (cœur EEE, MVP étendu). Toutes en **multi-couverture (C20)** ou `aa: []` (porté par le hub, C45) → **tally global inchangé**.

```yaml
# Module mesure (eee/mesure/) — hub + 2 tutos-outils :
instruments-de-mesure.md (hub):
  couvert:
    - RA-PROJET-C03-3/EEE/2    # Analyser le comportement réel par la mesure (multi-couv. integration-et-tests + analyse-de-schema ; dominant C inchangé)
    - RA-PROJET-C05-3/PROJ/5   # Analyser les résultats des tests — les instruments fournissent les relevés (multi-couv. PoC + integration)
multimetre.md:   aa: []        # tuto-outil, AA porté par le hub (C45)
oscilloscope.md: aa: []        # tuto-outil, AA porté par le hub (C45)

# Débogage embarqué (eee/mcu/, transverse [T]) :
debugger-embarque.md:
  couvert:
    - RA-PROJET-C03-3/PROJ/5   # Déboguer = mettre au point le programme (multi-couv. grappe PROJ/5)

# Module PCB (eee/pcb/) — hub + tuto-outil :
pcb.md (hub):
  couvert:
    - RA-PROJET-C03-3/EEE/5    # Concevoir/réaliser une carte — 1re fiche DÉDIÉE (multi-couv. dossier-technique étape 2 ; dominant C inchangé)
kicad.md:  aa: []              # tuto-outil, AA porté par le hub (C45)
```

**Bilan** : 6 fiches, **aucun reclassement**. `EEE/2`, `EEE/5`, `PROJ/5` et `RA-PROJET-C05-3/PROJ/5` étaient déjà Couverts ailleurs → multi-couverture C20 (statut dominant inchangé). `pcb` devient la **fiche dédiée** d'`EEE/5` (jusque-là porté en sous-section de `dossier-technique`). **Tally global inchangé : 43 C / 7 E / 4 HS / 3 HS-D / 0 NC (75 %).**

---

### alimentation-electronique (06/06 suite 4)

> Fiche transverse EEE [T] (`eee/`, type notion). 5 sections (réguler / découpler / router les masses / CV-CC / protéger) + exemple incarné bras 3 axes + 3 SVG conceptuels. **Reclassement réel** (≠ Phase 3, qui était tout en multi-couverture).

```yaml
alimentation-electronique.md (eee, transverse [T]):
  couvert:
    - RA-EEE-C03-2/EEE/3    # Sélectionner sources d'énergie + dimensionner l'alimentation — OBJET CENTRAL. Reclassement E → C.
  effleure:
    - RA-PROJET-C03-3/EEE/5  # Concevoir/réaliser carte — facette conversion statique de l'énergie (dédié par pcb, dominant C inchangé)
```

**Bilan** : 1 fiche. **Reclassement** : `RA-EEE-C03-2/EEE/3` passe de **E → C** — était le **seul Effleuré du domaine EEE** (traité en diffus dans concept / dossier-technique / ecoconception / `lire-une-datasheet`, sans fiche centrale), désormais objet central d'une fiche dédiée. **Domaine EEE refermé : 10 C / 0 E.** Premier vrai reclassement depuis le gel de la passe B (les fiches Phase 2/3 étaient toutes en multi-couverture C20). **Nouveau tally global : 44 C / 6 E / 4 HS / 3 HS-D / 0 NC (77 %).**

---

### optimisation-mecanique (06/06)

> Fiche notion MME tenue en **frontière interface** (`mme/`), décalque de `schema-cinematique`. Ferme le dernier item MME ouvert. **Reclassement réel.**

```yaml
optimisation-mecanique.md (mme, notion interface):
  couvert:
    - RA-MME-C03-1/MME/6    # Optimiser la conception — OBJET CENTRAL (leviers à l'échelle système : matériau/procédé raisonné, allègement géométrique, réduction du nombre de pièces ; démarche itérative + critères). Dimensionnement fin (FEA, topologie) renvoyé au cours méca. Reclassement E → C.
```

**Bilan** : 1 fiche + 1 SVG conceptuel (avant/après allègement). **Reclassement** : `RA-MME-C03-1/MME/6` passe de **E → C** — était Effleuré (dossier-technique étape 2, choix matériau/procédé argumenté) avec fiche prévue ; désormais objet central d'une fiche dédiée tenue en frontière interface (raisonnement d'arbitrage système, renvoi cours méca pour le calcul). Distinct de ses frères de RA `C03-1/2` et `/4` (actés *E terminal par délégation* le 06/06) et de `RA-MME-C02-1/MME/6` (caractéristiques actionneurs, délégué). **MME refermé : 5 C / 5 E / 0 HS / 1 HS-D / 0 NC.** **Nouveau tally global : 45 C / 5 E / 4 HS / 3 HS-D / 0 NC (79 %).**

---

### Rattachements AA front-matter (review 12/06, reportés 13/06)

> 5 fiches-notion PROJ/MEO/ESE ont reçu leur champ `aa:` en front matter lors de la relecture du socle MCU + index (12/06). Toutes en **multi-couverture** : chaque critère est déjà Couvert ailleurs → **statut dominant inchangé**, **tally global inchangé (45 C / 5 E / 4 HS / 3 HS-D / 0 NC, 79 %)**.

```yaml
mind-map.md (proj):            aa: RA-PROJET-C04-4/PROJ/1   # AF amont — multi-couv. spec-tech / CdCF / bete-a-cornes / fonction / pieuvre (C). Harmonise le bloc plus haut qui notait aa:[] (échafaudage).
matrice-de-decision.md (proj): aa: []   # ✓ résolu 13/06 (relecture ESE) : PROJ/6 « définir les interactions entre blocs » confirmé mal collé pour une matrice d'arbitrage → retiré du front matter, aa: [] rétabli (« outil pivot transverse »). Réaligne sur la cartographie (couvert: []) ; PROJ/6 reste C via concept / schema-bloc-fonctionnel / dossier-technique. Tally inchangé (45 C / 5 E / 4 HS / 3 HS-D / 0 NC, 79 %).
acv-simplifiee.md (proj):      aa: RA-ESE-C09-2/ESE/1, /2   # mener + interpréter l'ACV — multi-couv. dossier-technique (C)
archivage-projet.md (meo):     aa: RA-MEO-C10-3/MEO/6       # organiser documents partagés — multi-couv. gestion-de-projet bloc 2 (C)
revue-de-code.md (meo):        aa: RA-MEO-C08-6/MEO/3       # routines travail collectif — multi-couv. PoC + gestion-de-projet (C)
```

**Bilan** : 5 fiches, 0 reclassement, tally inchangé. Les blocs `mind-map` (aa:[]) et `matrice-de-decision` (0 C / 5 E) plus haut **précèdent** ces rattachements ; l'attribution `aa:` du 12/06 prime côté Quartz, la cartographie granulaire reste indicative.

---

## Passe A — Cartographie inverse par domaine

> Croisement des 21 cartographies fiche-par-fiche (passe B) pour identifier, pour chaque critère du référentiel, l'ensemble des fiches qui le portent. Permet de repérer trous phase 1, trous phase 2 prévus, et amendements à apporter à la passe B.
>
> Légende : **C** = Couvert / **E** = Effleuré / **HS** = Hors scope / **NC** = Non couvert (= absent des fiches existantes).

### EEE (10 critères)

**RA-PROJET-C03-3 [EEE]** — *Analyser / Fabriquer un sous-ensemble fonctionnel électrique et électronique*

- **/1** *Identifier composants schéma et rôles* — **C** : `analyse-de-schema-electronique` (objet central). *(était NC — fermé phase 2)*
- **/2** *Analyser comportement sous-ensemble jusqu'au composant* — **C** : integration-et-tests étape 2 (chaîne élec niveau 0). **E** : concept étape 4 (pré-dim partiel), `analyse-de-schema-electronique` (lecture signal par signal).
- **/3** *Effectuer simulation système électronique* — **C** : `simulation-electronique` (hub, méthode + 3 familles d'analyse). *(était NC — fermé phase 2)*
- **/4** *Interpréter résultats simulation* — **C** : `simulation-electronique` (hub, section « Interpréter les résultats »). *(était NC — fermé phase 2)*
- **/5** *Concevoir/réaliser carte électronique* — **C** : dossier-technique étape 2 (schémas câblés + routage PCB). **E** : securite-et-qualite bloc 3 (Rev A/B sérigraphie).

**RA-EEE-C03-2 [EEE]** — *Mettre en œuvre démarche de conception système contrôle/commande*

- **/1** *Choisir capteurs/actionneurs via prototypage rapide* — **C** : concept étape 2 (matrice élec). **E** : preuve-de-concept étape 2 (Arduino), schema-bloc-fonctionnel, matrice-de-decision, `niveaux-de-tension`, `lire-une-datasheet`.
- **/2** *Choisir contrôleurs* — **C** : concept étape 2, `microcontroleur` (hub, aide au choix). **E** : schema-bloc-fonctionnel, matrice-de-decision.
- **/3** *Sources d'énergie + dim alim* — **C** : `alimentation-electronique` (objet central : réguler / découpler / router les masses / CV-CC / protéger). **E** : concept étapes 2+4, dossier-technique étape 3, ecoconception bloc 2, `lire-une-datasheet` (multi-couv.). *(était E — fermé 06/06 suite 4)*
- **/4** *Intégrer circuits électroniques (acquisition/traitement/transmission/conversion)* — **C** : dossier-technique étape 2, `gpio`, `niveaux-de-tension`, `bus-de-communication`, `techno-sans-fil`, `lire-une-datasheet`. Massivement multi-couvert phase 2. **E** : schema-bloc-fonctionnel.
- **/5** *Concevoir système de commande par algorithme* — **C** : module `algorithme` (hub + `logigramme` + `machine-a-etats` + `grafcet` + `chronogramme`, 1 fiche/méthode C16) + `arduino-machine-a-etats`. **E** : dossier-technique étape 2 (archi UML). *(était E — fermé phase 2)*

**Bilan EEE** : **10 C + 0 E + 0 HS + 0 NC** sur 10 critères (vs 5C/2E/3NC à la passe A phase 1). **Domaine EEE entièrement couvert** : le hub `simulation-electronique` ferme les 2 derniers NC (`EEE/3`+`/4`). `RA-EEE-C03-2/EEE/3` (sources/dim alim) est désormais **Couvert** : fiche dédiée `alimentation-electronique` créée le 06/06 (suite 4). Cœur disciplinaire couvert par le squelette transverse + module algorithme + modules MCU + simulation.

---

### ESE (5 critères)

**RA-ESE-C09-2 [ESE]** — *Évaluer et sélectionner des améliorations dans une démarche d'écoconception*

- **/1** *Mener l'ACV* — **C** : dossier-technique étape 3 (ACV simplifiée sur BOM réelle). **E** : ecoconception bloc 1 (cadre + délégation).
- **/2** *Interpréter ACV* — **C** : dossier-technique étape 3 (contributeurs dominants). **E** : preuve-de-concept étape 4, integration-et-tests étape 4, ecoconception bloc 1.
- **/3** *Proposer améliorations cycle de vie* — **C** : ecoconception bloc 2 (4 fronts : sobriété/durée/démontabilité/sobriété logicielle). **E** : concept étape 2, preuve-de-concept Équipe, integration-et-tests étape 4.
- **/4** *Évaluer bénéfices d'amélioration* — **C** : concept étape 2 (matrice éco-critères), ecoconception bloc 1. **E** : matrice-de-decision.
- **/5** *Sélectionner améliorations et justifier* — **C** : concept étape 2, ecoconception blocs 1 et 3. **E** : matrice-de-decision.

**Bilan ESE** : 5 C + 0 NC sur 5 critères. **Domaine entièrement couvert phase 1**. Multi-couverture systématique sur tous les critères (3 fiches en moyenne par critère). Pas de fiche phase 2 ESE prévue ni nécessaire à ce stade.

---

### MEO (6 critères)

**RA-MEO-C10-3 [MEO]** — *Utiliser des outils d'animation d'équipe en présentiel et à distance*

- **/1** *Outils planification et gestion d'équipe* — **C** : specification-technique étape 5, gestion-de-projet bloc 1. **E** : gantt, jalons, retroplanning, wbs.
- **/2** *Répartir les tâches* — **C** : gestion-de-projet bloc 3. **E** : specification-technique étape 5, wbs.
- **/5** *Outils de prise de décision collective* — **C** : gestion-de-projet bloc 3 (3 options + règle pour dépassement).
- **/6** *Organiser documents partagés* — **C** : gestion-de-projet bloc 2 (drive partagé + convention de nommage).

**RA-MEO-C08-6 [MEO]** — *Développer conditions favorables aux interactions et engagement en équipe*

- **/1** *Transmettre informations équipe* — **C** : gestion-de-projet bloc 3. **E** : concept Équipe, preuve-de-concept Équipe, dossier-technique étapes 1+4, specification-technique Équipe.
- **/3** *Routines travail collectif* — **C** : preuve-de-concept étape 4 (tour de table), gestion-de-projet bloc 3 (point hebdo). **E** : integration-et-tests étape 4 (REX).

**Bilan MEO** : 6 C + 0 NC sur 6 critères. **Domaine entièrement couvert phase 1**. Multi-couverture forte (5 fiches en moyenne par critère). Pas de fiche phase 2 MEO prévue ni nécessaire.

---

### MME (11 critères)

**RA-MME-C02-1 [MME]** — *Analyser matériaux et phénomènes mécaniques mis en jeu et sollicitations associées*

- **/1** *Choisir matériaux adaptés* — **C** : concept étapes 2+4. **E** : matrice-de-decision.
- **/2** *Procédés d'assemblage* — **E** : dossier-technique étape 2. *E terminal par délégation* (méca collègues), pas un trou phase 2 (arbitrage 06/06).
- **/4** *Identifier sollicitations mécaniques* — **E** : concept étape 4 (pré-dim couple, flèche, transitoires). *E terminal par délégation*.
- **/5** *Schéma cinématique* — **C** : `schema-cinematique` (objet central, liaisons + ddl + exemple bras 3 axes, frontière interface + renvoi cours mécanique). *(était NC — fermé 06/06)*
- **/6** *Caractéristiques mécaniques actionneurs* — **E** : concept étapes 2+4, `lire-une-datasheet`. *E terminal par délégation*.

**RA-MME-C03-1 [MME]** — *Concevoir des structures et systèmes mécaniques*

- **/1** *Lister outils designers* — **HS-D** : design produit, délégué cours collègues (arbitrage 06/06). Pas un trou, décision revendiquée.
- **/2** *Note de calcul dimensionnement transmission* — **E** : concept étape 4. *E terminal par délégation* (note de calcul formelle = cours méca).
- **/3** *Créer assemblage CAO* — **C** : dossier-technique étape 2 (plans cotés, fichiers STL/DXF/STEP).
- **/4** *Paramètres dynamiques* — **E** : concept étape 4 (modèle simplifié transitoire). *E terminal par délégation*.
- **/5** *Nomenclature à partir CAO* — **C** : dossier-technique étape 3 (BOM agrégée).
- **/6** *Optimiser conception* — **C** : `optimisation-mecanique` (objet central : leviers d'optimisation à l'échelle système — choix matériau/procédé raisonné, allègement géométrique, réduction du nombre de pièces — démarche itérative + critères ; dimensionnement fin topologie/FEA renvoyé au cours méca). **E** : dossier-technique étape 2 (choix matériau/procédé argumenté). *(était E — fermé 06/06)*

**Bilan MME** : **5 C + 5 E + 0 HS + 1 HS-D + 0 NC** sur 11 critères (vs 3C/6E/2NC avant arbitrage 06/06, puis 4C/6E). `schema-cinematique` ferme `MME/5` (NC→C) ; `optimisation-mecanique` ferme `MME-C03-1/6` (E→C, fiche interface : leviers d'arbitrage système + renvoi cours méca pour le calcul) ; `MME-C03-1/1` (outils designers) → **HS-D** (design délégué). Les **5 critères effleurés restants sans fiche centrale** (C02-1/2, /4, /6 et C03-1/2, /4) sont actés en **E terminal par délégation** — traitement disciplinaire profond renvoyé aux cours MME, le wiki les touchant via le prisme mécatronique (pré-dim concept/dossier-technique). Domaine assumé comme **interface** (§3 prompt projet) ; plus aucun trou ouvert.

---

### PROJ (25 critères)

**RA-PROJET-C03-3 [PROJ]** — *Réaliser un système ou sous-ensemble incluant moyens numériques de prototypage rapide*

- **/1** *Sketchs main d'un produit* — **HS-D** : design produit, délégué cours collègues (arbitrage 06/06).
- **/2** *Prendre en compte design dans réalisation prototype* — **HS-D** : idem /1, design délégué.
- **/3** *Réaliser structure mécanique avec élec et énergie* — **C amendement** : integration-et-tests étapes 1+2 (fabriquer + valider niveau 0). **Non explicité en passe B sur integration-et-tests, à amender** (voir section Amendements ci-dessous).
- **/4** *Adapter, modifier conception et docs* — **C** : dossier-technique étape 1 (propagation PoC→dossier).
- **/5** *Programmer/paramétrer contrôleur numérique* — **C** : module `cpp` (hub + 7 sous-fiches, objet central « écrire le programme ») + module Arduino (tutos de programmation : tinkercad + 28 `arduino-*` + `arduino-machine-a-etats`). **E** : `firmware`, `manipulation-de-bits` (transverses). *(était NC — fermé phase 2 ; 40 fiches portent PROJ/5, marqueur de transversalité C20)*
- **/6** *Valider inter-opérabilité sous-ensembles* — **C** : integration-et-tests étape 3 (niveaux 2-3 composition + système complet).
- **/7** *Garantir démontabilité* — **C** : ecoconception bloc 2 (démontabilité PCB, connectique JST, carte modulaire).

**RA-PROJET-C04-4 [PROJ]** — *Établir cahier des charges fonctionnel et technique*

- **/1** *Analyse fonctionnelle* — **C** : specification-technique étapes 1+3, cahier-des-charges-fonctionnel section 4, bete-a-cornes, fonction, pieuvre.
- **/2** *Solutions existantes* — **C** : specification-technique étape 2, cahier-des-charges-fonctionnel section 3.
- **/3** *Terminologie technique écrit/oral* — **HS** : 6 fiches (spec-tech, concept, PoC, dossier-tech, integration-et-tests, cahier-des-charges-fonctionnel). Hors scope par décision éditoriale (C15).
- **/4** *Schéma bloc fonctionnel (capteurs/actionneurs/effecteurs/contrôleurs, boucle ouverte/fermée)* — **C** : concept étape 1 (décomposition), schema-bloc-fonctionnel. **E** : specification-technique étape 3, dossier-technique étape 2, cahier-des-charges-fonctionnel.
- **/5** *Différencier écoconception/écodesign* — **C** : ecodesign (fiche dédiée, objet central). **E** : specification-technique étape 6, cahier-des-charges-fonctionnel.
- **/6** *Définir interactions entre blocs depuis CdCF* — **C** : concept étapes 1+3, schema-bloc-fonctionnel, dossier-technique étape 2. **E** : specification-technique, cahier-des-charges-fonctionnel, pieuvre.
- **/7** *Performances désirées du système* — **C** : specification-technique étape 4 (caractériser-une-exigence). **E** : preuve-de-concept étape 1, integration-et-tests étape 3, cahier-des-charges-fonctionnel, fonction, pieuvre, afnor-nfx50-151.

**RA-PROJET-C05-3 [PROJ]** — *Évaluer intégration et interopérabilité des sous-ensembles*

- **/1** *Réaliser tests d'intégration* — **C** : integration-et-tests étape 3 (cœur, niveaux 1-4).
- **/2** *Proposer axes amélioration prototype* — **C** : preuve-de-concept étape 4, integration-et-tests étape 4.
- **/3** *Concevoir protocoles de test* — **C** : preuve-de-concept étape 1, integration-et-tests étape 3. **E** : securite-et-qualite bloc 1.
- **/4** *Réaliser tests* — **C** : preuve-de-concept étape 3, integration-et-tests étape 3. **E** : securite-et-qualite bloc 1.
- **/5** *Analyser résultats tests* — **C** : preuve-de-concept étape 4, integration-et-tests étape 3.

**RA-PROJET-C07-1 [PROJ]** — *Mettre en œuvre outils de projet*

- **/1** *Tableau de bord et indicateurs* — **C** : gestion-de-projet bloc 2, matrice-de-risques. **E** : specification-technique étape 5, dossier-technique étape 5, gantt.
- **/2** *Outils GP (Gantt/PERT/WBS/livrables)* — **C** : specification-technique étape 5, gestion-de-projet blocs 1-2, gantt, jalons, retroplanning, wbs. **E** : concept Équipe, preuve-de-concept Équipe, dossier-technique étape 3, integration-et-tests étape 4, cahier-des-charges-fonctionnel, matrice-de-risques.
- **/3** *Gérer le budget* — **C** : gestion-de-projet bloc 2 (patch 26/05 suite 2), dossier-technique étapes 3+5. **E** : preuve-de-concept étape 2, integration-et-tests étape 4.
- **/4** *Participer aux tâches* — **HS** (C15, évaluation transversale enseignants).
- **/5** *Être force de proposition* — **HS** (C15).
- **/6** *Participer aux événements* — **HS** (C15).

**Bilan PROJ** : **19 C + 0 E + 4 HS + 2 HS-D + 0 NC** sur 25 critères (C03-3/3 réalise structure méca, amendement passé en passe B ; C03-3/5 programmer fermé phase 2). Domaine **majeur du wiki** (25/57 = 44 %). Les 2 ex-NC (C03-3/1 sketchs, /2 prise en compte design) sont actés en **HS-D** (design produit délégué, arbitrage 06/06). Plus aucun trou ouvert.

---

### Bilan passe A — récapitulatif global

**Couverture globale (57 critères) :**

| Domaine | C | E | HS | HS-D | NC | Total |
|---|---|---|---|---|---|---|
| EEE | 10 | 0 | 0 | 0 | 0 | 10 |
| ESE | 5 | 0 | 0 | 0 | 0 | 5 |
| MEO | 6 | 0 | 0 | 0 | 0 | 6 |
| MME | 5 | 5 | 0 | 1 | 0 | 11 |
| PROJ | 19 | 0 | 4 | 2 | 0 | 25 |
| **Total** | **45** | **5** | **4** | **3** | **0** | **57** |

**Règle de comptage** : un critère a UN seul statut dominant (C > E > HS > NC). Si un critère est Couvert dans une fiche et Effleuré dans une autre, il compte C, pas C+E. *(Reclassements phase 2 : EEE/1, EEE-C03-2/5 et PROJ/5 fermés ; voir section « Cartographies Phase 2 ».)*

- **Couverts** : 45/57 = **79 %**
- **Effleurés** : 5/57 = 9 %
- **Hors scope (C15)** : 4/57 = 7 % (4 critères tous PROJ : terminologie + participation)
- **Hors scope par délégation (HS-D)** : 3/57 = 5 % — design produit délégué aux cours collègues (`RA-PROJET-C03-3/PROJ/1` sketchs, `/2` prise en compte design, `RA-MME-C03-1/MME/1` outils designers). Tranché 06/06.
- **Non couverts (NC)** : **0** — plus aucun trou ouvert.
  - **Fermés en phase 2** (étaient NC ou E central) : `EEE/1` (analyse-de-schema), `EEE/3`+`/4` (hub simulation-electronique), `EEE-C03-2/5` (module algorithme), `PROJ/5` (modules cpp + Arduino)
  - **Fermé 06/06** : `RA-MME-C02-1/MME/5` (schéma cinématique) → fiche `schema-cinematique` créée (NC→C)

**Amendements à appliquer à la passe B** (cohérence avec passe A) :

1. **integration-et-tests** : `RA-PROJET-C03-3/PROJ/3` (réaliser structure méca avec élec et énergie) **✓ déjà appliqué** en passe B (couvert via étapes 1+2, mention « Amendement passe A 26/05 suite 3 »). Bilan integration-et-tests : 8 C.

**Fiches phase 2 à ajouter au TODO** :

1. **`simulation-electronique`** (fiche-tuto EEE) — couvre `RA-PROJET-C03-3/EEE/3` (simulation) + `/4` (interpréter résultats). Conforme à C16 (1 fiche-tuto par groupe cohérent EEE : ici /3 et /4 sont indissociables).
2. **`schema-cinematique`** (fiche-notion MME) — couvre `RA-MME-C02-1/MME/5`. **✓ Créée 06/06** (frontière interface : lecture + renvoi cours mécanique). Wiki-link du hub résolu.

**Décisions niveau D — tranchées 06/06** :

- **Catégorie « Hors scope par délégation » (HS-D) instaurée** ✓ — distincte de HS C15. Les 3 critères design (`MME-C03-1/1` outils designers, `PROJ-C03-3/1` sketchs, `/2` prise en compte design) y basculent.
- **5 critères MME effleurés** (C02-1/2, /4, /6 et C03-1/2, /4) **actés en E terminal par délégation** ✓ — pas de fiche MME phase 2, traitement disciplinaire renvoyé aux cours collègues, le wiki les touchant via le prisme mécatronique.
- **`schema-cinematique` créé** ✓ — `MME/5` fermé (NC→C).

**Insights structurants** :

1. **ESE et MEO sont entièrement couverts par la phase 1 du wiki** (0 NC, 0 trou phase 2). Cohérent avec leur nature transverse (portés par les 3 fiches-trame transverses + multi-couverture forte avec les trames du V).
2. **EEE et MME avaient des trous structurés**, désormais tous fermés : EEE par la phase 2 elec/info, MME par `schema-cinematique` (NC→C) + délégation (HS-D et E terminal). Conforme à la grille de lecture phase 1 vs phase 2 actée en début de cartographie.
3. **PROJ est le domaine majeur** du wiki (25/57 = 44 %) avec une couverture **forte** : 19 C + 0 E + 4 HS + 2 HS-D = 25 critères traités, plus aucun NC (sketchs et prise en compte design actés HS-D).
4. **La convention C16** (1 fiche-tuto par critère EEE/info embarquée ou groupe cohérent) **est réalisée empiriquement** : les 5 critères EEE attendus phase 2 sont **tous fermés** (`analyse-de-schema-electronique` pour PROJ-C03-3/1 ; module `algorithme` 5 fiches pour EEE-C03-2/5 ; modules `cpp` + Arduino pour PROJ-C03-3/5 ; hub `simulation-electronique` + 3 tutos-outils pour PROJ-C03-3/3+/4). Soit 1 à 5 fiches par critère selon sa granularité.
5. **3 fiches phase 1 sans critère AA central** identifiées (securite-et-qualite, matrice-de-decision, hub/index) chacune pour une raison distincte (posture professionnelle, outil pivot transverse, méta-structure). Le cadre AA n'est pas le seul critère de pertinence d'une fiche — à acter en synthèse globale.

---

## Synthèse globale

### Bilan en chiffres

| Domaine | C | E | HS | HS-D | NC | Total |
|---|---|---|---|---|---|---|
| EEE | 10 | 0 | 0 | 0 | 0 | 10 |
| ESE | 5 | 0 | 0 | 0 | 0 | 5 |
| MEO | 6 | 0 | 0 | 0 | 0 | 6 |
| MME | 5 | 5 | 0 | 1 | 0 | 11 |
| PROJ | 19 | 0 | 4 | 2 | 0 | 25 |
| **Total** | **45** | **5** | **4** | **3** | **0** | **57** |

Lecture : après la phase 2 elec/info (squelette transverse + modules MCU + simulation) et les arbitrages du 06/06, la couverture **directe** atteint **79 %** (45/57), l'effleurement 9 %, et il ne reste **aucun trou ouvert** : les 3 critères design sont actés **HS-D** (délégation cours collègues) et `schema-cinematique` ferme le dernier NC. Règle de comptage : statut dominant (C > E > HS > HS-D > NC), pas de double comptage.

### Lecture par domaine

**ESE** (5/5) et **MEO** (6/6) sont couverts à 100 % par la phase 1. Cohérent avec leur nature transverse : portés par les 3 trames transverses (gestion-de-projet, ecoconception, securite-et-qualite) avec multi-couverture forte depuis les trames du V. Pas de fiche phase 2 ni nécessaire ni prévue dans ces domaines.

**PROJ** est le domaine majeur du wiki (25/57 = 44 %), couvert par 19 C + 0 E sur les 21 critères non-HS (les 4 HS étant des critères de participation et terminologie évalués transversalement). Couverture forte sur l'analyse fonctionnelle (RA-PROJET-C04-4), le cycle en V (C03-3 + C05-3), la gestion de projet (C07-1) et l'écoconception. La programmation du contrôleur (C03-3/5) est fermée en phase 2 (modules cpp + Arduino) ; les 2 ex-NC design (sketchs, prise en compte design) sont actés HS-D — plus aucun trou ouvert.

**EEE** (10 C / 10) : **domaine entièrement couvert** par la phase 2 (analyse de schéma, module algorithme, hub microcontrôleur, niveaux de tension, bus, sans-fil, simulation). Le hub `simulation-electronique` ferme les 2 derniers NC (`EEE/3`+`/4`). `RA-EEE-C03-2/EEE/3` (sources/dim alim) est fermé 06/06 (suite 4) par la fiche dédiée `alimentation-electronique` : domaine 10 C / 0 E.

**MME** (5 C / 11) reste le domaine le moins couvert en phase 1 — assumé comme **interface** vers les cours collègues (mention explicite dans `hub/index`). `optimisation-mecanique` ferme `MME-C03-1/6` (E→C, fiche interface) ; cinq critères effleurés restants sont actés **E terminal par délégation** ; `schema-cinematique` ferme `MME/5` (C) et les outils designers basculent en **HS-D**. Domaine refermé : 5 C + 5 E + 1 HS-D, plus aucun trou.

### Lecture par catégorie

- **Couvert (45)** : critères qui ont un endroit nommé dans le wiki — section H2/H3 dédiée d'une trame, ou fiche-notion/tuto dédiée. C'est l'objet pédagogique principal.
- **Effleuré (5)** : critères mentionnés en passant (H4, `[!example]`, wiki-link, posture/piège). Ne créent pas de trou si le critère est par ailleurs Couvert dans une autre fiche. Inclut les 5 critères MME *terminaux par délégation* (traitement disciplinaire renvoyé aux cours collègues).
- **Hors scope (4)** : critères `RA-PROJET-C04-4/PROJ/3` (terminologie technique écrit/oral) et `RA-PROJET-C07-1/PROJ/4/5/6` (participation, force de proposition, événements). Décision éditoriale C15 : évalués transversalement par les enseignants, pas contenus pédagogiques.
- **Hors scope par délégation (3)** : `RA-PROJET-C03-3/PROJ/1`+`/2` (sketchs, prise en compte design) et `RA-MME-C03-1/MME/1` (outils designers). Design produit enseigné par les cours collègues, hors expertise auteur.
- **Non couvert (0)** : plus aucun trou ouvert après les arbitrages du 06/06.

### Trous NC : tous fermés (06/06)

**5 NC fermés en phase 2** : `RA-PROJET-C03-3/EEE/1` → `analyse-de-schema-electronique` ; `EEE/3`+`/4` → hub `simulation-electronique` ; `PROJ/5` → modules `cpp` + Arduino. *(et `RA-EEE-C03-2/EEE/5`, qui était E central, fermé par le module `algorithme`.)*

**1 NC fermé 06/06** : `RA-MME-C02-1/MME/5` (schéma cinématique) → fiche `schema-cinematique` créée (frontière interface + renvoi cours mécanique).

**3 ex-NC actés HS-D (06/06)** : `RA-PROJET-C03-3/PROJ/1` (sketchs), `/2` (prise en compte design), `RA-MME-C03-1/MME/1` (outils designers) — design produit délégué aux cours collègues. Plus aucun trou NC ouvert.

### Décisions niveau D — tranchées (06/06)

Les trois questions ouvertes ont été arbitrées (autonomie déléguée pour les instruire, puis validées) :

1. **Catégorie « Hors scope par délégation » (HS-D) instaurée** — distincte de HS C15. Acte la délégation d'un contenu enseigné par un cours collègue hors expertise auteur, sans la confondre avec l'évaluation transversale. Reçoit les 3 critères design.
2. **5 critères MME effleurés sans fiche centrale** (`RA-MME-C02-1/MME/2`, `/4`, `/6`, `RA-MME-C03-1/MME/2`, `/4`) **actés en E terminal par délégation** — pas de fiche MME phase 2. Le traitement disciplinaire profond est renvoyé aux cours MME ; le wiki les touche via le prisme mécatronique (pré-dim en concept et dossier-technique).
3. **`schema-cinematique` créé** — fiche-notion MME tenue en frontière interface (lecture des liaisons + ddl + exemple bras 3 axes, renvoi explicite au cours de mécanique). `MME/5` fermé (NC→C), wiki-link du hub résolu.

La cartographie AA est désormais **refermée** : 45 C, 5 E, 4 HS, 3 HS-D, **0 NC**. Le bilan n'est plus provisoire sur ses marges.

### Ambition au-delà du référentiel

Le wiki dépasse délibérément le scope AA : **mieux trop que pas assez**. Le référentiel école n'est pas un plafond, c'est un socle minimal (cf. prompt projet § 3 : *« aller au-delà du référentiel sans le contredire »*). Cette posture vaut tant pour les fiches qui ont des critères AA centraux (et qui peuvent les déborder) que pour les fiches qui n'en ont aucun.

Trois fiches phase 1 illustrent cette ambition en ne portant aucun critère AA central, chacune pour une raison distincte mais légitime :

- **`securite-et-qualite`** : trame de **posture professionnelle** — sécurité produit (AMDEC, arrêt d'urgence, parades), sécurité projet (3 règles non négociables, EPI, formations), qualité documentaire (Git tags, revue de code, plan de revues), normatif délégué (CE, EMC, ISO 12100). Domaine essentiel à la formation d'ingénieur mécatronicien, non explicitement capturé par les AA techniques du référentiel.
- **`matrice-de-decision`** : **outil pivot transverse** — ne porte aucun critère en propre, mais constitue l'outil par lequel passent les critères de choix EEE/MME/ESE en phase concept. Sa valeur tient à la consolidation méthodologique, pas à l'adressage AA direct.
- **`hub/index`** : **méta-structure** — point d'entrée du parcours pédagogique, ne porte pas de contenu pédagogique au sens AA.

Implication directe : la cartographie sert à identifier les trous, pas à filtrer le contenu produit. Une fiche qui déborde ou qui n'adresse aucun critère central reste légitime si elle sert le projet pédagogique.

### Phase 2 elec/info — cœur du wiki (cadrage 26/05 suite 5)

L'ambition au-delà du référentiel se matérialise en phase 2 dans une posture éditoriale délibérément large côté **électronique et informatique embarquée**. Cadrage stratégique acté 26/05 suite 5 (niveau D) : la phase 2 elec/info devient le **cœur du wiki**, ~50-60 fiches assumées, plusieurs mois de travail revendiqués.

**Architecture en deux strates** :

- **Squelette transverse** — fiches indépendantes du choix techno (datasheet, analyse de schéma, chronogramme, méthodes algorithmiques, oscilloscope, multimètre, firmware, PCB générique, bus de communication, sans-fil). Couvre **tous les AA EEE pour n'importe quel chemin technologique** suivi par l'étudiant. **Socle pédagogique publiable**.
- **Embranchements technologiques** — modules autonomes par famille MCU (Arduino + tinkercad, ESP32 + wokwi + arduino-core + IDF, Raspberry Pi, ESP8266, puis priorité 2 STM32/Teensy/PIC). Chaque famille = hub fille + tutos d'utilisation, complétable au fil de l'eau au rythme des projets étudiants.

Un étudiant suivant un seul chemin (100 % ESP32 par exemple) doit pouvoir traverser tout le V et couvrir tous les AA via squelette + module ESP32. Pareil pour Arduino, Raspberry Pi. **Conséquence opérationnelle** : publication du site possible à la rentrée scolaire dès que squelette transverse complet + ≥1 embranchement complet (idéalement Arduino, le plus utilisé à l'ICAM).

**Trois cercles de priorité publication** :

| Cible | Périmètre | Volume estimé | Délai cible |
|---|---|---|---|
| **MVP strict** (AA 100 %) | Clôture phase 1 GP + squelette critique AA + embranchement Arduino | ~21 sessions | 2-3 mois |
| **MVP étendu** | + squelette pro (oscillo, multimètre, firmware, PCB, bus) + embranchement ESP32 | ~35 sessions | 3-4 mois |
| **Cible complète** | + reste squelette (sans-fil, simu pure, finitions) + tous embranchements MCU + alimentation continue post-rentrée | ~70 sessions | plusieurs mois |

**Cinq mini-hubs imbriqués** à structurer en phase 2 (convention C18 candidate éprouvable) : `microcontroleur` (hub mère panorama → hubs filles familles → tutos utilisation, 2 niveaux), `algorithme` (hub → 3 fiches-notion logigramme/MAE/grafcet), `pcb` (hub léger → kicad/easyeda), `bus-de-communication` (hub → uart/i2c/spi), `techno-sans-fil` (hub → wifi/ble/xbee/zigbee/lora).

**Convention C19 candidate** — fiche transverse multi-techno : certaines fiches du squelette (typiquement `firmware`, `analyse-de-schema-electronique`, `lire-une-datasheet`) couvrent des notions valables sur plusieurs familles MCU. Trois options de structuration à éprouver (callouts par techno côte à côte ; tableau comparatif ; exemple unique générique en prose + renvois vers les modules MCU spécifiques). Formalisation prévue après 2-3 fiches transverses produites.

### Conventions méthodo validées par la cartographie

La cartographie a éprouvé empiriquement quatre conventions, désormais stables (consolidées dans `conventions.md` § 7 *Référentiel AA* depuis le 26/05 suite 4) :

- **C15 — catégorie Hors scope** : 4 cas identifiés (terminologie technique + participation), tous propres et défendables. Distincte de NC : pas un trou, une décision éditoriale revendiquée.
- **C16 — 1 fiche-tuto par critère EEE/info embarquée ou groupe cohérent** : validée empiriquement — les 5 critères EEE attendus phase 2 sont chacun adressés par 1 à 4 fiches dédiées selon la granularité du critère source.
- **Multi-couverture** : un tutoriel gonflé peut couvrir plusieurs critères. Cas `RA-PROJET-C05-3/PROJ/3+/4+/5` couvert simultanément en `preuve-de-concept` + `integration-et-tests` validé sur décision utilisateur.
- **Granularité critère + statut dominant** : cartographie au niveau du critère (pas seulement de l'AA) + règle C > E > HS > NC quand un critère apparaît dans plusieurs fiches. Tenue sur les 21 fiches sans incohérence.

### Suite des opérations

Trois chantiers ouverts, dans l'ordre logique :

1. **Arbitrages niveau D : faits (06/06)** ✓ — HS-D instaurée, 5 critères MME effleurés actés *E terminal par délégation*, `schema-cinematique` créé. Cartographie AA refermée (0 NC). Reste à reporter dans `conventions.md` (§7) et `TODO.md` à la clôture de session.
2. **Reprendre la rédaction des fiches** selon TODO : `caracteriser-une-exigence` (prioritaire), `pcb`, `amdec`, puis fiches-notion outils, puis fiches phase 2 EEE/MME selon priorisation.
3. **Valider les conventions C15/C16 et multi-couverture sur les premières fiches-notion phase 2 produites**. Promotion vers le template `fiche-tuto.md` (à produire) une fois la stabilité confirmée sur 2-3 fiches.

Le chantier cartographie AA est clos : 45 C, 5 E, 4 HS, 3 HS-D, **0 NC** — la couverture est mesurée, les trous sont fermés, les conventions méthodo sont stables. La phase 1 du wiki est close côté cadre AA.
