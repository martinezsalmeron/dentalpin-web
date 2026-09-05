---
title: "Gérer plusieurs cabinets dentaires : ce qui se partage et ce qui reste séparé"
description: "Une base patients ou plusieurs, comment l'agenda sépare le site du fauteuil, ce que le RGPD impose quand deux cabinets partagent les dossiers, et quels chiffres se lisent site par site."
pubDate: 2026-09-05
translationKey: gestionar-varias-clinicas
tags: [multi-sites, organisation-cabinet, agenda, rgpd]
---

Ouvrir un deuxième cabinet impose quatre décisions, et la première conditionne les trois autres : une seule base patients ou une par site, un dossier clinique accessible depuis n'importe quel cabinet ou non, la façon dont l'agenda distingue le site du fauteuil, et le site auquel on rattache chaque euro produit et chaque boîte de consommables.

Pour la plupart des groupes de deux ou trois cabinets, la réponse est une base commune avec des droits d'accès limités par rôle. Le reste se corrige en cours de route. Celle-là non, parce que revenir en arrière veut dire fusionner des doublons patients deux ans plus tard.

## Base commune ou une installation par site

Les deux options se défendent. Le choix dépend de la nature réelle des cabinets : un groupe, ou des activités séparées qui partagent un associé.

| | Base commune | Une installation par site |
|---|---|---|
| Patient suivi sur deux sites | ✓ Un seul dossier | ✗ Deux dossiers qui s'ignorent |
| Doublons | ~ Ils existent quand même, mais on les voit | ✗ Structurels, invisibles par construction |
| Statistiques du groupe | ✓ Directes | ✗ Recalculées à la main sur tableur |
| Cloisonner l'accès entre sites | ~ Dépend des droits du logiciel | ✓ Total par construction |
| Céder ou fermer un site | ✗ Il faut séparer les données | ✓ On transmet l'installation entière |
| Sites détenus par des structures différentes | ~ Exige un accord écrit | ✓ Chacun garde le sien |

La première ligne tranche si vos patients circulent entre les sites. L'avant-dernière tranche si vous envisagez de céder un cabinet. Très peu de groupes de deux ou trois cabinets sont dans le second cas.

> **La vraie question n'est pas le nombre de sites, c'est le nombre de patients qui fréquentent les deux.** Si personne ne passe d'un cabinet à l'autre, deux installations séparées ne vous coûtent rien. Dès que l'orthodontiste consulte le mardi ici et le jeudi là-bas, la base commune cesse d'être une préférence.

## Ce que le RGPD décide vraiment

Cette partie ne relève pas du goût de chacun, et elle est plus concrète que ce que la plupart des groupes imaginent.

Les données de santé sont une catégorie particulière au sens de l'article 9, paragraphe 1, du règlement (UE) 2016/679. La conséquence est directe pour un petit cabinet : l'article 30, paragraphe 5, dispense de registre des activités de traitement les organisations de moins de 250 employés, mais cette dispense tombe dès lors que le traitement porte sur des catégories particulières de données visées à l'article 9, paragraphe 1. Un cabinet dentaire en traite tous les jours, donc le registre de l'article 30, paragraphe 1, s'impose à trois salariés comme à trente.

Si les sites appartiennent à la même structure, il y a un seul responsable de traitement et un seul registre, avec les sites décrits dedans. Si le deuxième cabinet appartient à une autre structure et que les deux déterminent conjointement les finalités et les moyens, l'article 26, paragraphe 1, en fait des responsables conjoints, tenus de définir par un accord leurs obligations respectives, notamment sur les droits de la personne concernée. L'article 26, paragraphe 2, ajoute que l'essentiel de cet accord est mis à la disposition du patient.

- **Le critère n'est pas le logiciel partagé.** C'est qui détermine les finalités et les moyens du traitement. Partager une installation ne fusionne pas deux structures, et séparer les installations n'écarte pas la responsabilité conjointe si les décisions se prennent ensemble.
- **L'accès se limite, il ne se distribue pas à la confiance.** L'article 32, paragraphe 4, impose que toute personne agissant sous l'autorité du responsable et ayant accès à des données ne les traite que sur instruction de celui-ci.
- **La sécurité a un contenu écrit.** L'article 32, paragraphe 1, point b), parle de garantir la confidentialité, l'intégrité, la disponibilité et la résilience constantes des systèmes de traitement, et l'article 5, paragraphe 1, point f), de protéger contre le traitement non autorisé et la perte accidentelle.

Ceci n'est pas un conseil juridique. C'est ce que disent les articles cités en fin d'article, consultés le 5 septembre 2026.

## L'agenda casse toujours en premier

Un agenda multi-sites échoue toujours au même endroit : quelqu'un place un praticien dans deux villes à la même heure.

1. **Le site est une propriété du fauteuil, pas du rendez-vous.** Un fauteuil est dans un local et n'en bouge pas. Si le site dépend du rendez-vous, un rendez-vous du cabinet A finira dans un fauteuil du cabinet B.
2. **Chaque praticien a des horaires par site.** Pas des horaires généraux et une note qui dit « le mardi à Villeurbanne ». Le logiciel doit pouvoir refuser un rendez-vous en dehors de ces plages.
3. **Le trajet se bloque comme du soin.** Quarante minutes entre deux sites sont quarante minutes invendables, et si elles ne sont pas dans l'agenda quelqu'un les vendra.
4. **Celui qui décroche voit tous les sites.** Si le secrétariat d'un cabinet ne voit pas les créneaux de l'autre, le patient qui demande « au plus tôt » attendra deux semaines avec un fauteuil vide à dix minutes.
5. **La vue par défaut est celle du site de la personne connectée.** Voir les trois d'un coup sert une fois par jour à celui qui coordonne, et gêne tous les autres.

![Agenda en vue semaine avec les rendez-vous répartis en colonnes](/screenshots/schedule-week.png)

*Une semaine en colonnes. En multi-sites, chaque colonne doit correspondre à un fauteuil précis dans un local précis, pas à un praticien qui semble présent dans deux villes.*

## Les chiffres ne parlent que comparés

Un groupe de trois cabinets dispose d'un avantage qu'un cabinet seul n'a pas : chaque chiffre a deux voisins pour se comparer. Encore faut-il mesurer la même chose dans les trois.

| Indicateur | Unité | Ce qui explique l'écart le plus souvent |
|---|---|---|
| Taux d'occupation du fauteuil | % d'heures occupées sur heures ouvertes | Des trous non recomblés, rarement un manque de patients |
| Rendez-vous non honorés | % des rendez-vous manqués | Le moment et le canal du rappel, pas le quartier |
| Acceptation des devis | % accepté sur présenté | Qui présente le devis et avec quel appui, pas le prix |
| Production par heure de fauteuil | Montant par heure ouverte | Le mix d'actes, pas le rythme de travail |
| Nouveaux patients | Entrées par mois | Origine et visibilité locale, vraiment propres au site |
| Impayés | Montant et ancienneté | La fermeté de l'encaissement à l'accueil |

Deux règles qui évitent les discussions. La production se rattache au site où l'acte a été réalisé, pas à celui qui a émis la facture. Et l'occupation se calcule sur les heures d'ouverture réelles de chaque site, parce qu'un cabinet ouvert quatre après-midis ne se compare pas à un cabinet ouvert cinq jours pleins.

![Tableau de bord des indicateurs de la période](/screenshots/reports.png)

*Les indicateurs de la période. En multi-sites, le même rapport filtré par cabinet transforme un chiffre de groupe en conversation précise.*

## L'argent, la caisse et les séries

La comptabilité est l'endroit où les groupes improvisent le plus, et où cela se voit le plus vite.

- **Une série de facturation par site.** Cela simplifie la caisse, le rapprochement avec le TPE et la discussion avec l'expert-comptable. Savoir si la réglementation l'impose, l'autorise ou s'en moque est une question pour votre comptable, pas pour un éditeur de logiciel.
- **La caisse se fait par site et chaque jour.** Une caisse de groupe confirme qu'un écart existe sans dire où.
- **Un TPE par site, rapproché des encaissements de ce site.** Un terminal partagé entre cabinets transforme chaque clôture en enquête.
- **Les charges communes se répartissent selon une règle écrite.** Peu importe laquelle, tant qu'elle est écrite et qu'elle ne change pas en cours d'année.

## Stock, stérilisation et tout ce qui est physique

Ce qui ne se déplace pas en un clic ne se gère pas en commun.

1. **Le stock se compte par site.** Un seuil d'alerte au niveau du groupe est un chiffre qui ne déclenche jamais de commande là où il manque quelque chose.
2. **Les transferts entre cabinets s'enregistrent comme des mouvements**, avec une date et un nom. Une boîte qui apparaît dans l'autre cabinet sans écriture est une boîte perdue à l'inventaire.
3. **La traçabilité de la stérilisation suit l'autoclave**, et l'autoclave est à une adresse. Cycle, charge et indicateurs se consignent là où ils ont eu lieu.
4. **Le contrôle des lots et des péremptions est local.** Personne ne vérifie les implants de l'autre site depuis un bureau ici.

## Droits d'accès : qui voit les autres cabinets

Le cas normal est que la majeure partie de l'équipe n'a pas besoin de voir l'autre local.

- **L'accueil d'un site :** l'agenda de tous les sites, les dossiers cliniques des seuls patients qu'il reçoit.
- **Un praticien qui consulte sur deux sites :** accès clinique sur les deux, aucun accès à la caisse ni de l'un ni de l'autre.
- **La coordination ou la direction :** tout, avec le journal des accès activé précisément parce qu'elle voit tout.
- **Un associé qui ne soigne pas :** des rapports agrégés, pas des dossiers cliniques. C'est la règle la plus délicate à poser et la plus facile à défendre en cas de contrôle.

> **L'accès à l'agenda et l'accès au dossier clinique sont deux droits, pas un seul.** Les confondre finit par permettre à l'accueil d'un cabinet de lire les notes cliniques de patients d'une autre ville qu'il n'a jamais reçus.

## Comment le mettre en place, dans l'ordre

L'ordre compte, parce que les étapes 2 et 3 coûtent beaucoup plus cher faites à l'envers.

1. **Écrivez d'abord quelle structure détient quoi.** C'est de là que sort le fait d'être un responsable unique ou deux responsables conjoints, et la structure technique en découle, pas l'inverse.
2. **Dédoublonnez avant de fusionner quoi que ce soit.** Fusionner deux bases sales produit une base sale deux fois plus grosse, et les doublons hérités deviennent bien plus difficiles à repérer.
3. **Déclarez les sites et leurs fauteuils**, avec les horaires d'ouverture réels de chacun.
4. **Attribuez les droits par rôle et par site** avant de créer le premier utilisateur. Après, plus personne ne les relit.
5. **Ouvrez les séries de facturation** et fixez la règle de répartition des charges communes.
6. **Posez la base de référence des indicateurs** ci-dessus, avec le trimestre précédent de chaque site.
7. **Repassez le détecteur de doublons à trente jours.** C'est le moment où sortent ceux que votre propre équipe a créés en apprenant à travailler en commun.

## Où tout cela vit

Rien de ce qui précède n'exige un logiciel particulier. Un groupe de deux cabinets avec un tableur bien tenu et des droits clairs tourne mieux qu'un groupe équipé d'un système coûteux et sans règles écrites.

Ce qui mérite d'être vérifié avant de signer, c'est si le prix grimpe avec les sites, les fauteuils ou les praticiens, car c'est le coût que personne ne projette au moment d'ouvrir le deuxième cabinet. [Dentalpin](/fr/tarifs/) propose un module multi-cabinets que l'on active au besoin, une même installation peut héberger plusieurs cabinets, et le tarif est forfaitaire : il ne bouge ni en ajoutant des fauteuils ni en ajoutant des praticiens. Le logiciel est open source et auto-hébergeable, donc les données des trois sites restent là où vous décidez de les garder.

## Sources

- Règlement (UE) 2016/679 (RGPD), articles 5.1.f), 9.1, 26.1, 26.2, 30.1, 30.5, 32.1.b) et 32.4 : [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679) (consulté le 5 septembre 2026)
