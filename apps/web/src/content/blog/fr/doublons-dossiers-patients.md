---
title: "Doublons dans les dossiers patients : nettoyer sans rien perdre"
description: "Comment repérer les doublons de dossiers patients, choisir celui qui reste, fusionner sans perdre le dossier clinique ni les factures, et éviter les suivants."
pubDate: 2026-08-26
translationKey: pacientes-duplicados-limpiar
tags: [doublons, dossier-clinique, qualite-des-donnees, rgpd]
---

Ne supprimez aucun des deux dossiers. On choisit un dossier survivant, on y déplace tout ce qui est rattaché à l'autre (rendez-vous, devis, factures, images, consentements) et le dossier perdant reste archivé et lié, jamais effacé. Et avant de fusionner la première paire, corrigez le moment où les dossiers sont créés, sinon vous nettoierez la même base dans un an.

Le problème d'un doublon, ce n'est pas d'avoir deux lignes dans une table. C'est que l'allergie est notée dans un dossier et que l'extraction se prépare depuis l'autre.

## D'où viennent les doublons

Presque toujours des cinq mêmes endroits, et aucun n'est une négligence de l'équipe.

- **Le dossier est créé avant qu'on cherche.** Le téléphone sonne, trois personnes attendent, et le bouton "nouveau patient" est plus accessible que la recherche.
- **La même personne arrive par deux portes.** Prise de rendez-vous en ligne, téléphone, passage au cabinet, message. Si chaque canal peut créer un dossier sans vérifier, chaque canal fabrique des doublons.
- **Le nom n'est pas une donnée stable.** Nom d'usage et nom de naissance, particules, traits d'union, prénoms composés coupés en deux, accents parfois saisis et parfois non.
- **La migration a été lancée deux fois**, ou elle a importé des patients qui existaient déjà dans le nouveau logiciel.
- **La famille partage ses coordonnées.** Le portable de la mère figure sur les dossiers des trois enfants, et toute recherche par téléphone renvoie quatre personnes différentes qui ne sont pas des doublons.

## Chercher par indices, pas par nom

Lister tous les homonymes donne une liste longue et pleine de faux positifs. Ce qui marche, c'est de croiser deux indices à la fois et de trier le résultat selon la fiabilité de la combinaison.

| Indice | Fiabilité | À quoi il sert |
|---|---|---|
| Numéro d'identité de santé identique | ✓ Très élevée | À examiner en premier, c'est une quasi-certitude |
| Portable + date de naissance | ✓ Élevée | La combinaison la plus rentable au cabinet |
| Nom normalisé + date de naissance | ✓ Élevée | Retrouve ceux qui ont changé de numéro |
| Adresse e-mail identique | ~ Moyenne | Les familles partagent une boîte |
| Le téléphone seul | ✗ Faible | Renvoie des foyers entiers |
| Nom + code postal | ✗ Faible | Voisins et parents |

Normaliser avant de comparer représente la moitié du travail. Pour le nom : tout en minuscules, accents supprimés, ponctuation et traits d'union retirés, espaces réduits. Pour le téléphone : espaces et indicatif retirés, puis comparaison des neuf derniers chiffres.

C'est ce qui met "Jean-Étienne Le Guen" et "jean etienne leguen" dans le même groupe, ce que la recherche de l'accueil ne fait justement pas.

![Dossier patient avec l'onglet des informations ouvert : nom, numéro d'identification, date de naissance, téléphone, e-mail et adresse](/screenshots/patients.png)

*Les champs que l'on compare pour décider si deux dossiers concernent la même personne. La date de naissance est le critère le plus discriminant et celui qui reste le plus souvent vide.*

## Lequel reste : rarement le plus récent

Le dossier récent est en général celui créé dans l'urgence : le nom bien orthographié et rien d'autre à l'intérieur. L'ancien contient le schéma dentaire, les radiographies et huit ans d'historique.

> **C'est le dossier avec du contenu clinique qui reste, pas celui dont les coordonnées sont justes.** Un numéro de téléphone se recopie en dix secondes. Un odontogramme avec douze traitements et leurs dates, non.

Quand les deux contiennent du contenu réel, l'ordre de départage est le suivant :

1. **Celui qui porte les notes cliniques et l'odontogramme.** C'est la partie qu'on ne peut pas ressaisir sans perdre les dates et l'auteur.
2. **Celui qui apparaît sur des factures émises.** Rattacher une facture ailleurs est simple, mais moins on y touche, mieux c'est.
3. **Le plus ancien**, parce que le numéro de dossier que le patient cite depuis des années, c'est celui-là.

Les données administratives se réconcilient champ par champ ensuite, pas en bloc. Le dossier récent gagne souvent sur le nom, l'ancien gagne toujours sur l'historique clinique.

## La fusion, étape par étape

1. **Faites une sauvegarde avant de toucher à quoi que ce soit.** Une fusion a rarement un bouton d'annulation, et quand il existe, il n'annule pas ce qui est déjà imprimé.
2. **Ouvrez les deux dossiers et listez ce qui est rattaché à chacun** : rendez-vous passés et à venir, devis, factures, règlements et impayés, radiographies et photos, consentements signés, notes cliniques, travaux de laboratoire et traitements d'orthodontie en cours.
3. **Décidez du dossier survivant** avec l'ordre ci-dessus, et notez la décision avant de commencer.
4. **Déplacez, ne ressaisissez pas.** Recopier une note clinique à la main change sa date et son auteur, c'est exactement ce qu'un dossier de soins ne peut pas perdre.
5. **Ne renumérotez et ne réémettez aucune facture.** Une facture émise est un document clos : on change le patient auquel elle est rattachée, jamais son numéro, sa date ou ses montants.
6. **Archivez le dossier perdant en le liant au survivant.** Celui qui cherche l'ancien numéro doit arriver au bon dossier, pas à une erreur.
7. **Consignez qui a fusionné, quand et depuis quel dossier.** Dans deux ans, cette note sera la seule explication du saut dans l'historique.
8. **Revérifiez les alertes médicales du dossier obtenu.** Allergies, anticoagulants et prémédication sont la première chose qu'une fusion bâclée fait disparaître.

> **Les factures sont la partie qui ne tolère aucune improvisation.** Une série de numérotation émise doit rester exactement telle quelle. Si la fusion semble imposer de réémettre quelque chose, ce n'est plus une fusion, et cette décision revient à qui tient la comptabilité.

![Liste de factures avec leurs états : émises, réglées, partiellement réglées, en retard et brouillons](/screenshots/invoices.png)

*Ce qui est rattaché à un dossier et ne peut pas être réécrit. Avant de fusionner, il faut savoir combien de factures se trouvent de chaque côté et dans quel état.*

## Ceux qui ressemblent à des doublons sans en être

Fusionner deux dossiers qui n'étaient pas la même personne est pire que le problème de départ, puisque cela mélange deux histoires cliniques.

- **Les familles avec un seul numéro.** Trois enfants sur le portable de leur mère, ce sont trois patients.
- **Un parent et son enfant avec le même prénom.** La date de naissance les sépare, le nom non.
- **Les jumeaux.** Même nom, même date de naissance, même adresse, même téléphone. Le seul cas où il faut lire l'historique avant de trancher.
- **Les mineurs sans numéro d'identité propre.** Ils n'ont pas l'indice le plus fiable, on compare donc nom, date de naissance et représentant légal.

En cas de doute, on ne fusionne pas : on marque la paire comme vérifiée et on pose la question au patient à la visite suivante.

## Ce que la réglementation demande

Ceci n'est pas un conseil juridique, mais deux points méritent d'être connus avant de nettoyer une base de patients.

L'article 5.1.d du RGPD exige des données "exactes et, si nécessaire, tenues à jour", et impose que "toutes les mesures raisonnables doivent être prises" pour que les données inexactes soient effacées ou rectifiées sans tarder. Une base pleine de doublons y contrevient par construction, donc la nettoyer n'est pas seulement de l'hygiène interne.

L'article 16 ajoute le droit du patient d'obtenir "dans les meilleurs délais, la rectification des données à caractère personnel la concernant qui sont inexactes", et de faire compléter des données incomplètes. C'est exactement la situation de quelqu'un dont la moitié du dossier est dans chaque fiche.

Et la raison pour laquelle on archive au lieu de supprimer tient à l'autre versant : votre obligation de conservation porte sur le dossier de soins, pas sur le numéro sous lequel il se trouve. Supprimer un dossier perdant qui contient du contenu clinique reste un problème quel que soit le délai applicable.

## Éviter les mille suivants

Nettoyer sans changer le circuit d'accueil, c'est du travail qui se répète. Cinq changements qui cassent le cycle :

- **Chercher avant de créer, et faire de la recherche le chemin facile.** Si l'accueil doit taper un nom complet pour trouver quelqu'un, il créera un nouveau dossier.
- **Date de naissance obligatoire dès le premier contact.** C'est le champ qui transforme une recherche ambiguë en certitude, et celui que tout le monde saute.
- **Normaliser à l'enregistrement**, pas à la recherche. Accents, espaces superflus et indicatifs se nettoient une fois, à l'entrée.
- **Faire correspondre la prise de rendez-vous en ligne à la base** au lieu de créer systématiquement un dossier. C'est la porte qui produit le plus de doublons.
- **Un rapport de doublons possibles chaque semaine.** Dix paires par semaine se vérifient en cinq minutes ; mille paires par an ne se vérifient jamais.

## Ce que le logiciel doit permettre

Une fusion sûre repose sur quatre choses : une recherche qui tolère accents et variantes, un rapport de doublons vérifiable paire par paire, une fusion qui déplace les enregistrements au lieu de les copier, et une trace de qui l'a faite et quand.

Dentalpin a ces quatre points et conserve le dossier fusionné comme alias du survivant, si bien que l'ancien numéro mène toujours au bon dossier. Il s'installe sur votre propre serveur ou s'utilise en version gérée, et les [tarifs](/fr/tarifs/) sont publiés sur le site.

## Sources

Toutes consultées le 26 août 2026.

- Règlement (UE) 2016/679 (RGPD), articles 5.1.d, 5.1.e et 16, texte publié par la CNIL. [cnil.fr, chapitre II](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2) et [chapitre III](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3)
