---
title: "Dentalpin face à Julie : ce que chacun couvre vraiment dans un cabinet français"
description: "Comparatif entre Julie Solutions et Dentalpin : télétransmission, CCAM, e-ordonnance, prix publiés et propriété des données. Avec ce que nous ne faisons pas."
pubDate: 2026-08-05
tags: [comparatif, julie, logiciel-dentaire]
---

Si votre cabinet télétransmet des feuilles de soins électroniques et que vous attendez du logiciel qu'il gère la CCAM et les droits patient, la réponse tient en une ligne : Julie le fait, Dentalpin non. Tout le reste de cette page sert à ceux dont la partie conventionnelle passe déjà ailleurs.

> **Tout ce qui est dit ici de Julie vient de julie.fr**, consulté le 5 août 2026, avec les URL en bas de page. Ce que Julie Solutions ne publie pas ne figure pas ici. Les sites comparateurs ont été écartés volontairement : ils se contredisent entre eux et aucun d'eux n'est Julie.

## En trente secondes

**Julie est l'installé historique du cabinet dentaire français, et sa force est la conformité.** Son site revendique une fondation en 1983 et "plus de 20 000 utilisateurs", et détaille ce qui compte réellement en France : nomenclature CCAM, feuilles de soins électroniques, service ADRi pour les droits du patient, INS, ordonnancier adossé à une base médicamenteuse, module de stérilisation intégré et compatibilité avec seize systèmes d'imagerie.

**Dentalpin est open source et vous appartient.** Le code est sur GitHub, l'installation se fait sur votre serveur, le socle ne coûte rien, et tout ce que fait l'interface passe par la même API publique. Côté clinique il est complet : agenda, patients, odontogramme, dossier clinique, devis, facturation, radios et imagerie.

**La question qui tranche : qui télétransmet ?** Si la réponse doit être le logiciel, c'est Julie aujourd'hui et pas nous. Si cette partie est déjà réglée et que vous cherchez la propriété du code et de la base sans abonnement, la suite vous concerne.

## Ce qu'est Julie

Julie est édité par Julie Solutions, RCS 838 336 246, à Marne la Vallée. Ses mentions légales ne nomment aucun groupe propriétaire, et nous ne lui en attribuons donc aucun : les rattachements qui circulent sur les sites comparateurs ne viennent pas de Julie.

La page de présentation du logiciel énumère ses fonctions dans ces termes : "Agenda personnalisable et accessible à distance", "Rappels de rendez-vous par SMS", "Dossiers patient clairs et ergonomiques", "Saisie des actes performante et simple", "Une conformité permanente avec la réglementation en vigueur", "Rattachez vos radios et scanners directement à vos dossiers patients", "Une gestion sûre de vos stocks", "Une aide comptable intégrée" et un "Module de stérilisation intégré".

Deux points méritent d'être sortis de cette liste, parce qu'ils sont difficiles à répliquer :

- **La sauvegarde.** Julie annonce une "Sauvegarde de données automatique et externalisée tous les 1/4h en datacenter certifié HDS". La certification HDS est l'exigence française pour l'hébergement de données de santé, et l'annoncer par écrit engage l'éditeur.
- **L'imagerie.** La même page liste seize systèmes d'imagerie compatibles, de Carestream à Dexis en passant par Digora. Dans un cabinet équipé, cette liste décide souvent seule.

![Dossier patient avec odontogramme, alertes cliniques, plan de traitement en cours et prochain rendez-vous](/screenshots/dental-chart.png)

*Le dossier patient dans Dentalpin, avec l'odontogramme. L'interface de la clinique de démonstration est en espagnol, comme le reste de l'application aujourd'hui.*

Sur le volet réglementaire, la page dédiée de Julie parle de "la nomenclature CCAM" et de "les règles d'application et la nomenclature CCAM", annonce "Plus de rejets de vos Feuilles de Soins Electroniques", et décrit le service ADRi qui "permet de connaître la situation à jour des droits d'un patient" directement dans le logiciel, ainsi que l'INS obtenue "par interrogation d'un téléservice de la CNAM". L'ordonnancier est présenté comme associé "à la base médicamenteuse VIDAL Expert".

L'e-ordonnance fait l'objet d'une page séparée, et Julie y est claire sur son statut : "C'est un module complémentaire au logiciel Julie", bâti sur "un Logiciel d'Aide à la Prescription certifié" et une "base médicamenteuse agréée HAS v3". Complémentaire veut dire facturé à part.

> **Julie ne publie aucun tarif.** Sur aucune des pages consultées le 5 août 2026 ne figure de prix, ni pour le logiciel, ni pour l'e-ordonnance, dont la page renvoie à un formulaire d'abonnement annuel et précise seulement "(Hors France, nous contacter pour adapter votre devis à la TVA en vigueur)". C'est la norme du marché, et la conséquence pratique est que le coût ne se connaît qu'après un devis.

## Ce qu'est Dentalpin

Dentalpin est un logiciel publié sous Business Source License 1.1 : gratuit pour tout cabinet, lisible, forkable, et quatre ans après chaque version le code bascule automatiquement en Apache 2.0. L'installation se fait avec un `docker compose` sur votre serveur, sur le cloud de votre choix ou sur une machine du cabinet.

Le socle comprend agenda, patients, odontogramme, dossier clinique, devis, facturation, radios et imagerie. En option s'ajoutent les rappels automatiques, l'espace patient, le multi-cabinet, un agent IA qui exécute les mêmes opérations que l'interface et s'arrête pour demander confirmation avant chaque écriture, et WhatsApp comme canal de notification. Aucun abonnement par fauteuil, par praticien ou par patient, et aucun palier à débloquer.

Ce qui n'existe pas en France aujourd'hui, et il vaut mieux le lire ici qu'en bas de page :

- **Aucune télétransmission de feuilles de soins électroniques.** Pas de SESAM-Vitale, pas d'ADRi, pas d'INS.
- **Aucune gestion de la CCAM ni du conventionnel.** Le module fiscal qui existe est Verifactu, et il est espagnol.
- **Aucun ordonnancier certifié.**
- **Aucun module de stérilisation.**

Et l'interface n'existe aujourd'hui qu'en anglais et en espagnol, pas en français. La traduction est ouverte comme contribution de la communauté ([issue sur le dépôt](https://github.com/martinezsalmeron/dentalpin/labels/i18n)), mais elle n'est pas livrée.

## Face à face

| | Julie | Dentalpin |
|---|---|---|
| Modèle | Licence commerciale | Open source (BSL 1.1) |
| Tarif publié | ✗ Aucun prix sur le site | ✓ 0 €, tout compris |
| Feuilles de soins électroniques | ✓ Annoncées, avec moins de rejets | ✗ Absent |
| CCAM et conventionnel | ✓ Nomenclature et règles d'application | ✗ Absent |
| Droits patient (ADRi) et INS | ✓ Dans le logiciel | ✗ Absent |
| E-ordonnance | ~ Module complémentaire, facturé à part | ✗ Absent |
| Stérilisation | ✓ Module intégré | ✗ Absent |
| Imagerie | ✓ Seize systèmes listés comme compatibles | ~ Radios et imagerie dans le socle, sans liste publiée |
| Sauvegarde | ✓ Externalisée tous les quarts d'heure, datacenter HDS | ~ La vôtre, selon votre hébergement |
| Ancienneté | ✓ Fondée en 1983 | ✗ Depuis 2026 |
| Base installée | ✓ "plus de 20 000 utilisateurs" | ✗ Depuis 2026 |
| Interface en français | ✓ Oui | ✗ Non, aujourd'hui anglais et espagnol |
| Code source | ✗ Non | ✓ Sur GitHub, en entier |
| API publique | ~ Non documentée sur les pages publiques | ✓ REST, documentée en OpenAPI |
| Où sont les données | ~ Datacenter HDS pour les sauvegardes | ✓ Sur votre serveur, toujours |

Les lignes marquées "non documentée" et "sans liste publiée" disent exactement cela et rien de plus : nous ne l'avons pas trouvé sur les pages publiques que nous avons lues. Si vous évaluez Julie sérieusement, ce sont des questions à leur poser, pas des conclusions à tirer d'ici.

![Dossier patient, onglet activité : alertes cliniques, plan en cours et historique filtrable par visites, traitements, finances et communications](/screenshots/patient-timeline.png)

*L'historique du patient se filtre par type d'événement, ce qui évite de relire toute la fiche pour retrouver une date.*

## Choisissez Julie si

- **Vous télétransmettez.** C'est le quotidien d'un cabinet conventionné en France, Julie l'annonce et nous ne le faisons pas. C'est la première raison d'existence de ce comparatif.
- **Vous voulez la CCAM et les droits patient dans le logiciel.** ADRi et INS évitent une part des rejets, et ce travail ne se remplace pas par un tableur.
- **Vous prescrivez et voulez un ordonnancier certifié.** Logiciel d'Aide à la Prescription certifié et base agréée HAS v3, c'est un cadre réglementaire que nous ne couvrons pas.
- **Votre parc d'imagerie est déjà installé.** Seize systèmes annoncés compatibles, c'est une liste que peu d'éditeurs peuvent afficher.
- **Vous voulez un éditeur avec une hotline.** Quarante ans de marché revendiqués et une assistance téléphonique. Chez nous, c'est la communauté sur GitHub qui répond.

Si trois de ces cinq points vous concernent, la réponse honnête est Julie. Nous préférerions être la réponse à tout, mais en France aujourd'hui nous ne le sommes pas.

## Choisissez Dentalpin si

- **La propriété du code et des données compte plus que les fonctions du premier jour.** La base est à vous, le code se lit, et si nous disparaissions demain votre installation continue de tourner.
- **La partie conventionnelle passe déjà ailleurs**, et ce que vous attendez du logiciel clinique, c'est le clinique.
- **Vous voulez intégrer.** Tout ce que fait l'interface passe par la même API publique, documentée en OpenAPI. Pas de ticket, pas d'autorisation, pas de licence supplémentaire.
- **Vous ne voulez pas que la facture grossisse avec le cabinet.** Aucun abonnement par fauteuil, par praticien ou par patient, et aucun module à débloquer.
- **Il vous manque une fonction.** Vous pouvez la construire, et elle reste en place après une mise à jour.

> **Essayez avant de résilier quoi que ce soit.** La démo s'ouvre sans inscription et sans laisser d'email, et une installation à vous tient debout en [trois minutes](/fr/blog/installer-dentalpin-en-trois-minutes/). L'erreur coûteuse n'est pas de changer de logiciel : c'est d'en changer sans avoir testé la reprise sur une copie.

## Comment se passe vraiment la migration

1. **Demandez l'export complet à votre éditeur actuel** avant de résilier : patients, dossiers cliniques, devis, factures avec leur numérotation, images et catalogue des actes.
2. **Installez Dentalpin sur un environnement de test**, pas sur celui avec lequel vous comptez travailler ensuite.
3. **Chargez l'export dans le module d'import** (`migration_import`). Il affiche un aperçu avec les compteurs avant d'écrire quoi que ce soit.
4. **Vérifiez la correspondance des actes ligne par ligne.** Ce qui dépasse 0,9 s'accepte en bloc, le reste se tranche à la main. C'est l'étape où les migrations échouent.
5. **Décidez d'abord qui télétransmet** à partir du jour de la bascule, parce que cette partie ne se déplace pas avec les données.
6. **Comparez les compteurs** des deux systèmes : patients, factures, rendez-vous à venir.
7. **Gardez l'ancien système en lecture seule** tant que vous n'êtes pas sûr. Le parcours complet est dans [ce guide](/fr/blog/migrer-logiciel-dentaire/).

![Liste de factures avec les états émise, payée, partiellement payée, en retard et brouillon](/screenshots/invoices.png)

*La facturation fonctionne avec des séries configurables et des paiements partiels. La télétransmission n'est pas couverte.*

Ce que coûte Dentalpin tient sur la [page des tarifs](/fr/tarifs/), et c'est une page courte.

## Sources

Toutes consultées le 5 août 2026.

- Fonctions du logiciel, sauvegarde HDS, systèmes d'imagerie compatibles et "plus de 20 000 utilisateurs" : [julie.fr/logiciel-cabinet-dentaire](https://www.julie.fr/logiciel-cabinet-dentaire/)
- Fondation en 1983 et présentation de l'éditeur : [julie.fr](https://www.julie.fr/)
- CCAM, feuilles de soins électroniques, ADRi, INS et ordonnancier : [julie.fr/reglementaire-evolution-profession-dentaire](https://www.julie.fr/reglementaire-evolution-profession-dentaire/)
- E-ordonnance, module complémentaire, LAP certifié et base HAS v3 : [julie.fr/e-ordonnance](https://www.julie.fr/e-ordonnance/)
- Éditeur, RCS 838 336 246 et absence de groupe propriétaire mentionné : [julie.fr/mentions-legales](https://www.julie.fr/mentions-legales/)
- Licence, modules et prix de Dentalpin : [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) et [dentalpin.com/fr/tarifs](/fr/tarifs/)

Il manque quelque chose, ou quelque chose a changé chez Julie et nous est passé sous le nez ? [Écrivez-nous](https://github.com/martinezsalmeron/dentalpin/discussions) : nous corrigeons le texte et nous disons ce que nous avons changé.
