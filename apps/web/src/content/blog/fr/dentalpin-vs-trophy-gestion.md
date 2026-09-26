---
title: "Dentalpin face à CS Trophy Gestion : la télétransmission d'un côté, le code de l'autre"
description: "Comparatif CS Trophy Gestion et Dentalpin : Sesam Vitale, CCAM, imagerie Carestream, aucun tarif publié, propriété des données. Sources éditeur, 2026."
pubDate: 2026-09-26
tags: [comparatif, trophy-gestion, logiciel-dentaire]
---

Si votre cabinet télétransmet et travaille déjà sur du matériel d'imagerie Carestream, CS Trophy Gestion répond à deux questions que Dentalpin ne sait pas traiter aujourd'hui. Le reste de cette page s'adresse aux cabinets pour qui ces deux points sont déjà réglés ailleurs.

> **Tout ce qui est dit ici de CS Trophy Gestion vient de carestreamdental.com**, consulté le 26 septembre 2026, avec les URL en bas de page. Ce que Carestream Dental ne publie pas ne figure pas ici, et les sites comparateurs ont été écartés volontairement : ils se contredisent entre eux et aucun d'eux n'est l'éditeur.

## En trente secondes

**La force de CS Trophy Gestion est le conventionnel français et l'imagerie.** Sa page produit décrit un module Sesam Vitale, une adaptation à la nomenclature CCAM, une vérification des informations en temps réel pour limiter les rejets, et une intégration avec les systèmes d'imagerie Carestream comme avec ceux d'autres fabricants.

**La force de Dentalpin est la propriété.** Le code est publié, l'installation se fait sur votre serveur, la base de données est la vôtre, et tout ce que fait l'interface passe par la même API publique.

**La question qui tranche : qui télétransmet, et où vivent les données ?** Si le logiciel doit faire les feuilles de soins électroniques, c'est CS Trophy Gestion et pas nous. Si cette partie est déjà réglée et que vous voulez récupérer la main sur le code et sur la base, lisez la suite.

## Ce qu'est CS Trophy Gestion

CS Trophy Gestion est le logiciel de gestion de cabinet que Carestream Dental vend en France, et il figure toujours parmi les produits mis en avant sur la page d'accueil française de l'éditeur, consultée le 26 septembre 2026. Aucune annonce d'arrêt de commercialisation n'y figure, ni sur la page produit.

L'éditeur identifié dans le pied de page du site français est **Carestream Dental LLC**, 3625 Cumberland Blvd. Ste. 700, Atlanta, GA 30339, avec un numéro international 00800-4567-7654.

Sur le volet réglementaire, la page produit est précise :

- **Télétransmission.** "Le module Sesam Vitale a été conçu pour vous simplifier l'approche de la télétransmission."
- **Nomenclature.** "Parfaitement adapté à la nomenclature CCAM, le logiciel intègre toutes les fonctions nécessaires à une bonne gestion de la télétransmission."
- **Rejets.** "Des remboursements rapides, avec des risques de rejet limités car le logiciel signale les éventuelles erreurs et vérifie les informations en temps réel."

![Agenda du cabinet en vue journée, avec les rendez-vous répartis par praticien et par créneau](/screenshots/schedule-day.png)

*Une vue journée d'agenda dentaire. Les codes couleur et la gestion des rendez-vous non honorés sont la base commune à tous les logiciels de ce marché.*

Le reste de la page décrit un logiciel de cabinet complet. L'agenda se paramètre avec des codes couleur et gère les rendez-vous manqués, et un écran "Practice Central" réunit les tâches du jour pour l'équipe. Le schéma dentaire est présenté comme clair et précis, avec vue occlusale, sélection des faces et des racines, et prise en charge de la denture mixte.

Deux points méritent d'être sortis de la liste, parce qu'ils sont difficiles à répliquer :

- **L'imagerie.** La page annonce une intégration optimale avec les systèmes d'imagerie Carestream Dental, une compatibilité avec les systèmes d'autres fabricants et une intégration gratuite avec les principaux logiciels d'imagerie dentaire du marché. Dans un cabinet déjà équipé, cette ligne décide souvent seule.
- **L'application tablette.** Devis, consentement éclairé et questionnaire médical partent du logiciel vers la tablette, le patient les complète et les signe, et le dossier se met à jour automatiquement.

L'accompagnement est lui aussi écrit noir sur blanc : "Formation initiale à votre cabinet : Nous vous accompagnons lors de l'installation à votre cabinet avec une formation personnalisée et gratuite", et "3 mois d'assistance offerts : A l'installation de votre logiciel, vous bénéficiez de 3 mois d'assistance téléphonique".

> **Carestream Dental ne publie aucun tarif pour CS Trophy Gestion.** Ni la page produit ni la page d'accueil française ne portent de prix au 26 septembre 2026. C'est la norme de ce marché, et la conséquence pratique est la même partout : le coût ne se connaît qu'après un devis.

Deux choses ne sont pas publiées non plus, et il vaut mieux les poser en question qu'en conclusion. **Aucune configuration requise ne figure sur les pages consultées** : ni système d'exploitation, ni serveur, ni pré-requis réseau. La page décrit en revanche une installation au cabinet, ce qui exclut un produit purement navigateur. Et **le dispositif 100 % Santé n'est mentionné nulle part** sur ces pages, alors que Sesam Vitale et la CCAM le sont : si ce point compte pour vous, demandez-le leur par écrit.

## Ce qu'est Dentalpin

Dentalpin est publié sous Business Source License 1.1 : lisible, forkable, gratuit en auto-hébergement, et quatre ans après chaque version le code bascule automatiquement en Apache 2.0. L'installation se fait avec un `docker compose` sur votre serveur, chez l'hébergeur de votre choix ou sur une machine du cabinet, et l'application s'utilise dans un navigateur.

Le socle comprend agenda, patients, odontogramme, parodontogramme, dossier clinique, devis, facturation, radios et imagerie. S'y ajoutent les rappels automatiques, l'espace patient, le multi-cabinet, WhatsApp comme canal de notification, et un agent IA désactivé par défaut qui s'arrête pour demander confirmation avant chaque écriture.

![Dossier patient affichant l'odontogramme, les alertes cliniques, le plan de traitement en cours et le prochain rendez-vous](/screenshots/dental-chart.png)

*Le dossier patient de Dentalpin, avec l'odontogramme et les alertes cliniques. L'interface de la clinique de démonstration est en espagnol.*

Ce qu'il ne fait pas en France se dit aussi clairement : il ne télétransmet pas, il n'intègre ni la CCAM dentaire ni le devis conventionnel, il ne propose pas d'ordonnancier certifié, et son interface n'est pas encore traduite en français.

## Face à face

| | CS Trophy Gestion | Dentalpin |
|---|---|---|
| Modèle | Licence commerciale | Open source (BSL 1.1) |
| Tarif publié | ✗ Aucun prix sur le site | ✓ Publié, auto-hébergement gratuit |
| Télétransmission Sesam Vitale | ✓ Module annoncé | ✗ Non |
| Nomenclature CCAM | ✓ "Parfaitement adapté" | ✗ Non |
| Contrôle des rejets | ✓ Vérification en temps réel | ✗ Non |
| Imagerie | ✓ Carestream et autres fabricants | ~ Radios et imagerie dans le socle, sans liste publiée |
| Signature patient sur tablette | ✓ Devis, consentement, questionnaire | ~ Espace patient, sans signature annoncée |
| 100 % Santé | ~ Non mentionné sur les pages consultées | ✗ Non |
| Formation et assistance | ✓ Formation au cabinet, 3 mois offerts | ✗ La communauté sur GitHub |
| Interface en français | ✓ Oui | ✗ Pas encore |
| Configuration requise | ~ Non publiée | ✓ Un serveur et Docker |
| Schéma dentaire | ✓ Vue occlusale, faces, racines, denture mixte | ✓ Odontogramme et parodontogramme |
| Code source | ✗ Fermé | ✓ Publié en entier |
| API publique | ~ Non documentée sur les pages publiques | ✓ REST, documentée en OpenAPI |
| Auto-hébergement | ~ Non documenté sur les pages publiques | ✓ Gratuit, sans durée minimale |
| Où sont les données | ~ Non documenté sur les pages publiques | ✓ Sur votre serveur, toujours |
| Éditeur | Carestream Dental LLC, Atlanta | Depuis 2026 |

Les lignes marquées "non publiée" et "non documenté" disent exactement cela et rien de plus : nous ne l'avons pas trouvé sur les pages publiques que nous avons lues. Si vous évaluez CS Trophy Gestion sérieusement, ce sont des questions à poser à l'éditeur, pas des conclusions à tirer d'ici.

## Choisissez CS Trophy Gestion si

- **Vous télétransmettez.** C'est le quotidien d'un cabinet conventionné, leur page l'annonce et nous ne le faisons pas. C'est la première raison d'existence de ce comparatif.
- **Vous voulez la CCAM dans le logiciel.** "Parfaitement adapté à la nomenclature CCAM" est leur formulation, et ce travail ne se remplace pas par un tableur.
- **Votre parc d'imagerie est Carestream.** Une intégration annoncée par le fabricant du capteur lui-même n'a pas d'équivalent chez un éditeur tiers.
- **Vous voulez qu'on vienne installer et former sur place.** Formation personnalisée au cabinet et trois mois d'assistance téléphonique, c'est un niveau d'accompagnement que nous ne proposons pas.
- **Vous voulez une interface en français aujourd'hui.** La nôtre ne l'est pas encore.

Si trois de ces cinq points vous concernent, la réponse honnête est CS Trophy Gestion. Nous préférerions être la réponse à tout, mais en France aujourd'hui nous ne le sommes pas.

## Choisissez Dentalpin si

- **La propriété du code et des données compte plus que les fonctions du premier jour.** La base est à vous, le code se lit, et si nous disparaissions demain votre installation continue de tourner.
- **La partie conventionnelle passe déjà ailleurs**, et ce que vous attendez du logiciel, c'est le clinique et la gestion.
- **Vous voulez savoir où sont vos données.** Chez nous la réponse est une adresse que vous choisissez, pas une page à demander.
- **Vous voulez intégrer.** Tout ce que fait l'interface passe par la même API publique, documentée en OpenAPI. Pas de ticket, pas d'autorisation, pas de licence supplémentaire.
- **Vous ne voulez pas que la facture grossisse avec le cabinet.** Aucun abonnement par fauteuil, par praticien ou par patient.

> **Essayez avant de résilier quoi que ce soit.** La démo s'ouvre sans inscription, et une installation à vous tient debout en [trois minutes](/fr/blog/installer-dentalpin-en-trois-minutes/). L'erreur coûteuse n'est pas de changer de logiciel : c'est d'en changer sans avoir testé la reprise sur une copie.

![Liste de factures avec les états émise, payée, partiellement payée, en retard et brouillon](/screenshots/invoices.png)

*La facturation fonctionne avec des séries configurables et des paiements partiels. La télétransmission n'est pas couverte.*

## Comment se passe vraiment la migration

1. **Demandez l'export complet à Carestream Dental** avant de résilier : patients, dossiers cliniques, devis, factures avec leur numérotation, images et catalogue des actes.
2. **Traitez l'imagerie comme un sujet à part.** Si les radios vivent dans l'écosystème Carestream, la question n'est pas la même que celle du dossier administratif, et elle se tranche avant la bascule.
3. **Installez Dentalpin sur un environnement de test**, pas sur celui avec lequel vous comptez travailler ensuite.
4. **Chargez l'export dans le module d'import** (`migration_import`). Il affiche un aperçu avec les compteurs avant d'écrire quoi que ce soit.
5. **Vérifiez la correspondance des actes ligne par ligne.** Ce qui dépasse 0,9 s'accepte en bloc, le reste se tranche à la main. C'est l'étape où les migrations échouent.
6. **Décidez qui télétransmet** à partir du jour de la bascule, parce que cette partie ne se déplace pas avec les données.
7. **Comparez les compteurs** des deux systèmes : patients, factures, rendez-vous à venir.
8. **Gardez l'ancien système en lecture seule** tant que vous n'êtes pas sûr. Le parcours complet est dans [ce guide](/fr/blog/migrer-logiciel-dentaire/).

Ce que coûte Dentalpin tient sur la [page des tarifs](/fr/tarifs/), et c'est une page courte.

## Sources

Toutes consultées le 26 septembre 2026.

- Module Sesam Vitale, nomenclature CCAM, contrôle des rejets en temps réel, Practice Central, schéma dentaire, agenda, tableau de bord d'activité, intégration imagerie, application tablette, formation initiale au cabinet et trois mois d'assistance téléphonique : [carestreamdental.com/fr-fr/discover/practice-management-software/cs-trophy-gestion](https://www.carestreamdental.com/fr-fr/discover/practice-management-software/cs-trophy-gestion/). Aucun tarif, aucune configuration requise, aucune mention du 100 % Santé et aucune annonce d'arrêt de commercialisation sur cette page.
- CS Trophy Gestion toujours présenté parmi les produits, éditeur Carestream Dental LLC, 3625 Cumberland Blvd. Ste. 700, Atlanta, GA 30339, et absence de tarif : [carestreamdental.com/fr-fr](https://www.carestreamdental.com/fr-fr/).
- Licence, modules, périmètre français et absence de télétransmission côté Dentalpin : [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) et [la page des tarifs](/fr/tarifs/).

Il manque quelque chose, ou quelque chose a changé chez Carestream Dental et nous est passé sous le nez ? [Écrivez-nous](https://github.com/martinezsalmeron/dentalpin/discussions) : nous corrigeons le texte et nous disons ce que nous avons changé.
