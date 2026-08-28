---
title: "Radiographies dentaires : les stocker, les retrouver et les transmettre"
description: "Comment stocker les radiographies dentaires : pourquoi le DICOM, combien de temps les conserver en France, où vivent les fichiers et comment les transmettre."
pubDate: 2026-08-28
translationKey: almacenar-radiografias-digitales
tags: [radiographies, dicom, dossier-clinique, rgpd, gestion-cabinet]
---

Rangez chaque radiographie dans le dossier clinique du patient, dans un format que vous pouvez ouvrir sans le logiciel du fabricant du capteur, et gardez une copie hors du cabinet. En France, le texte de référence sur la durée de conservation est l'article R1112-7 du code de la santé publique, qui fixe vingt ans, mais il vise les établissements de santé et non le cabinet libéral.

Voici ce que cela donne en pratique : quel format exiger, où le fichier doit vivre, combien d'espace prévoir, et comment transmettre une image sans en faire un incident.

## Le format compte plus que le disque

Une radiographie numérique n'est pas seulement une grille de pixels. Elle porte le patient, la date, l'appareil, la technique et les paramètres d'exposition, et c'est cette partie qui transforme une image en pièce du dossier.

La norme internationale, c'est le DICOM, que la NEMA définit comme la norme pour transmettre, stocker, retrouver, imprimer, traiter et afficher de l'imagerie médicale. Elle est téléchargeable gratuitement, donc n'importe qui peut vérifier ce qu'elle dit.

- **DICOM PS3.10** définit le format de fichier, celui qui permet de copier une image ailleurs et de la relire quand même.
- **DICOM PS3.2** définit la conformité et oblige chaque éditeur à publier un document décrivant ce qu'il implémente réellement. Ce document se demande avant l'achat, pas après.
- **Un JPEG exporté n'est pas la même chose.** Il sert à montrer une image au fauteuil, il ne sert pas d'archive, car il perd les métadonnées et souvent la profondeur de bits.

> **Le test qui dit si vous avez une archive ou un otage.** Prenez une radiographie d'il y a deux ans, copiez-la sur une clé USB et ouvrez-la sur un poste où le logiciel du capteur n'est pas installé. Si elle ne s'ouvre pas, vous n'avez pas d'archive clinique, vous avez un fichier enfermé dans un produit.

## Vingt ans, et ce que ce chiffre recouvre vraiment

L'article R1112-7 du code de la santé publique prévoit que le dossier médical "est conservé pendant une durée de vingt ans à compter de la date du dernier séjour". Deux règles s'y ajoutent : si la durée s'achève avant le vingt-huitième anniversaire du titulaire, elle est prolongée jusqu'à cette date, et si la personne décède moins de dix ans après son dernier passage, le dossier est conservé dix ans à compter du décès.

Le point à dire clairement : ce texte s'adresse aux établissements de santé. Un cabinet libéral n'y est pas nommé, et la profession s'y réfère par analogie, faute d'un texte qui fixe une durée pour lui.

| Décision | Ce qui se passe en général | Ce qu'il faut pouvoir montrer |
|---|---|---|
| Quand une image est supprimée | ✗ Jamais décidé, on supprime quand le disque est plein | ✓ Une règle écrite, appliquée de la même façon pour tous |
| Qui a le droit de la supprimer | ✗ Toute personne ayant accès au dossier partagé | ✓ Un droit précis, avec une trace |
| Où se trouve la copie la plus ancienne | ~ Sur un disque dans un placard | ✓ Sur un support que quelqu'un a relu cette année |

## L'image vit dans le dossier, pas dans un répertoire

Le problème le plus courant n'est pas de perdre les radiographies, c'est de ne pas les retrouver. Un dossier nommé `2019-11-14` contenant douze fichiers numérotés, c'est du papier numérisé, pas un dossier clinique.

Dès que l'image est rattachée au patient et au rendez-vous, trois choses cessent d'être des problèmes : la retrouver, savoir pourquoi elle a été faite, savoir qui l'a consultée.

![Dossier d'un patient avec l'odontogramme, les alertes cliniques et le plan de traitement en cours](/screenshots/dental-chart.png)

*Le dossier auquel l'image finit rattachée, à côté de la dent qu'elle documente et du plan qui l'a justifiée.*

| | Répertoire sur le poste du fauteuil | Partage réseau du cabinet | Rattachée au dossier clinique |
|---|---|---|---|
| Retrouver l'image d'un patient | ✗ Dépend du nom donné ce jour-là | ~ Tant que quelqu'un tient la convention | ✓ Elle est dans le dossier |
| Comprise dans la sauvegarde | ✗ Presque jamais | ~ Si quelqu'un a pensé à l'ajouter | ✓ Avec le reste des données |
| Survit au changement de poste | ✗ Reste sur l'ancienne machine | ~ Si le partage est migré | ✓ Suit la base de données |
| Trace de qui l'a consultée | ✗ Aucune | ✗ Aucune | ~ Seulement si le logiciel journalise les accès |

## Calculez l'espace, ne l'estimez pas

Aucun chiffre général ne sert, parce que tout dépend du capteur, de la résolution et de la présence ou non d'un cone beam. En revanche, on peut le savoir en dix minutes.

1. **Regardez la taille de votre répertoire d'images sur les douze derniers mois.** C'est le seul chiffre qui décrit votre cabinet et pas celui du voisin.
2. **Divisez-le par le nombre de patients vus** sur la période. Vous avez votre moyenne réelle par patient.
3. **Multipliez par les patients attendus et par les années de conservation.** C'est la taille de votre archive dans dix ans.
4. **Mesurez le cone beam à part**, si vous en faites. Un volume 3D n'est pas à la même échelle qu'une rétroalvéolaire, et un seul examen peut peser plus qu'une année d'intrabuccales.
5. **Comparez ce chiffre à l'espace inclus par votre éditeur** et au prix du palier suivant. C'est en général là que se trouve la surprise.

> **Une archive qui grossit sans règle finit par décider à votre place.** Le jour où le disque sature, la question n'est plus quoi conserver mais quoi effacer vite. Ce sont alors les images des patients qui ne viennent plus qui disparaissent, c'est-à-dire exactement celles qu'on vous réclamera dans trois ans.

## La sauvegarde qui laisse les images de côté

Les radiographies représentent presque tout le volume de données d'un cabinet, donc ce sont les premières écartées quand une sauvegarde doit tenir dans la nuit. Le travail continue de tourner, continue d'annoncer un succès, et ne protège plus l'essentiel.

- **Vérifiez la taille de la sauvegarde**, pas seulement le message de fin. Si elle pèse bien moins que vos données, les images sont écartées.
- **Restaurez une sauvegarde complète au moins une fois par an** et ouvrez trois patients avec des radiographies. La procédure détaillée est dans le guide des [sauvegardes](/fr/blog/sauvegardes-cabinet-dentaire/).
- **Chiffrez tout support qui sort du cabinet.** Un disque perdu contenant des images cliniques est une violation de données à notifier.

## Transmettre sans créer d'incident

Une radiographie identifie une personne et décrit sa santé : c'est une donnée sensible. Le RGPD impose des mesures adaptées au risque, et la pièce jointe dans un courriel ordinaire n'en est pas une dès qu'il existe mieux.

- **Au patient :** il a droit à une copie. Donnez-lui le DICOM s'il consulte un spécialiste, et joignez une version lisible sans logiciel particulier pour qu'il puisse l'ouvrir chez lui.
- **À un confrère :** un lien à durée limitée ou un portail vaut mieux qu'une pièce jointe, parce qu'il expire et laisse une trace. Si le courriel est imposé, chiffrez et transmettez le mot de passe par un autre canal.
- **Au laboratoire :** n'envoyez que ce que le travail exige. Une couronne ne demande pas tout l'historique radiologique du patient.
- **Tracez chaque envoi.** Date, destinataire, canal, contenu. Ce registre est votre réponse deux ans plus tard.

![Dossier patient sur l'onglet activité, avec les alertes cliniques, le plan en cours et une frise filtrable par visites, traitements, encaissements et échanges](/screenshots/patient-timeline.png)

*La frise du patient, où l'on voit à quelle visite chaque examen a été réalisé.*

## Au changement de logiciel, ce sont les images qui restent

Dans une migration, la base de données se négocie et les images s'oublient. Demandez trois choses précises par écrit, avant de signer.

1. **Un export des images en DICOM**, pas un dossier de captures d'écran ni une visionneuse propriétaire.
2. **Le lien entre chaque image, son patient et sa date**, dans un fichier lisible. Sans lui vous avez vingt mille fichiers et aucun historique.
3. **Un export d'essai maintenant**, sur dix patients réels, plutôt qu'une promesse pour le jour du départ.

Cette discussion se tient mieux avant l'engagement, et elle figure dans la liste des [questions à poser avant de signer](/fr/blog/questions-avant-de-signer-logiciel-dentaire/).

Dans Dentalpin les images sont rattachées au dossier clinique et posées sur le système de fichiers, donc elles entrent dans la même sauvegarde que la base et vous pouvez les emporter quand vous voulez. Les conditions sont sur la page [tarifs](/fr/tarifs/).

## Sources

- Code de la santé publique, article R1112-7. [Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036658351/). Consulté le 28 août 2026.
- Norme DICOM, édition en vigueur et liste des parties (PS3.2 Conformance, PS3.10 Media Storage and File Format for Media Interchange). [dicomstandard.org](https://www.dicomstandard.org/current). Consulté le 28 août 2026.
- Règlement (UE) 2016/679 (RGPD), articles 9, 15 et 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulté le 28 août 2026.

Ceci n'est pas un conseil juridique. Les durées applicables à votre situation méritent d'être confirmées auprès de votre conseil ou de votre ordre.
