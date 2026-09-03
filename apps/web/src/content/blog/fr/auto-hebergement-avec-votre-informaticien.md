---
title: "Auto-hébergement avec votre informaticien : ce qu'il faut convenir"
description: "Serveur du cabinet confié à un prestataire local : le contrat de sous-traitance obligatoire, les sauvegardes réellement restaurées, les accès, les délais et la sortie."
pubDate: 2026-09-03
translationKey: self-hosting-con-tu-informatico
tags: [auto-hebergement, rgpd, sauvegardes, prestataires, cabinet-dentaire]
---

Si votre cabinet héberge lui-même son logiciel et qu'un informaticien extérieur administre le serveur, quatre choses doivent être écrites avant qu'il ne touche à quoi que ce soit : le contrat de sous-traitance, obligatoire dès qu'il peut accéder aux données des patients ; ce que veut dire exactement « je fais des sauvegardes », avec une restauration de test datée ; qui détient les identifiants administrateur et où se trouvent les données ; et en combien d'heures il répond le lundi où l'agenda refuse de s'ouvrir. Le reste est du détail.

Rien de tout cela n'exige vingt pages de contrat. Cela tient sur deux feuilles et dans une réunion d'une demi-heure, et cette réunion coûte moins cher que la première nuit sans agenda.

## Votre informaticien est sous-traitant dès le premier jour

Le cabinet est responsable du traitement des données de ses patients. La personne ou la société qui administre le serveur où ces données se trouvent est sous-traitante, même si elle n'ouvre jamais un dossier clinique et même si elle répare vos imprimantes depuis quinze ans.

L'article 28.3 du RGPD impose que cette relation soit encadrée par un contrat qui lie le sous-traitant au responsable de traitement, et l'article 28.9 en fixe la forme : par écrit, y compris sous forme électronique. La CNIL publie des exemples de clauses pour ce contrat, ce qui règle l'objection la plus fréquente, celle qui consiste à dire que personne au cabinet ne saurait rédiger un tel document.

> **Un accord verbal avec l'informaticien habituel n'est pas un contrat de sous-traitance.** La confiance personnelle ne remplace pas le document, et celui qui répond devant la CNIL en son absence, c'est le cabinet, pas lui.

Ce n'est pas de la paperasse défensive. Le contrat est l'endroit où l'on écrit enfin qui fait les sauvegardes, à quelle fréquence le serveur est mis à jour et ce qui se passe le jour où vous cessez de travailler ensemble, c'est-à-dire les trois points dont personne ne se souvient avoir discuté au moment où ils comptent.

![Schéma d'une installation auto-hébergée : le navigateur atteint Caddy en HTTPS, qui envoie /api/* vers le backend et le reste vers le frontend Nuxt ; le backend dialogue avec PostgreSQL](/diagrams/install-stack.svg)

*Un serveur, quatre processus et une base de données. Chaque case du schéma est quelque chose que quelqu'un doit maintenir.*

## Les clauses que l'article 28 écrit déjà pour vous

Le contenu du contrat n'est pas laissé à votre imagination. Traduit en langage de cabinet :

- **Des instructions documentées.** Le prestataire traite les données uniquement selon vos instructions, et ces instructions existent par écrit, même si cet écrit est un courriel.
- **La confidentialité.** Toute personne ayant accès au serveur y est tenue, y compris le technicien qui passe un mardi changer un disque.
- **La sécurité.** Les mesures de l'article 32, nommées une par une : chiffrement, contrôle des accès, sauvegardes, mises à jour.
- **La sous-traitance ultérieure.** Si la machine est dans un centre de données tiers, ou si les sauvegardes partent chez un hébergeur, c'est de la sous-traitance ultérieure et elle demande votre autorisation. La CNIL décrit les deux voies possibles : soit vous autorisez à l'avance une liste nommée de sous-traitants, soit vous convenez d'être prévenu de tout changement par écrit et de pouvoir vous y opposer.
- **L'aide sur les droits des patients.** Quand quelqu'un demande son dossier ou son effacement, le prestataire doit pouvoir le sortir du système.
- **La restitution ou la destruction à la fin.** À la fin du service, les données vous sont rendues ou détruites, à votre choix.
- **L'audit.** Il met à votre disposition les informations nécessaires pour démontrer sa conformité et accepte les vérifications.

Ce dernier point a une lecture pratique que beaucoup de cabinets sautent : l'obligation de choisir un sous-traitant présentant des garanties suffisantes ne s'éteint pas le jour de la signature. Elle est continue. Si vous n'avez pas reparlé des sauvegardes depuis deux ans, vous ne les avez pas vérifiées.

## Ce qui se dit à l'oral et ce qui devrait être écrit

| Engagement | Comment on le convient d'habitude | Comment il devrait être rédigé |
|---|---|---|
| Sauvegardes | ~ « Je sauvegarde toutes les nuits » | ✓ Fréquence, destination, chiffrement et destinataire de l'alerte en cas d'échec |
| Restauration | ✗ Jamais testée | ✓ Un test documenté par an, avec date et résultat |
| Mises à jour | ~ « Quand il sort quelque chose d'important » | ✓ Une fenêtre mensuelle convenue et un préavis pour les versions majeures |
| Délai de réponse | ✗ « Appelez-moi, je regarde » | ✓ Horaires, canal et délais selon la gravité |
| Accès | ~ Un compte administrateur partagé | ✓ Comptes nominatifs, révoqués le jour même d'un départ |
| Fin de la relation | ✗ Non prévue | ✓ Restitution ou destruction des données et remise des identifiants |

Aucune case de la colonne de droite ne coûte d'argent. Elle coûte une conversation un peu inconfortable de vingt minutes, une fois.

## « Je sauvegarde toutes les nuits » ne dit encore rien

L'article 32.1 du RGPD ne demande pas des sauvegardes. Il demande deux choses plus exigeantes : « la capacité de rétablir la disponibilité des données à caractère personnel et l'accès à celles-ci dans des délais appropriés en cas d'incident physique ou technique », et « une procédure visant à tester, à analyser et à évaluer régulièrement l'efficacité » des mesures.

Lu à la lettre, cela signifie qu'une sauvegarde que personne n'a jamais restaurée ne prouve rien, puisque ce que le texte mesure, c'est la restauration et non le fichier.

> **Une sauvegarde ne se teste pas le jour où on en a besoin.** Elle se teste un mardi ordinaire, sans urgence, restaurée sur une machine à part, en vérifiant trois chiffres : le nombre de patients, la dernière facture et le dernier rendez-vous enregistré.

Demandez que ce test soit un livrable daté et non une promesse. Un courriel de deux lignes une fois par an disant « sauvegarde du 14 mai restaurée sur un serveur de test, 3 412 patients, dernière facture 2026/0871 » vaut mieux que n'importe quelle clause.

## Deux dates déjà inscrites au calendrier, que vous les regardiez ou non

Une partie de la maintenance ne dépend de l'avis de personne, parce qu'elle a une date publiée.

1. **La version majeure de PostgreSQL.** Le projet assure cinq ans de support à chaque version majeure à compter de sa sortie. PostgreSQL 14 reçoit sa dernière mise à jour le 12 novembre 2026, et la 15 le 11 novembre 2027. Si votre base tourne sur l'une des deux, la migration a déjà une échéance et mérite un budget.
2. **Le certificat.** Les certificats Let's Encrypt sont valables 90 jours et le renouvellement est recommandé tous les 60 jours. L'autorité précise qu'il n'existe aucun moyen d'ajuster cette durée et aucune exception. Un programme optionnel propose en plus des certificats de six jours, renouvelés tous les trois. Tout cela est automatisé jusqu'au jour où quelqu'un ferme le port 80 et où le renouvellement s'arrête en silence.

Ces deux dates entrent au contrat comme fenêtre de maintenance, pas comme faveur. La seconde vient avec un nom : qui surveille que le renouvellement a toujours lieu.

## Les clés appartiennent au cabinet, même si c'est lui qui s'en sert

C'est là que le plus grand nombre de cabinets se retrouvent coincés, rarement par mauvaise foi du prestataire. Personne n'en avait parlé.

- **Le mot de passe administrateur est dans le gestionnaire de mots de passe du cabinet**, pas seulement sur le portable de l'informaticien.
- **Des comptes nominatifs, jamais un compte « admin » partagé.** Si trois personnes utilisent le même identifiant, le journal des accès ne sert à rien le jour où il faut le lire.
- **Le nom de domaine et le DNS au nom du cabinet.** Un domaine déposé par le prestataire est une négociation future déguisée en service rendu.
- **Une copie de sauvegarde dans un endroit qu'il ne contrôle pas.** Ce n'est pas de la méfiance : si un rançongiciel entre par son poste, ses copies et les vôtres sont du même côté.
- **La révocation le jour même.** Quand quelqu'un quitte le prestataire ou le cabinet, son accès est retiré ce jour-là, et cela se convient à l'avance pour ne pas avoir à le demander comme une faveur.

![Écran d'accueil affichant les rendez-vous du jour, qui est présent au cabinet, les paiements en retard et les derniers patients reçus](/screenshots/home.png)

*Voilà l'écran qui doit être ouvert à huit heures et demie. Tout ce que vous convenez avec votre informaticien existe pour qu'il s'affiche.*

## Le délai de réponse, en heures et en français courant

Un engagement de service pour un cabinet de trois fauteuils n'a pas besoin de vocabulaire de multinationale. Il a besoin de trois lignes.

- **Le cabinet ne peut pas travailler.** L'agenda ne s'ouvre pas, le serveur ne répond plus. Cette ligne se convient avec un numéro de téléphone plutôt qu'une adresse mail, et un nombre d'heures.
- **Cela fonctionne, mais mal.** Une imprimante, un poste, une intégration tombée. Le jour même ou le jour ouvré suivant.
- **Question ou amélioration.** Une semaine, et cela n'a pas d'importance.

Ajoutez les deux détails que tout le monde oublie : ce qui se passe en août et entre Noël et le jour de l'an, et qui répond si votre informaticien est en arrêt. Un prestataire d'une seule personne convient parfaitement à un petit cabinet, à condition que la suppléance soit écrite quelque part.

## La clause de sortie se signe à l'entrée

Changer d'informaticien est normal et n'a rien de dramatique. Cela le devient quand rien n'a été prévu.

L'article 28.3.g du RGPD vous donne déjà le droit : à la fin du service, les données sont supprimées ou restituées. Rendez-le concret pendant que la relation est bonne.

1. **Dans quel format la base est remise**, sous forme d'un export complet et non d'une extraction partielle vers un tableur.
2. **Quels identifiants sont transférés**, et sous combien de jours.
3. **Qui accompagne la transition**, et combien d'heures sont incluses.
4. **La preuve de destruction.** La CNIL recommande que la destruction porte sur toutes les copies présentes dans les systèmes du prestataire, avec une attestation écrite. Demandez-la aussi.

> **Aucune de ces quatre lignes ne se négocie bien le jour du départ.** Elles se négocient le premier jour, quand les deux parties ont intérêt à ce que la relation commence proprement.

## La réunion d'une demi-heure

Si vous voulez régler la question demain, voici l'ordre du jour :

1. Signer le contrat de sous-traitance reprenant les points de l'article 28.3.
2. Écrire où vont les sauvegardes, à quelle fréquence et qui reçoit l'alerte d'échec.
3. Fixer une date pour la prochaine restauration de test.
4. Noter la version de PostgreSQL en production et sa date de fin de support.
5. Mettre le mot de passe administrateur dans le gestionnaire du cabinet.
6. Transformer les comptes partagés en comptes nominatifs.
7. Convenir des trois niveaux de délai et de la suppléance pendant les congés.
8. Rédiger la clause de sortie.

Rien dans cette liste ne demande de compétence technique. Il faut qu'une personne du cabinet s'assoie une demi-heure avec celle qui administre le serveur.

## Où se situe Dentalpin

Dentalpin est un logiciel dentaire open source qui s'installe sur votre propre serveur avec `docker compose` : cet accord s'applique donc exactement comme pour n'importe quelle autre installation auto-hébergée. Le logiciel ne facture pas de licence, et le travail qui coûte réellement de l'argent est celui que vous venez de lire. Pour voir ce qui est inclus avant de décider qui l'exploite, tout est sur la [page des tarifs](/fr/tarifs/), et la procédure est décrite pas à pas dans [installer Dentalpin en trois minutes](/fr/blog/installer-dentalpin-en-trois-minutes/).

Cet article est une orientation générale et non un conseil juridique. Pour le contrat de votre cabinet, faites-le relire.

## Sources

- CNIL, [« Sous-traitance : exemple de clauses »](https://www.cnil.fr/fr/sous-traitance-exemple-de-clauses), consulté le 3 septembre 2026.
- Règlement (UE) 2016/679 (RGPD), articles 28.1, 28.3, 28.9 et 32.1. Texte officiel consulté sur [legislation.gov.uk](https://www.legislation.gov.uk/eur/2016/679/article/28) le 3 septembre 2026.
- PostgreSQL Global Development Group, [« Versioning Policy »](https://www.postgresql.org/support/versioning/), consulté le 3 septembre 2026.
- Let's Encrypt, [« FAQ »](https://letsencrypt.org/docs/faq/), consulté le 3 septembre 2026.
