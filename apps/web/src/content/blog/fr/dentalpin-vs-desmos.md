---
title: "Dentalpin face à Desmos : logiciel de centre de santé ou cabinet sur son propre serveur"
description: "Comparatif Desmos et Dentalpin : engagement de 48 mois, Ségur, tiers payant centralisé et auto-hébergement. Sources healthcare.orisha.com, août 2026."
pubDate: 2026-08-13
tags: [comparatif, desmos, logiciel-dentaire]
---

Desmos a été conçu pour les centres de santé dentaires et cela se voit dans chacune de ses pages produit. Dentalpin a été conçu pour un cabinet qui veut garder son serveur, et ces deux phrases suffisent presque à trancher.

Nous éditons Dentalpin, donc nous ne sommes pas neutres. Nous pouvons en revanche être exacts.

> **Tout ce qui est dit ici de Desmos vient de pages publiées par son éditeur**, healthcare.orisha.com, consultées le 13 août 2026, avec les URL en bas de page. Les comparateurs en ligne ont été écartés volontairement : ils se contredisent et aucun d'eux n'est Orisha Healthcare. Il y a plus bas une section entière sur les structures pour lesquelles Desmos est le meilleur choix, parce qu'elles sont nombreuses.

## En trente secondes

**Desmos est un logiciel conventionné, hébergé en France et taillé pour les centres.** Sa page centre dentaire annonce la facturation SESAM-Vitale et la télétransmission FSE / DRE, un tiers payant centralisé, un hébergement sur serveurs certifiés HDS, un référencement Ségur avec son numéro, et "600 centres de santé déjà équipés".

**Dentalpin est open source et vit sur votre serveur.** Le code est publié, l'installation tient dans un `docker compose`, l'auto-hébergement est gratuit et sans engagement. En France, il ne télétransmet pas et ne gère pas le conventionnel, ce qui se lit ici plutôt qu'en note de bas de page.

**La question qui tranche : votre feuille de soins électronique part-elle du logiciel de gestion ?** Si oui, c'est Desmos aujourd'hui et pas nous. Si cette partie est déjà réglée ailleurs, la deuxième question devient celle de savoir qui détient le serveur, et pour combien de temps vous signez.

![Page d'accueil affichant les rendez-vous du jour, les patients présents au cabinet, les paiements en retard et les dossiers récents](/screenshots/home.png)

*La page d'accueil de Dentalpin, avec les données du cabinet de démonstration livré à l'installation.*

## Ce qu'est Desmos

Desmos est édité par Orisha Healthcare. Les mentions légales du site désignent la société ORISHA HEALTH & SAFETY, société par actions simplifiée unipersonnelle au capital de 2 211 155,03 €, inscrite au RCS de Lille Métropole sous le numéro B 982 117 772, dont le siège est à Villeneuve-d'Ascq.

L'éditeur publie deux offres dentaires distinctes, et la nuance compte pour lire la suite. **Desmos pour Dentiste** s'adresse au cabinet libéral, présenté comme un "logiciel dentiste 100% web sur PC Windows/Mac, données sécurisées sur serveurs HDS". **Desmos pour Centre Dentaire** s'adresse aux centres de santé, uniques ou en réseau, et c'est la page la plus détaillée des deux.

Sur cette page centre dentaire, l'éditeur écrit "Depuis plus de 30 ans, Orisha Healthcare accompagne les centres dentaires, unique ou en réseau" et affiche "600 centres de santé déjà équipés". Un paragraphe plus bas de la même page va plus loin : "sur le terrain, Desmos (Orisha Healthcare) s'impose comme la solution la plus déployée en France, avec plus de 700 centres équipés". Sur la page dédiée au cabinet libéral, la formule change de périmètre : "Conçues spécifiquement pour la pratique dentaire, nos solutions sont déjà adoptées par plus de 18 000 professionnels de santé".

Le socle annoncé est celui d'un logiciel de gestion complet :

- **Le conventionnel.** "Facturation SESAM-Vitale et télétransmission FSE / DRE en quelques clics", avec un tiers payant centralisé annoncé à "seulement 1% de rejet en moyenne" et "70% de rapprochements bancaires automatisés".
- **La conformité française.** Le logiciel est déclaré "officiellement référencé Ségur du numérique en santé", avec le numéro unique de référencement 27f99871b4 pour DESMOS (LGC) version 3.3. La page annonce aussi un logiciel d'aide à la prescription certifié par la Haute Autorité de Santé, ainsi que le DMP, MSSanté et l'INSi.
- **Le clinique.** Dossiers patient centralisés, schéma dentaire interactif, gestion des devis et DPEC, traçabilité de la stérilisation.
- **Le réseau.** Multi-centres avec "déploiement d'un nouveau centre en 48h", statistiques personnalisées et indicateurs de performance.

L'hébergement est annoncé "sur des serveurs certifiés HDS (Hébergeur de Données de Santé) situés en France", en mode SaaS assumé : "Il est géré, hébergé et sécurisé par nos soins. Vous ne vous occupez de rien. L'équipe de Orisha Healthcare se charge de l'ensemble de son paramétrage et des sauvegardes."

Deux choses méritent d'être lues de près, parce qu'elles décident souvent plus que la liste des fonctions.

> **Desmos ne publie pas de prix, mais publie sa durée d'engagement.** La page Centre Dentaire affiche "Tarif sur devis" et, juste à côté, "Engagement de 48 mois". Le montant se découvre après un rendez-vous commercial, la durée se sait avant : quatre ans. C'est une information rare dans ce marché et elle est à leur crédit d'être écrite.

Le périmètre inclus n'est pas non plus le périmètre total. La page distingue les services du socle des options, et cette seconde liste comprend "Analyse des panoramiques dentaires grâce à l'IA (connecteur Wediagnostix), Suivi post opératoire (connecteur Asispo), Portail patient, Module de suivi des devis, Formations en ligne illimitées, Service client platinium".

> **Le portail patient et le suivi des devis sont des options chez Desmos.** Ce sont deux des fonctions que les cabinets citent le plus souvent quand ils changent de logiciel, et il vaut mieux le savoir au moment du devis qu'au moment de la facture.

À leur crédit encore, l'éditeur annonce une "API ouverte" pour l'"interconnexion de vos outils et logiciels avec Desmos", et répond ceci sur la comptabilité : "Quels sont les logiciels de comptabilité fonctionnant avec Desmos ? Tous. Un outil permet de créer vos propres formats d'export. Que vous soyez sous Sage, Cegid ou toute autre solution, nous sommes compatibles." Un outil d'export configurable est exactement ce qu'il faut demander à un éditeur, et tous ne l'offrent pas.

## Ce qu'est Dentalpin

Dentalpin est publié sous Business Source License 1.1 : lisible, forkable, gratuit en auto-hébergement, et quatre ans après chaque version le code bascule automatiquement en Apache 2.0. L'installation se fait avec un `docker compose` sur votre serveur, chez l'hébergeur de votre choix ou sur une machine du cabinet, et l'application s'utilise dans un navigateur comme Desmos.

Le socle comprend agenda, patients, odontogramme, dossier clinique, devis, facturation, radios et imagerie. S'y ajoutent les rappels automatiques, l'espace patient, le multi-cabinet, WhatsApp comme canal de notification, et un agent IA désactivé par défaut qui s'arrête pour demander confirmation avant chaque écriture.

![Un devis affichant les traitements, le total, les dates de validité et le plan de traitement associé](/screenshots/budgets.png)

*Un devis dans Dentalpin : lignes de traitement, période de validité et lien vers le plan de traitement. L'interface du cabinet de démonstration est en espagnol, comme le reste de l'application aujourd'hui.*

Ce qui n'existe pas côté français, et qui pèse ici plus que partout ailleurs :

- **Aucune télétransmission de feuilles de soins électroniques.** Pas de SESAM-Vitale, pas de FSE, pas de DRE.
- **Aucun référencement Ségur, aucun service socle.** Ni DMP, ni MSSanté, ni INSi.
- **Aucune gestion du tiers payant ni de la CCAM.** Le seul module fiscal livré est Verifactu, et il est espagnol.
- **Aucun module de traçabilité de la stérilisation.**
- **Pas d'interface en français aujourd'hui.** L'application existe en anglais et en espagnol, la traduction est ouverte comme contribution de la communauté ([issue sur le dépôt](https://github.com/martinezsalmeron/dentalpin/labels/i18n)) et elle n'est pas livrée.

En nous appliquant la règle que nous appliquons à Desmos, voici notre tarif et notre engagement tels qu'ils sont publiés : l'auto-hébergement est gratuit, le produit y est entier, sans abonnement par fauteuil ni par praticien, et sans durée minimale. L'offre gérée est sur devis, le serveur se souscrit à votre nom chez Hetzner pour environ 16 € par mois, et le détail tient sur la [page des tarifs](/fr/tarifs/). La même page annonce le seul engagement que nous demandions, douze mois, et seulement si vous choisissez la migration offerte depuis Gesden plutôt que la migration au forfait.

## Face à face

| | Desmos | Dentalpin |
|---|---|---|
| Modèle | Licence commerciale, SaaS | Open source (BSL 1.1) |
| Déploiement | "100% cloud", rien à installer | Votre serveur, `docker compose` |
| Tarif publié | ✗ "Tarif sur devis" | ✓ 0 € en auto-hébergement |
| Durée d'engagement | ✗ "Engagement de 48 mois" (page Centre Dentaire) | ✓ Aucune, sauf douze mois si la migration offerte est choisie |
| Référencement Ségur | ✓ Numéro 27f99871b4, DESMOS (LGC) v3.3 | ✗ Aucun |
| Télétransmission SESAM-Vitale | ✓ FSE / DRE annoncées | ✗ Absente |
| Tiers payant | ✓ Centralisé, "1% de rejet en moyenne" | ✗ Absent |
| DMP, MSSanté, INSi | ✓ Annoncés intégrés | ✗ Absents |
| Traçabilité de la stérilisation | ✓ Annoncée dans le socle | ✗ Absente |
| Hébergement | ✓ Serveurs certifiés HDS en France | ~ Le vôtre, là où vous l'installez |
| Sauvegardes et mises à jour | ✓ "Vous ne vous occupez de rien" | ✗ À votre charge |
| Réseau de centres | ✓ Multi-centres, nouveau centre "en 48h" | ~ Multi-cabinet, sans expérience des réseaux |
| Portail patient | ~ En option | ✓ Inclus |
| Suivi des devis | ~ Module en option | ✓ Inclus |
| Export comptable | ✓ Formats d'export configurables | ✓ Export complet et API |
| API | ~ "API ouverte" annoncée, sans documentation publique | ✓ REST, documentée en OpenAPI |
| Code source | ✗ Non publié | ✓ Sur GitHub, en entier |
| Interface en français | ✓ Oui | ✗ Non, anglais et espagnol aujourd'hui |
| Ancienneté | ✓ "plus de 30 ans" auprès des centres dentaires | ✗ Depuis 2026 |
| Base installée | ✓ "600 centres de santé déjà équipés" | ✗ Depuis 2026 |
| Où sont les données | ~ Chez l'éditeur, en France | ✓ Sur votre serveur, toujours |

## Choisissez Desmos si

- **Vous télétransmettez depuis le logiciel de gestion.** C'est la raison numéro un et elle suffit à elle seule. Nous ne couvrons pas cette partie et nous n'annonçons pas de date.
- **Vous gérez un centre de santé, ou plusieurs.** Le produit est né avec cette clientèle, les témoignages publiés sur leur page sont ceux de groupes et de réseaux, et le déploiement d'un centre supplémentaire est annoncé en 48 heures. Notre multi-cabinet existe, notre expérience des réseaux non.
- **Le tiers payant occupe vos journées.** Une chaîne complète du flux au rapprochement bancaire, avec un taux de rejet annoncé, est un argument que nous ne pouvons opposer à rien.
- **Le référencement Ségur conditionne vos financements.** Il est publié avec son numéro, vérifiable sur le portail des solutions référencées. Nous n'avons rien d'équivalent.
- **Vous ne voulez pas de serveur, ni de près ni de loin.** "Vous ne vous occupez de rien" décrit honnêtement ce que vous achetez, sauvegardes comprises, sur des serveurs certifiés HDS en France.
- **Il vous faut une interface en français dès demain matin.** La nôtre ne l'est pas encore.

Pour un centre de santé dentaire français, cette liste l'emporte sur la suivante, et nous préférons l'écrire que de la laisser deviner.

## Choisissez Dentalpin si

- **Le conventionnel passe déjà ailleurs.** Cabinet non conventionné, activité majoritairement hors nomenclature, ou télétransmission gérée par un autre outil : le principal argument de Desmos ne vous concerne alors plus.
- **Signer pour quatre ans vous pose problème.** Leur page annonce un engagement de 48 mois. Chez nous il n'y a pas de durée minimale, et en auto-hébergement il n'y a pas de contrat du tout. Le seul engagement que nous publions est facultatif et dure douze mois : c'est la contrepartie de la migration offerte depuis Gesden, et vous pouvez tout aussi bien payer la migration et ne rien signer.
- **Vous voulez connaître le prix avant d'appeler quelqu'un.** Notre page tarifs est publique et courte, la leur renvoie à un devis.
- **Vous voulez que les données restent sur une machine que vous contrôlez.** Chez eux elles sont en France et bien gardées, mais chez eux. Chez nous elles sont là où vous avez installé le logiciel, et l'export complet est une fonction, pas une négociation.
- **Vous voulez lire le code, ou brancher autre chose dessus.** Le dépôt est public et l'API REST est documentée en OpenAPI, donc un laboratoire, un outil de comptabilité ou un script maison s'y connectent sans demander l'autorisation.
- **Vous avez déjà quelqu'un pour le serveur.** C'est la contrepartie exacte de la ligne précédente, et elle ne se contourne pas.

![Rapports d'agenda : nombre de rendez-vous, taux de réalisation, taux de rendez-vous non honorés, premières visites, heures travaillées et occupation des fauteuils](/screenshots/reports.png)

*Les rapports d'agenda de Dentalpin, avec l'occupation par fauteuil et par praticien sur la période choisie.*

## Comment se passe une migration

Si vous venez de Desmos, la première étape n'est pas technique : elle consiste à récupérer vos données. L'éditeur annonce un outil de création de formats d'export pour la comptabilité, ce qui est un bon point de départ pour la discussion, mais ce n'est pas la même chose qu'un export clinique complet.

1. **Demandez votre export à l'éditeur** en vous appuyant sur votre droit à la portabilité (RGPD, article 20). Réclamez un format ouvert, CSV ou XML, et pas un PDF par patient.
2. **Décidez d'abord qui télétransmet** à partir du jour de la bascule. Cette partie ne se déplace pas avec les données et c'est le point à trancher avant tout le reste.
3. **Vérifiez où vous en êtes de vos 48 mois** si vous êtes sous contrat centre dentaire. La date de fin d'engagement décide du calendrier bien plus que la technique.
4. **Installez Dentalpin** avec un `docker compose`, sur votre serveur ou chez un hébergeur. Le parcours complet tient dans [ce guide](/fr/blog/installer-dentalpin-en-trois-minutes/).
5. **Chargez l'export dans le module d'import** (`migration_import`). Il affiche un aperçu avec les compteurs avant d'écrire quoi que ce soit.
6. **Vérifiez la correspondance des actes ligne par ligne.** Ce qui dépasse 0,9 s'accepte en bloc, le reste se tranche à la main. C'est l'étape où les migrations échouent.
7. **Comparez les compteurs** des deux systèmes : patients, factures, rendez-vous à venir.
8. **Gardez l'ancien système accessible** tant que vous n'êtes pas sûr. Le parcours détaillé est dans [ce guide](/fr/blog/migrer-logiciel-dentaire/).

## Sources

Toutes consultées le 13 août 2026.

- "Tarif sur devis", "Engagement de 48 mois", "600 centres de santé déjà équipés", "plus de 700 centres équipés", "le logiciel de centre dentaire le plus utilisé en France", "Depuis plus de 30 ans", socle et options, hébergement HDS, référencement Ségur 27f99871b4, DMP, MSSanté, INSi, LAP certifié HAS, tiers payant à "1% de rejet en moyenne", "70% de rapprochements bancaires automatisés", déploiement "en 48h", "API ouverte", export comptable et mode SaaS : [healthcare.orisha.com, Desmos pour Centre Dentaire](https://healthcare.orisha.com/logiciel-centre-sante/desmos-centres-sante-dentaire/)
- "Logiciel dentiste 100% web sur PC Windows/Mac, données sécurisées sur serveurs HDS", "30 ans d'expertise au service des chirurgiens-dentistes", "plus de 18 000 professionnels de santé", agenda, dossiers patients, facturation SESAM-Vitale et tiers payant pour le cabinet libéral : [healthcare.orisha.com, logiciel dentiste](https://healthcare.orisha.com/professionnel-sante/dentiste/)
- Éditeur ORISHA HEALTH & SAFETY, SASU au capital de 2 211 155,03 €, RCS Lille Métropole B 982 117 772, siège à Villeneuve-d'Ascq : [healthcare.orisha.com/mentions-legales](https://healthcare.orisha.com/mentions-legales/)
- Licence, modules et prix de Dentalpin : [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) et [page des tarifs](/fr/tarifs/)

Il manque quelque chose, ou quelque chose a changé chez Desmos et nous est passé sous le nez ? [Écrivez-nous](https://github.com/martinezsalmeron/dentalpin/discussions) : nous corrigeons le texte et nous disons ce que nous avons changé.
