---
title: "Dentalpin face à Veasy : deux logiciels web, deux endroits où vivent vos données"
description: "Comparatif Veasy et Dentalpin : cloud imposé ou votre serveur, télétransmission, tarifs publiés et propriété du code. Sources veasy-solution.com, août 2026."
pubDate: 2026-08-12
tags: [comparatif, veasy, logiciel-dentaire]
---

Veasy et Dentalpin s'utilisent tous les deux dans un navigateur, et c'est à peu près là que la ressemblance s'arrête. L'un tourne sur les serveurs de son éditeur, l'autre sur le vôtre, et cette phrase décide de presque tout le reste.

Nous éditons Dentalpin, donc nous ne sommes pas neutres. Nous pouvons en revanche être exacts.

> **Tout ce qui est dit ici de Veasy vient de pages publiées par son éditeur**, veasy-solution.com, visiodent.com et cegedim-sante.com, consultées le 12 août 2026, avec les URL en bas de page. Les comparateurs en ligne ont été écartés volontairement : ils se contredisent et aucun d'eux n'est Visiodent. Il y a plus bas une section entière sur les cabinets pour lesquels Veasy est le meilleur choix, parce qu'ils existent.

## En trente secondes

**Veasy est un logiciel conventionné, hébergé et tenu pour vous.** Sa page produit liste la télétransmission, le tiers payant, le rapprochement bancaire, la traçabilité, l'orthodontie et les stocks, les données sont annoncées "hébergées dans un data center agrée par le ministère de la santé", et l'éditeur revendique "plus de 7000 utilisateurs". Depuis février 2024 il appartient au groupe Cegedim.

**Dentalpin est open source et vit sur votre serveur.** Le code est publié, l'installation tient dans un `docker compose`, l'auto-hébergement est gratuit, et tout ce que fait l'interface passe par la même API documentée. En France, il ne télétransmet pas et ne gère pas le conventionnel, ce qui se lit maintenant plutôt qu'en note de bas de page.

**La question qui tranche : votre feuille de soins électronique part-elle du logiciel de gestion ?** Si oui, c'est Veasy aujourd'hui et pas nous. Si cette partie est déjà réglée ailleurs, la deuxième question devient celle de savoir qui détient le serveur.

![Page d'accueil affichant les rendez-vous du jour, les patients présents au cabinet, les paiements en retard et les dossiers récents](/screenshots/home.png)

*La page d'accueil de Dentalpin, avec les données du cabinet de démonstration livré à l'installation.*

## Ce qu'est Veasy

Veasy est édité par Visiodent S.A., dont les mentions légales donnent une adresse au 82 rue Villeneuve à Clichy et désignent Morgan Ohnona comme directeur de publication. Le groupe se présente comme créé en 1983 par les docteurs Michel Ohnona et Jacques Sebag, coté à la Bourse de Paris depuis 1999, et il situe le lancement de Veasy en 2018.

Le produit est présenté sans ambiguïté comme un "système 100% Cloud", accessible depuis un "ordinateur Mac ou PC, tablette, smartphone". Il n'y a pas de version installée sur un poste du cabinet, et ce n'est pas une omission : c'est le parti pris du produit, assumé sur toutes les pages.

L'éditeur le présente comme "le logiciel n°1 des cabinets dentaires et centres de santé 100% cloud" et annonce que "déjà plus de 7000 utilisateurs font confiance à Veasy". Les pages produit affichent les logos de l'Assurance Maladie, de la Mutualité Française, du Groupe VYV et d'Oxance.

Le périmètre fonctionnel annoncé est celui d'un logiciel de gestion complet :

- **Le conventionnel.** La télétransmission figure parmi les fonctions listées, et la page Veasy de Cegedim Santé affiche les logos d'agrément AppSV, ADRi, IMTi, INSI, DMP, OrdoNum et TPAMC. La gestion du tiers payant y a sa propre rubrique, associée au rapprochement bancaire automatique.
- **Le clinique.** Dossiers patients, schéma dentaire, orthodontie, gestion de la traçabilité, et sur la page des avantages un module de stérilisation ainsi que les demandes d'entente préalable.
- **Le cabinet.** Agenda et prise de rendez-vous en ligne "accessible 24h/24 et 7j/7", rappels automatiques, questionnaires médicaux à distance, enquêtes de satisfaction après rendez-vous, gestion des stocks, statistiques et signature électronique.
- **L'intelligence artificielle.** La page cabinet annonce un "schéma dentaire initial pré-rempli automatiquement" et une "proposition de traitement instantanée".

L'hébergement est la partie la plus intéressante à lire de près, parce que c'est exactement le sujet de cette comparaison. La page Veasy indique que "vos données sont stockées en France sur des serveurs agréés par le Ministère de la santé", et la page des avantages ajoute une duplication dans un second data center.

De là découle une promesse que nous ne faisons pas : "plus de mise a jour à installer" et "plus de sauvegarde des données à réaliser". Pour un cabinet sans informaticien, ces deux phrases valent cher, et il faut le dire sans le tordre.

> **Veasy ne publie aucun tarif.** Aucune des pages consultées le 12 août 2026, chez Veasy, chez Visiodent ou chez Cegedim Santé, ne donne de prix, de palier ni d'ordre de grandeur. Le parcours passe par une démonstration puis un devis, donc le coût ne se connaît qu'après avoir parlé à un commercial.

Deux points de contexte qu'un cabinet qui compare aujourd'hui doit avoir en tête.

> **Veasy appartient au groupe Cegedim depuis février 2024.** Le communiqué de Cegedim daté du 15 février 2024 annonce l'acquisition du groupe Visiodent, décrit Veasy comme "the first 100% SaaS solution for dental practices and health clinics", cite parmi ses clients "the country's largest nationwide networks of health clinics (VYV, CNAM, Oxance, Dentégo, etc.)" et indique que l'ensemble équipe désormais plus de 1 000 centres de santé. Les sites portent la mention "Visiodent Cegedim Santé".

Les logiciels historiques de l'éditeur, L100 et L500, existent toujours et gardent leurs adresses de support dédiées. Visiodent annonce aux cabinets qui en viennent une bascule vers Veasy "sans frais", avec reprise automatique des dossiers patients, des actes, des observations, des schémas dentaires, des documents scannés, des soldes patients et des agendas.

## Ce qu'est Dentalpin

Dentalpin est publié sous Business Source License 1.1 : lisible, forkable, gratuit en auto-hébergement, et quatre ans après chaque version le code bascule automatiquement en Apache 2.0. L'installation se fait avec un `docker compose` sur votre serveur, chez l'hébergeur de votre choix ou sur une machine du cabinet, et l'application s'utilise dans un navigateur comme Veasy.

Le socle comprend agenda, patients, odontogramme, dossier clinique, devis, facturation, radios et imagerie. S'y ajoutent les rappels automatiques, l'espace patient, le multi-cabinet, WhatsApp comme canal de notification, et un agent IA qui exécute les mêmes opérations que l'interface et s'arrête pour demander confirmation avant chaque écriture.

![Dossier patient avec odontogramme, alertes cliniques, plan de traitement en cours et prochain rendez-vous](/screenshots/dental-chart.png)

*Le dossier patient et son odontogramme. L'interface du cabinet de démonstration est en espagnol, comme le reste de l'application aujourd'hui.*

Ce qui n'existe pas côté français, et qui compte davantage ici que partout ailleurs dans cette comparaison :

- **Aucune télétransmission de feuilles de soins électroniques.** Pas de SESAM-Vitale, pas d'ADRi, pas d'INS.
- **Aucune gestion du tiers payant ni de la CCAM.** Le seul module fiscal livré est Verifactu, et il est espagnol.
- **Aucun module de stérilisation ni d'ordonnancier certifié.**
- **Pas d'interface en français aujourd'hui.** L'application existe en anglais et en espagnol, la traduction est ouverte comme contribution de la communauté ([issue sur le dépôt](https://github.com/martinezsalmeron/dentalpin/labels/i18n)) et elle n'est pas livrée.

En nous appliquant la règle que nous appliquons à Veasy, voici notre tarif tel qu'il est publié : l'auto-hébergement est gratuit et le produit y est entier, sans palier ni module bridé. L'offre gérée, où nous installons et surveillons l'instance sur un serveur souscrit à votre nom, est sur devis, et le serveur chez Hetzner coûte environ 16 € par mois. Le détail tient sur la [page des tarifs](/fr/tarifs/).

## Face à face

| | Veasy | Dentalpin |
|---|---|---|
| Modèle | Licence commerciale | Open source (BSL 1.1) |
| Déploiement | "système 100% Cloud", pas d'installation locale | Votre serveur, `docker compose` |
| Tarif publié | ✗ Aucun prix sur les sites de l'éditeur | ✓ 0 €, tout compris en auto-hébergement |
| Télétransmission | ✓ Listée dans les fonctions | ✗ Absente |
| Agréments affichés | ✓ AppSV, ADRi, IMTi, INSI, DMP, OrdoNum, TPAMC | ✗ Aucun |
| Tiers payant | ✓ Rubrique dédiée, avec rapprochement bancaire | ✗ Absent |
| Stérilisation et traçabilité | ✓ Module annoncé | ✗ Absent |
| Orthodontie | ✓ Module annoncé | ~ Suivi dans le dossier, sans module dédié |
| Hébergement | ✓ Data center agréé par le ministère, dupliqué | ~ Le vôtre, selon votre choix |
| Sauvegardes et mises à jour | ✓ "Plus de sauvegarde des données à réaliser" | ✗ À votre charge |
| Interface en français | ✓ Oui | ✗ Non, anglais et espagnol aujourd'hui |
| Ancienneté de l'éditeur | ✓ Groupe créé en 1983 | ✗ Depuis 2026 |
| Base installée | ✓ "plus de 7000 utilisateurs" | ✗ Depuis 2026 |
| Code source | ✗ Non publié | ✓ Sur GitHub, en entier |
| API publique | ~ Non documentée sur les pages publiques | ✓ REST, documentée en OpenAPI |
| Où sont les données | ~ Chez l'éditeur, en France | ✓ Sur votre serveur, toujours |

## Choisissez Veasy si

- **Vous télétransmettez depuis le logiciel de gestion.** C'est la raison numéro un, et elle suffit à elle seule. Nous ne couvrons pas cette partie et nous n'annonçons pas de date.
- **Le tiers payant occupe vos journées.** Un centre de santé ou un cabinet à fort volume de tiers payant a besoin d'une chaîne complète, du flux au rapprochement bancaire, et Veasy en fait un argument central.
- **Vous ne voulez pas de serveur, ni de près ni de loin.** "Plus de mise a jour à installer" et "plus de sauvegarde des données à réaliser" décrivent honnêtement ce que vous achetez : quelqu'un d'autre s'en occupe, dans un data center agréé, avec une copie ailleurs.
- **Vous gérez un centre de santé ou un réseau.** Le produit est né avec cette clientèle et le communiqué de Cegedim la met en avant nommément. Notre multi-cabinet existe, notre expérience des grands réseaux non.
- **Vous voulez un éditeur adossé à un groupe.** Depuis février 2024, il y a Cegedim derrière, avec la force commerciale et la longévité que cela implique. C'est un critère parfaitement rationnel et nous ne pouvons pas le cocher.
- **Il vous faut une interface en français dès demain matin.** La nôtre ne l'est pas encore.

## Choisissez Dentalpin si

- **Le conventionnel passe déjà ailleurs.** Cabinet non conventionné, activité majoritairement hors nomenclature, ou télétransmission gérée par un autre outil : le principal argument de Veasy ne vous concerne alors plus.
- **Vous voulez savoir combien ça coûte avant d'appeler quelqu'un.** Notre page tarifs est publique et courte, la leur n'existe pas.
- **Vous voulez que les données restent sur une machine que vous contrôlez.** Chez eux elles sont en France et bien gardées, mais chez eux. Chez nous elles sont là où vous avez installé le logiciel, et l'export complet est une fonction, pas une négociation.
- **Vous voulez lire le code, ou brancher autre chose dessus.** Le dépôt est public et l'API REST est documentée en OpenAPI, donc un laboratoire, un outil de comptabilité ou un script maison s'y connectent sans demander l'autorisation.
- **Vous avez déjà quelqu'un pour le serveur.** C'est la contrepartie exacte de la ligne précédente, et elle ne se contourne pas.

![Liste de factures avec les états émise, payée, partiellement payée, en retard et brouillon](/screenshots/invoices.png)

*La facturation fonctionne avec des séries configurables et des paiements partiels. La télétransmission n'est pas couverte.*

## Comment se passe une migration

Si vous venez de Veasy, la première étape n'est pas technique : elle consiste à récupérer vos données. Le reste suit un chemin balisé.

1. **Demandez votre export à l'éditeur** en vous appuyant sur votre droit à la portabilité (RGPD, article 20). Réclamez un format ouvert, CSV ou XML, et pas un PDF par patient.
2. **Décidez d'abord qui télétransmet** à partir du jour de la bascule. Cette partie ne se déplace pas avec les données et c'est le point qui doit être tranché avant tout le reste.
3. **Installez Dentalpin** avec un `docker compose`, sur votre serveur ou chez un hébergeur. Le parcours complet tient dans [ce guide](/fr/blog/installer-dentalpin-en-trois-minutes/).
4. **Chargez l'export dans le module d'import** (`migration_import`). Il affiche un aperçu avec les compteurs avant d'écrire quoi que ce soit.
5. **Vérifiez la correspondance des actes ligne par ligne.** Ce qui dépasse 0,9 s'accepte en bloc, le reste se tranche à la main. C'est l'étape où les migrations échouent.
6. **Comparez les compteurs** des deux systèmes : patients, factures, rendez-vous à venir.
7. **Gardez l'ancien système accessible** tant que vous n'êtes pas sûr. Le parcours détaillé est dans [ce guide](/fr/blog/migrer-logiciel-dentaire/).

## Sources

Sauf mention contraire, toutes consultées le 12 août 2026.

- Déploiement "100% Cloud", fonctions listées, schéma dentaire, tiers payant, stocks, traçabilité, orthodontie, télétransmission et fonctions d'IA : [veasy-solution.com/solution-pour-cabinet-dentaire-v3](https://www.veasy-solution.com/solution-pour-cabinet-dentaire-v3/)
- Hébergement en data center agréé par le ministère de la santé, duplication, absence de mise à jour et de sauvegarde à réaliser, stérilisation, entente préalable et reprise des données : [veasy-solution.com/avantages-veasy](https://www.veasy-solution.com/avantages-veasy/)
- Éditeur Visiodent S.A., adresse à Clichy et directeur de publication : [veasy-solution.com/mentions-legales](https://www.veasy-solution.com/mentions-legales/)
- "Plus de 7000 utilisateurs", "100% cloud", accès Mac, PC, tablette et smartphone, données stockées en France, bascule sans frais depuis L100 et L500 : [visiodent.com/veasy](https://www.visiodent.com/veasy/)
- Formule "logiciel n°1 des cabinets dentaires et centres de santé 100% cloud" et logos clients : [visiodent.com/veasy-notre-solution-de-gestion-cloud](https://www.visiodent.com/veasy-notre-solution-de-gestion-cloud/)
- Création du groupe en 1983, introduction en Bourse en 1999 et lancement de Veasy en 2018 : [visiodent.com/le-groupe-visiodent](https://www.visiodent.com/le-groupe-visiodent/)
- Logos d'agrément AppSV, ADRi, IMTi, INSI, DMP, OrdoNum et TPAMC sur la fiche produit : [cegedim-sante.com, solutions web, Veasy](https://www.cegedim-sante.com/solutions-sante-cegedim/solutions-web/veasy/)
- Acquisition du groupe Visiodent par Cegedim, annoncée le 15 février 2024, et citations en anglais : [communiqué Cegedim du 15 février 2024 (PDF)](https://www.cegedim.com/Communique/Cegedim_Visiodent_15022024_ENG.pdf)
- Licence, modules et prix de Dentalpin : [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) et [page des tarifs](/fr/tarifs/)

Il manque quelque chose, ou quelque chose a changé chez Veasy et nous est passé sous le nez ? [Écrivez-nous](https://github.com/martinezsalmeron/dentalpin/discussions) : nous corrigeons le texte et nous disons ce que nous avons changé.
