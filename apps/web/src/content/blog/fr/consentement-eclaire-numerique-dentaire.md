---
title: "Consentement éclairé numérique au cabinet dentaire : ce qu'il faut pouvoir prouver"
description: "Ce que le droit français exige vraiment du consentement au cabinet dentaire, pourquoi la loi impose la preuve et non l'écrit, et comment tenir la trace numériquement."
pubDate: 2026-08-21
translationKey: consentimiento-informado-digital-dental
tags: [consentement, dossier-clinique, cabinet-dentaire, logiciel-dentaire]
---

Le droit français n'impose pas de formulaire signé pour les soins dentaires courants. Il impose autre chose, et c'est plus exigeant : l'article L1111-2 du code de la santé publique met la charge de la preuve sur le praticien, "en cas de litige, il appartient au professionnel ou à l'établissement de santé d'apporter la preuve que l'information a été délivrée", et précise que "cette preuve peut être apportée par tout moyen". Ce que vous numérisez n'est donc pas le consentement, c'est la trace de l'entretien qui l'a produit.

Ceci n'est pas un conseil juridique. Toutes les sources officielles figurent en fin d'article, consultées le 21 août 2026.

## L'obligation porte sur l'entretien, pas sur la signature

L'article L1111-2 énumère ce sur quoi l'information doit porter : "les différentes investigations, traitements ou actions de prévention qui sont proposés, leur utilité, leur urgence éventuelle, leurs conséquences, les risques fréquents ou graves normalement prévisibles qu'ils comportent ainsi que sur les autres solutions possibles et sur les conséquences prévisibles en cas de refus".

Le même article ajoute la phrase que les logiciels oublient : "Cette information est délivrée au cours d'un entretien individuel". Une tablette tendue en salle d'attente ne satisfait pas cette exigence, quelle que soit la qualité du texte affiché.

| Obligation | Texte | Écrit imposé ? |
|---|---|---|
| Informer sur les traitements, risques et alternatives | L1111-2 | ✗ Non, mais entretien individuel |
| Recueillir un consentement libre et éclairé | L1111-4 | ✗ Non |
| Prouver que l'information a été délivrée | L1111-2 | ~ Preuve par tout moyen |
| Rechercher le consentement dans tous les cas | R4127-236 | ✗ Non |
| Respecter le refus après information des conséquences | R4127-236 | ✗ Non |
| Répondre sur les honoraires et le coût du traitement | R4127-240 | ✗ Non |

Le `~` de la troisième ligne est tout l'enjeu. La preuve est libre, donc rien ne vous oblige à un formulaire, et rien ne vous protège si vous n'avez rien.

> **Le consentement se retire à tout moment.** L'article L1111-4 est net : "Aucun acte médical ni aucun traitement ne peut être pratiqué sans le consentement libre et éclairé de la personne et ce consentement peut être retiré à tout moment." Un système qui sait archiver des consentements et pas enregistrer un retrait ne tient que la moitié du dossier.

## Ce que le code de déontologie ajoute

L'article R4127-236 du code de la santé publique reprend l'obligation pour les chirurgiens-dentistes : "Le consentement de la personne examinée ou soignée est recherché dans tous les cas, dans les conditions définies à l'article L. 1111-4."

Il traite aussi le refus, qui est la partie la moins bien tracée dans la plupart des dossiers : "Lorsque le patient, en état d'exprimer sa volonté, refuse les investigations ou le traitement proposés, le chirurgien-dentiste doit respecter ce refus après l'avoir informé de ses conséquences."

- **Le refus est un acte à documenter**, au même titre que l'acceptation, et avec la même précision sur ce qui a été expliqué.
- **Le coût fait partie de l'information.** L'article R4127-240 impose au praticien de veiller "à l'information préalable du patient sur le montant des honoraires" et de répondre "à toute demande d'information ou d'explications sur ses honoraires ou le coût d'un traitement".
- **Un plan de traitement long se réexplique.** Une orthodontie ou une réhabilitation prothétique traverse des décisions successives, et un entretien de la première séance ne les couvre pas toutes.

![Plan de traitement d'un patient découpé en étapes avec les actes de chaque étape](/screenshots/treatment-plan.png)

*Le plan de traitement par étapes : ce qui est expliqué en entretien, et ce que la trace du consentement doit pouvoir désigner.*

## Ce que le numérique change, et ce qu'il ne change pas

Il ne change pas l'entretien individuel. Aucun texte ne permet de le remplacer par un document, et la qualité du dialogue reste ce qui rend le consentement éclairé plutôt que simplement recueilli.

Il change la survie de la preuve. Un formulaire papier dans un dossier prouve qu'une signature existe. Un dossier qui relie l'entretien, le plan de traitement, le devis et la signature au même patient à la même date prouve le processus que la loi décrit.

> **La preuve libre récompense la trace régulière.** Puisque "cette preuve peut être apportée par tout moyen", une note d'entretien datée, signée et jamais réécrite pèse souvent plus qu'un formulaire type dont chaque patient a reçu le même exemplaire.

## Ce que la trace doit contenir

- **La version exacte remise ou signée**, figée, et non le modèle amélioré depuis.
- **Qui a informé et quand**, nommément, et pas seulement qui a récupéré la signature à l'accueil.
- **Ce qui a été dit à ce patient**, y compris ses questions et les alternatives écartées.
- **La remise de l'exemplaire au patient**, avec une trace de l'envoi ou de la remise.
- **Le lien avec le plan de traitement et le devis**, pour pouvoir comparer ce qui a été consenti et ce qui a été fait.
- **Les retraits et les renouvellements**, datés, parce qu'un plan de deux ans ne se consent pas une seule fois.

![Fiche patient, onglet activité, avec les alertes cliniques, le plan en cours et la chronologie filtrable par visites, actes, finances et communications](/screenshots/patient-timeline.png)

*La chronologie du patient : l'endroit où l'ordre entre informé, signé et soigné devient visible au lieu d'être supposé.*

## Le déroulé, étape par étape

1. **Menez l'entretien au fauteuil**, et notez ce que vous avez expliqué avant de sortir le moindre document.
2. **Générez le document depuis le plan de traitement**, pour que les actes listés soient ceux qui seront réalisés.
3. **Ajoutez les risques propres à ce patient**, ce qu'un formulaire type ne fera jamais à votre place.
4. **Laissez un délai de réflexion**, et que ce ne soit pas la minute qui précède l'anesthésie.
5. **Recueillez l'accord** et figez le document tel qu'il a été accepté.
6. **Remettez l'exemplaire au patient** et enregistrez cette remise.
7. **Classez la trace dans le dossier clinique**, pas dans un dossier parallèle que personne n'ouvre.
8. **Réexpliquez à chaque étape** d'un traitement long, avec une note courte à chaque séance.

## Les erreurs qui vident un consentement de sa valeur

- **Un formulaire type jamais personnalisé.** Il prouve qu'un modèle existe, pas que ce patient a été informé.
- **Une signature recueillie après le début des soins.** Elle documente une formalité, pas une décision.
- **Un document signé qui reste modifiable.** Toute retouche ultérieure détruit ce qui lui donnait sa valeur probante.
- **Aucune note d'entretien.** Le formulaire est le reçu, la note est la preuve, et sans la seconde le premier reste seul.
- **Aucune trace de la remise au patient.** Il affirme n'avoir rien reçu et rien ne permet de le contredire.
- **Un retrait consigné en commentaire libre.** Sans changement d'état, le dossier continue d'afficher un accord.
- **Une signature prise sur la session ouverte d'un autre.** L'historique nommera la personne connectée, pas celle qui a informé.

## Comment vérifier le vôtre en dix minutes

1. **Ouvrez un consentement d'il y a un an** et vérifiez que vous retrouvez le document tel qu'il a été accepté.
2. **Cherchez la note d'entretien de ce jour-là**. Si elle n'existe pas, c'est là qu'est le trou.
3. **Essayez de modifier le document signé** et regardez si le logiciel vous laisse faire sans laisser de trace.
4. **Essayez d'enregistrer un retrait** et vérifiez que le dossier le traduit en état, pas en commentaire.
5. **Exportez un consentement hors du logiciel** et vérifiez qu'il reste lisible sans lui.

Dans Dentalpin, les consentements sont rangés dans la fiche patient à côté du plan de traitement, chaque enregistrement conserve son auteur et sa date, la chronologie montre quand le patient a été informé et quand il a accepté, et l'ensemble sort en export PostgreSQL standard. Le code est ouvert, ce qui permet de vérifier ces points plutôt que de les croire, et les conditions des versions hébergée et auto-hébergée sont sur la page [tarifs](/fr/tarifs/).

## Sources

- Code de la santé publique, article L1111-2 (droit à l'information, entretien individuel, charge de la preuve). [Légifrance LEGIARTI000041721051](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041721051). Consulté le 21 août 2026.
- Code de la santé publique, article L1111-4 (consentement libre et éclairé, retrait à tout moment). [Légifrance LEGIARTI000041721056](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041721056). Consulté le 21 août 2026.
- Code de la santé publique, articles R4127-236 et R4127-240, code de déontologie des chirurgiens-dentistes. [Légifrance, devoirs des chirurgiens-dentistes envers les malades](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006196414/). Consulté le 21 août 2026.
