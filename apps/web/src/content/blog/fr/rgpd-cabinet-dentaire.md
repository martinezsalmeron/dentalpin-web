---
title: "RGPD au cabinet dentaire : ce qu'il exige vraiment des données patients"
description: "Ce que le RGPD impose à un cabinet dentaire : pourquoi le consentement n'est pas votre base légale, le registre des traitements, les 72 heures, le DPO et les 20 ans de conservation."
pubDate: 2026-08-08
translationKey: rgpd-clinica-dental
tags: [rgpd, protection-des-donnees, dossier-patient, cnil]
---

Vous n'avez pas besoin du consentement du patient pour tenir son dossier clinique. L'article 9.2.h du RGPD lève l'interdiction générale de traiter des données de santé lorsque le traitement est nécessaire au diagnostic médical ou à la prise en charge sanitaire, et l'article 9.3 ajoute la condition qu'un cabinet dentaire remplit déjà : que ce soit un professionnel soumis au secret professionnel qui s'en charge. Ce que le texte exige réellement, c'est un registre des activités de traitement, un contrat avec chaque sous-traitant, une notification de violation en 72 heures et une durée de conservation que vous pouvez justifier.

Ceci n'est pas un conseil juridique. Toutes les sources officielles sont en fin d'article, consultées le 8 août 2026.

## Le consentement est le malentendu le plus coûteux

Presque tous les cabinets conservent un classeur de consentements signés et supposent que c'est ce classeur qui rend le fichier patients licite. Ce n'est pas le cas, et le croire a un coût concret.

L'article 9.1 interdit par principe le traitement des données de santé. L'article 9.2 énumère les exceptions qui lèvent cette interdiction, et le h) est celle des soins : le traitement nécessaire au diagnostic médical, à la prise en charge sanitaire ou sociale. L'article 9.3 impose qu'il soit effectué par un professionnel soumis à une obligation de secret, ou sous sa responsabilité.

> **Si votre base légale était le consentement, le patient pourrait le retirer et vous devriez effacer le dossier.** Vous ne le pouvez pas, puisque vous êtes tenu de le conserver. Cette contradiction montre que le consentement n'a jamais été la bonne base pour le dossier de soins.

Le consentement aux soins est un autre instrument. Il porte sur l'acte, pas sur les données, et les deux se signent souvent au même rendez-vous en répondant à des règles distinctes.

Le consentement redevient nécessaire dès que vous sortez du soin. Une campagne de blanchiment adressée à votre fichier, des photos avant et après sur les réseaux, ou la transmission de données à un tiers à des fins commerciales ne sont pas de la prise en charge sanitaire, et aucune ne tient sous l'article 9.2.h.

![Fiche patient dans Dentalpin, onglet Info ouvert : données démographiques, contact d'urgence et antécédents médicaux avec allergies, médicaments et maladies systémiques](/screenshots/patients.png)

*Voilà ce que le registre doit décrire : des catégories de données, pas une liste de patients.*

## Le registre des traitements n'est pas optionnel pour vous

C'est l'obligation que les petits cabinets sautent le plus souvent, presque toujours pour la même raison : quelqu'un a lu que les organismes de moins de 250 salariés en étaient dispensés.

Lisez l'article 30.5 jusqu'au bout. La dispense tombe si le traitement n'est pas occasionnel, s'il est susceptible de comporter un risque pour les droits et libertés, **ou s'il porte sur des catégories particulières de données au sens de l'article 9.1**. Un cabinet dentaire remplit les trois conditions, et la troisième suffit.

Le registre est un document interne. Il ne se dépose nulle part et se présente à la CNIL si elle le demande. L'article 30.1 en fixe le contenu :

1. **Qui est le responsable de traitement**, ses coordonnées, et celles du DPO le cas échéant.
2. **La finalité de chaque traitement** : soins, facturation, agenda, travaux de laboratoire, relances.
3. **Les catégories de personnes et de données** : patients, représentants légaux, salariés ; identité, santé, données financières.
4. **Les destinataires** : prothésiste, expert-comptable, organismes d'assurance maladie, mutuelles.
5. **Les transferts hors Espace économique européen**, si votre logiciel ou vos sauvegardes y sont hébergés.
6. **Les durées d'effacement prévues** pour chaque catégorie.
7. **Une description générale des mesures de sécurité** de l'article 32.

## Ce qui s'applique et ce qui ne s'applique pas

| Obligation | S'applique à un cabinet dentaire ? | Où c'est écrit |
|---|---|---|
| Consentement comme base du dossier clinique | ✗ Non, la base est la prise en charge | RGPD art. 9.2.h et 9.3 |
| Registre des activités de traitement | ✓ Oui, même à deux | RGPD art. 30.5 |
| Information des patients | ✓ Oui | RGPD art. 13 et 14 |
| Contrat avec chaque sous-traitant | ✓ Oui | RGPD art. 28 |
| Notifier une violation en 72 heures | ✓ Oui, sauf risque improbable | RGPD art. 33.1 |
| Désigner un DPO | ~ À partir de 10 000 patients en cabinet groupé | Référentiel CNIL, point 11 |
| Réaliser une AIPD | ~ Même seuil, pas obligatoire par défaut en exercice individuel | Référentiel CNIL et considérant 91 |
| Conserver les données 20 ans | ✓ Oui, dont 5 en base active | Référentiel CNIL, point 7 |

## Le seuil que la CNIL a chiffré

C'est la particularité française et elle est utile, parce que le RGPD lui-même reste vague sur ce qu'est une grande échelle.

Dans son référentiel sur la gestion des cabinets médicaux et paramédicaux, la CNIL estime que la réalisation d'une AIPD et la désignation d'un délégué à la protection des données devraient être nécessaires pour les professionnels de santé qui, exerçant en cabinet groupé, partagent un système d'information commun, à partir d'un seuil annuel de 10 000 patients.

> **Deux conditions cumulatives, pas une.** Le cabinet groupé avec un système d'information partagé, et les 10 000 patients par an. Un chirurgien-dentiste seul en dessous de ce seuil n'est pas concerné, ce que confirme le considérant 91 du RGPD : le traitement des données de patients par un professionnel de santé exerçant à titre individuel n'est pas considéré comme à grande échelle.

## Vingt ans, en deux temps

Le même référentiel fixe la durée de conservation, et elle se lit en deux périodes plutôt qu'en un seul chiffre.

Les données peuvent être conservées pendant vingt ans à compter de la date de la dernière prise en charge du patient : en base active pendant cinq ans à compter de la dernière intervention sur le dossier, puis, à l'issue de cette période, sous forme archivée sur un support distinct pendant quinze ans, dans des conditions de sécurité équivalentes. À l'expiration de ces délais, les données sont supprimées ou archivées sous une forme anonymisée.

Deux points pratiques que cette rédaction implique :

- **L'archivage doit être réel.** Un support distinct, pas une case « archivé » dans la même base que les dossiers actifs. La CNIL précise que c'est aux éditeurs d'intégrer des fonctions d'archivage automatique à échéance, et qu'à défaut le praticien le fera manuellement.
- **Les doubles des feuilles de soins électroniques suivent une autre règle** : trois mois, conformément à l'article R. 161-47 du code de la sécurité sociale. Ce n'est pas la même horloge que le dossier.

![Activité d'un patient dans Dentalpin : rendez-vous programmé, plan de traitement créé, rendez-vous honoré et acte réalisé, chaque ligne avec sa date](/screenshots/patient-timeline.png)

*Chaque entrée porte sa date, ce qui permet d'appliquer une échéance par dossier plutôt qu'une purge globale.*

## Les 72 heures commencent quand vous l'apprenez

L'article 33.1 impose de notifier la violation à la CNIL sans retard injustifié et, si possible, au plus tard 72 heures après en avoir pris connaissance. Au-delà, la notification doit être accompagnée des motifs du retard.

L'exception existe et elle est étroite : pas de notification lorsque la violation n'est pas susceptible d'engendrer un risque pour les droits et libertés. Un ordinateur portable chiffré égaré n'est pas le même événement qu'une liste de patients envoyée par erreur à toute la messagerie.

À écrire avant, pas pendant :

1. **Qui qualifie** l'incident de violation, et son numéro. On ne réunit pas un comité à trois heures du matin.
2. **Comment on le consigne** : heure de détection, quelles données, combien de personnes, ce qui a été fait. C'est exactement ce que demande l'article 33.3.
3. **Qui dépose** la notification sur le téléservice de la CNIL.
4. **Quand on informe le patient**, ce qui relève de l'article 34 et ne s'impose qu'en cas de risque élevé.
5. **Ce qu'on conserve ensuite**, car le RGPD exige de documenter toutes les violations, notifiées ou non.

## Votre éditeur et votre prothésiste sont des sous-traitants

Toute personne qui traite les données de vos patients pour votre compte est un sous-traitant, et l'article 28 impose un contrat écrit avec chacune. Dans un cabinet dentaire la liste est plus longue qu'il n'y paraît : l'éditeur du logiciel, le laboratoire de prothèse, l'expert-comptable, le prestataire de destruction de documents, celui qui gère le site si le formulaire de contact enregistre quoi que ce soit.

Le référentiel rappelle d'ailleurs qu'en cas d'incident sur les données qu'il gère, le prestataire doit en informer le responsable de traitement dans les meilleurs délais, afin que celui-ci puisse tenir ses propres délais de notification.

> **Héberger vous-même ne vous sort pas du RGPD, cela fait de vous le responsable des mesures de l'article 32.** Chiffrement, sauvegardes testées et gestion des accès cessent d'être une clause du contrat d'un autre pour devenir votre travail. C'est un choix légitime, à condition de le faire en connaissance de cause.

## Ce que vous pouvez exiger du logiciel

Aucun outil ne vous met en conformité tout seul, parce que l'essentiel tient à des décisions et à des documents. Quatre choses, en revanche, sont soit dans le logiciel soit à faire à la main indéfiniment : des comptes nominatifs avec des droits par rôle, une trace de qui a ouvert quel dossier, l'export complet des données d'un patient pour répondre à une demande d'accès, et des durées de conservation paramétrables par type de donnée plutôt qu'une suppression unique.

Dentalpin propose ces quatre points et son code est ouvert, ce qui permet d'auditer les mesures de sécurité au lieu de les croire sur parole. Il s'installe sur votre serveur ou s'utilise en version gérée, et les [tarifs](/fr/tarifs/) sont publiés.

## Sources

Toutes consultées le 8 août 2026.

- Règlement (UE) 2016/679 (RGPD), articles 9, 28, 30, 32, 33, 34, 35 et 37, et considérant 91. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- CNIL, Référentiel relatif aux traitements de données à caractère personnel mis en œuvre à des fins de gestion des cabinets médicaux et paramédicaux, points 7 et 11. [cnil.fr](https://www.cnil.fr/sites/default/files/atoms/files/referentiel_-_cabinet.pdf)
- CNIL, présentation des référentiels du secteur de la santé. [cnil.fr](https://www.cnil.fr/fr/la-cnil-publie-trois-referentiels-pour-le-secteur-de-la-sante)
