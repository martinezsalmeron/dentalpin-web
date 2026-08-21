---
title: "Alternative open source à Julie : ce qui existe vraiment"
description: "Quelles alternatives open source à Julie existent aujourd'hui pour un cabinet français, avec la licence de chacune vérifiée sur le site de son éditeur."
pubDate: 2026-08-18
tags: [comparatif, julie, open-source, logiciel-dentaire]
---

La liste des alternatives open source à Julie est courte, et elle s'est encore raccourcie : Open Dental, qui était la réponse évidente, n'est plus open source depuis la version 24.4, et c'est sa propre page de licence qui le dit. En France, un second filtre élimine presque tout le reste : aucune des options de cette page ne télétransmet de feuille de soins électronique.

> **Comment ce comparatif est fait.** Tout ce qui est affirmé ici sur Julie vient de pages publiées par Julie Solutions sur julie.fr, et tout ce qui est affirmé sur les autres options vient du site de chaque projet, avec le lien et la date en bas de page. Aucune donnée ne vient d'un site comparateur : ils se contredisent entre eux et certains sont écrits par des concurrents. Une seule exception, signalée sur place : le rachat de Julie est cité d'après logosw.net, c'est-à-dire d'après l'acquéreur lui-même.

## En trente secondes

**La force de Julie est la conformité française, et elle est réelle.** Son site revendique une fondation en 1983, "plus de 20 000 utilisateurs", la nomenclature CCAM, le service ADRi pour les droits du patient, l'INS, un ordonnancier adossé à VIDAL Expert, un module de stérilisation et seize systèmes d'imagerie compatibles. Rien de tout cela n'existe dans une option open source aujourd'hui.

**Ce que l'open source apporte, c'est la licence et les données.** Le code se lit, se garde et se modifie quoi qu'il arrive à l'éditeur, et la base reste sur une machine que vous contrôlez. C'est exactement ce que cherche la personne qui tape cette requête après un rachat ou une hausse de tarif.

**La question qui tranche : qui télétransmet dans votre cabinet ?** Si la réponse doit être le logiciel, aucune option de cette page ne convient et Julie reste le choix rationnel. Si la partie conventionnelle passe déjà ailleurs, la suite vous concerne.

![Écran d'accueil de Dentalpin avec les rendez-vous du jour, les personnes présentes au cabinet, les paiements en retard et les patients récents](/screenshots/home.png)

*L'accueil d'un logiciel de gestion open source : rendez-vous du jour, présences, impayés et patients récents sur un même écran.*

## Ce qu'est Julie, et pourquoi on lui cherche une alternative

Julie est édité par Julie Solutions, RCS 838 336 246, à Marne la Vallée. Sa page produit décrit un logiciel de gestion complet pour le cabinet dentaire : agenda accessible à distance, rappels par SMS, dossiers patient, saisie des actes, imagerie, gestion des stocks, aide comptable et module de stérilisation.

Deux points de cette page sont difficiles à répliquer et méritent d'être cités tels quels :

- **La sauvegarde.** Julie annonce une "sauvegarde de données automatique et externalisée tous les 1/4h en datacenter certifié HDS et 100% français". HDS est la certification française d'hébergement de données de santé, et l'écrire noir sur blanc engage l'éditeur.
- **L'imagerie.** La même page liste seize systèmes compatibles, de Carestream Kodak à Trios 3Shape en passant par Dexis, Owandy, Planmeca Romexis et Sopro imaging 2. Dans un cabinet déjà équipé, cette liste décide souvent seule.

Sur le volet réglementaire, Julie écrit que "le logiciel affiche l'acte selon les règles d'application et la nomenclature CCAM", décrit le service ADRi qui "permet de connaitre la situation à jour des droits d'un patient grâce à un accès direct aux bases de l'Assurance Maladie", annonce "Plus de rejets de vos Feuilles de Soins Electroniques liées aux droits du patient", et précise que "L'INS peut être obtenue par interrogation d'un téléservice de la CNAM".

Alors pourquoi chercher ailleurs ? Deux raisons reviennent, et aucune n'est un reproche adressé au produit.

> **Julie ne publie aucun tarif, et l'éditeur a changé de mains.** Aucune des pages consultées le 18 août 2026 n'affiche de prix : le coût ne se connaît qu'après un devis. Et le rachat est annoncé par l'acquéreur, pas par un blog : la FAQ de LOGOSw explique que "Ce rachat vise à renforcer la position de LOGOSw sur le marché des logiciels dentaires" et rassure sur la suite, "Le logiciel JULIE reste maintenu et continue d'évoluer", avec un nouveau produit JULiA dont "La transition n'est pas obligatoire".

## Ce que veut dire open source quand on change de logiciel

Trois choses différentes se vendent sous la même étiquette, et il vaut mieux les séparer avant de regarder les produits :

- **La licence.** C'est la seule chose qui décide si vous pouvez lire, modifier et conserver le code quoi qu'il arrive à l'éditeur. C'est aussi ce qui peut changer d'une année sur l'autre, comme on va le voir.
- **Le prix.** Gratuit et open source ne sont pas la même chose. Il existe du logiciel propriétaire gratuit, et du logiciel libre dont le support se paie.
- **Les données.** Auto-héberger veut dire que la base est sur une machine que vous contrôlez. C'est indépendant de la licence, et c'est presque toujours ce que cherche vraiment celui qui pose la question.

Si le problème est la facture mensuelle, le critère est le prix. Si le problème est ce que deviennent les dossiers le jour où l'éditeur est racheté ou change de grille, les critères sont la licence et l'auto-hébergement.

## Les alternatives open source qui existent aujourd'hui

- **Apexo.** Logiciel de gestion dentaire que son site décrit comme "open-source, offline-first dental practice manager designed for speed, privacy, and clinical precision", sous licence "GNU GPLv3". Il annonce calendrier, dossiers patients, statistiques, synchronisation, fonctionnement hors ligne et sauvegardes. Les langues listées sont "EN, AR, ES, PL, KU" : le français n'en fait pas partie, et rien sur les pages consultées ne concerne la CCAM ni la télétransmission.
- **OpenMolar.** Projet GPLv3 né d'un dentiste écossais, et le seul de cette liste à déclarer lui-même son état. Son site écrit qu'OpenMolar1 "is no longer utilised in practice, although development continues as a hobby project" et qu'OpenMolar2 "is effectively a dead project as it has not been ported to Python3 or Qt5". Le copyright en bas de page s'arrête à 2020. On peut encore lire le code, on n'y installe pas un cabinet.
- **Open Dental.** Pendant des années c'était la réponse à cette question, et ce n'est plus le cas. Le produit reste sérieux et c'est l'un des très rares du secteur à publier sa grille : "$199 per month per location or office (12 month contract)", qui couvre tous les postes du site et jusqu'à trois praticiens, support téléphonique et mises à jour compris.
- **GNU Health.** Logiciel libre pour la santé, que le projet décrit comme "the Libre digital health ecosystem, where Social Medicine meets state-of-the-art health informatics". Les pages consultées ne décrivent pas la gestion d'un cabinet dentaire, donc la licence a beau être la bonne, ce n'est pas un remplaçant de Julie.
- **Dentalpin.** Le nôtre, et c'est pour cela qu'il a sa propre section et sa colonne dans le tableau, où chaque ligne se vérifie.

> **"In version 24.4, the Open Dental license changed from open source GPL to proprietary."** C'est la phrase d'Open Dental sur sa propre page de licence. Ils ajoutent que le changement n'a rien changé pour les clients ("There was no change in price, support, database access, or how the software was used") et qu'il n'a touché que les quelques programmeurs qui compilaient le code. Le produit est bon, une alternative open source ne l'est plus.

## Ce qu'est Dentalpin

Logiciel de gestion dentaire publié sous Business Source License 1.1, qui bascule automatiquement en Apache 2.0 quatre ans après chaque version. Vous téléchargez le code, vous l'installez où vous voulez avec un `docker compose`, et il n'y a de licence ni par fauteuil, ni par praticien, ni par patient.

Côté clinique, le cycle est complet : agenda, patients, odontogramme, parodontogramme, dossier clinique, plans de traitement, devis, facturation, paiements, relances et rapports. Il y a aussi un agent IA qui exécute les mêmes opérations que l'interface, avec les droits de l'utilisateur qui s'en sert et une confirmation demandée avant chaque écriture. Il n'y a pas de paliers : les modules sont tous là.

Ce qui n'existe **pas** en France aujourd'hui se lit ici et pas en bas de page :

- **Aucune télétransmission de feuille de soins électronique.** Pas de SESAM-Vitale, pas d'ADRi, pas d'INS.
- **Aucune gestion de la CCAM ni du conventionnel.** Le module fiscal existant est espagnol.
- **Aucun ordonnancier certifié ni module de stérilisation.**
- **Aucune interface en français.** Elle existe en anglais et en espagnol ; la traduction est ouverte comme contribution de la communauté, elle n'est pas livrée.

C'est un produit de 2026 et cela se voit. Le tarif est sur la [page tarifs](/fr/tarifs/), et il tient en un chiffre.

![Dossier patient avec odontogramme, alertes cliniques, plan de traitement en cours et prochain rendez-vous](/screenshots/dental-chart.png)

*Le dossier patient et son odontogramme. L'interface du cabinet de démonstration est en espagnol, comme le reste de l'application aujourd'hui.*

## Face à face

Uniquement des lignes vérifiables. Là où il n'y a pas de donnée publique, c'est écrit.

| | Julie | Dentalpin |
|---|---|---|
| Licence | Commerciale, propriétaire | Open source (BSL 1.1 puis Apache 2.0 après 4 ans) |
| Code source | ✗ Non publié | ✓ Sur GitHub, en entier |
| Tarif publié | ✗ Aucun tarif sur les pages consultées | ✓ 0 €, tout inclus |
| Feuilles de soins électroniques et ADRi | ✓ Décrits sur leur site | ✗ Absents |
| Nomenclature CCAM | ✓ Saisie des actes selon la CCAM | ✗ Absente |
| Ordonnancier | ✓ Associé à la base VIDAL Expert | ✗ Absent |
| Module de stérilisation | ✓ Intégré | ✗ Absent |
| Imagerie | ✓ Seize systèmes listés comme compatibles | ~ Radios et imagerie intégrées, sans liste de compatibilité publiée |
| Sauvegarde | ✓ Externalisée tous les 1/4h en datacenter HDS | ~ À votre charge, sur votre serveur |
| Base installée | ✓ "plus de 20 000 utilisateurs" | ✗ Très peu de cabinets à ce jour |
| Ancienneté | ✓ Fondée en 1983 | ✗ Depuis 2026 |
| Interface en français | ✓ Oui | ✗ Non, anglais et espagnol aujourd'hui |
| API publique | ~ Non documentée sur les pages publiques | ✓ REST, documentée en OpenAPI |
| Éditeur | Julie Solutions, RCS 838 336 246, racheté par LOGOSw | Projet open source, code sur GitHub |

Les lignes marquées "non documentée" ou "sur les pages consultées" disent exactement cela et rien de plus : c'est ce qu'on lit sur les pages publiques. Si vous évaluez Julie sérieusement, ce sont des questions à leur poser, pas des conclusions à tirer d'ici.

Les huit lignes du milieu sont les leurs, et il n'y a pas de façon honnête de les maquiller. Un éditeur fondé en 1983 qui revendique plus de 20 000 utilisateurs a déjà réglé des problèmes que nous ne savons pas encore avoir.

## Choisissez Julie si

- **La télétransmission doit venir du logiciel.** FSE, ADRi, INS : c'est le quotidien d'un cabinet conventionné, Julie le couvre et aucune option open source de cette page ne le fait. C'est la première raison d'être de ce texte.
- **Vous cotez à la CCAM tous les jours.** Leur page décrit une saisie des actes qui applique les règles de la nomenclature, ce qui est un travail de spécialiste que personne ne refait pour le plaisir.
- **Vous prescrivez depuis le logiciel.** L'ordonnancier adossé à la base VIDAL Expert, avec la gestion des interactions, est un domaine où l'improvisation n'a pas sa place.
- **Votre plateau technique est déjà là.** Si votre capteur est dans la liste des seize systèmes, l'intégration existe déjà et elle ne se négocie pas.
- **Vous voulez une sauvegarde dont quelqu'un d'autre répond.** Toutes les 15 minutes, externalisée, en datacenter certifié HDS : auto-héberger veut dire reprendre cette responsabilité.
- **Vous voulez un logiciel en français, avec un éditeur et un support français.** Nous ne sommes ni l'un ni l'autre aujourd'hui.

## Choisissez une option open source si

- **La partie conventionnelle passe déjà ailleurs.** Certains cabinets télétransmettent depuis un poste dédié ou un logiciel tiers. Si c'est votre cas, la principale objection tombe.
- **Vous voulez garder le code et la base quoi qu'il arrive.** Le rachat de Julie s'est bien passé et LOGOSw écrit que le logiciel reste maintenu, mais la question de départ était : que se passe-t-il si la réponse est un jour différente ? Une licence open source y répond sans dépendre de la bonne volonté de personne.
- **Vous voulez que la base reste au cabinet.** Auto-héberger, c'est décider soi-même où sont les dossiers, qui y accède et quand on met à jour.
- **Le socle à zéro euro change votre équation.** Sur un cabinet à deux fauteuils, la différence entre un abonnement et zéro se compte en milliers d'euros sur la durée d'un logiciel.
- **Un serveur ne vous fait pas peur.** `docker compose up`, des sauvegardes que vous vérifiez, un nom de domaine. Si personne au cabinet ne veut s'en occuper, ce n'est pas le bon choix et mieux vaut le savoir avant.

![Liste de factures avec les états émise, payée, partiellement payée, échue et brouillon](/screenshots/invoices.png)

*Les états d'une liste de factures. Après une migration, c'est le premier écran à comparer avec l'ancien logiciel.*

## Comment se passerait une migration depuis Julie

1. **Demandez l'export à Julie, par écrit, avant de signer ailleurs.** Aucune des pages consultées ne décrit de procédure d'export ni de réversibilité, donc c'est une question à poser à l'éditeur et non à déduire d'ici.
2. **Faites l'inventaire de ce qui doit bouger.** Patients, historiques, actes, plans de traitement, devis, factures, paiements, radios. Ce qui n'est pas sur cette liste ne migrera pas.
3. **Décidez ce que vous laissez derrière.** Dix ans de rendez-vous annulés ne servent à personne. Une historique clinique, si.
4. **Établissez la table de correspondance des actes.** C'est le travail réel, et il se fait à deux, avec quelqu'un qui code au fauteuil.
5. **Importez sur un jeu d'essai et vérifiez trois patients à la main.** Un connu, un compliqué, un ancien.
6. **Faites tourner les deux en parallèle une semaine**, puis basculez sur un jour creux et gardez l'export d'origine.

> **L'étape 4 est celle qui fait échouer presque toutes les migrations.** Deux cabinets ne codent jamais les actes de la même façon, et une équivalence devinée en silence produit des factures fausses que personne ne détecte avant des mois. Le parcours complet est dans le [guide du changement de logiciel](/fr/blog/migrer-logiciel-dentaire/), et le comparatif fonctionnalité par fonctionnalité est dans [Dentalpin face à Julie](/fr/blog/dentalpin-vs-julie/).

## Sources

Toutes consultées le 18 août 2026.

- [julie.fr](https://www.julie.fr/) : fondation en 1983 et présentation de l'éditeur.
- [julie.fr/logiciel-cabinet-dentaire](https://www.julie.fr/logiciel-cabinet-dentaire/) : fonctions du logiciel, "plus de 20 000 utilisateurs", sauvegarde HDS tous les 1/4h et les seize systèmes d'imagerie compatibles.
- [julie.fr/reglementaire-evolution-profession-dentaire](https://www.julie.fr/reglementaire-evolution-profession-dentaire/) : CCAM, feuilles de soins électroniques, ADRi, INS et ordonnancier VIDAL Expert.
- [julie.fr/mentions-legales](https://www.julie.fr/mentions-legales/) : Julie Solutions, RCS 838 336 246, adresse de l'éditeur, aucun groupe propriétaire nommé.
- [logosw.net/faq](https://www.logosw.net/faq/) : le rachat de Julie, le maintien du logiciel JULIE et le caractère non obligatoire de la transition vers JULiA.
- [Apexo](https://apexo.app/) : licence GPLv3, positionnement offline-first, fonctionnalités et langues.
- [OpenMolar](https://openmolar.com/) : licence GPLv3 et état déclaré des deux branches du projet.
- [Open Dental · License](https://www.opendental.com/site/license.html) : le passage de GPL à propriétaire en version 24.4.
- [Open Dental · Order](https://www.opendental.com/site/order.html) : le tarif publié et ce qu'il couvre.
- [GNU Health](https://www.gnuhealth.org/) : description du projet et son périmètre.
- [Licence et code de Dentalpin](https://github.com/martinezsalmeron/dentalpin) et [nos tarifs](/fr/tarifs/).

Quelque chose est faux ou n'est plus à jour ? [Dites-le nous](https://github.com/martinezsalmeron/dentalpin/discussions) et nous corrigeons. Cela vaut aussi si vous êtes chez Julie, chez LOGOSw, chez Apexo ou chez Open Dental.
