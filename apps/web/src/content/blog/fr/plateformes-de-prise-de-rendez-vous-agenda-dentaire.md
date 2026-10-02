---
title: "Plateformes de prise de rendez-vous et votre agenda : ce qui se synchronise vraiment et à qui sont les données"
description: "Avant de brancher Doctolib sur votre agenda : synchronisation dans un sens ou deux, le créneau donné au téléphone, et qui est responsable de quoi."
pubDate: 2026-10-02
translationKey: portales-cita-online-agenda-dental
tags: [agenda, prise-de-rendez-vous, rgpd, gestion-cabinet]
---

Avant de brancher une plateforme de prise de rendez-vous sur votre agenda, quatre questions se règlent, et aucune ne figure dans la démonstration : la synchronisation va-t-elle dans les deux sens ou dans un seul, que devient le créneau que l'assistante vient de donner au téléphone, quels champs du dossier clinique passent réellement, et qui est responsable de traitement de quoi. Pour Doctolib, la réponse honnête au 2 octobre 2026 est qu'une partie de ces réponses n'est pas publiée dans une page lisible.

Ces quatre réponses décident si la plateforme est un accueil supplémentaire ou un deuxième agenda que vous tiendrez désormais à la main.

> **Ce n'est pas le sujet de l'agenda ouvert sur votre propre site.** C'est une autre décision, et elle a son article : [la prise de rendez-vous en ligne](/fr/blog/prise-rendez-vous-en-ligne-dentaire/). Ici le patient réserve sur la plateforme d'un tiers, où vivent aussi son premier contact avec vous et, souvent, l'avis qu'il laissera.

## Ce que Doctolib publie, et ce qu'il ne publie pas

Doctolib tient un annuaire de partenaires sur `info.doctolib.fr`, avec une catégorie "Logiciels médicaux" et des étiquettes comme "gestion des rendez-vous" et "compatible avec l'assistant téléphonique Doctolib". Les catégories existent et se chargent. Les fiches partenaires, elles, s'affichent en JavaScript : aucun nom de logiciel n'était lisible dans le HTML servi le 2 octobre 2026.

La page "Sécurité et Confidentialité" se comporte de la même façon. Une requête simple sur `doctolib.fr/sante/confidentialite` ne renvoie que le titre, sans une ligne du contenu.

Ce n'est pas un détail technique. Cela veut dire qu'un cabinet ne peut pas lire, archiver ni opposer plus tard les conditions de confidentialité ou la liste des interfaces : il doit les demander par écrit.

> **Demandez-le par écrit, et gardez la réponse.** Une page qui ne s'affiche qu'avec JavaScript ne constitue pas une preuve de ce qui vous a été promis le jour de la signature. Un courriel daté, oui.

Ce que leurs propres pages publient en clair : le formulaire de contact professionnel liste "Chirurgien-dentiste" et "Orthodontiste" parmi les spécialités, et l'adresse de contact pour la protection des données est `contact.dataprivacy@doctolib.com`.

## Un sens ou deux : la question se pose champ par champ

"Synchronisation bidirectionnelle" est une phrase sur l'agenda. Elle ne dit rien du dossier patient, et c'est là que les surprises arrivent.

Une plateforme peut parfaitement écrire les rendez-vous dans votre agenda, lire vos disponibilités, et ne jamais toucher à la fiche patient. Elle peut aussi créer une fiche en double à chaque nouveau patient qui réserve. Les deux comportements s'appellent "intégration" sur une plaquette.

La seule formulation utile se demande ligne par ligne : pour chaque champ, qui écrit, qui lit, et que se passe-t-il en cas de conflit.

![Vue hebdomadaire de l'agenda, avec les rendez-vous de chaque praticien dans sa colonne](/screenshots/schedule-week.png)

*L'agenda en vue semaine, une colonne par praticien.*

## Le créneau des trente secondes

Le cas qui casse une intégration n'est pas la réservation ordinaire, c'est la simultanée. L'assistante donne un créneau au téléphone à 10h14'30, et quelqu'un le réserve sur la plateforme à 10h14'45, alors que la disponibilité publiée n'a pas encore été mise à jour.

Personne ne publie ce qui se passe alors. La question ne se règle donc pas en lisant, mais en l'exigeant par écrit avant de signer, puis en la testant.

> **Testez-le vous-même, avec un vrai créneau et un chronomètre.** Bloquez un créneau dans votre agenda et mesurez le temps qu'il met à disparaître de la plateforme. Puis faites l'inverse. Le chiffre obtenu est votre risque de double rendez-vous, et c'est le seul de cette décision que personne ne mettra dans un contrat.

## Qui est responsable de quoi

Le vocabulaire du RGPD règle la question, et la CNIL le définit sans ambiguïté : "Le sous-traitant est la personne physique ou morale (entreprise ou organisme public) qui traite des données pour le compte d'un autre organisme (« le responsable de traitement »), dans le cadre d'un service ou d'une prestation".

Pour les données de vos patients, c'est vous le responsable de traitement et la plateforme le sous-traitant. Ce n'est pas un avantage négociable, c'est une qualification qui découle de qui décide des finalités.

| Quelles données | Rôle de la plateforme | Ce que cela implique pour le cabinet |
|---|---|---|
| Les données de vos patients traitées via la plateforme | ✓ Sous-traitant | Contrat de l'article 28, et c'est vous qui donnez les instructions |
| La relation commerciale : contrat, facturation, litiges | Responsable de traitement pour son propre compte | ✗ Ne se négocie pas dans votre contrat |
| Le compte que le patient se crée sur la plateforme | Relation directe entre le patient et la plateforme | ✗ Hors de votre périmètre, et hors de votre contrôle |
| Les avis publiés sur la plateforme | ~ Non établi : les conditions ne sont pas lisibles sans JavaScript | À demander par écrit avant de signer |

La CNIL rappelle que les obligations du sous-traitant "doivent être présentes dans le contrat", et liste ce qu'il doit porter : transparence et traçabilité, protection des données dès la conception et par défaut, garantie de sécurité des données traitées, et devoirs d'assistance, d'alerte et de conseil, y compris la procédure de notification des violations.

Autrement dit, l'absence de contrat signé n'est pas une formalité en retard, c'est le manquement lui-même. Nous le détaillons dans [la sous-traitance RGPD de votre logiciel](/fr/blog/sous-traitance-rgpd-logiciel-dentaire/).

![Dossier patient, onglet des informations personnelles et champs de contact](/screenshots/patients.png)

*L'onglet des informations du patient, avec les champs qu'une intégration peut écrire.*

## À régler par écrit avant de brancher quoi que ce soit

1. **Demandez le sens de chaque champ**, un par un : ce que la plateforme écrit dans votre dossier et ce qu'elle y lit.
2. **Fixez ce qui se passe en cas de conflit** de créneau, et qui tranche, sous forme de procédure.
3. **Signez le contrat de sous-traitance** avant la mise en service, pas après le premier patient.
4. **Demandez la liste des sous-traitants ultérieurs** et notez la date à laquelle elle vous a été remise.
5. **Décidez des champs qui ne passent jamais** : allergies, notes cliniques, impayés. Une plateforme de rendez-vous n'a pas besoin de l'odontogramme.
6. **Réglez la sortie avant l'entrée** : comment vous exportez l'historique des rendez-vous, ce que devient votre fiche, ce que deviennent les avis.
7. **Faites un pilote avec un seul praticien** et une plage de la semaine, pendant quinze jours.
8. **Inscrivez l'intégration au registre des traitements**, puisque c'est un nouveau flux de données.

L'étape six est celle que personne ne fait et celle qui coûte le plus cher ensuite. Poser la question de la sortie pendant qu'on vous vend l'entrée est le seul moment où vous obtiendrez une réponse écrite.

## Ce que votre propre logiciel doit savoir faire

Une intégration ne vaut que l'agenda qui se trouve derrière. Voici ce qui décide si la plateforme vous aide ou vous double le travail.

- **Une API à vous** sur votre agenda et vos patients, pour que l'intégration ne dépende pas d'une homologation.
- **De vraies plages d'indisponibilité**, par praticien et par fauteuil, que la plateforme lit au lieu de deviner.
- **L'origine de chaque rendez-vous**, pour savoir combien viennent de la plateforme et combien du téléphone avant de renouveler l'abonnement.
- **Des champs de contact séparés des champs cliniques**, pour qu'une intégration ne puisse ni lire ni écrire ce qui ne la concerne pas.
- **Un journal des accès** avec utilisateur, date et opération, y compris les accès d'une intégration. Nous en parlons dans [le journal d'accès au dossier patient](/fr/blog/journal-acces-dossier-patient/).
- **Un export complet de l'historique des rendez-vous**, parce que le jour où vous changerez de plateforme, cet historique sera tout ce qu'il vous restera.

Dans Dentalpin l'agenda a sa propre API, l'origine de chaque rendez-vous est enregistrée et les champs de contact sont séparés des champs cliniques, ce qui permet de brancher la plateforme de votre choix sans attendre d'être référencé. Le code est publié et les [tarifs](/fr/tarifs/) aussi.

Ceci n'est pas un conseil juridique. Le contrat de sous-traitance et le registre dépendent de la manière dont votre cabinet traite les données, et ils méritent une relecture avant d'activer une intégration.

## Sources

- CNIL, définition "Sous-traitant", et les obligations devant figurer au contrat. Consulté le 2 octobre 2026. <https://www.cnil.fr/fr/definition/sous-traitant>
- Doctolib, annuaire de partenaires sur `info.doctolib.fr`, catégorie "Logiciels médicaux" et étiquettes partenaires ; formulaire professionnel listant les spécialités et l'adresse `contact.dataprivacy@doctolib.com`. Fiches partenaires rendues en JavaScript et illisibles dans le HTML servi. Consulté le 2 octobre 2026. <https://info.doctolib.fr/?dl_partner_category=logiciels-medicaux>
- Doctolib, page "Sécurité et Confidentialité", qui ne renvoie que son titre à une requête simple. Consulté le 2 octobre 2026. <https://www.doctolib.fr/sante/confidentialite>
- Règlement (UE) 2016/679, article 28, sur le sous-traitant et le contenu minimal du contrat. Consulté le 2 octobre 2026.
