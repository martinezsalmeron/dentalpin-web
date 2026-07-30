---
title: "Comment migrer de logiciel dentaire sans perdre le dossier patient"
description: "Guide pratique pour changer de logiciel dentaire sans perdre patients, dossier clinique ni factures : quoi exporter, comment tester avant, et l'étape où presque toutes les migrations échouent."
pubDate: 2026-07-30
tags: [migration, logiciel-dentaire, dossier-patient]
---

Migrer sans rien perdre tient en trois règles : exportez tout avant de résilier l'ancien contrat, dans un format lisible sans ce logiciel ; testez l'import sur une copie avant de toucher au cabinet réel ; et n'acceptez jamais une correspondance automatique du catalogue d'actes sans la vérifier ligne par ligne. Les cabinets qui perdent des données ont presque toujours sauté la première règle, en faisant confiance à l'idée que « le nouveau prestataire s'en occupe ».

Pas besoin d'être technique pour bien faire. Il faut le faire dans cet ordre.

## Avant de toucher à quoi que ce soit : exportez et vérifiez

Demandez à l'éditeur que vous quittez l'export complet, pas une sélection de ce qu'il juge pertinent. Au minimum, ceci doit sortir de son système et arriver dans le vôtre dans un format ouvert (CSV, XML, ou une base de données interrogeable sans licence) :

- **Fiche patient complète** : coordonnées, consentements signés et date d'inscription.
- **Dossier clinique et odontogramme**, daté ligne par ligne, pas seulement l'état actuel.
- **Devis et factures**, avec leur numérotation d'origine. Un trou dans la numérotation est la première chose qu'un contrôle relève.
- **Images et radiographies**, qui vivent presque toujours hors de la base de données principale et qu'on oublie jusqu'au dernier jour.
- **Le catalogue d'actes** tel qu'il est codé dans l'ancien système, pas seulement les libellés affichés à l'écran.
- **L'historique des rendez-vous**, si vous devrez un jour justifier une présence ou une absence.

![Fil d'activité d'un patient dans Dentalpin : rendez-vous programmé, plan de traitement créé, rendez-vous honoré et acte réalisé, chaque ligne datée](/screenshots/patient-timeline.png)

*Voilà ce qu'un export doit conserver : chaque entrée avec sa date, pas seulement l'état du jour.*

> **L'export est votre filet de sécurité, pas une formalité de départ.** Demandez-le des semaines avant de signer avec le nouveau prestataire, ouvrez-le et vérifiez-le vous-même. Si l'éditeur que vous quittez complique l'accès à un export complet, c'est déjà une information sur la façon dont il traite vos données, et vous l'avez avant de partir.

## L'étape où presque toutes les migrations échouent

Deux cabinets ne codent presque jamais les actes de la même façon. L'un appelle « traitement de racine » ce qu'un autre découpe en trois codes distincts selon la dent et le nombre de canaux. Quand le nouveau logiciel tente de faire correspondre automatiquement l'ancien catalogue au sien, certaines lignes correspondent clairement et d'autres non.

Le problème n'est pas que la correspondance soit imparfaite. C'est d'accepter une correspondance douteuse sans la regarder.

> **Une équivalence devinée en silence produit des factures mal émises que personne ne repère avant des mois.** Ce n'est pas un bug du logiciel, c'est un échec de processus : si personne ne vérifie ligne par ligne ce que le système propose, l'erreur se transmet à chaque patient facturé sur cet acte par la suite.

Avant d'accepter un import en masse, demandez à voir la correspondance proposée avec des comptages : combien de patients, combien de lignes de devis et combien de factures dépendent de chaque acte qui va être réassigné.

## Comment tester sans risquer le cabinet réel

1. **Générez l'export complet** de l'ancien système et conservez-le à part, hors des deux systèmes, avant d'installer quoi que ce soit.
2. **Lancez l'import dans un environnement de test**, pas sur les données de production du nouveau système.
3. **Comparez les comptages** : nombre de patients, de devis, de factures et de rendez-vous à venir. S'ils ne correspondent pas, arrêtez-vous là.
4. **Faites cohabiter les deux systèmes quelques semaines** si le volume du cabinet le permet : continuez à facturer sur l'ancien pendant que vous vérifiez que le nouveau reflète la même chose.
5. **Passez l'ancien système en lecture seule** une fois que vous faites confiance au nouveau. Ne le supprimez pas et ne résiliez pas encore l'abonnement.

## Ce qu'il faut exiger de votre prestataire actuel

- **Un export complet, pas une API limitée à ce qu'il lui convient d'exposer.**
- **Un format ouvert et documenté**, pour que le destinataire n'ait pas à deviner le sens de chaque champ.
- **Un délai raisonnable**, pas une menace de suppression quelques jours après votre résiliation.
- **Les images à leur résolution d'origine**, pas une miniature compressée.

Vérifiez aussi auprès de votre ordre professionnel ou de votre expert-comptable les durées de conservation du dossier patient qui s'appliquent à vous : elles varient et ce n'est pas un chiffre à admettre sans le vérifier vous-même.

## Une checklist avant de signer avec le nouveau prestataire

| À vérifier | Pourquoi ça compte |
|---|---|
| Format de l'export fourni par le prestataire actuel | Détermine si un outil intermédiaire est nécessaire ou si l'import est direct |
| Si le nouveau système affiche un aperçu avant d'écrire quoi que ce soit | Sans aperçu, une erreur de correspondance est appliquée avant que vous la voyiez |
| Si la correspondance des actes est vérifiée ligne par ligne ou seulement en bloc | Le bloc est rapide, et c'est là que l'erreur se glisse |
| Si les images migrent avec la fiche patient ou à part | À part signifie que quelqu'un doit les relier à la main ensuite |
| Si vous pouvez garder l'ancien système en lecture seule | Sans ça, vous n'avez rien pour comparer si un problème apparaît plus tard |

![Liste des factures avec une numérotation continue de FAC-2026-0001 à FAC-2026-0008 et l'état de règlement de chacune](/screenshots/invoices.png)

*La numérotation doit arriver entière dans le nouveau système. Un trou, c'est la première chose qui se voit de l'extérieur.*

Chez Dentalpin, nous avons résolu ceci avec un module d'import (`migration_import`) qui suit les quatre mêmes phases que ce guide : déposer le fichier, afficher un aperçu avec des comptages avant d'écrire quoi que ce soit, laisser vérifier la correspondance des actes ligne par ligne (ce qui dépasse un score de 0,9 est accepté en bloc, le reste reste votre décision) et exécuter seulement ensuite. Le flux complet est documenté dans [dental-bridge](https://github.com/dentaltix/dental-bridge), et [installer Dentalpin sur votre propre serveur](/fr/blog/installer-dentalpin-en-trois-minutes/) prend trois minutes si vous voulez ensuite le tester avec votre propre export.

Vous êtes tombé sur une étape de migration qui manque ici ? [Dites-le-nous](https://github.com/martinezsalmeron/dentalpin/discussions) et nous l'ajoutons.
