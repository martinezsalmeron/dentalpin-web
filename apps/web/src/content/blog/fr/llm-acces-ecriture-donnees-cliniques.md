---
title: "Donner à un LLM un accès en écriture aux données cliniques sans que ce soit déraisonnable"
description: "Le modèle n'écrit jamais : il propose une opération cadrée, le code revérifie les droits, un humain valide chaque modification. Architecture et limites."
pubDate: 2026-08-17
translationKey: llm-escritura-datos-clinicos
tags: [ia, llm, architecture, securite, rgpd]
---

La réponse courte, c'est que le modèle n'écrit jamais. Il propose l'appel d'une opération cadrée et typée, votre code revérifie les droits de la personne qui a posé la question, et toute action qui modifie des données s'arrête jusqu'à validation humaine. Le LLM interprète la phrase ; l'exécution reste du travail de back-end classique.

Voici le partage des responsabilités qui rend cela défendable, ce que la CNIL et ses homologues disent des agents qui agissent, et pourquoi la fenêtre de confirmation est la pièce la plus facile à rater.

## Les trois propriétés qu'un agent ne doit pas cumuler

L'autorité espagnole de protection des données a publié en février 2026 des orientations sur l'IA agentique qui reprennent la règle de 2, reformulée pour les agents IA. Elle fixe un seuil de garanties à ne jamais franchir, à partir de trois propriétés :

1. **Traiter de l'information non maîtrisée**, c'est-à-dire du texte qui entre dans le contexte du modèle sans avoir été écrit par une personne autorisée.
2. **Accéder à de l'information sensible**, ce qui dans un cabinet dentaire désigne le dossier clinique tout entier.
3. **Exécuter des actions automatiques** ayant un effet dans l'organisation ou en dehors.

Un agent qui réunit les trois ne devrait pas être autorisé. Le document le détaille cas par cas : lorsque de l'information non maîtrisée peut déclencher l'accès à de l'information sensible, il faut empêcher toute action automatique sans supervision humaine, à l'intérieur comme à l'extérieur de l'organisation.

> **Un assistant de cabinet possède les deux premières propriétés d'origine.** Il lit du texte écrit par des patients et des tiers, et il travaille sur des données de santé, catégorie particulière au sens de l'article 9 du RGPD. La seule des trois que vous pouvez retirer est la troisième, et la retirer signifie exactement ceci : aucune écriture sans une personne devant l'écran.

C'est une décision d'architecture, et elle se prend avant d'écrire la moindre ligne de code. Tout le reste en découle.

## L'écriture, ce sont des outils, pas un accès à la base

Donner un accès en écriture à un modèle, ce n'est pas lui donner une connexion PostgreSQL ni un point d'entrée qui accepte du SQL. C'est publier un petit catalogue d'opérations, chacune avec ses paramètres typés et les validations que l'interface applique déjà.

Pour une phrase comme « déplace Marta de mardi à jeudi dix heures », le parcours est le suivant :

1. **Le modèle reçoit la phrase et le catalogue d'outils**, jamais le schéma de la base.
2. **Il renvoie une proposition** : quelle opération il veut appeler, avec quels arguments. À ce stade rien ne s'est produit, c'est du texte.
3. **Le back-end valide les arguments** avec le même schéma qui valide un formulaire, et rejette ce qui ne rentre pas.
4. **Les droits sont revérifiés** pour la personne qui a demandé, au point d'exécution.
5. **Si l'opération modifie des données, elle s'interrompt** et demande une validation explicite, en montrant ce qui va changer.
6. **Elle s'exécute et elle est journalisée** : quel outil, quels arguments, qui a demandé et qui a validé.

L'étape 4 est celle que l'on saute. Filtrer la liste d'outils avant de l'envoyer au modèle est une aide utile, ce n'est pas un contrôle d'accès. Le contrôle doit se situer là où l'appel s'exécute, parce que c'est le seul endroit par lequel tous les appels passent.

![Assistant IA de Dentalpin affichant la liste des scénarios disponibles et une conversation ouverte](/screenshots/ai-copilot.png)

*L'agent propose ; le catalogue de gauche délimite tout ce qu'il peut demander.*

## Le moindre privilège, appliqué à l'agent plutôt qu'à l'utilisateur

Les orientations espagnoles sont explicites : le principe de base dans un environnement d'IA agentique est celui du moindre privilège, avec une restriction de l'escalade de privilèges et de l'héritage d'identité. En pratique cela se résume à une règle vérifiable : l'agent ne peut ni voir ni faire ce que la personne qui l'interroge ne pourrait pas faire à l'écran.

- **Aucune identité propre.** L'agent agit avec la session de celui qui écrit, pas avec un compte de service aux droits larges. Un compte de service transforme n'importe quelle défaillance du modèle en accès total.
- **Cloisonné par cabinet.** Un même agent servant plusieurs structures doit cloisonner mémoire et contexte, sinon il mélange des données de dossiers sans rapport.
- **Pas d'outils qui élargissent la portée.** Chaque outil publié est une surface d'attaque de plus, et le même document rappelle que l'ajout d'outils est la manière habituelle d'accorder des privilèges sans s'en rendre compte.
- **Rien d'irréversible.** Supprimer, fusionner deux patients ou annuler une facture émise ne sont pas des opérations d'agent, quel que soit le nombre de confirmations placées devant.

## Une fenêtre de confirmation n'est pas une supervision humaine

C'est ici que la plupart des équipes se croient déjà en règle. La supervision doit être réelle, et les autorités ont précisé ce que cela veut dire.

L'article 22 du RGPD reconnaît le droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé produisant des effets juridiques ou affectant la personne de manière significative. L'autorité espagnole rappelle qu'un agent peut impliquer de l'automatisation sans impliquer pour autant une décision automatisée au sens de l'article 22, et que le cas échéant il faut examiner les conditions du 22.2, les mesures du 22.3 et les limites du 22.4 pour les catégories particulières de données.

La CNIL, dans sa note de juillet 2026 sur l'IA agentique, va au fond : « L'existence seule d'une intervention humaine en sortie dans la décision proposée par un système d'IA ne suffit pas nécessairement à écarter la qualification de décision fondée exclusivement sur un traitement automatisé au sens de l'article 22 du RGPD. » Et, s'appuyant sur l'arrêt SCHUFA de la Cour de justice, elle précise que l'intervention humaine « doit être réelle, effective et exercer une influence sur la décision finale ; une validation purement formelle ou automatique est insuffisante ».

> **Si la personne qui valide ne peut pas dire non, elle ne supervise pas.** Il lui faut voir ce qui va changer, avoir le temps et la légitimité de refuser, et que ce refus ne lui coûte rien. Un bouton cliqué quarante fois par jour sans lecture est une signature automatique avec des étapes en plus.

La CNIL suggère d'ailleurs de laisser l'utilisateur décider lui-même quelles actions exigeront sa validation avant exécution, et envisage un « kill switch » permettant d'interrompre à tout moment un processus agentique au comportement inattendu. Les deux idées sont bien plus utiles qu'une confirmation uniforme sur tout.

## Quelle autonomie est défendable, selon ce que l'action touche

| | Requêtes en lecture seule | Écritures avec validation | Écritures autonomes |
|---|---|---|---|
| Texte non maîtrisé dans le contexte | ✓ Tolérable | ~ Seulement avec validation réelle | ✗ Cumule les trois propriétés |
| Atteint des données de l'article 9 | ~ Avec moindre privilège | ~ Avec moindre privilège | ✗ Non défendable |
| Réversible sans restaurer la base | ✓ Rien à défaire | ✓ Oui | ✗ Selon l'opération |
| Article 22 en jeu | ✓ Non | ~ Selon l'effet sur le patient | ✗ Oui, s'il affecte le patient |
| Qui la journalisation désigne | Le demandeur | Le demandeur et le validateur | Personne |

La dernière colonne n'est pas un cas à mieux concevoir. C'est un cas à ne pas construire tant que les deux autres propriétés sont là.

## La journalisation doit reconstituer la décision, pas seulement l'écriture

Conserver l'`UPDATE` ne suffit pas. Ce qu'il faut pouvoir reconstituer, c'est toute la chaîne : ce qui a été demandé, ce que le modèle a proposé, ce qui a été validé, qui a confirmé et quelles données ont bougé.

La CNIL le formule précisément : pour chaque tâche exécutée, l'utilisateur devrait pouvoir identifier « les données personnelles mobilisées, les agents intervenus, les services tiers sollicités, les échanges réalisés ainsi que leur chronologie », ce qui sert autant la transparence que l'établissement d'une chaîne de responsabilité en cas de dysfonctionnement. Les orientations espagnoles parlent de traçabilité de la donnée sur tout son cycle de vie, et demandent de conserver les traces des sources consultées et des services appelés lors de l'inférence.

![Dossier patient de Dentalpin, onglet activité, avec la chronologie filtrable par visites, traitements et communications](/screenshots/patient-timeline.png)

*La chronologie du patient est l'endroit où une modification faite par l'agent doit apparaître comme n'importe quelle autre.*

## Ce que nous avons choisi de ne pas donner au modèle

Réduire la portée a écarté plus de risque que n'importe quelle mesure ajoutée ensuite.

- **Le texte clinique libre ne sort pas.** Les identifiants du patient sont remplacés par des jetons déterministes avant tout envoi vers le fournisseur d'IA, et les notes cliniques en texte libre restent en dehors de ce chemin.
- **Ni diagnostic ni indication thérapeutique.** Proposer un traitement change la nature du produit et les obligations qui vont avec. L'agenda, les règlements, les relances et les recherches ne sont pas cela.
- **Aucune action proactive sur les données.** Le point du matin est produit par des requêtes déterministes, sans LLM et sans donnée de patient qui sorte. C'est la leçon la plus utile du projet : une bonne partie de ce qu'on demande à un agent n'a pas besoin de modèle.

## Avant la mise en production

1. **Écrivez la liste des opérations que l'agent peut appeler** et justifiez-en chacune. Si elle ne tient pas sur une page, elle est trop large.
2. **Testez une injection indirecte** : placez des instructions dans un champ libre rempli par un patient et vérifiez que l'agent ne les suit pas. Les orientations espagnoles distinguent l'injection directe de l'indirecte, qui cache les instructions dans les sources consultées par l'agent.
3. **Essayez d'élever vos privilèges** : connectez-vous avec un compte limité et demandez quelque chose hors de sa portée. Si l'agent le fait, le contrôle était au mauvais endroit.
4. **Lisez la trace d'une conversation entière** et vérifiez qu'un tiers pourrait reconstituer ce qui s'est passé.
5. **Comptez les validations par jour.** S'il y en a beaucoup, la supervision se dégradera d'elle-même, et c'est un problème de conception, pas de personne.
6. **Documentez ce qui part vers le fournisseur d'IA**, sur quelle base légale et sous quel contrat au titre de l'article 28.

Chez Dentalpin l'agent fonctionne ainsi : il appelle les mêmes opérations que l'interface, revérifie les droits au point d'exécution, remplace les données du patient par des jetons avant tout envoi, s'arrête pour demander confirmation à chaque écriture et dépose chaque appel dans le journal d'audit. Pour l'examiner sur votre propre serveur, les conditions sont sur [tarifs](/fr/tarifs/).

## Sources

- CNIL / CIANum, *IA agentique et protection des données personnelles : équation à inconnues multiples pour les utilisateurs*, juillet 2026. [cnil.fr](https://www.cnil.fr/sites/default/files/2026-07/ia-cianum-cnil.pdf). Consulté le 17 août 2026.
- AEPD (autorité espagnole), *Inteligencia artificial agéntica desde la perspectiva de protección de datos*, V1.2, février 2026 : règle de 2 (p. 41-43), article 22 (p. 39-40), injection de prompts (p. 51-52), traçabilité (p. 68-69), gestion des privilèges (p. 70-71). [aepd.es](https://www.aepd.es/guias/orientaciones-ia-agentica.pdf). Consulté le 17 août 2026.
- Règlement (UE) 2016/679 (RGPD), articles 9, 22, 28 et 32.
- CJUE, affaire C-634/21 (SCHUFA Holding), arrêt du 7 décembre 2023, cité par la note de la CNIL ci-dessus.

Ceci n'est pas un conseil juridique. Si votre système prend des décisions qui affectent des patients, examinez le cas précis avec votre délégué à la protection des données avant la mise en service.
