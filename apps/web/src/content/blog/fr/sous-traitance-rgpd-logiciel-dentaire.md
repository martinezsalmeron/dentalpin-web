---
title: "Le contrat de sous-traitance RGPD avec votre éditeur de logiciel dentaire : ce qu'il doit dire"
description: "Ce que l'article 28 du RGPD impose dans le contrat avec votre logiciel dentaire : instructions documentées, sous-traitants ultérieurs, audits, certification HDS et fin de contrat."
pubDate: 2026-09-23
tags: [rgpd, donnees-de-sante, contrats, sous-traitance, hds]
translationKey: contrato-encargado-tratamiento-software-dental
---

Votre éditeur de logiciel traite des données de patients pour votre compte : il est sous-traitant au sens du RGPD, et l'article 28 vous impose un contrat écrit qui dit des choses précises. Le cadre d'abord (objet, durée, nature, finalité, type de données, catégories de personnes concernées), puis les huit obligations des points a) à h). En France s'y ajoute une exigence que le RGPD ne prévoit pas : l'hébergement des données de santé sur support numérique passe par un hébergeur certifié HDS, et cette prestation fait elle aussi l'objet d'un contrat.

Ceci n'est pas un conseil juridique. Toutes les sources officielles figurent à la fin, consultées le 23 septembre 2026.

## Qui est sous-traitant autour d'un logiciel dentaire

Est sous-traitant celui qui traite des données pour votre compte, sur vos instructions, sans décider lui-même des finalités. Autour d'un logiciel de gestion de cabinet, cela fait rarement une seule société.

La liste comprend en général l'éditeur, l'hébergeur où vit la base, le prestataire de sauvegarde et le technicien qui prend la main à distance quand vous appelez le support. Chacun voit des dossiers cliniques.

L'article 28.10 ferme la porte de sortie : un sous-traitant qui détermine lui-même les finalités et les moyens du traitement est considéré comme responsable du traitement pour ce traitement. C'est la règle qui transforme une clause d'usage secondaire des données en un tout autre problème.

![Fiche patient, onglet informations : coordonnées, contact d'urgence et antécédents médicaux avec allergies et pathologies](/screenshots/patients.png)

*Voilà les catégories de données que le contrat doit décrire, et c'est pourquoi écrire "données de patients" ne suffit pas.*

## Les huit obligations que le contrat doit prévoir

L'article 28.3 pose d'abord le cadre, puis énumère ce que le contrat prévoit "notamment".

| Point | Ce que le sous-traitant doit faire | Ce que cela veut dire au cabinet |
|---|---|---|
| a) | Ne traiter les données que sur instruction documentée de votre part | Pas d'usage de votre base patients à ses propres fins |
| b) | Veiller à l'engagement de confidentialité des personnes autorisées | Les techniciens du support aussi, pas seulement les salariés |
| c) | Prendre toutes les mesures requises par l'article 32 | Chiffrement, sauvegardes, gestion des accès, et lesquelles par écrit |
| d) | Respecter les conditions pour recruter un autre sous-traitant | La liste des sous-traitants ultérieurs et votre droit d'objection |
| e) | Vous aider à répondre aux demandes d'exercice des droits | Pouvoir exporter tout ce qui concerne un patient qui le demande |
| f) | Vous aider au titre des articles 32 à 36 | Vous alerter d'une violation à temps pour vos 72 heures |
| g) | Supprimer ou renvoyer les données au terme de la prestation | Selon votre choix, pas le sien |
| h) | Vous donner les informations pour démontrer la conformité et permettre les audits | Y compris des inspections par vous ou un auditeur mandaté |

L'alinéa qui suit le point h) est celui que les contrats oublient le plus souvent : le sous-traitant doit vous informer immédiatement si, selon lui, une instruction constitue une violation du règlement.

> **Un contrat qui recopie l'article 28 ne satisfait pas à l'article 28.** Le Comité européen de la protection des données l'écrit sans détour : le contrat "ne devrait pas se limiter à reproduire les dispositions du RGPD" et doit mentionner les mesures de sécurité à adopter, l'obligation pour le sous-traitant d'obtenir votre accord avant toute modification, et le réexamen régulier de ces mesures. Une annexe sécurité de trois lignes génériques est exactement ce que cette phrase exclut.

## L'hébergement certifié HDS est la couche française

C'est la différence entre un cabinet français et un cabinet espagnol ou allemand lisant le même article 28, et elle ne se déduit pas du RGPD.

L'article L1111-8 du code de la santé publique prévoit que "la prestation d'hébergement de données de santé à caractère personnel fait l'objet d'un contrat", et que l'hébergeur sur support numérique "est titulaire d'un certificat de conformité". Le certificat est délivré par des organismes accrédités, et il porte sur l'hébergeur, pas sur l'éditeur.

Deux conséquences pratiques pour le choix d'un logiciel :

- **Demandez le nom de l'hébergeur, pas seulement la mention HDS.** Beaucoup d'éditeurs sont hébergés chez un tiers certifié : c'est parfaitement régulier, et c'est ce tiers qu'il faut retrouver dans la liste des sous-traitants ultérieurs.
- **Le certificat a une portée et une date.** Un certificat couvre des activités d'hébergement définies, donc la question utile est laquelle, et jusqu'à quand.

> **Le même article interdit la cession à titre onéreux de données de santé identifiantes.** Le texte vise "tout acte de cession à titre onéreux de données de santé identifiantes directement ou indirectement, y compris avec l'accord de la personne concernée", sous peine des sanctions de l'article 226-21 du code pénal. C'est le premier texte à relire quand un contrat propose une valorisation des données.

## La liste des sous-traitants ultérieurs est la partie que personne ne lit

Un logiciel en ligne tient rarement seul. Dessous se trouvent en général un hébergeur, un service de sauvegarde, une passerelle SMS et, de plus en plus, un prestataire de fonctions d'intelligence artificielle.

L'article 28.2 vous laisse deux formes d'autorisation, et il vaut mieux savoir laquelle vous avez signée. Elle peut être spécifique, pour un sous-traitant nommé, ou générale, et dans ce cas le sous-traitant doit vous informer de tout ajout ou remplacement **en vous donnant la possibilité d'émettre des objections**.

Le Comité européen précise ce qu'il vous faut pour décider : une liste des sous-traitants ultérieurs envisagés indiquant, pour chacun, sa localisation, l'activité qui lui sera confiée et la preuve des garanties mises en place. Il ajoute qu'un accès général à une page que l'éditeur met à jour de temps en temps ne suffit pas, puisqu'il doit vous informer activement de chaque nouveau sous-traitant envisagé.

Trois questions règlent presque tout :

- **Où est la liste, et qui me prévient quand elle change ?** Une page publiée n'est pas une notification.
- **De combien de jours je dispose pour objecter, et avec quelle conséquence ?**
- **Qu'est-ce qui se trouve hors de l'Espace économique européen ?** Le point a) couvre les transferts, donc cela figure au contrat.

## La clause d'entraînement des modèles que vous pouvez refuser

C'est là que les contrats d'éditeurs ont bougé ces dernières années, et cela se signe sans lecture.

La forme est reconnaissable. Dans une section consacrée aux données du client, le cabinet concède à l'éditeur une licence sur ces données pour entraîner ou améliorer des modèles, pour de l'analyse comparative, ou pour toute autre finalité servant les activités de l'éditeur, parfois en garantissant avoir recueilli les consentements nécessaires. Ce n'est pas une hypothèse : des éditeurs du secteur publient des conditions de cette forme.

Une telle clause se concilie mal avec le point a). Un sous-traitant qui exploite les données à ses propres fins ne traite plus uniquement sur instruction documentée, et l'article 28.10 dit ce qui se passe alors.

La réponse tient en une phrase ajoutée au contrat, limitant l'usage des données à l'exécution de la prestation.

![Dossier clinique d'un patient avec l'odontogramme, les alertes cliniques, le plan de traitement en cours et le prochain rendez-vous](/screenshots/dental-chart.png)

*Voilà ce qui doit revenir entre vos mains avant d'autoriser la moindre suppression, dans un format qu'un autre logiciel sait lire.*

## Ce que deviennent les données à la fin du contrat

Le point g) vous laisse le choix entre suppression et restitution, et c'est la clause le plus souvent laissée vide.

Le choix n'est pas entièrement libre : les obligations de conservation du dossier du patient continuent après l'arrêt du contrat logiciel. Demander l'effacement avant d'avoir récupéré les dossiers vous met en défaut sur une autre règle, et aucun export n'est possible une fois le compte fermé.

Le bon ordre, et le contrat doit fixer les deux étapes :

1. **L'export d'abord**, dans un format documenté, avec un délai en jours et le coût s'il y en a un.
2. **La vérification ensuite**, sur un jeu de données ouvert ailleurs que chez l'éditeur.
3. **La suppression enfin**, confirmée par écrit, copies comprises.

"Restitution ou suppression au choix du responsable" sans format ni délai n'est pas exécutable le jour où vous en avez besoin.

## Héberger chez soi déplace le contrat, cela ne le supprime pas

C'est le contresens le plus répandu dans les cabinets qui installent le logiciel sur leur propre machine. Si la base est au cabinet, on imagine volontiers qu'il n'y a plus de sous-traitant.

Il y en a toujours, simplement d'autres :

1. **Le support qui prend la main à distance** voit des dossiers pendant toute la session.
2. **La sauvegarde externalisée**, dès que la copie quitte le cabinet.
3. **L'hébergeur**, si le serveur est loué dans un centre de données, avec la question HDS qui revient.
4. **Le prestataire informatique** qui administre la machine, même si c'est la même personne depuis dix ans.
5. **L'éditeur lui-même**, quand la maintenance inclut un accès pour diagnostiquer ou mettre à jour.

Ce qui change vraiment, c'est que les mesures de l'article 32 deviennent les vôtres. Le chiffrement, les sauvegardes testées et la gestion des accès cessent d'être la promesse contractuelle d'un autre.

## Comment relire le contrat déjà signé

Une première passe ne demande pas d'avocat.

1. **Retrouvez le document.** S'il n'existe qu'un contrat de service sans annexe de protection des données, vous avez déjà la réponse.
2. **Parcourez les huit points** du tableau ci-dessus et cochez les absents.
3. **Trouvez la liste des sous-traitants ultérieurs** et le mécanisme d'objection, avec son délai.
4. **Identifiez l'hébergeur et son certificat HDS**, par son nom.
5. **Lisez la section données du client** en cherchant licences, entraînement de modèles ou analyses agrégées.
6. **Demandez par écrit ce qui manque.** Un avenant signé corrige un contrat ; un courriel ne le corrige pas, mais il date la discussion.

La CNIL publie des clauses contractuelles types qui reprennent les dispositions obligatoires de l'article 28, et rappelle qu'elles ne sont pas obligatoires si le contrat contient déjà tous les éléments visés.

## Ce que vous pouvez exiger du logiciel pour que ce soit vérifiable

Trois des huit points dépendent de ce que le programme sait faire, pas de ce que le contrat promet. Le point e) suppose un export complet d'un patient. Le point g) suppose un export complet du cabinet. Le point h) suppose de pouvoir montrer qui a consulté quoi.

Dentalpin est en open source, donc les mesures techniques de l'article 32 s'auditent en lisant le code plutôt qu'en croyant une annexe, et les données vivent dans une base PostgreSQL dont on tire un export standard quand on veut. Vous l'hébergez vous-même ou en version gérée, et les [tarifs](/fr/tarifs/) sont publiés.

## Sources

Toutes consultées le 23 septembre 2026.

- Règlement (UE) 2016/679 (RGPD), article 28 dans son intégralité et article 32. [CNIL, chapitre IV](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4)
- CNIL, "Clauses contractuelles types entre responsable de traitement et sous-traitant". [cnil.fr](https://www.cnil.fr/fr/clauses-contractuelles-types-entre-responsable-de-traitement-et-sous-traitant)
- Comité européen de la protection des données, Lignes directrices 07/2020 sur les notions de responsable du traitement et de sous-traitant, points 126 et 152. [edpb.europa.eu](https://www.edpb.europa.eu/system/files/2023-10/edpb_guidelines_202007_controllerprocessor_final_fr.pdf)
- Article L1111-8 du code de la santé publique, hébergement des données de santé et interdiction de cession à titre onéreux. [Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049577902)
