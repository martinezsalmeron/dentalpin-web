---
title: "Photographie clinique au cabinet dentaire : organiser et protéger les images"
description: "Où ranger les photos de patients, quel consentement pour les publier et combien de temps les conserver. Avec les sources officielles."
pubDate: 2026-09-13
translationKey: fotografia-clinica-dental
tags: [photographie-clinique, dossier-clinique, rgpd, consentement, sauvegardes]
---

Une photographie clinique fait partie du dossier clinique. Elle a sa place dans le dossier du patient, avec les mêmes droits d'accès, la même sauvegarde et la même durée de conservation que le reste, pas dans la pellicule d'un téléphone ni dans un dossier partagé de l'accueil.

Deux choses sont sans arrêt confondues : prendre la photo pour diagnostiquer et soigner, qui ne demande aucun consentement au titre des données, et la publier, qui en demande un à elle seule, explicite et révocable.

Ceci n'est pas un conseil juridique. Toutes les sources officielles figurent à la fin, consultées le 13 septembre 2026.

## La photo est une donnée de santé, même sur un téléphone

L'article 4, point 15, du RGPD définit les données concernant la santé comme "les données à caractère personnel relatives à la santé physique ou mentale d'une personne physique, y compris la prestation de services de soins de santé, qui révèlent des informations sur l'état de santé de cette personne".

Une photo intra-orale correspond exactement à cette définition. Elle révèle l'état d'une bouche, elle a été prise pendant un soin, et elle relève de la catégorie particulière que l'article 9, paragraphe 1, interdit de traiter sauf exception.

> **Si la photo pèse sur le diagnostic ou sur le plan de traitement, elle appartient au dossier.** L'endroit où le fichier se trouve n'y change rien : une image dans une pellicule personnelle reste un document de soin, simplement hors de tout contrôle.

C'est l'argument concret contre le téléphone personnel. Prendre la photo avec un téléphone n'est pas le problème. La pellicule synchronisée avec un compte personnel l'est, tout comme le fait que quiconque tient l'appareil peut la faire défiler et que le cabinet ne peut ni la tracer ni l'effacer.

![Dossier patient affichant l'odontogramme, les alertes cliniques, le plan de traitement en cours et le prochain rendez-vous](/screenshots/dental-chart.png)

*L'écran depuis lequel quelqu'un cherchera cette photo dans deux ans. Si l'image n'y est pas rattachée, elle n'existe pas.*

## Où finissent les images, et ce que chaque endroit coûte

| Où se trouve l'image | Qui la voit | Ce qui se passe à une demande de dossier |
|---|---|---|
| Pellicule d'un téléphone personnel | ✗ Celui qui tient le téléphone | ✗ Personne ne sait quelles photos existent ni de qui |
| Dossier réseau au nom du patient | ~ Tous ceux qui accèdent au dossier | ~ Recherche à la main, et les doublons passent à travers |
| Carte mémoire de l'appareil | ✗ Celui qui a la carte | ✗ N'apparaît jamais : personne n'y regarde |
| Fil de messagerie avec le laboratoire | ✗ Hors du cabinet, sans traçabilité | ✗ Aucune copie locale à remettre |
| Rattachée au dossier du patient | ✓ Seulement le personnel autorisé | ✓ Sort avec le reste du dossier |

Ce qui sépare les premières lignes de la dernière n'est pas la qualité de l'image. C'est la capacité à répondre en une minute à "montre-moi toutes les photos de ce patient" et à "qui les a ouvertes".

## Deux consentements, et un seul est facultatif

L'article 9, paragraphe 1, interdit en principe de traiter des données concernant la santé. Le paragraphe 2 liste les exceptions, et celle qui porte la journée de travail d'un cabinet est le point h) : le traitement nécessaire "aux fins de la médecine préventive ou de la médecine du travail (...) de diagnostics médicaux, de la prise en charge sanitaire ou sociale".

Photographier pour diagnostiquer, planifier et suivre l'évolution entre là-dedans. Aucun consentement au titre des données n'est requis, exactement comme pour rédiger les notes du jour.

Publier est autre chose. Il n'y a plus de prise en charge sanitaire pour couvrir quoi que ce soit, et la base devient le point a) : "la personne concernée a donné son consentement explicite au traitement de ces données à caractère personnel pour une ou plusieurs finalités spécifiques".

> **Le consentement aux soins ne couvre ni le site, ni la diapositive de congrès, ni Instagram.** Ce sont des finalités distinctes avec une base juridique distincte, et le consentement doit dire laquelle il couvre.

Deux conséquences qu'on oublie :

- **Il est révocable.** Un consentement qu'on ne peut pas retirer aussi facilement qu'on l'a donné n'en est pas un, et le retrait oblige à dépublier, pas à laisser en ligne au motif que c'est déjà en ligne.
- **Pour un mineur, ce sont les titulaires de l'autorité parentale qui le donnent**, et l'enfant de la photo aura dix-huit ans un jour. Un accord signé par un parent en 2019 est une base fragile en 2032.

## Une photo de patient n'est pas d'office une donnée biométrique

C'est la confusion coûteuse dans l'autre sens, celle qui paralyse les cabinets prudents. Le considérant 51 du RGPD est explicite :

"Le traitement des photographies ne devrait pas systématiquement être considéré comme constituant un traitement de catégories particulières de données à caractère personnel, étant donné que celles-ci ne relèvent de la définition de données biométriques que lorsqu'elles sont traitées selon un mode technique spécifique permettant l'identification ou l'authentification unique d'une personne physique."

Donc la photo d'une arcade est une donnée de santé, avec tout ce que cela implique, mais elle n'est pas biométrique du seul fait d'être une photo. Elle le devient le jour où elle passe dans un système de reconnaissance faciale, ce que fait sans le demander une partie des galeries grand public dans le cloud.

## Les métadonnées racontent ce que vous n'avez pas dit

Un fichier image contient autre chose que des pixels. Le format Exif, normalisé par la CIPA sous la référence DC-008, définit un bloc GPS dédié en plus de la date, de l'heure et du modèle d'appareil.

Trois vérifications concrètes :

1. **Regardez si votre appareil ou votre téléphone écrit des coordonnées.** Si le cabinet est aussi un domicile, cette coordonnée est une information sur une personne et non sur une dent.
2. **Mettez l'horloge de l'appareil à l'heure.** Une série datée trois ans à côté ne démontre aucune évolution, et deux séries de patients s'entremêlent dès qu'un tri par date intervient.
3. **Lisez le nom du fichier avant de l'envoyer.** `dupont-marie-preop.jpg` voyage avec le fichier jusqu'au laboratoire, jusqu'à la boîte d'un confrère et jusqu'aux téléchargements des deux.

> **Anonymiser, ce n'est pas poser un bandeau noir sur les yeux.** Une photo intra-orale n'a aucun visage à masquer et peut malgré tout porter le nom du patient dans le nom de fichier, la date exacte dans l'Exif et la coordonnée du cabinet à côté.

## Une série photographique réellement reproductible

L'intérêt de la photographie clinique tient à la comparaison, et seul se compare ce qui est pris de la même façon. Avant de discuter matériel, fixez la série et le cadrage :

1. **Arrêtez un ensemble fixe** et écrivez-le. Un jeu de travail courant compte huit prises : extra-oral de face au repos, de face en souriant, profil, intra-oral de face en occlusion, latérale droite, latérale gauche, occlusale supérieure et occlusale inférieure.
2. **Fixez la distance et la hauteur.** Si une série est prise debout et la suivante assis, l'avant-après mesure la posture de l'opérateur.
3. **Fixez la lumière.** Même flash, même balance des blancs, sinon la couleur bouge d'une visite à l'autre et toute comparaison de teinte ne vaut rien.
4. **Prenez la série entière même quand vous n'en avez pas besoin.** Refaire la vue manquante six mois plus tard est impossible.
5. **Déchargez et rattachez le jour même.** Ce qui reste sur la carte "pour plus tard" est ce qui se perd.
6. **Ne retouchez pas l'image clinique.** Recadrer, éclaircir ou saturer transforme un enregistrement en illustration. Si une présentation demande une version retouchée, faites-en un fichier distinct et laissez l'original intact.

Le point 6 est le plus souvent sauté et le plus cher. Une photo retouchée ne documente plus rien, puisque l'effet du traitement ne se distingue plus de l'effet du filtre.

## Sauvegardes : les images pèsent presque tout

Dans un cabinet sans papier, le texte des dossiers occupe très peu et les images occupent presque tout. Cela change deux décisions pratiques.

- **Faites le calcul avant de choisir où elles vivent.** Multipliez la taille d'une série par le nombre de cas photographiés dans l'année et vous obtenez la croissance annuelle réelle. Ce chiffre décide si la sauvegarde tient là où vous le croyez.
- **Vérifiez que la sauvegarde prend les fichiers, pas seulement la base.** C'est l'échec classique : le logiciel est sauvegardé, et les images sont dans un dossier que personne n'a ajouté au travail.
- **Restaurez une image pour de vrai, une fois.** Une sauvegarde jamais restaurée est une hypothèse.

![Dossier patient, onglet activité : alertes cliniques, plan en cours et frise filtrable par visites, traitements, finances et communications](/screenshots/patient-timeline.png)

*Une frise avec un auteur et une date sur chaque entrée. C'est ce qui transforme un tas de fichiers en dossier.*

## Qui peut les ouvrir, et comment le savoir

Les droits sur les images sont en général plus larges que sur le reste du dossier, sans raison valable. La photo d'une arcade est une donnée concernant la santé au même titre que l'anamnèse.

Deux questions auxquelles il faut pouvoir répondre sans réfléchir : quels profils peuvent consulter les images d'un patient qu'ils ne soignent pas, et existe-t-il une trace de qui a ouvert quoi. Si la réponse à la seconde est non, l'accès aux images n'est pas contrôlé, il est simplement autorisé.

## Combien de temps les conserver

Les photos héritent de la durée de conservation du dossier auquel elles appartiennent, puisqu'elles en font partie.

Pour un cabinet libéral, la CNIL donne la durée dans son référentiel relatif à la gestion des cabinets médicaux et paramédicaux : les données "peuvent être conservées pendant une durée de vingt ans à compter de la date de la dernière prise en charge du patient : en base active, pendant une durée de cinq ans à compter de la dernière intervention sur le dossier du patient, puis, à l'issue de cette période, sous la forme archivée sur un support distinct pendant quinze ans".

Deux points pratiques dans cette phrase. La base active et l'archive sont deux endroits différents, avec des sécurités équivalentes, ce qui suppose un logiciel capable d'archiver et pas seulement de supprimer. Et le même référentiel rappelle que la conservation ne peut pas être indéfinie, ce qui règle la tentation de tout garder pour toujours.

## Dix minutes pour savoir où vous en êtes

1. **Prenez le téléphone qui sert aux photos** et comptez les images de patients dans la pellicule à cet instant.
2. **Vérifiez si cette pellicule se synchronise** avec un compte photo personnel dans le cloud.
3. **Ouvrez une photo récente et lisez ses propriétés** : date, heure, et présence ou non de coordonnées.
4. **Retrouvez toutes les images d'un patient donné.** Chronométrez.
5. **Vérifiez que votre sauvegarde couvre le dossier d'images** et à quand remonte la dernière restauration.
6. **Retrouvez le consentement de publication** de la dernière photo mise en ligne sur les réseaux. S'il ne sort pas, c'est le chantier de la semaine.

Dans Dentalpin les images se rattachent au dossier du patient plutôt que de vivre dans un dossier séparé, les droits et le journal d'accès sont ceux qui couvrent le reste du dossier, et tout ressort sous forme d'un export PostgreSQL standard accompagné des fichiers, sans format propriétaire au milieu. Le code est ouvert, ce qui permet de l'auditer au lieu de le croire, et les conditions des versions hébergée et auto-hébergée sont sur la page [tarifs](/fr/tarifs/).

## Sources

Toutes consultées le 13 septembre 2026.

- Règlement (UE) 2016/679 (RGPD), articles 4, point 15, et 9, et considérant 51. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj).
- CNIL, "Référentiel relatif aux traitements de données à caractère personnel mis en œuvre à des fins de gestion des cabinets médicaux et paramédicaux", section 7, durées de conservation. [cnil.fr](https://www.cnil.fr/sites/default/files/atoms/files/referentiel_-_cabinet.pdf).
- CIPA DC-008 / DC-X008, "Exchangeable image file format for digital still cameras: Exif Version 2.32", GPS Info IFD. [cipa.jp](https://www.cipa.jp/std/documents/e/DC-X008-Translation-2019-E.pdf).
