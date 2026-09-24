---
title: "Une facture déjà émise est fausse : avoir, facture rectificative et ce que le logiciel ne peut pas faire"
description: "Comment corriger une facture dentaire déjà émise : facture rectificative, note d'avoir, référence exacte à la facture initiale et mention expresse de son annulation."
pubDate: 2026-09-24
translationKey: factura-rectificativa-clinica-dental
tags: [facturation, avoir, cabinet-dentaire, logiciel-dentaire]
---

Une facture remise au patient ne se modifie pas et ne se supprime pas. On la corrige en émettant un second document qui renvoie au premier, et le premier reste dans les livres. Le BOFiP le dit en une phrase : une nouvelle facture qui remplace la précédente doit comporter "la référence exacte à la facture initiale et la mention expresse de l'annulation de celle-ci".

C'est ce qui heurte les habitudes du cabinet. Dans l'agenda ou dans le dossier clinique, on corrige une erreur en changeant la donnée. En comptabilité jamais.

## Deux documents différents, et on les confond

L'administration distingue deux façons de rectifier, et elles ne se remplissent pas de la même manière.

- **La facture rectificative qui annule et remplace.** Le BOFiP (BOI-TVA-DECLA-30-20-20-20, § 240) exige la référence exacte à la facture initiale et la mention expresse de son annulation, et le § 250 ajoute qu'elle doit comporter l'ensemble des mentions visées au I de l'article 242 nonies A de l'annexe II au CGI.
- **La note d'avoir**, qui ne remplace rien et constate une réduction. Le § 260 précise ce qu'elle doit porter pour que le praticien puisse récupérer la TVA correspondante : la référence à la facture initiale, "le montant 'hors taxes' du rabais consenti ainsi que le montant de la TVA correspondante", les noms et adresses des deux parties, et le total hors taxes et la TVA après réduction.

Dans les deux cas, la même exigence revient : **la facture initiale est identifiée sur le document qui la corrige.** Pas "votre facture de mars".

> **Le document qui corrige ne doit jamais faire disparaître celui qu'il corrige.** C'est la logique de toute la mécanique : l'avoir s'ajoute, la rectificative annule par une mention écrite, et la facture d'origine reste à sa place dans la numérotation.

## Au cabinet dentaire, la question précède : y a-t-il de la TVA ?

L'essentiel de l'activité est exonéré. Le 1° du 4 de l'article 261 du CGI exonère les prestations de soins à la personne dispensées par les chirurgiens-dentistes, ainsi que les fournitures de prothèses dentaires par les dentistes et les prothésistes (BOI-TVA-CHAMP-30-10-20-10, version du 09/04/2025).

Mais l'exonération ne couvre pas tout, et la précision est récente : dans son actualité ACTU-2023-00005, l'administration a précisé la définition des prothèses dentaires entrant dans le champ de l'exonération, et indique que les produits qui n'y répondent pas, **notamment les appareils orthodontiques et les aligneurs**, sont soumis à la TVA au taux normal.

Autrement dit : **un cabinet qui pose des aligneurs facture de la TVA sur cette part**, et pour cette part toute la mécanique de l'avoir s'applique pleinement. Un cabinet purement exonéré ne récupère aucune TVA sur un avoir, mais la numérotation, la piste de correction et l'interdiction de modifier une facture émise le concernent autant, parce qu'elles viennent de sa comptabilité et pas de la TVA.

> **Un avoir sans le montant de TVA ne vaut rien pour la récupération.** Le § 260 demande deux chiffres, pas un : le montant hors taxes du rabais consenti **et** le montant de la TVA correspondante. Un avoir qui ne porte qu'un total TTC ferme la porte à l'imputation, et c'est l'erreur la plus courante des avoirs rédigés à la main.

![Liste de factures avec les états émise, payée, partiellement payée, échue et brouillon](/screenshots/invoices.png)

*Une liste de factures avec ses états. Un avoir ne fait pas disparaître une ligne : il en ajoute une.*

## Les cas qui arrivent vraiment

| Situation | Ce qu'on émet |
|---|---|
| Montant erroné, vu le lendemain | ✓ Rectificative ou avoir, avec référence à la facture initiale |
| Nom ou adresse faux, soins corrects | ✓ Rectificative "annule et remplace" |
| Le paiement par carte est déjà passé | ~ Avoir plus remboursement : deux opérations |
| Traitement interrompu en cours de plan | ✓ Avoir sur la part non réalisée |
| Le patient demande la facture au nom de son employeur | ✗ Ce n'est pas une rectification : le client serait un autre |
| Facture éditée deux fois le même jour | ✓ Rectificative annulant l'une des deux, pas une suppression |
| Acompte qui devient ensuite facture de traitement | ~ Pas automatiquement une rectification |

Deux lignes méritent une phrase, parce que ce sont celles qui occupent l'accueil.

**Une facture au nom d'un tiers n'est pas une facture corrigée.** Si les soins ont été dispensés à la patiente et la facture établie à son nom, la réémettre au nom de l'employeur ne répare aucun défaut : elle crée une autre opération avec un autre client. Cela se décide avant l'émission.

**Une facture d'acompte n'est pas remplacée.** Elle existe et elle vaut ; la facture de traitement reprend le solde. On n'établit un avoir que si l'acompte est rendu ou si le traitement tombe.

## Regrouper plusieurs factures

Le BOFiP l'admet lorsque la référence à une facture initiale unique est impossible : la note peut alors se référer à un groupe de factures ou au contrat sous-jacent, **à condition que la période d'émission soit précisée**. C'est le cas du tarif mal paramétré pendant quinze jours.

La condition est la moitié utile de la phrase, et c'est celle que le logiciel doit tenir : la période, pas une vague mention du trimestre.

## Ce que le logiciel doit faire

- **Ne plus proposer de champ modifiable sur une facture émise.** Si le montant reste éditable après émission, le problème est le logiciel.
- **Créer le document correctif depuis la facture**, en reprenant automatiquement son numéro et sa date, sans ressaisie.
- **Tenir une numérotation continue et sans trou**, avoirs compris, pour qu'un numéro manquant se voie au lieu de manquer discrètement.
- **Journaliser qui a corrigé, quand et pourquoi.** Le motif est ce qui manque toujours six mois plus tard.
- **Afficher le compte du patient comme une chaîne**, facture initiale et avoir, et non le seul solde. Un solde juste avec l'historique masqué est exactement ce qu'on n'arrive pas à expliquer deux ans après.
- **Séparer le document du règlement**, pour qu'un remboursement de 80 € ne réécrive pas une facture et qu'un avoir ne bouge pas la caisse tout seul.

![Tableau de bord des rapports du cabinet](/screenshots/reports.png)

*C'est dans les rapports qu'un trou dans la numérotation se voit, pas dans la liste des factures du mois.*

## Dans quel ordre

1. **Déterminer si le document est faux ou si la prestation a changé.** Une faute de frappe sur le nom est un défaut de mention ; un traitement non réalisé est une réduction de la base.
2. **Ne pas toucher à la facture initiale.** Ni le montant, ni le nom, ni la date.
3. **Choisir le bon document** : rectificative "annule et remplace" si la facture est à refaire, avoir si seul le montant baisse.
4. **Porter la référence exacte** à la facture initiale, et la mention expresse d'annulation si c'est une rectificative.
5. **Remettre le document au patient** et en garder trace dans son compte.
6. **Traiter l'argent séparément** : remboursement, imputation sur la facture suivante, ou mention sur l'impayé.
7. **Prévenir l'expert-comptable** si la période est déjà déclarée.

## Ce que cet article ne traite pas

- **Le dossier trimestriel pour l'expert-comptable** est [un autre article](/fr/blog/rapports-pour-expert-comptable/).
- **La caisse qui ne tombe pas juste le soir** n'est pas une erreur de facture : voir [la caisse quotidienne](/fr/blog/caisse-quotidienne-cabinet-dentaire/).
- **Une facture impayée** ne se corrige pas parce qu'elle est impayée, elle se relance : [le suivi des impayés](/fr/blog/suivi-impayes-cabinet-dentaire/).
- **Ce que la réforme de la facturation électronique impose et à quelles dates** est un sujet entier et se trouve [ici](/fr/blog/facturation-electronique-cabinet-dentaire/).
- **Le devis conventionné et le 100 % Santé** relèvent de [leur propre article](/fr/blog/devis-conventionne-100-sante/).

## Où se place le logiciel

Dans Dentalpin, une facture émise n'est plus modifiable, le document correctif se crée depuis la facture avec son numéro et sa date repris automatiquement, le règlement et le document sont deux enregistrements distincts, et le compte du patient montre la chaîne entière plutôt que le résultat. C'est inclus, sans coût par utilisateur : les détails sont sur la [page des tarifs](/fr/tarifs/).

**Ceci n'est pas un conseil fiscal.** Les sources officielles sont ci-dessous avec leur date de consultation ; pour un cas précis, voyez votre expert-comptable ou votre service des impôts.

## Sources

- BOFiP, *TVA - Régimes d'imposition et obligations déclaratives et comptables - Factures rectificatives*, identifiant BOI-TVA-DECLA-30-20-20-20, version du 19/01/2022, § 240, 250 et 260. Consulté le 24 septembre 2026. <https://bofip.impots.gouv.fr/bofip/142-PGP.html/identifiant%3DBOI-TVA-DECLA-30-20-20-20-20220119>
- BOFiP, *TVA - Champ d'application - Professions médicales et paramédicales*, identifiant BOI-TVA-CHAMP-30-10-20-10, version du 09/04/2025. Consulté le 24 septembre 2026. <https://bofip.impots.gouv.fr/bofip/1139-PGP.html/identifiant=BOI-TVA-CHAMP-30-10-20-10-20250409>
- BOFiP, actualité *TVA - Précision relative au champ d'application de l'exonération de TVA applicable à la fourniture de prothèses dentaires prévue au 1° du 4 de l'article 261 du CGI*, ACTU-2023-00005. Consulté le 24 septembre 2026. <https://bofip.impots.gouv.fr/bofip/13795-PGP.html/ACTU-2023-00005>
