---
title: Fiabiliser et déboguer
type: trame
tags:
  - eee
  - trame
  - realisation
prerequis:
  - programmer-l-embarque
aa: []
draft: false
---

**Fiabiliser et déboguer**, c'est la sixième étape de la [[fiches/eee/index|réalisation du sous-système embarqué]]. Un montage qui fonctionne au premier essai n'est pas fiable pour autant. Cette étape **durcit le système** — garantir le temps réel, survivre aux blocages, économiser l'énergie — et installe la **méthode** pour traquer les défauts. Le livrable est un **protocole de tests et de débogage** : ce que tu vérifies, comment, et la trace des problèmes traités.

## Posture attendue

La tentation est de s'arrêter dès que « ça marche une fois ». Mais un système embarqué tourne longtemps, dans des conditions variées, parfois en sécurité de personnes : ce qui marche une fois doit marcher *à chaque fois*. Aborde donc cette étape avec deux réflexes. D'abord, **décide ce que tu testes avant de tester** : sans protocole, un essai réussi ne prouve rien de précis. Ensuite, **débogue en isolant, pas en devinant** : un bug se cerne par observation méthodique, pas par modifications au hasard.

## Objectif de l'étape

Produire un **protocole de tests et de débogage** et le système durci qui va avec :

- un **protocole de tests** qui dit, pour chaque fonction, quoi vérifier et quel résultat attendre ;
- des **mesures de robustesse** en place : temps réel (interruptions, temporisateurs), survie aux blocages (chien de garde), gestion de la mémoire et de l'énergie ;
- une **méthode de débogage** outillée, et la **trace** des défauts rencontrés et corrigés.

## Démarche

### 1. Définir le protocole de tests

Avant de durcir ou de corriger quoi que ce soit, décide **comment tu vérifieras** que le système tient. Reprends les fonctions chiffrées du [[decomposition-fonctionnelle|cadrage du besoin]] : pour chacune, écris un **test** (l'action à mener), le **résultat attendu** (la valeur ou le comportement), et la **condition** (à froid, en charge, en durée). L'idéal est de remonter au [[cahier-des-charges-fonctionnel|cahier des charges]] : chaque exigence reçoit son test et se valide **individuellement**, puis les fonctions se testent **simultanément** — c'est dans ces essais combinés qu'apparaissent les défauts d'interaction qu'aucun test isolé ne révèle. Ce protocole est le fil conducteur de toute la mise au point — et il prépare la recette finale, conduite à l'[[integration-et-tests|étape 7]] au niveau de tout le système.

> [!warning] Attention
> **Tester au hasard ne prouve rien.** « J'ai branché, ça a bougé » ne dit pas si la précision est tenue, si la sécurité réagit assez vite, si le système survit à dix minutes de service. Un essai n'a de valeur que rattaché à un résultat attendu défini à l'avance. Écris le protocole *avant* d'allumer.

> [!example] Exemple : projet bras 3 axes
> Protocole de tests du sous-système embarqué du bras, dérivé des fonctions :
>
> | Fonction | Test | Attendu | Condition |
> |---|---|---|---|
> | Positionner | commander une course complète | ± 0,5° | à froid et après 10 min |
> | Mesurer la position | confronter la mesure du capteur à un angle de référence externe (butée connue, rapporteur) | écart < 0,2° (bien sous la tolérance de positionnement) | sur toute la plage |
> | Sécurité fin de course | provoquer un contact | arrêt < 5 ms | en mouvement |
> | Liaison opérateur | envoyer une consigne à distance | exécutée sans perte | portée nominale |
>
> Une fois chaque ligne validée seule, le protocole se rejoue en **combiné** : positionner pendant que la liaison opérateur émet, par exemple — exactement l'interaction qui révélera le défaut traqué à l'étape 3.
>
> **Sortie** : un protocole de quatre tests, chacun avec attendu et condition, validés un à un puis en simultané. Il guide la mise au point et nourrit la recette de l'étape 7.

> [!livrable] Livrable 1/3 — Protocole de tests
> - Pour chaque fonction : le test à mener, le résultat attendu et la condition d'essai — validés individuellement, puis en simultané

### 2. Durcir le temps réel et la robustesse

Le firmware fonctionnel de l'[[programmer-l-embarque|étape 4]] doit maintenant tenir dans la durée et face aux imprévus. Quatre leviers : garantir le **temps réel** en cadençant les tâches périodiques sur [[timer|temporisateur]] et en traitant les événements urgents sur [[interruption|interruption]] plutôt qu'en scrutation ; survivre aux **blocages** grâce à un **chien de garde** qui redémarre la carte si le programme se fige ; maîtriser la **[[memoire|mémoire]]** pour éviter les débordements ; et, si l'autonomie compte, exploiter la **[[deep-sleep|veille]]**. Les paliers ingénieur des familles ([[arduino|Arduino]], [[esp32|ESP32]], [[stm32|STM32]]…) détaillent ces mécanismes carte par carte.

> [!warning] Attention
> **Pas de temps réel sans interruptions ni temporisateurs, pas de robustesse sans chien de garde.** Une acquisition cadencée par la boucle principale dérive dès que la boucle se charge ; une sécurité scrutée se manque. Et un programme qui se fige sans chien de garde laisse le système bloqué, parfois sous tension et en mouvement. Ces deux mécanismes ne sont pas optionnels dès qu'il y a de la sécurité en jeu.

> [!example] Exemple : projet bras 3 axes
> Durcissement du bras : l'acquisition des trois capteurs d'angle est déclenchée par un **temporisateur** toutes les 10 ms (cadence garantie, indépendante de la charge de la boucle) ; les six fins de course sont câblées en **interruption** prioritaire, qui force l'état *Arrêt d'urgence* sans attendre le tour de boucle ; un **chien de garde** redémarre l'ESP32 si la boucle ne le rafraîchit pas (programme figé). Aucune attente bloquante dans la boucle. La **mémoire** est surveillée à la console (stable après 30 minutes de service) ; pas de mise en **veille** — le bras est alimenté en permanence, et l'écrire est aussi une décision.
>
> **Sortie** : temps réel garanti par temporisateur, sécurité sur interruption, chien de garde armé, mémoire surveillée. Le système résiste aux blocages et tient la cadence.

> [!livrable] Livrable 2/3 — Mesures de robustesse
> - Les mécanismes en place : tâches sur temporisateur, événements critiques sur interruption, chien de garde, gestion mémoire et énergie

### 3. Déboguer méthodiquement

Quelque chose ne marche pas comme prévu : c'est inévitable. Débogue avec **méthode** plutôt qu'au hasard. **Reproduis** le défaut de façon fiable, **isole** la zone en cause (matériel ou logiciel ? quel module ?), puis **observe** avec le bon instrument. Le code ne dit pas tout : un [[multimetre|multimètre]] vérifie une tension, un [[oscilloscope|oscilloscope]] révèle un signal mal formé ou mal cadencé, un [[debugger-embarque|débogueur]] suit l'exécution pas à pas. La fiche [[instruments-de-mesure|instruments de mesure]] dit quel outil pour quel symptôme. Trace chaque défaut et sa correction : ce journal fait partie du livrable.

> [!tip] Astuce
> **L'oscilloscope voit ce que le code ne dit pas.** Quand un signal numérique « devrait » être bon mais que le comportement cloche, l'instrument tranche en une mesure : le signal STEP est-il vraiment régulier ? la tension d'alimentation tient-elle sous charge ? Deviner fait perdre des heures ; mesurer fait gagner la réponse.

> [!example] Exemple : projet bras 3 axes
> Symptôme : un axe « saccade » par moments. Démarche — le défaut est reproduit en commandant des courses rapides ; on isole côté logiciel (les deux autres axes vont bien sur le même matériel) ; à l'**oscilloscope**, le signal STEP de cet axe — généré par une tâche logicielle — montre des trous quand la liaison Wi-Fi émet. Cause trouvée : l'émission Wi-Fi bloque brièvement la génération des pas. Correction : déplacer la génération des pas sur une tâche temporisée prioritaire. Trou disparu, vérifié de nouveau à l'oscilloscope.
>
> **Sortie** : un défaut reproduit, isolé, observé à l'instrument, corrigé et revérifié — consigné au journal de débogage.

> [!livrable] Livrable 3/3 — Journal de débogage
> - La trace des défauts rencontrés : symptôme, isolement, observation instrumentée, cause, correction et vérification

## Conclusion

Ton système est durci et ta mise au point est outillée : protocole de tests écrit, robustesse en place, défauts tracés et corrigés. La suite est la **recette d'ensemble** à l'[[integration-et-tests|étape 7]], qui exécute la qualification du sous-système intégré au reste du projet. La robustesse, elle, se prépare dès la [[preuve-de-concept|preuve de concept]] et se consolide au [[dossier-technique|dossier technique]] du cycle en V.

---

## Pièges fréquents

**Tester au hasard, sans protocole.** Un essai réussi ne prouve rien s'il n'est pas rattaché à un résultat attendu défini à l'avance. Le protocole s'écrit avant l'essai.

**Assurer le temps réel par scrutation.** Une tâche cadencée par la boucle dérive sous charge ; un événement urgent scruté se manque. Temporisateurs et interruptions sont les bons outils.

**Se passer de chien de garde.** Un programme figé sans chien de garde laisse le système bloqué, parfois dangereux. Le chien de garde n'est pas optionnel dès qu'il y a de la sécurité.

**Déboguer en devinant.** Modifier au hasard en espérant que ça passe masque le défaut au lieu de le comprendre. On reproduit, on isole, on observe.

**Ignorer les instruments quand le code ne suffit pas.** Beaucoup de bugs « logiciels » sont en réalité matériels — un signal mal formé, une tension qui chute. Le multimètre et l'oscilloscope tranchent.

**Confondre « marche une fois » et « fiable ».** Un système embarqué tourne longtemps et dans des conditions variées. La fiabilité se vérifie en durée et en charge, pas sur un essai unique.

## Ce qui relève d'ailleurs

**La robustesse se prépare en amont et se valide en aval, dans le cycle en V.** Les incertitudes de fiabilité se lèvent dès la [[preuve-de-concept|preuve de concept]] ; les mesures de robustesse se consolident au [[dossier-technique|dossier technique]] — cette fiche en porte la mise en œuvre technique, le V l'inscrit dans le projet.

*La qualification finale* — recette au banc, mesure des écarts, conclusion — est l'[[integration-et-tests|étape 7]], c'est-à-dire la phase d'intégration du V. Ici tu prépares et tu mets au point ; là, tu prononces le verdict.

## Voir aussi

- [[fiches/eee/index|Réalisation du sous-système embarqué]]
- Étape précédente : [[faire-communiquer|Faire communiquer]]
- Étape suivante : [[integration-et-tests|Intégrer et tester]]
- Temps réel et robustesse : [[interruption|interruptions]], [[timer|temporisateurs]], [[deep-sleep|veille]], [[memoire|gestion mémoire]]
- [[debugger-embarque|Déboguer un système embarqué]]
- [[instruments-de-mesure|Instruments de mesure]] — [[multimetre|multimètre]], [[oscilloscope|oscilloscope]]
- Le palier ingénieur de ta famille : [[arduino|Arduino]], [[esp32|ESP32]], [[stm32|STM32]]…
- [[preuve-de-concept|Preuve de concept]] *(cycle en V)*
- [[dossier-technique|Dossier technique]] *(pilotage, cycle en V)*
