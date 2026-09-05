---
title: "Dentalpin face à Dentra : 49 €/mois en ligne ou votre propre serveur"
description: "Comparatif Dentra et Dentalpin : tarifs publiés, hébergement HDS, SESAM-Vitale et mentions légales, d'après dentra.fr et les registres officiels, septembre 2026."
pubDate: 2026-09-05
tags: [comparatif, dentra, logiciel-dentaire]
---

Dentra est l'un des rares logiciels dentaires français à afficher ses tarifs sur son site, de 49 à 149 € par mois hors taxes. C'est une qualité assez rare sur ce marché pour être dite en premier, et elle rend la comparaison possible sans passer par un commercial.

Nous éditons Dentalpin, donc nous ne sommes pas neutres. Nous pouvons en revanche être exacts.

> **Tout ce qui est dit ici de Dentra vient de pages publiées sur dentra.fr**, consultées le 5 septembre 2026, avec les URL en bas de page. Les comparateurs en ligne ont été écartés volontairement. Deux points de cet article renvoient en plus à des registres publics de l'État, que vous pouvez ouvrir vous-même, et il y a plus bas une section entière sur les cabinets pour lesquels Dentra est le meilleur choix.

## En trente secondes

**Dentra est un logiciel de gestion en ligne, français, jeune et bon marché.** Sa page *À propos* date la création à 2022, son interface est en français, il annonce agenda, dossier patient, schéma dentaire, devis CCAM, facturation, imagerie, stocks et prothésistes, avec 14 jours d'essai sans carte bancaire et aucun serveur à installer au cabinet.

**Dentalpin est open source et vit sur votre serveur.** Le code est publié, l'installation tient dans un `docker compose`, l'auto-hébergement est gratuit et sans durée minimale. En France, il ne télétransmet pas et son interface n'existe pas encore en français, ce qui se lit ici plutôt qu'en note de bas de page.

**La question qui tranche n'est pas le prix, c'est la vérification.** Les deux produits sont jeunes et le disent. Avant de confier des dossiers patients à l'un ou à l'autre, la seule chose qui compte est ce que vous pouvez contrôler par vous-même : qui édite le logiciel, où vivent les données, et comment vous les récupérez. La dernière section de cet article explique comment faire ce contrôle sur n'importe quel éditeur, y compris nous.

![Page d'accueil affichant les rendez-vous du jour, les patients présents au cabinet, les paiements en retard et les dossiers récents](/screenshots/home.png)

*La page d'accueil de Dentalpin, avec les données du cabinet de démonstration livré à l'installation.*

## Ce qu'est Dentra

Un logiciel de gestion de cabinet dentaire en ligne, présenté comme "100 % Cloud, sans serveur au cabinet". La page d'accueil résume la promesse ainsi : "Agenda, dossiers patients, devis, factures et ordonnances réunis dans un seul logiciel conforme RGPD."

La page *À propos* raconte un produit récent et le date précisément. "Dentra a été fondé en 2022 par une équipe passionnée", et la frise qui suit place l'agenda et le dossier patient en 2023, "Facturation et SESAM-Vitale" avec "Codage CCAM/NGAP, FSE, retours NOEMIE et tiers payant" en 2024, puis "Portail patient et téléconsultation" en 2025.

Le périmètre annoncé sur la page *Fonctionnalités* couvre l'essentiel du quotidien :

- **L'agenda.** Vue jour, semaine et mois, glisser-déposer, gestion multi-praticiens et par salle, "rappels automatiques par email".
- **Le dossier patient.** Antécédents, allergies, contact d'urgence, et un "Schéma Dentaire Interactif" avec "Historique par dent", "Codes couleur" et "Export PDF".
- **Le devis.** "Créez des devis professionnels avec les codes CCAM intégrés", avec signature électronique et relances automatiques.
- **La facturation électronique.** "Factur-X natif, connexion PDP, archivage légal 10 ans HDS et e-reporting DGFiP automatisé", au format "PDF/A-3 + XML CII conforme à la norme EN 16931".
- **L'imagerie.** Stockage des radios, photos et scanners, visualiseur avec annotations et "Export DICOM".
- **Le reste du cabinet.** Stocks avec suivi des péremptions, commandes prothésistes, statistiques, messagerie interne.

Deux choses ne figurent sur aucune page consultée, et cela vaut d'être dit sans en tirer de conclusion : le parodontogramme n'est nommé nulle part, et aucune documentation d'API publique n'est publiée, alors que "API & Intégrations" apparaît comme ligne du plan le plus cher.

### Ce que Dentra coûte

C'est la partie la plus utile de leur site, parce qu'elle est écrite. Trois plans, tous "HT", avec "14 jours d'essai gratuit sur tous les plans. Sans engagement, sans carte bancaire" et "0 € Frais d'installation".

| Plan | Prix | Praticiens | Ce qui s'ajoute au plan précédent |
|---|---|---|---|
| Essentiel | 49 €/mois HT | 1 praticien | Agenda, dossiers illimités, devis, factures, ordonnances, support par email |
| Professionnel | 89 €/mois HT | Jusqu'à 3 praticiens | Gestion des salles, statistiques avancées, stocks, prothésistes, support prioritaire, formation |
| Cabinet | 149 €/mois HT | Praticiens illimités | Multi-sites, API et intégrations, rapports personnalisés, gestionnaire de compte, SLA, migration assistée |

Leurs conditions générales de vente précisent le reste, et elles sont plus claires que la moyenne du marché : abonnement "pour une durée déterminée (1 mois ou 1 an)" avec reconduction automatique, résiliation "à tout moment depuis les paramètres de son compte", et "Aucun remboursement prorata temporis n'est effectué en cas de résiliation anticipée".

> **Leur article 10 publie un délai de sortie, ce que presque personne ne fait.** "À la résiliation de l'abonnement, le Client dispose d'un délai de 30 jours pour exporter ses données. Passé ce délai, les données seront supprimées." Trente jours est court pour un cabinet qui déménage vingt ans de dossiers, mais un délai écrit vaut mieux qu'un délai à négocier, et la plupart de leurs concurrents n'en publient aucun.

## Ce que publient les pages légales et de conformité

Cette section est factuelle et se lit avec les liens ouverts à côté. Nous citons ce que les pages disent, avec la date, et nous nous arrêtons là.

**Les mentions légales ne sont pas renseignées.** La page, datée "Dernière mise à jour : Janvier 2026", nomme bien "Dentra SAS" mais laisse les identifiants en gabarit : "Société par Actions Simplifiée au capital de [Montant] €", "Siège social : [Adresse complète], Paris, France", "RCS Paris : [Numéro RCS]", "SIRET : [Numéro SIRET]", "N° TVA Intracommunautaire : [Numéro TVA]". Le directeur de la publication est "[Nom du dirigeant]" et l'adresse du DPO "[Adresse postale du DPO]". Le numéro affiché en pied de page sur tout le site est "01 23 45 67 89".

**L'hébergeur nommé n'est pas dans la liste des hébergeurs certifiés HDS.** Les mentions légales indiquent : "L'application Dentra est hébergée par : Lovable Cloud", et "Les données sont stockées dans des centres de données situés dans l'Union Européenne". La politique de confidentialité dit de même "Les données sont principalement hébergées dans l'Union Européenne". Les pages produit, elles, annoncent "Hébergé en France", "Données stockées sur serveurs français", "Hébergement HDS" et "Archivage 10 ans HDS ... sur infrastructure souveraine". Aucune page consultée ne nomme d'hébergeur certifié ni de numéro de certificat, et nous n'avons trouvé aucune entrée "Lovable" dans la liste officielle publiée par l'Agence du numérique en santé, consultée le 5 septembre 2026.

> **Ce que cela prouve, et ce que cela ne prouve pas.** Cela prouve que les pages publiques se contredisent entre elles et qu'on ne peut pas vérifier la chaîne d'hébergement depuis le site. Cela ne prouve pas que les données seraient mal hébergées : un éditeur peut très bien avoir un sous-traitant certifié qu'il ne nomme pas, ou un site vitrine séparé de sa production. La bonne réaction n'est pas de conclure, c'est de demander le nom de l'hébergeur et son numéro de certificat par écrit, à eux comme à n'importe quel éditeur.

L'obligation, elle, n'est pas discutable et ne vient pas de nous. L'article L.1111-8 du code de la santé publique dispose que "Toute personne physique ou morale qui héberge des données de santé à caractère personnel ... doit être agréée ou certifiée à cet effet", et l'Agence du numérique en santé publie la liste des hébergeurs certifiés, consultable par tout le monde.

**La télétransmission est annoncée sans agrément nommé.** La page d'accueil affiche "CCAM, NGAP et SESAM-Vitale intégrés", et le bloc conformité précise "sans jamais remplacer votre flux SESAM-Vitale", deux formulations qui ne disent pas la même chose. Aucune page consultée ne cite de numéro d'agrément, de version SESAM-Vitale ni de date de passage au CNDA. Le CNDA publie un registre de recherche des logiciels certifiés, et c'est là que la question se tranche, chez eux comme chez leurs concurrents.

**Le calendrier de la facturation électronique mérite une précision.** Leur page annonce "La réforme entre en vigueur le 1ᵉʳ septembre 2026". C'est exact pour la réception, et incomplet pour l'émission. Le site des impôts écrit : "À compter du 1er septembre 2026, toutes les entreprises quelle que soit leur taille devront recevoir leurs factures sous forme électronique", puis "À compter du 1er septembre 2027, l'obligation d'émission des factures sous format électronique et de transmission électronique à l'administration d'informations de transactions et de données de paiement sera obligatoire pour les petites et moyennes entreprises ainsi que pour les micro-entreprises". Un cabinet dentaire libéral relève de la seconde phrase. Le sujet est détaillé dans [notre guide sur la facturation électronique au cabinet](/fr/blog/facturation-electronique-cabinet-dentaire/).

**Enfin, deux phrases de leur site se contredisent sur la base installée.** La page d'accueil annonce, et c'est à leur honneur : "Nous préférons annoncer ce que le logiciel fait réellement plutôt que des chiffres invérifiables. Les premiers retours de cabinets pilotes seront publiés ici, avec leur accord." Les pages *Fonctionnalités* et *À propos* invitent au même moment à "Rejoignez les centaines de praticiens qui font confiance à Dentra". Nous n'avons pas de moyen de départager les deux, donc nous ne retenons ni l'une ni l'autre comme un chiffre.

## Ce qu'est Dentalpin

Un logiciel de gestion de cabinet dentaire dont le code est publié sous licence Business Source License 1.1, qui bascule automatiquement en Apache 2.0 quatre ans après chaque version. Vous téléchargez le code, vous l'installez où vous voulez, et vous ne payez de licence ni par fauteuil, ni par praticien, ni par patient.

Le périmètre clinique est complet : agenda, fichier patients, odontogramme, parodontogramme, dossier clinique, plans de traitement, devis avec signature, facturation, paiements, relances et rapports. Une API REST documentée en OpenAPI vient avec, ainsi qu'un assistant IA qui exécute les mêmes opérations que l'interface, avec les droits de l'utilisateur connecté et une confirmation avant chaque écriture.

Ce qui manque en France se lit ici et non en bas de page : pas de télétransmission SESAM-Vitale, pas d'agrément CNDA, pas de connexion PDP pour la facturation électronique, pas de portail patient, et une interface disponible en anglais et en espagnol mais pas encore en français.

C'est un produit de 2026 et cela se voit. Le tableau ci-dessous le dit ligne par ligne.

![Dossier patient avec l'odontogramme, les alertes cliniques, le plan de traitement en cours et le prochain rendez-vous](/screenshots/dental-chart.png)

*Le dossier patient : odontogramme, alertes cliniques, plan actif et prochain rendez-vous sur un même écran.*

## Face à face

Uniquement des lignes vérifiables. Là où il n'y a pas d'information publiée, c'est écrit.

| | Dentra | Dentalpin |
|---|---|---|
| Modèle | Abonnement en ligne | Open source (BSL 1.1 puis Apache 2.0) |
| Tarif publié | ✓ 49, 89 et 149 €/mois HT | ✓ 0 € en auto-hébergement |
| Frais d'installation | ✓ "0 € Frais d'installation" | ✓ Aucun, `docker compose` |
| Engagement | ✓ Mensuel ou annuel, résiliable depuis le compte | ✓ Aucun |
| Essai sans carte bancaire | ✓ 14 jours | ~ Démonstration en ligne, sans compte |
| Interface en français | ✓ Oui | ✗ Non, anglais et espagnol |
| Serveur à gérer au cabinet | ✓ Aucun, tout est hébergé | ✗ Le serveur est le vôtre |
| Codes CCAM et NGAP | ✓ Annoncés intégrés | ✗ Absents |
| Télétransmission SESAM-Vitale | ~ Annoncée, aucun agrément nommé sur les pages consultées | ✗ Absente |
| Facturation électronique 2026 | ✓ Factur-X, PDP et e-reporting annoncés | ~ Factures et export, pas de connexion PDP |
| Portail patient | ✓ Annoncé depuis 2025 | ✗ Absent |
| Parodontogramme | ✗ Non nommé sur les pages consultées | ✓ Six sites par dent |
| Hébergeur de santé | ✗ "Lovable Cloud", non trouvé dans la liste ANS des certifiés HDS | ~ Celui que vous choisissez, la certification devient votre affaire |
| Délai d'export à la résiliation | ✓ 30 jours, écrit dans les CGV | ✓ Sans objet, la base est chez vous |
| Code auditable | ✗ Non | ✓ Publié sur GitHub |
| API documentée | ~ "API & Intégrations" au plan Cabinet, sans documentation publique | ✓ REST, documentée en OpenAPI |
| Année de création | ✓ 2022 | ✗ 2026 |

Les six pastilles vertes de la moitié haute leur appartiennent, et il n'y a pas de façon honnête de les minimiser. Pour un cabinet qui veut ouvrir un navigateur lundi matin et travailler en français, elles pèsent plus lourd que tout ce que nous pouvons aligner en face.

## Choisissez Dentra si

- **Vous ne voulez aucun serveur au cabinet et personne pour s'en occuper.** C'est la raison numéro un et elle se suffit. Chez nous, l'auto-hébergement veut dire que les sauvegardes et les mises à jour sont votre travail ou celui de votre prestataire.
- **Il vous faut une interface en français dès demain matin.** La nôtre ne l'est pas encore, et aucun argument de licence ne compense une équipe qui ne comprend pas ses propres écrans.
- **Vous codez en CCAM et vous facturez à l'assurance maladie depuis le logiciel.** Ils annoncent CCAM, NGAP, FSE, NOEMIE et tiers payant. Nous n'avons rien à mettre en face, ni fonction, ni date.
- **Vous voulez un tarif écrit et un essai sans carte bancaire.** Quarante-neuf euros par mois pour un praticien, affichés, sans frais d'installation : sur ce marché, c'est une position honnête et elle mérite d'être reconnue.
- **Le portail patient et la téléconsultation comptent pour vous.** Annoncés chez eux depuis 2025, absents chez nous.
- **Vous préférez un éditeur qui refuse d'inventer des chiffres.** Leur phrase sur les "chiffres invérifiables" est plus droite que la moyenne des sites de ce secteur, même si une autre page la contredit.

Pour un cabinet libéral conventionné qui n'a pas d'informaticien, cette liste l'emporte sur la suivante, et nous préférons l'écrire que de la laisser deviner.

![Liste des factures avec les états émise, payée, partiellement payée, en retard et brouillon](/screenshots/invoices.png)

*La facturation de Dentalpin, avec l'état de chaque facture et le reste à payer.*

## Choisissez Dentalpin si

- **Le conventionnel passe déjà ailleurs.** Cabinet non conventionné, activité majoritairement hors nomenclature, ou télétransmission gérée par un autre outil : l'argument principal de Dentra ne vous concerne alors plus.
- **Vous voulez savoir où sont vos données, et pouvoir le prouver.** Le serveur est le vôtre, la base PostgreSQL est la vôtre, et la question de l'hébergeur certifié se règle en choisissant vous-même un prestataire de la liste ANS plutôt qu'en la posant à un éditeur.
- **La parodontologie fait partie de votre exercice.** Un parodontogramme à six sites par dent existe chez nous et n'est nommé sur aucune de leurs pages.
- **Vous voulez lire le code qui stocke des dossiers médicaux**, ou le faire lire par quelqu'un de confiance. Il est publié.
- **Vous voulez brancher autre chose dessus.** Notre API REST est documentée publiquement en OpenAPI ; la leur est une ligne de plan tarifaire.
- **Vous avez déjà quelqu'un pour le serveur.** C'est la contrepartie exacte de tout ce qui précède et elle ne se contourne pas. Ce que cela coûte vraiment est détaillé sur [la page des tarifs](/fr/tarifs/), et le choix entre cloud et serveur propre est démonté dans [ce guide](/fr/blog/cloud-ou-serveur-cabinet-dentaire/).

## Comment vérifier un éditeur vous-même, en dix minutes

C'est la partie de cet article qui sert même si vous ne choisissez ni l'un ni l'autre. Elle s'applique à Dentra, à nous, et aux quinze autres logiciels que vous allez regarder.

1. **Ouvrez les mentions légales et cherchez le SIREN ou le RCS.** Un numéro à neuf chiffres se vérifie en trente secondes sur l'annuaire des entreprises. Un champ vide ou entre crochets n'est pas une preuve de quoi que ce soit, mais c'est une question à poser avant de signer.
2. **Cherchez le nom de l'hébergeur, pas le sigle HDS.** "Hébergement HDS" est une phrase marketing. Un nom d'hébergeur et un numéro de certificat sont des faits, et l'un se vérifie dans la liste publiée par l'Agence du numérique en santé.
3. **Demandez le certificat par écrit** si le site ne le publie pas. Un éditeur sérieux répond en une ligne, parce que son hébergeur le lui fournit.
4. **Vérifiez l'agrément SESAM-Vitale dans le registre du CNDA**, et pas sur la page produit. Le mot "intégré" n'est pas un agrément.
5. **Lisez l'article des CGV sur la résiliation et l'export.** Vous cherchez deux nombres : le préavis, et le nombre de jours pendant lesquels vos données restent récupérables après le départ.
6. **Demandez un export de démonstration avant de signer**, pas après. Réclamez du CSV ou du XML, pas un PDF par patient, et regardez si l'historique des actes en sort ligne par ligne.
7. **Comparez les pages entre elles.** Quand la page produit et les mentions légales ne disent pas la même chose sur l'hébergement, ce n'est pas un détail de rédaction, c'est le sujet.

## Comment se passe une migration

Si vous venez de Dentra, les CGV donnent le point de départ : trente jours après la résiliation pour sortir vos données. Le calendrier se construit à l'envers depuis cette date.

1. **Demandez votre export avant de résilier quoi que ce soit**, en vous appuyant sur le droit à la portabilité (RGPD, article 20) que leur politique de confidentialité liste explicitement.
2. **Exigez un format ouvert**, CSV ou XML, et vérifiez que les actes, les paiements et les rendez-vous à venir en font partie, pas seulement la fiche patient.
3. **Récupérez aussi les images.** Radios, photos et scanners sont stockés dans le logiciel selon leur page *Imagerie*, et un "Export DICOM" y est annoncé : demandez-le explicitement.
4. **Tranchez d'abord la question de la télétransmission.** Elle ne se déplace pas avec les données et c'est le point à régler avant tout le reste.
5. **Installez Dentalpin** avec un `docker compose`, sur votre serveur ou chez un hébergeur. Le parcours complet tient dans [ce guide](/fr/blog/installer-dentalpin-en-trois-minutes/).
6. **Chargez l'export dans le module d'import** (`migration_import`). Il affiche un aperçu avec les compteurs et des lignes d'exemple avant d'écrire quoi que ce soit dans la base.
7. **Vérifiez la correspondance des actes ligne par ligne.** Ce qui dépasse 0,9 de similarité s'accepte en bloc, le reste se tranche à la main.
8. **Comparez les compteurs** des deux systèmes : patients, factures, rendez-vous à venir. Si les nombres ne tombent pas juste, le problème est maintenant et pas dans six mois.
9. **Gardez l'ancien système accessible** tant que vous n'êtes pas sûr. Le parcours détaillé est dans [ce guide](/fr/blog/migrer-logiciel-dentaire/).

> **L'étape 7 est celle où les migrations échouent.** Deux cabinets ne codent jamais leurs actes de la même façon, et une correspondance devinée en silence produit des factures fausses que personne ne remarque pendant des mois.

## Honnêtement, pour finir

Dentra et Dentalpin sont deux produits jeunes qui répondent à deux peurs différentes. La leur est celle du serveur à gérer et de la facture qui grimpe, et ils y répondent avec un tarif affiché et rien à installer. La nôtre est celle de ne pas savoir où sont ses données ni comment les reprendre, et nous y répondons avec du code publié et une base sur votre machine.

Pour un cabinet conventionné sans informaticien, leur réponse est aujourd'hui la plus pratique, et nous ne prétendons pas le contraire. Pour tout le reste, la question à poser aux deux est la même, et elle est écrite plus haut : montrez-moi l'hébergeur, l'agrément et le format d'export. Vous pouvez [essayer la démo](https://demo.dentalpin.com) sans rien installer et juger vous-même.

## Sources

Toutes consultées le 5 septembre 2026.

- "Gérez votre cabinet dentaire en toute simplicité", "100 % Cloud, sans serveur au cabinet", "CCAM, NGAP et SESAM-Vitale intégrés", "0 € Frais d'installation", "Hébergé en France", "Données stockées sur serveurs français", "Chiffrement SSL/TLS 256 bits", "La réforme entre en vigueur le 1ᵉʳ septembre 2026", "Factur-X natif", "PDP & PPF intégrées", "Archivage 10 ans HDS ... sur infrastructure souveraine", "sans jamais remplacer votre flux SESAM-Vitale", "Nous préférons annoncer ce que le logiciel fait réellement plutôt que des chiffres invérifiables. Les premiers retours de cabinets pilotes seront publiés ici, avec leur accord", et le numéro "01 23 45 67 89" en pied de page : [dentra.fr](https://dentra.fr/)
- Les trois plans à 49, 89 et 149 €/mois, leur contenu, "Tous les prix sont HT", "14 jours d'essai gratuit sur tous les plans. Sans engagement, sans carte bancaire" : [dentra.fr/tarifs](https://dentra.fr/tarifs)
- "Schéma Dentaire Interactif", "Créez des devis professionnels avec les codes CCAM intégrés", "Données hébergées en France avec chiffrement de bout en bout", "Hébergement HDS", "Chiffrement AES-256", "Export DICOM", "Rejoignez les centaines de praticiens qui font confiance à Dentra", et l'absence de toute mention de parodontogramme, de 100 % Santé, du Ségur ou d'une documentation d'API : [dentra.fr/fonctionnalites](https://dentra.fr/fonctionnalites)
- "Dentra a été fondé en 2022", la frise 2022 à 2025 avec "Facturation et SESAM-Vitale", "Codage CCAM/NGAP, FSE, retours NOEMIE et tiers payant" et "Portail patient et téléconsultation" : [dentra.fr/a-propos](https://dentra.fr/a-propos)
- "Dernière mise à jour : Janvier 2026", "Dentra SAS", "capital de [Montant] €", "Siège social : [Adresse complète], Paris, France", "RCS Paris : [Numéro RCS]", "SIRET : [Numéro SIRET]", "N° TVA Intracommunautaire : [Numéro TVA]", "[Nom du dirigeant]", "[Adresse postale du DPO]", "L'application Dentra est hébergée par : Lovable Cloud", "Les données sont stockées dans des centres de données situés dans l'Union Européenne" : [dentra.fr/mentions-legales](https://dentra.fr/mentions-legales)
- "L'abonnement est souscrit pour une durée déterminée (1 mois ou 1 an)", "Le Client peut résilier son abonnement à tout moment depuis les paramètres de son compte", "Aucun remboursement prorata temporis n'est effectué en cas de résiliation anticipée", et l'article 10 : "À la résiliation de l'abonnement, le Client dispose d'un délai de 30 jours pour exporter ses données. Passé ce délai, les données seront supprimées conformément à notre politique de confidentialité" : [dentra.fr/cgv](https://dentra.fr/cgv)
- "Dentra agit en tant que sous-traitant au sens du RGPD", "Les données sont principalement hébergées dans l'Union Européenne", conservation "pendant la durée de l'abonnement + 3 ans", droit à la portabilité : [dentra.fr/confidentialite](https://dentra.fr/confidentialite)
- Certification HDS, obligation de l'article L.1111-8 du code de la santé publique ("Toute personne physique ou morale qui héberge des données de santé à caractère personnel ... doit être agréée ou certifiée à cet effet") et renvoi vers la liste officielle : [esante.gouv.fr, certification HDS](https://esante.gouv.fr/produits-services/hds)
- Liste officielle des hébergeurs certifiés HDS, établie au titre du décret 2018-137 du 26 février 2018, dans laquelle aucune entrée "Lovable" n'a été trouvée à cette date : [esante.gouv.fr, liste des hébergeurs certifiés](https://esante.gouv.fr/offres-services/hds/liste-des-hebergeurs-certifies)
- Registre de recherche des logiciels certifiés par le Centre national de dépôt et d'agrément : [cnda.ameli.fr/logiciels-certifies](https://cnda.ameli.fr/logiciels-certifies/)
- "À compter du 1er septembre 2026, toutes les entreprises quelle que soit leur taille devront recevoir leurs factures sous forme électronique" et "À compter du 1er septembre 2027, l'obligation d'émission des factures sous format électronique et de transmission électronique à l'administration d'informations de transactions et de données de paiement sera obligatoire pour les petites et moyennes entreprises ainsi que pour les micro-entreprises" : [impots.gouv.fr](https://www.impots.gouv.fr/professionnel/questions/partir-de-quand-suis-je-concerne-par-la-reforme-de-la-facturation)
- Licence, modules et prix de Dentalpin : [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) et [page des tarifs](/fr/tarifs/)

Il manque quelque chose, ou quelque chose a changé chez Dentra et nous est passé sous le nez ? [Écrivez-nous](https://github.com/martinezsalmeron/dentalpin/discussions) : nous corrigeons le texte et nous disons ce que nous avons changé. Cela vaut aussi si vous êtes chez Dentra.
