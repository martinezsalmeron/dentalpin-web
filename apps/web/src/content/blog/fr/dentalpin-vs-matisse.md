---
title: "Dentalpin face à Matisse : cloud hybride français ou votre propre serveur"
description: "Comparatif Matisse et Dentalpin : cloud hybride, SESAM-Vitale, Ordonnance Numérique, HDS et auto-hébergement. Sources matisse-dentaire.com, septembre 2026."
pubDate: 2026-09-04
tags: [comparatif, matisse, logiciel-dentaire]
---

Matisse est un logiciel dentaire français qui télétransmet, se revendique agréé Ordonnance Numérique et n'affiche aucun tarif sur son site. C'est cette dernière ligne qui décide de la moitié des comparaisons de ce marché, et elle mérite d'être posée en premier.

Nous éditons Dentalpin, donc nous ne sommes pas neutres. Nous pouvons en revanche être exacts.

> **Tout ce qui est dit ici de Matisse vient de pages publiées par son éditeur**, matisse-dentaire.com, consultées le 4 septembre 2026, avec les URL en bas de page. Les comparateurs en ligne ont été écartés volontairement : ils se contredisent et aucun d'eux n'est Substances Actives. Il y a plus bas une section entière sur les cabinets pour lesquels Matisse est le meilleur choix, et elle est longue.

## En trente secondes

**Matisse est un logiciel de gestion français conventionné, en ligne, avec un socle réglementaire complet.** Sa FAQ décrit une application "100 % web" avec "une architecture cloud hybride, serveur local au cabinet associé au cloud", la "télétransmission SESAM-Vitale native (FSE/DRE, NOEMIE, ADRI, INS, tiers payant)", un odontogramme "denture permanente, lactée et mixte" et un "bilan parodontal complet". Sa page d'histoire date une "Certification LAP & Ordonnance Numérique" à 2025.

**Dentalpin est open source et vit sur votre serveur.** Le code est publié, l'installation tient dans un `docker compose`, l'auto-hébergement est gratuit et sans durée minimale. En France, il ne télétransmet pas et son interface n'existe pas encore en français, ce qui se lit ici plutôt qu'en note de bas de page.

**La question qui tranche : télétransmettez-vous depuis votre logiciel de gestion ?** Si la feuille de soins électronique part de là, c'est Matisse aujourd'hui et pas nous. Si cette partie est déjà réglée ailleurs, la deuxième question devient celle du prix, et elle demande un appel chez eux alors qu'elle est écrite chez nous.

![Page d'accueil affichant les rendez-vous du jour, les patients présents au cabinet, les paiements en retard et les dossiers récents](/screenshots/home.png)

*La page d'accueil de Dentalpin, avec les données du cabinet de démonstration livré à l'installation.*

## Ce qu'est Matisse

Matisse est édité par Substances Actives SAS. Les mentions légales du site donnent une SAS au capital de 37 943,20 €, SIREN 519 349 732, RCS Paris, code APE 6201Z, siège au 36 rue des Petits Champs, 75002 Paris, avec M. Mathieu Rouppert comme directeur de la publication.

La page *Notre histoire* raconte un produit plus ancien que son éditeur actuel, et le raconte précisément. Le logiciel naît en 2003 sous le nom Dentavie, "web-first, déjà multi-plateforme Mac & PC", devient Matisse en 2010, obtient des "Agréments SESAM-Vitale Windows & Mac OS X" en 2011, se synchronise avec MonDocteur en 2016 puis Doctolib en 2018. La bascule est datée de 2020 : "Reprise par Substances Actives", suivie de "Trois ans de travail au scalpel sur le cœur applicatif, l'UX, la sécurité (RGPD), et une nouvelle base Cloud Hybride". La même frise date une "Nouvelle version Cloud Hybride" de 2023 et une "Certification LAP & Ordonnance Numérique" de 2025.

Le socle publié est celui d'un logiciel de gestion français complet :

- **Le conventionnel.** La FAQ annonce la "télétransmission SESAM-Vitale native (FSE/DRE, NOEMIE, ADRI, INS, tiers payant)", "sans module externe".
- **La prescription.** Les données structurées de la page d'accueil listent "Certification LAP avec Vidal et Ordoclic" et "Agréé Ordonnance Numérique (1 des 2 seuls logiciels dentaires en France)". La deuxième affirmation porte sur le marché entier et nous la citons sans la reprendre à notre compte.
- **Le clinique.** "Un odontogramme complet, denture permanente, lactée et mixte, et un bilan parodontal détaillé : poches, saignement au sondage (BOP), plaque, mobilité, furcation." C'est le niveau de détail parodontal le plus explicite que nous ayons lu sur un site d'éditeur français.
- **L'administratif.** Devis et consentements avec "signature électronique certifiée eIDAS", facturation, gestion des stocks avec "déstockage automatique des consommables à l'acte", tableau de bord.
- **L'IA.** Elle s'appelle Henri et couvre "la dictée", "les comptes-rendus", "les courriers" et "l'agenda prédictif".
- **L'imagerie.** Neuf solutions sont nommées comme compatibles : "Carestream, Planmeca/Romexis, Sidexis, Vatech, Sopro, MyRay, Dürr Dental, DTX Studio et Visiodent".

L'architecture est leur argument central et elle est décrite sans ambiguïté : "un serveur local installé au cabinet fonctionne de pair avec le cloud, ce qui garantit la continuité de service même en cas de coupure internet". La page *Cloud hybride* ajoute une "disponibilité de 99.9%", un "chiffrement AES-256" en transit et au repos, "3 sites de sauvegarde géographiquement répartis", un "historique de 90 jours de sauvegardes incrémentales" et un "monitoring 24/7".

> **Matisse ne publie aucun tarif dans le texte de son site.** Aucune page consultée le 4 septembre 2026 n'affiche de prix, et les boutons "Essayer gratuitement" et "Démarrer gratuitement" mènent tous au même formulaire de réservation d'une démonstration de quinze minutes, pas à un essai en libre-service. Le seul chiffre publié se trouve dans les données structurées schema.org de la page d'accueil, qui déclarent une offre à `"price": "75.00"` en euros, sans périodicité, sans unité et sans indication de ce qu'elle contient. Nous le citons parce qu'ils le publient, pas parce qu'il permet de calculer quoi que ce soit.

Deux points de lecture, non pas parce qu'ils seraient cachés, mais parce qu'ils reviendront dans votre démonstration.

Le premier est l'hébergement. Les données patients sont annoncées "hébergées en France, dans un environnement certifié HDS (Hébergeur de Données de Santé) et ISO 27001", mais aucune des pages consultées ne nomme l'hébergeur de santé ni un numéro de certificat. Les mentions légales désignent OVH SAS, et c'est l'hébergeur du site vitrine : nous ne l'utilisons pas comme une affirmation sur les données de santé.

Le second est la fréquence des sauvegardes, annoncée à trois endroits et de trois manières. La FAQ écrit que les données sont "sauvegardées automatiquement chaque nuit", la page *Cloud hybride* annonce d'abord "des sauvegardes automatiques quotidiennes" puis, deux paragraphes plus bas, "des sauvegardes automatiques toutes les 4 heures". Les données structurées reprennent la troisième version. C'est une question à poser en démonstration, avec le RPO réel comme réponse attendue.

Enfin, trois chiffres de résultat que l'éditeur publie en les rattachant explicitement à sa base installée : "+20 % de taux d'acceptation des devis, −33 % de rendez-vous non honorés grâce aux rappels SMS avec confirmation ou annulation par SMS, et plus de 3 heures gagnées par semaine". Ils sont présentés comme "constaté en moyenne chez les cabinets équipés Matisse", sans méthode ni échantillon publiés, et c'est ainsi que nous les rapportons.

## Ce qu'est Dentalpin

Dentalpin est publié sous Business Source License 1.1 : lisible, forkable, gratuit en auto-hébergement, et quatre ans après chaque version le code bascule automatiquement en Apache 2.0. L'installation se fait avec un `docker compose` sur votre serveur, chez l'hébergeur de votre choix ou sur une machine du cabinet, et l'application s'utilise dans un navigateur, comme Matisse.

Le socle comprend agenda, patients, odontogramme, parodontogramme, dossier clinique, devis, facturation, radios et imagerie. S'y ajoutent les rappels automatiques, l'espace patient, le multi-cabinet, WhatsApp comme canal de notification, et un agent IA désactivé par défaut qui s'arrête pour demander confirmation avant chaque écriture.

![Bilan parodontal affichant les six sites de sondage par dent](/screenshots/periodontogram.png)

*Le parodontogramme de Dentalpin, avec les six sites par dent. L'interface du cabinet de démonstration est en espagnol, comme le reste de l'application aujourd'hui.*

Ce qui n'existe pas côté français, et qui pèse ici autant que partout ailleurs :

- **Aucune télétransmission de feuilles de soins électroniques.** Pas de SESAM-Vitale, pas de FSE, pas de DRE, ni ADRI ni INS.
- **Aucune certification LAP, aucun agrément Ordonnance Numérique.** La prescription électronique réglementée n'est pas couverte.
- **Aucun référencement Ségur, aucun service socle.** Ni DMP, ni MSSanté, ni INSi.
- **Aucune gestion du tiers payant ni de la CCAM.** Le seul module fiscal livré est Verifactu, et il est espagnol.
- **Aucune signature électronique certifiée eIDAS.** Les devis se signent, sans le niveau de certification qu'ils annoncent.
- **Pas d'interface en français aujourd'hui.** L'application existe en anglais et en espagnol, la traduction est ouverte comme contribution de la communauté ([issue sur le dépôt](https://github.com/martinezsalmeron/dentalpin/labels/i18n)) et elle n'est pas livrée.

En nous appliquant la règle que nous appliquons à Matisse, voici notre tarif tel qu'il est publié : l'auto-hébergement est gratuit, le produit y est entier, sans abonnement par fauteuil ni par praticien, et sans durée minimale. L'offre gérée est sur devis, le serveur se souscrit à votre nom chez Hetzner pour environ 16 € par mois, et le détail tient sur la [page des tarifs](/fr/tarifs/). La même page annonce le seul engagement que nous demandions, douze mois, et seulement si vous choisissez la migration offerte depuis Gesden plutôt que la migration au forfait.

## Face à face

| | Matisse | Dentalpin |
|---|---|---|
| Modèle | Licence commerciale, SaaS | Open source (BSL 1.1) |
| Déploiement | "100 % web" avec serveur local au cabinet | Votre serveur, `docker compose` |
| Tarif publié | ✗ Aucun prix dans le texte du site, 75,00 € déclarés dans les données structurées sans périodicité | ✓ 0 € en auto-hébergement |
| Essai | ~ "Essayer gratuitement" mène à une démonstration de 15 minutes | ✓ Installation libre, sans contact commercial |
| Télétransmission SESAM-Vitale | ✓ "Native", FSE, DRE, NOEMIE, ADRI, INS | ✗ Absente |
| Tiers payant | ✓ Annoncé dans le socle | ✗ Absent |
| Ordonnance Numérique et LAP | ✓ Annoncés certifiés avec Vidal et Ordoclic | ✗ Absents |
| Référencement Ségur | ~ Non mentionné sur les pages consultées | ✗ Aucun |
| Signature électronique | ✓ Certifiée eIDAS, devis et consentements | ~ Signature des devis, sans certification eIDAS |
| Odontogramme | ✓ Denture permanente, lactée et mixte | ✓ Dans le socle |
| Bilan parodontal | ✓ Poches, BOP, plaque, mobilité, furcation | ✓ Parodontogramme, six sites par dent |
| Passerelles d'imagerie | ✓ Neuf solutions nommées | ~ Stockage et affichage, sans liste équivalente |
| Continuité sans internet | ✓ Serveur local associé au cloud | ✓ Le serveur est chez vous |
| Hébergement | ~ HDS et ISO 27001 annoncés, hébergeur non nommé | ~ Le vôtre, là où vous l'installez |
| Sauvegardes | ~ Comprises, mais annoncées "chaque nuit", "quotidiennes" et "toutes les 4 heures" selon la page | ✗ À votre charge |
| Support téléphonique | ✓ "Temps de réponse inférieur à une minute", équipe française interne | ✗ GitHub, sans engagement de délai |
| API | ~ "API ouverte" annoncée, sans documentation publique | ✓ REST, documentée en OpenAPI |
| Code source | ✗ Non publié | ✓ Sur GitHub, en entier |
| Interface en français | ✓ Oui | ✗ Non, anglais et espagnol aujourd'hui |
| Ancienneté du produit | ✓ Depuis 2003, sous le nom Dentavie | ✗ Depuis 2026 |
| Base installée | ~ Aucun chiffre publié, cabinets clients nommés | ✗ Depuis 2026 |
| Où sont les données | ~ Chez l'éditeur, avec une copie locale au cabinet | ✓ Sur votre serveur, toujours |

## Choisissez Matisse si

- **Vous télétransmettez depuis le logiciel de gestion.** C'est la raison numéro un et elle suffit à elle seule. Leur FAQ annonce FSE, DRE, NOEMIE, ADRI, INS et tiers payant en natif, et nous ne couvrons pas cette partie ni n'annonçons de date.
- **Vous prescrivez et l'Ordonnance Numérique arrive dans votre quotidien.** Ils annoncent une certification LAP avec Vidal et Ordoclic et un agrément Ordonnance Numérique daté de 2025. Nous n'avons rien à opposer à cela, et ce n'est pas un chantier de quelques semaines.
- **La parodontologie est au centre de votre exercice.** Poches, saignement au sondage, plaque, mobilité et furcation nommés un par un sur leur site, c'est un cahier des charges parodontal assumé, pas une case cochée.
- **Vous voulez que la panne internet ne vous arrête pas, sans gérer de serveur.** Leur cloud hybride donne cette continuité en laissant l'exploitation chez eux. C'est exactement le compromis que nous ne proposons pas : chez nous, la résilience locale vient avec la responsabilité locale.
- **Vous voulez un numéro de téléphone et quelqu'un qui décroche.** Une équipe française interne, joignable du lundi au vendredi de 9h00 à 18h00, avec un temps de réponse annoncé sous la minute, c'est une infrastructure de service que nous n'avons pas.
- **La migration doit être prise en charge.** Ils annoncent la reprise des données par leur propre équipe, évaluée avant engagement. Chez nous, c'est un module et un guide, pas un prestataire.
- **Il vous faut une interface en français dès demain matin.** La nôtre ne l'est pas encore.

Pour un cabinet libéral français conventionné, cette liste l'emporte sur la suivante, et nous préférons l'écrire que de la laisser deviner.

## Choisissez Dentalpin si

- **Le conventionnel passe déjà ailleurs.** Cabinet non conventionné, activité majoritairement hors nomenclature, ou télétransmission gérée par un autre outil : le principal argument de Matisse ne vous concerne alors plus.
- **Vous voulez connaître le prix avant de parler à quelqu'un.** Le leur n'est écrit nulle part sur leur site et la seule figure publiée, 75,00 €, ne dit ni par mois ni par qui ni pour quel périmètre. Le nôtre est sur une page, avec le détail des coûts.
- **Vous voulez que les données restent sur une machine que vous contrôlez.** Leur architecture garde une copie au cabinet, ce qui est déjà mieux que la moyenne du marché, mais l'exploitation et l'hébergement de santé restent chez l'éditeur. Chez nous, le serveur est le vôtre et l'export complet est une fonction, pas une négociation.
- **Vous voulez lire le code, ou brancher autre chose dessus.** Le dépôt est public et l'API REST est documentée en OpenAPI. Ils annoncent une "API ouverte" sans en publier la documentation, donc la comparaison se fait entre ce qui est lisible et ce qui est promis.
- **Vous voulez savoir combien de cabinets utilisent le logiciel.** Aucun chiffre de base installée n'apparaît sur les pages que nous avons consultées chez eux ; des cabinets clients sont nommés et datés, ce qui est honnête mais ne remplace pas un ordre de grandeur. Nous n'en avons pas non plus, et pour une raison plus simple : nous publions depuis 2026.
- **Vous avez déjà quelqu'un pour le serveur.** C'est la contrepartie exacte de tout ce qui précède, et elle ne se contourne pas.

![Tableau de bord affichant les indicateurs de suivi de l'activité du cabinet](/screenshots/reports.png)

*Les rapports de Dentalpin, sur les données du cabinet de démonstration.*

## Comment se passe une migration

Si vous venez de Matisse, la première étape n'est pas technique : elle consiste à récupérer vos données. Leur FAQ décrit la reprise des données entrante prise en charge par l'équipe de Substances Actives ; l'export sortant n'est décrit sur aucune page publique.

1. **Demandez votre export à l'éditeur** en vous appuyant sur votre droit à la portabilité (RGPD, article 20), que leur politique RGPD liste explicitement. Réclamez un format ouvert, CSV ou XML, et pas un PDF par patient.
2. **Décidez d'abord qui télétransmet** à partir du jour de la bascule. Cette partie ne se déplace pas avec les données et c'est le point à trancher avant tout le reste. La prescription électronique se tranche au même moment.
3. **Demandez ce que contient exactement l'export du bilan parodontal.** Poches, BOP, plaque, mobilité et furcation forment un historique qui a de la valeur uniquement s'il sort structuré, sondage par sondage.
4. **Vérifiez vos conditions de résiliation et de préavis** dans votre contrat. Aucune page produit ne les publie, donc la réponse est dans les documents que vous avez signés.
5. **Récupérez aussi vos images.** Les compatibilités d'imagerie pointent vers des logiciels tiers : vos radios vivent peut-être chez Romexis, Sidexis ou Vatech plutôt que dans le logiciel de gestion, et cela change la liste de ce qu'il faut sortir.
6. **Installez Dentalpin** avec un `docker compose`, sur votre serveur ou chez un hébergeur. Le parcours complet tient dans [ce guide](/fr/blog/installer-dentalpin-en-trois-minutes/).
7. **Chargez l'export dans le module d'import** (`migration_import`). Il affiche un aperçu avec les compteurs avant d'écrire quoi que ce soit.
8. **Vérifiez la correspondance des actes ligne par ligne.** Ce qui dépasse 0,9 s'accepte en bloc, le reste se tranche à la main. C'est l'étape où les migrations échouent.
9. **Comparez les compteurs** des deux systèmes : patients, factures, rendez-vous à venir.
10. **Gardez l'ancien système accessible** tant que vous n'êtes pas sûr. Le parcours détaillé est dans [ce guide](/fr/blog/migrer-logiciel-dentaire/).

## Sources

Toutes consultées le 4 septembre 2026.

- "Logiciel pour cabinet dentaire avec IA intégrée", "Cloud hybride", "+20 ans d'expérience, depuis 2003", "<1min Temps de réponse", "+3h Gain de temps par semaine", "Certifié HDS", "RGPD 100%", "ISO 27001", "Ordonnance Numérique", "Intégration native avec Doctolib, Vidal, Ordoclic, radiologie et imagerie. API ouverte", "Hébergement France", "Données chiffrées sur serveurs certifiés HDS", horaires "Du lundi au vendredi de 9h00 à 18h00", et les données structurées schema.org de la page ("price": "75.00", "priceCurrency": "EUR", "Tableau de bord analytique avec 40+ indicateurs", "Assistant IA Henri 24h/24", "Sauvegarde automatique toutes les 4 heures", "Certification LAP avec Vidal et Ordoclic", "Agréé Ordonnance Numérique (1 des 2 seuls logiciels dentaires en France)", "operatingSystem": "Web, iOS, Android") : [matisse-dentaire.com](https://www.matisse-dentaire.com/)
- "Matisse est un logiciel de gestion de cabinet dentaire 100 % web", "une architecture cloud hybride, serveur local au cabinet associé au cloud", "odontogramme (denture permanente, lactée et mixte), bilan parodontal complet", "poches, saignement au sondage (BOP), plaque, mobilité, furcation", "télétransmission SESAM-Vitale native (FSE/DRE, NOEMIE, ADRI, INS, tiers payant)", l'IA "Henri", "édité par Substances Actives, société fondée en 2010 qui a repris le logiciel en 2020", les neuf solutions d'imagerie nommées, "sauvegardées automatiquement chaque nuit", "+20 % de taux d'acceptation des devis", "−33 % de rendez-vous non honorés", le Cabinet Fondary "client depuis 2006", Arenas Dentistes à Nice (2015), Gambetta à Avon (2018), et la prise en charge de la migration : [matisse-dentaire.com/logiciel-dentaire/faq](https://www.matisse-dentaire.com/logiciel-dentaire/faq/)
- "Première version Dentavie", "web-first, déjà multi-plateforme Mac & PC", "Dentavie devient Matisse" (2010), "Agréments SESAM-Vitale Windows & Mac OS X" (2011), MonDocteur (2016), Doctolib (2018), "Reprise par Substances Actives" (2020), "Trois ans de travail au scalpel sur le cœur applicatif, l'UX, la sécurité (RGPD), et une nouvelle base Cloud Hybride", "Nouvelle version Cloud Hybride" (2023), "Certification LAP & Ordonnance Numérique" (2025), "l'éditeur français indépendant", et l'équipe nommée : [matisse-dentaire.com/logiciel-dentaire/notre-histoire](https://www.matisse-dentaire.com/logiciel-dentaire/notre-histoire/)
- "99.9% Uptime garanti", "chiffrement AES-256", "sauvegardes automatiques quotidiennes", "sauvegardes automatiques toutes les 4 heures, stockées sur 3 sites géographiques distincts", "historique de 90 jours de sauvegardes incrémentales", "monitoring 24/7", "Mode hors-ligne disponible pour les urgences" : [matisse-dentaire.com/logiciel-dentaire/fonctionnalites/cloud-hybride](https://www.matisse-dentaire.com/logiciel-dentaire/fonctionnalites/cloud-hybride/)
- Substances Actives SAS, capital 37 943,20 €, SIREN 519 349 732, RCS Paris, code APE 6201Z, siège au 36 rue des Petits Champs 75002 Paris, directeur de la publication M. Mathieu Rouppert, hébergeur du site OVH SAS : [matisse-dentaire.com/logiciel-dentaire/mentions-legales](https://www.matisse-dentaire.com/logiciel-dentaire/mentions-legales/)
- Droit à la portabilité, responsable du traitement, "Vos données sont hébergées en France et en Union Européenne", conservation "Durée du contrat + 3 ans", mise à jour du 23 décembre 2025 : [matisse-dentaire.com/logiciel-dentaire/rgpd](https://www.matisse-dentaire.com/logiciel-dentaire/rgpd/)
- Licence, modules et prix de Dentalpin : [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) et [page des tarifs](/fr/tarifs/)

Il manque quelque chose, ou quelque chose a changé chez Matisse et nous est passé sous le nez ? [Écrivez-nous](https://github.com/martinezsalmeron/dentalpin/discussions) : nous corrigeons le texte et nous disons ce que nous avons changé.
