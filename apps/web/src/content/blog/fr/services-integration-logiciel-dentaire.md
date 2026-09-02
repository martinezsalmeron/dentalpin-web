---
title: "Monter une activité de services sur un logiciel dentaire open source"
description: "Le logiciel est gratuit, le service ne l'est pas : installation, migration, sauvegardes testées, support. Ce que la licence autorise et le contrat de sous-traitant."
pubDate: 2026-09-02
translationKey: servicios-integracion-software-dental
tags: [open-source, integrateurs, prestataire, rgpd, logiciel-dentaire]
---

Oui, on peut monter une activité de services rentable sur un logiciel dentaire open source, et ce que vous facturez n'est jamais le programme. Vous facturez l'installation, la migration des données, des sauvegardes que quelqu'un a réellement restaurées, les mises à jour et le fait d'être joignable quand le cabinet n'ouvre pas son agenda un lundi matin. Deux choses décident si l'activité tient : ce que la licence vous autorise à faire, et le fait qu'en touchant aux données de patients vous devenez sous-traitant, avec un contrat à signer.

Ni l'un ni l'autre n'est un obstacle. Les deux sont le travail, et le travail se facture.

## Ce que vous vendez, ce n'est pas le logiciel, c'est lundi neuf heures

Un cabinet ne s'achète pas de la technologie. Il s'achète la certitude que le secrétariat pourra ouvrir l'agenda. Le catalogue de prestations qui en découle est court et se répète d'un cabinet à l'autre.

- **Installation et durcissement.** Serveur, certificat, pare-feu, comptes système, et une configuration qui ne dépende pas de votre mémoire.
- **Migration des données.** Sortir patients, dossiers cliniques, devis et rendez-vous de l'ancien logiciel, puis rapprocher les totaux avant de valider la reprise.
- **Sauvegardes testées.** Une sauvegarde jamais restaurée n'est pas une sauvegarde, c'est un fichier. La restauration de test est un livrable daté.
- **Mises à jour.** Versions mineures, montée de version majeure de PostgreSQL tous les quelques années, et une fenêtre de maintenance convenue avec le cabinet.
- **Support avec des horaires écrits.** Pas « quand je peux ». Tel créneau, tel canal, tel délai de prise en charge.
- **Formation de l'équipe.** Deux séances courtes au démarrage et une à trois mois valent mieux qu'un manuel de cinquante pages.

![Écran d'accueil avec les rendez-vous du jour, qui est présent au cabinet, les paiements en retard et les derniers patients](/screenshots/home.png)

*L'écran que l'équipe regarde en arrivant. Quand il ne se charge pas, le cabinet appelle celui qui a monté le serveur.*

## Lisez la licence avant de fixer un prix

Open source ne veut pas dire « faites ce que vous voulez ». Beaucoup de produits de ce marché sont publiés sous Business Source License 1.1, un modèle à trous, et les trous changent d'un projet à l'autre.

Le texte de base de la BSL 1.1 accorde, littéralement, « the right to copy, modify, create derivative works, redistribute, and make non-production use of the Licensed Work ». L'usage en production, qui est précisément ce que fait votre client toute la journée, dépend de l'Additional Use Grant que remplit l'éditeur.

| Ce que vous voulez faire | Sous une BSL 1.1 |
|---|---|
| Lire et auditer le code | ✓ Accordé par le texte de base |
| Le modifier pour un client | ✓ Accordé par le texte de base |
| L'exécuter sur le serveur d'un cabinet | ~ Dépend de l'Additional Use Grant |
| Facturer vos heures d'installation et de maintenance | ~ La licence encadre le logiciel, pas votre temps |
| Le revendre comme votre propre SaaS multiclient | ✗ C'est en général la restriction expresse |

C'est la quatrième ligne que l'on lit de travers. Une licence logicielle pose des conditions à l'usage et à la distribution du logiciel, pas à votre facturation de prestations ; ce qu'elle peut empêcher, c'est le montage précis que vous vouliez facturer.

> **La frontière, c'est monter votre propre SaaS, pas facturer une installation.** Héberger l'instance d'un cabinet pour ce cabinet et lui facturer la maintenance n'est pas le même cas qu'ouvrir une plateforme multiclient qui concurrence l'éditeur. Si votre modèle s'approche de cette ligne, la licence dit elle-même quoi faire : acheter une licence commerciale auprès du concédant, ou s'abstenir.

En cas de doute, posez la question avant de signer avec le client. Les projets sous BSL publient généralement un contact pour les accords de licence alternatifs, et cette conversation coûte un courriel.

Ceci n'est pas un conseil juridique. C'est la lecture d'un texte public, et votre contrat réel doit passer par un avocat.

## Dès que vous touchez aux données de patients, vous êtes sous-traitant

C'est là que beaucoup de prestataires informatiques compétents se créent un problème évitable. Si vous administrez le serveur où vit le dossier clinique, vous traitez des données de santé pour le compte du cabinet, et le RGPD a un mot pour cela.

La CNIL le définit ainsi : « Le sous-traitant est la personne physique ou morale (entreprise ou organisme public) qui traite des données pour le compte d'un autre organisme (« le responsable de traitement »), dans le cadre d'un service ou d'une prestation ». Elle liste ensuite vos obligations propres, parmi lesquelles « une obligation de transparence et de traçabilité », « une obligation de garantir la sécurité des données traitées » et « une obligation d'assistance, d'alerte et de conseil ».

Traduit en semaine de travail, cela fait quatre décisions concrètes :

1. **Signez le contrat avant de toucher la première donnée**, pas après la migration. La date du contrat doit précéder votre premier accès.
2. **Déclarez vos sous-traitants ultérieurs.** Si le serveur est chez un hébergeur, cet hébergeur en est un, et le cabinet doit pouvoir l'autoriser.
3. **Documentez les instructions.** Un courriel du cabinet demandant un export est une instruction documentée. Un appel téléphonique ne laisse aucune trace.
4. **Prévoyez la fin.** Restitution ou suppression des données à la fin de la prestation, avec une preuve écrite de ce que vous avez fait.

> **Le contrat de sous-traitance n'est pas de la paperasse, c'est la limite de votre responsabilité.** Sans lui, chaque incident se discute sans document disant ce qu'on vous avait demandé de faire et ce qu'on ne vous avait pas demandé. Avec lui, le périmètre de ce que vous administriez est écrit.

## Les trois modèles de facturation qui tiennent

Les trois fonctionnent. Ce qui ne fonctionne pas, c'est de les mélanger sans le dire, parce que le client finit par croire que la maintenance était comprise dans l'installation.

| Modèle | Ce qu'il couvre | Quand il convient |
|---|---|---|
| Projet au forfait | Installation, migration et formation, prix et périmètre fixes | Ouverture de cabinet, ou changement de logiciel |
| Abonnement mensuel | Sauvegardes, mises à jour, supervision et support aux horaires convenus | Cabinets sans informaticien interne, c'est-à-dire presque tous |
| Forfait d'heures | Travaux ponctuels hors périmètre de l'abonnement | Intégrations, rapports sur mesure, changements de matériel |

L'abonnement est ce qui transforme cela en activité plutôt qu'en succession de chantiers. C'est aussi celui qui impose la discipline de la supervision : facturer un forfait mensuel sans savoir si le serveur sauvegarde encore, c'est vendre une assurance sans regarder le risque.

## Une installation reproductible au cabinet suivant

La première installation prend le temps qu'elle prend. La cinquième n'est rentable que si la première a laissé une procédure écrite.

1. **Inventoriez l'existant.** Quel logiciel, quelle version, où sont les données, et qui détient le mot de passe administrateur aujourd'hui.
2. **Montez un environnement de test** à partir d'une copie des données réelles, jamais contre l'installation que le cabinet utilise.
3. **Migrez, puis rapprochez les chiffres.** Nombre de patients, rendez-vous à venir, devis ouverts, solde restant dû. Si un total ne tombe pas juste, ce n'est pas fini.
4. **Faites tourner une semaine en parallèle**, l'ancien logiciel restant accessible en lecture.
5. **Réalisez une restauration de test** chronométrée depuis la sauvegarde, et notez la durée.
6. **Formez en deux séances courtes**, une pour l'accueil et l'agenda, une au fauteuil.
7. **Basculez un jour creux**, ni un lundi ni la veille des congés.
8. **Remettez les identifiants par écrit** au responsable du cabinet, avec la liste des services et l'emplacement de chaque chose.

![Schéma de la pile auto-hébergée : navigateur, Caddy sur le port 443, interface Nuxt, API et base de données PostgreSQL](/diagrams/install-stack.svg)

*Les briques dont vous devenez responsable le jour où vous signez la maintenance. Chaque bloc a quelqu'un qui le met à jour, et ce quelqu'un c'est vous.*

## Le SLA que le cabinet réclamera sans employer le mot

Aucun cabinet dentaire ne demande un SLA. Il demande qui il appelle le mardi à huit heures et demie. Mettez ces cinq réponses par écrit et vous aurez écrit l'accord :

- **Les horaires couverts**, et ce qui se passe en dehors, samedis compris si le cabinet ouvre.
- **Le délai de prise en charge et le délai de rétablissement visé**, qui ne sont pas la même chose et gagnent à être séparés.
- **Combien de données peuvent être perdues** au pire, c'est-à-dire la fréquence des sauvegardes.
- **Combien de temps pour repartir** depuis la dernière sauvegarde, mesuré lors d'un test réel et non estimé.
- **Qui est propriétaire du serveur et des données**, ce qui doit toujours être le cabinet, même si vous l'administrez.

## Rédigez vous-même la clause de sortie

Le jour où vous cessez de travailler ensemble arrive dans tous les contrats, et il se passe mieux quand il était prévu. C'est aussi votre meilleur argument commercial face à un éditeur fermé.

- **Les identifiants appartiennent au cabinet**, dans un gestionnaire de mots de passe qui est le sien, dès le premier jour.
- **Les données sortent dans un format ouvert** documenté, et vous le démontrez une fois par an en lançant vraiment l'export.
- **La procédure est écrite** dans un document que le cabinet conserve, pas dans votre tête.
- **La licence survit à votre société.** Avec un logiciel libre ou à sources ouvertes, un autre prestataire peut reprendre sans renégocier avec personne.

> **Un prestataire qui part sans remettre le système au cabinet n'est pas un prestataire, c'est un verrou.** Ce qui rend votre service attractif face à une licence fermée, c'est justement que le cabinet pourrait vous remplacer sans rien perdre.

## Où se situe Dentalpin

Dentalpin est publié sous BSL 1.1, et son fichier `LICENSE` remplit les cases évoquées plus haut : la limitation d'usage interdit « providing a commercial Software-as-a-Service (SaaS) offering for dental clinic management where the primary value is substantially derived from the Licensed Work », la date de changement est fixée à quatre ans après la publication, et la licence de destination est Apache 2.0. Pour un intégrateur, cela veut dire qu'installer, héberger et maintenir l'instance d'un cabinet nommé ne se situe pas au même endroit que lancer un SaaS dentaire concurrent, et que si votre modèle s'en approche, le fichier renvoie lui-même vers des accords de licence alternatifs avec le concédant. Ce que le cabinet paie pour le produit figure sur la [page des tarifs](/fr/tarifs/).

## Sources

- [Business Source License 1.1, texte de la licence](https://mariadb.com/bsl11/), MariaDB. Consulté le 2 septembre 2026.
- [Sous-traitant, définition](https://www.cnil.fr/fr/definition/sous-traitant), Commission nationale de l'informatique et des libertés. Consulté le 2 septembre 2026.
- [Lignes directrices 07/2020 sur les notions de responsable du traitement et de sous-traitant](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-072020-concepts-controller-and-processor-gdpr_en), Comité européen de la protection des données, version finale adoptée le 7 juillet 2021. Consulté le 2 septembre 2026.
- Fichier `LICENSE` du dépôt de Dentalpin. Consulté le 2 septembre 2026.
