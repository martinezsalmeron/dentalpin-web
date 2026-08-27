---
title: "Droits d'accès au cabinet dentaire : qui peut voir quoi"
description: "Comment répartir les habilitations au cabinet dentaire : ce que voit le secrétariat, ce que voit l'équipe clinique et pourquoi le compte partagé pose problème."
pubDate: 2026-08-27
translationKey: permisos-acceso-personal-clinica
tags: [habilitations, securite, rgpd, dossier-patient, cnil]
---

Chacun au cabinet ne devrait voir que ce dont son poste a besoin aujourd'hui : le secrétariat travaille avec l'agenda, les coordonnées et les encaissements ; l'équipe clinique ouvre le dossier et l'odontogramme ; les statistiques du cabinet et la gestion des comptes restent au titulaire. Y arriver tient en trois points : un compte nominatif par personne, des droits attribués par profil et non un par un, et une liste écrite de qui a quoi.

Ceci n'est pas un conseil juridique. Toutes les sources officielles sont en fin d'article, consultées le 27 août 2026.

## Le besoin d'en connaître est une obligation, pas un idéal

Le RGPD est net sur ce point : toute personne agissant sous l'autorité du responsable de traitement et ayant accès à des données personnelles ne peut les traiter que sur instruction de celui-ci. L'article 29 le pose, l'article 32.4 en fait une mesure de sécurité et non une question de savoir-vivre interne.

Les données de santé relèvent en plus de l'article 9, donc les mesures que vous justifieriez pour un fichier de prospection ne suffisent pas pour un dossier clinique.

La CNIL traduit cela en quatre précautions élémentaires : "définir des profils d'habilitation dans les systèmes en séparant les tâches", "faire valider toute demande d'habilitation par un responsable", "supprimer les permissions d'accès des utilisateurs dès qu'ils ne sont plus habilités" et "réaliser une revue régulière, a minima annuelle, des habilitations".

> **La question qui tranche presque tous les cas limites est "en a-t-il besoin pour travailler aujourd'hui ?".** Si la réponse est non, l'accès est de trop, quelle que soit l'ancienneté et la confiance.

## Quatre profils couvrent presque tous les cabinets

Nul besoin d'un organigramme compliqué. Un cabinet de un à cinq fauteuils fonctionne avec quatre profils et quelques exceptions nominatives.

| | Secrétariat | Assistante dentaire | Chirurgien-dentiste | Titulaire |
|---|---|---|---|---|
| Agenda du cabinet | ✓ Complet | ✓ Complet | ✓ Complet | ✓ Complet |
| Coordonnées et consentements | ✓ Modifier | ~ Consulter | ✓ Modifier | ✓ Modifier |
| Dossier clinique et odontogramme | ✗ Aucun accès | ✓ Ses patients | ✓ Complet | ~ S'il soigne |
| Radiographies et images | ✗ Aucun accès | ✓ Ses patients | ✓ Complet | ~ S'il soigne |
| Devis | ~ Consulter et encaisser | ✗ Aucun accès | ✓ Créer et signer | ✓ Complet |
| Facturation et caisse du jour | ✓ Oui | ✗ Aucun accès | ~ Son activité | ✓ Complet |
| Statistiques du cabinet | ✗ Aucun accès | ✗ Aucun accès | ~ Sa production | ✓ Complet |
| Comptes et habilitations | ✗ Aucun accès | ✗ Aucun accès | ✗ Aucun accès | ✓ Complet |

Deux ajustements reviennent systématiquement. Le secrétariat doit savoir pourquoi le patient vient pour organiser le fauteuil, et un libellé d'acte sur le rendez-vous suffit sans ouvrir le dossier.

Les alertes médicales sont l'exception qui confirme la règle. Une allergie à un anesthésique doit sauter aux yeux de celui qui va soigner, sans la chercher, donc elle se place en tête de fiche et non trois clics plus loin.

![Agenda du cabinet en vue journée avec les rendez-vous répartis par fauteuil](/screenshots/schedule-day.png)

*Voici l'écran sur lequel le secrétariat travaille toute la journée.*

## Le compte partagé est le vrai problème

La plupart des cabinets n'ont pas un problème de droits mal répartis. Ils ont un compte "secretariat" que quatre personnes connaissent, et un compte "cabinet" auquel tout le monde revient quand la journée est chargée.

Le compte partagé fait tomber tout le reste. La traçabilité n'identifie plus personne, le départ d'une seule personne oblige à changer le mot de passe de toutes, et devant une réclamation vous ne pouvez pas montrer qui a ouvert le dossier ni quand.

> **Un compte par personne n'est pas de la paperasse, c'est ce qui rend le reste vérifiable.** Créer cinq comptes prend dix minutes et évite la conversation où vous ne pouvez pas expliquer qui a consulté la fiche d'un patient qui est aussi le voisin d'un membre de l'équipe.

La CNIL met d'ailleurs en garde contre les comptes génériques et les privilèges d'administration accordés sans nécessité, et rappelle de retirer les accès temporaires plutôt que de les laisser courir.

## La traçabilité transforme une habilitation en preuve

Une habilitation dit qui peut ouvrir un dossier. Un journal d'accès dit qui l'a ouvert. Seul le second sert quand il faut répondre à une réclamation ou qualifier une violation de données.

Ce qu'il vaut la peine d'enregistrer est court :

- **Qui**, avec un compte nominatif, jamais un générique.
- **Quand**, date et heure.
- **Quel patient**, et pas seulement quel écran.
- **Quelle action**, en distinguant la consultation de la modification.
- **Depuis où**, si l'accès à distance est ouvert.

Une règle passe souvent à la trappe : le journal doit être difficile à modifier pour ceux qui détiennent les droits d'administration du cabinet. Si le titulaire peut le réécrire, il ne prouve plus rien face à un tiers.

![Fiche patient sur l'onglet activité, avec alertes cliniques, plan en cours et une frise chronologique filtrable](/screenshots/patient-timeline.png)

*L'activité d'un patient réunie sur une seule frise, filtrable par visites, actes et communications.*

## Arrivée et départ, en sept étapes

Le risque vient rarement de l'accès que vous accordez. Il vient de celui que personne ne retire.

1. **Créez le compte au nom de la personne**, avec son adresse réelle, avant son premier jour.
2. **Attribuez un profil, pas des droits à l'unité.** Les droits accordés au cas par cas s'accumulent et plus personne ne sait pourquoi.
3. **Faites signer l'engagement de confidentialité** et rangez-le avec le contrat.
4. **Activez un second facteur** si le logiciel est joignable depuis l'extérieur du cabinet.
5. **Refaites le profil en cas de changement de poste**, en retirant l'ancien. Une promotion ajoute des accès et n'en enlève presque jamais.
6. **Désactivez le compte le jour du départ**, avant qu'il ne parte, pas la semaine suivante.
7. **Désactivez, ne supprimez pas.** Un compte supprimé laisse un journal sans titulaire et vous perdez la trace de ce qui a été fait.

## Les cas qui n'entrent pas dans l'organigramme

La moitié d'un cabinet sort de ces quatre profils, et ce sont précisément les accès que personne ne revoit.

| Qui | Ce dont il a réellement besoin | Ce qu'il faut faire avant |
|---|---|---|
| Remplaçant pour deux semaines | Agenda et dossiers des patients qu'il soigne | Un compte à son nom avec une date de fin, jamais celui du titulaire |
| Étudiant en stage | Ce que voit le praticien qui l'encadre, en sa présence | Compte nominatif, aucun accès à la facturation, engagement signé |
| Expert-comptable | Montants, dates et séries de factures | Contrat de sous-traitance et accès limité à la facturation |
| Prestataire informatique | Le serveur et les sauvegardes, pas les dossiers | Contrat de sous-traitance, compte nominatif, accès journalisé |
| Laboratoire de prothèse | Le travail, le patient et les délais | Envoyer le cas, pas ouvrir un accès au logiciel |
| Ancien associé | Rien, au-delà de ce que prévoit l'accord de sortie | Désactiver le compte et consigner la date |

Le comptable et le prestataire informatique sont des sous-traitants, et le RGPD impose un contrat avec chacun. C'est la pièce qui manque le plus souvent dans un cabinet par ailleurs bien tenu.

## Une revue par an, en une demi-heure

La CNIL recommande une revue "a minima annuelle" des habilitations pour repérer les comptes inutilisés et réaligner les droits sur les fonctions réelles. C'est la mesure la moins chère de toute cette page.

Elle tient en quatre questions : qui a un compte et travaille encore ici, qui a changé de poste en gardant ses anciens droits, quels comptes n'ont pas servi depuis trois mois, et quels prestataires extérieurs peuvent encore se connecter.

> **Écrivez le résultat sur une feuille datée.** C'est elle que vous montrez si l'on vous demande comment les accès sont maîtrisés, et c'est elle qui vous rappellera l'an prochain ce que vous aviez décidé.

## Ce que le logiciel peut faire, et ce qu'il ne peut pas

Aucun système n'empêche de lire l'écran du voisin, et aucun ne remplace la discussion sur le fait qu'on n'ouvre pas le dossier d'un patient qu'on connaît par curiosité. Ce qu'il peut faire, c'est rendre la répartition simple à tenir et en garder une trace.

Dans Dentalpin les profils sont définis par rôle, chaque ouverture de dossier est journalisée avec l'utilisateur, l'horodatage et le patient, et un compte se désactive sans effacer ce qu'il a fait. Les conditions de la version hébergée et de la version sur votre serveur sont sur [tarifs](/fr/tarifs/).

## Sources

- Règlement (UE) 2016/679 (RGPD), articles 9, 29 et 32. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Consulté le 27 août 2026.
- CNIL, *Sécurité : Gérer les habilitations* (mis à jour le 13 mars 2024). [cnil.fr](https://www.cnil.fr/fr/securite-gerer-les-habilitations). Consulté le 27 août 2026.
- NCSC, *10 Steps to Cyber Security: Identity and access management*. [ncsc.gov.uk](https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management). Consulté le 27 août 2026.

Chaque cabinet répartit les tâches à sa façon, et la justification d'un accès précis dépend du cas. Faites-le valider par votre conseil ou votre DPO.
