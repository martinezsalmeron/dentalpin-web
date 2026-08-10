---
title: "Dentalpin face à LOGOSw : ce que chacun couvre dans un cabinet français"
description: "Comparatif LOGOSw et Dentalpin : CCAM, ADRi, stérilisation, Windows, tarifs publiés et propriété des données. Sources logosw.net, consultées le 10 août 2026."
pubDate: 2026-08-10
tags: [comparatif, logosw, logiciel-dentaire]
---

Si votre cabinet télétransmet et attend du logiciel qu'il gère la CCAM, LOGOSw le fait et Dentalpin non. Cette page existe pour les cabinets dont la partie conventionnelle passe déjà ailleurs, et pour ceux que la question du système d'exploitation et de la propriété du code intéresse davantage.

> **Tout ce qui est dit ici de LOGOSw vient de logosw.net**, consulté le 10 août 2026, avec les URL en bas de page. Ce que l'éditeur ne publie pas ne figure pas ici. Les sites comparateurs ont été écartés volontairement : ils se contredisent entre eux et aucun d'eux n'est LOGOSw.

## En trente secondes

**LOGOSw est un logiciel français profondément conventionné, et c'est sa force.** Son site revendique le titre de "premier logiciel agréé pour la CCAM dentaire", intègre le téléservice ADRi pour récupérer les droits des patients, embarque un ordonnancier certifié interfacé VIDAL Expert ou Base Claude Bernard, un module de stérilisation, une comptabilité qui sort la 2035 et le SNIR, et une liste de systèmes d'imagerie longue comme le bras.

**Dentalpin est open source et vit sur votre serveur.** Le code est publié, l'installation se fait avec un `docker compose`, l'auto-hébergement est gratuit, et tout ce que fait l'interface passe par la même API documentée. Côté clinique il est complet : agenda, patients, odontogramme, dossier clinique, devis, facturation, radios et imagerie.

**La question qui tranche : qui gère le conventionnel ?** Si la réponse doit être le logiciel, c'est LOGOSw aujourd'hui et pas nous. Si cette partie est déjà réglée, la suite vous concerne, et la deuxième question devient celle du système d'exploitation.

## Ce qu'est LOGOSw

LOGOSw est édité par IMAGEX, société à responsabilité limitée immatriculée au RCS de Paris sous le numéro B 408 950 475, dont les mentions légales donnent une adresse rue Vavin à Paris et désignent M. Denis Canevet comme représentant légal. La distribution et le support sont annoncés à Liffré, en Ille-et-Vilaine.

Sa page produit décrit un parti pris qui mérite d'être souligné, parce qu'il est rare sur ce marché : le logiciel "existe en une seule version paramétrable selon votre activité". Pas de palier Easy, Pro et Multicentre, pas de fonction réservée à l'édition supérieure. Ce que vous installez est le produit entier, réglé selon votre activité.

Le reste de la page énumère des modules "interconnectés" : dossier patient avec fiches de prothèse, bilans de santé, parodontologie, pathologie temporo-mandibulaire et dermatologie buccale ; agenda "multi praticiens, multi salles" synchronisé avec Google Calendar ; éditeur de courriers avec messagerie sécurisée MSSanté ; matériovigilance et gestion de stock ; statistiques d'activité.

![Dossier patient avec odontogramme, alertes cliniques, plan de traitement en cours et prochain rendez-vous](/screenshots/dental-chart.png)

*Le dossier patient dans Dentalpin, avec l'odontogramme. L'interface de la clinique de démonstration est en espagnol, comme le reste de l'application aujourd'hui.*

Quatre points sont difficiles à répliquer et il vaut mieux les nommer tout de suite :

- **La CCAM.** Leur page dédiée annonce "LOGOSw, premier logiciel agréé pour la CCAM dentaire", rappelle que la nomenclature "comporte plus de 700 codes courants", et décrit un contrôle automatique des conditions de remboursement des soins, des bridges et des couronnes ainsi que des conditions spécifiques aux patients CMU-C ou ACS. L'édition d'une feuille de soins y est annoncée en "un clic et quelques secondes".
- **ADRi.** Le service est présenté comme "un téléservice intégré à LOGOSw, qui vise à récupérer dans LOGOSw les droits des patients directement depuis les serveurs de la Sécurité Sociale", et la page précise qu'il "est gratuit (vous ne payez que l'accès à Internet) et n'entraine aucune obligation supplémentaire".
- **L'ordonnancier.** "LOGOSw LAP" est annoncé certifié et interfacé avec deux bases médicamenteuses au choix, VIDAL Expert ou la Base Claude Bernard.
- **La stérilisation.** Le module est décrit comme "devenue une référence en matière de traçabilité", avec interface autoclave et gestion des cycles de péremption.

Sur l'imagerie, la page produit liste Sidexis, Digora, KaVo Gendex, Dexis, Carestream-Kodak, Planmeca et 3Shape, et ajoute que "les standards DICOM et Twain sont également supportés". Dans un cabinet déjà équipé, cette liste décide parfois seule.

L'intelligence artificielle est annoncée sans supplément : "les fonctionnalités d'IA sont disponibles dans LOGOSw sans surcoût. Vous n'avez aucune option à activer", pour de la génération de documents par dictée et du compte rendu de consultation assisté. La page ajoute que "les données personnelles de vos patients ne sont jamais transmises à l'IA".

Un point de déploiement, à lire avant tout le reste : la page de configuration recommandée indique que "LOGOSw fonctionne sur les systèmes d'exploitation suivants : Windows 8, Windows 10, Windows 11". En réseau, "il est impératif d'utiliser le même système d'exploitation sur tous les postes clients", le serveur peut être un PC Windows ou un NAS de gamme Synology, et au delà de 35 postes la page renvoie vers l'éditeur. C'est un logiciel de poste, sur votre réseau, pas une application web.

> **LOGOSw ne publie aucun tarif pour son logiciel.** Le seul prix trouvé sur le site le 10 août 2026 concerne un service annexe, le site internet du cabinet, à "25 euros TTC/mois" nom de domaine et hébergement compris. Leur FAQ évoque par ailleurs une "récente évolution tarifaire" intervenue "après plus de deux ans sans ajustement", sans jamais donner le montant de départ. Concrètement, le coût ne se connaît qu'après un devis.

Deux choses ont changé chez eux récemment et un cabinet qui compare aujourd'hui doit les avoir en tête.

> **LOGOSw a racheté Julie.** Leur FAQ, intitulée "LOGOSw se renforce à vos côtés", pose elle-même la question "Pourquoi LOGOSw a racheté Julie ?" et annonce que "LOGOSw conserve son identité, son ergonomie et ses principes de fonctionnement", que "le logiciel JULIE reste maintenu et continue d'évoluer", et que le support reste "basé en France". Le groupe publie aussi une solution cloud, JULiA, vers laquelle la transition "n'est pas obligatoire".

Sur la facturation électronique, enfin, leur position est explicite et honnête : "LOGOSw reste centré sur la gestion clinique et administrative du cabinet. La gestion des flux de facturation et de reporting électroniques sera assurée par des plateformes spécialisées agréées." Leur page rappelle les échéances de réception en septembre 2026 et d'émission en septembre 2027, et note que les actes à visée thérapeutique étant exonérés de TVA, les factures aux patients ne sont pas concernées.

## Ce qu'est Dentalpin

Dentalpin est publié sous Business Source License 1.1 : lisible, forkable, gratuit en auto-hébergement, et quatre ans après chaque version le code bascule automatiquement en Apache 2.0. L'installation se fait avec un `docker compose` sur votre serveur, chez l'hébergeur de votre choix ou sur une machine du cabinet, et l'application s'utilise dans un navigateur, donc depuis Windows, macOS ou Linux indifféremment.

Le socle comprend agenda, patients, odontogramme, dossier clinique, devis, facturation, radios et imagerie. S'y ajoutent les rappels automatiques, l'espace patient, le multi-cabinet, WhatsApp comme canal de notification, et un agent IA qui exécute les mêmes opérations que l'interface et s'arrête pour demander confirmation avant chaque écriture. Aucun coût par fauteuil, par praticien ni par patient.

Nous appliquant la règle que nous appliquons à LOGOSw, voici notre tarif tel qu'il est publié : l'auto-hébergement est gratuit et le produit y est entier, sans module bridé ; l'offre gérée, où nous installons et surveillons l'instance sur un serveur souscrit à votre nom, est sur devis, et le serveur chez Hetzner coûte environ 16 € par mois. Le détail tient sur la [page des tarifs](/fr/tarifs/).

Ce qui n'existe pas en France aujourd'hui, et qui doit se lire ici plutôt qu'après la signature :

- **Aucune télétransmission de feuilles de soins électroniques.** Pas de SESAM-Vitale, pas d'ADRi, pas d'INS.
- **Aucune gestion de la CCAM ni du conventionnel.** Le seul module fiscal livré est Verifactu, et il est espagnol.
- **Aucun ordonnancier certifié**, aucune base médicamenteuse interfacée.
- **Aucun module de stérilisation** ni de traçabilité d'autoclave.
- **Aucune comptabilité** : ni 2035, ni SNIR, ni export FEC.

Et l'interface n'existe aujourd'hui qu'en anglais et en espagnol, pas en français. La traduction est ouverte comme contribution de la communauté ([issue sur le dépôt](https://github.com/martinezsalmeron/dentalpin/labels/i18n)), mais elle n'est pas livrée.

![Un devis avec le détail des traitements, les totaux, la validité et le plan de traitement associé](/screenshots/budgets.png)

*Un devis dans Dentalpin. Le modèle de devis conventionnel obligatoire en France n'est pas fourni.*

## Face à face

| | LOGOSw | Dentalpin |
|---|---|---|
| Modèle | Licence commerciale | Open source (BSL 1.1, puis Apache 2.0 au bout de quatre ans) |
| Système d'exploitation | ✗ Windows 8, 10 et 11 uniquement | ✓ Navigateur, sur Windows, macOS ou Linux |
| Déploiement | Postes du cabinet, serveur Windows ou NAS | Votre serveur, votre hébergeur, ou une machine du cabinet |
| Tarif du logiciel publié | ✗ Aucun sur le site | ~ Auto-hébergement gratuit, offre gérée sur devis |
| CCAM et feuilles de soins | ✓ "Premier logiciel agréé pour la CCAM dentaire" | ✗ Absent |
| Droits patient (ADRi) | ✓ Téléservice intégré, annoncé gratuit | ✗ Absent |
| Ordonnance numérique | ✓ LAP certifié, VIDAL Expert ou Base Claude Bernard | ✗ Absent |
| Stérilisation | ✓ Module intégré avec interface autoclave | ✗ Absent |
| Comptabilité | ✓ 2035, SNIR et export FEC | ✗ Absent |
| Messagerie MSSanté | ✓ Intégrée à l'éditeur de courriers | ✗ Absent |
| Imagerie | ✓ Sept systèmes cités, plus DICOM et Twain | ~ Radios et imagerie dans le socle, sans liste publiée |
| IA | ✓ Annoncée incluse sans surcoût | ✓ Incluse, confirmation demandée avant chaque écriture |
| Découpage en éditions | ✓ "Une seule version paramétrable" | ✓ Produit entier, sans module bridé |
| Où vivent les données | ✓ Sur votre réseau, jusqu'à 35 postes | ✓ Sur votre serveur, toujours |
| Ancienneté | ✓ Trente ans annoncés | ✗ Depuis 2026 |
| Interface en français | ✓ Oui | ✗ Non, anglais et espagnol |
| Code source | ✗ Non | ✓ Publié sur GitHub, en entier |
| API publique | ~ Non documentée publiquement, HL7 et HPRIM annoncés | ✓ REST, documentée en OpenAPI |

Deux lignes méritent une précision. "Non documentée publiquement" dit exactement cela et rien de plus : nous ne l'avons pas trouvée sur les pages que nous avons lues, et LOGOSw annonce par ailleurs une compatibilité HL7 et HPRIM. Et la ligne sur les données est une vraie parité : LOGOSw n'est pas un logiciel qui héberge votre base chez lui, elle reste sur votre réseau, exactement comme chez nous.

## Choisissez LOGOSw si

- **Vous télétransmettez et vous cotez en CCAM.** C'est le quotidien d'un cabinet conventionné, ils l'annoncent en tête de leur site et nous ne le faisons pas. C'est la première raison d'existence de ce comparatif.
- **Vous voulez ADRi dans le logiciel.** Récupérer les droits d'un patient depuis les serveurs de l'Assurance Maladie évite une part des rejets, et cette étape ne se remplace pas à la main.
- **Vous prescrivez.** Un LAP certifié interfacé VIDAL Expert ou Base Claude Bernard est un cadre réglementaire que nous ne couvrons pas du tout.
- **Vous voulez la stérilisation et la comptabilité dans le même outil.** Traçabilité d'autoclave, 2035, SNIR et export FEC : c'est trois logiciels de moins à faire dialoguer.
- **Votre parc d'imagerie est déjà installé.** Sept systèmes nommés plus DICOM et Twain, c'est une liste que peu d'éditeurs affichent.
- **Vous voulez une interface en français et une hotline française.** Nous avons GitHub et une interface en anglais et en espagnol.

Si trois de ces six points vous concernent, la réponse honnête est LOGOSw. Nous préférerions être la réponse à tout, mais en France aujourd'hui nous ne le sommes pas.

## Choisissez Dentalpin si

- **Vous ne voulez pas être tenu par Windows.** Trente-cinq postes qui doivent tous porter le même système d'exploitation, c'est un plan de renouvellement de parc autant qu'un choix de logiciel. Chez nous, c'est un navigateur.
- **La propriété du code compte autant que celle des données.** Vos données sont déjà chez vous dans les deux cas. Ce qui change, c'est que le code se lit, se vérifie et continue de tourner même si nous disparaissons.
- **La partie conventionnelle passe déjà ailleurs**, et ce que vous attendez du logiciel clinique, c'est le clinique.
- **Vous voulez intégrer.** Tout ce que fait l'interface passe par la même API REST documentée en OpenAPI. Pas de ticket, pas d'autorisation, pas de licence supplémentaire.
- **Il vous manque une fonction.** Vous pouvez la construire, et elle reste en place après une mise à jour.

> **Essayez avant de résilier quoi que ce soit.** La démo s'ouvre sans inscription et sans laisser d'email, et une installation à vous tient debout en [trois minutes](/fr/blog/installer-dentalpin-en-trois-minutes/). L'erreur coûteuse n'est pas de changer de logiciel : c'est d'en changer sans avoir testé la reprise sur une copie.

## Comment se passe vraiment la migration

1. **Demandez l'export complet à votre éditeur actuel** avant de résilier : patients, dossiers cliniques, devis, factures avec leur numérotation, images et catalogue des actes.
2. **Tranchez d'abord la question du conventionnel.** Décidez qui télétransmet et qui cote en CCAM à partir du jour de la bascule, parce que cette partie ne se déplace pas avec les données.
3. **Installez Dentalpin sur un environnement de test**, pas sur celui avec lequel vous comptez travailler ensuite.
4. **Chargez l'export dans le module d'import** (`migration_import`). Il affiche un aperçu avec les compteurs avant d'écrire quoi que ce soit.
5. **Vérifiez la correspondance des actes ligne par ligne.** Ce qui dépasse 0,9 s'accepte en bloc, le reste se tranche à la main. C'est l'étape où les migrations échouent.
6. **Comparez les compteurs** des deux systèmes : patients, factures, rendez-vous à venir.
7. **Gardez l'ancien système en lecture seule** tant que vous n'êtes pas sûr. Le parcours complet est dans [ce guide](/fr/blog/migrer-logiciel-dentaire/).

![Liste de factures avec les états émise, payée, partiellement payée, en retard et brouillon](/screenshots/invoices.png)

*La facturation fonctionne avec des séries configurables et des paiements partiels. La télétransmission n'est pas couverte.*

## Sources

Toutes consultées le 10 août 2026.

- Version unique, modules, dossier patient, agenda, imagerie, courriers et MSSanté, stérilisation, comptabilité, LOGOSw LAP, HL7 et HPRIM : [logosw.net/logiciel-dentaire](https://www.logosw.net/logiciel-dentaire/)
- "Premier logiciel agréé 100% Santé, EBDi…" et présentation générale : [logosw.net](https://www.logosw.net/)
- "Premier logiciel agréé pour la CCAM dentaire", 700 codes, contrôles de remboursement et feuille de soins : [logosw.net/ccam-dentaire](https://www.logosw.net/ccam-dentaire/)
- ADRi, téléservice intégré et gratuité annoncée : [logosw.net/adri-acquisition-droits-integree](https://www.logosw.net/adri-acquisition-droits-integree/)
- Windows 8, 10 et 11, réseau homogène, NAS Synology et limite de 35 postes : [logosw.net/configuration-recommandee](https://www.logosw.net/configuration-recommandee/)
- IA incluse sans surcoût et traitement des données personnelles : [logosw.net/ia](https://www.logosw.net/ia/)
- Rachat de Julie, maintien du logiciel JULIE, solution JULiA, support en France et évolution tarifaire : [logosw.net/faq](https://www.logosw.net/faq/)
- Facturation électronique, échéances de septembre 2026 et 2027, périmètre annoncé : [logosw.net/facturation-electronique](https://www.logosw.net/facturation-electronique/)
- Site internet du cabinet à 25 euros TTC par mois : [logosw.net/site-web](https://www.logosw.net/site-web/)
- Éditeur IMAGEX, RCS Paris B 408 950 475 : [logosw.net/mentions-legales](https://www.logosw.net/mentions-legales/)
- Licence, modules et tarifs de Dentalpin : [github.com/martinezsalmeron/dentalpin](https://github.com/martinezsalmeron/dentalpin) et [dentalpin.com/fr/tarifs](/fr/tarifs/)

Il manque quelque chose, ou quelque chose a changé chez LOGOSw et nous est passé sous le nez ? [Écrivez-nous](https://github.com/martinezsalmeron/dentalpin/discussions) : nous corrigeons le texte et nous disons ce que nous avons changé.
