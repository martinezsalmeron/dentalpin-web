---
title: "Exporter les données de votre logiciel dentaire : le format à exiger"
description: "Quel export réclamer à votre logiciel dentaire avant de signer : les quatre blocs qu'il doit contenir, les formats qui tiennent et le test annuel."
pubDate: 2026-08-26
translationKey: exportar-datos-software-dental
tags: [export-donnees, migration, contrat, rgpd, dossier-clinique]
---

Demandez un export complet en formats ouverts : la base de données en CSV par table ou un dump SQL, les documents et les images en fichiers d'origine (PDF, JPG, DICOM), et un index qui relie chaque fichier à son patient. Faites-le écrire dans le contrat, avec un délai, sans frais, et déclenchable par vous sans appeler personne. Puis ouvrez-le une fois par an, parce qu'un export que vous n'avez jamais ouvert n'est pas une sortie, c'est une promesse.

Le format est la seule chose qui décide si, dans six ans, cela reste un dossier clinique ou devient un répertoire de fichiers que plus personne ne sait lire.

## Un export n'est pas une sauvegarde

Ce sont deux choses différentes, et presque toutes les conversations commerciales les confondent. Une sauvegarde restaure le système tel qu'il était, à l'intérieur du même logiciel. Un export vous permet de lire vos données sans ce logiciel.

Le test est simple. Si votre éditeur disparaissait cette nuit, la sauvegarde vous servirait-elle ? Si seul son logiciel ouvre le fichier, la réponse est non.

> **La question n'est pas "faites-vous des sauvegardes ?", elle est "qu'est-ce que je peux ouvrir sans vous ?".** Tout le monde répond oui à la première. La seconde sépare les éditeurs en deux groupes très différents.

Il vous faut les deux. La sauvegarde, c'est pour le disque qui lâche un mardi. L'export, c'est pour le jour où vous changez de logiciel, le jour où l'éditeur ferme, et le jour où l'on vous réclame un dossier vieux de huit ans.

## La loi vous donne le droit, pas le format

Quand vous achetez un logiciel de gestion, vous êtes le responsable du traitement et l'éditeur est le sous-traitant. L'article 28.3.g du RGPD impose au sous-traitant de "supprime[r] toutes les données à caractère personnel ou les renvoie[r] au responsable du traitement au terme de la prestation de services", selon le choix du responsable, et de détruire les copies existantes sauf obligation légale de conservation.

Ce droit est réel et il est le vôtre. Ce que l'article ne dit nulle part, c'est dans quel format.

> **Un PDF de neuf cents pages satisfait l'article 28.3.g.** Restituer les données et les restituer dans quelque chose d'exploitable ne sont pas la même obligation, et seule la première figure dans le règlement. La seconde doit figurer dans votre contrat.

C'est toute la différence entre quitter un éditeur en deux semaines et le quitter en six mois pendant que quelqu'un ressaisit des dossiers cliniques.

## L'obligation de conservation survit au contrat

C'est là que le format cesse d'être une préférence technique. La durée pendant laquelle vous devez pouvoir produire un dossier se compte en années, et elle ne s'arrête pas le jour où vous résiliez l'abonnement. Vérifiez la durée qui s'applique à votre exercice avant de supprimer quoi que ce soit.

Le compteur continue de tourner, et celui qui répond du dossier, c'est vous, pas l'éditeur que vous venez de quitter.

La vraie question n'est donc pas "puis-je emporter mes données ?" mais "pourrai-je les lire dans dix ans, sur un ordinateur qui n'existe pas encore, sans licence de quoi que ce soit ?". Il n'existe qu'une famille de réponses à cela, ce sont les formats ouverts.

## Les quatre blocs qui doivent sortir

Les exports incomplets échouent presque toujours au même endroit. On vous rend l'agenda et la fiche administrative, et on garde à l'intérieur le clinique et les fichiers. Réclamez les quatre par écrit.

| Bloc | Ce qui doit sortir | Format qui tient |
|---|---|---|
| Patients | Coordonnées, mutuelle, alertes médicales, consentements au dossier | CSV ou SQL, une ligne par patient avec un identifiant stable |
| Clinique | Odontogramme, parodontogramme, notes datées et signées, plans de traitement, prescriptions | CSV ou SQL, avec dent, face, état et date en champs distincts |
| Financier | Devis, factures avec leur numérotation, règlements, soldes, états | CSV ou SQL, en gardant le numéro de facture et l'état tels quels |
| Fichiers | Radiographies, photos, PDF, consentements signés | Les fichiers d'origine, plus un index qui les relie aux patients |

![Dossier patient affichant l'odontogramme, les alertes cliniques, le plan de traitement en cours et le prochain rendez-vous](/screenshots/dental-chart.png)

*Un odontogramme à l'écran : dent, face, état et date. Ce sont ces quatre champs qui doivent survivre à l'export.*

Le quatrième bloc est celui qui arrive le plus souvent cassé. On vous remet un répertoire de douze mille fichiers nommés `IMG_0043.jpg` et aucun moyen de savoir à qui appartient quoi. Un index, c'est un tableau à deux colonnes, nom de fichier et identifiant patient, et sans lui le répertoire ne vaut rien.

## Les formats qui tiennent et ceux qui ne tiennent pas

Une seule règle : pouvez-vous l'ouvrir sans le programme qui l'a produit ?

| Format | Utile pour | Lisible sans le logiciel ? |
|---|---|---|
| CSV | Les tables : patients, rendez-vous, factures, notes | ✓ N'importe quel tableur, n'importe quel langage |
| Dump SQL | La base entière, relations comprises | ✓ Avec PostgreSQL ou MySQL installé |
| JSON ou XML | Structures imbriquées, plans et leurs étapes | ✓ Lisible et documentable |
| PDF, JPG, PNG | Documents signés, photographie clinique | ✓ Des standards, ouvrables partout |
| DICOM | Radiographies et volumes | ✓ Standard international d'imagerie médicale |
| PDF en guise d'export | Rien. C'est le dossier imprimé | ✗ Un humain le lit, rien ne le migre |
| Format propriétaire (.dat, leur .bak) | Restaurer dans leur propre logiciel | ✗ Seul celui qui l'a écrit l'ouvre |
| Captures d'écran ou états imprimables | Consulter un point précis | ✗ Ce n'est pas de la donnée, c'est une image de la donnée |

Les radiographies méritent d'être nommées. DICOM est, selon l'organisme qui le maintient, "the international standard to transmit, store, retrieve, print, process, and display medical imaging information", géré par la Medical Imaging & Technology Alliance, une division de NEMA. Si votre logiciel range les radios dans autre chose que du DICOM ou un format d'image courant, demandez dès aujourd'hui comment elles sortent.

## Les clauses à demander avant de signer

Cela se négocie avant la signature, tant qu'ils vous veulent comme client. Après, il n'y a plus de conversation, il y a un tarif.

1. **Périmètre.** "Toutes les données saisies par le client et tous les fichiers joints", et non "les données patients". La seconde formulation laisse discrètement le clinique de côté.
2. **Format.** Nommé : CSV ou dump SQL pour la base, fichiers d'origine pour les pièces jointes, plus un index qui les relie.
3. **Documentation.** Une description des tables et des champs. Un CSV de quarante colonnes nommées `champ_17` est une énigme, pas un export.
4. **Autonomie.** Vous le déclenchez vous-même, depuis le logiciel, quand vous voulez. S'il faut ouvrir un ticket, le délai leur appartient.
5. **Délai.** À défaut d'autonomie, un nombre de jours précis à compter de la demande. Trente est raisonnable.
6. **Coût.** Zéro. Des frais d'export sont un péage de sortie, et il vaut mieux le voir écrit avant de signer qu'après.
7. **Après la résiliation.** Combien de temps vous pouvez encore le télécharger, et une suppression certifiée par écrit quand vous la demandez, ce que l'article 28.3.g vous permet d'exiger.
8. **En cas de dépôt de bilan.** Ce que deviennent vos données. La réponse peut être mauvaise, mais vous devez la connaître.

![Liste de factures avec les états émise, payée, partiellement payée, échue et brouillon](/screenshots/invoices.png)

*Chaque facture porte un état et une date. Si l'export emporte les montants mais perd l'état, la comptabilité est à reconstruire à la main.*

## Comment tester l'export une fois par an

C'est une heure par an, et c'est le seul moyen de savoir si ce qu'on vous a promis existe.

1. **Lancez-le et chronométrez.** S'il met trois jours, vous venez d'apprendre quelque chose d'important.
2. **Ouvrez un CSV.** En-têtes lisibles et accents corrects. Si vous voyez `Mart�nez`, l'encodage est cassé et c'est maintenant qu'il faut le dire.
3. **Comptez.** Le nombre de lignes du CSV patients contre le nombre de patients affiché par le logiciel. En cas d'écart, demandez pourquoi avant d'en avoir besoin.
4. **Prenez trois patients au hasard** et comparez la fiche à l'écran avec ce qui est sorti. Regardez surtout l'odontogramme et les notes.
5. **Ouvrez une radiographie** directement depuis le répertoire exporté, sans passer par le logiciel.
6. **Vérifiez l'index.** Prenez un fichier du répertoire et retrouvez son patient en n'utilisant que l'export.
7. **Stockez-le chiffré et hors du cabinet**, et notez la date. Cette date est la réponse le jour où l'on vous demandera quand cela a été vérifié.

> **La première fois, vous trouverez quelque chose.** Ce sont presque toujours les images ou l'odontogramme. Le trouver un mardi ordinaire coûte un courriel. Le trouver le jour du départ coûte toute la migration.

## Les signaux d'alerte

Aucun n'accuse qui que ce soit de mauvaise foi. Tous justifient une démonstration avant signature.

- **"On vous le donne en PDF."** Bon pour lire, inutile pour migrer. Demandez ce qu'il y a d'autre.
- **"C'est le support qui le lance."** Alors le délai n'est pas le vôtre. Faites écrire le nombre de jours.
- **"Il y a des frais d'extraction."** C'est un péage de sortie. Négociez-le maintenant, tant que c'est possible.
- **"Les images sont à part."** À part, très bien. Sans index, non.
- **"L'odontogramme ne s'exporte pas, il s'imprime."** Le signal le plus clair de tous : la donnée clinique structurée reste dedans.
- **Aucune documentation des champs.** Sans elle, migrer coûte aussi cher que ressaisir.

## Ce que vous pouvez vérifier cet après-midi

Inutile d'attendre le renouvellement. Ouvrez votre logiciel aujourd'hui, cherchez la fonction d'export et regardez ce qu'elle propose. Si vous ne la trouvez pas en cinq minutes, c'est déjà la réponse.

Dentalpin est open source et la base est PostgreSQL, donc exporter n'est pas une fonction à réclamer : vous pouvez dumper la base entière quand vous le souhaitez, et les pièces jointes sont sur le disque telles qu'elles ont été déposées. Il s'installe sur votre serveur ou s'utilise en version gérée, et les [tarifs](/fr/tarifs/) sont publiés.

## Sources

Toutes consultées le 26 août 2026.

- Règlement (UE) 2016/679 (RGPD), article 28, paragraphe 3, point g), texte publié par la CNIL. [cnil.fr](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4)
- DICOM, standard international des images médicales, géré par la Medical Imaging & Technology Alliance, division de NEMA. [dicomstandard.org](https://www.dicomstandard.org/)

Ceci n'est pas un conseil juridique. Les durées de conservation dépendent du document et de votre mode d'exercice : faites-les confirmer avant de supprimer quoi que ce soit.
