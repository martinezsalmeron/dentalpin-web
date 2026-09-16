---
title: "Combien de temps conserver le dossier d'un patient au cabinet dentaire et comment le détruire ensuite"
description: "Aucun texte ne fixe de durée pour le cabinet libéral. L'Ordre préconise vingt ans depuis la dernière prise en charge, avec trois règles qui modifient ce calcul."
pubDate: 2026-09-16
translationKey: conservar-historia-clinica-dental-plazos
tags: [dossier-patient, conservation, rgpd, gestion]
---

Vingt ans à compter de la date de la dernière prise en charge, et il faut dire tout de suite d'où vient ce chiffre: ce n'est pas une obligation réglementaire pour un cabinet libéral, c'est une préconisation du conseil national de l'Ordre des chirurgiens-dentistes. Le texte qui fixe vingt ans, l'article R. 1112-7 du code de la santé publique, ne vise que les établissements de santé.

La distinction n'est pas un détail juridique. Elle change ce que le praticien doit être capable de justifier, et elle explique pourquoi les durées citées dans les articles sur le sujet varient de dix à trente ans selon la source.

## Ce que dit le texte, et sur qui il porte

L'article R. 1112-7 est clair sur son champ d'application: il traite des informations conservées "au sein des établissements de santé qui les ont constituées". Sa règle centrale est la suivante.

Le dossier médical "est conservé pendant une durée de vingt ans à compter de la date du dernier séjour de son titulaire dans l'établissement ou de la dernière consultation externe en son sein".

Trois règles s'ajoutent dans le même article et ce sont elles qui compliquent le calcul:

- **Le patient mineur.** Si la durée s'achève avant le vingt-huitième anniversaire du titulaire, "la conservation du dossier est prorogée jusqu'à cette date".
- **Le décès.** Si la personne décède moins de dix ans après son dernier passage, le dossier est conservé dix ans à compter de la date du décès.
- **Le contentieux.** Ces délais "sont suspendus par l'introduction de tout recours gracieux ou contentieux tendant à mettre en cause la responsabilité médicale".

> **Un cabinet de ville n'est pas un établissement de santé.** R. 1112-7 ne s'applique donc pas directement au cabinet dentaire, et aucun texte réglementaire ne fixe de durée équivalente pour l'exercice libéral.

## La préconisation de l'Ordre, et pourquoi elle reprend les mêmes règles

L'ONCD publie sur son site une fiche RGPD consacrée aux délais de conservation des données médicales. Elle commence par reconnaître le problème: "Plusieurs textes, divers voire contradictoires, sont susceptibles d'avoir un impact sur la durée de conservation des dossiers médicaux détenus par le chirurgien-dentiste".

Sa conclusion est explicite: "le conseil national de l'Ordre des chirurgiens-dentistes préconise une durée de conservation du dossier médical pendant 20 ans". La fiche reprend ensuite, mot pour mot, les trois règles de R. 1112-7: prorogation jusqu'au vingt-huitième anniversaire, dix ans à compter du décès, suspension par tout recours.

La raison est donnée dans le même document, et elle mérite d'être citée parce qu'elle explique la cohérence de l'ensemble. Cette préconisation "a été motivée par la volonté, partagée par l'ensemble des Ordres des professions de santé, d'aligner la situation des professionnels de santé exerçant en ville sur celle des établissements de santé".

| Situation | Source | Durée |
|---|---|---|
| Dossier en établissement de santé | Art. R. 1112-7 CSP | 20 ans depuis le dernier séjour ou la dernière consultation externe |
| Dossier au cabinet dentaire | Préconisation ONCD | 20 ans depuis la dernière prise en charge |
| Patient mineur | R. 1112-7 et fiche ONCD | Prorogation jusqu'au 28e anniversaire |
| Décès moins de dix ans après la dernière prise en charge | R. 1112-7 et fiche ONCD | 10 ans à compter du décès |
| Recours gracieux ou contentieux | R. 1112-7 et fiche ONCD | Délais suspendus |

![Dossier d'un patient avec l'onglet d'activité ouvert et la chronologie des rendez-vous, actes et paiements](/screenshots/patient-timeline.png)

*La chronologie d'un patient, avec la date de chaque saisie.*

## La date qui compte est celle de la dernière prise en charge

C'est ici que se joue la différence entre une durée écrite dans une procédure et une durée applicable. Pour savoir quels dossiers ont atteint le délai, il faut pouvoir chercher sur la date du dernier acte, pas sur la date de création de la fiche.

La recherche que proposent la plupart des logiciels est l'autre: les patients créés avant une date donnée. Le résultat est faux, et il l'est dans le sens le plus coûteux, puisqu'il fait remonter des dossiers actifs.

- **Date du dernier acte clinique**, qui matérialise la fin de la prise en charge.
- **Date de naissance**, parce que la prorogation jusqu'au vingt-huitième anniversaire en dépend et pas de la date du soin.
- **Marquage des dossiers en litige**, pour les exclure de toute purge tant que le recours court.
- **Imagerie et pièces signées**, qui vivent souvent ailleurs que dans la fiche et suivent rarement le même calendrier.

> **Sans requête, la durée est décorative.** Un cabinet qui ne peut pas lister les dossiers arrivés à échéance ne conserve pas vingt ans, il conserve indéfiniment, ce qui est une autre décision et doit pouvoir se justifier au regard du RGPD.

## Ce que détruire veut dire quand la donnée est en base

Sur papier, c'est un destructeur de documents. Dans une base de données, c'est une décision en plusieurs étapes, et la dernière est presque toujours oubliée.

1. **Choisir entre suppression et anonymisation.** Une anonymisation irréversible sort l'enregistrement du champ du RGPD et conserve les statistiques, que le cabinet veut généralement garder.
2. **Inclure l'imagerie et les pièces jointes.** Radiographies, photographies cliniques et PDF signés sont souvent stockés ailleurs et survivent à la suppression de la ligne.
3. **Compter le cycle des sauvegardes.** Un enregistrement supprimé aujourd'hui figure encore dans la sauvegarde d'avant-hier, jusqu'à sa rotation. Ce qui est défendable, c'est d'avoir documenté cette durée, pas de prétendre à une suppression instantanée.
4. **Tracer la destruction.** Quoi, quand, selon quel critère et par qui, sans réécrire au passage les données que l'on vient d'effacer.
5. **Vérifier le registre des traitements.** L'article 30 du RGPD demande les délais prévus d'effacement, et le délai inscrit devrait être celui qui est réellement appliqué.

L'étape quatre est la seule qui permette de prouver quoi que ce soit ensuite. Une destruction sans trace ne se distingue pas d'une perte de données.

![Liste des rapports disponibles dans le cabinet](/screenshots/reports.png)

*L'écran des rapports, à partir duquel se construisent les listes par date.*

## Ce que le logiciel doit permettre

Rien de tout cela ne se voit dans une démonstration, et c'est pour cette raison que la question ne se pose jamais avant la signature. Ce sont quatre points concrets.

- **Chercher sur la date du dernier acte clinique**, et pas seulement sur la date de création du patient.
- **Exporter intégralement** avant de détruire, ce qui permet de proposer le dossier au patient plutôt que de le faire disparaître.
- **Supprimer ou anonymiser un patient** sans casser la comptabilité ni les factures, qui relèvent de délais fiscaux distincts.
- **Journaliser l'opération**, avec l'utilisateur et la date.

Dans Dentalpin, le dossier conserve la date de la dernière saisie par patient et elle est interrogeable, la suppression emporte l'imagerie associée et l'opération est inscrite au journal d'accès. Le code est publié et les [tarifs](/fr/tarifs/) aussi.

Ceci n'est pas un conseil juridique. La durée retenue par le cabinet doit être confrontée aux textes cités et, en cas de réclamation ou de contentieux, à votre assureur en responsabilité civile professionnelle et à votre conseil.

## Sources

- Article R. 1112-7 du code de la santé publique, version en vigueur au 1er mars 2018, Légifrance. Consulté le 16 septembre 2026. <https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036658351>
- Ordre national des chirurgiens-dentistes, fiche "RGPD, délais de conservation des données médicales". Consultée le 16 septembre 2026. <https://www.ordre-chirurgiens-dentistes.fr/wp-content/uploads/dlm_uploads/2020/11/F2-RGPD-Delais-de-conservation.pdf>
- Règlement (UE) 2016/679, articles 5.1.e et 30. Consulté le 16 septembre 2026.
