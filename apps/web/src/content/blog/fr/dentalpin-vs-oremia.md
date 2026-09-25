---
title: "Dentalpin face à Oremia : l'application Mac native contre le navigateur"
description: "Comparatif Oremia et Dentalpin : application native macOS, agrément SESAM-Vitale, licence permanente et auto-hébergement. Sources oremia.fr, septembre 2026."
pubDate: 2026-09-25
tags: [comparatif, oremia, logiciel-dentaire]
---

Oremia est un logiciel dentaire qui ne tourne que sur Mac et sur iPad, et qui télétransmet. Cette phrase suffit à trancher la moitié des comparaisons de ce marché, parce qu'un cabinet équipé en Apple n'a presque nulle part d'autre où aller en France.

Nous éditons Dentalpin, donc nous ne sommes pas neutres. Nous pouvons en revanche être exacts.

> **Tout ce qui est dit ici d'Oremia vient de pages publiées par son éditeur**, oremia.fr, consultées le 25 septembre 2026, avec les URL en bas de page. Les comparateurs en ligne ont été écartés volontairement : ils se contredisent et aucun d'eux n'est Zumatec. Il y a plus bas une section entière sur les cabinets pour lesquels Oremia est le meilleur choix, et elle est courte parce qu'elle est précise.

## En trente secondes

**Oremia est une application native macOS qui télétransmet de manière autonome.** Sa page produit annonce une "télétransmission autonome agréée SESAM-Vitale 1.40.14", et son actualité du 13 mars 2025 date un agrément CNDA pour "Oremia macOS 1.12" en version "1.40.14 addendum 8", avec l'ApCV et le téléservice ALDi. Autour de ce socle : CCAM dentaire, devis conventionnel, ordonnancier relié à la base VIDAL et comptabilité libérale complète jusqu'à la déclaration 2035.

**Dentalpin est open source et vit sur votre serveur.** Le code est publié, l'installation tient dans un `docker compose`, l'auto-hébergement est gratuit et sans durée minimale. En France, il ne télétransmet pas et son interface n'existe pas encore en français, ce qui se lit ici plutôt qu'en note de bas de page.

**La question qui tranche : votre cabinet est-il sur Mac, et la feuille de soins part-elle de votre logiciel de gestion ?** Si les deux réponses sont oui, c'est Oremia et la comparaison s'arrête là. Si votre parc est mixte, ou si le conventionnel est déjà réglé ailleurs, la question suivante devient celle du prix, et elle demande un appel chez eux alors qu'elle est écrite chez nous.

![Page d'accueil affichant les rendez-vous du jour, les patients présents au cabinet, les paiements en retard et les dossiers récents](/screenshots/home.png)

*La page d'accueil de Dentalpin, avec les données du cabinet de démonstration livré à l'installation.*

## Ce qu'est Oremia

Oremia est édité par Zumatec, société installée à Angers et présentée sur sa page *Entreprise* comme "pleinement engagée dans l'écosystème numérique angevin". La même page date l'activité de 2012, nomme quatre personnes (Fabrice Duballet, fondateur et gérant, Patricia Nicole, Guillaume Bonnin et Nathan Duault) et le pied de page du site porte un copyright "2012-2026".

Le parti pris est annoncé dès la page d'accueil et il est total : "Le logiciel dentaire sur Mac. Une app native, exclusivement pour Apple macOS et iOS". Ce n'est pas une compatibilité en plus, c'est la seule cible.

La gamme se découpe en applications nommées :

- **Oremia Desktop**, l'application de gestion elle-même, à partir de macOS 10.15, sur iMac ou MacBook.
- **Oremia Vitale**, décrit comme "le moteur de facturation développé par Zumatec et intégré à Oremia", qui "permet la création et la télétransmission de Feuilles de Soins Electroniques".
- **Oremia Touch iOS**, l'application iPhone et iPad qui donne accès aux dossiers patients, à la saisie des actes au fauteuil, à la signature de documents et à la prise de photo.
- **Oremia RDV**, la prise de rendez-vous en ligne, disponible "24/7" depuis le site du cabinet, les réseaux sociaux ou Google Maps, avec des rappels par SMS.
- **Oremia Secure Backup**, la sauvegarde en ligne, avec "des sauvegardes journalières en dehors des heures d'activité" et un chiffrement qui "garantit que personne ne peut les utiliser en dehors de vos postes".
- **Oremia MDT**, la traçabilité, et **CAD-CAM 3D** pour le stockage et la visualisation des fichiers.

La page *Fonctionnalités et pré-requis* est la plus utile du site et elle est inhabituellement explicite. Côté clinique et administratif, elle liste un "schéma dentaire interactif", l'"acquisition des images radiologiques" avec "traitement des images (édition, filtres, mesures)", l'"élaboration de devis personnalisables", l'"intégration du devis conventionnel" et celle de "la CCAM Dentaire", un "ordonnancier paramétrable avec accès à la base VIDAL", une "comptabilité libérale complète jusqu'à l'élaboration de la déclaration 2035", un "module statistique et calcul du taux URSSAF" et un "module traçabilité et gestion des stocks".

Côté imagerie, l'interfaçage est nommé : "Universal Link (Digora, Cranex, Scanora)" et "les capteurs disposant d'un driver TWAIN". Leur page périphériques ajoute Acteon, dont ils écrivent qu'il "propose des solutions d'imagerie directement compatible macOS".

> **Oremia ne publie aucun tarif.** Aucune page consultée le 25 septembre 2026 n'affiche de prix, et le menu du site ne comporte pas de rubrique tarifs : la navigation va des applications aux périphériques, à la productivité, à l'entreprise, aux actualités, puis au contact. C'est une phrase vérifiable et c'est la plus importante de ce comparatif, parce que la forme de la licence, elle, est publiée : la page *Fonctionnalités et pré-requis* indique "Licence permanente" pour Oremia Desktop et "Abonnement" pour Oremia Touch. Vous achetez donc le poste et vous louez le mobile, sans qu'aucun des deux montants ne soit écrit.

Deux points de lecture, non pas parce qu'ils seraient cachés, mais parce qu'ils reviendront dans votre démonstration.

Le premier est l'accès à distance. La page *Oremia Mobile* précise que la connexion "se fait exclusivement à partir du réseau local". L'iPad sert donc au fauteuil et dans les murs du cabinet, pas depuis chez vous le dimanche soir, et c'est une conséquence directe de l'architecture, pas un oubli.

Le second est l'identité de l'éditeur. Les mentions légales nomment Zumatec comme propriétaire, créateur et responsable de la publication, et désignent OVH comme hébergeur du site. Aucun SIREN, SIRET, RCS ni capital social n'apparaît sur la page consultée. La même page écrit que "le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations personnelles", formule qui renvoie au régime de déclaration antérieur au RGPD, applicable jusqu'en mai 2018. Ces deux observations portent sur le site vitrine et sur lui seul : elles ne disent rien de l'application, ni de l'endroit où vivent les données de vos patients.

Sur ce dernier point, justement, aucune page consultée ne nomme le pays, le centre de données ni un hébergeur de données de santé pour Oremia Secure Backup. Nous ne le tenons ni pour un manque ni pour une garantie, c'est une question à poser en démonstration.

Enfin, ce que disent leurs propres clients sur la page de témoignages, parce que c'est ce qui y revient le plus souvent : "Hotline téléphonique extrêmement compétente, efficace et gentille", "support aussi réactif", "la hotline est présente et efficace". Les anciennetés citées vont de quinze jours à "plusieurs années". Aucun chiffre de base installée n'est publié sur les pages consultées.

## Ce qu'est Dentalpin

Dentalpin est publié sous Business Source License 1.1 : lisible, forkable, gratuit en auto-hébergement, et quatre ans après chaque version le code bascule automatiquement en Apache 2.0. L'installation se fait avec un `docker compose` sur votre serveur, chez l'hébergeur de votre choix ou sur une machine du cabinet, et l'application s'utilise dans un navigateur, sur Mac comme sur PC.

Le socle comprend agenda, patients, odontogramme, parodontogramme, dossier clinique, devis, facturation, radios et imagerie. S'y ajoutent les rappels automatiques, l'espace patient, le multi-cabinet, WhatsApp comme canal de notification, et un agent IA désactivé par défaut qui s'arrête pour demander confirmation avant chaque écriture.

![Dossier patient affichant l'odontogramme, les alertes cliniques, le plan de traitement en cours et le prochain rendez-vous](/screenshots/dental-chart.png)

*Le dossier patient de Dentalpin, avec l'odontogramme et les alertes cliniques.*

Ce qu'il ne fait pas en France se dit aussi clairement : il ne télétransmet pas, il n'intègre ni la CCAM dentaire ni le devis conventionnel, et son interface n'est pas encore traduite en français.

## Face à face

| | Oremia | Dentalpin |
|---|---|---|
| Modèle | Licence permanente (Desktop) + abonnement (Touch) | Open source (BSL 1.1) |
| Tarif publié | ✗ Aucun prix sur le site | ✓ Publié, auto-hébergement gratuit |
| Système d'exploitation | ✗ macOS et iOS uniquement | ✓ Tout navigateur, Mac ou PC |
| Pré-requis | À partir de macOS 10.15, iMac ou MacBook | Un serveur et Docker |
| Télétransmission SESAM-Vitale | ✓ Agréée et autonome, 1.40.14 addendum 8 | ✗ Non |
| CCAM dentaire et devis conventionnel | ✓ Intégrés | ✗ Non |
| Ordonnancier avec base VIDAL | ✓ Oui | ✗ Non |
| Comptabilité libérale jusqu'à la 2035 | ✓ Oui | ✗ Non |
| Application native | ✓ macOS et iOS | ✗ Application web |
| Accès mobile hors du cabinet | ✗ Oremia Touch : réseau local uniquement | ✓ Depuis n'importe quel navigateur |
| Interface en français | ✓ Oui | ✗ Pas encore |
| Code source | ✗ Fermé | ✓ Publié |
| Auto-hébergement | ✗ Non proposé | ✓ Gratuit, sans durée minimale |
| Schéma dentaire | ✓ Interactif | ✓ Odontogramme et parodontogramme |
| Prise de rendez-vous en ligne | ✓ Oremia RDV | ✓ Espace patient |
| Rappels patients | ✓ SMS et e-mail | ✓ SMS, e-mail et WhatsApp |
| Éditeur | Zumatec, Angers, activité datée de 2012 | Depuis 2026 |

Les quatre lignes réglementaires du milieu de ce tableau ne sont pas des détails de fonctionnalité. Elles décrivent le travail quotidien d'un cabinet conventionné français, et elles sont toutes chez eux.

## Choisissez Oremia si

- **Votre cabinet est équipé en Apple et vous voulez le rester.** C'est leur raison d'être et l'offre est rare. Ils écrivent que "Oremia reste à ce jour, le seul logiciel natif macOS agréé SESAM-Vitale pour le dentaire" et, sur la page Oremia Vitale, qu'il est "le seul logiciel dentaire agréé SESAM-Vitale de manière autonome sous macOS". Nous rapportons ces deux phrases comme des affirmations de l'éditeur, datées du 25 septembre 2026 : la vérifier exigerait de passer en revue tout le registre public du CNDA, ce que ce comparatif n'a pas fait. Le registre est consultable librement et filtrable par système d'exploitation, donc vous pouvez le faire vous-même avant de signer.
- **La feuille de soins électronique part de votre logiciel de gestion.** Agrément CNDA daté du 13 mars 2025, ApCV pour la carte Vitale sur le smartphone du patient, téléservice ALDi. Nous ne faisons rien de cela.
- **Vous voulez une application native plutôt qu'un onglet de navigateur.** Sur macOS et sur iPad, c'en est une, avec la saisie au fauteuil et la prise de photo directement versée au dossier.
- **Vous tenez votre comptabilité dans votre logiciel métier.** Une comptabilité libérale menée jusqu'à la déclaration 2035, avec le calcul du taux URSSAF, n'existe pas chez nous et ne ressemble à rien de ce que fait un logiciel généraliste.
- **Vous voulez une hotline qui décroche.** C'est ce que leurs clients citent en premier sur leur propre page de témoignages, et c'est un choix d'éditeur qui se voit dans une équipe de quatre personnes.
- **Vous préférez acheter une licence plutôt que louer.** "Licence permanente" pour le poste de travail est un modèle qui a presque disparu, et il correspond à une réalité comptable que beaucoup de praticiens préfèrent.

## Choisissez Dentalpin si

- **Votre parc n'est pas entièrement Apple, ou ne le restera pas.** Un PC à l'accueil suffit à rendre la question réelle, et elle ne se règle pas par une option.
- **Vous voulez savoir ce que vous payez avant d'appeler.** Nos tarifs sont sur [la page tarifs](/fr/tarifs/), l'auto-hébergement est gratuit et il n'y a pas de durée minimale.
- **Vous voulez que les données restent chez vous.** Base PostgreSQL sur votre serveur, export libre à tout moment, aucune permission à demander pour sortir.
- **Vous voulez consulter un dossier hors des murs du cabinet.** L'accès mobile d'Oremia est explicitement limité au réseau local ; le nôtre est un navigateur, où qu'il soit.
- **Vous voulez lire le code, ou le faire lire.** Il est publié. C'est une réponse différente de "nous chiffrons vos données", et les deux ont leur place.
- **Vous avez une API à brancher.** Laboratoire, comptabilité, site web : l'API est documentée et ouverte.

![Liste de factures affichant les états émise, payée, partiellement payée, en retard et brouillon](/screenshots/invoices.png)

*La facturation dans Dentalpin, avec les états de chaque facture.*

## Comment se passe une migration

Si vous venez d'Oremia, la première étape n'est pas technique : elle consiste à récupérer vos données. Aucune page consultée ne décrit d'export sortant, mais une page d'offre publiée par l'éditeur, valable jusqu'au 31 juillet 2025 et donc expirée, décrivait "la reprise de vos données" à partir de fichiers DSIO. C'est le format d'échange dentaire français, et c'est le premier mot à prononcer au téléphone.

1. **Demandez votre export à l'éditeur** en vous appuyant sur votre droit à la portabilité (RGPD, article 20). Réclamez un format ouvert, DSIO, CSV ou XML, et pas un PDF par patient.
2. **Décidez d'abord qui télétransmet** à partir du jour de la bascule. Cette partie ne se déplace pas avec les données et c'est le point à trancher avant tout le reste.
3. **Tranchez la comptabilité au même moment.** Si votre 2035 sortait d'Oremia, il faut savoir d'où elle sortira l'année suivante, et la réponse est probablement un logiciel de comptabilité séparé.
4. **Vérifiez vos conditions de résiliation.** Une licence permanente et un abonnement ne s'arrêtent pas de la même manière, et aucune page produit ne publie les conditions des deux : la réponse est dans les documents que vous avez signés.
5. **Récupérez aussi vos images.** Les interfaçages nommés pointent vers Universal Link (Digora, Cranex, Scanora), des capteurs TWAIN et Acteon : vos radios vivent peut-être chez ces logiciels plutôt que dans le logiciel de gestion, et cela change la liste de ce qu'il faut sortir.
6. **Demandez si la sauvegarde en ligne vous est restituable.** Oremia Secure Backup est une sauvegarde chiffrée "en dehors de vos postes" : vérifiez sous quelle forme elle vous revient le jour où vous partez.
7. **Installez Dentalpin** avec un `docker compose`, sur votre serveur ou chez un hébergeur. Le parcours complet tient dans [ce guide](/fr/blog/installer-dentalpin-en-trois-minutes/).
8. **Chargez l'export dans le module d'import** (`migration_import`). Il affiche un aperçu avec les compteurs avant d'écrire quoi que ce soit.
9. **Vérifiez la correspondance des actes ligne par ligne.** Ce qui dépasse 0,9 s'accepte en bloc, le reste se tranche à la main. C'est l'étape où les migrations échouent.
10. **Comparez les compteurs** des deux systèmes : patients, factures, rendez-vous à venir, puis gardez l'ancien poste accessible tant que vous n'êtes pas sûr. Le parcours détaillé est dans [ce guide](/fr/blog/migrer-logiciel-dentaire/).

## Sources

Toutes consultées le 25 septembre 2026.

- "Le logiciel dentaire sur Mac. Une app native, exclusivement pour Apple macOS et iOS", "La seule application native macOS agréée SESAM-Vitale pour le dentaire", les applications Oremia Vitale, Oremia Touch iOS, Oremia RDV, Oremia Secure Backup, Oremia MDT, CAD-CAM 3D et Imagerie, la navigation du site sans rubrique tarifs, et le copyright "2012-2026 Zumatec" : [oremia.fr](https://www.oremia.fr/)
- "Licence permanente" (Oremia Desktop) et "Abonnement" (Oremia Touch), "À partir de macOS 10.15", "iMac ou MacBook", "Télétransmission autonome agréée SESAM-Vitale 1.40.14", "Schéma dentaire interactif", "Élaboration de devis personnalisables", "Intégration du devis conventionnel", "Intégration de la CCAM Dentaire", "Ordonnancier paramétrable avec accès à la base VIDAL", "Comptabilité libérale complète jusqu'à l'élaboration de la déclaration 2035", "Module statistique et calcul du taux URSSAF", "Module traçabilité et gestion des stocks", "Interfaçage avec Universal Link (Digora, Cranex, Scanora)", "Interfaçage avec les capteurs disposant d'un driver TWAIN", "Rappel des rendez-vous patients par e-mail" et "par SMS", "Accès multipraticien", "Prise de rendez-vous en ligne" : [oremia.fr/fonctionnalites-et-pre-requis](https://www.oremia.fr/fonctionnalites-et-pre-requis/)
- "Oremia Vitale est le moteur de facturation développé par Zumatec et intégré à Oremia. Il permet la création et la télétransmission de Feuilles de Soins Electroniques", "le seul logiciel dentaire agréé SESAM-Vitale de manière autonome sous macOS", les télé-services ADRi et annuaire AMC, la compatibilité PC/SC et le lien avec le DMP, et l'agrément CNDA de juin 2021 : [oremia.fr/oremia-vitale-2-2](https://www.oremia.fr/oremia-vitale-2-2/)
- Agrément CNDA du 13 mars 2025 pour "Oremia macOS 1.12" en SESAM-Vitale "1.40.14 addendum 8", l'ApCV, le téléservice ALDi, et "Oremia reste à ce jour, le seul logiciel natif macOS agréé SESAM-Vitale pour le dentaire" : [oremia.fr/6314-2](https://www.oremia.fr/6314-2/)
- "L'application Oremia Mobile vous permet d'accéder aux dossiers de vos patients depuis un iPad ou un iPhone", la connexion qui "se fait exclusivement à partir du réseau local", la saisie des actes au fauteuil, la signature de documents et la prise de photo : [oremia.fr/oremia-mobile](https://www.oremia.fr/oremia-mobile/)
- La prise de rendez-vous en ligne "24/7" depuis le site du cabinet, les réseaux sociaux ou Google Maps, les rappels par SMS, et le positionnement explicite "pas un annuaire" : [oremia.fr/oremia-rdv](https://www.oremia.fr/oremia-rdv/)
- "Des sauvegardes journalières en dehors des heures d'activité" et "le cryptage des données garantit que personne ne peut les utiliser en dehors de vos postes", sans pays, centre de données ni certification HDS nommés : [oremia.fr/oremia-secure-backup-sauvegarde-en-ligne](https://www.oremia.fr/oremia-secure-backup-sauvegarde-en-ligne/)
- Zumatec "pleinement engagée dans l'écosystème numérique angevin", activité datée de 2012, Angers French Tech, et l'équipe nommée (Fabrice Duballet, Patricia Nicole, Guillaume Bonnin, Nathan Duault) : [oremia.fr/entreprise](https://www.oremia.fr/entreprise/)
- Zumatec propriétaire, créateur et responsable de la publication, OVH hébergeur du site (2 rue Kellermann, 59100 Roubaix), "le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations personnelles", et l'absence de SIREN, SIRET, RCS et capital social sur la page : [oremia.fr/mentions-legales](https://www.oremia.fr/mentions-legales/)
- "Hotline téléphonique extrêmement compétente, efficace et gentille", "support aussi réactif", "la hotline est présente et efficace", anciennetés de quinze jours à "plusieurs années", et aucun chiffre de base installée : [oremia.fr/nos-clients-parlent-de-nous](https://www.oremia.fr/nos-clients-parlent-de-nous/)
- "Remise sur la base du tarif d'un Mac Mini M4 256Go", "la reprise de vos données" à partir de fichiers DSIO, et "Offre valable jusqu'au 31 juillet 2025" : [oremia.fr/offre-mac-mini](https://www.oremia.fr/offre-mac-mini/)
- "Acteon propose des solutions d'imagerie directement compatible macOS" : [oremia.fr/nos-peripheriques](https://www.oremia.fr/nos-peripheriques/)
- Le registre public des logiciels certifiés, filtrable par système d'exploitation : [cnda.ameli.fr/logiciels-certifies](https://cnda.ameli.fr/logiciels-certifies/)
- Licence, modules et prix de Dentalpin : [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) et [page des tarifs](/fr/tarifs/)

Il manque quelque chose, ou quelque chose a changé chez Oremia et nous est passé sous le nez ? [Écrivez-nous](https://github.com/martinezsalmeron/dentalpin/discussions) : nous corrigeons le texte et nous disons ce que nous avons changé.
